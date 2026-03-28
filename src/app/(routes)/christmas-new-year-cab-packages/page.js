import SeasonalPageClient from '@/components/seasonal/SeasonalPageClient';

export const revalidate = 3600;

const slug = 'christmas-new-year-cab-packages';
const pageTitle = 'Christmas & New Year Cab Packages 2026 | Book Holiday Cabs — 4.9★';
const pageDesc = 'Book Christmas & New Year 2026 cab packages across India. AC sedan & SUV, verified drivers, no surge pricing. Delhi, Agra, Jaipur, Shimla, Manali holiday cabs from ₹2,499. Call 7668570551.';

export const metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ['christmas cab packages 2026', 'new year cab booking', 'christmas holiday cab india', 'new year eve cab service', 'christmas travel packages north india', 'holiday season cab booking', 'new year trip cab delhi', 'christmas shimla cab package', 'new year manali cab', 'festive season taxi service'],
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title: 'Christmas & New Year 2026 Cab Packages — Holiday Travel Made Easy | Triveni Cabs',
    description: pageDesc,
    type: 'website',
    locale: 'en_IN',
    url: `https://www.trivenicabs.in/${slug}`,
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/citypage_hero_section_image.jpg', width: 1200, height: 630, alt: 'Christmas New Year Cab Packages' }],
  },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDesc, creator: '@trivenicabs', site: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const faqs = [
  { question: 'Do you charge surge pricing during Christmas and New Year?', answer: 'No, Triveni Cabs never charges surge pricing. Our rates are fixed and transparent year-round, including festive seasons. Book early to lock in the best rates for your holiday trip.' },
  { question: 'Can I book a cab for a multi-day Christmas or New Year trip?', answer: 'Yes! We offer multi-day packages for Christmas and New Year trips to Shimla, Manali, Jaipur, Agra, and more. Packages include driver accommodation and fuel. Call 7668570551 for custom quotes.' },
  { question: 'Is advance booking required for Christmas/New Year cab packages?', answer: 'We strongly recommend booking at least 7-10 days in advance during the festive season as demand is very high. Early booking also ensures the best vehicle availability and pricing.' },
  { question: 'What vehicles are available for Christmas and New Year trips?', answer: 'We offer AC sedans (Swift Dzire, Etios), SUVs (Innova, Innova Crysta, Ertiga), and tempo travellers for group trips. All vehicles are sanitized and well-maintained.' },
  { question: 'Do you provide airport pickup for Christmas/New Year travelers?', answer: 'Yes, we provide 24/7 airport pickup and drop services at all major airports including Delhi IGI, Jaipur, Chandigarh, and Dehradun. Flight tracking included at no extra cost.' },
];

export default function ChristmasNewYearPage() {
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    "serviceType": "Christmas & New Year Holiday Cab Service",
    "name": "Christmas & New Year Cab Packages 2026 — Triveni Cabs",
    "description": pageDesc,
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
    "areaServed": { "@type": "Country", "name": "India" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "10000", "bestRating": "5" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Christmas & New Year Cab Packages", "item": `https://www.trivenicabs.in/${slug}` }
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
        title="Christmas & New Year Cab Packages 2026"
        subtitle="Holiday Season Special Offers"
        description="Celebrate Christmas and ring in the New Year with stress-free travel. Book verified AC cabs to Shimla, Manali, Jaipur, Agra, and more. No surge pricing, 24/7 support, and transparent billing."
        theme="christmas"
        destinations={[
          { name: 'Delhi to Shimla', distance: '350 km, ~7 hrs', description: 'Escape to snow-covered hills for a white Christmas. Visit Mall Road, Kufri, and enjoy cozy winter vibes.', highlights: ['Snowfall', 'Mall Road', 'Kufri'], price: '\u20B94,999' },
          { name: 'Delhi to Manali', distance: '530 km, ~12 hrs', description: 'Ring in the New Year amidst the Himalayas. Rohtang Pass, Solang Valley, and Old Manali await.', highlights: ['Snow Sports', 'Rohtang', 'Cafes'], price: '\u20B97,499' },
          { name: 'Delhi to Jaipur', distance: '280 km, ~5 hrs', description: 'Celebrate amidst royal palaces and vibrant bazaars. Amer Fort, Hawa Mahal, and festive Rajasthani culture.', highlights: ['Heritage', 'Shopping', 'Cuisine'], price: '\u20B93,499' },
          { name: 'Delhi to Agra', distance: '230 km, ~4 hrs', description: 'Visit the Taj Mahal under winter skies. Perfect for a quick holiday getaway with family.', highlights: ['Taj Mahal', 'Agra Fort', 'Fatehpur Sikri'], price: '\u20B92,499' },
          { name: 'Delhi to Rishikesh', distance: '240 km, ~5.5 hrs', description: 'Spiritual New Year celebration on the banks of the Ganga. Adventure sports and yoga retreats.', highlights: ['Ganga Aarti', 'Rafting', 'Yoga'], price: '\u20B93,999' },
          { name: 'Delhi to Mussoorie', distance: '290 km, ~6.5 hrs', description: 'Queen of Hills for a cozy Christmas getaway. Kempty Falls, Gun Hill, and stunning valley views.', highlights: ['Hill Station', 'Views', 'Cafes'], price: '\u20B94,499' },
        ]}
        packages={[
          { name: 'Christmas Weekend Special', duration: '2 Nights / 3 Days', description: 'Delhi to Shimla-Kufri round trip with hotel recommendations and sightseeing stops.', includes: ['AC Sedan or SUV', 'Experienced driver', 'Toll & parking included', 'Flexible itinerary', '24/7 support'], price: '\u20B96,999', popular: true },
          { name: 'New Year Manali Blast', duration: '3 Nights / 4 Days', description: 'Delhi-Manali round trip covering Solang Valley, Old Manali, and Rohtang (seasonal).', includes: ['AC SUV (Innova/Ertiga)', 'Driver accommodation included', 'All tolls & permits', 'Airport/station pickup', 'No hidden charges'], price: '\u20B911,999', popular: false },
          { name: 'Golden Triangle Holiday', duration: '3 Nights / 4 Days', description: 'Delhi-Agra-Jaipur festive circuit with all sightseeing and comfortable travel.', includes: ['AC Sedan', 'All sightseeing transfers', 'Toll & parking', 'Flexible timing', 'Free cancellation (48 hrs)'], price: '\u20B98,499', popular: false },
          { name: 'Group New Year Getaway', duration: 'Custom Duration', description: 'Tempo traveller packages for groups of 12-20 people. Perfect for New Year parties at hill stations.', includes: ['12-20 seater tempo traveller', 'Music system', 'Experienced hill driver', 'All permits & tolls', 'Custom itinerary'], price: '\u20B914,999', popular: false },
        ]}
        faqs={faqs}
      />
    </>
  );
}
