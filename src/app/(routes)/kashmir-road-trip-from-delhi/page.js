import Link from 'next/link';
import { Phone, MapPin, Clock, Star, ChevronRight, Shield, Users, Calendar } from '@/components/ui/icons';

export const metadata = {
  title: 'Delhi to Kashmir Road Trip Plan 2026 | 7-8 Day Itinerary | Triveni Cabs',
  description: 'Delhi to Kashmir road trip plan covering Srinagar, Gulmarg, Pahalgam & Sonmarg. 7-8 day itinerary, road conditions, permits. Sedan ₹45,000, SUV ₹65,000. Call 7668570551.',
  keywords: 'delhi to kashmir road trip plan, kashmir road trip from delhi, srinagar gulmarg pahalgam tour by car, kashmir by car from delhi, kashmir tour itinerary',
  authors: [{ name: 'Triveni Cabs' }],
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/kashmir-road-trip-from-delhi' },
  openGraph: { title: 'Delhi to Kashmir Road Trip 2026 | Complete Itinerary', description: 'Srinagar, Gulmarg, Pahalgam, Sonmarg — complete 7-8 day road trip plan.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/kashmir-road-trip-from-delhi', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Delhi to Kashmir Road Trip 2026' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const itinerary = [
  { day: 1, title: 'Delhi to Jammu', distance: '580 km', duration: '9-10 hrs', route: 'Delhi → Ludhiana → Pathankot → Jammu', activities: ['Early start (4-5 AM) from Delhi', 'Breakfast at Murthal or Karnal', 'Drive via NH44 through Punjab', 'Reach Jammu by evening', 'Optional: Visit Vaishno Devi Bhawan from Katra (separate day needed)'], stay: 'Jammu city or Katra', icon: '1' },
  { day: 2, title: 'Jammu to Srinagar', distance: '300 km', duration: '8-9 hrs', route: 'Jammu → Udhampur → Ramban → Banihal Tunnel → Srinagar', activities: ['Start early (6 AM) — mountain road ahead', 'Drive through Patnitop viewpoint', 'Pass through Jawahar Tunnel/Banihal Tunnel', 'Enter Kashmir Valley — stunning views await', 'Arrive Srinagar, check into houseboat on Dal Lake', 'Evening shikara ride on Dal Lake'], stay: 'Houseboat on Dal Lake or hotel in Dalgate', icon: '2' },
  { day: 3, title: 'Srinagar Local Sightseeing', distance: '40 km', duration: 'Full day', route: 'Srinagar city', activities: ['Mughal Gardens — Nishat Bagh, Shalimar Bagh, Chashme Shahi', 'Shankaracharya Temple (panoramic city views)', 'Floating market on Dal Lake', 'Hazratbal Shrine', 'Evening shikara ride and Kashmiri wazwan dinner'], stay: 'Srinagar houseboat', icon: '3' },
  { day: 4, title: 'Srinagar to Gulmarg', distance: '50 km', duration: '1.5 hrs', route: 'Srinagar → Tangmarg → Gulmarg', activities: ['Drive to Gulmarg — "Meadow of Flowers"', 'Gondola ride (Phase 1 & 2) — Asia\'s highest cable car', 'Pony ride or walk through the meadows', 'Golf at world\'s highest green golf course', 'Snow activities (in season): skiing, snowboarding', 'Return to Srinagar or stay in Gulmarg'], stay: 'Gulmarg or return to Srinagar', icon: '4' },
  { day: 5, title: 'Srinagar to Pahalgam', distance: '90 km', duration: '2.5 hrs', route: 'Srinagar → Anantnag → Pahalgam', activities: ['Drive along Lidder River valley', 'Stop at Saffron fields (Pampore)', 'Aru Valley excursion (11 km from Pahalgam)', 'Betaab Valley (Bollywood filming location)', 'Pony ride to Baisaran meadow', 'Lidder River rafting (seasonal)'], stay: 'Pahalgam riverside hotel', icon: '5' },
  { day: 6, title: 'Pahalgam to Srinagar via Sonmarg', distance: '200 km', duration: '6 hrs', route: 'Pahalgam → Srinagar → Sonmarg → Srinagar', activities: ['Drive to Sonmarg via Srinagar (93 km from Srinagar)', 'Sonmarg — "Meadow of Gold" at 2,800m', 'Thajiwas Glacier trek (beginner-friendly, 3 km)', 'Pony ride to Baltal', 'Return to Srinagar for final night'], stay: 'Srinagar', icon: '6' },
  { day: 7, title: 'Srinagar to Jammu', distance: '300 km', duration: '8-9 hrs', route: 'Srinagar → Banihal → Ramban → Jammu', activities: ['Last-minute shopping at Lal Chowk', 'Buy Kashmiri shawls, saffron, dry fruits, walnut wood crafts', 'Depart for Jammu by 7 AM', 'Scenic drive back through the mountains', 'Reach Jammu by evening'], stay: 'Jammu', icon: '7' },
  { day: 8, title: 'Jammu to Delhi', distance: '580 km', duration: '9-10 hrs', route: 'Jammu → Pathankot → Ludhiana → Delhi', activities: ['Depart early (5-6 AM)', 'Highway drive back to Delhi', 'Lunch stop at Amritsar (optional Golden Temple visit adds 2-3 hrs)', 'Arrive Delhi by late evening (7-8 PM)'], stay: 'Arrive Delhi', icon: '8' },
];

const faqData = [
  { question: 'Is it safe to drive from Delhi to Kashmir?', answer: 'Yes, the Delhi-Jammu route (NH44) is a well-maintained national highway. The Jammu-Srinagar highway has some mountain stretches but our experienced drivers handle it daily. We monitor road conditions and security advisories before every trip.' },
  { question: 'What permits are needed for Kashmir?', answer: 'Indian citizens do not need any special permits for Kashmir. Foreign nationals need an Inner Line Permit for some areas beyond Srinagar. We assist with all documentation. Keep a valid ID (Aadhar/Passport) with you at all times.' },
  { question: 'What is the total cost of a Delhi to Kashmir road trip?', answer: 'Sedan costs approximately ₹45,000, SUV (Innova) costs ₹65,000 for 8 days. This covers vehicle, fuel, driver allowance, tolls, and parking. Houseboat stays cost ₹3,000-8,000/night, hotels ₹1,500-5,000/night.' },
  { question: 'What is the best time to visit Kashmir by car?', answer: 'April-June for tulip gardens and pleasant weather. July-August for Amarnath Yatra season. September-October for autumn colors (Chinar trees). December-February for snow lovers. Avoid November (off-season) and March (unpredictable weather).' },
  { question: 'Can I drive my own car to Kashmir?', answer: 'While you can, we strongly recommend hiring a car with driver. Mountain roads require experienced drivers, you can relax and enjoy the views, and our drivers know the Kashmir routes, road conditions, and best local stops.' },
  { question: 'Is the Jammu-Srinagar highway open year-round?', answer: 'The highway occasionally closes for a few hours due to landslides (monsoon) or snow (winter). The new Banihal Tunnel has improved reliability significantly. We always have contingency plans and monitor conditions in real-time.' },
];

const importantInfo = [
  { title: 'Road Conditions', content: 'Delhi-Jammu is 4-lane highway (excellent). Jammu-Srinagar has stretches of mountain road with some rough patches. The new Banihal Tunnel has cut travel time. Our SUVs are recommended for the Jammu-Srinagar stretch.' },
  { title: 'Permits & Documents', content: 'Indian citizens need valid ID (Aadhar preferred). Foreign nationals require an Inner Line Permit for areas beyond Srinagar. Vehicle registration papers are checked at multiple points. We handle all documentation.' },
  { title: 'What to Pack', content: 'Warm clothing (even in summer, nights are cold). Rain gear, comfortable shoes, sunscreen, and medicines for altitude. Power bank essential as charging can be limited in some areas.' },
  { title: 'Safety & Security', content: 'Kashmir is safe for tourists. Army checkpoints are routine — cooperate and carry ID. Our drivers know the local protocols. We provide 24/7 support and monitor security advisories daily.' },
];

export default function KashmirRoadTripPage() {
  const tripSchema = {
    "@context": "https://schema.org", "@type": "TouristTrip",
    "name": "Delhi to Kashmir Road Trip",
    "description": "7-8 day road trip from Delhi to Kashmir covering Srinagar, Gulmarg, Pahalgam, and Sonmarg",
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
    "offers": { "@type": "AggregateOffer", "lowPrice": "45000", "highPrice": "90000", "priceCurrency": "INR" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Kashmir Road Trip from Delhi", "item": "https://www.trivenicabs.in/kashmir-road-trip-from-delhi" }
    ]
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-blue-950 text-white">
        {/* Hero - Icy Paradise with Floating Ice Crystals */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-950 to-sky-950" />
          {/* Snowflake/crystal pattern */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='40' y1='10' x2='40' y2='70' stroke='%2393c5fd' stroke-width='0.5'/%3E%3Cline x1='10' y1='40' x2='70' y2='40' stroke='%2393c5fd' stroke-width='0.5'/%3E%3Cline x1='19' y1='19' x2='61' y2='61' stroke='%2393c5fd' stroke-width='0.3'/%3E%3Cline x1='61' y1='19' x2='19' y2='61' stroke='%2393c5fd' stroke-width='0.3'/%3E%3Ccircle cx='40' cy='40' r='8' fill='none' stroke='%2393c5fd' stroke-width='0.3'/%3E%3C/svg%3E")` }} />
          {/* Icy orbs */}
          <div className="absolute top-10 left-1/4 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[160px]" />
          <div className="absolute bottom-0 right-10 w-[500px] h-[400px] bg-indigo-400/8 rounded-full blur-[140px]" />
          <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-sky-300/8 rounded-full blur-[100px]" />

          <div className="max-w-7xl mx-auto px-4 relative z-10 py-20 w-full">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-3 bg-blue-500/10 border border-blue-400/20 backdrop-blur-sm px-6 py-3 rounded-full mb-10">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                <span className="text-blue-300 text-sm font-medium tracking-widest uppercase">8 Days | 2,200 km | Paradise on Earth</span>
              </div>

              <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.85]">
                <span className="text-white">Delhi to</span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-blue-300 via-sky-200 to-indigo-300 bg-clip-text">Kashmir</span>
                <br />
                <span className="text-blue-500/40 text-3xl md:text-4xl font-light">Road Trip Plan 2026</span>
              </h1>

              <p className="text-blue-200/40 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                Dal Lake houseboats, Gulmarg gondola rides, Pahalgam meadows, Sonmarg glaciers. Experience Paradise on Earth by road.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {[
                  { label: 'Sedan', price: '₹45,000' },
                  { label: 'SUV', price: '₹65,000' },
                ].map((p, i) => (
                  <div key={i} className="bg-blue-500/10 border border-blue-400/15 rounded-xl px-6 py-3 backdrop-blur-sm">
                    <span className="text-blue-400/50 text-xs uppercase tracking-wider">{p.label}</span>
                    <div className="text-blue-200 font-bold text-xl">{p.price}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:7668570551" className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white font-bold px-10 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-blue-500/20">
                  <Phone className="w-5 h-5" /> Call 7668570551
                </a>
                <a href="https://wa.me/917668570551?text=Hi%20I%20want%20to%20book%20Delhi%20to%20Kashmir%20road%20trip" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 px-10 py-4 rounded-2xl transition-all duration-300 font-semibold">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary - Horizontal numbered cards */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-950 to-indigo-950" />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Your Journey</span>
              <h2 className="text-4xl md:text-5xl font-black mt-3">Day-by-Day Kashmir Plan</h2>
            </div>

            <div className="space-y-5">
              {itinerary.map((day) => (
                <div key={day.day} className="group bg-gradient-to-r from-blue-900/25 to-indigo-900/15 backdrop-blur-sm border border-blue-700/15 rounded-3xl overflow-hidden hover:border-blue-400/25 transition-all duration-500">
                  <div className="flex">
                    {/* Day number sidebar */}
                    <div className="w-20 md:w-24 bg-gradient-to-b from-blue-600/20 to-indigo-600/20 flex items-center justify-center flex-shrink-0 border-r border-blue-700/15">
                      <div className="text-center">
                        <div className="text-blue-400/40 text-[10px] uppercase tracking-widest">Day</div>
                        <div className="text-3xl font-black text-blue-300">{day.day}</div>
                      </div>
                    </div>
                    <div className="flex-1 p-5 md:p-6">
                      <div className="flex items-center justify-between flex-wrap gap-2 mb-3">
                        <h3 className="text-lg font-bold text-white">{day.title}</h3>
                        <div className="flex gap-3 text-xs text-blue-300/50">
                          <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{day.distance}</span>
                          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{day.duration}</span>
                        </div>
                      </div>
                      <p className="text-blue-300/25 text-xs mb-3">{day.route}</p>
                      <ul className="space-y-1.5 mb-3">
                        {day.activities.map((a, i) => (
                          <li key={i} className="flex items-start gap-2 text-blue-100/50 text-sm">
                            <div className="w-1 h-1 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                            {a}
                          </li>
                        ))}
                      </ul>
                      <div className="text-xs text-blue-300/30 pt-2 border-t border-blue-700/10">
                        <strong className="text-blue-200/50">Stay:</strong> {day.stay}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Important Info - Glass Panels */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-indigo-950" />
          <div className="absolute top-10 right-10 w-80 h-80 bg-blue-500/8 rounded-full blur-[130px]" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-14">
              <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">Essential Info</span>
              <h2 className="text-3xl md:text-4xl font-black mt-3">Important Kashmir Road Trip Information</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {importantInfo.map((info, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-xl border border-blue-500/10 rounded-3xl p-8 hover:border-blue-400/20 transition-all">
                  <h3 className="font-bold text-blue-200 mb-3 text-lg">{info.title}</h3>
                  <p className="text-blue-100/40 text-sm leading-relaxed">{info.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interlinks */}
        <section className="py-16 px-4 relative">
          <div className="absolute inset-0 bg-blue-950" />
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-2xl font-bold text-center mb-10">More Road Trip Ideas</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: '7-Day Himachal Tour', href: '/7-day-himachal-tour-by-car', desc: 'Shimla-Manali-Dharamshala' },
                { title: '10-Day North India Trip', href: '/10-day-north-india-road-trip', desc: 'Delhi to Jaisalmer circuit' },
                { title: 'Spiti Valley Road Trip', href: '/spiti-valley-road-trip-from-delhi', desc: '10-day high desert adventure' },
                { title: 'Weekend Getaways from Delhi', href: '/weekend-getaways-from-delhi-by-car', desc: '20 short trips from Delhi' },
                { title: 'Uttarakhand Spiritual Circuit', href: '/uttarakhand-spiritual-circuit-tour', desc: 'Haridwar-Rishikesh-Badrinath' },
                { title: 'India Road Trip Guide', href: '/india-road-trip-guide-for-tourists', desc: 'Essential road trip tips' },
                { title: 'Private Driver for Tourists', href: '/private-driver-hire-india', desc: 'English-speaking chauffeurs' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-blue-900/20 border border-blue-700/15 p-5 rounded-2xl hover:border-blue-400/20 transition-all flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ChevronRight className="w-5 h-5 text-blue-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{link.title}</div>
                    <div className="text-xs text-blue-300/30">{link.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 px-4 relative">
          <div className="absolute inset-0 bg-blue-950" />
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-2xl font-bold text-center mb-3">Travel Guides & Resources</h2>
            <p className="text-blue-300/30 text-center mb-10 text-sm">Helpful guides for planning your Kashmir road trip</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: '7-Day Himachal Tour by Car', href: '/7-day-himachal-tour-by-car', desc: 'Shimla-Manali-Dharamshala hill station tour' },
                { title: 'Spiti Valley Road Trip', href: '/spiti-valley-road-trip-from-delhi', desc: 'High-altitude adventure to Spiti Valley' },
                { title: '10-Day North India Road Trip', href: '/10-day-north-india-road-trip', desc: 'Epic road trip covering North India highlights' },
                { title: 'Weekend Getaways from Delhi', href: '/weekend-getaways-from-delhi-by-car', desc: 'Top road trips and escapes from Delhi' },
                { title: 'India Road Trip Guide', href: '/india-road-trip-guide-for-tourists', desc: 'Everything you need to know about road trips in India' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group bg-blue-900/20 border border-blue-700/15 p-5 rounded-2xl hover:border-blue-400/20 transition-all">
                  <div className="font-semibold text-white text-sm group-hover:text-blue-300 transition-colors">{link.title}</div>
                  <div className="text-xs text-blue-300/30 mt-1">{link.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-indigo-950" />
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="text-center mb-14">
              <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-black mt-3">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {faqData.map((faq, i) => (
                <details key={i} className="group bg-blue-900/15 border border-blue-700/15 rounded-2xl overflow-hidden">
                  <summary className="p-6 font-semibold text-white cursor-pointer flex items-center justify-between hover:text-blue-200 transition-colors">
                    <span className="pr-4">{faq.question}</span>
                    <ChevronRight className="w-5 h-5 text-blue-500 group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 -mt-1">
                    <p className="text-blue-200/40 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Frozen Paradise */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-blue-800 via-indigo-800 to-sky-900" />
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-blue-300/10 to-transparent" />
          <div className="absolute bottom-10 left-1/3 w-96 h-96 bg-blue-400/10 rounded-full blur-[130px]" />
          <div className="absolute top-20 right-1/4 w-72 h-72 bg-indigo-400/10 rounded-full blur-[100px]" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-5">
              <span className="text-transparent bg-gradient-to-r from-blue-200 via-sky-100 to-indigo-200 bg-clip-text">Your Paradise Awaits</span>
            </h2>
            <p className="text-blue-100/50 text-lg mb-10">Sedan from ₹45,000 | SUV from ₹65,000 | 8 days of paradise</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:7668570551" className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 text-white font-bold px-10 py-4 rounded-2xl transition-all shadow-xl">
                <Phone className="w-5 h-5" /> Call 7668570551
              </a>
              <a href="https://wa.me/917668570551?text=Hi%20I%20want%20to%20book%20Delhi%20to%20Kashmir%20road%20trip" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white font-bold px-10 py-4 rounded-2xl transition-all">
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
