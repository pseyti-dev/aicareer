import { careers, methodology, datasetMeta, author } from '../../data/careers.js';

export async function GET() {
  const payload = {
    dataset: datasetMeta.name,
    version: datasetMeta.version,
    lastUpdated: datasetMeta.lastUpdated,
    license: datasetMeta.license,
    canonicalUrl: datasetMeta.canonicalUrl,
    publisher: 'aicareer.me',
    creator: author.name,
    methodology: {
      description: methodology.description,
      dimensions: methodology.dimensions.map((d) => ({
        name: d.name,
        weight: d.weight,
      })),
    },
    citation: `${author.name}. (${datasetMeta.lastUpdated.slice(0, 4)}). ${datasetMeta.name} (v${datasetMeta.version}) [Data set]. aicareer.me. ${datasetMeta.canonicalUrl}`,
    careers: careers
      .slice()
      .sort((a, b) => b.baseRiskScore - a.baseRiskScore)
      .map((c) => ({
        career: c.title,
        slug: c.slug,
        riskScore: c.baseRiskScore,
        riskLevel: c.riskLabel,
        summary: c.aioSummary,
        url: `https://aicareer.me/risk/${c.slug}/`,
      })),
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
