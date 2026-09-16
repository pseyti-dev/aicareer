#!/usr/bin/env python3
"""Close the loop: read the ledger, measure what actually happened, write verdicts.

This is the part almost nobody builds, and its absence is why "autonomous SEO"
claims are unfalsifiable. An experiment that is never evaluated taught you
nothing, no matter how good the hypothesis sounded.

Method:
  baseline  = [deployed - baseline_window, deployed)
  measured  = [deployed + settle_days, deployed + settle_days + eval_window)

  lift_treatment = (measured - baseline) / baseline
  lift_control   = same, on the untouched cohort
  effect         = lift_treatment - lift_control      (difference-in-differences)

With no control cohort the effect is just lift_treatment, which cannot separate
your change from seasonality or an algorithm update. The report says so.

For `position`, lower is better, so the sign is flipped before comparison.

Verdicts:
  confounded    an invalidating event overlaps the measurement window
  inconclusive  either window is below min_impressions
  confirmed     effect >=  min_effect
  harmful       effect <= -min_effect
  refuted       everything in between

Run monthly, after fetch_gsc.py.

Deps: pandas pyarrow pyyaml
"""

from __future__ import annotations

import datetime as dt
import pathlib
import sys

import pandas as pd
import yaml

ROOT = pathlib.Path(__file__).resolve().parent
DATA_DIR = ROOT.parent / "data" / "gsc"
LEDGER = ROOT / "ledger.yaml"
EVENTS = ROOT / "events.yaml"
REPORT = ROOT / "reports"

LOWER_IS_BETTER = {"position"}


def load_site(site: str) -> pd.DataFrame:
    files = sorted((DATA_DIR / site).glob("*.parquet"))
    if not files:
        return pd.DataFrame()
    df = pd.concat([pd.read_parquet(f) for f in files], ignore_index=True)
    df["date"] = pd.to_datetime(df["date"]).dt.date
    df["path"] = df["page"].str.replace(r"^https?://[^/]+", "", regex=True)
    return df


def aggregate(df: pd.DataFrame, paths: list[str], start: dt.date, end: dt.date,
              metric: str, query_filter: str | None) -> tuple[float | None, int]:
    """Return (metric value, impressions) for a cohort over a window."""
    sel = df[df["path"].isin(paths) & (df["date"] >= start) & (df["date"] < end)]
    if query_filter:
        sel = sel[sel["query"].str.contains(query_filter, case=False, na=False)]
    if sel.empty:
        return None, 0

    impressions = int(sel["impressions"].sum())
    clicks = int(sel["clicks"].sum())

    if metric == "clicks":
        value = float(clicks)
    elif metric == "impressions":
        value = float(impressions)
    elif metric == "ctr":
        value = clicks / impressions if impressions else 0.0
    elif metric == "position":
        # impression-weighted, which is what the raw average is not
        value = float((sel["position"] * sel["impressions"]).sum() / impressions)
    else:
        raise ValueError(f"unsupported metric {metric}")

    return value, impressions


def relative_lift(before: float | None, after: float | None, metric: str) -> float | None:
    if before is None or after is None or before == 0:
        return None
    lift = (after - before) / abs(before)
    return -lift if metric in LOWER_IS_BETTER else lift


def confounding_event(events: list[dict], site: str,
                      start: dt.date, end: dt.date) -> str | None:
    for ev in events:
        if not ev.get("invalidates"):
            continue
        if ev.get("scope") not in ("all", site):
            continue
        if ev["date_end"] < start or ev["date_start"] >= end:
            continue
        return ev.get("label", "unlabelled event")
    return None


