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

    // Wedding car link
    links.push({
      text: `${cityInfo.name} wedding car rental`,
      url: `/wedding/${cityInfo.slug}`,
      priority: 4,
    });

    // Corporate transport link
    links.push({
      text: `corporate cab service in ${cityInfo.name}`,
      url: `/corporate-transportation-service/${cityInfo.slug}`,
      priority: 4,
    });

    // City hub page link
    links.push({
      text: `${cityInfo.name} taxi service`,
      url: cityInfo.cityUrl,
      priority: 2,
    });
  }

  // Always include key service pages
  links.push(
    { text: 'outstation cab booking', url: '/routes', priority: 5 },
    { text: 'tempo traveller rental', url: '/tempo-traveller', priority: 5 },
    { text: 'tour packages India', url: '/services', priority: 5 }
  );

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

// ==================== NEW FUNCTIONS FOR ENHANCED INTERNAL LINKING ====================

/**
 * Get related routes from a city
 * @param {string} origin - Origin city name
 * @param {string} destination - Current destination (to exclude)
 * @param {number} limit - Max routes to return
 */
export function getRelatedRoutes(origin, destination = '', limit = 6) {
  // Null check to prevent toLowerCase errors
  if (!origin) return [];

  const popularDestinations = {
    delhi: ['agra', 'jaipur', 'chandigarh', 'haridwar', 'rishikesh', 'shimla', 'manali', 'amritsar', 'dehradun', 'mathura'],
    jaipur: ['delhi', 'agra', 'udaipur', 'jodhpur', 'ajmer', 'pushkar', 'bikaner', 'mount-abu', 'ranthambore', 'jaisalmer'],
    agra: ['delhi', 'jaipur', 'mathura', 'vrindavan', 'fatehpur-sikri', 'bharatpur', 'gwalior', 'lucknow', 'varanasi', 'khajuraho'],
    chandigarh: ['delhi', 'shimla', 'manali', 'amritsar', 'dharamshala', 'kasauli', 'patiala', 'ludhiana', 'pathankot', 'mcleodganj'],
    shimla: ['delhi', 'chandigarh', 'manali', 'kullu', 'kasauli', 'dharamshala', 'dalhousie', 'kufri', 'chail', 'narkanda'],
    manali: ['delhi', 'chandigarh', 'shimla', 'leh', 'kullu', 'dharamshala', 'kasol', 'rohtang', 'solang', 'sissu'],
    amritsar: ['delhi', 'chandigarh', 'dharamshala', 'mcleodganj', 'pathankot', 'wagah', 'jalandhar', 'ludhiana', 'dalhousie', 'kasauli'],
    haridwar: ['delhi', 'rishikesh', 'dehradun', 'mussoorie', 'nainital', 'auli', 'badrinath', 'kedarnath', 'gangotri', 'yamunotri'],
    rishikesh: ['delhi', 'haridwar', 'dehradun', 'mussoorie', 'nainital', 'auli', 'badrinath', 'kedarnath', 'gangotri', 'yamunotri'],
    dehradun: ['delhi', 'haridwar', 'rishikesh', 'mussoorie', 'nainital', 'auli', 'chandigarh', 'shimla', 'gangotri', 'yamunotri'],
    udaipur: ['jaipur', 'jodhpur', 'mount-abu', 'ajmer', 'chittorgarh', 'nathdwara', 'kumbhalgarh', 'ranakpur', 'ahmedabad', 'mumbai'],
    varanasi: ['delhi', 'agra', 'lucknow', 'allahabad', 'bodhgaya', 'ayodhya', 'sarnath', 'khajuraho', 'patna', 'kolkata'],
    lucknow: ['delhi', 'agra', 'varanasi', 'allahabad', 'ayodhya', 'kanpur', 'jaipur', 'mathura', 'khajuraho', 'gorakhpur'],
    ahmedabad: ['udaipur', 'mumbai', 'rajkot', 'jamnagar', 'somnath', 'dwarka', 'kutch', 'vadodara', 'surat', 'mount-abu'],
  };

  const originKey = origin.toLowerCase().replace(/\s+/g, '-');
  const destKey = (destination || '').toLowerCase().replace(/\s+/g, '-');
  const destinations = popularDestinations[originKey] || [];

  return destinations
    .filter(dest => dest !== destKey)
    .slice(0, limit)
    .map(dest => {
      const destName = dest.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
      const originName = origin.charAt(0).toUpperCase() + origin.slice(1);
      return {
        origin: originName,
        destination: destName,
        url: `/${originKey}-to-${dest}`,
        slug: `${originKey}-to-${dest}`,
      };
    });
}

