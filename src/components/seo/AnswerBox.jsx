/**
 * AnswerBox — Answer-first hero card optimised for AI Overviews + voice search.
 *
 * This is the single most important AEO/GEO component on the site. It produces
 * a visually distinct, content-rich, theme-aware hero block that:
 *
 *   1. Starts with a one-sentence direct answer (the extractable AI Overview phrase).
 *   2. Surfaces 3-5 key stats in semantic pill cards (distance / time / fare / best month / etc).
 *   3. Wraps everything in `.answer-box` + `.direct-answer` + `.key-stats`
 *      CSS classes, which the site-wide SpeakableSpecification in layout.js
 *      already marks as voice-search eligible.
 *   4. Adds a visible `<time dateTime=...>` freshness badge — one of the top-3
 *      AI Overview ranking signals per 2026 Google/Lily Ray research.
 *   5. Respects per-category themes (sightseeing = emerald, airport = blue,
 *      wedding = rose, corporate = slate, road-trip = amber, etc.) so the
 *      visual monotony problem — "many pages have the same design" — is
 *      addressed without duplicating component logic per category.
 *
 * Usage:
 *   <AnswerBox
 *     theme="road-trip"
 *     answer="The best time for a 10-day North India road trip is October to February..."
 *     stats={[
 *       { label: 'Distance', value: '2,100 km' },
 *       { label: 'Duration', value: '10 days' },
 *       { label: 'Vehicle', value: 'Sedan ₹55K' },
 *       { label: 'Best Month', value: 'Oct-Feb' },
 *     ]}
 *     lastReviewed="2026-04-24"
 *     source="Triveni Cabs driver fleet data"
 *   />
 */

const THEME_TOKENS = {
  'city-hub':       { bg: 'from-amber-50 to-yellow-50', border: 'border-amber-200', accent: 'text-amber-700', pill: 'bg-amber-100 text-amber-800 border-amber-300' },
  'airport':        { bg: 'from-sky-50 to-blue-50',     border: 'border-sky-200',   accent: 'text-sky-700',   pill: 'bg-sky-100 text-sky-800 border-sky-300' },
  'sightseeing':    { bg: 'from-emerald-50 to-teal-50', border: 'border-emerald-200', accent: 'text-emerald-700', pill: 'bg-emerald-100 text-emerald-800 border-emerald-300' },
  'wedding':        { bg: 'from-rose-50 to-pink-50',    border: 'border-rose-200',  accent: 'text-rose-700',  pill: 'bg-rose-100 text-rose-800 border-rose-300' },
  'corporate':      { bg: 'from-slate-50 to-gray-100',  border: 'border-slate-300', accent: 'text-slate-700', pill: 'bg-slate-100 text-slate-800 border-slate-300' },
  'road-trip':      { bg: 'from-orange-50 to-amber-50', border: 'border-orange-200', accent: 'text-orange-700', pill: 'bg-orange-100 text-orange-800 border-orange-300' },
  'day-trip':       { bg: 'from-lime-50 to-emerald-50', border: 'border-lime-200',  accent: 'text-lime-700',  pill: 'bg-lime-100 text-lime-800 border-lime-300' },
  'station':        { bg: 'from-cyan-50 to-blue-50',    border: 'border-cyan-200',  accent: 'text-cyan-700',  pill: 'bg-cyan-100 text-cyan-800 border-cyan-300' },
  'religious':      { bg: 'from-yellow-50 to-orange-50', border: 'border-yellow-200', accent: 'text-yellow-800', pill: 'bg-yellow-100 text-yellow-900 border-yellow-300' },
  'best-time':      { bg: 'from-teal-50 to-cyan-50',    border: 'border-teal-200',  accent: 'text-teal-700',  pill: 'bg-teal-100 text-teal-800 border-teal-300' },
  'blog':           { bg: 'from-violet-50 to-purple-50', border: 'border-violet-200', accent: 'text-violet-700', pill: 'bg-violet-100 text-violet-800 border-violet-300' },
  'guide':          { bg: 'from-amber-50 via-yellow-50 to-orange-50', border: 'border-amber-300', accent: 'text-amber-800', pill: 'bg-gradient-to-br from-amber-100 to-yellow-100 text-amber-900 border-amber-300' },
  'comparison':     { bg: 'from-stone-50 to-neutral-100', border: 'border-stone-300', accent: 'text-stone-700', pill: 'bg-stone-100 text-stone-800 border-stone-300' },
  'default':        { bg: 'from-slate-50 to-slate-100', border: 'border-slate-200', accent: 'text-slate-700', pill: 'bg-slate-100 text-slate-800 border-slate-300' },
};

export default function AnswerBox({
  theme = 'default',
  title,
  answer,
  stats = [],
  lastReviewed,
  source,
  className = '',
}) {
  const t = THEME_TOKENS[theme] || THEME_TOKENS.default;
  const reviewedDate = lastReviewed
    ? new Date(lastReviewed).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })
    : null;

  return (
    <aside
      className={`answer-box rounded-2xl border-2 ${t.border} bg-gradient-to-br ${t.bg} p-6 md:p-8 shadow-sm ${className}`}
      data-speakable="true"
      role="complementary"
      aria-label="Quick answer"
    >
      {title && (
        <h2 className={`text-xs font-bold tracking-widest uppercase ${t.accent} mb-3`}>
          Quick Answer
        </h2>
      )}

      {/* The direct answer — wrapped for Speakable + marked for AI extraction. */}
      <p
        className="direct-answer text-lg md:text-xl font-semibold text-slate-900 leading-relaxed mb-5"
        data-snippet-type="direct-answer"
        itemProp="abstract"
      >
        {answer}
      </p>

      {/* Key stats — extractable tabular data. Each cell is an info-gain unit. */}
      {stats.length > 0 && (
        <div className="key-stats grid grid-cols-2 md:grid-cols-4 gap-3 mb-4" data-speakable="true">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`rounded-xl border px-3 py-2.5 ${t.pill}`}
              data-stat-key={stat.label}
            >
              <div className="text-[11px] font-bold uppercase tracking-wider opacity-70">
                {stat.label}
              </div>
              <div className="text-base md:text-lg font-extrabold mt-0.5 leading-tight">
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Freshness + source — the three pillars: date, author, origin data. */}
      {(reviewedDate || source) && (
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600 mt-3 pt-3 border-t border-slate-200/60">
          {reviewedDate && (
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l2 2M12 2a10 10 0 100 20 10 10 0 000-20z"/>
              </svg>
              <span>
                Last reviewed <time dateTime={lastReviewed}>{reviewedDate}</time>
              </span>
            </span>
          )}
          {source && (
            <span className="flex items-center gap-1" data-citation-source="true">
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 2a10 10 0 100 20 10 10 0 000-20z"/>
              </svg>
              <span>Source: {source}</span>
            </span>
          )}
        </div>
      )}
    </aside>
  );
}
