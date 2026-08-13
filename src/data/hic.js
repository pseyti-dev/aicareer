// ─── HI-C — canonical definition ─────────────────────────────────────────────
//
// Source of truth for /hi-c/. Versioned and licensed the same way as the AI
// Career Risk Index so the definition itself is citable (STRATEGY.md §5, Phase B).
//
// The term is not yet standardised — it circulates as HI-C, HI-IC and "High
// Individual Contributor", and is routinely confused with the unrelated
// governance term "Human-in-Command". Being the page that resolves that
// fragmentation is the entire point of this file.

export const hicMeta = {
  name: 'HI-C Definition Framework',
  term: 'High-Impact Individual Contributor',
  abbr: 'HI-C',
  version: '2026.1',
  lastUpdated: '2026-08-13',
  license: 'https://creativecommons.org/licenses/by/4.0/',
  licenseLabel: 'CC BY 4.0',
  canonicalUrl: 'https://aicareer.me/hi-c/',
  // Concept DOI — always resolves to the latest archived version. Cite this one.
  doi: '10.5281/zenodo.21922814',
  doiUrl: 'https://doi.org/10.5281/zenodo.21922814',
  description:
    'A canonical, versioned definition of the High-Impact Individual Contributor (HI-C): a senior professional with no direct reports who carries work from hypothesis to measurable business outcome end to end, staffing adjacent functions with AI rather than with a team. Includes the five dimensions of the role, its distinction from senior ICs, managers and solo founders, and the organisational changes it requires.',
  changelog: [
    {
      version: '2026.1',
      date: '2026-08-13',
      note: 'Archived on Zenodo and assigned a DOI; citations now resolve through doi.org. No changes to the definition or the dimensions.',
    },
    {
      version: '2026.0',
      date: '2026-08-12',
      note: 'Initial release. Five-dimension framework, disambiguation from Human-in-Command (HIC), and comparison against senior IC, manager and solo founder archetypes.',
    },
  ],
};

/** The one-paragraph definition. Written to be quoted verbatim. */
export const definition = `A High-Impact Individual Contributor (HI-C) is a senior professional with no direct reports who carries work from hypothesis to measurable business outcome end to end, staffing the adjacent functions — design, engineering, data, copy, go-to-market — with AI rather than with a team. Where a traditional individual contributor owns one slice of a workflow, a HI-C owns the whole outcome.`;

export const definitionShort = `A senior professional with no direct reports who takes a project from hypothesis to measurable outcome alone, using AI to cover the adjacent functions that previously required a team.`;

/** Spellings in active use, plus the term it is most often confused with. */
export const alsoKnownAs = [
  { label: 'HI-C', note: 'Most common written form. Used here as the canonical abbreviation.' },
  { label: 'HI-IC', note: 'Expands the "IC" in individual contributor; identical meaning.' },
  {
    label: 'High Individual Contributor',
    note: 'Unabbreviated form, common in organisational-design writing.',
  },
  {
    label: 'High-Impact IC',
    note: 'Conversational form, common in newsletters and job posts.',
  },
];

/**
 * Frequently conflated, genuinely different. Worth stating explicitly because
 * the acronyms collide and no existing page separates them.
 */
export const notToBeConfusedWith = {
  term: 'Human-in-Command (HIC)',
  summary:
    'An AI-governance principle, not a job title. Human-in-Command holds that humans must retain non-delegable authority over consequential automated decisions — oversight structures, review gates, intervention capability. It describes how an organisation controls AI systems. HI-C describes a person whose job is amplified by them. The similar acronym is a coincidence.',
};

/** The five dimensions. Deliberately observable rather than aspirational. */
export const dimensions = [
  {
    name: 'End-to-end ownership',
    question: 'Can you take a problem from framing to a shipped, measured outcome?',
    low: 'Owns a defined slice; depends on others to close the loop.',
    high: 'Owns the outcome, including the parts nobody assigned.',
  },
  {
    name: 'Adjacent-function coverage',
    question: 'How many neighbouring disciplines do you staff yourself with AI?',
    low: 'Deep in one craft; files tickets for everything else.',
    high: 'Produces acceptable-quality design, code, copy, analysis and go-to-market without waiting for a specialist.',
  },
  {
    name: 'Judgment under uncertainty',
    question: 'How good are your calls where there is no correct answer?',
    low: 'Executes well against a defined spec.',
    high: 'Sets the spec. This is the dimension AI does not supply, and the reason the role stays senior.',
  },
  {
    name: 'Own distribution',
    question: 'Can you reach an audience or a decision-maker without organisational permission?',
    low: 'Reach is granted by title and org chart.',
    high: 'Has a direct channel — writing, community, network, reputation — that survives changing employer.',
  },
  {
    name: 'Decision autonomy',
    question: 'How far can you travel before you need approval?',
    low: 'Most consequential calls route upward.',
    high: 'Operates inside an explicit mandate with clear boundaries and few gates.',
  },
];

