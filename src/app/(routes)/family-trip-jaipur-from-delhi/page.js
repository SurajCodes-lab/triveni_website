import { familyTripData } from '@/utilis/familyTripData';
import FamilyTripClient from '@/components/audience/FamilyTripClient';

const data = familyTripData['jaipur'];

export const metadata = {
  title: 'Family Trip to Jaipur from Delhi by Car | Innova Rs 7,500 | 2026',
  description: 'Book a family trip to Jaipur from Delhi by car. Innova Rs 7,500, Sedan Rs 5,500. Amber Fort, City Palace, Chokhi Dhani. Kid-friendly. Call 7668570551.',
  keywords: 'family trip jaipur from delhi, delhi to jaipur family tour, jaipur family vacation by car, jaipur trip with kids, family holiday jaipur',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/family-trip-jaipur-from-delhi' },
  openGraph: { title: 'Family Trip to Jaipur from Delhi by Car | Innova Rs 7,500', description: 'Jaipur family trip. Amber Fort elephant ride, Chokhi Dhani, City Palace. From Rs 5,500.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/family-trip-jaipur-from-delhi', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Family Trip to Jaipur from Delhi | Innova Rs 7,500', description: 'Jaipur family trip by car. Forts, palaces & royal experience. From Rs 5,500.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FamilyTripJaipurPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Family Trip to Jaipur from Delhi", "item": "https://www.trivenicabs.in/family-trip-jaipur-from-delhi" }] };
  const tripSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": "Family Trip to Jaipur from Delhi by Car", "description": data.tagline, "touristType": "Family", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551" }, "offers": { "@type": "AggregateOffer", "lowPrice": "5500", "highPrice": "12000", "priceCurrency": "INR" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><FamilyTripClient data={data} /></>);
}

export const revalidate = 3600;
