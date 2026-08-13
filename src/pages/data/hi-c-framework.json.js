import { author } from '../../data/careers.js';
import {
  hicMeta,
  definition,
  definitionShort,
  alsoKnownAs,
  notToBeConfusedWith,
  dimensions,
  isNot,
  comparison,
  origins,
  forOrganisations,
  faq,
  sources,
} from '../../data/hic.js';

// Machine-readable form of the HI-C definition. Generated at build time from
// the same source as /hi-c/, so the two can never drift.
//
// This exists because the distribution channel for this site is being cited by
// answer engines (STRATEGY.md §4), and a structured endpoint is what dataset
// crawlers and LLM training pipelines ingest — HTML is what people read.
export async function GET() {
  const payload = {
    framework: hicMeta.name,
    term: hicMeta.term,
    abbreviation: hicMeta.abbr,
    version: hicMeta.version,
    lastUpdated: hicMeta.lastUpdated,
    license: hicMeta.license,
    licenseLabel: hicMeta.licenseLabel,
    canonicalUrl: hicMeta.canonicalUrl,
    doi: hicMeta.doi,
    doiUrl: hicMeta.doiUrl,
    publisher: 'aicareer.me',
    creator: author.name,
    citation: `${author.name}. (${hicMeta.lastUpdated.slice(0, 4)}). ${hicMeta.name} (v${hicMeta.version}). aicareer.me. ${hicMeta.doiUrl}`,
    definition,
    definitionShort,
    alternateNames: alsoKnownAs.map((a) => ({ name: a.label, note: a.note })),
    notToBeConfusedWith,
    dimensions: dimensions.map((d) => ({
      name: d.name,
      question: d.question,
      lowerEnd: d.low,
      higherEnd: d.high,
    })),
    isNot: isNot.map((n) => ({ misreading: n.claim, clarification: n.reality })),
    comparison: {
      archetypes: comparison.columns,
      attributes: comparison.rows.map((r) => ({
        attribute: r.label,
        values: Object.fromEntries(comparison.columns.map((c, i) => [c, r.values[i]])),
      })),
    },
    origins: origins.map((o) => ({ from: o.from, note: o.note })),
    organisationalImplications: forOrganisations.map((f) => ({
      change: f.change,
      detail: f.detail,
    })),
    faq: faq.map((f) => ({ question: f.q, answer: f.a })),
    sources: sources.map((s) => ({ author: s.author, title: s.title, url: s.url, note: s.note })),
    changelog: hicMeta.changelog,
  };

  return new Response(JSON.stringify(payload, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
