import Link from 'next/link';
import {
  Phone, ChevronRight, CheckCircle2, ArrowRight, Shield, Clock,
  Car, MapPin, Star, Navigation, Plane, Globe, Crown, Luggage
} from '@/components/ui/icons';

export const revalidate = 3600;

export const metadata = {
  title: 'IGI Airport Terminal 3 International Taxi | T3 Cab ₹11/km',
  description: 'Book taxi from Delhi Airport Terminal 3 (T3). International flights pickup. Emirates, Lufthansa, Singapore Airlines. Meet & greet. Starting ₹11/km. Call 7668570551.',
  alternates: { canonical: 'https://www.trivenicabs.in/airport-service/delhi/igi-terminal-3-international' },
  openGraph: {
    title: 'Delhi Airport Terminal 3 Taxi | International T3 Cab 24/7',
    description: 'Delhi Airport Terminal 3 international taxi service. All major airline flights. Book now!',
    type: 'website', locale: 'en_IN', siteName: 'Triveni Cabs',
    images: [{ url: '/images/airport_section.jpg', width: 1200, height: 630, alt: 'Delhi Airport Terminal 3 International Taxi' }]
  },
  keywords: 'delhi airport terminal 3 taxi, T3 delhi airport cab, terminal 3 IGI airport taxi, international terminal delhi taxi, T3 international flight pickup, emirates terminal delhi taxi, T3 cab booking, delhi T3 to hotel taxi',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function DelhiTerminal3Page() {
  const terminalData = {
    terminal: 'Terminal 3 (T3)',
    type: 'International & Premium Domestic Terminal',
    airlines: [
      'Emirates', 'Lufthansa', 'Singapore Airlines', 'British Airways',
      'Thai Airways', 'Air India (International)', 'Vistara (Select International)',
      'Qatar Airways', 'Etihad Airways', 'Turkish Airlines', 'Air France'
    ],
    pickupPoint: 'International Arrival, Ground Floor, Gate 4-8, Near Pillar 20-28',
    parkingArea: 'Multi-level parking P3, Level 1-5 (covered)',
    meetingPoint: 'Outside International Arrival Hall, near Forex Counter and Starbucks',
    distance: '18 km from Connaught Place',
    features: [
      'International arrival gate pickup',
      'Nameboard meet & greet with passenger name',
      'Free 45-minute waiting for international flights',
      'Real-time international flight tracking',
      'Luggage trolley assistance',
      'Multi-language driver support (English/Hindi)',
      'Currency exchange guidance available',
      'Hotel booking assistance on request'
    ],
    pricing: [
      { destination: 'Connaught Place', distance: '18 km', fare: '₹500-650', time: '35-55 min' },
      { destination: 'Aerocity Hotels', distance: '3 km', fare: '₹200-300', time: '10 min' },
      { destination: 'Noida Sector 18', distance: '35 km', fare: '₹900-1100', time: '60-80 min' },
      { destination: 'Gurgaon Cyber City', distance: '16 km', fare: '₹500-600', time: '25-40 min' },
      { destination: 'Paharganj (Budget Hotels)', distance: '16 km', fare: '₹450-550', time: '35-50 min' },
      { destination: 'Agra (Taj Mahal)', distance: '230 km', fare: '₹3500-4000', time: '3-4 hours' },
      { destination: 'Jaipur', distance: '280 km', fare: '₹4000-4500', time: '5 hours' }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "International Airport Transfer Service",
    "name": "Delhi Airport Terminal 3 International Taxi Service",
    "description": "Premium taxi service from Delhi Airport Terminal 3 (T3) - International Terminal. Emirates, Lufthansa, Singapore Airlines, British Airways flights.",
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
    "areaServed": { "@type": "City", "name": "Delhi" },
    "offers": { "@type": "Offer", "price": "11", "priceCurrency": "INR" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Airport Service", "item": "https://www.trivenicabs.in/airport-service" },
      { "@type": "ListItem", "position": 3, "name": "Delhi", "item": "https://www.trivenicabs.in/airport-service/delhi" },
      { "@type": "ListItem", "position": 4, "name": "IGI Terminal 3 International", "item": "https://www.trivenicabs.in/airport-service/delhi/igi-terminal-3-international" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Where exactly does the driver meet me at Terminal 3?", "acceptedAnswer": { "@type": "Answer", "text": "After clearing immigration and customs at T3 International Arrival, exit through Gate 4-8. Our driver will be waiting outside the arrival hall near the Forex Counter/Starbucks with a nameboard showing your name." } },
      { "@type": "Question", "name": "Which international airlines fly into Terminal 3?", "acceptedAnswer": { "@type": "Answer", "text": "Terminal 3 handles all major international airlines including Emirates, Lufthansa, Singapore Airlines, British Airways, Thai Airways, Qatar Airways, Etihad, Turkish Airlines, Air France, and Air India international flights." } },
      { "@type": "Question", "name": "How long do you wait for international flights?", "acceptedAnswer": { "@type": "Answer", "text": "We provide 45 minutes free waiting time for international flights after actual landing, accounting for immigration and customs clearance. Our team tracks your flight in real-time and adjusts for delays." } },
      { "@type": "Question", "name": "Can I book a taxi from T3 to Agra same day?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Many international tourists book our taxi from Terminal 3 directly to Agra for the Taj Mahal. The journey takes 3-4 hours. We also offer Delhi-Agra day tour packages starting from the airport." } }
    ]
  };

  const premiumFeatures = [
    { icon: Globe, label: 'International Arrivals', desc: 'All major world airlines' },
    { icon: Clock, label: '45 Min Free Wait', desc: 'For customs & immigration' },
    { icon: Crown, label: 'Premium Service', desc: 'First-class ground transport' },
    { icon: Shield, label: 'Flight Tracking', desc: 'Real-time delay monitoring' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[#030712]">

        {/* === HERO: International Luxury Lounge Theme === */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0C0A1A] via-[#030712] to-[#0A0F1F]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(234,179,8,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.06),transparent_50%)]" />

          {/* Gold accent line at top */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

          {/* Globe/world map pattern effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Meridian-like arcs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-amber-500/[0.03] rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] border border-amber-500/[0.03] rounded-full rotate-12" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] border border-amber-500/[0.02] rounded-full -rotate-12" />
            {/* Large globe icon */}
            <div className="absolute top-[8%] right-[5%] opacity-[0.03]">
              <Globe className="w-56 h-56 text-amber-400" />
            </div>
            <div className="absolute bottom-[10%] left-[3%] opacity-[0.02]">
              <Plane className="w-44 h-44 text-amber-400 rotate-45" />
            </div>
            {/* Subtle golden bokeh */}
            <div className="absolute top-[20%] right-[15%] w-32 h-32 bg-amber-500/[0.04] rounded-full blur-[60px]" />
            <div className="absolute bottom-[25%] left-[10%] w-40 h-40 bg-purple-500/[0.03] rounded-full blur-[70px]" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10">
              <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/airport-service" className="hover:text-amber-400 transition-colors">Airport Service</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/airport-service/delhi" className="hover:text-amber-400 transition-colors">Delhi</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-amber-400 font-medium">IGI Terminal 3 International</span>
            </nav>

            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Left: Content - spans 3 */}
              <div className="lg:col-span-3">
                {/* Terminal badge - passport stamp style */}
                <div className="inline-flex items-center gap-4 bg-amber-500/[0.08] border border-amber-500/20 backdrop-blur-sm px-6 py-3 rounded-xl mb-8">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/20">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <div className="border-l border-amber-500/20 pl-4">
                    <div className="text-[10px] font-bold text-amber-400/80 tracking-widest uppercase">Terminal</div>
                    <div className="text-2xl font-black text-amber-300 leading-none">T3</div>
                  </div>
                  <div className="border-l border-amber-500/20 pl-4">
                    <div className="text-[10px] font-bold text-amber-400/80 tracking-widest uppercase">Class</div>
                    <div className="text-sm font-bold text-white leading-none">International</div>
                  </div>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[0.9] mb-8">
                  <span className="block text-transparent bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 bg-clip-text">Terminal 3</span>
                  <span className="block text-white/90 mt-2">International Taxi</span>
                  <span className="block text-2xl md:text-3xl font-medium text-slate-500 mt-4">Delhi Indira Gandhi Airport</span>
                </h1>

                <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
                  Emirates, Lufthansa, Singapore Airlines, British Airways. Premium international pickup with 45 min free waiting. Starting ₹11/km.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="tel:+917668570551" className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-900 px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all duration-300">
                    <Phone className="w-5 h-5" /> Book T3 Premium Pickup
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="https://wa.me/917668570551?text=I need taxi from Delhi Airport Terminal 3 International" className="inline-flex items-center justify-center gap-3 bg-white/[0.04] backdrop-blur-sm text-white px-8 py-5 rounded-2xl font-bold text-lg border border-white/[0.08] hover:border-amber-500/30 hover:bg-white/[0.08] transition-all">
                    WhatsApp
                  </Link>
                </div>
              </div>

              {/* Right: Premium feature cards + pickup info */}
              <div className="lg:col-span-2 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {premiumFeatures.map((item, idx) => (
                    <div key={idx} className="group bg-white/[0.03] backdrop-blur-sm rounded-2xl p-5 border border-white/[0.06] hover:border-amber-500/20 hover:bg-white/[0.05] transition-all duration-300">
                      <item.icon className="w-7 h-7 text-amber-400/70 mb-3 group-hover:text-amber-400 transition-colors" />
                      <div className="text-sm font-bold text-white mb-0.5">{item.label}</div>
                      <div className="text-xs text-slate-500">{item.desc}</div>
                    </div>
                  ))}
                </div>

                {/* Pickup info */}
                <div className="bg-gradient-to-br from-amber-500/[0.06] to-white/[0.02] rounded-2xl p-6 border border-amber-500/15">
                  <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-amber-400" /> T3 International Pickup
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div><span className="text-amber-400 font-semibold">Gate:</span> <span className="text-slate-300">{terminalData.pickupPoint}</span></div>
                    <div><span className="text-amber-400 font-semibold">Meet:</span> <span className="text-slate-300">{terminalData.meetingPoint}</span></div>
                    <div><span className="text-amber-400 font-semibold">Wait:</span> <span className="text-slate-300">45 min free after landing</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === OVERVIEW: SEO prose content section === */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-[#060B18]" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-8 text-transparent bg-gradient-to-r from-amber-300 to-yellow-400 bg-clip-text">
              IGI Airport Terminal 3 International — Premium Airport Transfer
            </h2>
            <div className="space-y-5 text-slate-400 text-lg leading-relaxed">
              <p>Arriving on an international flight to <strong className="text-white">Delhi IGI Airport Terminal 3</strong>? T3 is India&apos;s largest and most modern international terminal, handling world-class airlines including Emirates, Lufthansa, Singapore Airlines, British Airways, Qatar Airways, Etihad, Turkish Airlines, Air France, and Air India international. After a long-haul flight, the last thing you want is to navigate Delhi&apos;s chaotic airport taxi queues — that is where Triveni Cabs steps in.</p>
              <p>Our <strong className="text-white">T3 international airport transfer</strong> includes 45 minutes of free waiting time (versus 30 minutes for domestic terminals), accounting for the extra time international passengers spend clearing immigration and customs. Your driver tracks your flight in real-time, arrives at the T3 International Arrival exit near Gate 4-8, and holds a nameboard with your name — just like the premium hotel transfer services, but at a fraction of the cost.</p>
              <p>International tourists frequently book our <strong className="text-white">Terminal 3 taxi service</strong> for direct transfers to Agra (Taj Mahal, 3-4 hours), Jaipur (Pink City, 5 hours), or Aerocity hotels (10 minutes). We also offer multi-day Golden Triangle packages starting directly from the airport. Our drivers are English-speaking, trained in tourist hospitality, and can assist with currency exchange guidance and hotel recommendations. Starting at ₹11/km with transparent pricing — no surge, no hidden charges.</p>
            </div>
          </div>
        </section>

        {/* === Airlines - World-Class Airline Board === */}
        <section className="relative py-16 px-4">
          <div className="absolute inset-0 bg-[#060B18]" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-black text-white flex items-center justify-center gap-3">
                <Globe className="w-6 h-6 text-amber-400" /> International Airlines at Terminal 3
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {terminalData.airlines.map((airline, idx) => (
                <div key={idx} className={`group relative overflow-hidden rounded-xl p-4 border transition-all duration-300 hover:-translate-y-0.5 ${
                  idx < 4 ? 'bg-amber-500/[0.06] border-amber-500/15 hover:border-amber-400/30' :
                  'bg-white/[0.03] border-white/[0.06] hover:border-amber-500/20'
                }`}>
                  <div className="flex items-center gap-3">
                    <Plane className={`w-4 h-4 ${idx < 4 ? 'text-amber-400' : 'text-slate-500 group-hover:text-amber-400'} transition-colors`} />
                    <span className="text-white font-semibold text-sm">{airline}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === Features - Gold-Accented Luxury === */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-[#030712]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(234,179,8,0.03),transparent_60%)]" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-amber-400 text-sm font-bold tracking-widest uppercase mb-4">World-Class Service</span>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Terminal 3 <span className="text-transparent bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-300 bg-clip-text">International Features</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {terminalData.features.map((feature, idx) => (
                <div key={idx} className="group relative overflow-hidden bg-white/[0.02] rounded-2xl p-5 border border-white/[0.05] hover:border-amber-500/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute -top-3 -right-3 w-16 h-16 bg-amber-500/[0.06] rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center border border-amber-500/15 group-hover:bg-amber-500 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-slate-300 text-sm font-medium leading-relaxed">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === Pricing - Gold Luxury Fare Board === */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712] via-[#0C0A1A] to-[#030712]" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-amber-400 text-sm font-bold tracking-widest uppercase mb-4">Fare Guide</span>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Terminal 3 <span className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text">Fare Estimates</span>
              </h2>
              <p className="text-slate-500 mt-3">Transparent pricing. No hidden charges. Tourist-friendly rates.</p>
            </div>

            <div className="bg-white/[0.03] rounded-3xl border border-amber-500/10 overflow-hidden">
              <div className="grid grid-cols-4 bg-amber-500/[0.08] px-6 py-4 border-b border-amber-500/10">
                <span className="text-amber-400 font-bold text-sm tracking-wider uppercase">Destination</span>
                <span className="text-amber-400 font-bold text-sm tracking-wider uppercase">Distance</span>
                <span className="text-amber-400 font-bold text-sm tracking-wider uppercase">Fare</span>
                <span className="text-amber-400 font-bold text-sm tracking-wider uppercase">Time</span>
              </div>
              {terminalData.pricing.map((route, idx) => (
                <div key={idx} className="grid grid-cols-4 px-6 py-4 border-b border-white/[0.03] hover:bg-amber-500/[0.03] transition-colors group">
                  <span className="font-semibold text-white group-hover:text-amber-300 transition-colors">{route.destination}</span>
                  <span className="text-slate-400 font-mono text-sm">{route.distance}</span>
                  <span className="text-amber-400 font-bold font-mono">{route.fare}</span>
                  <span className="text-slate-400 text-sm">{route.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === Tourist Routes - Gold Cards === */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-[#030712]" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-amber-400 text-sm font-bold tracking-widest uppercase mb-4">For Tourists</span>
              <h2 className="text-3xl md:text-4xl font-black text-white">
                Popular Routes from <span className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text">Terminal 3</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { dest: 'Agra (Taj Mahal)', desc: 'Same day tour or overnight. 3-4 hours drive. The iconic Wonder of the World.', icon: Star },
                { dest: 'Jaipur (Pink City)', desc: 'Golden Triangle tour start. 5 hours drive. Forts, palaces, and culture.', icon: Crown },
                { dest: 'Aerocity Hotels', desc: 'Just 10 minutes from T3. Premium 5-star hotels within walking distance.', icon: MapPin },
              ].map((route, idx) => (
                <div key={idx} className="group relative overflow-hidden bg-gradient-to-br from-amber-500/[0.06] to-white/[0.02] rounded-3xl p-8 border border-amber-500/15 hover:border-amber-400/30 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-amber-500/10 to-transparent rounded-bl-full" />
                  <route.icon className="w-8 h-8 text-amber-400 mb-4" />
                  <h3 className="font-black text-white text-xl mb-2">{route.dest}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">{route.desc}</p>
                  <Link href="tel:+917668570551" className="inline-flex items-center gap-2 text-amber-400 font-bold text-sm hover:text-amber-300 transition-colors">
                    Book Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === FAQ - Elegant Dark Cards === */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-[#030712]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.03),transparent_50%)]" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-amber-400 text-sm font-bold tracking-widest uppercase mb-4">Traveler Help</span>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Terminal 3 <span className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text">FAQs</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { q: 'Where exactly does the driver meet me at Terminal 3?', a: 'After clearing immigration and customs at T3, exit through Gate 4-8. Our driver waits outside the arrival hall near the Forex Counter/Starbucks with a nameboard showing your name.' },
                { q: 'Which international airlines fly into Terminal 3?', a: 'T3 handles all major international airlines: Emirates, Lufthansa, Singapore Airlines, British Airways, Thai Airways, Qatar Airways, Etihad, Turkish Airlines, Air France, and Air India international.' },
                { q: 'How long do you wait for international flights?', a: 'We provide 45 minutes free waiting after actual landing for international flights, accounting for immigration and customs. We track flights in real-time and adjust for delays.' },
                { q: 'Can I book a taxi from T3 to Agra same day?', a: 'Yes! Many tourists book our taxi from T3 directly to Agra for the Taj Mahal (3-4 hours). We also offer Delhi-Agra day tour packages starting from the airport.' }
              ].map((faq, idx) => (
                <div key={idx} className="group relative overflow-hidden bg-white/[0.02] rounded-2xl border border-white/[0.04] hover:border-amber-500/20 transition-all duration-300">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-amber-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="p-8 pl-10">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-12 h-12 bg-amber-500/10 rounded-2xl flex items-center justify-center border border-amber-500/15">
                        <span className="text-amber-400 font-black text-lg">{String(idx + 1).padStart(2, '0')}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">{faq.q}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === Other Terminals === */}
        <section className="relative py-16 px-4">
          <div className="absolute inset-0 bg-[#030712]" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-black text-white mb-8">Other <span className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text">Delhi Airport</span> Terminals</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { href: '/airport-service/delhi/igi-terminal-1-domestic', label: 'Terminal 1 (T1)', desc: 'Budget Domestic' },
                { href: '/airport-service/delhi/igi-terminal-2-domestic', label: 'Terminal 2 (T2)', desc: 'Premium Domestic' },
                { href: '/airport-service/delhi', label: 'Delhi Airport', desc: 'Overview' },
              ].map(link => (
                <Link key={link.href} href={link.href} className="group bg-white/[0.03] px-6 py-4 rounded-2xl border border-white/[0.06] hover:border-amber-500/20 hover:bg-white/[0.05] transition-all">
                  <div className="font-bold text-white group-hover:text-amber-400 transition-colors">{link.label}</div>
                  <div className="text-xs text-slate-500">{link.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* === Related Services Cards === */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-[#030712]" />
          <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-amber-400 text-sm font-bold tracking-widest uppercase mb-4">Explore More</span>
              <h2 className="text-3xl md:text-4xl font-black text-white">
                Related <span className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text">Services</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { href: '/airport-service/delhi', title: 'Delhi Airport Hub', desc: 'Complete Delhi IGI Airport taxi services for all terminals', icon: Plane },
                { href: '/delhi-to-agra', title: 'Delhi to Agra Cab', desc: 'Direct outstation taxi from airport to Agra Taj Mahal', icon: Car },
                { href: '/delhi-to-jaipur', title: 'Delhi to Jaipur Cab', desc: 'Golden Triangle first stop - comfortable ride to Jaipur', icon: Navigation },
                { href: '/sightseeing-tour/delhi', title: 'Delhi Sightseeing Tour', desc: 'Full-day Delhi tour for international tourists and visitors', icon: MapPin },
                { href: '/sightseeing-tour/agra', title: 'Agra Sightseeing Tour', desc: 'Same-day Taj Mahal tour package from Delhi airport', icon: Star },
                { href: '/corporate-cab-service', title: 'Corporate Cab Service', desc: 'Executive ground transport for business travelers', icon: Crown },
              ].map((service, idx) => (
                <Link key={idx} href={service.href} className="group bg-white/[0.03] rounded-2xl p-6 border border-white/[0.05] hover:border-amber-500/25 hover:bg-amber-500/[0.04] hover:-translate-y-1 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-amber-400 mb-3 group-hover:text-yellow-400 transition-colors" />
                  <h3 className="font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">{service.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* === Contextual In-Content Links === */}
        <section className="relative py-16 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-[#030712] to-[#0C0A1A]" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="bg-white/[0.03] backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-amber-500/10">
              <h2 className="text-2xl font-black text-white mb-6">
                Why International Travelers Choose <span className="text-amber-400">Triveni Cabs at T3</span>
              </h2>
              <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed space-y-4">
                <p>
                  Triveni Cabs is the trusted <Link href="/airport-service/delhi" className="text-amber-400 font-semibold hover:text-yellow-400 underline decoration-amber-500/30 hover:decoration-yellow-400 transition-colors">Delhi airport taxi provider</Link> with premium pickup from IGI Terminal 3 International. Whether you arrive on Emirates, Lufthansa, or Singapore Airlines, our English-speaking drivers greet you at the arrival hall with a personalized nameboard. For domestic connections at <Link href="/airport-service/delhi/igi-terminal-1-domestic" className="text-amber-400 font-semibold hover:text-yellow-400 underline decoration-amber-500/30 hover:decoration-yellow-400 transition-colors">Terminal 1</Link> or <Link href="/airport-service/delhi/igi-terminal-2-domestic" className="text-amber-400 font-semibold hover:text-yellow-400 underline decoration-amber-500/30 hover:decoration-yellow-400 transition-colors">Terminal 2</Link>, we provide seamless inter-terminal transfers.
                </p>
                <p>
                  Most international visitors head straight from T3 to the Taj Mahal. Our <Link href="/delhi-to-agra" className="text-amber-400 font-semibold hover:text-yellow-400 underline decoration-amber-500/30 hover:decoration-yellow-400 transition-colors">Delhi to Agra cab service</Link> is the most popular airport transfer route, while the <Link href="/delhi-to-jaipur" className="text-amber-400 font-semibold hover:text-yellow-400 underline decoration-amber-500/30 hover:decoration-yellow-400 transition-colors">Delhi to Jaipur cab</Link> kicks off the famous Golden Triangle circuit. For a quick city overview, book our <Link href="/sightseeing-tour/delhi" className="text-amber-400 font-semibold hover:text-yellow-400 underline decoration-amber-500/30 hover:decoration-yellow-400 transition-colors">Delhi sightseeing tour</Link> covering India Gate, Red Fort, Humayun&apos;s Tomb, and Qutub Minar.
                </p>
                <p>
                  Adventure seekers can arrange our <Link href="/delhi-to-shimla" className="text-amber-400 font-semibold hover:text-yellow-400 underline decoration-amber-500/30 hover:decoration-yellow-400 transition-colors">Delhi to Shimla cab</Link> for a Himalayan hill station experience or the <Link href="/delhi-to-rishikesh" className="text-amber-400 font-semibold hover:text-yellow-400 underline decoration-amber-500/30 hover:decoration-yellow-400 transition-colors">Delhi to Rishikesh cab</Link> for yoga and adventure. We also serve <Link href="/airport-service/jaipur" className="text-amber-400 font-semibold hover:text-yellow-400 underline decoration-amber-500/30 hover:decoration-yellow-400 transition-colors">Jaipur airport</Link>, <Link href="/airport-service/chandigarh" className="text-amber-400 font-semibold hover:text-yellow-400 underline decoration-amber-500/30 hover:decoration-yellow-400 transition-colors">Chandigarh airport</Link>, and <Link href="/airport-service/amritsar" className="text-amber-400 font-semibold hover:text-yellow-400 underline decoration-amber-500/30 hover:decoration-yellow-400 transition-colors">Amritsar airport</Link>. Check our <Link href="/reviews" className="text-amber-400 font-semibold hover:text-yellow-400 underline decoration-amber-500/30 hover:decoration-yellow-400 transition-colors">traveler reviews</Link>, <Link href="/safety" className="text-amber-400 font-semibold hover:text-yellow-400 underline decoration-amber-500/30 hover:decoration-yellow-400 transition-colors">safety standards</Link>, and <Link href="/pricing" className="text-amber-400 font-semibold hover:text-yellow-400 underline decoration-amber-500/30 hover:decoration-yellow-400 transition-colors">transparent pricing</Link> before booking.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* === Popular Links Footer Grid === */}
        <section className="relative py-16 px-4">
          <div className="absolute inset-0 bg-[#060B18]" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <h2 className="text-2xl font-black text-white mb-10 text-center">
              Popular <span className="text-transparent bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text">Links</span>
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-amber-400 font-bold text-sm tracking-widest uppercase mb-4">Airport Services</h3>
                <ul className="space-y-2">
                  {[
                    { href: '/airport-service/delhi', label: 'Delhi Airport Taxi' },
                    { href: '/airport-service/delhi/igi-terminal-1-domestic', label: 'Terminal 1 Domestic Cab' },
                    { href: '/airport-service/delhi/igi-terminal-2-domestic', label: 'Terminal 2 Premium Cab' },
                    { href: '/airport-service/jaipur', label: 'Jaipur Airport Taxi' },
                    { href: '/airport-service/chandigarh', label: 'Chandigarh Airport Cab' },
                    { href: '/airport-service/amritsar', label: 'Amritsar Airport Taxi' },
                    { href: '/airport-service/dehradun', label: 'Dehradun Airport Cab' },
                    { href: '/airport-service/agra', label: 'Agra Airport Taxi' },
                  ].map(link => (
                    <li key={link.href}><Link href={link.href} className="text-slate-500 hover:text-amber-400 text-sm transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-amber-400 font-bold text-sm tracking-widest uppercase mb-4">Popular Routes</h3>
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
                    <li key={link.href}><Link href={link.href} className="text-slate-500 hover:text-amber-400 text-sm transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-amber-400 font-bold text-sm tracking-widest uppercase mb-4">Popular Cities</h3>
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
                    <li key={link.href}><Link href={link.href} className="text-slate-500 hover:text-amber-400 text-sm transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-amber-400 font-bold text-sm tracking-widest uppercase mb-4">More Services</h3>
                <ul className="space-y-2">
                  {[
                    { href: '/sightseeing-tour/delhi', label: 'Delhi Sightseeing Tour' },
                    { href: '/sightseeing-tour/agra', label: 'Agra Sightseeing Tour' },
                    { href: '/wedding', label: 'Wedding Car Rental' },
                    { href: '/corporate-cab-service', label: 'Corporate Cab Service' },
                    { href: '/religious-tour', label: 'Religious Tour Packages' },
                    { href: '/road-trip', label: 'Road Trip Packages' },
                    { href: '/tempo-traveller', label: 'Tempo Traveller Rental' },
                    { href: '/contact', label: 'Contact Triveni Cabs' },
                  ].map(link => (
                    <li key={link.href}><Link href={link.href} className="text-slate-500 hover:text-amber-400 text-sm transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* === CTA: Gold International Luxury Banner === */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-600 via-yellow-600 to-amber-700" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.2),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.2),transparent_50%)]" />

          <div className="absolute top-8 right-[10%] opacity-10">
            <Globe className="w-24 h-24 text-white" />
          </div>
          <div className="absolute bottom-8 left-[10%] opacity-10">
            <Plane className="w-20 h-20 text-white rotate-45" />
          </div>

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-10 h-px bg-white/40" />
              <span className="text-white/90 font-bold text-sm tracking-[0.3em] uppercase">International Terminal</span>
              <div className="w-10 h-px bg-white/40" />
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Book Terminal 3<br />International Taxi
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">Premium pickup for international travelers. 45 min free waiting. Multi-language support.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-3 bg-slate-900 text-amber-400 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-black/30 hover:scale-[1.02] transition-all">
                <Phone className="w-5 h-5" /> Call +91 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=Need taxi from Delhi Airport Terminal 3 International" className="inline-flex items-center justify-center gap-3 bg-green-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-black/20 hover:scale-[1.02] transition-all">
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
