import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, IndianRupee, Zap, ShieldCheck, UserCheck, Calendar } from '@/components/ui/icons';
import { getGeneralContent, getWeddingPages } from '@/utilis/linkingHelper';

export const metadata = {
  title: 'Local Taxi Service 2026 | 4hr/40km from ₹1,200 | Hourly Packages',
  description: 'Book local taxi service in Delhi, Agra, Jaipur & 50+ cities. Hourly packages: 4hr/40km ₹1,200, 8hr/80km ₹2,200. Verified drivers, AC cabs, GPS tracked. Call 7668570551.',
  keywords: 'local taxi service, local taxi near me, local cab booking, hourly taxi, taxi service near me, local cab service, city taxi booking, hire taxi for local use, local taxi for shopping, local taxi for hospital, local taxi for meetings, local sightseeing taxi, hourly cab rental, 4 hour taxi package, 8 hour taxi package, local taxi Delhi, local taxi Agra, local taxi Jaipur, cheap local taxi, affordable local cab, best local taxi service, AC local taxi, GPS tracked taxi, safe local cab',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/local-taxi' },
  openGraph: {
    title: 'Local Taxi Service | Hourly Packages from ₹1,200 | 50+ Cities',
    description: 'Book local taxi by the hour. 4hr/40km ₹1,200, 8hr/80km ₹2,200. AC cabs, verified drivers, GPS tracking. Available in Delhi, Agra, Jaipur & more.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/local-taxi', siteName: 'Triveni Cabs',
    images: [{ url: '/images/about/about_banner.webp', width: 1200, height: 630, alt: 'Local Taxi Service - Triveni Cabs' }]
  },
  twitter: { card: 'summary_large_image', title: 'Local Taxi Service | Hourly Packages from ₹1,200 | Triveni Cabs', description: 'Book local taxi by the hour. AC cabs, verified drivers, GPS tracking in 50+ cities. Call 7668570551.', creator: '@trivenicabs', site: '@trivenicabs', images: ['/images/about/about_banner.webp'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function LocalTaxiPage() {
  /* ──── SCHEMAS ──── */
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Local Taxi Service", "name": "Local Taxi & Hourly Cab Rental Service", "description": "Book local taxi service by the hour in 50+ cities across India. Hourly packages starting from ₹1,200 for 4hr/40km with AC vehicles and verified drivers.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "email": "cabstriveni@gmail.com", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "addressRegion": "UP", "postalCode": "282006", "addressCountry": "IN" }, "geo": { "@type": "GeoCoordinates", "latitude": "27.1767", "longitude": "78.0081" } }, "areaServed": [{ "@type": "City", "name": "Delhi" }, { "@type": "City", "name": "Agra" }, { "@type": "City", "name": "Jaipur" }, { "@type": "City", "name": "Chandigarh" }], "offers": { "@type": "AggregateOffer", "lowPrice": "1200", "highPrice": "7200", "priceCurrency": "INR" }, "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "2847", "bestRating": "5" } };
  const localBusinessSchema = { "@context": "https://schema.org", "@type": "LocalBusiness", "name": "Triveni Cabs - Local Taxi Service", "telephone": "+91-7668570551", "email": "cabstriveni@gmail.com", "url": "https://www.trivenicabs.in/local-taxi", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "addressRegion": "Uttar Pradesh", "postalCode": "282006", "addressCountry": "IN" }, "priceRange": "$$" };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Local Taxi", "item": "https://www.trivenicabs.in/local-taxi" }] };
  const faqData = [
    { question: "How much does a local taxi cost per hour?", answer: "Local taxi packages start from ₹1,200 for 4 hours/40 km (Sedan). SUV packages start at ₹1,800 for 4hr/40km. Extra km charged at ₹11/km (Sedan) or ₹15/km (SUV). Extra hours charged at ₹150-200/hr based on vehicle type." },
    { question: "What is included in the hourly taxi package?", answer: "Our hourly packages include AC vehicle, professional driver, fuel cost within the package limits (km + hours), and GPS tracking. Parking charges, toll (if applicable), and usage beyond package limits are extra." },
    { question: "Can I book a local taxi for the full day?", answer: "Yes! We offer 4hr/40km, 8hr/80km, and 12hr/120km packages. For full-day use, the 8hr/80km or 12hr/120km package is ideal. Custom packages available for special requirements. Call 7668570551." },
    { question: "Is local taxi available for hospital visits?", answer: "Yes, our local taxi service is perfect for hospital visits. The driver waits at the hospital while you complete your appointment. Hourly package ensures you have a cab ready whenever you need it - no surge pricing." },
    { question: "Can I use local taxi for shopping and multiple stops?", answer: "Absolutely! Our hourly packages are designed for multiple stops. Go shopping, visit markets, run errands - the driver waits at each stop. Perfect for wedding shopping, grocery runs, or a day of errands." },
    { question: "What cities have local taxi service available?", answer: "We provide local taxi service in Delhi NCR, Agra, Jaipur, Chandigarh, Shimla, Manali, Haridwar, Rishikesh, Amritsar, Udaipur, Jodhpur, Dehradun, Lucknow, and 40+ more cities across North India." },
    { question: "How quickly can I get a local taxi?", answer: "We can arrange a local taxi within 30-60 minutes for same-day bookings in major cities. For guaranteed availability and your preferred vehicle, book 2-4 hours in advance. Call or WhatsApp 7668570551." },
    { question: "Are local taxi drivers verified and safe?", answer: "Yes, all our drivers undergo background verification, license validation, and driving test. Vehicles are GPS-tracked and regularly sanitized. We offer women safety features including trip sharing and SOS support." }
  ];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };

  /* ──── DATA ──── */
  const hourlyPackages = [
    { name: "4 Hours / 40 km", sedan: "₹1,200", suv: "₹1,800", tempo: "₹3,000", best: "Quick errands, hospital visits", popular: false },
    { name: "8 Hours / 80 km", sedan: "₹2,200", suv: "₹3,200", tempo: "₹5,500", best: "Full-day sightseeing, shopping", popular: true },
    { name: "12 Hours / 120 km", sedan: "₹3,200", suv: "₹4,500", tempo: "₹7,200", best: "Extended day trips, events", popular: false },
  ];
  const cities = [
    { name: "Delhi", href: "/delhi", tagline: "Capital & NCR" }, { name: "Agra", href: "/agra", tagline: "Taj Mahal City" },
    { name: "Jaipur", href: "/jaipur", tagline: "Pink City" }, { name: "Chandigarh", href: "/chandigarh", tagline: "City Beautiful" },
    { name: "Haridwar", href: "/haridwar", tagline: "Gateway to Gods" }, { name: "Rishikesh", href: "/rishikesh", tagline: "Yoga Capital" },
    { name: "Shimla", href: "/shimla", tagline: "Queen of Hills" }, { name: "Amritsar", href: "/amritsar", tagline: "Golden Temple" },
    { name: "Udaipur", href: "/udaipur", tagline: "City of Lakes" }, { name: "Dehradun", href: "/dehradun", tagline: "Doon Valley" },
    { name: "Jodhpur", href: "/jodhpur", tagline: "Blue City" }, { name: "Manali", href: "/manali", tagline: "Hill Paradise" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* ===== DESIGN: Warm cream/sand with neumorphic cards, soft shadows ===== */}
      <div className="min-h-screen bg-[#f5f0e8] text-stone-900">

        {/* ─── HERO: Full-width with diagonal bottom cut ─── */}
        <section className="relative overflow-hidden">
          <div className="bg-gradient-to-br from-amber-600 via-yellow-500 to-orange-400 pt-20 pb-40 md:pb-52 px-4 sm:px-6 relative">
            {/* Floating decorative circles */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-20 left-10 w-48 h-48 bg-orange-300/20 rounded-full blur-2xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow-300/10 rounded-full blur-[150px]" />

            <div className="max-w-6xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-6 border border-white/30">
                <Clock className="w-4 h-4 text-white" />
                <span className="text-white font-semibold text-sm">Hourly Taxi Packages</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1]">
                Local Taxi<br />
                <span className="text-stone-900/80">By the Hour</span>
              </h1>

              <p className="text-xl text-white/80 mb-10 max-w-xl">
                Multiple stops, flexible schedule, AC vehicle with verified driver. Packages from <strong className="text-white">₹1,200 for 4 hours</strong> in 50+ cities.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-stone-900 text-white px-7 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:bg-stone-800 hover:scale-[1.02] transition-all">
                  <Phone className="w-5 h-5" /> Call: 7668570551
                </Link>
                <Link href="https://wa.me/917668570551?text=I want to book a local taxi" className="inline-flex items-center gap-2 bg-white/25 backdrop-blur-sm text-white px-7 py-4 rounded-2xl font-bold text-lg border border-white/40 hover:bg-white/35 transition-all">
                  WhatsApp Booking
                </Link>
              </div>
            </div>
          </div>

          {/* Diagonal cut */}
          <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-[#f5f0e8]" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 100%)' }} />
          <div className="absolute bottom-0 left-0 right-0 h-20 md:h-32 bg-gradient-to-br from-amber-600 via-yellow-500 to-orange-400" style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }} />
        </section>

        {/* ─── OVERVIEW: SEO prose content section ─── */}
        <section className="py-20 px-4 sm:px-6 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-8 text-stone-800">
              Local Taxi Service — Hourly Car Rental for City Travel
            </h2>
            <div className="space-y-5 text-stone-600 text-lg leading-relaxed">
              <p>Need a <strong className="text-stone-800">local taxi service near you</strong> for errands, hospital visits, shopping trips, or a half-day city tour? Triveni Cabs offers flexible <strong className="text-stone-800">hourly cab rental packages</strong> starting at just ₹799 — available in 50+ cities across North India including Delhi, Agra, Jaipur, Chandigarh, Lucknow, Haridwar, and Dehradun.</p>
              <p>Unlike ride-hailing apps that charge per ride with unpredictable surge pricing, our <strong className="text-stone-800">local taxi booking</strong> works on transparent hourly packages — 4 hours / 40 km, 8 hours / 80 km, or 12 hours / 120 km. You get a dedicated car and driver for the entire duration, making multiple stops without rebooking or waiting for a new cab each time. Ideal for business meetings, wedding errands, city sightseeing, airport runs, and medical appointments.</p>
              <p>Every vehicle in our <strong className="text-stone-800">local cab service</strong> fleet is GPS-tracked, fully air-conditioned, and driven by a verified, trained professional. Whether you choose a sedan for personal use, an SUV for family outings, or a tempo traveller for group travel, the rate is fixed with no hidden charges. Extra kilometres and hours are billed at a transparent per-unit rate.</p>
              <p>Families with children, senior citizens requiring hospital visits, corporate professionals with back-to-back meetings, and tourists exploring city attractions — all trust Triveni Cabs as their <strong className="text-stone-800">go-to local taxi service</strong>. Book instantly via call or WhatsApp and your car arrives at your doorstep within 30 minutes.</p>
            </div>
          </div>
        </section>

        {/* ─── HOURLY PACKAGES: Neumorphic pricing cards ─── */}
        <section className="py-20 px-4 sm:px-6 -mt-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Flexible Plans</span>
              <h2 className="text-4xl md:text-5xl font-black mt-2 text-stone-800">Hourly Packages</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {hourlyPackages.map((pkg, idx) => (
                <div key={idx} className={`relative rounded-3xl p-8 transition-all ${pkg.popular ? 'bg-gradient-to-br from-amber-500 to-orange-500 text-white shadow-2xl shadow-amber-500/30 scale-[1.03]' : 'bg-white shadow-[8px_8px_24px_rgba(0,0,0,0.08),-8px_-8px_24px_rgba(255,255,255,0.9)] hover:shadow-[12px_12px_32px_rgba(0,0,0,0.1),-12px_-12px_32px_rgba(255,255,255,0.95)]'}`}>
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-stone-900 text-white px-5 py-1.5 rounded-full text-xs font-bold shadow-lg">Most Popular</span>
                    </div>
                  )}

                  <h3 className="text-xl font-black mb-6">{pkg.name}</h3>

                  <div className="space-y-4 mb-6">
                    {[{ l: "Sedan", v: pkg.sedan }, { l: "SUV", v: pkg.suv }, { l: "Tempo", v: pkg.tempo }].map((row, i) => (
                      <div key={i} className={`flex items-center justify-between py-3 border-b ${pkg.popular ? 'border-white/20' : 'border-stone-100'}`}>
                        <span className={pkg.popular ? 'text-white/80' : 'text-stone-500'}>{row.l}</span>
                        <span className="font-black text-lg">{row.v}</span>
                      </div>
                    ))}
                  </div>

                  <p className={`text-sm mb-6 ${pkg.popular ? 'text-white/70' : 'text-stone-400'}`}>Best for: {pkg.best}</p>

                  <Link href="tel:+917668570551" className={`w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold transition-all ${pkg.popular ? 'bg-white text-amber-600 hover:bg-white/90' : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-lg'}`}>
                    <Phone className="w-4 h-4" /> Book Now
                  </Link>
                </div>
              ))}
            </div>

            <p className="text-stone-400 text-sm mt-6 text-center">Extra km: Sedan ₹11/km, SUV ₹15/km, Tempo ₹24/km. Extra hours: ₹150-250/hr.</p>
          </div>
        </section>

        {/* ─── CITIES: Warm card grid with pin icons ─── */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Wide Coverage</span>
              <h2 className="text-4xl md:text-5xl font-black mt-2 text-stone-800">Available in 50+ Cities</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {cities.map((city, idx) => (
                <Link key={idx} href={city.href} className="group block">
                  <div className="bg-white rounded-2xl p-5 shadow-[4px_4px_16px_rgba(0,0,0,0.06),-4px_-4px_16px_rgba(255,255,255,0.8)] hover:shadow-[6px_6px_20px_rgba(0,0,0,0.08)] transition-all">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center group-hover:from-amber-200 group-hover:to-orange-200 transition-all">
                        <MapPin className="w-5 h-5 text-amber-600" />
                      </div>
                      <div>
                        <h3 className="font-bold text-stone-800 group-hover:text-amber-700 transition-colors">{city.name}</h3>
                        <p className="text-xs text-stone-400">{city.tagline}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ─── USE CASES: Illustrated cards with warm tones ─── */}
        <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-[#f5f0e8] to-[#efe8db]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Every Occasion</span>
              <h2 className="text-4xl md:text-5xl font-black mt-2 text-stone-800">Perfect For</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: "🏥", title: "Hospital Visits", desc: "Driver waits during appointments. No surge pricing for emergencies.", color: "from-red-50 to-rose-50 border-red-100" },
                { icon: "🛍️", title: "Shopping Trips", desc: "Multiple markets and malls. Driver helps with bags.", color: "from-pink-50 to-fuchsia-50 border-pink-100" },
                { icon: "💼", title: "Business Meetings", desc: "Professional driver for corporate meetings. On-time guarantee.", color: "from-blue-50 to-indigo-50 border-blue-100" },
                { icon: "🏛️", title: "City Sightseeing", desc: "Explore with a local driver. Flexible stops and photo breaks.", color: "from-amber-50 to-yellow-50 border-amber-100" },
                { icon: "🎉", title: "Events & Parties", desc: "Weddings, parties, events. No parking or drink-and-drive worries.", color: "from-purple-50 to-violet-50 border-purple-100" },
                { icon: "✈️", title: "Airport + Local", desc: "Combine airport pickup with local sightseeing in one package.", color: "from-cyan-50 to-sky-50 border-cyan-100" },
              ].map((item, idx) => (
                <div key={idx} className={`bg-gradient-to-br ${item.color} rounded-2xl p-6 border hover:scale-[1.02] hover:shadow-lg transition-all`}>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg text-stone-800 mb-2">{item.title}</h3>
                  <p className="text-stone-500 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SAFETY: Warm trust section ─── */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-stone-800 to-stone-900 rounded-[2rem] p-10 md:p-14 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-black text-white">Your Safety, Our Priority</h2>
                  <p className="text-stone-400 mt-3">Every ride monitored. Every driver verified.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { icon: ShieldCheck, title: "Verified Drivers", desc: "Background-checked with license verification" },
                    { icon: MapPin, title: "GPS Tracked", desc: "Real-time vehicle tracking for complete visibility" },
                    { icon: Phone, title: "24/7 Helpline", desc: "Round-the-clock support at 7668570551" },
                    { icon: UserCheck, title: "Women Safety", desc: "Trip sharing, SOS button, priority support" },
                  ].map((f, i) => (
                    <div key={i} className="bg-white/[0.06] backdrop-blur-sm rounded-2xl p-5 border border-white/[0.08] hover:bg-white/[0.1] transition-all text-center">
                      <f.icon className="w-7 h-7 text-amber-400 mx-auto mb-3" />
                      <h3 className="font-bold text-white text-sm mb-1">{f.title}</h3>
                      <p className="text-stone-400 text-xs">{f.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-8">
                  <Link href="/safety" className="inline-flex items-center gap-2 bg-amber-500 text-stone-900 px-6 py-3 rounded-xl font-bold hover:bg-amber-400 transition-all text-sm">
                    Our Safety Standards <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── FAQ: Warm cards ─── */}
        <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-[#f5f0e8] to-[#efe8db]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-amber-600 font-semibold text-sm tracking-widest uppercase">Help Center</span>
              <h2 className="text-4xl md:text-5xl font-black mt-2 text-stone-800">FAQs</h2>
            </div>

            <div className="space-y-3">
              {faqData.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-[4px_4px_16px_rgba(0,0,0,0.05),-4px_-4px_16px_rgba(255,255,255,0.8)] hover:shadow-[6px_6px_20px_rgba(0,0,0,0.07)] transition-all">
                  <h3 className="font-bold text-stone-800 mb-2">{faq.question}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SEO Prose Section with Contextual Links ─── */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-stone-800 mb-6 text-center">Local Taxi Service — Hourly Cab Rental Made Simple</h2>
            <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
              <p>
                Need a <strong className="text-stone-800">local taxi</strong> for shopping, hospital visits, or city sightseeing? Triveni Cabs offers flexible hourly cab rental packages in <Link href="/delhi" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">Delhi</Link>, <Link href="/agra" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">Agra</Link>, <Link href="/jaipur" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">Jaipur</Link>, and 50+ cities across North India. With <Link href="/reviews" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">2,847+ happy customers rating us 4.8/5</Link>, our local taxi service delivers comfort, punctuality, and transparent pricing every single time.
              </p>
              <p>
                Unlike ride-hailing apps with unpredictable surge pricing, our <strong className="text-stone-800">hourly taxi packages</strong> give you a <Link href="/safety" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">verified, GPS-tracked driver</Link> at a fixed rate — starting at just ₹1,200 for 4 hours. Perfect for multi-stop errands, <Link href="/sightseeing/delhi-sightseeing-tour" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">local sightseeing tours</Link>, wedding shopping trips, or <Link href="/corporate-transportation-service" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">corporate meetings</Link>. Check our <Link href="/pricing" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">complete fare chart</Link> for all vehicle options.
              </p>
              <p>
                Heading out of the city after your local errands? Seamlessly upgrade to an <Link href="/outstation-cabs" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">outstation cab booking</Link> or combine with an <Link href="/airport-service" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">airport transfer</Link>. For group travel, our <Link href="/tempo-traveller" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">tempo travellers</Link> accommodate 12-26 passengers with the same hourly flexibility. Planning a <Link href="/sightseeing/mathura-vrindavan-tour-from-delhi" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">Mathura-Vrindavan day tour</Link> or a <Link href="/same-day-agra-tour-from-delhi" className="text-amber-600 hover:text-amber-700 underline underline-offset-2">same-day Agra tour</Link>? Our drivers know every route by heart. Call <strong className="text-stone-800">7668570551</strong> for an instant quote.
              </p>
            </div>
          </div>
        </section>

        {/* ─── DYNAMIC: Travel Guides & Wedding Services ─── */}
        <section className="py-16 px-4 sm:px-6 bg-[#efe8db]">
          <div className="max-w-7xl mx-auto space-y-14">
            <div>
              <h2 className="text-2xl font-bold text-stone-800 mb-6">Travel Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {getGeneralContent().map((item, index) => (
                  <Link key={index} href={item.url} className="group block bg-white rounded-xl p-5 border border-stone-200 hover:border-amber-300 hover:shadow-md transition-all">
                    <h3 className="font-semibold text-stone-700 group-hover:text-amber-700 transition-colors">{item.title}</h3>
                    <p className="text-stone-400 text-sm mt-1">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-stone-800 mb-6">Wedding Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {getWeddingPages().map((item, index) => (
                  <Link key={index} href={item.url} className="group block bg-white rounded-xl p-5 border border-stone-200 hover:border-amber-300 hover:shadow-md transition-all">
                    <h3 className="font-semibold text-stone-700 group-hover:text-amber-700 transition-colors">{item.title}</h3>
                    <p className="text-stone-400 text-sm mt-1">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── INTERLINKS: Comprehensive footer-style grids ─── */}
        <section className="py-16 px-4 sm:px-6 border-t border-stone-200">
          <div className="max-w-7xl mx-auto space-y-12">

            {/* Related Services */}
            <div>
              <h2 className="text-sm font-bold text-amber-600 mb-5 tracking-widest uppercase">Related Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { l: "Outstation Cab Booking", h: "/outstation-cabs", d: "Intercity travel from ₹11/km" },
                  { l: "One-Way Cab Service", h: "/one-way-cab", d: "Save 50% — pay single direction" },
                  { l: "Round Trip Cab Booking", h: "/round-trip-cab", d: "Same driver for multi-day trips" },
                  { l: "Airport Transfer Service", h: "/airport-service", d: "Flight-tracked pickups & drops" },
                  { l: "Wedding Car Rental", h: "/wedding", d: "Decorated luxury cars for weddings" },
                  { l: "Corporate Transportation", h: "/corporate-transportation-service", d: "Employee transport & business travel" },
                ].map((s, i) => (
                  <Link key={i} href={s.h} className="block bg-white rounded-xl p-4 border border-stone-200 hover:border-amber-300 hover:shadow-md transition-all group">
                    <span className="font-semibold text-sm text-stone-700 group-hover:text-amber-700 transition-colors">{s.l}</span>
                    <span className="block text-xs text-stone-400 mt-1">{s.d}</span>
                  </Link>
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
                  { l: "Dehradun Cab Service", h: "/dehradun" },
                ].map((c, i) => (
                  <Link key={i} href={c.h} className="bg-white hover:bg-amber-50 border border-stone-200 hover:border-amber-300 text-stone-500 hover:text-amber-700 px-4 py-2 rounded-full text-xs font-medium transition-all shadow-sm">{c.l}</Link>
                ))}
              </div>
            </div>

            {/* Popular Tours */}
            <div>
              <h2 className="text-sm font-bold text-stone-400 mb-4 tracking-widest uppercase">Popular Tours</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { l: "Delhi Sightseeing Tour", h: "/sightseeing/delhi-sightseeing-tour" },
                  { l: "Golden Triangle Tour", h: "/sightseeing/golden-triangle-tour-3-days" },
                  { l: "Same Day Agra Tour", h: "/same-day-agra-tour-from-delhi" },
                  { l: "Taj Mahal Sunrise Tour", h: "/sunrise-taj-mahal-tour-from-delhi" },
                  { l: "Mathura Vrindavan Tour", h: "/sightseeing/mathura-vrindavan-tour-from-delhi" },
                  { l: "Rajasthan Circuit Tour", h: "/sightseeing/rajasthan-tour-from-delhi" },
                  { l: "Weekend Getaways from Delhi", h: "/weekend-getaways-from-delhi-by-car" },
                  { l: "Char Dham Yatra by Car", h: "/religious-tours/char-dham-yatra-by-car" },
                ].map((t, i) => (
                  <Link key={i} href={t.h} className="bg-white hover:bg-amber-50 border border-stone-200 hover:border-amber-300 text-stone-500 hover:text-amber-700 px-4 py-2 rounded-full text-xs font-medium transition-all shadow-sm">{t.l}</Link>
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
                  <Link key={i} href={q.h} className="bg-white hover:bg-amber-50 border border-stone-200 hover:border-amber-300 text-stone-500 hover:text-amber-700 px-4 py-2 rounded-full text-xs font-medium transition-all shadow-sm">{q.l}</Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-[2rem] p-10 md:p-14 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300/10 rounded-full blur-3xl" />

              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Need a Taxi <span className="text-stone-900/80">Right Now?</span></h2>
                <p className="text-white/80 mb-10 text-lg">Cab at your doorstep within 30-60 minutes</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-stone-800 transition-all shadow-2xl">
                    <Phone className="w-5 h-5" /> Call: 7668570551
                  </Link>
                  <Link href="https://wa.me/917668570551?text=I want to book a local taxi" className="inline-flex items-center justify-center gap-2 bg-white/25 backdrop-blur-sm text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/40 hover:bg-white/35 transition-all">
                    WhatsApp <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
