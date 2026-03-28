import TrustPageClient from '@/components/competitor/TrustPageClient';

export const revalidate = 3600;

const slug = 'triveni-cabs-pricing-transparency';
const pageTitle = 'Triveni Cabs Pricing Transparency | No Hidden Charges, No Surge — 4.9★';
const pageDesc = 'Triveni Cabs transparent pricing: no hidden charges, no surge pricing, all-inclusive quotes. Toll, parking, driver allowance included. Compare and save. Call 7668570551.';

export const metadata = {
  title: pageTitle,
  description: pageDesc,
  keywords: ['triveni cabs pricing', 'no hidden charges cab', 'transparent cab pricing india', 'no surge pricing cab service', 'cab fare transparency', 'all inclusive cab pricing', 'fixed price cab india', 'honest cab pricing', 'cab booking no extra charges', 'affordable transparent cab service'],
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: `/${slug}` },
  openGraph: {
    title: 'Triveni Cabs Pricing — Zero Hidden Charges, Zero Surge, All-Inclusive Quotes',
    description: pageDesc,
    type: 'website',
    locale: 'en_IN',
    url: `https://www.trivenicabs.in/${slug}`,
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/citypage_hero_section_image.jpg', width: 1200, height: 630, alt: 'Triveni Cabs Pricing Transparency' }],
  },
  twitter: { card: 'summary_large_image', title: pageTitle, description: pageDesc, creator: '@trivenicabs', site: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const faqs = [
  { question: 'Does Triveni Cabs have hidden charges?', answer: 'No. Our pricing is 100% transparent. The quote you receive includes vehicle charges, toll fees, parking, driver allowance, and applicable taxes. There are no hidden convenience fees, service charges, or surprise add-ons.' },
  { question: 'Does Triveni Cabs charge surge pricing?', answer: 'Never. Unlike ride-hailing apps that multiply fares during peak demand, our pricing is fixed. Whether you travel during Diwali, monsoon, or rush hour, you pay the same rate.' },
  { question: 'What is included in the Triveni Cabs quoted price?', answer: 'Our all-inclusive price covers: AC vehicle, experienced driver, fuel charges, toll fees, parking fees, driver meals/accommodation (outstation), night charges, and GST. Nothing extra is added.' },
  { question: 'How can I get a price quote?', answer: 'Call 7668570551, WhatsApp us, or check our website for instant quotes. Every quote is a fixed, all-inclusive price valid for 7 days. No pressure, no expiry tricks.' },
  { question: 'Can I get a GST invoice from Triveni Cabs?', answer: 'Yes, GST invoices are provided for all trips upon request. This is particularly useful for corporate travelers and those claiming travel expense reimbursements.' },
];

export default function PricingTransparencyPage() {
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    "serviceType": "Transparent Pricing Cab Service",
    "name": "Triveni Cabs Pricing Transparency",
    "description": pageDesc,
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "10000", "bestRating": "5" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Pricing Transparency", "item": `https://www.trivenicabs.in/${slug}` }
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
        title="Transparent Pricing. No Hidden Charges. Ever."
        subtitle="Our Pricing Promise"
        description="The price we quote is the price you pay. No surge multipliers, no hidden convenience fees, no surprise toll charges. Every Triveni Cabs quote is all-inclusive and fixed."
        sections={[
          {
            title: 'Our Pricing Promise',
            badge: 'Zero Hidden Charges',
            description: 'Three simple rules govern our pricing. No exceptions, no fine print.',
            features: [
              { title: 'No Surge Pricing — Ever', description: 'Ride-hailing apps can charge 2-3x during peak hours, festivals, or bad weather. Triveni Cabs charges the same fixed rate 365 days, 24 hours.' },
              { title: 'All-Inclusive Quotes', description: 'Toll fees, parking, driver allowance, night charges, fuel, and GST are all included in our upfront quote. Zero add-ons.' },
              { title: 'Fixed Quote Validity', description: 'Every quote is valid for 7 days. No pressure selling, no expiry countdown tricks. Take your time to decide.' },
            ],
          },
          {
            title: 'What Is Included In Our Price',
            badge: 'Everything You Need',
            description: 'Here is exactly what your quoted price covers. No surprises at the end of your trip.',
            items: [
              { title: 'Vehicle Charges', description: 'AC sedan, SUV, or tempo traveller as selected' },
              { title: 'Experienced Driver', description: 'Verified, trained, and courteous chauffeur' },
              { title: 'Fuel Charges', description: 'All fuel costs for the entire trip' },
              { title: 'Toll Fees', description: 'All highway and expressway tolls' },
              { title: 'Parking Fees', description: 'Parking at sightseeing spots and hotels' },
              { title: 'Driver Allowance', description: 'Driver meals and accommodation for outstation trips' },
              { title: 'Night Charges', description: 'No extra charge for early morning or late night travel' },
              { title: 'GST', description: 'All applicable taxes included in the quote' },
            ],
          },
          {
            title: 'Common Hidden Charges Others Add (We Do Not)',
            badge: 'What Others Charge Extra',
            description: 'Many cab services advertise low base prices, then add these charges later.',
            items: [
              { title: 'Convenience Fee', description: 'We charge ₹0 convenience fee. Many apps add ₹50-200.' },
              { title: 'Surge/Dynamic Pricing', description: 'We charge ₹0 surge. Apps charge 1.5-3x during peak.' },
              { title: 'State Permit Fee', description: 'Included in our quote. Others charge ₹200-500 extra.' },
              { title: 'Night Driving Charges', description: 'Included in our quote. Others add 10-25% extra.' },
              { title: 'Waiting Charges', description: '30 min free waiting. Others charge from minute 1.' },
              { title: 'Service Tax/Platform Fee', description: 'No platform fee. Apps add 5-15% service charges.' },
            ],
          },
          {
            title: 'Sample Pricing (Delhi Routes)',
            badge: 'Real Prices',
            centered: true,
            description: 'Here are sample all-inclusive prices for popular routes from Delhi. Call for live quotes on your specific route.',
            stats: [
              { value: '\u20B92,499', label: 'Delhi to Agra (Sedan)' },
              { value: '\u20B93,499', label: 'Delhi to Jaipur (Sedan)' },
              { value: '\u20B94,999', label: 'Delhi to Shimla (Sedan)' },
              { value: '\u20B97,499', label: 'Delhi to Manali (Sedan)' },
            ],
          },
        ]}
        faqs={faqs}
      />
    </>
  );
}
