import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, IndianRupee, Route, Camera } from '@/components/ui/icons';

export const metadata = {
  title: 'Taj Mahal Tour from Delhi by Car | ₹4,500 | 2026',
  description: 'Private car tour from Delhi to Taj Mahal. Yamuna Expressway, 3-3.5 hrs. Sedan ₹4,500, SUV ₹6,500. Multiple itinerary options. Call 7668570551.',
  keywords: 'taj mahal tour from delhi, delhi to taj mahal by car, private car taj mahal delhi, delhi to agra expressway tour, taj mahal private tour',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/taj-mahal-tour-from-delhi' },
  openGraph: {
    title: 'Taj Mahal Tour from Delhi | Private Car ₹4,500 | Yamuna Expressway',
    description: 'Book a private car from Delhi to Taj Mahal. 3-hour Yamuna Expressway route. Multiple itinerary options. 5000+ happy customers.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/taj-mahal-tour-from-delhi',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/taj-mahal-hero.jpg', width: 1200, height: 630, alt: 'Taj Mahal Tour from Delhi by Private Car' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taj Mahal Tour from Delhi | Private Car ₹4,500',
    description: 'Delhi to Taj Mahal private car tour. Yamuna Expressway route, 3 hours. Book now!',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/taj-mahal-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function TajMahalTourFromDelhiPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Taj Mahal Tour from Delhi", "item": "https://www.trivenicabs.in/taj-mahal-tour-from-delhi" },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Taj Mahal Tour from Delhi by Private Car",
    "description": "Private car tour from Delhi to Taj Mahal via Yamuna Expressway. Multiple itinerary options including Taj only, Taj + Agra Fort, and Full Agra tour.",
    "touristType": "Cultural Tourist",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" },
    },
    "offers": { "@type": "AggregateOffer", "lowPrice": "4500", "highPrice": "12000", "priceCurrency": "INR" },
  };

  const faqData = [
    { question: "How long does it take to drive from Delhi to Taj Mahal?", answer: "Via the Yamuna Expressway, it takes 3-3.5 hours (233 km). The old NH-2 route takes 4-5 hours. We always use the Yamuna Expressway for the fastest and smoothest ride. Early morning (5-6 AM) departures face minimal traffic." },
    { question: "What is the best route from Delhi to Agra?", answer: "The Yamuna Expressway is the best route: 165 km of 6-lane toll expressway, well-maintained, with rest stops and 24/7 patrol. It connects Noida (Greater Noida) to Agra. We take the remaining ~68 km on city roads in Delhi and Agra." },
    { question: "What are the itinerary options for a Delhi to Taj Mahal tour?", answer: "Option 1: Taj Only (5-6 hours in Agra). Option 2: Taj + Agra Fort (7-8 hours). Option 3: Full Agra -- Taj + Fort + Baby Taj + Mehtab Bagh (10-12 hours). Option 4: Agra + Fatehpur Sikri (12-14 hours, extra ₹800). We customize based on your time." },
    { question: "Which vehicle should I choose for the Delhi-Agra trip?", answer: "Sedan (Swift Dzire/Honda Amaze): Best for 1-3 passengers, most economical at ₹4,500. SUV (Innova/Ertiga): Best for 4-6 passengers or those wanting more space at ₹6,500. Tempo Traveller: For groups of 8-15 at ₹12,000." },
    { question: "Can you pick me up from Delhi Airport?", answer: "Yes! We pick up from any location in Delhi -- airport (T1, T2, T3), railway station (New Delhi, Old Delhi, Nizamuddin), hotel, or any address. Airport pickups include meet & greet with a name board at the arrival gate." },
    { question: "Are toll charges included in the fare?", answer: "Yes, all toll charges on the Yamuna Expressway (₹700-800 return) are included in our quoted fare. Parking at monuments is also included. You pay nothing extra except monument entry tickets and meals." },
    { question: "What if I want to return the same day?", answer: "Our same-day tour is specifically designed for this. Depart Delhi at 5-6 AM, spend the day in Agra, and return by 7-9 PM. The driver waits for you all day. There are no per-hour charges -- it is a fixed fare for the entire trip." },
    { question: "Is it safe to drive Delhi to Agra at night or early morning?", answer: "The Yamuna Expressway is one of India's safest highways with 24/7 highway patrol, CCTV surveillance, emergency phones every 5 km, well-lit toll plazas, and regular police checkpoints. Our experienced drivers make this trip daily." },
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

  const routeStops = [
    { name: "Your Delhi Location", km: "0 km", desc: "Pickup from hotel, airport, or any address. Our driver arrives 15 minutes early.", time: "5:00 AM" },
    { name: "Noida / Greater Noida", km: "25 km", desc: "Enter the Yamuna Expressway at Greater Noida toll plaza.", time: "5:30 AM" },
    { name: "Expressway Rest Stop", km: "110 km", desc: "Optional tea/breakfast break at a highway restaurant. Clean washrooms available.", time: "6:30 AM" },
    { name: "Agra Toll Exit", km: "190 km", desc: "Exit Yamuna Expressway. Enter Agra city limits.", time: "7:30 AM" },
    { name: "Taj Mahal East Gate", km: "233 km", desc: "Arrive at the Taj. Driver drops you at East Gate (shortest queue).", time: "8:00 AM" },
  ];

  const itineraryOptions = [
    { title: "Taj Only Express", duration: "5-6 hrs in Agra", places: ["Taj Mahal (2-3 hrs)", "Quick Petha shopping"], best: "Short on time or second visit to Agra", color: "from-amber-400 to-yellow-400" },
    { title: "Taj + Fort Classic", duration: "7-8 hrs in Agra", places: ["Taj Mahal (2 hrs)", "Agra Fort (1.5 hrs)", "Lunch break", "Petha shopping"], best: "First-time visitors wanting the essentials", color: "from-emerald-400 to-teal-400" },
    { title: "Full Agra Experience", duration: "10-12 hrs in Agra", places: ["Taj Mahal (2 hrs)", "Agra Fort (1.5 hrs)", "Lunch", "Baby Taj (45 min)", "Mehtab Bagh (30 min)", "Shopping"], best: "Those who want to see everything", color: "from-violet-400 to-purple-400" },
  ];

  const vehicleOptions = [
    { type: "Sedan", model: "Swift Dzire / Honda Amaze", passengers: "1-4", price: "4,500", features: ["AC sedan", "Comfortable boot space", "Best for couples/small families"], recommended: false },
    { type: "SUV", model: "Innova / Ertiga", passengers: "4-7", price: "6,500", features: ["Spacious AC SUV", "Large luggage space", "Best for families/groups"], recommended: true },
    { type: "Premium", model: "Innova Crysta / Similar", passengers: "4-7", price: "8,500", features: ["Premium AC SUV", "Captain seats", "Best for comfort seekers"], recommended: false },
    { type: "Tempo Traveller", model: "Force Tempo Traveller", passengers: "8-16", price: "12,000", features: ["AC mini-bus", "Pushback seats", "Best for large groups"], recommended: false },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-stone-50">

        {/* === HERO: Route Map Journey Design === */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-amber-950 to-stone-950" />

          {/* Road/Route Pattern */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cline x1=\'50\' y1=\'0\' x2=\'50\' y2=\'100\' stroke=\'%23fbbf24\' stroke-width=\'2\' stroke-dasharray=\'8,12\'/%3E%3C/svg%3E")' }} />

          {/* Decorative dots grid */}
          <div className="absolute top-[10%] left-[5%] w-64 h-64 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #d4a373 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
          <div className="absolute bottom-[10%] right-[5%] w-48 h-48 opacity-15" style={{ backgroundImage: 'radial-gradient(circle, #d4a373 1px, transparent 1px)', backgroundSize: '16px 16px' }} />

          {/* Glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-amber-500/8 rounded-full blur-[150px]" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            {/* Route Badge */}
            <div className="inline-flex items-center gap-3 bg-amber-900/30 backdrop-blur-xl border border-amber-400/20 rounded-full px-6 py-3 mb-8">
              <Route className="w-5 h-5 text-amber-300" />
              <span className="text-amber-200 font-medium">Delhi</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-amber-400/50" />
                <div className="w-8 h-px bg-amber-400/30" />
                <div className="w-2 h-2 rounded-full bg-amber-400/50" />
                <div className="w-8 h-px bg-amber-400/30" />
                <div className="w-2 h-2 rounded-full bg-amber-400/50" />
              </div>
              <span className="text-amber-200 font-medium">Agra</span>
              <span className="text-stone-500 text-sm ml-2">233 km</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[0.9]">
              Delhi to
              <span className="block text-transparent bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text">Taj Mahal</span>
              <span className="block text-3xl md:text-4xl font-light text-stone-400 mt-3">by Private Car</span>
            </h1>

            <p className="text-stone-400 text-lg mb-8 max-w-2xl mx-auto">
              3-hour scenic drive on Yamuna Expressway. Your personal driver, your pace, your itinerary. From ₹4,500 all-inclusive.
            </p>

            {/* Route Stats Bar */}
            <div className="inline-flex flex-wrap justify-center items-center gap-1 bg-white/5 backdrop-blur-xl rounded-2xl p-2 mb-10 border border-white/10">
              {[
                { label: "Distance", value: "233 km" },
                { label: "Drive Time", value: "3 hrs" },
                { label: "Expressway", value: "165 km" },
                { label: "Starting", value: "₹4,500" },
              ].map((s, i) => (
                <div key={i} className="px-5 py-3 text-center">
                  <div className="text-lg font-bold text-amber-300">{s.value}</div>
                  <div className="text-xs text-stone-500">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-stone-900 px-8 py-4 rounded-full font-bold text-lg shadow-2xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 transition-all">
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to book Delhi to Taj Mahal tour" className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl text-white px-8 py-4 rounded-full font-bold border border-amber-400/20 hover:bg-white/10 transition-all">
                WhatsApp Booking <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Wave Bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-14">
              <path d="M0 60 L0 20 Q360 50 720 20 Q1080 -10 1440 20 L1440 60Z" fill="#fafaf9" />
            </svg>
          </div>
        </section>

        {/* === TRUST STRIP === */}
        <section className="py-6 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8">
            {[
              { icon: Shield, label: "GPS Tracked", sub: "Real-time safety" },
              { icon: Star, label: "4.9 Rating", sub: "Google verified" },
              { icon: Users, label: "5000+ Trips", sub: "Delhi-Agra route" },
              { icon: Clock, label: "On Time", sub: "99.5% record" },
            ].map((t, i) => (
              <div key={i} className="flex items-center gap-3">
                <t.icon className="w-5 h-5 text-amber-500" />
                <div>
                  <div className="font-bold text-stone-800 text-sm">{t.label}</div>
                  <div className="text-xs text-stone-400">{t.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* === ROUTE MAP: Vertical Step Journey === */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Your Journey</div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-3">
                Delhi to Agra <span className="text-transparent bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text">Route Map</span>
              </h2>
              <p className="text-stone-500">Via the 6-lane Yamuna Expressway -- the fastest route</p>
            </div>

            <div className="relative">
              {/* Vertical Road Line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 via-amber-300 to-amber-500 rounded-full" />

              <div className="space-y-8">
                {routeStops.map((stop, i) => (
                  <div key={i} className="relative flex gap-6 md:gap-8">
                    {/* Stop Marker */}
                    <div className="relative z-10 shrink-0">
                      <div className={`w-12 h-12 md:w-16 md:h-16 rounded-2xl ${i === 0 ? 'bg-gradient-to-br from-emerald-400 to-green-500' : i === routeStops.length - 1 ? 'bg-gradient-to-br from-amber-400 to-yellow-500' : 'bg-white border-2 border-amber-300'} flex items-center justify-center shadow-lg`}>
                        {i === 0 ? <MapPin className="w-5 h-5 md:w-6 md:h-6 text-white" /> : i === routeStops.length - 1 ? <Camera className="w-5 h-5 md:w-6 md:h-6 text-stone-900" /> : <span className="text-amber-700 font-black text-sm">{stop.km}</span>}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-stone-100 flex-1 hover:shadow-md transition-shadow">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-lg font-bold text-stone-900">{stop.name}</h3>
                        <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">{stop.time}</span>
                      </div>
                      <p className="text-stone-500 text-sm">{stop.desc}</p>
                      {i === 0 && <div className="mt-2 text-xs text-emerald-600 font-semibold">START POINT</div>}
                      {i === routeStops.length - 1 && <div className="mt-2 text-xs text-amber-600 font-semibold">DESTINATION</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === ITINERARY OPTIONS: Three Gradient Cards === */}
        <section className="py-20 px-4 bg-gradient-to-br from-amber-50 via-stone-50 to-yellow-50/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Choose Your Experience</div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-3">
                3 Itinerary <span className="text-transparent bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text">Options</span>
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto">From a quick Taj visit to a full Agra exploration -- choose based on your time and interest</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {itineraryOptions.map((opt, i) => (
                <div key={i} className="group relative bg-white rounded-3xl overflow-hidden border border-stone-100 shadow-sm hover:shadow-xl transition-all">
                  {/* Gradient Header */}
                  <div className={`bg-gradient-to-r ${opt.color} p-6`}>
                    <div className="text-white/80 text-sm font-semibold mb-1">Option {i + 1}</div>
                    <h3 className="text-2xl font-bold text-white">{opt.title}</h3>
                    <div className="text-white/70 text-sm mt-1">{opt.duration}</div>
                  </div>
                  <div className="p-6">
                    <div className="space-y-2 mb-5">
                      {opt.places.map((place, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                          <span className="text-stone-600 text-sm">{place}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-amber-50 rounded-xl p-3 text-sm">
                      <span className="text-amber-800 font-semibold">Best for: </span>
                      <span className="text-stone-600">{opt.best}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === OVERVIEW === */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wider uppercase">About This Tour</div>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8 leading-tight">
              Why Book a <span className="text-transparent bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text">Private Car</span> from Delhi?
            </h2>
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-5 text-stone-600 text-lg leading-relaxed">
                <p>
                  The <strong className="text-stone-800">Taj Mahal tour from Delhi by car</strong> is the most flexible and convenient way to visit Agra. Unlike trains (fixed schedules), tour buses (rushed itineraries), or self-drive (tiring after a long day of sightseeing), a private car with driver gives you complete freedom.
                </p>
                <p>
                  The journey via <strong className="text-stone-800">Yamuna Expressway</strong> is smooth and scenic -- a 165 km, 6-lane expressway that cuts travel time to just 3 hours. Our drivers make this trip daily and know every rest stop, shortcut, and the best entry points in Agra.
                </p>
                <p>
                  Being an <strong className="text-stone-800">Agra-based company</strong>, we offer genuine local expertise. Your driver doubles as an informal guide, suggesting the best photography spots, authentic restaurants, and genuine marble inlay shops.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Car, title: "Door to Door", desc: "Picked up and dropped at your exact location in Delhi" },
                  { icon: Clock, title: "Your Schedule", desc: "Start anytime, stay as long as you want at each stop" },
                  { icon: Route, title: "Fastest Route", desc: "Yamuna Expressway -- 3 hours, not 5 like old NH-2" },
                  { icon: MapPin, title: "Local Expertise", desc: "Agra-based drivers who know every shortcut" },
                  { icon: Shield, title: "All Inclusive", desc: "Tolls, parking, driver allowance -- no surprises" },
                  { icon: Star, title: "5000+ Trips", desc: "Trusted by thousands on this exact route" },
                ].map((f, i) => (
                  <div key={i} className="bg-stone-50 rounded-2xl p-5 border border-stone-100">
                    <f.icon className="w-6 h-6 text-amber-500 mb-3" />
                    <div className="font-bold text-stone-800 text-sm mb-1">{f.title}</div>
                    <div className="text-stone-500 text-xs">{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === VEHICLE OPTIONS: Neumorphic Cards === */}
        <section className="py-20 px-4 bg-stone-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Choose Your Ride</div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-3">
                Vehicle <span className="text-transparent bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text">Options & Pricing</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {vehicleOptions.map((v, i) => (
                <div key={i} className={`relative rounded-3xl p-6 ${v.recommended ? 'bg-gradient-to-br from-amber-500 to-yellow-400 text-stone-900 shadow-2xl shadow-amber-500/30 scale-105' : 'bg-white shadow-lg shadow-stone-200/50 border border-stone-100'} transition-all hover:scale-[1.02]`}>
                  {v.recommended && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-stone-900 text-amber-300 text-xs font-bold px-4 py-1 rounded-full">MOST POPULAR</div>
                  )}
                  <div className={`text-sm font-semibold mb-1 ${v.recommended ? 'text-stone-800' : 'text-stone-400'}`}>{v.type}</div>
                  <div className={`text-xs mb-4 ${v.recommended ? 'text-stone-700' : 'text-stone-500'}`}>{v.model}</div>
                  <div className={`text-4xl font-black mb-1 ${v.recommended ? 'text-stone-900' : 'text-stone-900'}`}>₹{v.price}</div>
                  <div className={`text-sm mb-5 ${v.recommended ? 'text-stone-700' : 'text-stone-500'}`}>{v.passengers} passengers</div>
                  <div className="space-y-2 mb-6">
                    {v.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <CheckCircle2 className={`w-4 h-4 shrink-0 ${v.recommended ? 'text-stone-800' : 'text-amber-500'}`} />
                        <span className={`text-sm ${v.recommended ? 'text-stone-800' : 'text-stone-600'}`}>{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link href="tel:+917668570551" className={`block text-center py-3 rounded-xl font-bold text-sm ${v.recommended ? 'bg-stone-900 text-amber-300 hover:bg-stone-800' : 'bg-amber-50 text-amber-700 hover:bg-amber-100'} transition-all`}>
                    <Phone className="w-4 h-4 inline mr-1" /> Book {v.type}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === FAQs: Alternating Side Cards === */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Got Questions?</div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900">
                Frequently Asked <span className="text-transparent bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text">Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, i) => (
                <div key={i} className={`bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow ${i % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-400 flex items-center justify-center shrink-0">
                      <span className="text-stone-900 font-black text-sm">{i + 1}</span>
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
        <section className="py-20 px-4 bg-stone-100/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-900 text-center mb-10">
              Related <span className="text-transparent bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text">Agra Tours</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { title: "Same Day Agra Tour", href: "/same-day-agra-tour-from-delhi" },
                { title: "Same Day Taj Mahal Tour", href: "/same-day-taj-mahal-tour" },
                { title: "Sunrise Taj Tour", href: "/sunrise-taj-mahal-tour-from-delhi" },
                { title: "Moonlight Taj Tour", href: "/moonlight-taj-mahal-tour" },
                { title: "Delhi Airport to Agra", href: "/delhi-airport-to-agra-taxi" },
                { title: "Agra Day Trip Guide", href: "/agra-day-trip-from-delhi" },
                { title: "Agra Food Tour", href: "/agra-food-tour" },
                { title: "Agra Shopping Guide", href: "/agra-shopping-guide" },
                { title: "Agra Beyond Taj", href: "/agra-beyond-taj-mahal" },
                { title: "Agra Travel Guide", href: "/agra-travel-guide" },
                { title: "Private Taj Tour", href: "/taj-mahal-private-tour-from-delhi" },
                { title: "Agra Sightseeing", href: "/sightseeing/agra" },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group bg-white rounded-xl p-4 border border-stone-100 hover:border-amber-200 shadow-sm hover:shadow-md transition-all text-center">
                  <h3 className="font-bold text-stone-800 text-sm group-hover:text-amber-700 transition-colors">{link.title}</h3>
                  <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-amber-500 mx-auto mt-2 transition-colors" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* === CTA: Road-Themed Banner === */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cline x1=\'50\' y1=\'0\' x2=\'50\' y2=\'100\' stroke=\'%23fbbf24\' stroke-width=\'2\' stroke-dasharray=\'8,12\'/%3E%3C/svg%3E")' }} />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-[120px]" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <Route className="w-12 h-12 text-amber-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Delhi to Taj Mahal
            </h2>
            <p className="text-2xl text-transparent bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text font-bold mb-3">
              3 Hours. One Unforgettable Day.
            </p>
            <p className="text-stone-400 text-lg mb-8 max-w-xl mx-auto">
              Book your private car now. Sedan from ₹4,500, SUV from ₹6,500. All tolls and parking included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-stone-900 px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-amber-500/30 hover:scale-105 transition-all">
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I need a Delhi to Taj Mahal car" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl text-white px-10 py-5 rounded-full font-bold text-lg border border-amber-400/20 hover:bg-white/20 transition-all">
                WhatsApp Booking
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <nav className="py-4 px-4 bg-stone-100 border-t border-stone-200">
          <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-stone-500">
            <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-stone-800 font-medium">Taj Mahal Tour from Delhi</span>
          </div>
        </nav>

      </div>
    </>
  );
}
