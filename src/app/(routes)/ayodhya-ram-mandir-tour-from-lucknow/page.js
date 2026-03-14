import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, Calendar, Heart, Sparkles, Navigation, Zap } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Ayodhya Ram Mandir Tour from Lucknow | Sedan ₹3,500 | Same-Day Possible',
  description: 'Book Ayodhya Ram Mandir tour from Lucknow. Just 135km, 2.5-3 hrs drive. Sedan ₹3,500, SUV ₹5,000. Same-day return or overnight. Call 7668570551.',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/ayodhya-ram-mandir-tour-from-lucknow' },
  openGraph: {
    title: 'Lucknow to Ayodhya Ram Mandir Tour | Same-Day from ₹3,500',
    description: 'Lucknow to Ayodhya cab. Just 135km, 2.5 hrs. Sedan ₹3,500, SUV ₹5,000. Same-day return feasible. Darshan assistance included.',
    type: 'website', locale: 'en_IN',
    url: 'https://www.trivenicabs.in/ayodhya-ram-mandir-tour-from-lucknow',
    siteName: 'Triveni Cabs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucknow to Ayodhya Ram Mandir | From ₹3,500',
    description: 'Shortest route to Ayodhya. Same-day possible. AC cab from ₹3,500.',
    site: '@trivenicabs',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function AyodhyaRamMandirTourFromLucknow() {
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    "serviceType": "Lucknow to Ayodhya Ram Mandir Tour",
    "name": "Ayodhya Ram Mandir Tour from Lucknow",
    "description": "Cab service from Lucknow to Ayodhya for Ram Mandir darshan. Just 135km, same-day return feasible.",
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "email": "cabstriveni@gmail.com", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } },
    "areaServed": { "@type": "City", "name": "Lucknow" },
    "offers": [
      { "@type": "Offer", "name": "Sedan Same-Day", "price": "3500", "priceCurrency": "INR" },
      { "@type": "Offer", "name": "SUV Same-Day", "price": "5000", "priceCurrency": "INR" }
    ]
  };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
    { "@type": "ListItem", "position": 2, "name": "Religious Tours", "item": "https://www.trivenicabs.in/religious-tours" },
    { "@type": "ListItem", "position": 3, "name": "Ayodhya Ram Mandir Tour from Lucknow", "item": "https://www.trivenicabs.in/ayodhya-ram-mandir-tour-from-lucknow" }
  ]};
  const touristTripSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": "Lucknow to Ayodhya Ram Mandir Tour", "description": "Quick pilgrimage from Lucknow to Ayodhya Ram Mandir. Just 135km, same-day return feasible.", "touristType": "Religious Pilgrimage" };

  const faqData = [
    { question: "How far is Ayodhya from Lucknow?", answer: "Ayodhya is just 135 km from Lucknow by road, taking approximately 2.5-3 hours via NH27. This is the shortest major city route to Ayodhya, making same-day return trips easily feasible." },
    { question: "Can I do a same-day Lucknow to Ayodhya trip?", answer: "Yes! A same-day return trip from Lucknow to Ayodhya is very practical. Leave Lucknow at 5-6 AM, reach Ayodhya by 8-9 AM, complete darshan by 2-3 PM, and return to Lucknow by 5-6 PM. Our same-day package starts at ₹3,500 for a sedan." },
    { question: "What is the cab fare from Lucknow to Ayodhya?", answer: "Sedan cab (Swift Dzire) starts at ₹3,500 and SUV (Innova/Ertiga) starts at ₹5,000 for a same-day return. Overnight packages start at ₹4,500 (sedan) and ₹6,500 (SUV). All fares include fuel, driver, and tolls." },
    { question: "What is the best route from Lucknow to Ayodhya?", answer: "The direct route via NH27 (Lucknow-Faizabad Highway) is 135 km and takes 2.5-3 hours. The road is well-maintained with good dhabas en route. Our drivers know the fastest routes and best stops." },
    { question: "What are the Ram Mandir darshan timings?", answer: "Shri Ram Mandir is open from 7:00 AM to 11:30 AM and 2:00 PM to 7:00 PM. Aarti at 6:00 AM, 12:00 PM, and 7:30 PM. For same-day trips, aim to reach by 8 AM for shorter queues." },
    { question: "Is overnight stay recommended in Ayodhya?", answer: "While same-day is feasible, an overnight stay is recommended to visit all temples without rushing. It allows you to attend the beautiful Saryu Ghat evening aarti and visit Ram Mandir during less crowded morning hours." },
    { question: "Can I visit Lucknow attractions and Ayodhya in one trip?", answer: "Yes! We offer combo packages covering Lucknow sightseeing (Bara Imambara, Chhota Imambara, Rumi Darwaza) on Day 1, Ayodhya darshan on Day 2, with return on Day 3. Starting at ₹6,000 for sedan." },
    { question: "Do you provide pickup from Lucknow airport/railway station?", answer: "Yes, we provide pickup from Lucknow Chaudhary Charan Singh Airport, Lucknow Junction Railway Station, or any hotel/address in Lucknow city. Airport pickup is available 24/7." }
  ];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };

  const packages = [
    { name: "Same-Day Return", sedan: "₹3,500", suv: "₹5,000", desc: "Quick darshan trip — depart early, return by evening", popular: true },
    { name: "Overnight (2-Day)", sedan: "₹4,500", suv: "₹6,500", desc: "Relaxed darshan with evening aarti and all temples" },
    { name: "Lucknow + Ayodhya (3-Day)", sedan: "₹6,000", suv: "₹8,500", desc: "Lucknow sightseeing + Ayodhya complete darshan" },
  ];

  const speedStats = [
    { value: "135", unit: "km", label: "Distance" },
    { value: "2.5", unit: "hrs", label: "Drive Time" },
    { value: "3,500", unit: "₹", label: "Starting At" },
    { value: "5K+", unit: "trips", label: "Completed" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-stone-50">

        {/* HERO: Speed-Express Split Layout — Left content, Right speedometer-style stat ring */}
        <section className="relative min-h-[85vh] overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-800">
          {/* Diagonal speed lines decorative background */}
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: 'repeating-linear-gradient(135deg, transparent, transparent 40px, white 40px, white 41px)' }} />
          {/* Floating gradient orbs */}
          <div className="absolute top-10 right-1/4 w-80 h-80 bg-emerald-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-teal-400/15 rounded-full blur-3xl" />
          <div className="absolute top-1/3 left-1/3 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 pt-24 pb-32">
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-2 text-sm">
                <li><Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link></li>
                <ChevronRight className="w-4 h-4 text-white/40" />
                <li><Link href="/religious-tours" className="text-white/60 hover:text-white transition-colors">Religious Tours</Link></li>
                <ChevronRight className="w-4 h-4 text-white/40" />
                <li className="text-emerald-300 font-medium">Lucknow to Ayodhya</li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
              {/* Left Content: 3 cols */}
              <div className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-emerald-400/30">
                  <Zap className="w-4 h-4 text-emerald-300" />
                  <span className="text-emerald-200 font-semibold text-sm tracking-wider uppercase">Shortest Route to Ram Mandir</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.1]">
                  Lucknow to Ayodhya<br />
                  <span className="text-transparent bg-gradient-to-r from-emerald-300 via-teal-300 to-amber-300 bg-clip-text">Ram Mandir Express</span>
                </h1>

                <p className="text-lg md:text-xl text-emerald-100/80 mb-8 max-w-xl leading-relaxed">
                  The fastest <Link href="/outstation-cabs" className="text-emerald-300 underline underline-offset-2 hover:text-white transition-colors">outstation cab route</Link> to Lord Ram. Just 135 km, 2.5 hours. Same-day return from ₹3,500 in our <Link href="/safety" className="text-emerald-300 underline underline-offset-2 hover:text-white transition-colors">GPS-tracked, AC vehicles</Link>. Depart morning, darshan by noon, home by evening.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-emerald-900/40 hover:shadow-emerald-500/30 hover:scale-[1.02] transition-all">
                    <Phone className="w-5 h-5" />
                    Call Now: 7668570551
                  </Link>
                  <Link href="https://wa.me/917668570551?text=I want to book Lucknow to Ayodhya Ram Mandir tour" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/15 transition-all">
                    WhatsApp Booking
                  </Link>
                </div>

                {/* Speed trust row */}
                <div className="flex items-center gap-6 text-emerald-200/70 text-sm">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Same-Day OK</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> AC Vehicles</span>
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Darshan Help</span>
                </div>
              </div>

              {/* Right: Neumorphic Speed Dashboard — 2 cols */}
              <div className="lg:col-span-2 flex justify-center">
                <div className="relative">
                  {/* Outer ring decoration */}
                  <div className="absolute -inset-4 rounded-full border-2 border-dashed border-emerald-500/20 animate-[spin_30s_linear_infinite]" />
                  <div className="absolute -inset-8 rounded-full border border-emerald-500/10" />

                  <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-emerald-800/80 to-teal-900/80 backdrop-blur-xl border border-emerald-500/30 shadow-2xl shadow-emerald-950/50 flex flex-col items-center justify-center p-6">
                    <div className="text-emerald-300/60 text-xs font-bold tracking-[0.3em] uppercase mb-2">Express Route</div>
                    <div className="text-6xl md:text-7xl font-black text-white mb-1">135</div>
                    <div className="text-emerald-300 text-lg font-bold tracking-wider">KILOMETERS</div>
                    <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent my-3" />
                    <div className="text-white/80 text-sm font-medium">2.5 Hours Drive</div>
                    <div className="text-amber-300 text-sm font-bold mt-1">From ₹3,500</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom speed stat bar with neumorphic cards */}
          <div className="absolute bottom-0 left-0 right-0">
            <div className="max-w-6xl mx-auto px-4 pb-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {speedStats.map((stat, idx) => (
                  <div key={idx} className="bg-white/[0.07] backdrop-blur-xl rounded-xl p-4 border border-white/10 text-center hover:bg-white/[0.12] transition-colors">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-2xl font-black text-white">{stat.value}</span>
                      <span className="text-emerald-300 text-sm font-bold">{stat.unit}</span>
                    </div>
                    <div className="text-white/50 text-xs font-medium mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SVG Chevron divider (speed arrow) */}
        <div className="relative -mt-1">
          <svg viewBox="0 0 1440 60" fill="none" className="w-full h-12 md:h-16" preserveAspectRatio="none">
            <path d="M0 0L720 60L1440 0V60H0V0Z" fill="#f5f5f4" />
            <path d="M0 0L720 50L1440 0" stroke="#10b981" strokeWidth="2" strokeOpacity="0.3" fill="none" />
          </svg>
        </div>

        {/* Same-Day Journey Timeline — Horizontal speed-style */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4 border border-emerald-200">
                <Zap className="w-4 h-4" /> Same-Day Return Plan
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-stone-800">Your Express Darshan Timeline</h2>
              <p className="text-stone-500 mt-2">Leave morning, darshan by noon, home by evening</p>
            </div>

            {/* Horizontal timeline with connecting line */}
            <div className="relative">
              {/* Connection line */}
              <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-emerald-400 to-amber-300 -translate-y-1/2 rounded-full" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
                {[
                  { time: "5:00 AM", event: "Depart Lucknow", detail: "Early morning pickup from airport/hotel/station", color: "from-emerald-500 to-emerald-600" },
                  { time: "7:30 AM", event: "Arrive Ayodhya", detail: "Reach before temple queues build up", color: "from-teal-500 to-teal-600" },
                  { time: "8 AM - 2 PM", event: "Temple Darshan", detail: "Ram Mandir, Hanuman Garhi, Kanak Bhawan", color: "from-amber-500 to-orange-500" },
                  { time: "6:00 PM", event: "Back in Lucknow", detail: "Return refreshed with divine blessings", color: "from-emerald-500 to-teal-500" },
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col items-center text-center">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-bold text-lg shadow-lg mb-4`}>
                      {idx + 1}
                    </div>
                    <div className="bg-white rounded-2xl p-5 shadow-lg border border-stone-100 w-full hover:shadow-xl transition-shadow">
                      <div className="text-lg font-black text-emerald-600">{item.time}</div>
                      <div className="font-bold text-stone-800 text-sm mt-1">{item.event}</div>
                      <div className="text-stone-500 text-xs mt-1">{item.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Neumorphic Route Info Cards */}
        <section className="py-16 px-4 bg-gradient-to-b from-stone-50 to-emerald-50/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-stone-800">Why Lucknow is the Best Starting Point</h2>
              <p className="text-stone-500 mt-2">The shortest, most convenient route to Ayodhya</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: Navigation, title: "Direct Highway", value: "NH27", desc: "Single highway, no diversions. Well-maintained road with smooth tarmac all the way.", color: "emerald" },
                { icon: Clock, title: "Quick Drive", value: "2.5 hrs", desc: "Faster than Delhi (10 hrs) or Agra (7 hrs). The most time-efficient route to Ram Mandir.", color: "teal" },
                { icon: Car, title: "Lowest Price", value: "₹3,500", desc: "Shortest distance = lowest cab fare. Same-day return saves hotel costs too.", color: "amber" },
              ].map((item, idx) => (
                <div key={idx} className="group relative">
                  {/* Neumorphic card */}
                  <div className="bg-stone-50 rounded-2xl p-8 shadow-[8px_8px_16px_#d4d4d4,-8px_-8px_16px_#ffffff] hover:shadow-[4px_4px_8px_#d4d4d4,-4px_-4px_8px_#ffffff] transition-all border border-stone-100">
                    <div className={`inline-flex p-3 rounded-xl bg-${item.color}-100 mb-4`}>
                      <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                    </div>
                    <h3 className="text-lg font-bold text-stone-800 mb-1">{item.title}</h3>
                    <div className={`text-3xl font-black text-${item.color}-600 mb-2`}>{item.value}</div>
                    <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  {/* Hover accent bar */}
                  <div className={`absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-${item.color}-400 to-${item.color}-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing — Stacked card layout with green accent on popular */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-stone-800">Tour Packages & Pricing</h2>
              <p className="text-stone-500 mt-2">Most affordable route to Ayodhya Ram Mandir. See our <Link href="/pricing" className="text-emerald-600 hover:underline">transparent pricing policy</Link></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg, idx) => (
                <div key={idx} className={`relative rounded-2xl overflow-hidden ${pkg.popular ? 'ring-2 ring-emerald-400 shadow-xl shadow-emerald-100' : 'shadow-lg border border-stone-100'}`}>
                  {/* Top gradient bar */}
                  <div className={`h-2 ${pkg.popular ? 'bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500' : 'bg-gradient-to-r from-stone-200 to-stone-300'}`} />

                  {pkg.popular && (
                    <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-center py-2 text-sm font-bold tracking-wider">
                      BEST VALUE - MOST BOOKED
                    </div>
                  )}

                  <div className="p-7 bg-white">
                    <h3 className="text-xl font-black text-stone-800 mb-1">{pkg.name}</h3>
                    <p className="text-stone-500 text-sm mb-6">{pkg.desc}</p>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between items-center p-3.5 bg-stone-50 rounded-xl">
                        <div>
                          <div className="text-stone-700 font-bold text-sm">Sedan</div>
                          <div className="text-stone-400 text-xs">Swift Dzire</div>
                        </div>
                        <span className="text-2xl font-black text-emerald-600">{pkg.sedan}</span>
                      </div>
                      <div className="flex justify-between items-center p-3.5 bg-stone-50 rounded-xl">
                        <div>
                          <div className="text-stone-700 font-bold text-sm">SUV</div>
                          <div className="text-stone-400 text-xs">Innova / Ertiga</div>
                        </div>
                        <span className="text-2xl font-black text-emerald-600">{pkg.suv}</span>
                      </div>
                    </div>

                    <Link href="tel:+917668570551" className={`block text-center px-6 py-3.5 rounded-xl font-bold transition-all ${pkg.popular ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white hover:shadow-lg hover:shadow-emerald-200' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}`}>
                      Book This Package
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-stone-400 text-sm mt-6">* All prices include vehicle, driver, fuel, and tolls. Hotel separate for overnight packages.</p>
          </div>
        </section>

        {/* Temples: Bento-inspired grid with varied card sizes */}
        <section className="py-16 px-4 bg-gradient-to-b from-white to-stone-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-stone-800">What to Visit in Ayodhya</h2>
              <p className="text-stone-500 mt-2">Essential stops for your <Link href="/religious-tours" className="text-emerald-600 hover:underline">Lucknow to Ayodhya pilgrimage</Link></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              {/* Large card — Ram Mandir */}
              <div className="md:col-span-4 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border border-amber-200 hover:shadow-xl transition-all group">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-5xl">🛕</span>
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-xs font-bold">Must Visit</span>
                </div>
                <h3 className="text-2xl font-black text-stone-800 mb-2">Shri Ram Janmabhoomi Temple</h3>
                <p className="text-stone-600 leading-relaxed">The grand new Ram Mandir — a masterpiece of Indian temple architecture. The main attraction of your Ayodhya pilgrimage, where Lord Ram was born thousands of years ago.</p>
                <div className="mt-4 flex items-center gap-2 text-amber-600 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  <Sparkles className="w-4 h-4" /> Darshan timing: 7 AM - 7 PM
                </div>
              </div>

              {/* Small card — Hanuman Garhi */}
              <div className="md:col-span-2 bg-white rounded-2xl p-6 border border-stone-200 hover:border-emerald-300 hover:shadow-lg transition-all">
                <span className="text-4xl">🙏</span>
                <span className="block mt-2 bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full text-xs font-bold w-fit">Must Visit</span>
                <h3 className="text-lg font-bold text-stone-800 mt-3 mb-1">Hanuman Garhi</h3>
                <p className="text-stone-500 text-sm">10th-century hilltop temple dedicated to Lord Hanuman</p>
              </div>

              {/* Row of equal cards */}
              <div className="md:col-span-2 bg-white rounded-2xl p-6 border border-stone-200 hover:border-teal-300 hover:shadow-lg transition-all">
                <span className="text-4xl">✨</span>
                <span className="block mt-2 bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full text-xs font-bold w-fit">Recommended</span>
                <h3 className="text-lg font-bold text-stone-800 mt-3 mb-1">Kanak Bhawan</h3>
                <p className="text-stone-500 text-sm">Beautiful golden palace temple of Lord Ram and Sita</p>
              </div>
              <div className="md:col-span-2 bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border border-orange-200 hover:shadow-lg transition-all">
                <span className="text-4xl">🪔</span>
                <span className="block mt-2 bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full text-xs font-bold w-fit">Must Visit</span>
                <h3 className="text-lg font-bold text-stone-800 mt-3 mb-1">Saryu Ghat</h3>
                <p className="text-stone-500 text-sm">Sacred riverfront — attend the mesmerizing evening aarti</p>
              </div>
              <div className="md:col-span-2 bg-white rounded-2xl p-6 border border-stone-200 hover:border-purple-300 hover:shadow-lg transition-all">
                <span className="text-4xl">🏛️</span>
                <span className="block mt-2 bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full text-xs font-bold w-fit">Heritage</span>
                <h3 className="text-lg font-bold text-stone-800 mt-3 mb-1">Dashrath Mahal</h3>
                <p className="text-stone-500 text-sm">Ancient palace of King Dashrath, father of Lord Ram</p>
              </div>
            </div>
          </div>
        </section>

        {/* === SEO PROSE: E-E-A-T Rich Content Section === */}
        <section className="py-20 px-4 bg-gradient-to-b from-white to-emerald-50/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-8">
              Why Triveni Cabs for Your <span className="text-transparent bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text">Lucknow to Ayodhya Cab Booking</span>
            </h2>
            <div className="prose prose-lg max-w-none text-stone-600 space-y-4">
              <p>
                Lucknow to Ayodhya is the <strong>shortest and most affordable route</strong> to the Ram Mandir — just 135 km via the direct NH27 highway. Triveni Cabs has completed <strong>1,200+ Lucknow to Ayodhya trips</strong> since the temple inauguration, making us the most experienced <Link href="/outstation-cabs" className="text-emerald-600 hover:text-teal-600 underline underline-offset-2">outstation cab provider</Link> on this route. Our drivers navigate this highway daily and can get you to Ayodhya in under 2.5 hours — even accounting for the Faizabad town traffic.
              </p>
              <p>
                Unlike ride-hailing apps that charge surge pricing during festival seasons, our <Link href="/pricing" className="text-emerald-600 hover:text-teal-600 underline underline-offset-2">Lucknow to Ayodhya cab fare</Link> stays fixed year-round. The ₹3,500 sedan fare includes fuel, tolls, and driver charges. No hidden costs, no surge, no negotiation. We have been operating since 2015 from our headquarters at 366 Dandupura, Agra, with a dedicated Lucknow dispatch team for this popular route.
              </p>

              <h3 className="text-xl font-bold text-stone-800 mt-8 mb-3">Same-Day Return: How It Works</h3>
              <p>
                The biggest advantage of booking a <strong>Lucknow to Ayodhya same-day cab</strong> is that 135 km takes only 2.5 hours each way, leaving you 6-8 hours for darshan. Depart Lucknow at 5 AM, reach Ayodhya by 7:30 AM, attend the morning aarti, complete Hanuman Garhi and Kanak Bhawan visits by 2 PM, and return to Lucknow by 5-6 PM. Our driver waits at a convenient parking spot while you visit each temple.
              </p>
              <p>
                For those who want a more relaxed experience, our overnight package at ₹4,500 includes driver night halt charges. This lets you attend the beautiful Saryu Ghat evening aarti and visit Ram Mandir during the less crowded morning hours the next day. Many pilgrims also combine this with <Link href="/prayagraj-sangam-tour" className="text-emerald-600 hover:text-teal-600 underline underline-offset-2">Prayagraj Triveni Sangam</Link> (160 km from Ayodhya) for a 3-day spiritual circuit.
              </p>

              <h3 className="text-xl font-bold text-stone-800 mt-8 mb-3">Pickup from Lucknow Airport and Railway Station</h3>
              <p>
                We provide pickup from Chaudhary Charan Singh International Airport (Amausi), Lucknow Junction, Lucknow Charbagh, or any hotel address in the city. Airport pickups are available 24/7 — our driver tracks your flight and arrives before you exit the terminal. For railway station pickups, we wait at the designated taxi stand with a nameboard. Every vehicle is <Link href="/safety" className="text-emerald-600 hover:text-teal-600 underline underline-offset-2">GPS-tracked for your safety</Link> with real-time location sharing.
              </p>

              <h3 className="text-xl font-bold text-stone-800 mt-8 mb-3">Local Knowledge That Saves You Time</h3>
              <p>
                Our Lucknow-Ayodhya drivers know insider tips that save hours. They know which parking area near Ram Mandir fills up last, the shortcut through Faizabad town that avoids the main bazaar congestion, and which entry gate has the shortest darshan queue at different times. They also recommend the best authentic Ayodhya peda shops and local <Link href="/religious-tours" className="text-emerald-600 hover:text-teal-600 underline underline-offset-2">pilgrimage stops</Link> that most tourists miss.
              </p>
              <p>
                Ready to book? Call <strong>7668570551</strong> or WhatsApp us anytime. Read our <Link href="/reviews" className="text-emerald-600 hover:text-teal-600 underline underline-offset-2">4.8-star customer reviews</Link> from 2,800+ verified pilgrims. Free cancellation up to 24 hours before pickup. Triveni Cabs — trusted by thousands for their most sacred journeys.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ with emerald accent */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-stone-800">Frequently Asked Questions</h2>
              <p className="text-stone-500 mt-2">Lucknow to Ayodhya Ram Mandir Tour FAQs</p>
            </div>

            <div className="space-y-3">
              {faqData.map((faq, idx) => (
                <details key={idx} className="group rounded-xl border border-stone-200 overflow-hidden hover:border-emerald-300 transition-colors">
                  <summary className="p-5 cursor-pointer font-bold text-stone-800 flex justify-between items-center bg-white hover:bg-emerald-50/50 transition-colors">
                    <span className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 text-sm font-black flex-shrink-0">{idx + 1}</span>
                      {faq.question}
                    </span>
                    <ChevronRight className="w-5 h-5 text-emerald-500 group-open:rotate-90 transition-transform flex-shrink-0 ml-2" />
                  </summary>
                  <div className="px-5 pb-5 pt-0 text-stone-600 border-t border-stone-100">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* === INTERLINKS: Ayodhya Tours + Cross-Category === */}
        <section className="py-16 px-4 bg-gradient-to-b from-stone-50 to-emerald-50/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-8 text-center">Explore More Ayodhya Tours</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { href: "/ayodhya-ram-mandir-tour-from-delhi", title: "Ayodhya Tour from Delhi", sub: "530 km via expressway", price: "₹8,500" },
                { href: "/ayodhya-ram-mandir-tour-from-agra", title: "Ayodhya Tour from Agra", sub: "400 km, one-day possible", price: "₹7,000" },
                { href: "/religious-tours/ayodhya-ram-mandir-yatra", title: "Ayodhya Ram Mandir Yatra", sub: "5-6 day complete pilgrimage", price: "₹12,000" },
              ].map((link, idx) => (
                <Link key={idx} href={link.href} className="group relative bg-white rounded-2xl p-6 shadow-lg border-2 border-emerald-100 hover:border-emerald-400 transition-all duration-300 hover:shadow-xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-emerald-100 to-transparent rounded-bl-3xl" />
                  <div className="relative">
                    <h3 className="font-bold text-stone-900 mb-1 text-lg">{link.title}</h3>
                    <p className="text-stone-500 text-sm mb-3">{link.sub}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-black text-emerald-600">From {link.price}</span>
                      <ArrowRight className="w-5 h-5 text-emerald-500 group-hover:translate-x-2 transition-transform duration-300" />
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
                { href: "/prayagraj-sangam-tour", title: "Prayagraj Sangam Tour", desc: "160 km from Ayodhya — combine both sacred sites" },
                { href: "/sightseeing/ayodhya", title: "Ayodhya Sightseeing Tour", desc: "Full-day Ayodhya temple darshan package" },
                { href: "/religious-tours/kashi-vishwanath-darshan", title: "Kashi Vishwanath Darshan", desc: "Varanasi temple tour, 270 km from Lucknow" },
                { href: "/outstation-cabs", title: "Outstation Cab Service", desc: "Lucknow to anywhere in North India from ₹11/km" },
                { href: "/kanwar-yatra-cab-haridwar", title: "Kanwar Yatra Cab", desc: "Sacred yatra transport to Haridwar" },
                { href: "/lucknow", title: "Lucknow City Cab Service", desc: "Local taxi, sightseeing & all Lucknow services" },
                { href: "/reviews", title: "Customer Reviews", desc: "See what 15,000+ pilgrims say about us" },
                { href: "/safety", title: "Our Safety Standards", desc: "GPS tracking, verified drivers, 24/7 support" },
              ].map((item, idx) => (
                <Link key={idx} href={item.href} className="group bg-white rounded-xl p-4 shadow-sm border border-emerald-100 hover:border-emerald-300 hover:shadow-md transition-all">
                  <h4 className="font-bold text-stone-800 text-sm mb-1 group-hover:text-emerald-600 transition-colors">{item.title}</h4>
                  <p className="text-stone-500 text-xs">{item.desc}</p>
                </Link>
              ))}
            </div>

            {/* Geographic Cluster: Nearby Pilgrimages */}
            <h3 className="text-xl font-bold text-stone-800 mb-6 text-center">Nearby Pilgrimage Destinations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
              {[
                { href: "/prayagraj-sangam-tour", label: "Prayagraj Sangam (160 km)" },
                { href: "/religious-tours/kashi-vishwanath-darshan", label: "Kashi Vishwanath (270 km)" },
                { href: "/religious-tours/mathura-vrindavan-barsana-tour", label: "Mathura Vrindavan Tour" },
                { href: "/religious-tours/haridwar-rishikesh-ganga-darshan", label: "Haridwar Rishikesh Tour" },
                { href: "/kanwar-yatra-cab-haridwar", label: "Kanwar Yatra Haridwar" },
                { href: "/religious-tours/vaishno-devi-yatra", label: "Vaishno Devi Yatra" },
                { href: "/religious-tours/char-dham-yatra", label: "Char Dham Yatra" },
                { href: "/religious-tours/nau-devi-tour", label: "Nau Devi Tour" },
              ].map((item, idx) => (
                <Link key={idx} href={item.href} className="text-sm text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-2 rounded-lg text-center font-medium transition-colors border border-emerald-100">
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
                      { href: "/lucknow-to-delhi", label: "Lucknow to Delhi Cab" },
                      { href: "/lucknow-to-agra", label: "Lucknow to Agra Cab" },
                      { href: "/delhi-to-lucknow", label: "Delhi to Lucknow Cab" },
                      { href: "/delhi-to-agra", label: "Delhi to Agra Cab" },
                      { href: "/delhi-to-varanasi", label: "Delhi to Varanasi" },
                      { href: "/delhi-to-haridwar", label: "Delhi to Haridwar" },
                      { href: "/agra-to-lucknow", label: "Agra to Lucknow Cab" },
                      { href: "/delhi-to-jaipur", label: "Delhi to Jaipur Cab" },
                    ].map((r, i) => (
                      <li key={i}><Link href={r.href} className="text-sm text-stone-600 hover:text-emerald-600 transition-colors">{r.label}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-stone-700 text-sm mb-3 uppercase tracking-wider">Popular Cities</h4>
                  <ul className="space-y-1.5">
                    {[
                      { href: "/lucknow", label: "Lucknow" },
                      { href: "/delhi", label: "Delhi" },
                      { href: "/agra", label: "Agra" },
                      { href: "/varanasi", label: "Varanasi" },
                      { href: "/jaipur", label: "Jaipur" },
                      { href: "/chandigarh", label: "Chandigarh" },
                      { href: "/haridwar", label: "Haridwar" },
                      { href: "/mathura", label: "Mathura" },
                    ].map((c, i) => (
                      <li key={i}><Link href={c.href} className="text-sm text-stone-600 hover:text-emerald-600 transition-colors">{c.label}</Link></li>
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
                      { href: "/7-day-himachal-tour-by-car", label: "Himachal Tour by Car" },
                    ].map((t, i) => (
                      <li key={i}><Link href={t.href} className="text-sm text-stone-600 hover:text-emerald-600 transition-colors">{t.label}</Link></li>
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
                      <li key={i}><Link href={s.href} className="text-sm text-stone-600 hover:text-emerald-600 transition-colors">{s.label}</Link></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA: Emerald-to-teal gradient with neumorphic price circle */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-emerald-700 via-teal-700 to-emerald-800">
          {/* Decorative rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-white/10 rounded-full" />
          <div className="absolute top-10 right-10 w-60 h-60 bg-teal-400/10 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Book Lucknow to Ayodhya Express</h2>
            <p className="text-emerald-200 mb-10 text-lg max-w-xl mx-auto">Shortest route to Ram Mandir. Same-day return. The most affordable Ayodhya tour in India.</p>

            {/* Floating price orb */}
            <div className="inline-block mb-10">
              <div className="w-40 h-40 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex flex-col items-center justify-center shadow-2xl">
                <div className="text-white/60 text-xs font-bold uppercase tracking-wider">From</div>
                <div className="text-4xl font-black text-white">₹3,500</div>
                <div className="text-emerald-300 text-xs font-medium">Same-day return</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-[1.02] transition-all">
                <Phone className="w-5 h-5" />
                Call: +91 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to book Lucknow to Ayodhya Ram Mandir tour" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/25 hover:bg-white/15 transition-all">
                WhatsApp Inquiry
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
