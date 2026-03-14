import Link from 'next/link';
import { Phone, MapPin, Clock, Star, ChevronRight, Shield, Users, Calendar, Heart } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Uttarakhand Spiritual Circuit Tour by Car 2026 | Haridwar Rishikesh Badrinath | Triveni Cabs',
  description: 'Uttarakhand spiritual tour plan by car: Haridwar, Rishikesh, Devprayag, Chopta, Badrinath circuit. 7-8 day itinerary. Sedan ₹38,000, SUV ₹55,000. Call 7668570551.',
  keywords: 'uttarakhand spiritual tour plan by car, haridwar rishikesh tour, devprayag chopta badrinath tour, uttarakhand pilgrimage by car, char dham lite tour',
  authors: [{ name: 'Triveni Cabs' }],
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/uttarakhand-spiritual-circuit-tour' },
  openGraph: { title: 'Uttarakhand Spiritual Circuit Tour 2026 | Haridwar to Badrinath', description: 'Complete spiritual circuit: Haridwar, Rishikesh, Devprayag, Chopta, Badrinath.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/uttarakhand-spiritual-circuit-tour', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Uttarakhand Spiritual Circuit Tour 2026' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const itinerary = [
  { day: 1, title: 'Delhi to Haridwar', distance: '230 km', duration: '5 hrs', route: 'Delhi → Meerut → Roorkee → Haridwar', activities: ['Depart Delhi (6 AM)', 'Drive via Delhi-Haridwar Expressway', 'Check into hotel near Har Ki Pauri', 'Visit Mansa Devi Temple (ropeway available)', 'Evening Ganga Aarti at Har Ki Pauri — soul-stirring experience'], stay: 'Near Har Ki Pauri ghat', highlight: 'Ganga Aarti' },
  { day: 2, title: 'Haridwar to Rishikesh', distance: '25 km', duration: '45 min', route: 'Haridwar → Rishikesh', activities: ['Morning dip at Har Ki Pauri', 'Chandi Devi Temple visit', 'Drive to Rishikesh', 'Laxman Jhula and Ram Jhula bridges', 'Triveni Ghat for afternoon aarti', 'Beatles Ashram (Maharishi Mahesh Yogi\'s ashram)', 'Evening yoga session at Parmarth Niketan'], stay: 'Tapovan or Laxman Jhula area', highlight: 'Yoga Capital' },
  { day: 3, title: 'Rishikesh to Devprayag', distance: '75 km', duration: '2.5 hrs', route: 'Rishikesh → Shivpuri → Devprayag', activities: ['Optional: Morning river rafting at Shivpuri (16 km rapids)', 'Drive along the Ganges to Devprayag', 'Witness the sacred Sangam — confluence of Alaknanda and Bhagirathi rivers forming the Ganges', 'Raghunath Temple — ancient and serene', 'Danda Nagraja Temple', 'Meditate at the sangam point'], stay: 'Devprayag guesthouse or continue to Srinagar (Garhwal)', highlight: 'Sangam of Rivers' },
  { day: 4, title: 'Devprayag to Chopta', distance: '160 km', duration: '6 hrs', route: 'Devprayag → Srinagar → Rudraprayag → Ukhimath → Chopta', activities: ['Drive through Garhwal Himalayas', 'Stop at Rudraprayag — confluence of Alaknanda and Mandakini', 'Visit Koteshwar Mahadev Temple', 'Arrive Chopta — "Mini Switzerland of Uttarakhand"', 'Evening walk in the bugyals (alpine meadows)', 'Stargazing at 2,700m elevation (minimal light pollution)'], stay: 'Chopta camp or guesthouse', highlight: 'Mini Switzerland' },
  { day: 5, title: 'Chopta — Tungnath Trek', distance: '7 km trek', duration: 'Full day', route: 'Chopta → Tungnath → Chandrashila Peak', activities: ['Early morning trek to Tungnath Temple (3.5 km, 3,680m)', 'Tungnath — world\'s highest Shiva temple', 'Continue to Chandrashila Peak (1.5 km more, 4,000m) for panoramic Himalayan views', 'See Nanda Devi, Chaukhamba, Trishul, Kedarnath peaks', 'Descend back to Chopta by afternoon', 'Rest and evening bonfire at camp'], stay: 'Chopta (same camp)', highlight: 'Tungnath Temple Trek' },
  { day: 6, title: 'Chopta to Joshimath/Badrinath', distance: '150 km', duration: '6 hrs', route: 'Chopta → Gopeshwar → Chamoli → Joshimath → Badrinath', activities: ['Drive through stunning mountain roads', 'Visit Adi Shankaracharya Math at Joshimath', 'Continue to Badrinath (if road open)', 'Badrinath Temple darshan — one of Char Dhams', 'Tapt Kund hot springs at temple', 'Visit Mana Village — last Indian village before Tibet border'], stay: 'Badrinath or Joshimath', highlight: 'Badrinath Temple' },
  { day: 7, title: 'Badrinath to Rudraprayag', distance: '160 km', duration: '6 hrs', route: 'Badrinath → Joshimath → Karnaprayag → Rudraprayag', activities: ['Morning darshan at Badrinath (if not done Day 6)', 'Start return journey through mountains', 'Stop at Karnaprayag — another holy confluence', 'Reach Rudraprayag by evening', 'Visit Rudranath Temple'], stay: 'Rudraprayag', highlight: 'Return Journey' },
  { day: 8, title: 'Rudraprayag to Delhi', distance: '380 km', duration: '10 hrs', route: 'Rudraprayag → Rishikesh → Haridwar → Delhi', activities: ['Early start (5 AM)', 'Drive back via Rishikesh and Haridwar', 'Quick stop at Rishikesh for any missed sights', 'Lunch at Haridwar', 'Continue to Delhi via expressway', 'Arrive Delhi by evening (7-8 PM)'], stay: 'Arrive Delhi', highlight: 'Home' },
];

