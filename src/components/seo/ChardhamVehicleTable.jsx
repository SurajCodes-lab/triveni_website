// src/components/seo/ChardhamVehicleTable.jsx
//
// Vehicle comparison for the Char Dham pages.
//
// "Which vehicle should I take for Char Dham" is one of the highest-intent
// questions on this site and one of the most awkward to answer from prose,
// because the real answer is a trade-off across four variables at once — how
// many people, how much luggage, how the vehicle handles mountain roads, and
// what it costs per kilometre.
//
// An audit of the built HTML found the three Char Dham package pages carried no
// <table> at all, despite being the pages that exist specifically to answer this
// comparison. The numbers were there, spread across cards and paragraphs.
//
// The circuit distance is the other half of the answer. A per-km rate means
// nothing to a pilgrim planning a budget until it is multiplied by the ~1,700 km
// the full circuit actually runs, so the table does that multiplication rather
// than leaving it to the reader — or to an assistant, which is where the answer
// tends to go wrong.

const rupees = (n) => `₹${Number(n).toLocaleString('en-IN')}`;

// The full Yamunotri-Gangotri-Kedarnath-Badrinath circuit, as published across
// the Char Dham pages. Used only to show an indicative total beside the rate.
const CIRCUIT_KM = 1700;

const ORDER = ['sedan', 'ertiga', 'innova', 'fortuner', 'tempo', 'bus45'];

export default function ChardhamVehicleTable({ vehicles, highlightType, className = '' }) {
  if (!vehicles) return null;

  const rows = ORDER
    .map((key) => ({ key, v: vehicles[key] }))
    .filter(({ v }) => v && v.perKm && v.seats)
    .map(({ key, v }) => ({
      key,
      name: v.name,
      category: v.category,
      seats: v.seats,
      luggage: v.luggage,
      perKm: v.perKm,
      bestFor: v.bestFor,
      circuit: v.perKm * CIRCUIT_KM,
    }));

  if (rows.length < 2) return null;

  return (
    <section className={`bg-slate-900 px-4 py-10 ${className}`} aria-labelledby="chardham-vehicle-table-heading">
      <div className="mx-auto max-w-5xl rounded-3xl border border-amber-400/20 bg-white/5 p-5 backdrop-blur-xl md:p-8">
        <h2 id="chardham-vehicle-table-heading" className="mb-1 text-xl font-black text-white md:text-2xl">
          Char Dham Yatra vehicle comparison — capacity, rate and circuit cost
        </h2>
        <p className="mb-5 text-sm text-slate-400">
          Rates include fuel, driver and the hill permit. The circuit estimate assumes
          the full {CIRCUIT_KM.toLocaleString('en-IN')} km Yamunotri–Gangotri–Kedarnath–Badrinath
          route; tolls, parking, stays and the Kedarnath trek or helicopter are extra.
        </p>

        <div className="-mx-2 sm:overflow-x-auto px-2">
          <table className="w-full sm:min-w-[640px] border-collapse text-left text-sm rt-stack">
            <caption className="sr-only">
              Char Dham Yatra vehicles compared by seating capacity, luggage allowance,
              per-kilometre rate, indicative cost for the full 1,700 km circuit, and the
              kind of group each vehicle suits.
            </caption>
            <thead>
              <tr>
                <th scope="col" className="rounded-l-xl border-y border-l border-white/10 bg-white/[0.06] px-4 py-3 font-semibold text-slate-300">Vehicle</th>
                <th scope="col" className="border-y border-white/10 bg-white/[0.06] px-4 py-3 font-semibold text-slate-300">Seats</th>
                <th scope="col" className="border-y border-white/10 bg-white/[0.06] px-4 py-3 font-semibold text-slate-300">Luggage</th>
                <th scope="col" className="border-y border-white/10 bg-white/[0.06] px-4 py-3 font-semibold text-slate-300">Best for</th>
                <th scope="col" className="border-y border-white/10 bg-white/[0.06] px-4 py-3 text-right font-semibold text-slate-300">Rate</th>
                <th scope="col" className="rounded-r-xl border-y border-r border-white/10 bg-white/[0.06] px-4 py-3 text-right font-semibold text-slate-300">Full circuit ≈</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => {
                const isThis = highlightType && r.key === highlightType;
                return (
                  <tr key={r.key} className={`border-b border-white/10 ${isThis ? 'bg-amber-400/10' : ''}`}>
                    <th scope="row" className="px-4 py-3 font-bold text-white">
                      {r.name}
                      <span className="block text-[11px] font-medium text-slate-400">{r.category}</span>
                      {isThis && (
                        <span className="mt-1 inline-block rounded-full bg-amber-400/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-300">
                          This package
                        </span>
                      )}
                    </th>
                    <td className="px-4 py-3 text-slate-300">{r.seats}</td>
                    <td className="px-4 py-3 text-slate-300">{r.luggage}</td>
                    <td className="px-4 py-3 text-slate-300">{r.bestFor}</td>
                    <td className="px-4 py-3 text-right font-black text-amber-300">{rupees(r.perKm)}/km</td>
                    <td className="px-4 py-3 text-right font-bold text-white">{rupees(r.circuit)}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
