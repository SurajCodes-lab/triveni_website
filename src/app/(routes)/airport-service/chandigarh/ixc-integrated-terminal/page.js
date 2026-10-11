import TerminalStructuredData from '@/components/airport/TerminalStructuredData';
import { airportTerminalData } from '@/utilis/airportTerminalData';
import TerminalPageClient from '@/components/airport/TerminalPageClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Chandigarh Airport Taxi ₹600 | IXC Terminal · Shimla'),
  description: 'Chandigarh IXC integrated terminal taxi — nameboard pickup, 60 min free wait. Sector 17 ₹600, Kasauli ₹2,200, Shimla ₹3,000, Manali ₹5,500. Call 7668570551.',
  alternates: { canonical: 'https://www.trivenicabs.in/airport-service/chandigarh/ixc-integrated-terminal' },
  openGraph: {
    title: 'Chandigarh IXC Airport Taxi ₹600 | Hill Drivers to Shimla & Manali',
    description: 'Landing at Chandigarh Airport? Verified cab waiting at the integrated terminal with your name. Fixed fares — Sector 17 ₹600, Shimla ₹3,000, Manali ₹5,500. No surge, 24×7.',
    type: 'website', locale: 'en_IN', siteName: 'Triveni Cabs™',
    url: 'https://www.trivenicabs.in/airport-service/chandigarh/ixc-integrated-terminal',
    images: [{ url: '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg', width: 1200, height: 630, alt: 'Chandigarh Shaheed Bhagat Singh International Airport Taxi — Fixed Fare' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chandigarh IXC Airport Taxi ₹600 | Shimla & Manali Transfers',
    description: 'IXC integrated terminal pickup with nameboard. Experienced hill drivers to Shimla, Manali, Kasauli. No surge, 24×7.',
    creator: '@trivenicabs', site: '@trivenicabs',
    images: ['/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg'],
  },
  keywords: 'chandigarh airport taxi, IXC airport cab, chandigarh integrated terminal taxi, shaheed bhagat singh airport taxi, mohali airport cab, chandigarh airport pickup, chandigarh airport international arrival taxi, chandigarh airport to sector 17 taxi, chandigarh airport to shimla taxi, chandigarh airport to manali cab, chandigarh airport to kasauli taxi, chandigarh airport to amritsar cab, chandigarh airport to panchkula taxi, chandigarh airport prepaid taxi alternative',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const terminalT = airportTerminalData['chandigarh/ixc-integrated-terminal'];
const faqs = terminalT.faqs;

const serviceSchema = {
  "@context": "https://schema.org", "@type": "Service", "serviceType": "Airport Transfer Service",
  "name": "Chandigarh IXC Airport Taxi by Triveni Cabs", "brand": { "@type": "Brand", "name": "Triveni Cabs" },
  "description": "Triveni Cabs taxi service from Chandigarh Shaheed Bhagat Singh International Airport's single integrated terminal. Domestic and international arrivals — nameboard meet & greet, flight tracking, and fixed-fare hill transfers to Shimla, Manali and Kasauli.",
  "provider": { "@type": "LocalBusiness", "@id": "https://www.trivenicabs.in/#organization", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
  "areaServed": { "@type": "City", "name": "Chandigarh" },
  "offers": { "@type": "AggregateOffer", "lowPrice": "500", "highPrice": "8000", "priceCurrency": "INR" }
};

const breadcrumbSchema = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
    { "@type": "ListItem", "position": 2, "name": "Airport Service", "item": "https://www.trivenicabs.in/airport-service" },
    { "@type": "ListItem", "position": 3, "name": "Chandigarh", "item": "https://www.trivenicabs.in/airport-service/chandigarh" },
    { "@type": "ListItem", "position": 4, "name": "IXC Integrated Terminal", "item": "https://www.trivenicabs.in/airport-service/chandigarh/ixc-integrated-terminal" }
  ]
};

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": faqs.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } }))
};

export default function ChandigarhIntegratedTerminalPage() {
  return (
    <>
      <TerminalStructuredData schema={serviceSchema} terminal={terminalT} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <TerminalPageClient t={terminalT} />
    </>
  );
}
