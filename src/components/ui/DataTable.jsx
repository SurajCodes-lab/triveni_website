// src/components/ui/DataTable.jsx
//
// Always-scrollable table wrapper — the canonical fix for "tables get cropped"
// on mobile. Renders a header + rows, never clips: on narrow screens it scrolls
// horizontally to the screen edge with a soft fade affordance.
//
// columns: [{ key, label, align?, className? }]
// rows:    array of objects keyed by column.key (values may be strings or JSX)
// tone:    'light' | 'dark'

export default function DataTable({ columns = [], rows = [], tone = 'light', minWidth = 560, caption, className = '' }) {
  const dark = tone === 'dark';
  return (
    <div className={`relative ${className}`}>
      <div className="scroll-x-edge scrollbar-hide rounded-2xl">
        <table
          className={`w-full text-sm ${dark ? 'text-slate-200' : 'text-slate-700'}`}
          style={{ minWidth }}
        >
          {caption && <caption className="sr-only">{caption}</caption>}
          <thead>
            <tr className={dark ? 'bg-white/5' : 'bg-slate-50'}>
              {columns.map((c) => (
                <th
                  key={c.key}
                  scope="col"
                  className={`px-3 py-3 sm:px-4 font-bold whitespace-nowrap ${dark ? 'text-white' : 'text-slate-900'} ${
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
