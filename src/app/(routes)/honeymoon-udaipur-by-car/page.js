import { honeymoonTripData } from '@/utilis/honeymoonTripData';
import HoneymoonTripClient from '@/components/audience/HoneymoonTripClient';

const data = honeymoonTripData['udaipur'];

export const metadata = {
  title: 'Udaipur Honeymoon by Car | Royal Romance Rs 17,000 | 2026',
  description: 'Book Udaipur honeymoon by car from Delhi. Sedan Rs 17,000, Innova Rs 22,000. Lake Pichola, City Palace, rooftop dining. Decorated car option. Call 7668570551.',
  keywords: 'udaipur honeymoon by car, honeymoon udaipur road trip, udaipur couple trip, romantic trip udaipur, honeymoon package udaipur by car',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/honeymoon-udaipur-by-car' },
  openGraph: { title: 'Udaipur Honeymoon by Car | Rs 17,000', description: 'Venice of the East. Lake Pichola, palaces, rooftop dining. Decorated car.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/honeymoon-udaipur-by-car', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Udaipur Honeymoon by Car | Rs 17,000', description: 'Royal Udaipur honeymoon. Lakes, palaces & romantic dining.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function HoneymoonUdaipurPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Honeymoon Trips", "item": "https://www.trivenicabs.in/honeymoon-trip-by-car" }, { "@type": "ListItem", "position": 3, "name": "Udaipur Honeymoon", "item": "https://www.trivenicabs.in/honeymoon-udaipur-by-car" }] };
  const tripSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": "Udaipur Honeymoon by Car", "description": data.tagline, "touristType": "Honeymoon Couple", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551" }, "offers": { "@type": "AggregateOffer", "lowPrice": "17000", "highPrice": "22000", "priceCurrency": "INR" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><HoneymoonTripClient data={data} /></>);
}

export const revalidate = 3600;
