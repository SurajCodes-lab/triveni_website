import { honeymoonTripData } from '@/utilis/honeymoonTripData';
import HoneymoonTripClient from '@/components/audience/HoneymoonTripClient';

const data = honeymoonTripData['nainital'];

export const metadata = {
  title: 'Nainital Honeymoon by Car | Lakeside Romance Rs 10,000 | 2026',
  description: 'Book Nainital honeymoon by car from Delhi. Sedan Rs 10,000, Innova Rs 13,000. Naini Lake boating, Snow View, Sattal. Decorated car option. Call 7668570551.',
  keywords: 'nainital honeymoon by car, honeymoon nainital road trip, nainital couple trip, romantic trip nainital, honeymoon package nainital',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/honeymoon-nainital-by-car' },
  openGraph: { title: 'Nainital Honeymoon by Car | Rs 10,000', description: 'Lakeside romance at Nainital. Boat rides, mountain views, decorated car.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/honeymoon-nainital-by-car', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Nainital Honeymoon by Car | Rs 10,000', description: 'Lakeside romance under the stars. Nainital honeymoon road trip.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function HoneymoonNainitalPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Honeymoon Trips", "item": "https://www.trivenicabs.in/honeymoon-trip-by-car" }, { "@type": "ListItem", "position": 3, "name": "Nainital Honeymoon", "item": "https://www.trivenicabs.in/honeymoon-nainital-by-car" }] };
  const tripSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": "Nainital Honeymoon by Car", "description": data.tagline, "touristType": "Honeymoon Couple", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551" }, "offers": { "@type": "AggregateOffer", "lowPrice": "10000", "highPrice": "13000", "priceCurrency": "INR" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><HoneymoonTripClient data={data} /></>);
}

export const revalidate = 3600;
