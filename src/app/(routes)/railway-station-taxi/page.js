import Link from 'next/link';
import Image from 'next/image';
import { railwayStations, getAllStationSlugs } from '@/utilis/railwayStationData';
import { getDeterministicReviewCount } from "@/lib/seo/review-helpers";
import AEOHead from '@/components/seo/AEOHead';
import SocialProofStrip from '@/components/shared/SocialProofStrip';
import BookingJourney from '@/components/shared/BookingJourney';
import InclusionBadges from '@/components/shared/InclusionBadges';
import SectionDivider from '@/components/shared/SectionDivider';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Railway Station Taxi Service | 27 Stations | 24/7 Cab Booking'),
  description: 'Book reliable taxi at 27+ railway stations across India. Fixed fares, 24/7 service, meet at platform exit.',
  keywords: 'railway station taxi, station cab booking, train station taxi service, railway station cab, station pickup taxi, india railway station taxi, station to hotel taxi, prepaid taxi railway station, 24/7 station taxi, railway station cab service near me',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/railway-station-taxi' },
  openGraph: {
    title: 'Railway Station Taxi Service | 27+ Stations | Triveni Cabs',
    description: 'Reliable 24/7 taxi service at 27+ major railway stations. Fixed fares, AC vehicles, meet at platform exit.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/railway-station-taxi',
    siteName: 'Triveni Cabs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Railway Station Taxi | 27+ Stations | Triveni Cabs',
    description: '24/7 taxi at major railway stations across India. Fixed fares, meet at platform.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

// ─── Ultra-Premium v2 vocabulary ────────────────────────────────────────────
const FOIL =
  'text-gold-foil bg-gradient-to-br from-[#FFE9A0] via-[#FACF2D] to-[#B8860B] bg-clip-text text-transparent drop-shadow-[0_2px_18px_rgba(250,207,45,0.35)]';
const GOLD_BTN =
  'sheen inline-flex items-center justify-center gap-2 rounded-full bg-[#FACF2D] font-black text-slate-950 shadow-[0_12px_36px_-10px_rgba(250,207,45,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-amber-300 active:translate-y-0 active:scale-[0.98]';
const GHOST_BTN =
  'inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/10';
const CTA_SIZE = 'w-full px-7 py-4 text-sm lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]';
const GLASS = 'bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10';

// Group stations by region for better UX
const regionGroups = {
  "Delhi NCR": ["new-delhi", "old-delhi", "nizamuddin", "anand-vihar"],
  "Uttar Pradesh": ["agra-cantt", "agra-fort", "lucknow", "varanasi", "mathura", "ayodhya", "prayagraj", "kanpur"],
  "Rajasthan": ["jaipur", "jodhpur", "udaipur", "ajmer"],
  "Uttarakhand": ["haridwar", "dehradun", "rishikesh", "kathgodam"],
  "Punjab & Haryana": ["amritsar", "chandigarh", "ambala", "pathankot"],
  "Himachal & J&K": ["kalka", "jammu"],
  "Madhya Pradesh": ["gwalior"],
};

export default function RailwayStationTaxiHub() {
  const allSlugs = getAllStationSlugs();
  const totalStations = allSlugs.length;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Railway Station Taxi", "item": "https://www.trivenicabs.in/railway-station-taxi" },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Railway Station Taxi Service",
    "name": "Triveni Cabs Railway Station Taxi Service",
    "description": `Reliable 24/7 taxi service at ${totalStations}+ major railway stations across India. Fixed fares, AC vehicles, professional drivers.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
    },
    "areaServed": {
      "@type": "Country",
      "name": "India",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": String(getDeterministicReviewCount('railway-station-taxi')),
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Railway Station Taxi Services",
    "numberOfItems": totalStations,
    "itemListElement": allSlugs.map((stationSlug, i) => {
      const s = railwayStations[stationSlug];
      return s ? {
        "@type": "ListItem",
        "position": i + 1,
        "name": `${s.name} Taxi Service`,
        "url": `https://www.trivenicabs.in/railway-station-taxi/${stationSlug}`
      } : null;
    }).filter(Boolean)
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How do I book a taxi at a railway station?", "acceptedAnswer": { "@type": "Answer", "text": "Call Triveni Cabs at 7668570551 or WhatsApp with your train number and destination. Our driver will meet you at the platform exit with a name board. Pre-booking ensures zero waiting time." } },
      { "@type": "Question", "name": "Are taxis available 24/7 at railway stations?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Triveni Cabs operates 24/7 at all 27+ railway stations. Whether your train arrives at midnight or early morning, our drivers are available with no extra night charges." } },
      { "@type": "Question", "name": "Do you track train delays?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we actively track your train status. If your train is delayed, we adjust the driver dispatch time so they are ready exactly when you arrive. No waiting, no wasted time." } },
      { "@type": "Question", "name": "Which railway stations does Triveni Cabs serve?", "acceptedAnswer": { "@type": "Answer", "text": "We serve 27+ major railway stations including New Delhi, Agra Cantt, Jaipur Junction, Varanasi Junction, Lucknow, Haridwar, Amritsar, Chandigarh, and more across North India." } }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <AEOHead pageType="station" data={{ url: '/railway-station-taxi', title: 'Railway Station Taxi Service' }} />

      <div className="min-h-screen bg-slate-950">

        {/* === HERO — visible photo, scrim on the text side only === */}
        <section className="relative flex min-h-[74vh] flex-col justify-end overflow-hidden">
          <Image
            src="/images/sightseeing/Delhi/Delhi_hero_section.jpg"
            alt="New Delhi — flagship station of our railway station taxi network"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/10" />
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-slate-950/75 via-slate-950/30 to-transparent lg:w-3/4" />
          <div className="absolute inset-x-0 top-0 z-20 h-1.5 bg-gradient-to-r from-[#B8860B] via-[#FACF2D] to-[#FFE9A0]" aria-hidden />

          <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-14 pt-28 text-center">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-amber-400/30 bg-slate-950/60 px-5 py-2.5 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="font-mono text-sm tracking-wider text-amber-200">{totalStations} STATIONS COVERED</span>
            </div>

            <h1 className="font-display-serif text-balance text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Railway Station
              <span className={`block ${FOIL}`}>Taxi Service</span>
            </h1>

            <p className="mx-auto mb-8 mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              Reliable 24/7 taxi service at {totalStations} major railway stations across India. Fixed fares, AC vehicles, meet at platform exit. No surge pricing, no hidden charges.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="tel:+917668570551" className={`${GOLD_BTN} ${CTA_SIZE}`}>
                Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I need a railway station taxi" className={`${GHOST_BTN} ${CTA_SIZE}`}>
                WhatsApp Booking
              </Link>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <SocialProofStrip theme="dark" />

        {/* === STATS BAR === */}
        <section className="border-b border-white/5 px-4 py-10">
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 text-center md:grid-cols-4">
            {[
              { value: `${totalStations}+`, label: "Railway Stations" },
              { value: "24/7", label: "Service Available" },
              { value: "Fixed", label: "Fare Pricing" },
              { value: "4.9", label: "Customer Rating" },
            ].map((stat, i) => (
              <div key={i}>
                <div className={`font-display-serif text-3xl font-black ${FOIL}`}>{stat.value}</div>
                <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* === STATION LISTINGS BY REGION — warm-light directory === */}
        <section className="bg-gradient-to-b from-[#FFF6DC] via-amber-50/70 to-white px-4 py-16 text-slate-900 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <span className="mb-4 inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-amber-600 sm:text-xs">
                <span className="h-px w-7 bg-amber-500/60" />
                All Stations
                <span className="h-px w-7 bg-amber-500/60" />
              </span>
              <h2 className="font-display-serif text-balance text-[1.7rem] font-black leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
                Choose Your <span className={FOIL}>Station</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">Select a railway station to view taxi fares, destinations, and book your ride.</p>
            </div>

            {Object.entries(regionGroups).map(([region, slugs]) => (
              <div key={region} className="mb-12">
                <h3 className="font-display-serif mb-5 flex items-center gap-3 text-xl font-black text-slate-900">
                  <span className="h-0.5 w-8 rounded bg-gradient-to-r from-[#B8860B] to-[#FACF2D]"></span>
                  {region}
                  <span className="text-sm font-normal text-amber-600">({slugs.length} stations)</span>
                </h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {slugs.map((stationSlug) => {
                    const s = railwayStations[stationSlug];
                    if (!s) return null;
                    const minFare = s.destinations.reduce((min, d) => Math.min(min, d.sedanFare), Infinity);
                    return (
                      <Link
                        key={stationSlug}
                        href={`/railway-station-taxi/${stationSlug}`}
                        className="group rounded-2xl border border-amber-200 bg-white p-5 shadow-[0_16px_50px_-30px_rgba(180,130,10,0.45)] transition-all hover:border-amber-300 hover:shadow-[0_20px_60px_-28px_rgba(180,130,10,0.6)]"
                      >
                        <div className="mb-3 flex items-center justify-between">
                          <span className="rounded-md border border-amber-300 bg-amber-50 px-2 py-0.5 font-mono text-xs font-bold text-amber-700">{s.stationCode}</span>
                          <svg className="h-4 w-4 text-slate-400 transition-colors group-hover:text-amber-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </div>
                        <h4 className="mb-1 text-sm font-bold text-slate-900 transition-colors group-hover:text-amber-700">{s.name}</h4>
                        <p className="mb-3 text-xs text-slate-500">{s.platforms} Platforms</p>
                        <div className="flex items-center justify-between border-t border-amber-100 pt-3">
                          <div className="text-xs text-slate-500">Taxi from</div>
                          <div className="font-display-serif text-sm font-black text-amber-700">{'₹'}{minFare.toLocaleString()}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* === WHY CHOOSE US — dark band === */}
        <section className="border-t border-white/5 px-4 py-16 md:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <h2 className="font-display-serif text-balance text-[1.7rem] font-black leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                Why Choose <span className={FOIL}>Triveni Cabs</span>
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Meet at Platform Exit", desc: "Our driver waits right at the station exit with your name board. No confusion, no searching." },
                { title: "Train Tracking", desc: "We track your train status. If delayed, the driver adjusts accordingly. Always there when you arrive." },
                { title: "Fixed Fare Guarantee", desc: "Price agreed before booking. No meters, no surge pricing, no hidden charges. What you see is what you pay." },
                { title: "24/7 Service", desc: "Train arriving at 3 AM? No problem. Our service runs round the clock, every day of the year." },
                { title: "AC Clean Vehicles", desc: "Well-maintained, sanitized AC vehicles. Choose from Sedan, SUV, or Tempo Traveller." },
                { title: "Verified Professional Drivers", desc: "Background-verified drivers who know local routes. Courteous, helpful, and experienced." },
              ].map((item, i) => (
                <div key={i} className={`${GLASS} p-6 transition-all hover:border-amber-400/40`}>
                  <h3 className="font-display-serif mb-2 text-lg font-black text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <InclusionBadges preset="outstation" theme="dark" />
        <SectionDivider color="violet" className="my-4" />

        {/* How It Works */}
        <BookingJourney theme="dark" />
        <SectionDivider color="violet" className="my-4" />

        {/* === FAQ Section — two-column grid === */}
        <section className="bg-gradient-to-b from-[#FFF6DC] via-amber-50/60 to-white px-4 py-16 text-slate-900 md:py-24">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <h2 className="font-display-serif text-balance text-[1.7rem] font-black leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
                Frequently Asked <span className={FOIL}>Questions</span>
              </h2>
              <p className="mt-4 text-slate-600">Common queries about railway station taxi services</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 md:items-start">
              {faqSchema.mainEntity.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-amber-200 bg-white p-6 shadow-[0_16px_50px_-30px_rgba(180,130,10,0.45)] transition-all hover:border-amber-300">
                  <h3 className="font-display-serif mb-3 text-lg font-black text-slate-900">{faq.name}</h3>
                  <p className="leading-relaxed text-slate-600">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === Cross-Service Links — dark band === */}
        <section className="border-t border-white/5 px-4 py-16 md:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-14 max-w-3xl text-center">
              <h2 className="font-display-serif text-balance text-[1.7rem] font-black leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
                Explore More <span className={FOIL}>Travel Services</span>
              </h2>
              <p className="mt-4 text-slate-400">Other ways to travel across India with Triveni Cabs</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: 'Bus Stand Taxi', href: '/bus-stand-taxi', desc: 'Taxi at 13+ bus terminals' },
                { title: 'One-Way Cabs', href: '/one-way-cab', desc: 'Affordable outstation rides' },
                { title: 'Sightseeing Tours', href: '/sightseeing', desc: 'Explore tourist attractions' },
                { title: 'Tour Packages', href: '/tour-package', desc: 'Multi-day curated tours' },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className={`group ${GLASS} p-5 transition-all hover:border-amber-400/40`}
                >
                  <h3 className="mb-1 font-bold text-white transition-colors group-hover:text-amber-300">{link.title}</h3>
                  <p className="text-sm text-slate-400">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* === CTA === */}
        <section className="relative overflow-hidden px-4 py-24 md:py-32">
          <Image
            src="/images/sightseeing/Delhi/Delhi_hero_section.jpg"
            alt="Book a railway station taxi across India"
            fill
            className="object-cover"
            sizes="100vw"
            quality={80}
          />
          <div className="absolute inset-0 bg-slate-950/80" />
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#B8860B] via-[#FACF2D] to-[#FFE9A0]" aria-hidden />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h2 className="font-display-serif mb-4 text-4xl font-black text-white md:text-6xl">
              Arriving by <span className={FOIL}>Train?</span>
            </h2>
            <p className="mb-3 text-2xl font-semibold text-amber-100">Your taxi is waiting at the station.</p>
            <p className="mx-auto mb-8 max-w-xl text-lg text-white/60">{totalStations} stations covered. Fixed fares. 24/7 service. AC vehicles. Meet at platform exit.</p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="tel:+917668570551" className={`${GOLD_BTN} ${CTA_SIZE}`}>
                Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I need a railway station taxi" className={`${GHOST_BTN} ${CTA_SIZE}`}>
                WhatsApp Booking
              </Link>
            </div>
          </div>
        </section>

        {/* === BREADCRUMB === */}
        <nav className="border-t border-white/5 px-4 py-4">
          <div className="mx-auto flex max-w-6xl items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="transition-colors hover:text-amber-300">Home</Link>
            <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            <span className="font-medium text-slate-300">Railway Station Taxi</span>
          </div>
        </nav>
      </div>
    </>
  );
}
