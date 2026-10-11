import { notFound } from "next/navigation";
import { NOINDEX_ROBOTS } from '@/lib/seo/noindex-families.mjs';
import EventComboClient from "@/components/events/EventComboClient";
import {
  getEventCombo,
  getEventComboParams,
  eventTypes,
  eventCities,
  eventVenueAreas,
  eventCityGeo,
  getEventCityGeoSchema,
} from "@/utilis/eventTransportData";
import { getRatingAndReviews } from "@/lib/seo/review-helpers";
import {
  getSpeakableSchema,
  getHowToSchema,
  getArticleSchema,
  getTodayDate,
} from "@/lib/seo/speakable-helpers";
import { getContentUpdatedOn } from '@/lib/seo/content-updates';

const SITE_URL = "https://www.trivenicabs.in";
export const revalidate = 3600;
export const dynamicParams = false;

export async function generateStaticParams() {
  return getEventComboParams();
}

function buildVenues(city, citySlug) {
  const areas = eventVenueAreas[citySlug] || {};
  return (city.popularVenues || []).map((v) => ({
    name: v.name,
    type: v.type,
    area: areas[v.name] || null,
  }));
}

// type.name may already end in "Transport" (e.g. "Wedding Transport"); strip it
// so we can append "transport"/"transportation" without doubling the word.
function svcLabel(type) {
  return type.name.replace(/\s+transport(ation)?$/i, "").trim() || type.name;
}

function buildIntro(type, city) {
  const venueNames = (city.popularVenues || [])
    .slice(0, 3)
    .map((v) => v.name)
    .join(", ");
  const firstPrice = type.packages?.[0]?.price
    ? ` Packages start from ${type.packages[0].price.toLowerCase()}.`
    : "";
  return `Triveni Cabs™ handles ${svcLabel(type).toLowerCase()} transportation in ${city.name} end to end — ${type.description} In ${city.name} we coordinate guest movement${venueNames ? ` across venues like ${venueNames}` : ""}, with a dedicated event coordinator, a 500+ vehicle fleet, fixed pricing and 24/7 event-day support.${firstPrice}`;
}

function buildComboFaqs(type, city) {
  const venueNames = (city.popularVenues || [])
    .slice(0, 3)
    .map((v) => v.name)
    .join(", ");
  const startPrice = type.packages?.[0]?.price || "a custom quote";
  const combo = [
    {
      question: `How much does ${svcLabel(type).toLowerCase()} transportation cost in ${city.name}?`,
      answer: `${type.name} in ${city.name} starts from ${startPrice}. The final price depends on the number of vehicles, guest count, venue distances and your event dates. Share your ${city.name} venue and headcount on 7668570551 or WhatsApp and we send a transparent, fixed quote with GST invoice.`,
    },
    {
      question: `Which ${city.name} venues do you cover for ${type.name.toLowerCase()}?`,
      answer: `We cover all major ${city.name} venues${venueNames ? `, including ${venueNames}` : ""}, plus hotels, banquet halls, farmhouses and convention centres across the city. Our drivers know ${city.name} routes and venue access points, so guests reach on time.`,
    },
    {
      question: `How far in advance should I book ${svcLabel(type).toLowerCase()} transport in ${city.name}?`,
      answer: `For ${city.name} events we recommend booking 3–4 weeks ahead, and earlier during peak wedding and conference season, to lock in your preferred fleet. Last-minute ${city.name} bookings are accommodated subject to vehicle availability.`,
    },
  ];
  return [...combo, ...(type.faqs || [])];
}

