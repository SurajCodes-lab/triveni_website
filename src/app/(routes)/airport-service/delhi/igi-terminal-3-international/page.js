import TerminalStructuredData from '@/components/airport/TerminalStructuredData';
import { airportTerminalData } from '@/utilis/airportTerminalData';
import TerminalPageClient from '@/components/airport/TerminalPageClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Delhi T3 International Airport Taxi ₹550 | No Surge'),
  description: 'T3 international arrivals — 90 min free wait. Verified driver, nameboard. Connaught Place ₹550, Gurgaon ₹650, Agra ₹3,800. Call 7668570551.',
  alternates: { canonical: 'https://www.trivenicabs.in/airport-service/delhi/igi-terminal-3-international' },
  openGraph: {
    title: 'Delhi T3 International Taxi ₹550 | 90 min Free Wait, Flight-Tracked Pickup',
    description: 'Arriving at T3 from overseas? Verified cab waiting with your name. Fixed fares — Connaught Place ₹550, Gurgaon ₹650, Agra ₹3,800. No surge, baggage help, 24×7.',
    type: 'website', locale: 'en_IN', siteName: 'Triveni Cabs™',
    url: 'https://www.trivenicabs.in/airport-service/delhi/igi-terminal-3-international',
    images: [{ url: '/images/airport_section.jpg', width: 1200, height: 630, alt: 'Delhi IGI T3 International Airport Taxi — 90 min Free Wait, Fixed Fare' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delhi T3 International Airport Taxi ₹550 | 90 min Free Wait',
    description: 'T3 international pickup with nameboard. Fixed fares, no surge. Emirates/Lufthansa/Singapore arrivals welcome 24×7.',
    creator: '@trivenicabs', site: '@trivenicabs',
    images: ['/images/airport_section.jpg'],
  },
  keywords: 'delhi airport terminal 3 taxi, T3 delhi airport cab, terminal 3 IGI taxi, international terminal delhi cab, T3 international flight pickup, emirates T3 taxi, lufthansa T3 cab, singapore airlines delhi taxi, T3 to connaught place taxi, T3 to gurgaon cab, T3 to hotel taxi, late night T3 taxi, T3 prepaid taxi alternative, T3 arrival gate pickup',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const terminalT = airportTerminalData['delhi/igi-terminal-3-international'];
const faqs = terminalT.faqs;

const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service", "serviceType": "International Airport Transfer Service",
  "name": "Delhi T3 International Airport Taxi by Triveni Cabs", "brand": { "@type": "Brand", "name": "Triveni Cabs" },
  "description": "Premium Triveni Cabs taxi service from Delhi Airport Terminal 3 (T3) International Terminal. Emirates, Lufthansa, Singapore Airlines, British Airways arrivals — 90 min free wait, fixed fares.",
  "provider": { "@type": "LocalBusiness", "@id": "https://www.trivenicabs.in/#organization", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
  "areaServed": { "@type": "City", "name": "Delhi" },
  "offers": { "@type": "AggregateOffer", "lowPrice": "200", "highPrice": "4500", "priceCurrency": "INR" }
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
    { "@type": "ListItem", "position": 2, "name": "Airport Service", "item": "https://www.trivenicabs.in/airport-service" },
    { "@type": "ListItem", "position": 3, "name": "Delhi", "item": "https://www.trivenicabs.in/airport-service/delhi" },
    { "@type": "ListItem", "position": 4, "name": "IGI Terminal 3 International", "item": "https://www.trivenicabs.in/airport-service/delhi/igi-terminal-3-international" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

export default function DelhiTerminal3Page() {
  return (
    <>
      <TerminalStructuredData schema={serviceSchema} terminal={terminalT} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <TerminalPageClient t={terminalT} />
    </>
  );
}