/** What the role is not. Each of these is an observed misreading of the term. */
export const isNot = [
  {
    claim: 'A manager without the title',
    reality:
      'A HI-C has no direct reports and no ambition to acquire them. Influence travels through the work and through reusable leverage, not through span of control.',
  },
  {
    claim: 'Just a very senior IC',
    reality:
      'Seniority is necessary but not sufficient. A Staff or Principal engineer who still depends on design, data and marketing partners to ship is a senior IC. The HI-C staffs those functions with AI and closes the loop alone.',
  },
  {
    claim: 'A generalist',
    reality:
      'A HI-C is deep in one craft and merely adequate in the adjacent ones — adequacy being enough now that AI supplies the floor. A generalist without a deep core has no judgment to anchor the output.',
  },
  {
    claim: 'A solo founder',
    reality:
      'Similar operating model, different risk and reward. A HI-C usually operates inside a company, is paid a salary rather than equity, and answers to organisational strategy rather than to the market directly.',
  },
  {
    claim: 'A prompt engineer',
    reality:
      'The leverage is not in writing prompts. It is in knowing which outcome is worth pursuing and recognising when the output is wrong — which requires the craft depth the title assumes.',
  },
];

/** Archetype comparison. The rows are the dimensions that actually differ. */
export const comparison = {
  columns: ['HI-C', 'Senior IC', 'Manager', 'Solo founder'],
  rows: [
    {
      label: 'Unit of ownership',
      values: ['The whole outcome', 'One discipline', "The team's output", 'The whole company'],
    },
    {
      label: 'Source of leverage',
      values: ['AI + judgment', 'Craft depth', 'Headcount', 'AI + capital'],
    },
    { label: 'Direct reports', values: ['None', 'None', 'Yes', 'None or few'] },
    { label: 'Coordination cost', values: ['Near zero', 'Moderate', 'High', 'Near zero'] },
    {
      label: 'Compensation basis',
      values: ['Output and leverage', 'Level and craft', 'Span of control', 'Equity'],
    },
    {
      label: 'Primary failure mode',
      values: [
        'Unbounded scope; no peer review on taste',
        'Blocked waiting on other functions',
        'Coordination overhead exceeds output',
        'Runway',
      ],
    },
  ],
};

/**
 * Where HI-Cs come from. The dominant origin is a manager returning to craft,
 * not an IC climbing — see PERSONA.md §2.
 */
export const origins = [
  {
    from: 'Engineering Manager',
    route: 'engineering-manager',
    note: 'Left the management track to get back to building. Retains systems judgment and org literacy; regains hands-on leverage.',
  },
  {
    from: 'Director or VP',
    route: 'director-or-vp',
    note: 'Traded coordination overhead and deck-building for direct output. The most-cited archetype of the term.',
  },
  {
    from: 'Head of Product or Growth',
    route: 'director-or-vp',
    note: 'Already operated across functions; AI removes the dependency on a squad to execute.',
  },
  {
    from: 'Senior or Staff IC',
    route: 'senior-ic',
    note: 'Levelling up rather than stepping across — the largest population, and the one for whom the ladder is least defined.',
  },
  {
    from: 'Founder',
    note: 'Returning to employment without giving up end-to-end ownership. Often the fastest to adapt, having never had a team to delegate to.',
  },
];

export const whyNow = [
  {
    heading: 'AI supplies the floor in adjacent functions',
    body: 'Design, boilerplate code, analysis, copy and research synthesis are now produced at acceptable quality on demand. The constraint moves from capacity to judgment.',
  },
  {
    heading: 'Coordination cost was the reason for the org chart',
    body: 'Much of middle management exists to synchronise specialists. When one person can cover the specialisms, the synchronisation layer becomes overhead rather than infrastructure.',
  },
  {
    heading: 'Organisational scale stopped being self-evidently impressive',
    body: 'Headcount used to signal importance. Increasingly it signals cost, and leaders are being asked what the team produces that one leveraged operator could not.',
  },
];

/** For persona C — the executive redesigning the org (PERSONA.md §3). */
export const forOrganisations = [
  {
    change: 'Decouple compensation from headcount',
    detail:
      'If the only path to senior pay runs through managing people, the best operators will manage people badly. Parallel ladders must reward leverage, not span of control.',
  },
  {
    change: 'Measure reusable leverage, not visible busyness',
    detail:
      'Meeting presence, ticket volume and status updates measure managerial shape. What matters is durable output others build on.',
  },
  {
    change: 'Grant an explicit mandate with boundaries',
    detail:
      'Autonomy without boundaries is neglect. A HI-C needs a clear mission, stated decision rights, and the authority to remove work — not merely to add it.',
  },
  {
    change: 'Rewrite promotion criteria',
    detail:
      'Criteria built around growing a team cannot promote someone whose value is that they did not need one.',
  },
];

