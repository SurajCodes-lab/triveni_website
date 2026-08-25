// src/app/sitemap.js - Complete sitemap with all routes

import { execSync } from "child_process";
import { cities } from "@/utilis/data";
import { cityRoutesData, basicCityRoutes } from "@/utilis/cityRoutesData";
import { getAllTourSlugs } from "@/utilis/religiousTourData";
import { tempoRoutes, tempoCities } from "@/utilis/tempoTravellerData";
import { chardhamRoutes } from "@/utilis/chardhamData";
import { getAllSlugs as getAllChardhamYatraSlugs } from "@/utilis/chardhamYatraData";
import { blogPosts } from "@/utilis/blog";
import { busRoutes } from "@/utilis/busRoutesData";
import { getAllTours } from "@/utilis/sightseeingData";
import { getAllCitySlugs } from "@/utilis/airportCityData";
import { getAllWeddingCitySlugs } from "@/utilis/weddingCityData";
import { getAllWeddingCarModelSlugs } from "@/utilis/weddingCarModels";
import { getCitiesWithTours } from "@/utilis/sightseeingData";
import { getAllItinerarySlugs } from "@/utilis/cityItineraryData";
import { getAllOneWayRouteSlugs } from "@/utilis/oneWayCabData";
import { getAllDistanceRouteSlugs } from "@/utilis/distanceData";
import { getAllLocalTaxiSlugs } from "@/utilis/localTaxiCityData";
import { getAllOutstationCitySlugs } from "@/utilis/outstationCityData";
import { getAllHowToReachSlugs } from "@/utilis/howToReachRouteData";
import { getAllHowToReachCities } from "@/utilis/howToReachData";
import { getAllBestTimeSlugs } from "@/utilis/bestTimeToVisitData";
import { getAllRoundTripSlugs } from "@/utilis/roundTripData";
import { getAllTravelByCarSlugs } from "@/utilis/travelByCarData";
import { getAllTollCostSlugs } from "@/utilis/tollCostData";
import { getAllTaxiFareSlugs } from "@/utilis/taxiFareData";
import { getAllBusVsCabSlugs } from "@/utilis/busVsCabData";
import { getAllVehicleRouteEntries } from "@/utilis/vehicleRouteHireData";
import { getAllRoadTripSlugs } from "@/utilis/roadTripData";
import { getAllCabServiceSlugs } from "@/utilis/cabServiceCityData";
import { getAllPackageSlugs } from "@/utilis/packageData";
import { getAllTravelOptionsSlugs } from "@/utilis/travelOptionsData";
import { getAllTrainTaxiSlugs } from "@/utilis/trainTaxiData";
import { getAllMonthSlugs } from "@/utilis/monthlyCalendarData";
import { getAllTourSlugs as getAllToursWithGuideSlugs, getToursByGroup as getToursWithGuideByGroup } from "@/utilis/toursWithGuideData";

// Corporate and Event slugs for sitemap
const corporateIndustrySlugs = [
  'it-companies',
  'bpo-call-centers',
  'pharma-companies',
  'manufacturing',
  'banks-financial',
  'hospitals-healthcare',
  'education-schools',
  'government-psu',
  'ecommerce-logistics'
];

const corporateUseCaseSlugs = [
  'employee-pick-drop',
  'airport-transfer-corporate',
  'executive-car-rental',
  'office-shuttle-service',
  'monthly-car-rental-corporate'
];

const corporateCitySlugs = ['delhi', 'agra', 'jaipur', 'chandigarh', 'dehradun', 'noida', 'gurgaon', 'lucknow', 'haridwar'];

const eventTypeSlugs = [
  'wedding-transportation',
  'corporate-event-transport',
  'concert-festival-transport',
  'sports-event-transport',
  'religious-event-transport',
  'school-college-events',
  'destination-wedding-transport',
  'political-rally-transport',
  'exhibition-transport'
];

const eventCitySlugs = ['delhi', 'agra', 'jaipur', 'chandigarh', 'dehradun', 'shimla', 'manali', 'amritsar', 'haridwar', 'lucknow', 'udaipur', 'varanasi'];

function createRouteSlug(cityName, destination) {
  return `${cityName.toLowerCase().replace(/\s+/g, '-')}-to-${destination.toLowerCase().replace(/\s+/g, '-')}`;
}

function createTempoRouteSlug(originCity, destinationName) {
  const origin = originCity.toLowerCase().replace(/\s+/g, '-');
  const destination = destinationName.toLowerCase().replace(/\s+/g, '-');
  return `${origin}-to-${destination}`;
}

const allCityRoutes = {
  ...cityRoutesData,
  ...basicCityRoutes
};

/**
 * Get the last content-update timestamp dynamically from git.
 *
 * Why dynamic: a hardcoded date goes stale the moment someone forgets to bump it.
 * Why git: it's the source of truth for "when content actually changed". We watch
 *   directories that hold content/data (not cosmetic CSS tweaks), so a style-only
 *   commit won't falsely trigger a recrawl signal.
 *
 * Fallback: if git isn't available at build time (e.g., shallow CI clone without
 * history, some serverless builders), fall back to the hardcoded date. Never use
 * `new Date()` directly here — Google ignores sitemaps whose lastmod equals
 * "rebuilt today" because it signals a lying lastmod.
 */
function getLastContentUpdate() {
  // Updated after 5-queue SEO overhaul (stations, Amritsar, best-time, cab-service, corporate) + site-wide acceleration
  const HARDCODED_FALLBACK = new Date('2026-04-17');
  try {
    // Watch the utils + content-producing route dirs — not styles or components.
    const iso = execSync(
      'git log -1 --format=%cI -- src/utilis src/app/(routes)',
      { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }
    ).trim();
    if (iso) {
      const parsed = new Date(iso);
      if (!Number.isNaN(parsed.getTime())) return parsed;
    }
  } catch {
    // git unavailable or not a git repo — fall through to fallback
  }
  return HARDCODED_FALLBACK;
}

// Per-category lastmod — the honest signal.
//
// Google explicitly says lastmod should reflect the specific URL's content change,
// NOT the site's latest deploy. Previously this function used a hardcoded
// 2026-04-17 date for a static "recently overhauled" list, which meant:
//   (a) every category beyond the list got the global git-log date (too coarse),
//   (b) categories on the list got a frozen date that went stale (dishonest).
//
// New approach: each category is mapped to the canonical data file(s) that drive
// its pages. We ask git for the last modification time of those files. If the
// data file changed today, that category's lastmod is today. If nothing has
// touched it in months, Google sees the honest older date. This is exactly what
// Google wants — and exactly what Navboost rewards for freshness + honesty.
//
// Cache the git lookups so the 60+ sitemap entries don't each fork a git process.
const _categoryLastmodCache = new Map();

