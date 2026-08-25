import { notFound } from "next/navigation";
import CorporateComboClient from "@/components/corporate/CorporateComboClient";
import {
  getCorporateComboParams,
  getCorporateCombo,
  getCorporateSubSlugs,
} from "@/utilis/corporateComboData";
import {
  getAllCorporateSlugs,
  getCorporateCityBySlug,
  getCorporateCityPlaceSchema,
} from "@/utilis/corporateTransportData";
import { getIndustryBySlug } from "@/utilis/corporateIndustryData";
import { getUseCaseBySlug } from "@/utilis/corporateUseCaseData";
import { getRatingAndReviews } from "@/lib/seo/review-helpers";
import {
  getSpeakableSchema,
  getHowToSchema,
  getArticleSchema,
  getTodayDate,
} from "@/lib/seo/speakable-helpers";
import { tightenTitle } from '@/lib/seo/serp-ctr';
const SITE_URL = "https://www.trivenicabs.in";
export const revalidate = 3600;
export const dynamicParams = false;

export async function generateStaticParams() {
  return getCorporateComboParams();
}

function subName(slug) {
  const i = getIndustryBySlug(slug);
  if (i) return i.name;
  const u = getUseCaseBySlug(slug);
  return u ? u.name : slug;
}

function buildIntro(city, item) {
  const areas = (Array.isArray(city.businessAreas) ? city.businessAreas : [])
    .slice(0, 3)
    .map((a) => a.name || a)
    .join(", ");
  return `Triveni Cabs runs ${item.name} corporate transport in ${city.name} — employee pick-up & drop, shift shuttles, executive travel and airport transfers, billed from ₹11/km. ${areas ? `We cover ${city.name} hubs like ${areas}, ` : ""}with a dedicated account manager, GST invoicing, MIS reports, GPS-tracked vehicles, verified drivers and a 30-minute backup guarantee on 24/7 operations.`;
}

function buildComboFaqs(city, item, kind) {
  const areas = (Array.isArray(city.businessAreas) ? city.businessAreas : [])
    .slice(0, 3)
    .map((a) => a.name || a)
    .join(", ");
  const combo = [
    {
      question: `How much does ${item.name} corporate transport cost in ${city.name}?`,
      answer: `${item.name} corporate transport in ${city.name} starts at ₹11/km, with per-trip, monthly-package and annual-contract options. Final pricing depends on headcount, shift timings, vehicle mix and routes. Share your requirement on 7668570551 or request a proposal and we send a transparent, GST-invoiced quote within 2–4 hours.`,
    },
    {
      question: `Which ${city.name} areas do you cover for ${item.name} transport?`,
      answer: `We cover all major ${city.name} corporate clusters${areas ? `, including ${areas}` : ""}, plus business parks, SEZs and residential pickup zones across the city. Drivers know ${city.name} routes and gate access, so employees reach on time.`,
    },
    {
      question: `How do we start ${item.name} transport for our ${city.name} office?`,
      answer: `Share your roster (headcount, addresses, shift timings) by call, WhatsApp or the online form. We optimise routes, assign right-sized vehicles and a dedicated account manager, and go live — usually within 24–48 hours for ${city.name} accounts.`,
    },
  ];
  return [...combo, ...(item.faqs || [])];
}

export async function generateMetadata({ params }) {
  const { city: citySlug, sub: subSlug } = await params;
  const combo = getCorporateCombo(citySlug, subSlug);
  if (!combo) return { title: "Corporate Transportation | Triveni Cabs" };
  const { city, item } = combo;
  const url = `${SITE_URL}/corporate-transportation-service/${citySlug}/${subSlug}`;
  const title = tightenTitle(`${item.name} Transport in ${city.name} — Corporate Cabs ₹11/km`);
  const description = `${item.name} corporate transportation in ${city.name}: employee pick-up & drop, shuttles, executive travel from ₹11/km. Account manager, GST invoice, MIS, GPS, 24/7. Call 7668570551.`;
  const ogTitle = `${item.name} Corporate Transport in ${city.name} — Triveni Cabs`;

  return {
    title,
    description,
    keywords: [
      `${item.name} transport ${city.name.toLowerCase()}`,
      `${item.name} cab service ${city.name.toLowerCase()}`,
      `corporate transport ${city.name.toLowerCase()}`,
      `employee transport ${city.name.toLowerCase()}`,
      ...((item.keywords || []).slice(0, 4)),
      ...((city.keywords || []).slice(0, 3)),
    ],
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: `/corporate-transportation-service/${citySlug}/${subSlug}` },
    openGraph: {
      title: ogTitle,
      description,
      type: "website",
      locale: "en_IN",
      url,
      siteName: "Triveni Cabs",
      images: [{ url: `${SITE_URL}${city.heroImage}`, width: 1200, height: 630, alt: `${item.name} transport in ${city.name}` }],
    },
    twitter: { card: "summary_large_image", title: ogTitle, description, site: "@trivenicabs", creator: "@trivenicabs", images: [`${SITE_URL}${city.heroImage}`] },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  };
}

