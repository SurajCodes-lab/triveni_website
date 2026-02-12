import { airportRoutes, getRelatedRoutes } from '@/utilis/airportOutstationData';
import AirportOutstationClient from '@/components/airport/AirportOutstationClient';

const SLUG = 'srinagar-airport-to-pahalgam-taxi';
const data = airportRoutes[SLUG];

export const metadata = {
  title: `Srinagar Airport to Pahalgam Taxi | Fixed \u20B9${data.fares.sedan.price} | Kashmir Valley`,
  description: `Srinagar Airport to Pahalgam taxi. Fixed fare sedan \u20B9${data.fares.sedan.price}, SUV \u20B9${data.fares.suv.price}. Kashmir Valley scenic route, Betaab Valley. ${data.time}. Call 7668570551.`,
  keywords: 'srinagar airport to pahalgam taxi, srinagar airport pahalgam cab, srinagar to pahalgam transfer, pahalgam airport taxi, amarnath yatra taxi',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: `Srinagar Airport to Pahalgam Taxi | Fixed Fare \u20B9${data.fares.sedan.price}`,
    description: `Book taxi from Srinagar Airport to Pahalgam. Valley of Shepherds scenic drive. ${data.time}.`,
    type: 'website', locale: 'en_IN', url: `https://www.trivenicabs.in/${SLUG}`, siteName: 'Triveni Cabs',
  },
  twitter: { card: 'summary_large_image', title: `Srinagar Airport to Pahalgam | \u20B9${data.fares.sedan.price}`, description: 'Srinagar to Pahalgam airport transfer. Betaab Valley route.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function Page() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": `${data.airportCity} Airport to ${data.destination} Taxi`, "item": `https://www.trivenicabs.in/${SLUG}` }] };
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Airport Transfer", "name": `${data.airportCity} Airport to ${data.destination} Taxi Service`, "description": `Reliable taxi from ${data.airport} to ${data.destination}. Kashmir Valley scenic drive.`, "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "address": { "@type": "PostalAddress", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "offers": { "@type": "AggregateOffer", "lowPrice": data.fares.sedan.price.replace(',', ''), "highPrice": data.fares.tempo.price.replace(',', ''), "priceCurrency": "INR" }, "areaServed": { "@type": "Place", "name": `${data.airport} to ${data.destination}` } };
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
