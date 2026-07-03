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

## Phase 5 — Programmatic SEO _(current)_

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

## Phase 6 — Integrated Monetization _(current)_

- [x] Contextual recommendation panel in `SkillChecklist.jsx`:
  - `TopRecommendation` component: highest-impact unchecked skill surfaced as "next action" with urgency label (Urgent/Recommended/Next step) tied to current risk score
  - Direct affiliate CTA + free option link — no generic banners
  - Reacts live as user checks/unchecks skills
- [x] `CompletionPanel`: shown when all skills checked — redirects to `/special/ai-ready/` for cross-sell
- [x] No new above-fold JS — addition is inside existing `client:load` React island; CWV unaffected

**Acceptance:** contextual link appears in funnel immediately below gauge; changes with user progress; no CWV regression.

---

## Phase 7 — Citable Authority & Editorial Redesign _(current)_

> Turn the site from "a tool that answers" into "a source that gets cited" by LLMs and journalists.

- [ ] Brand the scores as the **AI Career Risk Index** (named, versioned dataset — v2026.2)
- [ ] Canonical dataset page `/data/ai-career-risk-index/` with visible full table,
      Dataset schema + distribution, CC BY 4.0 license, citation block (APA/BibTeX), changelog
- [ ] Build-time CSV + JSON endpoints generated from `careers.js` (zero drift)
- [ ] Visible dataset version + last-updated on all career pages, linking to citation page
- [ ] `llms.txt` updated with dataset section and citation guidance
- [ ] Editorial redesign: research-publication aesthetic (light paper background, serif display
      typography, data-forward tables), CSS-only — no new JS, LCP budget preserved

**Acceptance:** dataset page live with valid Dataset schema; CSV/JSON downloadable; all pages
pass audit; Lighthouse LCP < 2.5 s after redesign.

---

_Last updated: Phase 7 in progress — citable dataset + redesign_
