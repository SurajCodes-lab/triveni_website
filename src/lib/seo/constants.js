/**
 * SEO Constants - Centralized company information and configuration
 * Used across all SEO-related utilities for consistent branding
 */

export const COMPANY_INFO = {
  name: 'Triveni Cabs',
  // The brand operates without a private-limited registration, so the legal
  // owner named in the footer trademark notice is simply 'Triveni Cabs'.
  legalName: 'Triveni Cabs',
  // Trademark: application filed, not yet granted, so the correct notice is ™
  // (not ®). When registration is granted, change `mark` to '®' and `notice`
  // to read 'is a registered trademark of' — every marked string on the site
  // is built from the brand name plus this symbol.
  trademark: {
    mark: '™',
    brandMarked: 'Triveni Cabs™',
    notice: 'Triveni Cabs™ is a trademark of Triveni Cabs.',
  },
  founder: 'Pankaj Singh Gaur',
  foundingDate: '2015',
  slogan: 'Your Journey, Our Priority',
  description: 'Premium taxi and cab service provider across North India offering reliable transportation for sightseeing tours, airport transfers, corporate travel, and wedding events.',

  // Contact Information
  phone: {
    primary: '+91-7668570551',
    display: '+91 7668570551',
    whatsapp: '+917668570551'
  },
  email: {
    primary: 'cabstriveni@gmail.com',
    support: 'cabstriveni@gmail.com',
    bookings: 'cabstriveni@gmail.com'
  },

  // Physical Address (Registered Office)
  address: {
    streetAddress: '366, Dandupura, near Tajganj',
    addressLocality: 'Agra',
    addressRegion: 'Uttar Pradesh',
    postalCode: '282006',
    addressCountry: 'IN'
  },

  // Geographic Coverage
  geo: {
    latitude: 27.1767,
    longitude: 78.0081
  },

  // Social Media
  social: {
    facebook: 'https://www.facebook.com/trivenicabs',
    instagram: 'https://www.instagram.com/cabstriveni',
    twitter: 'https://twitter.com/trivenicabs',
    linkedin: 'https://www.linkedin.com/company/trivenicabs'
  }
};

export const BASE_URL = 'https://www.trivenicabs.in';

export const SITE_CONFIG = {
  siteName: 'Triveni Cabs',
  locale: 'en_IN',
  alternateLocale: 'hi_IN',
  language: 'en',
  twitterHandle: '@TriveniCabs',
  defaultImage: '/images/triveni-cabs-og.jpg',
  // Week 47: /images/logo.png never existed on disk (Googlebot logged 404s for the
  // Organization logo). The real file is the webp under /images/logo/.
  logoUrl: '/images/logo/logo-tm.webp'
};

// Service-specific pricing for schema
export const PRICING = {
  sedan: {
    minPrice: 11,
    maxPrice: 15,
    currency: 'INR',
    unit: 'per km'
  },
  suv: {
    minPrice: 14,
    maxPrice: 18,
    currency: 'INR',
    unit: 'per km'
  },
  tempoTraveller: {
    minPrice: 20,
    maxPrice: 28,
    currency: 'INR',
    unit: 'per km'
  },
  bus: {
    minPrice: 35,
    maxPrice: 50,
    currency: 'INR',
    unit: 'per km'
  }
};

// Page type configurations for metadata templates
export const PAGE_TYPES = {
  route: {
    titleSuffix: '— Book Online 24/7',
    keywordPrefix: 'cab, taxi, hire, book online,'
  },
  tour: {
    titleSuffix: '— All Inclusive Tour',
    keywordPrefix: 'tour, sightseeing, travel, book now,'
  },
  cityHub: {
    titleSuffix: '— 24/7 Online Booking',
    keywordPrefix: 'taxi service, cab booking, instant,'
  },
  airport: {
    titleSuffix: '— Flight Tracking | 24/7',
    keywordPrefix: 'airport taxi, airport transfer, pickup drop,'
  },
  blog: {
    titleSuffix: '— Travel Guide 2026',
    keywordPrefix: 'travel guide, travel tips, 2026,'
  },
  corporate: {
    titleSuffix: '— Monthly Plans Available',
    keywordPrefix: 'corporate transport, employee shuttle, office cab,'
  },
  wedding: {
    titleSuffix: '— Decorated Luxury Cars',
    keywordPrefix: 'wedding car, bridal car, shaadi car,'
  },
  event: {
    titleSuffix: '— Group Travel Experts',
    keywordPrefix: 'event transportation, group travel, bus hire,'
  }
};

// Aggregate rating for schema
export const AGGREGATE_RATING = {
  ratingValue: 4.9,
  reviewCount: 10000,
  bestRating: 5,
  worstRating: 1
};

// Service areas - 50+ cities across North India
export const SERVICE_AREAS = [
  'Delhi', 'Jaipur', 'Agra', 'Chandigarh', 'Amritsar',
  'Dehradun', 'Haridwar', 'Rishikesh', 'Shimla', 'Manali',
  'Udaipur', 'Jodhpur', 'Ahmedabad', 'Varanasi', 'Lucknow',
  'Mathura', 'Vrindavan', 'Noida', 'Gurgaon', 'Faridabad',
  'Ghaziabad', 'Meerut', 'Mussoorie', 'Nainital', 'Jim Corbett',
  'Dharamshala', 'Dalhousie', 'Kullu', 'Kasol', 'Spiti Valley',
  'Leh', 'Srinagar', 'Gulmarg', 'Pahalgam', 'Jammu',
  'Ayodhya', 'Prayagraj', 'Kanpur', 'Bareilly', 'Aligarh',
  'Jaisalmer', 'Pushkar', 'Mount Abu', 'Ajmer', 'Bikaner',
  'Ranthambore', 'Alwar', 'Bharatpur', 'Chittorgarh', 'Kota',
  'Pathankot', 'Jalandhar', 'Ludhiana', 'Patiala', 'Ambala',
  'Panipat', 'Kurukshetra', 'Karnal', 'Rohtak', 'Hisar'
];

