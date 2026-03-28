import SeasonalPageClient from '@/components/seasonal/SeasonalPageClient';

export const revalidate = 3600;

const slug = 'guru-purab-amritsar-transport';
const pageTitle = 'Guru Purab 2026 Amritsar Cab Service | Golden Temple Transport — 4.9★';
const pageDesc = 'Book Guru Purab 2026 cab to Amritsar & Golden Temple. Delhi to Amritsar cabs, local darshan transport, Wagah Border trips. Verified drivers, no surge. From ₹5,999. Call 7668570551.';

export const metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ['guru purab amritsar cab 2026', 'guru nanak jayanti cab service', 'golden temple cab booking', 'delhi to amritsar cab guru purab', 'amritsar darshan cab', 'wagah border cab', 'gurudwara visit cab service', 'guru purab travel package', 'amritsar transport service', 'sikh pilgrimage cab'],
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title: 'Guru Purab 2026 — Amritsar & Golden Temple Cab Service | Triveni Cabs',
    description: pageDesc,
    type: 'website',
    locale: 'en_IN',
    url: `https://www.trivenicabs.in/${slug}`,
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/citypage_hero_section_image.jpg', width: 1200, height: 630, alt: 'Guru Purab Amritsar Cab Service' }],
  },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDesc, creator: '@trivenicabs', site: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const faqs = [
  { question: 'When is Guru Purab 2026 and how early should I book a cab?', answer: 'Guru Nanak Jayanti (Guru Purab) in 2026 falls in November. We recommend booking at least 10-15 days in advance as Amritsar sees massive pilgrim rush during this period.' },
  { question: 'Do you provide local Amritsar darshan cabs for Guru Purab?', answer: 'Yes! Our Amritsar local package covers Golden Temple, Jallianwala Bagh, Wagah Border, Partition Museum, and other key gurudwaras. 8-hour and full-day packages available.' },
  { question: 'What is the Delhi to Amritsar cab fare during Guru Purab?', answer: 'Delhi to Amritsar cab fares start from ₹5,999 for a one-way AC sedan trip (450 km). Round-trip packages with 1-2 days stay are also available. No surge pricing during Guru Purab.' },
  { question: 'Can you arrange early morning Golden Temple visit transport?', answer: 'Yes, our drivers are available from 3 AM onwards for early morning (Amrit Vela) darshan at the Golden Temple. Many pilgrims prefer the peaceful pre-dawn hours.' },
  { question: 'Do you cover the Amritsar-Wagah Border route?', answer: 'Yes, Wagah Border ceremony transfer is included in our full-day Amritsar darshan package. We ensure you reach early enough to get good viewing spots for the retreat ceremony.' },
];

export default function GuruPurabPage() {
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    "serviceType": "Guru Purab Amritsar Cab Service",
    "name": "Guru Purab 2026 Amritsar Transport — Triveni Cabs",
    "description": pageDesc,
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
    "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Amritsar" }],
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "10000", "bestRating": "5" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Guru Purab Amritsar Transport", "item": `https://www.trivenicabs.in/${slug}` }
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
        title="Guru Purab Amritsar Transport 2026"
        subtitle="Sacred Pilgrimage Cab Service"
        description="Honor the birth of Guru Nanak Dev Ji with a comfortable journey to the Golden Temple, Amritsar. Delhi to Amritsar cabs, local darshan packages, and Wagah Border trips with verified drivers."
        theme="guru"
        destinations={[
          { name: 'Delhi to Amritsar', distance: '450 km, ~7 hrs', description: 'Comfortable AC cab ride to the holy city of Amritsar via NH44. Smooth highway drive with rest stops.', highlights: ['NH44 Highway', 'Rest Stops', 'Comfortable'], price: '\u20B95,999' },
          { name: 'Golden Temple Darshan', distance: 'Local Amritsar', description: 'Dedicated cab for Golden Temple visit including early morning Amrit Vela darshan and evening Palki Sahib ceremony.', highlights: ['Amrit Vela', 'Palki Sahib', 'Langar'], price: '\u20B9999' },
          { name: 'Wagah Border Ceremony', distance: '30 km from Amritsar', description: 'Witness the iconic Wagah Border retreat ceremony. We ensure early arrival for best viewing spots.', highlights: ['Retreat Ceremony', 'Best Spots', 'On-time'], price: '\u20B9799' },
          { name: 'Amritsar Full Darshan', distance: 'City-wide', description: 'Complete Amritsar tour: Golden Temple, Jallianwala Bagh, Wagah Border, Partition Museum, Durgiana Temple.', highlights: ['All Attractions', 'Full Day', 'Guide Available'], price: '\u20B91,499' },
          { name: 'Chandigarh to Amritsar', distance: '230 km, ~4 hrs', description: 'Quick ride from Chandigarh to Amritsar for Guru Purab. Perfect for those flying into Chandigarh airport.', highlights: ['Airport Pickup', 'Quick Route', 'Affordable'], price: '\u20B93,499' },
          { name: 'Amritsar to Anandpur Sahib', distance: '220 km, ~4.5 hrs', description: 'Visit the birthplace of Khalsa. Combine Amritsar and Anandpur Sahib for a complete Sikh pilgrimage.', highlights: ['Khalsa Heritage', 'Takht Sri Keshgarh', 'Scenic'], price: '\u20B93,499' },
        ]}
        packages={[
          { name: 'Guru Purab Delhi-Amritsar Package', duration: '2N/3D', description: 'Complete round trip from Delhi to Amritsar with Golden Temple darshan and Wagah Border visit.', includes: ['AC Sedan or SUV', 'Round trip all tolls', 'Driver accommodation', 'Wagah Border trip', '24/7 support'], price: '\u20B98,999', popular: true },
          { name: 'Amritsar Darshan Day Package', duration: 'Full Day (12 hrs)', description: 'Full day Amritsar local sightseeing covering all major gurudwaras and attractions.', includes: ['AC Sedan', '12 hours / 120 km', 'All parking fees', 'Experienced local driver', 'Flexible timing'], price: '\u20B91,499', popular: false },
          { name: 'Sikh Pilgrimage Circuit', duration: '4N/5D', description: 'Delhi-Amritsar-Anandpur Sahib-Chandigarh complete Sikh pilgrimage circuit.', includes: ['AC SUV', 'All tolls & fuel', 'Driver accommodation', 'Flexible itinerary', 'All gurudwara transfers'], price: '\u20B914,999', popular: false },
          { name: 'Group Guru Purab Tour', duration: 'Custom', description: 'Tempo traveller for sangat groups traveling together for Guru Purab celebrations.', includes: ['12-26 seater tempo', 'All permits & tolls', 'Music system', 'Experienced driver', 'Custom stops'], price: '\u20B912,999', popular: false },
        ]}
        faqs={faqs}
      />
    </>
  );
}
