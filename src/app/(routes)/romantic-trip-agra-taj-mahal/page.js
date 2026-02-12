import { honeymoonTripData } from '@/utilis/honeymoonTripData';
import HoneymoonTripClient from '@/components/audience/HoneymoonTripClient';

const data = honeymoonTripData['agra'];

export const metadata = {
  title: 'Romantic Trip to Agra Taj Mahal | Couple Trip Rs 4,500 | 2026',
  description: 'Book romantic Agra trip from Delhi. Sedan Rs 4,500, Innova Rs 8,500. Taj Mahal sunrise, Mehtab Bagh sunset, decorated car. Couples special. Call 7668570551.',
  keywords: 'romantic trip agra taj mahal, couple trip agra, taj mahal romantic trip, agra honeymoon trip, romantic agra day trip from delhi',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/romantic-trip-agra-taj-mahal' },
  openGraph: { title: 'Romantic Trip to Agra Taj Mahal | Rs 4,500', description: 'Monument of love. Taj Mahal sunrise, Mehtab Bagh sunset, decorated car.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/romantic-trip-agra-taj-mahal', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Romantic Agra Trip | Taj Mahal | Rs 4,500', description: 'The world most romantic monument. Taj Mahal couple trip from Delhi.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function RomanticTripAgraPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Honeymoon Trips", "item": "https://www.trivenicabs.in/honeymoon-trip-by-car" }, { "@type": "ListItem", "position": 3, "name": "Romantic Trip Agra Taj Mahal", "item": "https://www.trivenicabs.in/romantic-trip-agra-taj-mahal" }] };
  const tripSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": "Romantic Trip to Agra Taj Mahal", "description": data.tagline, "touristType": "Honeymoon Couple", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551" }, "offers": { "@type": "AggregateOffer", "lowPrice": "4500", "highPrice": "8500", "priceCurrency": "INR" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><HoneymoonTripClient data={data} /></>);
}

export const revalidate = 3600;
