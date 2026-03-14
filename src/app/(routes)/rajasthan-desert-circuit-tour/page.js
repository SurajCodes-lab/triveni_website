import Link from 'next/link';
import { Phone, MapPin, Clock, Star, ChevronRight, Shield, Users, Calendar } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Rajasthan Desert Circuit Tour 2026 | Jaisalmer Jodhpur Bikaner by Car | Triveni Cabs',
  description: 'Rajasthan desert circuit Jaisalmer Jodhpur Bikaner 5-6 day tour by car. Desert safari, forts, cultural experiences. Sedan ₹30,000, SUV ₹42,000. Call 7668570551.',
  keywords: 'rajasthan desert circuit jaisalmer jodhpur bikaner, rajasthan desert tour, thar desert tour by car, jaisalmer jodhpur tour, desert safari rajasthan',
  authors: [{ name: 'Triveni Cabs' }],
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/rajasthan-desert-circuit-tour' },
  openGraph: { title: 'Rajasthan Desert Circuit Tour 2026 | Jaisalmer-Jodhpur-Bikaner', description: '5-6 day desert adventure: golden forts, sand dunes, camel safaris.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/rajasthan-desert-circuit-tour', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Rajasthan Desert Circuit Tour 2026' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const itinerary = [
  { day: 1, title: 'Delhi/Jaipur to Jaisalmer', distance: '560 km from Jaipur / 780 km from Delhi', duration: '8-10 hrs', route: 'Jaipur → Jodhpur → Jaisalmer OR Delhi → Bikaner → Jaisalmer', activities: ['Early start (5-6 AM)', 'Drive through Rajasthani desert landscape', 'Stop at Pokhran Fort en route (if via Jodhpur)', 'Reach Jaisalmer by evening', 'First glimpse of the Golden Fort at sunset'], stay: 'Inside Jaisalmer Fort or near Gadisar Lake', highlight: 'Golden City' },
  { day: 2, title: 'Jaisalmer & Desert Safari', distance: '85 km', duration: 'Full day', route: 'Jaisalmer → Sam Sand Dunes', activities: ['Morning: Jaisalmer Fort (Sonar Quila — living fort)', 'Patwon Ki Haveli, Salim Singh Ki Haveli, Nathmal Ki Haveli', 'Gadisar Lake and surrounding temples', 'Afternoon: Drive to Sam Sand Dunes (42 km)', 'Camel safari through Thar Desert', 'Sunset from the dunes — iconic experience', 'Evening: Desert camp with folk music, Rajasthani dinner under stars'], stay: 'Desert camp or return to Jaisalmer', highlight: 'Desert Safari' },
  { day: 3, title: 'Jaisalmer to Jodhpur', distance: '280 km', duration: '5 hrs', route: 'Jaisalmer → Barmer/Pokhran → Jodhpur', activities: ['Morning exploration of Bada Bagh cenotaphs at sunrise', 'Visit Kuldhara abandoned village (haunted village legend)', 'Drive to Jodhpur through desert scrubland', 'Arrive Jodhpur by afternoon', 'Mehrangarh Fort — one of India\'s largest and most impressive', 'Walk through the Blue City streets below the fort'], stay: 'Near Mehrangarh Fort or Clock Tower', highlight: 'Blue City' },
  { day: 4, title: 'Jodhpur Sightseeing', distance: '30 km', duration: 'Full day', route: 'Jodhpur city', activities: ['Umaid Bhawan Palace Museum', 'Mandore Gardens — ancient cenotaphs of Marwar rulers', 'Rao Jodha Desert Rock Park (ecological park)', 'Clock Tower market — spices, textiles, handicrafts', 'Mirchi Bada and Makhaniya Lassi (iconic Jodhpur food)', 'Step wells — Toorji Ka Jhalra'], stay: 'Jodhpur (same hotel)', highlight: 'Royal Heritage' },
  { day: 5, title: 'Jodhpur to Bikaner', distance: '250 km', duration: '4.5 hrs', route: 'Jodhpur → Nagaur → Bikaner', activities: ['Drive to Bikaner through desert landscape', 'Optional: Stop at Nagaur Fort', 'Junagarh Fort — magnificent unbreached fort', 'Karni Mata Temple (Rat Temple) at Deshnok — unique experience', 'Bikaner\'s famous Bikaneri Bhujia and Rasgulla'], stay: 'Bikaner fort area', highlight: 'Rat Temple' },
  { day: 6, title: 'Bikaner to Jaipur/Delhi', distance: '330 km to Jaipur / 450 km to Delhi', duration: '5-7 hrs', route: 'Bikaner → Jaipur OR Bikaner → Delhi', activities: ['Morning visit to Lalgarh Palace', 'Camel Research Centre (breed and research center)', 'Drive to Jaipur or Delhi', 'Optional: Stop at Mandawa (Shekhawati painted havelis)', 'Arrive destination by evening'], stay: 'Jaipur or Delhi', highlight: 'Homebound' },
];

