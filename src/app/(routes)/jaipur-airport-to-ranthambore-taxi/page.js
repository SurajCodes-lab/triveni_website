import AirportToCityClient from '@/components/airport/AirportToCityClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

const ROUTE = {
  airport: 'Jaipur Airport',
  city: 'Ranthambore',
  distance: '180 km',
  duration: '3 hr',
  fare: 2799,
  slug: 'jaipur-airport-to-ranthambore-taxi',
  faqs: [
    { question: 'What is the fare from Jaipur Airport to Ranthambore?', answer: 'A sedan from Jaipur Airport to Ranthambore (Sawai Madhopur) costs ₹2,799 all-inclusive. SUV options start at ₹3,919. Toll, fuel, and driver charges are all covered.' },
    { question: 'How far is Ranthambore from Jaipur Airport?', answer: 'Ranthambore National Park (Sawai Madhopur) is approximately 180 km from Jaipur Airport. The drive takes about 3 hours via NH-11/NH-21.' },
    { question: 'Can the driver drop me at my Ranthambore resort?', answer: 'Yes, we provide door-to-door service. Whether your resort is in the Ranthambore zone or Sawai Madhopur town, the driver will drop you right at the entrance.' },
    { question: 'What is the best time to book a cab for Ranthambore safari?', answer: 'Ranthambore National Park is open from October to June. The peak tiger-sighting season is November to March. We recommend booking your airport transfer along with your safari dates.' },
    { question: 'Do you offer a Jaipur Airport to Ranthambore round trip package?', answer: 'Yes, we offer round-trip and multi-day packages. Many tourists book a Jaipur Airport pickup, 2-3 nights at Ranthambore, and then a return to Jaipur Airport. Contact us for custom pricing.' },
  ],
};

export const metadata = {
  title: tightenTitle(`Jaipur Airport to Ranthambore Taxi ₹${ROUTE.fare} | Meet & Greet — 4.9★`),
  description: `Book Jaipur Airport to Ranthambore taxi at ₹${ROUTE.fare}. Direct transfer to safari zone. Flight tracking, meet & greet. 24/7 by Triveni Cabs.`,
  keywords: 'jaipur airport to ranthambore taxi, jaipur airport to ranthambore cab, jaipur to ranthambore airport taxi, taxi from jaipur airport to ranthambore, ranthambore airport pickup, flight tracked ranthambore taxi, fixed fare ranthambore cab, jaipur airport ranthambore transfer, book cab online, taxi service india, airport transfer, airport pickup drop, triveni cabs',
  alternates: { canonical: `https://www.trivenicabs.in/${ROUTE.slug}` },
  openGraph: {
    title: `Jaipur Airport to Ranthambore Taxi — Just ₹${ROUTE.fare}`,
    description: `Reliable Jaipur Airport to Ranthambore transfer. ${ROUTE.distance}, ${ROUTE.duration}. All-inclusive. Book now!`,
    url: `https://www.trivenicabs.in/${ROUTE.slug}`,
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: `Jaipur Airport to Ranthambore Taxi — Just ₹${ROUTE.fare}`,
    description: `Reliable Jaipur Airport to Ranthambore transfer. ${ROUTE.distance}, ${ROUTE.duration}. All-inclusive. Book now!`,
    creator: '@trivenicabs',
    site: '@trivenicabs',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Airport Transfer', name: 'Jaipur Airport to Ranthambore Taxi',
  provider: { '@type': 'LocalBusiness', name: 'Triveni Cabs', telephone: '+91-7668570551', url: 'https://www.trivenicabs.in' },
  areaServed: { '@type': 'Place', name: 'Ranthambore' },
  offers: { '@type': 'Offer', price: String(ROUTE.fare), priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '122', bestRating: '5' },
  review: [
    { '@type': 'Review', author: { '@type': 'Person', name: 'Rahul Sharma' }, datePublished: '2026-03-15', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Excellent service from Triveni Cabs for our Ranthambore airport transfer. Driver was on time, vehicle was clean, and the fare was exactly as quoted. Will book again.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Priya Verma' }, datePublished: '2026-02-22', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Booked this cab to Ranthambore for a family trip. Smooth ride, no hidden charges, and the driver was very polite. Highly recommend Triveni Cabs.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Amit Kumar' }, datePublished: '2026-01-30', reviewRating: { '@type': 'Rating', ratingValue: '4', bestRating: '5' }, reviewBody: 'Good experience overall. Flight tracking worked well even though our flight was delayed. Driver waited at the airport without any extra charges.' }
  ],
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "80", "bestRating": "5", "worstRating": "1" },
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
    { '@type': 'ListItem', position: 3, name: 'Jaipur Airport to Ranthambore', item: `https://www.trivenicabs.in/${ROUTE.slug}` },
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