const faqData = [
  { question: 'What is the best time for the Uttarakhand spiritual circuit?', answer: 'May-June and September-October are ideal. Badrinath temple opens May-November. Chopta is beautiful year-round but the Tungnath trek is best May-June and September-October. Avoid July-August (heavy monsoon and landslides).' },
  { question: 'Is the Tungnath trek difficult?', answer: 'Tungnath is a moderate 3.5 km trek from Chopta (takes 2-3 hours up). Well-paved stone path. No technical climbing. Suitable for ages 10-65 with basic fitness. Chandrashila peak extension (1.5 km more) is steeper but manageable.' },
  { question: 'Can I skip the Chopta/Tungnath part?', answer: 'Yes! You can go directly from Devprayag/Rudraprayag to Badrinath, making it a 6-day trip. However, Tungnath and Chopta are highlights of this circuit — the trek to the world\'s highest Shiva temple is unforgettable.' },
  { question: 'What is the total cost of this spiritual circuit?', answer: 'Sedan: ₹38,000, SUV: ₹55,000, Innova Crysta: ₹65,000 for 8 days. This includes vehicle, fuel, driver, tolls, and parking. Hotels (₹1,000-3,000/night) and meals are separate.' },
  { question: 'Do I need any permits?', answer: 'No special permits needed for Indian citizens. The route to Badrinath is regulated — our driver will handle any checkpoints. Foreign nationals should carry passport copies. Badrinath temple is free; VIP darshan can be arranged.' },
  { question: 'Is this route safe for senior citizens?', answer: 'The driving route is safe with experienced drivers. Badrinath visit is manageable for seniors. However, the Tungnath trek at 3,680m elevation may be challenging for seniors. An alternative is to enjoy Chopta meadows without the trek.' },
];

