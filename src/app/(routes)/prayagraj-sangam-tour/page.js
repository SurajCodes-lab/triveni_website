import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, Calendar, Heart, Sparkles, Navigation } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Prayagraj Sangam Tour from Delhi | 2-3 Day Triveni Sangam Package | ₹10,500',
  description: 'Book Prayagraj Triveni Sangam tour from Delhi. 630km, 2-3 day packages. Sangam boat ride, Hanuman Mandir, Anand Bhawan. Sedan from ₹10,500. Call 7668570551.',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/prayagraj-sangam-tour' },
  openGraph: {
    title: 'Prayagraj Triveni Sangam Tour | 2-3 Day Package from Delhi',
    description: 'Prayagraj Sangam pilgrimage from Delhi. Sacred confluences, boat ride, temples. AC cab from ₹10,500. Book now.',
    type: 'website', locale: 'en_IN',
    url: 'https://www.trivenicabs.in/prayagraj-sangam-tour',
    siteName: 'Triveni Cabs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prayagraj Sangam Tour | From ₹10,500',
    description: 'Delhi to Prayagraj Triveni Sangam. 2-3 day packages. Boat ride, temples. Book now!',
    site: '@trivenicabs',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function PrayagrajSangamTour() {
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    "serviceType": "Prayagraj Triveni Sangam Pilgrimage Tour",
    "name": "Prayagraj Sangam Tour from Delhi",
    "description": "Pilgrimage tour to Prayagraj Triveni Sangam from Delhi. 630km, 2-3 day packages with AC vehicles, boat ride assistance.",
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } },
    "areaServed": { "@type": "City", "name": "Delhi" },
    "offers": { "@type": "Offer", "price": "10500", "priceCurrency": "INR", "description": "Sedan package, 2-3 days" }
  };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
    { "@type": "ListItem", "position": 2, "name": "Religious Tours", "item": "https://www.trivenicabs.in/religious-tours" },
    { "@type": "ListItem", "position": 3, "name": "Prayagraj Sangam Tour", "item": "https://www.trivenicabs.in/prayagraj-sangam-tour" }
  ]};
  const touristTripSchema = {
    "@context": "https://schema.org", "@type": "TouristTrip",
    "name": "Prayagraj Triveni Sangam Tour",
    "description": "Sacred pilgrimage to the Triveni Sangam in Prayagraj where Ganga, Yamuna, and Saraswati rivers meet.",
    "touristType": "Religious Pilgrimage",
    "itinerary": { "@type": "ItemList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Day 1: Delhi to Prayagraj (630km)" },
      { "@type": "ListItem", "position": 2, "name": "Day 2: Sangam Darshan & City Temples" },
      { "@type": "ListItem", "position": 3, "name": "Day 3: Prayagraj to Delhi Return" }
    ]}
  };

  const faqData = [
    { question: "How far is Prayagraj from Delhi?", answer: "Prayagraj (formerly Allahabad) is approximately 630 km from Delhi by road, taking 9-11 hours via the Agra-Lucknow Expressway and NH19. The route is mostly highway with good road conditions." },
    { question: "What is the cost of Delhi to Prayagraj cab?", answer: "Sedan cab from Delhi to Prayagraj starts at ₹10,500 for a 2-3 day round-trip package. SUV starts at ₹14,000. One-way fare starts at ₹6,500 (sedan). All fares include fuel, tolls, driver allowance, and parking." },
    { question: "What is Triveni Sangam and its significance?", answer: "Triveni Sangam is the sacred confluence of three rivers — Ganga, Yamuna, and the mythical Saraswati — at Prayagraj. Hindus believe bathing at the Sangam washes away sins and brings salvation. It is one of the holiest pilgrimage sites in India and the venue of the world-famous Kumbh Mela." },
    { question: "How to reach Triveni Sangam in Prayagraj?", answer: "Triveni Sangam is located at the tip of the land between the rivers, accessible by road and then boat. Our driver drops you at the Sangam area, and boats are available for ₹50-200 per person to reach the actual confluence point for holy dip." },
    { question: "When is the best time to visit Prayagraj Sangam?", answer: "October to March is the best time for pleasant weather. Magh Mela (January-February) and Kumbh Mela years are special. Avoid extreme summers (May-June) when temperatures can exceed 45°C. Monsoon (July-September) is also good as rivers are full." },
    { question: "What is the history of Kumbh Mela at Prayagraj?", answer: "The Kumbh Mela at Prayagraj is the world's largest religious gathering, held every 12 years (Maha Kumbh) and every 6 years (Ardh Kumbh). The last Maha Kumbh Mela was in 2025 with over 100 million visitors. The event celebrates the mythological churning of the ocean." },
    { question: "What else can I visit in Prayagraj?", answer: "Besides Triveni Sangam, visit Hanuman Mandir (with reclining Hanuman idol), Anand Bhawan (Nehru family home, now museum), Allahabad Fort (Akbar-era fort near Sangam), Swaraj Bhawan, and Alopi Devi Temple. For food lovers, Prayagraj is famous for its chaat and lassi." },
    { question: "Can I combine Prayagraj with Ayodhya or Varanasi?", answer: "Yes! Prayagraj is 160 km from Ayodhya and 120 km from Varanasi. We offer combo packages: Delhi → Prayagraj → Ayodhya → Delhi (4 days, sedan from ₹18,000) or Delhi → Prayagraj → Varanasi → Delhi (4 days, sedan from ₹16,000)." }
  ];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };

  const packages = [
    { name: "2-Day Express", sedan: "₹10,500", suv: "₹14,000", desc: "Quick Sangam darshan — drive, visit, return", days: "2" },
    { name: "3-Day Complete", sedan: "₹13,000", suv: "₹17,000", desc: "Full Prayagraj tour with all temples and Sangam", popular: true, days: "3" },
    { name: "4-Day + Ayodhya", sedan: "₹18,000", suv: "₹24,000", desc: "Prayagraj Sangam + Ayodhya Ram Mandir", days: "4" },
    { name: "4-Day + Varanasi", sedan: "₹16,000", suv: "₹22,000", desc: "Prayagraj Sangam + Kashi Vishwanath", days: "4" },
  ];

  const attractions = [
    { name: "Triveni Sangam", desc: "Sacred confluence of Ganga, Yamuna, and Saraswati — take a boat to the meeting point for holy dip", type: "Must Visit", color: "cyan" },
    { name: "Hanuman Mandir", desc: "Famous temple with a unique reclining idol of Lord Hanuman, partially submerged during floods", type: "Must Visit", color: "orange" },
    { name: "Anand Bhawan", desc: "Historic residence of the Nehru family, now a museum showcasing India's freedom struggle", type: "Heritage", color: "blue" },
    { name: "Allahabad Fort", desc: "Mughal-era fort built by Emperor Akbar at the confluence, housing the Ashoka Pillar", type: "Heritage", color: "purple" },
    { name: "Alopi Devi Temple", desc: "One of the 51 Shakti Peeths where the last ornament of Goddess Sati fell", type: "Temple", color: "rose" },
    { name: "Sangam Boat Ride", desc: "Serene boat ride to the exact confluence point — a deeply spiritual experience", type: "Experience", color: "teal" },
  ];

  const rivers = [
    { name: "Ganga", origin: "From the Himalayas", color: "from-cyan-400 to-blue-500", textColor: "text-cyan-700", bgColor: "bg-cyan-50", borderColor: "border-cyan-200" },
    { name: "Yamuna", origin: "From Yamunotri", color: "from-blue-500 to-indigo-600", textColor: "text-blue-700", bgColor: "bg-blue-50", borderColor: "border-blue-200" },
    { name: "Saraswati", origin: "Mythical Underground", color: "from-violet-400 to-purple-600", textColor: "text-violet-700", bgColor: "bg-violet-50", borderColor: "border-violet-200" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-slate-50">

        {/* HERO: River Confluence Theme — Three-color flowing gradient (cyan/blue/violet) */}
        <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-violet-950">
          {/* Flowing river-like gradient mesh */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-0 left-0 w-2/3 h-1/2 bg-gradient-to-br from-cyan-600/15 to-transparent rounded-full blur-3xl" />
            <div className="absolute top-1/3 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-blue-600/15 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-1/2 h-1/3 bg-gradient-to-t from-violet-600/15 to-transparent rounded-full blur-3xl" />
          </div>
          {/* Subtle wave pattern overlay */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'20\' viewBox=\'0 0 100 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 10 Q25 0 50 10 Q75 20 100 10\' fill=\'none\' stroke=\'white\' stroke-width=\'1\'/%3E%3C/svg%3E")' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 pt-20 pb-36">
            <nav className="mb-8" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-2 text-sm">
                <li><Link href="/" className="text-white/60 hover:text-white transition-colors">Home</Link></li>
                <ChevronRight className="w-4 h-4 text-white/40" />
                <li><Link href="/religious-tours" className="text-white/60 hover:text-white transition-colors">Religious Tours</Link></li>
                <ChevronRight className="w-4 h-4 text-white/40" />
                <li className="text-cyan-300 font-medium">Prayagraj Sangam Tour</li>
              </ol>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                <div className="inline-flex items-center gap-2 mb-6">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-cyan-400/60" />
                  <span className="bg-white/[0.08] backdrop-blur-md px-5 py-2 rounded-full border border-white/15 text-cyan-200 font-bold text-sm tracking-[0.15em] uppercase">
                    Where Three Sacred Rivers Meet
                  </span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.08]">
                  Prayagraj<br />
                  <span className="text-transparent bg-gradient-to-r from-cyan-300 via-blue-300 to-violet-300 bg-clip-text">Triveni Sangam</span>
                  <br />Tour
                </h1>

                <p className="text-lg md:text-xl text-blue-100/70 mb-8 max-w-lg leading-relaxed">
                  Experience the divine power of the holiest confluence. Where Ganga, Yamuna, and Saraswati meet. 2-3 day <Link href="/outstation-cabs" className="text-cyan-300 underline underline-offset-2 hover:text-white transition-colors">outstation cab packages</Link> from Delhi starting at ₹10,500 with <Link href="/safety" className="text-cyan-300 underline underline-offset-2 hover:text-white transition-colors">GPS-tracked, verified vehicles</Link>.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-6">
                  <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-cyan-950/40 hover:shadow-cyan-500/20 hover:scale-[1.02] transition-all">
                    <Phone className="w-5 h-5" />
                    Call Now: 7668570551
                  </Link>
                  <Link href="https://wa.me/917668570551?text=I want to book Prayagraj Sangam tour" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/15 transition-all">
                    WhatsApp Booking
                  </Link>
                </div>

                <div className="flex items-center gap-5 text-blue-200/60 text-sm">
                  <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-cyan-400" /> 630 km from Delhi</span>
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-blue-400" /> 2-3 Days</span>
                  <span className="flex items-center gap-1.5"><Navigation className="w-4 h-4 text-violet-400" /> Boat Ride Included</span>
                </div>
              </div>

              {/* Right: Three Rivers Convergence Visual */}
              <div className="flex justify-center">
                <div className="relative w-80 h-80 md:w-96 md:h-96">
                  {/* Outer glow */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-violet-500/10 blur-xl" />

                  {/* Three river arcs converging to center */}
                  <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full" fill="none">
                    <path d="M200 50 Q280 150 200 200" stroke="url(#ganga)" strokeWidth="3" strokeOpacity="0.4" />
                    <path d="M350 200 Q280 220 200 200" stroke="url(#yamuna)" strokeWidth="3" strokeOpacity="0.4" />
                    <path d="M100 350 Q150 280 200 200" stroke="url(#saraswati)" strokeWidth="3" strokeOpacity="0.4" />
                    <circle cx="200" cy="200" r="6" fill="white" fillOpacity="0.6" />
                    <defs>
                      <linearGradient id="ganga" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#22d3ee" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                      <linearGradient id="yamuna" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                      <linearGradient id="saraswati" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#a78bfa" />
                        <stop offset="100%" stopColor="#8b5cf6" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* River labels */}
                  {rivers.map((river, idx) => {
                    const positions = [
                      "top-6 left-1/2 -translate-x-1/2",
                      "top-1/2 right-0 -translate-y-1/2",
                      "bottom-4 left-8"
                    ];
                    return (
                      <div key={idx} className={`absolute ${positions[idx]}`}>
                        <div className={`bg-gradient-to-r ${river.color} p-0.5 rounded-xl`}>
                          <div className="bg-blue-950/80 backdrop-blur-xl rounded-[10px] px-4 py-2.5 text-center">
                            <div className="text-white font-black text-sm">{river.name}</div>
                            <div className="text-white/50 text-xs">{river.origin}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}

                  {/* Center: Sangam point */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-28 h-28 rounded-full bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-violet-500/20 backdrop-blur-xl border border-white/20 flex flex-col items-center justify-center">
                      <div className="text-white font-black text-xs tracking-wider">SANGAM</div>
                      <div className="text-white/40 text-[10px]">Confluence</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom trust strip */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-cyan-950/90 via-blue-950/90 to-violet-950/90 backdrop-blur-xl border-t border-white/10">
            <div className="max-w-6xl mx-auto px-4 py-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Shield, title: "Sacred Journey", desc: "Triveni Sangam pilgrimage", color: "text-cyan-400" },
                  { icon: Clock, title: "24/7 Support", desc: "Round-the-clock assistance", color: "text-blue-400" },
                  { icon: Users, title: "2,000+ Pilgrims", desc: "Trusted by devotees", color: "text-violet-400" },
                  { icon: Heart, title: "Boat Ride Help", desc: "Sangam visit guidance", color: "text-cyan-400" },
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-white/90">
                    <div className="p-2 bg-white/10 rounded-lg"><feature.icon className={`w-5 h-5 ${feature.color}`} /></div>
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

        {/* SVG Triple-wave divider — three rivers flowing */}
        <div className="relative -mt-1">
          <svg viewBox="0 0 1440 80" fill="none" className="w-full h-16 md:h-20" preserveAspectRatio="none">
            <path d="M0 30C360 60 720 10 1080 40C1260 55 1380 25 1440 35V80H0V30Z" fill="#ecfeff" fillOpacity="0.5" />
            <path d="M0 40C320 70 640 15 960 45C1200 60 1360 30 1440 40V80H0V40Z" fill="#eff6ff" fillOpacity="0.5" />
            <path d="M0 55C400 75 800 30 1200 55C1350 63 1410 45 1440 50V80H0V55Z" fill="#f8fafc" />
          </svg>
        </div>

        {/* About Triveni Sangam — Three river cards converging */}
        <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-800">About Triveni Sangam</h2>
              <p className="text-slate-500 mt-2 max-w-2xl mx-auto">The holiest confluence in Hinduism, where three sacred rivers meet</p>
            </div>

            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-slate-100">
              <p className="text-slate-600 mb-4 leading-relaxed text-lg">
                The Triveni Sangam at Prayagraj is the holiest confluence in Hinduism — where the sacred rivers Ganga (coming from Haridwar), Yamuna (from Yamunotri), and the mythical Saraswati (believed to flow underground) meet. This sacred spot is mentioned in ancient scriptures as the most auspicious place for spiritual purification.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Bathing at the Sangam is believed to cleanse one of all sins and grant moksha (liberation). The site is also famous as the venue for the Kumbh Mela — the world&apos;s largest religious gathering that attracts over 100 million pilgrims.
              </p>

              {/* Three river info cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {rivers.map((river, idx) => (
                  <div key={idx} className={`${river.bgColor} ${river.borderColor} border rounded-2xl p-5 text-center`}>
                    <div className={`inline-block bg-gradient-to-r ${river.color} text-white text-xs font-black px-3 py-1 rounded-full mb-3`}>
                      River {idx + 1}
                    </div>
                    <div className={`text-xl font-black ${river.textColor}`}>{river.name}</div>
                    <div className="text-slate-500 text-sm mt-1">{river.origin}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Route Details — Glassmorphic stat cards over gradient */}
        <section className="py-16 px-4 bg-gradient-to-r from-cyan-50 via-blue-50 to-violet-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-800">Delhi to Prayagraj Route Details</h2>
              <p className="text-slate-500 mt-2">Journey to the holiest confluence in India</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: MapPin, label: "Distance", value: "630 km", sub: "Via Agra-Lucknow Expressway", gradient: "from-cyan-500 to-blue-600" },
                { icon: Clock, label: "Drive Time", value: "9-11 hrs", sub: "Comfortable highway drive", gradient: "from-blue-500 to-indigo-600" },
                { icon: Car, label: "Starting Price", value: "₹10,500", sub: "2-day round-trip, AC Sedan", gradient: "from-violet-500 to-purple-600" },
              ].map((stat, idx) => (
                <div key={idx} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-100">
                  <div className={`h-1.5 bg-gradient-to-r ${stat.gradient}`} />
                  <div className="p-7 text-center">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.gradient} mb-4`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-1">{stat.label}</h3>
                    <div className="text-3xl font-black text-slate-800 mb-1">{stat.value}</div>
                    <div className="text-slate-500 text-sm">{stat.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Packages — Flowing card grid with gradient accents per package */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-800">Tour Packages & Pricing</h2>
              <p className="text-slate-500 mt-2">Choose from standalone or combo pilgrimage packages. See our <Link href="/pricing" className="text-blue-600 hover:underline">transparent pricing policy</Link></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {packages.map((pkg, idx) => {
                const gradients = ["from-cyan-500 to-blue-500", "from-blue-500 to-indigo-500", "from-indigo-500 to-violet-500", "from-violet-500 to-purple-500"];
                return (
                  <div key={idx} className={`relative rounded-2xl overflow-hidden ${pkg.popular ? 'ring-2 ring-blue-400 shadow-xl shadow-blue-100' : 'shadow-lg border border-slate-100'}`}>
                    {/* Top colored strip */}
                    <div className={`bg-gradient-to-r ${gradients[idx]} p-4 text-white`}>
                      {pkg.popular && <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm text-xs font-bold px-2 py-0.5 rounded-full">Recommended</div>}
                      <div className="text-white/70 text-xs font-bold uppercase">{pkg.days}-Day Package</div>
                      <div className="text-lg font-black mt-0.5">{pkg.name}</div>
                    </div>

                    <div className="p-5 bg-white">
                      <p className="text-slate-500 text-sm mb-5">{pkg.desc}</p>
                      <div className="space-y-2.5 mb-5">
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                          <span className="text-slate-600 text-sm font-medium">Sedan</span>
                          <span className="font-black text-lg text-blue-600">{pkg.sedan}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                          <span className="text-slate-600 text-sm font-medium">SUV</span>
                          <span className="font-black text-lg text-blue-600">{pkg.suv}</span>
                        </div>
                      </div>
                      <Link href="tel:+917668570551" className={`block text-center px-5 py-3 rounded-xl font-bold text-sm transition-all ${pkg.popular ? 'bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:shadow-lg hover:shadow-blue-200' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                        Book Now
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Attractions — Bento grid with colored left borders */}
        <section className="py-16 px-4 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-800">Places to Visit in Prayagraj</h2>
              <p className="text-slate-500 mt-2">Sacred sites and historical landmarks on your <Link href="/religious-tours" className="text-blue-600 hover:underline">religious pilgrimage</Link></p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {attractions.map((place, idx) => {
                const colorMap = {
                  cyan: { border: "border-l-cyan-500", tag: "bg-cyan-100 text-cyan-700", hover: "hover:border-cyan-300" },
                  orange: { border: "border-l-orange-500", tag: "bg-orange-100 text-orange-700", hover: "hover:border-orange-300" },
                  blue: { border: "border-l-blue-500", tag: "bg-blue-100 text-blue-700", hover: "hover:border-blue-300" },
                  purple: { border: "border-l-violet-500", tag: "bg-violet-100 text-violet-700", hover: "hover:border-violet-300" },
                  rose: { border: "border-l-rose-500", tag: "bg-rose-100 text-rose-700", hover: "hover:border-rose-300" },
                  teal: { border: "border-l-teal-500", tag: "bg-teal-100 text-teal-700", hover: "hover:border-teal-300" },
                };
                const colors = colorMap[place.color];
                return (
                  <div key={idx} className={`bg-white rounded-2xl p-6 border border-slate-100 border-l-4 ${colors.border} ${colors.hover} hover:shadow-lg transition-all`}>
                    <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full ${colors.tag} mb-3`}>{place.type}</span>
                    <h3 className="text-lg font-black text-slate-800 mb-2">{place.name}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{place.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Day-wise Itinerary — Vertical timeline with river-color gradient */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-800">Suggested 3-Day Itinerary</h2>
              <p className="text-slate-500 mt-2">Delhi to Prayagraj Sangam and back</p>
            </div>

            <div className="relative">
              {/* Vertical gradient line */}
              <div className="absolute top-0 bottom-0 left-6 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-500 to-violet-500" />

              <div className="space-y-8">
                {[
                  { day: 1, title: "Delhi to Prayagraj", desc: "Depart Delhi early morning (5 AM). Drive 630 km via Agra-Lucknow Expressway and NH19. Arrive Prayagraj by evening. Check-in to hotel. Evening visit to Triveni Sangam area for a first glimpse of the sacred confluence.", color: "from-cyan-500 to-blue-500" },
                  { day: 2, title: "Sangam Darshan & City Tour", desc: "Early morning holy dip at Triveni Sangam (boat ride to confluence point). Visit Hanuman Mandir with the famous reclining idol. Visit Anand Bhawan (Nehru Museum) and Swaraj Bhawan. Visit Allahabad Fort (exterior view). Visit Alopi Devi Temple. Evening aarti at Sangam.", color: "from-blue-500 to-indigo-500" },
                  { day: 3, title: "Prayagraj to Delhi", desc: "Morning optional second visit to Sangam. Shopping for local specialties. Depart for Delhi (630 km). Arrive Delhi by evening with blessed memories of the sacred Triveni Sangam.", color: "from-indigo-500 to-violet-500" }
                ].map((item, idx) => (
                  <div key={idx} className="relative pl-16">
                    {/* Day circle on timeline */}
                    <div className={`absolute left-0 top-0 w-12 h-12 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white font-black text-lg shadow-lg z-10`}>
                      {item.day}
                    </div>

                    <div className="bg-slate-50 rounded-2xl p-6 shadow-md border border-slate-100 hover:shadow-lg transition-shadow">
                      <h3 className="text-lg font-black text-slate-800 mb-2">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ — With river-colored numbered badges */}
        <section className="py-16 px-4 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-800">Frequently Asked Questions</h2>
              <p className="text-slate-500 mt-2">Prayagraj Sangam Tour FAQs</p>
            </div>

            <div className="space-y-3">
              {faqData.map((faq, idx) => {
                const faqColors = ["bg-cyan-100 text-cyan-700", "bg-blue-100 text-blue-700", "bg-violet-100 text-violet-700", "bg-indigo-100 text-indigo-700", "bg-cyan-100 text-cyan-700", "bg-blue-100 text-blue-700", "bg-violet-100 text-violet-700", "bg-indigo-100 text-indigo-700"];
                return (
                  <details key={idx} className="group rounded-xl border border-slate-200 overflow-hidden hover:border-blue-300 transition-colors">
                    <summary className="p-5 cursor-pointer font-bold text-slate-800 flex justify-between items-center bg-white hover:bg-blue-50/40 transition-colors">
                      <span className="flex items-center gap-3">
                        <span className={`w-7 h-7 rounded-lg ${faqColors[idx]} flex items-center justify-center text-sm font-black flex-shrink-0`}>{idx + 1}</span>
                        {faq.question}
                      </span>
                      <ChevronRight className="w-5 h-5 text-blue-500 group-open:rotate-90 transition-transform flex-shrink-0 ml-2" />
                    </summary>
                    <div className="px-5 pb-5 pt-0 text-slate-600 border-t border-slate-100">{faq.answer}</div>
                  </details>
                );
              })}
            </div>
          </div>
        </section>

        {/* === INTERLINKS: Pilgrimage Tours + Cross-Category === */}
        <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-blue-50/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 text-center">Explore More Pilgrimage Tours</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { href: "/religious-tours/kashi-vishwanath-darshan", title: "Kashi Vishwanath Darshan", sub: "Just 120 km from Prayagraj", price: "₹5,500" },
                { href: "/ayodhya-ram-mandir-tour-from-delhi", title: "Ayodhya Ram Mandir from Delhi", sub: "Combine with Prayagraj (160 km)", price: "₹8,500" },
                { href: "/ayodhya-ram-mandir-tour-from-lucknow", title: "Ayodhya from Lucknow", sub: "135 km same-day express", price: "₹3,500" },
              ].map((link, idx) => (
                <Link key={idx} href={link.href} className="group relative bg-white rounded-2xl p-6 shadow-lg border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 hover:shadow-xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-blue-100 to-transparent rounded-bl-3xl" />
                  <div className="relative">
                    <h3 className="font-bold text-slate-900 mb-1 text-lg">{link.title}</h3>
                    <p className="text-slate-500 text-sm mb-3">{link.sub}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-black text-blue-600">From {link.price}</span>
                      <ArrowRight className="w-5 h-5 text-blue-500 group-hover:translate-x-2 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Cross-Category: Related Services */}
            <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Related Services You May Need</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {[
                { href: "/religious-tours", title: "All Religious Tours", desc: "Char Dham, Vaishno Devi, Kashi & 10+ pilgrimages" },
                { href: "/ayodhya-ram-mandir-tour-from-agra", title: "Ayodhya Tour from Agra", desc: "400 km — combine Agra sightseeing with Ayodhya" },
                { href: "/kanwar-yatra-cab-haridwar", title: "Kanwar Yatra Cab", desc: "Sacred yatra transport to Haridwar" },
                { href: "/uttarakhand-spiritual-circuit-tour", title: "Uttarakhand Spiritual Circuit", desc: "Haridwar, Rishikesh & hill temples tour" },
                { href: "/sightseeing/varanasi", title: "Varanasi Sightseeing Tour", desc: "Ganga Aarti, ghats & Kashi Vishwanath darshan" },
                { href: "/outstation-cabs", title: "Outstation Cab Service", desc: "Delhi to anywhere in North India from ₹11/km" },
                { href: "/airport-service/delhi", title: "Delhi Airport Transfer", desc: "IGI Airport pickup for your pilgrimage tour" },
                { href: "/delhi", title: "Delhi City Cab Service", desc: "Local taxi, sightseeing & all Delhi services" },
                { href: "/reviews", title: "Customer Reviews", desc: "See what 15,000+ pilgrims say about us" },
                { href: "/safety", title: "Our Safety Standards", desc: "GPS tracking, verified drivers, 24/7 support" },
              ].map((item, idx) => (
                <Link key={idx} href={item.href} className="group bg-white rounded-xl p-4 shadow-sm border border-blue-100 hover:border-blue-300 hover:shadow-md transition-all">
                  <h4 className="font-bold text-slate-800 text-sm mb-1 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                  <p className="text-slate-500 text-xs">{item.desc}</p>
                </Link>
              ))}
            </div>

            {/* Geographic Cluster: Nearby Pilgrimages */}
            <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Nearby Pilgrimage Destinations</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
              {[
                { href: "/religious-tours/kashi-vishwanath-darshan", label: "Kashi Vishwanath (120 km)" },
                { href: "/ayodhya-ram-mandir-tour-from-delhi", label: "Ayodhya Ram Mandir (160 km)" },
                { href: "/religious-tours/mathura-vrindavan-barsana-tour", label: "Mathura Vrindavan Tour" },
                { href: "/religious-tours/haridwar-rishikesh-ganga-darshan", label: "Haridwar Rishikesh Tour" },
                { href: "/kanwar-yatra-cab-haridwar", label: "Kanwar Yatra Haridwar" },
                { href: "/religious-tours/vaishno-devi-yatra", label: "Vaishno Devi Yatra" },
                { href: "/religious-tours/char-dham-yatra", label: "Char Dham Yatra" },
                { href: "/religious-tours/braj-84-kos-yatra", label: "Braj 84 Kos Yatra" },
              ].map((item, idx) => (
                <Link key={idx} href={item.href} className="text-sm text-blue-700 bg-blue-50 hover:bg-blue-100 px-3 py-2 rounded-lg text-center font-medium transition-colors border border-blue-100">
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Popular Links Grid */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-lg font-bold text-slate-800 mb-6">Popular Links</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Popular Routes</h4>
                  <ul className="space-y-1.5">
                    {[
                      { href: "/delhi-to-agra", label: "Delhi to Agra Cab" },
                      { href: "/delhi-to-varanasi", label: "Delhi to Varanasi Cab" },
                      { href: "/delhi-to-lucknow", label: "Delhi to Lucknow Cab" },
                      { href: "/delhi-to-jaipur", label: "Delhi to Jaipur Cab" },
                      { href: "/delhi-to-haridwar", label: "Delhi to Haridwar" },
                      { href: "/delhi-to-chandigarh", label: "Delhi to Chandigarh" },
                      { href: "/agra-to-lucknow", label: "Agra to Lucknow Cab" },
                      { href: "/delhi-to-manali", label: "Delhi to Manali Cab" },
                    ].map((r, i) => (
                      <li key={i}><Link href={r.href} className="text-sm text-slate-600 hover:text-blue-600 transition-colors">{r.label}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Popular Cities</h4>
                  <ul className="space-y-1.5">
                    {[
                      { href: "/delhi", label: "Delhi" },
                      { href: "/agra", label: "Agra" },
                      { href: "/varanasi", label: "Varanasi" },
                      { href: "/lucknow", label: "Lucknow" },
                      { href: "/jaipur", label: "Jaipur" },
                      { href: "/chandigarh", label: "Chandigarh" },
                      { href: "/haridwar", label: "Haridwar" },
                      { href: "/mathura", label: "Mathura" },
                    ].map((c, i) => (
                      <li key={i}><Link href={c.href} className="text-sm text-slate-600 hover:text-blue-600 transition-colors">{c.label}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Popular Tours</h4>
                  <ul className="space-y-1.5">
                    {[
                      { href: "/same-day-taj-mahal-tour", label: "Same-Day Taj Mahal Tour" },
                      { href: "/taj-mahal-tour-from-delhi", label: "Taj Mahal from Delhi" },
                      { href: "/golden-triangle-english-speaking-driver", label: "Golden Triangle Tour" },
                      { href: "/uttarakhand-spiritual-circuit-tour", label: "Uttarakhand Spiritual Tour" },
                      { href: "/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur", label: "Rajasthan Road Trip" },
                      { href: "/7-day-himachal-tour-by-car", label: "Himachal Tour by Car" },
                    ].map((t, i) => (
                      <li key={i}><Link href={t.href} className="text-sm text-slate-600 hover:text-blue-600 transition-colors">{t.label}</Link></li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-slate-700 text-sm mb-3 uppercase tracking-wider">Services</h4>
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
                      <li key={i}><Link href={s.href} className="text-sm text-slate-600 hover:text-blue-600 transition-colors">{s.label}</Link></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA: Triple-river gradient with glassmorphic price card */}
        <section className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-cyan-800 via-blue-800 to-violet-900">
          {/* Flowing background elements */}
          <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-tl from-violet-500/10 to-transparent rounded-full blur-3xl" />
          {/* Wave pattern */}
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'20\' viewBox=\'0 0 80 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M0 10 Q20 0 40 10 Q60 20 80 10\' fill=\'none\' stroke=\'white\' stroke-width=\'1\'/%3E%3C/svg%3E")' }} />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl border border-white/15 rounded-full px-5 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-300" />
              <span className="text-blue-200 font-bold text-sm">Sacred Confluence of Three Rivers</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Book Your Prayagraj Sangam Tour</h2>
            <p className="text-blue-200/70 mb-10 text-lg max-w-xl mx-auto">Experience the divine power where Ganga, Yamuna, and Saraswati meet</p>

            {/* Glassmorphic price display */}
            <div className="inline-block mb-10">
              <div className="bg-white/10 backdrop-blur-xl border border-white/15 rounded-2xl px-10 py-6">
                <div className="text-white/50 text-xs font-bold uppercase tracking-wider">2-3 day package from</div>
                <div className="text-5xl font-black text-white my-1">₹10,500</div>
                <div className="text-cyan-300 text-sm font-medium">AC Sedan, round-trip from Delhi</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-xl font-bold text-lg shadow-xl hover:scale-[1.02] transition-all">
                <Phone className="w-5 h-5" />
                Call: +91 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to book Prayagraj Sangam tour from Delhi" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-lg border border-white/25 hover:bg-white/15 transition-all">
                WhatsApp Inquiry
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
