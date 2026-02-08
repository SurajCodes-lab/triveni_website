import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, Calendar, Heart, Sparkles, Droplets } from '@/components/ui/icons';

export const metadata = {
  title: 'Kanwar Yatra Cab to Haridwar 2026 | AC Vehicle from ₹4,000 | Safe Transport',
  description: 'Book Kanwar Yatra cab to Haridwar from Delhi, Noida, Ghaziabad. AC sedan, SUV, Tempo Traveller. Safe transport for Kanwariyas. Group discounts. Call 7668570551.',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/kanwar-yatra-cab-haridwar' },
  openGraph: {
    title: 'Kanwar Yatra Cab to Haridwar 2026 | Safe AC Transport',
    description: 'Kanwar Yatra transport from Delhi/NCR to Haridwar. AC cabs, Tempo Travellers, group buses. Safety features for yatra. Book now.',
    type: 'website', locale: 'en_IN',
    url: 'https://www.trivenicabs.in/kanwar-yatra-cab-haridwar',
    siteName: 'Triveni Cabs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kanwar Yatra Cab Haridwar 2026 | From ₹4,000',
    description: 'Safe Kanwar Yatra transport. Delhi/NCR to Haridwar. AC vehicles, group options.',
    site: '@trivenicabs',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function KanwarYatraCabHaridwar() {
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    "serviceType": "Kanwar Yatra Transport Service",
    "name": "Kanwar Yatra Cab to Haridwar",
    "description": "Specialized transport service for Kanwar Yatra from Delhi, Noida, Ghaziabad to Haridwar. AC vehicles, Tempo Travellers, and group buses available.",
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } },
    "areaServed": [
      { "@type": "City", "name": "Delhi" },
      { "@type": "City", "name": "Noida" },
      { "@type": "City", "name": "Ghaziabad" }
    ]
  };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
    { "@type": "ListItem", "position": 2, "name": "Religious Tours", "item": "https://www.trivenicabs.in/religious-tours" },
    { "@type": "ListItem", "position": 3, "name": "Kanwar Yatra Cab Haridwar", "item": "https://www.trivenicabs.in/kanwar-yatra-cab-haridwar" }
  ]};

  const faqData = [
    { question: "What is the cost of Kanwar Yatra cab from Delhi to Haridwar?", answer: "Kanwar Yatra cab from Delhi to Haridwar starts at ₹4,000 for a sedan (one-way). SUV starts at ₹6,000, and 12-seater Tempo Traveller starts at ₹10,000. Round-trip packages with wait time are also available. Group discounts apply for multiple vehicles." },
    { question: "Do you provide Tempo Traveller for Kanwar Yatra?", answer: "Yes! We offer 12-seater, 17-seater, and 26-seater Tempo Travellers perfect for Kanwar Yatra groups. Prices start at ₹10,000 for 12-seater from Delhi to Haridwar. All vehicles are AC with ample space for kanwars and luggage." },
    { question: "Is Kanwar Yatra cab available from Noida and Ghaziabad?", answer: "Yes, we provide Kanwar Yatra cab pickup from Delhi, Noida, Ghaziabad, Greater Noida, Faridabad, and all NCR locations. Pickup is available from your doorstep at any time." },
    { question: "When is Kanwar Yatra 2026?", answer: "Kanwar Yatra typically falls in the Hindu month of Shravan (July-August). In 2026, Shravan is expected in July-August. The exact dates are based on the Hindu calendar. We recommend booking your cab 1-2 weeks in advance during this peak season." },
    { question: "What safety features do you provide for Kanwar Yatra?", answer: "Our Kanwar Yatra transport includes GPS-tracked vehicles, experienced drivers familiar with yatra routes, first-aid kit, 24/7 emergency helpline, vehicle sanitization, and careful driving protocols for the safety of kanwariyas and sacred jalwa." },
    { question: "Can you accommodate kanwars in the vehicle?", answer: "Yes! Our SUVs and Tempo Travellers have ample roof and boot space for kanwars. For larger kanwars, we recommend booking a Tempo Traveller which provides maximum space. Drivers are experienced in safely accommodating yatra equipment." },
    { question: "Do you provide overnight or round-trip Kanwar Yatra packages?", answer: "Yes, we offer both one-way and round-trip packages. Round-trip includes driver wait time in Haridwar while you collect Ganga jal. Typical round-trip: depart night, reach Haridwar early morning, collect jal, return same day. Round-trip sedan starts at ₹7,000." },
    { question: "What route do your drivers take for Kanwar Yatra?", answer: "Our drivers take the most efficient route — typically Delhi → NH58/NH334 → Meerut → Muzaffarnagar → Roorkee → Haridwar (220 km, 5-6 hours). During Kanwar Yatra season, we monitor traffic and diversions to find the fastest route." }
  ];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };

  const routes = [
    { from: "Delhi", distance: "220 km", time: "5-6 hrs", sedan: "₹4,000", suv: "₹6,000", tempo: "₹10,000" },
    { from: "Noida", distance: "235 km", time: "5.5-6.5 hrs", sedan: "₹4,500", suv: "₹6,500", tempo: "₹11,000" },
    { from: "Ghaziabad", distance: "210 km", time: "5-5.5 hrs", sedan: "₹3,800", suv: "₹5,800", tempo: "₹9,500" },
    { from: "Greater Noida", distance: "250 km", time: "6-7 hrs", sedan: "₹4,800", suv: "₹7,000", tempo: "₹11,500" },
  ];

  const safetyFeatures = [
    { icon: Shield, title: "GPS Tracked", desc: "Real-time vehicle tracking for family peace of mind" },
    { icon: Clock, title: "24/7 Helpline", desc: "Emergency assistance throughout the journey" },
    { icon: Users, title: "Verified Drivers", desc: "Background-checked, experienced yatra drivers" },
    { icon: Car, title: "Sanitized Vehicles", desc: "Clean, well-maintained AC vehicles" },
    { icon: Heart, title: "Kanwar Space", desc: "Ample space for kanwars and sacred jal" },
    { icon: Star, title: "Route Knowledge", desc: "Drivers know yatra routes and diversions" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-orange-50/30">

        {/* HERO: Bold Saffron Festival Energy — Layered gradient with Shiva-inspired deep indigo accents */}
        <section className="relative min-h-[85vh] overflow-hidden bg-gradient-to-b from-indigo-950 via-indigo-900 to-orange-900">
          {/* Water/wave pattern overlay */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 20 Q10 10 20 20 Q30 30 40 20\' fill=\'none\' stroke=\'white\' stroke-width=\'1\'/%3E%3C/svg%3E")' }} />
          {/* Glowing orbs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-32 right-10 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl" />
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-amber-400/10 rounded-full blur-2xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-32">
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-2 text-sm">
                <li><Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link></li>
                <ChevronRight className="w-4 h-4 text-white/40" />
                <li><Link href="/religious-tours" className="text-white/60 hover:text-white transition-colors">Religious Tours</Link></li>
                <ChevronRight className="w-4 h-4 text-white/40" />
                <li className="text-orange-300 font-medium">Kanwar Yatra Cab</li>
              </ol>
            </nav>

            <div className="text-center max-w-4xl mx-auto">
              {/* Sacred festival badge */}
              <div className="inline-flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-orange-400/50" />
                <span className="bg-orange-500/20 backdrop-blur-md px-6 py-2.5 rounded-full border border-orange-400/30 text-orange-200 font-bold text-sm tracking-[0.2em] uppercase">
                  Shravan Special 2026 | Har Har Mahadev
                </span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-orange-400/50" />
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.05]">
                Kanwar Yatra<br />
                <span className="text-transparent bg-gradient-to-r from-orange-400 via-amber-300 to-orange-400 bg-clip-text">Cab to Haridwar</span>
              </h1>

              <p className="text-xl md:text-2xl text-indigo-100/70 mb-4 max-w-2xl mx-auto">
                Safe AC <Link href="/outstation-cabs" className="text-orange-300 underline underline-offset-2 hover:text-white transition-colors">outstation cab transport</Link> from Delhi, Noida, Ghaziabad. Midnight departures. <Link href="/safety" className="text-orange-300 underline underline-offset-2 hover:text-white transition-colors">GPS-tracked, verified vehicles</Link> for your sacred yatra.
              </p>

              {/* Price trio */}
              <div className="flex flex-wrap justify-center gap-4 my-10">
                {[
                  { type: "Sedan", price: "₹4,000", sub: "4-Seater AC" },
                  { type: "SUV", price: "₹6,000", sub: "6-Seater AC" },
                  { type: "Tempo", price: "₹10,000", sub: "12-Seater AC" },
                ].map((v, idx) => (
                  <div key={idx} className="bg-white/[0.08] backdrop-blur-xl border border-white/15 rounded-2xl px-6 py-4 min-w-[140px]">
                    <div className="text-white/50 text-xs font-bold uppercase tracking-wider">{v.type}</div>
                    <div className="text-2xl font-black text-white">{v.price}</div>
                    <div className="text-orange-300/70 text-xs">{v.sub}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-orange-950/40 hover:shadow-orange-500/30 hover:scale-[1.02] transition-all">
                  <Phone className="w-5 h-5" />
                  Call Now: 7668570551
                </Link>
                <Link href="https://wa.me/917668570551?text=I want to book Kanwar Yatra cab to Haridwar" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/15 transition-all">
                  WhatsApp Booking
                </Link>
              </div>
            </div>
          </div>

          {/* Trust strip */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-indigo-950/90 via-orange-950/90 to-indigo-950/90 backdrop-blur-xl border-t border-white/10">
            <div className="max-w-6xl mx-auto px-4 py-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Shield, title: "Safe Yatra", desc: "GPS tracking & verified drivers" },
                  { icon: Clock, title: "Night Service", desc: "Depart anytime, even midnight" },
                  { icon: Users, title: "Group Ready", desc: "Tempo Travellers & buses" },
                  { icon: Droplets, title: "Jal Friendly", desc: "Space for kanwar & sacred jal" },
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-white/90">
                    <div className="p-2 bg-orange-500/20 rounded-lg"><feature.icon className="w-5 h-5 text-orange-400" /></div>
                    <div>
                      <div className="font-bold text-sm">{feature.title}</div>
                      <div className="text-xs text-white/40">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SVG Wave divider — Water theme */}
        <div className="relative -mt-1">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full h-16 md:h-20" preserveAspectRatio="none">
            <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="#fffbeb" fillOpacity="0.3" />
            <path d="M0 50C240 90 480 10 720 50C960 90 1200 10 1440 50V80H0V50Z" fill="#fefce8" />
          </svg>
        </div>

        {/* Route Pricing — Bold Table with indigo header accent */}
        <section className="py-16 px-4 bg-gradient-to-b from-orange-50/50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4 border border-indigo-200">
                <MapPin className="w-4 h-4" /> One-Way Rates
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-stone-800">Kanwar Yatra Cab Rates</h2>
              <p className="text-stone-500 mt-2">Transparent pricing from all major NCR cities to Haridwar. See our <Link href="/pricing" className="text-orange-600 hover:underline">fare policy</Link></p>
            </div>

            {/* Card-based route pricing (instead of table for visual uniqueness) */}
            <div className="space-y-4">
              {routes.map((route, idx) => (
                <div key={idx} className="bg-white rounded-2xl shadow-lg border border-stone-100 overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="grid grid-cols-1 md:grid-cols-6 items-center">
                    {/* City name with colored accent */}
                    <div className="md:col-span-1 p-5 md:p-6 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
                      <div className="text-xl font-black">{route.from}</div>
                      <div className="text-indigo-200 text-sm">{route.distance} | {route.time}</div>
                    </div>
                    {/* Price columns */}
                    <div className="md:col-span-5 p-5 md:p-6 grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-stone-400 text-xs font-bold uppercase mb-1">Sedan</div>
                        <div className="text-xl font-black text-orange-600">{route.sedan}</div>
                        <div className="text-stone-400 text-xs">4-seater AC</div>
                      </div>
                      <div className="text-center">
                        <div className="text-stone-400 text-xs font-bold uppercase mb-1">SUV</div>
                        <div className="text-xl font-black text-orange-600">{route.suv}</div>
                        <div className="text-stone-400 text-xs">6-seater AC</div>
                      </div>
                      <div className="text-center">
                        <div className="text-stone-400 text-xs font-bold uppercase mb-1">Tempo 12-Seat</div>
                        <div className="text-xl font-black text-orange-600">{route.tempo}</div>
                        <div className="text-stone-400 text-xs">Group AC</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-stone-400 text-sm mt-6">* Round-trip rates approximately 1.7x one-way. Includes driver wait time in Haridwar. Group discounts available.</p>
          </div>
        </section>

        {/* Safety: Grid with Shiva-indigo accent border */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-stone-800">Safety Features for Kanwar Yatra</h2>
              <p className="text-stone-500 mt-2">Your safety and devotion are our priority. Learn about our <Link href="/safety" className="text-indigo-600 hover:underline">safety standards</Link></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {safetyFeatures.map((feature, idx) => (
                <div key={idx} className="group relative bg-gradient-to-br from-indigo-50/50 to-orange-50/50 rounded-2xl p-6 border border-stone-100 hover:border-indigo-300 transition-all">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-indigo-400 to-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-indigo-100 rounded-xl flex-shrink-0">
                      <feature.icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-stone-800 mb-1">{feature.title}</h3>
                      <p className="text-stone-500 text-sm">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vehicle Options — Horizontal scroll cards with distinct styling per vehicle */}
        <section className="py-16 px-4 bg-gradient-to-b from-white to-orange-50/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-stone-800">Vehicle Options for Kanwar Yatra</h2>
              <p className="text-stone-500 mt-2">From solo to group, we have the right vehicle for your yatra</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { type: "Sedan", sub: "4-Seater", examples: "Swift Dzire, Honda Amaze", best: "Solo or 2-3 kanwariyas", price: "From ₹4,000", features: ["AC vehicle", "Boot space for kanwar", "Comfortable highway ride"], gradient: "from-stone-800 to-stone-700", accent: "stone" },
                { type: "SUV", sub: "6-Seater", examples: "Innova Crysta, Ertiga", best: "Family or 4-6 kanwariyas", price: "From ₹6,000", features: ["Spacious AC vehicle", "Roof carrier for kanwar", "More luggage space"], gradient: "from-indigo-700 to-indigo-600", accent: "indigo" },
                { type: "Tempo Traveller", sub: "12-26 Seats", examples: "Force Tempo, Maharaja", best: "Groups & sangats", price: "From ₹10,000", features: ["AC push-back seats", "Max kanwar space", "Group-friendly"], gradient: "from-orange-600 to-amber-600", accent: "orange", featured: true },
              ].map((vehicle, idx) => (
                <div key={idx} className={`relative rounded-2xl overflow-hidden ${vehicle.featured ? 'ring-2 ring-orange-400 shadow-xl shadow-orange-100' : 'shadow-lg'}`}>
                  {/* Header gradient */}
                  <div className={`bg-gradient-to-r ${vehicle.gradient} p-6 text-white`}>
                    {vehicle.featured && <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold">Best for Groups</div>}
                    <div className="text-2xl font-black">{vehicle.type}</div>
                    <div className="text-white/70 text-sm">{vehicle.sub} | {vehicle.examples}</div>
                    <div className="text-3xl font-black mt-3">{vehicle.price}</div>
                    <div className="text-white/60 text-sm">{vehicle.best}</div>
                  </div>

                  <div className="bg-white p-6">
                    <ul className="space-y-3 mb-6">
                      {vehicle.features.map((f, i) => (
                        <li key={i} className="flex items-center gap-2.5 text-sm text-stone-600">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link href="tel:+917668570551" className={`block text-center px-6 py-3 rounded-xl font-bold transition-all ${vehicle.featured ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-lg' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}`}>
                      Book Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works — Zigzag layout with icons */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-stone-800">How Kanwar Yatra Transport Works</h2>
              <p className="text-stone-500 mt-2">Simple 4-step process for a blessed yatra</p>
            </div>

            <div className="relative">
              {/* Vertical connecting line */}
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-indigo-300 via-orange-300 to-amber-300 -translate-x-1/2" />

              <div className="space-y-8">
                {[
                  { step: 1, title: "Book Your Vehicle", desc: "Call or WhatsApp us with your pickup location, number of kanwariyas, and preferred departure time. We will match you with the right vehicle.", icon: Phone },
                  { step: 2, title: "Midnight/Early Morning Pickup", desc: "Our driver arrives at your doorstep at the scheduled time. Most kanwariyas prefer midnight or early morning departure to reach Haridwar by dawn.", icon: Clock },
                  { step: 3, title: "Safe Drive to Haridwar", desc: "Comfortable AC drive to Haridwar (5-6 hours from Delhi). Driver waits while you collect Ganga jal from Har Ki Pauri or other ghats.", icon: Shield },
                  { step: 4, title: "Return Journey", desc: "After collecting sacred jal, begin the return journey. Driver ensures safe transport of kanwar and jal back to your home or temple.", icon: Heart }
                ].map((item, idx) => (
                  <div key={idx} className={`flex flex-col md:flex-row items-center gap-6 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={`md:w-5/12 ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="bg-white rounded-2xl p-6 shadow-lg border border-stone-100 hover:shadow-xl transition-shadow">
                        <h3 className="text-lg font-black text-stone-800 mb-2">{item.title}</h3>
                        <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>

                    {/* Center circle */}
                    <div className="md:w-2/12 flex justify-center z-10">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-600 to-orange-500 flex items-center justify-center text-white shadow-lg">
                        <item.icon className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="md:w-5/12" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === SEO PROSE: E-E-A-T Rich Content Section === */}
        <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-8">
              Why Triveni Cabs for <span className="text-transparent bg-gradient-to-r from-indigo-600 to-orange-500 bg-clip-text">Kanwar Yatra Transport to Haridwar</span>
            </h2>
            <div className="prose prose-lg max-w-none text-stone-600 space-y-4">
              <p>
                Kanwar Yatra is one of the most sacred pilgrimages in Hinduism — millions of Shiva devotees walk or drive from across North India to collect holy Ganga jal from Haridwar during the month of Shravan. Triveni Cabs has been providing <strong>Kanwar Yatra cab service from Delhi and NCR to Haridwar since 2016</strong>, and we understand the unique needs of kanwariyas — from midnight departures to kanwar-sized vehicle space.
              </p>
              <p>
                With <strong>2,000+ successful Kanwar Yatra trips</strong> completed, our drivers are deeply familiar with the yatra route, the seasonal road diversions imposed by authorities during peak Shravan weeks, and the fastest way to reach Har Ki Pauri ghat for Ganga jal collection. Every vehicle in our Kanwar Yatra fleet is <Link href="/safety" className="text-orange-600 hover:text-indigo-600 underline underline-offset-2">GPS-tracked with real-time monitoring</Link>, and our 24/7 helpline ensures your family knows your location throughout the sacred journey.
              </p>

              <h3 className="text-xl font-bold text-stone-800 mt-8 mb-3">Understanding the Delhi to Haridwar Kanwar Yatra Route</h3>
              <p>
                The standard route from Delhi to Haridwar is 220 km via NH58/NH334 through Meerut, Muzaffarnagar, and Roorkee. During normal conditions, the drive takes 5-6 hours. However, during <strong>peak Kanwar Yatra season</strong> (mid-July to mid-August), traffic management changes significantly. Our drivers monitor real-time traffic updates from the UP and Uttarakhand traffic police to find the fastest available route.
              </p>
              <p>
                Most kanwariyas prefer a <strong>midnight or early morning departure</strong> (11 PM - 3 AM) to reach Haridwar by dawn, collect Ganga jal at sunrise, and begin the return journey early. Our <Link href="/outstation-cabs" className="text-orange-600 hover:text-indigo-600 underline underline-offset-2">outstation cab service</Link> is available 24/7 with no extra night charges — the price you see is the price you pay.
              </p>

              <h3 className="text-xl font-bold text-stone-800 mt-8 mb-3">Group Transport: Tempo Travellers for Kanwar Yatra Sangats</h3>
              <p>
                For group pilgrimages (sangats), we offer 12-seater, 17-seater, and 26-seater <Link href="/tempo-traveller" className="text-orange-600 hover:text-indigo-600 underline underline-offset-2">Tempo Travellers</Link> with AC, push-back seats, and dedicated roof/boot space for kanwars. Group discounts of 10-15% apply when booking 3 or more vehicles. Our <Link href="/pricing" className="text-orange-600 hover:text-indigo-600 underline underline-offset-2">transparent pricing</Link> includes fuel, tolls, and driver wait time in Haridwar.
              </p>
              <p>
                We also accommodate special requirements — vehicles with extra roof carriers for tall kanwars, early morning pickup from Ghaziabad and Greater Noida industrial areas, and coordinated departure for multiple vehicles from the same locality. Our dispatch team at 366 Dandupura, Agra coordinates all logistics so you can focus on your devotion.
              </p>

              <h3 className="text-xl font-bold text-stone-800 mt-8 mb-3">Safety Is Non-Negotiable on Yatra Routes</h3>
              <p>
                The Kanwar Yatra route sees heavy traffic during Shravan, and safety is our top priority. All our vehicles undergo a pre-trip safety check before every yatra departure — tires, brakes, AC, and engine health are verified. Drivers are experienced, background-verified professionals who have completed defensive driving training. We carry a first-aid kit and maintain a direct line to emergency services along the route.
              </p>
              <p>
                Book your <strong>Kanwar Yatra cab to Haridwar</strong> by calling <strong>7668570551</strong> or WhatsApp us with your group size and preferred departure time. Read our <Link href="/reviews" className="text-orange-600 hover:text-indigo-600 underline underline-offset-2">customer reviews</Link> — we are rated 4.8/5 by thousands of kanwariyas. Har Har Mahadev!
              </p>
            </div>
          </div>
        </section>

        {/* FAQ with indigo/orange alternating accent */}
        <section className="py-16 px-4 bg-gradient-to-b from-white to-stone-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-stone-800">Kanwar Yatra Cab FAQs</h2>
              <p className="text-stone-500 mt-2">Common questions about Kanwar Yatra transport</p>
            </div>

            <div className="space-y-3">
              {faqData.map((faq, idx) => (
                <details key={idx} className="group rounded-xl border border-stone-200 overflow-hidden hover:border-orange-300 transition-colors">
                  <summary className="p-5 cursor-pointer font-bold text-stone-800 flex justify-between items-center bg-white hover:bg-orange-50/50 transition-colors">
                    <span className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-sm font-black flex-shrink-0 ${idx % 2 === 0 ? 'bg-indigo-100 text-indigo-600' : 'bg-orange-100 text-orange-600'}`}>{idx + 1}</span>
                      {faq.question}
                    </span>
                    <ChevronRight className="w-5 h-5 text-orange-500 group-open:rotate-90 transition-transform flex-shrink-0 ml-2" />
                  </summary>
                  <div className="px-5 pb-5 pt-0 text-stone-600 border-t border-stone-100">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* === INTERLINKS: Pilgrimage Tours + Cross-Category === */}
        <section className="py-16 px-4 bg-gradient-to-b from-stone-50 to-orange-50/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-8 text-center">Explore More Pilgrimage Tours</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { href: "/religious-tours/haridwar-rishikesh-ganga-darshan", title: "Haridwar-Rishikesh Tour", sub: "Complete Ganga darshan package", price: "₹5,500" },
                { href: "/religious-tours/char-dham-yatra", title: "Char Dham Yatra", sub: "Ultimate Himalayan pilgrimage", price: "₹22,000" },
                { href: "/uttarakhand-spiritual-circuit-tour", title: "Uttarakhand Spiritual Circuit", sub: "Haridwar, Rishikesh & hill temples", price: "₹12,000" },
              ].map((link, idx) => (
                <Link key={idx} href={link.href} className="group relative bg-white rounded-2xl p-6 shadow-lg border-2 border-orange-100 hover:border-orange-400 transition-all duration-300 hover:shadow-xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-orange-100 to-transparent rounded-bl-3xl" />
                  <div className="relative">
                    <h3 className="font-bold text-stone-900 mb-1 text-lg">{link.title}</h3>
                    <p className="text-stone-500 text-sm mb-3">{link.sub}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-black text-orange-600">From {link.price}</span>
                      <ArrowRight className="w-5 h-5 text-orange-500 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Cross-Category: Related Services */}
            <h3 className="text-xl font-bold text-stone-800 mb-6 text-center">Related Services You May Need</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {[
                { href: "/religious-tours", title: "All Religious Tours", desc: "Char Dham, Vaishno Devi, Kashi & 10+ pilgrimages" },
                { href: "/ayodhya-ram-mandir-tour-from-delhi", title: "Ayodhya Ram Mandir from Delhi", desc: "530 km pilgrimage to Lord Ram's birthplace" },
                { href: "/prayagraj-sangam-tour", title: "Prayagraj Sangam Tour", desc: "Sacred Triveni Sangam confluence pilgrimage" },
                { href: "/sightseeing/haridwar", title: "Haridwar Sightseeing Tour", desc: "Ganga Aarti, Har Ki Pauri & Mansa Devi darshan" },
                { href: "/outstation-cabs", title: "Outstation Cab Service", desc: "Delhi/NCR to anywhere in North India" },
                { href: "/tempo-traveller", title: "Tempo Traveller Rental", desc: "12-26 seater for group pilgrimages" },
                { href: "/delhi", title: "Delhi City Cab Service", desc: "Local taxi, sightseeing & all Delhi services" },
                { href: "/reviews", title: "Customer Reviews", desc: "See what 15,000+ pilgrims say about us" },
                { href: "/safety", title: "Our Safety Standards", desc: "GPS tracking, verified drivers, 24/7 support" },
              ].map((item, idx) => (
                <Link key={idx} href={item.href} className="group bg-white rounded-xl p-4 shadow-sm border border-orange-100 hover:border-orange-300 hover:shadow-md transition-all">
                  <h4 className="font-bold text-stone-800 text-sm mb-1 group-hover:text-orange-600 transition-colors">{item.title}</h4>
                  <p className="text-stone-500 text-xs">{item.desc}</p>
                </Link>
              ))}
            </div>

            {/* Geographic Cluster: Nearby Pilgrimages */}
            <h3 className="text-xl font-bold text-stone-800 mb-6 text-center">Nearby Pilgrimage Destinations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
              {[
                { href: "/religious-tours/haridwar-rishikesh-ganga-darshan", label: "Haridwar-Rishikesh Tour" },
                { href: "/religious-tours/char-dham-yatra", label: "Char Dham Yatra" },
                { href: "/religious-tours/vaishno-devi-yatra", label: "Vaishno Devi Yatra" },
                { href: "/religious-tours/nau-devi-tour", label: "Nau Devi Tour" },
                { href: "/religious-tours/mathura-vrindavan-barsana-tour", label: "Mathura Vrindavan Tour" },
                { href: "/ayodhya-ram-mandir-tour-from-delhi", label: "Ayodhya Ram Mandir Tour" },
                { href: "/prayagraj-sangam-tour", label: "Prayagraj Sangam Tour" },
                { href: "/religious-tours/kashi-vishwanath-darshan", label: "Kashi Vishwanath Darshan" },
              ].map((item, idx) => (
                <Link key={idx} href={item.href} className="text-sm text-orange-700 bg-orange-50 hover:bg-orange-100 px-3 py-2 rounded-lg text-center font-medium transition-colors border border-orange-100">
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Popular Links Grid */}
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
              <h3 className="text-lg font-bold text-stone-800 mb-6">Popular Links</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-bold text-stone-700 text-sm mb-3 uppercase tracking-wider">Popular Routes</h4>
                  <ul className="space-y-1.5">
                    {[
                      { href: "/delhi-to-haridwar", label: "Delhi to Haridwar Cab" },
                      { href: "/delhi-to-manali", label: "Delhi to Manali Cab" },
                      { href: "/delhi-to-shimla", label: "Delhi to Shimla Cab" },
                      { href: "/delhi-to-agra", label: "Delhi to Agra Cab" },
                      { href: "/delhi-to-jaipur", label: "Delhi to Jaipur Cab" },
                      { href: "/delhi-to-chandigarh", label: "Delhi to Chandigarh" },
                      { href: "/delhi-to-lucknow", label: "Delhi to Lucknow" },
                      { href: "/delhi-to-varanasi", label: "Delhi to Varanasi" },
                    ].map((r, i) => (
                      <li key={i}><Link href={r.href} className="text-sm text-stone-600 hover:text-orange-600 transition-colors">{r.label}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-stone-700 text-sm mb-3 uppercase tracking-wider">Popular Cities</h4>
                  <ul className="space-y-1.5">
                    {[
                      { href: "/delhi", label: "Delhi" },
                      { href: "/agra", label: "Agra" },
                      { href: "/jaipur", label: "Jaipur" },
                      { href: "/chandigarh", label: "Chandigarh" },
                      { href: "/haridwar", label: "Haridwar" },
                      { href: "/varanasi", label: "Varanasi" },
                      { href: "/lucknow", label: "Lucknow" },
                      { href: "/mathura", label: "Mathura" },
                    ].map((c, i) => (
                      <li key={i}><Link href={c.href} className="text-sm text-stone-600 hover:text-orange-600 transition-colors">{c.label}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-stone-700 text-sm mb-3 uppercase tracking-wider">Popular Tours</h4>
                  <ul className="space-y-1.5">
                    {[
                      { href: "/same-day-taj-mahal-tour", label: "Same-Day Taj Mahal Tour" },
                      { href: "/taj-mahal-tour-from-delhi", label: "Taj Mahal from Delhi" },
                      { href: "/golden-triangle-english-speaking-driver", label: "Golden Triangle Tour" },
                      { href: "/uttarakhand-spiritual-circuit-tour", label: "Uttarakhand Spiritual Tour" },
                      { href: "/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur", label: "Rajasthan Road Trip" },
                      { href: "/weekend-getaways-from-delhi-by-car", label: "Weekend Getaways Delhi" },
                    ].map((t, i) => (
                      <li key={i}><Link href={t.href} className="text-sm text-stone-600 hover:text-orange-600 transition-colors">{t.label}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-stone-700 text-sm mb-3 uppercase tracking-wider">Services</h4>
                  <ul className="space-y-1.5">
                    {[
                      { href: "/outstation-cabs", label: "Outstation Cabs" },
                      { href: "/local-taxi", label: "Local Taxi Service" },
                      { href: "/one-way-cab", label: "One-Way Cab" },
                      { href: "/round-trip-cab", label: "Round-Trip Cab" },
                      { href: "/airport-service", label: "Airport Transfers" },
                      { href: "/wedding", label: "Wedding Car Rental" },
                      { href: "/corporate-transportation-service", label: "Corporate Transport" },
                      { href: "/tempo-traveller", label: "Tempo Traveller" },
                    ].map((s, i) => (
                      <li key={i}><Link href={s.href} className="text-sm text-stone-600 hover:text-orange-600 transition-colors">{s.label}</Link></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA: Dramatic indigo-to-saffron gradient with water wave accents */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-indigo-900 via-indigo-800 to-orange-700">
          {/* Decorative waves */}
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 30 Q15 15 30 30 Q45 45 60 30\' fill=\'none\' stroke=\'white\' stroke-width=\'1.5\'/%3E%3C/svg%3E")' }} />
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" className="w-full h-12" preserveAspectRatio="none">
              <path d="M0 30C360 60 720 0 1080 30C1260 45 1380 20 1440 30V60H0V30Z" fill="white" fillOpacity="0.05" />
            </svg>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-block bg-white/10 backdrop-blur-xl border border-white/15 rounded-full px-5 py-2 mb-6">
              <span className="text-orange-200 font-bold text-sm">Har Har Mahadev!</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Book Your Kanwar Yatra Cab</h2>
            <p className="text-indigo-200 mb-10 text-lg max-w-xl mx-auto">Safe and blessed transport for your sacred Kanwar Yatra to Haridwar</p>

            {/* Dual price display */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl px-8 py-5">
                <div className="text-white/50 text-xs font-bold uppercase">Sedan from</div>
                <div className="text-3xl font-black text-white">₹4,000</div>
                <div className="text-orange-300 text-xs">Delhi to Haridwar</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl px-8 py-5">
                <div className="text-white/50 text-xs font-bold uppercase">Group from</div>
                <div className="text-3xl font-black text-white">₹10,000</div>
                <div className="text-orange-300 text-xs">12-Seater Tempo</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-indigo-700 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-[1.02] transition-all">
                <Phone className="w-5 h-5" />
                Call: +91 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to book Kanwar Yatra cab to Haridwar" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/25 hover:bg-white/15 transition-all">
                WhatsApp Booking
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