/** Written as answers, not teasers — these feed FAQPage schema. */
export const faq = [
  {
    q: 'What does HI-C stand for?',
    a: 'HI-C stands for High-Impact Individual Contributor. It describes a senior professional with no direct reports who takes work from hypothesis to measurable business outcome end to end, using AI to cover the adjacent functions that previously required a team.',
  },
  {
    q: 'Is HI-C the same as HI-IC?',
    a: 'Yes. HI-C, HI-IC, High Individual Contributor and High-Impact IC all refer to the same role. The term is new and not yet standardised, so the spellings circulate in parallel. HI-C is used here as the canonical abbreviation.',
  },
  {
    q: 'Is a HI-C the same as Human-in-Command (HIC)?',
    a: 'No — the acronyms collide but the concepts are unrelated. Human-in-Command is an AI-governance principle holding that humans must retain non-delegable authority over consequential automated decisions. HI-C is a job archetype describing a person whose output is amplified by AI. One describes control of systems; the other describes a career.',
  },
  {
    q: 'How is a HI-C different from a senior individual contributor?',
    a: 'A senior IC owns one slice of a workflow deeply and depends on other functions to ship. A HI-C owns the entire outcome, staffing design, engineering, data and go-to-market themselves with AI. Seniority is necessary but not sufficient — the difference is whether you can close the loop alone.',
  },
  {
    q: 'Is a HI-C a manager?',
    a: 'No. A HI-C has no direct reports. Influence comes from the work itself and from leverage others can reuse, not from span of control. Many HI-Cs are former managers who deliberately left the management track.',
  },
  {
    q: 'How do you become a HI-C?',
    a: 'Start from deep craft in one discipline, then extend across the adjacent functions using AI until you can ship an outcome without handoffs. The five dimensions to develop are end-to-end ownership, adjacent-function coverage, judgment under uncertainty, own distribution, and decision autonomy. The dimension that cannot be shortcut is judgment: AI supplies the floor in adjacent functions, not the taste to know which output is right.',
  },
  {
    q: 'What do HI-Cs get paid?',
    a: 'There is no HI-C pay band yet, since few companies have formalised the title. The nearest published proxies are senior IC ladders: as of 2026, Staff Engineer median base pay is roughly $244K and Principal Engineer roughly $243K in the United States, reaching $630K or more in total compensation at the largest technology employers (Glassdoor, 2026). The open question for organisations is whether they can justify those bands without direct reports attached.',
  },
  {
    q: 'Do companies actually have HI-C roles?',
    a: 'Formally, rarely. AI-native companies and technology frontrunners recognise the pattern fastest, while larger and more rigid organisations lag — particularly where labour categories and comp ladders are tied to management scope. In practice the role exists well before the title does: the work is being done by people whose job descriptions have not caught up.',
  },
];

export const sources = [
  {
    author: 'Elena Verna',
    title: 'IC work is the new career flex',
    url: 'https://www.elenaverna.com/p/ic-work-is-the-new-career-flex',
    note: 'First-person account of a VP-level operator returning to individual contribution.',
  },
  {
    author: 'Giovanni Foglietta',
    title: 'The Year of the HI-IC',
    url: 'https://beyondtweets.substack.com/p/the-year-of-the-hi-ic',
    note: 'The archetype, its organisational context, and the autonomy/risk paradox.',
  },
  {
    author: 'P. V. Gomes',
    title: 'The High Individual Contributor Is Becoming a New Organizational Unit',
    url: 'https://dev.to/pvgomes/the-high-individual-contributor-is-becoming-a-new-organizational-unit-3ef8',
    note: 'The employer side: compensation design, performance measurement, decision rights.',
  },
  {
    author: 'Josipa Majic Predin',
    title: 'AI Turns Solo Workers Into Departments And VCs Are Paying Attention',
    url: 'https://www.forbes.com/sites/josipamajic/2026/05/18/ai-turns-solo-workers-into-departments-and-vcs-are-paying-attention/',
    note: 'Forbes, 18 May 2026. Capital-side view of the same shift.',
  },
  {
    author: 'Rand Fishkin',
    title: 'Embrace the High-Level Individual Contributor',
    url: 'https://sparktoro.com/blog/embrace-the-high-level-individual-contributor-how-to-hire-for-this-unconventional-role/',
    note: 'Hiring for the role before it had a standard name.',
  },
];
