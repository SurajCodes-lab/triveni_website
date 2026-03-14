import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, ShoppingBag, Gem, Tag, Landmark, Crown, Percent, IndianRupee } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Jaipur Shopping Guide 2026 | Jewelry, Block Print & Handicrafts',
  description: 'Jaipur shopping guide. Kundan jewelry, block print, Blue Pottery, Bandhani textiles, gemstones. Johari Bazaar, Bapu Bazaar, Tripolia Bazaar. Prices & tips. Call 7668570551.',
  keywords: 'jaipur shopping guide, shopping in jaipur, johari bazaar jaipur, jaipur jewelry market, jaipur block print, blue pottery jaipur, bandhani jaipur, jaipur handicrafts',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/jaipur-shopping-guide' },
  openGraph: {
    title: 'Jaipur Shopping Guide 2026 | Jewelry, Block Print & More',
    description: 'Complete shopping guide for Jaipur. Kundan jewelry, block print, Blue Pottery, gemstones. Best markets, price ranges, bargaining tips.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/jaipur-shopping-guide',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/taj-mahal-hero.jpg', width: 1200, height: 630, alt: 'Jaipur Shopping Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jaipur Shopping Guide 2026',
    description: 'Kundan jewelry, block print, Blue Pottery, gemstones. Best markets & bargaining tips.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/taj-mahal-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function JaipurShoppingGuidePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Jaipur Shopping Guide", "item": "https://www.trivenicabs.in/jaipur-shopping-guide" },
    ],
  };

  const faqData = [
    { question: "What is the best thing to buy in Jaipur?", answer: "Jaipur is world-famous for its gemstones and Kundan jewelry. Johari Bazaar is the epicenter of the gem trade, where you can buy emeralds, rubies, sapphires, and semi-precious stones at wholesale prices. Other top buys include block-printed fabrics, Blue Pottery, Bandhani textiles, lac bangles, and Rajasthani juttis (mojaris)." },
    { question: "Is Johari Bazaar safe for buying gemstones?", answer: "Johari Bazaar is India&apos;s most reputable gem market, but you need to be cautious. Buy only from established shops with proper certification. Ask for a gemological certificate for expensive stones. Avoid street vendors selling precious stones at very low prices -- they are usually glass or synthetic. Government-certified shops on MI Road are safest for tourists." },
    { question: "What are typical prices for Jaipur jewelry?", answer: "Silver jewelry: ₹500-5,000. Kundan sets: ₹2,000-50,000+. Lac bangles: ₹50-300 per set. Meenakari jewelry: ₹1,000-15,000. Gemstone rings: ₹500-50,000+ depending on stone. Artificial/fashion jewelry: ₹100-2,000. Prices vary hugely based on metal purity, stone quality, and craftsmanship." },
    { question: "Where can I buy authentic Blue Pottery in Jaipur?", answer: "The best Blue Pottery comes from Jaipur&apos;s Sanganer area and workshops near Amber Fort. Kripal Kumbh (near Bani Park) is a famous workshop run by a master potter family. You can also find Blue Pottery at Anokhi Museum shop, government emporiums on MI Road, and select shops in Bapu Bazaar. Authentic pieces are lightweight and have a distinctive turquoise-blue glaze." },
    { question: "Is bargaining expected in Jaipur markets?", answer: "Yes, bargaining is standard in all bazaars. Start at 40-50% of the quoted price and settle around 60-70%. Fixed-price shops like Anokhi, Ratan Textiles, and government emporiums do not allow bargaining. In Johari Bazaar, bargaining on jewelry is expected but be knowledgeable about current gold/silver rates." },
    { question: "What is the best area for block print shopping?", answer: "Sanganer (20 km from Jaipur) is the origin of Sanganeri block printing -- visit workshops there for the widest selection. In the city, Bapu Bazaar and Nehru Bazaar have excellent block print shops. Anokhi is a premium brand for curated block prints. For wholesale rates, visit the textile market near Johari Bazaar." },
    { question: "What are Jaipur&apos;s famous lac bangles?", answer: "Lac bangles are Jaipur&apos;s signature accessory -- colorful bangles made from lac (a resin) embedded with glass, mirrors, and stones. Maniharon Ka Rasta (near Johari Bazaar) is a narrow lane dedicated entirely to bangle-making. You can watch artisans shape bangles over flame. Prices: ₹50-300 per set. They make beautiful, lightweight souvenirs." },
    { question: "How do I get around Jaipur&apos;s bazaars?", answer: "Jaipur&apos;s main bazaars (Johari, Bapu, Tripolia, Nehru) are all in the Pink City walled area within walking distance of each other. However, the lanes are crowded. Best approach: hire a cab for the day, park near Hawa Mahal, and walk through the bazaars. Our drivers can wait while you shop and help carry purchases back to the car." },
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
      name: "Kundan & Gemstone Jewelry",
      tagline: "Jaipur&apos;s Crown Jewel",
      desc: "Jaipur is the undisputed gem capital of India. The city has been cutting and trading precious and semi-precious stones since the 18th century when Maharaja Sawai Jai Singh II invited gem cutters from across India. Kundan jewelry -- gold settings with uncut gems -- is Jaipur&apos;s signature art form, along with Meenakari (enamel work) and Thewa (gold-on-glass).",
      items: ["Silver jewelry (₹500-5,000)", "Kundan necklace sets (₹2,000-50,000+)", "Gemstone rings (₹500-50,000+)", "Meenakari earrings (₹1,000-10,000)", "Lac bangles (₹50-300/set)", "Thewa jewelry (₹3,000-30,000)"],
      where: "Johari Bazaar, MI Road jewelers, Gem Testing Lab area",
      tip: "Always ask for a certificate for expensive gemstones. The Jaipur Gem Testing Laboratory on MI Road can verify authenticity for a small fee.",
      color: "from-purple-600 to-violet-600",
      accent: "purple",
    },
    {
      name: "Block Print Textiles",
      tagline: "Hand-Stamped Heritage",
      desc: "Jaipur is the epicenter of Indian block printing. Two distinct traditions thrive here: Sanganeri prints (fine, floral patterns on white/pastel backgrounds) and Bagru prints (earthy tones using natural dyes). Artisans carve intricate wooden blocks by hand and stamp fabric in rhythmic precision -- a UNESCO-recognized craft tradition.",
      items: ["Block print bedsheets (₹500-3,000)", "Fabric by meter (₹200-1,000/m)", "Kurtas & dresses (₹500-3,000)", "Scarves & dupattas (₹300-1,500)", "Table linen sets (₹800-3,000)", "Quilts/Razai (₹1,500-5,000)"],
      where: "Bapu Bazaar, Sanganer workshops, Anokhi store, Nehru Bazaar",
      tip: "Visit Sanganer for factory-direct prices. Hand block print has slight imperfections -- that&apos;s the mark of authenticity. Machine prints are perfectly uniform.",
      color: "from-amber-700 to-orange-700",
      accent: "amber",
    },
    {
      name: "Blue Pottery",
      tagline: "Turquoise Art of Jaipur",
      desc: "Blue Pottery is Jaipur&apos;s distinctive ceramic art -- made not from clay but from quartz stone powder, giving it a unique lightweight quality and brilliant turquoise-blue glaze. Brought to Jaipur via Persia and Mughal influence, it features floral and animal motifs. Each piece is hand-painted and kiln-fired.",
      items: ["Decorative plates (₹300-2,000)", "Vases (₹500-3,000)", "Tiles (₹100-500 each)", "Door knobs (₹50-200 each)", "Tea sets (₹1,000-5,000)", "Jewelry boxes (₹200-1,000)"],
      where: "Kripal Kumbh workshop, Amber Road shops, MI Road emporiums",
      tip: "Genuine Blue Pottery is very light (no clay) and has a slightly rough unglazed bottom. Visit Kripal Kumbh to see artisans at work and buy directly.",
      color: "from-teal-600 to-cyan-600",
      accent: "teal",
    },
    {
      name: "Bandhani & Leheriya Textiles",
      tagline: "Tie-Dye Royalty",
      desc: "Bandhani (tie-dye) and Leheriya (wave-pattern tie-dye) are Rajasthan&apos;s ancient textile arts. Artisans tie thousands of tiny knots in fabric before dyeing to create intricate dot patterns. Leheriya creates diagonal wave stripes and is traditionally worn during the monsoon season. These vibrant fabrics come in sarees, dupattas, and turbans.",
      items: ["Bandhani sarees (₹1,000-15,000)", "Leheriya dupattas (₹300-2,000)", "Bandhani turbans (₹200-800)", "Dress material (₹500-3,000)", "Odhni/chunri (₹300-2,000)", "Stoles (₹200-1,000)"],
      where: "Bapu Bazaar, Tripolia Bazaar, Johari Bazaar textile shops",
      tip: "Finer dots mean more labor and higher quality. A good Bandhani saree has thousands of tiny, evenly-spaced dots. Check that the knots are hand-tied (slightly irregular) not machine-stamped.",
      color: "from-rose-600 to-pink-600",
      accent: "rose",
    },
    {
      name: "Rajasthani Juttis & Mojaris",
      tagline: "Handcrafted Royal Footwear",
      desc: "Jaipur juttis are handcrafted leather shoes with intricate embroidery, mirror work, and beadwork. Originally made for Rajput royalty, they are now Jaipur&apos;s most popular souvenir. Available in hundreds of designs for men and women, from traditional to contemporary styles.",
      items: ["Basic embroidered juttis (₹200-600)", "Designer juttis (₹600-2,000)", "Mirror work mojaris (₹300-1,000)", "Men&apos;s mojaris (₹300-1,500)", "Bridal juttis (₹1,000-5,000)", "Kids&apos; juttis (₹150-500)"],
      where: "Nehru Bazaar, Bapu Bazaar, Tripolia Bazaar, LMB lane",
      tip: "New juttis are stiff -- they soften after 2-3 wearings. Buy half a size larger as leather contracts slightly. Nehru Bazaar has the widest selection at best prices.",
      color: "from-yellow-600 to-amber-600",
      accent: "yellow",
    },
    {
      name: "Carpets, Miniatures & Handicrafts",
      tagline: "Living Museum Pieces",
      desc: "Jaipur is a treasure trove of traditional handicrafts. Miniature paintings on silk and paper depict Rajput court scenes and Hindu mythology in extraordinary detail. Hand-knotted carpets, brass and copper ware, sandalwood carvings, and puppets (kathputli) round out the artisanal offerings.",
      items: ["Miniature paintings (₹500-10,000+)", "Hand-knotted carpets (₹5,000-50,000+)", "Puppets/Kathputli (₹200-1,000)", "Brass items (₹300-5,000)", "Sandalwood items (₹500-5,000)", "Marble statues (₹500-10,000)"],
      where: "City Palace shops, Amber Fort area, Amer Road, MI Road emporiums",
      tip: "For miniature paintings, check if the work is hand-painted (brush strokes visible under magnification) or printed. Genuine miniatures take days to complete and use natural pigments.",
      color: "from-emerald-600 to-green-600",
      accent: "emerald",
    },
  ];

  const marketAreas = [
    { name: "Johari Bazaar", desc: "India&apos;s most famous jewelry bazaar. Centuries-old gem and jewelry shops line both sides of this Pink City boulevard. Kundan, Meenakari, gold, silver, and precious gemstones. Also has Maniharon Ka Rasta (Bangle Lane) and Gopalji Ka Rasta (Sari Lane) branching off it.", timings: "10 AM - 8 PM (closed Sundays)", bestFor: "Gemstones, Kundan jewelry, lac bangles, wedding jewelry", vibe: "Dazzling & historic" },
    { name: "Bapu Bazaar", desc: "Jaipur&apos;s most popular shopping street for tourists and locals alike. Colorful shops selling textiles, block prints, juttis, handicrafts, and souvenirs. A long straight road easy to navigate on foot with shops on both sides.", timings: "10 AM - 9 PM", bestFor: "Block prints, textiles, juttis, souvenirs, Bandhani", vibe: "Vibrant & tourist-friendly" },
    { name: "Tripolia Bazaar", desc: "Named after the triple-arched gate, this bazaar connects Johari Bazaar to Bapu Bazaar. Famous for lac bangles, brass utensils, textiles, and traditional Rajasthani items. Less touristy than Bapu Bazaar with more local flavor.", timings: "10 AM - 8 PM", bestFor: "Lac bangles, brassware, textiles, iron craft", vibe: "Traditional & bustling" },
    { name: "Nehru Bazaar", desc: "The go-to market for Rajasthani juttis and casual shopping. Hundreds of jutti shops with every color and design imaginable. Also has fabric shops, trinkets, and accessories. Right next to Bapu Bazaar for easy combined shopping.", timings: "10 AM - 8:30 PM (closed Sundays)", bestFor: "Juttis, mojaris, casual footwear, fabrics", vibe: "Colorful & fun" },
    { name: "MI Road & Government Emporiums", desc: "Jaipur&apos;s upscale shopping boulevard. Rajasthali (government emporium), Anokhi, branded stores, and modern shops. Fixed prices, air-conditioned comfort, and guaranteed quality. Perfect for hassle-free shopping without bargaining.", timings: "10 AM - 8 PM", bestFor: "Certified gems, curated handicrafts, premium block prints", vibe: "Upscale & reliable" },
  ];

  const bargainingTips = [
    { tip: "Start at 40-50% of the quoted price in bazaars", icon: Percent },
    { tip: "Compare prices at 2-3 shops before buying jewelry", icon: Tag },
    { tip: "Rajasthali (government emporium) has fixed prices -- use as benchmarks", icon: Shield },
    { tip: "Avoid shops where auto-rickshaw drivers insist on taking you (commission shops add 30-40% to prices)", icon: ShoppingBag },
    { tip: "Morning shoppers get more attention and often better deals", icon: Clock },
    { tip: "For gemstones, always ask for a lab certificate from Jaipur Gem Testing Lab", icon: Gem },
    { tip: "Bulk buying from one shop gets significantly better discounts", icon: IndianRupee },
    { tip: "Cash payments may fetch an additional 5-10% discount at many shops", icon: IndianRupee },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Jaipur Experts", desc: "We know every bazaar lane" },
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
              Jaipur <span className="shimmer-text">Shopping</span> Guide
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-400/60" />
              <Crown className="w-6 h-6 text-purple-400" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-400/60" />
            </div>
            <p className="text-lg md:text-xl text-purple-100/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              Gemstones, Kundan jewelry, block prints, Blue Pottery, and Bandhani textiles. Navigate Jaipur&apos;s legendary bazaars with a local&apos;s guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                <Phone className="w-5 h-5" /> Call Now: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want a cab for Jaipur shopping tour" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-purple-400/30 hover:bg-white/20 hover:scale-105 transition-all duration-500">
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
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3 text-center">What to Buy in Jaipur</h2>
            <p className="text-stone-500 text-center mb-14">The Pink City&apos;s bazaars have dazzled shoppers for three centuries</p>
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
            <h2 className="text-3xl font-bold text-white mb-3 text-center">Best Shopping Areas in Jaipur</h2>
            <p className="text-purple-200/60 text-center mb-14">Five legendary bazaars inside the Pink City walls and beyond</p>
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
                    "Morning: Amber Fort visit (9:00-11:00 AM)",
                    "Blue Pottery workshop visit near Amber (11:00-11:45 AM)",
                    "City Palace & Hawa Mahal (12:00-1:30 PM)",
                    "Lunch + Johari Bazaar jewelry shopping (1:30-3:30 PM)",
                    "Bapu Bazaar & Nehru Bazaar for textiles and juttis (3:30-5:30 PM)",
                    "Block print workshop visit in Sanganer (5:30-6:30 PM)",
                    "Return to hotel / Delhi drop",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-700 text-sm py-2 px-3 rounded-lg hover:bg-purple-50/50 transition-colors border-b border-purple-100/50 last:border-0">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-5 border border-purple-200/50">
                  <p className="text-purple-800 font-semibold text-sm">Full day cab for this itinerary: ₹6,500 from Delhi (round trip) or ₹1,800 local Jaipur</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-20 px-4 bg-gradient-to-b from-violet-50 to-stone-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">Shopping in Jaipur: The Pink City&apos;s Bazaar Heritage</h2>
            <div className="glass-card-light rounded-3xl p-8 md:p-10">
              <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-4">
              <p>Jaipur&apos;s bazaars are not just markets -- they are living museums of Rajasthani craft traditions that stretch back over three centuries. When Maharaja Sawai Jai Singh II founded Jaipur in 1727, he designed the city with dedicated bazaar streets, each assigned to specific trades. That layout survives today. Johari Bazaar still sparkles with gem dealers, Maniharon Ka Rasta still echoes with bangle-makers shaping lac over open flames, and Tripolia Bazaar still clinks with brassware artisans.</p>
              <p>What makes Jaipur shopping truly special is that you are buying directly from the source. The city is India&apos;s largest hub for gemstone cutting, Blue Pottery production, and block print textiles. Sanganer and Bagru -- both on Jaipur&apos;s outskirts -- are the birthplaces of India&apos;s most famous block printing traditions. The gem cutters of Johari Bazaar handle a significant share of the world&apos;s emerald and colored gemstone trade. This means prices in Jaipur are substantially lower than in Delhi, Mumbai, or export markets.</p>
              <p>For the best shopping experience, hire a local cab for the day so you can cover multiple bazaars without exhaustion. Our Triveni Cabs drivers know the genuine artisan shops, help you avoid tourist traps, and can carry your purchases safely back to the car between bazaar visits. Whether you are hunting for a statement Kundan necklace, hand-blocked fabric, or a set of colorful juttis, Jaipur delivers an unmatched shopping adventure.</p>
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
            <h2 className="text-2xl font-bold text-stone-800 mb-10 text-center">More Jaipur & Rajasthan Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: "/sightseeing/jaipur", title: "Jaipur Sightseeing Tours", desc: "All Jaipur attractions" },
                { href: "/jaipur", title: "Jaipur City Hub", desc: "Jaipur cab services" },
                { href: "/delhi-airport-to-jaipur-taxi", title: "Delhi Airport to Jaipur", desc: "Airport transfers" },
                { href: "/same-day-jaipur-tour-from-delhi", title: "Same Day Jaipur Tour", desc: "Full day from Delhi" },
                { href: "/jaipur-vs-udaipur", title: "Jaipur vs Udaipur", desc: "Which city to visit?" },
                { href: "/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur", title: "5-Day Rajasthan Road Trip", desc: "Jaipur-Udaipur-Jodhpur" },
                { href: "/udaipur-shopping-guide", title: "Udaipur Shopping Guide", desc: "Lake city shopping" },
                { href: "/jodhpur-shopping-guide", title: "Jodhpur Shopping Guide", desc: "Blue city bazaars" },
                { href: "/jaisalmer-shopping-guide", title: "Jaisalmer Shopping Guide", desc: "Desert city crafts" },
                { href: "/agra-shopping-guide", title: "Agra Shopping Guide", desc: "Marble inlay & leather" },
                { href: "/weekend-getaways-from-jaipur-by-car", title: "Weekend Getaways from Jaipur", desc: "Short trips by car" },
                { href: "/rajasthan-desert-circuit-tour", title: "Rajasthan Desert Circuit", desc: "Full Rajasthan tour" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Need a Jaipur Shopping Tour?</h2>
            <p className="text-purple-100/80 mb-10 text-lg max-w-2xl mx-auto">Our drivers know the genuine shops. No commission, no scams, just the best of Jaipur&apos;s bazaars.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-gem 3s ease-in-out infinite' }}>
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want a cab for Jaipur shopping tour" className="inline-flex items-center justify-center gap-2 bg-purple-900/40 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border border-purple-400/30 hover:bg-purple-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">
                WhatsApp Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
