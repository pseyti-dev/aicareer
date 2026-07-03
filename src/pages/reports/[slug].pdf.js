import PDFDocument from 'pdfkit';
import { careers, methodology, datasetMeta, author } from '../../data/careers.js';

export function getStaticPaths() {
  return careers.map((career) => ({
    params: { slug: career.slug },
    props: { career },
  }));
}

const INK = '#1c1917';
const MUTED = '#6b6459';
const BORDER = '#e5e1d8';
const ACCENT = '#4338ca';

function riskColor(score) {
  if (score <= 40) return '#047857';
  if (score <= 70) return '#b45309';
  return '#dc2626';
}

function buildPdf(career) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: 'A4',
      margins: { top: 56, bottom: 64, left: 56, right: 56 },
    });
    const chunks = [];
    doc.on('data', (c) => chunks.push(c));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);

    const color = riskColor(career.baseRiskScore);
    const pageWidth = doc.page.width - 112;

    // ── Header band ──
    doc.rect(0, 0, doc.page.width, 8).fill(color);
    doc.moveDown(0.5);
    doc
      .fillColor(MUTED)
      .font('Helvetica')
      .fontSize(9)
      .text(
        `${datasetMeta.name} v${datasetMeta.version} · Updated ${datasetMeta.lastUpdated} · aicareer.me`,
        {
          align: 'right',
        }
      );
    doc.moveDown(1.5);

    // ── Title + score ──
    doc.fillColor(INK).font('Helvetica-Bold').fontSize(26).text(career.title);
    doc.moveDown(0.3);
    doc.font('Helvetica').fontSize(12).fillColor(MUTED).text('AI Displacement Risk Report');
    doc.moveDown(1);

    const scoreY = doc.y;
    doc
      .font('Helvetica-Bold')
      .fontSize(48)
      .fillColor(color)
      .text(`${career.baseRiskScore}%`, 56, scoreY);
    doc
      .font('Helvetica-Bold')
      .fontSize(13)
      .fillColor(color)
      .text(career.riskLabel.toUpperCase(), 190, scoreY + 14);
    doc
      .font('Helvetica')
      .fontSize(9)
      .fillColor(MUTED)
      .text('baseline risk before upskilling', 190, scoreY + 32);
    doc.y = scoreY + 64;
    doc.x = 56;

    // ── Summary ──
    doc.font('Helvetica').fontSize(10.5).fillColor(INK).text(career.aioSummary, { lineGap: 3 });
    doc.moveDown(1.2);

    // ── What AI already does ──
    doc
      .font('Helvetica-Bold')
      .fontSize(14)
      .fillColor(INK)
      .text('What AI already does in this role');
    doc.moveDown(0.4);
    career.automatedTasks.forEach((task) => {
      doc
        .font('Helvetica')
        .fontSize(10)
        .fillColor(MUTED)
        .text(`•  ${task}`, { lineGap: 2, indent: 6 });
      doc.moveDown(0.15);
    });
    doc.moveDown(1);

    // ── Why at risk ──
    doc.font('Helvetica-Bold').fontSize(14).fillColor(INK).text('Why this career is exposed');
    doc.moveDown(0.4);
    doc.font('Helvetica').fontSize(10).fillColor(MUTED).text(career.whyAtRisk, { lineGap: 3 });
    doc.moveDown(1);

    // ── How to future-proof ──
    doc.font('Helvetica-Bold').fontSize(14).fillColor(INK).text('How to future-proof');
    doc.moveDown(0.4);
    doc
      .font('Helvetica')
      .fontSize(10)
      .fillColor(MUTED)
      .text(career.howToFutureProof, { lineGap: 3 });

    // ── 90-day plan (new page) ──
    doc.addPage();
    doc.rect(0, 0, doc.page.width, 8).fill(color);
    doc.moveDown(0.5);
    doc.font('Helvetica-Bold').fontSize(20).fillColor(INK).text('Your 90-Day Upskilling Plan');
    doc.moveDown(0.3);
    doc
      .font('Helvetica')
      .fontSize(10)
      .fillColor(MUTED)
      .text(
        `Skills are ordered by risk-reduction impact. Completing all of them cuts your personal risk score by up to ${career.skills.reduce((s, k) => s + k.riskReduction, 0)} points.`,
        { lineGap: 3 }
      );
    doc.moveDown(1);

    const ordered = career.skills.slice().sort((a, b) => b.riskReduction - a.riskReduction);
    const phases = ['Days 1–30', 'Days 31–60', 'Days 61–90', 'Beyond 90 days'];
    ordered.forEach((skill, i) => {
      const phase = phases[Math.min(i, phases.length - 1)];
      if (doc.y > doc.page.height - 180) doc.addPage();

      doc.font('Helvetica-Bold').fontSize(9).fillColor(ACCENT).text(phase.toUpperCase());
      doc.moveDown(0.15);
      doc
        .font('Helvetica-Bold')
        .fontSize(12.5)
        .fillColor(INK)
        .text(`${skill.name}   `, { continued: true })
        .font('Helvetica')
        .fontSize(9)
        .fillColor(color)
        .text(`-${skill.riskReduction} pts · ${skill.difficulty}`);
      doc.moveDown(0.2);
      doc.font('Helvetica').fontSize(10).fillColor(MUTED).text(skill.description, { lineGap: 2 });
      doc.moveDown(0.3);
      doc
        .font('Helvetica')
        .fontSize(9)
        .fillColor(ACCENT)
        .text(`Free: ${skill.freeResource.label} — ${skill.freeResource.url}`, { lineGap: 2 });
      doc
        .fillColor(ACCENT)
        .text(
          `Course: ${skill.paidResource.label} (${skill.paidResource.platform}) — ${skill.paidResource.affiliateUrl}`,
          {
            lineGap: 2,
          }
        );
      doc.moveDown(0.6);
      doc
        .strokeColor(BORDER)
        .lineWidth(0.5)
        .moveTo(56, doc.y)
        .lineTo(56 + pageWidth, doc.y)
        .stroke();
      doc.moveDown(0.6);
    });

    // ── Methodology + citation footer ──
    doc.moveDown(0.5);
    if (doc.y > doc.page.height - 160) doc.addPage();
    doc.font('Helvetica-Bold').fontSize(11).fillColor(INK).text('About this score');
    doc.moveDown(0.3);
    doc
      .font('Helvetica')
      .fontSize(8.5)
      .fillColor(MUTED)
      .text(
        `${methodology.description} Dimensions: ${methodology.dimensions.map((d) => `${d.name} (${d.weight})`).join(', ')}.`,
        { lineGap: 2 }
      );
    doc.moveDown(0.5);
    doc
      .fontSize(8.5)
      .fillColor(MUTED)
      .text(
        `Source: ${author.name}. ${datasetMeta.name} (v${datasetMeta.version}), licensed CC BY 4.0. Full dataset and methodology: ${datasetMeta.canonicalUrl}`,
        { lineGap: 2 }
      );
    doc.moveDown(0.3);
    doc
      .fontSize(8.5)
      .fillColor(MUTED)
      .text(
        'This report is for informational purposes only and does not constitute career or financial advice.',
        { lineGap: 2 }
      );

    doc.end();
  });
}

export async function GET({ props }) {
  const pdf = await buildPdf(props.career);
  return new Response(pdf, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `attachment; filename="ai-risk-report-${props.career.slug}.pdf"`,
    },
  });
}
