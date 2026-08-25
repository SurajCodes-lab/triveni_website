// src/app/(routes)/tours-with-guide/page.js
// H1 — Main hub. Lists all 40 Group A vehicle/itinerary children + links to sub-hubs.

import Link from 'next/link';
import Image from 'next/image';
import {
  toursWithGuideData,
  getToursByGroup,
  GUIDE_LANGUAGES,
  TOUR_VEHICLES,
} from '@/utilis/toursWithGuideData';
import AnswerBox from '@/components/seo/AnswerBox';
import InlineCTA from '@/components/seo/InlineCTA';
import { Car, Users, Globe, IndianRupee, Clock, MapPin, Sparkles } from '@/components/ui/icons';
import FindYourFit from './FindYourFit';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import {
  getSpeakableSchema,
  getArticleSchema,
  getHowToSchema,
  getComparisonSchema,
  getTodayDate,
} from '@/lib/seo/speakable-helpers';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

// ===== Content data: vehicle matrix, language matrix, FAQ (drive schema + visible UI) =====
const TWG_VEHICLE_ROWS = [
  { feature: 'Swift Dzire (Sedan)', seats: '4', from: '₹3,000', bestFor: 'Couples, solo travellers, city day tours' },
  { feature: 'Ertiga (MPV)', seats: '6', from: '₹3,500', bestFor: 'Small families with luggage' },
  { feature: 'Innova Crysta (SUV)', seats: '7', from: '₹4,200', bestFor: 'Families, Golden Triangle comfort' },
  { feature: 'Force Urbania', seats: '12', from: '₹6,500', bestFor: 'Friend groups, extended families' },
  { feature: 'Maharaja Tempo Traveller', seats: '17', from: '₹8,500', bestFor: 'Large groups, multi-day circuits' },
  { feature: 'Volvo Coach', seats: '45', from: 'On request', bestFor: 'Corporate, school & pilgrimage groups' },
  { feature: 'BMW / Audi (Luxury)', seats: '4', from: 'On request', bestFor: 'VIP guests, premium heritage tours' },
];

const TWG_LANGUAGE_ROWS = [
  { feature: 'English', day: '₹1,500', bestFor: 'US / UK / Australia visitors' },
  { feature: 'Hindi', day: '₹1,200', bestFor: 'Domestic & NRI travellers' },
  { feature: 'French', day: '₹2,500', bestFor: 'France, Belgium, Québec, Switzerland' },
  { feature: 'German', day: '₹2,800', bestFor: 'Germany, Austria, Switzerland' },
  { feature: 'Spanish', day: '₹2,500', bestFor: 'Spain & Latin America' },
  { feature: 'Japanese / Mandarin', day: '₹3,000', bestFor: 'Japan, China, Taiwan, Singapore' },
];

const TWG_FAQS = [
  { question: 'What is a Tour With Guide bundle?', answer: 'A Tour With Guide bundle combines a verified AC vehicle (with driver) and a Ministry-of-Tourism licensed guide into one fixed fare. You pick a route — Agra, Delhi, Jaipur or the Golden Triangle — a vehicle by group size, and a guide language. The bundled price is locked at booking with no hidden charges.' },
  { question: 'How much does a vehicle + guide tour cost?', answer: 'Bundles start at ₹3,000 for a sedan day tour with an English or Hindi guide. Larger vehicles and foreign-language guides cost more — an Innova with an English guide for the Golden Triangle, or a tempo traveller with a multilingual guide for a group, are quoted on request. The fare always includes both the vehicle and the licensed guide.' },
  { question: 'Are the guides really government-licensed?', answer: 'Yes. Every guide holds a valid Regional Level Guide licence from the Ministry of Tourism, Government of India, with an ASI monument pass where required. We share the guide’s licence number and photo-ID on WhatsApp at confirmation so you can verify before the tour begins.' },
  { question: 'Which languages can the guide speak?', answer: 'English, Hindi, French, German, Spanish, Italian, Japanese, Russian, Mandarin and Portuguese are available, with Korean, Arabic, Dutch, Polish and Thai on request. Choose your language when booking and we match a licensed guide who speaks it fluently.' },
  { question: 'What vehicles are available for guided tours?', answer: 'Swift Dzire sedan (4 seats), Ertiga MPV (6), Innova Crysta SUV (7), Force Urbania (12), Maharaja Tempo Traveller (17), 45-seater Volvo coach and chauffeured BMW/Audi luxury cars. All vehicles are air-conditioned with verified drivers.' },
  { question: 'Can I do a same-day Taj Mahal tour with a guide?', answer: 'Yes — the Delhi → Agra same-day cluster is one of our most-booked bundles. A car and licensed Agra guide cover the Taj Mahal, Agra Fort and Fatehpur Sikri in one day with zero overnight stay, returning you to Delhi the same evening.' },
  { question: 'Are monument entry tickets included in the bundle?', answer: 'No. The bundled fare covers the vehicle, driver and licensed guide. Monument entry tickets (Taj Mahal, Agra Fort, Amber Fort, etc.) are paid separately — your guide helps you buy the correct ticket and use skip-the-line counters where available.' },
  { question: 'How do I book a Tour With Guide?', answer: 'Pick a route and vehicle on this page, or use the Find Your Fit tool, then call +91 7668570551 or message on WhatsApp. We confirm vehicle and guide availability, share the guide’s licence, and lock your bundled fare within minutes.' },
  { question: 'Can I customise the itinerary?', answer: 'Yes. Tell us your interests, pace and must-see monuments and we build the day around you — sunrise at the Taj, an Old Delhi food walk, or an early Amber Fort start to beat the crowds. Custom itineraries are confirmed on WhatsApp before travel.' },
  { question: 'What is the cancellation policy?', answer: 'Cancel up to 24 hours before the tour for a full refund. Same-day cancellations carry a partial fee. The bundled fare is fixed at booking and GST invoices are available for business travellers.' },
  { question: 'Do you cover multi-city Golden Triangle tours?', answer: 'Yes. The Golden Triangle bundle covers Delhi, Agra and Jaipur over 5 days with the same vehicle and driver throughout and a region-licensed guide in each city — a Delhi guide in Delhi, an Agra guide at the Taj, and a Jaipur guide at Amber Fort.' },
  { question: 'Can the guide help with photography and shopping?', answer: 'Absolutely. Licensed guides know the best photo spots and timings, and give honest recommendations for authentic handicraft shops and restaurants — helping you avoid commission-driven touts.' },
];

// 10 varied monument images — one per supported guide language so the deep-page
// grids don't all show the same Taj photo.
const LANG_C_IMAGES = {
  English:    '/images/sightseeing/Agra/Taj_mahal.jpg',
  Hindi:      '/images/sightseeing/Delhi/red_fort.jpg',
  French:     '/images/sightseeing/Agra/agra_fort.jpg',
  German:     '/images/sightseeing/Jaipur/amber_fort.jpg',
  Spanish:    '/images/sightseeing/Jaipur/Hawa_Mahal.jpg',
  Italian:    '/images/sightseeing/Agra/Mehtab_Bagh.jpg',
  Japanese:   '/images/sightseeing/Delhi/Lotus Temple.jpg',
  Russian:    '/images/sightseeing/Delhi/Akshardham_Temple.jpg',
  Mandarin:   '/images/sightseeing/Jaipur/city_palace.jpg',
  Portuguese: '/images/sightseeing/Agra/Baby_Taj.jpg',
};

