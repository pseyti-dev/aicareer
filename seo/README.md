# SEO measurement loop

A monthly, human-approved feedback loop for `aicareer.me` and `data-mani.com`.

The goal is not automation. The goal is **attribution** — knowing which changes
worked. Automation is only worth building for the parts that are boring and
deterministic; the parts that require judgement stay manual on purpose.

## Contents

| File | What it does | Automated? |
|---|---|---|
| `fetch_gsc.py` | Pulls Search Console into `data/gsc/<site>/YYYY-MM.parquet` | Weekly, fully |
| `ledger.yaml` | One pre-registered entry per deliberate change | Agent drafts, you approve |
| `events.yaml` | Core updates and site-wide changes that invalidate windows | Manual |
| `validate_ledger.py` | Blocks merges that break the ledger's integrity rules | Every PR, fully |
| `evaluate.py` | Measures concluded experiments, writes verdicts and a report | Monthly, fully |

## Why the ledger exists

Twelve cycles a year is all SEO gives you. At that rate, an experiment you
cannot attribute is a wasted month. Three rules make attribution possible, and
`validate_ledger.py` enforces all three:

1. **Pre-registration.** `hypothesis`, `min_effect` and the measurement windows
   are declared before deploy and frozen afterwards. Without this you will
   always find a number that makes the change look good — that is not a
   character flaw, it is how anyone reads noisy data.
2. **One change per page per cycle.** Overlapping live experiments on the same
   URL destroy both results.
3. **Verdicts are computed, not written.** `evaluate.py` owns the `verdict`
   field. You do not get to overrule it by hand; you get to open a new
   experiment.

## Expect `inconclusive`

At current traffic, most early verdicts will be `inconclusive` — the impression
floor will not be met. That is the system working. The alternative is reading
significance into a 12% CTR swing on 40 impressions and building a strategy on
it.

Two consequences worth accepting up front:

- **`data-mani.com` has six tool pages.** That is too few for a treatment/control
  split, so early experiments there are before/after only, which cannot separate
  your change from seasonality. Real cohort designs unlock once the programmatic
  format-matrix pages ship and there are 50+ comparable URLs.
- **`aicareer.me` needs history first.** Do not deploy an experiment there until
  `fetch_gsc.py` has accumulated a 28-day baseline.

## The monthly ritual (~1h per site)

1. `python seo/fetch_gsc.py` — should already have run weekly
2. `python seo/evaluate.py` — concludes anything due, writes `seo/reports/`
3. Read the report. Note which hypotheses were refuted; those are the valuable ones.
4. Draft 3–5 new experiments in `ledger.yaml`, status `proposed`
5. Open a PR with the code changes and the ledger entries together
6. Merge, deploy, then set `deployed:` to the actual deploy date and `status: live`

Step 6 is the one that gets forgotten. The measurement clock starts at deploy,
not at merge; getting this wrong silently corrupts every window.

## Setup

```bash
pip install google-api-python-client google-auth pandas pyarrow pyyaml
```

Create a GCP service account, enable the Search Console API, and add the service
account email as a user on both properties in Search Console. Put the JSON key
in the `GSC_SERVICE_ACCOUNT_JSON` repository secret.

Adjust `SITES` in `fetch_gsc.py` if your properties are URL-prefix rather than
domain properties (`https://data-mani.com/` instead of `sc-domain:data-mani.com`).

## What this deliberately does not do

- It does not write or publish content. Unsupervised generation at scale is what
  Google's scaled content abuse policy targets, and a manual action would end
  the affiliate funnel outright.
- It does not auto-merge. The agent proposes; you decide.
- It does not run daily. A daily SEO loop measures noise and calls it learning.
