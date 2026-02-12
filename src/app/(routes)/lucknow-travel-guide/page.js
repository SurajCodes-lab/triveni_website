import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, Calendar, Sunrise, Camera, Coffee, ShoppingBag, Thermometer, Hotel, Landmark, Compass, BookOpen, Scroll } from '@/components/ui/icons';

export const metadata = {
  title: 'Lucknow Travel Guide 2026 | City of Nawabs, Kebabs & Heritage',
  description: 'Complete Lucknow travel guide 2026. Bara Imambara, Rumi Darwaza, British Residency, Hazratganj, food, Awadhi cuisine. Call 7668570551.',
  keywords: 'lucknow travel guide, lucknow tourist guide, city of nawabs, lucknow sightseeing, lucknow tourism, things to do in lucknow',
  authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'), alternates: { canonical: '/lucknow-travel-guide' },
  openGraph: { title: 'Lucknow Travel Guide 2026 | City of Nawabs', description: 'Everything about visiting Lucknow. Heritage, kebabs, culture, transport.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/lucknow-travel-guide', siteName: 'Triveni Cabs', images: [{ url: '/images/lucknow-hero.jpg', width: 1200, height: 630, alt: 'Lucknow Travel Guide 2026' }] },
  twitter: { card: 'summary_large_image', title: 'Lucknow Travel Guide 2026', description: 'Complete Lucknow guide. Heritage, food, shopping, transport.', creator: '@trivenicabs', site: '@trivenicabs', images: ['/images/lucknow-hero.jpg'] },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function LucknowTravelGuidePage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Lucknow Travel Guide", "item": "https://www.trivenicabs.in/lucknow-travel-guide" }] };
  const faqData = [
    { question: "How many days do I need in Lucknow?", answer: "2 days covers the main attractions. Day 1: Bara Imambara, Chhota Imambara, Rumi Darwaza, British Residency. Day 2: Hazratganj shopping, Ambedkar Park, food tour through Chowk. Add a day for Janeshwar Mishra Park, Lucknow Zoo, and the new Ekana Stadium area." },
    { question: "What is the best time to visit Lucknow?", answer: "October to March is ideal (15-28 degrees). November-February is perfect with cool weather. April-June is very hot (40-45 degrees). July-September is monsoon season. Winter is best for food tours as kebab shops are at their finest." },
    { question: "How do I reach Lucknow from Delhi?", answer: "By train: Tejas Express (6 hrs), Lucknow Mail, or Shatabdi. By car: 530 km, 7-8 hours via Agra Expressway + Lucknow Expressway. Our cab costs 6,000-8,000 rupees one way. By flight: 1 hour, multiple daily flights." },
    { question: "What food is Lucknow famous for?", answer: "Lucknow is India&apos;s kebab capital! Tunday Kebabi (since 1905), Galawati Kebab, Kakori Kebab, Biryani (Lucknowi Dum style), Sheermal, Kulcha-Nihari, and Basket Chaat. The Chowk area is a food paradise." },
    { question: "Is Lucknow safe for tourists?", answer: "Yes, Lucknow is known for its tehzeeb (etiquette) and is one of India&apos;s safest cities for tourists. The city is well-policed, people are helpful, and tourist areas are well-maintained. Lucknow is particularly safe for female travellers." },
    { question: "What should I buy in Lucknow?", answer: "Chikankari embroidery (world-famous), Lucknowi Attar (perfumes), Zardozi work, Lakhnavi Kurtas, and Nawabi jewellery. Hazratganj for branded shops, Aminabad for Chikankari, and Chowk for traditional items." },
    { question: "What is the Bhool Bhulaiya?", answer: "The Bhool Bhulaiya is a labyrinth of 1,024 narrow passages in the upper floors of Bara Imambara. It is one of the most unique architectural marvels in India. A guide is recommended to avoid getting lost. The rooftop offers panoramic city views." },
    { question: "Can I combine Lucknow with Agra or Varanasi?", answer: "Yes! Lucknow to Agra is 330 km (4-5 hrs via Expressway). Lucknow to Varanasi is 300 km (5-6 hrs). We offer multi-city UP heritage packages covering Agra, Lucknow, Varanasi, and Ayodhya from 15,000 rupees for 5-6 days." },
  ];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };

  const attractions = [
    { name: "Bara Imambara", desc: "Architectural marvel built in 1784 by Nawab Asaf-ud-Daula. Houses the famous Bhool Bhulaiya labyrinth with 1,024 narrow passages. One of the largest arched constructions without beams.", entry: "₹50 Indian / ₹500 Foreign", timing: "6:00 AM - 5:00 PM", duration: "2-3 hours", icon: Landmark },
    { name: "Rumi Darwaza", desc: "Imposing 60-foot gateway modelled after the Sublime Porte in Istanbul. Built in 1784 as an entrance to old Lucknow. Beautifully illuminated at night.", entry: "Free", timing: "All day (best at night)", duration: "20-30 min", icon: Shield },
    { name: "British Residency", desc: "Haunting ruins of the 1857 Siege of Lucknow. Well-preserved colonial buildings with cannon ball marks. Museum inside tells the story of the Indian Rebellion.", entry: "₹25 Indian / ₹300 Foreign", timing: "Sunrise to Sunset", duration: "1-1.5 hours", icon: BookOpen },
    { name: "Chhota Imambara", desc: "Ornate golden-domed congregation hall built in 1838. Known as the Palace of Lights for its chandeliers and gilded interior. Houses the tombs of Nawab Muhammad Ali Shah.", entry: "Included in Bara Imambara ticket", timing: "6:00 AM - 5:00 PM", duration: "45 min - 1 hr", icon: Landmark },
    { name: "Hazratganj", desc: "Lucknow&apos;s premier shopping and cultural boulevard. Colonial-era buildings, bookshops, restaurants, and the iconic Mayfair cinema. The Champs-Elysees of Lucknow.", entry: "Free", timing: "All day", duration: "2-3 hours", icon: ShoppingBag },
    { name: "Ambedkar Memorial Park", desc: "Massive park built in red sandstone inspired by Mughal and Buddhist architecture. Impressive statues and monuments. Beautiful at sunset with illumination.", entry: "Free", timing: "6:00 AM - 9:00 PM", duration: "1-1.5 hours", icon: Camera },
    { name: "Chowk Market", desc: "Ancient market area and food paradise. Tunday Kebabi, Prakash Ki Kulfi, and hundreds of Chikankari shops. The sensory heart of old Lucknow.", entry: "Free", timing: "10:00 AM - 10:00 PM", duration: "2-3 hours", icon: Coffee },
    { name: "La Martiniere College", desc: "Stunning European-style building from 1836. One of the few buildings in the world with battle honours. French-inspired architecture on the banks of Gomti River.", entry: "Exterior only (school)", timing: "Exterior all day", duration: "30 min", icon: Shield },
  ];

  const monthlyGuide = [
    { month: "Jan", temp: "7-21°C", weather: "Cold, foggy", crowd: "Moderate", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 65 },
    { month: "Feb", temp: "10-25°C", weather: "Pleasant", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 88 },
    { month: "Mar", temp: "16-33°C", weather: "Warming", crowd: "High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 80 },
    { month: "Apr", temp: "22-40°C", weather: "Hot", crowd: "Low", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 30 },
    { month: "May", temp: "27-43°C", weather: "Very hot", crowd: "Very Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 10 },
    { month: "Jun", temp: "29-42°C", weather: "Pre-monsoon", crowd: "Very Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 12 },
    { month: "Jul", temp: "26-35°C", weather: "Monsoon", crowd: "Low", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 30 },
    { month: "Aug", temp: "25-33°C", weather: "Peak rain", crowd: "Low", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 28 },
    { month: "Sep", temp: "24-33°C", weather: "Rain ending", crowd: "Low-Med", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 50 },
    { month: "Oct", temp: "20-33°C", weather: "Pleasant", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 92 },
    { month: "Nov", temp: "13-28°C", weather: "Cool, clear", crowd: "Very High", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 100 },
    { month: "Dec", temp: "8-23°C", weather: "Cold", crowd: "High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 85 },
  ];

  const foodSection = [
    { name: "Tunday Kebab", desc: "Lucknow&apos;s most legendary dish -- melt-in-mouth galouti kebabs made with 160 spices. Tunday Kebabi in Chowk (since 1905) is the original.", icon: "\uD83C\uDF56" },
    { name: "Lucknowi Biryani", desc: "Dum-style biryani slow-cooked in sealed handi. More subtle and aromatic than Hyderabadi biryani. Wahid Biryani (since 1955) and Idris are iconic.", icon: "\uD83C\uDF5A" },
    { name: "Basket Chaat", desc: "Unique to Lucknow -- crispy potato basket filled with aloo tikki, chutneys, yogurt, and sev. Royal Cafe in Hazratganj invented this creation.", icon: "\uD83E\uDDFA" },
    { name: "Kulcha-Nihari", desc: "Slow-cooked meat stew (Nihari) with fluffy kulcha bread. A traditional Lucknowi breakfast. Raheem&apos;s in Chowk is the most famous.", icon: "\uD83E\uDED3" },
    { name: "Sheermal & Roomali Roti", desc: "Saffron-flavoured sweet bread (Sheermal) and paper-thin Roomali roti. Nawabi breads perfected over centuries of Awadhi cuisine.", icon: "\uD83C\uDF5E" },
    { name: "Prakash Ki Kulfi", desc: "Legendary malai kulfi served in Chowk since 1947. Thick, creamy, and flavoured with cardamom and pistachio. Worth the queue.", icon: "\uD83C\uDF68" },
  ];

  const shoppingSection = [
    { name: "Chikankari Embroidery", desc: "Lucknow&apos;s signature white-on-white embroidery on cotton, silk, and chiffon. Kurtas, sarees, and dupattas. Aminabad and Chowk are the best markets. Look for hand-embroidered pieces.", price: "₹500 - ₹50,000" },
    { name: "Lucknowi Attar (Perfumes)", desc: "Traditional natural perfumes distilled from flowers. Rose, Jasmine, Khus, and Mitti Attar (petrichor scent) are famous. Sugandhco and Asgar Ali stores.", price: "₹200 - ₹10,000" },
    { name: "Zardozi Work", desc: "Gold and silver thread embroidery on fabrics. Sarees, sherwani, and decorative items. Nakhas Market and Chowk have skilled artisans.", price: "₹500 - ₹25,000" },
    { name: "Nawabi Jewellery", desc: "Kundan, Meenakari, and traditional Awadhi jewellery designs. Jewellers in Chowk and Yahiyaganj market offer both gold and imitation options.", price: "₹300 - ₹1,00,000" },
  ];

  const areaGuide = [
    { area: "Hazratganj", desc: "Lucknow&apos;s prime boulevard. Best restaurants, shops, and cafes. Mid-range to luxury hotels. Walking distance to many attractions.", budget: "₹2,000-8,000/night" },
    { area: "Chowk / Old City", desc: "Heart of heritage Lucknow. Near Bara Imambara and Rumi Darwaza. Budget stays. Best for food lovers. Can be congested.", budget: "₹500-2,000/night" },
    { area: "Gomti Nagar", desc: "Modern Lucknow with malls, restaurants, and new hotels. Clean and spacious. Near Ambedkar Park. 15-20 min from old city.", budget: "₹1,500-6,000/night" },
    { area: "Alambagh / Station Area", desc: "Budget area near Charbagh Railway Station. Convenient for arrivals and departures. Basic but functional. 15 min to city centre.", budget: "₹800-2,500/night" },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "UP Heritage Experts", desc: "Lucknow & Awadh specialists" },
    { icon: Landmark, title: "City of Nawabs", desc: "Centuries of Awadhi culture" },
    { icon: Users, title: "5000+ Tourists Served", desc: "Heritage tour experts" },
    { icon: Star, title: "4.9 Google Rating", desc: "Verified reviews" },
  ];
  const chapters = [{ title: "Attractions", icon: Landmark, count: "8 Sites" }, { title: "Best Time", icon: Thermometer, count: "12 Months" }, { title: "Food Guide", icon: Coffee, count: "6 Specialties" }, { title: "Shopping", icon: ShoppingBag, count: "4 Categories" }, { title: "Stay Guide", icon: Hotel, count: "4 Areas" }, { title: "Transport", icon: Car, count: "4 Options" }];

  const cityName = "Lucknow";
  const cityTagline = "The City of Nawabs -- where Awadhi grandeur, legendary kebabs, exquisite Chikankari, and tehzeeb (refined culture) come alive in every lane.";
  const welcomeTitle = "Welcome to the City of Nawabs";
  const welcomeText = "Lucknow, the capital of Uttar Pradesh, is a city that wears its Nawabi heritage with grace and pride. Once the seat of the Awadh kingdom, Lucknow developed a unique culture that blended Mughal sophistication with local traditions, creating a refined civilization known for its tehzeeb (etiquette), adab (respect), and nazakat (elegance). The city&apos;s architectural wonders -- from the labyrinthine Bara Imambara to the imposing Rumi Darwaza -- speak of a time when Lucknow rivalled Delhi in grandeur. But Lucknow&apos;s greatest legacy may be its cuisine. The city is <strong>India&apos;s kebab capital</strong>, where Tunday Kebabi has been serving melt-in-mouth galouti kebabs since 1905, where Awadhi biryani is cooked in the dum style perfected by royal chefs, and where Chowk&apos;s narrow lanes offer a food experience unmatched anywhere in India. Add to this the exquisite Chikankari embroidery that has earned UNESCO recognition, the vibrant Hazratganj boulevard, and the city&apos;s legendary hospitality, and you have one of India&apos;s most rewarding destinations.";
  const stats = [{ value: "1775", label: "Nawabi Capital" }, { value: "160+", label: "Spices in Kebabs" }, { value: "3M+", label: "Visitors Yearly" }];
  const foodSubtitle = "India&apos;s kebab capital and Awadhi culinary heaven";
  const bestTimeLegend = [{ color: "bg-emerald-500", label: "Best (Oct-Mar)" }, { color: "bg-amber-400", label: "Okay (Jul-Sep)" }, { color: "bg-red-400", label: "Avoid (May-Jun)" }];
  const transportOptions = [
    { mode: "Triveni Cabs (Private Taxi)", price: "₹1,500-2,500/day", desc: "AC car with driver for all sightseeing. Delhi-Lucknow one way from ₹6,000. Agra-Lucknow available. Call 7668570551.", highlight: true },
    { mode: "Lucknow Metro", price: "₹10-40/trip", desc: "Modern metro connecting North-South corridor. Convenient for CCS Airport to Hazratganj. Clean and efficient.", highlight: false },
    { mode: "Auto-rickshaw", price: "₹30-150/trip", desc: "Available everywhere. Use metered autos or negotiate. Good for short city trips. Electric autos increasingly common.", highlight: false },
    { mode: "City Bus (UPSRTC)", price: "₹10-25/trip", desc: "AC and non-AC buses on major routes. Affordable but crowded during peak hours.", highlight: false },
  ];
  const interlinks = [
    { href: "/agra-travel-guide", title: "Agra Travel Guide", desc: "Taj Mahal & more" },
    { href: "/varanasi-travel-guide", title: "Varanasi Travel Guide", desc: "Spiritual capital" },
    { href: "/mathura-vrindavan-travel-guide", title: "Mathura Vrindavan Guide", desc: "Krishna&apos;s birthplace" },
    { href: "/jaipur-travel-guide", title: "Jaipur Travel Guide", desc: "Pink City" },
    { href: "/lucknow", title: "Lucknow Cab Services", desc: "Local taxi booking" },
    { href: "/sightseeing", title: "All Sightseeing Tours", desc: "Complete tour list" },
    { href: "/haridwar-travel-guide", title: "Haridwar Travel Guide", desc: "Gateway to Gods" },
    { href: "/rishikesh-travel-guide", title: "Rishikesh Travel Guide", desc: "Yoga Capital" },
    { href: "/kashmir-travel-guide", title: "Kashmir Travel Guide", desc: "Paradise on Earth" },
  ];
  const ctaTitle = "Need Help Planning Your Lucknow Trip?";
  const ctaDesc = "Nawabi heritage, legendary food tours, and seamless travel -- we make it happen.";
  const whatsappMsg = "I want to book a cab for Lucknow trip";

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
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-md px-6 py-2 rounded-full mb-6 border border-amber-400/30"><Scroll className="w-4 h-4 text-amber-300" /><span className="text-amber-200 font-semibold text-sm tracking-[0.2em] uppercase">The Complete Encyclopedia</span></div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight tracking-tight">{cityName} Travel <span className="shimmer-gold">Guide</span></h1>
            <div className="flex items-center justify-center gap-4 mb-6"><div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500/60" /><span className="text-amber-400 font-semibold tracking-widest text-sm">2026 EDITION</span><div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500/60" /></div>
            <p className="text-lg md:text-xl text-amber-100/70 mb-10 max-w-3xl mx-auto leading-relaxed font-light">{cityTagline}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 transition-all duration-500"><Phone className="w-5 h-5" /> Call Now: 7668570551</Link>
              <Link href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-500/30 hover:bg-white/20 hover:scale-105 transition-all duration-500">WhatsApp Us</Link>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 bg-amber-950/60 backdrop-blur-2xl border-t border-amber-500/20"><div className="max-w-6xl mx-auto px-4 py-5"><div className="grid grid-cols-2 md:grid-cols-4 gap-6">{trustFeatures.map((f, i) => (<div key={i} className="flex items-center gap-3 text-white/90"><div className="p-2 bg-amber-500/20 rounded-lg backdrop-blur-sm"><f.icon className="w-5 h-5 text-amber-300" /></div><div><div className="font-bold text-sm">{f.title}</div><div className="text-xs text-amber-200/60">{f.desc}</div></div></div>))}</div></div></div>
        </section>

        <section className="py-16 px-4"><div className="max-w-5xl mx-auto"><div className="text-center mb-10"><h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Table of Contents</h2><p className="text-stone-500">Your chapter-by-chapter guide to the City of Nawabs</p></div><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">{chapters.map((ch, i) => (<div key={i} className="glass-card-light rounded-xl p-4 text-center hover-lift cursor-default group"><div className="w-12 h-12 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mb-3 group-hover:from-amber-200 group-hover:to-orange-200 transition-all"><ch.icon className="w-6 h-6 text-amber-700" /></div><div className="font-bold text-stone-800 text-sm">{ch.title}</div><div className="text-xs text-amber-600 font-medium mt-1">{ch.count}</div></div>))}</div></div></section>

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
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-gold 2s ease-in-out infinite' }}><Phone className="w-5 h-5" /> Call: 7668570551</Link>
              <Link href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="inline-flex items-center justify-center gap-2 bg-amber-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-400/30 hover:bg-amber-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">WhatsApp Us <ArrowRight className="w-5 h-5" /></Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
