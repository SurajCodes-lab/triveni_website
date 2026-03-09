import { honeymoonTripData } from '@/utilis/honeymoonTripData';
import HoneymoonTripClient from '@/components/audience/HoneymoonTripClient';

const data = honeymoonTripData['manali'];

export const metadata = {
  title: 'Manali Honeymoon by Car | Snow Romance Rs 14,500 | 2026',
  description: 'Book Manali honeymoon by car from Delhi. Sedan Rs 14,500, Innova Rs 18,500. Solang Valley, Old Manali cafes, snow. Decorated car option. Call 7668570551.',
  keywords: 'manali honeymoon by car, honeymoon manali road trip, manali couple trip, romantic trip manali, honeymoon package manali by car',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/honeymoon-manali-by-car' },
  openGraph: { title: 'Manali Honeymoon by Car | Rs 14,500', description: 'Snow, stars & love. Manali honeymoon road trip with decorated car.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/honeymoon-manali-by-car', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Manali Honeymoon by Car | Rs 14,500', description: 'Manali snow romance. Solang Valley, Old Manali cafes.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function HoneymoonManaliPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Honeymoon Trips", "item": "https://www.trivenicabs.in/honeymoon-trip-by-car" }, { "@type": "ListItem", "position": 3, "name": "Manali Honeymoon", "item": "https://www.trivenicabs.in/honeymoon-manali-by-car" }] };
  const tripSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": "Manali Honeymoon by Car", "description": data.tagline, "touristType": "Honeymoon Couple", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551" }, "offers": { "@type": "AggregateOffer", "lowPrice": "14500", "highPrice": "18500", "priceCurrency": "INR" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><HoneymoonTripClient data={data} /></>);
}

export const revalidate = false;
