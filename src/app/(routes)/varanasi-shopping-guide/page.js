import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, ShoppingBag, Gem, Tag, Landmark, Crown, Percent, IndianRupee } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Varanasi Shopping Guide 2026 | Banarasi Silk, Brassware & Crafts',
  description: 'Varanasi shopping guide. Banarasi silk sarees, brassware, wooden toys, Rudraksha beads, gulabi minakari. Vishwanath Gali, Thatheri Bazaar, Chowk. Call 7668570551.',
  keywords: 'varanasi shopping guide, shopping in varanasi, banarasi silk saree, varanasi brassware, thatheri bazaar, vishwanath gali shopping, rudraksha beads varanasi',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/varanasi-shopping-guide' },
  openGraph: {
    title: 'Varanasi Shopping Guide 2026 | Banarasi Silk & Brassware',
    description: 'Complete shopping guide for Varanasi. Banarasi silk sarees, brassware, wooden toys, Rudraksha. Best markets, price ranges, bargaining tips.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/varanasi-shopping-guide',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/taj-mahal-hero.jpg', width: 1200, height: 630, alt: 'Varanasi Shopping Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varanasi Shopping Guide 2026',
    description: 'Banarasi silk sarees, brassware, wooden toys. Best markets & bargaining tips.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/taj-mahal-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function VaranasiShoppingGuidePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Varanasi Shopping Guide", "item": "https://www.trivenicabs.in/varanasi-shopping-guide" },
    ],
  };

  const faqData = [
    { question: "What is the best thing to buy in Varanasi?", answer: "Banarasi silk sarees are Varanasi&apos;s most famous product -- woven with gold and silver zari threads in designs passed down for generations. Other top buys include brass and copper ware from Thatheri Bazaar (a UNESCO heritage market), wooden toys, Rudraksha bead malas, gulabi minakari (pink enamel) jewelry, and Benarasi paan accessories." },
    { question: "How do I identify genuine Banarasi silk?", answer: "Genuine Banarasi silk has these traits: it is heavier than synthetic imitations, the zari (gold/silver thread) tarnishes naturally over time (plastic zari stays shiny forever), burning a thread produces ash (not plastic melt), and the weave is slightly irregular (handloom). A genuine Banarasi takes 15 days to 6 months to weave. Buy from reputed shops with GI (Geographical Indication) tags." },
    { question: "What are typical Banarasi saree prices?", answer: "Organza Banarasi: ₹3,000-10,000. Katan silk: ₹8,000-30,000. Heavy bridal Banarasi: ₹15,000-2,00,000+. Banarasi dupattas: ₹1,500-8,000. Banarasi fabric per meter: ₹800-5,000. Prices depend on silk quality, zari purity (real gold/silver vs tested zari), and weaving complexity. Handloom sarees cost more than powerloom." },
    { question: "What is Thatheri Bazaar famous for?", answer: "Thatheri Bazaar is a UNESCO-recognized heritage market -- the only one of its kind in India. It has been a brass and copper utensil market for over 500 years. Artisans here hand-hammer brass and copper into lamps, utensils, idols, and decorative items. It is near Chowk in the old city. Prices are wholesale-level since you are buying from makers." },
    { question: "Is bargaining expected in Varanasi?", answer: "Yes, bargaining is standard in all bazaars and private shops. Start at 40-50% of the quoted price. However, for Banarasi sarees at established weaver shops, the markup is usually lower -- start at 70-80%. Government emporiums (Banaras Haat, UP Handloom) have fixed prices. Avoid shops near ghats that target tourists with inflated prices." },
    { question: "Where can I buy authentic Rudraksha beads?", answer: "Vishwanath Gali (the lane leading to Kashi Vishwanath Temple) has many Rudraksha shops. Authentic Rudraksha beads sink in water, have natural contour lines (mukhis), and feel slightly rough. Prices: 5-mukhi (common) ₹50-500, rare mukhis (1, 14) can be ₹10,000+. Buy from established shops near the temple that provide certificates." },
    { question: "What are Varanasi wooden toys?", answer: "Varanasi&apos;s lacquered wooden toys are a GI-tagged craft. Artisans turn wood on lathes and paint them in bright lac colors. Popular items include spinning tops, animals, kitchen sets, dolls, and decorative items. They make excellent gifts for children. Prices: ₹50-500 per toy. Available in Vishwanath Gali and Chowk area shops." },
    { question: "What is the best time to shop in Varanasi?", answer: "Morning (10 AM - 1 PM) is best for serious shopping -- shops are fresh, owners are attentive, and lanes are less crowded. Avoid ghat-area shops during evening aarti time (high tourist markup). The main bazaars (Chowk, Thatheri, Vishwanath Gali) are busiest 4-7 PM. Many shops close on Mondays or have half days." },
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
      name: "Banarasi Silk Sarees",
      tagline: "India&apos;s Finest Weave",
      desc: "Banarasi silk is arguably India&apos;s most celebrated textile -- a 600-year-old weaving tradition that produces sarees of extraordinary beauty. Weavers use real gold and silver zari threads to create intricate floral, Mughal, and geometric patterns on pure silk. A single bridal Banarasi can take up to 6 months to weave by hand. This is a GI-tagged product unique to Varanasi.",
      items: ["Organza Banarasi (₹3,000-10,000)", "Katan silk sarees (₹8,000-30,000)", "Bridal Banarasi (₹15,000-2,00,000+)", "Banarasi dupattas (₹1,500-8,000)", "Banarasi stoles (₹800-3,000)", "Banarasi fabric/meter (₹800-5,000)"],
      where: "Chowk area weaver shops, Vishwanath Gali, Peeli Kothi, Banaras Haat",
      tip: "Visit a weaver&apos;s home/workshop in the Alaipura or Peeli Kothi area to see handloom weaving in action and buy directly at 30-40% less than showroom prices.",
      color: "from-purple-600 to-violet-600",
      accent: "purple",
    },
    {
      name: "Brassware & Copperware",
      tagline: "UNESCO Heritage Craft",
      desc: "Varanasi&apos;s Thatheri Bazaar is a UNESCO Intangible Cultural Heritage site -- the world&apos;s only recognized brass market. For over five centuries, artisans have been hand-hammering brass and copper into lamps, ghee pots, thalis, idols, and decorative items. The rhythmic hammering sound is the heartbeat of old Varanasi.",
      items: ["Brass diyas/lamps (₹200-2,000)", "Copper water vessels (₹500-3,000)", "Brass idols (₹500-10,000)", "Decorative plates (₹300-2,000)", "Bell metal items (₹200-1,500)", "Puja thalis (₹300-2,000)"],
      where: "Thatheri Bazaar, Chowk, Vishwanath Gali",
      tip: "Thatheri Bazaar prices are wholesale since you buy from artisans directly. Brass items are heavy -- consider shipping for large purchases. Check for solid brass (heavier) vs hollow casting.",
      color: "from-amber-700 to-orange-700",
      accent: "amber",
    },
    {
      name: "Wooden Toys & Lacquerware",
      tagline: "GI-Tagged Folk Art",
      desc: "Varanasi&apos;s brightly colored wooden toys are a GI-tagged craft tradition. Artisans in the Khojwan locality turn locally sourced wood on hand-operated lathes, then coat the pieces in vibrant lac colors. The toys are eco-friendly, made with natural dyes, and represent one of India&apos;s oldest toy-making traditions.",
      items: ["Spinning tops (₹30-100)", "Animal figures (₹50-300)", "Kitchen play sets (₹200-800)", "Decorative items (₹100-500)", "Wooden dolls (₹100-500)", "Toy sets (₹300-1,000)"],
      where: "Vishwanath Gali, Chowk, Khojwan workshops, Banaras Haat",
      tip: "Visit the Khojwan area to see toy-making workshops. These toys are handmade and eco-friendly -- perfect gifts. Prices are extremely reasonable compared to commercial toys.",
      color: "from-teal-600 to-cyan-600",
      accent: "teal",
    },
    {
      name: "Rudraksha & Spiritual Items",
      tagline: "Sacred Beads of Shiva",
      desc: "Varanasi -- the city of Lord Shiva -- is India&apos;s biggest market for Rudraksha beads, prayer malas, and spiritual accessories. Rudraksha seeds from Nepal and Indonesia are strung into meditation malas and bracelets. The number of mukhis (faces) on each bead determines its spiritual significance and price.",
      items: ["5-mukhi Rudraksha mala (₹500-2,000)", "Single Rudraksha beads (₹50-10,000+)", "Crystal malas (₹200-1,500)", "Sandalwood malas (₹300-2,000)", "Brass puja items (₹200-2,000)", "Spiritual books (₹100-500)"],
      where: "Vishwanath Gali, Dashashwamedh Ghat area, temple shops",
      tip: "Genuine Rudraksha sinks in water, has clear natural mukhi lines, and feels slightly rough. Plastic fakes float and feel smooth. Buy from shops with certification rather than street vendors.",
      color: "from-rose-600 to-pink-600",
      accent: "rose",
    },
    {
      name: "Gulabi Minakari Jewelry",
      tagline: "Pink Enamel Artistry",
      desc: "Gulabi (pink) minakari is Varanasi&apos;s distinctive jewelry style where pink enamel is fired onto gold or silver to create delicate floral patterns. Unlike Jaipur&apos;s multi-colored minakari, Varanasi specializes in this unique pink variant. The craft dates back to Mughal times and is practiced by a handful of families.",
      items: ["Minakari earrings (₹500-5,000)", "Pendants (₹800-8,000)", "Bangles (₹1,000-10,000)", "Rings (₹500-3,000)", "Necklace sets (₹3,000-30,000)", "Decorative boxes (₹500-3,000)"],
      where: "Chowk, Vishwanath Gali, Gyanvapi area jewelers",
      tip: "Gulabi minakari is unique to Varanasi -- you will not find this exact style elsewhere. Ask to see the pink enamel under light; genuine minakari has depth and translucence that paint does not.",
      color: "from-yellow-600 to-amber-600",
      accent: "yellow",
    },
    {
      name: "Benarasi Paan & Sweets",
      tagline: "Edible Souvenirs",
      desc: "No Varanasi trip is complete without tasting the legendary Benarasi paan. The city is also famous for its sweets and snacks -- Langda mangoes (in season), rabri, malaiyo (winter specialty), and Banarasi thandai. Many of these can be packed and carried home as edible souvenirs.",
      items: ["Benarasi paan (₹30-200 each)", "Dry paan boxes (₹200-500)", "Banarasi thandai mix (₹200-500)", "Lal Peda sweets (₹400-800/kg)", "Churan & mukhwas (₹100-300)", "Spice mixes (₹100-400)"],
      where: "Kachori Gali (Chowk), Dashashwamedh Road, Godowlia Chowk",
      tip: "For paan, visit the iconic stalls at Kachori Gali in Chowk. For packaged sweets, buy from established shops like Ksheer Sagar or Rajbandhu that pack items for travel.",
      color: "from-emerald-600 to-green-600",
      accent: "emerald",
    },
  ];

  const marketAreas = [
    { name: "Vishwanath Gali", desc: "The bustling lane leading to the Kashi Vishwanath Temple. A narrow, crowded alley packed with shops selling silk, Rudraksha, religious items, wooden toys, brassware, and souvenirs. Authentic chaos with genuine deals if you know where to look.", timings: "8 AM - 9 PM", bestFor: "Silk sarees, Rudraksha, religious items, souvenirs", vibe: "Sacred & bustling" },
    { name: "Thatheri Bazaar", desc: "A UNESCO-recognized heritage brass market near Chowk. Artisans work in open-front workshops, hand-hammering brass and copper. Five centuries of continuous metalwork tradition. Wholesale and retail prices from the makers themselves.", timings: "10 AM - 8 PM (closed Sundays)", bestFor: "Brassware, copperware, metal idols, lamps", vibe: "Heritage & artisanal" },
    { name: "Chowk", desc: "Varanasi&apos;s oldest commercial center and the heart of the old city. A maze of narrow lanes with shops, temples, and food stalls. Silk shops, jewelry stores, toy makers, and the famous Kachori Gali food lane all converge here.", timings: "10 AM - 9 PM", bestFor: "Silk, jewelry, street food, wooden toys, spices", vibe: "Old-world & chaotic" },
    { name: "Godowlia Chowk", desc: "The main crossroads of Varanasi city, connecting old and new areas. Modern shops, showrooms, and bazaars radiate from this circle. More organized than the old city markets, with a mix of traditional and modern retail.", timings: "10 AM - 9:30 PM", bestFor: "General shopping, modern stores, branded silk", vibe: "Central & accessible" },
    { name: "Banaras Haat & Government Emporiums", desc: "Government-curated shopping venues with fixed prices and guaranteed quality. Banaras Haat showcases local artisans and weavers. UP Handloom on Sigra Road is another reliable option for authentic Banarasi silk at fair prices.", timings: "10 AM - 7 PM", bestFor: "Certified Banarasi silk, handicrafts, fixed prices", vibe: "Reliable & curated" },
  ];

  const bargainingTips = [
    { tip: "Start at 40-50% of the quoted price in bazaars near ghats", icon: Percent },
    { tip: "Compare silk prices at weaver workshops vs showrooms", icon: Tag },
    { tip: "Banaras Haat and UP Handloom have fixed prices -- use as benchmarks", icon: Shield },
    { tip: "Avoid silk shops that boat rowers and rickshaw drivers recommend (commission shops)", icon: ShoppingBag },
    { tip: "Morning shopping in the old city means fewer crowds and better attention", icon: Clock },
    { tip: "For Banarasi sarees, learn the difference between handloom and powerloom before buying", icon: Gem },
    { tip: "Bulk purchase from one weaver family gets the best prices", icon: IndianRupee },
    { tip: "Cash payments often get 5-10% additional discount at bazaar shops", icon: IndianRupee },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Varanasi Locals", desc: "We know every gali & ghat" },
    { icon: ShoppingBag, title: "Shopping Experts", desc: "Genuine weaver connections" },
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
              Varanasi <span className="shimmer-text">Shopping</span> Guide
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-400/60" />
              <Crown className="w-6 h-6 text-purple-400" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-400/60" />
            </div>
            <p className="text-lg md:text-xl text-purple-100/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              Banarasi silk sarees, UNESCO-heritage brassware, wooden toys, and sacred Rudraksha. Navigate the ancient bazaars of Kashi with a local&apos;s guide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                <Phone className="w-5 h-5" /> Call Now: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want a cab for Varanasi shopping tour" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-purple-400/30 hover:bg-white/20 hover:scale-105 transition-all duration-500">
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
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3 text-center">What to Buy in Varanasi</h2>
            <p className="text-stone-500 text-center mb-14">Six centuries of weaving, forging, and sacred craft traditions</p>
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
            <h2 className="text-3xl font-bold text-white mb-3 text-center">Best Shopping Areas in Varanasi</h2>
            <p className="text-purple-200/60 text-center mb-14">Ancient lanes and bazaars where Kashi&apos;s craftsmen have traded for centuries</p>
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
                    "Morning: Ganga aarti at Dashashwamedh Ghat (if staying overnight)",
                    "Kashi Vishwanath Temple + Vishwanath Gali shopping (9:00-11:00 AM)",
                    "Thatheri Bazaar brassware shopping (11:00 AM-12:30 PM)",
                    "Lunch at Kachori Gali in Chowk + Chowk bazaar (12:30-2:30 PM)",
                    "Banarasi silk weaver workshop visit (2:30-4:00 PM)",
                    "Godowlia market for souvenirs (4:00-5:00 PM)",
                    "Evening Ganga aarti at Dashashwamedh Ghat (6:30 PM)",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-700 text-sm py-2 px-3 rounded-lg hover:bg-purple-50/50 transition-colors border-b border-purple-100/50 last:border-0">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-5 border border-purple-200/50">
                  <p className="text-purple-800 font-semibold text-sm">Full day local cab in Varanasi: ₹1,800 | From Lucknow to Varanasi: ₹5,500 (one way)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-20 px-4 bg-gradient-to-b from-violet-50 to-stone-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">Shopping in Varanasi: Where Sacred Meets Artisanal</h2>
            <div className="glass-card-light rounded-3xl p-8 md:p-10">
              <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-4">
              <p>Varanasi is not just a spiritual capital -- it is one of India&apos;s oldest continuous centers of artisanal production. The city&apos;s weavers have been producing Banarasi silk for over 600 years, creating what many consider the finest textile on earth. When you shop in Varanasi, you are directly supporting living heritage -- families that have passed down their weaving, metalworking, and toy-making crafts across dozens of generations.</p>
              <p>The shopping experience in Varanasi is unlike anywhere else in India. The narrow galis (lanes) of the old city are a sensory immersion -- the clang of brass hammers in Thatheri Bazaar, the shimmer of silk in Vishwanath Gali, and the aroma of paan at Chowk. These are not sanitized tourist markets but authentic working bazaars where locals shop daily. Prices reflect this authenticity -- a genuine handloom Banarasi saree bought from a weaver&apos;s workshop here can cost 40-60% less than the same saree in a Delhi or Mumbai showroom.</p>
              <p>For the most rewarding shopping experience, hire a local cab for the day. Varanasi&apos;s old city lanes are too narrow for cars, but our Triveni Cabs drivers can park at strategic points (Godowlia, Lanka) while you explore the bazaars on foot. They know the genuine weaver families, the best brass artisans, and can help you avoid the tourist markup at ghat-adjacent shops. A cab also lets you visit the weaver colonies in Sarai Mohana or Alaipura -- slightly outside the old city -- where the finest Banarasi silk is actually made.</p>
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
            <h2 className="text-2xl font-bold text-stone-800 mb-10 text-center">More Varanasi & UP Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: "/sightseeing/varanasi", title: "Varanasi Sightseeing Tours", desc: "All Varanasi attractions" },
                { href: "/varanasi", title: "Varanasi City Hub", desc: "Varanasi cab services" },
                { href: "/varanasi-vs-haridwar", title: "Varanasi vs Haridwar", desc: "Which holy city?" },
                { href: "/chhath-puja-varanasi-transport", title: "Chhath Puja Transport", desc: "Festival cab service" },
                { href: "/lucknow-shopping-guide", title: "Lucknow Shopping Guide", desc: "Chikankari & Nawabi crafts" },
                { href: "/agra-shopping-guide", title: "Agra Shopping Guide", desc: "Marble inlay & leather" },
                { href: "/prayagraj-sangam-tour", title: "Prayagraj Sangam Tour", desc: "Spiritual circuit" },
                { href: "/ayodhya-ram-mandir-tour-from-lucknow", title: "Ayodhya from Lucknow", desc: "Ram Mandir tour" },
                { href: "/uttarakhand-spiritual-circuit-tour", title: "Uttarakhand Spiritual Tour", desc: "Char Dham circuit" },
                { href: "/same-day-agra-tour-from-lucknow", title: "Agra from Lucknow", desc: "Day trip to Taj" },
                { href: "/delhi-shopping-guide", title: "Delhi Shopping Guide", desc: "Capital city markets" },
                { href: "/religious-tours", title: "Religious Tours", desc: "All pilgrimage routes" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Need a Varanasi Shopping Tour?</h2>
            <p className="text-purple-100/80 mb-10 text-lg max-w-2xl mx-auto">Our drivers know the genuine weavers and artisans. No commission, no scams, just the best of Kashi.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-gem 3s ease-in-out infinite' }}>
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want a cab for Varanasi shopping tour" className="inline-flex items-center justify-center gap-2 bg-purple-900/40 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border border-purple-400/30 hover:bg-purple-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">
                WhatsApp Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
