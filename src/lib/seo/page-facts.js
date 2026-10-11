// Week 49, Workstream G: one fact per commercial page, for the AI index.
//
// The full index (/llms-full.txt) listed every page under its family with a
// description of the family; an assistant reading it saw addresses, not
// facts. This module returns, for a page address, the one line an assistant
// would lift: the distance, the drive time, the rate-card fare, the toll, the
// package price. Every value comes from the same records the page itself
// renders, computed with the same rate-card function; where a record lacks
// the fields, no fact is returned rather than a guess. Server-only.
import { fareFor, rupees, groupDigits } from '@/utilis/pricing';
import { cityRoutesData, basicCityRoutes, defaultRoutes } from '@/utilis/cityRoutesData';
import { getOneWayRoute } from '@/utilis/oneWayCabData';
import { roundTripRoutes } from '@/utilis/roundTripData';
import { getDistanceRoute } from '@/utilis/distanceData';
import { tollCostRoutes } from '@/utilis/tollCostData';
import { tempoRoutes, tempoCities } from '@/utilis/tempoTravellerData';
import { getLocalTaxiCity } from '@/utilis/localTaxiCityData';
import { getTaxiFareCity } from '@/utilis/taxiFareData';
import { getStationBySlug } from '@/utilis/railwayStationData';
import { getBusStandBySlug } from '@/utilis/busStandData';
import { getAllTours } from '@/utilis/sightseeingData';
import { airportRoutes } from '@/utilis/airportOutstationData';
import { busRoutes, busFleet } from '@/utilis/busRoutesData';

// Distance records carry { km, miles }; the other families carry "230 km" strings.
const km = (v) => {
  if (v && typeof v === 'object' && typeof v.km === 'number') return v.km;
  const m = /(\d[\d,]*)\s*km/i.exec(String(v || ''));
  return m ? Number(m[1].replace(/,/g, '')) : null;
};
const kmText = (v) => { const k = km(v); return k ? `${k} km` : ''; };
const title = (s) => String(s || '').replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
const num = (v) => { const m = /(\d[\d,]*)/.exec(String(v || '')); return m ? Number(m[1].replace(/,/g, '')) : null; };

let toursBySlug = null;
function tour(slug) {
  if (!toursBySlug) { toursBySlug = new Map(); for (const t of getAllTours()) toursBySlug.set(t.slug, t); }
  return toursBySlug.get(slug) || null;
}

function corridorRecord(originSlug, destSlug) {
  const origin = title(originSlug);
  const list = cityRoutesData[origin] || basicCityRoutes[origin] || defaultRoutes[origin] || [];
  return list.find((r) => r && String(r.destination || '').toLowerCase().replace(/\s+/g, '-') === destSlug) || null;
}

function sedanLine(d) {
  return `sedan ${rupees(fareFor(d, 'sedan').amount)} one way on the rate card (₹11/km, 300 km minimum)`;
}

