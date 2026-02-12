import { honeymoonTripData } from '@/utilis/honeymoonTripData';
import HoneymoonTripClient from '@/components/audience/HoneymoonTripClient';

const data = honeymoonTripData['kashmir'];

export const metadata = {
  title: 'Kashmir Honeymoon by Car | Paradise Romance Rs 28,000 | 2026',
  description: 'Book Kashmir honeymoon package. Sedan Rs 28,000, Innova Rs 35,000. Srinagar, Gulmarg, Pahalgam, Dal Lake houseboat. Decorated car option. Call 7668570551.',
  keywords: 'kashmir honeymoon by car, honeymoon kashmir package, kashmir couple trip, romantic trip kashmir, honeymoon srinagar gulmarg pahalgam',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/honeymoon-kashmir-by-car' },
  openGraph: { title: 'Kashmir Honeymoon by Car | Rs 28,000', description: 'Paradise on Earth honeymoon. Dal Lake, Gulmarg, Pahalgam. Decorated car.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/honeymoon-kashmir-by-car', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Kashmir Honeymoon | Rs 28,000', description: 'Ultimate Kashmir honeymoon. Dal Lake houseboats & Gulmarg snow.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function HoneymoonKashmirPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Honeymoon Trips", "item": "https://www.trivenicabs.in/honeymoon-trip-by-car" }, { "@type": "ListItem", "position": 3, "name": "Kashmir Honeymoon", "item": "https://www.trivenicabs.in/honeymoon-kashmir-by-car" }] };
  const tripSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": "Kashmir Honeymoon by Car", "description": data.tagline, "touristType": "Honeymoon Couple", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551" }, "offers": { "@type": "AggregateOffer", "lowPrice": "28000", "highPrice": "35000", "priceCurrency": "INR" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><HoneymoonTripClient data={data} /></>);
}

export const revalidate = 3600;
