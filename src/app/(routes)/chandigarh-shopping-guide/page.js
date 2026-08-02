import Link from 'next/link';
import { Phone, MapPin, Clock, Star, ChevronRight, ShoppingBag, ArrowRight, Tag, IndianRupee } from '@/components/ui/icons';
import { getArticleSchema, withSpeakableFAQ, getCityPlaceSchema } from '@/lib/seo/speakable-helpers';

export const revalidate = 3600;

export const metadata = {
  title: 'Chandigarh Shopping Guide 2026 | Sector 17, Elante Mall, Phulkari',
  description: 'Complete Chandigarh shopping guide. Sector 17 Plaza, Sector 22 Bazaar, Elante Mall, Sector 19 Fancy Bazaar. Phulkari, Punjabi jutti, paranda. Bargaining tips.',
  keywords: 'chandigarh shopping guide, sector 17 chandigarh, elante mall, sector 22 bazaar, phulkari embroidery, punjabi jutti, what to buy in chandigarh, chandigarh markets',
  authors: [{ name: 'Triveni Cabs Editorial' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/chandigarh-shopping-guide' },
  openGraph: {
    title: 'Chandigarh Shopping Guide 2026 | Markets & What to Buy',
    description: 'Sector 17 Plaza, Elante Mall, Sector 22 budget bazaar, Phulkari embroidery, Punjabi jutti, parandas.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/chandigarh-shopping-guide',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg', width: 1200, height: 630, alt: 'Chandigarh Shopping Guide 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chandigarh Shopping Guide 2026',
    description: 'Sector 17, Elante, Phulkari, Punjabi jutti. Complete markets guide.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function ChandigarhShoppingGuidePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Chandigarh Shopping Guide", "item": "https://www.trivenicabs.in/chandigarh-shopping-guide" },
    ],
  };

  const faqData = [
    { question: "What is Chandigarh famous for shopping?", answer: "Chandigarh is famous for Sector 17 Plaza pedestrian shopping (heart of city retail), Elante Mall in Industrial Area Phase I (largest mall in North India after Delhi), Sector 22 budget bazaar, Sector 19 Fancy Bazaar (women's wear), and Sector 23 antique market. Specialty buys: Phulkari embroidery, Punjabi jutti, paranda hair tassels, Patiala salwars, traditional Punjabi suits." },
    { question: "What should I buy as a souvenir from Chandigarh?", answer: "Phulkari embroidery (dupattas, jackets, cushion covers — Rs 800-5,000), Punjabi jutti handcrafted leather shoes (Rs 600-2,500), parandas (decorative hair tassels — Rs 200-800), traditional Patiala salwar suits, brass utensils from Sector 23, jaago (traditional pots), Patiala parandi, mojari shoes, and Punjabi pickle/achaar gift packs." },
    { question: "Is Sector 17 Plaza or Elante Mall better?", answer: "Different vibes. Sector 17 Plaza (open-air pedestrian) is iconic — cinema halls, fountains, mid-range Indian and international brands, food court. Best for casual evening shopping + dining. Elante Mall (Industrial Area Phase I) is fully air-conditioned, has 200+ stores including Zara, H&M, Marks & Spencer, multiplex, ice rink. Best for AC comfort + premium brands." },
    { question: "Where to buy authentic Phulkari in Chandigarh?", answer: "For authentic hand-embroidered Phulkari: Phulkari Museum Shop (Sector 17), Anokhi Boutique (Sector 26), Cottage Emporium (Sector 17), and the government-run Pahalgam Boutique (Sector 35). Avoid machine-made imitations sold at tourist stalls. Hand-embroidered dupattas Rs 1,500-5,000; pure silk Phulkari Rs 8,000+." },
    { question: "What are the best markets in Chandigarh?", answer: "1) Sector 17 Plaza — central, mid-range, evenings buzzy. 2) Elante Mall (Industrial Area Phase I) — largest, AC, premium brands. 3) Sector 22 Bazaar — budget shopping, street vendors. 4) Sector 19 Fancy Bazaar — women's wear, suits, sarees. 5) Sector 23 Antique Market — brass, copper, vintage. 6) Sector 35 Inner Market — local apparel. 7) Patiala Niwas (Sector 17) — Phulkari hub." },
    { question: "Do shops bargain in Chandigarh?", answer: "Bargaining works at Sector 22 Bazaar, Sector 19 Fancy Bazaar, Sector 23 Antique Market, and street vendors near Rock Garden — usually 20-40% off marked price possible. Sector 17 Plaza retail stores have fixed prices (no bargaining). Elante Mall is fixed-price. For Phulkari and silver, always ask for the 'best price' — most boutiques offer 10-15% off without negotiation." },
    { question: "When are Chandigarh shops open?", answer: "Sector 17 Plaza: 10 AM - 9 PM. Most open shops are closed on Sunday in Sector 22 (it's the traditional 'off' day). Elante Mall: 11 AM - 10 PM, open all 7 days. Sector 19 Fancy Bazaar: 10 AM - 8:30 PM. Sector 23 Antique Market: 10 AM - 7 PM, busiest on weekends. Friday is also weekly off for some Sector 22 shops." },
    { question: "Best place for premium brand shopping in Chandigarh?", answer: "Elante Mall (Industrial Area Phase I) is North India's premium destination outside Delhi — Zara, H&M, M&S, Adidas, Nike, Levi's, FabIndia, BIBA, Allen Solly, Van Heusen. Also has multiplex (PVR), gaming arcade, ice rink, premium F&B (Pizza Express, Starbucks, BBQ Nation). Free parking. Open 11 AM - 10 PM all days." },
  ];

  const faqSchema = withSpeakableFAQ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer },
    })),
  });

  const articleSchema = getArticleSchema({
    slug: 'chandigarh-shopping-guide',
    headline: 'Chandigarh Shopping Guide 2026 — Sector 17, Elante Mall, Phulkari, Punjabi Jutti',
    description: 'Complete Chandigarh shopping guide. Sector 17 Plaza, Elante Mall, Sector 22 Bazaar, Sector 19 Fancy Bazaar. Phulkari embroidery, Punjabi jutti, parandas, bargaining tips.',
    image: '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg',
    datePublished: '2026-05-03',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.faq-section .faq-answer-1']
  });

  // Place schema — anchors content to real-world geographic entity
  const placeSchema = getCityPlaceSchema("chandigarh", { idSlug: "chandigarh-shopping-guide" });

  const markets = [
    { name: 'Sector 17 Plaza', vibe: 'Mid-range central, pedestrian-only', best: 'Branded apparel, mid-range, dining', timing: '10 AM - 9 PM', icon: '🏛️' },
    { name: 'Elante Mall', vibe: 'Premium AC mall, 200+ stores', best: 'Zara, H&M, M&S, premium brands', timing: '11 AM - 10 PM', icon: '🛍️' },
    { name: 'Sector 22 Bazaar', vibe: 'Budget bazaar, bargaining friendly', best: 'Casual wear, street fashion, knock-offs', timing: '10 AM - 8 PM', icon: '🎯' },
    { name: 'Sector 19 Fancy Bazaar', vibe: 'Women\'s wear, suits, sarees', best: 'Wedding shopping, bridal lehengas', timing: '10 AM - 8:30 PM', icon: '👗' },
    { name: 'Sector 23 Antique Market', vibe: 'Brass, copper, vintage', best: 'Old brass utensils, antiques, decor', timing: '10 AM - 7 PM', icon: '🏺' },
    { name: 'Sector 35 Inner Market', vibe: 'Local apparel, accessories', best: 'Mid-range women\'s wear, bags', timing: '10 AM - 8:30 PM', icon: '👜' },
  ];

  const buys = [
    { name: 'Phulkari Embroidery', desc: 'Traditional Punjabi floss-silk embroidery on dupattas, jackets, cushion covers. Hand-embroidered are precious, machine-made cheaper. Authentic at Phulkari Museum Shop, Anokhi.', price: '₹800-5,000+', icon: '🧵' },
    { name: 'Punjabi Jutti', desc: 'Handcrafted leather pointed-toe shoes with embroidered tops. Comfortable for walking, festive for occasions. Best at Sector 22 jutti shops and Patiala Niwas.', price: '₹600-2,500', icon: '👞' },
    { name: 'Paranda', desc: 'Decorative hair tassels with silken threads, beads, mirrors. Worn with traditional braid. Statement accessory. Sector 19, Sector 22 vendors.', price: '₹200-800', icon: '🎀' },
    { name: 'Patiala Salwar Suits', desc: 'Loose pleated salwar with kameez and dupatta. Comfortable Punjabi attire. Sector 19 Fancy Bazaar and Patiala Niwas have best variety.', price: '₹1,200-8,000', icon: '👘' },
    { name: 'Brass & Copper Utensils', desc: 'Traditional kadai, lota, glasses from Sector 23 Antique Market. Old Indian kitchen heritage. Bargain hard.', price: '₹500-5,000', icon: '🍶' },
    { name: 'Punjabi Pickles & Achaar', desc: 'Mango, lemon, mixed-vegetable pickles in giant jars. Sector 19 spice market and Sindhi Sweets. Vacuum-packed for travel.', price: '₹150-500', icon: '🥒' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {placeSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }} />}

      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-blue-900"></div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <nav className="inline-flex items-center gap-2 text-white/80 text-sm mb-6">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/chandigarh-travel-guide" className="hover:text-white">Chandigarh</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-emerald-300">Shopping Guide</span>
            </nav>
            <h1 className="speakable-headline text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Chandigarh Shopping Guide<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">Markets · Crafts · Brands</span>
            </h1>
            <p className="speakable-lead text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Sector 17 Plaza for evenings. Elante Mall for premium brands. Sector 22 for bargains. Sector 19 for wedding wear. Phulkari, Punjabi jutti, parandas — your complete 2026 shopping map.
            </p>
            <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl transition-all">
              <Phone className="w-5 h-5" /> Book Shopping Cab: 7668570551
            </Link>
          </div>
        </section>

        {/* MARKETS GRID */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-emerald-700 font-bold text-sm tracking-widest uppercase">Top Markets</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-4">6 Best Shopping Areas in Chandigarh</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {markets.map((m, i) => (
                <div key={i} className="bg-white rounded-3xl p-6 shadow-md border border-emerald-100 hover:shadow-xl transition-all">
                  <div className="text-4xl mb-3">{m.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{m.name}</h3>
                  <div className="text-sm text-emerald-700 font-bold mb-2">{m.vibe}</div>
                  <p className="text-slate-600 text-sm mb-3"><strong>Best for:</strong> {m.best}</p>
                  <div className="text-xs text-slate-500 inline-flex items-center gap-1"><Clock className="w-3 h-3" /> {m.timing}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT TO BUY */}
        <section className="py-20 px-4 bg-emerald-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-emerald-700 font-bold text-sm tracking-widest uppercase">Souvenirs</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-4">What to Buy in Chandigarh — 6 Authentic Crafts</h2>
              <p className="text-slate-600 max-w-3xl mx-auto">Phulkari embroidery and Punjabi jutti are the two heritage buys you should not skip. Every Chandigarh trip should bring at least one home.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {buys.map((b, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100">
                  <div className="text-4xl mb-3">{b.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{b.name}</h3>
                  <p className="text-slate-600 text-sm mb-3 leading-relaxed">{b.desc}</p>
                  <div className="inline-block bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold">{b.price}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BARGAINING TIPS */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-emerald-700 font-bold text-sm tracking-widest uppercase">Pro Tips</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-4">Bargaining + Smart Shopping Tips</h2>
            </div>
            <div className="space-y-4">
              {[
                { tip: 'Where to bargain (and where NOT)', detail: 'Bargain at Sector 22, Sector 19, Sector 23, street vendors near Rock Garden. Fixed-price at Sector 17 retail and Elante Mall.' },
                { tip: 'Phulkari authentication', detail: 'Real hand-embroidered Phulkari has slightly irregular stitches; back-side neatness matters. Government emporiums certify authenticity.' },
                { tip: 'Ask for the 10-15% courtesy discount', detail: 'Most boutiques offer 10-15% off on first request without bargaining. Always ask "best price?" before paying.' },
                { tip: 'Cash vs card', detail: 'Many small shops give 5-8% extra discount for cash. Sector 22 and Sector 23 prefer cash. Big malls all accept UPI/cards.' },
                { tip: 'Shop in evening for fewer crowds', detail: 'Sector 17 Plaza is busiest 6-9 PM. Visit 11 AM-3 PM for relaxed browsing. Elante Mall mornings are quietest.' },
                { tip: 'Pack Phulkari/jutti separately', detail: 'Phulkari gold/silver thread can stain other clothes. Pack jutti in cotton bag — they shed leather dust initially.' },
              ].map((t, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100">
                  <h3 className="font-bold text-slate-900 mb-2"><Tag className="w-4 h-4 text-emerald-600 inline mr-2" />{t.tip}</h3>
                  <p className="text-slate-600 text-sm">{t.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section py-20 px-4 bg-emerald-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Chandigarh Shopping FAQs</h2>
            </div>
            <div className="space-y-4">
              {faqData.map((faq, i) => (
                <details key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-emerald-100 open:shadow-md transition-all">
                  <summary className="font-bold text-slate-900 cursor-pointer flex justify-between items-center">
                    <span>{faq.question}</span>
                    <ChevronRight className="w-5 h-5 text-emerald-600 transform transition-transform" />
                  </summary>
                  <p className={`faq-answer-${i + 1} text-slate-600 mt-4 leading-relaxed`}>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-emerald-600 to-teal-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Cover All Markets in One Day</h2>
            <p className="text-lg mb-8 opacity-90">Hire a local cab to navigate Sectors 17 → 22 → 19 → 23 → Elante. Skip parking hassle. Carry shopping bags door-to-door.</p>
            <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-[1.02] transition-all">
              <Phone className="w-5 h-5" /> Call: 7668570551
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
