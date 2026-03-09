import { getItinerary, getRelatedItineraries } from '@/utilis/cityItineraryData';
import CityItineraryClient from '@/components/itinerary/CityItineraryClient';
import { notFound } from 'next/navigation';

const data = getItinerary('kashmir-in-5-days-itinerary');

if (!data) notFound();

export const revalidate = false;

export const metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  keywords: data.metaKeywords,
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/kashmir-in-5-days-itinerary' },
  openGraph: {
    title: data.metaTitle,
    description: data.metaDescription,
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/kashmir-in-5-days-itinerary',
    siteName: 'Triveni Cabs',
  },
  twitter: {
    card: 'summary_large_image',
    title: data.metaTitle,
    description: data.metaDescription,
    creator: '@trivenicabs',
    site: '@trivenicabs',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function Page() {
  const related = getRelatedItineraries('kashmir-in-5-days-itinerary', 4);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": data.title, "item": `https://www.trivenicabs.in/kashmir-in-5-days-itinerary` },
    ],
  };

  const touristTripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": data.title,
    "description": data.metaDescription,
    "touristType": "Cultural Tourist",
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": data.dayWise.flatMap((day, dayIndex) =>
        day.places.map((place, placeIndex) => ({
          "@type": "ListItem",
          "position": dayIndex * 10 + placeIndex + 1,
          "name": `Day ${day.day}: ${place.name}${place.time ? ` (${place.time})` : ''}`,
        }))
      ),
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" },
    },
    "offers": { "@type": "AggregateOffer", "lowPrice": String(data.priceNum), "highPrice": String(data.priceNum * 4), "priceCurrency": "INR" },
  };

  const faqSchema = data.faqs && data.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
    })),
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }} />
      {faqSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />}
      <CityItineraryClient data={{ ...data, related }} />
    </>
  );
}
