import PDFDocument from 'pdfkit';
import { author } from '../../data/careers.js';
import { hicMeta, definition, dimensions } from '../../data/hic.js';

// HI-C Readiness self-assessment — the lead magnet for the HI-C surfaces.
//
// It is the five dimensions turned into something the reader does: score
// yourself 1–5 on each, read the low/high anchors, locate the gap. Genuinely
// useful on its own (PERSONA.md §4 — anything that reads as lead-gen loses the
// audience the whole strategy depends on), and coherent with the hub rather
// than a generic "10 tips" magnet.
//
// pdfkit renders literal hex only — CSS variables do not resolve here.

const INK = '#1c1917';
const MUTED = '#6b6459';
const BORDER = '#e5e1d8';
const ACCENT = '#4338ca';
const PAPER_ALT = '#f4f1ea';

function buildPdf() {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({
      size: 'A4',
      margins: { top: 56, bottom: 64, left: 56, right: 56 },
    });
    const chunks = [];
    doc.on('data', (c) => chunks.push(c));
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.on('error', reject);

    const pageWidth = doc.page.width - 112;

    // ── Header band ──
    doc.rect(0, 0, doc.page.width, 8).fill(ACCENT);
    doc.moveDown(0.5);
    doc
      .fillColor(MUTED)
      .font('Helvetica')
      .fontSize(9)
      .text(`${hicMeta.name} v${hicMeta.version} · ${hicMeta.doi} · aicareer.me`, {
        align: 'right',
      });
    doc.moveDown(1.5);

    // ── Title ──
    doc.fillColor(INK).font('Helvetica-Bold').fontSize(26).text('Are you operating as a HI-C?');
    doc.moveDown(0.3);
    doc
      .font('Helvetica')
      .fontSize(12)
      .fillColor(MUTED)
      .text('A five-dimension self-assessment', { lineGap: 2 });
    doc.moveDown(1);

    // ── Definition ──
    doc.font('Helvetica').fontSize(10.5).fillColor(INK).text(definition, { lineGap: 3 });
    doc.moveDown(0.8);
    doc
      .font('Helvetica-Oblique')
      .fontSize(10)
      .fillColor(MUTED)
      .text(
        'Score yourself 1 to 5 on each dimension below. 1 means the lower-end description fits you today; 5 means the higher-end one does. There is no passing total — the point is to see where the distance is largest, because that is where the next move lives.',
        { lineGap: 3 }
      );
    doc.moveDown(1.2);

    // ── The five dimensions ──
    dimensions.forEach((d, i) => {
      // Keep a dimension block together: break to a new page if it would split.
      if (doc.y > doc.page.height - 210) {
        doc.addPage();
        doc.rect(0, 0, doc.page.width, 8).fill(ACCENT);
        doc.moveDown(1.5);
      }

      const num = String(i + 1).padStart(2, '0');
      doc
        .font('Helvetica-Bold')
        .fontSize(13)
        .fillColor(ACCENT)
        .text(num, { continued: true })
        .fillColor(INK)
        .text(`   ${d.name}`);
      doc.moveDown(0.3);
      doc.font('Helvetica-Oblique').fontSize(10).fillColor(MUTED).text(d.question, { lineGap: 2 });
      doc.moveDown(0.5);

      // 1 — 5 scale row
      const scaleY = doc.y;
      const cell = pageWidth / 5;
      for (let n = 0; n < 5; n++) {
        const x = 56 + n * cell;
        doc
          .rect(x, scaleY, cell - 6, 22)
          .lineWidth(1)
          .stroke(BORDER);
        doc
          .font('Helvetica')
          .fontSize(11)
          .fillColor(MUTED)
          .text(String(n + 1), x, scaleY + 6, { width: cell - 6, align: 'center' });
      }
      doc.y = scaleY + 30;
      doc.x = 56;

      // Low / high anchors
      const anchorY = doc.y;
      const half = pageWidth / 2 - 8;
      doc
        .font('Helvetica-Bold')
        .fontSize(8)
        .fillColor(MUTED)
        .text('1 — LOWER END', 56, anchorY, { width: half });
      doc
        .font('Helvetica-Bold')
        .fontSize(8)
        .fillColor(ACCENT)
        .text('5 — HIGHER END', 56 + half + 16, anchorY, { width: half });
      doc.moveDown(0.2);
      const bodyY = doc.y;
      doc
        .font('Helvetica')
        .fontSize(9)
        .fillColor(INK)
        .text(d.low, 56, bodyY, { width: half, lineGap: 2 });
      const lowEndY = doc.y;
      doc
        .font('Helvetica')
        .fontSize(9)
        .fillColor(INK)
        .text(d.high, 56 + half + 16, bodyY, { width: half, lineGap: 2 });
      doc.y = Math.max(lowEndY, doc.y);
      doc.x = 56;
      doc.moveDown(1);
    });

    // ── What to do with the result ──
    doc.addPage();
    doc.rect(0, 0, doc.page.width, 8).fill(ACCENT);
    doc.moveDown(1.5);
    doc.font('Helvetica-Bold').fontSize(18).fillColor(INK).text('Reading your result');
    doc.moveDown(0.6);

    const notes = [
      [
        'Find your lowest score, not your total.',
        'A HI-C is not someone who maxes every dimension. It is someone with no dimension left at 1 or 2 — because a single weak one caps the whole. The lowest number is your next 90 days.',
      ],
      [
        'Judgment is the one AI does not supply.',
        'If your low score is judgment under uncertainty, no tool closes it. That gap is closed by making more decisions where there is no correct answer, and checking them against outcomes. Everything else on the list, AI can help staff.',
      ],
      [
        'Distribution is the slowest to build and the most durable.',
        'If reach is your gap, start now — it compounds over months, not weeks, and it is the one asset that survives changing employer.',
      ],
    ];
    notes.forEach(([h, b]) => {
      doc.font('Helvetica-Bold').fontSize(11.5).fillColor(INK).text(h);
      doc.moveDown(0.2);
      doc.font('Helvetica').fontSize(10).fillColor(MUTED).text(b, { lineGap: 3 });
      doc.moveDown(0.8);
    });

    // ── The route from where you are ──
    doc.moveDown(0.4);
    const boxY = doc.y;
    doc.rect(56, boxY, pageWidth, 92).fill(PAPER_ALT);
    doc
      .fillColor(INK)
      .font('Helvetica-Bold')
      .fontSize(12)
      .text('There is a route for where you are coming from', 72, boxY + 14, {
        width: pageWidth - 32,
      });
    doc
      .font('Helvetica')
      .fontSize(9.5)
      .fillColor(MUTED)
      .text(
        'Most HI-Cs arrive from one of three places, and the gaps differ by origin. The full route — what transfers, what decayed, the compensation conversation, and a 90-day plan — is at:',
        72,
        boxY + 34,
        { width: pageWidth - 32, lineGap: 2 }
      );
    doc
      .font('Helvetica-Bold')
      .fontSize(9.5)
      .fillColor(ACCENT)
      .text(
        'aicareer.me/hi-c/from-engineering-manager  ·  /from-senior-ic  ·  /from-director-or-vp',
        72,
        boxY + 68,
        { width: pageWidth - 32 }
      );
    doc.y = boxY + 92;
    doc.x = 56;
    doc.moveDown(1.4);

    // ── Citation footer ──
    doc
      .font('Helvetica')
      .fontSize(8)
      .fillColor(MUTED)
      .text(
        `${author.name}. (${hicMeta.lastUpdated.slice(0, 4)}). ${hicMeta.name} (v${hicMeta.version}). aicareer.me. ${hicMeta.doiUrl}  ·  Licensed ${hicMeta.licenseLabel} — free to share with attribution.`,
        { lineGap: 2 }
      );

    doc.end();
  });
}

export async function GET() {
  const pdf = await buildPdf();
  return new Response(pdf, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="hi-c-readiness-assessment.pdf"',
    },
  });
}
