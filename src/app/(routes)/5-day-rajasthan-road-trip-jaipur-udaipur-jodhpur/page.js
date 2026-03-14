import Link from 'next/link';
import { Phone, MapPin, Clock, Star, ChevronRight, Shield, Users, Calendar } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: '5 Day Rajasthan Road Trip Jaipur Udaipur Jodhpur 2026 | Triveni Cabs',
  description: '5 day Rajasthan road trip itinerary: Jaipur, Udaipur, Jodhpur circuit. Day-wise plan, distances, hotel areas, costs. Sedan ₹28,000, SUV ₹40,000. Call 7668570551.',
  keywords: '5 day rajasthan road trip itinerary, jaipur udaipur jodhpur road trip, rajasthan 5 day tour by car, rajasthan road trip plan, rajasthan circuit tour',
  authors: [{ name: 'Triveni Cabs' }],
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur' },
  openGraph: { title: '5 Day Rajasthan Road Trip | Jaipur-Udaipur-Jodhpur Circuit', description: 'The perfect 5-day Rajasthan circuit with forts, palaces, and lake views.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: '5 Day Rajasthan Road Trip 2026 | Jaipur-Udaipur-Jodhpur' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const itinerary = [
  { day: 1, title: 'Arrive Jaipur — The Pink City', distance: '280 km from Delhi (if starting from Delhi)', duration: '4.5 hrs from Delhi', route: 'Delhi → Jaipur OR Fly into Jaipur',
    activities: ['Arrive Jaipur by noon', 'Amber Fort — majestic hilltop fortress (jeep ride up)', 'Jal Mahal photo stop — palace in the middle of a lake', 'Nahargarh Fort for sunset views over the city', 'Evening at Johari Bazaar — jewelry and textiles', 'Dinner at a rooftop restaurant overlooking Hawa Mahal'],
    stay: 'MI Road, C-Scheme, or near Amber Fort', highlight: 'Amber Fort' },
  { day: 2, title: 'Jaipur Sightseeing & Drive to Udaipur', distance: '395 km', duration: '6.5 hrs',
    route: 'Jaipur → Ajmer → Chittorgarh → Udaipur',
    activities: ['Morning: Hawa Mahal, City Palace, Jantar Mantar (all walkable cluster)', 'Depart for Udaipur (11 AM)', 'Quick stop at Kishangarh for marble Dumpling Point', 'Optional: Chittorgarh Fort detour (adds 2 hrs)', 'Arrive Udaipur by evening', 'Sunset at Fateh Sagar Lake'],
    stay: 'Lake Pichola area, Gangaur Ghat, or Hanuman Ghat', highlight: 'Lake Pichola' },
  { day: 3, title: 'Udaipur — The City of Lakes', distance: '30 km', duration: 'Full day',
    route: 'Udaipur city sightseeing',
    activities: ['City Palace — Rajasthan\'s largest palace complex', 'Boat ride on Lake Pichola to Jag Mandir island', 'Jagdish Temple — stunning Indo-Aryan architecture', 'Saheliyon Ki Bari (Garden of Maidens)', 'Fateh Sagar Lake and Nehru Garden', 'Evening: Bagore Ki Haveli folk dance show (7 PM)', 'Rooftop dinner with lake views'],
    stay: 'Udaipur (same hotel)', highlight: 'City Palace & Lake Cruise' },
  { day: 4, title: 'Udaipur to Jodhpur via Ranakpur', distance: '280 km', duration: '5.5 hrs',
    route: 'Udaipur → Ranakpur → Jodhpur',
    activities: ['Depart (8 AM)', 'Stop at Ranakpur Jain Temple — 1,444 marble pillars, no two alike', 'Drive through scenic Aravalli hills', 'Arrive Jodhpur by afternoon', 'Mehrangarh Fort — one of India\'s most magnificent', 'Walk through the Blue City lanes below the fort', 'Evening: Clock Tower market for spices and handicrafts', 'Try iconic Mirchi Bada and Makhaniya Lassi'],
    stay: 'Near Mehrangarh Fort, Clock Tower area, or Ratanada', highlight: 'Mehrangarh Fort' },
  { day: 5, title: 'Jodhpur & Return', distance: '340 km to Jaipur / 600 km to Delhi', duration: '5.5 hrs to Jaipur',
    route: 'Jodhpur → Jaipur/Delhi OR Jodhpur → Airport',
    activities: ['Morning: Umaid Bhawan Palace Museum', 'Mandore Gardens — ancient cenotaphs', 'Toorji Ka Jhalra stepwell', 'Depart for return journey', 'Option A: Drive to Jaipur (5.5 hrs) for flight home', 'Option B: Direct drive to Delhi (10 hrs — leave early)', 'Option C: Fly out from Jodhpur airport'],
    stay: 'Jaipur/Delhi (arrive home)', highlight: 'Return' },
];

