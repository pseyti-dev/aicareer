# STRATEGY — aicareer.me repositioning to HI-C

> Status: **proposal, not yet executed.** No site code changed by this document.
> Decision date: 2026-08-12. Supersedes the positioning assumptions in `ROADMAP.md`
> (phases 1–7 remain valid as delivered work; only the positioning changes).

---

## 1. The problem with the current position

The site sells **fear**: _"Is Your Job Safe from AI?"_. That is a losing position for
three reasons, and none of them are fixable with better content.

**It cannot rank.** "Will AI take my job" is one of the most saturated categories on
the web. The SERP is owned by Forbes, McKinsey, WEF, BBC, PwC — domains with decades of
authority and press coverage. The barrier is not content quality, it is **domain
authority**, and a new domain with no backlinks does not cross it. The long tail does
not rescue this: "will AI replace graphic designers" is equally covered.

**Fear is terminal traffic.** A visitor learns they are 78% replaceable, feels a jolt,
and leaves. No reason to return, no reason to pay. Fear also happens to be the worst
converting emotion in affiliate funnels — frightened people research more, they do not
decide.

**It attracts the wrong buyer.** The people who feel most threatened skew toward lower
purchasing power and lower willingness to spend on tools.

**The risk calculator was never a traffic engine. It is proof of method** — evidence
that this site can build a defensible, versioned, citable index. That value does not
require it to be the homepage.

## 2. The asymmetry

HI-C (**High-Impact Individual Contributor**) is the exact inverse.

| | AI risk | HI-C |
| --- | --- | --- |
| Competition | Every major publisher | Effectively nobody |
| Authority required to rank | Very high | Nearly none |
| Canonical source today | Dozens | **None** |
| Emotion | Fear (paralyses) | Identity (mobilises) |
| Audience | Threatened, low ticket | Senior, high ticket |

A new term is **the only situation where a site with no authority can win**, because
there is nothing to outrank. We do not need to beat Forbes. We need to arrive first.

### What HI-C means

A senior professional with no direct reports who carries a project from hypothesis to
measurable business outcome end-to-end, alone — because AI covers the adjacent
functions (design, code, copy, data) that previously required a team. A traditional IC
owns a slice of the workflow; a HI-C owns the whole thing.

The label is **not yet standardised**. It circulates as HI-C, HI-IC, and "High
Individual Contributor". That fragmentation is the opportunity: no canonical source
exists yet.

Primary references (2026):

- Giovanni Foglietta — _The Year of the HI-IC_ (beyondtweets.substack.com)
- Elena Verna — _IC work is the new career flex_ (elenaverna.com)
- P. V. Gomes — _The High Individual Contributor Is Becoming a New Organizational Unit_ (dev.to)
- Forbes — _AI Turns Solo Workers Into Departments_ (2026-05-18)
- SparkToro — _Embrace the High-Level Individual Contributor_

## 3. The decision

**Reposition radically. Kill the positioning, keep the artifacts.**

The AI Career Risk Index is **not deleted**. It is demoted from _product_ to _evidence_.
All 24 career pages, the dataset, the CSV/JSON endpoints and the PDFs stay live — they
cost nothing to maintain and they become the supply side of the transition routes.

This produces a stronger narrative than either half alone:

> The risk data proves the old career ladder is breaking.
> → HI-C is what replaces it.
> → The Readiness Score measures how close you are.

Risk becomes the **why**, not the **what**.

Domain stays `aicareer.me` — generic enough, and rebranding would discard the only
indexation the site has.

## 4. The binding constraint: automatable distribution only

The user has no appetite for manual promotion. This single constraint defines the whole
plan.

Classic SEO is out — it needs backlinks, which need people. That leaves **one viable
channel: being cited by LLMs.** Which is fortunate, because "named entity + versioned +
verifiable artifact" is precisely the format that wins that game, and the delivery is
100% automatable via CI:

