import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, IndianRupee, Calendar, Route, Zap, Navigation } from '@/components/ui/icons';
import { getGeneralContent, getWeddingPages } from '@/utilis/linkingHelper';

export const metadata = {
  title: 'Outstation Cab Booking 2026 | Sedan ₹11/km, SUV ₹15/km | 500+ Routes',
  description: 'Book outstation cabs from Delhi, Agra, Jaipur at ₹11/km. One-way & round trip. 500+ routes, verified drivers, AC vehicles. 10,000+ trips completed. Call 7668570551.',
  keywords: 'outstation cab booking, outstation taxi, intercity cab, outstation cab service, outstation taxi booking, one way outstation cab, round trip cab booking, Delhi to Agra cab, Delhi to Jaipur taxi, Delhi to Manali cab, outstation cab near me, cheap outstation cab, best outstation cab service, outstation cab with driver, long distance taxi India, intercity taxi service, outstation car rental, cab booking for outstation, affordable outstation cab, outstation cab rates',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/outstation-cabs' },
  openGraph: {
    title: 'Outstation Cab Booking | Sedan ₹11/km | 500+ Routes Across India',
    description: 'Book outstation cabs starting ₹11/km. Delhi, Agra, Jaipur, Shimla, Manali & 500+ routes. One-way & round trip. Verified drivers. 24/7 support.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/outstation-cabs', siteName: 'Triveni Cabs',
    images: [{ url: '/images/citypage_hero_section_image.jpg', width: 1200, height: 630, alt: 'Outstation Cab Booking - Triveni Cabs' }]
  },
  twitter: {
    card: 'summary_large_image', title: 'Outstation Cab Booking | ₹11/km | 500+ Routes | Triveni Cabs',
    description: 'Book outstation cabs starting ₹11/km. One-way & round trip to 500+ destinations. Verified drivers, AC vehicles. Call 7668570551.',
    creator: '@trivenicabs', site: '@trivenicabs', images: ['/images/citypage_hero_section_image.jpg']
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function OutstationCabsPage() {
  /* ──────── SCHEMA MARKUP ──────── */
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    "serviceType": "Outstation Cab Booking Service",
    "name": "Outstation Cab Booking - One Way & Round Trip",
    "description": "Book outstation cabs across India starting at ₹11/km. One-way and round trip options to 500+ destinations with verified drivers and AC vehicles.",
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "email": "cabstriveni@gmail.com", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "addressRegion": "UP", "postalCode": "282006", "addressCountry": "IN" } },
    "areaServed": { "@type": "Country", "name": "India" },
    "offers": { "@type": "AggregateOffer", "lowPrice": "11", "highPrice": "24", "priceCurrency": "INR", "offerCount": "500" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "2847", "bestRating": "5" }
  };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Outstation Cabs", "item": "https://www.trivenicabs.in/outstation-cabs" }] };
  const faqData = [
    { question: "What is the cost of outstation cab booking?", answer: "Outstation cab rates start from ₹11/km for Sedan (Swift Dzire, Etios), ₹15/km for SUV (Innova Crysta, Ertiga), and ₹24/km for Tempo Traveller (12-26 seater). Minimum billing of 250 km/day for round trips and 300 km for one-way trips. Toll, parking, and state tax extra." },
    { question: "Can I book a one-way outstation cab?", answer: "Yes, we offer one-way outstation cabs on all major routes. One-way pricing means you pay only for a single journey, saving up to 50% compared to round-trip charges. Available on Delhi-Agra, Delhi-Jaipur, Delhi-Chandigarh, and 200+ routes." },
    { question: "What is included in outstation cab fare?", answer: "Our outstation cab fare includes driver charges, fuel cost, and vehicle usage. Toll charges, state taxes, parking fees, and driver allowance (₹300/night for trips beyond 10 PM) are extra. No hidden charges - you get a detailed fare breakdown before booking." },
    { question: "How far in advance should I book an outstation cab?", answer: "We recommend booking at least 6-12 hours in advance for guaranteed availability. During peak season (holidays, festivals), book 2-3 days ahead. Instant booking available subject to vehicle availability. Call 7668570551 for same-day bookings." },
    { question: "What vehicles are available for outstation travel?", answer: "We offer Sedan (Swift Dzire, Toyota Etios) for 1-4 passengers, SUV (Innova Crysta, Maruti Ertiga) for 4-7 passengers, and Tempo Traveller (12, 17, 20, 26 seater) for groups. All vehicles are AC, GPS-tracked, and regularly maintained." },
    { question: "Is there a minimum km charge for outstation trips?", answer: "Yes, minimum billing is 250 km/day for round trips and 300 km for one-way trips. For example, a Delhi to Agra round trip (400 km actual) would be billed for 400 km. Extra km beyond daily limit charged at per-km rate." },
    { question: "Can I make stops during an outstation trip?", answer: "Yes, you can make multiple stops during your outstation journey. For one-way trips, up to 2 stops are included. For round trips, unlimited stops are allowed within your route. Additional detours may incur extra km charges." },
    { question: "What is the cancellation policy for outstation cabs?", answer: "Free cancellation up to 6 hours before pickup. Cancellation within 6 hours incurs 25% charge. No-show or last-minute cancellation is charged at 50%. For special occasions and peak dates, cancellation policies may vary." }
  ];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };
  const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "How to Book an Outstation Cab with Triveni Cabs", "description": "Simple 4-step process to book an outstation cab for your intercity travel needs", "totalTime": "PT3M", "step": [{ "@type": "HowToStep", "position": 1, "name": "Choose Your Route", "text": "Select your pickup city, destination, and travel date. Choose between one-way or round trip options." }, { "@type": "HowToStep", "position": 2, "name": "Select Your Vehicle", "text": "Pick from Sedan (₹11/km), SUV (₹15/km), or Tempo Traveller (₹24/km) based on group size and comfort preference." }, { "@type": "HowToStep", "position": 3, "name": "Confirm Booking", "text": "Call 7668570551 or WhatsApp to confirm your booking. Get instant confirmation with driver details and exact fare." }, { "@type": "HowToStep", "position": 4, "name": "Enjoy Your Trip", "text": "Your verified driver arrives on time with a clean, sanitized AC vehicle. Track your ride with GPS and enjoy 24/7 support." }] };

  /* ──────── DATA ──────── */
  const popularRoutes = [
    { from: "Delhi", to: "Agra", distance: "230 km", price: "₹2,530", time: "3.5 hrs", href: "/delhi-to-agra", tag: "Most Booked" },
    { from: "Delhi", to: "Jaipur", distance: "280 km", price: "₹3,080", time: "5 hrs", href: "/delhi-to-jaipur", tag: "Popular" },
    { from: "Delhi", to: "Manali", distance: "540 km", price: "₹5,940", time: "12 hrs", href: "/delhi-to-manali", tag: "Scenic" },
    { from: "Delhi", to: "Shimla", distance: "350 km", price: "₹3,850", time: "7 hrs", href: "/delhi-to-shimla", tag: "Hill Station" },
    { from: "Delhi", to: "Haridwar", distance: "230 km", price: "₹2,530", time: "5 hrs", href: "/delhi-to-haridwar", tag: "Pilgrimage" },
    { from: "Delhi", to: "Chandigarh", distance: "250 km", price: "₹2,750", time: "4.5 hrs", href: "/delhi-to-chandigarh", tag: "Business" },
    { from: "Agra", to: "Jaipur", distance: "240 km", price: "₹2,640", time: "4.5 hrs", href: "/agra-to-jaipur", tag: "Golden Triangle" },
    { from: "Jaipur", to: "Udaipur", distance: "395 km", price: "₹4,345", time: "6.5 hrs", href: "/jaipur-to-udaipur", tag: "Rajasthan" },
    { from: "Delhi", to: "Rishikesh", distance: "250 km", price: "₹2,750", time: "6 hrs", href: "/delhi-to-rishikesh", tag: "Adventure" },
    { from: "Chandigarh", to: "Manali", distance: "310 km", price: "₹3,410", time: "7 hrs", href: "/chandigarh-to-manali", tag: "Hill Road" },
    { from: "Jaipur", to: "Jodhpur", distance: "340 km", price: "₹3,740", time: "5.5 hrs", href: "/jaipur-to-jodhpur", tag: "Desert" },
    { from: "Delhi", to: "Amritsar", distance: "450 km", price: "₹4,950", time: "8 hrs", href: "/delhi-to-amritsar", tag: "Heritage" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      {/* ===== DESIGN: Dark futuristic with gradient mesh, glassmorphism, grid overlay ===== */}
      <div className="min-h-screen bg-[#07070d] text-white">

        {/* ─── HERO: Split layout with glassmorphism pricing card ─── */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Gradient mesh */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-yellow-500/25 rounded-full blur-[128px]" />
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-amber-600/15 rounded-full blur-[100px] translate-x-1/3" />
            <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px]" />
            {/* Grid overlay */}
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 backdrop-blur-xl px-5 py-2 rounded-full mb-8 border border-yellow-500/20">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                <span className="text-yellow-300/90 font-medium text-sm tracking-wide">500+ Outstation Routes</span>
              </div>

              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black mb-6 leading-[1.08] tracking-tight">
                Outstation<br />
                <span className="text-transparent bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-400 bg-clip-text">Cab Booking</span>
              </h1>

              <p className="text-lg md:text-xl text-white/50 mb-10 max-w-lg leading-relaxed">
                One-way & round trip cabs across India. Transparent pricing, verified drivers, AC vehicles from <strong className="text-yellow-400 font-bold">₹11/km</strong>.
              </p>

              {/* Mini stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
                {[{ v: "10K+", l: "Trips", i: Car }, { v: "4.8★", l: "Rating", i: Star }, { v: "500+", l: "Routes", i: Route }, { v: "24/7", l: "Support", i: Clock }].map((s, i) => (
                  <div key={i} className="bg-white/[0.04] rounded-xl p-3 border border-white/[0.06] hover:border-yellow-500/20 transition-all text-center">
                    <s.i className="w-4 h-4 text-yellow-400/70 mx-auto mb-1" />
                    <div className="font-bold text-sm">{s.v}</div>
                    <div className="text-[10px] text-white/30 uppercase tracking-wider">{s.l}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-7 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-yellow-500/20 hover:shadow-yellow-500/35 hover:scale-[1.02] transition-all">
                  <Phone className="w-5 h-5" /> Call: 7668570551
                </Link>
                <Link href="https://wa.me/917668570551?text=I want to book an outstation cab" className="inline-flex items-center gap-2 bg-white/[0.06] backdrop-blur-xl text-white px-7 py-4 rounded-2xl font-bold text-lg border border-white/[0.1] hover:bg-white/[0.1] transition-all">
                  WhatsApp <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right: Glassmorphism vehicle pricing card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/15 to-amber-500/15 rounded-[2rem] blur-xl" />
              <div className="relative bg-white/[0.06] backdrop-blur-2xl rounded-3xl border border-white/[0.1] p-8 shadow-2xl">
                <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <IndianRupee className="w-5 h-5 text-yellow-400" /> Quick Fare Estimate
                </h2>

                <div className="space-y-3">
                  {[
                    { name: "Sedan", models: "Dzire, Etios", rate: "₹11", cap: "4 Pax", gradient: "from-yellow-500/20 to-amber-500/10", border: "border-yellow-500/20" },
                    { name: "SUV", models: "Innova, Ertiga", rate: "₹15", cap: "7 Pax", gradient: "from-orange-500/15 to-red-500/10", border: "border-orange-500/20" },
                    { name: "Tempo", models: "12-26 Seater", rate: "₹24", cap: "12-26", gradient: "from-purple-500/15 to-pink-500/10", border: "border-purple-500/20" },
                  ].map((v, i) => (
                    <div key={i} className={`bg-gradient-to-r ${v.gradient} rounded-2xl p-5 border ${v.border} hover:scale-[1.02] transition-all cursor-pointer`}>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-bold text-lg">{v.name}</div>
                          <div className="text-white/40 text-sm">{v.models}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-black">{v.rate}<span className="text-sm font-normal text-white/40">/km</span></div>
                          <div className="text-white/30 text-xs">{v.cap}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 pt-5 border-t border-white/[0.06] space-y-2">
                  <p className="text-white/30 text-xs flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-green-400/70" /> Min 250 km/day (round) | 300 km (one-way)</p>
                  <p className="text-white/30 text-xs flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-green-400/70" /> Toll, parking, state tax extra at actual</p>
                </div>

                <Link href="/pricing" className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-white/[0.06] text-white/70 py-3 rounded-xl text-sm font-semibold hover:bg-white/[0.1] hover:text-white transition-all border border-white/[0.06]">
                  View Full Pricing <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── OVERVIEW: SEO prose content section ─── */}
        <section className="py-20 px-4 sm:px-6 relative">
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-8 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
              Outstation Cab Booking — Intercity Travel Made Easy
            </h2>
            <div className="space-y-5 text-white/60 text-lg leading-relaxed">
              <p>
                Looking for a reliable <strong className="text-white/90">outstation cab booking</strong> service for your next intercity trip? Triveni Cabs has been connecting travelers across North India since 2015, completing over <strong className="text-white/90">10,000 outstation trips</strong> with a <Link href="/reviews" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2">4.8-star customer rating</Link>. Whether you need a <Link href="/one-way-cab" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2">one-way cab from Delhi to Agra</Link>, a <Link href="/round-trip-cab" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2">round trip to Jaipur</Link>, or a multi-day <Link href="/weekend-getaways-from-delhi-by-car" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2">road trip to Manali</Link> — our fleet of sedans, SUVs, and <Link href="/tempo-traveller" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2">tempo travellers</Link> is ready with transparent per-km pricing and zero hidden charges.
              </p>
              <p>
                Our <strong className="text-white/90">outstation taxi service</strong> covers 500+ routes across Uttar Pradesh, Rajasthan, Himachal Pradesh, Uttarakhand, Punjab, Haryana, and Madhya Pradesh. Every vehicle — from budget sedans like Swift Dzire and Toyota Etios to <Link href="/blog/innova-crysta-outstation-fare-2026" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2">premium Innova Crysta</Link> and spacious tempo travellers — comes equipped with AC, GPS tracking, and a <Link href="/safety" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2">verified professional driver</Link> with 5+ years of highway experience. Based in <Link href="/agra" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2">Agra</Link> (366 Dandupura, near Tajganj), we bring local expertise and round-the-clock support to every journey.
              </p>
              <p>
                What makes our <strong className="text-white/90">intercity cab service</strong> different? Simplicity. Call <strong className="text-white/90">7668570551</strong> or WhatsApp us your route and travel date — receive an instant fare quote within minutes. No app downloads, no surge pricing, no minimum booking value. Rates start at just <strong className="text-white/90">₹11 per km for Sedan</strong>, ₹15/km for SUV, and ₹24/km for Tempo Traveller — check the <Link href="/pricing" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2">complete fare breakdown</Link> or read our <Link href="/blog/delhi-to-agra-cab-fare-guide-2026" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2">Delhi to Agra cab fare guide</Link>. Toll, parking, and state tax are always charged at actuals with complete transparency.
              </p>
              <p>
                Families, solo travelers, <Link href="/corporate-transportation-service" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2">corporate teams</Link>, and <Link href="/wedding" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2">wedding parties</Link> across North India trust Triveni Cabs for safe, comfortable, and affordable <strong className="text-white/90">outstation car rental with driver</strong>. Every driver undergoes police verification, license validation, and annual re-checks. Vehicles are sanitized after each trip, and real-time GPS tracking keeps you and your family informed throughout the journey. Planning a <Link href="/same-day-agra-tour-from-delhi" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2">same-day Agra tour from Delhi</Link> or a <Link href="/sightseeing/golden-triangle-tour-3-days" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2">Golden Triangle tour</Link>? We have you covered. Book once, and you will understand why <Link href="/reviews" className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2">2,847+ customers rate us 4.8 out of 5</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* ─── ROUTES: Bento grid with mixed card sizes ─── */}
        <section className="py-24 px-4 sm:px-6 relative">
          <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-yellow-500/[0.06] rounded-full blur-[100px]" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
              <div>
                <span className="text-yellow-400/70 font-semibold text-sm tracking-widest uppercase">Top Destinations</span>
                <h2 className="text-4xl md:text-5xl font-black mt-2">Popular Routes</h2>
              </div>
              <Link href="/routes" className="inline-flex items-center gap-2 text-yellow-400 font-semibold hover:text-yellow-300 transition-colors text-sm group">
                All 500+ Routes <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {popularRoutes.map((r, idx) => {
                const isWide = idx === 0 || idx === 5 || idx === 8;
                return (
                  <Link key={idx} href={r.href} className={`group block ${isWide ? 'lg:col-span-2' : ''}`}>
                    <div className="bg-white/[0.03] rounded-2xl p-5 border border-white/[0.06] hover:border-yellow-500/25 hover:bg-white/[0.05] transition-all h-full relative overflow-hidden">
                      <div className="absolute -top-8 -right-8 w-20 h-20 bg-yellow-500/[0.08] rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-yellow-400/50 bg-yellow-500/[0.08] px-3 py-1 rounded-full">{r.tag}</span>
                        <span className="text-white/20 text-xs">{r.time}</span>
                      </div>

                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/40" />
                        <span className="font-bold text-sm">{r.from}</span>
                        <div className="flex-1 flex items-center gap-1 mx-1">
                          <div className="flex-1 h-px bg-gradient-to-r from-yellow-500/30 to-transparent" />
                          <Navigation className="w-3 h-3 text-yellow-400/40" />
                          <div className="flex-1 h-px bg-gradient-to-l from-amber-500/30 to-transparent" />
                        </div>
                        <span className="font-bold text-sm">{r.to}</span>
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-lg shadow-amber-400/40" />
                      </div>

                      <div className="flex items-end justify-between pt-3 border-t border-white/[0.04]">
                        <div>
                          <div className="text-[10px] text-white/25 uppercase">Sedan from</div>
                          <div className="text-xl font-black text-transparent bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text">{r.price}</div>
                        </div>
                        <span className="text-white/20 text-xs flex items-center gap-1">{r.distance} <ChevronRight className="w-3 h-3 group-hover:text-yellow-400 group-hover:translate-x-0.5 transition-all" /></span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── HOW TO BOOK: Horizontal timeline ─── */}
        <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/[0.02] to-transparent" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="text-yellow-400/70 font-semibold text-sm tracking-widest uppercase">Simple Process</span>
              <h2 className="text-4xl md:text-5xl font-black mt-2">Book in <span className="text-transparent bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text">3 Minutes</span></h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
              <div className="hidden md:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-yellow-500/20 via-amber-500/40 to-yellow-500/20" />
              {[
                { s: "01", t: "Choose Route", d: "Pickup, destination, date & trip type", icon: MapPin, glow: "shadow-yellow-500/10" },
                { s: "02", t: "Select Vehicle", d: "Sedan, SUV, or Tempo Traveller", icon: Car, glow: "shadow-amber-500/10" },
                { s: "03", t: "Confirm Booking", d: "Call or WhatsApp — instant confirmation", icon: Phone, glow: "shadow-orange-500/10" },
                { s: "04", t: "Travel Safely", d: "Verified driver, clean AC vehicle, GPS", icon: Shield, glow: "shadow-green-500/10" },
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className={`inline-flex p-5 bg-white/[0.04] rounded-2xl border border-white/[0.08] mb-5 shadow-2xl ${item.glow} group-hover:bg-white/[0.07] group-hover:border-yellow-500/20 transition-all`}>
                    <item.icon className="w-7 h-7 text-yellow-400" />
                  </div>
                  <div className="text-yellow-400/30 text-xs font-bold tracking-widest mb-2">STEP {item.s}</div>
                  <h3 className="font-bold text-lg mb-1">{item.t}</h3>
                  <p className="text-white/35 text-sm">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── ONE-WAY vs ROUND TRIP: Glassmorphism side-by-side ─── */}
        <section className="py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-yellow-400/70 font-semibold text-sm tracking-widest uppercase">Choose Your Style</span>
              <h2 className="text-4xl md:text-5xl font-black mt-2">One-Way or Round Trip?</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/one-way-cab" className="group block">
                <div className="relative bg-gradient-to-br from-emerald-500/[0.08] to-green-500/[0.03] rounded-3xl p-8 border border-emerald-500/15 hover:border-emerald-400/30 transition-all h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 px-4 py-1.5 rounded-full mb-6 border border-emerald-500/15">
                      <span className="text-emerald-400 text-sm font-semibold">Save up to 50%</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">One-Way Cab</h3>
                    <ul className="space-y-2.5 mb-6">
                      {["Pay only for one direction", "200+ one-way routes", "Sedan from ₹11/km", "No return fare charges", "Best for single trips"].map((t, j) => (
                        <li key={j} className="flex items-center gap-2 text-white/50 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-400/70 flex-shrink-0" /> {t}</li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold text-sm group-hover:gap-2 transition-all">Explore One-Way <ArrowRight className="w-4 h-4" /></span>
                  </div>
                </div>
              </Link>

              <Link href="/round-trip-cab" className="group block">
                <div className="relative bg-gradient-to-br from-violet-500/[0.08] to-purple-500/[0.03] rounded-3xl p-8 border border-violet-500/15 hover:border-violet-400/30 transition-all h-full overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-violet-500/10 rounded-full blur-3xl" />
                  <div className="relative">
                    <div className="inline-flex items-center gap-2 bg-violet-500/10 px-4 py-1.5 rounded-full mb-6 border border-violet-500/15">
                      <span className="text-violet-400 text-sm font-semibold">Same driver throughout</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Round Trip Cab</h3>
                    <ul className="space-y-2.5 mb-6">
                      {["Same driver for entire trip", "Multi-day flexibility", "Local sightseeing included", "250 km/day minimum", "Best for vacations"].map((t, j) => (
                        <li key={j} className="flex items-center gap-2 text-white/50 text-sm"><CheckCircle2 className="w-4 h-4 text-violet-400/70 flex-shrink-0" /> {t}</li>
                      ))}
                    </ul>
                    <span className="inline-flex items-center gap-1 text-violet-400 font-semibold text-sm group-hover:gap-2 transition-all">Explore Round Trip <ArrowRight className="w-4 h-4" /></span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── WHY CHOOSE: Gradient accent cards ─── */}
        <section className="py-24 px-4 sm:px-6 relative">
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-500/[0.05] rounded-full blur-[100px]" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-14">
              <span className="text-yellow-400/70 font-semibold text-sm tracking-widest uppercase">Trusted By Thousands</span>
              <h2 className="text-4xl md:text-5xl font-black mt-2">Why Triveni Cabs?</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: IndianRupee, title: "Transparent Pricing", desc: "No hidden charges. Detailed fare breakdown before booking. What we quote is what you pay.", g: "from-yellow-500/10 to-amber-500/5" },
                { icon: Shield, title: "Verified Drivers", desc: "Background-checked with 5+ years experience. Re-verified annually for your safety.", g: "from-green-500/10 to-emerald-500/5" },
                { icon: Clock, title: "24/7 Support", desc: "Real humans, not bots. Round-the-clock customer support during your entire trip.", g: "from-blue-500/10 to-cyan-500/5" },
                { icon: Car, title: "Clean AC Vehicles", desc: "Maintained and sanitized vehicles under 5 years old. Full GPS tracking.", g: "from-purple-500/10 to-pink-500/5" },
                { icon: Route, title: "500+ Routes", desc: "Every major city and destination across North India and beyond covered.", g: "from-orange-500/10 to-red-500/5" },
                { icon: Zap, title: "Instant Booking", desc: "Book in 2 minutes via call or WhatsApp. No app download needed.", g: "from-cyan-500/10 to-teal-500/5" },
              ].map((item, i) => (
                <div key={i} className={`bg-gradient-to-br ${item.g} rounded-2xl p-6 border border-white/[0.05] hover:border-white/[0.12] transition-all group`}>
                  <item.icon className="w-7 h-7 text-white/70 mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-white/35 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PRICING TABLE ─── */}
        <section className="py-24 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-yellow-400/70 font-semibold text-sm tracking-widest uppercase">No Hidden Charges</span>
              <h2 className="text-4xl md:text-5xl font-black mt-2">Pricing</h2>
            </div>
            <div className="bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/[0.06] overflow-hidden">
              <div className="grid grid-cols-5 bg-yellow-500/[0.08] border-b border-white/[0.06]">
                {["Vehicle", "Rate/km", "Min km/Day", "Driver Allow.", "Capacity"].map((h, i) => (
                  <div key={i} className="px-5 py-4 text-white/50 font-semibold text-xs uppercase tracking-wider">{h}</div>
                ))}
              </div>
              {[
                { v: "Sedan", r: "₹11/km", m: "250 km", a: "₹300/night", c: "4 Pax" },
                { v: "SUV", r: "₹15/km", m: "250 km", a: "₹300/night", c: "7 Pax" },
                { v: "Tempo Traveller", r: "₹24/km", m: "250 km", a: "₹500/night", c: "12-26 Pax" },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-5 border-b border-white/[0.03] hover:bg-white/[0.03] transition-colors ${i % 2 ? 'bg-white/[0.01]' : ''}`}>
                  <div className="px-5 py-5 font-bold">{row.v}</div>
                  <div className="px-5 py-5 text-yellow-400 font-bold">{row.r}</div>
                  <div className="px-5 py-5 text-white/50">{row.m}</div>
                  <div className="px-5 py-5 text-white/50">{row.a}</div>
                  <div className="px-5 py-5 text-white/50">{row.c}</div>
                </div>
              ))}
            </div>
            <p className="text-white/20 text-xs mt-4 text-center">Toll, parking, state tax at actual. GST 5% applicable.</p>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-24 px-4 sm:px-6 relative">
          <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-yellow-500/[0.04] rounded-full blur-[80px] -translate-y-1/2" />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-14">
              <span className="text-yellow-400/70 font-semibold text-sm tracking-widest uppercase">Got Questions?</span>
              <h2 className="text-4xl md:text-5xl font-black mt-2">FAQs</h2>
            </div>
            <div className="space-y-3">
              {faqData.map((faq, i) => (
                <div key={i} className="bg-white/[0.02] rounded-2xl p-6 border border-white/[0.05] hover:border-yellow-500/15 transition-all">
                  <h3 className="font-bold mb-2 flex items-start gap-3">
                    <span className="text-yellow-400/30 text-xs font-mono mt-1 flex-shrink-0">0{i + 1}</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-white/35 text-sm leading-relaxed ml-8">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── DYNAMIC: Travel Guides & Wedding Services ─── */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto space-y-14">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Travel Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {getGeneralContent().map((item, index) => (
                  <Link key={index} href={item.url} className="group block bg-white/[0.04] rounded-xl p-5 border border-white/[0.06] hover:border-yellow-500/25 hover:bg-white/[0.06] transition-all">
                    <h3 className="font-semibold text-white/80 group-hover:text-yellow-400 transition-colors">{item.title}</h3>
                    <p className="text-white/30 text-sm mt-1">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Wedding Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {getWeddingPages().map((item, index) => (
                  <Link key={index} href={item.url} className="group block bg-white/[0.04] rounded-xl p-5 border border-white/[0.06] hover:border-yellow-500/25 hover:bg-white/[0.06] transition-all">
                    <h3 className="font-semibold text-white/80 group-hover:text-yellow-400 transition-colors">{item.title}</h3>
                    <p className="text-white/30 text-sm mt-1">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── INTERLINKS: Comprehensive footer-style grids ─── */}
        <section className="py-20 px-4 sm:px-6 border-t border-white/[0.04]">
          <div className="max-w-7xl mx-auto space-y-14">

            {/* Related Services */}
            <div>
              <h2 className="text-sm font-bold text-yellow-400/60 mb-6 tracking-widest uppercase">Related Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { l: "One-Way Cab Service", h: "/one-way-cab", d: "Save 50% — pay single direction only" },
                  { l: "Round Trip Cab Booking", h: "/round-trip-cab", d: "Same driver for multi-day trips" },
                  { l: "Local Taxi Hourly Rental", h: "/local-taxi", d: "Hourly packages from ₹1,200" },
                  { l: "Airport Transfer Service", h: "/airport-service", d: "Flight-tracked pickups & drops" },
                  { l: "Tempo Traveller Rental", h: "/tempo-traveller", d: "12-26 seater for group travel" },
                  { l: "Wedding Car Rental", h: "/wedding", d: "Decorated cars for your big day" },
                ].map((s, i) => (
                  <Link key={i} href={s.h} className="block bg-white/[0.03] rounded-xl p-4 border border-white/[0.05] hover:border-yellow-500/20 hover:bg-white/[0.05] transition-all group">
                    <span className="font-semibold text-sm text-white/80 group-hover:text-yellow-400 transition-colors">{s.l}</span>
                    <span className="block text-xs text-white/30 mt-1">{s.d}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular Routes */}
            <div>
              <h2 className="text-sm font-bold text-white/30 mb-5 tracking-widest uppercase">Popular Routes</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { l: "Delhi to Agra Cab", h: "/delhi-to-agra" },
                  { l: "Delhi to Jaipur Cab", h: "/delhi-to-jaipur" },
                  { l: "Delhi to Shimla Cab", h: "/delhi-to-shimla" },
                  { l: "Delhi to Manali Cab", h: "/delhi-to-manali" },
                  { l: "Delhi to Chandigarh Cab", h: "/delhi-to-chandigarh" },
                  { l: "Delhi to Haridwar Cab", h: "/delhi-to-haridwar" },
                  { l: "Delhi to Amritsar Cab", h: "/delhi-to-amritsar" },
                  { l: "Delhi to Rishikesh Cab", h: "/delhi-to-rishikesh" },
                  { l: "Agra to Jaipur Cab", h: "/agra-to-jaipur" },
                  { l: "Delhi to Nainital Cab", h: "/delhi-to-nainital" },
                ].map((r, i) => (
                  <Link key={i} href={r.h} className="bg-white/[0.03] hover:bg-yellow-500/10 border border-white/[0.05] hover:border-yellow-500/20 text-white/40 hover:text-yellow-400 px-4 py-2 rounded-full text-xs font-medium transition-all">{r.l}</Link>
                ))}
              </div>
            </div>

            {/* Popular Cities */}
            <div>
              <h2 className="text-sm font-bold text-white/30 mb-5 tracking-widest uppercase">Popular Cities</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { l: "Delhi Cab Service", h: "/delhi" },
                  { l: "Agra Cab Service", h: "/agra" },
                  { l: "Jaipur Cab Service", h: "/jaipur" },
                  { l: "Chandigarh Cab Service", h: "/chandigarh" },
                  { l: "Shimla Cab Service", h: "/shimla" },
                  { l: "Manali Cab Service", h: "/manali" },
                  { l: "Haridwar Cab Service", h: "/haridwar" },
                  { l: "Rishikesh Cab Service", h: "/rishikesh" },
                  { l: "Amritsar Cab Service", h: "/amritsar" },
                  { l: "Udaipur Cab Service", h: "/udaipur" },
                ].map((c, i) => (
                  <Link key={i} href={c.h} className="bg-white/[0.03] hover:bg-yellow-500/10 border border-white/[0.05] hover:border-yellow-500/20 text-white/40 hover:text-yellow-400 px-4 py-2 rounded-full text-xs font-medium transition-all">{c.l}</Link>
                ))}
              </div>
            </div>

            {/* Popular Tours & Sightseeing */}
            <div>
              <h2 className="text-sm font-bold text-white/30 mb-5 tracking-widest uppercase">Popular Tours</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { l: "Golden Triangle Tour 3 Days", h: "/sightseeing/golden-triangle-tour-3-days" },
                  { l: "Same Day Agra Tour", h: "/same-day-agra-tour-from-delhi" },
                  { l: "Taj Mahal Sunrise Tour", h: "/sunrise-taj-mahal-tour-from-delhi" },
                  { l: "Char Dham Yatra", h: "/religious-tours/char-dham-yatra-by-car" },
                  { l: "Rajasthan Circuit Tour", h: "/sightseeing/rajasthan-tour-from-delhi" },
                  { l: "Weekend Getaways from Delhi", h: "/weekend-getaways-from-delhi-by-car" },
                  { l: "Mathura Vrindavan Tour", h: "/sightseeing/mathura-vrindavan-tour-from-delhi" },
                  { l: "Delhi Sightseeing Tour", h: "/sightseeing/delhi-sightseeing-tour" },
                ].map((t, i) => (
                  <Link key={i} href={t.h} className="bg-white/[0.03] hover:bg-yellow-500/10 border border-white/[0.05] hover:border-yellow-500/20 text-white/40 hover:text-yellow-400 px-4 py-2 rounded-full text-xs font-medium transition-all">{t.l}</Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h2 className="text-sm font-bold text-white/30 mb-5 tracking-widest uppercase">Quick Links</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { l: "Pricing & Fare Chart", h: "/pricing" },
                  { l: "Vehicle Fleet", h: "/vehicles" },
                  { l: "Customer Reviews", h: "/reviews" },
                  { l: "Safety Standards", h: "/safety" },
                  { l: "Corporate Transportation", h: "/corporate-transportation-service" },
                  { l: "Contact Us", h: "/contact" },
                ].map((q, i) => (
                  <Link key={i} href={q.h} className="bg-white/[0.03] hover:bg-yellow-500/10 border border-white/[0.05] hover:border-yellow-500/20 text-white/40 hover:text-yellow-400 px-4 py-2 rounded-full text-xs font-medium transition-all">{q.l}</Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── BOTTOM CTA ─── */}
        <section className="py-24 px-4 sm:px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/[0.06] to-transparent" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Ready to <span className="text-transparent bg-gradient-to-r from-yellow-300 to-amber-400 bg-clip-text">Hit the Road?</span></h2>
            <p className="text-white/35 mb-10 text-lg">Instant fare quotes. Book in under 2 minutes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-yellow-500/20 hover:shadow-yellow-500/35 hover:scale-[1.02] transition-all">
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to book an outstation cab" className="inline-flex items-center justify-center gap-2 bg-white/[0.06] backdrop-blur-xl text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/[0.1] hover:bg-white/[0.1] transition-all">
                WhatsApp Booking <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
