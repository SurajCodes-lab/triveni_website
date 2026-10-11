// Official sources for changeable facts a page states.
//
// Week 51's fact-check established why this matters: two guides were quoting a
// monument entry fee the state had revised nine months earlier, and the fix
// included naming the source and dating the claim so a reader can check it.
// The same reasoning applies to anything set by an authority and liable to
// change — yatra registration, seasonal opening, toll classes, permit rules.
//
// This site already cites NHAI, Parivahan, the state tourism boards and the
// Archaeological Survey across several hundred pages. This component is for the
// pages that make the same kind of claim and were not yet citing anything.
//
// Every URL passed in should be checked to resolve first. A citation to a dead
// page is worse than no citation.
export default function OfficialSources({ heading, intro, sources = [], className = '' }) {
  if (!sources.length) return null;

  return (
    <section
      id="official-sources"
      aria-labelledby="official-sources-heading"
      className={`bg-slate-50 px-4 py-8 sm:px-6 sm:py-10 ${className}`}
    >
      <div className="mx-auto max-w-5xl rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
        <h2
          id="official-sources-heading"
          className="text-xl font-bold text-slate-900 sm:text-2xl"
        >
          {heading || 'Where these details come from'}
        </h2>
        <p className="mt-3 leading-relaxed text-slate-700">
          {intro ||
            'The dates, rules and charges on this page are set by the authorities below and do change. Confirm them for your own travel dates before you book.'}
        </p>

        <ul className="mt-5 grid gap-3 sm:grid-cols-2">
          {sources.map(({ label, url, forWhat }) => (
            <li key={url}>
              <a
                href={url}
                target="_blank"
                rel="noopener"
                className="flex min-h-11 flex-col justify-center rounded-lg border border-slate-200 bg-slate-50/60 px-4 py-3 hover:bg-slate-100"
              >
                <span className="flex items-center justify-between gap-2 font-semibold text-slate-900">
                  <span>{label}</span>
                  <span aria-hidden="true" className="text-slate-500">↗</span>
                </span>
                {forWhat && <span className="mt-0.5 text-sm text-slate-600">{forWhat}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
