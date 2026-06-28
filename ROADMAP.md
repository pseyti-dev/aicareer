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
- [ ] **WAIT for explicit user OK before starting Phase 5**

**Recommendation in report: Proceed. Scope = expand existing career pages + 2 index pages. No thin pages.**

**DO NOT start Phase 5 without explicit user approval based on this report.**

---

## Phase 5 — Programmatic SEO _(locked until Phase 4 gate)_

- [ ] Pipeline generating career pages from dataset — each with unique data/calculation + cited source
- [ ] Every new page PR must pass the CLAUDE.md §5 quality gate (5 checks)
- [ ] Zero thin pages — no find-replace templates

**Acceptance:** generated pages pass quality gate; no thin content.

---

## Phase 6 — Integrated Monetization

- [ ] Contextual course recommendations inside calculator funnel:
      risk result → mitigation skills → affiliate course link
- [ ] No generic banners; no Core Web Vitals regression

**Acceptance:** contextual links in funnel, CWV preserved.

---

_Last updated: Phase 1 in-progress_
