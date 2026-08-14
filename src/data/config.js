// ─── Site configuration ──────────────────────────────────────────────────────

// Email capture (MailerLite HTML form).
// To activate:
//   1. Create a free MailerLite account (free up to 1,000 subscribers)
//   2. Create a form: Forms → Embedded → HTML form. Add a custom text field "career".
//   3. Paste the form's action URL below (looks like:
//      https://assets.mailerlite.com/jsonp/XXXXXX/forms/YYYYYYYYYY/subscribe)
//   4. In MailerLite, create an automation: trigger "joins group" → send email
//      with the report link https://aicareer.me/reports/{career}.pdf
// While `action` is empty, career pages show a direct PDF download instead of
// the form — the report ships value from day one either way.
export const emailCapture = {
  action: 'https://assets.mailerlite.com/jsonp/2486960/forms/191930416809116786/subscribe',
  emailField: 'fields[email]',
  careerField: 'fields[career]',
};

// Tool-stack referral (STRATEGY.md §6, monetisation step 2).
// While `param` is empty, every tool link on the HI-C surfaces is plain — no
// affiliate relationship. When the owner joins the referral programmes, set
// `param` to the query string to append (e.g. 'via=aicareer' or 'ref=xxxx').
// A single param is applied to every tool; per-tool overrides can be added
// later if the programmes differ. Same opt-in philosophy as emailCapture.action.
export const toolStackRef = {
  param: '',
};
