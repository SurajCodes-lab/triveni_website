// src/components/seo/HowToReachTable.jsx
//
// Week 49 — "how do I get there, and what does it cost" on the city travel,
// food and shopping guides.
//
// These are the site's longest editorial pages (twelve thousand words each) and
// the whole-site audit reads them as the largest family with no table of
// figures. They also answer a question the export asks constantly — how far it
// is from the cities people set out from — and they answered it in prose or not
// at all.
//
// Every row is the site's own record: the distance page for that corridor
// supplies the kilometres, the drive time and the highway, and the published
// rate card supplies the fare. A city with no corridor record renders nothing.

import DataTable from './DataTable';
import { getAllDistanceRouteSlugs, getDistanceRoute } from '@/utilis/distanceData';
import { fareFor, rupees, OUTSTATION_MIN_KM } from '@/utilis/pricing';
import { routeExists } from '@/lib/seo/route-exists';

const slugify = (s) => String(s || '').toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

/**
 * @param {string} city      display name, e.g. "Kashmir"
 * @param {string} citySlug  the slug used in corridor addresses, e.g. "srinagar"
 * @param {number} limit     rows
 */
export default function HowToReachTable({ city, citySlug, limit = 8 }) {
  const dest = slugify(citySlug || city);
  if (!dest) return null;

  const rows = [];
  const seen = new Set();
  for (const slug of getAllDistanceRouteSlugs()) {
    if (!slug.endsWith(`-to-${dest}`)) continue;
    const r = getDistanceRoute(slug);
    if (!r || !r.distance || !r.distance.km) continue;
    if (seen.has(r.origin)) continue;
    seen.add(r.origin);
    const km = r.distance.km;
    rows.push({
      _km: km,
      from: r.origin,
      distance: `${km} km`,
      time: r.duration || '',
      road: r.highway || '',
      sedan: rupees(fareFor(km, 'sedan').amount),
      href: `/distance/${slug}`,
    });
  }
  if (rows.length < 2) return null;
  rows.sort((a, b) => a._km - b._km);
  const use = rows.slice(0, limit);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10" aria-labelledby="how-to-reach-table">
      <DataTable
        title={`How far is ${city}, and what does a cab cost?`}
        caption={`Road distance, drive time, highway and one-way cab fare to ${city} from the cities it is most often reached from`}
        intro={`Distances and drive times are the ones our road guides publish for each corridor. The fare is the published rate card for an AC sedan with a chauffeur — ₹11 a kilometre on a ${OUTSTATION_MIN_KM} km per day minimum, so any corridor shorter than that bills the minimum. Tolls and parking are extra at actuals.`}
        columns={[
          { key: 'from', label: 'From', strong: true },
          { key: 'distance', label: 'By road', align: 'right' },
          { key: 'time', label: 'Drive time' },
          { key: 'road', label: 'Road' },
          { key: 'sedan', label: 'Sedan, one way', align: 'right' },
        ]}
        rows={use.map(({ _km, href, ...rest }) => rest)}
        footnote={`Each corridor has its own page with the halts, the toll plazas and the other vehicles: ${use
          .filter((r) => routeExists(r.href))
          .slice(0, 4)
          .map((r) => `${r.from} to ${city}`)
          .join(', ')}.`}
      />
    </section>
  );
}
