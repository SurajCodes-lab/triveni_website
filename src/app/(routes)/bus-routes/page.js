// src/app/bus-routes/page.js

import { busFleet, busRoutes } from '@/utilis/busRoutesData';
import BusMainClient from '@/components/BusMainClient';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import { getArticleSchema, getSpeakableSchema, getComparisonSchema } from '@/lib/seo/speakable-helpers';

export const revalidate = 3600;

export const metadata = {
  metadataBase: new URL('https://www.trivenicabs.in'),
  title: 'Bus Hire India ₹35/km — 22-56 Seater AC 4.9★ | Book Now',
  description: '22-56 seater AC buses from ₹35/km. Weddings, corporate, pilgrimages. Reclining seats, GPS tracking. 4.9★ rated. Book in 2 min.',
  keywords: 'bus hire India, luxury bus rental, 22 seater bus, 35 seater Volvo, 45 seater AC bus, 56 seater coach, group travel bus, wedding bus rental, corporate bus service, pilgrimage bus, Triveni Cabs',
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
    title: 'Bus Hire India ₹35/km — 22-56 Seater Volvo AC for Groups',
    description: '22-56 seater AC buses from ₹35/km. Weddings, corporate, pilgrimages. Reclining seats, GPS tracking. 4.9★ rated. Book in 2 min.',
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
    title: 'Bus Hire India ₹35/km — 22-56 Seater AC 4.9★ | Book Now',
    description: '22-56 seater AC buses from ₹35/km. Weddings, corporate, pilgrimages. Reclining seats, GPS tracking. 4.9★ rated. Book in 2 min.',
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
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "description": "Premium luxury bus rental services from 22 to 56 seater Volvo and AC buses for corporate events, weddings, tours, and pilgrimages across India",
    ...getRatingAndReviews('bus-routes-hub', 'bus'),
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.trivenicabs.in/#organization",
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
    "speakable": getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.speakable-faq-first']),
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
      },
      {
        "@type": "Question",
        "name": "How many people can fit in a 35 seater vs a 45 seater bus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A 35 seater bus comfortably seats 35 passengers plus luggage and is ideal for medium wedding groups, school trips, and corporate teams. A 45 seater bus seats 45 passengers and suits larger pilgrimage groups and conferences. For groups of 50-56, choose the 52 or 56 seater luxury Volvo coach. For small groups of 12-26, a tempo traveller or 22 seater mini bus is more economical."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between a Volvo bus and a regular AC bus?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Volvo (or Scania) luxury coach has air-suspension for a smoother ride, push-back recliner seats, better insulation and quieter AC, and is best for long-distance and overnight journeys. A regular AC bus is more budget-friendly at ₹30-45/km and works well for shorter day trips and local group transfers. Volvo coaches cost ₹55-65/km but deliver premium comfort over 300+ km routes."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide buses for school trips and educational tours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our school-trip buses come with speed governors, first-aid kits, GPS tracking shared with the school, and experienced drivers verified for student transport. We provide 22 to 56 seater options for day picnics, educational tours, and inter-school events with teacher-coordinated pickup and drop."
        }
      },
      {
        "@type": "Question",
        "name": "Is a driver and fuel included in the bus rental price?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the per-km rate includes the bus, fuel, and a professional driver. Toll taxes, state permits, parking, and driver night allowance (₹800-1200/day) are charged extra at actuals. You receive a transparent quote before booking with all inclusions and exclusions listed clearly."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a GST invoice for a corporate bus booking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide a proper GST invoice for all corporate and business bus bookings, along with a single point of contact for multi-vehicle coordination. This makes Triveni Cabs ideal for company offsites, conferences, and employee transportation that require compliant billing and reimbursement."
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

  // Seater comparison rows — drive both the Comparison schema and the visible table
  const seaterComparison = [
    { size: '22 Seater Mini Bus', capacity: '22', bestFor: 'Small groups, family pilgrimage, hill routes', pricePerKm: '₹30-38/km', ac: 'AC' },
    { size: '35 Seater Bus', capacity: '35', bestFor: 'Wedding baraat, school trips, corporate teams', pricePerKm: '₹40-48/km', ac: 'AC' },
    { size: '45 Seater Bus', capacity: '45', bestFor: 'Large pilgrimage groups, college trips, events', pricePerKm: '₹48-58/km', ac: 'AC' },
    { size: '56 Seater Volvo Coach', capacity: '56', bestFor: 'Long-distance tours, conferences, big groups', pricePerKm: '₹55-65/km', ac: 'AC Volvo' },
  ];

  // Article schema — editorial entity for AEO/GEO + freshness signal, Speakable wired to hero + lead + first FAQ.
  const articleSchema = getArticleSchema({
    slug: 'bus-routes',
    headline: 'Bus Hire in India (2026) — 22 to 56 Seater AC Coach Rental Fares, Sizes & Booking Guide',
    description: 'Complete guide to renting a bus in India: 22-56 seater AC coaches from ₹30/km, seater-size comparison, Volvo vs AC bus, what is included, and how to book for weddings, corporate, pilgrimage and group tours.',
    image: '/images/bus/hero_section_image.webp',
    authorName: 'editorial',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first']
  });

  // Comparison schema — bus seater-size comparison (Table + Article) for featured-snippet capture.
  const comparisonSchema = getComparisonSchema({
    slug: 'bus-routes',
    title: 'Bus Seater Size Comparison — 22 vs 35 vs 45 vs 56 Seater',
    description: 'Compare 22, 35, 45 and 56 seater buses on passenger capacity, best use-case, price per km and AC type to choose the right coach for your group.',
    rows: seaterComparison.map(r => ({ feature: r.size })),
    mentions: ['22 Seater Mini Bus', '35 Seater Bus', '45 Seater Bus', '56 Seater Volvo Coach', 'Bus rental per km', 'Group travel']
  });

  // Inject the dynamic schema list + comparison data into the client page object
  pageData.seaterComparison = seaterComparison;

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
          howToBookSchema,
          articleSchema,
          ...comparisonSchema
        ]) }}
      />
      <BusMainClient data={pageData} />
    </>
  );
}
