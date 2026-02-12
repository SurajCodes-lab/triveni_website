import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, Car, ArrowRight, Sunrise, Camera, Coffee, ShoppingBag, Thermometer, Hotel, Landmark, Compass, BookOpen, Scroll, Waves } from '@/components/ui/icons';

export const metadata = { title: 'Haridwar Travel Guide 2026 | Gateway to Gods, Ganga Aarti & Kumbh City', description: 'Complete Haridwar travel guide 2026. Gateway to Gods, Har Ki Pauri Ganga Aarti, Mansa Devi, Chandi Devi, Kumbh Mela city, Char Dham gateway. Book cab from Delhi 210 km. Call 7668570551.', keywords: 'haridwar travel guide, gateway to gods, ganga aarti haridwar, har ki pauri, kumbh mela haridwar, mansa devi temple, chandi devi temple, delhi to haridwar cab, char dham gateway, haridwar tourism 2026', authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs', metadataBase: new URL('https://www.trivenicabs.in'), alternates: { canonical: '/haridwar-travel-guide' }, openGraph: { title: 'Haridwar Travel Guide 2026 | Gateway to Gods, Ganga Aarti & Kumbh City', description: 'Everything about visiting Haridwar. Ganga Aarti, temples, Kumbh Mela, food, transport.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/haridwar-travel-guide', siteName: 'Triveni Cabs', images: [{ url: '/images/haridwar-hero.jpg', width: 1200, height: 630, alt: 'Haridwar Travel Guide 2026' }] }, twitter: { card: 'summary_large_image', title: 'Haridwar Travel Guide 2026 | Gateway to Gods & Kumbh City', description: 'Complete Haridwar guide. Ganga Aarti, temples, Kumbh, transport.', creator: '@trivenicabs', site: '@trivenicabs', images: ['/images/haridwar-hero.jpg'] }, robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } } };

export default function HaridwarTravelGuidePage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Haridwar Travel Guide", "item": "https://www.trivenicabs.in/haridwar-travel-guide" }] };
  const faqData = [
    { question: "How many days do I need in Haridwar?", answer: "1-2 days is sufficient for Haridwar alone. Day 1: Har Ki Pauri for morning bath, Mansa Devi Temple via cable car, afternoon at Shantikunj, and the grand evening Ganga Aarti. Day 2: Chandi Devi Temple, Daksha Mahadev Temple, Bilkeshwar Mahadev Temple, and Rajaji National Park jeep safari. Most visitors combine Haridwar with Rishikesh (25 km away) for a 3-4 day trip." },
    { question: "What is the best time to visit Haridwar?", answer: "October to March is ideal with pleasant weather (15-30 degrees). February-March is perfect for comfortable sightseeing. Kumbh Mela years (next in 2025/2027 Ardh Kumbh) are extraordinary but extremely crowded -- plan months ahead. Kanwar Yatra in July-August brings millions of Shiva devotees. Avoid peak summer May-June (40+ degrees) unless attending a festival." },
    { question: "How do I reach Haridwar from Delhi?", answer: "By car: 210 km, approximately 5 hours via NH58 through Meerut and Roorkee. Our cab costs &#8377;4,000-5,500 one way. By train: Shatabdi Express (4.5 hrs), Jan Shatabdi, or Dehradun-bound trains stop at Haridwar. By bus: UPSRTC and UKRTC Volvo AC buses run frequently (5-6 hrs, &#8377;400-800). Jolly Grant Airport (Dehradun) is 38 km away." },
    { question: "What is Ganga Aarti at Har Ki Pauri?", answer: "The most spectacular Ganga Aarti in India, performed every evening at sunset at Har Ki Pauri ghat. Dozens of priests perform synchronized worship with massive multi-tiered brass lamps while thousands of devotees release floating diyas (oil lamps) into the Ganga. The chanting, bells, and sea of flickering flames create an overwhelmingly spiritual atmosphere. Arrive at least 1 hour early for a good viewing spot." },
    { question: "Is Haridwar a vegetarian city?", answer: "Yes, Haridwar is a sacred city and strictly vegetarian by law. No meat, fish, eggs, or alcohol is sold within the city limits. The city excels at pure vegetarian cuisine -- Chole Bhature, Kachori Sabzi, Aloo Puri, Rabri, and temple Langars. Hoshiyarpuri near the railway station has served legendary Chole Bhature since 1935." },
    { question: "What food is Haridwar famous for?", answer: "Haridwar is a paradise for vegetarian food lovers. The city is famous for Kachori Sabzi (crispy fried pastries with spiced potato curry), Chole Bhature (puffy fried bread with chickpea curry), Aloo Puri (potato curry with fried bread), thick creamy Rabri, tall glasses of fresh Lassi, and free temple Langars. Mohan Ji Puri Wale near Har Ki Pauri is legendary." },
    { question: "What should I buy in Haridwar?", answer: "Ganga Jal (holy Ganga water) in decorative brass and copper bottles, puja samagri (worship items), rudraksha bead malas, brass idols of Hindu deities, Ayurvedic medicines from Patanjali/Divya Pharmacy at wholesale prices, and religious books. Bara Bazaar and Moti Bazaar near Har Ki Pauri are the main shopping streets." },
    { question: "Can I combine Haridwar with Rishikesh?", answer: "Absolutely! Rishikesh is just 25 km (45 minutes) from Haridwar. Most visitors combine both cities for a complete spiritual-and-adventure experience. See Haridwar&apos;s grand Ganga Aarti at Har Ki Pauri in the evening and explore Rishikesh&apos;s yoga ashrams, Beatles Ashram, cafes, and white-water rafting during the day. We offer combined packages from Delhi starting at &#8377;8,000." },
  ];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };
  const attractions = [
    { name: "Har Ki Pauri", desc: "The most sacred ghat in Haridwar, believed to bear the actual footprint of Lord Vishnu. This is where the Ganga officially enters the plains from the Himalayas. The site of the grand Ganga Aarti every evening and the epicentre of Kumbh Mela celebrations when millions gather to take a holy dip. The ghat is beautifully lit at night and deeply atmospheric at dawn.", entry: "Free", timing: "All day; Ganga Aarti at sunset", duration: "1-2 hours", icon: Landmark },
    { name: "Mansa Devi Temple", desc: "Revered hilltop temple dedicated to Goddess Mansa Devi (the wish-fulfilling deity), perched atop Bilwa Parvat hill. Reached by an aerial tramway (cable car, &#8377;275 round trip) or a scenic 3 km uphill trek. One of the Siddh Peethas, where devotees tie sacred threads to make wishes. Offers breathtaking panoramic views of Haridwar city and the Ganga.", entry: "Free (Cable car &#8377;275)", timing: "8:00 AM - 5:00 PM", duration: "1.5-2 hours", icon: Landmark },
    { name: "Chandi Devi Temple", desc: "Ancient hilltop temple on Neel Parvat hill, dedicated to Goddess Chandi. Believed to be established by Adi Shankaracharya in the 8th century. Accessible via cable car from Gauchar (&#8377;315 round trip) or a 3 km forest trek. Together with Mansa Devi, completing both temples is considered the Panch Tirth yatra.", entry: "Free (Cable car &#8377;315)", timing: "8:00 AM - 5:00 PM", duration: "1.5-2 hours", icon: Shield },
    { name: "Ganga Aarti (Evening Ceremony)", desc: "India&apos;s most spectacular evening fire ritual, performed daily at Har Ki Pauri ghat. Dozens of priests hold massive multi-tiered brass lamps and perform synchronized worship to the sacred Ganga. Thousands of floating diyas released by devotees create a river of light. The combined sound of conch shells, bells, and Vedic chanting is deeply transcendent.", entry: "Free", timing: "Sunset (5:30-7:00 PM seasonal)", duration: "45 min - 1 hour", icon: Sunrise },
    { name: "Shantikunj (Gayatri Pariwar)", desc: "The sprawling headquarters of the All World Gayatri Pariwar, one of India&apos;s largest spiritual organisations. Features beautiful gardens, a museum of ancient Indian science (Yug Nirman Yojana), meditation halls, and educational exhibits on Vedic culture. A centre of peace and learning, open to visitors of all faiths.", entry: "Free", timing: "6:00 AM - 8:00 PM", duration: "1-2 hours", icon: BookOpen },
    { name: "Daksha Mahadev Temple", desc: "One of Haridwar&apos;s most ancient temples, standing at the site where the legendary King Daksha performed a grand yajna (fire sacrifice). The temple houses a magnificent Shiva lingam and is surrounded by peaceful gardens. Located in Kankhal, 4 km south of Har Ki Pauri, in one of Haridwar&apos;s oldest neighbourhoods.", entry: "Free", timing: "5:00 AM - 9:00 PM", duration: "30-45 min", icon: Landmark },
    { name: "Bilkeshwar Mahadev Temple", desc: "A serene Shiva temple situated atop a small hillock near the Ganga, offering beautiful river views. Less visited by tourists and therefore more peaceful. The temple is believed to be the spot where Lord Shiva consoled a grieving Vishnu. A hidden gem for those seeking a quieter spiritual experience in Haridwar.", entry: "Free", timing: "6:00 AM - 8:00 PM", duration: "30-45 min", icon: Landmark },
    { name: "Rajaji National Park", desc: "A stunning tiger reserve and national park spread across the Shivalik foothills, just outside Haridwar city limits. Home to Asian elephants, Bengal tigers, leopards, sloth bears, and over 300 bird species. Jeep safaris depart from Chilla and Motichur gates. The park is named after C. Rajagopalachari, India&apos;s last Governor General.", entry: "&#8377;150 Indian / &#8377;600 Foreign", timing: "6:00 AM - 6:00 PM (Nov-Jun)", duration: "3-4 hours", icon: Compass },
  ];
  const monthlyGuide = [
    { month: "Jan", temp: "5-20&#xB0;C", weather: "Cold, foggy", crowd: "Low", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 58 },
    { month: "Feb", temp: "8-24&#xB0;C", weather: "Cool, pleasant", crowd: "Medium", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 80 },
    { month: "Mar", temp: "13-30&#xB0;C", weather: "Pleasant, warm", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 92 },
    { month: "Apr", temp: "18-36&#xB0;C", weather: "Warm", crowd: "Very High", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 100 },
    { month: "May", temp: "23-40&#xB0;C", weather: "Hot", crowd: "Medium", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 35 },
    { month: "Jun", temp: "25-38&#xB0;C", weather: "Very hot", crowd: "Low", verdict: "Not ideal", color: "bg-red-100 text-red-800", bar: 18 },
    { month: "Jul", temp: "24-33&#xB0;C", weather: "Monsoon/Kanwar", crowd: "Very High", verdict: "Crowded", color: "bg-amber-100 text-amber-800", bar: 30 },
    { month: "Aug", temp: "23-32&#xB0;C", weather: "Heavy rain", crowd: "Medium", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 28 },
    { month: "Sep", temp: "22-32&#xB0;C", weather: "Rain ending", crowd: "Low-Med", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 55 },
    { month: "Oct", temp: "17-31&#xB0;C", weather: "Pleasant", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 90 },
    { month: "Nov", temp: "10-26&#xB0;C", weather: "Cool, clear", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 88 },
    { month: "Dec", temp: "5-21&#xB0;C", weather: "Cold", crowd: "Medium", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 60 },
  ];
  const foodSection = [
    { name: "Kachori Sabzi", desc: "Haridwar&apos;s quintessential breakfast -- crispy fried pastries stuffed with dal or moong, served with spiced potato-pea curry and tangy chutneys. Morning stalls near Har Ki Pauri serve the freshest and most authentic versions, often sold out by 10 AM.", icon: "&#129384;" },
    { name: "Chole Bhature", desc: "Haridwar&apos;s most beloved dish -- puffy, golden fried bread with richly spiced chickpea curry. Hoshiyarpuri near the railway station has served legendary Chole Bhature since 1935, with queues stretching out the door every morning.", icon: "&#127835;" },
    { name: "Aloo Puri", desc: "Deep-fried golden bread served with a generous bowl of spiced potato curry -- the classic pilgrimage meal of North India. Available at every restaurant and street stall in the ghat area, it is affordable, filling, and deeply satisfying.", icon: "&#127835;" },
    { name: "Rabri & Lassi", desc: "Thick, creamy rabri (slowly reduced milk sweetened with sugar and cardamom) and tall steel glasses of fresh churned lassi. Mohan Ji Puri Wale near Har Ki Pauri serves excellent traditional versions that pilgrims have loved for decades.", icon: "&#129371;" },
    { name: "Temple Langar", desc: "Free community meals served at Mansa Devi Temple, various ashrams, and gurudwaras throughout the city. Simple but deeply nourishing dal, roti, rice, and sabzi. Sharing a langar meal with fellow pilgrims is one of Haridwar&apos;s most beautiful communal experiences.", icon: "&#127858;" },
    { name: "Street Chaat", desc: "Crispy golgappe (pani puri), crunchy aloo tikki with chutneys, and layered papdi chaat at stalls near Bara Bazaar and the ghat area. Fresh, tangy, and addictive -- perfect for snacking between temple visits and shopping rounds.", icon: "&#127869;" },
  ];
  const shoppingSection = [
    { name: "Ganga Jal & Puja Samagri", desc: "Decorative brass and copper bottles of holy Ganga water, puja thalis, sacred threads, camphor, incense, kumkum, and complete worship kits. Every shop along the ghat area specialises in these spiritual essentials for pilgrims.", price: "&#8377;50 - &#8377;5,000" },
    { name: "Rudraksha & Brass Items", desc: "Authentic rudraksha bead malas for meditation, brass idols of Hindu deities (Shiva, Ganesha, Durga), and ornamental temple bells. Moti Bazaar and the shops near Har Ki Pauri offer the widest selection.", price: "&#8377;100 - &#8377;10,000" },
    { name: "Ayurvedic Products", desc: "Patanjali Yogpeeth and Divya Pharmacy stores in Haridwar offer authentic Ayurvedic medicines, herbal beauty products, organic foods, and dietary supplements at factory prices. The main store in Kankhal is massive.", price: "&#8377;50 - &#8377;3,000" },
    { name: "Prasad & Traditional Sweets", desc: "Packaged temple prasad boxes, traditional North Indian mithai (peda, barfi, laddu), and savoury snacks to carry home as gifts. Shops near Har Ki Pauri specialise in attractively packaged religious gift sets.", price: "&#8377;50 - &#8377;1,000" },
  ];
  const areaGuide = [
    { area: "Har Ki Pauri Area", desc: "The most convenient location for pilgrims. Walking distance to the main ghat, Ganga Aarti, markets, and temples. Budget to mid-range dharamshalas and hotels dominate. Can be noisy during festival season and Kanwar Yatra.", budget: "&#8377;500-3,000/night" },
    { area: "Railway Road / Station Area", desc: "Budget-friendly zone with many options. Close to the bus stand and railway station for easy onward travel. The legendary Hoshiyarpuri restaurant is here. About 1 km walk from the main ghats.", budget: "&#8377;400-2,000/night" },
    { area: "Upper Road / Jwalapur", desc: "Quieter residential area away from the pilgrim crowds. Modern hotels and ashram guesthouses with better amenities. Need auto-rickshaw or taxi to reach the ghats. Good for longer, more peaceful stays.", budget: "&#8377;800-4,000/night" },
    { area: "Kankhal / Rishikesh Road", desc: "The ancient neighbourhood of Kankhal has Daksha Mahadev Temple. Hotels along the Rishikesh Road are convenient for visiting both cities. Some eco-resorts and riverside properties available.", budget: "&#8377;1,500-8,000/night" },
  ];
  const trustFeatures = [{ icon: MapPin, title: "Pilgrimage Experts", desc: "Char Dham gateway" }, { icon: Waves, title: "Gateway to Gods", desc: "One of 7 holy cities" }, { icon: Users, title: "7000+ Pilgrims Served", desc: "Uttarakhand specialists" }, { icon: Star, title: "4.9 Google Rating", desc: "Verified reviews" }];
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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight tracking-tight">Haridwar Travel <span className="shimmer-gold">Guide</span></h1>
          <div className="flex items-center justify-center gap-4 mb-6"><div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500/60" /><span className="text-amber-400 font-semibold tracking-widest text-sm">2026 EDITION</span><div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500/60" /></div>
          <p className="text-lg md:text-xl text-amber-100/70 mb-10 max-w-3xl mx-auto leading-relaxed font-light">The Gateway to the Gods -- where the sacred Ganga enters the plains, ancient temples line holy ghats, and the grand Aarti illuminates the night with a thousand flames.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 transition-all duration-500"><Phone className="w-5 h-5" /> Call Now: 7668570551</Link>
            <Link href="https://wa.me/917668570551?text=I want to book a cab for Haridwar trip" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-500/30 hover:bg-white/20 hover:scale-105 transition-all duration-500">WhatsApp Us</Link>
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
          <div className="text-center mb-10"><h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Table of Contents</h2><p className="text-stone-500">Your chapter-by-chapter guide to the Gateway to Gods</p></div>
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
            <h2 className="text-3xl font-bold text-stone-800 mb-6 text-center mt-4 relative">Welcome to the Gateway to Gods</h2>
            <p className="text-lg text-stone-600 leading-relaxed text-center relative">Haridwar, meaning &quot;Gateway to God,&quot; is one of India&apos;s seven holiest cities (Sapta Puri) and the sacred point where the Ganga leaves the Himalayan foothills to enter the vast Indo-Gangetic plains. This ancient city has been a centre of pilgrimage, learning, and devotion for thousands of years, finding mention in the Puranas and the Mahabharata. Har Ki Pauri, where Lord Vishnu is believed to have left his divine footprint, is the epicentre of Haridwar&apos;s spiritual energy. Every evening, thousands gather at this ghat for the mesmerizing Ganga Aarti -- one of India&apos;s most spectacular spiritual ceremonies, where the night comes alive with fire, chanting, and a river of floating diyas. The city hosts the Kumbh Mela every 12 years, the world&apos;s largest human gathering, when tens of millions of pilgrims converge to bathe in the sacred waters. Beyond its profound spiritual significance, Haridwar serves as the gateway to the Char Dham pilgrimage (Kedarnath, Badrinath, Gangotri, Yamunotri) and offers access to the magnificent Rajaji National Park. The city is also home to Patanjali Yogpeeth and Shantikunj, making it a centre for Ayurveda and yoga. Whether you are a pilgrim seeking blessings, a tourist drawn by the cultural spectacle of the Aarti, or a traveller heading deeper into the mountains of Uttarakhand, Haridwar is an essential and deeply moving stop on any Indian journey.</p>
            <div className="flex justify-center gap-6 mt-8 text-center relative">
              {[{ val: "210 km", label: "From Delhi" }, { val: "Sapta Puri", label: "7 Holiest Cities" }, { val: "5M+", label: "Pilgrims Yearly" }].map((s, i) => (
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
          <h2 className="text-3xl font-bold text-stone-800 mb-2">Best Time to Visit Haridwar</h2>
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
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs"><div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-emerald-500" /> Best (Oct-Apr)</div><div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-amber-400" /> Okay (Jul-Sep)</div><div className="flex items-center gap-1.5"><div className="w-3 h-3 rounded bg-red-400" /> Avoid (May-Jun heat)</div></div>
        </div>
      </section>

      {/* ATTRACTIONS */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-2"><div className="bg-gradient-to-r from-amber-600 to-yellow-500 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider">CHAPTER 2</div></div>
          <h2 className="text-3xl font-bold text-stone-800 mb-10">Top Attractions in Haridwar</h2>
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
          <h2 className="text-3xl font-bold text-stone-800 mb-2">Haridwar Food Guide</h2>
          <p className="text-stone-500 mb-10">Pure vegetarian pilgrimage cuisine -- no meat, eggs, or alcohol in the entire city</p>
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
          <h2 className="text-3xl font-bold text-stone-800 mb-10">Shopping in Haridwar</h2>
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
          <h2 className="text-3xl font-bold text-stone-800 mb-8">Getting Around Haridwar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[{ mode: "Triveni Cabs (Private Taxi)", price: "&#8377;1,500-2,500/day", desc: "AC car with experienced local driver. Essential for Rajaji Park safari and Rishikesh combo. Delhi-Haridwar one way from &#8377;4,000. Char Dham connections available. Call 7668570551.", highlight: true }, { mode: "Auto-rickshaw", price: "&#8377;20-100/trip", desc: "Available everywhere in the city. Good for Har Ki Pauri to station trips and visiting nearby temples. Shared autos run on common routes at fixed rates.", highlight: false }, { mode: "Cycle Rickshaw", price: "&#8377;15-50/trip", desc: "Ideal for short distances in the ghat area and old city lanes. Eco-friendly and atmospheric way to explore the narrow streets around Har Ki Pauri and Bara Bazaar.", highlight: false }, { mode: "Cable Car (Ropeway)", price: "&#8377;275-315/round trip", desc: "Government-operated aerial tramway essential for reaching Mansa Devi and Chandi Devi hilltop temples. Safe, scenic, and saves a 3 km uphill trek each way.", highlight: false }].map((t, idx) => (
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
          <h2 className="text-3xl font-bold text-stone-800 mb-10">Where to Stay in Haridwar</h2>
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
            {[{ href: "/rishikesh-travel-guide", title: "Rishikesh Travel Guide", desc: "Yoga Capital" }, { href: "/kashmir-travel-guide", title: "Kashmir Travel Guide", desc: "Paradise on Earth" }, { href: "/varanasi-travel-guide", title: "Varanasi Travel Guide", desc: "Spiritual capital" }, { href: "/mathura-vrindavan-travel-guide", title: "Mathura Vrindavan Guide", desc: "Krishna birthplace" }, { href: "/shimla-travel-guide", title: "Shimla Travel Guide", desc: "Queen of Hills" }, { href: "/mussoorie-travel-guide", title: "Mussoorie Travel Guide", desc: "Hill station charm" }, { href: "/nainital-travel-guide", title: "Nainital Travel Guide", desc: "Lake District" }, { href: "/dharamshala-travel-guide", title: "Dharamshala Travel Guide", desc: "Little Lhasa" }, { href: "/sightseeing", title: "All Sightseeing Tours", desc: "Complete tour list" }].map((link, idx) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need Help Planning Your Haridwar Trip?</h2>
          <p className="text-amber-100/80 mb-8 text-lg">Pilgrimage arrangements, Char Dham connections, Rishikesh combos, and Rajaji Park safaris -- we handle everything.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-gold 2s ease-in-out infinite' }}><Phone className="w-5 h-5" /> Call: 7668570551</Link>
            <Link href="https://wa.me/917668570551?text=I want to book a cab for Haridwar trip" className="inline-flex items-center justify-center gap-2 bg-amber-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-400/30 hover:bg-amber-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">WhatsApp Us <ArrowRight className="w-5 h-5" /></Link>
          </div>
        </div>
      </section>
    </div>
  </>);
}