| Channel | Mechanism | Automatable |
| --- | --- | --- |
| Zenodo | GitHub release → automatic DOI | ✅ CI |
| Hugging Face Datasets | CI push; among the most-crawled sources for LLM pipelines | ✅ CI |
| Google Dataset Search | existing CSV/JSON + `Dataset` schema | ✅ already built |
| CC BY 4.0 attribution | reuse legally requires a credit link | ✅ passive backlinks |
| Public GitHub repo | already crawled | ✅ already true |
| `llms.txt` + `DefinedTerm` schema | tells the model explicitly what to cite | ✅ build |

Configure once, runs forever. That is the engine.

### Honest risk

With literally zero manual promotion, **a perfect asset may simply never be
discovered.** LLMs cite what is in the index, and entering the index usually needs some
external seed. Zenodo and Hugging Face are the best automatable approximation of a seed
that exists — but they are an approximation, not a guarantee. Realistic timeline to
first citation: **6–12 months**.

### Mandatory hedge

Do not bet everything on a term with zero search volume today. In parallel, target
queries that **already have volume** and reach the same audience:

- "staff engineer vs manager"
- "IC career ladder"
- "how to stay technical without managing"
- "one person startup" / "solo founder AI stack"
- "principal engineer path"

Moderate competition, not brutal. These carry traffic while HI-C matures — and HI-C is
the answer we deliver to them.

## 5. Phases

Each phase = one PR, as established in `CLAUDE.md §9`. Never push to `main`.

### Phase A — Repositioning

Homepage answers "what is the senior operator of the AI era, and how close are you".
Risk Calculator moves to `/data/` as supporting evidence. Nav and `llms.txt` rewritten
around the new hierarchy. The 24 career pages stay exactly as they are.

_Irreversible-ish: changes home, nav and narrative. This is the gate._

### Phase B — Definitional land-grab _(highest asymmetric return)_

`/hi-c/` hub as the canonical source: definition, all three spellings (HI-C / HI-IC /
High Individual Contributor), what it is and is not, how it differs from a senior IC and
from a solo founder. `DefinedTerm` + `Article` schema, versioned like the Index.

Today, asking an LLM "what is a HI-C" returns no canonical source. The window is
roughly 6–12 months. Cheapest, highest-leverage piece in the plan.

### Phase C — HI-C Readiness Index

Second named, versioned dataset. Same engine as the risk calculator, inverted —
measuring proximity to HI-C rather than exposure to automation:

| Dimension | What it measures |
| --- | --- |
| End-to-end ownership | Can you take a problem from hypothesis to shipped outcome? |
| Adjacent-function coverage | How many neighbouring functions do you staff yourself via AI? |
| Judgment / taste | Quality of decisions where there is no correct answer |
| Own distribution | Can you reach an audience without your employer? |
| Decision autonomy | How far can you go without approval? |

Output: score + gap + 90-day plan. Becomes the second citable entity.
Reuses `RiskGauge.jsx` and `SkillChecklist.jsx` mechanics; new data file
`src/data/hic.js` mirroring the `careers.js` + `datasetMeta` pattern.

### Phase D — Automated distribution engine

CI for Zenodo (DOI), Hugging Face, Dataset Search, `llms.txt`. Once configured it leaves
the user's radar entirely.

### Phase E — Transition routes + query hedge

> ⚠️ **Revised 2026-08-12 after persona research — see `PERSONA.md` §2.**

The original scope here was wrong. It proposed routes by *profession*
(`/hi-c/from-graphic-designer/`), assuming a HI-C is an IC who levelled up while escaping
automation risk.

The evidence says the dominant origin is a **manager, director or VP going back to
craft** — someone leaving the management track, not climbing it. The axis is **track**,
not profession:

`/hi-c/from-engineering-manager/`, `/hi-c/from-vp-product/`, `/hi-c/from-director/`,
`/hi-c/from-senior-ic/`, `/hi-c/from-founder/`

The 24 existing career pages stay as they are and feed in laterally, but they are not the
route set.

Plus the hedge pages targeting the existing-volume queries in §4 — which is also where the
largest audience segment actually searches today.

### Phase F — Front-end redesign

See §7 — and read `PERSONA.md` first, which defines who it is being designed for and
corrects part of §7.

## 6. Monetisation ladder (corrected)

