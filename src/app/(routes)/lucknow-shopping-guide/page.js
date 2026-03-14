import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, ShoppingBag, Gem, Tag, Landmark, Crown, Percent, IndianRupee } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Lucknow Shopping Guide 2026 | Chikankari, Zardozi & Ittar',
  description: 'Lucknow shopping guide. Chikankari embroidery, Zardozi, Ittar perfumes, Nawabi jewelry, Lucknowi kurtas. Aminabad, Hazratganj, Chowk. Prices & tips. Call 7668570551.',
  keywords: 'lucknow shopping guide, shopping in lucknow, chikankari lucknow, aminabad market, hazratganj shopping, lucknow ittar, zardozi lucknow, lucknowi kurta',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/lucknow-shopping-guide' },
  openGraph: {
    title: 'Lucknow Shopping Guide 2026 | Chikankari, Zardozi & Ittar',
    description: 'Complete shopping guide for Lucknow. Chikankari, Zardozi, Ittar perfumes, Nawabi jewelry. Best markets, price ranges, bargaining tips.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/lucknow-shopping-guide',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/taj-mahal-hero.jpg', width: 1200, height: 630, alt: 'Lucknow Shopping Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucknow Shopping Guide 2026',
    description: 'Chikankari, Zardozi, Ittar perfumes. Best markets & bargaining tips.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/taj-mahal-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function LucknowShoppingGuidePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Lucknow Shopping Guide", "item": "https://www.trivenicabs.in/lucknow-shopping-guide" },
    ],
  };

  const faqData = [
    { question: "What is the best thing to buy in Lucknow?", answer: "Chikankari embroidery is Lucknow&apos;s signature craft -- delicate white-on-white threadwork on cotton, muslin, and silk fabrics. Other must-buys include Zardozi (gold thread embroidery), Ittar (natural perfumes), Lucknowi kurtas, Nawabi-style jewelry, and the city&apos;s famous kebab spice mixes." },
    { question: "How do I identify genuine Chikankari?", answer: "Genuine hand-embroidered Chikankari has these marks: slightly uneven stitches (hand vs machine uniformity), the embroidery is done from the back of the fabric (hold it up to light), the thread work feels slightly raised, and patterns include traditional motifs like paisley, flowers, and jaali (lattice). A single hand-embroidered kurta takes 2-15 days to complete." },
    { question: "What are typical Chikankari prices?", answer: "Machine Chikankari kurtas: ₹300-800. Hand-embroidered cotton kurtas: ₹800-3,000. Georgette/chiffon Chikankari: ₹1,500-8,000. Heavy bridal Chikankari sarees: ₹5,000-50,000+. Chikankari dupattas: ₹300-3,000. Fabric per meter: ₹200-2,000. Hand Chikankari with Mukaish (silver wire) work is the most premium." },
    { question: "Where is the best Chikankari market in Lucknow?", answer: "Aminabad is the traditional Chikankari hub with hundreds of shops and wholesale rates. Hazratganj has upscale Chikankari boutiques (Seva Chikan, Sabhyata). Chowk has traditional artisan workshops. For factory-direct prices, visit the Chikankari clusters in Daliganj and Kakori area where artisans work from home." },
    { question: "What is Lucknow Ittar and where to buy it?", answer: "Lucknow Ittar (attar) is natural perfume extracted from flowers, herbs, and sandalwood through traditional hydro-distillation. Famous varieties: Gulab (rose), Kewda (screw pine), Mitti (earth scent), Shamama (complex blend), and Hina. Buy from Aminabad&apos;s perfume lane or established shops in Chowk. Prices: ₹100-5,000+ per tola depending on the flower oil used." },
    { question: "Is bargaining expected in Lucknow markets?", answer: "Yes, bargaining is standard in Aminabad, Chowk, and Nakhas bazaar. Start at 40-50% of the quoted price. In Hazratganj boutiques, prices are usually fixed but seasonal discounts are common. For Chikankari, compare hand vs machine work prices before bargaining -- the difference is significant." },
    { question: "What is Zardozi embroidery?", answer: "Zardozi is an ancient art of embroidering with gold and silver threads, beads, and sequins on heavy fabrics like velvet and silk. Lucknow is a major center for this craft. Items include sherwanis, sarees, cushion covers, wall hangings, and bridal wear. Prices range from ₹2,000 for small items to ₹1,00,000+ for bridal sherwanis." },
    { question: "What food items can I carry back from Lucknow?", answer: "Lucknow&apos;s edible souvenirs include: Tunday Kebabi&apos;s spice mixes, Makhan Malai (winter specialty, seasonal), Revdi and Gazak (sesame sweets), Lucknowi Paan ingredients, special Biryani masala, and dry fruit mixes from Aminabad. Sharmaji Ki Chai mix is also popular. Pack in airtight containers for travel." },
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
      name: "Chikankari Embroidery",
      tagline: "Lucknow&apos;s White-on-White Art",
      desc: "Chikankari is Lucknow&apos;s most celebrated craft -- intricate hand embroidery dating back to Mughal times. Skilled artisans (mostly women) create delicate floral and paisley patterns using white thread on fine cotton, muslin, georgette, and silk fabrics. The craft involves over 30 distinct stitches, with each piece taking days to weeks to complete. It is a GI-tagged product unique to Lucknow.",
      items: ["Cotton kurtas (₹800-3,000)", "Georgette sarees (₹3,000-25,000)", "Dupattas (₹300-3,000)", "Dress material (₹500-5,000)", "Mukaish work kurtas (₹2,000-8,000)", "Bridal sets (₹10,000-50,000+)"],
      where: "Aminabad, Hazratganj boutiques, Chowk, Janpath Market",
      tip: "Hold Chikankari fabric against light -- genuine hand embroidery shows stitches on the back side. Machine work is flat and identical on both sides. Aminabad has the widest range and best prices.",
      color: "from-purple-600 to-violet-600",
      accent: "purple",
    },
    {
      name: "Zardozi & Gold Thread Work",
      tagline: "Mughal Court Embroidery",
      desc: "Zardozi (literally &apos;gold sewing&apos;) is the art of embroidering with metallic threads, sequins, and beads on luxurious fabrics. Lucknow&apos;s Zardozi tradition was patronized by Nawabs and features intricate paisley, floral, and geometric motifs. Today it adorns wedding wear, home furnishings, and accessories.",
      items: ["Zardozi clutch bags (₹500-3,000)", "Cushion covers (₹300-2,000)", "Sherwanis (₹5,000-1,00,000+)", "Wall hangings (₹1,000-10,000)", "Bridal dupattas (₹2,000-20,000)", "Embroidered shoes (₹500-3,000)"],
      where: "Chowk, Aminabad, Old City workshops near Bara Imambara",
      tip: "Real Zardozi uses metal thread (heavier and shinier than plastic thread). Visit workshops near Bara Imambara to see artisans working. Wedding season (Oct-Feb) offers the widest selection.",
      color: "from-amber-700 to-orange-700",
      accent: "amber",
    },
    {
      name: "Ittar (Natural Perfumes)",
      tagline: "Nawabi Fragrance Heritage",
      desc: "Lucknow has been India&apos;s ittar capital since the Nawabi era. These are pure, alcohol-free perfumes extracted from flowers, herbs, and wood through traditional hydro-distillation (deg-bhapka method). Famous scents include Gulab (rose), Kewda (pandanus), Mitti (petrichor/earth), Shamama (complex spice blend), and Hina (henna flower).",
      items: ["Rose ittar (₹200-2,000/tola)", "Kewda ittar (₹150-1,000/tola)", "Mitti ittar (₹100-500/tola)", "Shamama blend (₹500-5,000/tola)", "Gift sets (₹500-3,000)", "Ittar bottles (₹100-1,000)"],
      where: "Aminabad perfume lane, Chowk, Yahiyaganj",
      tip: "Test ittar on your wrist and wait 15 minutes -- genuine natural ittar evolves and lasts hours. Synthetic perfumes fade quickly. Mitti (earth scent) ittar is unique to Lucknow and makes an unforgettable souvenir.",
      color: "from-teal-600 to-cyan-600",
      accent: "teal",
    },
    {
      name: "Nawabi Jewelry & Accessories",
      tagline: "Royal Adornment",
      desc: "Lucknow&apos;s jewelry tradition reflects Nawabi elegance -- intricate, detailed, and often featuring uncut stones and enamel work. Kundan, polki, and jadau styles are popular for bridal jewelry, while oxidized silver and artificial jewelry offer affordable elegance. Traditional accessories include the Lucknowi topi (embroidered cap) and ornate buttons.",
      items: ["Kundan jewelry sets (₹3,000-50,000+)", "Silver jewelry (₹500-5,000)", "Lucknowi topi/cap (₹200-1,000)", "Artificial jewelry (₹200-2,000)", "Meenakari bangles (₹500-5,000)", "Ornate buttons (₹50-300/set)"],
      where: "Aminabad, Yahiyaganj, Hazratganj jewelry shops",
      tip: "For authentic Nawabi-style jewelry, visit the old jewelers in Chowk area. For modern interpretations, Hazratganj has curated boutiques. Always check hallmark certification for gold and silver.",
      color: "from-rose-600 to-pink-600",
      accent: "rose",
    },
    {
      name: "Lucknowi Kurtas & Garments",
      tagline: "Tehzeeb in Every Stitch",
      desc: "The Lucknowi kurta is a symbol of elegance across India. Known for its perfect fit, fine fabric, and subtle Chikankari or Zardozi embellishment, these kurtas represent the city&apos;s Nawabi refinement. Both men&apos;s and women&apos;s kurtas are crafted in cotton, linen, silk, and georgette with varying levels of embroidery.",
      items: ["Men&apos;s cotton kurtas (₹600-2,500)", "Women&apos;s kurta sets (₹800-5,000)", "Silk kurtas (₹2,000-8,000)", "Kurta-pajama sets (₹1,000-5,000)", "Nehru jackets (₹1,500-5,000)", "Sherwanis (₹5,000-50,000+)"],
      where: "Aminabad, Hazratganj (Seva, Sabhyata), Janpath Market",
      tip: "For the best selection of men&apos;s kurtas, visit Aminabad during festival season. Hazratganj shops offer premium quality with air-conditioned comfort and fixed prices.",
      color: "from-yellow-600 to-amber-600",
      accent: "yellow",
    },
    {
      name: "Sweets, Spices & Edible Souvenirs",
      tagline: "Nawabi Culinary Treasures",
      desc: "Lucknow&apos;s culinary heritage extends to packable souvenirs. The city is famous for kebab spice mixes, special biryani masalas, traditional sweets, and paan-related products. Seasonal specialties like Makhan Malai (winter) and Sharbats (summer) have devoted followings.",
      items: ["Kebab masala mixes (₹100-500)", "Biryani masala (₹100-400)", "Revdi & Gazak sweets (₹200-500/kg)", "Paan accessories (₹100-500)", "Thandai mix (₹200-500)", "Dry fruit mixes (₹300-1,000)"],
      where: "Aminabad food lanes, Chowk, Nakhas bazaar, Hazratganj",
      tip: "Buy kebab masala from shops near Tunday Kebabi in Aminabad. For sweets, Hazratganj&apos;s Ram Asrey is a century-old institution known for its Malai Gilori. Pack everything in airtight containers.",
      color: "from-emerald-600 to-green-600",
      accent: "emerald",
    },
  ];

  const marketAreas = [
    { name: "Aminabad", desc: "Lucknow&apos;s oldest and busiest bazaar. A sprawling market with hundreds of Chikankari shops, fabric stores, perfumers, jewelry shops, and food stalls. This is where locals shop and prices are lowest. Expect narrow lanes, crowds, and authentic haggling.", timings: "10 AM - 9 PM (closed Sundays)", bestFor: "Chikankari, fabric, ittar, jewelry, street food", vibe: "Bustling & authentic" },
    { name: "Hazratganj", desc: "Lucknow&apos;s upscale shopping boulevard. British-era architecture houses modern boutiques, branded Chikankari stores (Seva, Sabhyata), bookshops, and restaurants. Air-conditioned comfort with fixed prices. The Lucknow equivalent of Delhi&apos;s Khan Market.", timings: "10:30 AM - 9 PM", bestFor: "Premium Chikankari, branded shopping, dining", vibe: "Elegant & modern" },
    { name: "Chowk", desc: "The heart of old Lucknow near Bara Imambara. A chaotic but fascinating area with traditional craftsmen, Zardozi workshops, ittar shops, and legendary food joints. The narrow lanes around Akbari Gate are packed with history and craft.", timings: "10 AM - 8:30 PM", bestFor: "Zardozi, traditional crafts, ittar, Lucknowi food", vibe: "Heritage & atmospheric" },
    { name: "Nakhas Bazaar", desc: "An eclectic market near Chowk known for antiques, traditional items, handicrafts, and curiosities. Also a major hub for dry fruits, spices, and household items at wholesale rates. Less tourist-oriented but great for unique finds.", timings: "10 AM - 8 PM (busiest on Sundays)", bestFor: "Antiques, dry fruits, spices, household items", vibe: "Eclectic & surprising" },
    { name: "Janpath Market & Government Emporiums", desc: "Modern shopping complex with Chikankari and handicraft shops at reasonable fixed prices. Gangotri (UP government emporium) nearby offers certified Chikankari. Good alternative if you prefer fixed-price shopping without bargaining.", timings: "10 AM - 8 PM", bestFor: "Fixed-price Chikankari, handicrafts, souvenirs", vibe: "Organized & reliable" },
  ];

  const bargainingTips = [
    { tip: "Start at 40-50% of the quoted price in Aminabad and Chowk bazaars", icon: Percent },
    { tip: "Know the difference between hand and machine Chikankari -- prices differ 3-5x", icon: Tag },
    { tip: "Gangotri (government emporium) has fixed prices -- use as quality benchmarks", icon: Shield },
    { tip: "Avoid touts near Bara Imambara who direct tourists to commission shops", icon: ShoppingBag },
    { tip: "Visit Aminabad on weekday mornings for fewer crowds and better attention", icon: Clock },
    { tip: "For ittar, test on skin and wait -- genuine natural perfumes develop slowly", icon: Gem },
    { tip: "Buy multiple Chikankari items from one shop for wholesale-level discounts", icon: IndianRupee },
    { tip: "Cash payments in Aminabad can save an additional 5-10%", icon: IndianRupee },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Lucknow Locals", desc: "We know every market lane" },
    { icon: ShoppingBag, title: "Shopping Experts", desc: "Genuine artisan connections" },
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
              Lucknow <span className="shimmer-text">Shopping</span> Guide
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-400/60" />
              <Crown className="w-6 h-6 text-purple-400" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-400/60" />
            </div>
            <p className="text-lg md:text-xl text-purple-100/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              Chikankari embroidery, Zardozi gold work, natural Ittar perfumes, and Nawabi elegance. Discover the City of Tehzeeb&apos;s finest crafts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                <Phone className="w-5 h-5" /> Call Now: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want a cab for Lucknow shopping tour" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-purple-400/30 hover:bg-white/20 hover:scale-105 transition-all duration-500">
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
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3 text-center">What to Buy in Lucknow</h2>
            <p className="text-stone-500 text-center mb-14">Nawabi refinement meets artisan craftsmanship in every bazaar</p>
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
            <h2 className="text-3xl font-bold text-white mb-3 text-center">Best Shopping Areas in Lucknow</h2>
            <p className="text-purple-200/60 text-center mb-14">From Nawabi heritage lanes to modern boutique boulevards</p>
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
                    "Morning: Bara Imambara & Chhota Imambara visit (9:00-11:00 AM)",
                    "Chowk area shopping -- Zardozi workshops & ittar (11:00 AM-1:00 PM)",
                    "Lunch at Tunday Kebabi or Idris Biryani in Chowk (1:00-2:00 PM)",
                    "Aminabad Chikankari shopping (2:00-4:30 PM)",
                    "Hazratganj premium boutique shopping (4:30-6:00 PM)",
                    "British Residency or Rumi Darwaza photo stop (6:00-6:30 PM)",
                    "Return to hotel / onward journey",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-700 text-sm py-2 px-3 rounded-lg hover:bg-purple-50/50 transition-colors border-b border-purple-100/50 last:border-0">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-5 border border-purple-200/50">
                  <p className="text-purple-800 font-semibold text-sm">Full day local cab in Lucknow: ₹1,800 | From Delhi to Lucknow: ₹8,500 (one way)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-20 px-4 bg-gradient-to-b from-violet-50 to-stone-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">Shopping in Lucknow: The Nawabi Craft Capital</h2>
            <div className="glass-card-light rounded-3xl p-8 md:p-10">
              <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-4">
              <p>Lucknow&apos;s shopping culture is inseparable from its Nawabi heritage. The city&apos;s artisans were patronized by Awadh&apos;s Nawabs for centuries, perfecting crafts that demanded patience, precision, and artistic sensibility. Chikankari embroidery alone involves over 30 distinct stitches -- each with its own name and purpose. When you buy Chikankari in Lucknow, you are purchasing from the world&apos;s only source of this delicate art form, directly supporting artisan families who have practiced this craft for generations.</p>
              <p>The city&apos;s markets reflect its layered history. Aminabad, established in the Nawabi era, retains its old-world charm with narrow lanes packed with Chikankari shops where you can negotiate directly with merchants. Hazratganj, built during the British period, offers a more refined shopping experience with curated boutiques and fixed prices. Chowk, the oldest quarter, is where traditional Zardozi workshops and ittar distillers continue their centuries-old trades in the shadow of Bara Imambara.</p>
              <p>For the best Lucknow shopping experience, a local cab is essential. The city&apos;s major shopping districts -- Aminabad, Hazratganj, and Chowk -- are spread across different parts of the city. Our Triveni Cabs drivers know the genuine artisan clusters, can help you avoid tourist markups, and ensure you visit the city&apos;s famous food spots between shopping stops. After all, in Lucknow, shopping and food are equally important cultural experiences.</p>
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
            <h2 className="text-2xl font-bold text-stone-800 mb-10 text-center">More Lucknow & UP Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: "/sightseeing/lucknow", title: "Lucknow Sightseeing Tours", desc: "All Lucknow attractions" },
                { href: "/lucknow", title: "Lucknow City Hub", desc: "Lucknow cab services" },
                { href: "/ayodhya-ram-mandir-tour-from-lucknow", title: "Ayodhya from Lucknow", desc: "Ram Mandir tour" },
                { href: "/same-day-agra-tour-from-lucknow", title: "Agra from Lucknow", desc: "Day trip to Taj" },
                { href: "/varanasi-shopping-guide", title: "Varanasi Shopping Guide", desc: "Banarasi silk & brassware" },
                { href: "/agra-shopping-guide", title: "Agra Shopping Guide", desc: "Marble inlay & leather" },
                { href: "/delhi-shopping-guide", title: "Delhi Shopping Guide", desc: "Capital city markets" },
                { href: "/prayagraj-sangam-tour", title: "Prayagraj Sangam Tour", desc: "Spiritual circuit" },
                { href: "/religious-tours", title: "Religious Tours", desc: "All pilgrimage routes" },
                { href: "/wedding/lucknow", title: "Lucknow Wedding Cars", desc: "Wedding car rental" },
                { href: "/outstation-cabs", title: "Outstation Cabs", desc: "Inter-city travel" },
                { href: "/10-day-north-india-road-trip", title: "10-Day North India Trip", desc: "Complete road trip" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Need a Lucknow Shopping Tour?</h2>
            <p className="text-purple-100/80 mb-10 text-lg max-w-2xl mx-auto">Our drivers know the genuine Chikankari artisans and Nawabi craft shops. No commission, no scams.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-gem 3s ease-in-out infinite' }}>
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want a cab for Lucknow shopping tour" className="inline-flex items-center justify-center gap-2 bg-purple-900/40 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border border-purple-400/30 hover:bg-purple-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">
                WhatsApp Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