/**
 * Get related tours for a city (excluding current tour)
 * @param {string} city - City name
 * @param {string} currentSlug - Current tour slug to exclude
 * @param {number} limit - Max tours to return
 */
export function getRelatedToursByCity(city, currentSlug = '', limit = 4) {
  const cityInfo = getCityInfo(city);
  if (!cityInfo) return [];

  return cityInfo.tours
    .filter(tour => tour.slug !== currentSlug)
    .slice(0, limit);
}

/**
 * Get nearby destinations for geographic internal linking
 * @param {string} city - Current city
 * @param {number} limit - Max destinations
 */
export function getNearbyDestinations(city, limit = 6) {
  // Null check to prevent toLowerCase errors
  if (!city) return [];

  const nearbyMap = {
    delhi: [
      { name: 'Agra', slug: 'agra', distance: 230, image: '/images/cities/agra.jpg' },
      { name: 'Jaipur', slug: 'jaipur', distance: 280, image: '/images/cities/jaipur.jpg' },
      { name: 'Chandigarh', slug: 'chandigarh', distance: 250, image: '/images/cities/chandigarh.jpg' },
      { name: 'Haridwar', slug: 'haridwar', distance: 210, image: '/images/cities/haridwar.jpg' },
      { name: 'Rishikesh', slug: 'rishikesh', distance: 230, image: '/images/cities/rishikesh.jpg' },
      { name: 'Mathura', slug: 'mathura', distance: 160, image: '/images/cities/mathura.jpg' },
      { name: 'Vrindavan', slug: 'vrindavan', distance: 165, image: '/images/cities/vrindavan.jpg' },
      { name: 'Shimla', slug: 'shimla', distance: 350, image: '/images/cities/shimla.jpg' },
    ],
    jaipur: [
      { name: 'Delhi', slug: 'delhi', distance: 280, image: '/images/cities/delhi.jpg' },
      { name: 'Agra', slug: 'agra', distance: 240, image: '/images/cities/agra.jpg' },
      { name: 'Udaipur', slug: 'udaipur', distance: 400, image: '/images/cities/udaipur.jpg' },
      { name: 'Jodhpur', slug: 'jodhpur', distance: 340, image: '/images/cities/jodhpur.jpg' },
      { name: 'Ajmer', slug: 'ajmer', distance: 135, image: '/images/cities/ajmer.jpg' },
      { name: 'Pushkar', slug: 'pushkar', distance: 150, image: '/images/cities/pushkar.jpg' },
    ],
    agra: [
      { name: 'Delhi', slug: 'delhi', distance: 230, image: '/images/cities/delhi.jpg' },
      { name: 'Jaipur', slug: 'jaipur', distance: 240, image: '/images/cities/jaipur.jpg' },
      { name: 'Mathura', slug: 'mathura', distance: 58, image: '/images/cities/mathura.jpg' },
      { name: 'Vrindavan', slug: 'vrindavan', distance: 70, image: '/images/cities/vrindavan.jpg' },
      { name: 'Fatehpur Sikri', slug: 'fatehpur-sikri', distance: 40, image: '/images/cities/fatehpur-sikri.jpg' },
      { name: 'Gwalior', slug: 'gwalior', distance: 120, image: '/images/cities/gwalior.jpg' },
    ],
    chandigarh: [
      { name: 'Delhi', slug: 'delhi', distance: 250, image: '/images/cities/delhi.jpg' },
      { name: 'Shimla', slug: 'shimla', distance: 115, image: '/images/cities/shimla.jpg' },
      { name: 'Manali', slug: 'manali', distance: 310, image: '/images/cities/manali.jpg' },
      { name: 'Amritsar', slug: 'amritsar', distance: 230, image: '/images/cities/amritsar.jpg' },
      { name: 'Kasauli', slug: 'kasauli', distance: 60, image: '/images/cities/kasauli.jpg' },
      { name: 'Dharamshala', slug: 'dharamshala', distance: 240, image: '/images/cities/dharamshala.jpg' },
    ],
    shimla: [
      { name: 'Chandigarh', slug: 'chandigarh', distance: 115, image: '/images/cities/chandigarh.jpg' },
      { name: 'Manali', slug: 'manali', distance: 250, image: '/images/cities/manali.jpg' },
      { name: 'Delhi', slug: 'delhi', distance: 350, image: '/images/cities/delhi.jpg' },
      { name: 'Kasauli', slug: 'kasauli', distance: 70, image: '/images/cities/kasauli.jpg' },
      { name: 'Kufri', slug: 'kufri', distance: 15, image: '/images/cities/kufri.jpg' },
      { name: 'Dharamshala', slug: 'dharamshala', distance: 235, image: '/images/cities/dharamshala.jpg' },
    ],
    manali: [
      { name: 'Shimla', slug: 'shimla', distance: 250, image: '/images/cities/shimla.jpg' },
      { name: 'Chandigarh', slug: 'chandigarh', distance: 310, image: '/images/cities/chandigarh.jpg' },
      { name: 'Delhi', slug: 'delhi', distance: 530, image: '/images/cities/delhi.jpg' },
      { name: 'Kullu', slug: 'kullu', distance: 40, image: '/images/cities/kullu.jpg' },
      { name: 'Kasol', slug: 'kasol', distance: 80, image: '/images/cities/kasol.jpg' },
      { name: 'Dharamshala', slug: 'dharamshala', distance: 200, image: '/images/cities/dharamshala.jpg' },
    ],
    amritsar: [
      { name: 'Chandigarh', slug: 'chandigarh', distance: 230, image: '/images/cities/chandigarh.jpg' },
      { name: 'Delhi', slug: 'delhi', distance: 450, image: '/images/cities/delhi.jpg' },
      { name: 'Dharamshala', slug: 'dharamshala', distance: 200, image: '/images/cities/dharamshala.jpg' },
      { name: 'McLeodganj', slug: 'mcleodganj', distance: 210, image: '/images/cities/mcleodganj.jpg' },
      { name: 'Wagah Border', slug: 'wagah-border', distance: 30, image: '/images/cities/wagah.jpg' },
      { name: 'Pathankot', slug: 'pathankot', distance: 100, image: '/images/cities/pathankot.jpg' },
    ],
    haridwar: [
      { name: 'Rishikesh', slug: 'rishikesh', distance: 25, image: '/images/cities/rishikesh.jpg' },
      { name: 'Dehradun', slug: 'dehradun', distance: 55, image: '/images/cities/dehradun.jpg' },
      { name: 'Delhi', slug: 'delhi', distance: 210, image: '/images/cities/delhi.jpg' },
      { name: 'Mussoorie', slug: 'mussoorie', distance: 80, image: '/images/cities/mussoorie.jpg' },
      { name: 'Nainital', slug: 'nainital', distance: 230, image: '/images/cities/nainital.jpg' },
      { name: 'Badrinath', slug: 'badrinath', distance: 310, image: '/images/cities/badrinath.jpg' },
    ],
    rishikesh: [
      { name: 'Haridwar', slug: 'haridwar', distance: 25, image: '/images/cities/haridwar.jpg' },
      { name: 'Dehradun', slug: 'dehradun', distance: 45, image: '/images/cities/dehradun.jpg' },
      { name: 'Delhi', slug: 'delhi', distance: 230, image: '/images/cities/delhi.jpg' },
      { name: 'Mussoorie', slug: 'mussoorie', distance: 70, image: '/images/cities/mussoorie.jpg' },
      { name: 'Badrinath', slug: 'badrinath', distance: 295, image: '/images/cities/badrinath.jpg' },
      { name: 'Kedarnath', slug: 'kedarnath', distance: 230, image: '/images/cities/kedarnath.jpg' },
    ],
  };

  const cityKey = city.toLowerCase().replace(/\s+/g, '-');
  const destinations = nearbyMap[cityKey] || [];

  return destinations.slice(0, limit).map(dest => ({
    ...dest,
    url: `/${dest.slug}`,
  }));
}

