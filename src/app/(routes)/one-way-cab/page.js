import Link from 'next/link';
import Image from 'next/image';
import { getCityImage } from '@/utilis/imageUtils';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, IndianRupee, Route, Zap, Navigation } from '@/components/ui/icons';
import { getGeneralContent, getWeddingPages } from '@/utilis/linkingHelper';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import { getArticleSchema, getHowToSchema, getSpeakableSchema, getComparisonSchema, getTodayDate } from '@/lib/seo/speakable-helpers';
import { getAllOneWayRouteSlugs, getOneWayRoute } from '@/utilis/oneWayCabData';
import AEOHead from '@/components/seo/AEOHead';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import TrackedCta from '@/components/ui/TrackedCta';
import SocialProofStrip from '@/components/shared/SocialProofStrip';
import InclusionBadges from '@/components/shared/InclusionBadges';
import SectionDivider from '@/components/shared/SectionDivider';
import FleetShowcase from '@/components/shared/FleetShowcase';
import { tightenTitle } from '@/lib/seo/serp-ctr';
import { canonicalHref } from '@/lib/seo/route-exists';
import { BASE_URL } from '@/lib/seo/constants';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('One Way Cab Service 2026 | Save 50% | Sedan ₹11/km | Book Now'),
  description: 'Book one way cab service and save up to 50% vs round trip. Sedan ₹11/km, SUV ₹15/km. Delhi-Agra, Delhi-Jaipur & 200+ one way routes. Call 7668570551.',
  keywords: 'one way cab, one way taxi, one way cab service, one way cab booking, one way taxi service, one way drop, single direction cab, one way cab Delhi, one way cab Agra, one way cab Jaipur, one way outstation cab, cheap one way cab, affordable one way taxi, one way cab near me, one way cab rates, Delhi to Agra one way, Delhi to Jaipur one way, one way intercity cab, one way cab fare, best one way cab service',
  authors: [{ name: 'Triveni Cabs™' }], creator: 'Triveni Cabs™', publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/one-way-cab' },
  openGraph: { title: 'One Way Cab Service | Save 50% | 200+ Routes | Triveni Cabs', description: 'Book one way cabs and save up to 50%. Sedan ₹11/km, SUV ₹15/km. 200+ one-way routes across India.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/one-way-cab', siteName: 'Triveni Cabs', images: [{ url: '/images/citypage_hero_section_image.jpg', width: 1200, height: 630, alt: 'One Way Cab Service - Triveni Cabs' }] },
  twitter: { card: 'summary_large_image', title: 'One Way Cab Service | Save 50% vs Round Trip | Triveni Cabs™', description: 'Pay only for one direction. Sedan ₹11/km. 200+ one-way routes. Call 7668570551.', creator: '@trivenicabs', site: '@trivenicabs', images: ['/images/citypage_hero_section_image.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function OneWayCabPage() {
  // Service provider references the global LocalBusiness via @id (defined in layout.js)
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "@id": "https://www.trivenicabs.in/one-way-cab/#service", "serviceType": "One Way Cab Service", "name": "One Way Cab Booking by Triveni Cabs - Pay Only One Direction", "brand": { "@type": "Brand", "name": "Triveni Cabs" }, "description": "Book one way cabs across India and save up to 50%. Starting at ₹11/km for Sedan on 200+ routes.", "provider": { "@id": "https://www.trivenicabs.in/#localbusiness" }, "areaServed": { "@type": "Country", "name": "India" }, "offers": { "@type": "AggregateOffer", "lowPrice": "11", "highPrice": "24", "priceCurrency": "INR" }, ...getRatingAndReviews('one-way-cab-hub', 'outstation') };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Outstation Cabs", "item": "https://www.trivenicabs.in/outstation-cabs" }, { "@type": "ListItem", "position": 3, "name": "One Way Cab", "item": "https://www.trivenicabs.in/one-way-cab" }] };
  const faqData = [
    { question: "How much does a one-way cab cost?", answer: "One-way cab rates are Sedan ₹11/km, SUV ₹15/km, and Tempo Traveller from ₹23/km. For example, Delhi to Agra (230 km) one-way costs approximately ₹2,530 in a Sedan. Toll and state tax extra at actual." },
    { question: "How is one-way cab cheaper than round trip?", answer: "In a round trip, you pay for the vehicle both ways even if you only need one direction. With one-way cab, you pay only for pickup to drop-off distance, saving up to 50%." },
    { question: "Can I take luggage in a one-way cab?", answer: "Yes, standard luggage is included. Sedan accommodates 2 large bags + 1 small bag. SUV fits 3 large + 2 small bags. Inform us while booking for special luggage needs." },
    { question: "Can I make stops during a one-way trip?", answer: "Yes, up to 2 stops are allowed on one-way trips at no extra charge, provided they are on the route. Off-route stops may incur additional km charges." },
    { question: "What is the minimum distance for one-way cab?", answer: "Minimum billing for one-way cab is 300 km. For shorter distances (e.g., Delhi to Agra at 230 km), you will be billed for 300 km minimum." },
    { question: "Is one-way cab available for all routes?", answer: "One-way cabs are available on 200+ popular routes including Delhi-Agra, Delhi-Jaipur, Delhi-Chandigarh, Delhi-Haridwar. Call 7668570551 for less common routes." },
    { question: "How do I book a one-way cab?", answer: "Call 7668570551 or WhatsApp with your pickup location, destination, date, and time. Receive an instant quote with fare breakdown. No app download needed." },
    { question: "What is the cancellation policy for one-way cabs?", answer: "Free cancellation up to 6 hours before pickup. 25% charge within 6 hours. 50% charge for no-show." },
    { question: "What does a one-way cab fare per km work out to?", answer: "One-way cab fare is charged at a flat per-km rate: Sedan ₹11/km, SUV (Ertiga) ₹15/km, and Innova ₹18/km, Tempo from ₹23/km, with a 300 km minimum billing. So a 230 km Delhi-Agra trip is billed at 300 km (₹3,300 for a Sedan). There is no separate return dead-mileage charge — you pay only the onward distance, which is what makes one-way up to 50% cheaper than a round trip." },
    { question: "Is a one-way cab cheaper than Ola or Uber for outstation trips?", answer: "Yes, for intercity drops a dedicated one-way cab is usually cheaper and more reliable than Ola/Uber outstation. App-based cabs add surge pricing, return-fare loading, and frequent cancellations on long routes. Our one-way fare is fixed and confirmed upfront (Sedan ₹11/km) with no surge, a verified driver, and FASTag included." },
    { question: "Do one-way cab fares include toll, tax and FASTag?", answer: "The base one-way fare includes fuel, driver allowance, and FASTag handling. Inter-state toll, state border tax, and parking are charged at actual and shown transparently before you confirm. There are no hidden return charges and no GST surprises." },
    { question: "Can I book a one-way cab one way and return by another mode?", answer: "Yes — that is the most common use case. Travellers take a one-way cab to the destination and return by train, flight, or bus. You pay only for the single direction, saving roughly 50% versus a round-trip cab that bills both legs." },
    { question: "Are one-way cabs available for airport drops and pickups?", answer: "Yes. One-way cabs cover airport-to-city and city-to-airport drops across Delhi NCR (IGI T1/T2/T3 with flight tracking), Jaipur, Agra, Chandigarh, Amritsar and more. You can also book a one-way drop from any city to a different city's airport — for example Agra to Delhi IGI." }
  ];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "speakable": getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.speakable-faq-first']), "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };
  const howToSchema = getHowToSchema({
    name: "How to Book a One Way Cab",
    description: "Easy 4-step process to book a one way cab and save up to 50% versus a round trip.",
    totalTime: "PT3M",
    estimatedCost: { currency: "INR", value: "3300" },
    steps: [
      { name: "Share Trip Details", text: "Call or WhatsApp 7668570551 with pickup city, drop city, date, and time." },
      { name: "Get Instant Quote", text: "Receive a detailed one-way fare breakdown within 2 minutes — Sedan ₹11/km, SUV ₹15/km, Tempo from ₹23/km, with toll and state tax shown at actual." },
      { name: "Confirm & Pay", text: "Pay a small advance to lock your ride. The balance is payable to the driver after the trip." },
      { name: "Enjoy One-Way Trip", text: "A verified driver picks you up on time in a clean AC vehicle. Pay only for the one direction — no return charges." }
    ]
  });

  // Article schema — editorial entity for AEO/GEO + freshness signal, Speakable
  // wired to the hero headline, direct-answer lead, and first FAQ answer.
  const articleSchema = getArticleSchema({
    slug: 'one-way-cab',
    headline: 'One Way Cab Service (2026) — Fares Per KM, How It Saves 50%, Routes & Booking Guide',
    description: 'Complete guide to one-way cab booking in India: per-km fares from ₹11/km, the 300 km minimum, how one-way saves up to 50% vs round trip, 200+ routes, and how to book.',
    image: '/images/citypage_hero_section_image.jpg',
    authorName: 'editorial',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first']
  });

  // Comparison schema — one-way vs round-trip savings (Table + Article) for
  // featured-snippet capture; mirrors the visible comparison table below.
  const comparisonRows = [
    { feature: 'Billing model', oneWay: 'Pay only the onward distance', roundTrip: 'Pay for both onward + return legs' },
    { feature: 'Minimum km', oneWay: '300 km per trip', roundTrip: '250 km per day' },
    { feature: 'Delhi to Agra (Sedan)', oneWay: '₹3,300', roundTrip: '₹6,600' },
    { feature: 'Delhi to Jaipur (Sedan)', oneWay: '₹3,300', roundTrip: '₹6,600' },
    { feature: 'Typical saving', oneWay: 'Up to 50% cheaper', roundTrip: 'Higher — pays for empty return' },
    { feature: 'Best for', oneWay: 'One-direction drop, return by train/flight, relocation', roundTrip: 'Multi-day trips needing the car at destination' },
    { feature: 'Local sightseeing at destination', oneWay: 'Not included', roundTrip: 'Included (counts toward km)' },
  ];
  const comparisonSchema = getComparisonSchema({
    slug: 'one-way-cab',
    title: 'One-Way Cab vs Round Trip Cab — How Much Do You Save?',
    description: 'Compare one-way and round-trip cab fares on billing model, minimum km, popular route prices, and when each option is cheaper.',
    rows: comparisonRows,
    mentions: ['One-Way Cab', 'Round Trip Cab', 'Outstation Cab', 'Per-km fare', 'Cab fare savings']
  });

  // Product schema — fleet AggregateOffer for price visibility in search.
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    // Week 53: Merchant listings treats a missing `image` as critical.
    "image": `${BASE_URL}/images/car/swift_dzire.jpg`,
    "name": "One Way Cab Booking — Triveni Cabs (Sedan, SUV, Tempo Traveller)",
    "description": "One way cab fleet across 200+ Indian routes. Sedan from ₹11/km, SUV ₹15/km, Tempo Traveller from ₹23/km. Pay only one direction, save up to 50% vs round trip, doorstep pickup, FASTag included.",
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "category": "One Way Cab Service",
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "11",
      "highPrice": "24",
      "priceCurrency": "INR",
      "offerCount": "3",
      "availability": "https://schema.org/InStock",
      "priceSpecification": {
        "@type": "UnitPriceSpecification",
        "priceCurrency": "INR",
        "unitText": "per kilometer"
      },
      "seller": { "@id": "https://www.trivenicabs.in/#localbusiness" }
    },
    ...getRatingAndReviews('one-way-cab-hub', 'outstation')
  };

  // Build the internal-link grid from REAL /one-way-cab/{slug} routes — any
  // missing slug is auto-dropped so we never emit a broken link.
  // Ordered by the searches the one-way pages actually receive (the 12 Sep
  // export): Dehradun, Haridwar and Nainital first, then the return legs.
  const featuredOneWaySlugs = [
    'delhi-to-dehradun', 'delhi-to-haridwar', 'delhi-to-nainital', 'jaipur-to-delhi',
    'chandigarh-to-delhi', 'delhi-to-manali', 'haridwar-to-delhi', 'chandigarh-to-manali',
    'lucknow-to-delhi', 'vrindavan-to-delhi', 'delhi-to-shimla', 'delhi-to-agra',
    'delhi-to-jaipur', 'delhi-to-chandigarh', 'delhi-to-amritsar', 'delhi-to-rishikesh',
    'agra-to-jaipur', 'jaipur-to-udaipur',
  ];
  const allOneWaySlugs = new Set(getAllOneWayRouteSlugs());
  const dataOneWayRoutes = featuredOneWaySlugs
    .filter((s) => allOneWaySlugs.has(s))
    .map((s) => {
      const r = getOneWayRoute(s);
      return { slug: s, from: r.from, to: r.to, distance: r.distance, time: r.time, sedan: r.oneWayFares.sedan, save: r.savingsPercent };
    });

  // Full directory — EVERY /one-way-cab/[slug] page gets an inbound link from
  // this hub. The featured grid above covers only 12 curated routes; anything
  // added later to the data file was otherwise reachable only via the sitemap.
  const allRoutesDirectory = getAllOneWayRouteSlugs()
    .map((s) => {
      const r = getOneWayRoute(s);
      return { slug: s, from: r.from, to: r.to, sedan: r.oneWayFares?.sedan };
    })
    .sort((a, b) => a.from.localeCompare(b.from) || a.to.localeCompare(b.to));

  const routes = [
    { from: "Delhi", to: "Agra", km: "230", ow: "₹3,300", rt: "₹5,060", save: "₹1,760", href: "/delhi-to-agra" },
    { from: "Delhi", to: "Jaipur", km: "280", ow: "₹3,300", rt: "₹6,160", save: "₹2,860", href: "/delhi-to-jaipur" },
    { from: "Delhi", to: "Chandigarh", km: "250", ow: "₹3,300", rt: "₹5,500", save: "₹2,200", href: "/delhi-to-chandigarh" },
    { from: "Delhi", to: "Haridwar", km: "230", ow: "₹3,300", rt: "₹5,060", save: "₹1,760", href: "/one-way-cab/delhi-to-haridwar" },
    { from: "Delhi", to: "Shimla", km: "350", ow: "₹3,850", rt: "₹7,700", save: "₹3,850", href: "/delhi-to-shimla" },
    { from: "Agra", to: "Jaipur", km: "240", ow: "₹3,300", rt: "₹5,280", save: "₹1,980", href: "/one-way-cab/agra-to-jaipur" },
    { from: "Delhi", to: "Manali", km: "540", ow: "₹5,940", rt: "₹11,880", save: "₹5,940", href: "/one-way-cab/delhi-to-manali" },
    { from: "Delhi", to: "Amritsar", km: "450", ow: "₹4,950", rt: "₹9,900", save: "₹4,950", href: "/delhi-to-amritsar" },
    { from: "Jaipur", to: "Udaipur", km: "395", ow: "₹4,345", rt: "₹8,690", save: "₹4,345", href: "/jaipur-to-udaipur" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      {comparisonSchema.map((s, i) => (
        <script key={`ow-cmp-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <AEOHead pageType="route" data={{ url: '/one-way-cab', title: 'One Way Cab Service India' }} />

      {/* ===== DESIGN: Emerald savings theme with clean white, comparison focus ===== */}
      <div className="min-h-screen bg-[#0A0A0E] text-white">

        {/* ─── HERO: brand-gold + photo ─── */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <Image src="/images/HERO_SECTION_MAIN_PAGE.jpg" alt="One way cab fleet" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-[#0A0A0E]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0E] via-[#0A0A0E]/55 to-transparent" />
          <div className="absolute top-1/4 left-[8%] w-72 h-72 bg-[#FACF2D]/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FACF2D] to-transparent z-10" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 grid lg:grid-cols-2 gap-10 items-center w-full">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#FACF2D]/15 backdrop-blur-sm px-5 py-2 rounded-full mb-8 border border-[#FACF2D]/25">
                <IndianRupee className="w-4 h-4 text-[#FACF2D]" />
                <span className="text-[#FACF2D] font-semibold text-sm">Save Up to 50% vs Round Trip</span>
              </div>
              <h1 className="speakable-headline text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] max-w-3xl">
                One Way Cab<br /><span className="text-transparent bg-gradient-to-r from-[#FACF2D] to-amber-400 bg-clip-text">Pay Single Direction</span>
              </h1>
              <p className="text-lg sm:text-xl text-white/70 mb-10 max-w-2xl">Why pay for both ways? Book one-way cabs from <strong className="text-[#FACF2D]">₹11/km</strong> on 200+ routes.</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <TrackedCta type="call" location="oneway_hub_hero" className="inline-flex items-center gap-2 bg-gradient-to-r from-[#FACF2D] to-amber-500 text-slate-950 px-7 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-[#FACF2D]/25 hover:scale-[1.02] transition-all">
                  <Phone className="w-5 h-5" /> Call: 7668570551
                </TrackedCta>
                <TrackedCta type="whatsapp" location="oneway_hub_hero" href="https://wa.me/917668570551?text=I want to book a one way cab" message="I want to book a one way cab" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-7 py-4 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/15 hover:border-[#FACF2D]/40 transition-all">
                  WhatsApp <ArrowRight className="w-5 h-5" />
                </TrackedCta>
              </div>
            </div>
            {/* Above-fold lead-capture form */}
            <div className="w-full max-w-md mx-auto lg:ml-auto lg:mr-0">
              <QuickEnquiryForm pageType="route" />
            </div>
          </div>
        </section>

        {/* Social Proof Strip */}
        <SocialProofStrip theme="dark" />

        {/* ─── OVERVIEW: SEO prose content section ─── */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 relative">
          <div className="max-w-4xl mx-auto">
            {/* Direct-answer lead box — voice/AI answer target (.speakable-lead) */}
            <div className="speakable-lead bg-white/5 rounded-2xl border border-[#FACF2D]/25/70 shadow-[0_4px_24px_rgba(16,185,129,0.06)] p-6 md:p-8 mb-12">
              <p className="text-slate-200 text-base md:text-lg leading-relaxed">
                A <strong>one-way cab</strong> is an intercity taxi booked for a single direction only — you pay only for the pickup-to-drop distance, with <strong>no charge for the empty return leg</strong>. One-way cab fares are charged per kilometre — <strong>Sedan ₹11/km, SUV ₹15/km, Tempo Traveller from ₹23/km</strong> — with a <strong>300 km minimum billing</strong>. Because a round trip bills both legs, a one-way cab is <strong>up to 50% cheaper</strong>: a Delhi to Agra one-way Sedan is about <strong>₹3,300</strong> versus ₹6,600 round trip. One-way cabs run on 200+ routes across Delhi, Agra, Jaipur, Chandigarh, Shimla, Manali, Haridwar and Amritsar, and are ideal when you return by train or flight, relocate, or only need a single drop. Toll, parking and state tax are extra at actual; FASTag and a verified driver are included.
              </p>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-center mb-8 text-white">
              One-Way Cab Service — Pay Only for the Distance You Travel
            </h2>
            <div className="space-y-5 text-slate-300 text-lg leading-relaxed">
              <p>Tired of paying for a return trip you will never take? Our <strong className="text-white">one-way cab service</strong> lets you book an intercity taxi for a single direction — Delhi to Agra, Jaipur to Udaipur, Chandigarh to Manali, or any of 500+ routes across North India. You pay only for the kilometres you travel, saving up to 50% compared to traditional round-trip cab fares.</p>
              <p>Triveni Cabs™ pioneered affordable <strong className="text-white">one-way taxi booking</strong> in the Agra-Delhi-Jaipur triangle. Starting at just ₹11 per kilometre for sedans, our transparent pricing model includes driver allowance, fuel, and basic insurance. Toll charges, state taxes, and parking are charged at actual — displayed clearly before you confirm. No hidden charges, no surge pricing, no unpleasant surprises at the end of your journey.</p>
              <p>Our <strong className="text-white">one-way cab booking</strong> is perfect for one-sided trips: relocating between cities, catching a flight from a different city, attending a wedding or event, or simply travelling where you do not need a return ride. With 300 km minimum billing and a verified, professional driver at the wheel, every one-way trip with Triveni Cabs™ is safe, comfortable, and budget-friendly.</p>
              <p>Students moving to college, professionals relocating for work, tourists heading from Delhi to the Taj Mahal, families travelling for festivals — thousands of travellers book <strong className="text-white">one-way cabs</strong> with us every month. Call or WhatsApp 7668570551 for an instant quote on your route.</p>
            </div>
          </div>
        </section>

        {/* ─── SAVINGS TABLE ─── */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 -mt-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-[#FACF2D] font-semibold text-sm tracking-widest uppercase">See The Difference</span>
              <h2 className="text-4xl md:text-5xl font-black mt-2">One-Way vs Round Trip</h2>
              <p className="text-slate-400 mt-3">Sedan rates (₹11/km). Your actual savings on popular routes.</p>
            </div>
            <div className="bg-white/5 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-white/10 overflow-hidden">
              <div className="grid grid-cols-12 bg-gradient-to-r from-[#FACF2D] to-amber-500 text-white">
                <div className="col-span-3 px-5 py-4 font-bold text-sm">Route</div>
                <div className="col-span-2 px-4 py-4 font-bold text-sm text-center">Distance</div>
                <div className="col-span-2 px-4 py-4 font-bold text-sm text-center">One-Way</div>
                <div className="col-span-2 px-4 py-4 font-bold text-sm text-center">Round Trip</div>
                <div className="col-span-3 px-4 py-4 font-bold text-sm text-center">You Save</div>
              </div>
              {routes.map((r, i) => (
                <Link key={i} href={canonicalHref(r.href)} className="group block">
                  <div className={`grid grid-cols-12 border-b border-white/10 hover:bg-white/[0.03] transition-colors ${i % 2 ? 'bg-white/[0.03]' : ''}`}>
                    <div className="col-span-3 px-5 py-4 font-bold text-white group-hover:text-[#FACF2D] transition-colors flex items-center gap-1">{r.from} <ArrowRight className="w-3 h-3 text-slate-500" /> {r.to}</div>
                    <div className="col-span-2 px-4 py-4 text-center text-slate-400">{r.km} km</div>
                    <div className="col-span-2 px-4 py-4 text-center font-bold text-[#FACF2D]">{r.ow}</div>
                    <div className="col-span-2 px-4 py-4 text-center text-slate-500 line-through">{r.rt}</div>
                    <div className="col-span-3 px-4 py-4 text-center"><span className="inline-flex items-center gap-1 bg-[#FACF2D]/15 text-[#FACF2D] px-3 py-1 rounded-full text-sm font-bold">{r.save} saved</span></div>
                  </div>
                </Link>
              ))}
            </div>
            <p className="text-slate-500 text-xs mt-4 text-center">Min 300 km billing. Toll, parking, state tax extra at actual.</p>
          </div>
        </section>

        {/* ─── ONE-WAY vs ROUND TRIP: Visible comparison table (grounds Comparison schema) ─── */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white/[0.03]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#FACF2D] font-semibold text-sm tracking-widest uppercase">Compare</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-4">One-Way Cab vs Round Trip — How Much Do You Save?</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">One-way wins for a single-direction drop. Round trip wins when you need the car at your destination for 1-3 days.</p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-[#FACF2D]/20 shadow-[0_4px_24px_rgba(16,185,129,0.06)]">
              <table className="w-full text-sm text-left bg-white/5">
                <caption className="sr-only">Comparison of one-way cab versus round trip cab on billing model, minimum kilometres, popular route fares and when each is cheaper</caption>
                <thead>
                  <tr className="bg-gradient-to-r from-[#FACF2D] to-amber-500 text-white">
                    <th scope="col" className="px-4 py-3.5 font-bold">Feature</th>
                    <th scope="col" className="px-4 py-3.5 font-bold text-amber-100">One-Way Cab</th>
                    <th scope="col" className="px-4 py-3.5 font-bold text-amber-100">Round Trip Cab</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { f: "Billing model", ow: "Pay only the onward distance", rt: "Pay for both onward + return legs" },
                    { f: "Minimum km", ow: "300 km per trip", rt: "250 km per day" },
                    { f: "Delhi to Agra (Sedan)", ow: "₹3,300", rt: "₹6,600" },
                    { f: "Delhi to Jaipur (Sedan)", ow: "₹3,300", rt: "₹6,600" },
                    { f: "Typical saving", ow: "Up to 50% cheaper", rt: "Higher — pays for empty return" },
                    { f: "Best for", ow: "One-direction drop, relocation, return by train/flight", rt: "Multi-day trips needing the car at destination" },
                    { f: "Local sightseeing at destination", ow: "Not included", rt: "Included (counts toward km)" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white/5" : "bg-white/[0.03]"}>
                      <th scope="row" className="px-4 py-3 font-semibold text-white align-top">{row.f}</th>
                      <td className="px-4 py-3 text-[#FACF2D] font-medium align-top">{row.ow}</td>
                      <td className="px-4 py-3 text-slate-400 align-top">{row.rt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-400 mt-4 text-center">
              Need the car for sightseeing too? Compare full pricing on <Link href="/round-trip-cab" className="text-[#FACF2D] hover:text-[#FACF2D] underline underline-offset-2">round trip cabs</Link> or call <a href="tel:+917668570551" className="text-[#FACF2D] font-semibold">7668570551</a> for a side-by-side quote.
            </p>
          </div>
        </section>

        {/* ─── HOW ONE-WAY SAVES YOU MONEY ─── */}
        <section className="py-12 sm:py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-[#FACF2D] font-semibold text-sm tracking-widest uppercase">The Maths</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-2">How Does a One-Way Cab Save You Money?</h2>
            </div>
            <div className="space-y-5 text-slate-300 text-lg leading-relaxed">
              <p>The reason one-way cabs are cheaper is simple: <strong className="text-white">you do not pay for the empty return leg</strong>. In a traditional round-trip booking, the operator charges you for the vehicle to travel both ways — even if you only sit in it one way. On a Delhi to Agra trip that means paying for 460 km (230 km each way). With a one-way cab, you are billed only for the onward 230 km (300 km at the minimum), so the fare roughly halves.</p>
              <p>Here is a worked example on the Sedan rate of ₹11/km: a <strong className="text-white">round-trip Delhi-Agra Sedan is ₹6,600</strong> (460 km billed both ways plus return positioning). A <strong className="text-white">one-way Delhi-Agra Sedan is ₹3,300</strong> (300 km minimum). That is a clean <strong className="text-[#FACF2D]">₹3,300 saving — exactly 50%</strong> — for the same vehicle, same verified driver, and the same FASTag-included comfort.</p>
              <p>The savings grow on longer routes. Delhi to Manali (540 km) one-way bills the full distance one direction instead of doubling it, and Delhi to Amritsar (450 km) one-way saves you the entire 450 km return charge. As a rule of thumb, <strong className="text-white">book one-way whenever you are not returning along the same road within 1-3 days</strong> — for example when you fly back, take a train, continue onward to another city, or relocate permanently.</p>
            </div>
          </div>
        </section>

        {/* ─── POPULAR ONE-WAY ROUTES: Real /one-way-cab/{slug} internal-link grid ─── */}
        {dataOneWayRoutes.length > 0 && (
          <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white/[0.03]">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-[#FACF2D] font-semibold text-sm tracking-widest uppercase">Book By Route</span>
                <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-4">Popular One-Way Cab Routes With Live Fares</h2>
                <p className="text-lg text-slate-400 max-w-2xl mx-auto">Tap any route for a dedicated page with fare breakdown, pickup points, things to do and route FAQs.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {dataOneWayRoutes.map((r, idx) => (
                  <Link key={idx} href={canonicalHref(`/one-way-cab/${r.slug}`)} className="group block overflow-hidden bg-white/5 rounded-2xl border border-white/10 hover:border-[#FACF2D]/30 hover:shadow-[0_8px_32px_rgba(250,207,45,0.1)] transition-all">
                    <div className="relative h-32 w-full overflow-hidden">
                      <Image src={getCityImage(r.to)} alt={`${r.from} to ${r.to} one way cab`} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0E] via-[#0A0A0E]/30 to-transparent" />
                      <div className="absolute left-3 top-3 p-2 bg-black/45 rounded-xl backdrop-blur-sm"><Route className="w-4 h-4 text-[#FACF2D]" /></div>
                      <span className="absolute right-3 top-3 rounded-full bg-black/45 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#FACF2D] backdrop-blur-sm">Save {r.save}</span>
                    </div>
                    <div className="p-5">
                    <h3 className="font-bold text-white group-hover:text-[#FACF2D] transition-colors">{r.from} to {r.to} One Way</h3>
                    <p className="text-xs text-slate-500 mt-1">{r.distance} · {r.time}</p>
                    <div className="flex items-center justify-between pt-3 mt-3 border-t border-white/10">
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider">Sedan from</span>
                        <div className="text-lg font-black text-[#FACF2D]">{r.sedan}</div>
                      </div>
                      <span className="bg-white/5 text-[#FACF2D] px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1 group-hover:bg-[#FACF2D]/15 transition-colors">View <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                    </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── ALL ROUTES DIRECTORY: inbound link to every route page ─── */}
        <section className="py-10 sm:py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-[#FACF2D] font-semibold text-sm tracking-widest uppercase">Complete Coverage</span>
              <h2 className="text-3xl md:text-4xl font-black text-white mt-2 mb-3">All {allRoutesDirectory.length} One-Way Cab Routes</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Every route below has a dedicated page with live fares, pickup points, toll details, seasonal tips and FAQs.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-1">
              {allRoutesDirectory.map((r) => (
                <Link key={r.slug} href={canonicalHref(`/one-way-cab/${r.slug}`)} className="flex items-baseline justify-between gap-2 text-sm text-slate-300 hover:text-[#FACF2D] py-1.5 border-b border-white/5 transition-colors">
                  <span className="truncate">{r.from} to {r.to}</span>
                  <span className="text-slate-500 whitespace-nowrap text-xs">{r.sedan}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS: Vertical numbered steps ─── */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-white/[0.03]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-[#FACF2D] font-semibold text-sm tracking-widest uppercase">Easy Process</span>
              <h2 className="text-4xl md:text-5xl font-black mt-2">How It Works</h2>
            </div>
            <div className="space-y-0 relative">
              <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-[#FACF2D] via-amber-400 to-amber-300" />
              {[
                { n: "1", t: "Share Trip Details", d: "Call or WhatsApp 7668570551 with pickup city, drop city, date, and time." },
                { n: "2", t: "Get Instant Quote", d: "Detailed fare breakdown with per-km rate, distance, and total cost in 2 minutes." },
                { n: "3", t: "Confirm Booking", d: "Small advance to lock your ride. Rest payable to driver after trip." },
                { n: "4", t: "Travel One-Way", d: "Verified driver, clean AC vehicle. Enjoy your one-way journey!" },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 pb-10 last:pb-0 relative">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#FACF2D] to-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-[#FACF2D]/20 relative z-10">
                    <span className="text-white font-black text-xl">{step.n}</span>
                  </div>
                  <div className="pt-2"><h3 className="font-bold text-xl text-white mb-1">{step.t}</h3><p className="text-slate-400">{step.d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CHOOSE GUIDE ─── */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 bg-white/[0.03]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14"><h2 className="text-4xl md:text-5xl font-black">Which Is Right For You?</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-3xl p-8 shadow-lg border-2 border-[#FACF2D]/25 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#FACF2D]/15 rounded-bl-[3rem]" />
                <div className="relative">
                  <span className="inline-block bg-[#FACF2D]/15 text-[#FACF2D] px-4 py-1.5 rounded-full text-sm font-bold mb-4">Recommended</span>
                  <h3 className="text-2xl font-black text-white mb-4">Choose One-Way When</h3>
                  <ul className="space-y-3">
                    {["Returning by train or flight", "Relocating or one-time travel", "Different return date planned", "Budget is a top priority", "No need for cab at destination"].map((t, j) => (
                      <li key={j} className="flex items-center gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" /> {t}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-white/5 rounded-3xl p-8 shadow-md border border-white/10">
                <h3 className="text-2xl font-black text-white mb-4">Choose Round Trip When</h3>
                <ul className="space-y-3 mb-6">
                  {["Need cab at destination too", "Multi-day with sightseeing", "Want same driver both ways", "Family trip with stops", "Flexible schedule needed"].map((t, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-300"><CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" /> {t}</li>
                  ))}
                </ul>
                <Link href="/round-trip-cab" className="inline-flex items-center gap-1 text-[#FACF2D] font-bold hover:text-[#FACF2D] text-sm">Explore Round Trip <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <InclusionBadges preset="outstation" theme="dark" />

        {/* Fleet Showcase */}
        <FleetShowcase
          theme="dark"
          accentColor="emerald"
          title="Available Vehicles"
          subtitle="One-Way Fleet"
          whatsappMessage="Hi, I'd like to book a one-way cab."
        />

        <SectionDivider color="gray" className="my-4" />

        {/* ─── BENEFITS ─── */}
        <section className="py-12 sm:py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-[#FACF2D] font-semibold text-sm tracking-widest uppercase">Why One-Way</span>
              <h2 className="text-4xl md:text-5xl font-black mt-2">Smart Savings, Zero Compromise</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: IndianRupee, t: "Save Up to 50%", d: "Pay only for one direction. Biggest savings on long routes.", color: "bg-white/5 border-[#FACF2D]/20 text-[#FACF2D]" },
                { icon: Route, t: "200+ Routes", d: "Delhi, Agra, Jaipur, Shimla, Manali, Chandigarh & more.", color: "bg-blue-50 border-blue-100 text-blue-600" },
                { icon: Shield, t: "Verified Drivers", d: "Background-checked, GPS-tracked, 5+ years experience.", color: "bg-purple-50 border-purple-100 text-purple-600" },
                { icon: Clock, t: "Flexible Timing", d: "Any hour. No surge pricing, no restrictions.", color: "bg-amber-50 border-amber-100 text-amber-600" },
                { icon: Car, t: "Vehicle Options", d: "Sedan ₹11/km, SUV ₹15/km, Tempo from ₹23/km.", color: "bg-cyan-50 border-cyan-100 text-cyan-600" },
                { icon: Zap, t: "Instant Booking", d: "2-minute booking via call or WhatsApp.", color: "bg-rose-50 border-rose-100 text-rose-600" },
              ].map((item, i) => (
                <div key={i} className={`${item.color} rounded-2xl p-6 border hover:shadow-lg hover:scale-[1.02] transition-all`}>
                  <item.icon className="w-8 h-8 mb-4" />
                  <h3 className="font-bold text-lg text-white mb-2">{item.t}</h3>
                  <p className="text-slate-400 text-sm">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-white/[0.03]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-[#FACF2D] font-semibold text-sm tracking-widest uppercase">Questions?</span>
              <h2 className="text-4xl md:text-5xl font-black mt-2">FAQs</h2>
            </div>
            <div className="space-y-3">
              {faqData.map((faq, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-6 shadow-sm border border-white/10 hover:shadow-md hover:border-[#FACF2D]/20 transition-all">
                  <h3 className="font-bold text-white mb-2 flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-[#FACF2D]/15 text-[#FACF2D] rounded-lg flex items-center justify-center text-xs font-black">{i + 1}</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className={`text-slate-400 text-sm leading-relaxed ml-10${i === 0 ? ' speakable-faq-first' : ''}`}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SEO Prose Section with Contextual Links ─── */}
        <section className="py-10 sm:py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6 text-center">One-Way Cab Service — Pay Only for the Distance You Travel</h2>
            <div className="space-y-4 text-slate-300 text-lg leading-relaxed">
              <p>
                Why pay for a <Link href="/round-trip-cab" className="text-[#FACF2D] hover:text-[#FACF2D] underline underline-offset-2">round trip</Link> when you only need to travel one direction? Triveni Cabs™&#39; <strong className="text-white">one-way cab service</strong> lets you save up to 50% on intercity travel. With <Link href="/reviews" className="text-[#FACF2D] hover:text-[#FACF2D] underline underline-offset-2">4.8-star ratings from 2,847+ customers</Link>, our one-way cabs cover 200+ routes across <Link href="/delhi" className="text-[#FACF2D] hover:text-[#FACF2D] underline underline-offset-2">Delhi</Link>, <Link href="/agra" className="text-[#FACF2D] hover:text-[#FACF2D] underline underline-offset-2">Agra</Link>, <Link href="/jaipur" className="text-[#FACF2D] hover:text-[#FACF2D] underline underline-offset-2">Jaipur</Link>, <Link href="/chandigarh" className="text-[#FACF2D] hover:text-[#FACF2D] underline underline-offset-2">Chandigarh</Link>, and beyond.
              </p>
              <p>
                Every one-way cab comes with a <Link href="/safety" className="text-[#FACF2D] hover:text-[#FACF2D] underline underline-offset-2">verified professional driver</Link>, AC vehicle, GPS tracking, and zero hidden charges. Sedan at ₹11/km, SUV at ₹15/km — check the <Link href="/pricing" className="text-[#FACF2D] hover:text-[#FACF2D] underline underline-offset-2">full fare chart</Link> or read our <Link href="/blog/delhi-to-agra-cab-fare-guide-2026" className="text-[#FACF2D] hover:text-[#FACF2D] underline underline-offset-2">Delhi to Agra cab fare guide</Link> for a detailed cost breakdown. Need a cab for your entire trip instead? Our <Link href="/outstation-cabs" className="text-[#FACF2D] hover:text-[#FACF2D] underline underline-offset-2">outstation cab service</Link> covers 500+ routes.
              </p>
              <p>
                Perfect for travelers catching a return flight, train, or simply relocating. Combine with our <Link href="/airport-service" className="text-[#FACF2D] hover:text-[#FACF2D] underline underline-offset-2">airport transfer service</Link> for door-to-terminal convenience. For groups, our <Link href="/tempo-traveller" className="text-[#FACF2D] hover:text-[#FACF2D] underline underline-offset-2">tempo travellers</Link> are available on one-way routes too. Planning a <Link href="/same-day-agra-tour-from-delhi" className="text-[#FACF2D] hover:text-[#FACF2D] underline underline-offset-2">same-day Agra tour</Link> or <Link href="/weekend-getaways-from-delhi-by-car" className="text-[#FACF2D] hover:text-[#FACF2D] underline underline-offset-2">weekend getaway from Delhi</Link>? Call <strong className="text-white">7668570551</strong> or WhatsApp for an instant quote.
              </p>
            </div>
          </div>
        </section>

        {/* ─── DYNAMIC: Travel Guides & Wedding Services ─── */}
        <section className="py-10 sm:py-16 px-4 sm:px-6 bg-white/[0.03]">
          <div className="max-w-7xl mx-auto space-y-14">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Travel Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {getGeneralContent().map((item, index) => (
                  <Link key={index} href={item.url} className="group block bg-white/5 rounded-xl p-5 border border-white/10 hover:border-[#FACF2D]/30 hover:shadow-md transition-all">
                    <h3 className="font-semibold text-white group-hover:text-[#FACF2D] transition-colors">{item.title}</h3>
                    <p className="text-slate-400 text-sm mt-1">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Wedding Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {getWeddingPages().map((item, index) => (
                  <Link key={index} href={item.url} className="group block bg-white/5 rounded-xl p-5 border border-white/10 hover:border-[#FACF2D]/30 hover:shadow-md transition-all">
                    <h3 className="font-semibold text-white group-hover:text-[#FACF2D] transition-colors">{item.title}</h3>
                    <p className="text-slate-400 text-sm mt-1">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── INTERLINKS: Comprehensive footer-style grids ─── */}
        <section className="py-10 sm:py-16 px-4 sm:px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto space-y-12">

            {/* Related Services */}
            <div>
              <h2 className="text-sm font-bold text-[#FACF2D] mb-5 tracking-widest uppercase">Related Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { l: "Round Trip Cab Booking", h: "/round-trip-cab", d: "Same driver for multi-day return trips" },
                  { l: "Outstation Cab Booking", h: "/outstation-cabs", d: "Intercity travel from ₹11/km" },
                  { l: "Local Taxi Hourly Rental", h: "/local-taxi", d: "Hourly packages from ₹1,200" },
                  { l: "Airport Transfer Service", h: "/airport-service", d: "Flight-tracked pickups & drops" },
                  { l: "Wedding Car Rental", h: "/wedding", d: "Decorated luxury cars for weddings" },
                  { l: "Corporate Transportation", h: "/corporate-transportation-service", d: "Employee transport & business travel" },
                ].map((s, i) => (
                  <Link key={i} href={s.h} className="block bg-white/5 rounded-xl p-4 border border-white/10 hover:border-[#FACF2D]/30 hover:shadow-md transition-all group">
                    <span className="font-semibold text-sm text-slate-200 group-hover:text-[#FACF2D] transition-colors">{s.l}</span>
                    <span className="block text-xs text-slate-500 mt-1">{s.d}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular One-Way Routes */}
            <div>
              <h2 className="text-sm font-bold text-slate-500 mb-4 tracking-widest uppercase">Popular One-Way Routes</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { l: "Delhi to Agra One-Way", h: "/delhi-to-agra" },
                  { l: "Delhi to Jaipur One-Way", h: "/delhi-to-jaipur" },
                  { l: "Delhi to Chandigarh One-Way", h: "/delhi-to-chandigarh" },
                  { l: "Delhi to Haridwar One-Way", h: "/one-way-cab/delhi-to-haridwar" },
                  { l: "Delhi to Shimla One-Way", h: "/delhi-to-shimla" },
                  { l: "Delhi to Manali One-Way", h: "/one-way-cab/delhi-to-manali" },
                  { l: "Delhi to Amritsar One-Way", h: "/delhi-to-amritsar" },
                  { l: "Agra to Jaipur One-Way", h: "/one-way-cab/agra-to-jaipur" },
                  { l: "Jaipur to Udaipur One-Way", h: "/jaipur-to-udaipur" },
                  { l: "Delhi to Rishikesh One-Way", h: "/delhi-to-rishikesh" },
                ].map((r, i) => (
                  <Link key={i} href={r.h} className="bg-white/5 hover:bg-white/5 border border-white/10 hover:border-[#FACF2D]/30 text-slate-400 hover:text-[#FACF2D] px-4 py-2 rounded-full text-xs font-medium transition-all">{r.l}</Link>
                ))}
              </div>
            </div>

            {/* Popular Cities */}
            <div>
              <h2 className="text-sm font-bold text-slate-500 mb-4 tracking-widest uppercase">Popular Cities</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { l: "Delhi Cab Service", h: "/delhi" }, { l: "Agra Cab Service", h: "/agra" }, { l: "Jaipur Cab Service", h: "/jaipur" },
                  { l: "Chandigarh Cab Service", h: "/chandigarh" }, { l: "Shimla Cab Service", h: "/shimla" }, { l: "Manali Cab Service", h: "/manali" },
                  { l: "Haridwar Cab Service", h: "/haridwar" }, { l: "Rishikesh Cab Service", h: "/rishikesh" }, { l: "Amritsar Cab Service", h: "/amritsar" },
                  { l: "Udaipur Cab Service", h: "/udaipur" },
                ].map((c, i) => (
                  <Link key={i} href={c.h} className="bg-white/5 hover:bg-white/5 border border-white/10 hover:border-[#FACF2D]/30 text-slate-400 hover:text-[#FACF2D] px-4 py-2 rounded-full text-xs font-medium transition-all">{c.l}</Link>
                ))}
              </div>
            </div>

            {/* Popular Tours */}
            <div>
              <h2 className="text-sm font-bold text-slate-500 mb-4 tracking-widest uppercase">Popular Tours</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { l: "Same Day Agra Tour", h: "/same-day-agra-tour-from-delhi" },
                  { l: "Golden Triangle Tour", h: "/sightseeing/golden-triangle-tour-3-days" },
                  { l: "Taj Mahal Sunrise Tour", h: "/sunrise-taj-mahal-tour-from-delhi" },
                  { l: "Rajasthan Circuit Tour", h: "/sightseeing/rajasthan-tour-from-delhi" },
                  { l: "Weekend Getaways from Delhi", h: "/weekend-getaways-from-delhi-by-car" },
                  { l: "Delhi to Agra Fare Guide", h: "/blog/delhi-to-agra-cab-fare-guide-2026" },
                ].map((t, i) => (
                  <Link key={i} href={t.h} className="bg-white/5 hover:bg-white/5 border border-white/10 hover:border-[#FACF2D]/30 text-slate-400 hover:text-[#FACF2D] px-4 py-2 rounded-full text-xs font-medium transition-all">{t.l}</Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-sm font-bold text-slate-500 mb-4 tracking-widest uppercase">Quick Links</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { l: "Pricing & Fare Chart", h: "/pricing" }, { l: "Vehicle Fleet", h: "/vehicles" },
                  { l: "Customer Reviews", h: "/reviews" }, { l: "Safety Standards", h: "/safety" },
                  { l: "Tempo Traveller", h: "/tempo-traveller" }, { l: "Contact Us", h: "/contact" },
                ].map((q, i) => (
                  <Link key={i} href={q.h} className="bg-white/5 hover:bg-white/5 border border-white/10 hover:border-[#FACF2D]/30 text-slate-400 hover:text-[#FACF2D] px-4 py-2 rounded-full text-xs font-medium transition-all">{q.l}</Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-12 sm:py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-[#FACF2D] to-amber-600 rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-[#FACF2D]/10 rounded-full blur-[100px]" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Save 50% on Your Next Trip</h2>
                <p className="text-white/60 mb-10 text-lg">Instant one-way fare quotes on 200+ routes</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <TrackedCta type="call" location="oneway_hub_footer" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#FACF2D] to-amber-400 text-slate-950 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-[#FACF2D]/20 hover:scale-[1.02] transition-all"><Phone className="w-5 h-5" /> Call: 7668570551</TrackedCta>
                  <TrackedCta type="whatsapp" location="oneway_hub_footer" href="https://wa.me/917668570551?text=I want to book a one way cab" message="I want to book a one way cab" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/15 transition-all">WhatsApp <ChevronRight className="w-5 h-5" /></TrackedCta>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
