// src/app/llms.txt/route.js
//
// Dynamic llms.txt — the map AI answer engines (ChatGPT, Perplexity, Gemini,
// Google AI Overviews) read to understand and cite the site. Generated from the
// live data files so it ALWAYS includes every current page (new routes, season
// pages, hubs) — the old static public/llms.txt went stale and missed pages.
//
// AEO value: the "Fares" + "Quick answers" sections give engines a clean, correct,
// self-contained fact set to quote for "how much is a Delhi to X cab" queries.

import { getAllOneWayRouteSlugs, getOneWayRoute } from '@/utilis/oneWayCabData';
import { getAllRoundTripSlugs } from '@/utilis/roundTripData';
import { getAllDistanceRouteSlugs } from '@/utilis/distanceData';
import { getAllTollCostSlugs } from '@/utilis/tollCostData';
import { cityRoutesData, basicCityRoutes, defaultRoutes } from '@/utilis/cityRoutesData';
import { tempoRoutes } from '@/utilis/tempoTravellerData';
import { busRoutes } from '@/utilis/busRoutesData';
import { festivalData } from '@/utilis/festivalData';
import { blogPosts } from '@/utilis/blog';
import { getCitiesWithTours } from '@/utilis/sightseeingData';
import { getAllCitySlugs as getAirportCitySlugs } from '@/utilis/airportCityData';

export const dynamic = 'force-static';
export const revalidate = 3600;

const BASE = 'https://www.trivenicabs.in';
const cap = (s) => s.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

// Static travel-guide dirs under src/app/(routes)/ — keep in sync when a new
// *-travel-guide page is added (they are static folders, not data-driven).
const TRAVEL_GUIDES = [
  'agra', 'ajmer', 'amritsar', 'ayodhya', 'chandigarh', 'dalhousie', 'dehradun',
  'dharamshala', 'haridwar', 'jaipur', 'jaisalmer', 'jodhpur', 'kashmir', 'lucknow',
  'manali', 'mathura-vrindavan', 'mount-abu', 'mussoorie', 'nainital', 'pushkar',
  'rishikesh', 'shimla', 'udaipur', 'varanasi',
];

