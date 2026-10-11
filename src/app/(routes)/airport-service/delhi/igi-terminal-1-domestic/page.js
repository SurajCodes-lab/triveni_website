import TerminalStructuredData from '@/components/airport/TerminalStructuredData';
import { airportTerminalData } from '@/utilis/airportTerminalData';
import TerminalPageClient from '@/components/airport/TerminalPageClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Delhi T1 Airport Taxi ₹450 | Flight-Tracked · No Surge'),
  description: 'T1 domestic terminal taxi — Arrival Gate 1-4 pickup. Connaught Place ₹450, Gurgaon ₹550. 60 min free wait, no surge. Call 7668570551.',
  alternates: { canonical: 'https://www.trivenicabs.in/airport-service/delhi/igi-terminal-1-domestic' },
  openGraph: {
    title: 'Delhi T1 Taxi from ₹450 | Flight-Tracked Pickup, No Surge, Wait FREE 60 min',
    description: 'Landing at Delhi T1? Verified cab waiting at Arrival Gate 1-4 with your name. Fixed fares: Connaught Place ₹450, Gurgaon ₹550, Agra ₹3,500. No surge pricing even at 2 AM.',
    type: 'website', locale: 'en_IN', siteName: 'Triveni Cabs™',
    url: 'https://www.trivenicabs.in/airport-service/delhi/igi-terminal-1-domestic',
    images: [{ url: '/images/airport_section.jpg', width: 1200, height: 630, alt: 'Delhi IGI Airport Terminal 1 Domestic Taxi Service — Arrival Gate Pickup' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delhi T1 Airport Taxi ₹450 | No Surge, Flight-Tracked',
    description: 'T1 domestic terminal taxi. Flight delayed? 60 min free wait. Fixed fares, verified drivers, 24×7.',
    creator: '@trivenicabs', site: '@trivenicabs',
    images: ['/images/airport_section.jpg'],
  },
  keywords: 'delhi airport terminal 1 taxi, T1 delhi airport cab, terminal 1 IGI taxi, T1 domestic terminal pickup, IndiGo terminal cab delhi, SpiceJet terminal taxi, T1 to connaught place taxi, T1 to gurgaon cab, T1 to noida taxi, T1 to agra cab, late night T1 taxi, flight delayed T1 cab, T1 prepaid taxi alternative',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const terminalT = airportTerminalData['delhi/igi-terminal-1-domestic'];
const faqs = terminalT.faqs;

const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service", "serviceType": "Airport Transfer Service",
  "name": "Delhi T1 Airport Taxi by Triveni Cabs", "brand": { "@type": "Brand", "name": "Triveni Cabs" },
  "description": "Triveni Cabs taxi service from Delhi Airport Terminal 1 (T1) Domestic Terminal. IndiGo, SpiceJet, Akasa Air arrivals — fixed fare from Rs 450, 60 min free wait, Arrival Gate 1-4 pickup.",

  "provider": { "@type": "LocalBusiness", "@id": "https://www.trivenicabs.in/#organization", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
  "areaServed": { "@type": "City", "name": "Delhi" },
  "offers": { "@type": "Offer", "price": "11", "priceCurrency": "INR", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "11", "priceCurrency": "INR", "unitText": "per kilometer" } }
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
    { "@type": "ListItem", "position": 2, "name": "Airport Service", "item": "https://www.trivenicabs.in/airport-service" },
    { "@type": "ListItem", "position": 3, "name": "Delhi", "item": "https://www.trivenicabs.in/airport-service/delhi" },
    { "@type": "ListItem", "position": 4, "name": "IGI Terminal 1 Domestic", "item": "https://www.trivenicabs.in/airport-service/delhi/igi-terminal-1-domestic" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

export default function DelhiTerminal1Page() {
  return (
    <>
      <TerminalStructuredData schema={serviceSchema} terminal={terminalT} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <TerminalPageClient t={terminalT} />
    </>
  );
}
