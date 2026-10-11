import TerminalStructuredData from '@/components/airport/TerminalStructuredData';
import { airportTerminalData } from '@/utilis/airportTerminalData';
import TerminalPageClient from '@/components/airport/TerminalPageClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Delhi T2 Airport Taxi ₹450 | Flight-Tracked · No Surge'),
  description: 'T2 Vistara/Air India terminal pickup at Arrival Forecourt. Connaught Place ₹450, Gurgaon ₹550. 60 min free wait. Call 7668570551.',
  alternates: { canonical: 'https://www.trivenicabs.in/airport-service/delhi/igi-terminal-2-domestic' },
  openGraph: {
    title: 'Delhi T2 Taxi from ₹450 | Flight-Tracked Pickup, No Surge, Wait FREE 60 min',
    description: 'Landing at Delhi T2? Verified cab waiting at Arrival Forecourt with your name. Fixed fares: Connaught Place ₹450, Gurgaon ₹550, Agra ₹3,500. No surge pricing even at 2 AM.',
    type: 'website', locale: 'en_IN', siteName: 'Triveni Cabs™',
    url: 'https://www.trivenicabs.in/airport-service/delhi/igi-terminal-2-domestic',
    images: [{ url: '/images/airport_section.jpg', width: 1200, height: 630, alt: 'Delhi IGI Airport Terminal 2 Taxi Service — Vistara Air India Pickup' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delhi T2 Airport Taxi ₹450 | No Surge, Flight-Tracked',
    description: 'T2 terminal taxi — Vistara, Air India pickup. Flight delayed? 60 min free wait. Fixed fares, verified drivers.',
    creator: '@trivenicabs', site: '@trivenicabs',
    images: ['/images/airport_section.jpg'],
  },
  keywords: 'delhi airport terminal 2 taxi, T2 delhi airport cab, terminal 2 IGI taxi, vistara terminal taxi, air india T2 pickup, T2 to connaught place, T2 to gurgaon, T2 to noida, late night T2 taxi, T2 flight delayed cab, T2 prepaid alternative',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const terminalT = airportTerminalData['delhi/igi-terminal-2-domestic'];
const faqs = terminalT.faqs;

const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service", "serviceType": "Airport Transfer Service",
  "name": "Delhi T2 Airport Taxi by Triveni Cabs", "brand": { "@type": "Brand", "name": "Triveni Cabs" },
  "description": "Triveni Cabs taxi service from Delhi Airport Terminal 2 (T2). Vistara, Air India, Alliance Air arrivals — fixed fare from Rs 450, 60 min free wait.",
  "provider": { "@type": "LocalBusiness", "@id": "https://www.trivenicabs.in/#organization", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
  "areaServed": { "@type": "City", "name": "Delhi" },
  "offers": { "@type": "AggregateOffer", "lowPrice": "400", "highPrice": "4500", "priceCurrency": "INR" }
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
    { "@type": "ListItem", "position": 2, "name": "Airport Service", "item": "https://www.trivenicabs.in/airport-service" },
    { "@type": "ListItem", "position": 3, "name": "Delhi", "item": "https://www.trivenicabs.in/airport-service/delhi" },
    { "@type": "ListItem", "position": 4, "name": "IGI Terminal 2 Domestic", "item": "https://www.trivenicabs.in/airport-service/delhi/igi-terminal-2-domestic" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

export default function DelhiTerminal2Page() {
  return (
    <>
      <TerminalStructuredData schema={serviceSchema} terminal={terminalT} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <TerminalPageClient t={terminalT} />
    </>
  );
}
