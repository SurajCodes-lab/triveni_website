// src/components/seo/LocalPackageTable.jsx
//
// The hourly-package table for the local taxi city pages.
//
// "Local taxi in Delhi" is a price-comparison query with a very specific shape:
// the searcher wants to know what four hours costs versus eight, in a sedan
// versus an SUV, before they call. That is a two-axis question, and a two-axis
// question is exactly what a table answers and what prose answers badly.
//
// These pages already held the numbers — in cards, one package per card. A
// crawl found no <table> element on 36 of the 37 local-taxi pages, which means
// they were ineligible for Google's table snippet and left an assistant to pair
// four durations against two vehicle types by reading card order.
//
// The extra-kilometre rate is included because it is the first thing a customer
// asks after seeing the package price, and it was previously buried in prose
// further down the page.

const rupees = (n) => `₹${Number(n).toLocaleString('en-IN')}`;

export default function LocalPackageTable({
  city,
  packages,
  extraKmSedan,
  extraKmSuv,
  className = '',
}) {
  if (!Array.isArray(packages) || packages.length < 2) return null;

  const cheapest = Math.min(...packages.map((p) => p.sedan || Infinity));

  return (
    <section className={`px-4 py-10 ${className}`} aria-labelledby="local-package-heading">
      <div className="mx-auto max-w-4xl rounded-3xl border border-stone-200 bg-white p-5 shadow-sm md:p-8">
        <h2 id="local-package-heading" className="mb-1 text-xl font-black text-stone-900 md:text-2xl">
          Local taxi packages in {city} — hourly rates
        </h2>
        <p className="mb-5 text-sm text-stone-600">
          All packages include the vehicle, fuel and an experienced driver. Parking and state
          taxes are charged at actual. Pick-up anywhere in {city}.
        </p>

        <div className="-mx-2 sm:overflow-x-auto px-2">
          <table className="w-full sm:min-w-[480px] border-collapse text-left text-sm rt-stack">
            <caption className="sr-only">
              Local taxi hourly packages in {city}, showing the price for a sedan and an SUV
              for each duration and included kilometre allowance.
            </caption>
            <thead>
              <tr>
                <th scope="col" className="rounded-l-xl border-y border-l border-stone-200 bg-stone-50 px-4 py-3 font-semibold text-stone-600">
                  Package
                </th>
                <th scope="col" className="border-y border-stone-200 bg-stone-50 px-4 py-3 text-right font-semibold text-stone-600">
                  Sedan
                </th>
                <th scope="col" className="rounded-r-xl border-y border-r border-stone-200 bg-stone-50 px-4 py-3 text-right font-semibold text-stone-600">
                  SUV
                </th>
              </tr>
            </thead>
            <tbody>
              {packages.map((p) => (
                <tr key={p.name} className="border-b border-stone-200">
                  <th scope="row" className="px-4 py-3 font-bold text-stone-900">
                    {p.name}
                    {p.sedan === cheapest && (
                      <span className="ml-2 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                        Lowest
                      </span>
                    )}
                  </th>
                  <td className="px-4 py-3 text-right text-base font-black text-amber-700">
                    {rupees(p.sedan)}
                  </td>
                  <td className="px-4 py-3 text-right font-semibold text-stone-700">
                    {p.suv ? rupees(p.suv) : '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {(extraKmSedan || extraKmSuv) && (
          <p className="mt-4 text-xs text-stone-500">
            Beyond the included kilometres, extra distance is billed at{' '}
            {extraKmSedan ? `${rupees(extraKmSedan)}/km for a sedan` : ''}
            {extraKmSedan && extraKmSuv ? ' and ' : ''}
            {extraKmSuv ? `${rupees(extraKmSuv)}/km for an SUV` : ''}.
          </p>
        )}
      </div>
    </section>
  );
}
