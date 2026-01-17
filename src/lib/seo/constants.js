/**
 * SEO Constants - Centralized company information and configuration
 * Used across all SEO-related utilities for consistent branding
 */

export const COMPANY_INFO = {
  name: 'Triveni Cabs',
  legalName: 'Triveni Cabs Private Limited',
  founder: 'Triveni Cabs Team',
  foundingDate: '2018',
  slogan: 'Your Journey, Our Priority',
  description: 'Premium taxi and cab service provider across North India offering reliable transportation for sightseeing tours, airport transfers, corporate travel, and wedding events.',

  // Contact Information
  phone: {
    primary: '+91-9876543210',
    display: '9876543210',
    whatsapp: '+919876543210'
  },
  email: {
    primary: 'info@trivenicabs.in',
    support: 'support@trivenicabs.in',
    bookings: 'bookings@trivenicabs.in'
  },

  // Physical Address
  address: {
    streetAddress: 'Sector 22',
    addressLocality: 'Chandigarh',
    addressRegion: 'Chandigarh',
    postalCode: '160022',
    addressCountry: 'IN'
  },

  // Geographic Coverage
  geo: {
    latitude: 30.7333,
    longitude: 76.7794
  },

  // Social Media
  social: {
    facebook: 'https://www.facebook.com/trivenicabs',
    instagram: 'https://www.instagram.com/trivenicabs',
    twitter: 'https://twitter.com/TriveniCabs',
    linkedin: 'https://www.linkedin.com/company/triveni-cabs'
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
  logoUrl: '/images/logo.png'
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
    titleSuffix: '| 24/7 Taxi',
    keywordPrefix: 'cab, taxi, hire,'
  },
  tour: {
    titleSuffix: '| Book Now',
    keywordPrefix: 'tour, sightseeing, travel,'
  },
  cityHub: {
    titleSuffix: '| Triveni Cabs',
    keywordPrefix: 'taxi service, cab booking,'
  },
  airport: {
    titleSuffix: '| Flight Tracking',
    keywordPrefix: 'airport taxi, airport transfer,'
  },
  blog: {
    titleSuffix: '| Travel Guide | Triveni Cabs',
    keywordPrefix: 'travel guide, travel tips,'
  },
  corporate: {
    titleSuffix: '| Corporate Taxi',
    keywordPrefix: 'corporate transport, employee shuttle,'
  },
  wedding: {
    titleSuffix: '| Wedding Cars',
    keywordPrefix: 'wedding car, bridal car,'
  },
  event: {
    titleSuffix: '| Event Transport',
    keywordPrefix: 'event transportation, group travel,'
  }
};

// Aggregate rating for schema
export const AGGREGATE_RATING = {
  ratingValue: 4.8,
  reviewCount: 2500,
  bestRating: 5,
  worstRating: 1
};

// Service areas
export const SERVICE_AREAS = [
  'Delhi', 'Jaipur', 'Agra', 'Chandigarh', 'Amritsar',
  'Dehradun', 'Haridwar', 'Rishikesh', 'Shimla', 'Manali',
  'Udaipur', 'Jodhpur', 'Ahmedabad', 'Varanasi', 'Lucknow'
];

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
