import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, Coffee, ShoppingBag, Utensils, Flame, Bookmark, Tag } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Mathura Food Tour 2026 | Peda, Rabri, Lassi & Temple Prasad Guide',
  description: 'Mathura food & culinary tour. Famous Mathura Peda, Rabri, Lassi, Kachori Sabzi, Temple Prasad. Street food itinerary, best restaurants. By Mathura locals. Call 7668570551.',
  keywords: 'mathura food tour, mathura street food, mathura peda, mathura famous food, rabri mathura, lassi mathura, vishram ghat food, mathura food guide, vrindavan food',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/mathura-food-tour' },
  openGraph: { title: 'Mathura Food Tour 2026 | Holy City Culinary Guide by Locals', description: 'Complete Mathura food guide. Famous Peda, Rabri, Lassi, Temple Prasad, best restaurants and sweet shops.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/mathura-food-tour', siteName: 'Triveni Cabs', images: [{ url: '/images/sightseeing/Mathura_Vrindavan/mathura_vrindvan_hero_image.png', width: 1200, height: 630, alt: 'Mathura Food Tour Guide' }] },
  twitter: { card: 'summary_large_image', title: 'Mathura Food Tour 2026 | By Locals', description: 'Mathura culinary guide. Peda, Rabri, Temple Prasad, holy city food.', creator: '@trivenicabs', site: '@trivenicabs', images: ['/images/sightseeing/Mathura_Vrindavan/mathura_vrindvan_hero_image.png'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function MathuraFoodTourPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Mathura Food Tour", "item": "https://www.trivenicabs.in/mathura-food-tour" }] };

  const faqData = [
    { question: "What food is Mathura famous for?", answer: "Mathura is famous for Peda (the city&apos;s signature sweet made from reduced milk and sugar), Rabri (thick sweetened milk cream), Lassi, Kachori Sabzi, Temple Prasad (blessed food at Krishna temples), Jalebi, and Aloo Puri. As Lord Krishna&apos;s birthplace, the entire city is pure vegetarian." },
    { question: "Where can I buy the best Peda in Mathura?", answer: "Brijwasi Mithai Wala near Holi Gate is the most famous and trusted Peda shop — operating for over 100 years. Other excellent options include Gopal Ji, Radha Sweets near Vishram Ghat, and Mathura Wala near the bus stand. Always buy from established shops with proper packaging." },
    { question: "Is all food in Mathura vegetarian?", answer: "Yes! Mathura is a pure vegetarian city due to its religious significance as Lord Krishna&apos;s birthplace. No non-vegetarian food is sold anywhere in Mathura or Vrindavan. All restaurants, street stalls, and shops are 100% vegetarian. Even eggs are not commonly available." },
    { question: "Is street food safe to eat in Mathura?", answer: "Popular street food stalls near Vishram Ghat and Holi Gate with high turnover are generally safe. Stick to busy vendors, avoid raw items, and drink bottled water. Our recommended spots are all generations-old establishments trusted by millions of pilgrims." },
    { question: "Can I combine a food tour with temple visits?", answer: "Absolutely! Krishna Janmabhoomi Temple visit, then Kachori breakfast near Holi Gate, Peda shopping at Brijwasi, Vishram Ghat walk, Vrindavan temples visit, lunch at a local dhaba, and evening aarti with Rabri. We customize every itinerary perfectly." },
    { question: "What is the best time for a Mathura food tour?", answer: "Morning (7-9 AM) for Kachori Sabzi and Aloo Puri breakfast. Mid-morning (10-12) for Peda tasting and shopping. Afternoon (1-3 PM) for Lassi and thali. Evening (5-8 PM) for Rabri, Jalebi, and ghat-side snacks. Holi season (March) is the most vibrant time." },
    { question: "How much does a Mathura food tour cost?", answer: "Street food budget: ₹150-300 per person for a full tour. Sweet shopping: ₹200-500 (Peda boxes). Our food tour with cab: ₹1,200 (sedan) for half-day covering Mathura + Vrindavan. From Delhi: ₹3,500 round trip including food stops." },
    { question: "Should I visit Vrindavan too for food?", answer: "Absolutely! Vrindavan (15 km from Mathura) has its own food specialties — Lassi at the famous Vrindavan lassi shops, temple prasad at Banke Bihari and ISKCON temples, and traditional Braj ki chaat. We include both cities in our food tour." },
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };

  const famousFoods = [
    { name: "Mathura Peda", desc: "Mathura&apos;s signature sweet and India&apos;s most famous Peda. Made from thickened milk (khoya), sugar, and flavoured with cardamom and saffron. Brijwasi Mithai Wala has been the gold standard for over 100 years. Buy to take home — it is the quintessential Mathura souvenir.", price: "₹300-600 per kg", mustTry: true, heat: 0 },
    { name: "Rabri", desc: "Thick, creamy reduced sweetened milk layered with malai (cream), flavoured with cardamom and saffron. Mathura&apos;s Rabri is richer and thicker than elsewhere because of the superior quality of local milk from Braj&apos;s dairy farms.", price: "₹40-80 per bowl", mustTry: true, heat: 0 },
    { name: "Lassi", desc: "Thick, creamy Mathura Lassi served in clay kulhads — sweeter and richer than most cities. The dairy heritage of Braj (Krishna&apos;s land) means the milk and curd here are exceptionally fresh and flavourful. Shops near Vishram Ghat are the best.", price: "₹30-60 per glass", mustTry: true, heat: 0 },
    { name: "Kachori Sabzi", desc: "Crispy deep-fried kachoris with spicy potato curry and tangy chutney — Mathura&apos;s beloved breakfast. Available at countless stalls near Holi Gate and Vishram Ghat. Simple, satisfying, and the perfect start to a temple visit day.", price: "₹20-40 per plate", mustTry: true, heat: 1 },
    { name: "Temple Prasad", desc: "Blessed food offered at Krishna temples — typically consisting of Peda, Rabri, Poha (flattened rice), and seasonal fruits. The prasad at Krishna Janmabhoomi and Dwarkadhish Temple is especially revered. A spiritual food experience.", price: "₹20-50 per offering", mustTry: false, heat: 0 },
    { name: "Aloo Puri", desc: "Deep-fried puris with spiced potato curry — a hearty Mathura breakfast option. Served with pickle and sometimes accompanied by Jalebi. Multiple morning stalls near the temples serve this filling, affordable meal.", price: "₹30-50 per plate", mustTry: false, heat: 1 },
    { name: "Jalebi & Imarti", desc: "Hot, crispy Jalebi spirals and flower-shaped Imarti soaked in sugar syrup. Sweet shops across Mathura serve these, especially popular during festivals and early mornings. The Holi Gate area has some of the best Jalebi vendors.", price: "₹30-60 per plate", mustTry: false, heat: 0 },
    { name: "Chaat & Golgappe", desc: "Mathura-style chaat is sweeter and milder than Delhi or Lucknow chaat, reflecting the gentle Braj culture. Dahi Bhalle, Papdi Chaat, and Golgappe from evening stalls near Vishram Ghat are popular with pilgrims and locals alike.", price: "₹20-50 per plate", mustTry: false, heat: 1 },
  ];

  const streetFoodItinerary = [
    { time: "7:00 AM", stop: "Near Krishna Janmabhoomi Temple", food: "Kachori Sabzi & Chai", desc: "Start with Mathura&apos;s classic breakfast outside the most sacred temple. Crispy kachoris with spicy potato curry and masala chai from traditional vendors who have served pilgrims for generations.", color: "from-orange-500 to-red-500" },
    { time: "8:30 AM", stop: "Brijwasi Mithai Wala, Holi Gate", food: "Peda Tasting & Shopping", desc: "Visit Mathura&apos;s most famous sweet shop. Taste various Peda varieties — plain, kesar (saffron), dry fruit, and chocolate. Buy boxes to take home. This is a Mathura pilgrimage in itself.", color: "from-amber-500 to-orange-500" },
    { time: "10:00 AM", stop: "Vishram Ghat", food: "Lassi & Rabri", desc: "Walk along the sacred Vishram Ghat where Lord Krishna rested after defeating Kansa. Sip thick, creamy Lassi and Rabri from ghat-side vendors. The spiritual setting adds to the experience.", color: "from-yellow-500 to-amber-500" },
    { time: "11:30 AM", stop: "Dwarkadhish Temple Area", food: "Temple Prasad & Sweets", desc: "Visit the magnificent Dwarkadhish Temple and receive prasad. Browse the surrounding sweet shops for Rabri, Peda, and seasonal specialties. The temple architecture is stunning.", color: "from-red-500 to-pink-500" },
    { time: "1:00 PM", stop: "Local Dhaba near Holi Gate", food: "Aloo Puri & Thali Lunch", desc: "Hearty vegetarian lunch at a traditional dhaba. Aloo Puri or a full thali with dal, sabzi, roti, rice, and curd. Simple, home-style cooking that feeds the soul.", color: "from-orange-600 to-red-600" },
    { time: "3:00 PM", stop: "Vrindavan (15 km drive)", food: "Vrindavan Lassi & ISKCON Prasad", desc: "Drive to Vrindavan for its famous thick Lassi and visit ISKCON temple for their legendary prasad — especially the Govinda&apos;s restaurant inside the temple complex.", color: "from-amber-600 to-yellow-600" },
    { time: "5:30 PM", stop: "Vishram Ghat Evening", food: "Jalebi, Chaat & Evening Aarti", desc: "Return to Mathura for evening snacks — hot Jalebi, Dahi Bhalle, and Golgappe from ghat-side vendors. Then witness the beautiful Yamuna Aarti at Vishram Ghat.", color: "from-red-600 to-orange-600" },
  ];

  const restaurants = [
    { name: "Brijwasi Mithai Wala", cuisine: "Sweets / Peda", budget: "₹100-500", location: "Holi Gate", desc: "Mathura&apos;s most legendary sweet shop — over 100 years old. The definitive Peda, plus Rabri, Jalebi, and all traditional sweets. The most trusted name in Braj.", rating: "4.5" },
    { name: "Gopal Ji Sweets", cuisine: "Sweets / Snacks", budget: "₹100-300", location: "Near Vishram Ghat", desc: "Another excellent sweet shop with outstanding Peda and Rabri. Popular with locals who consider it equal to Brijwasi. Less crowded, equally delicious.", rating: "4.3" },
    { name: "Shankar Dhaba", cuisine: "Pure Veg / Thali", budget: "₹100-250", location: "Holi Gate Area", desc: "Popular local dhaba serving hearty vegetarian meals. Excellent Aloo Puri, thali, and seasonal sabzis. No-frills, authentic Braj cooking at affordable prices.", rating: "4.1" },
    { name: "ISKCON Govinda&apos;s", cuisine: "Pure Veg / Sattvic", budget: "₹100-300", location: "Vrindavan", desc: "The famous ISKCON temple restaurant in Vrindavan. Pure sattvic (spiritual) food — no onion, no garlic. Excellent thali, Peda, and prasad. A unique dining experience.", rating: "4.4" },
    { name: "Radha Sweets", cuisine: "Sweets / Snacks", budget: "₹80-300", location: "Near Vishram Ghat", desc: "Well-known sweet shop with excellent Rabri, Lassi, and seasonal sweets. Their Kesar Peda is particularly popular. Close to the main ghat for a convenient food stop.", rating: "4.2" },
    { name: "Best Restaurant", cuisine: "Pure Veg / Multi-Cuisine", budget: "₹150-350", location: "Near Bus Stand", desc: "Popular sit-down restaurant with AC seating. Good Rajasthani and North Indian thali, Chinese options. Convenient for travellers arriving by bus or car from Delhi.", rating: "4.0" },
  ];

  const markets = [
    { name: "Holi Gate Area", desc: "The main food hub of Mathura. Brijwasi Mithai Wala is here, along with multiple sweet shops, Kachori vendors, and breakfast stalls. The morning food scene is vibrant. This is also where Holi celebrations are most intense in March.", bestFor: "Peda shopping, Kachori, breakfast" },
    { name: "Vishram Ghat Area", desc: "The sacred ghat where Lord Krishna rested. Lined with Lassi shops, Rabri vendors, sweet stalls, and evening chaat vendors. The spiritual atmosphere makes eating here a unique experience. Best in morning and evening.", bestFor: "Lassi, Rabri, evening chaat, spiritual dining" },
    { name: "Chatta Bazaar", desc: "Traditional covered market with sweet shops, spice vendors, and temple offering shops. Less touristy, more local. Great for buying Peda and sweets at slightly lower prices than the main tourist areas.", bestFor: "Sweet shopping, spices, temple offerings" },
    { name: "Vrindavan Market", desc: "The market streets of Vrindavan (15 km from Mathura) with Lassi shops, sweet vendors, and temple prasad stalls. ISKCON temple area has organized food options. Banke Bihari Temple market is bustling with food vendors.", bestFor: "Vrindavan Lassi, temple prasad, ISKCON food" },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Mathura Locals", desc: "We eat here every day" },
    { icon: Utensils, title: "Food Experts", desc: "Curated holy city stops" },
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
                  Mathura <span className="shimmer-text">Food</span> Tour
                </h1>
                <p className="text-lg text-orange-100/70 mb-8 leading-relaxed">
                  Famous Peda, creamy Rabri, thick Lassi, Kachori Sabzi, and sacred Temple Prasad. Taste Lord Krishna&apos;s holy city through the eyes of locals.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-7 py-3.5 rounded-full font-bold shadow-xl shadow-red-500/20 hover:shadow-red-500/40 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                    <Phone className="w-5 h-5" /> Call: 7668570551
                  </Link>
                  <Link href="https://wa.me/917668570551?text=I want to book a Mathura food tour" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-7 py-3.5 rounded-full font-bold border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500">
                    WhatsApp Booking
                  </Link>
                </div>
              </div>
              <div className="hidden md:block relative h-80">
                <div className="glass-card absolute top-0 right-8 rounded-2xl p-5 w-52 transform rotate-3" style={{ animation: 'float 7s ease-in-out infinite' }}>
                  <div className="text-2xl mb-1">🍬</div>
                  <div className="text-white font-bold">Mathura Peda</div>
                  <div className="text-orange-300 text-sm">100+ year-old recipe</div>
                  <div className="text-white/60 text-xs mt-2">₹300-600/kg</div>
                </div>
                <div className="glass-card absolute top-24 left-0 rounded-2xl p-5 w-52 transform -rotate-2" style={{ animation: 'float 8s ease-in-out infinite 1s' }}>
                  <div className="text-2xl mb-1">🥛</div>
                  <div className="text-white font-bold">Braj Lassi</div>
                  <div className="text-orange-300 text-sm">Krishna&apos;s dairy land</div>
                  <div className="text-white/60 text-xs mt-2">₹30-60/glass</div>
                </div>
                <div className="glass-card absolute bottom-0 right-16 rounded-2xl p-5 w-52 transform rotate-1" style={{ animation: 'float 9s ease-in-out infinite 2s' }}>
                  <div className="text-2xl mb-1">🙏</div>
                  <div className="text-white font-bold">Temple Prasad</div>
                  <div className="text-orange-300 text-sm">Sacred food offering</div>
                  <div className="text-white/60 text-xs mt-2">Spiritual experience</div>
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
              Mathura Food Tour — Sacred Flavours of Krishna&apos;s Birthplace
            </h2>
            <div className="space-y-5 text-stone-600 text-lg leading-relaxed">
              <p>Mathura, the <strong className="text-stone-800">birthplace of Lord Krishna</strong>, is a city where food and devotion are inseparable. The entire city is pure vegetarian — a living expression of the Braj region&apos;s deep connection to Krishna&apos;s pastoral heritage. The dairy traditions here are legendary, producing some of India&apos;s finest milk, curd, and ghee, which form the foundation of Mathura&apos;s distinctive sweet cuisine.</p><p>Our <strong className="text-stone-800">Mathura food tour by car</strong> takes you through the aromatic lanes of Holi Gate for Peda shopping at the century-old Brijwasi Mithai Wala, to Vishram Ghat for creamy Lassi and Rabri, through temple areas for sacred prasad, and across to Vrindavan for its own unique food specialties including ISKCON&apos;s famous sattvic cuisine. Your Triveni Cabs driver knows every sweet shop and temple food stop.</p><p>The <strong className="text-stone-800">best time for a Mathura food tour</strong> is during festivals — especially Holi (February-March) when the entire city erupts in colour and special festival sweets appear, and Janmashtami (August-September) when midnight celebrations bring unique food preparations. But Mathura&apos;s Peda, Rabri, and Lassi are extraordinary year-round, making any day perfect for a culinary pilgrimage.</p>
            </div>
          </div>
        </section>

        {/* Famous Foods - Glassmorphism Cards */}
        <section className="py-16 px-4 bg-orange-50/80">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Famous Foods of Mathura</h2>
              <p className="text-stone-500">Pure vegetarian holy city where dairy traditions and devotion create divine flavours</p>
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
              <p className="text-red-200/70">Follow this route for the ultimate Mathura food crawl (our drivers know every stop)</p>
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
              <p className="text-orange-200/80 text-sm">Full food tour with sedan cab: <strong className="text-white">₹1,200</strong> (local Mathura-Vrindavan) or <strong className="text-white">₹3,500</strong> (from Delhi round trip)</p>
            </div>
          </div>
        </section>

        {/* Best Restaurants - Premium Card Grid */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-10 text-center">Best Restaurants in Mathura</h2>
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
                <h2 className="text-2xl font-bold text-white flex items-center gap-2"><Bookmark className="w-6 h-6" /> Combine Food Tour with Temple Visits</h2>
                <p className="text-red-100 mt-1">Our recommended full-day recipe for the perfect Mathura-Vrindavan experience</p>
              </div>
              <div className="p-6">
                <div className="space-y-2">
                  {["7:00 AM - Kachori Sabzi breakfast near Krishna Janmabhoomi","8:30 AM - Krishna Janmabhoomi Temple darshan","9:30 AM - Peda shopping at Brijwasi, Holi Gate","10:30 AM - Vishram Ghat walk, Lassi & Rabri","11:30 AM - Dwarkadhish Temple visit & prasad","1:00 PM - Thali lunch at a local dhaba","2:30 PM - Drive to Vrindavan (15 km)","3:00 PM - Banke Bihari Temple & ISKCON Temple visits","5:00 PM - Vrindavan Lassi & ISKCON Govinda&apos;s","6:30 PM - Return to Mathura for evening Yamuna Aarti"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-700 text-sm py-1.5 border-b border-stone-100 last:border-0">
                      <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 border border-red-200/50">
                  <p className="text-red-800 text-sm font-medium">Sedan cab for full day (Mathura + Vrindavan): ₹1,200 or from Delhi: ₹3,500 round trip</p>
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
            <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">More Mathura Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: "/same-day-mathura-vrindavan-from-delhi", title: "Mathura Day Trip from Delhi", desc: "Round trip by car" },
                { href: "/same-day-mathura-vrindavan-from-agra", title: "Mathura from Agra", desc: "Quick day trip" },
                { href: "/holi-mathura-vrindavan-cab-service", title: "Holi in Mathura", desc: "Festival transport" },
                { href: "/agra-food-tour", title: "Agra Food Tour", desc: "Petha & Mughlai cuisine" },
                { href: "/varanasi-food-tour", title: "Varanasi Food Tour", desc: "Kachori & Thandai" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Book Your Mathura Food Tour</h2>
            <p className="text-orange-100/80 mb-8 text-lg">Let our drivers take you to the best sweet shops and food spots in Krishna&apos;s holy city. We know every temple and every legendary stall.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-red-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}>
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to book a Mathura food tour" className="inline-flex items-center justify-center gap-2 bg-red-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-red-400/30 hover:bg-red-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">
                WhatsApp Booking <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
