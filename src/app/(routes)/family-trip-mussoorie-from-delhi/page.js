import { familyTripData } from '@/utilis/familyTripData';
import FamilyTripClient from '@/components/audience/FamilyTripClient';

const data = familyTripData['mussoorie'];

export const metadata = {
  title: 'Family Trip to Mussoorie from Delhi by Car | Innova Rs 9,000 | 2026',
  description: 'Book a family trip to Mussoorie from Delhi by car. Innova Rs 9,000, Sedan Rs 6,500. Kempty Falls, Gun Hill, Mall Road. Kid-friendly. Call 7668570551.',
  keywords: 'family trip mussoorie from delhi, delhi to mussoorie family tour, mussoorie family vacation by car, mussoorie trip with kids, family holiday mussoorie',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/family-trip-mussoorie-from-delhi' },
  openGraph: { title: 'Family Trip to Mussoorie from Delhi by Car | Innova Rs 9,000', description: 'Mussoorie family trip. Kempty Falls, Gun Hill cable car. From Rs 6,500.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/family-trip-mussoorie-from-delhi', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Family Trip to Mussoorie from Delhi | Innova Rs 9,000', description: 'Mussoorie family trip by car. Queen of Hills for the whole family. From Rs 6,500.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FamilyTripMussooriePage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Family Trip to Mussoorie from Delhi", "item": "https://www.trivenicabs.in/family-trip-mussoorie-from-delhi" }] };
  const tripSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": "Family Trip to Mussoorie from Delhi by Car", "description": data.tagline, "touristType": "Family", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551" }, "offers": { "@type": "AggregateOffer", "lowPrice": "6500", "highPrice": "13000", "priceCurrency": "INR" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><FamilyTripClient data={data} /></>);
}

export const revalidate = false;