const pricing = [
  { vehicle: 'Sedan (Dzire/Etios)', price: '₹28,000', perDay: '₹5,600/day', capacity: '3 pax', best: 'Couple or 2-3 friends' },
  { vehicle: 'SUV (Ertiga/Innova)', price: '₹40,000', perDay: '₹8,000/day', capacity: '5-6 pax', best: 'Family with kids' },
  { vehicle: 'Innova Crysta', price: '₹48,000', perDay: '₹9,600/day', capacity: '6 pax', best: 'Premium comfort' },
  { vehicle: 'Tempo Traveller', price: '₹65,000', perDay: '₹13,000/day', capacity: '10-12 pax', best: 'Large group' },
];

const faqData = [
  { question: 'Is 5 days enough for Jaipur, Udaipur, and Jodhpur?', answer: 'Yes, 5 days covers the highlights well. You get 1 full day each in Jaipur and Udaipur, a half day in Jodhpur plus the fort. For a more relaxed pace, consider our 7 or 10-day Rajasthan options.' },
  { question: 'What is the best time for this 5-day Rajasthan trip?', answer: 'October to March is ideal. November-February offers the best weather (15-25°C). Avoid April-June (extreme heat, 42°C+). September is post-monsoon and also pleasant with fewer crowds.' },
  { question: 'Can I start this trip from Delhi instead of Jaipur?', answer: 'Yes! Add Day 0 (Delhi to Jaipur, 4.5 hrs) and extend Day 5 for the return drive. Total becomes 6-7 days. Delhi add-on costs ₹5,000-7,000 extra depending on vehicle.' },
  { question: 'What about hotels — are they included?', answer: 'No, our pricing covers only the vehicle, fuel, driver, tolls, and parking. Heritage hotels in Rajasthan range from ₹2,000-8,000/night. We recommend booking ahead for October-March season.' },
  { question: 'Is a sedan sufficient for Rajasthan roads?', answer: 'Yes, all highways between Jaipur, Udaipur, and Jodhpur are well-maintained. Sedan (Dzire/Etios) is comfortable for 2-3 people. For families of 4+, SUV is recommended for extra space on long drives.' },
  { question: 'Can I add Jaisalmer to this itinerary?', answer: 'Yes! Jaisalmer is 280 km from Jodhpur (5 hrs). Adding Jaisalmer with a desert safari makes it a 7-day trip. Check our Rajasthan Desert Circuit page for the extended itinerary.' },
];

