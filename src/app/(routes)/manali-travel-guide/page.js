import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, Calendar, Sunrise, Camera, Coffee, ShoppingBag, Thermometer, Hotel, Landmark, Compass, BookOpen, Scroll } from '@/components/ui/icons';

export const metadata = {
  title: 'Manali Travel Guide 2026 | Solang Valley, Rohtang Pass & Adventure',
  description: 'Complete Manali travel guide 2026. Solang Valley, Rohtang Pass, Hidimba Temple, Old Manali, best time, adventure sports. Call 7668570551.',
  keywords: 'manali travel guide, manali tourist guide, solang valley, rohtang pass, manali sightseeing, manali tourism, things to do in manali',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/manali-travel-guide' },
  openGraph: { title: 'Manali Travel Guide 2026 | Adventure in the Himalayas', description: 'Everything about visiting Manali. Adventure sports, temples, snow, food, transport.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/manali-travel-guide', siteName: 'Triveni Cabs', images: [{ url: '/images/manali-hero.jpg', width: 1200, height: 630, alt: 'Manali Travel Guide 2026' }] },
  twitter: { card: 'summary_large_image', title: 'Manali Travel Guide 2026', description: 'Complete Manali guide. Adventure, snow, temples, transport.', creator: '@trivenicabs', site: '@trivenicabs', images: ['/images/manali-hero.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function ManaliTravelGuidePage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Manali Travel Guide", "item": "https://www.trivenicabs.in/manali-travel-guide" }] };
  const faqData = [
    { question: "How many days do I need in Manali?", answer: "3-4 days is ideal. Day 1: Hadimba Temple, Manu Temple, Old Manali. Day 2: Solang Valley adventure sports. Day 3: Rohtang Pass or Atal Tunnel to Sissu. Day 4: Naggar Castle, Jogini Falls, hot springs at Vashisht. Add days for Kasol, Kheerganga, or Spiti Valley." },
    { question: "What is the best time to visit Manali?", answer: "April to June for summer escape (10-25 degrees). October to February for snow experiences. December-January sees heavy snowfall. Rohtang Pass opens May-October only. September-October has clear skies and fewer crowds. Avoid monsoon (Jul-Aug) due to landslides." },
    { question: "How do I reach Manali from Delhi?", answer: "By car: 12-14 hours via Chandigarh-Kullu (530 km). Our Delhi-Manali cab costs 8,000-10,000 rupees one way. By bus: HRTC Volvo overnight (14 hrs). By flight: Bhuntar airport (50 km from Manali, limited flights). We offer airport pickup." },
    { question: "Is Rohtang Pass open year-round?", answer: "No. Rohtang Pass (3,978m) is open only from May to mid-October. You need a permit (500 rupees per person, bookable online). Atal Tunnel has made Lahaul accessible year-round. Our drivers handle permit booking and know the best timing to avoid crowds." },
    { question: "What adventure activities are available?", answer: "Paragliding at Solang Valley (2,000-3,500 rupees), river rafting on Beas River (500-1,500 rupees), skiing in winter, zorbing, zip-lining, mountain biking, and trekking to Jogini Falls, Beas Kund, or Hampta Pass. We can arrange all activities." },
    { question: "What food is Manali famous for?", answer: "Siddu (steamed bread), Trout fish from local farms, Tibetan momos and thukpa, Himachali Dham feast, and a vibrant cafe culture in Old Manali. Try Lazy Dog, Drifters Cafe, or Johnson Bar for multi-cuisine food with mountain views." },
    { question: "Is Manali safe for solo travellers?", answer: "Yes, Manali is very safe and popular with solo travellers and backpackers. Old Manali has a thriving backpacker community. Standard precautions apply for mountain roads and adventure activities. Our experienced hill drivers ensure safe travel." },
    { question: "Can I visit Manali and Shimla together?", answer: "Yes! Shimla-Manali is a classic 5-7 day circuit. Distance is 250 km (8-10 hrs) through beautiful Kullu Valley. We offer Shimla-Manali combo packages from 15,000 rupees. The route via Mandi and Kullu is scenic but winding." },
  ];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };

  const attractions = [
    { name: "Solang Valley", desc: "Adventure sports hub 14 km from Manali. Paragliding, zorbing, skiing (winter), and the Solang gondola to 3,500m. Snow-capped peaks backdrop.", entry: "Free (activities paid)", timing: "9:00 AM - 5:00 PM", duration: "3-5 hours", icon: Compass },
    { name: "Rohtang Pass", desc: "Legendary mountain pass at 3,978m on the Manali-Leh highway. Snow walls, panoramic views, and high-altitude thrill. Permit required. Open May-October.", entry: "₹500 (permit)", timing: "Open 6 AM - 3 PM", duration: "Full day trip", icon: Sunrise },
    { name: "Hadimba Temple", desc: "Ancient cave temple from 1553 dedicated to Hidimba Devi. Unique pagoda-style wooden architecture surrounded by towering deodar forest.", entry: "Free", timing: "8:00 AM - 6:00 PM", duration: "45 min - 1 hr", icon: Landmark },
    { name: "Old Manali", desc: "Bohemian backpacker quarter across the Manalsu stream. Cafes, guesthouses, street art, and a laid-back vibe. The real soul of Manali for young travellers.", entry: "Free", timing: "All day", duration: "2-3 hours", icon: Camera },
    { name: "Jogini Falls", desc: "Beautiful waterfall reached via a 3 km trek from Vashisht village. Passes through apple orchards and pine forests. Rewarding and relatively easy trek.", entry: "Free", timing: "All day", duration: "3-4 hours (trek)", icon: Sunrise },
    { name: "Vashisht Hot Springs", desc: "Natural hot sulphur springs in Vashisht village with ancient Vashisht Temple. Public baths (free) and private baths available. Healing properties.", entry: "Free (pvt bath ₹50)", timing: "7:00 AM - 9:00 PM", duration: "1-1.5 hours", icon: Shield },
    { name: "Naggar Castle", desc: "500-year-old stone and wood castle, now a heritage hotel. Roerich Art Gallery nearby with paintings by Russian artist Nicholas Roerich. 21 km from Manali.", entry: "₹25 (castle) / ₹50 (gallery)", timing: "9:00 AM - 5:00 PM", duration: "1.5-2 hours", icon: Shield },
    { name: "Atal Tunnel", desc: "World&apos;s longest highway tunnel above 10,000 feet (9.02 km). Connects Manali to Lahaul-Spiti year-round. Engineering marvel opened in 2020.", entry: "Free", timing: "All day", duration: "Full day (Sissu trip)", icon: Car },
  ];

  const monthlyGuide = [
    { month: "Jan", temp: "-5-8°C", weather: "Heavy snow", crowd: "High", verdict: "Snow!", color: "bg-emerald-100 text-emerald-800", bar: 80 },
    { month: "Feb", temp: "-3-10°C", weather: "Snow", crowd: "High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 78 },
    { month: "Mar", temp: "2-16°C", weather: "Spring", crowd: "Medium", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 65 },
    { month: "Apr", temp: "5-22°C", weather: "Pleasant", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 90 },
    { month: "May", temp: "10-28°C", weather: "Warm", crowd: "Very High", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 100 },
    { month: "Jun", temp: "12-30°C", weather: "Hot (plains)", crowd: "Very High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 85 },
    { month: "Jul", temp: "14-25°C", weather: "Monsoon", crowd: "Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 12 },
    { month: "Aug", temp: "13-24°C", weather: "Heavy rain", crowd: "Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 10 },
    { month: "Sep", temp: "10-22°C", weather: "Rain ending", crowd: "Low-Med", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 55 },
    { month: "Oct", temp: "5-20°C", weather: "Clear, cool", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 92 },
    { month: "Nov", temp: "0-14°C", weather: "Cold", crowd: "Medium", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 60 },
    { month: "Dec", temp: "-4-8°C", weather: "Snow starts", crowd: "Very High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 88 },
  ];

  const foodSection = [
    { name: "Siddu", desc: "Steamed wheat bread stuffed with poppy seeds or walnuts, served with ghee and lentil dal. Traditional Himachali mountain comfort food.", icon: "\uD83E\uDED3" },
    { name: "Fresh Trout Fish", desc: "Manali&apos;s speciality -- locally farmed rainbow trout grilled or pan-fried. Try at Johnson&apos;s Cafe (since 1978) or Chopsticks restaurant.", icon: "\uD83D\uDC1F" },
    { name: "Tibetan Momos", desc: "Steamed or fried dumplings with veg or chicken filling. Available everywhere from street stalls to cafes. Old Manali has the best variety.", icon: "\uD83E\uDD5F" },
    { name: "Cafe Culture", desc: "Old Manali&apos;s cafes serve Israeli, Italian, and Indian fusion. Lazy Dog, Drifters Inn, and Bob&apos;s Cafe are legendary backpacker favourites.", icon: "\u2615" },
    { name: "Dham Feast", desc: "Traditional Himachali celebratory meal served on leaf plates. Multiple courses including madra, kadi, rice, and sweet rice. Ask locals for festive events.", icon: "\uD83C\uDF5B" },
    { name: "Apple Cider & Products", desc: "Kullu Valley apples make excellent cider, juice, and brandy. Try at local outlets or the HPMC shop. Fresh apple season is August-October.", icon: "\uD83C\uDF4E" },
  ];

  const shoppingSection = [
    { name: "Kullu Shawls & Woollens", desc: "Hand-woven Kullu shawls with distinctive geometric patterns. Mall Road and MNR Market have many shops. Look for the Woolmark label for authenticity.", price: "₹500 - ₹15,000" },
    { name: "Tibetan Handicrafts", desc: "Singing bowls, prayer flags, Buddhist artefacts, and turquoise jewellery. The Tibetan Market near Mall Road is the best spot.", price: "₹200 - ₹5,000" },
    { name: "Himachali Caps & Crafts", desc: "Traditional Himachali topi (cap), wooden crafts, and local honey. Manali Market and Old Manali shops offer authentic pieces.", price: "₹200 - ₹3,000" },
    { name: "Dried Fruits & Herbs", desc: "Walnuts, almonds, dried apricots, and medicinal herbs from the Himalayan valleys. Fresh and significantly cheaper than city prices.", price: "₹200 - ₹2,000" },
  ];

  const areaGuide = [
    { area: "Mall Road / New Manali", desc: "Central area with shops, restaurants, and bus stand. Most hotels are here. Convenient but can be crowded in peak season. Walking access to everything.", budget: "₹1,000-5,000/night" },
    { area: "Old Manali", desc: "Backpacker paradise across the river. Cafes, guesthouses, and a bohemian vibe. Quieter and more atmospheric. 10-minute drive from Mall Road.", budget: "₹500-3,000/night" },
    { area: "Log Huts / Club House Area", desc: "Government-run area with cottages and mid-range hotels. Close to nature, near Hadimba Temple. Good for families.", budget: "₹2,000-6,000/night" },
    { area: "Solang Valley Road", desc: "Resorts and luxury camps along the road to Solang. Snow views in winter. Private and spacious. Need a car for everything.", budget: "₹3,000-15,000/night" },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Mountain Road Experts", desc: "Experienced hill drivers" },
    { icon: Landmark, title: "Adventure Capital", desc: "Paragliding to skiing" },
    { icon: Users, title: "6000+ Tourists Served", desc: "Himachal specialists" },
    { icon: Star, title: "4.9 Google Rating", desc: "Verified reviews" },
  ];
  const chapters = [{ title: "Attractions", icon: Landmark, count: "8 Sites" }, { title: "Best Time", icon: Thermometer, count: "12 Months" }, { title: "Food Guide", icon: Coffee, count: "6 Specialties" }, { title: "Shopping", icon: ShoppingBag, count: "4 Categories" }, { title: "Stay Guide", icon: Hotel, count: "4 Areas" }, { title: "Transport", icon: Car, count: "4 Options" }];

  const cityName = "Manali";
  const cityTagline = "Himalayan adventure awaits -- snow-capped peaks, rushing rivers, ancient temples, and the thrill of India&apos;s adventure capital at 2,050 metres.";
  const welcomeTitle = "Welcome to Manali";
  const welcomeText = "Manali, nestled in the Kullu Valley of Himachal Pradesh at 2,050 metres, is where the Himalayas come alive with adventure, spirituality, and natural beauty. Once a quiet hill town on the ancient trade route to Central Asia, Manali has evolved into India&apos;s premier mountain destination. The town straddles the Beas River, with new Manali&apos;s bustling Mall Road on one side and Old Manali&apos;s bohemian charm on the other. From the adrenaline rush of <strong>paragliding over Solang Valley</strong> to the spiritual serenity of the 500-year-old Hadimba Temple, from the snow-covered Rohtang Pass to the healing hot springs of Vashisht, Manali offers something for every traveller. The 2020 opening of Atal Tunnel has transformed access to the Lahaul-Spiti Valley, making Manali the gateway to some of India&apos;s most remote and spectacular landscapes. Whether you are a backpacker seeking mountain trails, a couple looking for a romantic getaway, or a family wanting a summer escape from the plains, Manali delivers unforgettable experiences.";
  const stats = [{ value: "2,050m", label: "Altitude" }, { value: "500+", label: "Years of History" }, { value: "5M+", label: "Visitors Yearly" }];
  const foodSubtitle = "Himachali mountain cuisine meets international backpacker fare";
  const bestTimeLegend = [{ color: "bg-emerald-500", label: "Best (Apr-Jun, Oct-Feb)" }, { color: "bg-amber-400", label: "Okay (Mar, Sep)" }, { color: "bg-red-400", label: "Avoid (Jul-Aug)" }];
  const transportOptions = [
    { mode: "Triveni Cabs (Private Taxi)", price: "₹2,500-4,000/day", desc: "AC car with experienced hill driver. Delhi-Manali one way from ₹8,000. Essential for Rohtang, Solang, and Atal Tunnel trips. Call 7668570551.", highlight: true },
    { mode: "Local Taxi / Union Cab", price: "₹500-2,500/trip", desc: "Fixed-rate local taxis for point-to-point. Rohtang permit trips, Solang Valley, and Naggar available at fixed union rates.", highlight: false },
    { mode: "Auto-rickshaw", price: "₹50-150/trip", desc: "Available for short trips within Manali town. Good for Mall Road to Old Manali or Vashisht.", highlight: false },
    { mode: "Walking & Trekking", price: "Free", desc: "Mall Road, Old Manali, and Vashisht are walkable. Jogini Falls and Beas Kund accessible by trek.", highlight: false },
  ];
  const interlinks = [
    { href: "/shimla-travel-guide", title: "Shimla Travel Guide", desc: "Queen of Hills" },
    { href: "/dharamshala-travel-guide", title: "Dharamshala Travel Guide", desc: "Little Lhasa" },
    { href: "/kashmir-travel-guide", title: "Kashmir Travel Guide", desc: "Paradise on Earth" },
    { href: "/rishikesh-travel-guide", title: "Rishikesh Travel Guide", desc: "Yoga Capital" },
    { href: "/mussoorie-travel-guide", title: "Mussoorie Travel Guide", desc: "Queen of Hills (UK)" },
    { href: "/nainital-travel-guide", title: "Nainital Travel Guide", desc: "Lake District" },
    { href: "/sightseeing", title: "All Sightseeing Tours", desc: "Complete tour list" },
    { href: "/jaipur-travel-guide", title: "Jaipur Travel Guide", desc: "Pink City" },
    { href: "/agra-travel-guide", title: "Agra Travel Guide", desc: "Taj Mahal & more" },
  ];
  const ctaTitle = "Need Help Planning Your Manali Trip?";
  const ctaDesc = "Expert hill drivers, Rohtang permits, and customized Himachal itineraries -- just one call away.";
  const whatsappMsg = "I want to book a cab for Manali trip";

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

        <section className="py-16 px-4"><div className="max-w-5xl mx-auto"><div className="text-center mb-10"><h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Table of Contents</h2><p className="text-stone-500">Your chapter-by-chapter guide to the Himalayan adventure capital</p></div><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">{chapters.map((ch, i) => (<div key={i} className="glass-card-light rounded-xl p-4 text-center hover-lift cursor-default group"><div className="w-12 h-12 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mb-3 group-hover:from-amber-200 group-hover:to-orange-200 transition-all"><ch.icon className="w-6 h-6 text-amber-700" /></div><div className="font-bold text-stone-800 text-sm">{ch.title}</div><div className="text-xs text-amber-600 font-medium mt-1">{ch.count}</div></div>))}</div></div></section>

        <section className="py-16 px-4"><div className="max-w-4xl mx-auto"><div className="glass-card-light rounded-3xl p-8 md:p-12 relative overflow-hidden"><div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-amber-200/40 to-transparent rounded-br-full" /><div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-orange-200/40 to-transparent rounded-tl-full" /><div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold tracking-wider shadow-lg">CHAPTER 0</div><h2 className="text-3xl font-bold text-stone-800 mb-6 text-center mt-4 relative">{welcomeTitle}</h2><p className="text-lg text-stone-600 leading-relaxed text-center relative" dangerouslySetInnerHTML={{ __html: welcomeText }} /><div className="flex justify-center gap-8 mt-8 text-center relative">{stats.map((s, i) => (<div key={i} className="flex items-center gap-4">{i > 0 && <div className="w-px h-12 bg-amber-200" />}<div><div className="glass-card-light rounded-xl px-4 py-2 mb-1"><div className="text-2xl md:text-3xl font-bold text-amber-700">{s.value}</div></div><div className="text-xs text-stone-500 mt-1">{s.label}</div></div></div>))}</div></div></div></section>

        <section className="py-16 px-4 bg-white/80"><div className="max-w-6xl mx-auto"><div className="flex items-center gap-3 mb-2"><div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">CHAPTER 1</div></div><h2 className="text-3xl font-bold text-stone-800 mb-2">Best Time to Visit {cityName}</h2><p className="text-stone-500 mb-10">Visual month-by-month guide -- taller bars mean better visiting conditions</p><div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 mb-8">{monthlyGuide.map((m, i) => (<div key={i} className="flex flex-col items-center group cursor-default"><div className="w-full h-32 flex items-end mb-2 relative"><div className={`w-full rounded-t-lg transition-all duration-500 group-hover:opacity-80 group-hover:scale-105 origin-bottom ${m.bar > 75 ? 'bg-gradient-to-t from-emerald-600 to-emerald-400' : m.bar > 40 ? 'bg-gradient-to-t from-amber-500 to-amber-300' : 'bg-gradient-to-t from-red-400 to-red-300'}`} style={{ height: `${m.bar}%` }} /></div><div className="text-xs font-bold text-stone-700">{m.month}</div><div className="text-[10px] text-stone-400">{m.temp}</div><div className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full mt-1 ${m.color}`}>{m.verdict}</div></div>))}</div><div className="flex flex-wrap items-center justify-center gap-4 text-xs">{bestTimeLegend.map((l, i) => (<div key={i} className="flex items-center gap-1.5"><div className={`w-3 h-3 rounded ${l.color}`} /> {l.label}</div>))}</div></div></section>

        <section className="py-16 px-4"><div className="max-w-5xl mx-auto"><div className="flex items-center gap-3 mb-2"><div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">CHAPTER 2</div></div><h2 className="text-3xl font-bold text-stone-800 mb-10">Top Attractions in {cityName}</h2><div className="space-y-5">{attractions.map((a, idx) => (<div key={idx} className="glass-card-light rounded-3xl overflow-hidden hover-lift group"><div className="flex flex-col md:flex-row"><div className="md:w-20 bg-gradient-to-b from-amber-600 to-orange-600 flex items-center justify-center py-4 md:py-0"><span className="text-3xl font-bold text-white/80">{String(idx + 1).padStart(2, '0')}</span></div><div className="flex-1 p-6"><h3 className="text-xl font-bold text-stone-800 flex items-center gap-2 mb-2"><a.icon className="w-5 h-5 text-amber-600" /> {a.name}</h3><p className="text-stone-600 mb-4">{a.desc}</p><div className="flex flex-wrap gap-2 text-sm"><span className="bg-gradient-to-r from-amber-50 to-orange-50 backdrop-blur-sm border border-amber-200/60 px-3 py-1.5 rounded-full text-amber-800 font-medium">Entry: {a.entry}</span><span className="bg-gradient-to-r from-blue-50 to-sky-50 backdrop-blur-sm border border-blue-200/60 px-3 py-1.5 rounded-full text-blue-700 font-medium"><Clock className="w-3 h-3 inline mr-1" />{a.timing}</span><span className="bg-gradient-to-r from-emerald-50 to-green-50 backdrop-blur-sm border border-emerald-200/60 px-3 py-1.5 rounded-full text-emerald-700 font-medium">{a.duration}</span></div></div></div></div>))}</div></div></section>

        <section className="py-16 px-4 bg-gradient-to-br from-orange-50/80 to-amber-50/80"><div className="max-w-5xl mx-auto"><div className="flex items-center gap-3 mb-2"><div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">CHAPTER 3</div></div><h2 className="text-3xl font-bold text-stone-800 mb-2">{cityName} Food Guide</h2><p className="text-stone-500 mb-10">{foodSubtitle}</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">{foodSection.map((food, idx) => (<div key={idx} className="glass-card-light rounded-2xl p-5 hover-lift relative overflow-hidden group"><div className="absolute -top-4 -right-4 text-7xl opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">{food.icon}</div><h3 className="font-bold text-stone-800 mb-2 flex items-center gap-2 relative"><Coffee className="w-4 h-4 text-amber-600" /> {food.name}</h3><p className="text-stone-600 text-sm relative">{food.desc}</p></div>))}</div></div></section>

        <section className="py-16 px-4"><div className="max-w-5xl mx-auto"><div className="flex items-center gap-3 mb-2"><div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">CHAPTER 4</div></div><h2 className="text-3xl font-bold text-stone-800 mb-10">Shopping in {cityName}</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-5">{shoppingSection.map((item, idx) => (<div key={idx} className="glass-card-light rounded-2xl p-6 hover-lift"><div className="flex items-start justify-between mb-3"><h3 className="font-bold text-stone-800 flex items-center gap-2"><ShoppingBag className="w-4 h-4 text-amber-600" /> {item.name}</h3><span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-md">{item.price}</span></div><p className="text-stone-600 text-sm">{item.desc}</p></div>))}</div></div></section>

        <section className="py-16 px-4 bg-white/80"><div className="max-w-5xl mx-auto"><div className="flex items-center gap-3 mb-2"><div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">CHAPTER 5</div></div><h2 className="text-3xl font-bold text-stone-800 mb-8">Getting Around {cityName}</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{transportOptions.map((t, idx) => (<div key={idx} className={`rounded-2xl p-5 transition-all duration-500 ${t.highlight ? 'glass-card-light border-2 border-amber-400 shadow-xl relative overflow-hidden' : 'glass-card-light hover:border-amber-200'}`}>{t.highlight && <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 opacity-50" />}<div className="relative"><div className="flex items-start justify-between mb-2"><h3 className="font-bold text-stone-800">{t.mode}</h3>{t.highlight && <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md" style={{ animation: 'pulse-gold 2s ease-in-out infinite' }}>RECOMMENDED</span>}</div><p className="text-amber-700 font-bold text-sm mb-1">{t.price}</p><p className="text-stone-600 text-sm">{t.desc}</p></div></div>))}</div></div></section>

        <section className="py-16 px-4"><div className="max-w-5xl mx-auto"><div className="flex items-center gap-3 mb-2"><div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">CHAPTER 6</div></div><h2 className="text-3xl font-bold text-stone-800 mb-10">Where to Stay in {cityName}</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-5">{areaGuide.map((a, idx) => (<div key={idx} className="glass-card-light rounded-2xl overflow-hidden hover-lift"><div className="h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500" /><div className="bg-gradient-to-r from-amber-600 to-orange-600 px-5 py-3 flex items-center justify-between"><h3 className="font-bold text-white flex items-center gap-2"><Hotel className="w-4 h-4" /> {a.area}</h3><span className="text-amber-100 text-sm font-medium bg-white/10 px-3 py-0.5 rounded-full">{a.budget}</span></div><div className="p-5"><p className="text-stone-600 text-sm">{a.desc}</p></div></div>))}</div></div></section>

        <section className="py-16 px-4 bg-white/80"><div className="max-w-4xl mx-auto"><div className="flex items-center gap-3 mb-2"><div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">APPENDIX</div></div><h2 className="text-3xl font-bold text-stone-800 mb-10">Frequently Asked Questions</h2><div className="space-y-4">{faqData.map((faq, idx) => (<div key={idx} className="border-l-4 border-amber-500 glass-card-light rounded-r-2xl p-6 hover:border-amber-400 hover:shadow-lg transition-all duration-500"><h3 className="text-lg font-bold text-stone-800 mb-2 flex items-start gap-2"><span className="bg-gradient-to-br from-amber-500 to-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 shadow-md">Q{idx + 1}</span>{faq.question}</h3><p className="text-stone-600 ml-9">{faq.answer}</p></div>))}</div></div></section>

        <section className="py-16 px-4"><div className="max-w-5xl mx-auto"><h2 className="text-2xl font-bold text-stone-800 mb-2 text-center">Explore More Destinations</h2><p className="text-stone-500 text-center mb-8 text-sm">Related guides and tour pages from our collection</p><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">{interlinks.map((link, idx) => (<Link key={idx} href={link.href} className="glass-card-light flex items-center gap-3 p-4 rounded-xl hover:border-amber-400/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 group"><div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-2.5 group-hover:from-amber-200 group-hover:to-orange-200 transition-all"><ChevronRight className="w-4 h-4 text-amber-700 group-hover:translate-x-1 transition-transform" /></div><div><div className="font-bold text-stone-800 text-sm group-hover:text-amber-700 transition-colors">{link.title}</div><div className="text-xs text-stone-400">{link.desc}</div></div></Link>))}</div></div></section>

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