const pricing = [
  { vehicle: 'Sedan (Dzire/Etios)', price: '₹30,000', perDay: '₹5,000/day', capacity: '3 pax' },
  { vehicle: 'SUV (Ertiga/Innova)', price: '₹42,000', perDay: '₹7,000/day', capacity: '5-6 pax' },
  { vehicle: 'Innova Crysta', price: '₹52,000', perDay: '₹8,667/day', capacity: '6 pax' },
  { vehicle: 'Tempo Traveller', price: '₹72,000', perDay: '₹12,000/day', capacity: '10-12 pax' },
];

const faqData = [
  { question: 'What is the best time for the Rajasthan desert circuit?', answer: 'October to March is ideal. November-February offers the best desert weather (15-25°C during the day, 5-10°C at night). Avoid April-June (extreme heat, 45°C+) and July-September (monsoon can affect desert roads).' },
  { question: 'Is the desert camp experience safe?', answer: 'Yes, reputable desert camps at Sam Sand Dunes are safe and well-managed. We recommend camps we have vetted personally. The experience includes camel rides, folk music, Rajasthani dinner, and sleeping under stars (tented accommodation). Costs ₹2,000-5,000/person.' },
  { question: 'Can I do this circuit starting from Delhi?', answer: 'Yes! From Delhi, you can start with Bikaner (450 km) on Day 1, then follow Bikaner→Jaisalmer→Jodhpur→Delhi route. Or fly to Jodhpur and we arrange the car from there. We also offer the full Delhi-Jaisalmer-Jodhpur-Bikaner-Delhi circuit in 7-8 days.' },
  { question: 'What type of vehicle is recommended for desert roads?', answer: 'All roads between Jaisalmer, Jodhpur, and Bikaner are well-paved national highways. A sedan works perfectly. SUV is recommended only if you plan off-road desert excursions or have more than 3 passengers.' },
  { question: 'What should I pack for the desert circuit?', answer: 'Light cotton clothes, sunscreen (SPF 50+), sunglasses, hat/scarf, comfortable walking shoes, warm jacket for evenings (Oct-Feb), camera, and power bank. Desert camps may have limited electricity.' },
  { question: 'How much does a desert safari cost?', answer: 'Camel safari at Sam Sand Dunes costs ₹500-1,500/person. Jeep safari costs ₹1,000-2,500/person. Desert camp overnight stay with dinner and breakfast costs ₹2,000-5,000/person depending on the camp quality.' },
];

