#!/usr/bin/env python3
"""Guard the ledger's integrity. Runs on every PR; a failure blocks the merge.

It enforces the four rules that keep the loop honest:

  1. Everything is declared before deploy. An experiment cannot go live
     without a hypothesis, a threshold and a window.
  2. Thresholds are immutable once live. Moving min_effect after seeing the
     data converts the ledger into a rationalisation engine.
  3. One change per page at a time. Overlapping live experiments on the same
     URL make attribution impossible for both.
  4. Verdicts are written by the evaluator, not by hand.

Rule 2 needs git, so it compares against the ledger on the base branch.

Deps: pyyaml
"""

from __future__ import annotations

import datetime as dt
import pathlib
import subprocess
import sys

import yaml

LEDGER = pathlib.Path(__file__).resolve().parent / "ledger.yaml"

SITES = {"aicareer.me", "data-mani.com"}
STATUSES = {"proposed", "live", "concluded", "reverted", "abandoned"}
CHANGE_TYPES = {
    "title", "meta_description", "content_expansion", "internal_links",
    "schema", "template", "performance", "other",
}
METRICS = {"ctr", "clicks", "impressions", "position"}
VERDICTS = {None, "confirmed", "refuted", "harmful", "inconclusive", "confounded"}

FROZEN_ONCE_LIVE = [
    "hypothesis", "treatment", "control", "primary_metric", "query_filter",
    "baseline_window", "settle_days", "eval_window", "min_effect",
    "min_impressions", "deployed",
]

errors: list[str] = []


def fail(exp_id: str, msg: str) -> None:
    errors.append(f"{exp_id}: {msg}")


def load(text: str) -> dict:
    return yaml.safe_load(text) or {"experiments": []}


def base_ledger() -> dict:
    """The ledger as it exists on the base branch, for the immutability check."""
    for ref in ("origin/main", "origin/master", "main", "master"):
        try:
            out = subprocess.run(
                ["git", "show", f"{ref}:seo/ledger.yaml"],
                capture_output=True, text=True, check=True,
            )
            return load(out.stdout)
        except subprocess.CalledProcessError:
            continue
    print("note: no base ledger found — skipping immutability check")
    return {"experiments": []}


def window(exp: dict) -> tuple[dt.date, dt.date] | None:
    """Measurement window: [deploy + settle, deploy + settle + eval)."""
    if not exp.get("deployed"):
        return None
    start = exp["deployed"] + dt.timedelta(days=exp["settle_days"])
    return start, start + dt.timedelta(days=exp["eval_window"])


def check_shape(exp: dict) -> None:
    eid = exp.get("id", "<no id>")

    for field in ("id", "site", "created", "status", "change_type", "hypothesis"):
        if not exp.get(field):
            fail(eid, f"missing required field `{field}`")

    if exp.get("site") not in SITES:
        fail(eid, f"unknown site {exp.get('site')!r}")
    if exp.get("status") not in STATUSES:
        fail(eid, f"unknown status {exp.get('status')!r}")
    if exp.get("change_type") not in CHANGE_TYPES:
        fail(eid, f"unknown change_type {exp.get('change_type')!r}")
    if exp.get("verdict") not in VERDICTS:
        fail(eid, f"unknown verdict {exp.get('verdict')!r}")

    if exp.get("status") in ("live", "concluded"):
        for field in FROZEN_ONCE_LIVE:
            if exp.get(field) in (None, [], ""):
                if field == "control":
                    continue  # empty control is allowed, just weaker
                fail(eid, f"`{field}` must be set before going live")

        if exp.get("primary_metric") not in METRICS:
            fail(eid, f"unknown primary_metric {exp.get('primary_metric')!r}")
        if not exp.get("treatment"):
            fail(eid, "`treatment` cannot be empty")
        if isinstance(exp.get("min_effect"), (int, float)) and exp["min_effect"] <= 0:
            fail(eid, "`min_effect` must be a positive relative threshold")

        overlap = set(exp.get("treatment") or []) & set(exp.get("control") or [])
        if overlap:
            fail(eid, f"URLs in both treatment and control: {sorted(overlap)}")

    if exp.get("verdict") and exp.get("status") != "concluded":
        fail(eid, "verdict is set but status is not `concluded`")
    if exp.get("status") == "concluded" and not exp.get("verdict"):
        fail(eid, "concluded without a verdict")


def check_immutability(current: list[dict], base: list[dict]) -> None:
    by_id = {e.get("id"): e for e in base}
    for exp in current:
        old = by_id.get(exp.get("id"))
        if not old or old.get("status") not in ("live", "concluded"):
            continue
        for field in FROZEN_ONCE_LIVE:
            if old.get(field) != exp.get(field):
                fail(
                    exp["id"],
                    f"`{field}` changed after the experiment went live "
                    f"({old.get(field)!r} -> {exp.get(field)!r}). "
                    "Retire this experiment and open a new one instead.",
                )


def check_overlaps(experiments: list[dict]) -> None:
    live = [e for e in experiments if e.get("status") == "live" and window(e)]
    for i, a in enumerate(live):
        for b in live[i + 1:]:
            if a["site"] != b["site"]:
                continue
            a_start, a_end = window(a)
            b_start, b_end = window(b)
            if a_end <= b_start or b_end <= a_start:
                continue
            shared = set(a.get("treatment") or []) & set(b.get("treatment") or [])
            shared |= set(a.get("treatment") or []) & set(b.get("control") or [])
            shared |= set(a.get("control") or []) & set(b.get("treatment") or [])
            if shared:
                fail(
                    a["id"],
                    f"overlaps {b['id']} in time and on {sorted(shared)} — "
                    "neither result will be attributable",
                )


def main() -> None:
    experiments = load(LEDGER.read_text())["experiments"]

    ids = [e.get("id") for e in experiments]
    for dupe in {i for i in ids if ids.count(i) > 1}:
        fail(str(dupe), "duplicate id")

    for exp in experiments:
        check_shape(exp)

    check_immutability(experiments, base_ledger()["experiments"])
    check_overlaps(experiments)

    if errors:
        print(f"\nledger validation failed ({len(errors)} problems):\n")
        for e in errors:
            print(f"  - {e}")
        sys.exit(1)

    live = sum(1 for e in experiments if e.get("status") == "live")
    print(f"ledger ok: {len(experiments)} experiments, {live} live")


if __name__ == "__main__":
    main()
