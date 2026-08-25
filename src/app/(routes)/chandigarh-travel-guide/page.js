import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, Calendar, Camera, Coffee, ShoppingBag, Thermometer, Hotel, Landmark, Compass, BookOpen, Trees } from '@/components/ui/icons';
import { getArticleSchema, withSpeakableFAQ, getCityPlaceSchema } from '@/lib/seo/speakable-helpers';
import QuickAnswer from '@/components/seo/QuickAnswer';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Chandigarh Travel Guide 2026 | City Beautiful — Attractions, Food, Transport'),
  description: 'Complete Chandigarh travel guide. Rock Garden, Sukhna Lake, Capitol Complex, Sector 17, Pinjore Gardens, food, shopping, day trips, monthly weather. Call 7668570551.',
  keywords: 'chandigarh travel guide, chandigarh tourism, rock garden chandigarh, sukhna lake, capitol complex le corbusier, sector 17, things to do in chandigarh, chandigarh attractions, city beautiful guide',
  authors: [{ name: 'Triveni Cabs Editorial' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/chandigarh-travel-guide' },
  openGraph: {
    title: 'Chandigarh Travel Guide 2026 | The Complete City Beautiful Handbook',
    description: 'Plan your Chandigarh trip — Rock Garden, Sukhna Lake, Le Corbusier architecture, Punjabi food, Sector 17 shopping, weekend getaways.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/chandigarh-travel-guide',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg', width: 1200, height: 630, alt: 'Chandigarh Travel Guide 2026 — City Beautiful' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chandigarh Travel Guide 2026 | City Beautiful',
    description: 'Rock Garden, Sukhna Lake, Le Corbusier, food, shopping, transport.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function ChandigarhTravelGuidePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Chandigarh Travel Guide", "item": "https://www.trivenicabs.in/chandigarh-travel-guide" },
    ],
  };

  const faqData = [
    { question: "How many days do I need in Chandigarh?", answer: "1-2 days are sufficient for Chandigarh's main attractions. Day 1: Rock Garden, Sukhna Lake, Sector 17. Day 2: Capitol Complex, Pinjore Gardens, Cactus Garden, Le Corbusier Centre. For weekend getaways extending to Kasauli, Shimla, or Amritsar, plan 3-4 days from Chandigarh as base." },
    { question: "Is Chandigarh safe for solo travellers?", answer: "Yes, Chandigarh is one of India's safest cities. The grid-based sector layout makes navigation easy, public transport is well-organized, and the city has consistently ranked among India's safest in NCRB data. Solo female travellers report comfortable experiences. Use prepaid cabs or Triveni Cabs for late-night transfers." },
    { question: "What is the best time to visit Chandigarh?", answer: "October to March is ideal with pleasant 10-25°C weather. November-February offers crisp mornings perfect for Rock Garden walks and Sukhna Lake jogs. April-June is hot (35-42°C). July-September brings monsoon making the Sukhna Wildlife Sanctuary and surrounding hills lush but humid." },
    { question: "How do I get from Delhi to Chandigarh?", answer: "By car: 4.5-5 hours via NH44 (250 km). Triveni Cabs Sedan Rs 4,200 one-way, Innova Rs 6,000. By train: Shatabdi Express (3.5 hrs), Vande Bharat (3 hrs). By flight: Chandigarh Airport (IXC), 1 hour from Delhi. By bus: Volvo (4-5 hrs) from ISBT Kashmere Gate." },
    { question: "What food is Chandigarh famous for?", answer: "Chandigarh celebrates Punjabi cuisine: butter chicken, dal makhani, sarson da saag with makki di roti, and tandoori platters. Iconic spots include Pal Dhaba (kebabs), Sindhi Sweets (jalebi & samosa), Chawla's Chicken, Hot Millions garlic toast, and the cafes of Sector 17. Lassi at Brijwasi is unmissable." },
    { question: "What should I buy in Chandigarh?", answer: "Sector 17 Plaza for branded shopping, Sector 22 for budget bazaars, Elante Mall (Industrial Area) for premium brands, Sector 19 (Fancy Bazaar) for traditional Punjabi wear. Specialties: Phulkari embroidery (dupattas, jackets), Punjabi jutti (handcrafted leather shoes), parandas (hair tassels), Patiala salwars." },
    { question: "Is Chandigarh expensive to visit?", answer: "Chandigarh is moderately-priced. Budget: Rs 1,500-3,000 per day (hostels, dhabas, autos). Mid-range: Rs 4,000-7,500 per day (3-star hotels, restaurants, private cab). Luxury: Rs 12,000+ per day (Taj/JW Marriott, fine dining). Most attractions have nominal entry (Rs 30-150)." },
    { question: "What weekend getaways are accessible from Chandigarh?", answer: "Chandigarh is the perfect base for North India hill getaways. Top options: Kasauli (60 km, 1.5 hrs — colonial hill town), Shimla (115 km, 3-4 hrs), Manali (310 km, 8 hrs), Dharamshala (240 km, 6 hrs), Dalhousie (310 km, 8 hrs), Amritsar (230 km, 4.5 hrs — Golden Temple + Wagah Border), Kasol (270 km, 7 hrs). See our weekend getaways page for cab packages." },
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
    slug: 'chandigarh-travel-guide',
    headline: 'Chandigarh Travel Guide 2026 — The Complete City Beautiful Handbook',
    description: 'Complete Chandigarh travel guide. Rock Garden, Sukhna Lake, Capitol Complex Le Corbusier architecture, Sector 17, Pinjore Gardens, Punjabi food, shopping, monthly weather, weekend getaways.',
    image: '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg',
    datePublished: '2026-05-03',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.faq-section .faq-answer-1']
  });

  // Place schema — anchors content to real-world geographic entity
  const placeSchema = getCityPlaceSchema("chandigarh", { idSlug: "chandigarh-travel-guide" });

  const attractions = [
    { name: "Rock Garden", desc: "Nek Chand's masterpiece — 40-acre sculpture park built from industrial waste, broken bangles, ceramic shards. UNESCO-recognized outsider art. 4-section labyrinth with waterfalls.", entry: "₹30 Adult / ₹10 Child", timing: "9:00 AM - 7:30 PM", duration: "2-3 hours", icon: Trees, img: "/images/sightseeing/Chandigarh/Rock_Garden.jpg" },
    { name: "Sukhna Lake", desc: "3-km artificial lake at Shivalik foothills. Boating, jogging track, sunrise yoga, paddle boats. Sukhna Wildlife Sanctuary across the dam.", entry: "Free entry / ₹150 boating", timing: "5:00 AM - 9:00 PM", duration: "2-3 hours", icon: Compass, img: "/images/sightseeing/Chandigarh/sukhana_lake.jpg" },
    { name: "Capitol Complex", desc: "Le Corbusier's UNESCO-listed administrative complex — Secretariat, Vidhan Sabha, High Court, Open Hand Monument. Free guided tours daily. Modernist architecture pilgrimage.", entry: "Free (passport ID required)", timing: "10 AM-12 PM, 3-5 PM", duration: "2 hours", icon: Landmark, img: "/images/sightseeing/Chandigarh/capitol_complex.jpeg" },
    { name: "Sector 17 Plaza", desc: "Pedestrian-only shopping plaza with Neelam, Kiran cinema, fountains, restaurants. Heart of Chandigarh's social life. Sound-and-light show on weekends.", entry: "Free", timing: "All day", duration: "2-4 hours", icon: ShoppingBag },
    { name: "Pinjore Gardens (Yadavindra)", desc: "17th-century Mughal terraced gardens with Rang Mahal, Jal Mahal, Sheesh Mahal. 22 km from Chandigarh. Light show on weekends. Mini zoo.", entry: "₹25 Adult / ₹15 Child", timing: "7:00 AM - 10:00 PM", duration: "2-3 hours", icon: Trees },
    { name: "Le Corbusier Centre", desc: "Museum dedicated to architect Le Corbusier (1887-1965). Original drawings, models, photographs documenting Chandigarh's design. In Sector 19.", entry: "₹10 Indian / ₹50 Foreign", timing: "10 AM - 4:30 PM (closed Mon)", duration: "1-1.5 hours", icon: BookOpen },
    { name: "Cactus Garden", desc: "Asia's largest cactus garden — 7-acre conservation site with 3,500+ species. Sector 5, Panchkula. Best in winter when many cacti flower.", entry: "₹10", timing: "9:00 AM - 5:00 PM", duration: "1 hour", icon: Trees },
    { name: "Rose Garden (Zakir Hussain)", desc: "Asia's largest rose garden — 30 acres, 50,000+ roses, 1,600 varieties. Annual Rose Festival in February. Sector 16. Best Jan-March bloom.", entry: "Free", timing: "6:00 AM - 9:00 PM", duration: "1-1.5 hours", icon: Trees, img: "/images/sightseeing/Chandigarh/Zakir_hUSSAIN_ROSE_Garden.jpg" },
  ];

  const monthlyGuide = [
    { month: "Jan", temp: "5-18°C", weather: "Cold, foggy", crowd: "Med", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 70 },
    { month: "Feb", temp: "8-22°C", weather: "Cool, Rose Festival", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 95 },
    { month: "Mar", temp: "12-28°C", weather: "Pleasant", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 92 },
    { month: "Apr", temp: "18-35°C", weather: "Warming", crowd: "Med", verdict: "Good", color: "bg-amber-100 text-amber-800", bar: 60 },
    { month: "May", temp: "23-40°C", weather: "Hot", crowd: "Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 25 },
    { month: "Jun", temp: "25-39°C", weather: "Pre-monsoon", crowd: "Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 22 },
    { month: "Jul", temp: "24-32°C", weather: "Monsoon", crowd: "Low", verdict: "Lush but wet", color: "bg-amber-100 text-amber-800", bar: 50 },
    { month: "Aug", temp: "23-31°C", weather: "Peak rain", crowd: "Low", verdict: "Wet", color: "bg-amber-100 text-amber-800", bar: 45 },
    { month: "Sep", temp: "22-32°C", weather: "Rain fades", crowd: "Med", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 65 },
    { month: "Oct", temp: "16-30°C", weather: "Pleasant", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 95 },
    { month: "Nov", temp: "10-25°C", weather: "Cool, clear", crowd: "Very High", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 100 },
    { month: "Dec", temp: "5-20°C", weather: "Cold, clear", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 88 },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {placeSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }} />}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }} />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* HERO */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg')" }}></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/85"></div>
          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            <nav className="inline-flex items-center gap-2 text-white/80 text-sm mb-6">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-amber-300">Chandigarh Travel Guide</span>
            </nav>
            <h1 className="speakable-headline text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Chandigarh Travel Guide<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-rose-300">The City Beautiful Handbook</span>
            </h1>
            <p className="speakable-lead text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Le Corbusier&#39;s grid-planned masterpiece. Nek Chand&#39;s outsider-art Rock Garden. Sukhna Lake sunrises. Sector 17 evenings. Pinjore Gardens. Punjabi feasts. Your complete 2026 guide to India&#39;s tidiest, greenest city.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl transition-all hover:scale-[1.02]">
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I want to plan a Chandigarh trip" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-xl text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/30 hover:bg-white/20 transition-all">
                WhatsApp Us
              </Link>
            </div>
          </div>
        </section>

        {/* AEO QUICK ANSWER */}
        <section className="px-4 pt-10">
          <div className="max-w-4xl mx-auto">
            <QuickAnswer
              tone="light"
              question="Planning a Chandigarh trip?"
              answer="Chandigarh is best visited between October and March, when the weather is a pleasant 10-25 degrees Celsius. One to two days covers the Rock Garden, Sukhna Lake, Sector 17 and the Capitol Complex, with Pinjore Gardens and the Le Corbusier Centre if you have longer. Delhi is 250 km away on NH44, about 4.5 to 5 hours by car."
              facts={[
                { label: 'Best time', value: 'Oct to Mar' },
                { label: 'Ideal duration', value: '1 to 2 days' },
                { label: 'Top sight', value: 'Rock Garden' },
                { label: 'Cab from Delhi', value: '250 km · from ₹4,200' },
              ]}
            />
          </div>
        </section>

        {/* TOP ATTRACTIONS */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-amber-600 font-bold text-sm tracking-widest uppercase">Top Attractions</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-4">8 Must-Visit Places in Chandigarh</h2>
              <p className="text-slate-600 max-w-3xl mx-auto">From Nek Chand&#39;s Rock Garden — built secretly over 18 years from industrial waste — to Le Corbusier&#39;s UNESCO-listed Capitol Complex.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {attractions.map((a, i) => (
                <div key={i} className="bg-white rounded-3xl shadow-md border border-slate-100 hover:shadow-xl transition-all overflow-hidden group">
                  {a.img && (
                    <div className="h-48 overflow-hidden">
                      <img src={a.img} alt={a.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                  )}
                  <div className="p-6 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <a.icon className="w-6 h-6 text-amber-700" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{a.name}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-3">{a.desc}</p>
                      <div className="flex flex-wrap gap-2 text-xs">
                        <span className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full font-medium">{a.entry}</span>
                        <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">{a.timing}</span>
                        <span className="bg-purple-50 text-purple-700 px-3 py-1 rounded-full font-medium">{a.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BEST TIME TO VISIT */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-amber-600 font-bold text-sm tracking-widest uppercase">Best Time to Visit</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-4">Month-by-Month Weather Guide</h2>
              <p className="text-slate-600">November is the absolute peak — pleasant days, clear skies, no rain. February brings the famous Rose Festival.</p>
            </div>
            <div className="bg-white rounded-3xl shadow-lg p-6 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b-2 border-slate-200">
                    <th className="py-3 px-3 text-sm font-bold text-slate-900">Month</th>
                    <th className="py-3 px-3 text-sm font-bold text-slate-900">Temp</th>
                    <th className="py-3 px-3 text-sm font-bold text-slate-900">Weather</th>
                    <th className="py-3 px-3 text-sm font-bold text-slate-900">Crowd</th>
                    <th className="py-3 px-3 text-sm font-bold text-slate-900">Verdict</th>
                    <th className="py-3 px-3 text-sm font-bold text-slate-900">Score</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyGuide.map((m, i) => (
                    <tr key={i} className="border-b border-slate-100">
                      <td className="py-3 px-3 font-bold text-slate-900">{m.month}</td>
                      <td className="py-3 px-3 text-slate-600 text-sm">{m.temp}</td>
                      <td className="py-3 px-3 text-slate-600 text-sm">{m.weather}</td>
                      <td className="py-3 px-3 text-slate-600 text-sm">{m.crowd}</td>
                      <td className="py-3 px-3"><span className={`px-2 py-1 rounded-full text-xs font-semibold ${m.color}`}>{m.verdict}</span></td>
                      <td className="py-3 px-3"><div className="flex items-center gap-2"><div className="w-24 bg-slate-100 rounded-full h-2"><div className="bg-amber-500 h-2 rounded-full" style={{ width: m.bar + '%' }}></div></div><span className="text-xs text-slate-500">{m.bar}</span></div></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FOOD & SHOPPING TEASERS */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-3xl p-8 border border-amber-100">
              <Coffee className="w-12 h-12 text-amber-700 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Food in Chandigarh</h3>
              <p className="text-slate-600 mb-4">Punjabi cuisine at its richest — Pal Dhaba kebabs, Sindhi Sweets jalebi, Chawla&#39;s butter chicken, Hot Millions garlic toast, Brijwasi lassi. Sector 17 cafes for coffee culture.</p>
              <Link href="/chandigarh-food-tour" className="inline-flex items-center gap-2 text-amber-700 font-bold hover:gap-3 transition-all">Read full food tour <ArrowRight className="w-4 h-4" /></Link>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-3xl p-8 border border-emerald-100">
              <ShoppingBag className="w-12 h-12 text-emerald-700 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Shopping in Chandigarh</h3>
              <p className="text-slate-600 mb-4">Sector 17 Plaza for branded shopping, Sector 22 for budget bazaars, Elante Mall for premium brands. Phulkari embroidery, Punjabi jutti, paranda hair tassels — heritage Punjabi crafts.</p>
              <Link href="/chandigarh-shopping-guide" className="inline-flex items-center gap-2 text-emerald-700 font-bold hover:gap-3 transition-all">Read shopping guide <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </section>

        {/* GETTING THERE */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-amber-600 font-bold text-sm tracking-widest uppercase">Getting There</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-4">Delhi to Chandigarh — Transport Options</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-3xl p-6 shadow-md">
                <Car className="w-10 h-10 text-amber-700 mb-3" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">By Cab (Recommended)</h3>
                <p className="text-slate-600 text-sm mb-3">Triveni Cabs Sedan ₹4,200, SUV ₹6,000, Tempo ₹11,000 one-way. 4.5-5 hrs via NH44 Delhi-Chandigarh Expressway. Door-to-door, no transfers.</p>
                <Link href="/delhi-to-chandigarh" className="text-amber-700 font-semibold text-sm hover:underline">Book cab →</Link>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-md">
                <Calendar className="w-10 h-10 text-blue-700 mb-3" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">By Train</h3>
                <p className="text-slate-600 text-sm mb-3">Shatabdi Express (3.5 hrs), Vande Bharat (3 hrs), Kalka Shatabdi. From New Delhi station. Fares ₹500-1,500. Book on IRCTC.</p>
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-md">
                <Compass className="w-10 h-10 text-emerald-700 mb-3" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">By Flight or Bus</h3>
                <p className="text-slate-600 text-sm mb-3">Flight: 1 hr to Chandigarh Airport (IXC). IndiGo, Air India, Vistara. Bus: 4-5 hrs Volvo from ISBT Kashmere Gate, ₹600-1,200.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WEEKEND GETAWAYS */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-amber-600 font-bold text-sm tracking-widest uppercase">Beyond the City</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-4">Weekend Getaways from Chandigarh</h2>
              <p className="text-slate-600">Chandigarh is North India&#39;s perfect base for hill escapes — plan a 2-day Kasauli or 4-day Manali extension.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { name: 'Kasauli', dist: '60 km · 1.5 hrs', tag: 'Colonial hill town' },
                { name: 'Shimla', dist: '115 km · 3-4 hrs', tag: 'Queen of Hills' },
                { name: 'Manali', dist: '310 km · 8 hrs', tag: 'Adventure capital' },
                { name: 'Dharamshala', dist: '240 km · 6 hrs', tag: 'Tibetan culture' },
                { name: 'Dalhousie', dist: '310 km · 8 hrs', tag: 'Pine forests' },
                { name: 'Amritsar', dist: '230 km · 4.5 hrs', tag: 'Golden Temple' },
              ].map((g, i) => (
                <div key={i} className="bg-white rounded-2xl p-5 border border-slate-100 hover:border-amber-300 hover:shadow-lg transition-all">
                  <h3 className="font-bold text-slate-900">{g.name}</h3>
                  <div className="text-xs text-slate-500 mt-1">{g.dist}</div>
                  <div className="text-sm text-amber-700 font-semibold mt-2">{g.tag}</div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/weekend-getaways-from-chandigarh-by-car" className="inline-flex items-center gap-2 text-amber-700 font-bold hover:gap-3 transition-all">See all 18 weekend getaways <ArrowRight className="w-4 h-4" /></Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section py-20 px-4 bg-slate-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-amber-600 font-bold text-sm tracking-widest uppercase">Common Questions</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-4">Chandigarh Travel FAQs</h2>
            </div>
            <div className="space-y-4">
              {faqData.map((faq, i) => (
                <details key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 open:shadow-md transition-all">
                  <summary className="font-bold text-slate-900 cursor-pointer flex justify-between items-center">
                    <span>{faq.question}</span>
                    <ChevronRight className="w-5 h-5 text-amber-600 transform transition-transform" />
                  </summary>
                  <p className={`faq-answer-${i + 1} text-slate-600 mt-4 leading-relaxed`}>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-gradient-to-r from-amber-600 to-rose-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Ready to Explore Chandigarh?</h2>
            <p className="text-xl mb-8 opacity-90">Book a comfortable AC cab from Delhi or any nearby city. Door-to-door, fixed fare, verified driver.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-[1.02] transition-all">
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="/delhi-to-chandigarh" className="inline-flex items-center justify-center gap-2 bg-amber-700 text-white px-8 py-4 rounded-2xl font-bold text-lg border border-white/30 hover:bg-amber-800 transition-all">
                Book Delhi → Chandigarh Cab <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
