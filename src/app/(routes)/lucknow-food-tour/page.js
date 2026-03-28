import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, Coffee, ShoppingBag, Utensils, Flame, Bookmark, Tag } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Lucknow Food Tour 2026 | Tunday Kebab, Biryani & Awadhi Cuisine Guide',
  description: 'Lucknow food & culinary tour. Famous Tunday Kebab, Lucknowi Biryani, Galawati Kebab, Basket Chaat, Makkhan Malai. Street food itinerary, best restaurants. By Lucknow locals. Call 7668570551.',
  keywords: 'lucknow food tour, lucknow street food, tunday kebab, lucknowi biryani, galawati kebab, basket chaat, awadhi cuisine, lucknow food guide, chowk lucknow food',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/lucknow-food-tour' },
  openGraph: {
    title: 'Lucknow Food Tour 2026 | Awadhi Culinary Guide by Locals',
    description: 'Complete Lucknow food guide. Tunday Kebab, Biryani, Galawati Kebab, Basket Chaat, best restaurants and street food spots.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/lucknow-food-tour',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/sightseeing/Lucknow/Lucknow_hero_section.jpg', width: 1200, height: 630, alt: 'Lucknow Food Tour Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucknow Food Tour 2026 | By Locals',
    description: 'Lucknow culinary guide. Tunday Kebab, Biryani, Awadhi restaurants.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/sightseeing/Lucknow/Lucknow_hero_section.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function LucknowFoodTourPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Lucknow Food Tour", "item": "https://www.trivenicabs.in/lucknow-food-tour" },
    ],
  };

  const faqData = [
    { question: "What food is Lucknow famous for?", answer: "Lucknow is the kebab capital of India, famous for Tunday Kebab (melt-in-your-mouth minced meat), Galawati Kebab, Lucknowi Biryani (more fragrant and lighter than Hyderabadi), Basket Chaat, Makkhan Malai (winter dessert), Sheermal (saffron bread), and Nihari." },
    { question: "Where can I find the best Tunday Kebab?", answer: "The original Tunday Kababi in Chowk (Old Lucknow) has been serving since 1905. The Aminabad branch is also authentic. Beware of fake Tunday shops — the original has a distinct smoky aroma and the kebabs literally dissolve on your tongue. Both beef and buffalo versions are available." },
    { question: "Is street food safe to eat in Lucknow?", answer: "Popular street food stalls in Chowk, Aminabad, and Hazratganj with high turnover are generally safe. Stick to busy stalls serving freshly cooked food. Our recommended spots are all well-established — many serving for 50-100+ years with loyal local followings." },
    { question: "Can I combine a food tour with Lucknow sightseeing?", answer: "Absolutely! Morning Bara Imambara visit, then Chowk food tour, Rumi Darwaza photo stop, lunch at Idris Biryani, British Residency visit, Hazratganj shopping, and evening Basket Chaat. Our drivers create the perfect food-heritage itinerary." },
    { question: "What is the best time for a Lucknow food tour?", answer: "Morning (8-10 AM) for Nihari and breakfast kebabs. Lunch (12-2 PM) for Biryani at Idris or Wahid. Evening (5-9 PM) for Chowk food walk, Basket Chaat, and kulfi. Winter (November-February) is best for Makkhan Malai and pleasant weather." },
    { question: "Are vegetarian options available in Lucknow?", answer: "Yes! Despite being a kebab city, Lucknow has excellent vegetarian food. Basket Chaat, Makkhan Malai, Sheermal bread, Royal Cafe (veg Awadhi), Prakash Kulfi, and many veg restaurants in Hazratganj. Lucknow&apos;s chaat scene is entirely vegetarian." },
    { question: "How much does a Lucknow food tour cost?", answer: "Street food budget: ₹200-500 per person for a full tour. Restaurant meals: ₹300-700 per person. Our food tour with cab: ₹1,500 (sedan) for half-day covering 5-6 stops. Full day with sightseeing: ₹2,000. We handle all transport between food spots." },
    { question: "What is Makkhan Malai?", answer: "Makkhan Malai (also called Nimish or Malaiyo) is a winter-only Lucknowi dessert. Light, airy milk foam flavoured with saffron, cardamom, and pistachios. Available only November to February, sold by roadside vendors in the morning. It literally melts on your tongue." },
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
    { name: "Tunday Kebab", desc: "Lucknow&apos;s most legendary dish. Melt-in-your-mouth minced meat kebabs made with 160 spices — a recipe perfected since 1905 by Haji Murad Ali (who had one hand, hence &apos;Tunday&apos;). The original Chowk shop is a pilgrimage for food lovers.", price: "₹100-200 per plate", mustTry: true, heat: 2 },
    { name: "Lucknowi Biryani", desc: "Unlike Hyderabadi biryani, Lucknowi biryani uses the &apos;pukki&apos; method — rice and meat are cooked separately then layered and slow-steamed. Lighter, more fragrant, and subtly spiced. Idris Biryani in Chowk serves the definitive version.", price: "₹150-350 per plate", mustTry: true, heat: 1 },
    { name: "Galawati Kebab", desc: "Softer than Tunday Kebab — so tender it literally melts (galawat means &apos;melt in the mouth&apos;). Created for a toothless Nawab of Lucknow. Made with raw papaya as tenderizer and over 100 spices. Served on roomali roti.", price: "₹150-300 per plate", mustTry: true, heat: 1 },
    { name: "Basket Chaat", desc: "Lucknow&apos;s unique chaat served in an edible fried potato basket. Filled with boiled potatoes, chickpeas, chutneys, yogurt, pomegranate, and crispy sev. Royal Cafe in Hazratganj is credited with inventing this iconic dish.", price: "₹50-100 per plate", mustTry: true, heat: 1 },
    { name: "Makkhan Malai", desc: "A winter-only miracle. Airy milk foam whisked at dawn, flavoured with saffron and cardamom, topped with pistachios. Available November to February only, sold by morning street vendors. Disappears by 9 AM each day.", price: "₹30-60 per bowl", mustTry: false, heat: 0 },
    { name: "Sheermal & Nihari", desc: "Sheermal is saffron-laced baked bread, soft and slightly sweet. Paired with Nihari — overnight slow-cooked mutton stew. Traditional Lucknow Sunday breakfast. Best at Raheem&apos;s in Chowk, serving since 1890.", price: "₹150-300 per plate", mustTry: false, heat: 1 },
    { name: "Prakash Kulfi", desc: "Lucknow&apos;s most famous kulfi (Indian ice cream). Thick, dense, and loaded with dry fruits. The Aminabad shop has been making kulfi the traditional way — in metal moulds set in ice and salt — since 1890.", price: "₹40-80 per piece", mustTry: false, heat: 0 },
    { name: "Tokri Chaat & Golgappe", desc: "Lucknow&apos;s chaat scene is distinct — tangier and more refined than Delhi chaat. Try tikki chaat, dahi vada, and golgappe with imli (tamarind) and jeera (cumin) water. Chowk and Aminabad have the best vendors.", price: "₹30-70 per plate", mustTry: false, heat: 2 },
  ];

  const streetFoodItinerary = [
    { time: "8:00 AM", stop: "Raheem&apos;s, Chowk", food: "Nihari & Sheermal Breakfast", desc: "Start with the traditional Lucknow breakfast — slow-cooked Nihari with saffron Sheermal bread at Raheem&apos;s, a legendary establishment serving since 1890.", color: "from-orange-500 to-red-500" },
    { time: "9:30 AM", stop: "Tunday Kababi, Chowk", food: "Tunday Kebab & Roomali Roti", desc: "The original Tunday Kababi — a Lucknow institution since 1905. Watch the kebabs being made in the open kitchen. The queue is worth every minute.", color: "from-amber-500 to-orange-500" },
    { time: "11:00 AM", stop: "Chowk Market Walk", food: "Makkhan Malai & Sweets", desc: "Walk through the bustling Chowk area. In winter, try Makkhan Malai from morning vendors. Year-round, sample Lucknowi sweets and namkeen from generations-old shops.", color: "from-yellow-500 to-amber-500" },
    { time: "12:30 PM", stop: "Idris Biryani, Chowk", food: "Lucknowi Biryani", desc: "The definitive Lucknowi biryani experience. Idris has perfected the pukki biryani method where rice and meat are cooked separately then layered. The aroma alone is worth the visit.", color: "from-red-500 to-pink-500" },
    { time: "3:00 PM", stop: "Aminabad Market", food: "Prakash Kulfi & Chaat", desc: "Cool down with Prakash&apos;s legendary kulfi — made the traditional way since 1890. Then explore Aminabad&apos;s chaat stalls for tikki and golgappe.", color: "from-orange-600 to-red-600" },
    { time: "5:00 PM", stop: "Royal Cafe, Hazratganj", food: "Basket Chaat", desc: "Lucknow&apos;s iconic Basket Chaat at the restaurant that invented it. An edible potato basket filled with chaat magic. Also try their other Awadhi snacks.", color: "from-amber-600 to-yellow-600" },
    { time: "7:00 PM", stop: "Hazratganj Evening Walk", food: "Kulfi Faluda & Pan", desc: "End with Kulfi Faluda from a Hazratganj vendor and a refined Lucknowi Paan. The evening atmosphere on this colonial-era boulevard is magical.", color: "from-red-600 to-orange-600" },
  ];

  const restaurants = [
    { name: "Tunday Kababi", cuisine: "Kebabs / Mughlai", budget: "₹200-400", location: "Chowk (Old Lucknow)", desc: "The original since 1905. Tunday Kebab and Galawati Kebab that defined Lucknow&apos;s food identity. Small, bustling, and utterly legendary.", rating: "4.3" },
    { name: "Idris Biryani", cuisine: "Biryani / Mughlai", budget: "₹200-400", location: "Chowk", desc: "The best Lucknowi biryani in the city. Fragrant, subtle, and perfectly layered. Their kebabs are also excellent. No-frills setting, extraordinary food.", rating: "4.4" },
    { name: "Raheem&apos;s", cuisine: "Mughlai / Awadhi", budget: "₹200-500", location: "Chowk", desc: "Since 1890. Famous for Nihari, Korma, and Sheermal. The oldest surviving restaurant in Lucknow&apos;s Chowk area. Heritage dining at its finest.", rating: "4.2" },
    { name: "Royal Cafe", cuisine: "Chaat / Snacks", budget: "₹100-250", location: "Hazratganj", desc: "Inventors of Basket Chaat. Also serves excellent Awadhi snacks, samosas, and shakes. Clean, comfortable, and always busy. Hazratganj landmark.", rating: "4.3" },
    { name: "Prakash Kulfi", cuisine: "Dessert / Kulfi", budget: "₹50-100", location: "Aminabad", desc: "Lucknow&apos;s kulfi legend since 1890. Traditional metal-mould kulfi with dry fruits. Also try their Kulfi Faluda. Small shop, massive reputation.", rating: "4.5" },
    { name: "Dastarkhwan", cuisine: "Mughlai / Awadhi", budget: "₹300-600", location: "Multiple Locations", desc: "Modern Awadhi dining chain with excellent kebabs, biryani, and korma. Air-conditioned comfort with traditional flavours. Great for families.", rating: "4.1" },
  ];

  const markets = [
    { name: "Chowk (Old Lucknow)", desc: "The beating heart of Lucknow&apos;s food culture. Narrow lanes packed with kebab shops, biryani stalls, sweet vendors, and spice merchants. Tunday Kababi, Idris, and Raheem&apos;s are all here. Best explored on foot with a driver waiting nearby.", bestFor: "Kebabs, biryani, Nihari, traditional sweets" },
    { name: "Aminabad", desc: "Lucknow&apos;s bustling shopping and food market. Home to Prakash Kulfi, excellent chaat vendors, and the second Tunday Kababi branch. Mix of street food and established shops. Great for an afternoon food walk.", bestFor: "Kulfi, chaat, kebabs, shopping" },
    { name: "Hazratganj", desc: "Lucknow&apos;s colonial-era boulevard. Royal Cafe for Basket Chaat, modern restaurants, bakeries, and evening food stalls. More upscale than Chowk but equally food-rich. The evening promenade is a Lucknow tradition.", bestFor: "Basket Chaat, cafes, evening food walk" },
    { name: "Nakhas Market Area", desc: "Traditional market near Chowk with excellent street food stalls. Less touristy, more local flavour. Great for authentic Lucknowi breakfast spots and afternoon snacks. Our drivers know the hidden gems here.", bestFor: "Local breakfast, street snacks, authentic food" },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Lucknow Locals", desc: "We eat here every day" },
    { icon: Utensils, title: "Food Experts", desc: "Curated Nawabi stops" },
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
                  Lucknow <span className="shimmer-text">Food</span> Tour
                </h1>
                <p className="text-lg text-orange-100/70 mb-8 leading-relaxed">
                  Tunday Kebab, Lucknowi Biryani, Galawati Kebab, Basket Chaat, and winter Makkhan Malai. Taste the Nawabi city through the eyes of locals who have eaten here all their lives.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-7 py-3.5 rounded-full font-bold shadow-xl shadow-red-500/20 hover:shadow-red-500/40 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                    <Phone className="w-5 h-5" /> Call: 7668570551
                  </Link>
                  <Link href="https://wa.me/917668570551?text=I want to book a Lucknow food tour" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-7 py-3.5 rounded-full font-bold border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500">
                    WhatsApp Booking
                  </Link>
                </div>
              </div>
              <div className="hidden md:block relative h-80">
                <div className="glass-card absolute top-0 right-8 rounded-2xl p-5 w-52 transform rotate-3" style={{ animation: 'float 7s ease-in-out infinite' }}>
                  <div className="text-2xl mb-1">🍽️</div>
                  <div className="text-white font-bold">Famous Dish</div>
                  <div className="text-orange-300 text-sm">Lucknow specialty</div>
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
              Lucknow Food Tour — The Kebab Capital of India
            </h2>
            <div className="space-y-5 text-stone-600 text-lg leading-relaxed">
              <p>Lucknow is universally recognized as the <strong className="text-stone-800">kebab capital of India</strong> and the cradle of Awadhi cuisine — a culinary tradition refined over centuries in the royal courts of the Nawabs. From the legendary Tunday Kebab (created with 160 spices for a toothless Nawab) to the delicate Galawati Kebab that literally dissolves on your tongue, Lucknow&apos;s food heritage is unmatched in sophistication and flavour.</p>
              <p>Our <strong className="text-stone-800">Lucknow food tour by car</strong> takes you deep into the narrow lanes of Chowk — the old city&apos;s culinary epicenter — where Tunday Kababi has been serving since 1905, Raheem&apos;s has been cooking Nihari since 1890, and Idris Biryani perfects the Lucknowi pukki method daily. From there, we drive to Aminabad for Prakash Kulfi and chaat, then to Hazratganj for the famous Basket Chaat at Royal Cafe.</p>
              <p>The <strong className="text-stone-800">best time for a Lucknow food tour</strong> is during winter (November to February) when the magical Makkhan Malai — whisked milk foam flavoured with saffron — appears on morning street carts. But Lucknow&apos;s food is extraordinary year-round. Whether you crave smoky kebabs, fragrant biryani, or refined vegetarian chaat, the City of Nawabs delivers an unforgettable culinary experience.</p>
            </div>
          </div>
        </section>

        {/* Famous Foods - Glassmorphism Cards */}
        <section className="py-16 px-4 bg-orange-50/80">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Famous Foods of Lucknow</h2>
              <p className="text-stone-500">A culinary journey through Lucknow</p>
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
              <p className="text-red-200/70">Follow this route for the ultimate Lucknow food crawl (our drivers know every stop)</p>
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
              <p className="text-orange-200/80 text-sm">Full food tour with sedan cab: <strong className="text-white">₹1,500</strong> (local Lucknow) or <strong className="text-white">₹7,000</strong> (from Delhi round trip)</p>
            </div>
          </div>
        </section>

        {/* Best Restaurants - Premium Card Grid */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-10 text-center">Best Restaurants in Lucknow</h2>
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
                <p className="text-red-100 mt-1">Our recommended full-day recipe for the perfect Lucknow experience</p>
              </div>
              <div className="p-6">
                <div className="space-y-2">
                  {["8:00 AM - Nihari breakfast at Raheem&apos;s, Chowk","9:30 AM - Bara Imambara & Bhool Bhulaiya visit","11:00 AM - Tunday Kebab at the original Chowk shop","12:00 PM - Rumi Darwaza & Chhota Imambara","1:00 PM - Biryani lunch at Idris, Chowk","2:30 PM - British Residency heritage visit","4:00 PM - Prakash Kulfi at Aminabad","5:30 PM - Basket Chaat at Royal Cafe, Hazratganj","7:00 PM - Evening stroll & Kulfi Faluda"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-700 text-sm py-1.5 border-b border-stone-100 last:border-0">
                      <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 border border-red-200/50">
                  <p className="text-red-800 text-sm font-medium">Sedan cab for this full day: ₹1,500 (local Lucknow) or ₹7,000 (from Delhi round trip)</p>
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
            <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">More Lucknow Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: "/sightseeing/lucknow", title: "Lucknow Sightseeing Tours", desc: "All Lucknow attractions" },
                { href: "/lucknow-in-2-days-itinerary", title: "Lucknow in 2 Days", desc: "Complete itinerary" },
                { href: "/varanasi-food-tour", title: "Varanasi Food Tour", desc: "Kachori Sabzi & Thandai" },
                { href: "/delhi-food-tour", title: "Delhi Food Tour", desc: "Chandni Chowk & more" },
                { href: "/agra-food-tour", title: "Agra Food Tour", desc: "Petha & Mughlai cuisine" },
                { href: "/amritsar-food-tour", title: "Amritsar Food Tour", desc: "Kulcha & Lassi paradise" }
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Book Your Lucknow Food Tour</h2>
            <p className="text-orange-100/80 mb-8 text-lg">Let our drivers take you to the best kebab shops and food spots. We know every lane in Chowk and every legendary stall.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-red-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}>
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to book a Lucknow food tour" className="inline-flex items-center justify-center gap-2 bg-red-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-red-400/30 hover:bg-red-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">
                WhatsApp Booking <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
