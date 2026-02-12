import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, Camera, Landmark, Compass, Calendar, Bird, Binoculars, Map, Target } from '@/components/ui/icons';

export const metadata = {
  title: 'Manali Beyond Solang Valley | Hidden Gems & Secret Spots | 2026',
  description: 'Discover Manali beyond Solang Valley. Jogini Falls, Naggar Castle, Great Himalayan National Park, Hampta Pass, Sethan Village, Vashisht + more. Call 7668570551.',
  keywords: 'manali beyond solang valley, manali hidden gems, jogini falls, naggar castle, great himalayan national park, hampta pass, sethan village, vashisht, malana',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/manali-beyond-solang-valley' },
  openGraph: {
    title: 'Manali Beyond Solang Valley | Hidden Gems & Secret Spots 2026',
    description: 'Discover what Manali has beyond Solang Valley. Waterfalls, castles, national parks, treks. Complete guide by locals.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/manali-beyond-solang-valley',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/manali-hero.jpg', width: 1200, height: 630, alt: 'Manali Beyond Solang Valley' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manali Beyond Solang Valley | Hidden Gems',
    description: 'Waterfalls, castles, national parks, hot springs, and secret villages. By Manali locals.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/manali-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function ManaliBeyondSolangValleyPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Manali Beyond Solang Valley", "item": "https://www.trivenicabs.in/manali-beyond-solang-valley" },
    ],
  };

  const faqData = [
    { question: "What can I see in Manali beyond Solang Valley?", answer: "Manali has incredible hidden gems: Jogini Falls (secret waterfall trek), Naggar Castle (art gallery + views), Great Himalayan National Park (UNESCO site, 40 km), Hampta Pass trailhead, Sethan Village (Buddhist hamlet), Vashisht hot springs, Jana Falls, and the unique Malana village." },
    { question: "Is the Jogini Falls trek difficult?", answer: "No, Jogini Falls is an easy 3 km trek from Vashisht village, taking about 45 minutes one way. The trail passes through forests and small waterfalls before reaching the main 150-foot cascade. It is family-friendly and does not require any special equipment. Our cab drops you at Vashisht and waits." },
    { question: "What is Naggar Castle?", answer: "Naggar Castle is a 500-year-old stone and timber castle, once the capital of the Kullu kingdom. Now a heritage hotel and art gallery, it houses the Nicholas Roerich Art Gallery nearby. The views of the Beas Valley from the castle are spectacular. It is 21 km from Manali on the left bank road." },
    { question: "Can I visit the Great Himalayan National Park from Manali?", answer: "Yes! GHNP is a UNESCO World Heritage Site about 40 km from Manali (entrance at Gushaini). It is one of the most biodiverse areas in the Western Himalayas with snow leopards, Himalayan brown bears, and 375+ bird species. Short nature walks to multi-day treks are available." },
    { question: "What is Sethan Village?", answer: "Sethan is a tiny Buddhist hamlet at 2,700 meters, just 12 km from Manali but a world apart. In winter, it offers igloo stays and snow activities. In summer, it is a peaceful meadow with panoramic mountain views. The road is adventurous but our drivers handle it expertly." },
    { question: "Are the Vashisht hot springs worth visiting?", answer: "Absolutely! Vashisht is a charming village 3 km from Manali with natural hot sulfur springs inside an ancient stone temple. The hot water baths are free and believed to have healing properties. The village also has cafes, bakeries, and the Jogini Falls trailhead. A must-visit." },
    { question: "What is special about Malana village?", answer: "Malana is an ancient village at 2,652 meters with a unique self-governing system and its own language (Kanashi). The villagers claim descent from Alexander the Great&apos;s soldiers. While you cannot touch the locals or their property (strict customs), the trek to the village and its unique culture are fascinating." },
    { question: "How many days do I need for Manali beyond the main sights?", answer: "2 days covers Manali&apos;s main sights + hidden gems. Add a day for GHNP or Naggar. Our 3-day itinerary covers waterfalls, hot springs, castles, mountain villages, and a national park -- the complete Manali experience that most tourists never see." },
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
    { name: "Jogini Falls", desc: "A stunning 150-foot waterfall hidden in the forest above Vashisht village, reached by a beautiful 3 km trek through pine forests and past smaller cascades. The trail is easy and family-friendly, yet most Manali tourists never discover it. The mist from the falls creates rainbows on sunny mornings.", distance: "3 km trek from Vashisht (6 km from Manali)", timing: "Best 8 AM - 3 PM; avoid after heavy rains", whyVisit: "A secret 150-foot waterfall reached by a beautiful forest trek -- Manali&apos;s best-kept natural wonder", cabTip: "Our driver drops you at Vashisht and waits; combine with hot springs visit after the trek" },
    { name: "Naggar Castle", desc: "A magnificent 500-year-old stone and timber castle that was the capital of the Kullu kingdom for 1,400 years. Now a heritage hotel and cultural center, it houses art exhibitions and offers sweeping views of the Beas Valley. The nearby Nicholas Roerich Art Gallery displays the Russian painter&apos;s Himalayan masterpieces.", distance: "21 km from Manali", timing: "Castle: 8 AM - 8 PM; Roerich Gallery: 10 AM - 5 PM (closed Mondays)", whyVisit: "A 500-year-old castle with Himalayan views + a world-class art gallery by a Russian master", cabTip: "Take the scenic left bank road from Manali; our drivers prefer this less-crowded route" },
    { name: "Great Himalayan National Park", desc: "A UNESCO World Heritage Site protecting one of the most biodiverse areas in the Western Himalayas. Home to snow leopards, Himalayan brown bears, musk deer, and 375+ bird species. Trails range from easy nature walks at the entrance to multi-day treks deep into pristine alpine meadows.", distance: "40 km from Manali (Gushaini entrance)", timing: "April to November; entry permits required", whyVisit: "A UNESCO wilderness with snow leopards and pristine Himalayan forests -- India&apos;s wildest national park", cabTip: "Full day trip; our driver takes you to Gushaini entrance and waits or picks up later" },
    { name: "Hampta Pass Trailhead", desc: "The gateway to one of India&apos;s most dramatic treks, where you cross from the lush green Kullu Valley to the stark, barren Lahaul moonscape in just two days. Even without doing the full trek, the trail to Jobra (the first campsite) is a beautiful day walk through meadows and forests.", distance: "12 km from Manali (Jobra trailhead)", timing: "June to October for the full trek; day walk year-round", whyVisit: "Walk the first stretch of India&apos;s most dramatic landscape transformation trek", cabTip: "Drive to Sethan or Jobra and do a 3-4 hour day walk; our driver waits at the trailhead" },
    { name: "Sethan Village", desc: "A tiny Buddhist hamlet perched at 2,700 meters with just a few dozen homes, offering panoramic views of the Dhauladhar and Pir Panjal ranges. In winter, it transforms into a snowy wonderland with igloo stays. In summer, the meadows are carpeted with wildflowers.", distance: "12 km from Manali", timing: "Accessible year-round; igloo stays December-February", whyVisit: "A secret Buddhist hamlet at 2,700 meters with igloo stays in winter and wildflower meadows in summer", cabTip: "The last 3 km are on a rough road; our SUV drivers handle it expertly" },
    { name: "Vashisht Hot Springs", desc: "An ancient stone temple complex in the charming village of Vashisht, housing natural hot sulfur springs in separate bathing areas for men and women. The hot water, believed to have healing properties, flows from the mountainside into stone pools. The village itself is full of cafes and bakeries.", distance: "3 km from Manali", timing: "Hot springs open early morning to 10 PM; best visited early", whyVisit: "Soak in ancient hot springs inside a stone temple -- a centuries-old healing tradition in the Himalayas", cabTip: "Just 5 minutes from Manali; combine with Jogini Falls trek starting from the same village" },
    { name: "Jana Falls", desc: "A powerful waterfall cascading down a rocky cliff face, located on the road between Manali and Naggar. Less famous than Jogini, Jana Falls is easily accessible from the road and equally beautiful. The spray creates a cool mist that is refreshing on hot summer days.", distance: "18 km from Manali", timing: "Best after monsoon (August-October) for maximum water flow", whyVisit: "A powerful roadside waterfall that most tourists drive past without noticing", cabTip: "On the Naggar road; stop here on your way to Naggar Castle for a natural break" },
    { name: "Malana Village", desc: "An ancient, isolated village at 2,652 meters with its own unique language (Kanashi), democratic system (possibly the world&apos;s oldest), and strict cultural rules. Villagers believe they descend from Alexander the Great&apos;s soldiers. Visitors must not touch any local person, building, or temple.", distance: "21 km from Manali + 4 km trek", timing: "April to November (snow blocks access in winter)", whyVisit: "One of India&apos;s most culturally unique villages -- ancient customs, a mysterious language, and isolation", cabTip: "Drive to Malana gate (21 km), then 4 km trek; our drivers know the road well" },
  ];

  const suggestedItineraries = [
    {
      title: "Day 1 - Waterfalls & Hot Springs",
      duration: "Full Day",
      stops: [
        "7:00 AM - Early morning Vashisht hot springs soak",
        "8:30 AM - Breakfast at a Vashisht cafe",
        "9:00 AM - Jogini Falls trek (3 km, 45 min up)",
        "11:30 AM - Return from falls, relax in Vashisht",
        "12:30 PM - Lunch in Old Manali",
        "2:00 PM - Sethan Village drive (panoramic views)",
        "4:00 PM - Hampta Pass trailhead short walk",
        "6:00 PM - Return to Manali for evening stroll",
      ],
    },
    {
      title: "Day 2 - Castles & Art",
      duration: "Full Day Trip",
      stops: [
        "8:00 AM - Drive to Naggar via left bank road (1 hour)",
        "9:00 AM - Naggar Castle exploration (1.5 hours)",
        "10:30 AM - Nicholas Roerich Art Gallery (1 hour)",
        "11:30 AM - Jana Falls photo stop (on return route)",
        "12:30 PM - Lunch at a riverside restaurant",
        "2:00 PM - Kullu town: Raghunath Temple + shawl factories",
        "4:30 PM - Return to Manali",
        "6:00 PM - Old Manali cafe hopping and sunset views",
      ],
    },
    {
      title: "Day 3 - UNESCO Wilderness",
      duration: "Full Day Trip",
      stops: [
        "7:00 AM - Drive to GHNP Gushaini entrance (1.5 hours)",
        "8:30 AM - Nature walk in Great Himalayan National Park (3-4 hours)",
        "12:30 PM - Packed lunch by the Tirthan River",
        "1:30 PM - Tirthan Valley exploration",
        "3:00 PM - Return drive to Manali",
        "5:00 PM - Hadimba Temple evening visit",
        "6:30 PM - Farewell dinner at a Manali restaurant",
      ],
    },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Himachal Experts", desc: "We know every mountain road" },
    { icon: Compass, title: "8 Hidden Gems", desc: "Beyond the tourist spots" },
    { icon: Landmark, title: "UNESCO Park", desc: "National park access" },
    { icon: Star, title: "4.9 Rating", desc: "Google reviews" },
  ];

  const internalLinks = [
    { href: "/sightseeing/manali", title: "Manali Sightseeing Tours", desc: "All Manali attractions" },
    { href: "/manali", title: "Manali City Hub", desc: "Manali cab services" },
    { href: "/manali-trip-cost-from-delhi", title: "Manali Trip Cost", desc: "Budget breakdown" },
    { href: "/delhi-airport-to-manali-taxi", title: "Delhi to Manali Taxi", desc: "Airport transfers" },
    { href: "/shimla-vs-manali", title: "Shimla vs Manali", desc: "Which to visit?" },
    { href: "/gulmarg-vs-manali", title: "Gulmarg vs Manali", desc: "Snow destinations" },
    { href: "/rishikesh-vs-manali", title: "Rishikesh vs Manali", desc: "Adventure destinations" },
    { href: "/friends-trip-manali", title: "Friends Trip Manali", desc: "Group adventure" },
    { href: "/honeymoon-manali-by-car", title: "Manali Honeymoon", desc: "Romantic mountain trip" },
    { href: "/7-day-himachal-tour-by-car", title: "Himachal Tour by Car", desc: "7-day circuit" },
    { href: "/shimla-beyond-mall-road", title: "Shimla Beyond Mall Road", desc: "Shimla hidden gems" },
    { href: "/spiti-valley-road-trip-from-delhi", title: "Spiti Valley Road Trip", desc: "Beyond Manali" },
  ];

  const cityName = "Manali";
  const landmark = "Solang Valley";
  const heroSubtitle = "Secret waterfalls, ancient castles, UNESCO wilderness, hot springs in stone temples, and isolated mountain villages. Discover the Manali that adventure seekers dream about.";
  const whatsappText = "I want to explore beyond Solang Valley in Manali";
  const introTitle = "The Valley Has Secrets the Snow Hides";
  const introText = <>Manali attracts millions to Solang Valley for snow activities and Rohtang Pass for selfies. But the Kullu Valley hides treasures that would make any explorer&apos;s heart race. A <strong>secret 150-foot waterfall</strong> lies just 3 km from an ancient hot springs temple, reached by an easy forest trek most tourists never attempt. A 500-year-old castle on the opposite bank of the Beas houses a world-class art gallery by a Russian master painter. Deep in the mountains, a <strong>UNESCO World Heritage national park</strong> protects snow leopards and pristine alpine meadows. At 2,700 meters, a tiny Buddhist hamlet offers igloo stays in winter and wildflower meadows in summer. And in the remote Malana Valley, a village with its own language and the world&apos;s oldest democracy has fascinated anthropologists for centuries. As Himachal transport specialists who have navigated these mountain roads through every season, we know the paths to these hidden treasures. Let us take you beyond the crowded Solang Valley into the real heart of the Kullu mountains.</>;
  const introStats = [
    { icon: Landmark, label: "8 Hidden Gems", sub: "Beyond Solang Valley", bg: "bg-gradient-to-br from-teal-50 to-cyan-50", iconColor: "text-teal-600" },
    { icon: Compass, label: "UNESCO Wilderness", sub: "National park access", bg: "bg-gradient-to-br from-amber-50 to-orange-50", iconColor: "text-amber-600" },
    { icon: Map, label: "3-Day Itinerary", sub: "Complete adventure plan", bg: "bg-gradient-to-br from-cyan-50 to-blue-50", iconColor: "text-cyan-600" },
  ];
  const gemsSubtitle = "Eight extraordinary places around Manali that go far beyond the crowded Solang Valley";
  const itineraryTitle = "Suggested 3-Day Manali Explorer Itinerary";
  const itinerarySubtitle = "Go beyond Solang Valley -- discover the real Manali over three unforgettable days";
  const priceText = <>3-day Manali explorer cab: <strong>&#8377;4,500-6,000</strong> (includes day trips) | From Delhi: <strong>&#8377;12,000 sedan</strong> (3-day round trip)</>;
  const linksTitle = "More Manali Guides & Tours";
  const ctaTitle = "Explore the Real Manali with Locals";
  const ctaSubtitle = "We show you the Manali that guidebooks miss. Secret waterfalls, ancient castles, hot springs, and UNESCO wilderness.";

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
        <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q25 30 50 50 Q75 70 100 50' fill='none' stroke='%230d9488' stroke-width='0.5'/%3E%3Cpath d='M0 30 Q25 10 50 30 Q75 50 100 30' fill='none' stroke='%230d9488' stroke-width='0.3'/%3E%3Cpath d='M0 70 Q25 50 50 70 Q75 90 100 70' fill='none' stroke='%230d9488' stroke-width='0.3'/%3E%3C/svg%3E")` }} />

        {/* HERO */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-950 via-slate-900 to-cyan-950" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 15s ease infinite' }} />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30h60M30 0v60' stroke='%2314b8a6' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")` }} />
          <div className="absolute top-1/3 left-1/6 w-80 h-80 bg-teal-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-1/6 w-56 h-56 bg-amber-500/10 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/10 to-transparent" />
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-teal-500/10 to-transparent" />
          <div className="absolute top-[20%] left-[15%] w-3 h-3 bg-teal-400 rounded-full relative radar-dot" style={{ animation: 'float 6s ease-in-out infinite' }} />
          <div className="absolute top-[60%] right-[12%] w-2.5 h-2.5 bg-cyan-400 rounded-full relative radar-dot" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '1s' }} />
          <div className="absolute top-[35%] right-[25%] w-2 h-2 bg-amber-400/60 rounded-full" style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '2s' }} />
          <div className="absolute bottom-[35%] left-[25%] w-2.5 h-2.5 bg-teal-300/40 rounded-full" style={{ animation: 'float 9s ease-in-out infinite', animationDelay: '0.5s' }} />
          <div className="absolute top-[45%] left-[40%] w-2 h-2 bg-cyan-300/30 rounded-full" />
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
