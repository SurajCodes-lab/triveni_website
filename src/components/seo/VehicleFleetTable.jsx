// src/components/seo/VehicleFleetTable.jsx
//
// A real fare table for the vehicle city and route pages.
//
// Same reasoning as the sightseeing tables built previously, applied to the
// largest remaining block of pages on the site. A crawl of the built HTML found
// 236 of 260 Force Urbania pages and 236 of 260 Maharaja pages carrying no
// <table> element at all — the fares were present, but as styled cards.
//
// Two things follow from that, and both cost traffic:
//
//   Google's table snippet is drawn from an actual <table> with a header row. A
//   grid of divs holding the same numbers cannot win that placement.
//
//   An assistant asked "what does a 17 seater tempo traveller cost in Delhi" has
//   to pair each rate with the right seater. A <th scope="row"> states that
//   outright; card order leaves it to be inferred, and the inference is what
//   produces a wrong quote.
//
// The daily rate is included beside the per-km rate because the two answer
// different questions — "what will my trip cost" versus "what does a day cost" —
// and the pages were previously making the reader hold one while looking for the
// other.

const RowBadge = ({ children }) => (
  <span className="ml-2 rounded-full bg-amber-400/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-300">
    {children}
  </span>
);

export default function VehicleFleetTable({
  fleet,
  vehicleType,
  placeLabel,
  tone = 'dark',
  className = '',
}) {
  if (!Array.isArray(fleet) || fleet.length < 2) return null;

  const dark = tone !== 'light';
  const shell = dark
    ? 'border-white/10 bg-white/[0.04] text-slate-200'
    : 'border-stone-200 bg-white text-stone-700';
  const head = dark
    ? 'border-white/10 bg-white/[0.06] text-slate-300'
    : 'border-stone-200 bg-stone-50 text-stone-600';
  const line = dark ? 'border-white/10' : 'border-stone-200';
  const strong = dark ? 'text-white' : 'text-stone-900';
  const rate = dark ? 'text-amber-300' : 'text-amber-700';

  const where = placeLabel ? ` in ${placeLabel}` : '';
  const cheapest = Math.min(...fleet.map((f) => f.perKm || Infinity));

  return (
    <section
      className={`px-4 py-10 ${className}`}
      aria-labelledby="fleet-fare-heading"
    >
      <div className={`mx-auto max-w-5xl rounded-3xl border p-5 backdrop-blur-xl md:p-8 ${shell}`}>
        <h2 id="fleet-fare-heading" className={`mb-1 text-xl font-black md:text-2xl ${strong}`}>
          {vehicleType} fare{where} — rate by seater
        </h2>
        <p className="mb-5 text-sm opacity-75">
          Rates include fuel, driver and AC. Tolls, parking and state permits are charged at
          actual. Outstation trips bill on a 300 km per day minimum.
        </p>

        {/* Scrolls inside its own container so a narrow screen never forces the
            whole page sideways. */}
        <div className="-mx-2 sm:overflow-x-auto px-2">
          <table className="w-full sm:min-w-[620px] border-collapse text-left text-sm rt-stack">
            <caption className="sr-only">
              {vehicleType} fares{where} by seater, showing passenger capacity, the
              per-kilometre outstation rate and the full-day local package rate for each
              vehicle in the fleet.
            </caption>
            <thead>
              <tr>
                <th scope="col" className={`rounded-l-xl border-y border-l px-4 py-3 font-semibold ${head}`}>
                  Vehicle
                </th>
                <th scope="col" className={`border-y px-4 py-3 font-semibold ${head}`}>Seats</th>
                <th scope="col" className={`border-y px-4 py-3 font-semibold ${head}`}>Best for</th>
                <th scope="col" className={`border-y px-4 py-3 text-right font-semibold ${head}`}>
                  Outstation
                </th>
                <th scope="col" className={`rounded-r-xl border-y border-r px-4 py-3 text-right font-semibold ${head}`}>
                  Full day
                </th>
              </tr>
            </thead>
            <tbody>
              {fleet.map((f) => (
                <tr key={f.id ?? f.name} className={`border-b ${line}`}>
                  <th scope="row" className={`px-4 py-3 font-bold ${strong}`}>
                    {f.name}
                    {f.popular && <RowBadge>Most booked</RowBadge>}
                    {!f.popular && f.perKm === cheapest && <RowBadge>Lowest</RowBadge>}
                  </th>
                  <td className="px-4 py-3 opacity-90">{f.capacity}</td>
                  <td className="px-4 py-3 opacity-90">{f.blurb || '—'}</td>
                  <td className={`px-4 py-3 text-right text-base font-black ${rate}`}>
                    {f.outstationRate}
                  </td>
                  <td className="px-4 py-3 text-right font-semibold opacity-90">
                    {f.localRate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs opacity-60">
          Full-day rates cover an 8 hour / 80 km local package. Beyond that, extra kilometres
          are billed at the outstation rate shown.
        </p>
      </div>
    </section>
  );
}
