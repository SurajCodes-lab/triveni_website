// src/app/(routes)/tours-with-guide/by-guide-language/page.js
// H2 — Sub-hub: 10 spoken-language landings + per-language deep pages.

import Link from 'next/link';
import Image from 'next/image';
import {
  getToursByGroup,
  GUIDE_LANGUAGES,
} from '@/utilis/toursWithGuideData';
import AnswerBox from '@/components/seo/AnswerBox';
import InlineCTA from '@/components/seo/InlineCTA';
import { Globe, IndianRupee, Sparkles } from '@/components/ui/icons';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import {
  getSpeakableSchema,
  getArticleSchema,
  getHowToSchema,
  getComparisonSchema,
  getTodayDate,
} from '@/lib/seo/speakable-helpers';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

const LANG_FEE_ROWS = [
  { lang: 'English', day: '₹1,500', useCase: 'US / UK / Australia tourists, business visitors' },
  { lang: 'Hindi', day: '₹1,200', useCase: 'Domestic travellers, NRI families' },
  { lang: 'French', day: '₹2,500', useCase: 'France, Belgium, Canada (Québec), Switzerland' },
  { lang: 'German', day: '₹2,800', useCase: 'Germany, Austria, Switzerland groups' },
  { lang: 'Spanish', day: '₹2,500', useCase: 'Spain & Latin American visitors' },
  { lang: 'Italian', day: '₹2,500', useCase: 'Italian heritage & art-focused travellers' },
  { lang: 'Japanese', day: '₹3,000', useCase: 'Japan tour groups, detail-oriented itineraries' },
  { lang: 'Mandarin', day: '₹3,000', useCase: 'China, Taiwan, Singapore tourists' },
  { lang: 'Russian', day: '₹2,800', useCase: 'Russia & CIS leisure travellers' },
  { lang: 'Portuguese', day: '₹2,800', useCase: 'Portugal & Brazil visitors' },
];

const LANG_FAQS = [
  { question: 'Can I get a tour guide who speaks my language?', answer: 'Yes. Triveni Cabs deploys Ministry-of-Tourism licensed guides in 10 spoken languages — English, Hindi, French, German, Spanish, Italian, Japanese, Russian, Mandarin and Portuguese — with Korean, Arabic, Dutch, Polish and Thai available on request. Tell us your language at booking and we match a fluent licensed guide.' },
  { question: 'How much does a foreign-language tour guide cost?', answer: 'English guides are ₹1,500/day and Hindi ₹1,200/day. European languages (French, German, Spanish, Italian, Russian, Portuguese) are ₹2,500–₹2,800/day. Japanese and Mandarin are ₹3,000/day. The rate covers a full 8–10 hour touring day and is fixed at booking.' },
  { question: 'Are foreign-language guides government-licensed?', answer: 'Yes. Every guide is a Ministry-of-Tourism Regional Level Tourist Guide — licensed, photo-ID verified and with at least 5 years on the Agra / Delhi / Jaipur circuit. We share licence proof on WhatsApp at confirmation.' },
  { question: 'How far in advance should I book a foreign-language guide?', answer: 'Book at least 24–48 hours ahead for French, German, Spanish, Japanese and Mandarin guides, especially in peak season (October–March). English and Hindi guides are often available same-day or next-day.' },
  { question: 'Can the guide handle a multi-city Golden Triangle tour?', answer: 'Regional licences are city-specific, so for a Golden Triangle tour we assign a same-language licensed guide in each city — Delhi, Agra and Jaipur — while keeping the same vehicle and driver throughout for seamless travel.' },
  { question: 'Do you have guides for less-common languages?', answer: 'Yes — Korean, Arabic, Dutch, Polish and Thai guides are available through our associate network. WhatsApp us at least 12 hours in advance so we can confirm an available specialist for your dates.' },
  { question: 'Is the vehicle included with a language guide?', answer: 'You can book a guide on its own or bundle it with an AC vehicle (sedan, Innova, tempo or luxury car) so the guide and car arrive together at one fixed fare. See our Tours With Guide hub for vehicle + guide bundles.' },
  { question: 'Will a female foreign-language guide be available?', answer: 'We have licensed female guides for English, Hindi and selected European languages in Delhi, Agra and Jaipur. Request a female guide at booking and we will confirm availability — book 24–48 hours ahead for best results.' },
];

const baseUrl = 'https://www.trivenicabs.in';
const url = `${baseUrl}/tours-with-guide/by-guide-language`;
const PHONE = '7668570551';