const CATEGORY_FILES = {
  'one-way-cab': ['src/utilis/oneWayCabData.js', 'src/utilis/oneWayCabEnrichment.js', 'src/utilis/oneway'],
  'station-taxi': ['src/utilis/stationTaxiEnrichment.js'],
  'amritsar': ['src/app/(routes)/amritsar-travel-guide', 'src/app/(routes)/amritsar-beyond-golden-temple'],
  'best-time-to-visit': ['src/utilis/bestTimeToVisitData.js', 'src/app/(routes)/best-time-to-visit'],
  'cab-service': ['src/utilis/cabServiceCityData.js', 'src/app/(routes)/cab-service'],
  'corporate': ['src/app/(routes)/corporate-transportation-service'],
  'bus-vs-tempo': ['src/app/(routes)/bus-vs-tempo-for-wedding'],
  'city-hub': ['src/utilis/data.js', 'src/utilis/cityRoutesData.js'],
  'wedding': ['src/utilis/weddingCityData.js', 'src/utilis/weddingCarModels.js'],
  'airport-service': ['src/utilis/airportCityData.js', 'src/app/(routes)/airport-service'],
  'sightseeing': ['src/utilis/sightseeingData.js'],
  'road-trip': ['src/utilis/roadTripData.js', 'src/app/(routes)/10-day-north-india-road-trip', 'src/app/(routes)/7-day-himachal-tour-by-car', 'src/app/(routes)/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur'],
  'day-trip': ['src/app/(routes)/agra-day-trip-from-delhi', 'src/app/(routes)/agra-in-1-day-itinerary', 'src/app/(routes)/ayodhya-1-day-package'],
  'blog': ['src/utilis/blog'],
  'tempo': ['src/utilis/tempoTravellerData.js'],
  'vehicle-type': ['src/utilis/vehicleTypeData.js', 'src/components/tempo'],
  'bus-routes': ['src/utilis/busRoutesData.js'],
  'religious-tour': ['src/utilis/religiousTourData.js'],
  'chardham': ['src/utilis/chardhamData.js', 'src/utilis/chardhamYatraData.js'],
  'tours-with-guide': ['src/utilis/toursWithGuideData.js', 'src/utilis/toursWithGuideEnrichment.js'],
  // Aug/Sep 2026 in-window seasonal pages — own category so their lastmod
  // tracks the real last edit to each seasonal page dir (honest freshness),
  // and so they can be split out of the evergreen festival block for higher
  // priority + weekly changeFrequency while the window is live.
  'seasonal': [
    'src/app/(routes)/janmashtami-mathura-vrindavan-cab',
    'src/app/(routes)/raksha-bandhan-cab-service',
    'src/app/(routes)/independence-day-weekend-packages-2026',
    'src/app/(routes)/ganesh-chaturthi-transport',
    'src/app/(routes)/hariyali-teej-jaipur-cab',
    'src/app/(routes)/monsoon-road-trip-packages',
    'src/app/(routes)/monsoon-hill-station-packages',
    'src/app/(routes)/valley-of-flowers-trek-from-delhi',
    'src/app/(routes)/spiti-valley-august-trip',
    'src/app/(routes)/kashmir-in-september',
    'src/app/(routes)/leh-ladakh-august-september-trip',
    'src/app/(routes)/chardham-yatra-september-2026',
    'src/app/(routes)/kedarnath-september-trip',
    'src/app/(routes)/august-long-weekend-getaways-delhi',
    'src/app/(routes)/september-long-weekend-trips-2026',
  ],
};

function getCategoryLastmod(category, fallback) {
  if (_categoryLastmodCache.has(category)) {
    return _categoryLastmodCache.get(category);
  }
  const paths = CATEGORY_FILES[category];
  if (!paths || paths.length === 0) {
    _categoryLastmodCache.set(category, fallback);
    return fallback;
  }
  try {
    const iso = execSync(
      `git log -1 --format=%cI -- ${paths.join(' ')}`,
      { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }
    ).trim();
    if (iso) {
      const parsed = new Date(iso);
      if (!Number.isNaN(parsed.getTime())) {
        _categoryLastmodCache.set(category, parsed);
        return parsed;
      }
    }
  } catch {
    // git unavailable — fall through
  }
  _categoryLastmodCache.set(category, fallback);
  return fallback;
}

