'use client';

// Week 49 (Workstream E, strategy action 11): "same route, other vehicle".
// The tempo traveller, Force Urbania and Maharaja pages for one city or one
// route were built as three separate islands; the tempo page earns the search
// and the other two had no link from it. This strip, on the tempo route and
// city pages, links the twin pages that exist for the same slug, checked
// against the list of built pages, so the tempo family's standing reaches the
// 697 Urbania and Maharaja pages without a single invented link.
import Link from 'next/link';
import { clientRouteExists } from '@/lib/seo/client-route-exists';

const FAMILIES = [
  { prefix: 'tempo-traveller', label: 'Tempo Traveller', note: '12 to 26 seater' },
  { prefix: 'force-urbania', label: 'Force Urbania', note: '10 to 17 seater, newer body' },
  { prefix: 'maharaja-tempo-traveller', label: 'Maharaja Tempo Traveller', note: 'reclining pushback seats' },
];

export default function OtherVehicleStrip({ slug, current = 'tempo-traveller', place = '' }) {
  if (!slug) return null;
  const links = FAMILIES.filter((f) => f.prefix !== current)
    .map((f) => ({ ...f, href: `/${f.prefix}/${slug}` }))
    .filter((f) => clientRouteExists(f.href));
  if (!links.length) return null;
  return (
    <section className="border-y border-slate-200 bg-slate-50" aria-label="Same journey, other vehicles">
      <div className="mx-auto max-w-6xl px-4 py-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-amber-700">Same {place ? place : 'journey'}, other vehicles</p>
        <div className="mt-3 flex flex-wrap gap-2.5">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-amber-400 hover:text-amber-800">
              {l.label} <span className="text-xs font-normal text-slate-500">· {l.note}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
