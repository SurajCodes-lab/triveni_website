import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, Camera, Landmark, Compass, Calendar, Bird, Binoculars, Map, Target } from '@/components/ui/icons';

export const metadata = {
  title: 'Amritsar Beyond Golden Temple | Hidden Gems & Heritage | 2026',
  description: 'Discover Amritsar beyond the Golden Temple. Gobindgarh Fort, Maharaja Ranjit Singh Museum, Pul Kanjri, Sadda Pind, Durgiana Temple + more. Call 7668570551.',
  keywords: 'amritsar beyond golden temple, amritsar hidden gems, gobindgarh fort, pul kanjri, sadda pind, amritsar heritage walk, durgiana temple, amritsar offbeat',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/amritsar-beyond-golden-temple' },
  openGraph: {
    title: 'Amritsar Beyond Golden Temple | Hidden Gems & Heritage 2026',
    description: 'Discover what Amritsar has beyond the Golden Temple. Forts, museums, heritage villages, temples. Complete guide by locals.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/amritsar-beyond-golden-temple',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/amritsar-hero.jpg', width: 1200, height: 630, alt: 'Amritsar Beyond Golden Temple' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amritsar Beyond Golden Temple | Hidden Gems',
    description: 'Forts, heritage villages, walled city walks, and Sikh history. By Amritsar locals.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/amritsar-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function AmritsarBeyondGoldenTemplePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Amritsar Beyond Golden Temple", "item": "https://www.trivenicabs.in/amritsar-beyond-golden-temple" },
    ],
  };

  const faqData = [
    { question: "What can I see in Amritsar besides the Golden Temple?", answer: "Amritsar has incredible hidden gems: Gobindgarh Fort (restored Sikh fortress), Maharaja Ranjit Singh Museum, Ram Tirath Mandir, Pul Kanjri (heritage village), Sadda Pind (cultural village), Durgiana Temple (Hindu temple), Ram Bagh Gardens, and the Heritage Walk through the Walled City." },
    { question: "What is Gobindgarh Fort?", answer: "Gobindgarh Fort is a beautifully restored 18th-century Sikh fortress in the heart of Amritsar. Once the treasury of Maharaja Ranjit Singh, it now features immersive shows, a war museum, galleries, and cultural performances. The evening sound-and-light show is spectacular. Entry fees start at around 200." },
    { question: "Is the Amritsar Heritage Walk worth doing?", answer: "Absolutely! The Heritage Walk through the Walled City takes you through centuries-old havelis, narrow bazaars, Sikh and Hindu temples, and the vibrant Katra Jaimal Singh market. It reveals the authentic Amritsar that most tourists miss. Best done early morning. Our drivers can drop you at the start point." },
    { question: "What is Sadda Pind?", answer: "Sadda Pind is a recreated traditional Punjabi village near Amritsar where you can experience rural Punjabi life -- bullock carts, traditional cooking, folk music, bhangra dance, and Punjabi games. It includes a full Punjabi meal. A fun experience for families and anyone wanting to understand Punjabi culture." },
    { question: "What is Pul Kanjri?", answer: "Pul Kanjri is a heritage village about 25 km from Amritsar, built by Maharaja Ranjit Singh. It features a historic gurudwara, baoli (stepwell), and the remains of a beautiful garden complex. It was a resting place on the route to Lahore and is now a peaceful heritage site with restored architecture." },
    { question: "Is Durgiana Temple worth visiting?", answer: "Yes! Durgiana Temple (also called Lakshmi Narayan Temple) is a stunning Hindu temple that architecturally mirrors the Golden Temple, with a sacred pool and gold-plated dome. It is dedicated to Goddess Durga and has a beautiful Hanuman shrine. Much less crowded than the Golden Temple." },
    { question: "How many days do I need for Amritsar beyond the main sights?", answer: "1 day covers the Golden Temple + Jallianwala Bagh + Wagah Border. 2 days lets you add Gobindgarh Fort, Durgiana Temple, Ram Bagh, and the Heritage Walk. 3 days adds Pul Kanjri, Sadda Pind, and food exploration. Our 3-day itinerary is perfect for deep immersion." },
    { question: "What is Ram Bagh Gardens?", answer: "Ram Bagh is a historic Mughal-style garden built by Maharaja Ranjit Singh as a summer palace. It now houses the Maharaja Ranjit Singh Museum, with the Lion of Punjab&apos;s weapons, paintings, coins, and royal artifacts. The garden itself is a peaceful retreat from the busy city." },
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
    { name: "Gobindgarh Fort", desc: "A magnificently restored 18th-century Sikh fortress that once held the treasury of the Sikh Empire. The fort now features immersive 7D shows, a warfare museum, cultural galleries, live performances, and a stunning sound-and-light show after sunset. It tells the story of Punjab&apos;s warrior heritage.", distance: "2 km from Golden Temple", timing: "10 AM - 10 PM; evening show at 7:30 PM", whyVisit: "A world-class heritage experience inside a real Sikh fortress -- the evening show is unmissable", cabTip: "Walking distance from the Golden Temple; our cab can wait while you explore for 2-3 hours" },
    { name: "Maharaja Ranjit Singh Museum", desc: "Housed in the beautiful Ram Bagh Gardens (the summer palace of the Lion of Punjab), this museum showcases weapons, paintings, manuscripts, and personal artifacts of Maharaja Ranjit Singh. The Mughal-style gardens surrounding it are among the most peaceful spaces in Amritsar.", distance: "3 km from Golden Temple", timing: "10 AM - 5 PM (closed Mondays)", whyVisit: "Walk through the personal history of the Lion of Punjab in his own summer palace", cabTip: "Combine with Gobindgarh Fort for a complete Sikh Empire heritage day" },
    { name: "Ram Tirath Mandir", desc: "An ancient Hindu pilgrimage site believed to be the ashram of Maharishi Valmiki, where Goddess Sita lived during her exile and where Luv and Kush were born. The temple complex hosts a massive annual fair in November. The sacred tank and ancient temple atmosphere are deeply moving.", distance: "11 km from Golden Temple", timing: "5 AM - 9 PM daily; November fair is the highlight", whyVisit: "One of the Ramayana&apos;s most important sites -- where Luv and Kush were born", cabTip: "A quick 20-minute drive; combine with Sadda Pind which is on the same route" },
    { name: "Pul Kanjri (Heritage Village)", desc: "A restored heritage village built by Maharaja Ranjit Singh on the historic route to Lahore. Features a beautiful baoli (stepwell), gurudwara, sarai (rest house), and the remains of a pleasure garden. The site has been carefully restored and tells the story of the great Sikh ruler&apos;s compassion.", distance: "25 km from Golden Temple", timing: "8 AM - 6 PM daily", whyVisit: "A beautifully restored Sikh-era village with a fascinating story of Maharaja Ranjit Singh&apos;s kindness", cabTip: "Near the Wagah Border; visit on the same trip as the border ceremony" },
    { name: "Sadda Pind (Cultural Village)", desc: "A recreated traditional Punjabi village where you experience authentic rural Punjab -- mud houses, bullock carts, folk music, bhangra performances, traditional games, and a lavish Punjabi meal cooked on earthen stoves. The village captures the warmth and vibrancy of Punjabi culture in one immersive experience.", distance: "8 km from Golden Temple", timing: "11 AM - 11 PM daily; book in advance", whyVisit: "The most fun cultural experience in Amritsar -- dance bhangra, eat dal makhani, and live like a Punjabi", cabTip: "Our driver can wait while you enjoy the 3-4 hour experience; great for families" },
    { name: "Durgiana Temple", desc: "A stunning Hindu temple architecturally modeled after the Golden Temple, with its own sacred pool and gleaming gold-plated dome. Dedicated to Goddess Durga, it also features a beautiful Sitla Mata shrine and a tree said to have been planted by Guru Nanak. The adjacent Baba Atal tower is equally impressive.", distance: "1 km from Golden Temple", timing: "5 AM - 9 PM daily", whyVisit: "A golden-domed temple as beautiful as Harmandir Sahib but with almost no tourists", cabTip: "Walking distance from the Golden Temple; include it in your ghat-area walking tour" },
    { name: "Ram Bagh Gardens", desc: "A Mughal-style garden built by Maharaja Ranjit Singh as his summer palace, with beautiful pavilions, fountains, and tree-lined walkways. Beyond the museum, the gardens themselves are a peaceful retreat where locals come to relax. The Sikh-era architecture is beautifully maintained.", distance: "3 km from Golden Temple", timing: "6 AM - 8 PM daily; museum closes at 5 PM", whyVisit: "The most peaceful green space in Amritsar -- a royal garden where the Lion of Punjab relaxed", cabTip: "Just 10 minutes from the Golden Temple; perfect for a morning walk before sightseeing" },
    { name: "Heritage Walk in Walled City", desc: "The old walled city of Amritsar is a labyrinth of narrow lanes hiding centuries-old havelis with ornate wooden balconies, tiny Sikh and Hindu temples, vibrant bazaars, and traditional katras (merchant neighborhoods). Katra Jaimal Singh and the heritage streets reveal the city&apos;s Mughal and Sikh past.", distance: "Starts from Golden Temple area", timing: "Best at 6-9 AM before shops open and crowds build", whyVisit: "See the real Amritsar that exists behind the famous Golden Temple -- centuries-old lanes and havelis", cabTip: "Our driver drops you at the start; walk through the old city and get picked up on the other side" },
  ];

  const suggestedItineraries = [
    {
      title: "Day 1 - Sikh Empire Heritage",
      duration: "Full Day",
      stops: [
        "6:00 AM - Golden Temple sunrise darshan",
        "8:30 AM - Breakfast: Kulche-Chole at Bharawan Da Dhaba",
        "9:30 AM - Gobindgarh Fort (2-3 hours)",
        "12:30 PM - Maharaja Ranjit Singh Museum at Ram Bagh",
        "2:00 PM - Lunch: Amritsari fish fry at Makhan Fish Corner",
        "3:30 PM - Jallianwala Bagh memorial",
        "5:00 PM - Drive to Wagah Border ceremony (5:30 PM)",
        "7:30 PM - Gobindgarh Fort evening sound-and-light show",
      ],
    },
    {
      title: "Day 2 - Temples, Villages & Culture",
      duration: "Full Day",
      stops: [
        "6:00 AM - Heritage Walk through the Walled City (2 hours)",
        "8:30 AM - Breakfast in the old city lanes",
        "9:30 AM - Durgiana Temple visit",
        "11:00 AM - Ram Tirath Mandir (ancient Ramayana site)",
        "1:00 PM - Lunch at Kesar Da Dhaba (since 1916)",
        "2:30 PM - Sadda Pind cultural village (3-4 hours)",
        "6:30 PM - Evening at Golden Temple (dinner at Langar Hall)",
      ],
    },
    {
      title: "Day 3 - Heritage Route & Food Trail",
      duration: "Half Day + Food",
      stops: [
        "8:00 AM - Drive to Pul Kanjri heritage village (30 min)",
        "9:00 AM - Explore Pul Kanjri: baoli, gurudwara, gardens",
        "11:00 AM - Return to Amritsar",
        "11:30 AM - Partition Museum at Town Hall",
        "1:30 PM - Amritsar food trail: lassi, kulfi, papad warian",
        "3:00 PM - Shopping at Hall Bazaar (phulkari, juttis)",
        "5:00 PM - Final visit to Golden Temple at sunset",
      ],
    },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Punjab Experts", desc: "We know every gali" },
    { icon: Compass, title: "8 Hidden Gems", desc: "Beyond the tourist path" },
    { icon: Landmark, title: "Sikh Heritage", desc: "Forts, museums, villages" },
    { icon: Star, title: "4.9 Rating", desc: "Google reviews" },
  ];

  const internalLinks = [
    { href: "/sightseeing/amritsar", title: "Amritsar Sightseeing Tours", desc: "All Amritsar attractions" },
    { href: "/amritsar", title: "Amritsar City Hub", desc: "Amritsar cab services" },
    { href: "/delhi-airport-to-amritsar-taxi", title: "Delhi to Amritsar Taxi", desc: "Airport transfers" },
    { href: "/baisakhi-amritsar-cab", title: "Baisakhi Amritsar Cab", desc: "Festival transport" },
    { href: "/same-day-amritsar-from-chandigarh", title: "Amritsar from Chandigarh", desc: "Same day trip" },
    { href: "/places-to-visit-near-chandigarh", title: "Places Near Chandigarh", desc: "Nearby destinations" },
    { href: "/shimla-beyond-mall-road", title: "Shimla Beyond Mall Road", desc: "Hill station hidden gems" },
    { href: "/10-day-north-india-road-trip", title: "North India Road Trip", desc: "10-day grand tour" },
    { href: "/outstation-cabs", title: "Outstation Cabs", desc: "Inter-city travel" },
    { href: "/religious-tours", title: "Religious Tours", desc: "All pilgrimage options" },
    { href: "/one-way-cab", title: "One Way Cab", desc: "Point-to-point travel" },
    { href: "/round-trip-cab", title: "Round Trip Cab", desc: "Return journey deals" },
  ];

  const cityName = "Amritsar";
  const landmark = "Golden Temple";
  const heroSubtitle = "Sikh fortresses, heritage villages, walled city walks, Punjabi cultural experiences, and temples of gold. Discover Amritsar&apos;s warrior soul beyond the sacred pool.";
  const whatsappText = "I want to explore beyond Golden Temple in Amritsar";
  const introTitle = "The Holy City Is Also a Warrior City";
  const introText = <>Most visitors to Amritsar see the Golden Temple, visit Jallianwala Bagh, catch the Wagah Border ceremony, and leave. But Amritsar is the <strong>heart of the Sikh Empire</strong>, and its heritage runs far deeper than one sacred pool. Gobindgarh Fort, once Maharaja Ranjit Singh&apos;s treasury, has been magnificently restored into a world-class heritage experience. The walled city hides centuries-old havelis with carved wooden balconies, tiny temples, and vibrant katras where Amritsar&apos;s trading history comes alive. Beyond the city limits, Pul Kanjri preserves a beautiful Sikh-era heritage village on the historic road to Lahore. At Sadda Pind, you can <strong>dance bhangra, eat from earthen stoves, and ride bullock carts</strong> in a recreated Punjabi village. Durgiana Temple mirrors the Golden Temple&apos;s architecture for Hindu devotees, while Ram Tirath Mandir connects to the ancient Ramayana. As Punjab transport specialists, we know this city&apos;s every lane and legend. This guide reveals the Amritsar that lies beyond the famous golden dome -- the warrior heritage, cultural warmth, and hidden corners that make Punjab truly unforgettable.</>;
  const introStats = [
    { icon: Landmark, label: "8 Hidden Gems", sub: "Beyond the Golden Temple", bg: "bg-gradient-to-br from-teal-50 to-cyan-50", iconColor: "text-teal-600" },
    { icon: Compass, label: "Sikh Heritage", sub: "Forts & museums", bg: "bg-gradient-to-br from-amber-50 to-orange-50", iconColor: "text-amber-600" },
    { icon: Map, label: "3-Day Itinerary", sub: "Complete Punjab plan", bg: "bg-gradient-to-br from-cyan-50 to-blue-50", iconColor: "text-cyan-600" },
  ];
  const gemsSubtitle = "Eight extraordinary places in and around Amritsar that go beyond the famous Golden Temple";
  const itineraryTitle = "Suggested 3-Day Amritsar Explorer Itinerary";
  const itinerarySubtitle = "Go beyond the Golden Temple -- discover the warrior heart and cultural soul of Punjab";
  const priceText = <>3-day Amritsar local cab: <strong>&#8377;3,000-4,000</strong> | From Delhi: <strong>&#8377;9,500 sedan</strong> (3-day round trip)</>;
  const linksTitle = "More Amritsar Guides & Tours";
  const ctaTitle = "Explore the Real Amritsar with Locals";
  const ctaSubtitle = "We show you the Amritsar that guidebooks miss. Sikh forts, heritage villages, walled city walks, and Punjabi culture.";

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
