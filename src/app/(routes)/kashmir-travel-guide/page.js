import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, Car, ArrowRight, Sunrise, Camera, Coffee, ShoppingBag, Thermometer, Hotel, Landmark, Compass, BookOpen, Scroll, Mountain, Snowflake, Waves } from '@/components/ui/icons';

export const metadata = { title: 'Kashmir Travel Guide 2026 | Paradise on Earth - Dal Lake, Gulmarg & Pahalgam', description: 'Complete Kashmir travel guide 2026. Paradise on Earth, Dal Lake shikaras, Gulmarg skiing and gondola, Pahalgam valleys, Mughal Gardens, houseboats, Wazwan cuisine. Srinagar local cabs available. Call 7668570551.', keywords: 'kashmir travel guide, paradise on earth, dal lake srinagar, gulmarg skiing, pahalgam travel, mughal gardens kashmir, kashmir houseboat, wazwan cuisine, srinagar tourism 2026, kashmir cab service', authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs', metadataBase: new URL('https://www.trivenicabs.in'), alternates: { canonical: '/kashmir-travel-guide' }, openGraph: { title: 'Kashmir Travel Guide 2026 | Paradise on Earth - Dal Lake, Gulmarg & Pahalgam', description: 'Everything about visiting Kashmir. Dal Lake, Gulmarg, Pahalgam, houseboats, Wazwan, transport.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/kashmir-travel-guide', siteName: 'Triveni Cabs', images: [{ url: '/images/kashmir-hero.jpg', width: 1200, height: 630, alt: 'Kashmir Travel Guide 2026' }] }, twitter: { card: 'summary_large_image', title: 'Kashmir Travel Guide 2026 | Paradise on Earth', description: 'Complete Kashmir guide. Dal Lake, Gulmarg, Pahalgam, houseboats, food.', creator: '@trivenicabs', site: '@trivenicabs', images: ['/images/kashmir-hero.jpg'] }, robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } } };

export default function KashmirTravelGuidePage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Kashmir Travel Guide", "item": "https://www.trivenicabs.in/kashmir-travel-guide" }] };
  const faqData = [
    { question: "How many days do I need in Kashmir?", answer: "5-7 days is ideal for a complete Kashmir experience. Day 1-2: Srinagar -- Dal Lake shikara ride, Mughal Gardens (Nishat, Shalimar, Chashme Shahi), old city walk, houseboat stay. Day 3-4: Gulmarg -- gondola ride to Apharwat Peak, skiing in winter, meadow walks in summer. Day 5-6: Pahalgam -- Betaab Valley, Aru Valley, Chandanwari, Lidder River walk. Day 7: Sonamarg and Thajiwas Glacier trek if time permits." },
    { question: "What is the best time to visit Kashmir?", answer: "March to October is the main tourist season. March-May brings spring with tulip gardens and almond blossoms. June-August is peak summer with perfect weather (20-30 degrees). September-October offers stunning autumn colours with chinar leaves turning gold. December-February is magical for snow lovers and skiing in Gulmarg. Avoid November -- it is the transition month with unpredictable weather and many closures." },
    { question: "How do I reach Kashmir from Delhi?", answer: "By flight: Delhi to Srinagar is just 1.5 hours with multiple daily flights from Air India, IndiGo, SpiceJet, and Vistara. This is the most practical option. By road: The 850 km Jammu-Srinagar highway takes 10-12 hours and is scenic but prone to weather closures. We offer Srinagar airport pickup and full Kashmir local cab services. Call 7668570551." },
    { question: "Is Kashmir safe for tourists?", answer: "Yes, Kashmir is safe for tourists. The tourism infrastructure is well-developed with a strong security presence. Srinagar, Gulmarg, Pahalgam, and Sonamarg are all tourist-friendly destinations. Locals are extremely hospitable and welcoming to visitors. Follow standard travel advisories, avoid restricted areas, and keep your ID proof handy. Millions of tourists visit Kashmir safely every year." },
    { question: "What is a houseboat stay like on Dal Lake?", answer: "Staying on a Dal Lake houseboat is a uniquely Kashmiri experience. These ornately carved wooden boats have bedrooms, living rooms, dining areas, and even sun decks. You wake to mountain views and the sound of shikaras gliding past. Costs range from &#8377;3,000 to &#8377;15,000 per night depending on category. Deluxe houseboats have attached bathrooms, heated rooms, and excellent Kashmiri cuisine." },
    { question: "What food is Kashmir famous for?", answer: "Kashmir is famous for Wazwan -- a multi-course feast of up to 36 dishes served on a large copper plate (trami). Signature dishes include Rogan Josh (slow-cooked lamb), Dum Aloo (spiced potatoes), Gushtaba (minced meat in yogurt), Yakhni (yogurt curry), and Nadroo (lotus stem). Kahwa (saffron-cardamom green tea) is the signature drink. Kashmiri bread from local bakeries is exceptional." },
    { question: "What should I buy in Kashmir?", answer: "Pashmina shawls (genuine ones cost &#8377;5,000-50,000), hand-knotted Kashmiri carpets, walnut wood carved furniture and boxes, papier-mache decorative items, Kashmiri saffron from Pampore (world&apos;s finest), dried fruits and walnuts, and traditional Kashmiri copperware. Buy from government emporiums or established shops with proper certification to ensure authenticity." },
    { question: "Do I need special permits for Kashmir?", answer: "No special permits are needed for Indian tourists visiting Srinagar, Gulmarg, Pahalgam, or Sonamarg. Foreign tourists also do not need permits for these standard tourist areas. However, permits are required for some border areas and certain treks. Carry valid ID proof at all times. Registration at hotels is mandatory for all visitors." },
  ];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };
  const attractions = [
    { name: "Dal Lake & Shikara Rides", desc: "The crown jewel of Srinagar -- a 22 sq km lake surrounded by snow-capped mountains, lined with ornate houseboats and floating gardens. A shikara (traditional wooden boat) ride at sunset is one of India&apos;s most iconic experiences. The floating vegetable market at dawn and the lotus gardens in summer are magical sights found nowhere else.", entry: "Shikara &#8377;500-2,000/hour", timing: "All day; sunset best", duration: "1-3 hours", icon: Waves },
    { name: "Gulmarg (Meadow of Flowers)", desc: "A breathtaking hill station at 2,650 metres, famous for having Asia&apos;s highest and longest cable car -- the Gulmarg Gondola. In winter (December-February), it transforms into India&apos;s premier ski resort with powder snow. In summer, the meadows burst with wildflowers. The gondola&apos;s Phase 2 takes you to 3,980 metres at Apharwat Peak for stunning Himalayan panoramas.", entry: "Gondola Phase 1: &#8377;740, Phase 2: &#8377;920", timing: "10:00 AM - 5:00 PM", duration: "Full day trip", icon: Mountain },
    { name: "Pahalgam (Valley of Shepherds)", desc: "A stunning valley town at 2,130 metres, serving as the base camp for the Amarnath Yatra pilgrimage. Surrounded by pine forests and snow-capped peaks, Pahalgam offers the idyllic Aru Valley (12 km), the dramatic Betaab Valley (named after a Bollywood film), and Chandanwari (the first stop on the Amarnath trek). The Lidder River running through town is perfect for trout fishing.", entry: "Aru/Betaab Valley vehicle &#8377;1,500-2,500", timing: "All day", duration: "Full day trip", icon: Mountain },
    { name: "Mughal Gardens (Nishat, Shalimar, Chashme Shahi)", desc: "Three magnificent terraced gardens built by Mughal emperors on the banks of Dal Lake. Nishat Bagh (Garden of Joy, 1633) has 12 terraces with cascading fountains. Shalimar Bagh (Abode of Love, 1619) was Emperor Jahangir&apos;s gift to Empress Nur Jahan. Chashme Shahi (Royal Spring) has a natural spring of crystal-clear cold water believed to have medicinal properties.", entry: "&#8377;24 each", timing: "9:00 AM - 7:00 PM", duration: "2-3 hours (all three)", icon: Landmark },
    { name: "Shankaracharya Temple", desc: "An ancient Hindu temple dedicated to Lord Shiva, perched at 1,000 feet above Srinagar on Shankaracharya Hill. Believed to date back to 200 BC, making it one of the oldest temples in Kashmir. The climb up 243 stone steps rewards visitors with breathtaking 360-degree views of Srinagar city, Dal Lake, and the surrounding Zabarwan mountains.", entry: "Free", timing: "6:00 AM - 6:00 PM", duration: "1-1.5 hours", icon: Landmark },
    { name: "Sonamarg (Meadow of Gold)", desc: "A jaw-droppingly beautiful alpine valley at 2,800 metres, located 80 km from Srinagar on the road to Ladakh. The golden meadows surrounded by glaciers and towering snow-capped mountains fully justify its evocative name. This is the last major tourist stop before the Zoji La pass into Ladakh and serves as a base for the Thajiwas Glacier trek.", entry: "Pony ride to glacier &#8377;500-1,000", timing: "Apr-Oct (road closed in winter)", duration: "Full day trip", icon: Mountain },
    { name: "Thajiwas Glacier", desc: "A spectacular glacier accessible via a 3 km trek or pony ride from Sonamarg. The trail passes through alpine meadows carpeted with wildflowers in summer. At the glacier face, you can touch actual glacial ice and snow even in the height of July. One of the most accessible and rewarding glacier experiences in all of India.", entry: "Trek free; pony &#8377;500-1,000", timing: "Best Apr-Sep", duration: "2-3 hours", icon: Snowflake },
    { name: "Old Srinagar City Walk", desc: "The atmospheric old quarter of Srinagar is a treasure trove of medieval mosques, traditional Kashmiri homes with ornate wooden balconies (pinjrakari), and bustling bazaars. Visit the Shah-e-Hamdan Mosque (1395), the grand Jamia Masjid (1394), and the vibrant spice, dry fruit, and copper markets. A guided walk reveals the authentic soul of Kashmiri life.", entry: "Free", timing: "Morning best", duration: "2-3 hours", icon: Compass },
  ];
  const monthlyGuide = [
    { month: "Jan", temp: "-4 to 4°C", weather: "Heavy snow", crowd: "Low-Med", verdict: "Snow lovers", color: "bg-blue-100 text-blue-800", bar: 55 },
    { month: "Feb", temp: "-2 to 7°C", weather: "Snow, skiing", crowd: "Medium", verdict: "Skiing best", color: "bg-emerald-100 text-emerald-800", bar: 70 },
    { month: "Mar", temp: "3-14°C", weather: "Spring begins", crowd: "High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 82 },
    { month: "Apr", temp: "7-19°C", weather: "Tulips bloom", crowd: "Very High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 92 },
    { month: "May", temp: "11-24°C", weather: "Pleasant warm", crowd: "Very High", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 100 },
    { month: "Jun", temp: "14-28°C", weather: "Summer peak", crowd: "Very High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 95 },
    { month: "Jul", temp: "16-30°C", weather: "Warm, some rain", crowd: "High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 78 },
    { month: "Aug", temp: "15-29°C", weather: "Rain spells", crowd: "Medium", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 62 },
    { month: "Sep", temp: "11-25°C", weather: "Autumn starts", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 88 },
    { month: "Oct", temp: "4-18°C", weather: "Autumn colours", crowd: "High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 80 },
    { month: "Nov", temp: "0-11°C", weather: "Cold, closures", crowd: "Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 15 },
    { month: "Dec", temp: "-3 to 5°C", weather: "Snow begins", crowd: "Medium", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 58 },
  ];
  const foodSection = [
    { name: "Wazwan Feast", desc: "Kashmir&apos;s legendary multi-course feast with up to 36 dishes served on a large copper plate (trami). Traditionally served at weddings and celebrations, it includes Rista, Gushtaba, Tabak Maaz, and more. Several Srinagar restaurants now serve Wazwan for tourists -- a must-try culinary experience that represents centuries of Kashmiri culinary art.", icon: "&#127835;" },
    { name: "Rogan Josh", desc: "Kashmir&apos;s most famous dish globally -- tender pieces of lamb slow-cooked in a rich gravy of Kashmiri red chillies, fennel, ginger, and aromatic spices. The deep crimson colour comes from ratanjot and Kashmiri chilli rather than intense heat. Every restaurant in Srinagar serves its own signature version of this iconic dish.", icon: "&#127830;" },
    { name: "Dum Aloo Kashmiri", desc: "Baby potatoes slow-cooked in a rich yogurt and spice gravy with fennel, dry ginger, and Kashmiri chillies. Unlike the Punjabi version, Kashmiri Dum Aloo is milder and more aromatic with a distinctive fennel flavour. This is Kashmir&apos;s signature vegetarian dish that showcases the valley&apos;s unique spice palette.", icon: "&#129364;" },
    { name: "Kahwa (Kashmiri Tea)", desc: "Kashmir&apos;s signature green tea infused with saffron, cardamom, cinnamon, and crushed almonds. Served in traditional samovars and small cups called khosa. Noon Chai (pink salt tea) made with milk and bicarbonate is another Kashmiri speciality. Both are warming and aromatic, perfect for cold mountain evenings.", icon: "&#9749;" },
    { name: "Nadroo (Lotus Stem)", desc: "A uniquely Kashmiri delicacy -- lotus stems harvested from Dal Lake prepared as crispy fritters (Nadroo Monji) or in a rich yogurt gravy (Nadroo Yakhni). The crunchy texture and subtle earthy flavour make this a dish found nowhere else in India. Best enjoyed at traditional Kashmiri restaurants.", icon: "&#127807;" },
    { name: "Gushtaba & Yakhni", desc: "Gushtaba is minced mutton pounded into perfectly smooth balls and cooked in a creamy yogurt gravy -- the traditional last course of a Wazwan feast. Yakhni is a delicate yogurt-based curry with whole spices. Both showcase Kashmir&apos;s refined, non-spicy approach to meat cookery that is unlike anywhere else in India.", icon: "&#127858;" },
  ];
  const shoppingSection = [
    { name: "Pashmina Shawls", desc: "The world&apos;s finest wool, handwoven from the underbelly fur of Changthangi goats living at 14,000 feet in Ladakh. Genuine Pashmina is extraordinarily soft and warm. Hand-embroidered Jamawar Pashminas can take years to complete. Buy from certified shops with proper GI tag documentation to ensure authenticity.", price: "&#8377;5,000 - &#8377;50,000+" },
    { name: "Kashmiri Carpets", desc: "Hand-knotted silk and wool carpets with intricate Persian-inspired patterns are Kashmir&apos;s most prized craft. A single carpet can take 1-3 years to weave by skilled artisans. Knot density (measured per square inch) determines quality and price. Government emporiums guarantee authenticity.", price: "&#8377;10,000 - &#8377;5,00,000+" },
    { name: "Walnut Wood Carvings", desc: "Intricately carved furniture, jewellery boxes, decorative screens, and household items made from Kashmiri walnut wood. This centuries-old craft tradition produces patterns featuring chinar leaves, florals, and geometric designs. Smaller pieces like napkin holders and photo frames make excellent souvenirs.", price: "&#8377;500 - &#8377;50,000" },
    { name: "Saffron & Papier-Mache", desc: "Kashmiri saffron from Pampore is among the world&apos;s finest (&#8377;200-500 per gram). Papier-mache items -- ornamental boxes, Christmas ornaments, lamp bases, vases -- are hand-painted with vivid floral and wildlife motifs. Also look for traditional copper samovars and embroidered Kashmiri caps (topi).", price: "&#8377;200 - &#8377;25,000" },
  ];
  const areaGuide = [
    { area: "Dal Lake Houseboats", desc: "The quintessential Kashmir experience. Ornately carved wooden houseboats with bedrooms, living rooms, and sun decks. Wake to mountain views and shikara rides past your window. Categories range from budget to super deluxe. Book directly with houseboat owners to avoid middlemen markups.", budget: "&#8377;3,000-15,000/night" },
    { area: "Boulevard Road, Srinagar", desc: "The main lakeside road with the best hotels, restaurants, and shopping in Srinagar. Walking distance to Dal Lake, Mughal Gardens, and the old city. The most organised and tourist-friendly area with excellent connectivity and services. Best choice for first-time visitors to Kashmir.", budget: "&#8377;2,000-12,000/night" },
    { area: "Gulmarg", desc: "Stay near the gondola base station for early morning rides and easy access to slopes. Ski resorts and luxury hotels available in winter, while meadow-view cottages are perfect in summer. Limited independent dining options -- most hotels include meals in the package.", budget: "&#8377;3,000-20,000/night" },
    { area: "Pahalgam", desc: "River-facing hotels and wooden cottages along the Lidder River surrounded by pine forest. Stunning mountain views from most properties. A more peaceful and less crowded alternative to Srinagar. Good base for Aru and Betaab Valley day trips. Book well ahead in peak season (June-August).", budget: "&#8377;2,000-15,000/night" },
  ];
  const trustFeatures = [{ icon: MapPin, title: "Kashmir Specialists", desc: "Srinagar local cabs" }, { icon: Mountain, title: "Paradise on Earth", desc: "Dal Lake to Gulmarg" }, { icon: Users, title: "3000+ Kashmir Trips", desc: "Full valley coverage" }, { icon: Star, title: "4.9 Google Rating", desc: "Verified reviews" }];
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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight tracking-tight">Kashmir Travel <span className="shimmer-gold">Guide</span></h1>
          <div className="flex items-center justify-center gap-4 mb-6"><div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500/60" /><span className="text-amber-400 font-semibold tracking-widest text-sm">2026 EDITION</span><div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500/60" /></div>
          <p className="text-lg md:text-xl text-amber-100/70 mb-10 max-w-3xl mx-auto leading-relaxed font-light">Paradise on Earth -- where Dal Lake mirrors snow-capped Himalayas, shikaras glide past floating gardens, and the Wazwan feast tells the story of a thousand years of culinary art.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 transition-all duration-500"><Phone className="w-5 h-5" /> Call Now: 7668570551</Link>
            <Link href="https://wa.me/917668570551?text=I want to book a cab for Kashmir trip" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-500/30 hover:bg-white/20 hover:scale-105 transition-all duration-500">WhatsApp Us</Link>
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
          <div className="text-center mb-10"><h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Table of Contents</h2><p className="text-stone-500">Your chapter-by-chapter guide to Paradise on Earth</p></div>
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
            <h2 className="text-3xl font-bold text-stone-800 mb-6 text-center mt-4 relative">Welcome to Paradise on Earth</h2>
            <p className="text-lg text-stone-600 leading-relaxed text-center relative">Kashmir, described by Mughal Emperor Jahangir as &quot;Paradise on Earth,&quot; is a valley of such extraordinary beauty that it has inspired poets, painters, and travellers for centuries. Cradled by the Great Himalayas and the Pir Panjal Range, the Kashmir Valley stretches 135 kilometres long and 32 kilometres wide at an average altitude of 1,850 metres. At its heart lies Srinagar, the summer capital of Jammu and Kashmir, where the legendary Dal Lake reflects snow-capped peaks and ornate houseboats have hosted visitors since the British era. The Mughal emperors were so enchanted by Kashmir that they built magnificent terraced gardens along the lake -- Nishat, Shalimar, and Chashme Shahi stand as testaments to their love for this land. Beyond Srinagar, Gulmarg offers Asia&apos;s highest cable car and India&apos;s best skiing, while Pahalgam&apos;s alpine valleys and rushing rivers provide a more pastoral paradise. The legendary Wazwan cuisine, with its intricate multi-course feasts, is a culinary art form perfected over centuries. Pashmina shawls, hand-knotted carpets, and walnut wood carvings represent some of India&apos;s finest craftsmanship. From the tulip-carpeted springs to the snow-blanketed winters, from shikara rides at sunset to Kahwa by a kangri (fire pot), Kashmir offers experiences that exist nowhere else on Earth. It is not just a destination -- it is an emotion.</p>
            <div className="flex justify-center gap-6 mt-8 text-center relative">
              {[{ val: "1.5 hrs", label: "Flight from Delhi" }, { val: "1,585m", label: "Srinagar Altitude" }, { val: "3,980m", label: "Gulmarg Gondola Peak" }].map((s, i) => (
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
          <h2 className="text-3xl font-bold text-stone-800 mb-2">Best Time to Visit Kashmir</h2>
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
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs"><div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-emerald-500" /> Best (Mar-Oct)</div><div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-blue-400" /> Snow Season (Dec-Feb)</div><div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-red-400" /> Avoid (Nov transition)</div></div>
        </div>
      </section>

      {/* ATTRACTIONS */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2"><div className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider">CHAPTER 2</div></div>
          <h2 className="text-3xl font-bold text-stone-800 mb-10">Top Attractions in Kashmir</h2>
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
          <h2 className="text-3xl font-bold text-stone-800 mb-2">Kashmir Food Guide</h2>
          <p className="text-stone-500 mb-10">Wazwan feasts, Kahwa tea, and a cuisine perfected over a thousand years</p>
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
          <h2 className="text-3xl font-bold text-stone-800 mb-10">Shopping in Kashmir</h2>
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
          <h2 className="text-3xl font-bold text-stone-800 mb-8">Getting Around Kashmir</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[{ mode: "Triveni Cabs (Private Taxi)", price: "&#8377;2,500-4,000/day", desc: "AC car with experienced local Kashmiri driver who knows every route. Essential for Gulmarg (50 km), Pahalgam (95 km), and Sonamarg (80 km) day trips from Srinagar. Airport pickup available. Call 7668570551.", highlight: true }, { mode: "Shikara (Dal Lake Boat)", price: "&#8377;500-2,000/hour", desc: "Traditional wooden boats for Dal Lake exploration. Essential for reaching houseboats, the floating vegetable market, and Mughal Gardens via water routes. Negotiate the rate before boarding. Sunset rides are magical.", highlight: false }, { mode: "Auto-rickshaw", price: "&#8377;30-200/trip", desc: "Available in Srinagar city for short trips. Good for old city exploration, local market visits, and restaurant hopping. Not available in Gulmarg or Pahalgam hill areas.", highlight: false }, { mode: "Pony / Horse Ride", price: "&#8377;500-2,000/trip", desc: "Essential for the Thajiwas Glacier trek in Sonamarg and some Pahalgam valley excursions. Fixed government rates are displayed at starting points. Also available for meadow rides in Gulmarg.", highlight: false }].map((t, idx) => (
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
          <h2 className="text-3xl font-bold text-stone-800 mb-10">Where to Stay in Kashmir</h2>
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
            {[{ href: "/manali-travel-guide", title: "Manali Travel Guide", desc: "Mountain adventure" }, { href: "/shimla-travel-guide", title: "Shimla Travel Guide", desc: "Queen of Hills" }, { href: "/dharamshala-travel-guide", title: "Dharamshala Travel Guide", desc: "Little Lhasa" }, { href: "/rishikesh-travel-guide", title: "Rishikesh Travel Guide", desc: "Yoga Capital" }, { href: "/haridwar-travel-guide", title: "Haridwar Travel Guide", desc: "Gateway to Gods" }, { href: "/amritsar-travel-guide", title: "Amritsar Travel Guide", desc: "Golden Temple city" }, { href: "/mussoorie-travel-guide", title: "Mussoorie Travel Guide", desc: "Hill station charm" }, { href: "/varanasi-travel-guide", title: "Varanasi Travel Guide", desc: "Spiritual capital" }, { href: "/sightseeing", title: "All Sightseeing Tours", desc: "Complete tour list" }].map((link, idx) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Help Planning Your Kashmir Trip?</h2>
          <p className="text-amber-100/80 mb-8 text-lg">Dal Lake houseboats, Gulmarg gondola, Pahalgam valleys, and Wazwan feasts -- we arrange your complete Kashmir experience.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-gold 2s ease-in-out infinite' }}><Phone className="w-5 h-5" /> Call: 7668570551</Link>
            <Link href="https://wa.me/917668570551?text=I want to book a cab for Kashmir trip" className="inline-flex items-center justify-center gap-2 bg-amber-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-400/30 hover:bg-amber-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">WhatsApp Us <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
    </div>
  </>);
}
