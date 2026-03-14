import { airportRoutes, getRelatedRoutes } from '@/utilis/airportOutstationData';
import AirportOutstationClient from '@/components/airport/AirportOutstationClient';

const SLUG = 'delhi-airport-to-gurgaon-cab';
const data = airportRoutes[SLUG];

export const revalidate = false;

export const metadata = {
  title: `Delhi Airport to Gurgaon Cab | Fixed \u20B9${data.fares.sedan.price} | No Surge`,
  description: `Delhi Airport (IGI) to Gurgaon cab. Fixed fare sedan \u20B9${data.fares.sedan.price}, SUV \u20B9${data.fares.suv.price}. All terminal pickup. No surge pricing. ${data.time}. Call 7668570551.`,
  keywords: 'delhi airport to gurgaon cab, igi airport to gurgaon taxi, delhi airport gurugram transfer, airport cab gurgaon, cyber city cab',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: `/${SLUG}` },
  openGraph: {
    title: `Delhi Airport to Gurgaon Cab | Fixed Fare \u20B9${data.fares.sedan.price} | No Surge`,
    description: `Book cab from Delhi IGI Airport to Gurgaon. Fixed fare, corporate billing available. ${data.time}.`,
    type: 'website', locale: 'en_IN', url: `https://www.trivenicabs.in/${SLUG}`, siteName: 'Triveni Cabs',
  },
  twitter: { card: 'summary_large_image', title: `Delhi Airport to Gurgaon Cab | \u20B9${data.fares.sedan.price} Fixed`, description: 'IGI Airport to Gurgaon cab. No surge, corporate billing available.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function Page() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": `${data.airportCity} Airport to ${data.destination} Cab`, "item": `https://www.trivenicabs.in/${SLUG}` }] };
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Airport Transfer", "name": `${data.airportCity} Airport to ${data.destination} Cab Service`, "description": `Reliable cab from ${data.airport} to ${data.destination}. Fixed fare, corporate billing available.`, "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "address": { "@type": "PostalAddress", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "offers": { "@type": "AggregateOffer", "lowPrice": data.fares.sedan.price.replace(',', ''), "highPrice": data.fares.tempo.price.replace(',', ''), "priceCurrency": "INR" }, "areaServed": { "@type": "Place", "name": `${data.airport} to ${data.destination}` } };
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
