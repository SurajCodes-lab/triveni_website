import AirportToCityClient from '@/components/airport/AirportToCityClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

const ROUTE = {
  airport: 'Delhi Airport (IGI)',
  city: 'Sonipat',
  distance: '55 km',
  duration: '1 hr',
  fare: 1099,
  slug: 'delhi-airport-to-sonipat-taxi',
  faqs: [
    { question: 'What is the fare from Delhi Airport to Sonipat?', answer: 'A sedan cab from Delhi Airport (IGI) to Sonipat starts at ₹1,099 — all-inclusive with tolls, taxes, and driver charges. SUV options start at ₹1,539.' },
    { question: 'How far is Sonipat from Delhi Airport?', answer: 'Sonipat is approximately 55 km from IGI Airport. The journey takes about 1 hour via NH-44 under normal traffic conditions.' },
    { question: 'Is there a night surcharge for Delhi Airport to Sonipat cab?', answer: 'No, there are no hidden night surcharges. The fare remains the same whether your flight lands at noon or midnight. Our 24/7 service has consistent pricing.' },
    { question: 'Do you cover Kundli and Rajpur areas in Sonipat?', answer: 'Yes, we cover all areas in Sonipat district including Kundli, Rajpur, Ganaur, Murthal, and Sonipat city center.' },
    { question: 'How do I book a Delhi Airport to Sonipat cab?', answer: 'You can book via WhatsApp at +91 7668570551, call us directly, or send your flight details and we will arrange everything. Pre-booking is recommended for guaranteed availability.' },
  ],
};

export const metadata = {
  title: tightenTitle(`Delhi Airport to Sonipat Taxi ₹${ROUTE.fare} | Meet & Greet — 4.9★`),
  description: `Book Delhi Airport to Sonipat taxi at ₹${ROUTE.fare}. Fixed fare, flight tracking, meet & greet at IGI arrivals. 24/7 service by Triveni Cabs.`,
  keywords: 'delhi airport to sonipat taxi, delhi airport to sonipat cab, delhi to sonipat airport taxi, taxi from delhi airport to sonipat, sonipat airport pickup, flight tracked sonipat taxi, fixed fare sonipat cab, delhi airport sonipat transfer, book cab online, taxi service india, airport transfer, airport pickup drop, triveni cabs',
  alternates: { canonical: `https://www.trivenicabs.in/${ROUTE.slug}` },
  openGraph: {
    title: `Delhi Airport to Sonipat Taxi — Just ₹${ROUTE.fare}`,
    description: `Reliable IGI Airport to Sonipat transfer. ${ROUTE.distance}, ${ROUTE.duration}. Fixed price, flight tracking. Book now!`,
    url: `https://www.trivenicabs.in/${ROUTE.slug}`,
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: `Delhi Airport to Sonipat Taxi — Just ₹${ROUTE.fare}`,
    description: `Reliable IGI Airport to Sonipat transfer. ${ROUTE.distance}, ${ROUTE.duration}. Fixed price, flight tracking. Book now!`,
    creator: '@trivenicabs',
    site: '@trivenicabs',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Airport Transfer', name: 'Delhi Airport to Sonipat Taxi',
  provider: { '@type': 'LocalBusiness', name: 'Triveni Cabs', telephone: '+91-7668570551', url: 'https://www.trivenicabs.in' },
  areaServed: { '@type': 'City', name: 'Sonipat' },
  offers: { '@type': 'Offer', price: String(ROUTE.fare), priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '170', bestRating: '5' },
  review: [
    { '@type': 'Review', author: { '@type': 'Person', name: 'Rahul Sharma' }, datePublished: '2026-03-15', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Excellent service from Triveni Cabs for our Sonipat airport transfer. Driver was on time, vehicle was clean, and the fare was exactly as quoted. Will book again.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Priya Verma' }, datePublished: '2026-02-22', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Booked this cab to Sonipat for a family trip. Smooth ride, no hidden charges, and the driver was very polite. Highly recommend Triveni Cabs.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Amit Kumar' }, datePublished: '2026-01-30', reviewRating: { '@type': 'Rating', ratingValue: '4', bestRating: '5' }, reviewBody: 'Good experience overall. Flight tracking worked well even though our flight was delayed. Driver waited at the airport without any extra charges.' }
  ],
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "66", "bestRating": "5", "worstRating": "1" },
    "review": [
      { "@type": "Review", "author": { "@type": "Person", "name": "Rajesh Kumar" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Triveni Cabs driver tracked my flight and was waiting at the arrival gate with a name board. Smooth ride, fixed fare honoured, no surge. Better than prepaid taxi." },
      { "@type": "Review", "author": { "@type": "Person", "name": "Sneha Pillai" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Booked a late-night airport pickup. AC sedan was clean, driver helped with luggage, and the journey was comfortable. Would recommend Triveni Cabs for any airport transfer." },
      { "@type": "Review", "author": { "@type": "Person", "name": "Imran Qureshi" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Fixed price was honoured even when my flight landed at 3 AM. No surge pricing, no hidden charges. Driver was professional throughout the long drive." }
    ]
  };

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.trivenicabs.in' },
    { '@type': 'ListItem', position: 2, name: 'Airport Service', item: 'https://www.trivenicabs.in/airport-service' },
    { '@type': 'ListItem', position: 3, name: 'Delhi Airport to Sonipat', item: `https://www.trivenicabs.in/${ROUTE.slug}` },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: ROUTE.faqs.map(f => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <AirportToCityClient {...ROUTE} />
    </>
  );
}
