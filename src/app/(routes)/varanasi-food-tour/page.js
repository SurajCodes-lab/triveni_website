import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, Coffee, ShoppingBag, Utensils, Flame, Bookmark, Tag } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Varanasi Food Tour 2026 | Kachori Sabzi, Tamatar Chaat & Banarasi Cuisine Guide',
  description: 'Varanasi food & culinary tour. Famous Kachori Sabzi, Tamatar Chaat, Banarasi Paan, Thandai, Malaiyo. Street food itinerary, best restaurants. By Varanasi locals. Call 7668570551.',
  keywords: 'varanasi food tour, varanasi street food, banarasi food, kachori sabzi varanasi, tamatar chaat, banarasi paan, thandai varanasi, malaiyo, varanasi food guide',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/varanasi-food-tour' },
  openGraph: {
    title: 'Varanasi Food Tour 2026 | Banarasi Culinary Guide by Locals',
    description: 'Complete Varanasi food guide. Kachori Sabzi, Tamatar Chaat, Banarasi Paan, Thandai, best restaurants and ghat-side food spots.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/varanasi-food-tour',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/sightseeing/Varanasi/varanasi_hero_section.jpg', width: 1200, height: 630, alt: 'Varanasi Food Tour Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varanasi Food Tour 2026 | By Locals',
    description: 'Varanasi culinary guide. Kachori Sabzi, Tamatar Chaat, Banarasi Paan, Thandai.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/sightseeing/Varanasi/varanasi_hero_section.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function VaranasiFoodTourPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Varanasi Food Tour", "item": "https://www.trivenicabs.in/varanasi-food-tour" },
    ],
  };

  const faqData = [
    { question: "What food is Varanasi famous for?", answer: "Varanasi is famous for Kachori Sabzi (crispy fried bread with potato curry), Tamatar Chaat (spiced tomato chaat unique to Banaras), Banarasi Paan (betel leaf with special fillings), Thandai (spiced cold milk), Malaiyo (winter-only milk foam dessert), Rabri, and Litti Chokha." },
    { question: "What is Malaiyo and when is it available?", answer: "Malaiyo is a magical winter-only dessert made from milk foam collected at dawn, flavoured with saffron and cardamom. It is available only from November to February when the temperature drops enough for the milk to foam. Best found near Godowlia and Lanka." },
    { question: "Where can I find the best Banarasi Paan?", answer: "Keshav Paan Bhandar near Dashashwamedh Ghat and Rajju Paan near Godowlia are legendary. Banarasi Paan uses special ingredients like gulkand (rose petal jam), saffron, cardamom, and silver leaf. Try the meetha (sweet) paan for the authentic experience." },
    { question: "Is street food safe to eat in Varanasi?", answer: "Popular street food stalls with high turnover are generally safe. Stick to busy stalls near the ghats and main bazaars, avoid cut fruits and raw salads, and drink bottled water. Our recommended spots are all well-established, some serving for over 50 years." },
    { question: "Can I combine a food tour with ghat visits?", answer: "Absolutely! Morning Ganga aarti at Dashashwamedh, Kachori Sabzi breakfast, walk along the ghats, Blue Lassi stop at Kachori Gali, afternoon temple visits, evening chaat at Godowlia, and close with Banarasi Paan. We customize every itinerary." },
    { question: "What is the best time for a Varanasi food tour?", answer: "Morning (6-9 AM) for Kachori Sabzi breakfast near the ghats. Afternoon (12-2 PM) for Litti Chokha and thali meals. Evening (4-8 PM) for chaat, Thandai, and Paan. Winter (November-February) is best for Malaiyo and pleasant weather." },
    { question: "Are vegetarian options available in Varanasi?", answer: "Varanasi is predominantly vegetarian! Most street food and restaurants are pure veg. Kachori Sabzi, Tamatar Chaat, Thandai, Malaiyo, Rabri, chaat, and Litti Chokha are all vegetarian. The city has very few non-veg options due to its religious significance." },
    { question: "How much does a Varanasi food tour cost?", answer: "Street food budget: ₹150-350 per person for a full tour. Restaurant meals: ₹200-500 per person. Our food tour with cab: ₹1,200 (sedan) for half-day covering 5-6 stops plus ghat visits. We handle transport between all food spots." },
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
    { name: "Kachori Sabzi", desc: "Varanasi&apos;s quintessential breakfast. Crispy, flaky kachoris served with spicy aloo sabzi (potato curry) and tangy chutney. Every gali (lane) has its own kachori vendor, but the ones near Dashashwamedh Ghat are legendary.", price: "₹20-40 per plate", mustTry: true, heat: 1 },
    { name: "Tamatar Chaat", desc: "Unique to Banaras — a tangy, spicy chaat made with cooked tomatoes, spices, and crispy toppings. Kashi Chaat Bhandar in Godowlia has been serving this since 1950. You won&apos;t find this anywhere else in India.", price: "₹30-50 per plate", mustTry: true, heat: 2 },
    { name: "Banarasi Paan", desc: "The king of paan. Betel leaf stuffed with gulkand (rose petal jam), supari, saffron, cardamom, and silver leaf. A Varanasi tradition that goes back centuries. Meetha paan is the classic choice for first-timers.", price: "₹20-100 per paan", mustTry: true, heat: 0 },
    { name: "Thandai", desc: "Spiced cold milk drink made with almonds, fennel seeds, rose petals, saffron, and cardamom. Available year-round but best during Holi and summer months. Godowlia area has the best Thandai shops in the city.", price: "₹30-80 per glass", mustTry: true, heat: 0 },
    { name: "Malaiyo", desc: "A magical winter-only dessert — whisked milk foam flavoured with saffron, cardamom, and pistachios. Collected at dawn when temperatures drop. Available only November to February. Vanishes by 9 AM each day.", price: "₹30-60 per bowl", mustTry: false, heat: 0 },
    { name: "Blue Lassi", desc: "The famous Blue Lassi Shop in a tiny lane near Manikarnika Ghat serves over 80 flavours of thick, creamy lassi in clay cups. Pomegranate, banana, mango, and chocolate are popular. A Varanasi institution since the 1920s.", price: "₹40-80 per glass", mustTry: false, heat: 0 },
    { name: "Litti Chokha", desc: "Roasted wheat balls (litti) stuffed with sattu (roasted gram flour), served with smoky mashed vegetables (chokha). A Bihari-Banarasi staple. Best at roadside stalls that cook on coal fires.", price: "₹40-80 per plate", mustTry: false, heat: 1 },
    { name: "Rabri & Jalebi", desc: "Thick, creamy rabri (reduced sweetened milk) served with hot, crispy jalebis. A classic Banarasi dessert combo. Best in the old city lanes near Vishwanath Temple. Morning time gets the freshest batches.", price: "₹40-80 per plate", mustTry: false, heat: 0 },
  ];

  const streetFoodItinerary = [
    { time: "5:30 AM", stop: "Dashashwamedh Ghat", food: "Morning Ganga Aarti & Chai", desc: "Start before dawn with the serene morning aarti at the main ghat. Sip masala chai from clay cups while watching the sun rise over the Ganga.", color: "from-orange-500 to-red-500" },
    { time: "7:00 AM", stop: "Kachori Gali, near Dashashwamedh", food: "Kachori Sabzi & Jalebi", desc: "Varanasi&apos;s iconic breakfast. Crispy kachoris with spicy potato curry, followed by hot jalebis. These shops have served the same recipes for generations.", color: "from-amber-500 to-orange-500" },
    { time: "9:00 AM", stop: "Blue Lassi Shop, Kachori Gali", food: "Famous Lassi (80+ flavours)", desc: "Find the tiny, legendary Blue Lassi Shop tucked in a narrow lane. Choose from 80+ flavours served in clay kulhads. The owner makes each lassi fresh.", color: "from-yellow-500 to-amber-500" },
    { time: "11:00 AM", stop: "Kashi Chaat Bhandar, Godowlia", food: "Tamatar Chaat & Tikki", desc: "Try the unique Banarasi Tamatar Chaat — a dish you literally cannot find anywhere else in India. Also try their aloo tikki and dahi vada.", color: "from-red-500 to-pink-500" },
    { time: "1:00 PM", stop: "Lanka Area", food: "Litti Chokha & Thali", desc: "Hearty lunch of coal-roasted Litti Chokha at a traditional stall, or a full Banarasi thali at a local restaurant. The university area has great affordable options.", color: "from-orange-600 to-red-600" },
    { time: "4:00 PM", stop: "Godowlia Chowk", food: "Thandai & Sweets", desc: "Cool down with a glass of Banarasi Thandai — the spiced milk drink that defines this city. Browse sweet shops for rabri, malpua, and seasonal specialties.", color: "from-amber-600 to-yellow-600" },
    { time: "6:30 PM", stop: "Near Dashashwamedh Ghat", food: "Banarasi Paan & Evening Walk", desc: "End with the quintessential Banarasi Paan from a legendary paan shop. Then watch the grand evening Ganga Aarti — the perfect ending to a food tour.", color: "from-red-600 to-orange-600" },
  ];

  const restaurants = [
    { name: "Kashi Chaat Bhandar", cuisine: "Chaat / Street Food", budget: "₹100-200", location: "Godowlia", desc: "The birthplace of Tamatar Chaat. Serving since 1950. Also famous for dahi vada, aloo tikki, and seasonal chaat items. Pure vegetarian.", rating: "4.4" },
    { name: "Blue Lassi Shop", cuisine: "Lassi / Dessert", budget: "₹40-100", location: "Kachori Gali", desc: "Over 80 flavours of thick, fresh lassi in clay cups. Tiny shop, huge reputation. Since the 1920s. Find it in the narrow lanes near Manikarnika.", rating: "4.5" },
    { name: "Deena Chaat Bhandar", cuisine: "Chaat / Snacks", budget: "₹80-150", location: "Luxa Road", desc: "Famous for Tamatar Chaat and Palak Chaat. Local favourite with loyal following. No-frills seating but outstanding flavours.", rating: "4.3" },
    { name: "Kashi Chat Centre", cuisine: "Pure Veg / Chaat", budget: "₹100-200", location: "Near Vishwanath Temple", desc: "Popular with both locals and pilgrims. Wide variety of chaat, samosas, and Banarasi specialties. Clean and well-organized.", rating: "4.2" },
    { name: "Baati Chokha Restaurant", cuisine: "Banarasi / Bihari", budget: "₹200-400", location: "Near Assi Ghat", desc: "Specializes in Litti Chokha and Banarasi thali. Traditional ambiance with clay cooking. Popular with tourists wanting an authentic sit-down meal.", rating: "4.3" },
    { name: "Brown Bread Bakery", cuisine: "Cafe / Bakery", budget: "₹200-400", location: "Near Assi Ghat", desc: "Popular cafe with excellent baked goods, continental options, and ghat views. Run as a social enterprise. Great for breakfast or an afternoon break.", rating: "4.4" },
  ];

  const markets = [
    { name: "Dashashwamedh Ghat Area", desc: "The heart of Varanasi. Kachori Sabzi stalls, chai vendors, sweet shops, and paan sellers line the lanes leading to the main ghat. Best visited in the early morning for breakfast or evening for aarti and snacks.", bestFor: "Kachori Sabzi, chai, paan, evening snacks" },
    { name: "Godowlia Chowk", desc: "The central crossroads of old Varanasi. Thandai shops, Kashi Chaat Bhandar, sweet stores, and the famous Tamatar Chaat vendors are all here. The most food-dense area in the city.", bestFor: "Tamatar Chaat, Thandai, sweets, chaat" },
    { name: "Vishwanath Gali", desc: "The lane leading to the Kashi Vishwanath Temple. Packed with sweet shops, prasad vendors, and traditional Banarasi food stalls. Try fresh rabri and malpua between temple visits.", bestFor: "Rabri, temple prasad, traditional sweets" },
    { name: "Assi Ghat Area", desc: "The bohemian quarter of Varanasi. Cafes, bakeries, and food stalls catering to students and long-stay travellers. More relaxed vibe with international food options alongside Banarasi classics.", bestFor: "Cafes, Litti Chokha, bakery items" },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Varanasi Locals", desc: "We eat here every day" },
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
                  Varanasi <span className="shimmer-text">Food</span> Tour
                </h1>
                <p className="text-lg text-orange-100/70 mb-8 leading-relaxed">
                  Kachori Sabzi, Tamatar Chaat, Banarasi Paan, Thandai, and the magical winter Malaiyo. Taste the holy city through the eyes of locals who have eaten here all their lives.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-7 py-3.5 rounded-full font-bold shadow-xl shadow-red-500/20 hover:shadow-red-500/40 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                    <Phone className="w-5 h-5" /> Call: 7668570551
                  </Link>
                  <Link href="https://wa.me/917668570551?text=I want to book a Varanasi food tour" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-7 py-3.5 rounded-full font-bold border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500">
                    WhatsApp Booking
                  </Link>
                </div>
              </div>
              <div className="hidden md:block relative h-80">
                <div className="glass-card absolute top-0 right-8 rounded-2xl p-5 w-52 transform rotate-3" style={{ animation: 'float 7s ease-in-out infinite' }}>
                  <div className="text-2xl mb-1">🍵</div>
                  <div className="text-white font-bold">Banarasi Thandai</div>
                  <div className="text-orange-300 text-sm">Spiced cold milk magic</div>
                  <div className="text-white/60 text-xs mt-2">₹30-80/glass</div>
                </div>
                <div className="glass-card absolute top-24 left-0 rounded-2xl p-5 w-52 transform -rotate-2" style={{ animation: 'float 8s ease-in-out infinite 1s' }}>
                  <div className="text-2xl mb-1">🫓</div>
                  <div className="text-white font-bold">Kachori Sabzi</div>
                  <div className="text-orange-300 text-sm">Iconic ghat-side breakfast</div>
                  <div className="text-white/60 text-xs mt-2">₹20-40/plate</div>
                </div>
                <div className="glass-card absolute bottom-0 right-16 rounded-2xl p-5 w-52 transform rotate-1" style={{ animation: 'float 9s ease-in-out infinite 2s' }}>
                  <div className="text-2xl mb-1">🌿</div>
                  <div className="text-white font-bold">Banarasi Paan</div>
                  <div className="text-orange-300 text-sm">Centuries-old tradition</div>
                  <div className="text-white/60 text-xs mt-2">₹20-100/paan</div>
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
              Varanasi Food Tour — Sacred Flavours of the Oldest Living City
            </h2>
            <div className="space-y-5 text-stone-600 text-lg leading-relaxed">
              <p>Varanasi, the spiritual capital of India, is equally a <strong className="text-stone-800">food capital of the Gangetic plains</strong>. Banaras (as locals call it) has a food culture as ancient as its ghats — where every lane hides a generations-old recipe and every morning starts with the sound of kachoris sizzling in hot oil. The city&apos;s predominantly vegetarian cuisine is deeply tied to its religious significance, creating a unique culinary identity found nowhere else.</p>
              <p>Our <strong className="text-stone-800">Varanasi food tour by car</strong> connects you with the city&apos;s best-kept culinary secrets — from the legendary Kachori Gali near Dashashwamedh Ghat to the Tamatar Chaat at Kashi Chaat Bhandar, from the 80+ flavour Blue Lassi Shop hidden in a narrow lane to the aromatic Banarasi Paan shops that have served the same recipes for over a century. Your Triveni Cabs driver knows every shortcut and secret stop.</p>
              <p>The <strong className="text-stone-800">best time for a Varanasi food tour</strong> is during winter (November to February) when the exclusive Malaiyo — a saffron-infused milk foam dessert that vanishes by 9 AM — makes its appearance. But Varanasi&apos;s food magic is year-round: Thandai in summer, special sweets during Holi and Diwali, and the ever-present ghat-side chai that tastes different from anywhere else on earth.</p>
            </div>
          </div>
        </section>

        {/* Famous Foods - Glassmorphism Cards */}
        <section className="py-16 px-4 bg-orange-50/80">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Famous Foods of Varanasi</h2>
              <p className="text-stone-500">Ancient recipes from the holy city where food is a form of devotion</p>
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
              <p className="text-red-200/70">Follow this route for the ultimate Varanasi food crawl (our drivers know every stop)</p>
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
              <p className="text-orange-200/80 text-sm">Full food tour with sedan cab: <strong className="text-white">₹1,200</strong> (local Varanasi) or <strong className="text-white">₹8,500</strong> (from Delhi round trip)</p>
            </div>
          </div>
        </section>

        {/* Best Restaurants - Premium Card Grid */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-10 text-center">Best Restaurants in Varanasi</h2>
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
                <h2 className="text-2xl font-bold text-white flex items-center gap-2"><Bookmark className="w-6 h-6" /> Combine Food Tour with Ghat Sightseeing</h2>
                <p className="text-red-100 mt-1">Our recommended full-day recipe for the perfect Varanasi experience</p>
              </div>
              <div className="p-6">
                <div className="space-y-2">
                  {[
                    "5:30 AM - Morning Ganga Aarti at Dashashwamedh Ghat",
                    "7:00 AM - Kachori Sabzi breakfast near the ghat",
                    "8:30 AM - Boat ride on the Ganga (sunrise views)",
                    "10:00 AM - Blue Lassi & walk through old city lanes",
                    "11:30 AM - Kashi Vishwanath Temple visit",
                    "1:00 PM - Tamatar Chaat at Kashi Chaat Bhandar",
                    "3:00 PM - Sarnath excursion (Buddhist site)",
                    "5:00 PM - Thandai & Banarasi Paan at Godowlia",
                    "7:00 PM - Grand evening Ganga Aarti",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-700 text-sm py-1.5 border-b border-stone-100 last:border-0">
                      <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 border border-red-200/50">
                  <p className="text-red-800 text-sm font-medium">Sedan cab for this full day: ₹1,200 (local Varanasi) or ₹8,500 (from Delhi round trip)</p>
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
            <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">More Varanasi Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: "/sightseeing/varanasi", title: "Varanasi Sightseeing Tours", desc: "All Varanasi attractions" },
                { href: "/varanasi-in-2-days-itinerary", title: "Varanasi in 2 Days", desc: "Complete itinerary" },
                { href: "/varanasi-in-3-days-itinerary", title: "Varanasi in 3 Days", desc: "Extended exploration" },
                { href: "/lucknow-food-tour", title: "Lucknow Food Tour", desc: "Tunday Kebab & Biryani" },
                { href: "/haridwar-food-tour", title: "Haridwar Food Tour", desc: "Pure veg holy city food" },
                { href: "/mathura-food-tour", title: "Mathura Food Tour", desc: "Famous Peda & Lassi" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Book Your Varanasi Food Tour</h2>
            <p className="text-orange-100/80 mb-8 text-lg">Let our drivers take you to the best food spots by the Ganga. We know every ghat and every legendary stall.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-red-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}>
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to book a Varanasi food tour" className="inline-flex items-center justify-center gap-2 bg-red-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-red-400/30 hover:bg-red-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">
                WhatsApp Booking <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
