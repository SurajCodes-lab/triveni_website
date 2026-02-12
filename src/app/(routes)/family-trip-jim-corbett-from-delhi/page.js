import { familyTripData } from '@/utilis/familyTripData';
import FamilyTripClient from '@/components/audience/FamilyTripClient';

const data = familyTripData['jim-corbett'];

export const metadata = {
  title: 'Family Trip to Jim Corbett from Delhi by Car | Innova Rs 8,500 | 2026',
  description: 'Book a family trip to Jim Corbett from Delhi by car. Innova Rs 8,500, Sedan Rs 6,000. Jungle safari, tiger spotting, nature walks. Kid-friendly. Call 7668570551.',
  keywords: 'family trip jim corbett from delhi, delhi to corbett family tour, jim corbett family vacation, corbett safari with kids, family holiday jim corbett',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/family-trip-jim-corbett-from-delhi' },
  openGraph: { title: 'Family Trip to Jim Corbett from Delhi | Innova Rs 8,500', description: 'Jim Corbett family trip. Jungle safari, tiger spotting. From Rs 6,000.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/family-trip-jim-corbett-from-delhi', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Family Trip to Jim Corbett from Delhi | Rs 8,500', description: 'Jim Corbett family safari. Tigers, elephants & nature. From Rs 6,000.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FamilyTripJimCorbettPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Family Trip to Jim Corbett from Delhi", "item": "https://www.trivenicabs.in/family-trip-jim-corbett-from-delhi" }] };
  const tripSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": "Family Trip to Jim Corbett from Delhi by Car", "description": data.tagline, "touristType": "Family", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551" }, "offers": { "@type": "AggregateOffer", "lowPrice": "6000", "highPrice": "12000", "priceCurrency": "INR" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><FamilyTripClient data={data} /></>);
}

export const revalidate = 3600;
