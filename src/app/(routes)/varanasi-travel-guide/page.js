import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, Calendar, Sunrise, Camera, Coffee, ShoppingBag, Thermometer, Hotel, Landmark, Compass, BookOpen, Scroll } from '@/components/ui/icons';

export const metadata = {
  title: 'Varanasi Travel Guide 2026 | Ghats, Temples, Spiritual Capital',
  description: 'Complete Varanasi travel guide 2026. Ganga Aarti, Kashi Vishwanath, Sarnath, ghats, best time to visit, food, tips. Call 7668570551.',
  keywords: 'varanasi travel guide, varanasi tourist guide, kashi guide, banaras tourism, varanasi ghats, ganga aarti, varanasi attractions',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/varanasi-travel-guide' },
  openGraph: {
    title: 'Varanasi Travel Guide 2026 | Spiritual Capital of India',
    description: 'Everything about visiting Varanasi. Ghats, temples, Ganga Aarti, Sarnath, food, transport.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/varanasi-travel-guide',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/varanasi-hero.jpg', width: 1200, height: 630, alt: 'Varanasi Travel Guide 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varanasi Travel Guide 2026 | Holy City',
    description: 'Complete Varanasi guide. Ghats, temples, food, transport.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/varanasi-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function VaranasiTravelGuidePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Varanasi Travel Guide", "item": "https://www.trivenicabs.in/varanasi-travel-guide" },
    ],
  };

  const faqData = [
    { question: "How many days do I need in Varanasi?", answer: "2-3 days is ideal. Day 1: Ganga Aarti, ghats walk, Kashi Vishwanath Temple. Day 2: Sunrise boat ride, Sarnath, BHU campus. Day 3: Ramnagar Fort, silk weaving workshops, street food tour. Add a day for Chunar Fort or Vindhyachal trip." },
    { question: "Is Varanasi safe for foreign tourists?", answer: "Yes, Varanasi is generally safe. The ghat areas are well-patrolled, especially during Aarti times. Standard precautions: watch for pickpockets in crowded lanes, avoid narrow alleys at night, and be cautious of self-appointed guides. Our drivers provide trusted local guidance." },
    { question: "What is the best time to visit Varanasi?", answer: "October to March is best with pleasant weather (10-25 degrees Celsius). November is ideal for Dev Deepawali festival. Avoid April-June (extreme heat, 40-45 degrees). Monsoon (July-September) brings high Ganga water levels but fewer crowds. Winter mornings can be foggy." },
    { question: "How do I reach Varanasi from Delhi?", answer: "By flight: 1.5 hours, multiple daily flights. By train: Vande Bharat Express (8 hrs), Kashi Vishwanath Express, or Mahamana Express. By car: 800 km, 12-14 hours via Lucknow. We offer airport and station pickup and local sightseeing packages." },
    { question: "What is Ganga Aarti and where can I see it?", answer: "Ganga Aarti is a spectacular fire ritual performed every evening at Dashashwamedh Ghat. Seven priests perform synchronized worship with large brass lamps, incense, and chanting. Arrive by 6 PM (winter) or 6:30 PM (summer) for a good spot. Best viewed from a boat." },
    { question: "What food is Varanasi famous for?", answer: "Varanasi is famous for Banarasi Paan, Kachori-Sabzi (breakfast), Tamatar Chaat, Malaiyo (winter milk foam sweet), Thandai (with bhang option during Holi), Banarasi Lassi, and street chaat. The city has a rich vegetarian food culture tied to its spiritual heritage." },
    { question: "What should I buy in Varanasi?", answer: "Banarasi silk sarees (world-famous), wooden toys, brass items from Thatheri Bazaar (UNESCO heritage), Gulabi Minakari jewellery, and Rudraksha beads. Visit government emporiums or trusted weavers for genuine Banarasi silk." },
    { question: "Can I take a boat ride on the Ganga?", answer: "Absolutely! Sunrise boat rides (5:30-7 AM) are magical. You can see cremation ghats, morning rituals, and the entire ghat panorama. Cost: 200-500 rupees per person (shared) or 800-1,500 for private boat. Evening Aarti boat rides also available." },
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

  const attractions = [
    { name: "Dashashwamedh Ghat", desc: "Varanasi&apos;s main ghat and the site of the spectacular Ganga Aarti every evening. One of the oldest and most vibrant ghats on the Ganges.", entry: "Free", timing: "All day; Aarti at 6:30 PM", duration: "1-2 hours", icon: Sunrise },
    { name: "Kashi Vishwanath Temple", desc: "One of the 12 Jyotirlingas, the holiest Shiva temple. The new Kashi Vishwanath Corridor connects it directly to the ghats. Gold-plated spire.", entry: "Free (ID required)", timing: "3:00 AM - 11:00 PM", duration: "1-1.5 hours", icon: Landmark },
    { name: "Sarnath", desc: "Where Buddha gave his first sermon. Dhamek Stupa, Ashoka Pillar, archaeological museum with the Lion Capital. 10 km from Varanasi city.", entry: "₹25 Indian / ₹300 Foreign (museum)", timing: "9:00 AM - 5:00 PM", duration: "2-3 hours", icon: BookOpen },
    { name: "Assi Ghat", desc: "Southernmost major ghat, popular with backpackers and students. Morning yoga sessions, boat rides, and a large Shiva lingam under a peepal tree.", entry: "Free", timing: "All day", duration: "1 hour", icon: Compass },
    { name: "Manikarnika Ghat", desc: "The main cremation ghat, considered the most sacred place to attain moksha. A profound spiritual experience. Photography is strictly prohibited.", entry: "Free (respectful visit)", timing: "All day", duration: "30-45 min", icon: Shield },
    { name: "Ramnagar Fort", desc: "18th-century fort across the Ganga. Houses the Maharaja of Banaras&apos;s museum with vintage cars, costumes, weapons, and ivory works.", entry: "₹25 Indian / ₹100 Foreign", timing: "10:00 AM - 5:00 PM", duration: "1.5 hours", icon: Shield },
    { name: "BHU & Bharat Kala Bhavan", desc: "Banaras Hindu University campus is one of Asia&apos;s largest. Bharat Kala Bhavan museum has rare paintings, sculptures, and ancient artifacts.", entry: "₹20 (museum)", timing: "10:30 AM - 4:30 PM", duration: "1-2 hours", icon: BookOpen },
    { name: "Tulsi Manas Temple", desc: "Modern marble temple at the site where Tulsidas wrote Ramcharitmanas. Walls engraved with verses from the epic. Beautiful architecture.", entry: "Free", timing: "5:00 AM - 12:00 PM, 3:30-9:00 PM", duration: "30-45 min", icon: Landmark },
  ];

  const monthlyGuide = [
    { month: "Jan", temp: "5-20°C", weather: "Cold, foggy", crowd: "Moderate", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 60 },
    { month: "Feb", temp: "8-25°C", weather: "Cool", crowd: "High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 82 },
    { month: "Mar", temp: "14-33°C", weather: "Warming", crowd: "High (Holi)", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 85 },
    { month: "Apr", temp: "22-40°C", weather: "Hot", crowd: "Low", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 30 },
    { month: "May", temp: "27-43°C", weather: "Very hot", crowd: "Very Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 10 },
    { month: "Jun", temp: "28-42°C", weather: "Pre-monsoon", crowd: "Very Low", verdict: "Not ideal", color: "bg-red-100 text-red-800", bar: 12 },
    { month: "Jul", temp: "26-34°C", weather: "Monsoon", crowd: "Low", verdict: "Unique", color: "bg-amber-100 text-amber-800", bar: 35 },
    { month: "Aug", temp: "25-33°C", weather: "Peak rain", crowd: "Low", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 30 },
    { month: "Sep", temp: "24-33°C", weather: "Rain fading", crowd: "Low-Med", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 50 },
    { month: "Oct", temp: "20-33°C", weather: "Pleasant", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 92 },
    { month: "Nov", temp: "12-28°C", weather: "Cool, clear", crowd: "Very High", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 100 },
    { month: "Dec", temp: "7-22°C", weather: "Cold, clear", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 88 },
  ];

  const foodSection = [
    { name: "Banarasi Paan", desc: "The legendary betel leaf preparation. Sweet (meetha) or with tobacco (saada). Must-try at Keshav Tambul Bhandar near Dashashwamedh Ghat.", icon: "🌿" },
    { name: "Kachori Sabzi", desc: "Crispy fried pastry with spiced potato curry and tangy chutney. The quintessential Varanasi breakfast. Try at Ram Bhandar (since 1920).", icon: "🫓" },
    { name: "Malaiyo / Nimish", desc: "Ethereal winter-only delicacy -- whipped milk foam flavoured with saffron, served at dawn. Available November to February from street vendors.", icon: "🍦" },
    { name: "Tamatar Chaat", desc: "Unique to Varanasi -- tangy tomato-based chaat with spices, garnished with sev. Found near Godowlia crossing and Vishwanath Gali.", icon: "🍅" },
    { name: "Banarasi Lassi", desc: "Thick, creamy lassi served in earthen pots topped with malai (cream). Blue Lassi near Manikarnika Ghat is world-famous.", icon: "🥛" },
    { name: "Thandai", desc: "Spiced milk drink with almonds, fennel, rose, and saffron. Available year-round but especially popular during Holi and Maha Shivaratri.", icon: "🥤" },
  ];

  const shoppingSection = [
    { name: "Banarasi Silk Sarees", desc: "World-renowned handloom sarees with gold and silver zari work. Visit the weaver colonies in Sarai Mohana or government emporiums for genuine pieces. Takes 15 days to 6 months to weave one saree.", price: "₹3,000 - ₹5,00,000" },
    { name: "Brass & Copperware", desc: "Thatheri Bazaar is a UNESCO-recognized heritage lane of brass artisans. Lamps, utensils, religious items, and decorative pieces crafted using traditional techniques.", price: "₹200 - ₹10,000" },
    { name: "Wooden Toys & Lacquerware", desc: "Traditional wooden toys, figurines, and lacquered items from the Ramnagar and Kandwa areas. Colourful and unique Varanasi souvenirs.", price: "₹100 - ₹3,000" },
    { name: "Rudraksha & Religious Items", desc: "Prayer beads, religious idols, and spiritual accessories available near Vishwanath Temple. Ensure authenticity by buying from established shops.", price: "₹200 - ₹15,000" },
  ];

  const areaGuide = [
    { area: "Assi Ghat Area", desc: "Most popular with backpackers and long-stay travellers. Cafes, yoga studios, and a bohemian vibe. Close to BHU. Good budget to mid-range options.", budget: "₹500-3,000/night" },
    { area: "Dashashwamedh / Godowlia", desc: "Heart of old Varanasi. Walking distance to main ghats and Kashi Vishwanath. Narrow lanes but most immersive experience.", budget: "₹1,000-4,000/night" },
    { area: "Cantonment Area", desc: "Modern Varanasi near the railway station. Clean, spacious hotels. Good for families. 20-30 min drive to ghats.", budget: "₹1,500-6,000/night" },
    { area: "Sigra / Lanka", desc: "Mid-range residential area between old city and Cantt. Good restaurants and shopping. Balanced location for sightseeing.", budget: "₹1,200-5,000/night" },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Varanasi Experts", desc: "Deep local knowledge" },
    { icon: Landmark, title: "World&apos;s Oldest City", desc: "5000+ years of history" },
    { icon: Users, title: "6000+ Pilgrims Served", desc: "Spiritual tourism experts" },
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

  const cityName = "Varanasi";
  const cityTagline = "The spiritual heart of India -- ancient ghats, sacred temples, mesmerizing Ganga Aarti, and a culture that has thrived for over 5,000 years.";
  const welcomeTitle = "Welcome to Varanasi";
  const welcomeText = "Varanasi, also known as Kashi or Banaras, is the spiritual capital of India and one of the world&apos;s oldest continuously inhabited cities. Situated on the banks of the sacred Ganga, this city has been a centre of learning, culture, and devotion for over 5,000 years. The 84 ghats that line the river are the city&apos;s soul -- each with its own story, ritual, and purpose. From the mesmerizing Ganga Aarti at Dashashwamedh Ghat to the ancient Kashi Vishwanath Temple, from the Buddhist pilgrimage site of Sarnath to the famous Banarasi silk looms, Varanasi offers an experience that transcends ordinary tourism. Mark Twain wrote that Varanasi is &quot;older than history, older than tradition, older even than legend.&quot; Whether you seek spiritual awakening, cultural immersion, or simply wish to witness one of humanity&apos;s most enduring civilizations, Varanasi will leave an indelible mark on your soul. This guide covers everything from practical travel tips to hidden gems that only locals know.";
  const stats = [{ value: "5000+", label: "Years Old" }, { value: "84", label: "Sacred Ghats" }, { value: "3M+", label: "Visitors Yearly" }];
  const foodSubtitle = "Ancient vegetarian culinary traditions and iconic street food";
  const bestTimeLegend = [{ color: "bg-emerald-500", label: "Best (Oct-Mar)" }, { color: "bg-amber-400", label: "Okay (Jul-Sep)" }, { color: "bg-red-400", label: "Avoid (May-Jun)" }];
  const transportOptions = [
    { mode: "Triveni Cabs (Private Taxi)", price: "₹1,800-3,000/day", desc: "AC car with driver for all sightseeing including Sarnath. Airport/station pickup available. Call 7668570551.", highlight: true },
    { mode: "Auto-rickshaw", price: "₹30-150/trip", desc: "Common for short trips. Negotiate fare before riding. Cannot enter narrow ghat lanes.", highlight: false },
    { mode: "Cycle Rickshaw", price: "₹20-50/trip", desc: "Best for navigating narrow old city lanes. Eco-friendly and atmospheric way to explore.", highlight: false },
    { mode: "Boat Ride", price: "₹200-1,500", desc: "Essential Varanasi experience. Shared or private boats for sunrise rides and evening Aarti viewing.", highlight: false },
  ];
  const interlinks = [
    { href: "/agra-travel-guide", title: "Agra Travel Guide", desc: "Taj Mahal & more" },
    { href: "/lucknow-travel-guide", title: "Lucknow Travel Guide", desc: "City of Nawabs" },
    { href: "/mathura-vrindavan-travel-guide", title: "Mathura Vrindavan Guide", desc: "Krishna&apos;s birthplace" },
    { href: "/haridwar-travel-guide", title: "Haridwar Travel Guide", desc: "Gateway to Gods" },
    { href: "/rishikesh-travel-guide", title: "Rishikesh Travel Guide", desc: "Yoga Capital" },
    { href: "/sightseeing", title: "All Sightseeing Tours", desc: "Complete tour list" },
    { href: "/varanasi", title: "Varanasi Cab Services", desc: "Local taxi booking" },
    { href: "/jaipur-travel-guide", title: "Jaipur Travel Guide", desc: "Pink City" },
    { href: "/kashmir-travel-guide", title: "Kashmir Travel Guide", desc: "Paradise on Earth" },
  ];
  const ctaTitle = "Need Help Planning Your Varanasi Trip?";
  const ctaDesc = "We know Varanasi&apos;s ghats, temples, and hidden gems. Call us for personalized spiritual tourism advice.";
  const whatsappMsg = "I want to book a cab for Varanasi trip";

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
              <p className="text-stone-500">Your chapter-by-chapter guide to {cityName}</p>
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
              <p className="text-lg text-stone-600 leading-relaxed text-center relative">{welcomeText}</p>
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
            <h2 className="text-2xl font-bold text-stone-800 mb-2 text-center">Explore More About {cityName}</h2>
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
