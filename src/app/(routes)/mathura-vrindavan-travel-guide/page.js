import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, Calendar, Sunrise, Camera, Coffee, ShoppingBag, Thermometer, Hotel, Landmark, Compass, BookOpen, Scroll } from '@/components/ui/icons';

export const metadata = { title: 'Mathura-Vrindavan Travel Guide 2026 | Krishna Birthplace & Sacred Twin Cities', description: 'Complete Mathura-Vrindavan travel guide 2026. Krishna Janmabhoomi, Banke Bihari Temple, ISKCON, Prem Mandir, Govardhan Hill. Book cab 7668570551.', keywords: 'mathura vrindavan travel guide, krishna janmabhoomi, banke bihari temple, iskcon vrindavan, prem mandir, govardhan hill, mathura tourism 2026', authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs', metadataBase: new URL('https://www.trivenicabs.in'), alternates: { canonical: '/mathura-vrindavan-travel-guide' }, openGraph: { title: 'Mathura-Vrindavan Travel Guide 2026 | Krishna Birthplace & Sacred Twin Cities', description: 'Everything about visiting Mathura-Vrindavan. Temples, festivals, food, transport.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/mathura-vrindavan-travel-guide', siteName: 'Triveni Cabs', images: [{ url: '/images/mathura-vrindavan-hero.jpg', width: 1200, height: 630, alt: 'Mathura-Vrindavan Travel Guide 2026' }] }, twitter: { card: 'summary_large_image', title: 'Mathura-Vrindavan Travel Guide 2026', description: 'Complete Mathura-Vrindavan guide. Temples, Holi, food, transport.', creator: '@trivenicabs', site: '@trivenicabs', images: ['/images/mathura-vrindavan-hero.jpg'] }, robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } } };

export default function MathuraVrindavanTravelGuidePage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Mathura-Vrindavan Travel Guide", "item": "https://www.trivenicabs.in/mathura-vrindavan-travel-guide" }] };
  const faqData = [
    { question: "How many days do I need in Mathura-Vrindavan?", answer: "2 days is ideal. Day 1: Mathura -- Krishna Janmabhoomi Temple, Dwarkadhish Temple, Vishram Ghat, Mathura Museum. Day 2: Vrindavan -- Banke Bihari Temple (morning), ISKCON Temple, Prem Mandir, Nidhivan. Add Day 3 for Govardhan Hill parikrama, Radha Kund, and Kusum Sarovar." },
    { question: "What is the best time to visit Mathura-Vrindavan?", answer: "October to March is best with pleasant 12-28 degree weather. Holi (March) is SPECTACULAR -- Mathura&apos;s Holi celebrations are world-famous and last a week. Janmashtami (August) is the peak spiritual festival celebrating Krishna&apos;s birth. April to June is extremely hot (40-46 degrees)." },
    { question: "How do I reach Mathura-Vrindavan from Delhi?", answer: "By train: Several daily trains, 2-2.5 hours from New Delhi station. By car: 160 km, 3 hours via Yamuna Expressway. Our cab costs &#8377;2,500-3,500 one way. From Agra: just 58 km, 1.5 hours. By bus: Frequent buses from Delhi ISBT. We offer same-day return trips from Delhi." },
    { question: "Is Mathura-Vrindavan vegetarian only?", answer: "Yes, the entire Mathura-Vrindavan region is strictly vegetarian. No meat, fish, or eggs are sold or served anywhere in the twin cities. Even large hotel chains serve only vegetarian food. Alcohol is also banned in Vrindavan. This is observed out of respect for Lord Krishna." },
    { question: "What is special about Holi in Mathura?", answer: "Mathura&apos;s Holi celebrations are India&apos;s most famous and last nearly a week. Lathmar Holi in Barsana (women beat men with sticks), Phoolon Ki Holi at Banke Bihari Temple (flower Holi), and colour celebrations at every temple. Book accommodation months in advance for Holi week." },
    { question: "What is Banke Bihari Temple famous for?", answer: "Banke Bihari Temple in Vrindavan is one of India&apos;s most visited temples, attracting millions annually. The deity&apos;s curtain is drawn and opened every few minutes (jhankis) rather than kept open continuously. The temple is especially magical during Holi and Janmashtami. Morning darshan is most spiritual." },
    { question: "What should I buy in Mathura-Vrindavan?", answer: "Mathura&apos;s famous pedas (milk sweets), Krishna idols and paintings, prayer beads (mala), religious items, Vrindavan&apos;s handmade incense sticks, and peacock feather souvenirs. The main markets are near Dwarkadhish Temple and Loi Bazaar in Vrindavan." },
    { question: "Is Govardhan Hill parikrama worth doing?", answer: "Yes, the 21 km parikrama (circumambulation) of Govardhan Hill is a deeply spiritual experience. Believed to be Lord Krishna&apos;s lifted hill, it attracts thousands of devotees daily. Walk barefoot (traditional) or take a vehicle for portions. Radha Kund, Kusum Sarovar, and Mansi Ganga are along the route." },
  ];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };
  const attractions = [
    { name: "Krishna Janmabhoomi Temple", desc: "The most sacred site in Mathura -- the exact birthplace of Lord Krishna. The prison cell (garbha griha) where Krishna was born is the holiest spot. Surrounded by multiple temples, including the grand Keshav Dev Temple. Security is tight due to the adjacent Shahi Idgah mosque.", entry: "Free", timing: "5:00 AM - 12:00 PM, 4:00 - 9:30 PM", duration: "1-2 hours", icon: Landmark },
    { name: "Dwarkadhish Temple", desc: "Mathura&apos;s most beautiful temple, built in 1814 by Seth Gokul Das. Dedicated to Lord Krishna as the King of Dwarka. Stunning Rajasthani architecture with intricate carvings and paintings. The swing festival (Jhulan Yatra) in monsoon is extraordinary.", entry: "Free", timing: "6:30 AM - 12:30 PM, 4:00 - 9:30 PM", duration: "1 hour", icon: Landmark },
    { name: "Banke Bihari Temple (Vrindavan)", desc: "The most visited temple in Vrindavan, attracting millions of devotees annually. The enchanting deity of Krishna in his tribhanga (three-fold bending) pose. Unique tradition of curtain darshan (jhankis). Electrifying atmosphere during Holi and Janmashtami.", entry: "Free", timing: "7:45 AM - 12:00 PM, 5:30 - 9:30 PM", duration: "1-2 hours", icon: Landmark },
    { name: "ISKCON Temple (Vrindavan)", desc: "The Krishna-Balaram Mandir, founded by Srila Prabhupada in 1975. Marble architecture, international devotees, and beautiful deity worship. The samadhi (memorial) of Prabhupada is here. Free prasadam served daily.", entry: "Free", timing: "4:30 AM - 1:00 PM, 4:15 - 8:30 PM", duration: "1-1.5 hours", icon: Landmark },
    { name: "Prem Mandir (Vrindavan)", desc: "A magnificent white marble temple built by Jagadguru Kripalu Maharaj, completed in 2012. Stunning illumination at night with coloured lights. Depicts Krishna&apos;s leelas (divine play) in exquisite marble carvings across multiple floors. A modern architectural marvel.", entry: "Free", timing: "5:30 AM - 12:00 PM, 4:30 - 8:30 PM", duration: "1-1.5 hours", icon: Camera },
    { name: "Govardhan Hill", desc: "The sacred hill that Lord Krishna lifted on his little finger to protect the people of Vrindavan from Indra&apos;s wrath. A 21 km parikrama (circumambulation) is one of the holiest pilgrimages. Radha Kund, Kusum Sarovar, and Mansi Ganga are key stops.", entry: "Free", timing: "Open all day", duration: "3-6 hours (full parikrama)", icon: Compass },
    { name: "Radha Kund & Kusum Sarovar", desc: "Radha Kund is considered the holiest water body in the Krishna tradition. Adjacent Kusum Sarovar is an ornate bathing ghat with cenotaphs and beautiful architecture. Both are on the Govardhan parikrama route, 26 km from Mathura.", entry: "Free", timing: "Open all day", duration: "1-1.5 hours", icon: Sunrise },
    { name: "Nidhivan (Vrindavan)", desc: "A mystical sacred grove where Lord Krishna is believed to perform Raas Leela (divine dance) with Radha every night. The trees appear to bow in pairs. Strictly closed after sunset -- locals believe no living being can witness the divine play. Deeply atmospheric.", entry: "Free", timing: "6:00 AM - Sunset", duration: "30-45 min", icon: Shield },
  ];
  const monthlyGuide = [
    { month: "Jan", temp: "5-20°C", weather: "Cold, foggy", crowd: "Moderate", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 65 },
    { month: "Feb", temp: "8-24°C", weather: "Cool, pleasant", crowd: "High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 82 },
    { month: "Mar", temp: "14-31°C", weather: "Warm (HOLI!)", crowd: "Extreme", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 100 },
    { month: "Apr", temp: "21-38°C", weather: "Hot", crowd: "Low", verdict: "Not ideal", color: "bg-red-100 text-red-800", bar: 22 },
    { month: "May", temp: "27-43°C", weather: "Very hot", crowd: "Very Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 10 },
    { month: "Jun", temp: "29-44°C", weather: "Extreme heat", crowd: "Very Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 8 },
    { month: "Jul", temp: "27-36°C", weather: "Monsoon", crowd: "Low", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 30 },
    { month: "Aug", temp: "26-34°C", weather: "Rain (Janmashtami)", crowd: "Very High", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 95 },
    { month: "Sep", temp: "25-34°C", weather: "Rain ending", crowd: "Low-Med", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 35 },
    { month: "Oct", temp: "19-33°C", weather: "Pleasant", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 88 },
    { month: "Nov", temp: "11-28°C", weather: "Cool, clear", crowd: "Very High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 90 },
    { month: "Dec", temp: "6-22°C", weather: "Cold", crowd: "High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 75 },
  ];
  const foodSection = [
    { name: "Mathura Peda", desc: "The legendary milk sweet that Mathura is famous for worldwide. Made from fresh khoya (reduced milk), sugar, and cardamom. Brijwasi and Shri Radhey are the most trusted brands. Buy directly from Rath Yatra Marg shops.", icon: "🍬" },
    { name: "Temple Prasad", desc: "Divine offerings from the many temples. Banke Bihari&apos;s malpua (sweet pancakes), ISKCON&apos;s multi-course prasadam, and Janmabhoomi&apos;s laddu. Free prasadam at ISKCON Temple is a complete meal. A spiritual and culinary experience.", icon: "🙏" },
    { name: "Lassi & Rabri", desc: "Thick, creamy lassi topped with a generous layer of malai, and rabri (sweetened condensed milk). Mathura&apos;s dairy tradition makes these exceptionally rich. Every corner shop serves fresh versions from local buffalo milk.", icon: "🥛" },
    { name: "Chaat & Street Food", desc: "Mathura&apos;s vegetarian chaat scene is legendary. Aloo tikki, dahi bhalla, pani puri, and kachori-sabzi from roadside stalls near Dwarkadhish Temple. Flavourful, tangy, and completely meat-free.", icon: "🥟" },
    { name: "Puri-Sabzi & Chole Bhature", desc: "Simple, satisfying meals served at dhabas and sweet shops across the twin cities. Hot puris with spiced potato or chole, accompanied by tangy pickle and sweet jalebi. The classic pilgrim&apos;s breakfast.", icon: "🫓" },
    { name: "Kachori & Jalebi", desc: "Crispy dal-stuffed kachoris paired with hot jalebis, dipped in sugar syrup. A beloved breakfast combination across the Braj region. Brijwasi Sweet House near Vishram Ghat serves outstanding versions.", icon: "🍩" },
  ];
  const shoppingSection = [
    { name: "Krishna Idols & Paintings", desc: "Beautifully crafted brass, marble, and wooden idols of Lord Krishna in various poses. Pichwai paintings (traditional cloth paintings from the Krishna tradition) and miniature art. Vrindavan&apos;s temple market has the widest selection.", price: "&#8377;100 - &#8377;50,000" },
    { name: "Religious Items", desc: "Prayer beads (tulsi and rudraksha mala), conch shells, puja thalis, incense sticks, and devotional items. Vrindavan&apos;s Loi Bazaar and Mathura&apos;s Chatta Bazaar are the main markets for authentic spiritual goods.", price: "&#8377;50 - &#8377;5,000" },
    { name: "Mathura Peda & Sweets", desc: "The city&apos;s most popular take-home gift. Vacuum-sealed peda boxes from Brijwasi, Shri Radhey, and Gopal Ji. Also available: rabri, petha, and assorted Braj sweets. Buy from established brands for quality and shelf life.", price: "&#8377;200 - &#8377;2,000" },
    { name: "Peacock Feathers & Souvenirs", desc: "Peacock feathers, flutes (bansuri), and Krishna-themed souvenirs. Traditional Braj handicrafts including embroidered cloth, wooden toys, and temple replicas. Available at stalls near all major temples.", price: "&#8377;50 - &#8377;3,000" },
  ];
  const areaGuide = [
    { area: "Mathura (Near Janmabhoomi)", desc: "Central location for Mathura&apos;s main temples. Walking distance to Krishna Janmabhoomi, Dwarkadhish Temple, and Vishram Ghat. Budget to mid-range dharamshalas and hotels. Can be crowded during festivals.", budget: "&#8377;500-3,000/night" },
    { area: "Vrindavan (Near Temples)", desc: "The spiritual heart of the twin cities. Close to Banke Bihari, ISKCON, and Prem Mandir. Dozens of ashrams and guesthouses. Peaceful atmosphere. Strictly vegetarian zone. Best for extended spiritual stays.", budget: "&#8377;300-4,000/night" },
    { area: "NH-2 Highway Hotels", desc: "Modern hotels along the Delhi-Agra highway near Mathura. Clean, comfortable rooms with good amenities. 10-15 minute drive to temples. Best for families seeking modern facilities and parking.", budget: "&#8377;1,500-6,000/night" },
    { area: "Govardhan", desc: "Stay near the sacred hill for the parikrama experience. Simple ashrams and dharamshalas. Very spiritual and peaceful. 26 km from Mathura city. Ideal for devoted pilgrims seeking an immersive experience.", budget: "&#8377;300-2,000/night" },
  ];
  const trustFeatures = [{ icon: MapPin, title: "Braj Region Specialists", desc: "Krishna circuit experts" }, { icon: Landmark, title: "Sacred Twin Cities", desc: "Krishna&apos;s birthplace" }, { icon: Users, title: "8000+ Pilgrims Served", desc: "Temple tour experts" }, { icon: Star, title: "4.9 Google Rating", desc: "Verified reviews" }];
  const chapters = [{ title: "Attractions", icon: Landmark, count: "8+ Sites" }, { title: "Best Time", icon: Thermometer, count: "12 Months" }, { title: "Food Guide", icon: Coffee, count: "6 Specialties" }, { title: "Shopping", icon: ShoppingBag, count: "4 Categories" }, { title: "Stay Guide", icon: Hotel, count: "4 Areas" }, { title: "Transport", icon: Car, count: "4 Options" }];

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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight tracking-tight">Mathura-Vrindavan Travel <span className="shimmer-gold">Guide</span></h1>
          <div className="flex items-center justify-center gap-4 mb-6"><div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500/60" /><span className="text-amber-400 font-semibold tracking-widest text-sm">2026 EDITION</span><div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500/60" /></div>
          <p className="text-lg md:text-xl text-amber-100/70 mb-10 max-w-3xl mx-auto leading-relaxed font-light">The Sacred Twin Cities -- where Lord Krishna was born, played, and danced, and where millions of devotees come to experience the divine love of Radha and Krishna.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 transition-all duration-500"><Phone className="w-5 h-5" /> Call Now: 7668570551</Link>
            <Link href="https://wa.me/917668570551?text=I want to book a cab for Mathura Vrindavan trip" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-500/30 hover:bg-white/20 hover:scale-105 transition-all duration-500">WhatsApp Us</Link>
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
          <div className="text-center mb-10"><h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Table of Contents</h2><p className="text-stone-500">Your chapter-by-chapter guide to the Sacred Twin Cities</p></div>
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
            <h2 className="text-3xl font-bold text-stone-800 mb-6 text-center mt-4 relative">Welcome to the Sacred Twin Cities</h2>
            <p className="text-lg text-stone-600 leading-relaxed text-center relative">Mathura and Vrindavan, the sacred twin cities of the Braj region, hold a place of unparalleled significance in Hindu spirituality. Mathura is the birthplace of Lord Krishna, the eighth avatar of Vishnu, born in a prison cell over 5,000 years ago. The Krishna Janmabhoomi Temple marks this holiest of spots, drawing millions of devotees each year. Just 15 kilometres away, Vrindavan is where Krishna spent his childhood -- playing in its groves, grazing cows along the Yamuna, and performing the divine Raas Leela with Radha and the gopis. The twin cities contain over 5,000 temples, from ancient shrines to modern marvels like the illuminated Prem Mandir. The Banke Bihari Temple in Vrindavan, with its unique curtain-darshan tradition, creates an atmosphere of intense devotion. ISKCON&apos;s Krishna-Balaram Mandir attracts devotees from across the globe. During Holi, Mathura transforms into the most colourful place on Earth -- the Lathmar Holi of Barsana and the flower Holi at Banke Bihari are experiences found nowhere else. Janmashtami (Krishna&apos;s birthday) sees midnight celebrations that are deeply moving. With the nearby Govardhan Hill parikrama and the mystical groves of Nidhivan, Mathura-Vrindavan is India&apos;s most profound spiritual destination.</p>
            <div className="flex justify-center gap-6 mt-8 text-center relative">
              {[{ val: "5,000+", label: "Temples" }, { val: "5,000 yrs", label: "Ancient History" }, { val: "160 km", label: "From Delhi" }].map((s, i) => (
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
          <h2 className="text-3xl font-bold text-stone-800 mb-2">Best Time to Visit Mathura-Vrindavan</h2>
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
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs"><div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-emerald-500" /> Best (Oct-Mar, Aug)</div><div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-amber-400" /> Okay (Jul, Sep)</div><div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-red-400" /> Avoid (Apr-Jun)</div></div>
        </div>
      </section>

      {/* ATTRACTIONS */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2"><div className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider">CHAPTER 2</div></div>
          <h2 className="text-3xl font-bold text-stone-800 mb-10">Top Attractions in Mathura-Vrindavan</h2>
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
          <h2 className="text-3xl font-bold text-stone-800 mb-2">Mathura-Vrindavan Food Guide</h2>
          <p className="text-stone-500 mb-10">Pure vegetarian cuisine, legendary sweets, and divine temple prasad</p>
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
          <h2 className="text-3xl font-bold text-stone-800 mb-10">Shopping in Mathura-Vrindavan</h2>
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
          <h2 className="text-3xl font-bold text-stone-800 mb-8">Getting Around Mathura-Vrindavan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[{ mode: "Triveni Cabs (Private Taxi)", price: "&#8377;1,500-2,500/day", desc: "AC car with driver. Best for covering Mathura, Vrindavan, Govardhan, and Barsana in one trip. Delhi-Mathura one way from &#8377;2,500. Call 7668570551.", highlight: true }, { mode: "Auto-rickshaw", price: "&#8377;20-100/trip", desc: "Available everywhere. Good for Mathura to Vrindavan (15 km) trips. Shared autos are very cheap. Negotiate fare before boarding.", highlight: false }, { mode: "E-Rickshaw / Cycle Rickshaw", price: "&#8377;10-50/trip", desc: "Best for temple-hopping within Vrindavan&apos;s narrow lanes. Eco-friendly and atmospheric. The preferred local transport for short distances.", highlight: false }, { mode: "Parikrama Bus / Walk", price: "&#8377;Free-50/trip", desc: "For Govardhan Hill parikrama. Special buses run along the route. Many devotees walk the entire 21 km barefoot as a spiritual practice.", highlight: false }].map((t, idx) => (
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
          <h2 className="text-3xl font-bold text-stone-800 mb-10">Where to Stay in Mathura-Vrindavan</h2>
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
            {[{ href: "/agra-travel-guide", title: "Agra Travel Guide", desc: "Taj Mahal & more" }, { href: "/varanasi-travel-guide", title: "Varanasi Travel Guide", desc: "Spiritual capital" }, { href: "/jaipur-travel-guide", title: "Jaipur Travel Guide", desc: "Pink City" }, { href: "/haridwar-travel-guide", title: "Haridwar Travel Guide", desc: "Gateway to Gods" }, { href: "/shimla-travel-guide", title: "Shimla Travel Guide", desc: "Queen of Hills" }, { href: "/amritsar-travel-guide", title: "Amritsar Travel Guide", desc: "Golden Temple city" }, { href: "/jodhpur-travel-guide", title: "Jodhpur Travel Guide", desc: "Blue City" }, { href: "/jaisalmer-travel-guide", title: "Jaisalmer Travel Guide", desc: "Golden City" }, { href: "/sightseeing", title: "All Sightseeing Tours", desc: "Complete tour list" }].map((link, idx) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Help Planning Your Mathura-Vrindavan Trip?</h2>
          <p className="text-amber-100/80 mb-8 text-lg">Temple darshan circuit, Govardhan parikrama, Holi celebrations, and Agra combo tours -- we arrange it all.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-gold 2s ease-in-out infinite' }}><Phone className="w-5 h-5" /> Call: 7668570551</Link>
            <Link href="https://wa.me/917668570551?text=I want to book a cab for Mathura Vrindavan trip" className="inline-flex items-center justify-center gap-2 bg-amber-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-400/30 hover:bg-amber-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">WhatsApp Us <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
    </div>
  </>);
}
