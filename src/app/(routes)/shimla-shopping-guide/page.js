import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, ShoppingBag, Gem, Tag, Landmark, Crown, Percent, IndianRupee } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Shimla Shopping Guide 2026 | What to Buy & Where (Prices)',
  description: 'What to buy in Shimla: Kullu shawls ₹500-5K, wooden toys ₹50-500, Himachali caps ₹150+, dry fruits, jams. Lakkar Bazaar, Mall Road, Lower Bazaar. Bargaining tips.',
  keywords: 'shimla shopping guide, shopping in shimla, lakkar bazaar shimla, shimla mall road shopping, kullu shawls shimla, shimla wooden toys, himachali cap, shimla dry fruits',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/shimla-shopping-guide' },
  openGraph: {
    title: 'Shimla Shopping Guide 2026 | Wooden Toys, Shawls & Hill Crafts',
    description: 'Complete shopping guide for Shimla. Wooden toys, Kullu shawls, Himachali caps, dry fruits, jams. Best markets, price ranges, tips.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/shimla-shopping-guide',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/taj-mahal-hero.jpg', width: 1200, height: 630, alt: 'Shimla Shopping Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shimla Shopping Guide 2026',
    description: 'Wooden toys, Kullu shawls, Himachali caps. Best markets & tips.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/taj-mahal-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function ShimlaShoppingGuidePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Shimla Shopping Guide", "item": "https://www.trivenicabs.in/shimla-shopping-guide" },
    ],
  };

  const faqData = [
    { question: "What is the best thing to buy in Shimla?", answer: "Shimla&apos;s top buys are: Lakkar Bazaar wooden toys and crafts, Kullu-Manali shawls (wool and pashmina), Himachali caps (topis), locally made jams and pickles (apple, plum, mixed fruit), knitwear (sweaters, socks, gloves), dry fruits, and Himachali handicrafts. The wooden walking sticks from Lakkar Bazaar are iconic souvenirs." },
    { question: "What is Lakkar Bazaar famous for?", answer: "Lakkar Bazaar (Wood Market) is Shimla&apos;s most famous shopping destination. Artisans carve walnut wood, deodar, and pine into toys, kitchen items, decorative pieces, walking sticks, and furniture. The market runs along a ridge with shops on both sides. Prices: wooden toys ₹50-500, walking sticks ₹100-1,000, carved items ₹200-5,000." },
    { question: "Where can I buy authentic Kullu shawls in Shimla?", answer: "The Himachal Emporium on Mall Road has certified Kullu shawls at fixed prices. Lower Bazaar and Mall Road have many shawl shops. For genuine handloom Kullu shawls, check for the GI tag or Woolmark certification. Genuine Kullu shawls have a distinct geometric border pattern (natti design) and feel dense and warm." },
    { question: "Is bargaining expected in Shimla?", answer: "Bargaining is possible at Lakkar Bazaar and Lower Bazaar -- start at 60-70% of the quoted price (margins are smaller than plains markets). Mall Road shops usually have semi-fixed prices. Himachal Emporium and government shops have fixed prices. Tourist season (May-June, Dec-Jan) means higher prices; off-season gets better deals." },
    { question: "What jams and pickles should I buy?", answer: "Shimla is famous for fruit preserves: apple jam, plum jam, mixed fruit jam, rhododendron jelly, and apple cider vinegar. Brands like Himachal Agro and local cottage industries make excellent products. Also look for Himachali pickles (mango, chili, garlic, churamba). Prices: ₹100-400 per bottle. Available on Mall Road and Lower Bazaar." },
    { question: "What is the Himachali cap (topi)?", answer: "The Himachali cap (Pahari topi) is a distinctive round velvet cap with a colorful band -- a symbol of Himachal Pradesh&apos;s culture. It comes in different styles for different regions: the Kulluvi cap (flat top), Kinnauri cap (green with silver band), and Shimla-style (round with embroidered band). Prices: ₹100-500. Makes a unique, lightweight souvenir." },
    { question: "Is Shimla good for buying knitwear?", answer: "Yes, Shimla has excellent knitwear at reasonable prices. Woolen sweaters, shawls, mufflers, gloves, and socks are available throughout the city. Lower Bazaar has the widest selection at competitive prices. Mall Road has premium stores. Winter is the best time to buy as selection peaks. Prices: sweaters ₹300-2,000, shawls ₹500-10,000." },
    { question: "What are the best food souvenirs from Shimla?", answer: "Top edible souvenirs: apple products (jam, juice, cider vinegar, chips), Himachali pickles, honey (especially from Kullu), dry fruits (walnuts, almonds, apricots from Kinnaur), rhododendron juice, and herbal teas. Shimla&apos;s apple season is July-September when fresh apples are cheapest. Pre-packed gift boxes are available on Mall Road." },
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
      name: "Wooden Toys & Crafts",
      tagline: "Lakkar Bazaar Legends",
      desc: "Shimla&apos;s Lakkar Bazaar (Wood Market) is the city&apos;s most iconic shopping destination. Himachali artisans carve walnut, deodar cedar, and pine wood into an astonishing variety of items -- from tiny toy trains and animals to elaborate chess sets, decorative boxes, and walking sticks. The craft tradition dates back to the British era when Shimla was the summer capital.",
      items: ["Wooden toys (₹50-500)", "Walking sticks (₹100-1,000)", "Carved boxes (₹200-2,000)", "Chess sets (₹500-5,000)", "Kitchen utensils (₹100-800)", "Decorative items (₹200-3,000)"],
      where: "Lakkar Bazaar (Ridge area), Mall Road craft shops",
      tip: "Walnut wood items are darker, heavier, and more expensive than pine -- they are also more durable. The shops at the far end of Lakkar Bazaar (away from the Ridge) tend to have better prices as they get less tourist foot traffic.",
      color: "from-purple-600 to-violet-600",
      accent: "purple",
    },
    {
      name: "Kullu Shawls & Woolen Wear",
      tagline: "Himalayan Warmth",
      desc: "Kullu shawls are Himachal Pradesh&apos;s most prized textile -- handwoven on traditional pit looms using local sheep wool or Angora rabbit fur. The distinctive geometric border patterns (called natti) are unique to the Kullu Valley. These GI-tagged shawls are warmer and denser than factory-made alternatives. Shimla serves as the main retail market for Kullu Valley weavers.",
      items: ["Kullu wool shawls (₹800-5,000)", "Pashmina shawls (₹3,000-30,000)", "Angora wool items (₹500-3,000)", "Wool stoles (₹300-2,000)", "Wool mufflers (₹200-800)", "Kinnauri shawls (₹1,000-8,000)"],
      where: "Mall Road shops, Himachal Emporium, Lower Bazaar",
      tip: "Genuine Kullu shawls have a GI tag. The handloom weave is slightly irregular (machine weave is perfectly uniform). Himachal Emporium on Mall Road has certified shawls at fixed prices -- a safe starting point for comparison shopping.",
      color: "from-amber-700 to-orange-700",
      accent: "amber",
    },
    {
      name: "Himachali Caps & Accessories",
      tagline: "Symbol of Pahadi Culture",
      desc: "The Himachali cap (topi) is the state&apos;s most recognizable cultural symbol -- worn by men at festivals, weddings, and official events. Each region has its distinct style: Kulluvi (flat, colorful bands), Kinnauri (green with silver piping), and Shimla-style (round, embroidered). These make unique, lightweight souvenirs that are easy to pack.",
      items: ["Himachali caps (₹100-500)", "Kinnauri caps (₹200-800)", "Embroidered caps (₹200-600)", "Woolen socks (₹50-200)", "Woolen gloves (₹100-400)", "Traditional accessories (₹100-500)"],
      where: "Mall Road, Lakkar Bazaar, Lower Bazaar, Himachal Emporium",
      tip: "The Kinnauri cap with silver band is the most prestigious style. For authentic Himachali caps, buy from the Himachal Emporium or established shops on Mall Road rather than street vendors who may sell machine-made copies.",
      color: "from-teal-600 to-cyan-600",
      accent: "teal",
    },
    {
      name: "Jams, Pickles & Apple Products",
      tagline: "Mountain Orchard Delights",
      desc: "Shimla sits in the heart of India&apos;s apple country, and the fruit finds its way into delicious preserves, juices, and cider. Local cottage industries produce excellent jams (apple, plum, apricot, mixed fruit), pickles (mango, chili, garlic), honey, and apple cider vinegar. Rhododendron juice and jam are unique Himalayan specialties.",
      items: ["Apple jam (₹100-300)", "Mixed fruit preserves (₹120-350)", "Rhododendron juice (₹100-250)", "Apple cider vinegar (₹150-400)", "Himachali pickles (₹100-300)", "Honey varieties (₹200-800)"],
      where: "Mall Road shops, Lower Bazaar, Himachal Emporium, HPMC outlets",
      tip: "HPMC (Himachal Pradesh Marketing Corporation) products are government-backed and consistently good quality. For artisanal/cottage industry products, the shops near Christ Church on Mall Road have curated selections.",
      color: "from-rose-600 to-pink-600",
      accent: "rose",
    },
    {
      name: "Dry Fruits & Hill Produce",
      tagline: "Himalayan Harvest",
      desc: "Shimla&apos;s dry fruit shops stock produce from across Himachal -- Kinnaur apricots and almonds, Kullu walnuts, and locally sourced honey. The quality is excellent as products come directly from hill orchards with minimal middlemen. Prices are competitive compared to plains markets.",
      items: ["Walnuts (₹400-800/kg)", "Almonds (₹600-1,200/kg)", "Dried apricots (₹300-800/kg)", "Pine nuts/chilgoza (₹2,000-4,000/kg)", "Local honey (₹300-800/kg)", "Mixed dry fruit packs (₹500-1,500)"],
      where: "Lower Bazaar, Mall Road, Lakkar Bazaar area shops",
      tip: "Kinnaur-origin dry fruits (especially apricots and chilgoza pine nuts) are premium quality. Buy loose to check quality. Lower Bazaar shops offer better rates than Mall Road tourist shops. Chilgoza pine nuts are a rare Himalayan specialty worth buying.",
      color: "from-yellow-600 to-amber-600",
      accent: "yellow",
    },
    {
      name: "Knitwear & Winter Fashion",
      tagline: "Hill Station Warmth",
      desc: "Shimla is a knitwear paradise -- the cold climate means shops are stocked year-round with sweaters, cardigans, ponchos, shawls, socks, and gloves at prices lower than Delhi or metro cities. Both machine-knit and handmade options are available, with winter months (Oct-Feb) offering the widest selection.",
      items: ["Woolen sweaters (₹300-2,000)", "Hand-knit cardigans (₹500-3,000)", "Ponchos (₹500-2,000)", "Woolen socks sets (₹100-400)", "Gloves & mittens (₹100-500)", "Woolen caps (₹100-400)"],
      where: "Lower Bazaar, Mall Road, Tibetan Market",
      tip: "Lower Bazaar has the widest selection at competitive prices. Tibetan Market near Mall Road has unique designs at great prices. For premium handmade knitwear, look for cottage industry labels. Check for wool blend percentages -- higher wool content means warmer wear.",
      color: "from-emerald-600 to-green-600",
      accent: "emerald",
    },
  ];

  const marketAreas = [
    { name: "Mall Road", desc: "Shimla&apos;s iconic pedestrian shopping boulevard. A scenic walking street lined with shops, restaurants, and British-era architecture. Shawl shops, bookstores, cafes, the Himachal Emporium, and souvenir stores. The heart of Shimla&apos;s shopping and social scene.", timings: "10 AM - 8 PM", bestFor: "Shawls, souvenirs, dining, premium shopping, Himachal Emporium", vibe: "Scenic & relaxed" },
    { name: "Lakkar Bazaar", desc: "Shimla&apos;s famous wood market on the ridge near Jakhoo Temple. Dozens of shops selling hand-carved wooden items -- toys, walking sticks, boxes, and decorative pieces. A Shimla institution since British times.", timings: "9 AM - 7:30 PM", bestFor: "Wooden toys, walking sticks, carved crafts, souvenirs", vibe: "Artisanal & charming" },
    { name: "Lower Bazaar", desc: "The local market running below Mall Road. More affordable than Mall Road with a wider variety -- knitwear, dry fruits, household items, electronics, and textiles. Where Shimla locals actually shop. Lanes are steep and narrow but packed with deals.", timings: "9:30 AM - 8 PM (closed Tuesdays)", bestFor: "Knitwear, dry fruits, affordable clothes, local products", vibe: "Authentic & affordable" },
    { name: "Tibetan Market", desc: "A small market near Mall Road selling Tibetan and Himalayan products. Woolen items, prayer flags, singing bowls, turquoise jewelry, and Tibetan accessories. Good quality at reasonable prices with a cultural twist.", timings: "10 AM - 7 PM", bestFor: "Tibetan crafts, winter wear, unique accessories, prayer items", vibe: "Cultural & cozy" },
  ];

  const bargainingTips = [
    { tip: "Start at 60-70% of the quoted price at Lakkar Bazaar and Lower Bazaar", icon: Percent },
    { tip: "Compare shawl prices at 2-3 shops before buying -- quality varies greatly", icon: Tag },
    { tip: "Himachal Emporium on Mall Road has fixed prices -- use as quality benchmark", icon: Shield },
    { tip: "Avoid buying from touts near the Ridge who overcharge tourists", icon: ShoppingBag },
    { tip: "Visit Lower Bazaar in the morning for the best prices and local experience", icon: Clock },
    { tip: "For Kullu shawls, check for GI tag and handloom mark to verify authenticity", icon: Gem },
    { tip: "Buy wooden items in bulk from Lakkar Bazaar for better per-piece rates", icon: IndianRupee },
    { tip: "Off-season (March, Sept-Oct) offers better prices as tourist crowds thin out", icon: IndianRupee },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Shimla Experts", desc: "We know every hill market" },
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
              Shimla <span className="shimmer-text">Shopping</span> Guide
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-400/60" />
              <Crown className="w-6 h-6 text-purple-400" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-400/60" />
            </div>
            <p className="text-lg md:text-xl text-purple-100/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              Wooden toys, Kullu shawls, Himachali caps, mountain jams, and cozy knitwear. Shop the Queen of Hills with a local&apos;s insider knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                <Phone className="w-5 h-5" /> Call Now: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want a cab for Shimla shopping tour" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-purple-400/30 hover:bg-white/20 hover:scale-105 transition-all duration-500">
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
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3 text-center">What to Buy in Shimla</h2>
            <p className="text-stone-500 text-center mb-14">The Queen of Hills offers mountain crafts and Himalayan delicacies</p>
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
            <h2 className="text-3xl font-bold text-white mb-3 text-center">Best Shopping Areas in Shimla</h2>
            <p className="text-purple-200/60 text-center mb-14">Four charming markets nestled in the Himalayan hills</p>
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
                    "Morning: Mall Road walk + Christ Church (9:00-10:30 AM)",
                    "Lakkar Bazaar wooden crafts shopping (10:30 AM-12:00 PM)",
                    "Jakhoo Temple visit (12:00-1:00 PM)",
                    "Lunch at a Mall Road restaurant (1:00-2:00 PM)",
                    "Lower Bazaar knitwear & dry fruit shopping (2:00-3:30 PM)",
                    "Himachal Emporium for shawls & jams (3:30-4:30 PM)",
                    "Kufri excursion or Ridge sunset walk (4:30-6:30 PM)",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-700 text-sm py-2 px-3 rounded-lg hover:bg-purple-50/50 transition-colors border-b border-purple-100/50 last:border-0">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-5 border border-purple-200/50">
                  <p className="text-purple-800 font-semibold text-sm">Full day local cab in Shimla: ₹2,000 | From Delhi to Shimla: ₹6,000 (one way) | From Chandigarh: ₹3,000</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-20 px-4 bg-gradient-to-b from-violet-50 to-stone-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">Shopping in Shimla: The Queen of Hills&apos; Market Charm</h2>
            <div className="glass-card-light rounded-3xl p-8 md:p-10">
              <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-4">
              <p>Shimla&apos;s shopping experience is as charming as the hill station itself. Unlike the overwhelming bazaars of Rajasthan or Delhi, Shimla&apos;s markets are compact, walkable, and set against a backdrop of colonial architecture and Himalayan pine forests. Mall Road -- Shimla&apos;s pedestrian shopping boulevard -- is one of the most pleasant shopping streets in India, where you can browse shops, pause for coffee, and enjoy mountain views between purchases.</p>
              <p>The city&apos;s shopping offerings reflect its dual identity as a Himalayan town and former British summer capital. Lakkar Bazaar carries forward a woodcraft tradition that flourished when British officers commissioned furniture and toys from local artisans. The shawl shops stock products from the entire Himalayan belt -- Kullu Valley weavers, Kinnauri craftspeople, and Tibetan refugees all contribute to Shimla&apos;s textile richness. And the jam and preserve industry grew directly from the British-era fruit orchards that still blanket the surrounding hills.</p>
              <p>While Shimla&apos;s central markets (Mall Road, Lakkar Bazaar) are walkable, a cab is invaluable for exploring beyond the town center. Our Triveni Cabs drivers can take you to apple orchards in season (July-Sept), the Kufri area for adventure activities, or nearby Mashobra and Naldehra for a quieter hill experience. For the drive to Shimla from Delhi or Chandigarh, we ensure a comfortable journey through some of India&apos;s most scenic mountain roads.</p>
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
            <h2 className="text-2xl font-bold text-stone-800 mb-10 text-center">More Shimla & Himachal Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: "/sightseeing/shimla", title: "Shimla Sightseeing Tours", desc: "All Shimla attractions" },
                { href: "/shimla", title: "Shimla City Hub", desc: "Shimla cab services" },
                { href: "/delhi-airport-to-shimla-taxi", title: "Delhi Airport to Shimla", desc: "Airport transfers" },
                { href: "/shimla-vs-manali", title: "Shimla vs Manali", desc: "Which hill station?" },
                { href: "/places-to-visit-near-shimla", title: "Places Near Shimla", desc: "Day trips & excursions" },
                { href: "/7-day-himachal-tour-by-car", title: "7-Day Himachal Tour", desc: "Complete hill trip" },
                { href: "/honeymoon-shimla-manali-by-car", title: "Shimla-Manali Honeymoon", desc: "Romantic getaway" },
                { href: "/christmas-shimla-manali-package", title: "Christmas in Shimla", desc: "Winter holiday package" },
                { href: "/delhi-shopping-guide", title: "Delhi Shopping Guide", desc: "Capital city markets" },
                { href: "/amritsar-shopping-guide", title: "Amritsar Shopping Guide", desc: "Phulkari & dry fruits" },
                { href: "/weekend-getaways-from-delhi-by-car", title: "Weekend from Delhi", desc: "Short trips by car" },
                { href: "/weekend-getaways-from-chandigarh-by-car", title: "Weekend from Chandigarh", desc: "Short hill trips" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Need a Shimla Shopping Tour?</h2>
            <p className="text-purple-100/80 mb-10 text-lg max-w-2xl mx-auto">Our drivers know the genuine hill station shops. No commission, no scams, just the best of Shimla.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-gem 3s ease-in-out infinite' }}>
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want a cab for Shimla shopping tour" className="inline-flex items-center justify-center gap-2 bg-purple-900/40 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border border-purple-400/30 hover:bg-purple-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">
                WhatsApp Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