/** One line of fact for a page address, or null. */
export function pageFact(path) {
  const p = String(path || '');
  const seg = p.replace(/^\//, '').split('/');
  const top = seg[0];
  const rest = seg.slice(1).join('/');

  // airport-to-city pages: /delhi-airport-to-agra-taxi (checked before the corridor shape, which they also match)
  if (seg.length === 1 && /-airport-to-/.test(top)) {
    const r = airportRoutes && (Array.isArray(airportRoutes) ? airportRoutes.find((x) => x.slug === top) : airportRoutes[top]);
    if (!r || !r.distance) return null;
    const sedan = r.fares && r.fares.sedan && r.fares.sedan.price ? `₹${groupDigits(r.fares.sedan.price)}` : null;
    return `${r.airport || 'Airport'} to ${r.destination || title(top.split('-airport-to-')[1]).replace(/ (Taxi|Cab)$/, '')}: ${r.distance}${r.time ? `, ${r.time}` : ''}${sedan ? `, sedan ${sedan} as published on the page` : ''}.`;
  }
  // corridor booking pages: /delhi-to-agra
  if (seg.length === 1 && /^[a-z-]+-to-[a-z-]+$/.test(top)) {
    const [o, d] = top.split('-to-');
    const r = corridorRecord(o, d);
    const dist = r ? km(r.distance) : null;
    if (r && dist) return `${title(o)} to ${title(d)}: ${r.distance}${r.time ? `, ${r.time}` : ''}, ${sedanLine(dist)}.`;
    const dr = getDistanceRoute(top);
    const dk = dr ? km(dr.distance) : null;
    if (dr && dk) return `${title(o)} to ${title(d)}: ${kmText(dr.distance)}${dr.duration ? `, ${dr.duration}` : ''}, ${sedanLine(dk)}.`;
    return null;
  }
  if (top === 'one-way-cab' && rest) {
    const r = getOneWayRoute(rest);
    if (!r) return null;
    const d = r.distanceNum || km(r.distance);
    return d ? `${r.from} to ${r.to} one way: ${r.distance}${r.time ? `, ${r.time}` : ''}, ${sedanLine(d)}; the return leg is not charged.` : null;
  }
  if (top === 'round-trip' && rest) {
    const r = roundTripRoutes[rest];
    if (!r || !r.distanceKm) return null;
    return `${r.origin} to ${r.destination} round trip: ${r.distanceKm} km each way${r.duration ? `, ${r.duration}` : ''}; sedan ${r.cabFares?.sedan ? rupees(num(r.cabFares.sedan)) : rupees(fareFor(2 * r.distanceKm, 'sedan').amount)} as published on the page.`;
  }
  if (top === 'distance' && rest) {
    const r = getDistanceRoute(rest);
    const d = r ? km(r.distance) : null;
    return r && d ? `${r.origin} to ${r.destination}: ${kmText(r.distance)} by road${r.duration ? `, ${r.duration}` : ''}${r.highway ? `, via ${r.highway}` : ''}; ${sedanLine(d)}.` : null;
  }
  if (top === 'toll-cost' && rest) {
    const r = tollCostRoutes[rest];
    if (!r) return null;
    return `${r.origin} to ${r.destination}: toll ₹${groupDigits(r.totalTollCost.car)} for a car and ₹${groupDigits(r.totalTollCost.suv)} for an SUV across ${r.tollPlazas.length} plaza${r.tollPlazas.length === 1 ? '' : 's'} on ${r.totalDistance} km; cab fare ${rupees(r.cabFare)}.`;
  }
  if ((top === 'tempo-traveller' || top === 'force-urbania' || top === 'maharaja-tempo-traveller') && rest) {
    const vehicle = top === 'tempo-traveller' ? 'Tempo Traveller' : top === 'force-urbania' ? 'Force Urbania' : 'Maharaja Tempo Traveller';
    if (/-to-/.test(rest)) {
      const [o, d] = rest.split('-to-');
      const dr = getDistanceRoute(rest);
      const dk = dr ? km(dr.distance) : null;
      const fare = dk && top === 'tempo-traveller' ? `; 12-seater ${rupees(fareFor(dk, 'tempo').amount)} one way on the rate card (₹23/km, 300 km minimum)` : '';
      return dr && dk ? `${title(o)} to ${title(d)} by ${vehicle}: ${kmText(dr.distance)}${dr.duration ? `, ${dr.duration}` : ''}${fare}.` : null;
    }
    const cityName = Object.keys(tempoCities).find((n) => tempoCities[n].slug === rest);
    if (!cityName) return null;
    const n = (tempoRoutes[cityName] || []).length;
    return `${vehicle} in ${cityName}: ${n} outstation routes; a 12-seater tempo traveller is ${rupees(fareFor(300, 'tempo').amount)} a day on the rate card (300 km at ₹23/km), driver and fuel included.`;
  }
  if (top === 'local-taxi' && rest) {
    const c = getLocalTaxiCity(rest);
    const pk = c && Array.isArray(c.packages) ? c.packages[0] : null;
    return pk ? `Local taxi in ${c.city}: ${pk.name} package from ${rupees(pk.sedan)} for a sedan${pk.suv ? `, ${rupees(pk.suv)} for an SUV` : ''}.` : null;
  }
  if (top === 'taxi-fare' && rest) {
    const c = getTaxiFareCity(rest);
    return c && c.baseFare ? `Taxi fares in ${c.city}: sedan ₹${groupDigits(c.baseFare.sedan)}/km, SUV ₹${groupDigits(c.baseFare.suv)}/km, tempo traveller ₹${groupDigits(c.baseFare.tempo)}/km, ${c.minimumFare} km minimum.` : null;
  }
  if (top === 'railway-station-taxi' && rest) {
    const s = getStationBySlug(rest);
    const d = s && Array.isArray(s.destinations) ? s.destinations[0] : null;
    return d ? `Taxi from ${s.name}: ${d.name} ${d.distance}, sedan ${rupees(d.sedanFare)}${d.time ? `, ${d.time}` : ''}; fixed fares, 24 hours.` : null;
  }
  if (top === 'bus-stand-taxi' && rest) {
    const s = getBusStandBySlug(rest);
    const d = s && Array.isArray(s.destinations) ? s.destinations[0] : null;
    return d ? `Taxi from ${s.name}: ${d.name} ${d.distance}, ${d.fare}${d.time ? `, ${d.time}` : ''}; fixed sedan fares.` : null;
  }
  if (top === 'sightseeing' && rest) {
    const t = tour(rest);
    return t && t.price && t.price.sedan ? `${t.name}: ${t.duration || ''}${t.duration ? ', ' : ''}sedan ${rupees(t.price.sedan)}${t.price.suv ? `, SUV ${rupees(t.price.suv)}` : ''}${t.price.tempoTraveller ? `, tempo traveller ${rupees(t.price.tempoTraveller)}` : ''}, driver and fuel included.` : null;
  }
  if (top === 'bus-routes' && rest && /-to-/.test(rest)) {
    const [o, d] = rest.split('-to-');
    const origin = title(o);
    const r = (busRoutes[origin] || []).find((x) => String(x.name || '').toLowerCase().replace(/\s+/g, '-') === d);
    const rate = busFleet && busFleet[0] ? busFleet[0].ratePerKm : null;
    return r ? `${origin} to ${r.name} by chartered bus: ${r.distance}${r.duration ? `, ${r.duration}` : ''}; ${busFleet[0].seaterType || '22 seater'} from ${rate}, billed as a round trip, driver and fuel included.` : null;
  }
  // city hubs: /meerut, /amritsar — the rate card itself, which is what the page prints
  if (seg.length === 1 && !/-to-/.test(top)) {
    const cityName = Object.keys(tempoCities).find((n) => tempoCities[n].slug === top);
    const tf = getTaxiFareCity(top);
    const name = cityName || (tf && tf.city) || null;
    if (!name) return null;
    return `Cabs in ${name}: sedan ₹11/km, Ertiga ₹15/km, Innova Crysta ₹18/km, 12-seater tempo traveller ₹23/km on the rate card, driver and fuel included; outstation bills a 300 km minimum per day, tolls and parking extra.`;
  }
  return null;
}
