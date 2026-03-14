// src/app/routes/page.js

import { cityRoutesData, basicCityRoutes } from '@/utilis/cityRoutesData';
import { vehiclesServices } from '@/utilis/data';
import { tempoFleet } from '@/utilis/tempoTravellerData';
import { busFleet } from '@/utilis/busRoutesData';
import CityRoutesMainClient from '@/components/CityRoutesMainClient';
import Script from 'next/script';

export const revalidate = false;

export const metadata = {
  title: 'Outstation Cab Routes 2026 | Delhi to Agra ₹3K | 500+ Destinations',
  description: 'Book outstation cabs from Delhi: Agra ₹3K, Jaipur ₹4.5K, Shimla ₹6K, Manali ₹8K. One-way & round trips. ₹11-15/km. 10,000+ trips done. Call 7668570551.',
  keywords: 'outstation cab service, taxi booking India, Delhi to Agra cab, Delhi to Jaipur taxi, Delhi to Shimla cab, Chandigarh to Manali taxi, intercity cab service, long distance taxi, car rental India, outstation taxi booking, one way cab, round trip taxi, Delhi taxi service, Jaipur cab booking, Agra taxi service, Shimla cab hire, Manali taxi booking, Haridwar cab service, Rishikesh taxi, Amritsar cab booking, Udaipur taxi service, Jodhpur cab hire, affordable taxi service, premium cab rental, online taxi booking, instant cab booking, 24/7 taxi service, professional drivers, AC cabs, GPS tracking taxi, safe taxi service, comfortable cab journey, family taxi service, group cab booking, corporate taxi rental, wedding cab service, airport taxi transfer, railway station cab, hill station taxi, pilgrimage cab service, tourist taxi booking, sightseeing cab rental, multi-city taxi tour, North India cab routes, Rajasthan taxi service, Himachal taxi booking, Uttarakhand cab service, Uttar Pradesh taxi, Punjab cab service, Haryana taxi booking, best taxi service India, reliable cab company, trusted taxi provider, cheap cab rates, budget taxi service, luxury cab rental, tempo traveller booking, SUV taxi hire, sedan cab service, innova crysta rental, ertiga cab booking, Delhi NCR taxi, Gurgaon cab service, Noida taxi booking, Faridabad cab hire, Golden Triangle tour taxi, char dham taxi service, heritage tour cab, adventure tour taxi, weekend getaway cab, holiday taxi booking, vacation cab rental, summer tour taxi, winter trip cab, monsoon travel taxi, Delhi to Agra same day, Delhi to Jaipur one way, Delhi to Haridwar round trip, Delhi to Shimla cab fare, Delhi to Manali taxi charges, Chandigarh to Shimla cab, Chandigarh to Manali taxi, Jaipur to Udaipur cab, Jaipur to Jodhpur taxi, Agra to Jaipur cab service',
  alternates: {
    canonical: 'https://www.trivenicabs.in/routes'
  },
  openGraph: {
    title: 'Book Outstation Cabs to 500+ Destinations Across India | Triveni Cabs',
    description: '🚗 Professional taxi service for all destinations. Delhi, Jaipur, Agra, Shimla, Manali, Haridwar & more. Transparent pricing, verified drivers, 24x7 booking. Book now!',
    url: 'https://www.trivenicabs.in/routes',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Triveni Cabs',
    images: [
      {
        url: 'https://www.trivenicabs.in/images/citypage_hero_section_image.jpg',
        width: 1200,
        height: 630,
        alt: 'Outstation Taxi Routes - Triveni Cabs',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Explore 500+ Taxi Routes Across India | Triveni Cabs',
    description: '🚗 Professional outstation cab service. Delhi • Jaipur • Agra • Shimla • Manali. Book online now!',
    images: ['https://www.trivenicabs.in/images/citypage_hero_section_image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [{ name: 'Triveni Cabs - Outstation Taxi Services' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs India',
};

export default function RoutesPage() {
  // Combine all route data
  const allCityRoutes = {
    ...cityRoutesData,
    ...basicCityRoutes
  };

  // Prepare data on server side for SEO
  const getAllRoutes = () => {
    const routes = [];
    Object.entries(allCityRoutes).forEach(([origin, destinations]) => {
      if (Array.isArray(destinations)) {
        destinations.forEach(dest => {
          if (dest && dest.destination) {
            routes.push({
              origin,
              destination: dest.destination,
              distance: dest.distance || 'N/A',
              time: dest.time || 'N/A',
              tags: dest.tags || [],
              price: dest.prices?.[0]?.price || null,
              slug: `${origin.toLowerCase().replace(/\s+/g, '-')}-to-${dest.destination.toLowerCase().replace(/\s+/g, '-')}`
            });
          }
        });
      }
    });
    return routes;
  };

  const getPopularRoutes = () => {
    const routes = getAllRoutes();
    // Return first 12 routes as popular (prioritize Delhi routes)
    const delhiRoutes = routes.filter(r => r.origin === 'Delhi').slice(0, 8);
    const otherRoutes = routes.filter(r => r.origin !== 'Delhi').slice(0, 4);
    return [...delhiRoutes, ...otherRoutes];
  };

  const pageData = {
    popularRoutes: getPopularRoutes(),
    allRoutes: getAllRoutes(),
    cities: Object.keys(allCityRoutes).sort(),
    vehicles: vehiclesServices,
    tempoFleet: tempoFleet,
    busFleet: busFleet
  };

  // JSON-LD Structured Data for Taxi Service
  const taxiServiceSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Triveni Cabs Outstation Taxi Service",
    "description": "Professional outstation taxi service covering 500+ destinations across India with comfortable vehicles, experienced drivers, and transparent pricing",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "email": "cabstriveni@gmail.com",
      "url": "https://www.trivenicabs.in",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    },
    "serviceType": ["Outstation Taxi", "Intercity Cab Service", "Long Distance Taxi", "One Way Cab", "Round Trip Taxi", "Airport Transfer", "Corporate Taxi Service", "Tour Taxi Service"],
    "areaServed": [
      {"@type": "City", "name": "Delhi"},
      {"@type": "City", "name": "Jaipur"},
      {"@type": "City", "name": "Agra"},
      {"@type": "City", "name": "Chandigarh"},
      {"@type": "City", "name": "Shimla"},
      {"@type": "City", "name": "Manali"},
      {"@type": "City", "name": "Haridwar"},
      {"@type": "City", "name": "Rishikesh"},
      {"@type": "City", "name": "Amritsar"},
      {"@type": "City", "name": "Udaipur"},
      {"@type": "City", "name": "Jodhpur"},
      {"@type": "City", "name": "Dehradun"},
      {"@type": "State", "name": "Delhi"},
      {"@type": "State", "name": "Rajasthan"},
      {"@type": "State", "name": "Uttar Pradesh"},
      {"@type": "State", "name": "Himachal Pradesh"},
      {"@type": "State", "name": "Uttarakhand"},
      {"@type": "State", "name": "Punjab"},
      {"@type": "State", "name": "Haryana"}
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "Sedan Taxi Service",
        "description": "Comfortable sedan taxi for 4 passengers - Perfect for couples and small families",
        "priceCurrency": "INR",
        "price": "12",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "priceCurrency": "INR",
          "price": "12",
          "unitText": "per kilometer"
        },
        "itemOffered": {
          "@type": "Service",
          "name": "Sedan Taxi",
          "serviceType": "Taxi Service"
        },
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "SUV Ertiga Taxi Service",
        "description": "Spacious SUV Ertiga for 6 passengers - Ideal for family trips",
        "priceCurrency": "INR",
        "price": "15",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "priceCurrency": "INR",
          "price": "15",
          "unitText": "per kilometer"
        },
        "itemOffered": {
          "@type": "Service",
          "name": "SUV Ertiga Taxi",
          "serviceType": "Taxi Service"
        },
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "SUV Innova Taxi Service",
        "description": "Premium SUV Innova for 7 passengers - Luxury travel experience",
        "priceCurrency": "INR",
        "price": "18",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "priceCurrency": "INR",
          "price": "18",
          "unitText": "per kilometer"
        },
        "itemOffered": {
          "@type": "Service",
          "name": "SUV Innova Taxi",
          "serviceType": "Taxi Service"
        },
        "availability": "https://schema.org/InStock"
      },
      {
        "@type": "Offer",
        "name": "Tempo Traveller Rental",
        "description": "12-17 seater Tempo Traveller for groups - Perfect for group tours",
        "priceCurrency": "INR",
        "price": "23",
        "priceSpecification": {
          "@type": "UnitPriceSpecification",
          "priceCurrency": "INR",
          "price": "23",
          "unitText": "per kilometer"
        },
        "itemOffered": {
          "@type": "Service",
          "name": "Tempo Traveller",
          "serviceType": "Taxi Service"
        },
        "availability": "https://schema.org/InStock"
      }
    ]
  };

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
        "name": "Taxi Routes",
        "item": "https://www.trivenicabs.in/routes"
      }
    ]
  };

  const routesListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Popular Outstation Taxi Routes in India",
    "description": "Most popular intercity taxi routes across North India",
    "numberOfItems": getAllRoutes().length,
    "itemListElement": getAllRoutes().slice(0, 50).map((route, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "TravelAction",
        "name": `${route.origin} to ${route.destination} Taxi Service`,
        "description": `Professional taxi service from ${route.origin} to ${route.destination} - ${route.distance}, ${route.time}`,
        "fromLocation": {
          "@type": "Place",
          "name": route.origin
        },
        "toLocation": {
          "@type": "Place",
          "name": route.destination
        },
        "distance": route.distance,
        "duration": route.time
      }
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What are the popular outstation taxi routes from Delhi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Popular outstation routes from Delhi include: Delhi to Agra (230km), Delhi to Jaipur (280km), Delhi to Haridwar (240km), Delhi to Shimla (350km), Delhi to Manali (540km), Delhi to Amritsar (450km), Delhi to Chandigarh (260km), and Delhi to Rishikesh. We cover all major tourist, pilgrimage, and business destinations."
        }
      },
      {
        "@type": "Question",
        "name": "What types of vehicles are available for outstation trips?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer Sedan (4 passengers) at ₹12/km, SUV Ertiga (6 passengers) at ₹15/km, SUV Innova (7 passengers) at ₹18/km, and Tempo Traveller (12-17 passengers) at ₹23-26/km. All vehicles are AC equipped with GPS tracking and professional drivers."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide one-way taxi service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide both one-way and round trip taxi services for all outstation routes. One-way taxi is charged at regular per km rates without return charges for popular routes. Round trip packages offer better value for money."
        }
      },
      {
        "@type": "Question",
        "name": "What are the taxi charges for outstation trips?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Outstation taxi charges vary by vehicle type: Sedan ₹12/km, SUV Ertiga ₹15/km, SUV Innova ₹18/km, Tempo Traveller ₹23-26/km. Additional charges include driver allowance ₹400-500/day, toll taxes, parking fees, and state permit charges. Night charges (10pm-6am) may apply."
        }
      },
      {
        "@type": "Question",
        "name": "How can I book an outstation cab?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can book instantly by calling +91-7668570551, WhatsApp at +91-7668570551, or through our website. We require pickup location, drop location, date, time, and number of passengers. Advance booking recommended for peak season and long distance trips."
        }
      },
      {
        "@type": "Question",
        "name": "What is included in the taxi fare?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Taxi fare includes: vehicle rental as per km, fuel charges, professional driver, GPS tracking, and 24/7 customer support. Excludes: toll charges, parking fees, state permit charges, driver night charges (if applicable), and extra km beyond package limit."
        }
      },
      {
        "@type": "Question",
        "name": "Are the drivers experienced for long distance trips?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all our drivers are experienced professionals with valid licenses and clean driving records. They are well-versed with routes, highways, and hill station driving. Background verified and trained for customer service and safety protocols."
        }
      },
      {
        "@type": "Question",
        "name": "Can I modify or cancel my booking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, bookings can be modified up to 24 hours before the trip without charges. Cancellation policy: Free cancellation 48 hours before trip, 50% charge if cancelled 24-48 hours before, and 100% charge if cancelled within 24 hours of trip."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="taxi-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(taxiServiceSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="routes-list-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(routesListSchema) }}
        strategy="beforeInteractive"
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="beforeInteractive"
      />
      <CityRoutesMainClient data={pageData} />
    </>
  );
}
