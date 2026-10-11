import { rateCardPrices } from '@/utilis/cityRoutePricing';

// Direct answer block for a city hub.
//
// The Week 51 family audit found a quick-answer element on only 14% of the 404
// city hub pages, against 84% of corridor pages and 100% of distance and one-way
// pages. That is the largest answer-shape gap on the site by page count.
//
// Everything here is derived from the city's OWN route data — how many routes it
// serves, its nearest and furthest destinations with their real distances and
// fares. No sentence is reusable for another city with the name swapped, which is
// the whole point: the Week 51 plan forbids city-name substitution, so a shared
// component has to be fed genuinely different facts per page.
//
// Returns null when there is not enough data to say anything true.
export default function CityQuickAnswer({ city, routes = [] }) {
  const usable = (Array.isArray(routes) ? routes : [])
    .filter(r => r && r.destination)
    .map(r => {
      const km = Number(String(r.distance || '').replace(/[^\d.]/g, ''));
      const priced = rateCardPrices(r) || [];
      const sedan = priced.find(p => /sedan/i.test(p.vehicle || ''));
      return { destination: r.destination, km: Number.isFinite(km) && km > 0 ? km : null, time: r.time || null, sedan: sedan?.price || null };
    });

  if (usable.length === 0) return null;

  const withKm = usable.filter(r => r.km).sort((a, b) => a.km - b.km);
  const nearest = withKm[0] || null;
  const furthest = withKm.length > 1 ? withKm[withKm.length - 1] : null;
  const priced = usable.filter(r => r.sedan);

  return (
    <section id="city-quick-answer" aria-labelledby="city-quick-answer-heading" className="bg-amber-50/60 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-5xl rounded-2xl border border-amber-200 bg-white p-5 sm:p-7">
        <h2 id="city-quick-answer-heading" className="text-xl font-bold text-slate-900 sm:text-2xl">
          Booking a cab in {city} — the short answer
        </h2>

        <p className="mt-3 leading-relaxed text-slate-700">
          Triveni Cabs runs chauffeur-driven cabs from {city} on{' '}
          <strong>{usable.length} published {usable.length === 1 ? 'route' : 'routes'}</strong>, with
          vehicles from four-seat sedans up to 56-seat coaches. Every fare below includes fuel, the
          driver and GST; tolls, parking and state permits are charged at actuals.
        </p>

        <dl className="mt-5 grid gap-5 sm:grid-cols-3">
          {nearest && (
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">Shortest published trip</dt>
              <dd className="mt-1 font-semibold text-slate-900">{city} to {nearest.destination}</dd>
              <dd className="mt-1 text-sm leading-6 text-slate-700">
                {nearest.km} km{nearest.time ? `, about ${nearest.time}` : ''}
                {nearest.sedan ? ` — from ${nearest.sedan} in a sedan` : ''}
              </dd>
            </div>
          )}
          {furthest && (
            <div>
              <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">Longest published trip</dt>
              <dd className="mt-1 font-semibold text-slate-900">{city} to {furthest.destination}</dd>
              <dd className="mt-1 text-sm leading-6 text-slate-700">
                {furthest.km} km{furthest.time ? `, about ${furthest.time}` : ''}
                {furthest.sedan ? ` — from ${furthest.sedan} in a sedan` : ''}
              </dd>
            </div>
          )}
          <div>
            <dt className="text-sm font-semibold uppercase tracking-wide text-slate-500">What to send us</dt>
            <dd className="mt-1 text-sm leading-6 text-slate-700">
              Your pickup address or terminal, the drop, the travel date and time, how many
              passengers and large bags, and whether you need the vehicle for a one-way drop or kept
              with you for the return.
            </dd>
          </div>
        </dl>

        {priced.length > 1 && (
          <p className="mt-5 text-sm leading-6 text-slate-600">
            Fares shown are the published sedan rate for the distance recorded on each route page.
            A round trip, an overnight halt or local sightseeing at the destination is a different
            booking from a one-way drop — say which you want and the quote will match the journey.
          </p>
        )}
      </div>
    </section>
  );
}
