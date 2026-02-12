import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, Coffee, ShoppingBag, Utensils, Flame, Bookmark, Tag } from '@/components/ui/icons';

export const metadata = {
  title: 'Udaipur Food Tour 2026 | Dal Baati, Gatte Ki Sabzi & Lake City Cuisine Guide',
  description: 'Udaipur food & culinary tour. Famous Dal Baati, Gatte Ki Sabzi, Kachori, Kulfi, Pani Puri. Street food itinerary, best restaurants, lakeside dining. By Udaipur locals. Call 7668570551.',
  keywords: 'udaipur food tour, udaipur street food, udaipur famous food, dal baati udaipur, gatte ki sabzi, udaipur restaurants, lakeside dining udaipur, udaipur food guide',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/udaipur-food-tour' },
  openGraph: { title: 'Udaipur Food Tour 2026 | Lake City Culinary Guide by Locals', description: 'Complete Udaipur food guide. Dal Baati, Gatte Ki Sabzi, lakeside dining, best restaurants and street food spots.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/udaipur-food-tour', siteName: 'Triveni Cabs', images: [{ url: '/images/taj-mahal-hero.jpg', width: 1200, height: 630, alt: 'Udaipur Food Tour Guide' }] },
  twitter: { card: 'summary_large_image', title: 'Udaipur Food Tour 2026 | By Locals', description: 'Udaipur culinary guide. Dal Baati, lakeside dining, Rajasthani cuisine.', creator: '@trivenicabs', site: '@trivenicabs', images: ['/images/taj-mahal-hero.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function UdaipurFoodTourPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Udaipur Food Tour", "item": "https://www.trivenicabs.in/udaipur-food-tour" }] };

  const faqData = [
    { question: "What food is Udaipur famous for?", answer: "Udaipur is famous for Dal Baati Churma, Gatte Ki Sabzi (gram flour dumplings in yogurt gravy), Kachori with aloo sabzi, Kulfi, Pani Puri, Rajasthani thali, and lakeside dining. The city blends traditional Mewari cuisine with a thriving cafe culture popular with international tourists." },
    { question: "Where can I find the best lakeside dining in Udaipur?", answer: "Ambrai Restaurant on Lake Pichola offers the most stunning lake and City Palace views. Upre by 1559 AD, Savage Garden (rooftop views), and Raas Leela also offer beautiful settings. Ambrai at sunset is considered one of India&apos;s most romantic dining experiences." },
    { question: "Is street food safe to eat in Udaipur?", answer: "Yes! Udaipur&apos;s popular street food areas around Hathi Pol, Clock Tower, and City Palace have well-established stalls with high turnover. Stick to busy vendors, avoid raw items, and drink bottled water. Our recommended spots are all trusted local favourites." },
    { question: "Can I combine a food tour with Udaipur sightseeing?", answer: "Absolutely! Morning City Palace visit, breakfast at Hathi Pol, boat ride on Lake Pichola, lunch at a lakeside restaurant, Saheliyon Ki Bari visit, evening chaat and kulfi, and sunset dinner at Ambrai. Our drivers create the perfect combination." },
    { question: "What is the best time for a Udaipur food tour?", answer: "Morning (8-10 AM) for Kachori and breakfast. Lunch (12-2 PM) for Dal Baati Churma thali. Evening (5-8 PM) for chaat, Pani Puri, and Kulfi. Sunset for lakeside dining. September to March is the best season for Udaipur food exploration." },
    { question: "Are vegetarian options available in Udaipur?", answer: "Udaipur is predominantly vegetarian! Dal Baati Churma, Gatte Ki Sabzi, Kachori, Kulfi, chaat, and most traditional dishes are vegetarian. Natraj Restaurant is a famous pure-veg institution. The city&apos;s Mewari cuisine is largely plant-based." },
    { question: "How much does a Udaipur food tour cost?", answer: "Street food budget: ₹200-400 per person for a full tour. Lakeside restaurant meals: ₹500-1,500 per person. Our food tour with cab: ₹1,500 (sedan) for half-day covering street food + lakeside dining. Full day with sightseeing: ₹2,000." },
    { question: "What is Mewari cuisine?", answer: "Mewari cuisine is the traditional food of the Mewar region (Udaipur). It is characterized by the use of dried lentils, gram flour, buttermilk, and ghee — ingredients that thrive in the arid Rajasthani climate. Gatte Ki Sabzi, Dal Baati Churma, and Ker Sangri are signature Mewari dishes." },
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };

  const famousFoods = [
    { name: "Dal Baati Churma", desc: "The quintessential Rajasthani dish served everywhere in Udaipur. Baked wheat balls dipped generously in ghee, paired with panchmel dal and sweet churma. Natraj Restaurant near City Palace serves an outstanding version that draws locals daily.", price: "₹120-250 per thali", mustTry: true, heat: 1 },
    { name: "Gatte Ki Sabzi", desc: "Udaipur&apos;s signature curry — gram flour dumplings simmered in a tangy, spiced yogurt gravy. Mewari comfort food at its best. Available in every traditional restaurant and thali place. The version at Natraj is considered the benchmark.", price: "₹100-180 per dish", mustTry: true, heat: 1 },
    { name: "Kachori & Aloo Sabzi", desc: "Crispy deep-fried kachoris with spicy potato curry — Udaipur&apos;s beloved breakfast. Available from street stalls across the old city, especially around Hathi Pol and Clock Tower area. Fresh, hot kachoris in the morning are a daily Udaipur ritual.", price: "₹20-40 per plate", mustTry: true, heat: 1 },
    { name: "Kulfi", desc: "Udaipur&apos;s kulfi scene is excellent — thick, dense, traditional Indian ice cream in flavours like malai, kesar-pista, and mango. Evening kulfi stalls near Jagdish Temple and City Palace area are popular. Creamy and refreshing after a day of sightseeing.", price: "₹30-60 per piece", mustTry: true, heat: 0 },
    { name: "Pani Puri (Golgappe)", desc: "Hollow crispy puris filled with spiced water, tamarind chutney, and potato-chickpea mixture. Udaipur&apos;s golgappe vendors near Hathi Pol serve some of the most flavourful versions in Rajasthan. A must-try evening snack.", price: "₹20-40 per plate", mustTry: false, heat: 2 },
    { name: "Lakeside Fine Dining", desc: "Udaipur offers a unique dining experience — Rajasthani and multi-cuisine food served with Lake Pichola and City Palace as your backdrop. Ambrai is the gold standard. The combination of food and setting is unmatched in India.", price: "₹500-1,500 per person", mustTry: false, heat: 0 },
    { name: "Daal Kachori", desc: "A unique Udaipur variation — kachori stuffed with spiced lentil mixture, crispier and more savoury than the regular version. Served with green and sweet chutneys. Morning stalls at Hathi Pol and Surajpol gate serve the freshest ones.", price: "₹15-30 per piece", mustTry: false, heat: 1 },
    { name: "Rabri & Malpua", desc: "Thick, sweet reduced milk (rabri) served with pan-fried malpua (sweet pancakes). A classic Rajasthani dessert combination. Sweet shops around Jagdish Temple and the old city serve excellent versions, especially in the evening.", price: "₹40-80 per plate", mustTry: false, heat: 0 },
  ];

  const streetFoodItinerary = [
    { time: "8:00 AM", stop: "Hathi Pol Area", food: "Kachori & Aloo Sabzi Breakfast", desc: "Start at one of the many breakfast stalls in the Hathi Pol area. Fresh, crispy kachoris with spicy potato curry and masala chai. The old city comes alive with breakfast vendors.", color: "from-orange-500 to-red-500" },
    { time: "9:30 AM", stop: "Jagdish Temple Area", food: "Sweets & Temple Prasad", desc: "Visit the stunning Jagdish Temple and sample sweets and prasad from the surrounding shops. Rabri, Malpua, and traditional Mewari sweets are available here.", color: "from-amber-500 to-orange-500" },
    { time: "11:00 AM", stop: "City Palace Surroundings", food: "Chaat & Samosa", desc: "Explore the vibrant area around City Palace. Street vendors serve excellent chaat, samosas, and seasonal snacks. Great for photos and food simultaneously.", color: "from-yellow-500 to-amber-500" },
    { time: "12:30 PM", stop: "Natraj Restaurant", food: "Rajasthani Thali with Dal Baati", desc: "The main event — a full Rajasthani thali at Natraj, one of Udaipur&apos;s most respected traditional restaurants. Dal Baati Churma, Gatte Ki Sabzi, Ker Sangri, papad, and buttermilk.", color: "from-red-500 to-pink-500" },
    { time: "3:00 PM", stop: "Savage Garden / Cafe Culture", food: "Coffee & Snacks", desc: "Udaipur&apos;s cafe culture is thriving. Savage Garden offers rooftop views with excellent coffee and light meals. Grasswood Cafe and Cafe Edelweiss are also popular choices.", color: "from-orange-600 to-red-600" },
    { time: "5:00 PM", stop: "Hathi Pol Evening Stalls", food: "Pani Puri & Kulfi", desc: "Evening street food at Hathi Pol — fresh Pani Puri, creamy Kulfi, and various chaat items. The sunset light on the old city buildings adds magic to the experience.", color: "from-amber-600 to-yellow-600" },
    { time: "7:00 PM", stop: "Ambrai Restaurant, Lake Pichola", food: "Lakeside Dinner", desc: "End with a spectacular lakeside dinner at Ambrai. Watch the City Palace and Jag Mandir light up across the water while enjoying Rajasthani and Continental cuisine. Reservation recommended.", color: "from-red-600 to-orange-600" },
  ];

  const restaurants = [
    { name: "Ambrai Restaurant", cuisine: "Rajasthani / Multi-Cuisine", budget: "₹600-1,200", location: "Lake Pichola", desc: "India&apos;s most romantic restaurant setting. Lake Pichola views, City Palace backdrop. Outstanding Rajasthani and Continental food. Sunset reservation essential.", rating: "4.5" },
    { name: "Natraj Restaurant", cuisine: "Pure Veg Rajasthani", budget: "₹200-400", location: "Near City Palace", desc: "Udaipur&apos;s most trusted traditional restaurant. Definitive Rajasthani thali with Dal Baati Churma and Gatte Ki Sabzi. Generations of loyal customers.", rating: "4.3" },
    { name: "Savage Garden", cuisine: "Cafe / Continental", budget: "₹300-600", location: "Near Chandpol", desc: "Popular rooftop cafe with stunning old city views. Excellent coffee, pasta, and fusion food. Bohemian vibe popular with international travellers.", rating: "4.4" },
    { name: "Upre by 1559 AD", cuisine: "Fine Dining", budget: "₹1,000-2,000", location: "Lake Pichola", desc: "Elevated lakeside dining with creative Indian cuisine. Stunning ambiance, excellent service. Perfect for special occasions. Reservation recommended.", rating: "4.6" },
    { name: "Millets of Mewar", cuisine: "Healthy / Rajasthani", budget: "₹200-400", location: "Hathi Pol", desc: "Unique restaurant focusing on traditional millet-based Mewari dishes. Healthy, authentic, and delicious. Perfect for health-conscious food lovers.", rating: "4.3" },
    { name: "Grasswood Cafe", cuisine: "Cafe / Bakery", budget: "₹200-400", location: "Old City", desc: "Charming cafe with excellent baked goods, smoothie bowls, and light meals. Popular with digital nomads. Great for breakfast or an afternoon break.", rating: "4.4" },
  ];

  const markets = [
    { name: "Hathi Pol", desc: "Udaipur&apos;s main street food hub. Morning kachori stalls, evening Pani Puri vendors, sweet shops, and traditional food stalls. Also known for handicrafts and miniature paintings. The most food-dense area in the old city.", bestFor: "Kachori, Pani Puri, street food, sweets" },
    { name: "City Palace Area", desc: "The tourist hub with restaurants, cafes, and food stalls catering to all tastes. Multiple rooftop restaurants with lake views. Evening food scene is particularly vibrant with live music at some venues.", bestFor: "Lakeside dining, cafes, rooftop restaurants" },
    { name: "Clock Tower Market", desc: "Local market with authentic food stalls less frequented by tourists. Traditional sweet shops, breakfast vendors, and evening chaat stalls. Our drivers recommend this for the most authentic local food experience.", bestFor: "Authentic local food, sweets, breakfast" },
    { name: "Bapu Bazaar Area", desc: "Commercial market with good food options. Traditional restaurants serving Rajasthani thali, sweet shops, and afternoon snack vendors. More spacious and organized than the narrow old city lanes.", bestFor: "Thali restaurants, shopping, snacks" },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Udaipur Locals", desc: "We eat here every day" },
    { icon: Utensils, title: "Food Experts", desc: "Curated lakeside stops" },
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
                  Udaipur <span className="shimmer-text">Food</span> Tour
                </h1>
                <p className="text-lg text-orange-100/70 mb-8 leading-relaxed">
                  Dal Baati Churma, Gatte Ki Sabzi, lakeside fine dining, and vibrant street food. Taste the Venice of the East through the eyes of locals.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-7 py-3.5 rounded-full font-bold shadow-xl shadow-red-500/20 hover:shadow-red-500/40 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                    <Phone className="w-5 h-5" /> Call: 7668570551
                  </Link>
                  <Link href="https://wa.me/917668570551?text=I want to book a Udaipur food tour" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-7 py-3.5 rounded-full font-bold border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500">
                    WhatsApp Booking
                  </Link>
                </div>
              </div>
              <div className="hidden md:block relative h-80">
                <div className="glass-card absolute top-0 right-8 rounded-2xl p-5 w-52 transform rotate-3" style={{ animation: 'float 7s ease-in-out infinite' }}>
                  <div className="text-2xl mb-1">🍛</div>
                  <div className="text-white font-bold">Dal Baati Churma</div>
                  <div className="text-orange-300 text-sm">Mewari classic</div>
                  <div className="text-white/60 text-xs mt-2">₹120-250/thali</div>
                </div>
                <div className="glass-card absolute top-24 left-0 rounded-2xl p-5 w-52 transform -rotate-2" style={{ animation: 'float 8s ease-in-out infinite 1s' }}>
                  <div className="text-2xl mb-1">🏞️</div>
                  <div className="text-white font-bold">Lakeside Dining</div>
                  <div className="text-orange-300 text-sm">Ambrai at sunset</div>
                  <div className="text-white/60 text-xs mt-2">₹500-1,500/person</div>
                </div>
                <div className="glass-card absolute bottom-0 right-16 rounded-2xl p-5 w-52 transform rotate-1" style={{ animation: 'float 9s ease-in-out infinite 2s' }}>
                  <div className="text-2xl mb-1">🍨</div>
                  <div className="text-white font-bold">Creamy Kulfi</div>
                  <div className="text-orange-300 text-sm">Evening treat</div>
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
              Udaipur Food Tour — Royal Cuisine Meets Lakeside Charm
            </h2>
            <div className="space-y-5 text-stone-600 text-lg leading-relaxed">
              <p>Udaipur, the <strong className="text-stone-800">City of Lakes and the Venice of the East</strong>, offers a dining experience that is uniquely romantic and culturally rich. The Mewari cuisine here — rooted in the royal kitchens of the Mewar dynasty — combines the hardy ingredients of Rajasthan&apos;s arid landscape with refined cooking techniques developed in palatial kitchens over centuries.</p><p>Our <strong className="text-stone-800">Udaipur food tour by car</strong> takes you from the morning kachori stalls at Hathi Pol to the legendary Natraj Restaurant for a full Rajasthani thali, through the cafe-lined streets of the old city, and culminates with a sunset dinner at Ambrai — where Lake Pichola, City Palace, and Jag Mandir create arguably the most beautiful restaurant backdrop in all of India.</p><p>The <strong className="text-stone-800">best time for a Udaipur food tour</strong> is September to March when the weather is pleasant and the lakes are full after the monsoon. Udaipur&apos;s food scene beautifully combines traditional Rajasthani street food with a thriving international cafe culture — making it perfect for every type of food lover, from the adventurous street food explorer to the luxury lakeside diner.</p>
            </div>
          </div>
        </section>

        {/* Famous Foods - Glassmorphism Cards */}
        <section className="py-16 px-4 bg-orange-50/80">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Famous Foods of Udaipur</h2>
              <p className="text-stone-500">Mewari royal cuisine meets lakeside romance in the Venice of the East</p>
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
              <p className="text-red-200/70">Follow this route for the ultimate Udaipur food crawl (our drivers know every stop)</p>
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
              <p className="text-orange-200/80 text-sm">Full food tour with sedan cab: <strong className="text-white">₹1,500</strong> (local Udaipur) or <strong className="text-white">₹6,500</strong> (from Jaipur round trip)</p>
            </div>
          </div>
        </section>

        {/* Best Restaurants - Premium Card Grid */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-10 text-center">Best Restaurants in Udaipur</h2>
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
                <p className="text-red-100 mt-1">Our recommended full-day recipe for the perfect Udaipur experience</p>
              </div>
              <div className="p-6">
                <div className="space-y-2">
                  {["8:00 AM - Kachori breakfast at Hathi Pol","9:30 AM - City Palace visit","11:30 AM - Jagdish Temple & sweets tasting","12:30 PM - Rajasthani thali at Natraj Restaurant","2:00 PM - Boat ride on Lake Pichola","3:30 PM - Saheliyon Ki Bari visit","4:30 PM - Coffee at Savage Garden or Grasswood Cafe","5:30 PM - Pani Puri & Kulfi at Hathi Pol","7:00 PM - Sunset dinner at Ambrai, Lake Pichola"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-700 text-sm py-1.5 border-b border-stone-100 last:border-0">
                      <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 border border-red-200/50">
                  <p className="text-red-800 text-sm font-medium">Sedan cab for this full day: ₹1,500 (local Udaipur) or ₹6,500 (from Jaipur round trip)</p>
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
            <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">More Udaipur Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: "/sightseeing/udaipur", title: "Udaipur Sightseeing Tours", desc: "All Udaipur attractions" },
                { href: "/udaipur-in-2-days-itinerary", title: "Udaipur in 2 Days", desc: "Complete itinerary" },
                { href: "/jaipur-food-tour", title: "Jaipur Food Tour", desc: "Dal Baati & Kachori" },
                { href: "/jodhpur-food-tour", title: "Jodhpur Food Tour", desc: "Mirchi Vada & Lassi" },
                { href: "/pushkar-food-tour", title: "Pushkar Food Tour", desc: "Cafe culture & Malpua" },
                { href: "/jaipur-vs-udaipur", title: "Jaipur vs Udaipur", desc: "Which city to visit?" }
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Book Your Udaipur Food Tour</h2>
            <p className="text-orange-100/80 mb-8 text-lg">Let our drivers take you to the best food spots in the Lake City. From street stalls to lakeside dining, we know every stop.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-red-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}>
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to book a Udaipur food tour" className="inline-flex items-center justify-center gap-2 bg-red-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-red-400/30 hover:bg-red-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">
                WhatsApp Booking <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
