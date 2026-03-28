import Link from 'next/link';
import {
  Phone, ChevronRight, CheckCircle2, ArrowRight, Shield, Clock,
  Car, MapPin, Star, Navigation, Plane, Globe, Crown, Luggage, Users
} from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Jewar Airport Terminal 1 Taxi | Noida International Airport Cab ₹11/km',
  description: 'Book taxi from Noida International Airport Jewar (NIA). Terminal 1 pickup/drop for domestic & international flights. Cab to Noida, Delhi, Agra. Starting ₹11/km. Call 7668570551.',
  alternates: { canonical: 'https://www.trivenicabs.in/airport-service/jewar/jewar-terminal-1-international' },
  openGraph: {
    title: 'Noida International Airport Jewar Taxi | NIA Terminal 1 Cab 24/7',
    description: 'Jewar Airport (Noida International Airport) taxi service. International & domestic flights pickup. Book now for seamless transfers!',
    type: 'website', locale: 'en_IN', siteName: 'Triveni Cabs',
    images: [{ url: '/images/airport_section.jpg', width: 1200, height: 630, alt: 'Jewar Noida International Airport Taxi' }]
  },
  keywords: 'jewar airport taxi, noida international airport cab, NIA airport taxi, jewar terminal 1 taxi, jewar airport to noida cab, jewar airport to delhi taxi, jewar airport to agra cab, jewar airport pickup, jewar airport transfer, jewar airport cab booking',
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function JewarTerminal1Page() {
  const terminalData = {
    terminal: 'Terminal 1',
    type: 'International & Domestic Terminal',
    airlines: [
      'IndiGo', 'Air India', 'SpiceJet', 'Vistara', 'AirAsia India',
      'Akasa Air', 'Emirates', 'Singapore Airlines', 'Thai Airways',
      'Lufthansa', 'Qatar Airways', 'Etihad Airways'
    ],
    pickupPoint: 'Arrival Hall, Ground Floor, Gate 1-6, Near Pillar A10-A18',
    parkingArea: 'Multi-level smart parking, Level 1-4 (covered, EV charging)',
    meetingPoint: 'Outside Arrival Hall, near Information Kiosk and Cab Pickup Zone',
    distance: '35 km from Noida Sector 18, 72 km from Delhi',
    features: [
      'State-of-the-art terminal pickup zone',
      'Driver meets with nameboard at arrival exit',
      'Free 45-minute waiting for international flights',
      'Free 30-minute waiting for domestic flights',
      'Real-time flight tracking for all arrivals',
      'Luggage trolley assistance provided',
      'Multi-language driver support (English/Hindi)',
      'Direct highway connectivity to Delhi-Mumbai Expressway'
    ],
    pricing: [
      { destination: 'Greater Noida', distance: '25 km', fare: '₹400-500', time: '25-35 min' },
      { destination: 'Noida Sector 18', distance: '35 km', fare: '₹550-700', time: '35-45 min' },
      { destination: 'Delhi Connaught Place', distance: '72 km', fare: '₹1200-1500', time: '1.5-2 hours' },
      { destination: 'Ghaziabad', distance: '55 km', fare: '₹900-1100', time: '1-1.5 hours' },
      { destination: 'Mathura', distance: '90 km', fare: '₹1500-1800', time: '1.5 hours' },
      { destination: 'Agra (Taj Mahal)', distance: '130 km', fare: '₹2200-2500', time: '2-2.5 hours' },
      { destination: 'Delhi Airport (IGI)', distance: '80 km', fare: '₹1400-1700', time: '1.5-2 hours' }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Airport Transfer Service",
    "name": "Noida International Airport Jewar Taxi Service",
    "description": "Professional taxi service from Noida International Airport (NIA) Jewar - Terminal 1. International and domestic flights pickup with 24/7 availability.",
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
    "areaServed": [
      { "@type": "City", "name": "Jewar" },
      { "@type": "City", "name": "Noida" },
      { "@type": "City", "name": "Greater Noida" }
    ],
    "offers": { "@type": "Offer", "price": "11", "priceCurrency": "INR", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "11", "priceCurrency": "INR", "unitText": "per kilometer" } }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Airport Service", "item": "https://www.trivenicabs.in/airport-service" },
      { "@type": "ListItem", "position": 3, "name": "Jewar", "item": "https://www.trivenicabs.in/airport-service/jewar" },
      { "@type": "ListItem", "position": 4, "name": "Terminal 1 International", "item": "https://www.trivenicabs.in/airport-service/jewar/jewar-terminal-1-international" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "Where is the pickup point at Jewar Airport Terminal 1?", "acceptedAnswer": { "@type": "Answer", "text": "Our drivers wait outside the Arrival Hall on the Ground Floor, near Gate 1-6 at Pillar A10-A18, close to the Information Kiosk and designated Cab Pickup Zone. The driver holds a nameboard with your name." } },
      { "@type": "Question", "name": "How far is Jewar Airport from Noida and Delhi?", "acceptedAnswer": { "@type": "Answer", "text": "Jewar Airport (Noida International Airport) is approximately 35 km from Noida Sector 18 (40 mins), 25 km from Greater Noida (30 mins), and 72 km from Delhi Connaught Place (1.5-2 hours). It is connected via the Yamuna Expressway and Delhi-Mumbai Expressway." } },
      { "@type": "Question", "name": "How much does a taxi from Jewar Airport to Agra cost?", "acceptedAnswer": { "@type": "Answer", "text": "A taxi from Jewar Airport to Agra (Taj Mahal) costs approximately ₹2,200-2,500 for a sedan. The journey is about 130 km and takes 2-2.5 hours via the Yamuna Expressway. This is the closest international airport to Agra." } },
      { "@type": "Question", "name": "Is Jewar Airport closer to Agra than Delhi Airport?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Jewar Airport is only 130 km from Agra compared to 230 km from Delhi IGI Airport. This saves 100 km and approximately 1.5 hours of travel time, making it the preferred airport for Taj Mahal visitors." } },
      { "@type": "Question", "name": "Do you provide taxi service from Jewar Airport to Delhi IGI Airport?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we provide inter-airport transfers between Jewar Airport (NIA) and Delhi IGI Airport. The distance is approximately 80 km and takes 1.5-2 hours. Fare starts at ₹1,400-1,700 for a sedan." } }
    ]
  };

  const premiumFeatures = [
    { icon: Globe, label: 'International & Domestic', desc: 'All major airlines' },
    { icon: Clock, label: '45 Min Free Wait', desc: 'International flights' },
    { icon: Crown, label: 'New-Age Airport', desc: 'World-class infrastructure' },
    { icon: Shield, label: 'Flight Tracking', desc: 'Real-time monitoring' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-[#020C0B]">

        {/* === HERO: Futuristic Green/Emerald New-Age Airport Theme === */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#020C0B] via-[#041A17] to-[#020C0B]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(20,184,166,0.06),transparent_50%)]" />

          {/* Emerald accent line at top */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />

          {/* Futuristic decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-emerald-500/[0.03] rounded-full" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] border border-emerald-500/[0.03] rounded-full rotate-12" />
            <div className="absolute top-[8%] right-[5%] opacity-[0.03]">
              <Plane className="w-56 h-56 text-emerald-400 rotate-45" />
            </div>
            <div className="absolute bottom-[10%] left-[3%] opacity-[0.02]">
              <Globe className="w-44 h-44 text-emerald-400" />
            </div>
            <div className="absolute top-[20%] right-[15%] w-32 h-32 bg-emerald-500/[0.04] rounded-full blur-[60px]" />
            <div className="absolute bottom-[25%] left-[10%] w-40 h-40 bg-teal-500/[0.03] rounded-full blur-[70px]" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
            <nav className="flex items-center gap-2 text-sm text-slate-500 mb-10">
              <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/airport-service" className="hover:text-emerald-400 transition-colors">Airport Service</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/airport-service/jewar" className="hover:text-emerald-400 transition-colors">Jewar</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-emerald-400 font-medium">Terminal 1 International</span>
            </nav>

            <div className="grid lg:grid-cols-5 gap-12 items-center">
              {/* Left: Content */}
              <div className="lg:col-span-3">
                {/* Terminal badge */}
                <div className="inline-flex items-center gap-4 bg-emerald-500/[0.08] border border-emerald-500/20 backdrop-blur-sm px-6 py-3 rounded-xl mb-8">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20">
                    <Plane className="w-5 h-5 text-white" />
                  </div>
                  <div className="border-l border-emerald-500/20 pl-4">
                    <div className="text-[10px] font-bold text-emerald-400/80 tracking-widest uppercase">Terminal</div>
                    <div className="text-2xl font-black text-emerald-300 leading-none">T1</div>
                  </div>
                  <div className="border-l border-emerald-500/20 pl-4">
                    <div className="text-[10px] font-bold text-emerald-400/80 tracking-widest uppercase">Airport</div>
                    <div className="text-sm font-bold text-white leading-none">NIA Jewar</div>
                  </div>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-white leading-[0.9] mb-8">
                  <span className="block text-transparent bg-gradient-to-r from-emerald-300 via-teal-300 to-emerald-400 bg-clip-text">Jewar Airport</span>
                  <span className="block text-white/90 mt-2">Terminal 1 Taxi</span>
                  <span className="block text-2xl md:text-3xl font-medium text-slate-500 mt-4">Noida International Airport (NIA)</span>
                </h1>

                <p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed">
                  India&apos;s newest international airport. Closest airport to Agra &amp; Taj Mahal. Premium pickup with 45 min free waiting. Starting ₹11/km.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="tel:+917668570551" className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] transition-all duration-300">
                    <Phone className="w-5 h-5" /> Book Jewar Airport Pickup
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="https://wa.me/917668570551?text=I need taxi from Jewar Noida International Airport" className="inline-flex items-center justify-center gap-3 bg-white/[0.04] backdrop-blur-sm text-white px-8 py-5 rounded-2xl font-bold text-lg border border-white/[0.08] hover:border-emerald-500/30 hover:bg-white/[0.08] transition-all">
                    WhatsApp
                  </Link>
                </div>
              </div>

              {/* Right: Feature cards + pickup info */}
              <div className="lg:col-span-2 space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  {premiumFeatures.map((item, idx) => (
                    <div key={idx} className="group bg-white/[0.03] backdrop-blur-sm rounded-2xl p-5 border border-white/[0.06] hover:border-emerald-500/20 hover:bg-white/[0.05] transition-all duration-300">
                      <item.icon className="w-7 h-7 text-emerald-400/70 mb-3 group-hover:text-emerald-400 transition-colors" />
                      <div className="text-sm font-bold text-white mb-0.5">{item.label}</div>
                      <div className="text-xs text-slate-500">{item.desc}</div>
                    </div>
                  ))}
                </div>

                {/* Pickup info */}
                <div className="bg-gradient-to-br from-emerald-500/[0.06] to-white/[0.02] rounded-2xl p-6 border border-emerald-500/15">
                  <h3 className="font-bold text-white mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-emerald-400" /> Jewar Airport Pickup
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div><span className="text-emerald-400 font-semibold">Gate:</span> <span className="text-slate-300">{terminalData.pickupPoint}</span></div>
                    <div><span className="text-emerald-400 font-semibold">Meet:</span> <span className="text-slate-300">{terminalData.meetingPoint}</span></div>
                    <div><span className="text-emerald-400 font-semibold">Wait:</span> <span className="text-slate-300">45 min free (International), 30 min (Domestic)</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === OVERVIEW: SEO prose content === */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-[#041A17]" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-center mb-8 text-transparent bg-gradient-to-r from-emerald-300 to-teal-400 bg-clip-text">
              Noida International Airport Jewar — Premium Airport Transfer
            </h2>
            <div className="space-y-5 text-slate-400 text-lg leading-relaxed">
              <p>Arriving at <strong className="text-white">Noida International Airport (NIA) Jewar</strong>? India&apos;s newest greenfield international airport in Gautam Buddha Nagar is set to transform air travel in the NCR region. Located along the Yamuna Expressway, Jewar Airport offers seamless connectivity to Noida, Greater Noida, Delhi, Agra, and the entire western UP region. Triveni Cabs provides <strong className="text-white">24/7 taxi service from Jewar Airport</strong> with professional drivers and transparent pricing.</p>
              <p>The biggest advantage of Jewar Airport is its <strong className="text-white">proximity to Agra and the Taj Mahal</strong> — just 130 km compared to 230 km from Delhi IGI Airport. This saves tourists nearly 1.5 hours of travel time. Whether you are an international tourist heading to the Taj Mahal or a business traveler going to Noida&apos;s IT hubs, our <strong className="text-white">Jewar Airport taxi service</strong> ensures a smooth, comfortable ride from the moment you land.</p>
              <p>Our drivers are stationed at the Terminal 1 arrival exit near Gate 1-6, holding a nameboard with your name. We offer <strong className="text-white">45 minutes free waiting</strong> for international flights and 30 minutes for domestic flights, with real-time flight tracking. Starting at ₹11/km with no surge pricing — the same rate at midnight, early morning, or peak hours. Toll and parking charged at actual with complete transparency.</p>
            </div>
          </div>
        </section>

        {/* === Airlines Section === */}
        <section className="relative py-16 px-4">
          <div className="absolute inset-0 bg-[#041A17]" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-2xl font-black text-white flex items-center justify-center gap-3">
                <Plane className="w-6 h-6 text-emerald-400" /> Airlines at Jewar Airport
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {terminalData.airlines.map((airline, idx) => (
                <div key={idx} className={`group relative overflow-hidden rounded-xl p-4 border transition-all duration-300 hover:-translate-y-0.5 ${
                  idx < 4 ? 'bg-emerald-500/[0.06] border-emerald-500/15 hover:border-emerald-400/30' :
                  'bg-white/[0.03] border-white/[0.06] hover:border-emerald-500/20'
                }`}>
                  <div className="flex items-center gap-3">
                    <Plane className={`w-4 h-4 ${idx < 4 ? 'text-emerald-400' : 'text-slate-500 group-hover:text-emerald-400'} transition-colors`} />
                    <span className="text-white font-semibold text-sm">{airline}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === Features === */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-[#020C0B]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.03),transparent_60%)]" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block text-emerald-400 text-sm font-bold tracking-widest uppercase mb-4">New-Age Service</span>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Jewar Airport <span className="text-transparent bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-300 bg-clip-text">Pickup Features</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {terminalData.features.map((feature, idx) => (
                <div key={idx} className="group relative overflow-hidden bg-white/[0.02] rounded-2xl p-5 border border-white/[0.05] hover:border-emerald-500/20 transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute -top-3 -right-3 w-16 h-16 bg-emerald-500/[0.06] rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center border border-emerald-500/15 group-hover:bg-emerald-500 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 group-hover:text-white transition-colors" />
                    </div>
                    <span className="text-slate-300 text-sm font-medium leading-relaxed">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === Pricing === */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#020C0B] via-[#041A17] to-[#020C0B]" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-emerald-400 text-sm font-bold tracking-widest uppercase mb-4">Fare Guide</span>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Jewar Airport <span className="text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text">Fare Estimates</span>
              </h2>
              <p className="text-slate-500 mt-3">Transparent pricing. No hidden charges. Closest airport to Agra.</p>
            </div>

            <div className="bg-white/[0.03] rounded-3xl border border-emerald-500/10 overflow-hidden">
              <div className="grid grid-cols-4 bg-emerald-500/[0.08] px-6 py-4 border-b border-emerald-500/10">
                <span className="text-emerald-400 font-bold text-sm tracking-wider uppercase">Destination</span>
                <span className="text-emerald-400 font-bold text-sm tracking-wider uppercase">Distance</span>
                <span className="text-emerald-400 font-bold text-sm tracking-wider uppercase">Fare</span>
                <span className="text-emerald-400 font-bold text-sm tracking-wider uppercase">Time</span>
              </div>
              {terminalData.pricing.map((route, idx) => (
                <div key={idx} className="grid grid-cols-4 px-6 py-4 border-b border-white/[0.03] hover:bg-emerald-500/[0.03] transition-colors group">
                  <span className="font-semibold text-white group-hover:text-emerald-300 transition-colors">{route.destination}</span>
                  <span className="text-slate-400 font-mono text-sm">{route.distance}</span>
                  <span className="text-emerald-400 font-bold font-mono">{route.fare}</span>
                  <span className="text-slate-400 text-sm">{route.time}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === Why Jewar Airport - Agra Advantage === */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-[#020C0B]" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-emerald-400 text-sm font-bold tracking-widest uppercase mb-4">Agra Advantage</span>
              <h2 className="text-3xl md:text-4xl font-black text-white">
                Popular Routes from <span className="text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text">Jewar Airport</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { dest: 'Agra (Taj Mahal)', desc: 'Just 130 km — closest international airport to Agra! 2-2.5 hours via Yamuna Expressway. Save 1.5 hours vs Delhi Airport.', icon: Star },
                { dest: 'Noida / Greater Noida', desc: 'IT hub connectivity. 25-35 km drive. Perfect for tech professionals and business travelers.', icon: Navigation },
                { dest: 'Mathura - Vrindavan', desc: 'Sacred city of Lord Krishna. 90 km drive via expressway. Spiritual tourism hub.', icon: Crown },
              ].map((route, idx) => (
                <div key={idx} className="group relative overflow-hidden bg-gradient-to-br from-emerald-500/[0.06] to-white/[0.02] rounded-3xl p-8 border border-emerald-500/15 hover:border-emerald-400/30 hover:shadow-lg hover:shadow-emerald-500/5 transition-all duration-300 hover:-translate-y-2">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-bl-full" />
                  <route.icon className="w-8 h-8 text-emerald-400 mb-4" />
                  <h3 className="font-black text-white text-xl mb-2">{route.dest}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">{route.desc}</p>
                  <Link href="tel:+917668570551" className="inline-flex items-center gap-2 text-emerald-400 font-bold text-sm hover:text-emerald-300 transition-colors">
                    Book Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === How to Book === */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-[#041A17]" />
          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-teal-400 text-sm font-bold tracking-widest uppercase mb-4">Simple Process</span>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                How to Book Your <span className="text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text">Jewar Airport Taxi</span>
              </h2>
              <p className="text-slate-500 mt-3 max-w-2xl mx-auto">Booking a cab from Noida International Airport is simple. Follow these three easy steps.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Call or WhatsApp Us', desc: 'Contact us on +91 7668570551 with your flight number, arrival time, and drop destination. WhatsApp your booking details for instant confirmation. Our team is available 24/7.' },
                { step: '02', title: 'We Track Your Flight', desc: 'Once confirmed, we monitor your flight in real-time. Whether domestic or international, our driver automatically adjusts arrival time for delays. No extra charges for delays.' },
                { step: '03', title: 'Meet at Arrival Gate', desc: 'Your assigned driver reaches Jewar Airport before your flight lands. He waits at the Arrival Hall exit near Gate 1-6 with a nameboard. Walk out and step into a clean, AC cab.' },
              ].map((item, idx) => (
                <div key={idx} className="relative bg-white/[0.03] rounded-2xl p-8 border border-emerald-500/10 hover:border-emerald-500/25 transition-all">
                  <div className="text-6xl font-black text-emerald-500/10 absolute top-4 right-6">{item.step}</div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === FAQ === */}
        <section className="relative py-24 px-4">
          <div className="absolute inset-0 bg-[#020C0B]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.03),transparent_50%)]" />

          <div className="relative z-10 max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <span className="inline-block text-emerald-400 text-sm font-bold tracking-widest uppercase mb-4">Traveler Help</span>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Jewar Airport <span className="text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text">FAQs</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                { q: 'Where is the pickup point at Jewar Airport?', a: 'After collecting your luggage, exit through Gate 1-6 at the Arrival Hall. Our driver waits outside near the Information Kiosk in the designated Cab Pickup Zone with a nameboard showing your name.' },
                { q: 'Is Jewar Airport closer to Agra than Delhi Airport?', a: 'Yes! Jewar Airport is only 130 km from Agra compared to 230 km from Delhi IGI Airport. You save approximately 100 km and 1.5 hours of travel time to reach the Taj Mahal.' },
                { q: 'Which expressways connect Jewar Airport?', a: 'Jewar Airport is connected via the Yamuna Expressway (to Agra, Mathura) and the Delhi-Mumbai Expressway. It also has direct connectivity to the Noida-Greater Noida Expressway for NCR destinations.' },
                { q: 'How much does a taxi from Jewar Airport to Noida cost?', a: 'A taxi from Jewar Airport to Noida Sector 18 costs approximately ₹550-700 (35 km, 40 mins) and to Greater Noida ₹400-500 (25 km, 30 mins). Prices start at ₹11/km with no hidden charges.' },
                { q: 'Do you provide outstation service from Jewar Airport?', a: 'Yes! Popular outstation routes include Jewar to Agra (₹2,200-2,500), Jewar to Mathura (₹1,500-1,800), Jewar to Delhi (₹1,200-1,500), and Jewar to Aligarh. All at transparent per-km pricing.' }
              ].map((faq, idx) => (
                <div key={idx} className="group relative overflow-hidden bg-white/[0.02] rounded-2xl border border-white/[0.04] hover:border-emerald-500/20 transition-all duration-300">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-emerald-400 to-teal-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="p-8 pl-10">
                    <div className="flex items-start gap-5">
                      <div className="flex-shrink-0 w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center border border-emerald-500/15">
                        <span className="text-emerald-400 font-black text-lg">{String(idx + 1).padStart(2, '0')}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">{faq.q}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === Related Services === */}
        <section className="relative py-20 px-4">
          <div className="absolute inset-0 bg-[#020C0B]" />
          <div className="absolute top-0 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-emerald-400 text-sm font-bold tracking-widest uppercase mb-4">Explore More</span>
              <h2 className="text-3xl md:text-4xl font-black text-white">
                Related <span className="text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text">Services</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { href: '/airport-service/jewar', title: 'Jewar Airport Hub', desc: 'Complete Noida International Airport taxi services overview', icon: Plane },
                { href: '/airport-service/delhi', title: 'Delhi IGI Airport Taxi', desc: 'Terminal 1, 2, 3 pickup from Indira Gandhi International Airport', icon: Globe },
                { href: '/airport-service/agra', title: 'Agra Airport Taxi', desc: 'Kheria Airport cab service for Agra and Taj Mahal visitors', icon: Car },
                { href: '/sightseeing/agra', title: 'Agra Sightseeing Tour', desc: 'Same-day Taj Mahal tour from Jewar Airport', icon: Star },
                { href: '/sightseeing/delhi', title: 'Delhi Sightseeing Tour', desc: 'Full-day Delhi tour for tourists arriving at Jewar', icon: MapPin },
                { href: '/corporate-transportation-service', title: 'Corporate Cab Service', desc: 'Executive transport for Noida IT professionals', icon: Crown },
              ].map((service, idx) => (
                <Link key={idx} href={service.href} className="group bg-white/[0.03] rounded-2xl p-6 border border-white/[0.05] hover:border-emerald-500/25 hover:bg-emerald-500/[0.04] hover:-translate-y-1 transition-all duration-300">
                  <service.icon className="w-8 h-8 text-emerald-400 mb-3 group-hover:text-teal-400 transition-colors" />
                  <h3 className="font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">{service.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* === Contextual In-Content Links === */}
        <section className="relative py-16 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-[#020C0B] to-[#041A17]" />

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="bg-white/[0.03] backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-emerald-500/10">
              <h2 className="text-2xl font-black text-white mb-6">
                Why Choose Triveni Cabs at <span className="text-emerald-400">Jewar Airport</span>
              </h2>
              <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed space-y-4">
                <p>
                  Triveni Cabs is ready to serve passengers at <Link href="/airport-service/jewar" className="text-emerald-400 font-semibold hover:text-teal-400 underline decoration-emerald-500/30 hover:decoration-teal-400 transition-colors">Noida International Airport (Jewar)</Link> with premium pickup service. Whether you arrive on IndiGo, Air India, or Emirates, our drivers greet you at the arrival hall with a personalized nameboard. For connections at <Link href="/airport-service/delhi" className="text-emerald-400 font-semibold hover:text-teal-400 underline decoration-emerald-500/30 hover:decoration-teal-400 transition-colors">Delhi IGI Airport</Link>, we provide seamless inter-airport transfers.
                </p>
                <p>
                  Jewar Airport is a game-changer for Taj Mahal tourism. Our <Link href="/airport-service/agra" className="text-emerald-400 font-semibold hover:text-teal-400 underline decoration-emerald-500/30 hover:decoration-teal-400 transition-colors">Agra airport taxi service</Link> combined with Jewar connectivity means tourists reach the Taj Mahal faster than ever. Book our <Link href="/sightseeing/agra" className="text-emerald-400 font-semibold hover:text-teal-400 underline decoration-emerald-500/30 hover:decoration-teal-400 transition-colors">Agra sightseeing tour</Link> directly from the airport. For Delhi exploration, try our <Link href="/sightseeing/delhi" className="text-emerald-400 font-semibold hover:text-teal-400 underline decoration-emerald-500/30 hover:decoration-teal-400 transition-colors">Delhi sightseeing tour</Link>.
                </p>
                <p>
                  Business travelers heading to Noida&apos;s IT corridor can use our <Link href="/corporate-transportation-service" className="text-emerald-400 font-semibold hover:text-teal-400 underline decoration-emerald-500/30 hover:decoration-teal-400 transition-colors">corporate cab service</Link>. We also serve <Link href="/airport-service/jaipur" className="text-emerald-400 font-semibold hover:text-teal-400 underline decoration-emerald-500/30 hover:decoration-teal-400 transition-colors">Jaipur airport</Link>, <Link href="/airport-service/chandigarh" className="text-emerald-400 font-semibold hover:text-teal-400 underline decoration-emerald-500/30 hover:decoration-teal-400 transition-colors">Chandigarh airport</Link>, and <Link href="/airport-service/amritsar" className="text-emerald-400 font-semibold hover:text-teal-400 underline decoration-emerald-500/30 hover:decoration-teal-400 transition-colors">Amritsar airport</Link>. Check our <Link href="/reviews" className="text-emerald-400 font-semibold hover:text-teal-400 underline decoration-emerald-500/30 hover:decoration-teal-400 transition-colors">traveler reviews</Link>, <Link href="/safety" className="text-emerald-400 font-semibold hover:text-teal-400 underline decoration-emerald-500/30 hover:decoration-teal-400 transition-colors">safety standards</Link>, and <Link href="/pricing" className="text-emerald-400 font-semibold hover:text-teal-400 underline decoration-emerald-500/30 hover:decoration-teal-400 transition-colors">transparent pricing</Link>.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* === Popular Links Footer Grid === */}
        <section className="relative py-16 px-4">
          <div className="absolute inset-0 bg-[#041A17]" />

          <div className="relative z-10 max-w-7xl mx-auto">
            <h2 className="text-2xl font-black text-white mb-10 text-center">
              Popular <span className="text-transparent bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text">Links</span>
            </h2>

            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-emerald-400 font-bold text-sm tracking-widest uppercase mb-4">Airport Services</h3>
                <ul className="space-y-2">
                  {[
                    { href: '/airport-service/jewar', label: 'Jewar Airport Taxi' },
                    { href: '/airport-service/delhi', label: 'Delhi IGI Airport Taxi' },
                    { href: '/airport-service/delhi/igi-terminal-1-domestic', label: 'Delhi Terminal 1 Cab' },
                    { href: '/airport-service/delhi/igi-terminal-3-international', label: 'Delhi Terminal 3 Taxi' },
                    { href: '/airport-service/agra', label: 'Agra Airport Taxi' },
                    { href: '/airport-service/jaipur', label: 'Jaipur Airport Taxi' },
                    { href: '/airport-service/chandigarh', label: 'Chandigarh Airport Cab' },
                    { href: '/airport-service/dehradun', label: 'Dehradun Airport Cab' },
                  ].map(link => (
                    <li key={link.href}><Link href={link.href} className="text-slate-500 hover:text-emerald-400 text-sm transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-emerald-400 font-bold text-sm tracking-widest uppercase mb-4">From Jewar Airport</h3>
                <ul className="space-y-2">
                  {[
                    { href: '/airport-service/jewar/jewar-terminal-1-international', label: 'Jewar Terminal 1 Taxi' },
                    { href: '/delhi-to-agra', label: 'Delhi to Agra Cab' },
                    { href: '/delhi-to-jaipur', label: 'Delhi to Jaipur Cab' },
                    { href: '/delhi-to-chandigarh', label: 'Delhi to Chandigarh Cab' },
                    { href: '/delhi-to-shimla', label: 'Delhi to Shimla Cab' },
                    { href: '/delhi-to-manali', label: 'Delhi to Manali Cab' },
                    { href: '/delhi-to-haridwar', label: 'Delhi to Haridwar Cab' },
                    { href: '/delhi-to-rishikesh', label: 'Delhi to Rishikesh Cab' },
                  ].map(link => (
                    <li key={link.href}><Link href={link.href} className="text-slate-500 hover:text-emerald-400 text-sm transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-emerald-400 font-bold text-sm tracking-widest uppercase mb-4">Popular Cities</h3>
                <ul className="space-y-2">
                  {[
                    { href: '/city/delhi', label: 'Taxi Service in Delhi' },
                    { href: '/city/agra', label: 'Taxi Service in Agra' },
                    { href: '/city/jaipur', label: 'Taxi Service in Jaipur' },
                    { href: '/city/chandigarh', label: 'Taxi Service in Chandigarh' },
                    { href: '/city/shimla', label: 'Taxi Service in Shimla' },
                    { href: '/city/manali', label: 'Taxi Service in Manali' },
                    { href: '/city/haridwar', label: 'Taxi Service in Haridwar' },
                    { href: '/city/varanasi', label: 'Taxi Service in Varanasi' },
                  ].map(link => (
                    <li key={link.href}><Link href={link.href} className="text-slate-500 hover:text-emerald-400 text-sm transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-emerald-400 font-bold text-sm tracking-widest uppercase mb-4">More Services</h3>
                <ul className="space-y-2">
                  {[
                    { href: '/sightseeing/agra', label: 'Agra Sightseeing Tour' },
                    { href: '/sightseeing/delhi', label: 'Delhi Sightseeing Tour' },
                    { href: '/wedding', label: 'Wedding Car Rental' },
                    { href: '/corporate-transportation-service', label: 'Corporate Cab Service' },
                    { href: '/religious-tours', label: 'Religious Tour Packages' },
                    { href: '/tour-package', label: 'Road Trip Packages' },
                    { href: '/tempo-traveller', label: 'Tempo Traveller Rental' },
                    { href: '/contact', label: 'Contact Triveni Cabs' },
                  ].map(link => (
                    <li key={link.href}><Link href={link.href} className="text-slate-500 hover:text-emerald-400 text-sm transition-colors">{link.label}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* === CTA === */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 via-teal-600 to-emerald-700" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.2),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.2),transparent_50%)]" />

          <div className="absolute top-8 right-[10%] opacity-10">
            <Plane className="w-24 h-24 text-white rotate-45" />
          </div>
          <div className="absolute bottom-8 left-[10%] opacity-10">
            <Globe className="w-20 h-20 text-white" />
          </div>

          <div className="max-w-4xl mx-auto relative z-10 text-center">
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-10 h-px bg-white/40" />
              <span className="text-white/90 font-bold text-sm tracking-[0.3em] uppercase">Noida International Airport</span>
              <div className="w-10 h-px bg-white/40" />
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
              Book Jewar Airport<br />Taxi Now
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">India&apos;s newest international airport. Closest to Agra &amp; Taj Mahal. 24/7 premium service.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-3 bg-slate-900 text-emerald-400 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-black/30 hover:scale-[1.02] transition-all">
                <Phone className="w-5 h-5" /> Call +91 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=Need taxi from Jewar Noida International Airport" className="inline-flex items-center justify-center gap-3 bg-green-500 text-white px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-black/20 hover:scale-[1.02] transition-all">
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
