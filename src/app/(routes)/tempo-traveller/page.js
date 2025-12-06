// src/app/tempo-traveller/page.js

import { tempoFleet, tempoRoutes, tempoCities } from '@/utilis/tempoTravellerData';
import TempoMainClient from '@/components/TempoMainClient';

export const metadata = {
  title: 'Tempo Traveller on Rent India | 12-26 Seater AC ₹23/km | Delhi Manali Shimla Jaipur | Book Online',
  description: 'Book tempo traveller on rent for group travel across India. 12, 16, 17, 20, 26 seater AC tempo traveller with driver. Best rates ₹23-27/km all-inclusive. Popular routes: Delhi to Manali, Delhi to Shimla, Delhi to Haridwar, Delhi to Rishikesh, Delhi to Jaipur, Delhi to Agra, Chandigarh to Manali. 100+ destinations covered. Pushback seats, music system, GPS tracking. Professional drivers, 24/7 booking, instant confirmation. Perfect for family trips, corporate tours, pilgrimages, weddings.',
  applicationName: 'Triveni Cabs',
  metadataBase: new URL('https://trivenicabs.in'),
  alternates: {
    canonical: '/tempo-traveller',
  },
  openGraph: {
    title: 'Tempo Traveller on Rent India | 12-26 Seater AC with Driver | Book Online 24/7',
    description: '✓ Delhi to Manali ✓ Delhi to Shimla ✓ Delhi to Jaipur ✓ 100+ Routes | ₹23-27/km | GPS Tracking | Professional Drivers | 4.8★ Rating | Instant Confirmation',
    url: 'https://trivenicabs.in/tempo-traveller',
    siteName: 'Triveni Cabs - Tempo Traveller Rental Service',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/images/tempo-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Tempo Traveller on Rent - 12 to 26 Seater AC Vehicles with Professional Drivers - Triveni Cabs India',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tempo Traveller on Rent India | 12-26 Seater AC | Delhi Manali Shimla Jaipur Routes',
    description: '✓ 100+ Routes Across India ✓ Professional Drivers ✓ GPS Tracking ✓ ₹23-27/km All-Inclusive ✓ 24/7 Booking | Book tempo traveller rental service',
    site: '@trivenicabs',
    images: ['/images/tempo-hero.jpg'],
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
  category: 'Travel & Transportation',
};

export default function TempoTravellerPage() {
  // Prepare data on server side for SEO
  const getAllRoutes = () => {
    const routes = [];
    Object.entries(tempoRoutes).forEach(([origin, destinations]) => {
      destinations.forEach(dest => {
        routes.push({
          origin,
          destination: dest.name,
          type: dest.type,
          slug: `${origin.toLowerCase().replace(/\s+/g, '-')}-to-${dest.name.toLowerCase().replace(/\s+/g, '-')}`
        });
      });
    });
    return routes;
  };

  const getPopularRoutes = () => {
    const routes = getAllRoutes();
    // Return first 8 routes as popular
    return routes.slice(0, 8);
  };

  // Prepare cities data with route counts
  const getCitiesWithData = () => {
    return Object.entries(tempoCities).map(([cityName, cityData]) => {
      const routes = tempoRoutes[cityName] || [];
      return {
        ...cityData,
        routeCount: routes.length,
        routes: routes
      };
    });
  };

  const pageData = {
    popularRoutes: getPopularRoutes(),
    allRoutes: getAllRoutes(),
    fleet: tempoFleet,
    cities: Object.keys(tempoRoutes),
    citiesData: getCitiesWithData()
  };

  // Enhanced Structured Data with @graph for comprehensive SEO
  const serviceSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://trivenicabs.in/tempo-traveller#webpage",
        "url": "https://trivenicabs.in/tempo-traveller",
        "name": "Tempo Traveller on Rent India | 12-26 Seater AC with Driver",
        "description": "Book tempo traveller on rent for group travel across India. 12, 16, 17, 20, 26 seater AC tempo traveller with professional drivers. Popular routes: Delhi to Manali, Delhi to Shimla, Delhi to Jaipur. Best rates ₹23-27/km all-inclusive.",
        "inLanguage": "en-IN",
        "isPartOf": {
          "@id": "https://trivenicabs.in#website"
        },
        "breadcrumb": {
          "@id": "https://trivenicabs.in/tempo-traveller#breadcrumb"
        },
        "potentialAction": {
          "@type": "ReadAction",
          "target": ["https://trivenicabs.in/tempo-traveller"]
        },
        "datePublished": "2024-01-15T00:00:00+05:30",
        "dateModified": new Date().toISOString(),
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://trivenicabs.in/images/tempo-hero.jpg",
          "width": 1200,
          "height": 630,
          "caption": "Tempo Traveller on Rent - 12 to 26 Seater AC Vehicles - Triveni Cabs"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://trivenicabs.in/tempo-traveller#breadcrumb",
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
            "name": "Tempo Traveller on Rent",
            "item": "https://trivenicabs.in/tempo-traveller"
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://trivenicabs.in/tempo-traveller#service",
        "serviceType": "Tempo Traveller Rental Service",
        "name": "Tempo Traveller on Rent India - 12 to 26 Seater AC Vehicles with Driver",
        "description": "Premium tempo traveller rental service for group travel across India. Book 12, 16, 17, 20, 26 seater AC tempo travellers with professional drivers for outstation tours, family trips, corporate events, pilgrimages, and weddings. All-inclusive pricing from ₹23-27/km covering Delhi to Manali, Delhi to Shimla, Delhi to Jaipur, Chandigarh to Manali and 100+ more routes.",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://trivenicabs.in#organization",
          "name": "Triveni Cabs",
          "image": "https://trivenicabs.in/images/logo.png",
          "telephone": "+91-7668570551",
          "email": "info@trivenicabs.in",
          "url": "https://trivenicabs.in",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN",
            "addressRegion": "Delhi",
            "addressLocality": "New Delhi"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "28.6139",
            "longitude": "77.2090"
          },
          "priceRange": "₹₹",
          "sameAs": [
            "https://www.facebook.com/trivenicabs",
            "https://www.instagram.com/trivenicabs"
          ]
        },
        "areaServed": [
          {
            "@type": "Country",
            "name": "India"
          },
          {
            "@type": "State",
            "name": "Delhi"
          },
          {
            "@type": "State",
            "name": "Himachal Pradesh"
          },
          {
            "@type": "State",
            "name": "Uttarakhand"
          },
          {
            "@type": "State",
            "name": "Rajasthan"
          },
          {
            "@type": "State",
            "name": "Punjab"
          },
          {
            "@type": "State",
            "name": "Haryana"
          },
          {
            "@type": "State",
            "name": "Uttar Pradesh"
          }
        ],
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": "23",
          "highPrice": "27",
          "offerCount": "5",
          "priceSpecification": {
            "@type": "UnitPriceSpecification",
            "priceCurrency": "INR",
            "price": "23-27",
            "unitText": "per kilometer"
          },
          "availability": "https://schema.org/InStock",
          "url": "https://trivenicabs.in/tempo-traveller",
          "validFrom": new Date().toISOString()
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "2500",
          "bestRating": "5",
          "worstRating": "1"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Tempo Traveller Fleet Options",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "12 Seater Tempo Traveller on Rent",
                "description": "AC tempo traveller with pushback seats, music system, GPS tracking for 12 passengers. Ideal for small family groups and corporate teams.",
                "image": "https://trivenicabs.in/images/12-seater-tempo.jpg",
                "brand": {
                  "@type": "Brand",
                  "name": "Force Motors"
                }
              },
              "priceCurrency": "INR",
              "price": "23",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "23",
                "priceCurrency": "INR",
                "unitText": "per kilometer"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "17 Seater Tempo Traveller on Rent",
                "description": "Luxury AC tempo traveller with pushback recliner seats, music system, charging points for 17 passengers. Most popular choice for group travel.",
                "image": "https://trivenicabs.in/images/17-seater-tempo.jpg",
                "brand": {
                  "@type": "Brand",
                  "name": "Force Motors"
                }
              },
              "priceCurrency": "INR",
              "price": "25",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "25",
                "priceCurrency": "INR",
                "unitText": "per kilometer"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "20 Seater Tempo Traveller on Rent",
                "description": "Spacious AC tempo with LED TV, music system, pushback seats for 20 passengers. Perfect for large group tours and wedding parties.",
                "image": "https://trivenicabs.in/images/20-seater-tempo.jpg",
                "brand": {
                  "@type": "Brand",
                  "name": "Force Motors"
                }
              },
              "priceCurrency": "INR",
              "price": "26",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "26",
                "priceCurrency": "INR",
                "unitText": "per kilometer"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Product",
                "name": "26 Seater Tempo Traveller Maharaja on Rent",
                "description": "Premium luxury Maharaja tempo traveller with super deluxe recliner seats, LED TV, powerful AC for 26 passengers. Top choice for comfort travel.",
                "image": "https://trivenicabs.in/images/26-seater-tempo.jpg",
                "brand": {
                  "@type": "Brand",
                  "name": "Force Motors"
                }
              },
              "priceCurrency": "INR",
              "price": "27",
              "priceSpecification": {
                "@type": "UnitPriceSpecification",
                "price": "27",
                "priceCurrency": "INR",
                "unitText": "per kilometer"
              }
            }
          ]
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": "https://trivenicabs.in/tempo-traveller",
          "servicePhone": "+91-7668570551",
          "availableLanguage": ["English", "Hindi", "Punjabi"]
        },
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        },
        "termsOfService": "https://trivenicabs.in/terms-and-conditions",
        "knowsAbout": [
          "Tempo Traveller Rental",
          "Group Travel India",
          "Outstation Tempo Traveller",
          "Delhi to Manali Tempo Traveller",
          "Delhi to Shimla Tempo Traveller",
          "Delhi to Jaipur Tempo Traveller",
          "AC Tempo Traveller with Driver",
          "12 Seater Tempo Traveller",
          "17 Seater Tempo Traveller",
          "20 Seater Tempo Traveller",
          "26 Seater Tempo Traveller"
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <TempoMainClient data={pageData} />
    </>
  );
}