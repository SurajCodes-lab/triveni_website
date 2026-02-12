import { honeymoonTripData } from '@/utilis/honeymoonTripData';
import HoneymoonTripClient from '@/components/audience/HoneymoonTripClient';

const data = honeymoonTripData['mussoorie'];

export const metadata = {
  title: 'Mussoorie Honeymoon by Car | Romantic Road Trip Rs 9,000 | 2026',
  description: 'Book Mussoorie honeymoon by car from Delhi. Sedan Rs 9,000, Innova Rs 12,000. Camel Back Road, Gun Hill, Landour cafes. Decorated car option. Call 7668570551.',
  keywords: 'mussoorie honeymoon by car, honeymoon mussoorie road trip, mussoorie couple trip, romantic trip mussoorie, honeymoon package mussoorie',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/honeymoon-mussoorie-by-car' },
  openGraph: { title: 'Mussoorie Honeymoon by Car | Rs 9,000', description: 'Misty mountain romance in Queen of Hills. Decorated car option available.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/honeymoon-mussoorie-by-car', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Mussoorie Honeymoon by Car | Rs 9,000', description: 'Mussoorie honeymoon road trip. Mist, mountains & romance.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function HoneymoonMussooriePage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Honeymoon Trips", "item": "https://www.trivenicabs.in/honeymoon-trip-by-car" }, { "@type": "ListItem", "position": 3, "name": "Mussoorie Honeymoon", "item": "https://www.trivenicabs.in/honeymoon-mussoorie-by-car" }] };
  const tripSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": "Mussoorie Honeymoon by Car", "description": data.tagline, "touristType": "Honeymoon Couple", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551" }, "offers": { "@type": "AggregateOffer", "lowPrice": "9000", "highPrice": "12000", "priceCurrency": "INR" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><HoneymoonTripClient data={data} /></>);
}

export const revalidate = 3600;
