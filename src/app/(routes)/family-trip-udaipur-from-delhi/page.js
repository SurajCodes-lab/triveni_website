import { familyTripData } from '@/utilis/familyTripData';
import FamilyTripClient from '@/components/audience/FamilyTripClient';

const data = familyTripData['udaipur'];

export const metadata = {
  title: 'Family Trip to Udaipur from Delhi by Car | Innova Rs 17,000 | 2026',
  description: 'Book a family trip to Udaipur from Delhi by car. Innova Rs 17,000, Sedan Rs 13,000. City Palace, Lake Pichola, Vintage Car Museum. Kid-friendly. Call 7668570551.',
  keywords: 'family trip udaipur from delhi, delhi to udaipur family tour, udaipur family vacation by car, udaipur trip with kids, family holiday udaipur',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/family-trip-udaipur-from-delhi' },
  openGraph: { title: 'Family Trip to Udaipur from Delhi | Innova Rs 17,000', description: 'Udaipur family trip. City Palace, Lake Pichola boat, Vintage Car Museum. From Rs 13,000.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/family-trip-udaipur-from-delhi', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Family Trip to Udaipur from Delhi | Rs 17,000', description: 'City of Lakes family trip. Royal palaces, lake boating & more. From Rs 13,000.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FamilyTripUdaipurPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Family Trip to Udaipur from Delhi", "item": "https://www.trivenicabs.in/family-trip-udaipur-from-delhi" }] };
  const tripSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": "Family Trip to Udaipur from Delhi by Car", "description": data.tagline, "touristType": "Family", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551" }, "offers": { "@type": "AggregateOffer", "lowPrice": "13000", "highPrice": "24000", "priceCurrency": "INR" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><FamilyTripClient data={data} /></>);
}

export const revalidate = false;
