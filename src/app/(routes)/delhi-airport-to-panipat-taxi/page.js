import AirportToCityClient from '@/components/airport/AirportToCityClient';

export const revalidate = 3600;

const ROUTE = {
  airport: 'Delhi Airport (IGI)',
  city: 'Panipat',
  distance: '100 km',
  duration: '2 hr',
  fare: 1699,
  slug: 'delhi-airport-to-panipat-taxi',
  faqs: [
    { question: 'What is the fare from Delhi Airport to Panipat by cab?', answer: 'A sedan from Delhi Airport to Panipat costs ₹1,699 all-inclusive. SUV (Innova/Ertiga) options start at ₹2,379. Tolls and taxes are included in the fare.' },
    { question: 'How long does the Delhi Airport to Panipat cab ride take?', answer: 'The journey covers approximately 100 km via NH-44 and takes around 2 hours under normal traffic conditions.' },
    { question: 'Can I book a cab from Panipat to Delhi Airport?', answer: 'Yes, we offer both pickup from and drop to Delhi Airport. The same fare applies for Panipat to Delhi Airport transfers. Book via WhatsApp or call.' },
    { question: 'What is the best route from Delhi Airport to Panipat?', answer: 'The driver takes NH-44 (GT Road / Karnal Highway) which is the fastest and most well-maintained route. The expressway section ensures a smooth ride.' },
    { question: 'Do you offer group transfers from Delhi Airport to Panipat?', answer: 'Yes, for groups we offer Tempo Travellers (12-16 seater) starting at ₹3,738. Ideal for wedding parties or corporate groups arriving together.' },
  ],
};

export const metadata = {
  title: `Delhi Airport to Panipat Taxi ₹${ROUTE.fare} | Meet & Greet — 4.9★`,
  description: `Book Delhi Airport to Panipat taxi at ₹${ROUTE.fare}. Fixed fare, flight tracking, meet & greet at IGI. Via NH-44. 24/7 service by Triveni Cabs.`,
  keywords: 'delhi airport to panipat taxi, delhi airport to panipat cab, delhi to panipat airport taxi, taxi from delhi airport to panipat, panipat airport pickup, flight tracked panipat taxi, fixed fare panipat cab, delhi airport panipat transfer, book cab online, taxi service india, airport transfer, airport pickup drop, triveni cabs',
  alternates: { canonical: `https://www.trivenicabs.in/${ROUTE.slug}` },
  openGraph: {
    title: `Delhi Airport to Panipat Taxi — Just ₹${ROUTE.fare}`,
    description: `Reliable IGI Airport to Panipat transfer. ${ROUTE.distance}, ${ROUTE.duration}. All-inclusive fare, flight tracking. Book now!`,
    url: `https://www.trivenicabs.in/${ROUTE.slug}`,
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: `Delhi Airport to Panipat Taxi — Just ₹${ROUTE.fare}`,
    description: `Reliable IGI Airport to Panipat transfer. ${ROUTE.distance}, ${ROUTE.duration}. All-inclusive fare, flight tracking. Book now!`,
    creator: '@trivenicabs',
    site: '@trivenicabs',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Airport Transfer', name: 'Delhi Airport to Panipat Taxi',
  provider: { '@type': 'LocalBusiness', name: 'Triveni Cabs', telephone: '+91-7668570551', url: 'https://www.trivenicabs.in' },
  areaServed: { '@type': 'City', name: 'Panipat' },
  offers: { '@type': 'Offer', price: String(ROUTE.fare), priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '103', bestRating: '5' },
  review: [
    { '@type': 'Review', author: { '@type': 'Person', name: 'Rahul Sharma' }, datePublished: '2026-03-15', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Excellent service from Triveni Cabs for our Panipat airport transfer. Driver was on time, vehicle was clean, and the fare was exactly as quoted. Will book again.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Priya Verma' }, datePublished: '2026-02-22', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Booked this cab to Panipat for a family trip. Smooth ride, no hidden charges, and the driver was very polite. Highly recommend Triveni Cabs.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Amit Kumar' }, datePublished: '2026-01-30', reviewRating: { '@type': 'Rating', ratingValue: '4', bestRating: '5' }, reviewBody: 'Good experience overall. Flight tracking worked well even though our flight was delayed. Driver waited at the airport without any extra charges.' }
  ],
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "180", "bestRating": "5", "worstRating": "1" },
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
    { '@type': 'ListItem', position: 3, name: 'Delhi Airport to Panipat', item: `https://www.trivenicabs.in/${ROUTE.slug}` },
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
