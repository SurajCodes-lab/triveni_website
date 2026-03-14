import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, Calendar, ArrowRight, IndianRupee, Sunrise, Camera } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Sunrise Taj Mahal Tour from Delhi | 2-3 AM Start | 2026',
  description: 'Sunrise Taj Mahal tour from Delhi. Depart 2-3 AM, witness golden sunrise at Taj. Seasonal timing chart, photography tips. Sedan ₹4,500. Call 7668570551.',
  keywords: 'sunrise taj mahal tour from delhi, taj mahal sunrise tour, early morning taj mahal visit, taj mahal golden hour, sunrise at taj mahal',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/sunrise-taj-mahal-tour-from-delhi' },
  openGraph: {
    title: 'Sunrise Taj Mahal Tour from Delhi | Golden Hour Experience',
    description: 'Witness the magical sunrise at Taj Mahal. Early morning departure from Delhi, photography tips, seasonal timings.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/sunrise-taj-mahal-tour-from-delhi',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/taj-mahal-hero.jpg', width: 1200, height: 630, alt: 'Sunrise at Taj Mahal Tour from Delhi' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sunrise Taj Mahal Tour from Delhi | ₹4,500',
    description: 'Catch the magical sunrise at Taj Mahal. Depart Delhi 2-3 AM. Photography tips included.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/taj-mahal-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function SunriseTajMahalTourPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Sunrise Taj Mahal Tour from Delhi", "item": "https://www.trivenicabs.in/sunrise-taj-mahal-tour-from-delhi" },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Sunrise Taj Mahal Tour from Delhi",
    "description": "Early morning departure from Delhi to witness the magical sunrise at Taj Mahal. Photography-focused tour with seasonal timing guidance.",
    "touristType": "Cultural Tourist",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" },
    },
    "offers": { "@type": "AggregateOffer", "lowPrice": "4500", "highPrice": "6500", "priceCurrency": "INR" },
  };

  const faqData = [
    { question: "What time should I leave Delhi for sunrise at the Taj Mahal?", answer: "Depart Delhi between 2:00-3:30 AM depending on the season. Summer (April-June): Leave by 3:00-3:30 AM (sunrise ~5:30 AM). Winter (November-February): Leave by 3:30-4:00 AM (sunrise ~6:30-7:00 AM, but foggy mornings possible). Our driver will suggest the exact time based on your date." },
    { question: "What time does the Taj Mahal open for sunrise?", answer: "The Taj Mahal opens 30 minutes before sunrise. Summer gates open ~5:00 AM, winter ~6:00-6:30 AM. We recommend arriving 15-20 minutes before the gates open to be among the first visitors. Queue at the East Gate for the fastest entry." },
    { question: "Is the sunrise tour worth the early wake-up?", answer: "Absolutely! The sunrise at the Taj Mahal is legendary. The white marble transforms from soft pink to peach to gold to brilliant white in the first hour. The grounds are nearly empty (vs 10,000+ visitors by midday). The light for photography is incomparable. Most visitors say it was the highlight of their India trip." },
    { question: "What if it is foggy on my sunrise visit day?", answer: "December-January has the highest fog risk. Even on foggy mornings, the Taj gradually reveals itself through the mist -- many say this creates an even more mystical experience. The fog usually lifts by 8-9 AM. We can adjust the plan if dense fog is expected." },
    { question: "Is it safe to drive from Delhi to Agra at 2-3 AM?", answer: "Yes, the Yamuna Expressway is one of India's safest highways with 24/7 highway patrol, CCTV cameras, emergency phones every 5 km, well-lit toll plazas, and frequent police checkpoints. Our experienced drivers make this early-morning trip regularly." },
    { question: "What should I wear for a sunrise Taj visit?", answer: "In summer (April-Sep): Light, breathable clothing. In winter (Oct-Mar): Warm layers -- it can be 5-10°C at sunrise. Comfortable walking shoes are essential. Shoe covers are provided at the mausoleum. No dress code for entry." },
    { question: "Can I combine sunrise Taj with other Agra sights?", answer: "Yes! After the sunrise Taj visit (2-3 hours), you will have the full day. Recommended add-ons: Agra Fort (1.5 hrs), Baby Taj (45 min), Mehtab Bagh (30 min), and Fatehpur Sikri (2 hrs, extra ₹800). Return to Delhi by 6-8 PM." },
    { question: "How much does the sunrise Taj Mahal tour cost?", answer: "Sedan (Swift Dzire): ₹4,500, SUV (Innova): ₹6,500 -- same as our regular tour. No extra charge for the early departure. All tolls, parking, and driver allowance included. Entry tickets are separate (₹50 Indian, ₹1,100 foreign)." },
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

  const sunriseTimings = [
    { month: "January", sunrise: "7:10 AM", departure: "3:30 AM", gate: "6:40 AM", fog: "High" },
    { month: "February", sunrise: "6:50 AM", departure: "3:00 AM", gate: "6:20 AM", fog: "Medium" },
    { month: "March", sunrise: "6:20 AM", departure: "2:30 AM", gate: "5:50 AM", fog: "Low" },
    { month: "April", sunrise: "5:55 AM", departure: "2:00 AM", gate: "5:25 AM", fog: "None" },
    { month: "May", sunrise: "5:30 AM", departure: "2:00 AM", gate: "5:00 AM", fog: "None" },
    { month: "June", sunrise: "5:25 AM", departure: "2:00 AM", gate: "4:55 AM", fog: "None" },
    { month: "July", sunrise: "5:35 AM", departure: "2:00 AM", gate: "5:05 AM", fog: "None" },
    { month: "August", sunrise: "5:50 AM", departure: "2:00 AM", gate: "5:20 AM", fog: "None" },
    { month: "September", sunrise: "6:05 AM", departure: "2:30 AM", gate: "5:35 AM", fog: "None" },
    { month: "October", sunrise: "6:10 AM", departure: "2:30 AM", gate: "5:40 AM", fog: "Low" },
    { month: "November", sunrise: "6:30 AM", departure: "3:00 AM", gate: "6:00 AM", fog: "Medium" },
    { month: "December", sunrise: "7:00 AM", departure: "3:30 AM", gate: "6:30 AM", fog: "High" },
  ];

  const photoSpots = [
    { title: "The First Light", desc: "As gates open, the Taj is bathed in soft pink light. Rush to the central walkway for the iconic front view. The marble appears to glow from within.", time: "0-15 min after sunrise" },
    { title: "Golden Reflection", desc: "15 minutes after sunrise, the warm golden light creates a perfect mirror image in the reflecting pool. Crouch low for the best angle.", time: "15-30 min" },
    { title: "Side Mosque Angle", desc: "Move to the mosque (left side). The angled morning light creates dramatic shadows on the white marble. Far fewer tourists here.", time: "30-45 min" },
    { title: "Diana Bench Portrait", desc: "The famous Princess Diana bench. In the first hour, you can get this shot without crowds. The Taj and pool perfectly framed behind.", time: "30-60 min" },
    { title: "Close-Up Details", desc: "As the light strengthens, capture the intricate Pietra Dura inlay work. The morning light reveals details invisible at other times.", time: "45-60 min" },
    { title: "Full White Brilliance", desc: "By 1 hour after sunrise, the marble is brilliant white. Step back for wide-angle shots with the gardens. The Taj at its most iconic.", time: "60+ min" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-stone-50">

        {/* === HERO: Dawn Gradient Horizon Design === */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Multi-layer dawn gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-900/80 to-amber-800/60" />
          <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-orange-400/30 to-transparent" />

          {/* Stars (top area) */}
          <div className="absolute top-[5%] left-[15%] w-1 h-1 bg-white rounded-full opacity-60" />
          <div className="absolute top-[8%] right-[25%] w-1.5 h-1.5 bg-white rounded-full opacity-40" />
          <div className="absolute top-[12%] left-[40%] w-1 h-1 bg-white rounded-full opacity-50" />
          <div className="absolute top-[3%] right-[40%] w-1 h-1 bg-white rounded-full opacity-30" />
          <div className="absolute top-[15%] left-[60%] w-1 h-1 bg-white rounded-full opacity-40" />
          <div className="absolute top-[7%] left-[80%] w-1.5 h-1.5 bg-white rounded-full opacity-35" />

          {/* Horizon sun glow */}
          <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-amber-500/30 via-orange-400/15 to-transparent rounded-full blur-[80px]" />
          <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-amber-400/20 rounded-full blur-[60px]" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-amber-500/15 backdrop-blur-sm border border-amber-400/20 rounded-full px-5 py-2.5 mb-8">
              <Sunrise className="w-5 h-5 text-amber-300" />
              <span className="text-amber-200 font-medium tracking-wide">Golden Hour Experience 2026</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[0.9]">
              Sunrise at the
              <span className="block text-transparent bg-gradient-to-r from-amber-300 via-orange-200 to-rose-300 bg-clip-text">Taj Mahal</span>
            </h1>

            <p className="text-purple-200/80 text-lg md:text-xl mb-4 max-w-2xl mx-auto leading-relaxed">
              Witness the white marble transform from pink to gold to brilliant white as the sun rises over the world&apos;s greatest monument to love.
            </p>

            <p className="text-amber-300/80 text-sm font-semibold mb-8">
              Depart Delhi 2-3 AM | Arrive for sunrise | Private AC car from ₹4,500
            </p>

            {/* Sunrise Timeline Mini */}
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl rounded-2xl px-6 py-4 mb-10 border border-white/10">
              <div className="text-center px-3">
                <div className="text-xs text-purple-300">Delhi</div>
                <div className="text-lg font-bold text-white">2-3 AM</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-purple-400" />
                <div className="w-12 h-0.5 bg-gradient-to-r from-purple-400 to-amber-400" />
                <div className="w-2 h-2 rounded-full bg-amber-400" />
              </div>
              <div className="text-center px-3">
                <div className="text-xs text-amber-300">Agra</div>
                <div className="text-lg font-bold text-white">5-6 AM</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full bg-amber-400" />
                <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-orange-300" />
                <div className="w-3 h-3 rounded-full bg-orange-300" />
              </div>
              <div className="text-center px-3">
                <div className="text-xs text-orange-200">Sunrise</div>
                <div className="text-lg font-bold text-amber-200">5:30-7 AM</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-orange-400 to-amber-500 text-stone-900 px-8 py-4 rounded-full font-bold text-lg shadow-2xl shadow-amber-500/30 hover:scale-105 transition-all">
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to book a sunrise Taj Mahal tour from Delhi" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl text-white px-8 py-4 rounded-full font-bold border border-amber-300/20 hover:bg-white/20 transition-all">
                WhatsApp Booking <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Horizon Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-16">
              <path d="M0 80 L0 50 Q360 20 720 40 Q1080 60 1440 30 L1440 80Z" fill="#fafaf9" />
            </svg>
          </div>
        </section>

        {/* === TRUST BAR === */}
        <section className="py-6 px-4">
          <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8">
            {[
              { icon: Shield, label: "Safe Night Drive", sub: "Highway patrol 24/7" },
              { icon: Sunrise, label: "Golden Hour Expert", sub: "Daily sunrise trips" },
              { icon: Star, label: "4.9 Rating", sub: "Photography tours" },
              { icon: Camera, label: "Photo Tips", sub: "Included free" },
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

        {/* === SUNRISE TIMING CHART === */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Monthly Schedule</div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-3">
                Sunrise <span className="text-transparent bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text">Timing Chart</span> 2026
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto">Exact sunrise times, recommended departure from Delhi, and gate opening times for every month</p>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-stone-100">
              {/* Table Header */}
              <div className="grid grid-cols-5 gap-4 p-4 bg-gradient-to-r from-amber-600 to-orange-500 text-white text-sm font-bold">
                <div>Month</div>
                <div>Sunrise</div>
                <div>Leave Delhi</div>
                <div>Gate Opens</div>
                <div>Fog Risk</div>
              </div>
              {sunriseTimings.map((row, i) => (
                <div key={i} className={`grid grid-cols-5 gap-4 p-4 text-sm items-center ${i % 2 === 0 ? 'bg-white' : 'bg-amber-50/30'} border-b border-stone-100 last:border-0`}>
                  <div className="font-semibold text-stone-800">{row.month}</div>
                  <div className="text-amber-600 font-bold">{row.sunrise}</div>
                  <div className="text-stone-600">{row.departure}</div>
                  <div className="text-stone-600">{row.gate}</div>
                  <div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      row.fog === 'High' ? 'bg-red-100 text-red-700' :
                      row.fog === 'Medium' ? 'bg-amber-100 text-amber-700' :
                      row.fog === 'Low' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-emerald-100 text-emerald-700'
                    }`}>{row.fog}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === OVERVIEW === */}
        <section className="py-20 px-4 bg-gradient-to-br from-amber-50 via-orange-50/30 to-stone-50">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2">
                <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wider uppercase">Why Sunrise?</div>
                <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
                  The <span className="text-transparent bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text">Magic of Sunrise</span> at the Taj
                </h2>
                <div className="space-y-5 text-stone-600 text-lg leading-relaxed">
                  <p>
                    The <strong className="text-stone-800">sunrise Taj Mahal tour</strong> is the most extraordinary way to experience this wonder. As dawn breaks, the white marble undergoes a stunning transformation: soft pink gives way to warm peach, then radiant gold, and finally brilliant white.
                  </p>
                  <p>
                    The early morning light creates the <strong className="text-stone-800">perfect photography conditions</strong>. The reflecting pool is stillest at dawn, creating a flawless mirror image. With only a handful of visitors (compared to thousands by midday), you can capture shots that feel like the Taj is yours alone.
                  </p>
                  <p>
                    Our drivers make this sunrise run from Delhi <strong className="text-stone-800">multiple times every week</strong>. They know exactly when to leave based on the season, which gate has the shortest queue at dawn, and the best spots for watching the sunrise unfold.
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-white rounded-3xl p-6 shadow-lg border border-stone-100 sticky top-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-400 flex items-center justify-center">
                      <Sunrise className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-stone-900">Tour Quick Facts</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      { l: "Departure", v: "2:00-3:30 AM" },
                      { l: "Arrive Agra", v: "5:00-6:30 AM" },
                      { l: "Sunrise", v: "5:25-7:10 AM" },
                      { l: "Return Delhi", v: "5:00-8:00 PM" },
                      { l: "Sedan Fare", v: "₹4,500" },
                      { l: "SUV Fare", v: "₹6,500" },
                      { l: "Best Months", v: "Oct-Mar" },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-stone-100 last:border-0">
                        <span className="text-stone-500 text-sm">{item.l}</span>
                        <span className="font-semibold text-stone-800 text-sm">{item.v}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link href="tel:+917668570551" className="block text-center bg-gradient-to-r from-amber-600 to-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                      <Phone className="w-4 h-4 inline mr-2" />Book Sunrise Tour
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === PHOTOGRAPHY GUIDE: Golden Hour Sequence === */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Photography Guide</div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-3">
                <span className="text-transparent bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text">Golden Hour</span> Photography Sequence
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto">What to shoot and when, minute by minute, as the sun rises over the Taj Mahal</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photoSpots.map((spot, i) => (
                <div key={i} className="group relative">
                  {/* Gradient border effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-400 via-orange-300 to-rose-300 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
                  <div className="relative bg-white rounded-3xl p-6 border border-stone-100 shadow-sm h-full">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-3xl font-black text-amber-200">{String(i + 1).padStart(2, '0')}</span>
                      <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">{spot.time}</span>
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 mb-2">{spot.title}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{spot.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === PRICING === */}
        <section className="py-20 px-4 bg-gradient-to-br from-amber-900 to-stone-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[100px]" />

          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-14">
              <div className="inline-block bg-amber-500/10 text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full mb-4 border border-amber-500/20 tracking-wider uppercase">Same Price, Magical Experience</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Sunrise Tour <span className="text-transparent bg-gradient-to-r from-amber-300 to-orange-200 bg-clip-text">Pricing</span>
              </h2>
              <p className="text-stone-400">No extra charge for early morning departure. Same transparent pricing.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-amber-400/30 transition-all">
                <div className="text-amber-300 text-sm font-semibold mb-2">Sedan</div>
                <div className="text-white text-xs mb-4">Swift Dzire / Honda Amaze</div>
                <div className="text-5xl font-black text-white mb-2">₹4,500</div>
                <div className="text-stone-500 text-sm mb-6">1-4 passengers, round trip</div>
                <div className="space-y-2 mb-6">
                  {["AC sedan round trip", "2-3 AM Delhi pickup", "All tolls & parking", "Driver allowance", "Photography guidance"].map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-stone-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /> {f}
                    </div>
                  ))}
                </div>
                <Link href="tel:+917668570551" className="block text-center bg-gradient-to-r from-amber-500 to-orange-400 text-stone-900 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                  <Phone className="w-4 h-4 inline mr-1" /> Book Sedan
                </Link>
              </div>
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-amber-400/30 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-stone-900 text-xs font-bold px-4 py-1 rounded-full">POPULAR</div>
                <div className="text-amber-300 text-sm font-semibold mb-2">SUV</div>
                <div className="text-white text-xs mb-4">Innova / Ertiga</div>
                <div className="text-5xl font-black text-amber-300 mb-2">₹6,500</div>
                <div className="text-stone-500 text-sm mb-6">4-7 passengers, round trip</div>
                <div className="space-y-2 mb-6">
                  {["Spacious AC SUV round trip", "2-3 AM Delhi pickup", "All tolls & parking", "Driver allowance", "Photography guidance", "Extra luggage space"].map((f, j) => (
                    <div key={j} className="flex items-center gap-2 text-stone-300 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" /> {f}
                    </div>
                  ))}
                </div>
                <Link href="tel:+917668570551" className="block text-center bg-gradient-to-r from-amber-500 to-orange-400 text-stone-900 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                  <Phone className="w-4 h-4 inline mr-1" /> Book SUV
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* === FAQs === */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900">
                Sunrise Tour <span className="text-transparent bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text">FAQs</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Sunrise className="w-4 h-4 text-white" />
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
        <section className="py-16 px-4 bg-stone-100/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-900 text-center mb-10">
              More <span className="text-transparent bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text">Agra Experiences</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { title: "Same Day Agra Tour", href: "/same-day-agra-tour-from-delhi" },
                { title: "Same Day Taj Tour", href: "/same-day-taj-mahal-tour" },
                { title: "Taj from Delhi", href: "/taj-mahal-tour-from-delhi" },
                { title: "Moonlight Taj Tour", href: "/moonlight-taj-mahal-tour" },
                { title: "Airport to Agra", href: "/delhi-airport-to-agra-taxi" },
                { title: "Agra Day Trip", href: "/agra-day-trip-from-delhi" },
                { title: "Agra Food Tour", href: "/agra-food-tour" },
                { title: "Shopping Guide", href: "/agra-shopping-guide" },
                { title: "Beyond Taj", href: "/agra-beyond-taj-mahal" },
                { title: "Travel Guide", href: "/agra-travel-guide" },
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

        {/* === CTA: Dawn Gradient Banner === */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-purple-800 to-amber-700" />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-orange-500/20 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[150px]" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <Sunrise className="w-14 h-14 text-amber-300 mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Watch the Sun Rise <br />Over the Taj Mahal
            </h2>
            <p className="text-purple-200/80 text-lg mb-8 max-w-xl mx-auto">
              An experience you will never forget. Book your sunrise tour today. From ₹4,500.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-400 text-stone-900 px-10 py-5 rounded-full font-bold text-lg shadow-2xl shadow-amber-500/30 hover:scale-105 transition-all">
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=Book sunrise Taj Mahal tour" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl text-white px-10 py-5 rounded-full font-bold text-lg border border-amber-300/20 hover:bg-white/20 transition-all">
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
            <span className="text-stone-800 font-medium">Sunrise Taj Mahal Tour from Delhi</span>
          </div>
        </nav>

      </div>
    </>
  );
}
