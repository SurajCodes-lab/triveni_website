import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, Calendar, Sunrise, Camera, Coffee, ShoppingBag, Thermometer, Hotel, Landmark, Compass, BookOpen, Scroll } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Shimla Travel Guide 2026 | Queen of Hills, Mall Road & Kufri',
  description: 'Complete Shimla travel guide 2026. Mall Road, Jakhu Temple, Kufri, Christ Church, best time to visit, food, snow tips. Call 7668570551.',
  keywords: 'shimla travel guide, shimla tourist guide, queen of hills, shimla sightseeing, shimla tourism, things to do in shimla, shimla snow',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/shimla-travel-guide' },
  openGraph: { title: 'Shimla Travel Guide 2026 | Queen of Hills', description: 'Everything about visiting Shimla. Mall Road, Jakhu, Kufri, food, transport.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/shimla-travel-guide', siteName: 'Triveni Cabs', images: [{ url: '/images/shimla-hero.jpg', width: 1200, height: 630, alt: 'Shimla Travel Guide 2026' }] },
  twitter: { card: 'summary_large_image', title: 'Shimla Travel Guide 2026', description: 'Complete Shimla guide. Hills, snow, food, transport.', creator: '@trivenicabs', site: '@trivenicabs', images: ['/images/shimla-hero.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function ShimlaTravelGuidePage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
    { "@type": "ListItem", "position": 2, "name": "Shimla Travel Guide", "item": "https://www.trivenicabs.in/shimla-travel-guide" },
  ]};

  const faqData = [
    { question: "How many days do I need in Shimla?", answer: "2-3 days is ideal. Day 1: Mall Road, The Ridge, Christ Church, Jakhu Temple. Day 2: Kufri, Green Valley, Mashobra. Day 3: Toy Train to Kalka, Chadwick Falls, or day trip to Narkanda/Chail. Add days for Kinnaur or Spiti extensions." },
    { question: "What is the best time to visit Shimla?", answer: "March to June for pleasant summer weather (15-30 degrees). December to February for snowfall experience. Peak tourist season is May-June and Christmas-New Year. September-November is peaceful with clear mountain views. Avoid monsoon (Jul-Aug) due to landslides." },
    { question: "How do I reach Shimla from Delhi?", answer: "By car: 7-8 hours via Chandigarh (350 km). Our Delhi-Shimla cab costs 6,000-8,000 rupees one way. By train: Kalka Shatabdi + Toy Train (scenic 5-hour narrow gauge). By bus: HRTC Volvo (10 hrs). By flight: Shimla airport at Jubbarhatti (limited flights)." },
    { question: "Does it snow in Shimla?", answer: "Yes! Shimla receives snowfall typically between December and February. January sees the heaviest snow. Kufri and higher areas get more snow than Shimla town. Roads can be blocked during heavy snowfall, so keep extra days flexible." },
    { question: "What food is Shimla famous for?", answer: "Shimla is known for Siddu (steamed stuffed bread), Tudkiya Bhath (spiced rice), Madra (chickpea curry), Dham (festive feast), and Babru (black gram kachori). The Mall Road has excellent cafes serving continental and Himachali food." },
    { question: "Is Shimla expensive?", answer: "Shimla ranges from budget to luxury. Budget: 1,500-3,000 rupees per day (guesthouses, local food). Mid-range: 4,000-8,000 per day (3-star hotels, restaurants). Luxury: 12,000+ per day (Wildflower Hall, Oberoi Cecil). Prices spike during peak season and New Year." },
    { question: "What should I buy in Shimla?", answer: "Himachali shawls and woollens (Lakkar Bazaar), wooden crafts, Kullu caps, apple products (juice, cider, jam), and Himachali pickles. The Mall Road and Lakkar Bazaar are the main shopping areas." },
    { question: "Can I combine Shimla with Manali?", answer: "Yes! Shimla-Manali is a classic Himachal circuit. The road distance is 250 km (8-10 hours). We offer Shimla-Kullu-Manali packages starting from 15,000 rupees for 5-6 days. The route passes through beautiful Mandi and Kullu valleys." },
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };

  const attractions = [
    { name: "The Ridge & Mall Road", desc: "Shimla&apos;s iconic promenade -- a flat open space with panoramic mountain views. Mall Road is the main pedestrian shopping street. The heart of Shimla&apos;s social life.", entry: "Free", timing: "All day", duration: "2-3 hours", icon: Compass },
    { name: "Christ Church", desc: "Second oldest church in North India, built in 1857. Neo-Gothic architecture with stunning stained glass windows. Located at The Ridge -- Shimla&apos;s most photographed landmark.", entry: "Free", timing: "8:00 AM - 6:00 PM", duration: "30 min", icon: Landmark },
    { name: "Jakhu Temple", desc: "Ancient Hanuman temple at 2,455m -- highest point in Shimla. 108-foot Hanuman statue visible from everywhere. Steep 2 km trek or ropeway available. Beware of monkeys.", entry: "Free (Ropeway ₹500)", timing: "5:00 AM - 9:00 PM", duration: "1.5-2 hours", icon: Landmark },
    { name: "Kufri", desc: "Popular hill station 16 km from Shimla at 2,622m. Horse riding, yak rides, skiing in winter, and Himalayan Nature Park. Best for snow during December-February.", entry: "₹50-200 (activities)", timing: "All day", duration: "3-4 hours", icon: Camera },
    { name: "Toy Train (Kalka-Shimla Railway)", desc: "UNESCO World Heritage railway -- 96 km narrow gauge track through 102 tunnels and 800+ bridges. One of the most scenic train journeys in the world.", entry: "₹300-800 (class dependent)", timing: "Multiple departures", duration: "5-6 hours", icon: Car },
    { name: "Viceregal Lodge", desc: "Former summer residence of British Viceroys, now Indian Institute of Advanced Study. Magnificent Scottish baronial architecture set in vast botanical gardens.", entry: "₹40 Indian / ₹200 Foreign", timing: "10:00 AM - 5:00 PM", duration: "1-1.5 hours", icon: Shield },
    { name: "Chadwick Falls", desc: "Stunning 67-metre waterfall surrounded by dense deodar forest. 7 km from Shimla. Best visited during and after monsoon when water flow is at its peak.", entry: "Free", timing: "All day", duration: "1 hour", icon: Sunrise },
    { name: "Green Valley", desc: "Lush valley on the Shimla-Kufri road surrounded by deodar and pine trees. Known as the &quot;jewel of Shimla&quot;. Popular photo stop and picnic area.", entry: "Free", timing: "All day", duration: "30-45 min", icon: Camera },
  ];

  const monthlyGuide = [
    { month: "Jan", temp: "-2-10°C", weather: "Snow!", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 88 },
    { month: "Feb", temp: "-1-12°C", weather: "Snow/Cold", crowd: "High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 82 },
    { month: "Mar", temp: "5-18°C", weather: "Spring", crowd: "Medium", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 85 },
    { month: "Apr", temp: "10-24°C", weather: "Pleasant", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 92 },
    { month: "May", temp: "15-28°C", weather: "Warm", crowd: "Very High", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 100 },
    { month: "Jun", temp: "18-30°C", weather: "Hot/Pre-rain", crowd: "Very High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 80 },
    { month: "Jul", temp: "16-25°C", weather: "Monsoon", crowd: "Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 15 },
    { month: "Aug", temp: "15-24°C", weather: "Heavy rain", crowd: "Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 10 },
    { month: "Sep", temp: "13-23°C", weather: "Rain ending", crowd: "Low-Med", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 55 },
    { month: "Oct", temp: "8-20°C", weather: "Clear, cool", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 90 },
    { month: "Nov", temp: "3-16°C", weather: "Cold, clear", crowd: "Medium", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 65 },
    { month: "Dec", temp: "-1-12°C", weather: "Cold/Snow", crowd: "Very High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 92 },
  ];

  const foodSection = [
    { name: "Siddu", desc: "Traditional Himachali steamed bread stuffed with poppy seeds or walnuts. Served with ghee and dal. A mountain comfort food par excellence.", icon: "\uD83E\uDED3" },
    { name: "Tudkiya Bhath", desc: "Himachali spiced rice dish cooked with lentils and seasonal vegetables. Slow-cooked with local spices -- a staple at Himachali feasts (Dham).", icon: "\uD83C\uDF5A" },
    { name: "Madra", desc: "Slow-cooked chickpea curry in yogurt gravy with Himachali spices. The centrepiece of any traditional Dham feast. Rich, aromatic, and unique.", icon: "\uD83C\uDF72" },
    { name: "Cafe Culture", desc: "Shimla has excellent cafes on Mall Road. Try Wake & Bake for pizza, Indian Coffee House (since 1957) for nostalgia, and Cafe Simla Times for views.", icon: "\u2615" },
    { name: "Momos & Thukpa", desc: "Tibetan influence in the hills -- steamed dumplings and noodle soup available everywhere. Best at street stalls near The Ridge and Lakkar Bazaar.", icon: "\uD83E\uDD5F" },
    { name: "Apple Products", desc: "Fresh apple juice, cider, jams, and dried fruits from Himachal&apos;s orchards. Available at shops along Mall Road. Perfect souvenirs to take home.", icon: "\uD83C\uDF4E" },
  ];

  const shoppingSection = [
    { name: "Himachali Shawls & Woollens", desc: "Pashmina, Kullu, and Kinnauri shawls in vibrant geometric patterns. Lakkar Bazaar and Mall Road have many shops. Check for handloom certification.", price: "₹500 - ₹30,000" },
    { name: "Wooden Crafts", desc: "Lakkar (wood) Bazaar is named for its wooden crafts. Walking sticks, carved boxes, trays, and toys made from Himalayan walnut and deodar wood.", price: "₹100 - ₹5,000" },
    { name: "Kullu Caps & Himachali Crafts", desc: "Traditional Himachali caps, metal jewellery, and local handicrafts. Authentic Kullu caps have specific weave patterns unique to each region.", price: "₹200 - ₹2,000" },
    { name: "Apple & Fruit Products", desc: "Apple juice, cider, jams, pickles, and dried fruits from Shimla&apos;s orchards. HPMC (government) outlet on Mall Road guarantees quality.", price: "₹100 - ₹1,500" },
  ];

  const areaGuide = [
    { area: "Mall Road / The Ridge", desc: "Prime location in the heart of Shimla. Walking distance to everything. Heritage hotels like Oberoi Cecil and Hotel Combermere. Premium pricing.", budget: "₹3,000-20,000/night" },
    { area: "Lakkar Bazaar / Lower Bazaar", desc: "More affordable area just below Mall Road. Budget to mid-range guesthouses. Close to bus stand and local markets. Steep walks required.", budget: "₹800-2,500/night" },
    { area: "Kufri Road (Mashobra)", desc: "Quiet outskirts with nature resorts and luxury properties. Wildflower Hall by Oberoi is here. Perfect for nature lovers seeking peace.", budget: "₹2,000-25,000/night" },
    { area: "ISBT / Cart Road Area", desc: "Budget zone near the bus terminal. Easy access for arrivals/departures. Basic but functional accommodation. 15-minute walk to Mall Road.", budget: "₹600-2,000/night" },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Hill Station Experts", desc: "We know every mountain road" },
    { icon: Landmark, title: "Queen of Hills", desc: "Former British summer capital" },
    { icon: Users, title: "7000+ Tourists Served", desc: "Himachal specialists" },
    { icon: Star, title: "4.9 Google Rating", desc: "Verified reviews" },
  ];

  const chapters = [
    { title: "Attractions", icon: Landmark, count: "8 Sites" },
    { title: "Best Time", icon: Thermometer, count: "12 Months" },
    { title: "Food Guide", icon: Coffee, count: "6 Specialties" },
    { title: "Shopping", icon: ShoppingBag, count: "4 Categories" },
    { title: "Stay Guide", icon: Hotel, count: "4 Areas" },
    { title: "Transport", icon: Car, count: "4 Options" },
  ];

  const cityName = "Shimla";
  const cityTagline = "The Queen of Hills -- colonial charm, snow-capped peaks, the iconic Toy Train, and Himalayan beauty at 2,276 metres above sea level.";
  const welcomeTitle = "Welcome to the Queen of Hills";
  const welcomeText = "Shimla, the capital of Himachal Pradesh, sits at an altitude of 2,276 metres amidst the majestic Himalayas. Once the summer capital of British India, Shimla retains its colonial character in its Gothic churches, Tudor architecture, and the unmistakable charm of Mall Road. The city cascades along a ridge, with every turn revealing breathtaking views of snow-dusted peaks, deep valleys, and dense deodar forests. The <strong>UNESCO-listed Kalka-Shimla Toy Train</strong> is one of the world&apos;s most scenic railway journeys, winding through 102 tunnels and over 800 bridges. Beyond its colonial heritage, Shimla is the gateway to deeper Himachal -- from the apple orchards of Narkanda to the skiing slopes of Kufri, from the wild beauty of Spiti Valley to the religious significance of Tattapani. Whether you seek a summer escape from the plains, a winter wonderland of fresh snowfall, or an adventure through the Himalayas, Shimla is the perfect starting point. Our drivers are experienced mountain road experts who ensure your safety and comfort on every hairpin bend.";
  const stats = [{ value: "2,276m", label: "Altitude" }, { value: "UNESCO", label: "Toy Train Heritage" }, { value: "3M+", label: "Visitors Yearly" }];
  const foodSubtitle = "Himachali mountain cuisine and colonial-era cafe culture";
  const bestTimeLegend = [{ color: "bg-emerald-500", label: "Best (Mar-Jun, Dec-Feb)" }, { color: "bg-amber-400", label: "Okay (Sep-Nov)" }, { color: "bg-red-400", label: "Avoid (Jul-Aug)" }];
  const transportOptions = [
    { mode: "Triveni Cabs (Private Taxi)", price: "₹2,500-4,000/day", desc: "AC car with experienced hill driver. Delhi to Shimla one-way from ₹6,000. Essential for Kufri, Mashobra, and outskirts. Call 7668570551.", highlight: true },
    { mode: "Local Taxi / Union Cab", price: "₹500-1,500/trip", desc: "Local union taxis for point-to-point trips. Available at Cart Road taxi stand. Fixed rates to popular destinations.", highlight: false },
    { mode: "Shimla Ropeway", price: "₹500 round trip", desc: "Cable car from The Ridge to Jakhu Temple. Quick, scenic alternative to the steep trek. Operates weather permitting.", highlight: false },
    { mode: "Walking", price: "Free", desc: "Mall Road is pedestrian-only. Most of central Shimla is best explored on foot. Be prepared for steep walks and stairs.", highlight: false },
  ];
  const interlinks = [
    { href: "/manali-travel-guide", title: "Manali Travel Guide", desc: "Mountain adventure" },
    { href: "/dharamshala-travel-guide", title: "Dharamshala Travel Guide", desc: "Little Lhasa" },
    { href: "/mussoorie-travel-guide", title: "Mussoorie Travel Guide", desc: "Queen of Hills (UK)" },
    { href: "/nainital-travel-guide", title: "Nainital Travel Guide", desc: "Lake District" },
    { href: "/rishikesh-travel-guide", title: "Rishikesh Travel Guide", desc: "Yoga Capital" },
    { href: "/kashmir-travel-guide", title: "Kashmir Travel Guide", desc: "Paradise on Earth" },
    { href: "/sightseeing", title: "All Sightseeing Tours", desc: "Complete tour list" },
    { href: "/jaipur-travel-guide", title: "Jaipur Travel Guide", desc: "Pink City" },
    { href: "/agra-travel-guide", title: "Agra Travel Guide", desc: "Taj Mahal & more" },
  ];
  const ctaTitle = "Need Help Planning Your Shimla Trip?";
  const ctaDesc = "Expert mountain drivers, customized itineraries, and Himachal travel advice -- all one call away.";
  const whatsappMsg = "I want to book a cab for Shimla trip";

  return (
    <>
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
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/20 rounded-full blur-[120px]" style={{ animation: 'float 8s ease-in-out infinite' }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-600/15 rounded-full blur-[100px]" style={{ animation: 'float 10s ease-in-out infinite 2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px]" style={{ animation: 'float 12s ease-in-out infinite 4s' }} />
          <div className="absolute top-[15%] left-[10%] w-3 h-3 bg-amber-400/40 rounded-full" style={{ animation: 'float 6s ease-in-out infinite' }} />
          <div className="absolute top-[25%] right-[15%] w-2 h-2 bg-yellow-400/50 rounded-full" style={{ animation: 'float 7s ease-in-out infinite 1s' }} />
          <div className="absolute bottom-[30%] left-[20%] w-2 h-2 bg-amber-300/60 rounded-full" style={{ animation: 'float 5s ease-in-out infinite 2s' }} />
          <div className="absolute top-[60%] right-[25%] w-3 h-3 bg-yellow-300/30 rounded-full" style={{ animation: 'float 8s ease-in-out infinite 3s' }} />
          <div className="absolute bottom-[20%] right-[10%] w-2 h-2 bg-orange-300/40 rounded-full" style={{ animation: 'float 6s ease-in-out infinite 4s' }} />
          <div className="absolute top-[40%] left-[5%] w-1.5 h-1.5 bg-amber-200/50 rounded-full" style={{ animation: 'float 9s ease-in-out infinite 1.5s' }} />

          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-md px-6 py-2 rounded-full mb-6 border border-amber-400/30">
              <Scroll className="w-4 h-4 text-amber-300" />
              <span className="text-amber-200 font-semibold text-sm tracking-[0.2em] uppercase">The Complete Encyclopedia</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight tracking-tight">
              {cityName} Travel <span className="shimmer-gold">Guide</span>
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500/60" />
              <span className="text-amber-400 font-semibold tracking-widest text-sm">2026 EDITION</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500/60" />
            </div>
            <p className="text-lg md:text-xl text-amber-100/70 mb-10 max-w-3xl mx-auto leading-relaxed font-light">{cityTagline}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 transition-all duration-500">
                <Phone className="w-5 h-5" /> Call Now: 7668570551
              </Link>
              <Link href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-500/30 hover:bg-white/20 hover:scale-105 transition-all duration-500">
                WhatsApp Us
              </Link>
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
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Table of Contents</h2>
              <p className="text-stone-500">Your chapter-by-chapter guide to the Queen of Hills</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {chapters.map((ch, i) => (
                <div key={i} className="glass-card-light rounded-xl p-4 text-center hover-lift cursor-default group">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mb-3 group-hover:from-amber-200 group-hover:to-orange-200 transition-all">
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
            <div className="glass-card-light rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-amber-200/40 to-transparent rounded-br-full" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-orange-200/40 to-transparent rounded-tl-full" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold tracking-wider shadow-lg">CHAPTER 0</div>
              <h2 className="text-3xl font-bold text-stone-800 mb-6 text-center mt-4 relative">{welcomeTitle}</h2>
              <p className="text-lg text-stone-600 leading-relaxed text-center relative" dangerouslySetInnerHTML={{ __html: welcomeText }} />
              <div className="flex justify-center gap-8 mt-8 text-center relative">
                {stats.map((s, i) => (
                  <div key={i} className="flex items-center gap-4">
                    {i > 0 && <div className="w-px h-12 bg-amber-200" />}
                    <div>
                      <div className="glass-card-light rounded-xl px-4 py-2 mb-1"><div className="text-2xl md:text-3xl font-bold text-amber-700">{s.value}</div></div>
                      <div className="text-xs text-stone-500 mt-1">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BEST TIME */}
        <section className="py-16 px-4 bg-white/80">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">CHAPTER 1</div>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-2">Best Time to Visit {cityName}</h2>
            <p className="text-stone-500 mb-10">Visual month-by-month guide -- taller bars mean better visiting conditions</p>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 mb-8">
              {monthlyGuide.map((m, i) => (
                <div key={i} className="flex flex-col items-center group cursor-default">
                  <div className="w-full h-32 flex items-end mb-2 relative">
                    <div
                      className={`w-full rounded-t-lg transition-all duration-500 group-hover:opacity-80 group-hover:scale-105 origin-bottom ${m.bar > 75 ? 'bg-gradient-to-t from-emerald-600 to-emerald-400' : m.bar > 40 ? 'bg-gradient-to-t from-amber-500 to-amber-300' : 'bg-gradient-to-t from-red-400 to-red-300'}`}
                      style={{ height: `${m.bar}%` }}
                    />
                  </div>
                  <div className="text-xs font-bold text-stone-700">{m.month}</div>
                  <div className="text-[10px] text-stone-400">{m.temp}</div>
                  <div className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full mt-1 ${m.color}`}>{m.verdict}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
              {bestTimeLegend.map((l, i) => (
                <div key={i} className="flex items-center gap-1.5"><div className={`w-3 h-3 rounded ${l.color}`} /> {l.label}</div>
              ))}
            </div>
          </div>
        </section>

        {/* ATTRACTIONS */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">CHAPTER 2</div>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-10">Top Attractions in {cityName}</h2>
            <div className="space-y-5">
              {attractions.map((a, idx) => (
                <div key={idx} className="glass-card-light rounded-3xl overflow-hidden hover-lift group">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-20 bg-gradient-to-b from-amber-600 to-orange-600 flex items-center justify-center py-4 md:py-0">
                      <span className="text-3xl font-bold text-white/80">{String(idx + 1).padStart(2, '0')}</span>
                    </div>
                    <div className="flex-1 p-6">
                      <h3 className="text-xl font-bold text-stone-800 flex items-center gap-2 mb-2">
                        <a.icon className="w-5 h-5 text-amber-600" /> {a.name}
                      </h3>
                      <p className="text-stone-600 mb-4">{a.desc}</p>
                      <div className="flex flex-wrap gap-2 text-sm">
                        <span className="bg-gradient-to-r from-amber-50 to-orange-50 backdrop-blur-sm border border-amber-200/60 px-3 py-1.5 rounded-full text-amber-800 font-medium">Entry: {a.entry}</span>
                        <span className="bg-gradient-to-r from-blue-50 to-sky-50 backdrop-blur-sm border border-blue-200/60 px-3 py-1.5 rounded-full text-blue-700 font-medium"><Clock className="w-3 h-3 inline mr-1" />{a.timing}</span>
                        <span className="bg-gradient-to-r from-emerald-50 to-green-50 backdrop-blur-sm border border-emerald-200/60 px-3 py-1.5 rounded-full text-emerald-700 font-medium">{a.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FOOD */}
        <section className="py-16 px-4 bg-gradient-to-br from-orange-50/80 to-amber-50/80">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">CHAPTER 3</div>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-2">{cityName} Food Guide</h2>
            <p className="text-stone-500 mb-10">{foodSubtitle}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {foodSection.map((food, idx) => (
                <div key={idx} className="glass-card-light rounded-2xl p-5 hover-lift relative overflow-hidden group">
                  <div className="absolute -top-4 -right-4 text-7xl opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">{food.icon}</div>
                  <h3 className="font-bold text-stone-800 mb-2 flex items-center gap-2 relative">
                    <Coffee className="w-4 h-4 text-amber-600" /> {food.name}
                  </h3>
                  <p className="text-stone-600 text-sm relative">{food.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SHOPPING */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">CHAPTER 4</div>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-10">Shopping in {cityName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {shoppingSection.map((item, idx) => (
                <div key={idx} className="glass-card-light rounded-2xl p-6 hover-lift">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-stone-800 flex items-center gap-2"><ShoppingBag className="w-4 h-4 text-amber-600" /> {item.name}</h3>
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-md">{item.price}</span>
                  </div>
                  <p className="text-stone-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRANSPORT */}
        <section className="py-16 px-4 bg-white/80">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">CHAPTER 5</div>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-8">Getting Around {cityName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {transportOptions.map((t, idx) => (
                <div key={idx} className={`rounded-2xl p-5 transition-all duration-500 ${t.highlight ? 'glass-card-light border-2 border-amber-400 shadow-xl relative overflow-hidden' : 'glass-card-light hover:border-amber-200'}`}>
                  {t.highlight && <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 opacity-50" />}
                  <div className="relative">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-stone-800">{t.mode}</h3>
                      {t.highlight && <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md" style={{ animation: 'pulse-gold 2s ease-in-out infinite' }}>RECOMMENDED</span>}
                    </div>
                    <p className="text-amber-700 font-bold text-sm mb-1">{t.price}</p>
                    <p className="text-stone-600 text-sm">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STAY */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">CHAPTER 6</div>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-10">Where to Stay in {cityName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {areaGuide.map((a, idx) => (
                <div key={idx} className="glass-card-light rounded-2xl overflow-hidden hover-lift">
                  <div className="h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500" />
                  <div className="bg-gradient-to-r from-amber-600 to-orange-600 px-5 py-3 flex items-center justify-between">
                    <h3 className="font-bold text-white flex items-center gap-2"><Hotel className="w-4 h-4" /> {a.area}</h3>
                    <span className="text-amber-100 text-sm font-medium bg-white/10 px-3 py-0.5 rounded-full">{a.budget}</span>
                  </div>
                  <div className="p-5"><p className="text-stone-600 text-sm">{a.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-white/80">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">APPENDIX</div>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, idx) => (
                <div key={idx} className="border-l-4 border-amber-500 glass-card-light rounded-r-2xl p-6 hover:border-amber-400 hover:shadow-lg transition-all duration-500">
                  <h3 className="text-lg font-bold text-stone-800 mb-2 flex items-start gap-2">
                    <span className="bg-gradient-to-br from-amber-500 to-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 shadow-md">Q{idx + 1}</span>
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
            <p className="text-stone-500 text-center mb-8 text-sm">Related guides and tour pages from our collection</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {interlinks.map((link, idx) => (
                <Link key={idx} href={link.href} className="glass-card-light flex items-center gap-3 p-4 rounded-xl hover:border-amber-400/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 group">
                  <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-2.5 group-hover:from-amber-200 group-hover:to-orange-200 transition-all">
                    <ChevronRight className="w-4 h-4 text-amber-700 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-800 text-sm group-hover:text-amber-700 transition-colors">{link.title}</div>
                    <div className="text-xs text-stone-400">{link.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-700 via-orange-600 to-yellow-700" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 10s ease infinite' }} />
          <div className="absolute top-[20%] left-[10%] w-3 h-3 bg-white/20 rounded-full" style={{ animation: 'float 6s ease-in-out infinite' }} />
          <div className="absolute top-[60%] right-[15%] w-2 h-2 bg-white/15 rounded-full" style={{ animation: 'float 8s ease-in-out infinite 2s' }} />
          <div className="absolute bottom-[30%] left-[30%] w-2 h-2 bg-white/10 rounded-full" style={{ animation: 'float 7s ease-in-out infinite 1s' }} />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='15' cy='15' r='1.5' fill='%23fff'/%3E%3C/svg%3E")` }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <Compass className="w-12 h-12 text-amber-200 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{ctaTitle}</h2>
            <p className="text-amber-100/80 mb-8 text-lg">{ctaDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-gold 2s ease-in-out infinite' }}>
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="inline-flex items-center justify-center gap-2 bg-amber-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-400/30 hover:bg-amber-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">
                WhatsApp Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
