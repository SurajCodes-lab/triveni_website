import TrustPageClient from '@/components/competitor/TrustPageClient';

export const revalidate = 3600;

const slug = 'why-triveni-cabs';
const pageTitle = 'Why Choose Triveni Cabs? | 10 Reasons Travelers Trust Us — 4.9★';
const pageDesc = 'Why choose Triveni Cabs? 4.9-star Google rating, 10,000+ happy customers, verified drivers, no surge pricing, 24/7 support. Discover what makes us North India\'s most trusted cab service. Call 7668570551.';

export const metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ['why triveni cabs', 'triveni cabs review', 'best cab service north india', 'trusted cab service india', 'triveni cabs rating', 'reliable cab booking india', 'triveni cabs features', 'safe cab service india', 'no surge pricing cab', 'cab service with verified drivers'],
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title: 'Why 10,000+ Travelers Choose Triveni Cabs — Trust, Safety & Value | Triveni Cabs',
    description: pageDesc,
    type: 'website',
    locale: 'en_IN',
    url: `https://www.trivenicabs.in/${slug}`,
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/citypage_hero_section_image.jpg', width: 1200, height: 630, alt: 'Why Choose Triveni Cabs' }],
  },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDesc, creator: '@trivenicabs', site: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const faqs = [
  { question: 'What makes Triveni Cabs different from other cab services?', answer: 'Triveni Cabs is a direct cab operator (not an aggregator) with its own verified fleet, background-checked drivers, transparent all-inclusive pricing, and 24/7 dedicated phone support. Our 4.9-star Google rating from 10,000+ reviews speaks for itself.' },
  { question: 'Is Triveni Cabs safe for solo female travelers?', answer: 'Absolutely. All our drivers are background-verified, GPS-tracked in real-time, and trained for courteous service. We also share driver details and live tracking links with emergency contacts upon request.' },
  { question: 'Does Triveni Cabs operate only in Agra?', answer: 'No, while we are headquartered in Agra, we operate across 100+ cities in North India including Delhi, Jaipur, Shimla, Manali, Rishikesh, Amritsar, Chandigarh, Varanasi, and more.' },
  { question: 'How can I trust Triveni Cabs for my first booking?', answer: 'Check our 4.9-star Google rating with 10,000+ genuine reviews. We are government registered, insured, and transparent about pricing. You can also call 7668570551 to speak with us before booking.' },
  { question: 'Does Triveni Cabs provide invoices and receipts?', answer: 'Yes, we provide detailed invoices for every trip including GST details. This is especially useful for corporate travelers and those claiming travel reimbursements.' },
];

export default function WhyTriveniCabsPage() {
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    "serviceType": "Premium Cab Service",
    "name": "Triveni Cabs — North India's Trusted Cab Service",
    "description": pageDesc,
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "addressRegion": "UP", "postalCode": "282006", "addressCountry": "IN" } },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "10000", "bestRating": "5" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Why Triveni Cabs", "item": `https://www.trivenicabs.in/${slug}` }
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
        title="Why 10,000+ Travelers Choose Triveni Cabs"
        subtitle="North India's Most Trusted Cab Service"
        description="Discover why families, solo travelers, corporate clients, and tourists consistently rate us 4.9 stars. From transparent pricing to verified drivers, here is what sets Triveni Cabs apart."
        sections={[
          {
            title: '10 Reasons to Choose Triveni Cabs',
            badge: 'Our Promise',
            description: 'Every decision we make is guided by one principle: make travel stress-free for our customers.',
            features: [
              { title: 'Zero Surge Pricing', description: 'Our rates are fixed 365 days a year. No demand-based hikes during festivals, rain, or peak hours.' },
              { title: '4.9-Star Google Rating', description: 'Over 10,000 genuine reviews from verified travelers. Our reputation is our biggest asset.' },
              { title: 'Background-Verified Drivers', description: 'Every driver undergoes police verification, driving skill assessment, and customer service training.' },
              { title: 'All-Inclusive Pricing', description: 'Toll, parking, driver allowance, and night charges included. The quoted price is the final price.' },
              { title: '24/7 Phone Support', description: 'Call 7668570551 anytime. A real person answers, not a chatbot. Average response time: under 30 seconds.' },
              { title: '100+ Cities Covered', description: 'From Delhi to Amritsar, Agra to Manali. Deep expertise across North India with local route knowledge.' },
              { title: 'GPS-Tracked Fleet', description: 'Every vehicle is GPS-tracked in real-time. Share your live location with family for peace of mind.' },
              { title: 'Government Registered', description: 'Fully licensed, insured, and compliant. All permits and registrations in order.' },
              { title: 'Flexible Cancellation', description: 'Free cancellation up to 48 hours before departure. Life changes, and we understand.' },
            ],
          },
          {
            title: 'Our Track Record',
            badge: 'Numbers That Matter',
            centered: true,
            stats: [
              { value: '10,000+', label: 'Happy Customers' },
              { value: '4.9★', label: 'Google Rating' },
              { value: '100+', label: 'Cities Covered' },
              { value: '50,000+', label: 'Trips Completed' },
            ],
          },
          {
            title: 'Who Trusts Triveni Cabs?',
            badge: 'Our Customers',
            description: 'We serve a diverse range of travelers with customized solutions for each.',
            features: [
              { title: 'Families', description: 'Child seats, spacious SUVs, patient drivers. We make family travel comfortable and safe.' },
              { title: 'Solo Travelers', description: 'GPS tracking, driver verification, and emergency contact sharing. Safe for solo travelers, especially women.' },
              { title: 'Corporate Clients', description: 'GST invoices, corporate billing, and dedicated account management for business travel needs.' },
              { title: 'International Tourists', description: 'English-speaking drivers, sightseeing expertise, and flexible itineraries for foreign visitors.' },
              { title: 'Pilgrims', description: 'Char Dham, Golden Temple, Varanasi. We understand the needs and pace of spiritual journeys.' },
              { title: 'Wedding Parties', description: 'Fleet management for wedding events. Decorated cars, coordinated logistics, and impeccable timing.' },
            ],
          },
        ]}
        faqs={faqs}
      />
    </>
  );
}
