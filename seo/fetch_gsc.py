#!/usr/bin/env python3
"""Pull Search Console performance data and persist it, partitioned by month.

Google keeps 16 months and the UI aggregates away the detail you need.
This builds your own longitudinal table: (date, page, query, device).
Without it nothing downstream can learn anything.

Run weekly. It always re-fetches a trailing window because GSC finalises
data with a lag of roughly two to three days, and it deduplicates on the
full key, so re-running is safe and idempotent.

Auth: service account JSON in the GSC_SERVICE_ACCOUNT_JSON env var, with the
account added as a user on each property in Search Console.

Deps: google-api-python-client google-auth pandas pyarrow
"""

from __future__ import annotations

import datetime as dt
import json
import os
import pathlib
import sys

import pandas as pd
from google.oauth2 import service_account
from googleapiclient.discovery import build

SITES = {
    # URL-prefix property, as verified in Search Console for this repo.
    "aicareer.me": "https://aicareer.me/",
}

DIMENSIONS = ["date", "page", "query", "device"]
DATA_DIR = pathlib.Path(__file__).resolve().parent.parent / "data" / "gsc"
ROW_LIMIT = 25_000
FINALISATION_LAG_DAYS = 3
TRAILING_REFETCH_DAYS = 10
BACKFILL_DAYS = 480  # first run: grab everything GSC still holds


def client():
    raw = os.environ.get("GSC_SERVICE_ACCOUNT_JSON")
    if not raw:
        sys.exit("GSC_SERVICE_ACCOUNT_JSON is not set")
    creds = service_account.Credentials.from_service_account_info(
        json.loads(raw),
        scopes=["https://www.googleapis.com/auth/webmasters.readonly"],
    )
    return build("searchconsole", "v1", credentials=creds, cache_discovery=False)


def query_range(api, property_uri: str, start: dt.date, end: dt.date) -> pd.DataFrame:
    """Page through the API until it stops returning full pages."""
    rows, offset = [], 0
    while True:
        body = {
            "startDate": start.isoformat(),
            "endDate": end.isoformat(),
            "dimensions": DIMENSIONS,
            "rowLimit": ROW_LIMIT,
            "startRow": offset,
            "dataState": "final",
        }
        resp = (
            api.searchanalytics()
            .query(siteUrl=property_uri, body=body)
            .execute()
        )
        batch = resp.get("rows", [])
        rows.extend(batch)
        if len(batch) < ROW_LIMIT:
            break
        offset += ROW_LIMIT
        if offset > 500_000:
            print(f"  ! hit the pagination cap for {property_uri}", file=sys.stderr)
            break

    if not rows:
        return pd.DataFrame(columns=DIMENSIONS + ["clicks", "impressions", "ctr", "position"])

    df = pd.DataFrame(
        [
            dict(zip(DIMENSIONS, r["keys"]))
            | {
                "clicks": r["clicks"],
                "impressions": r["impressions"],
                "ctr": r["ctr"],
                "position": r["position"],
            }
            for r in rows
        ]
    )
    df["date"] = pd.to_datetime(df["date"]).dt.date
    return df


def existing_max_date(site_dir: pathlib.Path):
    files = sorted(site_dir.glob("*.parquet"))
    if not files:
        return None
    tail = pd.read_parquet(files[-1], columns=["date"])
    return tail["date"].max() if len(tail) else None


def persist(site_dir: pathlib.Path, df: pd.DataFrame) -> None:
    """Merge into month partitions, deduplicating on the full dimension key."""
    site_dir.mkdir(parents=True, exist_ok=True)
    df = df.copy()
    df["_month"] = pd.to_datetime(df["date"]).dt.strftime("%Y-%m")

    for month, chunk in df.groupby("_month"):
        chunk = chunk.drop(columns="_month")
        path = site_dir / f"{month}.parquet"
        if path.exists():
            chunk = pd.concat([pd.read_parquet(path), chunk], ignore_index=True)
        # keep=last: the fresher pull wins for any re-fetched day
        chunk = chunk.drop_duplicates(subset=DIMENSIONS, keep="last")
        chunk = chunk.sort_values(DIMENSIONS)
        chunk.to_parquet(path, index=False, compression="zstd")
        print(f"  {path.name}: {len(chunk):,} rows")


def main() -> None:
    api = client()
    end = dt.date.today() - dt.timedelta(days=FINALISATION_LAG_DAYS)

    for site, property_uri in SITES.items():
        site_dir = DATA_DIR / site
        seen = existing_max_date(site_dir)
        if seen is None:
            start = end - dt.timedelta(days=BACKFILL_DAYS)
            print(f"{site}: no history, backfilling from {start}")
        else:
            start = seen - dt.timedelta(days=TRAILING_REFETCH_DAYS)
            print(f"{site}: incremental from {start}")

        if start > end:
            print(f"{site}: nothing to fetch")
            continue

        df = query_range(api, property_uri, start, end)
        if df.empty:
            print(f"{site}: API returned no rows")
            continue
        persist(site_dir, df)


if __name__ == "__main__":
    main()
