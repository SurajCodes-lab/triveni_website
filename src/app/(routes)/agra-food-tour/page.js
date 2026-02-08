import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, Coffee, ShoppingBag, Utensils, Flame, Bookmark, Tag } from '@/components/ui/icons';

export const metadata = {
  title: 'Agra Food Tour 2026 | Petha, Mughlai & Street Food Guide',
  description: 'Agra food & culinary tour. Famous Petha, Dalmoth, Bedai-Jalebi, Mughlai cuisine. Street food itinerary, best restaurants. By Agra locals. Call 7668570551.',
  keywords: 'agra food tour, agra street food, agra famous food, petha agra, agra food guide, mughlai food agra, best restaurants agra',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/agra-food-tour' },
  openGraph: {
    title: 'Agra Food Tour 2026 | Culinary Guide by Locals',
    description: 'Complete Agra food guide. Petha, Dalmoth, Mughlai cuisine, street food spots, best restaurants.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/agra-food-tour',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/taj-mahal-hero.jpg', width: 1200, height: 630, alt: 'Agra Food Tour Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agra Food Tour 2026 | By Locals',
    description: 'Agra culinary guide. Petha, street food, Mughlai restaurants.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/taj-mahal-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function AgraFoodTourPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Agra Food Tour", "item": "https://www.trivenicabs.in/agra-food-tour" },
    ],
  };

  const faqData = [
    { question: "What food is Agra famous for?", answer: "Agra is famous for Petha (sweet made from ash gourd, available in 30+ varieties), Dalmoth (spicy crunchy lentil mix), Bedai-Jalebi (traditional breakfast), Mughlai cuisine (biryani, kebabs, korma), and Parantha. Agra's culinary heritage dates back to the Mughal era." },
    { question: "Where can I buy the best Petha in Agra?", answer: "Panchhi Petha (Noori Gate, since 1950) is the most famous and trusted brand. Other good options: Bhagat Halwai Petha, Deviram Petha (Jama Masjid area), and Petha from Sadar Bazaar shops. Avoid unmarked shops near Taj Mahal as quality varies." },
    { question: "Is street food safe to eat in Agra?", answer: "Popular street food stalls with high turnover are generally safe. Stick to busy stalls (freshly cooked food), avoid raw salads and cut fruits, and drink bottled water. Our recommended spots in this guide are all well-established and popular with locals." },
    { question: "Can I combine food tour with sightseeing?", answer: "Absolutely! We recommend: Morning Taj Mahal visit, then Bedai-Jalebi breakfast near Jama Masjid, followed by Agra Fort, lunch at a Mughlai restaurant, Baby Taj visit, Petha shopping, and sunset snacks at Mehtab Bagh. We can customize any itinerary." },
    { question: "What is the best time for an Agra food tour?", answer: "Morning (7-9 AM) for street breakfast (Bedai-Jalebi, Paratha). Lunch (12-2 PM) for Mughlai restaurants. Evening (5-8 PM) for chaat, snacks, and market food. Sadar Bazaar is best in the evening. Most food stalls are open year-round." },
    { question: "Are vegetarian options available?", answer: "Yes! Agra has excellent vegetarian food. Petha and Dalmoth are vegetarian. Bedai is vegetarian. Many Mughlai dishes have vegetarian versions (paneer, dal). Pure veg restaurants: Shankara Vegis, Dasaprakash (South Indian), and many thali places." },
    { question: "How much does a food tour cost?", answer: "Street food budget: ₹200-400 per person for a full tour. Restaurant meals: ₹300-800 per person depending on the restaurant. Our food tour with cab: ₹1,500 (sedan) for half-day local tour covering 5-6 stops. We handle transport between food spots." },
    { question: "What markets should I visit for food?", answer: "Sadar Bazaar (main market, everything), Kinari Bazaar (traditional sweets), area near Jama Masjid (Bedai-Jalebi, chaat), and Noori Gate area (Petha shops). Our drivers know exactly where each specialty is found." },
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
    { name: "Petha", desc: "Agra's signature sweet made from ash gourd (Benincasa hispida). Over 30 varieties: Angoori (tiny, juicy), Paan (betel-flavored), Kesar (saffron), Chocolate, Coconut, Dry Fruit, and more. Panchhi Petha at Noori Gate is the gold standard.", price: "₹100-500 per kg", mustTry: true, heat: 0 },
    { name: "Dalmoth", desc: "Agra's famous spicy snack made from fried lentils, nuts, and spices. Crunchy, savory, and addictive. Buy from Bhagat Halwai or Panchhi stores. Makes a great gift to take home.", price: "₹200-400 per kg", mustTry: true, heat: 2 },
    { name: "Bedai & Jalebi", desc: "Traditional Agra breakfast. Bedai is deep-fried puffed bread made from urad dal, served with spicy aloo sabzi and sweet jalebis. Best at Deviram's near Jama Masjid -- a 50-year-old institution.", price: "₹30-50 per plate", mustTry: true, heat: 1 },
    { name: "Mughlai Biryani & Kebabs", desc: "Agra's Mughlai cuisine is distinct from Delhi or Lucknow -- richer, creamier, and heavily influenced by Mughal court recipes. Try seekh kebabs, galawti kebabs, and dum biryani.", price: "₹200-500 per dish", mustTry: false, heat: 1 },
    { name: "Paratha & Lassi", desc: "Stuffed parathas (aloo, gobhi, paneer) served with curd, pickle, and thick creamy lassi. Available everywhere from street stalls to restaurants. Agra parathas are crispier than Delhi style.", price: "₹50-100 per plate", mustTry: false, heat: 0 },
    { name: "Chaat", desc: "Agra chaat has a distinctive sweeter-tangier flavor profile. Try golgappe (pani puri), dahi bhalle (lentil dumplings in yogurt), aloo tikki, and papdi chaat. Best in evening at Sadar Bazaar.", price: "₹20-60 per plate", mustTry: false, heat: 2 },
    { name: "Jalebi & Rabri", desc: "Crispy hot jalebis dunked in sugar syrup, served with thick chilled rabri (reduced milk cream). Best in winter mornings. Try at any sweet shop in the old city area.", price: "₹40-80 per plate", mustTry: false, heat: 0 },
    { name: "Mughlai Korma & Nihari", desc: "Slow-cooked mutton korma with rich, creamy gravy. Nihari (overnight slow-cooked stew) available at specific shops near Jama Masjid. Sunday morning is traditional nihari time.", price: "₹150-300 per dish", mustTry: false, heat: 1 },
  ];

  const streetFoodItinerary = [
    { time: "7:00 AM", stop: "Deviram near Jama Masjid", food: "Bedai, Aloo Sabzi & Jalebi", desc: "Start with Agra's iconic breakfast. This 50-year-old shop serves the best bedai in the city. Arrive early for fresh, hot jalebis.", color: "from-orange-500 to-red-500" },
    { time: "8:30 AM", stop: "Panchi Petha, Noori Gate", food: "Petha Tasting", desc: "Free tasting of 30+ Petha varieties. Buy your favorites. This is the original Panchhi store, not the many imitations.", color: "from-amber-500 to-orange-500" },
    { time: "9:30 AM", stop: "Bhagat Halwai", food: "Dalmoth & Sweets", desc: "Buy fresh Dalmoth and sample traditional Agra sweets like Gajak (winter special) and Rewari.", color: "from-yellow-500 to-amber-500" },
    { time: "11:00 AM", stop: "Sadar Bazaar Area", food: "Chaat & Golgappe", desc: "Try Agra-style chaat -- sweeter and tangier than Delhi. Golgappe, dahi bhalle, and aloo tikki from roadside vendors.", color: "from-red-500 to-pink-500" },
    { time: "12:30 PM", stop: "Pinch of Spice / Mama Chicken", food: "Mughlai Lunch", desc: "Sit-down lunch at a popular restaurant. Try biryani, kebabs, butter chicken, and naan. Air-conditioned comfort.", color: "from-orange-600 to-red-600" },
    { time: "3:00 PM", stop: "Kinari Bazaar", food: "Rabri & Lassi", desc: "Thick creamy rabri and fresh churned lassi from traditional shops. Browse the market for spices and dry fruits.", color: "from-amber-600 to-yellow-600" },
    { time: "5:00 PM", stop: "Street Stalls near Taj", food: "Paratha & Chai", desc: "End with crispy parathas and masala chai at a local dhaba. The perfect evening snack after a day of sightseeing and eating.", color: "from-red-600 to-orange-600" },
  ];

  const restaurants = [
    { name: "Pinch of Spice", cuisine: "North Indian / Mughlai", budget: "₹400-600", location: "Fatehabad Road", desc: "Best all-rounder restaurant. Excellent dal makhani, paneer tikka, and biryani. AC, clean, reliable.", rating: "4.3" },
    { name: "Mama Chicken Mama Franky", cuisine: "Mughlai / Non-Veg", budget: "₹300-500", location: "Gwalior Road", desc: "Famous for butter chicken and seekh kebabs. Local favorite. Simple decor, amazing food.", rating: "4.1" },
    { name: "Shankara Vegis", cuisine: "Pure Vegetarian", budget: "₹250-400", location: "Fatehabad Road", desc: "Best pure veg restaurant. Paneer dishes, thalis, and South Indian options. Family-friendly.", rating: "4.2" },
    { name: "Esphahan (Oberoi)", cuisine: "Fine Dining Mughlai", budget: "₹2,000-4,000", location: "Taj East Gate", desc: "Luxury Mughlai dining with Taj Mahal views. Reservation required. Special occasion restaurant.", rating: "4.7" },
    { name: "Dasaprakash", cuisine: "South Indian", budget: "₹200-350", location: "Meher Theatre Complex", desc: "Authentic South Indian in Agra. Dosas, idlis, uttapam, and filter coffee. Popular with families.", rating: "4.0" },
    { name: "The Salt Cafe", cuisine: "Continental / Cafe", budget: "₹300-500", location: "Near Taj South Gate", desc: "Rooftop cafe with Taj view. Pasta, sandwiches, smoothies. Popular with international tourists and backpackers.", rating: "4.4" },
  ];

  const markets = [
    { name: "Sadar Bazaar", desc: "Agra's main market. Everything from sweets to spices, clothing to electronics. Best for chaat and street food in the evening. Very crowded but authentic.", bestFor: "Street food, chaat, general shopping" },
    { name: "Kinari Bazaar", desc: "Traditional market near Jama Masjid. Famous for traditional sweets, spices, dry fruits, and fabric. Less touristy, more local.", bestFor: "Sweets, spices, dry fruits, fabrics" },
    { name: "Noori Gate Area", desc: "The Petha capital of Agra. Multiple Petha shops including the original Panchhi Petha. Also good for Dalmoth and other snacks.", bestFor: "Petha, Dalmoth, traditional sweets" },
    { name: "Jama Masjid Area", desc: "Old city area with traditional food stalls. Best for morning Bedai-Jalebi, Nihari (Sunday special), and authentic Mughlai street food.", bestFor: "Bedai-Jalebi, Mughlai street food" },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Agra Locals", desc: "We eat here every day" },
    { icon: Utensils, title: "Food Experts", desc: "Curated food stops" },
    { icon: Users, title: "500+ Food Tours", desc: "Happy food travelers" },
    { icon: Star, title: "4.9 Rating", desc: "Google reviews" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-orange-50">
        {/* Spice dot pattern background */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='2' fill='%23c2410c'/%3E%3Ccircle cx='4' cy='4' r='1' fill='%23c2410c'/%3E%3Ccircle cx='36' cy='36' r='1' fill='%23c2410c'/%3E%3C/svg%3E")` }} />

        {/* Hero - Culinary Spice Explosion Design */}
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-orange-950 to-amber-950" />
          {/* Warm spice glow elements */}
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-red-600/25 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/15 rounded-full blur-[80px]" />
          {/* Floating spice particles */}
          <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-red-400/40 rounded-full" />
          <div className="absolute top-[25%] right-[15%] w-1.5 h-1.5 bg-orange-400/50 rounded-full" />
          <div className="absolute bottom-[30%] left-[20%] w-1 h-1 bg-amber-400/60 rounded-full" />
          <div className="absolute top-[60%] right-[25%] w-2 h-2 bg-yellow-400/30 rounded-full" />
          <div className="absolute bottom-[20%] right-[10%] w-1.5 h-1.5 bg-red-300/40 rounded-full" />

          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-red-400/30">
                  <Flame className="w-4 h-4 text-red-300" />
                  <span className="text-red-200 font-semibold text-sm tracking-wider uppercase">Culinary Guide 2026</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Agra <span className="text-transparent bg-gradient-to-r from-red-400 via-orange-300 to-amber-300 bg-clip-text">Food</span> Tour
                </h1>
                <p className="text-lg text-orange-100/70 mb-8 leading-relaxed">
                  Petha, Dalmoth, Bedai-Jalebi, Mughlai kebabs, and street food magic. Taste Agra through the eyes of locals who have eaten here all their lives.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-7 py-3.5 rounded-full font-bold shadow-xl shadow-red-500/20 hover:shadow-red-500/40 hover:scale-105 transition-all">
                    <Phone className="w-5 h-5" /> Call: 7668570551
                  </Link>
                  <Link href="https://wa.me/917668570551?text=I want to book an Agra food tour" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-7 py-3.5 rounded-full font-bold border border-white/20 hover:bg-white/20 transition-all">
                    WhatsApp Booking
                  </Link>
                </div>
              </div>
              {/* Floating food price cards */}
              <div className="hidden md:block relative h-80">
                <div className="absolute top-0 right-8 bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20 w-52 transform rotate-3">
                  <div className="text-2xl mb-1">🍬</div>
                  <div className="text-white font-bold">Petha Tasting</div>
                  <div className="text-orange-300 text-sm">30+ varieties at Noori Gate</div>
                  <div className="text-white/60 text-xs mt-2">FREE tasting</div>
                </div>
                <div className="absolute top-24 left-0 bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20 w-52 transform -rotate-2">
                  <div className="text-2xl mb-1">🫓</div>
                  <div className="text-white font-bold">Bedai-Jalebi</div>
                  <div className="text-orange-300 text-sm">Agra's iconic breakfast</div>
                  <div className="text-white/60 text-xs mt-2">₹30-50/plate</div>
                </div>
                <div className="absolute bottom-0 right-16 bg-white/10 backdrop-blur-xl rounded-2xl p-5 border border-white/20 w-52 transform rotate-1">
                  <div className="text-2xl mb-1">🍗</div>
                  <div className="text-white font-bold">Mughlai Kebabs</div>
                  <div className="text-orange-300 text-sm">Court recipes since 1500s</div>
                  <div className="text-white/60 text-xs mt-2">₹200-500/dish</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-red-950/80 backdrop-blur-xl border-t border-red-500/20">
            <div className="max-w-6xl mx-auto px-4 py-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {trustFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/90">
                    <div className="p-2 bg-red-500/20 rounded-lg"><f.icon className="w-5 h-5 text-red-300" /></div>
                    <div><div className="font-bold text-sm">{f.title}</div><div className="text-xs text-red-200/60">{f.desc}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* === OVERVIEW: SEO prose content section === */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-stone-800">
              Agra Food Tour — A Culinary Journey Through Mughal Heritage
            </h2>
            <div className="space-y-5 text-stone-600 text-lg leading-relaxed">
              <p>Agra is not just the city of the Taj Mahal — it is a <strong className="text-stone-800">culinary capital of North India</strong> with a food heritage dating back to the Mughal era. From the world-famous Agra Petha (a translucent sweet made from white pumpkin, available in 50+ varieties) to the addictive Dalmoth spice mix, from melt-in-your-mouth Bedai-Jalebi breakfasts to rich Mughlai curries — the flavours of Agra rival those of Old Delhi and Lucknow.</p>
              <p>Our <strong className="text-stone-800">Agra food tour by car</strong> takes you on a curated culinary circuit through the city, covering street food stalls at Sadar Bazaar, legendary sweet shops at Noori Gate, hole-in-the-wall kebab joints near Jama Masjid, and the famous Chaat Gali where generations of families have perfected their recipes. Your Triveni Cabs driver serves as your local guide, navigating narrow lanes and knowing exactly which vendors to trust.</p>
              <p>This food experience pairs perfectly with sightseeing — combine it with a Taj Mahal visit in the morning, a Mehtab Bagh sunset session, or a full Agra heritage walk. The best time for an <strong className="text-stone-800">Agra street food tour</strong> is during the cooler months (October to March) when outdoor eating is pleasant and seasonal specialities like Gajar Ka Halwa and fresh Petha varieties are at their peak.</p>
            </div>
          </div>
        </section>

        {/* Famous Foods - Plate/Menu Card Style */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Famous Foods of Agra</h2>
              <p className="text-stone-500">A city where Mughal culinary traditions meet North Indian street food genius</p>
            </div>
            {/* Menu-style cards -- "Must Try" items get the special treatment */}
            <div className="space-y-4">
              {famousFoods.map((food, idx) => (
                <div key={idx} className={`rounded-2xl overflow-hidden border-2 transition-all hover:shadow-lg ${food.mustTry ? 'border-red-300 bg-gradient-to-r from-red-50 to-orange-50' : 'border-stone-200 bg-white'}`}>
                  <div className="flex flex-col sm:flex-row">
                    {food.mustTry && (
                      <div className="sm:w-2 bg-gradient-to-b from-red-500 to-orange-500 flex-shrink-0" />
                    )}
                    <div className="flex-1 p-5 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                        <div className="flex items-center gap-3">
                          <h3 className="text-lg font-bold text-stone-800">{food.name}</h3>
                          {food.mustTry && <span className="bg-red-500 text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider">MUST TRY</span>}
                          {/* Spice level indicator */}
                          <div className="flex gap-0.5">
                            {[...Array(3)].map((_, i) => (
                              <Flame key={i} className={`w-3 h-3 ${i < food.heat ? 'text-red-500' : 'text-stone-200'}`} />
                            ))}
                          </div>
                        </div>
                        <span className="text-red-600 font-bold text-sm whitespace-nowrap bg-red-50 px-3 py-1 rounded-full border border-red-100">{food.price}</span>
                      </div>
                      <p className="text-stone-600 text-sm">{food.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Street Food Itinerary - Connected Trail Design */}
        <section className="py-16 px-4 bg-gradient-to-b from-red-900 to-orange-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-3">Street Food Tour Itinerary</h2>
              <p className="text-red-200/70">Follow this route for the ultimate Agra food crawl (our drivers know every stop)</p>
            </div>
            <div className="space-y-0">
              {streetFoodItinerary.map((stop, idx) => (
                <div key={idx} className="relative flex gap-5 md:gap-8">
                  {/* Timeline connector */}
                  <div className="flex flex-col items-center">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${stop.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <span className="text-white font-bold text-sm">{idx + 1}</span>
                    </div>
                    {idx < streetFoodItinerary.length - 1 && (
                      <div className="w-0.5 flex-1 my-1 bg-gradient-to-b from-white/30 to-white/10" style={{ minHeight: '24px' }} />
                    )}
                  </div>
                  {/* Content card */}
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/10 mb-4 flex-1 hover:bg-white/15 transition-all">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-orange-300 font-mono font-bold text-sm">{stop.time}</span>
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
              <p className="text-orange-200/80 text-sm">Full food tour with sedan cab: <strong className="text-white">₹1,500</strong> (local Agra) or <strong className="text-white">₹4,500</strong> (from Delhi round trip)</p>
            </div>
          </div>
        </section>

        {/* Best Restaurants - Grid with ratings */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-10 text-center">Best Restaurants in Agra</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {restaurants.map((r, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-lg hover:border-red-200 transition-all group">
                  {/* Top color bar */}
                  <div className="h-1.5 bg-gradient-to-r from-red-500 to-orange-500" />
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-stone-800">{r.name}</h3>
                      <div className="flex items-center gap-1 bg-amber-50 px-2 py-0.5 rounded-full">
                        <Star className="w-3 h-3 text-amber-500 fill-amber-500" />
                        <span className="text-xs font-bold text-amber-700">{r.rating}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 text-xs mb-3">
                      <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded-full font-medium">{r.cuisine}</span>
                      <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-medium">{r.budget}/person</span>
                    </div>
                    <p className="text-stone-400 text-xs mb-2 flex items-center gap-1"><MapPin className="w-3 h-3" /> {r.location}</p>
                    <p className="text-stone-600 text-sm">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Markets - Stall-style cards */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-10 text-center">Food Markets to Visit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {markets.map((m, idx) => (
                <div key={idx} className="relative bg-orange-50 rounded-2xl p-6 border border-orange-200/60 overflow-hidden">
                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-red-200/40 to-transparent rounded-bl-3xl" />
                  <h3 className="font-bold text-stone-800 mb-2 flex items-center gap-2 relative">
                    <ShoppingBag className="w-4 h-4 text-red-600" /> {m.name}
                  </h3>
                  <p className="text-stone-600 text-sm mb-3 relative">{m.desc}</p>
                  <div className="flex items-center gap-2 relative">
                    <Tag className="w-3.5 h-3.5 text-red-500" />
                    <p className="text-red-700 text-sm font-medium">Best for: {m.bestFor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Combine with Sightseeing - Recipe Card */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-stone-200">
              {/* Recipe card header */}
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6">
                <h2 className="text-2xl font-bold text-white flex items-center gap-2"><Bookmark className="w-6 h-6" /> Combine Food Tour with Sightseeing</h2>
                <p className="text-red-100 mt-1">Our recommended full-day recipe for the perfect Agra experience</p>
              </div>
              <div className="p-6">
                <div className="space-y-2">
                  {[
                    "6:00 AM - Sunrise Taj Mahal visit",
                    "8:30 AM - Bedai-Jalebi breakfast at Deviram (near Jama Masjid)",
                    "9:30 AM - Petha tasting at Panchhi Petha (Noori Gate)",
                    "10:00 AM-12:00 PM - Agra Fort visit",
                    "12:30 PM - Mughlai lunch at Pinch of Spice",
                    "2:00 PM - Baby Taj visit",
                    "3:00 PM - Chaat snacks at Sadar Bazaar",
                    "4:30 PM - Mehtab Bagh sunset + chai",
                    "6:00 PM - Buy Dalmoth & Petha for home",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-700 text-sm py-1.5 border-b border-stone-100 last:border-0">
                      <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-red-50 rounded-lg p-4 border border-red-100">
                  <p className="text-red-800 text-sm font-medium">Sedan cab for this full day: ₹1,500 (local Agra) or ₹4,500 (from Delhi round trip)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ - Spice-themed */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-10 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqData.map((faq, idx) => (
                <div key={idx} className="bg-orange-50 rounded-xl p-5 border border-orange-200/60 hover:border-red-300 transition-all">
                  <h3 className="font-bold text-stone-800 mb-2 text-sm flex items-start gap-2">
                    <Flame className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    {faq.question}
                  </h3>
                  <p className="text-stone-600 text-sm ml-6">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interlinks */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">More Agra Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: "/agra-travel-guide", title: "Agra Travel Guide 2026", desc: "Complete city guide" },
                { href: "/agra-shopping-guide", title: "Agra Shopping Guide", desc: "Markets & handicrafts" },
                { href: "/agra-beyond-taj-mahal", title: "Agra Beyond Taj Mahal", desc: "Hidden gems of Agra" },
                { href: "/same-day-agra-tour-from-delhi", title: "Same Day Agra Tour", desc: "Full day sightseeing" },
                { href: "/agra-day-trip-from-delhi", title: "Agra Day Trip from Delhi", desc: "Budget & cost guide" },
                { href: "/same-day-taj-mahal-tour", title: "Same Day Taj Mahal Tour", desc: "Focused Taj visit" },
                { href: "/taj-mahal-tour-from-delhi", title: "Taj Mahal Tour from Delhi", desc: "Private car options" },
                { href: "/sunrise-taj-mahal-tour-from-delhi", title: "Sunrise Taj Mahal Tour", desc: "Golden hour experience" },
                { href: "/moonlight-taj-mahal-tour", title: "Moonlight Taj Mahal Tour", desc: "Full moon viewing" },
                { href: "/delhi-airport-to-agra-taxi", title: "Delhi Airport to Agra", desc: "Airport transfers" },
                { href: "/sightseeing/agra", title: "Agra Sightseeing Tours", desc: "All Agra attractions" },
                { href: "/agra", title: "Agra City Hub", desc: "Agra cab services" },
              ].map((link, idx) => (
                <Link key={idx} href={link.href} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-stone-200 hover:border-red-300 hover:shadow-md transition-all group">
                  <div className="p-2 bg-red-50 rounded-lg group-hover:bg-red-100 transition-colors"><ChevronRight className="w-4 h-4 text-red-600" /></div>
                  <div><div className="font-bold text-stone-800 text-sm group-hover:text-red-700 transition-colors">{link.title}</div><div className="text-xs text-stone-400">{link.desc}</div></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Warm spice gradient */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-orange-600 to-amber-600" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='15' cy='15' r='1.5' fill='%23fff'/%3E%3C/svg%3E")` }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <Utensils className="w-12 h-12 text-orange-200 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Book Your Agra Food Tour</h2>
            <p className="text-orange-100/80 mb-8 text-lg">Let our drivers take you to the best food spots. We eat here every day -- we know what is good.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-red-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all">
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to book an Agra food tour" className="inline-flex items-center justify-center gap-2 bg-red-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-red-400/30 hover:bg-red-900/60 transition-all">
                WhatsApp Booking <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
