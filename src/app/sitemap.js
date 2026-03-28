// src/app/sitemap.js - Complete sitemap with all routes

import { cities } from "@/utilis/data";
import { cityRoutesData, basicCityRoutes } from "@/utilis/cityRoutesData";
import { getAllTourSlugs } from "@/utilis/religiousTourData";
import { tempoRoutes } from "@/utilis/tempoTravellerData";
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

export default function sitemap() {
  const baseUrl = 'https://www.trivenicabs.in';
  // Use a fixed date instead of new Date() — prevents Google from ignoring lastmod signals
  // Update this date manually when content is actually modified
  const lastContentUpdate = new Date('2026-03-15');

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
  const placesToVisitCities = ['delhi', 'agra', 'jaipur', 'chandigarh', 'lucknow', 'varanasi', 'dehradun', 'amritsar', 'noida', 'gurgaon', 'haridwar', 'shimla', 'udaipur', 'mathura', 'rishikesh'];
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
    'dehradun-airport-to-mussoorie-taxi', 'dehradun-airport-to-haridwar-taxi', 'dehradun-airport-to-rishikesh-taxi',
    'amritsar-airport-to-city-taxi', 'srinagar-airport-to-gulmarg-taxi', 'srinagar-airport-to-pahalgam-taxi',
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
    'family-trip-jim-corbett-from-delhi',
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
  ];
  friendsTripSlugs.forEach(slug => {
    urls.push({ url: `${baseUrl}/${slug}`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 });
  });

  // Romantic Trip Page
  urls.push({ url: `${baseUrl}/romantic-trip-agra-taj-mahal`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 });
  urls.push({ url: `${baseUrl}/bachelor-trip-north-india`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 });

  // Festival Pages
  const festivalSlugs = [
    'holi-mathura-vrindavan-cab-service', 'diwali-ayodhya-transport', 'kumbh-mela-prayagraj-transport',
    'navratri-vaishno-devi-cab', 'pushkar-mela-transport', 'chhath-puja-varanasi-transport',
    'maha-shivratri-pilgrimage-cab', 'baisakhi-amritsar-cab', 'christmas-shimla-manali-package',
    'new-year-road-trip-packages', 'summer-hill-station-packages', 'winter-snow-trip-packages',
  ];
  festivalSlugs.forEach(slug => {
    urls.push({ url: `${baseUrl}/${slug}`, lastModified: lastContentUpdate, changeFrequency: 'monthly', priority: 0.85 });
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

  // How-to-Reach Origin-Specific Pages (30 routes)
  getAllHowToReachSlugs().forEach((slug) => {
    urls.push({
      url: `${baseUrl}/how-to-reach/${slug}`,
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

  return urls;
}