export default function RajasthanRoadTripPage() {
  const tripSchema = {
    "@context": "https://schema.org", "@type": "TouristTrip",
    "name": "5 Day Rajasthan Road Trip - Jaipur Udaipur Jodhpur",
    "description": "5-day Rajasthan circuit covering the Pink City, City of Lakes, and Blue City",
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
    "offers": { "@type": "AggregateOffer", "lowPrice": "28000", "highPrice": "65000", "priceCurrency": "INR" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "5 Day Rajasthan Road Trip", "item": "https://www.trivenicabs.in/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur" }
    ]
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-amber-50">
        <section className="relative bg-gradient-to-br from-rose-800 via-pink-700 to-amber-800 text-white py-20 px-4">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-4 py-2 rounded-full mb-6">
              <Calendar className="w-4 h-4" /><span className="text-sm font-medium">5 Days | 3 Royal Cities | 1 Unforgettable Trip</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">5-Day Rajasthan Road Trip<br />Jaipur &bull; Udaipur &bull; Jodhpur</h1>
            <p className="text-xl text-rose-100 mb-4 max-w-3xl mx-auto">The Pink City, the City of Lakes, and the Blue City — three of India&apos;s most iconic destinations in one perfect road trip.</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Sedan ₹28,000</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">SUV ₹40,000</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">1,100 km</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:7668570551" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl transition-colors"><Phone className="w-5 h-5" /> Call 7668570551</a>
              <a href="https://wa.me/917668570551?text=Hi%20I%20want%205-day%20Rajasthan%20road%20trip" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 px-8 py-4 rounded-xl transition-colors font-semibold">WhatsApp Us</a>
            </div>
          </div>
        </section>

        <section className="py-8 bg-white border-b">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-3 text-sm font-medium text-gray-700">
              {['Jaipur (Pink City)', 'Udaipur (City of Lakes)', 'Ranakpur', 'Jodhpur (Blue City)'].map((city, i, arr) => (
                <span key={i} className="flex items-center gap-2">
                  <span className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full">{city}</span>
                  {i < arr.length - 1 && <ChevronRight className="w-4 h-4 text-gray-400" />}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Day-by-Day Itinerary</h2>
            <div className="space-y-6">
              {itinerary.map((day) => (
                <div key={day.day} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-5">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div><span className="text-rose-200 text-sm">Day {day.day}</span><h3 className="text-xl font-bold">{day.title}</h3></div>
                      <div className="flex gap-3 text-sm">
                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{day.distance}</span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{day.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                      <span>Route: {day.route}</span>
                      <span className="bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full text-xs font-bold">{day.highlight}</span>
                    </div>
                    <ul className="space-y-1.5 mb-3">
                      {day.activities.map((a, i) => (<li key={i} className="flex items-start gap-2 text-gray-700 text-sm"><ChevronRight className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />{a}</li>))}
                    </ul>
                    <div className="text-sm text-gray-600 pt-3 border-t border-gray-100"><strong>Stay:</strong> {day.stay}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">5-Day Rajasthan Trip Pricing</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {pricing.map((p, i) => (
                <div key={i} className={`rounded-2xl p-6 border-2 ${i === 1 ? 'border-rose-500 bg-rose-50 shadow-xl' : 'border-gray-200 bg-white shadow-md'}`}>
                  {i === 1 && <span className="inline-block bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">Most Popular</span>}
                  <h3 className="font-bold text-gray-900">{p.vehicle}</h3>
                  <p className="text-sm text-gray-500 mb-3">{p.capacity} | {p.best}</p>
                  <div className="text-3xl font-bold text-rose-700">{p.price}</div>
                  <div className="text-sm text-gray-500 mb-4">{p.perDay}</div>
                  <a href="tel:7668570551" className="block text-center bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 rounded-xl transition-colors">Book Now</a>
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
                { title: 'Rajasthan Desert Circuit', href: '/rajasthan-desert-circuit-tour', desc: 'Jaisalmer-Jodhpur-Bikaner' },
                { title: '10-Day North India Road Trip', href: '/10-day-north-india-road-trip', desc: 'Complete Delhi-Jaisalmer circuit' },
                { title: 'Weekend Getaways from Jaipur', href: '/weekend-getaways-from-jaipur-by-car', desc: '20 destinations from Jaipur' },
                { title: 'Golden Triangle with Driver', href: '/golden-triangle-english-speaking-driver', desc: 'Delhi-Agra-Jaipur with guide' },
                { title: 'Jaipur Sightseeing', href: '/sightseeing/jaipur', desc: 'All Jaipur attractions' },
                { title: 'Private Driver for Tourists', href: '/private-driver-hire-india', desc: 'English-speaking chauffeurs' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-rose-600 flex-shrink-0" />
                  <div><div className="font-semibold text-gray-900 text-sm">{link.title}</div><div className="text-xs text-gray-500">{link.desc}</div></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-2 text-gray-900">Travel Guides & Resources</h2>
            <p className="text-gray-500 text-center mb-8 text-sm">Helpful guides for planning your Rajasthan road trip</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: '10-Day North India Road Trip', href: '/10-day-north-india-road-trip', desc: 'Epic road trip covering North India highlights' },
                { title: 'Rajasthan Desert Circuit Tour', href: '/rajasthan-desert-circuit-tour', desc: 'Explore the Thar Desert and royal forts' },
                { title: 'Golden Triangle with Driver', href: '/golden-triangle-english-speaking-driver', desc: 'Delhi-Agra-Jaipur with English-speaking driver' },
                { title: 'Weekend Getaways from Jaipur', href: '/weekend-getaways-from-jaipur-by-car', desc: 'Best road trips from the Pink City' },
                { title: 'Jaipur Sightseeing Tours', href: '/sightseeing/jaipur', desc: 'Explore the Pink City with local guides' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border">
                  <div className="font-semibold text-gray-900 text-sm group-hover:text-rose-600 transition-colors">{link.title}</div>
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
                <details key={i} className="bg-rose-50 rounded-xl p-6 group">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">{faq.question}<ChevronRight className="w-5 h-5 text-rose-600 group-open:rotate-90 transition-transform flex-shrink-0" /></summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-r from-rose-800 to-pink-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Book Your Rajasthan Adventure</h2>
            <p className="text-rose-100 text-lg mb-8">Sedan from ₹28,000 | SUV from ₹40,000 | 5 days of royal splendor</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:7668570551" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl transition-colors"><Phone className="w-5 h-5" /> Call 7668570551</a>
              <a href="https://wa.me/917668570551?text=Hi%20I%20want%205-day%20Rajasthan%20road%20trip" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 font-bold px-8 py-4 rounded-xl transition-colors">WhatsApp Us</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
