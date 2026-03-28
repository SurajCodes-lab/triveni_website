import SeasonalPageClient from '@/components/seasonal/SeasonalPageClient';

export const revalidate = 3600;

const slug = 'summer-vacation-cab-packages-2026';
const pageTitle = 'Summer Vacation Cab Packages 2026 | Hill Station Cabs — 4.9★';
const pageDesc = 'Book summer vacation 2026 cab packages to Shimla, Manali, Mussoorie, Nainital, Dharamshala. AC sedan & SUV, verified drivers, no surge pricing. Packages from ₹3,999. Call 7668570551.';

export const metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ['summer vacation cab packages 2026', 'hill station cab booking', 'summer holiday cab india', 'shimla manali cab package', 'summer trip cab north india', 'family vacation cab 2026', 'hill station taxi service', 'summer travel cab booking', 'cool places cab package', 'nainital cab summer 2026'],
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title: 'Summer Vacation 2026 Cab Packages — Beat the Heat, Hit the Hills | Triveni Cabs',
    description: pageDesc,
    type: 'website',
    locale: 'en_IN',
    url: `https://www.trivenicabs.in/${slug}`,
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/citypage_hero_section_image.jpg', width: 1200, height: 630, alt: 'Summer Vacation Cab Packages' }],
  },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDesc, creator: '@trivenicabs', site: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const faqs = [
  { question: 'When is the best time to book summer vacation cabs?', answer: 'Book at least 2-3 weeks in advance for summer trips (April-June). Hill stations like Shimla, Manali, and Mussoorie see peak demand. Early booking ensures vehicle availability and best rates.' },
  { question: 'Are your cabs air-conditioned for summer travel?', answer: 'Yes, all our cabs are fully air-conditioned. We offer AC sedans (Swift Dzire, Etios), AC SUVs (Innova, Crysta, Ertiga), and AC tempo travellers for group travel.' },
  { question: 'Can I customize the summer vacation itinerary?', answer: 'Absolutely! All our packages are fully customizable. Add or remove stops, extend days, change destinations. Call 7668570551 or WhatsApp for a custom quote tailored to your family needs.' },
  { question: 'Do you provide child seats for family summer trips?', answer: 'Yes, child/booster seats are available on request at no extra charge. Please mention this requirement while booking so we can arrange it in advance.' },
  { question: 'What is included in the summer vacation cab package price?', answer: 'Our packages include AC vehicle, experienced driver, driver accommodation, fuel, toll charges, and parking fees. Meals, hotel stays, and entry tickets are not included unless specified.' },
];

export default function SummerVacationPage() {
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    "serviceType": "Summer Vacation Cab Service",
    "name": "Summer Vacation Cab Packages 2026 — Triveni Cabs",
    "description": pageDesc,
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
    "areaServed": { "@type": "Country", "name": "India" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "10000", "bestRating": "5" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Summer Vacation Cab Packages 2026", "item": `https://www.trivenicabs.in/${slug}` }
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
        title="Summer Vacation Cab Packages 2026"
        subtitle="Beat the Heat — Hill Station Specials"
        description="Escape the scorching summer heat with our curated hill station cab packages. Delhi to Shimla, Manali, Mussoorie, Nainital, and Dharamshala. AC cabs, verified drivers, and family-friendly service."
        theme="summer"
        destinations={[
          { name: 'Delhi to Shimla', distance: '350 km, ~7 hrs', description: 'Cool mountain air, colonial charm, and stunning views. Perfect summer escape for families.', highlights: ['Mall Road', 'Kufri', 'Jakhu Temple'], price: '\u20B94,999' },
          { name: 'Delhi to Manali', distance: '530 km, ~12 hrs', description: 'Snow-capped peaks, adventure sports, and riverside cafes. The ultimate summer destination.', highlights: ['Solang Valley', 'Rohtang', 'Old Manali'], price: '\u20B97,499' },
          { name: 'Delhi to Mussoorie', distance: '290 km, ~6.5 hrs', description: 'Queen of Hills with pleasant 20-25°C weather. Kempty Falls, Gun Hill, and Camel Back Road.', highlights: ['Kempty Falls', 'Gun Hill', 'Library'], price: '\u20B94,499' },
          { name: 'Delhi to Nainital', distance: '300 km, ~7 hrs', description: 'Lake city nestled in Kumaon hills. Boating, nature walks, and scenic viewpoints.', highlights: ['Naini Lake', 'Snow View', 'Mall Road'], price: '\u20B94,999' },
          { name: 'Delhi to Dharamshala', distance: '475 km, ~9 hrs', description: 'Tibetan culture, cricket stadium, and lush green valleys. McLeodganj cafes and monasteries.', highlights: ['McLeodganj', 'Cricket Stadium', 'Dal Lake'], price: '\u20B96,999' },
          { name: 'Delhi to Kasol', distance: '520 km, ~11 hrs', description: 'Mini Israel in Parvati Valley. Riverside camping, hot springs, and trekking trails.', highlights: ['Parvati Valley', 'Hot Springs', 'Trekking'], price: '\u20B97,499' },
        ]}
        packages={[
          { name: 'Summer Family Shimla Package', duration: '2N/3D', description: 'Delhi-Shimla-Kufri round trip with all sightseeing, ideal for families with kids.', includes: ['AC Sedan or SUV', 'Experienced hill driver', 'All tolls & parking', 'Flexible stops', '24/7 phone support'], price: '\u20B96,999', popular: true },
          { name: 'Manali Adventure Package', duration: '3N/4D', description: 'Delhi-Manali covering Solang Valley, Rohtang (permit based), Old Manali, and river rafting spots.', includes: ['AC SUV (Innova/Ertiga)', 'Driver stay included', 'Rohtang permit assistance', 'All tolls & fuel', 'Free cancellation (48 hrs)'], price: '\u20B911,999', popular: false },
          { name: 'Mussoorie-Dhanaulti Combo', duration: '2N/3D', description: 'Twin hill station delight — Mussoorie sightseeing + Dhanaulti eco park and Surkanda Devi temple.', includes: ['AC Sedan', 'All local sightseeing', 'Toll & parking', 'Flexible departure', 'No hidden charges'], price: '\u20B95,999', popular: false },
          { name: 'Group Hill Station Tour', duration: 'Custom', description: 'Tempo traveller packages for groups of 12-20. Shimla, Manali, Kasol, or any custom destination.', includes: ['12-20 seater AC tempo', 'Music system on board', 'Experienced mountain driver', 'All permits included', 'Custom itinerary planning'], price: '\u20B914,999', popular: false },
        ]}
        faqs={faqs}
      />
    </>
  );
}
