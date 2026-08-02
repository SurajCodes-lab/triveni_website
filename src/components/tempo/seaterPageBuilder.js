// src/components/tempo/seaterPageBuilder.js
// Shared metadata + JSON-LD graph builder for per-seater Tempo Traveller pages.
import { seaterTempoData } from "@/utilis/seaterTempoData";
import {
  getSpeakableSchema,
  getHowToSchema,
  getArticleSchema,
  getTodayDate,
} from "@/lib/seo/speakable-helpers";

const SITE_URL = "https://www.trivenicabs.in";

export function buildSeaterMetadata(key) {
  const d = seaterTempoData[key];
  const url = `${SITE_URL}/${d.slug}`;
  const title = `${d.seats} Seater Tempo Traveller on Rent ₹${d.perKm}/km | AC + Driver`;
  const description = `Hire a ${d.name.toLowerCase()} (${d.capacity}) from ₹${d.perKm}/km. ${d.tagline}. AC, push-back seats, experienced driver, transparent pricing. Call 7668570551.`;
  const ogTitle = `${d.name} on Rent — ${d.capacity}, From ₹${d.perKm}/km | Triveni Cabs`;

  return {
    title,
    description,
    keywords: [
      `${d.seats} seater tempo traveller`,
      `${d.seats} seater tempo traveller on rent`,
      `${d.seats} seater tempo traveller price`,
      `${d.seats} seater tempo traveller per km`,
      `${d.seats} seater tempo traveller hire`,
      `${d.seats} seater tempo traveller delhi`,
      `${d.seats} seater tempo traveller rate`,
      `rent ${d.seats} seater tempo traveller`,
      `${d.seats} seater ac tempo traveller`,
      `tempo traveller ${d.seats} seater booking`,
      d.premium ? "maharaja tempo traveller" : "tempo traveller on rent",
      "tempo traveller with driver",
    ],
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
          alt: `${d.name} on rent — Triveni Cabs`,
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

export function buildSeaterJsonLd(key, { aggregateRating, review }) {
  const d = seaterTempoData[key];
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
        text: `Call 7668570551 or WhatsApp us with your route, dates and group size to confirm the ${d.shortName} is the right fit.`,
      },
      {
        name: "Get a transparent quote",
        text: `Receive an instant per-km quote (from ₹${d.perKm}/km) with inclusions and any toll or driver-allowance details — no hidden charges.`,
      },
      {
        name: "Confirm your booking",
        text: `Approve the quote and confirm with a small advance. We lock in your AC ${d.shortName} tempo traveller and assign a driver.`,
      },
      {
        name: "Travel comfortably",
        text: "Your tempo traveller arrives on time. Enjoy AC comfort, push-back seats and 24/7 support throughout the journey.",
      },
    ],
  });

  const article = getArticleSchema({
    slug: d.slug,
    headline: `${d.name} on Rent — Capacity, Pricing & Booking Guide`,
    description: `Complete guide to hiring a ${d.name.toLowerCase()}: seating capacity, per-km pricing from ₹${d.perKm}/km, what's included, popular routes and how to book.`,
    image: d.image,
    datePublished: "2024-02-01",
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
        name: `${d.name} on Rent`,
        description: `Hire a ${d.name.toLowerCase()} (${d.capacity}) from ₹${d.perKm}/km with AC and an experienced driver.`,
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
            name: "Tempo Traveller",
            item: `${SITE_URL}/tempo-traveller`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: d.name,
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
        serviceType: "Tempo Traveller Rental",
        name: `${d.name} on Rent`,
        description: `${d.name} rental (${d.capacity}) with an experienced driver across North India for outstation trips, weddings, group tours and pilgrimages.`,
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
        description: `${d.name} (${d.model}, ${d.capacity}) for hire across North India. AC, push-back seats and an experienced driver from ₹${d.perKm}/km.`,
        image: `${SITE_URL}${d.image}`,
        brand: { "@type": "Brand", name: "Triveni Cabs" },
        category: "Tempo Traveller Rental",
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
