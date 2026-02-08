import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, Calendar, ArrowRight, IndianRupee, Sunrise, Camera, Route, Coffee } from '@/components/ui/icons';

export const metadata = {
  title: 'Same Day Agra Tour from Delhi | ₹4,500 AC Cab | 2026',
  description: 'Book same day Agra tour from Delhi by car. Taj Mahal, Agra Fort, Baby Taj visit. AC sedan ₹4,500, SUV ₹6,500. Yamuna Expressway. Call 7668570551.',
  keywords: 'same day agra tour from delhi, delhi to agra one day trip, agra tour from delhi by car, delhi agra same day tour, taj mahal day trip from delhi',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/same-day-agra-tour-from-delhi' },
  openGraph: {
    title: 'Same Day Agra Tour from Delhi | Taj Mahal Day Trip ₹4,500',
    description: 'Full day Agra tour from Delhi. Visit Taj Mahal, Agra Fort, Baby Taj. AC sedan ₹4,500. Yamuna Expressway route. 5000+ happy tourists.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/same-day-agra-tour-from-delhi',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/taj-mahal-hero.jpg', width: 1200, height: 630, alt: 'Same Day Agra Tour from Delhi - Taj Mahal Visit' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Same Day Agra Tour from Delhi | ₹4,500 AC Cab',
    description: 'Delhi to Agra same day tour. Taj Mahal, Agra Fort, Baby Taj. AC sedan ₹4,500. Book now!',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/taj-mahal-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function SameDayAgraTourFromDelhiPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Same Day Agra Tour from Delhi", "item": "https://www.trivenicabs.in/same-day-agra-tour-from-delhi" },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Same Day Agra Tour from Delhi",
    "description": "Full day Agra sightseeing tour from Delhi covering Taj Mahal, Agra Fort, Itimad-ud-Daulah, and Mehtab Bagh with private AC cab via Yamuna Expressway.",
    "touristType": "Cultural Tourist",
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Pickup from Delhi hotel/location at 5:00-6:00 AM" },
        { "@type": "ListItem", "position": 2, "name": "Drive to Agra via Yamuna Expressway (3-3.5 hours)" },
        { "@type": "ListItem", "position": 3, "name": "Visit Taj Mahal (2 hours)" },
        { "@type": "ListItem", "position": 4, "name": "Visit Agra Fort (1.5 hours)" },
        { "@type": "ListItem", "position": 5, "name": "Lunch break at local restaurant" },
        { "@type": "ListItem", "position": 6, "name": "Visit Itimad-ud-Daulah / Baby Taj (45 min)" },
        { "@type": "ListItem", "position": 7, "name": "Visit Mehtab Bagh for Taj Mahal view (45 min)" },
        { "@type": "ListItem", "position": 8, "name": "Return to Delhi by 8:00-9:00 PM" },
      ],
    },
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "address": { "@type": "PostalAddress", "streetAddress": "366 Dandupura near Tajganj", "addressLocality": "Agra", "postalCode": "282006", "addressCountry": "IN" },
    },
    "offers": { "@type": "AggregateOffer", "lowPrice": "4500", "highPrice": "12000", "priceCurrency": "INR" },
  };

  const faqData = [
    { question: "How much does a same day Agra tour from Delhi cost?", answer: "A same day Agra tour from Delhi costs ₹4,500 for an AC sedan (Swift Dzire), ₹6,500 for an SUV (Innova/Ertiga), and ₹12,000 for a Tempo Traveller. This includes the round trip, toll charges, parking, and driver allowance." },
    { question: "How long does it take to travel from Delhi to Agra?", answer: "Delhi to Agra takes approximately 3 to 3.5 hours via the Yamuna Expressway (165 km). The total distance is around 233 km including city roads. Early morning departures (5-6 AM) have minimal traffic." },
    { question: "What is the best time to start a same day Agra tour?", answer: "We recommend starting at 5:00-6:00 AM from Delhi. This ensures you reach Agra by 8:30-9:00 AM, giving you ample time to visit all major attractions before returning by 8-9 PM." },
    { question: "Is Taj Mahal closed on any day?", answer: "Yes, the Taj Mahal is closed every Friday for prayers. Plan your visit on any other day. Agra Fort and other monuments remain open all days. We recommend visiting on weekdays to avoid weekend crowds." },
    { question: "What is included in the Agra tour package?", answer: "Our package includes AC cab (round trip), experienced driver, Yamuna Expressway toll, parking at all monuments, and driver allowance. Monument entry tickets, meals, and guide charges are not included." },
    { question: "Can I customize the itinerary?", answer: "Absolutely! While our standard itinerary covers Taj Mahal, Agra Fort, Baby Taj, and Mehtab Bagh, you can add Fatehpur Sikri (extra ₹800), Sikandra, or swap destinations. Just inform us when booking." },
    { question: "Which route do you take from Delhi to Agra?", answer: "We take the Yamuna Expressway which is the fastest route (165 km, 6-lane expressway). It is well-maintained and cuts travel time to 2.5-3 hours compared to 4-5 hours on the old NH-2 route." },
    { question: "Is it safe to travel Delhi to Agra at 5 AM?", answer: "Yes, the Yamuna Expressway is very safe with 24/7 highway patrol, CCTV surveillance, emergency call boxes every 5 km, and well-lit toll plazas. Our drivers are experienced with early morning departures." },
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

  const itinerary = [
    { time: "5:00 - 6:00 AM", title: "Pickup from Delhi", desc: "Our driver picks you up from your Delhi hotel, airport, or any location. Comfortable AC cab ready for the journey.", icon: Car },
    { time: "6:00 - 9:00 AM", title: "Drive via Yamuna Expressway", desc: "Scenic 3-hour drive on the 6-lane Yamuna Expressway. Stop for tea/breakfast at a highway dhaba if needed.", icon: Route },
    { time: "9:00 - 11:00 AM", title: "Taj Mahal Visit", desc: "Explore the iconic Taj Mahal, a UNESCO World Heritage Site. Your driver will drop you at the East/West gate.", icon: Camera },
    { time: "11:00 AM - 12:30 PM", title: "Agra Fort Visit", desc: "Visit the magnificent Agra Fort (Red Fort), another UNESCO site. See Diwan-i-Am, Diwan-i-Khas, Sheesh Mahal.", icon: MapPin },
    { time: "12:30 - 1:30 PM", title: "Lunch Break", desc: "Enjoy authentic Mughlai cuisine at a local restaurant. Try Agra famous Petha sweets and Dal Moth snacks.", icon: Coffee },
    { time: "1:30 - 2:15 PM", title: "Itimad-ud-Daulah (Baby Taj)", desc: "Visit the exquisite tomb known as the Baby Taj. Marvel at intricate marble inlay work that inspired the Taj.", icon: Star },
    { time: "2:15 - 3:00 PM", title: "Mehtab Bagh", desc: "Stunning Taj Mahal views across the Yamuna river. Perfect for photography.", icon: Sunrise },
    { time: "3:00 - 6:00 PM", title: "Return to Delhi", desc: "Comfortable return journey via Yamuna Expressway. Reach Delhi by 6-7 PM.", icon: ArrowRight },
  ];

  const pricingData = [
    { vehicle: "Sedan (Swift Dzire)", capacity: "4 Passengers", price: "4,500", features: ["AC sedan", "Comfortable boot space", "Best for couples/small families"], popular: false },
    { vehicle: "SUV (Innova / Ertiga)", capacity: "6-7 Passengers", price: "6,500", features: ["Spacious AC SUV", "Large luggage space", "Best for families/groups"], popular: true },
    { vehicle: "Tempo Traveller", capacity: "12-16 Passengers", price: "12,000", features: ["AC Tempo Traveller", "Pushback seats", "Best for large groups"], popular: false },
  ];

  const included = ["AC cab (round trip Delhi-Agra-Delhi)", "Experienced driver familiar with Agra", "Yamuna Expressway toll charges", "Parking at all monuments", "Driver allowance & night charges", "Water bottles in vehicle"];
  const excluded = ["Monument entry tickets (Taj Mahal ₹50 Indian / ₹1100 Foreign)", "Meals and refreshments", "Tour guide charges (₹500-800)", "Personal expenses and shopping", "Camera charges at monuments", "Any additional sightseeing not in itinerary"];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-stone-50">

        {/* === HERO: Grand Mughal Arch Gateway Design === */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
          {/* Ornate Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-950 via-stone-900 to-stone-950" />
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23d4a373\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

          {/* Golden Orbs */}
          <div className="absolute top-10 left-[10%] w-80 h-80 bg-amber-500/15 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-[10%] w-96 h-96 bg-yellow-600/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/5 rounded-full blur-[150px]" />

          {/* Mughal Arch Frame - SVG Decorative */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl opacity-10">
            <svg viewBox="0 0 800 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 100 L0 40 Q400 -40 800 40 L800 100" stroke="#d4a373" strokeWidth="2" fill="none" />
              <path d="M20 100 L20 50 Q400 -20 780 50 L780 100" stroke="#d4a373" strokeWidth="1" fill="none" />
            </svg>
          </div>

          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            {/* Ornamental Top Badge */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 rounded-full blur-sm opacity-40" />
                <div className="relative bg-amber-900/40 backdrop-blur-xl px-8 py-2.5 rounded-full border border-amber-400/30">
                  <span className="text-amber-200 font-semibold text-sm tracking-[0.2em] uppercase">Delhi to Agra Day Trip 2026</span>
                </div>
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-[0.95] tracking-tight">
              Same Day
              <span className="block text-transparent bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text">Agra Tour</span>
              <span className="block text-3xl md:text-4xl lg:text-5xl font-light text-amber-200/60 mt-2">from Delhi</span>
            </h1>

            <p className="text-lg md:text-xl text-stone-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Taj Mahal, Agra Fort, Baby Taj & Mehtab Bagh -- all in one magnificent day. Private AC cab via Yamuna Expressway.
            </p>

            {/* Stats Bento */}
            <div className="grid grid-cols-3 gap-3 max-w-md mx-auto mb-10">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-3 border border-amber-500/20">
                <div className="text-2xl font-bold text-amber-300">466</div>
                <div className="text-xs text-stone-500">km round trip</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-3 border border-amber-500/20">
                <div className="text-2xl font-bold text-amber-300">14-16</div>
                <div className="text-xs text-stone-500">hours total</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-3 border border-amber-500/20">
                <div className="text-2xl font-bold text-amber-300">₹4.5K</div>
                <div className="text-xs text-stone-500">starting fare</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="group inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-stone-900 px-8 py-4 rounded-full font-bold text-lg shadow-2xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 transition-all">
                <Phone className="w-5 h-5 group-hover:animate-pulse" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to book a same day Agra tour from Delhi" className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-400/20 hover:bg-white/10 hover:border-amber-400/40 transition-all">
                WhatsApp Booking
              </Link>
            </div>
          </div>

          {/* Bottom Ornamental Divider */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-12">
              <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60Z" fill="#fafaf9" />
            </svg>
          </div>
        </section>

        {/* === TRUST BAR: Floating Glassmorphism Cards === */}
        <section className="relative -mt-6 z-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: Shield, title: "Safe & Reliable", desc: "GPS-tracked vehicles", gradient: "from-emerald-500 to-teal-500" },
                { icon: Clock, title: "14-16 Hour Tour", desc: "Full day for you", gradient: "from-amber-500 to-orange-500" },
                { icon: Users, title: "5000+ Tourists", desc: "Happy travelers", gradient: "from-blue-500 to-indigo-500" },
                { icon: Star, title: "4.9 Google Rating", desc: "Verified reviews", gradient: "from-purple-500 to-pink-500" },
              ].map((f, i) => (
                <div key={i} className="bg-white rounded-2xl p-4 shadow-lg shadow-stone-200/50 border border-stone-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-3 shadow-lg`}>
                    <f.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="font-bold text-stone-800 text-sm">{f.title}</div>
                  <div className="text-xs text-stone-500">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === OVERVIEW: Split Layout with Ornamental Side === */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              {/* Left: Decorative Summary Card */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-3xl p-8 border border-amber-200/50 shadow-lg sticky top-8">
                  <div className="w-full h-1 bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 rounded-full mb-6" />
                  <h3 className="text-xl font-bold text-amber-900 mb-4">Quick Tour Facts</h3>
                  <div className="space-y-4">
                    {[
                      { label: "Route", value: "Delhi - Agra - Delhi" },
                      { label: "Distance", value: "~466 km round trip" },
                      { label: "Duration", value: "14-16 hours" },
                      { label: "Expressway", value: "Yamuna Expressway" },
                      { label: "Drive Time", value: "3-3.5 hrs one way" },
                      { label: "Best Season", value: "October - March" },
                      { label: "Monuments", value: "4 major sights" },
                      { label: "Closed Day", value: "Taj closed Fridays" },
                    ].map((item, i) => (
                      <div key={i} className="flex justify-between items-center py-2 border-b border-amber-100 last:border-0">
                        <span className="text-stone-500 text-sm">{item.label}</span>
                        <span className="font-semibold text-stone-800 text-sm">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link href="tel:+917668570551" className="block text-center bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all">
                      <Phone className="w-4 h-4 inline mr-2" />Book Now
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right: Content */}
              <div className="lg:col-span-3">
                <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wider uppercase">About This Tour</div>
                <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6 leading-tight">
                  Delhi to Agra <span className="text-transparent bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text">Same Day Tour</span> by Car
                </h2>
                <div className="space-y-5 text-stone-600 text-lg leading-relaxed">
                  <p>
                    Experience the magnificence of Agra in a single day with our <strong className="text-stone-800">same day Agra tour from Delhi</strong>. Depart early morning from your Delhi hotel, travel comfortably via the 6-lane Yamuna Expressway, and explore the city that was once the capital of the Mughal Empire.
                  </p>
                  <p>
                    Our Agra day tour covers all major monuments including the <strong className="text-stone-800">Taj Mahal</strong> (one of the Seven Wonders of the World), <strong className="text-stone-800">Agra Fort</strong> (a massive red sandstone UNESCO heritage site), <strong className="text-stone-800">Itimad-ud-Daulah</strong> (the elegant Baby Taj), and <strong className="text-stone-800">Mehtab Bagh</strong> (for the best Taj Mahal photographs from across the Yamuna).
                  </p>
                  <p>
                    Being based in Agra ourselves, we know every shortcut, the best entry gates, and the ideal visiting order to maximize your time. The entire tour takes <strong className="text-stone-800">14-16 hours</strong> with our experienced local drivers and well-maintained AC vehicles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === ITINERARY: Mughal Timeline with Arch Connectors === */}
        <section className="py-20 px-4 bg-gradient-to-b from-amber-950 to-stone-950 relative overflow-hidden">
          {/* Decorative Pattern Overlay */}
          <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23fbbf24\' fill-opacity=\'1\'%3E%3Cpath d=\'M20 0L40 20L20 40L0 20Z\' fill=\'none\' stroke=\'%23fbbf24\' stroke-width=\'0.5\'/%3E%3C/g%3E%3C/svg%3E")' }} />
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px]" />

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block bg-amber-500/10 backdrop-blur-sm text-amber-300 text-xs font-bold px-4 py-1.5 rounded-full mb-4 border border-amber-500/20 tracking-wider uppercase">Your Day Unfolds</div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Detailed <span className="text-transparent bg-gradient-to-r from-amber-300 to-yellow-200 bg-clip-text">Tour Itinerary</span>
              </h2>
              <p className="text-stone-400 max-w-2xl mx-auto">A carefully planned day to cover all of Agra&apos;s highlights without rushing</p>
            </div>

            <div className="space-y-0">
              {itinerary.map((item, idx) => (
                <div key={idx} className="group relative">
                  <div className="flex gap-6 md:gap-8 items-start">
                    {/* Timeline Line & Icon */}
                    <div className="flex flex-col items-center">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-110 transition-transform">
                        <item.icon className="w-6 h-6 text-stone-900" />
                      </div>
                      {idx < itinerary.length - 1 && (
                        <div className="w-px h-20 bg-gradient-to-b from-amber-500/40 to-transparent mt-2" />
                      )}
                    </div>

                    {/* Content Card */}
                    <div className="flex-1 pb-8">
                      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-amber-500/10 group-hover:border-amber-500/30 group-hover:bg-white/[0.07] transition-all">
                        <div className="text-sm font-bold text-amber-400 mb-1 tracking-wide">{item.time}</div>
                        <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-stone-400 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === PRICING: Mughal Arch-Topped Cards === */}
        <section className="py-20 px-4 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-300/30 to-transparent" />
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wider uppercase">Transparent Pricing</div>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-3">
                Tour <span className="text-transparent bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text">Pricing</span>
              </h2>
              <p className="text-stone-500">All toll and parking included. No hidden charges.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pricingData.map((plan, idx) => (
                <div key={idx} className="relative group">
                  {/* Arch Top */}
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-[85%] h-6 rounded-t-[100%] ${plan.popular ? 'bg-gradient-to-r from-amber-500 to-yellow-400' : 'bg-stone-200'}`} />
                  <div className={`relative bg-white rounded-3xl p-7 shadow-xl border-2 ${plan.popular ? 'border-amber-400 shadow-amber-200/30' : 'border-stone-100'} hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span className="bg-gradient-to-r from-amber-500 to-yellow-400 text-stone-900 px-5 py-1.5 rounded-full text-xs font-extrabold shadow-lg">MOST POPULAR</span>
                      </div>
                    )}
                    <div className="pt-2">
                      <h3 className="text-xl font-bold text-stone-800 mb-1">{plan.vehicle}</h3>
                      <p className="text-stone-400 text-sm mb-5">{plan.capacity}</p>
                      <div className="mb-6">
                        <span className="text-5xl font-extrabold text-stone-900">₹{plan.price}</span>
                        <span className="text-stone-400 text-sm ml-1">/round trip</span>
                      </div>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-3 text-stone-600 text-sm">
                            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" /> {f}
                          </li>
                        ))}
                      </ul>
                      <Link href="tel:+917668570551" className={`block text-center px-6 py-3.5 rounded-xl font-bold transition-all ${plan.popular ? 'bg-gradient-to-r from-amber-500 to-yellow-400 text-stone-900 shadow-lg shadow-amber-300/30 hover:shadow-amber-400/50' : 'bg-stone-100 text-stone-700 hover:bg-stone-200'}`}>
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === INCLUDED/EXCLUDED: Ornamental Split Panel === */}
        <section className="py-20 px-4 bg-gradient-to-br from-amber-50 via-white to-yellow-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-12 text-center">What&apos;s Included & Excluded</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Included */}
              <div className="relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-400 to-teal-500 rounded-full" />
                <div className="pl-6">
                  <h3 className="text-xl font-bold text-emerald-700 mb-5 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6" /> Included in Price
                  </h3>
                  <div className="space-y-3">
                    {included.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm border border-emerald-50">
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                        <span className="text-stone-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {/* Excluded */}
              <div className="relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-400 to-rose-500 rounded-full" />
                <div className="pl-6">
                  <h3 className="text-xl font-bold text-red-700 mb-5">Not Included</h3>
                  <div className="space-y-3">
                    {excluded.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm border border-red-50">
                        <span className="w-5 h-5 mt-0.5 flex-shrink-0 text-red-400 font-bold text-center">x</span>
                        <span className="text-stone-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* === TIPS: Bento Grid Layout === */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wider uppercase">Local Tips</div>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900">Booking Tips & Best Season</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Large Card */}
              <div className="md:col-span-2 bg-gradient-to-br from-amber-100 via-amber-50 to-yellow-50 rounded-3xl p-8 border border-amber-200/50">
                <h3 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2"><Calendar className="w-5 h-5 text-amber-600" /> Best Time to Visit Agra</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { season: "Oct - Mar", temp: "15-25 C", label: "Peak Season", desc: "Pleasant weather, ideal for sightseeing", color: "bg-emerald-100 text-emerald-800 border-emerald-200" },
                    { season: "Apr - Jun", temp: "35-45 C", label: "Hot Summer", desc: "Fewer crowds, better rates", color: "bg-orange-100 text-orange-800 border-orange-200" },
                    { season: "Jul - Sep", temp: "25-35 C", label: "Monsoon", desc: "Fewer tourists, Taj stunning after rain", color: "bg-blue-100 text-blue-800 border-blue-200" },
                  ].map((s, i) => (
                    <div key={i} className={`${s.color} border rounded-2xl p-4`}>
                      <div className="font-extrabold text-lg">{s.season}</div>
                      <div className="text-xs opacity-70 mb-2">{s.temp}</div>
                      <div className="font-bold text-sm mb-1">{s.label}</div>
                      <div className="text-xs opacity-80">{s.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Tall Card */}
              <div className="bg-white rounded-3xl p-6 shadow-lg border border-stone-100">
                <h3 className="text-lg font-bold text-stone-800 mb-4">Booking Tips</h3>
                <ul className="space-y-3 text-stone-600 text-sm">
                  {[
                    "Book 1-2 days in advance during peak season.",
                    "Start early (5-6 AM) to maximize sightseeing time.",
                    "Taj Mahal is closed on Fridays.",
                    "Carry ID (Aadhaar/Passport) for tickets.",
                    "Pre-book Taj tickets online to skip queues.",
                    "Wear comfortable walking shoes.",
                    "Carry sunscreen and water bottle.",
                  ].map((tip, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      <span>{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* === FAQ: Stacked Cards with Ornamental Accent === */}
        <section className="py-20 px-4 bg-gradient-to-b from-stone-50 to-amber-50/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-block bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full mb-4 tracking-wider uppercase">Got Questions?</div>
              <h2 className="text-4xl font-bold text-stone-900">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-4">
              {faqData.map((faq, idx) => (
                <div key={idx} className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl border border-stone-100 hover:border-amber-200 transition-all duration-300">
                  <h3 className="text-lg font-bold text-stone-800 mb-3 flex items-start gap-3">
                    <span className="bg-gradient-to-br from-amber-400 to-yellow-500 text-stone-900 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-extrabold flex-shrink-0 mt-0.5">Q{idx + 1}</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-stone-600 pl-11 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === INTERLINKS: Hexagonal Grid === */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-900 mb-10 text-center">Explore More Agra Tours</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: "/same-day-taj-mahal-tour", title: "Same Day Taj Mahal Tour", desc: "Focused Taj Mahal visit by car", color: "from-amber-500 to-yellow-500" },
                { href: "/taj-mahal-tour-from-delhi", title: "Taj Mahal Tour from Delhi", desc: "Private car tour from Delhi", color: "from-orange-500 to-amber-500" },
                { href: "/delhi-airport-to-agra-taxi", title: "Delhi Airport to Agra Taxi", desc: "IGI Airport to Agra transfer", color: "from-blue-500 to-cyan-500" },
                { href: "/agra-travel-guide", title: "Agra Travel Guide 2026", desc: "Complete guide to visiting Agra", color: "from-emerald-500 to-teal-500" },
                { href: "/agra-day-trip-from-delhi", title: "Agra Day Trip from Delhi", desc: "Budget breakdown & itinerary", color: "from-purple-500 to-pink-500" },
                { href: "/sightseeing", title: "All Sightseeing Tours", desc: "Explore all tour packages", color: "from-rose-500 to-orange-500" },
                { href: "/agra-food-tour", title: "Agra Food Tour", desc: "Petha, Mughlai & street food", color: "from-red-500 to-orange-500" },
                { href: "/sightseeing/agra", title: "Agra Sightseeing Tours", desc: "All Agra attractions & tours", color: "from-teal-500 to-emerald-500" },
              ].map((link, idx) => (
                <Link key={idx} href={link.href} className="group flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-xl border border-stone-100 hover:border-stone-200 transition-all duration-300 hover:-translate-y-1">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${link.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <ChevronRight className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-800">{link.title}</div>
                    <div className="text-xs text-stone-500">{link.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* === CTA: Grand Mughal Banner === */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-700 via-amber-600 to-yellow-600" />
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300/10 rounded-full blur-[100px]" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">Ready for Your <span className="text-yellow-200">Agra Day Trip?</span></h2>
            <p className="text-amber-100 mb-10 text-lg max-w-2xl mx-auto">We are Agra-based -- nobody knows Agra better than us. Book your same day tour now.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:scale-105 transition-all">
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to book a same day Agra tour from Delhi" className="inline-flex items-center justify-center gap-2 bg-amber-900/50 backdrop-blur-sm text-white px-10 py-5 rounded-2xl font-bold text-lg border border-amber-300/30 hover:bg-amber-900/70 transition-all">
                WhatsApp Booking <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
