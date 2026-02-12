import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, ShoppingBag, Gem, Tag, Landmark, Crown, Percent, IndianRupee } from '@/components/ui/icons';

export const metadata = {
  title: 'Jodhpur Shopping Guide 2026 | Bandhani, Spices & Antiques',
  description: 'Jodhpur shopping guide. Bandhani textiles, antique furniture, spices, mojaris, lacquer bangles. Sardar Market, Clock Tower Bazaar, Tripolia Bazaar. Call 7668570551.',
  keywords: 'jodhpur shopping guide, shopping in jodhpur, sardar market jodhpur, clock tower bazaar, jodhpur spices, jodhpur bandhani, jodhpur antique furniture, jodhpur handicrafts',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/jodhpur-shopping-guide' },
  openGraph: {
    title: 'Jodhpur Shopping Guide 2026 | Bandhani, Spices & Antiques',
    description: 'Complete shopping guide for Jodhpur. Bandhani, spices, antique furniture, mojaris. Best markets, price ranges, bargaining tips.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/jodhpur-shopping-guide',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/taj-mahal-hero.jpg', width: 1200, height: 630, alt: 'Jodhpur Shopping Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jodhpur Shopping Guide 2026',
    description: 'Bandhani textiles, spices, antique furniture. Best markets & bargaining tips.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/taj-mahal-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function JodhpurShoppingGuidePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Jodhpur Shopping Guide", "item": "https://www.trivenicabs.in/jodhpur-shopping-guide" },
    ],
  };

  const faqData = [
    { question: "What is the best thing to buy in Jodhpur?", answer: "Jodhpur is famous for its spices (especially Mirchi Vada masala and Rajasthani spice mixes), Bandhani textiles, antique and reproduction furniture, lacquer bangles, Rajasthani mojaris (juttis), and traditional handicrafts. The spice market near Clock Tower is world-renowned and a must-visit for every tourist." },
    { question: "What spices should I buy in Jodhpur?", answer: "Top spice buys: Rajasthani red chili powder (Mathania variety -- mild but flavorful), Mirchi Vada masala, Dal-Bati-Churma masala, Ker-Sangri masala, saffron (cheaper than elsewhere), turmeric, cumin, coriander, and garam masala blends. MV Spices and Mohanlal Verhomal (near Clock Tower) are the most trusted names." },
    { question: "Is Jodhpur good for antique furniture?", answer: "Yes, Jodhpur is India&apos;s largest exporter of vintage and reproduction furniture. The furniture market on Airport Road and near the industrial area has warehouses full of restored colonial-era furniture, carved doors, window frames, and decorative pieces. They ship domestically and internationally. Prices are 50-70% lower than Delhi or export prices." },
    { question: "Where is the best market in Jodhpur?", answer: "Sardar Market (around Clock Tower) is the main shopping hub -- a vibrant bazaar selling spices, textiles, handicrafts, and souvenirs. Tripolia Bazaar has Bandhani and lac bangles. Mochi Bazaar specializes in leather mojaris. The furniture market on Airport Road is for antique and reproduction furniture. Nai Sarak has modern shopping." },
    { question: "Is bargaining expected in Jodhpur?", answer: "Yes, bargaining is standard in all bazaars. Start at 40-50% of the quoted price. For spices, compare prices at 2-3 shops near Clock Tower. For furniture, negotiate firmly as margins are healthy. Fixed-price options: government emporiums (Rajasthali) and branded stores. Spice shops near Clock Tower are competitive due to tourism." },
    { question: "What are Jodhpur lacquer bangles?", answer: "Jodhpur (and nearby Jaipur) produce distinctive lacquer bangles -- colorful bangles made from lac resin embedded with mirrors, glass, and rhinestones. They are shaped over open flame by skilled artisans. Tripolia Bazaar is the main bangle market. Prices: ₹30-200 per set. They make lightweight, affordable souvenirs." },
    { question: "What textiles should I buy in Jodhpur?", answer: "Jodhpur specializes in Bandhani (tie-dye) and Leheriya textiles in vibrant desert colors. Marwar-region Bandhani features bolder patterns than Jaipur. Also look for Jodhpuri coats (bandh-gala), embroidered fabrics, and mirror-work textiles. Sardar Market and Tripolia Bazaar have the widest selection." },
    { question: "Can I ship furniture from Jodhpur?", answer: "Yes, most furniture dealers on Airport Road offer domestic and international shipping. They handle packing in wooden crates, customs documentation for international orders, and door-to-door delivery. Shipping costs vary by size and destination. Get a detailed invoice and shipping timeline in writing before paying." },
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
      name: "Spices & Masalas",
      tagline: "The Spice Capital of Rajasthan",
      desc: "Jodhpur&apos;s spice market around the Clock Tower is legendary. The aromatic lanes are piled high with colorful spice pyramids -- red chili, golden turmeric, green cardamom, and exotic blends unique to Rajasthani cuisine. The Mathania red chili (from a village near Jodhpur) is prized for its flavor without excessive heat. Spice shops here supply restaurants across India.",
      items: ["Red chili powder (₹200-600/kg)", "Rajasthani masala blends (₹150-500/pack)", "Saffron/Kesar (₹300-1,000/gram)", "Whole spice sets (₹200-800)", "Dal-Bati masala (₹100-300)", "Gift spice boxes (₹500-2,000)"],
      where: "Clock Tower market, Sardar Market, MV Spices",
      tip: "MV Spices (Mohanlal Verhomal) near Clock Tower is the most famous and reliable spice shop -- it has been featured in international travel guides. Their pre-packed spice gift sets are excellent for travelers.",
      color: "from-purple-600 to-violet-600",
      accent: "purple",
    },
    {
      name: "Bandhani & Desert Textiles",
      tagline: "Marwar&apos;s Vibrant Tie-Dye",
      desc: "Jodhpur&apos;s Bandhani tradition is distinct from Jaipur -- featuring bolder patterns, deeper colors, and desert-inspired palettes of red, orange, and saffron. Artisans tie thousands of tiny knots by hand before dyeing the fabric. Marwar Bandhani sarees, dupattas, and turbans are worn during festivals and celebrations across Rajasthan.",
      items: ["Bandhani sarees (₹1,000-15,000)", "Dupattas (₹300-2,000)", "Turbans/Safas (₹200-800)", "Dress material (₹500-3,000)", "Leheriya stoles (₹200-1,000)", "Mirror work fabrics (₹300-1,500/m)"],
      where: "Sardar Market, Tripolia Bazaar, Nai Sarak",
      tip: "Marwar Bandhani uses deeper reds and oranges unique to this region. Hand-tied Bandhani has slightly irregular dots -- machine-stamped is perfectly uniform. Ask for &apos;haath ka Bandhani&apos; for handmade pieces.",
      color: "from-amber-700 to-orange-700",
      accent: "amber",
    },
    {
      name: "Antique & Reproduction Furniture",
      tagline: "India&apos;s Furniture Export Hub",
      desc: "Jodhpur is India&apos;s biggest antique and reproduction furniture center. The furniture district on Airport Road has massive warehouses filled with restored colonial-era doors, windows, cabinets, tables, and decorative pieces. Skilled carpenters create stunning reproductions of vintage designs using reclaimed wood. International buyers flock here.",
      items: ["Carved doors (₹5,000-50,000+)", "Vintage cabinets (₹10,000-1,00,000+)", "Coffee tables (₹3,000-30,000)", "Window frames (₹2,000-20,000)", "Decorative panels (₹1,000-15,000)", "Small vintage items (₹500-5,000)"],
      where: "Airport Road furniture market, industrial area warehouses",
      tip: "Visit multiple warehouses and compare. Most dealers offer international shipping. Check wood quality (teak and sheesham are best). Small items like carved boxes, vintage locks, and iron hooks are easy to carry home.",
      color: "from-teal-600 to-cyan-600",
      accent: "teal",
    },
    {
      name: "Mojaris & Leather Goods",
      tagline: "Desert Craftsman&apos;s Footwear",
      desc: "Jodhpur has a vibrant leather craft tradition. Mojaris (pointed-toe shoes) and juttis are handmade by Mochi (cobbler) communities using locally tanned leather, embroidery, and decorative elements. Jodhpur&apos;s riding boots (Jodhpur boots) have a worldwide legacy from the city&apos;s polo and equestrian traditions.",
      items: ["Embroidered mojaris (₹200-1,000)", "Designer juttis (₹500-2,000)", "Leather bags (₹500-3,000)", "Camel leather items (₹300-2,000)", "Jodhpur boots (₹2,000-8,000)", "Leather journals (₹200-800)"],
      where: "Mochi Bazaar, Sardar Market, Clock Tower area",
      tip: "Mochi Bazaar is the cobbler&apos;s lane with the widest selection and best prices. For Jodhpur riding boots, visit established leather shops on Station Road. Camel leather items are unique to this desert region.",
      color: "from-rose-600 to-pink-600",
      accent: "rose",
    },
    {
      name: "Lacquer Bangles & Jewelry",
      tagline: "Desert Color on Your Wrist",
      desc: "Jodhpur&apos;s lacquer bangles are miniature works of art -- bright lac resin shaped over flame and embedded with mirrors, glass, and stones. The Tripolia Bazaar bangle market is a dazzling sight with thousands of colorful bangles displayed on wooden stands. Silver tribal jewelry with bold desert motifs is another specialty.",
      items: ["Lac bangles (₹30-200/set)", "Silver jewelry (₹500-5,000)", "Tribal necklaces (₹800-5,000)", "Mirror work accessories (₹200-1,000)", "Stone-set bangles (₹100-500/set)", "Oxidized jewelry (₹200-1,500)"],
      where: "Tripolia Bazaar, Sardar Market, Sojati Gate area",
      tip: "Watch bangle-makers shape lac over flame at Tripolia Bazaar -- it is a fascinating process. Buy sets as gifts -- they are lightweight and easy to pack. Silver is sold by weight plus making charges.",
      color: "from-yellow-600 to-amber-600",
      accent: "yellow",
    },
    {
      name: "Handicrafts & Souvenirs",
      tagline: "Blue City Treasures",
      desc: "Jodhpur&apos;s handicraft scene is rich with items inspired by the Thar Desert and Marwar royal heritage. Puppets (kathputli), carved wooden items, painted boxes, Rajasthani turbans, mirror-work cushion covers, and camel bone items are popular buys. The blue-painted old city inspires unique home decor pieces.",
      items: ["Puppets/Kathputli (₹200-1,000)", "Painted boxes (₹200-1,500)", "Rajasthani turbans (₹200-800)", "Mirror work cushions (₹300-1,500)", "Camel bone items (₹500-5,000)", "Blue pottery items (₹200-2,000)"],
      where: "Sardar Market, Clock Tower shops, Mehrangarh Fort shops",
      tip: "The shop at Mehrangarh Fort has curated, quality handicrafts at fair prices. For budget buys, the lanes around Clock Tower have hundreds of souvenir stalls. Hand-painted items take longer to make and cost more than printed copies.",
      color: "from-emerald-600 to-green-600",
      accent: "emerald",
    },
  ];

  const marketAreas = [
    { name: "Sardar Market (Clock Tower)", desc: "Jodhpur&apos;s most iconic market surrounding the tall Clock Tower. A vibrant bazaar with spice shops, textile stores, handicraft stalls, and food vendors. The spice lanes are world-famous. Best starting point for any Jodhpur shopping trip.", timings: "9 AM - 9 PM", bestFor: "Spices, textiles, handicrafts, souvenirs, street food", vibe: "Iconic & aromatic" },
    { name: "Tripolia Bazaar", desc: "The traditional bangle and textile market of Jodhpur. Lanes lined with colorful lacquer bangle shops and Bandhani textile stores. Less touristy than Sardar Market with more local shoppers and competitive prices.", timings: "10 AM - 8 PM", bestFor: "Lac bangles, Bandhani, textiles, traditional items", vibe: "Colorful & traditional" },
    { name: "Mochi Bazaar", desc: "The cobbler&apos;s lane -- a narrow market dedicated to handmade leather mojaris and juttis. Watch craftsmen stitch shoes by hand as you shop. Hundreds of designs for men, women, and children at factory-direct prices.", timings: "10 AM - 7:30 PM", bestFor: "Mojaris, juttis, leather items, handcrafted shoes", vibe: "Artisanal & authentic" },
    { name: "Airport Road Furniture Market", desc: "A sprawling district of furniture warehouses and workshops. Restored antiques, reproduction pieces, carved doors, and decorative items fill massive showrooms. This is where international buyers source Indian vintage furniture.", timings: "10 AM - 6 PM (weekdays best)", bestFor: "Antique furniture, carved doors, vintage decor, exports", vibe: "Warehouse & wholesale" },
  ];

  const bargainingTips = [
    { tip: "Start at 40-50% of the quoted price in Sardar Market and Tripolia Bazaar", icon: Percent },
    { tip: "Compare spice prices at 3-4 shops before buying -- prices vary significantly", icon: Tag },
    { tip: "Mehrangarh Fort shop has curated items at fair fixed prices -- use as benchmarks", icon: Shield },
    { tip: "Avoid shops where auto-rickshaw drivers take you (commission adds 30-40% to prices)", icon: ShoppingBag },
    { tip: "Visit spice market in the morning when aromas are strongest and shops are freshest", icon: Clock },
    { tip: "For furniture, visit multiple warehouses and negotiate firmly on large purchases", icon: Gem },
    { tip: "Buy multiple items from one shop for bulk discounts at all markets", icon: IndianRupee },
    { tip: "Cash payments often get additional discounts, especially for furniture", icon: IndianRupee },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Jodhpur Locals", desc: "We know every bazaar lane" },
    { icon: ShoppingBag, title: "Shopping Tours", desc: "Genuine shop recommendations" },
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
              Jodhpur <span className="shimmer-text">Shopping</span> Guide
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-400/60" />
              <Crown className="w-6 h-6 text-purple-400" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-400/60" />
            </div>
            <p className="text-lg md:text-xl text-purple-100/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              Legendary spice markets, Bandhani textiles, antique furniture, and desert handicrafts. Explore the Blue City&apos;s bazaars with a local&apos;s guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                <Phone className="w-5 h-5" /> Call Now: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want a cab for Jodhpur shopping tour" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-purple-400/30 hover:bg-white/20 hover:scale-105 transition-all duration-500">
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
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3 text-center">What to Buy in Jodhpur</h2>
            <p className="text-stone-500 text-center mb-14">The Blue City&apos;s markets blend Marwar royal heritage with desert craftsmanship</p>
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
            <h2 className="text-3xl font-bold text-white mb-3 text-center">Best Shopping Areas in Jodhpur</h2>
            <p className="text-purple-200/60 text-center mb-14">From aromatic spice lanes to massive furniture warehouses</p>
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
                    "Morning: Mehrangarh Fort visit (9:00-11:30 AM)",
                    "Clock Tower spice market shopping (11:30 AM-1:00 PM)",
                    "Lunch at Omelette Shop or Jhankar Choti Haveli (1:00-2:00 PM)",
                    "Tripolia Bazaar bangles & Bandhani (2:00-3:30 PM)",
                    "Mochi Bazaar for mojaris (3:30-4:30 PM)",
                    "Blue City walking tour + photography (4:30-6:00 PM)",
                    "Return to hotel / onward journey",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-700 text-sm py-2 px-3 rounded-lg hover:bg-purple-50/50 transition-colors border-b border-purple-100/50 last:border-0">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-5 border border-purple-200/50">
                  <p className="text-purple-800 font-semibold text-sm">Full day local cab in Jodhpur: ₹1,800 | From Jaipur to Jodhpur: ₹5,000 (one way)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-20 px-4 bg-gradient-to-b from-violet-50 to-stone-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">Shopping in Jodhpur: The Blue City&apos;s Bazaar Soul</h2>
            <div className="glass-card-light rounded-3xl p-8 md:p-10">
              <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-4">
              <p>Jodhpur&apos;s markets carry the spirit of the Thar Desert -- bold, colorful, and unmistakably Rajasthani. The city&apos;s position as the historic capital of Marwar kingdom meant it attracted traders and artisans from across the desert region, creating a commercial culture that thrives to this day. The spice market around the Clock Tower is arguably India&apos;s most photographed bazaar, where pyramids of red chili, golden turmeric, and green cardamom create a feast for the senses.</p>
              <p>What makes Jodhpur unique among Rajasthan&apos;s shopping destinations is its furniture industry. The city is India&apos;s largest center for antique and reproduction furniture, with warehouses on Airport Road stocking everything from restored colonial doors to hand-carved cabinets. International interior designers regularly source from Jodhpur&apos;s furniture market, and domestic buyers can find statement pieces at prices 50-70% below Delhi retail.</p>
              <p>A local cab is the best way to cover Jodhpur&apos;s diverse shopping districts. The old city bazaars (Clock Tower, Tripolia, Mochi Bazaar) are walkable but the furniture market on Airport Road requires a drive. Our Triveni Cabs drivers know the genuine spice merchants, the best bangle artisans, and can navigate the blue-painted lanes of the old city where some of the most authentic handicraft workshops are hidden. Combine your shopping with Mehrangarh Fort and the blue city walk for a complete Jodhpur experience.</p>
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
            <h2 className="text-2xl font-bold text-stone-800 mb-10 text-center">More Jodhpur & Rajasthan Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: "/sightseeing/jodhpur", title: "Jodhpur Sightseeing Tours", desc: "All Jodhpur attractions" },
                { href: "/jodhpur", title: "Jodhpur City Hub", desc: "Jodhpur cab services" },
                { href: "/jaisalmer-vs-jodhpur", title: "Jaisalmer vs Jodhpur", desc: "Which desert city?" },
                { href: "/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur", title: "5-Day Rajasthan Trip", desc: "Jaipur-Udaipur-Jodhpur" },
                { href: "/jaipur-shopping-guide", title: "Jaipur Shopping Guide", desc: "Pink city bazaars" },
                { href: "/udaipur-shopping-guide", title: "Udaipur Shopping Guide", desc: "Lake city art & silver" },
                { href: "/jaisalmer-shopping-guide", title: "Jaisalmer Shopping Guide", desc: "Desert city crafts" },
                { href: "/agra-shopping-guide", title: "Agra Shopping Guide", desc: "Marble inlay & leather" },
                { href: "/rajasthan-desert-circuit-tour", title: "Rajasthan Desert Circuit", desc: "Full Rajasthan tour" },
                { href: "/friends-trip-jaisalmer", title: "Friends Trip Jaisalmer", desc: "Desert adventure" },
                { href: "/outstation-cabs", title: "Outstation Cabs", desc: "Inter-city travel" },
                { href: "/weekend-getaways-from-jaipur-by-car", title: "Weekend from Jaipur", desc: "Short trips by car" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Need a Jodhpur Shopping Tour?</h2>
            <p className="text-purple-100/80 mb-10 text-lg max-w-2xl mx-auto">Our drivers know the genuine spice merchants and artisan shops. No commission, no scams, just the best of the Blue City.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-gem 3s ease-in-out infinite' }}>
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want a cab for Jodhpur shopping tour" className="inline-flex items-center justify-center gap-2 bg-purple-900/40 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border border-purple-400/30 hover:bg-purple-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">
                WhatsApp Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
