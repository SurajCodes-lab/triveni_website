import AirportToCityClient from '@/components/airport/AirportToCityClient';

export const revalidate = 3600;

const ROUTE = {
  airport: 'Jaipur Airport',
  city: 'Jodhpur',
  distance: '340 km',
  duration: '5 hr',
  fare: 4499,
  slug: 'jaipur-airport-to-jodhpur-taxi',
  faqs: [
    { question: 'What is the cab fare from Jaipur Airport to Jodhpur?', answer: 'A sedan from Jaipur Airport (Sanganer) to Jodhpur costs ₹4,499 all-inclusive. SUV options like Innova are available at ₹6,299. Tolls, fuel, and driver charges are included.' },
    { question: 'How long does the Jaipur Airport to Jodhpur drive take?', answer: 'The journey covers approximately 340 km via NH-62 and takes about 5 hours. The route passes through Ajmer and Beawar with excellent highway conditions.' },
    { question: 'Can I stop at Ajmer or Pushkar on the way to Jodhpur?', answer: 'Yes, a stop at Ajmer (Dargah Sharif) or Pushkar is a popular choice. Short stops of 30-45 minutes can be arranged at no extra charge. Longer sightseeing stops may incur a small waiting fee.' },
    { question: 'Is it better to fly or drive from Jaipur to Jodhpur?', answer: 'While flights take 1 hour, driving offers flexibility to stop at Ajmer, Pushkar, and enjoy the Rajasthani landscape. Our comfortable AC sedans and SUVs make the 5-hour drive enjoyable.' },
    { question: 'Do you provide a return cab from Jodhpur to Jaipur Airport?', answer: 'Yes, we offer round-trip and one-way options. For round trips from Jaipur Airport to Jodhpur and back, you get discounted rates. Contact us for a custom quote.' },
  ],
};

export const metadata = {
  title: `Jaipur Airport to Jodhpur Taxi ₹${ROUTE.fare} | Meet & Greet — 4.9★`,
  description: `Book Jaipur Airport to Jodhpur taxi at ₹${ROUTE.fare}. Fixed fare, flight tracking, meet & greet. Via Ajmer. 24/7 service by Triveni Cabs.`,
  keywords: 'jaipur airport to jodhpur taxi, jaipur airport to jodhpur cab, jaipur to jodhpur airport taxi, taxi from jaipur airport to jodhpur, jodhpur airport pickup, flight tracked jodhpur taxi, fixed fare jodhpur cab, jaipur airport jodhpur transfer, book cab online, taxi service india, airport transfer, airport pickup drop, triveni cabs',
  alternates: { canonical: `https://www.trivenicabs.in/${ROUTE.slug}` },
  openGraph: {
    title: `Jaipur Airport to Jodhpur Taxi — Just ₹${ROUTE.fare}`,
    description: `Reliable Jaipur Airport to Jodhpur transfer. ${ROUTE.distance}, ${ROUTE.duration}. All-inclusive fare. Book now!`,
    url: `https://www.trivenicabs.in/${ROUTE.slug}`,
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: `Jaipur Airport to Jodhpur Taxi — Just ₹${ROUTE.fare}`,
    description: `Reliable Jaipur Airport to Jodhpur transfer. ${ROUTE.distance}, ${ROUTE.duration}. All-inclusive fare. Book now!`,
    creator: '@trivenicabs',
    site: '@trivenicabs',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Airport Transfer', name: 'Jaipur Airport to Jodhpur Taxi',
  provider: { '@type': 'LocalBusiness', name: 'Triveni Cabs', telephone: '+91-7668570551', url: 'https://www.trivenicabs.in' },
  areaServed: { '@type': 'City', name: 'Jodhpur' },
  offers: { '@type': 'Offer', price: String(ROUTE.fare), priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '177', bestRating: '5' },
  review: [
    { '@type': 'Review', author: { '@type': 'Person', name: 'Rahul Sharma' }, datePublished: '2026-03-15', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Excellent service from Triveni Cabs for our Jodhpur airport transfer. Driver was on time, vehicle was clean, and the fare was exactly as quoted. Will book again.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Priya Verma' }, datePublished: '2026-02-22', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Booked this cab to Jodhpur for a family trip. Smooth ride, no hidden charges, and the driver was very polite. Highly recommend Triveni Cabs.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Amit Kumar' }, datePublished: '2026-01-30', reviewRating: { '@type': 'Rating', ratingValue: '4', bestRating: '5' }, reviewBody: 'Good experience overall. Flight tracking worked well even though our flight was delayed. Driver waited at the airport without any extra charges.' }
  ],
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "66", "bestRating": "5", "worstRating": "1" },
    "review": [
      { "@type": "Review", "author": { "@type": "Person", "name": "Pooja Verma" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Booked for my parents who don't speak English well. The driver spoke Hindi, helped them with luggage, and called me on arrival. Truly hassle-free service." },
      { "@type": "Review", "author": { "@type": "Person", "name": "Rajesh Kumar" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Triveni Cabs driver tracked my flight and was waiting at the arrival gate with a name board. Smooth ride, fixed fare honoured, no surge. Better than prepaid taxi." },
      { "@type": "Review", "author": { "@type": "Person", "name": "Sneha Pillai" }, "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }, "reviewBody": "Booked a late-night airport pickup. AC sedan was clean, driver helped with luggage, and the journey was comfortable. Would recommend Triveni Cabs for any airport transfer." }
    ]
  };

const breadcrumbSchema = {
  '@context': 'https://schema.org', '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.trivenicabs.in' },
    { '@type': 'ListItem', position: 2, name: 'Airport Service', item: 'https://www.trivenicabs.in/airport-service' },
    { '@type': 'ListItem', position: 3, name: 'Jaipur Airport to Jodhpur', item: `https://www.trivenicabs.in/${ROUTE.slug}` },
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
