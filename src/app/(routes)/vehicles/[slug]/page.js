import { notFound } from "next/navigation";
import VehicleDetails from "@/components/VehicleDetails";
import VehicleHireClient from "@/components/vehicles/VehicleHireClient";
import AEOHead from '@/components/seo/AEOHead';
import DataTable from "@/components/seo/DataTable";
import { vehicleDetails } from "@/utilis/data";
import { vehicleHirePages, getAllVehicleHireSlugs } from "@/utilis/vehicleHireData";
import { tightenTitle } from '@/lib/seo/serp-ctr';
export const revalidate = 3600;
export const dynamicParams = false;

// Old category slugs (sedan, suv, tempo-traveller, luxury-bus, bus)
const oldCategorySlugs = ["sedan", "suv", "tempo-traveller", "luxury-bus", "bus"];

export async function generateStaticParams() {
  const newVehicleSlugs = getAllVehicleHireSlugs().map((slug) => ({ slug }));
  const oldSlugs = oldCategorySlugs.map((slug) => ({ slug }));
  return [...oldSlugs, ...newVehicleSlugs];
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  // Check if it's a new vehicle hire page
  const vehicleHire = vehicleHirePages[slug];
  if (vehicleHire) {
    const rate = vehicleHire.perKmRate.outstation;
    const title = tightenTitle(`${vehicleHire.name} on Rent | ${rate} | Book Now`);
    const description = `Rent ${vehicleHire.name} with driver at ${rate} for outstation trips. ${vehicleHire.seats} seats, ${vehicleHire.fuelType}, AC. Professional drivers, 24/7 support. Book online.`;
    const canonical = `https://www.trivenicabs.in/vehicles/${slug}`;

    return {
      title,
      description,
      keywords: `${vehicleHire.name} rental, ${vehicleHire.name} on rent, ${vehicleHire.name} hire, ${vehicleHire.name} booking, ${vehicleHire.name} taxi, ${vehicleHire.category} rental india, ${vehicleHire.name} outstation, ${vehicleHire.name} airport transfer, triveni cabs ${vehicleHire.name}`,
      alternates: { canonical },
      openGraph: {
        title,
        description,
        type: "website",
        locale: "en_IN",
        url: canonical,
        siteName: "Triveni Cabs™",
        images: [
          {
            url: "https://www.trivenicabs.in/images/car/innova_crysta.jpg",
            width: 1200,
            height: 630,
            alt: `${vehicleHire.name} on Rent - Triveni Cabs`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["https://www.trivenicabs.in/images/car/innova_crysta.jpg"],
      },
      robots: { index: true, follow: true },
    };
  }

  // Old category pages - SEO mapping
  const seoMapping = {
    sedan: {
      title: "Book Sedan Car Rental Online India | AC Sedan Taxi Hire",
      description: "Rent AC sedan cars for outstation trips in India. Professional sedan taxi service with driver at \u20B911/km. Book sedan car rental for Delhi, Agra, Jaipur travel.",
    },
    suv: {
      title: "SUV Car Rental India | 6-7 Seater SUV Hire | Innova Ertiga Booking",
      description: "Book 6-7 seater SUV cars for family trips across India. Innova, Ertiga SUV rental with professional driver. Best rates for group travel.",
    },
    "tempo-traveller": {
      title: "Tempo Traveller Rental India | 12-26 Seater | \u20B923/km Onwards",
      description: "Book 12, 16, 17, 20 & 26 seater tempo traveller for group tours. AC tempo with pushback seats from \u20B923/km.",
    },
    "luxury-bus": {
      title: "Luxury Bus Rental India | Volvo 35-56 Seater | \u20B945/km",
      description: "Rent luxury Volvo & BharatBenz buses (35-56 seater) with LED TV, recliners, washroom, Wi-Fi from \u20B945/km.",
    },
    bus: {
      title: "Bus Rental India | 22-41 Seater AC Bus | \u20B930/km",
      description: "Book 22-41 seater AC buses for group travel. Affordable rates from \u20B930/km for school trips, corporate outings.",
    },
  };

  const seo = seoMapping[slug];
  if (seo) {
    return {
      title: seo.title,
      description: seo.description,
      alternates: { canonical: `https://www.trivenicabs.in/vehicles/${slug}` },
      openGraph: {
        title: seo.title,
        description: seo.description,
        type: "website",
        locale: "en_IN",
        url: `https://www.trivenicabs.in/vehicles/${slug}`,
        siteName: "Triveni Cabs™",
      },
      robots: { index: true, follow: true },
    };
  }

  return {
    title: "Vehicle Rental",
    description: "Browse our vehicle fleet for rental across India.",
  };
}

function generateVehicleHireStructuredData(vehicle) {
  const rate = vehicle.perKmRate.outstation.replace(/[^\d]/g, "");
  const canonical = `https://www.trivenicabs.in/vehicles/${vehicle.slug}`;

  const schemas = [];

  // Product schema with AggregateOffer
  schemas.push({
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${vehicle.name} on Rent`,
    description: vehicle.description.split("\n\n")[0],
    brand: {
      "@type": "Brand",
      name: "Triveni Cabs",
    },
    category: vehicle.category,
    url: canonical,
    image: "https://www.trivenicabs.in/images/car/innova_crysta.jpg",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: rate,
      highPrice: String(parseInt(rate) * 3),
      offerCount: "3",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Triveni Cabs",
        url: "https://www.trivenicabs.in",
      },
    },
    
  });

  // FAQ schema
  if (vehicle.faqs && vehicle.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: vehicle.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  // BreadcrumbList schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.trivenicabs.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Vehicles",
        item: "https://www.trivenicabs.in/vehicles",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${vehicle.name} on Rent`,
        item: canonical,
      },
    ],
  });

  return schemas;
}

