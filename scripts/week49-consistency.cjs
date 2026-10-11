// Week 49, Workstream G: no two pages disagree.
//
// For every corridor the site prices in more than one data record, compare
// the sedan (and where present Ertiga / Innova / tempo) figures across the
// records that feed the corridor booking page, the one-way page, the round-trip
// page, the distance page, the toll guide and the cab-service city cards, and
// against the rate card (pricing.js). Reports every disagreement to
// reports/week49/consistency.json and prints a summary. Read-only.
const fs = require('node:fs');
const path = require('node:path');
const { load } = require('./week48-source-loader.cjs');

const root = path.resolve(__dirname, '..');
const pricing = load('src/utilis/pricing.js');
const fareFor = pricing.fareFor;
const slugify = (s) => String(s || '').toLowerCase().replace(/\s+/g, '-');
const num = (v) => { const m = /(\d[\d,]*)/.exec(String(v || '')); return m ? Number(m[1].replace(/,/g, '')) : null; };
const km = (v) => { const m = /(\d[\d,]*)\s*km/i.exec(String(v || '')); return m ? Number(m[1].replace(/,/g, '')) : null; };

const findings = [];
function note(corridor, source, vehicle, printed, expected, detail) {
  if (printed == null || expected == null) return;
  if (Math.abs(printed - expected) <= 1) return;
  findings.push({ corridor, source, vehicle, printed, expected, detail });
}

// 1. corridor booking records (cityRoutesData): car prices vs rate card on the record's own distance
{
  const { cityRoutesData, basicCityRoutes } = load('src/utilis/cityRoutesData.js');
  const all = { ...cityRoutesData, ...basicCityRoutes };
  const map = { 'Sedan': 'sedan', 'SUV Ertiga': 'ertiga', 'SUV Innova': 'innova' };
  for (const [city, routes] of Object.entries(all)) {
    for (const r of routes || []) {
      const d = km(r.distance); if (!d) continue;
      const corridor = `${slugify(city)}-to-${slugify(r.destination)}`;
      for (const p of r.prices || []) {
        const v = map[p.vehicle]; if (!v) continue;
        note(corridor, 'cityRoutesData (booking page record, before recomputation)', v, num(p.price), fareFor(d, v).amount, `${d} km`);
      }
    }
  }
}
const checked = {};
// 2. one-way records (oneWayFares / roundTripFares on distanceNum)
{
  const m = load('src/utilis/oneWayCabData.js');
  for (const s of m.getAllOneWayRouteSlugs()) {
    const r = m.getOneWayRoute(s); if (!r) continue;
    const d = r.distanceNum || km(r.distance); if (!d) continue;
    checked.oneWayCabData = (checked.oneWayCabData || 0) + 1;
    note(s, 'oneWayCabData', 'sedan one way', num(r.oneWayFares?.sedan), fareFor(d, 'sedan').amount, `${d} km`);
    note(s, 'oneWayCabData', 'sedan round trip', num(r.roundTripFares?.sedan), fareFor(2 * d, 'sedan').amount, `${d} km each way`);
  }
}
// 3. round-trip records: the data writes a 10% reduction into 2 × distance × 11
{
  const m = load('src/utilis/roundTripData.js');
  for (const [s, r] of Object.entries(m.roundTripRoutes || {})) {
    const d = r.distanceKm || null; if (!d) continue;
    checked.roundTripData = (checked.roundTripData || 0) + 1;
    note(s, 'roundTripData (10% reduction written into the data)', 'sedan round trip', num(r.cabFares?.sedan), fareFor(2 * d, 'sedan').amount, `${d} km each way`);
  }
}
// 4. distance records
{
  const m = load('src/utilis/distanceData.js');
  for (const s of m.getAllDistanceRouteSlugs()) {
    const r = m.getDistanceRoute(s); if (!r) continue;
    const d = km(r.distance); if (!d) continue;
    checked.distanceData = (checked.distanceData || 0) + 1;
    note(s, 'distanceData', 'sedan', num(r.cabFares?.sedan), fareFor(d, 'sedan').amount, `${d} km`);
  }
}
// 5. toll records: cabFare vs rate card on totalDistance
{
  const m = load('src/utilis/tollCostData.js');
  for (const [s, r] of Object.entries(m.tollCostRoutes || {})) {
    note(s, 'tollCostData', 'sedan', num(r.cabFare), fareFor(r.totalDistance, 'sedan').amount, `${r.totalDistance} km`);
  }
}
// 6. cab-service city cards
{
  const m = load('src/utilis/cabServiceCityData.js');
  const cities = m.cabServiceCities || m.default || {};
  for (const [slug, c] of Object.entries(cities)) {
    for (const r of c.popularRoutes || []) {
      const d = km(r.distance); if (!d) continue;
      note(`${slug}-to-${slugify(r.to)}`, 'cabServiceCityData (city card)', 'sedan', num(r.fare), fareFor(d, 'sedan').amount, `${d} km`);
    }
  }
}
// 6b. airport-to-city routes: hand-typed fares; outstation runs (100 km and over) compared with the rate card,
//     short transfers are a flat airport price list and are not compared
{
  const m = load('src/utilis/airportOutstationData.js');
  for (const [s, r] of Object.entries(m.airportRoutes || {})) {
    const d = km(r.distance); if (!d || d < 100) continue;
    checked.airportOutstationData = (checked.airportOutstationData || 0) + 1;
    note(s, 'airportOutstationData (outstation airport run)', 'sedan', num(r.fares?.sedan?.price), fareFor(d, 'sedan').amount, `${d} km`);
  }
}
// 7. tempo per-km ranges in visible text of the tempo data
{
  const src = fs.readFileSync(path.join(root, 'src/utilis/tempoTravellerData.js'), 'utf8');
  const ranges = [...new Set(src.match(/₹\s?2\d\s?[-–]\s?₹?\s?3\d\s?\/?\s?km/g) || [])];
  if (ranges.length) findings.push({ corridor: '(tempo data)', source: 'tempoTravellerData text', vehicle: 'tempo', printed: null, expected: 23, detail: `per-km ranges in text: ${ranges.join(', ')}` });
}

const out = path.join(root, 'reports/week49'); fs.mkdirSync(out, { recursive: true });
fs.writeFileSync(path.join(out, 'consistency.json'), JSON.stringify(findings, null, 1));
const bySource = {};
for (const f of findings) bySource[f.source] = (bySource[f.source] || 0) + 1;
console.log('records checked:', checked);
console.log('disagreements:', findings.length);
for (const [s, n] of Object.entries(bySource).sort((a, b) => b[1] - a[1])) console.log(`  ${n}\t${s}`);
for (const f of findings.slice(0, 12)) console.log('  e.g.', f.corridor, f.source, f.vehicle, 'printed', f.printed, 'rate card', f.expected, f.detail);
