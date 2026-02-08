import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, IndianRupee, Calendar, Route, Coffee } from '@/components/ui/icons';

export const metadata = {
  title: 'Agra Day Trip from Delhi | Complete Guide & Cost ₹4,500',
  description: 'Complete Agra day trip guide from Delhi. Budget breakdown: cab ₹4,500 + entries ₹200 + food ₹500. 3 itinerary options. Money-saving tips. Call 7668570551.',
  keywords: 'agra day trip from delhi, agra one day trip cost, delhi to agra day trip budget, agra trip cost from delhi, one day agra tour cost',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/agra-day-trip-from-delhi' },
  openGraph: {
    title: 'Agra Day Trip from Delhi | Budget Breakdown & Guide 2026',
    description: 'Plan your Agra day trip. Complete cost breakdown, 3 itinerary options, money-saving tips. From ₹5,500 total per person.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/agra-day-trip-from-delhi',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/taj-mahal-hero.jpg', width: 1200, height: 630, alt: 'Agra Day Trip from Delhi Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agra Day Trip from Delhi | Cost & Guide',
    description: 'Complete Agra day trip guide. Budget ₹5,500 per person. 3 itinerary options.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/taj-mahal-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function AgraDayTripFromDelhiPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Agra Day Trip from Delhi", "item": "https://www.trivenicabs.in/agra-day-trip-from-delhi" },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Agra Day Trip from Delhi - Complete Guide",
    "description": "Complete guide for an Agra day trip from Delhi including cost breakdown, itinerary options, money-saving tips, and where to eat.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" },
    },
    "offers": { "@type": "AggregateOffer", "lowPrice": "4500", "highPrice": "12000", "priceCurrency": "INR" },
  };

  const faqData = [
    { question: "How much does an Agra day trip from Delhi cost in total?", answer: "Budget for 2 people sharing a sedan: Cab ₹4,500 (₹2,250 per person) + Taj Mahal entry ₹50 each + Agra Fort ₹50 each + Food ₹500-800 each + Shopping ₹500-2,000 = Total ₹3,350-5,150 per person. For foreigners, add ₹1,100 for Taj entry." },
    { question: "Is it worth doing Agra as a day trip from Delhi?", answer: "Absolutely! The Yamuna Expressway makes Delhi-Agra a comfortable 3-hour drive. You can cover Taj Mahal, Agra Fort, and Baby Taj in one day. Over 70% of Agra visitors do it as a day trip. An overnight stay is only needed if you want to add Fatehpur Sikri or night viewing." },
    { question: "What is the cheapest way to visit Agra from Delhi?", answer: "Cheapest options: (1) Train: Gatimaan Express ₹755 + auto in Agra ₹500-800 = ~₹2,000 per person. (2) Our sedan for 2+ people: ₹4,500 / 2-3 people = ₹1,500-2,250 per person (more comfortable, door-to-door). Bus tours are ₹1,500-2,000 but rushed with fixed schedules." },
    { question: "What should I eat in Agra?", answer: "Must-try: (1) Bedai-Jalebi breakfast near Jama Masjid (₹50-80). (2) Mughlai lunch at Peshawri/Pinch of Spice (₹500-1,000). (3) Street chaat at Sadar Bazaar (₹50-100). (4) Petha sweets from Panchhi Petha (₹200+). Budget: ₹300-800 per person for full day." },
    { question: "Can I add Fatehpur Sikri to my day trip?", answer: "Yes, but it makes for a long day (14-16 hours total). Fatehpur Sikri is 37 km from Agra (45 min). Add 2-3 hours for the visit. Extra cab charge: ₹800. We recommend it if you depart Delhi by 4-5 AM. Entry: ₹50 Indian, ₹610 Foreign." },
    { question: "What is the best day to visit Agra?", answer: "Weekdays (Tuesday-Thursday) are least crowded. Avoid: Friday (Taj closed), Saturday-Sunday (peak crowds), public holidays. Best months: October-March (pleasant weather). April-June: Hot but fewer tourists. July-September: Monsoon, lush gardens but humid." },
    { question: "Do I need a guide at the Taj Mahal?", answer: "A guide is optional but enriches the visit. ASI-approved guides at the gate charge ₹500-800 for a 1-hour tour. They share fascinating history and point out hidden details. Our drivers can also share key facts informally. We can arrange a vetted guide at fair rates." },
    { question: "What if I have limited time in Agra?", answer: "With 3-4 hours: Taj Mahal only (our Taj Express itinerary). With 5-6 hours: Taj + Agra Fort. With 8+ hours: Taj + Fort + Baby Taj + Mehtab Bagh. Even 3 hours at the Taj is worth the trip. We adjust the schedule to maximize your time." },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer },
    })),
  };

  const costBreakdown = [
    { item: "Private AC Sedan (round trip)", cost: "₹4,500", perPerson2: "₹2,250", perPerson4: "₹1,125", note: "All inclusive" },
    { item: "Taj Mahal Entry (Indian)", cost: "₹50", perPerson2: "₹50", perPerson4: "₹50", note: "₹1,100 Foreign" },
    { item: "Agra Fort Entry (Indian)", cost: "₹50", perPerson2: "₹50", perPerson4: "₹50", note: "₹610 Foreign" },
    { item: "Baby Taj Entry (Indian)", cost: "₹25", perPerson2: "₹25", perPerson4: "₹25", note: "₹310 Foreign" },
    { item: "Lunch (restaurant)", cost: "₹300-600", perPerson2: "₹300-600", perPerson4: "₹300-600", note: "Per person" },
    { item: "Petha / Snacks", cost: "₹200-500", perPerson2: "₹200-500", perPerson4: "₹200-500", note: "Optional" },
  ];

  const moneyTips = [
    { title: "Share the Cab", desc: "A sedan fits 4 people. Split ₹4,500 four ways = just ₹1,125 per person for the entire round trip." },
    { title: "Buy Composite Ticket", desc: "ASI offers a composite ticket (₹50) covering Taj + Fort + Baby Taj + Sikandra + Fatehpur Sikri. Saves ₹25 vs buying separately." },
    { title: "Eat Like Locals", desc: "Skip tourist restaurants near the Taj. Local eateries near Jama Masjid and Sadar Bazaar serve better food at 1/3 the price." },
    { title: "Bring Water & Snacks", desc: "Water bottles inside Taj complex cost ₹50 (vs ₹20 outside). Our car has complimentary water bottles." },
    { title: "Skip Marble Shops", desc: "Auto-rickshaw drivers earn 40-50% commission from marble shops. Buy from government emporiums or Subhash Bazaar for fair prices." },
    { title: "Carry Small Change", desc: "Lockers at Taj (₹10), battery bus to gate (₹10), shoe covers (₹5). Having ₹10-20 coins saves time." },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-stone-50">

        {/* === HERO: Budget Calculator Dashboard Design === */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-stone-900 to-amber-950" />

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'50\' height=\'50\' viewBox=\'0 0 50 50\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%2334d399\' stroke-width=\'0.5\'%3E%3Crect width=\'50\' height=\'50\'/%3E%3C/g%3E%3C/svg%3E")' }} />

          <div className="absolute top-[20%] left-[20%] w-[500px] h-[400px] bg-emerald-500/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-[10%] right-[15%] w-80 h-80 bg-amber-500/5 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 backdrop-blur-sm border border-emerald-400/20 rounded-full px-4 py-2 mb-6">
                  <IndianRupee className="w-4 h-4 text-emerald-300" />
                  <span className="text-emerald-200 text-sm font-medium">Complete Budget Guide 2026</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[0.95]">
                  Agra Day Trip
                  <span className="block text-transparent bg-gradient-to-r from-emerald-300 via-amber-200 to-emerald-300 bg-clip-text">from Delhi</span>
                </h1>

                <p className="text-stone-400 text-lg mb-8 max-w-lg leading-relaxed">
                  The honest, no-fluff guide to visiting Agra in one day. Real costs, real tips, real itineraries -- by the locals who drive this route daily.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-400 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-emerald-500/20 hover:scale-105 transition-all">
                    <Phone className="w-5 h-5" /> Call: 7668570551
                  </Link>
                  <Link href="https://wa.me/917668570551?text=I want to plan an Agra day trip from Delhi" className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl text-white px-8 py-4 rounded-2xl font-bold border border-emerald-400/20 hover:bg-white/10 transition-all">
                    WhatsApp Us
                  </Link>
                </div>
              </div>

              {/* Budget Summary Card */}
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                <h3 className="text-emerald-300 font-bold text-sm mb-4 tracking-wider uppercase">Quick Budget (2 People, Indian)</h3>
                <div className="space-y-3">
                  {[
                    { item: "Private AC Sedan", cost: "₹4,500", split: "(₹2,250 each)" },
                    { item: "Taj Mahal Entry", cost: "₹50", split: "per person" },
                    { item: "Agra Fort Entry", cost: "₹50", split: "per person" },
                    { item: "Lunch + Snacks", cost: "~₹500", split: "per person" },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center border-b border-white/5 pb-3 last:border-0 last:pb-0">
                      <span className="text-stone-400 text-sm">{row.item}</span>
                      <div className="text-right">
                        <span className="text-white font-bold">{row.cost}</span>
                        <span className="text-stone-500 text-xs ml-2">{row.split}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-emerald-500/20 flex justify-between items-center">
                  <span className="text-emerald-300 font-bold">Total Per Person</span>
                  <span className="text-3xl font-black text-emerald-300">~₹2,850</span>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-14">
              <path d="M0 60 L0 30 Q720 60 1440 20 L1440 60Z" fill="#fafaf9" />
            </svg>
          </div>
        </section>

        {/* === TRUST BAR === */}
        <section className="py-6 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8">
            {[
              { icon: IndianRupee, label: "No Hidden Costs", sub: "All-inclusive fare" },
              { icon: Route, label: "233 km Route", sub: "Yamuna Expressway" },
              { icon: Star, label: "4.9 Rating", sub: "Budget travelers" },
              { icon: Shield, label: "Safe Travel", sub: "GPS tracked" },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-3">
                <t.icon className="w-5 h-5 text-emerald-500" />
                <div>
                  <div className="font-bold text-stone-800 text-sm">{t.label}</div>
                  <div className="text-xs text-stone-400">{t.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* === OVERVIEW: SEO prose content section === */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-8 text-stone-800">
              Agra Day Trip from Delhi — Complete Cost & Planning Guide
            </h2>
            <div className="space-y-5 text-stone-600 text-lg leading-relaxed">
              <p>Planning an <strong className="text-stone-800">Agra day trip from Delhi</strong>? The 233-kilometre journey via the Yamuna Expressway takes just 3 to 3.5 hours by car, making it the most popular same-day excursion from the capital. Whether you want a quick 6-hour Taj-only visit, a 10-hour full Agra exploration, or an extended 14-hour day covering Fatehpur Sikri and local markets, Triveni Cabs offers transparent, all-inclusive pricing with no hidden costs.</p>
              <p>The total cost of a <strong className="text-stone-800">Delhi to Agra one-day trip</strong> includes more than just the cab fare. You need to budget for Taj Mahal entry tickets (₹50 for Indians, ₹1,100 for foreigners), Agra Fort entry (₹50/₹650), Yamuna Expressway toll charges (₹735 return), meals, and optional shopping at Sadar Bazaar for marble inlay souvenirs. Our detailed cost breakdown below helps you plan an accurate budget so there are no surprises.</p>
              <p>Triveni Cabs is <strong className="text-stone-800">headquartered in Agra</strong> — our drivers know every shortcut, the best parking spots near the Taj Mahal, which entry gate has the shortest queue, and where to find the most authentic Mughlai food. This local expertise makes your day trip smoother and more enjoyable than any generic tour operator from Delhi can offer. Sedan fares start at just ₹4,500 for the complete round trip.</p>
            </div>
          </div>
        </section>

        {/* === COST BREAKDOWN TABLE === */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Full Transparency</div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-3">
                Complete <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text">Cost Breakdown</span>
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto">Every rupee accounted for. No hidden charges, no surprises.</p>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-stone-100">
              <div className="grid grid-cols-5 gap-4 p-4 bg-gradient-to-r from-emerald-600 to-teal-500 text-white text-sm font-bold">
                <div className="col-span-2">Expense</div>
                <div>Total Cost</div>
                <div>Per Person (2)</div>
                <div>Per Person (4)</div>
              </div>
              {costBreakdown.map((row, i) => (
                <div key={i} className={`grid grid-cols-5 gap-4 p-4 text-sm items-center ${i % 2 === 0 ? 'bg-white' : 'bg-emerald-50/30'} border-b border-stone-100 last:border-0`}>
                  <div className="col-span-2">
                    <span className="font-semibold text-stone-800">{row.item}</span>
                    <span className="text-stone-400 text-xs block">{row.note}</span>
                  </div>
                  <div className="text-emerald-600 font-bold">{row.cost}</div>
                  <div className="text-stone-600">{row.perPerson2}</div>
                  <div className="text-stone-600">{row.perPerson4}</div>
                </div>
              ))}
              <div className="grid grid-cols-5 gap-4 p-4 bg-emerald-50 border-t-2 border-emerald-200 font-bold">
                <div className="col-span-2 text-stone-900">Estimated Total (Indian)</div>
                <div className="text-emerald-700">₹5,125-5,725</div>
                <div className="text-emerald-700">₹2,575-2,875</div>
                <div className="text-emerald-700">₹1,700-2,000</div>
              </div>
            </div>
          </div>
        </section>

        {/* === OVERVIEW === */}
        <section className="py-20 px-4 bg-gradient-to-br from-emerald-50 via-stone-50 to-teal-50/30">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wider uppercase">Honest Guide</div>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
              Planning Your <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text">Agra Day Trip</span>
            </h2>
            <div className="space-y-5 text-stone-600 text-lg leading-relaxed max-w-3xl">
              <p>
                An <strong className="text-stone-800">Agra day trip from Delhi</strong> is one of the best travel experiences in India. The entire trip takes 14-16 hours (6-7 hours of driving + 7-9 hours of sightseeing and meals). It sounds like a lot, but over 70% of Agra visitors from Delhi do it as a day trip.
              </p>
              <p>
                The key is a <strong className="text-stone-800">private car with driver</strong>. Unlike trains (fixed schedules, auto-rickshaw hassles in Agra) or tour buses (rushed, set itineraries, waiting for others), a private car gives you total flexibility. Your driver waits while you explore, takes you between monuments, and suggests the best local spots.
              </p>
              <p>
                As an <strong className="text-stone-800">Agra-based cab company</strong>, we do this trip every single day. This guide reflects real costs as of 2026, real tips from our drivers, and honest recommendations on where to eat and what to skip.
              </p>
            </div>
          </div>
        </section>

        {/* === MONEY-SAVING TIPS: Bento Grid === */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-block bg-emerald-100 text-emerald-800 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Save Money</div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-3">
                <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text">Money-Saving</span> Tips
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {moneyTips.map((tip, i) => (
                <div key={i} className={`bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-lg transition-all ${i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center mb-4">
                    <IndianRupee className="w-5 h-5 text-emerald-600" />
                  </div>
                  <h3 className="font-bold text-stone-900 mb-2">{tip.title}</h3>
                  <p className="text-stone-500 text-sm leading-relaxed">{tip.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === FAQs === */}
        <section className="py-20 px-4 bg-gradient-to-br from-stone-50 to-emerald-50/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900">
                Day Trip <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text">FAQs</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-emerald-700 font-bold text-xs">{i + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-stone-900 mb-2">{faq.question}</h3>
                      <p className="text-stone-500 leading-relaxed text-sm">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === INTERLINKS === */}
        <section className="py-16 px-4 bg-stone-100/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-900 text-center mb-10">
              Related <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text">Agra Tours</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { title: "Same Day Agra Tour", href: "/same-day-agra-tour-from-delhi" },
                { title: "Same Day Taj Tour", href: "/same-day-taj-mahal-tour" },
                { title: "Taj from Delhi", href: "/taj-mahal-tour-from-delhi" },
                { title: "Sunrise Taj Tour", href: "/sunrise-taj-mahal-tour-from-delhi" },
                { title: "Moonlight Taj", href: "/moonlight-taj-mahal-tour" },
                { title: "Airport to Agra", href: "/delhi-airport-to-agra-taxi" },
                { title: "Agra Food Tour", href: "/agra-food-tour" },
                { title: "Shopping Guide", href: "/agra-shopping-guide" },
                { title: "Beyond Taj", href: "/agra-beyond-taj-mahal" },
                { title: "Travel Guide", href: "/agra-travel-guide" },
                { title: "Agra Sightseeing", href: "/sightseeing/agra" },
                { title: "Agra City Hub", href: "/agra" },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group bg-white rounded-xl p-4 border border-stone-100 hover:border-emerald-200 shadow-sm hover:shadow-md transition-all text-center">
                  <h3 className="font-bold text-stone-800 text-sm group-hover:text-emerald-700 transition-colors">{link.title}</h3>
                  <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-emerald-500 mx-auto mt-2 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* === CTA === */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'50\' height=\'50\' viewBox=\'0 0 50 50\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23fff\' stroke-width=\'0.5\'%3E%3Crect width=\'50\' height=\'50\'/%3E%3C/g%3E%3C/svg%3E")' }} />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <IndianRupee className="w-12 h-12 text-white/80 mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Plan Your Agra Day Trip
            </h2>
            <p className="text-emerald-100/80 text-lg mb-8 max-w-xl mx-auto">
              From ₹2,250 per person. All-inclusive sedan. No hidden costs. Book now and start planning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-white text-emerald-700 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:bg-emerald-50 transition-all">
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to plan an Agra day trip" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all">
                WhatsApp Planning
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <nav className="py-4 px-4 bg-stone-100 border-t border-stone-200">
          <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-stone-500">
            <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-stone-800 font-medium">Agra Day Trip from Delhi</span>
          </div>
        </nav>

      </div>
    </>
  );
}
