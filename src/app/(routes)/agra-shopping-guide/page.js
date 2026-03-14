import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, ShoppingBag, Gem, Tag, Landmark, Crown, Percent, IndianRupee } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Agra Shopping Guide 2026 | Marble, Leather & Handicrafts',
  description: 'Agra shopping guide. Marble inlay (Pietra Dura), leather goods, Zardozi embroidery. Sadar, Kinari, Subhash Bazaar. Price ranges & tips. Call 7668570551.',
  keywords: 'agra shopping guide, shopping in agra, agra marble inlay, agra leather market, agra handicrafts, pietra dura agra, agra bazaar',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/agra-shopping-guide' },
  openGraph: {
    title: 'Agra Shopping Guide 2026 | Marble, Leather & More',
    description: 'Complete shopping guide for Agra. Marble inlay, leather, handicrafts. Best markets, price ranges, bargaining tips.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/agra-shopping-guide',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/taj-mahal-hero.jpg', width: 1200, height: 630, alt: 'Agra Shopping Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agra Shopping Guide 2026',
    description: 'Marble inlay, leather, handicrafts. Best markets & bargaining tips.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/taj-mahal-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function AgraShoppingGuidePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Agra Shopping Guide", "item": "https://www.trivenicabs.in/agra-shopping-guide" },
    ],
  };

  const faqData = [
    { question: "What should I buy in Agra?", answer: "Top purchases: Marble inlay items (boxes, coasters, tabletops -- Agra's signature craft), leather goods (shoes, bags, belts), Petha sweets, Dalmoth snacks, Zardozi embroidery, brassware, and Agra carpets. Marble inlay is the most unique Agra souvenir." },
    { question: "How do I avoid marble inlay scams?", answer: "Buy from government emporiums (UP Handloom, Cottage Industries) for guaranteed authenticity. At private shops, check: real marble is cool to touch, inlay should be smooth (not raised), and semi-precious stones should be embedded in marble. Avoid shops that auto-rickshaw drivers take you to -- they get 40-50% commission added to your price." },
    { question: "What are typical marble inlay prices?", answer: "Small coasters: ₹200-500. Jewelry boxes: ₹500-2,000. Small plates: ₹800-3,000. Table tops (12 inch): ₹3,000-8,000. Larger pieces: ₹10,000+. Genuine pieces with semi-precious stones cost more. Factory-made copies are cheaper but lack craftsmanship." },
    { question: "Where is the best leather market in Agra?", answer: "Hari Parbat area is the main leather market with wholesale and retail shops. Sadar Bazaar also has many leather shops. Agra produces high-quality leather at prices 40-60% less than Delhi/Mumbai. Check the leather quality and stitching before buying." },
    { question: "Is bargaining expected in Agra markets?", answer: "Yes, bargaining is standard practice in bazaars and private shops. Start at 40-50% of the quoted price and settle around 60-70%. Fixed-price shops and government emporiums do not offer bargaining. Marble inlay shops near Taj can quote 3-5x the fair price to tourists." },
    { question: "What are the best shopping areas in Agra?", answer: "Sadar Bazaar (general shopping, leather), Kinari Bazaar (traditional crafts, fabrics), Subhash Bazaar (marble inlay, handicrafts), Hari Parbat (leather goods), and the area near Taj Mahal (tourist shops, marble inlay showrooms). Government emporiums are on MG Road." },
    { question: "Can I watch marble inlay being made?", answer: "Yes! Many workshops near the Taj Mahal offer free demonstrations of the Pietra Dura technique. Watch artisans cut and inlay semi-precious stones into marble. This is genuine -- the workshops are centuries-old family businesses. Just be aware they will try to sell you pieces afterwards." },
    { question: "How do I ship large marble items home?", answer: "Most marble shops offer shipping services (domestic and international). They pack items in wooden crates with foam padding. Get a receipt with shop details. For international shipping, they handle customs documentation. Typical shipping: ₹500-2,000 domestic, varies for international." },
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
      name: "Marble Inlay (Pietra Dura)",
      tagline: "Agra's Crown Jewel",
      desc: "Agra is the world capital of Pietra Dura -- the same technique used in the Taj Mahal. Artisans cut semi-precious stones (lapis lazuli, malachite, mother of pearl, turquoise) and inlay them into white marble to create intricate floral and geometric patterns. This craft has been passed down for centuries since Mughal times.",
      items: ["Coasters (₹200-500)", "Jewelry boxes (₹500-2,000)", "Decorative plates (₹800-3,000)", "Table tops (₹3,000-50,000+)", "Miniature Taj replicas (₹500-5,000)", "Photo frames (₹500-1,500)"],
      where: "Subhash Bazaar, Taj Mahal area shops, Government emporiums",
      tip: "Visit a workshop to see artisans work. Buy from government emporiums for guaranteed quality, or directly from workshop families for better prices.",
      color: "from-purple-600 to-violet-600",
      accent: "purple",
    },
    {
      name: "Leather Goods",
      tagline: "40-60% Cheaper Than Metro Cities",
      desc: "Agra is one of India's largest leather processing centers. You will find shoes, sandals, bags, belts, wallets, and jackets at prices 40-60% lower than Delhi or Mumbai. Both traditional and modern designs available.",
      items: ["Leather shoes (₹500-3,000)", "Handbags (₹800-5,000)", "Belts (₹200-1,000)", "Wallets (₹300-1,500)", "Jackets (₹3,000-15,000)", "Sandals/Juttis (₹200-1,000)"],
      where: "Hari Parbat, Sadar Bazaar, Shoe Market",
      tip: "Check stitching and leather quality. Smell test -- genuine leather has a distinct natural smell. Hari Parbat has the widest selection.",
      color: "from-amber-700 to-orange-700",
      accent: "amber",
    },
    {
      name: "Zardozi Embroidery",
      tagline: "Mughal-Era Gold Thread Art",
      desc: "Agra Zardozi is gold and silver thread embroidery on fabric -- a Mughal-era art form. Find beautifully embroidered sarees, kurtas, dupattas, cushion covers, and wall hangings. Traditional designs feature floral and paisley motifs.",
      items: ["Embroidered sarees (₹2,000-20,000)", "Kurtas (₹1,000-5,000)", "Dupattas (₹500-3,000)", "Cushion covers (₹300-1,500)", "Wall hangings (₹1,000-10,000)"],
      where: "Kinari Bazaar, Subhash Bazaar, emporiums",
      tip: "Real Zardozi uses metal thread (heavier, shinier). Machine-made copies are lighter and cheaper. Ask to see both to understand the difference.",
      color: "from-yellow-600 to-amber-600",
      accent: "yellow",
    },
    {
      name: "Handicrafts & Brassware",
      tagline: "Mughal-Inspired Decorative Arts",
      desc: "Agra produces a variety of handicrafts including brass lamps, copper items, wooden carvings, and decorative pieces. Many designs are inspired by Mughal architecture and Taj Mahal motifs.",
      items: ["Brass lamps/lanterns (₹500-5,000)", "Decorative boxes (₹200-1,000)", "Wooden carvings (₹300-3,000)", "Copper items (₹500-5,000)", "Agra jewelry (₹200-2,000)"],
      where: "Kinari Bazaar, Sadar Bazaar, tourist shops",
      tip: "Brass items are heavy -- consider shipping. Copper items require polishing maintenance. Wooden items are lighter for carry-on.",
      color: "from-teal-600 to-cyan-600",
      accent: "teal",
    },
  ];

  const marketAreas = [
    { name: "Sadar Bazaar", desc: "Agra's main commercial market. Multi-story shops, street vendors, and established stores. Best for leather goods, clothing, and general shopping. Very bustling, especially in evenings.", timings: "10 AM - 9 PM (closed Sundays)", bestFor: "Leather, clothing, general shopping, street food", vibe: "Bustling & authentic" },
    { name: "Subhash Bazaar", desc: "Traditional market known for marble inlay workshops and showrooms. Many shops run by families who have practiced Pietra Dura for generations. Less touristy than Taj-area shops.", timings: "10 AM - 8 PM", bestFor: "Marble inlay, handicrafts, genuine artisan work", vibe: "Artisanal & traditional" },
    { name: "Kinari Bazaar", desc: "Old city market near Jama Masjid. Famous for traditional fabrics, Zardozi embroidery, jewelry, and spices. Narrow lanes with colorful shops. An authentic Agra experience.", timings: "10 AM - 8 PM (half day Fridays)", bestFor: "Zardozi, fabrics, traditional jewelry, spices", vibe: "Colorful & heritage" },
    { name: "Taj Mahal Complex Shops", desc: "Tourist-oriented shops near Taj gates. Marble inlay, souvenirs, and handicrafts. Prices are higher but quality can be good. Good for quick souvenir shopping if short on time.", timings: "8 AM - 7 PM", bestFor: "Souvenirs, quick marble purchases, tourist items", vibe: "Convenient & tourist-friendly" },
    { name: "Government Emporiums (MG Road)", desc: "UP Handloom, Cottage Industries Emporium, and other government-run shops. Fixed prices, guaranteed quality, no bargaining needed. Best for authentic marble inlay and handicrafts.", timings: "10 AM - 7 PM (closed Sundays)", bestFor: "Guaranteed authentic marble, handicrafts, gifts", vibe: "Reliable & fixed-price" },
  ];

  const bargainingTips = [
    { tip: "Start at 40-50% of the quoted price in bazaars", icon: Percent },
    { tip: "Compare prices at 2-3 shops before buying", icon: Tag },
    { tip: "Government emporiums have fixed prices -- use these as benchmarks", icon: Shield },
    { tip: "Do not let auto-rickshaw/taxi drivers take you to shops (they get 40% commission added to your price)", icon: ShoppingBag },
    { tip: "Morning shoppers often get better prices than evening crowds", icon: Clock },
    { tip: "Bulk purchases get better discounts -- buy multiple items from one shop", icon: IndianRupee },
    { tip: "Ask to see the making process at marble workshops -- genuine artisans are proud to show", icon: Gem },
    { tip: "Cash payments may get you 5-10% additional discount at some shops", icon: IndianRupee },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Agra Locals", desc: "We know every market" },
    { icon: ShoppingBag, title: "Shopping Experts", desc: "Genuine shop recommendations" },
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
              Agra <span className="shimmer-text">Shopping</span> Guide
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-400/60" />
              <Crown className="w-6 h-6 text-purple-400" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-400/60" />
            </div>
            <p className="text-lg md:text-xl text-purple-100/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              Marble inlay, leather goods, Zardozi embroidery, and handicrafts. A guide to Agra&apos;s best markets by locals who shop here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                <Phone className="w-5 h-5" /> Call Now: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I need help with shopping tour in Agra" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-purple-400/30 hover:bg-white/20 hover:scale-105 transition-all duration-500">
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
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3 text-center">What to Buy in Agra</h2>
            <p className="text-stone-500 text-center mb-14">Four centuries of craftsmanship, from Mughal courts to your collection</p>
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
            <h2 className="text-3xl font-bold text-white mb-3 text-center">Best Shopping Areas in Agra</h2>
            <p className="text-purple-200/60 text-center mb-14">Five distinct bazaars, each with its own character and specialty</p>
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
                    "Morning: Taj Mahal visit (8:30-10:30 AM)",
                    "Visit marble inlay workshop near Taj (free demonstration)",
                    "Agra Fort visit (11:00 AM-12:30 PM)",
                    "Lunch + Kinari Bazaar shopping (1:00-3:00 PM)",
                    "Sadar Bazaar leather shopping (3:00-4:30 PM)",
                    "Petha &amp; Dalmoth shopping at Noori Gate (4:30-5:30 PM)",
                    "Return to Delhi / hotel drop",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-700 text-sm py-2 px-3 rounded-lg hover:bg-purple-50/50 transition-colors border-b border-purple-100/50 last:border-0">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-5 border border-purple-200/50">
                  <p className="text-purple-800 font-semibold text-sm">Full day cab for this itinerary: &#8377;4,500 from Delhi (round trip) or &#8377;1,500 local Agra</p>
                </div>
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
            <h2 className="text-2xl font-bold text-stone-800 mb-10 text-center">More Agra Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: "/agra-travel-guide", title: "Agra Travel Guide 2026", desc: "Complete city guide" },
                { href: "/agra-food-tour", title: "Agra Food Tour", desc: "Culinary exploration" },
                { href: "/agra-beyond-taj-mahal", title: "Agra Beyond Taj Mahal", desc: "Hidden gems" },
                { href: "/same-day-agra-tour-from-delhi", title: "Same Day Agra Tour", desc: "Full day sightseeing" },
                { href: "/agra-day-trip-from-delhi", title: "Agra Day Trip", desc: "Budget &amp; planning" },
                { href: "/same-day-taj-mahal-tour", title: "Taj Mahal Tour", desc: "Focused Taj visit" },
                { href: "/taj-mahal-tour-from-delhi", title: "Taj Mahal from Delhi", desc: "Private car options" },
                { href: "/sunrise-taj-mahal-tour-from-delhi", title: "Sunrise Taj Tour", desc: "Golden hour experience" },
                { href: "/moonlight-taj-mahal-tour", title: "Moonlight Taj Tour", desc: "Full moon viewing" },
                { href: "/delhi-airport-to-agra-taxi", title: "Delhi Airport to Agra", desc: "Airport transfers" },
                { href: "/sightseeing/agra", title: "Agra Sightseeing Tours", desc: "All Agra attractions" },
                { href: "/agra", title: "Agra City Hub", desc: "Agra cab services" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Need a Shopping Tour Guide?</h2>
            <p className="text-purple-100/80 mb-10 text-lg max-w-2xl mx-auto">Our drivers know the genuine shops. No commission, no scams, just the best of Agra.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-gem 3s ease-in-out infinite' }}>
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I need a shopping tour in Agra" className="inline-flex items-center justify-center gap-2 bg-purple-900/40 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border border-purple-400/30 hover:bg-purple-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">
                WhatsApp Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
