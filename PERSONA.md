# PERSONA — who actually lands on aicareer.me, and what "premium" means to them

> Prerequisite for Phase F (redesign) in `STRATEGY.md`. Written 2026-08-12.
> Contains a correction to the Phase E scope defined in that document.

---

## 1. Evidence base

Not invented. Built from the primary sources where the HI-C conversation is actually
happening, plus compensation data for the roles involved.

- Elena Verna, _IC work is the new career flex_ — first-person account of a VP-level
  operator moving back to IC at Lovable
- Giovanni Foglietta, _The Year of the HI-IC_ — the archetype and its org context
- P. V. Gomes, _The High Individual Contributor Is Becoming a New Organizational Unit_
  (dev.to) — the employer side
- Forbes, _AI Turns Solo Workers Into Departments_ (2026-05-18)
- Glassdoor / Levels compensation data, 2026: Staff Engineer median base **$244K**;
  Principal Engineer average **$243K**, reaching $630K+ at Amazon and past $1M at
  Meta/Google

## 2. The correction

**I had the origin axis wrong in `STRATEGY.md` Phase E.**

That document proposed transition routes by _profession_ — `/hi-c/from-graphic-designer/`,
`/hi-c/from-data-analyst/` — on the assumption that a HI-C is an IC who levelled up while
escaping automation risk.

The evidence says the opposite. The dominant HI-C origin is **a manager, director or VP
going back to craft** — someone who left the management track, not someone climbing it.
Verna's own framing is about escaping deck-building and coordination overhead, not
escaping obsolescence.

The axis is **track**, not **profession**. The correct route set is
`/hi-c/from-engineering-manager/`, `/hi-c/from-vp-product/`, `/hi-c/from-director/` —
and the profession pages stay as they are, feeding in laterally.

This also means **the HI-C is not the person the risk calculator was built for.** The
risk calculator addresses the threatened. The HI-C is the already-successful person who
is bored, over-coordinated, and looking for leverage. Different fear, different wallet.

## 3. Three personas, three different jobs

They are not variations of one another. Each contributes something the others cannot.

### A — The Returner _(credibility)_

Ex-EM, ex-Director, ex-VP. 12–20 years in. Left management or is about to. Comp
$200–400K. Verna, Karpathy — this is the archetype the term was coined around.

**Pain:** meeting load, decks for cross-functional alignment, promotion tied to headcount,
craft skills atrophying, bureaucratic decision paths.
**Wants:** end-to-end ownership, ~90% of time building, comp preserved without reports.

Small population. **Reads and writes publicly.** This is the person who might cite the
site, link it, or quote it in a newsletter — and our only distribution channel is being
cited. Their tolerance for anything resembling marketing is near zero.

### B — The Aspirant _(traffic)_

Senior IC, 5–12 years in. Comp $120–200K. Facing the management fork and not wanting to
take it. Searches things that **already have volume today**: "staff engineer vs manager",
"IC career ladder", "how to stay technical", "principal engineer path".

**Pain:** the only visible ladder goes through management; unsure whether staying IC caps
their career.
**Wants:** proof the IC track is legitimate and a concrete way to measure progress on it.

Largest population by far. This is where the hedge queries from `STRATEGY.md` §4 land,
and where the Readiness Score converts. **B wants to become A.**

### C — The Org Designer _(revenue)_

VP Eng, CPO, Head of Talent, founder. Named explicitly in the dev.to piece: _"business
leaders care because organizational scale is no longer automatically impressive."_

**Pain:** comp ladders treat management as the only serious path; performance reviews
measure visible busyness; no framework for paying someone $400K with no reports.
**Wants:** a defensible external framework to justify a restructure internally.

Tiny population, highest ticket. This is monetisation step 4 — and a named, versioned,
citable index is exactly the artifact they need to bring to a comp committee. It may
arrive sooner than the affiliate revenue.

### The relationship

> **B is the volume. A decides whether we are legitimate. C is the money.**

## 4. The design consequence

A and C have extremely high bullshit detection. If the site reads as lead generation,
they bounce and never cite it — and since citation is our only distribution channel,
losing A collapses the whole strategy.

