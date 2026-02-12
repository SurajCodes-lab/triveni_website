import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, Calendar, Sunrise, Camera, Coffee, ShoppingBag, Thermometer, Hotel, Landmark, Compass, BookOpen, Scroll } from '@/components/ui/icons';

export const metadata = { title: 'Jodhpur Travel Guide 2026 | Blue City, Mehrangarh Fort & Marwar Capital', description: 'Complete Jodhpur travel guide 2026. Mehrangarh Fort, Umaid Bhawan Palace, Clock Tower, Bishnoi Village, Marwari food. Book cab 7668570551.', keywords: 'jodhpur travel guide, blue city jodhpur, mehrangarh fort, umaid bhawan palace, jodhpur tourism 2026, marwar capital, clock tower jodhpur', authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs', metadataBase: new URL('https://www.trivenicabs.in'), alternates: { canonical: '/jodhpur-travel-guide' }, openGraph: { title: 'Jodhpur Travel Guide 2026 | Blue City & Mehrangarh Fort', description: 'Everything about visiting Jodhpur. Mehrangarh Fort, Umaid Bhawan, food, transport.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/jodhpur-travel-guide', siteName: 'Triveni Cabs', images: [{ url: '/images/jodhpur-hero.jpg', width: 1200, height: 630, alt: 'Jodhpur Travel Guide 2026' }] }, twitter: { card: 'summary_large_image', title: 'Jodhpur Travel Guide 2026', description: 'Complete Jodhpur guide. Mehrangarh Fort, Blue City, transport.', creator: '@trivenicabs', site: '@trivenicabs', images: ['/images/jodhpur-hero.jpg'] }, robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } } };

export default function JodhpurTravelGuidePage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Jodhpur Travel Guide", "item": "https://www.trivenicabs.in/jodhpur-travel-guide" }] };
  const faqData = [
    { question: "How many days do I need in Jodhpur?", answer: "2-3 days is ideal. Day 1: Mehrangarh Fort (half day), Jaswant Thada, Clock Tower market, evening blue city walk. Day 2: Umaid Bhawan Palace, Mandore Gardens, Rao Jodha Desert Rock Park. Day 3: Bishnoi Village safari, Toorji Ka Jhalra stepwell, shopping. Add a day for Osian temples (65 km)." },
    { question: "What is the best time to visit Jodhpur?", answer: "October to March is best with temperatures between 10-28 degrees. November to February is ideal for comfortable sightseeing. The Rajasthan International Folk Festival (RIFF) in October at Mehrangarh is spectacular. April to June is extremely hot (40-45 degrees). Monsoon (July-September) is pleasant but humid." },
    { question: "How do I reach Jodhpur from Delhi?", answer: "By train: Mandore Express (10 hrs), Rajdhani (8 hrs). By car: 600 km, 9 hours via NH48. Our cab costs &#8377;8,000-11,000 one way. By flight: 1.5 hours, multiple daily flights. From Jaipur: 335 km, 5 hours. We offer airport pickup and complete Rajasthan circuit tours." },
    { question: "Why is Jodhpur called the Blue City?", answer: "The old city houses near Mehrangarh Fort are painted in shades of blue, originally by Brahmins to distinguish their homes. The blue colour also repels insects and keeps houses cool. The best view of the blue city is from Mehrangarh Fort ramparts. The contrast of blue houses against the golden fort is iconic." },
    { question: "Is Mehrangarh Fort worth visiting?", answer: "Absolutely! Mehrangarh is one of India&apos;s largest and most magnificent forts, perched 400 feet above the city. The museum has an outstanding collection of royal palanquins, armour, paintings, and textiles. The audio guide (narrated by the royal family) is excellent. Allow 3-4 hours for a complete visit." },
    { question: "What food is Jodhpur famous for?", answer: "Jodhpur is famous for Mirchi Bada (chilli fritters from Shahi Samosa shop), Pyaaz Kachori, Mawa Kachori (sweet stuffed pastry), Dal Bati Churma, and Makhaniya Lassi (saffron-flavoured). The Clock Tower area is a food paradise. Try the legendary Omelette Shop near the clock tower." },
    { question: "What should I buy in Jodhpur?", answer: "Jodhpur is famous for Bandhani (tie-dye) textiles, antique furniture and curios, Rajasthani spices (especially mathania red chillies), Jodhpuri mojari shoes, and lac bangles. Clock Tower market, Nai Sarak, and Tripolia Bazaar are the best shopping areas." },
    { question: "Is the Bishnoi Village safari worth it?", answer: "Yes, it is a unique cultural experience. The Bishnoi community are India&apos;s original environmentalists, protecting wildlife for over 500 years. The safari includes visits to Bishnoi villages, potters, weavers, and wildlife spotting (blackbuck, chinkaras, demoiselle cranes). Book through Triveni Cabs for reliable transport." },
  ];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };
  const attractions = [
    { name: "Mehrangarh Fort", desc: "One of India&apos;s largest forts, rising 400 feet above Jodhpur on a sheer cliff. Built in 1459 by Rao Jodha. Houses an outstanding museum with royal palanquins, armour, paintings, and instruments. The ramparts offer breathtaking views of the blue city below.", entry: "&#8377;100 Indian / &#8377;600 Foreign", timing: "9:00 AM - 5:00 PM", duration: "3-4 hours", icon: Landmark },
    { name: "Jaswant Thada", desc: "An exquisite white marble cenotaph built in 1899 for Maharaja Jaswant Singh II. Known as the Taj Mahal of Marwar. The delicately carved marble sheets glow warmly at sunset. Peaceful gardens and a small lake add to the serenity.", entry: "&#8377;30 Indian / &#8377;50 Foreign", timing: "9:00 AM - 5:00 PM", duration: "45 min - 1 hour", icon: Camera },
    { name: "Umaid Bhawan Palace", desc: "One of the world&apos;s largest private residences, built between 1929-1943. Part luxury hotel (Taj), part royal residence, part museum. Art Deco interiors, vintage cars, and royal memorabilia. A living testament to Jodhpur&apos;s regal heritage.", entry: "&#8377;30 Indian / &#8377;100 Foreign (museum)", timing: "9:00 AM - 5:00 PM", duration: "1-1.5 hours", icon: Landmark },
    { name: "Clock Tower (Ghanta Ghar)", desc: "The heart of Jodhpur&apos;s old city, surrounded by the bustling Sardar Market. Built by Maharaja Sardar Singh. The vibrant bazaar sells spices, textiles, handicrafts, and street food. A sensory overload in the best possible way.", entry: "Free", timing: "Market: 9 AM - 9 PM", duration: "1-2 hours", icon: Landmark },
    { name: "Mandore Gardens", desc: "The ancient capital of Marwar before Jodhpur, now a sprawling garden with royal cenotaphs (dewals) and a Hall of Heroes with carved figures. Beautiful red sandstone architecture set in lush gardens. Popular with locals and tourists alike.", entry: "Free", timing: "8:00 AM - 8:00 PM", duration: "1.5-2 hours", icon: Compass },
    { name: "Rao Jodha Desert Rock Park", desc: "An ecological restoration project on 72 hectares of rocky wasteland next to Mehrangarh Fort. Native desert plants, walking trails, and stunning fort views. A refreshing contrast to the busy city. Best visited at sunrise or sunset.", entry: "&#8377;100 Indian / &#8377;200 Foreign", timing: "8:00 AM - 5:30 PM", duration: "1.5-2 hours", icon: Sunrise },
    { name: "Toorji Ka Jhalra (Stepwell)", desc: "A beautifully restored 18th-century stepwell in the heart of the old city. Intricate carvings, deep blue water, and atmospheric surroundings. Recently renovated and now a cultural hotspot with a cafe overlooking the ancient structure.", entry: "Free", timing: "Open all day", duration: "30-45 min", icon: Camera },
    { name: "Bishnoi Village Safari", desc: "A cultural and wildlife excursion to Bishnoi tribal villages near Jodhpur. The Bishnoi people are India&apos;s original conservationists. See blackbuck antelopes, chinkaras, artisan potters, and traditional weavers in their natural setting.", entry: "&#8377;1,500-3,000 (safari)", timing: "Morning best", duration: "3-4 hours", icon: Shield },
  ];
  const monthlyGuide = [
    { month: "Jan", temp: "7-23°C", weather: "Cool, clear", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 92 },
    { month: "Feb", temp: "10-26°C", weather: "Pleasant", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 95 },
    { month: "Mar", temp: "15-32°C", weather: "Warm", crowd: "Moderate", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 78 },
    { month: "Apr", temp: "22-38°C", weather: "Hot", crowd: "Low", verdict: "Not ideal", color: "bg-red-100 text-red-800", bar: 25 },
    { month: "May", temp: "27-42°C", weather: "Very hot", crowd: "Very Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 10 },
    { month: "Jun", temp: "28-42°C", weather: "Extreme heat", crowd: "Very Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 8 },
    { month: "Jul", temp: "26-36°C", weather: "Monsoon start", crowd: "Low", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 30 },
    { month: "Aug", temp: "25-34°C", weather: "Monsoon", crowd: "Low", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 28 },
    { month: "Sep", temp: "24-35°C", weather: "Rain ending", crowd: "Low-Med", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 45 },
    { month: "Oct", temp: "20-34°C", weather: "Pleasant (RIFF)", crowd: "Very High", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 100 },
    { month: "Nov", temp: "13-30°C", weather: "Cool, clear", crowd: "Very High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 93 },
    { month: "Dec", temp: "8-25°C", weather: "Cold, clear", crowd: "High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 85 },
  ];
  const foodSection = [
    { name: "Mirchi Bada", desc: "Jodhpur&apos;s signature snack -- large green chillies stuffed with spicy potato filling, dipped in gram flour batter, and deep fried. The legendary Shahi Samosa shop near Clock Tower has served them since 1950.", icon: "🌶️" },
    { name: "Pyaaz Kachori", desc: "Crispy deep-fried pastry stuffed with spiced onion filling. A beloved Rajasthani breakfast staple. Jodhpur&apos;s versions are larger and crispier than anywhere else. Best from Rawat Mishtan Bhandar or Janta Sweet Home.", icon: "🥟" },
    { name: "Mawa Kachori", desc: "A sweet version of kachori stuffed with mawa (milk solids), dry fruits, and sugar. Unique to Jodhpur and utterly addictive. Dipped in sugar syrup, it is the city&apos;s most famous sweet snack.", icon: "🍩" },
    { name: "Dal Bati Churma", desc: "The quintessential Rajasthani meal -- hard wheat rolls (bati) baked over cow dung cakes, served with five-lentil dal and sweet crushed wheat (churma). Every Jodhpur restaurant serves its own version.", icon: "🫓" },
    { name: "Makhaniya Lassi", desc: "Jodhpur&apos;s legendary saffron-flavoured lassi topped with a thick layer of malai (cream). Mishrilal Hotel near Clock Tower has served this iconic drink since 1927. Creamy, rich, and utterly refreshing.", icon: "🥛" },
    { name: "Rajasthani Thali", desc: "A complete meal with dal, bati, churma, gatte ki sabzi, ker sangri, papad, bajra roti, and multiple sweets. Best experienced at On The Rocks, Indique, or the fort&apos;s Chokelao Mahal restaurant.", icon: "🍛" },
  ];
  const shoppingSection = [
    { name: "Bandhani Textiles", desc: "Jodhpur&apos;s tie-dye tradition produces vibrant sarees, dupattas, and turbans in signature Rajasthani patterns. Nai Sarak and Tripolia Bazaar have the best selection of authentic Bandhani at wholesale prices.", price: "&#8377;300 - &#8377;12,000" },
    { name: "Antiques & Curios", desc: "Jodhpur is India&apos;s antique furniture capital. Carved doors, vintage cabinets, old architectural pieces, and colonial-era collectibles. The industrial area near MIA Road has massive antique warehouses.", price: "&#8377;500 - &#8377;100,000+" },
    { name: "Spices (Rajasthani Mirchi)", desc: "The famous mathania red chillies, Rajasthani masala blends, and desert spices. Clock Tower market&apos;s spice shops are legendary. Vacuum-sealed packs available for travellers. Ask for the special laal maas masala.", price: "&#8377;50 - &#8377;2,000" },
    { name: "Jodhpuri Mojaris & Shoes", desc: "Traditional embroidered leather shoes (mojaris) in vibrant colours. Both men&apos;s and women&apos;s styles available. Sardar Market near Clock Tower has dozens of shops. Genuine leather with hand-stitched embroidery.", price: "&#8377;200 - &#8377;4,000" },
  ];
  const areaGuide = [
    { area: "Old City (Near Fort)", desc: "The most atmospheric stay with heritage havelis, blue-painted streets, and rooftop fort views. Budget to boutique options. Walking distance to Mehrangarh, Clock Tower, and Toorji Ka Jhalra. Can be noisy but full of character.", budget: "&#8377;500-6,000/night" },
    { area: "Station Road", desc: "Convenient mid-range area near the railway station. Good restaurants, travel agencies, and shops. 15-minute walk to Clock Tower. Modern hotels with reliable amenities.", budget: "&#8377;800-4,000/night" },
    { area: "Circuit House Area", desc: "Upscale residential neighbourhood with premium hotels. Quiet, clean, and well-connected. Near Umaid Bhawan Palace. Ideal for families and luxury travellers seeking peace.", budget: "&#8377;2,000-10,000/night" },
    { area: "PWD Road / Residency Road", desc: "Modern commercial area with business hotels and serviced apartments. Good food options. Centrally located for all Jodhpur attractions. 10-minute drive to both fort and airport.", budget: "&#8377;1,500-8,000/night" },
  ];
  const trustFeatures = [{ icon: MapPin, title: "Rajasthan Specialists", desc: "Marwar route experts" }, { icon: Landmark, title: "Blue City", desc: "Mehrangarh Fort gateway" }, { icon: Users, title: "5000+ Travellers Served", desc: "Rajasthan tour experts" }, { icon: Star, title: "4.9 Google Rating", desc: "Verified reviews" }];
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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight tracking-tight">Jodhpur Travel <span className="shimmer-gold">Guide</span></h1>
          <div className="flex items-center justify-center gap-4 mb-6"><div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500/60" /><span className="text-amber-400 font-semibold tracking-widest text-sm">2026 EDITION</span><div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500/60" /></div>
          <p className="text-lg md:text-xl text-amber-100/70 mb-10 max-w-3xl mx-auto leading-relaxed font-light">The Blue City -- where the mighty Mehrangarh Fort crowns a cliff above a sea of indigo houses, and the spirit of Marwar&apos;s warrior kings lives on in every stone.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 transition-all duration-500"><Phone className="w-5 h-5" /> Call Now: 7668570551</Link>
            <Link href="https://wa.me/917668570551?text=I want to book a cab for Jodhpur trip" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-500/30 hover:bg-white/20 hover:scale-105 transition-all duration-500">WhatsApp Us</Link>
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
          <div className="text-center mb-10"><h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Table of Contents</h2><p className="text-stone-500">Your chapter-by-chapter guide to the Blue City</p></div>
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
            <h2 className="text-3xl font-bold text-stone-800 mb-6 text-center mt-4 relative">Welcome to the Blue City</h2>
            <p className="text-lg text-stone-600 leading-relaxed text-center relative">Jodhpur, the Sun City and capital of the ancient Marwar kingdom, is Rajasthan at its most dramatic. Founded in 1459 by Rao Jodha, a Rathore Rajput chief, the city grew around the impregnable Mehrangarh Fort -- one of India&apos;s largest and most magnificent fortresses, perched 400 feet above the sprawling blue city on a sheer cliff of red sandstone. The old city below is a labyrinth of narrow lanes and indigo-painted houses that earned Jodhpur its famous nickname -- the Blue City. Originally, only Brahmin households painted their homes blue, but the practice spread as residents discovered that the lime-based blue wash repelled insects and kept interiors cool. Today, the aerial view from Mehrangarh&apos;s ramparts -- a sea of blue stretching to the horizon -- is one of India&apos;s most iconic sights. Jodhpur is also home to Umaid Bhawan Palace, one of the world&apos;s largest private residences, a stunning Art Deco masterpiece that took 15 years and 3,000 workers to build. The city&apos;s Clock Tower bazaar is a sensory explosion of spices, textiles, and handicrafts, while its food -- from the legendary Mirchi Bada to saffron-laced Makhaniya Lassi -- is among Rajasthan&apos;s finest.</p>
            <div className="flex justify-center gap-6 mt-8 text-center relative">
              {[{ val: "1459 AD", label: "Year Founded" }, { val: "400 ft", label: "Fort Height" }, { val: "600 km", label: "From Delhi" }].map((s, i) => (
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
          <h2 className="text-3xl font-bold text-stone-800 mb-2">Best Time to Visit Jodhpur</h2>
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
          <h2 className="text-3xl font-bold text-stone-800 mb-10">Top Attractions in Jodhpur</h2>
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
          <h2 className="text-3xl font-bold text-stone-800 mb-2">Jodhpur Food Guide</h2>
          <p className="text-stone-500 mb-10">Marwari cuisine at its fiery, flavourful best -- from street food to royal thalis</p>
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
          <h2 className="text-3xl font-bold text-stone-800 mb-10">Shopping in Jodhpur</h2>
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
          <h2 className="text-3xl font-bold text-stone-800 mb-8">Getting Around Jodhpur</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[{ mode: "Triveni Cabs (Private Taxi)", price: "&#8377;1,800-3,000/day", desc: "AC car with driver. Essential for Bishnoi Village (25 km), Mandore Gardens, and outskirts. Delhi-Jodhpur one way from &#8377;8,000. Call 7668570551.", highlight: true }, { mode: "Auto-rickshaw", price: "&#8377;30-150/trip", desc: "Available everywhere in the city. Best for Clock Tower to fort trips. Always negotiate fare before boarding. Metered autos are rare.", highlight: false }, { mode: "E-Rickshaw", price: "&#8377;20-80/trip", desc: "Eco-friendly option for short distances in the old city. Slower but cheaper than autos. Good for exploring the blue city lanes at a leisurely pace.", highlight: false }, { mode: "City Bus / Shared Auto", price: "&#8377;10-30/trip", desc: "RSRTC buses connect major points. Shared autos run fixed routes. Very affordable but crowded. Limited comfort for tourists.", highlight: false }].map((t, idx) => (
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
          <h2 className="text-3xl font-bold text-stone-800 mb-10">Where to Stay in Jodhpur</h2>
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
            {[{ href: "/jaisalmer-travel-guide", title: "Jaisalmer Travel Guide", desc: "Golden City & Desert" }, { href: "/jaipur-travel-guide", title: "Jaipur Travel Guide", desc: "Pink City" }, { href: "/udaipur-travel-guide", title: "Udaipur Travel Guide", desc: "City of Lakes" }, { href: "/agra-travel-guide", title: "Agra Travel Guide", desc: "Taj Mahal & more" }, { href: "/shimla-travel-guide", title: "Shimla Travel Guide", desc: "Queen of Hills" }, { href: "/manali-travel-guide", title: "Manali Travel Guide", desc: "Mountain adventure" }, { href: "/varanasi-travel-guide", title: "Varanasi Travel Guide", desc: "Spiritual capital" }, { href: "/amritsar-travel-guide", title: "Amritsar Travel Guide", desc: "Golden Temple city" }, { href: "/sightseeing", title: "All Sightseeing Tours", desc: "Complete tour list" }].map((link, idx) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Help Planning Your Jodhpur Trip?</h2>
          <p className="text-amber-100/80 mb-8 text-lg">Mehrangarh Fort exploration, Bishnoi Village safari, and the complete Blue City experience -- we arrange it all.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-gold 2s ease-in-out infinite' }}><Phone className="w-5 h-5" /> Call: 7668570551</Link>
            <Link href="https://wa.me/917668570551?text=I want to book a cab for Jodhpur trip" className="inline-flex items-center justify-center gap-2 bg-amber-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-400/30 hover:bg-amber-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">WhatsApp Us <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
    </div>
  </>);
}
