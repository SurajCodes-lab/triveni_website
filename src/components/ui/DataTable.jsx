// src/components/ui/DataTable.jsx
//
// Responsive data table — NO sideways scrolling anywhere (user verdict:
// scrolling tables look ugly on phones).
//   · mobile (<md): each row renders as a stacked card — first column becomes
//     the card title, remaining columns become label/value lines.
//   · md+: a true semantic <table>, full width, no minWidth forcing overflow.
//
// columns: [{ key, label, align?, className? }]
// rows:    array of objects keyed by column.key (values may be strings or JSX)
// tone:    'light' | 'dark'

export default function DataTable({ columns = [], rows = [], tone = 'light', caption, className = '' }) {
  const dark = tone === 'dark';
  const [head, ...rest] = columns;

  return (
    <div className={`relative ${className}`}>
      {/* ── Mobile: stacked cards, zero horizontal scroll ── */}
      <div className="space-y-3 md:hidden">
        {rows.map((row, i) => (
          <div
            key={i}
            className={`rounded-2xl border p-4 ${
              dark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-white shadow-sm'
            }`}
          >
            {head && (
              <p className={`text-sm font-bold ${dark ? 'text-white' : 'text-slate-900'}`}>
                {row[head.key]}
              </p>
            )}
            <dl className="mt-2.5 space-y-1.5">
              {rest.map((c) => (
                <div key={c.key} className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] items-start gap-3">
                  <dt className={`min-w-0 break-words text-xs font-semibold uppercase tracking-wide ${dark ? 'text-white/60' : 'text-slate-500'}`}>
                    {c.label}
                  </dt>
                  <dd className={`min-w-0 break-words text-right text-sm leading-snug ${dark ? 'text-slate-100' : 'text-slate-700'}`}>
                    {row[c.key]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>

      {/* ── Desktop: true semantic table, fits its container ── */}
      <div className="hidden overflow-hidden rounded-2xl md:block">
        <table className={`w-full text-sm ${dark ? 'text-slate-200' : 'text-slate-700'} rt-stack`}>
          {caption && <caption className="sr-only">{caption}</caption>}
          <thead>
            <tr className={dark ? 'bg-white/5' : 'bg-slate-50'}>
              {columns.map((c) => (
                <th
                  key={c.key}
                  scope="col"
                  className={`px-3 py-3 sm:px-4 font-bold ${dark ? 'text-white' : 'text-slate-900'} ${
                    c.align === 'right' ? 'text-right' : c.align === 'center' ? 'text-center' : 'text-left'
                  } ${c.className || ''}`}
                >
                  {c.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className={dark ? 'divide-y divide-white/10' : 'divide-y divide-slate-100'}>
            {rows.map((row, i) => (
              <tr key={i} className={dark ? 'hover:bg-white/5' : 'hover:bg-amber-50/40'}>
                {columns.map((c) => (
                  <td
                    key={c.key}
                    className={`px-3 py-3 sm:px-4 align-middle ${
                      c.align === 'right' ? 'text-right' : c.align === 'center' ? 'text-center' : 'text-left'
                    } ${c.className || ''}`}
                  >
                    {row[c.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
