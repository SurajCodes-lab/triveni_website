import TrustPageClient from '@/components/competitor/TrustPageClient';

export const revalidate = 3600;

const slug = 'triveni-cabs-driver-verification';
const pageTitle = 'Triveni Cabs Driver Verification Process | Background-Checked Drivers — 4.9★';
const pageDesc = 'Triveni Cabs driver verification: police background check, driving test, customer service training, medical fitness. 100% verified drivers for safe travel. Call 7668570551.';

export const metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ['triveni cabs driver verification', 'verified cab drivers india', 'background checked cab drivers', 'safe cab drivers', 'driver verification process', 'cab driver training india', 'safe travel verified driver', 'police verified cab driver', 'trusted cab driver service', 'driver safety standards'],
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title: 'How Triveni Cabs Verifies Every Driver — 7-Step Safety Process | Triveni Cabs',
    description: pageDesc,
    type: 'website',
    locale: 'en_IN',
    url: `https://www.trivenicabs.in/${slug}`,
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/citypage_hero_section_image.jpg', width: 1200, height: 630, alt: 'Driver Verification Process' }],
  },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDesc, creator: '@trivenicabs', site: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const faqs = [
  { question: 'How does Triveni Cabs verify its drivers?', answer: 'Our 7-step process includes: document verification, police background check, driving skill assessment, medical fitness test, customer service training, probation period with monitored trips, and ongoing performance reviews.' },
  { question: 'Are Triveni Cabs drivers police verified?', answer: 'Yes, every Triveni Cabs driver undergoes police background verification before being assigned any trip. This includes criminal record checks, address verification, and identity confirmation.' },
  { question: 'Do your drivers undergo training?', answer: 'Yes, all drivers complete mandatory training covering safe driving practices, customer etiquette, navigation skills, emergency handling, and basic first aid. Refresher training is conducted quarterly.' },
  { question: 'Can I see my driver details before the trip?', answer: 'Yes, we share your driver\'s name, photo, phone number, vehicle number, and verification status before the trip. You can also request to speak with the driver before departure.' },
  { question: 'What happens if I have a complaint about a driver?', answer: 'Call our 24/7 support line (7668570551) immediately. All complaints are investigated within 24 hours. Serious issues lead to immediate suspension pending investigation. We take driver quality very seriously.' },
];

export default function DriverVerificationPage() {
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    "serviceType": "Verified Driver Cab Service",
    "name": "Triveni Cabs Driver Verification Process",
    "description": pageDesc,
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "10000", "bestRating": "5" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Driver Verification", "item": `https://www.trivenicabs.in/${slug}` }
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
        title="Our 7-Step Driver Verification Process"
        subtitle="100% Background-Checked Drivers"
        description="Your safety is our top priority. Every Triveni Cabs driver goes through a rigorous 7-step verification and training process before being assigned a single trip."
        sections={[
          {
            title: 'The 7-Step Verification Process',
            badge: 'Safety First',
            description: 'From application to your first trip, here is exactly how we vet every driver.',
            steps: [
              { title: 'Document Verification', description: 'Valid driving license, Aadhaar card, PAN card, and address proof are verified against government databases. Expired or fake documents are immediately flagged.' },
              { title: 'Police Background Check', description: 'Comprehensive criminal background check through local police station verification. Any criminal history results in automatic rejection.' },
              { title: 'Driving Skill Assessment', description: 'Practical driving test covering highway driving, city navigation, hill road handling, and emergency maneuvers. Minimum 5 years of experience required.' },
              { title: 'Medical Fitness Test', description: 'Vision test, hearing test, and general health assessment to ensure the driver is physically fit for long-distance driving.' },
              { title: 'Customer Service Training', description: '3-day training program covering passenger etiquette, language skills, cleanliness standards, route knowledge, and conflict resolution.' },
              { title: 'Probation Period', description: '30-day probation with monitored trips and customer feedback collection. Drivers must maintain a 4.5+ rating to pass probation.' },
              { title: 'Ongoing Performance Reviews', description: 'Monthly rating reviews, quarterly refresher training, and annual re-verification. Drivers below 4.5 rating receive additional training or are removed.' },
            ],
          },
          {
            title: 'What Our Drivers Are Trained On',
            badge: 'Training Curriculum',
            features: [
              { title: 'Safe Driving Practices', description: 'Speed management, defensive driving, night driving protocols, and hill road safety techniques.' },
              { title: 'Customer Etiquette', description: 'Greeting passengers, luggage handling, maintaining vehicle cleanliness, and professional communication.' },
              { title: 'Navigation & Route Knowledge', description: 'GPS usage, offline map reading, knowledge of best routes, food stops, and scenic detours across North India.' },
              { title: 'Emergency Handling', description: 'Breakdown protocol, accident procedure, basic first aid, and emergency contact management.' },
              { title: 'Vehicle Maintenance', description: 'Pre-trip checks, tire inspection, fluid levels, AC maintenance, and identifying mechanical issues early.' },
              { title: 'Local Knowledge', description: 'Tourist attractions, restaurants, hotels, petrol stations, and hospitals along major routes.' },
            ],
          },
          {
            title: 'Driver Safety Numbers',
            badge: 'Track Record',
            centered: true,
            stats: [
              { value: '100%', label: 'Background Verified' },
              { value: '5+ Years', label: 'Min. Experience' },
              { value: '4.8+', label: 'Avg. Driver Rating' },
              { value: '< 1%', label: 'Complaint Rate' },
            ],
          },
        ]}
        faqs={faqs}
      />
    </>
  );
}
