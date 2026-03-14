import Link from 'next/link';
import { Phone, MapPin, Clock, Star, ChevronRight, Shield, Users, Calendar, Heart } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Hire Car with Driver in India for Foreigners 2026 | English-Speaking Drivers | Triveni Cabs',
  description: 'Hire a car with English-speaking driver in India. Multi-day packages from $45/day. Golden Triangle, Rajasthan, Kerala circuits. Safe, reliable service for foreign tourists. Call +91-7668570551.',
  keywords: 'hire car with driver india for foreigners, private driver india, english speaking driver india, chauffeur hire india, india car rental with driver',
  authors: [{ name: 'Triveni Cabs' }],
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/private-driver-hire-india' },
  openGraph: { title: 'Hire Car with Driver in India | English-Speaking Chauffeurs', description: 'Private car with English-speaking driver from $45/day. Safe, reliable, trusted by 2000+ international tourists.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/private-driver-hire-india', siteName: 'Triveni Cabs' },
  twitter: { card: 'summary_large_image', title: 'Hire Private Driver in India for Foreign Tourists 2026' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const packages = [
  { name: 'Golden Triangle', duration: '3-5 Days', route: 'Delhi - Agra - Jaipur', sedanUSD: '$135-225', suvUSD: '$195-325', highlights: 'Taj Mahal, Amber Fort, India Gate', slug: '/golden-triangle-english-speaking-driver' },
  { name: 'Rajasthan Circuit', duration: '7-10 Days', route: 'Jaipur - Udaipur - Jodhpur - Jaisalmer', sedanUSD: '$315-450', suvUSD: '$455-650', highlights: 'Forts, palaces, desert safari', slug: '/10-day-north-india-road-trip' },
  { name: 'Himachal Adventure', duration: '7 Days', route: 'Shimla - Manali - Dharamshala', sedanUSD: '$315', suvUSD: '$455', highlights: 'Hill stations, temples, trekking', slug: '/7-day-himachal-tour-by-car' },
  { name: 'Kashmir Paradise', duration: '7-8 Days', route: 'Srinagar - Gulmarg - Pahalgam', sedanUSD: '$405', suvUSD: '$585', highlights: 'Dal Lake, meadows, snow peaks', slug: '/kashmir-road-trip-from-delhi' },
  { name: 'Spiritual Circuit', duration: '7-8 Days', route: 'Haridwar - Rishikesh - Badrinath', sedanUSD: '$340', suvUSD: '$495', highlights: 'Ganga Aarti, yoga, Himalayan temples', slug: '/uttarakhand-spiritual-circuit-tour' },
];

const pricing = [
  { vehicle: 'Sedan (Dzire/Etios)', capacity: '2-3 guests + luggage', perDay: '$45/day', perKm: '$0.11/km', best: 'Couples, solo travelers' },
  { vehicle: 'SUV (Innova/Ertiga)', capacity: '4-5 guests + luggage', perDay: '$65/day', perKm: '$0.14/km', best: 'Families, small groups' },
  { vehicle: 'Innova Crysta (Premium)', capacity: '4-6 guests + luggage', perDay: '$80/day', perKm: '$0.17/km', best: 'Comfort seekers' },
  { vehicle: 'Tempo Traveller', capacity: '8-12 guests', perDay: '$110/day', perKm: '$0.22/km', best: 'Tour groups' },
];

const trustFeatures = [
  { icon: Shield, title: 'Verified & Licensed', desc: 'All drivers are verified with background checks, commercial licenses, and years of experience' },
  { icon: Star, title: 'English-Speaking', desc: 'Drivers trained to communicate in English. Hindi, basic French, and German speakers available on request' },
  { icon: Users, title: '2000+ Tourists Served', desc: 'Trusted by travelers from USA, UK, Australia, Germany, France, and 40+ countries' },
  { icon: Clock, title: '24/7 Support', desc: 'English-speaking customer support available round the clock for any assistance' },
  { icon: Heart, title: 'Cultural Guide', desc: 'Drivers double as informal cultural guides — they know local customs, food spots, and hidden gems' },
  { icon: Calendar, title: 'Flexible Itinerary', desc: 'Change plans on the fly. No rigid schedules. Your driver adapts to your pace' },
];

const faqData = [
  { question: 'Is it safe to hire a private driver in India as a foreigner?', answer: 'Yes, absolutely. Hiring a private driver is the safest and most comfortable way to travel in India. Our drivers are verified, licensed, and experienced with international tourists. GPS tracking is enabled on all vehicles for your safety. We have served 2,000+ international tourists safely.' },
  { question: 'Do your drivers speak English?', answer: 'Yes, all drivers assigned to international tourists are English-speaking. They can communicate about directions, food recommendations, cultural context, and basic conversation. For European tourists, we can arrange drivers with basic French or German on request.' },
  { question: 'How much does it cost to hire a car with driver in India?', answer: 'Sedan starts at $45/day (INR ₹3,800), SUV at $65/day (INR ₹5,500). This includes the vehicle, fuel, driver accommodation, tolls, and parking. You only need to plan your own hotels and meals. Multi-day packages offer better rates.' },
  { question: 'Should I tip the driver?', answer: 'Tipping is not mandatory but appreciated. A tip of INR ₹200-500/day (USD $2.50-6) is customary for good service. At the end of a multi-day trip, INR ₹500-1,000 per day is generous and greatly appreciated.' },
  { question: 'Can I change my itinerary during the trip?', answer: 'Yes, flexibility is a key advantage of hiring a private car. Unlike tours, you can change destinations, extend stays, or add stops. Just discuss with your driver. Major route changes may have a small fare adjustment.' },
  { question: 'What about hotel recommendations?', answer: 'We can recommend hotels in every price range (budget hostels to 5-star palaces) in all cities on your route. Many of our regular tourists share reviews that help us curate the best recommendations.' },
  { question: 'How do I pay?', answer: 'We accept bank transfers (domestic and international), UPI, credit cards (with small processing fee), and cash (INR). A 30% advance is required at booking, balance payable at trip start or end.' },
  { question: 'What if I have an emergency during the trip?', answer: 'Our 24/7 English-speaking helpline is always available. The driver has basic first-aid training. We have tie-ups with hospitals in major cities. Travel insurance is strongly recommended — we can assist with purchasing it.' },
];

export default function PrivateDriverHirePage() {
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    "serviceType": "Private Car with Driver Hire in India",
    "name": "Triveni Cabs - Private Driver Hire for International Tourists",
    "description": "Hire a car with English-speaking driver in India for multi-day tours. Safe, reliable, affordable.",
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in", "address": { "@type": "PostalAddress", "addressCountry": "IN" } },
    "areaServed": { "@type": "Country", "name": "India" },
    "offers": { "@type": "AggregateOffer", "lowPrice": "45", "highPrice": "110", "priceCurrency": "USD", "unitText": "per day" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "480", "bestRating": "5" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Private Driver Hire India", "item": "https://www.trivenicabs.in/private-driver-hire-india" }
    ]
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-stone-950">
        {/* Hero - Premium International */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-950 via-amber-950/40 to-stone-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent" />
          <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-20 left-10 w-[300px] h-[300px] bg-orange-500/8 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(251,191,36,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />

          <div className="max-w-7xl mx-auto px-4 py-20 relative z-10 w-full">
            <nav className="flex items-center gap-2 text-sm text-stone-500 mb-8">
              <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-amber-400">Private Driver Hire India</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/20 to-orange-500/20 backdrop-blur-xl px-6 py-3 rounded-full border border-amber-500/30">
                  <Shield className="w-5 h-5 text-amber-400" />
                  <span className="text-amber-300 font-bold text-sm tracking-wider uppercase">Trusted by 2,000+ International Tourists</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1]">
                  Hire a Car with
                  <span className="block mt-2 text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text">
                    Driver in India
                  </span>
                </h1>

                <p className="text-xl text-stone-300 max-w-lg leading-relaxed">
                  English-speaking chauffeur service for international tourists. Safe, comfortable, and affordable — explore India at your own pace.
                </p>

                <div className="flex flex-wrap gap-3">
                  {['From $45/day (Sedan)', 'English-Speaking Drivers', 'All-Inclusive Pricing'].map((tag, i) => (
                    <span key={i} className="px-4 py-2 bg-white/5 backdrop-blur-xl rounded-full text-sm text-stone-300 border border-white/10 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="tel:+917668570551" className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-black px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all duration-300">
                    <Phone className="w-5 h-5" />
                    +91-7668570551
                  </a>
                  <a href="https://wa.me/917668570551?text=Hello%20I%20am%20an%20international%20tourist%20interested%20in%20hiring%20a%20car%20with%20driver%20in%20India" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl text-white px-8 py-5 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Stats Card */}
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-3xl" />
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-6">Our Global Track Record</h3>
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      {[
                        { value: '2,000+', label: 'International Tourists' },
                        { value: '40+', label: 'Countries Served' },
                        { value: '4.9/5', label: 'Average Rating' },
                        { value: '24/7', label: 'English Support' }
                      ].map((stat, i) => (
                        <div key={i} className="text-center p-4 bg-white/5 rounded-xl border border-white/5">
                          <div className="text-2xl font-black text-amber-400">{stat.value}</div>
                          <div className="text-xs text-stone-400 mt-1">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-stone-400 text-sm">
                      <Shield className="w-4 h-4 text-green-400" />
                      <span>GPS tracked vehicles with insurance</span>
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
                { icon: Users, text: '40+ Countries', color: 'text-orange-400' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-stone-300 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust Features */}
        <section className="py-20 px-4 bg-gradient-to-b from-stone-950 via-stone-900/50 to-stone-950 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[200px]" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-6 py-3 rounded-full mb-6 border border-amber-500/30">
                <Shield className="w-5 h-5 text-amber-400" />
                <span className="text-amber-300 font-semibold text-sm tracking-wider uppercase">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Why International Tourists
                <span className="block text-transparent bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text">Choose Us</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trustFeatures.map((item, i) => (
                <div key={i} className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-amber-500/30 transition-all duration-500 hover:-translate-y-1">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform ${
                    i % 3 === 0 ? 'bg-gradient-to-br from-amber-500 to-orange-500 shadow-amber-500/30' :
                    i % 3 === 1 ? 'bg-gradient-to-br from-orange-500 to-red-500 shadow-orange-500/30' :
                    'bg-gradient-to-br from-yellow-500 to-amber-500 shadow-yellow-500/30'
                  }`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-6 py-3 rounded-full mb-6 border border-amber-500/30">
                <Star className="w-5 h-5 text-amber-400" />
                <span className="text-amber-300 font-semibold text-sm tracking-wider uppercase">Transparent Pricing</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                Pricing <span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text">(USD & INR)</span>
              </h2>
              <p className="text-stone-400 text-lg">All-inclusive: vehicle, fuel, driver, tolls, parking, and permits</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricing.map((p, i) => (
                <div key={i} className={`relative rounded-3xl p-6 transition-all duration-500 hover:-translate-y-2 ${
                  i === 1
                    ? 'bg-gradient-to-br from-amber-500/20 to-orange-500/20 border-2 border-amber-500/50 shadow-2xl shadow-amber-500/10'
                    : 'bg-white/5 backdrop-blur-xl border border-white/10 hover:border-amber-500/30'
                }`}>
                  {i === 1 && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-black text-xs font-black px-4 py-1.5 rounded-full shadow-lg shadow-amber-500/30">MOST POPULAR</span>
                    </div>
                  )}
                  <h3 className="font-bold text-white text-lg mb-1">{p.vehicle}</h3>
                  <p className="text-sm text-stone-400 mb-1">{p.capacity}</p>
                  <p className="text-sm text-stone-500 mb-4">{p.best}</p>
                  <div className="text-3xl font-black text-amber-400 mb-1">{p.perDay}</div>
                  <div className="text-sm text-stone-500 mb-6">{p.perKm}</div>
                  <a href="https://wa.me/917668570551" target="_blank" rel="noopener noreferrer" className={`block text-center font-bold py-3.5 rounded-xl transition-all ${
                    i === 1
                      ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-black shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40'
                      : 'bg-white/10 text-white hover:bg-amber-500/20 border border-white/10 hover:border-amber-500/30'
                  }`}>Get Quote</a>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-stone-500 mt-8">* USD prices based on approximate exchange rate. Final quote in INR. Hotels and meals not included.</p>
          </div>
        </section>

        {/* Popular Circuits */}
        <section className="py-20 px-4 bg-stone-900/30 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[150px]" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 px-6 py-3 rounded-full mb-6 border border-amber-500/30">
                <MapPin className="w-5 h-5 text-amber-400" />
                <span className="text-amber-300 font-semibold text-sm tracking-wider uppercase">Tour Circuits</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white">
                Popular <span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text">Tour Circuits</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg, i) => (
                <Link key={i} href={pkg.slug} className="group">
                  <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-amber-500/40 transition-all duration-500 hover:-translate-y-2 h-full">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">{pkg.name}</h3>
                      <span className="bg-amber-500/20 text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full border border-amber-500/30">{pkg.duration}</span>
                    </div>
                    <p className="text-sm text-stone-400 mb-2">{pkg.route}</p>
                    <p className="text-xs text-stone-500 mb-5">{pkg.highlights}</p>
                    <div className="flex gap-6 text-sm pt-4 border-t border-white/5">
                      <div><span className="text-stone-500">Sedan:</span> <span className="font-bold text-amber-400">{pkg.sedanUSD}</span></div>
                      <div><span className="text-stone-500">SUV:</span> <span className="font-bold text-orange-400">{pkg.suvUSD}</span></div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-500/5 via-transparent to-transparent" />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-white">
                How It <span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text">Works</span>
              </h2>
            </div>
            <div className="space-y-6">
              {[
                { step: '1', title: 'Share Your Plan', desc: 'Tell us your dates, destinations, and group size via WhatsApp or email. We create a custom itinerary and quote within 2 hours.' },
                { step: '2', title: 'Confirm & Pay 30%', desc: 'Review the itinerary and pricing. Pay 30% advance via bank transfer or card to confirm your booking.' },
                { step: '3', title: 'Meet Your Driver', desc: 'Your English-speaking driver meets you at the airport or hotel. Vehicle is cleaned, fueled, and ready.' },
                { step: '4', title: 'Explore India', desc: 'Travel at your pace. Change plans anytime. Your driver handles navigation, parking, and local knowledge.' },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start bg-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/10 hover:border-amber-500/20 transition-all">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 text-black rounded-2xl flex items-center justify-center font-black text-lg flex-shrink-0 shadow-lg shadow-amber-500/25">{item.step}</div>
                  <div>
                    <h3 className="font-bold text-white text-lg mb-1">{item.title}</h3>
                    <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Pages */}
        <section className="py-16 px-4 bg-stone-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-8 text-white">More for International Tourists</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'Golden Triangle English Driver', href: '/golden-triangle-english-speaking-driver', desc: 'Delhi-Agra-Jaipur guided tour' },
                { title: 'Private Taj Mahal Tour', href: '/taj-mahal-private-tour-from-delhi', desc: 'Premium Taj Mahal experience' },
                { title: 'India Road Trip Guide', href: '/india-road-trip-guide-for-tourists', desc: 'Essential guide for tourists' },
                { title: 'Safe Travel India Guide', href: '/safe-travel-india-for-tourists', desc: 'Safety tips for foreigners' },
                { title: '10-Day North India Trip', href: '/10-day-north-india-road-trip', desc: 'Epic North India circuit' },
                { title: '5-Day Rajasthan Road Trip', href: '/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur', desc: 'Forts, palaces & lakes' },
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
              Start Planning Your
              <span className="block text-transparent bg-gradient-to-r from-amber-400 via-yellow-300 to-orange-400 bg-clip-text">India Adventure</span>
            </h2>
            <p className="text-stone-300 text-xl mb-10">English-speaking driver from $45/day. All-inclusive pricing. 24/7 support.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+917668570551" className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold px-8 py-5 rounded-2xl text-lg shadow-2xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] transition-all duration-300">
                <Phone className="w-5 h-5" /> +91-7668570551
              </a>
              <a href="https://wa.me/917668570551?text=Hello%20I%20want%20to%20hire%20a%20car%20with%20driver%20in%20India" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/20 hover:bg-white/10 hover:border-white/40 text-white font-bold px-8 py-5 rounded-2xl text-lg transition-all duration-300">
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
