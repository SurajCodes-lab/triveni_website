import AirportToCityClient from '@/components/airport/AirportToCityClient';

export const revalidate = 3600;

const ROUTE = {
  airport: 'Delhi Airport (IGI)',
  city: 'Ghaziabad',
  distance: '40 km',
  duration: '1 hr',
  fare: 999,
  slug: 'delhi-airport-to-ghaziabad-cab',
  faqs: [
    { question: 'What is the cab fare from Delhi Airport to Ghaziabad?', answer: 'A sedan cab from Delhi Airport (IGI) to Ghaziabad starts at ₹999. This is a fixed, all-inclusive fare with no surge pricing. SUVs are available at ₹1,399.' },
    { question: 'How far is Ghaziabad from Delhi Airport?', answer: 'Ghaziabad is approximately 40 km from IGI Airport. The drive takes about 1 hour via NH-24, though peak-hour traffic can extend this to 1.5 hours.' },
    { question: 'Do you provide midnight pickup from Delhi Airport to Ghaziabad?', answer: 'Yes, our service runs 24/7. Late-night and early-morning flights are fully covered with no extra night charges on the base fare.' },
    { question: 'Which areas in Ghaziabad do you cover for airport drop?', answer: 'We cover all areas including Indirapuram, Vaishali, Kaushambi, Raj Nagar Extension, Vasundhara, Crossings Republik, and Lal Kuan.' },
    { question: 'Can I book a round trip from Ghaziabad to Delhi Airport?', answer: 'Absolutely. You can book a one-way or round-trip transfer. For round trips, you get a discounted return fare. Contact us on WhatsApp for a custom quote.' },
  ],
};

export const metadata = {
  title: `Delhi Airport to Ghaziabad Cab ₹${ROUTE.fare} | Meet & Greet — 4.9★`,
  description: `Book Delhi Airport to Ghaziabad cab at ₹${ROUTE.fare}. Fixed fare, flight tracking, meet & greet at IGI arrivals, AC sedan/SUV. 24/7 service by Triveni Cabs.`,
  keywords: 'delhi airport to ghaziabad cab, delhi airport to ghaziabad taxi, delhi to ghaziabad airport taxi, taxi from delhi airport to ghaziabad, ghaziabad airport pickup, flight tracked ghaziabad taxi, fixed fare ghaziabad cab, delhi airport ghaziabad transfer, book cab online, taxi service india, airport transfer, airport pickup drop, triveni cabs',
  alternates: { canonical: `https://www.trivenicabs.in/${ROUTE.slug}` },
  openGraph: {
    title: `Delhi Airport to Ghaziabad Cab — Just ₹${ROUTE.fare}`,
    description: `Reliable IGI Airport to Ghaziabad transfer. ${ROUTE.distance}, ${ROUTE.duration}. Fixed price, flight tracking, meet & greet. Book now!`,
    url: `https://www.trivenicabs.in/${ROUTE.slug}`,
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: `Delhi Airport to Ghaziabad Cab — Just ₹${ROUTE.fare}`,
    description: `Reliable IGI Airport to Ghaziabad transfer. ${ROUTE.distance}, ${ROUTE.duration}. Fixed price, flight tracking, meet & greet. Book now!`,
    creator: '@trivenicabs',
    site: '@trivenicabs',
  },
};

const serviceSchema = {
  '@context': 'https://schema.org', '@type': 'Service',
  serviceType: 'Airport Transfer', name: 'Delhi Airport to Ghaziabad Cab',
  provider: { '@type': 'LocalBusiness', name: 'Triveni Cabs', telephone: '+91-7668570551', url: 'https://www.trivenicabs.in' },
  areaServed: { '@type': 'City', name: 'Ghaziabad' },
  offers: { '@type': 'Offer', price: String(ROUTE.fare), priceCurrency: 'INR', availability: 'https://schema.org/InStock' },
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '73', bestRating: '5' },
  review: [
    { '@type': 'Review', author: { '@type': 'Person', name: 'Rahul Sharma' }, datePublished: '2026-03-15', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Excellent service from Triveni Cabs for our Ghaziabad airport transfer. Driver was on time, vehicle was clean, and the fare was exactly as quoted. Will book again.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Priya Verma' }, datePublished: '2026-02-22', reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' }, reviewBody: 'Booked this cab to Ghaziabad for a family trip. Smooth ride, no hidden charges, and the driver was very polite. Highly recommend Triveni Cabs.' },
    { '@type': 'Review', author: { '@type': 'Person', name: 'Amit Kumar' }, datePublished: '2026-01-30', reviewRating: { '@type': 'Rating', ratingValue: '4', bestRating: '5' }, reviewBody: 'Good experience overall. Flight tracking worked well even though our flight was delayed. Driver waited at the airport without any extra charges.' }
  ],
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "79", "bestRating": "5", "worstRating": "1" },
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
    { '@type': 'ListItem', position: 3, name: 'Delhi Airport to Ghaziabad', item: `https://www.trivenicabs.in/${ROUTE.slug}` },
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
