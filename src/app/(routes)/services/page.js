import ServicesClient from './ServicesClient';

export const metadata = {
  title: 'Cab Services India 2026 | Outstation from ₹11/km | 50+ Cities | Book Now',
  description: 'Book cabs across India: Outstation ₹11/km, Airport ₹1,500+, Wedding cars ₹15,000+, Tempo ₹23/km. 10,000+ rides completed. 50+ cities. 24/7 support. Call 7668570551.',
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
    canonical: 'https://www.trivenicabs.in/services'
  },
  openGraph: {
    title: 'Premium Cab Services Across India | Triveni Cabs',
    description: 'From daily commutes to dream vacations - we have got the perfect ride for every journey. Professional drivers, modern vehicles & unbeatable service across India.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Triveni Cabs',
    url: 'https://www.trivenicabs.in/services',
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
  // Breadcrumb Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.trivenicabs.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://www.trivenicabs.in/services"
      }
    ]
  };

  // FAQ Schema for Services Page
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What cab services does Triveni Cabs offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Triveni Cabs offers a comprehensive range of services including local city rides, outstation cab service, airport transfers, wedding car rentals, corporate travel solutions, tempo traveller rentals (12-26 seater), and luxury bus services (22-56 seater). All services are available 24/7 with professional drivers."
        }
      },
      {
        "@type": "Question",
        "name": "What are the rates for different vehicle types?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our rates are transparent and competitive: Sedan starts at ₹11/km, SUV at ₹15/km, Tempo Traveller at ₹24/km. Luxury buses and wedding cars have customized packages. All rates include professional driver, AC, and GPS tracking. No hidden charges."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide airport pickup and drop services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide 24/7 airport transfer services at all major airports across India including Delhi IGI, Mumbai, Jaipur, Lucknow, Chandigarh, and more. Our drivers track flight timings for timely pickup, and we offer meet & greet services."
        }
      },
      {
        "@type": "Question",
        "name": "Can I book a cab for a wedding or special event?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! We offer premium wedding car rentals including luxury brands like BMW, Audi, and Mercedes. We also provide Baraat services with tempo travellers (9-26 seater), car decoration, and professional chauffeurs. Book in advance for best availability."
        }
      },
      {
        "@type": "Question",
        "name": "What is the booking process for Triveni Cabs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Booking is simple! You can book online through our website, call us at 7668570551, or send a WhatsApp message. Provide your pickup location, destination, date, time, and vehicle preference. We confirm your booking instantly with driver details."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer one-way and round trip options?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer flexible booking options including one-way trips, round trips, multi-day packages, and hourly rentals. One-way fares are calculated at per km rates without return charges on popular routes like Delhi-Agra, Delhi-Jaipur, and more."
        }
      }
    ]
  };

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
      "email": "cabstriveni@gmail.com",
      "url": "https://www.trivenicabs.in"
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
      "serviceUrl": "https://www.trivenicabs.in/services",
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <ServicesClient />
    </>
  );
}
