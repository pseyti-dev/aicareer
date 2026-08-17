#!/usr/bin/env bash
# Validate the SEO ledger whenever it is edited.
#
# Prompts are advisory; hooks are not. CLAUDE.md tells Claude the ledger rules,
# but a hook enforces them regardless of whether the model followed the
# instruction. This is the difference that matters for a file whose integrity
# is the entire point of the system.
#
# Wired as a PostToolUse hook on Edit|Write|MultiEdit. Exiting 2 sends stderr
# back to Claude as feedback so it can fix the problem in the same turn.

set -uo pipefail

payload=$(cat)

# Only act on edits to the ledger itself.
if ! grep -q 'seo/ledger\.yaml' <<<"$payload"; then
  exit 0
fi

cd "${CLAUDE_PROJECT_DIR:-.}" || exit 0
[[ -f seo/validate_ledger.py ]] || exit 0

if ! output=$(python seo/validate_ledger.py 2>&1); then
  echo "Ledger validation failed. Fix these before continuing:" >&2
  echo "$output" >&2
  echo "" >&2
  echo "Reminder: fields on live or concluded experiments are frozen, and" >&2
  echo "verdicts are written only by seo/evaluate.py." >&2
  exit 2
fi

exit 0
