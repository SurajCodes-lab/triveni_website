// src/components/tempo/vehicleTypePageBuilder.js
// Shared metadata + JSON-LD @graph builder for the three vehicle-type hub
// demo pages (Tempo Traveller, Force Urbania, Maharaja Tempo Traveller).
// Conventions mirror src/components/tempo/seaterPageBuilder.js.
import { vehicleTypeData } from "@/utilis/vehicleTypeData";
import {
  getSpeakableSchema,
  getHowToSchema,
  getArticleSchema,
  getTodayDate,
} from "@/lib/seo/speakable-helpers";

const SITE_URL = "https://www.trivenicabs.in";

export function buildVehicleTypeMetadata(slug) {
  const d = vehicleTypeData[slug];
  // Real top-level routes — one page per vehicle type.
  const url = `${SITE_URL}/${d.slug}`;
  const title = d.meta.title;
  const description = d.meta.description;
  const ogTitle = `${d.name} — Triveni Cabs`;

  return {
    title,
    description,
    keywords: d.meta.keywords,
    authors: [{ name: "Triveni Cabs" }],
    creator: "Triveni Cabs",
    publisher: "Triveni Cabs",
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: `/${d.slug}` },
    openGraph: {
      title: ogTitle,
      description,
      type: "website",
      locale: "en_IN",
      url,
      siteName: "Triveni Cabs",
      images: [
        {
          url: `${SITE_URL}${d.image}`,
          width: 1200,
          height: 630,
          alt: `${d.name} — Triveni Cabs`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      site: "@trivenicabs",
      creator: "@trivenicabs",
      images: [`${SITE_URL}${d.image}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function buildVehicleTypeJsonLd(slug, { aggregateRating, review }) {
  const d = vehicleTypeData[slug];
  const url = `${SITE_URL}/${d.slug}`;
  const today = getTodayDate();
  const speakable = getSpeakableSchema([
    ".speakable-headline",
    ".speakable-lead",
    ".speakable-faq-first",
  ]);

  const howTo = getHowToSchema({
    name: `How to Book a ${d.name}`,
    description: `Book a ${d.name.toLowerCase()} with an experienced driver across North India in four simple steps.`,
    totalTime: "PT5M",
    steps: [
      {
        name: "Share your trip details",
        text: `Call 7668570551 or WhatsApp us with your route, dates and group size to confirm the right ${d.shortName} variant.`,
      },
      {
        name: "Get a transparent quote",
        text: `Receive an instant per-km quote (from ₹${d.perKm}/km) with inclusions and any toll or driver-allowance details — no hidden charges.`,
      },
      {
        name: "Confirm your booking",
        text: `Approve the quote and confirm with a small advance. We lock in your AC ${d.shortName} and assign an experienced driver.`,
      },
      {
        name: "Travel comfortably",
        text: "Your vehicle arrives on time. Enjoy AC comfort, premium seats and 24/7 support throughout the journey.",
      },
    ],
  });

  const article = getArticleSchema({
    slug: `${d.slug}`,
    headline: `${d.name} — Capacity, Pricing & Booking Guide`,
    description: `Complete guide to hiring a ${d.name.toLowerCase()}: seater variants, per-km pricing from ₹${d.perKm}/km, what's included, popular routes and how to book.`,
    image: d.image,
    datePublished: "2026-08-12",
    dateModified: today,
    authorName: "editorial",
    speakableSelectors: [
      ".speakable-headline",
      ".speakable-lead",
      ".speakable-faq-first",
    ],
  });

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${d.name}`,
        description: d.meta.description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        inLanguage: "en-IN",
        speakable,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: d.shortName,
            item: url,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        speakable,
        mainEntity: d.faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
      howTo,
      article,
      {
        "@type": "Service",
        "@id": `${url}#service`,
        serviceType: `${d.type} Rental`,
        name: `${d.name}`,
        description: `${d.name} (${d.capacity}) with an experienced driver across North India for outstation trips, weddings, group tours and pilgrimages.`,
        provider: {
          "@type": "TravelAgency",
          "@id": `${SITE_URL}/#organization`,
          name: "Triveni Cabs",
        },
        brand: { "@type": "Brand", name: "Triveni Cabs" },
        areaServed: [
          { "@type": "State", name: "Delhi NCR" },
          { "@type": "State", name: "Uttar Pradesh" },
          { "@type": "State", name: "Uttarakhand" },
          { "@type": "State", name: "Rajasthan" },
          { "@type": "State", name: "Himachal Pradesh" },
          { "@type": "State", name: "Punjab" },
        ],
        aggregateRating,
        review,
      },
      {
        "@type": "Product",
        "@id": `${url}#product`,
        name: `${d.name} — Triveni Cabs`,
        description: `${d.name} (${d.model}, ${d.capacity}) for hire across North India. AC, premium seats and an experienced driver from ₹${d.perKm}/km.`,
        image: `${SITE_URL}${d.image}`,
        brand: { "@type": "Brand", name: "Triveni Cabs" },
        category: `${d.type} Rental`,
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: String(d.perKm),
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: String(d.perKm),
            priceCurrency: "INR",
            unitText: "per km",
          },
          availability: "https://schema.org/InStock",
          url,
          seller: {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: "Triveni Cabs",
          },
        },
        aggregateRating,
        review,
      },
    ],
  };
}