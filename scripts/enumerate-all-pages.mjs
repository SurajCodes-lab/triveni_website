#!/usr/bin/env node
// Enumerate every URL the site renders, including resolved dynamic slugs.

import { readdirSync, statSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

const ROUTES_DIR = 'src/app/(routes)';

function walk(dir, baseSlug = '', out = []) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    const s = statSync(p);
    if (s.isDirectory()) {
      if (name.startsWith('_')) continue;
      walk(p, baseSlug + '/' + name, out);
    } else if (name === 'page.js') {
      out.push({ file: p.replace(/\\/g, '/'), pattern: baseSlug || '/' });
    }
  }
  return out;
}

async function tryImport(modPath, fnName) {
  try {
    const url = pathToFileURL('./' + modPath + '.js').href;
    const m = await import(url);
    if (typeof m[fnName] === 'function') return m[fnName]();
    return null;
  } catch {
    return null;
  }
}

// Map dynamic patterns to their slug provider functions.
// Hardcoded slug lists (when import-resolution fails or pattern is composed).
const HARDCODED_SLUGS = {
  '/[cityName]': ['agra', 'delhi', 'jaipur', 'chandigarh', 'noida', 'gurgaon', 'shimla', 'manali', 'amritsar', 'haridwar', 'rishikesh', 'dehradun', 'mussoorie', 'nainital', 'jodhpur', 'jaisalmer', 'udaipur', 'pushkar', 'ajmer', 'lucknow', 'varanasi', 'ayodhya', 'mathura', 'vrindavan', 'dharamshala'],
  '/corporate-transportation-service/[city]': ['delhi', 'agra', 'jaipur', 'chandigarh', 'dehradun', 'noida', 'gurgaon', 'lucknow', 'haridwar'],
  '/corporate-transportation-service/industry/[slug]': ['it-companies', 'bpo-call-centers', 'pharma-companies', 'manufacturing', 'banks-financial', 'hospitals-healthcare', 'education-schools', 'government-psu', 'ecommerce-logistics'],
  '/corporate-transportation-service/use-case/[slug]': ['employee-pick-drop', 'airport-transfer-corporate', 'executive-car-rental', 'office-shuttle-service', 'monthly-car-rental-corporate'],
  '/event-transportation-service/[slug]': ['wedding-transportation', 'corporate-event-transport', 'concert-festival-transport', 'sports-event-transport', 'religious-event-transport', 'school-college-events', 'destination-wedding-transport', 'political-rally-transport', 'exhibition-transport'],
  '/event-transportation-service/city/[slug]': ['delhi', 'agra', 'jaipur', 'chandigarh', 'dehradun', 'shimla', 'manali', 'amritsar', 'haridwar', 'lucknow', 'udaipur', 'varanasi'],
  '/tourist-attractions/[city]': ['delhi', 'agra', 'jaipur', 'chandigarh', 'lucknow', 'varanasi', 'dehradun', 'amritsar', 'noida', 'gurgaon', 'haridwar', 'shimla', 'udaipur', 'mathura', 'rishikesh'],
};

