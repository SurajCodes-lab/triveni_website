// src/app/sitemap.js - Complete sitemap with all routes

import { cities } from "@/utilis/data";
import { cityRoutesData, basicCityRoutes } from "@/utilis/cityRoutesData";
import { getAllTourSlugs } from "@/utilis/religiousTourData";
import { tempoRoutes } from "@/utilis/tempoTravellerData";
import { blogPosts } from "@/utilis/blog";
import { busRoutes } from "@/utilis/busRoutesData";
import { getAllTours } from "@/utilis/sightseeingData";
import { getAllCitySlugs } from "@/utilis/airportCityData";

function createRouteSlug(cityName, destination) {
  return `${cityName.toLowerCase()}-to-${destination.toLowerCase().replace(/\s+/g, '-')}`;
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
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/destinations`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/car-rental`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tour-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/wedding`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // Tour Packages
    {
      url: `${baseUrl}/tour-package/manali-tour-from-mumbai`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tour-package/chardham-yatra-package`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tour-package/shimla-from-mumbai`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tour-package/rajasthan-tour`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tour-package/kashmir-tour`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tour-package/punjab-tour`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Booking Pages
    {
      url: `${baseUrl}/tour-package/manali-tour-from-mumbai/book`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.64,
    },
    {
      url: `${baseUrl}/tour-package/chardham-yatra-package/book`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.64,
    },
    {
      url: `${baseUrl}/tour-package/shimla-from-mumbai/book`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.64,
    },
    {
      url: `${baseUrl}/tour-package/rajasthan-tour/book`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.64,
    },
    {
      url: `${baseUrl}/tour-package/kashmir-tour/book`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.64,
    },
    {
      url: `${baseUrl}/tour-package/punjab-tour/book`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.64,
    },

    // Vehicle Categories
    {
      url: `${baseUrl}/vehicles/sedan`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vehicles/suv`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vehicles/tempo-traveller`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vehicles/luxury-bus`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/vehicles/bus`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Additional Service Pages
    {
      url: `${baseUrl}/tourist-spots`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/airport-service`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Religious Tours Main Page
    {
      url: `${baseUrl}/religious-tours`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Tempo Traveller Main Page
    {
      url: `${baseUrl}/tempo-traveller`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Policy Pages
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cancellation-and-refund-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },

    // Blog Main Page
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // Sightseeing Main Page
    {
      url: `${baseUrl}/sightseeing`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },

    // Routes Main Page
    {
      url: `${baseUrl}/routes`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Add Blog Posts (Dynamic)
  blogPosts
    .filter(post => post && post.slug && post.date) // Filter out undefined or invalid posts
    .forEach(post => {
      urls.push({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: 'monthly',
        priority: 0.8,
      });
    });

  // Add Sightseeing Tour Detail Pages (Dynamic)
  const allSightseeingTours = getAllTours();
  allSightseeingTours.forEach(tour => {
    urls.push({
      url: `${baseUrl}/sightseeing/${tour.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Add Religious Tour Detail Pages (Dynamic)
  const religiousTourSlugs = getAllTourSlugs();
  religiousTourSlugs.forEach(slug => {
    urls.push({
      url: `${baseUrl}/religious-tours/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Add ALL Tempo Traveller Routes (60+ routes)
  Object.keys(tempoRoutes).forEach(originCity => {
    const routes = tempoRoutes[originCity];
    routes.forEach(route => {
      const routeSlug = createTempoRouteSlug(originCity, route.name);
      urls.push({
        url: `${baseUrl}/tempo-traveller/${routeSlug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.7,
      });
    });
  });

  // Add Bus Routes Main Page
  urls.push({
    url: `${baseUrl}/bus-routes`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  });

  // Add ALL Bus Routes (100+ routes)
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

  // Add Tourist Attractions by City
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
      priority: 0.7,
    });
  });

  // Add Airport Service City Pages
  const airportCitySlugs = getAllCitySlugs();
  airportCitySlugs.forEach(citySlug => {
    urls.push({
      url: `${baseUrl}/airport-service/${citySlug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Add ALL city pages (not just 4)
  cities.forEach(city => {
    if (!city || !city.name) return;
    
    const cityName = city.name.toLowerCase();
    urls.push({
      url: `${baseUrl}/${cityName}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  });

  // Add ALL route pages with debugging
  cities.forEach(city => {
    if (!city || !city.name) return;
    
    const cityName = city.name;
    const formattedCityName = cityName.charAt(0).toUpperCase() + cityName.slice(1);
    
    const routes = allCityRoutes[formattedCityName] || [];
    
    console.log(`Processing routes for ${formattedCityName}: ${routes.length} routes found`);
    
    if (Array.isArray(routes) && routes.length > 0) {
      routes.forEach(route => {
        if (route && route.destination) {
          const routeSlug = createRouteSlug(cityName, route.destination);
          urls.push({
            url: `${baseUrl}/${routeSlug}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.64,
          });
          console.log(`Added route: ${routeSlug}`);
        }
      });
    }
  });

  console.log(`Generated sitemap with ${urls.length} URLs`);
  return urls;
}