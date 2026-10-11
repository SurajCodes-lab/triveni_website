import { fareFor, rupees, rupeeText } from './pricing';

// Apply the existing corridor policy at the shared data boundary, so city
// cards, metadata and booking pages all receive the same car prices.
// Group vehicles and unknown-distance records retain their recorded prices.
// Group-vehicle fares are recorded as strings in cityRoutesData.js and most of
// them carry no thousands separator ("₹34,500"), while the car fares below are
// rebuilt through rupees() and do ("₹8,250"). rupeeText closes that gap without
// touching any amount. It lives in ./pricing so the other families that render
// pre-stored fare strings can use the same one.
const withThousandsSeparators = rupeeText;

export function rateCardPrices(route) {
  if (!route || !Array.isArray(route.prices)) return route?.prices || [];
  const tidy = row => ({ ...row, price: withThousandsSeparators(row.price), roundTrip: withThousandsSeparators(row.roundTrip) });
  const match = /^(\d[\d,]*(?:\.\d+)?)\s*km\b/i.exec(String(route.distance || '').trim());
  const km = match ? Number(match[1].replace(/,/g, '')) : null;
  if (!Number.isFinite(km) || km <= 0) return route.prices.map(tidy);
  const vehicles = { Sedan: 'sedan', 'SUV Ertiga': 'ertiga', 'SUV Innova': 'innova' };
  return route.prices.map(row => {
    const vehicle = vehicles[row.vehicle];
    return vehicle ? { ...row, price: rupees(fareFor(km, vehicle).amount), roundTrip: rupees(fareFor(km * 2, vehicle).amount) } : tidy(row);
  });
}

export function normalizeCityRoutePrices(cities) {
  return Object.fromEntries(Object.entries(cities).map(([city, routes]) => [
    city, routes.map(route => ({ ...route, prices: rateCardPrices(route) })),
  ]));
}
