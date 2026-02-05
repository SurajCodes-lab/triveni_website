/**
 * SEO Constants - Centralized company information and configuration
 * Used across all SEO-related utilities for consistent branding
 */

export const COMPANY_INFO = {
  name: 'Triveni Cabs',
  legalName: 'Triveni Cabs Private Limited',
  founder: 'Pankaj Singh Gaur',
  foundingDate: '2018',
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
    instagram: 'https://www.instagram.com/cabstriveni?igsh=YzlzYmZsZjZ5bnlo',
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
  ratingValue: 4.8,
  reviewCount: 2500,
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
