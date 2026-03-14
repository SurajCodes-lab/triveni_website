// src/app/bus-routes/page.js

import { busFleet, busRoutes } from '@/utilis/busRoutesData';
import BusMainClient from '@/components/BusMainClient';

export const revalidate = false;

export const metadata = {
  metadataBase: new URL('https://www.trivenicabs.in'),
  title: 'Luxury Bus Hire 2026 | 22-56 Seater Volvo from ₹35/km | Book Now',
  description: 'Hire luxury buses from Delhi: 22 seater ₹35/km, 35 seater ₹45/km, 56 seater Volvo ₹55/km. Perfect for weddings, corporate, pilgrimages. AC + entertainment. Call 7668570551.',
  alternates: {
    canonical: 'https://www.trivenicabs.in/bus-routes'
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FACF2D' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Triveni Cabs Bus Rental'
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true
  },
  openGraph: {
    title: 'Big Groups, Bigger Adventures! Luxury Bus Hire 22-56 Seater | Triveni Cabs',
    description: '🚌 22-56 seater Volvo & AC buses | Corporate • Weddings • Tours • Perfect for large groups. GPS tracking, professional drivers, reclining seats, entertainment systems. Book now!',
    url: 'https://www.trivenicabs.in/bus-routes',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Triveni Cabs',
    images: [
      {
        url: 'https://www.trivenicabs.in/images/bus/hero_section_image.webp',
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
    images: ['https://www.trivenicabs.in/images/bus/hero_section_image.webp']
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
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'geo.region': 'IN-DL',
    'geo.placename': 'Delhi',
    'geo.position': '28.6139;77.2090',
    'ICBM': '28.6139, 77.2090',
  }
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
      "email": "cabstriveni@gmail.com",
      "url": "https://www.trivenicabs.in",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    },
    "serviceType": ["Bus Rental", "Coach Hire", "Group Transportation", "Corporate Bus Service", "Wedding Bus Service", "Pilgrimage Bus", "Tour Bus Service"],
    "areaServed": [
      { "@type": "City", "name": "Delhi" },
      { "@type": "City", "name": "Mumbai" },
      { "@type": "City", "name": "Jaipur" },
      { "@type": "City", "name": "Agra" },
      { "@type": "City", "name": "Chandigarh" },
      { "@type": "City", "name": "Haridwar" },
      { "@type": "City", "name": "Udaipur" },
      { "@type": "City", "name": "Jodhpur" },
      { "@type": "City", "name": "Jaisalmer" },
      { "@type": "State", "name": "Delhi" },
      { "@type": "State", "name": "Rajasthan" },
      { "@type": "State", "name": "Uttar Pradesh" },
      { "@type": "State", "name": "Himachal Pradesh" },
      { "@type": "State", "name": "Uttarakhand" },
      { "@type": "State", "name": "Punjab" },
      { "@type": "State", "name": "Haryana" },
      { "@type": "State", "name": "Maharashtra" },
      { "@type": "State", "name": "Gujarat" }
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
        "item": "https://www.trivenicabs.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Bus Routes",
        "item": "https://www.trivenicabs.in/bus-routes"
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
      },
      {
        "@type": "Question",
        "name": "What is the cancellation policy for bus bookings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cancellations made 48 hours before the trip receive full refund. Cancellations within 24-48 hours receive 50% refund. No refund for cancellations within 24 hours of trip. Terms may vary for peak season and special events."
        }
      },
      {
        "@type": "Question",
        "name": "Are night charges applicable for bus rentals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, night charges apply for travel between 10 PM to 6 AM. Driver allowance increases by ₹200-300 for overnight journeys. Multi-day trips include driver accommodation and meals as per standard industry practice."
        }
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Triveni Cabs",
    "url": "https://www.trivenicabs.in",
    "logo": "https://www.trivenicabs.in/logo.png",
    "description": "Premium bus rental and cab services across India. Luxury buses from 22 to 56 seater for corporate events, weddings, tours, and group travel.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7668570551",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"],
      "contactOption": "TollFree"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Delhi"
    },
    "sameAs": [
      "https://facebook.com/trivenicabs",
      "https://twitter.com/trivenicabs",
      "https://www.instagram.com/cabstriveni?igsh=YzlzYmZsZjZ5bnlo"
    ]
  };

  const howToBookSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Book a Luxury Bus Rental with Triveni Cabs",
    "description": "Simple 4-step process to book luxury buses from 22 to 56 seater for group travel across India",
    "totalTime": "PT5M",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "name": "Select Your Bus Size",
        "text": "Choose from our fleet of 22, 25, 27, 32, 35, 41, 45, 49, 52, or 56 seater luxury buses based on your group size and requirements.",
        "image": "https://www.trivenicabs.in/images/bus/fleet.png"
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "name": "Contact Us",
        "text": "Call +91-7668570551 or WhatsApp us for instant booking. Our team is available 24/7 to assist you.",
        "image": "https://www.trivenicabs.in/images/contact.png"
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "name": "Provide Travel Details",
        "text": "Share your travel date, pickup location, destination, number of passengers, and any special requirements.",
        "image": "https://www.trivenicabs.in/images/booking.png"
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "name": "Get Instant Confirmation",
        "text": "Receive booking confirmation with bus details, driver information, and trip itinerary via SMS and email.",
        "image": "https://www.trivenicabs.in/images/confirmation.png"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([
          busServiceSchema,
          breadcrumbSchema,
          routesListSchema,
          faqSchema,
          organizationSchema,
          howToBookSchema
        ]) }}
      />
      <BusMainClient data={pageData} />
    </>
  );
}
