import TerminalStructuredData from '@/components/airport/TerminalStructuredData';
import { airportTerminalData } from '@/utilis/airportTerminalData';
import TerminalPageClient from '@/components/airport/TerminalPageClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Jaipur T2 Domestic Airport Taxi ₹700 | No Surge'),
  description: 'Jaipur Airport Terminal 2 domestic pickup — nameboard at arrivals, 60 min free wait. Pink City ₹700, Pushkar ₹2,800, Agra ₹4,000. Call 7668570551.',
  alternates: { canonical: 'https://www.trivenicabs.in/airport-service/jaipur/jai-terminal-2-domestic' },
  openGraph: {
    title: 'Jaipur T2 Domestic Taxi ₹700 | Flight-Tracked Pickup, No Surge',
    description: 'Landing at Jaipur T2? Verified cab waiting at the domestic arrival exit with your name. Fixed fares — Pink City ₹700, Amer Fort ₹1,000, Pushkar ₹2,800. 60 min free wait, 24×7.',
    type: 'website', locale: 'en_IN', siteName: 'Triveni Cabs™',
    url: 'https://www.trivenicabs.in/airport-service/jaipur/jai-terminal-2-domestic',
    images: [{ url: '/images/airport_section.jpg', width: 1200, height: 630, alt: 'Jaipur Airport Terminal 2 Domestic Taxi — Arrival Exit Pickup, Fixed Fare' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jaipur T2 Domestic Airport Taxi ₹700 | No Surge, Flight-Tracked',
    description: 'T2 domestic terminal taxi. Flight delayed? 60 min free wait. Fixed fares, verified drivers, 24×7.',
    creator: '@trivenicabs', site: '@trivenicabs',
    images: ['/images/airport_section.jpg'],
  },
  keywords: 'jaipur airport terminal 2 taxi, JAI T2 cab, jaipur domestic terminal taxi, terminal 2 jaipur airport pickup, jaipur airport domestic arrival cab, indigo terminal jaipur taxi, akasa jaipur airport cab, T2 jaipur to pink city taxi, jaipur airport T2 to hawa mahal cab, late night jaipur T2 taxi, jaipur airport prepaid taxi alternative, jaipur T2 to pushkar taxi, jaipur T2 to agra cab, sanganer airport domestic taxi',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const terminalT = airportTerminalData['jaipur/jai-terminal-2-domestic'];
const faqs = terminalT.faqs;

const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service", "serviceType": "Airport Transfer Service",
  "name": "Jaipur T2 Domestic Airport Taxi by Triveni Cabs", "brand": { "@type": "Brand", "name": "Triveni Cabs" },
  "description": "Triveni Cabs taxi service from Jaipur International Airport Terminal 2 (T2), the airport's main domestic terminal. IndiGo, Air India, SpiceJet and Akasa arrivals — 60 min free wait, nameboard meet & greet, fixed fares from ₹700.",
  "provider": { "@type": "LocalBusiness", "@id": "https://www.trivenicabs.in/#organization", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
  "areaServed": { "@type": "City", "name": "Jaipur" },
  "offers": { "@type": "AggregateOffer", "lowPrice": "700", "highPrice": "9000", "priceCurrency": "INR" }
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
    { "@type": "ListItem", "position": 2, "name": "Airport Service", "item": "https://www.trivenicabs.in/airport-service" },
    { "@type": "ListItem", "position": 3, "name": "Jaipur", "item": "https://www.trivenicabs.in/airport-service/jaipur" },
    { "@type": "ListItem", "position": 4, "name": "JAI Terminal 2 Domestic", "item": "https://www.trivenicabs.in/airport-service/jaipur/jai-terminal-2-domestic" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

export default function JaipurTerminal2Page() {
  return (
    <>
      <TerminalStructuredData schema={serviceSchema} terminal={terminalT} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <TerminalPageClient t={terminalT} />
    </>
  );
}
