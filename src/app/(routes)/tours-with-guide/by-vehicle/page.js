// src/app/(routes)/tours-with-guide/by-vehicle/page.js
// H3 — Sub-hub: vehicle-grouping landing.

import Link from 'next/link';
import Image from 'next/image';
import {
  getToursByGroup,
  getToursByVehicle,
  TOUR_VEHICLES,
} from '@/utilis/toursWithGuideData';
import AnswerBox from '@/components/seo/AnswerBox';
import InlineCTA from '@/components/seo/InlineCTA';
import { Car, Users, IndianRupee, Sparkles } from '@/components/ui/icons';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import {
  getSpeakableSchema,
  getArticleSchema,
  getHowToSchema,
  getComparisonSchema,
  getTodayDate,
} from '@/lib/seo/speakable-helpers';

export const revalidate = 3600;

const VEHICLE_FEE_ROWS = [
  { name: 'Swift Dzire (Sedan)', seats: '4', from: '₹3,000', bestFor: 'Couples, solo travellers, city day tours' },
  { name: 'Ertiga (MPV)', seats: '6', from: '₹3,500', bestFor: 'Small families with luggage' },
  { name: 'Innova Crysta (SUV)', seats: '7', from: '₹4,200', bestFor: 'Families, Golden Triangle comfort' },
  { name: 'Force Urbania', seats: '12', from: '₹6,500', bestFor: 'Friend groups, extended families' },
  { name: 'Maharaja Tempo Traveller', seats: '17', from: '₹8,500', bestFor: 'Large groups, multi-day circuits' },
  { name: '20-seater Mini-bus', seats: '20', from: 'On request', bestFor: 'Mid-size tour & pilgrimage groups' },
  { name: 'Volvo Coach', seats: '45', from: 'On request', bestFor: 'Corporate, school & large pilgrimage groups' },
  { name: 'BMW / Audi (Luxury)', seats: '4', from: 'On request', bestFor: 'VIP guests, premium heritage tours' },
];

const VEHICLE_FAQS = [
  { question: 'Which vehicle should I choose for a guided tour?', answer: 'Match the vehicle to your group size: a 4-seater Swift Dzire for couples, a 6-seater Ertiga or 7-seater Innova Crysta for families, a 12-seater Force Urbania or 17-seater Maharaja Tempo for groups, and a 45-seater Volvo coach for large parties. Every vehicle is air-conditioned and the licensed guide is bundled in.' },
  { question: 'Is a guide always included with the vehicle?', answer: 'Yes. Every Tours-With-Guide vehicle bundle includes a Ministry-of-Tourism licensed guide. You pick the vehicle by group size and the guide language; both arrive together at one fixed fare.' },
  { question: 'How much does a tour vehicle cost?', answer: 'Sedan bundles start at ₹3,000, MPVs from ₹3,500, Innova SUVs from ₹4,200, Force Urbania from ₹6,500 and Maharaja Tempo Travellers from ₹8,500. Mini-bus, Volvo coach and luxury BMW/Audi tours are quoted on request based on route and days.' },
  { question: 'Are all the tour vehicles air-conditioned?', answer: 'Yes — every vehicle in our tour fleet is fully air-conditioned, from the Swift Dzire sedan up to the 45-seater Volvo coach, with verified, experienced drivers.' },
  { question: 'What vehicle is best for the Golden Triangle?', answer: 'For a comfortable 5-day Delhi–Agra–Jaipur Golden Triangle tour, the 7-seater Innova Crysta is the most popular choice for families, while groups prefer the 17-seater Maharaja Tempo Traveller. The same vehicle and driver stay with you throughout the circuit.' },
  { question: 'Can I get a luxury car with a guide?', answer: 'Yes — chauffeured BMW and Audi luxury sedans are available for VIP guests and premium heritage tours, bundled with an English or foreign-language licensed guide. Pricing is quoted on request.' },
  { question: 'How many bags fit in each vehicle?', answer: 'A sedan holds 2–3 bags, an MPV/SUV 4–5 bags, the Force Urbania and tempo traveller carry luggage for the full group, and coaches have dedicated luggage holds. Tell us your luggage at booking and we recommend the right vehicle.' },
  { question: 'How do I book a vehicle + guide tour?', answer: 'Pick a vehicle on this page or use the Find Your Fit tool, then call +91 7668570551 or message on WhatsApp. We confirm vehicle and guide availability, share the guide’s licence, and lock the bundled fare within minutes.' },
];

