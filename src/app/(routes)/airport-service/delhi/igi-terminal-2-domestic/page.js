import Link from 'next/link';
import {
  Phone, ChevronRight, CheckCircle2, ArrowRight, Shield, Clock,
  Car, MapPin, Star, Navigation, Plane, Users
} from '@/components/ui/icons';

export const revalidate = 3600;

export const metadata = {
  title: 'IGI Airport Terminal 2 Domestic Taxi | T2 Cab Pickup ₹11/km',
  description: 'Book taxi from Delhi Airport Terminal 2 (T2). Domestic-international terminal. Vistara, Air India flights. Meet & greet. Starting ₹11/km. Call 7668570551.',
  alternates: { canonical: 'https://www.trivenicabs.in/airport-service/delhi/igi-terminal-2-domestic' },
  openGraph: {
    title: 'Delhi Airport Terminal 2 Taxi | T2 Cab Service 24/7',
    description: 'Delhi Airport Terminal 2 taxi service. Vistara, Air India domestic pickup. Book now!',
    type: 'website', locale: 'en_IN', siteName: 'Triveni Cabs',
    images: [{ url: '/images/airport_section.jpg', width: 1200, height: 630, alt: 'Delhi Airport Terminal 2 Taxi' }]
  },
  keywords: 'delhi airport terminal 2 taxi, T2 delhi airport cab, terminal 2 IGI airport taxi, vistara terminal taxi delhi, air india domestic terminal taxi, T2 pickup taxi delhi, terminal 2 cab booking',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function DelhiTerminal2Page() {
  const terminalData = {
    terminal: 'Terminal 2 (T2)',
    type: 'Domestic & Select International Terminal',
    airlines: ['Vistara (Domestic)', 'Air India (Domestic)', 'Alliance Air', 'AirAsia India (Select)', 'Some International Charters'],
    pickupPoint: 'Arrival Gate, Ground Floor, Pillar No. 12-16',
    parkingArea: 'Multi-level parking complex, Level 1-2',
    meetingPoint: 'Outside Arrival Hall, near Taxi Stand Area',
    distance: '16 km from Connaught Place',
    features: [
      'Dedicated pickup at T2 Arrival Gate',
      'Nameboard meet & greet service',
      'Free 30-minute waiting after landing',
      'Real-time flight tracking',
      'Luggage assistance included',
      '24/7 service for all flights'
    ],
    pricing: [
      { destination: 'Connaught Place', distance: '16 km', fare: '₹450-600', time: '35-50 min' },
      { destination: 'Noida Sector 18', distance: '33 km', fare: '₹850-1000', time: '55-75 min' },
      { destination: 'Gurgaon Cyber City', distance: '17 km', fare: '₹500-650', time: '25-40 min' },
      { destination: 'India Gate', distance: '18 km', fare: '₹500-600', time: '35-50 min' },
      { destination: 'Karol Bagh', distance: '14 km', fare: '₹400-500', time: '30-45 min' },
      { destination: 'Jaipur (Outstation)', distance: '280 km', fare: '₹4000-4500', time: '5 hours' }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Airport Transfer Service",
    "name": "Delhi Airport Terminal 2 Taxi Service",
    "description": "Professional taxi service from Delhi Airport Terminal 2 (T2). Vistara, Air India domestic flights pickup.",
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
      { "@type": "ListItem", "position": 4, "name": "IGI Terminal 2 Domestic", "item": "https://www.trivenicabs.in/airport-service/delhi/igi-terminal-2-domestic" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Where is the pickup point at Delhi Airport Terminal 2?", "acceptedAnswer": { "@type": "Answer", "text": "Our drivers wait at the T2 Arrival Gate exit on the Ground Floor, near Pillar No. 12-16, close to the Taxi Stand Area. Your driver will hold a nameboard with your name." } },
      { "@type": "Question", "name": "Which airlines operate from Terminal 2?", "acceptedAnswer": { "@type": "Answer", "text": "Terminal 2 primarily handles Vistara domestic flights, Air India domestic flights, Alliance Air, and select AirAsia India flights. Some international charter flights also operate from T2." } },
      { "@type": "Question", "name": "Is Terminal 2 far from Terminal 3?", "acceptedAnswer": { "@type": "Answer", "text": "Terminal 2 is located near Terminal 3 and is connected via the airport shuttle. If you have a connecting international flight from T3, we can provide inter-terminal transfer service." } },
      { "@type": "Question", "name": "How do I know if my flight is from Terminal 2?", "acceptedAnswer": { "@type": "Answer", "text": "Check your airline ticket or booking confirmation for terminal information. Vistara and Air India domestic flights typically operate from T2. You can also check the Delhi Airport website for real-time terminal information." } }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-slate-950">

        {/* === HERO: Control Tower / Premium Indigo Theme === */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-slate-950 to-violet-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.12),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.08),transparent_50%)]" />

          {/* Radar sweep effect - concentric circles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-indigo-500/[0.04] rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] border border-indigo-500/[0.03] rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] border border-indigo-500/[0.02] rounded-full" />
            {/* Decorative */}
            <div className="absolute top-[8%] right-[6%] opacity-[0.04]">
              <Plane className="w-40 h-40 text-indigo-400 -rotate-45" />
            </div>
          </div>

          {/* Top accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10">
              <Link href="/" className="hover:text-indigo-400 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/airport-service" className="hover:text-indigo-400 transition-colors">Airport Service</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/airport-service/delhi" className="hover:text-indigo-400 transition-colors">Delhi</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-indigo-400 font-medium">IGI Terminal 2 Domestic</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                {/* Terminal badge - elegant */}
                <div className="inline-flex items-center gap-3 bg-indigo-500/10 border border-indigo-500/20 backdrop-blur-sm px-6 py-3 rounded-xl mb-8">
                  <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-violet-500 rounded-lg flex items-center justify-center">
                    <Plane className="w-4 h-4 text-white" />
                  </div>
                  <div className="border-l border-indigo-500/20 pl-3">
                    <div className="text-[10px] font-bold text-indigo-400 tracking-widest uppercase">Terminal</div>
                    <div className="text-xl font-black text-white leading-none">T2</div>
                  </div>
                  <div className="border-l border-indigo-500/20 pl-3">
                    <div className="text-[10px] font-bold text-indigo-400 tracking-widest uppercase">Class</div>
                    <div className="text-sm font-bold text-slate-300 leading-none">Premium Domestic</div>
                  </div>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[0.95] mb-6">
                  Delhi Airport
                  <span className="block text-transparent bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text">Terminal 2 Taxi</span>
                </h1>

                <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
                  Vistara, Air India domestic flights. Professional pickup from T2 Arrival Gate. Starting ₹11/km.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="tel:+917668570551" className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] transition-all duration-300">
                    <Phone className="w-5 h-5" /> Book T2 Pickup
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="https://wa.me/917668570551?text=I need taxi from Delhi Airport Terminal 2" className="inline-flex items-center justify-center gap-3 bg-white/[0.04] backdrop-blur-sm text-white px-8 py-5 rounded-2xl font-bold text-lg border border-white/[0.08] hover:border-indigo-500/30 hover:bg-white/[0.08] transition-all">
                    WhatsApp
                  </Link>
                </div>
              </div>

              {/* Right: Pickup info card - glassmorphism */}
              <div className="bg-white/[0.04] backdrop-blur-sm rounded-3xl p-8 border border-white/[0.08]">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-indigo-400" /> T2 Pickup Details
                </h3>
                <div className="space-y-5">
                  {[
                    { label: 'Pickup Point', value: terminalData.pickupPoint },
                    { label: 'Meeting Point', value: terminalData.meetingPoint },
                    { label: 'Parking', value: terminalData.parkingArea },
                    { label: 'Distance to City', value: terminalData.distance },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-2 h-2 bg-indigo-400 rounded-full mt-2" />
                      <div>
                        <div className="text-indigo-400 font-semibold text-sm">{item.label}</div>
                        <div className="text-slate-300 text-sm">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === OVERVIEW: SEO prose content section === */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-slate-950" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-8 text-white">
              IGI Airport Terminal 2 Domestic — Premium Cab Service
            </h2>
            <div className="space-y-5 text-slate-400 text-lg leading-relaxed">
              <p>Need a <strong className="text-white">Delhi Airport Terminal 2 taxi</strong>? IGI Terminal 2 (T2) serves as the premium domestic terminal, primarily handling Vistara, Air India domestic flights, Alliance Air, and select AirAsia India services. T2 offers a more spacious and premium experience compared to T1, and our cab service matches that standard with professional drivers and well-maintained vehicles.</p>
              <p>Triveni Cabs offers <strong className="text-white">pre-booked T2 pickup</strong> with the same flight-tracking technology and nameboard meet-and-greet service available at all terminals. Our driver arrives at the T2 arrival gate, Ground Floor near Pillar No. 12-16, and waits with your name displayed — eliminating the hassle of navigating the airport exit and hunting for a reliable cab.</p>
              <p>Whether you are a Vistara Club member arriving on a business trip, a family landing from a holiday, or a tourist connecting to Agra or Jaipur, our <strong className="text-white">Terminal 2 cab service</strong> provides seamless ground transport from the moment you step out of the arrival hall. Fares are transparent at ₹11/km with 30 minutes free waiting included.</p>
            </div>
          </div>
        </section>

        {/* === Airlines - Sleek Chips === */}
        <section className="relative py-16 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-indigo-950/50" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

          <div className="relative z-10 max-w-5xl mx-auto text-center">
            <h2 className="text-2xl font-black text-white mb-8 flex items-center justify-center gap-3">
              <Plane className="w-6 h-6 text-indigo-400" /> Airlines at Terminal 2
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {terminalData.airlines.map((airline, idx) => (
                <div key={idx} className="bg-white/[0.05] backdrop-blur-sm px-5 py-3 rounded-xl border border-white/[0.08] hover:border-indigo-500/30 transition-all">
                  <span className="text-white font-semibold text-sm">{airline}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === Features === */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-slate-950" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-indigo-400 text-sm font-bold tracking-widest uppercase mb-4">Premium Service</span>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Terminal 2 <span className="text-transparent bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text">Pickup Features</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {terminalData.features.map((feature, idx) => (
                <div key={idx} className="group relative overflow-hidden bg-white/[0.03] rounded-2xl p-6 border border-white/[0.06] hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute -top-3 -right-3 w-16 h-16 bg-indigo-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-indigo-500/10 rounded-xl flex items-center justify-center border border-indigo-500/20 group-hover:bg-indigo-500 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-indigo-400 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-slate-300 font-medium">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === Pricing - Silver Control Panel === */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950/30 to-slate-950" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-violet-400 text-sm font-bold tracking-widest uppercase mb-4">Fare Guide</span>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Terminal 2 <span className="text-transparent bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text">Fare Estimates</span>
              </h2>
              <p className="text-slate-500 mt-3">Transparent pricing. No hidden charges.</p>
            </div>

            <div className="bg-white/[0.03] rounded-3xl border border-white/[0.06] overflow-hidden">
              <div className="grid grid-cols-4 bg-indigo-500/10 px-6 py-4 border-b border-white/[0.06]">
                <span className="text-indigo-400 font-bold text-sm tracking-wider uppercase">Destination</span>
                <span className="text-indigo-400 font-bold text-sm tracking-wider uppercase">Distance</span>
                <span className="text-indigo-400 font-bold text-sm tracking-wider uppercase">Fare</span>
                <span className="text-indigo-400 font-bold text-sm tracking-wider uppercase">Time</span>
              </div>
              {terminalData.pricing.map((route, idx) => (
                <div key={idx} className="grid grid-cols-4 px-6 py-4 border-b border-white/[0.03] hover:bg-white/[0.02] transition-colors group">
                  <span className="font-semibold text-white group-hover:text-indigo-300 transition-colors">{route.destination}</span>
                  <span className="text-slate-400 font-mono text-sm">{route.distance}</span>
                  <span className="text-indigo-400 font-bold font-mono">{route.fare}</span>
                  <span className="text-slate-400 text-sm">{route.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === FAQ === */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-slate-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.04),transparent_60%)]" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-indigo-400 text-sm font-bold tracking-widest uppercase mb-4">Help Center</span>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Terminal 2 <span className="text-transparent bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text">FAQs</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { q: 'Where is the pickup point at Delhi Airport Terminal 2?', a: 'Our drivers wait at the T2 Arrival Gate exit on the Ground Floor, near Pillar No. 12-16. Your driver will hold a nameboard with your name.' },
                { q: 'Which airlines operate from Terminal 2?', a: 'Terminal 2 primarily handles Vistara domestic flights, Air India domestic flights, Alliance Air, and select AirAsia India flights.' },
                { q: 'Is Terminal 2 connected to Terminal 3?', a: 'Yes, Terminal 2 is located near Terminal 3 and connected via airport shuttle. We also provide inter-terminal transfer service.' },
                { q: 'How do I know if my flight is from Terminal 2?', a: 'Check your airline ticket or booking confirmation. Vistara and Air India domestic flights typically operate from T2. You can also check the Delhi Airport website.' }
              ].map((faq, idx) => (
                <div key={idx} className="group relative overflow-hidden bg-white/[0.02] rounded-2xl border border-white/[0.05] hover:border-indigo-500/20 transition-all duration-300">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="p-8 pl-10">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-12 h-12 bg-indigo-500/10 rounded-2xl flex items-center justify-center border border-indigo-500/20">
                        <span className="text-indigo-400 font-black text-lg">{String(idx + 1).padStart(2, '0')}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">{faq.q}</h3>
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
          <div className="absolute inset-0 bg-slate-950" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-black text-white mb-8">Other <span className="text-transparent bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text">Delhi Airport</span> Terminals</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { href: '/airport-service/delhi/igi-terminal-1-domestic', label: 'Terminal 1 (T1)', desc: 'Budget Domestic' },
                { href: '/airport-service/delhi/igi-terminal-3-international', label: 'Terminal 3 (T3)', desc: 'International' },
                { href: '/airport-service/delhi', label: 'Delhi Airport', desc: 'Overview' },
              ].map(link => (
                <Link key={link.href} href={link.href} className="group bg-white/[0.03] px-6 py-4 rounded-2xl border border-white/[0.06] hover:border-indigo-500/30 hover:bg-white/[0.05] transition-all">
                  <div className="font-bold text-white group-hover:text-indigo-400 transition-colors">{link.label}</div>
                  <div className="text-xs text-slate-500">{link.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* === Related Services Cards === */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-slate-950" />
          <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-indigo-400 text-sm font-bold tracking-widest uppercase mb-4">Explore More</span>
              <h2 className="text-3xl md:text-4xl font-black text-white">
                Related <span className="text-transparent bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text">Services</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { href: '/airport-service/delhi', title: 'Delhi Airport Hub', desc: 'Complete Delhi IGI Airport taxi services for all terminals', icon: Plane },
                { href: '/delhi-to-agra', title: 'Delhi to Agra Cab', desc: 'Book outstation taxi from Delhi to Agra for Taj Mahal visit', icon: Car },
                { href: '/delhi-to-jaipur', title: 'Delhi to Jaipur Cab', desc: 'Comfortable outstation ride from Delhi to Jaipur Pink City', icon: Navigation },
                { href: '/sightseeing-tour/delhi', title: 'Delhi Sightseeing Tour', desc: 'Full-day Delhi city tour covering top monuments and attractions', icon: MapPin },
                { href: '/wedding', title: 'Wedding Car Rental', desc: 'Premium wedding cars including BMW, Audi, and Mercedes fleet', icon: Star },
                { href: '/corporate-cab-service', title: 'Corporate Cab Service', desc: 'Professional corporate transportation for business travelers', icon: Users },
              ].map((service, idx) => (
                <Link key={idx} href={service.href} className="group bg-white/[0.03] rounded-2xl p-6 border border-white/[0.06] hover:border-indigo-500/30 hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-indigo-400 mb-3 group-hover:text-violet-400 transition-colors" />
                  <h3 className="font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">{service.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* === Contextual In-Content Links === */}
        <section className="relative py-16 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-indigo-950/30" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="bg-white/[0.03] backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/[0.06]">
              <h2 className="text-2xl font-black text-white mb-6">
                Why Choose Triveni Cabs for <span className="text-indigo-400">Terminal 2 Pickup</span>
              </h2>
              <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed space-y-4">
                <p>
                  Triveni Cabs offers premium <Link href="/airport-service/delhi" className="text-indigo-400 font-semibold hover:text-violet-400 underline decoration-indigo-500/30 hover:decoration-violet-400 transition-colors">Delhi airport taxi service</Link> with dedicated pickup from IGI Terminal 2. Whether you are arriving on Vistara or Air India domestic flights, our drivers wait at the T2 arrival gate with a nameboard. Need to connect to <Link href="/airport-service/delhi/igi-terminal-1-domestic" className="text-indigo-400 font-semibold hover:text-violet-400 underline decoration-indigo-500/30 hover:decoration-violet-400 transition-colors">Terminal 1 budget domestic flights</Link> or <Link href="/airport-service/delhi/igi-terminal-3-international" className="text-indigo-400 font-semibold hover:text-violet-400 underline decoration-indigo-500/30 hover:decoration-violet-400 transition-colors">Terminal 3 international departures</Link>? We provide quick inter-terminal transfers.
                </p>
                <p>
                  From T2, many travelers head to popular destinations. Our <Link href="/delhi-to-agra" className="text-indigo-400 font-semibold hover:text-violet-400 underline decoration-indigo-500/30 hover:decoration-violet-400 transition-colors">Delhi to Agra outstation cab</Link> takes you to the Taj Mahal in 3-4 hours, while the <Link href="/delhi-to-jaipur" className="text-indigo-400 font-semibold hover:text-violet-400 underline decoration-indigo-500/30 hover:decoration-violet-400 transition-colors">Delhi to Jaipur cab service</Link> covers the Pink City in 5 hours. Business travelers heading to Gurgaon or Noida trust our <Link href="/corporate-cab-service" className="text-indigo-400 font-semibold hover:text-violet-400 underline decoration-indigo-500/30 hover:decoration-violet-400 transition-colors">corporate cab service</Link> for executive ground transportation.
                </p>
                <p>
                  Discover Delhi with our <Link href="/sightseeing-tour/delhi" className="text-indigo-400 font-semibold hover:text-violet-400 underline decoration-indigo-500/30 hover:decoration-violet-400 transition-colors">Delhi sightseeing tour packages</Link> visiting iconic landmarks. For hill station getaways, try our <Link href="/delhi-to-shimla" className="text-indigo-400 font-semibold hover:text-violet-400 underline decoration-indigo-500/30 hover:decoration-violet-400 transition-colors">Delhi to Shimla cab</Link> or <Link href="/delhi-to-manali" className="text-indigo-400 font-semibold hover:text-violet-400 underline decoration-indigo-500/30 hover:decoration-violet-400 transition-colors">Delhi to Manali cab</Link>. We also serve <Link href="/airport-service/jaipur" className="text-indigo-400 font-semibold hover:text-violet-400 underline decoration-indigo-500/30 hover:decoration-violet-400 transition-colors">Jaipur airport transfers</Link> and <Link href="/airport-service/chandigarh" className="text-indigo-400 font-semibold hover:text-violet-400 underline decoration-indigo-500/30 hover:decoration-violet-400 transition-colors">Chandigarh airport pickups</Link>. See our <Link href="/reviews" className="text-indigo-400 font-semibold hover:text-violet-400 underline decoration-indigo-500/30 hover:decoration-violet-400 transition-colors">customer reviews</Link>, <Link href="/safety" className="text-indigo-400 font-semibold hover:text-violet-400 underline decoration-indigo-500/30 hover:decoration-violet-400 transition-colors">safety commitment</Link>, and <Link href="/pricing" className="text-indigo-400 font-semibold hover:text-violet-400 underline decoration-indigo-500/30 hover:decoration-violet-400 transition-colors">transparent fare structure</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* === Popular Links Footer Grid === */}
        <section className="relative py-16 px-4">
          <div className="absolute inset-0 bg-[#030712]" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <h2 className="text-2xl font-black text-white mb-10 text-center">
              Popular <span className="text-transparent bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text">Links</span>
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-indigo-400 font-bold text-sm tracking-widest uppercase mb-4">Airport Services</h3>
                <ul className="space-y-2">
                  {[
                    { href: '/airport-service/delhi', label: 'Delhi Airport Taxi' },
                    { href: '/airport-service/delhi/igi-terminal-1-domestic', label: 'Terminal 1 Cab Service' },
                    { href: '/airport-service/delhi/igi-terminal-3-international', label: 'Terminal 3 International Taxi' },
                    { href: '/airport-service/jaipur', label: 'Jaipur Airport Taxi' },
                    { href: '/airport-service/chandigarh', label: 'Chandigarh Airport Cab' },
                    { href: '/airport-service/amritsar', label: 'Amritsar Airport Taxi' },
                    { href: '/airport-service/dehradun', label: 'Dehradun Airport Cab' },
                    { href: '/airport-service/agra', label: 'Agra Airport Taxi' },
                  ].map(link => (
                    <li key={link.href}><Link href={link.href} className="text-slate-500 hover:text-indigo-400 text-sm transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-indigo-400 font-bold text-sm tracking-widest uppercase mb-4">Popular Routes</h3>
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
                    <li key={link.href}><Link href={link.href} className="text-slate-500 hover:text-indigo-400 text-sm transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-indigo-400 font-bold text-sm tracking-widest uppercase mb-4">Popular Cities</h3>
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
                    <li key={link.href}><Link href={link.href} className="text-slate-500 hover:text-indigo-400 text-sm transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-indigo-400 font-bold text-sm tracking-widest uppercase mb-4">More Services</h3>
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
                    <li key={link.href}><Link href={link.href} className="text-slate-500 hover:text-indigo-400 text-sm transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* === CTA: Premium Indigo Banner === */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.2),transparent_50%)]" />

          <div className="absolute top-8 right-[10%] opacity-10">
            <Plane className="w-24 h-24 text-white -rotate-45" />
          </div>

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-5 py-2 rounded-full mb-8">
              <Plane className="w-4 h-4 text-white" />
              <span className="text-white/90 font-bold text-sm tracking-wider uppercase">Premium Domestic Terminal</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Book Terminal 2<br />Taxi Now
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">Reliable T2 pickup for Vistara and Air India flights. Flight tracking included.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-3 bg-white text-indigo-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-black/20 hover:scale-[1.02] transition-all">
                <Phone className="w-5 h-5" /> Call +91 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=Need taxi from Delhi Airport Terminal 2" className="inline-flex items-center justify-center gap-3 bg-green-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-black/20 hover:scale-[1.02] transition-all">
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
