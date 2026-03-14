import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, Calendar, Heart, Sparkles, Award, Route } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Ayodhya Ram Mandir Tour from Agra | Sedan ₹7,000 | 2-3 Day Packages',
  description: 'Book Ayodhya Ram Mandir tour from Agra. 400km, 7-8 hrs drive. Sedan ₹7,000, SUV ₹10,000. Ram Mandir darshan, Hanuman Garhi, Saryu Ghat. Call 7668570551.',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/ayodhya-ram-mandir-tour-from-agra' },
  openGraph: {
    title: 'Agra to Ayodhya Ram Mandir Tour | AC Cab from ₹7,000',
    description: 'Book Agra to Ayodhya Ram Mandir cab. 400km drive, 2-3 day packages. Sedan ₹7,000, SUV ₹10,000. Darshan assistance included.',
    type: 'website', locale: 'en_IN',
    url: 'https://www.trivenicabs.in/ayodhya-ram-mandir-tour-from-agra',
    siteName: 'Triveni Cabs',
  },
  twitter: { card: 'summary_large_image', title: 'Agra to Ayodhya Ram Mandir Tour | From ₹7,000', description: 'Agra to Ayodhya cab. 2-3 day Ram Mandir packages. AC vehicle, expert drivers.', site: '@trivenicabs' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function AyodhyaRamMandirTourFromAgra() {
  const serviceSchema = { "@context": "https://schema.org", "@type": "Service", "serviceType": "Agra to Ayodhya Ram Mandir Tour", "name": "Ayodhya Ram Mandir Tour from Agra", "description": "Comfortable cab service from Agra to Ayodhya for Ram Mandir darshan. 400km drive, 2-3 day packages.", "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "email": "cabstriveni@gmail.com", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" } }, "areaServed": { "@type": "City", "name": "Agra" }, "offers": [{ "@type": "Offer", "name": "Sedan Package", "price": "7000", "priceCurrency": "INR" }, { "@type": "Offer", "name": "SUV Package", "price": "10000", "priceCurrency": "INR" }] };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Religious Tours", "item": "https://www.trivenicabs.in/religious-tours" }, { "@type": "ListItem", "position": 3, "name": "Ayodhya Ram Mandir Tour from Agra", "item": "https://www.trivenicabs.in/ayodhya-ram-mandir-tour-from-agra" }] };
  const touristTripSchema = { "@context": "https://schema.org", "@type": "TouristTrip", "name": "Agra to Ayodhya Ram Mandir Tour", "description": "Sacred pilgrimage from Agra to Ayodhya Ram Mandir. 400km drive covering Ram Janmabhoomi, Hanuman Garhi, Kanak Bhawan.", "touristType": "Religious Pilgrimage" };

  const faqData = [
    { question: "How far is Ayodhya from Agra by road?", answer: "Ayodhya is approximately 400 km from Agra by road. The drive takes 7-8 hours via the Agra-Lucknow Expressway and NH27. The expressway makes the first half of the journey very smooth and fast." },
    { question: "What is the cab fare from Agra to Ayodhya?", answer: "Sedan cab from Agra to Ayodhya starts at ₹7,000 and SUV starts at ₹10,000. This includes AC vehicle, experienced driver, fuel, and tolls. Round-trip packages for 2-3 days are available at discounted rates." },
    { question: "What is the best route from Agra to Ayodhya?", answer: "The best route is Agra to Lucknow via Agra-Lucknow Expressway, then Lucknow to Ayodhya (400 km, 7-8 hours). The Agra-Lucknow Expressway covers about 300 km in just 3-4 hours." },
    { question: "Can I combine Taj Mahal and Ayodhya in one trip?", answer: "Yes! Since Triveni Cabs is based in Agra, we can arrange a combined Taj Mahal + Ayodhya tour. Visit Taj Mahal and Agra Fort on Day 1, drive to Ayodhya on Day 2, Ram Mandir darshan on Day 3, and return to Agra on Day 4." },
    { question: "What are the Ram Mandir darshan timings?", answer: "Shri Ram Mandir is open from 7:00 AM to 11:30 AM and 2:00 PM to 7:00 PM. Aarti timings are 6:00 AM, 12:00 PM, and 7:30 PM. Arrive early for shorter queues." },
    { question: "Is Agra-Lucknow Expressway safe for night travel?", answer: "The Agra-Lucknow Expressway is well-lit and patrolled, making it safer than most highways. However, we recommend starting early morning rather than night travel for the best experience." },
    { question: "What other temples can I visit in Ayodhya?", answer: "Besides Ram Mandir, visit Hanuman Garhi, Kanak Bhawan, Dashrath Mahal, Nageshwarnath Temple, Treta Ke Thakur, Ram Ki Paidi Ghat, and Saryu Ghat for evening aarti." },
    { question: "Do you provide hotel booking assistance in Ayodhya?", answer: "Yes, we assist with hotel booking in Ayodhya near the Ram Mandir area. Options range from budget dharamshalas to premium hotels. Book in advance during festivals." }
  ];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };

  const packages = [
    { name: "2-Day Quick", sedan: "₹7,000", suv: "₹10,000", desc: "Agra to Ayodhya with overnight stay and darshan" },
    { name: "3-Day Complete", sedan: "₹10,000", suv: "₹14,000", desc: "Full temple tour with relaxed schedule" },
    { name: "4-Day Agra + Ayodhya", sedan: "₹14,000", suv: "₹18,000", desc: "Taj Mahal + Agra sightseeing + Ayodhya darshan combo" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(touristTripSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-stone-50">

        {/* === HERO: Mughal-meets-Sacred Fullscreen with Diagonal Cut === */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Mughal-inspired warm gradient */}
          <div className="absolute inset-0 bg-gradient-to-tr from-amber-950 via-orange-900 to-amber-800" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-[10%] right-[15%] w-80 h-80 bg-amber-500/25 rounded-full blur-[100px]" />
            <div className="absolute bottom-[20%] left-[5%] w-96 h-96 bg-orange-400/15 rounded-full blur-[120px]" />
            <div className="absolute top-[40%] left-[40%] w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px]" />
          </div>
          {/* Arch-shaped decorative border top */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-20 border-b-2 border-l-2 border-r-2 border-amber-400/20 rounded-b-full" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full text-center">
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-2 text-sm">
                <li><Link href="/" className="text-amber-300/60 hover:text-amber-200">Home</Link></li>
                <ChevronRight className="w-3.5 h-3.5 text-amber-400/30" />
                <li><Link href="/religious-tours" className="text-amber-300/60 hover:text-amber-200">Religious Tours</Link></li>
                <ChevronRight className="w-3.5 h-3.5 text-amber-400/30" />
                <li className="text-amber-200 font-medium">Agra to Ayodhya</li>
              </ol>
            </nav>

            {/* Mughal-style badge with golden borders */}
            <div className="inline-flex items-center gap-3 bg-amber-500/15 backdrop-blur-md px-8 py-3 rounded-full mb-8 border-2 border-amber-400/30 shadow-lg shadow-amber-500/10">
              <Award className="w-5 h-5 text-amber-300" />
              <span className="text-amber-200 font-bold text-sm tracking-widest uppercase">From Our Home City — Agra</span>
              <Award className="w-5 h-5 text-amber-300" />
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-4 leading-[1.05] tracking-tight">
              Agra <span className="text-transparent bg-gradient-to-r from-amber-300 to-yellow-300 bg-clip-text">to</span> Ayodhya
            </h1>
            <p className="text-2xl md:text-3xl font-bold text-amber-200/80 mb-6">Ram Mandir Tour</p>
            <p className="text-lg text-amber-100/60 mb-10 max-w-2xl mx-auto">400 km via Agra-Lucknow Expressway. Fast, comfortable, and blessed. Direct from Triveni Cabs HQ in Agra.</p>

            {/* Stats strip */}
            <div className="inline-flex flex-wrap justify-center gap-4 mb-10">
              {[
                { value: "400 km", label: "Distance" },
                { value: "7-8 hrs", label: "Drive Time" },
                { value: "₹7,000", label: "Sedan From" },
                { value: "₹10,000", label: "SUV From" },
              ].map((s, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-xl rounded-2xl px-6 py-3 border border-white/15 min-w-[120px]">
                  <div className="text-xl font-black text-white">{s.value}</div>
                  <div className="text-xs text-amber-300/60 uppercase tracking-wider">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-2xl shadow-amber-500/30 hover:scale-[1.03] transition-all duration-300 border-2 border-amber-400/30">
                <Phone className="w-5 h-5" />
                Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to book Agra to Ayodhya Ram Mandir tour" className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-xl text-white px-10 py-4 rounded-full font-bold text-lg border-2 border-amber-400/20 hover:bg-white/20 transition-all duration-300">
                WhatsApp Booking
              </Link>
            </div>
          </div>

          {/* Diagonal cut bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" className="w-full" preserveAspectRatio="none">
              <path d="M0,80 L0,40 Q720,0 1440,40 L1440,80 Z" className="fill-stone-50" />
            </svg>
          </div>
        </section>

        {/* === WHY FROM AGRA: Ornamental Grid === */}
        <section className="py-20 px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-stone-900 mb-4">
                Why Book from <span className="text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">Agra?</span>
              </h2>
              <p className="text-stone-500 text-lg">Triveni Cabs headquarters — fastest pickup, best rates, no middlemen</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "🏠", title: "Agra HQ", desc: "We are headquartered in Agra — fastest pickup at your doorstep", gradient: "from-amber-500 to-orange-500" },
                { icon: "🛣️", title: "Expressway Route", desc: "Agra-Lucknow Expressway covers 300 km in just 3-4 hours", gradient: "from-orange-500 to-red-500" },
                { icon: "🔄", title: "Combo Trips", desc: "Add Taj Mahal, Mathura-Vrindavan, or Prayagraj easily", gradient: "from-amber-500 to-yellow-500" },
                { icon: "💰", title: "Direct Pricing", desc: "No broker markup — best rates from Agra's trusted cab provider", gradient: "from-yellow-500 to-amber-500" }
              ].map((item, idx) => (
                <div key={idx} className="group relative bg-white rounded-3xl p-7 shadow-lg border-2 border-amber-100/50 hover:border-amber-400 transition-all duration-500 hover:shadow-2xl overflow-hidden">
                  {/* Decorative golden corner */}
                  <div className={`absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`} />
                  <div className="relative">
                    <div className="text-5xl mb-5">{item.icon}</div>
                    <h3 className="text-lg font-bold text-stone-900 mb-2">{item.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === PRICING: Mughal Arch-Inspired Cards === */}
        <section className="py-20 px-4 bg-gradient-to-b from-stone-50 via-amber-50/40 to-stone-50 relative overflow-hidden">
          <div className="absolute top-10 left-10 w-60 h-60 bg-amber-300/15 rounded-full blur-[80px]" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-300/10 rounded-full blur-[100px]" />

          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-5 py-2 rounded-full mb-4 text-sm font-semibold border border-amber-200">
                <Star className="w-4 h-4" /> Transparent Pricing
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-stone-900 mb-4">
                Tour <span className="text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">Packages</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg, idx) => (
                <div key={idx} className={`relative rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] ${idx === 1 ? 'shadow-2xl shadow-amber-500/20' : 'shadow-lg hover:shadow-xl'}`}>
                  {/* Arch-shaped top decoration */}
                  <div className={`h-3 ${idx === 1 ? 'bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500' : 'bg-gradient-to-r from-amber-200 via-orange-200 to-amber-200'}`} />
                  <div className={`p-8 ${idx === 1 ? 'bg-gradient-to-b from-amber-900 to-amber-950 text-white' : 'bg-white border-2 border-amber-100'}`}>
                    {idx === 1 && <div className="absolute top-6 right-6 bg-amber-400/20 text-amber-200 px-3 py-1 rounded-full text-xs font-bold border border-amber-400/30">Most Popular</div>}

                    <h3 className={`text-2xl font-bold mb-2 ${idx === 1 ? 'text-white' : 'text-stone-900'}`}>{pkg.name}</h3>
                    <p className={`text-sm mb-8 ${idx === 1 ? 'text-amber-300/70' : 'text-stone-500'}`}>{pkg.desc}</p>

                    <div className="space-y-4 mb-8">
                      <div className={`p-4 rounded-2xl ${idx === 1 ? 'bg-white/10 border border-white/10' : 'bg-amber-50 border border-amber-100'}`}>
                        <div className={`text-xs uppercase tracking-wider mb-1 ${idx === 1 ? 'text-amber-300/70' : 'text-stone-400'}`}>Sedan (Swift Dzire)</div>
                        <div className={`text-3xl font-black ${idx === 1 ? 'text-white' : 'text-amber-600'}`}>{pkg.sedan}</div>
                      </div>
                      <div className={`p-4 rounded-2xl ${idx === 1 ? 'bg-white/10 border border-white/10' : 'bg-amber-50 border border-amber-100'}`}>
                        <div className={`text-xs uppercase tracking-wider mb-1 ${idx === 1 ? 'text-amber-300/70' : 'text-stone-400'}`}>SUV (Innova / Ertiga)</div>
                        <div className={`text-3xl font-black ${idx === 1 ? 'text-white' : 'text-amber-600'}`}>{pkg.suv}</div>
                      </div>
                    </div>

                    <Link href="tel:+917668570551" className={`block text-center py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${idx === 1 ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-amber-950 hover:shadow-xl' : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:shadow-lg'}`}>
                      Book This Package
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-stone-400 text-sm mt-8">* Prices include vehicle, driver, fuel, tolls, and expressway charges. Hotel separate.</p>
          </div>
        </section>

        {/* === ROUTE JOURNEY MAP === */}
        <section className="py-20 px-4 bg-white relative overflow-hidden">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-5 py-2 rounded-full mb-4 text-sm font-semibold border border-amber-200">
                <Route className="w-4 h-4" /> Route Overview
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-stone-900">
                Your <span className="text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">Journey Route</span>
              </h2>
            </div>

            {/* Horizontal journey steps */}
            <div className="relative">
              {/* Connection line */}
              <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400" />

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { city: "Agra", sub: "Start Point", detail: "Pickup from home/hotel", km: "0 km", icon: "🏠" },
                  { city: "Expressway", sub: "Fast Lane", detail: "Agra-Lucknow Expressway", km: "300 km", icon: "🛣️" },
                  { city: "Lucknow", sub: "Optional Stop", detail: "Break or continue", km: "330 km", icon: "🏛️" },
                  { city: "Ayodhya", sub: "Destination", detail: "Ram Mandir Darshan", km: "400 km", icon: "🛕" },
                ].map((stop, idx) => (
                  <div key={idx} className="text-center relative">
                    <div className="w-24 h-24 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-3xl flex items-center justify-center text-5xl shadow-lg border-2 border-amber-200 mb-4 relative z-10">
                      {stop.icon}
                    </div>
                    <h3 className="text-xl font-bold text-stone-900">{stop.city}</h3>
                    <div className="text-amber-600 font-semibold text-sm">{stop.sub}</div>
                    <div className="text-stone-500 text-xs mt-1">{stop.detail}</div>
                    <div className="text-amber-500 font-bold text-sm mt-2 bg-amber-50 rounded-full px-3 py-1 inline-block">{stop.km}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === ITINERARY === */}
        <section className="py-20 px-4 bg-gradient-to-b from-white to-amber-50/30 relative">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-stone-900">
                3-Day <span className="text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">Itinerary</span>
              </h2>
            </div>

            <div className="space-y-6">
              {[
                { day: 1, title: "Agra to Ayodhya", desc: "Depart Agra early morning (5 AM). Take Agra-Lucknow Expressway (300 km, 3-4 hrs). Continue to Ayodhya (100 km, 2 hrs). Arrive by afternoon. Evening Saryu Ghat aarti. Hotel check-in.", gradient: "from-amber-500 to-orange-500", bg: "bg-amber-50" },
                { day: 2, title: "Ayodhya Darshan", desc: "Morning darshan at Shri Ram Janmabhoomi Temple. Visit Hanuman Garhi, Kanak Bhawan, Dashrath Mahal. Afternoon visit to Nageshwarnath Temple, Treta Ke Thakur, Ram Ki Paidi. Evening at ghats.", gradient: "from-orange-500 to-red-500", bg: "bg-orange-50" },
                { day: 3, title: "Ayodhya to Agra", desc: "Optional morning temple visit. Depart for Agra via expressway. Arrive Agra by evening. Option to stop at Lucknow for sightseeing.", gradient: "from-yellow-500 to-amber-500", bg: "bg-yellow-50" }
              ].map((item, idx) => (
                <div key={idx} className={`${item.bg} rounded-3xl p-8 border-2 border-amber-200/50 hover:border-amber-400 shadow-md hover:shadow-xl transition-all duration-500 relative overflow-hidden`}>
                  <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${item.gradient}`} />
                  <div className="pl-4 flex gap-6 items-start">
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-lg flex-shrink-0`}>
                      {item.day}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-stone-900 mb-2">{item.title}</h3>
                      <p className="text-stone-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === SEO PROSE: E-E-A-T Rich Content Section === */}
        <section className="py-20 px-4 bg-gradient-to-b from-white to-amber-50/30">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-stone-900 mb-8">
              Why Book Your <span className="text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">Agra to Ayodhya Cab</span> with Triveni Cabs
            </h2>
            <div className="prose prose-lg max-w-none text-stone-600 space-y-4">
              <p>
                Triveni Cabs is <strong>headquartered in Agra</strong> at 366 Dandupura, near Tajganj — making us the most responsive and affordable option for booking an <Link href="/outstation-cabs" className="text-amber-600 hover:text-orange-600 underline underline-offset-2">Agra to Ayodhya outstation cab</Link>. Unlike aggregator apps where drivers may cancel or arrive late, our vehicles are dispatched from our own garage within 30 minutes. We have been operating pilgrimage tours since 2015 and have completed <strong>800+ Ayodhya trips from Agra</strong> alone.
              </p>
              <p>
                The 400 km journey from Agra to Ayodhya is significantly shorter than the Delhi route, thanks to the Agra-Lucknow Expressway covering 300 km in just 3-4 hours. Once you exit the expressway near Lucknow, it is another 135 km to Ayodhya via the well-maintained NH27. Our drivers take this route daily and know the best fuel stops, clean washroom facilities, and budget-friendly dhabas along the way.
              </p>

              <h3 className="text-xl font-bold text-stone-800 mt-8 mb-3">Combine Taj Mahal and Ram Mandir in One Trip</h3>
              <p>
                Since Agra is home to the Taj Mahal, many pilgrims combine their spiritual journey with a heritage visit. Our 4-day combo package covers Taj Mahal and <Link href="/same-day-taj-mahal-tour" className="text-amber-600 hover:text-orange-600 underline underline-offset-2">Agra sightseeing on Day 1</Link>, the drive to Ayodhya on Day 2, Ram Mandir darshan on Day 3, and return to Agra on Day 4. You can also add a stopover at <Link href="/religious-tours/mathura-vrindavan-barsana-tour" className="text-amber-600 hover:text-orange-600 underline underline-offset-2">Mathura Vrindavan</Link> (just 60 km from Agra) on the return journey for a complete spiritual circuit.
              </p>
              <p>
                For international tourists arriving at Delhi, we offer a popular Golden Triangle extension: <Link href="/golden-triangle-english-speaking-driver" className="text-amber-600 hover:text-orange-600 underline underline-offset-2">Delhi-Agra-Jaipur Golden Triangle</Link> followed by the Agra to Ayodhya leg. This gives you the best of heritage tourism and spiritual pilgrimage in one trip.
              </p>

              <h3 className="text-xl font-bold text-stone-800 mt-8 mb-3">Local Expertise That Makes a Difference</h3>
              <p>
                Being Agra-based means our drivers personally visit Ayodhya regularly and have up-to-date knowledge of road conditions, Ram Mandir darshan queue timings, and Ayodhya hotel availability. They will advise you on the best darshan slot (early morning 7 AM aarti has the shortest wait), help you find parking near Hanuman Garhi, and recommend the authentic Ayodhya prasad shops that locals trust.
              </p>
              <p>
                Every vehicle in our fleet is <Link href="/safety" className="text-amber-600 hover:text-orange-600 underline underline-offset-2">GPS-tracked and regularly serviced</Link>. We carry a first-aid kit, emergency contact numbers, and 24/7 dispatch support. Our <Link href="/pricing" className="text-amber-600 hover:text-orange-600 underline underline-offset-2">pricing is transparent</Link> — the quoted fare of ₹7,000 (sedan) includes fuel, tolls, expressway charges, and driver allowance. No hidden costs, no surge pricing.
              </p>

              <h3 className="text-xl font-bold text-stone-800 mt-8 mb-3">Booking and Cancellation</h3>
              <p>
                Book your Agra to Ayodhya Ram Mandir cab by calling <strong>7668570551</strong> or WhatsApp us anytime. We accept bookings 24/7 and can arrange same-day departure from Agra if vehicles are available. Free cancellation up to 24 hours before pickup. Read our <Link href="/reviews" className="text-amber-600 hover:text-orange-600 underline underline-offset-2">customer reviews</Link> — we are rated 4.8/5 across 2,800+ verified reviews by pilgrims who trusted us with their sacred journey.
              </p>
            </div>
          </div>
        </section>

        {/* === FAQ === */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-black text-stone-900 mb-4">
                Common <span className="text-transparent bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text">Questions</span>
              </h2>
            </div>
            <div className="space-y-4">
              {faqData.map((faq, idx) => (
                <details key={idx} className="group rounded-2xl border-2 border-amber-100 hover:border-amber-300 overflow-hidden shadow-sm hover:shadow-lg transition-all bg-white">
                  <summary className="p-6 cursor-pointer font-bold text-stone-800 flex justify-between items-center hover:bg-amber-50/50 transition-colors">
                    <span className="pr-4">{faq.question}</span>
                    <ChevronRight className="w-5 h-5 text-amber-500 group-open:rotate-90 transition-transform duration-300 flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 text-stone-600 leading-relaxed border-t border-amber-100">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* === INTERLINKS: Deep Interlinking === */}
        <section className="py-16 px-4 bg-amber-50/30">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-stone-900 mb-8 text-center">Explore More Ayodhya Tours</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                { href: "/ayodhya-ram-mandir-tour-from-delhi", title: "Ayodhya Tour from Delhi", sub: "530 km highway route", price: "₹8,500" },
                { href: "/ayodhya-ram-mandir-tour-from-lucknow", title: "Ayodhya Tour from Lucknow", sub: "135 km — same-day possible", price: "₹3,500" },
                { href: "/religious-tours/ayodhya-ram-mandir-yatra", title: "Complete Yatra Package", sub: "5-6 day pilgrimage tour", price: "₹12,000" },
              ].map((link, idx) => (
                <Link key={idx} href={link.href} className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-amber-100 hover:border-amber-400 transition-all hover:shadow-xl">
                  <h3 className="font-bold text-stone-900 mb-1 text-lg">{link.title}</h3>
                  <p className="text-stone-500 text-sm mb-3">{link.sub}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-amber-600">From {link.price}</span>
                    <ArrowRight className="w-5 h-5 text-amber-500 group-hover:translate-x-2 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Cross-Category Related Services */}
            <h3 className="text-xl font-bold text-stone-800 mb-6 text-center">Related Services & Agra Tours</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
              {[
                { href: "/religious-tours", title: "All Religious Tours", desc: "13+ pilgrimage packages across India" },
                { href: "/same-day-taj-mahal-tour", title: "Same-Day Taj Mahal Tour", desc: "Add a Taj Mahal visit to your Ayodhya trip" },
                { href: "/agra", title: "Agra City Cab Service", desc: "Local taxi, sightseeing & outstation from Agra" },
                { href: "/outstation-cabs", title: "Outstation Cab Booking", desc: "Agra to anywhere in North India" },
                { href: "/prayagraj-sangam-tour", title: "Prayagraj Sangam Tour", desc: "Combine with Triveni Sangam pilgrimage" },
                { href: "/sightseeing/ayodhya", title: "Ayodhya Sightseeing Tour", desc: "Full-day Ayodhya temple darshan package" },
                { href: "/religious-tours/mathura-vrindavan-barsana-tour", title: "Mathura Vrindavan Tour", desc: "Visit Krishna's birthplace near Agra" },
                { href: "/safety", title: "Our Safety Standards", desc: "GPS tracking, verified drivers, 24/7 helpline" },
                { href: "/reviews", title: "Customer Reviews", desc: "Rated 4.8/5 by thousands of pilgrims" },
              ].map((item, idx) => (
                <Link key={idx} href={item.href} className="group bg-white rounded-xl p-4 shadow-sm border border-amber-100 hover:border-amber-300 hover:shadow-md transition-all">
                  <h4 className="font-bold text-stone-800 text-sm mb-1 group-hover:text-amber-700 transition-colors">{item.title}</h4>
                  <p className="text-stone-500 text-xs">{item.desc}</p>
                </Link>
              ))}
            </div>

            {/* Geographic Cluster: Nearby Pilgrimages */}
            <h3 className="text-xl font-bold text-stone-800 mb-6 text-center">Nearby Pilgrimage Destinations from Agra</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
              {[
                { href: "/religious-tours/mathura-vrindavan-barsana-tour", label: "Mathura Vrindavan (60 km)" },
                { href: "/religious-tours/braj-84-kos-yatra", label: "Braj 84 Kos Yatra" },
                { href: "/prayagraj-sangam-tour", label: "Prayagraj Sangam" },
                { href: "/religious-tours/kashi-vishwanath-darshan", label: "Kashi Vishwanath" },
                { href: "/kanwar-yatra-cab-haridwar", label: "Kanwar Yatra Haridwar" },
                { href: "/religious-tours/haridwar-rishikesh-ganga-darshan", label: "Haridwar Rishikesh" },
                { href: "/religious-tours/char-dham-yatra", label: "Char Dham Yatra" },
                { href: "/religious-tours/vaishno-devi-yatra", label: "Vaishno Devi Yatra" },
              ].map((item, idx) => (
                <Link key={idx} href={item.href} className="text-sm text-amber-700 bg-amber-50 hover:bg-amber-100 px-3 py-2 rounded-lg text-center font-medium transition-colors border border-amber-100">
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Popular Links Footer Grid */}
            <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200">
              <h3 className="text-lg font-bold text-stone-800 mb-6">Popular Links</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <h4 className="font-bold text-stone-700 text-sm mb-3 uppercase tracking-wider">Popular Routes</h4>
                  <ul className="space-y-1.5">
                    {[
                      { href: "/agra-to-delhi", label: "Agra to Delhi Cab" },
                      { href: "/agra-to-jaipur", label: "Agra to Jaipur Cab" },
                      { href: "/delhi-to-agra", label: "Delhi to Agra Cab" },
                      { href: "/agra-to-lucknow", label: "Agra to Lucknow" },
                      { href: "/agra-to-mathura", label: "Agra to Mathura" },
                      { href: "/agra-to-varanasi", label: "Agra to Varanasi" },
                    ].map((r, i) => <li key={i}><Link href={r.href} className="text-sm text-stone-600 hover:text-amber-600 transition-colors">{r.label}</Link></li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-stone-700 text-sm mb-3 uppercase tracking-wider">Popular Cities</h4>
                  <ul className="space-y-1.5">
                    {[
                      { href: "/agra", label: "Agra" },
                      { href: "/delhi", label: "Delhi" },
                      { href: "/jaipur", label: "Jaipur" },
                      { href: "/mathura", label: "Mathura" },
                      { href: "/lucknow", label: "Lucknow" },
                      { href: "/varanasi", label: "Varanasi" },
                    ].map((c, i) => <li key={i}><Link href={c.href} className="text-sm text-stone-600 hover:text-amber-600 transition-colors">{c.label}</Link></li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-stone-700 text-sm mb-3 uppercase tracking-wider">Agra Tours</h4>
                  <ul className="space-y-1.5">
                    {[
                      { href: "/same-day-taj-mahal-tour", label: "Same-Day Taj Mahal" },
                      { href: "/taj-mahal-tour-from-delhi", label: "Taj from Delhi" },
                      { href: "/sunrise-taj-mahal-tour-from-delhi", label: "Sunrise Taj Tour" },
                      { href: "/agra-food-tour", label: "Agra Food Tour" },
                      { href: "/agra-travel-guide", label: "Agra Travel Guide" },
                      { href: "/agra-beyond-taj-mahal", label: "Agra Beyond Taj" },
                    ].map((t, i) => <li key={i}><Link href={t.href} className="text-sm text-stone-600 hover:text-amber-600 transition-colors">{t.label}</Link></li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-stone-700 text-sm mb-3 uppercase tracking-wider">Services</h4>
                  <ul className="space-y-1.5">
                    {[
                      { href: "/outstation-cabs", label: "Outstation Cabs" },
                      { href: "/local-taxi", label: "Local Taxi Service" },
                      { href: "/one-way-cab", label: "One-Way Cab" },
                      { href: "/airport-service", label: "Airport Transfers" },
                      { href: "/wedding", label: "Wedding Car Rental" },
                      { href: "/tempo-traveller", label: "Tempo Traveller" },
                    ].map((s, i) => <li key={i}><Link href={s.href} className="text-sm text-stone-600 hover:text-amber-600 transition-colors">{s.label}</Link></li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === CTA: Mughal-inspired golden === */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-amber-800 to-orange-900" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 right-[20%] w-80 h-80 bg-amber-500/15 rounded-full blur-[100px]" />
            <div className="absolute bottom-10 left-[15%] w-60 h-60 bg-orange-400/15 rounded-full blur-[80px]" />
          </div>
          {/* Golden border frame */}
          <div className="absolute inset-8 border border-amber-400/15 rounded-3xl" />

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="text-6xl mb-4">🛕</div>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Book Agra to Ayodhya Tour
            </h2>
            <p className="text-amber-200/70 text-lg mb-8">Direct from our Agra headquarters — fastest pickup, best rates, most trusted</p>

            <div className="inline-flex flex-wrap gap-6 justify-center mb-10">
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/15 min-w-[150px]">
                <div className="text-amber-200 text-xs uppercase tracking-wider mb-1">Sedan</div>
                <div className="text-4xl font-black text-white">₹7,000</div>
              </div>
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/15 min-w-[150px]">
                <div className="text-amber-200 text-xs uppercase tracking-wider mb-1">SUV</div>
                <div className="text-4xl font-black text-white">₹10,000</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-amber-400 to-orange-400 text-amber-950 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:scale-[1.02] transition-all border-2 border-amber-300/30">
                <Phone className="w-6 h-6" />
                Call: +91 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to book Agra to Ayodhya Ram Mandir tour" className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-xl text-white px-10 py-5 rounded-2xl font-bold text-lg border-2 border-amber-400/20 hover:bg-white/20 transition-all">
                WhatsApp Inquiry
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
