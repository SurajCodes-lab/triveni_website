import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, IndianRupee, Plane, Route } from '@/components/ui/icons';

export const metadata = {
  title: 'Delhi Airport to Agra Taxi | Fixed ₹3,500 | Meet & Greet',
  description: 'Delhi Airport (IGI) to Agra taxi. Fixed fare sedan ₹3,500, SUV ₹5,000. T1, T2, T3 pickup. Flight tracking, meet & greet. 3-4 hrs. Call 7668570551.',
  keywords: 'delhi airport to agra taxi, igi airport to agra cab, delhi airport agra transfer, airport taxi to agra, delhi to agra airport cab',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/delhi-airport-to-agra-taxi' },
  openGraph: {
    title: 'Delhi Airport to Agra Taxi | Fixed Fare ₹3,500 | Meet & Greet',
    description: 'Book reliable taxi from Delhi IGI Airport to Agra. Fixed fare, flight tracking, all terminal pickup. 3-4 hour drive.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/delhi-airport-to-agra-taxi',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/taj-mahal-hero.jpg', width: 1200, height: 630, alt: 'Delhi Airport to Agra Taxi Service' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delhi Airport to Agra Taxi | ₹3,500 Fixed Fare',
    description: 'IGI Airport to Agra cab service. Fixed fare, flight tracking, all terminal pickup.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/taj-mahal-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function DelhiAirportToAgraTaxiPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Delhi Airport to Agra Taxi", "item": "https://www.trivenicabs.in/delhi-airport-to-agra-taxi" },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Airport Transfer",
    "name": "Delhi Airport to Agra Taxi Service",
    "description": "Reliable taxi service from Delhi IGI Airport (T1, T2, T3) to Agra. Fixed fare, flight tracking, meet & greet included.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" },
    },
    "offers": { "@type": "AggregateOffer", "lowPrice": "3500", "highPrice": "8000", "priceCurrency": "INR" },
    "areaServed": { "@type": "Place", "name": "Delhi IGI Airport to Agra" },
  };

  const faqData = [
    { question: "How much does a taxi from Delhi Airport to Agra cost?", answer: "Fixed fare: Sedan (Swift Dzire) ₹3,500, SUV (Innova/Ertiga) ₹5,000, Premium SUV (Innova Crysta) ₹6,500, Tempo Traveller ₹8,000. No surge pricing, no hidden charges. Tolls and parking included." },
    { question: "How do I find my driver at Delhi Airport?", answer: "Our driver will be waiting in the arrival area with a name board displaying your name. We track your flight in real-time and adjust arrival time accordingly. For T3, the driver waits at the designated taxi pickup zone. You will also receive the driver's photo and phone number via WhatsApp." },
    { question: "How long does it take from Delhi Airport to Agra?", answer: "3 to 4 hours depending on traffic and terminal. T3 (International) to Agra: ~3.5 hours via Yamuna Expressway. T1/T2 (Domestic) to Agra: ~3-3.5 hours. Late night flights have less traffic (2.5-3 hours)." },
    { question: "Can I book for a late night or early morning flight?", answer: "Yes! We operate 24/7. Whether your flight lands at 2 AM or 11 PM, our driver will be there. Night charges are already included in the quoted fare. No extra charges for odd hours." },
    { question: "What if my flight is delayed?", answer: "We track your flight in real-time. If your flight is delayed, the driver adjusts accordingly and will still be there when you land. No extra waiting charges for flight delays up to 3 hours. We monitor the flight from departure until landing." },
    { question: "Can I go directly to Taj Mahal from the airport?", answer: "Absolutely! Many tourists fly into Delhi and head straight to Agra. We can take you directly to the Taj Mahal (if timing permits) or to your Agra hotel first. Add Agra sightseeing for just ₹500 extra above the transfer fare." },
    { question: "Do you provide child seats or extra luggage space?", answer: "Child/baby seats are available on request at no extra charge. Our sedans accommodate 2 large suitcases + 2 cabin bags. SUVs can handle 4 large suitcases. For extra luggage, we recommend the SUV or Tempo Traveller." },
    { question: "Can I book a return trip from Agra to Delhi Airport?", answer: "Yes! We offer both one-way and round-trip transfers. Agra to Delhi Airport: same pricing. For round trips, we offer a 10% discount. The driver will time the departure based on your flight schedule, ensuring you reach 3 hours before departure." },
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

  const terminals = [
    { name: "Terminal 1 (T1)", type: "Domestic", airlines: "IndiGo, SpiceJet (select flights)", pickup: "Arrival Gate exit, taxi stand area", time: "3-3.5 hrs to Agra" },
    { name: "Terminal 2 (T2)", type: "Domestic", airlines: "Expanded domestic operations", pickup: "Ground floor arrival exit", time: "3-3.5 hrs to Agra" },
    { name: "Terminal 3 (T3)", type: "International + Domestic", airlines: "Air India, Vistara, Emirates, Singapore Airlines, all international", pickup: "Arrival hall, meeting point near Starbucks", time: "3.5-4 hrs to Agra" },
  ];

  const vehiclePricing = [
    { type: "Sedan", model: "Swift Dzire / Amaze", price: "3,500", capacity: "4 passengers + 2 bags", best: "Solo / Couples", popular: false },
    { type: "SUV", model: "Innova / Ertiga", price: "5,000", capacity: "6 passengers + 4 bags", best: "Families / Groups", popular: true },
    { type: "Premium SUV", model: "Innova Crysta", price: "6,500", capacity: "6 passengers + 4 bags", best: "Business / Comfort", popular: false },
    { type: "Tempo Traveller", model: "Force 12-seater", price: "8,000", capacity: "12 passengers + luggage", best: "Large Groups", popular: false },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-slate-50">

        {/* === HERO: Airport Terminal Dashboard Design === */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-indigo-950" />

          {/* Radar/Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%2360a5fa\' stroke-width=\'0.5\'%3E%3Crect width=\'40\' height=\'40\'/%3E%3C/g%3E%3C/svg%3E")' }} />

          {/* Blue Runway Lights */}
          <div className="absolute bottom-[15%] left-0 right-0 flex justify-center gap-16 opacity-20">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-blue-400" />
            ))}
          </div>

          {/* Glow */}
          <div className="absolute top-[30%] left-[30%] w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-[10%] right-[20%] w-64 h-64 bg-amber-500/5 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
            <div className="grid lg:grid-cols-5 gap-10 items-center">
              {/* Left: Content (3 cols) */}
              <div className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-400/20 rounded-lg px-4 py-2 mb-6">
                  <Plane className="w-4 h-4 text-blue-300" />
                  <span className="text-blue-200 text-sm font-mono tracking-wider">IGI AIRPORT → AGRA TRANSFER</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[0.95]">
                  Delhi Airport
                  <span className="block text-transparent bg-gradient-to-r from-blue-300 via-cyan-200 to-blue-400 bg-clip-text">to Agra Taxi</span>
                </h1>

                <p className="text-slate-400 text-lg mb-8 max-w-lg leading-relaxed">
                  Fixed fare. Flight tracking. Meet & greet at arrival gate. Your driver is waiting before you land.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 transition-all">
                    <Phone className="w-5 h-5" /> Call: 7668570551
                  </Link>
                  <Link href="https://wa.me/917668570551?text=I need a taxi from Delhi Airport to Agra" className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl text-white px-8 py-4 rounded-xl font-bold border border-blue-400/20 hover:bg-white/10 transition-all">
                    WhatsApp Booking
                  </Link>
                </div>
              </div>

              {/* Right: Flight Board Style (2 cols) */}
              <div className="lg:col-span-2">
                <div className="bg-slate-800/50 backdrop-blur-xl rounded-2xl border border-slate-700/50 overflow-hidden">
                  {/* Board Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 flex items-center gap-2">
                    <Plane className="w-4 h-4 text-white" />
                    <span className="text-white font-bold text-sm font-mono">TRANSFER DETAILS</span>
                  </div>
                  <div className="p-5 space-y-4">
                    {[
                      { label: "FROM", value: "Delhi IGI Airport (DEL)" },
                      { label: "TO", value: "Agra, Uttar Pradesh" },
                      { label: "DISTANCE", value: "233 km via Expressway" },
                      { label: "DURATION", value: "3 - 4 hours" },
                      { label: "FARE", value: "₹3,500 (Sedan)" },
                      { label: "STATUS", value: "AVAILABLE 24/7" },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-slate-700/50 pb-3 last:border-0 last:pb-0">
                        <span className="text-slate-500 text-xs font-mono tracking-wider">{item.label}</span>
                        <span className={`font-bold text-sm ${i === 4 ? 'text-cyan-300' : i === 5 ? 'text-emerald-400' : 'text-white'}`}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Angled Bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-14">
              <path d="M0 60 L0 30 L1440 0 L1440 60Z" fill="#f8fafc" />
            </svg>
          </div>
        </section>

        {/* === TRUST BAR: Airport Status Style === */}
        <section className="py-8 px-4 bg-white border-b border-slate-200">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Plane, title: "Flight Tracking", desc: "Real-time monitoring", color: "text-blue-500" },
              { icon: Shield, title: "Fixed Fare", desc: "No surge pricing", color: "text-emerald-500" },
              { icon: Clock, title: "24/7 Service", desc: "Any time, any flight", color: "text-amber-500" },
              { icon: Star, title: "4.9 Rating", desc: "5000+ transfers", color: "text-purple-500" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <item.icon className={`w-6 h-6 ${item.color}`} />
                <div>
                  <div className="font-bold text-slate-800 text-sm">{item.title}</div>
                  <div className="text-xs text-slate-500">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* === TERMINAL GUIDE: Card Grid === */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Terminal Guide</div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
                Pickup from <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Every Terminal</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">Our drivers are familiar with all IGI Airport terminals and waiting areas</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {terminals.map((t, i) => (
                <div key={i} className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-md hover:shadow-xl transition-all group">
                  {/* Terminal Header */}
                  <div className={`p-6 ${i === 2 ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white' : 'bg-gradient-to-r from-slate-100 to-slate-50'}`}>
                    <div className={`text-xs font-bold mb-1 ${i === 2 ? 'text-blue-200' : 'text-slate-400'}`}>{t.type}</div>
                    <h3 className={`text-2xl font-bold ${i === 2 ? 'text-white' : 'text-slate-900'}`}>{t.name}</h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <div className="text-xs text-slate-400 font-semibold mb-1">AIRLINES</div>
                      <div className="text-slate-700 text-sm">{t.airlines}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-semibold mb-1">PICKUP POINT</div>
                      <div className="text-slate-700 text-sm">{t.pickup}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-semibold mb-1">DRIVE TIME</div>
                      <div className="text-blue-600 font-bold">{t.time}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === OVERVIEW === */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 via-slate-50 to-cyan-50/30">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wider uppercase">About This Service</div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Hassle-Free <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Airport Transfer</span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-10">
              <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
                <p>
                  Landing at Delhi Airport and need to get to Agra? Our <strong className="text-slate-800">Delhi Airport to Agra taxi service</strong> eliminates all the stress. Your driver tracks your flight in real time, waits at the arrival gate with your name board, helps with luggage, and drives you directly to your Agra destination.
                </p>
                <p>
                  Unlike airport prepaid taxis (overpriced, old vehicles) or ride-hailing apps (surge pricing at airports, driver cancellations), we offer <strong className="text-slate-800">fixed fares with zero surprises</strong>. A sedan costs just ₹3,500 -- less than most airport taxi counters charge.
                </p>
                <p>
                  The drive takes 3-4 hours via the <strong className="text-slate-800">Yamuna Expressway</strong>. Many international tourists fly into Delhi and head straight to Agra -- we can even take you to the Taj Mahal directly from the airport if your timing is right.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Plane, title: "Real-Time Flight Tracking", desc: "We monitor your flight from departure. If delayed, the driver adjusts." },
                  { icon: Users, title: "Name Board Meet & Greet", desc: "Driver waits at arrival with your name. No searching for your ride." },
                  { icon: IndianRupee, title: "Fixed Fare, No Surprises", desc: "Price agreed before booking. No meters, no surge, no hidden fees." },
                  { icon: Clock, title: "24/7 Any Flight", desc: "Red-eye at 2 AM? Early morning at 5 AM? We are always available." },
                  { icon: Route, title: "Direct to Agra or Taj Mahal", desc: "Go straight to hotel, Taj Mahal, or any Agra location." },
                  { icon: Car, title: "Comfortable AC Vehicles", desc: "Well-maintained, clean cars. WiFi available in select vehicles." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 bg-white rounded-xl p-4 border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-800 text-sm">{item.title}</div>
                      <div className="text-slate-500 text-xs">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === PRICING: Boarding Pass Cards === */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Fixed Fares</div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
                Vehicle <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Options & Pricing</span>
              </h2>
              <p className="text-slate-500">All fares include tolls, parking, meet & greet, and flight tracking</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {vehiclePricing.map((v, i) => (
                <div key={i} className={`relative rounded-3xl overflow-hidden ${v.popular ? 'ring-2 ring-blue-500 shadow-2xl shadow-blue-500/20' : 'border border-slate-200 shadow-sm'} bg-white hover:shadow-xl transition-all`}>
                  {v.popular && (
                    <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center py-2 text-xs font-bold tracking-wider">MOST POPULAR</div>
                  )}
                  <div className="p-6">
                    <div className="text-slate-400 text-xs font-semibold mb-1">{v.type}</div>
                    <div className="text-slate-600 text-sm mb-4">{v.model}</div>
                    <div className="text-4xl font-black text-slate-900 mb-1">₹{v.price}</div>
                    <div className="text-slate-500 text-sm mb-4">one way, fixed</div>
                    <div className="space-y-2 mb-5 text-sm text-slate-600">
                      <div className="flex items-center gap-2"><Users className="w-4 h-4 text-blue-400" /> {v.capacity}</div>
                      <div className="flex items-center gap-2"><Star className="w-4 h-4 text-blue-400" /> Best for: {v.best}</div>
                    </div>
                    <Link href="tel:+917668570551" className={`block text-center py-3 rounded-xl font-bold text-sm ${v.popular ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-lg' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'} transition-all`}>
                      <Phone className="w-4 h-4 inline mr-1" /> Book Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === HOW IT WORKS: Step Process === */}
        <section className="py-20 px-4 bg-slate-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-block bg-blue-500/10 text-blue-300 text-xs font-bold px-4 py-1.5 rounded-full mb-4 border border-blue-500/20 tracking-wider uppercase">Simple Process</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                How It <span className="text-transparent bg-gradient-to-r from-blue-300 to-cyan-200 bg-clip-text">Works</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Book", desc: "Call or WhatsApp with your flight details, date, and vehicle preference" },
                { step: "2", title: "Confirm", desc: "We confirm booking with driver details, photo, and car number via WhatsApp" },
                { step: "3", title: "Land", desc: "Your driver tracks the flight and waits with name board at arrival" },
                { step: "4", title: "Ride", desc: "Settle in your AC car. 3-4 hours to Agra. Relax and enjoy the drive" },
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/20">
                    <span className="text-white font-black text-xl">{s.step}</span>
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                  <p className="text-slate-400 text-sm">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === FAQs === */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">FAQs</div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                Common <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Questions</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {faqData.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 rounded-md bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-700 font-bold text-xs">{i + 1}</span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm">{faq.question}</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === INTERLINKS === */}
        <section className="py-16 px-4 bg-slate-100/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 text-center mb-10">
              Plan Your <span className="text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text">Agra Visit</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { title: "Same Day Agra Tour", href: "/same-day-agra-tour-from-delhi" },
                { title: "Same Day Taj Mahal Tour", href: "/same-day-taj-mahal-tour" },
                { title: "Taj Mahal Tour from Delhi", href: "/taj-mahal-tour-from-delhi" },
                { title: "Sunrise Taj Tour", href: "/sunrise-taj-mahal-tour-from-delhi" },
                { title: "Moonlight Taj Tour", href: "/moonlight-taj-mahal-tour" },
                { title: "Agra Day Trip Guide", href: "/agra-day-trip-from-delhi" },
                { title: "Agra Food Tour", href: "/agra-food-tour" },
                { title: "Agra Shopping Guide", href: "/agra-shopping-guide" },
                { title: "Agra Beyond Taj", href: "/agra-beyond-taj-mahal" },
                { title: "Agra Travel Guide", href: "/agra-travel-guide" },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group bg-white rounded-xl p-4 border border-slate-100 hover:border-blue-200 shadow-sm hover:shadow-md transition-all text-center">
                  <h3 className="font-bold text-slate-800 text-sm group-hover:text-blue-600 transition-colors">{link.title}</h3>
                  <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 mx-auto mt-2 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* === CTA === */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23fff\' stroke-width=\'0.5\'%3E%3Crect width=\'40\' height=\'40\'/%3E%3C/g%3E%3C/svg%3E")' }} />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <Plane className="w-12 h-12 text-white/80 mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Landing in Delhi?
            </h2>
            <p className="text-2xl text-blue-100 font-semibold mb-3">Your Agra ride is waiting.</p>
            <p className="text-blue-100/70 text-lg mb-8 max-w-xl mx-auto">Fixed fare from ₹3,500. Flight tracking. Meet & greet. 24/7 service.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:bg-blue-50 transition-all">
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I need airport to Agra taxi" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all">
                WhatsApp Booking
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <nav className="py-4 px-4 bg-slate-100 border-t border-slate-200">
          <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-slate-800 font-medium">Delhi Airport to Agra Taxi</span>
          </div>
        </nav>

      </div>
    </>
  );
}
