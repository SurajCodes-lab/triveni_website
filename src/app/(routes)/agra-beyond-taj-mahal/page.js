import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, Camera, Landmark, Compass, Calendar, Bird, Binoculars, Map, Target } from '@/components/ui/icons';

export const metadata = {
  title: 'Agra Beyond Taj Mahal | Hidden Gems & Day Trips | 2026',
  description: 'Discover Agra beyond the Taj. Agra Fort, Fatehpur Sikri, Baby Taj, Mehtab Bagh, Sikandra + day trips to Mathura, Bharatpur. By Agra locals. Call 7668570551.',
  keywords: 'agra beyond taj mahal, places to visit in agra, agra fort, fatehpur sikri, agra hidden gems, agra day trips, baby taj, mehtab bagh',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/agra-beyond-taj-mahal' },
  openGraph: {
    title: 'Agra Beyond Taj Mahal | Hidden Gems & Day Trips 2026',
    description: 'Discover what Agra has beyond the Taj. Forts, tombs, wildlife, day trips. Complete guide by locals.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/agra-beyond-taj-mahal',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/taj-mahal-hero.jpg', width: 1200, height: 630, alt: 'Agra Beyond Taj Mahal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agra Beyond Taj Mahal | Hidden Gems',
    description: 'Agra Fort, Fatehpur Sikri, day trips, hidden gems. By Agra locals.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/taj-mahal-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function AgraBeyondTajMahalPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Agra Beyond Taj Mahal", "item": "https://www.trivenicabs.in/agra-beyond-taj-mahal" },
    ],
  };

  const faqData = [
    { question: "What can I see in Agra besides the Taj Mahal?", answer: "Agra has many attractions: Agra Fort (UNESCO site), Fatehpur Sikri (UNESCO site, 37 km), Itimad-ud-Daulah (Baby Taj), Mehtab Bagh, Sikandra (Akbar's Tomb), Chini Ka Rauza, Rambagh, and Jama Masjid. Day trips include Mathura-Vrindavan (50 km) and Bharatpur Bird Sanctuary (55 km)." },
    { question: "How many days do I need to see everything in Agra?", answer: "1 day covers Taj + top 3-4 sights. 2 days lets you explore everything in Agra city plus Fatehpur Sikri. 3 days adds day trips to Mathura-Vrindavan or Bharatpur. Our 2-day itinerary is the most popular and comprehensive." },
    { question: "Is Fatehpur Sikri worth visiting?", answer: "Absolutely! Fatehpur Sikri is a UNESCO World Heritage Site -- an entire abandoned Mughal city built by Emperor Akbar. The Buland Darwaza is the world's highest gateway. It takes 2-3 hours and is 37 km from Agra (₹800 extra for cab diversion). Highly recommended for history lovers." },
    { question: "What is the Baby Taj?", answer: "Itimad-ud-Daulah, called the Baby Taj, is an exquisite marble tomb that predates and inspired the Taj Mahal. It features the first extensive use of Pietra Dura (marble inlay) in Mughal architecture. Smaller and less crowded than the Taj, it is equally beautiful in detail." },
    { question: "Can I visit Mathura-Vrindavan from Agra?", answer: "Yes! Mathura-Vrindavan is only 50 km from Agra (1-1.5 hours). Birthplace of Lord Krishna, it has beautiful temples (Krishna Janmabhoomi, Banke Bihari, Prem Mandir, ISKCON). We offer Agra + Mathura combined day trips. Add ₹1,500 to your Agra tour." },
    { question: "What is the Chambal Safari?", answer: "The Chambal River Safari at National Chambal Sanctuary (70 km from Agra) offers boat rides to see Gharials (rare crocodilians), river dolphins, turtles, and migratory birds. A unique nature experience, different from typical Agra tourism. Best October-March." },
    { question: "Are there any hidden gems in Agra most tourists miss?", answer: "Yes! Chini Ka Rauza (Persian-style glazed tile tomb), Rambagh (oldest Mughal garden), Jama Masjid (near Agra Fort, free entry), Mariam's Tomb (Akbar's wife), and the Kalakriti Cultural Show (evening Mughal dance performance). Our drivers can take you to all of these." },
    { question: "What is the best 2-day Agra itinerary?", answer: "Day 1: Sunrise Taj Mahal, breakfast, Agra Fort, lunch, Baby Taj, Mehtab Bagh sunset, moonlight Taj (if full moon). Day 2: Fatehpur Sikri (morning), Sikandra (noon), Rambagh, Chini Ka Rauza, shopping at Sadar Bazaar, departure. This covers everything." },
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

  const mainAttractions = [
    { name: "Agra Fort", desc: "A massive red sandstone fort and UNESCO World Heritage Site. Capital of the Mughal Empire from 1556-1648. Contains palaces, audience halls, and the famous Musamman Burj where Shah Jahan spent his last days gazing at the Taj Mahal.", entry: "₹50 Indian / ₹650 Foreign", distance: "2.5 km from Taj", duration: "1.5-2 hours", icon: Shield, color: "from-red-500 to-orange-500" },
    { name: "Fatehpur Sikri", desc: "A UNESCO World Heritage ghost city built by Emperor Akbar in 1571 and abandoned just 14 years later due to water scarcity. Features the Buland Darwaza (world's highest gateway at 54 meters), Panch Mahal, Jama Masjid, and Salim Chishti's tomb.", entry: "₹50 Indian / ₹610 Foreign", distance: "37 km from Agra", duration: "2-3 hours", icon: Landmark, color: "from-amber-500 to-yellow-500" },
    { name: "Itimad-ud-Daulah (Baby Taj)", desc: "An exquisite marble tomb often called the Baby Taj or the Draft of the Taj Mahal. Built by Empress Nur Jahan for her father. Features the first extensive use of Pietra Dura (marble inlay) in Mughal architecture.", entry: "₹30 Indian / ₹310 Foreign", distance: "5 km from Taj", duration: "45 minutes", icon: Camera, color: "from-teal-500 to-cyan-500" },
    { name: "Mehtab Bagh", desc: "The Moonlight Garden directly across the Yamuna from the Taj Mahal. Offers the most iconic Taj view for photography. Originally built by Emperor Babur, restored by ASI. Best at sunset.", entry: "₹30 Indian / ₹300 Foreign", distance: "6 km from Taj", duration: "45 min - 1 hour", icon: Camera, color: "from-violet-500 to-purple-500" },
    { name: "Sikandra (Akbar's Tomb)", desc: "The majestic tomb of Emperor Akbar, started by Akbar himself and completed by his son Jahangir. Unique blend of Hindu, Islamic, Buddhist, Jain, and Christian architectural styles. Surrounded by a beautiful garden with deer and monkeys.", entry: "₹35 Indian / ₹310 Foreign", distance: "10 km from Taj", duration: "1 hour", icon: Compass, color: "from-emerald-500 to-green-500" },
  ];

  const hiddenGems = [
    { name: "Chini Ka Rauza", desc: "A Persian-style tomb decorated with glazed tiles (Chini means China/porcelain). Built for Afzal Khan, a poet and Prime Minister of Shah Jahan. Most of the tile work has deteriorated but remnants show stunning blue, green, and yellow patterns. Free entry.", distance: "1 km from Baby Taj", rarity: "Rare Find" },
    { name: "Rambagh", desc: "One of the oldest Mughal gardens in India, laid out by Emperor Babur in 1528. A peaceful retreat from tourist crowds. Well-maintained gardens on the Yamuna riverbank. Entry ₹25.", distance: "3 km from Taj", rarity: "Hidden Oasis" },
    { name: "Jama Masjid", desc: "Built by Shah Jahan's daughter Jahanara in 1648. A large, beautiful mosque near Agra Fort. Free entry, active mosque (dress modestly). The surrounding market area has Agra's best Bedai-Jalebi breakfast stalls.", distance: "Near Agra Fort", rarity: "Local Secret" },
    { name: "Mariam's Tomb", desc: "The tomb of Mariam-uz-Zamani (Jodha Bai), Emperor Akbar's Hindu wife. A serene garden tomb with beautiful carved sandstone. Rarely visited, offering a peaceful alternative to crowded sights. Entry ₹25.", distance: "Near Sikandra", rarity: "Off the Map" },
    { name: "Guru Ka Taal", desc: "A Sikh gurdwara and historical complex commemorating Guru Tegh Bahadur's imprisonment. Beautiful architecture with a sacred tank. Open to all visitors. Free entry and langar (community kitchen).", distance: "12 km from Agra", rarity: "Unique Experience" },
  ];

  const dayTrips = [
    { name: "Mathura & Vrindavan", distance: "50 km (1-1.5 hrs)", desc: "Birthplace of Lord Krishna. Visit Krishna Janmabhoomi Temple, Banke Bihari Temple, Prem Mandir (stunning marble temple), ISKCON Temple, and the colorful ghats of Vrindavan. Best during Holi (March) and Janmashtami (August).", cabFare: "₹1,500 extra or ₹3,000 dedicated trip", icon: Landmark },
    { name: "Bharatpur Bird Sanctuary (Keoladeo)", distance: "55 km (1.5 hrs)", desc: "UNESCO World Heritage Site. One of the world's finest bird habitats with 350+ species. Cycle or rickshaw through the park. October-February is best when migratory birds from Siberia and Central Asia arrive.", cabFare: "₹1,500 extra", icon: Bird },
    { name: "Chambal Safari", distance: "70 km (2 hrs)", desc: "National Chambal Sanctuary. Boat safari to see Gharials (critically endangered crocodilians), Gangetic dolphins, turtles, and 300+ bird species. A unique and offbeat experience. Best October-March.", cabFare: "₹2,000 extra", icon: Binoculars },
    { name: "Bateshwar Temples", distance: "70 km (1.5 hrs)", desc: "A complex of 200+ Hindu temples on the banks of the Yamuna. Dating back to the 7th-8th century, recently restored by ASI. Annual cattle fair in October/November. An uncrowded, authentic experience.", cabFare: "₹2,000 extra", icon: Map },
  ];

  const twoDayItinerary = {
    day1: [
      "5:30 AM - Sunrise at Taj Mahal (2 hours)",
      "8:00 AM - Breakfast at Deviram (Bedai-Jalebi)",
      "9:00 AM - Agra Fort (1.5 hours)",
      "11:00 AM - Baby Taj / Itimad-ud-Daulah (45 min)",
      "12:00 PM - Chini Ka Rauza (20 min, free entry)",
      "12:30 PM - Lunch at local restaurant",
      "2:00 PM - Rambagh garden walk (30 min)",
      "3:00 PM - Shopping at Sadar Bazaar / Kinari Bazaar",
      "5:00 PM - Mehtab Bagh sunset (1 hour)",
      "7:00 PM - Dinner at Mughlai restaurant",
    ],
    day2: [
      "7:00 AM - Drive to Fatehpur Sikri (45 min)",
      "8:00 AM - Explore Fatehpur Sikri (2.5 hours)",
      "10:30 AM - Return to Agra, visit Sikandra en route (1 hour)",
      "12:00 PM - Mariam's Tomb (30 min)",
      "12:30 PM - Lunch + Petha/Dalmoth shopping",
      "2:00 PM - Jama Masjid area exploration",
      "3:00 PM - Optional: Kalakriti Cultural Show (evening) or departure",
    ],
  };

  const trustFeatures = [
    { icon: MapPin, title: "Born in Agra", desc: "We grew up here" },
    { icon: Compass, title: "Hidden Gems", desc: "Off the tourist trail" },
    { icon: Landmark, title: "3 UNESCO Sites", desc: "In and around Agra" },
    { icon: Star, title: "4.9 Rating", desc: "Google reviews" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-teal-50/30">
        {/* Topographic / explorer map pattern */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q25 30 50 50 Q75 70 100 50' fill='none' stroke='%230d9488' stroke-width='0.5'/%3E%3Cpath d='M0 30 Q25 10 50 30 Q75 50 100 30' fill='none' stroke='%230d9488' stroke-width='0.3'/%3E%3Cpath d='M0 70 Q25 50 50 70 Q75 90 100 70' fill='none' stroke='%230d9488' stroke-width='0.3'/%3E%3C/svg%3E")` }} />

        {/* Hero - Explorer Discovery Design */}
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-950 via-slate-900 to-cyan-950" />
          {/* Discovery glow spots */}
          <div className="absolute top-1/3 left-1/6 w-72 h-72 bg-teal-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 right-1/6 w-48 h-48 bg-amber-500/10 rounded-full blur-[80px]" />
          {/* Compass lines */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/10 to-transparent" />
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-teal-500/10 to-transparent" />
          {/* Pin markers */}
          <div className="absolute top-[20%] left-[15%] w-3 h-3 bg-teal-400/40 rounded-full">
            <div className="absolute inset-0 bg-teal-400/20 rounded-full animate-ping" style={{ animationDuration: '3s' }} />
          </div>
          <div className="absolute top-[35%] right-[20%] w-2 h-2 bg-cyan-400/50 rounded-full" />
          <div className="absolute bottom-[30%] left-[30%] w-2.5 h-2.5 bg-amber-400/40 rounded-full" />
          <div className="absolute bottom-[25%] right-[35%] w-2 h-2 bg-teal-300/30 rounded-full" />

          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-md px-6 py-2 rounded-full mb-6 border border-teal-400/30">
              <Binoculars className="w-4 h-4 text-teal-300" />
              <span className="text-teal-200 font-semibold text-sm tracking-[0.15em] uppercase">Explorer&apos;s Guide 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight tracking-tight">
              Agra <span className="text-transparent bg-gradient-to-r from-teal-300 via-cyan-300 to-amber-300 bg-clip-text">Beyond</span> Taj Mahal
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-teal-400/60" />
              <Target className="w-5 h-5 text-teal-400" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-teal-400/60" />
            </div>
            <p className="text-lg md:text-xl text-teal-100/70 mb-10 max-w-3xl mx-auto leading-relaxed">
              Forts, tombs, ghost cities, bird sanctuaries, and hidden gems. Discover what makes Agra far more than just one monument.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-teal-500/20 hover:shadow-teal-500/40 hover:scale-105 transition-all">
                <Phone className="w-5 h-5" /> Call Now: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to explore Agra beyond the Taj Mahal" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-teal-400/30 hover:bg-white/20 transition-all">
                WhatsApp Us
              </Link>
            </div>
          </div>

          {/* Trust bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-teal-950/80 backdrop-blur-xl border-t border-teal-500/20">
            <div className="max-w-6xl mx-auto px-4 py-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {trustFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/90">
                    <div className="p-2 bg-teal-500/20 rounded-lg"><f.icon className="w-5 h-5 text-teal-300" /></div>
                    <div><div className="font-bold text-sm">{f.title}</div><div className="text-xs text-teal-200/60">{f.desc}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-stone-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-100 to-transparent" />
              <h2 className="text-3xl font-bold text-stone-800 mb-4 relative">More Than Just the Taj</h2>
              <p className="text-lg text-stone-600 leading-relaxed relative">
                Most visitors see only the Taj Mahal and leave. But Agra was the <strong>capital of the Mughal Empire</strong> for over 90 years. It is home to <strong>three UNESCO World Heritage Sites</strong>, dozens of Mughal-era monuments, a vibrant food culture, and is surrounded by incredible day-trip destinations. As Agra locals, we want to show you the city we love -- the one that goes far beyond that famous white marble dome.
              </p>
              {/* Stats bar */}
              <div className="flex flex-wrap gap-6 mt-8 pt-6 border-t border-stone-100">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center"><Landmark className="w-5 h-5 text-teal-700" /></div>
                  <div><div className="font-bold text-stone-800">3 UNESCO Sites</div><div className="text-xs text-stone-400">Within 40 km</div></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center"><Compass className="w-5 h-5 text-amber-700" /></div>
                  <div><div className="font-bold text-stone-800">15+ Monuments</div><div className="text-xs text-stone-400">To explore</div></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center"><Map className="w-5 h-5 text-cyan-700" /></div>
                  <div><div className="font-bold text-stone-800">4 Day Trips</div><div className="text-xs text-stone-400">Nature & temples</div></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Attractions - Stamp Collection Style */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-3 text-center">Must-Visit Attractions</h2>
            <p className="text-stone-500 text-center mb-12">Five landmarks that rival the Taj Mahal in history and beauty</p>
            <div className="space-y-6">
              {mainAttractions.map((a, idx) => (
                <div key={idx} className="bg-stone-50 rounded-2xl overflow-hidden border border-stone-200 hover:shadow-lg transition-all group">
                  <div className="flex flex-col md:flex-row">
                    {/* Discovery badge sidebar */}
                    <div className={`md:w-24 bg-gradient-to-b ${a.color} flex flex-col items-center justify-center py-4 md:py-0 gap-1`}>
                      <a.icon className="w-6 h-6 text-white" />
                      <span className="text-white/80 text-[10px] font-bold tracking-wider">SITE {idx + 1}</span>
                    </div>
                    <div className="flex-1 p-6">
                      <h3 className="text-xl font-bold text-stone-800 mb-2">{a.name}</h3>
                      <p className="text-stone-600 mb-4">{a.desc}</p>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="bg-white px-3 py-1.5 rounded-lg text-teal-700 font-medium border border-teal-200/60">Entry: {a.entry}</span>
                        <span className="bg-white px-3 py-1.5 rounded-lg text-blue-700 font-medium border border-blue-200/60"><MapPin className="w-3 h-3 inline mr-1" />{a.distance}</span>
                        <span className="bg-white px-3 py-1.5 rounded-lg text-amber-700 font-medium border border-amber-200/60"><Clock className="w-3 h-3 inline mr-1" />{a.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Hidden Gems - Explorer Discovery Cards */}
        <section className="py-16 px-4 bg-gradient-to-b from-teal-900 to-slate-900">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-3">Hidden Gems Most Tourists Miss</h2>
              <p className="text-teal-200/60">These spots are equally beautiful but far less crowded. Our drivers love showing these to curious travelers.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {hiddenGems.map((g, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all relative overflow-hidden group">
                  {/* Rarity badge */}
                  <div className="absolute top-4 right-4">
                    <span className="bg-teal-500/30 text-teal-200 text-[10px] font-bold px-2.5 py-1 rounded-full tracking-wider">{g.rarity}</span>
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2 pr-24">{g.name}</h3>
                  <p className="text-white/60 text-sm mb-3">{g.desc}</p>
                  <div className="flex items-center gap-1.5 text-teal-300 text-sm">
                    <MapPin className="w-3.5 h-3.5" /> {g.distance}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Day Trips - Adventure Route Cards */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-3 text-center">Day Trips from Agra</h2>
            <p className="text-stone-500 text-center mb-12">Extend your Agra experience with these incredible nearby destinations</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dayTrips.map((trip, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-lg transition-all">
                  {/* Route header with icon */}
                  <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-5 py-3 flex items-center justify-between">
                    <h3 className="font-bold text-white flex items-center gap-2">
                      <trip.icon className="w-5 h-5" /> {trip.name}
                    </h3>
                    <span className="text-teal-100 text-sm font-medium">{trip.distance}</span>
                  </div>
                  <div className="p-5">
                    <p className="text-stone-600 text-sm mb-4">{trip.desc}</p>
                    <div className="flex items-center justify-between bg-teal-50 rounded-lg px-4 py-2 border border-teal-100">
                      <span className="text-teal-800 text-sm font-medium">Cab fare</span>
                      <span className="text-teal-700 font-bold text-sm">{trip.cabFare}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2-Day Itinerary - Twin Adventure Route */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-3 text-center">Recommended 2-Day Agra Itinerary</h2>
            <p className="text-stone-500 text-center mb-12">The ultimate way to experience Agra -- cover everything without rushing</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Day 1 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl p-1">
                  <div className="bg-white rounded-xl p-6">
                    <h3 className="text-xl font-bold text-teal-700 mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                        <span className="text-teal-700 font-bold text-sm">01</span>
                      </div>
                      Day 1 - Agra City
                    </h3>
                    <div className="space-y-2">
                      {twoDayItinerary.day1.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-stone-600 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" /> {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              {/* Day 2 */}
              <div className="relative">
                <div className="bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl p-1">
                  <div className="bg-white rounded-xl p-6">
                    <h3 className="text-xl font-bold text-amber-700 mb-4 flex items-center gap-2">
                      <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                        <span className="text-amber-700 font-bold text-sm">02</span>
                      </div>
                      Day 2 - Extended Agra
                    </h3>
                    <div className="space-y-2">
                      {twoDayItinerary.day2.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-stone-600 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" /> {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-8 bg-teal-50 rounded-xl p-4 border border-teal-100">
              <p className="text-teal-800 font-medium">2-day local Agra cab: <strong>₹2,500-3,000</strong> (includes Fatehpur Sikri) | From Delhi: <strong>₹6,500 sedan</strong> (2-day round trip)</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-stone-200 hover:border-teal-300 transition-all">
                  <h3 className="text-lg font-bold text-stone-800 mb-2 flex items-start gap-3">
                    <div className="w-6 h-6 bg-teal-100 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Compass className="w-3 h-3 text-teal-600" />
                    </div>
                    {faq.question}
                  </h3>
                  <p className="text-stone-600 ml-9">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interlinks */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">More Agra Guides & Tours</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: "/agra-travel-guide", title: "Agra Travel Guide 2026", desc: "Complete city guide" },
                { href: "/agra-food-tour", title: "Agra Food Tour", desc: "Culinary exploration" },
                { href: "/agra-shopping-guide", title: "Agra Shopping Guide", desc: "Markets & handicrafts" },
                { href: "/same-day-agra-tour-from-delhi", title: "Same Day Agra Tour", desc: "Full day from Delhi" },
                { href: "/same-day-taj-mahal-tour", title: "Taj Mahal Tour", desc: "Focused Taj visit" },
                { href: "/sunrise-taj-mahal-tour-from-delhi", title: "Sunrise Taj Tour", desc: "Golden hour experience" },
                { href: "/moonlight-taj-mahal-tour", title: "Moonlight Taj Tour", desc: "Full moon night viewing" },
                { href: "/agra-day-trip-from-delhi", title: "Agra Day Trip Cost", desc: "Budget breakdown" },
                { href: "/taj-mahal-tour-from-delhi", title: "Taj Mahal from Delhi", desc: "Private car options" },
                { href: "/delhi-airport-to-agra-taxi", title: "Delhi Airport to Agra", desc: "Airport transfers" },
                { href: "/sightseeing/agra", title: "Agra Sightseeing Tours", desc: "All Agra attractions" },
                { href: "/agra", title: "Agra City Hub", desc: "Agra cab services" },
              ].map((link, idx) => (
                <Link key={idx} href={link.href} className="flex items-center gap-3 bg-stone-50 p-4 rounded-xl border border-stone-200 hover:border-teal-300 hover:shadow-md transition-all group">
                  <div className="p-2 bg-teal-50 rounded-lg group-hover:bg-teal-100 transition-colors"><ChevronRight className="w-4 h-4 text-teal-600" /></div>
                  <div><div className="font-bold text-stone-800 text-sm group-hover:text-teal-700 transition-colors">{link.title}</div><div className="text-xs text-stone-400">{link.desc}</div></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-800 via-cyan-700 to-teal-900" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q25 30 50 50 Q75 70 100 50' fill='none' stroke='%23fff' stroke-width='0.5'/%3E%3C/svg%3E")` }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <Binoculars className="w-12 h-12 text-teal-200 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Explore the Real Agra with Locals</h2>
            <p className="text-teal-200/80 mb-8 text-lg">We show you the Agra that guidebooks miss. Custom itineraries, hidden gems, and insider knowledge.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all">
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to explore Agra beyond the Taj Mahal" className="inline-flex items-center justify-center gap-2 bg-teal-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-teal-400/30 hover:bg-teal-900/60 transition-all">
                WhatsApp Booking <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
