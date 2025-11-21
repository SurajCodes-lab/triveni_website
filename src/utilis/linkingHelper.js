// Smart Linking Helper for Blogs
// DYNAMIC linking from actual sightseeingData.js

import { sightseeingTours, getToursByCity, getCitiesWithTours, getAllTours } from './sightseeingData';

// Get all available cities dynamically
export function getAllCities() {
  const cities = getCitiesWithTours();
  return cities.map(city => ({
    slug: city,
    name: city.charAt(0).toUpperCase() + city.slice(1),
    url: `/sightseeing/${city}`,
  }));
}

// Get city info with all tours
export function getCityInfo(cityName) {
  if (!cityName) return null;

  const city = cityName.toLowerCase();
  const tours = getToursByCity(city);

  if (!tours || tours.length === 0) return null;

  return {
    name: city.charAt(0).toUpperCase() + city.slice(1),
    slug: city,
    sightseeingUrl: `/sightseeing/${city}`,
    cityUrl: `/${city}`,
    airportUrl: `/airport-service/${city}`,
    tours: tours.map(tour => ({
      slug: tour.slug,
      name: tour.name,
      price: tour.price?.sedan ? `₹${tour.price.sedan}` : 'Contact for price',
      duration: tour.duration,
      url: `/sightseeing/${tour.slug}`,
    })),
  };
}

// Get tours for a city (limited)
export function getCityTours(cityName, limit = 4) {
  const cityInfo = getCityInfo(cityName);
  if (!cityInfo) return [];
  return cityInfo.tours.slice(0, limit);
}

// MAIN FUNCTION: Get all related links for a blog post
export function getRelatedLinks(blogPost) {
  const { city, slug, nearbyAttractions = [] } = blogPost;

  // If no city specified, return default links
  if (!city) {
    return {
      cityTours: '/sightseeing',
      cityPage: null,
      airportService: null,
      relatedTours: [],
      nearbyBlogs: [],
      quickLinks: getDefaultQuickLinks(),
      allCityLinks: getAllCityLinks(),
    };
  }

  const cityInfo = getCityInfo(city);

  if (!cityInfo) {
    // City not found in sightseeing data, return defaults
    return {
      cityTours: '/sightseeing',
      cityPage: null,
      airportService: null,
      relatedTours: [],
      nearbyBlogs: [],
      quickLinks: getDefaultQuickLinks(),
      allCityLinks: getAllCityLinks(),
    };
  }

  return {
    // Main city sightseeing page - MOST IMPORTANT
    cityTours: cityInfo.sightseeingUrl,

    // City landing page
    cityPage: cityInfo.cityUrl,

    // Airport service page
    airportService: cityInfo.airportUrl,

    // Related tours from this city (max 6 for good display)
    relatedTours: cityInfo.tours.slice(0, 6),

    // Nearby attractions for internal blog linking
    nearbyBlogs: nearbyAttractions.slice(0, 4),

    // Quick links - DYNAMIC based on city
    quickLinks: [
      {
        href: cityInfo.sightseeingUrl,
        text: `All ${cityInfo.name} Tours`,
        icon: "🗺️",
        highlight: true
      },
      {
        href: '/sightseeing',
        text: 'All Destinations',
        icon: "🌍"
      },
      {
        href: cityInfo.airportUrl,
        text: `${cityInfo.name} Airport Taxi`,
        icon: "✈️"
      },
      {
        href: '/contact',
        text: 'Contact Us',
        icon: "📞"
      },
    ],

    // All city links for footer/sidebar
    allCityLinks: getAllCityLinks(),

    // City name for display
    cityName: cityInfo.name,
  };
}

// Get default quick links when no city
function getDefaultQuickLinks() {
  return [
    { href: '/sightseeing', text: 'All Destinations', icon: "🌍" },
    { href: '/sightseeing/delhi', text: 'Delhi Tours', icon: "🏛️" },
    { href: '/sightseeing/jaipur', text: 'Jaipur Tours', icon: "🏰" },
    { href: '/sightseeing/agra', text: 'Agra Tours', icon: "🕌" },
    { href: '/contact', text: 'Contact Us', icon: "📞" },
  ];
}

// Get all city links for navigation
function getAllCityLinks() {
  const cities = getCitiesWithTours();
  const popularCities = ['delhi', 'jaipur', 'agra', 'manali', 'shimla', 'rishikesh', 'amritsar', 'udaipur'];

  return popularCities
    .filter(city => cities.includes(city))
    .map(city => ({
      slug: city,
      name: city.charAt(0).toUpperCase() + city.slice(1),
      url: `/sightseeing/${city}`,
    }));
}

