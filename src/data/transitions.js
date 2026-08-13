// ─── Transition routes into the HI-C role ────────────────────────────────────
//
// PERSONA.md §2 corrected the axis: the dominant origin is a manager, director
// or VP returning to craft, not an IC escaping automation. So these routes are
// keyed by *track*, not by profession.
//
// Scope note: hic.js lists five origins, but only three earn their own page.
// Director, VP and Head of Product produce near-identical content — all three
// are "senior leader returning to craft" — so they are merged rather than split
// into pages that would be thin and would cannibalise each other. Founder is
// left out: genuinely distinct emotionally, but too little search volume to
// support a page that meets the quality bar set in guides.js.
//
// The gaps really are different per origin, and that is what makes these worth
// writing at all:
//   engineering manager  — org literacy intact, craft decayed
//   senior IC            — craft intact, scope and autonomy missing
//   director / VP        — best at choosing what matters, furthest from tools

export const transitions = [
  {
    slug: 'engineering-manager',
    from: 'Engineering Manager',
    title: 'Engineering Manager to HI-C',
    h1: 'From engineering manager to HI-C',
    metaTitle: 'Engineering Manager to IC: the HI-C Transition | aicareer.me',
    metaDescription:
      'Leaving the management track to build again. What transfers from managing, what decayed, how the compensation conversation actually goes, and a 90-day plan to operate as a High-Impact Individual Contributor.',
    situation:
      'You took the team because it was the only promotion available. The work you were good at is now something other people do while you sit in the meeting about it.',
    lede: `This is the most common route into the role — common enough that the archetype was largely coined to describe it. You are not starting over. You are recovering one capability while keeping several that most individual contributors never develop.`,
    transfers: [
      {
        asset: 'Knowing which problems are worth solving',
        why: 'Years of watching work fail for non-technical reasons. Most ICs pick problems by what is interesting; you pick by what matters, and that judgment is the part AI does not supply.',
      },
      {
        asset: 'Organisational literacy',
        why: 'You know how decisions actually get made, who has to be convinced, and which objections are real. A HI-C operating end to end needs this constantly and rarely has it.',
      },
      {
        asset: 'Written communication under scrutiny',
        why: 'Management forces you to write things that survive contact with skeptical readers. That is exactly the skill that makes a one-person output legible to an organisation.',
      },
      {
        asset: 'Scoping and sequencing',
        why: 'You have spent years breaking work into pieces and ordering them. Doing it for yourself is the same skill with less negotiation.',
      },
    ],
    gaps: [
      {
        gap: 'Hands-on fluency, and it decayed faster than you think',
        honest:
          'Not the concepts — the muscle memory. Tooling moved, and the gap feels larger than it is because you are comparing yourself against your best day rather than your average one.',
        fix: 'Rebuild by shipping something real and small, not by studying. The fastest route back is a project with a user, even a user of one.',
      },
      {
        gap: 'Comfort with being the one who is wrong',
        honest:
          'As a manager, being wrong was expensive and public, so you learned to hedge. Building requires being wrong quickly and often.',
        fix: 'Deliberately work where the feedback loop is short enough that being wrong costs minutes.',
      },
      {
        gap: 'The instinct to delegate',
        honest:
          'Your reflex when hitting an adjacent function is to find the person who owns it. The HI-C reflex is to staff it with AI and keep going.',
        fix: 'Notice the reflex. The next three times you would have filed a ticket, do it yourself with AI assistance and compare the elapsed time.',
      },
    ],
    compensation: [
      `The fear is a pay cut, and it is usually misplaced — but for a reason worth being precise about.`,
      `At companies with a real IC ladder, engineering manager maps to staff, and senior manager or director to principal. The bands are comparable: Staff Engineer median base pay was roughly **$244K** in the United States in 2026, and Principal Engineer around **$243K**, with total compensation reaching well beyond that at the largest employers.`,
      `So the negotiation is not about track. **It is about level.** The failure mode is accepting a downlevel because moving to IC feels like a step back — and downlevelling is very hard to undo.`,
      `At companies where the IC ladder stops at senior, the pay cut is real. That is a fact about your employer, and it is usually the signal that the move requires changing companies rather than changing teams.`,
    ],
    plan: [
      {
        window: 'Days 1–30',
        action: 'Ship one thing end to end, alone',
        detail:
          'Small scope, real user, no handoffs. The point is not the output — it is discovering exactly which parts of the loop you can no longer close without help.',
      },
      {
        window: 'Days 31–60',
        action: 'Staff your weakest adjacent function with AI',
        detail:
          'Whatever you reflexively wanted to delegate in month one. Do it yourself with AI covering the craft you lack, and keep the result honest about where it is merely adequate.',
      },
      {
        window: 'Days 61–90',
        action: 'Make the output legible',
        detail:
          'Write up what you built and what it changed, in the register you used as a manager. This is the artifact that makes the case internally, and the one most returning managers skip.',
      },
    ],
    trap: {
      name: 'Managing without the title',
      body: `The failure specific to this route is drifting back into coordination — becoming the person who unblocks everyone, reviews everything, and mentors constantly, while shipping nothing of your own. It feels productive because it is the shape of work you are good at, and it is rewarded socially. But it produces no artifact, and at review time there is nothing to point at. If most of your week is spent making other people's work possible, you did not change tracks; you changed titles.`,
    },
    faq: [
      {
        q: 'Is it hard to go from engineering manager back to IC?',
        a: 'The hard part is narrower than people expect. Organisational literacy, judgment about which problems matter, and written communication all transfer intact — and most individual contributors never develop them. What decayed is hands-on fluency and tolerance for being wrong quickly. Both rebuild through shipping something small and real, not through study. The bigger risk is social rather than technical: drifting back into coordination work because it is the shape you are good at.',
      },
      {
        q: 'Will I take a pay cut moving from manager to IC?',
        a: 'At companies with a formalised IC ladder, usually not. Engineering manager typically maps to staff engineer, and senior manager or director to principal, with comparable bands — roughly $244K median base for staff and $243K for principal in the United States in 2026. The negotiation is about level, not track, and the failure mode is accepting a downlevel because the move feels like a step back. At companies whose IC ladder stops at senior, the cut is real, and that usually means the move requires changing employers.',
      },
      {
        q: 'How long does it take to get technical again after managing?',
        a: 'Expect a productive first month and a genuinely useful third. The concepts did not leave; the muscle memory and the tooling did. The gap also feels larger than it is because you are comparing your current output to your best day as an IC rather than your average one. Shipping one small thing end to end, alone, surfaces the real gaps faster than any amount of catching up on reading.',
      },
    ],
  },

  {
    slug: 'senior-ic',
    from: 'Senior or Staff IC',
    title: 'Senior IC to HI-C',
    h1: 'From senior IC to HI-C',
    metaTitle: 'Senior Engineer to HI-C: Levelling Up Without Managing | aicareer.me',
    metaDescription:
      'You have the craft. What is missing is scope, autonomy and distribution. How a senior or staff individual contributor becomes a High-Impact Individual Contributor without taking a team.',
    situation:
      'You are good at the work and it is no longer the constraint. The ceiling you are hitting is not skill — it is that nobody hands you problems big enough to matter.',
    lede: `This is the largest group and the one with the least defined path. You already have the thing that cannot be shortcut. What is missing is not craft; it is the permission, scope and reach that turn craft into outcomes — and none of that arrives by being better at your current job.`,
    transfers: [
      {
        asset: 'Depth in one discipline',
        why: 'The non-negotiable prerequisite. Adequacy in adjacent functions only works when anchored by real depth somewhere — otherwise there is no judgment to evaluate what AI produces.',
      },
      {
        asset: 'Working taste',
        why: 'You already recognise when something is wrong before you can articulate why. That is the dimension AI does not supply and the reason the role stays senior.',
      },
      {
        asset: 'Delivery reliability',
        why: 'You ship. The credibility that buys you a larger mandate is already earned; it is usually just not being spent.',
      },
    ],
    gaps: [
      {
        gap: 'You are given slices, not outcomes',
        honest:
          'Your scope is defined by someone else, and success is measured as completing what you were assigned. Nothing about doing that better changes it.',
        fix: 'Take an unowned problem with visible business consequences and close it without being asked. That is the transition, and it is not a promotion you request.',
      },
      {
        gap: 'Adjacent functions still route through other people',
        honest:
          'You file tickets for design, wait on data, and hand off go-to-market. Each handoff is a queue you do not control.',
        fix: 'Pick the function that blocks you most often and cover it yourself with AI at merely-acceptable quality. Adequate and immediate beats excellent and queued.',
      },
      {
        gap: 'No distribution of your own',
        honest:
          'Your reach is granted by your title. If you changed employers tomorrow, your audience would be zero — which is also why your influence caps at whatever the org chart allows.',
        fix: 'Build one channel that survives changing employer: writing, a maintained project, a community presence. This is the slowest of the gaps to close and the most durable once closed.',
      },
      {
        gap: 'Judgment tested only inside a defined spec',
        honest:
          'You make excellent calls when the problem is framed. Framing the problem is a different skill, and it is the one staff-level promotions actually test.',
        fix: 'Practise deciding what should be built, not only how — and write the reasoning down so it can be checked against outcomes later.',
      },
    ],
    compensation: [
      `This transition usually pays through level rather than through a title change, because most companies have no HI-C band to put you in.`,
      `The practical path runs through the existing ladder: senior to staff to principal, with Staff Engineer median base around **$244K** and Principal around **$243K** in the United States in 2026, and total compensation considerably higher at the largest employers.`,
      `The leverage you build is what makes the case for the level. Be careful of the inverse trap: doing HI-C work at senior pay for years because the output is impressive and nobody had to relevel you to get it.`,
    ],
    plan: [
      {
        window: 'Days 1–30',
        action: 'Find the unowned problem',
        detail:
          'Something with visible business consequence that no team has claimed. It usually sits in the gap between two teams, which is exactly why nobody owns it.',
      },
      {
        window: 'Days 31–60',
        action: 'Close it without handoffs',
        detail:
          'Cover the adjacent functions yourself with AI rather than queueing them. Note the elapsed time versus what the handoff path would have cost — that number is your argument.',
      },
      {
        window: 'Days 61–90',
        action: 'Publish the reasoning, not just the result',
        detail:
          'Write what you decided and why, where people outside your team can read it. This starts the distribution you do not have and doubles as the promotion artifact.',
      },
    ],
    trap: {
      name: 'Waiting to be given the scope',
      body: `The trap here is treating the transition as a promotion to request rather than a way of working to adopt. Staff-level scope is almost never granted in advance — it is recognised after someone demonstrates it. If you are waiting for a larger mandate before operating end to end, you will wait indefinitely, because the mandate is the reward for having already done it once without permission.`,
    },
    faq: [
      {
        q: 'How do I become a staff engineer without managing?',
        a: 'Staff level is recognised after the fact rather than granted in advance. Senior is rewarded for delivering assigned work well; staff is rewarded for identifying work nobody assigned and being right about it. The practical move is to find an unowned problem with visible business consequences — usually in the gap between two teams — and close it end to end without being asked, covering adjacent functions yourself rather than queueing handoffs.',
      },
      {
        q: 'What is the difference between a staff engineer and a HI-C?',
        a: 'A staff engineer owns a system across team boundaries but still depends on other functions to ship — design, data, go-to-market. A HI-C owns the entire outcome, staffing those adjacent functions with AI instead of handing off. Staff is a level on a scope-based ladder; HI-C is defined by leverage. In practice many staff engineers are already partway there and are levelled by a system that does not measure what they actually do.',
      },
      {
        q: 'Do I need my own audience to be a HI-C?',
        a: 'It is one of the five dimensions, and the slowest to build. Own distribution means being able to reach an audience or a decision-maker without organisational permission — through writing, a maintained project, or a community presence. It matters because reach granted by title disappears when you change employers, and because influence otherwise caps at whatever the org chart allows. You can operate as a HI-C without it, but your ceiling stays organisational.',
      },
    ],
  },

  {
    slug: 'director-or-vp',
    from: 'Director, VP or Head of Function',
    title: 'Director or VP to HI-C',
    h1: 'From director or VP to HI-C',
    metaTitle: 'VP or Director to IC: Returning to Craft as a HI-C | aicareer.me',
    metaDescription:
      'Trading org scope for direct output. What senior leaders bring to the HI-C role, how far the tools have moved, the compensation reality, and a 90-day plan back to building.',
    situation:
      'Your calendar is the job. You are three layers from the work, spend most of your time building alignment rather than anything else, and the last thing you personally made was a deck.',
    lede: `This is the route the term was coined around — the operator who left the top of the org chart to build again. You arrive with the scarcest input and the largest tooling gap at the same time, and both facts matter.`,
    transfers: [
      {
        asset: 'Choosing what is worth doing',
        why: 'The rarest input and the one that does not decay. You have spent years watching resources go into work that did not matter, and that pattern recognition transfers completely.',
      },
      {
        asset: 'Reading an organisation',
        why: 'You know where decisions really get made and which objections are political rather than substantive. A HI-C operating alone needs this to get anything adopted.',
      },
      {
        asset: 'Standing to take an unpopular position',
        why: 'You have the reputation and the relationships to be wrong publicly and survive it — which is exactly what building fast requires and what junior people cannot afford.',
      },
      {
        asset: 'Narrative',
        why: 'You can make work legible to people who will never read the detail. Most individual output fails not on quality but on nobody understanding what it changed.',
      },
    ],
    gaps: [
      {
        gap: 'You are further from the tools than you believe',
        honest:
          'Not a little rusty — the workflow changed underneath you. Assuming otherwise is the fastest way to conclude the transition is not working.',
        fix: 'Budget real relearning time and treat it as the job for a stretch, not something to fit between meetings.',
      },
      {
        gap: 'Everything routes through people by reflex',
        honest:
          'Your instinct on any problem is to find the right owner and align them. That reflex is now the overhead you left to escape.',
        fix: 'Ban the handoff for one project. When you hit an adjacent function, staff it with AI and continue.',
      },
      {
        gap: 'Your judgment is calibrated on quarters, not days',
        honest:
          'Leadership work has slow feedback. Building has fast feedback, and slow-loop instincts produce over-planning of things that should have been tried.',
        fix: 'Deliberately choose work where you learn whether you were right within a day.',
      },
      {
        gap: 'Identity',
        honest:
          'The hardest gap and the one nobody writes about. Scope was your status marker for years, and giving it up reads as demotion to people around you — sometimes including your partner.',
        fix: 'Decide in advance what you will say about it. The people who make this transition well have a clear story about why, and are not defending it.',
      },
    ],
    compensation: [
      `Be direct about this: **this is the transition most likely to involve a genuine pay cut**, and pretending otherwise helps nobody.`,
      `Director and VP compensation is often set by org scope — headcount, budget, span. There is frequently no IC band that reaches it, because the ladder was built on the assumption that the top of it manages people.`,
      `Principal-level IC roles at large technology employers do reach comparable numbers, with total compensation past **$630K** at the top end. But those roles are scarce and competitive, and the honest version is that you may be trading compensation for time spent on work you want to do.`,
      `This is also the strongest argument for the organisational changes the framework describes: comp ladders that treat management as the only serious path are precisely what makes this move expensive.`,
    ],
    plan: [
      {
        window: 'Days 1–30',
        action: 'Rebuild the loop before choosing the problem',
        detail:
          'Resist starting with something strategic. Pick something small enough that you rediscover the tools rather than commanding them from a distance.',
      },
      {
        window: 'Days 31–60',
        action: 'Apply the one thing you have that others do not',
        detail:
          'Point your judgment at a real problem: something the organisation keeps failing to fix and that you can now attempt alone. This is where the transition starts paying.',
      },
      {
        window: 'Days 61–90',
        action: 'Ship and narrate',
        detail:
          'Deliver the outcome and tell the story of what it changed. Your narrative skill is the multiplier most returning ICs lack, and it is what makes a single person legible at organisational scale.',
      },
    ],
    trap: {
      name: 'Advising instead of building',
      body: `The specific failure here is becoming a very senior advisor: reviewing, steering, weighing in, being consulted — without producing anything yourself. It is comfortable, the organisation will happily let you, and it is genuinely useful in small doses. But it is the old job with a new title and no team, which is the worst of both. If a quarter passes and you cannot point to something you personally made, the transition did not happen.`,
    },
    faq: [
      {
        q: 'Why would a VP go back to being an individual contributor?',
        a: 'The most cited reasons are escaping coordination overhead and returning to work with a short feedback loop. Senior leadership is largely alignment work — meetings, decks, and building agreement — and AI has made it possible for one senior person to produce what previously required organising a team to produce. For people who took management because it was the only promotion available, that changes the trade fundamentally.',
      },
      {
        q: 'Does going from VP to IC mean a pay cut?',
        a: 'Often yes, and this is the transition most likely to involve one. Director and VP compensation is frequently set by org scope — headcount, budget, span — and many companies have no IC band that reaches it. Principal-level roles at the largest technology employers do reach comparable total compensation, past $630K at the top end, but those roles are scarce and competitive. The honest framing is that you may be trading compensation for the work you want to do.',
      },
      {
        q: 'What is the hardest part of moving from leadership back to building?',
        a: 'Two things, and the second is rarely discussed. The practical one is that you are further from the tools than you believe — the workflow changed, not just your fluency. The harder one is identity: scope was your status marker for years, and giving it up reads as demotion to people around you. The people who make this transition well decide in advance what they will say about it, and are not defending it.',
      },
    ],
  },
];

export function getTransition(slug) {
  return transitions.find((t) => t.slug === slug);
}
