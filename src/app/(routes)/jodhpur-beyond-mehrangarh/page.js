import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, Camera, Landmark, Compass, Calendar, Bird, Binoculars, Map, Target } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Jodhpur Beyond Mehrangarh | Hidden Gems & Blue City Secrets | 2026',
  description: 'Discover Jodhpur beyond Mehrangarh Fort. Mandore Gardens, Rao Jodha Desert Rock Park, Toorji Ka Jhalra stepwell, Bishnoi Village Safari, Clock Tower Market, Masuria Hill, Balsamand & Kaylana Lake. Call 7668570551.',
  keywords: 'jodhpur beyond mehrangarh, jodhpur hidden gems, mandore gardens jodhpur, rao jodha desert rock park, toorji ka jhalra, bishnoi village safari, jodhpur secret spots, blue city jodhpur',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/jodhpur-beyond-mehrangarh' },
  openGraph: {
    title: 'Jodhpur Beyond Mehrangarh | Hidden Gems & Blue City Secrets 2026',
    description: 'Discover what Jodhpur has beyond Mehrangarh Fort. Stepwells, desert parks, village safaris, secret lakes. Complete guide by locals.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/jodhpur-beyond-mehrangarh',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/taj-mahal-hero.jpg', width: 1200, height: 630, alt: 'Jodhpur Beyond Mehrangarh' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jodhpur Beyond Mehrangarh | Hidden Gems',
    description: 'Stepwells, desert parks, Bishnoi villages, and secret lakes. By Jodhpur locals.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/taj-mahal-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function JodhpurBeyondMehrangarhPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Jodhpur Beyond Mehrangarh", "item": "https://www.trivenicabs.in/jodhpur-beyond-mehrangarh" },
    ],
  };

  const faqData = [
    { question: "What are the best hidden gems in Jodhpur beyond Mehrangarh?", answer: "Jodhpur has incredible hidden gems: Mandore Gardens (ancient Marwar capital with royal cenotaphs), Rao Jodha Desert Rock Park (ecologically restored desert landscape at the fort base), Toorji Ka Jhalra (beautiful restored stepwell), Bishnoi Village Safari (wildlife and tribal culture), Clock Tower Market underbelly (spice and textile lanes), Masuria Hill Garden (panoramic city views), Balsamand Lake, and Kaylana Lake." },
    { question: "What is Mandore Gardens?", answer: "Mandore Gardens is the ancient capital of the Marwar kingdom before Jodhpur was founded. Located 9 km north of Jodhpur, it features stunning royal cenotaphs (dewals) of Marwar rulers carved from red sandstone, a Hall of Heroes with 16 painted rock-cut figures, lush gardens with peacocks, and a government museum. Free entry, open sunrise to sunset." },
    { question: "What is Rao Jodha Desert Rock Park?", answer: "Rao Jodha Desert Rock Park is a stunning 72-hectare ecological restoration project at the base of Mehrangarh Fort. Once barren land overrun by an invasive plant species, it has been restored to showcase the Thar Desert&apos;s native rocky desert ecosystem with over 300 plant species. Walking trails wind through dramatic rock formations with fort views. Entry &#8377;100, allow 1.5-2 hours." },
    { question: "What is Toorji Ka Jhalra?", answer: "Toorji Ka Jhalra is a beautifully restored stepwell in the heart of Jodhpur&apos;s old city, built in the 1740s by Queen Toorji. Its intricate carved steps descend into still water, and the surrounding area has been developed into a charming cafe and gallery precinct. It is one of Jodhpur&apos;s most photogenic hidden spots. Free to view, best in morning light." },
    { question: "What is a Bishnoi Village Safari?", answer: "A Bishnoi Village Safari takes you to the villages of the Bishnoi community -- India&apos;s original environmentalists who have protected wildlife and trees for over 500 years. You can see blackbuck, chinkaras (Indian gazelles), demoiselle cranes, and visit artisan potters and weavers. The safari also includes opium tea ceremonies. It is a unique cultural and wildlife experience about 25 km from Jodhpur." },
    { question: "What is the Clock Tower Market underbelly?", answer: "Most tourists visit Sardar Market near the Clock Tower for a quick look. But the narrow lanes behind the main market hide an extraordinary labyrinth of specialist bazaars -- spice lanes (Moti Bazaar), textile alleys, lac bangle workshops, tie-dye artisans, and old merchant havelis. Our drivers can guide you to the hidden workshops where artisans still use centuries-old techniques." },
    { question: "Are Balsamand and Kaylana Lakes worth visiting?", answer: "Yes! Balsamand Lake (5 km from city) is a serene 12th-century artificial lake surrounded by a lush garden and a heritage palace hotel -- perfect for a peaceful morning walk. Kaylana Lake (8 km west) is larger and popular for sunset views and birdwatching, especially during winter when migratory birds arrive. Both are refreshing escapes from the desert city heat." },
    { question: "How many days do I need for Jodhpur beyond the main sights?", answer: "1 day covers Mehrangarh Fort, Jaswant Thada, and the Clock Tower. 2 days lets you add the hidden gems: Mandore Gardens, Rao Jodha Park, Toorji Ka Jhalra, Bishnoi Village Safari, and the Clock Tower underbelly. Our 2-day plan covers all 8 hidden gems across two full days with a sedan cab." },
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
    { name: "Mandore Gardens", desc: "The ancient capital of Marwar, 9 km north of Jodhpur, predating the city itself. Royal cenotaphs (dewals) of Marwar rulers are carved from red sandstone in a distinctive temple-like style unlike the typical Rajasthani chattris. The Hall of Heroes features 16 painted rock-cut figures of deities. Lush gardens with peacocks, langurs, and a small government museum complete this peaceful retreat from the fort crowds.", distance: "9 km from Mehrangarh", timing: "Sunrise to sunset daily; free entry; allow 1.5-2 hours", whyVisit: "The original Marwar capital -- royal cenotaphs, painted heroes, and peacock-filled gardens that predate Jodhpur itself", cabTip: "9 km north of city; combine with morning departure or arrival as it is on the highway to Jaisalmer" },
    { name: "Rao Jodha Desert Rock Park", desc: "A breathtaking 72-hectare ecological restoration project at the base of Mehrangarh Fort. What was once barren wasteland overrun by the invasive Prosopis juliflora has been restored to a native Thar Desert rocky landscape with over 300 indigenous plant species. Walking trails wind through dramatic volcanic rock formations with stunning views of the fort above. The park is a triumph of conservation.", distance: "At Mehrangarh Fort base", timing: "8 AM - 5:30 PM; entry &#8377;100; allow 1.5-2 hours", whyVisit: "A restored desert ecosystem at the fort&apos;s base -- 300 native plants, dramatic rock trails, and Mehrangarh views from below", cabTip: "Entrance is near the Mehrangarh Fort gate; visit before or after the fort to avoid the midday heat" },
    { name: "Toorji Ka Jhalra (Stepwell)", desc: "A stunning 18th-century stepwell in the heart of Jodhpur&apos;s old city, built by Queen Toorji in the 1740s. Beautifully restored with intricate carved steps descending into still, green-hued water. The surrounding area has been transformed into a charming precinct with cafes, art galleries, and boutique shops. One of Jodhpur&apos;s most photogenic and peaceful spots, hiding in plain sight.", distance: "1 km from Mehrangarh", timing: "Open 24/7 (outdoor); free to view; best in morning light for photography", whyVisit: "An 18th-century stepwell hiding in Jodhpur&apos;s old city -- beautifully restored with cafes and galleries nearby", cabTip: "Walking distance from the Clock Tower; combine with old city exploration and market walks" },
    { name: "Bishnoi Village Safari", desc: "A unique cultural and wildlife experience visiting the villages of the Bishnoi community -- India&apos;s original environmentalists who have protected wildlife and trees for over 500 years. Their reverence for all living creatures means blackbuck antelopes, chinkaras (Indian gazelles), and demoiselle cranes roam freely near the villages. The safari includes visits to artisan potters, weavers, and the traditional opium tea ceremony.", distance: "25 km from Jodhpur", timing: "Morning safaris best (7-11 AM); 3-4 hours; &#8377;1,500-2,500 per vehicle", whyVisit: "Meet India&apos;s original conservationists -- blackbuck, chinkaras, demoiselle cranes, and centuries-old village craft traditions", cabTip: "25 km south of Jodhpur; our drivers double as informal guides for this popular half-day excursion" },
    { name: "Clock Tower Market Underbelly", desc: "Sardar Market around the Clock Tower is on every tourist itinerary. But most visitors skim the surface. The real magic lies in the narrow lanes behind -- Moti Bazaar (spice market), tie-dye alleys where artisans create bandhani fabric, lac bangle workshops, old merchant havelis with painted facades, and hole-in-the-wall shops selling Rajasthani mirchi vada, lassi, and makhaniya lassi (saffron-infused).", distance: "1.5 km from Mehrangarh", timing: "9 AM - 8 PM; closed Sundays (most shops); allow 2-3 hours", whyVisit: "The hidden lanes behind Jodhpur&apos;s famous Clock Tower -- spice bazaars, tie-dye artisans, and Rajasthani street food", cabTip: "Park near the Clock Tower and explore on foot; our driver can meet you on the other side of the old city" },
    { name: "Masuria Hill Garden", desc: "A hillside garden on Masuria Hill offering some of the best panoramic views of Jodhpur&apos;s blue-painted old city. Unlike the views from Mehrangarh (which look down), Masuria Hill provides a wide-angle perspective that shows the dramatic contrast between the blue houses and the golden fort above. Popular with photographers and couples at sunset. Relatively unknown to tourists.", distance: "3 km from Mehrangarh", timing: "Sunrise to sunset; nominal entry; best at sunset for the golden hour blue city views", whyVisit: "The best panoramic views of the Blue City -- see the entire blue-painted old city with Mehrangarh towering above", cabTip: "Short drive from the main city; perfect for sunset photography before an evening meal in the old city" },
    { name: "Balsamand Lake", desc: "A serene 12th-century artificial lake surrounded by lush gardens, 5 km north of the city. Built in 1159 AD by Gurjara-Pratihara rulers, the lake is an oasis of green in the desert landscape. A heritage palace hotel (now a luxury property) sits on the bank. Walking trails around the lake pass through bougainvillea gardens and attract a variety of birds, especially in the winter months.", distance: "5 km from Mehrangarh", timing: "6 AM - 6 PM; free for garden area; best in early morning", whyVisit: "A 900-year-old desert lake with heritage palace gardens -- an oasis of tranquility near the city", cabTip: "On the Mandore road; combine with Mandore Gardens for a peaceful morning away from the tourist trail" },
    { name: "Kaylana Lake", desc: "A large, picturesque lake 8 km west of Jodhpur, built by Maharaja Pratap Singh in 1872. The lake is surrounded by low, rocky hills and is a popular spot for sunset views, picnics, and birdwatching. During winter (November-February), migratory birds including flamingos, cranes, and geese visit the lake. The desert sunset over Kaylana&apos;s still waters is one of Jodhpur&apos;s most beautiful hidden sights.", distance: "8 km from Mehrangarh", timing: "Open 24/7; best at sunset; birdwatching best November-February", whyVisit: "Desert sunsets over a vast lake, winter migratory flamingos, and a peaceful escape from the city bustle", cabTip: "8 km west of city; perfect for a sunset excursion after a day of sightseeing in Jodhpur" },
  ];

  const suggestedItineraries = [
    {
      title: "Day 1 - Old City Secrets & Desert Park",
      duration: "Full Day",
      stops: [
        "7:00 AM - Rao Jodha Desert Rock Park (morning cool, 1.5 hours)",
        "9:00 AM - Toorji Ka Jhalra stepwell (morning light photography)",
        "10:00 AM - Clock Tower Market underbelly walk (spices, tie-dye, street food)",
        "12:30 PM - Makhaniya Lassi & mirchi vada lunch near Clock Tower",
        "2:00 PM - Blue City walking tour through the old city lanes",
        "4:00 PM - Masuria Hill Garden (sunset views of the Blue City)",
        "6:30 PM - Dinner at a rooftop restaurant with Mehrangarh views",
      ],
    },
    {
      title: "Day 2 - Ancient Capitals, Villages & Lakes",
      duration: "Full Day",
      stops: [
        "7:00 AM - Bishnoi Village Safari (blackbuck, cranes, potters, 3-4 hours)",
        "11:30 AM - Return to Jodhpur; lunch at a Rajasthani thali restaurant",
        "1:30 PM - Mandore Gardens (royal cenotaphs, Hall of Heroes, 1.5 hours)",
        "3:30 PM - Balsamand Lake garden walk (30 minutes)",
        "4:30 PM - Kaylana Lake (sunset over desert waters)",
        "6:30 PM - Evening at leisure or shopping at Sadar Bazaar",
      ],
    },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Jodhpur Experts", desc: "We know every Blue City lane" },
    { icon: Compass, title: "8 Hidden Gems", desc: "Beyond the tourist trail" },
    { icon: Landmark, title: "900 Years", desc: "Of hidden history" },
    { icon: Star, title: "4.9 Rating", desc: "Google reviews" },
  ];

  const internalLinks = [
    { href: "/sightseeing/jodhpur", title: "Jodhpur Sightseeing Tours", desc: "All Jodhpur attractions" },
    { href: "/jodhpur-shopping-guide", title: "Jodhpur Shopping Guide", desc: "Blue City markets" },
    { href: "/jaisalmer-shopping-guide", title: "Jaisalmer Shopping Guide", desc: "Golden City crafts" },
    { href: "/udaipur-beyond-city-palace", title: "Udaipur Beyond City Palace", desc: "Lake City hidden gems" },
    { href: "/jaipur-beyond-hawa-mahal", title: "Jaipur Beyond Hawa Mahal", desc: "Pink City secrets" },
    { href: "/pushkar-food-tour", title: "Pushkar Food Tour", desc: "Holy lake cuisine" },
    { href: "/jaisalmer-desert-safari", title: "Jaisalmer Desert Safari", desc: "Sam Sand Dunes" },
    { href: "/10-day-north-india-road-trip", title: "North India Road Trip", desc: "10-day grand tour" },
    { href: "/golden-triangle-english-speaking-driver", title: "Golden Triangle Tour", desc: "Delhi-Agra-Jaipur" },
    { href: "/rajasthan-fort-trail-by-car", title: "Rajasthan Fort Trail", desc: "Fort-to-fort road trip" },
    { href: "/weekend-getaways-from-jaipur-by-car", title: "Getaways from Jaipur", desc: "Weekend trips" },
    { href: "/local-taxi", title: "Local Taxi", desc: "City rides" },
  ];

  const cityName = "Jodhpur";
  const landmark = "Mehrangarh";
  const heroSubtitle = "Ancient royal gardens, a restored desert ecosystem, hidden stepwells, Bishnoi wildlife villages, and serene desert lakes. Discover the Blue City that hides behind the mighty fort.";
  const whatsappText = "I want to explore beyond Mehrangarh in Jodhpur";
  const introTitle = "The Blue City Has More Than One Fortress";
  const introText = <>Mehrangarh Fort is one of India&apos;s most magnificent fortresses, and rightfully dominates every Jodhpur itinerary. But the Blue City has <strong>900 years of history</strong> that extends far beyond its famous ramparts. Before Jodhpur was founded in 1459, the ancient capital of Mandore had already flourished for centuries -- its royal cenotaphs still stand in peaceful gardens 9 km north. At the fort&apos;s very base, a <strong>72-hectare desert rock park</strong> has been ecologically restored to showcase the Thar&apos;s native landscape. In the old city, a <strong>18th-century stepwell</strong> hides between houses while the Clock Tower&apos;s narrow back lanes conceal spice bazaars and tie-dye workshops. Just 25 km south, <strong>Bishnoi villages</strong> offer a unique glimpse into India&apos;s oldest conservation community, where blackbuck and chinkaras roam free. And two serene lakes -- one built 900 years ago, the other in the 19th century -- offer desert sunsets and winter migratory birds that few tourists ever discover. As Jodhpur transport experts, we navigate this layered desert city daily. Let us show you the Blue City that the tourism brochures never reveal.</>;
  const introStats = [
    { icon: Landmark, label: "8 Hidden Gems", sub: "Beyond the guidebook", bg: "bg-gradient-to-br from-teal-50 to-cyan-50", iconColor: "text-teal-600" },
    { icon: Compass, label: "900 Years", sub: "Of Marwar history", bg: "bg-gradient-to-br from-amber-50 to-orange-50", iconColor: "text-amber-600" },
    { icon: Map, label: "2-Day Itinerary", sub: "Complete explorer plan", bg: "bg-gradient-to-br from-cyan-50 to-blue-50", iconColor: "text-cyan-600" },
  ];
  const gemsSubtitle = "Eight extraordinary places in Jodhpur that go far beyond Mehrangarh Fort";
  const itineraryTitle = "Suggested 2-Day Jodhpur Explorer Itinerary";
  const itinerarySubtitle = "Go beyond Mehrangarh -- discover 900 years of hidden Blue City history over two fascinating days";
  const priceText = <>2-day Jodhpur local cab: <strong>&#8377;3,500-4,500</strong> | Full day Jodhpur sightseeing: <strong>&#8377;2,000 sedan</strong> | Bishnoi Safari add-on: <strong>&#8377;1,500-2,500</strong></>;
  const linksTitle = "More Jodhpur & Rajasthan Guides";
  const ctaTitle = "Explore the Real Jodhpur with Locals";
  const ctaSubtitle = "We show you the Blue City that guidebooks miss. Desert parks, stepwells, village safaris, and hidden lakes.";

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {suggestedItineraries.map((day, idx) => (
                <div key={idx} className="hover-lift card-glow rounded-3xl overflow-hidden">
                  <div className={`bg-gradient-to-br ${idx === 0 ? 'from-teal-600 to-cyan-600' : 'from-amber-500 to-orange-500'} rounded-3xl p-1`}>
                    <div className="bg-white rounded-[20px] p-6">
                      <h3 className={`text-lg font-bold ${idx === 0 ? 'text-teal-700' : 'text-amber-700'} mb-5 flex items-center gap-3`}>
                        <div className={`w-10 h-10 bg-gradient-to-br ${idx === 0 ? 'from-teal-100 to-cyan-100' : 'from-amber-100 to-orange-100'} rounded-xl flex items-center justify-center`}>
                          <span className={`${idx === 0 ? 'text-teal-700' : 'text-amber-700'} font-bold text-sm`}>0{idx + 1}</span>
                        </div>
                        {day.title}
                      </h3>
                      <div className="space-y-0.5">
                        {day.stops.map((stop, i) => (
                          <div key={i} className="flex items-start gap-2 text-stone-600 text-sm py-2 border-b border-stone-100/50 last:border-0 hover:bg-stone-50/50 hover:pl-2 transition-all duration-300 rounded">
                            <CheckCircle2 className={`w-4 h-4 ${idx === 0 ? 'text-teal-500' : 'text-amber-500'} mt-0.5 flex-shrink-0`} /> {stop}
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
