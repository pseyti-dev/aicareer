// ─── The HI-C tool stack ──────────────────────────────────────────────────────
//
// Monetisation step 2 in STRATEGY.md §6: for this audience, courses do not
// convert — leverage does. The tools a HI-C uses to staff adjacent functions
// with AI are recurring, high-ticket, and a genuine fit.
//
// Framed as reference, not as a sales pitch. This is the concrete answer to the
// "adjacent-function coverage" dimension — the actual tools that let one person
// cover design, engineering, data, automation and go-to-market. Presented that
// way it earns its place with persona A; presented as an affiliate wall it would
// not (PERSONA.md §4).
//
// Honesty note: these are genuine recommendations with NO affiliate relationship
// at time of writing. `ref` in config.js is empty, so every link is plain. When
// the site owner joins a program, filling `ref` appends the referral param —
// same pattern as the MailerLite toggle. Nothing here is a paid placement.

export const toolStack = [
  {
    function: 'Engineering',
    covers: 'Ship code without a full-time engineer beside you',
    tool: 'Cursor',
    what: 'AI-native editor. Describes the change, reviews the diff, keeps you in the loop.',
    url: 'https://cursor.com',
  },
  {
    function: 'Prototyping',
    covers: 'Turn an idea into a working app before committing a team',
    tool: 'Lovable',
    what: 'Prompt-to-app. Useful for the "ship one thing end to end" move the transitions describe.',
    url: 'https://lovable.dev',
  },
  {
    function: 'Automation',
    covers: 'Wire systems together without waiting on a platform team',
    tool: 'n8n',
    what: 'Open-source workflow automation. Self-hostable, which the more technical audience prefers.',
    url: 'https://n8n.io',
  },
  {
    function: 'Narrative & decks',
    covers: 'Make a one-person output legible to an organisation',
    tool: 'Gamma',
    what: 'AI decks and docs. The narrative layer returning managers already know they need.',
    url: 'https://gamma.app',
  },
  {
    function: 'Judgment & drafting',
    covers: 'The reasoning partner across every function above',
    tool: 'Claude',
    what: 'Analysis, drafting, and thinking through decisions where there is no correct answer.',
    url: 'https://claude.ai',
  },
];
