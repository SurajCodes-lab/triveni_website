import Link from 'next/link';
import { Phone, MapPin, Clock, Star, ChevronRight, Shield, Users, Calendar } from '@/components/ui/icons';

export const metadata = {
  title: 'Golden Triangle Tour with English Speaking Driver 2026 | Delhi Agra Jaipur | Triveni Cabs',
  description: 'Golden Triangle tour (Delhi-Agra-Jaipur) with English-speaking chauffeur. 3/4/5 day options from $135. Taj Mahal, Amber Fort, India Gate. Trusted by 1500+ tourists.',
  keywords: 'golden triangle tour english speaking driver, delhi agra jaipur tour with driver, golden triangle private tour, english speaking chauffeur india',
  authors: [{ name: 'Triveni Cabs' }],
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/golden-triangle-english-speaking-driver' },
  openGraph: { title: 'Golden Triangle Tour with English Speaking Driver 2026', description: 'Delhi-Agra-Jaipur private tour with English-speaking chauffeur. 3/4/5 day options.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/golden-triangle-english-speaking-driver', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Golden Triangle English Speaking Driver Tour 2026' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const tourOptions = [
  {
    days: 3, title: '3-Day Golden Triangle Express',
    itinerary: [
      { day: 1, desc: 'Delhi sightseeing: India Gate, Qutub Minar, Humayun\'s Tomb, Red Fort, Chandni Chowk' },
      { day: 2, desc: 'Delhi to Agra (3.5 hrs). Taj Mahal sunrise, Agra Fort, Mehtab Bagh. Drive to Jaipur (4 hrs)' },
      { day: 3, desc: 'Jaipur: Amber Fort, Hawa Mahal, City Palace, Jantar Mantar. Return to Delhi (4.5 hrs)' },
    ],
    sedanINR: '₹11,500', suvINR: '₹16,500', sedanUSD: '$135', suvUSD: '$195',
    distance: '750 km total',
  },
  {
    days: 4, title: '4-Day Golden Triangle Classic',
    itinerary: [
      { day: 1, desc: 'Delhi sightseeing: Old Delhi (Red Fort, Jama Masjid, Chandni Chowk) + New Delhi (India Gate, Parliament, Qutub Minar)' },
      { day: 2, desc: 'Delhi to Agra (3.5 hrs). Taj Mahal, Agra Fort, Itmad-ud-Daulah (Baby Taj), Mehtab Bagh sunset' },
      { day: 3, desc: 'Agra to Jaipur (4 hrs) via Fatehpur Sikri. Afternoon: Nahargarh Fort sunset' },
      { day: 4, desc: 'Jaipur: Amber Fort, Hawa Mahal, City Palace, Jantar Mantar, Johari Bazaar. Drive to Delhi (4.5 hrs)' },
    ],
    sedanINR: '₹15,000', suvINR: '₹22,000', sedanUSD: '$175', suvUSD: '$260',
    distance: '800 km total',
  },
  {
    days: 5, title: '5-Day Golden Triangle Luxury',
    itinerary: [
      { day: 1, desc: 'Delhi: Old Delhi walking tour, Red Fort, Jama Masjid, Chandni Chowk food trail, India Gate evening' },
      { day: 2, desc: 'Delhi: Humayun\'s Tomb, Qutub Minar, Lotus Temple, Akshardham. Drive to Agra evening (3.5 hrs)' },
      { day: 3, desc: 'Agra: Sunrise Taj Mahal, Agra Fort, Itmad-ud-Daulah, Mehtab Bagh. Agra street food tour' },
      { day: 4, desc: 'Agra to Jaipur (4 hrs) via Fatehpur Sikri. Afternoon: Nahargarh Fort, Albert Hall Museum' },
      { day: 5, desc: 'Jaipur: Amber Fort, City Palace, Jantar Mantar, Hawa Mahal, bazaar shopping. Drive to Delhi' },
    ],
    sedanINR: '₹19,000', suvINR: '₹27,500', sedanUSD: '$225', suvUSD: '$325',
    distance: '850 km total',
  },
];

const faqData = [
  { question: 'What makes your Golden Triangle tour different from group tours?', answer: 'Our tour is completely private — just you, your travel companions, and your English-speaking driver. No fixed schedule, no waiting for groups, no rushed visits. You control the pace. Want to spend 3 hours at the Taj Mahal? No problem. Want to stop for street food? Your driver will find the best spots.' },
  { question: 'Does the driver also act as a guide?', answer: 'The driver provides general information about destinations and helps with navigation, restaurant choices, and cultural tips. For detailed historical commentary, we recommend hiring a certified guide at each monument (₹500-1,500 per site, we can arrange). Many tourists enjoy the driver\'s local knowledge alone.' },
  { question: 'What time should I visit the Taj Mahal?', answer: 'Sunrise (gate opens at 6 AM) is the best time — fewer crowds, soft golden light, and cooler temperatures. Our driver will pick you up from your hotel at 5:30 AM. Friday is closed for visitors. Sunset from Mehtab Bagh (free entry) is also spectacular.' },
  { question: 'Can I customize the itinerary?', answer: 'Yes! Want to add Mathura-Vrindavan, skip Delhi sightseeing, spend an extra night in Jaipur, or add Ranthambore for a tiger safari? We customize everything. Share your preferences via WhatsApp and we will create your perfect itinerary.' },
  { question: 'Is the Golden Triangle suitable for solo female travelers?', answer: 'Yes, absolutely. India\'s Golden Triangle is well-touristed and safe. Our verified drivers are professional and respectful. We serve many solo female travelers from around the world. 24/7 support line adds an extra safety layer.' },
  { question: 'What about monument entry fees?', answer: 'Entry fees are NOT included in our car hire price (they are paid directly at each monument). Taj Mahal: ₹1,100 for foreigners ($13). Amber Fort: ₹550 ($6.50). Qutub Minar: ₹600 ($7). Total monument fees for the full Golden Triangle: approximately ₹4,000-5,000 ($47-59) per person.' },
];

export default function GoldenTriangleEnglishDriverPage() {
  const tourSchema = {
    "@context": "https://schema.org", "@type": "TouristTrip",
    "name": "Golden Triangle Tour with English Speaking Driver",
    "description": "Private Delhi-Agra-Jaipur tour with English-speaking chauffeur. 3, 4, or 5 day options.",
    "touristType": "International Tourists",
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" },
    "offers": { "@type": "AggregateOffer", "lowPrice": "135", "highPrice": "325", "priceCurrency": "USD" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Private Driver Hire", "item": "https://www.trivenicabs.in/private-driver-hire-india" },
      { "@type": "ListItem", "position": 3, "name": "Golden Triangle Tour", "item": "https://www.trivenicabs.in/golden-triangle-english-speaking-driver" }
    ]
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(tourSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-stone-950">
        {/* Hero */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-amber-950/30 to-stone-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange-500/8 via-transparent to-transparent" />
          <div className="absolute top-20 right-20 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] animate-pulse" />
          <div className="absolute bottom-20 left-20 w-[280px] h-[280px] bg-orange-500/8 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251,191,36,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />

          <div className="max-w-7xl mx-auto px-4 py-20 relative z-10 w-full">
            <nav className="flex items-center gap-2 text-sm text-stone-500 mb-8">
              <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/private-driver-hire-india" className="hover:text-amber-400 transition-colors">Private Driver</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-amber-400">Golden Triangle Tour</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-xl px-6 py-3 rounded-full border border-amber-500/30">
                  <Star className="w-5 h-5 text-amber-400" />
                  <span className="text-amber-300 font-bold text-sm tracking-wider uppercase">1,500+ Happy International Tourists</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1]">
                  Golden Triangle Tour
                  <span className="block mt-2 text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text">
                    English Speaking Driver
                  </span>
                </h1>

                <p className="text-xl text-stone-300 max-w-lg leading-relaxed">
                  Delhi &bull; Agra &bull; Jaipur — India&apos;s most iconic circuit with your personal English-speaking chauffeur. Taj Mahal, Amber Fort, India Gate and more.
                </p>

                <div className="flex flex-wrap gap-3">
                  {['3/4/5 Day Options', 'From $135 (Sedan)', '100% Private Tour'].map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full text-sm text-stone-300 border border-white/10 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="tel:+917668570551" className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-black px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all duration-300">
                    <Phone className="w-5 h-5" /> +91-7668570551
                  </a>
                  <a href="https://wa.me/917668570551?text=Hello%20I%20want%20Golden%20Triangle%20tour%20with%20English%20speaking%20driver" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl text-white px-8 py-5 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Route Map Card */}
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-3xl" />
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-amber-400" /> The Golden Triangle Route
                    </h3>
                    <div className="space-y-4">
                      {[
                        { city: 'Delhi', highlights: 'India Gate, Red Fort, Qutub Minar, Chandni Chowk', icon: '1' },
                        { city: 'Agra', highlights: 'Taj Mahal, Agra Fort, Baby Taj, Mehtab Bagh', icon: '2' },
                        { city: 'Jaipur', highlights: 'Amber Fort, Hawa Mahal, City Palace, Bazaars', icon: '3' },
                      ].map((stop, i) => (
                        <div key={i} className="flex gap-4 items-start">
                          <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center text-black font-black text-sm flex-shrink-0 shadow-lg shadow-amber-500/25">{stop.icon}</div>
                          <div className="flex-1 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                            <div className="font-bold text-white">{stop.city}</div>
                            <div className="text-sm text-stone-400">{stop.highlights}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-4 text-sm text-stone-400">
                      <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-amber-400" /> 750-850 km</span>
                      <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-amber-400" /> 3-5 days</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-6 bg-stone-900/50 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
              {[
                { icon: Shield, text: 'Verified Drivers', color: 'text-green-400' },
                { icon: Star, text: 'English Speaking', color: 'text-amber-400' },
                { icon: Clock, text: '24/7 Support', color: 'text-cyan-400' },
                { icon: Users, text: 'Private Tour', color: 'text-orange-400' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-stone-300 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tour Options */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[200px]" />
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-6 py-3 rounded-full mb-6 border border-amber-500/30">
                <Calendar className="w-5 h-5 text-amber-400" />
                <span className="text-amber-300 font-semibold text-sm tracking-wider uppercase">Choose Your Package</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Golden Triangle <span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text">Packages</span>
              </h2>
            </div>

            <div className="space-y-8">
              {tourOptions.map((tour) => (
                <div key={tour.days} className={`relative bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border transition-all duration-500 hover:-translate-y-1 ${
                  tour.days === 4 ? 'border-amber-500/50 shadow-2xl shadow-amber-500/10' : 'border-white/10 hover:border-amber-500/30'
                }`}>
                  {tour.days === 4 && (
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-black text-center py-2.5 font-black text-sm tracking-wider">MOST POPULAR CHOICE</div>
                  )}
                  <div className="p-8">
                    <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
                      <div>
                        <h3 className="text-2xl font-black text-white">{tour.title}</h3>
                        <p className="text-sm text-stone-500 mt-1 flex items-center gap-1.5">
                          <MapPin className="w-4 h-4 text-amber-400" /> {tour.distance}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-stone-400 mb-1">Sedan / SUV</div>
                        <div className="font-black text-amber-400 text-lg">{tour.sedanUSD} / {tour.suvUSD}</div>
                        <div className="text-xs text-stone-500">{tour.sedanINR} / {tour.suvINR}</div>
                      </div>
                    </div>

                    {/* Timeline */}
                    <div className="space-y-4">
                      {tour.itinerary.map((item) => (
                        <div key={item.day} className="flex gap-4 items-start">
                          <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 text-black rounded-xl flex items-center justify-center font-black text-sm flex-shrink-0 shadow-lg shadow-amber-500/25">
                            D{item.day}
                          </div>
                          <div className="flex-1 bg-white/5 rounded-xl p-4 border border-white/5">
                            <p className="text-stone-300 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap gap-4">
                      <a href={`https://wa.me/917668570551?text=Hi%20I%20want%20${tour.days}-day%20Golden%20Triangle%20tour`} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold px-6 py-3.5 rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all">
                        Book {tour.days}-Day Tour
                      </a>
                      <a href="tel:+917668570551" className="bg-white/5 backdrop-blur-xl text-white font-semibold px-6 py-3.5 rounded-xl border border-white/10 hover:bg-amber-500/10 hover:border-amber-500/30 transition-all">
                        Call for Details
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 px-4 bg-stone-900/30 relative overflow-hidden">
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[150px]" />
          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white">
                What Is <span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text">Included</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 backdrop-blur-xl rounded-2xl p-8 border border-emerald-500/20">
                <h3 className="font-black text-emerald-400 mb-6 text-lg flex items-center gap-2">
                  <Shield className="w-5 h-5" /> Included in Price
                </h3>
                <ul className="space-y-3">
                  {['AC vehicle (Sedan or SUV)', 'English-speaking chauffeur', 'Fuel, all tolls & parking', 'Driver meals & accommodation', 'Airport/hotel pickup & drop', 'Bottled water in the car', 'Flexible itinerary changes', '24/7 customer support'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-stone-300 text-sm">
                      <div className="w-5 h-5 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <ChevronRight className="w-3 h-3 text-emerald-400" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-red-500/10 to-rose-500/10 backdrop-blur-xl rounded-2xl p-8 border border-red-500/20">
                <h3 className="font-black text-red-400 mb-6 text-lg flex items-center gap-2">
                  <Star className="w-5 h-5" /> Not Included
                </h3>
                <ul className="space-y-3">
                  {['Hotel accommodation', 'Meals (except driver)', 'Monument entry tickets', 'Personal shopping', 'Tour guide at monuments', 'Travel insurance', 'Visa fees', 'Camera/video permits'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-stone-300 text-sm">
                      <div className="w-5 h-5 bg-red-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <ChevronRight className="w-3 h-3 text-red-400" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-white">More for Tourists</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'Private Taj Mahal Tour', href: '/taj-mahal-private-tour-from-delhi', desc: 'Premium Taj experience' },
                { title: 'Hire Driver in India', href: '/private-driver-hire-india', desc: 'All India car hire service' },
                { title: 'India Road Trip Guide', href: '/india-road-trip-guide-for-tourists', desc: 'Essential travel tips' },
                { title: 'Safe Travel India', href: '/safe-travel-india-for-tourists', desc: 'Safety guide for tourists' },
                { title: '10-Day North India Trip', href: '/10-day-north-india-road-trip', desc: 'Extended India circuit' },
                { title: '5-Day Rajasthan Trip', href: '/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur', desc: 'Royal Rajasthan circuit' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-white/5 backdrop-blur-xl p-4 rounded-xl border border-white/10 hover:border-amber-500/30 hover:bg-amber-500/5 transition-all flex items-center gap-3">
                  <div className="w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ChevronRight className="w-4 h-4 text-amber-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{link.title}</div>
                    <div className="text-xs text-stone-500">{link.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[200px]" />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Frequently Asked
                <span className="block text-transparent bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text">Questions</span>
              </h2>
            </div>
            <div className="space-y-4">
              {faqData.map((faq, i) => (
                <details key={i} className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-amber-500/20 transition-all group">
                  <summary className="font-semibold text-white cursor-pointer flex items-center justify-between p-6">
                    {faq.question}
                    <ChevronRight className="w-5 h-5 text-amber-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <p className="px-6 pb-6 text-stone-400 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-amber-950/40 to-stone-900" />
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/15 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251,191,36,0.3) 1px, transparent 0)`,
            backgroundSize: '30px 30px'
          }} />

          <div className="relative z-10 max-w-4xl mx-auto px-4 py-24 text-center">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Book Your Golden
              <span className="block text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text">Triangle Tour</span>
            </h2>
            <p className="text-stone-300 text-xl mb-10">From $135 (3 days) to $325 (5 days). Private car, English-speaking driver.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+917668570551" className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold px-8 py-5 rounded-2xl text-lg shadow-2xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all duration-300">
                <Phone className="w-5 h-5" /> +91-7668570551
              </a>
              <a href="https://wa.me/917668570551?text=Hello%20I%20want%20Golden%20Triangle%20tour" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 hover:border-white/40 text-white font-bold px-8 py-5 rounded-2xl text-lg transition-all duration-300">
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
