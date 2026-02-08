import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, Calendar, Heart, IndianRupee, Sparkles, Navigation } from '@/components/ui/icons';

export const metadata = {
  title: 'Ayodhya Ram Mandir Tour from Delhi | Sedan ₹8,500 | 2-3 Day Packages',
  description: 'Book Ayodhya Ram Mandir tour from Delhi. 530km, 9-10 hrs drive. Sedan ₹8,500, SUV ₹12,000. Ram Mandir darshan, Hanuman Garhi, Saryu Ghat. Call 7668570551.',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/ayodhya-ram-mandir-tour-from-delhi' },
  openGraph: {
    title: 'Delhi to Ayodhya Ram Mandir Tour | AC Cab from ₹8,500',
    description: 'Book Delhi to Ayodhya Ram Mandir cab. 530km drive, 2-3 day packages. Sedan ₹8,500, SUV ₹12,000. Darshan assistance included. Call 7668570551.',
    type: 'website', locale: 'en_IN',
    url: 'https://www.trivenicabs.in/ayodhya-ram-mandir-tour-from-delhi',
    siteName: 'Triveni Cabs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delhi to Ayodhya Ram Mandir Tour | From ₹8,500',
    description: 'Delhi to Ayodhya cab. 2-3 day Ram Mandir packages. AC vehicle, expert drivers. Book now!',
    site: '@trivenicabs',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function AyodhyaRamMandirTourFromDelhi() {
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    "serviceType": "Delhi to Ayodhya Ram Mandir Tour",
    "name": "Ayodhya Ram Mandir Tour from Delhi",
    "description": "Comfortable cab service from Delhi to Ayodhya for Ram Mandir darshan. 530km drive, 2-3 day packages with AC vehicles.",
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "email": "cabstriveni@gmail.com", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } },
    "areaServed": { "@type": "City", "name": "Delhi" },
    "offers": [
      { "@type": "Offer", "name": "Sedan Package", "price": "8500", "priceCurrency": "INR" },
      { "@type": "Offer", "name": "SUV Package", "price": "12000", "priceCurrency": "INR" }
    ]
  };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
    { "@type": "ListItem", "position": 2, "name": "Religious Tours", "item": "https://www.trivenicabs.in/religious-tours" },
    { "@type": "ListItem", "position": 3, "name": "Ayodhya Ram Mandir Tour from Delhi", "item": "https://www.trivenicabs.in/ayodhya-ram-mandir-tour-from-delhi" }
  ]};
  const touristTripSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": "Delhi to Ayodhya Ram Mandir Tour", "description": "Sacred pilgrimage from Delhi to Ayodhya Ram Mandir. 530km drive.", "touristType": "Religious Pilgrimage" };

  const faqData = [
    { question: "How far is Ayodhya from Delhi by road?", answer: "Ayodhya is approximately 530 km from Delhi by road via NH27/Lucknow Highway. The drive takes 9-10 hours in a comfortable AC cab. The route passes through Lucknow, making it convenient for a stop." },
    { question: "What is the cab fare from Delhi to Ayodhya?", answer: "Sedan cab from Delhi to Ayodhya starts at ₹8,500 and SUV starts at ₹12,000. This includes AC vehicle, experienced driver, fuel, and tolls. Round-trip packages for 2-3 days are also available." },
    { question: "What is the best route from Delhi to Ayodhya?", answer: "The best route is Delhi to Lucknow to Ayodhya via NH27 (530 km, 9-10 hours). An alternative route via Kanpur is slightly longer but equally good. Our drivers choose the best route based on traffic conditions." },
    { question: "What are the Ram Mandir darshan timings?", answer: "Shri Ram Mandir is open for darshan from 7:00 AM to 11:30 AM and 2:00 PM to 7:00 PM. Aarti timings are at 6:00 AM, 12:00 PM, and 7:30 PM. It is best to arrive early to avoid long queues." },
    { question: "Is there a dress code for Ram Mandir?", answer: "While there is no strict dress code, modest and traditional Indian attire is recommended. Avoid sleeveless tops, shorts, and revealing clothing. Many devotees prefer wearing traditional clothes in saffron or white." },
    { question: "Can I do a same-day Delhi to Ayodhya trip?", answer: "A same-day return is not recommended as the 530 km drive takes 9-10 hours one way. We recommend at least a 2-day package (overnight stay in Ayodhya) or ideally a 3-day package for a relaxed darshan experience." },
    { question: "What other temples can I visit in Ayodhya?", answer: "Besides Ram Mandir, visit Hanuman Garhi (hilltop temple), Kanak Bhawan (golden temple), Dashrath Mahal, Nageshwarnath Temple, Treta Ke Thakur, Ram Ki Paidi Ghat, and Saryu Ghat for evening aarti." },
    { question: "Do you provide hotel booking in Ayodhya?", answer: "Yes, Triveni Cabs assists with hotel booking in Ayodhya. We recommend staying in hotels near Ram Mandir for convenience. Options range from budget dharamshalas to premium hotels. Book in advance during peak season." }
  ];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };

  const packages = [
    { name: "2-Day Express", sedan: "₹8,500", suv: "₹12,000", desc: "Quick darshan trip with overnight stay in Ayodhya", badge: null },
    { name: "3-Day Complete", sedan: "₹12,000", suv: "₹16,000", desc: "Relaxed tour covering all temples, ghats, and nearby sites", badge: "Most Popular" },
    { name: "3-Day + Prayagraj", sedan: "₹15,000", suv: "₹20,000", desc: "Extended tour including Triveni Sangam at Prayagraj", badge: "Best Value" },
  ];

  const temples = [
    { name: "Shri Ram Janmabhoomi", desc: "The grand new Ram Mandir at Lord Ram's birthplace — a marvel of Indian temple architecture", icon: "🛕", tag: "Must Visit" },
    { name: "Hanuman Garhi", desc: "Hilltop fortress temple of Lord Hanuman with panoramic city views", icon: "🙏", tag: "Must Visit" },
    { name: "Kanak Bhawan", desc: "Stunning golden palace temple gifted to Sita by Kaikeyi", icon: "✨", tag: "Sacred" },
    { name: "Saryu Ghat", desc: "Sacred riverfront for evening aarti — a deeply moving spiritual experience", icon: "🪔", tag: "Experience" },
    { name: "Dashrath Mahal", desc: "Ancient palace of King Dashrath, Ram's father, rich with history", icon: "🏛️", tag: "Heritage" },
    { name: "Nageshwarnath Temple", desc: "Ancient Shiva temple established by Lord Ram's son Kush", icon: "🕉️", tag: "Ancient" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-amber-50/30">

        {/* === HERO: Grand Temple Architecture Split Layout === */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Sacred gradient mesh background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-950 via-amber-900 to-orange-800" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-[10%] w-96 h-96 bg-orange-500/30 rounded-full blur-[100px]" />
            <div className="absolute bottom-20 right-[5%] w-[500px] h-[500px] bg-amber-400/20 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[150px]" />
          </div>
          {/* Mandala-style decorative rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-orange-400/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-amber-400/10 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-yellow-400/10 rounded-full" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              {/* Left content - 3 cols */}
              <div className="lg:col-span-3">
                <nav className="mb-6" aria-label="Breadcrumb">
                  <ol className="inline-flex items-center space-x-2 text-sm">
                    <li><Link href="/" className="text-orange-300/70 hover:text-orange-200">Home</Link></li>
                    <ChevronRight className="w-3.5 h-3.5 text-orange-400/40" />
                    <li><Link href="/religious-tours" className="text-orange-300/70 hover:text-orange-200">Religious Tours</Link></li>
                    <ChevronRight className="w-3.5 h-3.5 text-orange-400/40" />
                    <li className="text-amber-300 font-medium">Delhi to Ayodhya</li>
                  </ol>
                </nav>

                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-orange-400/30">
                  <Sparkles className="w-4 h-4 text-amber-300" />
                  <span className="text-amber-200 font-semibold text-xs tracking-widest uppercase">Trending Pilgrimage 2026</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight">
                  Ayodhya<br />
                  <span className="text-transparent bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 bg-clip-text">Ram Mandir</span><br />
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-orange-200/80">Tour from Delhi</span>
                </h1>

                <p className="text-lg md:text-xl text-orange-100/80 mb-8 max-w-xl leading-relaxed">
                  Embark on a sacred 530 km journey to the magnificent Shri Ram Janmabhoomi Temple. Book our <Link href="/outstation-cabs" className="underline text-amber-300 hover:text-white">outstation cab service</Link> — AC sedan from ₹8,500. Complete darshan assistance with <Link href="/safety" className="underline text-amber-300 hover:text-white">GPS-tracked, verified vehicles</Link>.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="tel:+917668570551" className="group inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] transition-all duration-300">
                    <Phone className="w-5 h-5" />
                    Call: 7668570551
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link href="https://wa.me/917668570551?text=I want to book Delhi to Ayodhya Ram Mandir tour" className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all duration-300">
                    WhatsApp Booking
                  </Link>
                </div>
              </div>

              {/* Right panel - 2 cols: Glassmorphic stat card */}
              <div className="lg:col-span-2">
                <div className="bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="text-6xl mb-3">🛕</div>
                    <h2 className="text-2xl font-bold text-white">Journey Details</h2>
                  </div>
                  <div className="space-y-4">
                    {[
                      { label: "Distance", value: "530 km", icon: MapPin, sub: "Via NH27 through Lucknow" },
                      { label: "Drive Time", value: "9-10 hrs", icon: Clock, sub: "Comfortable highway drive" },
                      { label: "Sedan Price", value: "₹8,500", icon: Car, sub: "All-inclusive, AC vehicle" },
                      { label: "SUV Price", value: "₹12,000", icon: Car, sub: "Innova / Ertiga" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-4 bg-white/10 rounded-2xl p-4 border border-white/10 hover:bg-white/20 transition-all">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                          <item.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="text-xs text-orange-300/70 uppercase tracking-wider">{item.label}</div>
                          <div className="text-xl font-bold text-white">{item.value}</div>
                          <div className="text-xs text-orange-200/50">{item.sub}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust bar at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-orange-900/80 to-amber-900/80 backdrop-blur-xl border-t border-orange-400/20">
            <div className="max-w-7xl mx-auto px-4 py-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Shield, title: "Safe Journey", desc: "GPS tracked & verified" },
                  { icon: Clock, title: "24/7 Support", desc: "On-trip assistance" },
                  { icon: Users, title: "15,000+", desc: "Pilgrims served" },
                  { icon: Heart, title: "Darshan Help", desc: "Queue & timing guide" }
                ].map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="p-2.5 bg-orange-500/20 rounded-xl border border-orange-400/20">
                      <f.icon className="w-5 h-5 text-orange-300" />
                    </div>
                    <div>
                      <div className="font-bold text-white text-sm">{f.title}</div>
                      <div className="text-xs text-orange-300/60">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === MANDALA DIVIDER === */}
        <div className="relative h-16 bg-gradient-to-b from-orange-950 to-amber-50/30 overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-16">
            <svg viewBox="0 0 1440 64" fill="none" className="w-full h-full" preserveAspectRatio="none">
              <path d="M0,64 C360,0 720,48 1080,16 C1260,0 1360,32 1440,64 L1440,64 L0,64 Z" className="fill-amber-50/30" />
            </svg>
          </div>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full" />
        </div>

        {/* === BENTO GRID: Packages + Route === */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-5 py-2 rounded-full mb-4 text-sm font-semibold">
                <IndianRupee className="w-4 h-4" /> Tour Packages & Pricing
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-stone-900 mb-4">
                Choose Your <span className="text-transparent bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text">Sacred Journey</span>
              </h2>
              <p className="text-stone-500 text-lg max-w-2xl mx-auto">Transparent pricing with no hidden charges. All packages include AC vehicle, driver, fuel, and tolls. See our <Link href="/pricing" className="text-orange-600 underline hover:text-orange-800">complete pricing guide</Link> for all routes.</p>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {packages.map((pkg, idx) => (
                <div key={idx} className={`relative group rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${idx === 1 ? 'bg-gradient-to-br from-orange-600 via-amber-600 to-orange-500 text-white shadow-xl shadow-orange-500/20 md:-translate-y-4' : 'bg-white border-2 border-orange-100 shadow-lg hover:border-orange-300'}`}>
                  {pkg.badge && (
                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${idx === 1 ? 'bg-white/20 text-white border border-white/30' : 'bg-orange-100 text-orange-700'}`}>{pkg.badge}</div>
                  )}
                  <div className="p-8">
                    <h3 className={`text-2xl font-bold mb-2 ${idx === 1 ? 'text-white' : 'text-stone-900'}`}>{pkg.name}</h3>
                    <p className={`text-sm mb-8 ${idx === 1 ? 'text-orange-100' : 'text-stone-500'}`}>{pkg.desc}</p>

                    <div className="space-y-4 mb-8">
                      <div className={`flex justify-between items-center p-4 rounded-2xl ${idx === 1 ? 'bg-white/15 border border-white/20' : 'bg-orange-50/80 border border-orange-100'}`}>
                        <div>
                          <div className={`text-xs uppercase tracking-wider ${idx === 1 ? 'text-orange-200' : 'text-stone-400'}`}>Sedan</div>
                          <div className={`text-xs ${idx === 1 ? 'text-orange-100' : 'text-stone-400'}`}>Swift Dzire / Amaze</div>
                        </div>
                        <div className={`text-2xl font-black ${idx === 1 ? 'text-white' : 'text-orange-600'}`}>{pkg.sedan}</div>
                      </div>
                      <div className={`flex justify-between items-center p-4 rounded-2xl ${idx === 1 ? 'bg-white/15 border border-white/20' : 'bg-orange-50/80 border border-orange-100'}`}>
                        <div>
                          <div className={`text-xs uppercase tracking-wider ${idx === 1 ? 'text-orange-200' : 'text-stone-400'}`}>SUV</div>
                          <div className={`text-xs ${idx === 1 ? 'text-orange-100' : 'text-stone-400'}`}>Innova / Ertiga</div>
                        </div>
                        <div className={`text-2xl font-black ${idx === 1 ? 'text-white' : 'text-orange-600'}`}>{pkg.suv}</div>
                      </div>
                    </div>

                    <Link href="tel:+917668570551" className={`block text-center py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${idx === 1 ? 'bg-white text-orange-600 hover:shadow-xl' : 'bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-lg hover:shadow-orange-500/25'}`}>
                      Book This Package
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-stone-400 text-sm mt-8">* Hotel accommodation charged separately. Customized packages available on request.</p>
          </div>
        </section>

        {/* === RAM MANDIR DARSHAN GUIDE — Arch-shaped cards === */}
        <section className="py-20 px-4 bg-gradient-to-b from-amber-50/30 via-orange-50/50 to-amber-50/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-300/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-300/20 rounded-full blur-[100px]" />

          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-800 px-5 py-2 rounded-full mb-4 text-sm font-semibold">
                <Sparkles className="w-4 h-4" /> Darshan Guide
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-stone-900 mb-4">
                Ram Mandir <span className="text-transparent bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text">Darshan Guide</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Darshan Timings Card */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-orange-200/50 hover:border-orange-400 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-orange-200/40 to-amber-200/40 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/25">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-5">Darshan Timings</h3>
                  <div className="space-y-3">
                    {[
                      { time: "7:00 AM - 11:30 AM", label: "Morning Darshan" },
                      { time: "2:00 PM - 7:00 PM", label: "Afternoon Darshan" },
                      { time: "6 AM, 12 PM, 7:30 PM", label: "Aarti Timings" },
                    ].map((t, i) => (
                      <div key={i} className="flex items-center gap-3 p-3 bg-orange-50/80 rounded-xl border border-orange-100">
                        <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                        <div>
                          <div className="font-bold text-stone-800 text-sm">{t.time}</div>
                          <div className="text-stone-500 text-xs">{t.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-orange-600 font-medium bg-orange-50 rounded-xl p-3 border border-orange-100">
                    Pro Tip: Arrive before 7 AM for the shortest queues and most peaceful darshan experience.
                  </p>
                </div>
              </div>

              {/* Dress Code & Guidelines Card */}
              <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-orange-200/50 hover:border-orange-400 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-amber-200/40 to-yellow-200/40 rounded-full blur-2xl" />
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-yellow-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-amber-500/25">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-stone-900 mb-5">Dress Code & Guidelines</h3>
                  <div className="space-y-3">
                    {[
                      "Wear modest, traditional Indian clothing",
                      "No mobile phones inside the inner sanctum",
                      "Carry a valid government-issued ID proof",
                      "Photography only in designated outer areas",
                      "No bags or large items — use cloakroom",
                    ].map((rule, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-amber-50/80 rounded-xl border border-amber-100">
                        <CheckCircle2 className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                        <span className="text-stone-700 text-sm">{rule}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === TEMPLES: Sacred Bento Grid === */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 to-white" />
          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-stone-900 mb-4">
                Sacred Sites of <span className="text-transparent bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text">Ayodhya</span>
              </h2>
              <p className="text-stone-500 text-lg max-w-2xl mx-auto">Beyond the Ram Mandir — make the most of your pilgrimage. Explore our <Link href="/religious-tours" className="text-orange-600 underline hover:text-orange-800">complete religious tour collection</Link> for more sacred journeys.</p>
            </div>

            {/* Bento Grid with varied sizes */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {temples.map((temple, idx) => (
                <div key={idx} className={`group relative bg-white rounded-3xl overflow-hidden border-2 border-orange-100/50 hover:border-orange-300 shadow-lg hover:shadow-2xl transition-all duration-500 ${idx === 0 ? 'md:col-span-2 lg:col-span-1 md:row-span-1' : ''}`}>
                  <div className="p-7">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl flex items-center justify-center text-4xl shadow-inner group-hover:scale-110 transition-transform duration-500">
                        {temple.icon}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase ${
                        temple.tag === 'Must Visit' ? 'bg-orange-500 text-white' :
                        temple.tag === 'Sacred' ? 'bg-amber-100 text-amber-700 border border-amber-200' :
                        temple.tag === 'Experience' ? 'bg-rose-100 text-rose-700 border border-rose-200' :
                        temple.tag === 'Heritage' ? 'bg-blue-100 text-blue-700 border border-blue-200' :
                        'bg-stone-100 text-stone-600 border border-stone-200'
                      }`}>{temple.tag}</span>
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 mb-2">{temple.name}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{temple.desc}</p>
                  </div>
                  {/* Bottom accent line */}
                  <div className="h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === ITINERARY: Timeline Design === */}
        <section className="py-20 px-4 bg-gradient-to-b from-white via-orange-50/30 to-amber-50/30 relative overflow-hidden">
          <div className="absolute top-20 right-10 w-40 h-40 bg-orange-300/15 rounded-full blur-[80px]" />
          <div className="max-w-4xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-5 py-2 rounded-full mb-4 text-sm font-semibold">
                <Navigation className="w-4 h-4" /> Day-by-Day
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-stone-900">
                Suggested <span className="text-transparent bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text">3-Day Itinerary</span>
              </h2>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 via-amber-400 to-yellow-400" />

              <div className="space-y-8">
                {[
                  { day: 1, title: "Delhi to Ayodhya", desc: "Depart Delhi early morning (5-6 AM). Drive 530 km via NH27 through Lucknow. Arrive Ayodhya by afternoon. Evening visit to Saryu Ghat for the mesmerizing aarti ceremony. Check-in to hotel.", color: "from-orange-500 to-red-500" },
                  { day: 2, title: "Ayodhya Darshan Day", desc: "Early morning darshan at Shri Ram Janmabhoomi Temple. Visit Hanuman Garhi, Kanak Bhawan, and Dashrath Mahal. Afternoon visit to Nageshwarnath Temple and Treta Ke Thakur. Evening at Ram Ki Paidi Ghat.", color: "from-amber-500 to-orange-500" },
                  { day: 3, title: "Ayodhya to Delhi Return", desc: "Optional morning temple visit or second darshan at Ram Mandir. Depart for Delhi after breakfast. Comfortable highway drive back. Arrive Delhi by evening with blessed memories of Lord Ram.", color: "from-yellow-500 to-amber-500" }
                ].map((item, idx) => (
                  <div key={idx} className="relative pl-16 md:pl-20">
                    {/* Day circle */}
                    <div className={`absolute left-0 md:left-2 w-12 h-12 md:w-12 md:h-12 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-xl z-10`}>
                      {item.day}
                    </div>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300">
                      <h3 className="text-lg font-bold text-stone-900 mb-2">{item.title}</h3>
                      <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
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
              Why Choose Triveni Cabs for Your <span className="text-transparent bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text">Delhi to Ayodhya Cab Service</span>
            </h2>
            <div className="prose prose-lg max-w-none text-stone-600 space-y-4">
              <p>
                Triveni Cabs has been operating <Link href="/outstation-cabs" className="text-orange-600 hover:text-amber-600 underline underline-offset-2">outstation cab services</Link> across North India since 2015, and our Delhi to Ayodhya Ram Mandir tour is among the most booked pilgrimage routes in our fleet. With <strong>500+ Ayodhya trips completed</strong> in the last year alone, our drivers know every kilometer of the 530 km Delhi-Ayodhya highway — from the best dhaba stops near Kanpur to the fastest route through Lucknow to avoid city traffic.
              </p>
              <p>
                What makes booking a <strong>Delhi to Ayodhya cab</strong> with us different? First, every vehicle in our Ayodhya tour fleet is <Link href="/safety" className="text-orange-600 hover:text-amber-600 underline underline-offset-2">GPS-tracked with real-time monitoring</Link> from our dispatch center at 366 Dandupura, Agra. Second, our drivers are not just drivers — they are experienced yatra guides who help you navigate the Ram Mandir darshan queue, suggest the best time for Hanuman Garhi visit, and know exactly where to park near Saryu Ghat for the evening aarti.
              </p>

              <h3 className="text-xl font-bold text-stone-800 mt-8 mb-3">Understanding the Delhi to Ayodhya Route</h3>
              <p>
                The Delhi to Ayodhya distance is approximately 530 km, and the drive takes 9-11 hours depending on traffic and rest stops. Our recommended route follows NH27 through the Agra-Lucknow Expressway and then onward to Ayodhya via Faizabad. The first 300 km on the expressway is smooth six-lane highway, making the journey comfortable even for elderly pilgrims and families with children.
              </p>
              <p>
                Most devotees who <strong>hire an Ayodhya tour cab from Delhi</strong> prefer an early morning departure (around 4-5 AM) to reach Ayodhya by afternoon. This allows for a relaxed check-in followed by the spectacular Saryu Ghat evening aarti. Our <Link href="/round-trip-cab" className="text-orange-600 hover:text-amber-600 underline underline-offset-2">round-trip cab packages</Link> include driver accommodation charges, so your driver stays available throughout your Ayodhya visit.
              </p>

              <h3 className="text-xl font-bold text-stone-800 mt-8 mb-3">Ram Mandir Darshan Tips from Our Experienced Drivers</h3>
              <p>
                Based on feedback from thousands of pilgrims we have transported, here are insider tips for the best Ram Mandir darshan experience. Arrive at the temple by 6:30 AM to attend the morning aarti at 7 AM — the queue is shortest at this hour. The afternoon session (2 PM - 7 PM) tends to be less crowded on weekdays. Carry only essential items as there are strict security checks, and mobile phones must be deposited at lockers near the entrance.
              </p>
              <p>
                Our drivers also recommend combining your Ayodhya trip with a visit to <Link href="/prayagraj-sangam-tour" className="text-orange-600 hover:text-amber-600 underline underline-offset-2">Prayagraj Triveni Sangam</Link> (160 km from Ayodhya) or <Link href="/religious-tours/kashi-vishwanath-darshan" className="text-orange-600 hover:text-amber-600 underline underline-offset-2">Kashi Vishwanath temple in Varanasi</Link> (200 km from Ayodhya). We offer multi-city <Link href="/religious-tours" className="text-orange-600 hover:text-amber-600 underline underline-offset-2">religious tour packages</Link> that combine two or three of these sacred destinations in a single comfortable trip.
              </p>

              <h3 className="text-xl font-bold text-stone-800 mt-8 mb-3">Transparent Pricing with No Hidden Charges</h3>
              <p>
                Our <Link href="/pricing" className="text-orange-600 hover:text-amber-600 underline underline-offset-2">Ayodhya tour pricing</Link> is fully transparent. The sedan rate of ₹8,500 covers the complete round-trip — including fuel, tolls, expressway charges, driver allowance, and night halt charges. You only pay for your accommodation and meals separately. Compare this with train tickets (₹800-2,500 per person, unreliable timing) or flights to Lucknow plus cab (₹5,000+ per person) — our <strong>private cab to Ayodhya from Delhi</strong> is the most convenient option for families and groups of 3-4 pilgrims.
              </p>
              <p>
                Have questions? Call us directly at <strong>7668570551</strong> or email <strong>cabstriveni@gmail.com</strong>. You can also read what previous pilgrims say about their experience on our <Link href="/reviews" className="text-orange-600 hover:text-amber-600 underline underline-offset-2">customer reviews page</Link>, where we maintain a 4.8/5 rating across 2,800+ verified reviews. Our cancellation policy is flexible — free cancellation up to 24 hours before pickup.
              </p>
            </div>
          </div>
        </section>

        {/* === FAQ: Accordion with sacred styling === */}
        <section className="py-20 px-4 bg-white relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-stone-900 mb-4">
                Frequently Asked <span className="text-transparent bg-gradient-to-r from-orange-600 to-amber-500 bg-clip-text">Questions</span>
              </h2>
              <p className="text-stone-500 text-lg">Everything about your Delhi to Ayodhya Ram Mandir pilgrimage</p>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, idx) => (
                <details key={idx} className="group rounded-2xl border-2 border-orange-100 hover:border-orange-300 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 bg-white">
                  <summary className="p-6 cursor-pointer font-bold text-stone-800 flex justify-between items-center hover:bg-orange-50/50 transition-colors">
                    <span className="pr-4">{faq.question}</span>
                    <ChevronRight className="w-5 h-5 text-orange-500 group-open:rotate-90 transition-transform duration-300 flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-stone-600 leading-relaxed border-t border-orange-100">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* === INTERLINKS: Ayodhya Tours + Cross-Category === */}
        <section className="py-16 px-4 bg-gradient-to-b from-white to-orange-50/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-8 text-center">Explore More Ayodhya Tours</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { href: "/religious-tours/ayodhya-ram-mandir-yatra", title: "Ayodhya Ram Mandir Yatra", sub: "5-6 day complete pilgrimage", price: "₹12,000" },
                { href: "/ayodhya-ram-mandir-tour-from-agra", title: "Ayodhya Tour from Agra", sub: "400 km via expressway", price: "₹7,000" },
                { href: "/ayodhya-ram-mandir-tour-from-lucknow", title: "Ayodhya Tour from Lucknow", sub: "135 km — same-day possible", price: "₹3,500" },
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
                { href: "/prayagraj-sangam-tour", title: "Prayagraj Sangam Tour", desc: "Combine Ayodhya with Triveni Sangam (160 km away)" },
                { href: "/religious-tours/kashi-vishwanath-darshan", title: "Kashi Vishwanath Darshan", desc: "Varanasi temple tour from Delhi or Ayodhya" },
                { href: "/uttarakhand-spiritual-circuit-tour", title: "Uttarakhand Spiritual Circuit", desc: "Haridwar, Rishikesh & hill temples tour" },
                { href: "/sightseeing/ayodhya", title: "Ayodhya Sightseeing Tour", desc: "Full-day Ayodhya temple darshan package" },
                { href: "/outstation-cabs", title: "Outstation Cab Service", desc: "Delhi to anywhere in North India from ₹11/km" },
                { href: "/airport-service/delhi", title: "Delhi Airport Transfer", desc: "IGI Airport pickup for your Ayodhya tour" },
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
                { href: "/religious-tours/mathura-vrindavan-barsana-tour", label: "Mathura Vrindavan Tour" },
                { href: "/kanwar-yatra-cab-haridwar", label: "Kanwar Yatra to Haridwar" },
                { href: "/religious-tours/haridwar-rishikesh-ganga-darshan", label: "Haridwar Rishikesh Tour" },
                { href: "/religious-tours/vaishno-devi-yatra", label: "Vaishno Devi Yatra" },
                { href: "/religious-tours/char-dham-yatra", label: "Char Dham Yatra" },
                { href: "/religious-tours/braj-84-kos-yatra", label: "Braj 84 Kos Yatra" },
                { href: "/prayagraj-sangam-tour", label: "Prayagraj Sangam" },
                { href: "/religious-tours/nau-devi-tour", label: "Nau Devi Tour" },
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
                      { href: "/delhi-to-agra", label: "Delhi to Agra Cab" },
                      { href: "/delhi-to-jaipur", label: "Delhi to Jaipur Cab" },
                      { href: "/delhi-to-chandigarh", label: "Delhi to Chandigarh" },
                      { href: "/delhi-to-manali", label: "Delhi to Manali Cab" },
                      { href: "/delhi-to-haridwar", label: "Delhi to Haridwar" },
                      { href: "/delhi-to-lucknow", label: "Delhi to Lucknow Cab" },
                      { href: "/delhi-to-varanasi", label: "Delhi to Varanasi" },
                      { href: "/delhi-to-shimla", label: "Delhi to Shimla Cab" },
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
                      { href: "/lucknow", label: "Lucknow" },
                      { href: "/varanasi", label: "Varanasi" },
                      { href: "/haridwar", label: "Haridwar" },
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
                      { href: "/sightseeing/delhi-full-day-city-tour", label: "Delhi City Tour" },
                      { href: "/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur", label: "Rajasthan Road Trip" },
                      { href: "/7-day-himachal-tour-by-car", label: "Himachal Tour by Car" },
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

        {/* === CTA: Grand sacred design === */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-700 via-amber-600 to-orange-600" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-[20%] w-60 h-60 bg-orange-400/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-10 right-[10%] w-80 h-80 bg-amber-400/20 rounded-full blur-[100px]" />
          </div>
          {/* Mandala rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-white/10 rounded-full" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-white/20">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span className="text-amber-100 font-semibold text-sm">Begin Your Sacred Journey</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
              Book Delhi to Ayodhya<br />Ram Mandir Tour
            </h2>

            <div className="inline-block bg-white/15 backdrop-blur-xl rounded-3xl p-8 mb-10 border border-white/20 shadow-2xl">
              <div className="text-orange-200 text-sm mb-1 uppercase tracking-wider">Starting from</div>
              <div className="text-5xl md:text-6xl font-black text-white mb-1">₹8,500</div>
              <div className="text-amber-200/70 text-sm">AC Sedan, all-inclusive round-trip</div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-3 bg-white text-orange-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-white/20 hover:scale-[1.02] transition-all duration-300">
                <Phone className="w-6 h-6" />
                Call: +91 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to book Delhi to Ayodhya Ram Mandir tour" className="inline-flex items-center justify-center gap-3 bg-white/15 backdrop-blur-xl text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/25 hover:bg-white/25 transition-all duration-300">
                WhatsApp Inquiry
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
