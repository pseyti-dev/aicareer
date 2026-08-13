// ─── Hedge guides ────────────────────────────────────────────────────────────
//
// STRATEGY.md §4 makes these mandatory, not optional. The HI-C term has zero
// search volume today, and the bet on LLM citation takes 6–12 months and may
// not land. These pages target queries that have volume *now* and reach the
// same audience (PERSONA.md §3 — persona B, the largest segment).
//
// They are not SEO filler. Persona A judges the site's legitimacy, and thin
// pages here would poison the credibility the hub depends on. Each guide has to
// earn its place on its own, and the differentiated angle is consistent: every
// existing "IC vs manager" piece treats the choice as binary. AI added a third
// rung, and that is the argument only this site is making.

export const guides = [
  {
    slug: 'staff-engineer-vs-manager',
    title: 'Staff Engineer vs Manager',
    h1: 'Staff Engineer vs Manager: the choice, and the third option nobody names',
    metaTitle: 'Staff Engineer vs Manager: How to Choose in 2026 | aicareer.me',
    metaDescription:
      'The real difference between the staff engineer and manager tracks — day-to-day work, compensation, failure modes, and how to choose. Plus the third path AI created: the High-Impact Individual Contributor.',
    intent:
      'You are at the fork. Someone has offered you a team, or you are watching peers take one and wondering what it costs to say no.',
    lede: `Most writing on this treats it as a personality quiz — do you like people or code? That framing is wrong, and it is why so many people take a team and regret it eighteen months later. The two tracks differ in what you are accountable for, what compounds, and how you fail. Those are answerable questions.`,
    sections: [
      {
        heading: 'The difference is accountability, not temperament',
        body: [
          `A staff engineer is accountable for **technical outcomes across team boundaries** — that a system works, that an approach is right, that a decision made now does not become a rewrite in two years. The scope grows by influence and by the reach of the systems you touch.`,
          `A manager is accountable for **a team's output and the people in it** — hiring, performance, retention, and the throughput of a group. The scope grows by headcount and by the number of teams reporting up.`,
          `Both are senior. Both can be well paid. The mistake is assuming one is the promotion and the other is the consolation.`,
        ],
      },
      {
        heading: 'What actually changes on Monday',
        table: {
          columns: ['', 'Staff engineer', 'Manager'],
          rows: [
            {
              label: 'Where the day goes',
              values: [
                'Design, code review, unblocking, writing things that align people',
                'One-on-ones, planning, hiring, cross-team coordination',
              ],
            },
            {
              label: 'Longest uninterrupted block',
              values: ['Hours, if protected', 'Rarely more than 45 minutes'],
            },
            {
              label: 'What compounds',
              values: [
                'Craft, systems judgment, technical reputation',
                'Network, org literacy, people you developed',
              ],
            },
            {
              label: 'What atrophies',
              values: [
                'Org navigation, patience for process',
                'Hands-on skill — fast, and faster than people expect',
              ],
            },
            {
              label: 'How you fail',
              values: [
                'Influence without authority; being right and ignored',
                'Coordination overhead exceeds the output of the team',
              ],
            },
            {
              label: 'Reversibility',
              values: [
                'Easy to move to management later',
                'Harder to return — the skills decayed while you were away',
              ],
            },
          ],
        },
        body: [
          `That last row is the one people underweight. The tracks are not symmetric. Moving from IC to manager is a door you can walk back through for about two years; after that the return costs real relearning. Moving from manager to IC is the harder direction, which is exactly why the archetype that does it successfully now has a name.`,
        ],
      },
      {
        heading: 'Compensation: closer than the folklore suggests',
        body: [
          `The belief that management pays more is mostly a holdover from ladders that stopped at senior. Where a real IC ladder exists, the bands converge and then track each other.`,
          `As of 2026 in the United States, Staff Engineer median base pay sits around **$244K**, and Principal Engineer around **$243K**, with total compensation reaching **$630K or more** at the largest technology employers and past **$1M** at the top of the range (Glassdoor, 2026).`,
          `The honest caveat: those bands exist at companies that formalised the IC track. At companies that did not, management genuinely is the only route to senior pay — and that is a fact about your employer, not about the tracks.`,
        ],
      },
      {
        heading: 'What AI changed about this decision',
        body: [
          `Until recently the argument for management was leverage. One person can only build so much; a team multiplies output. Accepting coordination overhead was the price of scale.`,
          `That trade moved. When AI covers the adjacent functions — design, boilerplate, analysis, copy, first-draft research — a single senior person can carry work that used to need a squad. The leverage argument no longer belongs exclusively to management.`,
          `This produces a third option that did not exist when the binary was formed: the **High-Impact Individual Contributor**, a senior professional with no direct reports who owns an outcome end to end because AI staffs the functions around them.`,
          `It is not a compromise between the two tracks. It is the IC track with the leverage problem solved.`,
        ],
      },
      {
        heading: 'How to actually choose',
        body: [`Three questions that resolve it faster than a pros-and-cons list:`],
        list: [
          '**Does your employer have a real IC ladder above senior?** Look at who is actually at Staff and Principal, and what they are paid. If nobody is, the track is decorative and the decision is being made for you.',
          '**What do you want to be excellent at in five years?** Both paths make you good at something. Only one of them keeps you good at the thing you are good at now.',
          '**Do you want scope, or do you want ownership?** Management gives you scope — more surface, more people, more of the org. The IC track gives you ownership — fewer things, further, with your hands on them.',
        ],
      },
    ],
    faq: [
      {
        q: 'Is staff engineer equivalent to manager?',
        a: 'At companies with a formalised IC ladder, staff engineer is generally levelled equivalent to engineering manager, and principal engineer to senior manager or director. Compensation bands are comparable — Staff Engineer median base pay was roughly $244K in the United States in 2026, close to Principal Engineer at $243K. The equivalence is real where the ladder is real; at companies that never built the IC track, management remains the only path to those bands.',
      },
      {
        q: 'Can you go back to being an IC after management?',
        a: 'Yes, and it is increasingly common — it is the dominant origin of the High-Impact Individual Contributor archetype. The cost is that hands-on skill decays while you manage, roughly on a two-year horizon before relearning becomes substantial. What transfers is systems judgment, organisational literacy, and knowing which problems are worth solving. What has to be rebuilt is fluency with the tools.',
      },
      {
        q: 'Does management pay more than staff engineer?',
        a: 'Not reliably. Where a real IC ladder exists, the bands converge at staff and principal level and then track each other upward. The belief that management pays more comes from organisations whose IC ladder stops at senior, where management genuinely is the only route to higher pay. That is a fact about a specific employer rather than about the tracks in general.',
      },
      {
        q: 'What is the third option besides IC and manager?',
        a: 'The High-Impact Individual Contributor (HI-C): a senior professional with no direct reports who carries work from hypothesis to measurable business outcome end to end, using AI to cover the adjacent functions that previously required a team. It resolves the historic argument for management — that only a team provides leverage — without the coordination overhead. It is the IC track with the leverage problem solved.',
      },
    ],
    related: [
      { label: 'What is a HI-C?', href: '/hi-c/' },
      { label: 'The IC career ladder, explained', href: '/guides/ic-career-ladder/' },
    ],
  },

  {
    slug: 'ic-career-ladder',
    title: 'The IC Career Ladder',
    h1: 'The IC career ladder: what each rung actually means',
    metaTitle: 'The IC Career Ladder: Senior, Staff, Principal and Beyond | aicareer.me',
    metaDescription:
      'What actually changes between senior, staff, principal and distinguished engineer — scope, evidence, and compensation. Plus where the ladder stops at most companies, and the rung AI added on top.',
    intent:
      'You want to know what is above senior, what each level actually requires, and whether the ladder at your company is real.',
    lede: `Every company publishes a levelling document and most of them are unreadable. Stripped of the language, the IC ladder measures one thing that changes at each rung: **the size of the blast radius you are trusted with**. Everything else — scope, influence, ambiguity — is a restatement of that.`,
    sections: [
      {
        heading: 'The rungs, in plain terms',
        table: {
          columns: ['Level', 'Trusted with', 'Evidence people look for'],
          rows: [
            {
              label: 'Senior',
              values: [
                'A feature or component, end to end',
                'Ships reliably without supervision; other people can build on the result',
              ],
            },
            {
              label: 'Staff',
              values: [
                'A system, across team boundaries',
                'Prevented a costly mistake; aligned teams who disagreed; owns a technical direction',
              ],
            },
            {
              label: 'Principal',
              values: [
                'A domain, with organisational consequences',
                'Set a direction the company followed; the decision is visible in the architecture years later',
              ],
            },
            {
              label: 'Distinguished / Fellow',
              values: [
                'A bet the company is making',
                'Rare, often title-by-reputation; frequently created for a specific person',
              ],
            },
          ],
        },
        body: [
          `The transition people find hardest is senior to staff, and it is not a skill problem. Senior is rewarded for delivering what you were given. Staff is rewarded for identifying what should have been given — which requires visibility into things nobody handed you, and the judgment to be right about them.`,
        ],
      },
      {
        heading: 'Where the ladder stops',
        body: [
          `Most companies formalise the ladder up to senior and improvise above it. The published document may list staff and principal, but if nobody holds those titles, the levels are aspirational.`,
          `Two checks that tell you the truth quickly. **Who currently holds the level above you, and what do they actually do?** If the answer is "nobody" or "the person who founded the codebase", the rung is decorative. **Is there a promotion path that does not require direct reports?** If every senior person with real influence also has a team, the IC ladder is a label on the management ladder.`,
          `This matters more than the levelling criteria themselves. You cannot be promoted to a level that does not functionally exist, no matter how well you meet its written definition.`,
        ],
      },
      {
        heading: 'Compensation by rung',
        body: [
          `United States figures for 2026: Staff Engineer median base pay around **$244K**, ranging roughly **$199K–$300K** across the middle of the distribution. Principal Engineer averages around **$243K** base, with total compensation reaching **$630K or more** at the largest technology employers and past **$1M** at the very top.`,
          `Base pay flattens faster than total compensation. Between staff and principal, most of the increase arrives as equity, which means the number you negotiate matters less than the company you negotiate it at.`,
        ],
      },
      {
        heading: 'The rung the ladder does not have yet',
        body: [
          `Every level above is defined by **scope** — more systems, more surface, more of the organisation. That definition assumes the constraint on an individual is capacity, and that scaling past it requires other people.`,
          `AI moved that constraint. A senior person who staffs the adjacent functions with AI — design, code, analysis, copy, go-to-market — can carry an outcome that scope-based levelling assumes needs a team.`,
          `That is the **High-Impact Individual Contributor**: a rung defined by leverage rather than by scope. Almost no company has it in a levelling document yet. The work is being done well before the title exists, which is the usual order.`,
          `The practical consequence: if you are measuring yourself against a ladder that levels by scope, you may be underrating what you can already do.`,
        ],
      },
    ],
    faq: [
      {
        q: 'What comes after senior engineer?',
        a: 'The standard IC ladder continues senior → staff → principal → distinguished or fellow. Staff is trusted with a system across team boundaries; principal with a domain that has organisational consequences; distinguished is rare and often created for a specific person. The hardest transition is senior to staff, because senior is rewarded for delivering what you were given and staff for identifying what should have been given.',
      },
      {
        q: 'How do I know if my company has a real IC ladder?',
        a: 'Two checks. First, look at who currently holds the level above you and what they actually do — if nobody holds it, or only the person who founded the codebase does, the rung is decorative. Second, ask whether there is a promotion path that does not require direct reports. If every senior person with real influence also manages a team, the IC ladder is a label on the management ladder rather than a separate track.',
      },
      {
        q: 'How long does it take to go from senior to staff?',
        a: 'There is no reliable timeline, because the promotion is not granted for accumulated time. Senior is rewarded for delivering assigned work well; staff is rewarded for identifying work nobody assigned and being right about it. People who make the jump quickly usually do so by finding a problem with organisational consequences that no one owned, rather than by doing more of what earned them senior.',
      },
      {
        q: 'Is there a level above principal engineer?',
        a: 'Distinguished engineer and fellow exist at large companies, but they are rare and frequently created for a specific individual rather than filled from a pipeline. More practically, the emerging rung is not higher on the same axis at all: the High-Impact Individual Contributor is defined by leverage rather than by scope — carrying an outcome end to end using AI to cover adjacent functions, rather than being trusted with progressively more surface.',
      },
    ],
    related: [
      { label: 'Staff engineer vs manager', href: '/guides/staff-engineer-vs-manager/' },
      { label: 'What is a HI-C?', href: '/hi-c/' },
    ],
  },
];

export function getGuide(slug) {
  return guides.find((g) => g.slug === slug);
}
