/**
 * ComparisonTable — semantic HTML <table> for comparisons/pricing.
 *
 * Why it exists: AEO/GEO standard S10. AI engines extract <table> elements
 * as discrete data chunks for comparison queries. Multi-modal pages get
 * +156% citation rate (LLMrefs research). Replace styled <div> pricing
 * grids with this on all comparison and trip-cost pages.
 *
 * Props:
 *  - caption: optional. Brief explanatory text above the table.
 *  - headers: string[]. Column headers; rendered with scope="col".
 *  - rows: any[][]. Each inner array is one row; first cell is the row header
 *    (rendered as <th scope="row">) unless `firstCellIsHeader === false`.
 *  - firstCellIsHeader: boolean (default true).
 *  - speakable: boolean (default true). Marks the table for Speakable.
 */
export default function ComparisonTable({
  caption,
  headers,
  rows,
  firstCellIsHeader = true,
  speakable = true,
  className = '',
}) {
  if (!headers?.length || !rows?.length) return null;

  return (
    <figure className={`my-6 overflow-x-auto ${className}`}>
      <table
        className="comparison-table w-full border-collapse text-left"
        {...(speakable ? { 'data-speakable': 'true' } : {})}
      >
        {caption && (
          <caption className="text-left text-sm text-slate-600 mb-2 caption-top">
            {caption}
          </caption>
        )}
        <thead>
          <tr>
            {headers.map((h) => (
              <th
                key={h}
                scope="col"
                className="bg-slate-900 text-white px-4 py-3 text-sm font-semibold first:rounded-tl-lg last:rounded-tr-lg"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={ri} className={ri % 2 ? 'bg-slate-50' : 'bg-white'}>
              {row.map((cell, ci) =>
                firstCellIsHeader && ci === 0 ? (
                  <th
                    key={ci}
                    scope="row"
                    className="px-4 py-3 border-t border-slate-200 font-semibold text-slate-900"
                  >
                    {cell}
                  </th>
                ) : (
                  <td
                    key={ci}
                    className="px-4 py-3 border-t border-slate-200 text-slate-800"
                  >
                    {cell}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
