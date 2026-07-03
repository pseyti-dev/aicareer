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
  action: '',
  emailField: 'fields[email]',
  careerField: 'fields[career]',
};
