import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, ShoppingBag, Gem, Tag, Landmark, Crown, Percent, IndianRupee } from '@/components/ui/icons';

export const metadata = {
  title: 'Amritsar Shopping Guide 2026 | Phulkari, Juttis & Dry Fruits',
  description: 'Amritsar shopping guide. Phulkari dupattas, Juttis, Amritsari papad, dry fruits, Pashmina shawls. Hall Bazaar, Katra Jaimal Singh, Guru Bazaar. Call 7668570551.',
  keywords: 'amritsar shopping guide, shopping in amritsar, phulkari amritsar, amritsar juttis, hall bazaar amritsar, katra jaimal singh, amritsar dry fruits, pashmina shawls',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/amritsar-shopping-guide' },
  openGraph: {
    title: 'Amritsar Shopping Guide 2026 | Phulkari, Juttis & Dry Fruits',
    description: 'Complete shopping guide for Amritsar. Phulkari, Juttis, dry fruits, Pashmina shawls. Best markets, price ranges, bargaining tips.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/amritsar-shopping-guide',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/taj-mahal-hero.jpg', width: 1200, height: 630, alt: 'Amritsar Shopping Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amritsar Shopping Guide 2026',
    description: 'Phulkari dupattas, Juttis, dry fruits, Pashmina shawls. Best markets & tips.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/taj-mahal-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function AmritsarShoppingGuidePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Amritsar Shopping Guide", "item": "https://www.trivenicabs.in/amritsar-shopping-guide" },
    ],
  };

  const faqData = [
    { question: "What is the best thing to buy in Amritsar?", answer: "Phulkari dupattas and suits are Amritsar&apos;s most iconic textile -- vibrant floral embroidery that Punjab is famous for. Other must-buys include Punjabi juttis (handcrafted leather shoes), dry fruits and nuts at wholesale prices, Amritsari papad, Pashmina and woolen shawls, and traditional Punjabi suits and fabrics." },
    { question: "What is Phulkari and where to buy it?", answer: "Phulkari (literally &apos;flower work&apos;) is Punjab&apos;s traditional embroidery art where colorful silk threads create geometric and floral patterns on cotton or chiffon fabric. Hand-embroidered Phulkari takes weeks to months. Buy from Hall Bazaar, Katra Jaimal Singh, or the shops near Golden Temple. Hand Phulkari: ₹2,000-15,000. Machine Phulkari: ₹500-2,000." },
    { question: "Are dry fruits cheaper in Amritsar?", answer: "Yes, Amritsar&apos;s dry fruit market (near Hall Bazaar and Katra Ahluwalia) offers wholesale prices that are 20-40% cheaper than Delhi or Mumbai. Almonds, cashews, walnuts, pistachios, raisins, and dried figs are the best buys. The market sources directly from Afghanistan, Iran, and Kashmir. Buy loose (not pre-packed) for the best rates." },
    { question: "What are Amritsari juttis?", answer: "Amritsari juttis are handcrafted leather shoes with intricate embroidery, beadwork, and thread work. They come in hundreds of designs for men and women. Prices: basic juttis ₹200-500, designer juttis ₹500-2,000, bridal juttis ₹1,000-5,000. Katra Jaimal Singh and Hall Bazaar have the widest selection. Break them in gradually as new leather is stiff." },
    { question: "Is bargaining expected in Amritsar?", answer: "Yes, bargaining is standard in all bazaars. Start at 40-50% of the quoted price in Hall Bazaar and Katra markets. For dry fruits, compare prices at 2-3 shops and bargain firmly. Fixed-price shops exist in modern malls (Alpha One, Trilium). The shops inside Golden Temple complex are fixed-price and reliable." },
    { question: "What food items can I carry back from Amritsar?", answer: "Amritsari papad (famous Bikaneri-style, ₹200-500/kg), Pinni and Panjiri (Punjabi sweets), Amritsari wadian (sun-dried lentil dumplings), pickles, spice mixes for butter chicken and dal makhani, and packed Amritsari kulcha mixes. Kanha Sweets and Novelty Sweets offer well-packed travel options." },
    { question: "Where can I buy authentic Pashmina in Amritsar?", answer: "Hall Bazaar and the shawl market near Katra Jaimal Singh have Kashmiri Pashmina dealers. Genuine Pashmina is extremely soft, lightweight, and can pass through a ring (ring test). Prices: ₹5,000-50,000+ for genuine Pashmina. Beware of synthetic imitations sold as Pashmina -- they feel heavier and less soft. Buy from established shops with certification." },
    { question: "What is the best time to shop in Amritsar?", answer: "Morning (10 AM - 1 PM) is ideal for bazaar shopping when shops are fresh and less crowded. Avoid afternoon heat in summer (May-July). Evening shopping (5-8 PM) is popular in Hall Bazaar. The area around Golden Temple is busiest during prayer times. Dry fruit shops open early (9 AM) and offer best attention to early shoppers." },
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
      name: "Phulkari Embroidery",
      tagline: "Punjab&apos;s Floral Heritage",
      desc: "Phulkari is Punjab&apos;s most celebrated textile art -- vibrant silk thread embroidery on handwoven cotton creating stunning floral and geometric patterns. Traditionally made by women for weddings and celebrations, Phulkari includes several varieties: Bagh (garden, fully covered), Chope (wedding gift), Thirma (white background), and Sainchi (figurative). Hand-embroidered pieces can take months to complete.",
      items: ["Machine Phulkari dupattas (₹500-2,000)", "Hand Phulkari dupattas (₹2,000-10,000)", "Phulkari suits (₹1,500-8,000)", "Bagh Phulkari (₹5,000-15,000)", "Phulkari stoles (₹500-3,000)", "Phulkari cushion covers (₹300-1,500)"],
      where: "Hall Bazaar, Katra Jaimal Singh, Golden Temple area shops",
      tip: "Hand Phulkari has slightly irregular stitches and the back shows the design clearly. Machine Phulkari is uniform and the back has floating threads. For authentic pieces, ask for &apos;haath da kaam&apos; (handwork).",
      color: "from-purple-600 to-violet-600",
      accent: "purple",
    },
    {
      name: "Punjabi Juttis",
      tagline: "Handcrafted Leather Art",
      desc: "Amritsar is one of India&apos;s top jutti-making centers. Skilled cobblers (mochis) handcraft these pointed-toe leather shoes using generations-old techniques. Designs range from heavily embroidered bridal juttis with beadwork and zari to simple everyday styles. Both men&apos;s and women&apos;s styles are available in hundreds of colors and patterns.",
      items: ["Basic women&apos;s juttis (₹200-500)", "Embroidered juttis (₹500-1,500)", "Bridal juttis (₹1,000-5,000)", "Men&apos;s mojaris (₹300-2,000)", "Kids&apos; juttis (₹150-400)", "Designer/export juttis (₹1,500-3,000)"],
      where: "Katra Jaimal Singh, Hall Bazaar, shops near Golden Temple",
      tip: "Buy half a size larger -- juttis mold to your feet after a few wearings. Check stitching quality and leather thickness. Katra Jaimal Singh has the widest selection at competitive prices.",
      color: "from-amber-700 to-orange-700",
      accent: "amber",
    },
    {
      name: "Dry Fruits & Nuts",
      tagline: "Wholesale Afghan Imports",
      desc: "Amritsar&apos;s proximity to the Kashmir and Afghanistan trade routes makes it a dry fruit wholesale hub. Almonds, cashews, walnuts, pistachios, dried figs, apricots, and raisins are available at 20-40% below metro city prices. The market sources directly from Afghanistan, Iran, and Central Asia.",
      items: ["Almonds/Badam (₹600-1,200/kg)", "Cashews/Kaju (₹700-1,400/kg)", "Walnuts/Akhrot (₹500-1,000/kg)", "Pistachios/Pista (₹800-1,600/kg)", "Dried figs/Anjeer (₹400-1,000/kg)", "Mixed dry fruits (₹500-1,000/kg)"],
      where: "Katra Ahluwalia, Hall Bazaar, Lawrence Road",
      tip: "Buy loose (khula) dry fruits, not pre-packed -- you can check quality and get better rates. Taste before buying. Wholesale shops in Katra Ahluwalia offer the best bulk rates.",
      color: "from-teal-600 to-cyan-600",
      accent: "teal",
    },
    {
      name: "Pashmina & Woolen Shawls",
      tagline: "Kashmiri Luxury via Punjab",
      desc: "Amritsar has been a major Pashmina and shawl trading center due to its position on the Kashmir trade route. Genuine Kashmiri Pashmina, Shahtoosh alternatives, woolen shawls, and embroidered stoles are available at prices lower than Kashmir tourist markets. The variety includes Kani weave, Sozni embroidery, and Jamawar patterns.",
      items: ["Woolen shawls (₹500-3,000)", "Kashmiri embroidered stoles (₹1,000-8,000)", "Pure Pashmina (₹5,000-50,000+)", "Kani weave shawls (₹8,000-1,00,000+)", "Merino wool stoles (₹500-2,000)", "Jamawar shawls (₹3,000-30,000)"],
      where: "Hall Bazaar shawl shops, Katra Jaimal Singh, Lawrence Road",
      tip: "The ring test works for genuine Pashmina -- a real Pashmina shawl can pass through a finger ring. It should feel incredibly soft and warm despite being lightweight. Beware of viscose/synthetic sold as Pashmina.",
      color: "from-rose-600 to-pink-600",
      accent: "rose",
    },
    {
      name: "Punjabi Suits & Fabrics",
      tagline: "Traditional & Trendy",
      desc: "Amritsar is a textile wholesale hub for Punjabi suits, salwar kameez, and fabric. You will find everything from traditional Patiala suits and Punjabi suits with heavy embroidery to trendy Indo-Western designs. The fabric market offers cotton, silk, georgette, and chanderi at wholesale prices.",
      items: ["Cotton Punjabi suits (₹500-2,000)", "Embroidered suits (₹1,500-8,000)", "Patiala salwars (₹300-1,000)", "Fabric per meter (₹200-1,500)", "Wedding suits (₹3,000-20,000)", "Dupatta sets (₹500-3,000)"],
      where: "Hall Bazaar, Katra Jaimal Singh, Lawrence Road textile market",
      tip: "For the latest designs, visit the shops in Hall Bazaar. For wholesale fabric, Lawrence Road&apos;s textile market offers bulk rates. Wedding season (Oct-Feb) has the widest selection of heavy suits.",
      color: "from-yellow-600 to-amber-600",
      accent: "yellow",
    },
    {
      name: "Amritsari Food Souvenirs",
      tagline: "Punjab on Your Plate",
      desc: "Amritsar is India&apos;s food capital, and many delicacies can be packed for travel. Amritsari papad is legendary -- thin, crispy, and available in multiple flavors. Other edible souvenirs include Pinni (winter energy sweet), Panjiri, pickles, wadian (sun-dried lentil dumplings), and spice mixes for Amritsari dishes.",
      items: ["Amritsari papad (₹200-500/kg)", "Pinni sweet boxes (₹300-800/kg)", "Panjiri mix (₹200-500/kg)", "Amritsari wadian (₹200-600/kg)", "Pickle varieties (₹100-400)", "Spice mixes (₹100-300)"],
      where: "Katra Ahluwalia, Hall Bazaar food shops, Golden Temple Langar shop",
      tip: "For papad, buy from shops in Katra Ahluwalia that make their own. For sweets, Kanha Sweets and Novelty Sweets are trusted names that pack items for travel. Buy wadian in winter when they are freshly made.",
      color: "from-emerald-600 to-green-600",
      accent: "emerald",
    },
  ];

  const marketAreas = [
    { name: "Hall Bazaar", desc: "Amritsar&apos;s most famous shopping street, running from the Railway Station to the Golden Temple area. A vibrant mix of textile shops, jutti stores, Phulkari dealers, and general merchandise. Both wholesale and retail shops line this wide road. The heart of Amritsar&apos;s shopping scene.", timings: "10 AM - 9 PM", bestFor: "Phulkari, suits, juttis, textiles, general shopping", vibe: "Vibrant & iconic" },
    { name: "Katra Jaimal Singh", desc: "A bustling market near the Golden Temple specializing in traditional Punjabi items. Famous for juttis, Phulkari, traditional accessories, and religious items. The lanes are narrow and packed with shops offering competitive prices due to high competition.", timings: "9 AM - 8:30 PM", bestFor: "Juttis, Phulkari, religious items, traditional accessories", vibe: "Traditional & competitive" },
    { name: "Guru Bazaar", desc: "Located near the Golden Temple, this market caters to both pilgrims and shoppers. Religious items, steel utensils, kirpan sets, traditional Sikh accessories, and prayer items are specialties. Also has general household and clothing shops.", timings: "9 AM - 8 PM", bestFor: "Religious items, steel utensils, Sikh accessories, kirpans", vibe: "Devotional & practical" },
    { name: "Katra Ahluwalia", desc: "The wholesale dry fruit and food market of Amritsar. Narrow lanes packed with shops selling nuts, dried fruits, papads, pickles, and spices at wholesale prices. This is where local traders buy their stock -- tourists get the same bulk rates.", timings: "9 AM - 7:30 PM (closed Sundays)", bestFor: "Dry fruits, nuts, papad, spices, edible items", vibe: "Wholesale & bustling" },
    { name: "Lawrence Road & Modern Markets", desc: "Amritsar&apos;s modern shopping district with textile showrooms, branded stores, and malls (Alpha One, Trilium). Fixed prices, air-conditioned comfort, and a mix of traditional and modern retail. Good for those who prefer organized shopping without bargaining.", timings: "10:30 AM - 9 PM", bestFor: "Modern shopping, branded clothes, fabric showrooms", vibe: "Modern & organized" },
  ];

  const bargainingTips = [
    { tip: "Start at 40-50% of the quoted price in Hall Bazaar and Katra markets", icon: Percent },
    { tip: "Compare dry fruit prices at 3-4 shops in Katra Ahluwalia before buying", icon: Tag },
    { tip: "Golden Temple complex shops have fair fixed prices -- use as benchmarks", icon: Shield },
    { tip: "Avoid shops where auto-rickshaw drivers take you (they get 20-30% commission)", icon: ShoppingBag },
    { tip: "Morning shopping means better prices and less crowded lanes", icon: Clock },
    { tip: "For Phulkari, learn to distinguish hand from machine embroidery before buying", icon: Gem },
    { tip: "Bulk dry fruit purchases get significantly better rates per kg", icon: IndianRupee },
    { tip: "Cash payments in Katra markets often get 5-10% additional discount", icon: IndianRupee },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Amritsar Locals", desc: "We know every market lane" },
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
              Amritsar <span className="shimmer-text">Shopping</span> Guide
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-400/60" />
              <Crown className="w-6 h-6 text-purple-400" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-400/60" />
            </div>
            <p className="text-lg md:text-xl text-purple-100/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              Phulkari embroidery, handcrafted juttis, wholesale dry fruits, and Pashmina shawls. Explore the Holy City&apos;s vibrant bazaars with a local&apos;s guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                <Phone className="w-5 h-5" /> Call Now: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want a cab for Amritsar shopping tour" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-purple-400/30 hover:bg-white/20 hover:scale-105 transition-all duration-500">
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
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3 text-center">What to Buy in Amritsar</h2>
            <p className="text-stone-500 text-center mb-14">Punjabi craftsmanship and wholesale treasures at the Golden City&apos;s bazaars</p>
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
            <h2 className="text-3xl font-bold text-white mb-3 text-center">Best Shopping Areas in Amritsar</h2>
            <p className="text-purple-200/60 text-center mb-14">Five distinct markets from heritage bazaars to modern malls</p>
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
                    "Morning: Golden Temple darshan (6:00-8:30 AM)",
                    "Katra Jaimal Singh juttis & Phulkari shopping (9:00-11:00 AM)",
                    "Hall Bazaar textiles & shawls (11:00 AM-1:00 PM)",
                    "Lunch at Bharawan Da Dhaba or Kesar Da Dhaba (1:00-2:00 PM)",
                    "Katra Ahluwalia dry fruit wholesale shopping (2:00-3:30 PM)",
                    "Jallianwala Bagh visit (3:30-4:30 PM)",
                    "Wagah Border ceremony (drive + ceremony 4:30-7:30 PM)",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-700 text-sm py-2 px-3 rounded-lg hover:bg-purple-50/50 transition-colors border-b border-purple-100/50 last:border-0">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-5 border border-purple-200/50">
                  <p className="text-purple-800 font-semibold text-sm">Full day local cab in Amritsar (with Wagah): ₹2,500 | From Delhi to Amritsar: ₹9,000 (one way)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-20 px-4 bg-gradient-to-b from-violet-50 to-stone-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">Shopping in Amritsar: Punjab&apos;s Golden Bazaar Heritage</h2>
            <div className="glass-card-light rounded-3xl p-8 md:p-10">
              <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-4">
              <p>Amritsar&apos;s bazaars pulse with the energy and warmth that Punjab is famous for. The city&apos;s markets have thrived for centuries as a major trade crossroads -- connecting Kashmir, Afghanistan, and Central Asia with the plains of India. This trading heritage means Amritsar offers products at genuine wholesale prices that are hard to match elsewhere in India, particularly dry fruits, textiles, and Pashmina shawls.</p>
              <p>The cultural richness of Amritsar&apos;s markets goes beyond commerce. Phulkari embroidery tells stories of Punjab&apos;s celebrations -- each pattern has meaning, from fertility symbols to harvest motifs. The jutti-makers of Katra Jaimal Singh carry forward a centuries-old cobbling tradition where each pair is stitched by hand. And the dry fruit merchants of Katra Ahluwalia maintain trading relationships with Afghan and Iranian suppliers that stretch back generations.</p>
              <p>For the most efficient Amritsar shopping trip, a local cab is invaluable. The main markets (Hall Bazaar, Katra Jaimal Singh, Guru Bazaar) are clustered near the Golden Temple but traffic can be intense. Our Triveni Cabs drivers know the best parking spots, can carry your shopping bags, and coordinate your market visits with sightseeing at the Golden Temple, Jallianwala Bagh, and the Wagah Border ceremony. A combined shopping-sightseeing day is the perfect way to experience Amritsar.</p>
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
            <h2 className="text-2xl font-bold text-stone-800 mb-10 text-center">More Amritsar & Punjab Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: "/sightseeing/amritsar", title: "Amritsar Sightseeing Tours", desc: "All Amritsar attractions" },
                { href: "/amritsar", title: "Amritsar City Hub", desc: "Amritsar cab services" },
                { href: "/baisakhi-amritsar-cab", title: "Baisakhi Transport", desc: "Festival cab service" },
                { href: "/delhi-shopping-guide", title: "Delhi Shopping Guide", desc: "Capital city markets" },
                { href: "/shimla-shopping-guide", title: "Shimla Shopping Guide", desc: "Hill station shopping" },
                { href: "/jaipur-shopping-guide", title: "Jaipur Shopping Guide", desc: "Pink city bazaars" },
                { href: "/agra-shopping-guide", title: "Agra Shopping Guide", desc: "Marble inlay & leather" },
                { href: "/outstation-cabs", title: "Outstation Cabs", desc: "Inter-city travel" },
                { href: "/10-day-north-india-road-trip", title: "10-Day North India Trip", desc: "Complete road trip" },
                { href: "/weekend-getaways-from-delhi-by-car", title: "Weekend Getaways from Delhi", desc: "Short trips by car" },
                { href: "/religious-tours", title: "Religious Tours", desc: "All pilgrimage routes" },
                { href: "/wedding/amritsar", title: "Amritsar Wedding Cars", desc: "Wedding car rental" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Need an Amritsar Shopping Tour?</h2>
            <p className="text-purple-100/80 mb-10 text-lg max-w-2xl mx-auto">Our drivers know the genuine shops and wholesale markets. No commission, no scams, just the best of Punjab.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-gem 3s ease-in-out infinite' }}>
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want a cab for Amritsar shopping tour" className="inline-flex items-center justify-center gap-2 bg-purple-900/40 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border border-purple-400/30 hover:bg-purple-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">
                WhatsApp Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