/**
 * Get cross-service links for a city
 * @param {string} city - City name
 */
export function getServiceCrossLinks(city) {
  // Null check to prevent toLowerCase errors
  if (!city) return [];

  const citySlug = city.toLowerCase().replace(/\s+/g, '-');
  const cityName = city.charAt(0).toUpperCase() + city.slice(1);

  return [
    {
      name: 'Airport Transfer',
      icon: 'airport',
      url: `/airport-service/${citySlug}`,
      description: `Airport pickup & drop in ${cityName}`
    },
    {
      name: 'Sightseeing Tours',
      icon: 'tour',
      url: `/sightseeing/${citySlug}`,
      description: `Explore ${cityName} tourist places`
    },
    {
      name: 'Corporate Transport',
      icon: 'corporate',
      url: `/corporate-transportation-service/${citySlug}`,
      description: `Employee shuttle & office cabs`
    },
    {
      name: 'Wedding Cars',
      icon: 'wedding',
      url: `/wedding/${citySlug}`,
      description: `Decorated cars for your special day`
    },
    {
      name: 'Event Transport',
      icon: 'event',
      url: `/event-transportation-service/city/${citySlug}`,
      description: `Group & event transportation`
    },
    {
      name: 'Tempo Traveller',
      icon: 'tempo',
      url: `/tempo-traveller`,
      description: `12-20 seater for group travel`
    },
    {
      name: 'Religious Tours',
      icon: 'tour',
      url: `/religious-tours`,
      description: `Pilgrimage & spiritual tour packages`
    },
    {
      name: 'Tour Guide',
      icon: 'tour',
      url: `/tour-guide`,
      description: `Certified guides in 6 languages`
    }
  ];
}

