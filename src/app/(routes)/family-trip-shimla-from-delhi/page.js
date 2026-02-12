import { familyTripData } from '@/utilis/familyTripData';
import FamilyTripClient from '@/components/audience/FamilyTripClient';

const data = familyTripData['shimla'];

export const metadata = {
  title: 'Family Trip to Shimla from Delhi by Car | Innova Rs 11,500 | 2026',
  description: 'Book a family trip to Shimla from Delhi by car. Innova Crysta Rs 11,500, Sedan Rs 8,500. Toy Train, Kufri, Mall Road. Kid-friendly stops. Call 7668570551.',
  keywords: 'family trip shimla from delhi, delhi to shimla family tour, shimla family vacation by car, shimla trip with kids, family holiday shimla',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/family-trip-shimla-from-delhi' },
  openGraph: {
    title: 'Family Trip to Shimla from Delhi by Car | Innova Rs 11,500',
    description: 'Safe family trip to Shimla from Delhi. Innova Crysta with child seat, experienced hill driver. Toy Train, Kufri, Mall Road. 3-4 days package.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/family-trip-shimla-from-delhi',
    siteName: 'Triveni Cabs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Family Trip to Shimla from Delhi | Innova Rs 11,500',
    description: 'Safe Shimla family trip by car. Innova Crysta, kid-friendly stops. From Rs 8,500.',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FamilyTripShimlaPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Family Trip to Shimla from Delhi", "item": "https://www.trivenicabs.in/family-trip-shimla-from-delhi" },
    ],
  };

  const tripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Family Trip to Shimla from Delhi by Car",
    "description": data.tagline,
    "touristType": "Family",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
    },
    "offers": { "@type": "AggregateOffer", "lowPrice": "8500", "highPrice": "16000", "priceCurrency": "INR" },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FamilyTripClient data={data} />
    </>
  );
}

export const revalidate = 3600;
