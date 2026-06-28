# ROADMAP — aicareer.me Restructuring

Source of truth for phase progress. Update checkboxes when each PR is merged.
Each phase = one PR. Never merge a phase that hasn't passed its acceptance criteria.

---

## Phase 1 — Build Foundation _(current)_

> Technical hygiene that unblocks the rest. Low-risk.

- [x] Add `@astrojs/sitemap` (automatic sitemap generation)
- [x] Update `robots.txt` to point to `sitemap-index.xml`
- [x] Remove manual `public/sitemap.xml`
- [x] Add `prettier` + `prettier-plugin-astro` and `npm run format` / `format:check` scripts
- [x] Add `eslint` + `eslint-plugin-astro` and `npm run lint` script
- [x] Document mandatory pre-PR sequence in `CLAUDE.md §9`: format → lint → build → preview
- [x] Add lint step to `.github/workflows/deploy.yml`
- [x] Verify canonical integrity across all pages ✅

**Acceptance:** build passes, sitemap auto-generated, lint/format running.

---

## Phase 2 — The Moat Asset: Study Page with Original Data

> MAXIMUM PRIORITY. Do not scale pages before this exists.

- [ ] Create study page (EN) crossing 17 careers/scores with Stanford AI Index 2026 data
  - Squeeze in junior dev entry 2022-25 (~-20%), ~1/3 companies planning headcount reduction,
    "jagged frontier" concept, productivity gains by function
  - Format: definition table + Q&A + cited primary sources — optimized for AI answer engines
- [ ] Add `Dataset` schema (schema.org/Dataset) to calculator data and study page
- [ ] AEO hardening: confirm calculator output is indexable in served HTML (not JS-only)

**Acceptance:** study page live via PR, schema valid (Rich Results Test), base score in HTML.

---

## Phase 3 — Recursive Review Loop

> The infra that makes this self-sustaining.

- [ ] Create scheduled GitHub Action (weekly cron) that audits repo against `CLAUDE.md`
  - Checks: broken links, orphaned pages, schema validity, Core Web Vitals regression,
    slugs without 301, sitemap/canonical integrity
- [ ] Connect Google Search Console READ-ONLY (service account Viewer) for indexation monitoring
- [ ] Action generates report and opens PR/issue with fixes (human-in-the-loop always)

**Acceptance:** workflow runs manually without error and produces a sample report/PR.

---

## Phase 4 — Demand Validation Gate ⛔ STOP HERE

> Confirm searchable and winnable demand BEFORE scaling pages.

- [x] Keyword research for the 17 career themes against 2026 AI Overview landscape
  - ✅ Demand confirmed: "will AI replace [career]" = high-volume, growing
  - ⚠️ AIO cannibalization: 83% coverage for career/education; mitigated by AEO stack (cited in AIO = 120% more clicks)
  - ✅ Tool intent queries (calculator, risk score) are AIO-resistant
  - ✅ Research/data queries (study page, Dataset schema) are AIO-citation-friendly
  - ❌ Generic lists ("AI proof jobs") — high AIO, no differentiation: skip
- [x] Produce report → see `PHASE4-DEMAND-REPORT.md`
- [x] **Explicit user approval received (2026-06-28) → Phase 5 unlocked**

**Recommendation in report: Proceed. Scope = expand existing career pages + 2 index pages. No thin pages.**

---

## Phase 5 — Programmatic SEO *(current)*

- [x] Add "Will AI Replace [Career]?" visible section to all 17 career pages
  - Unique per career (uses career.aioSummary + risk-band-specific bottom line)
  - AIO-targeted H2 matching exact search query
  - Stanford AI Index 2026 cited; links back to study page
- [x] Updated FAQ 5th entry on all career pages to use career.aioSummary (richer, citable)
- [x] New page `/study/careers-by-industry/` — 6 industry sectors, avg risk, Dataset schema
  - Article + Dataset + FAQPage + BreadcrumbList schemas, all server-rendered
  - sr-only machine-readable sector table for AI crawlers
- [x] `llms.txt` updated with careers-by-industry entry
- [x] Footer updated with careers-by-industry link

**Acceptance:** 23 pages pass full audit; "Will AI Replace?" H2 in all 17 career page HTML; Dataset schema on industry page.

---

## Phase 6 — Integrated Monetization

- [ ] Contextual course recommendations inside calculator funnel:
      risk result → mitigation skills → affiliate course link
- [ ] No generic banners; no Core Web Vitals regression

**Acceptance:** contextual links in funnel, CWV preserved.

---

_Last updated: Phase 1 in-progress_