The old ladder (email → course affiliates → paid report → B2B) was calibrated for the
wrong audience. **Seniors do not buy resume builders and do not buy Coursera. They buy
leverage.**

| Step | Was | Becomes |
| --- | --- | --- |
| 1 | Email capture | Same, segmented by origin role (MailerLite already live) |
| 2 | Courses / resume builders | **Tool stack** — Cursor, n8n, Lovable, Gamma, Claude. Recurring, high ticket, genuine affinity |
| 3 | PDF report | **HI-C Operating Kit** — workflow and prompt library, not a PDF |
| 4 | B2B assessment | Same, but arrives sooner: companies restructuring around HI-C |

Step 2 alone is worth more than the entire old ladder, because SaaS affiliate revenue is
recurring and this audience actually subscribes.

Unchanged: **no AdSense, no paywall on the calculator.**

## 7. Front-end redesign

The Phase 7b editorial redesign (paper `#faf9f6`, Fraunces display, indigo accent) is
solid and should be **kept as the foundation** — it reads as a research publication,
which is exactly right for a citable source.

What it lacks is any sense of motion or depth. It reads static. The repositioning
justifies revisiting it: the HI-C audience is senior and tool-literate, and expects a
surface that feels engineered.

**Hard constraint: no LCP regression.** Current budget is < 2.5 s and there is no new
above-the-fold JS. Every technique below is CSS-only or GPU-composited.

### Techniques worth adding

| Technique | Effect | Cost |
| --- | --- | --- |
| `@view-transition` (native CSS) | Smooth cross-page transitions | ~0 — CSS only, degrades silently |
| `animation-timeline: view()` ⚠️ | Scroll-driven reveals, off main thread | ~0 — no JS, no observer |
| `content-visibility: auto` | Skips off-screen rendering | **Negative** — improves render |
| `text-wrap: balance/pretty` | Typographically correct headlines | 0 |
| Gauge/number count-up on reveal | Score lands with weight | tiny, CSS-driven |
| Grain / letterpress texture | Paper feel, print depth | 1 inline SVG, no request |
| Layered elevation + micro-interaction | Cards react to intent | 0 — `transform`/`opacity` only |
| Optional dark mode | Signals engineering-grade | CSS variables already in place |

⚠️ **`animation-timeline: view()` is restricted by `PERSONA.md` §6** — apply it to **data
only** (a gauge filling, a bar drawing as it enters view). Never to body text or headings:
scroll-revealed prose is the defining tell of a marketing site to this audience.

### Rules

- **Animate response, not arrival** (`PERSONA.md` §6). Motion acknowledges what the user
  did — hover, click, navigate. It never plays just because content appeared.
- Only `transform` and `opacity` animate. Never `width`, `top`, `box-shadow`.
- Everything gated behind `prefers-reduced-motion`.
- Zero animation libraries. No Framer Motion, no GSAP, no AOS.
- No new JS above the fold; existing React islands stay `client:load` and unchanged.
- Fonts stay self-hosted `font-display: swap`; no added weights.
- Lighthouse before/after in the PR body. LCP < 2.5 s is a merge gate.

Deliberately excluded: parallax hero, animated gradient meshes, blob backgrounds,
scroll-jacking, cursor followers. They are 2021 tells and they cost LCP.

## 8. Success metrics

Pre-traffic, lagging indicators are useless. In priority order:

1. **LLM citation** — monthly manual test of "what is a HI-C" across 3–4 models
2. **Inbound CC BY attributions** — search for required credit links
3. **Dataset Search / Hugging Face / Zenodo indexation**
4. **Impressions on the hedge queries** (Search Console)
5. Email capture segmented by origin role
6. Affiliate revenue — last, and not expected before month 6

## 9. Open questions

- Does the HI-C label stick? Mitigation: own the **concept** (the senior generalist
  operating with AI leverage), not the acronym. Never rename the site or the domain.
- Should `/hi-c/` also serve pt-BR? Deferred — English first, the audience is global.
- Does the Readiness Score need its own PDF, or does the Operating Kit replace it?
  Decide at Phase C.
