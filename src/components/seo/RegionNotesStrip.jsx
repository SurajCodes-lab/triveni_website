/**
 * RegionNotesStrip — three region-specific driving notes under the hero of a
 * corridor, distance or one-way page, coloured and worded by the destination's
 * region (see src/utilis/regionThemes.js).
 *
 * This is the visible half of the Week 47 "stop looking stamped out" work:
 * a Himalayan corridor talks about chains and ghat sections, a Rajasthan one
 * about heat planning and haveli lanes, a Ganga one about darshan timing. Six
 * genuinely different bands rather than one band with the city name swapped.
 *
 * Presentational, no hooks, no data imports — safe in client bundles. CSS-only
 * hover, no animation library, sits below the LCP hero.
 */
export default function RegionNotesStrip({ theme, origin, destination }) {
  if (!theme || !Array.isArray(theme.notes) || theme.notes.length === 0) return null;
  const heading = origin && destination
    ? `Driving ${origin} to ${destination}: what this corridor is like`
    : `What this corridor is like`;
  return (
    <section aria-label={`${theme.name} driving notes`} className={`px-4 py-8 sm:px-6 ${theme.band}`}>
      <div className="mx-auto max-w-6xl">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className={`inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] ${theme.bandBorder} ${theme.bandEyebrow}`}>
            <span aria-hidden="true">{MOTIF[theme.motif] || '•'}</span>
            {theme.name}
          </span>
          <h2 className="font-display-serif text-lg font-black text-slate-900 sm:text-xl">{heading}</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {theme.notes.map((n) => (
            <div
              key={n.title}
              className={`rounded-2xl border bg-white/80 p-5 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.35)] transition-shadow hover:shadow-[0_18px_50px_-24px_rgba(15,23,42,0.45)] ${theme.bandBorder}`}
            >
              <div className={`mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm font-black ${theme.bandIcon}`} aria-hidden="true">
                {MOTIF[theme.motif] || '•'}
              </div>
              <h3 className="text-base font-black text-slate-900">{n.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{n.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Small typographic motifs — no icon imports, so this stays dependency-free.
const MOTIF = {
  mountain: '⛰',
  fort: '🏰',
  diya: '🪔',
  wheat: '🌾',
  dome: '🕌',
  city: '🏙',
};