export async function generateMetadata({ params }) {
  const { slug, city: citySlug } = await params;
  const combo = getEventCombo(slug, citySlug);
  if (!combo) return { title: "Event Transportation | Triveni Cabs™" };
  const { type, city } = combo;
  const url = `${SITE_URL}/event-transportation-service/${slug}/${citySlug}`;
  const startPrice = type.packages?.[0]?.price?.replace("Starting ", "") || "";
  const title = `${type.name} in ${city.name}${startPrice ? ` from ${startPrice}` : ""}`;
  const description = `${type.title} in ${city.name}. Guest shuttles, coordinated fleet & coordinator for ${city.name} events. 500+ vehicles, GST invoice, 24/7 support. Call 7668570551.`;
  const ogTitle = `${type.title} in ${city.name} — Coordinated Fleet & Coordinator | Triveni Cabs™`;

  return {
    title,
    description,
    keywords: [
      `${svcLabel(type).toLowerCase()} transport ${city.name.toLowerCase()}`,
      `${type.name.toLowerCase()} ${city.name.toLowerCase()}`,
      `${city.name.toLowerCase()} ${type.name.toLowerCase()} shuttle`,
      `event transportation ${city.name.toLowerCase()}`,
      ...(type.keywords || []).slice(0, 4),
      ...(city.keywords || []).slice(0, 3),
    ],
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: `/event-transportation-service/${slug}/${citySlug}` },
    openGraph: {
      title: ogTitle,
      description,
      type: "website",
      locale: "en_IN",
      url,
      siteName: "Triveni Cabs™",
      images: [
        {
          url: `${SITE_URL}${city.heroImage || type.heroImage}`,
          width: 1200,
          height: 630,
          alt: `${type.name} in ${city.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
      site: "@trivenicabs",
      creator: "@trivenicabs",
      images: [`${SITE_URL}${city.heroImage || type.heroImage}`],
    },
    robots: NOINDEX_ROBOTS,
  };
}

export default async function EventComboPage({ params }) {
  const { slug, city: citySlug } = await params;
  const combo = getEventCombo(slug, citySlug);
  if (!combo) notFound();

  const { type, city } = combo;
  const url = `${SITE_URL}/event-transportation-service/${slug}/${citySlug}`;
  const today = (getContentUpdatedOn(`/event-transportation-service/${slug}/${citySlug}`) || getTodayDate());

  const intro = buildIntro(type, city);
  const faqs = buildComboFaqs(type, city);
  const venues = buildVenues(city, citySlug);
  const { aggregateRating, review } = getRatingAndReviews(
    `event-${slug}-${citySlug}`,
    "event"
  );

  const otherTypesInCity = eventTypes
    .filter((t) => t.slug !== slug)
    .slice(0, 8)
    .map((t) => ({ slug: t.slug, name: t.name }));
  const sameTypeOtherCities = Object.keys(eventCities)
    .filter((c) => c !== citySlug)
    .map((c) => ({ slug: c, name: eventCities[c].name }));

  const speakable = getSpeakableSchema([
    ".speakable-headline",
    ".speakable-lead",
    ".speakable-faq-first",
  ]);

  const howTo = getHowToSchema({
    name: `How to Book ${type.name} in ${city.name}`,
    description: `Book coordinated ${svcLabel(type).toLowerCase()} transportation in ${city.name} with Triveni Cabs™ in four steps.`,
    totalTime: "PT5M",
    steps: [
      {
        name: "Share your event details",
        text: `Call 7668570551 or WhatsApp with your ${city.name} venue, date, guest count and event type.`,
      },
      {
        name: "Get a fixed quote",
        text: `Receive a transparent ${city.name} quote with the recommended fleet, inclusions and GST invoice — no hidden charges.`,
      },
      {
        name: "Confirm & assign coordinator",
        text: "Approve the quote and we assign a dedicated coordinator who plans routes and timings for your guests.",
      },
      {
        name: "Event-day execution",
        text: "Vehicles arrive on time with 24/7 support and live coordination throughout your event.",
      },
    ],
  });

  const article = getArticleSchema({
    slug: `event-transportation-service/${slug}/${citySlug}`,
    headline: `${type.title} in ${city.name} — Fleet, Packages & Booking Guide`,
    description: `Guide to ${svcLabel(type).toLowerCase()} transportation in ${city.name}: covered venues, fleet, package pricing and how to book.`,
    image: city.heroImage || type.heroImage,
    datePublished: "2024-03-01",
    dateModified: today,
    authorName: "editorial",
    speakableSelectors: [
      ".speakable-headline",
      ".speakable-lead",
      ".speakable-faq-first",
    ],
  });

  const geoPlace = getEventCityGeoSchema(citySlug, city);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${type.title} in ${city.name}`,
        description: intro,
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
          {
            "@type": "ListItem",
            position: 3,
            name: type.name,
            item: `${SITE_URL}/event-transportation-service/${slug}`,
          },
          {
            "@type": "ListItem",
            position: 4,
            name: city.name,
            item: url,
          },
        ],
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        serviceType: "Event Transportation",
        name: `${type.name} in ${city.name}`,
        description: intro,
        provider: {
          "@type": "TravelAgency",
          "@id": `${SITE_URL}/#organization`,
          name: "Triveni Cabs",
        },
        brand: { "@type": "Brand", name: "Triveni Cabs" },
        areaServed: { "@type": "City", name: city.name },
        aggregateRating,
        review,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        speakable,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
      howTo,
      article,
      ...(geoPlace ? [geoPlace] : []),
    ],
  };

  return (
    <EventComboClient
      data={{
        type,
        city,
        typeSlug: slug,
        citySlug,
        intro,
        faqs,
        venues,
        otherTypesInCity,
        sameTypeOtherCities,
      }}
      jsonLd={jsonLd}
    />
  );
}
