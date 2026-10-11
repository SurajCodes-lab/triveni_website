import TerminalStructuredData from '@/components/airport/TerminalStructuredData';
import { airportTerminalData } from '@/utilis/airportTerminalData';
import TerminalPageClient from '@/components/airport/TerminalPageClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Jewar Airport T1 Taxi | Noida International Airport Cab'),
  description: 'Noida International Airport (Jewar) T1 taxi — domestic & international flights. Cabs to Noida, Delhi, Agra from ₹11/km. Call 7668570551.',
  alternates: { canonical: 'https://www.trivenicabs.in/airport-service/jewar/jewar-terminal-1-international' },
  openGraph: {
    title: 'Noida International Airport Jewar Taxi | NIA Terminal 1 Cab 24/7',
    description: 'Jewar Airport (Noida International Airport) taxi service. International & domestic flights pickup. Book now for seamless transfers!',
    type: 'website', locale: 'en_IN', siteName: 'Triveni Cabs™',
    images: [{ url: '/images/airport_section.jpg', width: 1200, height: 630, alt: 'Jewar Noida International Airport Taxi' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jewar Airport Taxi | Noida International Airport Cab',
    description: 'NIA Jewar T1 taxi — domestic & international pickup. Verified drivers, fixed fares. Call 7668570551.',
    creator: '@trivenicabs', site: '@trivenicabs',
    images: ['/images/airport_section.jpg'],
  },
  keywords: 'jewar airport taxi, noida international airport cab, NIA airport taxi, jewar terminal 1 taxi, jewar airport to noida cab, jewar airport to delhi taxi, jewar airport to agra cab, jewar airport pickup, jewar airport transfer, jewar airport cab booking',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const terminalT = airportTerminalData['jewar/jewar-terminal-1-international'];
const faqs = terminalT.faqs;

const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service", "serviceType": "Airport Transfer Service",
  "name": "Noida International Airport (Jewar) Taxi by Triveni Cabs", "brand": { "@type": "Brand", "name": "Triveni Cabs" },
  "description": "Triveni Cabs taxi service from Noida International Airport (NIA Jewar) Terminal 1. International and domestic arrivals — fixed fare to Noida, Delhi, Agra, Mathura. 24/7 availability with flight tracking.",
  "provider": { "@type": "LocalBusiness", "@id": "https://www.trivenicabs.in/#organization", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
  "areaServed": [
    { "@type": "City", "name": "Jewar" },
    { "@type": "City", "name": "Noida" },
    { "@type": "City", "name": "Greater Noida" }
  ],
  "offers": { "@type": "AggregateOffer", "lowPrice": "400", "highPrice": "2500", "priceCurrency": "INR" }
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
    { "@type": "ListItem", "position": 2, "name": "Airport Service", "item": "https://www.trivenicabs.in/airport-service" },
    { "@type": "ListItem", "position": 3, "name": "Jewar", "item": "https://www.trivenicabs.in/airport-service/jewar" },
    { "@type": "ListItem", "position": 4, "name": "Terminal 1 International", "item": "https://www.trivenicabs.in/airport-service/jewar/jewar-terminal-1-international" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

export default function JewarTerminal1Page() {
  return (
    <>
      <TerminalStructuredData schema={serviceSchema} terminal={terminalT} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <TerminalPageClient t={terminalT} />
    </>
  );
}
