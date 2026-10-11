// src/components/seo/TourFareTable.jsx
//
// A real, semantic fare table — and the emphasis is on *table*.
//
// The sightseeing pages already carried the fare in three places: a sentence in
// the Quick Answer, a set of card tiles in the at-a-glance strip, and the
// booking sidebar. All three are divs. An audit of the built HTML found that
// none of the 170 sightseeing tour pages contained a single <table> element.
//
// That matters for the two things this week is aimed at:
//
//   Answer engines. Google's table snippet is drawn from an actual <table> with
//   a header row. A grid of styled divs holding the same numbers is not
//   eligible for it, no matter how it looks to a person.
//
//   Generative engines. When an assistant is asked "how much is the Amritsar
//   Golden Temple tour", it has to decide which numbers on the page go with
//   which vehicle. A <table> with <th scope="row"> states that relationship
//   explicitly. Card tiles leave it to be inferred from DOM order, and the
//   inference is what goes wrong when a model quotes the SUV price as the
//   starting fare.
//
// So this is deliberately plain markup underneath the styling: caption, thead,
// tbody, scoped headers. The visual design is carried entirely by classes, and
// the table survives being read with the CSS thrown away — which is exactly how
// a crawler reads it.

const VEHICLES = [
  { key: 'sedan', name: 'Sedan', seats: '4 passengers', bags: '2 bags', bestFor: 'Couples and small families' },
  { key: 'suv', name: 'SUV', seats: '6 passengers', bags: '4 bags', bestFor: 'Families with luggage' },
  { key: 'tempoTraveller', name: 'Tempo Traveller (12)', seats: '11 passengers', bags: '12 bags', bestFor: 'Groups and extended family' },
  { key: 'tempoTraveller17', name: 'Tempo Traveller (17)', seats: '16 passengers', bags: '16 bags', bestFor: 'Large groups' },
  { key: 'carRental', name: 'Car rental', seats: '4 passengers', bags: '2 bags', bestFor: 'Flexible self-planned days' },
];

const rupees = (n) => `₹${Number(n).toLocaleString('en-IN')}`;

export default function TourFareTable({ tour, tone = 'dark', className = '' }) {
  if (!tour?.price) return null;

  const rows = VEHICLES
    .filter((v) => tour.price[v.key])
    .map((v) => ({ ...v, fare: tour.price[v.key] }));

  if (!rows.length) return null;

  const dark = tone === 'dark';
  const wrap = dark
    ? 'border-emerald-500/20 bg-white/5 text-slate-200'
    : 'border-stone-200 bg-white text-stone-700';
  const headCell = dark
    ? 'bg-white/[0.06] text-slate-300 border-white/10'
    : 'bg-stone-50 text-stone-600 border-stone-200';
  const rowBorder = dark ? 'border-white/10' : 'border-stone-200';
  const strong = dark ? 'text-white' : 'text-stone-900';
  const fareColor = dark ? 'text-amber-300' : 'text-amber-700';

  const cheapest = Math.min(...rows.map((r) => r.fare));

  return (
    <div className={`rounded-3xl border p-5 backdrop-blur-xl md:p-7 ${wrap} ${className}`}>
      <h2 className={`mb-1 text-xl font-black md:text-2xl ${strong}`}>
        {tour.name} fare by vehicle
      </h2>
      <p className="mb-5 text-sm opacity-80">
        All-inclusive of fuel, tolls, parking and driver for the full{' '}
        {tour.duration ? tour.duration.toLowerCase() : 'tour'}. No per-kilometre billing on this tour.
      </p>

      {/* The table scrolls inside its own container so a narrow screen never
          forces the whole page to scroll sideways. */}
      <div className="-mx-2 sm:overflow-x-auto px-2">
        <table className="w-full sm:min-w-[560px] border-collapse text-left text-sm rt-stack">
          <caption className="sr-only">
            {tour.name} fares by vehicle type, including seating capacity, luggage
            allowance and who each vehicle suits. Prices are for the complete tour.
          </caption>
          <thead>
            <tr>
              <th scope="col" className={`rounded-l-xl border-y border-l px-4 py-3 font-semibold ${headCell}`}>Vehicle</th>
              <th scope="col" className={`border-y px-4 py-3 font-semibold ${headCell}`}>Seats</th>
              <th scope="col" className={`border-y px-4 py-3 font-semibold ${headCell}`}>Luggage</th>
              <th scope="col" className={`border-y px-4 py-3 font-semibold ${headCell}`}>Best for</th>
              <th scope="col" className={`rounded-r-xl border-y border-r px-4 py-3 text-right font-semibold ${headCell}`}>Total fare</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.key} className={`border-b ${rowBorder}`}>
                <th scope="row" className={`px-4 py-3 font-bold ${strong}`}>
                  {r.name}
                  {r.fare === cheapest && (
                    <span className="ml-2 rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
                      Lowest
                    </span>
                  )}
                </th>
                <td data-label="Seats" className="px-4 py-3 opacity-90">{r.seats}</td>
                <td data-label="Luggage" className="px-4 py-3 opacity-90">{r.bags}</td>
                <td data-label="Best for" className="px-4 py-3 opacity-90">{r.bestFor}</td>
                <td data-label="Total fare" className={`px-4 py-3 text-right text-base font-black ${fareColor}`}>{rupees(r.fare)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* extraKm is a number on most tours but a per-vehicle sentence on some
          ("Sedan ₹11/km, SUV ₹15/km, …"). Coercing that with Number() rendered
          the literal "₹NaN per km" on the three Golden Triangle pages, so take
          the value as written whenever it is not a bare number. */}
      {tour.price.extraKm && (
        <p className="mt-4 text-xs opacity-70">
          {Number.isFinite(Number(tour.price.extraKm))
            ? <>Distance beyond the standard tour route is billed at {rupees(tour.price.extraKm)} per km.</>
            : <>Distance beyond the standard tour route is billed at {tour.price.extraKm}.</>}
        </p>
      )}
    </div>
  );
}
