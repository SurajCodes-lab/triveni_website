import { familyTripData } from '@/utilis/familyTripData';
import FamilyTripClient from '@/components/audience/FamilyTripClient';

const data = familyTripData['kashmir'];

export const metadata = {
  title: 'Family Trip to Kashmir from Delhi by Car | Innova Rs 28,000 | 2026',
  description: 'Book a family trip to Kashmir from Delhi. Innova Rs 28,000, Sedan Rs 22,000. Srinagar, Gulmarg, Pahalgam, Dal Lake houseboat. Kid-friendly. Call 7668570551.',
  keywords: 'family trip kashmir from delhi, delhi to kashmir family tour, kashmir family vacation by car, kashmir trip with kids, family holiday kashmir srinagar',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/family-trip-kashmir-from-delhi' },
  openGraph: { title: 'Family Trip to Kashmir from Delhi | Innova Rs 28,000', description: 'Kashmir family trip. Dal Lake, Gulmarg Gondola, Pahalgam pony rides. From Rs 22,000.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/family-trip-kashmir-from-delhi', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Family Trip to Kashmir from Delhi | Rs 28,000', description: 'Paradise on Earth family vacation. Dal Lake, Gulmarg, Pahalgam. From Rs 22,000.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function FamilyTripKashmirPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Family Trip to Kashmir from Delhi", "item": "https://www.trivenicabs.in/family-trip-kashmir-from-delhi" }] };
  const tripSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": "Family Trip to Kashmir from Delhi", "description": data.tagline, "touristType": "Family", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551" }, "offers": { "@type": "AggregateOffer", "lowPrice": "22000", "highPrice": "38000", "priceCurrency": "INR" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><FamilyTripClient data={data} /></>);
}

export const revalidate = 3600;
