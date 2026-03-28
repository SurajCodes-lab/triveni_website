import TrustPageClient from '@/components/competitor/TrustPageClient';

export const revalidate = 3600;

const slug = 'triveni-cabs-safety-features';
const pageTitle = 'Triveni Cabs Safety Features | GPS Tracking, Verified Drivers, SOS — 4.9★';
const pageDesc = 'Triveni Cabs safety: real-time GPS tracking, verified drivers, SOS emergency support, live trip sharing, sanitized vehicles. Safe travel for families & solo travelers. Call 7668570551.';

export const metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ['triveni cabs safety features', 'safe cab service india', 'gps tracked cab india', 'cab safety features', 'safe travel for women', 'verified driver cab service', 'sos emergency cab support', 'family safe cab service', 'live trip sharing cab', 'sanitized cab service'],
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title: 'Triveni Cabs Safety — GPS Tracking, Verified Drivers & 24/7 Emergency Support',
    description: pageDesc,
    type: 'website',
    locale: 'en_IN',
    url: `https://www.trivenicabs.in/${slug}`,
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/citypage_hero_section_image.jpg', width: 1200, height: 630, alt: 'Triveni Cabs Safety Features' }],
  },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDesc, creator: '@trivenicabs', site: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const faqs = [
  { question: 'How does Triveni Cabs ensure passenger safety?', answer: 'We use a multi-layered safety approach: GPS-tracked vehicles, background-verified drivers, 24/7 emergency support, live trip sharing, regular vehicle maintenance, and comprehensive insurance coverage on every trip.' },
  { question: 'Can I share my live trip location with family?', answer: 'Yes, upon request we share a live tracking link that your family or friends can access in real-time. This is especially popular with solo female travelers and parents sending children on trips.' },
  { question: 'What should I do in case of an emergency during a trip?', answer: 'Call our 24/7 emergency line at 7668570551 immediately. Our support team will coordinate with the driver, arrange roadside assistance, contact local emergency services if needed, and keep your emergency contacts informed.' },
  { question: 'Are Triveni Cabs vehicles insured?', answer: 'Yes, all vehicles carry comprehensive insurance including passenger liability coverage. In the unlikely event of an accident, all passengers are covered under our insurance policy.' },
  { question: 'Is Triveni Cabs safe for solo female travelers?', answer: 'Absolutely. All our drivers are police-verified, GPS tracking is always on, trip sharing is available, and our 24/7 support team monitors all trips. Many of our 5-star reviews come from solo women travelers.' },
];

export default function SafetyFeaturesPage() {
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    "serviceType": "Safe Cab Service with GPS Tracking",
    "name": "Triveni Cabs Safety Features",
    "description": pageDesc,
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "10000", "bestRating": "5" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Safety Features", "item": `https://www.trivenicabs.in/${slug}` }
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
        title="Safety Features That Protect Every Journey"
        subtitle="Your Safety Is Our #1 Priority"
        description="From GPS tracking to verified drivers, emergency support to sanitized vehicles, every safety measure is designed to give you complete peace of mind on the road."
        sections={[
          {
            title: 'Our Safety Infrastructure',
            badge: 'Multi-Layered Safety',
            description: 'Safety is not a feature at Triveni Cabs. It is the foundation everything else is built on.',
            features: [
              { title: 'Real-Time GPS Tracking', description: 'Every vehicle is GPS-tracked 24/7. Our operations team monitors all active trips and can intervene if route deviations are detected.' },
              { title: 'Background-Verified Drivers', description: 'Every driver undergoes police verification, criminal background check, driving skill test, and customer service training before joining.' },
              { title: '24/7 Emergency Support', description: 'Dedicated emergency phone line (7668570551) with trained staff who can coordinate roadside assistance and emergency services instantly.' },
              { title: 'Live Trip Sharing', description: 'Share your live trip location with family or friends via a tracking link. They can monitor your journey in real-time from their phone.' },
              { title: 'Vehicle Safety Checks', description: 'Pre-trip inspection checklist covers tires, brakes, lights, AC, mirrors, seat belts, first aid kit, and fire extinguisher.' },
              { title: 'Comprehensive Insurance', description: 'All vehicles carry comprehensive insurance including passenger liability. Every passenger is covered on every trip.' },
            ],
          },
          {
            title: 'Special Safety for Specific Travelers',
            badge: 'Inclusive Safety',
            columns: 2,
            features: [
              { title: 'Solo Female Travelers', description: 'Driver details shared in advance, GPS always on, live trip sharing, and priority emergency response. Many of our highest-rated trips are from solo women travelers.' },
              { title: 'Families with Children', description: 'Child seats available on request, patient and family-friendly drivers, rest stop planning for long trips, and child-lock enabled vehicles.' },
              { title: 'Senior Citizens', description: 'Extra assistance with luggage, slower and smoother driving, frequent rest stops, and drivers trained in senior-friendly service.' },
              { title: 'Night Travelers', description: 'Night-experienced drivers, well-lit pickup points, speed monitoring during night hours, and enhanced GPS tracking for late-night trips.' },
            ],
          },
          {
            title: 'Vehicle Hygiene & Sanitization',
            badge: 'Clean & Safe',
            description: 'Every vehicle goes through a thorough cleaning and sanitization process before each trip.',
            items: [
              { title: 'Surface Sanitization', description: 'All touch points wiped with medical-grade disinfectant' },
              { title: 'AC Filter Cleaning', description: 'Cabin air filters cleaned and checked for effective cooling' },
              { title: 'Fresh Seat Covers', description: 'Clean seat covers and floor mats for every trip' },
              { title: 'Air Freshener', description: 'Non-allergenic air freshener for a pleasant ride' },
              { title: 'Hand Sanitizer', description: 'Available in all vehicles for passenger use' },
              { title: 'Water Bottles', description: 'Complimentary sealed water bottles provided' },
            ],
          },
          {
            title: 'Safety Track Record',
            badge: 'Proven Record',
            centered: true,
            stats: [
              { value: '0', label: 'Major Safety Incidents' },
              { value: '100%', label: 'Drivers Verified' },
              { value: '24/7', label: 'GPS Monitoring' },
              { value: '99.9%', label: 'On-Time Pickup' },
            ],
          },
        ]}
        faqs={faqs}
      />
    </>
  );
}
