import Link from 'next/link';
import { Phone, MapPin, Clock, Star, ChevronRight, Shield, Users, Calendar } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: '7 Day Himachal Pradesh Tour Plan by Car 2026 | Shimla Manali Dharamshala | Triveni Cabs',
  description: '7 day Himachal Pradesh tour plan by car covering Shimla, Manali, Dharamshala & Dalhousie. Day-wise itinerary, distances, hotel areas, costs. Sedan ₹35,000, SUV ₹50,000. Call 7668570551.',
  keywords: '7 day himachal pradesh tour plan by car, himachal tour itinerary, shimla manali tour by car, himachal road trip, himachal pradesh tour package by car',
  authors: [{ name: 'Triveni Cabs' }],
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/7-day-himachal-tour-by-car' },
  openGraph: {
    title: '7 Day Himachal Pradesh Tour by Car 2026 | Complete Itinerary',
    description: 'Shimla, Manali, Dharamshala, Dalhousie - complete 7-day road trip plan with distances, stays & costs.',
    type: 'website', locale: 'en_IN',
    url: 'https://www.trivenicabs.in/7-day-himachal-tour-by-car',
    siteName: 'Triveni Cabs',
  },
  twitter: { card: 'summary_large_image', title: '7 Day Himachal Tour by Car 2026 | Shimla-Manali-Dharamshala' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const itinerary = [
  {
    day: 1, title: 'Delhi to Shimla', distance: '350 km', duration: '7-8 hrs',
    route: 'Delhi → Karnal → Chandigarh → Kalka → Shimla',
    activities: ['Depart Delhi early morning (5-6 AM)', 'Breakfast stop at Murthal or Karnal (famous paranthas)', 'Drive through scenic Kalka-Shimla highway', 'Check into hotel near Mall Road area', 'Evening walk on Mall Road and The Ridge'],
    stay: 'Mall Road area, Lakkar Bazaar, or Sanjauli',
    tips: 'Book hotel near Mall Road for easy walking access. Parking is scarce — our driver will handle it.',
    elevation: '2,205 m'
  },
  {
    day: 2, title: 'Shimla Sightseeing & Kufri', distance: '20 km', duration: 'Full day',
    route: 'Shimla → Kufri → Shimla',
    activities: ['Visit Jakhoo Temple (Hanuman statue with city views)', 'Kufri excursion — horse riding, yak rides, mini zoo', 'Walk through Shimla Heritage Zone', 'Visit Christ Church and Gaiety Theatre', 'Shopping at Lakkar Bazaar (wooden crafts)'],
    stay: 'Shimla (same hotel)',
    tips: 'Kufri is best visited before 11 AM to avoid crowds. Carry warm layers even in summer.',
    elevation: '2,622 m (Kufri)'
  },
  {
    day: 3, title: 'Shimla to Manali', distance: '260 km', duration: '7-8 hrs',
    route: 'Shimla → Mandi → Kullu → Manali',
    activities: ['Early departure (7 AM) for scenic mountain drive', 'Stop at Sundernagar Lake for photos', 'Lunch in Mandi — gateway to Kullu Valley', 'Drive through apple orchards in Kullu Valley', 'Check into hotel in Old Manali or Mall Road area'],
    stay: 'Old Manali (budget/backpacker), Mall Road (mid-range), or Solang Road (luxury)',
    tips: 'This is a long mountain drive. Take breaks every 2 hours. Road passes through stunning river valleys.',
    elevation: '2,050 m'
  },
  {
    day: 4, title: 'Manali Sightseeing', distance: '40 km', duration: 'Full day',
    route: 'Manali local sightseeing',
    activities: ['Hadimba Devi Temple (ancient cedar wood temple)', 'Solang Valley — paragliding, zorbing, rope way', 'Vashisht Hot Springs and Temple', 'Manu Temple and Old Manali cafes', 'Evening at Mall Road — shopping and food'],
    stay: 'Manali (same hotel)',
    tips: 'Solang Valley activities cost ₹500-2,500 each. Negotiate prices. Rohtang Pass excursion can be added as an optional Day 4.5 (permits required, ₹500-800 extra).',
    elevation: '2,050 m'
  },
  {
    day: 5, title: 'Manali to Dharamshala', distance: '235 km', duration: '6-7 hrs',
    route: 'Manali → Mandi → Palampur → Dharamshala',
    activities: ['Depart after breakfast (8 AM)', 'Drive through Mandi and Jogindernagar', 'Optional stop at Baijnath Temple (ancient Shiva temple)', 'Tea gardens of Palampur (photo stops)', 'Reach McLeodGanj by evening, explore local market'],
    stay: 'McLeodGanj (backpacker area) or Dharamshala main town (family stays)',
    tips: 'McLeodGanj is 10 km above Dharamshala. Stay in McLeodGanj for the best experience — Tibetan culture, cafes, and monastery access.',
    elevation: '1,475 m (Dharamshala), 1,770 m (McLeodGanj)'
  },
  {
    day: 6, title: 'Dharamshala & McLeodGanj', distance: '30 km', duration: 'Full day',
    route: 'Dharamshala → McLeodGanj → Bhagsu → Dharamshala',
    activities: ['Dalai Lama Temple Complex (Tsuglagkhang)', 'Bhagsu Nag Temple and Bhagsu Waterfall', 'Tibetan Museum and Norbulingka Institute', 'HPCA Cricket Stadium (most scenic cricket ground)', 'Naddi viewpoint for Dhauladhar mountain views', 'Tibetan food — momos, thukpa, tingmo at local cafes'],
    stay: 'Dharamshala/McLeodGanj (same hotel)',
    tips: 'Carry an umbrella — Dharamshala gets unexpected showers. The Triund trek (9 km) can be attempted as a sunrise trek if you have the energy.',
    elevation: '1,770 m'
  },
  {
    day: 7, title: 'Dharamshala to Delhi', distance: '475 km (direct)', duration: '9-10 hrs',
    route: 'Dharamshala → Pathankot → Jalandhar → Karnal → Delhi OR via Dalhousie',
    activities: ['Option A: Direct return to Delhi via Pathankot highway', 'Option B: Quick Dalhousie detour (add 3-4 hrs) — visit Khajjiar (Mini Switzerland)', 'Lunch stop at Jalandhar or Karnal', 'Arrive Delhi by late evening (8-9 PM)'],
    stay: 'Reach Delhi',
    tips: 'If taking the Dalhousie detour, leave by 5 AM. Khajjiar meadow is worth the detour if time permits. For a more relaxed trip, extend to 8 days.',
    elevation: 'N/A'
  },
];

const pricing = [
  { vehicle: 'Swift Dzire / Etios (Sedan)', capacity: '3 passengers', price: '₹35,000', perDay: '₹5,000/day', best: 'Couple or small family' },
  { vehicle: 'Ertiga / Innova (SUV)', capacity: '5-6 passengers', price: '₹50,000', perDay: '₹7,143/day', best: 'Family with kids' },
  { vehicle: 'Innova Crysta (Premium)', capacity: '6 passengers', price: '₹60,000', perDay: '₹8,571/day', best: 'Comfort-seeking families' },
  { vehicle: 'Tempo Traveller (12-seater)', capacity: '10-12 passengers', price: '₹80,000', perDay: '₹11,429/day', best: 'Groups & joint families' },
];

const faqData = [
  { question: 'What is the total cost of a 7-day Himachal tour by car from Delhi?', answer: 'Sedan (Dzire/Etios) costs approximately ₹35,000, SUV (Innova/Ertiga) costs ₹50,000, and Innova Crysta costs ₹60,000. This includes vehicle, fuel, driver allowance, tolls, and parking. Hotels, meals, and activity costs are separate.' },
  { question: 'What is included in the cab cost?', answer: 'Our cab pricing includes the vehicle, fuel, driver daily allowance (₹300-400/day), all tolls, parking charges, and state entry permits. Driver accommodation is handled by us. You only need to plan your own hotel and meals.' },
  { question: 'Is this route safe during monsoon (July-September)?', answer: 'Monsoon season brings landslide risks on Shimla-Manali and Manali-Dharamshala routes. We recommend avoiding July-August. If you must travel, our experienced mountain drivers know alternate routes and we monitor road conditions 24/7.' },
  { question: 'Can I customize this 7-day itinerary?', answer: 'Absolutely! You can add Dalhousie, extend to Spiti Valley, add Khajjiar, skip a city, or spend extra days. Call us at 7668570551 to discuss your perfect itinerary. We have done hundreds of custom Himachal trips.' },
  { question: 'Which vehicle is recommended for Himachal mountain roads?', answer: 'SUV (Innova or Ertiga) is strongly recommended for the Shimla-Manali stretch due to mountain roads. Sedan works for the Shimla-only or Dharamshala-only trips but has limited ground clearance on rough patches.' },
  { question: 'What is the best time to do a 7-day Himachal tour?', answer: 'March-June for pleasant weather and snow in higher areas. September-November for clear skies and autumn colors. December-February for snowfall lovers (roads may close temporarily). Avoid July-August monsoon season.' },
  { question: 'Do I need to book hotels in advance?', answer: 'Yes, especially during peak season (May-June, Dec-Jan). We can recommend budget to luxury hotels in each city. Book at least 2-3 weeks in advance for popular areas like Mall Road Shimla and Old Manali.' },
  { question: 'Can I extend to 8-10 days?', answer: 'Yes! Common extensions include adding Dalhousie + Khajjiar (1-2 days), Rohtang Pass excursion (1 day), Kasol-Manikaran (1 day), or spending extra time in Manali. Additional days cost ₹5,000-8,500/day depending on vehicle.' },
];

export default function HimachalTourPage() {
  const tripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "7 Day Himachal Pradesh Tour by Car",
    "description": "Complete 7-day road trip covering Shimla, Manali, and Dharamshala with private car and driver",
    "itinerary": {
      "@type": "ItemList",
      "numberOfItems": 7,
      "itemListElement": itinerary.map((day, i) => ({
        "@type": "ListItem", "position": i + 1, "name": day.title
      }))
    },
    "touristType": "Road Trip Travelers",
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
    "offers": { "@type": "AggregateOffer", "lowPrice": "35000", "highPrice": "80000", "priceCurrency": "INR" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "7 Day Himachal Tour", "item": "https://www.trivenicabs.in/7-day-himachal-tour-by-car" }
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

      <div className="min-h-screen bg-green-950 text-white">
        {/* Hero - Pine Forest with Gradient Mesh */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-emerald-950 to-teal-950" />
          {/* Pine tree pattern */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='100' viewBox='0 0 80 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10L55 35L50 35L60 55L52 55L65 80L15 80L28 55L20 55L30 35L25 35Z' fill='%2322c55e' opacity='0.6'/%3E%3Crect x='37' y='80' width='6' height='10' fill='%2322c55e' opacity='0.4'/%3E%3C/svg%3E")` }} />
          <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-emerald-500/10 rounded-full blur-[160px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-teal-500/8 rounded-full blur-[140px]" />

          <div className="max-w-7xl mx-auto px-4 relative z-10 py-20 w-full">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-emerald-400 to-transparent" />
                <span className="text-emerald-400 text-sm font-medium tracking-widest uppercase">7 Days | 4 Cities | 1,400+ km</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[0.85]">
                <span className="text-white">Himachal</span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-emerald-300 via-green-200 to-teal-300 bg-clip-text">Pradesh</span>
                <br />
                <span className="text-green-600/50 text-3xl md:text-4xl font-light">7-Day Tour by Car</span>
              </h1>

              <p className="text-green-300/40 text-lg mb-8 max-w-xl leading-relaxed">
                Shimla, Manali, Dharamshala — the definitive Himachal circuit. Snow peaks, cedar forests, Tibetan culture, and mountain adventures.
              </p>

              {/* Price badges */}
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { label: 'Sedan', price: '₹35,000' },
                  { label: 'SUV', price: '₹50,000' },
                  { label: 'Crysta', price: '₹60,000' },
                ].map((p, i) => (
                  <div key={i} className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl px-5 py-2.5 backdrop-blur-sm">
                    <span className="text-emerald-400/60 text-xs uppercase tracking-wider">{p.label}</span>
                    <div className="text-emerald-300 font-bold text-lg">{p.price}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="tel:7668570551" className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-400 hover:to-green-400 text-black font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-emerald-500/20">
                  <Phone className="w-5 h-5" /> Call 7668570551
                </a>
                <a href="https://wa.me/917668570551?text=Hi%20I%20want%20to%20book%207-day%20Himachal%20tour%20by%20car" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-2xl transition-all duration-300 font-semibold">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Route Overview - Horizontal journey strip */}
        <section className="py-6 relative border-y border-green-800/30">
          <div className="absolute inset-0 bg-green-900/20 backdrop-blur-sm" />
          <div className="max-w-6xl mx-auto px-4 relative z-10 overflow-x-auto">
            <div className="flex items-center gap-2 text-sm font-medium min-w-max py-2">
              {['Delhi', 'Shimla', 'Kufri', 'Manali', 'Dharamshala', 'McLeodGanj', 'Delhi'].map((city, i, arr) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="bg-emerald-500/15 text-emerald-300 px-4 py-1.5 rounded-full border border-emerald-500/20">{city}</span>
                  {i < arr.length - 1 && <div className="w-6 h-px bg-gradient-to-r from-emerald-500/40 to-emerald-500/10" />}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Day-by-Day Vertical Timeline */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-green-950 to-emerald-950" />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="text-emerald-400 text-sm font-medium tracking-widest uppercase">Your Journey</span>
              <h2 className="text-4xl md:text-5xl font-black mt-3">Day-by-Day Itinerary</h2>
            </div>

            <div className="relative">
              {/* Vertical timeline line */}
              <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/40 via-green-500/20 to-teal-500/40" />

              <div className="space-y-8">
                {itinerary.map((day) => (
                  <div key={day.day} className="relative pl-16 md:pl-20">
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-6 w-4 h-4 bg-emerald-500 rounded-full border-4 border-green-950 shadow-lg shadow-emerald-500/30 z-10" />
                    <div className="absolute left-2.5 md:left-4.5 -top-0.5 w-7 h-7 bg-emerald-500/20 rounded-full animate-ping opacity-20" />

                    <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 backdrop-blur-sm border border-green-700/20 rounded-3xl overflow-hidden hover:border-emerald-500/25 transition-all duration-500">
                      {/* Day header */}
                      <div className="p-6 border-b border-green-700/15">
                        <div className="flex items-center justify-between flex-wrap gap-3">
                          <div>
                            <div className="flex items-center gap-3 mb-1">
                              <span className="text-emerald-400 text-xs font-bold tracking-widest uppercase">Day {day.day}</span>
                              {day.elevation !== 'N/A' && (
                                <span className="text-green-500/40 text-xs">{day.elevation}</span>
                              )}
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-white">{day.title}</h3>
                          </div>
                          <div className="flex gap-3">
                            <div className="bg-emerald-500/10 rounded-lg px-3 py-1.5 text-xs">
                              <MapPin className="w-3 h-3 text-emerald-400 inline mr-1" /><span className="text-emerald-300">{day.distance}</span>
                            </div>
                            <div className="bg-emerald-500/10 rounded-lg px-3 py-1.5 text-xs">
                              <Clock className="w-3 h-3 text-emerald-400 inline mr-1" /><span className="text-emerald-300">{day.duration}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-green-300/30 text-sm mt-2">{day.route}</p>
                      </div>

                      {/* Day content */}
                      <div className="p-6">
                        <ul className="space-y-2 mb-5">
                          {day.activities.map((activity, i) => (
                            <li key={i} className="flex items-start gap-3 text-green-100/60 text-sm">
                              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0" />
                              {activity}
                            </li>
                          ))}
                        </ul>
                        <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-green-700/15">
                          <div className="bg-green-900/20 rounded-xl p-4">
                            <span className="text-emerald-400/50 text-[10px] uppercase tracking-widest">Where to Stay</span>
                            <p className="text-green-200/70 text-sm mt-1">{day.stay}</p>
                          </div>
                          <div className="bg-green-900/20 rounded-xl p-4">
                            <span className="text-emerald-400/50 text-[10px] uppercase tracking-widest">Pro Tip</span>
                            <p className="text-green-200/70 text-sm mt-1">{day.tips}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pricing - Glassmorphism Cards */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-emerald-950" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[200px]" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-14">
              <span className="text-emerald-400 text-sm font-medium tracking-widest uppercase">Transparent Pricing</span>
              <h2 className="text-3xl md:text-4xl font-black mt-3">7-Day Himachal Tour Pricing</h2>
              <p className="text-green-300/30 mt-3">All-inclusive: fuel, driver, tolls, parking & permits</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {pricing.map((p, i) => (
                <div key={i} className={`relative bg-white/5 backdrop-blur-xl border rounded-3xl p-6 transition-all duration-500 hover:scale-[1.02] ${i === 1 ? 'border-emerald-500/40 shadow-lg shadow-emerald-500/10' : 'border-white/10 hover:border-emerald-500/20'}`}>
                  {i === 1 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-green-500 text-black text-xs font-bold px-4 py-1 rounded-full">Most Popular</div>
                  )}
                  <h3 className="font-bold text-white text-sm mb-1">{p.vehicle}</h3>
                  <p className="text-green-300/30 text-xs mb-5">{p.capacity} | {p.best}</p>
                  <div className="text-3xl font-black text-transparent bg-gradient-to-r from-emerald-300 to-green-300 bg-clip-text mb-1">{p.price}</div>
                  <div className="text-green-400/40 text-xs mb-6">{p.perDay} approx</div>
                  <a href="tel:7668570551" className="block text-center bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/20 text-emerald-300 font-semibold py-3 rounded-xl transition-all">
                    Book Now
                  </a>
                </div>
              ))}
            </div>
            <p className="text-center text-green-300/20 text-sm mt-8">* Hotel, meals & activity costs not included. Custom itineraries available.</p>
          </div>
        </section>

        {/* Packing Checklist */}
        <section className="py-16 px-4 relative">
          <div className="absolute inset-0 bg-green-950" />
          <div className="max-w-4xl mx-auto relative z-10">
            <h2 className="text-3xl font-black text-center mb-10">Packing Checklist</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: 'Clothing', items: ['Warm jacket/fleece (even in summer)', 'Rain jacket/umbrella', 'Comfortable walking shoes', 'Light layers for daytime', 'Woolen cap and gloves (Dec-Feb)'] },
                { title: 'Essentials', items: ['Valid ID proof (Aadhar/Passport)', 'Power bank & car charger', 'Medicines (motion sickness, basic first aid)', 'Sunscreen & sunglasses', 'Cash (ATMs limited in some areas)'] },
              ].map((list, i) => (
                <div key={i} className="bg-green-900/20 backdrop-blur-sm border border-green-700/15 rounded-2xl p-7">
                  <h3 className="font-bold text-emerald-300 mb-5 text-lg">{list.title}</h3>
                  <ul className="space-y-3">
                    {list.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3 text-green-100/50 text-sm">
                        <div className="w-5 h-5 bg-emerald-500/15 rounded-md flex items-center justify-center flex-shrink-0">
                          <ChevronRight className="w-3 h-3 text-emerald-400" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interlinks */}
        <section className="py-16 px-4 relative">
          <div className="absolute inset-0 bg-emerald-950/50" />
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-2xl font-bold text-center mb-10">More Road Trip Itineraries</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'Spiti Valley Road Trip', href: '/spiti-valley-road-trip-from-delhi', desc: '10-day high-altitude adventure' },
                { title: '10-Day North India Trip', href: '/10-day-north-india-road-trip', desc: 'Delhi to Jaisalmer epic circuit' },
                { title: 'Kashmir Road Trip', href: '/kashmir-road-trip-from-delhi', desc: 'Srinagar, Gulmarg, Pahalgam' },
                { title: 'Weekend Getaways from Delhi', href: '/weekend-getaways-from-delhi-by-car', desc: '20 destinations from Delhi' },
                { title: 'Uttarakhand Spiritual Circuit', href: '/uttarakhand-spiritual-circuit-tour', desc: 'Haridwar-Rishikesh-Badrinath' },
                { title: 'Shimla Sightseeing', href: '/sightseeing/shimla', desc: 'All Shimla attractions' },
                { title: 'Outstation Cabs', href: '/outstation-cabs', desc: 'All outstation cab services' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-green-900/20 border border-green-700/15 p-5 rounded-2xl hover:bg-green-900/30 hover:border-emerald-500/20 transition-all duration-300 flex items-center gap-4">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ChevronRight className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{link.title}</div>
                    <div className="text-xs text-green-300/30 mt-0.5">{link.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 px-4 relative">
          <div className="absolute inset-0 bg-green-950" />
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-2xl font-bold text-center mb-3">Travel Guides & Resources</h2>
            <p className="text-green-300/30 text-center mb-10 text-sm">Helpful guides for planning your Himachal road trip</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: '10-Day North India Road Trip', href: '/10-day-north-india-road-trip', desc: 'Epic road trip covering North India highlights' },
                { title: 'Spiti Valley Road Trip', href: '/spiti-valley-road-trip-from-delhi', desc: 'High-altitude adventure to Spiti Valley' },
                { title: 'Weekend Getaways from Chandigarh', href: '/weekend-getaways-from-chandigarh-by-car', desc: 'Hill stations and escapes from Chandigarh' },
                { title: 'Kashmir Road Trip from Delhi', href: '/kashmir-road-trip-from-delhi', desc: 'Road trip to the paradise on earth' },
                { title: 'Shimla Sightseeing Tours', href: '/sightseeing/shimla', desc: 'Explore the Queen of Hills with local guides' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group bg-green-900/20 border border-green-700/15 p-5 rounded-2xl hover:border-emerald-500/20 transition-all">
                  <div className="font-semibold text-white text-sm group-hover:text-emerald-300 transition-colors">{link.title}</div>
                  <div className="text-xs text-green-300/30 mt-1">{link.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-green-950" />
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="text-center mb-14">
              <span className="text-emerald-400 text-sm font-medium tracking-widest uppercase">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-black mt-3">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {faqData.map((faq, i) => (
                <details key={i} className="group bg-green-900/15 backdrop-blur-sm border border-green-700/15 rounded-2xl overflow-hidden">
                  <summary className="p-6 font-semibold text-white cursor-pointer flex items-center justify-between hover:text-emerald-200 transition-colors">
                    <span className="pr-4">{faq.question}</span>
                    <ChevronRight className="w-5 h-5 text-emerald-500 group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 -mt-1">
                    <p className="text-green-200/40 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-800 via-green-800 to-teal-900" />
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-emerald-400/10 to-transparent" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-emerald-400/10 rounded-full blur-[130px]" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-5">
              <span className="text-transparent bg-gradient-to-r from-green-200 via-emerald-100 to-teal-200 bg-clip-text">Your Himachal Adventure Awaits</span>
            </h2>
            <p className="text-emerald-100/50 text-lg mb-10">Sedan from ₹35,000 | SUV from ₹50,000 | All-inclusive pricing</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:7668570551" className="inline-flex items-center gap-3 bg-black/20 hover:bg-black/30 backdrop-blur-sm border border-white/15 text-white font-bold px-10 py-4 rounded-2xl transition-all shadow-xl">
                <Phone className="w-5 h-5" /> Call 7668570551
              </a>
              <a href="https://wa.me/917668570551?text=Hi%20I%20want%20to%20book%207-day%20Himachal%20tour%20by%20car" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white hover:bg-emerald-50 text-green-900 font-bold px-10 py-4 rounded-2xl transition-all">
                WhatsApp Itinerary
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
