/**
 * RoadParagraph — the Week 48 (Workstream A3) "about this road" block.
 *
 * One hand-written paragraph about the physical road for a corridor: where it
 * climbs, where the good halt is, what changes in winter. It sits directly
 * under RegionNotesStrip on the corridor booking page, the distance guide and
 * the one-way page, so the three pages for one road finally say something
 * about that road.
 *
 * Presentational only: no hooks, no motion, no data imports. The paragraph
 * arrives as a plain object ({ origin, destination, text }) resolved on the
 * server by src/utilis/roadParagraphs, so the corpus never reaches a client
 * bundle. When a theme (src/utilis/regionThemes.js) is passed it borrows the
 * same band / bandBorder / bandEyebrow fields RegionNotesStrip uses, so the two
 * blocks read as one coloured band; without a theme it falls back to plain
 * light styling.
 */
function titleCase(value) {
  if (!value) return '';
  return String(value)
    .replace(/-/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

export default function RoadParagraph({ paragraph, theme = null }) {
  if (!paragraph || typeof paragraph.text !== 'string' || !paragraph.text.trim()) return null;

  // The paragraph describes the road, not the direction, so the same entry
  // serves both pages of a corridor; the heading follows the page's direction.
  const origin = titleCase(paragraph.reversed ? paragraph.destination : paragraph.origin);
  const destination = titleCase(paragraph.reversed ? paragraph.origin : paragraph.destination);
  const heading = origin && destination
    ? `What the ${origin} to ${destination} road is actually like`
    : 'What this road is actually like';

  const band = theme && theme.band ? theme.band : 'bg-slate-50';
  const border = theme && theme.bandBorder ? theme.bandBorder : 'border-slate-200';
  const eyebrow = theme && theme.bandEyebrow ? theme.bandEyebrow : 'text-slate-600';

  return (
    <section aria-label="About this road" className={`px-4 py-8 sm:px-6 ${band}`}>
      <div className="mx-auto max-w-6xl">
        <div className={`rounded-2xl border bg-white/80 p-5 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.35)] sm:p-7 ${border}`}>
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className={`inline-flex items-center rounded-full border bg-white/70 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] ${border} ${eyebrow}`}>
              About this road
            </span>
            <h2 className="font-display-serif text-lg font-black text-slate-900 sm:text-xl">{heading}</h2>
          </div>
          <p className="road-paragraph text-[15px] leading-7 text-slate-700 sm:text-base sm:leading-8">
            {paragraph.text}
          </p>
        </div>
      </div>
    </section>
  );
}