export default function sitemap() {
  const baseUrl = 'https://www.trivenicabs.in';
  // Derived from `git log` of content dirs; falls back to hardcoded date if git is unavailable.
  const lastContentUpdate = getLastContentUpdate();

  const urls = [
    // Main Pages
    {
      url: baseUrl,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: lastContentUpdate,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      // /trust — authority/credentials hub (E-E-A-T anchor for AI engines)
      url: `${baseUrl}/trust`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tour-guide`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/fare-calculator`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/long-weekend-calendar-2026`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/vehicles`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: lastContentUpdate,
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/wedding`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Comparison Pages - DECISION HELPER CONTENT
    {
      url: `${baseUrl}/sedan-vs-suv`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/tempo-vs-bus`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },

    // Tour Packages - HIGH PRIORITY CONTENT PAGES
    {
      url: `${baseUrl}/tour-package/manali-tour-from-mumbai`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tour-package/chardham-yatra-package`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tour-package/shimla-from-mumbai`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tour-package/rajasthan-tour`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tour-package/kashmir-tour`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tour-package/punjab-tour`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Booking Pages - CONVERSION PAGES
    {
      url: `${baseUrl}/tour-package/manali-tour-from-mumbai/book`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tour-package/chardham-yatra-package/book`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tour-package/shimla-from-mumbai/book`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tour-package/rajasthan-tour/book`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tour-package/kashmir-tour/book`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tour-package/punjab-tour/book`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },

    // Vehicle Categories - CONTENT PAGES
    {
      url: `${baseUrl}/vehicles/sedan`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/vehicles/suv`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/vehicles/tempo-traveller`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/vehicles/luxury-bus`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/vehicles/bus`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.85,
    },

    // Additional Service Pages
    {
      url: `${baseUrl}/tourist-spots`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/airport-service`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },

    // Religious Tours Main Page - HIGH PRIORITY CATEGORY PAGE
    {
      url: `${baseUrl}/religious-tours`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // Tempo Traveller Main Page - HIGH PRIORITY CATEGORY PAGE
    {
      url: `${baseUrl}/tempo-traveller`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },

    // Per-Seater Tempo Traveller Landing Pages (head-term keywords)
    ...['12', '16', '17', '20', '26'].map((s) => ({
      url: `${baseUrl}/${s}-seater-tempo-traveller`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.8,
    })),

    // ============= Week 42 — Vehicle-Type Hubs + Seater Pages (new design) =============
    // 3 type hubs + 6 new seater pages (Tempo seater pages already listed above).
    // Force Urbania + Maharaja Tempo Traveller are new vehicle lines; their seater
    // variants each target a distinct "N-seater <vehicle>" head term.
    ...['force-urbania', 'maharaja-tempo-traveller'].map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.85,
    })),
    ...['10-seater-force-urbania', '12-seater-force-urbania', '13-seater-force-urbania', '17-seater-force-urbania'].map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.8,
    })),
    ...['12-seater-maharaja-tempo-traveller', '17-seater-maharaja-tempo-traveller'].map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.8,
    })),

    // ============= Week 42 — Keyword-Gap Landing Pages (17 pages) =============
    // Near-me (one canonical per service — LocalBusiness schema), vehicle price/
    // per-km intent (Service + Offer schema), pilgrimage, comparison, hourly.
    // See docs/week-42-keyword-gaps.md for the gap rationale.
    ...[
      'cab-service-near-me', 'outstation-cabs-near-me', 'tempo-traveller-hire-near-me',
      'innova-on-rent-near-me', 'one-way-taxi-near-me', 'wedding-car-rental-near-me',
      'innova-crysta-rent-per-km', 'ertiga-cab-booking', 'force-urbania-rent-per-km',
      'force-urbania-rent-price', 'maharaja-tempo-traveller-price',
      'pilgrimage-cabs', 'char-dham-yatra-taxi-fare-from-haridwar',
      'char-dham-yatra-by-tempo-traveller', 'maharaja-tempo-traveller-vs-urbania',
      'self-drive-vs-driver-cab-delhi', '4hr-40km-local-cab',
      // Week 42 follow-on batch (vehicle price + comparison gaps)
      'sedan-cab-on-rent', 'luxury-car-rental-delhi-with-driver',
      'mini-bus-rental-delhi', 'force-urbania-vs-tempo-traveller',
    ].map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.85,
    })),

    // Policy Pages
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: lastContentUpdate,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: lastContentUpdate,
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/cancellation-and-refund-policy`,
      lastModified: lastContentUpdate,
      changeFrequency: 'yearly',
      priority: 0.4,
    },

    // Corporate Transportation Service Pages - HIGH PRIORITY B2B CONTENT
    {
      url: `${baseUrl}/corporate-transportation-service`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/corporate-cab-vs-aggregators`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/get-corporate-quote`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Event Transportation Service Pages - HIGH PRIORITY CONTENT
    {
      url: `${baseUrl}/event-transportation-service`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },

    // Blog Main Page - CATEGORY PAGE
    {
      url: `${baseUrl}/blog`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // Sightseeing Main Page - CATEGORY PAGE
    {
      url: `${baseUrl}/sightseeing`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.75,
    },

    // Routes Main Page - CATEGORY PAGE
    {
      url: `${baseUrl}/routes`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.75,
    },

    // Hub Pages - PHASE 1 HIGH PRIORITY
    { url: `${baseUrl}/outstation-cabs`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/local-taxi`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/one-way-cab`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/round-trip-cab`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/safety`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/reviews`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/search`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.5 },

    // Category Hub Pages (added Jun 29 2026 — fix bare-category 404s + head-term landing hubs)
    { url: `${baseUrl}/distance`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/toll-cost`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/cab-service`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/round-trip`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/taxi-fare`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/travel-by-car`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/travel-options`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/how-to-reach`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/best-time-to-visit`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/bus-vs-cab`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/train-taxi`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/packages`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/road-trip`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/tour-package`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.8 },

    // Phase 2: Same Day Agra Tours - HIGH PRIORITY CONTENT
    { url: `${baseUrl}/same-day-agra-tour-from-delhi`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/same-day-taj-mahal-tour`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/taj-mahal-tour-from-delhi`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/sunrise-taj-mahal-tour-from-delhi`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/moonlight-taj-mahal-tour`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/taj-mahal-private-tour-from-delhi`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/agra-day-trip-from-delhi`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 },
    // agra experience pages moved to dynamic sections below

    // Same Day Tours - 18 NEW DESTINATION TOURS
    { url: `${baseUrl}/same-day-agra-tour-from-jaipur`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/same-day-agra-tour-from-lucknow`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/same-day-agra-tour-from-noida`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/same-day-jaipur-tour-from-delhi`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/same-day-mathura-vrindavan-from-delhi`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/same-day-mathura-vrindavan-from-agra`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/same-day-haridwar-from-delhi`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/same-day-haridwar-rishikesh-from-delhi`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/same-day-shimla-from-chandigarh`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/same-day-kasauli-from-chandigarh`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/same-day-dharamshala-from-chandigarh`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/same-day-chail-from-chandigarh`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/same-day-amritsar-from-chandigarh`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/same-day-fatehpur-sikri-from-agra`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/same-day-gwalior-from-agra`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/same-day-bharatpur-from-agra`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/same-day-mussoorie-from-dehradun`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/same-day-jim-corbett-from-delhi`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/same-day-ayodhya-from-lucknow`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/same-day-kurukshetra-from-delhi`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/same-day-neemrana-from-delhi`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },

    // Phase 3: Religious/Pilgrimage Standalone Pages
    { url: `${baseUrl}/ayodhya-ram-mandir-tour-from-delhi`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/ayodhya-ram-mandir-tour-from-agra`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/ayodhya-ram-mandir-tour-from-lucknow`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/kanwar-yatra-cab-haridwar`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/prayagraj-sangam-tour`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },

    // Phase 4: Road Trip Pages - HIGH PRIORITY CONTENT
    { url: `${baseUrl}/10-day-north-india-road-trip`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/7-day-himachal-tour-by-car`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/kashmir-road-trip-from-delhi`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/spiti-valley-road-trip-from-delhi`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/rajasthan-desert-circuit-tour`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/uttarakhand-spiritual-circuit-tour`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/weekend-getaways-from-delhi-by-car`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/weekend-getaways-from-jaipur-by-car`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/weekend-getaways-from-chandigarh-by-car`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 },

    // Phase 6: International Tourist Pages - HIGH PRIORITY CONTENT
    { url: `${baseUrl}/private-driver-hire-india`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/golden-triangle-english-speaking-driver`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/golden-triangle-tour-from-chandigarh`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/safe-travel-india-for-tourists`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/india-road-trip-guide-for-tourists`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/delhi-airport-to-agra-taxi`, lastModified: lastContentUpdate, changeFrequency: 'weekly', priority: 0.9 },

    // Phase 8: Wedding Special Service Pages
    { url: `${baseUrl}/wedding/baraat-tempo-traveller`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/wedding/car-decoration-packages`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/wedding/doli-car-rental`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 },

    // Phase 10: Delhi Airport Terminal Pages
    { url: `${baseUrl}/airport-service/delhi/igi-terminal-1-domestic`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/airport-service/delhi/igi-terminal-2-domestic`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/airport-service/delhi/igi-terminal-3-international`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 },

    // Phase 10b: Jewar Airport Terminal Pages
    { url: `${baseUrl}/airport-service/jewar/jewar-terminal-1-international`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 },

    // Additional Tour Packages (Phase 14 - new)
    { url: `${baseUrl}/tour-package/golden-triangle-tour`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/tour-package/delhi-agra-weekend-tour`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/tour-package/uttarakhand-spiritual-tour`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/tour-package/himachal-adventure-tour`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/tour-package/varanasi-ayodhya-spiritual`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/tour-package/leh-ladakh-road-trip`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/tour-package/amritsar-dharamshala-dalhousie`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/tour-package/spiti-valley-expedition`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.9 },
  ];

  // Add Wedding Car Model Pages (Dynamic) - HIGH PRIORITY CONTENT
  const weddingCarSlugs = getAllWeddingCarModelSlugs();
  weddingCarSlugs.forEach(slug => {
    urls.push({
      url: `${baseUrl}/wedding/cars/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.85,
    });
  });

  // Add Sightseeing City Hub Pages (Dynamic) - HIGH PRIORITY CONTENT
  const sightseeingCities = getCitiesWithTours();
  sightseeingCities.forEach(city => {
    urls.push({
      url: `${baseUrl}/sightseeing/${city}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.85,
    });
  });

  // Add Blog Posts (Dynamic) - CONTENT PAGES
  blogPosts
    .filter(post => post && post.slug && post.date) // Filter out undefined or invalid posts
    .forEach(post => {
      urls.push({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.date ? new Date(post.date) : lastContentUpdate,
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });

  // Add Sightseeing Tour Detail Pages (Dynamic) - HIGH PRIORITY CONTENT
  const allSightseeingTours = getAllTours();
  allSightseeingTours.forEach(tour => {
    urls.push({
      url: `${baseUrl}/sightseeing/${tour.slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  });

  // Add Religious Tour Detail Pages (Dynamic) - HIGHEST PRIORITY PILGRIMAGE CONTENT
  const religiousTourSlugs = getAllTourSlugs();
  religiousTourSlugs.forEach(slug => {
    urls.push({
      url: `${baseUrl}/religious-tours/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.95,
    });
  });

  // Add Wedding City Pages - HIGH PRIORITY CONTENT
  const weddingCitySlugs = getAllWeddingCitySlugs();
  weddingCitySlugs.forEach(citySlug => {
    urls.push({
      url: `${baseUrl}/wedding/${citySlug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  });

  // Add Chardham Yatra Routes - HIGHEST PRIORITY PILGRIMAGE CONTENT
  chardhamRoutes.forEach(route => {
    urls.push({
      url: `${baseUrl}/tempo-traveller/${route.slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.95,
    });
  });

  // Add ALL Tempo Traveller Routes (60+ routes) - HIGH PRIORITY CONTENT PAGES
  Object.keys(tempoRoutes).forEach(originCity => {
    const routes = tempoRoutes[originCity];
    routes.forEach(route => {
      const routeSlug = createTempoRouteSlug(originCity, route.name);
      urls.push({
        url: `${baseUrl}/tempo-traveller/${routeSlug}`,
        lastModified: lastContentUpdate,
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });
  });

  // Add Force Urbania + Maharaja Tempo Traveller city + route pages.
  // Same geography as tempo (shared tempoCities / tempoRoutes datasets); one
  // canonical city page per (vehicle × city) + all origin→destination routes,
  // generated by the vehicleCityRoutePage factory. Mirrors the tempo block above.
  const NEW_VEHICLE_SLUGS = ['force-urbania', 'maharaja-tempo-traveller'];
  NEW_VEHICLE_SLUGS.forEach((vSlug) => {
    // City pages — one per served city.
    Object.values(tempoCities).forEach((c) => {
      urls.push({
        url: `${baseUrl}/${vSlug}/${c.slug}`,
        lastModified: lastContentUpdate,
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });
    // Origin→destination route pages.
    Object.keys(tempoRoutes).forEach((originCity) => {
      tempoRoutes[originCity].forEach((route) => {
        urls.push({
          url: `${baseUrl}/${vSlug}/${createTempoRouteSlug(originCity, route.name)}`,
          lastModified: lastContentUpdate,
          changeFrequency: 'weekly',
          priority: 0.75,
        });
      });
    });
  });

  // Add Bus Routes Main Page - CATEGORY PAGE
  urls.push({
    url: `${baseUrl}/bus-routes`,
    lastModified: lastContentUpdate,
    changeFrequency: 'weekly',
    priority: 0.75,
  });

  // Add ALL Bus Routes (100+ routes) - HIGH PRIORITY CONTENT PAGES
  Object.keys(busRoutes).forEach(originCity => {
    const routes = busRoutes[originCity];
    routes.forEach(route => {
      const routeSlug = `${originCity.toLowerCase().replace(/\s+/g, '-')}-to-${route.name.toLowerCase().replace(/\s+/g, '-')}`;
      urls.push({
        url: `${baseUrl}/bus-routes/${routeSlug}`,
        lastModified: lastContentUpdate,
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });
  });

  // Add Tourist Attractions by City - CONTENT PAGES
  const touristAttractionCities = [
    'delhi', 'agra', 'jaipur', 'udaipur', 'haridwar', 'rishikesh',
    'shimla', 'manali', 'amritsar', 'lucknow', 'varanasi', 'jodhpur',
    'ayodhya', 'ahmedabad'
  ];

  touristAttractionCities.forEach(city => {
    urls.push({
      url: `${baseUrl}/tourist-attractions/${city}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.85,
    });
  });

  // Add Airport Service City Pages - HIGH PRIORITY CONTENT
  const airportCitySlugs = getAllCitySlugs();
  airportCitySlugs.forEach(citySlug => {
    urls.push({
      url: `${baseUrl}/airport-service/${citySlug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  });

  // Add ALL city pages - HIGH PRIORITY CONTENT PAGES
  cities.forEach(city => {
    if (!city || !city.name) return;

    const cityName = city.name.toLowerCase();
    urls.push({
      url: `${baseUrl}/${cityName}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.85,
    });
  });

  // Add ALL city-to-city route pages - HIGH PRIORITY CONVERSION PAGES
  cities.forEach(city => {
    if (!city || !city.name) return;

    const cityName = city.name;
    const formattedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);

    const routes = allCityRoutes[formattedCityName] || [];

    if (Array.isArray(routes) && routes.length > 0) {
      routes.forEach(route => {
        if (route && route.destination) {
          const routeSlug = createRouteSlug(cityName, route.destination);
          urls.push({
            url: `${baseUrl}/${routeSlug}`,
            lastModified: lastContentUpdate,
            changeFrequency: 'weekly',
            priority: 0.8,
          });
        }
      });
    }
  });

  // Add Corporate Transportation City Pages - B2B CONTENT
  corporateCitySlugs.forEach(citySlug => {
    urls.push({
      url: `${baseUrl}/corporate-transportation-service/${citySlug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Add Corporate Transportation Industry Pages - B2B CONTENT
  corporateIndustrySlugs.forEach(industrySlug => {
    urls.push({
      url: `${baseUrl}/corporate-transportation-service/industry/${industrySlug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Add Corporate Transportation Use Case Pages - B2B CONTENT
  corporateUseCaseSlugs.forEach(useCaseSlug => {
    urls.push({
      url: `${baseUrl}/corporate-transportation-service/use-case/${useCaseSlug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Corporate City × (Industry + Use-case) combo pages (126 long-tail B2B pages)
  corporateCitySlugs.forEach(citySlug => {
    [...corporateIndustrySlugs, ...corporateUseCaseSlugs].forEach(subSlug => {
      urls.push({
        url: `${baseUrl}/corporate-transportation-service/${citySlug}/${subSlug}`,
        lastModified: lastContentUpdate,
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    });
  });

  // Add Event Transportation Type Pages - HIGH PRIORITY CONTENT
  eventTypeSlugs.forEach(eventSlug => {
    urls.push({
      url: `${baseUrl}/event-transportation-service/${eventSlug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.85,
    });
  });

  // Add Event Transportation City Pages - HIGH PRIORITY CONTENT
  eventCitySlugs.forEach(citySlug => {
    urls.push({
      url: `${baseUrl}/event-transportation-service/city/${citySlug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.85,
    });
  });

  // Add Event Type × City combo pages (long-tail "{event} in {city}")
  eventTypeSlugs.forEach(eventSlug => {
    eventCitySlugs.forEach(citySlug => {
      urls.push({
        url: `${baseUrl}/event-transportation-service/${eventSlug}/${citySlug}`,
        lastModified: lastContentUpdate,
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    });
  });

  // Add Vehicle-for-Event landing pages
  ['luxury-bus-for-events', 'tempo-traveller-for-events', 'luxury-car-for-events'].forEach(vSlug => {
    urls.push({
      url: `${baseUrl}/${vSlug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Add One-Way Cab Route Pages - HIGH PRIORITY CONVERSION PAGES
  const oneWayRouteSlugs = getAllOneWayRouteSlugs();
  oneWayRouteSlugs.forEach(slug => {
    urls.push({
      url: `${baseUrl}/one-way-cab/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.85,
    });
  });

  // Add City Itinerary Pages - HIGH PRIORITY CONTENT
  const itinerarySlugs = getAllItinerarySlugs();
  itinerarySlugs.forEach(slug => {
    urls.push({
      url: `${baseUrl}/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.85,
    });
  });

  // Add Places to Visit Near [City] Pages - HIGH PRIORITY CONTENT
  const placesToVisitCities = ['delhi', 'agra', 'jaipur', 'chandigarh', 'lucknow', 'varanasi', 'dehradun', 'amritsar', 'noida', 'gurgaon', 'haridwar', 'shimla', 'udaipur', 'mathura', 'rishikesh', 'ghaziabad'];
  placesToVisitCities.forEach(city => {
    urls.push({
      url: `${baseUrl}/places-to-visit-near-${city}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.85,
    });
  });

  // Railway Station Taxi Hub + Dynamic Pages
  urls.push({ url: `${baseUrl}/railway-station-taxi`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 });

  // Static Railway Station Taxi Pages
  const stationTaxiSlugs = [
    'agra-cantt-station-taxi', 'new-delhi-station-taxi', 'delhi-junction-old-delhi-taxi',
    'hazrat-nizamuddin-station-taxi', 'jaipur-junction-station-taxi', 'agra-fort-station-taxi',
    'mathura-junction-station-taxi', 'ajmer-junction-station-taxi',
  ];
  stationTaxiSlugs.forEach(slug => {
    urls.push({ url: `${baseUrl}/${slug}`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 });
  });

  // Bus Stand Taxi Hub + Dynamic Pages
  urls.push({ url: `${baseUrl}/bus-stand-taxi`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 });

  // Airport-to-Outstation Taxi Pages
  const airportOutstationSlugs = [
    'delhi-airport-to-jaipur-taxi', 'delhi-airport-to-haridwar-taxi', 'delhi-airport-to-shimla-taxi',
    'delhi-airport-to-manali-taxi', 'delhi-airport-to-chandigarh-taxi', 'delhi-airport-to-dehradun-taxi',
    'delhi-airport-to-rishikesh-taxi', 'delhi-airport-to-mathura-taxi', 'delhi-airport-to-noida-cab',
    'delhi-airport-to-gurgaon-cab', 'delhi-airport-to-amritsar-taxi', 'delhi-airport-to-lucknow-taxi',
    'jaipur-airport-to-udaipur-taxi', 'jaipur-airport-to-pushkar-taxi', 'jaipur-airport-to-agra-taxi',
    'chandigarh-airport-to-shimla-taxi', 'chandigarh-airport-to-manali-taxi',
    'chandigarh-airport-to-kasauli-taxi', 'chandigarh-airport-to-dharamshala-taxi', 'chandigarh-airport-to-dalhousie-taxi', 'chandigarh-airport-to-amritsar-taxi',
    'dehradun-airport-to-mussoorie-taxi', 'dehradun-airport-to-haridwar-taxi', 'dehradun-airport-to-rishikesh-taxi',
    'amritsar-airport-to-city-taxi', 'srinagar-airport-to-gulmarg-taxi', 'srinagar-airport-to-pahalgam-taxi',
    'udaipur-airport-to-city-taxi', 'jaipur-airport-to-city-taxi',
  ];
  airportOutstationSlugs.forEach(slug => {
    urls.push({ url: `${baseUrl}/${slug}`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 });
  });

  // Trip Cost Pages
  const tripCostSlugs = [
    'agra-trip-cost-from-delhi', 'jaipur-trip-cost-from-delhi', 'shimla-trip-cost-from-delhi',
    'manali-trip-cost-from-delhi', 'kashmir-trip-cost-from-delhi', 'varanasi-trip-cost-from-delhi',
    'rishikesh-trip-cost-from-delhi', 'udaipur-trip-cost-from-delhi', 'golden-triangle-tour-cost',
    'honeymoon-trip-cost-shimla-manali', 'rajasthan-trip-cost-budget', 'chardham-yatra-cost-by-car',
  ];
  tripCostSlugs.forEach(slug => {
    urls.push({ url: `${baseUrl}/${slug}`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 });
  });

  // Destination Comparison Pages
  const comparisonSlugs = [
    'shimla-vs-manali', 'mussoorie-vs-nainital', 'rishikesh-vs-manali', 'jaipur-vs-udaipur',
    'kashmir-vs-ladakh', 'varanasi-vs-haridwar', 'gulmarg-vs-manali', 'dharamshala-vs-dalhousie',
    'jaisalmer-vs-jodhpur', 'nainital-vs-jim-corbett',
  ];
  comparisonSlugs.forEach(slug => {
    urls.push({ url: `${baseUrl}/${slug}`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 });
  });

  // Family Trip Pages
  const familyTripSlugs = [
    'family-trip-shimla-from-delhi', 'family-trip-manali-from-delhi', 'family-trip-mussoorie-from-delhi',
    'family-trip-nainital-from-delhi', 'family-trip-jaipur-from-delhi', 'family-trip-agra-from-delhi',
    'family-trip-kashmir-from-delhi', 'family-trip-rishikesh-from-delhi', 'family-trip-udaipur-from-delhi',
    'family-trip-jim-corbett-from-delhi', 'family-trip-auli-from-delhi', 'family-trip-chopta-from-delhi',
  ];
  familyTripSlugs.forEach(slug => {
    urls.push({ url: `${baseUrl}/${slug}`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 });
  });

  // Honeymoon Trip Pages
  const honeymoonSlugs = [
    'honeymoon-trip-by-car', 'honeymoon-shimla-manali-by-car', 'honeymoon-manali-by-car',
    'honeymoon-kashmir-by-car', 'honeymoon-mussoorie-by-car', 'honeymoon-nainital-by-car',
    'honeymoon-udaipur-by-car', 'honeymoon-jaipur-udaipur', 'honeymoon-dharamshala',
  ];
  honeymoonSlugs.forEach(slug => {
    urls.push({ url: `${baseUrl}/${slug}`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 });
  });

  // Friends Trip Pages
  const friendsTripSlugs = [
    'friends-trip-rishikesh', 'friends-trip-manali', 'friends-trip-kasol',
    'friends-trip-jaisalmer', 'friends-trip-goa-from-delhi',
    'friends-trip-spiti', 'friends-trip-tirthan-valley', 'friends-trip-jibhi',
  ];
  friendsTripSlugs.forEach(slug => {
    urls.push({ url: `${baseUrl}/${slug}`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 });
  });

  // Romantic Trip Page
  urls.push({ url: `${baseUrl}/romantic-trip-agra-taj-mahal`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 });
  urls.push({ url: `${baseUrl}/bachelor-trip-north-india`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 });

  // Festival Pages — evergreen festivals (year-round relevance), monthly cadence.
  const festivalSlugs = [
    'holi-mathura-vrindavan-cab-service', 'diwali-ayodhya-transport', 'kumbh-mela-prayagraj-transport',
    'navratri-vaishno-devi-cab', 'pushkar-mela-transport', 'chhath-puja-varanasi-transport',
    'maha-shivratri-pilgrimage-cab', 'baisakhi-amritsar-cab', 'christmas-shimla-manali-package',
    'new-year-road-trip-packages', 'summer-hill-station-packages', 'winter-snow-trip-packages',
  ];
  festivalSlugs.forEach(slug => {
    urls.push({ url: `${baseUrl}/${slug}`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 });
  });

  // ── August/September 2026 in-window season pages (15) ──
  // Split out of the evergreen festival block: while the Aug–Oct window is
  // live these get higher priority (0.9) + weekly changeFrequency + honest
  // per-page lastmod (git log of each seasonal route dir) — signals freshness
  // for the active demand surge. After the window these can drop back to 0.85.
  const seasonalLastmod = getCategoryLastmod('seasonal', lastContentUpdate);
  const seasonSlugs = [
    'janmashtami-mathura-vrindavan-cab', 'raksha-bandhan-cab-service',
    'independence-day-weekend-packages-2026', 'ganesh-chaturthi-transport',
    'hariyali-teej-jaipur-cab', 'monsoon-road-trip-packages',
    'monsoon-hill-station-packages', 'valley-of-flowers-trek-from-delhi',
    'spiti-valley-august-trip', 'kashmir-in-september',
    'leh-ladakh-august-september-trip', 'chardham-yatra-september-2026',
    'kedarnath-september-trip', 'august-long-weekend-getaways-delhi',
    'september-long-weekend-trips-2026',
  ];
  seasonSlugs.forEach(slug => {
    urls.push({ url: `${baseUrl}/${slug}`, lastModified: seasonalLastmod, changeFrequency: 'weekly', priority: 0.9 });
  });

  // Rental Package Pages
  const rentalSlugs = [
    'full-day-cab-rental', 'half-day-cab-rental', 'multi-day-cab-hire', 'monthly-car-rental',
    'airport-city-tour-combo',
  ];
  rentalSlugs.forEach(slug => {
    urls.push({ url: `${baseUrl}/${slug}`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 });
  });

  // Special Transport Pages
  const specialTransportSlugs = [
    'school-trip-bus-rental', 'college-excursion-bus-hire', 'senior-citizen-travel-service',
    'women-safety-cab-service', 'hospital-visit-cab-service', 'pet-friendly-cab-service',
    'wheelchair-accessible-cab',
  ];
  specialTransportSlugs.forEach(slug => {
    urls.push({ url: `${baseUrl}/${slug}`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 });
  });

  // Food Tour Pages
  const foodTourSlugs = [
    'agra-food-tour', 'jaipur-food-tour', 'varanasi-food-tour', 'lucknow-food-tour',
    'amritsar-food-tour', 'delhi-food-tour', 'jodhpur-food-tour', 'udaipur-food-tour',
    'mathura-food-tour', 'haridwar-food-tour', 'pushkar-food-tour',
  ];
  foodTourSlugs.forEach(slug => {
    urls.push({ url: `${baseUrl}/${slug}`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 });
  });

  // Shopping Guide Pages
  const shoppingGuideSlugs = [
    'agra-shopping-guide', 'jaipur-shopping-guide', 'varanasi-shopping-guide', 'lucknow-shopping-guide',
    'udaipur-shopping-guide', 'amritsar-shopping-guide', 'jodhpur-shopping-guide', 'delhi-shopping-guide',
    'shimla-shopping-guide', 'jaisalmer-shopping-guide',
  ];
  shoppingGuideSlugs.forEach(slug => {
    urls.push({ url: `${baseUrl}/${slug}`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 });
  });

  // Travel Guide Pages
  const travelGuideSlugs = [
    'agra-travel-guide', 'jaipur-travel-guide', 'varanasi-travel-guide', 'udaipur-travel-guide',
    'shimla-travel-guide', 'manali-travel-guide', 'lucknow-travel-guide', 'amritsar-travel-guide',
    'rishikesh-travel-guide', 'haridwar-travel-guide', 'kashmir-travel-guide', 'jaisalmer-travel-guide',
    'jodhpur-travel-guide', 'mathura-vrindavan-travel-guide', 'dharamshala-travel-guide',
    'mussoorie-travel-guide', 'nainital-travel-guide',
    // Week 39 guide expansion
    'ayodhya-travel-guide', 'pushkar-travel-guide', 'ajmer-travel-guide',
    'dehradun-travel-guide', 'mount-abu-travel-guide', 'dalhousie-travel-guide',
  ];
  travelGuideSlugs.forEach(slug => {
    urls.push({ url: `${baseUrl}/${slug}`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 });
  });

  // Beyond [Landmark] Pages
  const beyondSlugs = [
    'agra-beyond-taj-mahal', 'jaipur-beyond-hawa-mahal', 'varanasi-beyond-the-ghats',
    'udaipur-beyond-city-palace', 'amritsar-beyond-golden-temple', 'shimla-beyond-mall-road',
    'manali-beyond-solang-valley', 'rishikesh-beyond-rafting', 'lucknow-beyond-bara-imambara',
    'delhi-beyond-red-fort', 'jodhpur-beyond-mehrangarh',
  ];
  beyondSlugs.forEach(slug => {
    urls.push({ url: `${baseUrl}/${slug}`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 });
  });

  // Char Dham Yatra by Car/SUV/Bus Pages - HIGHEST PRIORITY PILGRIMAGE CONTENT (36 pages)
  urls.push({
    url: `${baseUrl}/chardham-yatra`,
    lastModified: lastContentUpdate,
    changeFrequency: 'weekly',
    priority: 0.95,
  });
  const chardhamYatraSlugs = getAllChardhamYatraSlugs();
  chardhamYatraSlugs.forEach(slug => {
    urls.push({
      url: `${baseUrl}/chardham-yatra/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'weekly',
      priority: 0.95,
    });
  });

  // Mathura/Ayodhya Day Package Pages
  urls.push({ url: `${baseUrl}/mathura-vrindavan-1-day-package`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 });
  urls.push({ url: `${baseUrl}/ayodhya-1-day-package`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 });

  // How to Reach [City] Pages - HIGH PRIORITY SEO CONTENT (20 destination pages)
  const howToReachCities = [
    'delhi', 'agra', 'jaipur', 'shimla', 'manali', 'haridwar', 'rishikesh',
    'varanasi', 'udaipur', 'amritsar', 'chandigarh', 'dehradun', 'mussoorie',
    'nainital', 'jodhpur', 'jaisalmer', 'dharamshala', 'kasol', 'ayodhya', 'lucknow',
  ];
  howToReachCities.forEach(city => {
    urls.push({
      url: `${baseUrl}/how-to-reach-${city}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.85,
    });
  });

  // New Trip Cost Pages (15 additional destinations)
  const newTripCostSlugs = [
    'amritsar-trip-cost-from-delhi', 'dharamshala-trip-cost-from-delhi',
    'mussoorie-trip-cost-from-delhi', 'nainital-trip-cost-from-delhi',
    'jodhpur-trip-cost-from-delhi', 'jaisalmer-trip-cost-from-delhi',
    'ayodhya-trip-cost-from-delhi', 'leh-ladakh-trip-cost-from-delhi',
    'jim-corbett-trip-cost-from-delhi', 'kasol-trip-cost-from-delhi',
    'dehradun-trip-cost-from-delhi', 'pushkar-trip-cost-from-delhi',
    'haridwar-trip-cost-from-delhi', 'lucknow-trip-cost-from-delhi',
    'chandigarh-trip-cost-from-delhi',
  ];
  newTripCostSlugs.forEach(slug => {
    urls.push({
      url: `${baseUrl}/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.85,
    });
  });

  // Vehicle Comparison Pages - HIGH INTENT DECISION CONTENT (8 pages)
  const vehicleComparisonSlugs = [
    'innova-vs-ertiga-for-outstation', 'tempo-traveller-vs-mini-bus',
    'sedan-vs-suv-for-hill-stations', 'fortuner-vs-innova-crysta',
    '12-seater-vs-17-seater-tempo', 'bus-vs-tempo-for-wedding',
    'one-way-vs-round-trip-cab', 'self-drive-vs-chauffeur',
  ];
  vehicleComparisonSlugs.forEach(slug => {
    urls.push({
      url: `${baseUrl}/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Distance & Travel Guide Pages (100+ routes)
  getAllDistanceRouteSlugs().forEach((slug) => {
    urls.push({
      url: `${baseUrl}/distance/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Local Taxi City Pages (23 cities)
  getAllLocalTaxiSlugs().forEach((slug) => {
    urls.push({
      url: `${baseUrl}/local-taxi/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  });

  // Outstation Cab City Hubs (15 cities)
  getAllOutstationCitySlugs().forEach((slug) => {
    urls.push({
      url: `${baseUrl}/outstation-cabs/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  });

  // How-to-Reach Origin-Specific Pages (30 routes) - /how-to-reach/{route}
  getAllHowToReachSlugs().forEach((slug) => {
    urls.push({
      url: `${baseUrl}/how-to-reach/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // How-to-Reach City Pages (20 cities) - /how-to-reach-{city}
  getAllHowToReachCities().forEach((city) => {
    urls.push({
      url: `${baseUrl}/how-to-reach-${city}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Best Time to Visit Pages (25 destinations)
  getAllBestTimeSlugs().forEach((slug) => {
    urls.push({
      url: `${baseUrl}/best-time-to-visit/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  // Round Trip Route Pages (25 routes)
  getAllRoundTripSlugs().forEach((slug) => {
    urls.push({
      url: `${baseUrl}/round-trip/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Travel-by-Car Guides (40 routes)
  getAllTravelByCarSlugs().forEach((slug) => {
    urls.push({
      url: `${baseUrl}/travel-by-car/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Toll Cost Pages (25 routes)
  getAllTollCostSlugs().forEach((slug) => {
    urls.push({
      url: `${baseUrl}/toll-cost/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  // City Cab Fare Pages (18 cities)
  getAllTaxiFareSlugs().forEach((slug) => {
    urls.push({
      url: `${baseUrl}/taxi-fare/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Bus vs Cab Comparisons (20 routes)
  getAllBusVsCabSlugs().forEach((slug) => {
    urls.push({
      url: `${baseUrl}/bus-vs-cab/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  // Vehicle-Specific Route Pages (30 routes across 6 vehicle types)
  const vehicleRoutes = getAllVehicleRouteEntries();
  vehicleRoutes.forEach(({ vehicleSlug, routeSlug }) => {
    const vehiclePrefix = vehicleSlug === 'innova-crysta' ? 'innova-crysta-hire' : vehicleSlug === 'traveller-12-seater' ? 'traveller-12-seater' : `${vehicleSlug}-hire`;
    urls.push({
      url: `${baseUrl}/${vehiclePrefix}/${routeSlug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  // Road Trip Circuit Guides (9 circuits)
  getAllRoadTripSlugs().forEach((slug) => {
    urls.push({
      url: `${baseUrl}/road-trip/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  // Cab Service City Hubs (15 cities)
  getAllCabServiceSlugs().forEach((slug) => {
    urls.push({
      url: `${baseUrl}/cab-service/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  });

  // Hotel+Cab Package Pages (15 packages)
  getAllPackageSlugs().forEach((slug) => {
    urls.push({
      url: `${baseUrl}/packages/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Multi-Modal Travel Options (20 routes)
  getAllTravelOptionsSlugs().forEach((slug) => {
    urls.push({
      url: `${baseUrl}/travel-options/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  // Train+Taxi Combo Pages (15 routes)
  getAllTrainTaxiSlugs().forEach((slug) => {
    urls.push({
      url: `${baseUrl}/train-taxi/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  // Monthly Travel Calendar (12 months)
  getAllMonthSlugs().forEach((slug) => {
    urls.push({
      url: `${baseUrl}/where-to-go/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  // ============= Tours With Guide Section (3 hubs + 80 production pages) =============
  const toursWithGuideLastmod = getCategoryLastmod('tours-with-guide', lastContentUpdate);

  // H1 — Main hub
  urls.push({
    url: `${baseUrl}/tours-with-guide`,
    lastModified: toursWithGuideLastmod,
    changeFrequency: 'weekly',
    priority: 0.9,
  });
  // H2 — by guide language
  urls.push({
    url: `${baseUrl}/tours-with-guide/by-guide-language`,
    lastModified: toursWithGuideLastmod,
    changeFrequency: 'weekly',
    priority: 0.8,
  });
  // H3 — by vehicle
  urls.push({
    url: `${baseUrl}/tours-with-guide/by-vehicle`,
    lastModified: toursWithGuideLastmod,
    changeFrequency: 'weekly',
    priority: 0.8,
  });

  // Group A — vehicle + itinerary (40 pages, priority 0.85)
  // Groups B + C — language + per-tour×language (10 + 30 pages, priority 0.8)
  const twgAllSlugs = getAllToursWithGuideSlugs();
  const twgGroupA = new Set(getToursWithGuideByGroup('A').map(t => t.slug));
  twgAllSlugs.forEach(slug => {
    urls.push({
      url: `${baseUrl}/tours-with-guide/${slug}`,
      lastModified: toursWithGuideLastmod,
      changeFrequency: 'weekly',
      priority: twgGroupA.has(slug) ? 0.85 : 0.8,
    });
  });

  // Airport-to-City Taxi Pages (origin city + destination, individual page.js routes)
  const airportToCityRoutes = [
    'delhi-airport-to-aligarh-taxi', 'delhi-airport-to-bareilly-taxi',
    'delhi-airport-to-faridabad-cab', 'delhi-airport-to-ghaziabad-cab',
    'delhi-airport-to-karnal-taxi', 'delhi-airport-to-meerut-taxi',
    'delhi-airport-to-panipat-taxi', 'delhi-airport-to-sonipat-taxi',
    'jaipur-airport-to-ajmer-taxi', 'jaipur-airport-to-jaisalmer-taxi',
    'jaipur-airport-to-jodhpur-taxi', 'jaipur-airport-to-ranthambore-taxi',
    'lucknow-airport-to-ayodhya-taxi', 'lucknow-airport-to-varanasi-taxi',
    'varanasi-airport-to-ayodhya-taxi', 'varanasi-airport-to-sarnath-taxi',
  ];
  airportToCityRoutes.forEach(slug => {
    urls.push({
      url: `${baseUrl}/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.85,
    });
  });

  // Triveni Cabs vs Competitor Comparison Pages
  const competitorComparisonSlugs = [
    'triveni-cabs-vs-ola', 'triveni-cabs-vs-uber', 'triveni-cabs-vs-savaari',
    'triveni-cabs-vs-makemytrip-cabs', 'triveni-cabs-vs-cabbazar',
  ];
  competitorComparisonSlugs.forEach(slug => {
    urls.push({
      url: `${baseUrl}/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Brand Trust / About Triveni Cabs Pages
  const brandPages = [
    'why-triveni-cabs', 'triveni-cabs-driver-verification', 'triveni-cabs-fleet',
    'triveni-cabs-pricing-transparency', 'triveni-cabs-safety-features',
  ];
  brandPages.forEach(slug => {
    urls.push({
      url: `${baseUrl}/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.85,
    });
  });

  // Festival / Seasonal Cab Service Pages
  const seasonalPages = [
    'guru-purab-amritsar-transport', 'durga-puja-travel-transport',
    'republic-day-delhi-cab', 'long-weekend-getaway-packages-2026',
    'summer-vacation-cab-packages-2026', 'christmas-new-year-cab-packages',
  ];
  seasonalPages.forEach(slug => {
    urls.push({
      url: `${baseUrl}/${slug}`,
      lastModified: lastContentUpdate,
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  // Deduplicate by URL. tempoRoutes carries some duplicate destination entries
  // per origin city, which produced duplicate <url> nodes (566 vs 546 unique).
  // First occurrence wins — and because the chardham block (priority 0.95) runs
  // before the tempo route block (0.8), any chardham slug that also appears as a
  // generic tempo route keeps its higher priority.
  const seen = new Set();
  const deduped = [];
  for (const u of urls) {
    if (!seen.has(u.url)) { seen.add(u.url); deduped.push(u); }
  }
  return deduped;
}