import { notFound } from 'next/navigation';
import { getTourBySlug, getAllTourSlugs } from '@/utilis/religiousTourData';
import ReligiousTourClient from '@/components/religious/ReligiousTourClient';

// Generate static params for all tours
export async function generateStaticParams() {
  const slugs = getAllTourSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const tour = getTourBySlug(params.slug);

  if (!tour) {
    return {
      title: 'Tour Not Found | Triveni Cabs'
    };
  }

  return {
    title: `${tour.title} | Religious Tour Packages | Triveni Cabs`,
    description: tour.description,
    keywords: tour.keywords.join(', '),
    openGraph: {
      title: tour.title,
      description: tour.description,
      type: 'website',
      locale: 'en_IN',
      siteName: 'Triveni Cabs',
      images: [
        {
          url: tour.images.hero,
          width: 1200,
          height: 630,
          alt: tour.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: tour.title,
      description: tour.description,
      images: [tour.images.hero],
    },
    alternates: {
      canonical: `https://trivenicabs.in/religious-tours/${params.slug}`
    }
  };
}

export default function ReligiousTourPage({ params }) {
  const tour = getTourBySlug(params.slug);

  if (!tour) {
    notFound();
  }

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": tour.title,
    "description": tour.description,
    "touristType": "Religious Pilgrimage",
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": tour.itinerary.map((day, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": `Day ${day.day}: ${day.title}`,
        "description": day.description
      }))
    },
    "duration": tour.duration,
    "offers": {
      "@type": "Offer",
      "price": tour.pricing.starting.replace('₹', '').replace(',', ''),
      "priceCurrency": "INR",
      "description": tour.pricing.note
    },
    "provider": {
      "@type": "Organization",
      "name": "Triveni Cabs",
      "telephone": "+91-XXXXXXXXXX"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ReligiousTourClient tour={tour} />
    </>
  );
}
