import Link from 'next/link';
import { railwayStations, getAllStationSlugs } from '@/utilis/railwayStationData';

export const revalidate = false;

export const metadata = {
  title: 'Railway Station Taxi Service | 27 Stations | 24/7 Cab Booking | Triveni Cabs',
  description: 'Book reliable taxi at 27+ railway stations across India. Fixed fares, 24/7 service, meet at platform exit. Agra Cantt, New Delhi, Jaipur, Varanasi, Lucknow, Haridwar & more. Call 7668570551.',
  keywords: 'railway station taxi, station cab booking, train station taxi service, railway station cab, station pickup taxi, india railway station taxi, station to hotel taxi, prepaid taxi railway station, 24/7 station taxi, railway station cab service near me',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/railway-station-taxi' },
  openGraph: {
    title: 'Railway Station Taxi Service | 27+ Stations | Triveni Cabs',
    description: 'Reliable 24/7 taxi service at 27+ major railway stations. Fixed fares, AC vehicles, meet at platform exit.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/railway-station-taxi',
    siteName: 'Triveni Cabs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Railway Station Taxi | 27+ Stations | Triveni Cabs',
    description: '24/7 taxi at major railway stations across India. Fixed fares, meet at platform.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
};

// Group stations by region for better UX
const regionGroups = {
  "Delhi NCR": ["new-delhi", "old-delhi", "nizamuddin", "anand-vihar"],
  "Uttar Pradesh": ["agra-cantt", "agra-fort", "lucknow", "varanasi", "mathura", "ayodhya", "prayagraj", "kanpur"],
  "Rajasthan": ["jaipur", "jodhpur", "udaipur", "ajmer"],
  "Uttarakhand": ["haridwar", "dehradun", "rishikesh", "kathgodam"],
  "Punjab & Haryana": ["amritsar", "chandigarh", "ambala", "pathankot"],
  "Himachal & J&K": ["kalka", "jammu"],
  "Madhya Pradesh": ["gwalior"],
};

export default function RailwayStationTaxiHub() {
  const allSlugs = getAllStationSlugs();
  const totalStations = allSlugs.length;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Railway Station Taxi", "item": "https://www.trivenicabs.in/railway-station-taxi" },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Railway Station Taxi Service",
    "name": "Triveni Cabs Railway Station Taxi Service",
    "description": `Reliable 24/7 taxi service at ${totalStations}+ major railway stations across India. Fixed fares, AC vehicles, professional drivers.`,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
    },
    "areaServed": {
      "@type": "Country",
      "name": "India",
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "3000",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Railway Station Taxi Services",
    "numberOfItems": totalStations,
    "itemListElement": allSlugs.map((stationSlug, i) => {
      const s = railwayStations[stationSlug];
      return s ? {
        "@type": "ListItem",
        "position": i + 1,
        "name": `${s.name} Taxi Service`,
        "url": `https://www.trivenicabs.in/railway-station-taxi/${stationSlug}`
      } : null;
    }).filter(Boolean)
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "How do I book a taxi at a railway station?", "acceptedAnswer": { "@type": "Answer", "text": "Call Triveni Cabs at 7668570551 or WhatsApp with your train number and destination. Our driver will meet you at the platform exit with a name board. Pre-booking ensures zero waiting time." } },
      { "@type": "Question", "name": "Are taxis available 24/7 at railway stations?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Triveni Cabs operates 24/7 at all 27+ railway stations. Whether your train arrives at midnight or early morning, our drivers are available with no extra night charges." } },
      { "@type": "Question", "name": "Do you track train delays?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, we actively track your train status. If your train is delayed, we adjust the driver dispatch time so they are ready exactly when you arrive. No waiting, no wasted time." } },
      { "@type": "Question", "name": "Which railway stations does Triveni Cabs serve?", "acceptedAnswer": { "@type": "Answer", "text": "We serve 27+ major railway stations including New Delhi, Agra Cantt, Jaipur Junction, Varanasi Junction, Lucknow, Haridwar, Amritsar, Chandigarh, and more across North India." } }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-slate-950">

        {/* === HERO === */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950/80 to-violet-950" />

          {/* Track Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23a78bfa\' stroke-width=\'0.5\'%3E%3Cline x1=\'20\' y1=\'0\' x2=\'20\' y2=\'60\'/%3E%3Cline x1=\'40\' y1=\'0\' x2=\'40\' y2=\'60\'/%3E%3Cline x1=\'10\' y1=\'10\' x2=\'50\' y2=\'10\'/%3E%3Cline x1=\'10\' y1=\'30\' x2=\'50\' y2=\'30\'/%3E%3Cline x1=\'10\' y1=\'50\' x2=\'50\' y2=\'50\'/%3E%3C/g%3E%3C/svg%3E")' }} />

          {/* Glows */}
          <div className="absolute top-[20%] left-[25%] w-[500px] h-[500px] bg-violet-500/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-[15%] right-[20%] w-[400px] h-[400px] bg-indigo-500/6 rounded-full blur-[120px]" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 w-full text-center py-20">
            <div className="inline-flex items-center gap-2 bg-violet-500/10 backdrop-blur-sm border border-violet-400/20 rounded-lg px-4 py-2 mb-6">
              <svg className="w-4 h-4 text-violet-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>
              <span className="text-violet-200 text-sm font-mono tracking-wider">{totalStations} STATIONS COVERED</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[0.95]">
              Railway Station
              <span className="block text-transparent bg-gradient-to-r from-violet-300 via-purple-200 to-indigo-300 bg-clip-text">Taxi Service</span>
            </h1>

            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Reliable 24/7 taxi service at {totalStations} major railway stations across India. Fixed fares, AC vehicles, meet at platform exit. No surge pricing, no hidden charges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-violet-600 to-indigo-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl shadow-violet-500/20 hover:shadow-violet-500/40 hover:scale-105 transition-all">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I need a railway station taxi" className="inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-xl text-white px-8 py-4 rounded-xl font-bold border border-violet-400/20 hover:bg-white/10 transition-all">
                WhatsApp Booking
              </Link>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" className="w-full h-14">
              <path d="M0 60 L0 30 L1440 0 L1440 60Z" fill="#020617" />
            </svg>
          </div>
        </section>

        {/* === STATS BAR === */}
        <section className="py-10 px-4 border-b border-white/5">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: `${totalStations}+`, label: "Railway Stations" },
              { value: "24/7", label: "Service Available" },
              { value: "Fixed", label: "Fare Pricing" },
              { value: "4.9", label: "Customer Rating" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-3xl font-black text-transparent bg-gradient-to-r from-violet-300 to-indigo-300 bg-clip-text">{stat.value}</div>
                <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* === STATION LISTINGS BY REGION === */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-violet-500/10 text-violet-300 text-xs font-bold px-4 py-1.5 rounded-full mb-4 border border-violet-500/20 tracking-wider uppercase">
                All Stations
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Choose Your <span className="text-transparent bg-gradient-to-r from-violet-300 to-indigo-300 bg-clip-text">Station</span>
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Select a railway station to view taxi fares, destinations, and book your ride.</p>
            </div>

            {Object.entries(regionGroups).map(([region, slugs]) => (
              <div key={region} className="mb-12">
                <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
                  <span className="w-8 h-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded"></span>
                  {region}
                  <span className="text-violet-400 text-sm font-normal">({slugs.length} stations)</span>
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {slugs.map((stationSlug) => {
                    const s = railwayStations[stationSlug];
                    if (!s) return null;
                    const minFare = s.destinations.reduce((min, d) => Math.min(min, d.sedanFare), Infinity);
                    return (
                      <Link
                        key={stationSlug}
                        href={`/railway-station-taxi/${stationSlug}`}
                        className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-5 hover:border-violet-500/30 transition-all group"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="bg-violet-500/10 text-violet-300 border border-violet-500/20 rounded-md px-2 py-0.5 text-xs font-mono font-bold">{s.stationCode}</span>
                          <svg className="w-4 h-4 text-slate-600 group-hover:text-violet-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </div>
                        <h4 className="text-white font-bold text-sm mb-1 group-hover:text-violet-300 transition-colors">{s.name}</h4>
                        <p className="text-slate-500 text-xs mb-3">{s.platforms} Platforms</p>
                        <div className="flex items-center justify-between pt-3 border-t border-white/5">
                          <div className="text-slate-500 text-xs">Taxi from</div>
                          <div className="text-violet-300 font-bold text-sm">{'\u20B9'}{minFare.toLocaleString()}</div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* === WHY CHOOSE US === */}
        <section className="py-20 px-4 border-t border-white/5">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Why Choose <span className="text-transparent bg-gradient-to-r from-violet-300 to-indigo-300 bg-clip-text">Triveni Cabs</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { title: "Meet at Platform Exit", desc: "Our driver waits right at the station exit with your name board. No confusion, no searching." },
                { title: "Train Tracking", desc: "We track your train status. If delayed, the driver adjusts accordingly. Always there when you arrive." },
                { title: "Fixed Fare Guarantee", desc: "Price agreed before booking. No meters, no surge pricing, no hidden charges. What you see is what you pay." },
                { title: "24/7 Service", desc: "Train arriving at 3 AM? No problem. Our service runs round the clock, every day of the year." },
                { title: "AC Clean Vehicles", desc: "Well-maintained, sanitized AC vehicles. Choose from Sedan, SUV, or Tempo Traveller." },
                { title: "Verified Professional Drivers", desc: "Background-verified drivers who know local routes. Courteous, helpful, and experienced." },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-violet-500/30 transition-all">
                  <h3 className="text-white font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === FAQ Section === */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Frequently Asked <span className="text-transparent bg-gradient-to-r from-violet-300 to-indigo-300 bg-clip-text">Questions</span>
              </h2>
              <p className="text-slate-400">Common queries about railway station taxi services</p>
            </div>
            <div className="space-y-4">
              {faqSchema.mainEntity.map((faq, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6 hover:border-violet-500/30 transition-all">
                  <h3 className="font-bold text-lg mb-3 text-violet-300">{faq.name}</h3>
                  <p className="text-slate-400 leading-relaxed">{faq.acceptedAnswer.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* === Cross-Service Links === */}
        <section className="py-20 px-4 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Explore More <span className="text-transparent bg-gradient-to-r from-violet-300 to-indigo-300 bg-clip-text">Travel Services</span>
              </h2>
              <p className="text-slate-400">Other ways to travel across India with Triveni Cabs</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { title: 'Bus Stand Taxi', href: '/bus-stand-taxi', desc: 'Taxi at 13+ bus terminals' },
                { title: 'One-Way Cabs', href: '/one-way-cab', desc: 'Affordable outstation rides' },
                { title: 'Sightseeing Tours', href: '/sightseeing', desc: 'Explore tourist attractions' },
                { title: 'Tour Packages', href: '/tour-package', desc: 'Multi-day curated tours' },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="group bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-violet-500/30 p-5 transition-all group"
                >
                  <h3 className="text-white font-bold group-hover:text-violet-300 transition-colors mb-1">{link.title}</h3>
                  <p className="text-sm text-slate-400">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* === CTA === */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-indigo-600 to-purple-700" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' stroke=\'%23fff\' stroke-width=\'0.5\'%3E%3Cline x1=\'20\' y1=\'0\' x2=\'20\' y2=\'60\'/%3E%3Cline x1=\'40\' y1=\'0\' x2=\'40\' y2=\'60\'/%3E%3Cline x1=\'10\' y1=\'10\' x2=\'50\' y2=\'10\'/%3E%3Cline x1=\'10\' y1=\'30\' x2=\'50\' y2=\'30\'/%3E%3Cline x1=\'10\' y1=\'50\' x2=\'50\' y2=\'50\'/%3E%3C/g%3E%3C/svg%3E")' }} />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Arriving by Train?
            </h2>
            <p className="text-2xl text-violet-100 font-semibold mb-3">Your taxi is waiting at the station.</p>
            <p className="text-violet-100/70 text-lg mb-8 max-w-xl mx-auto">{totalStations} stations covered. Fixed fares. 24/7 service. AC vehicles. Meet at platform exit.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-violet-600 px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl hover:bg-violet-50 transition-all">
                Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=I need a railway station taxi" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-xl text-white px-10 py-5 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/20 transition-all">
                WhatsApp Booking
              </Link>
            </div>
          </div>
        </section>

        {/* === BREADCRUMB === */}
        <nav className="py-4 px-4 border-t border-white/5">
          <div className="max-w-6xl mx-auto flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-violet-400 transition-colors">Home</Link>
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            <span className="text-slate-300 font-medium">Railway Station Taxi</span>
          </div>
        </nav>
      </div>
    </>
  );
}