const PHONE = '7668570551';
const baseUrl = 'https://www.trivenicabs.in';
const url = `${baseUrl}/tours-with-guide`;

export const metadata = {
  title: tightenTitle('Tours With Licensed Guide India — Vehicle + Guide ₹3,000'),
  description: 'Bundled tour packages: Taj Mahal, Delhi, Jaipur, Golden Triangle. Vehicle + Ministry-licensed guide. Multilingual guides. ₹3,000+. 4.9★, no surprise fees.',
  keywords: 'tours with guide, tour package india, sightseeing tour, triveni cabs',
  alternates: { canonical: url },
  openGraph: {
    title: 'Tours With Guide India — Vehicle + Licensed Guide Bundle from ₹3,000',
    description: 'Ready-to-book Tours-With-Guide packages: Taj Mahal, Delhi, Jaipur, Golden Triangle. Multilingual Ministry-licensed guides. No surprise fees.',
    url,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Triveni Cabs',
    images: [{ url: `${baseUrl}/images/sightseeing/Agra/Taj_mahal.jpg`, width: 1200, height: 630, alt: 'Tours With Guide — Triveni Cabs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tours With Guide India — Vehicle + Licensed Guide from ₹3,000 | Triveni',
    description: 'Ready-to-book guided tours · Taj Mahal, Delhi, Jaipur, Golden Triangle · Multilingual guides · 4.9★',
    images: [`${baseUrl}/images/sightseeing/Agra/Taj_mahal.jpg`],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function ToursWithGuideHub() {
  const groupA = getToursByGroup('A');
  const groupB = getToursByGroup('B');
  const groupC = getToursByGroup('C');

  const clusters = [
    { id: 'A1', title: 'Agra',                       subtitle: 'Taj · Fort · Baby Taj · Mehtab Bagh',     img: '/images/sightseeing/Agra/Taj_mahal.jpg' },
    { id: 'A2', title: 'Delhi → Agra (Same-Day)',    subtitle: 'Round-trip Taj Mahal · zero overnight',  img: '/images/sightseeing/Agra/agra_fort.jpg' },
    { id: 'A3', title: 'Delhi',                      subtitle: 'Old & New Delhi · heritage · temples',   img: '/images/sightseeing/Delhi/red_fort.jpg' },
    { id: 'A4', title: 'Jaipur',                     subtitle: 'Amber Fort · Hawa Mahal · City Palace',   img: '/images/sightseeing/Jaipur/amber_fort.jpg' },
    { id: 'A5', title: 'Golden Triangle',            subtitle: 'The 5-day Delhi → Agra → Jaipur classic', img: '/images/sightseeing/Golden_Triangle/Golden_triangle_hero_section.jpg' },
  ];

  // ============== JSON-LD ==============
  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: 'Tours With Guide — Vehicle + Licensed Guide Bundle',
        description: 'Tours with vehicle + Ministry-licensed guide bundled. Taj Mahal, Delhi, Jaipur, Golden Triangle. Multilingual guides.',
        inLanguage: 'en-IN',
        breadcrumb: { '@id': `${url}#breadcrumb` },
        speakable: getSpeakableSchema(['.speakable-lead', '.speakable-faq-first']),
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: 'Tours With Licensed Guide — Vehicle + Guide Bundle',
        serviceType: 'Guided Tour Package',
        description: 'Bundled guided tours pairing a verified AC vehicle with a Ministry-of-Tourism licensed multilingual guide across Agra, Delhi, Jaipur and the Golden Triangle.',
        provider: { '@id': `${baseUrl}/#organization` },
        brand: { '@type': 'Brand', name: 'Triveni Cabs' },
        areaServed: ['Delhi', 'Agra', 'Jaipur', 'Golden Triangle, India'],
        url,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'INR',
          price: '3000',
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'INR',
            price: '3000',
            description: 'Bundled tour from ₹3,000 (vehicle + licensed guide)',
          },
        },
        ...getRatingAndReviews('tours-with-guide-hub', 'sightseeing'),
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        speakable: getSpeakableSchema(['.speakable-faq-first']),
        mainEntity: TWG_FAQS.map(f => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
      getArticleSchema({
        slug: 'tours-with-guide',
        headline: 'Tours With Guide India — Vehicle + Licensed Guide Bundle',
        description: 'How to book a guided tour in India with a vehicle and a Ministry-licensed multilingual guide bundled into one fixed fare — vehicles, languages, prices and routes.',
        image: `${baseUrl}/images/sightseeing/Agra/Taj_mahal.jpg`,
        datePublished: '2026-01-01',
        dateModified: getTodayDate(),
        authorName: 'editorial',
        speakableSelectors: ['.speakable-lead', '.speakable-faq-first'],
      }),
      getHowToSchema({
        name: 'How to Book a Tour With Guide in India',
        description: 'Book a bundled vehicle + Ministry-licensed guide tour in 4 simple steps.',
        totalTime: 'PT5M',
        estimatedCost: { currency: 'INR', value: '3000' },
        steps: [
          { name: 'Pick a route', text: 'Choose Agra, Delhi, Jaipur or the 5-day Golden Triangle.' },
          { name: 'Choose a vehicle', text: 'Select by group size — sedan (4), MPV (6), SUV (7), tempo (17), Volvo (45) or luxury car.' },
          { name: 'Choose a guide language', text: 'English, Hindi, French, German, Spanish and more — the licensed guide is included in the bundle.' },
          { name: 'Confirm and lock the fare', text: 'Call +91 7668570551 or WhatsApp us; we verify the guide licence and lock your bundled fare.' },
        ],
      }),
      ...getComparisonSchema({
        slug: 'tours-with-guide',
        title: 'Guided Tour Vehicle Options by Capacity, Fare and Best Use',
        description: 'Compare Tours-With-Guide vehicle classes — sedan, MPV, SUV, tempo traveller, Volvo coach and luxury car — by seating capacity, starting fare and best use case.',
        rows: TWG_VEHICLE_ROWS,
        mentions: ['Innova Crysta', 'Maharaja Tempo Traveller', 'Volvo coach', 'Golden Triangle', 'licensed tour guide'],
      }),
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Tours With Guide', item: url },
        ],
      },
      {
        '@type': 'CollectionPage',
        name: 'All Tours With Licensed Guide',
        url,
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: groupA.length + groupB.length + groupC.length,
          itemListElement: [...groupA, ...groupB, ...groupC].map((t, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            url: `${baseUrl}/tours-with-guide/${t.slug}`,
            name: t.headline,
          })),
        },
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
      <main className="min-h-screen bg-[#0a0a14] text-slate-100 selection:bg-amber-300/30 selection:text-amber-100">
        {/* ============= HERO ============= */}
        <section className="relative isolate overflow-hidden border-b border-amber-400/10">
          {/* Backdrop */}
          <div className="absolute inset-0 -z-10">
            <Image src="/images/sightseeing/Agra/Taj_mahal.jpg" alt="" fill priority sizes="100vw" className="object-cover opacity-25" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.08),transparent_55%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14]/60 via-[#0a0a14]/85 to-[#0a0a14]" />
            <DotsTexture />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-28 pb-16 lg:pb-24">
            <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* LEFT: editorial copy */}
              <div className="lg:col-span-7">
                <MinistryCrest />
                <h1 className="mt-7 font-black leading-[0.95] tracking-tight tg-hero-enter" style={{ animationDelay: '80ms' }}>
                  <span className="block text-[2.4rem] sm:text-[3rem] md:text-[3.75rem] lg:text-[4.25rem] bg-gradient-to-r from-amber-100 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                    Vehicle &amp; licensed guide,
                  </span>
                  <span className="block mt-2 font-serif italic font-medium tracking-tight text-[2rem] sm:text-[2.5rem] md:text-[3.25rem] lg:text-[3.75rem] text-white/95">
                    bundled in one fare.
                  </span>
                </h1>

                <p className="mt-7 max-w-2xl text-base md:text-lg text-slate-300/90 leading-relaxed tg-hero-enter" style={{ animationDelay: '180ms' }}>
                  Ready-to-book tours across <span className="text-amber-200 font-semibold">Agra, Delhi, Jaipur and the Golden Triangle</span>. Every package pairs a verified vehicle with a Ministry-of-Tourism licensed guide — multilingual, photo-ID verified, with license proof shared at confirmation.
                </p>

                {/* Stat strip — thin hairlines, no boxed pills */}
                <div className="mt-9 grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-6 max-w-2xl tg-hero-enter" style={{ animationDelay: '260ms' }}>
                  <HeroStat label="Bundles from" value="₹3,000" />
                  <HeroStat label="Languages" value="10" />
                  <HeroStat label="Cities" value="3 + GT" />
                  <HeroStat label="Rating" value="4.9 ★" />
                </div>

                {/* CTAs */}
                <div className="mt-9 flex flex-wrap items-center gap-3 tg-hero-enter" style={{ animationDelay: '340ms' }}>
                  <a href={`tel:+91${PHONE}`} className="group relative inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-b from-amber-300 to-yellow-500 px-7 py-4 font-extrabold text-[#1a1408] shadow-[0_18px_40px_-12px_rgba(251,191,36,0.6)] hover:shadow-[0_22px_50px_-12px_rgba(251,191,36,0.75)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a14]">
                    <IconPhone /> Call {PHONE}
                    <IconArrow className="w-4 h-4 opacity-60 group-hover:translate-x-0.5 transition" />
                  </a>
                  <a href={`https://wa.me/91${PHONE}?text=${encodeURIComponent('Hi, I want to book a Tour With Guide. Please help me pick.')}`} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-xl border-2 border-emerald-300/40 bg-emerald-400/5 px-6 py-4 font-extrabold text-emerald-100 hover:bg-emerald-400/15 hover:border-emerald-300/70 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a14]">
                    <IconWhatsApp /> WhatsApp the team
                  </a>
                </div>

                {/* Trust strip */}
                <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-[11px] uppercase tracking-[0.18em] text-slate-400">
                  <TrustChip>Ministry of Tourism · Approved</TrustChip>
                  <TrustChip>Photo ID + license on WhatsApp</TrustChip>
                  <TrustChip>Cancel up to 24 hrs · Full refund</TrustChip>
                </div>

                {/* Mobile hero visual — horizontal scroll strip */}
                <MobileHeroStrip />
              </div>

              {/* RIGHT: floating polaroid stack (desktop) */}
              <div className="lg:col-span-5 relative hidden lg:block">
                <PolaroidStack />
              </div>
            </div>
          </div>

          <ArchDivider />
        </section>

        {/* ============= TRUST MARQUEE ============= */}
        <TrustMarquee />

        {/* ============= ANSWER BOX ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <AnswerBox
            theme="guide"
            title="Quick Answer"
            answer="Tours With Guide bundles a verified vehicle and a Ministry-of-Tourism licensed guide into one fare. Pick a route (Agra, Delhi, Jaipur or Golden Triangle), pick a vehicle (sedan, tempo, mini-bus, Volvo or luxury car), pick a guide language. Bundled fare is fixed at booking."
            stats={[
              { label: 'From', value: '₹3,000' },
              { label: 'Languages', value: 'Multilingual' },
              { label: 'License', value: 'Govt. of India' },
              { label: 'Pickup', value: 'Hotel / Airport' },
            ]}
            lastReviewed="2026-04-29"
            source="Triveni Cabs guide-bundle catalogue"
            className="shadow-[0_30px_80px_-30px_rgba(251,191,36,0.3)]"
          />
        </section>

        {/* ============= DIRECT-ANSWER LEAD ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <AnswerCard question="How much does a tour with a guide and vehicle cost in India?">
            <p className="speakable-lead text-base md:text-lg text-slate-200/95 leading-relaxed">
              A Tours-With-Guide bundle from Triveni Cabs combines a verified AC vehicle and a
              Ministry-of-Tourism licensed guide into one fixed fare, starting at
              <span className="text-amber-200 font-semibold"> ₹3,000</span> for a sedan day tour with an English or
              Hindi guide. You pick the route (Agra, Delhi, Jaipur or the 5-day Golden Triangle), the vehicle by
              group size (sedan to 45-seater Volvo), and the guide language — and the licensed guide is always
              included. The guide&apos;s government licence and photo-ID are shared on WhatsApp before the tour begins,
              with no surprise fees and free cancellation up to 24 hours ahead.
            </p>
          </AnswerCard>
        </section>

        {/* ============= SUB-HUB SHORTCUTS ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="grid md:grid-cols-2 gap-6">
            <SubHubCard
              href="/tours-with-guide/by-guide-language"
              eyebrow="Browse · by language"
              title="Multilingual Guides"
              copy="English, Hindi, French, German, Spanish, Italian, Japanese, Russian, Mandarin, Portuguese."
              chips={Object.values(GUIDE_LANGUAGES).slice(0, 6).map(l => l.name).concat(['+4 more'])}
              accent="amber"
            />
            <SubHubCard
              href="/tours-with-guide/by-vehicle"
              eyebrow="Browse · by vehicle"
              title="Choose Your Vehicle"
              copy="Sedan, MPV, SUV, Tempo, Mini-bus, Volvo coach, BMW / Audi luxury."
              chips={Object.values(TOUR_VEHICLES).slice(0, 5).map(v => v.name)}
              accent="teal"
            />
          </div>
        </section>

        {/* ============= FIND YOUR FIT ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <FindYourFit />
        </section>

        {/* ============= COMPARE CLUSTERS ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <SectionTitle eyebrow="Quick compare" title="The five clusters, at a glance" sub="Tap any row to jump to those tours." />
          <ClusterComparison groupA={groupA} clusters={clusters} />
        </section>

        {/* ============= CLUSTER ANCHORS ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <SectionTitle eyebrow="Browse by destination" title="Pick your route" sub="Five signature clusters, forty hand-built itineraries." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {clusters.map(c => {
              const count = groupA.filter(t => t.cluster === c.id).length;
              return (
                <a key={c.id} href={`#cluster-${c.id}`} className="group relative overflow-hidden rounded-[1.4rem] border border-amber-400/10 bg-slate-900/40 hover:border-amber-400/40 transition shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]">
                  <div className="relative aspect-[4/5] sm:aspect-[16/11]">
                    <Image src={c.img} alt={c.title} fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-[1.06] transition duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-[#0a0a14]/30 to-transparent" />
                    {/* Corner ribbon */}
                    <div className="absolute top-0 right-0">
                      <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-[#1a1408] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-bl-xl shadow-lg">
                        {count} tours
                      </div>
                    </div>
                    {/* Bottom label */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-300/90 mb-1">Cluster</p>
                      <p className="text-2xl md:text-3xl font-black text-white leading-tight">{c.title}</p>
                      <p className="mt-1.5 text-[12px] text-slate-300/90 font-medium">{c.subtitle}</p>
                      <p className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-amber-300 group-hover:text-amber-200 transition">
                        View itineraries <span className="group-hover:translate-x-1 transition">→</span>
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </section>

        {/* ============= CLUSTER LISTINGS ============= */}
        {clusters.map(c => {
          const items = groupA.filter(t => t.cluster === c.id);
          return (
            <section key={c.id} id={`cluster-${c.id}`} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 scroll-mt-24">
              <ClusterHeader c={c} count={items.length} />
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
                {items.map((t, i) => (
                  <TourCard key={t.slug} t={t} featured={i === 0} />
                ))}
              </div>
            </section>
          );
        })}

        {/* ============= ORNAMENT DIVIDER ============= */}
        <ArchDivider />

        {/* ============= MID INLINE CTA ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <InlineCTA
            theme="guide"
            headline="Don't see exactly what you want?"
            sub="Tell us your route, dates and group size — we'll quote a custom guided tour bundle in under 10 minutes."
            context="tours-with-guide-hub-mid"
            waMessage="Hi Triveni Cabs, I want a custom Tour With Guide. Here's what I'm thinking: ..."
            variant="full"
          />
        </section>

        {/* ============= GROUP B (LANGUAGE LANDINGS) ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <SectionTitle eyebrow="Browse · by spoken language" title="Hire a guide by language" sub="Ten official languages. Specialist guides on request for Korean, Arabic, Dutch, Polish, Thai." />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mt-10">
            {groupB.map(t => (
              <Link key={t.slug} href={`/tours-with-guide/${t.slug}`} className="group relative overflow-hidden rounded-2xl border border-amber-400/10 bg-gradient-to-br from-slate-900/80 to-slate-900/40 px-5 py-5 hover:border-amber-300/40 transition">
                <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl bg-amber-400/0 group-hover:bg-amber-400/15 transition" />
                <p className="font-serif italic text-base text-amber-200/80">{t.languageNative || t.guideLanguage}</p>
                <p className="mt-1 text-base font-black text-white">{t.guideLanguage}</p>
                <p className="mt-2 text-[11px] uppercase tracking-widest text-slate-500">From</p>
                <p className="text-sm font-extrabold text-amber-200">₹{t.guideFee.toLocaleString('en-IN')}<span className="text-[11px] text-slate-500 font-bold">/day</span></p>
              </Link>
            ))}
          </div>
        </section>

        {/* ============= GROUP C INDEX ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <SectionTitle eyebrow="Pick a tour, then a language" title="Top tours in your language" sub="Three most-booked itineraries published in every supported language." />
          {['C-taj', 'C-sameday', 'C-gt'].map(cluster => {
            const items = groupC.filter(t => t.cluster === cluster);
            const label = cluster === 'C-taj' ? 'Taj Mahal Tour' : cluster === 'C-sameday' ? 'Same-Day Taj from Delhi' : 'Golden Triangle Tour';
            const banner = cluster === 'C-taj' ? '/images/sightseeing/Agra/Taj_mahal.jpg' : cluster === 'C-sameday' ? '/images/sightseeing/Agra/agra_fort.jpg' : '/images/sightseeing/Golden_Triangle/Golden_triangle_hero_section.jpg';
            return (
              <div key={cluster} className="mt-12">
                <div className="relative overflow-hidden rounded-[1.4rem] border border-amber-400/15 mb-5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)]">
                  <div className="relative aspect-[5/1.2]">
                    <Image src={banner} alt={label} fill sizes="100vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a14] via-[#0a0a14]/60 to-transparent" />
                    <div className="absolute inset-y-0 left-0 right-1/3 flex items-center px-6 md:px-10">
                      <div>
                        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-300/90">Available in 10 languages</p>
                        <p className="mt-1 text-2xl md:text-4xl font-black text-white leading-tight">{label}</p>
                        <p className="mt-1.5 font-serif italic text-amber-200/90 text-sm md:text-base">in your language, by a licensed guide</p>
                      </div>
                    </div>
                    <CornerOrnaments />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {items.map(t => {
                    const img = LANG_C_IMAGES[t.guideLanguage] || t.heroImage;
                    return (
                      <Link key={t.slug} href={`/tours-with-guide/${t.slug}`} className="group block rounded-xl border border-amber-400/10 bg-slate-900/50 overflow-hidden hover:border-amber-300/40 transition">
                        <div className="relative aspect-[16/10]">
                          <Image src={img} alt={`${label} with ${t.guideLanguage} guide`} fill sizes="(max-width: 1024px) 50vw, 20vw" className="object-cover group-hover:scale-105 transition duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                          <div className="absolute bottom-2 left-3 right-3">
                            <p className="font-serif italic text-[12px] text-amber-200/95 leading-tight">{t.languageNative}</p>
                            <p className="text-sm font-black text-white truncate">{t.guideLanguage}</p>
                          </div>
                        </div>
                        <div className="px-3 py-2 flex items-center justify-between">
                          <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Bundle</span>
                          <span className="text-[12px] font-black text-amber-200">₹{t.bundledFare.toLocaleString('en-IN')}</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>

        {/* ============= VEHICLE + LANGUAGE TABLES ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <SectionTitle eyebrow="Plan your bundle" title="Which vehicle and guide language fits you?" sub="Pick a vehicle by group size and a guide by language. Both are bundled into one fixed fare." />
          <div className="grid lg:grid-cols-2 gap-6 mt-10">
            <VehicleBundleTable rows={TWG_VEHICLE_ROWS} />
            <LanguageRateTable rows={TWG_LANGUAGE_ROWS} />
          </div>
        </section>

        {/* ============= FAQ ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <SectionTitle eyebrow="Good to know" title="Tours With Guide — frequently asked questions" sub="Everything about vehicles, licensed guides, languages, pricing and cancellation." />
          <FaqAccordion faqs={TWG_FAQS} />
        </section>

        {/* ============= REASSURANCE BAND ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <ReassuranceBand />
        </section>

        {/* ============= FINAL CTA ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pb-24">
          <InlineCTA
            theme="guide"
            headline="Book a guide-included tour today"
            sub="Vehicle + licensed guide bundle · Multilingual guides · Ministry-licensed · 4.9★ by 10K+ travellers · No surprise fees"
            context="tours-with-guide-hub-final"
            waMessage="Hi Triveni Cabs, I want help picking a Tour With Guide."
            variant="banner"
          />
        </section>
      </main>
    </>
  );
}

// ============================================================
// PRESENTATIONAL COMPONENTS
// ============================================================

function TrustMarquee() {
  const items = [
    'Featured in Lonely Planet',
    'TripAdvisor 4.9 ★',
    '10,000+ travellers served',
    'Ministry of Tourism · Licensed',
    'GST Registered',
    'No surprise fees',
    '24×7 WhatsApp support',
    'Cancel up to 24 hrs',
  ];
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-amber-400/15 bg-gradient-to-r from-[#1a1408]/50 via-slate-950 to-[#1a1408]/50 py-3 mt-12">
      <div className="flex tg-marquee whitespace-nowrap will-change-transform">
        {doubled.map((it, i) => (
          <span key={i} className="inline-flex items-center gap-4 px-6 shrink-0">
            <svg className="w-3 h-3 text-amber-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
              <path d="M12 2l2.5 6.5L21 9l-5 4.5L17.5 21 12 17l-5.5 4L8 13.5 3 9l6.5-.5L12 2z" />
            </svg>
            <span className="text-[11px] uppercase tracking-[0.3em] text-amber-100/90 font-bold">{it}</span>
          </span>
        ))}
      </div>
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0a0a14] to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0a0a14] to-transparent pointer-events-none" />
    </div>
  );
}

function ClusterComparison({ groupA, clusters }) {
  // Derive cheapest fare per cluster from data
  const stats = clusters.map(c => {
    const items = groupA.filter(t => t.cluster === c.id);
    const fares = items.map(t => t.bundledFare).filter(Boolean);
    const from = fares.length ? Math.min(...fares) : null;
    return {
      ...c,
      count: items.length,
      from,
    };
  });
  const tagFor = (id) => ({
    A1: 'Most flexible',
    A2: 'No overnight',
    A3: 'Heritage + temples',
    A4: 'Pink City',
    A5: 'The full classic',
  })[id] || '';
  const daysFor = (id) => ({
    A1: '½-2 days',
    A2: '1 day',
    A3: '1 day',
    A4: '1-2 days',
    A5: '5 days',
  })[id] || '';

  return (
    <div className="mt-8">
      {/* Desktop / tablet */}
      <div className="hidden sm:block overflow-hidden rounded-[1.4rem] border border-amber-400/15 bg-gradient-to-br from-slate-900/60 via-slate-950 to-slate-900/40">
        <table className="w-full text-sm border-collapse">
          <caption className="sr-only">The five guided-tour clusters compared by trip length, number of itineraries and starting bundle fare</caption>
          <thead>
            <tr className="border-b border-amber-400/25 bg-amber-400/[0.04]">
              <th scope="col" className="text-left text-[10px] uppercase tracking-[0.2em] text-amber-300 font-bold p-4 md:p-5"><span className="inline-flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" /> Cluster</span></th>
              <th scope="col" className="text-left text-[10px] uppercase tracking-[0.2em] text-amber-300 font-bold p-4 md:p-5"><span className="inline-flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> Days</span></th>
              <th scope="col" className="text-left text-[10px] uppercase tracking-[0.2em] text-amber-300 font-bold p-4 md:p-5">Tours</th>
              <th scope="col" className="text-left text-[10px] uppercase tracking-[0.2em] text-amber-300 font-bold p-4 md:p-5"><span className="inline-flex items-center gap-1.5"><IndianRupee className="w-3.5 h-3.5" /> From</span></th>
              <th scope="col" className="text-left text-[10px] uppercase tracking-[0.2em] text-amber-300 font-bold p-4 md:p-5 hidden md:table-cell">Best for</th>
              <th className="p-4 md:p-5"></th>
            </tr>
          </thead>
          <tbody>
            {stats.map((c, i) => (
              <tr key={c.id} className={`group transition border-b border-amber-400/10 last:border-0 ${i % 2 === 1 ? 'bg-white/[0.015] hover:bg-amber-400/[0.05]' : 'hover:bg-amber-400/[0.05]'}`}>
                <th scope="row" className="p-4 md:p-5 font-normal">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-lg overflow-hidden ring-1 ring-amber-400/20 shrink-0">
                      <Image src={c.img} alt="" fill sizes="40px" className="object-cover" />
                    </div>
                    <div>
                      <p className="font-black text-white leading-tight">{c.title}</p>
                      <p className="text-[10px] text-slate-400">{c.subtitle}</p>
                    </div>
                  </div>
                </th>
                <td className="p-4 md:p-5 font-bold text-amber-100">{daysFor(c.id)}</td>
                <td className="p-4 md:p-5 text-amber-200 font-extrabold">{c.count}</td>
                <td className="p-4 md:p-5 font-extrabold text-amber-200">{c.from ? `₹${c.from.toLocaleString('en-IN')}` : '—'}</td>
                <td className="p-4 md:p-5 hidden md:table-cell">
                  <span className="inline-flex items-center rounded-full bg-emerald-400/10 border border-emerald-300/25 text-emerald-100 text-[11px] font-semibold px-3 py-1">
                    {tagFor(c.id)}
                  </span>
                </td>
                <td className="p-4 md:p-5 text-right">
                  <a href={`#cluster-${c.id}`} className="inline-flex items-center gap-1 text-xs font-extrabold text-amber-200 group-hover:text-amber-100 transition">
                    View
                    <span className="group-hover:translate-x-1 transition">→</span>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mobile stacked cards */}
      <div className="sm:hidden space-y-3">
        {stats.map((c) => (
          <a key={c.id} href={`#cluster-${c.id}`} className="block rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden ring-1 ring-amber-400/20 shrink-0">
                <Image src={c.img} alt="" fill sizes="48px" className="object-cover" />
              </div>
              <div className="min-w-0">
                <p className="font-black text-white leading-tight">{c.title}</p>
                <p className="text-[11px] text-slate-400">{c.subtitle}</p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs">
              <span className="inline-flex items-center gap-1.5 text-amber-100"><Clock className="w-3.5 h-3.5 text-amber-300" /> {daysFor(c.id)}</span>
              <span className="inline-flex items-center gap-1.5 text-amber-200 font-bold">{c.count} tours</span>
              <span className="inline-flex items-center gap-1.5 text-amber-200 font-extrabold"><IndianRupee className="w-3.5 h-3.5" /> {c.from ? `${c.from.toLocaleString('en-IN')}` : '—'}</span>
            </div>
            <div className="mt-3 flex items-center justify-between">
              <span className="inline-flex items-center rounded-full bg-emerald-400/10 border border-emerald-300/25 text-emerald-100 text-[11px] font-semibold px-3 py-1">{tagFor(c.id)}</span>
              <span className="inline-flex items-center gap-1 text-xs font-extrabold text-amber-200">View →</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

function ReassuranceBand() {
  const items = [
    { title: 'GST registered',    sub: 'Compliant invoice',    path: <path strokeLinecap="round" strokeLinejoin="round" d="M3.85 8.62a4 4 0 014.78-4.78 4 4 0 016.74 0 4 4 0 014.78 4.78 4 4 0 010 6.74 4 4 0 01-4.78 4.78 4 4 0 01-6.74 0 4 4 0 01-4.78-4.78 4 4 0 010-6.74zM9 12l2 2 4-4" /> },
    { title: '24-hour cancel',    sub: 'Full refund window',   path: <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" /> },
    { title: 'License proof',     sub: 'Shared on WhatsApp',   path: <path strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M9 15l2 2 4-4" /> },
    { title: '4-min reply SLA',   sub: 'Avg. response time',   path: <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /> },
  ];
  return (
    <div className="relative overflow-hidden rounded-[1.6rem] border border-amber-400/15 bg-gradient-to-br from-[#1a1408]/60 via-slate-950 to-slate-900/40 p-6 sm:p-8">
      <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-amber-400/[0.08] blur-3xl" />
      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-300/80 text-center mb-5">Why book Triveni</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
        {items.map((it, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-400/5 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>{it.path}</svg>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-black text-amber-100 leading-tight">{it.title}</p>
              <p className="text-[11px] text-slate-400 mt-0.5">{it.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IconPhone({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z" />
    </svg>
  );
}
function IconWhatsApp({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.5 14.4c-.3-.2-1.8-.9-2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a8 8 0 01-2.4-1.5 8.8 8.8 0 01-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.5.3-.4.1-.4-.1-.4-.7-1.6c-.2-.4-.4-.3-.5-.3H7.9a1 1 0 00-.7.3 3 3 0 00-1 2.3c0 1.3 1 2.6 1.1 2.8s2 3 4.7 4.2l1.6.6 1.5.1c.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2zM12 2a10 10 0 00-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2z" />
    </svg>
  );
}
function IconArrow({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
    </svg>
  );
}

function HeroStat({ label, value }) {
  return (
    <div className="border-l border-amber-400/25 pl-4">
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">{label}</p>
      <p className="mt-1 font-black text-2xl md:text-3xl bg-gradient-to-b from-amber-100 to-amber-400 bg-clip-text text-transparent leading-none">{value}</p>
    </div>
  );
}

function TrustChip({ children }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span className="w-1 h-1 rounded-full bg-amber-300/80" />
      <span className="text-slate-400 font-semibold">{children}</span>
    </span>
  );
}

function MinistryCrest() {
  return (
    <div className="inline-flex items-stretch rounded-full border border-amber-300/35 bg-gradient-to-r from-amber-500/[0.12] via-amber-400/[0.06] to-transparent overflow-hidden">
      <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-amber-300 to-yellow-500 text-[#1a1408]">
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
          <path d="M12 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L12 14.77 6.8 17.5l.99-5.78L3.58 7.62l5.82-.85L12 1.5z" />
        </svg>
      </div>
      <div className="px-4 py-1.5 flex items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.25em] text-amber-200/70 font-bold">Issued by</span>
        <span className="text-xs font-extrabold text-amber-100">Ministry of Tourism · Govt. of India</span>
      </div>
    </div>
  );
}

function DotsTexture() {
  return (
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: 'radial-gradient(rgba(251,191,36,0.9) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
      }}
    />
  );
}

const HERO_TILES = [
  { src: '/images/sightseeing/Agra/Taj_mahal.jpg', label: 'Taj Mahal', meta: 'Agra · UNESCO' },
  { src: '/images/sightseeing/Jaipur/amber_fort.jpg', label: 'Amber Fort', meta: 'Jaipur · 16th c.' },
  { src: '/images/sightseeing/Delhi/red_fort.jpg', label: 'Red Fort', meta: 'Delhi · UNESCO' },
  { src: '/images/sightseeing/Golden_Triangle/Golden_triangle_hero_section.jpg', label: 'Golden Triangle', meta: '5-day classic' },
];

function PolaroidStack() {
  // Percentage positioning so it scales gracefully at lg=1024 → xl=1280.
  const positions = [
    { t: '0',   l: '0',   rot: '-6deg' },
    { t: '4%',  l: '38%', rot: '4deg' },
    { t: '44%', l: '6%',  rot: '-3deg' },
    { t: '50%', l: '42%', rot: '5deg' },
  ];
  return (
    <div className="relative h-[520px] w-full">
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/20 via-transparent to-emerald-500/10 blur-3xl rounded-full" />
      {HERO_TILES.map((tile, i) => {
        const p = positions[i];
        return (
          <div
            key={i}
            className="absolute w-[54%] max-w-[230px] rounded-xl bg-[#fef9e7] p-2 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.7)] ring-1 ring-black/10 hover:scale-[1.04] hover:rotate-0 transition duration-500"
            style={{ top: p.t, left: p.l, transform: `rotate(${p.rot})` }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-slate-900">
              <Image src={tile.src} alt={tile.label} fill sizes="(max-width: 1280px) 25vw, 230px" className="object-cover" />
            </div>
            <div className="px-1 pt-2 pb-1">
              <p className="font-serif italic text-[13px] text-[#3a2a08] leading-tight">{tile.label}</p>
              <p className="text-[10px] uppercase tracking-widest text-[#7a6428]/80 font-bold">{tile.meta}</p>
            </div>
          </div>
        );
      })}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 rotate-[-2deg] px-5 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-[#1a1408] text-[10px] uppercase tracking-[0.3em] font-black shadow-xl">
        Bestselling itineraries
      </div>
    </div>
  );
}

function MobileHeroStrip() {
  return (
    <div className="lg:hidden mt-10 -mx-4 sm:-mx-6">
      <div className="flex gap-3 overflow-x-auto px-4 sm:px-6 pb-3 snap-x snap-mandatory scrollbar-thin scrollbar-track-transparent">
        {HERO_TILES.map((tile, i) => (
          <div
            key={i}
            className="snap-start shrink-0 w-[68%] sm:w-[48%] aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-amber-400/25 relative shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)]"
          >
            <Image src={tile.src} alt={tile.label} fill sizes="70vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14]/85 via-[#0a0a14]/20 to-transparent" />
            <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 backdrop-blur-md border border-amber-300/30 px-2.5 py-1 text-[9px] uppercase tracking-[0.2em] text-amber-200 font-bold">
              {i === 0 ? '★ Bestseller' : 'Featured'}
            </div>
            <div className="absolute bottom-3 left-3 right-3">
              <p className="font-serif italic text-amber-200/90 text-xs">{tile.meta}</p>
              <p className="text-white font-black text-base leading-tight">{tile.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ArchDivider() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10" aria-hidden>
      <div className="flex items-center justify-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/30 to-amber-400/30" />
        <svg viewBox="0 0 80 32" className="w-20 h-8 text-amber-400/60" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
          <path d="M2 30 Q 2 4 40 4 Q 78 4 78 30" />
          <path d="M10 30 Q 10 12 40 12 Q 70 12 70 30" />
          <circle cx="40" cy="6" r="1.6" fill="currentColor" />
        </svg>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-amber-400/30 to-amber-400/30" />
      </div>
    </div>
  );
}

function CornerOrnaments() {
  return (
    <>
      <svg className="absolute top-2 left-2 w-8 h-8 text-amber-300/40" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden>
        <path d="M2 14 V 2 H 14" />
        <path d="M2 8 H 8 V 2" />
      </svg>
      <svg className="absolute bottom-2 right-2 w-8 h-8 text-amber-300/40" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden>
        <path d="M30 18 V 30 H 18" />
        <path d="M30 24 H 24 V 30" />
      </svg>
    </>
  );
}

function SubHubCard({ href, eyebrow, title, copy, chips, accent }) {
  const accents = {
    amber: 'border-amber-400/25 from-amber-500/10 via-slate-900/40 to-slate-950 hover:border-amber-400/60 text-amber-200/80 bg-amber-400/10 border-amber-400/30 text-amber-200',
    teal:  'border-teal-300/25 from-teal-500/10 via-slate-900/40 to-slate-950 hover:border-teal-300/60 text-teal-200/80 bg-teal-400/10 border-teal-400/30 text-teal-100',
  };
  // String split for chip styles
  const isTeal = accent === 'teal';
  return (
    <Link href={href} className={`group relative overflow-hidden rounded-[1.4rem] border bg-gradient-to-br p-8 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a14] ${isTeal ? 'border-teal-300/25 from-teal-500/10 via-slate-900/40 to-slate-950 hover:border-teal-300/60 focus-visible:ring-teal-300' : 'border-amber-400/25 from-amber-500/10 via-slate-900/40 to-slate-950 hover:border-amber-400/60 focus-visible:ring-amber-300'}`}>
      <div className={`absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl ${isTeal ? 'bg-teal-400/15' : 'bg-amber-400/15'}`} />
      <p className={`text-[10px] font-bold tracking-[0.3em] uppercase ${isTeal ? 'text-teal-200/80' : 'text-amber-200/80'}`}>{eyebrow}</p>
      <p className="mt-3 text-2xl md:text-3xl font-black text-white leading-tight">
        {title}
        <span className={`ml-2 inline-block transition group-hover:translate-x-1 ${isTeal ? 'text-teal-200' : 'text-amber-300'}`}>→</span>
      </p>
      <p className="mt-3 text-sm text-slate-300/90 max-w-md leading-relaxed">{copy}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {chips.map((c, i) => (
          <span key={i} className={`inline-flex rounded-full text-[11px] px-3 py-1 font-semibold border ${isTeal ? 'bg-teal-400/10 border-teal-400/30 text-teal-100' : 'bg-amber-400/10 border-amber-400/30 text-amber-100'}`}>
            {c}
          </span>
        ))}
      </div>
    </Link>
  );
}

function ClusterHeader({ c, count }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
      <div>
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-300/80">{c.subtitle}</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-black tracking-tight">
          <span className="bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
            {c.title}
          </span>
        </h2>
      </div>
      <div className="inline-flex items-center gap-3 text-xs text-slate-400">
        <span className="px-3 py-1 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-200 font-bold">{count} tours</span>
        <span>·</span>
        <span>Bundled fare. Licensed guide. No surprises.</span>
      </div>
    </div>
  );
}

function TourCard({ t, featured }) {
  return (
    <Link href={`/tours-with-guide/${t.slug}`} className={`group relative block rounded-2xl border bg-slate-900/40 overflow-hidden transition shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_-15px_rgba(251,191,36,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a14] ${featured ? 'border-amber-400/30 hover:border-amber-400/60' : 'border-amber-400/10 hover:border-amber-400/40'}`}>
      {featured && (
        <div className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-[#1a1408] text-[9px] font-black uppercase tracking-[0.2em] px-2.5 py-1 shadow-lg">
          ★ Bestseller
        </div>
      )}
      <div className="relative aspect-[16/10]">
        <Image src={t.heroImage} alt={t.headline} fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-[1.07] transition duration-700" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-[#0a0a14]/30 to-transparent" />
        <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-black/50 backdrop-blur-md border border-white/15 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 text-amber-200">
          {t.vehicleCategory}
        </div>
        <div className="absolute bottom-3 left-4 right-4">
          <p className="text-[10px] text-amber-300/90 font-bold uppercase tracking-[0.2em]">{t.city}</p>
          <p className="text-base md:text-lg font-black text-white truncate leading-tight mt-0.5">{t.headline}</p>
        </div>
      </div>
      <div className="px-4 py-3.5 flex items-center justify-between border-t border-amber-400/10">
        <div>
          <p className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">Bundled fare</p>
          <p className="text-base font-black text-amber-200">₹{t.bundledFare.toLocaleString('en-IN')}</p>
        </div>
        <div className="text-right">
          <p className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">{t.duration}</p>
          <p className="text-[11px] text-slate-300">{t.vehicleSeats} seats</p>
        </div>
        <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-amber-400/15 text-amber-200 group-hover:bg-amber-400 group-hover:text-[#1a1408] transition font-extrabold">→</span>
      </div>
    </Link>
  );
}

function SectionTitle({ eyebrow, title, sub }) {
  return (
    <div className="max-w-3xl">
      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-300/80">{eyebrow}</p>
      <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight leading-[1.02]">
        <span className="bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {sub && (
        <p className="mt-3 font-serif italic text-slate-400 text-base md:text-lg leading-relaxed">
          {sub}
        </p>
      )}
    </div>
  );
}

// Elegant featured-answer card with a gold left border + arch accent.
function AnswerCard({ question, children }) {
  return (
    <div className="relative overflow-hidden rounded-[1.4rem] border border-amber-400/20 bg-gradient-to-br from-[#1a1408]/55 via-slate-950 to-slate-900/40 p-7 md:p-9 pl-8 md:pl-11 shadow-[0_30px_80px_-30px_rgba(251,191,36,0.25)]">
      <span aria-hidden className="absolute inset-y-5 left-0 w-1 rounded-full bg-gradient-to-b from-amber-300 via-yellow-500 to-amber-300" />
      <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-amber-400/[0.08] blur-3xl" aria-hidden />
      <p className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-amber-300/80 mb-3">
        <span className="w-6 h-6 rounded-full bg-amber-400/15 border border-amber-400/35 flex items-center justify-center">
          <Sparkles className="w-3 h-3 text-amber-300" />
        </span>
        Direct answer
      </p>
      <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white max-w-3xl">{question}</h2>
      <div className="mt-4 max-w-3xl">{children}</div>
    </div>
  );
}

// Dark-glass FAQ accordions with smooth chevron rotation and gold accent on open.
function FaqAccordion({ faqs }) {
  return (
    <div className="mt-10 grid md:grid-cols-2 gap-4">
      {faqs.map((f, i) => (
        <details key={i} className="group rounded-2xl border border-amber-400/12 bg-slate-900/40 open:border-amber-300/40 open:bg-slate-900/60 hover:border-amber-300/30 transition">
          <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 min-h-[44px] focus-visible:outline-none focus-visible:bg-amber-400/5 rounded-2xl">
            <span className="text-base md:text-lg font-black text-amber-100 leading-snug">{f.question}</span>
            <span aria-hidden className="shrink-0 w-8 h-8 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 flex items-center justify-center group-open:rotate-180 group-open:bg-amber-400/20 transition-transform duration-300">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" /></svg>
            </span>
          </summary>
          <p className={`px-6 pb-6 text-sm text-slate-300/90 leading-relaxed ${i === 0 ? 'speakable-faq-first' : ''}`}>{f.answer}</p>
        </details>
      ))}
    </div>
  );
}

// Vehicle bundle table — desktop gold-trimmed (alt-row tint, Innova 7-seat highlit);
// mobile glass cards. Icons in header cells aid scannability.
function VehicleBundleTable({ rows }) {
  const isPopular = (r) => r.seats === '7';
  return (
    <div>
      {/* Desktop / tablet */}
      <div className="hidden sm:block overflow-hidden rounded-[1.4rem] border border-amber-400/15 bg-gradient-to-br from-slate-900/60 via-slate-950 to-slate-900/40">
        <div className="px-5 pt-5 pb-2">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-amber-300/80">Vehicle options</p>
        </div>
        <table className="w-full text-left border-collapse text-sm">
          <caption className="sr-only">Guided-tour vehicle options compared by seating capacity, starting bundle fare and best use case</caption>
          <thead>
            <tr className="text-[10px] uppercase tracking-[0.18em] text-amber-300 font-bold border-b border-amber-400/25 bg-amber-400/[0.04]">
              <th scope="col" className="px-4 py-4"><span className="inline-flex items-center gap-1.5"><Car className="w-3.5 h-3.5" /> Vehicle</span></th>
              <th scope="col" className="px-4 py-4"><span className="inline-flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> Seats</span></th>
              <th scope="col" className="px-4 py-4"><span className="inline-flex items-center gap-1.5"><IndianRupee className="w-3.5 h-3.5" /> Bundle from</span></th>
              <th scope="col" className="px-4 py-4">Best for</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.feature} className={`border-b border-amber-400/10 last:border-0 transition ${isPopular(r) ? 'bg-amber-400/[0.08]' : i % 2 === 1 ? 'bg-white/[0.015] hover:bg-amber-400/[0.05]' : 'hover:bg-amber-400/[0.05]'}`}>
                <th scope="row" className="px-4 py-4 font-black text-white">
                  <span className="flex items-center gap-2">
                    {r.feature}
                    {isPopular(r) && <span className="inline-flex items-center rounded-full bg-emerald-400/15 border border-emerald-300/40 text-emerald-200 text-[9px] uppercase tracking-widest font-black px-2 py-0.5">Popular</span>}
                  </span>
                </th>
                <td className="px-4 py-4 font-extrabold text-amber-200">{r.seats}</td>
                <td className="px-4 py-4 font-extrabold text-amber-200">{r.from}</td>
                <td className="px-4 py-4 text-slate-300/90">{r.bestFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mobile glass cards */}
      <div className="sm:hidden space-y-3">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-amber-300/80">Vehicle options</p>
        {rows.map((r) => (
          <div key={r.feature} className={`rounded-2xl border bg-white/5 backdrop-blur-xl p-5 ${isPopular(r) ? 'border-emerald-300/40 bg-emerald-400/[0.06]' : 'border-white/10'}`}>
            <div className="flex items-start justify-between gap-3">
              <p className="font-black text-white flex items-center gap-2 flex-wrap"><Car className="w-4 h-4 text-amber-300 shrink-0" />{r.feature}{isPopular(r) && <span className="inline-flex items-center rounded-full bg-emerald-400/15 border border-emerald-300/40 text-emerald-200 text-[8px] uppercase tracking-widest font-black px-1.5 py-0.5">Popular</span>}</p>
              <p className="font-black text-amber-200 shrink-0">{r.from}</p>
            </div>
            <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-amber-100/90"><Users className="w-3.5 h-3.5 text-amber-300" /> {r.seats} pax</p>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">{r.bestFor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Guide-language day-rate table — desktop gold-trimmed (alt-row tint); mobile glass cards.
function LanguageRateTable({ rows }) {
  return (
    <div>
      {/* Desktop / tablet */}
      <div className="hidden sm:block overflow-hidden rounded-[1.4rem] border border-amber-400/15 bg-gradient-to-br from-slate-900/60 via-slate-950 to-slate-900/40">
        <div className="px-5 pt-5 pb-2">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-amber-300/80">Guide languages &amp; day rates</p>
        </div>
        <table className="w-full text-left border-collapse text-sm">
          <caption className="sr-only">Guide languages compared by day rate and best traveller use case</caption>
          <thead>
            <tr className="text-[10px] uppercase tracking-[0.18em] text-amber-300 font-bold border-b border-amber-400/25 bg-amber-400/[0.04]">
              <th scope="col" className="px-4 py-4"><span className="inline-flex items-center gap-1.5"><Globe className="w-3.5 h-3.5" /> Language</span></th>
              <th scope="col" className="px-4 py-4"><span className="inline-flex items-center gap-1.5"><IndianRupee className="w-3.5 h-3.5" /> Day rate</span></th>
              <th scope="col" className="px-4 py-4">Best for</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.feature} className={`border-b border-amber-400/10 last:border-0 transition ${i % 2 === 1 ? 'bg-white/[0.015] hover:bg-amber-400/[0.05]' : 'hover:bg-amber-400/[0.05]'}`}>
                <th scope="row" className="px-4 py-4 font-black text-white">{r.feature}</th>
                <td className="px-4 py-4 font-extrabold text-amber-200">{r.day}</td>
                <td className="px-4 py-4 text-slate-300/90">{r.bestFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mobile glass cards */}
      <div className="sm:hidden space-y-3">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-amber-300/80">Guide languages &amp; day rates</p>
        {rows.map((r) => (
          <div key={r.feature} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5">
            <div className="flex items-start justify-between gap-3">
              <p className="font-black text-white flex items-center gap-2"><Globe className="w-4 h-4 text-amber-300 shrink-0" />{r.feature}</p>
              <p className="font-black text-amber-200 shrink-0">{r.day}</p>
            </div>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">{r.bestFor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
