import TrustPageClient from '@/components/competitor/TrustPageClient';

export const revalidate = 3600;

const slug = 'triveni-cabs-fleet';
const pageTitle = 'Triveni Cabs Fleet: Sedans, SUVs, Tempo Travellers | Our Vehicles — 4.9★';
const pageDesc = 'Explore Triveni Cabs fleet: Swift Dzire, Toyota Etios, Innova Crysta, Ertiga, Tempo Travellers. Well-maintained AC vehicles, GPS-tracked, sanitized. Book from ₹9/km. Call 7668570551.';

export const metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ['triveni cabs fleet', 'triveni cabs vehicles', 'innova crysta cab booking', 'swift dzire cab service', 'suv cab booking north india', 'tempo traveller booking', 'ac cab fleet india', 'sedan cab booking', 'ertiga cab service', 'premium cab fleet north india'],
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title: 'Triveni Cabs Fleet — Sedans, SUVs & Tempo Travellers | Well-Maintained AC Vehicles',
    description: pageDesc,
    type: 'website',
    locale: 'en_IN',
    url: `https://www.trivenicabs.in/${slug}`,
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/citypage_hero_section_image.jpg', width: 1200, height: 630, alt: 'Triveni Cabs Fleet' }],
  },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDesc, creator: '@trivenicabs', site: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const faqs = [
  { question: 'What types of vehicles does Triveni Cabs offer?', answer: 'We offer AC sedans (Swift Dzire, Toyota Etios), AC SUVs (Maruti Ertiga, Toyota Innova, Innova Crysta), luxury vehicles, and tempo travellers (12 to 26 seater). All vehicles are well-maintained and regularly inspected.' },
  { question: 'How old are the vehicles in Triveni Cabs fleet?', answer: 'We maintain a modern fleet with most vehicles being under 3-4 years old. Older vehicles are regularly refurbished and replaced to ensure passenger comfort and safety.' },
  { question: 'Can I choose a specific vehicle model?', answer: 'Yes! You can request a specific model (e.g., Innova Crysta vs regular Innova) while booking. We accommodate model preferences subject to availability. Call 7668570551 to confirm.' },
  { question: 'Are Triveni Cabs vehicles sanitized?', answer: 'Yes, all vehicles are sanitized before each trip. We follow a comprehensive cleaning checklist including AC filter cleaning, surface sanitization, and fresh seat covers.' },
  { question: 'Do you have luxury vehicles for weddings and VIP travel?', answer: 'Yes, we offer premium and luxury vehicles for weddings, corporate VIP travel, and special occasions. This includes Innova Crysta, premium sedans, and decorated wedding cars. Contact us for availability.' },
];

export default function FleetPage() {
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    "serviceType": "Cab Fleet Service",
    "name": "Triveni Cabs Fleet — Premium Vehicles for Every Journey",
    "description": pageDesc,
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "10000", "bestRating": "5" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Our Fleet", "item": `https://www.trivenicabs.in/${slug}` }
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
      <TrustPageClient
        title="Our Fleet: Well-Maintained Vehicles for Every Journey"
        subtitle="Triveni Cabs Vehicle Fleet"
        description="From compact sedans for city rides to spacious SUVs for family trips and tempo travellers for groups. Every vehicle is AC, GPS-tracked, sanitized, and regularly inspected."
        sections={[
          {
            title: 'AC Sedans — Comfortable City & Outstation Travel',
            badge: 'Economy Class',
            description: 'Ideal for couples, solo travelers, and small families. Comfortable, fuel-efficient, and perfect for highway travel.',
            features: [
              { title: 'Maruti Swift Dzire', description: 'India\'s most popular sedan. Spacious boot, excellent AC, and smooth ride. Perfect for 2-3 passengers. From ₹9/km.' },
              { title: 'Toyota Etios', description: 'Reliable Toyota build quality. Extra legroom, powerful AC, and large boot space. Ideal for longer trips. From ₹10/km.' },
              { title: 'Hyundai Aura/Xcent', description: 'Modern interiors, great suspension, and fuel-efficient. Comfortable for city and short outstation trips. From ₹9/km.' },
            ],
          },
          {
            title: 'AC SUVs — Spacious Family & Group Travel',
            badge: 'Premium Class',
            description: 'Perfect for families, groups, and those who prefer extra space and comfort. All SUVs come with powerful AC and ample luggage space.',
            features: [
              { title: 'Maruti Ertiga', description: '7-seater with flexible seating. Great for families with kids. Good boot space and smooth ride. From ₹12/km.' },
              { title: 'Toyota Innova', description: 'The gold standard of travel SUVs. 7-8 seats, captain seats, powerful engine. Ideal for outstation. From ₹14/km.' },
              { title: 'Toyota Innova Crysta', description: 'Premium variant with luxury interiors, better suspension, and superior comfort. Our most requested vehicle. From ₹16/km.' },
            ],
          },
          {
            title: 'Tempo Travellers — Group & Event Travel',
            badge: 'Group Class',
            description: 'For large groups, corporate outings, weddings, and pilgrimage tours. Multiple seater options available.',
            features: [
              { title: '12-Seater Tempo Traveller', description: 'Compact group vehicle with pushback seats, AC, and music system. Perfect for small groups. From ₹18/km.' },
              { title: '16-Seater Tempo Traveller', description: 'Mid-size group transport with comfortable seating, charging points, and ample luggage space. From ₹20/km.' },
              { title: '20-26 Seater Options', description: 'Large group buses for corporate events, weddings, and pilgrimage tours. AC, music system, and experienced drivers. From ₹22/km.' },
            ],
          },
          {
            title: 'Fleet Standards & Maintenance',
            badge: 'Quality Assurance',
            description: 'Every vehicle in our fleet meets strict quality standards.',
            items: [
              { title: 'Regular Inspection', description: 'Monthly mechanical inspection and servicing' },
              { title: 'Sanitization', description: 'Pre-trip sanitization with checklist verification' },
              { title: 'GPS Tracking', description: 'Real-time GPS tracking on every vehicle' },
              { title: 'AC Maintenance', description: 'AC filter cleaning and cooling check before each trip' },
              { title: 'Insurance', description: 'Comprehensive insurance coverage on all vehicles' },
              { title: 'Fresh Interiors', description: 'Clean seat covers, air freshener, and water bottles provided' },
              { title: 'First Aid Kit', description: 'Basic first aid kit available in every vehicle' },
              { title: 'Fire Extinguisher', description: 'Safety equipment as per regulations in all vehicles' },
            ],
          },
        ]}
        faqs={faqs}
      />
    </>
  );
}
