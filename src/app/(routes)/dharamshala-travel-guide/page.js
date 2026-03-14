import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, Calendar, Sunrise, Camera, Coffee, ShoppingBag, Thermometer, Hotel, Landmark, Compass, BookOpen, Scroll, Mountain, TreePine } from '@/components/ui/icons';

export const metadata = { title: 'Dharamshala Travel Guide 2026 | Little Lhasa, Dalai Lama & Himalayan Paradise', description: 'Complete Dharamshala travel guide 2026. Tsuglagkhang Complex, McLeod Ganj, Bhagsu Waterfall, Triund Trek, Tibetan culture. Call 7668570551.', keywords: 'dharamshala travel guide, mcleod ganj, dalai lama temple, little lhasa, triund trek, dharamshala tourism, tibetan culture, kangra fort, himachal pradesh tourism', authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs', metadataBase: new URL('https://www.trivenicabs.in'), alternates: { canonical: '/dharamshala-travel-guide' }, openGraph: { title: 'Dharamshala Travel Guide 2026 | Little Lhasa & Beyond', description: 'Everything about visiting Dharamshala. Dalai Lama temple, McLeod Ganj, treks, Tibetan food, transport.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/dharamshala-travel-guide', siteName: 'Triveni Cabs', images: [{ url: '/images/dharamshala-hero.jpg', width: 1200, height: 630, alt: 'Dharamshala Travel Guide 2026' }] }, twitter: { card: 'summary_large_image', title: 'Dharamshala Travel Guide 2026', description: 'Complete Dharamshala guide. Dalai Lama temple, Tibetan culture, treks, food.', creator: '@trivenicabs', site: '@trivenicabs', images: ['/images/dharamshala-hero.jpg'] }, robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } } };
export const revalidate = false;

export default function DharamshalaTravelGuidePage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Dharamshala Travel Guide", "item": "https://www.trivenicabs.in/dharamshala-travel-guide" }] };
  const faqData = [
    { question: "How many days do I need in Dharamshala?", answer: "3-4 days is ideal. Day 1: Tsuglagkhang Complex, Tibet Museum, Namgyal Monastery. Day 2: Bhagsu Waterfall, Dharamkot, TIPA performance. Day 3: Triund Trek (can be done as day trek). Day 4: Kangra Fort, Dal Lake, local cafes. Add a day for Bir Billing (paragliding capital)." },
    { question: "What is the best time to visit Dharamshala?", answer: "March to June and September to November are best. March-June offers pleasant weather (15-30 degrees) and clear Himalayan views. September-November has post-monsoon clarity and fewer crowds. December-February brings snow in McLeod Ganj (beautiful but cold, 0-10 degrees). July-August is heavy monsoon -- avoid for trekking." },
    { question: "How do I reach Dharamshala from Delhi?", answer: "By car: 480 km, 9-10 hours via NH44 and NH503. Our cab costs &#8377;7,000-9,000 one way. By bus: HRTC Volvo overnight (12 hours). By train: Nearest station Pathankot (85 km), then 3 hours by road. By flight: Gaggal Airport (15 km from Dharamshala), limited flights from Delhi." },
    { question: "Can I meet the Dalai Lama in Dharamshala?", answer: "Public audiences happen periodically when His Holiness is in residence (usually spring and autumn). Check the official website dalailama.com for schedules. Teachings are announced in advance and free to attend. Even without an audience, the Tsuglagkhang Complex and Tibet Museum offer a profound experience." },
    { question: "Is Triund Trek difficult?", answer: "Triund is a moderate trek -- 9 km one way from McLeod Ganj, gaining 1,100 metres elevation. Takes 4-5 hours up and 3 hours down. No guide needed for the main trail. Camping at the top (2,875 m) offers stunning Dhauladhar views. Best from March to June and September to November. Carry water and snacks." },
    { question: "What food is Dharamshala famous for?", answer: "Tibetan cuisine dominates McLeod Ganj -- momos (steamed dumplings), thukpa (noodle soup), Tibetan bread with honey, thenthuk (hand-pulled noodle soup). The cafe culture is outstanding with wood-fired pizzas, Israeli food, and organic fare. Try butter tea for an authentic experience." },
    { question: "Is Dharamshala safe for solo travellers?", answer: "Very safe. McLeod Ganj is one of India&apos;s most backpacker-friendly destinations. Large international community, well-lit main streets, and helpful locals. Standard travel precautions apply for treks. The Tibetan community is exceptionally welcoming. Solo female travellers regularly visit without issues." },
    { question: "What should I buy in Dharamshala?", answer: "Tibetan handicrafts are the speciality -- prayer flags, singing bowls, thangka paintings, Tibetan rugs, turquoise jewellery, and Buddhist artefacts. McLeod Ganj main square and Jogiwara Road are the best shopping streets. Support Tibetan refugee cooperatives for authentic handmade items." },
  ];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };
  const attractions = [
    { name: "Tsuglagkhang Complex (Dalai Lama Temple)", desc: "The official residence of His Holiness the 14th Dalai Lama and the spiritual heart of Tibetan Buddhism in exile. Includes the main temple, Tibet Museum, Namgyal Monastery, and peaceful meditation gardens.", entry: "Free", timing: "5:00 AM - 8:00 PM", duration: "2-3 hours", icon: Landmark },
    { name: "McLeod Ganj", desc: "The vibrant hilltop town known as Little Lhasa. Bustling with Tibetan restaurants, backpacker cafes, handicraft shops, and Buddhist monasteries. The main square is the social hub of the Tibetan exile community.", entry: "Free", timing: "All day", duration: "Half day", icon: MapPin },
    { name: "Bhagsu Waterfall", desc: "A stunning 20-metre waterfall just 2 km from McLeod Ganj. Easy trek through pine forests. The ancient Bhagsunag Temple at the base is dedicated to Lord Shiva. Best visited after monsoon when flow is strongest.", entry: "Free", timing: "All day (morning best)", duration: "2-3 hours", icon: Sunrise },
    { name: "Triund Trek", desc: "The most popular trek in Dharamshala -- 9 km trail from McLeod Ganj to a ridge at 2,875 metres. Panoramic views of the Dhauladhar range and Kangra Valley. Camp overnight for a magical sunrise experience.", entry: "Free (camping &#8377;500-1,500)", timing: "Start early morning", duration: "Full day / overnight", icon: Mountain },
    { name: "Kangra Fort", desc: "One of the oldest and largest forts in India, dating back to the Trigarta Kingdom mentioned in the Mahabharata. Spread over 4 km of ramparts with stunning valley views. 20 km from Dharamshala.", entry: "&#8377;25 Indian / &#8377;200 Foreign", timing: "9:00 AM - 5:00 PM", duration: "1.5-2 hours", icon: Shield },
    { name: "Dal Lake", desc: "A serene lake surrounded by deodar cedars, not to be confused with Kashmir&apos;s famous namesake. Small but picturesque with a Shiva temple on its banks. Popular for picnics and quiet walks.", entry: "Free", timing: "All day", duration: "1 hour", icon: Camera },
    { name: "TIPA (Tibetan Institute of Performing Arts)", desc: "Founded in 1959 to preserve Tibetan opera, dance, and music. Hosts performances and the annual Shoton Festival. A rare window into Tibetan performing arts traditions kept alive in exile.", entry: "Free (performances &#8377;100-300)", timing: "Check schedule", duration: "1-2 hours", icon: Compass },
    { name: "Dharamshala Cricket Stadium (HPCA)", desc: "One of the world&apos;s most scenic cricket grounds at 1,457 metres elevation. Snow-capped Dhauladhar mountains form the backdrop. Hosts IPL matches and international cricket. Museum and cafe inside.", entry: "&#8377;50 (match days vary)", timing: "9:00 AM - 5:00 PM", duration: "1-1.5 hours", icon: Star },
  ];
  const monthlyGuide = [
    { month: "Jan", temp: "-2-10°C", weather: "Snow, cold", crowd: "Low", verdict: "OK (snow)", color: "bg-blue-100 text-blue-800", bar: 35 },
    { month: "Feb", temp: "0-12°C", weather: "Cold, snow", crowd: "Low-Med", verdict: "OK (snow)", color: "bg-blue-100 text-blue-800", bar: 40 },
    { month: "Mar", temp: "5-18°C", weather: "Spring bloom", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 88 },
    { month: "Apr", temp: "10-23°C", weather: "Pleasant", crowd: "Very High", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 95 },
    { month: "May", temp: "14-28°C", weather: "Warm", crowd: "Very High", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 100 },
    { month: "Jun", temp: "17-30°C", weather: "Hot, pre-rain", crowd: "High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 78 },
    { month: "Jul", temp: "18-26°C", weather: "Heavy rain", crowd: "Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 12 },
    { month: "Aug", temp: "17-25°C", weather: "Peak monsoon", crowd: "Very Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 10 },
    { month: "Sep", temp: "14-24°C", weather: "Rain ending", crowd: "Low-Med", verdict: "Good", color: "bg-amber-100 text-amber-800", bar: 55 },
    { month: "Oct", temp: "9-22°C", weather: "Clear, crisp", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 92 },
    { month: "Nov", temp: "4-17°C", weather: "Cool, clear", crowd: "Moderate", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 80 },
    { month: "Dec", temp: "0-12°C", weather: "Cold, snow", crowd: "Low-Med", verdict: "OK (snow)", color: "bg-blue-100 text-blue-800", bar: 38 },
  ];
  const foodSection = [
    { name: "Tibetan Momos", desc: "Steamed or fried dumplings stuffed with vegetables, chicken, or pork. Every restaurant in McLeod Ganj serves them. Lhamo&apos;s Kitchen and Tibet Kitchen are local legends.", icon: "🥟" },
    { name: "Thukpa & Thenthuk", desc: "Hearty Tibetan noodle soups perfect for cold mountain evenings. Thukpa has thin noodles in spiced broth, while thenthuk features hand-pulled flat noodles. Comfort food at its finest.", icon: "🍜" },
    { name: "Tibetan Bread & Butter Tea", desc: "Freshly baked Tibetan bread served with honey or jam. Pair with po cha (butter tea) -- salted tea churned with yak butter. An acquired taste but a must-try cultural experience.", icon: "🫓" },
    { name: "Cafe Culture", desc: "McLeod Ganj has a thriving cafe scene -- wood-fired pizzas, Israeli shakshuka, banana pancakes, fresh juices, and artisan coffee. Illiterati Cafe, Moonpeak Espresso, and Jimmy&apos;s Italian Kitchen are favourites.", icon: "☕" },
    { name: "Organic & Vegan Food", desc: "Dharamshala is a hub for organic, vegan, and health-conscious dining. Many cafes grow their own herbs. Fresh salads, kombucha, and wholesome bowls are widely available in Dharamkot.", icon: "🥗" },
    { name: "Kumaoni & Himachali Cuisine", desc: "Local Himachali dishes like siddu (steamed bread with walnut paste), dham (festive platter), and madra (chickpea curry in yoghurt gravy). Available at Himachali dhabas in lower Dharamshala.", icon: "🍛" },
  ];
  const shoppingSection = [
    { name: "Tibetan Handicrafts & Prayer Flags", desc: "Colourful prayer flags, Buddhist prayer wheels, incense, and handcrafted jewellery. The Tibetan Handicraft Centre near Tsuglagkhang is the most authentic source. Every purchase supports the exile community.", price: "&#8377;50 - &#8377;5,000" },
    { name: "Singing Bowls & Meditation Items", desc: "Handmade Tibetan singing bowls, meditation cushions, mala beads, and Buddhist scripture. McLeod Ganj main square has several speciality shops. Ask for a demonstration before buying.", price: "&#8377;500 - &#8377;15,000" },
    { name: "Thangka Paintings", desc: "Intricate Buddhist scroll paintings on cotton or silk. Hand-painted by trained Tibetan artists. Norbulingka Institute near Dharamshala sells museum-quality pieces and you can watch artists at work.", price: "&#8377;1,000 - &#8377;50,000" },
    { name: "Tibetan Rugs & Woolens", desc: "Hand-knotted Tibetan rugs with traditional dragon and cloud motifs. Also woollen shawls, scarves, and jackets perfect for mountain weather. Tibetan Women&apos;s Co-operative has excellent selection.", price: "&#8377;300 - &#8377;25,000" },
  ];
  const areaGuide = [
    { area: "McLeod Ganj", desc: "The main tourist hub. Walking distance to Tsuglagkhang Complex, restaurants, and shops. Vibrant nightlife and backpacker atmosphere. Can be crowded in peak season but unbeatable for convenience.", budget: "&#8377;500-5,000/night" },
    { area: "Dharamkot", desc: "Quiet hilltop village above McLeod Ganj. Popular with yogis, meditators, and long-term travellers. Stunning valley views. Organic cafes and yoga centres. 2 km uphill walk from McLeod Ganj.", budget: "&#8377;400-3,000/night" },
    { area: "Bhagsu", desc: "Adjacent to McLeod Ganj, slightly quieter. Close to Bhagsu Waterfall. Good mix of budget hostels and mid-range hotels. Laid-back vibe with many cafes and rooftop restaurants.", budget: "&#8377;400-4,000/night" },
    { area: "Lower Dharamshala", desc: "The main city 2 km below McLeod Ganj. More Indian town feel with bazaars and local food. Budget-friendly hotels. Better for visiting Kangra Fort and cricket stadium. Less touristy.", budget: "&#8377;300-3,000/night" },
  ];
  const trustFeatures = [{ icon: Mountain, title: "Himalayan Experts", desc: "Hill station specialists" }, { icon: Landmark, title: "Little Lhasa", desc: "Tibetan spiritual hub" }, { icon: Users, title: "4000+ Trips Done", desc: "Dharamshala tour experts" }, { icon: Star, title: "4.9 Google Rating", desc: "Verified reviews" }];
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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight tracking-tight">Dharamshala Travel <span className="shimmer-gold">Guide</span></h1>
          <div className="flex items-center justify-center gap-4 mb-6"><div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500/60" /><span className="text-amber-400 font-semibold tracking-widest text-sm">2026 EDITION</span><div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500/60" /></div>
          <p className="text-lg md:text-xl text-amber-100/70 mb-10 max-w-3xl mx-auto leading-relaxed font-light">Little Lhasa of India -- the Dalai Lama&apos;s sacred seat, Himalayan treks into the Dhauladhar range, and the soul of Tibetan culture in exile.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 transition-all duration-500"><Phone className="w-5 h-5" /> Call Now: 7668570551</Link>
            <Link href="https://wa.me/917668570551?text=I want to book a cab for Dharamshala trip" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-500/30 hover:bg-white/20 hover:scale-105 transition-all duration-500">WhatsApp Us</Link>
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
          <div className="text-center mb-10"><h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Table of Contents</h2><p className="text-stone-500">Your chapter-by-chapter guide to Little Lhasa</p></div>
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
            <h2 className="text-3xl font-bold text-stone-800 mb-6 text-center mt-4 relative">Welcome to Little Lhasa</h2>
            <p className="text-lg text-stone-600 leading-relaxed text-center relative">Dharamshala, nestled in the Kangra Valley at the foot of the mighty Dhauladhar range, is a place where Himalayan grandeur meets Tibetan spiritual depth. Since 1960, when His Holiness the 14th Dalai Lama established the Tibetan Government-in-Exile here, Dharamshala -- particularly its upper town McLeod Ganj -- has become the global centre of Tibetan Buddhism and culture. Known as Little Lhasa, this hillside sanctuary hums with the sound of prayer wheels, the aroma of steaming momos, and the quiet devotion of monks in maroon robes. The Tsuglagkhang Complex, the Dalai Lama&apos;s official residence and temple, draws seekers from around the world. Beyond the spiritual, Dharamshala offers some of Himachal Pradesh&apos;s finest trekking -- the Triund ridge trail rewards with panoramic views of snow-capped peaks and the Kangra Valley stretching to the plains below. The ancient Kangra Fort, one of India&apos;s oldest, adds historical depth to a destination that is at once peaceful, adventurous, and profoundly meaningful. Whether you come for meditation, trekking, cafe hopping, or simply the crisp mountain air, Dharamshala leaves an indelible mark on every traveller.</p>
            <div className="flex justify-center gap-6 mt-8 text-center relative">
              {[{ val: "1960", label: "Dalai Lama Arrived" }, { val: "2,082 m", label: "McLeod Ganj Altitude" }, { val: "150K+", label: "Tibetans in Exile" }].map((s, i) => (
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
          <h2 className="text-3xl font-bold text-stone-800 mb-2">Best Time to Visit Dharamshala</h2>
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
          <h2 className="text-3xl font-bold text-stone-800 mb-10">Top Attractions in Dharamshala</h2>
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
          <h2 className="text-3xl font-bold text-stone-800 mb-2">Dharamshala Food Guide</h2>
          <p className="text-stone-500 mb-10">Tibetan soul food and Himalayan cafe culture at its finest</p>
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
          <h2 className="text-3xl font-bold text-stone-800 mb-10">Shopping in Dharamshala</h2>
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
          <h2 className="text-3xl font-bold text-stone-800 mb-8">Getting Around Dharamshala</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[{ mode: "Triveni Cabs (Private Taxi)", price: "&#8377;2,000-3,500/day", desc: "AC car with driver. Essential for Kangra Fort, Norbulingka, and airport transfers. Delhi-Dharamshala one way from &#8377;7,000. Call 7668570551.", highlight: true }, { mode: "Local Taxi / Shared Jeep", price: "&#8377;50-300/trip", desc: "Shared jeeps run between Lower Dharamshala and McLeod Ganj frequently. Private taxis for Bhagsu, Dharamkot. Negotiate fares in advance.", highlight: false }, { mode: "Auto-rickshaw", price: "&#8377;30-150/trip", desc: "Available in lower Dharamshala town. Good for short hops between bus stand and main bazaar. Limited service to McLeod Ganj.", highlight: false }, { mode: "Walking", price: "Free", desc: "McLeod Ganj, Bhagsu, and Dharamkot are best explored on foot. Most attractions within 2-3 km walking distance. Carry water and wear good shoes -- it is hilly!", highlight: false }].map((t, idx) => (
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
          <h2 className="text-3xl font-bold text-stone-800 mb-10">Where to Stay in Dharamshala</h2>
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
            {[{ href: "/shimla-travel-guide", title: "Shimla Travel Guide", desc: "Queen of Hills" }, { href: "/manali-travel-guide", title: "Manali Travel Guide", desc: "Mountain adventure" }, { href: "/amritsar-travel-guide", title: "Amritsar Travel Guide", desc: "Golden Temple & more" }, { href: "/mussoorie-travel-guide", title: "Mussoorie Travel Guide", desc: "Queen of Hills" }, { href: "/kashmir-travel-guide", title: "Kashmir Travel Guide", desc: "Paradise on Earth" }, { href: "/nainital-travel-guide", title: "Nainital Travel Guide", desc: "Lake City" }, { href: "/haridwar-travel-guide", title: "Haridwar Travel Guide", desc: "Gateway to Gods" }, { href: "/jaipur-travel-guide", title: "Jaipur Travel Guide", desc: "Pink City" }, { href: "/sightseeing", title: "All Sightseeing Tours", desc: "Complete tour list" }].map((link, idx) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Help Planning Your Dharamshala Trip?</h2>
          <p className="text-amber-100/80 mb-8 text-lg">Dalai Lama temple visit, Triund trek logistics, Kangra Valley exploration -- we arrange it all.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-gold 2s ease-in-out infinite' }}><Phone className="w-5 h-5" /> Call: 7668570551</Link>
            <Link href="https://wa.me/917668570551?text=I want to book a cab for Dharamshala trip" className="inline-flex items-center justify-center gap-2 bg-amber-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-400/30 hover:bg-amber-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">WhatsApp Us <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
    </div>
  </>);
}
