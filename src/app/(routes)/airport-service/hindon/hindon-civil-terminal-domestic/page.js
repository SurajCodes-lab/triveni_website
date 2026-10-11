import TerminalStructuredData from '@/components/airport/TerminalStructuredData';
import { airportTerminalData } from '@/utilis/airportTerminalData';
import TerminalPageClient from '@/components/airport/TerminalPageClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Hindon Airport Taxi ₹500 | Ghaziabad HDO Terminal'),
  description: 'Hindon Airport (Ghaziabad) civil terminal taxi — nameboard pickup, 60 min free wait. Ghaziabad ₹500, Noida ₹900, Delhi ₹1,000, Meerut ₹1,600. Call 7668570551.',
  alternates: { canonical: 'https://www.trivenicabs.in/airport-service/hindon/hindon-civil-terminal-domestic' },
  openGraph: {
    title: 'Hindon Airport (HDO) Taxi ₹500 | Delhi NCR’s Third Airport, No Surge',
    description: 'Flying into Hindon, Ghaziabad? Verified cab waiting at the civil terminal with your name. Fixed fares — Ghaziabad ₹500, Noida ₹900, Delhi ₹1,000, Meerut ₹1,600. 24×7.',
    type: 'website', locale: 'en_IN', siteName: 'Triveni Cabs™',
    url: 'https://www.trivenicabs.in/airport-service/hindon/hindon-civil-terminal-domestic',
    images: [{ url: '/images/airport_section.jpg', width: 1200, height: 630, alt: 'Hindon Airport Ghaziabad Civil Terminal Taxi — Fixed Fare, Flight Tracked' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hindon Airport (HDO) Taxi ₹500 | Ghaziabad Civil Terminal',
    description: 'Hindon civil terminal pickup with nameboard. Fixed fares to Ghaziabad, Noida, Delhi and Meerut. No surge, 24×7.',
    creator: '@trivenicabs', site: '@trivenicabs',
    images: ['/images/airport_section.jpg'],
  },
  keywords: 'hindon airport taxi, HDO airport cab, ghaziabad airport taxi, hindon civil terminal taxi, hindon airport pickup, hindon airport to delhi taxi, hindon airport to noida cab, hindon airport to ghaziabad taxi, hindon airport to meerut taxi, hindon airport to greater noida cab, hindon airport to gurgaon taxi, hindon domestic terminal cab, hindon airport prepaid taxi alternative, ghaziabad hindon terminal pickup, hindon RCS UDAN flight taxi',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const terminalT = airportTerminalData['hindon/hindon-civil-terminal-domestic'];
const faqs = terminalT.faqs;

const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service", "serviceType": "Airport Transfer Service",
  "name": "Hindon Airport Ghaziabad Taxi by Triveni Cabs", "brand": { "@type": "Brand", "name": "Triveni Cabs" },
  "description": "Triveni Cabs taxi service from Hindon Airport (HDO) civil terminal in Ghaziabad, Delhi NCR's third commercial airport. RCS-UDAN domestic arrivals — 60 min free wait, nameboard meet & greet, fixed fares from ₹500.",
  "provider": { "@type": "LocalBusiness", "@id": "https://www.trivenicabs.in/#organization", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
  "areaServed": { "@type": "City", "name": "Ghaziabad" },
  "offers": { "@type": "AggregateOffer", "lowPrice": "500", "highPrice": "5100", "priceCurrency": "INR" }
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
    { "@type": "ListItem", "position": 2, "name": "Airport Service", "item": "https://www.trivenicabs.in/airport-service" },
    { "@type": "ListItem", "position": 3, "name": "Hindon", "item": "https://www.trivenicabs.in/airport-service/hindon" },
    { "@type": "ListItem", "position": 4, "name": "Hindon Civil Terminal", "item": "https://www.trivenicabs.in/airport-service/hindon/hindon-civil-terminal-domestic" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

export default function HindonCivilTerminalPage() {
  return (
    <>
      <TerminalStructuredData schema={serviceSchema} terminal={terminalT} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <TerminalPageClient t={terminalT} />
    </>
  );
}
