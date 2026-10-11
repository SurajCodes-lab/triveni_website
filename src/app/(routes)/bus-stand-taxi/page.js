import Link from 'next/link';
import Image from 'next/image';
import { busStands } from '@/utilis/busStandData';
import { Phone, MapPin, Bus, ArrowRight, Clock, Shield, Star, Users, ChevronDown, CheckCircle, IndianRupee } from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import { getSpeakableSchema, getHowToSchema, getArticleSchema, getComparisonSchema, getTodayDate } from '@/lib/seo/speakable-helpers';
import AEOHead from '@/components/seo/AEOHead';
import SocialProofStrip from '@/components/shared/SocialProofStrip';
import BookingJourney from '@/components/shared/BookingJourney';
import InclusionBadges from '@/components/shared/InclusionBadges';
import SectionDivider from '@/components/shared/SectionDivider';
import { tightenTitle } from '@/lib/seo/serp-ctr';
import { getContentUpdatedOn } from '@/lib/seo/content-updates';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Bus Stand Taxi | Taxi from Bus Stand | 13+ ISBTs'),
  description: 'Book a taxi from any bus stand or ISBT across North India. Fixed fares, 24/7 pickup at the bus stand exit, AC cabs. Kashmere Gate, Anand Vihar, Sindhi Camp Jaipur, Agra Idgah & more. Call 7668570551.',
  keywords: 'bus stand taxi, taxi from bus stand, cab at bus stand, ISBT cab service, bus stand pickup taxi, bus terminal taxi, prepaid bus stand taxi, ISBT taxi India, bus stand cab booking',
  authors: [{ name: 'Triveni Cabs™' }],
  creator: 'Triveni Cabs™',
  publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/bus-stand-taxi' },
  openGraph: {
    title: 'Bus Stand & ISBT Taxi Service Across India | Triveni Cabs™',
    description: 'Reliable cab service from major bus stands and ISBTs. Fixed fares, 24/7 availability, AC cabs. Serving 13+ bus terminals.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/bus-stand-taxi',
    siteName: 'Triveni Cabs™',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bus Stand Taxi Service | Triveni Cabs™',
    description: 'Cab service from major bus stands and ISBTs across India. Fixed fares, 24/7 service.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
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

export default function BusStandTaxiHubPage() {
  const standEntries = Object.entries(busStands);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Bus Stand Taxi", "item": "https://www.trivenicabs.in/bus-stand-taxi" },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Triveni Cabs - Bus Stand Taxi Service",
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "description": "Reliable taxi and cab service from major bus stands and ISBTs across India. 24/7 availability, fixed fares, AC cabs.",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.trivenicabs.in/#organization",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
    },
    "areaServed": standEntries.map(([, s]) => ({ "@type": "Place", "name": `${s.name}, ${s.city}` })),
    ...getRatingAndReviews('bus-stand-taxi-hub', 'bus')
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Bus Stand Taxi Services",
    "numberOfItems": standEntries.length,
    "itemListElement": standEntries.map(([slug, s], i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": `${s.name} Cab Service`,
      "url": `https://www.trivenicabs.in/bus-stand-taxi/${slug}`
    }))
  };

  const hubFaqs = [
    { question: "How do I book a taxi from a bus stand?", answer: "Call Triveni Cabs™ at 7668570551 or send a WhatsApp message with your bus stand name, arrival time, and drop destination. We assign a verified driver who waits at the bus stand exit before your bus arrives. Pre-booking guarantees a fixed fare and zero waiting time." },
    { question: "Are cabs available 24/7 at bus stands?", answer: "Yes. Triveni Cabs™ operates round the clock at all 13+ bus stands and ISBTs we serve. Whether your bus arrives at midnight or 5 AM, a driver is available — and there are no extra night surcharges on standard city fares." },
    { question: "What are the typical taxi fares from a bus stand?", answer: "Fares are fixed and transparent. Local city drops start from ₹100-250, airport transfers range from ₹350-800 depending on the city, and outstation trips are quoted upfront. All fares are for AC sedans with no surge pricing, meter tampering, or hidden charges." },
    { question: "Which bus stands does Triveni Cabs™ serve?", answer: "We serve 13+ major terminals including ISBT Kashmere Gate, ISBT Anand Vihar and ISBT Sarai Kale Khan (Delhi), Sindhi Camp (Jaipur), Agra ISBT Idgah, ISBT Sector 43 (Chandigarh), plus bus stands in Haridwar, Dehradun, Lucknow, Varanasi, Amritsar, Shimla and Manali." },
    { question: "Is prepaid taxi at the bus stand better than an app cab or auto?", answer: "A pre-booked Triveni cab gives you a fixed fare, a guaranteed AC vehicle, and a verified driver waiting at the exit — unlike app cabs that surge during peak arrivals or autos that negotiate on the spot. You avoid haggling and never wait after a tiring bus journey." },
    { question: "How early should I book my bus stand taxi?", answer: "Booking a few hours in advance is ideal, and a day ahead during festivals, weekends, and tourist season. Advance booking guarantees a driver at the pickup point with zero waiting. On-the-spot bookings are accepted too, subject to availability — just call 7668570551." },
    { question: "Where will the driver meet me at the bus stand?", answer: "Each bus stand page lists the exact pickup point (for example, the prepaid counter near Gate No. 1 or the designated taxi zone by the main exit). After booking, we share the driver's live location, name, photo, and vehicle number so you can meet within minutes of stepping off your bus." },
    { question: "What types of vehicles can I book from a bus stand?", answer: "You can book an AC sedan (Swift Dzire, Honda Amaze) for up to 4 passengers, an SUV (Toyota Innova, Maruti Ertiga) for 6-7 passengers, or a tempo traveller for larger groups. Choose based on your passenger count and luggage when you book." },
    { question: "Can I carry heavy luggage in a bus stand taxi?", answer: "Yes. Sedans fit 2-3 suitcases comfortably and SUVs handle 4-5 large bags plus passengers. Mention your luggage when booking so we assign the right vehicle — especially useful after long interstate bus journeys with multiple bags." },
    { question: "Are the drivers verified and the cabs safe?", answer: "Every Triveni Cabs™ driver is background-verified, licensed, and trained for professional, courteous service. All rides are GPS-tracked and you receive driver and vehicle details before pickup, making it safe for solo travellers, women, and families." },
    { question: "Can I book an outstation cab from a bus stand?", answer: "Absolutely. Beyond local city drops, we run outstation trips from every bus stand we serve — for example Delhi to Agra, Chandigarh to Shimla, or Haridwar to Rishikesh. Outstation fares are quoted upfront with experienced highway drivers." },
    { question: "Do you provide a GST invoice for bus stand cab rides?", answer: "Yes. We provide a proper GST tax invoice on request, which is useful for business travellers and corporate reimbursement. Mention your GST requirement at booking and we email or hand over the invoice after the trip." }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "speakable": getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.speakable-faq-first']),
    "mainEntity": hubFaqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  };

  // HowTo — booking process (renders as visible <ol> below)
  const howToSteps = [
    { name: 'Call or WhatsApp Triveni Cabs™', text: 'Call 7668570551 or WhatsApp with the bus stand name, your expected arrival time, and your drop destination.' },
    { name: 'Choose your vehicle & confirm the fare', text: 'Pick an AC sedan, SUV, or tempo traveller. You get a fixed, transparent fare quote upfront — no surge, no meter.' },
    { name: 'Receive driver details', text: 'Get instant confirmation with the driver name, photo, phone number, and vehicle registration, plus live GPS tracking.' },
    { name: 'Meet at the bus stand exit', text: 'Your driver waits at the marked pickup point near the exit gate when your bus arrives. Step out and ride away — no waiting, no haggling.' }
  ];
  const howToSchema = getHowToSchema({
    name: 'How to Book a Taxi from a Bus Stand',
    description: 'A simple 4-step guide to booking a fixed-fare cab from any bus stand or ISBT with Triveni Cabs™.',
    totalTime: 'PT3M',
    estimatedCost: { currency: 'INR', value: 100 },
    steps: howToSteps
  });

  // Article — E-E-A-T + freshness + voice search
  const articleSchema = getArticleSchema({
    slug: 'bus-stand-taxi',
    headline: 'Bus Stand & ISBT Taxi Service Across India — Fixed Fares, 24/7 Pickup',
    description: 'How to book a reliable, fixed-fare taxi from any bus stand or ISBT in North India: covered terminals, fares, prepaid vs app cab vs auto, and booking steps.',
    image: '/images/triveni-cabs-og.jpg',
    datePublished: '2026-01-01',
    dateModified: (getContentUpdatedOn('/bus-stand-taxi') || getTodayDate()),
    authorName: 'editorial',
    type: 'Article',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first']
  });

  // Comparison table data — prepaid stand taxi vs app cab vs auto
  const comparisonRows = [
    { feature: 'Fare certainty', triveni: 'Fixed fare quoted upfront', app: 'Surges during peak bus arrivals', auto: 'Negotiated on the spot' },
    { feature: 'Vehicle', triveni: 'AC sedan / SUV guaranteed', app: 'Varies, AC not guaranteed', auto: 'Open auto, no AC' },
    { feature: 'Availability at night', triveni: '24/7, no night surcharge', app: 'Limited, high surge', auto: 'Scarce, premium charged' },
    { feature: 'Driver verification', triveni: 'Background-verified & GPS-tracked', app: 'Verified, varies by city', auto: 'Unverified' },
    { feature: 'Waiting for delayed bus', triveni: 'Driver waits free for delays', app: 'Cancels / re-books', auto: 'May refuse to wait' },
    { feature: 'Luggage & comfort', triveni: 'Fits suitcases, clean cabin', app: 'Depends on car', auto: 'Limited space' }
  ];
  const comparisonSchema = getComparisonSchema({
    slug: 'bus-stand-taxi',
    title: 'Bus Stand Taxi vs App Cab vs Auto-Rickshaw',
    description: 'A comparison of pre-booked bus stand taxis, app-based cabs, and auto-rickshaws on fare, vehicle, night availability, safety, and comfort.',
    rows: comparisonRows,
    mentions: ['Prepaid taxi', 'App cab', 'Auto-rickshaw', 'Bus stand pickup']
  });

  // Group by city
  const grouped = {};
  standEntries.forEach(([slug, stand]) => {
    const city = stand.city;
    if (!grouped[city]) grouped[city] = [];
    grouped[city].push({ slug, ...stand });
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {comparisonSchema.map((s, i) => (
        <script key={`cmp-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <AEOHead pageType="busStand" data={{ url: '/bus-stand-taxi', title: 'Bus Stand Taxi Service' }} />

      <div className="min-h-screen bg-slate-950 text-white">
        {/* Hero — visible photo, scrim on the text side only */}
        <section className="relative flex min-h-[74vh] flex-col justify-end overflow-hidden">
          <Image
            src="/images/sightseeing/Delhi/Delhi_hero_section.jpg"
            alt="Delhi — home of ISBT Kashmere Gate, flagship terminal of our bus stand taxi network"
            fill
            priority
            className="object-cover"
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/10" />
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-slate-950/75 via-slate-950/30 to-transparent lg:w-3/4" />
          <div className="absolute inset-x-0 top-0 z-20 h-1.5 bg-gradient-to-r from-[#B8860B] via-[#FACF2D] to-[#FFE9A0]" aria-hidden />

          <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-14 pt-16 sm:pt-28 sm:px-6 lg:px-8">
            <nav className="mb-8 flex items-center gap-2 text-sm text-white/45" aria-label="Breadcrumb">
              <Link href="/" className="transition-colors hover:text-amber-300">Home</Link>
              <ChevronDown className="h-3 w-3 -rotate-90" />
              <span className="text-amber-300">Bus Stand Taxi</span>
            </nav>

            <div className="max-w-3xl">
              <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-amber-400/30 bg-slate-950/60 px-5 py-2.5 backdrop-blur-md">
                <Bus className="h-4 w-4 text-[#FACF2D]" />
                <span className="font-mono text-sm tracking-wider text-amber-200">13 BUS STANDS COVERED</span>
              </div>

              <h1 className="speakable-headline font-display-serif text-balance text-4xl font-black leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className={FOIL}>Bus Stand &amp; ISBT</span>
                <span className="block text-white">Taxi Service Across India</span>
              </h1>

              <p className="speakable-lead mb-8 mt-6 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                Book a taxi from any bus stand or ISBT and get a reliable, AC cab waiting at the exit gate. We serve 13 major bus terminals across North India with fixed fares starting at ₹100, 24/7 availability, verified drivers, and zero waiting time — no surge pricing, no haggling with autos.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <a href="tel:7668570551" className={`${GOLD_BTN} ${CTA_SIZE}`}>
                  <Phone className="h-4 w-4" />
                  Call Now - 7668570551
                </a>
                <a
                  href="https://wa.me/917668570551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${GHOST_BTN} ${CTA_SIZE}`}
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#FACF2D]" />
                  WhatsApp Booking
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <SocialProofStrip theme="dark" />

        {/* Stats */}
        <section className="border-y border-white/5 bg-gradient-to-r from-amber-950/40 via-slate-950 to-amber-950/40">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                { icon: Bus, value: '13+', label: 'Bus Stands' },
                { icon: Clock, value: '24/7', label: 'Availability' },
                { icon: Shield, value: '100%', label: 'Safe Rides' },
                { icon: Star, value: '4.8/5', label: 'Customer Rating' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[#FACF2D]/40 bg-gradient-to-br from-amber-400/20 via-transparent to-transparent">
                    <stat.icon className="h-6 w-6 text-[#FACF2D]" />
                  </div>
                  <div>
                    <p className="font-display-serif text-xl font-black text-white">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Direct Answer (AEO / featured-snippet target) — warm-light band */}
        <section className="bg-gradient-to-b from-[#FFF6DC] via-amber-50/60 to-white px-4 py-16 text-slate-900 md:py-24">
          <div className="mx-auto max-w-4xl sm:px-2 lg:px-4">
            <div className="rounded-2xl border border-amber-200 bg-white p-6 shadow-[0_16px_50px_-30px_rgba(180,130,10,0.45)] md:p-8">
              <h2 className="font-display-serif mb-4 text-2xl font-black text-slate-900 md:text-3xl">
                How do I get a taxi from a <span className={FOIL}>bus stand?</span>
              </h2>
              <p className="speakable-faq-first text-base leading-relaxed text-slate-700 md:text-lg">
                To get a taxi from a bus stand, call Triveni Cabs™ at <strong className="text-slate-900">7668570551</strong> or WhatsApp with the bus stand name, your arrival time, and destination. A verified driver waits at the marked pickup point near the exit gate when your bus arrives. Fares are <strong className="text-amber-700">fixed and start at ₹100</strong> for local drops, with AC sedans and SUVs available 24/7 and no surge pricing. This works at all 13+ ISBTs and bus stands we serve across North India.
              </p>
            </div>
          </div>
        </section>

        {/* How to Book — visible ordered list (HowTo schema mirror) */}
        <section className="px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl sm:px-2 lg:px-4">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="font-display-serif text-balance text-[1.7rem] font-black leading-[1.12] tracking-tight text-white sm:text-4xl">
                How to <span className={FOIL}>Book a Taxi from a Bus Stand</span>
              </h2>
              <p className="mt-4 text-gray-400">Four simple steps to a fixed-fare cab waiting at your bus stand</p>
            </div>
            <ol className="space-y-4">
              {howToSteps.map((step, i) => (
                <li key={i} className={`flex items-start gap-4 ${GLASS} p-5`}>
                  <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#FACF2D] font-bold text-slate-950 shadow-[0_8px_24px_-8px_rgba(250,207,45,0.7)]">{i + 1}</div>
                  <div>
                    <h3 className="font-display-serif mb-1 text-lg font-black text-white">{step.name}</h3>
                    <p className="text-sm leading-relaxed text-gray-400">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Comparison — prepaid stand taxi vs app cab vs auto */}
        <section className="px-4 pb-16 md:pb-24">
          <div className="mx-auto max-w-5xl sm:px-2 lg:px-4">
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="font-display-serif text-balance text-[1.7rem] font-black leading-[1.12] tracking-tight text-white sm:text-4xl">
                Bus Stand Taxi vs <span className={FOIL}>App Cab vs Auto</span>
              </h2>
              <p className="mt-4 text-gray-400">Why a pre-booked bus stand taxi beats app cabs and autos on price, comfort, and safety</p>
            </div>

            {/* Mobile — stacked label/value cards */}
            <div className="space-y-4 md:hidden">
              {comparisonRows.map((row, i) => (
                <div key={i} className={`${GLASS} p-5`}>
                  <p className="font-display-serif mb-3 text-base font-black text-white">{row.feature}</p>
                  <dl className="space-y-2 text-xs">
                    <div className="flex justify-between gap-3 border-b border-white/5 pb-2">
                      <dt className="font-mono uppercase tracking-widest text-amber-300">Triveni</dt>
                      <dd className="flex items-start gap-1.5 text-right font-bold text-amber-200">
                        <CheckCircle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0" />
                        {row.triveni}
                      </dd>
                    </div>
                    <div className="flex justify-between gap-3 border-b border-white/5 pb-2">
                      <dt className="font-mono uppercase tracking-widest text-white/40">App Cab</dt>
                      <dd className="text-right text-white/60">{row.app}</dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="font-mono uppercase tracking-widest text-white/40">Auto</dt>
                      <dd className="text-right text-white/60">{row.auto}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>

            {/* Desktop — full table, no horizontal scroll wrapper */}
            <div className={`hidden overflow-hidden md:block ${GLASS}`}>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-amber-400/20 bg-amber-400/10">
                    <th className="px-4 py-4 font-semibold text-gray-300">Feature</th>
                    <th className="px-4 py-4 font-semibold text-amber-300">Triveni Bus Stand Taxi</th>
                    <th className="px-4 py-4 font-semibold text-gray-300">App Cab</th>
                    <th className="px-4 py-4 font-semibold text-gray-300">Auto-Rickshaw</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, i) => (
                    <tr key={i} className="border-b border-white/5 last:border-0">
                      <td className="px-4 py-3.5 font-medium text-gray-200">{row.feature}</td>
                      <td className="px-4 py-3.5 text-amber-200">
                        <span className="inline-flex items-start gap-1.5">
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                          {row.triveni}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-gray-400">{row.app}</td>
                      <td className="px-4 py-3.5 text-gray-400">{row.auto}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-center text-xs text-gray-500">
              <IndianRupee className="-mt-0.5 inline h-3 w-3" /> All Triveni fares are fixed AC-sedan rates with no surge or hidden charges.
            </p>
          </div>
        </section>

        {/* Bus Stand Cards grouped by city — warm-light directory */}
        <section className="bg-gradient-to-b from-[#FFF6DC] via-amber-50/70 to-white px-4 py-16 text-slate-900 md:py-24">
          <div className="mx-auto max-w-7xl sm:px-2 lg:px-4">
            <div className="mx-auto mb-10 sm:mb-16 max-w-3xl text-center">
              <h2 className="font-display-serif text-balance text-[1.7rem] font-black leading-[1.12] tracking-tight text-slate-900 sm:text-4xl">
                Which <span className={FOIL}>bus stand</span> are you arriving at?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-600">Select the bus stand where you are arriving for instant cab service with transparent pricing</p>
            </div>

            {Object.entries(grouped).map(([city, stands]) => (
              <div key={city} className="mb-12">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-amber-300 bg-amber-50">
                    <MapPin className="h-4 w-4 text-amber-600" />
                  </div>
                  <h3 className="font-display-serif text-2xl font-black text-slate-900">{city}</h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-amber-400/40 to-transparent" />
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {stands.map((stand) => (
                    <Link
                      key={stand.slug}
                      href={`/bus-stand-taxi/${stand.slug}`}
                      className="group overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-[0_16px_50px_-30px_rgba(180,130,10,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-[0_20px_60px_-28px_rgba(180,130,10,0.6)]"
                    >
                      {/* Card Header */}
                      <div className="border-b border-amber-100 bg-gradient-to-r from-amber-50 via-[#FFF6DC] to-amber-50 px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-[#FACF2D]/50 bg-white transition-transform group-hover:scale-110">
                            <Bus className="h-6 w-6 text-amber-600" />
                          </div>
                          <div>
                            <h4 className="font-display-serif text-lg font-black text-slate-900 transition-colors group-hover:text-amber-700">{stand.name}</h4>
                            <p className="text-sm text-slate-500">{stand.area}</p>
                          </div>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="px-6 py-5">
                        <p className="mb-4 line-clamp-2 text-sm text-slate-600">{stand.description}</p>

                        <div className="mb-4 space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Users className="h-4 w-4 flex-shrink-0 text-amber-600" />
                            <span className="text-slate-700">{stand.busOperators.length} bus operators</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4 flex-shrink-0 text-amber-600" />
                            <span className="text-slate-700">{stand.destinations.length} popular destinations</span>
                          </div>
                        </div>

                        <div className="mb-4 flex flex-wrap gap-1.5">
                          {stand.destinations.slice(0, 3).map((d, i) => (
                            <span key={i} className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-xs text-amber-800">
                              {d.name}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between border-t border-amber-100 pt-3">
                          <span className="text-sm text-slate-500">From <span className="font-display-serif font-black text-amber-700">{stand.destinations[0]?.fare}</span></span>
                          <span className="inline-flex items-center gap-1 text-sm font-medium text-amber-700 transition-all group-hover:gap-2">
                            View Fares <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Section — dark band */}
        <section className="bg-gradient-to-b from-slate-950 via-amber-950/15 to-slate-950 px-4 py-16 md:py-24">
          <div className="mx-auto max-w-7xl sm:px-2 lg:px-4">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="font-display-serif text-balance text-[1.7rem] font-black leading-[1.12] tracking-tight text-white sm:text-4xl">
                Why Choose <span className={FOIL}>Triveni Cabs™</span> at Bus Stands?
              </h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: 'Pre-Booked Pickup', desc: 'No scrambling for autos or taxis. Your cab is ready before your bus arrives.' },
                { title: 'Fixed Transparent Fares', desc: 'Know your fare upfront. No surge pricing, no meter tampering, no arguments.' },
                { title: '24/7 Service', desc: 'Late night bus? Early morning arrival? We are available round the clock.' },
                { title: 'Verified Professional Drivers', desc: 'Background-checked, licensed drivers who know local routes inside out.' },
                { title: 'AC Comfort After Long Bus Rides', desc: 'Step out of a cramped bus into a clean, air-conditioned sedan or SUV.' },
                { title: 'Outstation Available', desc: 'Not just local - book cabs to any destination across North India.' },
              ].map((feature, i) => (
                <div key={i} className={`${GLASS} p-6 transition-all duration-300 hover:border-amber-400/40`}>
                  <h3 className="font-display-serif mb-2 text-lg font-black text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <InclusionBadges preset="local" theme="dark" />
        <SectionDivider color="emerald" className="my-4" />

        {/* How It Works */}
        <BookingJourney theme="dark" />
        <SectionDivider color="emerald" className="my-4" />

        {/* FAQ Section — warm-light band, two-column grid */}
        <section className="bg-gradient-to-b from-[#FFF6DC] via-amber-50/60 to-white px-4 py-16 text-slate-900 md:py-24">
          <div className="mx-auto max-w-6xl sm:px-2 lg:px-4">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="font-display-serif text-balance text-[1.7rem] font-black leading-[1.12] tracking-tight text-slate-900 sm:text-4xl">
                Frequently Asked <span className={FOIL}>Questions</span>
              </h2>
              <p className="mt-4 text-slate-600">Common queries about our bus stand taxi services</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 md:items-start">
              {hubFaqs.map((faq, i) => (
                <div key={i} className="rounded-2xl border border-amber-200 bg-white p-6 shadow-[0_16px_50px_-30px_rgba(180,130,10,0.45)] transition-all hover:border-amber-300">
                  <h3 className="font-display-serif mb-3 text-lg font-black text-slate-900">{faq.question}</h3>
                  <p className="leading-relaxed text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-Service Links — dark band */}
        <section className="bg-gradient-to-b from-slate-950 via-amber-950/15 to-slate-950 px-4 py-16 md:py-24">
          <div className="mx-auto max-w-7xl sm:px-2 lg:px-4">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="font-display-serif text-balance text-[1.7rem] font-black leading-[1.12] tracking-tight text-white sm:text-4xl">
                Explore More <span className={FOIL}>Travel Services</span>
              </h2>
              <p className="mt-4 text-gray-400">Other ways to travel across India with Triveni Cabs™</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: 'Railway Station Taxi', href: '/railway-station-taxi', desc: 'Taxi at 27+ railway stations' },
                { title: 'One-Way Cabs', href: '/one-way-cab', desc: 'Affordable outstation rides' },
                { title: 'Sightseeing Tours', href: '/sightseeing', desc: 'Explore tourist attractions' },
                { title: 'Tour Packages', href: '/tour-package', desc: 'Multi-day curated tours' },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className={`group ${GLASS} p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/40`}
                >
                  <h3 className="mb-1 font-bold text-white transition-colors group-hover:text-amber-300">{link.title}</h3>
                  <p className="text-sm text-gray-400">{link.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-amber-300 transition-all group-hover:gap-2">
                    Explore <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA — photo banner with gold */}
        <section className="relative overflow-hidden px-4 py-24 md:py-32">
          <Image
            src="/images/sightseeing/Delhi/Delhi_hero_section.jpg"
            alt="Book a bus stand taxi across North India"
            fill
            className="object-cover"
            sizes="100vw"
            quality={80}
          />
          <div className="absolute inset-0 bg-slate-950/80" />
          <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#B8860B] via-[#FACF2D] to-[#FFE9A0]" aria-hidden />

          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <h2 className="font-display-serif mb-4 text-3xl font-black text-white sm:text-5xl">
              Arriving at a <span className={FOIL}>Bus Stand?</span>
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/65">
              Skip the chaos. Book a comfortable, AC cab with fixed fares. Available at 13+ bus stands across India.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:7668570551" className={`${GOLD_BTN} ${CTA_SIZE}`}>
                <Phone className="h-4 w-4" />
                Call 7668570551
              </a>
              <a
                href="https://wa.me/917668570551"
                target="_blank"
                rel="noopener noreferrer"
                className={`${GHOST_BTN} ${CTA_SIZE}`}
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
