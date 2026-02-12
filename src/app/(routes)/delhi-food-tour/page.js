import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, Coffee, ShoppingBag, Utensils, Flame, Bookmark, Tag } from '@/components/ui/icons';

export const metadata = {
  title: 'Delhi Food Tour 2026 | Chandni Chowk, Paranthe Wali Gali & Street Food Guide',
  description: 'Delhi food & culinary tour. Famous Chole Bhature, Paranthe Wali Gali, Butter Chicken, Chaat, Jalebi. Street food itinerary, best restaurants. By Delhi locals. Call 7668570551.',
  keywords: 'delhi food tour, delhi street food, chandni chowk food, paranthe wali gali, butter chicken delhi, karim delhi, delhi food guide, old delhi food walk',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/delhi-food-tour' },
  openGraph: {
    title: 'Delhi Food Tour 2026 | Old Delhi Culinary Guide by Locals',
    description: 'Complete Delhi food guide. Chandni Chowk, Paranthe Wali Gali, Karim&apos;s, Butter Chicken, best restaurants and street food spots.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/delhi-food-tour',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/taj-mahal-hero.jpg', width: 1200, height: 630, alt: 'Delhi Food Tour Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delhi Food Tour 2026 | By Locals',
    description: 'Delhi culinary guide. Chandni Chowk, Paranthe Wali Gali, Karim&apos;s restaurants.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/taj-mahal-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function DelhiFoodTourPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Delhi Food Tour", "item": "https://www.trivenicabs.in/delhi-food-tour" },
    ],
  };

  const faqData = [
    { question: "What food is Delhi famous for?", answer: "Delhi is famous for Chole Bhature, Paranthe (stuffed parathas at Paranthe Wali Gali), Butter Chicken (invented at Moti Mahal in 1947), Chaat (especially at Chandni Chowk), Jalebi, Nihari, Mughlai cuisine at Karim&apos;s, and the iconic Dahi Bhalle from Natraj." },
    { question: "Is Chandni Chowk safe for food tourists?", answer: "Yes! Chandni Chowk is very safe and the most popular food destination in Delhi. Stick to well-known stalls with high turnover, avoid cut fruits and raw items, and drink bottled water. Our recommended spots have been serving for 50-200+ years with excellent hygiene standards." },
    { question: "Where is Paranthe Wali Gali?", answer: "Paranthe Wali Gali is a narrow lane in Chandni Chowk (Old Delhi) that has been serving stuffed parathas since the 1870s. Three famous shops — Pt. Kanhaiyalal, Pt. Babu Ram, and Pt. Gaya Prasad — offer 30+ varieties including banana, rabri, and mixed parantha." },
    { question: "Can I combine a food tour with Delhi sightseeing?", answer: "Absolutely! Red Fort visit, then Chandni Chowk food walk, Jama Masjid & Karim&apos;s lunch, Humayun&apos;s Tomb, Connaught Place chaat, India Gate evening, and Hauz Khas dinner. Our drivers plan the perfect food-sightseeing combo across the city." },
    { question: "What is the best time for a Delhi food tour?", answer: "Morning (8-10 AM) for Chole Bhature and Paranthe Wali Gali. Lunch (12-2 PM) for Karim&apos;s and Mughlai food. Evening (5-8 PM) for Chandni Chowk chaat, Jalebi, and Dahi Bhalle. October to March is the best season for outdoor food exploration." },
    { question: "Are vegetarian options available in Delhi?", answer: "Delhi is a vegetarian paradise! Paranthe Wali Gali, Chole Bhature, Dahi Bhalle at Natraj, all chaat varieties, Rajma Chawal, and hundreds of pure-veg restaurants. Chandni Chowk has dedicated vegetarian lanes. Connaught Place has excellent veg restaurant options." },
    { question: "How much does a Delhi food tour cost?", answer: "Street food budget: ₹300-600 per person for a full Chandni Chowk tour. Restaurant meals: ₹400-1,000 per person. Our food tour with cab: ₹2,000 (sedan) for full-day covering Old Delhi + New Delhi food spots. We handle all transport." },
    { question: "What is the history of Butter Chicken?", answer: "Butter Chicken was invented in 1947 at Moti Mahal in Daryaganj by Kundan Lal Gujral. He mixed leftover tandoori chicken with a tomato-butter-cream gravy. It became Delhi&apos;s most famous dish and spread worldwide. The original Moti Mahal still operates in Daryaganj." },
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

  const famousFoods = [
    { name: "Chole Bhature", desc: "Delhi&apos;s signature breakfast. Fluffy fried bread with spicy chickpea curry, onion, pickle, and a glass of lassi. Sita Ram Diwan Chand in Paharganj and Nagpal Chole Bhature in Lajpat Nagar are legendary. Every Delhiite has their favourite spot.", price: "₹60-120 per plate", mustTry: true, heat: 1 },
    { name: "Paranthe Wali Gali Paranthas", desc: "Deep-fried stuffed parathas from the 1870s. Over 30 varieties including aloo, gobhi, paneer, banana, rabri, and mixed. Served with curd, pickle, and aloo sabzi. Three famous shops compete in a narrow Chandni Chowk lane.", price: "₹50-100 per plate", mustTry: true, heat: 0 },
    { name: "Butter Chicken", desc: "Invented in Delhi in 1947 at Moti Mahal, Daryaganj. Tender tandoori chicken in creamy tomato-butter gravy. The dish that conquered the world. Moti Mahal (original), Punjab Grill, and Gulati are top spots.", price: "₹300-600 per dish", mustTry: true, heat: 1 },
    { name: "Chandni Chowk Chaat", desc: "Delhi&apos;s chaat capital. Dahi Bhalle at Natraj (since 1940s), Golgappe, Aloo Tikki, Papdi Chaat, and Fruit Chaat. Chandni Chowk&apos;s chaat is tangier and spicier than other cities. Evening is the best time.", price: "₹30-80 per plate", mustTry: true, heat: 2 },
    { name: "Jalebi", desc: "Old Famous Jalebi Wala at Chandni Chowk has been frying jalebis in a giant kadhai since the 1880s. Thick, crispy, orange spirals soaked in sugar syrup. Watch them being made live — the line is always long but moves fast.", price: "₹40-80 per plate", mustTry: false, heat: 0 },
    { name: "Karim&apos;s Mughlai Cuisine", desc: "Karim&apos;s near Jama Masjid has served Mughlai cuisine since 1913 — recipes from the kitchens of Mughal emperors. Mutton Burra, Seekh Kebab, Chicken Jahangiri, and Biryani. A Delhi institution.", price: "₹200-500 per dish", mustTry: false, heat: 1 },
    { name: "Natraj Dahi Bhalle", desc: "The most famous Dahi Bhalle in India. Soft lentil dumplings in chilled yogurt with tamarind and green chutney. Natraj at Chandni Chowk has perfected this since the 1940s. Cool, tangy, and utterly addictive.", price: "₹40-70 per plate", mustTry: false, heat: 1 },
    { name: "Rajma Chawal", desc: "Delhi&apos;s comfort food — kidney bean curry with steamed rice, topped with onion and lemon. A Monday lunch tradition across the city. Every neighbourhood has its rajma chawal champion. Simple, hearty, and deeply satisfying.", price: "₹60-120 per plate", mustTry: false, heat: 1 },
  ];

  const streetFoodItinerary = [
    { time: "8:00 AM", stop: "Sita Ram Diwan Chand, Paharganj", food: "Chole Bhature", desc: "Start with Delhi&apos;s iconic breakfast at this legendary shop. Massive bhature with spicy chole, served with onion and pickle. The queue moves fast — totally worth it.", color: "from-orange-500 to-red-500" },
    { time: "9:30 AM", stop: "Paranthe Wali Gali, Chandni Chowk", food: "Stuffed Paranthas (30+ varieties)", desc: "Walk through the narrow lane that has served paranthas since the 1870s. Try banana parantha for something unique. Three competing shops, all excellent.", color: "from-amber-500 to-orange-500" },
    { time: "11:00 AM", stop: "Old Famous Jalebi Wala, Chandni Chowk", food: "Hot Jalebi & Rabri", desc: "Watch giant jalebis being fried in a massive kadhai. Eat them hot with rabri. This stall has been operating since the 1880s — the oldest jalebi shop in Delhi.", color: "from-yellow-500 to-amber-500" },
    { time: "12:00 PM", stop: "Natraj, Chandni Chowk", food: "Dahi Bhalle & Aloo Tikki", desc: "India&apos;s most famous Dahi Bhalle. Cool, creamy, tangy — the perfect mid-tour refresher. Their Aloo Tikki is equally legendary.", color: "from-red-500 to-pink-500" },
    { time: "1:30 PM", stop: "Karim&apos;s, near Jama Masjid", food: "Mughlai Lunch", desc: "The grand finale of Old Delhi food — Karim&apos;s since 1913. Mutton Burra, Seekh Kebab, Chicken Jahangiri, and Mughlai Biryani. Recipes from Mughal imperial kitchens.", color: "from-orange-600 to-red-600" },
    { time: "4:00 PM", stop: "Connaught Place", food: "Wenger&apos;s Bakery & Chaat", desc: "Switch to New Delhi — Wenger&apos;s Bakery (since 1926) for pastries and patties, followed by chaat at Bengali Market nearby. The contrast with Old Delhi is striking.", color: "from-amber-600 to-yellow-600" },
    { time: "6:30 PM", stop: "Daryaganj / India Gate Area", food: "Butter Chicken & Evening Walk", desc: "End at Moti Mahal (birthplace of Butter Chicken) or a nearby restaurant for the dish that Delhi gifted to the world. Then a leisurely India Gate walk to digest.", color: "from-red-600 to-orange-600" },
  ];

  const restaurants = [
    { name: "Karim&apos;s", cuisine: "Mughlai", budget: "₹300-600", location: "Near Jama Masjid", desc: "Since 1913. Mughal imperial recipes. Mutton Burra, Seekh Kebab, Chicken Jahangiri. The most famous restaurant in Old Delhi.", rating: "4.3" },
    { name: "Moti Mahal", cuisine: "Tandoori / North Indian", budget: "₹400-700", location: "Daryaganj", desc: "Birthplace of Butter Chicken and Dal Makhani (1947). The original that inspired thousands of imitations worldwide.", rating: "4.1" },
    { name: "Natraj Dahi Bhalle", cuisine: "Chaat / Street Food", budget: "₹50-100", location: "Chandni Chowk", desc: "India&apos;s most famous Dahi Bhalle. Generations-old recipe. Also excellent Aloo Tikki and Golgappe. Pure vegetarian.", rating: "4.4" },
    { name: "Sita Ram Diwan Chand", cuisine: "Chole Bhature", budget: "₹80-150", location: "Paharganj", desc: "The Chole Bhature institution of Delhi. Simple menu, extraordinary execution. Queue up early or be prepared to wait.", rating: "4.3" },
    { name: "Gulati Restaurant", cuisine: "North Indian", budget: "₹500-900", location: "Pandara Road", desc: "Upscale North Indian dining near India Gate. Outstanding Butter Chicken, Dal Makhani, and tandoori items. Air-conditioned, family-friendly.", rating: "4.4" },
    { name: "Indian Accent", cuisine: "Modern Indian Fine Dining", budget: "₹3,000-6,000", location: "The Lodhi", desc: "India&apos;s top-rated restaurant. Innovative Indian cuisine by Chef Manish Mehrotra. Reservation essential. The ultimate Delhi dining experience.", rating: "4.7" },
  ];

  const markets = [
    { name: "Chandni Chowk", desc: "Asia&apos;s oldest and busiest market street. The ultimate food destination in Delhi. Paranthe Wali Gali, Natraj Dahi Bhalle, Old Famous Jalebi Wala, spice market, and hundreds of food stalls. Best explored on foot (our driver waits nearby).", bestFor: "Paranthas, chaat, jalebi, spices" },
    { name: "Connaught Place", desc: "New Delhi&apos;s colonial-era commercial hub. Wenger&apos;s Bakery, United Coffee House, and modern restaurants. Bengali Market nearby for chaat. More organized than Chandni Chowk with air-conditioned dining options.", bestFor: "Bakeries, cafes, modern restaurants" },
    { name: "Karim&apos;s Lane (near Jama Masjid)", desc: "The narrow lane leading to Karim&apos;s restaurant is itself a food destination. Kebab stalls, Nihari shops, and Mughlai street food vendors. The aromas alone are worth the visit. Best during lunch hours.", bestFor: "Mughlai food, kebabs, Nihari" },
    { name: "Pandara Road Market", desc: "Upscale food market near India Gate. Gulati, Pindi, Have More, and other established North Indian restaurants. Perfect for a comfortable sit-down dinner after a day of street food exploration.", bestFor: "Butter Chicken, fine dining, family meals" },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Delhi Locals", desc: "We eat here every day" },
    { icon: Utensils, title: "Food Experts", desc: "Curated Old & New Delhi stops" },
    { icon: Users, title: "500+ Food Tours", desc: "Happy food travelers" },
    { icon: Star, title: "4.9 Rating", desc: "Google reviews" },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(5deg); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 20px rgba(249,115,22,0.3); } 50% { box-shadow: 0 0 40px rgba(249,115,22,0.6); } }
        @keyframes gradient-shift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .glass-card { background: rgba(255,255,255,0.05); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1); }
        .glass-card-light { background: rgba(255,255,255,0.8); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.3); }
        .shimmer-text { background: linear-gradient(90deg, #f97316, #fbbf24, #f97316); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer 3s linear infinite; }
        .hover-lift { transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
        .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 25px 50px -12px rgba(249,115,22,0.25); }
      ` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-orange-50">
        <div className="fixed inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='2' fill='%23c2410c'/%3E%3Ccircle cx='4' cy='4' r='1' fill='%23c2410c'/%3E%3Ccircle cx='36' cy='36' r='1' fill='%23c2410c'/%3E%3C/svg%3E")` }} />

        {/* Hero - Immersive Animated Gradient */}
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-orange-950 to-amber-950" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 15s ease infinite' }} />
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-red-500/20 rounded-full blur-[100px]" style={{ animation: 'float 8s ease-in-out infinite' }} />
          <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px]" style={{ animation: 'float 10s ease-in-out infinite 2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/15 rounded-full blur-[80px]" style={{ animation: 'float 12s ease-in-out infinite 4s' }} />
          <div className="absolute top-[15%] left-[10%] w-3 h-3 bg-orange-400/40 rounded-full" style={{ animation: 'float 6s ease-in-out infinite' }} />
          <div className="absolute top-[25%] right-[15%] w-2 h-2 bg-red-400/50 rounded-full" style={{ animation: 'float 7s ease-in-out infinite 1s' }} />
          <div className="absolute bottom-[30%] left-[20%] w-2 h-2 bg-amber-400/60 rounded-full" style={{ animation: 'float 5s ease-in-out infinite 2s' }} />
          <div className="absolute top-[60%] right-[25%] w-3 h-3 bg-yellow-400/30 rounded-full" style={{ animation: 'float 8s ease-in-out infinite 3s' }} />
          <div className="absolute bottom-[20%] right-[10%] w-2 h-2 bg-red-300/40 rounded-full" style={{ animation: 'float 6s ease-in-out infinite 4s' }} />
          <div className="absolute top-[40%] left-[5%] w-1.5 h-1.5 bg-orange-300/50 rounded-full" style={{ animation: 'float 9s ease-in-out infinite 1.5s' }} />

          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-red-400/30">
                  <Flame className="w-4 h-4 text-red-300" />
                  <span className="text-red-200 font-semibold text-sm tracking-wider uppercase">Culinary Guide 2026</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Delhi <span className="shimmer-text">Food</span> Tour
                </h1>
                <p className="text-lg text-orange-100/70 mb-8 leading-relaxed">
                  Chandni Chowk, Paranthe Wali Gali, Butter Chicken, Karim&apos;s Mughlai, and iconic Chaat. Taste the capital through the eyes of locals who have eaten here all their lives.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-7 py-3.5 rounded-full font-bold shadow-xl shadow-red-500/20 hover:shadow-red-500/40 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                    <Phone className="w-5 h-5" /> Call: 7668570551
                  </Link>
                  <Link href="https://wa.me/917668570551?text=I want to book a Delhi food tour" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-7 py-3.5 rounded-full font-bold border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500">
                    WhatsApp Booking
                  </Link>
                </div>
              </div>
              <div className="hidden md:block relative h-80">
                <div className="glass-card absolute top-0 right-8 rounded-2xl p-5 w-52 transform rotate-3" style={{ animation: 'float 7s ease-in-out infinite' }}>
                  <div className="text-2xl mb-1">🍽️</div>
                  <div className="text-white font-bold">Famous Dish</div>
                  <div className="text-orange-300 text-sm">Delhi specialty</div>
                  <div className="text-white/60 text-xs mt-2">₹100-300</div>
                </div>
                <div className="glass-card absolute top-24 left-0 rounded-2xl p-5 w-52 transform -rotate-2" style={{ animation: 'float 8s ease-in-out infinite 1s' }}>
                  <div className="text-2xl mb-1">🥘</div>
                  <div className="text-white font-bold">Street Food</div>
                  <div className="text-orange-300 text-sm">Local favorite</div>
                  <div className="text-white/60 text-xs mt-2">₹50-100</div>
                </div>
                <div className="glass-card absolute bottom-0 right-16 rounded-2xl p-5 w-52 transform rotate-1" style={{ animation: 'float 9s ease-in-out infinite 2s' }}>
                  <div className="text-2xl mb-1">🧁</div>
                  <div className="text-white font-bold">Sweet Treat</div>
                  <div className="text-orange-300 text-sm">Traditional dessert</div>
                  <div className="text-white/60 text-xs mt-2">₹30-80</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-red-950/60 backdrop-blur-2xl border-t border-red-500/20">
            <div className="max-w-6xl mx-auto px-4 py-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {trustFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/90">
                    <div className="p-2 bg-red-500/20 rounded-lg backdrop-blur-sm"><f.icon className="w-5 h-5 text-red-300" /></div>
                    <div><div className="font-bold text-sm">{f.title}</div><div className="text-xs text-red-200/60">{f.desc}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SEO Prose */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-stone-800">
              Delhi Food Tour — The Street Food Capital of India
            </h2>
            <div className="space-y-5 text-stone-600 text-lg leading-relaxed">
              <p>Delhi is the <strong className="text-stone-800">undisputed street food capital of India</strong>, where culinary traditions spanning 1,000 years collide with modern food innovation. From the ancient lanes of Chandni Chowk — Asia&apos;s oldest market street — to the colonial elegance of Connaught Place, from the Mughlai perfection of Karim&apos;s Lane to the butter chicken birthplace at Daryaganj, Delhi offers a food experience unmatched by any city in the subcontinent.</p>
              <p>Our <strong className="text-stone-800">Delhi food tour by car</strong> bridges Old Delhi and New Delhi — starting with Chole Bhature at Paharganj, walking through Paranthe Wali Gali&apos;s narrow lanes, tasting jalebis fried in the same kadhai since the 1880s, experiencing Karim&apos;s Mughlai feast near Jama Masjid, then driving to Connaught Place and Pandara Road for the modern Delhi food scene. Your Triveni Cabs driver handles the infamous Delhi traffic so you can focus on eating.</p>
              <p>The <strong className="text-stone-800">best time for a Delhi food tour</strong> is October to March when the weather is pleasant and street food vendors are at their peak. Winter brings seasonal specialties like Gajar Ka Halwa, Sarson Da Saag, and hot jalebis. But Delhi&apos;s food scene is extraordinary year-round — this is a city that never stops eating, from 6 AM breakfast queues to midnight kebab runs.</p>
            </div>
          </div>
        </section>

        {/* Famous Foods - Glassmorphism Cards */}
        <section className="py-16 px-4 bg-orange-50/80">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Famous Foods of Delhi</h2>
              <p className="text-stone-500">From Mughal imperial kitchens to iconic street food stalls older than most cities</p>
            </div>
            <div className="space-y-4">
              {famousFoods.map((food, idx) => (
                <div key={idx} className={`hover-lift rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${food.mustTry ? 'border-l-4 border-l-red-500 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200/50' : 'border border-stone-200 bg-white'}`}>
                  <div className="flex-1 p-5 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-bold text-stone-800">{food.name}</h3>
                        {food.mustTry && <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}>MUST TRY</span>}
                        <div className="flex gap-0.5">
                          {[...Array(3)].map((_, i) => (
                            <Flame key={i} className={`w-3.5 h-3.5 ${i < food.heat ? 'text-red-500' : 'text-stone-200'}`} style={i < food.heat ? { opacity: 0.7 + (i * 0.15) } : {}} />
                          ))}
                        </div>
                      </div>
                      <span className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-red-200/50 text-red-600 font-bold text-sm whitespace-nowrap px-3 py-1 rounded-full">{food.price}</span>
                    </div>
                    <p className="text-stone-600 text-sm">{food.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Street Food Itinerary - Premium Timeline */}
        <section className="py-16 px-4 bg-gradient-to-b from-red-950 via-orange-950 to-red-950">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-3">Street Food Tour Itinerary</h2>
              <p className="text-red-200/70">Follow this route for the ultimate Delhi food crawl (our drivers know every stop)</p>
            </div>
            <div className="space-y-0">
              {streetFoodItinerary.map((stop, idx) => (
                <div key={idx} className="relative flex gap-5 md:gap-8">
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stop.color} flex items-center justify-center shadow-lg shadow-red-500/25 flex-shrink-0`}>
                        <span className="text-white font-bold text-sm">{idx + 1}</span>
                      </div>
                      <div className="absolute -inset-1 bg-orange-500 rounded-xl opacity-0 hover:opacity-20 transition-opacity" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }} />
                    </div>
                    {idx < streetFoodItinerary.length - 1 && (
                      <div className="w-0.5 flex-1 my-1 bg-gradient-to-b from-orange-500 via-red-500 to-amber-500" style={{ minHeight: '24px' }} />
                    )}
                  </div>
                  <div className="glass-card rounded-2xl p-6 mb-4 flex-1 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono text-orange-300 font-bold text-sm bg-orange-500/10 backdrop-blur-sm px-2 py-0.5 rounded">{stop.time}</span>
                      <div className="h-px flex-1 bg-white/10" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-0.5">{stop.stop}</h3>
                    <p className="text-orange-300 font-medium text-sm mb-2">{stop.food}</p>
                    <p className="text-white/60 text-sm">{stop.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-orange-200/80 text-sm">Full food tour with sedan cab: <strong className="text-white">₹2,000</strong> (full-day Old Delhi + New Delhi)</p>
            </div>
          </div>
        </section>

        {/* Best Restaurants - Premium Card Grid */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-10 text-center">Best Restaurants in Delhi</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {restaurants.map((r, idx) => (
                <div key={idx} className="glass-card-light rounded-2xl overflow-hidden hover-lift group">
                  <div className="h-1.5 bg-gradient-to-r from-red-500 via-orange-500 to-amber-500" />
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-stone-800">{r.name}</h3>
                      <div className="bg-gradient-to-r from-amber-400 to-orange-400 text-white rounded-full px-3 py-1 shadow-lg shadow-amber-500/25 flex items-center gap-1">
                        <Star className="w-3 h-3 fill-white" />
                        <span className="text-xs font-bold">{r.rating}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 text-xs mb-3">
                      <span className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-red-200/50 text-red-700 px-2 py-0.5 rounded-full font-medium">{r.cuisine}</span>
                      <span className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 backdrop-blur-sm border border-emerald-200/50 text-emerald-700 px-2 py-0.5 rounded-full font-medium">{r.budget}/person</span>
                    </div>
                    <p className="text-stone-400 text-xs mb-2 flex items-center gap-1"><MapPin className="w-3 h-3 text-red-400" /> {r.location}</p>
                    <p className="text-stone-600 text-sm">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Markets - Glass Map Cards */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-10 text-center">Food Markets to Visit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {markets.map((m, idx) => (
                <div key={idx} className="glass-card-light rounded-2xl p-6 hover-lift relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-200/40 to-transparent" />
                  <div className="absolute top-3 right-3 w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg">{idx + 1}</div>
                  <h3 className="font-bold text-stone-800 mb-2 flex items-center gap-2 relative">
                    <ShoppingBag className="w-4 h-4 text-red-600" /> {m.name}
                  </h3>
                  <p className="text-stone-600 text-sm mb-3 relative">{m.desc}</p>
                  <div className="flex items-center gap-2 relative">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1"><Tag className="w-3 h-3" /> Best for</span>
                    <p className="text-red-700 text-sm font-medium">{m.bestFor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Combine with Sightseeing */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card-light rounded-2xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 10s ease infinite' }}>
                <h2 className="text-2xl font-bold text-white flex items-center gap-2"><Bookmark className="w-6 h-6" /> Combine Food Tour with Sightseeing</h2>
                <p className="text-red-100 mt-1">Our recommended full-day recipe for the perfect Delhi experience</p>
              </div>
              <div className="p-6">
                <div className="space-y-2">
                  {["8:00 AM - Chole Bhature breakfast at Paharganj","9:30 AM - Red Fort visit","10:30 AM - Paranthe Wali Gali & Chandni Chowk walk","11:30 AM - Jalebi & Dahi Bhalle at Chandni Chowk","12:30 PM - Jama Masjid visit","1:30 PM - Mughlai lunch at Karim&apos;s","3:00 PM - Humayun&apos;s Tomb visit","5:00 PM - Connaught Place shopping & chaat","6:30 PM - India Gate sunset & Butter Chicken dinner"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-700 text-sm py-1.5 border-b border-stone-100 last:border-0">
                      <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 border border-red-200/50">
                  <p className="text-red-800 text-sm font-medium">Sedan cab for this full day: ₹2,000 (local Delhi covering Old Delhi + New Delhi stops)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ - Expandable-looking Cards */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-10 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqData.map((faq, idx) => (
                <div key={idx} className="glass-card-light rounded-2xl p-6 hover:border-red-300/50 hover:shadow-lg hover:shadow-red-500/5 transition-all duration-500">
                  <h3 className="font-bold text-stone-800 mb-2 text-sm flex items-start gap-2">
                    <span className="bg-gradient-to-br from-red-500 to-orange-500 rounded-full p-1.5 flex-shrink-0 mt-0.5"><Flame className="w-3 h-3 text-white" /></span>
                    {faq.question}
                  </h3>
                  <p className="text-stone-600 text-sm ml-8">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interlinks - Interactive Grid */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">More Delhi Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: "/delhi-in-2-days-itinerary", title: "Delhi in 2 Days", desc: "Complete itinerary" },
                { href: "/same-day-agra-tour-from-delhi", title: "Same Day Agra Tour", desc: "Day trip from Delhi" },
                { href: "/agra-food-tour", title: "Agra Food Tour", desc: "Petha & Mughlai cuisine" },
                { href: "/amritsar-food-tour", title: "Amritsar Food Tour", desc: "Kulcha & Lassi paradise" },
                { href: "/lucknow-food-tour", title: "Lucknow Food Tour", desc: "Tunday Kebab & Biryani" },
                { href: "/jaipur-food-tour", title: "Jaipur Food Tour", desc: "Dal Baati & Kachori" }
              ].map((link, idx) => (
                <Link key={idx} href={link.href} className="glass-card-light flex items-center gap-3 p-4 rounded-xl hover:border-red-400/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 group">
                  <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-xl p-2.5 group-hover:from-red-500/20 group-hover:to-orange-500/20 transition-all"><ChevronRight className="w-4 h-4 text-red-600 group-hover:translate-x-1 transition-transform" /></div>
                  <div><div className="font-bold text-stone-800 text-sm group-hover:text-red-700 transition-colors">{link.title}</div><div className="text-xs text-stone-400">{link.desc}</div></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Animated Gradient */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-orange-600 to-amber-600" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 10s ease infinite' }} />
          <div className="absolute top-[20%] left-[10%] w-3 h-3 bg-white/20 rounded-full" style={{ animation: 'float 6s ease-in-out infinite' }} />
          <div className="absolute top-[60%] right-[15%] w-2 h-2 bg-white/15 rounded-full" style={{ animation: 'float 8s ease-in-out infinite 2s' }} />
          <div className="absolute bottom-[30%] left-[30%] w-2 h-2 bg-white/10 rounded-full" style={{ animation: 'float 7s ease-in-out infinite 1s' }} />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='15' cy='15' r='1.5' fill='%23fff'/%3E%3C/svg%3E")` }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <Utensils className="w-12 h-12 text-orange-200 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Book Your Delhi Food Tour</h2>
            <p className="text-orange-100/80 mb-8 text-lg">Let our drivers navigate Delhi&apos;s chaos while you focus on the food. From Chandni Chowk to Connaught Place, we know every stop.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-red-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}>
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to book a Delhi food tour" className="inline-flex items-center justify-center gap-2 bg-red-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-red-400/30 hover:bg-red-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">
                WhatsApp Booking <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
