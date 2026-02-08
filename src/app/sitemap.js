// src/app/sitemap.js - Complete sitemap with all routes

import { cities } from "@/utilis/data";
import { cityRoutesData, basicCityRoutes } from "@/utilis/cityRoutesData";
import { getAllTourSlugs } from "@/utilis/religiousTourData";
import { tempoRoutes } from "@/utilis/tempoTravellerData";
import { chardhamRoutes } from "@/utilis/chardhamData";
import { blogPosts } from "@/utilis/blog";
import { busRoutes } from "@/utilis/busRoutesData";
import { getAllTours } from "@/utilis/sightseeingData";
import { getAllCitySlugs } from "@/utilis/airportCityData";
import { getAllWeddingCitySlugs } from "@/utilis/weddingCityData";
import { getAllWeddingCarModelSlugs } from "@/utilis/weddingCarModels";
import { getCitiesWithTours } from "@/utilis/sightseeingData";

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
  
  const urls = [
    // Main Pages
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tour-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pricing`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vehicles`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/wedding`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },

    // Comparison Pages - DECISION HELPER CONTENT
    {
      url: `${baseUrl}/sedan-vs-suv`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/tempo-vs-bus`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },

    // Tour Packages - HIGH PRIORITY CONTENT PAGES
    {
      url: `${baseUrl}/tour-package/manali-tour-from-mumbai`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tour-package/chardham-yatra-package`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tour-package/shimla-from-mumbai`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tour-package/rajasthan-tour`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tour-package/kashmir-tour`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tour-package/punjab-tour`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Booking Pages - CONVERSION PAGES
    {
      url: `${baseUrl}/tour-package/manali-tour-from-mumbai/book`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tour-package/chardham-yatra-package/book`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tour-package/shimla-from-mumbai/book`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tour-package/rajasthan-tour/book`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tour-package/kashmir-tour/book`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tour-package/punjab-tour/book`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },

    // Vehicle Categories - CONTENT PAGES
    {
      url: `${baseUrl}/vehicles/sedan`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/vehicles/suv`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/vehicles/tempo-traveller`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/vehicles/luxury-bus`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/vehicles/bus`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    },

    // Additional Service Pages
    {
      url: `${baseUrl}/tourist-spots`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/airport-service`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },

    // Religious Tours Main Page - HIGH PRIORITY CATEGORY PAGE
    {
      url: `${baseUrl}/religious-tours`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // Tempo Traveller Main Page - HIGH PRIORITY CATEGORY PAGE
    {
      url: `${baseUrl}/tempo-traveller`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },

    // Policy Pages
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/cancellation-and-refund-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.4,
    },

    // Corporate Transportation Service Pages - HIGH PRIORITY B2B CONTENT
    {
      url: `${baseUrl}/corporate-transportation-service`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/corporate-cab-vs-aggregators`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.75,
    },
    {
      url: `${baseUrl}/get-corporate-quote`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Event Transportation Service Pages - HIGH PRIORITY CONTENT
    {
      url: `${baseUrl}/event-transportation-service`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },

    // Blog Main Page - CATEGORY PAGE
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },

    // Sightseeing Main Page - CATEGORY PAGE
    {
      url: `${baseUrl}/sightseeing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },

    // Routes Main Page - CATEGORY PAGE
    {
      url: `${baseUrl}/routes`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.75,
    },

    // Hub Pages - PHASE 1 HIGH PRIORITY
    { url: `${baseUrl}/outstation-cabs`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/local-taxi`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/one-way-cab`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/round-trip-cab`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/safety`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/reviews`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

    // Phase 2: Same Day Agra Tours - HIGH PRIORITY CONTENT
    { url: `${baseUrl}/same-day-agra-tour-from-delhi`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/same-day-taj-mahal-tour`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/taj-mahal-tour-from-delhi`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/sunrise-taj-mahal-tour-from-delhi`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/moonlight-taj-mahal-tour`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/taj-mahal-private-tour-from-delhi`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/agra-day-trip-from-delhi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/agra-food-tour`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/agra-shopping-guide`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/agra-beyond-taj-mahal`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/agra-travel-guide`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },

    // Phase 3: Religious/Pilgrimage Standalone Pages
    { url: `${baseUrl}/ayodhya-ram-mandir-tour-from-delhi`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/ayodhya-ram-mandir-tour-from-agra`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/ayodhya-ram-mandir-tour-from-lucknow`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/kanwar-yatra-cab-haridwar`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/prayagraj-sangam-tour`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },

    // Phase 4: Road Trip Pages - HIGH PRIORITY CONTENT
    { url: `${baseUrl}/10-day-north-india-road-trip`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/7-day-himachal-tour-by-car`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/kashmir-road-trip-from-delhi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/spiti-valley-road-trip-from-delhi`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/rajasthan-desert-circuit-tour`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/uttarakhand-spiritual-circuit-tour`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/weekend-getaways-from-delhi-by-car`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/weekend-getaways-from-jaipur-by-car`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/weekend-getaways-from-chandigarh-by-car`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },

    // Phase 6: International Tourist Pages - HIGH PRIORITY CONTENT
    { url: `${baseUrl}/private-driver-hire-india`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/golden-triangle-english-speaking-driver`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/safe-travel-india-for-tourists`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/india-road-trip-guide-for-tourists`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/delhi-airport-to-agra-taxi`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },

    // Phase 8: Wedding Special Service Pages
    { url: `${baseUrl}/wedding/baraat-tempo-traveller`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/wedding/car-decoration-packages`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/wedding/doli-car-rental`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },

    // Phase 10: Delhi Airport Terminal Pages
    { url: `${baseUrl}/airport-service/delhi/igi-terminal-1-domestic`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/airport-service/delhi/igi-terminal-2-domestic`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },
    { url: `${baseUrl}/airport-service/delhi/igi-terminal-3-international`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.85 },

    // Additional Tour Packages (Phase 14 - new)
    { url: `${baseUrl}/tour-package/golden-triangle-tour`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/tour-package/delhi-agra-weekend-tour`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/tour-package/uttarakhand-spiritual-tour`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/tour-package/himachal-adventure-tour`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/tour-package/varanasi-ayodhya-spiritual`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/tour-package/leh-ladakh-road-trip`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/tour-package/amritsar-dharamshala-dalhousie`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/tour-package/spiti-valley-expedition`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
  ];

  // Add Wedding Car Model Pages (Dynamic) - HIGH PRIORITY CONTENT
  const weddingCarSlugs = getAllWeddingCarModelSlugs();
  weddingCarSlugs.forEach(slug => {
    urls.push({
      url: `${baseUrl}/wedding/cars/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    });
  });

  // Add Sightseeing City Hub Pages (Dynamic) - HIGH PRIORITY CONTENT
  const sightseeingCities = getCitiesWithTours();
  sightseeingCities.forEach(city => {
    urls.push({
      url: `${baseUrl}/sightseeing/${city}`,
      lastModified: new Date(),
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
        lastModified: post.date ? new Date(post.date) : new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });

  // Add Sightseeing Tour Detail Pages (Dynamic) - HIGH PRIORITY CONTENT
  const allSightseeingTours = getAllTours();
  allSightseeingTours.forEach(tour => {
    urls.push({
      url: `${baseUrl}/sightseeing/${tour.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  });

  // Add Religious Tour Detail Pages (Dynamic) - HIGHEST PRIORITY PILGRIMAGE CONTENT
  const religiousTourSlugs = getAllTourSlugs();
  religiousTourSlugs.forEach(slug => {
    urls.push({
      url: `${baseUrl}/religious-tours/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    });
  });

  // Add Wedding City Pages - HIGH PRIORITY CONTENT
  const weddingCitySlugs = getAllWeddingCitySlugs();
  weddingCitySlugs.forEach(citySlug => {
    urls.push({
      url: `${baseUrl}/wedding/${citySlug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  });

  // Add Chardham Yatra Routes - HIGHEST PRIORITY PILGRIMAGE CONTENT
  chardhamRoutes.forEach(route => {
    urls.push({
      url: `${baseUrl}/tempo-traveller/${route.slug}`,
      lastModified: new Date(),
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
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });
  });

  // Add Bus Routes Main Page - CATEGORY PAGE
  urls.push({
    url: `${baseUrl}/bus-routes`,
    lastModified: new Date(),
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
        lastModified: new Date(),
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
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    });
  });

  // Add Airport Service City Pages - HIGH PRIORITY CONTENT
  const airportCitySlugs = getAllCitySlugs();
  airportCitySlugs.forEach(citySlug => {
    urls.push({
      url: `${baseUrl}/airport-service/${citySlug}`,
      lastModified: new Date(),
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
      lastModified: new Date(),
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
            lastModified: new Date(),
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
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Add Corporate Transportation Industry Pages - B2B CONTENT
  corporateIndustrySlugs.forEach(industrySlug => {
    urls.push({
      url: `${baseUrl}/corporate-transportation-service/industry/${industrySlug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Add Corporate Transportation Use Case Pages - B2B CONTENT
  corporateUseCaseSlugs.forEach(useCaseSlug => {
    urls.push({
      url: `${baseUrl}/corporate-transportation-service/use-case/${useCaseSlug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Add Event Transportation Type Pages - HIGH PRIORITY CONTENT
  eventTypeSlugs.forEach(eventSlug => {
    urls.push({
      url: `${baseUrl}/event-transportation-service/${eventSlug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    });
  });

  // Add Event Transportation City Pages - HIGH PRIORITY CONTENT
  eventCitySlugs.forEach(citySlug => {
    urls.push({
      url: `${baseUrl}/event-transportation-service/city/${citySlug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.85,
    });
  });

  return urls;
}