/**
 * Get popular routes for footer/navigation
 * @param {number} limit - Max routes
 */
export function getPopularRoutes(limit = 10) {
  return [
    { origin: 'Delhi', destination: 'Agra', distance: 230, price: 3500, url: '/delhi-to-agra' },
    { origin: 'Delhi', destination: 'Jaipur', distance: 280, price: 4000, url: '/delhi-to-jaipur' },
    { origin: 'Jaipur', destination: 'Agra', distance: 240, price: 3800, url: '/jaipur-to-agra' },
    { origin: 'Delhi', destination: 'Chandigarh', distance: 250, price: 3800, url: '/delhi-to-chandigarh' },
    { origin: 'Delhi', destination: 'Haridwar', distance: 210, price: 3200, url: '/delhi-to-haridwar' },
    { origin: 'Delhi', destination: 'Rishikesh', distance: 230, price: 3500, url: '/delhi-to-rishikesh' },
    { origin: 'Delhi', destination: 'Shimla', distance: 350, price: 5000, url: '/delhi-to-shimla' },
    { origin: 'Delhi', destination: 'Manali', distance: 530, price: 7500, url: '/delhi-to-manali' },
    { origin: 'Chandigarh', destination: 'Shimla', distance: 115, price: 2500, url: '/chandigarh-to-shimla' },
    { origin: 'Chandigarh', destination: 'Manali', distance: 310, price: 5000, url: '/chandigarh-to-manali' },
    { origin: 'Delhi', destination: 'Amritsar', distance: 450, price: 6500, url: '/delhi-to-amritsar' },
    { origin: 'Agra', destination: 'Jaipur', distance: 240, price: 3800, url: '/agra-to-jaipur' },
  ].slice(0, limit);
}

