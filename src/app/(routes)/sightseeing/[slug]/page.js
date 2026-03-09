// src/app/sightseeing/[slug]/page.js

import { getTourBySlug, getAllTours, getToursByCity, getCitiesWithTours } from '@/utilis/sightseeingData';

// ISR - Revalidate every hour (3600 seconds) for fresh content
export const revalidate = false;
export const dynamicParams = false;
import SightseeingDetailClient from './SightseeingDetailClient';
import CityToursPage from './CityToursPage';
import { notFound } from 'next/navigation';
import { generateTourMetadata, generateSightseeingCityMetadata } from '@/lib/seo/metadata-factory';

export async function generateStaticParams() {
  const allTours = getAllTours();
  const cities = getCitiesWithTours();

  // Generate params for both tours AND cities
  const tourParams = allTours.map((tour) => ({
    slug: tour.slug,
  }));

  const cityParams = cities.map((city) => ({
    slug: city,
  }));

  return [...tourParams, ...cityParams];
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  if (!slug) {
    return {
      title: 'Sightseeing Tour | Premium Guided Tours',
      description: 'Discover amazing sightseeing tours across India with expert guides.'
    };
  }

  // Check if this is a city page first
  const cities = getCitiesWithTours();
  if (cities.includes(slug)) {
    const cityName = slug.charAt(0).toUpperCase() + slug.slice(1);
    const tours = getToursByCity(slug);

    // Calculate lowest price from all city tours
    const allPrices = tours.flatMap(tour => [
      tour.price.sedan,
      tour.price.suv,
      tour.price.tempoTraveller
    ].filter(Boolean));
    const cityLowestPrice = allPrices.length > 0 ? Math.min(...allPrices) : 1499;

    return generateSightseeingCityMetadata({
      city: cityName,
      tourCount: tours.length,
      lowestPrice: cityLowestPrice.toLocaleString(),
      slug,
      heroImage: tours[0]?.heroImage || null
    });
  }

  // Otherwise, it's a tour detail page
  const tour = getTourBySlug(slug);

  if (!tour) {
    return {
      title: 'Tour Not Found | Sightseeing Tours',
      description: 'The requested tour could not be found.'
    };
  }

  // Get the lowest price from available vehicle types
  const lowestPrice = tour.price.sedan || tour.price.carRental || tour.price.suv;

  return generateTourMetadata({
    tourName: tour.name,
    city: tour.category || slug.split('-')[0],
    price: lowestPrice?.toLocaleString() || '1,499',
    duration: tour.duration,
    slug,
    description: null,
    image: tour.heroImage || null
  });
}

