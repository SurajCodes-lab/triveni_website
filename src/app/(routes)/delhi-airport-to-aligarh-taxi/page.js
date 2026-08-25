import AirportToCityClient from '@/components/airport/AirportToCityClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

const ROUTE = {
  airport: 'Delhi Airport (IGI)',
  city: 'Aligarh',
  distance: '140 km',
  duration: '2.5 hr',
  fare: 2199,
  slug: 'delhi-airport-to-aligarh-taxi',
  faqs: [
    { question: 'What is the fare from Delhi Airport to Aligarh?', answer: 'A sedan from Delhi Airport (IGI) to Aligarh costs ₹2,199. SUV options (Innova/Ertiga) are available at ₹3,079. The fare is all-inclusive — no hidden charges, tolls, or surge pricing.' },
    { question: 'How long is the drive from Delhi Airport to Aligarh?', answer: 'The journey from IGI Airport to Aligarh covers approximately 140 km and takes around 2.5 hours via the Yamuna Expressway / NH-91.' },
    { question: 'Which route is taken for Delhi Airport to Aligarh?', answer: 'Our drivers take the Yamuna Expressway which is the fastest and most comfortable route. Alternatively, NH-91 via Bulandshahr can be used depending on traffic conditions.' },
    { question: 'Can I be dropped at Aligarh Muslim University (AMU) campus?', answer: 'Yes, we drop you at any location within Aligarh city — AMU campus, Civil Lines, Ramghat Road, or any specific address you provide.' },
    { question: 'Is advance booking required for Delhi Airport to Aligarh cab?', answer: 'While we try to accommodate last-minute requests, advance booking is recommended for guaranteed availability, especially during peak travel seasons and exam periods.' },
  ],
};

export const metadata = {
  title: tightenTitle(`Delhi Airport to Aligarh Taxi ₹${ROUTE.fare} | Meet & Greet — 4.9★`),
  description: `Book Delhi Airport to Aligarh taxi at ₹${ROUTE.fare}. Fixed fare, flight tracking, meet & greet at IGI. Via Yamuna Expressway. 24/7 by Triveni Cabs.`,
  keywords: 'delhi airport to aligarh taxi, delhi airport to aligarh cab, delhi to aligarh airport taxi, taxi from delhi airport to aligarh, aligarh airport pickup, flight tracked aligarh taxi, fixed fare aligarh cab, delhi airport aligarh transfer, book cab online, taxi service india, airport transfer, airport pickup drop, triveni cabs',
  alternates: { canonical: `https://www.trivenicabs.in/${ROUTE.slug}` },
  openGraph: {
    title: `Delhi Airport to Aligarh Taxi — Just ₹${ROUTE.fare}`,
    description: `Reliable IGI Airport to Aligarh transfer. ${ROUTE.distance}, ${ROUTE.duration}. All-inclusive fare. Book now!`,
    url: `https://www.trivenicabs.in/${ROUTE.slug}`,
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: `Delhi Airport to Aligarh Taxi — Just ₹${ROUTE.fare}`,
    description: `Reliable IGI Airport to Aligarh transfer. ${ROUTE.distance}, ${ROUTE.duration}. All-inclusive fare. Book now!`,
    creator: '@trivenicabs',
    site: '@trivenicabs',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Airport Transfer', name: 'Delhi Airport to Aligarh Taxi',
  provider: { '@type': 'LocalBusiness', name: 'Triveni Cabs', telephone: '+91-7668570551', url: 'https://www.trivenicabs.in' },
  areaServed: { '@type': 'City', name: 'Aligarh' },
  offers: { '@type': 'Offer', price: String(ROUTE.fare), priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '64', bestRating: '5' },
  review: [
    { '@type': 'Review', author: { '@type': 'Person', name: 'Rahul Sharma' }, datePublished: '2026-03-15', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Excellent service from Triveni Cabs for our Aligarh airport transfer. Driver was on time, vehicle was clean, and the fare was exactly as quoted. Will book again.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Priya Verma' }, datePublished: '2026-02-22', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Booked this cab to Aligarh for a family trip. Smooth ride, no hidden charges, and the driver was very polite. Highly recommend Triveni Cabs.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Amit Kumar' }, datePublished: '2026-01-30', reviewRating: { '@type': 'Rating', ratingValue: '4', bestRating: '5' }, reviewBody: 'Good experience overall. Flight tracking worked well even though our flight was delayed. Driver waited at the airport without any extra charges.' }
  ],
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "159", "bestRating": "5", "worstRating": "1" },
    "review": [
      { "@type": "Review", "author": { "@type": "Person", "name": "Arjun Nair" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "International arrival pickup at IGI T3 went perfectly. Driver had nameboard, helped with currency exchange directions, and got us to our hotel without delay." },
      { "@type": "Review", "author": { "@type": "Person", "name": "Pooja Verma" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Booked for my parents who don't speak English well. The driver spoke Hindi, helped them with luggage, and called me on arrival. Truly hassle-free service." },
      { "@type": "Review", "author": { "@type": "Person", "name": "Rajesh Kumar" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Triveni Cabs driver tracked my flight and was waiting at the arrival gate with a name board. Smooth ride, fixed fare honoured, no surge. Better than prepaid taxi." }
    ]
  };

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.trivenicabs.in' },
    { '@type': 'ListItem', position: 2, name: 'Airport Service', item: 'https://www.trivenicabs.in/airport-service' },
    { '@type': 'ListItem', position: 3, name: 'Delhi Airport to Aligarh', item: `https://www.trivenicabs.in/${ROUTE.slug}` },
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