/**
 * Get popular cities for footer/navigation
 */
export function getPopularCities() {
  return [
    { name: 'Delhi', slug: 'delhi', url: '/delhi' },
    { name: 'Jaipur', slug: 'jaipur', url: '/jaipur' },
    { name: 'Agra', slug: 'agra', url: '/agra' },
    { name: 'Chandigarh', slug: 'chandigarh', url: '/chandigarh' },
    { name: 'Shimla', slug: 'shimla', url: '/shimla' },
    { name: 'Manali', slug: 'manali', url: '/manali' },
    { name: 'Amritsar', slug: 'amritsar', url: '/amritsar' },
    { name: 'Haridwar', slug: 'haridwar', url: '/haridwar' },
    { name: 'Rishikesh', slug: 'rishikesh', url: '/rishikesh' },
    { name: 'Dehradun', slug: 'dehradun', url: '/dehradun' },
    { name: 'Udaipur', slug: 'udaipur', url: '/udaipur' },
    { name: 'Jodhpur', slug: 'jodhpur', url: '/jodhpur' },
    { name: 'Varanasi', slug: 'varanasi', url: '/varanasi' },
    { name: 'Lucknow', slug: 'lucknow', url: '/lucknow' },
    { name: 'Ahmedabad', slug: 'ahmedabad', url: '/ahmedabad' },
  ];
}

/**
 * Get popular tours for footer/navigation
 * @param {number} limit - Max tours
 */
export function getPopularTours(limit = 8) {
  const allTours = getAllTours();

  // Sort by popularity (reviews) and return top tours
  return allTours
    .sort((a, b) => {
      const aReviews = a.reviews?.totalReviews || 0;
      const bReviews = b.reviews?.totalReviews || 0;
      return bReviews - aReviews;
    })
    .slice(0, limit)
    .map(tour => ({
      name: tour.name,
      slug: tour.slug,
      url: `/sightseeing/${tour.slug}`,
      price: tour.price?.sedan,
      duration: tour.duration,
      city: getCityFromTourSlug(tour.slug),
    }));
}

/**
 * Get city from tour slug (helper)
 */
function getCityFromTourSlug(slug) {
  const cities = getCitiesWithTours();
  for (const city of cities) {
    const tours = getToursByCity(city);
    if (tours.some(t => t.slug === slug)) {
      return city.charAt(0).toUpperCase() + city.slice(1);
    }
  }
  return '';
}

/**
 * Auto-link city names in content
 * @param {string} content - HTML content
 * @param {string[]} excludeCities - Cities to exclude from linking
 */
export function autoLinkCities(content, excludeCities = []) {
  const cities = getPopularCities();
  let linkedContent = content;

  cities.forEach(city => {
    if (excludeCities.includes(city.name.toLowerCase())) return;

    // Create regex to match city name (case insensitive, word boundary)
    const regex = new RegExp(`\\b(${city.name})\\b(?![^<]*>)`, 'gi');

    // Replace first occurrence with link
    let replaced = false;
    linkedContent = linkedContent.replace(regex, (match) => {
      if (replaced) return match;
      replaced = true;
      return `<a href="${city.url}" class="text-amber-600 hover:text-amber-700 font-medium">${match}</a>`;
    });
  });

  return linkedContent;
}

// ==================== CONTENT PAGE LINKING ====================

