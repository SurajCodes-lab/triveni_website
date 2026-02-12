import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, Calendar, Sunrise, Camera, Coffee, ShoppingBag, Thermometer, Hotel, Landmark, Compass, BookOpen, Scroll, Mountain, TreePine } from '@/components/ui/icons';

export const metadata = { title: 'Mussoorie Travel Guide 2026 | Queen of Hills, Mall Road & Doon Valley Views', description: 'Complete Mussoorie travel guide 2026. Kempty Falls, Gun Hill, Lal Tibba, Mall Road, Cloud&apos;s End, George Everest House. Call 7668570551.', keywords: 'mussoorie travel guide, queen of hills, kempty falls, gun hill, lal tibba, mall road mussoorie, mussoorie tourism, uttarakhand tourism, dehradun to mussoorie', authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs', metadataBase: new URL('https://www.trivenicabs.in'), alternates: { canonical: '/mussoorie-travel-guide' }, openGraph: { title: 'Mussoorie Travel Guide 2026 | Queen of Hills & Beyond', description: 'Everything about visiting Mussoorie. Kempty Falls, Gun Hill, Mall Road, food, transport.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/mussoorie-travel-guide', siteName: 'Triveni Cabs', images: [{ url: '/images/mussoorie-hero.jpg', width: 1200, height: 630, alt: 'Mussoorie Travel Guide 2026' }] }, twitter: { card: 'summary_large_image', title: 'Mussoorie Travel Guide 2026', description: 'Complete Mussoorie guide. Queen of Hills, Mall Road, Kempty Falls, food.', creator: '@trivenicabs', site: '@trivenicabs', images: ['/images/mussoorie-hero.jpg'] }, robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } } };

export default function MussorieTravelGuidePage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Mussoorie Travel Guide", "item": "https://www.trivenicabs.in/mussoorie-travel-guide" }] };
  const faqData = [
    { question: "How many days do I need in Mussoorie?", answer: "2-3 days is perfect. Day 1: Mall Road, Gun Hill cable car ride, Camel&apos;s Back Road sunset walk. Day 2: Kempty Falls, Company Garden, Lal Tibba viewpoint. Day 3: George Everest House trek, Cloud&apos;s End, Jharipani Falls. Add a day for Dhanaulti (24 km) and Surkanda Devi Temple." },
    { question: "What is the best time to visit Mussoorie?", answer: "March to June and September to November are best. March-June offers pleasant weather (15-30 degrees) with clear Doon Valley views. September-November is post-monsoon freshness with fewer crowds. December-February brings snowfall (magical but cold, 0-8 degrees). July-August has heavy monsoon -- landslides can block roads." },
    { question: "How do I reach Mussoorie from Delhi?", answer: "By car: 280 km, 6 hours via NH58 through Meerut and Dehradun. Our cab costs &#8377;5,000-7,000 one way. By train: Dehradun Shatabdi (5.5 hrs) then 35 km road (1.5 hrs). By bus: UPSRTC/ISBT Volvo (7-8 hours). Dehradun is the nearest railhead -- we offer station pickup service." },
    { question: "Is Mussoorie good for families with children?", answer: "Excellent for families! Company Garden has activities for kids, Mall Road has toy shops and fast food, Kempty Falls has safe swimming pools, and the Gun Hill cable car ride is a thrill for all ages. The weather is pleasant even in summer. Many family-friendly hotels with valley views." },
    { question: "What food is Mussoorie famous for?", answer: "The Lovely Omelette at Mall Road (famous since decades), Tibetan momos and thukpa, cafe-style wood-fired pizzas, maggi at scenic viewpoints, and classic North Indian food. Tavern (oldest restaurant), Kalsang Friends Corner (Tibetan), and Cafe de Tavern are must-visit eateries." },
    { question: "Is Mall Road worth visiting?", answer: "Absolutely! Mall Road (also called The Mall) is the heart of Mussoorie -- a 2 km pedestrian stretch with colonial-era buildings, shops, restaurants, and stunning valley views. Best during evening hours when it comes alive with street performers, local snacks, and a festive atmosphere. No vehicles allowed." },
    { question: "Can I see snow in Mussoorie?", answer: "Yes! Mussoorie receives snowfall from December to February, especially January. Lal Tibba and Cloud&apos;s End are the best spots for snow. The first snowfall usually happens in late December or early January. Snow-covered Mall Road and Himalayan views are spectacular but pack heavy woolens." },
    { question: "What should I buy in Mussoorie?", answer: "Woollen wear (sweaters, shawls, caps) at Mall Road shops, Tibetan jewellery and artefacts, wooden walking sticks (a Mussoorie tradition), local honey from Uttarakhand, and jams and preserves from Landour. The Tibetan Market near Picture Palace offers affordable handicrafts." },
  ];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };
  const attractions = [
    { name: "Kempty Falls", desc: "Mussoorie&apos;s most famous waterfall, cascading from a height of 40 feet into a natural pool. Located 15 km from Mall Road. Swimming allowed in designated areas. Rope-way ride available. Most popular during summer months.", entry: "&#8377;50 (pool access)", timing: "8:00 AM - 6:00 PM", duration: "1.5-2 hours", icon: Sunrise },
    { name: "Gun Hill (Cable Car)", desc: "The second-highest point in Mussoorie at 2,024 metres. Reached by a fun ropeway (cable car) ride from Mall Road. Panoramic 360-degree views of the Doon Valley and Himalayan peaks including Banderpoonch and Srikantha.", entry: "&#8377;125 (cable car return)", timing: "10:00 AM - 6:00 PM", duration: "1-1.5 hours", icon: Mountain },
    { name: "Lal Tibba", desc: "The highest point of Mussoorie at 2,275 metres in the charming Landour area. Telescopic views of Himalayan peaks -- Kedarnath, Badrinath, and Banderpoonch on clear days. The old telescope at the cafe is a beloved tradition.", entry: "Free", timing: "All day (morning best)", duration: "1-2 hours", icon: Camera },
    { name: "Mall Road (The Mall)", desc: "The vibrant 2 km pedestrian promenade and heart of Mussoorie since British times. Colonial architecture, curio shops, eateries, and ice cream parlours. The Library Chowk and Picture Palace areas are the busiest stretches. Best in the evening.", entry: "Free", timing: "All day (evening best)", duration: "2-3 hours", icon: MapPin },
    { name: "Company Garden", desc: "A beautifully maintained garden with an artificial lake, flower beds, and an amusement section for children. Boating available on the mini lake. Good for families. Managed by the Mussoorie municipality.", entry: "&#8377;50", timing: "8:00 AM - 6:00 PM", duration: "1-1.5 hours", icon: TreePine },
    { name: "Camel&apos;s Back Road", desc: "A scenic 3 km walking road named after a rock formation that resembles a camel&apos;s hump. Stunning views of the Doon Valley. Perfect for a peaceful morning jog or sunset walk. Horse rides available along the route.", entry: "Free", timing: "All day (sunrise/sunset best)", duration: "1-1.5 hours", icon: Compass },
    { name: "Cloud&apos;s End", desc: "The westernmost point of Mussoorie where the town ends and thick forests begin. A historic British-era bungalow sits at the edge. Starting point for treks to Benog Wildlife Sanctuary. Misty and magical, especially during monsoon edge months.", entry: "Free", timing: "All day", duration: "2-3 hours (with trek)", icon: Landmark },
    { name: "George Everest House", desc: "Ruins of the house and laboratory of Sir George Everest, the Surveyor General after whom Mount Everest is named. A 6 km trek from Library Point through Hathipaon. Spectacular 270-degree views of the Doon Valley and Aglar River valley.", entry: "Free", timing: "All day (morning best)", duration: "3-4 hours (with trek)", icon: Shield },
    { name: "Jharipani Falls", desc: "A serene 40-feet waterfall about 7 km from Mussoorie. Requires a short trek through dense forest. Less crowded than Kempty Falls, offering a more peaceful nature experience. Best visited after monsoon when water flow is fullest.", entry: "Free", timing: "All day", duration: "2-3 hours (with trek)", icon: Sunrise },
  ];
  const monthlyGuide = [
    { month: "Jan", temp: "0-8°C", weather: "Snow, cold", crowd: "Low-Med", verdict: "OK (snow)", color: "bg-blue-100 text-blue-800", bar: 40 },
    { month: "Feb", temp: "1-10°C", weather: "Cold, snow", crowd: "Low-Med", verdict: "OK (snow)", color: "bg-blue-100 text-blue-800", bar: 42 },
    { month: "Mar", temp: "5-17°C", weather: "Spring bloom", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 88 },
    { month: "Apr", temp: "10-22°C", weather: "Pleasant", crowd: "Very High", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 95 },
    { month: "May", temp: "14-28°C", weather: "Warm, clear", crowd: "Very High", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 100 },
    { month: "Jun", temp: "17-30°C", weather: "Hot, pre-rain", crowd: "High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 75 },
    { month: "Jul", temp: "16-24°C", weather: "Heavy rain", crowd: "Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 12 },
    { month: "Aug", temp: "15-23°C", weather: "Peak monsoon", crowd: "Very Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 10 },
    { month: "Sep", temp: "13-22°C", weather: "Rain ending", crowd: "Low-Med", verdict: "Good", color: "bg-amber-100 text-amber-800", bar: 55 },
    { month: "Oct", temp: "8-20°C", weather: "Clear, crisp", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 92 },
    { month: "Nov", temp: "3-15°C", weather: "Cool, clear", crowd: "Moderate", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 78 },
    { month: "Dec", temp: "0-10°C", weather: "Cold, frost", crowd: "Low-Med", verdict: "OK (snow)", color: "bg-blue-100 text-blue-800", bar: 38 },
  ];
  const foodSection = [
    { name: "The Legendary Omelette", desc: "The Lovely Omelette stall on Mall Road has been serving fluffy, spiced omelettes for decades. A Mussoorie institution that every visitor must try. Paired with bread and butter, it is the ultimate Mall Road snack.", icon: "🍳" },
    { name: "Tibetan Momos & Thukpa", desc: "McLeod Ganj&apos;s Tibetan influence extends to Mussoorie. Steamed or fried momos and hot thukpa are available at every corner. Kalsang Friends Corner and Little Llama Cafe are local favourites for authentic Tibetan fare.", icon: "🥟" },
    { name: "Cafe Culture & Pizzas", desc: "Mussoorie has a thriving cafe scene, especially in Landour. Wood-fired pizzas, artisan coffee, freshly baked cakes, and continental food. Landour Bakehouse, Cafe Ivy, and Doma&apos;s Inn are must-visit establishments.", icon: "☕" },
    { name: "Tavern (Heritage Dining)", desc: "Mussoorie&apos;s oldest restaurant, operating since British times. Classic North Indian and Continental cuisine in a colonial ambience. The Tavern at the Charleville hotel is another heritage dining experience.", icon: "🍽️" },
    { name: "Maggi at Viewpoints", desc: "No Mussoorie trip is complete without a hot plate of Maggi noodles at a misty mountain viewpoint. The chai-and-Maggi stalls along Camel&apos;s Back Road and near Lal Tibba are quintessential hill station experiences.", icon: "🍜" },
    { name: "Local Sweets & Snacks", desc: "Try the famous Mussoorie chaat at Mall Road, roasted corn (bhutta) from street vendors, and local bakery items. Prakash Store and Standard Confectioners have been serving baked goods for generations.", icon: "🍬" },
  ];
  const shoppingSection = [
    { name: "Woollen Wear", desc: "Mussoorie is famous for affordable woolens -- sweaters, shawls, stoles, jackets, and caps. Mall Road and the Tibetan Market near Picture Palace offer the best selection. Bargaining is expected at smaller shops.", price: "&#8377;200 - &#8377;5,000" },
    { name: "Tibetan Handicrafts", desc: "Prayer flags, singing bowls, turquoise jewellery, Buddhist artefacts, and handmade bags. The Tibetan Market has concentrated shops with authentic items. Great souvenirs at reasonable prices.", price: "&#8377;100 - &#8377;8,000" },
    { name: "Walking Sticks", desc: "A Mussoorie tradition since the British era. Handcrafted wooden walking sticks in various styles -- from simple trekking poles to ornately carved collector pieces. Available all along Mall Road.", price: "&#8377;100 - &#8377;2,000" },
    { name: "Local Honey & Preserves", desc: "Pure Uttarakhand honey, fruit jams, pickles, and preserves. Landour shops specialise in artisanal honey and organic products. Excellent gifts to take home. Check for genuine Himalayan honey labels.", price: "&#8377;200 - &#8377;1,500" },
  ];
  const areaGuide = [
    { area: "Mall Road Area", desc: "The most central and convenient location. Walking distance to all Mall Road attractions, restaurants, and shops. Lively atmosphere with valley views from many hotels. Can be noisy during peak season weekends.", budget: "&#8377;800-6,000/night" },
    { area: "Library Area", desc: "Slightly quieter end of Mall Road near the historic library. Good mid-range hotels with better views. Close to Camel&apos;s Back Road and Gun Hill cable car. A favourite with repeat visitors.", budget: "&#8377;1,000-5,000/night" },
    { area: "Landour", desc: "The quiet, charming cantonment above Mussoorie. Ruskin Bond&apos;s home. Excellent cafes (Landour Bakehouse), colonial-era architecture, and peaceful pine-forest walks. Less crowded, more atmospheric. Limited nightlife.", budget: "&#8377;1,500-8,000/night" },
    { area: "Picture Palace Area", desc: "Budget-friendly area near the Tibetan Market. Walking distance to Mall Road. Many affordable hotels and guesthouses. Good for travellers on a budget who want Mall Road access without premium pricing.", budget: "&#8377;500-3,000/night" },
  ];
  const trustFeatures = [{ icon: Mountain, title: "Hill Station Experts", desc: "Uttarakhand specialists" }, { icon: Landmark, title: "Queen of Hills", desc: "Since the British era" }, { icon: Users, title: "5000+ Trips Done", desc: "Mussoorie tour experts" }, { icon: Star, title: "4.9 Google Rating", desc: "Verified reviews" }];
  const chapters = [{ title: "Attractions", icon: Landmark, count: "9 Sites" }, { title: "Best Time", icon: Thermometer, count: "12 Months" }, { title: "Food Guide", icon: Coffee, count: "6 Specialties" }, { title: "Shopping", icon: ShoppingBag, count: "4 Categories" }, { title: "Stay Guide", icon: Hotel, count: "4 Areas" }, { title: "Transport", icon: Car, count: "4 Options" }];

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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight tracking-tight">Mussoorie Travel <span className="shimmer-gold">Guide</span></h1>
          <div className="flex items-center justify-center gap-4 mb-6"><div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500/60" /><span className="text-amber-400 font-semibold tracking-widest text-sm">2026 EDITION</span><div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500/60" /></div>
          <p className="text-lg md:text-xl text-amber-100/70 mb-10 max-w-3xl mx-auto leading-relaxed font-light">Queen of the Hills since the British era -- misty Mall Road strolls, cascading waterfalls, and breathtaking Doon Valley panoramas at every turn.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 transition-all duration-500"><Phone className="w-5 h-5" /> Call Now: 7668570551</Link>
            <Link href="https://wa.me/917668570551?text=I want to book a cab for Mussoorie trip" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-500/30 hover:bg-white/20 hover:scale-105 transition-all duration-500">WhatsApp Us</Link>
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
          <div className="text-center mb-10"><h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Table of Contents</h2><p className="text-stone-500">Your chapter-by-chapter guide to the Queen of Hills</p></div>
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
            <h2 className="text-3xl font-bold text-stone-800 mb-6 text-center mt-4 relative">Welcome to the Queen of Hills</h2>
            <p className="text-lg text-stone-600 leading-relaxed text-center relative">Mussoorie, perched at an elevation of 2,005 metres in the Garhwal Himalayas, has been India&apos;s most beloved hill station since Captain Frederick Young founded it in 1823. The British christened it the Queen of Hills, and the title has stuck for over two centuries. Its crowning jewel, Mall Road, is a grand promenade that has witnessed generations of families, honeymooners, and literary figures -- Ruskin Bond still writes from his home in nearby Landour. The town offers a rare combination of colonial charm, natural beauty, and accessibility. Kempty Falls thunders into a misty pool just 15 km away, Gun Hill&apos;s cable car lifts visitors above the cloud line, and Lal Tibba rewards the curious with telescopic views of Kedarnath and Badrinath on clear mornings. George Everest&apos;s hilltop laboratory, from where the Great Trigonometric Survey of India was directed, offers one of the most spectacular sunset viewpoints in the Himalayas. For food lovers, Mussoorie delivers surprisingly well -- from the legendary Lovely Omelette on Mall Road to artisan bakeries in Landour. Whether you seek a classic family holiday, a romantic getaway, or a quiet literary retreat, Mussoorie wraps you in mist and memory, and invites you back again and again.</p>
            <div className="flex justify-center gap-6 mt-8 text-center relative">
              {[{ val: "1823", label: "Year Founded" }, { val: "2,005 m", label: "Elevation" }, { val: "200+", label: "Years of Tourism" }].map((s, i) => (
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
          <h2 className="text-3xl font-bold text-stone-800 mb-2">Best Time to Visit Mussoorie</h2>
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
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs"><div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-emerald-500" /> Best (Mar-Jun, Oct-Nov)</div><div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-amber-400" /> OK (Sep)</div><div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-blue-400" /> Snow (Dec-Feb)</div><div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-red-400" /> Avoid (Jul-Aug)</div></div>
        </div>
      </section>

      {/* ATTRACTIONS */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2"><div className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider">CHAPTER 2</div></div>
          <h2 className="text-3xl font-bold text-stone-800 mb-10">Top Attractions in Mussoorie</h2>
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
          <h2 className="text-3xl font-bold text-stone-800 mb-2">Mussoorie Food Guide</h2>
          <p className="text-stone-500 mb-10">Colonial-era eateries, hill station snacks, and Landour&apos;s cafe revolution</p>
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
          <h2 className="text-3xl font-bold text-stone-800 mb-10">Shopping in Mussoorie</h2>
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
          <h2 className="text-3xl font-bold text-stone-800 mb-8">Getting Around Mussoorie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[{ mode: "Triveni Cabs (Private Taxi)", price: "&#8377;1,500-3,000/day", desc: "AC car with driver. Best for Kempty Falls, Dhanaulti, and Dehradun transfers. Delhi-Mussoorie one way from &#8377;5,000. Call 7668570551.", highlight: true }, { mode: "Local Taxi / Vikram", price: "&#8377;50-200/trip", desc: "Shared Vikrams (large auto-rickshaws) run set routes -- Library to Picture Palace, Mussoorie to Dehradun. Private taxis for Kempty Falls and Cloud&apos;s End.", highlight: false }, { mode: "Pony / Horse Ride", price: "&#8377;200-500/trip", desc: "Available along Camel&apos;s Back Road and near Gun Hill. A charming old-world way to explore. Negotiate fixed prices before mounting.", highlight: false }, { mode: "Walking", price: "Free", desc: "Mall Road is pedestrian-only. Most Mussoorie attractions are within walking distance. George Everest House and Cloud&apos;s End require scenic treks. Carry water and wear comfortable shoes.", highlight: false }].map((t, idx) => (
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
          <h2 className="text-3xl font-bold text-stone-800 mb-10">Where to Stay in Mussoorie</h2>
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
            {[{ href: "/nainital-travel-guide", title: "Nainital Travel Guide", desc: "Lake City" }, { href: "/shimla-travel-guide", title: "Shimla Travel Guide", desc: "Queen of Hills" }, { href: "/dharamshala-travel-guide", title: "Dharamshala Travel Guide", desc: "Little Lhasa" }, { href: "/manali-travel-guide", title: "Manali Travel Guide", desc: "Mountain adventure" }, { href: "/haridwar-travel-guide", title: "Haridwar Travel Guide", desc: "Gateway to Gods" }, { href: "/jaipur-travel-guide", title: "Jaipur Travel Guide", desc: "Pink City" }, { href: "/agra-travel-guide", title: "Agra Travel Guide", desc: "Taj Mahal & more" }, { href: "/varanasi-travel-guide", title: "Varanasi Travel Guide", desc: "Spiritual capital" }, { href: "/sightseeing", title: "All Sightseeing Tours", desc: "Complete tour list" }].map((link, idx) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Help Planning Your Mussoorie Trip?</h2>
          <p className="text-amber-100/80 mb-8 text-lg">Kempty Falls, Mall Road strolls, Landour cafe hopping, and Doon Valley views -- we arrange it all.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-gold 2s ease-in-out infinite' }}><Phone className="w-5 h-5" /> Call: 7668570551</Link>
            <Link href="https://wa.me/917668570551?text=I want to book a cab for Mussoorie trip" className="inline-flex items-center justify-center gap-2 bg-amber-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-400/30 hover:bg-amber-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">WhatsApp Us <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
    </div>
  </>);
}
