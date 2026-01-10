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

// Generate metadata for SEO - per Google guidelines
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const tour = getTourBySlug(resolvedParams.slug);

  if (!tour) {
    return {
      title: 'Tour Not Found | Triveni Cabs'
    };
  }

  // Extract tour name for concise titles (under 60 chars per Google guidelines)
  const tourName = tour.title.split('–')[0].trim();
  const startingPrice = tour.pricing?.starting || 'Contact';

  // Concise title under 60 characters
  const pageTitle = `${tourName} Package | ${startingPrice} | Book Now`;

  // Description under 160 characters
  const pageDescription = `Book ${tourName} package. ${tour.duration} with AC transport, expert guides. Comfortable darshan experience. Call 7668570551.`;

  return {
    title: pageTitle,
    description: pageDescription,
    authors: [{ name: 'Triveni Cabs' }],
    alternates: {
      canonical: `https://www.trivenicabs.in/religious-tours/${resolvedParams.slug}`
    },
    openGraph: {
      title: `${tourName} | ${tour.duration} Tour Package`,
      description: pageDescription,
      type: 'website',
      locale: 'en_IN',
      siteName: 'Triveni Cabs',
      images: [
        {
          url: tour.images.hero,
          width: 1200,
          height: 630,
          alt: `${tourName} pilgrimage tour`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: `${tour.duration} pilgrimage package. Book now. Call 7668570551.`,
      site: '@trivenicabs',
      images: [tour.images.hero],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

export default async function ReligiousTourPage({ params }) {
  const resolvedParams = await params;
  const tour = getTourBySlug(resolvedParams.slug);

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
      "telephone": "+91-7668570551"
    }
  };

  // Breadcrumb schema for SEO
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
        "name": "Religious Tours",
        "item": "https://www.trivenicabs.in/religious-tours"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": tour.title,
        "item": `https://www.trivenicabs.in/religious-tours/${resolvedParams.slug}`
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ReligiousTourClient tour={tour} />
    </>
  );
}
