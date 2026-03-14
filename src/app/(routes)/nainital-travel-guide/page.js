import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, Calendar, Sunrise, Camera, Coffee, ShoppingBag, Thermometer, Hotel, Landmark, Compass, BookOpen, Scroll, Mountain, Waves, Bird } from '@/components/ui/icons';

export const metadata = { title: 'Nainital Travel Guide 2026 | Lake City, Naini Lake & Kumaon Hills', description: 'Complete Nainital travel guide 2026. Naini Lake boating, Naina Devi Temple, Snow View Point, Tiffin Top, Bhimtal, Mall Road. Call 7668570551.', keywords: 'nainital travel guide, naini lake, lake city, kumaon hills, snow view point, nainital tourism, uttarakhand tourism, nainital boating, bhimtal, pangot birding', authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs', metadataBase: new URL('https://www.trivenicabs.in'), alternates: { canonical: '/nainital-travel-guide' }, openGraph: { title: 'Nainital Travel Guide 2026 | Lake City & Beyond', description: 'Everything about visiting Nainital. Naini Lake, Snow View Point, Mall Road, food, transport.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/nainital-travel-guide', siteName: 'Triveni Cabs', images: [{ url: '/images/nainital-hero.jpg', width: 1200, height: 630, alt: 'Nainital Travel Guide 2026' }] }, twitter: { card: 'summary_large_image', title: 'Nainital Travel Guide 2026', description: 'Complete Nainital guide. Lake City, Naini Lake, Snow View, Kumaoni food.', creator: '@trivenicabs', site: '@trivenicabs', images: ['/images/nainital-hero.jpg'] }, robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } } };
export const revalidate = false;

export default function NainitalTravelGuidePage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Nainital Travel Guide", "item": "https://www.trivenicabs.in/nainital-travel-guide" }] };
  const faqData = [
    { question: "How many days do I need in Nainital?", answer: "2-3 days is ideal. Day 1: Naini Lake boating, Mall Road, Naina Devi Temple, Tibetan Market. Day 2: Snow View Point cable car, Tiffin Top trek, Eco Cave Garden. Day 3: Bhimtal Lake, Sattal, Pangot (for birding enthusiasts). Add a day for Mukteshwar or Ranikhet excursion." },
    { question: "What is the best time to visit Nainital?", answer: "March to June and September to November are best. March-June offers pleasant weather (10-27 degrees) and clear lake views. September-November is post-monsoon with lush greenery and fewer crowds. December-February brings snowfall and freezing temperatures (0-8 degrees). July-August has heavy rainfall that can cause landslides." },
    { question: "How do I reach Nainital from Delhi?", answer: "By car: 300 km, 7 hours via NH9 through Moradabad and Haldwani. Our cab costs &#8377;5,500-7,500 one way. By train: Nearest station Kathgodam (35 km), then 1.5 hours by road. Shatabdi Express runs from Delhi. By bus: UPSRTC/ISBT Volvo (8-9 hours overnight)." },
    { question: "How do I reach Nainital from Lucknow?", answer: "By car: 350 km, 8 hours via Bareilly and Haldwani. Our cab costs &#8377;6,000-8,000 one way. By train: Lucknow to Kathgodam (8-9 hours) then 35 km by road to Nainital. We offer station pickup from Kathgodam." },
    { question: "What food is Nainital famous for?", answer: "Bal Mithai (a brown fudge-like sweet coated in sugar balls) is Nainital&apos;s signature sweet -- buy from any Kumaoni sweet shop. Singauri (wrapped in mallu leaf) is another local delicacy. Try Kumaoni cuisine: bhatt ki churkani (black bean curry), kafuli (spinach dish), and aloo ke gutke (spiced potatoes)." },
    { question: "Is boating safe on Naini Lake?", answer: "Yes, very safe. The Nainital Boat Club and government-regulated boat operators maintain strict safety standards. Life jackets are mandatory. Choose from paddleboats (self-operated), rowboats (with rower), or yacht rides. Avoid boating during heavy rain or storm warnings. Best during morning hours for calm waters." },
    { question: "Can I see snow in Nainital?", answer: "Yes! Nainital receives snowfall from late December to February, primarily in January. Snow View Point lives up to its name during winter. The higher areas around Tiffin Top and China Peak get the best snow coverage. Mall Road and the lake look magical when dusted with snow." },
    { question: "What should I buy in Nainital?", answer: "Nainital is famous for its candles -- handmade decorative candles in every shape and colour are a beloved tradition. Also buy woollen wear, Kumaoni fruit preserves and jams, local honey, and handmade paper crafts. The Tibetan Market and Mall Road are the main shopping areas." },
  ];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };
  const attractions = [
    { name: "Naini Lake (Boating)", desc: "The emerald-green kidney-shaped lake that gives Nainital its name. Surrounded by seven hills, it is the heart and soul of the town. Boating options include paddleboats, rowboats, and yacht rides. The reflection of surrounding hills in the still morning waters is unforgettable.", entry: "&#8377;210-510 (boat type)", timing: "6:00 AM - 6:00 PM", duration: "1-2 hours", icon: Waves },
    { name: "Naina Devi Temple", desc: "A sacred Hindu temple on the northern shore of Naini Lake, dedicated to Goddess Naina Devi (an incarnation of Goddess Sati). One of the 51 Shakti Peethas. Rebuilt after the 1880 landslide. The temple&apos;s spiritual atmosphere is enhanced by lake views.", entry: "Free", timing: "6:00 AM - 10:00 PM", duration: "30-45 min", icon: Landmark },
    { name: "Snow View Point (Cable Car)", desc: "At 2,270 metres, accessible by a scenic aerial ropeway (cable car) from Mall Road. On clear days, witness a stunning panorama of Himalayan peaks -- Nanda Devi, Trisul, and Nanda Kot. The cable car ride itself offers spectacular views of the town and lake below.", entry: "&#8377;200 (cable car return)", timing: "10:00 AM - 5:00 PM", duration: "1-1.5 hours", icon: Mountain },
    { name: "Tiffin Top (Dorothy&apos;s Seat)", desc: "A hilltop viewpoint at 2,292 metres offering panoramic views of the Kumaon Himalayas. Named after Dorothy Kellett, a British painter. Reached by a pleasant 4 km trek or pony ride from Bara Pathar. The whole Nainital town and lake spread below like a postcard.", entry: "Free (pony &#8377;300-500)", timing: "All day (morning best)", duration: "2-3 hours (with trek)", icon: Camera },
    { name: "Eco Cave Garden", desc: "A network of interconnected natural caves named after animals -- Tiger Cave, Panther Cave, Bat Cave, and more. Narrow passages add adventure, especially for children. Musical fountain show in the evening. Well-maintained gardens surrounding the caves.", entry: "&#8377;35 adults / &#8377;25 children", timing: "9:30 AM - 5:30 PM", duration: "1-1.5 hours", icon: Compass },
    { name: "Mall Road", desc: "The bustling main street of Nainital running along the lake between Tallital (lower end) and Mallital (upper end). Lined with hotels, restaurants, shops, and the famous Flats. A flat, easy walk with the lake on one side and the hills on the other. Car-free on peak season days.", entry: "Free", timing: "All day (evening best)", duration: "1-2 hours", icon: MapPin },
    { name: "Bhimtal Lake", desc: "A larger and quieter lake than Naini, located 22 km from Nainital. Features a unique island aquarium in the centre. Less crowded with better boating opportunities. The surrounding villages offer a peaceful escape from Nainital&apos;s tourist bustle.", entry: "&#8377;200 (boating)", timing: "8:00 AM - 6:00 PM", duration: "2-3 hours", icon: Sunrise },
    { name: "Sattal (Seven Lakes)", desc: "A cluster of seven interconnected freshwater lakes nestled in dense oak forests, 23 km from Nainital. A paradise for birdwatchers with over 500 species recorded. Kayaking, nature walks, and butterfly watching available. Far less commercialised than Nainital.", entry: "Free (activities extra)", timing: "All day", duration: "3-4 hours", icon: Bird },
    { name: "Pangot (Birding Paradise)", desc: "A tiny village 15 km from Nainital, famous among birdwatchers for sightings of over 580 species including the Lammergeier vulture, Koklass Pheasant, and Rufous-bellied Woodpecker. Dense oak and rhododendron forests. Ideal for nature photography and peaceful walks.", entry: "Free", timing: "Early morning best", duration: "Half day", icon: Bird },
  ];
  const monthlyGuide = [
    { month: "Jan", temp: "0-8°C", weather: "Snow, cold", crowd: "Low-Med", verdict: "OK (snow)", color: "bg-blue-100 text-blue-800", bar: 38 },
    { month: "Feb", temp: "1-10°C", weather: "Cold, snow", crowd: "Low-Med", verdict: "OK (snow)", color: "bg-blue-100 text-blue-800", bar: 40 },
    { month: "Mar", temp: "5-18°C", weather: "Spring bloom", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 88 },
    { month: "Apr", temp: "10-24°C", weather: "Pleasant", crowd: "Very High", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 95 },
    { month: "May", temp: "14-27°C", weather: "Warm, clear", crowd: "Very High", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 100 },
    { month: "Jun", temp: "17-27°C", weather: "Hot, pre-rain", crowd: "High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 75 },
    { month: "Jul", temp: "17-23°C", weather: "Heavy rain", crowd: "Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 10 },
    { month: "Aug", temp: "16-22°C", weather: "Peak monsoon", crowd: "Very Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 8 },
    { month: "Sep", temp: "14-22°C", weather: "Rain ending", crowd: "Low-Med", verdict: "Good", color: "bg-amber-100 text-amber-800", bar: 52 },
    { month: "Oct", temp: "8-20°C", weather: "Clear, crisp", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 90 },
    { month: "Nov", temp: "3-15°C", weather: "Cool, clear", crowd: "Moderate", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 78 },
    { month: "Dec", temp: "0-10°C", weather: "Cold, frost", crowd: "Low-Med", verdict: "OK (snow)", color: "bg-blue-100 text-blue-800", bar: 36 },
  ];
  const foodSection = [
    { name: "Bal Mithai", desc: "Nainital&apos;s most famous sweet -- a chocolate-brown fudge made from roasted khoya, coated with tiny white sugar balls. Originated in Almora but perfected in the Kumaon region. Every visitor takes boxes home. Available at every sweet shop on Mall Road.", icon: "🍬" },
    { name: "Singauri", desc: "A delicate Kumaoni sweet made from khoya (reduced milk) wrapped in a mallu (green) leaf. Fragrant, soft, and unique to the region. Best bought fresh from local sweet shops. Pairs perfectly with a cup of masala chai.", icon: "🍃" },
    { name: "Kumaoni Cuisine", desc: "Authentic hill cuisine rarely found elsewhere -- bhatt ki churkani (black bean curry), kafuli (spinach dish), aloo ke gutke (spiced potatoes with local herbs), and ras (a lentil curry). Try at local Kumaoni restaurants away from Mall Road.", icon: "🍛" },
    { name: "Cafe Food & Bakeries", desc: "Nainital&apos;s lakeside cafes serve excellent coffee, wood-fired pizzas, pasta, and freshly baked goods. Sakley&apos;s Restaurant and Machan are iconic. The British-era bakery culture lives on with fresh breads and pastries.", icon: "☕" },
    { name: "Lake-Side Snacks", desc: "Hot maggi, roasted corn (bhutta), steaming momos, and spiced chai from stalls along Mall Road and the lake. These simple pleasures define the Nainital experience, especially on a misty evening overlooking the water.", icon: "🍜" },
    { name: "Local Fruits & Preserves", desc: "Fresh peaches, plums, apricots, and strawberries in season (May-July). Homemade fruit jams, marmalades, and squashes are excellent souvenirs. Bhowali market (11 km away) is the fruit hub of the region.", icon: "🍑" },
  ];
  const shoppingSection = [
    { name: "Nainital Candles", desc: "Nainital&apos;s most iconic souvenir -- handmade decorative candles in every imaginable shape, colour, and design. From animal figures to elaborate scenery candles, they are a tradition unique to this lake city. The Tibetan Market has the best selection.", price: "&#8377;50 - &#8377;2,000" },
    { name: "Woollen Wear", desc: "Sweaters, shawls, caps, and jackets at excellent prices. Both machine-made and handknit options available. Mall Road shops and the Tibetan Market offer wide variety. Bargaining is expected at market stalls.", price: "&#8377;200 - &#8377;5,000" },
    { name: "Fruit Preserves & Honey", desc: "Locally made jams (peach, plum, strawberry), marmalades, squashes, and pure Kumaoni honey. Excellent gifts and far superior to commercial brands. Buy from Bhowali market or Mall Road speciality shops.", price: "&#8377;150 - &#8377;1,000" },
    { name: "Tibetan Handicrafts", desc: "Prayer flags, Buddhist jewellery, wooden crafts, and handmade bags from the Tibetan refugee community. The Tibetan Market near Mall Road is a compact treasure trove. Reasonably priced and supports the community.", price: "&#8377;100 - &#8377;5,000" },
  ];
  const areaGuide = [
    { area: "Mall Road / Tallital", desc: "The most popular and central area. Direct lake access, restaurants, and shops at your doorstep. Tallital end is close to the bus stand and Kathgodam road. Premium lake-view rooms command top prices. Noisy during peak season.", budget: "&#8377;800-8,000/night" },
    { area: "Mallital", desc: "The northern end of the lake near the Flats and Naina Devi Temple. Slightly quieter than Tallital. Close to Snow View cable car station. Good mix of budget and mid-range hotels. Better views from higher floors.", budget: "&#8377;600-5,000/night" },
    { area: "Bhowali", desc: "A peaceful town 11 km from Nainital on the Kathgodam road. Known for its fruit market and TB sanatorium-era heritage. Budget-friendly with cleaner air. Good base for visiting Bhimtal, Sattal, and Naukuchiatal.", budget: "&#8377;400-3,000/night" },
    { area: "Bhimtal", desc: "A serene lakeside town 22 km from Nainital. Much quieter with its own beautiful lake and island. Ideal for those who want a peaceful Kumaoni experience without crowds. Several resorts with lake views.", budget: "&#8377;500-4,000/night" },
  ];
  const trustFeatures = [{ icon: Waves, title: "Lake City Experts", desc: "Kumaon specialists" }, { icon: Landmark, title: "Lake District", desc: "India&apos;s beloved hill station" }, { icon: Users, title: "5000+ Trips Done", desc: "Nainital tour experts" }, { icon: Star, title: "4.9 Google Rating", desc: "Verified reviews" }];
  const chapters = [{ title: "Attractions", icon: Landmark, count: "9 Sites" }, { title: "Best Time", icon: Thermometer, count: "12 Months" }, { title: "Food Guide", icon: Coffee, count: "6 Specialties" }, { title: "Shopping", icon: ShoppingBag, count: "4 Categories" }, { title: "Stay Guide", icon: Hotel, count: "4 Areas" }, { title: "Transport", icon: Car, count: "4 Options" }];

  return (<>
    <style dangerouslySetInnerHTML={{ __html: `
      @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
      @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
      @keyframes pulse-gold { 0%, 100% { box-shadow: 0 0 20px rgba(245,158,11,0.3); } 50% { box-shadow: 0 0 50px rgba(245,158,11,0.6); } }
      @keyframes gradient-shift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
      .glass-card { background: rgba(255,255,255,0.05); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1); }
      .glass-card-light { background: rgba(255,255,255,0.85); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.3); box-shadow: 0 8px 32px rgba(0,0,0,0.06); }
      .shimmer-gold { background: linear-gradient(90deg, #f59e0b, #fde68a, #f59e0b); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer 3s linear infinite; }
      .hover-lift { transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
      .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 25px 50px -12px rgba(245,158,11,0.2); }
    ` }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <div className="min-h-screen bg-amber-50/30">
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='2' fill='%23b45309'/%3E%3Ccircle cx='4' cy='4' r='1' fill='%23b45309'/%3E%3Ccircle cx='36' cy='36' r='1' fill='%23b45309'/%3E%3C/svg%3E")` }} />

      {/* HERO */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-stone-900 to-yellow-950" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 15s ease infinite' }} />
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-amber-500/20 rounded-full blur-[100px]" style={{ animation: 'float 8s ease-in-out infinite' }} />
        <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px]" style={{ animation: 'float 10s ease-in-out infinite 2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/15 rounded-full blur-[80px]" style={{ animation: 'float 12s ease-in-out infinite 4s' }} />
        <div className="absolute top-[15%] left-[10%] w-3 h-3 bg-amber-400/40 rounded-full" style={{ animation: 'float 6s ease-in-out infinite' }} />
        <div className="absolute top-[25%] right-[15%] w-2 h-2 bg-yellow-400/50 rounded-full" style={{ animation: 'float 7s ease-in-out infinite 1s' }} />
        <div className="absolute bottom-[30%] left-[20%] w-2 h-2 bg-orange-400/60 rounded-full" style={{ animation: 'float 5s ease-in-out infinite 2s' }} />
        <div className="absolute top-[60%] right-[25%] w-3 h-3 bg-amber-300/30 rounded-full" style={{ animation: 'float 8s ease-in-out infinite 3s' }} />
        <div className="absolute bottom-[20%] right-[10%] w-2 h-2 bg-yellow-300/40 rounded-full" style={{ animation: 'float 6s ease-in-out infinite 4s' }} />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-md px-6 py-2 rounded-full mb-6 border border-amber-400/30">
            <Scroll className="w-4 h-4 text-amber-300" />
            <span className="text-amber-200 font-semibold text-sm tracking-[0.2em] uppercase">The Complete Encyclopedia</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight tracking-tight">Nainital Travel <span className="shimmer-gold">Guide</span></h1>
          <div className="flex items-center justify-center gap-4 mb-6"><div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500/60" /><span className="text-amber-400 font-semibold tracking-widest text-sm">2026 EDITION</span><div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500/60" /></div>
          <p className="text-lg md:text-xl text-amber-100/70 mb-10 max-w-3xl mx-auto leading-relaxed font-light">The Lake District of India -- emerald Naini Lake cradled by seven hills, misty Kumaon mornings, and the timeless charm of a beloved hill station.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 transition-all duration-500"><Phone className="w-5 h-5" /> Call Now: 7668570551</Link>
            <Link href="https://wa.me/917668570551?text=I want to book a cab for Nainital trip" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-500/30 hover:bg-white/20 hover:scale-105 transition-all duration-500">WhatsApp Us</Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-amber-950/60 backdrop-blur-2xl border-t border-amber-500/20">
          <div className="max-w-6xl mx-auto px-4 py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustFeatures.map((f, i) => (
                <div key={i} className="flex items-center gap-3 text-white/90">
                  <div className="p-2 bg-amber-500/20 rounded-lg backdrop-blur-sm"><f.icon className="w-5 h-5 text-amber-300" /></div>
                  <div><div className="font-bold text-sm">{f.title}</div><div className="text-xs text-amber-200/60">{f.desc}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TABLE OF CONTENTS */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10"><h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Table of Contents</h2><p className="text-stone-500">Your chapter-by-chapter guide to the Lake City</p></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {chapters.map((ch, i) => (
              <div key={i} className="glass-card-light rounded-2xl p-4 text-center hover-lift cursor-default group">
                <div className="w-12 h-12 mx-auto bg-gradient-to-br from-amber-500/20 to-yellow-500/20 rounded-xl flex items-center justify-center mb-3 group-hover:from-amber-500/30 group-hover:to-yellow-500/30 transition-all">
                  <ch.icon className="w-6 h-6 text-amber-700" />
                </div>
                <div className="font-bold text-stone-800 text-sm">{ch.title}</div>
                <div className="text-xs text-amber-600 font-medium mt-1">{ch.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WELCOME */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative glass-card-light rounded-3xl p-8 md:p-12 overflow-hidden">
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-amber-500/10 to-transparent rounded-tl-full" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-bold tracking-wider shadow-lg">CHAPTER 0</div>
            <h2 className="text-3xl font-bold text-stone-800 mb-6 text-center mt-4 relative">Welcome to the Lake City</h2>
            <p className="text-lg text-stone-600 leading-relaxed text-center relative">Nainital, the jewel of the Kumaon Hills, is a destination that has enchanted travellers since a British sugar merchant, P. Barron, discovered this emerald lake in 1841 and declared it the most beautiful spot he had ever seen. The town takes its name from Naini Lake, a kidney-shaped body of water cradled by seven hills -- Ayarpata, Deopata, Handi-Bandi, Naina, Alma, Laria Kanta, and Sher Ka Danda. Legend holds that the lake formed from an eye (nain) of Goddess Sati, making it one of the 51 Shakti Peethas in Hindu mythology. At 1,938 metres above sea level, Nainital offers a climate that ranges from pleasantly warm summers to magical snowy winters. The British developed it as a summer retreat, and their colonial legacy lives on in the Gothic churches, the Raj-era Boat House Club, and the wide Mall Road promenade. But Nainital is more than just its famous lake. Bhimtal, Sattal, and Naukuchiatal -- the satellite lakes -- offer quieter escapes. Pangot village is a world-class birding destination. The local Kumaoni cuisine, from the unique Bal Mithai sweet to hearty bhatt ki churkani, adds a flavour found nowhere else in India. Whether you come for the boating, the views, or simply to breathe mountain air by the lake, Nainital is a hill station that never disappoints.</p>
            <div className="flex justify-center gap-6 mt-8 text-center relative">
              {[{ val: "1841", label: "Year Discovered" }, { val: "1,938 m", label: "Elevation" }, { val: "7 Hills", label: "Surrounding the Lake" }].map((s, i) => (
                <div key={i} className="flex items-center gap-6">
                  {i > 0 && <div className="w-px h-12 bg-amber-200" />}
                  <div><div className="text-2xl md:text-3xl font-bold text-amber-700">{s.val}</div><div className="text-xs text-stone-500 mt-1">{s.label}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BEST TIME */}
      <section className="py-16 px-4 bg-white/70">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-2"><div className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider">CHAPTER 1</div></div>
          <h2 className="text-3xl font-bold text-stone-800 mb-2">Best Time to Visit Nainital</h2>
          <p className="text-stone-500 mb-10">Visual month-by-month guide -- taller bars mean better visiting conditions</p>
          <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 mb-8">
            {monthlyGuide.map((m, i) => (
              <div key={i} className="flex flex-col items-center group cursor-default">
                <div className="w-full h-32 flex items-end mb-2 relative">
                  <div className={`w-full rounded-t-lg transition-all duration-500 group-hover:opacity-80 group-hover:scale-105 origin-bottom ${m.bar > 75 ? 'bg-gradient-to-t from-emerald-600 to-emerald-400' : m.bar > 40 ? 'bg-gradient-to-t from-amber-500 to-amber-300' : 'bg-gradient-to-t from-red-400 to-red-300'}`} style={{ height: `${m.bar}%` }} />
                </div>
                <div className="text-xs font-bold text-stone-700">{m.month}</div>
                <div className="text-[10px] text-stone-400">{m.temp}</div>
                <div className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full mt-1 ${m.color}`}>{m.verdict}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs"><div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-emerald-500" /> Best (Mar-Jun, Oct-Nov)</div><div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-amber-400" /> OK (Sep)</div><div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-blue-400" /> Snow (Dec-Feb)</div><div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-red-400" /> Avoid (Jul-Aug)</div></div>
        </div>
      </section>

      {/* ATTRACTIONS */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2"><div className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider">CHAPTER 2</div></div>
          <h2 className="text-3xl font-bold text-stone-800 mb-10">Top Attractions in Nainital</h2>
          <div className="space-y-5">
            {attractions.map((a, idx) => (
              <div key={idx} className="glass-card-light rounded-3xl overflow-hidden hover-lift group">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-20 bg-gradient-to-b from-amber-600 to-yellow-600 flex items-center justify-center py-4 md:py-0">
                    <span className="text-3xl font-bold text-white/80">{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  <div className="flex-1 p-6">
                    <h3 className="text-xl font-bold text-stone-800 flex items-center gap-2 mb-2"><a.icon className="w-5 h-5 text-amber-600" /> {a.name}</h3>
                    <p className="text-stone-600 mb-4">{a.desc}</p>
                    <div className="flex flex-wrap gap-2 text-sm">
                      <span className="bg-gradient-to-r from-amber-500/10 to-yellow-500/10 backdrop-blur-sm border border-amber-200/50 text-amber-800 px-3 py-1.5 rounded-full font-medium">Entry: {a.entry}</span>
                      <span className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-200/50 text-blue-700 px-3 py-1.5 rounded-full font-medium"><Clock className="w-3 h-3 inline mr-1" />{a.timing}</span>
                      <span className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 backdrop-blur-sm border border-emerald-200/50 text-emerald-700 px-3 py-1.5 rounded-full font-medium">{a.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOD */}
      <section className="py-16 px-4 bg-gradient-to-br from-orange-50 to-amber-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2"><div className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider">CHAPTER 3</div></div>
          <h2 className="text-3xl font-bold text-stone-800 mb-2">Nainital Food Guide</h2>
          <p className="text-stone-500 mb-10">Kumaoni delicacies, lakeside snacks, and the legendary Bal Mithai</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {foodSection.map((food, idx) => (
              <div key={idx} className="glass-card-light rounded-2xl p-5 hover-lift relative overflow-hidden group">
                <div className="absolute -top-2 -right-2 text-7xl opacity-[0.07] group-hover:opacity-[0.15] transition-opacity duration-500">{food.icon}</div>
                <h3 className="font-bold text-stone-800 mb-2 flex items-center gap-2 relative"><Coffee className="w-4 h-4 text-amber-600" /> {food.name}</h3>
                <p className="text-stone-600 text-sm relative">{food.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SHOPPING */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2"><div className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider">CHAPTER 4</div></div>
          <h2 className="text-3xl font-bold text-stone-800 mb-10">Shopping in Nainital</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {shoppingSection.map((item, idx) => (
              <div key={idx} className="glass-card-light rounded-2xl p-6 hover-lift group">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-stone-800 flex items-center gap-2"><ShoppingBag className="w-4 h-4 text-amber-600" /> {item.name}</h3>
                  <span className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-lg shadow-amber-500/20">{item.price}</span>
                </div>
                <p className="text-stone-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSPORT */}
      <section className="py-16 px-4 bg-white/70">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2"><div className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider">CHAPTER 5</div></div>
          <h2 className="text-3xl font-bold text-stone-800 mb-8">Getting Around Nainital</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[{ mode: "Triveni Cabs (Private Taxi)", price: "&#8377;1,800-3,500/day", desc: "AC car with driver. Essential for Bhimtal, Sattal, Pangot, and Kathgodam transfers. Delhi-Nainital one way from &#8377;5,500. Call 7668570551.", highlight: true }, { mode: "Local Taxi / Shared Jeep", price: "&#8377;50-250/trip", desc: "Shared taxis run between Tallital and Mallital, and to nearby lakes. Private taxis for Bhimtal, Sattal, and Bhowali. Available at the bus stand.", highlight: false }, { mode: "Cycle Rickshaw / Pony", price: "&#8377;50-400/trip", desc: "Cycle rickshaws along Mall Road (flat stretch). Ponies for Tiffin Top and Snow View. Negotiate prices before starting. Ponies are a fun option for children.", highlight: false }, { mode: "Walking & Cable Car", price: "Free / &#8377;200", desc: "Mall Road is best explored on foot -- flat and scenic. The aerial ropeway (cable car) to Snow View Point is both transport and attraction. Most central sites are walkable.", highlight: false }].map((t, idx) => (
              <div key={idx} className={`rounded-2xl p-5 transition-all duration-500 ${t.highlight ? 'glass-card-light border-2 border-amber-400 shadow-lg relative overflow-hidden' : 'glass-card-light hover:border-amber-300/50'}`} style={t.highlight ? { animation: 'pulse-gold 3s ease-in-out infinite' } : {}}>
                {t.highlight && <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500" style={{ backgroundSize: '200% auto', animation: 'shimmer 3s linear infinite' }} />}
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-bold text-stone-800">{t.mode}</h3>
                  {t.highlight && <span className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg" style={{ animation: 'pulse-gold 2s ease-in-out infinite' }}>RECOMMENDED</span>}
                </div>
                <p className="text-amber-700 font-bold text-sm mb-1">{t.price}</p>
                <p className="text-stone-600 text-sm">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STAY */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2"><div className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider">CHAPTER 6</div></div>
          <h2 className="text-3xl font-bold text-stone-800 mb-10">Where to Stay in Nainital</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {areaGuide.map((a, idx) => (
              <div key={idx} className="glass-card-light rounded-2xl overflow-hidden hover-lift">
                <div className="bg-gradient-to-r from-amber-600 to-yellow-500 px-5 py-3 flex items-center justify-between">
                  <h3 className="font-bold text-white flex items-center gap-2"><Hotel className="w-4 h-4" /> {a.area}</h3>
                  <span className="text-amber-100 text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-0.5 rounded-full">{a.budget}</span>
                </div>
                <div className="p-5"><p className="text-stone-600 text-sm">{a.desc}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white/70">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-2"><div className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider">APPENDIX</div></div>
          <h2 className="text-3xl font-bold text-stone-800 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div key={idx} className="border-l-4 border-amber-500 glass-card-light rounded-r-2xl p-6 hover:border-amber-400 hover:shadow-lg hover:shadow-amber-500/5 transition-all duration-500">
                <h3 className="text-lg font-bold text-stone-800 mb-2 flex items-start gap-2">
                  <span className="bg-gradient-to-br from-amber-500 to-yellow-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 shadow-lg shadow-amber-500/25">Q{idx + 1}</span>
                  {faq.question}
                </h3>
                <p className="text-stone-600 ml-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LINKS */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-800 mb-2 text-center">Explore More Destinations</h2>
          <p className="text-stone-500 text-center mb-8 text-sm">Related guides and tour pages</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[{ href: "/mussoorie-travel-guide", title: "Mussoorie Travel Guide", desc: "Queen of Hills" }, { href: "/shimla-travel-guide", title: "Shimla Travel Guide", desc: "Queen of Hills" }, { href: "/dharamshala-travel-guide", title: "Dharamshala Travel Guide", desc: "Little Lhasa" }, { href: "/manali-travel-guide", title: "Manali Travel Guide", desc: "Mountain adventure" }, { href: "/haridwar-travel-guide", title: "Haridwar Travel Guide", desc: "Gateway to Gods" }, { href: "/jaipur-travel-guide", title: "Jaipur Travel Guide", desc: "Pink City" }, { href: "/agra-travel-guide", title: "Agra Travel Guide", desc: "Taj Mahal & more" }, { href: "/varanasi-travel-guide", title: "Varanasi Travel Guide", desc: "Spiritual capital" }, { href: "/sightseeing", title: "All Sightseeing Tours", desc: "Complete tour list" }].map((link, idx) => (
              <Link key={idx} href={link.href} className="glass-card-light flex items-center gap-3 p-4 rounded-xl hover:border-amber-400/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 group">
                <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 rounded-xl p-2.5 group-hover:from-amber-500/20 group-hover:to-yellow-500/20 transition-all"><BookOpen className="w-4 h-4 text-amber-700 group-hover:translate-x-0.5 transition-transform" /></div>
                <div><div className="font-bold text-stone-800 text-sm group-hover:text-amber-700 transition-colors">{link.title}</div><div className="text-xs text-stone-400">{link.desc}</div></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-700 via-amber-600 to-yellow-600" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 10s ease infinite' }} />
        <div className="absolute top-[20%] left-[10%] w-3 h-3 bg-white/20 rounded-full" style={{ animation: 'float 6s ease-in-out infinite' }} />
        <div className="absolute top-[60%] right-[15%] w-2 h-2 bg-white/15 rounded-full" style={{ animation: 'float 8s ease-in-out infinite 2s' }} />
        <div className="absolute bottom-[30%] left-[30%] w-2 h-2 bg-white/10 rounded-full" style={{ animation: 'float 7s ease-in-out infinite 1s' }} />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='15' cy='15' r='1.5' fill='%23fff'/%3E%3C/svg%3E")` }} />
        <div className="relative max-w-4xl mx-auto text-center">
          <Compass className="w-12 h-12 text-amber-200 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Help Planning Your Nainital Trip?</h2>
          <p className="text-amber-100/80 mb-8 text-lg">Naini Lake boating, Bhimtal excursion, Pangot birding safari, and Kathgodam pickup -- we arrange it all.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-gold 2s ease-in-out infinite' }}><Phone className="w-5 h-5" /> Call: 7668570551</Link>
            <Link href="https://wa.me/917668570551?text=I want to book a cab for Nainital trip" className="inline-flex items-center justify-center gap-2 bg-amber-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-400/30 hover:bg-amber-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">WhatsApp Us <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
    </div>
  </>);
}
