import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, ShoppingBag, Gem, Tag, Landmark, Crown, Percent, IndianRupee } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Udaipur Shopping Guide 2026 | Miniature Paintings, Silver & Crafts',
  description: 'Udaipur shopping guide. Miniature paintings, Pichwai art, silver jewelry, puppets, marble crafts, Bandhani. Hathi Pol, Bada Bazaar, Shilpgram. Prices & tips. Call 7668570551.',
  keywords: 'udaipur shopping guide, shopping in udaipur, hathi pol udaipur, udaipur miniature paintings, pichwai paintings, udaipur silver jewelry, shilpgram udaipur',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/udaipur-shopping-guide' },
  openGraph: {
    title: 'Udaipur Shopping Guide 2026 | Miniature Paintings, Silver & More',
    description: 'Complete shopping guide for Udaipur. Miniature paintings, silver jewelry, Pichwai art, puppets. Best markets, price ranges, bargaining tips.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/udaipur-shopping-guide',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/taj-mahal-hero.jpg', width: 1200, height: 630, alt: 'Udaipur Shopping Guide' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Udaipur Shopping Guide 2026',
    description: 'Miniature paintings, silver jewelry, Pichwai art. Best markets & bargaining tips.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/taj-mahal-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function UdaipurShoppingGuidePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Udaipur Shopping Guide", "item": "https://www.trivenicabs.in/udaipur-shopping-guide" },
    ],
  };

  const faqData = [
    { question: "What is the best thing to buy in Udaipur?", answer: "Udaipur is famous for miniature paintings on silk, paper, and marble. These intricate artworks depict Rajput court scenes, Hindu mythology, and Mewari landscapes using natural pigments and fine brushwork. Other top buys include Pichwai paintings, silver jewelry, Rajasthani puppets (kathputli), marble handicrafts, and Bandhani textiles." },
    { question: "How do I identify genuine miniature paintings?", answer: "Genuine hand-painted miniatures have visible brushstrokes under magnification, use natural mineral and vegetable pigments (not acrylic paint), and are painted on handmade paper or silk. The back often shows bleed-through of pigments. A genuine piece takes 3-30 days to complete. Printed reproductions are perfectly uniform and have dot patterns under magnification." },
    { question: "What are typical prices for Udaipur miniature paintings?", answer: "Small postcards: ₹200-500. Medium paintings (A4 size): ₹1,000-5,000. Large detailed pieces: ₹5,000-30,000+. Pichwai paintings: ₹3,000-1,00,000+ depending on size and detail. Silk paintings: ₹800-5,000. Old/antique miniatures: ₹10,000+. Prices depend on artist skill, detail level, and materials used." },
    { question: "What is Pichwai painting?", answer: "Pichwai paintings are large devotional artworks from the Nathdwara tradition (near Udaipur) depicting Lord Krishna -- especially Shrinathji. Painted on cloth using natural pigments, they feature intricate floral borders, lotus motifs, and scenes from Krishna&apos;s life. Udaipur and Nathdwara are the only authentic sources for genuine Pichwai art." },
    { question: "Is bargaining expected in Udaipur?", answer: "Yes, bargaining is standard in Hathi Pol, Bada Bazaar, and Clock Tower market. Start at 40-50% of the quoted price. For miniature paintings at galleries, negotiation is more subtle -- ask for a discount on multiple purchases. Shilpgram has fixed prices. High-end galleries on Lake Palace Road usually have marked prices with limited negotiation." },
    { question: "Where is the best silver jewelry market in Udaipur?", answer: "Hathi Pol (Elephant Gate) is Udaipur&apos;s main jewelry and silver market. Traditional Mewari silver jewelry features intricate filigree work, stone settings, and tribal designs. Silver is sold by weight plus making charges. Bada Bazaar also has good silver shops. Always check the silver purity hallmark (925 for sterling silver)." },
    { question: "What is Shilpgram and is it worth visiting?", answer: "Shilpgram is a living crafts village and open-air museum 3 km west of Udaipur. It showcases artisans from across western India working on traditional crafts. You can watch potters, weavers, painters, and woodworkers create items and buy directly from them at fixed prices. The annual Shilpgram festival (Dec-Jan) is the best time to visit." },
    { question: "What food items can I buy from Udaipur?", answer: "Udaipur&apos;s edible souvenirs include: Mewari spice mixes (dal-bati masala), Rajasthani pickles (keri, garlic, chili), dry fruit mixes from Bada Bazaar, local honey, Ghewar sweets (seasonal), and herbal teas. The shops near Clock Tower market have the best selection of packaged spices and pickles for travel." },
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
      name: "Miniature Paintings",
      tagline: "Mewari Art Heritage",
      desc: "Udaipur&apos;s miniature painting tradition dates back to the 16th century Mewar court. Artists use extremely fine brushes (sometimes a single hair) and natural pigments -- ground minerals, semi-precious stones, and vegetable dyes -- to create breathtaking scenes of royal courts, hunting expeditions, Hindu mythology, and Rajasthani landscapes on handmade paper, silk, or marble.",
      items: ["Small postcards (₹200-500)", "A4 size paintings (₹1,000-5,000)", "Large detailed pieces (₹5,000-30,000+)", "Silk paintings (₹800-5,000)", "Marble paintings (₹500-3,000)", "Old/antique miniatures (₹10,000+)"],
      where: "Hathi Pol galleries, Bada Bazaar, City Palace area, Jagdish Temple lane",
      tip: "Ask the artist to demonstrate the painting technique. Genuine miniature artists are proud to show their work. Visit workshops on Hathi Pol for the best selection and direct artist prices.",
      color: "from-purple-600 to-violet-600",
      accent: "purple",
    },
    {
      name: "Pichwai & Phad Paintings",
      tagline: "Sacred Art of Nathdwara",
      desc: "Pichwai paintings are large devotional artworks from the Nathdwara tradition depicting Lord Krishna (Shrinathji). Phad scroll paintings tell epic tales of local heroes (Pabuji, Devnarayan) and are traditionally used by traveling storytellers. Both art forms use natural pigments and are unique to the Mewar-Marwar region.",
      items: ["Small Pichwai (₹3,000-10,000)", "Medium Pichwai (₹10,000-50,000)", "Large Pichwai (₹50,000-1,00,000+)", "Phad scrolls (₹2,000-15,000)", "Pichwai prints (₹500-2,000)", "Framed reproductions (₹1,000-5,000)"],
      where: "Nathdwara Road galleries, City Palace shops, Hathi Pol, specialty galleries",
      tip: "For authentic Pichwai, visit Nathdwara (48 km from Udaipur) where the tradition originates. In Udaipur, B.G. Sharma gallery and shops near Jagdish Temple have curated collections.",
      color: "from-amber-700 to-orange-700",
      accent: "amber",
    },
    {
      name: "Silver Jewelry",
      tagline: "Mewari Tribal Elegance",
      desc: "Udaipur&apos;s silver jewelry reflects both tribal and royal Rajput traditions. Tribal designs feature bold geometric patterns, heavy anklets, and statement necklaces, while court-inspired pieces showcase delicate filigree, enamel work, and stone settings. Silver is worked into rings, earrings, bangles, necklaces, and anklets.",
      items: ["Silver rings (₹200-1,500)", "Earrings (₹300-3,000)", "Tribal necklaces (₹1,000-10,000)", "Silver bangles (₹500-5,000)", "Anklets (₹500-3,000)", "Filigree pieces (₹1,000-8,000)"],
      where: "Hathi Pol, Bada Bazaar, Clock Tower market area",
      tip: "Silver is priced by weight plus making charges. Check the current silver rate before shopping. Always look for the 925 hallmark on sterling silver pieces. Tribal designs from Hathi Pol are unique to this region.",
      color: "from-teal-600 to-cyan-600",
      accent: "teal",
    },
    {
      name: "Rajasthani Puppets & Handicrafts",
      tagline: "Colorful Folk Treasures",
      desc: "Kathputli (string puppets) are Rajasthan&apos;s iconic folk art -- colorful wooden puppets dressed in traditional costumes depicting kings, queens, dancers, and musicians. Udaipur also offers carved wooden furniture, painted boxes, mirrors with camel bone inlay, and traditional Rajasthani crafts at artisan-direct prices.",
      items: ["Puppet pairs (₹200-1,000)", "Puppet sets (₹500-3,000)", "Wooden boxes (₹300-2,000)", "Camel bone items (₹500-5,000)", "Decorative mirrors (₹300-3,000)", "Wooden furniture (₹5,000-50,000+)"],
      where: "Shilpgram, Hathi Pol, Bada Bazaar, Clock Tower shops",
      tip: "Shilpgram is the best place for authentic puppets at fixed prices. In the bazaars, handmade puppets have wooden heads (plastic heads indicate factory-made). Larger puppets with detailed costumes are collector items.",
      color: "from-rose-600 to-pink-600",
      accent: "rose",
    },
    {
      name: "Marble Crafts & Sculptures",
      tagline: "White Stone Artistry",
      desc: "Udaipur sits in a marble-rich region and has a thriving marble craft industry. Artisans carve deities, elephants, decorative items, and utility pieces from local white marble. Some workshops also do Pietra Dura-style inlay work (similar to Agra but in distinct Rajasthani patterns).",
      items: ["Small figurines (₹200-1,000)", "Deity statues (₹500-10,000+)", "Elephant carvings (₹300-5,000)", "Inlay boxes (₹500-3,000)", "Marble plates (₹300-2,000)", "Chess sets (₹1,000-5,000)"],
      where: "Bada Bazaar, Airport Road workshops, Shilpgram",
      tip: "Visit marble workshops on Airport Road to see carving in progress and buy directly. Quality varies widely -- check the smoothness of carving and weight (heavier means denser marble).",
      color: "from-yellow-600 to-amber-600",
      accent: "yellow",
    },
    {
      name: "Bandhani Textiles & Fabrics",
      tagline: "Rajasthani Tie-Dye Art",
      desc: "Udaipur&apos;s markets overflow with colorful Bandhani (tie-dye) and Leheriya (wave pattern) textiles in sarees, dupattas, turbans, and dress materials. The Mewar region has its own distinct Bandhani patterns and color palettes, often featuring brighter pinks, oranges, and yellows than other Rajasthani regions.",
      items: ["Bandhani sarees (₹1,000-15,000)", "Dupattas (₹300-2,000)", "Dress material (₹500-3,000)", "Turbans/safas (₹200-800)", "Bandhani stoles (₹200-1,000)", "Block print fabrics (₹200-1,000/m)"],
      where: "Bada Bazaar, Hathi Pol textile shops, Clock Tower market",
      tip: "Mewari Bandhani features unique patterns not found in Jaipur or Jodhpur. Check for hand-tied knots (irregular) vs machine stamped (uniform dots). Bada Bazaar offers the best prices for bulk fabric purchases.",
      color: "from-emerald-600 to-green-600",
      accent: "emerald",
    },
  ];

  const marketAreas = [
    { name: "Hathi Pol", desc: "Udaipur&apos;s most famous shopping street, named after the Elephant Gate. A long pedestrian-friendly road lined with art galleries, silver jewelry shops, handicraft stores, and miniature painting studios. This is where serious art buyers shop.", timings: "10 AM - 8:30 PM", bestFor: "Miniature paintings, silver jewelry, art galleries, handicrafts", vibe: "Artistic & charming" },
    { name: "Bada Bazaar", desc: "The largest and oldest market in Udaipur, stretching from Clock Tower to the City Palace area. A bustling bazaar with everything from textiles and spices to jewelry and household items. Very local and authentic with excellent prices.", timings: "10 AM - 8 PM (closed Sundays)", bestFor: "Textiles, Bandhani, spices, general shopping, silver", vibe: "Bustling & traditional" },
    { name: "Shilpgram", desc: "A government-run crafts village 3 km from Fateh Sagar Lake. Living museum where artisans from Rajasthan, Gujarat, Goa, and Maharashtra demonstrate and sell their crafts. Fixed prices, no bargaining needed. The annual December festival is spectacular.", timings: "11 AM - 7 PM", bestFor: "Authentic handicrafts, puppets, pottery, fixed prices", vibe: "Cultural & curated" },
    { name: "Clock Tower Market", desc: "The area around the Clock Tower (Ghanta Ghar) is a vibrant local market with spice shops, dry fruit vendors, textile stores, and souvenir stalls. More affordable than Hathi Pol with a genuine local atmosphere.", timings: "10 AM - 8:30 PM", bestFor: "Spices, dry fruits, textiles, affordable souvenirs", vibe: "Local & affordable" },
    { name: "Lake Palace Road & Galleries", desc: "Upscale galleries and boutiques along the road near Lake Pichola. Curated collections of art, jewelry, and premium handicrafts. Higher prices but excellent quality and air-conditioned comfort. Some galleries represent established artists.", timings: "10:30 AM - 8 PM", bestFor: "Premium art, curated jewelry, gallery-quality pieces", vibe: "Upscale & refined" },
  ];

  const bargainingTips = [
    { tip: "Start at 40-50% of the quoted price in bazaars and Hathi Pol", icon: Percent },
    { tip: "Compare miniature painting prices at multiple galleries before buying", icon: Tag },
    { tip: "Shilpgram has fixed government-set prices -- use these as benchmarks", icon: Shield },
    { tip: "Avoid shops where auto-rickshaw drivers take you -- they get 30-40% commission", icon: ShoppingBag },
    { tip: "Visit Hathi Pol galleries in the morning for the artist&apos;s best attention", icon: Clock },
    { tip: "For miniatures, ask to see the artist&apos;s work-in-progress to verify authenticity", icon: Gem },
    { tip: "Buying multiple paintings from one artist gets significant discounts", icon: IndianRupee },
    { tip: "Silver jewelry is priced by weight -- know the current silver rate before shopping", icon: IndianRupee },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Udaipur Experts", desc: "We know every market lane" },
    { icon: ShoppingBag, title: "Art Tours", desc: "Genuine gallery connections" },
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
              Udaipur <span className="shimmer-text">Shopping</span> Guide
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-400/60" />
              <Crown className="w-6 h-6 text-purple-400" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-400/60" />
            </div>
            <p className="text-lg md:text-xl text-purple-100/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              Miniature paintings, Pichwai art, silver jewelry, and Rajasthani puppets. Shop the Venice of the East with a local&apos;s insider knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                <Phone className="w-5 h-5" /> Call Now: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want a cab for Udaipur shopping tour" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-purple-400/30 hover:bg-white/20 hover:scale-105 transition-all duration-500">
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
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3 text-center">What to Buy in Udaipur</h2>
            <p className="text-stone-500 text-center mb-14">The City of Lakes where art and craft traditions have flourished for five centuries</p>
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
            <h2 className="text-3xl font-bold text-white mb-3 text-center">Best Shopping Areas in Udaipur</h2>
            <p className="text-purple-200/60 text-center mb-14">From lakeside galleries to ancient bazaar lanes</p>
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
                    "Morning: City Palace visit (9:00-11:00 AM)",
                    "Hathi Pol art gallery walk & silver shopping (11:00 AM-1:00 PM)",
                    "Lunch at a lakeside restaurant (1:00-2:00 PM)",
                    "Jagdish Temple + Bada Bazaar textiles & spices (2:00-4:00 PM)",
                    "Shilpgram crafts village visit (4:00-5:30 PM)",
                    "Boat ride on Lake Pichola (5:30-6:30 PM)",
                    "Return to hotel",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-700 text-sm py-2 px-3 rounded-lg hover:bg-purple-50/50 transition-colors border-b border-purple-100/50 last:border-0">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-5 border border-purple-200/50">
                  <p className="text-purple-800 font-semibold text-sm">Full day local cab in Udaipur: ₹2,000 | From Jaipur to Udaipur: ₹5,500 (one way)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Content */}
        <section className="py-20 px-4 bg-gradient-to-b from-violet-50 to-stone-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">Shopping in Udaipur: Where Art Meets Lakeside Charm</h2>
            <div className="glass-card-light rounded-3xl p-8 md:p-10">
              <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-4">
              <p>Udaipur&apos;s shopping scene is deeply rooted in its identity as Mewar&apos;s cultural capital. For five centuries, the Mewar court patronized artists, silversmiths, and craftspeople, creating a tradition of excellence that continues today. The miniature painting tradition of Udaipur is distinct from other Rajasthani schools -- Mewari miniatures feature lush green landscapes, detailed palace scenes, and a softer color palette influenced by the lake-dotted terrain.</p>
              <p>What sets Udaipur shopping apart is the intimate scale. Unlike Jaipur&apos;s sprawling bazaars, Udaipur&apos;s Hathi Pol is a walkable art street where you can meet painters in their studios, watch them work, and buy pieces directly. The silver jewelry at Hathi Pol draws on tribal Bhil and Meena traditions alongside royal Rajput designs, creating pieces you will not find in any other Indian city. Shilpgram adds another dimension -- a living crafts village where artisans demonstrate their skills in a beautiful setting.</p>
              <p>A local cab makes Udaipur shopping effortless. Our Triveni Cabs drivers know the genuine art galleries (not tourist traps), can take you to marble workshops on the outskirts, and time your shopping around sightseeing so you see the best of both worlds. They can also arrange a day trip to Nathdwara -- the sacred town 48 km away where authentic Pichwai paintings originate from master artist families.</p>
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
            <h2 className="text-2xl font-bold text-stone-800 mb-10 text-center">More Udaipur & Rajasthan Guides</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { href: "/sightseeing/udaipur", title: "Udaipur Sightseeing Tours", desc: "All Udaipur attractions" },
                { href: "/udaipur", title: "Udaipur City Hub", desc: "Udaipur cab services" },
                { href: "/honeymoon-udaipur-by-car", title: "Udaipur Honeymoon", desc: "Romantic getaway" },
                { href: "/jaipur-vs-udaipur", title: "Jaipur vs Udaipur", desc: "Which city to visit?" },
                { href: "/places-to-visit-near-udaipur", title: "Places Near Udaipur", desc: "Day trips & excursions" },
                { href: "/family-trip-udaipur-from-delhi", title: "Family Trip to Udaipur", desc: "From Delhi by car" },
                { href: "/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur", title: "5-Day Rajasthan Trip", desc: "Jaipur-Udaipur-Jodhpur" },
                { href: "/jaipur-shopping-guide", title: "Jaipur Shopping Guide", desc: "Pink city bazaars" },
                { href: "/jodhpur-shopping-guide", title: "Jodhpur Shopping Guide", desc: "Blue city markets" },
                { href: "/jaisalmer-shopping-guide", title: "Jaisalmer Shopping Guide", desc: "Desert city crafts" },
                { href: "/rajasthan-desert-circuit-tour", title: "Rajasthan Desert Circuit", desc: "Full Rajasthan tour" },
                { href: "/honeymoon-jaipur-udaipur", title: "Jaipur-Udaipur Honeymoon", desc: "Royal honeymoon route" },
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Need an Udaipur Shopping Tour?</h2>
            <p className="text-purple-100/80 mb-10 text-lg max-w-2xl mx-auto">Our drivers know the genuine galleries and artisan shops. No commission, no scams, just the best of Udaipur.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-gem 3s ease-in-out infinite' }}>
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want a cab for Udaipur shopping tour" className="inline-flex items-center justify-center gap-2 bg-purple-900/40 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border border-purple-400/30 hover:bg-purple-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">
                WhatsApp Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
