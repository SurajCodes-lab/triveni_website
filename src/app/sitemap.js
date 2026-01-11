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
      url: `${baseUrl}/destinations`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/car-rental`,
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
  ];

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

  return urls;
}