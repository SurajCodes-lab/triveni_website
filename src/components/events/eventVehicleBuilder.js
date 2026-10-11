// src/components/events/eventVehicleBuilder.js
// Metadata + JSON-LD for vehicle-for-event landing pages.
import { eventVehicles } from "@/utilis/eventVehicleData";
import {
  getSpeakableSchema,
  getHowToSchema,
  getArticleSchema,
  getTodayDate,
} from "@/lib/seo/speakable-helpers";
import { getContentUpdatedOn } from '@/lib/seo/content-updates';

const SITE_URL = "https://www.trivenicabs.in";

export function buildEventVehicleMetadata(slug) {
  const d = eventVehicles[slug];
  const url = `${SITE_URL}/${d.slug}`;
  const title = `${d.name} on Rent ${d.priceFrom} | AC + Coordinator`;
  const description = `${d.tagline}. ${d.seating}, dedicated event coordinator, GST invoice, 24/7 support. Weddings, corporate events & festivals. Call 7668570551.`;
  const ogTitle = `${d.name} — ${d.seating}, From ${d.priceFrom} | Triveni Cabs™`;

  return {
    title,
    description,
    keywords: [
      d.slug.replace(/-/g, " "),
      `${d.shortName.toLowerCase()} for wedding`,
      `${d.shortName.toLowerCase()} for corporate event`,
      `${d.shortName.toLowerCase()} on rent for events`,
      "event transportation",
      "wedding guest transport",
      "corporate event transport",
      "group transport for events",
    ],
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: `/${d.slug}` },
    openGraph: {
      title: ogTitle,
      description,
      type: "website",
      locale: "en_IN",
      url,
      siteName: "Triveni Cabs™",
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

export function buildEventVehicleJsonLd(slug, { aggregateRating, review }) {
  const d = eventVehicles[slug];
  const url = `${SITE_URL}/${d.slug}`;
  const today = (getContentUpdatedOn(`/${d.slug}`) || getTodayDate());
  const speakable = getSpeakableSchema([
    ".speakable-headline",
    ".speakable-lead",
    ".speakable-faq-first",
  ]);

  const howTo = getHowToSchema({
    name: `How to Book a ${d.name}`,
    description: `Book a ${d.name.toLowerCase()} with a dedicated event coordinator in four steps.`,
    totalTime: "PT5M",
    steps: [
      {
        name: "Share your event details",
        text: "Call 7668570551 or WhatsApp with your event type, date, venue and guest count.",
      },
      {
        name: "Get a fixed quote",
        text: `Receive a transparent quote from ${d.priceFrom} with the recommended fleet, inclusions and GST invoice.`,
      },
      {
        name: "Confirm & assign coordinator",
        text: "Approve the quote and we assign a dedicated coordinator who plans routes and timings.",
      },
      {
        name: "Event-day execution",
        text: "Vehicles arrive on time with 24/7 support and live coordination throughout your event.",
      },
    ],
  });

  const article = getArticleSchema({
    slug: d.slug,
    headline: `${d.name} — Use Cases, Pricing & Booking Guide`,
    description: `Guide to hiring a ${d.name.toLowerCase()}: best use cases, ${d.seating}, pricing from ${d.priceFrom} and how to book.`,
    image: d.image,
    datePublished: "2024-03-01",
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
        name: d.name,
        description: d.intro,
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
            name: "Event Transportation",
            item: `${SITE_URL}/event-transportation-service`,
          },
          { "@type": "ListItem", position: 3, name: d.name, item: url },
        ],
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        serviceType: "Event Transportation",
        name: d.name,
        description: d.intro,
        provider: {
          "@type": "TravelAgency",
          "@id": `${SITE_URL}/#organization`,
          name: "Triveni Cabs",
        },
        brand: { "@type": "Brand", name: "Triveni Cabs™" },
        areaServed: { "@type": "Country", name: "India" },
        ...(aggregateRating ? { aggregateRating } : {}),
        ...(review ? { review } : {}),
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
    ],
  };
}
