import { notFound } from 'next/navigation';
import { getVehicleHireRoute, getAllVehicleHireRoutes, getVehicleSpec } from '@/utilis/vehicleRouteHireData';
import VehicleHireClient from '@/components/vehicle-hire/VehicleHireClient';
import AEOHead from '@/components/seo/AEOHead';

const VEHICLE_TYPE = 'innova';
const VEHICLE_SLUG = 'innova-hire';

export const revalidate = false;
export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllVehicleHireRoutes(VEHICLE_TYPE).map((r) => ({ route: r.routeSlug }));
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { route: slug } = resolvedParams;
  const routeData = getVehicleHireRoute(VEHICLE_TYPE, slug);
  const vehicleSpec = getVehicleSpec(VEHICLE_TYPE);

  if (!routeData || !vehicleSpec) {
    return { title: 'Vehicle Hire Route Not Found' };
  }

  const title = `${vehicleSpec.name} Hire: ${routeData.origin} to ${routeData.destination} | Rs ${routeData.fare.toLocaleString('en-IN')} — Triveni Cabs`;
  const description = `Hire ${vehicleSpec.name} (${vehicleSpec.type}) from ${routeData.origin} to ${routeData.destination} at Rs ${routeData.fare.toLocaleString('en-IN')}. ${routeData.distanceKm} km, ${routeData.duration}. ${vehicleSpec.seating} seater, AC, experienced driver. Call 7668570551.`;
  const ogTitle = `${vehicleSpec.name} on Hire: ${routeData.origin} to ${routeData.destination} — Rs ${routeData.fare.toLocaleString('en-IN')} All-Inclusive | Triveni Cabs`;

  return {
    title,
    description,
    keywords: [
      `${vehicleSpec.name.toLowerCase()} hire ${routeData.origin.toLowerCase()} to ${routeData.destination.toLowerCase()}`,
      `${vehicleSpec.name.toLowerCase()} rental ${routeData.origin.toLowerCase()} to ${routeData.destination.toLowerCase()}`,
      `${vehicleSpec.name.toLowerCase()} ${routeData.origin.toLowerCase()} to ${routeData.destination.toLowerCase()} fare`,
      `${vehicleSpec.name.toLowerCase()} ${routeData.origin.toLowerCase()} to ${routeData.destination.toLowerCase()} price`,
      `${vehicleSpec.name.toLowerCase()} on rent ${routeData.origin.toLowerCase()}`,
      `hire ${vehicleSpec.name.toLowerCase()} for ${routeData.destination.toLowerCase()}`,
      `${routeData.origin.toLowerCase()} to ${routeData.destination.toLowerCase()} by ${vehicleSpec.name.toLowerCase()}`,
      `${vehicleSpec.name.toLowerCase()} booking ${routeData.origin.toLowerCase()}`,
      `${vehicleSpec.type.toLowerCase()} hire ${routeData.origin.toLowerCase()} to ${routeData.destination.toLowerCase()}`,
      `${routeData.origin.toLowerCase()} to ${routeData.destination.toLowerCase()} cab ${vehicleSpec.type.toLowerCase()}`,
      `${vehicleSpec.name.toLowerCase()} outstation ${routeData.origin.toLowerCase()}`,
      `best ${vehicleSpec.type.toLowerCase()} for ${routeData.destination.toLowerCase()} trip`,
    ],
    authors: [{ name: 'Triveni Cabs' }],
    creator: 'Triveni Cabs',
    publisher: 'Triveni Cabs',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: { canonical: `/${VEHICLE_SLUG}/${slug}` },
    openGraph: {
      title: ogTitle,
      description,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/${VEHICLE_SLUG}/${slug}`,
      siteName: 'Triveni Cabs',
      images: [{ url: vehicleSpec.image, width: 1200, height: 630, alt: `${vehicleSpec.name} Hire ${routeData.origin} to ${routeData.destination}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      creator: '@trivenicabs',
      site: '@trivenicabs',
      images: [vehicleSpec.image],
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  };
}

export default async function VehicleHirePage({ params }) {
  const resolvedParams = await params;
  const { route: slug } = resolvedParams;
  const routeData = getVehicleHireRoute(VEHICLE_TYPE, slug);
  const vehicleSpec = getVehicleSpec(VEHICLE_TYPE);

  if (!routeData || !vehicleSpec) {
    notFound();
  }

  // JSON-LD: Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": `${vehicleSpec.name} Hire ${routeData.origin} to ${routeData.destination}`,
    "name": `${vehicleSpec.name} Hire: ${routeData.origin} to ${routeData.destination}`,
    "description": `Hire ${vehicleSpec.name} from ${routeData.origin} to ${routeData.destination}. ${routeData.distanceKm} km, ${routeData.duration}. All-inclusive fare Rs ${routeData.fare.toLocaleString('en-IN')}.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "email": "cabstriveni@gmail.com",
      "url": "https://www.trivenicabs.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "366 Dandupura near Tajganj",
        "addressLocality": "Agra",
        "addressRegion": "UP",
        "postalCode": "282006",
        "addressCountry": "IN"
      }
    },
    "areaServed": [
      { "@type": "City", "name": routeData.origin },
      { "@type": "City", "name": routeData.destination }
    ],
    "offers": {
      "@type": "Offer",
      "price": routeData.fare.toString(),
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "10000",
      "bestRating": "5"
    }
  };

  // JSON-LD: Breadcrumb
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": `${vehicleSpec.name} Hire`, "item": `https://www.trivenicabs.in/${VEHICLE_SLUG}` },
      { "@type": "ListItem", "position": 3, "name": `${routeData.origin} to ${routeData.destination}`, "item": `https://www.trivenicabs.in/${VEHICLE_SLUG}/${slug}` }
    ]
  };

  // JSON-LD: FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": routeData.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <AEOHead pageType="route" data={{ url: `/${VEHICLE_SLUG}/${slug}`, title: `${vehicleSpec.name} Hire: ${routeData.origin} to ${routeData.destination}`, origin: routeData.origin, destination: routeData.destination, city: routeData.origin }} />
      <VehicleHireClient vehicleSpec={vehicleSpec} routeData={routeData} />
    </>
  );
}
