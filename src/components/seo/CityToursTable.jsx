// src/components/seo/CityToursTable.jsx
//
// The city-hub counterpart to TourFareTable.
//
// A city hub answers a different question from a tour page. "Sightseeing tours
// in Delhi" is a comparison query — the searcher wants to see the options side
// by side with what each costs and how long it takes, and decide. That is the
// shape of query answer engines are most likely to satisfy with a table
// snippet, and the shape a generative engine most often gets wrong, because it
// has to pair each tour name with the right duration and the right price out of
// a page full of cards.
//
// Same reasoning as the tour fare table: a real <table>, scoped row headers, and
// a caption that says what the table is. The tour name is the row header, so the
// duration and fare on that row are unambiguously that tour's.
//
// Capped at a readable number of rows — the full list still renders as cards
// below, and a hundred-row table helps nobody.

const rupees = (n) => `₹${Number(n).toLocaleString('en-IN')}`;

const fareOf = (t) => {
  const f = [t.price?.sedan, t.price?.suv, t.price?.tempoTraveller, t.price?.carRental].filter(Boolean);
  return f.length ? Math.min(...f) : null;
};

export default function CityToursTable({ city, tours, limit = 12, className = '' }) {
  const rows = (tours || [])
    .map((t) => ({ name: t.name, slug: t.slug, duration: t.duration, fare: fareOf(t), stops: (t.highlights || []).length }))
    .filter((r) => r.fare)
    .sort((a, b) => a.fare - b.fare)
    .slice(0, limit);

  if (rows.length < 2) return null;

  const cityLabel = city ? city.charAt(0).toUpperCase() + city.slice(1) : 'this city';

  return (
    <section className={`bg-slate-900 px-4 py-10 ${className}`} aria-labelledby="city-tours-table-heading">
      <div className="mx-auto max-w-5xl rounded-3xl border border-emerald-500/20 bg-white/5 p-5 backdrop-blur-xl md:p-8">
        <h2 id="city-tours-table-heading" className="mb-1 text-xl font-black text-white md:text-2xl">
          {cityLabel} sightseeing tours — duration and price compared
        </h2>
        <p className="mb-5 text-sm text-slate-400">
          Private tours with a driver. Each fare is for the complete tour and includes
          fuel, tolls, parking and the driver. Lowest-priced first.
        </p>

        <div className="-mx-2 overflow-x-auto px-2">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <caption className="sr-only">
              Sightseeing tours in {cityLabel} compared by duration, number of stops
              covered and starting fare. Fares are for the whole tour, not per kilometre.
            </caption>
            <thead>
              <tr>
                <th scope="col" className="rounded-l-xl border-y border-l border-white/10 bg-white/[0.06] px-4 py-3 font-semibold text-slate-300">Tour</th>
                <th scope="col" className="border-y border-white/10 bg-white/[0.06] px-4 py-3 font-semibold text-slate-300">Duration</th>
                <th scope="col" className="border-y border-white/10 bg-white/[0.06] px-4 py-3 font-semibold text-slate-300">Stops</th>
                <th scope="col" className="rounded-r-xl border-y border-r border-white/10 bg-white/[0.06] px-4 py-3 text-right font-semibold text-slate-300">From</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.slug} className="border-b border-white/10">
                  <th scope="row" className="px-4 py-3 font-bold text-white">
                    <a href={`/sightseeing/${r.slug}`} className="hover:text-emerald-300">{r.name}</a>
                  </th>
                  <td className="px-4 py-3 text-slate-300">{r.duration}</td>
                  <td className="px-4 py-3 text-slate-300">{r.stops ? `${r.stops}+` : '—'}</td>
                  <td className="px-4 py-3 text-right text-base font-black text-amber-300">{rupees(r.fare)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
