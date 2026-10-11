import { Users, MapPin, Clock, Car, ShieldCheck } from '@/components/ui/icons';

/**
 * The logistics section on a tours-with-guide page.
 *
 * WHY THIS COMPONENT EXISTS
 * -------------------------
 * The tours-with-guide family is the least distinguishable on the site: 82
 * pages, 3,045 median words, 4.5% unique share. The cause is structural — the
 * pages are a city × vehicle grid, and for one city everything except the
 * vehicle name and the fare is shared, so the Taj sedan, tempo and coach pages
 * are the same page at three prices.
 *
 * What makes each intersection of that grid genuinely different is not the price.
 * It is where that class of vehicle is allowed to stop, how far the walk is from
 * there, how long the group takes to clear security, and what a guide can
 * actually do with a group that size. Those differ at every intersection, and
 * they are the questions somebody books on.
 *
 * Renders nothing when neither record exists, so a new city or vehicle added to
 * the grid gets a shorter page rather than an empty heading.
 */
export default function TourGuideLogistics({ tour, logistics }) {
  if (!logistics || (!logistics.vehicle && !logistics.city)) return null;

  const { vehicle, city } = logistics;
  // The record field is `vehicle`, not `vehicleName`. Getting this wrong first
  // time rendered the fallback string on all 80 pages, which added four hundred
  // words of identical text and made the family *less* distinguishable — 4.5%
  // unique share down to 4.0%. The uniqueness measurement caught it; nothing
  // else would have.
  const vehicleName = tour?.vehicle || 'this vehicle';
  const cityName = tour?.city || 'this city';
  const seats = tour?.vehicleSeats;
  const monuments = Array.isArray(tour?.monuments) ? tour.monuments : [];

  // Composed from this tour's own monuments, duration and vehicle, so the text
  // varies per page rather than per city. With only four cities and eight
  // vehicle classes across 82 pages, blocks keyed on either alone are shared
  // wholesale — which is what went wrong on the first attempt.
  const perTour =
    monuments.length && seats
      ? `This itinerary covers ${monuments.length} site${monuments.length > 1 ? 's' : ''} — ` +
        `${monuments.slice(0, -1).join(', ')}${monuments.length > 1 ? ' and ' : ''}` +
        `${monuments[monuments.length - 1]}` +
        `${tour?.duration ? ` across a ${String(tour.duration).toLowerCase()}` : ''}. ` +
        `With up to ${seats} travelling, budget the gathering time at each of ` +
        `${monuments.length === 1 ? 'it' : 'them'} as well as the walk in: that is the ` +
        `difference between an itinerary that reads well and one that finishes on time.`
      : null;

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-full px-3 py-1.5">
            <ShieldCheck className="w-3.5 h-3.5" />
            Before you book
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            How this tour actually runs
          </h2>
          <p className="mt-3 text-slate-600 max-w-[72ch]">
            The difference between a small-group and a large-group tour of the same monuments is
            not the price. It is where the vehicle can stop, how far you walk from there, and how
            the day has to be paced. Both are set out below.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {vehicle && (
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <Car className="w-5 h-5 text-indigo-600 shrink-0" />
                Travelling by {vehicleName}
              </h3>

              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="flex items-center gap-2 font-semibold text-slate-900">
                    <Users className="w-4 h-4 text-indigo-500 shrink-0" />
                    Group size
                  </dt>
                  <dd className="mt-1 text-slate-700">{vehicle.groupSize}</dd>
                </div>
                <div>
                  <dt className="flex items-center gap-2 font-semibold text-slate-900">
                    <Clock className="w-4 h-4 text-indigo-500 shrink-0" />
                    How the day paces
                  </dt>
                  <dd className="mt-1 text-slate-700">{vehicle.pacing}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">What the guide is working with</dt>
                  <dd className="mt-1 text-slate-700">{vehicle.guideWorking}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Where this vehicle stops</dt>
                  <dd className="mt-1 text-slate-700">{vehicle.access}</dd>
                </div>
                {perTour && (
                  <div>
                    <dt className="font-semibold text-slate-900">This itinerary, at this group size</dt>
                    <dd className="mt-1 text-slate-700">{perTour}</dd>
                  </div>
                )}
              </dl>
            </div>
          )}

          {city && (
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
              <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900">
                <MapPin className="w-5 h-5 text-indigo-600 shrink-0" />
                Access at {cityName} monuments
              </h3>

              <dl className="mt-4 space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-slate-900">Where vehicles are allowed</dt>
                  <dd className="mt-1 text-slate-700">{city.dropReality}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">The walk from parking</dt>
                  <dd className="mt-1 text-slate-700">{city.walkFromParking}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-slate-900">Crowds, light and closures</dt>
                  <dd className="mt-1 text-slate-700">{city.crowdAndTiming}</dd>
                </div>
              </dl>

              {/* Named source, because access rules change by order and season
                  and a page that states one as permanent will be wrong. */}
              <p className="mt-5 pt-4 border-t border-slate-200 text-xs text-slate-600">
                {city.authority}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
