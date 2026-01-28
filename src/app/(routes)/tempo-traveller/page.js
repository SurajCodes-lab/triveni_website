// src/app/tempo-traveller/page.js

import { tempoFleet, tempoRoutes, tempoCities } from '@/utilis/tempoTravellerData';
import TempoMainClient from '@/components/TempoMainClient';

export const metadata = {
  // Title under 60 chars per Google guidelines - CTR optimized
  title: 'Tempo Traveller Rent 2026 | 12-26 Seater ₹23/km | Delhi Routes',
  // Description under 160 chars, unique and descriptive - CTR optimized
  description: 'Book tempo traveller from Delhi: Manali ₹18K, Shimla ₹12K, Jaipur ₹10K. 12-26 seater AC with driver. 5000+ trips done. GPS tracking. Call 7668570551.',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  applicationName: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: {
    canonical: '/tempo-traveller',
  },
  openGraph: {
    title: 'Tempo Traveller on Rent | 12-26 Seater AC from ₹23/km',
    description: 'Book tempo traveller for group travel. Delhi to Manali, Shimla, Jaipur. 100+ routes, professional drivers, GPS tracking.',
    url: 'https://www.trivenicabs.in/tempo-traveller',
    siteName: 'Triveni Cabs',
    type: 'website',
    locale: 'en_IN',
    images: [
      {
        url: '/images/tempo_hero_section.jpg',
        width: 1200,
        height: 630,
        alt: 'Tempo Traveller on Rent - 12 to 26 Seater AC Vehicles with Professional Drivers - Triveni Cabs India',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tempo Traveller on Rent | 12-26 Seater from ₹23/km',
    description: 'Book tempo traveller across India. 100+ routes, professional drivers, GPS tracking. Call 7668570551.',
    site: '@trivenicabs',
    images: ['/images/tempo_hero_section.jpg'],
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
        "@id": "https://www.trivenicabs.in/tempo-traveller#webpage",
        "url": "https://www.trivenicabs.in/tempo-traveller",
        "name": "Tempo Traveller on Rent India | 12-26 Seater AC with Driver",
        "description": "Book tempo traveller on rent for group travel across India. 12, 16, 17, 20, 26 seater AC tempo traveller with professional drivers. Popular routes: Delhi to Manali, Delhi to Shimla, Delhi to Jaipur. Best rates ₹23-27/km all-inclusive.",
        "inLanguage": "en-IN",
        "isPartOf": {
          "@id": "https://www.trivenicabs.in#website"
        },
        "breadcrumb": {
          "@id": "https://www.trivenicabs.in/tempo-traveller#breadcrumb"
        },
        "potentialAction": {
          "@type": "ReadAction",
          "target": ["https://www.trivenicabs.in/tempo-traveller"]
        },
        "datePublished": "2024-01-15T00:00:00+05:30",
        "dateModified": new Date().toISOString(),
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://www.trivenicabs.in/images/tempo_hero_section.jpg",
          "width": 1200,
          "height": 630,
          "caption": "Tempo Traveller on Rent - 12 to 26 Seater AC Vehicles - Triveni Cabs"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.trivenicabs.in/tempo-traveller#breadcrumb",
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
            "name": "Tempo Traveller on Rent",
            "item": "https://www.trivenicabs.in/tempo-traveller"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.trivenicabs.in/tempo-traveller#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What seater options are available?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer 12-seater, 16-seater, 17-seater (most popular), 20-seater with LED TV, and 26-seater Maharaja Edition. All vehicles are AC equipped with pushback seats, music system, and charging points."
            }
          },
          {
            "@type": "Question",
            "name": "How much does tempo traveller rental cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Rates start from ₹23/km for 12-seater and go up to ₹27/km for 26-seater. Local packages (8hrs/80km) range from ₹6,000 to ₹11,000. All prices include fuel, driver, tolls, and parking."
            }
          },
          {
            "@type": "Question",
            "name": "Are drivers provided with the rental?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! All tempo travellers come with experienced professional drivers having 5+ years experience, police verification, and valid commercial licenses. Driver charges are included in the price."
            }
          },
          {
            "@type": "Question",
            "name": "Which routes are covered?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We cover 100+ routes including Delhi to Manali, Shimla, Jaipur, Agra, Haridwar, Rishikesh, and all major tourist destinations across North India. Custom routes are also available."
            }
          },
          {
            "@type": "Question",
            "name": "How do I book a tempo traveller?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Simply call +917668570551 or WhatsApp with your pickup location, destination, travel date, and group size. Get instant quote and confirm with a small advance payment."
            }
          },
          {
            "@type": "Question",
            "name": "Is one-way booking available?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! We provide both one-way drop and round-trip services. One-way is charged per kilometer. Round-trip bookings are generally more economical with package rates."
            }
          }
        ]
      },
      {
        "@type": "Service",
        "@id": "https://www.trivenicabs.in/tempo-traveller#service",
        "serviceType": "Tempo Traveller Rental Service",
        "name": "Tempo Traveller on Rent India - 12 to 26 Seater AC Vehicles with Driver",
        "description": "Premium tempo traveller rental service for group travel across India. Book 12, 16, 17, 20, 26 seater AC tempo travellers with professional drivers for outstation tours, family trips, corporate events, pilgrimages, and weddings. All-inclusive pricing from ₹23-27/km covering Delhi to Manali, Delhi to Shimla, Delhi to Jaipur, Chandigarh to Manali and 100+ more routes.",
        "provider": {
          "@type": "LocalBusiness",
          "@id": "https://www.trivenicabs.in#organization",
          "name": "Triveni Cabs",
          "image": "https://www.trivenicabs.in/images/logo.png",
          "telephone": "+91-7668570551",
          "email": "cabstriveni@gmail.com",
          "url": "https://www.trivenicabs.in",
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
            "https://www.instagram.com/cabstriveni?igsh=YzlzYmZsZjZ5bnlo"
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
          "url": "https://www.trivenicabs.in/tempo-traveller",
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
                "image": "https://www.trivenicabs.in/images/tempo/12_seater.jpg",
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
                "image": "https://www.trivenicabs.in/images/tempo/17_seater.jpg",
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
                "image": "https://www.trivenicabs.in/images/tempo/20_seater.jpg",
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
                "image": "https://www.trivenicabs.in/images/tempo/26_seater.jpg",
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
          "serviceUrl": "https://www.trivenicabs.in/tempo-traveller",
          "servicePhone": "+91-7668570551",
          "availableLanguage": ["English", "Hindi", "Punjabi"]
        },
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "23:59"
        },
        "termsOfService": "https://www.trivenicabs.in/terms-and-conditions",
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
      <TempoMainClient data={pageData} faqData={[
        {
          question: 'What seater options are available?',
          answer: 'We offer 12-seater, 16-seater, 17-seater (most popular), 20-seater with LED TV, and 26-seater Maharaja Edition. All vehicles are AC equipped with pushback seats, music system, and charging points.'
        },
        {
          question: 'How much does tempo traveller rental cost?',
          answer: 'Rates start from ₹23/km for 12-seater and go up to ₹27/km for 26-seater. Local packages (8hrs/80km) range from ₹6,000 to ₹11,000. All prices include fuel, driver, tolls, and parking.'
        },
        {
          question: 'Are drivers provided with the rental?',
          answer: 'Yes! All tempo travellers come with experienced professional drivers having 5+ years experience, police verification, and valid commercial licenses. Driver charges are included in the price.'
        },
        {
          question: 'Which routes are covered?',
          answer: 'We cover 100+ routes including Delhi to Manali, Shimla, Jaipur, Agra, Haridwar, Rishikesh, and all major tourist destinations across North India. Custom routes are also available.'
        },
        {
          question: 'How do I book a tempo traveller?',
          answer: 'Simply call +917668570551 or WhatsApp with your pickup location, destination, travel date, and group size. Get instant quote and confirm with a small advance payment.'
        },
        {
          question: 'Is one-way booking available?',
          answer: 'Yes! We provide both one-way drop and round-trip services. One-way is charged per kilometer. Round-trip bookings are generally more economical with package rates.'
        }
      ]} />
    </>
  );
}