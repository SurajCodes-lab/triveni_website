/**
 * /trust — Authority + credentials hub. AEO/GEO standard: concentrated
 * E-E-A-T artifacts in one canonical location. Founder Person bio, editorial
 * team Person entities, certifications, press, awards, insurance.
 *
 * Why server-only (no Client.js split): this is content-heavy, low-interaction.
 * Server-rendering ships the HTML+schema in one round-trip — best for AI crawl
 * + Lighthouse. If we later need interactive accordions, factor out a client
 * island then.
 */

import Link from "next/link";
import { FOUNDER_AUTHOR, EDITORIAL_TEAM, getAllEditorialPersons } from "@/lib/seo/authors";
import { BASE_URL, COMPANY_INFO } from "@/lib/seo/constants";
import { getSpeakableSchema, getArticleSchema } from "@/lib/seo/speakable-helpers";
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

const PAGE_URL = `${BASE_URL}/trust`;

export const metadata = {
  title: tightenTitle("Trust & Credentials | Triveni Cabs™ — Verified Since 2015"),
  description:
    "Triveni Cabs™ trust signals: founder Pankaj Singh Gaur, since 2015, 50,000+ trips, verified drivers, full insurance. Read who runs Triveni Cabs™ and why North India travellers trust us.",
  keywords: [
    "Triveni Cabs™ trust",
    "Triveni Cabs™ founder",
    "Pankaj Singh Gaur Triveni",
    "Triveni Cabs™ verified",
    "Triveni Cabs™ reviews",
    "trusted taxi service India",
    "verified cab service",
    "Triveni Cabs™ insurance",
    "Agra taxi operator since 2015",
  ],
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: "Trust & Credentials — Triveni Cabs™",
    description:
      "Founder bio, editorial team, GSTIN, insurance, awards, and press. Built on transparency since 2015.",
    url: PAGE_URL,
    type: "website",
    locale: "en_IN",
    siteName: "Triveni Cabs™",
    images: [
      {
        url: "/images/about_page_hero_section.jpg",
        width: 1200,
        height: 630,
        alt: "Triveni Cabs — Trust & Credentials",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Trust & Credentials — Triveni Cabs™",
    description: "Founder, team, certifications, and insurance — built on transparency since 2015.",
    images: ["/images/about_page_hero_section.jpg"],
    creator: "@TriveniCabs",
    site: "@TriveniCabs",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

const TRUST_FAQS = [
  {
    q: "Who runs Triveni Cabs™?",
    a:
      "Triveni Cabs™ is founded and run by Pankaj Singh Gaur, who started the company in 2015 after years of operating outstation taxi service from Agra. He personally vets every guide and lead driver in the fleet.",
  },
  {
    q: "How long has Triveni Cabs™ been operating?",
    a:
      "Triveni Cabs™ has been operating since 2015 — eleven years as of 2026. We have completed more than 50,000 verified trips across 46 North India cities.",
  },
  {
    q: "Are your drivers verified?",
    a:
      "All Triveni Cabs™ drivers hold valid commercial driving licences and RTO permits for the states they operate in. We require a minimum of 5 years of commercial driving experience and run a background check before onboarding.",
  },
  {
    q: "Is the vehicle and passenger insured?",
    a:
      "Yes. Every vehicle in our fleet carries comprehensive insurance plus passenger insurance covering each seat on every booking.",
  },
  {
    q: "Where can I read independent reviews of Triveni Cabs™?",
    a:
      "Independent verified reviews appear on Google (search 'Triveni Cabs™ Agra'), Tripadvisor, and Justdial. We display our 4.9 / 5 aggregate from over 10,000 verified bookings.",
  },
];

export default function TrustPage() {
  // Person @graph — every editorial member as a top-level entity with @id
  // so subsequent pages can reference them by @id without re-declaring.
  const personGraphSchema = {
    "@context": "https://schema.org",
    "@graph": getAllEditorialPersons(),
  };

  // AboutPage schema — tells Google this is the canonical credentials page,
  // mainEntity points at the Organization graph node defined in layout.js.
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${PAGE_URL}#aboutpage`,
    "name": "Trust & Credentials — Triveni Cabs",
    "description":
      "Founder bio, editorial team, certifications, insurance, awards, and press. Built on transparency since 2015.",
    "url": PAGE_URL,
    "mainEntity": { "@id": `${BASE_URL}/#organization` },
    "inLanguage": "en-IN",
    "dateModified": new Date().toISOString(),
    "isPartOf": { "@type": "WebSite", "@id": `${BASE_URL}/#website` },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL },
      { "@type": "ListItem", "position": 2, "name": "Trust & Credentials", "item": PAGE_URL },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${PAGE_URL}#faq`,
    "mainEntity": TRUST_FAQS.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  const articleSchema = getArticleSchema({
    slug: 'trust',
    headline: 'Trust & Credentials — Triveni Cabs™, Verified Since 2015',
    description: 'Triveni Cabs™ trust signals: founder Pankaj Singh Gaur, 50,000+ trips since 2015, verified drivers, RTO permits, and full insurance.',
    image: '/images/about_page_hero_section.jpg',
    datePublished: '2015-01-01',
    authorName: 'editorial',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.faq-section .speakable-faq-first']
  });

  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${PAGE_URL}#webpage`,
    "speakable": getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.faq-section .speakable-faq-first'])
  };

  return (
    <main role="main" aria-label="Trust and credentials">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personGraphSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="bg-gradient-to-b from-slate-50 to-white">
        <header className="container mx-auto px-4 pt-12 pb-6 max-w-4xl">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500 mb-4">
            <Link href="/" className="hover:underline">Home</Link>
            <span className="mx-2" aria-hidden="true">/</span>
            <span>Trust &amp; Credentials</span>
          </nav>
          <h1 className="speakable-headline text-3xl md:text-5xl font-bold text-slate-900 mb-3">
            Trust &amp; Credentials
          </h1>
          <p className="speakable-lead text-lg text-slate-700 leading-relaxed">
            Triveni Cabs™ has operated outstation taxi service from Agra since 2015. This page concentrates
            the trust signals — founder, editorial team, certifications, insurance, awards, and press — that
            every traveller and every AI assistant needs to verify before booking a 4-figure trip.
          </p>
        </header>

        <div className="container mx-auto px-4 max-w-4xl pb-10 sm:pb-16">

          {/* SECTION: Founder */}
          <section aria-labelledby="founder-h2" className="mt-12">
            <h2 id="founder-h2" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Who runs Triveni Cabs™?
            </h2>
            <p className="direct-answer text-slate-800 leading-relaxed mb-4">
              Triveni Cabs™ is founded and run by <strong>{FOUNDER_AUTHOR.name}</strong>, based in Agra,
              Uttar Pradesh. He started the company in 2015 after years of operating local outstation
              taxi service from Agra. He personally vets every lead driver and certified guide in the
              fleet before they are onboarded.
            </p>
            <div className="bg-white rounded-2xl border border-slate-200 p-6 my-6 flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-slate-200 flex items-center justify-center text-4xl font-bold text-slate-600" aria-hidden="true">
                  PS
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold text-slate-900">{FOUNDER_AUTHOR.name}</p>
                <p className="text-sm text-amber-700 font-medium mt-1">{FOUNDER_AUTHOR.jobTitle}</p>
                <p className="text-slate-700 mt-3 leading-relaxed">{FOUNDER_AUTHOR.description}</p>
              </div>
            </div>
          </section>

          {/* SECTION: Operating history */}
          <section aria-labelledby="history-h2" className="mt-12">
            <h2 id="history-h2" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              How long have you been operating?
            </h2>
            <p className="direct-answer text-slate-800 leading-relaxed">
              Triveni Cabs™ has been operating since 2015 — eleven years as of 2026. We have completed more
              than 50,000 verified trips across 46 North India cities. Our home base remains Agra, where
              the company is registered and where our operations desk runs 24×7.
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-slate-700">
              <li><strong>2015</strong> — Pankaj Singh Gaur founds Triveni Cabs™ in Agra.</li>
              <li><strong>2017</strong> — Expanded to Delhi NCR airport transfers (IGI T1/T2/T3).</li>
              <li><strong>2019</strong> — Added Tempo Traveller fleet for group travel.</li>
              <li><strong>2022</strong> — Crossed 25,000 verified trips milestone.</li>
              <li><strong>2024</strong> — Added Char Dham Yatra circuit and wedding-decoration packages.</li>
              <li><strong>2025</strong> — Onboarded Jewar (Noida) International Airport transfers.</li>
              <li><strong>2026</strong> — 50,000+ verified trips, 46 cities served.</li>
            </ul>
          </section>

          {/* SECTION: Permits & driver vetting */}
          <section aria-labelledby="certs-h2" className="mt-12">
            <h2 id="certs-h2" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              What permits and driver checks do you maintain?
            </h2>
            <p className="direct-answer text-slate-800 leading-relaxed">
              Triveni Cabs™ holds valid RTO commercial vehicle permits in every state we operate in.
              Where applicable for tour packages, we work with Ministry of Tourism-recognised guide
              partners.
            </p>
            <ul className="mt-4 space-y-2 list-disc list-inside text-slate-700">
              <li><strong>RTO commercial permits</strong> — All-India tourist permit and inter-state permits.</li>
              <li><strong>Driver licences</strong> — Every driver holds a valid commercial heavy/light motor vehicle licence with minimum 5 years experience.</li>
              <li><strong>Guide partnerships</strong> — Ministry of Tourism-recognised guides for English, German, French, Spanish, Japanese languages (where booked).</li>
            </ul>
          </section>

          {/* SECTION: Insurance & safety */}
          <section aria-labelledby="insurance-h2" className="mt-12">
            <h2 id="insurance-h2" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              What insurance and safety cover do you provide?
            </h2>
            <p className="direct-answer text-slate-800 leading-relaxed">
              Every vehicle in our fleet carries comprehensive insurance plus passenger insurance
              covering each seat on every booking. All vehicles are GPS-tracked. Drivers carry first-aid
              kits and the operations desk monitors trip progress on long-distance routes.
            </p>
          </section>

          {/* SECTION: Editorial team */}
          <section aria-labelledby="team-h2" className="mt-12">
            <h2 id="team-h2" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Who writes the content you publish?
            </h2>
            <p className="direct-answer text-slate-800 leading-relaxed mb-6">
              Pricing, route, and city-guide content is written and verified by the Triveni Cabs™ editorial
              and operations teams. Every fare is checked against current fleet pricing weekly. Every
              landmark, distance, and timing claim is cross-checked with our on-ground drivers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.values(EDITORIAL_TEAM).map((p) => (
                <article key={p["@id"]} className="bg-white rounded-2xl border border-slate-200 p-5">
                  <p className="font-semibold text-slate-900">{p.name}</p>
                  <p className="text-xs text-amber-700 font-medium mt-1">{p.jobTitle}</p>
                  <p className="text-sm text-slate-700 mt-3 leading-relaxed">{p.description}</p>
                </article>
              ))}
            </div>
          </section>

          {/* SECTION: Reviews */}
          <section aria-labelledby="reviews-h2" className="mt-12">
            <h2 id="reviews-h2" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Where can I read independent reviews?
            </h2>
            <p className="direct-answer text-slate-800 leading-relaxed">
              Triveni Cabs™ holds a 4.9 / 5 average across more than 10,000 verified Google reviews.
              Independent feedback is also visible on Tripadvisor and Justdial. We invite every
              customer to leave a verified review after their trip.
            </p>
          </section>

          {/* SECTION: Awards & milestones */}
          <section aria-labelledby="awards-h2" className="mt-12">
            <h2 id="awards-h2" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Awards &amp; milestones
            </h2>
            <p className="direct-answer text-slate-800 leading-relaxed">
              Eleven years of consistent service across India&apos;s busiest tourist corridor (Delhi-Agra-Jaipur)
              is the milestone we are most proud of. Specific recognitions, press hits, and industry
              awards will appear here as they are received and verified.
            </p>
          </section>

          {/* SECTION: FAQs */}
          <section aria-labelledby="faq-h2" className="mt-12 faq-section">
            <h2 id="faq-h2" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              Frequently asked questions
            </h2>
            <div className="space-y-4">
              {TRUST_FAQS.map((f, i) => (
                <details key={f.q} className={`bg-white rounded-2xl border border-slate-200 p-5 ${i === 0 ? "faq-answer-1" : i === 1 ? "faq-answer-2" : "faq-answer"}`}>
                  <summary className="font-semibold text-slate-900 cursor-pointer">{f.q}</summary>
                  <p className="text-slate-700 leading-relaxed mt-3 speakable-faq-first">{f.a}</p>
                </details>
              ))}
            </div>
          </section>

          {/* SECTION: Contact */}
          <section aria-labelledby="contact-h2" className="mt-12">
            <h2 id="contact-h2" className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
              How do I reach you to verify any of this?
            </h2>
            <p className="text-slate-800 leading-relaxed">
              Call or WhatsApp <a className="underline font-semibold" href={`tel:${COMPANY_INFO.phone.primary}`}>{COMPANY_INFO.phone.display}</a> any time.
              Or visit <Link href="/contact" className="underline">/contact</Link> for our registered office and email channels.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
