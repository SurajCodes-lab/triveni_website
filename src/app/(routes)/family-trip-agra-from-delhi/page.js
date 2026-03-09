import { familyTripData } from '@/utilis/familyTripData';
import FamilyTripClient from '@/components/audience/FamilyTripClient';

const data = familyTripData['agra'];

export const metadata = {
  title: 'Family Trip to Agra from Delhi by Car | Innova Rs 6,500 | 2026',
  description: 'Book a family trip to Agra from Delhi by car. Innova Rs 6,500, Sedan Rs 4,500. Taj Mahal, Agra Fort, Wildlife SOS. Kids under 15 free at Taj. Call 7668570551.',
  keywords: 'family trip agra from delhi, delhi to agra family tour, agra family vacation by car, taj mahal with kids, family day trip agra',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/family-trip-agra-from-delhi' },
  openGraph: { title: 'Family Trip to Agra from Delhi | Innova Rs 6,500', description: 'Agra family trip. Taj Mahal, Agra Fort, Wildlife SOS. Kids under 15 free. From Rs 4,500.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/family-trip-agra-from-delhi', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Family Trip to Agra | Taj Mahal with Kids | Rs 6,500', description: 'Agra family trip by car via Yamuna Expressway. Kids under 15 free at Taj Mahal.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FamilyTripAgraPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Family Trip to Agra from Delhi", "item": "https://www.trivenicabs.in/family-trip-agra-from-delhi" }] };
  const tripSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": "Family Trip to Agra from Delhi by Car", "description": data.tagline, "touristType": "Family", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551" }, "offers": { "@type": "AggregateOffer", "lowPrice": "4500", "highPrice": "10000", "priceCurrency": "INR" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><FamilyTripClient data={data} /></>);
}

export const revalidate = false;
