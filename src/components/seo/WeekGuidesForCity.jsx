// Server component. Links a city hub to the Week 48 guides that answer
// searches about that city (weekend getaways near me, hill stations near X,
// tourist places within N km, the festival guides). The guides were built as
// new pages with almost no inbound links; this is one of the three places
// (with the places-to-visit lists and the festival booking pages) that now
// point at them. Renders nothing for a city with no guide.
import Link from 'next/link';
import { getWeek48GuideLinks } from '@/utilis/guides/week48/links';
import { routeExists } from '@/lib/seo/route-exists';

export default function WeekGuidesForCity({ city, citySlug }) {
  const links = getWeek48GuideLinks(citySlug || city).filter((l) => routeExists(l.href));
  if (!links.length) return null;
  return (
    <section aria-label={`Guides for ${city}`} className="mx-auto max-w-6xl px-4 py-10 text-slate-900">
      <p className="text-[11px] font-black uppercase tracking-[0.22em] text-amber-700">Planning guides</p>
      <h2 className="font-display-serif mt-2 text-2xl font-black">Guides for {city} trips, written this season</h2>
      <p className="mt-2 text-slate-600">Drive times, what the roads are like, the festival dates and the fares, each on its own page.</p>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="group flex flex-col rounded-2xl border border-amber-200 bg-white p-4 shadow-sm transition hover:border-amber-400 hover:shadow-md">
              <span className="text-sm font-black text-slate-900 group-hover:text-amber-700">{l.label}</span>
              {l.sub && <span className="mt-1 text-xs text-slate-500">{l.sub}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
