import Link from 'next/link';
import {
  Phone, ChevronRight, CheckCircle2, ArrowRight, Shield, Clock,
  Car, MapPin, Star, Navigation, Plane, Users, Luggage
} from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'IGI Airport Terminal 1 Domestic Taxi | T1 Cab Pickup ₹11/km',
  description: 'Book taxi from Delhi Airport Terminal 1 (T1). Domestic terminal pickup/drop. IndiGo, SpiceJet flights. Meet & greet service. Starting ₹11/km. Call 7668570551.',
  alternates: { canonical: 'https://www.trivenicabs.in/airport-service/delhi/igi-terminal-1-domestic' },
  openGraph: {
    title: 'Delhi Airport Terminal 1 Taxi | T1 Cab Service 24/7',
    description: 'Delhi Airport Terminal 1 taxi service. Domestic flights pickup. IndiGo, SpiceJet, GoAir terminal. Book now!',
    type: 'website', locale: 'en_IN', siteName: 'Triveni Cabs',
    images: [{ url: '/images/airport_section.jpg', width: 1200, height: 630, alt: 'Delhi Airport Terminal 1 Taxi' }]
  },
  keywords: 'delhi airport terminal 1 taxi, T1 delhi airport cab, terminal 1 IGI airport taxi, domestic terminal delhi taxi, IndiGo terminal taxi delhi, T1 pickup taxi delhi, terminal 1 cab booking, delhi T1 to city taxi',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function DelhiTerminal1Page() {
  const terminalData = {
    terminal: 'Terminal 1 (T1)',
    type: 'Domestic Terminal',
    airlines: ['IndiGo', 'SpiceJet', 'GoFirst', 'AirAsia India', 'Star Air', 'Fly91'],
    pickupPoint: 'Arrival Gate 1-4, Ground Floor, Pillar No. 6-10',
    parkingArea: 'Multi-level parking adjacent to terminal, Level 1-3',
    meetingPoint: 'Outside Arrival Gate, near Prepaid Taxi Counter',
    distance: '15 km from Connaught Place',
    features: [
      'Dedicated pickup zone at Arrival Gate',
      'Driver meets with nameboard at exit',
      'Free 30-minute waiting after flight landing',
      'Flight tracking for delayed arrivals',
      'Luggage assistance provided',
      '24/7 availability for all domestic flights'
    ],
    pricing: [
      { destination: 'Connaught Place', distance: '15 km', fare: '₹450-550', time: '30-45 min' },
      { destination: 'Noida Sector 18', distance: '32 km', fare: '₹800-950', time: '50-70 min' },
      { destination: 'Gurgaon Cyber City', distance: '18 km', fare: '₹500-650', time: '30-45 min' },
      { destination: 'Old Delhi Railway Stn', distance: '20 km', fare: '₹550-650', time: '40-55 min' },
      { destination: 'Faridabad', distance: '35 km', fare: '₹850-1000', time: '55-75 min' },
      { destination: 'Agra (Outstation)', distance: '230 km', fare: '₹3500-4000', time: '3-4 hours' }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Airport Transfer Service",
    "name": "Delhi Airport Terminal 1 Taxi Service",
    "description": "Professional taxi service from Delhi Airport Terminal 1 (T1) - Domestic Terminal. IndiGo, SpiceJet, GoFirst flights pickup.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "url": "https://www.trivenicabs.in"
    },
    "areaServed": { "@type": "City", "name": "Delhi" },
    "offers": { "@type": "Offer", "price": "11", "priceCurrency": "INR", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "11", "priceCurrency": "INR", "unitText": "per kilometer" } }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Airport Service", "item": "https://www.trivenicabs.in/airport-service" },
      { "@type": "ListItem", "position": 3, "name": "Delhi", "item": "https://www.trivenicabs.in/airport-service/delhi" },
      { "@type": "ListItem", "position": 4, "name": "IGI Terminal 1 Domestic", "item": "https://www.trivenicabs.in/airport-service/delhi/igi-terminal-1-domestic" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Where is the pickup point at Delhi Airport Terminal 1?", "acceptedAnswer": { "@type": "Answer", "text": "Our drivers wait at the Arrival Gate exit on the Ground Floor, near Pillar No. 6-10, close to the Prepaid Taxi Counter. The driver will hold a nameboard with your name." } },
      { "@type": "Question", "name": "Which airlines operate from Terminal 1?", "acceptedAnswer": { "@type": "Answer", "text": "Terminal 1 handles domestic flights primarily from IndiGo, SpiceJet, GoFirst, AirAsia India, Star Air, and Fly91. All low-cost carrier domestic flights operate from T1." } },
      { "@type": "Question", "name": "How much does a taxi from Terminal 1 to city center cost?", "acceptedAnswer": { "@type": "Answer", "text": "A taxi from Terminal 1 to Connaught Place costs approximately ₹450-550, to Noida ₹800-950, and to Gurgaon ₹500-650. Prices start at ₹11/km with no hidden charges." } },
      { "@type": "Question", "name": "Do you wait if my flight is delayed?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we track your flight in real-time. If your flight is delayed, our driver adjusts arrival time accordingly. We provide 30 minutes free waiting after actual landing time." } }
    ]
  };

  const quickStats = [
    { label: 'Starting Rate', value: '₹11/km', icon: Car },
    { label: 'Free Waiting', value: '30 min', icon: Clock },
    { label: 'Flight Tracking', value: 'Real-time', icon: Navigation },
    { label: 'Availability', value: '24/7', icon: Shield },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[#F0F9FF]">

        {/* === HERO: Sky-Blue Runway Theme === */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-teal-50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(14,165,233,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(20,184,166,0.06),transparent_50%)]" />

          {/* Runway-stripe accent at top */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sky-400 via-teal-400 to-sky-400" />

          {/* Decorative aviation elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[10%] right-[6%] opacity-[0.04]">
              <Plane className="w-48 h-48 text-sky-600 rotate-45" />
            </div>
            {/* Dotted runway line */}
            <div className="absolute bottom-0 left-[10%] w-px h-[60%] border-l-2 border-dashed border-sky-200/40" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-10">
              <Link href="/" className="hover:text-sky-600 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/airport-service" className="hover:text-sky-600 transition-colors">Airport Service</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/airport-service/delhi" className="hover:text-sky-600 transition-colors">Delhi</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-sky-600 font-medium">IGI Terminal 1 Domestic</span>
            </nav>

            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Left: Content - spans 3 cols */}
              <div className="lg:col-span-3">
                {/* Terminal badge - boarding pass style */}
                <div className="inline-flex items-center gap-3 bg-white border border-sky-200 px-6 py-3 rounded-xl mb-8 shadow-sm">
                  <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
                    <Plane className="w-4 h-4 text-white" />
                  </div>
                  <div className="border-l border-sky-200 pl-3">
                    <div className="text-[10px] font-bold text-sky-400 tracking-widest uppercase">Terminal</div>
                    <div className="text-xl font-black text-sky-700 leading-none">T1</div>
                  </div>
                  <div className="border-l border-sky-200 pl-3">
                    <div className="text-[10px] font-bold text-sky-400 tracking-widest uppercase">Type</div>
                    <div className="text-sm font-bold text-slate-700 leading-none">Domestic</div>
                  </div>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-[0.95] mb-6">
                  Delhi Airport
                  <span className="block text-transparent bg-gradient-to-r from-sky-500 via-teal-500 to-cyan-500 bg-clip-text">Terminal 1 Taxi</span>
                </h1>

                <p className="text-lg text-slate-500 mb-10 max-w-xl leading-relaxed">
                  IndiGo, SpiceJet, GoFirst flights. Professional pickup from T1 Arrival Gate. Starting ₹11/km with no hidden charges.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="tel:+917668570551" className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-sky-500 to-teal-500 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-sky-500/20 hover:shadow-sky-500/35 hover:scale-[1.02] transition-all duration-300">
                    <Phone className="w-5 h-5" /> Book T1 Pickup
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="https://wa.me/917668570551?text=I need taxi from Delhi Airport Terminal 1" className="inline-flex items-center justify-center gap-3 bg-white text-slate-700 px-8 py-5 rounded-2xl font-bold text-lg border-2 border-slate-200 hover:border-sky-300 shadow-sm hover:shadow-md transition-all">
                    WhatsApp
                  </Link>
                </div>
              </div>

              {/* Right: Quick stats + pickup info - spans 2 cols */}
              <div className="lg:col-span-2 space-y-4">
                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-3">
                  {quickStats.map((stat, idx) => (
                    <div key={idx} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                      <stat.icon className="w-6 h-6 text-sky-500 mb-2" />
                      <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                      <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Pickup card */}
                <div className="bg-white rounded-2xl p-6 border border-sky-100 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-sky-500" /> T1 Pickup Details
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div><span className="text-sky-600 font-semibold">Pickup:</span> <span className="text-slate-600">{terminalData.pickupPoint}</span></div>
                    <div><span className="text-sky-600 font-semibold">Meeting:</span> <span className="text-slate-600">{terminalData.meetingPoint}</span></div>
                    <div><span className="text-sky-600 font-semibold">Distance:</span> <span className="text-slate-600">{terminalData.distance}</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === OVERVIEW: SEO prose content section === */}
        <section className="py-20 px-4 relative">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-8 text-slate-800">
              IGI Airport Terminal 1 Domestic — Taxi Pickup Guide
            </h2>
            <div className="space-y-5 text-slate-600 text-lg leading-relaxed">
              <p>Looking for a reliable <strong className="text-slate-800">Delhi Airport Terminal 1 taxi</strong>? IGI Terminal 1 (T1) is the dedicated domestic terminal handling budget carriers including IndiGo, SpiceJet, GoFirst, AirAsia India, Star Air, and Fly91. As the busiest domestic terminal in Delhi, T1 processes millions of passengers annually — and finding a trustworthy cab after landing can be stressful without a pre-booked service.</p>
              <p>Triveni Cabs provides <strong className="text-slate-800">pre-booked T1 pickup service</strong> with real-time flight tracking, a dedicated driver waiting at the arrival gate with a nameboard, and 30 minutes of free waiting time after your flight lands. Unlike the chaotic prepaid taxi queue, our service ensures you walk out of T1 and step directly into a clean, AC vehicle — no bargaining, no confusion, no waiting in line.</p>
              <p>Our <strong className="text-slate-800">Terminal 1 cab service</strong> covers all popular drop destinations: Connaught Place (₹450-550), Gurgaon Cyber City (₹500-650), Noida (₹800-950), and outstation routes to Agra (₹3,500-4,000). All fares start at ₹11/km with transparent billing — toll and parking at actual. Perfect for business travellers, families arriving on domestic flights, and tourists connecting to outstation destinations.</p>
            </div>
          </div>
        </section>

        {/* === Airlines - Flight Board Style === */}
        <section className="relative py-16 px-4">
          <div className="absolute inset-0 bg-slate-900" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-white flex items-center justify-center gap-3">
                <Plane className="w-6 h-6 text-sky-400" /> Airlines at Terminal 1
              </h2>
            </div>
            {/* Departure board style */}
            <div className="bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-px bg-slate-700">
                {terminalData.airlines.map((airline, idx) => (
                  <div key={idx} className="bg-slate-800 px-4 py-4 text-center">
                    <div className="text-white font-bold text-sm tracking-wide">{airline}</div>
                    <div className="text-green-400 text-xs mt-1 font-mono">ACTIVE</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === Features - Clean Bright Cards === */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-sky-500 text-sm font-bold tracking-widest uppercase mb-4">Our Service</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900">
                Terminal 1 <span className="text-transparent bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text">Pickup Features</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {terminalData.features.map((feature, idx) => (
                <div key={idx} className="group flex items-start gap-4 p-6 bg-gradient-to-br from-sky-50/50 to-white rounded-2xl border border-sky-100 hover:border-sky-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex-shrink-0 w-10 h-10 bg-sky-500/10 rounded-xl flex items-center justify-center group-hover:bg-sky-500 transition-colors">
                    <CheckCircle2 className="w-5 h-5 text-sky-500 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-slate-700 font-medium leading-relaxed">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === Pricing - Boarding Pass Departure Board === */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.08),transparent_50%)]" />
          {/* Runway lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-sky-400/50 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-400/30 to-transparent" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-sky-400 text-sm font-bold tracking-widest uppercase mb-4">Fare Guide</span>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Terminal 1 <span className="text-transparent bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text">Fare Estimates</span>
              </h2>
              <p className="text-slate-400 mt-3">Transparent pricing. No hidden charges. No surge pricing.</p>
            </div>

            {/* Table with boarding-pass aesthetics */}
            <div className="bg-white/[0.04] backdrop-blur-sm rounded-3xl border border-white/[0.08] overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-4 bg-sky-500/10 px-6 py-4 border-b border-white/[0.06]">
                <span className="text-sky-400 font-bold text-sm tracking-wider uppercase">Destination</span>
                <span className="text-sky-400 font-bold text-sm tracking-wider uppercase">Distance</span>
                <span className="text-sky-400 font-bold text-sm tracking-wider uppercase">Fare</span>
                <span className="text-sky-400 font-bold text-sm tracking-wider uppercase">Time</span>
              </div>
              {/* Rows */}
              {terminalData.pricing.map((route, idx) => (
                <div key={idx} className="grid grid-cols-4 px-6 py-4 border-b border-white/[0.04] hover:bg-white/[0.03] transition-colors group">
                  <span className="font-semibold text-white group-hover:text-sky-300 transition-colors">{route.destination}</span>
                  <span className="text-slate-400 font-mono text-sm">{route.distance}</span>
                  <span className="text-sky-400 font-bold font-mono">{route.fare}</span>
                  <span className="text-slate-400 text-sm">{route.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === How to Book: Step-by-Step Guide === */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-white" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-teal-500 text-sm font-bold tracking-widest uppercase mb-4">Simple Process</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900">
                How to Book Your <span className="text-transparent bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text">T1 Taxi</span>
              </h2>
              <p className="text-slate-500 mt-3 max-w-2xl mx-auto">Booking a cab from Delhi Airport Terminal 1 is simple. Follow these three easy steps for a hassle-free pickup.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Call or WhatsApp Us', desc: 'Contact us on +91 7668570551 with your flight number, arrival time, and drop destination. You can also WhatsApp your booking details for instant confirmation. Our team is available 24/7.' },
                { step: '02', title: 'We Track Your Flight', desc: 'Once confirmed, we monitor your flight in real-time. If your IndiGo, SpiceJet, or GoFirst flight is delayed, our driver automatically adjusts arrival time. No extra charges for delays.' },
                { step: '03', title: 'Meet at Arrival Gate', desc: 'Your assigned driver reaches Terminal 1 before your flight lands. He waits at the Arrival Gate exit near Pillar No. 6-10 with a nameboard. Walk out and step directly into a clean, AC cab.' },
              ].map((item, idx) => (
                <div key={idx} className="relative bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 border border-sky-100 shadow-sm">
                  <div className="text-6xl font-black text-sky-100 absolute top-4 right-6">{item.step}</div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === Local Expert Tips === */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-[#F0F9FF]" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-sky-500 text-sm font-bold tracking-widest uppercase mb-4">Insider Knowledge</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                Local Expert Tips for <span className="text-sky-600">Terminal 1 Travelers</span>
              </h2>
              <p className="text-slate-500 mt-3">Insights from our team of 200+ drivers who pick up passengers from T1 daily.</p>
            </div>
            <div className="space-y-5">
              {[
                { title: 'Best Exit Strategy After Landing', content: 'After collecting your bags from T1, head to the Arrival Gate exit on the Ground Floor. Turn right and walk towards Pillar No. 6-10 near the Prepaid Taxi Counter. This is the fastest route to meet your pre-booked driver and avoids the crowded main exit area.' },
                { title: 'Peak Hours at Terminal 1', content: 'T1 gets extremely busy between 8-10 AM and 6-9 PM when most IndiGo and SpiceJet flights land. During peak hours, the prepaid taxi queue can take 30-45 minutes. With a pre-booked driver waiting, you skip this entirely.' },
                { title: 'Outstation Trips Directly from T1', content: 'Many passengers fly into T1 and head directly to Agra (3-4 hrs), Jaipur (5 hrs), or Chandigarh (5 hrs) without entering Delhi city. We arrange an outstation cab waiting at T1 so you head straight to your destination, saving time and Delhi traffic hassle.' },
                { title: 'Late Night and Early Morning Flights', content: 'T1 handles numerous red-eye and early morning flights. Our 24/7 service ensures a driver is available at 2 AM or 5 AM arrivals. Night fares remain the same — we never charge surge pricing unlike app-based services.' },
              ].map((tip, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-7 border border-sky-100 shadow-sm">
                  <h3 className="font-bold text-slate-900 mb-2 flex items-start gap-3">
                    <span className="inline-flex items-center justify-center w-7 h-7 bg-sky-500 text-white text-xs font-black rounded-lg flex-shrink-0 mt-0.5">{idx + 1}</span>
                    {tip.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed pl-10">{tip.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === Trust & Experience: E-E-A-T === */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-white" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-sky-500 text-sm font-bold tracking-widest uppercase mb-4">Why Triveni Cabs</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                Trusted by <span className="text-sky-600">10,000+ Delhi Airport</span> Passengers
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 border border-sky-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Our Track Record</h3>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" /> <strong className="text-slate-800">500+ airport trips</strong> completed every month from all three Delhi terminals</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" /> <strong className="text-slate-800">Operating since 2015</strong> — over 8 years of professional airport transfer experience</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" /> <strong className="text-slate-800">4.9/5 average rating</strong> across 2,000+ verified customer reviews</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" /> <strong className="text-slate-800">200+ trained drivers</strong> with police-verified backgrounds and airport expertise</li>
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" /> <strong className="text-slate-800">Fleet of 500+ vehicles</strong> including sedans, SUVs, Innovas, and luxury cars</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-white rounded-2xl p-8 border border-teal-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Our Guarantee</h3>
                <ul className="space-y-3 text-slate-600 text-sm">
                  <li className="flex items-start gap-3"><Shield className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" /> <strong className="text-slate-800">No hidden charges</strong> — fare fixed at ₹11/km, toll and parking at actual</li>
                  <li className="flex items-start gap-3"><Shield className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" /> <strong className="text-slate-800">Free cancellation</strong> up to 2 hours before pickup with full refund</li>
                  <li className="flex items-start gap-3"><Shield className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" /> <strong className="text-slate-800">No surge pricing</strong> — same rate at midnight, early morning, or peak hours</li>
                  <li className="flex items-start gap-3"><Shield className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" /> <strong className="text-slate-800">30 min free waiting</strong> after landing for luggage collection</li>
                  <li className="flex items-start gap-3"><Shield className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" /> <strong className="text-slate-800">Registered business</strong> — 366 Dandupura, Agra, Uttar Pradesh</li>
                </ul>
              </div>
            </div>
            <div className="bg-sky-50 rounded-2xl p-6 border border-sky-100 text-center">
              <p className="text-slate-700 font-medium mb-1">Serving North India since 2015</p>
              <p className="text-sm text-slate-500">Triveni Cabs | 366 Dandupura, Agra, UP | GST Registered | 24/7 Helpline: +91 7668570551</p>
            </div>
          </div>
        </section>

        {/* === FAQ - Clean Minimal === */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-[#F0F9FF] to-white" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-teal-500 text-sm font-bold tracking-widest uppercase mb-4">Help Center</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900">
                Terminal 1 <span className="text-transparent bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text">FAQs</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                { q: 'Where is the pickup point at Delhi Airport Terminal 1?', a: 'Our drivers wait at the Arrival Gate exit on the Ground Floor, near Pillar No. 6-10, close to the Prepaid Taxi Counter. The driver will hold a nameboard with your name.' },
                { q: 'Which airlines operate from Terminal 1?', a: 'Terminal 1 handles domestic flights primarily from IndiGo, SpiceJet, GoFirst, AirAsia India, Star Air, and Fly91. All low-cost carrier domestic flights operate from T1.' },
                { q: 'How much does a taxi from Terminal 1 to city center cost?', a: 'A taxi from Terminal 1 to Connaught Place costs approximately ₹450-550, to Noida ₹800-950, and to Gurgaon ₹500-650. Prices start at ₹11/km.' },
                { q: 'Do you wait if my flight is delayed?', a: 'Yes, we track your flight in real-time. If your flight is delayed, our driver adjusts arrival time accordingly. We provide 30 minutes free waiting after actual landing time.' }
              ].map((faq, idx) => (
                <div key={idx} className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg hover:border-sky-200 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-sky-100 to-teal-50 rounded-xl flex items-center justify-center border border-sky-100">
                      <span className="text-sky-600 font-black text-sm">{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">{faq.q}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === Other Terminals === */}
        <section className="relative py-16 px-4">
          <div className="absolute inset-0 bg-white" />
          <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-black text-slate-900 mb-8">Other <span className="text-transparent bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text">Delhi Airport</span> Terminals</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { href: '/airport-service/delhi/igi-terminal-2-domestic', label: 'Terminal 2 (T2)', desc: 'Premium Domestic' },
                { href: '/airport-service/delhi/igi-terminal-3-international', label: 'Terminal 3 (T3)', desc: 'International' },
                { href: '/airport-service/delhi', label: 'Delhi Airport', desc: 'Overview' },
              ].map(link => (
                <Link key={link.href} href={link.href} className="group bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100 hover:border-sky-300 hover:shadow-lg transition-all">
                  <div className="font-bold text-slate-800 group-hover:text-sky-600 transition-colors">{link.label}</div>
                  <div className="text-xs text-slate-400">{link.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* === Related Services Cards === */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-sky-50/50" />
          <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-sky-500 text-sm font-bold tracking-widest uppercase mb-4">Explore More</span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">
                Related <span className="text-transparent bg-gradient-to-r from-sky-500 to-teal-500 bg-clip-text">Services</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { href: '/airport-service/delhi', title: 'Delhi Airport Hub', desc: 'Complete Delhi IGI Airport taxi services for all terminals', icon: Plane },
                { href: '/delhi-to-agra', title: 'Delhi to Agra Cab', desc: 'Book outstation taxi from Delhi to Agra for Taj Mahal visit', icon: Car },
                { href: '/delhi-to-jaipur', title: 'Delhi to Jaipur Cab', desc: 'Comfortable outstation ride from Delhi to Jaipur Pink City', icon: Navigation },
                { href: '/sightseeing/delhi', title: 'Delhi Sightseeing Tour', desc: 'Full-day Delhi city tour covering top monuments and attractions', icon: MapPin },
                { href: '/wedding', title: 'Wedding Car Rental', desc: 'Premium wedding cars including BMW, Audi, and Mercedes fleet', icon: Star },
                { href: '/corporate-transportation-service', title: 'Corporate Cab Service', desc: 'Professional corporate transportation for business travelers', icon: Users },
              ].map((service, idx) => (
                <Link key={idx} href={service.href} className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-lg hover:border-sky-300 hover:-translate-y-1 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-sky-500 mb-3 group-hover:text-teal-500 transition-colors" />
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-sky-600 transition-colors">{service.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* === Contextual In-Content Links === */}
        <section className="relative py-16 px-4">
          <div className="absolute inset-0 bg-sky-50/50" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-sky-100 shadow-sm">
              <h2 className="text-2xl font-black text-slate-900 mb-6">
                Why Choose Triveni Cabs for <span className="text-sky-600">Terminal 1 Pickup</span>
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
                <p>
                  Triveni Cabs provides reliable <Link href="/airport-service/delhi" className="text-sky-600 font-semibold hover:text-teal-600 underline decoration-sky-200 hover:decoration-teal-400 transition-colors">Delhi airport taxi service</Link> with dedicated pickup from IGI Terminal 1. Whether you are flying in on IndiGo or SpiceJet, our drivers are ready at the T1 arrival gate. For passengers connecting to <Link href="/airport-service/delhi/igi-terminal-2-domestic" className="text-sky-600 font-semibold hover:text-teal-600 underline decoration-sky-200 hover:decoration-teal-400 transition-colors">Terminal 2 domestic flights</Link> or <Link href="/airport-service/delhi/igi-terminal-3-international" className="text-sky-600 font-semibold hover:text-teal-600 underline decoration-sky-200 hover:decoration-teal-400 transition-colors">Terminal 3 international departures</Link>, we offer seamless inter-terminal transfers.
                </p>
                <p>
                  After landing at T1, many travelers head to nearby destinations. Our popular <Link href="/delhi-to-agra" className="text-sky-600 font-semibold hover:text-teal-600 underline decoration-sky-200 hover:decoration-teal-400 transition-colors">Delhi to Agra outstation cab</Link> takes you directly to the Taj Mahal in 3-4 hours. Planning a Golden Triangle tour? Book our <Link href="/delhi-to-jaipur" className="text-sky-600 font-semibold hover:text-teal-600 underline decoration-sky-200 hover:decoration-teal-400 transition-colors">Delhi to Jaipur cab service</Link> for a comfortable 5-hour ride. For business travelers heading to Gurgaon, our <Link href="/corporate-transportation-service" className="text-sky-600 font-semibold hover:text-teal-600 underline decoration-sky-200 hover:decoration-teal-400 transition-colors">corporate cab service</Link> ensures professional ground transportation.
                </p>
                <p>
                  Explore the capital with our <Link href="/sightseeing/delhi" className="text-sky-600 font-semibold hover:text-teal-600 underline decoration-sky-200 hover:decoration-teal-400 transition-colors">Delhi sightseeing tour packages</Link> covering India Gate, Red Fort, and Qutub Minar. For spiritual journeys, consider our <Link href="/religious-tours" className="text-sky-600 font-semibold hover:text-teal-600 underline decoration-sky-200 hover:decoration-teal-400 transition-colors">religious tour packages</Link> to destinations like <Link href="/delhi-to-haridwar" className="text-sky-600 font-semibold hover:text-teal-600 underline decoration-sky-200 hover:decoration-teal-400 transition-colors">Haridwar</Link> and <Link href="/delhi-to-rishikesh" className="text-sky-600 font-semibold hover:text-teal-600 underline decoration-sky-200 hover:decoration-teal-400 transition-colors">Rishikesh</Link>. Check our <Link href="/reviews" className="text-sky-600 font-semibold hover:text-teal-600 underline decoration-sky-200 hover:decoration-teal-400 transition-colors">customer reviews</Link> and <Link href="/safety" className="text-sky-600 font-semibold hover:text-teal-600 underline decoration-sky-200 hover:decoration-teal-400 transition-colors">safety standards</Link> for peace of mind, and view <Link href="/pricing" className="text-sky-600 font-semibold hover:text-teal-600 underline decoration-sky-200 hover:decoration-teal-400 transition-colors">transparent pricing</Link> with no hidden charges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* === Popular Links Footer Grid === */}
        <section className="relative py-16 px-4">
          <div className="absolute inset-0 bg-slate-900" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <h2 className="text-2xl font-black text-white mb-10 text-center">
              Popular <span className="text-transparent bg-gradient-to-r from-sky-400 to-teal-400 bg-clip-text">Links</span>
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-sky-400 font-bold text-sm tracking-widest uppercase mb-4">Airport Services</h3>
                <ul className="space-y-2">
                  {[
                    { href: '/airport-service/delhi', label: 'Delhi Airport Taxi' },
                    { href: '/airport-service/delhi/igi-terminal-2-domestic', label: 'Terminal 2 Cab Service' },
                    { href: '/airport-service/delhi/igi-terminal-3-international', label: 'Terminal 3 International Taxi' },
                    { href: '/airport-service/jaipur', label: 'Jaipur Airport Taxi' },
                    { href: '/airport-service/chandigarh', label: 'Chandigarh Airport Cab' },
                    { href: '/airport-service/amritsar', label: 'Amritsar Airport Taxi' },
                    { href: '/airport-service/dehradun', label: 'Dehradun Airport Cab' },
                    { href: '/airport-service/agra', label: 'Agra Airport Taxi' },
                  ].map(link => (
                    <li key={link.href}><Link href={link.href} className="text-slate-400 hover:text-sky-400 text-sm transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sky-400 font-bold text-sm tracking-widest uppercase mb-4">Popular Routes</h3>
                <ul className="space-y-2">
                  {[
                    { href: '/delhi-to-agra', label: 'Delhi to Agra Cab' },
                    { href: '/delhi-to-jaipur', label: 'Delhi to Jaipur Cab' },
                    { href: '/delhi-to-chandigarh', label: 'Delhi to Chandigarh Cab' },
                    { href: '/delhi-to-shimla', label: 'Delhi to Shimla Cab' },
                    { href: '/delhi-to-manali', label: 'Delhi to Manali Cab' },
                    { href: '/delhi-to-haridwar', label: 'Delhi to Haridwar Cab' },
                    { href: '/delhi-to-rishikesh', label: 'Delhi to Rishikesh Cab' },
                    { href: '/delhi-to-dehradun', label: 'Delhi to Dehradun Cab' },
                  ].map(link => (
                    <li key={link.href}><Link href={link.href} className="text-slate-400 hover:text-sky-400 text-sm transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sky-400 font-bold text-sm tracking-widest uppercase mb-4">Popular Cities</h3>
                <ul className="space-y-2">
                  {[
                    { href: '/city/delhi', label: 'Taxi Service in Delhi' },
                    { href: '/city/jaipur', label: 'Taxi Service in Jaipur' },
                    { href: '/city/agra', label: 'Taxi Service in Agra' },
                    { href: '/city/chandigarh', label: 'Taxi Service in Chandigarh' },
                    { href: '/city/shimla', label: 'Taxi Service in Shimla' },
                    { href: '/city/manali', label: 'Taxi Service in Manali' },
                    { href: '/city/haridwar', label: 'Taxi Service in Haridwar' },
                    { href: '/city/varanasi', label: 'Taxi Service in Varanasi' },
                  ].map(link => (
                    <li key={link.href}><Link href={link.href} className="text-slate-400 hover:text-sky-400 text-sm transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sky-400 font-bold text-sm tracking-widest uppercase mb-4">More Services</h3>
                <ul className="space-y-2">
                  {[
                    { href: '/sightseeing/delhi', label: 'Delhi Sightseeing Tour' },
                    { href: '/sightseeing/agra', label: 'Agra Sightseeing Tour' },
                    { href: '/wedding', label: 'Wedding Car Rental' },
                    { href: '/corporate-transportation-service', label: 'Corporate Cab Service' },
                    { href: '/religious-tours', label: 'Religious Tour Packages' },
                    { href: '/tour-package', label: 'Road Trip Packages' },
                    { href: '/tempo-traveller', label: 'Tempo Traveller Rental' },
                    { href: '/contact', label: 'Contact Triveni Cabs' },
                  ].map(link => (
                    <li key={link.href}><Link href={link.href} className="text-slate-400 hover:text-sky-400 text-sm transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* === CTA: Bright Aviation Banner === */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500 via-teal-500 to-cyan-500" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.2),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.1),transparent_50%)]" />

          <div className="absolute top-8 right-[10%] opacity-10">
            <Plane className="w-24 h-24 text-white rotate-45" />
          </div>

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-8">
              <Plane className="w-4 h-4 text-white" />
              <span className="text-white/90 font-bold text-sm tracking-wider uppercase">Starting ₹11/km</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Book Terminal 1<br />Taxi Now
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">Reliable pickup from T1 domestic terminal. Real-time flight tracking included.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-3 bg-white text-sky-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-black/15 hover:scale-[1.02] transition-all">
                <Phone className="w-5 h-5" /> Call +91 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=Need taxi from Delhi Airport Terminal 1" className="inline-flex items-center justify-center gap-3 bg-green-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-black/15 hover:scale-[1.02] transition-all">
                WhatsApp
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <Link href="/safety" className="text-white/70 hover:text-white text-sm font-medium underline decoration-white/30 hover:decoration-white transition-colors">Verified Safe Rides</Link>
              <Link href="/pricing" className="text-white/70 hover:text-white text-sm font-medium underline decoration-white/30 hover:decoration-white transition-colors">Transparent Pricing</Link>
              <Link href="/reviews" className="text-white/70 hover:text-white text-sm font-medium underline decoration-white/30 hover:decoration-white transition-colors">5-Star Customer Reviews</Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
