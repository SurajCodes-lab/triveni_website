import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, Camera, Landmark, Compass, Calendar, Bird, Binoculars, Map, Target } from '@/components/ui/icons';

export const metadata = {
  title: 'Jaipur Beyond Hawa Mahal | Hidden Gems & Secret Spots | 2026',
  description: 'Discover Jaipur beyond Hawa Mahal. Panna Meena Ka Kund, Galtaji Monkey Temple, Chand Baori, Bhangarh Fort, Samode Palace + more. By locals. Call 7668570551.',
  keywords: 'jaipur beyond hawa mahal, jaipur hidden gems, panna meena ka kund, galtaji monkey temple, chand baori, bhangarh fort, jaipur secret places, jaipur offbeat',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/jaipur-beyond-hawa-mahal' },
  openGraph: {
    title: 'Jaipur Beyond Hawa Mahal | Hidden Gems & Secret Spots 2026',
    description: 'Discover what Jaipur has beyond Hawa Mahal. Stepwells, forts, elephant sanctuaries, ghost cities. Complete guide by locals.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/jaipur-beyond-hawa-mahal',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/jaipur-hero.jpg', width: 1200, height: 630, alt: 'Jaipur Beyond Hawa Mahal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jaipur Beyond Hawa Mahal | Hidden Gems',
    description: 'Stepwells, monkey temples, ghost forts, elephant sanctuaries. By Jaipur locals.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/jaipur-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function JaipurBeyondHawaMahalPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Jaipur Beyond Hawa Mahal", "item": "https://www.trivenicabs.in/jaipur-beyond-hawa-mahal" },
    ],
  };

  const faqData = [
    { question: "What are the best hidden gems in Jaipur beyond Hawa Mahal?", answer: "Jaipur has incredible hidden gems: Panna Meena Ka Kund (geometric stepwell), Galtaji Monkey Temple, Chand Baori at Abhaneri (95 km), Bhangarh Fort (haunted fort, 85 km), Samode Palace (42 km), Jaigarh Fort (with the world's largest cannon on wheels), Albert Hall Museum, and Elefantastic ethical elephant sanctuary." },
    { question: "Is Chand Baori worth the drive from Jaipur?", answer: "Absolutely! Chand Baori at Abhaneri is one of the deepest and most visually stunning stepwells in India, with 3,500 symmetrical steps descending 13 stories. It is 95 km from Jaipur (about 2 hours). Combine it with a stop at Bhangarh Fort for a full day trip. Our cab fare is around 2,500 for this route." },
    { question: "Can I visit Bhangarh Fort from Jaipur in a day?", answer: "Yes! Bhangarh Fort is 85 km from Jaipur (about 2 hours). Known as India's most haunted place, it is actually a well-preserved abandoned Mughal-era city. ASI prohibits entry after sunset. Visit morning to afternoon. Combine with Chand Baori for a full day trip." },
    { question: "What is Panna Meena Ka Kund?", answer: "Panna Meena Ka Kund is a stunning 16th-century stepwell near the Amber Fort area. It features a mesmerizing geometric zigzag pattern of steps that has made it an Instagram sensation. Free to visit, best photographed in morning light. Our drivers can take you here as part of the Amber Fort visit." },
    { question: "Is Elefantastic elephant sanctuary ethical?", answer: "Yes, Elefantastic in Jaipur is considered one of India's more ethical elephant experiences. Unlike Amer Fort elephant rides, here you feed, bathe, and learn about elephants without riding them. Located near Amber Fort. Book in advance as slots fill quickly. Our cab can wait while you enjoy the 2-3 hour experience." },
    { question: "How many days do I need to see Jaipur beyond the main sights?", answer: "2 days covers Jaipur city's main + hidden gems. 3 days lets you add day trips to Chand Baori, Bhangarh, or Samode. Our most popular plan is a 2-day Jaipur exploration covering Amber Fort, City Palace, Hawa Mahal on Day 1, and hidden gems like Galtaji, Panna Meena, and Jaigarh on Day 2." },
    { question: "What is the best day trip from Jaipur for history lovers?", answer: "The Chand Baori + Bhangarh Fort combo is unbeatable. Start early, visit Bhangarh (haunted fort city) first, then Chand Baori (3,500-step well). Both are UNESCO-quality sites with almost no crowds. Full day trip costs around 2,500-3,000 by cab." },
    { question: "Is Galtaji (Monkey Temple) safe to visit?", answer: "Yes, Galtaji is safe. The monkeys are habituated to visitors and generally peaceful. Avoid carrying food openly and keep bags zipped. The temple complex has natural spring water kunds and beautiful painted walls. It is about 10 km from Jaipur city center. Best visited early morning when the monkeys are most active." },
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
    { name: "Panna Meena Ka Kund", desc: "A breathtaking 16th-century stepwell with a mesmerizing geometric zigzag pattern of steps. This Instagram-famous marvel near Amber Fort features perfectly symmetrical staircases descending into the water. Free entry and rarely crowded in early morning.", distance: "11 km from Hawa Mahal", timing: "Sunrise to sunset, best at 7-9 AM", whyVisit: "One of India&apos;s most photogenic stepwells, with a geometric design that looks almost impossible", cabTip: "Combine with Amber Fort visit -- it is just 5 minutes away" },
    { name: "Galtaji (Monkey Temple)", desc: "An ancient Hindu pilgrimage site nestled in a mountain pass with natural spring water kunds and beautifully painted temple walls. Hundreds of monkeys roam freely around the temple complex. The spring water pools are sacred and the painted ceilings are stunning.", distance: "10 km from Hawa Mahal", timing: "5 AM - 9 PM, best early morning", whyVisit: "A living, breathing temple unlike any other -- monkeys, natural springs, and stunning frescoes", cabTip: "Road is narrow near the temple; our drivers know the best parking spots" },
    { name: "Elefantastic (Elephant Sanctuary)", desc: "An ethical elephant sanctuary where you can feed, bathe, paint, and interact with rescued elephants without riding them. A responsible alternative to Amer Fort elephant rides. Each session lasts 2-3 hours and provides genuine understanding of these gentle giants.", distance: "13 km from Hawa Mahal", timing: "Sessions at 9 AM and 2 PM, book in advance", whyVisit: "Ethical, hands-on elephant experience that supports animal welfare over tourism", cabTip: "Book online first; our cab waits while you enjoy the 2-3 hour session" },
    { name: "Chand Baori (Abhaneri)", desc: "One of the deepest and largest stepwells in India, with 3,500 perfectly symmetrical steps descending 13 stories into the earth. Built in the 9th century, this architectural marvel appeared in The Dark Knight Rises. The geometric precision is staggering and almost hypnotic.", distance: "95 km from Hawa Mahal", timing: "8 AM - 5:30 PM, allow 2 hours drive each way", whyVisit: "A 1,200-year-old engineering wonder with 3,500 steps -- one of India&apos;s most spectacular sights", cabTip: "Combine with Bhangarh Fort for a full day trip; cab fare around 2,500" },
    { name: "Bhangarh Fort", desc: "Known as India&apos;s most haunted place, this remarkably well-preserved 17th-century fort city was mysteriously abandoned overnight. ASI has placed a sign prohibiting entry after sunset. The sprawling ruins include temples, havelis, and marketplaces frozen in time.", distance: "85 km from Hawa Mahal", timing: "Sunrise to sunset only (no entry after dark)", whyVisit: "A hauntingly beautiful ghost city with a legendary curse -- India&apos;s most famous abandoned fort", cabTip: "Visit on the same day trip as Chand Baori; both are on a similar route" },
    { name: "Samode Palace", desc: "A stunning 475-year-old palace-turned-heritage-hotel in a small village 42 km from Jaipur. Even if you do not stay overnight, you can visit for lunch or high tea and explore the magnificent Sheesh Mahal (mirror palace), painted ceilings, and royal courtyards.", distance: "42 km from Hawa Mahal", timing: "Open for day visitors 10 AM - 5 PM", whyVisit: "Experience a real Rajput palace without the crowds of City Palace -- stunning mirror work", cabTip: "Book lunch at the palace restaurant in advance for the full royal experience" },
    { name: "Jaigarh Fort (Jaivana Cannon)", desc: "The mighty military fort above Amber Palace houses Jaivana, the world&apos;s largest cannon on wheels. Unlike crowded Amber Fort below, Jaigarh offers empty ramparts, a massive water reservoir, armory museum, and panoramic views of the Aravalli hills stretching to the horizon.", distance: "15 km from Hawa Mahal", timing: "9 AM - 4:30 PM daily", whyVisit: "The world&apos;s largest wheeled cannon, plus empty ramparts with views Amber Fort cannot match", cabTip: "Drive up from Amber Fort -- the road is steep but scenic; saves a 45-minute climb" },
    { name: "Albert Hall Museum", desc: "Jaipur&apos;s oldest museum housed in a stunning Indo-Saracenic building designed in 1876. Contains an Egyptian mummy, exquisite Mughal carpets, and an incredible collection of art from around the world. The building itself, lit up at night, is one of Jaipur&apos;s most photographed landmarks.", distance: "1.5 km from Hawa Mahal", timing: "9 AM - 5 PM, night viewing 7-10 PM", whyVisit: "A world-class museum in a gorgeous building -- and it is spectacularly lit at night", cabTip: "Visit during the day for the museum, then return at night for photography of the illuminated facade" },
  ];

  const suggestedItineraries = [
    {
      title: "Day 1 - Jaipur City Hidden Gems",
      duration: "Full Day",
      stops: [
        "7:00 AM - Panna Meena Ka Kund (photography in morning light)",
        "8:00 AM - Amber Fort (before the crowds arrive)",
        "10:30 AM - Jaigarh Fort (world&apos;s largest cannon + views)",
        "12:30 PM - Lunch at a traditional Rajasthani thali restaurant",
        "2:00 PM - Galtaji Monkey Temple (2 hours)",
        "4:30 PM - Albert Hall Museum",
        "6:00 PM - Hawa Mahal area walk + shopping at Johari Bazaar",
        "7:30 PM - Albert Hall night illumination photography",
      ],
    },
    {
      title: "Day 2 - Ethical Encounters & Royal Heritage",
      duration: "Full Day",
      stops: [
        "8:00 AM - Elefantastic Elephant Sanctuary (2-3 hour session)",
        "11:30 AM - Nahargarh Fort (panoramic city views + lunch at cafe)",
        "1:30 PM - Jal Mahal (photo stop at the water palace)",
        "2:30 PM - Samode Palace day visit (high tea + Sheesh Mahal)",
        "5:30 PM - Return to Jaipur",
        "6:30 PM - Chokhi Dhani village experience (dinner + folk culture)",
      ],
    },
    {
      title: "Day 3 - Ghost Forts & Ancient Stepwells",
      duration: "Full Day Trip",
      stops: [
        "6:30 AM - Depart Jaipur for Bhangarh Fort (2 hours drive)",
        "8:30 AM - Explore Bhangarh Fort ruins (1.5 hours)",
        "10:30 AM - Drive to Chand Baori, Abhaneri (45 minutes)",
        "11:15 AM - Explore Chand Baori stepwell (1 hour)",
        "12:30 PM - Lunch at a local dhaba en route back",
        "3:00 PM - Return to Jaipur",
        "4:00 PM - Birla Temple sunset visit",
        "6:00 PM - Dinner at Jaipur&apos;s Old City food stalls",
      ],
    },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Rajasthan Experts", desc: "We know every back road" },
    { icon: Compass, title: "8 Hidden Gems", desc: "Off the tourist trail" },
    { icon: Landmark, title: "Heritage Sites", desc: "Forts, stepwells, palaces" },
    { icon: Star, title: "4.9 Rating", desc: "Google reviews" },
  ];

  const internalLinks = [
    { href: "/sightseeing/jaipur", title: "Jaipur Sightseeing Tours", desc: "All Jaipur attractions" },
    { href: "/jaipur", title: "Jaipur City Hub", desc: "Jaipur cab services" },
    { href: "/places-to-visit-near-jaipur", title: "Places Near Jaipur", desc: "Nearby destinations" },
    { href: "/same-day-jaipur-tour-from-delhi", title: "Same Day Jaipur Tour", desc: "Full day from Delhi" },
    { href: "/delhi-airport-to-jaipur-taxi", title: "Delhi Airport to Jaipur", desc: "Airport transfers" },
    { href: "/jaipur-trip-cost-from-delhi", title: "Jaipur Trip Cost", desc: "Budget breakdown" },
    { href: "/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur", title: "Rajasthan Road Trip", desc: "5-day circuit" },
    { href: "/jaipur-vs-udaipur", title: "Jaipur vs Udaipur", desc: "Which to visit?" },
    { href: "/weekend-getaways-from-jaipur-by-car", title: "Weekend Getaways", desc: "From Jaipur by car" },
    { href: "/rajasthan-desert-circuit-tour", title: "Desert Circuit Tour", desc: "Rajasthan full tour" },
    { href: "/jodhpur-beyond-mehrangarh", title: "Jodhpur Beyond Mehrangarh", desc: "Blue city hidden gems" },
    { href: "/udaipur-beyond-city-palace", title: "Udaipur Beyond City Palace", desc: "Lake city secrets" },
  ];

  const cityName = "Jaipur";
  const landmark = "Hawa Mahal";
  const heroSubtitle = "Stepwells, monkey temples, ghost forts, ethical elephant sanctuaries, and mirror palaces. Discover the Pink City\u2019s secrets beyond the iconic wind palace.";
  const whatsappText = "I want to explore beyond Hawa Mahal in Jaipur";
  const introTitle = "The Pink City Has More Than Pink";
  const introText = <>Most visitors to Jaipur follow the same circuit: Hawa Mahal, City Palace, Amber Fort, and maybe Jantar Mantar. But Jaipur and its surrounding areas hold some of India&apos;s most extraordinary hidden treasures. Beneath the surface of tourist brochures lie <strong>ancient stepwells with impossible geometry</strong>, a haunted ghost city frozen in the 17th century, ethical elephant sanctuaries, and mirror-encrusted palaces that rival Versailles. The Aravalli hills surrounding Jaipur hide monkey temples with natural springs, military forts with the world&apos;s largest cannon, and villages where Rajasthani craft traditions have survived for centuries. As transport specialists who have driven thousands of visitors through Rajasthan, we know these roads intimately. We have watched travelers gasp at Chand Baori&apos;s 3,500 steps, shiver at Bhangarh&apos;s abandoned streets, and tear up while bathing elephants at sanctuaries. This guide is our invitation to explore the Jaipur that lies beyond the postcard -- the one that transforms a good trip into an unforgettable one.</>;
  const introStats = [
    { icon: Landmark, label: "8 Hidden Gems", sub: "Beyond the guidebook", bg: "bg-gradient-to-br from-teal-50 to-cyan-50", iconColor: "text-teal-600" },
    { icon: Compass, label: "3 Day Trips", sub: "Ghost forts & stepwells", bg: "bg-gradient-to-br from-amber-50 to-orange-50", iconColor: "text-amber-600" },
    { icon: Map, label: "3-Day Itinerary", sub: "Complete explorer plan", bg: "bg-gradient-to-br from-cyan-50 to-blue-50", iconColor: "text-cyan-600" },
  ];
  const gemsSubtitle = "Eight extraordinary places around Jaipur that deserve to be on every traveler\u2019s list";
  const itineraryTitle = "Suggested 3-Day Jaipur Explorer Itinerary";
  const itinerarySubtitle = "Go beyond the standard tour -- discover the real Jaipur over three unforgettable days";
  const priceText = <>3-day Jaipur local cab: <strong>&#8377;3,500-4,500</strong> | From Delhi: <strong>&#8377;8,500 sedan</strong> (3-day round trip including day trips)</>;
  const linksTitle = "More Jaipur Guides & Tours";
  const ctaTitle = "Explore the Real Jaipur with Locals";
  const ctaSubtitle = "We show you the Jaipur that guidebooks miss. Stepwells, ghost forts, elephant sanctuaries, and royal palaces.";

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
