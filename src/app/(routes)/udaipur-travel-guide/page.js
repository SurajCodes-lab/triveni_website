import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, Calendar, Sunrise, Camera, Coffee, ShoppingBag, Thermometer, Hotel, Landmark, Compass, BookOpen, Scroll } from '@/components/ui/icons';

export const metadata = {
  title: 'Udaipur Travel Guide 2026 | City of Lakes, Palaces & Romance',
  description: 'Complete Udaipur travel guide 2026. City Palace, Lake Pichola, Jag Mandir, Saheliyon Ki Bari, best time to visit, food, tips. Call 7668570551.',
  keywords: 'udaipur travel guide, udaipur tourist guide, city of lakes, udaipur sightseeing, udaipur tourism, things to do in udaipur, udaipur attractions',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/udaipur-travel-guide' },
  openGraph: {
    title: 'Udaipur Travel Guide 2026 | City of Lakes Complete Guide',
    description: 'Everything about visiting Udaipur. City Palace, Lake Pichola, food, shopping, transport.',
    type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/udaipur-travel-guide', siteName: 'Triveni Cabs',
    images: [{ url: '/images/udaipur-hero.jpg', width: 1200, height: 630, alt: 'Udaipur Travel Guide 2026' }],
  },
  twitter: { card: 'summary_large_image', title: 'Udaipur Travel Guide 2026', description: 'Complete Udaipur guide. Palaces, lakes, food, transport.', creator: '@trivenicabs', site: '@trivenicabs', images: ['/images/udaipur-hero.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function UdaipurTravelGuidePage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
    { "@type": "ListItem", "position": 2, "name": "Udaipur Travel Guide", "item": "https://www.trivenicabs.in/udaipur-travel-guide" },
  ]};

  const faqData = [
    { question: "How many days do I need in Udaipur?", answer: "2-3 days is ideal. Day 1: City Palace, Jagdish Temple, Lake Pichola boat ride. Day 2: Saheliyon Ki Bari, Fateh Sagar Lake, Monsoon Palace sunset. Day 3: Day trip to Kumbhalgarh Fort and Ranakpur Jain Temple (both within 90 km)." },
    { question: "What is the best time to visit Udaipur?", answer: "September to March is best. Post-monsoon (Sep-Nov) is magical -- lakes are full, everything is green. October-February has pleasant weather (12-28 degrees). Summers (Apr-Jun) are very hot (38-42 degrees). Monsoon (Jul-Aug) brings heavy rain but dramatic scenery." },
    { question: "How do I reach Udaipur from Delhi?", answer: "By flight: 1.5 hours, daily flights from Delhi. By train: Chetak Express or Mewar Express (12-14 hrs). By car: 660 km via Jaipur (10-12 hrs). We offer Delhi-Udaipur cab service with optional Jaipur-Ajmer stops." },
    { question: "Is Udaipur good for honeymoons?", answer: "Udaipur is India&apos;s most romantic city! Lake-facing hotels, boat rides at sunset, candlelight dinners at Ambrai or Upre, heritage palace stays (Taj Lake Palace, Oberoi Udaivilas). We offer special honeymoon packages with decorated cars and customized itineraries." },
    { question: "What food is Udaipur famous for?", answer: "Udaipur is known for Dal Baati Churma, Gatte ki Sabzi, Ker Sangri, Laal Maas, and fusion lakeside dining. The Old City has excellent street food -- try Shreenath Dosa near Jagdish Temple and the famous Savage Garden for continental cuisine." },
    { question: "Can I take a boat ride on Lake Pichola?", answer: "Yes! Boat rides run from Rameshwar Ghat (City Palace jetty). 30-minute rides cost 400-800 rupees per person. Sunset rides are the most popular. You can also visit Jag Mandir island (separate ticket). Book in advance during peak season." },
    { question: "What should I buy in Udaipur?", answer: "Miniature paintings (Rajput and Mughal styles), Silver jewellery from Bada Bazaar, Bandhani textiles, wooden toys, and marble handicrafts. Hathi Pol bazaar and Clock Tower market are the best shopping areas." },
    { question: "Is Udaipur walkable?", answer: "The old city near City Palace, Jagdish Temple, and the ghats is very walkable. But to reach Fateh Sagar Lake, Monsoon Palace, Sajjangarh, or day trips to Kumbhalgarh/Ranakpur, you need a car. Our local sightseeing package covers everything." },
  ];

  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };

  const attractions = [
    { name: "City Palace", desc: "Rajasthan&apos;s largest palace complex overlooking Lake Pichola. 11 palaces built over 400 years by different rulers. Museum, courtyards, and stunning lake views.", entry: "₹300 Indian / ₹700 Foreign", timing: "9:30 AM - 5:30 PM", duration: "2-3 hours", icon: Landmark },
    { name: "Lake Pichola", desc: "The heart of Udaipur. Artificial freshwater lake created in 1362. Home to Jag Mandir and Taj Lake Palace (island hotel). Sunset boat rides are a must.", entry: "₹400-800 (boat ride)", timing: "10:00 AM - 5:00 PM", duration: "1-1.5 hours", icon: Sunrise },
    { name: "Jag Mandir", desc: "Island palace in Lake Pichola with Mughal-style gardens. Shah Jahan took refuge here, and it inspired the Taj Mahal. Accessible by boat from City Palace.", entry: "₹500 (includes boat)", timing: "10:00 AM - 6:00 PM", duration: "1 hour", icon: Shield },
    { name: "Saheliyon Ki Bari", desc: "Garden of the Maidens -- built for 48 royal ladies. Marble elephants, kiosks, lotus pool, and fountains. Peaceful and photogenic.", entry: "₹30 Indian / ₹200 Foreign", timing: "9:00 AM - 7:00 PM", duration: "45 min", icon: Camera },
    { name: "Monsoon Palace (Sajjangarh)", desc: "Hilltop palace offering panoramic views of Udaipur and the Aravalli range. Best visited at sunset. Used as a filming location for James Bond (Octopussy).", entry: "₹80 Indian / ₹325 Foreign", timing: "9:00 AM - 5:30 PM", duration: "1 hour", icon: Compass },
    { name: "Jagdish Temple", desc: "Magnificent 17th-century Vishnu temple in Indo-Aryan style. Three-storey structure with intricate carvings. Located in the heart of the Old City.", entry: "Free", timing: "5:15 AM - 1:00 PM, 5:15-8:00 PM", duration: "30-45 min", icon: Landmark },
    { name: "Fateh Sagar Lake", desc: "Second-largest artificial lake in Udaipur. Nehru Park on an island, boat rides, and the solar observatory. Popular with locals for evening walks.", entry: "Free (boat ₹200+)", timing: "All day", duration: "1 hour", icon: Sunrise },
    { name: "Kumbhalgarh Fort (Day Trip)", desc: "Massive fort with the world&apos;s second-longest wall (36 km). 90 km from Udaipur. UNESCO World Heritage Site. Combine with Ranakpur Jain Temple.", entry: "₹100 Indian / ₹400 Foreign", timing: "9:00 AM - 5:00 PM", duration: "Full day trip", icon: Shield },
  ];

  const monthlyGuide = [
    { month: "Jan", temp: "8-24°C", weather: "Cool, clear", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 90 },
    { month: "Feb", temp: "10-27°C", weather: "Pleasant", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 92 },
    { month: "Mar", temp: "16-33°C", weather: "Warm", crowd: "High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 78 },
    { month: "Apr", temp: "22-38°C", weather: "Hot", crowd: "Low", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 30 },
    { month: "May", temp: "26-42°C", weather: "Very hot", crowd: "Very Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 10 },
    { month: "Jun", temp: "27-40°C", weather: "Pre-monsoon", crowd: "Low", verdict: "Not ideal", color: "bg-red-100 text-red-800", bar: 15 },
    { month: "Jul", temp: "25-33°C", weather: "Monsoon", crowd: "Low", verdict: "Dramatic", color: "bg-amber-100 text-amber-800", bar: 45 },
    { month: "Aug", temp: "24-32°C", weather: "Peak rain", crowd: "Low", verdict: "Green", color: "bg-amber-100 text-amber-800", bar: 42 },
    { month: "Sep", temp: "23-33°C", weather: "Post-rain", crowd: "Medium", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 80 },
    { month: "Oct", temp: "20-34°C", weather: "Pleasant", crowd: "High", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 100 },
    { month: "Nov", temp: "14-30°C", weather: "Cool", crowd: "Very High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 95 },
    { month: "Dec", temp: "9-26°C", weather: "Cold nights", crowd: "Very High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 88 },
  ];

  const foodSection = [
    { name: "Dal Baati Churma", desc: "Rajasthan&apos;s signature dish served everywhere in Udaipur. Baked wheat balls with lentils and sweet crumbled wheat. Try at Natraj Dining Hall.", icon: "🍲" },
    { name: "Laal Maas", desc: "Spicy red mutton curry -- a Rajasthani royal specialty. Best at Ambrai restaurant with stunning lake views, or at Jheel&apos;s Ginger Coffee Bar.", icon: "🍖" },
    { name: "Gatte Ki Sabzi", desc: "Gram flour dumplings in a tangy yogurt gravy. A Rajasthani comfort food staple. Available at most traditional restaurants.", icon: "🍛" },
    { name: "Lakeside Dining", desc: "Udaipur&apos;s unique selling point -- candlelit dinners overlooking Lake Pichola. Ambrai, Upre by 1559 AD, and Raas Leela are top picks.", icon: "🕯️" },
    { name: "Kachori & Mirchi Vada", desc: "Popular street food -- crispy pastries and chilli fritters. Try at Sukhadia Circle food stalls or the famous stalls near Clock Tower.", icon: "🫓" },
    { name: "Shahi Thali", desc: "Royal Rajasthani thali with 15-20 items including dal, baati, ker sangri, gatte, papad, and sweets. Aravalli restaurant at Fateh Prakash Palace.", icon: "🍽️" },
  ];

  const shoppingSection = [
    { name: "Miniature Paintings", desc: "Udaipur is famous for Rajput and Mughal-style miniature paintings on silk, marble, and paper. Visit art galleries in Gangaur Ghat area for genuine work by local artists.", price: "₹500 - ₹50,000" },
    { name: "Silver Jewellery", desc: "Intricate Rajasthani silver work -- earrings, anklets, necklaces, and oxidised jewellery. Bada Bazaar and Hathi Pol are the best areas.", price: "₹200 - ₹20,000" },
    { name: "Bandhani Textiles", desc: "Traditional tie-dye fabrics in vibrant colours. Sarees, dupattas, and dress materials. Bapu Bazaar and Palace Road shops offer good variety.", price: "₹300 - ₹10,000" },
    { name: "Wooden Handicrafts", desc: "Hand-carved wooden furniture, boxes, and decorative items. Shilpgram crafts village (3 km from city) is excellent for authentic pieces.", price: "₹200 - ₹15,000" },
  ];

  const areaGuide = [
    { area: "Old City (Lake Pichola)", desc: "Most atmospheric area. Walking distance to City Palace, Jagdish Temple, and ghats. Heritage havelis, rooftop cafes, and lake views. Can be noisy.", budget: "₹1,000-5,000/night" },
    { area: "Fateh Sagar Area", desc: "Quieter, more modern neighbourhood. Close to Fateh Sagar Lake and Saheliyon Ki Bari. Good mid-range hotels. Less touristy feel.", budget: "₹1,500-4,000/night" },
    { area: "Hanuman Ghat / Ambrai", desc: "Boutique hotel zone with stunning lake views. Some of Udaipur&apos;s best restaurants. Peaceful and romantic. Ideal for couples.", budget: "₹3,000-15,000/night" },
    { area: "Lake Palace Road", desc: "Luxury hotel corridor with 5-star properties. Oberoi Udaivilas, Trident, and Leela Palace. Premium experience with lake access.", budget: "₹8,000-50,000/night" },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Rajasthan Experts", desc: "Udaipur & beyond" },
    { icon: Landmark, title: "Venice of the East", desc: "City of 7 lakes" },
    { icon: Users, title: "5000+ Tourists Served", desc: "Lake city specialists" },
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

  const cityName = "Udaipur";
  const cityTagline = "The Venice of the East -- shimmering lakes, magnificent palaces, romantic sunsets, and Rajput grandeur nestled in the Aravalli hills.";
  const welcomeTitle = "Welcome to the City of Lakes";
  const welcomeText = "Udaipur, often called the Venice of the East, is Rajasthan&apos;s most romantic city. Founded in 1559 by Maharana Udai Singh II as the capital of the Mewar kingdom, Udaipur is set around a series of beautiful artificial lakes and surrounded by the ancient Aravalli hills. The city&apos;s white marble palaces, serene lake waters, and rich cultural heritage have captivated visitors for centuries. Lake Pichola, with the ethereal Taj Lake Palace floating at its centre, is one of India&apos;s most iconic images. The City Palace complex, the largest in Rajasthan, tells the story of the Mewar dynasty&apos;s 1,500-year unbroken lineage -- the longest-ruling dynasty in the world. Beyond its royal heritage, Udaipur charms with its narrow old-city lanes, vibrant bazaars, exceptional Rajasthani cuisine, and warm hospitality. From honeymoon couples to history enthusiasts, from art lovers to adventure seekers heading to Kumbhalgarh and Ranakpur, Udaipur is the perfect base for exploring southern Rajasthan.";
  const stats = [{ value: "1559", label: "Year Founded" }, { value: "7", label: "Major Lakes" }, { value: "4M+", label: "Visitors Yearly" }];
  const foodSubtitle = "Royal Rajasthani cuisine meets romantic lakeside dining";
  const bestTimeLegend = [{ color: "bg-emerald-500", label: "Best (Sep-Mar)" }, { color: "bg-amber-400", label: "Okay (Jul-Aug)" }, { color: "bg-red-400", label: "Avoid (May-Jun)" }];
  const transportOptions = [
    { mode: "Triveni Cabs (Private Taxi)", price: "₹2,000-3,500/day", desc: "AC car with driver for city sightseeing and day trips to Kumbhalgarh, Ranakpur. Delhi to Udaipur one-way available. Call 7668570551.", highlight: true },
    { mode: "Auto-rickshaw", price: "₹50-200/trip", desc: "Good for short distances within the city. Negotiate fare before riding.", highlight: false },
    { mode: "Boat Rides", price: "₹400-800/person", desc: "Essential for Lake Pichola and Fateh Sagar. Book at City Palace jetty or Fateh Sagar ghat.", highlight: false },
    { mode: "Walking (Old City)", price: "Free", desc: "The old city around City Palace and Jagdish Temple is best explored on foot. Narrow lanes are pedestrian-friendly.", highlight: false },
  ];
  const interlinks = [
    { href: "/jaipur-travel-guide", title: "Jaipur Travel Guide", desc: "Pink City" },
    { href: "/jodhpur-travel-guide", title: "Jodhpur Travel Guide", desc: "Blue City" },
    { href: "/jaisalmer-travel-guide", title: "Jaisalmer Travel Guide", desc: "Golden City" },
    { href: "/agra-travel-guide", title: "Agra Travel Guide", desc: "Taj Mahal & more" },
    { href: "/shimla-travel-guide", title: "Shimla Travel Guide", desc: "Queen of Hills" },
    { href: "/sightseeing", title: "All Sightseeing Tours", desc: "Complete tour list" },
    { href: "/manali-travel-guide", title: "Manali Travel Guide", desc: "Mountain adventure" },
    { href: "/kashmir-travel-guide", title: "Kashmir Travel Guide", desc: "Paradise on Earth" },
    { href: "/mathura-vrindavan-travel-guide", title: "Mathura Vrindavan Guide", desc: "Spiritual heritage" },
  ];
  const ctaTitle = "Need Help Planning Your Udaipur Trip?";
  const ctaDesc = "Romantic getaway or heritage exploration -- we plan the perfect Udaipur experience for you.";
  const whatsappMsg = "I want to book a cab for Udaipur trip";

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
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight tracking-tight">{cityName} Travel <span className="shimmer-gold">Guide</span></h1>
            <div className="flex items-center justify-center gap-4 mb-6"><div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500/60" /><span className="text-amber-400 font-semibold tracking-widest text-sm">2026 EDITION</span><div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500/60" /></div>
            <p className="text-lg md:text-xl text-amber-100/70 mb-10 max-w-3xl mx-auto leading-relaxed font-light">{cityTagline}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 transition-all duration-500"><Phone className="w-5 h-5" /> Call Now: 7668570551</Link>
              <Link href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-500/30 hover:bg-white/20 hover:scale-105 transition-all duration-500">WhatsApp Us</Link>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-amber-950/60 backdrop-blur-2xl border-t border-amber-500/20">
            <div className="max-w-6xl mx-auto px-4 py-5"><div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {trustFeatures.map((f, i) => (<div key={i} className="flex items-center gap-3 text-white/90"><div className="p-2 bg-amber-500/20 rounded-lg backdrop-blur-sm"><f.icon className="w-5 h-5 text-amber-300" /></div><div><div className="font-bold text-sm">{f.title}</div><div className="text-xs text-amber-200/60">{f.desc}</div></div></div>))}
            </div></div>
          </div>
        </section>

        <section className="py-16 px-4"><div className="max-w-5xl mx-auto"><div className="text-center mb-10"><h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Table of Contents</h2><p className="text-stone-500">Your chapter-by-chapter guide to {cityName}</p></div><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">{chapters.map((ch, i) => (<div key={i} className="glass-card-light rounded-xl p-4 text-center hover-lift cursor-default group"><div className="w-12 h-12 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mb-3 group-hover:from-amber-200 group-hover:to-orange-200 transition-all"><ch.icon className="w-6 h-6 text-amber-700" /></div><div className="font-bold text-stone-800 text-sm">{ch.title}</div><div className="text-xs text-amber-600 font-medium mt-1">{ch.count}</div></div>))}</div></div></section>

        <section className="py-16 px-4"><div className="max-w-4xl mx-auto"><div className="glass-card-light rounded-3xl p-8 md:p-12 relative overflow-hidden"><div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-amber-200/40 to-transparent rounded-br-full" /><div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-orange-200/40 to-transparent rounded-tl-full" /><div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold tracking-wider shadow-lg">CHAPTER 0</div><h2 className="text-3xl font-bold text-stone-800 mb-6 text-center mt-4 relative">{welcomeTitle}</h2><p className="text-lg text-stone-600 leading-relaxed text-center relative">{welcomeText}</p><div className="flex justify-center gap-8 mt-8 text-center relative">{stats.map((s, i) => (<div key={i} className="flex items-center gap-4">{i > 0 && <div className="w-px h-12 bg-amber-200" />}<div><div className="glass-card-light rounded-xl px-4 py-2 mb-1"><div className="text-2xl md:text-3xl font-bold text-amber-700">{s.value}</div></div><div className="text-xs text-stone-500 mt-1">{s.label}</div></div></div>))}</div></div></div></section>

        <section className="py-16 px-4 bg-white/80"><div className="max-w-6xl mx-auto"><div className="flex items-center gap-3 mb-2"><div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">CHAPTER 1</div></div><h2 className="text-3xl font-bold text-stone-800 mb-2">Best Time to Visit {cityName}</h2><p className="text-stone-500 mb-10">Visual month-by-month guide -- taller bars mean better visiting conditions</p><div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 mb-8">{monthlyGuide.map((m, i) => (<div key={i} className="flex flex-col items-center group cursor-default"><div className="w-full h-32 flex items-end mb-2 relative"><div className={`w-full rounded-t-lg transition-all duration-500 group-hover:opacity-80 group-hover:scale-105 origin-bottom ${m.bar > 75 ? 'bg-gradient-to-t from-emerald-600 to-emerald-400' : m.bar > 40 ? 'bg-gradient-to-t from-amber-500 to-amber-300' : 'bg-gradient-to-t from-red-400 to-red-300'}`} style={{ height: `${m.bar}%` }} /></div><div className="text-xs font-bold text-stone-700">{m.month}</div><div className="text-[10px] text-stone-400">{m.temp}</div><div className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full mt-1 ${m.color}`}>{m.verdict}</div></div>))}</div><div className="flex flex-wrap items-center justify-center gap-4 text-xs">{bestTimeLegend.map((l, i) => (<div key={i} className="flex items-center gap-1.5"><div className={`w-3 h-3 rounded ${l.color}`} /> {l.label}</div>))}</div></div></section>

        <section className="py-16 px-4"><div className="max-w-5xl mx-auto"><div className="flex items-center gap-3 mb-2"><div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">CHAPTER 2</div></div><h2 className="text-3xl font-bold text-stone-800 mb-10">Top Attractions in {cityName}</h2><div className="space-y-5">{attractions.map((a, idx) => (<div key={idx} className="glass-card-light rounded-3xl overflow-hidden hover-lift group"><div className="flex flex-col md:flex-row"><div className="md:w-20 bg-gradient-to-b from-amber-600 to-orange-600 flex items-center justify-center py-4 md:py-0"><span className="text-3xl font-bold text-white/80">{String(idx + 1).padStart(2, '0')}</span></div><div className="flex-1 p-6"><h3 className="text-xl font-bold text-stone-800 flex items-center gap-2 mb-2"><a.icon className="w-5 h-5 text-amber-600" /> {a.name}</h3><p className="text-stone-600 mb-4">{a.desc}</p><div className="flex flex-wrap gap-2 text-sm"><span className="bg-gradient-to-r from-amber-50 to-orange-50 backdrop-blur-sm border border-amber-200/60 px-3 py-1.5 rounded-full text-amber-800 font-medium">Entry: {a.entry}</span><span className="bg-gradient-to-r from-blue-50 to-sky-50 backdrop-blur-sm border border-blue-200/60 px-3 py-1.5 rounded-full text-blue-700 font-medium"><Clock className="w-3 h-3 inline mr-1" />{a.timing}</span><span className="bg-gradient-to-r from-emerald-50 to-green-50 backdrop-blur-sm border border-emerald-200/60 px-3 py-1.5 rounded-full text-emerald-700 font-medium">{a.duration}</span></div></div></div></div>))}</div></div></section>

        <section className="py-16 px-4 bg-gradient-to-br from-orange-50/80 to-amber-50/80"><div className="max-w-5xl mx-auto"><div className="flex items-center gap-3 mb-2"><div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">CHAPTER 3</div></div><h2 className="text-3xl font-bold text-stone-800 mb-2">{cityName} Food Guide</h2><p className="text-stone-500 mb-10">{foodSubtitle}</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">{foodSection.map((food, idx) => (<div key={idx} className="glass-card-light rounded-2xl p-5 hover-lift relative overflow-hidden group"><div className="absolute -top-4 -right-4 text-7xl opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">{food.icon}</div><h3 className="font-bold text-stone-800 mb-2 flex items-center gap-2 relative"><Coffee className="w-4 h-4 text-amber-600" /> {food.name}</h3><p className="text-stone-600 text-sm relative">{food.desc}</p></div>))}</div></div></section>

        <section className="py-16 px-4"><div className="max-w-5xl mx-auto"><div className="flex items-center gap-3 mb-2"><div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">CHAPTER 4</div></div><h2 className="text-3xl font-bold text-stone-800 mb-10">Shopping in {cityName}</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-5">{shoppingSection.map((item, idx) => (<div key={idx} className="glass-card-light rounded-2xl p-6 hover-lift"><div className="flex items-start justify-between mb-3"><h3 className="font-bold text-stone-800 flex items-center gap-2"><ShoppingBag className="w-4 h-4 text-amber-600" /> {item.name}</h3><span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-md">{item.price}</span></div><p className="text-stone-600 text-sm">{item.desc}</p></div>))}</div></div></section>

        <section className="py-16 px-4 bg-white/80"><div className="max-w-5xl mx-auto"><div className="flex items-center gap-3 mb-2"><div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">CHAPTER 5</div></div><h2 className="text-3xl font-bold text-stone-800 mb-8">Getting Around {cityName}</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-4">{transportOptions.map((t, idx) => (<div key={idx} className={`rounded-2xl p-5 transition-all duration-500 ${t.highlight ? 'glass-card-light border-2 border-amber-400 shadow-xl relative overflow-hidden' : 'glass-card-light hover:border-amber-200'}`}>{t.highlight && <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 opacity-50" />}<div className="relative"><div className="flex items-start justify-between mb-2"><h3 className="font-bold text-stone-800">{t.mode}</h3>{t.highlight && <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md" style={{ animation: 'pulse-gold 2s ease-in-out infinite' }}>RECOMMENDED</span>}</div><p className="text-amber-700 font-bold text-sm mb-1">{t.price}</p><p className="text-stone-600 text-sm">{t.desc}</p></div></div>))}</div></div></section>

        <section className="py-16 px-4"><div className="max-w-5xl mx-auto"><div className="flex items-center gap-3 mb-2"><div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">CHAPTER 6</div></div><h2 className="text-3xl font-bold text-stone-800 mb-10">Where to Stay in {cityName}</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-5">{areaGuide.map((a, idx) => (<div key={idx} className="glass-card-light rounded-2xl overflow-hidden hover-lift"><div className="h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500" /><div className="bg-gradient-to-r from-amber-600 to-orange-600 px-5 py-3 flex items-center justify-between"><h3 className="font-bold text-white flex items-center gap-2"><Hotel className="w-4 h-4" /> {a.area}</h3><span className="text-amber-100 text-sm font-medium bg-white/10 px-3 py-0.5 rounded-full">{a.budget}</span></div><div className="p-5"><p className="text-stone-600 text-sm">{a.desc}</p></div></div>))}</div></div></section>

        <section className="py-16 px-4 bg-white/80"><div className="max-w-4xl mx-auto"><div className="flex items-center gap-3 mb-2"><div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">APPENDIX</div></div><h2 className="text-3xl font-bold text-stone-800 mb-10">Frequently Asked Questions</h2><div className="space-y-4">{faqData.map((faq, idx) => (<div key={idx} className="border-l-4 border-amber-500 glass-card-light rounded-r-2xl p-6 hover:border-amber-400 hover:shadow-lg transition-all duration-500"><h3 className="text-lg font-bold text-stone-800 mb-2 flex items-start gap-2"><span className="bg-gradient-to-br from-amber-500 to-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 shadow-md">Q{idx + 1}</span>{faq.question}</h3><p className="text-stone-600 ml-9">{faq.answer}</p></div>))}</div></div></section>

        <section className="py-16 px-4"><div className="max-w-5xl mx-auto"><h2 className="text-2xl font-bold text-stone-800 mb-2 text-center">Explore More About {cityName}</h2><p className="text-stone-500 text-center mb-8 text-sm">Related guides and tour pages from our collection</p><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">{interlinks.map((link, idx) => (<Link key={idx} href={link.href} className="glass-card-light flex items-center gap-3 p-4 rounded-xl hover:border-amber-400/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 group"><div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-2.5 group-hover:from-amber-200 group-hover:to-orange-200 transition-all"><ChevronRight className="w-4 h-4 text-amber-700 group-hover:translate-x-1 transition-transform" /></div><div><div className="font-bold text-stone-800 text-sm group-hover:text-amber-700 transition-colors">{link.title}</div><div className="text-xs text-stone-400">{link.desc}</div></div></Link>))}</div></div></section>

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
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-gold 2s ease-in-out infinite' }}><Phone className="w-5 h-5" /> Call: 7668570551</Link>
              <Link href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="inline-flex items-center justify-center gap-2 bg-amber-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-400/30 hover:bg-amber-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">WhatsApp Us <ArrowRight className="w-5 h-5" /></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
