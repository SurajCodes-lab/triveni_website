import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, ShoppingBag, Gem, Tag, Landmark, Crown, Percent, IndianRupee } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Delhi Shopping Guide 2026 | Chandni Chowk, Khan Market & More',
  description: 'Delhi shopping guide. Chandni Chowk, Khan Market, Dilli Haat, Sarojini Nagar, Janpath. Designer to street fashion, wedding shopping, spices, electronics. Call 7668570551.',
  keywords: 'delhi shopping guide, shopping in delhi, chandni chowk shopping, khan market delhi, dilli haat, sarojini nagar market, delhi wedding shopping, janpath market',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/delhi-shopping-guide' },
  openGraph: {
    title: 'Delhi Shopping Guide 2026 | Chandni Chowk, Khan Market & More',
    description: 'Complete shopping guide for Delhi. Chandni Chowk, Khan Market, Dilli Haat, Sarojini Nagar. Best markets, price ranges, tips.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/delhi-shopping-guide',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/taj-mahal-hero.jpg', width: 1200, height: 630, alt: 'Delhi Shopping Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delhi Shopping Guide 2026',
    description: 'Chandni Chowk, Khan Market, Dilli Haat, Sarojini Nagar. Best markets & tips.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/taj-mahal-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function DelhiShoppingGuidePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Delhi Shopping Guide", "item": "https://www.trivenicabs.in/delhi-shopping-guide" },
    ],
  };

  const faqData = [
    { question: "What is the best market in Delhi for tourists?", answer: "Dilli Haat is the best curated market for tourists -- a government-run crafts bazaar where artisans from every Indian state sell handicrafts at fixed prices. Chandni Chowk is the ultimate old Delhi experience for textiles, spices, and wedding shopping. Khan Market is upscale with designer boutiques. Janpath has budget-friendly souvenirs." },
    { question: "What should I buy in Chandni Chowk?", answer: "Chandni Chowk has specialized sub-markets: Kinari Bazaar (wedding trimmings, zari), Dariba Kalan (jewelry, silver), Khari Baoli (Asia&apos;s largest spice market), Nai Sarak (stationery, books), Ballimaran (leather, perfumes), and Chawri Bazaar (paper, brass). Each lane specializes in one product category at wholesale prices." },
    { question: "Is Delhi good for wedding shopping?", answer: "Delhi is India&apos;s wedding shopping capital. Chandni Chowk has the widest selection of bridal lehengas, sherwanis, and jewelry at every budget. Shahpur Jat has designer boutiques. South Extension and Greater Kailash have premium showrooms. For budget wedding wear, Lajpat Nagar and Chandni Chowk offer excellent value." },
    { question: "Where can I buy cheap clothes in Delhi?", answer: "Sarojini Nagar is Delhi&apos;s famous export-surplus market with branded clothes at ₹100-500. Janpath has similar deals plus handicrafts. Lajpat Nagar Central Market has affordable ethnic wear. Palika Bazaar (underground at CP) has electronics and accessories. Tibetan Market near CP has winter wear and accessories." },
    { question: "What is the best spice market in Delhi?", answer: "Khari Baoli in Chandni Chowk is Asia&apos;s largest wholesale spice market. Running since the 17th century, it sells every spice imaginable at wholesale prices -- saffron, cardamom, dry fruits, herbs, and exotic spice blends. The aroma alone is worth the visit. Buy pre-packed gift sets for easy travel." },
    { question: "Is bargaining expected in Delhi markets?", answer: "It depends on the market. Bargaining is standard at: Chandni Chowk, Sarojini Nagar, Janpath, Lajpat Nagar, and Palika Bazaar (start at 40-50%). No bargaining at: Khan Market, Select Citywalk, malls, Dilli Haat (mostly fixed), and branded stores. Always ask &apos;last price kya hai?&apos; before committing." },
    { question: "What is Dilli Haat and is it worth visiting?", answer: "Dilli Haat is an open-air crafts bazaar (entry ₹30) with stalls from every Indian state. Artisans rotate every 15 days, so there is always something new. Fixed prices, quality handicrafts, and food stalls from different states. Locations: INA Market and Pitampura. INA location is the most popular and easily accessible." },
    { question: "How do I get around Delhi&apos;s markets?", answer: "Delhi&apos;s markets are spread across the city. Metro covers most major markets (Chandni Chowk, CP, Khan Market, INA for Dilli Haat, Lajpat Nagar). However, carrying shopping bags on metro is inconvenient. A hired cab for the day is ideal -- park at each market, shop comfortably, and store bags in the car between markets." },
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

  const shoppingCategories = [
    {
      name: "Wedding & Bridal Shopping",
      tagline: "India&apos;s Wedding Capital",
      desc: "Delhi is where India comes to shop for weddings. From Chandni Chowk&apos;s Kinari Bazaar (the ultimate bridal trimmings market) to Shahpur Jat&apos;s designer ateliers, the city covers every budget and style. Bridal lehengas, sherwanis, jewelry, trousseau items, and wedding decorations -- Delhi has the country&apos;s widest selection at every price point.",
      items: ["Bridal lehengas (₹5,000-5,00,000+)", "Sherwanis (₹3,000-50,000+)", "Kundan jewelry sets (₹2,000-1,00,000+)", "Wedding trimmings/Kinari (₹200-2,000/m)", "Wedding invitations (₹50-500/piece)", "Trousseau items (varies)"],
      where: "Chandni Chowk (Kinari Bazaar), South Ex, Shahpur Jat, Karol Bagh",
      tip: "For bridal lehengas, start at Chandni Chowk for range and value, then visit South Extension for premium brands. Wedding season (Oct-Feb) has the widest selection but higher prices. Off-season (July-Sept) offers 20-30% discounts.",
      color: "from-purple-600 to-violet-600",
      accent: "purple",
    },
    {
      name: "Spices & Dry Fruits",
      tagline: "Asia&apos;s Largest Spice Market",
      desc: "Khari Baoli in Chandni Chowk is the largest wholesale spice market in Asia -- a 17th-century bazaar where mountains of spices line the narrow lanes. Saffron, cardamom, star anise, turmeric, chili, and every imaginable spice blend. Dry fruits are also available at wholesale prices, sourced from Afghanistan and Kashmir.",
      items: ["Saffron/Kesar (₹200-800/gram)", "Spice gift boxes (₹500-2,000)", "Dry fruit packs (₹500-2,000/kg)", "Whole spice sets (₹200-800)", "Exotic spice blends (₹100-500)", "Tea varieties (₹200-1,000)"],
      where: "Khari Baoli (Chandni Chowk), Gadodia Market, INA Market",
      tip: "Khari Baoli is wholesale -- buy in quantity for best rates. For tourist-friendly pre-packed gift sets, shops at the entrance are more accessible than the deep-market wholesale dealers.",
      color: "from-amber-700 to-orange-700",
      accent: "amber",
    },
    {
      name: "Handicrafts & Souvenirs",
      tagline: "All of India Under One Roof",
      desc: "Delhi is the gateway to Indian handicrafts from every state. Dilli Haat showcases rotating artisans from Kashmir to Kerala. The Central Cottage Industries Emporium on Janpath is a government-run treasure house of Indian crafts. Janpath Market has budget-friendly souvenirs, beads, and accessories for tourists.",
      items: ["Pashmina shawls (₹1,000-50,000)", "Brass items (₹200-5,000)", "Marble crafts (₹300-5,000)", "Textiles by state (₹500-10,000)", "Jewelry (₹200-5,000)", "Wooden crafts (₹200-3,000)"],
      where: "Dilli Haat (INA), Central Cottage Emporium (Janpath), Janpath Market",
      tip: "Central Cottage Industries Emporium has fixed prices and guaranteed authenticity -- it is the best single-stop for Indian handicrafts. Dilli Haat offers a more varied experience with food from every state.",
      color: "from-teal-600 to-cyan-600",
      accent: "teal",
    },
    {
      name: "Fashion & Export Surplus",
      tagline: "Branded at Budget Prices",
      desc: "Delhi&apos;s export-surplus markets are legendary -- international brand clothing at 60-90% off retail prices. Sarojini Nagar is the queen of this category, with stalls piled high with branded export rejects and surplus. Janpath caters to tourists with ethnic fusion wear. Lajpat Nagar combines ethnic and modern fashion.",
      items: ["Export surplus tops (₹100-500)", "Dresses (₹200-800)", "Jeans (₹200-600)", "Ethnic kurtas (₹300-1,500)", "Accessories (₹50-500)", "Footwear (₹200-1,000)"],
      where: "Sarojini Nagar, Janpath, Lajpat Nagar, Tibetan Market",
      tip: "At Sarojini Nagar, check every piece for defects (that is why they are surplus). Go on weekday mornings to avoid insane weekend crowds. The best pieces get picked up early, so early birds get the best selection.",
      color: "from-rose-600 to-pink-600",
      accent: "rose",
    },
    {
      name: "Jewelry & Silver",
      tagline: "From Street to Couture",
      desc: "Delhi&apos;s jewelry market spans from Dariba Kalan&apos;s centuries-old silver lane in Chandni Chowk to high-end designer jewelry in Khan Market and South Extension. Silver jewelry, Kundan, Polki, temple jewelry, oxidized jewelry, and costume jewelry are all available. Dariba Kalan has been Delhi&apos;s jewelry street since Mughal times.",
      items: ["Silver jewelry (₹300-5,000)", "Kundan sets (₹2,000-50,000+)", "Costume jewelry (₹100-1,000)", "Gold jewelry (₹10,000+)", "Temple jewelry (₹500-5,000)", "Oxidized jewelry (₹200-2,000)"],
      where: "Dariba Kalan (Chandni Chowk), Karol Bagh, South Extension, Khan Market",
      tip: "For silver, Dariba Kalan offers the widest selection at weight-based pricing. For designer jewelry, Khan Market and South Extension have curated boutiques. Always check for hallmark certification on gold and silver.",
      color: "from-yellow-600 to-amber-600",
      accent: "yellow",
    },
    {
      name: "Books, Electronics & Specialty",
      tagline: "Delhi&apos;s Niche Markets",
      desc: "Delhi has fascinating niche markets: Daryaganj (Sunday book market with thousands of books at ₹50-200), Nehru Place (electronics at competitive prices), Lajpat Rai Market (electronic components), and Amar Colony (second-hand furniture). Each caters to specific interests at unbeatable prices.",
      items: ["Books (₹50-300 at Daryaganj)", "Electronics accessories (₹100-5,000)", "Camera gear (₹1,000-50,000)", "Computer parts (₹500-50,000)", "Second-hand furniture (varies)", "Music instruments (₹500-50,000)"],
      where: "Daryaganj (Sundays), Nehru Place, Lajpat Rai Market, Amar Colony",
      tip: "Daryaganj Sunday book market is a must-visit for book lovers -- arrive by 10 AM for the best selection. For electronics at Nehru Place, compare prices at multiple shops and always get proper bills with warranty.",
      color: "from-emerald-600 to-green-600",
      accent: "emerald",
    },
  ];

  const marketAreas = [
    { name: "Chandni Chowk", desc: "Delhi&apos;s oldest and most iconic market. A massive bazaar with specialized lanes for spices (Khari Baoli), jewelry (Dariba Kalan), wedding items (Kinari Bazaar), and textiles. Chaotic, crowded, and utterly fascinating. Best reached by metro (Chandni Chowk station).", timings: "10 AM - 8 PM (closed Sundays)", bestFor: "Spices, wedding shopping, jewelry, textiles, street food", vibe: "Historic & overwhelming" },
    { name: "Khan Market", desc: "Delhi&apos;s most upscale shopping destination. Designer boutiques, bookstores (Bahrisons, Full Circle), gourmet restaurants, and curated home decor. One of the most expensive retail streets in the world. Fixed prices, air-conditioned comfort.", timings: "10:30 AM - 8 PM (closed Sundays)", bestFor: "Designer shopping, books, gourmet dining, premium brands", vibe: "Upscale & curated" },
    { name: "Dilli Haat (INA)", desc: "Government-run open-air crafts bazaar with rotating artisans from every Indian state. Entry fee ₹30. Fixed prices on handicrafts, plus food stalls serving cuisine from across India. The single best spot in Delhi for authentic Indian crafts.", timings: "10:30 AM - 9 PM", bestFor: "Pan-Indian handicrafts, state cuisine, souvenirs", vibe: "Cultural & organized" },
    { name: "Sarojini Nagar", desc: "Delhi&apos;s legendary export-surplus market. Stalls piled with branded international clothing at ₹100-500. Incredibly crowded on weekends but the deals are unbeatable. Also has Indian ethnic wear and accessories.", timings: "10 AM - 8:30 PM (closed Mondays)", bestFor: "Budget fashion, export surplus, branded clothes at 80% off", vibe: "Chaotic & thrilling" },
    { name: "Janpath & Connaught Place", desc: "Tourist-friendly market near CP. Janpath has handicraft stalls, ethnic jewelry, and souvenirs. Connaught Place (CP) has the Central Cottage Industries Emporium, Khadi Gramodyog, and modern stores. The Tibetan Market nearby has winter wear and accessories.", timings: "10 AM - 8 PM", bestFor: "Souvenirs, handicrafts, government emporiums, tourist items", vibe: "Tourist-friendly & central" },
  ];

  const bargainingTips = [
    { tip: "Start at 40-50% of the quoted price at Chandni Chowk, Sarojini, and Janpath", icon: Percent },
    { tip: "Compare prices at 2-3 shops in Chandni Chowk before buying spices or jewelry", icon: Tag },
    { tip: "Central Cottage Emporium and Dilli Haat have fixed prices -- use as benchmarks", icon: Shield },
    { tip: "Avoid shops where auto/taxi drivers take you (massive commission shops)", icon: ShoppingBag },
    { tip: "Visit Sarojini Nagar on weekday mornings to avoid weekend stampede crowds", icon: Clock },
    { tip: "At Khari Baoli spice market, buy pre-packed sets if you are a tourist (easier)", icon: Gem },
    { tip: "Bulk buying at any Delhi bazaar gets significantly better per-piece rates", icon: IndianRupee },
    { tip: "Metro is efficient for reaching markets but a cab is better for carrying shopping bags", icon: IndianRupee },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Delhi Experts", desc: "We know every market" },
    { icon: ShoppingBag, title: "Shopping Tours", desc: "Curated market routes" },
    { icon: Shield, title: "No Commission", desc: "We never take shop kickbacks" },
    { icon: Star, title: "4.9 Rating", desc: "Trusted by tourists" },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(3deg); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes pulse-gem { 0%, 100% { box-shadow: 0 0 20px rgba(168,85,247,0.3); } 50% { box-shadow: 0 0 50px rgba(168,85,247,0.6); } }
        @keyframes gradient-shift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes sparkle { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.5); } }
        .glass-card { background: rgba(255,255,255,0.05); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1); }
        .glass-card-light { background: rgba(255,255,255,0.85); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.3); box-shadow: 0 8px 32px rgba(0,0,0,0.06); }
        .shimmer-text { background: linear-gradient(90deg, #a855f7, #f0abfc, #a855f7); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer 3s linear infinite; }
        .hover-lift { transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
        .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 25px 50px -12px rgba(168,85,247,0.25); }
        .card-glow:hover { box-shadow: 0 0 30px rgba(168,85,247,0.15), 0 25px 50px -12px rgba(0,0,0,0.1); }
      ` }} />

      <div className="min-h-screen bg-stone-50">
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-violet-900 to-fuchsia-950" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 15s ease infinite' }} />
          <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px]" style={{ animation: 'float 8s ease-in-out infinite' }} />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-fuchsia-500/15 rounded-full blur-[120px]" style={{ animation: 'float 12s ease-in-out infinite 2s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-violet-400/10 rounded-full blur-[80px]" style={{ animation: 'float 10s ease-in-out infinite 4s' }} />
          <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-purple-300 rounded-full" style={{ animation: 'sparkle 3s ease-in-out infinite' }} />
          <div className="absolute top-[25%] right-[15%] w-3 h-3 bg-fuchsia-300 rounded-full" style={{ animation: 'sparkle 3s ease-in-out infinite 0.5s' }} />
          <div className="absolute bottom-[40%] left-[20%] w-1.5 h-1.5 bg-violet-300 rounded-full" style={{ animation: 'sparkle 3s ease-in-out infinite 1s' }} />
          <div className="absolute top-[50%] right-[25%] w-2.5 h-2.5 bg-amber-300 rounded-full" style={{ animation: 'sparkle 3s ease-in-out infinite 1.5s' }} />
          <div className="absolute bottom-[30%] left-[35%] w-2 h-2 bg-teal-300 rounded-full" style={{ animation: 'sparkle 3s ease-in-out infinite 2s' }} />
          <div className="absolute top-[35%] left-[45%] w-1.5 h-1.5 bg-pink-300 rounded-full" style={{ animation: 'sparkle 3s ease-in-out infinite 2.5s' }} />
          <div className="absolute bottom-[45%] right-[10%] w-2 h-2 bg-purple-200 rounded-full" style={{ animation: 'sparkle 3s ease-in-out infinite 0.8s' }} />
          <div className="absolute top-[60%] left-[8%] w-1.5 h-1.5 bg-fuchsia-200 rounded-full" style={{ animation: 'sparkle 3s ease-in-out infinite 1.8s' }} />

          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-md px-6 py-2.5 rounded-full mb-8 border border-purple-400/30" style={{ animation: 'pulse-gem 3s ease-in-out infinite' }}>
              <Gem className="w-4 h-4 text-purple-300" />
              <span className="text-purple-200 font-semibold text-sm tracking-[0.15em] uppercase">Bazaar &amp; Market Guide</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
              Delhi <span className="shimmer-text">Shopping</span> Guide
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-400/60" />
              <Crown className="w-6 h-6 text-purple-400" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-400/60" />
            </div>
            <p className="text-lg md:text-xl text-purple-100/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              From Chandni Chowk&apos;s Mughal-era bazaars to Khan Market&apos;s designer boutiques. India&apos;s capital has a market for everything at every budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                <Phone className="w-5 h-5" /> Call Now: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want a cab for Delhi shopping tour" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-purple-400/30 hover:bg-white/20 hover:scale-105 transition-all duration-500">
                WhatsApp Us
              </Link>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-purple-950/60 backdrop-blur-2xl border-t border-purple-500/20">
            <div className="max-w-6xl mx-auto px-4 py-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {trustFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/90">
                    <div className="p-2.5 bg-purple-500/20 backdrop-blur-sm rounded-xl border border-purple-400/20"><f.icon className="w-5 h-5 text-purple-300" /></div>
                    <div><div className="font-bold text-sm">{f.title}</div><div className="text-xs text-purple-200/60">{f.desc}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Shopping Categories */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3 text-center">What to Buy in Delhi</h2>
            <p className="text-stone-500 text-center mb-14">The capital city where every Indian craft, cuisine, and culture converges</p>
            <div className="space-y-8">
              {shoppingCategories.map((cat, idx) => (
                <div key={idx} className="glass-card-light rounded-3xl overflow-hidden hover-lift card-glow">
                  <div className={`h-2 bg-gradient-to-r ${cat.color}`} />
                  <div className="p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-3">
                      <h3 className="text-xl font-bold text-stone-800 flex items-center gap-3">
                        <div className={`w-10 h-10 bg-gradient-to-br ${cat.color} rounded-xl flex items-center justify-center shadow-lg`}><Gem className="w-5 h-5 text-white" /></div>
                        {cat.name}
                      </h3>
                      <span className="bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 text-xs font-bold px-4 py-1.5 rounded-full border border-purple-200/50">{cat.tagline}</span>
                    </div>
                    <p className="text-stone-600 mb-6 leading-relaxed">{cat.desc}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-stone-700 text-sm mb-4 flex items-center gap-2"><Tag className="w-4 h-4 text-purple-500" /> Items &amp; Price Ranges</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {cat.items.map((item, i) => (
                            <div key={i} className="bg-gradient-to-r from-purple-50/80 to-violet-50/80 backdrop-blur-sm rounded-xl px-4 py-2.5 text-stone-600 text-sm border border-purple-100/50 hover:border-purple-300/50 hover:shadow-md transition-all duration-300">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-700 text-sm mb-4 flex items-center gap-2"><MapPin className="w-4 h-4 text-purple-500" /> Where to Buy</h4>
                        <p className="text-stone-600 text-sm mb-5">{cat.where}</p>
                        <div className="border-l-4 border-purple-500 bg-purple-50/80 backdrop-blur-sm rounded-xl p-4">
                          <p className="text-purple-800 text-sm"><strong>Local Tip:</strong> {cat.tip}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Areas */}
        <section className="py-20 px-4 bg-gradient-to-b from-purple-950 via-violet-950 to-purple-950">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-3 text-center">Best Shopping Areas in Delhi</h2>
            <p className="text-purple-200/60 text-center mb-14">Five iconic markets spanning Mughal heritage to modern luxury</p>
            <div className="space-y-5">
              {marketAreas.map((m, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-start gap-5">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-xl flex-shrink-0 shadow-lg shadow-purple-500/25">
                      <span className="text-white font-bold text-lg">{idx + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white">{m.name}</h3>
                        <span className="bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 text-purple-200 rounded-full px-3 py-1 text-xs">{m.vibe}</span>
                      </div>
                      <p className="text-white/60 text-sm mb-3 leading-relaxed">{m.desc}</p>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-purple-200 border border-white/10"><Clock className="w-3 h-3 inline mr-1.5" />{m.timings}</span>
                      </div>
                    </div>
                    <div className="md:w-52 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/10 backdrop-blur-sm rounded-xl p-4 flex-shrink-0 border border-purple-400/20">
                      <div className="text-purple-300 text-xs font-bold uppercase tracking-wider mb-1.5">Best For</div>
                      <div className="text-white text-sm font-medium">{m.bestFor}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bargaining Tips */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-3 text-center">Bargaining Tips from Locals</h2>
            <p className="text-stone-500 text-center mb-12">Eight rules that save our tourists money every single day</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {bargainingTips.map((item, i) => (
                <div key={i} className="glass-card-light rounded-2xl p-5 hover-lift card-glow flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/25">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-stone-700 text-sm leading-relaxed pt-1">{item.tip}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Combo */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card-light rounded-3xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-700 via-fuchsia-600 to-purple-700 px-6 py-5" style={{ backgroundSize: '200% auto', animation: 'shimmer 4s linear infinite' }}>
                <h2 className="text-xl font-bold text-white flex items-center gap-2"><ShoppingBag className="w-5 h-5" /> Shopping + Sightseeing Combo</h2>
                <p className="text-purple-100/80 text-sm mt-1">Our drivers take you to genuine shops (we never take commission from any shop)</p>
              </div>
              <div className="p-8">
                <div className="space-y-2.5 mb-6">
                  {[
                    "Morning: Chandni Chowk + Khari Baoli spice market (9:00-11:30 AM)",
                    "Red Fort exterior + Dariba Kalan jewelry shopping (11:30 AM-1:00 PM)",
                    "Lunch at Karim&apos;s or Paranthe Wali Gali (1:00-2:00 PM)",
                    "Dilli Haat crafts bazaar (2:00-3:30 PM)",
                    "Janpath & Central Cottage Emporium (3:30-5:00 PM)",
                    "Sarojini Nagar for fashion deals (5:00-6:30 PM)",
                    "India Gate photo stop + Connaught Place evening walk",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-700 text-sm py-2 px-3 rounded-lg hover:bg-purple-50/50 transition-colors border-b border-purple-100/50 last:border-0">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-5 border border-purple-200/50">
                  <p className="text-purple-800 font-semibold text-sm">Full day shopping cab in Delhi: ₹2,500 (8 hours/80 km) | Airport pickup + shopping day: ₹3,000</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-20 px-4 bg-gradient-to-b from-violet-50 to-stone-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">Shopping in Delhi: India&apos;s Ultimate Market City</h2>
            <div className="glass-card-light rounded-3xl p-8 md:p-10">
              <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-4">
              <p>Delhi is not just India&apos;s capital -- it is the country&apos;s ultimate shopping destination. The city&apos;s markets span seven centuries of commercial history, from Chandni Chowk&apos;s Mughal-era bazaars (built in 1650 by Shah Jahan&apos;s daughter) to contemporary luxury malls. No other Indian city offers this range: you can buy a ₹100 export-surplus top at Sarojini Nagar in the morning and a designer lehenga at Shahpur Jat in the afternoon, all in the same city.</p>
              <p>What makes Delhi shopping uniquely rewarding for tourists is the concentration of pan-Indian products. Dilli Haat brings artisans from every state under one roof. The Central Cottage Industries Emporium stocks certified handicrafts from Kashmir to Kerala. And Chandni Chowk&apos;s specialized lanes offer wholesale prices on everything from spices and jewelry to wedding trimmings and textiles. Delhi is where India&apos;s trade routes converge -- and the savings compared to buying the same products in tourist cities can be substantial.</p>
              <p>A cab is essential for shopping in Delhi. The city&apos;s best markets are spread across different zones -- Old Delhi (Chandni Chowk), Central (CP, Khan Market), and South Delhi (Sarojini, Dilli Haat, Lajpat Nagar). Our Triveni Cabs drivers navigate Delhi&apos;s traffic effortlessly, know the parking spots at every market, and can carry your bags to the car between stops. For tourists arriving at Delhi Airport, we offer a seamless airport pickup combined with a full shopping day before heading to your hotel or onward destination.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 bg-stone-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, idx) => (
                <div key={idx} className="glass-card-light rounded-2xl p-6 hover:border-purple-300/50 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-500">
                  <h3 className="text-lg font-bold text-stone-800 mb-3 flex items-start gap-3">
                    <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-purple-500/20">
                      <Gem className="w-3.5 h-3.5 text-white" />
                    </div>
                    {faq.question}
                  </h3>
                  <p className="text-stone-600 ml-10 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interlinks */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-stone-800 mb-10 text-center">More Delhi & Travel Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: "/sightseeing/delhi", title: "Delhi Sightseeing Tours", desc: "All Delhi attractions" },
                { href: "/delhi", title: "Delhi City Hub", desc: "Delhi cab services" },
                { href: "/airport-service/delhi", title: "Delhi Airport Transfers", desc: "IGI airport cabs" },
                { href: "/same-day-agra-tour-from-delhi", title: "Same Day Agra Tour", desc: "Taj Mahal day trip" },
                { href: "/same-day-jaipur-tour-from-delhi", title: "Same Day Jaipur Tour", desc: "Pink City day trip" },
                { href: "/agra-shopping-guide", title: "Agra Shopping Guide", desc: "Marble inlay & leather" },
                { href: "/jaipur-shopping-guide", title: "Jaipur Shopping Guide", desc: "Gems & block print" },
                { href: "/weekend-getaways-from-delhi-by-car", title: "Weekend Getaways", desc: "Short trips from Delhi" },
                { href: "/golden-triangle-english-speaking-driver", title: "Golden Triangle Tour", desc: "Delhi-Agra-Jaipur" },
                { href: "/shimla-shopping-guide", title: "Shimla Shopping Guide", desc: "Hill station shopping" },
                { href: "/amritsar-shopping-guide", title: "Amritsar Shopping Guide", desc: "Phulkari & dry fruits" },
                { href: "/outstation-cabs", title: "Outstation Cabs", desc: "Inter-city travel" },
              ].map((link, idx) => (
                <Link key={idx} href={link.href} className="glass-card-light rounded-xl p-4 hover:border-purple-400/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 group flex items-center gap-3">
                  <div className="bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 rounded-xl p-2.5 group-hover:from-purple-500/20 group-hover:to-fuchsia-500/20 transition-all"><ChevronRight className="w-4 h-4 text-purple-600" /></div>
                  <div><div className="font-bold text-stone-800 text-sm group-hover:text-purple-700 transition-colors">{link.title}</div><div className="text-xs text-stone-400">{link.desc}</div></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-violet-700 to-fuchsia-800" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 10s ease infinite' }} />
          <div className="absolute top-[20%] left-[15%] w-2 h-2 bg-white/30 rounded-full" style={{ animation: 'sparkle 3s ease-in-out infinite' }} />
          <div className="absolute top-[40%] right-[20%] w-1.5 h-1.5 bg-white/20 rounded-full" style={{ animation: 'sparkle 3s ease-in-out infinite 1s' }} />
          <div className="absolute bottom-[30%] left-[30%] w-2 h-2 bg-white/25 rounded-full" style={{ animation: 'sparkle 3s ease-in-out infinite 2s' }} />
          <div className="absolute top-[60%] right-[35%] w-1.5 h-1.5 bg-white/20 rounded-full" style={{ animation: 'sparkle 3s ease-in-out infinite 0.5s' }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <div style={{ animation: 'pulse-gem 3s ease-in-out infinite' }} className="inline-block mb-6">
              <Gem className="w-14 h-14 text-purple-200" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Need a Delhi Shopping Tour?</h2>
            <p className="text-purple-100/80 mb-10 text-lg max-w-2xl mx-auto">Our drivers know every market in Delhi. No commission, no scams, just the best shopping experience.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-gem 3s ease-in-out infinite' }}>
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want a cab for Delhi shopping tour" className="inline-flex items-center justify-center gap-2 bg-purple-900/40 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border border-purple-400/30 hover:bg-purple-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">
                WhatsApp Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
