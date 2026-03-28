import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, Coffee, ShoppingBag, Utensils, Flame, Bookmark, Tag } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Haridwar Food Tour 2026 | Pure Veg Kachori, Aloo Puri & Holy City Cuisine Guide',
  description: 'Haridwar food & culinary tour. Pure vegetarian city. Famous Kachori Sabzi, Aloo Puri, Chole Bhature, Rabri, Lassi. Street food itinerary, best restaurants. By locals. Call 7668570551.',
  keywords: 'haridwar food tour, haridwar street food, haridwar food guide, pure vegetarian haridwar, kachori haridwar, har ki pauri food, haridwar restaurants, hoshiyar puri haridwar',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/haridwar-food-tour' },
  openGraph: { title: 'Haridwar Food Tour 2026 | Holy City Culinary Guide by Locals', description: 'Complete Haridwar food guide. Pure vegetarian city. Kachori, Aloo Puri, Chole Bhature, best restaurants and ghat-side food.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/haridwar-food-tour', siteName: 'Triveni Cabs', images: [{ url: '/images/sightseeing/Haridwar/Haridwar_hero_section.jpg', width: 1200, height: 630, alt: 'Haridwar Food Tour Guide' }] },
  twitter: { card: 'summary_large_image', title: 'Haridwar Food Tour 2026 | By Locals', description: 'Haridwar culinary guide. Pure veg holy city food, ghat-side dining.', creator: '@trivenicabs', site: '@trivenicabs', images: ['/images/sightseeing/Haridwar/Haridwar_hero_section.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function HaridwarFoodTourPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Haridwar Food Tour", "item": "https://www.trivenicabs.in/haridwar-food-tour" }] };

  const faqData = [
    { question: "What food is Haridwar famous for?", answer: "Haridwar is famous for its pure vegetarian cuisine — Kachori Sabzi, Aloo Puri, Chole Bhature, Rabri, Lassi, Jalebi, and temple Prasad. The entire city is strictly vegetarian (no meat, fish, or eggs sold anywhere) due to its sacred status as a Hindu pilgrimage destination on the Ganga." },
    { question: "Is Haridwar completely vegetarian?", answer: "Yes! Haridwar is 100% vegetarian. No non-vegetarian food, including eggs, is sold anywhere in the city. Even alcohol is banned. This is due to the city&apos;s religious significance as one of the seven sacred cities (Sapta Puri) of Hinduism. All restaurants and stalls are pure vegetarian." },
    { question: "Where can I find the best food in Haridwar?", answer: "Hoshiyar Puri near Har Ki Pauri is the most famous restaurant — serving since the 1930s. Mohan Ji Puri Wale in Moti Bazaar is legendary for Aloo Puri. The street stalls along Bara Bazaar and near the ghats serve excellent Kachori, Chole Bhature, and chaat." },
    { question: "Is street food safe to eat in Haridwar?", answer: "Popular stalls near Har Ki Pauri and Moti Bazaar with high turnover are generally safe. Haridwar&apos;s food stalls are known for cleanliness due to religious standards. Stick to busy vendors and drink bottled water. Our recommended spots are all well-established." },
    { question: "Can I combine a food tour with ghat visits?", answer: "Absolutely! Morning Ganga snan (holy bath) at Har Ki Pauri, breakfast at Hoshiyar Puri, temple visits at Mansa Devi and Chandi Devi, lunch at Moti Bazaar, evening ghat walk, and the famous Ganga Aarti at sunset. Our drivers create the perfect itinerary." },
    { question: "What is the best time for a Haridwar food tour?", answer: "Morning (7-9 AM) for Kachori Sabzi and Aloo Puri breakfast. Afternoon (12-2 PM) for thali meals and Lassi. Evening (5-8 PM) for chaat, Jalebi, and ghat-side snacks. October to March is best for weather. Kumbh Mela years bring special food festivals." },
    { question: "How much does a Haridwar food tour cost?", answer: "Street food budget: ₹150-300 per person for a full tour. Restaurant meals: ₹200-400 per person. Our food tour with cab: ₹1,200 (sedan) for half-day. From Delhi: ₹4,500 round trip. Combine with Rishikesh for ₹5,500." },
    { question: "Should I combine Haridwar with Rishikesh for food?", answer: "Yes! Rishikesh (25 km away) has a different food vibe — cafe culture, organic food, and international cuisine alongside traditional food. We offer a combined Haridwar-Rishikesh food tour that covers both cities in one day." },
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };

  const famousFoods = [
    { name: "Kachori Sabzi", desc: "Haridwar&apos;s quintessential breakfast — crispy deep-fried kachoris served with spicy aloo sabzi and tangy chutneys. Every morning, the lanes near Har Ki Pauri fill with the aroma of freshly fried kachoris. Hoshiyar Puri has been serving this since the 1930s.", price: "₹25-50 per plate", mustTry: true, heat: 1 },
    { name: "Aloo Puri", desc: "Fluffy deep-fried puris with spicy potato curry — Haridwar&apos;s most popular breakfast after Kachori. Mohan Ji Puri Wale in Moti Bazaar has perfected this over decades. Served with pickle and sometimes accompanied by sweet Jalebi.", price: "₹30-60 per plate", mustTry: true, heat: 1 },
    { name: "Chole Bhature", desc: "Massive puffed fried bread with spicy chickpea curry — a North Indian staple that Haridwar serves with its own touch. Thicker bhature and a tangier chole masala. Available at multiple stalls near the main bazaar and ghat area.", price: "₹50-100 per plate", mustTry: true, heat: 1 },
    { name: "Rabri & Jalebi", desc: "Thick, creamy Rabri (reduced sweetened milk) with hot, crispy Jalebi — a divine combination popular across Haridwar&apos;s sweet shops. The dairy from nearby Uttarakhand hills gives Haridwar&apos;s Rabri an exceptional richness.", price: "₹40-80 per plate", mustTry: true, heat: 0 },
    { name: "Lassi", desc: "Fresh, thick Lassi from Haridwar&apos;s dairy-rich region. Served in clay kulhads at stalls near the ghats. Sweeter and creamier than city lassi due to the quality of local curd. Perfect refreshment after temple visits.", price: "₹30-60 per glass", mustTry: false, heat: 0 },
    { name: "Chaat & Golgappe", desc: "Evening chaat stalls near Har Ki Pauri serve Dahi Bhalle, Papdi Chaat, Aloo Tikki, and Golgappe. Haridwar&apos;s chaat is milder and sweeter than Delhi-style, reflecting the spiritual atmosphere of the city.", price: "₹20-50 per plate", mustTry: false, heat: 1 },
    { name: "Temple Prasad", desc: "Blessed food from Haridwar&apos;s temples — typically pedas, laddoos, and seasonal fruits. The prasad at Mansa Devi Temple (reached by cable car) and Har Ki Pauri is especially revered by millions of pilgrims.", price: "₹20-50 per offering", mustTry: false, heat: 0 },
    { name: "Rajma Chawal & Thali", desc: "Simple, hearty rajma (kidney bean) curry with steamed rice — a North Indian comfort food favourite. Haridwar&apos;s dhabas serve excellent thalis with dal, sabzi, roti, rice, raita, and pickle. Pure vegetarian goodness.", price: "₹80-150 per thali", mustTry: false, heat: 1 },
  ];

  const streetFoodItinerary = [
    { time: "6:00 AM", stop: "Har Ki Pauri", food: "Morning Ganga Aarti & Chai", desc: "Start at dawn at Haridwar&apos;s most sacred ghat. Witness the morning aarti, take a holy dip if you wish, and sip masala chai from clay cups at ghat-side stalls.", color: "from-orange-500 to-red-500" },
    { time: "8:00 AM", stop: "Hoshiyar Puri, near Har Ki Pauri", food: "Kachori Sabzi & Jalebi", desc: "Haridwar&apos;s most famous restaurant since the 1930s. Crispy kachoris with spicy aloo sabzi, followed by hot jalebis. The queue is always long — it moves fast and is worth every minute.", color: "from-amber-500 to-orange-500" },
    { time: "9:30 AM", stop: "Moti Bazaar", food: "Aloo Puri at Mohan Ji", desc: "Walk to Moti Bazaar for Mohan Ji Puri Wale&apos;s legendary Aloo Puri. The puris are fluffy and the curry is perfectly spiced. A Haridwar institution that pilgrims swear by.", color: "from-yellow-500 to-amber-500" },
    { time: "11:00 AM", stop: "Mansa Devi Temple (cable car)", food: "Temple Prasad & Hill Views", desc: "Take the cable car up to Mansa Devi Temple. Receive prasad and enjoy panoramic views of Haridwar and the Ganga. Small food stalls at the base serve snacks.", color: "from-red-500 to-pink-500" },
    { time: "1:00 PM", stop: "Bara Bazaar Area", food: "Chole Bhature & Thali Lunch", desc: "Hearty lunch in the main bazaar — either Chole Bhature from a popular stall or a full vegetarian thali at a traditional restaurant. Multiple options for all budgets.", color: "from-orange-600 to-red-600" },
    { time: "4:00 PM", stop: "Sweet Shops near Har Ki Pauri", food: "Rabri, Lassi & Sweets", desc: "Afternoon sweets — thick Rabri from a traditional sweet shop, fresh Lassi, and browse for laddoos and pedas to take home. The ghat area has the best selection.", color: "from-amber-600 to-yellow-600" },
    { time: "6:30 PM", stop: "Har Ki Pauri", food: "Chaat & Grand Evening Ganga Aarti", desc: "End with evening chaat — Golgappe, Dahi Bhalle, and Papdi Chaat from ghat-side vendors. Then witness the spectacular evening Ganga Aarti — fire, bells, and devotion.", color: "from-red-600 to-orange-600" },
  ];

  const restaurants = [
    { name: "Hoshiyar Puri", cuisine: "Pure Veg / North Indian", budget: "₹100-250", location: "Near Har Ki Pauri", desc: "Haridwar&apos;s most iconic restaurant since the 1930s. Legendary Kachori Sabzi, Chole Bhature, and thali. Every pilgrim&apos;s first stop. The most trusted name in town.", rating: "4.3" },
    { name: "Mohan Ji Puri Wale", cuisine: "Puri / Breakfast", budget: "₹60-150", location: "Moti Bazaar", desc: "The Aloo Puri legend of Haridwar. Simple, no-frills setting with extraordinary food. Their morning puri-sabzi has fed millions of pilgrims over decades.", rating: "4.4" },
    { name: "Chotiwala Restaurant", cuisine: "Pure Veg / Multi-Cuisine", budget: "₹150-350", location: "Near Har Ki Pauri", desc: "Popular tourist restaurant with the famous Chotiwala mascot. Good thali, paneer dishes, and North Indian food. Clean, comfortable, and reliable for families.", rating: "4.1" },
    { name: "Big Ben Restaurant", cuisine: "Pure Veg / Multi-Cuisine", budget: "₹150-350", location: "Railway Road", desc: "Modern restaurant with AC seating. Good South Indian, North Indian, and Chinese options. Popular with travellers wanting a comfortable sit-down meal.", rating: "4.0" },
    { name: "Prakash Lok", cuisine: "Pure Veg / Thali", budget: "₹100-250", location: "Upper Road", desc: "Excellent thali restaurant with generous portions. Multiple sabzis, dal, roti, rice, and dessert. Popular with families and groups. Good value for money.", rating: "4.2" },
    { name: "Mathura Walo Ki Chaat", cuisine: "Chaat / Snacks", budget: "₹50-100", location: "Near Har Ki Pauri", desc: "Famous evening chaat stall with excellent Dahi Bhalle, Papdi Chaat, and Golgappe. Simple roadside setup with extraordinary flavours. Best visited after 4 PM.", rating: "4.3" },
  ];

  const markets = [
    { name: "Har Ki Pauri Area", desc: "The most sacred ghat in Haridwar and the food epicenter. Hoshiyar Puri, sweet shops, chai stalls, and evening chaat vendors surround this area. Morning breakfast and evening aarti-time food are the highlights.", bestFor: "Kachori Sabzi, chai, evening chaat, prasad" },
    { name: "Moti Bazaar", desc: "Traditional market near the ghats with Mohan Ji Puri Wale, sweet shops, spice vendors, and snack stalls. More local and less touristy than Har Ki Pauri area. Morning is the best time to explore.", bestFor: "Aloo Puri, sweets, spices, local food" },
    { name: "Bara Bazaar", desc: "Haridwar&apos;s main commercial market with restaurants, sweet shops, and street food stalls. Good for a proper sit-down lunch. The market is particularly vibrant during evening hours with chaat and snack vendors.", bestFor: "Chole Bhature, thali restaurants, shopping" },
    { name: "Railway Road Area", desc: "The area near Haridwar railway station with modern restaurants and food stalls catering to travellers. More organized dining options with AC seating. Convenient for arriving or departing travellers.", bestFor: "Restaurants, modern dining, traveller food" },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Haridwar Locals", desc: "We eat here every day" },
    { icon: Utensils, title: "Food Experts", desc: "Curated ghat-side stops" },
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
                  Haridwar <span className="shimmer-text">Food</span> Tour
                </h1>
                <p className="text-lg text-orange-100/70 mb-8 leading-relaxed">
                  Pure vegetarian holy city on the Ganga. Kachori Sabzi, Aloo Puri, Chole Bhature, Rabri, and sacred Prasad. Taste spirituality through food.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-7 py-3.5 rounded-full font-bold shadow-xl shadow-red-500/20 hover:shadow-red-500/40 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                    <Phone className="w-5 h-5" /> Call: 7668570551
                  </Link>
                  <Link href="https://wa.me/917668570551?text=I want to book a Haridwar food tour" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-7 py-3.5 rounded-full font-bold border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500">
                    WhatsApp Booking
                  </Link>
                </div>
              </div>
              <div className="hidden md:block relative h-80">
                <div className="glass-card absolute top-0 right-8 rounded-2xl p-5 w-52 transform rotate-3" style={{ animation: 'float 7s ease-in-out infinite' }}>
                  <div className="text-2xl mb-1">🫓</div>
                  <div className="text-white font-bold">Kachori Sabzi</div>
                  <div className="text-orange-300 text-sm">Ghat-side breakfast</div>
                  <div className="text-white/60 text-xs mt-2">₹25-50/plate</div>
                </div>
                <div className="glass-card absolute top-24 left-0 rounded-2xl p-5 w-52 transform -rotate-2" style={{ animation: 'float 8s ease-in-out infinite 1s' }}>
                  <div className="text-2xl mb-1">🙏</div>
                  <div className="text-white font-bold">Pure Veg City</div>
                  <div className="text-orange-300 text-sm">100% vegetarian</div>
                  <div className="text-white/60 text-xs mt-2">Sacred cuisine</div>
                </div>
                <div className="glass-card absolute bottom-0 right-16 rounded-2xl p-5 w-52 transform rotate-1" style={{ animation: 'float 9s ease-in-out infinite 2s' }}>
                  <div className="text-2xl mb-1">🔥</div>
                  <div className="text-white font-bold">Ganga Aarti</div>
                  <div className="text-orange-300 text-sm">Food + devotion</div>
                  <div className="text-white/60 text-xs mt-2">Unforgettable</div>
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
              Haridwar Food Tour — Pure Vegetarian Flavours by the Ganga
            </h2>
            <div className="space-y-5 text-stone-600 text-lg leading-relaxed">
              <p>Haridwar, one of <strong className="text-stone-800">India&apos;s seven most sacred cities</strong>, is a unique culinary destination where every bite is pure vegetarian and every meal carries a touch of devotion. The city&apos;s food culture is deeply tied to its role as the gateway to the Char Dham pilgrimage — feeding millions of devotees with simple, wholesome, and deeply satisfying vegetarian cuisine that has been perfected over centuries.</p><p>Our <strong className="text-stone-800">Haridwar food tour by car</strong> takes you from the dawn Ganga Aarti at Har Ki Pauri to Hoshiyar Puri for legendary Kachori Sabzi, through Moti Bazaar for Mohan Ji&apos;s Aloo Puri, up to Mansa Devi Temple for prasad and hill views, and back to the ghats for evening chaat and the grand Ganga Aarti. Your Triveni Cabs driver knows every food spot in this compact holy city.</p><p>The <strong className="text-stone-800">best time for a Haridwar food tour</strong> is during the cooler months (October to March) or during major festivals like Kumbh Mela, Kanwar Yatra, and Ganga Dussehra when special food preparations appear. Combine Haridwar with nearby Rishikesh (25 km) for a complete spiritual food experience — from traditional ghat-side dining to Rishikesh&apos;s international cafe scene.</p>
            </div>
          </div>
        </section>

        {/* Famous Foods - Glassmorphism Cards */}
        <section className="py-16 px-4 bg-orange-50/80">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Famous Foods of Haridwar</h2>
              <p className="text-stone-500">Pure vegetarian holy city where every meal is cooked with devotion</p>
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
              <p className="text-red-200/70">Follow this route for the ultimate Haridwar food crawl (our drivers know every stop)</p>
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
              <p className="text-orange-200/80 text-sm">Full food tour with sedan cab: <strong className="text-white">₹1,200</strong> (local Haridwar) or <strong className="text-white">₹4,500</strong> (from Delhi round trip)</p>
            </div>
          </div>
        </section>

        {/* Best Restaurants - Premium Card Grid */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-10 text-center">Best Restaurants in Haridwar</h2>
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
                <p className="text-red-100 mt-1">Our recommended full-day recipe for the perfect Haridwar experience</p>
              </div>
              <div className="p-6">
                <div className="space-y-2">
                  {["6:00 AM - Morning Ganga Aarti & holy dip at Har Ki Pauri","8:00 AM - Kachori Sabzi breakfast at Hoshiyar Puri","9:30 AM - Aloo Puri at Mohan Ji, Moti Bazaar","10:30 AM - Cable car to Mansa Devi Temple","12:30 PM - Chole Bhature lunch at Bara Bazaar","2:00 PM - Chandi Devi Temple visit","4:00 PM - Rabri, Lassi & sweet shopping","5:30 PM - Evening chaat at Har Ki Pauri","6:30 PM - Grand evening Ganga Aarti ceremony"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-700 text-sm py-1.5 border-b border-stone-100 last:border-0">
                      <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 border border-red-200/50">
                  <p className="text-red-800 text-sm font-medium">Sedan cab for full day: ₹1,200 (local) or ₹4,500 (from Delhi). Add Rishikesh: ₹5,500 from Delhi</p>
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
            <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">More Haridwar Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: "/sightseeing/haridwar", title: "Haridwar Sightseeing Tours", desc: "All Haridwar attractions" },
                { href: "/haridwar-in-2-days-itinerary", title: "Haridwar in 2 Days", desc: "Complete itinerary" },
                { href: "/same-day-haridwar-from-delhi", title: "Haridwar Day Trip", desc: "From Delhi by car" },
                { href: "/varanasi-food-tour", title: "Varanasi Food Tour", desc: "Another holy city food tour" },
                { href: "/mathura-food-tour", title: "Mathura Food Tour", desc: "Peda & temple prasad" },
                { href: "/delhi-food-tour", title: "Delhi Food Tour", desc: "Chandni Chowk & more" }
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Book Your Haridwar Food Tour</h2>
            <p className="text-orange-100/80 mb-8 text-lg">Let our drivers take you to the best vegetarian food spots by the Ganga. From ghat-side stalls to legendary restaurants, we know every stop.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-red-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}>
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to book a Haridwar food tour" className="inline-flex items-center justify-center gap-2 bg-red-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-red-400/30 hover:bg-red-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">
                WhatsApp Booking <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