/**
 * City geo-coordinates + ISO 3166-2 region codes for local-SEO geo meta
 * (geo.region / geo.placename / geo.position / ICBM) and LocalBusiness geo.
 *
 * Single source of truth — consumed by metadata-factory (geo meta) and by
 * the city page (LocalBusiness GeoCoordinates). Adding a city here automatically
 * gives it accurate geo meta tags + schema coordinates across every template
 * that resolves a city name through this map.
 *
 * region: ISO 3166-2 subdivision code (e.g. 'IN-UP' = Uttar Pradesh).
 * Only emitted when present; cities without a known region still get
 * placename + coordinates.
 */
export const CITY_GEO_COORDS = {
  'Delhi':       { lat: 28.6139, lng: 77.2090, region: 'IN-DL' },
  'Jaipur':      { lat: 26.9124, lng: 75.7873, region: 'IN-RJ' },
  'Agra':        { lat: 27.1767, lng: 78.0081, region: 'IN-UP' },
  'Chandigarh':  { lat: 30.7333, lng: 76.7794, region: 'IN-CH' },
  'Shimla':      { lat: 31.1048, lng: 77.1734, region: 'IN-HP' },
  'Manali':      { lat: 32.2396, lng: 77.1887, region: 'IN-HP' },
  'Amritsar':    { lat: 31.6340, lng: 74.8723, region: 'IN-PB' },
  'Haridwar':    { lat: 29.9457, lng: 78.1642, region: 'IN-UT' },
  'Rishikesh':   { lat: 30.0869, lng: 78.2676, region: 'IN-UT' },
  'Dehradun':    { lat: 30.3165, lng: 78.0322, region: 'IN-UT' },
  'Udaipur':     { lat: 24.5854, lng: 73.7125, region: 'IN-RJ' },
  'Jodhpur':     { lat: 26.2389, lng: 73.0243, region: 'IN-RJ' },
  'Varanasi':    { lat: 25.3176, lng: 82.9739, region: 'IN-UP' },
  'Lucknow':     { lat: 26.8467, lng: 80.9462, region: 'IN-UP' },
  'Ayodhya':     { lat: 26.7922, lng: 82.1998, region: 'IN-UP' },
  'Ahmedabad':   { lat: 23.0225, lng: 72.5714, region: 'IN-GJ' },
  'Mathura':     { lat: 27.4924, lng: 77.6737, region: 'IN-UP' },
  'Nainital':    { lat: 29.3803, lng: 79.4636, region: 'IN-UT' },
  'Mussoorie':   { lat: 30.4598, lng: 78.0644, region: 'IN-UT' },
  'Jim Corbett': { lat: 29.5300, lng: 78.7747, region: 'IN-UT' },
  'Pushkar':     { lat: 26.4899, lng: 74.5511, region: 'IN-RJ' },
  'Ajmer':       { lat: 26.4499, lng: 74.6399, region: 'IN-RJ' },
  'Mount Abu':   { lat: 24.5926, lng: 72.7156, region: 'IN-RJ' },
  'Bikaner':     { lat: 28.0229, lng: 73.3119, region: 'IN-RJ' },
  'Jaisalmer':   { lat: 26.9157, lng: 70.9083, region: 'IN-RJ' },
  'Ranthambore': { lat: 26.0173, lng: 76.5026, region: 'IN-RJ' },
  'Dharamshala': { lat: 32.2190, lng: 76.3234, region: 'IN-HP' },
  'Noida':       { lat: 28.5355, lng: 77.3910, region: 'IN-UP' },
  'Gurgaon':     { lat: 28.4595, lng: 77.0266, region: 'IN-HR' },
  'Ghaziabad':   { lat: 28.6692, lng: 77.4538, region: 'IN-UP' },
};

// Available vehicle types
export const VEHICLE_TYPES = [
  { type: 'Sedan', seats: 4, examples: 'Dzire, Etios, Honda City' },
  { type: 'SUV', seats: 6, examples: 'Innova, Crysta, Ertiga' },
  { type: 'Luxury', seats: 4, examples: 'BMW, Mercedes, Audi' },
  { type: 'Tempo Traveller', seats: 12, examples: 'Force Traveller' },
  { type: 'Mini Bus', seats: 20, examples: 'Mini Coach' },
  { type: 'Bus', seats: 40, examples: 'Luxury Coach' }
];

// Default FAQs for different page types
export const DEFAULT_FAQ_COUNT = {
  route: 8,
  tour: 6,
  city: 5,
  airport: 6,
  corporate: 5,
  wedding: 5
};

export default {
  COMPANY_INFO,
  BASE_URL,
  SITE_CONFIG,
  PRICING,
  PAGE_TYPES,
  AGGREGATE_RATING,
  SERVICE_AREAS,
  VEHICLE_TYPES,
  DEFAULT_FAQ_COUNT
};
