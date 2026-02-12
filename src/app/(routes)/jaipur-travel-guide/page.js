import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, Calendar, Sunrise, Camera, Coffee, ShoppingBag, Thermometer, Hotel, Landmark, Compass, BookOpen, Scroll } from '@/components/ui/icons';

export const metadata = {
  title: 'Jaipur Travel Guide 2026 | Pink City Attractions, Food & Tips',
  description: 'Complete Jaipur travel guide 2026. Amber Fort, Hawa Mahal, City Palace, Nahargarh, best time to visit, food, shopping. Call 7668570551.',
  keywords: 'jaipur travel guide, jaipur tourist guide, pink city guide, jaipur sightseeing, jaipur tourism, things to do in jaipur, jaipur attractions',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/jaipur-travel-guide' },
  openGraph: {
    title: 'Jaipur Travel Guide 2026 | Complete Pink City Guide',
    description: 'Everything you need to know about visiting Jaipur. Amber Fort, Hawa Mahal, City Palace, food, shopping, transport.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/jaipur-travel-guide',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/jaipur-hero.jpg', width: 1200, height: 630, alt: 'Jaipur Travel Guide 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jaipur Travel Guide 2026 | Pink City',
    description: 'Complete Jaipur guide. Attractions, food, shopping, transport.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/jaipur-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function JaipurTravelGuidePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Jaipur Travel Guide", "item": "https://www.trivenicabs.in/jaipur-travel-guide" },
    ],
  };

  const faqData = [
    { question: "How many days do I need in Jaipur?", answer: "2 days cover the main attractions (Amber Fort, Hawa Mahal, City Palace, Jantar Mantar, Nahargarh Fort). 3 days allow you to explore Jal Mahal, Albert Hall Museum, Birla Mandir, local bazaars, and take a day trip to Ajmer-Pushkar or Ranthambore." },
    { question: "Is Jaipur safe for solo female travellers?", answer: "Yes, Jaipur is generally safe for solo female travellers. Tourist areas are well-policed and the city is accustomed to international visitors. Standard precautions apply: stick to well-lit areas at night, use trusted transport like our cab service, and dress modestly at religious sites." },
    { question: "What is the best time to visit Jaipur?", answer: "October to March is ideal with pleasant weather (15-25 degrees Celsius). November is especially beautiful with clear skies. January can be cold at night (5-8 degrees). April-June is extremely hot (40-45 degrees). July-September brings monsoon rains which make Nahargarh and Jal Mahal stunning but sightseeing can be interrupted." },
    { question: "How do I get from Delhi to Jaipur?", answer: "By car: 5-6 hours via NH48 (270 km). Our Delhi-Jaipur cab costs 5,500-7,000 rupees one way. By train: Shatabdi Express (4.5 hrs), Ajmer Shatabdi, or Vande Bharat. By bus: RSRTC Volvo (5-6 hrs). By flight: 1 hour, multiple airlines." },
    { question: "What food is Jaipur famous for?", answer: "Jaipur is famous for Dal Baati Churma (Rajasthani staple), Laal Maas (fiery mutton curry), Pyaaz Kachori (onion-stuffed pastry), Ghewar (festive sweet), Kulfi Faluda, and Rajasthani Thali. The culinary heritage reflects royal Rajput and Marwari traditions." },
    { question: "What should I buy in Jaipur?", answer: "Jaipur is famous for precious and semi-precious gemstones (Johari Bazaar), Block-printed textiles (Sanganer), Blue pottery, Lac bangles (Tripolia Bazaar), Mojari leather shoes, Bandhani (tie-dye) fabrics, and miniature paintings. Always buy gemstones from certified dealers." },
    { question: "Is Jaipur expensive to visit?", answer: "Jaipur offers great value. Budget: 1,500-3,000 rupees per day (hostels, street food, autos). Mid-range: 4,000-8,000 per day (3-star hotels, restaurants, private cab). Luxury: 15,000+ per day (heritage hotels, fine dining, guided tours). A composite ticket (100 rupees) covers 9 major monuments." },
    { question: "Can I combine Jaipur with Agra and Delhi?", answer: "Absolutely! The Golden Triangle (Delhi-Agra-Jaipur) is India&apos;s most popular tourist circuit. We offer 4-6 day Golden Triangle packages starting from 12,000 rupees. Jaipur to Agra is 240 km (4.5 hrs) with an optional Fatehpur Sikri stop." },
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
    { name: "Amber Fort", desc: "Magnificent hilltop fortress overlooking Maota Lake. Stunning Sheesh Mahal (Mirror Palace), Diwan-i-Aam, and Ganesh Pol gateway. UNESCO World Heritage Site.", entry: "₹100 Indian / ₹500 Foreign", timing: "8:00 AM - 5:30 PM", duration: "2-3 hours", icon: Shield },
    { name: "Hawa Mahal", desc: "Iconic Palace of Winds with 953 jharokhas (windows). Built in 1799 by Maharaja Sawai Pratap Singh. Best photographed from the street at sunrise.", entry: "₹50 Indian / ₹200 Foreign", timing: "9:00 AM - 5:00 PM", duration: "45 min - 1 hr", icon: Camera },
    { name: "City Palace", desc: "Royal residence with Chandra Mahal (still occupied by royals) and Mubarak Mahal. Houses textile museum, armoury, and the world&apos;s largest sterling silver vessels.", entry: "₹200 Indian / ₹700 Foreign", timing: "9:30 AM - 5:00 PM", duration: "1.5-2 hours", icon: Landmark },
    { name: "Nahargarh Fort", desc: "Perched on Aravalli hills overlooking the city. Built in 1734 as a retreat. Offers the best panoramic sunset views of Jaipur. Popular Padao restaurant inside.", entry: "₹50 Indian / ₹200 Foreign", timing: "10:00 AM - 5:30 PM", duration: "1.5-2 hours", icon: Compass },
    { name: "Jantar Mantar", desc: "UNESCO World Heritage astronomical observation site. Built by Maharaja Sawai Jai Singh II in 1734. World&apos;s largest stone sundial (Samrat Yantra).", entry: "₹50 Indian / ₹200 Foreign", timing: "9:00 AM - 4:30 PM", duration: "1 hour", icon: Star },
    { name: "Jal Mahal", desc: "Stunning Water Palace in the middle of Man Sagar Lake. Cannot be entered but the view from shore is iconic. Best visited at sunset or during monsoon.", entry: "Free (exterior only)", timing: "All day (exterior)", duration: "30-45 min", icon: Sunrise },
    { name: "Albert Hall Museum", desc: "Rajasthan&apos;s oldest museum in Indo-Saracenic architecture. Egyptian mummy, decorative arts, and the famous illuminated facade at night.", entry: "₹40 Indian / ₹300 Foreign", timing: "9:00 AM - 5:00 PM", duration: "1-1.5 hours", icon: BookOpen },
    { name: "Jaigarh Fort", desc: "Massive military fortress above Amber Fort with the world&apos;s largest cannon on wheels -- Jaivana. Connected to Amber Fort via underground passage.", entry: "₹100 Indian / ₹200 Foreign", timing: "9:00 AM - 4:30 PM", duration: "1-1.5 hours", icon: Shield },
  ];

  const monthlyGuide = [
    { month: "Jan", temp: "8-22°C", weather: "Cold nights", crowd: "High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 82 },
    { month: "Feb", temp: "10-25°C", weather: "Pleasant", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 92 },
    { month: "Mar", temp: "16-32°C", weather: "Warming up", crowd: "High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 80 },
    { month: "Apr", temp: "22-38°C", weather: "Hot", crowd: "Low", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 35 },
    { month: "May", temp: "27-43°C", weather: "Very hot", crowd: "Very Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 12 },
    { month: "Jun", temp: "28-42°C", weather: "Pre-monsoon", crowd: "Very Low", verdict: "Not ideal", color: "bg-red-100 text-red-800", bar: 10 },
    { month: "Jul", temp: "26-35°C", weather: "Monsoon", crowd: "Low", verdict: "Scenic", color: "bg-amber-100 text-amber-800", bar: 40 },
    { month: "Aug", temp: "25-33°C", weather: "Peak rain", crowd: "Low", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 35 },
    { month: "Sep", temp: "24-34°C", weather: "Rain fading", crowd: "Low-Med", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 50 },
    { month: "Oct", temp: "20-34°C", weather: "Pleasant", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 95 },
    { month: "Nov", temp: "13-29°C", weather: "Cool, clear", crowd: "Very High", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 100 },
    { month: "Dec", temp: "8-24°C", weather: "Cold, clear", crowd: "Very High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 90 },
  ];

  const foodSection = [
    { name: "Dal Baati Churma", desc: "Rajasthan&apos;s iconic dish -- baked wheat balls served with dal and sweet churma. Try at Chokhi Dhani or LMB (Laxmi Mishthan Bhandar).", icon: "🍲" },
    { name: "Laal Maas", desc: "Fiery red mutton curry made with mathania chillies. A royal Rajput dish. Best at Handi Restaurant or 1135 AD at Amber Fort.", icon: "🍖" },
    { name: "Pyaaz Kachori", desc: "Crispy deep-fried pastry stuffed with spiced onion filling. Best at Rawat Mishtan Bhandar on Station Road -- Jaipur&apos;s most famous snack.", icon: "🫓" },
    { name: "Ghewar", desc: "Disc-shaped sweet soaked in sugar syrup, topped with rabdi. Traditional festive sweet especially during Teej and Gangaur festivals.", icon: "🍬" },
    { name: "Rajasthani Thali", desc: "Complete meal with dal, baati, churma, gatte ki sabzi, ker sangri, papad, and more. LMB and Spice Court serve excellent thalis.", icon: "🍛" },
    { name: "Kulfi Faluda", desc: "Rich traditional Indian ice cream with vermicelli, rose syrup, and basil seeds. Try at Pandit Kulfi near Hawa Mahal.", icon: "🍨" },
  ];

  const shoppingSection = [
    { name: "Gemstones & Jewellery", desc: "Jaipur is the gem capital of India. Johari Bazaar has trusted jewellers for emeralds, rubies, sapphires, and diamonds. Always ask for certification from government-approved dealers.", price: "₹500 - ₹5,00,000+" },
    { name: "Block-Printed Textiles", desc: "Hand block-printed fabrics from Sanganer and Bagru are world-famous. Bedsheets, dupattas, sarees, and kurtas in traditional Rajasthani patterns.", price: "₹300 - ₹15,000" },
    { name: "Blue Pottery", desc: "Distinctive turquoise-blue glazed pottery -- a Jaipur specialty brought from Persia. Plates, vases, tiles, and decorative items. Visit Kripal Kumbh for authentic pieces.", price: "₹200 - ₹8,000" },
    { name: "Lac Bangles & Mojari", desc: "Colourful lac bangles from Tripolia Bazaar and hand-stitched Mojari leather shoes from Bapu Bazaar. Quintessential Rajasthani souvenirs.", price: "₹100 - ₹3,000" },
  ];

  const areaGuide = [
    { area: "MI Road & C-Scheme", desc: "Central Jaipur&apos;s commercial hub. Close to restaurants, shopping malls, and cafes. Good mid-range to premium hotels. 15 min from major forts.", budget: "₹2,500-8,000/night", icon: "🏪" },
    { area: "Old City (Pink City)", desc: "Heart of historic Jaipur. Walking distance to Hawa Mahal, City Palace, and Jantar Mantar. Budget to mid-range stays. Vibrant and noisy.", budget: "₹800-3,000/night", icon: "🏨" },
    { area: "Amer Road (Near Amber Fort)", desc: "Heritage hotel belt with converted palaces and havelis. Luxury stays like Samode Haveli. Close to Amber Fort, Jaigarh, and Nahargarh.", budget: "₹5,000-30,000/night", icon: "🏰" },
    { area: "Tonk Road / Airport Area", desc: "Modern area near the airport. Business hotels and new properties. Convenient for early flights. 20-25 min from Old City.", budget: "₹1,500-5,000/night", icon: "🛒" },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Rajasthan Specialists", desc: "We know every fort & palace" },
    { icon: Landmark, title: "UNESCO Heritage City", desc: "Jaipur joined in 2019" },
    { icon: Users, title: "8000+ Tourists Served", desc: "Golden Triangle experts" },
    { icon: Star, title: "4.9 Google Rating", desc: "Verified reviews" },
  ];

  const chapters = [
    { title: "Attractions", icon: Landmark, count: "8 Sites" },
    { title: "Best Time", icon: Thermometer, count: "12 Months" },
    { title: "Food Guide", icon: Coffee, count: "6 Specialties" },
    { title: "Shopping", icon: ShoppingBag, count: "4 Categories" },
    { title: "Stay Guide", icon: Hotel, count: "4 Areas" },
    { title: "Transport", icon: Car, count: "5 Options" },
  ];

  const cityName = "Jaipur";
  const cityTagline = "Your complete guide to the Pink City -- majestic forts, vibrant bazaars, royal palaces, and Rajasthani cuisine. Everything you need for an unforgettable Jaipur experience.";
  const welcomeTitle = "Welcome to the Pink City";
  const welcomeText = "Jaipur, the capital of Rajasthan, is a city where royal heritage meets vibrant modern life. Founded in 1727 by Maharaja Sawai Jai Singh II, it was India&apos;s first planned city, built according to Vastu Shastra principles. The city earned its famous &quot;Pink City&quot; nickname in 1876 when it was painted terracotta pink to welcome Prince Albert. Today, Jaipur is a <strong>UNESCO World Heritage City</strong> and the gateway to Rajasthan&apos;s desert kingdoms. From the magnificent Amber Fort perched on Aravalli hills to the iconic Hawa Mahal&apos;s 953 windows, from the bustling Johari Bazaar&apos;s gemstones to the aroma of dal baati churma, Jaipur offers an experience that is quintessentially Indian. As part of the famous Golden Triangle with Delhi and Agra, Jaipur attracts millions of visitors every year. Whether you are here for history, culture, shopping, or food, this guide will help you plan the perfect Jaipur trip.";
  const stats = [{ value: "1727", label: "Year Founded" }, { value: "UNESCO", label: "Heritage City" }, { value: "5M+", label: "Visitors Yearly" }];
  const foodSubtitle = "Royal Rajasthani cuisine and legendary street food";
  const bestTimeLegend = [{ color: "bg-emerald-500", label: "Best (Oct-Mar)" }, { color: "bg-amber-400", label: "Okay (Jul-Sep)" }, { color: "bg-red-400", label: "Avoid (May-Jun)" }];
  const transportOptions = [
    { mode: "Triveni Cabs (Private Taxi)", price: "₹2,000-3,500/day", desc: "AC car with driver. Most comfortable way to cover Jaipur&apos;s spread-out forts and palaces. Delhi to Jaipur one-way from ₹5,500. Call 7668570551.", highlight: true },
    { mode: "Auto-rickshaw", price: "₹50-200/trip", desc: "Available everywhere. Negotiate fare before riding or use metered autos. Good for short city trips.", highlight: false },
    { mode: "Jaipur Metro", price: "₹10-30/trip", desc: "Modern metro covering Mansarovar to Badi Chaupar. Convenient for reaching Old City from south Jaipur.", highlight: false },
    { mode: "City Bus (JCTSL)", price: "₹10-25/trip", desc: "AC and non-AC buses connecting major areas. Low-floor buses run on main routes. Affordable but slow.", highlight: false },
    { mode: "Cycle Rickshaw", price: "₹20-50/trip", desc: "Perfect for exploring narrow lanes of Old City and bazaars. Eco-friendly and great for soaking in the atmosphere.", highlight: false },
  ];
  const interlinks = [
    { href: "/agra-travel-guide", title: "Agra Travel Guide", desc: "Taj Mahal & more" },
    { href: "/udaipur-travel-guide", title: "Udaipur Travel Guide", desc: "City of Lakes" },
    { href: "/jaisalmer-travel-guide", title: "Jaisalmer Travel Guide", desc: "Golden City" },
    { href: "/jodhpur-travel-guide", title: "Jodhpur Travel Guide", desc: "Blue City" },
    { href: "/delhi-to-jaipur", title: "Delhi to Jaipur Cab", desc: "Book private taxi" },
    { href: "/sightseeing", title: "All Sightseeing Tours", desc: "Complete tour list" },
    { href: "/shimla-travel-guide", title: "Shimla Travel Guide", desc: "Queen of Hills" },
    { href: "/same-day-agra-tour-from-delhi", title: "Same Day Agra Tour", desc: "Golden Triangle stop" },
    { href: "/mathura-vrindavan-travel-guide", title: "Mathura Vrindavan Guide", desc: "Spiritual heritage" },
  ];
  const ctaTitle = "Need Help Planning Your Jaipur Trip?";
  const ctaDesc = "We are Rajasthan travel specialists. Call us for personalized advice on itinerary, timing, and transport.";
  const whatsappMsg = "I want to book a cab for Jaipur trip";

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
