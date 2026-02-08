import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, Calendar, Sunrise, Camera, Coffee, ShoppingBag, Thermometer, Hotel, Landmark, Compass, BookOpen, Scroll } from '@/components/ui/icons';

export const metadata = {
  title: 'Agra Travel Guide 2026 | Attractions, Food, Tips',
  description: 'Complete Agra travel guide 2026. Best time to visit, all attractions, food guide, shopping, local transport. By Agra locals. Call 7668570551.',
  keywords: 'agra travel guide, agra tourist guide, agra sightseeing guide, visiting agra, agra tourism, things to do in agra, agra attractions',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/agra-travel-guide' },
  openGraph: {
    title: 'Agra Travel Guide 2026 | Complete Guide by Locals',
    description: 'Everything you need to know about visiting Agra. Attractions, food, shopping, best time, transport -- by Agra locals.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/agra-travel-guide',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/taj-mahal-hero.jpg', width: 1200, height: 630, alt: 'Agra Travel Guide 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agra Travel Guide 2026 | By Locals',
    description: 'Complete Agra guide. Attractions, food, shopping, transport.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/taj-mahal-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function AgraTravelGuidePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Agra Travel Guide", "item": "https://www.trivenicabs.in/agra-travel-guide" },
    ],
  };

  const faqData = [
    { question: "How many days do I need in Agra?", answer: "1 day covers the main sights (Taj Mahal, Agra Fort, Baby Taj). 2 days allow you to add Fatehpur Sikri, Mehtab Bagh sunset, moonlight Taj viewing, and Agra street food exploration. 3 days let you day-trip to Mathura-Vrindavan or Bharatpur Bird Sanctuary." },
    { question: "Is Agra safe for tourists?", answer: "Yes, Agra is generally safe. Tourist areas (Taj Mahal, Agra Fort, hotels) are well-policed. Standard precautions: avoid unlicensed guides at monument gates, negotiate auto fares before riding, and be wary of 'marble shop' scams near Taj. Our drivers ensure you visit only genuine shops." },
    { question: "What is the best time to visit Agra?", answer: "October to March is the best time. November-February can be foggy in the mornings but pleasant otherwise. April-June is very hot (40-45C). July-September is monsoon season -- fewer crowds but humid. Each season has its charm." },
    { question: "How do I get around Agra?", answer: "Our taxi service is the most convenient: AC sedan from ₹1,500/day for local sightseeing. Auto-rickshaws cost ₹30-100 per trip. Battery-powered buses run near the Taj (₹10). E-rickshaws are cheap for short distances (₹10-20). Walking works near Taj/Fort area." },
    { question: "What food is Agra famous for?", answer: "Agra is famous for Petha (sweet made from ash gourd -- Panchhi brand is the best), Dalmoth (spicy lentil mix), Bedai-Jalebi (breakfast dish), Mughlai cuisine (biryani, kebabs, korma), and Paratha. The city has a rich culinary heritage from the Mughal era." },
    { question: "What should I buy in Agra?", answer: "Marble inlay work (Pietra Dura) -- Agra is the world capital of this art. Leather goods (shoes, bags), Petha sweets, Agra Zardozi embroidery, and brass/copper handicrafts. Shop at government emporiums for genuine goods, or Sadar Bazaar for variety." },
    { question: "Is there a train from Delhi to Agra?", answer: "Yes! Gatimaan Express (fastest, 1.5 hrs, ₹755), Shatabdi Express (2 hrs, ₹555), and many others. But for day trips, a car (₹4,500 round trip) is more flexible and cost-effective for 2+ people. We also offer station pickup/drop." },
    { question: "Which language is spoken in Agra?", answer: "Hindi is the primary language. English is widely understood in tourist areas, hotels, and restaurants. Our drivers speak basic English and can translate at local shops and eateries if needed." },
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

  const attractions = [
    { name: "Taj Mahal", desc: "UNESCO World Heritage Site. One of the Seven Wonders. Built by Shah Jahan for Mumtaz Mahal. White marble masterpiece.", entry: "₹50 Indian / ₹1,100 Foreign", timing: "Sunrise to Sunset (Closed Fridays)", duration: "2-3 hours", icon: Landmark },
    { name: "Agra Fort", desc: "Massive red sandstone fort, another UNESCO site. Home to Diwan-i-Am, Diwan-i-Khas, Sheesh Mahal, and Musamman Burj.", entry: "₹50 Indian / ₹650 Foreign", timing: "Sunrise to Sunset", duration: "1.5-2 hours", icon: Shield },
    { name: "Fatehpur Sikri", desc: "Abandoned Mughal capital, 37 km from Agra. Built by Akbar. Buland Darwaza (world's highest gateway), Panch Mahal, Jama Masjid.", entry: "₹50 Indian / ₹610 Foreign", timing: "Sunrise to Sunset", duration: "2-3 hours", icon: Compass },
    { name: "Itimad-ud-Daulah (Baby Taj)", desc: "Exquisite marble tomb that inspired the Taj Mahal. Famous for intricate pietra dura (marble inlay) work.", entry: "₹30 Indian / ₹310 Foreign", timing: "Sunrise to Sunset", duration: "45 min", icon: Camera },
    { name: "Mehtab Bagh", desc: "Moonlight Garden across the Yamuna from Taj Mahal. Best sunset views of the Taj. Perfect for photography.", entry: "₹30 Indian / ₹300 Foreign", timing: "Sunrise to Sunset", duration: "45 min - 1 hr", icon: Sunrise },
    { name: "Sikandra (Akbar's Tomb)", desc: "Tomb of Emperor Akbar. Unique blend of Hindu, Islamic, Buddhist, and Jain architecture. Peaceful deer park.", entry: "₹35 Indian / ₹310 Foreign", timing: "Sunrise to Sunset", duration: "1 hour", icon: BookOpen },
  ];

  const monthlyGuide = [
    { month: "Jan", temp: "5-22°C", weather: "Cold, foggy", crowd: "Moderate", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 55 },
    { month: "Feb", temp: "8-26°C", weather: "Cool, pleasant", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 90 },
    { month: "Mar", temp: "14-32°C", weather: "Warming up", crowd: "High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 85 },
    { month: "Apr", temp: "21-38°C", weather: "Hot, dry", crowd: "Low-Med", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 40 },
    { month: "May", temp: "25-43°C", weather: "Very hot", crowd: "Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 15 },
    { month: "Jun", temp: "27-42°C", weather: "Pre-monsoon", crowd: "Very Low", verdict: "Not ideal", color: "bg-red-100 text-red-800", bar: 10 },
    { month: "Jul", temp: "26-35°C", weather: "Monsoon", crowd: "Low", verdict: "Unique", color: "bg-amber-100 text-amber-800", bar: 35 },
    { month: "Aug", temp: "25-33°C", weather: "Peak rain", crowd: "Low", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 30 },
    { month: "Sep", temp: "24-34°C", weather: "Rain ends", crowd: "Low-Med", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 50 },
    { month: "Oct", temp: "19-34°C", weather: "Pleasant", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 92 },
    { month: "Nov", temp: "12-29°C", weather: "Cool, clear", crowd: "Very High", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 100 },
    { month: "Dec", temp: "7-23°C", weather: "Cold, foggy", crowd: "Very High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 88 },
  ];

  const foodSection = [
    { name: "Petha", desc: "Agra's signature sweet made from ash gourd. Varieties: Angoori (small, juicy), Paan, Kesar, Chocolate. Best brand: Panchhi Petha (Noori Gate).", icon: "🍬" },
    { name: "Dalmoth", desc: "Crunchy spicy lentil-nut mix. Buy from Bhagat Halwai or Panchi Petha stores. Perfect snack to take home.", icon: "🥜" },
    { name: "Bedai & Jalebi", desc: "Traditional Agra breakfast. Deep-fried bread served with aloo sabzi and crispy jalebis. Try at Deviram near Jama Masjid.", icon: "🫓" },
    { name: "Mughlai Cuisine", desc: "Rich biryanis, creamy kormas, seekh kebabs, and butter chicken. Agra has authentic Mughal recipes passed down for generations.", icon: "🍗" },
    { name: "Paratha & Lassi", desc: "Stuffed parathas (aloo, gobhi, paneer) with thick lassi. Available everywhere from street stalls to restaurants.", icon: "🥛" },
    { name: "Chaat", desc: "Agra chaat is slightly different from Delhi -- sweeter and tangier. Try golgappe, dahi bhalle, and aloo tikki at Sadar Bazaar.", icon: "🍲" },
  ];

  const shoppingSection = [
    { name: "Marble Inlay (Pietra Dura)", desc: "Agra is the world capital of marble inlay work. Artisans near the Taj Mahal create boxes, tabletops, and decorative items. Visit government emporiums for genuine pieces.", price: "₹200 - ₹50,000+" },
    { name: "Leather Goods", desc: "Agra is one of India's largest leather producers. Shoes, bags, belts, and jackets at Hari Parbat and Sadar Bazaar. Much cheaper than Delhi/Mumbai.", price: "₹200 - ₹15,000" },
    { name: "Handicrafts & Brassware", desc: "Brass lamps, decorative items, and Agra-style jewelry available at Kinari Bazaar and Subhash Bazaar.", price: "₹200 - ₹5,000" },
    { name: "Textiles & Zardozi", desc: "Agra Zardozi (gold embroidery) on sarees, kurtas, and dupattas. Find at Kinari Bazaar and Subhash Emporium.", price: "₹500 - ₹20,000" },
  ];

  const areaGuide = [
    { area: "Tajganj", desc: "Budget area closest to Taj Mahal. Walking distance to South and East gates. Many budget hotels, backpacker hostels, and rooftop cafes.", budget: "₹500-2,000/night", icon: "🏨" },
    { area: "Fatehabad Road", desc: "Mid-range hotel belt. 5-10 minute drive to Taj Mahal. Good restaurants, clean hotels, convenient for sightseeing.", budget: "₹2,000-5,000/night", icon: "🏪" },
    { area: "Taj East Gate Road", desc: "Premium area with luxury hotels (Oberoi, Trident). Closest to Taj East Gate. Quiet, upscale neighborhood.", budget: "₹5,000-25,000/night", icon: "🏰" },
    { area: "Sadar Bazaar", desc: "Central market area. Budget to mid-range stays. Close to Agra Cantt station. Good for shopping and food.", budget: "₹800-3,000/night", icon: "🛒" },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Agra-Based Locals", desc: "Born & raised in Agra" },
    { icon: Landmark, title: "6 UNESCO Sites Nearby", desc: "We know them all" },
    { icon: Users, title: "5000+ Tourists Guided", desc: "Through Agra's wonders" },
    { icon: Star, title: "4.9 Google Rating", desc: "Verified reviews" },
  ];

  const chapters = [
    { title: "Attractions", icon: Landmark, count: "6 Sites" },
    { title: "Best Time", icon: Thermometer, count: "12 Months" },
    { title: "Food Guide", icon: Coffee, count: "6 Specialties" },
    { title: "Shopping", icon: ShoppingBag, count: "4 Categories" },
    { title: "Stay Guide", icon: Hotel, count: "4 Areas" },
    { title: "Transport", icon: Car, count: "4 Options" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-stone-100">
        {/* Compass Rose Pattern Background */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M60 10 L65 55 L60 30 L55 55 Z' fill='%23000'/%3E%3Cpath d='M60 110 L55 65 L60 90 L65 65 Z' fill='%23000'/%3E%3Cpath d='M10 60 L55 55 L30 60 L55 65 Z' fill='%23000'/%3E%3Cpath d='M110 60 L65 65 L90 60 L65 55 Z' fill='%23000'/%3E%3Ccircle cx='60' cy='60' r='3' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3C/svg%3E")` }} />

        {/* Hero - Encyclopedia Title Page */}
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
          {/* Parchment gradient background */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-950 via-stone-900 to-amber-950" />
          {/* Ornate border frame */}
          <div className="absolute inset-4 md:inset-8 border border-amber-600/30 rounded-lg" />
          <div className="absolute inset-6 md:inset-10 border border-amber-500/15 rounded-lg" />
          {/* Corner compass roses */}
          <div className="absolute top-10 left-10 md:top-14 md:left-14 w-12 h-12 md:w-16 md:h-16 opacity-20">
            <div className="w-full h-full border-2 border-amber-400 rounded-full flex items-center justify-center">
              <div className="w-0.5 h-full absolute bg-amber-400/50" />
              <div className="w-full h-0.5 absolute bg-amber-400/50" />
            </div>
          </div>
          <div className="absolute bottom-10 right-10 md:bottom-14 md:right-14 w-12 h-12 md:w-16 md:h-16 opacity-20">
            <div className="w-full h-full border-2 border-amber-400 rounded-full flex items-center justify-center">
              <div className="w-0.5 h-full absolute bg-amber-400/50" />
              <div className="w-full h-0.5 absolute bg-amber-400/50" />
            </div>
          </div>
          {/* Warm glow orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-700/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-700/15 rounded-full blur-[100px]" />

          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            {/* Scroll badge */}
            <div className="inline-flex items-center gap-2 bg-amber-800/40 backdrop-blur-md px-6 py-2 rounded-full mb-6 border border-amber-600/40">
              <Scroll className="w-4 h-4 text-amber-300" />
              <span className="text-amber-200 font-semibold text-sm tracking-[0.2em] uppercase">The Complete Encyclopedia</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight tracking-tight">
              Agra Travel <span className="text-transparent bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-300 bg-clip-text">Guide</span>
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500/60" />
              <span className="text-amber-400 font-semibold tracking-widest text-sm">2026 EDITION</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500/60" />
            </div>
            <p className="text-lg md:text-xl text-amber-100/70 mb-10 max-w-3xl mx-auto leading-relaxed font-light">
              Everything you need to know about visiting Agra -- attractions, food, shopping, best time to visit, and local secrets. Written by people who call Agra home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 transition-all">
                <Phone className="w-5 h-5" /> Call Now: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I need help planning my Agra trip" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-500/30 hover:bg-white/20 transition-all">
                WhatsApp Us
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Bar - Parchment ribbon style */}
        <section className="relative -mt-1 bg-gradient-to-r from-amber-800 via-amber-700 to-amber-800 border-y border-amber-600/40">
          <div className="max-w-6xl mx-auto px-4 py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-3 text-amber-50">
                  <div className="p-2 bg-amber-900/40 rounded-lg border border-amber-500/20"><f.icon className="w-5 h-5 text-amber-200" /></div>
                  <div><div className="font-bold text-sm">{f.title}</div><div className="text-xs text-amber-200/70">{f.desc}</div></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Table of Contents - Chapter Cards */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Table of Contents</h2>
              <p className="text-stone-500">Your chapter-by-chapter guide to Agra</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {chapters.map((ch, i) => (
                <div key={i} className="bg-white rounded-xl p-4 text-center shadow-sm border border-stone-200 hover:border-amber-400 hover:shadow-md hover:-translate-y-1 transition-all cursor-default group">
                  <div className="w-12 h-12 mx-auto bg-amber-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-amber-100 transition-colors">
                    <ch.icon className="w-6 h-6 text-amber-700" />
                  </div>
                  <div className="font-bold text-stone-800 text-sm">{ch.title}</div>
                  <div className="text-xs text-amber-600 font-medium mt-1">{ch.count}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intro - Scroll Style */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-amber-50/80 rounded-2xl p-8 md:p-12 border border-amber-200/60 shadow-sm">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-700 text-amber-50 px-6 py-2 rounded-full text-sm font-bold tracking-wider">CHAPTER 0</div>
              <h2 className="text-3xl font-bold text-stone-800 mb-6 text-center mt-4">Welcome to Agra</h2>
              <p className="text-lg text-stone-600 leading-relaxed text-center">
                Agra is more than just the Taj Mahal. Once the capital of the mighty Mughal Empire, this city on the banks of the Yamuna River is home to <strong>three UNESCO World Heritage Sites</strong>, a vibrant food culture, centuries-old craftsmanship, and the warmth of Braj culture. As an Agra-based cab company, we have put together this guide from our local knowledge to help you make the most of your visit.
              </p>
              <div className="flex justify-center gap-8 mt-8 text-center">
                <div><div className="text-3xl font-bold text-amber-700">3</div><div className="text-xs text-stone-500 mt-1">UNESCO Sites</div></div>
                <div className="w-px bg-amber-200" />
                <div><div className="text-3xl font-bold text-amber-700">450+</div><div className="text-xs text-stone-500 mt-1">Years of History</div></div>
                <div className="w-px bg-amber-200" />
                <div><div className="text-3xl font-bold text-amber-700">2M+</div><div className="text-xs text-stone-500 mt-1">Visitors Yearly</div></div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Time to Visit - Visual Heat Map Bar Chart */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-amber-700 text-amber-50 px-4 py-1 rounded-full text-xs font-bold tracking-wider">CHAPTER 1</div>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-2">Best Time to Visit Agra</h2>
            <p className="text-stone-500 mb-10">Visual month-by-month guide -- taller bars mean better visiting conditions</p>

            {/* Visual bar chart */}
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 mb-8">
              {monthlyGuide.map((m, i) => (
                <div key={i} className="flex flex-col items-center group">
                  <div className="w-full h-32 flex items-end mb-2 relative">
                    <div
                      className={`w-full rounded-t-lg transition-all group-hover:opacity-90 ${m.bar > 75 ? 'bg-gradient-to-t from-emerald-600 to-emerald-400' : m.bar > 40 ? 'bg-gradient-to-t from-amber-500 to-amber-300' : 'bg-gradient-to-t from-red-400 to-red-300'}`}
                      style={{ height: `${m.bar}%` }}
                    />
                  </div>
                  <div className="text-xs font-bold text-stone-700">{m.month}</div>
                  <div className="text-[10px] text-stone-400">{m.temp}</div>
                  <div className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full mt-1 ${m.color}`}>{m.verdict}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-emerald-500" /> Best (Oct-Mar)</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-amber-400" /> Okay (Jul-Sep)</div>
              <div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-red-400" /> Avoid (May-Jun)</div>
            </div>
          </div>
        </section>

        {/* Attractions - Encyclopedia Entry Cards with numbered badges */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-amber-700 text-amber-50 px-4 py-1 rounded-full text-xs font-bold tracking-wider">CHAPTER 2</div>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-10">Top Attractions in Agra</h2>
            <div className="space-y-6">
              {attractions.map((a, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-lg hover:border-amber-300 transition-all group">
                  <div className="flex flex-col md:flex-row">
                    {/* Number badge sidebar */}
                    <div className="md:w-20 bg-gradient-to-b from-amber-700 to-amber-800 flex items-center justify-center py-4 md:py-0">
                      <span className="text-3xl font-bold text-amber-200/80">{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-stone-800 flex items-center gap-2">
                          <a.icon className="w-5 h-5 text-amber-600" /> {a.name}
                        </h3>
                      </div>
                      <p className="text-stone-600 mb-4">{a.desc}</p>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="bg-amber-50 px-3 py-1.5 rounded-lg text-amber-800 font-medium border border-amber-200/60">Entry: {a.entry}</span>
                        <span className="bg-blue-50 px-3 py-1.5 rounded-lg text-blue-700 font-medium border border-blue-200/60"><Clock className="w-3 h-3 inline mr-1" />{a.timing}</span>
                        <span className="bg-emerald-50 px-3 py-1.5 rounded-lg text-emerald-700 font-medium border border-emerald-200/60">{a.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Food Section - Recipe Card Style */}
        <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-amber-700 text-amber-50 px-4 py-1 rounded-full text-xs font-bold tracking-wider">CHAPTER 3</div>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-2">Agra Food Guide</h2>
            <p className="text-stone-500 mb-10">A city with Mughal culinary heritage and unique local specialties</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {foodSection.map((food, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-5 shadow-sm border border-stone-200 hover:shadow-md transition-all relative overflow-hidden group">
                  {/* Large decorative icon */}
                  <div className="absolute -top-2 -right-2 text-6xl opacity-10 group-hover:opacity-20 transition-opacity">{food.icon}</div>
                  <h3 className="font-bold text-stone-800 mb-2 flex items-center gap-2 relative">
                    <Coffee className="w-4 h-4 text-amber-600" /> {food.name}
                  </h3>
                  <p className="text-stone-600 text-sm relative">{food.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/agra-food-tour" className="inline-flex items-center gap-2 bg-amber-700 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-amber-800 transition-colors">
                Read our complete Agra Food Tour Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Shopping - Catalog Style with price ranges */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-amber-700 text-amber-50 px-4 py-1 rounded-full text-xs font-bold tracking-wider">CHAPTER 4</div>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-10">Shopping in Agra</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {shoppingSection.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-stone-200 hover:border-amber-300 transition-all">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-stone-800 flex items-center gap-2"><ShoppingBag className="w-4 h-4 text-amber-600" /> {item.name}</h3>
                    <span className="bg-amber-100 text-amber-800 text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-stone-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/agra-shopping-guide" className="inline-flex items-center gap-2 bg-amber-700 text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-amber-800 transition-colors">
                Read our complete Agra Shopping Guide <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Getting Around */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-amber-700 text-amber-50 px-4 py-1 rounded-full text-xs font-bold tracking-wider">CHAPTER 5</div>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-8">Getting Around Agra</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { mode: "Triveni Cabs (Private Taxi)", price: "₹1,500-2,500/day", desc: "AC car with driver. Most comfortable and flexible. Cover all sights without hassle. Call 7668570551.", highlight: true },
                { mode: "Auto-rickshaw", price: "₹30-100/trip", desc: "Negotiate fare before riding. Good for short distances. Can be hot in summer.", highlight: false },
                { mode: "E-rickshaw", price: "₹10-30/trip", desc: "Electric rickshaws for short distances. Cheap and eco-friendly. Available near Taj and market areas.", highlight: false },
                { mode: "Battery Bus (Taj Route)", price: "₹10/trip", desc: "Eco-friendly buses from parking to Taj gates. Mandatory as private vehicles cannot go near the Taj.", highlight: false },
              ].map((t, idx) => (
                <div key={idx} className={`rounded-xl p-5 border-2 transition-all ${t.highlight ? 'bg-amber-50 border-amber-400 shadow-md' : 'bg-stone-50 border-stone-200'}`}>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-stone-800">{t.mode}</h3>
                    {t.highlight && <span className="bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">RECOMMENDED</span>}
                  </div>
                  <p className="text-amber-700 font-bold text-sm mb-1">{t.price}</p>
                  <p className="text-stone-600 text-sm">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Where to Stay - Neighborhood Cards with budget indicator */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-amber-700 text-amber-50 px-4 py-1 rounded-full text-xs font-bold tracking-wider">CHAPTER 6</div>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-10">Where to Stay in Agra</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {areaGuide.map((a, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-md transition-all">
                  <div className="bg-gradient-to-r from-amber-700 to-amber-600 px-5 py-3 flex items-center justify-between">
                    <h3 className="font-bold text-white flex items-center gap-2"><Hotel className="w-4 h-4" /> {a.area}</h3>
                    <span className="text-amber-200 text-sm font-medium">{a.budget}</span>
                  </div>
                  <div className="p-5">
                    <p className="text-stone-600 text-sm">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ - Encyclopedia Q&A style */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-amber-700 text-amber-50 px-4 py-1 rounded-full text-xs font-bold tracking-wider">APPENDIX</div>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, idx) => (
                <div key={idx} className="border-l-4 border-amber-500 bg-amber-50/50 rounded-r-xl p-6">
                  <h3 className="text-lg font-bold text-stone-800 mb-2 flex items-start gap-2">
                    <span className="bg-amber-700 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">Q{idx + 1}</span>
                    {faq.question}
                  </h3>
                  <p className="text-stone-600 ml-9">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interlinks - Library Catalog */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-stone-800 mb-2 text-center">Explore More About Agra</h2>
            <p className="text-stone-500 text-center mb-8 text-sm">Related guides and tour pages from our collection</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: "/same-day-agra-tour-from-delhi", title: "Same Day Agra Tour from Delhi", desc: "Full day sightseeing" },
                { href: "/same-day-taj-mahal-tour", title: "Same Day Taj Mahal Tour", desc: "Focused Taj visit" },
                { href: "/taj-mahal-tour-from-delhi", title: "Taj Mahal Tour from Delhi", desc: "Private car options" },
                { href: "/sunrise-taj-mahal-tour-from-delhi", title: "Sunrise Taj Mahal Tour", desc: "Golden hour experience" },
                { href: "/moonlight-taj-mahal-tour", title: "Moonlight Taj Mahal Tour", desc: "Full moon night viewing" },
                { href: "/agra-day-trip-from-delhi", title: "Agra Day Trip from Delhi", desc: "Budget & cost guide" },
                { href: "/agra-food-tour", title: "Agra Food Tour", desc: "Culinary exploration" },
                { href: "/agra-shopping-guide", title: "Agra Shopping Guide", desc: "Markets & handicrafts" },
                { href: "/agra-beyond-taj-mahal", title: "Agra Beyond Taj Mahal", desc: "Hidden gems" },
                { href: "/delhi-airport-to-agra-taxi", title: "Delhi Airport to Agra", desc: "Airport transfers" },
                { href: "/sightseeing", title: "All Sightseeing Tours", desc: "Complete tour list" },
                { href: "/sightseeing/agra", title: "Agra Sightseeing Tours", desc: "All Agra attractions" },
                { href: "/agra", title: "Agra City Hub", desc: "Agra cab services" },
              ].map((link, idx) => (
                <Link key={idx} href={link.href} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-stone-200 hover:border-amber-400 hover:shadow-md transition-all group">
                  <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-amber-200 transition-colors">
                    <BookOpen className="w-4 h-4 text-amber-700" />
                  </div>
                  <div><div className="font-bold text-stone-800 text-sm group-hover:text-amber-700 transition-colors">{link.title}</div><div className="text-xs text-stone-400">{link.desc}</div></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Scholarly but warm */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-800 via-amber-700 to-stone-800" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23fff' stroke-width='0.5'%3E%3Crect x='10' y='10' width='40' height='40' rx='2'/%3E%3C/g%3E%3C/svg%3E")` }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <Compass className="w-12 h-12 text-amber-300 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Help Planning Your Agra Trip?</h2>
            <p className="text-amber-200/80 mb-8 text-lg">We are Agra locals. Call us for personalized advice on itinerary, timing, and transport.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-amber-800 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all">
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I need help planning my Agra trip" className="inline-flex items-center justify-center gap-2 bg-amber-900/50 text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-500/30 hover:bg-amber-900/70 transition-all">
                WhatsApp Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
