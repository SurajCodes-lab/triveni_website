import { MapPin, Clock, Building2, Navigation, AlertTriangle } from '@/components/ui/icons';

/**
 * The per-city operational section on a corporate city page.
 *
 * WHY THIS COMPONENT EXISTS
 * -------------------------
 * The nine corporate city hubs rank at a weighted position of 19.8 while the
 * service pages nested inside them rank at 8.2. They are also 97.7% identical
 * to one another — two of them share 1,356 of 1,463 words. Duplication does not
 * by itself explain the ranking gap, which was established by measurement in
 * Week 52, but nine pages differing by seven per cent of their words are not
 * nine pages as far as anything reading them is concerned.
 *
 * Everything rendered here is specific to one city and exists nowhere else on
 * the site: what the city's corporate demand is made of, where staff actually
 * travel from and to, the hours that have to be covered, the real drive to the
 * nearest airport, and the one operational constraint that catches suppliers
 * out in that city.
 *
 * It renders nothing at all for a city with no facts recorded, so a tenth city
 * added to the data tomorrow gets a shorter page rather than an empty heading.
 */
export default function CorporateCityLocal({ city, local }) {
  if (!local) return null;

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 border border-blue-100 rounded-full px-3 py-1.5">
            <Building2 className="w-3.5 h-3.5" />
            Planning transport in {city}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            What corporate travel in {city} actually involves
          </h2>
          <p className="mt-3 text-slate-600 max-w-[72ch]">
            {local.industryMix}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* The corridors — the thing a transport manager is really buying. */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
            <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
              <MapPin className="w-5 h-5 text-blue-600 shrink-0" />
              The commute corridors we serve
            </h3>
            <ul className="mt-4 space-y-3">
              {local.commuteCorridors.map((corridor) => (
                <li key={corridor} className="flex gap-3 text-sm text-slate-700">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" aria-hidden="true" />
                  <span>{corridor}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            {/* Shift cover. */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <Clock className="w-5 h-5 text-blue-600 shrink-0" />
                Hours that have to be covered
              </h3>
              <p className="mt-3 text-sm text-slate-700">{local.shiftPattern}</p>
            </div>

            {/* Airport access, for the visiting client rather than the employee. */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <Navigation className="w-5 h-5 text-blue-600 shrink-0" />
                Airport access
              </h3>
              <p className="mt-2 text-sm font-semibold text-slate-900">{local.airportAccess.airport}</p>
              <p className="mt-2 text-sm text-slate-700">{local.airportAccess.note}</p>
            </div>
          </div>
        </div>

        {/* The constraint specific to this city. The most useful paragraph on
            the page for somebody comparing suppliers, and the least likely to
            appear on a competitor's. */}
        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/70 p-6">
          <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
            What catches suppliers out in {city}
          </h3>
          <p className="mt-3 text-sm text-slate-800 max-w-[80ch]">{local.localNote}</p>
        </div>
      </div>
    </section>
  );
}