export default async function VehicleSlugPage({ params }) {
  const { slug } = await params;

  // Check if it's a new vehicle hire page
  const vehicleHire = vehicleHirePages[slug];
  if (vehicleHire) {
    const schemas = generateVehicleHireStructuredData(vehicleHire);
    return (
      <>
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <AEOHead pageType="route" data={{ url: `/vehicles/${slug}`, title: vehicleHire.name || '' }} />
        <VehicleHireClient vehicle={vehicleHire} />
      </>
    );
  }

  // Old category slugs - render legacy VehicleDetails component
  const isOldCategory = oldCategorySlugs.includes(slug);
  if (isOldCategory) {
    const rec = vehicleDetails.find((v) => v.type.toLowerCase().replace(/\s+/g, '-') === slug) || vehicleDetails[0];
    const label = rec.type.replace(/-/g, ' ');
    const faqs = [
      { question: `What is the per km rate for ${label} rental?`, answer: `Our ${label} rental is ${rec.perKm}; the driver is ${String(rec.driverCharges).toLowerCase()}. Outstation trips bill ${rec.perDayLimit}; tolls and parking are extra at actuals.` },
      { question: `Is a driver included in a ${label} booking?`, answer: `Yes, every ${label} comes with an experienced, licensed chauffeur; the driver is ${String(rec.driverCharges).toLowerCase()}.` },
      { question: `How many passengers does the ${label} seat?`, answer: `${rec.seating}, with ${(rec.facilities || []).slice(0, 3).join(', ').toLowerCase()}.` },
      { question: `Are tolls and parking included in the ${label} fare?`, answer: 'No. Tolls, parking and state permits are charged at actuals and itemised on the invoice; fuel and the driver are in the fare.' },
    ];
    const faqSchema = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })) };
    const rows = [
      { item: 'Seating', value: rec.seating },
      { item: 'Per-kilometre rate', value: rec.perKm },
      { item: 'Driver', value: rec.driverCharges },
      { item: 'Outstation minimum', value: rec.perDayLimit },
      ...(rec.localSightseeing || []).map((l) => ({ item: `Local package, ${l.duration} / ${l.distance}`, value: l.price })),
      { item: 'Cancellation', value: rec.cancellationCharge },
    ];
    return (
      <main>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <VehicleDetails slug={slug} />
        <div className="container mx-auto px-4 pb-12">
          <DataTable
            title={`What does a ${label} cost to hire?`}
            caption={`${label} hire: seating, per-kilometre rate, driver, outstation minimum and local packages`}
            intro="Fuel and the driver are in the fare; tolls, parking and state permits are extra at actuals."
            columns={[{ key: 'item', label: 'Item' }, { key: 'value', label: label }]}
            rows={rows}
          />
        </div>
      </main>
    );
  }

  // Not found
  notFound();
}
