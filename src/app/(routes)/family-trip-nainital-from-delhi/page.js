import { familyTripData } from '@/utilis/familyTripData';
import FamilyTripClient from '@/components/audience/FamilyTripClient';

const data = familyTripData['nainital'];

export const metadata = {
  title: 'Family Trip to Nainital from Delhi by Car | Innova Rs 10,000 | 2026',
  description: 'Book a family trip to Nainital from Delhi by car. Innova Rs 10,000, Sedan Rs 7,500. Naini Lake boating, Zoo, Cable Car. Kid-friendly. Call 7668570551.',
  keywords: 'family trip nainital from delhi, delhi to nainital family tour, nainital family vacation by car, nainital trip with kids, family holiday nainital',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/family-trip-nainital-from-delhi' },
  openGraph: { title: 'Family Trip to Nainital from Delhi by Car | Innova Rs 10,000', description: 'Nainital family trip. Lake boating, Zoo, Snow View cable car. From Rs 7,500.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/family-trip-nainital-from-delhi', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Family Trip to Nainital from Delhi | Innova Rs 10,000', description: 'Nainital family trip by car. Lakeside bliss for the whole family. From Rs 7,500.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FamilyTripNainitalPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Family Trip to Nainital from Delhi", "item": "https://www.trivenicabs.in/family-trip-nainital-from-delhi" }] };
  const tripSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": "Family Trip to Nainital from Delhi by Car", "description": data.tagline, "touristType": "Family", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551" }, "offers": { "@type": "AggregateOffer", "lowPrice": "7500", "highPrice": "15000", "priceCurrency": "INR" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><FamilyTripClient data={data} /></>);
}

export const revalidate = 3600;
