import { familyTripData } from '@/utilis/familyTripData';
import FamilyTripClient from '@/components/audience/FamilyTripClient';

const data = familyTripData['rishikesh'];

export const metadata = {
  title: 'Family Trip to Rishikesh from Delhi by Car | Innova Rs 7,500 | 2026',
  description: 'Book a family trip to Rishikesh from Delhi by car. Innova Rs 7,500, Sedan Rs 5,500. Ganga Aarti, Ram Jhula, river beach. Kid-friendly rafting. Call 7668570551.',
  keywords: 'family trip rishikesh from delhi, delhi to rishikesh family tour, rishikesh family vacation by car, rishikesh trip with kids, family holiday rishikesh',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/family-trip-rishikesh-from-delhi' },
  openGraph: { title: 'Family Trip to Rishikesh from Delhi | Innova Rs 7,500', description: 'Rishikesh family trip. Ganga Aarti, Ram Jhula, river beach. From Rs 5,500.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/family-trip-rishikesh-from-delhi', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Family Trip to Rishikesh from Delhi | Rs 7,500', description: 'Rishikesh family trip. Ganga, adventure & spirituality. From Rs 5,500.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FamilyTripRishikeshPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Family Trip to Rishikesh from Delhi", "item": "https://www.trivenicabs.in/family-trip-rishikesh-from-delhi" }] };
  const tripSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": "Family Trip to Rishikesh from Delhi by Car", "description": data.tagline, "touristType": "Family", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551" }, "offers": { "@type": "AggregateOffer", "lowPrice": "5500", "highPrice": "11000", "priceCurrency": "INR" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><FamilyTripClient data={data} /></>);
}

export const revalidate = false;
