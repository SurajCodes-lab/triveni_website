import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, Coffee, ShoppingBag, Utensils, Flame, Bookmark, Tag } from '@/components/ui/icons';

export const metadata = {
  title: 'Jaipur Food Tour 2026 | Dal Baati Churma, Pyaaz Kachori & Rajasthani Cuisine Guide',
  description: 'Jaipur food & culinary tour. Famous Dal Baati Churma, Pyaaz Kachori, Laal Maas, Ghewar, Lassi. Street food itinerary, best restaurants. By Jaipur locals. Call 7668570551.',
  keywords: 'jaipur food tour, jaipur street food, jaipur famous food, dal baati churma, pyaaz kachori jaipur, laal maas, ghewar jaipur, jaipur food guide, rajasthani food jaipur',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/jaipur-food-tour' },
  openGraph: {
    title: 'Jaipur Food Tour 2026 | Rajasthani Culinary Guide by Locals',
    description: 'Complete Jaipur food guide. Dal Baati Churma, Pyaaz Kachori, Laal Maas, Ghewar, best restaurants and street food spots.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/jaipur-food-tour',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/taj-mahal-hero.jpg', width: 1200, height: 630, alt: 'Jaipur Food Tour Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jaipur Food Tour 2026 | By Locals',
    description: 'Jaipur culinary guide. Dal Baati Churma, Pyaaz Kachori, Rajasthani restaurants.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/taj-mahal-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function JaipurFoodTourPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Jaipur Food Tour", "item": "https://www.trivenicabs.in/jaipur-food-tour" },
    ],
  };

  const faqData = [
    { question: "What food is Jaipur famous for?", answer: "Jaipur is famous for Dal Baati Churma (baked wheat balls with lentils), Pyaaz Kachori (onion-stuffed fried pastry), Laal Maas (fiery red mutton curry), Ghewar (honeycomb-shaped sweet), Mawa Kachori, and creamy Lassi. Rajasthani cuisine is known for its bold spices and ghee-rich preparations." },
    { question: "Where can I find the best Pyaaz Kachori in Jaipur?", answer: "Rawat Mishtan Bhandar on Station Road is legendary for Pyaaz Kachori — locals queue up every morning. Samrat Restaurant near Sindhi Camp and shops in Johari Bazaar also serve excellent kachoris. Early morning is the best time for fresh, hot kachoris." },
    { question: "Is street food safe to eat in Jaipur?", answer: "Popular street food stalls with high turnover are generally safe. Stick to busy stalls with freshly cooked food, avoid raw salads, and drink bottled water. Our recommended spots in this guide are all well-established and frequented by locals daily." },
    { question: "Can I combine a food tour with Jaipur sightseeing?", answer: "Absolutely! Start with Hawa Mahal and Johari Bazaar food stops in the morning, visit Amber Fort before lunch, enjoy Dal Baati at a heritage restaurant, then explore Nahargarh Fort for sunset with chai. Our drivers plan the perfect food-sightseeing combo." },
    { question: "What is the best time for a Jaipur food tour?", answer: "Morning (7-9 AM) for Pyaaz Kachori and Lassi breakfast. Lunch (12-2 PM) for Dal Baati Churma and Laal Maas. Evening (5-8 PM) for chaat, Ghewar, and market food. October to March is the best season for outdoor food exploration in Jaipur." },
    { question: "Are vegetarian options available in Jaipur?", answer: "Jaipur is a vegetarian paradise! Dal Baati Churma, Pyaaz Kachori, Gatte Ki Sabzi, Ker Sangri, Ghewar, and most chaat items are vegetarian. LMB (Laxmi Mishtan Bhandar) is a legendary pure-veg restaurant. Rajasthani thalis are predominantly vegetarian." },
    { question: "How much does a Jaipur food tour cost?", answer: "Street food budget: ₹200-500 per person for a full tour. Restaurant meals: ₹300-800 per person. Our food tour with cab: ₹1,800 (sedan) for a half-day local tour covering 5-6 stops. We handle all transport between food spots across the Pink City." },
    { question: "What sweets should I buy from Jaipur?", answer: "Ghewar (especially during Teej and monsoon season), Mawa Kachori from Rawat Mishtan Bhandar, Mishri Mawa, Balushahi, and Rajasthani Churma Ladoo. LMB and Rawat are the most trusted shops. Ghewar is Jaipur's signature gift sweet." },
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
    { name: "Dal Baati Churma", desc: "Rajasthan&apos;s most iconic dish. Baked wheat balls (baati) dipped in ghee, served with panchmel dal (five-lentil mix) and sweet churma (crushed baati with jaggery and ghee). LMB on Johari Bazaar serves the definitive version.", price: "₹150-300 per thali", mustTry: true, heat: 1 },
    { name: "Pyaaz Kachori", desc: "Jaipur&apos;s legendary breakfast. Crispy deep-fried pastry stuffed with spiced onion filling, served with tangy tamarind and green chutney. Rawat Mishtan Bhandar has perfected this since 1955. Best eaten piping hot.", price: "₹20-50 per piece", mustTry: true, heat: 1 },
    { name: "Laal Maas", desc: "Fiery red mutton curry made with mathania chillies — a Rajput warrior dish. Intensely spiced, slow-cooked meat that falls off the bone. Not for the faint-hearted. Handi Restaurant and 1135 AD serve excellent versions.", price: "₹350-600 per dish", mustTry: true, heat: 3 },
    { name: "Ghewar", desc: "Jaipur&apos;s signature honeycomb-shaped sweet made from flour batter, soaked in sugar syrup, and topped with rabri, mawa, or malai. Traditionally prepared during Teej and monsoon season. Available year-round at LMB.", price: "₹100-400 per kg", mustTry: false, heat: 0 },
    { name: "Lassi", desc: "Thick, creamy Rajasthani lassi made with fresh curd, cream, and sugar. Some shops add kesar (saffron) and dry fruits. Lassiwala near MI Road is a Jaipur institution — serving since 1944 from the same spot.", price: "₹30-80 per glass", mustTry: true, heat: 0 },
    { name: "Gatte Ki Sabzi", desc: "Besan (gram flour) dumplings cooked in a spiced yogurt gravy — a Rajasthani staple. Rich, tangy, and deeply flavourful. Part of every Rajasthani thali and available at all traditional restaurants.", price: "₹120-200 per dish", mustTry: false, heat: 1 },
    { name: "Mawa Kachori", desc: "Sweet kachori stuffed with mawa (reduced milk), dry fruits, and sugar, then deep-fried and soaked in syrup. A Jaipur specialty dessert. Rawat Mishtan Bhandar&apos;s version is legendary and sells out by afternoon.", price: "₹30-60 per piece", mustTry: false, heat: 0 },
    { name: "Ker Sangri", desc: "Traditional Rajasthani desert bean and berry dish. Dried ker berries and sangri beans cooked with spices and pickling masala. Unique to Rajasthan and a must-try for adventurous eaters exploring authentic local cuisine.", price: "₹150-250 per dish", mustTry: false, heat: 2 },
  ];

  const streetFoodItinerary = [
    { time: "7:00 AM", stop: "Rawat Mishtan Bhandar, Station Road", food: "Pyaaz Kachori & Mawa Kachori", desc: "Start with Jaipur&apos;s legendary breakfast. The queue starts early — fresh kachoris come out of the fryer continuously. Pair with masala chai for the perfect morning.", color: "from-orange-500 to-red-500" },
    { time: "8:30 AM", stop: "Lassiwala, MI Road", food: "Fresh Lassi", desc: "The original Lassiwala (since 1944) serves thick, creamy lassi in clay kulhads. There are imposters nearby — look for the one with no seating, just a counter.", color: "from-amber-500 to-orange-500" },
    { time: "10:00 AM", stop: "Johari Bazaar", food: "Ghewar & Sweets Tasting", desc: "Walk through Jaipur&apos;s famous jewellery bazaar and stop at LMB for Ghewar tasting and traditional Rajasthani sweets. Window-shop for jewellery between bites.", color: "from-yellow-500 to-amber-500" },
    { time: "11:30 AM", stop: "Bapu Bazaar Area", food: "Chaat & Samosa", desc: "Explore the colourful textile market and try Jaipur-style chaat — heavier on spices and yogurt. Fresh samosas with green chutney from corner stalls.", color: "from-red-500 to-pink-500" },
    { time: "1:00 PM", stop: "LMB or Handi Restaurant", food: "Dal Baati Churma Thali", desc: "The main event — a full Rajasthani thali with Dal Baati Churma, Gatte Ki Sabzi, Ker Sangri, papad, and buttermilk. Air-conditioned heritage dining.", color: "from-orange-600 to-red-600" },
    { time: "4:00 PM", stop: "Masala Chowk, Ram Niwas Garden", food: "Multi-Cuisine Street Food", desc: "Jaipur&apos;s organized food court with 21 stalls — try Kulfi Faluda, Mirchi Vada, Raj Kachori, and more in one clean, curated space.", color: "from-amber-600 to-yellow-600" },
    { time: "6:00 PM", stop: "Nahargarh Fort Road", food: "Chai & Pakoras with Sunset", desc: "End with masala chai and hot pakoras while watching the sunset over the Pink City from the hills. Our drivers know the best viewpoint stops.", color: "from-red-600 to-orange-600" },
  ];

  const restaurants = [
    { name: "LMB (Laxmi Mishtan Bhandar)", cuisine: "Pure Veg Rajasthani", budget: "₹400-700", location: "Johari Bazaar", desc: "Jaipur&apos;s most iconic restaurant since 1727. The definitive Dal Baati Churma and Rajasthani thali. Heritage interiors, trusted by generations.", rating: "4.4" },
    { name: "Rawat Mishtan Bhandar", cuisine: "Sweets & Snacks", budget: "₹100-300", location: "Station Road", desc: "The Pyaaz Kachori capital of India. Also famous for Mawa Kachori, Ghewar, and traditional sweets. No-frills, pure quality.", rating: "4.3" },
    { name: "Handi Restaurant", cuisine: "Mughlai / Rajasthani Non-Veg", budget: "₹400-700", location: "MI Road", desc: "Best Laal Maas in Jaipur. Also excellent biryani, kebabs, and handi-cooked curries. Air-conditioned, great for families.", rating: "4.2" },
    { name: "1135 AD", cuisine: "Fine Dining Rajasthani", budget: "₹1,500-3,000", location: "Amber Fort", desc: "Luxury dining inside Amber Fort. Rajasthani royal cuisine with stunning heritage ambiance. Reservation essential.", rating: "4.5" },
    { name: "Lassiwala", cuisine: "Lassi Only", budget: "₹30-80", location: "MI Road", desc: "Single-item legend since 1944. Thick, fresh lassi in clay cups. Standing counter only. The original has no chairs — that&apos;s how you know.", rating: "4.6" },
    { name: "Tapri Central", cuisine: "Cafe / Chai", budget: "₹100-300", location: "C-Scheme", desc: "Modern Jaipur&apos;s favourite chai cafe. Over 30 chai varieties, great snacks, rooftop views. Perfect for a break between sightseeing.", rating: "4.3" },
  ];

  const markets = [
    { name: "Johari Bazaar", desc: "The heart of the Pink City. Famous for jewellery, but equally rich in food heritage. LMB is located here, along with generations-old sweet shops and chaat vendors. Morning visits are less crowded.", bestFor: "Ghewar, Rajasthani sweets, Dal Baati" },
    { name: "Bapu Bazaar", desc: "Vibrant textile and handicraft market with excellent street food stalls. Try fresh samosas, kachoris, and Jaipur-style chaat between shopping for bandhani fabrics and mojari shoes.", bestFor: "Chaat, samosas, fabric shopping" },
    { name: "MI Road", desc: "Jaipur&apos;s main commercial road. Home to Lassiwala, Handi Restaurant, and multiple sweet shops. The evening food scene is particularly lively with chaat and snack vendors setting up.", bestFor: "Lassi, restaurants, evening snacks" },
    { name: "Masala Chowk", desc: "Government-organized food court near Albert Hall Museum with 21 curated stalls. Clean, hygienic, and affordable. Perfect for sampling multiple Rajasthani dishes in one place. Open till late evening.", bestFor: "Multi-cuisine street food, Kulfi, Mirchi Vada" },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Jaipur Locals", desc: "We eat here every day" },
    { icon: Utensils, title: "Food Experts", desc: "Curated food stops" },
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
                  Jaipur <span className="shimmer-text">Food</span> Tour
                </h1>
                <p className="text-lg text-orange-100/70 mb-8 leading-relaxed">
                  Dal Baati Churma, Pyaaz Kachori, Laal Maas, Ghewar, and creamy Lassi. Taste the Pink City through the eyes of locals who have eaten here all their lives.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-7 py-3.5 rounded-full font-bold shadow-xl shadow-red-500/20 hover:shadow-red-500/40 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                    <Phone className="w-5 h-5" /> Call: 7668570551
                  </Link>
                  <Link href="https://wa.me/917668570551?text=I want to book a Jaipur food tour" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-7 py-3.5 rounded-full font-bold border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500">
                    WhatsApp Booking
                  </Link>
                </div>
              </div>
              <div className="hidden md:block relative h-80">
                <div className="glass-card absolute top-0 right-8 rounded-2xl p-5 w-52 transform rotate-3" style={{ animation: 'float 7s ease-in-out infinite' }}>
                  <div className="text-2xl mb-1">🫓</div>
                  <div className="text-white font-bold">Pyaaz Kachori</div>
                  <div className="text-orange-300 text-sm">Rawat&apos;s legendary snack</div>
                  <div className="text-white/60 text-xs mt-2">₹20-50/piece</div>
                </div>
                <div className="glass-card absolute top-24 left-0 rounded-2xl p-5 w-52 transform -rotate-2" style={{ animation: 'float 8s ease-in-out infinite 1s' }}>
                  <div className="text-2xl mb-1">🍛</div>
                  <div className="text-white font-bold">Dal Baati Churma</div>
                  <div className="text-orange-300 text-sm">Rajasthan&apos;s pride</div>
                  <div className="text-white/60 text-xs mt-2">₹150-300/thali</div>
                </div>
                <div className="glass-card absolute bottom-0 right-16 rounded-2xl p-5 w-52 transform rotate-1" style={{ animation: 'float 9s ease-in-out infinite 2s' }}>
                  <div className="text-2xl mb-1">🥛</div>
                  <div className="text-white font-bold">Jaipur Lassi</div>
                  <div className="text-orange-300 text-sm">Thick &amp; creamy since 1944</div>
                  <div className="text-white/60 text-xs mt-2">₹30-80/glass</div>
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
              Jaipur Food Tour — A Royal Feast in the Pink City
            </h2>
            <div className="space-y-5 text-stone-600 text-lg leading-relaxed">
              <p>Jaipur is not just about palaces and forts — it is a <strong className="text-stone-800">culinary treasure trove of Rajasthani cuisine</strong> where food traditions have been perfected over centuries. The Pink City&apos;s food culture is deeply rooted in the desert landscape of Rajasthan, where scarcity of water and fresh vegetables led to the invention of ingenious recipes using dried lentils, ghee, buttermilk, and desert beans. The result is one of India&apos;s most distinctive and flavourful regional cuisines.</p>
              <p>Our <strong className="text-stone-800">Jaipur food tour by car</strong> takes you through the winding lanes of Johari Bazaar for legendary sweets at LMB, to Station Road for Rawat&apos;s Pyaaz Kachori, down MI Road for the original Lassiwala&apos;s creamy lassi, and into heritage restaurants for royal Rajasthani thalis. Your Triveni Cabs driver navigates the bustling Pink City streets so you can focus entirely on eating.</p>
              <p>The best time for a <strong className="text-stone-800">Jaipur street food tour</strong> is October to March when the weather is pleasant for outdoor exploration. During the monsoon season (July-August), don&apos;t miss the seasonal Ghewar — a honeycomb-shaped sweet that Jaipur is famous for. Whether you&apos;re a vegetarian or a meat lover craving fiery Laal Maas, Jaipur&apos;s food scene has something extraordinary for every palate.</p>
            </div>
          </div>
        </section>

        {/* Famous Foods - Glassmorphism Cards */}
        <section className="py-16 px-4 bg-orange-50/80">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Famous Foods of Jaipur</h2>
              <p className="text-stone-500">Royal Rajasthani cuisine meets vibrant Pink City street food culture</p>
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
              <p className="text-red-200/70">Follow this route for the ultimate Jaipur food crawl (our drivers know every stop)</p>
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
              <p className="text-orange-200/80 text-sm">Full food tour with sedan cab: <strong className="text-white">₹1,800</strong> (local Jaipur) or <strong className="text-white">₹5,500</strong> (from Delhi round trip)</p>
            </div>
          </div>
        </section>

        {/* Best Restaurants - Premium Card Grid */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-10 text-center">Best Restaurants in Jaipur</h2>
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
                <p className="text-red-100 mt-1">Our recommended full-day recipe for the perfect Jaipur experience</p>
              </div>
              <div className="p-6">
                <div className="space-y-2">
                  {[
                    "7:00 AM - Pyaaz Kachori breakfast at Rawat Mishtan Bhandar",
                    "8:30 AM - Lassi at the original Lassiwala, MI Road",
                    "9:00 AM - Hawa Mahal & Johari Bazaar walk",
                    "10:30 AM - Amber Fort visit",
                    "1:00 PM - Dal Baati Churma thali at LMB",
                    "2:30 PM - City Palace & Jantar Mantar",
                    "4:00 PM - Street food at Masala Chowk",
                    "5:30 PM - Nahargarh Fort sunset with chai",
                    "7:00 PM - Buy Ghewar & sweets for home",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-700 text-sm py-1.5 border-b border-stone-100 last:border-0">
                      <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 border border-red-200/50">
                  <p className="text-red-800 text-sm font-medium">Sedan cab for this full day: ₹1,800 (local Jaipur) or ₹5,500 (from Delhi round trip)</p>
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
            <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">More Jaipur Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: "/sightseeing/jaipur", title: "Jaipur Sightseeing Tours", desc: "All Jaipur attractions" },
                { href: "/delhi-to-jaipur", title: "Delhi to Jaipur Cab", desc: "Private car from Delhi" },
                { href: "/jodhpur-food-tour", title: "Jodhpur Food Tour", desc: "Mirchi Vada & more" },
                { href: "/udaipur-food-tour", title: "Udaipur Food Tour", desc: "Lake city cuisine" },
                { href: "/pushkar-food-tour", title: "Pushkar Food Tour", desc: "Cafe culture & Malpua" },
                { href: "/delhi-food-tour", title: "Delhi Food Tour", desc: "Chandni Chowk & more" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Book Your Jaipur Food Tour</h2>
            <p className="text-orange-100/80 mb-8 text-lg">Let our drivers take you to the best food spots in the Pink City. We know every lane and every legendary stall.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-red-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}>
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to book a Jaipur food tour" className="inline-flex items-center justify-center gap-2 bg-red-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-red-400/30 hover:bg-red-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">
                WhatsApp Booking <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
