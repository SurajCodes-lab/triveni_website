import { CalendarDays, MapPin, Users, Navigation, Car } from '@/components/ui/icons';

/**
 * The per-city planning section on a wedding city page.
 *
 * WHY THIS COMPONENT EXISTS
 * -------------------------
 * Measured in Week 53: the nineteen wedding city pages sit at 76.5% median
 * overlap with one another and 10.9% unique share. One tenth of each page was
 * about its own city.
 *
 * That matters more here than anywhere else on the site, because this is the
 * best-converting family it has — 5.58% against a 0.60% site average, reaching
 * 8% to 10.64% where a city page holds the top five — and nine more cities are
 * due in the build programme.
 *
 * Everything here is specific to one city: when weddings actually happen there,
 * where the venues are and what that costs in travel time, what a procession
 * through those particular streets involves, how out-of-town guests arrive, and
 * which vehicles that city's venues can physically accommodate.
 *
 * The procession and vehicle-fit notes are the ones worth having. A couple is
 * choosing a car from photographs, and whether that car can reach the doorway
 * of a specific heritage venue is a question only an operator who drives those
 * streets can answer. It is also the thing most often discovered on the day.
 *
 * Renders nothing for a city with no facts recorded, so a twentieth city added
 * tomorrow gets a shorter page rather than an empty heading.
 */
export default function WeddingCityLocal({ city, local }) {
  if (!local) return null;

  const cards = [
    {
      icon: CalendarDays,
      title: `When weddings happen in ${city}`,
      body: local.seasonWindow,
    },
    {
      icon: MapPin,
      title: 'Where the venues are',
      body: local.venueGeography,
    },
    {
      icon: Navigation,
      title: 'How guests arrive',
      body: local.guestArrival,
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 border border-rose-100 rounded-full px-3 py-1.5">
            <Users className="w-3.5 h-3.5" />
            Planning a {city} wedding
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            What a wedding car in {city} actually involves
          </h2>
          <p className="mt-3 text-slate-600 max-w-[72ch]">
            The things that differ by city rather than by car — the season, the venue geography,
            and what the streets around those venues will and will not take.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
              <h3 className="flex items-start gap-2 text-base font-bold text-slate-900">
                <Icon className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <span>{title}</span>
              </h3>
              <p className="mt-3 text-sm text-slate-700">{body}</p>
            </div>
          ))}
        </div>

        {/* The two operational notes. These are the paragraphs a couple cannot
            get from a directory, and the reason to read this page rather than
            another city's. */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-rose-200 bg-rose-50/60 p-6">
            <h3 className="flex items-start gap-2 text-base font-bold text-slate-900">
              <Users className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
              <span>The baraat in {city}</span>
            </h3>
            <p className="mt-3 text-sm text-slate-800">{local.baraatNote}</p>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-6">
            <h3 className="flex items-start gap-2 text-base font-bold text-slate-900">
              <Car className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <span>Which cars work at {city} venues</span>
            </h3>
            <p className="mt-3 text-sm text-slate-800">{local.vehicleFit}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
