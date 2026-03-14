import Link from 'next/link';
import { Phone, MapPin, Clock, Star, ChevronRight, Shield, Users, Calendar } from '@/components/ui/icons';
import { getServicePages, getWeddingPages } from '@/utilis/linkingHelper';

export const revalidate = false;

export const metadata = {
  title: 'Top 20 Weekend Getaways from Jaipur by Car 2026 | Triveni Cabs',
  description: 'Best weekend trips from Jaipur by car in 2026. Udaipur, Pushkar, Ranthambore, Mount Abu & more. Distance, drive time, costs. AC cab from ₹9/km. Call 7668570551.',
  keywords: 'weekend trips from jaipur by car, weekend getaways from jaipur, short trips from jaipur, road trips from jaipur, places to visit near jaipur by car',
  authors: [{ name: 'Triveni Cabs' }],
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/weekend-getaways-from-jaipur-by-car' },
  openGraph: {
    title: 'Top 20 Weekend Getaways from Jaipur by Car 2026',
    description: 'Plan the perfect weekend escape from Jaipur. 20 destinations with distance, costs & tips.',
    type: 'website', locale: 'en_IN',
    url: 'https://www.trivenicabs.in/weekend-getaways-from-jaipur-by-car',
    siteName: 'Triveni Cabs',
  },
  twitter: { card: 'summary_large_image', title: 'Top 20 Weekend Getaways from Jaipur by Car 2026' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const destinations = [
  { name: 'Udaipur', distance: '395 km', duration: '6 hrs', bestTime: 'Oct-Mar', highlight: 'City Palace, Lake Pichola, Fateh Sagar Lake', sedanPrice: '₹7,500', suvPrice: '₹10,000', slug: '/sightseeing/udaipur', rating: 4.9, tag: 'Romantic' },
  { name: 'Pushkar', distance: '145 km', duration: '2.5 hrs', bestTime: 'Oct-Mar', highlight: 'Brahma Temple, Pushkar Lake, Camel Fair', sedanPrice: '₹3,000', suvPrice: '₹4,500', slug: '/sightseeing/pushkar', rating: 4.7, tag: 'Spiritual' },
  { name: 'Ajmer', distance: '135 km', duration: '2 hrs', bestTime: 'Oct-Mar', highlight: 'Dargah Sharif, Ana Sagar Lake, Taragarh Fort', sedanPrice: '₹2,800', suvPrice: '₹4,000', slug: '/sightseeing/ajmer', rating: 4.6, tag: 'Heritage' },
  { name: 'Ranthambore', distance: '180 km', duration: '3.5 hrs', bestTime: 'Oct-Jun', highlight: 'Tiger Safari, Ranthambore Fort, Wildlife', sedanPrice: '₹3,500', suvPrice: '₹5,000', slug: '/sightseeing/ranthambore', rating: 4.8, tag: 'Wildlife' },
  { name: 'Jodhpur', distance: '335 km', duration: '5.5 hrs', bestTime: 'Oct-Mar', highlight: 'Mehrangarh Fort, Umaid Bhawan, Blue City', sedanPrice: '₹6,500', suvPrice: '₹9,000', slug: '/sightseeing/jodhpur', rating: 4.8, tag: 'Royal' },
  { name: 'Mount Abu', distance: '500 km', duration: '7 hrs', bestTime: 'Oct-Mar', highlight: 'Dilwara Temples, Nakki Lake, Sunset Point', sedanPrice: '₹9,000', suvPrice: '₹12,000', slug: '/sightseeing/mount-abu', rating: 4.7, tag: 'Hill Station' },
  { name: 'Bundi', distance: '215 km', duration: '3.5 hrs', bestTime: 'Oct-Mar', highlight: 'Taragarh Fort, Step Wells, Palace Murals', sedanPrice: '₹4,000', suvPrice: '₹5,500', slug: '/sightseeing', rating: 4.5, tag: 'Hidden Gem' },
  { name: 'Chittorgarh', distance: '310 km', duration: '5 hrs', bestTime: 'Oct-Mar', highlight: 'Chittorgarh Fort, Vijay Stambh, Padmini Palace', sedanPrice: '₹6,000', suvPrice: '₹8,000', slug: '/sightseeing', rating: 4.7, tag: 'Historic' },
  { name: 'Agra', distance: '240 km', duration: '4 hrs', bestTime: 'Oct-Mar', highlight: 'Taj Mahal, Agra Fort, Fatehpur Sikri', sedanPrice: '₹5,000', suvPrice: '₹7,000', slug: '/sightseeing/agra', rating: 4.9, tag: 'Wonder' },
  { name: 'Bikaner', distance: '330 km', duration: '5.5 hrs', bestTime: 'Oct-Mar', highlight: 'Junagarh Fort, Karni Mata Temple, Camel Rides', sedanPrice: '₹6,500', suvPrice: '₹9,000', slug: '/sightseeing', rating: 4.6, tag: 'Desert' },
  { name: 'Alwar', distance: '150 km', duration: '2.5 hrs', bestTime: 'Oct-Mar', highlight: 'Bala Quila, Siliserh Lake, Sariska', sedanPrice: '₹3,000', suvPrice: '₹4,500', slug: '/routes', rating: 4.5, tag: 'Nature' },
  { name: 'Neemrana', distance: '160 km', duration: '3 hrs', bestTime: 'Oct-Mar', highlight: 'Neemrana Fort Palace, Zip-line, Heritage Stay', sedanPrice: '₹3,200', suvPrice: '₹4,500', slug: '/routes', rating: 4.5, tag: 'Heritage' },
  { name: 'Kumbhalgarh', distance: '340 km', duration: '5.5 hrs', bestTime: 'Oct-Mar', highlight: 'Great Wall of India, Wildlife Sanctuary', sedanPrice: '₹6,500', suvPrice: '₹9,000', slug: '/sightseeing', rating: 4.7, tag: 'Fortress' },
  { name: 'Sambhar Lake', distance: '80 km', duration: '1.5 hrs', bestTime: 'Nov-Feb', highlight: 'Salt Lake, Migratory Birds, Flamingos', sedanPrice: '₹2,000', suvPrice: '₹3,000', slug: '/routes', rating: 4.4, tag: 'Nature' },
  { name: 'Sariska', distance: '110 km', duration: '2 hrs', bestTime: 'Oct-Jun', highlight: 'Tiger Reserve, Kankwari Fort, Temples', sedanPrice: '₹2,500', suvPrice: '₹3,500', slug: '/routes', rating: 4.5, tag: 'Wildlife' },
  { name: 'Nathdwara', distance: '310 km', duration: '5 hrs', bestTime: 'Year-round', highlight: 'Shrinathji Temple, Rajsamand Lake', sedanPrice: '₹6,000', suvPrice: '₹8,000', slug: '/sightseeing', rating: 4.6, tag: 'Spiritual' },
  { name: 'Jaisalmer', distance: '560 km', duration: '8 hrs', bestTime: 'Oct-Mar', highlight: 'Golden Fort, Sam Sand Dunes, Havelis', sedanPrice: '₹10,000', suvPrice: '₹13,000', slug: '/sightseeing/jaisalmer', rating: 4.9, tag: 'Desert' },
  { name: 'Mandawa', distance: '170 km', duration: '3 hrs', bestTime: 'Oct-Mar', highlight: 'Open-air art gallery, Painted Havelis', sedanPrice: '₹3,500', suvPrice: '₹5,000', slug: '/routes', rating: 4.4, tag: 'Art' },
  { name: 'Chand Baori (Abhaneri)', distance: '95 km', duration: '2 hrs', bestTime: 'Oct-Mar', highlight: 'Ancient Stepwell, Harshat Mata Temple', sedanPrice: '₹2,000', suvPrice: '₹3,000', slug: '/routes', rating: 4.5, tag: 'Architecture' },
  { name: 'Delhi', distance: '280 km', duration: '4.5 hrs', bestTime: 'Oct-Mar', highlight: 'India Gate, Red Fort, Qutub Minar, Shopping', sedanPrice: '₹5,500', suvPrice: '₹7,500', slug: '/sightseeing/delhi', rating: 4.7, tag: 'Capital' },
];

const faqData = [
  { question: 'What is the best weekend getaway from Jaipur for couples?', answer: 'Udaipur (395 km) is the most romantic weekend trip from Jaipur — the City of Lakes offers stunning palace views, boat rides, and fine dining. Pushkar (145 km) is a quicker option with its serene lakeside setting.' },
  { question: 'Which is the cheapest weekend trip from Jaipur by car?', answer: 'Sambhar Lake (80 km, ₹2,000 sedan) and Chand Baori at Abhaneri (95 km, ₹2,000 sedan) are the most budget-friendly weekend escapes. Both are under 2 hours from Jaipur.' },
  { question: 'Can I book a cab from Jaipur for a weekend trip?', answer: 'Yes! Triveni Cabs offers outstation cabs from Jaipur starting at ₹9/km for sedans and ₹12/km for SUVs. All-inclusive pricing covers fuel, driver allowance, and tolls. Call 7668570551.' },
  { question: 'Which wildlife destination is closest to Jaipur?', answer: 'Ranthambore National Park (180 km, 3.5 hrs) is the closest major wildlife destination. Sariska Tiger Reserve (110 km, 2 hrs) is even closer for a quick safari weekend.' },
  { question: 'Is it safe to drive from Jaipur to Udaipur for a weekend?', answer: 'Yes, the Jaipur-Udaipur highway (NH48) is well-maintained. Our experienced drivers handle this route regularly. The 6-hour drive passes through scenic Rajasthani countryside with good food stops at Ajmer and Bhilwara.' },
  { question: 'What is the best time for a weekend road trip from Jaipur?', answer: 'October to March is ideal — pleasant weather, clear skies, and perfect for sightseeing. Avoid May-June (extreme heat in Rajasthan) and July-August (monsoon can cause waterlogging on some routes).' },
];

export default function WeekendGetawaysFromJaipurPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Weekend Getaways from Jaipur by Car",
    "description": "Top 20 weekend road trip destinations from Jaipur with cab service",
    "touristType": "Weekend Travelers",
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Weekend Getaways from Jaipur", "item": "https://www.trivenicabs.in/weekend-getaways-from-jaipur-by-car" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question", "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer }
    }))
  };

  const itemListSchema = {
    "@context": "https://schema.org", "@type": "ItemList",
    "name": "Top 20 Weekend Getaways from Jaipur by Car",
    "numberOfItems": 20,
    "itemListElement": destinations.map((dest, i) => ({ "@type": "ListItem", "position": i + 1, "name": dest.name, "url": `https://www.trivenicabs.in${dest.slug}` }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="min-h-screen bg-amber-950 text-white">
        {/* Hero - Royal Desert Palace Theme */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-orange-950 to-yellow-950" />
          {/* Geometric Rajasthani jali pattern overlay */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23f59e0b' stroke-width='1'%3E%3Cpath d='M30 0L60 30L30 60L0 30z'/%3E%3Cpath d='M30 10L50 30L30 50L10 30z'/%3E%3Cpath d='M30 20L40 30L30 40L20 30z'/%3E%3C/g%3E%3C/svg%3E")` }} />
          {/* Warm floating orbs */}
          <div className="absolute top-10 right-20 w-80 h-80 bg-amber-500/15 rounded-full blur-[120px]" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-[140px]" />
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-yellow-400/10 rounded-full blur-[100px]" />

          <div className="max-w-7xl mx-auto px-4 relative z-10 py-20">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 bg-amber-500/10 border border-amber-500/25 backdrop-blur-sm px-6 py-3 rounded-full mb-10">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
                <span className="text-amber-300 text-sm font-medium tracking-widest uppercase">20 Royal Destinations</span>
              </div>

              <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.85] tracking-tight">
                <span className="text-transparent bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-300 bg-clip-text">Weekend</span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-orange-300 via-amber-200 to-yellow-300 bg-clip-text">Getaways</span>
                <br />
                <span className="text-amber-600/60 text-3xl md:text-5xl font-light tracking-wide">from the Pink City</span>
              </h1>

              <p className="text-amber-200/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Desert forts, lake palaces, tiger safaris, and sacred temples. Every weekend from Jaipur is a royal expedition waiting to unfold.
              </p>

              {/* Neumorphic stat cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {[
                  { value: '20+', label: 'Destinations' },
                  { value: '₹2,000', label: 'Starting Price' },
                  { value: '1.5 hrs', label: 'Closest Drive' },
                  { value: '10+ Yrs', label: 'Rajasthan Expert' },
                ].map((stat, i) => (
                  <div key={i} className="bg-amber-900/30 backdrop-blur-sm border border-amber-700/20 rounded-2xl p-5 shadow-[inset_2px_2px_4px_rgba(251,191,36,0.05),inset_-2px_-2px_4px_rgba(0,0,0,0.2)]">
                    <div className="text-2xl md:text-3xl font-black text-amber-300">{stat.value}</div>
                    <div className="text-amber-500/60 text-xs uppercase tracking-wider mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                <a href="tel:7668570551" className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-black font-bold px-10 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02]">
                  <Phone className="w-5 h-5" />
                  <span>Call 7668570551</span>
                </a>
                <a href="https://wa.me/917668570551?text=Hi%20I%20want%20to%20plan%20a%20weekend%20trip%20from%20Jaipur" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/40 px-10 py-4 rounded-2xl transition-all duration-300 font-semibold">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations - Bento Grid with Tags */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-950 via-amber-950/95 to-stone-950" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="text-amber-500 text-sm font-medium tracking-widest uppercase">Explore Rajasthan & Beyond</span>
              <h2 className="text-4xl md:text-5xl font-black mt-3 text-white">All 20 Destinations</h2>
              <p className="text-amber-300/40 mt-4 max-w-2xl mx-auto">Royal forts, desert safaris, lake palaces, and wildlife — each one handpicked for the perfect weekend from Jaipur.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {destinations.map((dest, index) => (
                <div key={index} className={`group relative bg-gradient-to-br from-amber-900/40 to-orange-900/20 backdrop-blur-sm border border-amber-700/15 rounded-3xl p-6 hover:border-amber-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/5 ${index === 0 || index === 8 ? 'lg:col-span-2' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex items-center justify-center w-8 h-8 bg-amber-500/20 text-amber-300 text-xs font-bold rounded-lg">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-amber-200 transition-colors">{dest.name}</h3>
                        <span className="text-xs text-amber-500/60 bg-amber-500/10 px-2 py-0.5 rounded-full">{dest.tag}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 bg-amber-500/10 px-2.5 py-1 rounded-lg">
                      <Star className="w-3.5 h-3.5 text-amber-400 fill-current" />
                      <span className="text-sm font-semibold text-amber-300">{dest.rating}</span>
                    </div>
                  </div>

                  <p className="text-amber-200/40 text-sm mb-5 leading-relaxed">{dest.highlight}</p>

                  <div className="grid grid-cols-3 gap-2 mb-5">
                    <div className="bg-amber-950/50 rounded-xl px-3 py-2.5 text-center">
                      <MapPin className="w-3.5 h-3.5 text-amber-500 mx-auto mb-1" />
                      <span className="text-xs text-amber-200/60">{dest.distance}</span>
                    </div>
                    <div className="bg-amber-950/50 rounded-xl px-3 py-2.5 text-center">
                      <Clock className="w-3.5 h-3.5 text-amber-500 mx-auto mb-1" />
                      <span className="text-xs text-amber-200/60">{dest.duration}</span>
                    </div>
                    <div className="bg-amber-950/50 rounded-xl px-3 py-2.5 text-center">
                      <Calendar className="w-3.5 h-3.5 text-amber-500 mx-auto mb-1" />
                      <span className="text-xs text-amber-200/60">{dest.bestTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-amber-700/15">
                    <div className="flex gap-4">
                      <div>
                        <span className="text-[10px] text-amber-500/40 uppercase tracking-wider">Sedan</span>
                        <div className="text-amber-300 font-bold text-sm">{dest.sedanPrice}</div>
                      </div>
                      <div>
                        <span className="text-[10px] text-amber-500/40 uppercase tracking-wider">SUV</span>
                        <div className="text-amber-300 font-bold text-sm">{dest.suvPrice}</div>
                      </div>
                    </div>
                    <Link href={dest.slug} className="text-amber-400 hover:text-amber-300 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      Explore <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us - Neumorphic Cards */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-stone-950" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-14">
              <span className="text-amber-500 text-sm font-medium tracking-widest uppercase">Why Triveni Cabs</span>
              <h2 className="text-3xl md:text-4xl font-black mt-3 text-white">Your Royal Rajasthan Guide</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: 'Rajasthan Experts', desc: 'Drivers who know every fort, palace & desert road' },
                { icon: Star, title: 'Best Rates', desc: 'Transparent ₹9-12/km, no hidden charges ever' },
                { icon: Users, title: 'Trusted by 5000+', desc: 'Families, couples & groups trust our service' },
                { icon: Clock, title: 'Doorstep Pickup', desc: 'From hotel, airport, or your home in Jaipur' },
              ].map((item, i) => (
                <div key={i} className="bg-stone-900/60 backdrop-blur-sm border border-stone-800/50 rounded-2xl p-7 text-center shadow-[6px_6px_12px_rgba(0,0,0,0.3),-6px_-6px_12px_rgba(255,255,255,0.02)] hover:shadow-[inset_6px_6px_12px_rgba(0,0,0,0.2),inset_-6px_-6px_12px_rgba(255,255,255,0.02)] transition-all duration-500">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-7 h-7 text-amber-400" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interlinks */}
        <section className="py-16 px-4 relative">
          <div className="absolute inset-0 bg-amber-950/50" />
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-2xl font-bold text-center mb-10 text-white">More Road Trip Ideas</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'Weekend Getaways from Delhi', href: '/weekend-getaways-from-delhi-by-car', desc: '20 destinations from Delhi' },
                { title: '5-Day Rajasthan Road Trip', href: '/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur', desc: 'Jaipur-Udaipur-Jodhpur circuit' },
                { title: 'Rajasthan Desert Circuit', href: '/rajasthan-desert-circuit-tour', desc: 'Jaisalmer-Jodhpur-Bikaner' },
                { title: '10-Day North India Trip', href: '/10-day-north-india-road-trip', desc: 'Epic North India road trip' },
                { title: 'Weekend Getaways from Chandigarh', href: '/weekend-getaways-from-chandigarh-by-car', desc: '18 destinations from Chandigarh' },
                { title: 'Golden Triangle Tour', href: '/sightseeing/golden-triangle-tour', desc: 'Delhi-Agra-Jaipur circuit' },
                { title: 'Jaipur City Hub', href: '/jaipur', desc: 'Jaipur cab services' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-amber-900/20 backdrop-blur-sm border border-amber-700/15 p-5 rounded-2xl hover:bg-amber-900/30 hover:border-amber-500/25 transition-all duration-300 flex items-center gap-4">
                  <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ChevronRight className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{link.title}</div>
                    <div className="text-xs text-amber-300/40 mt-0.5">{link.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="py-16 px-4 relative">
          <div className="absolute inset-0 bg-stone-950" />
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-2xl font-bold text-center mb-3 text-white">Travel Guides & Resources</h2>
            <p className="text-amber-300/40 text-center mb-10 text-sm">Helpful guides for planning your Rajasthan road trip</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Weekend Getaways from Delhi', href: '/weekend-getaways-from-delhi-by-car', desc: 'Top road trips and escapes from Delhi' },
                { title: 'Weekend Getaways from Chandigarh', href: '/weekend-getaways-from-chandigarh-by-car', desc: 'Hill stations and escapes from Chandigarh' },
                { title: '5-Day Rajasthan Road Trip', href: '/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur', desc: 'Jaipur-Udaipur-Jodhpur circuit in 5 days' },
                { title: 'Rajasthan Desert Circuit Tour', href: '/rajasthan-desert-circuit-tour', desc: 'Explore the Thar Desert and royal forts' },
                { title: 'Jaipur Sightseeing Tours', href: '/jaipur', desc: 'Explore the Pink City with local guides' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group bg-amber-900/20 border border-amber-700/15 p-5 rounded-2xl hover:border-amber-500/25 transition-all">
                  <div className="font-semibold text-white text-sm group-hover:text-amber-300 transition-colors">{link.title}</div>
                  <div className="text-xs text-amber-300/40 mt-1">{link.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ - Accordion Style */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-stone-950" />
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="text-center mb-14">
              <span className="text-amber-500 text-sm font-medium tracking-widest uppercase">Got Questions?</span>
              <h2 className="text-3xl md:text-4xl font-black mt-3 text-white">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {faqData.map((faq, i) => (
                <details key={i} className="group bg-amber-900/15 backdrop-blur-sm border border-amber-700/15 rounded-2xl overflow-hidden">
                  <summary className="p-6 font-semibold text-white cursor-pointer flex items-center justify-between hover:text-amber-200 transition-colors">
                    <span className="pr-4">{faq.question}</span>
                    <ChevronRight className="w-5 h-5 text-amber-500 group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 -mt-1">
                    <p className="text-amber-200/50 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Gradient Mesh */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-700 via-orange-700 to-red-800" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/20 rounded-full blur-[100px]" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-5">
              <span className="text-transparent bg-gradient-to-r from-yellow-200 to-amber-100 bg-clip-text">Plan Your Royal Escape</span>
            </h2>
            <p className="text-amber-100/70 text-lg mb-10 max-w-xl mx-auto">AC cabs from ₹9/km with doorstep pickup from anywhere in Jaipur. Experienced Rajasthan drivers.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:7668570551" className="inline-flex items-center gap-3 bg-black/30 hover:bg-black/40 backdrop-blur-sm border border-white/20 text-white font-bold px-10 py-4 rounded-2xl transition-all duration-300 shadow-xl">
                <Phone className="w-5 h-5" /> Call 7668570551
              </a>
              <a href="https://wa.me/917668570551?text=Hi%20I%20want%20to%20plan%20a%20weekend%20trip%20from%20Jaipur" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white hover:bg-amber-50 text-amber-900 font-bold px-10 py-4 rounded-2xl transition-all duration-300">
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
