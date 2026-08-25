import Link from 'next/link';
import { Phone, MapPin, ChevronRight, ArrowRight, CheckCircle2, X, Building2, Home, Briefcase, Utensils, IndianRupee } from '@/components/ui/icons';
import { getArticleSchema, withSpeakableFAQ, getComparisonSchema } from '@/lib/seo/speakable-helpers';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Chandigarh vs Mohali 2026 | Real Estate, Lifestyle, IT Hub Comparison'),
  description: 'Detailed Chandigarh vs Mohali comparison 2026. Real estate, lifestyle, IT hub, food, transport, schools, infrastructure. Which is better to live or visit?',
  keywords: 'chandigarh vs mohali, mohali vs chandigarh, mohali real estate, chandigarh tricity, mohali it hub, chandigarh lifestyle, where to live tricity',
  authors: [{ name: 'Triveni Cabs Editorial' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/chandigarh-vs-mohali' },
  openGraph: {
    title: 'Chandigarh vs Mohali — Tricity Comparison Guide 2026',
    description: 'Real estate, lifestyle, IT hub, food, schools, infrastructure. The complete tricity comparison.',
    type: 'article',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/chandigarh-vs-mohali',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg', width: 1200, height: 630, alt: 'Chandigarh vs Mohali Comparison' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chandigarh vs Mohali — Tricity Comparison 2026',
    description: 'Real estate, lifestyle, IT hub, schools, infrastructure.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function ChandigarhVsMohaliPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Chandigarh", "item": "https://www.trivenicabs.in/chandigarh-travel-guide" },
      { "@type": "ListItem", "position": 3, "name": "Chandigarh vs Mohali", "item": "https://www.trivenicabs.in/chandigarh-vs-mohali" },
    ],
  };

  const comparisonRows = [
    { feature: 'Administrative status', chandigarh: 'Union Territory (joint capital)', mohali: 'Punjab district (SAS Nagar)' },
    { feature: 'Population (2024 est.)', chandigarh: '~1.2 million', mohali: '~430,000 (rapidly growing)' },
    { feature: 'Real estate (3BHK avg)', chandigarh: '₹1.2-2.5 cr (Sectors 1-46)', mohali: '₹65 lakh-1.5 cr (more value)' },
    { feature: 'Rental (3BHK furnished)', chandigarh: '₹35,000-60,000/mo', mohali: '₹22,000-40,000/mo' },
    { feature: 'IT/Tech hub', chandigarh: 'Industrial Area (older)', mohali: 'IT City + Quark City (newer, hot)' },
    { feature: 'Public transport', chandigarh: 'CTU buses, autos', mohali: 'Limited buses, mostly autos' },
    { feature: 'Airport', chandigarh: 'Shared (IXC) — closer to Mohali', mohali: 'Closer to airport (8 km)' },
    { feature: 'Education', chandigarh: 'Punjab University, PEC', mohali: 'Chandigarh University, ISB-Mohali' },
    { feature: 'Healthcare', chandigarh: 'PGIMER, GMCH-32, Fortis', mohali: 'Max Hospital, IVY Hospital' },
    { feature: 'Food & nightlife', chandigarh: 'Sector 17, 26, 35 cafes', mohali: 'Phase 7-11 emerging scene' },
    { feature: 'Shopping', chandigarh: 'Sector 17 Plaza, Elante Mall', mohali: 'NEXUS Elante (in Industrial Area, technically Chandigarh-Mohali border)' },
    { feature: 'Sports infrastructure', chandigarh: 'Sector 7 stadium', mohali: 'PCA stadium (cricket), hockey stadium' },
    { feature: 'Tourism', chandigarh: 'Rock Garden, Sukhna, Capitol Complex', mohali: 'Few tourist spots; mostly residential' },
    { feature: 'Pollution', chandigarh: 'Lower (planned green city)', mohali: 'Higher (newer construction zones)' },
  ];

  const faqData = [
    { question: "Is Chandigarh or Mohali better to live?", answer: "Depends on priorities. Chandigarh: better infrastructure, more parks, lower pollution, higher real estate prices, established neighborhoods. Mohali: better real estate value (30-40% cheaper), newer IT hub jobs, growing food scene, but less mature public transport and slightly higher pollution. Young IT professionals often choose Mohali; families with established roots prefer Chandigarh." },
    { question: "Why is real estate cheaper in Mohali?", answer: "Mohali falls under Punjab state (vs Chandigarh's UT status with land scarcity). Mohali has ongoing greenfield development across 95+ phases with new construction. Chandigarh's planned city limits restrict new development. Mohali offers 30-40% more square footage for the same budget — a 3BHK flat that costs Rs 1.5 cr in Chandigarh costs Rs 90 lakh-1.1 cr in Mohali Phase 8-11." },
    { question: "Is Mohali safe to live?", answer: "Yes, Mohali has good safety ratings comparable to Chandigarh. Phase 7-11, Sector 67-79 are well-developed residential phases with gated communities and security. Phase 1-3 (older) is mixed. New phases (3A, 3B2) have modern infrastructure. Police response is good. Most areas are walkable in evenings, but use cabs for late-night travel." },
    { question: "Which has better schools — Chandigarh or Mohali?", answer: "Chandigarh has older premier schools: DAV Sector 8, Strawberry Fields, Sacred Heart Convent, St. John's Sector 26. Mohali has newer rapidly-growing schools: Chandigarh University-affiliated, Lawrence School, KB DAV, Shemrock. For top-tier traditional schools, Chandigarh wins. For modern campuses with newer facilities, Mohali matches up." },
    { question: "Is Chandigarh airport in Mohali or Chandigarh?", answer: "Chandigarh International Airport (IXC) is technically in Mohali district (8 km from Mohali Phase 1, 12 km from Chandigarh Sector 17). Both cities use it. Domestic terminal serves IndiGo, Air India, Vistara. International terminal serves Sharjah, Dubai. Most flights land in 1 hr from Delhi. Cab from Mohali to airport: Rs 200-300; from Chandigarh: Rs 350-450." },
    { question: "Where is the IT hub — Chandigarh or Mohali?", answer: "Mohali is the emerging IT hub. Quark City (Mohali) hosts Quark, Tech Mahindra, Genpact, Dell, Bebo Technologies. IT City Mohali (Sector 66B) is the newest expansion. Chandigarh's Industrial Area Phase I-III hosts smaller IT companies and Infosys, Wipro. For IT job seekers, Mohali offers more roles especially in newer sectors. Average IT salary similar in both." },
    { question: "Which has better food and nightlife?", answer: "Chandigarh has more established food scene — Sector 17 cafes, Sector 26 fine dining (Pashtun, Bhoj, Black Lotus at Taj), Sector 35 inner market. Mohali has emerging food in Phase 7-11 and Sector 70-79 — newer cafes, breweries (Chai Kings, Brewbot), more contemporary spots. For traditional Punjabi cuisine, Chandigarh wins. For modern bistros and casual dining, Mohali catches up fast." },
    { question: "Are Chandigarh and Mohali considered tricity?", answer: "Yes — Chandigarh, Mohali, and Panchkula together form the 'Tricity' (with Zirakpur sometimes included as a fourth). All three are physically contiguous, share Chandigarh as central hub, share IXC airport, and have integrated transport via CTU buses. People commute daily between all three. Real estate decisions often weigh all three options together." },
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
    slug: 'chandigarh-vs-mohali',
    headline: 'Chandigarh vs Mohali 2026 — Real Estate, Lifestyle, IT Hub, Schools, Infrastructure',
    description: 'Detailed Chandigarh vs Mohali tricity comparison. Real estate prices, lifestyle, IT hub, food, schools, healthcare, transport, airport access. Which is better to live or visit?',
    image: '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg',
    datePublished: '2026-05-03',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.faq-section .faq-answer-1']
  });

  const comparisonSchemas = getComparisonSchema({
    slug: 'chandigarh-vs-mohali',
    title: 'Chandigarh vs Mohali — Complete Tricity Comparison 2026',
    description: '14-point comparison covering real estate, lifestyle, IT, schools, healthcare, food, infrastructure.',
    rows: comparisonRows,
    mentions: ['Chandigarh', 'Mohali', 'SAS Nagar', 'Punjab', 'Tricity', 'Quark City', 'IT City Mohali', 'PGIMER']
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {comparisonSchemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* HERO */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900">
          <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
            <nav className="inline-flex items-center gap-2 text-white/80 text-sm mb-6">
              <Link href="/" className="hover:text-white">Home</Link>
              <ChevronRight className="w-3 h-3" />
              <Link href="/chandigarh-travel-guide" className="hover:text-white">Chandigarh</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-amber-300">vs Mohali</span>
            </nav>
            <h1 className="speakable-headline text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
              Chandigarh vs Mohali<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-cyan-300">Complete Tricity Comparison</span>
            </h1>
            <p className="speakable-lead text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8">
              Real estate prices · Lifestyle · IT hub · Schools · Healthcare · Food scene · Transport · Airport access. Honest 14-point side-by-side comparison to help you decide where to live, work, or visit.
            </p>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-blue-700 font-bold text-sm tracking-widest uppercase">14-Point Comparison</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-4">Chandigarh vs Mohali — Side by Side</h2>
            </div>
            <div className="overflow-x-auto rounded-3xl shadow-lg border border-slate-200">
              <table className="w-full text-left bg-white">
                <thead className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
                  <tr>
                    <th className="px-5 py-4 text-sm font-bold tracking-wide">Feature</th>
                    <th className="px-5 py-4 text-sm font-bold tracking-wide bg-amber-700/30">Chandigarh</th>
                    <th className="px-5 py-4 text-sm font-bold tracking-wide bg-emerald-700/30">Mohali</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-5 py-4 font-bold text-slate-800 text-sm">{r.feature}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm bg-amber-50/50">{r.chandigarh}</td>
                      <td className="px-5 py-4 text-slate-700 text-sm bg-emerald-50/50">{r.mohali}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-sm text-slate-500 mt-4 italic">
              Last updated {new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}. Real estate prices indicative; vary by phase/sector.
            </p>
          </div>
        </section>

        {/* WHO SHOULD CHOOSE WHAT */}
        <section className="py-20 px-4 bg-slate-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Who Should Choose Which?</h2>
              <p className="text-slate-600">Quick decision guide based on lifestyle priorities.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-amber-50 border-2 border-amber-200 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-amber-900 mb-4 flex items-center gap-2"><Building2 className="w-6 h-6" /> Choose Chandigarh if...</h3>
                <ul className="space-y-3">
                  {[
                    'You value mature urban planning and parks',
                    'You want established schools and healthcare nearby',
                    'You can afford ₹1.5+ crore real estate',
                    'You prefer pedestrian-friendly Sector 17 lifestyle',
                    'You value lower pollution and walking-distance amenities',
                    'You\'re a retiree or family with kids',
                  ].map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-800"><CheckCircle2 className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" /><span className="text-sm">{p}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-emerald-50 border-2 border-emerald-200 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-emerald-900 mb-4 flex items-center gap-2"><Briefcase className="w-6 h-6" /> Choose Mohali if...</h3>
                <ul className="space-y-3">
                  {[
                    'You\'re an IT professional seeking newer job opportunities',
                    'You want 30-40% more real estate value for the same budget',
                    'You\'re investing for capital appreciation (rapid growth)',
                    'You like newer townships with modern amenities',
                    'You want airport proximity (8 km vs 12 km)',
                    'You\'re a young professional or first-time home buyer',
                  ].map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-800"><CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" /><span className="text-sm">{p}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Chandigarh vs Mohali FAQs</h2>
            </div>
            <div className="space-y-4">
              {faqData.map((faq, i) => (
                <details key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 open:shadow-md transition-all">
                  <summary className="font-bold text-slate-900 cursor-pointer flex justify-between items-center">
                    <span>{faq.question}</span>
                    <ChevronRight className="w-5 h-5 text-blue-600 transform transition-transform" />
                  </summary>
                  <p className={`faq-answer-${i + 1} text-slate-600 mt-4 leading-relaxed`}>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Tour Both Cities — One Day Plan</h2>
            <p className="text-lg mb-8 opacity-90">Book a tricity cab to cover Chandigarh + Mohali + Panchkula in one comprehensive day. ₹2,500-3,500 hourly cab.</p>
            <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl hover:scale-[1.02] transition-all">
              <Phone className="w-5 h-5" /> Call: 7668570551
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