const dynamicResolvers = [
  // [pattern_regex, module_path, fn_name, transform(slug)]
  ['/[cityName]', 'src/utilis/data', 'cities', s => s.toLowerCase().replace(/\s+/g, '-')],
  ['/airport-service/[city]', 'src/utilis/airportCityData', 'getAllCitySlugs'],
  ['/best-time-to-visit/[destination]', 'src/utilis/bestTimeToVisitData', 'getAllBestTimeSlugs'],
  ['/blog/[slug]', 'src/utilis/blog', 'blogPosts', p => p.slug],
  ['/bus-routes/[route]', null, null, null], // composed from busRoutes
  ['/bus-stand-taxi/[stand]', 'src/utilis/busStandData', 'busStandSlugs'],
  ['/bus-vs-cab/[route]', 'src/utilis/busVsCabData', 'getAllBusVsCabSlugs'],
  ['/cab-service/[city]', 'src/utilis/cabServiceCityData', 'getAllCabServiceSlugs'],
  ['/chardham-yatra/[slug]', 'src/utilis/chardhamYatraData', 'getAllSlugs'],
  ['/corporate-transportation-service/[city]', null, null, null],
  ['/corporate-transportation-service/industry/[slug]', null, null, null],
  ['/corporate-transportation-service/use-case/[slug]', null, null, null],
  ['/distance/[route]', 'src/utilis/distanceData', 'getAllDistanceRouteSlugs'],
  ['/dzire-hire/[route]', null, null, null],
  ['/ertiga-hire/[route]', null, null, null],
  ['/event-transportation-service/[slug]', null, null, null],
  ['/event-transportation-service/city/[slug]', null, null, null],
  ['/fortuner-hire/[route]', null, null, null],
  ['/how-to-reach-[city]', 'src/utilis/howToReachData', 'getAllHowToReachCities'],
  ['/how-to-reach/[route]', 'src/utilis/howToReachRouteData', 'getAllHowToReachSlugs'],
  ['/innova-crysta-hire/[route]', null, null, null],
  ['/innova-hire/[route]', null, null, null],
  ['/local-taxi/[city]', 'src/utilis/localTaxiCityData', 'getAllLocalTaxiSlugs'],
  ['/monthly-calendar/[month]', 'src/utilis/monthlyCalendarData', 'getAllMonthSlugs'],
  ['/one-way-cab/[route]', 'src/utilis/oneWayCabData', 'getAllOneWayRouteSlugs'],
  ['/outstation-cabs/[city]', 'src/utilis/outstationCityData', 'getAllOutstationCitySlugs'],
  ['/packages/[slug]', 'src/utilis/packageData', 'getAllPackageSlugs'],
  ['/railway-station-taxi/[station]', 'src/utilis/railwayStationData', 'getAllStationSlugs'],
  ['/religious-tours/[slug]', 'src/utilis/religiousTourData', 'getAllTourSlugs'],
  ['/road-trip/[slug]', 'src/utilis/roadTripData', 'getAllRoadTripSlugs'],
  ['/round-trip/[route]', 'src/utilis/roundTripData', 'getAllRoundTripSlugs'],
  ['/sightseeing/[slug]', 'src/utilis/sightseeingData', 'getAllTours', t => t.slug || t.id],
  ['/taxi-fare/[city]', 'src/utilis/taxiFareData', 'getAllTaxiFareSlugs'],
  ['/toll-cost/[route]', 'src/utilis/tollCostData', 'getAllTollCostSlugs'],
  ['/tourist-attractions/[city]', null, null, null],
  ['/tours-with-guide/[slug]', 'src/utilis/toursWithGuideData', 'getAllTourSlugs'],
  ['/train-taxi/[route]', 'src/utilis/trainTaxiData', 'getAllTrainTaxiSlugs'],
  ['/travel-by-car/[route]', 'src/utilis/travelByCarData', 'getAllTravelByCarSlugs'],
  ['/travel-options/[slug]', 'src/utilis/travelOptionsData', 'getAllTravelOptionsSlugs'],
  ['/vehicles/[slug]', 'src/utilis/vehicleHireData', 'getAllVehicleHireSlugs'],
  ['/wedding/[city]', 'src/utilis/weddingCityData', 'getAllWeddingCitySlugs'],
];

const all = walk(ROUTES_DIR);
const staticPages = [];
const dynamicPages = []; // { pattern, slugs: [...] }

for (const { pattern } of all) {
  const cleanPattern = pattern.replace(/^\/\(routes\)/, '');
  if (cleanPattern.includes('[')) {
    dynamicPages.push({ pattern: cleanPattern, slugs: [] });
  } else {
    staticPages.push(cleanPattern);
  }
}

// Resolve dynamic slugs
for (const dp of dynamicPages) {
  // Hardcoded fallback first
  if (HARDCODED_SLUGS[dp.pattern]) {
    dp.slugs = HARDCODED_SLUGS[dp.pattern];
    continue;
  }
  const resolver = dynamicResolvers.find(r => r[0] === dp.pattern);
  if (!resolver) continue;
  const [, modPath, fnName, transform] = resolver;
  if (!modPath || !fnName) continue;
  try {
    const url = pathToFileURL('./' + modPath + '.js').href;
    const m = await import(url);
    let raw;
    if (typeof m[fnName] === 'function') raw = m[fnName]();
    else if (Array.isArray(m[fnName])) raw = m[fnName];
    else if (typeof m[fnName] === 'object') raw = Object.keys(m[fnName]);
    else continue;
    if (transform) raw = raw.map(transform);
    dp.slugs = raw;
  } catch (e) {
    console.error(`Failed ${dp.pattern}: ${e.message}`);
  }
}

const summary = {
  staticCount: staticPages.length,
  dynamicPatterns: dynamicPages.length,
  totalRendered: staticPages.length + dynamicPages.reduce((a, b) => a + b.slugs.length, 0),
};

console.log(JSON.stringify(summary, null, 2));

writeFileSync('scripts/enumerated-pages.json', JSON.stringify({
  static: staticPages.sort(),
  dynamic: dynamicPages,
}, null, 2));

console.log('\nWritten to scripts/enumerated-pages.json');
