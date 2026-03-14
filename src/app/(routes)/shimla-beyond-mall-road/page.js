import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, Camera, Landmark, Compass, Calendar, Bird, Binoculars, Map, Target } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Shimla Beyond Mall Road | Hidden Gems & Day Trips | 2026',
  description: 'Discover Shimla beyond Mall Road. Mashobra, Naldehra, Tattapani hot springs, Chail, Fagu, Narkanda, Wildflower Hall, Jakhu Ropeway + more. Call 7668570551.',
  keywords: 'shimla beyond mall road, shimla hidden gems, mashobra, naldehra, tattapani, chail, narkanda, shimla offbeat places, shimla day trips, fagu',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/shimla-beyond-mall-road' },
  openGraph: {
    title: 'Shimla Beyond Mall Road | Hidden Gems & Day Trips 2026',
    description: 'Discover what Shimla has beyond Mall Road. Apple orchards, hot springs, cricket grounds, ski slopes. Complete guide.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/shimla-beyond-mall-road',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/shimla-hero.jpg', width: 1200, height: 630, alt: 'Shimla Beyond Mall Road' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shimla Beyond Mall Road | Hidden Gems',
    description: 'Apple orchards, hot springs, highest cricket ground, ski slopes. By Shimla locals.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/shimla-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function ShimlaBeyondMallRoadPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Shimla Beyond Mall Road", "item": "https://www.trivenicabs.in/shimla-beyond-mall-road" },
    ],
  };

  const faqData = [
    { question: "What can I see in Shimla beyond Mall Road?", answer: "Shimla has amazing hidden gems: Mashobra (apple orchards, 12 km), Naldehra (India&apos;s oldest golf course, 23 km), Tattapani hot springs (51 km), Chail (world&apos;s highest cricket ground, 45 km), Fagu (nature point, 22 km), Narkanda (skiing, 65 km), Wildflower Hall area, and the Jakhu Ropeway." },
    { question: "Is Mashobra worth visiting from Shimla?", answer: "Absolutely! Mashobra is a peaceful hill village 12 km from Shimla, famous for its apple orchards, dense forests, and the President&apos;s retreat (Retreat Building). Much less crowded than Shimla, it offers nature walks, trout fishing, and stunning valley views. Perfect for half a day." },
    { question: "What is Tattapani hot springs?", answer: "Tattapani is a village 51 km from Shimla on the banks of the Sutlej River, famous for its natural hot sulfur springs. The hot water pools along the riverbank are believed to have healing properties. River rafting is also available here. A full day trip from Shimla, especially enjoyable in winter." },
    { question: "What is special about Chail?", answer: "Chail, 45 km from Shimla, has the world&apos;s highest cricket ground (2,444 meters altitude). Built by the Maharaja of Patiala after the British banned him from Shimla, it also has a beautiful palace (now a heritage hotel), Chail Sanctuary with Himalayan wildlife, and stunning deodar forests." },
    { question: "Can I go skiing near Shimla?", answer: "Yes! Narkanda (65 km from Shimla, 2,708 meters altitude) has skiing slopes operational from January to March. The Hatu Peak nearby offers panoramic Himalayan views. Even outside ski season, Narkanda is beautiful with apple orchards and dense forest trails. Our cab can get you there in about 3 hours." },
    { question: "What is Naldehra known for?", answer: "Naldehra (23 km from Shimla) is famous for India&apos;s oldest 9-hole golf course, built by Lord Curzon in 1905. Even non-golfers can enjoy the beautiful setting among dense cedar forests. The Naldehra Fair in June features local culture. Pony rides and nature walks are available." },
    { question: "Is the Jakhu Ropeway worth it?", answer: "Yes! The Jakhu Ropeway (cable car) opened in recent years and takes you from Ridge to Jakhu Temple in minutes. It offers spectacular aerial views of Shimla and the surrounding valleys. The 108-foot Hanuman statue at the top is visible from across the city. Much easier than the steep climb." },
    { question: "How many days do I need for Shimla beyond the main sights?", answer: "1 day covers Mall Road, Ridge, Christ Church, and Jakhu. Add 1 day for Mashobra + Naldehra + Wildflower Hall area. Add another day for Chail or Tattapani or Narkanda. Our 3-day itinerary covers all the hidden gems and is the most comprehensive way to experience Shimla." },
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
    { name: "Mashobra", desc: "A tranquil hill village just 12 km from Shimla, surrounded by thick forests and terraced apple orchards. Home to the President&apos;s retreat (Retreat Building) and the Craignano nature area, it offers nature walks, trout fishing in streams, and stunning valley views without the Shimla crowds.", distance: "12 km from Mall Road", timing: "Best visited 9 AM - 5 PM; apple season July-September", whyVisit: "The peaceful Shimla that existed before tourism -- apple orchards, pine forests, and absolute serenity", cabTip: "Just 30 minutes from Shimla; easily combined with Naldehra in a half-day trip" },
    { name: "Naldehra (Golf Course)", desc: "Home to India&apos;s oldest 9-hole golf course, laid out by Lord Curzon in 1905 amid majestic cedar forests. The setting is spectacular even for non-golfers. The annual Naldehra Fair in June showcases Himachali culture. Pony rides through the forest trails are a popular family activity.", distance: "23 km from Mall Road", timing: "Golf course 7 AM - 5 PM; best in spring and autumn", whyVisit: "India&apos;s oldest golf course in one of the most beautiful forest settings in the Himalayas", cabTip: "Combine with Mashobra for a full half-day circuit through the hills" },
    { name: "Tattapani Hot Springs", desc: "A village on the banks of the Sutlej River famous for its natural hot sulfur springs, believed to have medicinal properties. The steaming pools along the riverbank are a surreal sight, especially in winter when steam rises against the cold mountain air. River rafting is available nearby.", distance: "51 km from Mall Road", timing: "Hot springs accessible all day; best in winter months", whyVisit: "Soak in natural hot springs by a Himalayan river -- a completely unique Shimla experience", cabTip: "Full day trip; the drive through the mountains is scenic; cab fare around 2,500" },
    { name: "Chail", desc: "A hill station built by the Maharaja of Patiala after the British banned him from Shimla. It boasts the world&apos;s highest cricket ground at 2,444 meters, a beautiful palace-hotel, and the Chail Wildlife Sanctuary with barking deer, goral, and Himalayan birds. The deodar forests here are pristine.", distance: "45 km from Mall Road", timing: "Open all day; sanctuary best 7 AM - 5 PM", whyVisit: "The world&apos;s highest cricket ground + a royal palace + pristine Himalayan wildlife sanctuary", cabTip: "About 2 hours drive on winding roads; our drivers know every curve" },
    { name: "Fagu", desc: "A small hamlet at 2,500 meters elevation on the Hindustan-Tibet road, offering panoramic views of snow-capped peaks. It is the first snowfall point near Shimla in winter and a popular picnic spot in summer. The apple and cherry orchards here are beautiful in bloom season.", distance: "22 km from Mall Road", timing: "Best at sunrise or sunset for mountain views", whyVisit: "The nearest viewpoint for snow-capped Himalayan peaks -- and the first snowfall near Shimla", cabTip: "On the route to Narkanda; combine both in a single day trip" },
    { name: "Narkanda (Skiing)", desc: "A small hill town at 2,708 meters known as Himachal&apos;s skiing destination, with slopes operational from January to March. The Hatu Peak (3,400 meters) nearby offers a 360-degree panorama of the Himalayas. Even outside ski season, the dense forests and apple orchards make it a magical escape.", distance: "65 km from Mall Road", timing: "Skiing: January-March; Hatu Peak: April-November (snow blocks road in winter)", whyVisit: "Ski in the Himalayas and stand atop Hatu Peak for views that stretch to eternity", cabTip: "3-hour drive; full day trip; roads are well-maintained but winding" },
    { name: "Wildflower Hall Area", desc: "The area around Wildflower Hall (now an Oberoi hotel) at Charabra was once the residence of Lord Kitchener. Even without staying at the hotel, the surrounding cedar forests offer spectacular walks and viewpoints. The nature trails here are among the most beautiful in the Shimla region.", distance: "13 km from Mall Road", timing: "Forest trails best 8 AM - 4 PM; carry warm layers", whyVisit: "Walk through the most pristine cedar forests near Shimla -- where British officers once strolled", cabTip: "Very close to Mashobra; combine both for a nature-focused half-day" },
    { name: "Jakhu Ropeway", desc: "A modern cable car connecting The Ridge to Jakhu Temple, offering breathtaking aerial views of Shimla&apos;s hills, valleys, and the distant Himalayan snowline. At the top stands a 108-foot Hanuman statue visible from across the city. The ropeway avoids the steep, monkey-filled 2-km climb.", distance: "Starts from The Ridge (Mall Road area)", timing: "9 AM - 7 PM daily; best on clear mornings for mountain views", whyVisit: "Fly over Shimla in a cable car and see a 108-foot statue atop the mountain -- modern and spectacular", cabTip: "Walking distance from Mall Road; no cab needed but our driver can wait at the base" },
  ];

  const suggestedItineraries = [
    {
      title: "Day 1 - Shimla Hidden Gems",
      duration: "Full Day",
      stops: [
        "8:00 AM - Jakhu Ropeway for sunrise mountain views",
        "9:30 AM - Drive to Mashobra (30 minutes)",
        "10:00 AM - Mashobra: apple orchards + nature walk (2 hours)",
        "12:30 PM - Drive to Naldehra (15 minutes)",
        "1:00 PM - Naldehra golf course area + pony ride + lunch",
        "3:00 PM - Wildflower Hall area forest walk",
        "5:00 PM - Return to Shimla",
        "6:00 PM - Sunset at Scandal Point on The Ridge",
      ],
    },
    {
      title: "Day 2 - Royal Heritage & Wildlife",
      duration: "Full Day Trip",
      stops: [
        "7:00 AM - Drive to Chail (2 hours)",
        "9:00 AM - World&apos;s highest cricket ground photo stop",
        "9:30 AM - Chail Palace heritage walk",
        "10:30 AM - Chail Wildlife Sanctuary nature trail (2 hours)",
        "12:30 PM - Lunch at a local Himachali restaurant",
        "2:00 PM - Return via Kufri for yak rides and views",
        "4:00 PM - Back in Shimla",
        "5:00 PM - Heritage walk: Gaiety Theatre to Christ Church",
      ],
    },
    {
      title: "Day 3 - Mountains & Hot Springs",
      duration: "Full Day Trip",
      stops: [
        "7:00 AM - Drive to Narkanda via Fagu (3 hours)",
        "8:00 AM - Photo stop at Fagu viewpoint",
        "10:00 AM - Hatu Peak trek or Narkanda forest walk",
        "12:30 PM - Lunch at Narkanda",
        "1:30 PM - Drive to Tattapani (60 km, 2 hours)",
        "3:30 PM - Soak in natural hot springs by the Sutlej River",
        "5:00 PM - Return to Shimla (51 km, 2 hours)",
      ],
    },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Himachal Experts", desc: "We know every hill road" },
    { icon: Compass, title: "8 Hidden Gems", desc: "Beyond the tourist trail" },
    { icon: Landmark, title: "Mountain Heritage", desc: "Orchards, springs, peaks" },
    { icon: Star, title: "4.9 Rating", desc: "Google reviews" },
  ];

  const internalLinks = [
    { href: "/sightseeing/shimla", title: "Shimla Sightseeing Tours", desc: "All Shimla attractions" },
    { href: "/shimla", title: "Shimla City Hub", desc: "Shimla cab services" },
    { href: "/shimla-trip-cost-from-delhi", title: "Shimla Trip Cost", desc: "Budget breakdown" },
    { href: "/delhi-airport-to-shimla-taxi", title: "Delhi to Shimla Taxi", desc: "Airport transfers" },
    { href: "/chandigarh-airport-to-shimla-taxi", title: "Chandigarh to Shimla", desc: "Nearest airport transfer" },
    { href: "/same-day-shimla-from-chandigarh", title: "Day Trip from Chandigarh", desc: "Same day Shimla" },
    { href: "/shimla-vs-manali", title: "Shimla vs Manali", desc: "Which to visit?" },
    { href: "/7-day-himachal-tour-by-car", title: "Himachal Tour by Car", desc: "7-day circuit" },
    { href: "/honeymoon-shimla-manali-by-car", title: "Shimla-Manali Honeymoon", desc: "Romantic hill trip" },
    { href: "/manali-beyond-solang-valley", title: "Manali Beyond Solang", desc: "Manali hidden gems" },
    { href: "/christmas-shimla-manali-package", title: "Christmas Package", desc: "Winter wonderland" },
    { href: "/weekend-getaways-from-chandigarh-by-car", title: "Chandigarh Getaways", desc: "Weekend escapes" },
  ];

  const cityName = "Shimla";
  const landmark = "Mall Road";
  const heroSubtitle = "Apple orchards, natural hot springs, the world&apos;s highest cricket ground, Himalayan ski slopes, and pristine cedar forests. Discover the Queen of Hills beyond the crowds.";
  const whatsappText = "I want to explore beyond Mall Road in Shimla";
  const introTitle = "The Queen of Hills Has a Wild Side";
  const introText = <>Most visitors to Shimla walk Mall Road, visit Christ Church, and take a photo at The Ridge before heading home. But the real magic of this <strong>former British summer capital</strong> lies in the hills surrounding it. Just 12 km away, Mashobra offers <strong>apple orchards and presidential retreats</strong> without a tourist in sight. Naldehra preserves India&apos;s oldest golf course amid cedar forests so beautiful Lord Curzon chose the site himself. At Chail, a maharaja&apos;s defiance created the <strong>world&apos;s highest cricket ground</strong> at 2,444 meters. Further out, Tattapani&apos;s natural hot sulfur springs steam on the banks of the Sutlej River, offering a healing soak that feels almost prehistoric. And at Narkanda, just 65 km from Shimla, you can <strong>ski down Himalayan slopes</strong> or hike to Hatu Peak for a 360-degree mountain panorama. As Himachal transport specialists who have navigated these winding mountain roads for years, we know every hairpin turn and hidden viewpoint. This guide reveals the Shimla that exists beyond the congested Mall Road -- the one with apple-scented air, hot springs, royal palaces, and snow-capped silence.</>;
  const introStats = [
    { icon: Landmark, label: "8 Hidden Gems", sub: "Beyond the crowds", bg: "bg-gradient-to-br from-teal-50 to-cyan-50", iconColor: "text-teal-600" },
    { icon: Compass, label: "Mountain Adventures", sub: "Skiing to hot springs", bg: "bg-gradient-to-br from-amber-50 to-orange-50", iconColor: "text-amber-600" },
    { icon: Map, label: "3-Day Itinerary", sub: "Complete hill explorer", bg: "bg-gradient-to-br from-cyan-50 to-blue-50", iconColor: "text-cyan-600" },
  ];
  const gemsSubtitle = "Eight extraordinary places around Shimla that go beyond the crowded Mall Road";
  const itineraryTitle = "Suggested 3-Day Shimla Explorer Itinerary";
  const itinerarySubtitle = "Go beyond Mall Road -- discover the real Queen of Hills over three adventure-filled days";
  const priceText = <>3-day Shimla explorer cab: <strong>&#8377;4,500-6,000</strong> (includes day trips) | From Delhi: <strong>&#8377;10,000 sedan</strong> (3-day round trip)</>;
  const linksTitle = "More Shimla Guides & Tours";
  const ctaTitle = "Explore the Real Shimla with Locals";
  const ctaSubtitle = "We show you the Shimla that guidebooks miss. Apple orchards, hot springs, ski slopes, and pristine forests.";

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
