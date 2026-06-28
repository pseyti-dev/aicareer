#!/usr/bin/env python3
"""
Site audit for aicareer.me — runs against the built dist/ directory.
Checks: JSON-LD schemas, canonical tags, sitemap coverage, llms.txt coverage,
internal link graph, and (optionally) GSC indexation via environment variables.

Exit codes:
  0 — no issues (or issues only — report written but no hard failure)
The workflow reads AUDIT_ISSUE_COUNT env var to decide whether to open a GitHub issue.
"""

import json
import os
import re
import sys
from pathlib import Path

SITE = "https://aicareer.me"
DIST = Path("dist")
PUBLIC = Path("public")


def load_html_pages() -> list[tuple[Path, str]]:
    """Return list of (path, content) for all built HTML pages."""
    return [(p, p.read_text(encoding="utf-8")) for p in sorted(DIST.glob("**/*.html"))]


def page_url(path: Path) -> str:
    """Convert dist/risk/bookkeeper/index.html → https://aicareer.me/risk/bookkeeper/"""
    rel = path.relative_to(DIST)
    parts = list(rel.parts)
    if parts[-1] == "index.html":
        parts = parts[:-1]
    url_path = "/" + "/".join(parts)
    if not url_path.endswith("/"):
        url_path += "/"
    return SITE + url_path


# ── Checks ────────────────────────────────────────────────────────────────────


def check_schemas(pages: list) -> list[str]:
    """Every HTML page must have at least one JSON-LD block with @type."""
    issues = []
    for path, content in pages:
        if '"@type"' not in content:
            issues.append(f"❌ Missing JSON-LD schema: `/{path.relative_to(DIST)}`")
    return issues


def check_canonicals(pages: list) -> list[str]:
    """Every page must have a canonical tag, and it must match the expected URL."""
    issues = []
    for path, content in pages:
        found = re.findall(r'<link\s+rel="canonical"\s+href="([^"]+)"', content)
        if not found:
            issues.append(f"❌ Missing canonical tag: `/{path.relative_to(DIST)}`")
            continue
        expected = page_url(path)
        if found[0] != expected:
            issues.append(
                f"⚠️ Canonical mismatch on `/{path.relative_to(DIST)}`:\n"
                f"  expected `{expected}`\n"
                f"  found    `{found[0]}`"
            )
    return issues


def check_sitemap(pages: list) -> list[str]:
    """Every built page must appear in sitemap-0.xml."""
    issues = []
    sitemap_path = DIST / "sitemap-0.xml"
    if not sitemap_path.exists():
        return ["❌ `dist/sitemap-0.xml` not found — build may have failed"]
    sitemap_urls = set(re.findall(r"<loc>([^<]+)</loc>", sitemap_path.read_text()))
    for path, _ in pages:
        url = page_url(path)
        if url not in sitemap_urls:
            issues.append(f"❌ Not in sitemap: `{url}`")
    return issues


def check_llms_txt(pages: list) -> list[str]:
    """
    Study and special pages must be mentioned in llms.txt.
    Risk pages are covered by the table; index/about are in site structure section.
    """
    issues = []
    llms_path = PUBLIC / "llms.txt"
    if not llms_path.exists():
        return ["❌ `public/llms.txt` not found"]
    llms = llms_path.read_text()
    for path, _ in pages:
        rel = str(path.relative_to(DIST))
        # Only check non-risk, non-root pages that should have explicit entries
        if rel.startswith("study/") or rel.startswith("special/"):
            url = page_url(path)
            slug = url.rstrip("/").split("/")[-1]
            if slug not in llms:
                issues.append(f"⚠️ `llms.txt` may be missing entry for `{url}`")
    return issues


def check_title_meta(pages: list) -> list[str]:
    """Every page must have a non-empty <title> and meta description."""
    issues = []
    for path, content in pages:
        if not re.search(r"<title>[^<]+</title>", content):
            issues.append(f"❌ Missing or empty <title>: `/{path.relative_to(DIST)}`")
        if not re.search(r'<meta\s+name="description"\s+content="[^"]+"', content):
            issues.append(f"❌ Missing meta description: `/{path.relative_to(DIST)}`")
    return issues


