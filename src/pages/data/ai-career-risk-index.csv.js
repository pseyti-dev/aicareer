import { careers, datasetMeta } from '../../data/careers.js';

function csvEscape(value) {
  const s = String(value);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

export async function GET() {
  const header = ['rank', 'career', 'risk_score_pct', 'risk_level', 'url'];
  const rows = careers
    .slice()
    .sort((a, b) => b.baseRiskScore - a.baseRiskScore)
    .map((c, i) =>
      [
        i + 1,
        csvEscape(c.title),
        c.baseRiskScore,
        csvEscape(c.riskLabel),
        `https://aicareer.me/risk/${c.slug}/`,
      ].join(',')
    );

  const meta = [
    `# ${datasetMeta.name} v${datasetMeta.version} — last updated ${datasetMeta.lastUpdated}`,
    `# License: ${datasetMeta.licenseLabel} (${datasetMeta.license})`,
    `# Source: ${datasetMeta.canonicalUrl}`,
  ];

  const csv = [...meta, header.join(','), ...rows].join('\n') + '\n';

  return new Response(csv, {
    headers: { 'Content-Type': 'text/csv; charset=utf-8' },
  });
}
