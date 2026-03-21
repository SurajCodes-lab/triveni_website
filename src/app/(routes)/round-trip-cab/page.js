import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, IndianRupee, Calendar, Route } from '@/components/ui/icons';
import { getGeneralContent, getWeddingPages } from '@/utilis/linkingHelper';

export const revalidate = false;

export const metadata = {
  title: 'Round Trip Cab Booking 2026 | Same Driver | Sedan ₹11/km | Multi-Day',
  description: 'Book round trip cabs with same driver for multi-day trips. Sedan ₹11/km, SUV ₹15/km. Delhi-Agra, Delhi-Jaipur & 500+ routes. Flexible schedules. Call 7668570551.',
  keywords: 'round trip cab, round trip taxi, round trip cab booking, return cab, round trip taxi service, multi-day cab, round trip outstation cab, round trip cab rates, round trip cab with driver, same driver cab, Delhi to Agra round trip, Delhi to Jaipur round trip, round trip cab near me, cheap round trip cab, affordable round trip taxi, family cab booking, vacation cab rental, round trip cab Delhi, round trip cab Agra, round trip cab Jaipur',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: {
    canonical: '/round-trip-cab',
  },
  openGraph: {
    title: 'Round Trip Cab Booking | Same Driver | Multi-Day Trips | Triveni Cabs',
    description: 'Book round trip cabs with same driver throughout your trip. Sedan ₹11/km. Multi-day packages. Flexible schedules. 500+ routes.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/round-trip-cab',
    siteName: 'Triveni Cabs',
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
    title: 'Round Trip Cab | Same Driver | Multi-Day | Triveni Cabs',
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
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Round Trip Cab Booking Service",
    "name": "Round Trip Cab Booking - Multi-Day with Same Driver",
    "description": "Book round trip cabs across India starting at ₹11/km. Same driver throughout your trip, multi-day packages, flexible schedules on 500+ routes.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "email": "cabstriveni@gmail.com",
      "url": "https://www.trivenicabs.in",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "366 Dandupura near Tajganj",
        "addressLocality": "Agra",
        "addressRegion": "UP",
        "postalCode": "282006",
        "addressCountry": "IN"
      }
    },
    "areaServed": { "@type": "Country", "name": "India" },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "11",
      "highPrice": "24",
      "priceCurrency": "INR"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "10000",
      "bestRating": "5"
    }
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
      answer: "Round trip cab pricing is calculated per-km with a minimum of 250 km per day. Sedan costs ₹11/km, SUV ₹15/km, Tempo Traveller ₹24/km. For a 2-day trip, minimum billing is 500 km (250 x 2). Driver allowance of ₹300/night applies for overnight trips."
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
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  const roundTripRoutes = [
    { from: "Delhi", to: "Agra", days: "1-2 Days", price: "₹5,500+", highlights: "Taj Mahal, Agra Fort, Fatehpur Sikri", href: "/delhi-to-agra" },
    { from: "Delhi", to: "Jaipur", days: "2-3 Days", price: "₹6,160+", highlights: "Hawa Mahal, Amber Fort, City Palace", href: "/delhi-to-jaipur" },
    { from: "Delhi", to: "Shimla", days: "3-4 Days", price: "₹7,700+", highlights: "Mall Road, Ridge, Kufri, Naldehra", href: "/delhi-to-shimla" },
    { from: "Delhi", to: "Manali", days: "4-5 Days", price: "₹11,880+", highlights: "Solang Valley, Rohtang, Old Manali", href: "/delhi-to-manali" },
    { from: "Delhi", to: "Haridwar-Rishikesh", days: "2-3 Days", price: "₹5,500+", highlights: "Ganga Aarti, Lakshman Jhula, Rafting", href: "/delhi-to-haridwar" },
    { from: "Delhi", to: "Amritsar", days: "2-3 Days", price: "₹9,900+", highlights: "Golden Temple, Wagah Border, Jallianwala", href: "/delhi-to-amritsar" },
    { from: "Jaipur", to: "Udaipur", days: "2-3 Days", price: "₹8,690+", highlights: "Lake Pichola, City Palace, Ranakpur", href: "/jaipur-to-udaipur" },
    { from: "Delhi", to: "Chandigarh", days: "1-2 Days", price: "₹5,500+", highlights: "Rock Garden, Sukhna Lake, Rose Garden", href: "/delhi-to-chandigarh" },
    { from: "Agra", to: "Jaipur", days: "2-3 Days", price: "₹5,280+", highlights: "Fatehpur Sikri, Bharatpur, Amber Fort", href: "/agra-to-jaipur" },
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
    { days: "2-Day Trip", minKm: "500 km", sedanCost: "₹5,500", suvCost: "₹7,500", tempoPrice: "₹12,000", example: "Delhi-Agra, Delhi-Chandigarh" },
    { days: "3-Day Trip", minKm: "750 km", sedanCost: "₹8,250", suvCost: "₹11,250", tempoPrice: "₹18,000", example: "Delhi-Jaipur, Delhi-Haridwar-Rishikesh" },
    { days: "5-Day Trip", minKm: "1,250 km", sedanCost: "₹13,750", suvCost: "₹18,750", tempoPrice: "₹30,000", example: "Golden Triangle, Delhi-Manali" },
    { days: "7-Day Trip", minKm: "1,750 km", sedanCost: "₹19,250", suvCost: "₹26,250", tempoPrice: "₹42,000", example: "Rajasthan Circuit, Himachal Tour" },
  ];

  const journeySteps = [
    { step: "1", title: "Share Your Itinerary", desc: "Tell us your destination, dates, and group size. We plan the perfect route." },
    { step: "2", title: "Get Instant Quote", desc: "Receive transparent per-km pricing with no hidden charges. Compare vehicle options." },
    { step: "3", title: "Meet Your Driver", desc: "Your dedicated driver arrives on time. Same person for your entire journey." },
    { step: "4", title: "Explore Freely", desc: "Sightsee, shop, dine — your car and driver are available throughout your trip." },
    { step: "5", title: "Return Comfortably", desc: "Head back home with the same trusted driver. Pay only for km driven." },
  ];

  const colorCycle = [
    { bg: "bg-violet-500", light: "bg-violet-100", text: "text-violet-700", border: "border-violet-200" },
    { bg: "bg-indigo-500", light: "bg-indigo-100", text: "text-indigo-700", border: "border-indigo-200" },
    { bg: "bg-purple-500", light: "bg-purple-100", text: "text-purple-700", border: "border-purple-200" },
    { bg: "bg-fuchsia-500", light: "bg-fuchsia-100", text: "text-fuchsia-700", border: "border-fuchsia-200" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* === Deep Indigo / Violet Journey Theme === */}
      <div className="min-h-screen bg-[#f8f6ff]">

        {/* ─── HERO: Split asymmetric with orbital ring decoration ─── */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-[#1a0b3e] via-[#2d1b69] to-[#0f172a]">
          {/* Orbital rings decoration */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-violet-500/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-purple-500/15 rotate-12" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-fuchsia-500/10 -rotate-12" />
          {/* Gradient orbs */}
          <div className="absolute top-10 right-20 w-96 h-96 bg-violet-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-fuchsia-500/15 rounded-full blur-[100px]" />
          <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-indigo-400/10 rounded-full blur-[60px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-5 gap-12 items-center">
            {/* Left: Content (3 cols) */}
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 bg-violet-500/15 backdrop-blur-md px-5 py-2 rounded-full mb-8 border border-violet-400/20">
                <Route className="w-4 h-4 text-violet-300" />
                <span className="text-violet-200 font-semibold text-sm tracking-wider uppercase">Round Trip Cab Booking</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1]">
                Your Journey,{' '}
                <span className="text-transparent bg-gradient-to-r from-violet-400 via-fuchsia-400 to-purple-300 bg-clip-text">
                  Full Circle
                </span>
              </h1>

              <p className="text-lg md:text-xl text-violet-200/80 mb-8 max-w-xl leading-relaxed">
                Multi-day cab trips with the same driver. Explore destinations freely, sightsee locally, and travel back comfortably. From just ₹11/km.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="tel:+917668570551"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.02] transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call Now: 7668570551
                </Link>
                <Link
                  href="https://wa.me/917668570551?text=I want to book a round trip cab"
                  className="inline-flex items-center gap-2 bg-white/[0.07] backdrop-blur-xl text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/[0.12] hover:bg-white/[0.12] transition-all"
                >
                  WhatsApp Booking
                </Link>
              </div>
            </div>

            {/* Right: Floating stat cards (2 cols) */}
            <div className="lg:col-span-2 hidden lg:flex flex-col gap-4">
              {[
                { icon: Users, value: "Same Driver", label: "Throughout Your Trip", gradient: "from-violet-500/20 to-purple-500/20" },
                { icon: Calendar, value: "2 to 15+ Days", label: "Multi-Day Flexibility", gradient: "from-fuchsia-500/20 to-pink-500/20" },
                { icon: Star, value: "4.8/5 Rating", label: "2,847+ Happy Travelers", gradient: "from-indigo-500/20 to-violet-500/20" },
                { icon: IndianRupee, value: "₹11/km Sedan", label: "Transparent Per-km Billing", gradient: "from-purple-500/20 to-fuchsia-500/20" },
              ].map((card, idx) => (
                <div key={idx} className={`bg-gradient-to-r ${card.gradient} backdrop-blur-2xl rounded-2xl p-5 border border-white/[0.08] hover:border-white/[0.15] transition-all`}>
                  <div className="flex items-center gap-4">
                    <div className="p-2.5 bg-white/10 rounded-xl">
                      <card.icon className="w-5 h-5 text-violet-300" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{card.value}</div>
                      <div className="text-xs text-violet-300/70">{card.label}</div>
                    </div>
                  </div>
                </div>
              ))}
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
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a0b3e] mb-6 text-center">
              The Complete Round Trip Cab Experience
            </h2>
            <div className="prose prose-lg max-w-none text-stone-700 space-y-4">
              <p>
                A <strong>round trip cab</strong> is the smartest way to travel for multi-day trips across North India. Unlike booking two separate <Link href="/one-way-cab" className="text-violet-600 hover:text-fuchsia-600 underline underline-offset-2">one-way cabs</Link>, a round trip gives you the <strong>same driver throughout your journey</strong> — from pickup to sightseeing to the return home. At Triveni Cabs, our round trip service starts at just <strong>₹11/km for sedans</strong>, with SUVs at ₹15/km and <Link href="/tempo-traveller" className="text-violet-600 hover:text-fuchsia-600 underline underline-offset-2">tempo travellers</Link> at ₹24/km, making it the most cost-effective choice for family vacations, group tours, and <Link href="/corporate-transportation-service" className="text-violet-600 hover:text-fuchsia-600 underline underline-offset-2">corporate business trips</Link> lasting 2 to 15+ days.
              </p>
              <p>
                What sets our <strong>round trip cab booking</strong> apart is the flexibility and personal touch. Your dedicated driver gets to know your preferences, suggests local attractions, waits while you explore, and ensures a comfortable ride throughout. With a minimum of just 250 km per day (compared to 300 km for one-way), round trip cabs offer better value for travelers who want to explore destinations at their own pace. Popular routes include <Link href="/agra" className="text-violet-600 hover:text-fuchsia-600 underline underline-offset-2">Delhi to Agra</Link>, <Link href="/jaipur" className="text-violet-600 hover:text-fuchsia-600 underline underline-offset-2">Delhi to Jaipur</Link>, <Link href="/shimla" className="text-violet-600 hover:text-fuchsia-600 underline underline-offset-2">Delhi to Shimla</Link>, <Link href="/manali" className="text-violet-600 hover:text-fuchsia-600 underline underline-offset-2">Delhi to Manali</Link>, and the iconic <Link href="/sightseeing/golden-triangle-tour-3-days" className="text-violet-600 hover:text-fuchsia-600 underline underline-offset-2">Golden Triangle circuit</Link>.
              </p>
              <p>
                Every round trip cab comes with <Link href="/safety" className="text-violet-600 hover:text-fuchsia-600 underline underline-offset-2">GPS tracking and verified drivers</Link>, comprehensive insurance, 5+ years of highway experience, and 24/7 support at <strong>7668570551</strong>. Whether you are planning a <Link href="/weekend-getaways-from-delhi-by-car" className="text-violet-600 hover:text-fuchsia-600 underline underline-offset-2">weekend getaway to the hills</Link>, a week-long <Link href="/sightseeing/rajasthan-tour-from-delhi" className="text-violet-600 hover:text-fuchsia-600 underline underline-offset-2">Rajasthan circuit tour</Link>, or a <Link href="/religious-tours/char-dham-yatra-by-car" className="text-violet-600 hover:text-fuchsia-600 underline underline-offset-2">religious pilgrimage</Link> across multiple cities, our <Link href="/reviews" className="text-violet-600 hover:text-fuchsia-600 underline underline-offset-2">4.8-star rated</Link> round trip service ensures you travel safely, comfortably, and affordably. Check our <Link href="/pricing" className="text-violet-600 hover:text-fuchsia-600 underline underline-offset-2">complete fare chart</Link> for detailed pricing.
              </p>
            </div>
          </div>
        </section>

        {/* ─── JOURNEY STEPS: Vertical timeline with violet connectors ─── */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-sm font-bold text-violet-600 bg-violet-100 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">How It Works</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a0b3e]">
                Your Round Trip in 5 Simple Steps
              </h2>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-fuchsia-500 to-purple-500 rounded-full" />

              <div className="space-y-8">
                {journeySteps.map((item, idx) => (
                  <div key={idx} className="relative pl-16 md:pl-20">
                    {/* Step number circle */}
                    <div className="absolute left-0 md:left-2 top-1 w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center shadow-lg shadow-violet-500/20">
                      <span className="text-white font-black text-lg">{item.step}</span>
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-[0_4px_24px_rgba(109,40,217,0.06)] border border-violet-100/50 hover:shadow-[0_8px_32px_rgba(109,40,217,0.1)] hover:border-violet-200 transition-all">
                      <h3 className="font-bold text-[#1a0b3e] text-lg mb-1">{item.title}</h3>
                      <p className="text-stone-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── MULTI-DAY PACKAGES: Gradient cards with pricing grid ─── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-sm font-bold text-fuchsia-600 bg-fuchsia-100 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">Pricing</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a0b3e] mb-4">
                Multi-Day Round Trip Packages
              </h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Estimated costs based on minimum km billing. Actual cost based on km driven.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {multiDayPackages.map((pkg, idx) => {
                const color = colorCycle[idx % colorCycle.length];
                return (
                  <div key={idx} className={`rounded-2xl p-1 bg-gradient-to-br from-violet-500/10 via-fuchsia-500/5 to-purple-500/10`}>
                    <div className="bg-white rounded-[14px] p-6 h-full">
                      <div className="flex items-center justify-between mb-5">
                        <h3 className="text-xl font-black text-[#1a0b3e]">{pkg.days}</h3>
                        <span className={`text-xs font-bold ${color.text} ${color.light} px-3 py-1 rounded-full`}>Min {pkg.minKm}</span>
                      </div>

                      <div className="grid grid-cols-3 gap-3 mb-5">
                        {[
                          { label: "Sedan", price: pkg.sedanCost, sub: "₹11/km" },
                          { label: "SUV", price: pkg.suvCost, sub: "₹15/km" },
                          { label: "Tempo", price: pkg.tempoPrice, sub: "₹24/km" },
                        ].map((v, i) => (
                          <div key={i} className="text-center p-3 bg-[#f8f6ff] rounded-xl border border-violet-100/60">
                            <div className="text-[10px] text-stone-400 uppercase font-semibold tracking-wider mb-1">{v.label}</div>
                            <div className="font-black text-[#1a0b3e] text-lg">{v.price}</div>
                            <div className="text-[10px] text-violet-500 font-medium">{v.sub}</div>
                          </div>
                        ))}
                      </div>

                      <p className="text-sm text-stone-500 flex items-center gap-2">
                        <Route className="w-4 h-4 text-violet-400" />
                        {pkg.example}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <p className="text-sm text-stone-500 mt-8 text-center">
              * Driver allowance ₹300/night extra. Toll, parking, state tax at actual. GST 5% applicable.
            </p>
          </div>
        </section>

        {/* ─── POPULAR ROUTES: Card carousel style ─── */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-sm font-bold text-indigo-600 bg-indigo-100 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">Destinations</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a0b3e] mb-4">
                Popular Round Trip Routes
              </h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Most booked multi-day round trip destinations with sightseeing highlights
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {roundTripRoutes.map((route, idx) => (
                <Link key={idx} href={route.href} className="group block">
                  <div className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(109,40,217,0.05)] border border-violet-100/40 hover:shadow-[0_8px_32px_rgba(109,40,217,0.12)] hover:border-violet-300/50 transition-all">
                    {/* Top color bar */}
                    <div className="h-1.5 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-500" />
                    <div className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-2 bg-violet-100 rounded-xl">
                          <MapPin className="w-5 h-5 text-violet-600" />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#1a0b3e] group-hover:text-violet-600 transition-colors">
                            {route.from} → {route.to}
                          </h3>
                          <p className="text-xs text-violet-500 font-medium">{route.days}</p>
                        </div>
                      </div>

                      <p className="text-sm text-stone-500 mb-4">{route.highlights}</p>

                      <div className="flex items-center justify-between pt-3 border-t border-violet-100/60">
                        <div>
                          <span className="text-[10px] text-stone-400 uppercase tracking-wider">Sedan from</span>
                          <div className="text-lg font-black text-violet-600">{route.price}</div>
                        </div>
                        <span className="bg-violet-50 text-violet-600 px-4 py-2 rounded-full text-sm font-bold flex items-center gap-1 group-hover:bg-violet-100 transition-colors">
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
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-[#1a0b3e] via-[#2d1b69] to-[#4c1d95]">
          {/* Decorative blur orbs */}
          <div className="absolute top-20 right-10 w-80 h-80 bg-fuchsia-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 left-20 w-60 h-60 bg-violet-400/15 rounded-full blur-[80px]" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-sm font-bold text-fuchsia-300 bg-fuchsia-500/15 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase border border-fuchsia-400/20">Advantages</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Benefits of Round Trip Cab Booking
              </h2>
              <p className="text-violet-200/70 text-lg max-w-2xl mx-auto">
                Why families and groups prefer round trip over separate bookings
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((item, idx) => (
                <div key={idx} className="bg-white/[0.06] backdrop-blur-2xl rounded-2xl p-6 border border-white/[0.08] hover:bg-white/[0.1] hover:border-white/[0.15] transition-all group">
                  <div className="inline-flex p-3 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-xl mb-4 border border-white/[0.06]">
                    <item.icon className="w-6 h-6 text-violet-300" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-fuchsia-200 transition-colors">{item.title}</h3>
                  <p className="text-violet-200/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── COMPARE TRIP TYPES: Side-by-side cards ─── */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-bold text-purple-600 bg-purple-100 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">Compare</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a0b3e] mb-4">
                Not Sure? Compare Trip Types
              </h2>
              <p className="text-lg text-stone-600">
                Round trip is ideal for multi-day exploration. One-way is better for single-direction travel.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/round-trip-cab" className="block group">
                <div className="bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl p-6 text-white shadow-lg shadow-violet-500/15 hover:shadow-violet-500/25 transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <Route className="w-5 h-5" />
                    <span className="text-sm font-bold uppercase tracking-wider text-violet-200">Round Trip</span>
                  </div>
                  <h3 className="text-xl font-black mb-3">Best for Multi-Day Trips</h3>
                  <ul className="space-y-2 text-sm text-violet-100">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Same driver throughout</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Local sightseeing included</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> 250 km/day minimum</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" /> Extend trip on the go</li>
                  </ul>
                </div>
              </Link>
              <Link href="/one-way-cab" className="block group">
                <div className="bg-white rounded-2xl p-6 border-2 border-violet-100 hover:border-violet-300 shadow-sm hover:shadow-md transition-all">
                  <div className="flex items-center gap-2 mb-3">
                    <ArrowRight className="w-5 h-5 text-violet-500" />
                    <span className="text-sm font-bold uppercase tracking-wider text-violet-500">One-Way</span>
                  </div>
                  <h3 className="text-xl font-black text-[#1a0b3e] mb-3">Best for Point-to-Point</h3>
                  <ul className="space-y-2 text-sm text-stone-600">
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" /> Pay for one direction only</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" /> Save up to 50% vs round trip</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" /> No return fare needed</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 mt-0.5 text-violet-400 flex-shrink-0" /> Drop and go convenience</li>
                  </ul>
                </div>
              </Link>
            </div>

            <div className="mt-6 text-center">
              <Link href="/outstation-cabs" className="inline-flex items-center gap-2 text-violet-600 font-semibold hover:text-fuchsia-600 transition-colors text-sm">
                View All Outstation Options
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── FAQ: Accordion-style with numbered badges ─── */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-sm font-bold text-violet-600 bg-violet-100 px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a0b3e] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-stone-600">
                Common questions about round trip cab booking
              </p>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, idx) => (
                <div key={idx} className="bg-[#f8f6ff] rounded-2xl p-6 border border-violet-100/60 hover:border-violet-200 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white font-bold text-sm">{idx + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#1a0b3e] mb-2">{faq.question}</h3>
                      <p className="text-stone-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── DYNAMIC: Travel Guides & Wedding Services ─── */}
        <section className="py-16 px-4 bg-[#f0ecff]">
          <div className="max-w-7xl mx-auto space-y-14">
            <div>
              <h2 className="text-2xl font-bold text-[#1a0b3e] mb-6">Travel Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {getGeneralContent().map((item, index) => (
                  <Link key={index} href={item.url} className="group block bg-white rounded-xl p-5 border border-violet-100/60 hover:border-violet-300 hover:shadow-md transition-all">
                    <h3 className="font-semibold text-[#1a0b3e] group-hover:text-violet-700 transition-colors">{item.title}</h3>
                    <p className="text-stone-500 text-sm mt-1">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1a0b3e] mb-6">Wedding Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {getWeddingPages().map((item, index) => (
                  <Link key={index} href={item.url} className="group block bg-white rounded-xl p-5 border border-violet-100/60 hover:border-violet-300 hover:shadow-md transition-all">
                    <h3 className="font-semibold text-[#1a0b3e] group-hover:text-violet-700 transition-colors">{item.title}</h3>
                    <p className="text-stone-500 text-sm mt-1">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── INTERLINKING: Comprehensive footer-style grids ─── */}
        <section className="py-16 px-4 border-t border-violet-100">
          <div className="max-w-7xl mx-auto space-y-12">

            {/* Related Services */}
            <div>
              <h2 className="text-sm font-bold text-violet-600 mb-5 tracking-widest uppercase">Related Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { l: "One-Way Cab Service", h: "/one-way-cab", d: "Save 50% — pay single direction only" },
                  { l: "Outstation Cab Booking", h: "/outstation-cabs", d: "Intercity travel from ₹11/km" },
                  { l: "Local Taxi Hourly Rental", h: "/local-taxi", d: "Hourly packages from ₹1,200" },
                  { l: "Airport Transfer Service", h: "/airport-service", d: "Flight-tracked pickups & drops" },
                  { l: "Wedding Car Rental", h: "/wedding", d: "Decorated luxury cars for weddings" },
                  { l: "Corporate Transportation", h: "/corporate-transportation-service", d: "Employee transport & business travel" },
                ].map((s, i) => (
                  <Link key={i} href={s.h} className="block bg-white rounded-xl p-4 border border-violet-100/60 hover:border-violet-300 hover:shadow-md transition-all group">
                    <span className="font-semibold text-sm text-stone-700 group-hover:text-violet-700 transition-colors">{s.l}</span>
                    <span className="block text-xs text-stone-400 mt-1">{s.d}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular Round Trip Routes */}
            <div>
              <h2 className="text-sm font-bold text-stone-400 mb-4 tracking-widest uppercase">Popular Round Trip Routes</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { l: "Delhi to Agra Round Trip", h: "/delhi-to-agra" },
                  { l: "Delhi to Jaipur Round Trip", h: "/delhi-to-jaipur" },
                  { l: "Delhi to Shimla Round Trip", h: "/delhi-to-shimla" },
                  { l: "Delhi to Manali Round Trip", h: "/delhi-to-manali" },
                  { l: "Delhi to Chandigarh Round Trip", h: "/delhi-to-chandigarh" },
                  { l: "Delhi to Haridwar Round Trip", h: "/delhi-to-haridwar" },
                  { l: "Delhi to Rishikesh Round Trip", h: "/delhi-to-rishikesh" },
                  { l: "Agra to Jaipur Round Trip", h: "/agra-to-jaipur" },
                  { l: "Delhi to Amritsar Round Trip", h: "/delhi-to-amritsar" },
                  { l: "Delhi to Nainital Round Trip", h: "/delhi-to-nainital" },
                ].map((r, i) => (
                  <Link key={i} href={r.h} className="bg-white rounded-full px-5 py-2.5 text-stone-700 hover:bg-violet-50 hover:text-violet-700 transition-colors text-sm font-medium border border-violet-100/60 hover:border-violet-300">{r.l}</Link>
                ))}
              </div>
            </div>

            {/* Popular Cities */}
            <div>
              <h2 className="text-sm font-bold text-stone-400 mb-4 tracking-widest uppercase">Popular Cities</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { l: "Delhi Cab Service", h: "/delhi" }, { l: "Agra Cab Service", h: "/agra" }, { l: "Jaipur Cab Service", h: "/jaipur" },
                  { l: "Chandigarh Cab Service", h: "/chandigarh" }, { l: "Shimla Cab Service", h: "/shimla" }, { l: "Manali Cab Service", h: "/manali" },
                  { l: "Haridwar Cab Service", h: "/haridwar" }, { l: "Rishikesh Cab Service", h: "/rishikesh" }, { l: "Amritsar Cab Service", h: "/amritsar" },
                  { l: "Udaipur Cab Service", h: "/udaipur" },
                ].map((c, i) => (
                  <Link key={i} href={c.h} className="bg-white rounded-full px-5 py-2.5 text-stone-700 hover:bg-violet-50 hover:text-violet-700 transition-colors text-sm font-medium border border-violet-100/60 hover:border-violet-300">{c.l}</Link>
                ))}
              </div>
            </div>

            {/* Popular Tours */}
            <div>
              <h2 className="text-sm font-bold text-stone-400 mb-4 tracking-widest uppercase">Popular Tours</h2>
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
                  <Link key={i} href={t.h} className="bg-white rounded-full px-5 py-2.5 text-stone-700 hover:bg-violet-50 hover:text-violet-700 transition-colors text-sm font-medium border border-violet-100/60 hover:border-violet-300">{t.l}</Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-sm font-bold text-stone-400 mb-4 tracking-widest uppercase">Quick Links</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { l: "Pricing & Fare Chart", h: "/pricing" }, { l: "Vehicle Fleet", h: "/vehicles" },
                  { l: "Customer Reviews", h: "/reviews" }, { l: "Safety Standards", h: "/safety" },
                  { l: "Tempo Traveller", h: "/tempo-traveller" }, { l: "Contact Us", h: "/contact" },
                ].map((q, i) => (
                  <Link key={i} href={q.h} className="bg-white rounded-full px-5 py-2.5 text-stone-700 hover:bg-violet-50 hover:text-violet-700 transition-colors text-sm font-medium border border-violet-100/60 hover:border-violet-300">{q.l}</Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA: Gradient glass card ─── */}
        <section className="py-20 px-4 bg-gradient-to-br from-[#1a0b3e] to-[#2d1b69]">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/[0.06] backdrop-blur-2xl rounded-3xl p-10 md:p-14 text-center border border-white/[0.1]">
              <div className="inline-flex p-3 bg-fuchsia-500/15 rounded-xl mb-6 border border-fuchsia-400/20">
                <Route className="w-8 h-8 text-fuchsia-300" />
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                Plan Your Round Trip Today
              </h2>
              <p className="text-violet-200/70 mb-8 text-lg max-w-xl mx-auto">
                Get a customized multi-day trip quote with same driver guarantee
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="tel:+917668570551"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-violet-500/25 hover:scale-[1.02] transition-all"
                >
                  <Phone className="w-5 h-5" />
                  Call: 7668570551
                </Link>
                <Link
                  href="https://wa.me/917668570551?text=I want to book a round trip cab"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#1a0b3e] px-8 py-4 rounded-2xl font-bold text-lg hover:bg-violet-50 transition-all"
                >
                  WhatsApp Booking
                  <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