// Attraction types for layout selection
export const attractionTypes = {
  fort: { layout: "FortPalaceLayout", color: "amber", icon: "🏰", label: "Fort & Palace" },
  palace: { layout: "FortPalaceLayout", color: "amber", icon: "👑", label: "Royal Palace" },
  haveli: { layout: "FortPalaceLayout", color: "amber", icon: "🏠", label: "Haveli" },
  temple: { layout: "TempleLayout", color: "orange", icon: "🛕", label: "Temple" },
  mosque: { layout: "TempleLayout", color: "emerald", icon: "🕌", label: "Mosque" },
  gurudwara: { layout: "TempleLayout", color: "orange", icon: "🙏", label: "Gurudwara" },
  church: { layout: "TempleLayout", color: "blue", icon: "⛪", label: "Church" },
  dargah: { layout: "TempleLayout", color: "green", icon: "🕌", label: "Dargah" },
  monument: { layout: "MonumentLayout", color: "blue", icon: "🏛️", label: "Monument" },
  unesco: { layout: "MonumentLayout", color: "blue", icon: "🌍", label: "UNESCO Site" },
  historical: { layout: "MonumentLayout", color: "slate", icon: "📜", label: "Historical" },
  memorial: { layout: "MonumentLayout", color: "gray", icon: "🪦", label: "Memorial" },
  museum: { layout: "MonumentLayout", color: "indigo", icon: "🏛️", label: "Museum" },
  nature: { layout: "NatureLayout", color: "green", icon: "🏔️", label: "Nature" },
  "hill-station": { layout: "NatureLayout", color: "green", icon: "⛰️", label: "Hill Station" },
  lake: { layout: "NatureLayout", color: "cyan", icon: "🌊", label: "Lake" },
  waterfall: { layout: "NatureLayout", color: "blue", icon: "💧", label: "Waterfall" },
  wildlife: { layout: "NatureLayout", color: "green", icon: "🐅", label: "Wildlife" },
  "national-park": { layout: "NatureLayout", color: "green", icon: "🌲", label: "National Park" },
  garden: { layout: "NatureLayout", color: "lime", icon: "🌳", label: "Garden" },
  beach: { layout: "NatureLayout", color: "sky", icon: "🏖️", label: "Beach" },
  city: { layout: "CityGuideLayout", color: "purple", icon: "🌆", label: "City Guide" },
  market: { layout: "CityGuideLayout", color: "pink", icon: "🛍️", label: "Market" },
  shopping: { layout: "CityGuideLayout", color: "pink", icon: "🛒", label: "Shopping" },
  urban: { layout: "CityGuideLayout", color: "purple", icon: "🏙️", label: "Urban" },
  adventure: { layout: "AdventureLayout", color: "red", icon: "🎿", label: "Adventure" },
  trek: { layout: "AdventureLayout", color: "orange", icon: "🥾", label: "Trek" },
  rafting: { layout: "AdventureLayout", color: "blue", icon: "🚣", label: "Rafting" },
  camping: { layout: "AdventureLayout", color: "green", icon: "⛺", label: "Camping" },
  sports: { layout: "AdventureLayout", color: "red", icon: "🏂", label: "Sports" },
};

// Get attraction type info
export function getAttractionTypeInfo(type) {
  return attractionTypes[type?.toLowerCase()] || attractionTypes.monument;
}

// Build breadcrumb for blog
export function buildBlogBreadcrumb(blogPost) {
  const { city, title, slug } = blogPost;

  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
  ];

  if (city) {
    const cityName = city.charAt(0).toUpperCase() + city.slice(1);
    breadcrumbs.push({
      name: cityName,
      url: `/sightseeing/${city}`
    });
  }

  breadcrumbs.push({
    name: title?.length > 40 ? title.slice(0, 40) + '...' : title,
    url: `/blog/${slug}`,
    current: true
  });

  return breadcrumbs;
}

// Get SEO internal links for content injection
export function getSEOLinks(city) {
  const cityInfo = getCityInfo(city);
  const links = [];

  if (cityInfo) {
    // Main city tour link
    links.push({
      text: `${cityInfo.name} sightseeing tours`,
      url: cityInfo.sightseeingUrl,
      priority: 1,
    });

    // Top 3 tours from city
    cityInfo.tours.slice(0, 3).forEach((tour, index) => {
      links.push({
        text: tour.name,
        url: tour.url,
        priority: 2,
      });
    });

    // Airport service
    links.push({
      text: `${cityInfo.name} airport taxi service`,
      url: cityInfo.airportUrl,
      priority: 3,
    });
  }

  return links;
}

// Search for related tours by keyword
export function searchRelatedTours(keyword, limit = 4) {
  const allTours = getAllTours();
  const searchTerm = keyword.toLowerCase();

  return allTours
    .filter(tour =>
      tour.name.toLowerCase().includes(searchTerm) ||
      tour.slug.toLowerCase().includes(searchTerm) ||
      tour.shortDescription?.toLowerCase().includes(searchTerm)
    )
    .slice(0, limit)
    .map(tour => ({
      slug: tour.slug,
      name: tour.name,
      price: tour.price?.sedan ? `₹${tour.price.sedan}` : 'Contact',
      url: `/sightseeing/${tour.slug}`,
    }));
}

// Export default object
export default {
  getAllCities,
  getCityInfo,
  getCityTours,
  getRelatedLinks,
  attractionTypes,
  getAttractionTypeInfo,
  buildBlogBreadcrumb,
  getSEOLinks,
  searchRelatedTours,
};
