import { airportRoutes, getRelatedRoutes } from '@/utilis/airportOutstationData';
import AirportOutstationClient from '@/components/airport/AirportOutstationClient';

const SLUG = 'delhi-airport-to-manali-taxi';
const data = airportRoutes[SLUG];

export const revalidate = false;

export const metadata = {
  title: `Delhi Airport to Manali Taxi | Fixed \u20B9${data.fares.sedan.price} | Mountain Experts`,
  description: `Delhi Airport (IGI) to Manali taxi. Fixed fare sedan \u20B9${data.fares.sedan.price}, SUV \u20B9${data.fares.suv.price}. All terminal pickup. Flight tracking, meet & greet. ${data.time}. Call 7668570551.`,
  keywords: 'delhi airport to manali taxi, igi airport to manali cab, delhi airport manali transfer, airport taxi to manali',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: `Delhi Airport to Manali Taxi | Fixed Fare \u20B9${data.fares.sedan.price}`,
    description: `Book taxi from Delhi IGI Airport to Manali. Fixed fare, flight tracking, experienced mountain drivers. ${data.time} drive.`,
    type: 'website', locale: 'en_IN', url: `https://www.trivenicabs.in/${SLUG}`, siteName: 'Triveni Cabs',
  },
  twitter: { card: 'summary_large_image', title: `Delhi Airport to Manali Taxi | \u20B9${data.fares.sedan.price} Fixed Fare`, description: 'IGI Airport to Manali cab. Fixed fare, mountain driving experts.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function Page() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": `${data.airportCity} Airport to ${data.destination} Taxi`, "item": `https://www.trivenicabs.in/${SLUG}` }] };
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Airport Transfer", "name": `${data.airportCity} Airport to ${data.destination} Taxi Service`, "description": `Reliable taxi from ${data.airport} to ${data.destination}. Fixed fare, flight tracking, meet & greet.`, "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "address": { "@type": "PostalAddress", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "offers": { "@type": "AggregateOffer", "lowPrice": data.fares.sedan.price.replace(',', ''), "highPrice": data.fares.tempo.price.replace(',', ''), "priceCurrency": "INR" }, "areaServed": { "@type": "Place", "name": `${data.airport} to ${data.destination}` } };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": data.faqs.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <AirportOutstationClient data={data} relatedRoutes={getRelatedRoutes(SLUG)} />
    </>
  );
}
