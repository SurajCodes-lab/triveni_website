import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, IndianRupee, Route, Zap, Navigation } from '@/components/ui/icons';
import { getGeneralContent, getWeddingPages } from '@/utilis/linkingHelper';
import AEOHead from '@/components/seo/AEOHead';

export const metadata = {
  title: 'One Way Cab Service 2026 | Save 50% | Sedan ₹11/km | Book Now',
  description: 'Book one way cab service and save up to 50% vs round trip. Sedan ₹11/km, SUV ₹15/km. Delhi-Agra, Delhi-Jaipur & 200+ one way routes. Call 7668570551.',
  keywords: 'one way cab, one way taxi, one way cab service, one way cab booking, one way taxi service, one way drop, single direction cab, one way cab Delhi, one way cab Agra, one way cab Jaipur, one way outstation cab, cheap one way cab, affordable one way taxi, one way cab near me, one way cab rates, Delhi to Agra one way, Delhi to Jaipur one way, one way intercity cab, one way cab fare, best one way cab service',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/one-way-cab' },
  openGraph: { title: 'One Way Cab Service | Save 50% | 200+ Routes | Triveni Cabs', description: 'Book one way cabs and save up to 50%. Sedan ₹11/km, SUV ₹15/km. 200+ one-way routes across India.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/one-way-cab', siteName: 'Triveni Cabs', images: [{ url: '/images/citypage_hero_section_image.jpg', width: 1200, height: 630, alt: 'One Way Cab Service - Triveni Cabs' }] },
  twitter: { card: 'summary_large_image', title: 'One Way Cab Service | Save 50% vs Round Trip | Triveni Cabs', description: 'Pay only for one direction. Sedan ₹11/km. 200+ one-way routes. Call 7668570551.', creator: '@trivenicabs', site: '@trivenicabs', images: ['/images/citypage_hero_section_image.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function OneWayCabPage() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "One Way Cab Service", "name": "One Way Cab Booking - Pay Only One Direction", "description": "Book one way cabs across India and save up to 50%. Starting at ₹11/km for Sedan on 200+ routes.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "email": "cabstriveni@gmail.com", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "addressRegion": "UP", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": { "@type": "Country", "name": "India" }, "offers": { "@type": "AggregateOffer", "lowPrice": "11", "highPrice": "24", "priceCurrency": "INR" }, "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "reviewCount": "2847", "bestRating": "5" } };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Outstation Cabs", "item": "https://www.trivenicabs.in/outstation-cabs" }, { "@type": "ListItem", "position": 3, "name": "One Way Cab", "item": "https://www.trivenicabs.in/one-way-cab" }] };
  const faqData = [
    { question: "How much does a one-way cab cost?", answer: "One-way cab rates are Sedan ₹11/km, SUV ₹15/km, and Tempo Traveller ₹24/km. For example, Delhi to Agra (230 km) one-way costs approximately ₹2,530 in a Sedan. Toll and state tax extra at actual." },
    { question: "How is one-way cab cheaper than round trip?", answer: "In a round trip, you pay for the vehicle both ways even if you only need one direction. With one-way cab, you pay only for pickup to drop-off distance, saving up to 50%." },
    { question: "Can I take luggage in a one-way cab?", answer: "Yes, standard luggage is included. Sedan accommodates 2 large bags + 1 small bag. SUV fits 3 large + 2 small bags. Inform us while booking for special luggage needs." },
    { question: "Can I make stops during a one-way trip?", answer: "Yes, up to 2 stops are allowed on one-way trips at no extra charge, provided they are on the route. Off-route stops may incur additional km charges." },
    { question: "What is the minimum distance for one-way cab?", answer: "Minimum billing for one-way cab is 300 km. For shorter distances (e.g., Delhi to Agra at 230 km), you will be billed for 300 km minimum." },
    { question: "Is one-way cab available for all routes?", answer: "One-way cabs are available on 200+ popular routes including Delhi-Agra, Delhi-Jaipur, Delhi-Chandigarh, Delhi-Haridwar. Call 7668570551 for less common routes." },
    { question: "How do I book a one-way cab?", answer: "Call 7668570551 or WhatsApp with your pickup location, destination, date, and time. Receive an instant quote with fare breakdown. No app download needed." },
    { question: "What is the cancellation policy for one-way cabs?", answer: "Free cancellation up to 6 hours before pickup. 25% charge within 6 hours. 50% charge for no-show." }
  ];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };
  const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "How to Book a One Way Cab", "description": "Easy 4-step process to book a one way cab and save up to 50%", "totalTime": "PT3M", "step": [{ "@type": "HowToStep", "position": 1, "name": "Share Trip Details", "text": "Call or WhatsApp 7668570551 with pickup city, drop city, date, and time." }, { "@type": "HowToStep", "position": 2, "name": "Get Instant Quote", "text": "Receive detailed fare breakdown within 2 minutes." }, { "@type": "HowToStep", "position": 3, "name": "Confirm & Pay", "text": "Pay small advance to lock your ride. Rest payable after trip." }, { "@type": "HowToStep", "position": 4, "name": "Enjoy One-Way Trip", "text": "Verified driver picks you up on time with clean AC vehicle." }] };

  const routes = [
    { from: "Delhi", to: "Agra", km: "230", ow: "₹2,530", rt: "₹5,060", save: "₹2,530", href: "/delhi-to-agra" },
    { from: "Delhi", to: "Jaipur", km: "280", ow: "₹3,080", rt: "₹6,160", save: "₹3,080", href: "/delhi-to-jaipur" },
    { from: "Delhi", to: "Chandigarh", km: "250", ow: "₹2,750", rt: "₹5,500", save: "₹2,750", href: "/delhi-to-chandigarh" },
    { from: "Delhi", to: "Haridwar", km: "230", ow: "₹2,530", rt: "₹5,060", save: "₹2,530", href: "/delhi-to-haridwar" },
    { from: "Delhi", to: "Shimla", km: "350", ow: "₹3,850", rt: "₹7,700", save: "₹3,850", href: "/delhi-to-shimla" },
    { from: "Agra", to: "Jaipur", km: "240", ow: "₹2,640", rt: "₹5,280", save: "₹2,640", href: "/agra-to-jaipur" },
    { from: "Delhi", to: "Manali", km: "540", ow: "₹5,940", rt: "₹11,880", save: "₹5,940", href: "/delhi-to-manali" },
    { from: "Delhi", to: "Amritsar", km: "450", ow: "₹4,950", rt: "₹9,900", save: "₹4,950", href: "/delhi-to-amritsar" },
    { from: "Jaipur", to: "Udaipur", km: "395", ow: "₹4,345", rt: "₹8,690", save: "₹4,345", href: "/jaipur-to-udaipur" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <AEOHead pageType="route" data={{ url: '/one-way-cab', title: 'One Way Cab Service India' }} />

      {/* ===== DESIGN: Emerald savings theme with clean white, comparison focus ===== */}
      <div className="min-h-screen bg-white text-stone-900">

        {/* ─── HERO: Green gradient with floating savings badge ─── */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          <div className="absolute -bottom-1 left-0 right-0 h-24 bg-white" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0)' }} />

          <div className="absolute top-1/4 right-[10%] hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-green-400/20 rounded-full blur-xl" />
              <div className="relative bg-gradient-to-br from-green-400 to-emerald-500 rounded-full w-36 h-36 flex items-center justify-center shadow-2xl shadow-green-500/30">
                <div className="text-center"><div className="text-3xl font-black text-white">50%</div><div className="text-xs font-bold text-white/80 uppercase tracking-wider">Savings</div></div>
              </div>
            </div>
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-24">
            <div className="inline-flex items-center gap-2 bg-green-400/15 backdrop-blur-sm px-5 py-2 rounded-full mb-8 border border-green-400/25">
              <IndianRupee className="w-4 h-4 text-green-400" />
              <span className="text-green-300 font-semibold text-sm">Save Up to 50% vs Round Trip</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.08] max-w-3xl">
              One Way Cab<br /><span className="text-transparent bg-gradient-to-r from-green-300 to-emerald-400 bg-clip-text">Pay Single Direction</span>
            </h1>
            <p className="text-xl text-white/60 mb-10 max-w-2xl">Why pay for both ways? Book one-way cabs from <strong className="text-green-400">₹11/km</strong> on 200+ routes.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-400 to-emerald-500 text-emerald-950 px-7 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-green-500/25 hover:shadow-green-500/40 hover:scale-[1.02] transition-all">
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to book a one way cab" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-7 py-4 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/15 transition-all">
                WhatsApp <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ─── OVERVIEW: SEO prose content section ─── */}
        <section className="py-20 px-4 sm:px-6 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-8 text-stone-800">
              One-Way Cab Service — Pay Only for the Distance You Travel
            </h2>
            <div className="space-y-5 text-stone-600 text-lg leading-relaxed">
              <p>Tired of paying for a return trip you will never take? Our <strong className="text-stone-800">one-way cab service</strong> lets you book an intercity taxi for a single direction — Delhi to Agra, Jaipur to Udaipur, Chandigarh to Manali, or any of 500+ routes across North India. You pay only for the kilometres you travel, saving up to 50% compared to traditional round-trip cab fares.</p>
              <p>Triveni Cabs pioneered affordable <strong className="text-stone-800">one-way taxi booking</strong> in the Agra-Delhi-Jaipur triangle. Starting at just ₹11 per kilometre for sedans, our transparent pricing model includes driver allowance, fuel, and basic insurance. Toll charges, state taxes, and parking are charged at actual — displayed clearly before you confirm. No hidden charges, no surge pricing, no unpleasant surprises at the end of your journey.</p>
              <p>Our <strong className="text-stone-800">one-way cab booking</strong> is perfect for one-sided trips: relocating between cities, catching a flight from a different city, attending a wedding or event, or simply travelling where you do not need a return ride. With 300 km minimum billing and a verified, professional driver at the wheel, every one-way trip with Triveni Cabs is safe, comfortable, and budget-friendly.</p>
              <p>Students moving to college, professionals relocating for work, tourists heading from Delhi to the Taj Mahal, families travelling for festivals — thousands of travellers book <strong className="text-stone-800">one-way cabs</strong> with us every month. Call or WhatsApp 7668570551 for an instant quote on your route.</p>
            </div>
          </div>
        </section>

        {/* ─── SAVINGS TABLE ─── */}
        <section className="py-20 px-4 sm:px-6 -mt-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-emerald-600 font-semibold text-sm tracking-widest uppercase">See The Difference</span>
              <h2 className="text-4xl md:text-5xl font-black mt-2">One-Way vs Round Trip</h2>
              <p className="text-stone-500 mt-3">Sedan rates (₹11/km). Your actual savings on popular routes.</p>
            </div>
            <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-stone-100 overflow-hidden">
              <div className="grid grid-cols-12 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                <div className="col-span-3 px-5 py-4 font-bold text-sm">Route</div>
                <div className="col-span-2 px-4 py-4 font-bold text-sm text-center">Distance</div>
                <div className="col-span-2 px-4 py-4 font-bold text-sm text-center">One-Way</div>
                <div className="col-span-2 px-4 py-4 font-bold text-sm text-center">Round Trip</div>
                <div className="col-span-3 px-4 py-4 font-bold text-sm text-center">You Save</div>
              </div>
              {routes.map((r, i) => (
                <Link key={i} href={r.href} className="group block">
                  <div className={`grid grid-cols-12 border-b border-stone-50 hover:bg-emerald-50/50 transition-colors ${i % 2 ? 'bg-stone-50/50' : ''}`}>
                    <div className="col-span-3 px-5 py-4 font-bold text-stone-800 group-hover:text-emerald-700 transition-colors flex items-center gap-1">{r.from} <ArrowRight className="w-3 h-3 text-stone-300" /> {r.to}</div>
                    <div className="col-span-2 px-4 py-4 text-center text-stone-500">{r.km} km</div>
                    <div className="col-span-2 px-4 py-4 text-center font-bold text-emerald-600">{r.ow}</div>
                    <div className="col-span-2 px-4 py-4 text-center text-stone-400 line-through">{r.rt}</div>
                    <div className="col-span-3 px-4 py-4 text-center"><span className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">{r.save} saved</span></div>
                  </div>
                </Link>
              ))}
            </div>
            <p className="text-stone-400 text-xs mt-4 text-center">Min 300 km billing. Toll, parking, state tax extra at actual.</p>
          </div>
        </section>

        {/* ─── HOW IT WORKS: Vertical numbered steps ─── */}
        <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-emerald-50/50">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-emerald-600 font-semibold text-sm tracking-widest uppercase">Easy Process</span>
              <h2 className="text-4xl md:text-5xl font-black mt-2">How It Works</h2>
            </div>
            <div className="space-y-0 relative">
              <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-emerald-300 via-emerald-400 to-emerald-300" />
              {[
                { n: "1", t: "Share Trip Details", d: "Call or WhatsApp 7668570551 with pickup city, drop city, date, and time." },
                { n: "2", t: "Get Instant Quote", d: "Detailed fare breakdown with per-km rate, distance, and total cost in 2 minutes." },
                { n: "3", t: "Confirm Booking", d: "Small advance to lock your ride. Rest payable to driver after trip." },
                { n: "4", t: "Travel One-Way", d: "Verified driver, clean AC vehicle. Enjoy your one-way journey!" },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 pb-10 last:pb-0 relative">
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/20 relative z-10">
                    <span className="text-white font-black text-xl">{step.n}</span>
                  </div>
                  <div className="pt-2"><h3 className="font-bold text-xl text-stone-800 mb-1">{step.t}</h3><p className="text-stone-500">{step.d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CHOOSE GUIDE ─── */}
        <section className="py-20 px-4 sm:px-6 bg-emerald-50/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14"><h2 className="text-4xl md:text-5xl font-black">Which Is Right For You?</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-8 shadow-lg border-2 border-emerald-200 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-100 rounded-bl-[3rem]" />
                <div className="relative">
                  <span className="inline-block bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">Recommended</span>
                  <h3 className="text-2xl font-black text-stone-800 mb-4">Choose One-Way When</h3>
                  <ul className="space-y-3">
                    {["Returning by train or flight", "Relocating or one-time travel", "Different return date planned", "Budget is a top priority", "No need for cab at destination"].map((t, j) => (
                      <li key={j} className="flex items-center gap-3 text-stone-600"><CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" /> {t}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-white rounded-3xl p-8 shadow-md border border-stone-200">
                <h3 className="text-2xl font-black text-stone-800 mb-4">Choose Round Trip When</h3>
                <ul className="space-y-3 mb-6">
                  {["Need cab at destination too", "Multi-day with sightseeing", "Want same driver both ways", "Family trip with stops", "Flexible schedule needed"].map((t, j) => (
                    <li key={j} className="flex items-center gap-3 text-stone-600"><CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" /> {t}</li>
                  ))}
                </ul>
                <Link href="/round-trip-cab" className="inline-flex items-center gap-1 text-emerald-700 font-bold hover:text-emerald-800 text-sm">Explore Round Trip <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </div>
        </section>

        {/* ─── BENEFITS ─── */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-emerald-600 font-semibold text-sm tracking-widest uppercase">Why One-Way</span>
              <h2 className="text-4xl md:text-5xl font-black mt-2">Smart Savings, Zero Compromise</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { icon: IndianRupee, t: "Save Up to 50%", d: "Pay only for one direction. Biggest savings on long routes.", color: "bg-green-50 border-green-100 text-green-600" },
                { icon: Route, t: "200+ Routes", d: "Delhi, Agra, Jaipur, Shimla, Manali, Chandigarh & more.", color: "bg-blue-50 border-blue-100 text-blue-600" },
                { icon: Shield, t: "Verified Drivers", d: "Background-checked, GPS-tracked, 5+ years experience.", color: "bg-purple-50 border-purple-100 text-purple-600" },
                { icon: Clock, t: "Flexible Timing", d: "Any hour. No surge pricing, no restrictions.", color: "bg-amber-50 border-amber-100 text-amber-600" },
                { icon: Car, t: "Vehicle Options", d: "Sedan ₹11/km, SUV ₹15/km, Tempo ₹24/km.", color: "bg-cyan-50 border-cyan-100 text-cyan-600" },
                { icon: Zap, t: "Instant Booking", d: "2-minute booking via call or WhatsApp.", color: "bg-rose-50 border-rose-100 text-rose-600" },
              ].map((item, i) => (
                <div key={i} className={`${item.color} rounded-2xl p-6 border hover:shadow-lg hover:scale-[1.02] transition-all`}>
                  <item.icon className="w-8 h-8 mb-4" />
                  <h3 className="font-bold text-lg text-stone-800 mb-2">{item.t}</h3>
                  <p className="text-stone-500 text-sm">{item.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── FAQ ─── */}
        <section className="py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-emerald-50/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <span className="text-emerald-600 font-semibold text-sm tracking-widest uppercase">Questions?</span>
              <h2 className="text-4xl md:text-5xl font-black mt-2">FAQs</h2>
            </div>
            <div className="space-y-3">
              {faqData.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 hover:shadow-md hover:border-emerald-100 transition-all">
                  <h3 className="font-bold text-stone-800 mb-2 flex items-start gap-3">
                    <span className="flex-shrink-0 w-7 h-7 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center text-xs font-black">{i + 1}</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-stone-500 text-sm leading-relaxed ml-10">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── SEO Prose Section with Contextual Links ─── */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-stone-800 mb-6 text-center">One-Way Cab Service — Pay Only for the Distance You Travel</h2>
            <div className="space-y-4 text-stone-600 text-lg leading-relaxed">
              <p>
                Why pay for a <Link href="/round-trip-cab" className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2">round trip</Link> when you only need to travel one direction? Triveni Cabs&#39; <strong className="text-stone-800">one-way cab service</strong> lets you save up to 50% on intercity travel. With <Link href="/reviews" className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2">4.8-star ratings from 2,847+ customers</Link>, our one-way cabs cover 200+ routes across <Link href="/delhi" className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2">Delhi</Link>, <Link href="/agra" className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2">Agra</Link>, <Link href="/jaipur" className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2">Jaipur</Link>, <Link href="/chandigarh" className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2">Chandigarh</Link>, and beyond.
              </p>
              <p>
                Every one-way cab comes with a <Link href="/safety" className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2">verified professional driver</Link>, AC vehicle, GPS tracking, and zero hidden charges. Sedan at ₹11/km, SUV at ₹15/km — check the <Link href="/pricing" className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2">full fare chart</Link> or read our <Link href="/blog/delhi-to-agra-cab-fare-guide-2026" className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2">Delhi to Agra cab fare guide</Link> for a detailed cost breakdown. Need a cab for your entire trip instead? Our <Link href="/outstation-cabs" className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2">outstation cab service</Link> covers 500+ routes.
              </p>
              <p>
                Perfect for travelers catching a return flight, train, or simply relocating. Combine with our <Link href="/airport-service" className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2">airport transfer service</Link> for door-to-terminal convenience. For groups, our <Link href="/tempo-traveller" className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2">tempo travellers</Link> are available on one-way routes too. Planning a <Link href="/same-day-agra-tour-from-delhi" className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2">same-day Agra tour</Link> or <Link href="/weekend-getaways-from-delhi-by-car" className="text-emerald-600 hover:text-emerald-700 underline underline-offset-2">weekend getaway from Delhi</Link>? Call <strong className="text-stone-800">7668570551</strong> or WhatsApp for an instant quote.
              </p>
            </div>
          </div>
        </section>

        {/* ─── DYNAMIC: Travel Guides & Wedding Services ─── */}
        <section className="py-16 px-4 sm:px-6 bg-emerald-50/30">
          <div className="max-w-7xl mx-auto space-y-14">
            <div>
              <h2 className="text-2xl font-bold text-stone-800 mb-6">Travel Guides</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {getGeneralContent().map((item, index) => (
                  <Link key={index} href={item.url} className="group block bg-white rounded-xl p-5 border border-stone-200 hover:border-emerald-300 hover:shadow-md transition-all">
                    <h3 className="font-semibold text-stone-800 group-hover:text-emerald-700 transition-colors">{item.title}</h3>
                    <p className="text-stone-500 text-sm mt-1">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-stone-800 mb-6">Wedding Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {getWeddingPages().map((item, index) => (
                  <Link key={index} href={item.url} className="group block bg-white rounded-xl p-5 border border-stone-200 hover:border-emerald-300 hover:shadow-md transition-all">
                    <h3 className="font-semibold text-stone-800 group-hover:text-emerald-700 transition-colors">{item.title}</h3>
                    <p className="text-stone-500 text-sm mt-1">{item.description}</p>
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
              <h2 className="text-sm font-bold text-emerald-600 mb-5 tracking-widest uppercase">Related Services</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {[
                  { l: "Round Trip Cab Booking", h: "/round-trip-cab", d: "Same driver for multi-day return trips" },
                  { l: "Outstation Cab Booking", h: "/outstation-cabs", d: "Intercity travel from ₹11/km" },
                  { l: "Local Taxi Hourly Rental", h: "/local-taxi", d: "Hourly packages from ₹1,200" },
                  { l: "Airport Transfer Service", h: "/airport-service", d: "Flight-tracked pickups & drops" },
                  { l: "Wedding Car Rental", h: "/wedding", d: "Decorated luxury cars for weddings" },
                  { l: "Corporate Transportation", h: "/corporate-transportation-service", d: "Employee transport & business travel" },
                ].map((s, i) => (
                  <Link key={i} href={s.h} className="block bg-white rounded-xl p-4 border border-stone-200 hover:border-emerald-300 hover:shadow-md transition-all group">
                    <span className="font-semibold text-sm text-stone-700 group-hover:text-emerald-700 transition-colors">{s.l}</span>
                    <span className="block text-xs text-stone-400 mt-1">{s.d}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Popular One-Way Routes */}
            <div>
              <h2 className="text-sm font-bold text-stone-400 mb-4 tracking-widest uppercase">Popular One-Way Routes</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { l: "Delhi to Agra One-Way", h: "/delhi-to-agra" },
                  { l: "Delhi to Jaipur One-Way", h: "/delhi-to-jaipur" },
                  { l: "Delhi to Chandigarh One-Way", h: "/delhi-to-chandigarh" },
                  { l: "Delhi to Haridwar One-Way", h: "/delhi-to-haridwar" },
                  { l: "Delhi to Shimla One-Way", h: "/delhi-to-shimla" },
                  { l: "Delhi to Manali One-Way", h: "/delhi-to-manali" },
                  { l: "Delhi to Amritsar One-Way", h: "/delhi-to-amritsar" },
                  { l: "Agra to Jaipur One-Way", h: "/agra-to-jaipur" },
                  { l: "Jaipur to Udaipur One-Way", h: "/jaipur-to-udaipur" },
                  { l: "Delhi to Rishikesh One-Way", h: "/delhi-to-rishikesh" },
                ].map((r, i) => (
                  <Link key={i} href={r.h} className="bg-stone-50 hover:bg-emerald-50 border border-stone-200 hover:border-emerald-300 text-stone-500 hover:text-emerald-700 px-4 py-2 rounded-full text-xs font-medium transition-all">{r.l}</Link>
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
                  <Link key={i} href={c.h} className="bg-stone-50 hover:bg-emerald-50 border border-stone-200 hover:border-emerald-300 text-stone-500 hover:text-emerald-700 px-4 py-2 rounded-full text-xs font-medium transition-all">{c.l}</Link>
                ))}
              </div>
            </div>

            {/* Popular Tours */}
            <div>
              <h2 className="text-sm font-bold text-stone-400 mb-4 tracking-widest uppercase">Popular Tours</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { l: "Same Day Agra Tour", h: "/same-day-agra-tour-from-delhi" },
                  { l: "Golden Triangle Tour", h: "/sightseeing/golden-triangle-tour-3-days" },
                  { l: "Taj Mahal Sunrise Tour", h: "/sunrise-taj-mahal-tour-from-delhi" },
                  { l: "Rajasthan Circuit Tour", h: "/sightseeing/rajasthan-tour-from-delhi" },
                  { l: "Weekend Getaways from Delhi", h: "/weekend-getaways-from-delhi-by-car" },
                  { l: "Delhi to Agra Fare Guide", h: "/blog/delhi-to-agra-cab-fare-guide-2026" },
                ].map((t, i) => (
                  <Link key={i} href={t.h} className="bg-stone-50 hover:bg-emerald-50 border border-stone-200 hover:border-emerald-300 text-stone-500 hover:text-emerald-700 px-4 py-2 rounded-full text-xs font-medium transition-all">{t.l}</Link>
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
                  <Link key={i} href={q.h} className="bg-stone-50 hover:bg-emerald-50 border border-stone-200 hover:border-emerald-300 text-stone-500 hover:text-emerald-700 px-4 py-2 rounded-full text-xs font-medium transition-all">{q.l}</Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA ─── */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-700 to-teal-800 rounded-[2rem] p-10 md:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-72 h-72 bg-green-400/10 rounded-full blur-[100px]" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Save 50% on Your Next Trip</h2>
                <p className="text-white/60 mb-10 text-lg">Instant one-way fare quotes on 200+ routes</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-400 to-emerald-400 text-emerald-950 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-green-400/20 hover:scale-[1.02] transition-all"><Phone className="w-5 h-5" /> Call: 7668570551</Link>
                  <Link href="https://wa.me/917668570551?text=I want to book a one way cab" className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/15 transition-all">WhatsApp <ChevronRight className="w-5 h-5" /></Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
