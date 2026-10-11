// src/components/seo/DataTable.jsx
//
// A generic, crawler-friendly data table.
//
// Eleven page families were each carrying the facts a searcher compares — modes
// of travel, fleet options, seasons, fares — as styled cards. Building eleven
// bespoke tables would have meant eleven near-identical components to maintain,
// so this one takes a column spec and rows and renders the same semantic markup
// for all of them.
//
// The reasoning is unchanged from the tables already shipped:
//
//   Google's table snippet is drawn from a real <table> with a header row. A
//   grid of divs holding the same numbers is not eligible for it.
//
//   An assistant answering "how much is X" has to pair a number with the thing
//   it describes. <th scope="row"> states that; card order leaves it to be
//   inferred, and the inference is what produces a wrong quote.
//
// Deliberately plain markup under the styling — caption, thead, tbody, scoped
// row headers — so it survives being read with the CSS discarded, which is
// exactly how a crawler reads it.

/**
 * @param {string}   title     visible heading above the table
 * @param {string}   caption   sr-only description of what the table contains
 * @param {string}   intro     optional sentence under the title (inclusions, caveats)
 * @param {Array}    columns   [{ key, label, align?, strong? }] — first column becomes <th scope="row">
 * @param {Array}    rows      array of objects keyed by column.key
 * @param {string}   footnote  optional small print under the table
 * @param {'dark'|'light'} tone
 */
import { useId } from 'react';

export default function DataTable({
  title,
  caption,
  intro,
  columns = [],
  rows = [],
  footnote,
  tone = 'light',
  badgeKey,
  className = '',
}) {
  const headingId = useId();
  // A single-row table is not a comparison — it reads as a rendering fault.
  if (!columns.length || !Array.isArray(rows) || rows.length < 2) return null;

  const dark = tone === 'dark';
  const shell = dark
    ? 'border-white/10 bg-white/[0.04] text-slate-200'
    : 'border-stone-200 bg-white text-stone-700';
  const head = dark
    ? 'border-white/10 bg-white/[0.06] text-slate-300'
    : 'border-stone-200 bg-stone-50 text-stone-600';
  const line = dark ? 'border-white/10' : 'border-stone-200';
  const strong = dark ? 'text-white' : 'text-stone-900';
  const accent = dark ? 'text-amber-300' : 'text-amber-700';

  // A minimum width is what makes the table readable on a wide screen, and it is
  // also exactly what forced a 360px phone to scroll sideways. The rt-stack rules
  // in globals.css drop it below the small breakpoint and restack the rows there,
  // so this value now only applies from sm upwards.
  const minW = Math.max(420, columns.length * 130);

  return (
    <section className={`px-4 py-10 ${className}`} aria-labelledby={headingId}>
      <div className={`mx-auto max-w-5xl rounded-3xl border p-5 md:p-8 ${shell}`}>
        <h2 id={headingId} className={`mb-1 text-xl font-black md:text-2xl ${strong}`}>
          {title}
        </h2>
        {intro && <p className="mb-5 text-sm opacity-75">{intro}</p>}

        {/* Below sm the table restacks into one labelled block per row (see
            .rt-stack in globals.css) so nothing is hidden off-screen. From sm
            upwards it is an ordinary table, scrolling in its own container if a
            very wide column set needs it — never the whole page. */}
        <div className="-mx-2 px-2 sm:overflow-x-auto">
          <table
            className={`w-full border-collapse text-left text-sm rt-stack ${
              dark ? 'rt-stack-dark' : ''
            }`}
            style={{ '--rt-min-width': `${minW}px` }}
          >
            {caption && <caption className="sr-only">{caption}</caption>}
            <thead>
              <tr>
                {columns.map((c, i) => (
                  <th
                    key={c.key}
                    scope="col"
                    className={`border-y px-4 py-3 font-semibold ${head} ${
                      i === 0 ? 'rounded-l-xl border-l' : ''
                    } ${i === columns.length - 1 ? 'rounded-r-xl border-r' : ''} ${
                      c.align === 'right' ? 'text-right' : ''
                    }`}
                  >
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={ri} className={`border-b ${line}`}>
                  {columns.map((c, ci) =>
                    ci === 0 ? (
                      <th key={c.key} scope="row" className={`px-4 py-3 font-bold ${strong}`}>
                        {r[c.key] ?? '—'}
                        {badgeKey && r[badgeKey] && (
                          <span className="ml-2 rounded-full bg-amber-400/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-600">
                            {typeof r[badgeKey] === 'string' ? r[badgeKey] : 'Recommended'}
                          </span>
                        )}
                      </th>
                    ) : (
                      <td
                        key={c.key}
                        data-label={c.label}
                        className={`px-4 py-3 ${c.align === 'right' ? 'text-right' : ''} ${
                          c.strong ? `font-black ${accent}` : 'opacity-90'
                        }`}
                      >
                        {r[c.key] ?? '—'}
                      </td>
                    )
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {footnote && <p className="mt-4 text-xs opacity-60">{footnote}</p>}
      </div>
    </section>
  );
}
