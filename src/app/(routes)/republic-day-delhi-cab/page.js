import SeasonalPageClient from '@/components/seasonal/SeasonalPageClient';

export const revalidate = 3600;

const slug = 'republic-day-delhi-cab';
const pageTitle = 'Republic Day 2026 Delhi Cab Service | Parade & Sightseeing — 4.9★';
const pageDesc = 'Book Republic Day 2026 cab in Delhi for Kartavya Path parade, India Gate, Red Fort sightseeing. Airport transfers, local taxi. No surge pricing. From ₹999. Call 7668570551.';

export const metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ['republic day delhi cab 2026', 'republic day parade cab booking', 'kartavya path cab service', '26 january delhi cab', 'republic day sightseeing delhi', 'india gate cab 26 jan', 'republic day airport transfer delhi', 'delhi local cab republic day', 'republic day travel delhi', '26 january taxi service'],
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title: 'Republic Day 2026 Delhi Cab Service — Parade, Sightseeing & Airport Transfers | Triveni Cabs',
    description: pageDesc,
    type: 'website',
    locale: 'en_IN',
    url: `https://www.trivenicabs.in/${slug}`,
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/citypage_hero_section_image.jpg', width: 1200, height: 630, alt: 'Republic Day Delhi Cab Service' }],
  },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDesc, creator: '@trivenicabs', site: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const faqs = [
  { question: 'Are cabs available near Kartavya Path on Republic Day?', answer: 'Yes, but several roads around Kartavya Path (Rajpath) are closed on January 26. Our drivers are familiar with alternate routes and drop-off points closest to the parade viewing area. Book early for guaranteed availability.' },
  { question: 'Do you charge extra for Republic Day cab bookings?', answer: 'No, Triveni Cabs maintains fixed pricing without surge charges even on Republic Day. Our transparent billing ensures you pay only the quoted fare with no hidden charges.' },
  { question: 'Can I book a cab for Republic Day Delhi sightseeing?', answer: 'Yes! Our Republic Day special package covers India Gate, Red Fort, Rashtrapati Bhavan, National Museum, and other patriotic landmarks. Available as 4-hour, 8-hour, or full-day packages.' },
  { question: 'Do you provide airport transfers on Republic Day?', answer: 'Yes, 24/7 airport pickup and drop services are available on Republic Day. Flight tracking included. We factor in road closures and traffic diversions to ensure timely service.' },
  { question: 'Is it safe to travel in Delhi on Republic Day with a cab?', answer: 'Absolutely. Security is heightened across Delhi on Republic Day. Our verified drivers know the route restrictions and diversion plans. All vehicles are GPS-tracked for your safety.' },
];

export default function RepublicDayPage() {
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    "serviceType": "Republic Day Delhi Cab Service",
    "name": "Republic Day 2026 Delhi Cab Service — Triveni Cabs",
    "description": pageDesc,
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
    "areaServed": { "@type": "City", "name": "Delhi" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "10000", "bestRating": "5" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Republic Day Delhi Cab", "item": `https://www.trivenicabs.in/${slug}` }
    ]
  };
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SeasonalPageClient
        title="Republic Day Delhi Cab Service 2026"
        subtitle="January 26 — Parade & Sightseeing"
        description="Experience Republic Day 2026 in Delhi with reliable cab service. Kartavya Path parade transport, patriotic sightseeing tours, airport transfers, and local travel. Our drivers know all route diversions."
        theme="republic"
        destinations={[
          { name: 'Kartavya Path (Rajpath) Area', distance: 'Central Delhi', description: 'Get dropped closest to the Republic Day Parade route. Our drivers know the best alternate routes and nearest access points.', highlights: ['Parade Route', 'Best Access', 'Pre-dawn Pickup'], price: '\u20B9999' },
          { name: 'India Gate & War Memorial', distance: 'Central Delhi', description: 'Visit the illuminated India Gate and National War Memorial. Especially stunning on Republic Day evening.', highlights: ['Illuminated', 'War Memorial', 'Evening Visit'], price: '\u20B9799' },
          { name: 'Red Fort & Old Delhi', distance: 'Old Delhi', description: 'Visit the iconic Red Fort, Chandni Chowk, and Jama Masjid. Republic Day celebrations add special charm.', highlights: ['Heritage', 'Street Food', 'Culture'], price: '\u20B9799' },
          { name: 'Rashtrapati Bhavan', distance: 'Central Delhi', description: 'Drive past the Presidential Palace and see the Beating Retreat ceremony preparations. Architectural marvel.', highlights: ['Beating Retreat', 'Architecture', 'Iconic'], price: '\u20B9799' },
          { name: 'Delhi Airport Transfers', distance: 'IGI T1/T2/T3', description: '24/7 airport pickup/drop with flight tracking. Route diversions pre-planned for Republic Day traffic.', highlights: ['Flight Tracking', '24/7', 'Route Planned'], price: '\u20B9599' },
          { name: 'Delhi to Agra Day Trip', distance: '230 km, ~4 hrs', description: 'Combine Republic Day in Delhi with a Taj Mahal trip. Leave early morning, return by evening.', highlights: ['Taj Mahal', 'Day Trip', 'Quick Getaway'], price: '\u20B92,499' },
        ]}
        packages={[
          { name: 'Republic Day Parade Package', duration: '4 Hours', description: 'Early morning pickup (5 AM), drop near Kartavya Path, and post-parade return. Ideal for parade viewing.', includes: ['AC Sedan', '4 hours / 40 km', 'Pre-dawn pickup', 'Route diversion knowledge', 'Waiting included'], price: '\u20B9999', popular: true },
          { name: 'Delhi Patriotic Tour', duration: '8 Hours', description: 'Full day sightseeing covering India Gate, Red Fort, Rashtrapati Bhavan, National Museum, and Parliament.', includes: ['AC Sedan', '8 hours / 80 km', 'All parking fees', 'Experienced Delhi driver', 'Flexible timing'], price: '\u20B91,499', popular: false },
          { name: 'Republic Day Weekend Combo', duration: '2N/3D', description: 'Delhi sightseeing + Agra day trip. Make the most of the Republic Day long weekend.', includes: ['AC Sedan', 'Delhi + Agra sightseeing', 'All tolls & parking', 'Driver accommodation', '24/7 support'], price: '\u20B94,999', popular: false },
          { name: 'Group Republic Day Tour', duration: 'Custom', description: 'Tempo traveller for school groups, families, or organizations attending Republic Day events in Delhi.', includes: ['12-26 seater tempo', 'All permits', 'Route diversion planning', 'Experienced driver', 'Custom itinerary'], price: '\u20B94,999', popular: false },
        ]}
        faqs={faqs}
      />
    </>
  );
}
