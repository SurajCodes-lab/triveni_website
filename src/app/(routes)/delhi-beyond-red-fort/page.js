import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, Camera, Landmark, Compass, Calendar, Bird, Binoculars, Map, Target } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Delhi Beyond Red Fort | Hidden Gems & Secret Spots | 2026',
  description: 'Discover Delhi beyond Red Fort. Agrasen Ki Baoli, Hauz Khas, Mehrauli Archaeological Park, Tughlaqabad Fort, Lodhi Art District, Sunder Nursery + more. Call 7668570551.',
  keywords: 'delhi beyond red fort, delhi hidden gems, agrasen ki baoli, hauz khas complex, tughlaqabad fort, lodhi art district, mehrauli archaeological park, sunder nursery',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/delhi-beyond-red-fort' },
  openGraph: {
    title: 'Delhi Beyond Red Fort | Hidden Gems & Secret Spots 2026',
    description: 'Discover what Delhi has beyond Red Fort. Stepwells, ruins, street art, secret parks. Complete guide by locals.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/delhi-beyond-red-fort',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/delhi-hero.jpg', width: 1200, height: 630, alt: 'Delhi Beyond Red Fort' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delhi Beyond Red Fort | Hidden Gems',
    description: 'Stepwells, ruined forts, street art districts, and secret Mughal parks. By Delhi locals.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/delhi-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function DelhiBeyondRedFortPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Delhi Beyond Red Fort", "item": "https://www.trivenicabs.in/delhi-beyond-red-fort" },
    ],
  };

  const faqData = [
    { question: "What are the best hidden gems in Delhi beyond Red Fort?", answer: "Delhi has incredible hidden gems: Agrasen Ki Baoli (ancient stepwell in CP area), Hauz Khas Complex (medieval ruins + lake), Chor Bizarre (Daryaganj Sunday book market), Mehrauli Archaeological Park (20+ monuments), Tughlaqabad Fort (ruined citadel), Lodhi Art District (street art), Sunder Nursery, and Waste to Wonder Park." },
    { question: "What is Agrasen Ki Baoli?", answer: "Agrasen Ki Baoli is a stunning 14th-century stepwell hidden in the heart of Connaught Place. With 108 steps descending into the earth and three levels of arched niches, it is one of Delhi&apos;s most photogenic and atmospheric spots. Featured in the Bollywood film PK. Free entry, open sunrise to sunset." },
    { question: "Is Tughlaqabad Fort worth visiting?", answer: "Yes! Tughlaqabad Fort is a massive 14th-century fortified city built by Ghiyasuddin Tughlaq, now in dramatic ruins. Spread over 6.5 km of walls, it is one of Delhi&apos;s most impressive yet least-visited historical sites. The ruins are atmospheric and the views from the ramparts are excellent. Entry just 30." },
    { question: "What is the Lodhi Art District?", answer: "The Lodhi Art District (Lodhi Colony) is India&apos;s first open-air public art district. Over 50 buildings are covered in massive murals by Indian and international street artists. Free to walk around, it is best explored on foot. Each mural tells a story. Combine with nearby Lodhi Gardens for a full morning." },
    { question: "What is Mehrauli Archaeological Park?", answer: "Mehrauli Archaeological Park, adjacent to the Qutub Minar complex, contains over 70 heritage structures spanning 1,000 years -- from Lal Kot (Delhi&apos;s first city) to Mughal-era tombs. Most tourists visit Qutub Minar and miss this treasure. The Balban&apos;s Tomb and Jamali Kamali mosque are highlights." },
    { question: "What is Sunder Nursery?", answer: "Sunder Nursery is a beautifully restored 90-acre Mughal-era heritage park adjacent to Humayun&apos;s Tomb. It features six restored 16th-century monuments, a lake, native plant gardens, and walking trails. It is one of Delhi&apos;s most peaceful spaces and a world-class heritage restoration project." },
    { question: "What is Waste to Wonder Park?", answer: "Waste to Wonder Park in south Delhi features replicas of the Seven Wonders of the World, all built from industrial and scrap waste. The Eiffel Tower stands 60 feet tall, made entirely from scrap metal. Illuminated at night, it is a creative and fun spot. Entry around 50." },
    { question: "How many days do I need for Delhi beyond the main sights?", answer: "1 day covers Red Fort, Jama Masjid, Qutub Minar, Humayun&apos;s Tomb. 2 days lets you add the hidden gems: Agrasen Ki Baoli, Hauz Khas, Lodhi Art District, and Sunder Nursery. 3 days adds Tughlaqabad, Mehrauli Park, and food trails. Our 3-day plan covers all 8 hidden gems." },
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

  const hiddenGems = [
    { name: "Agrasen Ki Baoli", desc: "A stunning 14th-century stepwell hidden in the heart of Delhi&apos;s business district. With 108 steps descending into the earth and three levels of arched niches, it creates a dramatic geometric perspective. Featured in the Bollywood film PK, it is one of Delhi&apos;s most photogenic hidden spots.", distance: "7 km from Red Fort", timing: "Sunrise to sunset daily; free entry; best in morning light", whyVisit: "A 700-year-old stepwell hiding in plain sight among Delhi&apos;s office towers -- hauntingly beautiful", cabTip: "Near Connaught Place; our driver drops you at the gate on Hailey Road" },
    { name: "Hauz Khas Complex", desc: "A 13th-century madrasa and mosque complex overlooking a beautiful medieval lake, surrounded by a village of art galleries, cafes, and boutiques. The ruins of Firoz Shah Tughlaq&apos;s madrasa are atmospheric and the deer park beside the lake is a peaceful escape. Sunset from the ruins is spectacular.", distance: "15 km from Red Fort", timing: "Ruins: sunrise to sunset; village shops: 11 AM - 10 PM", whyVisit: "Medieval ruins overlooking a lake, surrounded by Delhi&apos;s coolest art village -- history meets hipster", cabTip: "Parking can be tricky; our driver knows the best spots near the complex entrance" },
    { name: "Chor Bizarre (Daryaganj Book Market)", desc: "Every Sunday, the streets of Daryaganj transform into one of the world&apos;s largest open-air book markets. Thousands of books -- from rare first editions to textbooks -- are spread on sheets along the road, sold at throwaway prices. It is chaotic, colorful, and a bibliophile&apos;s paradise.", distance: "2 km from Red Fort", timing: "Sundays only, 9 AM - 5 PM; come early for the best finds", whyVisit: "The world&apos;s largest open-air book market -- thousands of books for a few rupees each, every Sunday", cabTip: "Walking distance from Red Fort; visit after your Red Fort tour on a Sunday" },
    { name: "Mehrauli Archaeological Park", desc: "A sprawling park adjacent to Qutub Minar containing over 70 heritage structures spanning 1,000 years of Delhi history. From Lal Kot (the first city of Delhi) to Mughal-era tombs and Rajput walls, this is an open-air museum most tourists completely miss despite being next to the Qutub.", distance: "18 km from Red Fort", timing: "Sunrise to sunset; free entry; allow 2-3 hours", whyVisit: "Over 70 monuments spanning 1,000 years -- an open-air museum hiding next to the Qutub Minar", cabTip: "Combine with Qutub Minar visit; enter from the Mehrauli village side for the full experience" },
    { name: "Tughlaqabad Fort", desc: "A massive 14th-century fortified city spread over 6.5 km of crumbling walls, built by Sultan Ghiyasuddin Tughlaq. The dramatic ruins rise from rocky terrain and the rampart views stretch across south Delhi. Legend says a Sufi saint cursed the fort, and it was abandoned within five years of construction.", distance: "20 km from Red Fort", timing: "Sunrise to sunset; entry 30; allow 1.5-2 hours", whyVisit: "One of Delhi&apos;s most dramatic ruins -- a cursed 14th-century citadel with 6.5 km of walls", cabTip: "In south Delhi near Badarpur; combine with nearby Suraj Kund for a full day" },
    { name: "Lodhi Art District", desc: "India&apos;s first open-air public art district, where over 50 buildings in Lodhi Colony are covered in massive murals by Indian and international street artists. Themes range from social justice to nature to abstract art. Free to walk around, it transforms a residential neighborhood into a living gallery.", distance: "12 km from Red Fort", timing: "Open 24/7 (outdoor art); best in morning light for photography", whyVisit: "India&apos;s first street art district -- 50+ massive murals turning a colony into an open-air gallery", cabTip: "Walk through the colony; our driver waits at Lodhi Gardens while you explore on foot" },
    { name: "Sunder Nursery", desc: "A beautifully restored 90-acre Mughal-era heritage park adjacent to Humayun&apos;s Tomb. Six 16th-century monuments have been meticulously restored, native plant gardens recreate Mughal landscaping, and a central lake attracts migratory birds. Voted one of the world&apos;s greatest places by TIME magazine.", distance: "10 km from Red Fort", timing: "7 AM - 5 PM (winter) / 7 AM - 6 PM (summer); entry 30", whyVisit: "A TIME-listed heritage park with restored Mughal monuments, gardens, and birdlife -- Delhi&apos;s best green space", cabTip: "Adjacent to Humayun&apos;s Tomb; visit both for a complete Mughal heritage morning" },
    { name: "Waste to Wonder Park", desc: "A creative park in south Delhi featuring replicas of all Seven Wonders of the World, built entirely from industrial and scrap waste. The 60-foot Eiffel Tower, Taj Mahal, Colosseum, and other wonders are impressively detailed. Illuminated at night for a magical experience. Great for families.", distance: "13 km from Red Fort", timing: "11 AM - 11 PM (Tuesday to Sunday); closed Mondays; entry 50", whyVisit: "The Seven Wonders of the World built from scrap waste -- creative, fun, and spectacular at night", cabTip: "Near Sarai Kale Khan; visit in the evening for the illuminated experience" },
  ];

  const suggestedItineraries = [
    {
      title: "Day 1 - Hidden Old Delhi & Stepwells",
      duration: "Full Day",
      stops: [
        "8:00 AM - Agrasen Ki Baoli (morning light photography)",
        "9:30 AM - Walk around Connaught Place + breakfast",
        "11:00 AM - Chor Bizarre / Daryaganj (if Sunday) or Chandni Chowk food walk",
        "1:00 PM - Lunch at Karim&apos;s near Jama Masjid",
        "2:30 PM - Lodhi Art District walking tour (1.5 hours)",
        "4:30 PM - Lodhi Gardens stroll",
        "6:00 PM - Hauz Khas Complex (sunset from the ruins)",
        "8:00 PM - Dinner at a Hauz Khas Village restaurant",
      ],
    },
    {
      title: "Day 2 - Mughal Heritage & Parks",
      duration: "Full Day",
      stops: [
        "7:00 AM - Sunder Nursery morning walk (restored monuments + birds)",
        "9:00 AM - Humayun&apos;s Tomb (combine with Sunder Nursery)",
        "11:00 AM - Nizamuddin Dargah + Nizamuddin Basti walk",
        "1:00 PM - Lunch in Nizamuddin area",
        "2:30 PM - Mehrauli Archaeological Park (2-3 hours)",
        "5:00 PM - Qutub Minar (if not visited before)",
        "7:00 PM - Waste to Wonder Park (evening illumination)",
      ],
    },
    {
      title: "Day 3 - Ruined Citadels & Markets",
      duration: "Full Day",
      stops: [
        "8:00 AM - Tughlaqabad Fort (dramatic morning light on ruins)",
        "10:30 AM - Drive to Suraj Kund (30 min) for lake + temple",
        "12:30 PM - Return to south Delhi for lunch",
        "2:00 PM - National Rail Museum (quirky hidden gem)",
        "4:00 PM - Dilli Haat (handicrafts market + street food)",
        "6:00 PM - India Gate area evening walk",
        "7:30 PM - Farewell dinner at a Delhi restaurant",
      ],
    },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Delhi Experts", desc: "We know every shortcut" },
    { icon: Compass, title: "8 Hidden Gems", desc: "Beyond the tourist trail" },
    { icon: Landmark, title: "1,000 Years", desc: "Of hidden history" },
    { icon: Star, title: "4.9 Rating", desc: "Google reviews" },
  ];

  const internalLinks = [
    { href: "/sightseeing/delhi", title: "Delhi Sightseeing Tours", desc: "All Delhi attractions" },
    { href: "/delhi", title: "Delhi City Hub", desc: "Delhi cab services" },
    { href: "/places-to-visit-near-delhi", title: "Places Near Delhi", desc: "Nearby destinations" },
    { href: "/weekend-getaways-from-delhi-by-car", title: "Weekend Getaways", desc: "From Delhi by car" },
    { href: "/same-day-agra-tour-from-delhi", title: "Same Day Agra Tour", desc: "Taj Mahal from Delhi" },
    { href: "/same-day-jaipur-tour-from-delhi", title: "Same Day Jaipur Tour", desc: "Pink city from Delhi" },
    { href: "/agra-beyond-taj-mahal", title: "Agra Beyond Taj Mahal", desc: "Agra hidden gems" },
    { href: "/jaipur-beyond-hawa-mahal", title: "Jaipur Beyond Hawa Mahal", desc: "Jaipur hidden gems" },
    { href: "/golden-triangle-english-speaking-driver", title: "Golden Triangle Tour", desc: "Delhi-Agra-Jaipur" },
    { href: "/local-taxi", title: "Local Taxi", desc: "City rides" },
    { href: "/delhi-airport-to-agra-taxi", title: "Delhi Airport to Agra", desc: "Airport transfer" },
    { href: "/10-day-north-india-road-trip", title: "North India Road Trip", desc: "10-day grand tour" },
  ];

  const cityName = "Delhi";
  const landmark = "Red Fort";
  const heroSubtitle = "Ancient stepwells, medieval ruins, street art districts, cursed citadels, and secret Mughal parks. Discover the seven cities of Delhi that hide behind the famous monuments.";
  const whatsappText = "I want to explore beyond Red Fort in Delhi";
  const introTitle = "Seven Cities, One Capital, Endless Secrets";
  const introText = <>Delhi has been built, destroyed, and rebuilt <strong>seven times over 1,000 years</strong>. Most tourists see one layer: the Mughal-era Red Fort, Jama Masjid, and Qutub Minar. But the city&apos;s other six incarnations hide extraordinary treasures in plain sight. A <strong>14th-century stepwell</strong> descends into the earth behind Connaught Place offices. Medieval ruins and a deer park surround a hip cafe village at Hauz Khas. A <strong>cursed citadel</strong> with 6.5 km of crumbling walls sits largely forgotten in south Delhi. India&apos;s first open-air <strong>street art district</strong> transforms a residential colony into a living gallery. And adjacent to Humayun&apos;s Tomb, a restored Mughal park was named one of the world&apos;s greatest places by TIME. Every Sunday, the world&apos;s largest book bazaar erupts on the streets near Red Fort. And scattered through Mehrauli, over 70 monuments spanning a millennium wait in peaceful obscurity. As Delhi transport experts, we navigate this layered city daily. Let us show you the Delhi that the tourism brochures never reveal.</>;
  const introStats = [
    { icon: Landmark, label: "8 Hidden Gems", sub: "Beyond the guidebook", bg: "bg-gradient-to-br from-teal-50 to-cyan-50", iconColor: "text-teal-600" },
    { icon: Compass, label: "7 Historic Cities", sub: "1,000 years of layers", bg: "bg-gradient-to-br from-amber-50 to-orange-50", iconColor: "text-amber-600" },
    { icon: Map, label: "3-Day Itinerary", sub: "Complete explorer plan", bg: "bg-gradient-to-br from-cyan-50 to-blue-50", iconColor: "text-cyan-600" },
  ];
  const gemsSubtitle = "Eight extraordinary places in Delhi that go far beyond Red Fort and India Gate";
  const itineraryTitle = "Suggested 3-Day Delhi Explorer Itinerary";
  const itinerarySubtitle = "Go beyond Red Fort -- discover 1,000 years of hidden Delhi history over three fascinating days";
  const priceText = <>3-day Delhi local cab: <strong>&#8377;3,000-4,500</strong> | Full day Delhi sightseeing: <strong>&#8377;1,800 sedan</strong></>;
  const linksTitle = "More Delhi Guides & Tours";
  const ctaTitle = "Explore the Real Delhi with Locals";
  const ctaSubtitle = "We show you the Delhi that guidebooks miss. Stepwells, street art, cursed forts, and secret Mughal parks.";

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(3deg); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes pulse-discover { 0%, 100% { box-shadow: 0 0 20px rgba(20,184,166,0.3); } 50% { box-shadow: 0 0 50px rgba(20,184,166,0.6); } }
        @keyframes gradient-shift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes radar-ping { 0% { transform: scale(0.8); opacity: 0.8; } 100% { transform: scale(3); opacity: 0; } }
        @keyframes compass-rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .glass-card { background: rgba(255,255,255,0.05); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1); }
        .glass-card-light { background: rgba(255,255,255,0.85); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.3); box-shadow: 0 8px 32px rgba(0,0,0,0.06); }
        .shimmer-teal { background: linear-gradient(90deg, #14b8a6, #67e8f9, #14b8a6); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer 3s linear infinite; }
        .hover-lift { transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
        .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 25px 50px -12px rgba(20,184,166,0.25); }
        .card-glow:hover { box-shadow: 0 0 30px rgba(20,184,166,0.15), 0 25px 50px -12px rgba(0,0,0,0.1); }
        .radar-dot::after { content: ''; position: absolute; inset: 0; border-radius: 50%; background: rgba(20,184,166,0.4); animation: radar-ping 2s ease-out infinite; }
      ` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-teal-50/30">
        {/* Topographic pattern */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q25 30 50 50 Q75 70 100 50' fill='none' stroke='%230d9488' stroke-width='0.5'/%3E%3Cpath d='M0 30 Q25 10 50 30 Q75 50 100 30' fill='none' stroke='%230d9488' stroke-width='0.3'/%3E%3Cpath d='M0 70 Q25 50 50 70 Q75 90 100 70' fill='none' stroke='%230d9488' stroke-width='0.3'/%3E%3C/svg%3E")` }} />

        {/* HERO */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-950 via-slate-900 to-cyan-950" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 15s ease infinite' }} />
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30h60M30 0v60' stroke='%2314b8a6' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")` }} />
          {/* Glow orbs */}
          <div className="absolute top-1/3 left-1/6 w-80 h-80 bg-teal-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-1/6 w-56 h-56 bg-amber-500/10 rounded-full blur-[100px]" />
          {/* Compass lines */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/10 to-transparent" />
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-teal-500/10 to-transparent" />
          {/* Radar dots */}
          <div className="absolute top-[20%] left-[15%] w-3 h-3 bg-teal-400 rounded-full relative radar-dot" style={{ animation: 'float 6s ease-in-out infinite' }} />
          <div className="absolute top-[60%] right-[12%] w-2.5 h-2.5 bg-cyan-400 rounded-full relative radar-dot" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '1s' }} />
          <div className="absolute top-[35%] right-[25%] w-2 h-2 bg-amber-400/60 rounded-full" style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '2s' }} />
          <div className="absolute bottom-[35%] left-[25%] w-2.5 h-2.5 bg-teal-300/40 rounded-full" style={{ animation: 'float 9s ease-in-out infinite', animationDelay: '0.5s' }} />
          <div className="absolute top-[45%] left-[40%] w-2 h-2 bg-cyan-300/30 rounded-full" />
          {/* Compass rose */}
          <div className="absolute top-12 right-12 w-16 h-16 opacity-10 hidden md:block">
            <div className="w-full h-full border-2 border-teal-400 rounded-full" style={{ animation: 'compass-rotate 30s linear infinite' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-teal-400 rotate-45" />
            </div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-md px-6 py-2.5 rounded-full mb-8 border border-teal-400/30" style={{ animation: 'pulse-discover 3s ease-in-out infinite' }}>
              <Binoculars className="w-4 h-4 text-teal-300" />
              <span className="text-teal-200 font-semibold text-sm tracking-[0.2em] uppercase">Explorer&apos;s Guide 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
              {cityName} <span className="shimmer-teal">Beyond</span> {landmark}
            </h1>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-teal-400/60" />
              <Target className="w-5 h-5 text-teal-400" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-teal-400/60" />
            </div>
            <p className="text-lg md:text-xl text-teal-100/70 mb-12 max-w-3xl mx-auto leading-relaxed">{heroSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-teal-500/25 hover:shadow-teal-500/50 hover:scale-110 hover:-translate-y-1 transition-all duration-500">
                <Phone className="w-5 h-5" /> Call Now: 7668570551
              </Link>
              <Link href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappText)}`} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-teal-400/30 hover:bg-white/20 hover:scale-105 transition-all duration-500">
                WhatsApp Us
              </Link>
            </div>
          </div>

          {/* Trust bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-teal-950/60 backdrop-blur-2xl border-t border-teal-500/20">
            <div className="max-w-6xl mx-auto px-4 py-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {trustFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/90">
                    <div className="p-2.5 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl border border-teal-400/20">
                      <f.icon className="w-5 h-5 text-teal-300" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">{f.title}</div>
                      <div className="text-xs text-teal-200/60">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card-light rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-teal-100/80 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-100/60 to-transparent rounded-tr-full" />
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6 relative">{introTitle}</h2>
              <p className="text-lg text-stone-600 leading-relaxed relative">{introText}</p>
              <div className="flex flex-wrap gap-4 mt-10 pt-8 border-t border-stone-200/50">
                {introStats.map((s, i) => (
                  <div key={i} className={`${s.bg} rounded-xl p-4 border border-teal-200/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center gap-3`}>
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <s.icon className={`w-5 h-5 ${s.iconColor}`} />
                    </div>
                    <div>
                      <div className="font-bold text-stone-800 text-sm">{s.label}</div>
                      <div className="text-xs text-stone-500">{s.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HIDDEN GEMS */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-teal-950 via-slate-900 to-cyan-950" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 20s ease infinite' }} />
          <div className="absolute top-20 left-10 w-64 h-64 bg-teal-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px]" />
          <div className="relative max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hidden Gems Most Tourists Miss</h2>
              <p className="text-teal-200/60 text-lg">{gemsSubtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hiddenGems.map((g, idx) => (
                <div key={idx} className="glass-card rounded-3xl p-7 hover:bg-white/10 hover:border-teal-500/30 transition-all duration-500 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/5 group-hover:to-cyan-500/5 transition-all duration-500" />
                  <div className="absolute top-4 right-4" style={{ animation: 'pulse-discover 3s ease-in-out infinite', animationDelay: `${idx * 0.3}s` }}>
                    <span className="bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 text-teal-200 text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wider">GEM {idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors duration-300 mb-3 pr-20 relative">{g.name}</h3>
                  <p className="text-white/60 text-sm mb-4 leading-relaxed relative">{g.desc}</p>
                  <div className="space-y-2.5 text-sm relative">
                    <div className="flex items-center gap-2 text-teal-300">
                      <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg p-1.5"><MapPin className="w-3.5 h-3.5" /></div>
                      <span>{g.distance}</span>
                    </div>
                    <div className="flex items-center gap-2 text-cyan-300">
                      <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg p-1.5"><Clock className="w-3.5 h-3.5" /></div>
                      <span>{g.timing}</span>
                    </div>
                    <div className="flex items-start gap-2 text-amber-300">
                      <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg p-1.5 mt-0.5"><Star className="w-3.5 h-3.5" /></div>
                      <span>{g.whyVisit}</span>
                    </div>
                    <div className="flex items-start gap-2 text-teal-200/50">
                      <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-lg p-1.5 mt-0.5"><Compass className="w-3.5 h-3.5" /></div>
                      <span>{g.cabTip}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ITINERARIES */}
        <section className="py-20 px-4 bg-white/80">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3 text-center">{itineraryTitle}</h2>
            <p className="text-stone-500 text-center mb-14 text-lg">{itinerarySubtitle}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {suggestedItineraries.map((day, idx) => (
                <div key={idx} className="hover-lift card-glow rounded-3xl overflow-hidden">
                  <div className={`bg-gradient-to-br ${idx === 0 ? 'from-teal-600 to-cyan-600' : idx === 1 ? 'from-amber-500 to-orange-500' : 'from-violet-600 to-purple-600'} rounded-3xl p-1`}>
                    <div className="bg-white rounded-[20px] p-6">
                      <h3 className={`text-lg font-bold ${idx === 0 ? 'text-teal-700' : idx === 1 ? 'text-amber-700' : 'text-violet-700'} mb-5 flex items-center gap-3`}>
                        <div className={`w-10 h-10 bg-gradient-to-br ${idx === 0 ? 'from-teal-100 to-cyan-100' : idx === 1 ? 'from-amber-100 to-orange-100' : 'from-violet-100 to-purple-100'} rounded-xl flex items-center justify-center`}>
                          <span className={`${idx === 0 ? 'text-teal-700' : idx === 1 ? 'text-amber-700' : 'text-violet-700'} font-bold text-sm`}>0{idx + 1}</span>
                        </div>
                        {day.title}
                      </h3>
                      <div className="space-y-0.5">
                        {day.stops.map((stop, i) => (
                          <div key={i} className="flex items-start gap-2 text-stone-600 text-sm py-2 border-b border-stone-100/50 last:border-0 hover:bg-stone-50/50 hover:pl-2 transition-all duration-300 rounded">
                            <CheckCircle2 className={`w-4 h-4 ${idx === 0 ? 'text-teal-500' : idx === 1 ? 'text-amber-500' : 'text-violet-500'} mt-0.5 flex-shrink-0`} /> {stop}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10 glass-card-light rounded-2xl p-5 border border-teal-200/30">
              <p className="text-teal-800 font-medium">{priceText}</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, idx) => (
                <div key={idx} className="glass-card-light rounded-2xl p-6 hover:border-teal-300/50 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-500">
                  <h3 className="text-lg font-bold text-stone-800 mb-3 flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg p-1.5 shadow-lg shadow-teal-500/20 flex-shrink-0 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">{idx + 1}</span>
                    </div>
                    {faq.question}
                  </h3>
                  <p className="text-stone-600 ml-11 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="py-20 px-4 bg-white/80">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-stone-800 mb-10 text-center">{linksTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {internalLinks.map((link, idx) => (
                <Link key={idx} href={link.href} className="glass-card-light rounded-xl p-4 hover:border-teal-400/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 group flex items-center gap-3">
                  <div className="p-2.5 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-xl group-hover:from-teal-500/20 group-hover:to-cyan-500/20 transition-all duration-300">
                    <ChevronRight className="w-4 h-4 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-800 text-sm group-hover:text-teal-700 transition-colors duration-300">{link.title}</div>
                    <div className="text-xs text-stone-400">{link.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-800 via-cyan-700 to-teal-900" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 15s ease infinite' }} />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q25 30 50 50 Q75 70 100 50' fill='none' stroke='%23fff' stroke-width='0.5'/%3E%3C/svg%3E")` }} />
          {/* Floating radar dots */}
          <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-teal-300/40 rounded-full" style={{ animation: 'float 6s ease-in-out infinite' }} />
          <div className="absolute bottom-[30%] right-[15%] w-3 h-3 bg-cyan-300/30 rounded-full" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '1s' }} />
          <div className="absolute top-[50%] right-[40%] w-2 h-2 bg-teal-200/20 rounded-full" style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '2s' }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <div style={{ animation: 'float 6s ease-in-out infinite' }}>
              <Binoculars className="w-14 h-14 text-teal-200 mx-auto mb-6" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{ctaTitle}</h2>
            <p className="text-teal-200/80 mb-10 text-lg max-w-2xl mx-auto">{ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500">
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappText)}`} className="inline-flex items-center justify-center gap-2 bg-teal-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-teal-400/30 hover:bg-teal-900/60 hover:scale-105 transition-all duration-500">
                WhatsApp Booking <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
