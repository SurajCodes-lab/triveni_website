// Week 49: the fact table the city pages lacked. Every city hub already lists
// its outstation corridors as cards (distance, drive time); this renders the
// same records as a plain table with the sedan and Innova fares computed from
// the published rate card (₹11/km and ₹18/km on the 300 km minimum), so the
// page carries a table of numbers a reader can compare and an answer engine
// can lift. Nothing here is typed by hand: the distances are the city's own
// route records and the fares are the rate card's arithmetic.
import DataTable from './DataTable';
import { fareFor, rupees, PER_KM, LOCAL_PACKAGE, OUTSTATION_MIN_KM, groupDigits } from '@/utilis/pricing';
import { routeExists } from '@/lib/seo/route-exists';
import { getAllDistanceRouteSlugs, getDistanceRoute } from '@/utilis/distanceData';

function km(distance) {
  const m = /(\d[\d,]*)\s*km/i.exec(String(distance || ''));
  return m ? Number(m[1].replace(/,/g, '')) : null;
}

// Eleven small-town city pages (Bharatpur, Dalhousie, Gulmarg, Kasauli, Meerut
// and their kind) have no corridor records of their own. For those the table
// is drawn from the distance records that end at the town: the distance is
// the same in both directions, and the duration the distance page publishes
// is used as the drive time. Nothing is typed by hand.
function routesFromDistanceRecords(citySlug) {
  const out = [];
  for (const slug of getAllDistanceRouteSlugs()) {
    if (!slug.endsWith(`-to-${citySlug}`)) continue;
    const r = getDistanceRoute(slug);
    const k = r && r.distance && typeof r.distance === 'object' ? r.distance.km : km(r && r.distance);
    if (!r || !r.origin || !k) continue;
    out.push({ destination: r.origin, distance: `${k} km`, time: r.duration || '' });
  }
  return out;
}

export default function CityFaresTable({ city, citySlug, routes = [], limit = 12 }) {
  const rows = [];
  const source = routes.filter((r) => r && r.destination && km(r.distance)).length >= 2 ? routes : routesFromDistanceRecords(citySlug);
  for (const r of source) {
    if (!r || !r.destination) continue;
    const d = km(r.distance);
    if (!d) continue;
    const slug = `/${citySlug}-to-${String(r.destination).toLowerCase().replace(/\s+/g, '-')}`;
    rows.push({
      destination: r.destination,
      distance: r.distance,
      time: r.time || '',
      sedan: rupees(fareFor(d, 'sedan').amount),
      innova: rupees(fareFor(d, 'innova').amount),
      tempo: rupees(fareFor(d, 'tempo').amount),
      href: routeExists(slug) ? slug : null,
    });
    if (rows.length >= limit) break;
  }
  if (rows.length < 2) {
    // No corridor records for this town: the rate card itself, which is true
    // for every city and is what the searcher asks for first.
    const label = { sedan: 'Sedan (Dzire or similar)', ertiga: 'SUV (Ertiga or similar)', innova: 'Innova Crysta', tempo: '12-seater Tempo Traveller' };
    const rateCardRows = ['sedan', 'ertiga', 'innova', 'tempo'].map((k) => ({
      vehicle: label[k],
      perKm: `₹${groupDigits(PER_KM[k])}/km`,
      day: rupees(fareFor(OUTSTATION_MIN_KM, k).amount),
      local: rupees(LOCAL_PACKAGE.base[k]),
    }));
    return (
      <DataTable
        title={`What a cab costs in ${city}, on the rate card`}
        caption={`Cab fares in ${city} by vehicle: per-kilometre rate, the ${OUTSTATION_MIN_KM} km outstation day and the ${LOCAL_PACKAGE.includedKm} km local package`}
        intro={`Outstation trips bill ${OUTSTATION_MIN_KM} km per day at the per-kilometre rate; the local package is 4 hours or ${LOCAL_PACKAGE.includedKm} km within the city. Fuel and the driver are included; tolls and parking are extra at actuals.`}
        columns={[
          { key: 'vehicle', label: 'Vehicle' },
          { key: 'perKm', label: 'Per km' },
          { key: 'day', label: `Outstation day (${OUTSTATION_MIN_KM} km)` },
          { key: 'local', label: `Local 4 hr / ${LOCAL_PACKAGE.includedKm} km` },
        ]}
        rows={rateCardRows}
        footnote="The same rate card applies in every city we serve; extra kilometres on the local package are charged at the per-kilometre rate."
      />
    );
  }
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <DataTable
        title={`What does an outstation cab from ${city} cost?`}
        caption={`One-way outstation fares from ${city} by vehicle, computed from the published rate card`}
        intro={`One-way fares from ${city}, driver and fuel included. Outstation trips use the 300 km minimum; local routes under 100 km use the 4 hr / 40 km package with extra distance billed at the vehicle rate. Tolls, parking and state permits are extra at actuals. Round trips are billed at the same per-kilometre rate on the full distance.`}
        columns={[
          { key: 'destination', label: 'Destination', strong: true },
          { key: 'distance', label: 'Distance' },
          { key: 'time', label: 'Drive time' },
          { key: 'sedan', label: 'Sedan', align: 'right' },
          { key: 'innova', label: 'Innova Crysta', align: 'right' },
          { key: 'tempo', label: 'Tempo Traveller', align: 'right' },
        ]}
        rows={rows}
        footnote="Sedan ₹11/km, Innova Crysta ₹18/km, Tempo Traveller ₹23/km. Outstation journeys use a 300 km minimum; local routes under 100 km use the published local package."
      />
    </section>
  );
}
