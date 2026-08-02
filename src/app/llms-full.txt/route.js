// src/app/llms-full.txt/route.js
//
// Comprehensive machine-readable index of EVERY route/page, for AI answer engines
// that want the full map. Generated from the live data files so it never goes stale.

import { getAllOneWayRouteSlugs } from '@/utilis/oneWayCabData';
import { getAllRoundTripSlugs } from '@/utilis/roundTripData';
import { getAllDistanceRouteSlugs } from '@/utilis/distanceData';
import { getAllTollCostSlugs } from '@/utilis/tollCostData';
import { cityRoutesData, basicCityRoutes, defaultRoutes } from '@/utilis/cityRoutesData';
import { tempoRoutes } from '@/utilis/tempoTravellerData';
import { busRoutes } from '@/utilis/busRoutesData';
import { festivalData } from '@/utilis/festivalData';
import { blogPosts } from '@/utilis/blog';
import { getCitiesWithTours, getAllTours } from '@/utilis/sightseeingData';
import { getAllCitySlugs as getAirportCitySlugs } from '@/utilis/airportCityData';

export const dynamic = 'force-static';
export const revalidate = 3600;

const BASE = 'https://www.trivenicabs.in';

// Static travel-guide dirs under src/app/(routes)/ — keep in sync with llms.txt/route.js.
const TRAVEL_GUIDES = [
  'agra', 'ajmer', 'amritsar', 'ayodhya', 'chandigarh', 'dalhousie', 'dehradun',
  'dharamshala', 'haridwar', 'jaipur', 'jaisalmer', 'jodhpur', 'kashmir', 'lucknow',
  'manali', 'mathura-vrindavan', 'mount-abu', 'mussoorie', 'nainital', 'pushkar',
  'rishikesh', 'shimla', 'udaipur', 'varanasi',
];

function odSlugs(obj) {
  const out = [];
  Object.entries(obj || {}).forEach(([o, ds]) => (ds || []).forEach((d) => {
    const n = typeof d === 'string' ? d : d?.name;
    if (n) out.push(`${o.toLowerCase().replace(/\s+/g, '-')}-to-${n.toLowerCase().replace(/\s+/g, '-')}`);
  }));
  return [...new Set(out)];
}

export async function GET() {
  const section = (title, base, slugs) =>
    `## ${title} (${slugs.length})\n` + slugs.map((s) => `${BASE}/${base}/${s}`).join('\n');

  const cityHubs = [...new Set([
    ...Object.keys(cityRoutesData || {}),
    ...Object.keys(basicCityRoutes || {}),
    ...Object.keys(defaultRoutes || {}),
  ])].sort().map((c) => `${BASE}/${c.toLowerCase().replace(/\s+/g, '-')}`);

  const parts = [
    '# Triveni Cabs — Full Index',
    '> Complete machine-readable listing of all routes and pages. Phone +91 7668570551.',
    '',
    `## City taxi hubs (${cityHubs.length})\n${cityHubs.join('\n')}`,
    '',
    section('One-way cab routes', 'one-way-cab', getAllOneWayRouteSlugs()),
    '',
    section('Round-trip cab routes', 'round-trip', getAllRoundTripSlugs()),
    '',
    section('Tempo Traveller routes', 'tempo-traveller', odSlugs(tempoRoutes)),
    '',
    section('Bus routes', 'bus-routes', odSlugs(busRoutes)),
    '',
    section('Distance guides', 'distance', getAllDistanceRouteSlugs()),
    '',
    section('Toll-cost guides', 'toll-cost', getAllTollCostSlugs()),
    '',
    `## Seasonal & festival pages (${(festivalData || []).length})\n` +
      (festivalData || []).map((f) => `${BASE}/${f.slug}`).join('\n'),
    '',
    `## City travel guides (${TRAVEL_GUIDES.length})\n` +
      TRAVEL_GUIDES.map((g) => `${BASE}/${g}-travel-guide`).join('\n'),
    '',
    `## Airport service hubs (${(getAirportCitySlugs() || []).length})\n` +
      (getAirportCitySlugs() || []).map((c) => `${BASE}/airport-service/${c}`).join('\n'),
    '',
    `## Sightseeing city hubs (${(getCitiesWithTours() || []).length})\n` +
      (getCitiesWithTours() || []).map((c) => `${BASE}/sightseeing/${String(c).toLowerCase().replace(/\s+/g, '-')}`).join('\n'),
    '',
    `## Sightseeing tour pages (${(getAllTours() || []).length})\n` +
      (getAllTours() || []).filter((t) => t && t.slug).map((t) => `${BASE}/sightseeing/${t.slug}`).join('\n'),
    '',
    `## Blog posts (${(blogPosts || []).filter((p) => p && p.slug).length})\n` +
      (blogPosts || []).filter((p) => p && p.slug).map((p) => `${BASE}/blog/${p.slug}`).join('\n'),
  ];

  return new Response(parts.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600, s-maxage=3600' },
  });
}
