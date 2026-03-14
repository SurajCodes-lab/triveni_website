import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, Calendar, ArrowRight, IndianRupee, Sunrise, Camera } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Same Day Taj Mahal Tour | Sunrise Visit ₹4,500 | 2026',
  description: 'Same day Taj Mahal tour by private car. Sunrise visit, golden hour photography. From Delhi ₹4,500, Jaipur ₹5,500. Entry details & tips. Call 7668570551.',
  keywords: 'same day taj mahal tour, taj mahal day trip, taj mahal visit by car, taj mahal sunrise tour, taj mahal one day tour',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/same-day-taj-mahal-tour' },
  openGraph: {
    title: 'Same Day Taj Mahal Tour | Private Car ₹4,500 | Sunrise Visit',
    description: 'Visit the Taj Mahal in a single day. Private AC car, sunrise option, golden hour photography tips. Book now!',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/same-day-taj-mahal-tour',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/taj-mahal-hero.jpg', width: 1200, height: 630, alt: 'Same Day Taj Mahal Tour' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Same Day Taj Mahal Tour | ₹4,500 Private Car',
    description: 'Visit Taj Mahal in one day. Sunrise visit option, photography tips. Private AC cab.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/taj-mahal-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function SameDayTajMahalTourPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Same Day Taj Mahal Tour", "item": "https://www.trivenicabs.in/same-day-taj-mahal-tour" },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Same Day Taj Mahal Tour",
    "description": "Visit the Taj Mahal in a single day by private car. Sunrise and regular visit options from Delhi, Jaipur, and other cities.",
    "touristType": "Cultural Tourist",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" },
    },
    "offers": { "@type": "AggregateOffer", "lowPrice": "4500", "highPrice": "9500", "priceCurrency": "INR" },
  };

  const faqData = [
    { question: "How much does a same day Taj Mahal tour cost?", answer: "From Delhi: ₹4,500 (sedan) to ₹6,500 (SUV). From Jaipur: ₹5,500 (sedan) to ₹8,500 (SUV). From Lucknow: ₹6,000. All prices include round trip, tolls, parking, and driver allowance. Entry tickets are separate." },
    { question: "What is the best time to visit the Taj Mahal?", answer: "Sunrise (6:00-7:30 AM) offers the most magical light and fewer crowds. The marble changes from pink to gold to white as the sun rises. Second best is late afternoon (3:00-5:00 PM) for warm golden hour light. Avoid midday in summer (very hot) and foggy winter mornings (December-January)." },
    { question: "Is the Taj Mahal closed on any day?", answer: "Yes, the Taj Mahal is closed every Friday for prayers at the mosque inside the complex. The Taj is open from 30 minutes before sunrise to 30 minutes before sunset on all other days. Night viewing is available on full moon nights (separate booking through ASI)." },
    { question: "What is the Taj Mahal entry fee?", answer: "Indian citizens: ₹50, Foreign tourists: ₹1,100, SAARC/BIMSTEC: ₹540. Mausoleum entry (going inside): extra ₹200. Children under 15: Free. All tickets are now available online at the ASI website or at the counter." },
    { question: "Which gate is best to enter the Taj Mahal?", answer: "The East Gate has the shortest queues and fastest entry. The West Gate is closest to the parking lot (most common). The South Gate is open only on weekends and holidays. Our drivers will drop you at the East Gate for the quickest entry." },
    { question: "Can I take photographs inside the Taj Mahal?", answer: "Photography is allowed in the gardens and exterior but is strictly prohibited inside the main mausoleum. Tripods, selfie sticks, and drones are not allowed. Mobile phones and small cameras are permitted in the complex. We share photography tips with all our guests." },
    { question: "How long do I need to visit the Taj Mahal?", answer: "Allow 2-3 hours for a thorough visit including the gardens, the main mausoleum, the mosque, and the Mehman Khana. Photography enthusiasts should plan 3-4 hours. A quick visit covering the main viewpoints takes about 1.5 hours." },
    { question: "Can I combine Taj Mahal with other Agra sights?", answer: "Absolutely! Our standard itinerary combines Taj Mahal + Agra Fort (1.5 hrs) + Baby Taj (45 min) + Mehtab Bagh (30 min). You can also add Fatehpur Sikri (extra ₹800, 2 hrs). We customize based on your interest and time." },
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

  const photographySpots = [
    { name: "Diana Bench", desc: "The iconic Princess Diana photo spot on the central bench. Best at sunrise with the Taj perfectly framed behind the reflecting pool.", time: "Sunrise" },
    { name: "Reflecting Pool", desc: "Stand near the central water channel for the classic reflection shot. Water must be still -- early morning is ideal.", time: "6-7 AM" },
    { name: "Great Gate Frame", desc: "Shoot the Taj through the Darwaza-i-Rauza (Great Gate) arch. Creates a dramatic framing effect with the red sandstone.", time: "Any time" },
    { name: "Mosque Side", desc: "From the mosque (left side), capture a unique angle with fewer tourists. Beautiful symmetry with the white marble.", time: "8-9 AM" },
    { name: "Yamuna Viewpoint", desc: "Behind the Taj from the riverside. Accessible from Mehtab Bagh across the Yamuna for a completely different perspective.", time: "Sunset" },
    { name: "Close-up Inlay", desc: "The marble inlay work (Pietra Dura) on the walls. Macro shots of precious stone flowers embedded in white marble are stunning.", time: "10 AM+" },
  ];

  const cityPricing = [
    { city: "Delhi", sedan: "4,500", suv: "6,500", time: "3-3.5 hrs", distance: "233 km", route: "Yamuna Expressway", color: "amber" },
    { city: "Jaipur", sedan: "5,500", suv: "8,500", time: "4-4.5 hrs", distance: "240 km", route: "NH-21", color: "rose" },
    { city: "Lucknow", sedan: "6,000", suv: "9,500", time: "5-5.5 hrs", distance: "335 km", route: "Agra-Lucknow Expressway", color: "indigo" },
  ];

  const entryDetails = [
    { category: "Indian Citizens", fee: "₹50", mausoleum: "+₹200", notes: "Carry valid ID proof" },
    { category: "Foreign Tourists", fee: "₹1,100", mausoleum: "+₹200", notes: "Passport recommended" },
    { category: "SAARC/BIMSTEC", fee: "₹540", mausoleum: "+₹200", notes: "Country ID required" },
    { category: "Children (Under 15)", fee: "Free", mausoleum: "Free", notes: "All nationalities" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-stone-50">

        {/* === HERO: Photography Showcase Split Design === */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Gradient background with camera viewfinder aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-amber-950/80 to-stone-900" />

          {/* Viewfinder Grid Lines */}
          <div className="absolute inset-0">
            <div className="absolute top-[15%] left-0 right-0 h-px bg-amber-400/10" />
            <div className="absolute top-[33%] left-0 right-0 h-px bg-amber-400/10" />
            <div className="absolute top-[66%] left-0 right-0 h-px bg-amber-400/10" />
            <div className="absolute top-[85%] left-0 right-0 h-px bg-amber-400/10" />
            <div className="absolute left-[15%] top-0 bottom-0 w-px bg-amber-400/10" />
            <div className="absolute left-[33%] top-0 bottom-0 w-px bg-amber-400/10" />
            <div className="absolute left-[66%] top-0 bottom-0 w-px bg-amber-400/10" />
            <div className="absolute left-[85%] top-0 bottom-0 w-px bg-amber-400/10" />
          </div>

          {/* Corner Brackets (camera viewfinder style) */}
          <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-amber-400/30 rounded-tl-lg" />
          <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-amber-400/30 rounded-tr-lg" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-amber-400/30 rounded-bl-lg" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-amber-400/30 rounded-br-lg" />

          {/* Light Flare */}
          <div className="absolute top-[20%] right-[20%] w-[500px] h-[500px] bg-amber-500/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-[10%] left-[10%] w-80 h-80 bg-yellow-400/5 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Text Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-amber-500/10 backdrop-blur-sm border border-amber-400/20 rounded-full px-4 py-2 mb-6">
                  <Camera className="w-4 h-4 text-amber-300" />
                  <span className="text-amber-200 text-sm font-medium tracking-wide">Photography-Focused Tour 2026</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[0.95] mb-6">
                  Same Day
                  <span className="block text-transparent bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text">Taj Mahal</span>
                  <span className="block text-3xl md:text-4xl font-light text-stone-400 mt-3">Tour by Private Car</span>
                </h1>

                <p className="text-stone-400 text-lg mb-8 max-w-lg leading-relaxed">
                  Witness the world&apos;s greatest monument to love. Sunrise golden hour, expert photography guidance, private AC cab from your city.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <Link href="tel:+917668570551" className="group inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-400 text-stone-900 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 transition-all">
                    <Phone className="w-5 h-5" /> Call: 7668570551
                  </Link>
                  <Link href="https://wa.me/917668570551?text=I want to book a same day Taj Mahal tour" className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl text-white px-8 py-4 rounded-2xl font-bold border border-amber-400/20 hover:bg-white/10 transition-all">
                    WhatsApp Booking <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Right: Floating Info Cards */}
              <div className="relative hidden lg:block">
                <div className="space-y-4">
                  {[
                    { label: "From Delhi", price: "₹4,500", time: "3 hrs drive", color: "from-amber-500/20 to-amber-600/10" },
                    { label: "From Jaipur", price: "₹5,500", time: "4.5 hrs drive", color: "from-rose-500/20 to-rose-600/10" },
                    { label: "From Lucknow", price: "₹6,000", time: "5 hrs drive", color: "from-indigo-500/20 to-indigo-600/10" },
                  ].map((item, i) => (
                    <div key={i} className={`bg-gradient-to-r ${item.color} backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-amber-400/30 transition-all group`} style={{ transform: `translateX(${i * 30}px)` }}>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="text-white font-bold text-lg">{item.label}</div>
                          <div className="text-stone-400 text-sm">{item.time}</div>
                        </div>
                        <div className="text-3xl font-black text-transparent bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text">{item.price}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Floating Camera Badge */}
                <div className="absolute -top-6 -right-4 bg-amber-500 text-stone-900 rounded-2xl p-4 shadow-2xl shadow-amber-500/30 rotate-6">
                  <Camera className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>

          {/* Diagonal Cut Bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="w-full h-16">
              <path d="M0 80 L0 40 L720 80 L1440 20 L1440 80Z" fill="#fafaf9" />
            </svg>
          </div>
        </section>

        {/* === TRUST BAR: Horizontal Scroll Ticker === */}
        <section className="py-8 px-4 border-b border-stone-200">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {[
                { icon: Shield, text: "GPS-Tracked Vehicles", value: "100%" },
                { icon: Users, text: "Happy Tourists", value: "5000+" },
                { icon: Star, text: "Google Rating", value: "4.9★" },
                { icon: Clock, text: "On-Time Guarantee", value: "99.5%" },
                { icon: Car, text: "Fleet Size", value: "50+" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-xl font-black text-stone-900">{item.value}</div>
                    <div className="text-xs text-stone-500">{item.text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === ENTRY DETAILS: Premium Dark Table === */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Essential Information</div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-3">
                Taj Mahal <span className="text-transparent bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text">Entry Details</span>
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto">Everything you need to know before visiting. Timings: 30 minutes before sunrise to 30 minutes before sunset. Closed every Friday.</p>
            </div>

            <div className="bg-stone-900 rounded-3xl overflow-hidden shadow-2xl border border-stone-800">
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 p-5 bg-gradient-to-r from-amber-600 to-yellow-500 text-stone-900 font-bold text-sm">
                <div>Category</div>
                <div>Entry Fee</div>
                <div>Mausoleum</div>
                <div>Notes</div>
              </div>
              {/* Table Rows */}
              {entryDetails.map((row, i) => (
                <div key={i} className={`grid grid-cols-4 gap-4 p-5 items-center ${i % 2 === 0 ? 'bg-stone-900' : 'bg-stone-800/50'} border-b border-stone-800 last:border-0`}>
                  <div className="text-white font-semibold">{row.category}</div>
                  <div className="text-amber-300 font-bold text-lg">{row.fee}</div>
                  <div className="text-stone-400">{row.mausoleum}</div>
                  <div className="text-stone-500 text-sm">{row.notes}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Opening Hours", desc: "30 min before sunrise to 30 min before sunset", icon: Clock },
                { title: "Closed Day", desc: "Every Friday for congregational prayers", icon: Calendar },
                { title: "Best Entry Gate", desc: "East Gate -- shortest queue, quickest entry", icon: MapPin },
              ].map((item, i) => (
                <div key={i} className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
                  <item.icon className="w-5 h-5 text-amber-600 mb-2" />
                  <div className="font-bold text-stone-800 text-sm">{item.title}</div>
                  <div className="text-stone-500 text-sm">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === OVERVIEW CONTENT === */}
        <section className="py-20 px-4 bg-gradient-to-br from-amber-50 via-yellow-50/30 to-stone-50">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wider uppercase">About This Tour</div>
                <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
                  Your Complete <span className="text-transparent bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text">Taj Mahal</span> Day Trip
                </h2>
                <div className="space-y-5 text-stone-600 text-lg leading-relaxed">
                  <p>
                    The <strong className="text-stone-800">Same Day Taj Mahal Tour</strong> is our most popular offering and the best way to experience Agra in a single day. Whether you are visiting India for the first time or making a repeat trip, seeing the Taj Mahal at sunrise remains an unforgettable experience. Read our <Link href="/agra-travel-guide" className="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-300">complete Agra travel guide</Link> for everything you need to plan your visit.
                  </p>
                  <p>
                    Our <Link href="/outstation-cabs" className="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-300">outstation cab service</Link> takes you from your city to the Taj Mahal&apos;s doorstep in comfort. From Delhi, the drive is just 3 hours on the Yamuna Expressway -- check our <Link href="/blog/delhi-to-agra-cab-fare-guide-2026" className="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-300">Delhi to Agra cab fare guide</Link> for detailed pricing. From Jaipur, it is 4.5 hours via NH-21. We time the departure so you arrive for the magical <Link href="/sunrise-taj-mahal-tour-from-delhi" className="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-300">sunrise Taj Mahal experience</Link> when the white marble glows pink, then gold, then brilliant white.
                  </p>
                  <p>
                    Being based in Agra, our drivers know the fastest entry gates, the best photography angles, and the ideal sequence for visiting. Most guests combine the Taj with <Link href="/sightseeing/agra" className="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-300">Agra Fort</Link>, Baby Taj, and <Link href="/sightseeing/agra-etmad-mehtab-bagh-tour" className="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-300">Mehtab Bagh</Link> for a complete Agra experience. For a deeper exploration, our <Link href="/sightseeing/agra" className="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-300">Agra local sightseeing tour</Link> covers all major monuments. Guests arriving via flight can book our <Link href="/delhi-airport-to-agra-taxi" className="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-300">Delhi airport to Agra taxi</Link> for a seamless transfer.
                  </p>
                  <p>
                    With <Link href="/safety" className="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-300">GPS-tracked vehicles and verified drivers</Link>, your safety is guaranteed. Over 5,000 tourists have given us a <Link href="/reviews" className="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-300">4.9-star rating</Link> for our Agra tours. Planning a <Link href="/same-day-fatehpur-sikri-from-agra" className="text-amber-700 hover:text-amber-800 font-semibold underline decoration-amber-300">Fatehpur Sikri side trip</Link>? Add it to your itinerary for just ₹800 extra.
                  </p>
                </div>
              </div>

              {/* Sidebar Quick Facts */}
              <div>
                <div className="bg-white rounded-3xl p-6 shadow-lg border border-stone-100 sticky top-8">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-400 flex items-center justify-center">
                      <Camera className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-stone-900">Tour Highlights</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Sunrise / Golden hour Taj visit",
                      "Private AC sedan or SUV",
                      "Expert Agra-local driver",
                      "Combine 4 monuments in 1 day",
                      "Photography tips included",
                      "Door-to-door convenience",
                      "All tolls & parking included",
                      "Customize your itinerary",
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                        <span className="text-stone-600 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-5 border-t border-stone-100">
                    <Link href="tel:+917668570551" className="block text-center bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                      <Phone className="w-4 h-4 inline mr-2" />Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === PHOTOGRAPHY SPOTS: Staggered Gallery Cards === */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Capture the Moment</div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-3">
                Best <span className="text-transparent bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text">Photography</span> Spots
              </h2>
              <p className="text-stone-500 max-w-2xl mx-auto">6 iconic locations for the perfect Taj Mahal photograph, curated by our local drivers</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photographySpots.map((spot, i) => (
                <div key={i} className={`group relative bg-white rounded-3xl overflow-hidden border border-stone-100 hover:border-amber-200 shadow-sm hover:shadow-xl transition-all duration-300 ${i % 3 === 1 ? 'md:translate-y-6' : ''}`}>
                  {/* Colored Top Band */}
                  <div className="h-2 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500" />
                  <div className="p-6">
                    {/* Number Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                        <span className="text-amber-700 font-black text-sm">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">{spot.time}</span>
                    </div>
                    <h3 className="text-xl font-bold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors">{spot.name}</h3>
                    <p className="text-stone-500 text-sm leading-relaxed">{spot.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === PRICING: City Comparison Horizontal Cards === */}
        <section className="py-20 px-4 bg-gradient-to-b from-stone-900 to-stone-950 relative overflow-hidden">
          {/* Decorative Bokeh */}
          <div className="absolute top-[20%] left-[5%] w-60 h-60 bg-amber-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-[10%] right-[10%] w-80 h-80 bg-yellow-500/5 rounded-full blur-[120px]" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-14">
              <div className="inline-block bg-amber-500/10 backdrop-blur-sm text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full mb-4 border border-amber-500/20 tracking-wider uppercase">Transparent Pricing</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Tour Pricing <span className="text-transparent bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text">by City</span>
              </h2>
              <p className="text-stone-400 max-w-2xl mx-auto">Fixed fares from multiple cities. All-inclusive pricing with no hidden charges.</p>
            </div>

            <div className="space-y-6">
              {cityPricing.map((city, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/10 hover:border-amber-400/30 transition-all group">
                  <div className="grid md:grid-cols-6 gap-6 items-center">
                    {/* City Name */}
                    <div className="md:col-span-1">
                      <div className="text-3xl font-black text-white group-hover:text-amber-300 transition-colors">{city.city}</div>
                      <div className="text-stone-500 text-sm">{city.route}</div>
                    </div>
                    {/* Route Info */}
                    <div className="md:col-span-1 flex gap-4 md:flex-col md:gap-1">
                      <div className="text-amber-300 font-semibold">{city.distance}</div>
                      <div className="text-stone-500 text-sm">{city.time} drive</div>
                    </div>
                    {/* Sedan Price */}
                    <div className="md:col-span-1">
                      <div className="bg-stone-800/50 rounded-2xl p-4 text-center">
                        <div className="text-stone-500 text-xs mb-1">Sedan</div>
                        <div className="text-2xl font-black text-white">₹{city.sedan}</div>
                      </div>
                    </div>
                    {/* SUV Price */}
                    <div className="md:col-span-1">
                      <div className="bg-amber-500/10 rounded-2xl p-4 text-center border border-amber-500/20">
                        <div className="text-amber-300 text-xs mb-1">SUV</div>
                        <div className="text-2xl font-black text-amber-300">₹{city.suv}</div>
                      </div>
                    </div>
                    {/* CTA */}
                    <div className="md:col-span-2">
                      <div className="flex gap-3">
                        <Link href="tel:+917668570551" className="flex-1 text-center bg-gradient-to-r from-amber-500 to-yellow-400 text-stone-900 px-4 py-3 rounded-xl font-bold hover:shadow-lg hover:shadow-amber-500/20 transition-all text-sm">
                          <Phone className="w-4 h-4 inline mr-1" /> Call Now
                        </Link>
                        <Link href={`https://wa.me/917668570551?text=Taj Mahal tour from ${city.city}`} className="flex-1 text-center bg-white/5 text-white px-4 py-3 rounded-xl font-bold border border-white/10 hover:bg-white/10 transition-all text-sm">
                          WhatsApp
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-stone-500 text-sm">All prices include: Round trip fare + Tolls + Parking + Driver allowance. Entry tickets & meals not included.</p>
            </div>
          </div>
        </section>

        {/* === INCLUDED / EXCLUDED: Side-by-Side Gradient Panels === */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-stone-900">
                What&apos;s <span className="text-transparent bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text">Included</span> & <span className="text-transparent bg-gradient-to-r from-rose-500 to-red-500 bg-clip-text">Excluded</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Included */}
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-8 border border-emerald-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-emerald-900">Included in Package</h3>
                </div>
                <div className="space-y-3">
                  {["AC cab (round trip to your city)", "Experienced Agra-local driver", "Expressway/highway toll charges", "Parking at all monuments", "Driver allowance & night charges", "Water bottles in vehicle", "Route & photography guidance"].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white/60 rounded-xl px-4 py-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span className="text-stone-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Excluded */}
              <div className="bg-gradient-to-br from-rose-50 to-red-50 rounded-3xl p-8 border border-rose-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-red-500 rounded-xl flex items-center justify-center">
                    <IndianRupee className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-rose-900">Not Included</h3>
                </div>
                <div className="space-y-3">
                  {["Monument entry tickets (see table above)", "Meals and refreshments", "Tour guide charges (₹500-800)", "Personal expenses & shopping", "Camera charges at monuments", "Any sightseeing not in plan", "Hotel accommodation"].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 bg-white/60 rounded-xl px-4 py-3">
                      <ChevronRight className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                      <span className="text-stone-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === TIPS: Bento Grid Photography Tips === */}
        <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-stone-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Expert Advice</div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900">
                <span className="text-transparent bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text">Photography</span> & Visit Tips
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Large Card */}
              <div className="md:col-span-2 bg-gradient-to-br from-amber-600 to-yellow-500 rounded-3xl p-8 text-stone-900">
                <Camera className="w-8 h-8 mb-4 opacity-80" />
                <h3 className="text-2xl font-bold mb-3">The Golden Hour Secret</h3>
                <p className="text-stone-800 leading-relaxed">Arrive 15 minutes before the gates open. The Taj Mahal marble changes color dramatically in the first hour after sunrise: from soft pink to peach to warm gold to brilliant white. The reflection pool is stillest in the early morning, creating the perfect mirror image. Position yourself at the center of the water channel for the classic shot.</p>
              </div>
              {/* Small Card */}
              <div className="bg-white rounded-3xl p-6 border border-stone-100 shadow-sm">
                <Sunrise className="w-6 h-6 text-amber-600 mb-3" />
                <h3 className="font-bold text-stone-900 mb-2">Dress Code</h3>
                <p className="text-stone-500 text-sm leading-relaxed">No dress code restrictions. Wear comfortable shoes (lots of walking). Shoe covers are provided for the mausoleum. Light clothing in summer. Carry a light jacket in winter mornings.</p>
              </div>
              {/* Bottom Row */}
              <div className="bg-white rounded-3xl p-6 border border-stone-100 shadow-sm">
                <Calendar className="w-6 h-6 text-amber-600 mb-3" />
                <h3 className="font-bold text-stone-900 mb-2">Skip the Queues</h3>
                <p className="text-stone-500 text-sm leading-relaxed">Buy tickets online on the ASI website. Use the East Gate for shortest queues. Weekdays are far less crowded than weekends. Avoid public holidays.</p>
              </div>
              <div className="bg-white rounded-3xl p-6 border border-stone-100 shadow-sm">
                <Camera className="w-6 h-6 text-amber-600 mb-3" />
                <h3 className="font-bold text-stone-900 mb-2">What NOT to Bring</h3>
                <p className="text-stone-500 text-sm leading-relaxed">Tripods, selfie sticks, drones, food items, tobacco, earphones, and bags larger than 30cm are not permitted. Use lockers near the entry gates (₹10).</p>
              </div>
              <div className="bg-white rounded-3xl p-6 border border-stone-100 shadow-sm">
                <Star className="w-6 h-6 text-amber-600 mb-3" />
                <h3 className="font-bold text-stone-900 mb-2">Pro Tip</h3>
                <p className="text-stone-500 text-sm leading-relaxed">Visit the Taj first, then Agra Fort (you can see the Taj from the Fort). End with Baby Taj and Mehtab Bagh at sunset for the reverse Taj view across the Yamuna.</p>
              </div>
            </div>
          </div>
        </section>

        {/* === FAQs: Accordion-Style Cards === */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-4 py-1.5 rounded-full mb-4 tracking-wider uppercase">Questions Answered</div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900">
                Frequently Asked <span className="text-transparent bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text">Questions</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, i) => (
                <div key={i} className="bg-white rounded-2xl border border-stone-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-100 to-yellow-100 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-amber-700 font-bold text-xs">Q{i + 1}</span>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-stone-900 mb-2">{faq.question}</h3>
                        <p className="text-stone-500 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === INTERLINKS: Photo Strip Cards === */}
        <section className="py-20 px-4 bg-stone-100/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-stone-900">
                Explore More <span className="text-transparent bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text">Agra Experiences</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "Same Day Agra Tour from Delhi", href: "/same-day-agra-tour-from-delhi", desc: "Full Agra sightseeing from Delhi", tag: "Most Popular" },
                { title: "Taj Mahal Tour from Delhi", href: "/taj-mahal-tour-from-delhi", desc: "Delhi to Taj by private car", tag: "Route Guide" },
                { title: "Sunrise Taj Mahal Tour", href: "/sunrise-taj-mahal-tour-from-delhi", desc: "Golden hour photography experience", tag: "Sunrise" },
                { title: "Moonlight Taj Mahal Tour", href: "/moonlight-taj-mahal-tour", desc: "Full moon night viewing", tag: "Night Tour" },
                { title: "Delhi Airport to Agra Taxi", href: "/delhi-airport-to-agra-taxi", desc: "Direct airport transfer ₹3,500", tag: "Airport" },
                { title: "Agra Day Trip Guide", href: "/agra-day-trip-from-delhi", desc: "Cost breakdown & itinerary options", tag: "Budget" },
                { title: "Agra Food Tour", href: "/agra-food-tour", desc: "Petha, Mughlai & street food", tag: "Culinary" },
                { title: "Agra Shopping Guide", href: "/agra-shopping-guide", desc: "Marble inlay, leather & crafts", tag: "Shopping" },
                { title: "Agra Beyond Taj Mahal", href: "/agra-beyond-taj-mahal", desc: "Hidden gems & day trips", tag: "Explorer" },
                { title: "Agra Travel Guide", href: "/agra-travel-guide", desc: "Complete visitor guide 2026", tag: "Guide" },
                { title: "Agra Sightseeing Tours", href: "/sightseeing/agra", desc: "All Agra attractions & tours", tag: "Sightseeing" },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group bg-white rounded-2xl p-5 border border-stone-100 hover:border-amber-200 shadow-sm hover:shadow-lg transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">{link.tag}</span>
                    <ArrowRight className="w-4 h-4 text-stone-300 group-hover:text-amber-500 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="font-bold text-stone-900 group-hover:text-amber-700 transition-colors mb-1">{link.title}</h3>
                  <p className="text-stone-500 text-sm">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* === FINAL CTA: Full-Width Photo-Inspired Banner === */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'80\' height=\'80\' viewBox=\'0 0 80 80\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000\' fill-opacity=\'1\'%3E%3Cpath d=\'M40 0l40 40-40 40L0 40z\' fill=\'none\' stroke=\'%23000\' stroke-width=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Camera className="w-4 h-4 text-stone-900" />
              <span className="text-stone-900 font-semibold text-sm">Capture Memories That Last Forever</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-stone-900 mb-6 leading-tight">
              Ready to See the <br />Taj Mahal Today?
            </h2>

            <p className="text-stone-800/80 text-lg mb-8 max-w-2xl mx-auto">
              Book your private car and let our Agra-local drivers ensure you have the perfect visit. From ₹4,500 all-inclusive.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-stone-900 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-stone-800 shadow-2xl transition-all">
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to book a Taj Mahal tour" className="inline-flex items-center gap-2 bg-white text-stone-900 px-10 py-5 rounded-2xl font-bold text-lg hover:bg-stone-50 shadow-lg transition-all">
                WhatsApp Booking <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <nav className="py-4 px-4 bg-stone-100 border-t border-stone-200">
          <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-stone-500">
            <Link href="/" className="hover:text-amber-600 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-stone-800 font-medium">Same Day Taj Mahal Tour</span>
          </div>
        </nav>

      </div>
    </>
  );
}
