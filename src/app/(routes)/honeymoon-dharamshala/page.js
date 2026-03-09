import { honeymoonTripData } from '@/utilis/honeymoonTripData';
import HoneymoonTripClient from '@/components/audience/HoneymoonTripClient';

const data = honeymoonTripData['dharamshala'];

export const metadata = {
  title: 'Dharamshala Honeymoon by Car | Himalayan Peace Rs 11,000 | 2026',
  description: 'Book Dharamshala honeymoon by car from Delhi. Sedan Rs 11,000, Innova Rs 15,000. McLeodganj cafes, Bhagsunag waterfall, Triund trek. Call 7668570551.',
  keywords: 'dharamshala honeymoon by car, honeymoon dharamshala road trip, dharamshala couple trip, mcleodganj honeymoon, romantic trip dharamshala',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/honeymoon-dharamshala' },
  openGraph: { title: 'Dharamshala Honeymoon by Car | Rs 11,000', description: 'Himalayan peace & Tibetan romance. McLeodganj cafes, trekking, mountains.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/honeymoon-dharamshala', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Dharamshala Honeymoon | Rs 11,000', description: 'Himalayan honeymoon. Dharamshala mountains, cafes & Tibetan charm.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function HoneymoonDharamshalaPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Honeymoon Trips", "item": "https://www.trivenicabs.in/honeymoon-trip-by-car" }, { "@type": "ListItem", "position": 3, "name": "Dharamshala Honeymoon", "item": "https://www.trivenicabs.in/honeymoon-dharamshala" }] };
  const tripSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": "Dharamshala Honeymoon by Car", "description": data.tagline, "touristType": "Honeymoon Couple", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551" }, "offers": { "@type": "AggregateOffer", "lowPrice": "11000", "highPrice": "15000", "priceCurrency": "INR" } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } })) };

  return (<><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} /><HoneymoonTripClient data={data} /></>);
}

export const revalidate = false;