const baseUrl = 'https://www.trivenicabs.in';
const url = `${baseUrl}/tours-with-guide/by-vehicle`;
const PHONE = '7668570551';

export const metadata = {
  title: 'Tour With Guide — Pick by Vehicle | Sedan, Tempo, Bus, Luxury Car',
  description: 'Group tours with guide by vehicle: Swift Dzire sedan, Maharaja Tempo Traveller, Volvo 45-seater bus, Force Urbania, BMW/Audi luxury.',
  keywords: 'by vehicle, tour package india, sightseeing tour, triveni cabs',
  alternates: { canonical: url },
  openGraph: {
    title: 'Tours With Guide by Vehicle Class — Sedan, Tempo, Volvo Bus, Luxury Car',
    description: 'Pick your tour vehicle: 4-seater Swift Dzire, 6-seater Ertiga, 7-seater Innova, 12-seater Force Urbania, 17-seater Maharaja Tempo, 20-seater mini-bus, 45-seater Volvo, BMW/Audi.',
    url,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Triveni Cabs',
    images: [{ url: `${baseUrl}/images/tempo/17_seater.jpg`, width: 1200, height: 630, alt: 'Tour Vehicles — Triveni Cabs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tours With Guide by Vehicle — Sedan to 45-seater Volvo',
    description: 'Pick your tour vehicle and a Ministry-licensed guide is included in the bundle.',
    images: [`${baseUrl}/images/tempo/17_seater.jpg`],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function ByVehicleHub() {
  const groupA = getToursByGroup('A');

  // Build per-vehicle counts
  const vehicleEntries = Object.entries(TOUR_VEHICLES).map(([slug, v]) => ({
    slug,
    ...v,
    tours: getToursByVehicle(slug),
  })).filter(v => v.tours.length > 0);

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: 'Tours With Guide — by Vehicle Class',
        description: 'Tours-with-guide bundles grouped by vehicle: sedan, MPV, SUV, tempo, mini-bus, Volvo coach, luxury car.',
        inLanguage: 'en-IN',
        breadcrumb: { '@id': `${url}#breadcrumb` },
        speakable: getSpeakableSchema(['.speakable-lead', '.speakable-faq-first']),
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: 'Tours With Guide by Vehicle — Sedan to Volvo Coach',
        serviceType: 'Guided Tour Package',
        description: 'Guided tour bundles by vehicle class — sedan, MPV, SUV, tempo traveller, mini-bus, Volvo coach and luxury car — each including a Ministry-licensed guide.',
        provider: { '@id': `${baseUrl}/#organization` },
        brand: { '@type': 'Brand', name: 'Triveni Cabs' },
        areaServed: ['Delhi', 'Agra', 'Jaipur', 'India'],
        url,
        offers: { '@type': 'Offer', priceCurrency: 'INR', price: '3000' },
        ...getRatingAndReviews('tours-by-vehicle', 'sightseeing'),
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        speakable: getSpeakableSchema(['.speakable-faq-first']),
        mainEntity: VEHICLE_FAQS.map(f => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
      getArticleSchema({
        slug: 'tours-with-guide/by-vehicle',
        headline: 'Tours With Guide by Vehicle — Sedan, Tempo, Volvo & Luxury',
        description: 'Pick a guided-tour vehicle by group size — sedan, MPV, SUV, Force Urbania, Maharaja Tempo, Volvo coach or luxury BMW/Audi — with seats, starting fare and best use case.',
        image: `${baseUrl}/images/tempo/17_seater.jpg`,
        datePublished: '2026-01-01',
        dateModified: getTodayDate(),
        authorName: 'editorial',
        speakableSelectors: ['.speakable-lead', '.speakable-faq-first'],
      }),
      getHowToSchema({
        name: 'How to Choose a Vehicle for a Guided Tour in India',
        description: 'Pick the right tour vehicle by group size, luggage and route, with a Ministry-licensed guide bundled into the same fare.',
        totalTime: 'PT5M',
        estimatedCost: { currency: 'INR', value: '3000' },
        steps: [
          { name: 'Count your travellers', text: 'Sedan seats 4, Ertiga 6, Innova Crysta 7, Force Urbania 12, Maharaja Tempo 17, mini-bus 20 and Volvo coach 45. Always size up if you are at the limit.' },
          { name: 'Add your luggage', text: 'A sedan holds 2-3 bags and an MPV or SUV 4-5. Tempo travellers and coaches carry luggage for the full group, so tell us your bag count at booking.' },
          { name: 'Match the route length', text: 'City day tours run comfortably in a sedan; multi-day Golden Triangle circuits are easier in an Innova Crysta or Maharaja Tempo where the same vehicle and driver stay with you throughout.' },
          { name: 'Pick the guide language', text: 'The Ministry-of-Tourism licensed guide is included in every vehicle bundle — choose English, Hindi, French, German, Spanish and more at booking.' },
          { name: 'Confirm the bundled fare', text: 'Call +91 7668570551 or WhatsApp us; we confirm vehicle and guide availability and lock the fare with no surprise charges.' },
        ],
      }),
      ...getComparisonSchema({
        slug: 'tours-with-guide/by-vehicle',
        title: 'Guided Tour Vehicles Compared by Seats, Fare and Best Use',
        description: 'Compare guided-tour vehicle classes — Swift Dzire sedan, Ertiga MPV, Innova Crysta SUV, Force Urbania, Maharaja Tempo Traveller, 20-seater mini-bus, 45-seater Volvo coach and BMW/Audi luxury — by seating capacity, starting bundled fare and ideal traveller group.',
        rows: VEHICLE_FEE_ROWS,
        mentions: ['Swift Dzire', 'Innova Crysta', 'Force Urbania', 'Maharaja Tempo Traveller', 'Volvo coach', 'Golden Triangle', 'licensed tour guide'],
      }).map(node => ({ ...node, '@context': undefined })),
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Tours With Guide', item: `${baseUrl}/tours-with-guide` },
          { '@type': 'ListItem', position: 3, name: 'By Vehicle', item: url },
        ],
      },
      {
        '@type': 'ItemList',
        numberOfItems: groupA.length,
        itemListElement: groupA.map((t, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `${baseUrl}/tours-with-guide/${t.slug}`,
          name: t.headline,
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
      <main className="min-h-screen bg-[#0a0a14] text-slate-100 selection:bg-amber-300/30 selection:text-amber-100">
        {/* ============= HERO ============= */}
        <section className="relative isolate overflow-hidden border-b border-amber-400/10">
          <div className="absolute inset-0 -z-10">
            <Image src="/images/tempo/17_seater.jpg" alt="" fill priority sizes="100vw" className="object-cover opacity-25" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.08),transparent_55%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14]/60 via-[#0a0a14]/85 to-[#0a0a14]" />
            <DotsTexture />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-28 pb-16">
            <nav className="flex flex-wrap items-center gap-2 text-[11px] text-amber-200/60 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-amber-300 transition">Home</Link>
              <span className="text-amber-300/40">/</span>
              <Link href="/tours-with-guide" className="hover:text-amber-300 transition">Tours With Guide</Link>
              <span className="text-amber-300/40">/</span>
              <span className="text-white/90">By Vehicle</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-stretch rounded-full border border-amber-300/35 bg-gradient-to-r from-amber-500/[0.12] via-amber-400/[0.06] to-transparent overflow-hidden">
                  <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-amber-300 to-yellow-500 text-[#1a1408]">
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
                      <path d="M5 11l1.5-4.5A2 2 0 018.4 5h7.2a2 2 0 011.9 1.5L19 11h.5a1.5 1.5 0 011.5 1.5V17h-2v2a1 1 0 01-2 0v-2H7v2a1 1 0 01-2 0v-2H3v-4.5A1.5 1.5 0 014.5 11H5zm2 0h10l-1-3H8l-1 3zm0 4a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z" />
                    </svg>
                  </div>
                  <div className="px-4 py-1.5 flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-amber-200/70 font-bold">From sedan to</span>
                    <span className="text-xs font-extrabold text-amber-100">45-seater Volvo coach</span>
                  </div>
                </div>

                <h1 className="mt-7 font-black leading-[0.95] tracking-tight">
                  <span className="block text-[2.2rem] sm:text-[2.75rem] md:text-[3.5rem] bg-gradient-to-r from-amber-100 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                    Pick the right vehicle.
                  </span>
                  <span className="block mt-2 font-serif italic font-medium text-[2rem] md:text-[3.25rem] tracking-tight text-white/95">
                    Guide is always bundled.
                  </span>
                </h1>
                <p className="mt-7 max-w-2xl text-base md:text-lg text-slate-300/95 leading-relaxed">
                  From a private 4-seater Swift Dzire to a 45-seater Volvo coach to a chauffeured <span className="text-amber-200 font-semibold">BMW or Audi</span> — every Triveni tour bundle includes a Ministry-licensed guide. Match the vehicle to your group size; we match the guide to your language.
                </p>

                <div className="mt-9 grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-6 max-w-2xl">
                  <HeroStat label="Smallest" value="4 pax" />
                  <HeroStat label="Largest" value="45 pax" />
                  <HeroStat label="AC" value="All" />
                  <HeroStat label="Guide" value="Bundled" />
                </div>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a href={`tel:+91${PHONE}`} className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-b from-amber-300 to-yellow-500 px-7 py-4 font-extrabold text-[#1a1408] shadow-[0_18px_40px_-12px_rgba(251,191,36,0.6)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a14]">
                    <IconPhone /> Call {PHONE}
                    <IconArrow className="w-4 h-4 opacity-60 group-hover:translate-x-0.5 transition" />
                  </a>
                  <a href={`https://wa.me/91${PHONE}?text=${encodeURIComponent('Hi, I have a group of __ travelling to __. Which vehicle fits?')}`} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-xl border-2 border-emerald-300/40 bg-emerald-400/5 px-6 py-4 font-extrabold text-emerald-100 hover:bg-emerald-400/15 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a14]">
                    <IconWhatsApp /> Get a vehicle pick
                  </a>
                </div>
              </div>

              {/* Floating vehicle silhouettes / images */}
              <div className="lg:col-span-5 relative hidden lg:block">
                <VehicleFan vehicles={vehicleEntries.slice(0, 3)} />
              </div>

              {/* Mobile vehicle strip */}
              <div className="lg:hidden -mx-4 sm:-mx-6 mt-10 col-span-full">
                <div className="flex gap-3 overflow-x-auto px-4 sm:px-6 pb-3 snap-x snap-mandatory">
                  {vehicleEntries.slice(0, 4).map(v => (
                    <div key={v.slug} className="snap-start shrink-0 w-[72%] sm:w-[50%] rounded-2xl bg-[#fef9e7] p-2 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.7)] ring-1 ring-black/10">
                      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-900">
                        <Image src={v.image} alt={v.name} fill sizes="70vw" className="object-cover" />
                      </div>
                      <div className="px-2 pt-2 pb-1 flex items-center justify-between">
                        <div>
                          <p className="font-serif italic text-[13px] text-[#3a2a08] leading-tight">{v.name}</p>
                          <p className="text-[10px] uppercase tracking-widest text-[#7a6428]/80 font-bold">{v.seats} pax</p>
                        </div>
                        <span className="text-[11px] font-black text-[#3a2a08]">₹{v.perKm}/km</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <ArchDivider />
        </section>

        {/* ============= ANSWER BOX ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <AnswerBox
            theme="guide"
            title="Quick Answer"
            answer="Triveni Tours-With-Guide bundles use multiple vehicle classes — Swift Dzire (4 pax), Ertiga (6), Innova Crysta (7), Force Urbania (12), Maharaja Tempo (17), 20-seater mini-bus, Volvo 45-seater, and BMW/Audi luxury sedan. Every bundle includes a licensed guide; you pick the vehicle by group size."
            stats={[
              { label: 'Smallest', value: '4 pax sedan' },
              { label: 'Largest', value: '45 pax Volvo' },
              { label: 'All AC', value: 'Yes' },
              { label: 'Guide', value: 'Always bundled' },
            ]}
            lastReviewed="2026-04-29"
            source="Triveni Cabs vehicle catalogue + tour bundle inventory"
            className="shadow-[0_30px_80px_-30px_rgba(251,191,36,0.3)]"
          />
        </section>

        {/* ============= DIRECT-ANSWER LEAD ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <AnswerCard question="Which vehicle should I choose for a guided tour?">
            <p className="speakable-lead text-base md:text-lg text-slate-200/95 leading-relaxed">
              Match the vehicle to your group size: a <span className="text-amber-200 font-semibold">4-seater Swift
              Dzire</span> for couples, a 6-seater Ertiga or 7-seater Innova Crysta for families, a 12-seater Force
              Urbania or 17-seater Maharaja Tempo Traveller for groups, and a 45-seater Volvo coach for large
              parties — with chauffeured BMW/Audi luxury cars for VIP tours. Bundles start at
              <span className="text-amber-200 font-semibold"> ₹3,000</span>, every vehicle is air-conditioned with a
              verified driver, and a Ministry-of-Tourism licensed guide is always included in the fare.
            </p>
          </AnswerCard>
        </section>

        {/* ============= VEHICLE CARDS ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <SectionTitle eyebrow="Browse by vehicle class" title="Which vehicle fits your group?" sub="Tap a card to jump to its tour bundles below." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {vehicleEntries.map(v => (
              <a key={v.slug} href={`#vehicle-${v.slug}`} className="group relative overflow-hidden rounded-[1.4rem] border border-amber-400/15 bg-slate-900/40 hover:border-amber-300/50 transition shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_60px_-15px_rgba(251,191,36,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a14]">
                <div className="relative aspect-[16/10]">
                  <Image src={v.image} alt={v.name} fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-[1.06] transition duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-[#0a0a14]/30 to-transparent" />

                  {/* Seats pill top-left */}
                  <div className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 backdrop-blur-md border border-white/15 px-3 py-1.5 text-[10px] uppercase tracking-[0.2em] text-amber-200 font-bold">
                    {v.seats} pax · {v.category}
                  </div>

                  {/* Ribbon top-right */}
                  <div className="absolute top-0 right-0">
                    <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-[#1a1408] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-bl-xl shadow-lg">
                      {v.tours.length} tours
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-5 right-5">
                    <p className="font-serif italic text-amber-200/85 text-sm">Tour-ready</p>
                    <p className="text-2xl font-black text-white leading-tight">{v.name}</p>
                  </div>
                </div>
                <div className="px-5 py-4 border-t border-amber-400/10 grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-bold">Bag space</p>
                    <p className="font-bold text-amber-100 mt-1">{v.bagSpace}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-bold">From</p>
                    <p className="font-black text-amber-200 mt-1">₹{v.perKm}/km</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ============= INLINE CTA ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <InlineCTA
            theme="guide"
            headline="Not sure which vehicle?"
            sub="Tell us your group size and route — we'll recommend the right vehicle + guide bundle in 5 minutes on WhatsApp."
            context="tours-with-guide-vehicle-mid"
            waMessage="Hi Triveni Cabs, I have a group of __ people travelling to __. Which vehicle fits best?"
            variant="full"
          />
        </section>

        {/* ============= PER-VEHICLE LISTINGS ============= */}
        {vehicleEntries.map(v => (
          <section key={v.slug} id={`vehicle-${v.slug}`} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 scroll-mt-24">
            <div className="relative overflow-hidden rounded-[1.6rem] border border-amber-400/15 bg-gradient-to-br from-slate-900/80 via-slate-950 to-slate-900/40 p-6 md:p-8 mb-8">
              <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-amber-400/[0.08] blur-3xl" />
              <div className="grid md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-7">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-amber-300/80 font-bold">{v.category} class</p>
                  <h2 className="mt-2 text-3xl md:text-4xl font-black tracking-tight leading-[1.05]">
                    <span className="bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
                      {v.name}
                    </span>
                  </h2>
                  <p className="mt-3 font-serif italic text-slate-400 text-sm md:text-base">
                    {v.seats} passengers · {v.bagSpace} · {v.tours.length} bundled tours available
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="inline-flex items-center rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-100 text-[11px] font-semibold px-3 py-1">From ₹{v.perKm}/km</span>
                    <span className="inline-flex items-center rounded-full bg-emerald-400/10 border border-emerald-300/30 text-emerald-100 text-[11px] font-semibold px-3 py-1">AC · all-day</span>
                    <span className="inline-flex items-center rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-100 text-[11px] font-semibold px-3 py-1">Verified driver</span>
                  </div>
                </div>
                <div className="md:col-span-5">
                  <div className="relative aspect-[16/10] rounded-xl overflow-hidden ring-1 ring-amber-400/15 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)]">
                    <Image src={v.image} alt={v.name} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14]/40 to-transparent" />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {v.tours.map((t, i) => (
                <Link key={t.slug} href={`/tours-with-guide/${t.slug}`} className={`group relative block rounded-2xl border bg-slate-900/40 overflow-hidden transition shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_50px_-15px_rgba(251,191,36,0.25)] ${i === 0 ? 'border-amber-400/30 hover:border-amber-400/60' : 'border-amber-400/10 hover:border-amber-400/40'}`}>
                  {i === 0 && (
                    <div className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 text-[#1a1408] text-[9px] font-black uppercase tracking-[0.2em] px-2.5 py-1 shadow-lg">
                      ★ Most booked
                    </div>
                  )}
                  <div className="relative aspect-[16/10]">
                    <Image src={t.heroImage} alt={t.headline} fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-[1.07] transition duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-[#0a0a14]/30 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <p className="text-[10px] text-amber-300/90 font-bold uppercase tracking-[0.2em]">{t.city}</p>
                      <p className="text-base md:text-lg font-black text-white truncate leading-tight mt-0.5">{t.headline}</p>
                    </div>
                  </div>
                  <div className="px-4 py-3.5 flex items-center justify-between border-t border-amber-400/10">
                    <div>
                      <p className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">Bundle</p>
                      <p className="text-base font-black text-amber-200">₹{t.bundledFare.toLocaleString('en-IN')}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] uppercase tracking-widest text-slate-500 font-bold">{t.duration}</p>
                      <p className="text-[11px] text-slate-300">{t.vehicleSeats} seats</p>
                    </div>
                    <span className="inline-flex w-9 h-9 items-center justify-center rounded-full bg-amber-400/15 text-amber-200 group-hover:bg-amber-400 group-hover:text-[#1a1408] transition font-extrabold">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

        {/* ============= VEHICLE FARE TABLE ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <SectionTitle eyebrow="At a glance" title="Vehicle capacity, fare and best use" sub="Every bundle includes a Ministry-licensed guide. Fares are fixed at booking." />
          <VehicleFareTable rows={VEHICLE_FEE_ROWS} />
        </section>

        {/* ============= FAQ ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <SectionTitle eyebrow="Good to know" title="Tour vehicles — frequently asked questions" sub="Capacity, pricing, AC, luggage, Golden Triangle and luxury options." />
          <FaqAccordion faqs={VEHICLE_FAQS} />
        </section>

        {/* ============= INTERNAL LINKS ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="rounded-[1.4rem] border border-amber-400/15 bg-gradient-to-br from-slate-900/60 via-slate-950 to-slate-900/40 p-7 md:p-9">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-300/80">Keep exploring</p>
            <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: '/tours-with-guide', label: 'All Tours With Guide' },
                { href: '/tours-with-guide/by-guide-language', label: 'Browse by Language' },
                { href: '/tour-guide', label: 'Tour Guide Services Hub' },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="group flex items-center justify-between gap-2 rounded-xl border border-amber-400/15 bg-slate-900/50 px-4 py-3.5 hover:border-amber-300/50 transition">
                  <span className="text-sm font-bold text-amber-100">{l.label}</span>
                  <span className="text-amber-300 group-hover:translate-x-1 transition">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============= REASSURANCE BAND ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <ReassuranceBand />
        </section>

        {/* ============= FINAL CTA ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pb-24">
          <InlineCTA
            theme="guide"
            headline="Lock in your tour bundle today"
            sub="Pick a vehicle · pick a guide language · we lock the price · no surprise fees"
            context="tours-with-guide-vehicle-final"
            waMessage="Hi Triveni Cabs, I want to book a Tour With Guide. Vehicle preference: ___"
            variant="banner"
          />
        </section>
      </main>
    </>
  );
}

// ===== PRESENTATIONAL =====

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

// Vehicle fare table — desktop gold-trimmed table (alt-row tint, popular row highlit);
// mobile stacked glass cards. Icons aid scannability. Innova (7-seat) = recommended.
function VehicleFareTable({ rows }) {
  const isPopular = (r) => r.seats === '7';
  return (
    <div className="mt-10">
      {/* Desktop / tablet */}
      <div className="hidden sm:block overflow-hidden rounded-[1.4rem] border border-amber-400/15 bg-gradient-to-br from-slate-900/60 via-slate-950 to-slate-900/40">
        <table className="w-full text-left border-collapse text-sm">
          <caption className="sr-only">Tour vehicle options compared by seating capacity, starting bundle fare and best use case</caption>
          <thead>
            <tr className="text-[10px] uppercase tracking-[0.18em] text-amber-300 font-bold border-b border-amber-400/25 bg-amber-400/[0.04]">
              <th scope="col" className="px-5 py-4"><span className="inline-flex items-center gap-1.5"><Car className="w-3.5 h-3.5" /> Vehicle</span></th>
              <th scope="col" className="px-5 py-4"><span className="inline-flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> Seats</span></th>
              <th scope="col" className="px-5 py-4"><span className="inline-flex items-center gap-1.5"><IndianRupee className="w-3.5 h-3.5" /> Bundle from</span></th>
              <th scope="col" className="px-5 py-4">Best for</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.name} className={`border-b border-amber-400/10 last:border-0 transition ${isPopular(r) ? 'bg-amber-400/[0.08]' : i % 2 === 1 ? 'bg-white/[0.015] hover:bg-amber-400/[0.05]' : 'hover:bg-amber-400/[0.05]'}`}>
                <th scope="row" className="px-5 py-4 font-black text-white">
                  <span className="flex items-center gap-2">
                    {r.name}
                    {isPopular(r) && (
                      <span className="inline-flex items-center rounded-full bg-emerald-400/15 border border-emerald-300/40 text-emerald-200 text-[9px] uppercase tracking-widest font-black px-2 py-0.5">Most popular</span>
                    )}
                  </span>
                </th>
                <td className="px-5 py-4 font-extrabold text-amber-200">{r.seats}</td>
                <td className="px-5 py-4 font-extrabold text-amber-200">{r.from}</td>
                <td className="px-5 py-4 text-slate-300/90">{r.bestFor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mobile stacked cards */}
      <div className="sm:hidden space-y-3">
        {rows.map((r) => (
          <div key={r.name} className={`rounded-2xl border bg-white/5 backdrop-blur-xl p-5 ${isPopular(r) ? 'border-emerald-300/40 bg-emerald-400/[0.06]' : 'border-white/10'}`}>
            <div className="flex items-start justify-between gap-3">
              <p className="font-black text-white flex items-center gap-2 flex-wrap">
                <Car className="w-4 h-4 text-amber-300 shrink-0" />
                {r.name}
                {isPopular(r) && (
                  <span className="inline-flex items-center rounded-full bg-emerald-400/15 border border-emerald-300/40 text-emerald-200 text-[8px] uppercase tracking-widest font-black px-1.5 py-0.5">Popular</span>
                )}
              </p>
              <p className="font-black text-amber-200 shrink-0">{r.from}</p>
            </div>
            <div className="mt-2 flex items-center gap-4 text-xs">
              <span className="inline-flex items-center gap-1.5 text-amber-100/90"><Users className="w-3.5 h-3.5 text-amber-300" /> {r.seats} pax</span>
            </div>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">{r.bestFor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function VehicleFan({ vehicles }) {
  if (!vehicles || vehicles.length === 0) return null;
  return (
    <div className="relative h-[480px] w-full">
      <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/15 via-transparent to-emerald-500/10 blur-3xl rounded-full" />
      {vehicles.map((v, i) => {
        const positions = [
          { top: '4%',  left: '0',   rotate: '-5deg', z: 30, scale: '1.0' },
          { top: '26%', left: '32%', rotate: '3deg',  z: 20, scale: '0.92' },
          { top: '54%', left: '10%', rotate: '-2deg', z: 10, scale: '0.85' },
        ];
        const p = positions[i];
        return (
          <div
            key={v.slug}
            className="absolute w-[65%] max-w-[280px] rounded-2xl bg-[#fef9e7] p-2 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.8)] ring-1 ring-black/10 hover:scale-[1.04] hover:rotate-0 transition duration-500"
            style={{ top: p.top, left: p.left, transform: `rotate(${p.rotate}) scale(${p.scale})`, zIndex: p.z }}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-900">
              <Image src={v.image} alt={v.name} fill sizes="(max-width: 1280px) 30vw, 280px" className="object-cover" />
            </div>
            <div className="px-2 pt-2 pb-1 flex items-center justify-between">
              <div>
                <p className="font-serif italic text-[13px] text-[#3a2a08] leading-tight">{v.name}</p>
                <p className="text-[10px] uppercase tracking-widest text-[#7a6428]/80 font-bold">{v.seats} pax</p>
              </div>
              <span className="text-[11px] font-black text-[#3a2a08]">₹{v.perKm}/km</span>
            </div>
          </div>
        );
      })}
    </div>
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

function ArchDivider() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12" aria-hidden>
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
