import Link from 'next/link';
import { Phone, MapPin, Clock, Star, ChevronRight, Shield, Users, Calendar } from '@/components/ui/icons';

export const metadata = {
  title: 'Spiti Valley Road Trip from Delhi 2026 | 8-10 Day Plan | Triveni Cabs',
  description: 'Spiti Valley road trip from Delhi: 8-10 day plan via Shimla & Manali. Route, permits, altitude tips, road conditions. SUV ₹65,000. Call 7668570551.',
  keywords: 'spiti valley road trip from delhi plan, delhi to spiti valley by car, spiti valley tour itinerary, spiti valley road conditions, spiti valley permit',
  authors: [{ name: 'Triveni Cabs' }],
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/spiti-valley-road-trip-from-delhi' },
  openGraph: { title: 'Spiti Valley Road Trip from Delhi 2026 | Complete Plan', description: '8-10 day Spiti Valley circuit: Delhi→Shimla→Spiti→Manali→Delhi.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/spiti-valley-road-trip-from-delhi', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Spiti Valley Road Trip from Delhi 2026' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const itinerary = [
  { day: 1, title: 'Delhi to Shimla', distance: '350 km', duration: '7-8 hrs', elevation: '2,205 m', route: 'Delhi → Chandigarh → Shimla', activities: ['Depart Delhi early (5 AM)', 'Breakfast at Murthal or Karnal', 'Drive through Kalka-Shimla highway', 'Arrive Shimla by afternoon', 'Evening walk on Mall Road — acclimatize'], stay: 'Shimla (Mall Road area)', highlight: 'Acclimatization Start' },
  { day: 2, title: 'Shimla to Sarahan', distance: '180 km', duration: '7 hrs', elevation: '2,165 m', route: 'Shimla → Narkanda → Rampur → Sarahan', activities: ['Drive through apple orchards', 'Narkanda viewpoint — Hatu Peak visible', 'Cross Sutlej River valley', 'Visit Bhimakali Temple at Sarahan (stunning wooden architecture)', 'Overnight in Sarahan — quiet mountain village'], stay: 'Sarahan HPTDC hotel or guesthouse', highlight: 'Bhimakali Temple' },
  { day: 3, title: 'Sarahan to Chitkul', distance: '120 km', duration: '5 hrs', elevation: '3,450 m', route: 'Sarahan → Sangla → Chitkul', activities: ['Drive through Sangla Valley (Baspa Valley)', 'Apple and apricot orchards along the route', 'Kamru Fort in Sangla — ancient wooden fort', 'Continue to Chitkul — LAST INHABITED VILLAGE before Tibet border', 'Walk along Baspa River', 'Experience Kinnauri culture and food'], stay: 'Chitkul homestay', highlight: 'Last Indian Village' },
  { day: 4, title: 'Chitkul to Tabo', distance: '180 km', duration: '7-8 hrs', elevation: '3,050 m', route: 'Chitkul → Sangla → Reckong Peo → Pooh → Nako → Tabo', activities: ['Drive back to Reckong Peo (Kinnaur HQ)', 'View of Kinnaur Kailash peak', 'Cross the dramatic Spiti River gorge', 'Stop at Nako Lake — serene high-altitude lake', 'Arrive Tabo — 1,000-year-old monastery', 'Visit Tabo Monastery — "Ajanta of the Himalayas"', 'Explore cave hermitages above the monastery'], stay: 'Tabo monastery guesthouse or hotel', highlight: 'Tabo Monastery' },
  { day: 5, title: 'Tabo to Kaza', distance: '50 km', duration: '2 hrs', elevation: '3,800 m', route: 'Tabo → Dhankar → Kaza', activities: ['Visit Dhankar Monastery — perched on a cliff edge', 'Dhankar Lake trek (1.5 hrs, moderate)', 'Continue to Kaza — capital of Spiti', 'Visit Key Monastery — Spiti\'s largest and most iconic', 'Walk through Kaza market', 'Try Spitian food — momos, thukpa, chhang (barley beer)'], stay: 'Kaza town', highlight: 'Key Monastery' },
  { day: 6, title: 'Kaza — Exploring Spiti', distance: '80 km', duration: 'Full day', elevation: '4,587 m (Komic)', route: 'Kaza → Hikkim → Komic → Langza → Kaza', activities: ['Hikkim — world\'s highest post office (4,400 m), send a postcard!', 'Komic — one of world\'s highest villages (4,587 m)', 'Komic Monastery', 'Langza — fossil village with giant Buddha statue and Himalayan backdrop', 'Spot ibex and blue sheep on the way', 'Return to Kaza, rest and acclimatize'], stay: 'Kaza (same hotel)', highlight: 'Highest Post Office' },
  { day: 7, title: 'Kaza to Chandratal Lake', distance: '80 km', duration: '4 hrs', elevation: '4,300 m', route: 'Kaza → Losar → Kunzum Pass → Chandratal', activities: ['Drive to Kunzum Pass (4,590 m) — one of India\'s highest motorable passes', 'Offer prayers at Kunzum Devi Temple', 'Continue to Chandratal Lake — "Moon Lake"', 'Crescent-shaped alpine lake at 4,300 m', 'Camp by the lake (no hotels — tented camps only)', 'Stargazing at high altitude — Milky Way visible to naked eye'], stay: 'Chandratal camp (tents)', highlight: 'Chandratal Moon Lake' },
  { day: 8, title: 'Chandratal to Manali', distance: '120 km', duration: '6-7 hrs', elevation: '3,978 m (Rohtang)', route: 'Chandratal → Batal → Gramphu → Rohtang Pass → Manali', activities: ['Early start (6 AM) — road can close by afternoon', 'Drive through Batal and Gramphu', 'Cross Rohtang Pass area (Atal Tunnel now available)', 'Dramatic descent into Kullu Valley', 'Arrive Manali by afternoon', 'Hot shower, real food, and relaxation!', 'Evening walk in Old Manali'], stay: 'Manali (Old Manali or Mall Road)', highlight: 'Rohtang Crossing' },
  { day: 9, title: 'Manali Rest Day or Sightseeing', distance: '40 km', duration: 'Full day', elevation: '2,050 m', route: 'Manali local', activities: ['Rest day after the intense Spiti circuit', 'Optional: Hadimba Temple, Solang Valley, Vashisht Hot Springs', 'Cafe hopping in Old Manali', 'Shopping for Kullu shawls and handicrafts', 'Recharge for the Delhi drive'], stay: 'Manali', highlight: 'Rest & Recharge' },
  { day: 10, title: 'Manali to Delhi', distance: '530 km', duration: '11-12 hrs', elevation: 'Descent', route: 'Manali → Mandi → Bilaspur → Chandigarh → Delhi', activities: ['Early start (5 AM)', 'Drive through Kullu Valley to Mandi', 'Continue via Bilaspur and Kiratpur to Chandigarh', 'Lunch at Chandigarh or Karnal', 'Arrive Delhi by evening (6-7 PM)'], stay: 'Arrive Delhi', highlight: 'Home' },
];

const faqData = [
  { question: 'What type of vehicle is needed for Spiti Valley?', answer: 'SUV (Innova/Ertiga) is MANDATORY for Spiti. Sedan cannot handle the rough mountain roads, river crossings, and high altitude terrain. We provide experienced mountain drivers who know every turn of the Spiti circuit.' },
  { question: 'Do I need permits for Spiti Valley?', answer: 'Indian citizens need an Inner Line Permit (ILP) for areas near the Indo-Tibet border (Sumdo checkpoint). We arrange this from Reckong Peo or Kaza. Foreign nationals need a separate Protected Area Permit. We handle all documentation.' },
  { question: 'When is Spiti Valley accessible by road?', answer: 'The Shimla-Kinnaur-Spiti route is open year-round (though winter driving is tough). The Manali-Rohtang-Kunzum-Spiti route opens June-October only. Our recommended circuit (enter via Shimla, exit via Manali) works June-October.' },
  { question: 'What about altitude sickness?', answer: 'Spiti reaches 3,800-4,590 m. Symptoms include headache, nausea, breathlessness. We plan gradual ascent (Shimla→Sarahan→Chitkul before entering Spiti) for acclimatization. Drink plenty of water, avoid alcohol above 3,000 m, carry Diamox (consult doctor).' },
  { question: 'Is there mobile network in Spiti?', answer: 'BSNL has the best coverage (available in Kaza, Tabo, and some villages). Airtel/Jio have very limited coverage. Buy a BSNL SIM before the trip. Satellite messages may not work. Inform family about limited connectivity in advance.' },
  { question: 'What is the total cost of a Spiti Valley road trip?', answer: 'SUV (Innova/Ertiga): ₹65,000 for 10 days. Innova Crysta: ₹80,000. This includes vehicle, fuel, driver, tolls, and permits. Homestays in Spiti cost ₹800-2,000/night including meals. Total trip budget: ₹80,000-1,20,000 for 2 people including stays and food.' },
  { question: 'Can I do Spiti in less than 10 days?', answer: 'Minimum 8 days is needed. You can skip Chitkul and the Manali rest day. However, rushing defeats the purpose — Spiti is about slow travel, acclimatization, and soaking in the moonscape. 10 days is ideal.' },
  { question: 'Is Spiti safe for solo travelers and women?', answer: 'Yes, Spiti is one of the safest regions in India. The local Buddhist community is incredibly hospitable. Homestays are family-run. However, always travel with an experienced driver due to road conditions and altitude.' },
];

export default function SpitiValleyRoadTripPage() {
  const tripSchema = {
    "@context": "https://schema.org", "@type": "TouristTrip",
    "name": "Spiti Valley Road Trip from Delhi",
    "description": "8-10 day road trip from Delhi to Spiti Valley via Shimla, returning via Manali",
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
    "offers": { "@type": "AggregateOffer", "lowPrice": "65000", "highPrice": "100000", "priceCurrency": "INR" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Spiti Valley Road Trip", "item": "https://www.trivenicabs.in/spiti-valley-road-trip-from-delhi" }
    ]
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-stone-100">
        <section className="relative bg-gradient-to-br from-slate-800 via-stone-700 to-amber-900 text-white py-20 px-4">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-4 py-2 rounded-full mb-6">
              <Calendar className="w-4 h-4" /><span className="text-sm font-medium">10 Days | 4,590 m Peak | High-Altitude Adventure</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Spiti Valley Road Trip<br />from Delhi</h1>
            <p className="text-xl text-stone-200 mb-4 max-w-3xl mx-auto">Delhi &rarr; Shimla &rarr; Kinnaur &rarr; Spiti &rarr; Chandratal &rarr; Manali &rarr; Delhi — the ultimate high-altitude adventure through India&apos;s cold desert.</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">SUV from ₹65,000</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Crysta from ₹80,000</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Jun-Oct Season</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:7668570551" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl transition-colors"><Phone className="w-5 h-5" /> Call 7668570551</a>
              <a href="https://wa.me/917668570551?text=Hi%20I%20want%20Spiti%20Valley%20road%20trip" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 px-8 py-4 rounded-xl transition-colors font-semibold">WhatsApp Us</a>
            </div>
          </div>
        </section>

        {/* Altitude Warning */}
        <section className="py-4 bg-amber-100 border-b border-amber-200">
          <div className="max-w-4xl mx-auto px-4 text-center text-amber-800 text-sm font-medium">
            High-Altitude Trip (up to 4,590 m). SUV mandatory. Gradual acclimatization built into itinerary. Read altitude sickness tips in FAQ.
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">10-Day Spiti Valley Itinerary</h2>
            <div className="space-y-6">
              {itinerary.map((day) => (
                <div key={day.day} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="bg-gradient-to-r from-slate-700 to-stone-600 text-white p-5">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div><span className="text-stone-300 text-sm">Day {day.day}</span><h3 className="text-xl font-bold">{day.title}</h3></div>
                      <div className="flex gap-3 text-sm">
                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{day.distance}</span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{day.duration}</span>
                        <span className="bg-amber-500/20 text-amber-200 px-2 py-0.5 rounded text-xs">{day.elevation}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                      <span>Route: {day.route}</span>
                      <span className="bg-stone-100 text-stone-700 px-2 py-0.5 rounded-full text-xs font-bold">{day.highlight}</span>
                    </div>
                    <ul className="space-y-1.5 mb-3">
                      {day.activities.map((a, i) => (<li key={i} className="flex items-start gap-2 text-gray-700 text-sm"><ChevronRight className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />{a}</li>))}
                    </ul>
                    <div className="text-sm text-gray-600 pt-3 border-t border-gray-100"><strong>Stay:</strong> {day.stay}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Essential Info */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Essential Spiti Travel Info</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Road Conditions', content: 'Shimla-Kinnaur stretch is mostly paved (NH5). Kinnaur-Spiti has rough patches, river crossings, and narrow mountain roads. Manali-Rohtang-Kunzum route is unpaved in parts. Only SUVs recommended. Our drivers know every switchback.' },
                { title: 'Altitude Sickness Prevention', content: 'Gradual ascent is key — our itinerary rises from 2,200m to 4,590m over 5 days. Drink 3-4 liters water daily. Avoid alcohol above 3,000m. Carry Diamox (consult doctor). Watch for symptoms: headache, nausea, breathlessness. Descend if severe.' },
                { title: 'Packing Essentials', content: 'Down jacket, thermal innerwear, waterproof shoes, sunscreen (SPF 50+), sunglasses (UV protection), lip balm, moisturizer, power bank (no charging at some stops), BSNL SIM card, basic medicines, torch/headlamp.' },
                { title: 'Fuel & ATMs', content: 'Last reliable fuel station: Reckong Peo. Next: Kaza (may not always have stock). We carry extra fuel cans. Last ATM: Reckong Peo. Carry cash (₹15,000-20,000) for Spiti — digital payments are unreliable.' },
              ].map((info, i) => (
                <div key={i} className="bg-stone-50 rounded-xl p-6">
                  <h3 className="font-bold text-stone-800 mb-3">{info.title}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{info.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Related Trips</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: '7-Day Himachal Tour', href: '/7-day-himachal-tour-by-car', desc: 'Shimla-Manali-Dharamshala' },
                { title: 'Kashmir Road Trip', href: '/kashmir-road-trip-from-delhi', desc: 'Delhi to Paradise on Earth' },
                { title: 'Weekend Getaways from Delhi', href: '/weekend-getaways-from-delhi-by-car', desc: 'Quick escapes from Delhi' },
                { title: 'Weekend Getaways from Chandigarh', href: '/weekend-getaways-from-chandigarh-by-car', desc: '18 Himalayan getaways' },
                { title: '10-Day North India Trip', href: '/10-day-north-india-road-trip', desc: 'Complete North India circuit' },
                { title: 'India Road Trip Guide', href: '/india-road-trip-guide-for-tourists', desc: 'Essential road trip tips' },
                { title: 'Outstation Cabs', href: '/outstation-cabs', desc: 'All outstation services' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-amber-600 flex-shrink-0" />
                  <div><div className="font-semibold text-gray-900 text-sm">{link.title}</div><div className="text-xs text-gray-500">{link.desc}</div></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-2 text-gray-900">Travel Guides & Resources</h2>
            <p className="text-gray-500 text-center mb-8 text-sm">Helpful guides for planning your Spiti adventure</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: '7-Day Himachal Tour by Car', href: '/7-day-himachal-tour-by-car', desc: 'Shimla-Manali-Dharamshala hill station tour' },
                { title: 'Kashmir Road Trip from Delhi', href: '/kashmir-road-trip-from-delhi', desc: 'Road trip to the paradise on earth' },
                { title: '10-Day North India Road Trip', href: '/10-day-north-india-road-trip', desc: 'Epic road trip covering North India highlights' },
                { title: 'Weekend Getaways from Chandigarh', href: '/weekend-getaways-from-chandigarh-by-car', desc: 'Hill stations and escapes from Chandigarh' },
                { title: 'India Road Trip Guide', href: '/india-road-trip-guide-for-tourists', desc: 'Everything you need to know about road trips in India' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border">
                  <div className="font-semibold text-gray-900 text-sm group-hover:text-amber-600 transition-colors">{link.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{link.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, i) => (
                <details key={i} className="bg-stone-50 rounded-xl p-6 group">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">{faq.question}<ChevronRight className="w-5 h-5 text-amber-600 group-open:rotate-90 transition-transform flex-shrink-0" /></summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-stone-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready for the Spiti Adventure?</h2>
            <p className="text-stone-300 text-lg mb-8">SUV from ₹65,000 | Experienced mountain drivers | Permit assistance included</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:7668570551" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl transition-colors"><Phone className="w-5 h-5" /> Call 7668570551</a>
              <a href="https://wa.me/917668570551?text=Hi%20I%20want%20to%20book%20Spiti%20Valley%20road%20trip" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 font-bold px-8 py-4 rounded-xl transition-colors">WhatsApp Us</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
