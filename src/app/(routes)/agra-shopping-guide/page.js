import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, ShoppingBag, Gem, Tag, Landmark, Crown, Percent, IndianRupee } from '@/components/ui/icons';

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

      <div className="min-h-screen bg-stone-50">
        {/* Mosaic tile pattern */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%23000' stroke-width='0.5'/%3E%3C/svg%3E")` }} />

        {/* Hero - Jewel Bazaar Design */}
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-violet-950 to-fuchsia-950" />
          {/* Jewel-toned glow elements */}
          <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-fuchsia-500/15 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-violet-400/10 rounded-full blur-[80px]" />
          {/* Decorative gem dots */}
          <div className="absolute top-[18%] left-[12%] w-2 h-2 bg-purple-300/50 rounded-full" />
          <div className="absolute top-[28%] right-[18%] w-3 h-3 bg-fuchsia-300/30 rounded-full" />
          <div className="absolute bottom-[35%] left-[22%] w-1.5 h-1.5 bg-violet-300/60 rounded-full" />
          <div className="absolute top-[55%] right-[30%] w-2.5 h-2.5 bg-amber-300/40 rounded-full" />
          <div className="absolute bottom-[22%] left-[40%] w-2 h-2 bg-teal-300/40 rounded-full" />

          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-md px-6 py-2 rounded-full mb-6 border border-purple-400/30">
              <Gem className="w-4 h-4 text-purple-300" />
              <span className="text-purple-200 font-semibold text-sm tracking-[0.15em] uppercase">Bazaar & Market Guide</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight tracking-tight">
              Agra <span className="text-transparent bg-gradient-to-r from-purple-300 via-fuchsia-300 to-amber-300 bg-clip-text">Shopping</span> Guide
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-400/60" />
              <Crown className="w-5 h-5 text-purple-400" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-400/60" />
            </div>
            <p className="text-lg md:text-xl text-purple-100/70 mb-10 max-w-3xl mx-auto leading-relaxed">
              Marble inlay, leather goods, Zardozi embroidery, and handicrafts. A guide to Agra&apos;s best markets by locals who shop here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:scale-105 transition-all">
                <Phone className="w-5 h-5" /> Call Now: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I need help with shopping tour in Agra" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-purple-400/30 hover:bg-white/20 transition-all">
                WhatsApp Us
              </Link>
            </div>
          </div>

          {/* Trust bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-purple-950/80 backdrop-blur-xl border-t border-purple-500/20">
            <div className="max-w-6xl mx-auto px-4 py-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {trustFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/90">
                    <div className="p-2 bg-purple-500/20 rounded-lg"><f.icon className="w-5 h-5 text-purple-300" /></div>
                    <div><div className="font-bold text-sm">{f.title}</div><div className="text-xs text-purple-200/60">{f.desc}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Shopping Categories - Showcase Cards with colored headers */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3 text-center">What to Buy in Agra</h2>
            <p className="text-stone-500 text-center mb-12">Four centuries of craftsmanship, from Mughal courts to your collection</p>
            <div className="space-y-8">
              {shoppingCategories.map((cat, idx) => (
                <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-stone-200 hover:shadow-lg transition-all">
                  {/* Colored header band */}
                  <div className={`bg-gradient-to-r ${cat.color} px-6 py-4`}>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Gem className="w-5 h-5" /> {cat.name}
                      </h3>
                      <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">{cat.tagline}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-stone-600 mb-5">{cat.desc}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold text-stone-700 text-sm mb-3 flex items-center gap-2"><Tag className="w-4 h-4 text-purple-500" /> Items & Price Ranges</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {cat.items.map((item, i) => (
                            <div key={i} className="bg-stone-50 rounded-lg px-3 py-2 text-stone-600 text-sm border border-stone-100">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-700 text-sm mb-3 flex items-center gap-2"><MapPin className="w-4 h-4 text-purple-500" /> Where to Buy</h4>
                        <p className="text-stone-600 text-sm mb-4">{cat.where}</p>
                        <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
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

        {/* Market Areas - Bazaar Stall Cards */}
        <section className="py-16 px-4 bg-gradient-to-b from-purple-950 to-violet-950">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-3 text-center">Best Shopping Areas in Agra</h2>
            <p className="text-purple-200/60 text-center mb-12">Five distinct bazaars, each with its own character and specialty</p>
            <div className="space-y-4">
              {marketAreas.map((m, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white">{m.name}</h3>
                        <span className="bg-purple-500/30 text-purple-200 text-xs px-2.5 py-0.5 rounded-full">{m.vibe}</span>
                      </div>
                      <p className="text-white/60 text-sm mb-3">{m.desc}</p>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="bg-white/10 px-3 py-1 rounded-full text-purple-200"><Clock className="w-3 h-3 inline mr-1" />{m.timings}</span>
                      </div>
                    </div>
                    <div className="md:w-48 bg-purple-500/20 rounded-xl p-3 flex-shrink-0">
                      <div className="text-purple-300 text-xs font-bold uppercase tracking-wider mb-1">Best For</div>
                      <div className="text-white text-sm font-medium">{m.bestFor}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bargaining Tips - Numbered Cards */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-3 text-center">Bargaining Tips from Locals</h2>
            <p className="text-stone-500 text-center mb-10">Eight rules that save our tourists money every single day</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bargainingTips.map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-stone-200 hover:border-purple-300 hover:shadow-md transition-all">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-violet-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-stone-700 text-sm leading-relaxed">{item.tip}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Combine with Sightseeing */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-2xl overflow-hidden border border-purple-200/60">
              <div className="bg-gradient-to-r from-purple-700 to-violet-700 px-6 py-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2"><ShoppingBag className="w-5 h-5" /> Shopping + Sightseeing Combo</h2>
                <p className="text-purple-200 text-sm mt-1">Our drivers take you to genuine shops (we never take commission from any shop)</p>
              </div>
              <div className="p-6">
                <div className="space-y-2 mb-5">
                  {[
                    "Morning: Taj Mahal visit (8:30-10:30 AM)",
                    "Visit marble inlay workshop near Taj (free demonstration)",
                    "Agra Fort visit (11:00 AM-12:30 PM)",
                    "Lunch + Kinari Bazaar shopping (1:00-3:00 PM)",
                    "Sadar Bazaar leather shopping (3:00-4:30 PM)",
                    "Petha & Dalmoth shopping at Noori Gate (4:30-5:30 PM)",
                    "Return to Delhi / hotel drop",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-700 text-sm py-1.5 border-b border-purple-100 last:border-0">
                      <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <div className="bg-purple-100/60 rounded-lg p-4">
                  <p className="text-purple-800 font-medium text-sm">Full day cab for this itinerary: ₹4,500 from Delhi (round trip) or ₹1,500 local Agra</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ - Gem-facet style */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-stone-200 hover:border-purple-300 transition-all">
                  <h3 className="text-lg font-bold text-stone-800 mb-2 flex items-start gap-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Gem className="w-3 h-3 text-purple-600" />
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
            <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">More Agra Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: "/agra-travel-guide", title: "Agra Travel Guide 2026", desc: "Complete city guide" },
                { href: "/agra-food-tour", title: "Agra Food Tour", desc: "Culinary exploration" },
                { href: "/agra-beyond-taj-mahal", title: "Agra Beyond Taj Mahal", desc: "Hidden gems" },
                { href: "/same-day-agra-tour-from-delhi", title: "Same Day Agra Tour", desc: "Full day sightseeing" },
                { href: "/agra-day-trip-from-delhi", title: "Agra Day Trip", desc: "Budget & planning" },
                { href: "/same-day-taj-mahal-tour", title: "Taj Mahal Tour", desc: "Focused Taj visit" },
                { href: "/taj-mahal-tour-from-delhi", title: "Taj Mahal from Delhi", desc: "Private car options" },
                { href: "/sunrise-taj-mahal-tour-from-delhi", title: "Sunrise Taj Tour", desc: "Golden hour experience" },
                { href: "/moonlight-taj-mahal-tour", title: "Moonlight Taj Tour", desc: "Full moon viewing" },
                { href: "/delhi-airport-to-agra-taxi", title: "Delhi Airport to Agra", desc: "Airport transfers" },
                { href: "/sightseeing/agra", title: "Agra Sightseeing Tours", desc: "All Agra attractions" },
                { href: "/agra", title: "Agra City Hub", desc: "Agra cab services" },
              ].map((link, idx) => (
                <Link key={idx} href={link.href} className="flex items-center gap-3 bg-stone-50 p-4 rounded-xl border border-stone-200 hover:border-purple-300 hover:shadow-md transition-all group">
                  <div className="p-2 bg-purple-50 rounded-lg group-hover:bg-purple-100 transition-colors"><ChevronRight className="w-4 h-4 text-purple-600" /></div>
                  <div><div className="font-bold text-stone-800 text-sm group-hover:text-purple-700 transition-colors">{link.title}</div><div className="text-xs text-stone-400">{link.desc}</div></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-violet-700 to-fuchsia-800" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0 L60 30 L30 60 L0 30 Z' fill='none' stroke='%23fff' stroke-width='0.5'/%3E%3C/svg%3E")` }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <Gem className="w-12 h-12 text-purple-200 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Need a Shopping Tour Guide?</h2>
            <p className="text-purple-200/80 mb-8 text-lg">Our drivers know the genuine shops. No commission, no scams, just the best of Agra.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-all">
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I need a shopping tour in Agra" className="inline-flex items-center justify-center gap-2 bg-purple-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-purple-400/30 hover:bg-purple-900/60 transition-all">
                WhatsApp Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