/**
 * Get related content/guide pages for a city
 * Used to show new content pages on existing city/sightseeing pages
 */
export function getRelatedContent(city) {
  if (!city) return getGeneralContent();

  const cityKey = city.toLowerCase().replace(/\s+/g, '-');

  const cityContent = {
    agra: [
      { title: 'Agra Day Trip from Delhi', url: '/agra-day-trip-from-delhi', description: 'Budget-friendly day trip guide to Agra from Delhi' },
      { title: 'Agra Food Tour', url: '/agra-food-tour', description: 'Best street food and restaurants in Agra' },
      { title: 'Agra Shopping Guide', url: '/agra-shopping-guide', description: 'Marble crafts, leather goods and local markets' },
      { title: 'Agra Travel Guide', url: '/agra-travel-guide', description: 'Complete travel guide for visiting Agra' },
      { title: 'Beyond the Taj Mahal', url: '/agra-beyond-taj-mahal', description: 'Discover Agra beyond its most famous monument' },
      { title: 'Same Day Agra Tour from Delhi', url: '/same-day-agra-tour-from-delhi', description: 'See the best of Agra in a single day' },
      { title: 'Taj Mahal Tour from Delhi', url: '/taj-mahal-tour-from-delhi', description: 'Guided Taj Mahal tour with private car' },
      { title: 'Private Taj Mahal Tour', url: '/taj-mahal-private-tour-from-delhi', description: 'Premium private tour with dedicated guide' },
      { title: 'Moonlight Taj Mahal Tour', url: '/moonlight-taj-mahal-tour', description: 'Experience the Taj under moonlight' },
      { title: 'Sunrise Taj Mahal Tour', url: '/sunrise-taj-mahal-tour-from-delhi', description: 'Watch sunrise at the Taj Mahal' },
      { title: 'Same Day Taj Mahal Tour', url: '/same-day-taj-mahal-tour', description: 'Quick same-day Taj Mahal visit' },
      { title: 'Delhi Airport to Agra Taxi', url: '/delhi-airport-to-agra-taxi', description: 'Direct airport transfer to Agra' },
    ],
    delhi: [
      { title: 'Weekend Getaways from Delhi', url: '/weekend-getaways-from-delhi-by-car', description: 'Top road trips and escapes from Delhi' },
      { title: 'Golden Triangle with Driver', url: '/golden-triangle-english-speaking-driver', description: 'Delhi-Agra-Jaipur with English-speaking driver' },
      { title: 'Delhi Airport to Agra Taxi', url: '/delhi-airport-to-agra-taxi', description: 'Airport transfer to Agra from Delhi' },
      { title: 'Taj Mahal Tour from Delhi', url: '/taj-mahal-tour-from-delhi', description: 'Day trip to Taj Mahal from Delhi' },
      { title: 'Private Taj Mahal Tour', url: '/taj-mahal-private-tour-from-delhi', description: 'Premium private Taj Mahal tour' },
      { title: 'Sunrise Taj Mahal Tour', url: '/sunrise-taj-mahal-tour-from-delhi', description: 'Early morning Taj Mahal experience' },
      { title: 'Same Day Agra Tour', url: '/same-day-agra-tour-from-delhi', description: 'Agra sightseeing in a day from Delhi' },
      { title: 'Agra Day Trip from Delhi', url: '/agra-day-trip-from-delhi', description: 'Budget day trip guide to Agra' },
      { title: '10-Day North India Road Trip', url: '/10-day-north-india-road-trip', description: 'Epic road trip covering North India' },
      { title: 'Kashmir Road Trip', url: '/kashmir-road-trip-from-delhi', description: 'Scenic drive from Delhi to Kashmir' },
      { title: 'Spiti Valley Road Trip', url: '/spiti-valley-road-trip-from-delhi', description: 'High-altitude adventure to Spiti Valley' },
      { title: 'Ayodhya Tour from Delhi', url: '/ayodhya-ram-mandir-tour-from-delhi', description: 'Visit Ram Mandir from Delhi' },
    ],
    jaipur: [
      { title: 'Weekend Getaways from Jaipur', url: '/weekend-getaways-from-jaipur-by-car', description: 'Best road trips from the Pink City' },
      { title: '5-Day Rajasthan Road Trip', url: '/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur', description: 'Jaipur-Udaipur-Jodhpur circuit' },
      { title: 'Rajasthan Desert Circuit', url: '/rajasthan-desert-circuit-tour', description: 'Explore the Thar Desert by car' },
      { title: 'Golden Triangle Tour', url: '/golden-triangle-english-speaking-driver', description: 'Delhi-Agra-Jaipur classic route' },
      { title: '10-Day North India Road Trip', url: '/10-day-north-india-road-trip', description: 'Epic road trip covering Rajasthan & more' },
    ],
    chandigarh: [
      { title: 'Weekend Getaways from Chandigarh', url: '/weekend-getaways-from-chandigarh-by-car', description: 'Hill stations and escapes from Chandigarh' },
      { title: '7-Day Himachal Tour', url: '/7-day-himachal-tour-by-car', description: 'Complete Himachal Pradesh road trip' },
    ],
    shimla: [
      { title: '7-Day Himachal Tour', url: '/7-day-himachal-tour-by-car', description: 'Shimla-Manali road trip itinerary' },
      { title: 'Weekend Getaways from Chandigarh', url: '/weekend-getaways-from-chandigarh-by-car', description: 'Quick escapes including Shimla' },
    ],
    manali: [
      { title: '7-Day Himachal Tour', url: '/7-day-himachal-tour-by-car', description: 'Complete Himachal road trip via Manali' },
      { title: 'Spiti Valley Road Trip', url: '/spiti-valley-road-trip-from-delhi', description: 'Manali to Spiti high-altitude adventure' },
      { title: 'Weekend Getaways from Chandigarh', url: '/weekend-getaways-from-chandigarh-by-car', description: 'Chandigarh to Manali weekend trip' },
    ],
    udaipur: [
      { title: '5-Day Rajasthan Road Trip', url: '/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur', description: 'Udaipur in the Rajasthan circuit' },
      { title: '10-Day North India Road Trip', url: '/10-day-north-india-road-trip', description: 'Visit Udaipur on a grand road trip' },
      { title: 'Rajasthan Desert Circuit', url: '/rajasthan-desert-circuit-tour', description: 'Desert tour including Udaipur' },
    ],
    jodhpur: [
      { title: '5-Day Rajasthan Road Trip', url: '/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur', description: 'Jodhpur in the Rajasthan circuit' },
      { title: '10-Day North India Road Trip', url: '/10-day-north-india-road-trip', description: 'Visit the Blue City on a grand road trip' },
      { title: 'Rajasthan Desert Circuit', url: '/rajasthan-desert-circuit-tour', description: 'Desert tour including Jodhpur' },
    ],
    haridwar: [
      { title: 'Kanwar Yatra Cab Service', url: '/kanwar-yatra-cab-haridwar', description: 'Reliable transport for Kanwar Yatra' },
      { title: 'Uttarakhand Spiritual Circuit', url: '/uttarakhand-spiritual-circuit-tour', description: 'Char Dham and spiritual destinations' },
    ],
    rishikesh: [
      { title: 'Uttarakhand Spiritual Circuit', url: '/uttarakhand-spiritual-circuit-tour', description: 'Spiritual tour through Uttarakhand' },
      { title: 'Kanwar Yatra Cab Service', url: '/kanwar-yatra-cab-haridwar', description: 'Transport for Kanwar Yatra pilgrimage' },
    ],
    lucknow: [
      { title: 'Ayodhya Tour from Lucknow', url: '/ayodhya-ram-mandir-tour-from-lucknow', description: 'Short trip to Ram Mandir from Lucknow' },
    ],
    varanasi: [
      { title: 'Prayagraj Sangam Tour', url: '/prayagraj-sangam-tour', description: 'Visit the sacred Triveni Sangam' },
      { title: 'Uttarakhand Spiritual Circuit', url: '/uttarakhand-spiritual-circuit-tour', description: 'Extended spiritual tour from Varanasi' },
    ],
    ayodhya: [
      { title: 'Ayodhya Tour from Delhi', url: '/ayodhya-ram-mandir-tour-from-delhi', description: 'Ram Mandir darshan from Delhi' },
      { title: 'Ayodhya Tour from Agra', url: '/ayodhya-ram-mandir-tour-from-agra', description: 'Ram Mandir darshan from Agra' },
      { title: 'Ayodhya Tour from Lucknow', url: '/ayodhya-ram-mandir-tour-from-lucknow', description: 'Nearest city tour to Ram Mandir' },
    ],
    dehradun: [
      { title: 'Uttarakhand Spiritual Circuit', url: '/uttarakhand-spiritual-circuit-tour', description: 'Char Dham and temples circuit' },
      { title: '7-Day Himachal Tour', url: '/7-day-himachal-tour-by-car', description: 'Himachal road trip from Dehradun' },
    ],
    amritsar: [
      { title: 'Weekend Getaways from Chandigarh', url: '/weekend-getaways-from-chandigarh-by-car', description: 'Amritsar as a weekend getaway' },
    ],
  };

  return cityContent[cityKey] || getGeneralContent();
}

