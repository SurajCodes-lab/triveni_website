// src/app/bus-routes/page.js

import { busFleet, busRoutes } from '@/utilis/busRoutesData';
import BusMainClient from '@/components/BusMainClient';
import Script from 'next/script';

export const metadata = {
  title: 'Big Groups, Bigger Adventures! Luxury Bus Hire 22-56 Seater | Triveni Cabs',
  description: '🚌 Roll in style with luxury coaches! From 22 to 56 seater Volvo & AC buses perfect for corporate events, weddings, school tours & pilgrimages. Reclining seats, entertainment, spacious luggage. Delhi to anywhere in India. Your group, our comfort commitment!',
  keywords: 'bus rental India, luxury bus hire, volvo bus rental, 22 seater bus, 25 seater bus, 27 seater bus, 32 seater bus, 35 seater bus, 41 seater bus, 45 seater bus, 49 seater bus, 52 seater bus, 56 seater bus, corporate bus rental, wedding bus, school bus hire, pilgrimage bus, AC bus rental, group tour bus, charter bus service, long distance bus rental, bus booking online, bus hire near me, luxury coach rental, mini bus rental, volvo bus booking, tourist bus rental, event bus rental, party bus rental, conference bus service, employee transportation, group transportation services, intercity bus rental, outstation bus booking, bus charter services India, premium bus hire, air conditioned bus rental, pushback seat bus, reclining seat bus, entertainment bus, GPS bus tracking, professional bus drivers, 24/7 bus service, budget bus rental, cheap bus hire, best bus rental company, reliable bus service, comfortable bus journey, spacious bus rental, family bus hire, friends group bus, college trip bus, school excursion bus, corporate outing bus, destination wedding bus, baraat bus rental, temple tour bus, religious tour bus, Chardham bus, pilgrimage bus service, Delhi bus rental, Mumbai bus hire, Jaipur bus booking, Agra bus service, Manali bus rental, Shimla bus hire, Amritsar bus booking, Haridwar bus rental, Rishikesh bus service, Udaipur bus hire, Jodhpur bus rental, Jaisalmer bus booking, heritage tour bus, wildlife tour bus, adventure tour bus, hill station bus rental, beach tour bus, sightseeing bus hire, multi-city bus tour, round trip bus rental, one way bus hire, hourly bus rental, full day bus booking, multi-day bus rental, weekend bus hire, holiday bus rental, festival tour bus, summer vacation bus, winter tour bus, monsoon travel bus, Delhi to Agra bus, Delhi to Jaipur bus, Delhi to Shimla bus, Delhi to Manali bus, Delhi to Amritsar bus, Delhi to Haridwar bus, Delhi to Rishikesh bus, Mumbai to Goa bus, Mumbai to Pune bus, Jaipur to Udaipur bus, bus on rent, bus for rent, hire a bus, book a bus, rent a bus, bus rental rates, bus hire prices, bus booking charges, affordable bus rental, economical bus hire, value bus service, transparent bus pricing, no hidden charges bus, instant bus booking, online bus reservation, same day bus rental, advance bus booking, customized bus tour, personalized bus service, flexible bus rental, tailored bus packages, bus rental with driver, chauffeur driven bus, experienced bus drivers, verified bus operators, licensed bus service, insured bus rental, safe bus travel, secure bus journey, sanitized bus rental, clean bus service, hygienic bus travel, COVID safe bus, contactless bus booking, digital payment bus, UPI bus payment, card payment accepted, easy cancellation bus, flexible booking policy, customer support 24/7, dedicated bus coordinator, trip planning assistance, route planning bus, itinerary customization, stopover arrangements, accommodation booking help, sightseeing arrangements, guide services available, ticket booking assistance, complete tour packages, end-to-end bus solutions',
  alternates: {
    canonical: 'https://trivenicabs.in/bus-routes'
  },
  openGraph: {
    title: 'Big Groups, Bigger Adventures! Luxury Bus Hire 22-56 Seater | Triveni Cabs',
    description: '🚌 22-56 seater Volvo & AC buses | Corporate • Weddings • Tours • Perfect for large groups. GPS tracking, professional drivers, reclining seats, entertainment systems. Book now!',
    url: 'https://trivenicabs.in/bus-routes',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Triveni Cabs',
    images: [
      {
        url: 'https://trivenicabs.in/images/bus/45_SEATER_BUS.jpg',
        width: 1200,
        height: 630,
        alt: 'Luxury Bus Rental Services - Triveni Cabs',
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Bus Hire for Groups | 22-56 Seater | Triveni Cabs',
    description: '🚌 Volvo comfort • Reclining seats • Entertainment. Big groups travel better together! Book online now.',
    images: ['https://trivenicabs.in/images/bus/45_SEATER_BUS.jpg']
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
  authors: [{ name: 'Triveni Cabs - Bus Rental Services' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs India',
};

export default function BusRoutesPage() {
  // Prepare data on server side for SEO
  const getAllRoutes = () => {
    const routes = [];
    Object.entries(busRoutes).forEach(([origin, destinations]) => {
      destinations.forEach(dest => {
        routes.push({
          origin,
          destination: dest.name,
          type: dest.type,
          distance: dest.distance,
          duration: dest.duration,
          slug: `${origin.toLowerCase().replace(/\s+/g, '-')}-to-${dest.name.toLowerCase().replace(/\s+/g, '-')}`
        });
      });
    });
    return routes;
  };

  const getPopularRoutes = () => {
    const routes = getAllRoutes();
    // Return first 8 routes as popular (Delhi routes)
    return routes.slice(0, 8);
  };

  const pageData = {
    popularRoutes: getPopularRoutes(),
    allRoutes: getAllRoutes(),
    fleet: busFleet,
    cities: Object.keys(busRoutes)
  };

  // JSON-LD Structured Data for Bus Service
  const busServiceSchema = {
    "@context": "https://schema.org",
    "@type": "BusOrCoach",
    "name": "Triveni Cabs Luxury Bus Rental Service",
    "description": "Premium luxury bus rental services from 22 to 56 seater Volvo and AC buses for corporate events, weddings, tours, and pilgrimages across India",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "email": "info@trivenicabs.in",
      "url": "https://trivenicabs.in",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    },
    "serviceType": ["Bus Rental", "Coach Hire", "Group Transportation", "Corporate Bus Service", "Wedding Bus Service", "Pilgrimage Bus", "Tour Bus Service"],
    "areaServed": [
      {"@type": "City", "name": "Delhi"},
      {"@type": "City", "name": "Mumbai"},
      {"@type": "City", "name": "Jaipur"},
      {"@type": "City", "name": "Agra"},
      {"@type": "City", "name": "Chandigarh"},
      {"@type": "City", "name": "Haridwar"},
      {"@type": "City", "name": "Udaipur"},
      {"@type": "City", "name": "Jodhpur"},
      {"@type": "City", "name": "Jaisalmer"},
      {"@type": "State", "name": "Delhi"},
      {"@type": "State", "name": "Rajasthan"},
      {"@type": "State", "name": "Uttar Pradesh"},
      {"@type": "State", "name": "Himachal Pradesh"},
      {"@type": "State", "name": "Uttarakhand"},
      {"@type": "State", "name": "Punjab"},
      {"@type": "State", "name": "Haryana"},
      {"@type": "State", "name": "Maharashtra"},
      {"@type": "State", "name": "Gujarat"}
    ],
    "offers": busFleet.map(bus => ({
      "@type": "Offer",
      "name": bus.name,
      "description": `${bus.capacity} ${bus.name} rental - ${bus.idealFor}`,
      "priceCurrency": "INR",
      "price": bus.ratePerKm.split('-')[0].replace('₹', '').trim(),
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "priceCurrency": "INR",
        "price": bus.ratePerKm.split('-')[0].replace('₹', '').trim(),
        "unitText": "per kilometer"
      },
      "itemOffered": {
        "@type": "Service",
        "name": bus.name,
        "serviceType": "Bus Rental",
        "category": bus.seaterType
      },
      "availability": "https://schema.org/InStock",
      "availableAtOrFrom": {
        "@type": "Place",
        "name": "India"
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://trivenicabs.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Bus Routes",
        "item": "https://trivenicabs.in/bus-routes"
      }
    ]
  };

  const routesListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Popular Bus Routes",
    "description": "Most popular luxury bus routes across India",
    "numberOfItems": getAllRoutes().length,
    "itemListElement": getAllRoutes().slice(0, 20).map((route, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "TravelAction",
        "name": `${route.origin} to ${route.destination} Bus Service`,
        "description": `Luxury bus service from ${route.origin} to ${route.destination} - ${route.distance}, ${route.duration}`,
        "fromLocation": {
          "@type": "Place",
          "name": route.origin
        },
        "toLocation": {
          "@type": "Place",
          "name": route.destination
        },
        "distance": route.distance,
        "duration": route.duration
      }
    }))
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What bus sizes are available for rental?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer luxury buses from 22 seater to 56 seater, including 22, 25, 27, 32, 35, 41, 45, 49, 52, and 56 seater options. All buses are AC equipped with pushback/reclining seats and entertainment systems."
        }
      },
      {
        "@type": "Question",
        "name": "Which cities do you provide bus rental services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide luxury bus rental services across India including Delhi, Mumbai, Jaipur, Agra, Chandigarh, Haridwar, Rishikesh, Shimla, Manali, Amritsar, Udaipur, Jodhpur, Jaisalmer, and many more cities. We cover all major tourist destinations, pilgrimage sites, and commercial hubs."
        }
      },
      {
        "@type": "Question",
        "name": "What are the bus rental rates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bus rental rates start from ₹30/km for 22 seater mini bus and go up to ₹65/km for 56 seater luxury Volvo bus. Rates vary based on bus size, route, duration, and season. Driver allowance is ₹800-1200 per day depending on the vehicle."
        }
      },
      {
        "@type": "Question",
        "name": "What amenities are included in the luxury bus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our luxury buses include AC, pushback/reclining seats, music/entertainment system, luggage space, curtains, reading lights, charging points, and some premium buses have TV, wifi, and washroom facilities. All buses are GPS tracked with professional drivers."
        }
      },
      {
        "@type": "Question",
        "name": "Can I book a bus for corporate events and weddings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we specialize in corporate bus rentals for conferences, team outings, and employee transportation. We also provide wedding buses for guest transfers, baraat, and destination weddings. Customized packages available with flexible booking."
        }
      },
      {
        "@type": "Question",
        "name": "How far in advance should I book a bus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend booking at least 7-15 days in advance for popular routes and peak season. However, we also accept same-day and next-day bookings subject to availability. For large groups and special events, advance booking of 1 month is advisable."
        }
      }
    ]
  };

  return (
    <>
      <Script
        id="bus-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(busServiceSchema) }}
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
      <BusMainClient data={pageData} />
    </>
  );
}