export default async function CorporateComboPage({ params }) {
  const { city: citySlug, sub: subSlug } = await params;
  const combo = getCorporateCombo(citySlug, subSlug);
  if (!combo) notFound();

  const { city, item, kind } = combo;
  const url = `${SITE_URL}/corporate-transportation-service/${citySlug}/${subSlug}`;
  const today = getTodayDate();

  const intro = buildIntro(city, item);
  const faqs = buildComboFaqs(city, item, kind);
  const { aggregateRating, review } = getRatingAndReviews(`corp-${citySlug}-${subSlug}`, "corporate");

  const otherSubs = getCorporateSubSlugs()
    .filter((s) => s !== subSlug)
    .slice(0, 9)
    .map((s) => ({ slug: s, name: subName(s) }));
  const sameSubOtherCities = getAllCorporateSlugs()
    .filter((c) => c !== citySlug)
    .map((c) => ({ slug: c, name: (getCorporateCityBySlug(c) || {}).name || c }));

  const speakable = getSpeakableSchema([".speakable-headline", ".speakable-lead", ".speakable-faq-first"]);

  const howTo = getHowToSchema({
    name: `How to Set Up ${item.name} Transport in ${city.name}`,
    description: `Set up ${item.name} corporate transport in ${city.name} with Triveni Cabs in four steps.`,
    totalTime: "PT5M",
    steps: [
      { name: "Share your roster", text: `Send headcount, employee addresses and shift timings for your ${city.name} office by call, WhatsApp or the online form.` },
      { name: "Get a proposal", text: `Receive a transparent, GST-invoiced ${city.name} proposal within 2–4 hours with the recommended fleet and pricing model.` },
      { name: "Onboard & optimise routes", text: "We assign a dedicated account manager, optimise routes and right-size vehicles for each batch." },
      { name: "Go live with 24/7 ops", text: "Daily GPS-tracked operations with MIS reports and a 30-minute backup-vehicle guarantee." },
    ],
  });

  const article = getArticleSchema({
    slug: `corporate-transportation-service/${citySlug}/${subSlug}`,
    headline: `${item.name} Transport in ${city.name} — Coverage, Fleet & Pricing Guide`,
    description: `Guide to ${item.name} corporate transportation in ${city.name}: covered business hubs, fleet, pricing models and how to onboard.`,
    image: city.heroImage,
    datePublished: "2024-03-01",
    dateModified: today,
    authorName: "editorial",
    speakableSelectors: [".speakable-headline", ".speakable-lead", ".speakable-faq-first"],
  });

  let geoPlace = null;
  try {
    geoPlace = getCorporateCityPlaceSchema(citySlug);
  } catch (e) {
    geoPlace = null;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${item.name} Transport in ${city.name}`,
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
          { "@type": "ListItem", position: 2, name: "Corporate Transportation", item: `${SITE_URL}/corporate-transportation-service` },
          { "@type": "ListItem", position: 3, name: city.name, item: `${SITE_URL}/corporate-transportation-service/${citySlug}` },
          { "@type": "ListItem", position: 4, name: item.name, item: url },
        ],
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        serviceType: "Corporate Transportation",
        name: `${item.name} Corporate Transport in ${city.name}`,
        description: intro,
        provider: { "@type": "LocalBusiness", "@id": `${SITE_URL}/#organization`, name: "Triveni Cabs", telephone: "+91-7668570551", url: SITE_URL },
        brand: { "@type": "Brand", name: "Triveni Cabs" },
        areaServed: { "@type": "City", name: city.name },
        offers: { "@type": "Offer", priceCurrency: "INR", price: "11", priceSpecification: { "@type": "UnitPriceSpecification", price: "11", priceCurrency: "INR", unitText: "per km" }, availability: "https://schema.org/InStock", url },
        aggregateRating,
        review,
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        speakable,
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
      },
      howTo,
      article,
      ...(geoPlace ? [geoPlace] : []),
    ],
  };

  return (
    <CorporateComboClient
      data={{ city, item, kind, citySlug, subSlug, intro, faqs, otherSubs, sameSubOtherCities }}
      jsonLd={jsonLd}
    />
  );
}