/**
 * Get general content pages (not city-specific)
 */
export function getGeneralContent() {
  return [
    { title: 'India Road Trip Guide', url: '/india-road-trip-guide-for-tourists', description: 'Everything you need to know about road trips in India' },
    { title: 'Safe Travel in India', url: '/safe-travel-india-for-tourists', description: 'Safety tips and advice for tourists' },
    { title: 'Hire a Private Driver', url: '/private-driver-hire-india', description: 'Professional driver services across India' },
    { title: '10-Day North India Road Trip', url: '/10-day-north-india-road-trip', description: 'Epic multi-city road trip itinerary' },
    { title: 'Golden Triangle Tour', url: '/golden-triangle-english-speaking-driver', description: 'Delhi-Agra-Jaipur classic route' },
  ];
}

/**
 * Get cab service category pages
 */
export function getServicePages() {
  return [
    { title: 'One Way Cab', url: '/one-way-cab', description: 'Affordable one-way taxi between cities' },
    { title: 'Round Trip Cab', url: '/round-trip-cab', description: 'Book return journey cabs at best rates' },
    { title: 'Outstation Cabs', url: '/outstation-cabs', description: 'Intercity travel with professional drivers' },
    { title: 'Local Taxi', url: '/local-taxi', description: 'Hourly rental for local city travel' },
  ];
}

/**
 * Get wedding service pages
 */
export function getWeddingPages() {
  return [
    { title: 'Baraat Tempo Traveller', url: '/wedding/baraat-tempo-traveller', description: 'DJ-equipped vehicles for baraat procession' },
    { title: 'Car Decoration Packages', url: '/wedding/car-decoration-packages', description: 'Beautiful flower and ribbon car decorations' },
    { title: 'Wedding Car Collection', url: '/wedding/cars', description: 'Luxury cars for your special day' },
    { title: 'Doli Car Rental', url: '/wedding/doli-car-rental', description: 'Elegant bridal car service' },
  ];
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
  // New exports for enhanced internal linking
  getRelatedRoutes,
  getRelatedToursByCity,
  getNearbyDestinations,
  getServiceCrossLinks,
  getPopularRoutes,
  getPopularCities,
  getPopularTours,
  autoLinkCities,
  // Content page linking
  getRelatedContent,
  getGeneralContent,
  getServicePages,
  getWeddingPages,
};