export default function RajasthanDesertCircuitPage() {
  const tripSchema = {
    "@context": "https://schema.org", "@type": "TouristTrip",
    "name": "Rajasthan Desert Circuit Tour",
    "description": "5-6 day desert circuit covering Jaisalmer, Jodhpur, and Bikaner with desert safari",
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
    "offers": { "@type": "AggregateOffer", "lowPrice": "30000", "highPrice": "72000", "priceCurrency": "INR" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Rajasthan Desert Circuit Tour", "item": "https://www.trivenicabs.in/rajasthan-desert-circuit-tour" }
    ]
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-yellow-950 text-white">
        {/* Hero - Golden Sand Dunes with warm radiance */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-950 via-amber-950 to-orange-950" />
          {/* Sand wave pattern */}
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='60' viewBox='0 0 200 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40C30 40 30 20 60 20C90 20 90 40 120 40C150 40 150 20 180 20C210 20 210 40 240 40' fill='none' stroke='%23fbbf24' stroke-width='0.8'/%3E%3Cpath d='M0 50C30 50 30 30 60 30C90 30 90 50 120 50C150 50 150 30 180 30C210 30 210 50 240 50' fill='none' stroke='%23fbbf24' stroke-width='0.5'/%3E%3C/svg%3E")` }} />
          {/* Warm golden orbs */}
          <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-yellow-500/10 rounded-full blur-[180px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[300px] bg-orange-500/8 rounded-full blur-[150px]" />

          <div className="max-w-7xl mx-auto px-4 relative z-10 py-20 w-full">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-gradient-to-r from-yellow-400 to-transparent" />
                <span className="text-yellow-400 text-sm font-medium tracking-widest uppercase">6 Days | 3 Desert Cities | 1 Epic Safari</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[0.85]">
                <span className="text-transparent bg-gradient-to-r from-yellow-300 via-amber-200 to-orange-300 bg-clip-text">Desert</span>
                <br />
                <span className="text-white">Circuit</span>
                <br />
                <span className="text-yellow-600/40 text-3xl md:text-4xl font-light">Jaisalmer | Jodhpur | Bikaner</span>
              </h1>

              <p className="text-yellow-200/40 text-lg mb-10 max-w-xl leading-relaxed">
                Golden forts, blue city lanes, camel safaris, and nights under desert stars. The ultimate Thar Desert adventure.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {pricing.slice(0, 2).map((p, i) => (
                  <div key={i} className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl px-6 py-3 backdrop-blur-sm">
                    <span className="text-yellow-400/50 text-xs uppercase tracking-wider">{p.vehicle.split('(')[0].trim()}</span>
                    <div className="text-yellow-300 font-bold text-xl">{p.price}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="tel:7668570551" className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-400 hover:to-amber-400 text-black font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-yellow-500/20">
                  <Phone className="w-5 h-5" /> Call 7668570551
                </a>
                <a href="https://wa.me/917668570551?text=Hi%20I%20want%20desert%20circuit%20tour" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-2xl transition-all duration-300 font-semibold">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Itinerary - Cards with warm gradient accents */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-yellow-950 to-amber-950" />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="text-yellow-400 text-sm font-medium tracking-widest uppercase">The Adventure</span>
              <h2 className="text-4xl md:text-5xl font-black mt-3">Day-by-Day Desert Plan</h2>
            </div>

            <div className="space-y-6">
              {itinerary.map((day) => (
                <div key={day.day} className="group bg-amber-900/20 backdrop-blur-sm border border-amber-700/15 rounded-3xl overflow-hidden hover:border-yellow-500/25 transition-all duration-500">
                  <div className="p-6">
                    <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-2xl flex items-center justify-center">
                          <span className="text-yellow-300 font-black text-lg">{day.day}</span>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white">{day.title}</h3>
                          <span className="text-yellow-400/30 text-xs">{day.route}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs text-yellow-300/40 flex items-center gap-1"><MapPin className="w-3 h-3" />{day.distance}</span>
                        <span className="bg-yellow-500/15 text-yellow-300 px-3 py-1 rounded-full text-xs font-bold">{day.highlight}</span>
                      </div>
                    </div>
                    <ul className="space-y-1.5 mb-4">
                      {day.activities.map((a, i) => (
                        <li key={i} className="flex items-start gap-2 text-yellow-100/45 text-sm">
                          <div className="w-1.5 h-1.5 bg-yellow-500/40 rounded-full mt-1.5 flex-shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                    <div className="text-xs text-yellow-300/25 pt-3 border-t border-yellow-700/10">
                      <strong className="text-yellow-200/40">Stay:</strong> {day.stay}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-amber-950" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-yellow-500/5 rounded-full blur-[200px]" />
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-14">
              <span className="text-yellow-400 text-sm font-medium tracking-widest uppercase">Pricing</span>
              <h2 className="text-3xl md:text-4xl font-black mt-3">Desert Circuit Pricing</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {pricing.map((p, i) => (
                <div key={i} className={`bg-white/5 backdrop-blur-xl border rounded-3xl p-6 transition-all hover:scale-[1.02] ${i === 1 ? 'border-yellow-500/30 shadow-lg shadow-yellow-500/10' : 'border-white/10'}`}>
                  {i === 1 && <div className="text-yellow-400 text-xs font-bold mb-3 tracking-widest uppercase">Most Popular</div>}
                  <h3 className="font-bold text-white text-sm">{p.vehicle}</h3>
                  <p className="text-yellow-300/30 text-xs mb-4">{p.capacity}</p>
                  <div className="text-3xl font-black text-transparent bg-gradient-to-r from-yellow-300 to-amber-300 bg-clip-text mb-1">{p.price}</div>
                  <div className="text-yellow-400/30 text-xs mb-5">{p.perDay}</div>
                  <a href="tel:7668570551" className="block text-center bg-yellow-500/15 hover:bg-yellow-500/25 border border-yellow-500/20 text-yellow-300 font-semibold py-3 rounded-xl transition-all">
                    Book Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interlinks */}
        <section className="py-16 px-4 relative">
          <div className="absolute inset-0 bg-yellow-950" />
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-2xl font-bold text-center mb-10">Related Trips</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: '5-Day Rajasthan Road Trip', href: '/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur', desc: 'Jaipur-Udaipur-Jodhpur' },
                { title: '10-Day North India Trip', href: '/10-day-north-india-road-trip', desc: 'Complete North India circuit' },
                { title: 'Weekend Getaways from Jaipur', href: '/weekend-getaways-from-jaipur-by-car', desc: '20 destinations from Jaipur' },
                { title: 'Golden Triangle with Driver', href: '/golden-triangle-english-speaking-driver', desc: 'Delhi-Agra-Jaipur with guide' },
                { title: 'Jaipur Sightseeing', href: '/sightseeing/jaipur', desc: 'All Jaipur attractions' },
                { title: 'Private Driver for Tourists', href: '/private-driver-hire-india', desc: 'English-speaking chauffeurs' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-amber-900/20 border border-amber-700/15 p-5 rounded-2xl hover:border-yellow-500/20 transition-all flex items-center gap-4">
                  <div className="w-10 h-10 bg-yellow-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ChevronRight className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{link.title}</div>
                    <div className="text-xs text-yellow-300/30">{link.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 px-4 relative">
          <div className="absolute inset-0 bg-yellow-950" />
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-2xl font-bold text-center mb-3">Travel Guides & Resources</h2>
            <p className="text-yellow-300/30 text-center mb-10 text-sm">Helpful guides for planning your desert adventure</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: '5-Day Rajasthan Road Trip', href: '/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur', desc: 'Jaipur-Udaipur-Jodhpur circuit in 5 days' },
                { title: '10-Day North India Road Trip', href: '/10-day-north-india-road-trip', desc: 'Epic road trip covering North India highlights' },
                { title: 'Weekend Getaways from Jaipur', href: '/weekend-getaways-from-jaipur-by-car', desc: 'Best road trips from the Pink City' },
                { title: 'Golden Triangle with Driver', href: '/golden-triangle-english-speaking-driver', desc: 'Delhi-Agra-Jaipur with English-speaking driver' },
                { title: 'Jaipur Sightseeing Tours', href: '/sightseeing/jaipur', desc: 'Explore the Pink City with local guides' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group bg-amber-900/20 border border-amber-700/15 p-5 rounded-2xl hover:border-yellow-500/20 transition-all">
                  <div className="font-semibold text-white text-sm group-hover:text-yellow-300 transition-colors">{link.title}</div>
                  <div className="text-xs text-yellow-300/30 mt-1">{link.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-amber-950" />
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="text-center mb-14">
              <span className="text-yellow-400 text-sm font-medium tracking-widest uppercase">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-black mt-3">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {faqData.map((faq, i) => (
                <details key={i} className="group bg-yellow-900/15 border border-yellow-700/15 rounded-2xl overflow-hidden">
                  <summary className="p-6 font-semibold text-white cursor-pointer flex items-center justify-between hover:text-yellow-200 transition-colors">
                    <span className="pr-4">{faq.question}</span>
                    <ChevronRight className="w-5 h-5 text-yellow-500 group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 -mt-1">
                    <p className="text-yellow-200/40 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-700 via-amber-700 to-orange-800" />
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-yellow-300/15 rounded-full blur-[130px]" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-orange-400/10 rounded-full blur-[100px]" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-5">
              <span className="text-transparent bg-gradient-to-r from-yellow-200 via-amber-100 to-orange-200 bg-clip-text">Into the Golden Desert</span>
            </h2>
            <p className="text-yellow-100/60 text-lg mb-10">Sedan from ₹30,000 | SUV from ₹42,000 | Desert camps extra</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:7668570551" className="inline-flex items-center gap-3 bg-black/20 hover:bg-black/30 backdrop-blur-sm border border-white/20 text-white font-bold px-10 py-4 rounded-2xl transition-all shadow-xl">
                <Phone className="w-5 h-5" /> Call 7668570551
              </a>
              <a href="https://wa.me/917668570551?text=Hi%20I%20want%20desert%20circuit%20tour%20booking" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white hover:bg-yellow-50 text-amber-900 font-bold px-10 py-4 rounded-2xl transition-all">
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
