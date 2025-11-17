import ServicesClient from './ServicesClient';

export const metadata = {
  title: "Premium Cab Services Across India | Local, Outstation & Airport Transfers - Triveni Cabs",
  description: "Explore our comprehensive cab services: city rides, outstation tours, airport transfers, wedding cars, corporate travel & tempo traveller rentals. Professional drivers, modern fleet, 24/7 service across 50+ cities. Book your perfect ride today!",
  keywords: [
    // Primary Service Keywords
    'cab services India',
    'taxi services',
    'car rental services',
    'professional cab service',
    'online taxi booking',
    'cab booking services',

    // Service Type Keywords
    'local cab service',
    'outstation cab service',
    'airport taxi service',
    'corporate cab service',
    'wedding car rental',
    'tempo traveller rental',
    'group travel service',
    'sightseeing taxi service',

    // Location-Based Keywords
    'Delhi cab service',
    'Agra taxi service',
    'Jaipur cab booking',
    'Chandigarh taxi service',
    'Shimla cab rental',
    'Manali taxi booking',

    // Vehicle Type Keywords
    'sedan cab service',
    'SUV rental service',
    'luxury car rental',
    'economy cab service',
    'mini bus rental',
    '12 seater tempo traveller',
    '17 seater tempo hire',

    // Feature Keywords
    '24/7 cab service',
    'GPS tracked cabs',
    'verified driver service',
    'instant cab booking',
    'affordable taxi service',
    'reliable cab service',
    'safe taxi service',
    'professional chauffeur service',

    // Occasion Keywords
    'wedding transportation service',
    'airport transfer service',
    'corporate travel solutions',
    'holiday tour packages',
    'pilgrimage tour service',

    // Long-tail Keywords
    'best cab service in India',
    'cheap taxi booking online',
    'outstation cab booking with driver',
    'airport pickup and drop service',
    'one way cab service',
    'round trip taxi booking',
    'intercity cab service',
    'local sightseeing packages'
  ].join(', '),
  alternates: {
    canonical: 'https://trivenicabs.in/services'
  },
  openGraph: {
    title: 'Premium Cab Services Across India | Triveni Cabs',
    description: 'From daily commutes to dream vacations - we have got the perfect ride for every journey. Professional drivers, modern vehicles & unbeatable service across India.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Triveni Cabs',
    url: 'https://trivenicabs.in/services',
    images: [
      {
        url: '/images/about/about_banner.webp',
        width: 1200,
        height: 630,
        alt: 'Triveni Cabs Premium Services - Professional Taxi and Car Rental Across India'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Every Journey, Every Need - One Perfect Ride 🚗',
    description: 'Local rides • Outstation tours • Airport transfers • Wedding cars • Corporate travel. Your complete cab service partner across India!',
    images: ['/images/about/about_banner.webp'],
    creator: '@TriveniCabs',
    site: '@TriveniCabs'
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function ServicesPage() {
  // Comprehensive Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Transportation Services",
    "name": "Premium Cab Services Across India",
    "description": "Comprehensive cab services including city rides, outstation tours, airport transfers, wedding cars, corporate travel & tempo traveller rentals. Professional drivers, modern fleet, 24/7 service.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "email": "info@trivenicabs.in",
      "url": "https://trivenicabs.in"
    },
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1250",
      "bestRating": "5",
      "worstRating": "1"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Complete Cab Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local Cab Service",
            "description": "City rides and local transportation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Outstation Cab Service",
            "description": "Intercity and outstation travel with professional drivers"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Airport Transfer Service",
            "description": "Airport pickup and drop services 24/7"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Wedding Car Rental",
            "description": "Luxury cars for weddings and special occasions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Travel",
            "description": "Corporate cab solutions for businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tempo Traveller Rental",
            "description": "12-26 seater vehicles for group travel"
          }
        }
      ]
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://trivenicabs.in/services",
      "servicePhone": "+91-7668570551",
      "availableLanguage": ["English", "Hindi"]
    },
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicesClient />
    </>
  );
}
