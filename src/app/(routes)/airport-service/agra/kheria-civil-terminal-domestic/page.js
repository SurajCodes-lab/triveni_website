import TerminalStructuredData from '@/components/airport/TerminalStructuredData';
import { airportTerminalData } from '@/utilis/airportTerminalData';
import TerminalPageClient from '@/components/airport/TerminalPageClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Agra Airport Taxi ₹700 | Kheria Terminal · Taj Mahal'),
  description: 'Agra Airport (Kheria) civil terminal taxi — nameboard pickup, 60 min free wait. Taj Mahal ₹800, Fatehpur Sikri ₹1,800, Delhi ₹4,500. Call 7668570551.',
  alternates: { canonical: 'https://www.trivenicabs.in/airport-service/agra/kheria-civil-terminal-domestic' },
  openGraph: {
    title: 'Agra Airport (Kheria) Taxi ₹700 | Taj Mahal Transfer, No Surge',
    description: 'Flying into Agra Kheria Airport? Verified cab waiting at the civil terminal with your name. Fixed fares — Taj Mahal ₹800, Fatehpur Sikri ₹1,800, Delhi ₹4,500. 24×7.',
    type: 'website', locale: 'en_IN', siteName: 'Triveni Cabs™',
    url: 'https://www.trivenicabs.in/airport-service/agra/kheria-civil-terminal-domestic',
    images: [{ url: '/images/sightseeing/Agra/Taj_mahal.jpg', width: 1200, height: 630, alt: 'Agra Kheria Airport Taxi — Taj Mahal Transfer, Fixed Fare' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agra Airport (Kheria) Taxi ₹700 | Taj Mahal Transfer',
    description: 'Agra civil terminal pickup with nameboard. Fixed fares to the Taj, Agra Fort and Fatehpur Sikri. No surge, 24×7.',
    creator: '@trivenicabs', site: '@trivenicabs',
    images: ['/images/sightseeing/Agra/Taj_mahal.jpg'],
  },
  keywords: 'agra airport taxi, kheria airport cab, agra airport terminal taxi, AGR airport pickup, agra civil terminal taxi, pandit deen dayal upadhyay airport taxi, agra airport to taj mahal taxi, agra airport to hotel cab, indigo agra airport taxi, agra airport to fatehpur sikri cab, agra airport to delhi taxi, agra airport to jaipur cab, agra airport prepaid taxi alternative, agra domestic terminal taxi',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const terminalT = airportTerminalData['agra/kheria-civil-terminal-domestic'];
const faqs = terminalT.faqs;

const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service", "serviceType": "Airport Transfer Service",
  "name": "Agra Kheria Airport Taxi by Triveni Cabs", "brand": { "@type": "Brand", "name": "Triveni Cabs" },
  "description": "Triveni Cabs taxi service from Agra Airport (Kheria) civil terminal, officially Pandit Deen Dayal Upadhyay Airport. IndiGo domestic arrivals — 60 min free wait, nameboard meet & greet, Taj Mahal transfer from ₹800.",
  "provider": { "@type": "LocalBusiness", "@id": "https://www.trivenicabs.in/#organization", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
  "areaServed": { "@type": "City", "name": "Agra" },
  "offers": { "@type": "AggregateOffer", "lowPrice": "700", "highPrice": "6500", "priceCurrency": "INR" }
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
    { "@type": "ListItem", "position": 2, "name": "Airport Service", "item": "https://www.trivenicabs.in/airport-service" },
    { "@type": "ListItem", "position": 3, "name": "Agra", "item": "https://www.trivenicabs.in/airport-service/agra" },
    { "@type": "ListItem", "position": 4, "name": "Kheria Civil Terminal", "item": "https://www.trivenicabs.in/airport-service/agra/kheria-civil-terminal-domestic" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

export default function AgraKheriaTerminalPage() {
  return (
    <>
      <TerminalStructuredData schema={serviceSchema} terminal={terminalT} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <TerminalPageClient t={terminalT} />
    </>
  );
}
