import Link from 'next/link';
import { Phone, MapPin, Clock, ChevronRight, ArrowRight, Camera, Trees, Calendar, Users, Star } from '@/components/ui/icons';
import { getArticleSchema, withSpeakableFAQ, getHowToSchema } from '@/lib/seo/speakable-helpers';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Rock Garden Chandigarh Guide 2026 | Nek Chand\'s Outsider-Art Masterpiece'),
  description: 'Complete Rock Garden Chandigarh guide. Nek Chand\'s 40-acre sculpture park from industrial waste. Tickets, timing, photography spots, history, how to reach.',
  keywords: 'rock garden chandigarh, nek chand rock garden, sector 1 chandigarh, rock garden timing, rock garden ticket price, things to do chandigarh, sculpture park chandigarh',
  authors: [{ name: 'Triveni Cabs™ Editorial' }],
  creator: 'Triveni Cabs™',
  publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/chandigarh-rock-garden-guide' },
  openGraph: {
    title: 'Rock Garden Chandigarh — Nek Chand\'s Outsider-Art Masterpiece',
    description: '40-acre sculpture park from industrial waste. UNESCO-recognized outsider art. Photography spots, timing, history, tickets.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/chandigarh-rock-garden-guide',
    siteName: 'Triveni Cabs™',
    images: [{ url: '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg', width: 1200, height: 630, alt: 'Rock Garden Chandigarh — Nek Chand' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rock Garden Chandigarh Guide 2026',
    description: 'Nek Chand\'s 40-acre outsider-art masterpiece. Complete guide.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function ChandigarhRockGardenGuidePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Chandigarh", "item": "https://www.trivenicabs.in/chandigarh-travel-guide" },
      { "@type": "ListItem", "position": 3, "name": "Rock Garden Guide", "item": "https://www.trivenicabs.in/chandigarh-rock-garden-guide" },
    ],
  };

  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "@id": "https://www.trivenicabs.in/chandigarh-rock-garden-guide#place",
    "name": "Rock Garden of Chandigarh",
    "alternateName": "Nek Chand Rock Garden",
    "description": "40-acre outdoor sculpture park created by Nek Chand Saini using urban and industrial waste. Located in Sector 1, Chandigarh. Outsider art masterpiece built secretly over 18 years.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Sector 1, near Sukhna Lake",
      "addressLocality": "Chandigarh",
      "addressRegion": "Chandigarh UT",
      "postalCode": "160001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "30.7526",
      "longitude": "76.8104"
    },
    "openingHours": "Mo-Su 09:00-19:30",
    "isAccessibleForFree": false,
    "publicAccess": true,
    "image": "https://www.trivenicabs.in/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg"
  };

  const faqData = [
    { question: "What is the Rock Garden of Chandigarh?", answer: "The Rock Garden is a 40-acre sculpture park in Sector 1 Chandigarh, created by Nek Chand Saini (1924-2015) entirely from industrial and urban waste — broken bangles, ceramic shards, electrical sockets, bicycle frames, broken tiles. Built secretly over 18 years (1957-1975) before being legalized. Today it draws 5,000+ visitors daily and is recognized globally as an outsider-art masterpiece." },
    { question: "What are Rock Garden timings and ticket prices?", answer: "Open 9:00 AM to 7:30 PM, all days of the week. Tickets: Adults Rs 30, Children (3-10 years) Rs 10, Foreigners Rs 200. Last entry 6:30 PM. Camera charge: nominal Rs 50 for DSLR/professional cameras. Mobile photography is free. Wheelchair-accessible at most sections." },
    { question: "Who was Nek Chand?", answer: "Nek Chand Saini (1924-2015) was a road inspector with the Public Works Department in Chandigarh. He started collecting waste materials and creating sculptures secretly in a forbidden government forest area in 1957. When discovered in 1975, the government legalized his work and granted him a salary, 50 laborers, and the freedom to expand. He won the Padma Shri in 1984 and his Rock Garden became internationally famous." },
    { question: "How long does it take to see the Rock Garden?", answer: "Plan 2-3 hours for a thorough visit. The garden has 4 phases: Phase 1 (initial sculptures), Phase 2 (the famous animal kingdom courtyard), Phase 3 (the giant amphitheatre and human figure army), and Phase 4 (waterfalls and swing chains). Each phase has its own atmosphere. The amphitheatre and waterfalls in Phase 3 are the photography highlights." },
    { question: "What is the best time to visit Rock Garden?", answer: "October to March is ideal — pleasant temperature, soft natural light for photography. Visit early morning (9-11 AM) for fewer crowds and the best photography light. Avoid weekends and public holidays for quieter experience. Summer (April-June) brings 35-42°C heat and most courtyards are open-air. Monsoon (July-September) makes the waterfalls more dramatic but slippery." },
    { question: "What should I expect to see at Rock Garden?", answer: "Sculptures of dancing women, animals (elephants, monkeys, birds), human figure armies, traditional musicians, all made from broken household items — bangles, plates, tiles, sockets. Highlights: the Hall of Mirrors, the Mughal Garden replica, the giant swinging chains in Phase 3, the central amphitheatre, the waterfall complex, and Nek Chand's original army of 'Mukherjee' figures. The labyrinthine path keeps revealing new corners." },
    { question: "How do I reach Rock Garden from city center?", answer: "Rock Garden is in Sector 1, near Sukhna Lake — about 4 km from Sector 17 Plaza, 6 km from ISBT Bus Stand, 12 km from Chandigarh Airport. Auto from Sector 17: Rs 80-120 (5-10 min). Taxi: Rs 200-350. Triveni Cabs™ hourly cab: Rs 250/hour. Walking distance from Sukhna Lake (1.5 km, 20 min). Free parking available outside the entrance." },
    { question: "Is Rock Garden good for kids?", answer: "Excellent for kids — they love spotting animal sculptures, climbing through tunnels, and posing with the giant figures. The 4-section labyrinth design feels like a treasure hunt. The amphitheatre area has open space for kids to run around. Strollers can be tricky in narrow passages. Plan 1.5-2 hours with kids. Combine with Sukhna Lake nearby (1.5 km) for a full kid-friendly day." },
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
    slug: 'chandigarh-rock-garden-guide',
    headline: 'Rock Garden of Chandigarh — Nek Chand\'s 40-Acre Outsider-Art Masterpiece (2026 Guide)',
    description: 'Complete Rock Garden Chandigarh guide. Nek Chand\'s 40-acre sculpture park from industrial waste. History, timings, tickets, photography spots, how to reach.',
    image: '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg',
    datePublished: '2026-05-03',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.faq-section .faq-answer-1']
  });

  const howToVisitSchema = getHowToSchema({
    name: 'How to Visit Rock Garden Chandigarh in 2 Hours',
    description: 'Step-by-step plan to see all 4 phases of Nek Chand Rock Garden in 2 hours.',
    totalTime: 'PT2H',
    estimatedCost: { currency: 'INR', value: 30 },
    steps: [
      { name: 'Reach early (9-10 AM)', text: 'Arrive between 9:00-10:00 AM for fewer crowds and soft photography light. Free parking outside Sector 1 entrance. Buy ticket at counter — Rs 30 adult.' },
      { name: 'Phase 1 — Initial sculptures (15 min)', text: 'Walk through Nek Chand\'s earliest works (1957-1965). Dancing women, animals, traditional musicians made from bangles and tiles. Read interpretive plaques.' },
      { name: 'Phase 2 — Animal kingdom courtyard (30 min)', text: 'The famous courtyard with elephant army, monkey troupe, bird kingdom. Most photogenic section. Climb the platform for top-down view. Photo opportunity with the giant elephant.' },
      { name: 'Phase 3 — Amphitheatre + figure army (45 min)', text: 'The grand finale — central amphitheatre with hundreds of human figures, the swing chains (you can sit on swinging chains), the famous Hall of Mirrors. Allow time for photos.' },
      { name: 'Phase 4 — Waterfalls + Mughal Garden (30 min)', text: 'Tiered waterfalls (best in monsoon), Mughal Garden replica with fountains, exit gate. Pick up souvenirs from the gift shop.' }
    ]
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToVisitSchema) }} />

      <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
        {/* HERO */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-amber-900 to-rose-900"></div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <nav className="inline-flex items-center gap-2 text-white/80 text-sm mb-6">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/chandigarh-travel-guide" className="hover:text-white">Chandigarh</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-amber-300">Rock Garden</span>
            </nav>
            <h1 className="speakable-headline text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Rock Garden of Chandigarh<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-rose-300">Nek Chand&#39;s Masterpiece</span>
            </h1>
            <p className="speakable-lead text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              40 acres. 18 years of secret nighttime building. Sculptures from industrial waste — broken bangles, ceramic shards, bicycle frames, electrical sockets. The complete 2026 visitor&#39;s guide to one of the world&#39;s most extraordinary outsider-art parks.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <span className="bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full text-white/90 text-sm border border-white/20">📍 Sector 1, Chandigarh</span>
              <span className="bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full text-white/90 text-sm border border-white/20">⏰ 9 AM - 7:30 PM</span>
              <span className="bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full text-white/90 text-sm border border-white/20">💰 ₹30 Adult</span>
              <span className="bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full text-white/90 text-sm border border-white/20">🕐 2-3 hours</span>
            </div>
            <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl transition-all">
              <Phone className="w-5 h-5" /> Book Cab to Rock Garden: 7668570551
            </Link>
          </div>
        </section>

        {/* THE STORY */}
        <section className="py-12 sm:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-amber-700 font-bold text-sm tracking-widest uppercase">The Story</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-4">A Road Inspector&#39;s 18-Year Secret</h2>
            </div>
            <div className="prose prose-lg text-slate-700 max-w-none space-y-5">
              <p>In 1957, Nek Chand Saini — a road inspector with the Chandigarh Public Works Department — began clearing a forbidden forest area on the city&#39;s edge. He started building, alone, by night. With waste materials from Chandigarh&#39;s construction sites: <strong>broken bangles, ceramic shards, electrical sockets, smashed tiles, bicycle frames</strong>.</p>
              <p>For 18 years, no one knew. He built sculptures of dancing women, animal kingdoms, an army of human figures. By 1975 he had completed 12 acres. When government inspectors finally found his secret garden, they faced a dilemma — destroy a masterpiece, or legalize a man&#39;s decades of devotion.</p>
              <p>They chose to legalize. Nek Chand was given a salary, 50 laborers, and the freedom to expand. The Rock Garden grew to 40 acres. He won the <strong>Padma Shri in 1984</strong>. Today, 5,000+ daily visitors walk through what is now recognized globally as an outsider-art masterpiece — alongside Watts Towers (Los Angeles) and Le Palais Idéal (France).</p>
            </div>
          </div>
        </section>

        {/* HOW TO VISIT (Steps) */}
        <section className="py-12 sm:py-20 px-4 bg-amber-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-amber-700 font-bold text-sm tracking-widest uppercase">2-Hour Plan</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-4">How to See the Whole Garden in 2 Hours</h2>
            </div>
            <div className="space-y-4">
              {[
                { num: '1', name: 'Arrive 9-10 AM', desc: 'Soft morning light, fewer crowds. Free parking outside Sector 1 entrance. Buy ticket at counter — Rs 30 adult.', time: '0:00' },
                { num: '2', name: 'Phase 1 — Initial sculptures', desc: 'Earliest works (1957-1965). Dancing women, animals, traditional musicians. Read interpretive plaques.', time: '0:15' },
                { num: '3', name: 'Phase 2 — Animal kingdom courtyard', desc: 'Famous courtyard. Elephant army, monkey troupe, bird kingdom. Most photogenic section. Photo with giant elephant.', time: '0:45' },
                { num: '4', name: 'Phase 3 — Amphitheatre + figure army', desc: 'Grand central amphitheatre with hundreds of human figures, swinging chains (you can sit on them), Hall of Mirrors.', time: '1:30' },
                { num: '5', name: 'Phase 4 — Waterfalls + Mughal Garden', desc: 'Tiered waterfalls (dramatic in monsoon), Mughal Garden replica with fountains. Exit via gift shop.', time: '2:00' },
              ].map((s, i) => (
                <div key={i} className="bg-white rounded-3xl p-6 shadow-sm flex items-start gap-4 border border-amber-100">
                  <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-rose-500 flex items-center justify-center text-white font-black">{s.num}</div>
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start gap-2">
                      <h3 className="text-xl font-bold text-slate-900">{s.name}</h3>
                      <span className="text-xs text-amber-700 font-semibold bg-amber-100 px-2 py-1 rounded">+{s.time}</span>
                    </div>
                    <p className="text-slate-600 mt-2">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PHOTOGRAPHY TIPS */}
        <section className="py-12 sm:py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-amber-700 font-bold text-sm tracking-widest uppercase">Photography</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-4">Best Photography Spots</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { spot: 'Phase 2 Elephant Platform', tip: 'Climb the elevated platform for a top-down view of the elephant herd. Best 9-10 AM with side light.' },
                { spot: 'Phase 3 Amphitheatre', tip: 'Stand at the entrance for the iconic wide shot of hundreds of figures arranged like an army.' },
                { spot: 'Hall of Mirrors', tip: 'Phase 3 corner. Mirror-walls create infinite reflections. Best with a person in frame.' },
                { spot: 'Phase 3 Swinging Chains', tip: 'Sit on the giant chains for a portrait. Late afternoon (4-5 PM) gives golden light.' },
                { spot: 'Phase 4 Waterfalls', tip: 'Most dramatic in monsoon (July-September). Long-exposure works well with tripod.' },
                { spot: 'Bicycle Frame Wall', tip: 'Phase 1 hidden corner. Hundreds of broken bicycle frames create a sculpture wall. Detail shots.' },
              ].map((p, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100">
                  <Camera className="w-8 h-8 text-amber-700 mb-3" />
                  <h3 className="font-bold text-slate-900 mb-2">{p.spot}</h3>
                  <p className="text-slate-600 text-sm">{p.tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMBINE WITH NEARBY */}
        <section className="py-10 sm:py-16 px-4 bg-stone-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Combine with Nearby Attractions</h2>
              <p className="text-slate-600">Plan a half-day around Rock Garden by adding these nearby spots.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/chandigarh-travel-guide" className="bg-white rounded-2xl p-5 border border-stone-200 hover:border-amber-300 hover:shadow-md transition-all">
                <Trees className="w-8 h-8 text-emerald-600 mb-2" />
                <h3 className="font-bold text-slate-900">Sukhna Lake</h3>
                <p className="text-xs text-slate-500 mt-1">1.5 km · 5 min by car</p>
              </Link>
              <Link href="/chandigarh-travel-guide" className="bg-white rounded-2xl p-5 border border-stone-200 hover:border-amber-300 hover:shadow-md transition-all">
                <Trees className="w-8 h-8 text-emerald-600 mb-2" />
                <h3 className="font-bold text-slate-900">Capitol Complex</h3>
                <p className="text-xs text-slate-500 mt-1">3 km · 10 min by car</p>
              </Link>
              <Link href="/chandigarh-shopping-guide" className="bg-white rounded-2xl p-5 border border-stone-200 hover:border-amber-300 hover:shadow-md transition-all">
                <Trees className="w-8 h-8 text-emerald-600 mb-2" />
                <h3 className="font-bold text-slate-900">Sector 17 Plaza</h3>
                <p className="text-xs text-slate-500 mt-1">4 km · 15 min by car</p>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section py-12 sm:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Rock Garden FAQs</h2>
            </div>
            <div className="space-y-4">
              {faqData.map((faq, i) => (
                <details key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-amber-100 open:shadow-md transition-all">
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
        <section className="py-10 sm:py-16 px-4 bg-gradient-to-r from-amber-600 to-rose-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Visit Rock Garden?</h2>
            <p className="text-lg mb-8 opacity-90">Book a Triveni Cabs™ hourly cab for door-to-door pickup, free parking included. Combine with Sukhna Lake + Sector 17 in one day.</p>
            <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-[1.02] transition-all">
              <Phone className="w-5 h-5" /> Call: 7668570551
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