export const metadata = {
  title: tightenTitle('Tour Guide by Language — French, German, Spanish & More'),
  description: 'Hire a Ministry-licensed tour guide who speaks your language: English, Hindi, French, German, Spanish, Italian, Japanese, Russian, Mandarin, Portuguese.',
  keywords: 'by guide language, tour package india, sightseeing tour, triveni cabs',
  alternates: { canonical: url },
  openGraph: {
    title: 'Hire a Tour Guide by Spoken Language — Ministry-Licensed Multilingual Guides',
    description: 'English, Hindi, French, German, Spanish, Italian, Japanese, Russian, Mandarin, Portuguese — licensed guides for Taj Mahal, Delhi, Jaipur, Golden Triangle.',
    url,
    type: 'website',
    locale: 'en_IN',
    siteName: 'Triveni Cabs',
    images: [{ url: `${baseUrl}/images/sightseeing/Agra/Taj_mahal.jpg`, width: 1200, height: 630, alt: 'Tour Guide by Language — Triveni Cabs' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tour Guide by Spoken Language — Multilingual Ministry-Licensed',
    description: 'English, Hindi, French, German, Spanish, Italian, Japanese, Russian, Mandarin, Portuguese',
    images: [`${baseUrl}/images/sightseeing/Agra/Taj_mahal.jpg`],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const LANG_HEROES = {
  English: '/images/sightseeing/Agra/Taj_mahal.jpg',
  Hindi: '/images/sightseeing/Delhi/red_fort.jpg',
  French: '/images/sightseeing/Agra/agra_fort.jpg',
  German: '/images/sightseeing/Jaipur/amber_fort.jpg',
  Spanish: '/images/sightseeing/Jaipur/Hawa_Mahal.jpg',
  Italian: '/images/sightseeing/Agra/Mehtab_Bagh.jpg',
  Japanese: '/images/sightseeing/Delhi/Lotus Temple.jpg',
  Russian: '/images/sightseeing/Delhi/Akshardham_Temple.jpg',
  Mandarin: '/images/sightseeing/Jaipur/city_palace.jpg',
  Portuguese: '/images/sightseeing/Agra/Baby_Taj.jpg',
};

const LANG_FLAG = {
  English: '🇬🇧',
  Hindi: '🇮🇳',
  French: '🇫🇷',
  German: '🇩🇪',
  Spanish: '🇪🇸',
  Italian: '🇮🇹',
  Japanese: '🇯🇵',
  Russian: '🇷🇺',
  Mandarin: '🇨🇳',
  Portuguese: '🇵🇹',
};

export default function ByGuideLanguageHub() {
  const groupB = getToursByGroup('B');
  const groupC = getToursByGroup('C');

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: 'Tours With Guide — by Spoken Language',
        description: 'Ministry-licensed tour guides in 10 spoken languages.',
        inLanguage: 'en-IN',
        breadcrumb: { '@id': `${url}#breadcrumb` },
        speakable: getSpeakableSchema(['.speakable-lead', '.speakable-faq-first']),
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: 'Multilingual Licensed Tour Guides',
        serviceType: 'Tour Guide Service',
        description: 'Ministry-of-Tourism licensed tour guides in 10 spoken languages for Taj Mahal, Delhi, Jaipur and the Golden Triangle.',
        provider: { '@id': `${baseUrl}/#organization` },
        brand: { '@type': 'Brand', name: 'Triveni Cabs' },
        areaServed: ['Delhi', 'Agra', 'Jaipur', 'India'],
        url,
        offers: { '@type': 'Offer', priceCurrency: 'INR', price: '1200' },
        ...getRatingAndReviews('tours-by-guide-language', 'sightseeing'),
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        speakable: getSpeakableSchema(['.speakable-faq-first']),
        mainEntity: LANG_FAQS.map(f => ({
          '@type': 'Question',
          name: f.question,
          acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
      },
      getArticleSchema({
        slug: 'tours-with-guide/by-guide-language',
        headline: 'Hire a Tour Guide by Language — Multilingual Licensed Guides',
        description: 'Hire a Ministry-licensed tour guide who speaks your language: English, Hindi, French, German, Spanish, Italian, Japanese, Russian, Mandarin or Portuguese — with day rates and use cases.',
        image: `${baseUrl}/images/sightseeing/Agra/Taj_mahal.jpg`,
        datePublished: '2026-01-01',
        dateModified: getTodayDate(),
        authorName: 'editorial',
        speakableSelectors: ['.speakable-lead', '.speakable-faq-first'],
      }),
      getHowToSchema({
        name: 'How to Hire a Tour Guide Who Speaks Your Language in India',
        description: 'Book a Ministry-of-Tourism licensed guide fluent in your language in 5 steps, with licence proof shared before the tour begins.',
        totalTime: 'PT5M',
        estimatedCost: { currency: 'INR', value: '1200' },
        steps: [
          { name: 'Pick your language', text: 'Choose from English, Hindi, French, German, Spanish, Italian, Japanese, Russian, Mandarin or Portuguese. Korean, Arabic, Dutch, Polish and Thai are arranged on request.' },
          { name: 'Check the day rate', text: 'Hindi is ₹1,200/day and English ₹1,500/day. European languages run ₹2,500-₹2,800/day and Japanese or Mandarin ₹3,000/day, each covering a full 8-10 hour touring day.' },
          { name: 'Book far enough ahead', text: 'English and Hindi guides are usually available same-day or next-day. Book foreign-language and female guides 24-48 hours ahead, especially in peak season from October to March.' },
          { name: 'Decide on a vehicle', text: 'Take the guide on its own, or bundle an AC vehicle so the guide and car arrive together at one fixed fare.' },
          { name: 'Verify the licence and confirm', text: 'Call +91 7668570551 or WhatsApp us; we share the assigned guide licence number and photo-ID before you confirm.' },
        ],
      }),
      ...getComparisonSchema({
        slug: 'tours-with-guide/by-guide-language',
        title: 'Tour Guide Languages Compared by Day Rate and Best Use',
        description: 'Compare Ministry-licensed tour guide languages in India — English, Hindi, French, German, Spanish, Italian, Japanese, Mandarin, Russian and Portuguese — by day rate and the travellers each suits best.',
        rows: LANG_FEE_ROWS.map(r => ({ feature: r.lang, day: r.day, bestFor: r.useCase })),
        mentions: ['Ministry of Tourism', 'Regional Level Tourist Guide', 'Taj Mahal', 'Golden Triangle', 'multilingual tour guide'],
      }).map(node => ({ ...node, '@context': undefined })),
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
          { '@type': 'ListItem', position: 2, name: 'Tours With Guide', item: `${baseUrl}/tours-with-guide` },
          { '@type': 'ListItem', position: 3, name: 'By Guide Language', item: url },
        ],
      },
      {
        '@type': 'ItemList',
        numberOfItems: groupB.length,
        itemListElement: groupB.map((t, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          url: `${baseUrl}/tours-with-guide/${t.slug}`,
          name: `${t.guideLanguage}-Speaking Tour Guide`,
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
      <main className="min-h-screen bg-[#0a0a14] text-slate-100 selection:bg-amber-300/30 selection:text-amber-100">
        {/* ============= HERO ============= */}
        <section className="relative isolate overflow-hidden border-b border-amber-400/10">
          <div className="absolute inset-0 -z-10">
            <Image src="/images/sightseeing/Agra/Taj_mahal.jpg" alt="" fill priority sizes="100vw" className="object-cover opacity-25" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_right,rgba(20,184,166,0.08),transparent_55%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14]/60 via-[#0a0a14]/85 to-[#0a0a14]" />
            <DotsTexture />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 lg:pt-28 pb-16">
            <nav className="flex flex-wrap items-center gap-2 text-[11px] text-amber-200/60 mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-amber-300 transition">Home</Link>
              <span className="text-amber-300/40">/</span>
              <Link href="/tours-with-guide" className="hover:text-amber-300 transition">Tours With Guide</Link>
              <span className="text-amber-300/40">/</span>
              <span className="text-white/90">By Guide Language</span>
            </nav>

            <div className="grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <MinistryCrest />
                <h1 className="mt-7 font-black leading-[0.95] tracking-tight">
                  <span className="block text-[2.2rem] sm:text-[2.75rem] md:text-[3.5rem] bg-gradient-to-r from-amber-100 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
                    Hire a guide who
                  </span>
                  <span className="block mt-2 font-serif italic font-medium text-[2rem] md:text-[3.25rem] tracking-tight text-white/95">
                    speaks your language.
                  </span>
                </h1>
                <p className="mt-7 max-w-2xl text-base md:text-lg text-slate-300/95 leading-relaxed">
                  Every guide is a Ministry-of-Tourism <span className="text-amber-200 font-semibold">Regional Level Tourist Guide</span> — licensed, photo-ID verified, with at least 5 years on the Agra / Delhi / Jaipur circuit. License proof shared on WhatsApp at booking.
                </p>

                <div className="mt-9 grid grid-cols-2 md:grid-cols-4 gap-y-5 gap-x-6 max-w-2xl">
                  <HeroStat label="Languages" value="10" />
                  <HeroStat label="Min exp." value="5 yrs" />
                  <HeroStat label="Day rate" value="₹1,200+" />
                  <HeroStat label="License" value="Govt." />
                </div>

                <div className="mt-9 flex flex-wrap items-center gap-3">
                  <a href={`tel:+91${PHONE}`} className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-b from-amber-300 to-yellow-500 px-7 py-4 font-extrabold text-[#1a1408] shadow-[0_18px_40px_-12px_rgba(251,191,36,0.6)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a14]">
                    <IconPhone /> Call {PHONE}
                    <IconArrow className="w-4 h-4 opacity-60 group-hover:translate-x-0.5 transition" />
                  </a>
                  <a href={`https://wa.me/91${PHONE}?text=${encodeURIComponent('Hi, I need a tour guide who speaks: ___')}`} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-xl border-2 border-emerald-300/40 bg-emerald-400/5 px-6 py-4 font-extrabold text-emerald-100 hover:bg-emerald-400/15 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a14]">
                    <IconWhatsApp /> Request a language
                  </a>
                </div>
              </div>

              {/* Language flag tiles — visible all breakpoints */}
              <div className="lg:col-span-5 mt-10 lg:mt-0 -mx-4 sm:-mx-6 lg:mx-0">
                {/* Mobile: horizontal scroll */}
                <div className="lg:hidden flex gap-3 overflow-x-auto px-4 sm:px-6 pb-3 snap-x snap-mandatory">
                  {Object.entries(LANG_FLAG).map(([lang, flag]) => (
                    <div
                      key={lang}
                      className="snap-start shrink-0 w-20 h-24 rounded-2xl bg-gradient-to-br from-[#fef9e7] to-[#f4e4b8] flex flex-col items-center justify-center text-center p-2 shadow-[0_18px_50px_-15px_rgba(0,0,0,0.8)] ring-1 ring-black/10"
                    >
                      <span className="text-3xl">{flag}</span>
                      <span className="text-[9px] uppercase tracking-widest text-[#7a6428] font-black mt-1">{lang}</span>
                    </div>
                  ))}
                </div>
                {/* Desktop: rotated fan */}
                <div className="hidden lg:flex flex-wrap gap-3 items-center justify-center">
                  {Object.entries(LANG_FLAG).map(([lang, flag], i) => (
                    <div
                      key={lang}
                      className="w-20 h-24 rounded-2xl bg-gradient-to-br from-[#fef9e7] to-[#f4e4b8] flex flex-col items-center justify-center text-center p-2 shadow-[0_18px_50px_-15px_rgba(0,0,0,0.8)] ring-1 ring-black/10 hover:scale-110 hover:rotate-0 transition duration-300"
                      style={{ transform: `rotate(${i % 2 === 0 ? '-' : ''}${(i % 3) * 2}deg)` }}
                    >
                      <span className="text-3xl">{flag}</span>
                      <span className="text-[9px] uppercase tracking-widest text-[#7a6428] font-black mt-1">{lang}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <ArchDivider />
        </section>

        {/* ============= ANSWER BOX ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <AnswerBox
            theme="guide"
            title="Quick Answer"
            answer="Triveni Cabs deploys Ministry-of-Tourism licensed tour guides in 10 spoken languages: English, Hindi, French, German, Spanish, Italian, Japanese, Russian, Mandarin and Portuguese. Day rates: English/Hindi ₹1,200–₹1,500, European languages ₹2,500–₹2,800, Japanese & Mandarin ₹3,000. License proof shared at confirmation."
            stats={[
              { label: 'Languages', value: '10' },
              { label: 'License', value: 'Govt. of India' },
              { label: 'Min experience', value: '5 yrs' },
              { label: 'Day rate', value: '₹1,200–₹3,000' },
            ]}
            lastReviewed="2026-04-29"
            source="Triveni Cabs licensed-guide partnership data"
            className="shadow-[0_30px_80px_-30px_rgba(251,191,36,0.3)]"
          />
        </section>

        {/* ============= DIRECT-ANSWER LEAD ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
          <AnswerCard question="Can I get a tour guide who speaks my language?">
            <p className="speakable-lead text-base md:text-lg text-slate-200/95 leading-relaxed">
              Yes — Triveni Cabs provides Ministry-of-Tourism licensed tour guides in
              <span className="text-amber-200 font-semibold"> 10 spoken languages</span>: English, Hindi, French,
              German, Spanish, Italian, Japanese, Russian, Mandarin and Portuguese, with Korean, Arabic, Dutch,
              Polish and Thai on request. Day rates run from <span className="text-amber-200 font-semibold">₹1,200/day
              for Hindi and ₹1,500/day for English</span> to ₹3,000/day for Japanese and Mandarin guides. Every guide
              is photo-ID verified with at least 5 years on the Agra, Delhi and Jaipur circuit, and licence proof is
              shared on WhatsApp at confirmation.
            </p>
          </AnswerCard>
        </section>

        {/* ============= LANGUAGE CARDS ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <SectionTitle eyebrow="Ten spoken languages" title="Pick your guide's language" sub="Each card opens a deep page with day rate, sample itinerary and WhatsApp lock-in." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {groupB.map(t => {
              const langKey = t.guideLanguage;
              return (
                <Link
                  key={t.slug}
                  href={`/tours-with-guide/${t.slug}`}
                  className="group relative overflow-hidden rounded-[1.4rem] border border-amber-400/15 bg-slate-900/40 hover:border-amber-300/50 transition shadow-[0_10px_30px_-15px_rgba(0,0,0,0.6)] hover:shadow-[0_20px_60px_-15px_rgba(251,191,36,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a14]"
                >
                  <div className="relative aspect-[16/10]">
                    <Image src={LANG_HEROES[langKey] || t.heroImage} alt={`${langKey} speaking guide`} fill sizes="(max-width: 1024px) 50vw, 33vw" className="object-cover group-hover:scale-[1.06] transition duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a14] via-[#0a0a14]/30 to-transparent" />

                    {/* Flag badge top-left */}
                    <div className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-black/55 backdrop-blur-md border border-white/15 px-3 py-1.5">
                      <span className="text-base leading-none">{LANG_FLAG[langKey]}</span>
                      <span className="font-serif italic text-amber-100 text-xs leading-none">{t.languageNative}</span>
                    </div>

                    {/* Price ribbon top-right */}
                    <div className="absolute top-0 right-0">
                      <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-[#1a1408] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-bl-xl shadow-lg">
                        ₹{t.guideFee.toLocaleString('en-IN')}/day
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-5 right-5">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-amber-300/90 font-bold">Licensed Guide</p>
                      <p className="text-2xl font-black text-white leading-tight">{langKey}-Speaking</p>
                    </div>
                  </div>

                  <div className="px-5 py-4 border-t border-amber-400/10">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-slate-500 font-bold">Popular with</p>
                    <p className="text-sm text-amber-100/90 font-semibold mt-1">{GUIDE_LANGUAGES[langKey.toLowerCase()]?.popularWith}</p>
                    <p className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-amber-300 group-hover:text-amber-200 transition">
                      View deep page <span className="group-hover:translate-x-1 transition">→</span>
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ============= INLINE CTA ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <InlineCTA
            theme="guide"
            headline="Need a guide in a less-common language?"
            sub="We have associate guides in Korean, Arabic, Dutch, Polish and Thai on request. WhatsApp us 12 hours in advance."
            context="tours-with-guide-language-hub"
            waMessage="Hi Triveni Cabs, I need a tour guide who speaks: ___"
            variant="full"
          />
        </section>

        {/* ============= DEEP PAGES BY TOUR ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <SectionTitle eyebrow="Pick a tour, then a language" title="Top tours in your language" sub="Three most-booked itineraries published in every supported language." />
          {['C-taj', 'C-sameday', 'C-gt'].map(cluster => {
            const items = groupC.filter(t => t.cluster === cluster);
            const label = cluster === 'C-taj' ? 'Taj Mahal Tour' : cluster === 'C-sameday' ? 'Same-Day Taj Mahal from Delhi' : 'Golden Triangle Tour';
            const hero = cluster === 'C-taj'
              ? '/images/sightseeing/Agra/Taj_mahal.jpg'
              : cluster === 'C-sameday'
              ? '/images/sightseeing/Agra/agra_fort.jpg'
              : '/images/sightseeing/Golden_Triangle/Golden_triangle_hero_section.jpg';
            return (
              <div key={cluster} className="mt-12">
                <div className="relative overflow-hidden rounded-[1.4rem] border border-amber-400/15 mb-5 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.7)]">
                  <div className="relative aspect-[5/1.2]">
                    <Image src={hero} alt={label} fill sizes="100vw" className="object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a14] via-[#0a0a14]/60 to-transparent" />
                    <div className="absolute inset-y-0 left-0 right-1/3 flex items-center px-6 md:px-10">
                      <div>
                        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-300/90">Available in 10 languages</p>
                        <p className="mt-1 text-2xl md:text-4xl font-black text-white leading-tight">{label}</p>
                        <p className="mt-1.5 font-serif italic text-amber-200/90 text-sm md:text-base">in your language, by a licensed guide</p>
                      </div>
                    </div>
                    <CornerOrnaments />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
                  {items.map(t => {
                    const img = LANG_HEROES[t.guideLanguage] || t.heroImage;
                    return (
                      <Link key={t.slug} href={`/tours-with-guide/${t.slug}`} className="group block rounded-xl border border-amber-400/10 bg-slate-900/50 overflow-hidden hover:border-amber-300/40 transition">
                        <div className="relative aspect-[16/10]">
                          <Image src={img} alt={`${label} with ${t.guideLanguage} guide`} fill sizes="(max-width: 1024px) 50vw, 20vw" className="object-cover group-hover:scale-105 transition duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                          <div className="absolute top-2 left-2 text-base">{LANG_FLAG[t.guideLanguage]}</div>
                          <div className="absolute bottom-2 left-3 right-3">
                            <p className="font-serif italic text-[12px] text-amber-200/95 leading-tight">{t.languageNative}</p>
                            <p className="text-sm font-black text-white truncate">{t.guideLanguage}</p>
                          </div>
                        </div>
                        <div className="px-3 py-2 flex items-center justify-between">
                          <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Bundle</span>
                          <span className="text-[12px] font-black text-amber-200">₹{t.bundledFare.toLocaleString('en-IN')}</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>

        {/* ============= LANGUAGE FEE TABLE ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <SectionTitle eyebrow="Day rates" title="What does a guide cost in each language?" sub="Fixed day rates, confirmed at booking. Covers a full 8–10 hour touring day." />
          <LanguageFeeTable rows={LANG_FEE_ROWS} flags={LANG_FLAG} />
        </section>

        {/* ============= FAQ ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <SectionTitle eyebrow="Good to know" title="Language guides — frequently asked questions" sub="Languages, day rates, licensing, female guides and booking lead time." />
          <FaqAccordion faqs={LANG_FAQS} />
        </section>

        {/* ============= INTERNAL LINKS ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="rounded-[1.4rem] border border-amber-400/15 bg-gradient-to-br from-slate-900/60 via-slate-950 to-slate-900/40 p-7 md:p-9">
            <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-300/80">Keep exploring</p>
            <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                { href: '/tours-with-guide', label: 'All Tours With Guide' },
                { href: '/tours-with-guide/by-vehicle', label: 'Browse by Vehicle' },
                { href: '/tour-guide', label: 'Tour Guide Services Hub' },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="group flex items-center justify-between gap-2 rounded-xl border border-amber-400/15 bg-slate-900/50 px-4 py-3.5 hover:border-amber-300/50 transition">
                  <span className="text-sm font-bold text-amber-100">{l.label}</span>
                  <span className="text-amber-300 group-hover:translate-x-1 transition">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ============= REASSURANCE BAND ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
          <ReassuranceBand />
        </section>

        {/* ============= FINAL CTA ============= */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 pb-24">
          <InlineCTA
            theme="guide"
            headline="Lock in your language guide today"
            sub="License proof on WhatsApp at confirmation · Day rate fixed at booking · Cancellation up to 48 hrs · No surcharge"
            context="tours-with-guide-language-final"
            waMessage="Hi Triveni Cabs, I want to book a tour guide. Language preference: ___"
            variant="banner"
          />
        </section>
      </main>
    </>
  );
}

// ===== PRESENTATIONAL =====

// Elegant featured-answer card with a gold left border + arch accent.
function AnswerCard({ question, children }) {
  return (
    <div className="relative overflow-hidden rounded-[1.4rem] border border-amber-400/20 bg-gradient-to-br from-[#1a1408]/55 via-slate-950 to-slate-900/40 p-7 md:p-9 pl-8 md:pl-11 shadow-[0_30px_80px_-30px_rgba(251,191,36,0.25)]">
      <span aria-hidden className="absolute inset-y-5 left-0 w-1 rounded-full bg-gradient-to-b from-amber-300 via-yellow-500 to-amber-300" />
      <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-amber-400/[0.08] blur-3xl" aria-hidden />
      <p className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.3em] uppercase text-amber-300/80 mb-3">
        <span className="w-6 h-6 rounded-full bg-amber-400/15 border border-amber-400/35 flex items-center justify-center">
          <Sparkles className="w-3 h-3 text-amber-300" />
        </span>
        Direct answer
      </p>
      <h2 className="text-2xl md:text-3xl font-black tracking-tight text-white max-w-3xl">{question}</h2>
      <div className="mt-4 max-w-3xl">{children}</div>
    </div>
  );
}

// Dark-glass FAQ accordions with smooth chevron rotation and gold accent on open.
function FaqAccordion({ faqs }) {
  return (
    <div className="mt-10 grid md:grid-cols-2 gap-4">
      {faqs.map((f, i) => (
        <details key={i} className="group rounded-2xl border border-amber-400/12 bg-slate-900/40 open:border-amber-300/40 open:bg-slate-900/60 hover:border-amber-300/30 transition">
          <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 min-h-[44px] focus-visible:outline-none focus-visible:bg-amber-400/5 rounded-2xl">
            <span className="text-base md:text-lg font-black text-amber-100 leading-snug">{f.question}</span>
            <span aria-hidden className="shrink-0 w-8 h-8 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 flex items-center justify-center group-open:rotate-180 group-open:bg-amber-400/20 transition-transform duration-300">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" /></svg>
            </span>
          </summary>
          <p className={`px-6 pb-6 text-sm text-slate-300/90 leading-relaxed ${i === 0 ? 'speakable-faq-first' : ''}`}>{f.answer}</p>
        </details>
      ))}
    </div>
  );
}

// Language day-rate table — desktop gold-trimmed (alt-row tint, English highlit as most-asked);
// mobile stacked glass cards. Flag + Globe/IndianRupee icons aid scannability.
function LanguageFeeTable({ rows, flags }) {
  const isPopular = (r) => r.lang === 'English';
  return (
    <div className="mt-10">
      {/* Desktop / tablet */}
      <div className="hidden sm:block overflow-hidden rounded-[1.4rem] border border-amber-400/15 bg-gradient-to-br from-slate-900/60 via-slate-950 to-slate-900/40">
        <table className="w-full text-left border-collapse text-sm">
          <caption className="sr-only">Tour guide languages compared by fixed day rate and best traveller use case</caption>
          <thead>
            <tr className="text-[10px] uppercase tracking-[0.18em] text-amber-300 font-bold border-b border-amber-400/25 bg-amber-400/[0.04]">
              <th scope="col" className="px-5 py-4"><span className="inline-flex items-center gap-1.5"><Globe className="w-3.5 h-3.5" /> Language</span></th>
              <th scope="col" className="px-5 py-4"><span className="inline-flex items-center gap-1.5"><IndianRupee className="w-3.5 h-3.5" /> Day rate</span></th>
              <th scope="col" className="px-5 py-4">Best for</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={r.lang} className={`border-b border-amber-400/10 last:border-0 transition ${isPopular(r) ? 'bg-amber-400/[0.08]' : i % 2 === 1 ? 'bg-white/[0.015] hover:bg-amber-400/[0.05]' : 'hover:bg-amber-400/[0.05]'}`}>
                <th scope="row" className="px-5 py-4 font-black text-white">
                  <span className="flex items-center gap-2">
                    {flags?.[r.lang] && <span className="text-base leading-none">{flags[r.lang]}</span>}
                    {r.lang}
                    {isPopular(r) && (
                      <span className="inline-flex items-center rounded-full bg-emerald-400/15 border border-emerald-300/40 text-emerald-200 text-[9px] uppercase tracking-widest font-black px-2 py-0.5">Most asked</span>
                    )}
                  </span>
                </th>
                <td className="px-5 py-4 font-extrabold text-amber-200">{r.day}</td>
                <td className="px-5 py-4 text-slate-300/90">{r.useCase}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Mobile stacked cards */}
      <div className="sm:hidden space-y-3">
        {rows.map((r) => (
          <div key={r.lang} className={`rounded-2xl border bg-white/5 backdrop-blur-xl p-5 ${isPopular(r) ? 'border-emerald-300/40 bg-emerald-400/[0.06]' : 'border-white/10'}`}>
            <div className="flex items-start justify-between gap-3">
              <p className="font-black text-white flex items-center gap-2 flex-wrap">
                {flags?.[r.lang] && <span className="text-base leading-none">{flags[r.lang]}</span>}
                {r.lang}
                {isPopular(r) && (
                  <span className="inline-flex items-center rounded-full bg-emerald-400/15 border border-emerald-300/40 text-emerald-200 text-[8px] uppercase tracking-widest font-black px-1.5 py-0.5">Popular</span>
                )}
              </p>
              <p className="font-black text-amber-200 shrink-0">{r.day}</p>
            </div>
            <p className="mt-2 text-xs text-slate-400 leading-relaxed">{r.useCase}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ReassuranceBand() {
  const items = [
    { title: 'GST registered',    sub: 'Compliant invoice',    path: <path strokeLinecap="round" strokeLinejoin="round" d="M3.85 8.62a4 4 0 014.78-4.78 4 4 0 016.74 0 4 4 0 014.78 4.78 4 4 0 010 6.74 4 4 0 01-4.78 4.78 4 4 0 01-6.74 0 4 4 0 01-4.78-4.78 4 4 0 010-6.74zM9 12l2 2 4-4" /> },
    { title: '24-hour cancel',    sub: 'Full refund window',   path: <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" /> },
    { title: 'License proof',     sub: 'Shared on WhatsApp',   path: <path strokeLinecap="round" strokeLinejoin="round" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M9 15l2 2 4-4" /> },
    { title: '4-min reply SLA',   sub: 'Avg. response time',   path: <path strokeLinecap="round" strokeLinejoin="round" d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /> },
  ];
  return (
    <div className="relative overflow-hidden rounded-[1.6rem] border border-amber-400/15 bg-gradient-to-br from-[#1a1408]/60 via-slate-950 to-slate-900/40 p-6 sm:p-8">
      <div className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-amber-400/[0.08] blur-3xl" />
      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-300/80 text-center mb-5">Why book Triveni</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-6">
        {items.map((it, i) => (
          <div key={i} className="flex items-start gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400/20 to-amber-400/5 border border-amber-400/30 flex items-center justify-center text-amber-300 shrink-0">
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>{it.path}</svg>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-black text-amber-100 leading-tight">{it.title}</p>
              <p className="text-[11px] text-slate-400 mt-0.5">{it.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function IconPhone({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.37 1.9.72 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0122 16.92z" />
    </svg>
  );
}
function IconWhatsApp({ className = 'w-5 h-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.5 14.4c-.3-.2-1.8-.9-2-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7 0a8 8 0 01-2.4-1.5 8.8 8.8 0 01-1.7-2.1c-.2-.3 0-.5.1-.6l.5-.5.3-.4.1-.4-.1-.4-.7-1.6c-.2-.4-.4-.3-.5-.3H7.9a1 1 0 00-.7.3 3 3 0 00-1 2.3c0 1.3 1 2.6 1.1 2.8s2 3 4.7 4.2l1.6.6 1.5.1c.5 0 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2zM12 2a10 10 0 00-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2z" />
    </svg>
  );
}
function IconArrow({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
    </svg>
  );
}

function HeroStat({ label, value }) {
  return (
    <div className="border-l border-amber-400/25 pl-4">
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400">{label}</p>
      <p className="mt-1 font-black text-2xl md:text-3xl bg-gradient-to-b from-amber-100 to-amber-400 bg-clip-text text-transparent leading-none">{value}</p>
    </div>
  );
}

function MinistryCrest() {
  return (
    <div className="inline-flex items-stretch rounded-full border border-amber-300/35 bg-gradient-to-r from-amber-500/[0.12] via-amber-400/[0.06] to-transparent overflow-hidden">
      <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-amber-300 to-yellow-500 text-[#1a1408]">
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
          <path d="M12 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.78L12 14.77 6.8 17.5l.99-5.78L3.58 7.62l5.82-.85L12 1.5z" />
        </svg>
      </div>
      <div className="px-4 py-1.5 flex items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.25em] text-amber-200/70 font-bold">Multilingual</span>
        <span className="text-xs font-extrabold text-amber-100">Ministry-Licensed Guides</span>
      </div>
    </div>
  );
}

function SectionTitle({ eyebrow, title, sub }) {
  return (
    <div className="max-w-3xl">
      <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-300/80">{eyebrow}</p>
      <h2 className="mt-3 text-3xl md:text-5xl font-black tracking-tight leading-[1.02]">
        <span className="bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {sub && (
        <p className="mt-3 font-serif italic text-slate-400 text-base md:text-lg leading-relaxed">
          {sub}
        </p>
      )}
    </div>
  );
}

function DotsTexture() {
  return (
    <div
      className="absolute inset-0 opacity-[0.04]"
      style={{
        backgroundImage: 'radial-gradient(rgba(251,191,36,0.9) 1px, transparent 1px)',
        backgroundSize: '22px 22px',
      }}
    />
  );
}

function ArchDivider() {
  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12" aria-hidden>
      <div className="flex items-center justify-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-400/30 to-amber-400/30" />
        <svg viewBox="0 0 80 32" className="w-20 h-8 text-amber-400/60" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden>
          <path d="M2 30 Q 2 4 40 4 Q 78 4 78 30" />
          <path d="M10 30 Q 10 12 40 12 Q 70 12 70 30" />
          <circle cx="40" cy="6" r="1.6" fill="currentColor" />
        </svg>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-amber-400/30 to-amber-400/30" />
      </div>
    </div>
  );
}

function CornerOrnaments() {
  return (
    <>
      <svg className="absolute top-3 left-3 w-8 h-8 text-amber-300/40" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden>
        <path d="M2 14 V 2 H 14" />
        <path d="M2 8 H 8 V 2" />
      </svg>
      <svg className="absolute bottom-3 right-3 w-8 h-8 text-amber-300/40" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden>
        <path d="M30 18 V 30 H 18" />
        <path d="M30 24 H 24 V 30" />
      </svg>
    </>
  );
}
