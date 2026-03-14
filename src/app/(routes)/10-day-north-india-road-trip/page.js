import Link from 'next/link';
import { Phone, MapPin, Clock, Star, ChevronRight, Shield, Users, Calendar } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: '10 Day North India Road Trip Itinerary 2026 | Delhi-Agra-Jaipur-Jaisalmer | Triveni Cabs',
  description: '10 day north India road trip itinerary covering Delhi, Agra, Jaipur, Udaipur, Jodhpur & Jaisalmer. Day-wise plan, distances, costs. Sedan ₹55,000, SUV ₹75,000. Call 7668570551.',
  keywords: 'north india road trip 10 day itinerary, 10 day north india trip, delhi to jaisalmer road trip, rajasthan road trip plan, north india by car',
  authors: [{ name: 'Triveni Cabs' }],
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/10-day-north-india-road-trip' },
  openGraph: {
    title: '10 Day North India Road Trip Itinerary 2026 | Epic Circuit',
    description: 'Delhi→Agra→Jaipur→Udaipur→Jodhpur→Jaisalmer→Delhi. Day-wise itinerary with distances & costs.',
    type: 'website', locale: 'en_IN',
    url: 'https://www.trivenicabs.in/10-day-north-india-road-trip',
    siteName: 'Triveni Cabs',
  },
  twitter: { card: 'summary_large_image', title: '10 Day North India Road Trip 2026 | Delhi to Jaisalmer Circuit' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const itinerary = [
  { day: 1, title: 'Delhi to Agra', distance: '230 km', duration: '3.5 hrs', route: 'Delhi → Yamuna Expressway → Agra',
    activities: ['Drive via Yamuna Expressway (India\'s fastest highway)', 'Visit Taj Mahal (arrive by noon for best light)', 'Agra Fort in the afternoon', 'Mehtab Bagh at sunset for Taj Mahal view', 'Try Agra\'s famous petha and street food at Sadar Bazaar'],
    stay: 'Near Taj East/South Gate area', highlight: 'Taj Mahal', color: 'from-rose-500 to-pink-500' },
  { day: 2, title: 'Agra to Jaipur via Fatehpur Sikri', distance: '250 km', duration: '5 hrs', route: 'Agra → Fatehpur Sikri → Bharatpur → Jaipur',
    activities: ['Morning visit to Fatehpur Sikri (Akbar\'s abandoned capital)', 'Optional birding stop at Bharatpur (Keoladeo Sanctuary)', 'Drive to Jaipur through Rajasthani countryside', 'Evening walk at Nahargarh Fort for sunset over Jaipur'],
    stay: 'MI Road, C-Scheme, or near Amber Fort', highlight: 'Fatehpur Sikri', color: 'from-orange-500 to-amber-500' },
  { day: 3, title: 'Jaipur Full Day', distance: '50 km', duration: 'Full day', route: 'Jaipur city',
    activities: ['Amber Fort with elephant/jeep ride (8 AM start)', 'Jal Mahal photo stop', 'Hawa Mahal and City Palace', 'Jantar Mantar observatory', 'Johari Bazaar for jewelry shopping'],
    stay: 'Jaipur (same hotel)', highlight: 'Amber Fort', color: 'from-amber-500 to-yellow-500' },
  { day: 4, title: 'Jaipur to Udaipur', distance: '395 km', duration: '6.5 hrs', route: 'Jaipur → Ajmer → Chittorgarh → Udaipur',
    activities: ['Early start (7 AM)', 'Quick stop at Ajmer Dargah or Pushkar (1 hr detour)', 'Lunch at Chittorgarh — quick fort visit if time permits', 'Arrive Udaipur by evening', 'Sunset at Fateh Sagar Lake'],
    stay: 'Lake Pichola area, Fateh Sagar, or Hanuman Ghat', highlight: 'Lake Pichola', color: 'from-blue-500 to-cyan-500' },
  { day: 5, title: 'Udaipur Sightseeing', distance: '30 km', duration: 'Full day', route: 'Udaipur city',
    activities: ['City Palace (Rajasthan\'s largest palace complex)', 'Boat ride on Lake Pichola to Jag Mandir', 'Saheliyon Ki Bari (Garden of Maidens)', 'Bagore Ki Haveli — evening dance show', 'Rooftop dinner overlooking the lake'],
    stay: 'Udaipur (same hotel)', highlight: 'City Palace', color: 'from-indigo-500 to-blue-500' },
  { day: 6, title: 'Udaipur to Jodhpur via Ranakpur', distance: '280 km', duration: '5.5 hrs', route: 'Udaipur → Ranakpur → Jodhpur',
    activities: ['Visit Ranakpur Jain Temple (1444 marble pillars, none alike)', 'Drive through Aravalli hills', 'Reach Jodhpur by afternoon', 'Mehrangarh Fort (one of India\'s largest)', 'Walk through the Blue City lanes'],
    stay: 'Near Mehrangarh Fort, Clock Tower area', highlight: 'Mehrangarh Fort', color: 'from-sky-500 to-blue-500' },
  { day: 7, title: 'Jodhpur to Jaisalmer', distance: '280 km', duration: '5 hrs', route: 'Jodhpur → Pokhran → Jaisalmer',
    activities: ['Morning visit to Umaid Bhawan Palace Museum', 'Drive through Thar Desert landscape', 'Stop at Pokhran Fort (nuclear test site)', 'Arrive Jaisalmer by afternoon', 'Visit Jaisalmer Fort (living fort with hotels inside)', 'Patwon Ki Haveli'],
    stay: 'Inside Jaisalmer Fort or near Gadisar Lake', highlight: 'Golden Fort', color: 'from-yellow-500 to-amber-500' },
  { day: 8, title: 'Jaisalmer Desert Safari', distance: '80 km', duration: 'Full day', route: 'Jaisalmer → Sam Sand Dunes → Jaisalmer',
    activities: ['Morning: Gadisar Lake, Nathmal Ki Haveli', 'Afternoon: Drive to Sam Sand Dunes (42 km)', 'Camel ride across the Thar Desert', 'Desert sunset — iconic photo opportunity', 'Evening: Desert camp with folk music, dance, and dinner under stars'],
    stay: 'Desert camp at Sam Dunes or Jaisalmer hotel', highlight: 'Desert Safari', color: 'from-orange-500 to-red-500' },
  { day: 9, title: 'Jaisalmer to Bikaner to Mandawa', distance: '460 km', duration: '8 hrs', route: 'Jaisalmer → Bikaner → Mandawa',
    activities: ['Early start (6 AM)', 'Stop at Bikaner — visit Junagarh Fort and Karni Mata (Rat Temple)', 'Lunch at Bikaner\'s famous Bikaneri bhujia shops', 'Drive to Mandawa/Shekhawati region', 'Visit painted havelis (open-air art gallery of Rajasthan)'],
    stay: 'Mandawa haveli hotel or Jhunjhunu', highlight: 'Shekhawati Havelis', color: 'from-rose-500 to-orange-500' },
  { day: 10, title: 'Mandawa to Delhi', distance: '260 km', duration: '5 hrs', route: 'Mandawa → Jhunjhunu → Delhi',
    activities: ['Morning walk to see more painted havelis', 'Depart for Delhi after breakfast', 'Drive via Jaipur-Delhi highway', 'Lunch stop at Neemrana or Behror', 'Reach Delhi by evening (4-5 PM)'],
    stay: 'Arrive Delhi', highlight: 'Return Home', color: 'from-emerald-500 to-teal-500' },
];

const pricing = [
  { vehicle: 'Sedan (Dzire/Etios)', price: '₹55,000', perDay: '₹5,500/day', capacity: '3 pax' },
  { vehicle: 'SUV (Ertiga/Innova)', price: '₹75,000', perDay: '₹7,500/day', capacity: '5-6 pax' },
  { vehicle: 'Innova Crysta', price: '₹90,000', perDay: '₹9,000/day', capacity: '6 pax' },
  { vehicle: 'Tempo Traveller', price: '₹1,20,000', perDay: '₹12,000/day', capacity: '10-12 pax' },
];

const faqData = [
  { question: 'What is the total distance covered in this 10-day North India road trip?', answer: 'The complete circuit covers approximately 2,300-2,500 km: Delhi→Agra (230)→Jaipur (250)→Udaipur (395)→Jodhpur (280)→Jaisalmer (280)→Bikaner (330)→Mandawa (200)→Delhi (260). Distances are approximate and vary by route.' },
  { question: 'What is the best time for a 10-day North India road trip?', answer: 'October to March is ideal. November-February offers the best weather for Rajasthan (15-25°C days). Avoid April-June (extreme heat, 45°C+ in desert areas) and July-September (monsoon, some roads may be waterlogged).' },
  { question: 'Can this itinerary be customized?', answer: 'Yes! Common modifications include skipping Bikaner/Mandawa and spending extra time in Udaipur or Jaisalmer, adding Pushkar/Ajmer as a full day, or extending to include Mount Abu. Call 7668570551 to customize.' },
  { question: 'Is a sedan suitable for this road trip?', answer: 'Yes, all routes on this circuit are well-paved national highways. Sedan works well for 2-3 people. For families of 4+, we recommend an SUV for comfort on long daily drives of 4-8 hours.' },
  { question: 'What about hotels and meals?', answer: 'Our pricing covers only the vehicle, fuel, driver, tolls, and parking. You can find hotels from ₹1,500-5,000/night in most cities. We can recommend budget to luxury options for each stop. Heritage havelis in Jaisalmer and Mandawa start from ₹2,000/night.' },
  { question: 'Is the desert camp included?', answer: 'Desert camp at Sam Sand Dunes is a separate booking (₹2,000-5,000/person including dinner, folk performance, and breakfast). Our driver will take you there and pick you up. We can recommend trusted camp operators.' },
];

export default function NorthIndiaRoadTripPage() {
  const tripSchema = {
    "@context": "https://schema.org", "@type": "TouristTrip",
    "name": "10 Day North India Road Trip",
    "description": "Epic 10-day road trip circuit covering Delhi, Agra, Jaipur, Udaipur, Jodhpur, Jaisalmer and back to Delhi",
    "itinerary": {
      "@type": "ItemList", "numberOfItems": 10,
      "itemListElement": itinerary.map((day, i) => ({ "@type": "ListItem", "position": i + 1, "name": day.title }))
    },
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
    "offers": { "@type": "AggregateOffer", "lowPrice": "55000", "highPrice": "120000", "priceCurrency": "INR" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "10 Day North India Road Trip", "item": "https://www.trivenicabs.in/10-day-north-india-road-trip" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-neutral-950 text-white">
        {/* Hero - Epic Journey Map with Terracotta Warm Tones */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-orange-950/30 to-red-950/20" />
          {/* Compass rose pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='50' cy='50' r='40' fill='none' stroke='%23f97316' stroke-width='0.5'/%3E%3Ccircle cx='50' cy='50' r='25' fill='none' stroke='%23f97316' stroke-width='0.5'/%3E%3Cline x1='50' y1='5' x2='50' y2='95' stroke='%23f97316' stroke-width='0.3'/%3E%3Cline x1='5' y1='50' x2='95' y2='50' stroke='%23f97316' stroke-width='0.3'/%3E%3C/svg%3E")` }} />
          <div className="absolute top-20 left-20 w-[500px] h-[500px] bg-orange-500/8 rounded-full blur-[180px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-500/8 rounded-full blur-[150px]" />

          <div className="max-w-7xl mx-auto px-4 relative z-10 py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-3 bg-orange-500/10 border border-orange-500/20 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8">
                  <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                  <span className="text-orange-300 text-sm font-medium tracking-widest uppercase">10 Days | 2,500 km | 6 Cities</span>
                </div>

                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[0.85]">
                  <span className="text-transparent bg-gradient-to-r from-orange-300 via-amber-200 to-red-300 bg-clip-text">North India</span>
                  <br />
                  <span className="text-white">Road Trip</span>
                  <br />
                  <span className="text-neutral-600 text-3xl md:text-4xl font-light">The Epic 10-Day Circuit</span>
                </h1>

                <p className="text-neutral-400 text-lg mb-10 max-w-xl leading-relaxed">
                  Taj Mahal, Royal Forts, Desert Safaris, Lake Palaces. The ultimate North India journey from Delhi through Rajasthan and back.
                </p>

                <div className="flex flex-wrap gap-4">
                  <a href="tel:7668570551" className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-orange-500/20">
                    <Phone className="w-5 h-5" /> Call 7668570551
                  </a>
                  <a href="https://wa.me/917668570551?text=Hi%20I%20want%20to%20book%2010-day%20North%20India%20road%20trip" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-2xl transition-all duration-300 font-semibold">
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Route Journey Visualization */}
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h3 className="text-sm text-orange-400 uppercase tracking-widest font-medium mb-6">Your Route</h3>
                <div className="space-y-3">
                  {['Delhi', 'Agra', 'Jaipur', 'Udaipur', 'Jodhpur', 'Jaisalmer', 'Bikaner', 'Mandawa', 'Delhi'].map((city, i, arr) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${i === 0 || i === arr.length - 1 ? 'bg-orange-400' : 'bg-orange-500/40'} flex-shrink-0`} />
                      <span className={`text-sm ${i === 0 || i === arr.length - 1 ? 'text-orange-300 font-bold' : 'text-neutral-400'}`}>{city}</span>
                      {i < arr.length - 1 && (
                        <div className="flex-1 h-px bg-gradient-to-r from-orange-500/20 to-transparent" />
                      )}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-white/10">
                  <div>
                    <div className="text-2xl font-black text-orange-300">₹55K</div>
                    <div className="text-neutral-500 text-xs">Sedan Start</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-orange-300">₹75K</div>
                    <div className="text-neutral-500 text-xs">SUV Start</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Day-wise Itinerary - Color-coded cards */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 to-neutral-900" />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="text-orange-400 text-sm font-medium tracking-widest uppercase">The Journey</span>
              <h2 className="text-4xl md:text-5xl font-black mt-3">10 Days of Discovery</h2>
            </div>

            <div className="space-y-6">
              {itinerary.map((day) => (
                <div key={day.day} className="group bg-neutral-900/60 backdrop-blur-sm border border-neutral-800/50 rounded-3xl overflow-hidden hover:border-orange-500/20 transition-all duration-500">
                  <div className={`bg-gradient-to-r ${day.color} p-1`}>
                    <div className="bg-neutral-900/95 backdrop-blur-sm p-5 flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center gap-4">
                        <span className={`w-10 h-10 bg-gradient-to-br ${day.color} rounded-xl flex items-center justify-center text-white font-black text-sm`}>{day.day}</span>
                        <div>
                          <h3 className="text-lg font-bold text-white">{day.title}</h3>
                          <span className="text-neutral-500 text-xs">{day.route}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-xs">
                        <span className="flex items-center gap-1 text-neutral-400"><MapPin className="w-3.5 h-3.5" />{day.distance}</span>
                        <span className="flex items-center gap-1 text-neutral-400"><Clock className="w-3.5 h-3.5" />{day.duration}</span>
                        <span className={`bg-gradient-to-r ${day.color} text-white px-3 py-1 rounded-full font-bold`}>{day.highlight}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-2 mb-4">
                      {day.activities.map((a, i) => (
                        <li key={i} className="flex items-start gap-3 text-neutral-400 text-sm">
                          <div className="w-1.5 h-1.5 bg-orange-500/50 rounded-full mt-1.5 flex-shrink-0" />
                          {a}
                        </li>
                      ))}
                    </ul>
                    <div className="text-sm text-neutral-500 pt-3 border-t border-neutral-800/50">
                      <strong className="text-neutral-300">Stay:</strong> {day.stay}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-neutral-950" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[200px]" />
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-14">
              <span className="text-orange-400 text-sm font-medium tracking-widest uppercase">Pricing</span>
              <h2 className="text-3xl md:text-4xl font-black mt-3">10-Day Road Trip Pricing</h2>
              <p className="text-neutral-500 mt-3">All-inclusive: fuel, driver, tolls, parking & permits</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {pricing.map((p, i) => (
                <div key={i} className={`bg-white/5 backdrop-blur-xl border rounded-3xl p-6 transition-all hover:scale-[1.02] ${i === 1 ? 'border-orange-500/30 shadow-lg shadow-orange-500/10' : 'border-white/10'}`}>
                  {i === 1 && <div className="text-orange-400 text-xs font-bold mb-3 tracking-widest uppercase">Best Value</div>}
                  <h3 className="font-bold text-white text-sm">{p.vehicle}</h3>
                  <p className="text-neutral-500 text-xs mb-4">{p.capacity}</p>
                  <div className="text-3xl font-black text-transparent bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text mb-1">{p.price}</div>
                  <div className="text-neutral-600 text-xs mb-5">{p.perDay}</div>
                  <a href="tel:7668570551" className="block text-center bg-orange-500/15 hover:bg-orange-500/25 border border-orange-500/20 text-orange-300 font-semibold py-3 rounded-xl transition-all">
                    Book Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interlinks */}
        <section className="py-16 px-4 relative">
          <div className="absolute inset-0 bg-neutral-900" />
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-2xl font-bold text-center mb-10">Related Itineraries</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: '5-Day Rajasthan Road Trip', href: '/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur', desc: 'Shorter Rajasthan circuit' },
                { title: 'Rajasthan Desert Circuit', href: '/rajasthan-desert-circuit-tour', desc: 'Jaisalmer-Jodhpur-Bikaner' },
                { title: '7-Day Himachal Tour', href: '/7-day-himachal-tour-by-car', desc: 'Shimla-Manali-Dharamshala' },
                { title: 'Golden Triangle with Driver', href: '/golden-triangle-english-speaking-driver', desc: 'Delhi-Agra-Jaipur with guide' },
                { title: 'India Road Trip Guide', href: '/india-road-trip-guide-for-tourists', desc: 'Essential road trip tips' },
                { title: 'Private Driver for Tourists', href: '/private-driver-hire-india', desc: 'English-speaking drivers' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-neutral-800/40 border border-neutral-700/30 p-5 rounded-2xl hover:border-orange-500/20 transition-all flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ChevronRight className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{link.title}</div>
                    <div className="text-xs text-neutral-500">{link.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 px-4 relative">
          <div className="absolute inset-0 bg-neutral-950" />
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-2xl font-bold text-center mb-3">Travel Guides & Resources</h2>
            <p className="text-neutral-500 text-center mb-10 text-sm">Helpful guides for planning your North India road trip</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: '5-Day Rajasthan Road Trip', href: '/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur', desc: 'Jaipur-Udaipur-Jodhpur circuit in 5 days' },
                { title: '7-Day Himachal Tour by Car', href: '/7-day-himachal-tour-by-car', desc: 'Shimla-Manali-Dharamshala hill station tour' },
                { title: 'Rajasthan Desert Circuit Tour', href: '/rajasthan-desert-circuit-tour', desc: 'Explore the Thar Desert and royal forts' },
                { title: 'Golden Triangle with Driver', href: '/golden-triangle-english-speaking-driver', desc: 'Delhi-Agra-Jaipur with English-speaking driver' },
                { title: 'India Road Trip Guide', href: '/india-road-trip-guide-for-tourists', desc: 'Everything you need to know about road trips in India' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group bg-neutral-800/40 border border-neutral-700/30 p-5 rounded-2xl hover:border-orange-500/20 transition-all">
                  <div className="font-semibold text-white text-sm group-hover:text-orange-300 transition-colors">{link.title}</div>
                  <div className="text-xs text-neutral-500 mt-1">{link.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-neutral-950" />
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="text-center mb-14">
              <span className="text-orange-400 text-sm font-medium tracking-widest uppercase">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-black mt-3">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {faqData.map((faq, i) => (
                <details key={i} className="group bg-neutral-900/40 border border-neutral-800/40 rounded-2xl overflow-hidden">
                  <summary className="p-6 font-semibold text-white cursor-pointer flex items-center justify-between hover:text-orange-200 transition-colors">
                    <span className="pr-4">{faq.question}</span>
                    <ChevronRight className="w-5 h-5 text-orange-500 group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 -mt-1">
                    <p className="text-neutral-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-700 via-red-700 to-amber-800" />
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-yellow-400/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-red-500/15 rounded-full blur-[100px]" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-5">
              <span className="text-transparent bg-gradient-to-r from-amber-200 via-yellow-100 to-orange-200 bg-clip-text">Begin Your Epic Journey</span>
            </h2>
            <p className="text-orange-100/60 text-lg mb-10">Sedan from ₹55,000 | SUV from ₹75,000 | Fully customizable</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:7668570551" className="inline-flex items-center gap-3 bg-black/20 hover:bg-black/30 backdrop-blur-sm border border-white/20 text-white font-bold px-10 py-4 rounded-2xl transition-all shadow-xl">
                <Phone className="w-5 h-5" /> Call 7668570551
              </a>
              <a href="https://wa.me/917668570551?text=Hi%20I%20want%20to%20book%2010-day%20North%20India%20road%20trip" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white hover:bg-orange-50 text-orange-900 font-bold px-10 py-4 rounded-2xl transition-all">
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
