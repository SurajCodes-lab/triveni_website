import { familyTripData } from '@/utilis/familyTripData';
import FamilyTripClient from '@/components/audience/FamilyTripClient';

const data = familyTripData['manali'];

export const metadata = {
  title: 'Family Trip to Manali from Delhi by Car | Innova Rs 14,500 | 2026',
  description: 'Book a family trip to Manali from Delhi by car. Innova Crysta Rs 14,500, Sedan Rs 11,000. Solang Valley, Rohtang Pass, snow activities. Call 7668570551.',
  keywords: 'family trip manali from delhi, delhi to manali family tour, manali family vacation by car, manali trip with kids, family holiday manali',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/family-trip-manali-from-delhi' },
  openGraph: {
    title: 'Family Trip to Manali from Delhi by Car | Innova Rs 14,500',
    description: 'Safe family trip to Manali. Solang Valley snow, Rohtang Pass, Hadimba Temple. Innova Crysta with child seat.',
    type: 'website', locale: 'en_IN',
    url: 'https://www.trivenicabs.in/family-trip-manali-from-delhi', siteName: 'Triveni Cabs',
  },
  twitter: { card: 'summary_large_image', title: 'Family Trip to Manali from Delhi | Innova Rs 14,500', description: 'Manali family trip by car. Snow, adventure & mountain magic. From Rs 11,000.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FamilyTripManaliPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
    { "@type": "ListItem", "position": 2, "name": "Family Trip to Manali from Delhi", "item": "https://www.trivenicabs.in/family-trip-manali-from-delhi" },
  ]};
  const tripSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": "Family Trip to Manali from Delhi by Car", "description": data.tagline, "touristType": "Family", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551" }, "offers": { "@type": "AggregateOffer", "lowPrice": "11000", "highPrice": "20000", "priceCurrency": "INR" }};
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

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