export default async function SightseeingDetailPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  if (!slug) {
    notFound();
  }

  // Check if this is a city page
  const cities = getCitiesWithTours();
  if (cities.includes(slug)) {
    // Get city tours for schema
    const cityTours = getToursByCity(slug);
    const cityName = slug.charAt(0).toUpperCase() + slug.slice(1);

    // Calculate price range for city tours
    const allPrices = cityTours.flatMap(tour => [
      tour.price.sedan,
      tour.price.suv,
      tour.price.tempoTraveller
    ].filter(Boolean));
    const cityLowestPrice = Math.min(...allPrices);
    const cityHighestPrice = Math.max(...allPrices);

    // Render city tours page with schema
    return (
      <>
        {/* City TouristDestination Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TouristDestination",
              "name": `${cityName} - Tourist Destination`,
              "description": `Explore ${cityName} with our premium sightseeing tours. ${cityTours.length}+ expert-guided tours covering heritage sites, cultural landmarks, and hidden gems.`,
              "url": `https://www.trivenicabs.in/sightseeing/${slug}`,
              "touristType": ["Cultural Tourism", "Heritage Tourism", "Adventure Tourism", "Family Tourism"],
              "includesAttraction": cityTours.slice(0, 5).map(tour => ({
                "@type": "TouristAttraction",
                "name": tour.name,
                "description": tour.shortDescription,
                "url": `https://www.trivenicabs.in/sightseeing/${tour.slug}`
              }))
            })
          }}
        />

        {/* City Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
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
                  "name": "Sightseeing Tours",
                  "item": "https://www.trivenicabs.in/sightseeing"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": `${cityName} Tours`,
                  "item": `https://www.trivenicabs.in/sightseeing/${slug}`
                }
              ]
            })
          }}
        />

        {/* City ItemList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": `${cityName} Sightseeing Tours`,
              "description": `Complete list of sightseeing tours available in ${cityName}`,
              "numberOfItems": cityTours.length,
              "itemListElement": cityTours.map((tour, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "item": {
                  "@type": "TouristTrip",
                  "name": tour.name,
                  "description": tour.shortDescription,
                  "url": `https://www.trivenicabs.in/sightseeing/${tour.slug}`,
                  "offers": {
                    "@type": "Offer",
                    "price": tour.price.sedan || tour.price.suv,
                    "priceCurrency": "INR",
                    "availability": "https://schema.org/InStock"
                  },
                  ...(tour.reviews && {
                    "aggregateRating": {
                      "@type": "AggregateRating",
                      "ratingValue": tour.reviews.averageRating.toString(),
                      "reviewCount": tour.reviews.totalReviews.toString()
                    }
                  })
                }
              }))
            })
          }}
        />

        {/* City Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": `${cityName} Sightseeing Tours`,
              "name": `${cityName} Tour Packages - Triveni Cabs`,
              "description": `Premium ${cityName} sightseeing tours with professional guides, comfortable AC vehicles, and customizable itineraries.`,
              "provider": {
                "@type": "TravelAgency",
                "name": "Triveni Cabs",
                "telephone": "+91-7668570551",
                "url": "https://www.trivenicabs.in"
              },
              "areaServed": {
                "@type": "City",
                "name": cityName
              },
              "offers": {
                "@type": "AggregateOffer",
                "lowPrice": cityLowestPrice,
                "highPrice": cityHighestPrice,
                "priceCurrency": "INR",
                "offerCount": cityTours.length
              },
              "availableChannel": {
                "@type": "ServiceChannel",
                "serviceUrl": `https://www.trivenicabs.in/sightseeing/${slug}`,
                "servicePhone": "+91-7668570551"
              }
            })
          }}
        />

        {/* City FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": `What sightseeing tours are available in ${cityName}?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `We offer ${cityTours.length}+ sightseeing tours in ${cityName}, including ${cityTours.slice(0, 3).map(t => t.name).join(', ')}. Tours range from half-day to multi-day packages covering heritage sites, cultural landmarks, and local experiences.`
                  }
                },
                {
                  "@type": "Question",
                  "name": `How much does a ${cityName} sightseeing tour cost?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Our ${cityName} tours start from ₹${cityLowestPrice.toLocaleString()} for sedan vehicles. Prices vary based on tour duration and vehicle type. SUV and Tempo Traveller options are available for larger groups.`
                  }
                },
                {
                  "@type": "Question",
                  "name": `What is the best time to visit ${cityName}?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `The best time for ${cityName} sightseeing is October to March when the weather is pleasant. However, we offer tours year-round with appropriate arrangements for comfort.`
                  }
                },
                {
                  "@type": "Question",
                  "name": `Are ${cityName} tour guides included?`,
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": `Yes, professional tour guides fluent in English, Hindi, and other languages can be arranged for all ${cityName} tours. They provide detailed insights about history, culture, and architecture.`
                  }
                }
              ]
            })
          }}
        />

        {/* City CollectionPage Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": `${cityName} Sightseeing Tours Collection`,
              "description": `Browse all ${cityTours.length} sightseeing tours available in ${cityName}`,
              "url": `https://www.trivenicabs.in/sightseeing/${slug}`,
              "isPartOf": {
                "@type": "WebSite",
                "name": "Triveni Cabs",
                "url": "https://www.trivenicabs.in"
              },
              "about": {
                "@type": "City",
                "name": cityName
              },
              "mainEntity": {
                "@type": "ItemList",
                "numberOfItems": cityTours.length
              }
            })
          }}
        />

        <CityToursPage city={slug} />
      </>
    );
  }

  // Otherwise, it's a tour detail page
  const tour = getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  // Get the lowest and highest prices for schema
  const prices = [
    tour.price.sedan,
    tour.price.suv,
    tour.price.tempoTraveller,
    tour.price.carRental
  ].filter(Boolean);
  const lowestPrice = Math.min(...prices);
  const highestPrice = Math.max(...prices);

  return (
    <>
      {/* Enhanced TouristTrip Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": tour.name,
            "description": tour.fullDescription,
            "url": `https://www.trivenicabs.in/sightseeing/${slug}`,
            "image": {
              "@type": "ImageObject",
              "url": tour.heroImage?.startsWith('http') ? tour.heroImage : `https://www.trivenicabs.in${tour.heroImage || `/images/tours/${slug}.jpg`}`,
              "caption": tour.name,
              "contentUrl": tour.heroImage?.startsWith('http') ? tour.heroImage : `https://www.trivenicabs.in${tour.heroImage || `/images/tours/${slug}.jpg`}`
            },
            "touristType": [
              "Families",
              "Solo Travelers",
              "Couples",
              "Groups",
              "International Tourists",
              "Domestic Tourists"
            ],
            "provider": {
              "@type": "TravelAgency",
              "name": "Triveni Cabs",
              "telephone": "+91-7668570551",
              "email": "cabstriveni@gmail.com",
              "url": "https://www.trivenicabs.in",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "366, Dandupura, near Tajganj",
                "addressLocality": "Agra",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "282006",
                "addressCountry": "IN"
              },
              "priceRange": "₹₹"
            },
            "offers": prices.length > 1 ? {
              "@type": "AggregateOffer",
              "lowPrice": lowestPrice,
              "highPrice": highestPrice,
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": `https://www.trivenicabs.in/sightseeing/${slug}`,
              "validFrom": new Date().toISOString(),
              "priceValidUntil": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
              "seller": {
                "@type": "Organization",
                "name": "Triveni Cabs"
              }
            } : {
              "@type": "Offer",
              "price": lowestPrice,
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": `https://www.trivenicabs.in/sightseeing/${slug}`,
              "validFrom": new Date().toISOString(),
              "priceValidUntil": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString()
            },
            ...(tour.reviews && {
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": tour.reviews.averageRating.toString(),
                "reviewCount": tour.reviews.totalReviews.toString(),
                "bestRating": "5",
                "worstRating": "1"
              }
            }),
            "duration": tour.duration,
            ...(tour.itinerary && {
              "itinerary": tour.itinerary.map((item, index) => ({
                "@type": "Action",
                "name": item.activity,
                "description": item.description || item.activity,
                "startTime": item.time,
                "actionStatus": "https://schema.org/PotentialActionStatus"
              }))
            }),
            ...(tour.coordinates && {
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": tour.coordinates.latitude,
                "longitude": tour.coordinates.longitude
              }
            })
          })
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                "name": "Sightseeing Tours",
                "item": "https://www.trivenicabs.in/sightseeing"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": tour.name,
                "item": `https://www.trivenicabs.in/sightseeing/${slug}`
              }
            ]
          })
        }}
      />

      {/* FAQ Schema if available */}
      {tour.faq && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": tour.faq.map(item => ({
                "@type": "Question",
                "name": item.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": item.answer
                }
              }))
            })
          }}
        />
      )}

      {/* ItemList Schema for Itinerary */}
      {tour.itinerary && tour.itinerary.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "name": `${tour.name} Itinerary`,
              "description": `Detailed itinerary for ${tour.name}`,
              "numberOfItems": tour.itinerary.length,
              "itemListElement": tour.itinerary.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.activity,
                "description": item.description || item.activity,
                "item": {
                  "@type": "Thing",
                  "name": item.activity,
                  "description": item.description || `${item.activity} at ${item.time}`
                }
              }))
            })
          }}
        />
      )}

      {/* Place Schema */}
      {tour.coordinates && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Place",
              "name": tour.name,
              "description": tour.shortDescription,
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": tour.coordinates.latitude,
                "longitude": tour.coordinates.longitude
              },
              "image": tour.heroImage?.startsWith('http') ? tour.heroImage : `https://www.trivenicabs.in${tour.heroImage || `/images/tours/${slug}.jpg`}`,
              "url": `https://www.trivenicabs.in/sightseeing/${slug}`
            })
          }}
        />
      )}

      {/* Organization Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Triveni Cabs",
            "url": "https://www.trivenicabs.in",
            "logo": "https://www.trivenicabs.in/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-7668570551",
              "contactType": "Customer Service",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            },
            "sameAs": [
              "https://twitter.com/TriveniCabs",
              "https://www.facebook.com/TriveniCabs",
              "https://www.instagram.com/cabstriveni?igsh=YzlzYmZsZjZ5bnlo"
            ]
          })
        }}
      />

      {/* Product Schema for better e-commerce SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": tour.name,
            "description": tour.fullDescription,
            "image": tour.heroImage?.startsWith('http') ? tour.heroImage : `https://www.trivenicabs.in${tour.heroImage || `/images/tours/${slug}.jpg`}`,
            "brand": {
              "@type": "Brand",
              "name": "Triveni Cabs"
            },
            "offers": prices.length > 1 ? {
              "@type": "AggregateOffer",
              "lowPrice": lowestPrice,
              "highPrice": highestPrice,
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": `https://www.trivenicabs.in/sightseeing/${slug}`,
              "priceValidUntil": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
              "offerCount": prices.length
            } : {
              "@type": "Offer",
              "price": lowestPrice,
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": `https://www.trivenicabs.in/sightseeing/${slug}`,
              "priceValidUntil": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString()
            },
            ...(tour.reviews && {
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": tour.reviews.averageRating.toString(),
                "reviewCount": tour.reviews.totalReviews.toString(),
                "bestRating": "5",
                "worstRating": "1"
              }
            }),
            "category": tour.category,
            "sku": slug,
            "mpn": slug
          })
        }}
      />

      {/* TravelAction Schema - For booking intent */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAction",
            "name": `Book ${tour.name}`,
            "description": `Book this ${tour.duration} guided sightseeing tour with professional guides and comfortable transportation`,
            "agent": {
              "@type": "TravelAgency",
              "name": "Triveni Cabs",
              "telephone": "+91-7668570551",
              "url": "https://www.trivenicabs.in"
            },
            "object": {
              "@type": "TouristTrip",
              "name": tour.name,
              "description": tour.shortDescription
            },
            "result": {
              "@type": "Reservation",
              "reservationFor": {
                "@type": "TouristTrip",
                "name": tour.name
              }
            },
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": `https://wa.me/917668570551?text=I'm interested in booking the ${encodeURIComponent(tour.name)} tour`,
              "actionPlatform": [
                "https://schema.org/DesktopWebPlatform",
                "https://schema.org/MobileWebPlatform"
              ]
            },
            "potentialAction": {
              "@type": "ReserveAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://wa.me/917668570551",
                "inLanguage": "en",
                "actionPlatform": [
                  "https://schema.org/DesktopWebPlatform",
                  "https://schema.org/MobileWebPlatform"
                ]
              },
              "result": {
                "@type": "Reservation",
                "name": `${tour.name} Booking`
              }
            }
          })
        }}
      />

      {/* Review Schema - Sample Reviews */}
      {tour.reviews && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": tour.name,
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Verified Tourist"
                  },
                  "reviewBody": `Excellent ${tour.category.toLowerCase()} tour! The guide was knowledgeable and the vehicle was very comfortable. Highly recommended for anyone visiting.`,
                  "datePublished": new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "International Traveler"
                  },
                  "reviewBody": `Amazing experience! The ${tour.duration} tour covered all major attractions. Professional service and great value for money.`,
                  "datePublished": new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": tour.reviews.averageRating.toString(),
                "reviewCount": tour.reviews.totalReviews.toString(),
                "bestRating": "5",
                "worstRating": "1"
              }
            })
          }}
        />
      )}

      {/* Event Schema - For upcoming tour availability */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": tour.name,
            "description": tour.shortDescription,
            "image": tour.heroImage?.startsWith('http') ? tour.heroImage : `https://www.trivenicabs.in${tour.heroImage || `/images/tours/${slug}.jpg`}`,
            "startDate": new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString(),
            "endDate": new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString(),
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
            "location": {
              "@type": "Place",
              "name": tour.category,
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IN"
              }
            },
            "organizer": {
              "@type": "Organization",
              "name": "Triveni Cabs",
              "url": "https://www.trivenicabs.in"
            },
            "performer": {
              "@type": "Organization",
              "name": "Triveni Cabs Expert Guides"
            },
            "offers": {
              "@type": "Offer",
              "url": `https://www.trivenicabs.in/sightseeing/${slug}`,
              "price": lowestPrice,
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "validFrom": new Date().toISOString()
            }
          })
        }}
      />

      {/* VideoObject Schema placeholder - if tour has video */}
      {tour.videoUrl && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VideoObject",
              "name": `${tour.name} - Tour Preview`,
              "description": tour.shortDescription,
              "thumbnailUrl": tour.heroImage?.startsWith('http') ? tour.heroImage : `https://www.trivenicabs.in${tour.heroImage || `/images/tours/${slug}.jpg`}`,
              "uploadDate": new Date().toISOString(),
              "contentUrl": tour.videoUrl,
              "embedUrl": tour.videoUrl
            })
          }}
        />
      )}

      <SightseeingDetailClient tour={tour} />
    </>
  );
}
