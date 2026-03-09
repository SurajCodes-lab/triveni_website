import { honeymoonTripData } from '@/utilis/honeymoonTripData';
import HoneymoonTripClient from '@/components/audience/HoneymoonTripClient';

const data = honeymoonTripData['jaipur-udaipur'];

export const metadata = {
  title: 'Jaipur Udaipur Honeymoon by Car | Royal Rajasthan Rs 16,000 | 2026',
  description: 'Book Jaipur-Udaipur honeymoon by car from Delhi. Sedan Rs 16,000, Innova Rs 21,000. Amber Fort, Lake Pichola, palaces. Decorated car. Call 7668570551.',
  keywords: 'jaipur udaipur honeymoon, honeymoon jaipur udaipur by car, rajasthan honeymoon road trip, romantic trip jaipur udaipur, honeymoon rajasthan circuit',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/honeymoon-jaipur-udaipur' },
  openGraph: { title: 'Jaipur Udaipur Honeymoon | Rs 16,000', description: 'Royal Rajasthan honeymoon. Forts, palaces, lake romance. Decorated car.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/honeymoon-jaipur-udaipur', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Jaipur Udaipur Honeymoon | Rs 16,000', description: 'Royal Rajasthan romance. Palaces, lakes & heritage circuit.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function HoneymoonJaipurUdaipurPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Honeymoon Trips", "item": "https://www.trivenicabs.in/honeymoon-trip-by-car" }, { "@type": "ListItem", "position": 3, "name": "Jaipur Udaipur Honeymoon", "item": "https://www.trivenicabs.in/honeymoon-jaipur-udaipur" }] };
  const tripSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": "Jaipur Udaipur Honeymoon by Car", "description": data.tagline, "touristType": "Honeymoon Couple", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551" }, "offers": { "@type": "AggregateOffer", "lowPrice": "16000", "highPrice": "21000", "priceCurrency": "INR" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><HoneymoonTripClient data={data} /></>);
}

export const revalidate = false;
