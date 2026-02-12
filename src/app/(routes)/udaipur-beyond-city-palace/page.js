import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, Camera, Landmark, Compass, Calendar, Bird, Binoculars, Map, Target } from '@/components/ui/icons';

export const metadata = {
  title: 'Udaipur Beyond City Palace | Hidden Gems & Day Trips | 2026',
  description: 'Discover Udaipur beyond City Palace. Badi Lake, Shilpgram, Monsoon Palace, Haldighati, Kumbhalgarh, Nathdwara, Chittorgarh + more. By locals. Call 7668570551.',
  keywords: 'udaipur beyond city palace, udaipur hidden gems, badi lake, shilpgram, kumbhalgarh fort, chittorgarh fort, monsoon palace, nathdwara, udaipur offbeat',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/udaipur-beyond-city-palace' },
  openGraph: {
    title: 'Udaipur Beyond City Palace | Hidden Gems & Day Trips 2026',
    description: 'Discover what Udaipur has beyond City Palace. Lakes, forts, craft villages, temples. Complete guide by locals.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/udaipur-beyond-city-palace',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/udaipur-hero.jpg', width: 1200, height: 630, alt: 'Udaipur Beyond City Palace' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Udaipur Beyond City Palace | Hidden Gems',
    description: 'Hidden lakes, craft villages, mighty forts, and temple towns. By Udaipur locals.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/udaipur-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function UdaipurBeyondCityPalacePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Udaipur Beyond City Palace", "item": "https://www.trivenicabs.in/udaipur-beyond-city-palace" },
    ],
  };

  const faqData = [
    { question: "What are the best hidden gems in Udaipur beyond City Palace?", answer: "Udaipur has incredible hidden gems: Badi Lake (a serene lake with no tourists), Shilpgram craft village, Monsoon Palace (Sajjangarh) for sunset views, and day trips to Kumbhalgarh Fort (84 km), Nathdwara temple (48 km), Chittorgarh Fort (112 km), Haldighati battlefield (40 km), and Eklingji Temple (22 km)." },
    { question: "Is Kumbhalgarh Fort worth a day trip from Udaipur?", answer: "Absolutely! Kumbhalgarh Fort has the second longest wall in the world (36 km) after the Great Wall of China. It is 84 km from Udaipur (about 2 hours). The fort, a UNESCO World Heritage Site, has 360+ temples, massive ramparts, and incredible Aravalli views. Combine with Ranakpur Jain Temples for a perfect day." },
    { question: "What is Chittorgarh Fort and how far is it?", answer: "Chittorgarh Fort is India&apos;s largest fort by area (700 acres) and a UNESCO World Heritage Site. It is 112 km from Udaipur (2.5 hours). Famous for Queen Padmini&apos;s legendary sacrifice (jauhar), it has massive towers, ancient temples, and a heroic history. Allow a full day trip." },
    { question: "What is Badi Lake?", answer: "Badi Lake (Tiger Lake) is a gorgeous man-made lake about 12 km from Udaipur city center. Unlike Lake Pichola, it is virtually untouched by tourism. Surrounded by hills and cenotaphs, it offers stunning sunset views, picnic spots, and complete serenity. Free entry, no crowds." },
    { question: "Can I visit Nathdwara from Udaipur?", answer: "Yes! Nathdwara is only 48 km from Udaipur (about 1 hour). It is home to the famous Shrinathji Temple, one of India&apos;s most important Vaishnavite shrines. The town is also famous for its Pichwai paintings. A half-day trip is sufficient. Our cab fare is around 1,500 for a return trip." },
    { question: "What is Shilpgram?", answer: "Shilpgram is a rural arts and crafts complex 3 km west of Udaipur. It showcases traditional huts from Rajasthan, Gujarat, Maharashtra, and Goa, with live artisan demonstrations. The annual Shilpgram festival (December) features 1,000+ artisans. Great for families and anyone interested in traditional Indian crafts." },
    { question: "What is Haldighati and why is it famous?", answer: "Haldighati (40 km from Udaipur) is the historic mountain pass where the legendary Battle of Haldighati was fought in 1576 between Maharana Pratap and Akbar&apos;s forces. Today there is a museum, Maharana Pratap&apos;s memorial, and the Chetak memorial (his beloved horse). The soil is naturally yellow (turmeric-colored)." },
    { question: "How many days do I need for Udaipur beyond the main sights?", answer: "2 days covers Udaipur&apos;s main sights + hidden gems. Add a third day for Kumbhalgarh + Ranakpur or Chittorgarh. Our recommended 3-day plan covers the lake city, craft villages, mountain sunsets, and two UNESCO World Heritage forts. It is the ultimate Mewar experience." },
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
    { name: "Badi Lake (Tiger Lake)", desc: "A stunning man-made lake surrounded by hills and ancient cenotaphs, about 12 km from the city center. Unlike the crowded Lake Pichola, Badi Lake is virtually untouched by tourism. The sunset views here, with the Aravalli hills reflected in the still water, are some of the most serene in all of Rajasthan.", distance: "12 km from City Palace", timing: "Open 24 hours; best at sunset (4-6 PM)", whyVisit: "The sunset views rival Lake Pichola without a single tourist -- Udaipur&apos;s best-kept secret", cabTip: "Short drive from the city; perfect as an evening excursion before dinner" },
    { name: "Shilpgram Craft Village", desc: "A living museum of rural arts and crafts set against the Aravalli backdrop. Traditional huts from four western Indian states showcase artisan demonstrations -- pottery, weaving, puppetry, and wood carving. The annual December festival draws over 1,000 artisans from across India.", distance: "3 km from City Palace", timing: "11 AM - 7 PM daily; Dec festival is the highlight", whyVisit: "See living Indian craft traditions in action -- buy directly from the artisans who make it", cabTip: "Very close to the city; combine with Monsoon Palace in an afternoon" },
    { name: "Monsoon Palace (Sajjangarh)", desc: "A hilltop palace built by Maharana Sajjan Singh as a monsoon retreat and astronomical observation point. Perched at 944 meters above sea level, it offers 360-degree panoramic views of Udaipur, its lakes, and the Aravalli range. The sunset from here is legendary.", distance: "6 km from City Palace", timing: "8 AM - 6 PM; arrive by 5 PM for sunset", whyVisit: "The single best sunset viewpoint in Udaipur -- see the entire lake city spread below you", cabTip: "The road up is steep and controlled; our drivers know the timing rules perfectly" },
    { name: "Haldighati", desc: "The legendary mountain pass where Maharana Pratap fought Akbar&apos;s forces in 1576 in one of India&apos;s most celebrated battles. The soil here is naturally yellow like turmeric (haldi). A museum tells the story of Mewar&apos;s greatest warrior, and the Chetak memorial honors his legendary horse.", distance: "40 km from City Palace", timing: "Museum 9 AM - 5 PM; battlefield area open all day", whyVisit: "Walk the battlefield where India&apos;s most legendary warrior fought for freedom -- historically electric", cabTip: "Combine with Nathdwara temple visit, as both are on the same route" },
    { name: "Kumbhalgarh Fort", desc: "A UNESCO World Heritage Site with the second longest continuous wall in the world at 36 km, surpassed only by the Great Wall of China. Built in the 15th century by Rana Kumbha, the fort contains 360+ temples and was the birthplace of Maharana Pratap. The rampart views are breathtaking.", distance: "84 km from City Palace", timing: "9 AM - 6 PM; sound and light show at 6:45 PM", whyVisit: "The Great Wall of India -- 36 km of ramparts, 360 temples, and the birthplace of a legend", cabTip: "Full day trip; combine with Ranakpur Jain Temples (50 km further) for the ultimate route" },
    { name: "Nathdwara (Shrinathji Temple)", desc: "Home to the Shrinathji Temple, one of India&apos;s most important Vaishnavite shrines housing a 14th-century image of Lord Krishna. The town is also the origin of Pichwai paintings -- large devotional artworks on cloth. The temple darshan and the art galleries together make a rich cultural experience.", distance: "48 km from City Palace", timing: "Temple darshan: 5:30 AM - 12:30 PM, 4:30 PM - 8:30 PM", whyVisit: "One of India&apos;s holiest Krishna temples + the origin of Pichwai painting tradition", cabTip: "Combine with Haldighati for a half-day trip; our drivers know the darshan timings" },
    { name: "Chittorgarh Fort", desc: "India&apos;s largest fort by area at 700 acres, and a UNESCO World Heritage Site. The fort witnessed three historic sieges and the legendary jauhar (self-immolation) of Queen Padmini. Towers of Victory and Fame, ancient temples, and massive reservoirs dot the sprawling hilltop fortification.", distance: "112 km from City Palace", timing: "9:30 AM - 5:30 PM; allow 3-4 hours for exploration", whyVisit: "India&apos;s largest fort with a history so dramatic it reads like an epic -- absolutely unmissable", cabTip: "Dedicated full-day trip; start early for the 2.5-hour drive; cab fare around 3,000-3,500" },
    { name: "Eklingji Temple", desc: "An 8th-century temple complex dedicated to Lord Shiva, considered the ruling deity of the Mewar dynasty. The main temple houses a four-faced black marble idol. The complex has 108 temples within a fortified enclosure. The Mewar royal family still worships here every Monday evening.", distance: "22 km from City Palace", timing: "Open for darshan 10:15 AM - 1:10 PM, 5:15 PM - 7:45 PM", whyVisit: "The 1,200-year-old dynastic temple of Mewar royalty -- 108 temples in one sacred complex", cabTip: "Short 30-minute drive; combine with other north-of-Udaipur spots in a half-day circuit" },
  ];

  const suggestedItineraries = [
    {
      title: "Day 1 - Udaipur Hidden Gems",
      duration: "Full Day",
      stops: [
        "8:00 AM - Eklingji Temple morning darshan (22 km drive)",
        "10:30 AM - Return via Shilpgram craft village (2 hours)",
        "1:00 PM - Lunch at a lakeside restaurant",
        "2:30 PM - Monsoon Palace sunset drive",
        "5:00 PM - Sunset at Monsoon Palace viewpoint",
        "6:30 PM - Badi Lake evening walk and cenotaphs",
        "8:00 PM - Dinner with Lake Pichola views",
      ],
    },
    {
      title: "Day 2 - Warriors & Temples",
      duration: "Full Day Trip",
      stops: [
        "7:00 AM - Drive to Haldighati (40 km, 1 hour)",
        "8:00 AM - Haldighati battlefield + museum + Chetak memorial",
        "10:00 AM - Drive to Nathdwara (20 km from Haldighati)",
        "10:30 AM - Shrinathji Temple darshan + Pichwai art galleries",
        "1:00 PM - Traditional lunch in Nathdwara",
        "2:30 PM - Return to Udaipur",
        "4:00 PM - Vintage Car Museum or Bagore Ki Haveli",
        "7:00 PM - Evening boat ride on Lake Pichola",
      ],
    },
    {
      title: "Day 3 - UNESCO Fort Circuit",
      duration: "Full Day Trip",
      stops: [
        "6:30 AM - Drive to Kumbhalgarh Fort (84 km, 2 hours)",
        "8:30 AM - Explore Kumbhalgarh Fort and Great Wall (2.5 hours)",
        "11:00 AM - Drive to Ranakpur Jain Temples (50 km)",
        "12:00 PM - Explore Ranakpur (1,444 marble pillars, each unique)",
        "1:30 PM - Lunch near Ranakpur",
        "3:00 PM - Return to Udaipur (90 km, 2 hours)",
        "5:00 PM - Rest or last-minute shopping at Hathi Pol Bazaar",
      ],
    },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Mewar Experts", desc: "We know every hill road" },
    { icon: Compass, title: "8 Hidden Gems", desc: "Beyond the lake city" },
    { icon: Landmark, title: "2 UNESCO Forts", desc: "Day trip distance" },
    { icon: Star, title: "4.9 Rating", desc: "Google reviews" },
  ];

  const internalLinks = [
    { href: "/sightseeing/udaipur", title: "Udaipur Sightseeing Tours", desc: "All Udaipur attractions" },
    { href: "/udaipur", title: "Udaipur City Hub", desc: "Udaipur cab services" },
    { href: "/honeymoon-udaipur-by-car", title: "Udaipur Honeymoon", desc: "Romantic lakeside trip" },
    { href: "/jaipur-vs-udaipur", title: "Jaipur vs Udaipur", desc: "Which to visit?" },
    { href: "/family-trip-udaipur-from-delhi", title: "Family Trip Udaipur", desc: "From Delhi by car" },
    { href: "/jaipur-airport-to-udaipur-taxi", title: "Jaipur to Udaipur Taxi", desc: "Airport transfer" },
    { href: "/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur", title: "Rajasthan Road Trip", desc: "5-day circuit" },
    { href: "/rajasthan-desert-circuit-tour", title: "Desert Circuit Tour", desc: "Full Rajasthan tour" },
    { href: "/jaipur-beyond-hawa-mahal", title: "Jaipur Beyond Hawa Mahal", desc: "Pink city hidden gems" },
    { href: "/jodhpur-beyond-mehrangarh", title: "Jodhpur Beyond Mehrangarh", desc: "Blue city secrets" },
    { href: "/honeymoon-jaipur-udaipur", title: "Jaipur-Udaipur Honeymoon", desc: "Royal romance route" },
    { href: "/outstation-cabs", title: "Outstation Cabs", desc: "Inter-city travel" },
  ];

  const cityName = "Udaipur";
  const landmark = "City Palace";
  const heroSubtitle = "Hidden lakes, craft villages, the Great Wall of India, legendary battlefields, and ancient temple kingdoms. Discover the Venice of the East\u2019s deepest secrets.";
  const whatsappText = "I want to explore beyond City Palace in Udaipur";
  const introTitle = "Mewar\u2019s Kingdom Extends Far Beyond the Lakes";
  const introText = <>Udaipur enchants every visitor with Lake Pichola, City Palace, and the floating Lake Palace Hotel. But the ancient Mewar kingdom extends far beyond the lake city&apos;s borders, hiding some of India&apos;s most extraordinary treasures. Just 12 km out, <strong>Badi Lake offers sunset views</strong> with zero tourists. The Aravalli hills conceal the <strong>Monsoon Palace</strong>, where 360-degree panoramas make you feel like royalty. Drive an hour and you reach Kumbhalgarh, whose <strong>36-kilometer wall</strong> is second only to the Great Wall of China. Another hour brings you to <strong>Chittorgarh</strong>, India&apos;s largest fort, where the tragic legend of Queen Padmini still echoes through 700 acres of ruins. Closer to home, artisans at Shilpgram craft village keep ancient traditions alive, while at Nathdwara, one of India&apos;s holiest Krishna temples draws millions of devotees. As Mewar transport specialists, we have driven countless travelers from the familiar lakefront into the extraordinary hinterland. This guide reveals the Udaipur that the palace-hopping tourists never see -- the warrior history, sacred art, and hidden natural beauty that make Mewar truly unforgettable.</>;
  const introStats = [
    { icon: Landmark, label: "8 Hidden Gems", sub: "Beyond the guidebook", bg: "bg-gradient-to-br from-teal-50 to-cyan-50", iconColor: "text-teal-600" },
    { icon: Compass, label: "2 UNESCO Forts", sub: "Day trip distance", bg: "bg-gradient-to-br from-amber-50 to-orange-50", iconColor: "text-amber-600" },
    { icon: Map, label: "3-Day Itinerary", sub: "Complete Mewar plan", bg: "bg-gradient-to-br from-cyan-50 to-blue-50", iconColor: "text-cyan-600" },
  ];
  const gemsSubtitle = "Eight extraordinary places in and around Udaipur beyond the famous lakes and palace";
  const itineraryTitle = "Suggested 3-Day Udaipur Explorer Itinerary";
  const itinerarySubtitle = "Go beyond City Palace -- discover the heart of the Mewar kingdom over three epic days";
  const priceText = <>3-day Udaipur explorer cab: <strong>&#8377;5,000-6,500</strong> (includes day trips) | From Jaipur: <strong>&#8377;9,500 sedan</strong> (3-day round trip)</>;
  const linksTitle = "More Udaipur Guides & Tours";
  const ctaTitle = "Explore the Real Udaipur with Locals";
  const ctaSubtitle = "We show you the Mewar that guidebooks miss. UNESCO forts, hidden lakes, craft villages, and warrior history.";

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
