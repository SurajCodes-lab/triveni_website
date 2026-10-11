import Link from 'next/link';
import Image from 'next/image';
import { getCityImage } from '@/utilis/imageUtils';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, IndianRupee, Calendar, Route } from '@/components/ui/icons';
import { getGeneralContent, getWeddingPages } from '@/utilis/linkingHelper';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import { getArticleSchema, getHowToSchema, getSpeakableSchema, getComparisonSchema, getTodayDate } from '@/lib/seo/speakable-helpers';
import { getAllRoundTripSlugs, getRoundTripRoute } from '@/utilis/roundTripData';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import TrackedCta from '@/components/ui/TrackedCta';
import { tightenTitle } from '@/lib/seo/serp-ctr';
import { canonicalHref } from '@/lib/seo/route-exists';
import { BASE_URL } from '@/lib/seo/constants';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Round Trip Cab 2026 | Same Driver | Sedan ₹11/km'),
  description: 'Book round trip cabs with same driver for multi-day trips. Sedan ₹11/km, SUV ₹15/km. Delhi-Agra, Delhi-Jaipur & 500+ routes. Flexible schedules.',
  keywords: 'round trip cab, round trip taxi, round trip cab booking, return cab, round trip taxi service, multi-day cab, round trip outstation cab, round trip cab rates, round trip cab with driver, same driver cab, Delhi to Agra round trip, Delhi to Jaipur round trip, round trip cab near me, cheap round trip cab, affordable round trip taxi, family cab booking, vacation cab rental, round trip cab Delhi, round trip cab Agra, round trip cab Jaipur',
  authors: [{ name: 'Triveni Cabs™' }],
  creator: 'Triveni Cabs™',
  publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: {
    canonical: '/round-trip-cab',
  },
  openGraph: {
    title: 'Round Trip Cab Booking | Same Driver | Multi-Day Trips',
    description: 'Book round trip cabs with same driver throughout your trip. Sedan ₹11/km. Multi-day packages. Flexible schedules. 500+ routes.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/round-trip-cab',
    siteName: 'Triveni Cabs™',
    images: [
      {
        url: '/images/citypage_hero_section_image.jpg',
        width: 1200,
        height: 630,
        alt: 'Round Trip Cab Booking - Triveni Cabs'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Round Trip Cab | Same Driver | Multi-Day | Triveni Cabs™',
    description: 'Round trip cabs from ₹11/km. Same driver, flexible schedule, multi-day trips. 500+ routes. Call 7668570551.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/citypage_hero_section_image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RoundTripCabPage() {
  // Service provider references the global LocalBusiness via @id (defined in layout.js)
  // instead of duplicating the NAP block — cleaner @graph semantics.
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.trivenicabs.in/round-trip-cab/#service",
    "serviceType": "Round Trip Cab Booking Service",
    "name": "Round Trip Cab Booking by Triveni Cabs - Multi-Day with Same Driver",
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "description": "Book round trip cabs across India starting at ₹11/km. Same driver throughout your trip, multi-day packages, flexible schedules on 500+ routes.",
    "provider": { "@id": "https://www.trivenicabs.in/#localbusiness" },
    "areaServed": { "@type": "Country", "name": "India" },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "11",
      "highPrice": "24",
      "priceCurrency": "INR"
    },
    ...getRatingAndReviews('round-trip-cab-hub', 'outstation')
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Outstation Cabs", "item": "https://www.trivenicabs.in/outstation-cabs" },
      { "@type": "ListItem", "position": 3, "name": "Round Trip Cab", "item": "https://www.trivenicabs.in/round-trip-cab" }
    ]
  };

  const faqData = [
    {
      question: "How is round trip cab pricing calculated?",
      answer: "Round trip cab pricing is calculated per-km with a minimum of 250 km per day. Sedan costs ₹11/km, SUV ₹15/km, Tempo Traveller from ₹23/km. For a 2-day trip, minimum billing is 500 km (250 x 2). Driver allowance of ₹300/night applies for overnight trips."
    },
    {
      question: "Does the driver stay with me during a multi-day round trip?",
      answer: "Yes, the same driver stays with you throughout your multi-day round trip. The driver arranges their own accommodation (driver allowance of ₹300/night covers this). You get a familiar, trusted driver for the entire journey."
    },
    {
      question: "Can I change my itinerary during a round trip?",
      answer: "Yes, round trips offer complete flexibility. You can add stops, change routes, or extend your trip. Extra km will be charged at the applicable per-km rate. Just inform your driver about changes as they happen."
    },
    {
      question: "What is included in a round trip cab fare?",
      answer: "Round trip fare includes vehicle hire, fuel, driver charges, and usage within the km limit. Toll charges, state taxes, parking fees, and driver night allowance (₹300/night for overnight trips) are extra and charged at actual."
    },
    {
      question: "Is round trip cheaper than booking two one-way cabs?",
      answer: "For multi-day trips where you need the car at your destination, round trip is more economical. You get the same driver, no waiting for a new cab, and the 250 km/day minimum is lower than one-way's 300 km minimum. Plus, you have the car available throughout."
    },
    {
      question: "Can I use the cab for local sightseeing at my destination?",
      answer: "Absolutely! That is the biggest advantage of round trip. Your driver and vehicle are available for local sightseeing, shopping, and exploring. All km used will be counted toward your total billing."
    },
    {
      question: "How far in advance should I book a round trip cab?",
      answer: "We recommend booking 1-2 days in advance for regular routes and 3-5 days for peak season, holidays, and popular tourist destinations. For group trips with tempo travellers, book at least a week ahead. Call 7668570551."
    },
    {
      question: "What if I want to extend my round trip by extra days?",
      answer: "You can extend your trip on the go. Just inform the driver or call our support at 7668570551. Extra days are billed at 250 km/day minimum at your vehicle's per-km rate plus driver night allowance. No rebooking needed."
    },
    {
      question: "When is a round trip cab cheaper than booking two one-way cabs?",
      answer: "A round trip cab is cheaper than two one-way cabs whenever you need the vehicle at your destination for sightseeing or whenever you are returning along the same route within a few days. One-way cabs each carry a 300 km minimum and a return dead-mileage charge, so two one-ways for a 230 km route bill roughly 600+ km. A round trip bills the actual distance plus a 250 km/day minimum and applies a 10% round trip discount, usually working out 20-35% cheaper for 1-3 day trips."
    },
    {
      question: "What is the minimum kilometre charge per day on a round trip cab?",
      answer: "Round trip cabs are billed at a minimum of 250 km per day. If your actual distance is lower, you are still charged for 250 km that day; if it is higher, you pay for the actual kilometres driven. This minimum keeps the driver and vehicle dedicated to you for the full day, including waiting and local sightseeing."
    },
    {
      question: "Is the driver night halt (night charge) included in the round trip fare?",
      answer: "No. The driver night halt allowance of ₹300 per night is charged separately at actual for any overnight round trip. It covers the driver's food and lodging at the destination. Day-only round trips with no overnight stay have no night charge. Toll, parking and state taxes are also extra at actual."
    },
    {
      question: "Which vehicles are available for a round trip cab and what do they seat?",
      answer: "We offer a Sedan (Swift Dzire/Etios, 4 seats) at ₹11/km, an SUV (Innova/Ertiga, 6-7 seats) at ₹15/km, and a Tempo Traveller (12-26 seats) from ₹23/km. Sedans suit couples and small families, SUVs suit families with luggage or hill routes, and Tempo Travellers suit large groups and multi-family trips."
    },
    {
      question: "Can I book a round trip cab for a one-way distance with same-day return?",
      answer: "Yes. For short routes like Delhi to Agra (230 km) or Delhi to Mathura (180 km), a same-day round trip is popular — you reach, sightsee, and return the same evening with no night charge. Longer routes such as Delhi to Manali or Amritsar are billed as multi-day round trips with the 250 km/day minimum and driver night halt."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "speakable": getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.speakable-faq-first']),
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  // HowTo schema — "How to Book a Round-Trip Cab" (4 steps), rendered as a
  // visible <ol> below so the schema is grounded in real DOM content.
  const howToSchema = getHowToSchema({
    name: "How to Book a Round-Trip Cab",
    description: "Step-by-step guide to booking a multi-day round-trip cab with the same driver, transparent per-km pricing, and a 250 km/day minimum.",
    totalTime: "PT5M",
    estimatedCost: { currency: "INR", value: "5500" },
    steps: [
      { name: "Share your itinerary", text: "Tell us your origin, destination, travel dates and group size. We map the route, the number of trip days and the recommended vehicle." },
      { name: "Get an instant per-km quote", text: "Receive a transparent quote: Sedan ₹11/km, SUV ₹15/km or Tempo Traveller from ₹23/km, with the 250 km/day minimum and any driver night halt shown upfront." },
      { name: "Confirm your booking", text: "Confirm by phone or WhatsApp on 7668570551. No heavy advance is needed for most routes; you get the driver and vehicle details before the trip." },
      { name: "Travel and return with the same driver", text: "Your dedicated driver picks you up, stays through sightseeing and overnight halts, and drives you back home. You pay only for the kilometres driven plus tolls and taxes at actual." }
    ]
  });

  // Article schema — editorial entity for AEO/GEO + freshness signal, with
  // Speakable wired to the hero headline + direct-answer lead.
  const articleSchema = getArticleSchema({
    slug: 'round-trip-cab',
    headline: 'Round Trip Cab Booking (2026) — Fares, Minimum KM, Night Halt & Same Driver Guide',
    description: 'Complete guide to booking a round-trip cab in India: per-km fares from ₹11/km, the 250 km/day minimum, driver night halt, when round trip beats two one-ways, and 500+ routes.',
    image: '/images/citypage_hero_section_image.jpg',
    authorName: 'editorial',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first']
  });

  // Comparison schema — round-trip vs one-way (Table + Article) for
  // featured-snippet capture; mirrors the visible comparison table below.
  const comparisonRows = [
    { feature: 'Best for', roundTrip: 'Multi-day trips, sightseeing, return on same route', oneWay: 'Point-to-point drop, no return needed' },
    { feature: 'Minimum km billing', roundTrip: '250 km per day', oneWay: '300 km per trip' },
    { feature: 'Driver', roundTrip: 'Same driver throughout the trip', oneWay: 'New driver each direction' },
    { feature: 'Local sightseeing at destination', roundTrip: 'Included (counts toward km)', oneWay: 'Not available' },
    { feature: 'Driver night halt', roundTrip: '₹300/night for overnight trips', oneWay: 'Not applicable' },
    { feature: 'When it is cheaper', roundTrip: 'When you need the car at the destination or return within 1-3 days', oneWay: 'When you only travel one direction and do not return' },
    { feature: 'Discount', roundTrip: '10% round trip discount applied', oneWay: 'No round trip discount' },
  ];
  const comparisonSchema = getComparisonSchema({
    slug: 'round-trip-cab',
    title: 'Round Trip Cab vs One-Way Cab — Which Is Cheaper?',
    description: 'Compare round-trip and one-way cabs on minimum km, driver continuity, night halt, local sightseeing and when each option is cheaper.',
    rows: comparisonRows,
    mentions: ['Round Trip Cab', 'One-Way Cab', 'Outstation Cab', 'Per-km fare', 'Driver night halt']
  });

  // Product schema — fleet AggregateOffer for price visibility in search.
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    // Week 53: Merchant listings treats a missing `image` as critical.
    "image": `${BASE_URL}/images/car/swift_dzire.jpg`,
    "name": "Round Trip Cab Booking — Triveni Cabs (Sedan, SUV, Tempo Traveller)",
    "description": "Round trip cab fleet across 500+ Indian routes. Sedan from ₹11/km, SUV ₹15/km, Tempo Traveller from ₹23/km. Same driver throughout, 10% round trip discount, 250 km/day minimum.",
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "category": "Round Trip Cab Service",
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
    ...getRatingAndReviews('round-trip-cab-hub', 'outstation')
  };

  // Build the internal-link grid of REAL /round-trip/{slug} pages from data.
  const featuredRoundTripSlugs = [
    // Ordered by the searches the round-trip pages actually receive (the 12 Sep export).
    'delhi-to-rishikesh', 'jaipur-to-pushkar', 'delhi-to-corbett', 'delhi-to-mussoorie',
    'delhi-to-agra', 'delhi-to-mathura', 'chandigarh-to-manali', 'delhi-to-manali',
    'lucknow-to-ayodhya', 'delhi-to-jaipur', 'delhi-to-shimla', 'delhi-to-haridwar',
    'delhi-to-amritsar', 'delhi-to-chandigarh', 'jaipur-to-udaipur', 'agra-to-jaipur', 'delhi-to-nainital',
  ];
  const allSlugs = new Set(getAllRoundTripSlugs());
  const dataRoundTripRoutes = featuredRoundTripSlugs
    .filter((s) => allSlugs.has(s))
    .map((s) => {
      const r = getRoundTripRoute(s);
      return {
        slug: s,
        origin: r.origin,
        destination: r.destination,
        sedan: r.cabFares.sedan,
        days: (r.suggestedItinerary?.length || 1) === 1 ? 'Same Day / 1-2 Days' : `${r.suggestedItinerary.length}+ Days`,
        rtKm: r.totalRoundTripKm,
      };
    });

  const roundTripRoutes = [
    { from: "Delhi", to: "Agra", days: "1-2 Days", price: "₹5,060+", highlights: "Taj Mahal, Agra Fort, Fatehpur Sikri", href: "/delhi-to-agra" },
    { from: "Delhi", to: "Jaipur", days: "2-3 Days", price: "₹6,160+", highlights: "Hawa Mahal, Amber Fort, City Palace", href: "/delhi-to-jaipur" },
    { from: "Delhi", to: "Shimla", days: "3-4 Days", price: "₹7,700+", highlights: "Mall Road, Ridge, Kufri, Naldehra", href: "/delhi-to-shimla" },
    { from: "Delhi", to: "Manali", days: "4-5 Days", price: "₹11,880+", highlights: "Solang Valley, Rohtang, Old Manali", href: "/one-way-cab/delhi-to-manali" },
    { from: "Delhi", to: "Haridwar-Rishikesh", days: "2-3 Days", price: "₹5,060+", highlights: "Ganga Aarti, Lakshman Jhula, Rafting", href: "/one-way-cab/delhi-to-haridwar" },
    { from: "Delhi", to: "Amritsar", days: "2-3 Days", price: "₹9,900+", highlights: "Golden Temple, Wagah Border, Jallianwala", href: "/delhi-to-amritsar" },
    { from: "Jaipur", to: "Udaipur", days: "2-3 Days", price: "₹8,690+", highlights: "Lake Pichola, City Palace, Ranakpur", href: "/jaipur-to-udaipur" },
    { from: "Delhi", to: "Chandigarh", days: "1-2 Days", price: "₹5,500+", highlights: "Rock Garden, Sukhna Lake, Rose Garden", href: "/delhi-to-chandigarh" },
    { from: "Agra", to: "Jaipur", days: "2-3 Days", price: "₹5,280+", highlights: "Fatehpur Sikri, Bharatpur, Amber Fort", href: "/one-way-cab/agra-to-jaipur" },
  ];

  const benefits = [
    { icon: Users, title: "Same Driver Throughout", desc: "Your driver knows your preferences, schedule, and keeps the trip personal. No rebooking or switching drivers." },
    { icon: MapPin, title: "Local Sightseeing Included", desc: "Use the cab at your destination for sightseeing, shopping, dining, and exploring. Unlimited stops." },
    { icon: Calendar, title: "Multi-Day Flexibility", desc: "Travel for 2, 3, 5, or even 10+ days. Extend or shorten on the go. No rigid schedules." },
    { icon: Car, title: "Vehicle Always Available", desc: "No waiting for cabs at the destination. Your vehicle is always ready when you are." },
    { icon: Shield, title: "Safe & Familiar", desc: "Build trust with your driver over multiple days. Feel safe with a verified, familiar face." },
    { icon: IndianRupee, title: "All-Inclusive Pricing", desc: "Simple per-km billing. No surprise charges. Get complete fare estimate before you book." },
  ];

  const multiDayPackages = [
    { days: "2-Day Trip", minKm: "600 km", sedanCost: "₹6,600", suvCost: "₹9,000", tempoPrice: "₹13,800", example: "Delhi-Agra, Delhi-Chandigarh" },
    { days: "3-Day Trip", minKm: "900 km", sedanCost: "₹9,900", suvCost: "₹13,500", tempoPrice: "₹20,700", example: "Delhi-Jaipur, Delhi-Haridwar-Rishikesh" },
    { days: "5-Day Trip", minKm: "1,500 km", sedanCost: "₹16,500", suvCost: "₹22,500", tempoPrice: "₹34,500", example: "Golden Triangle, Delhi-Manali" },
    { days: "7-Day Trip", minKm: "2,100 km", sedanCost: "₹23,100", suvCost: "₹31,500", tempoPrice: "₹48,300", example: "Rajasthan Circuit, Himachal Tour" },
  ];

  const journeySteps = [
    { step: "1", title: "Share Your Itinerary", desc: "Tell us your destination, dates, and group size. We plan the perfect route." },
    { step: "2", title: "Get Instant Quote", desc: "Receive transparent per-km pricing with no hidden charges. Compare vehicle options." },
    { step: "3", title: "Meet Your Driver", desc: "Your dedicated driver arrives on time. Same person for your entire journey." },
    { step: "4", title: "Explore Freely", desc: "Sightsee, shop, dine — your car and driver are available throughout your trip." },
    { step: "5", title: "Return Comfortably", desc: "Head back home with the same trusted driver. Pay only for km driven." },
  ];

  const colorCycle = [
    { bg: "bg-amber-500", light: "bg-amber-100", text: "text-amber-700", border: "border-amber-200" },
    { bg: "bg-amber-500", light: "bg-amber-100", text: "text-amber-700", border: "border-amber-200" },
    { bg: "bg-amber-500", light: "bg-amber-100", text: "text-amber-700", border: "border-amber-200" },
    { bg: "bg-amber-500", light: "bg-amber-100", text: "text-amber-700", border: "border-amber-200" },
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
        <script key={`rt-cmp-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      {/* === Deep Indigo / Violet Journey Theme === */}
      <div className="min-h-screen bg-[#0A0A0E]">

        {/* ─── HERO: Split asymmetric with orbital ring decoration ─── */}
        <section className="relative min-h-[78vh] flex items-center overflow-hidden bg-gradient-to-br from-[#0A0A0E] via-[#14100a] to-[#0A0A0E]">
          <Image src="/images/sightseeing/Golden_Triangle/Golden_triangle_hero_section.jpg" alt="Round trip cab journey" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-[#0A0A0E]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0E] via-[#0A0A0E]/50 to-transparent" />
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#FACF2D] to-transparent z-10" />
          {/* Orbital rings decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-amber-500/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-amber-500/15 rotate-12" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-amber-500/10 -rotate-12" />
          {/* Gradient orbs */}
          <div className="absolute top-10 right-20 w-96 h-96 bg-amber-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-amber-500/15 rounded-full blur-[100px]" />
          <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-amber-400/10 rounded-full blur-[60px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 py-12 sm:py-20 grid lg:grid-cols-5 gap-12 items-center">
            {/* Left: Content (3 cols) */}
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 bg-amber-500/15 backdrop-blur-md px-5 py-2 rounded-full mb-8 border border-amber-400/20">
                <Route className="w-4 h-4 text-amber-300" />
                <span className="text-amber-200 font-semibold text-sm tracking-wider uppercase">Round Trip Cab Booking</span>
              </div>

              <h1 className="speakable-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.12]">
                Round Trip Cab Booking —{' '}
                <span className="text-transparent bg-gradient-to-r from-amber-400 via-amber-400 to-amber-300 bg-clip-text">
                  Same Driver, Full Circle
                </span>
              </h1>

              <p className="text-lg md:text-xl text-amber-200/80 mb-8 max-w-xl leading-relaxed">
                Multi-day cab trips with the same driver. Explore destinations freely, sightsee locally, and travel back comfortably. From just ₹11/km.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <TrackedCta
                  type="call"
                  location="roundtrip_hub_hero"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: 7668570551
                </TrackedCta>
                <TrackedCta
                  type="whatsapp"
                  location="roundtrip_hub_hero"
                  href="https://wa.me/917668570551?text=I want to book a round trip cab"
                  message="I want to book a round trip cab"
                  className="inline-flex items-center gap-2 bg-white/[0.07] backdrop-blur-xl text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/[0.12] hover:bg-white/[0.12] transition-all"
                >
                  WhatsApp Booking
                </TrackedCta>
              </div>
            </div>

            {/* Right: stat cards + above-fold enquiry form (2 cols) */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              <div className="hidden lg:grid grid-cols-2 gap-3">
                {[
                  { icon: Users, value: "Same Driver", label: "Whole Trip", gradient: "from-amber-500/20 to-amber-500/20" },
                  { icon: Calendar, value: "2-15+ Days", label: "Flexible", gradient: "from-amber-500/20 to-pink-500/20" },
                  { icon: Star, value: "4.8/5", label: "2,847+ Travelers", gradient: "from-amber-500/20 to-amber-500/20" },
                  { icon: IndianRupee, value: "₹11/km", label: "Sedan Per-km", gradient: "from-amber-500/20 to-amber-500/20" },
                ].map((card, idx) => (
                  <div key={idx} className={`bg-gradient-to-r ${card.gradient} backdrop-blur-2xl rounded-2xl p-4 border border-white/[0.08] hover:border-white/[0.15] transition-all`}>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/10 rounded-xl">
                        <card.icon className="w-4 h-4 text-amber-300" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-sm">{card.value}</div>
                        <div className="text-[11px] text-amber-300/70">{card.label}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full max-w-md mx-auto lg:mx-0">
                <QuickEnquiryForm pageType="route" />
              </div>
            </div>
          </div>

          {/* Bottom wave separator */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
              <path d="M0 80L60 68C120 56 240 32 360 24C480 16 600 24 720 36C840 48 960 64 1080 64C1200 64 1320 48 1380 40L1440 32V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#f8f6ff"/>
            </svg>
          </div>
        </section>

        {/* ─── SEO Prose Section ─── */}
        <section className="py-10 sm:py-16 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Direct-answer lead box — voice/AI answer target (.speakable-lead) */}
            <div className="speakable-lead bg-white/5 rounded-2xl border border-amber-200/70 shadow-[0_4px_24px_rgba(109,40,217,0.06)] p-6 md:p-8 mb-12">
              <p className="text-slate-200 text-base md:text-lg leading-relaxed">
                A <strong>round trip cab</strong> is a cab booked for both the onward and return journey with the <strong>same driver and vehicle throughout</strong>, including any local sightseeing at your destination. Round trip cabs are billed per kilometre — <strong>Sedan ₹11/km, SUV ₹15/km, Tempo Traveller from ₹23/km</strong> — with a <strong>minimum of 250 km per day</strong> and a <strong>driver night halt of ₹300/night</strong> for overnight trips. A round trip is <strong>cheaper than booking two separate one-way cabs</strong> whenever you need the car at the destination or return on the same route within 1-3 days, because one-way cabs each carry a 300 km minimum plus a return dead-mileage charge, while a round trip applies a 10% discount on the actual distance. Toll, parking and state taxes are extra at actual.
              </p>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              The Complete Round Trip Cab Experience
            </h2>
            <div className="prose prose-lg max-w-none text-slate-200 space-y-4">
              <p>
                A <strong>round trip cab</strong> is the smartest way to travel for multi-day trips across North India. Unlike booking two separate <Link href="/one-way-cab" className="text-amber-600 hover:text-amber-600 underline underline-offset-2">one-way cabs</Link>, a round trip gives you the <strong>same driver throughout your journey</strong> — from pickup to sightseeing to the return home. At Triveni Cabs™, our round trip service starts at just <strong>₹11/km for sedans</strong>, with SUVs at ₹15/km and <Link href="/tempo-traveller" className="text-amber-600 hover:text-amber-600 underline underline-offset-2">tempo travellers</Link> from ₹23/km, making it the most cost-effective choice for family vacations, group tours, and <Link href="/corporate-transportation-service" className="text-amber-600 hover:text-amber-600 underline underline-offset-2">corporate business trips</Link> lasting 2 to 15+ days.
              </p>
              <p>
                What sets our <strong>round trip cab booking</strong> apart is the flexibility and personal touch. Your dedicated driver gets to know your preferences, suggests local attractions, waits while you explore, and ensures a comfortable ride throughout. With a minimum of just 250 km per day (compared to 300 km for one-way), round trip cabs offer better value for travelers who want to explore destinations at their own pace. Popular routes include <Link href="/agra" className="text-amber-600 hover:text-amber-600 underline underline-offset-2">Delhi to Agra</Link>, <Link href="/jaipur" className="text-amber-600 hover:text-amber-600 underline underline-offset-2">Delhi to Jaipur</Link>, <Link href="/shimla" className="text-amber-600 hover:text-amber-600 underline underline-offset-2">Delhi to Shimla</Link>, <Link href="/manali" className="text-amber-600 hover:text-amber-600 underline underline-offset-2">Delhi to Manali</Link>, and the iconic <Link href="/sightseeing/golden-triangle-tour-3-days" className="text-amber-600 hover:text-amber-600 underline underline-offset-2">Golden Triangle circuit</Link>.
              </p>
              <p>
                Every round trip cab comes with <Link href="/safety" className="text-amber-600 hover:text-amber-600 underline underline-offset-2">GPS tracking and verified drivers</Link>, comprehensive insurance, 5+ years of highway experience, and 24/7 support at <strong>7668570551</strong>. Whether you are planning a <Link href="/weekend-getaways-from-delhi-by-car" className="text-amber-600 hover:text-amber-600 underline underline-offset-2">weekend getaway to the hills</Link>, a week-long <Link href="/sightseeing/rajasthan-tour-from-delhi" className="text-amber-600 hover:text-amber-600 underline underline-offset-2">Rajasthan circuit tour</Link>, or a <Link href="/religious-tours/char-dham-yatra-by-car" className="text-amber-600 hover:text-amber-600 underline underline-offset-2">religious pilgrimage</Link> across multiple cities, our <Link href="/reviews" className="text-amber-600 hover:text-amber-600 underline underline-offset-2">4.8-star rated</Link> round trip service ensures you travel safely, comfortably, and affordably. Check our <Link href="/pricing" className="text-amber-600 hover:text-amber-600 underline underline-offset-2">complete fare chart</Link> for detailed pricing.
              </p>
            </div>
          </div>
        </section>

        {/* ─── JOURNEY STEPS: Vertical timeline with violet connectors ─── */}
        <section className="py-12 sm:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 sm:mb-16">
              <span className="inline-block text-sm font-bold text-amber-600 bg-amber-100 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">How It Works</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                How do I book a round trip cab?
              </h2>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-amber-500 to-amber-500 rounded-full" />

              <div className="space-y-8">
                {journeySteps.map((item, idx) => (
                  <div key={idx} className="relative pl-16 md:pl-20">
                    {/* Step number circle */}
                    <div className="absolute left-0 md:left-2 top-1 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-500 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/20">
                      <span className="text-white font-black text-lg">{item.step}</span>
                    </div>
                    <div className="bg-white/5 rounded-2xl p-6 shadow-[0_4px_24px_rgba(109,40,217,0.06)] border border-amber-100/50 hover:shadow-[0_8px_32px_rgba(109,40,217,0.1)] hover:border-amber-200 transition-all">
                      <h3 className="font-bold text-white text-lg mb-1">{item.title}</h3>
                      <p className="text-slate-300 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── HOW TO BOOK: Semantic ordered list (grounds HowTo schema) ─── */}
        <section className="py-10 sm:py-16 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block text-sm font-bold text-amber-600 bg-amber-100 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">Step-by-Step</span>
              <h2 className="text-2xl md:text-3xl font-bold text-white">
                How to Book a Round-Trip Cab in 4 Steps
              </h2>
            </div>
            <ol className="space-y-4 list-none">
              {[
                { t: "Share your itinerary", d: "Tell us your origin, destination, travel dates and group size. We map the route, the number of trip days and the recommended vehicle." },
                { t: "Get an instant per-km quote", d: "Receive a transparent quote — Sedan ₹11/km, SUV ₹15/km or Tempo Traveller from ₹23/km — with the 250 km/day minimum and any driver night halt shown upfront." },
                { t: "Confirm your booking", d: "Confirm by phone or WhatsApp on 7668570551. No heavy advance is needed for most routes; you get the driver and vehicle details before the trip." },
                { t: "Travel and return with the same driver", d: "Your dedicated driver picks you up, stays through sightseeing and overnight halts, and drives you back home. You pay only for the kilometres driven plus tolls and taxes at actual." },
              ].map((s, i) => (
                <li key={i} className="flex items-start gap-4 bg-[#0A0A0E] rounded-2xl p-5 border border-amber-100/60">
                  <span className="w-9 h-9 flex-shrink-0 bg-gradient-to-br from-amber-500 to-amber-500 rounded-xl flex items-center justify-center text-white font-black">{i + 1}</span>
                  <div>
                    <h3 className="font-bold text-white mb-1">{s.t}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ─── ROUND TRIP vs ONE-WAY: Visible comparison table (grounds Comparison schema) ─── */}
        <section className="py-12 sm:py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-bold text-amber-600 bg-amber-100 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">Compare</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Round Trip Cab vs One-Way Cab — Which Is Cheaper?
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                A round trip wins when you need the car at your destination or return within 1-3 days. One-way wins for a single-direction drop.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-amber-100 shadow-[0_4px_24px_rgba(109,40,217,0.06)]">
              <table className="w-full text-sm text-left bg-white/5">
                <caption className="sr-only">Comparison of round trip cab versus one-way cab on pricing, minimum kilometres, driver continuity and night halt</caption>
                <thead>
                  <tr className="bg-white/[0.06] text-white">
                    <th scope="col" className="px-4 py-3.5 font-bold">Feature</th>
                    <th scope="col" className="px-4 py-3.5 font-bold text-amber-200">Round Trip Cab</th>
                    <th scope="col" className="px-4 py-3.5 font-bold text-slate-500">One-Way Cab</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { f: "Best for", rt: "Multi-day trips, sightseeing, return on same route", ow: "Point-to-point drop, no return needed" },
                    { f: "Minimum km billing", rt: "250 km per day", ow: "300 km per trip" },
                    { f: "Driver", rt: "Same driver throughout the trip", ow: "New driver each direction" },
                    { f: "Local sightseeing at destination", rt: "Included (counts toward km)", ow: "Not available" },
                    { f: "Driver night halt", rt: "₹300/night for overnight trips", ow: "Not applicable" },
                    { f: "When it is cheaper", rt: "Need car at destination, or return within 1-3 days", ow: "Travel one direction only, no return" },
                    { f: "Discount", rt: "10% round trip discount applied", ow: "No round trip discount" },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white/5" : "bg-[#0A0A0E]"}>
                      <th scope="row" className="px-4 py-3 font-semibold text-white align-top">{row.f}</th>
                      <td className="px-4 py-3 text-slate-200 align-top">{row.rt}</td>
                      <td className="px-4 py-3 text-slate-400 align-top">{row.ow}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-400 mt-4 text-center">
              Still unsure? Compare full pricing on <Link href="/one-way-cab" className="text-amber-600 hover:text-amber-600 underline underline-offset-2">one-way cabs</Link> or call <a href="tel:+917668570551" className="text-amber-600 font-semibold">7668570551</a> for a side-by-side quote.
            </p>
          </div>
        </section>

        {/* ─── BOOK BY ROUTE: Real /round-trip/{slug} internal-link grid ─── */}
        <section className="py-12 sm:py-20 px-4 bg-[#f0ecff]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-bold text-amber-600 bg-amber-100 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">Book By Route</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Round Trip Cab Routes With Live Fares
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Tap any route for a dedicated page with day-by-day itinerary, fare breakdown and night-halt details.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {dataRoundTripRoutes.map((r, idx) => (
                <Link key={idx} href={canonicalHref(`/round-trip/${r.slug}`)} className="group block overflow-hidden bg-white/5 rounded-2xl border border-white/10 hover:border-[#FACF2D]/30 hover:shadow-[0_8px_32px_rgba(250,207,45,0.12)] transition-all">
                  <div className="relative h-32 w-full overflow-hidden">
                    <Image src={getCityImage(r.destination)} alt={`${r.origin} to ${r.destination} round trip cab`} fill sizes="(max-width:768px) 100vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0E] via-[#0A0A0E]/30 to-transparent" />
                    <div className="absolute left-3 top-3 p-2 bg-black/45 rounded-xl backdrop-blur-sm"><Route className="w-4 h-4 text-[#FACF2D]" /></div>
                    <span className="absolute right-3 top-3 rounded-full bg-black/45 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#FACF2D] backdrop-blur-sm">{r.days}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-white group-hover:text-[#FACF2D] transition-colors">
                      {r.origin} to {r.destination} Round Trip
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">{r.rtKm} km round trip</p>
                    <div className="flex items-center justify-between pt-3 mt-3 border-t border-white/10">
                      <div>
                        <span className="text-[10px] text-slate-500 uppercase tracking-wider">Sedan from</span>
                        <div className="text-lg font-black text-[#FACF2D]">{r.sedan}</div>
                      </div>
                      <span className="bg-white/5 text-[#FACF2D] px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1 group-hover:bg-[#FACF2D]/15 transition-colors">
                        View <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── MULTI-DAY PACKAGES: Gradient cards with pricing grid ─── */}
        <section className="py-12 sm:py-20 px-4 bg-white/5">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-sm font-bold text-amber-600 bg-amber-100 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">Pricing</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Multi-Day Round Trip Packages
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Estimated costs based on minimum km billing. Actual cost based on km driven.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {multiDayPackages.map((pkg, idx) => {
                const color = colorCycle[idx % colorCycle.length];
                return (
                  <div key={idx} className={`rounded-2xl p-1 bg-gradient-to-br from-amber-500/10 via-amber-500/5 to-amber-500/10`}>
                    <div className="bg-white/5 rounded-[14px] p-6 h-full">
                      <div className="flex items-center justify-between mb-5">
                        <h3 className="text-xl font-black text-white">{pkg.days}</h3>
                        <span className={`text-xs font-bold ${color.text} ${color.light} px-3 py-1 rounded-full`}>Min {pkg.minKm}</span>
                      </div>

                      <div className="grid grid-cols-3 gap-3 mb-5">
                        {[
                          { label: "Sedan", price: pkg.sedanCost, sub: "₹11/km" },
                          { label: "SUV", price: pkg.suvCost, sub: "₹15/km" },
                          { label: "Tempo", price: pkg.tempoPrice, sub: "from ₹23/km" },
                        ].map((v, i) => (
                          <div key={i} className="text-center p-3 bg-[#0A0A0E] rounded-xl border border-amber-100/60">
                            <div className="text-[10px] text-slate-500 uppercase font-semibold tracking-wider mb-1">{v.label}</div>
                            <div className="font-black text-white text-lg">{v.price}</div>
                            <div className="text-[10px] text-amber-500 font-medium">{v.sub}</div>
                          </div>
                        ))}
                      </div>

                      <p className="text-sm text-slate-400 flex items-center gap-2">
                        <Route className="w-4 h-4 text-amber-400" />
                        {pkg.example}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-sm text-slate-400 mt-8 text-center">
              * Driver allowance ₹300/night extra. Toll, parking, state tax at actual. GST 5% applicable.
            </p>
          </div>
        </section>

        {/* ─── POPULAR ROUTES: Card carousel style ─── */}
        <section className="py-12 sm:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-sm font-bold text-amber-600 bg-amber-100 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">Destinations</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Popular Round Trip Routes
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Most booked multi-day round trip destinations with sightseeing highlights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {roundTripRoutes.map((route, idx) => (
                <Link key={idx} href={canonicalHref(route.href)} className="group block">
                  <div className="bg-white/5 rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(109,40,217,0.05)] border border-amber-100/40 hover:shadow-[0_8px_32px_rgba(109,40,217,0.12)] hover:border-amber-300/50 transition-all">
                    {/* Top color bar */}
                    <div className="h-1.5 bg-gradient-to-r from-amber-500 via-amber-500 to-amber-500" />
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-amber-100 rounded-xl">
                          <MapPin className="w-5 h-5 text-amber-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-white group-hover:text-amber-600 transition-colors">
                            {route.from} → {route.to}
                          </h3>
                          <p className="text-xs text-amber-500 font-medium">{route.days}</p>
                        </div>
                      </div>

                      <p className="text-sm text-slate-400 mb-4">{route.highlights}</p>

                      <div className="flex items-center justify-between pt-3 border-t border-amber-100/60">
                        <div>
                          <span className="text-[10px] text-slate-500 uppercase tracking-wider">Sedan from</span>
                          <div className="text-lg font-black text-amber-600">{route.price}</div>
                        </div>
                        <span className="bg-amber-50 text-amber-600 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1 group-hover:bg-amber-100 transition-colors">
                          Book
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── BENEFITS: Glassmorphism cards on purple gradient section ─── */}
        <section className="relative py-14 sm:py-24 px-4 overflow-hidden bg-gradient-to-br from-[#0A0A0E] via-[#14100a] to-[#4c1d95]">
          {/* Decorative blur orbs */}
          <div className="absolute top-20 right-10 w-80 h-80 bg-amber-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 left-20 w-60 h-60 bg-amber-400/15 rounded-full blur-[80px]" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-sm font-bold text-amber-300 bg-amber-500/15 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase border border-amber-400/20">Advantages</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Benefits of Round Trip Cab Booking
              </h2>
              <p className="text-amber-200/70 text-lg max-w-2xl mx-auto">
                Why families and groups prefer round trip over separate bookings
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((item, idx) => (
                <div key={idx} className="bg-white/[0.06] backdrop-blur-2xl rounded-2xl p-6 border border-white/[0.08] hover:bg-white/[0.1] hover:border-white/[0.15] transition-all group">
                  <div className="inline-flex p-3 bg-gradient-to-br from-amber-500/20 to-amber-500/20 rounded-xl mb-4 border border-white/[0.06]">
                    <item.icon className="w-6 h-6 text-amber-300" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-amber-200 transition-colors">{item.title}</h3>
                  <p className="text-amber-200/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── COMPARE TRIP TYPES: Side-by-side cards ─── */}
        <section className="py-12 sm:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-bold text-amber-600 bg-amber-100 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">Compare</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Not Sure? Compare Trip Types
              </h2>
              <p className="text-lg text-slate-300">
                Round trip is ideal for multi-day exploration. One-way is better for single-direction travel.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/round-trip-cab" className="block group">
                <div className="bg-gradient-to-br from-amber-500 to-amber-500 rounded-2xl p-6 text-white shadow-lg shadow-amber-500/15 hover:shadow-amber-500/25 transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <Route className="w-5 h-5" />
                    <span className="text-sm font-bold uppercase tracking-wider text-amber-200">Round Trip</span>
                  </div>
                  <h3 className="text-xl font-black mb-3">Best for Multi-Day Trips</h3>
                  <ul className="space-y-2 text-sm text-amber-100">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Same driver throughout</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Local sightseeing included</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> 250 km/day minimum</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Extend trip on the go</li>
                  </ul>
                </div>
              </Link>
              <Link href="/one-way-cab" className="block group">
                <div className="bg-white/5 rounded-2xl p-6 border-2 border-amber-100 hover:border-amber-300 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <ArrowRight className="w-5 h-5 text-amber-500" />
                    <span className="text-sm font-bold uppercase tracking-wider text-amber-500">One-Way</span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">Best for Point-to-Point</h3>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-amber-400 flex-shrink-0" /> Pay for one direction only</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-amber-400 flex-shrink-0" /> Save up to 50% vs round trip</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-amber-400 flex-shrink-0" /> No return fare needed</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-amber-400 flex-shrink-0" /> Drop and go convenience</li>
                  </ul>
                </div>
              </Link>
            </div>

            <div className="mt-6 text-center">
              <Link href="/outstation-cabs" className="inline-flex items-center gap-2 text-amber-600 font-semibold hover:text-amber-600 transition-colors text-sm">
                View All Outstation Options
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── FAQ: Accordion-style with numbered badges ─── */}
        <section className="py-12 sm:py-20 px-4 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-sm font-bold text-amber-600 bg-amber-100 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-slate-300">
                Common questions about round trip cab booking
              </p>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, idx) => (
                <div key={idx} className="bg-[#0A0A0E] rounded-2xl p-6 border border-amber-100/60 hover:border-amber-200 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-bold text-sm">{idx + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-white mb-2">{faq.question}</h3>
                      <p className={`text-slate-300 text-sm leading-relaxed${idx === 0 ? ' speakable-faq-first' : ''}`}>{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── DYNAMIC: Travel Guides & Wedding Services ─── */}
        <section className="py-10 sm:py-16 px-4 bg-[#f0ecff]">
          <div className="max-w-7xl mx-auto space-y-14">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Travel Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {getGeneralContent().map((item, index) => (
                  <Link key={index} href={item.url} className="group block bg-white/5 rounded-xl p-5 border border-amber-100/60 hover:border-amber-300 hover:shadow-md transition-all">
                    <h3 className="font-semibold text-white group-hover:text-amber-700 transition-colors">{item.title}</h3>
                    <p className="text-slate-400 text-sm mt-1">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Wedding Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {getWeddingPages().map((item, index) => (
                  <Link key={index} href={item.url} className="group block bg-white/5 rounded-xl p-5 border border-amber-100/60 hover:border-amber-300 hover:shadow-md transition-all">
                    <h3 className="font-semibold text-white group-hover:text-amber-700 transition-colors">{item.title}</h3>
                    <p className="text-slate-400 text-sm mt-1">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── INTERLINKING: Comprehensive footer-style grids ─── */}
        <section className="py-10 sm:py-16 px-4 border-t border-amber-100">
          <div className="max-w-7xl mx-auto space-y-12">

            {/* Related Services */}
            <div>
              <h2 className="text-sm font-bold text-amber-600 mb-5 tracking-widest uppercase">Related Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { l: "One-Way Cab Service", h: "/one-way-cab", d: "Save 50% — pay single direction only" },
                  { l: "Outstation Cab Booking", h: "/outstation-cabs", d: "Intercity travel from ₹11/km" },
                  { l: "Local Taxi Hourly Rental", h: "/local-taxi", d: "Hourly packages from ₹1,200" },
                  { l: "Airport Transfer Service", h: "/airport-service", d: "Flight-tracked pickups & drops" },
                  { l: "Wedding Car Rental", h: "/wedding", d: "Decorated luxury cars for weddings" },
                  { l: "Corporate Transportation", h: "/corporate-transportation-service", d: "Employee transport & business travel" },
                ].map((s, i) => (
                  <Link key={i} href={s.h} className="block bg-white/5 rounded-xl p-4 border border-amber-100/60 hover:border-amber-300 hover:shadow-md transition-all group">
                    <span className="font-semibold text-sm text-slate-200 group-hover:text-amber-700 transition-colors">{s.l}</span>
                    <span className="block text-xs text-slate-500 mt-1">{s.d}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular Round Trip Routes */}
            <div>
              <h2 className="text-sm font-bold text-slate-500 mb-4 tracking-widest uppercase">Popular Round Trip Routes</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { l: "Delhi to Agra Round Trip", h: "/delhi-to-agra" },
                  { l: "Delhi to Jaipur Round Trip", h: "/delhi-to-jaipur" },
                  { l: "Delhi to Shimla Round Trip", h: "/delhi-to-shimla" },
                  { l: "Delhi to Manali Round Trip", h: "/one-way-cab/delhi-to-manali" },
                  { l: "Delhi to Chandigarh Round Trip", h: "/delhi-to-chandigarh" },
                  { l: "Delhi to Haridwar Round Trip", h: "/one-way-cab/delhi-to-haridwar" },
                  { l: "Delhi to Rishikesh Round Trip", h: "/delhi-to-rishikesh" },
                  { l: "Agra to Jaipur Round Trip", h: "/one-way-cab/agra-to-jaipur" },
                  { l: "Delhi to Amritsar Round Trip", h: "/delhi-to-amritsar" },
                  { l: "Delhi to Nainital Round Trip", h: "/delhi-to-nainital" },
                ].map((r, i) => (
                  <Link key={i} href={r.h} className="bg-white/5 rounded-full px-5 py-2.5 text-slate-200 hover:bg-amber-50 hover:text-amber-700 transition-colors text-sm font-medium border border-amber-100/60 hover:border-amber-300">{r.l}</Link>
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
                  <Link key={i} href={c.h} className="bg-white/5 rounded-full px-5 py-2.5 text-slate-200 hover:bg-amber-50 hover:text-amber-700 transition-colors text-sm font-medium border border-amber-100/60 hover:border-amber-300">{c.l}</Link>
                ))}
              </div>
            </div>

            {/* Popular Tours */}
            <div>
              <h2 className="text-sm font-bold text-slate-500 mb-4 tracking-widest uppercase">Popular Tours</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { l: "Golden Triangle Tour 3 Days", h: "/sightseeing/golden-triangle-tour-3-days" },
                  { l: "Rajasthan Circuit Tour", h: "/sightseeing/rajasthan-tour-from-delhi" },
                  { l: "Same Day Agra Tour", h: "/same-day-agra-tour-from-delhi" },
                  { l: "Char Dham Yatra by Car", h: "/religious-tours/char-dham-yatra-by-car" },
                  { l: "Weekend Getaways from Delhi", h: "/weekend-getaways-from-delhi-by-car" },
                  { l: "Mathura Vrindavan Tour", h: "/sightseeing/mathura-vrindavan-tour-from-delhi" },
                  { l: "Delhi Sightseeing Tour", h: "/sightseeing/delhi-sightseeing-tour" },
                  { l: "Taj Mahal Sunrise Tour", h: "/sunrise-taj-mahal-tour-from-delhi" },
                ].map((t, i) => (
                  <Link key={i} href={t.h} className="bg-white/5 rounded-full px-5 py-2.5 text-slate-200 hover:bg-amber-50 hover:text-amber-700 transition-colors text-sm font-medium border border-amber-100/60 hover:border-amber-300">{t.l}</Link>
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
                  <Link key={i} href={q.h} className="bg-white/5 rounded-full px-5 py-2.5 text-slate-200 hover:bg-amber-50 hover:text-amber-700 transition-colors text-sm font-medium border border-amber-100/60 hover:border-amber-300">{q.l}</Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA: Gradient glass card ─── */}
        <section className="py-12 sm:py-20 px-4 bg-gradient-to-br from-[#0A0A0E] to-[#2d1b69]">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/[0.06] backdrop-blur-2xl rounded-3xl p-10 md:p-14 text-center border border-white/[0.1]">
              <div className="inline-flex p-3 bg-amber-500/15 rounded-xl mb-6 border border-amber-400/20">
                <Route className="w-8 h-8 text-amber-300" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Plan Your Round Trip Today
              </h2>
              <p className="text-amber-200/70 mb-8 text-lg max-w-xl mx-auto">
                Get a customized multi-day trip quote with same driver guarantee
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <TrackedCta
                  type="call"
                  location="roundtrip_hub_footer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-amber-500/25 hover:scale-[1.02] transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call: 7668570551
                </TrackedCta>
                <TrackedCta
                  type="whatsapp"
                  location="roundtrip_hub_footer"
                  href="https://wa.me/917668570551?text=I want to book a round trip cab"
                  message="I want to book a round trip cab"
                  className="inline-flex items-center justify-center gap-2 bg-[#FACF2D] text-slate-950 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-amber-300 transition-all"
                >
                  WhatsApp Booking
                  <ChevronRight className="w-5 h-5" />
                </TrackedCta>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
