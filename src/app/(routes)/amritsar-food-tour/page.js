import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, Coffee, ShoppingBag, Utensils, Flame, Bookmark, Tag } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Amritsar Food Tour 2026 | Amritsari Kulcha, Lassi & Punjabi Street Food Guide',
  description: 'Amritsar food & culinary tour. Famous Amritsari Kulcha, Lassi, Chole Bhature, Jalebi, Fish Fry. Street food itinerary, best restaurants. By Amritsar locals. Call 7668570551.',
  keywords: 'amritsar food tour, amritsar street food, amritsari kulcha, amritsar lassi, chole bhature amritsar, amritsar fish fry, punjabi food amritsar, amritsar food guide',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/amritsar-food-tour' },
  openGraph: {
    title: 'Amritsar Food Tour 2026 | Punjabi Culinary Guide by Locals',
    description: 'Complete Amritsar food guide. Amritsari Kulcha, Lassi, Chole Bhature, Fish Fry, best restaurants and street food spots.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/amritsar-food-tour',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/sightseeing/Amritsar/Amristar_hero_section.jpg', width: 1200, height: 630, alt: 'Amritsar Food Tour Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amritsar Food Tour 2026 | By Locals',
    description: 'Amritsar culinary guide. Amritsari Kulcha, Lassi, Punjabi street food.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/sightseeing/Amritsar/Amristar_hero_section.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function AmritsarFoodTourPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Amritsar Food Tour", "item": "https://www.trivenicabs.in/amritsar-food-tour" },
    ],
  };

  const faqData = [
    { question: "What food is Amritsar famous for?", answer: "Amritsar is famous for Amritsari Kulcha (stuffed flatbread baked in tandoor), thick Lassi, Chole Bhature, Jalebi (crispy syrup-soaked spirals), Amritsari Fish Fry (crispy battered fish), Sarson Da Saag with Makki Di Roti (winter special), and Langar (free community kitchen at Golden Temple)." },
    { question: "Where can I find the best Kulcha in Amritsar?", answer: "Kesar Da Dhaba (since 1916) and Bharawan Da Dhaba (since 1912) are the two most legendary kulcha spots. Both are near the Golden Temple. Kulcha Land on Lawrence Road is another excellent option. The stuffed aloo-paneer kulcha with chole and imli chutney is the classic combination." },
    { question: "Is the Langar at Golden Temple worth visiting?", answer: "Absolutely! The Golden Temple Langar is the world&apos;s largest free community kitchen, feeding 50,000-100,000 people daily. The simple dal, roti, and kheer are made with devotion. It is a humbling, spiritual food experience that every visitor should try regardless of religion." },
    { question: "Is street food safe to eat in Amritsar?", answer: "Amritsar&apos;s street food stalls are generally very clean and safe — Punjabi food culture emphasizes freshness and generous use of ghee. Stick to busy stalls, and our recommended spots in this guide are all decades-old institutions with impeccable reputations." },
    { question: "Can I combine a food tour with Golden Temple visit?", answer: "Yes! Morning Golden Temple visit and Langar experience, then breakfast at Kesar Da Dhaba, Jallianwala Bagh visit, lunch at Bharawan Da Dhaba, Partition Museum, evening Wagah Border ceremony, and dinner with Amritsari Fish Fry. We plan it all." },
    { question: "What is the best time for an Amritsar food tour?", answer: "Morning (7-9 AM) for Chole Bhature and fresh Kulcha. Lunch (12-2 PM) for thali meals and Lassi. Evening (5-8 PM) for fish fry, chaat, and Jalebi. Winter (November-February) brings Sarson Da Saag with Makki Di Roti — a must-try seasonal special." },
    { question: "Are vegetarian options available in Amritsar?", answer: "Absolutely! Amritsar has outstanding vegetarian food. Kulcha with Chole, Chole Bhature, Lassi, Jalebi, Paneer dishes, Dal Makhani, Sarson Da Saag, and the Golden Temple Langar are all vegetarian. Kesar Da Dhaba is a pure vegetarian restaurant." },
    { question: "How much does an Amritsar food tour cost?", answer: "Street food budget: ₹200-500 per person for a full tour. Restaurant meals: ₹300-600 per person. Our food tour with cab: ₹1,500 (sedan) for half-day covering 5-6 stops. Full day with Wagah Border: ₹2,500. Golden Temple Langar is free." },
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
    { name: "Amritsari Kulcha", desc: "Amritsar&apos;s crown jewel. Stuffed flatbread (aloo, paneer, or mixed) baked in a clay tandoor until golden and crispy. Served with chole (chickpea curry), imli chutney, and raw onion. Kesar Da Dhaba and Bharawan Da Dhaba are the undisputed kings.", price: "₹80-150 per plate", mustTry: true, heat: 1 },
    { name: "Amritsari Lassi", desc: "Thick, creamy, ice-cold lassi served in giant steel glasses topped with a thick layer of malai (cream). Amritsar&apos;s lassi is thicker and richer than anywhere else in Punjab. Ahuja Lassi and Gian Di Lassi near Hall Bazaar are legendary.", price: "₹40-80 per glass", mustTry: true, heat: 0 },
    { name: "Chole Bhature", desc: "Fluffy, puffed fried bread (bhature) with spicy chickpea curry (chole). Amritsar&apos;s version uses extra-large bhature and a tangier, spicier chole masala than Delhi. Best as a hearty breakfast or lunch.", price: "₹60-120 per plate", mustTry: true, heat: 1 },
    { name: "Jalebi", desc: "Crispy, hot jalebi spirals soaked in sugar syrup — Amritsar makes them thicker and crunchier than anywhere else. Best from Gurdas Ram Jalebi Wale in Katra Ahluwalia, a shop that has been frying jalebis for over 100 years.", price: "₹40-80 per plate", mustTry: true, heat: 0 },
    { name: "Amritsari Fish Fry", desc: "Crispy battered and fried fish (usually sole or singhara) marinated in ajwain (carom seeds), red chilli, and besan. Crunchy outside, tender inside. Makhan Fish and Beera Chicken House on Lawrence Road are the top spots.", price: "₹200-400 per plate", mustTry: false, heat: 2 },
    { name: "Sarson Da Saag & Makki Di Roti", desc: "Winter-only Punjabi classic — mustard greens slow-cooked with spices, served with corn flour flatbread and a generous dollop of white butter. Available November to February. Every dhaba serves it during season.", price: "₹100-200 per plate", mustTry: false, heat: 1 },
    { name: "Golden Temple Langar", desc: "The world&apos;s largest free community kitchen. Simple, soul-nourishing dal, roti, and kheer served to 50,000-100,000 people daily by volunteers. Not just food — it&apos;s a spiritual experience of equality and service.", price: "FREE", mustTry: false, heat: 0 },
    { name: "Tandoori Chicken & Butter Chicken", desc: "Amritsar does tandoori chicken with a Punjabi punch — more spice, more char, more flavour. Beera Chicken House and Surjit Food Plaza on Lawrence Road are the go-to spots for non-veg lovers.", price: "₹250-500 per plate", mustTry: false, heat: 2 },
  ];

  const streetFoodItinerary = [
    { time: "6:00 AM", stop: "Golden Temple", food: "Langar & Karah Prasad", desc: "Begin with the spiritual food experience — the Golden Temple Langar. Simple dal, roti, and the divine Karah Prasad (sweet semolina offering). Feed your soul first.", color: "from-orange-500 to-red-500" },
    { time: "8:30 AM", stop: "Kesar Da Dhaba, near Golden Temple", food: "Amritsari Kulcha & Chole", desc: "The legendary Kesar Da Dhaba since 1916. Their stuffed kulcha with chole and imli chutney is what put Amritsar on the food map. Arrive early to beat the crowd.", color: "from-amber-500 to-orange-500" },
    { time: "10:00 AM", stop: "Gurdas Ram Jalebi Wale, Katra Ahluwalia", food: "Hot Jalebi", desc: "Watch thick jalebi spirals being fried in massive kadhais and soaked in syrup. Eat them piping hot — the crunch is unmatched. This shop has been frying for over 100 years.", color: "from-yellow-500 to-amber-500" },
    { time: "11:30 AM", stop: "Hall Bazaar Area", food: "Lassi & Chole Bhature", desc: "Giant steel glasses of thick, creamy Amritsari Lassi. Then walk down to a Chole Bhature stall for the second breakfast that Amritsar demands. This city eats big.", color: "from-red-500 to-pink-500" },
    { time: "1:00 PM", stop: "Bharawan Da Dhaba", food: "Kulcha Thali & Dal Makhani", desc: "The other legendary kulcha institution (since 1912). Their dal makhani is equally famous — slow-cooked overnight with generous butter. Full Punjabi thali experience.", color: "from-orange-600 to-red-600" },
    { time: "4:00 PM", stop: "Lawrence Road", food: "Amritsari Fish Fry", desc: "Head to Beera Chicken House or Makhan Fish for the famous Amritsari Fish Fry — crispy, ajwain-scented battered fish that Amritsar invented. Pair with mint chutney.", color: "from-amber-600 to-yellow-600" },
    { time: "6:30 PM", stop: "Town Hall Area", food: "Kulfi & Evening Snacks", desc: "End with creamy kulfi and evening chaat. If time permits, catch the Wagah Border ceremony first (our driver will time it perfectly) and return for dinner.", color: "from-red-600 to-orange-600" },
  ];

  const restaurants = [
    { name: "Kesar Da Dhaba", cuisine: "Pure Veg Punjabi", budget: "₹200-400", location: "Near Golden Temple", desc: "Since 1916. The most famous kulcha in India. Also legendary dal makhani and paneer dishes. No-frills, pure Punjabi hospitality.", rating: "4.4" },
    { name: "Bharawan Da Dhaba", cuisine: "Pure Veg Punjabi", budget: "₹200-400", location: "Near Golden Temple", desc: "Since 1912. Kesar&apos;s eternal rival. Equally incredible kulcha and dal makhani. Some locals swear by Bharawan over Kesar. Try both and decide.", rating: "4.3" },
    { name: "Beera Chicken House", cuisine: "Non-Veg Punjabi", budget: "₹300-500", location: "Lawrence Road", desc: "The best Amritsari Fish Fry and tandoori chicken. Crunchy, spicy, and perfectly cooked. A Lawrence Road institution for non-veg lovers.", rating: "4.2" },
    { name: "Surjit Food Plaza", cuisine: "Non-Veg / Tandoori", budget: "₹300-600", location: "Lawrence Road", desc: "Famous for tandoori chicken, fish tikka, and butter chicken. Air-conditioned comfort with authentic Amritsari flavours. Popular with families.", rating: "4.1" },
    { name: "Gurdas Ram Jalebi Wale", cuisine: "Sweets / Jalebi", budget: "₹50-100", location: "Katra Ahluwalia", desc: "Over 100 years of jalebi perfection. Thick, crunchy, syrup-soaked spirals that define Amritsar&apos;s sweet tooth. Buy by weight and eat hot.", rating: "4.5" },
    { name: "Brothers Dhaba", cuisine: "Punjabi / Multi-Cuisine", budget: "₹250-500", location: "Near Golden Temple", desc: "Popular tourist-friendly restaurant with excellent Punjabi thalis, butter chicken, and naan. Clean, comfortable, and reliable for all tastes.", rating: "4.2" },
  ];

  const markets = [
    { name: "Hall Bazaar", desc: "Amritsar&apos;s main market street leading to the Golden Temple. Lined with lassi shops, sweet stores, dry fruit vendors, and Punjabi jutti (shoe) shops. The best area for combining food and shopping in one walk.", bestFor: "Lassi, sweets, dry fruits, Punjabi juttis" },
    { name: "Lawrence Road", desc: "The non-veg food capital of Amritsar. Beera Chicken House, Makhan Fish, Surjit Food Plaza, and numerous tandoori joints line this road. Best visited in the evening when the grills fire up.", bestFor: "Fish fry, tandoori chicken, non-veg food" },
    { name: "Katra Ahluwalia", desc: "The old city area near Golden Temple. Home to Gurdas Ram Jalebi Wale and traditional sweet shops. Narrow lanes with authentic Amritsari food heritage. Less touristy, more local.", bestFor: "Jalebi, traditional sweets, old city food" },
    { name: "Town Hall / Company Bagh Area", desc: "Central Amritsar with a mix of modern and traditional food options. Evening chaat stalls, kulfi vendors, and restaurants. More organized and spacious than the old city market areas.", bestFor: "Evening chaat, kulfi, restaurants" },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Amritsar Locals", desc: "We eat here every day" },
    { icon: Utensils, title: "Food Experts", desc: "Curated Punjabi stops" },
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
                  Amritsar <span className="shimmer-text">Food</span> Tour
                </h1>
                <p className="text-lg text-orange-100/70 mb-8 leading-relaxed">
                  Amritsari Kulcha, giant Lassi glasses, Chole Bhature, hot Jalebi, and crispy Fish Fry. Taste Punjab&apos;s food capital through the eyes of locals.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-7 py-3.5 rounded-full font-bold shadow-xl shadow-red-500/20 hover:shadow-red-500/40 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                    <Phone className="w-5 h-5" /> Call: 7668570551
                  </Link>
                  <Link href="https://wa.me/917668570551?text=I want to book an Amritsar food tour" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-7 py-3.5 rounded-full font-bold border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500">
                    WhatsApp Booking
                  </Link>
                </div>
              </div>
              <div className="hidden md:block relative h-80">
                <div className="glass-card absolute top-0 right-8 rounded-2xl p-5 w-52 transform rotate-3" style={{ animation: 'float 7s ease-in-out infinite' }}>
                  <div className="text-2xl mb-1">🍽️</div>
                  <div className="text-white font-bold">Famous Dish</div>
                  <div className="text-orange-300 text-sm">Amritsar specialty</div>
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
              Amritsar Food Tour — Punjab&apos;s Culinary Capital
            </h2>
            <div className="space-y-5 text-stone-600 text-lg leading-relaxed">
              <p>Amritsar is not just home to the Golden Temple — it is the <strong className="text-stone-800">undisputed food capital of Punjab</strong> and arguably the best food city in all of North India. Punjabi cuisine here is authentic, generous, and unapologetically rich — cooked with desi ghee, fresh cream, and love. From the legendary Amritsari Kulcha baked in clay tandoors to steel glasses overflowing with thick lassi, every meal in Amritsar is a celebration.</p>
              <p>Our <strong className="text-stone-800">Amritsar food tour by car</strong> begins with the spiritual Langar at the Golden Temple, followed by a curated food crawl through the city&apos;s most legendary establishments — Kesar Da Dhaba (since 1916), Bharawan Da Dhaba (since 1912), Gurdas Ram&apos;s century-old jalebi shop, and the famous fish fry joints on Lawrence Road. Your Triveni Cabs driver doubles as your local food guide.</p>
              <p>The <strong className="text-stone-800">best time for an Amritsar food tour</strong> is during winter (November to February) when Sarson Da Saag with Makki Di Roti is in season and the weather is perfect for outdoor eating. But Amritsar&apos;s food scene is incredible year-round — this is a city where breakfast alone can take three hours and multiple stops, and every Punjabi grandma has a recipe that will make you weep with joy.</p>
            </div>
          </div>
        </section>

        {/* Famous Foods - Glassmorphism Cards */}
        <section className="py-16 px-4 bg-orange-50/80">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Famous Foods of Amritsar</h2>
              <p className="text-stone-500">A culinary journey through Amritsar</p>
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
              <p className="text-red-200/70">Follow this route for the ultimate Amritsar food crawl (our drivers know every stop)</p>
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
              <p className="text-orange-200/80 text-sm">Full food tour with sedan cab: <strong className="text-white">₹1,500</strong> (local Amritsar) or <strong className="text-white">₹7,500</strong> (from Delhi round trip)</p>
            </div>
          </div>
        </section>

        {/* Best Restaurants - Premium Card Grid */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-10 text-center">Best Restaurants in Amritsar</h2>
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
                <p className="text-red-100 mt-1">Our recommended full-day recipe for the perfect Amritsar experience</p>
              </div>
              <div className="p-6">
                <div className="space-y-2">
                  {["5:30 AM - Golden Temple darshan & morning aarti","7:00 AM - Langar experience at Golden Temple","8:30 AM - Kulcha breakfast at Kesar Da Dhaba","10:00 AM - Jallianwala Bagh memorial visit","11:00 AM - Jalebi at Gurdas Ram & old city walk","12:30 PM - Lassi & Chole Bhature at Hall Bazaar","2:00 PM - Partition Museum visit","4:30 PM - Wagah Border ceremony (drive 30 min)","7:00 PM - Fish Fry dinner on Lawrence Road"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-700 text-sm py-1.5 border-b border-stone-100 last:border-0">
                      <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 border border-red-200/50">
                  <p className="text-red-800 text-sm font-medium">Sedan cab for full day with Wagah Border: ₹2,500 (local) or ₹7,500 (from Delhi round trip)</p>
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
            <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">More Amritsar Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: "/sightseeing/amritsar", title: "Amritsar Sightseeing Tours", desc: "All Amritsar attractions" },
                { href: "/amritsar-in-2-days-itinerary", title: "Amritsar in 2 Days", desc: "Complete itinerary" },
                { href: "/delhi-airport-to-amritsar-taxi", title: "Delhi to Amritsar Taxi", desc: "Airport transfers" },
                { href: "/delhi-food-tour", title: "Delhi Food Tour", desc: "Chandni Chowk & more" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Book Your Amritsar Food Tour</h2>
            <p className="text-orange-100/80 mb-8 text-lg">Let our drivers take you to the best Punjabi food spots. We know every dhaba and every legendary stall in the holy city.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-red-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}>
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to book an Amritsar food tour" className="inline-flex items-center justify-center gap-2 bg-red-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-red-400/30 hover:bg-red-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">
                WhatsApp Booking <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
