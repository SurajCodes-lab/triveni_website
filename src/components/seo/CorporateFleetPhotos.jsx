// Week 49 — the corporate fleet in photographs, for the pages that listed the
// vehicles as words or icons while the same fleet is photographed on the
// corporate city pages. Server component; the images are the fleet record's
// own (public/images/car, /tempo, /bus).

import Image from 'next/image';
import { corporateFleet } from '@/utilis/corporateTransportData';

export default function CorporateFleetPhotos({ context = 'corporate travel', city = '' }) {
  const fleet = (corporateFleet || []).filter((v) => v && v.name && v.image);
  if (fleet.length < 2) return null;
  const where = city ? ` in ${city}` : '';
  return (
    <section className="mx-auto max-w-6xl px-4 py-10" aria-labelledby="fleet-photos">
      <h2 id="fleet-photos" className="text-2xl font-bold text-slate-900">
        What the vehicles for {context}{where} actually look like
      </h2>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-slate-600">
        The fleet we run, with the seats each takes and its rate. Fuel and the driver are in the rate; tolls, parking and state permits are extra at actuals.
      </p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {fleet.map((v) => (
          <article key={v.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="relative aspect-[16/10]">
              <Image
                src={v.image}
                alt={`${v.name} — ${Array.isArray(v.vehicles) ? v.vehicles.join(', ') : v.capacity}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover"
              />
              {v.priceRange && (
                <span className="absolute right-3 top-3 rounded-full bg-slate-900/80 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                  {v.priceRange}
                </span>
              )}
            </div>
            <div className="p-4">
              <p className="font-bold text-slate-900">{v.name}</p>
              <p className="mt-0.5 text-xs text-slate-500">{v.capacity}</p>
              {Array.isArray(v.vehicles) && v.vehicles.length > 0 && (
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600">{v.vehicles.join(', ')}</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
