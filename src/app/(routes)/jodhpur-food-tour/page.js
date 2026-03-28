import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, Coffee, ShoppingBag, Utensils, Flame, Bookmark, Tag } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Jodhpur Food Tour 2026 | Mirchi Vada, Mawa Kachori & Rajasthani Street Food Guide',
  description: 'Jodhpur food & culinary tour. Famous Mirchi Vada, Mawa Kachori, Pyaaz Kachori, Gulab Jamun, Makhaniya Lassi. Street food itinerary, best restaurants. By Jodhpur locals. Call 7668570551.',
  keywords: 'jodhpur food tour, jodhpur street food, mirchi vada jodhpur, mawa kachori jodhpur, makhaniya lassi, jodhpur food guide, rajasthani food jodhpur, clock tower food jodhpur',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/jodhpur-food-tour' },
  openGraph: {
    title: 'Jodhpur Food Tour 2026 | Blue City Culinary Guide by Locals',
    description: 'Complete Jodhpur food guide. Mirchi Vada, Mawa Kachori, Makhaniya Lassi, best restaurants and street food spots.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/jodhpur-food-tour',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/sightseeing/Jodhpur/Mehrangarh Fort.jpg', width: 1200, height: 630, alt: 'Jodhpur Food Tour Guide' }],
  },
  twitter: { card: 'summary_large_image', title: 'Jodhpur Food Tour 2026 | By Locals', description: 'Jodhpur culinary guide. Mirchi Vada, Mawa Kachori, Rajasthani restaurants.', creator: '@trivenicabs', site: '@trivenicabs', images: ['/images/sightseeing/Jodhpur/Mehrangarh Fort.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function JodhpurFoodTourPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Jodhpur Food Tour", "item": "https://www.trivenicabs.in/jodhpur-food-tour" }] };

  const faqData = [
    { question: "What food is Jodhpur famous for?", answer: "Jodhpur is famous for Mirchi Vada (fried stuffed chilli, the city&apos;s signature snack), Mawa Kachori (sweet stuffed pastry), Pyaaz Kachori, Gulab Jamun, Makhaniya Lassi (buttery lassi), Dal Baati Churma, and spicy Rajasthani curries. The Clock Tower area is the food epicenter." },
    { question: "Where can I find the best Mirchi Vada in Jodhpur?", answer: "Shahi Samosa near Clock Tower is the most famous spot for Mirchi Vada. Janta Sweet Home and stalls in Sardar Market also serve excellent versions. The chilli is stuffed with spiced potato filling, dipped in gram flour batter, and deep-fried until crispy." },
    { question: "Is street food safe to eat in Jodhpur?", answer: "Yes! Jodhpur&apos;s famous food stalls have been operating for decades with loyal local followings. Stick to busy stalls around Clock Tower and Sardar Market. Our recommended spots are all well-established and trusted by generations of Jodhpuris." },
    { question: "Can I combine a food tour with Jodhpur sightseeing?", answer: "Absolutely! Morning Mehrangarh Fort visit, then Clock Tower food walk, afternoon Umaid Bhawan Palace, Jaswant Thada visit, evening Sardar Market food crawl. Our drivers create the perfect food-sightseeing combination itinerary." },
    { question: "What is the best time for a Jodhpur food tour?", answer: "Morning (8-10 AM) for Kachori and breakfast items. Lunch (12-2 PM) for Dal Baati Churma thali. Evening (5-8 PM) for Mirchi Vada, Makhaniya Lassi, and market food. October to March is ideal for outdoor food exploration in the Blue City." },
    { question: "Are vegetarian options available in Jodhpur?", answer: "Jodhpur is predominantly vegetarian! Mirchi Vada, Mawa Kachori, Pyaaz Kachori, Dal Baati Churma, Makhaniya Lassi, Gulab Jamun, and most street food is vegetarian. Janta Sweet Home and most restaurants serve pure veg Rajasthani food." },
    { question: "How much does a Jodhpur food tour cost?", answer: "Street food budget: ₹150-350 per person for a full tour. Restaurant meals: ₹200-500 per person. Our food tour with cab: ₹1,500 (sedan) for half-day covering 5-6 stops. The Clock Tower area is walkable, but we drive between distant spots." },
    { question: "What makes Makhaniya Lassi special?", answer: "Makhaniya Lassi is Jodhpur&apos;s signature drink — thick, creamy lassi churned with fresh makkhan (butter) and topped with a generous layer of cream. It is richer and more buttery than regular lassi. Best at Mishrilal Hotel near Clock Tower, serving since 1927." },
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };

  const famousFoods = [
    { name: "Mirchi Vada", desc: "Jodhpur&apos;s most iconic snack. Large green chilli stuffed with spiced potato filling, coated in gram flour batter, and deep-fried until golden and crispy. Served with tangy chutney. Shahi Samosa near Clock Tower serves the best version.", price: "₹15-30 per piece", mustTry: true, heat: 2 },
    { name: "Mawa Kachori", desc: "Sweet kachori stuffed with mawa (khoya), dry fruits, and sugar, then deep-fried and soaked in sugar syrup. Jodhpur&apos;s answer to the dessert question. Janta Sweet Home has perfected this for decades. Rich, sweet, and utterly indulgent.", price: "₹30-60 per piece", mustTry: true, heat: 0 },
    { name: "Pyaaz Kachori", desc: "Crispy deep-fried pastry filled with spiced onion mixture, served with tangy-sweet chutneys. Similar to Jaipur&apos;s version but with Jodhpur&apos;s own spice blend. Available at every sweet shop and street stall around Clock Tower.", price: "₹20-40 per piece", mustTry: true, heat: 1 },
    { name: "Makhaniya Lassi", desc: "Jodhpur&apos;s signature buttery lassi. Churned with fresh makkhan (butter) and topped with thick cream. Richer and heavier than regular lassi. Mishrilal Hotel near Clock Tower has been serving this since 1927.", price: "₹40-80 per glass", mustTry: true, heat: 0 },
    { name: "Gulab Jamun", desc: "Jodhpur claims to have the best Gulab Jamun in Rajasthan — soft, spongy milk-solid balls soaked in rose-scented sugar syrup. Janta Sweet Home and Jodhpur Sweets are the go-to shops. These are softer and more fragrant than elsewhere.", price: "₹20-40 per piece", mustTry: false, heat: 0 },
    { name: "Dal Baati Churma", desc: "The Rajasthani classic. Baked wheat balls dipped in ghee, served with five-lentil dal and sweet churma. Every restaurant in Jodhpur serves it, but the best versions come from traditional thali restaurants in the old city.", price: "₹120-250 per thali", mustTry: false, heat: 1 },
    { name: "Ker Sangri", desc: "Desert beans and berries cooked with spices — a dish unique to the Thar Desert region. Tangy, spicy, and unlike anything else. Part of every authentic Rajasthani thali. A must-try for adventurous eaters.", price: "₹100-200 per dish", mustTry: false, heat: 2 },
    { name: "Ghevar & Rajasthani Sweets", desc: "Jodhpur&apos;s sweet shops offer Ghevar, Balushahi, Rabri, Malpua, and speciality Mawa sweets. The sweet-making tradition here is centuries old. Janta Sweet Home is the most trusted name in Jodhpur.", price: "₹100-400 per kg", mustTry: false, heat: 0 },
  ];

  const streetFoodItinerary = [
    { time: "8:00 AM", stop: "Janta Sweet Home, near Clock Tower", food: "Mawa Kachori & Pyaaz Kachori", desc: "Start with Jodhpur&apos;s famous kachoris at this legendary sweet shop. Try both sweet Mawa Kachori and savoury Pyaaz Kachori. Pair with masala chai.", color: "from-orange-500 to-red-500" },
    { time: "9:30 AM", stop: "Mishrilal Hotel, Clock Tower", food: "Makhaniya Lassi", desc: "The iconic Makhaniya Lassi since 1927. Thick, buttery, cream-topped lassi in a steel glass. This is the drink that defines Jodhpur. Don&apos;t skip it.", color: "from-amber-500 to-orange-500" },
    { time: "11:00 AM", stop: "Shahi Samosa, Clock Tower", food: "Mirchi Vada & Samosa", desc: "Jodhpur&apos;s most famous Mirchi Vada — crispy, spicy, and satisfying. Their samosas are equally legendary. Watch them being fried fresh in front of you.", color: "from-yellow-500 to-amber-500" },
    { time: "12:00 PM", stop: "Sardar Market Walk", food: "Chaat & Street Snacks", desc: "Explore the vibrant Sardar Market around Clock Tower. Try golgappe, tikki, and local snacks from various stalls. The market atmosphere is incredible.", color: "from-red-500 to-pink-500" },
    { time: "1:30 PM", stop: "Traditional Thali Restaurant", food: "Rajasthani Thali with Dal Baati", desc: "Full Rajasthani thali with Dal Baati Churma, Gatte Ki Sabzi, Ker Sangri, papad, and buttermilk. Multiple options near the old city. Omelette shop nearby for non-veg.", color: "from-orange-600 to-red-600" },
    { time: "4:00 PM", stop: "Jodhpur Sweet Shops", food: "Gulab Jamun & Sweets", desc: "Jodhpur&apos;s famous Gulab Jamun — soft, syrupy, and perfectly sweet. Also try Balushahi and seasonal Ghevar. Buy some to take home.", color: "from-amber-600 to-yellow-600" },
    { time: "6:00 PM", stop: "Stepwell Cafe or rooftop", food: "Chai with Fort View", desc: "End at a rooftop cafe or near Toorji Ka Jhalra (stepwell) with masala chai and pakoras while watching the sunset light up the Blue City and Mehrangarh Fort.", color: "from-red-600 to-orange-600" },
  ];

  const restaurants = [
    { name: "Janta Sweet Home", cuisine: "Sweets & Snacks", budget: "₹100-250", location: "Near Clock Tower", desc: "Jodhpur&apos;s most famous sweet shop. Legendary Mawa Kachori, Gulab Jamun, and Rajasthani sweets. The go-to place for generations.", rating: "4.3" },
    { name: "Shahi Samosa", cuisine: "Snacks / Street Food", budget: "₹50-120", location: "Clock Tower", desc: "The Mirchi Vada and Samosa capital of Jodhpur. Simple stall, extraordinary food. Always busy — that&apos;s how you know it&apos;s good.", rating: "4.4" },
    { name: "Mishrilal Hotel", cuisine: "Lassi / Snacks", budget: "₹50-120", location: "Clock Tower", desc: "Since 1927. The birthplace of Makhaniya Lassi. Also serves excellent Rabri and traditional snacks. A Jodhpur institution.", rating: "4.5" },
    { name: "Omelette Shop", cuisine: "Egg Dishes", budget: "₹80-150", location: "Near Sardar Market", desc: "Jodhpur&apos;s famous omelette stall with 50+ varieties. Bread omelette, masala omelette, and creative combinations. Popular with locals and tourists.", rating: "4.2" },
    { name: "Stepwell Cafe", cuisine: "Cafe / Multi-Cuisine", budget: "₹200-400", location: "Toorji Ka Jhalra", desc: "Charming cafe overlooking the 18th-century stepwell. Coffee, light meals, and Rajasthani snacks. Perfect for a relaxed afternoon break.", rating: "4.4" },
    { name: "Indique", cuisine: "Fine Dining / Rajasthani", budget: "₹800-1,500", location: "Pal Haveli", desc: "Rooftop fine dining with stunning Mehrangarh Fort views. Elevated Rajasthani cuisine. Perfect for a special dinner. Reservation recommended.", rating: "4.5" },
  ];

  const markets = [
    { name: "Sardar Market (Clock Tower)", desc: "The beating heart of Jodhpur&apos;s food culture. Surrounding the iconic Clock Tower, this vibrant market has Janta Sweet Home, Mishrilal Hotel, Shahi Samosa, and dozens of food stalls. Everything is walkable within this area.", bestFor: "Mirchi Vada, Lassi, Kachori, sweets" },
    { name: "Clock Tower Area", desc: "The immediate vicinity of the Clock Tower is a concentrated food paradise. Spice shops, sweet vendors, snack stalls, and the famous omelette shop are all within a 5-minute walk. Best explored in morning or evening.", bestFor: "All Jodhpur specialties, spices" },
    { name: "Nai Sarak", desc: "A bustling commercial street with excellent sweet shops, snack vendors, and traditional Rajasthani food stalls. Less touristy than Clock Tower but equally food-rich. Our drivers know the hidden gems here.", bestFor: "Local snacks, sweets, authentic food" },
    { name: "Station Road Area", desc: "Near the railway station with multiple restaurants and food stalls. Good for Rajasthani thali meals and sit-down dining. More organized and less chaotic than the old city market areas.", bestFor: "Thali restaurants, sit-down meals" },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Jodhpur Locals", desc: "We eat here every day" },
    { icon: Utensils, title: "Food Experts", desc: "Curated Blue City stops" },
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
                  Jodhpur <span className="shimmer-text">Food</span> Tour
                </h1>
                <p className="text-lg text-orange-100/70 mb-8 leading-relaxed">
                  Mirchi Vada, Mawa Kachori, Makhaniya Lassi, and Gulab Jamun. Taste the Blue City through the eyes of locals who have eaten here all their lives.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-7 py-3.5 rounded-full font-bold shadow-xl shadow-red-500/20 hover:shadow-red-500/40 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                    <Phone className="w-5 h-5" /> Call: 7668570551
                  </Link>
                  <Link href="https://wa.me/917668570551?text=I want to book a Jodhpur food tour" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-7 py-3.5 rounded-full font-bold border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500">
                    WhatsApp Booking
                  </Link>
                </div>
              </div>
              <div className="hidden md:block relative h-80">
                <div className="glass-card absolute top-0 right-8 rounded-2xl p-5 w-52 transform rotate-3" style={{ animation: 'float 7s ease-in-out infinite' }}>
                  <div className="text-2xl mb-1">🌶️</div>
                  <div className="text-white font-bold">Mirchi Vada</div>
                  <div className="text-orange-300 text-sm">Jodhpur&apos;s signature snack</div>
                  <div className="text-white/60 text-xs mt-2">₹15-30/piece</div>
                </div>
                <div className="glass-card absolute top-24 left-0 rounded-2xl p-5 w-52 transform -rotate-2" style={{ animation: 'float 8s ease-in-out infinite 1s' }}>
                  <div className="text-2xl mb-1">🥛</div>
                  <div className="text-white font-bold">Makhaniya Lassi</div>
                  <div className="text-orange-300 text-sm">Buttery since 1927</div>
                  <div className="text-white/60 text-xs mt-2">₹40-80/glass</div>
                </div>
                <div className="glass-card absolute bottom-0 right-16 rounded-2xl p-5 w-52 transform rotate-1" style={{ animation: 'float 9s ease-in-out infinite 2s' }}>
                  <div className="text-2xl mb-1">🍩</div>
                  <div className="text-white font-bold">Mawa Kachori</div>
                  <div className="text-orange-300 text-sm">Sweet stuffed pastry</div>
                  <div className="text-white/60 text-xs mt-2">₹30-60/piece</div>
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
              Jodhpur Food Tour — Spice &amp; Sweetness in the Blue City
            </h2>
            <div className="space-y-5 text-stone-600 text-lg leading-relaxed">
              <p>Jodhpur, the <strong className="text-stone-800">Blue City of Rajasthan</strong>, is as famous for its food as it is for the majestic Mehrangarh Fort and its blue-painted houses. The city&apos;s food culture revolves around the Clock Tower area, where generations of food vendors have perfected recipes that balance the bold spices of the Thar Desert with the sweetness that Rajasthanis are known for.</p><p>Our <strong className="text-stone-800">Jodhpur food tour by car</strong> takes you through the vibrant Sardar Market for Mirchi Vada at Shahi Samosa, to Mishrilal Hotel for the original Makhaniya Lassi, through Janta Sweet Home for legendary Mawa Kachori and Gulab Jamun, and into traditional thali restaurants for the full Dal Baati Churma experience. The Clock Tower area is walkable, but our driver handles the journey between distant spots.</p><p>The <strong className="text-stone-800">best time for a Jodhpur food tour</strong> is October to March when the desert weather is pleasant for outdoor exploration. Jodhpur&apos;s food scene is concentrated and accessible — you can taste most iconic dishes within a few hundred metres of the Clock Tower. But don&apos;t miss the rooftop cafes with Mehrangarh Fort views for a sunset chai experience that is uniquely Jodhpur.</p>
            </div>
          </div>
        </section>

        {/* Famous Foods - Glassmorphism Cards */}
        <section className="py-16 px-4 bg-orange-50/80">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Famous Foods of Jodhpur</h2>
              <p className="text-stone-500">Desert spices meet Marwari sweetness at the foot of Mehrangarh Fort</p>
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
              <p className="text-red-200/70">Follow this route for the ultimate Jodhpur food crawl (our drivers know every stop)</p>
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
              <p className="text-orange-200/80 text-sm">Full food tour with sedan cab: <strong className="text-white">₹1,500</strong> (local Jodhpur) or <strong className="text-white">₹6,000</strong> (from Jaipur round trip)</p>
            </div>
          </div>
        </section>

        {/* Best Restaurants - Premium Card Grid */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-10 text-center">Best Restaurants in Jodhpur</h2>
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
                <p className="text-red-100 mt-1">Our recommended full-day recipe for the perfect Jodhpur experience</p>
              </div>
              <div className="p-6">
                <div className="space-y-2">
                  {["8:00 AM - Mawa Kachori breakfast at Janta Sweet Home","9:00 AM - Mehrangarh Fort visit (2-3 hours)","12:00 PM - Mirchi Vada at Shahi Samosa, Clock Tower","12:30 PM - Makhaniya Lassi at Mishrilal Hotel","1:30 PM - Dal Baati Churma thali lunch","3:00 PM - Jaswant Thada & Umaid Bhawan Palace","5:00 PM - Sardar Market food walk & Gulab Jamun","6:30 PM - Rooftop chai with Mehrangarh Fort sunset views","7:30 PM - Buy sweets and spices for home"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-700 text-sm py-1.5 border-b border-stone-100 last:border-0">
                      <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 border border-red-200/50">
                  <p className="text-red-800 text-sm font-medium">Sedan cab for this full day: ₹1,500 (local Jodhpur) or ₹6,000 (from Jaipur round trip)</p>
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
            <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">More Jodhpur Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: "/sightseeing/jodhpur", title: "Jodhpur Sightseeing Tours", desc: "All Jodhpur attractions" },
                { href: "/jodhpur-in-2-days-itinerary", title: "Jodhpur in 2 Days", desc: "Complete itinerary" },
                { href: "/jaipur-food-tour", title: "Jaipur Food Tour", desc: "Dal Baati & Kachori" },
                { href: "/udaipur-food-tour", title: "Udaipur Food Tour", desc: "Lake city cuisine" },
                { href: "/pushkar-food-tour", title: "Pushkar Food Tour", desc: "Cafe culture & Malpua" },
                { href: "/jaisalmer-in-2-days-itinerary", title: "Jaisalmer in 2 Days", desc: "Golden city guide" }
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Book Your Jodhpur Food Tour</h2>
            <p className="text-orange-100/80 mb-8 text-lg">Let our drivers take you to the best food spots in the Blue City. From Clock Tower to rooftop cafes, we know every stop.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-red-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}>
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to book a Jodhpur food tour" className="inline-flex items-center justify-center gap-2 bg-red-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-red-400/30 hover:bg-red-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">
                WhatsApp Booking <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
