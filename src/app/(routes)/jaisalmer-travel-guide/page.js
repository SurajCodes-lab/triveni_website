import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, Calendar, Sunrise, Camera, Coffee, ShoppingBag, Thermometer, Hotel, Landmark, Compass, BookOpen, Scroll } from '@/components/ui/icons';

export const metadata = { title: 'Jaisalmer Travel Guide 2026 | Golden City, Desert Safari & Living Fort', description: 'Complete Jaisalmer travel guide 2026. Golden Fort, Sam Sand Dunes, Patwon Ki Haveli, desert safari, Kuldhara ghost village. Book cab 7668570551.', keywords: 'jaisalmer travel guide, golden city jaisalmer, jaisalmer fort, sam sand dunes, desert safari rajasthan, kuldhara ghost village, jaisalmer tourism 2026', authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs', metadataBase: new URL('https://www.trivenicabs.in'), alternates: { canonical: '/jaisalmer-travel-guide' }, openGraph: { title: 'Jaisalmer Travel Guide 2026 | Golden City & Desert Safari', description: 'Everything about visiting Jaisalmer. Golden Fort, Sam Sand Dunes, desert cuisine, transport.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/jaisalmer-travel-guide', siteName: 'Triveni Cabs', images: [{ url: '/images/jaisalmer-hero.jpg', width: 1200, height: 630, alt: 'Jaisalmer Travel Guide 2026' }] }, twitter: { card: 'summary_large_image', title: 'Jaisalmer Travel Guide 2026', description: 'Complete Jaisalmer guide. Golden Fort, desert safari, transport.', creator: '@trivenicabs', site: '@trivenicabs', images: ['/images/jaisalmer-hero.jpg'] }, robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } } };
export const revalidate = false;

export default function JaisalmerTravelGuidePage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Jaisalmer Travel Guide", "item": "https://www.trivenicabs.in/jaisalmer-travel-guide" }] };
  const faqData = [
    { question: "How many days do I need in Jaisalmer?", answer: "3 days is ideal. Day 1: Jaisalmer Fort, Patwon Ki Haveli, Nathmal Ki Haveli, Gadsisar Lake. Day 2: Sam Sand Dunes desert safari, camel ride, overnight camp. Day 3: Kuldhara ghost village, Bada Bagh, Desert National Park. Add a day for Tanot Mata Temple or Longewala border." },
    { question: "What is the best time to visit Jaisalmer?", answer: "October to March is best. November to February is ideal with pleasant 10-25 degree weather perfect for desert exploration. The Desert Festival in February is spectacular. April to June is extremely hot (45+ degrees) and should be avoided. Monsoon (July-September) brings occasional rain to the desert." },
    { question: "How do I reach Jaisalmer from Delhi?", answer: "By train: Delhi-Jaisalmer Express (18 hrs). By car: 780 km, 12 hours via NH15. Our cab costs &#8377;10,000-14,000 one way. By flight: Jaisalmer airport has limited flights from Delhi and Jaipur. From Jodhpur: 285 km, 5 hours. We offer pickup from all locations." },
    { question: "Is the Jaisalmer Fort a living fort?", answer: "Yes! Jaisalmer Fort (Sonar Quila) is one of the very few living forts in the world. About 3,000 people still live inside the fort. It has shops, hotels, restaurants, and Jain temples within its walls. Built in 1156 AD by Rawal Jaisal, it rises from the Thar Desert like a golden mirage." },
    { question: "What is the Sam Sand Dunes experience like?", answer: "Sam Sand Dunes is 42 km from Jaisalmer city. Activities include camel safari, jeep safari, quad biking, and cultural folk performances. Overnight desert camps range from basic to luxury. Sunset and sunrise views over the dunes are magical. Book through Triveni Cabs for hassle-free transport." },
    { question: "What food is Jaisalmer famous for?", answer: "Jaisalmer is known for Dal Bati Churma (Rajasthani staple), Ker Sangri (desert beans and berries), Gatte Ki Sabzi, Papad Ki Sabzi, and Laal Maas (spicy mutton). Rooftop restaurants inside the fort offer stunning views with traditional Rajasthani thalis." },
    { question: "What should I buy in Jaisalmer?", answer: "Jaisalmer is famous for mirror work embroidery, patchwork textiles, leather goods (mojaris and bags), silver jewellery, and camel leather products. Sadar Bazaar and the fort market are the best shopping spots. Bargaining is expected and encouraged." },
    { question: "Is Jaisalmer safe for tourists?", answer: "Very safe. Jaisalmer is a small, friendly tourist town. The fort area and main markets are well-lit and busy. Solo travellers, including women, find it comfortable. For desert camps, book reputable operators. Standard travel precautions apply. Our drivers know every route in the region." },
  ];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };
  const attractions = [
    { name: "Jaisalmer Fort (Sonar Quila)", desc: "One of the world&apos;s few living forts, built in 1156 AD by Rawal Jaisal. Made of golden-yellow sandstone that glows at sunset. Home to 3,000 residents, Jain temples, havelis, shops, and restaurants within its massive walls.", entry: "&#8377;50 Indian / &#8377;250 Foreign", timing: "9:00 AM - 6:00 PM", duration: "2-3 hours", icon: Landmark },
    { name: "Patwon Ki Haveli", desc: "The largest and most elaborate haveli in Jaisalmer. A cluster of five havelis built between 1805-1862 by wealthy Jain merchants. Intricate sandstone carvings, jharokhas (balconies), and mirror work that showcase Rajasthani craftsmanship at its finest.", entry: "&#8377;100 Indian / &#8377;250 Foreign", timing: "9:00 AM - 6:00 PM", duration: "1-1.5 hours", icon: Camera },
    { name: "Sam Sand Dunes", desc: "The iconic Thar Desert dunes 42 km from Jaisalmer. Camel safaris, jeep rides, quad biking, and cultural evenings with Rajasthani folk music and dance. Overnight desert camps from budget tents to luxury glamping.", entry: "Free (activities extra)", timing: "Best at sunset/sunrise", duration: "Half day to overnight", icon: Sunrise },
    { name: "Desert National Park", desc: "3,162 sq km sanctuary preserving the Thar Desert ecosystem. Home to the critically endangered Great Indian Bustard, desert fox, chinkara, and fossilised trees 180 million years old. A unique wildlife experience.", entry: "&#8377;100 Indian / &#8377;500 Foreign", timing: "Sunrise to Sunset", duration: "3-4 hours", icon: Compass },
    { name: "Kuldhara (Ghost Village)", desc: "Abandoned village deserted overnight in 1825 by Paliwal Brahmins fleeing a tyrannical minister. 170+ houses stand eerily intact. Considered haunted by locals. A fascinating and atmospheric historical site.", entry: "&#8377;25 Indian / &#8377;100 Foreign", timing: "8:00 AM - 6:00 PM", duration: "1-1.5 hours", icon: Shield },
    { name: "Gadsisar Lake", desc: "Artificial lake built by Maharawal Gadsi Singh in 1367 as the city&apos;s main water source. Surrounded by temples, ghats, and shrines. The ornate Tilon Ki Pol gateway is a masterpiece. Boating available in winter months.", entry: "Free (boating extra)", timing: "Open all day", duration: "1-1.5 hours", icon: Landmark },
    { name: "Nathmal Ki Haveli", desc: "19th-century Prime Minister&apos;s residence built by two Muslim architect brothers simultaneously. Each half has unique carvings yet harmonizes perfectly. Elephants carved from single stones guard the entrance.", entry: "&#8377;30", timing: "8:00 AM - 6:00 PM", duration: "30-45 min", icon: Camera },
    { name: "Bada Bagh", desc: "Royal cenotaphs (chhatris) of Jaisalmer&apos;s rulers set against barren desert hills. Beautifully carved sandstone memorials dating from the 16th century. Stunning at sunrise and sunset for photography.", entry: "&#8377;50 Indian / &#8377;100 Foreign", timing: "8:00 AM - 6:00 PM", duration: "45 min - 1 hour", icon: Landmark },
  ];
  const monthlyGuide = [
    { month: "Jan", temp: "5-22°C", weather: "Cool, clear", crowd: "Very High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 95 },
    { month: "Feb", temp: "8-25°C", weather: "Pleasant (Desert Fest)", crowd: "Very High", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 100 },
    { month: "Mar", temp: "13-31°C", weather: "Warm", crowd: "High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 80 },
    { month: "Apr", temp: "20-38°C", weather: "Hot", crowd: "Low", verdict: "Not ideal", color: "bg-red-100 text-red-800", bar: 25 },
    { month: "May", temp: "26-43°C", weather: "Very hot", crowd: "Very Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 10 },
    { month: "Jun", temp: "28-45°C", weather: "Extreme heat", crowd: "Very Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 5 },
    { month: "Jul", temp: "27-39°C", weather: "Light monsoon", crowd: "Low", verdict: "Not ideal", color: "bg-amber-100 text-amber-800", bar: 20 },
    { month: "Aug", temp: "26-37°C", weather: "Occasional rain", crowd: "Low", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 25 },
    { month: "Sep", temp: "24-36°C", weather: "Rain ending", crowd: "Low", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 30 },
    { month: "Oct", temp: "19-34°C", weather: "Pleasant", crowd: "High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 85 },
    { month: "Nov", temp: "12-29°C", weather: "Cool, clear", crowd: "Very High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 92 },
    { month: "Dec", temp: "7-24°C", weather: "Cold, clear", crowd: "Very High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 90 },
  ];
  const foodSection = [
    { name: "Dal Bati Churma", desc: "The quintessential Rajasthani dish -- baked wheat balls (bati) served with spiced lentils (dal) and sweet crumbled wheat (churma). Cooked over desert wood fire for authentic smoky flavour.", icon: "🫓" },
    { name: "Ker Sangri", desc: "A unique desert delicacy made from dried ker berries and sangri beans found only in the Thar Desert. Tangy, spicy, and utterly unique to this region. A must-try traditional dish.", icon: "🌿" },
    { name: "Gatte Ki Sabzi", desc: "Gram flour dumplings simmered in a spiced yoghurt gravy. A staple of Marwari cuisine born from the desert&apos;s scarcity of fresh vegetables. Rich, creamy, and deeply satisfying.", icon: "🍛" },
    { name: "Laal Maas", desc: "Fiery red mutton curry made with mathania chillies, a Rajasthani speciality. Not for the faint-hearted -- the heat builds with every bite. Best enjoyed with bajra roti.", icon: "🍖" },
    { name: "Rooftop Fort Dining", desc: "Several restaurants inside Jaisalmer Fort offer rooftop dining with panoramic desert views. Enjoy traditional thalis as the golden fort glows in the evening light. A magical experience.", icon: "🏰" },
    { name: "Desert Camp Dinner", desc: "Traditional Rajasthani feast under the stars at Sam Sand Dunes camps. Accompanied by Kalbelia folk dance, fire performers, and live Manganiyar music. An unforgettable cultural evening.", icon: "⭐" },
  ];
  const shoppingSection = [
    { name: "Mirror Work & Embroidery", desc: "Exquisite mirror work (shisha) embroidery on bedspreads, cushion covers, wall hangings, and clothing. Each piece handcrafted by local artisans. Sadar Bazaar and fort shops have the best collections.", price: "&#8377;200 - &#8377;10,000" },
    { name: "Leather Goods", desc: "Handcrafted camel leather mojaris (shoes), bags, journals, and belts. Jaisalmer&apos;s leather craft tradition dates back centuries. The fort market and Manak Chowk offer authentic pieces.", price: "&#8377;150 - &#8377;5,000" },
    { name: "Patchwork Textiles", desc: "Colourful patchwork quilts (ralli), bedsheets, and tapestries made from recycled fabric. Traditional Rajasthani patterns and vibrant desert colours. Lightweight and perfect for gifts.", price: "&#8377;300 - &#8377;8,000" },
    { name: "Silver Jewellery", desc: "Tribal and Rajasthani silver jewellery -- anklets, bangles, necklaces, and earrings with traditional desert motifs. Oxidised silver pieces are particularly popular. Bargain well in Sadar Bazaar.", price: "&#8377;200 - &#8377;15,000" },
  ];
  const areaGuide = [
    { area: "Inside Jaisalmer Fort", desc: "The most atmospheric stay in Rajasthan. Heritage havelis converted to boutique hotels. Rooftop views of the desert. Can be noisy in peak season. Walking access to Jain temples and fort attractions.", budget: "&#8377;1,000-8,000/night" },
    { area: "Hanuman Circle / Gandhi Chowk", desc: "Central location with budget to mid-range hotels. Close to Patwon Ki Haveli and main markets. Good restaurants and shops nearby. 10-minute walk to the fort entrance.", budget: "&#8377;500-4,000/night" },
    { area: "Sam Sand Dunes Camps", desc: "Desert camp experience 42 km from city. Options from basic tents to luxury Swiss tents with AC. Includes camel rides, folk performances, and meals. Best for the complete desert experience.", budget: "&#8377;1,500-15,000/night" },
    { area: "Gadsisar Lake Road", desc: "Peaceful area near the lake with heritage hotels. Less crowded than the fort area. Beautiful lake views. 15-minute walk to the fort. Good mid-range to luxury options.", budget: "&#8377;1,500-6,000/night" },
  ];
  const trustFeatures = [{ icon: MapPin, title: "Rajasthan Specialists", desc: "Desert route experts" }, { icon: Landmark, title: "Golden City", desc: "Thar Desert gateway" }, { icon: Users, title: "4000+ Travellers Served", desc: "Rajasthan tour experts" }, { icon: Star, title: "4.9 Google Rating", desc: "Verified reviews" }];
  const chapters = [{ title: "Attractions", icon: Landmark, count: "8 Sites" }, { title: "Best Time", icon: Thermometer, count: "12 Months" }, { title: "Food Guide", icon: Coffee, count: "6 Specialties" }, { title: "Shopping", icon: ShoppingBag, count: "4 Categories" }, { title: "Stay Guide", icon: Hotel, count: "4 Areas" }, { title: "Transport", icon: Car, count: "4 Options" }];

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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight tracking-tight">Jaisalmer Travel <span className="shimmer-gold">Guide</span></h1>
          <div className="flex items-center justify-center gap-4 mb-6"><div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500/60" /><span className="text-amber-400 font-semibold tracking-widest text-sm">2026 EDITION</span><div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500/60" /></div>
          <p className="text-lg md:text-xl text-amber-100/70 mb-10 max-w-3xl mx-auto leading-relaxed font-light">The Golden City -- Rajasthan&apos;s last frontier where a living fort rises from the Thar Desert, sand dunes stretch to the horizon, and ancient havelis whisper tales of Silk Road traders.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 transition-all duration-500"><Phone className="w-5 h-5" /> Call Now: 7668570551</Link>
            <Link href="https://wa.me/917668570551?text=I want to book a cab for Jaisalmer trip" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-500/30 hover:bg-white/20 hover:scale-105 transition-all duration-500">WhatsApp Us</Link>
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
          <div className="text-center mb-10"><h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Table of Contents</h2><p className="text-stone-500">Your chapter-by-chapter guide to the Golden City</p></div>
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
            <h2 className="text-3xl font-bold text-stone-800 mb-6 text-center mt-4 relative">Welcome to the Golden City</h2>
            <p className="text-lg text-stone-600 leading-relaxed text-center relative">Jaisalmer, the Golden City of India, rises from the vast Thar Desert like a magnificent sandcastle frozen in time. Founded in 1156 AD by Rawal Jaisal, a Bhati Rajput king, this frontier city was once a vital halt on the ancient Silk Road connecting India to Central Asia and beyond. The magnificent Jaisalmer Fort -- Sonar Quila, the Golden Fort -- is one of the very few living forts in the world, still home to nearly 3,000 residents who live, work, and worship within its honey-coloured sandstone walls. The city&apos;s elaborate havelis, built by wealthy Jain merchants, showcase some of the finest stone carving in all of Rajasthan, with facades so intricate they resemble lacework. Beyond the city walls lies the vast Thar Desert, where Sam Sand Dunes offer camel safaris under star-filled skies, the abandoned ghost village of Kuldhara holds centuries-old mysteries, and the Desert National Park protects the endangered Great Indian Bustard. Jaisalmer is Rajasthan at its most romantic and remote -- a place where golden sunsets paint the desert in shades of fire and ancient legends come alive.</p>
            <div className="flex justify-center gap-6 mt-8 text-center relative">
              {[{ val: "1156 AD", label: "Year Founded" }, { val: "3,000+", label: "Fort Residents" }, { val: "780 km", label: "From Delhi" }].map((s, i) => (
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
          <h2 className="text-3xl font-bold text-stone-800 mb-2">Best Time to Visit Jaisalmer</h2>
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
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs"><div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-emerald-500" /> Best (Oct-Mar)</div><div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-amber-400" /> Okay (Jul-Sep)</div><div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-red-400" /> Avoid (Apr-Jun)</div></div>
        </div>
      </section>

      {/* ATTRACTIONS */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2"><div className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider">CHAPTER 2</div></div>
          <h2 className="text-3xl font-bold text-stone-800 mb-10">Top Attractions in Jaisalmer</h2>
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
          <h2 className="text-3xl font-bold text-stone-800 mb-2">Jaisalmer Food Guide</h2>
          <p className="text-stone-500 mb-10">Desert cuisine born from centuries of resourcefulness and Marwari ingenuity</p>
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
          <h2 className="text-3xl font-bold text-stone-800 mb-10">Shopping in Jaisalmer</h2>
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
          <h2 className="text-3xl font-bold text-stone-800 mb-8">Getting Around Jaisalmer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[{ mode: "Triveni Cabs (Private Taxi)", price: "&#8377;2,500-4,000/day", desc: "AC car with driver. Essential for Sam Dunes (42 km), Kuldhara, and Desert National Park. Delhi-Jaisalmer one way from &#8377;10,000. Call 7668570551.", highlight: true }, { mode: "Auto-rickshaw", price: "&#8377;30-150/trip", desc: "Available in city for short distances. Good for fort to market trips. Negotiate fare before boarding. Limited availability after dark.", highlight: false }, { mode: "Jeep Safari", price: "&#8377;2,000-5,000/trip", desc: "For desert excursions to Sam Dunes and remote villages. Can be booked through our cab service for the best rates and reliable vehicles.", highlight: false }, { mode: "Camel Safari", price: "&#8377;500-3,000/trip", desc: "The traditional Thar Desert transport. Half-day to multi-day safaris available. Best booked as part of a desert camp package.", highlight: false }].map((t, idx) => (
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
          <h2 className="text-3xl font-bold text-stone-800 mb-10">Where to Stay in Jaisalmer</h2>
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
            {[{ href: "/jodhpur-travel-guide", title: "Jodhpur Travel Guide", desc: "Blue City & Mehrangarh" }, { href: "/jaipur-travel-guide", title: "Jaipur Travel Guide", desc: "Pink City" }, { href: "/udaipur-travel-guide", title: "Udaipur Travel Guide", desc: "City of Lakes" }, { href: "/agra-travel-guide", title: "Agra Travel Guide", desc: "Taj Mahal & more" }, { href: "/shimla-travel-guide", title: "Shimla Travel Guide", desc: "Queen of Hills" }, { href: "/manali-travel-guide", title: "Manali Travel Guide", desc: "Mountain adventure" }, { href: "/varanasi-travel-guide", title: "Varanasi Travel Guide", desc: "Spiritual capital" }, { href: "/amritsar-travel-guide", title: "Amritsar Travel Guide", desc: "Golden Temple city" }, { href: "/sightseeing", title: "All Sightseeing Tours", desc: "Complete tour list" }].map((link, idx) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Help Planning Your Jaisalmer Trip?</h2>
          <p className="text-amber-100/80 mb-8 text-lg">Golden Fort exploration, Sam Sand Dunes desert safari, and the complete Rajasthan experience -- we arrange it all.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-gold 2s ease-in-out infinite' }}><Phone className="w-5 h-5" /> Call: 7668570551</Link>
            <Link href="https://wa.me/917668570551?text=I want to book a cab for Jaisalmer trip" className="inline-flex items-center justify-center gap-2 bg-amber-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-400/30 hover:bg-amber-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">WhatsApp Us <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
    </div>
  </>);
}
