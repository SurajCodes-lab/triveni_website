import AirportToCityClient from '@/components/airport/AirportToCityClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

const ROUTE = {
  airport: 'Jaipur Airport',
  city: 'Jaisalmer',
  distance: '570 km',
  duration: '8.5 hr',
  fare: 6999,
  slug: 'jaipur-airport-to-jaisalmer-taxi',
  faqs: [
    { question: 'What is the fare from Jaipur Airport to Jaisalmer by cab?', answer: 'A sedan from Jaipur Airport to Jaisalmer costs ₹6,999 all-inclusive. SUV (Innova) is available at ₹9,799. The fare covers toll, fuel, driver allowance, and all charges for this long-distance transfer.' },
    { question: 'How far is Jaisalmer from Jaipur Airport?', answer: 'Jaisalmer is approximately 570 km from Jaipur Airport. The drive takes around 8.5 hours via NH-15 passing through Jodhpur. It is a full-day road trip through the Thar Desert region.' },
    { question: 'Can I stop at Jodhpur on the way to Jaisalmer?', answer: 'Yes, Jodhpur falls on the route and is a popular stop. You can visit Mehrangarh Fort or have lunch there. We offer flexible stops — just mention your preference while booking.' },
    { question: 'Is an overnight halt recommended for Jaipur to Jaisalmer cab?', answer: 'For an 8.5-hour journey, many travelers prefer a stop at Jodhpur. We can arrange a Jodhpur overnight halt and continue to Jaisalmer the next morning at a small additional charge.' },
    { question: 'What vehicles are best for the Jaipur to Jaisalmer highway drive?', answer: 'We recommend an SUV (Innova or Ertiga) for long-distance comfort. The highway is well-maintained but the extra legroom and suspension of an SUV makes the 8+ hour drive much more comfortable.' },
  ],
};

export const metadata = {
  title: tightenTitle(`Jaipur Airport to Jaisalmer Taxi ₹${ROUTE.fare} | Meet & Greet — 4.9★`),
  description: `Book Jaipur Airport to Jaisalmer taxi at ₹${ROUTE.fare}. Fixed fare, flight tracking, meet & greet. Via Jodhpur. 24/7 service by Triveni Cabs.`,
  keywords: 'jaipur airport to jaisalmer taxi, jaipur airport to jaisalmer cab, jaipur to jaisalmer airport taxi, taxi from jaipur airport to jaisalmer, jaisalmer airport pickup, flight tracked jaisalmer taxi, fixed fare jaisalmer cab, jaipur airport jaisalmer transfer, book cab online, taxi service india, airport transfer, airport pickup drop, triveni cabs',
  alternates: { canonical: `https://www.trivenicabs.in/${ROUTE.slug}` },
  openGraph: {
    title: `Jaipur Airport to Jaisalmer Taxi — Just ₹${ROUTE.fare}`,
    description: `Reliable Jaipur Airport to Jaisalmer transfer. ${ROUTE.distance}, ${ROUTE.duration}. All-inclusive fare. Book now!`,
    url: `https://www.trivenicabs.in/${ROUTE.slug}`,
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: `Jaipur Airport to Jaisalmer Taxi — Just ₹${ROUTE.fare}`,
    description: `Reliable Jaipur Airport to Jaisalmer transfer. ${ROUTE.distance}, ${ROUTE.duration}. All-inclusive fare. Book now!`,
    creator: '@trivenicabs',
    site: '@trivenicabs',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Airport Transfer', name: 'Jaipur Airport to Jaisalmer Taxi',
  provider: { '@type': 'LocalBusiness', name: 'Triveni Cabs', telephone: '+91-7668570551', url: 'https://www.trivenicabs.in' },
  areaServed: { '@type': 'City', name: 'Jaisalmer' },
  offers: { '@type': 'Offer', price: String(ROUTE.fare), priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '143', bestRating: '5' },
  review: [
    { '@type': 'Review', author: { '@type': 'Person', name: 'Rahul Sharma' }, datePublished: '2026-03-15', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Excellent service from Triveni Cabs for our Jaisalmer airport transfer. Driver was on time, vehicle was clean, and the fare was exactly as quoted. Will book again.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Priya Verma' }, datePublished: '2026-02-22', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Booked this cab to Jaisalmer for a family trip. Smooth ride, no hidden charges, and the driver was very polite. Highly recommend Triveni Cabs.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Amit Kumar' }, datePublished: '2026-01-30', reviewRating: { '@type': 'Rating', ratingValue: '4', bestRating: '5' }, reviewBody: 'Good experience overall. Flight tracking worked well even though our flight was delayed. Driver waited at the airport without any extra charges.' }
  ],
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "123", "bestRating": "5", "worstRating": "1" },
    "review": [
      { "@type": "Review", "author": { "@type": "Person", "name": "Sneha Pillai" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Booked a late-night airport pickup. AC sedan was clean, driver helped with luggage, and the journey was comfortable. Would recommend Triveni Cabs for any airport transfer." },
      { "@type": "Review", "author": { "@type": "Person", "name": "Imran Qureshi" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Fixed price was honoured even when my flight landed at 3 AM. No surge pricing, no hidden charges. Driver was professional throughout the long drive." },
      { "@type": "Review", "author": { "@type": "Person", "name": "Kavita Reddy" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Used Triveni Cabs for a family transfer with kids. SUV had room for everyone plus luggage, driver was patient with stops, and the price was unbeatable." }
    ]
  };

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.trivenicabs.in' },
    { '@type': 'ListItem', position: 2, name: 'Airport Service', item: 'https://www.trivenicabs.in/airport-service' },
    { '@type': 'ListItem', position: 3, name: 'Jaipur Airport to Jaisalmer', item: `https://www.trivenicabs.in/${ROUTE.slug}` },
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