export async function GET() {
  const ow = getAllOneWayRouteSlugs();
  const rt = getAllRoundTripSlugs();
  const dist = getAllDistanceRouteSlugs();
  const toll = getAllTollCostSlugs();
  const cityHubs = [...new Set([
    ...Object.keys(cityRoutesData || {}),
    ...Object.keys(basicCityRoutes || {}),
    ...Object.keys(defaultRoutes || {}),
  ])].sort();
  const tempoCount = Object.values(tempoRoutes || {}).reduce((n, d) => n + d.length, 0);
  const busCount = Object.values(busRoutes || {}).reduce((n, d) => n + d.length, 0);
  const airportCities = getAirportCitySlugs() || [];
  const sightCities = getCitiesWithTours() || [];
  const posts = (blogPosts || []).filter((p) => p && p.slug && p.date);
  const latestPosts = [...posts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 25);

  // Quick-answer fares for the most-asked corridors (real values from data).
  const QUICK = ['delhi-to-agra','delhi-to-jaipur','delhi-to-chandigarh','delhi-to-haridwar',
    'delhi-to-rishikesh','delhi-to-shimla','delhi-to-manali','delhi-to-amritsar',
    'delhi-to-nainital','delhi-to-dehradun'];
  const quickLines = QUICK.map((slug) => {
    const r = getOneWayRoute(slug);
    if (!r) return null;
    return `- ${r.from} to ${r.to}: one-way sedan ${r.oneWayFares?.sedan || ''}, ${r.distance}, ~${r.time}. Book: ${BASE}/one-way-cab/${slug}`;
  }).filter(Boolean).join('\n');

  const hubLines = cityHubs.map((c) => {
    const slug = c.toLowerCase().replace(/\s+/g, '-');
    return `- [${c} taxi service](${BASE}/${slug})`;
  }).join('\n');

  // All festival + seasonal pages (includes the Aug/Sep season expansion).
  const festLines = (festivalData || []).map((f) =>
    `- [${f.festival} — ${f.location}](${BASE}/${f.slug}): ${f.dates || f.month || ''}`).join('\n');

  const owSample = ow.slice(0, 40).map((s) => `- ${BASE}/one-way-cab/${s}`).join('\n');

  const txt = `# Triveni Cabs

> India's outstation taxi, airport-transfer, tempo/bus charter, and tour operator since 2015.
> Based in Agra (Uttar Pradesh). Serves Delhi NCR, Agra, Jaipur, Chandigarh, Amritsar,
> Lucknow, Ayodhya, Varanasi, Udaipur, Jodhpur, Jaisalmer and 40+ North India cities.
> Fleet: Sedan, SUV (Ertiga/Innova), 12/16/17/20/26-seater Tempo Traveller, 22-56 seater Bus.
> Founder: Pankaj Singh Gaur. Phone: +91 7668570551. WhatsApp: https://wa.me/917668570551.
> Coverage: ${ow.length} one-way routes, ${rt.length} round-trip routes, ${tempoCount} tempo routes, ${busCount} bus routes, ${cityHubs.length} city hubs, ${dist.length} distance guides, ${toll.length} toll guides, ${airportCities.length} airport hubs, ${TRAVEL_GUIDES.length} travel guides, ${posts.length} blog posts.

## Fares (canonical, all-inclusive per km — fuel, driver, tolls on FASTag routes, GST)
- Sedan (Swift Dzire / Etios): Rs 11/km
- SUV Ertiga: Rs 15/km · Innova Crysta: Rs 18/km
- Tempo Traveller: 12-seater Rs 20/km · 16-seater Rs 22/km · 17-seater Rs 24/km · 20-seater Rs 26/km · 26-seater Rs 28/km
- Bus: 22-56 seater from Rs 30/km (Volvo/luxury higher)
- Outstation minimum billing: 250-300 km/day. Round trip includes Rs 300/night driver allowance.
- Note: for Tempo Traveller and Bus, a one-way trip is charged the same as a round trip (the vehicle returns either way) — there is no one-way discount on tempo/bus. Cars (sedan/SUV) do get a one-way discount.

## Quick answers (popular route fares — real, current)
${quickLines}

## City taxi hubs (${cityHubs.length})
${hubLines}

## Booking service hubs
- [One-way cab](${BASE}/one-way-cab): pay one direction only, ${ow.length} routes
- [Round-trip cab](${BASE}/round-trip): driver stays with you, ${rt.length} routes
- [Tempo Traveller](${BASE}/tempo-traveller): 12-26 seater group travel, ${tempoCount} routes
- [Bus hire](${BASE}/bus-routes): 22-56 seater coaches, ${busCount} routes
- [Airport transfers](${BASE}/airport-service): flight-tracked pickup/drop, all major airports
- [Outstation cabs](${BASE}/outstation-cabs): intercity travel
- [Distance guides](${BASE}/distance): km, drive time, route (${dist.length})
- [Toll cost guides](${BASE}/toll-cost): exact FASTag toll charges (${toll.length})
- [Sightseeing tours](${BASE}/sightseeing) · [Tours with guide](${BASE}/tours-with-guide)
- [Char Dham Yatra](${BASE}/chardham-yatra): Yamunotri-Gangotri-Kedarnath-Badrinath
- [Wedding cars](${BASE}/wedding) · [Corporate transport](${BASE}/corporate-transportation-service) · [Event transport](${BASE}/event-transportation-service)
- [Cab rentals](${BASE}/full-day-cab-rental): half-day, full-day, multi-day, monthly
- [Taxi fare calculator](${BASE}/fare-calculator): instant all-inclusive fares (Sedan Rs 11/km ... Bus Rs 30+/km)
- [Long Weekend Calendar 2026](${BASE}/long-weekend-calendar-2026): every 2026 long weekend with the best getaway for each

## Seasonal & festival transport (${(festivalData || []).length})
${festLines}

## City travel guides (${TRAVEL_GUIDES.length})
${TRAVEL_GUIDES.map((g) => `- [${cap(g)} travel guide](${BASE}/${g}-travel-guide)`).join('\n')}

## Airport transfer hubs (${airportCities.length})
${airportCities.map((c) => `- [${cap(c)} airport taxi](${BASE}/airport-service/${c})`).join('\n')}

## Sightseeing tour cities (${sightCities.length})
${sightCities.map((c) => `- [${cap(String(c))} sightseeing tours](${BASE}/sightseeing/${String(c).toLowerCase().replace(/\s+/g, '-')})`).join('\n')}

## Blog & travel answers (${posts.length} posts — latest 25)
${latestPosts.map((p) => `- [${p.title}](${BASE}/blog/${p.slug}) — ${p.date}`).join('\n')}

## Popular one-way routes (sample of ${ow.length})
${owSample}

## Core
- [About](${BASE}/about) · [Trust & credentials](${BASE}/trust) · [Contact](${BASE}/contact) · [Reviews](${BASE}/reviews) · [Blog](${BASE}/blog)

## Full index
- [Sitemap](${BASE}/sitemap.xml): complete URL list
- [Detailed listing](${BASE}/llms-full.txt): all routes and pages
`;

  return new Response(txt, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600, s-maxage=3600' },
  });
}