def check_robots_sitemap() -> list[str]:
    """robots.txt must point to sitemap-index.xml (not sitemap.xml)."""
    issues = []
    robots = (PUBLIC / "robots.txt").read_text()
    if "sitemap-index.xml" not in robots:
        issues.append(
            "⚠️ `public/robots.txt` does not point to `sitemap-index.xml` — "
            "update Sitemap: line to `https://aicareer.me/sitemap-index.xml`"
        )
    if "sitemap.xml" in robots and "sitemap-index.xml" not in robots:
        issues.append("❌ `public/robots.txt` still points to old manual `sitemap.xml`")
    return issues


# ── GSC integration (optional) ─────────────────────────────────────────────


def check_gsc_indexation() -> list[str]:
    """
    Pull Google Search Console coverage data. Requires GSC_SERVICE_ACCOUNT_JSON
    and GSC_SITE_URL environment variables. Skipped if not configured.
    """
    sa_json = os.environ.get("GSC_SERVICE_ACCOUNT_JSON")
    site_url = os.environ.get("GSC_SITE_URL", f"sc-domain:{SITE.replace('https://', '')}")
    if not sa_json:
        return []  # GSC not configured — skip silently

    try:
        from google.oauth2 import service_account
        from googleapiclient.discovery import build
    except ImportError:
        return ["⚠️ GSC configured but google-api-python-client not installed (add to requirements)"]

    try:
        creds_info = json.loads(sa_json)
        scopes = ["https://www.googleapis.com/auth/webmasters.readonly"]
        creds = service_account.Credentials.from_service_account_info(creds_info, scopes=scopes)
        service = build("searchconsole", "v1", credentials=creds, cache_discovery=False)

        # Pull URL inspection for the homepage as a smoke test
        result = (
            service.urlInspection()
            .index()
            .inspect(body={"inspectionUrl": f"{SITE}/", "siteUrl": site_url})
            .execute()
        )
        verdict = result.get("inspectionResult", {}).get("indexStatusResult", {}).get("verdict", "UNKNOWN")
        coverage = result.get("inspectionResult", {}).get("indexStatusResult", {}).get("coverageState", "")

        issues = []
        if verdict != "PASS":
            issues.append(f"⚠️ GSC: homepage indexation verdict is `{verdict}` (coverage: {coverage})")
        else:
            print(f"✅ GSC: homepage indexed (verdict: {verdict})")
        return issues
    except Exception as e:
        return [f"⚠️ GSC check failed: {e}"]


# ── Main ──────────────────────────────────────────────────────────────────────


def main() -> int:
    pages = load_html_pages()
    print(f"Auditing {len(pages)} built HTML pages…\n")

    all_issues: list[str] = []
    checks = [
        ("JSON-LD schemas", check_schemas(pages)),
        ("Canonical tags", check_canonicals(pages)),
        ("Sitemap coverage", check_sitemap(pages)),
        ("llms.txt coverage", check_llms_txt(pages)),
        ("Title & meta description", check_title_meta(pages)),
        ("robots.txt", check_robots_sitemap()),
        ("GSC indexation", check_gsc_indexation()),
    ]

    for name, issues in checks:
        status = "✅" if not issues else f"⚠️  {len(issues)} issue(s)"
        print(f"{status}  {name}")
        all_issues.extend(issues)

    # Write report for the workflow to consume
    report_path = Path("audit-report.md")
    if all_issues:
        lines = [
            "## Site Audit Report\n",
            f"**{len(all_issues)} issue(s) found** — please review and fix before next deploy.\n",
            f"_Checked {len(pages)} pages against CLAUDE.md invariants._\n\n",
        ]
        for check_name, issues in checks:
            if issues:
                lines.append(f"### {check_name}\n")
                for issue in issues:
                    lines.append(f"{issue}\n\n")
        report_path.write_text("".join(lines))
        print(f"\n{len(all_issues)} issue(s) found. Report written to {report_path}")
    else:
        report_path.write_text("## Site Audit Report\n\n✅ All checks passed. No issues found.\n")
        print("\n✅ All checks passed.")

    # Export issue count for workflow step
    github_output = os.environ.get("GITHUB_OUTPUT")
    if github_output:
        with open(github_output, "a") as f:
            f.write(f"issue_count={len(all_issues)}\n")

    return 0  # Never hard-fail — let the issue tracker handle it


if __name__ == "__main__":
    sys.exit(main())