def evaluate(exp: dict, df: pd.DataFrame, events: list[dict]) -> dict:
    deployed = exp["deployed"]
    metric = exp["primary_metric"]
    qf = exp.get("query_filter")

    base_start = deployed - dt.timedelta(days=exp["baseline_window"])
    meas_start = deployed + dt.timedelta(days=exp["settle_days"])
    meas_end = meas_start + dt.timedelta(days=exp["eval_window"])

    t_before, t_before_imp = aggregate(df, exp["treatment"], base_start, deployed, metric, qf)
    t_after, t_after_imp = aggregate(df, exp["treatment"], meas_start, meas_end, metric, qf)

    control = exp.get("control") or []
    c_lift = None
    if control:
        c_before, _ = aggregate(df, control, base_start, deployed, metric, qf)
        c_after, _ = aggregate(df, control, meas_start, meas_end, metric, qf)
        c_lift = relative_lift(c_before, c_after, metric)

    t_lift = relative_lift(t_before, t_after, metric)
    effect = None if t_lift is None else t_lift - (c_lift or 0.0)

    floor = exp["min_impressions"]
    threshold = exp["min_effect"]

    event = confounding_event(events, exp["site"], meas_start, meas_end)
    if event:
        verdict = "confounded"
    elif t_before_imp < floor or t_after_imp < floor:
        verdict = "inconclusive"
    elif effect is None:
        verdict = "inconclusive"
    elif effect >= threshold:
        verdict = "confirmed"
    elif effect <= -threshold:
        verdict = "harmful"
    else:
        verdict = "refuted"

    return {
        "verdict": verdict,
        "result": {
            "evaluated_on": dt.date.today(),
            "baseline_window": [base_start, deployed],
            "measured_window": [meas_start, meas_end],
            "treatment_before": t_before,
            "treatment_after": t_after,
            "treatment_lift": t_lift,
            "control_lift": c_lift,
            "effect": effect,
            "impressions_before": t_before_imp,
            "impressions_after": t_after_imp,
            "has_control": bool(control),
            "confounder": event,
        },
    }


def pct(x: float | None) -> str:
    return "n/a" if x is None else f"{x * 100:+.1f}%"


def main() -> None:
    ledger = yaml.safe_load(LEDGER.read_text())
    events = (yaml.safe_load(EVENTS.read_text()) or {}).get("events", [])
    today = dt.date.today()

    cache: dict[str, pd.DataFrame] = {}
    lines = [f"# SEO experiment evaluation — {today}", ""]
    evaluated = 0

    for exp in ledger["experiments"]:
        if exp.get("status") != "live" or exp.get("verdict"):
            continue
        due = exp["deployed"] + dt.timedelta(days=exp["settle_days"] + exp["eval_window"])
        if today < due:
            lines.append(f"- `{exp['id']}` still running — evaluates on {due}")
            continue

        site = exp["site"]
        if site not in cache:
            cache[site] = load_site(site)
        if cache[site].empty:
            lines.append(f"- `{exp['id']}` skipped — no GSC data for {site}")
            continue

        outcome = evaluate(exp, cache[site], events)
        exp["verdict"] = outcome["verdict"]
        exp["result"] = outcome["result"]
        exp["status"] = "concluded"
        evaluated += 1

        r = outcome["result"]
        lines += [
            "",
            f"## {exp['id']} — **{outcome['verdict'].upper()}**",
            "",
            f"- Site: {site} · metric: `{exp['primary_metric']}` · threshold: {pct(exp['min_effect'])}",
            f"- Hypothesis: {exp['hypothesis'].strip()}",
            f"- Measured {r['measured_window'][0]} to {r['measured_window'][1]} "
            f"against baseline {r['baseline_window'][0]} to {r['baseline_window'][1]}",
            f"- Treatment lift: {pct(r['treatment_lift'])} · "
            f"control lift: {pct(r['control_lift'])} · **net effect: {pct(r['effect'])}**",
            f"- Impressions: {r['impressions_before']:,} before / {r['impressions_after']:,} after",
        ]
        if r["confounder"]:
            lines.append(f"- Confounded by: {r['confounder']}. Do not attribute this result.")
        if not r["has_control"]:
            lines.append(
                "- No control cohort. This is a before/after comparison and cannot "
                "separate the change from seasonality or an algorithm update."
            )
        if outcome["verdict"] == "inconclusive":
            lines.append(
                f"- Below the {exp['min_impressions']:,} impression floor. This is the "
                "correct answer, not a failure — the site does not yet have the traffic "
                "to resolve an effect this size."
            )

    if evaluated:
        LEDGER.write_text(yaml.safe_dump(ledger, sort_keys=False, allow_unicode=True, width=88))

    REPORT.mkdir(exist_ok=True)
    out = REPORT / f"{today:%Y-%m}-evaluation.md"
    out.write_text("\n".join(lines) + "\n")
    print(f"{evaluated} experiment(s) concluded — report at {out.relative_to(ROOT.parent)}")


if __name__ == "__main__":
    main()
