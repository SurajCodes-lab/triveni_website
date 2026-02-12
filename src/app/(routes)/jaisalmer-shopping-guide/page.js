import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, ShoppingBag, Gem, Tag, Landmark, Crown, Percent, IndianRupee } from '@/components/ui/icons';

export const metadata = {
  title: 'Jaisalmer Shopping Guide 2026 | Rajasthani Crafts, Mirror Work & Desert Souvenirs',
  description: 'Jaisalmer shopping guide. Mirror work embroidery, leather mojaris, patchwork textiles, silver jewelry, Rajasthani paintings, camel leather products. Sadar Bazaar, Fort Market. Prices & tips. Call 7668570551.',
  keywords: 'jaisalmer shopping guide, shopping in jaisalmer, jaisalmer fort market, sadar bazaar jaisalmer, jaisalmer mirror work, jaisalmer leather mojaris, rajasthani crafts jaisalmer, jaisalmer souvenirs',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/jaisalmer-shopping-guide' },
  openGraph: {
    title: 'Jaisalmer Shopping Guide 2026 | Rajasthani Crafts, Mirror Work & Desert Souvenirs',
    description: 'Complete shopping guide for Jaisalmer. Mirror work, leather mojaris, patchwork, silver jewelry, Rajasthani paintings. Best markets, price ranges, tips.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/jaisalmer-shopping-guide',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/taj-mahal-hero.jpg', width: 1200, height: 630, alt: 'Jaisalmer Shopping Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jaisalmer Shopping Guide 2026',
    description: 'Mirror work, leather mojaris, patchwork textiles, desert souvenirs. Best markets & tips.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/taj-mahal-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function JaisalmerShoppingGuidePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Jaisalmer Shopping Guide", "item": "https://www.trivenicabs.in/jaisalmer-shopping-guide" },
    ],
  };

  const faqData = [
    { question: "What is the best thing to buy in Jaisalmer?", answer: "Jaisalmer&apos;s top buys are: mirror work embroidery (cushion covers, wall hangings, bags), leather mojaris (traditional Rajasthani shoes), patchwork textiles and quilts, silver jewelry with semi-precious stones, Rajasthani miniature paintings, and camel leather products (bags, journals, belts). The mirror work from Jaisalmer is among the finest in Rajasthan." },
    { question: "What is the Fort Market like?", answer: "The Fort Market inside Jaisalmer Fort (Sonar Quila) is a living market within a 12th-century fort. Narrow lanes are lined with shops selling mirror work, textiles, jewelry, and handicrafts. The setting is extraordinary -- golden sandstone walls, carved havelis, and medieval architecture surround the shops. Prices can be higher than Sadar Bazaar but the ambiance is unbeatable." },
    { question: "Where can I buy authentic mirror work in Jaisalmer?", answer: "The Fort Market and Sadar Bazaar have the best mirror work. Look for hand-stitched pieces with small, evenly placed mirrors and tight embroidery. Genuine Jaisalmer mirror work uses tiny circular mirrors (shisha) hand-sewn onto fabric with intricate threadwork. Machine-made copies have larger, glued mirrors. Prices: cushion covers &#8377;200-800, wall hangings &#8377;500-3,000." },
    { question: "Is bargaining expected in Jaisalmer?", answer: "Yes, bargaining is essential in Jaisalmer. Start at 40-50% of the quoted price in tourist areas like the Fort Market (margins are high). Sadar Bazaar and Bhatia Bazaar have slightly more realistic starting prices -- bargain to 60-70% there. Government emporiums and some established shops have fixed prices. Be firm but polite -- desert traders respect confident negotiators." },
    { question: "What are Jaisalmer mojaris?", answer: "Mojaris are traditional Rajasthani leather shoes, hand-stitched and often decorated with embroidery, mirror work, or camel leather tooling. Jaisalmer mojaris are known for their pointed toe design and colourful thread work. They come in slip-on and juttti styles for both men and women. Prices: &#8377;300-2,000. They need breaking in but become extremely comfortable once moulded to your feet." },
    { question: "What is camel leather and is it good quality?", answer: "Camel leather products are a Jaisalmer specialty -- the Thar Desert provides the raw material. Camel leather is thicker and more durable than cowhide, with a distinctive grain. Products include journals, bags, belts, wallets, and lamp shades. The leather is ethically sourced from camels that die naturally. Prices: journals &#8377;200-800, bags &#8377;500-3,000, belts &#8377;200-800." },
    { question: "Should I buy jewelry in Jaisalmer?", answer: "Yes! Jaisalmer has excellent silver jewelry, often set with semi-precious stones from Rajasthan (turquoise, lapis lazuli, garnet, moonstone). Tribal-style silver pieces and Rajputana designs are specialities. Manak Chowk and the Fort Market have the best selection. Verify silver purity by checking for hallmarks. Prices: earrings &#8377;200-2,000, necklaces &#8377;500-5,000, bangles &#8377;300-3,000." },
    { question: "What are the best food souvenirs from Jaisalmer?", answer: "Top edible souvenirs from Jaisalmer include: ker sangri (desert beans and berries -- Rajasthani delicacy), Rajasthani spice mixes (especially red chili powder from Mathania), papad and mangodi (sun-dried snacks), desert honey, and Rajasthani sweets like ghewar and mawa kachori. Sadar Bazaar spice shops have pre-packed gift boxes." },
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
      name: "Mirror Work & Embroidery",
      tagline: "Desert Sparkle",
      desc: "Jaisalmer&apos;s mirror work (shisha embroidery) is among the finest in Rajasthan. Tiny circular mirrors are hand-sewn onto richly coloured fabric with intricate threadwork, creating dazzling patterns that reflect desert sunlight. This centuries-old craft is practised by local women artisans, with techniques passed down through generations. The Fort Market and Sadar Bazaar are the best places to find authentic pieces.",
      items: ["Cushion covers (&#8377;200-800)", "Wall hangings (&#8377;500-3,000)", "Table runners (&#8377;300-1,500)", "Bags & purses (&#8377;200-1,200)", "Bedspreads (&#8377;1,000-5,000)", "Dress materials (&#8377;500-3,000)"],
      where: "Fort Market, Sadar Bazaar, Manak Chowk",
      tip: "Genuine hand-stitched mirror work has small, evenly placed mirrors with tight, intricate threadwork around each piece. Machine-made copies use larger mirrors glued on with loose thread. Check the back of the fabric -- hand-stitched work shows neat, individual stitches for each mirror.",
      color: "from-purple-600 to-violet-600",
      accent: "purple",
    },
    {
      name: "Leather Goods & Mojaris",
      tagline: "Desert Craftsmanship",
      desc: "Jaisalmer&apos;s leather artisans create beautiful mojaris (traditional pointed-toe shoes), bags, journals, belts, and accessories using both cow and camel leather. Mojaris are hand-stitched with intricate embroidery and mirror work, while camel leather products are unique to the Thar Desert region. The craftsmanship is exceptional, with techniques refined over centuries in the desert trading towns.",
      items: ["Mojaris / juttis (&#8377;300-2,000)", "Camel leather journals (&#8377;200-800)", "Leather bags (&#8377;500-3,000)", "Belts (&#8377;200-800)", "Wallets (&#8377;150-600)", "Camel leather lamp shades (&#8377;500-2,500)"],
      where: "Sadar Bazaar, Fort Market, Bhatia Bazaar",
      tip: "For mojaris, try them on in the shop and walk around -- they should feel snug but not painfully tight. Genuine camel leather has a thicker, coarser grain than cowhide and a slightly musky smell. Sadar Bazaar shops offer better prices than the Fort Market for the same quality.",
      color: "from-amber-700 to-orange-700",
      accent: "amber",
    },
    {
      name: "Patchwork Textiles & Quilts",
      tagline: "Rajasthani Kaleidoscope",
      desc: "Patchwork is a Rajasthani textile art form where small pieces of colourful fabric are stitched together to create vibrant patterns. Jaisalmer&apos;s patchwork incorporates mirror work, embroidery, and block printing into quilts, bedspreads, cushion covers, and wall hangings. The colour combinations are bold and distinctly Rajasthani -- rich reds, deep blues, vibrant yellows, and earthy oranges.",
      items: ["Patchwork quilts (&#8377;1,000-5,000)", "Bedspreads (&#8377;800-4,000)", "Cushion sets (&#8377;500-2,000)", "Wall hangings (&#8377;300-2,000)", "Table cloths (&#8377;300-1,500)", "Patchwork bags (&#8377;200-800)"],
      where: "Sadar Bazaar, Fort Market, Government Emporium",
      tip: "Check the stitching quality -- genuine handmade patchwork has slightly irregular but firm stitching. Machine-stitched pieces are perfectly uniform but lack character. The government emporium near Gadisar Lake has certified products at fixed prices for comparison shopping.",
      color: "from-teal-600 to-cyan-600",
      accent: "teal",
    },
    {
      name: "Silver Jewelry",
      tagline: "Rajputana Elegance",
      desc: "Jaisalmer&apos;s silver jewelry reflects centuries of Rajputana and tribal design traditions. Artisans create stunning pieces set with semi-precious stones sourced from across Rajasthan -- turquoise, lapis lazuli, garnet, moonstone, and amethyst. Designs range from delicate Rajputana filigree to bold tribal statement pieces. The oxidised silver work, with its antique finish, is a Jaisalmer specialty.",
      items: ["Silver earrings (&#8377;200-2,000)", "Necklaces (&#8377;500-5,000)", "Bangles & bracelets (&#8377;300-3,000)", "Rings (&#8377;150-1,500)", "Anklets (&#8377;300-2,000)", "Tribal nose pins (&#8377;100-800)"],
      where: "Manak Chowk, Fort Market, Sadar Bazaar",
      tip: "Always check for the BIS hallmark (925 for sterling silver) to verify purity. Oxidised silver is a style, not a lower quality -- it is deliberately darkened for an antique look. Manak Chowk jewellers are generally more reliable than tourist-oriented Fort shops. Negotiate firmly as markups on jewelry are high.",
      color: "from-rose-600 to-pink-600",
      accent: "rose",
    },
    {
      name: "Rajasthani Paintings & Art",
      tagline: "Desert Canvas",
      desc: "Jaisalmer&apos;s art scene is rich with traditional Rajasthani miniature paintings, Phad scroll paintings, and contemporary desert-inspired art. Miniature paintings on silk and paper depict Rajput court scenes, hunting scenes, and Hindu mythological themes with extraordinary detail. Local artists also create stunning paintings of the golden fort, desert landscapes, and camel caravans.",
      items: ["Miniature paintings (&#8377;500-10,000)", "Phad paintings (&#8377;800-5,000)", "Desert landscapes (&#8377;300-3,000)", "Postcards & prints (&#8377;50-300)", "Painted textiles (&#8377;500-3,000)", "Camel bone art (&#8377;200-2,000)"],
      where: "Fort Market galleries, Sadar Bazaar art shops, Manak Chowk",
      tip: "For genuine miniature paintings, look for fine brush strokes visible under close inspection -- real miniatures use single-hair brushes and natural pigments. Ask the artist to show the work under a magnifying glass. Fort Market galleries tend to have the best quality, though prices are higher.",
      color: "from-yellow-600 to-amber-600",
      accent: "yellow",
    },
    {
      name: "Camel Leather Products",
      tagline: "Thar Desert Specialty",
      desc: "Camel leather is a unique Jaisalmer specialty -- thicker, more durable, and more textured than cowhide. The leather is sourced from camels that die naturally in the Thar Desert and is processed using traditional tanning methods. Products include beautifully tooled journals, bags, lamp shades, footwear, and decorative items. The distinctive grain and warm colour make camel leather products excellent souvenirs.",
      items: ["Journals & diaries (&#8377;200-800)", "Bags & satchels (&#8377;500-3,000)", "Lamp shades (&#8377;500-2,500)", "Belts (&#8377;200-800)", "Phone covers (&#8377;150-500)", "Decorative boxes (&#8377;300-1,500)"],
      where: "Sadar Bazaar, Bhatia Bazaar, Fort Market",
      tip: "Genuine camel leather has a distinctive, slightly rough grain and a warm tan colour. It is thicker and stiffer than cow leather. Some shops sell buffalo leather labelled as camel leather -- genuine camel leather has a unique fibrous texture visible on close inspection. Bhatia Bazaar artisan workshops offer the most authentic products.",
      color: "from-emerald-600 to-green-600",
      accent: "emerald",
    },
  ];

  const marketAreas = [
    { name: "Sadar Bazaar", desc: "Jaisalmer&apos;s main commercial market, stretching from the fort base into the modern town. A vibrant mix of textile shops, leather stores, spice merchants, and souvenir stalls. Prices are more competitive than the Fort Market and the selection is wider. The bazaar is busiest in the evening when locals and tourists mingle.", timings: "9 AM - 9 PM", bestFor: "Textiles, leather goods, spices, general shopping, best prices", vibe: "Bustling & authentic" },
    { name: "Fort Market (Sonar Quila)", desc: "A living market inside the 12th-century Jaisalmer Fort. Narrow medieval lanes lined with shops selling mirror work, jewelry, paintings, and handicrafts. The golden sandstone setting is extraordinary -- shopping inside a living fort is an experience unique to Jaisalmer. Higher prices but unmatched ambiance.", timings: "9 AM - 8 PM", bestFor: "Mirror work, jewelry, paintings, atmosphere, premium handicrafts", vibe: "Magical & historic" },
    { name: "Manak Chowk", desc: "The traditional jewelry and silver market of Jaisalmer, located near the fort entrance. Established jewellers and silver artisans have been trading here for generations. The most reliable place for silver jewelry purchases with better authenticity guarantees than tourist shops. Also has spice and textile vendors.", timings: "10 AM - 8 PM", bestFor: "Silver jewelry, gemstones, traditional Rajasthani ornaments", vibe: "Traditional & trusted" },
    { name: "Bhatia Bazaar", desc: "A smaller, less touristy market area near Patwa Havelis. Known for its leather workshops and artisan studios where you can watch craftspeople at work. Prices are often lower than Sadar Bazaar as the tourist markup is minimal. Good for camel leather products and handmade textiles.", timings: "9:30 AM - 7:30 PM", bestFor: "Leather workshops, artisan crafts, off-the-beaten-path finds", vibe: "Artisanal & local" },
  ];

  const bargainingTips = [
    { tip: "Start at 40-50% of the quoted price in Fort Market (tourist markups are very high)", icon: Percent },
    { tip: "Compare mirror work quality at 3-4 shops -- check stitching on the reverse side", icon: Tag },
    { tip: "Government Emporium near Gadisar Lake has fixed prices -- use as quality benchmark", icon: Shield },
    { tip: "Avoid buying from touts and guides who lead you to specific shops (commission racket)", icon: ShoppingBag },
    { tip: "Visit Sadar Bazaar in the morning for better deals -- afternoon tourist rush raises prices", icon: Clock },
    { tip: "For silver jewelry, always check the BIS 925 hallmark and weigh pieces before buying", icon: Gem },
    { tip: "Buy from workshops in Bhatia Bazaar for artisan-direct prices without middleman markup", icon: IndianRupee },
    { tip: "Off-season (April-August) offers better bargaining power as tourist numbers drop dramatically", icon: IndianRupee },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Jaisalmer Experts", desc: "We know every desert market" },
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
              Jaisalmer <span className="shimmer-text">Shopping</span> Guide
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-400/60" />
              <Crown className="w-6 h-6 text-purple-400" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-400/60" />
            </div>
            <p className="text-lg md:text-xl text-purple-100/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              Mirror work embroidery, leather mojaris, patchwork textiles, silver jewelry, and camel leather treasures. Shop the Golden City with a local&apos;s insider knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                <Phone className="w-5 h-5" /> Call Now: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want a cab for Jaisalmer shopping tour" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-purple-400/30 hover:bg-white/20 hover:scale-105 transition-all duration-500">
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
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3 text-center">What to Buy in Jaisalmer</h2>
            <p className="text-stone-500 text-center mb-14">The Golden City offers desert crafts and Rajasthani artisan treasures</p>
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
            <h2 className="text-3xl font-bold text-white mb-3 text-center">Best Shopping Areas in Jaisalmer</h2>
            <p className="text-purple-200/60 text-center mb-14">Four distinct markets in the Golden City of the Thar Desert</p>
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
                    "Morning: Jaisalmer Fort walk & Fort Market shopping (9:00-11:30 AM)",
                    "Patwa Havelis visit & Bhatia Bazaar leather workshops (11:30 AM-1:00 PM)",
                    "Lunch at a rooftop restaurant with fort views (1:00-2:00 PM)",
                    "Manak Chowk silver jewelry shopping (2:00-3:30 PM)",
                    "Sadar Bazaar textiles & mirror work shopping (3:30-5:00 PM)",
                    "Gadisar Lake sunset walk & Government Emporium (5:00-6:30 PM)",
                    "Evening desert safari or Sam Sand Dunes excursion (optional)",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-700 text-sm py-2 px-3 rounded-lg hover:bg-purple-50/50 transition-colors border-b border-purple-100/50 last:border-0">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-5 border border-purple-200/50">
                  <p className="text-purple-800 font-semibold text-sm">Full day local cab in Jaisalmer: &#8377;2,000 | From Jodhpur to Jaisalmer: &#8377;5,500 (one way) | From Jaipur: &#8377;8,000 (one way)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-20 px-4 bg-gradient-to-b from-violet-50 to-stone-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">Shopping in Jaisalmer: The Golden City&apos;s Desert Treasures</h2>
            <div className="glass-card-light rounded-3xl p-8 md:p-10">
              <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-4">
              <p>Jaisalmer&apos;s shopping experience is inseparable from its extraordinary setting. The city rises from the Thar Desert like a golden mirage -- a 12th-century sandstone fort surrounded by havelis, temples, and bazaars that have been trading desert crafts for nearly a thousand years. Shopping inside Jaisalmer Fort, where medieval lanes are lined with mirror work and jewelry shops, is an experience you simply cannot have anywhere else in India.</p>
              <p>The city&apos;s craft traditions are deeply rooted in its geography and history. Mirror work evolved as a desert embellishment -- the tiny mirrors reflected light and heat. Camel leather products exist because the Thar Desert&apos;s dromedaries provide the raw material. The patchwork textiles display colours drawn from desert sunsets, spice markets, and Rajput court splendour. And the silver jewelry carries designs from centuries of Rajputana royalty and tribal tradition.</p>
              <p>While Jaisalmer&apos;s main markets are walkable, a cab is essential for exploring beyond the fort and town. Our Triveni Cabs drivers can take you to artisan villages in the desert, the Sam Sand Dunes for a sunset safari, or nearby Kuldhara (abandoned village). For the drive to Jaisalmer from Jodhpur, Jaipur, or Udaipur, we ensure a comfortable journey through some of Rajasthan&apos;s most dramatic desert landscapes.</p>
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
            <h2 className="text-2xl font-bold text-stone-800 mb-10 text-center">More Jaisalmer &amp; Rajasthan Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: "/sightseeing/jaisalmer", title: "Jaisalmer Sightseeing Tours", desc: "All Jaisalmer attractions" },
                { href: "/jodhpur-shopping-guide", title: "Jodhpur Shopping Guide", desc: "Blue City markets" },
                { href: "/udaipur-shopping-guide", title: "Udaipur Shopping Guide", desc: "City of Lakes shopping" },
                { href: "/jaipur-shopping-guide", title: "Jaipur Shopping Guide", desc: "Pink City bazaars" },
                { href: "/jodhpur-beyond-mehrangarh", title: "Jodhpur Beyond Mehrangarh", desc: "Blue City hidden gems" },
                { href: "/pushkar-food-tour", title: "Pushkar Food Tour", desc: "Holy lake cuisine guide" },
                { href: "/jaisalmer-desert-safari", title: "Desert Safari Jaisalmer", desc: "Sam Sand Dunes" },
                { href: "/10-day-north-india-road-trip", title: "North India Road Trip", desc: "10-day grand tour" },
                { href: "/golden-triangle-english-speaking-driver", title: "Golden Triangle Tour", desc: "Delhi-Agra-Jaipur" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Need a Jaisalmer Shopping Tour?</h2>
            <p className="text-purple-100/80 mb-10 text-lg max-w-2xl mx-auto">Our drivers know the genuine desert city shops. No commission, no scams, just the best of Jaisalmer.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-gem 3s ease-in-out infinite' }}>
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want a cab for Jaisalmer shopping tour" className="inline-flex items-center justify-center gap-2 bg-purple-900/40 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border border-purple-400/30 hover:bg-purple-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">
                WhatsApp Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
