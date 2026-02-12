import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, Calendar, Sunrise, Camera, Coffee, ShoppingBag, Thermometer, Hotel, Landmark, Compass, BookOpen, Scroll } from '@/components/ui/icons';

export const metadata = { title: 'Amritsar Travel Guide 2026 | Golden Temple, Wagah Border & Punjabi Food', description: 'Complete Amritsar travel guide 2026. Golden Temple, Jallianwala Bagh, Wagah Border, Partition Museum, Punjabi food. Call 7668570551.', keywords: 'amritsar travel guide, golden temple guide, amritsar tourism, wagah border, jallianwala bagh, amritsar food, punjab tourism', authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs', metadataBase: new URL('https://www.trivenicabs.in'), alternates: { canonical: '/amritsar-travel-guide' }, openGraph: { title: 'Amritsar Travel Guide 2026 | Golden Temple & Beyond', description: 'Everything about visiting Amritsar. Golden Temple, Wagah Border, food, transport.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/amritsar-travel-guide', siteName: 'Triveni Cabs', images: [{ url: '/images/amritsar-hero.jpg', width: 1200, height: 630, alt: 'Amritsar Travel Guide 2026' }] }, twitter: { card: 'summary_large_image', title: 'Amritsar Travel Guide 2026', description: 'Complete Amritsar guide. Golden Temple, food, transport.', creator: '@trivenicabs', site: '@trivenicabs', images: ['/images/amritsar-hero.jpg'] }, robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } } };

export default function AmritsarTravelGuidePage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Amritsar Travel Guide", "item": "https://www.trivenicabs.in/amritsar-travel-guide" }] };
  const faqData = [
    { question: "How many days do I need in Amritsar?", answer: "2 days is ideal. Day 1: Golden Temple (morning & evening), Jallianwala Bagh, Partition Museum, old city walk. Day 2: Wagah Border ceremony (evening), Gobindgarh Fort, Pul Kanjari, shopping. Add a day for Attari border market and nearby Durgiana Temple." },
    { question: "What is the best time to visit Amritsar?", answer: "October to March is best (10-25 degrees). November-February is ideal for food and sightseeing. Baisakhi (April 13) is spectacular at the Golden Temple. Summers (May-June) are very hot (40-45 degrees). Diwali and Guru Purab festivals are magnificent." },
    { question: "How do I reach Amritsar from Delhi?", answer: "By train: Shatabdi Express (6 hrs), Vande Bharat (5 hrs). By car: 450 km, 7-8 hours via NH44. Our cab costs 6,000-8,000 rupees one way. By flight: 1 hour, multiple daily flights. We offer airport pickup and local sightseeing." },
    { question: "What food is Amritsar famous for?", answer: "Amritsar is India&apos;s food capital! Amritsari Kulcha (stuffed bread), Langar at Golden Temple (world&apos;s largest free kitchen), Amritsari Fish, Lassi, Chole Bhature, Tandoori Chicken, and Phirni. The area around Golden Temple has legendary eateries." },
    { question: "Is the Golden Temple open 24 hours?", answer: "Yes! Sri Harmandir Sahib (Golden Temple) is open 24 hours, 365 days a year. The early morning (3 AM - Amrit Vela) and evening prayers are most spiritual. Photography is allowed. Head covering and bare feet required. Free langar (meals) served all day." },
    { question: "What time is the Wagah Border ceremony?", answer: "The Beating Retreat ceremony happens daily before sunset (5:30 PM in winter, 6:30 PM in summer). Arrive 2 hours early for good seats. Carry ID proof. No bags larger than a purse allowed. It is a 30 km drive from Amritsar city -- our drivers time it perfectly." },
    { question: "What should I buy in Amritsar?", answer: "Phulkari dupattas and suits, Amritsari juttis (leather shoes), dried fruits from Katra Jaimal Singh, Amritsari papad, pickles, and Punjabi jewellery. Hall Bazaar and Lawrence Road are the main shopping streets." },
    { question: "Is Amritsar safe for tourists?", answer: "Very safe. Amritsar is one of India&apos;s most welcoming cities. The Golden Temple area is heavily secured and clean. Sikh hospitality (seva) is legendary -- visitors of all faiths are warmly welcomed. Standard precautions for any city apply." },
  ];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };
  const attractions = [
    { name: "Golden Temple (Sri Harmandir Sahib)", desc: "The holiest Sikh shrine, covered in 750 kg of gold. Open 24/7 to people of all faiths. The Amrit Sarovar (sacred pool) and Langar (free community kitchen serving 100,000 meals daily).", entry: "Free", timing: "Open 24 hours", duration: "2-4 hours", icon: Landmark },
    { name: "Jallianwala Bagh", desc: "Memorial garden at the site of the 1919 massacre where British troops killed hundreds of unarmed Indians. Bullet marks preserved on walls. Renovated memorial museum.", entry: "Free", timing: "6:30 AM - 7:30 PM", duration: "1-1.5 hours", icon: BookOpen },
    { name: "Wagah Border", desc: "India-Pakistan border crossing famous for the daily Beating Retreat ceremony. High-energy patriotic display by BSF and Pakistan Rangers. Arrive 2 hours early.", entry: "Free (ID required)", timing: "Ceremony before sunset", duration: "3-4 hours (with travel)", icon: Shield },
    { name: "Partition Museum", desc: "India&apos;s first museum dedicated to the 1947 Partition. Personal stories, artefacts, and multimedia exhibits in the historic Town Hall. Deeply moving experience.", entry: "\u20B910 Indian / \u20B9250 Foreign", timing: "10:00 AM - 5:00 PM (Closed Mon)", duration: "1.5-2 hours", icon: BookOpen },
    { name: "Gobindgarh Fort", desc: "18th-century fort restored as a heritage attraction. Light and sound show, live battle reenactments, Sikh artefacts museum, and the 7D theatre experience.", entry: "\u20B9100-500 (package based)", timing: "10:00 AM - 10:00 PM", duration: "2-3 hours", icon: Shield },
    { name: "Durgiana Temple", desc: "Beautiful Hindu temple modelled after the Golden Temple. Dedicated to Goddess Durga. Silver doors and marble architecture. Known as the Silver Temple.", entry: "Free", timing: "5:00 AM - 10:00 PM", duration: "30-45 min", icon: Landmark },
    { name: "Maharaja Ranjit Singh Museum", desc: "Museum dedicated to the Lion of Punjab in the summer palace of Ram Bagh gardens. Weapons, paintings, coins, and manuscripts from the Sikh Empire era.", entry: "\u20B920", timing: "10:00 AM - 5:00 PM", duration: "1 hour", icon: Camera },
    { name: "Old City Heritage Walk", desc: "Guided walk through the narrow lanes around Golden Temple. Ancient havelis, katras (merchant courtyards), and street food stalls. The real soul of Amritsar.", entry: "Free (guided walks \u20B9500+)", timing: "Morning best", duration: "2-3 hours", icon: Compass },
  ];
  const monthlyGuide = [
    { month: "Jan", temp: "4-18\u00B0C", weather: "Cold, foggy", crowd: "Moderate", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 62 },
    { month: "Feb", temp: "6-22\u00B0C", weather: "Cool", crowd: "High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 80 },
    { month: "Mar", temp: "12-28\u00B0C", weather: "Pleasant", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 90 },
    { month: "Apr", temp: "18-36\u00B0C", weather: "Warm (Baisakhi)", crowd: "Very High", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 100 },
    { month: "May", temp: "24-42\u00B0C", weather: "Hot", crowd: "Low", verdict: "Not ideal", color: "bg-red-100 text-red-800", bar: 18 },
    { month: "Jun", temp: "26-42\u00B0C", weather: "Very hot", crowd: "Very Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 10 },
    { month: "Jul", temp: "26-36\u00B0C", weather: "Monsoon", crowd: "Low", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 30 },
    { month: "Aug", temp: "25-34\u00B0C", weather: "Peak rain", crowd: "Low", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 28 },
    { month: "Sep", temp: "23-34\u00B0C", weather: "Rain ending", crowd: "Low-Med", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 50 },
    { month: "Oct", temp: "17-33\u00B0C", weather: "Pleasant", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 92 },
    { month: "Nov", temp: "10-27\u00B0C", weather: "Cool, clear", crowd: "Very High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 95 },
    { month: "Dec", temp: "5-20\u00B0C", weather: "Cold", crowd: "High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 78 },
  ];
  const foodSection = [
    { name: "Amritsari Kulcha", desc: "Stuffed tandoori bread with spiced potato, paneer, or mixed filling. Served with chole and chutney. Kulcha Land and Bhai Kulwant Singh are legendary.", icon: "\uD83E\uDED3" },
    { name: "Golden Temple Langar", desc: "World&apos;s largest free kitchen serving 100,000+ meals daily. Simple dal, roti, rice, and kheer. A profound spiritual and communal dining experience.", icon: "\uD83C\uDF5B" },
    { name: "Amritsari Fish", desc: "Crispy batter-fried fish marinated in Punjabi spices. Makki di Hatti in Lawrence Road is the most famous. Best with fresh chutney and onion rings.", icon: "\uD83D\uDC1F" },
    { name: "Lassi & Chole Bhature", desc: "Thick creamy lassi in tall steel glasses and puffy bhature with spicy chole. Ahuja Lassi and Kanhiya Lal are iconic for both.", icon: "\uD83E\uDD5B" },
    { name: "Tandoori Chicken", desc: "Amritsar is credited with perfecting tandoori chicken. Beera Chicken House (since 1960) and Surjit Food Plaza serve legendary versions.", icon: "\uD83C\uDF57" },
    { name: "Phirni & Jalebi", desc: "Creamy rice pudding (phirni) in earthen bowls and hot jalebis for breakfast. Gurdas Ram and Baba Kartar Singh shops near Golden Temple.", icon: "\uD83C\uDF6C" },
  ];
  const shoppingSection = [
    { name: "Phulkari & Punjabi Suits", desc: "Vibrant Phulkari embroidery on dupattas and suits. Hand-embroidered pieces from Amritsar are the most authentic. Katra Jaimal Singh market is best.", price: "\u20B9500 - \u20B915,000" },
    { name: "Amritsari Juttis", desc: "Traditional leather shoes with colourful embroidery. Hall Bazaar has dozens of jutti shops. Both men&apos;s and women&apos;s styles available.", price: "\u20B9200 - \u20B93,000" },
    { name: "Dry Fruits & Spices", desc: "High-quality dried fruits, nuts, and Punjabi spices at wholesale prices. Katra Jaimal Singh and Guru Bazaar are the best markets.", price: "\u20B9200 - \u20B95,000" },
    { name: "Punjabi Jewellery", desc: "Traditional Sikh and Punjabi jewellery -- gold plated, kundan, and handmade. Guru Bazaar and Hall Bazaar have trusted jewellers.", price: "\u20B9300 - \u20B950,000" },
  ];
  const areaGuide = [
    { area: "Golden Temple Area", desc: "Most spiritual and atmospheric. Walking distance to all major attractions. Budget to mid-range stays. Can be noisy during festival season.", budget: "\u20B9500-3,000/night" },
    { area: "Lawrence Road / Mall Road", desc: "Commercial area with restaurants and shops. Good mid-range hotels. 10 min from Golden Temple. More modern and spacious.", budget: "\u20B91,500-5,000/night" },
    { area: "Ranjit Avenue", desc: "Modern residential area with new hotels. Clean and quiet. Good restaurants. 15-20 min drive to old city attractions.", budget: "\u20B92,000-8,000/night" },
    { area: "Airport Road", desc: "Convenient for early flights. New hotels and resorts. Peaceful area. 20-25 min to city centre.", budget: "\u20B91,500-6,000/night" },
  ];
  const trustFeatures = [{ icon: MapPin, title: "Punjab Specialists", desc: "Golden Temple experts" }, { icon: Landmark, title: "Holy City", desc: "Sikh spiritual capital" }, { icon: Users, title: "5000+ Pilgrims Served", desc: "Punjab tour experts" }, { icon: Star, title: "4.9 Google Rating", desc: "Verified reviews" }];
  const chapters = [{ title: "Attractions", icon: Landmark, count: "8 Sites" }, { title: "Best Time", icon: Thermometer, count: "12 Months" }, { title: "Food Guide", icon: Coffee, count: "6 Specialties" }, { title: "Shopping", icon: ShoppingBag, count: "4 Categories" }, { title: "Stay Guide", icon: Hotel, count: "4 Areas" }, { title: "Transport", icon: Car, count: "4 Options" }];

  const cityName = "Amritsar";
  const cityTagline = "The Holy City of the Sikhs -- the Golden Temple&apos;s divine serenity, Wagah Border&apos;s patriotic fervour, and Punjab&apos;s legendary food culture.";
  const welcomeTitle = "Welcome to the Holy City";
  const welcomeText = "Amritsar, the spiritual and cultural heart of Punjab, is a city that touches the soul. Founded in 1577 by Guru Ram Das, the fourth Sikh Guru, Amritsar derives its name from the Amrit Sarovar -- the sacred pool of nectar that surrounds the resplendent <strong>Golden Temple, covered in 750 kilograms of pure gold</strong>. Sri Harmandir Sahib is more than a place of worship -- it is a beacon of equality, with four entrances symbolizing openness to all castes and creeds. The Langar (community kitchen) serves over 100,000 free meals every day, making it the world&apos;s largest free kitchen. Beyond its spiritual significance, Amritsar is a city of profound historical importance. Jallianwala Bagh bears witness to one of colonial India&apos;s darkest chapters, while the Wagah Border ceremony celebrates India&apos;s sovereignty with daily patriotic fervour. The city is also Punjab&apos;s food capital, where Amritsari kulchas, tandoori chicken, and lassi have achieved legendary status. With its warm Punjabi hospitality, vibrant bazaars, and deeply moving spiritual experiences, Amritsar is one of India&apos;s most essential destinations.";
  const stats = [{ value: "1577", label: "Year Founded" }, { value: "100K+", label: "Daily Langar Meals" }, { value: "750 kg", label: "Gold on Temple" }];
  const foodSubtitle = "Punjab&apos;s food capital -- legendary Punjabi cuisine at its finest";
  const bestTimeLegend = [{ color: "bg-emerald-500", label: "Best (Oct-Apr)" }, { color: "bg-amber-400", label: "Okay (Jul-Sep)" }, { color: "bg-red-400", label: "Avoid (May-Jun)" }];
  const transportOptions = [
    { mode: "Triveni Cabs (Private Taxi)", price: "\u20B91,800-3,000/day", desc: "AC car with driver. Essential for Wagah Border (30 km). Delhi-Amritsar one way from \u20B96,000. Call 7668570551.", highlight: true },
    { mode: "Auto-rickshaw", price: "\u20B930-150/trip", desc: "Available everywhere. Good for Golden Temple to Hall Bazaar trips. Negotiate fare first.", highlight: false },
    { mode: "Cycle Rickshaw", price: "\u20B920-50/trip", desc: "Best for exploring old city lanes near Golden Temple. Eco-friendly and atmospheric.", highlight: false },
    { mode: "City Bus", price: "\u20B910-25/trip", desc: "PRTC buses connect major areas. Affordable but limited routes for tourists.", highlight: false },
  ];
  const interlinks = [
    { href: "/shimla-travel-guide", title: "Shimla Travel Guide", desc: "Queen of Hills" },
    { href: "/dharamshala-travel-guide", title: "Dharamshala Travel Guide", desc: "Little Lhasa" },
    { href: "/manali-travel-guide", title: "Manali Travel Guide", desc: "Mountain adventure" },
    { href: "/jaipur-travel-guide", title: "Jaipur Travel Guide", desc: "Pink City" },
    { href: "/agra-travel-guide", title: "Agra Travel Guide", desc: "Taj Mahal & more" },
    { href: "/kashmir-travel-guide", title: "Kashmir Travel Guide", desc: "Paradise on Earth" },
    { href: "/varanasi-travel-guide", title: "Varanasi Travel Guide", desc: "Spiritual capital" },
    { href: "/haridwar-travel-guide", title: "Haridwar Travel Guide", desc: "Gateway to Gods" },
    { href: "/sightseeing", title: "All Sightseeing Tours", desc: "Complete tour list" },
  ];
  const ctaTitle = "Need Help Planning Your Amritsar Trip?";
  const ctaDesc = "Golden Temple darshan, Wagah Border ceremony, and the best food tour in India -- we arrange it all.";
  const whatsappMsg = "I want to book a cab for Amritsar trip";

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
        {/* Subtle pattern overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='2' fill='%23b45309'/%3E%3Ccircle cx='4' cy='4' r='1' fill='%23b45309'/%3E%3Ccircle cx='36' cy='36' r='1' fill='%23b45309'/%3E%3C/svg%3E")` }} />

        {/* HERO - Animated Gradient with Floating Particles */}
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-stone-900 to-yellow-950" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 15s ease infinite' }} />
          {/* Floating glow orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/20 rounded-full blur-[120px]" style={{ animation: 'float 8s ease-in-out infinite' }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-600/15 rounded-full blur-[100px]" style={{ animation: 'float 10s ease-in-out infinite 2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px]" style={{ animation: 'float 12s ease-in-out infinite 4s' }} />
          {/* Floating particles */}
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

          {/* Trust bar at bottom of hero */}
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

        {/* TABLE OF CONTENTS - Glass cards with hover-lift */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Table of Contents</h2>
              <p className="text-stone-500">Your chapter-by-chapter guide to the Holy City</p>
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

        {/* WELCOME - Glass card with gradient corners and stats */}
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

        {/* BEST TIME - Enhanced bar chart */}
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

        {/* ATTRACTIONS - Glass cards with gradient number badges */}
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

        {/* FOOD - Glass cards with emoji watermark */}
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

        {/* SHOPPING - Glass cards with gradient price tags */}
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

        {/* TRANSPORT - Triveni Cabs card with animated border */}
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

        {/* STAY - Glass cards with gradient header bars */}
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

        {/* FAQ - Glass cards with Q-number badges */}
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

        {/* LINKS - Glass cards with group-hover */}
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

        {/* CTA - Animated Gradient with floating particles */}
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
