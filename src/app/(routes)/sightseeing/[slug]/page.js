// src/app/sightseeing/[slug]/page.js

import { getTourBySlug, getAllTours } from '@/utilis/sightseeingData';
import SightseeingDetailClient from './SightseeingDetailClient';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const allTours = getAllTours();
  return allTours.map((tour) => ({
    slug: tour.slug,
  }));
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

  const tour = getTourBySlug(slug);

  if (!tour) {
    return {
      title: 'Tour Not Found | Sightseeing Tours',
      description: 'The requested tour could not be found.'
    };
  }

  return {
    title: `${tour.name} | Premium Guided Sightseeing Tour - Best Price Guaranteed | Book Now`,
    description: `${tour.fullDescription} Duration: ${tour.duration}. Starting from ₹${tour.price.carRental}. Expert guides, comfortable transport, customizable itinerary. Book online now!`,
    keywords: [
      tour.name,
      `${tour.name} booking`,
      `${tour.name} price`,
      `${tour.name} tour`,
      `guided ${tour.name}`,
      tour.category,
      'sightseeing tour',
      'heritage tour',
      'cultural tour',
      'day tour',
      'guided tour India',
      'professional tour guide',
      'best tour package',
      'customizable tour',
      'private tour',
      'group tour',
      'online booking',
      'instant confirmation',
      'best price guaranteed'
    ].join(', '),
    alternates: {
      canonical: `https://trivenicabs.in/sightseeing/${slug}`
    },
    openGraph: {
      title: `${tour.name} | Premium Guided Sightseeing Tour`,
      description: `${tour.shortDescription} | ${tour.duration} | From ₹${tour.price.carRental} | Expert guides | Customizable`,
      url: `https://trivenicabs.in/sightseeing/${slug}`,
      type: 'website',
      locale: 'en_IN',
      siteName: 'Triveni Cabs',
      images: [
        {
          url: `/images/tours/${slug}.jpg`,
          width: 1200,
          height: 630,
          alt: tour.name
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tour.name} | Guided Tour`,
      description: `${tour.shortDescription} | ${tour.duration} | From ₹${tour.price.carRental}`,
      images: [`/images/tours/${slug}.jpg`]
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
    }
  };
}

export default async function SightseeingDetailPage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  if (!slug) {
    notFound();
  }

  const tour = getTourBySlug(slug);

  if (!tour) {
    notFound();
  }

  return (
    <>
      {/* Product Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TouristTrip",
            "name": tour.name,
            "description": tour.fullDescription,
            "url": `https://trivenicabs.in/sightseeing/${slug}`,
            "image": `/images/tours/${slug}.jpg`,
            "touristType": [
              "Families",
              "Solo Travelers",
              "Couples",
              "Groups",
              "International Tourists"
            ],
            "provider": {
              "@type": "TravelAgency",
              "name": "Triveni Cabs",
              "telephone": "+91-7668570551",
              "url": "https://trivenicabs.in",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "366, Dandupura, near Tajganj",
                "addressLocality": "Agra",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "282006",
                "addressCountry": "IN"
              }
            },
            "offers": {
              "@type": "Offer",
              "price": tour.price.carRental,
              "priceCurrency": "INR",
              "availability": "https://schema.org/InStock",
              "url": `https://trivenicabs.in/sightseeing/${slug}`,
              "validFrom": new Date().toISOString()
            },
            ...(tour.reviews && {
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": tour.reviews.averageRating,
                "reviewCount": tour.reviews.totalReviews,
                "bestRating": "5",
                "worstRating": "1"
              }
            }),
            "duration": tour.duration,
            ...(tour.itinerary && {
              "itinerary": tour.itinerary.map(item => ({
                "@type": "Action",
                "name": item.activity,
                "description": item.description || item.activity,
                "startTime": item.time
              }))
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

      <SightseeingDetailClient tour={tour} />
    </>
  );
}
