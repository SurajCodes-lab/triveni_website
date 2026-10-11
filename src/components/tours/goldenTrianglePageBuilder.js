// src/components/tours/goldenTrianglePageBuilder.js
import { goldenTriangleTours } from "@/utilis/goldenTriangleData";
import {
  getSpeakableSchema,
  getHowToSchema,
  getArticleSchema,
  getCityPlaceSchema,
  getTodayDate,
} from "@/lib/seo/speakable-helpers";
import { getContentUpdatedOn } from '@/lib/seo/content-updates';

const SITE_URL = "https://www.trivenicabs.in";

export function buildGTMetadata(slug) {
  const d = goldenTriangleTours[slug];
  const url = `${SITE_URL}/${d.slug}`;
  const fromPart = d.origin === "Delhi" ? "" : ` from ${d.origin}`;
  const title = `Golden Triangle Tour${fromPart} ₹${d.priceFrom.toLocaleString("en-IN")} | Car + Driver`;
  const description = `${d.tagline}. ${d.durationOptions}, private AC car with English-speaking driver, all-inclusive of fuel, tolls & driver. Taj Mahal, Amber Fort & more. Call 7668570551.`;
  const ogTitle = `${d.h1} — ${d.durationOptions}, from ₹${d.priceFrom.toLocaleString("en-IN")} | Triveni Cabs™`;
  return {
    title,
    description,
    keywords: [
      `golden triangle tour${fromPart}`.trim(),
      `golden triangle tour package${fromPart}`.trim(),
      `golden triangle tour by car`,
      `delhi agra jaipur tour${fromPart}`.trim(),
      `golden triangle ${d.durationOptions.replace(/\s+/g, " ")} package`,
      "taj mahal tour", "golden triangle itinerary", "golden triangle tour cost",
    ],
    authors: [{ name: "Triveni Cabs™" }],
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: `/${d.slug}` },
    openGraph: {
      title: ogTitle, description, type: "website", locale: "en_IN", url, siteName: "Triveni Cabs™",
      images: [{ url: `${SITE_URL}${d.heroImage}`, width: 1200, height: 630, alt: `${d.h1} — Triveni Cabs` }],
    },
    twitter: { card: "summary_large_image", title: ogTitle, description, site: "@trivenicabs", creator: "@trivenicabs", images: [`${SITE_URL}${d.heroImage}`] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  };
}

export function buildGTJsonLd(slug, { aggregateRating, review }) {
  const d = goldenTriangleTours[slug];
  const url = `${SITE_URL}/${d.slug}`;
  const today = (getContentUpdatedOn(`/${d.slug}`) || getTodayDate());
  const speakable = getSpeakableSchema([".speakable-headline", ".speakable-lead", ".speakable-faq-first"]);

  // Geo-grounded City place entities for each city in the circuit.
  const places = d.citySlugs
    .map((cs) => getCityPlaceSchema(cs, { idSlug: `${d.slug}#${cs}` }))
    .filter(Boolean);

  const howTo = getHowToSchema({
    name: `How to Book the ${d.name}`,
    description: `Book a private chauffeur-driven ${d.name} with Triveni Cabs™ in four steps.`,
    totalTime: "PT5M",
    steps: [
      { name: "Share your dates & group size", text: `Call 7668570551 or WhatsApp with your travel dates, ${d.origin} pickup point and number of travellers.` },
      { name: "Get a tailored itinerary & quote", text: `Receive a flexible ${d.durationOptions} day-wise plan and an all-inclusive quote from ₹${d.priceFrom.toLocaleString("en-IN")} — no hidden charges.` },
      { name: "Confirm with a small advance", text: "Approve the plan and confirm. We assign an experienced English-speaking driver and a clean AC vehicle." },
      { name: "Travel the Golden Triangle", text: "Door-to-door pickup, flexible stops, and 24/7 support across Delhi, Agra and Jaipur." },
    ],
  });

  const article = getArticleSchema({
    slug: d.slug,
    headline: `${d.h1} (2026) — Itinerary, Cost & Booking Guide`,
    description: `Complete guide to the ${d.name}: ${d.durationOptions} itinerary, package pricing from ₹${d.priceFrom.toLocaleString("en-IN")}, what's included, and how to book a private car with driver.`,
    image: d.heroImage,
    datePublished: "2026-01-01",
    dateModified: today,
    authorName: "editorial",
    speakableSelectors: [".speakable-headline", ".speakable-lead", ".speakable-faq-first"],
  });

  const touristTrip = {
    "@type": "TouristTrip",
    "@id": `${url}#trip`,
    name: d.name,
    description: d.intro,
    url,
    touristType: ["Leisure travellers", "Families", "Couples", "International tourists"],
    itinerary: {
      "@type": "ItemList",
      numberOfItems: d.itinerary.length,
      itemListElement: d.itinerary.map((day, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: { "@type": "TouristAttraction", name: day.title, description: day.desc },
      })),
    },
    offers: {
      "@type": "Offer",
      price: String(d.priceFrom),
      priceCurrency: "INR",
      url,
      availability: "https://schema.org/InStock",
    },
    provider: { "@type": "TravelAgency", "@id": `${SITE_URL}/#organization`, name: "Triveni Cabs™" },
    ...(places.length ? { subjectOf: places.map((p) => ({ "@id": p["@id"] })) } : {}),
    ...(aggregateRating ? { aggregateRating } : {}),
    ...(review ? { review } : {}),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: d.h1,
        description: d.tagline,
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
          { "@type": "ListItem", position: 2, name: "Tours", item: `${SITE_URL}/tour-package` },
          { "@type": "ListItem", position: 3, name: d.name, item: url },
        ],
      },
      touristTrip,
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        speakable,
        mainEntity: d.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
      howTo,
      article,
      ...places,
    ],
  };
}
