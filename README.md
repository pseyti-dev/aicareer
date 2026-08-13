# aicareer.me — Astro v3

Free AI Career Risk Calculator. Built with Astro for guaranteed static HTML output on every page.

## Stack

- **Astro 4** — static site generation, zero-JS by default
- **React** — interactive islands only (career selector, skill checklist, risk gauge)
- **Tailwind CSS** — styling
- **GitHub Actions** — auto-deploy to Hostinger on every push to `main`

## Local Development

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # generates /dist with full static HTML
npm run preview    # preview the built site locally
```

## Verifying the Build

After `npm run build`, confirm HTML is being generated:

```bash
find dist -name "*.html" | sort
# Expected output:
# dist/about/index.html
# dist/index.html
# dist/risk/bookkeeper/index.html
# dist/risk/customer-service-rep/index.html
# dist/risk/data-entry-clerk/index.html
# dist/risk/loan-officer/index.html
# dist/risk/medical-coder/index.html
# dist/risk/paralegal/index.html
# dist/risk/sales-representative/index.html
# dist/special/ai-entrepreneur/index.html
# dist/special/ai-ready/index.html
```

Check that content is in the HTML (not just `<div id="root"></div>`):

```bash
grep -c "AI replacement risk" dist/risk/bookkeeper/index.html
# Expected: 1 (or more)
```

## GitHub Actions Auto-Deploy

On every push to `main`, GitHub Actions:

1. Installs dependencies
2. Runs `npm run build`
3. Deploys `dist/` to Hostinger via FTP

### Setup GitHub Secrets

In your GitHub repo → Settings → Secrets → New secret:

| Secret         | Value                                            |
| -------------- | ------------------------------------------------ |
| `FTP_SERVER`   | Your Hostinger FTP host (e.g. `ftp.aicareer.me`) |
| `FTP_USERNAME` | Your Hostinger FTP username                      |
| `FTP_PASSWORD` | Your Hostinger FTP password                      |

Find these in: Hostinger → Hosting → FTP Accounts.

## Open Artifacts & Distribution

Two versioned, CC BY 4.0 artifacts are published from `src/data/`:

| Artifact                  | Source            | Canonical page                | Machine-readable                           |
| ------------------------- | ----------------- | ----------------------------- | ------------------------------------------ |
| AI Career Risk Index      | `data/careers.js` | `/data/ai-career-risk-index/` | `/data/ai-career-risk-index.csv` · `.json` |
| HI-C Definition Framework | `data/hic.js`     | `/hi-c/`                      | `/data/hi-c-framework.json`                |

Bumping `datasetMeta.version` or `hicMeta.version` and pushing to `main` triggers
`.github/workflows/release.yml`, which cuts a GitHub release tagged
`v{index}-hic{hic}` with the CSV/JSON attached. The workflow is idempotent — if a
release for that version pair already exists it exits silently.

### One-time setup (owner action required)

Both steps are one-off. Until they are done the pipeline still runs, it just has
nowhere to deliver.

**1. Zenodo → DOI.** Sign in at [zenodo.org](https://zenodo.org) with GitHub, open
_Settings → GitHub_, and flip the switch on `pseyti-dev/aicareer`. From then on
every release is archived and gets a versioned DOI. Metadata is already supplied
by `.zenodo.json` and `CITATION.cff`; nothing else to fill in.

**2. Hugging Face → dataset mirror.** Create a dataset repo, then add to the
GitHub repo:

| Kind     | Name         | Value                                        |
| -------- | ------------ | -------------------------------------------- |
| Secret   | `HF_TOKEN`   | Hugging Face **write** token                 |
| Variable | `HF_DATASET` | Target repo id, e.g. `pseyti/ai-career-risk` |

`.github/workflows/huggingface.yml` runs on every published release and exits
successfully — with a notice, not a failure — while either value is missing.

Once the DOI exists, add it to `datasetMeta` / `hicMeta` and to the citation
blocks so the published citation is the DOI rather than the URL.

## Adding a New Career

1. Add entry to `src/data/careers.js` in the `careers` array
2. Bump `datasetMeta.version` and add a `changelog` entry
3. Push to `main` → auto-deploys, and cuts a release for the new version

The sitemap is generated automatically by `@astrojs/sitemap`; no manual edit needed.
