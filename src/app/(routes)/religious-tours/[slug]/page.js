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

  // Extract tour name for conversion-focused titles
  const tourName = tour.title.split('–')[0].trim();
  const startingPrice = tour.pricing?.starting || 'Contact for pricing';

  return {
    title: `Seek Blessings & Inner Peace! ${tourName} Tour Package | ${startingPrice} | Book Your Divine Journey`,
    description: `🙏 Experience spiritual awakening with ${tourName}! ${tour.description} Expert guides, comfortable AC transport, hassle-free darshan. 3000+ pilgrims blessed. Customize your sacred journey. ${tour.duration} package with accommodation, meals & sightseeing. Book now for divine blessings & peaceful travel!`,
    keywords: tour.keywords.join(', '),
    alternates: {
      canonical: `https://trivenicabs.in/religious-tours/${params.slug}`
    },
    openGraph: {
      title: `Find Inner Peace: ${tourName} Tour Package | Triveni Cabs`,
      description: `🙏 ${tour.duration} spiritual journey | Expert guides • Comfortable travel • Hassle-free darshan. 3000+ blessed pilgrims. Book your divine journey today!`,
      type: 'website',
      locale: 'en_IN',
      siteName: 'Triveni Cabs',
      images: [
        {
          url: tour.images.hero,
          width: 1200,
          height: 630,
          alt: `${tourName} pilgrimage tour package with Triveni Cabs`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${tourName} Divine Tour | ${startingPrice}`,
      description: `🙏 Spiritual journey with comfort • Expert guidance • Hassle-free darshan. Book your blessed journey!`,
      images: [tour.images.hero],
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
