// src/app/sightseeing/[slug]/page.js

import { getTourBySlug, getAllTours, getToursByCity, getCitiesWithTours } from '@/utilis/sightseeingData';
import SightseeingDetailClient from './SightseeingDetailClient';
import CityToursPage from './CityToursPage';
import { notFound } from 'next/navigation';

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

    return {
      title: `${cityName} Sightseeing Tours 2025 | Best ${cityName} Tour Packages | Book Now`,
      description: `Discover ${tours.length}+ amazing sightseeing tours in ${cityName}. Expert-guided heritage tours, cultural experiences & day trips. Best prices guaranteed. Book your ${cityName} tour now!`,
      keywords: [
        // Primary Keywords
        `${cityName} sightseeing`,
        `${cityName} tour packages`,
        `${cityName} city tour`,
        `${cityName} tourism`,
        `${cityName} tours`,
        `visit ${cityName}`,
        `${cityName} travel`,
        `${cityName} trip`,
        `${cityName} vacation`,
        `${cityName} holiday`,

        // Places & Attractions Keywords
        `places to visit in ${cityName}`,
        `things to do in ${cityName}`,
        `${cityName} attractions`,
        `${cityName} tourist places`,
        `${cityName} sightseeing places`,
        `top places in ${cityName}`,
        `must visit places in ${cityName}`,
        `famous places in ${cityName}`,
        `best attractions in ${cityName}`,
        `${cityName} monuments`,
        `${cityName} landmarks`,
        `${cityName} historical places`,
        `${cityName} heritage sites`,

        // Tour Type Keywords
        `${cityName} guided tours`,
        `${cityName} day tour`,
        `${cityName} full day tour`,
        `${cityName} half day tour`,
        `${cityName} private tour`,
        `${cityName} group tour`,
        `${cityName} heritage tour`,
        `${cityName} cultural tour`,
        `${cityName} walking tour`,
        `${cityName} bus tour`,
        `${cityName} car tour`,
        `${cityName} customized tour`,
        `${cityName} tailor made tour`,

        // Booking & Service Keywords
        `book ${cityName} tour online`,
        `${cityName} tour booking`,
        `${cityName} online booking`,
        `${cityName} tour reservation`,
        `${cityName} instant booking`,
        `${cityName} advance booking`,
        `book ${cityName} sightseeing`,
        `${cityName} tour operators`,
        `${cityName} travel agency`,
        `${cityName} tour company`,
        `best tour operator in ${cityName}`,
        `reliable ${cityName} tours`,
        `trusted ${cityName} tour service`,

        // Price & Value Keywords
        `${cityName} tour cost`,
        `${cityName} tour price`,
        `affordable ${cityName} tours`,
        `cheap ${cityName} tour packages`,
        `budget ${cityName} tours`,
        `luxury ${cityName} tours`,
        `premium ${cityName} tours`,
        `best price ${cityName} tour`,
        `${cityName} tour deals`,
        `${cityName} tour offers`,
        `discounted ${cityName} tours`,
        `${cityName} tour packages with price`,
        `value for money ${cityName} tours`,

        // Duration Keywords
        `${cityName} 1 day tour`,
        `${cityName} 2 day tour`,
        `${cityName} 3 day tour`,
        `${cityName} weekend tour`,
        `${cityName} short trip`,
        `${cityName} extended tour`,
        `quick ${cityName} tour`,

        // Time & Season Keywords
        `${cityName} tour 2025`,
        `${cityName} sightseeing 2025`,
        `best time to visit ${cityName}`,
        `${cityName} summer tour`,
        `${cityName} winter tour`,
        `${cityName} monsoon tour`,
        `${cityName} weather`,
        `when to visit ${cityName}`,

        // Travel From Keywords
        `${cityName} tour from Delhi`,
        `${cityName} tour from Mumbai`,
        `${cityName} tour from Jaipur`,
        `${cityName} tour from Bangalore`,
        `how to reach ${cityName}`,
        `getting to ${cityName}`,

        // Question-Based Keywords
        `how to plan ${cityName} trip`,
        `what to see in ${cityName}`,
        `where to go in ${cityName}`,
        `how many days in ${cityName}`,
        `is ${cityName} worth visiting`,
        `why visit ${cityName}`,

        // Group Type Keywords
        `${cityName} family tour`,
        `${cityName} couple tour`,
        `${cityName} honeymoon tour`,
        `${cityName} solo travel`,
        `${cityName} group travel`,
        `${cityName} friends trip`,
        `${cityName} tour for couples`,
        `${cityName} family vacation`,
        `${cityName} kids friendly tour`,

        // Quality & Experience Keywords
        `best ${cityName} tours`,
        `top ${cityName} tours`,
        `top rated ${cityName} tours`,
        `popular ${cityName} tours`,
        `famous ${cityName} tours`,
        `expert guided ${cityName} tours`,
        `professional ${cityName} tour guide`,
        `local ${cityName} guide`,
        `${cityName} tour with guide`,
        `knowledgeable ${cityName} guides`,

        // Service Features Keywords
        `${cityName} tour with driver`,
        `${cityName} chauffeur service`,
        `AC vehicle ${cityName} tour`,
        `comfortable ${cityName} tour`,
        `hotel pickup ${cityName}`,
        `door to door ${cityName} tour`,
        `all inclusive ${cityName} tour`,
        `${cityName} tour package inclusions`,
        `hassle free ${cityName} tour`,

        // Travel Style Keywords
        `${cityName} adventure tour`,
        `${cityName} spiritual tour`,
        `${cityName} religious tour`,
        `${cityName} food tour`,
        `${cityName} photography tour`,
        `${cityName} shopping tour`,
        `${cityName} nightlife tour`,
        `${cityName} architecture tour`,
        `${cityName} nature tour`,

        // Itinerary Keywords
        `${cityName} tour itinerary`,
        `${cityName} travel plan`,
        `${cityName} tour schedule`,
        `${cityName} sightseeing plan`,
        `complete ${cityName} tour`,
        `comprehensive ${cityName} tour`,
        `detailed ${cityName} itinerary`,

        // Reviews & Trust Keywords
        `${cityName} tour reviews`,
        `${cityName} tour ratings`,
        `best reviewed ${cityName} tours`,
        `5 star ${cityName} tour`,
        `recommended ${cityName} tours`,

        // Accommodation Related
        `${cityName} tour with hotel`,
        `${cityName} package with stay`,
        `${cityName} tour without hotel`,

        // Special Interest Keywords
        `${cityName} UNESCO sites`,
        `${cityName} world heritage sites`,
        `${cityName} museums`,
        `${cityName} temples`,
        `${cityName} forts`,
        `${cityName} palaces`,
        `${cityName} gardens`,
        `${cityName} markets`,

        // Comparison Keywords
        `best way to explore ${cityName}`,
        `${cityName} vs other cities`,
        `top tourist destination ${cityName}`,

        // Action Keywords
        `explore ${cityName}`,
        `discover ${cityName}`,
        `experience ${cityName}`,
        `tour ${cityName}`,
        `travel to ${cityName}`,
        `visit ${cityName} attractions`,

        // Convenience Keywords
        `easy ${cityName} booking`,
        `quick ${cityName} tour booking`,
        `instant ${cityName} confirmation`,
        `flexible ${cityName} tours`,
        `customizable ${cityName} packages`,
        `${cityName} tour cancellation`,
        `${cityName} tour modification`,

        // Local Experience Keywords
        `authentic ${cityName} experience`,
        `local ${cityName} tour`,
        `${cityName} culture tour`,
        `${cityName} traditional tour`,
        `${cityName} local food tour`,
        `${cityName} street food tour`,

        // Transportation Keywords
        `${cityName} cab service`,
        `${cityName} taxi tour`,
        `${cityName} car rental`,
        `${cityName} vehicle hire`,
        `${cityName} transportation`,

        // Additional Value Keywords
        `${cityName} travel tips`,
        `${cityName} tourist information`,
        `${cityName} visitor guide`,
        `${cityName} travel guide 2025`,
        `complete ${cityName} guide`,
        `ultimate ${cityName} guide`
      ].filter(Boolean).join(', '),
      alternates: {
        canonical: `https://trivenicabs.in/sightseeing/${slug}`
      },
      openGraph: {
        title: `${cityName} Sightseeing Tours | Best Tour Packages 2025`,
        description: `${tours.length}+ expert-guided tours in ${cityName}. Heritage sites, cultural experiences & day trips. Book now!`,
        url: `https://trivenicabs.in/sightseeing/${slug}`,
        type: 'website',
        locale: 'en_IN',
        siteName: 'Triveni Cabs',
        images: [
          {
            url: tours[0]?.heroImage || `/images/destinations/${slug}.jpg`,
            width: 1200,
            height: 630,
            alt: `${cityName} Sightseeing Tours - Triveni Cabs`
          }
        ]
      },
      robots: {
        index: true,
        follow: true,
      },
    };
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

  return {
    title: `${tour.name} | Premium Guided Sightseeing Tour - Best Price Guaranteed | Book Now`,
    description: `${tour.fullDescription} Duration: ${tour.duration}. Starting from ₹${lowestPrice}. Expert guides, comfortable transport, customizable itinerary. Book online now!`,
    keywords: [
      // Tour-Specific Primary Keywords
      tour.name,
      `${tour.name} booking`,
      `${tour.name} price`,
      `${tour.name} cost`,
      `${tour.name} tour`,
      `${tour.name} package`,
      `guided ${tour.name}`,
      `book ${tour.name}`,
      `${tour.name} online booking`,

      // Category & Type Keywords
      tour.category,
      `${tour.category} tour`,
      'sightseeing tour',
      'heritage tour',
      'cultural tour',
      'day tour',
      'city tour',
      'guided tour India',

      // Service Quality Keywords
      'professional tour guide',
      'expert guide service',
      'best tour package',
      'customizable tour',
      'private tour',
      'group tour',
      'personalized tour',
      'premium tour service',

      // Booking & Convenience Keywords
      'online booking',
      'instant confirmation',
      'book online tour',
      'advance booking',
      'WhatsApp booking',
      'same day booking',
      'last minute booking',
      'easy cancellation',

      // Pricing Keywords
      'best price guaranteed',
      'affordable tour package',
      'budget friendly tour',
      'value for money',
      'competitive pricing',
      'transparent pricing',
      'no hidden charges',

      // Duration-Based Keywords
      `${tour.duration} tour`,
      'full day tour',
      'half day tour',
      'extended tour',

      // Time & Season Keywords
      tour.bestTimeToVisit ? `best time to visit ${tour.name.split(' ')[0]}` : '',
      tour.bestTimeToVisit ? `when to visit ${tour.name.split(' ')[0]}` : '',
      'year round tours',
      'seasonal tours',

      // Vehicle Type Keywords (if applicable)
      'AC sedan tour',
      'SUV tour package',
      'tempo traveller tour',
      'comfortable transport',
      'luxury vehicle tour',

      // Experience Keywords
      'guided sightseeing',
      'skip the line tour',
      'hassle free tour',
      'comfortable tour',
      'safe tour service',
      'reliable tour operator',

      // Trust & Review Keywords
      'top rated tour',
      'best reviewed tour',
      'trusted tour operator',
      '5 star tour service',
      'verified tour guide',
      'certified guides',

      // Group Type Keywords
      'family tour package',
      'couple tour',
      'solo traveler tour',
      'group tour booking',
      'friends trip',
      'honeymoon tour',

      // Highlights (First 10)
      ...(tour.highlights || []).slice(0, 10),

      // Location-Specific Keywords (extracted from tour name)
      ...tour.name.split(' ').filter(word => word.length > 3).map(word => `${word} tour`),
      ...tour.name.split(' ').filter(word => word.length > 3).map(word => `visit ${word}`),
      ...tour.name.split(' ').filter(word => word.length > 3).map(word => `${word} sightseeing`),

      // Question-Based Keywords
      `how to book ${tour.name}`,
      `what to see in ${tour.name.split(' ')[0]}`,
      `best ${tour.name.split(' ')[0]} tour`,
      `top ${tour.name.split(' ')[0]} attractions`,

      // Comparative Keywords
      'best tour operator',
      'top tour package',
      'recommended tour',
      'most popular tour',

      // Special Requirements Keywords
      'wheelchair accessible',
      'senior friendly tour',
      'kid friendly tour',
      'English speaking guide',
      'photography tour',

      // Itinerary Keywords
      'detailed itinerary',
      'flexible schedule',
      'customizable itinerary',
      'comprehensive tour',
      'complete tour package',

      // Additional Value Keywords
      'hotel pickup',
      'door to door service',
      'all inclusive tour',
      'guided experience',
      'local insights',
      'cultural immersion',
      'authentic experience'
    ].filter(Boolean).join(', '),
    alternates: {
      canonical: `https://trivenicabs.in/sightseeing/${slug}`
    },
    openGraph: {
      title: `${tour.name} | Premium Guided Sightseeing Tour`,
      description: `${tour.shortDescription} | ${tour.duration} | From ₹${lowestPrice} | Expert guides | Customizable`,
      url: `https://trivenicabs.in/sightseeing/${slug}`,
      type: 'website',
      locale: 'en_IN',
      siteName: 'Triveni Cabs',
      images: [
        {
          url: tour.heroImage || `/images/tours/${slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `${tour.name} - Premium Guided Sightseeing Tour with Triveni Cabs`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tour.name} | Guided Tour`,
      description: `${tour.shortDescription} | ${tour.duration} | From ₹${lowestPrice}`,
      images: [tour.heroImage || `/images/tours/${slug}.jpg`],
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
    other: {
      'tour-duration': tour.duration,
      'tour-category': tour.category,
      'best-time-to-visit': tour.bestTimeToVisit || 'Year-round',
      'difficulty-level': tour.difficulty || 'Easy',
      'group-size': tour.groupSize || '1-15 persons'
    }
  };
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
    // Render city tours page
    return <CityToursPage city={slug} />;
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
            "url": `https://trivenicabs.in/sightseeing/${slug}`,
            "image": {
              "@type": "ImageObject",
              "url": tour.heroImage || `/images/tours/${slug}.jpg`,
              "caption": tour.name,
              "contentUrl": tour.heroImage || `/images/tours/${slug}.jpg`
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
              "email": "info@trivenicabs.in",
              "url": "https://trivenicabs.in",
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
              "url": `https://trivenicabs.in/sightseeing/${slug}`,
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
              "url": `https://trivenicabs.in/sightseeing/${slug}`,
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
                "item": "https://trivenicabs.in"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Sightseeing Tours",
                "item": "https://trivenicabs.in/sightseeing"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": tour.name,
                "item": `https://trivenicabs.in/sightseeing/${slug}`
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
              "image": tour.heroImage || `/images/tours/${slug}.jpg`,
              "url": `https://trivenicabs.in/sightseeing/${slug}`
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
            "url": "https://trivenicabs.in",
            "logo": "https://trivenicabs.in/logo.png",
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
              "https://www.instagram.com/trivenicabs"
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
            "image": tour.heroImage || `/images/tours/${slug}.jpg`,
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
              "url": `https://trivenicabs.in/sightseeing/${slug}`,
              "priceValidUntil": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
              "offerCount": prices.length
            } : {
              "@type": "Offer",
              "price": lowestPrice,
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": `https://trivenicabs.in/sightseeing/${slug}`,
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

      <SightseeingDetailClient tour={tour} />
    </>
  );
}
