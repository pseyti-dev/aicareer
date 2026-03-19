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

| Secret | Value |
|---|---|
| `FTP_SERVER` | Your Hostinger FTP host (e.g. `ftp.aicareer.me`) |
| `FTP_USERNAME` | Your Hostinger FTP username |
| `FTP_PASSWORD` | Your Hostinger FTP password |

Find these in: Hostinger → Hosting → FTP Accounts.

## Adding a New Career

1. Add entry to `src/data/careers.js` in the `careers` array
2. Add URL to `public/sitemap.xml`
3. Push to `main` → auto-deploys

No manual build or upload needed.
