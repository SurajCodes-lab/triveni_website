import Link from 'next/link';
import { Phone, MapPin, Clock, Star, ChevronRight, Coffee, ArrowRight, Calendar, Utensils, IndianRupee } from '@/components/ui/icons';
import { getArticleSchema, withSpeakableFAQ, getCityPlaceSchema } from '@/lib/seo/speakable-helpers';

export const revalidate = 3600;

export const metadata = {
  title: 'Chandigarh Food Tour 2026 | Pal Dhaba, Sindhi Sweets, Sector 17 Cafes',
  description: 'Complete Chandigarh food tour. Pal Dhaba kebabs, Sindhi Sweets jalebi, Chawla\'s Chicken, Hot Millions garlic toast, Brijwasi lassi, Kulcha Land, Sector 17 cafes.',
  keywords: 'chandigarh food tour, pal dhaba chandigarh, sindhi sweets chandigarh, chawla chicken, sector 17 cafes, best food in chandigarh, punjabi food chandigarh, where to eat chandigarh',
  authors: [{ name: 'Triveni Cabs Editorial' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/chandigarh-food-tour' },
  openGraph: {
    title: 'Chandigarh Food Tour 2026 | The Definitive Punjabi Food Guide',
    description: 'Pal Dhaba, Sindhi Sweets, Chawla\'s Chicken, Hot Millions, Brijwasi Lassi, Sector 17 cafes. Iconic Punjabi flavors of City Beautiful.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/chandigarh-food-tour',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg', width: 1200, height: 630, alt: 'Chandigarh Food Tour 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chandigarh Food Tour 2026',
    description: 'Pal Dhaba, Sindhi Sweets, Hot Millions, Brijwasi. Punjabi flavors.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function ChandigarhFoodTourPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Chandigarh Food Tour", "item": "https://www.trivenicabs.in/chandigarh-food-tour" },
    ],
  };

  const faqData = [
    { question: "What food is Chandigarh famous for?", answer: "Chandigarh celebrates rich Punjabi cuisine: butter chicken, dal makhani, sarson da saag with makki di roti, tandoori platters, kebabs, and aloo paratha breakfasts. Iconic spots: Pal Dhaba (kebabs), Sindhi Sweets (jalebi), Chawla's Chicken (butter chicken), Hot Millions (garlic toast), Brijwasi (lassi), Kulcha Land (kulcha-chole)." },
    { question: "Where can I get the best butter chicken in Chandigarh?", answer: "Chawla's Chicken (Sector 17, Sector 22) is legendary for butter chicken — creamy tomato gravy, tender tandoori chicken, served with butter naan. Also recommended: Pal Dhaba (Sector 28), Bhoj (Sector 26), Pashtun (Sector 26), and Mehfil (Sector 17). Average butter chicken plate Rs 350-500." },
    { question: "Is Chandigarh good for vegetarians?", answer: "Yes, vegetarians thrive in Chandigarh. Sagar Ratna (South Indian, Sector 26), Amritsari Kulcha at Kulcha Land (Sector 19), Govinda's (pure veg, Sector 22), Aroma (vegetarian Punjabi), and the entire range of dhabas serve excellent vegetarian Punjabi thalis (dal makhani, paneer butter masala, kadhi pakoda)." },
    { question: "What is Pal Dhaba famous for?", answer: "Pal Dhaba (Sector 28) is a cult-status Punjabi joint famous for its tandoori meats — chicken tikka, mutton seekh kebab, butter chicken — served with hot tandoori roti. Family-run since 1972. No-frills, plastic chairs, but legendary flavor. Open lunch and dinner. Expect a wait on weekends." },
    { question: "Best places for street food in Chandigarh?", answer: "Sector 22 has the best street food: golgappe (pani puri) at Krishna Sweets, Tikki Chaat near the bus stand, kulche-chole at Kulcha Land. Sector 9 market has Indian-Chinese (chowmein, manchurian). Sector 17 plaza has Hot Millions garlic toast (a local institution). Industrial Area Phase II has truck-stop dhabas serving authentic Punjabi food." },
    { question: "Where to find vegetarian Punjabi thali?", answer: "Bhoj (Sector 26) — Rs 280 pure-veg unlimited Gujarati-Rajasthani thali. Aroma (Sector 22) — Punjabi thali with dal makhani, sarson saag, paneer, roti, rice, dessert. Pakwan Punjabi (Sector 17) — local favorite. For higher-end: Hyatt Regency's Saffron, Taj Chandigarh's Black Lotus." },
    { question: "Best lassi and dessert spots?", answer: "Brijwasi Sweets (Sector 17) for thick sweet lassi served in clay matka. Sindhi Sweets (Sector 17) for jalebi, samosa, and rabri. For kulfi: Roopak's (Sector 22) and Sukhna Lake stalls. For modern desserts: Cocoa Cocktail (Sector 17), Sugar Daddies (Sector 9). Punjabi traditional sweets at Bansi Lal Sweet Shop (Sector 26)." },
    { question: "Are Sector 17 cafes worth visiting?", answer: "Sector 17 plaza is Chandigarh's social heart with iconic cafes: Hot Millions (since 1980, garlic toast legend), Sagar Ratna, Coffee Day, Starbucks, McDonald's. The plaza's pedestrian-only zone and fountains make it a lovely evening hangout. Stay for the sound-and-light show on weekends. Average meal Rs 300-600 per person." },
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
    slug: 'chandigarh-food-tour',
    headline: 'Chandigarh Food Tour 2026 — Pal Dhaba, Sindhi Sweets, Sector 17 Cafes',
    description: 'Complete Chandigarh food tour. Pal Dhaba kebabs, Sindhi Sweets jalebi, Chawla\'s Chicken butter chicken, Hot Millions garlic toast, Brijwasi lassi, Kulcha Land, Sector 17 cafes.',
    image: '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg',
    datePublished: '2026-05-03',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.faq-section .faq-answer-1']
  });

  // Place schema — anchors content to real-world geographic entity
  const placeSchema = getCityPlaceSchema("chandigarh", { idSlug: "chandigarh-food-tour" });

  const foodIcons = [
    { name: 'Pal Dhaba', area: 'Sector 28', signature: 'Tandoori platters · Mutton seekh', priceRange: '₹400-700/person', icon: '🍗', notes: 'Family-run since 1972. Legendary tandoori. No-frills. Expect a wait.' },
    { name: 'Sindhi Sweets', area: 'Sector 17', signature: 'Jalebi · Samosa · Rabri', priceRange: '₹100-300', icon: '🥮', notes: 'Crisp jalebi served hot, samosas with mint chutney. Sweet shop institution.' },
    { name: "Chawla's Chicken", area: 'Sector 17 & 22', signature: 'Butter chicken · Naan', priceRange: '₹400-600', icon: '🍛', notes: 'Creamy tomato butter chicken. Local favorite for North Indian non-veg.' },
    { name: 'Hot Millions', area: 'Sector 17 Plaza', signature: 'Garlic toast · Pizza', priceRange: '₹250-500', icon: '🍕', notes: 'Garlic toast is the local legend. Multi-cuisine since 1980.' },
    { name: 'Brijwasi Lassi', area: 'Sector 17', signature: 'Sweet/salted lassi · Kulfi', priceRange: '₹80-150', icon: '🥛', notes: 'Thick lassi in clay matka. Refreshing summer essential.' },
    { name: 'Kulcha Land', area: 'Sector 19', signature: 'Amritsari kulcha · Chole', priceRange: '₹120-250', icon: '🫓', notes: 'Stuffed kulcha straight from tandoor with spicy chole. Open early morning.' },
    { name: 'Bhoj', area: 'Sector 26', signature: 'Pure veg unlimited thali', priceRange: '₹280-350', icon: '🍱', notes: 'Gujarati-Rajasthani thali with 25+ items. Best value vegetarian meal.' },
    { name: 'Pashtun', area: 'Sector 26', signature: 'Pashtun-Afghan grills', priceRange: '₹600-1,200', icon: '🍢', notes: 'Tandoori meats, biryanis, Afghan kebabs. Upscale ambience.' },
  ];

  const sectorTour = [
    { sector: 'Sector 9', vibe: 'Indian-Chinese street food', spots: 'Krishna Chowmein, Sukhpur Manchurian stalls' },
    { sector: 'Sector 17', vibe: 'Plaza dining + cafes', spots: 'Hot Millions, Sindhi Sweets, Brijwasi, Sagar Ratna' },
    { sector: 'Sector 19', vibe: 'Punjabi breakfast street', spots: 'Kulcha Land, paranthe wale, lassi shops' },
    { sector: 'Sector 22', vibe: 'Budget eats + sweet shops', spots: 'Krishna Sweets, Chawla\'s, Mehfil, Aroma' },
    { sector: 'Sector 26', vibe: 'Upscale fine dining', spots: 'Pashtun, Bhoj, Sagar Ratna, Hyatt Regency' },
    { sector: 'Sector 28', vibe: 'Cult dhabas', spots: 'Pal Dhaba (the legend), local meat joints' },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {placeSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }} />}

      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
        {/* HERO */}
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-rose-900 to-amber-900"></div>
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <nav className="inline-flex items-center gap-2 text-white/80 text-sm mb-6">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/chandigarh-travel-guide" className="hover:text-white">Chandigarh</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-amber-300">Food Tour</span>
            </nav>
            <h1 className="speakable-headline text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Chandigarh Food Tour<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-rose-300">The Punjabi Feast Map</span>
            </h1>
            <p className="speakable-lead text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Pal Dhaba kebabs. Sindhi Sweets jalebi. Chawla&#39;s butter chicken. Hot Millions garlic toast. Brijwasi lassi. Kulcha Land at sunrise. The 8 iconic addresses + sector-by-sector food map of City Beautiful.
            </p>
            <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl transition-all">
              <Phone className="w-5 h-5" /> Book Food-Tour Cab: 7668570551
            </Link>
          </div>
        </section>

        {/* 8 ICONIC SPOTS */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-orange-700 font-bold text-sm tracking-widest uppercase">The Big 8</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-4">Iconic Chandigarh Food Spots</h2>
              <p className="text-slate-600 max-w-3xl mx-auto">Battle-tested by locals, photographed by tourists, loved by generations. These are the eight names you cannot leave Chandigarh without trying.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {foodIcons.map((f, i) => (
                <div key={i} className="bg-white rounded-3xl p-6 shadow-md border border-orange-100 hover:shadow-xl hover:border-orange-300 transition-all">
                  <div className="text-5xl mb-3">{f.icon}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{f.name}</h3>
                  <div className="text-xs text-orange-700 font-bold mb-2">{f.area}</div>
                  <div className="text-sm text-slate-700 font-semibold mb-2">{f.signature}</div>
                  <div className="inline-block bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium mb-3">{f.priceRange}</div>
                  <p className="text-slate-500 text-xs leading-relaxed">{f.notes}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTOR-BY-SECTOR MAP */}
        <section className="py-20 px-4 bg-orange-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-orange-700 font-bold text-sm tracking-widest uppercase">Sector-by-Sector</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-4">Chandigarh Food Map by Sector</h2>
              <p className="text-slate-600">Each sector has its own vibe. Use this map to plan a multi-meal day.</p>
            </div>
            <div className="space-y-4">
              {sectorTour.map((s, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100 flex flex-col md:flex-row gap-4 items-start md:items-center">
                  <div className="flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-500 flex items-center justify-center text-white font-black text-2xl">{s.sector.replace('Sector ', '')}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900">{s.sector} — <span className="text-orange-700">{s.vibe}</span></h3>
                    <p className="text-slate-600 text-sm mt-2">{s.spots}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Chandigarh Food FAQs</h2>
            </div>
            <div className="space-y-4">
              {faqData.map((faq, i) => (
                <details key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100 open:shadow-md transition-all">
                  <summary className="font-bold text-slate-900 cursor-pointer flex justify-between items-center">
                    <span>{faq.question}</span>
                    <ChevronRight className="w-5 h-5 text-orange-600 transform transition-transform" />
                  </summary>
                  <p className={`faq-answer-${i + 1} text-slate-600 mt-4 leading-relaxed`}>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange-600 to-rose-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Tour Chandigarh&apos;s Best Food in One Day</h2>
            <p className="text-lg mb-8 opacity-90">Hire a cab + food-savvy driver to navigate sectors efficiently. Skip parking hassles. Cover 6+ iconic spots in one day.</p>
            <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-orange-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-[1.02] transition-all">
              <Phone className="w-5 h-5" /> Call: 7668570551
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