**Therefore: calibrate the design to the most sceptical persona, not the most numerous.**
B forgives editorial restraint. A does not forgive marketing.

## 5. What "premium" means to this specific audience

Their reference set is known: **Stratechery, The Pragmatic Engineer, Lenny's Newsletter.**
The most-read paid publications in this exact demographic.

Note what they have in common — they are _newsletters_. Near-zero visual chrome. No stock
photography. No hero animation. Their premium signal is entirely: dense prose, charts that
carry an argument, and a paywall as a confidence gesture.

**For this audience, premium is not richness. It is restraint plus density.**

Concretely, the signals that read as premium here:

| Signal                                                      | Why it works on this persona                                  |
| ----------------------------------------------------------- | ------------------------------------------------------------- |
| Typographic craft — measure, real hierarchy, optical sizing | Reads as editing, therefore as edited thinking                |
| Tabular figures, unrounded precision                        | Rounding away digits reads as hiding                          |
| Version numbers, changelog, last-updated, DOI, methodology  | This audience trusts what shows its work                      |
| Speed                                                       | Linear and Vercel trained them: fast **is** the luxury signal |
| One accent colour, used sparingly                           | Restraint signals confidence                                  |
| Dark mode                                                   | They live in dark IDEs; its absence reads as unserious        |

And the signals that destroy it instantly — every one of these is a lead-gen tell:

exit popups · countdown timers · "FREE!" badges · testimonial carousels · stock photos of
people at laptops · scroll-jacking · autoplaying anything · social proof counters ·
gradient-mesh hero backgrounds

**The site already holds most of the premium signals and under-plays them visually.** The
versioned dataset, the changelog, the CC BY licence, the citation block — those are the
strongest trust assets on the site and they are currently presented as fine print. That is
the single biggest design opportunity here, and it costs nothing in performance.

## 6. Design principles for Phase F

**Animate response, not arrival.**
Motion should acknowledge what the user did — hover, click, navigate. Content that
animates in _because the user scrolled to it_ is the defining tell of a marketing site,
and persona A reads it instantly. This corrects `STRATEGY.md` §7, which proposed
`animation-timeline: view()` for scroll reveals: keep the technique, but restrict it to
**data** (a gauge filling, a bar drawing as it enters view is informative) and never apply
it to body text or headings.

**Fast is the aesthetic.** No motion may delay reading. 120–200 ms, ease-out, and nothing
that gates content behind an animation.

**Promote the evidence.** Version, date, licence, methodology and citation move from
footnote to visible furniture — a masthead-like element, the way a journal prints its
volume and issue.

**Density over air.** Whitespace signals premium to a consumer audience and emptiness to
this one. They want information per screen, well set.

**Dark mode as a first-class theme**, not an inversion filter. The variables in
`global.css` already support it.

**Keep the editorial base.** The Phase 7b work — paper `#faf9f6`, Fraunces display, indigo
accent — is correct and should be extended, not replaced. Fraunces carries an optical-size
axis; using it properly (`font-variation-settings: 'opsz'`) is a genuine craft signal to an
audience that notices.

**Hard constraint unchanged:** CSS-only, `transform`/`opacity` only, everything under
`prefers-reduced-motion`, zero animation libraries, LCP < 2.5 s as merge gate.

## 7. The honest tension

The request was "more modern effects" plus "feels like a premium source". For this
particular audience those two pull in opposite directions.

The sites this persona pays for are visually _quieter_ than aicareer.me is today, not
louder. What separates them is craft at small scale — typography, data presentation,
responsiveness — not effects.

So Phase F should spend its budget on **precision, not flourish**. The reference points are
Linear and Vercel for the engineered feel, and Stripe Press for editorial authority — not
an agency portfolio. If the redesign is judged by "how much is moving", it will have been
optimised for the wrong persona.

## 8. Open questions

- Does B convert on the Readiness Score, or does it only satisfy curiosity? Instrument
  before building the paid tier.
- Is C reachable at all without outbound? A citable framework is necessary but may not be
  sufficient.
- Should the risk calculator remain visible to A, or does it actively cheapen the site for
  them? Worth deciding at Phase A rather than assuming.
