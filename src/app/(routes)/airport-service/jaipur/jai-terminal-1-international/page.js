import TerminalStructuredData from '@/components/airport/TerminalStructuredData';
import { airportTerminalData } from '@/utilis/airportTerminalData';
import TerminalPageClient from '@/components/airport/TerminalPageClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Jaipur T1 International Airport Taxi ₹700 | No Surge'),
  description: 'Jaipur Airport Terminal 1 international arrivals — nameboard pickup, 45 min free wait. Pink City ₹700, Agra ₹4,000, Udaipur ₹6,500. Call 7668570551.',
  alternates: { canonical: 'https://www.trivenicabs.in/airport-service/jaipur/jai-terminal-1-international' },
  openGraph: {
    title: 'Jaipur T1 International Taxi ₹700 | 45 min Free Wait, Flight-Tracked',
    description: 'Landing at Jaipur T1 from Dubai, Sharjah, Muscat or Bangkok? Verified chauffeur waiting with your name. Fixed fares — Pink City ₹700, Agra ₹4,000, Udaipur ₹6,500. No surge, 24×7.',
    type: 'website', locale: 'en_IN', siteName: 'Triveni Cabs™',
    url: 'https://www.trivenicabs.in/airport-service/jaipur/jai-terminal-1-international',
    images: [{ url: '/images/airport_section.jpg', width: 1200, height: 630, alt: 'Jaipur International Airport Terminal 1 Taxi — 45 min Free Wait, Fixed Fare' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jaipur T1 International Airport Taxi ₹700 | 45 min Free Wait',
    description: 'T1 international arrivals pickup with nameboard. Fixed fares, no surge. Dubai/Sharjah/Bangkok arrivals welcome 24×7.',
    creator: '@trivenicabs', site: '@trivenicabs',
    images: ['/images/airport_section.jpg'],
  },
  keywords: 'jaipur airport terminal 1 taxi, JAI T1 cab, jaipur international terminal taxi, terminal 1 jaipur airport pickup, jaipur airport international arrival cab, dubai flight jaipur taxi, sharjah jaipur airport cab, bangkok jaipur flight taxi, T1 jaipur to pink city taxi, jaipur airport T1 to city palace cab, late night jaipur T1 taxi, jaipur airport prepaid taxi alternative, JAI international arrival pickup, jaipur T1 to agra taxi',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const terminalT = airportTerminalData['jaipur/jai-terminal-1-international'];
const faqs = terminalT.faqs;

const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service", "serviceType": "International Airport Transfer Service",
  "name": "Jaipur T1 International Airport Taxi by Triveni Cabs", "brand": { "@type": "Brand", "name": "Triveni Cabs" },
  "description": "Triveni Cabs taxi service from Jaipur International Airport Terminal 1 (T1), the airport's international terminal. Dubai, Sharjah, Muscat and Bangkok arrivals — 45 min free wait, nameboard meet & greet, fixed fares from ₹700.",
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
    { "@type": "ListItem", "position": 4, "name": "JAI Terminal 1 International", "item": "https://www.trivenicabs.in/airport-service/jaipur/jai-terminal-1-international" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

export default function JaipurTerminal1Page() {
  return (
    <>
      <TerminalStructuredData schema={serviceSchema} terminal={terminalT} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <TerminalPageClient t={terminalT} />
    </>
  );
}