export default function UttarakhandSpiritualCircuitPage() {
  const tripSchema = {
    "@context": "https://schema.org", "@type": "TouristTrip",
    "name": "Uttarakhand Spiritual Circuit Tour",
    "description": "7-8 day spiritual circuit: Haridwar, Rishikesh, Devprayag, Chopta, Tungnath, Badrinath",
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
    "offers": { "@type": "AggregateOffer", "lowPrice": "38000", "highPrice": "85000", "priceCurrency": "INR" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Uttarakhand Spiritual Circuit", "item": "https://www.trivenicabs.in/uttarakhand-spiritual-circuit-tour" }
    ]
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tripSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-50">
        <section className="relative bg-gradient-to-br from-orange-800 via-amber-700 to-yellow-800 text-white py-20 px-4">
          <div className="max-w-6xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4" /><span className="text-sm font-medium">8 Days | 5 Sacred Stops | Spiritual Awakening</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Uttarakhand Spiritual<br />Circuit Tour by Car</h1>
            <p className="text-xl text-orange-100 mb-4 max-w-3xl mx-auto">Haridwar &rarr; Rishikesh &rarr; Devprayag &rarr; Chopta &rarr; Badrinath — from the Ganga Aarti to the world&apos;s highest Shiva temple.</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">Sedan ₹38,000</span>
              <span className="bg-white/10 px-4 py-2 rounded-full text-sm">SUV ₹55,000</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:7668570551" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl transition-colors"><Phone className="w-5 h-5" /> Call 7668570551</a>
              <a href="https://wa.me/917668570551?text=Hi%20I%20want%20Uttarakhand%20spiritual%20circuit%20tour" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 px-8 py-4 rounded-xl transition-colors font-semibold">WhatsApp Us</a>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Day-by-Day Spiritual Circuit</h2>
            <div className="space-y-6">
              {itinerary.map((day) => (
                <div key={day.day} className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                  <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white p-5">
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div><span className="text-orange-200 text-sm">Day {day.day}</span><h3 className="text-xl font-bold">{day.title}</h3></div>
                      <div className="flex gap-3 text-sm">
                        <span className="flex items-center gap-1"><MapPin className="w-4 h-4" />{day.distance}</span>
                        <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{day.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-4 mb-3 text-sm text-gray-500">
                      <span>Route: {day.route}</span>
                      <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full text-xs font-bold">{day.highlight}</span>
                    </div>
                    <ul className="space-y-1.5 mb-3">
                      {day.activities.map((a, i) => (<li key={i} className="flex items-start gap-2 text-gray-700 text-sm"><ChevronRight className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />{a}</li>))}
                    </ul>
                    <div className="text-sm text-gray-600 pt-3 border-t border-gray-100"><strong>Stay:</strong> {day.stay}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-gray-900">Related Journeys</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'Religious Tours', href: '/religious-tours', desc: 'Char Dham, Vaishno Devi & more' },
                { title: '7-Day Himachal Tour', href: '/7-day-himachal-tour-by-car', desc: 'Shimla-Manali-Dharamshala' },
                { title: 'Weekend Getaways from Delhi', href: '/weekend-getaways-from-delhi-by-car', desc: 'Quick escapes from Delhi' },
                { title: 'Kashmir Road Trip', href: '/kashmir-road-trip-from-delhi', desc: 'Paradise on Earth' },
                { title: 'Chardham Yatra Cost Guide', href: '/blog/chardham-yatra-cost-by-car-2026', desc: 'Complete cost breakdown' },
                { title: 'Outstation Cabs', href: '/outstation-cabs', desc: 'All outstation services' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-orange-50 p-4 rounded-xl hover:bg-orange-100 transition-colors flex items-center gap-3">
                  <ChevronRight className="w-5 h-5 text-orange-600 flex-shrink-0" />
                  <div><div className="font-semibold text-gray-900 text-sm">{link.title}</div><div className="text-xs text-gray-500">{link.desc}</div></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, i) => (
                <details key={i} className="bg-white rounded-xl p-6 shadow-sm group">
                  <summary className="font-semibold text-gray-900 cursor-pointer flex items-center justify-between">{faq.question}<ChevronRight className="w-5 h-5 text-orange-600 group-open:rotate-90 transition-transform flex-shrink-0" /></summary>
                  <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* === RELATED PAGES === */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Related Pages</h2>
            <p className="text-gray-600 mb-6">Explore more spiritual tours and travel guides</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Kanwar Yatra Cab to Haridwar', url: '/kanwar-yatra-cab-haridwar', description: 'Reliable cab service for Kanwar Yatra pilgrimage' },
                { title: 'Prayagraj Sangam Tour', url: '/prayagraj-sangam-tour', description: 'Visit the sacred Triveni Sangam at Prayagraj' },
                { title: 'Ayodhya Ram Mandir Tour from Delhi', url: '/ayodhya-ram-mandir-tour-from-delhi', description: 'Sacred journey to Ram Mandir from Delhi' },
                { title: 'Haridwar Sightseeing Tour', url: '/sightseeing/haridwar', description: 'Ganga Aarti, Har Ki Pauri & Mansa Devi darshan' },
                { title: 'Weekend Getaways from Delhi', url: '/weekend-getaways-from-delhi-by-car', description: 'Top road trips and escapes from Delhi by car' },
                { title: 'India Road Trip Guide', url: '/india-road-trip-guide-for-tourists', description: 'Everything about road trips in India' },
              ].map((item, index) => (
                <Link key={index} href={item.url} className="group bg-white rounded-xl border border-gray-200 p-5 hover:border-orange-400 hover:shadow-lg transition-all duration-300">
                  <h3 className="text-gray-900 font-semibold group-hover:text-orange-600 transition-colors">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-gradient-to-r from-orange-800 to-amber-800 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Begin Your Spiritual Journey</h2>
            <p className="text-orange-100 text-lg mb-8">Sedan from ₹38,000 | SUV from ₹55,000 | Experienced mountain drivers</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:7668570551" className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl transition-colors"><Phone className="w-5 h-5" /> Call 7668570551</a>
              <a href="https://wa.me/917668570551?text=Hi%20I%20want%20Uttarakhand%20spiritual%20tour" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 font-bold px-8 py-4 rounded-xl transition-colors">WhatsApp Us</a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
