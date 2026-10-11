// Week 49, Workstream E — "Where we pick up in {city}": the city's own
// station, airport, bus-stand, local, tempo, wedding and corporate pages as a
// short, factual list. Server component; every link is checked against the
// route manifest, so a city without (say) an airport page simply has no
// airport row. Gives the city hub the pickup-point facts the plan asked for
// without inventing a single address.

import Link from 'next/link';
import { routeExists } from '@/lib/seo/route-exists';
import { LOCAL_PACKAGE, PER_KM, rupees, groupDigits } from '@/utilis/pricing';

function candidates(city, slug) {
  return [
    { href: `/railway-station-taxi/${slug}`, label: `${city} railway station`, sub: 'Taxi from the station, any train, any hour' },
    { href: `/${slug}-airport-taxi`, label: `${city} airport`, sub: 'Airport pickup with the flight tracked' },
    { href: `/airport-service/${slug}`, label: `${city} airport transfers`, sub: 'Airport pickup with the flight tracked' },
    { href: `/bus-stand-taxi/${slug}-isbt`, label: `${city} ISBT`, sub: 'Taxi from the bus stand' },
    { href: `/bus-stand-taxi/${slug}`, label: `${city} bus stand`, sub: 'Taxi from the bus stand' },
    { href: `/local-taxi/${slug}`, label: `Anywhere in ${city}, by the hour`, sub: `Local package 4 hr / ${LOCAL_PACKAGE.includedKm} km from ${rupees(LOCAL_PACKAGE.base.sedan)}` },
    { href: `/tempo-traveller/${slug}`, label: `Groups from ${city}`, sub: `12-seater Tempo Traveller at ₹${groupDigits(PER_KM.tempo)}/km` },
    { href: `/wedding/${slug}`, label: `Weddings in ${city}`, sub: 'Baraat, doli and guest cars' },
    { href: `/corporate-transportation-service/${slug}`, label: `Offices in ${city}`, sub: 'Employee and executive transport with a GST invoice' },
  ];
}

export default function CityPickupPoints({ city, citySlug }) {
  const slug = String(citySlug || '').toLowerCase().replace(/\s+/g, '-');
  const seen = new Set();
  const rows = candidates(city, slug).filter((c) => {
    if (!routeExists(c.href)) return false;
    // one airport row, one bus-stand row
    const key = c.label.replace(/ transfers$/, '').replace(/ ISBT$/, ' bus stand');
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  if (rows.length < 2) return null;
  return (
    <section className="mx-auto mt-10 max-w-6xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6" aria-labelledby="city-pickup-points">
      <h2 id="city-pickup-points" className="text-xl font-bold text-slate-900">Where do we pick up in {city}?</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        Anywhere in {city}: the driver comes to the address you give. These are the pickup points with their own page, each with its fares and timings.
      </p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {rows.map((r) => (
          <li key={r.href}>
            <Link href={r.href} className="block rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition-colors hover:border-slate-300 hover:bg-white">
              <span className="block text-sm font-semibold text-slate-900">{r.label}</span>
              <span className="mt-0.5 block text-xs text-slate-600">{r.sub}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
