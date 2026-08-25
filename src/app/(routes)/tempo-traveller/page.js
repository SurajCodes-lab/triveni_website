// app/tempo-traveller/page.js
import TempoMainClient from "@/components/TempoMainClient";
import { getRatingAndReviews } from "@/lib/seo/review-helpers";
import {
  getSpeakableSchema,
  getHowToSchema,
  getArticleSchema,
  getComparisonSchema,
  getTodayDate,
} from "@/lib/seo/speakable-helpers";
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

const SITE_URL = "https://www.trivenicabs.in";

export const metadata = {
  title: tightenTitle("Tempo Traveller ₹23/km — 12-26 Seater AC 4.9★ | Book"),
  description:
    "Book AC tempo travellers (12, 17, 20, 26 seater) with experienced drivers across North India. Transparent ₹/km pricing, 24/7 support, clean fleet. Get instant quote.",
  keywords:
    "tempo traveller on rent, tempo traveller hire, 12 seater tempo traveller, 17 seater tempo traveller, 20 seater tempo traveller, 26 seater tempo traveller, AC tempo traveller with driver, tempo traveller for outstation, tempo traveller for wedding, tempo traveller for group tour, luxury tempo traveller, maharaja tempo traveller, tempo traveller price per km, tempo traveller booking, Delhi to Manali tempo traveller, tempo traveller for Chardham yatra, tempo traveller rental near me, mini bus on rent, 16 seater tempo traveller, tempo traveller for school trip",
  alternates: { canonical: `${SITE_URL}/tempo-traveller` },
  openGraph: {
    title: "Tempo Traveller on Rent — 12 to 26 Seater AC with Driver",
    description:
      "North India's trusted tempo traveller rental. 12-26 seater AC vehicles, experienced drivers, transparent pricing. Outstation, wedding, group tours.",
    url: `${SITE_URL}/tempo-traveller`,
    siteName: "Triveni Cabs",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/tempo/17_seater.jpg`,
        width: 1200,
        height: 630,
        alt: "Tempo Traveller on Rent - Triveni Cabs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tempo Traveller on Rent — 12 to 26 Seater AC with Driver",
    description:
      "North India's trusted tempo traveller rental. 12-26 seater AC, experienced drivers, transparent pricing.",
    images: [`${SITE_URL}/images/tempo/17_seater.jpg`],
  },
};

export default function TempoTravellerPage() {
  const { aggregateRating, review } = getRatingAndReviews(
    "tempo-traveller-hub",
    "tempo"
  );

  const today = getTodayDate();

  const faqData = [
    {
      question: "How much does a tempo traveller cost per km?",
      answer:
        "Tempo traveller rentals start at ₹23/km for a 12-seater and go up to ₹31/km for a 26-seater luxury model. Final pricing depends on the route, season, and vehicle type. We provide transparent per-km quotes with no hidden charges.",
    },
    {
      question: "Which tempo traveller seater should I choose?",
      answer:
        "Choose a 12-seater for families and small friend groups (up to 11 passengers), a 17-seater for mid-size groups and corporate outings, a 20-seater for larger tour groups, and a 26-seater for very large groups, weddings, and events. All sizes are AC and come with a driver.",
    },
    {
      question: "Are the tempo travellers air-conditioned?",
      answer:
        "Yes, all our tempo travellers are fully air-conditioned with push-back seats, ample luggage space, and entertainment systems for a comfortable journey, including hill stations.",
    },
    {
      question: "Do you provide tempo travellers for outstation trips?",
      answer:
        "Yes, we provide tempo travellers for outstation trips across North India including Chardham Yatra, Himachal, Rajasthan, and more. Multi-day packages are available with overnight driver arrangements.",
    },
    {
      question: "Is a driver included with the tempo traveller?",
      answer:
        "Yes, every tempo traveller comes with an experienced, professional driver who knows the routes well. The driver is included in every package.",
    },
    {
      question: "Is there a minimum kilometres per day on outstation trips?",
      answer:
        "For outstation tempo traveller bookings we apply a minimum of 250 km per day. If your actual running is less, the day is billed at 250 km. Local same-city packages are billed on an hourly or fixed-package basis instead.",
    },
    {
      question: "Are driver allowance and night charges extra?",
      answer:
        "Multi-day trips include a driver allowance (driver bata) of around ₹400–₹600 per night to cover the driver's food and stay, plus a night-driving charge if travel continues past 11 PM. These are quoted upfront so there are no surprises.",
    },
    {
      question: "Are tolls, parking and state taxes included in the fare?",
      answer:
        "Our per-km rate covers the vehicle, fuel and driver. Tolls, parking fees, and interstate permit/state taxes are charged at actuals or can be bundled into an all-inclusive package on request. We always confirm this before booking.",
    },
    {
      question: "Do you provide tempo travellers for weddings?",
      answer:
        "Yes. We supply 12 to 26 seater tempo travellers for baraat, guest pick-up and drop, and multi-venue wedding logistics. Decorated tempo travellers and fleet bookings for large guest movements are available.",
    },
    {
      question: "Do you provide a GST invoice?",
      answer:
        "Yes, we issue a proper GST invoice on request, which makes our tempo travellers ideal for corporate outings, company offsites, and business travel that needs valid tax documentation.",
    },
    {
      question: "How is one-way priced versus round-trip?",
      answer:
        "Round trips are billed on total kilometres run with a per-day minimum. One-way (drop only) bookings are charged on a point-to-point basis that factors in the driver's return journey, so a one-way fare is usually higher than half the round-trip distance.",
    },
    {
      question: "How much luggage can a tempo traveller carry?",
      answer:
        "A 12-seater comfortably carries 8–10 large bags, a 17-seater 12–14 bags, and the 20/26-seater models have a dedicated rear luggage cabin for big-group travel. Let us know your luggage load and we'll recommend the right size.",
    },
    {
      question: "Can a tempo traveller go to hill stations like Manali or Shimla?",
      answer:
        "Yes. Our drivers are experienced on hill routes and our tempo travellers are maintained for mountain driving to Manali, Shimla, Nainital, Mussoorie, and the Chardham circuit. For very steep last-mile stretches we'll advise the best vehicle size.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "Cancellations made well in advance are fully refundable as per our policy. For last-minute cancellations a small fee may apply to cover driver allocation. Date changes are usually accommodated free of charge subject to availability.",
    },
    {
      question: "How do I book a tempo traveller?",
      answer:
        "You can book by calling 7668570551, sending a WhatsApp message, or filling out the enquiry form. Share your route, dates, and group size and we confirm availability and send a transparent quote instantly.",
    },
  ];

  const speakable = getSpeakableSchema([
    ".speakable-headline",
    ".speakable-lead",
    ".speakable-faq-first",
  ]);

  const howTo = getHowToSchema({
    name: "How to Book a Tempo Traveller with Triveni Cabs",
    description:
      "Book a 12 to 26 seater AC tempo traveller with an experienced driver across North India in four simple steps.",
    totalTime: "PT5M",
    steps: [
      {
        name: "Share your trip details",
        text: "Call 7668570551 or WhatsApp us with your route, travel dates, and group size so we can recommend the right seater.",
      },
      {
        name: "Get a transparent quote",
        text: "Receive an instant per-km quote with the vehicle size, inclusions, and any toll or driver-allowance details clearly listed — no hidden charges.",
      },
      {
        name: "Confirm your booking",
        text: "Approve the quote and confirm with a small advance. We lock in your AC tempo traveller and assign an experienced driver.",
      },
      {
        name: "Travel comfortably",
        text: "Your tempo traveller arrives on time at the pick-up point. Enjoy AC comfort, push-back seats, and 24/7 support throughout the journey.",
      },
    ],
  });

  const comparison = getComparisonSchema({
    slug: "tempo-traveller",
    title: "Tempo Traveller Seater Comparison — 12 vs 17 vs 20 vs 26",
    description:
      "Compare 12, 17, 20, and 26 seater tempo travellers by passenger capacity, best use case, price per km, and popular trips to pick the right size.",
    rows: [
      { name: "12 Seater Tempo Traveller (from ₹23/km)" },
      { name: "17 Seater Tempo Traveller (from ₹25/km)" },
      { name: "20 Seater Tempo Traveller (from ₹31/km)" },
      { name: "26 Seater Tempo Traveller (from ₹31/km)" },
    ],
    mentions: [
      "Tempo Traveller",
      "12 Seater Tempo Traveller",
      "17 Seater Tempo Traveller",
      "20 Seater Tempo Traveller",
      "26 Seater Tempo Traveller",
    ],
  });

  const article = getArticleSchema({
    slug: "tempo-traveller",
    headline:
      "Tempo Traveller on Rent in North India — Sizes, Pricing & Booking Guide",
    description:
      "Complete guide to renting a 12 to 26 seater AC tempo traveller with driver across North India — per-km pricing, what's included, popular routes, and how to book.",
    image: "/images/tempo/17_seater.jpg",
    datePublished: "2024-01-15",
    dateModified: today,
    authorName: "editorial",
    speakableSelectors: [
      ".speakable-headline",
      ".speakable-lead",
      ".speakable-faq-first",
    ],
  });

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/tempo-traveller#webpage`,
        url: `${SITE_URL}/tempo-traveller`,
        name: "Tempo Traveller on Rent — 12 to 26 Seater AC with Driver",
        description:
          "Book AC tempo travellers (12, 17, 20, 26 seater) with experienced drivers across North India.",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${SITE_URL}/tempo-traveller#breadcrumb` },
        inLanguage: "en-IN",
        speakable,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/tempo-traveller#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_URL,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Tempo Traveller",
            item: `${SITE_URL}/tempo-traveller`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/tempo-traveller#faq`,
        speakable,
        mainEntity: faqData.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      },
      howTo,
      ...comparison,
      article,
      {
        "@type": "Service",
        "@id": `${SITE_URL}/tempo-traveller#service`,
        serviceType: "Tempo Traveller Rental",
        name: "Tempo Traveller on Rent",
        description:
          "AC tempo traveller rental service (12, 17, 20, 26 seater) with experienced drivers across North India for outstation trips, weddings, group tours, and pilgrimages.",
        provider: {
          "@type": "TravelAgency",
          "@id": `${SITE_URL}/#organization`,
          name: "Triveni Cabs",
        },
        brand: {
          "@type": "Brand",
          name: "Triveni Cabs",
        },
        areaServed: [
          { "@type": "State", name: "Delhi NCR" },
          { "@type": "State", name: "Uttar Pradesh" },
          { "@type": "State", name: "Uttarakhand" },
          { "@type": "State", name: "Rajasthan" },
          { "@type": "State", name: "Himachal Pradesh" },
          { "@type": "State", name: "Punjab" },
        ],
        knowsAbout: [
          "Tempo Traveller Rental",
          "Group Travel",
          "Outstation Tours",
          "Chardham Yatra",
          "Wedding Transportation",
        ],
        aggregateRating,
        review,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Tempo Traveller Fleet",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "12 Seater Tempo Traveller",
              },
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "23",
                priceCurrency: "INR",
                unitText: "per km",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "17 Seater Tempo Traveller",
              },
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "26",
                priceCurrency: "INR",
                unitText: "per km",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "20 Seater Tempo Traveller",
              },
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "30",
                priceCurrency: "INR",
                unitText: "per km",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "26 Seater Tempo Traveller",
              },
              priceSpecification: {
                "@type": "UnitPriceSpecification",
                price: "35",
                priceCurrency: "INR",
                unitText: "per km",
              },
            },
          ],
        },
      },
    ],
  };

  return <TempoMainClient faqData={faqData} jsonLd={jsonLd} />;
}