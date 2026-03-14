import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, Coffee, ShoppingBag, Utensils, Flame, Bookmark, Tag } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Pushkar Food Tour 2026 | Malpua, Dal Bati & Holy Lake Cuisine Guide',
  description: 'Pushkar food & culinary tour. Pure vegetarian holy city. Famous Malpua, Dal Bati Churma, Poha, Malai Lassi, Aloo Tikki. Street food itinerary, best cafes & restaurants. By locals. Call 7668570551.',
  keywords: 'pushkar food tour, pushkar street food, pushkar food guide, pure vegetarian pushkar, malpua pushkar, dal bati churma pushkar, pushkar cafes, pushkar lake food',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/pushkar-food-tour' },
  openGraph: { title: 'Pushkar Food Tour 2026 | Holy Lake Culinary Guide by Locals', description: 'Complete Pushkar food guide. Pure vegetarian holy city. Malpua, Dal Bati Churma, lakeside cafes, backpacker food culture.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/pushkar-food-tour', siteName: 'Triveni Cabs', images: [{ url: '/images/taj-mahal-hero.jpg', width: 1200, height: 630, alt: 'Pushkar Food Tour Guide' }] },
  twitter: { card: 'summary_large_image', title: 'Pushkar Food Tour 2026 | By Locals', description: 'Pushkar culinary guide. Pure veg holy city food, lakeside dining & cafe culture.', creator: '@trivenicabs', site: '@trivenicabs', images: ['/images/taj-mahal-hero.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function PushkarFoodTourPage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Pushkar Food Tour", "item": "https://www.trivenicabs.in/pushkar-food-tour" }] };

  const faqData = [
    { question: "What food is Pushkar famous for?", answer: "Pushkar is famous for its Malpua (sweet fried pancakes soaked in sugar syrup), Dal Bati Churma (Rajasthani baked dough balls with lentil curry and crushed wheat sweetmeat), Poha Jalebi, Aloo Tikki, Rabri, fresh Malai Lassi, and lakeside chai. The entire city is strictly vegetarian -- no meat, eggs, or alcohol sold anywhere due to its sacred status as Brahma&apos;s city." },
    { question: "Is Pushkar completely vegetarian?", answer: "Yes! Pushkar is 100% vegetarian. No non-vegetarian food, including eggs, is sold anywhere in the city. Alcohol is also banned within the sacred zone around Pushkar Lake. This is because Pushkar is one of the holiest Hindu pilgrimage sites, home to the only Brahma Temple in the world. All restaurants and street stalls are pure vegetarian." },
    { question: "Where can I find the best food in Pushkar?", answer: "Om Shiva Garden Cafe is beloved by backpackers for its rooftop vibes and Israeli-Indian fusion. Honey & Spice is perfect for healthy organic food. Laughing Buddha Cafe serves excellent coffee and continental food. Sunset Cafe by the lake offers stunning views. Shri Venkateshwara serves authentic South Indian thalis. The Sadar Bazaar area has the best street food stalls." },
    { question: "What is the cafe culture like in Pushkar?", answer: "Pushkar has a thriving backpacker cafe culture, unlike most Indian holy cities. Due to its popularity with international travellers, the Main Bazaar Road is lined with rooftop cafes serving Israeli, Italian, and fusion food alongside traditional Rajasthani dishes. Many cafes offer Wi-Fi, cushion seating, and lake views. It blends Indian spirituality with global traveller vibes." },
    { question: "Can I combine a food tour with Ajmer?", answer: "Absolutely! Ajmer is just 14 km from Pushkar. Start with morning chai and Poha in Pushkar, visit the Brahma Temple, take a food walk through Sadar Bazaar, then drive to Ajmer for Sohan Halwa (Ajmer&apos;s famous sweet), kebabs near Dargah Sharif (Ajmer allows non-veg), and shopping. Our drivers create the perfect combined itinerary." },
    { question: "How much does a Pushkar food tour cost?", answer: "Street food budget: &#8377;100-250 per person for a full tour. Cafe meals: &#8377;150-400 per person. Restaurant thalis: &#8377;120-300 per person. Our food tour with cab from Jaipur: &#8377;3,500 round trip (sedan). From Ajmer: &#8377;800 round trip. Local Pushkar cab for half-day: &#8377;800-1,000." },
    { question: "What is the best time for a Pushkar food tour?", answer: "October to March for pleasant weather. The Pushkar Camel Fair (November) brings special food stalls and festive preparations. Morning (7-9 AM) is best for Poha and chai. Afternoon for cafe hopping. Evening (5-7 PM) for lakeside snacks and ghat-side Aarti food. Avoid May-July as temperatures exceed 40 degrees Celsius." },
    { question: "Is street food safe to eat in Pushkar?", answer: "Popular stalls in Sadar Bazaar and near Pushkar Lake with high turnover are generally safe. Pushkar&apos;s food standards are maintained due to its religious significance. Stick to busy vendors, drink bottled water, and try the freshly prepared items. Our recommended spots are all well-established with decades of service." },
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };

  const famousFoods = [
    { name: "Malpua", desc: "Pushkar&apos;s signature sweet -- thick, crispy fried pancakes soaked in sugar syrup and topped with rabri (thickened sweetened milk). Every sweet shop and stall in Pushkar serves Malpua, but the ones near the Brahma Temple ghat are legendary. Best eaten hot, dripping with syrup, alongside a cup of masala chai.", price: "&#8377;30-60 per plate", mustTry: true, heat: 0 },
    { name: "Dal Bati Churma", desc: "Rajasthan&apos;s quintessential dish and a must-try in Pushkar. Hard-baked wheat dough balls (bati) drenched in ghee, served with spicy panchmel dal (five-lentil curry) and sweet churma (crushed wheat sweetened with jaggery and ghee). This rustic Rajasthani meal is hearty, filling, and deeply flavourful.", price: "&#8377;80-150 per plate", mustTry: true, heat: 1 },
    { name: "Poha Jalebi", desc: "A classic Rajasthani breakfast -- fluffy, spiced flattened rice garnished with sev, coriander, and lemon, paired with hot, crispy jalebi. The combination of savoury poha and sweet jalebi is iconic across Rajasthan. Pushkar&apos;s morning stalls in Sadar Bazaar serve this from as early as 6:30 AM.", price: "&#8377;20-40 per plate", mustTry: true, heat: 0 },
    { name: "Chai by the Lake", desc: "Pushkar&apos;s ghat-side chai is an experience in itself. Masala chai brewed with fresh ginger, cardamom, and cloves, served in clay kulhads while watching the sunrise or sunset over the sacred lake. The chai stalls along the 52 ghats are some of the most atmospheric tea spots in all of India.", price: "&#8377;10-20 per cup", mustTry: true, heat: 0 },
    { name: "Aloo Tikki", desc: "Crispy fried potato patties served with tangy tamarind chutney and spicy green chutney. Pushkar&apos;s evening street stalls serve Aloo Tikki that is crunchy on the outside and soft inside. Often topped with sev and a squeeze of lemon. A perfect lakeside evening snack.", price: "&#8377;15-30 per plate", mustTry: false, heat: 1 },
    { name: "Rabri & Malai Lassi", desc: "Thick, creamy Rabri (slow-reduced sweetened milk) from Pushkar&apos;s dairy-rich region. Malai Lassi -- a rich, full-fat yoghurt drink topped with a thick layer of cream (malai) -- is Pushkar&apos;s answer to every hot afternoon. The dairy quality in this region gives these a richness unmatched in cities.", price: "&#8377;30-70 per glass", mustTry: true, heat: 0 },
    { name: "Kachori & Samosa", desc: "Crispy deep-fried pastries filled with spiced lentils (kachori) or spiced potatoes (samosa), served with green and tamarind chutneys. An essential Rajasthani snack available at every corner of Sadar Bazaar. The kachoris in Pushkar are smaller and crunchier than their North Indian cousins.", price: "&#8377;15-30 per plate", mustTry: false, heat: 1 },
    { name: "Israeli & Fusion Cafe Food", desc: "Pushkar&apos;s unique backpacker cafe culture means you can find excellent shakshuka, falafel, hummus, pasta, and wood-fired pizza alongside traditional Indian food. Cafes like Om Shiva, Laughing Buddha, and Honey & Spice blend global flavours with local ingredients -- a vibe unique to Pushkar.", price: "&#8377;150-350 per meal", mustTry: false, heat: 0 },
  ];

  const streetFoodItinerary = [
    { time: "6:30 AM", stop: "Pushkar Lake Ghats", food: "Sunrise Chai & Ghat Walk", desc: "Begin at dawn at one of Pushkar&apos;s 52 ghats. Watch the sunrise paint the sacred lake gold. Sip masala chai from clay kulhads at a ghat-side stall. The stillness of the lake and the sound of temple bells create a magical start.", color: "from-orange-500 to-red-500" },
    { time: "8:00 AM", stop: "Sadar Bazaar", food: "Poha Jalebi Breakfast", desc: "Walk to Sadar Bazaar for the classic Rajasthani breakfast. Fluffy spiced poha with crunchy sev and fresh lemon, paired with hot, syrupy jalebi. The morning bazaar hums with locals starting their day.", color: "from-amber-500 to-orange-500" },
    { time: "9:30 AM", stop: "Near Brahma Temple", food: "Malpua & Temple Visit", desc: "Visit the world&apos;s only Brahma Temple and then indulge in Pushkar&apos;s signature Malpua from the stalls nearby. The hot, syrup-soaked pancakes topped with rabri are worth the detour. Accept prasad at the temple.", color: "from-yellow-500 to-amber-500" },
    { time: "11:30 AM", stop: "Main Bazaar Road Cafe", food: "Cafe Brunch & People Watching", desc: "Settle into a rooftop cafe on Main Bazaar Road. Order shakshuka or a masala omelette-free breakfast with fresh juice. Watch the eclectic mix of sadhus, backpackers, and pilgrims flow through the colourful bazaar below.", color: "from-red-500 to-pink-500" },
    { time: "1:00 PM", stop: "Local Restaurant", food: "Dal Bati Churma Lunch", desc: "Time for Rajasthan&apos;s most iconic dish. Find a local restaurant serving authentic Dal Bati Churma -- ghee-drenched baked batis, rich panchmel dal, and sweet churma. This is pure Rajasthani soul food at its best.", color: "from-orange-600 to-red-600" },
    { time: "4:00 PM", stop: "Sadar Bazaar & Sweet Shops", food: "Rabri, Lassi & Aloo Tikki", desc: "Afternoon refreshment -- thick Malai Lassi from a sweet shop, followed by Aloo Tikki from an evening street vendor. Browse the bazaar for spices, rose products, and Pushkar souvenirs between bites.", color: "from-amber-600 to-yellow-600" },
    { time: "6:00 PM", stop: "Sunset Cafe / Lake Ghats", food: "Sunset Snacks & Evening Aarti", desc: "End at the Sunset Cafe overlooking Pushkar Lake or find a ghat-side spot. Enjoy kachori and chai as the sun sets. Then witness the beautiful evening aarti ceremony at Pushkar Lake -- fire, flowers, and devotion.", color: "from-red-600 to-orange-600" },
  ];

  const restaurants = [
    { name: "Om Shiva Garden Cafe", cuisine: "Israeli / Indian Fusion", budget: "&#8377;150-350", location: "Main Bazaar Road", desc: "The most iconic backpacker cafe in Pushkar. Rooftop seating with lake glimpses, cushion seating, excellent shakshuka, falafel, and Indian thalis. A Pushkar institution loved by international travellers for decades.", rating: "4.4" },
    { name: "Honey & Spice", cuisine: "Organic / Healthy", budget: "&#8377;200-400", location: "Laxmi Market Road", desc: "A charming organic cafe serving healthy, fresh food. Excellent coffee, granola bowls, salads, and Rajasthani dishes made with locally sourced ingredients. Perfect for health-conscious travellers.", rating: "4.5" },
    { name: "Laughing Buddha Cafe", cuisine: "Continental / Indian", budget: "&#8377;150-350", location: "Main Bazaar", desc: "Popular rooftop cafe with a relaxed vibe. Good pasta, wood-fired pizza, fresh juices, and Indian classics. The cushion seating and traveller atmosphere make it a great spot to spend an afternoon.", rating: "4.3" },
    { name: "Sunset Cafe", cuisine: "Multi-Cuisine / Lakeside", budget: "&#8377;150-300", location: "Pushkar Lake", desc: "The most scenic cafe in Pushkar, perched right on the lake edge. The food is decent but the real draw is the spectacular sunset view over the sacred lake. Best visited from 4 PM onwards.", rating: "4.2" },
    { name: "Shri Venkateshwara", cuisine: "South Indian / Thali", budget: "&#8377;100-250", location: "Sadar Bazaar", desc: "Authentic South Indian restaurant serving crispy dosas, idli-vada, and unlimited thalis at very reasonable prices. A welcome change from Rajasthani food. Popular with local families and pilgrims.", rating: "4.3" },
    { name: "Pushkar Palace Restaurant", cuisine: "Rajasthani / Fine Dining", budget: "&#8377;300-600", location: "Pushkar Palace Hotel", desc: "Heritage restaurant inside the Pushkar Palace hotel overlooking the lake. Serves refined Rajasthani cuisine including excellent Dal Bati Churma, Laal Maas-style paneer, and traditional thalis in a regal setting.", rating: "4.1" },
  ];

  const markets = [
    { name: "Sadar Bazaar", desc: "Pushkar&apos;s main market and the food epicenter of the city. Morning poha stalls, sweet shops selling Malpua and Rabri, chaat vendors, and spice merchants line this bustling bazaar. The best street food in Pushkar is concentrated here, especially in the early morning and late afternoon hours.", bestFor: "Poha Jalebi, Malpua, Kachori, Aloo Tikki, sweets" },
    { name: "Pushkar Lake Ghats Area", desc: "The 52 ghats surrounding Pushkar Lake are lined with chai stalls, small eateries, and prasad vendors. The atmosphere of sipping chai while watching the sacred lake is unmatched. Evening aarti time brings out additional food vendors selling snacks and sweets to pilgrims and tourists alike.", bestFor: "Chai, prasad, ghat-side snacks, evening aarti food" },
    { name: "Main Bazaar Road", desc: "The heart of Pushkar&apos;s backpacker cafe culture. This colourful street is lined with rooftop cafes, juice bars, and fusion restaurants catering to international travellers. Israeli food, Italian pizza, organic bowls, and traditional Rajasthani dishes coexist in a uniquely Pushkar way.", bestFor: "Cafes, Israeli food, fusion cuisine, coffee, fresh juices" },
    { name: "Near Brahma Temple Area", desc: "The area surrounding the famous Brahma Temple has sweet shops, prasad stalls, and traditional Rajasthani food vendors. This is the most traditional and pilgrim-focused food zone in Pushkar. The Malpua stalls here are considered among the best in town.", bestFor: "Malpua, temple prasad, traditional sweets, Dal Bati" },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Pushkar Experts", desc: "We know every lakeside stall" },
    { icon: Utensils, title: "Food Curators", desc: "Handpicked holy city stops" },
    { icon: Users, title: "400+ Food Tours", desc: "Happy food travelers" },
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
                  Pushkar <span className="shimmer-text">Food</span> Tour
                </h1>
                <p className="text-lg text-orange-100/70 mb-8 leading-relaxed">
                  Pure vegetarian holy city on the sacred lake. Malpua, Dal Bati Churma, lakeside chai, backpacker cafes, and temple prasad. Taste devotion through food.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-7 py-3.5 rounded-full font-bold shadow-xl shadow-red-500/20 hover:shadow-red-500/40 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                    <Phone className="w-5 h-5" /> Call: 7668570551
                  </Link>
                  <Link href="https://wa.me/917668570551?text=I want to book a Pushkar food tour" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-7 py-3.5 rounded-full font-bold border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500">
                    WhatsApp Booking
                  </Link>
                </div>
              </div>
              <div className="hidden md:block relative h-80">
                <div className="glass-card absolute top-0 right-8 rounded-2xl p-5 w-52 transform rotate-3" style={{ animation: 'float 7s ease-in-out infinite' }}>
                  <div className="text-2xl mb-1">🥞</div>
                  <div className="text-white font-bold">Malpua</div>
                  <div className="text-orange-300 text-sm">Pushkar&apos;s signature sweet</div>
                  <div className="text-white/60 text-xs mt-2">&#8377;30-60/plate</div>
                </div>
                <div className="glass-card absolute top-24 left-0 rounded-2xl p-5 w-52 transform -rotate-2" style={{ animation: 'float 8s ease-in-out infinite 1s' }}>
                  <div className="text-2xl mb-1">🙏</div>
                  <div className="text-white font-bold">Pure Veg City</div>
                  <div className="text-orange-300 text-sm">100% vegetarian</div>
                  <div className="text-white/60 text-xs mt-2">Sacred cuisine</div>
                </div>
                <div className="glass-card absolute bottom-0 right-16 rounded-2xl p-5 w-52 transform rotate-1" style={{ animation: 'float 9s ease-in-out infinite 2s' }}>
                  <div className="text-2xl mb-1">🌅</div>
                  <div className="text-white font-bold">Lakeside Dining</div>
                  <div className="text-orange-300 text-sm">Sunset cafe culture</div>
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
              Pushkar Food Tour &mdash; Pure Vegetarian Flavours by the Sacred Lake
            </h2>
            <div className="space-y-5 text-stone-600 text-lg leading-relaxed">
              <p>Pushkar, home to the <strong className="text-stone-800">world&apos;s only Brahma Temple</strong> and one of India&apos;s most sacred pilgrimage cities, offers a culinary experience unlike any other. This tiny desert town on the edge of a holy lake is entirely vegetarian -- no meat, eggs, or alcohol sold anywhere -- yet its food culture is vibrant, diverse, and deeply satisfying. From traditional Rajasthani Dal Bati Churma to backpacker cafe shakshuka, Pushkar blends ancient Indian food traditions with a global traveller vibe.</p><p>Our <strong className="text-stone-800">Pushkar food tour by car</strong> takes you from sunrise chai at the sacred lake ghats through Sadar Bazaar for Poha Jalebi and Malpua, to the Brahma Temple area for prasad and sweets, through Main Bazaar Road for rooftop cafe culture, and back to the lakeside for evening Aloo Tikki and the beautiful sunset aarti ceremony. Your Triveni Cabs driver knows every food gem in this compact holy city.</p><p>The <strong className="text-stone-800">best time for a Pushkar food tour</strong> is during the cooler months (October to March) or during the famous Pushkar Camel Fair in November when special food stalls and festive preparations appear throughout the city. Combine Pushkar with nearby Ajmer (14 km) for a complete culinary experience -- from Pushkar&apos;s pure vegetarian lakeside dining to Ajmer&apos;s Sohan Halwa and Dargah-area food culture.</p>
            </div>
          </div>
        </section>

        {/* Famous Foods - Glassmorphism Cards */}
        <section className="py-16 px-4 bg-orange-50/80">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Famous Foods of Pushkar</h2>
              <p className="text-stone-500">Pure vegetarian holy city where Rajasthani tradition meets global cafe culture</p>
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
              <p className="text-red-200/70">Follow this route for the ultimate Pushkar food crawl (our drivers know every stop)</p>
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
              <p className="text-orange-200/80 text-sm">Full food tour with sedan cab from Jaipur: <strong className="text-white">&#8377;3,500</strong> (round trip) or local Pushkar: <strong className="text-white">&#8377;800-1,000</strong> (half day)</p>
            </div>
          </div>
        </section>

        {/* Best Restaurants - Premium Card Grid */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-10 text-center">Best Restaurants &amp; Cafes in Pushkar</h2>
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
                <p className="text-red-100 mt-1">Our recommended full-day recipe for the perfect Pushkar experience</p>
              </div>
              <div className="p-6">
                <div className="space-y-2">
                  {["6:30 AM - Sunrise chai at Pushkar Lake ghats","8:00 AM - Poha Jalebi breakfast at Sadar Bazaar","9:30 AM - Brahma Temple visit & Malpua from nearby stalls","11:00 AM - Rooftop cafe brunch on Main Bazaar Road","1:00 PM - Dal Bati Churma lunch at a local restaurant","3:00 PM - Savitri Temple hike (sunset views of Pushkar)","4:30 PM - Malai Lassi & Rabri at sweet shops","5:30 PM - Aloo Tikki & evening bazaar walk","6:30 PM - Evening aarti ceremony at Pushkar Lake ghats"].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-700 text-sm py-1.5 border-b border-stone-100 last:border-0">
                      <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 border border-red-200/50">
                  <p className="text-red-800 text-sm font-medium">Sedan cab from Jaipur: &#8377;3,500 (round trip) | From Ajmer: &#8377;800 | Local Pushkar half-day: &#8377;800-1,000</p>
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
            <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">More Pushkar &amp; Rajasthan Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: "/sightseeing/pushkar", title: "Pushkar Sightseeing Tours", desc: "All Pushkar attractions" },
                { href: "/jaipur-food-tour", title: "Jaipur Food Tour", desc: "Pink city street food" },
                { href: "/udaipur-food-tour", title: "Udaipur Food Tour", desc: "City of Lakes cuisine" },
                { href: "/mathura-food-tour", title: "Mathura Food Tour", desc: "Peda & temple prasad" },
                { href: "/jaisalmer-shopping-guide", title: "Jaisalmer Shopping Guide", desc: "Desert crafts & souvenirs" },
                { href: "/jodhpur-beyond-mehrangarh", title: "Jodhpur Beyond Mehrangarh", desc: "Blue City hidden gems" }
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Book Your Pushkar Food Tour</h2>
            <p className="text-orange-100/80 mb-8 text-lg">Let our drivers take you to the best vegetarian food spots by the sacred lake. From ghat-side stalls to backpacker rooftop cafes, we know every stop.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-red-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}>
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to book a Pushkar food tour" className="inline-flex items-center justify-center gap-2 bg-red-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-red-400/30 hover:bg-red-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">
                WhatsApp Booking <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
