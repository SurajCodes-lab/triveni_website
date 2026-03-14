import Link from 'next/link';
import { Phone, MapPin, Clock, Star, ChevronRight, Shield, Users, Calendar, Heart } from '@/components/ui/icons';
import { getServicePages, getWeddingPages } from '@/utilis/linkingHelper';

export const revalidate = false;

export const metadata = {
  title: 'Top 20 Weekend Getaways from Delhi by Car 2026 | Triveni Cabs',
  description: 'Best weekend trips from Delhi by car in 2026. Distance, drive time, costs & itineraries for Agra, Jaipur, Rishikesh, Mussoorie & 16 more. Book AC cab from ₹9/km. Call 7668570551.',
  keywords: 'weekend trips from delhi by car 2026, weekend getaways from delhi, short trips from delhi, road trips from delhi, weekend destinations near delhi, places to visit near delhi by car',
  authors: [{ name: 'Triveni Cabs' }],
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/weekend-getaways-from-delhi-by-car' },
  openGraph: {
    title: 'Top 20 Weekend Getaways from Delhi by Car 2026 | Drive & Explore',
    description: 'Plan the perfect weekend escape from Delhi. 20 destinations with distance, costs & tips. AC cabs from ₹9/km.',
    type: 'website', locale: 'en_IN',
    url: 'https://www.trivenicabs.in/weekend-getaways-from-delhi-by-car',
    siteName: 'Triveni Cabs',
  },
  twitter: { card: 'summary_large_image', title: 'Top 20 Weekend Getaways from Delhi by Car 2026', description: 'Plan the perfect weekend escape from Delhi. 20 destinations with distance, costs & tips.' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const destinations = [
  { name: 'Agra', distance: '230 km', duration: '3.5 hrs', bestTime: 'Oct-Mar', highlight: 'Taj Mahal, Agra Fort, Fatehpur Sikri', sedanPrice: '₹4,500', suvPrice: '₹6,500', slug: '/sightseeing/agra', rating: 4.9, zone: 'south' },
  { name: 'Jaipur', distance: '280 km', duration: '4.5 hrs', bestTime: 'Oct-Feb', highlight: 'Amber Fort, Hawa Mahal, City Palace', sedanPrice: '₹5,500', suvPrice: '₹7,500', slug: '/sightseeing/jaipur', rating: 4.8, zone: 'west' },
  { name: 'Rishikesh', distance: '250 km', duration: '5 hrs', bestTime: 'Sep-Jun', highlight: 'River rafting, Yoga, Ganga Aarti', sedanPrice: '₹5,000', suvPrice: '₹7,000', slug: '/sightseeing/rishikesh', rating: 4.8, zone: 'north' },
  { name: 'Mussoorie', distance: '290 km', duration: '6 hrs', bestTime: 'Mar-Jun, Sep-Nov', highlight: 'Mall Road, Kempty Falls, Gun Hill', sedanPrice: '₹5,500', suvPrice: '₹7,500', slug: '/sightseeing/mussoorie', rating: 4.7, zone: 'north' },
  { name: 'Jim Corbett', distance: '260 km', duration: '5.5 hrs', bestTime: 'Nov-Jun', highlight: 'Tiger Safari, Jungle Lodge, Nature', sedanPrice: '₹5,000', suvPrice: '₹7,000', slug: '/sightseeing/jim-corbett', rating: 4.7, zone: 'north' },
  { name: 'Mathura-Vrindavan', distance: '180 km', duration: '3 hrs', bestTime: 'Oct-Mar', highlight: 'Krishna Janmabhoomi, Banke Bihari', sedanPrice: '₹3,500', suvPrice: '₹5,000', slug: '/sightseeing/mathura', rating: 4.6, zone: 'south' },
  { name: 'Nainital', distance: '300 km', duration: '6.5 hrs', bestTime: 'Mar-Jun, Sep-Nov', highlight: 'Naini Lake, Mall Road, Snow View', sedanPrice: '₹6,000', suvPrice: '₹8,000', slug: '/sightseeing/nainital', rating: 4.8, zone: 'north' },
  { name: 'Haridwar', distance: '230 km', duration: '5 hrs', bestTime: 'Year-round', highlight: 'Har Ki Pauri, Ganga Aarti, Temples', sedanPrice: '₹4,500', suvPrice: '₹6,500', slug: '/sightseeing/haridwar', rating: 4.7, zone: 'north' },
  { name: 'Neemrana', distance: '120 km', duration: '2.5 hrs', bestTime: 'Oct-Mar', highlight: 'Neemrana Fort Palace, Zip-lining', sedanPrice: '₹2,500', suvPrice: '₹3,500', slug: '/routes', rating: 4.5, zone: 'west' },
  { name: 'Lansdowne', distance: '270 km', duration: '6 hrs', bestTime: 'Year-round', highlight: 'Quiet hill station, Bhulla Lake, Trek', sedanPrice: '₹5,500', suvPrice: '₹7,500', slug: '/sightseeing', rating: 4.5, zone: 'north' },
  { name: 'Sariska', distance: '200 km', duration: '4 hrs', bestTime: 'Oct-Jun', highlight: 'Tiger Reserve, Sariska Palace, Temples', sedanPrice: '₹4,000', suvPrice: '₹5,500', slug: '/routes', rating: 4.4, zone: 'west' },
  { name: 'Alwar', distance: '160 km', duration: '3 hrs', bestTime: 'Oct-Mar', highlight: 'Bala Quila, Siliserh Lake, Heritage', sedanPrice: '₹3,000', suvPrice: '₹4,500', slug: '/routes', rating: 4.4, zone: 'west' },
  { name: 'Bharatpur', distance: '185 km', duration: '3.5 hrs', bestTime: 'Oct-Feb', highlight: 'Keoladeo Bird Sanctuary, Deeg Palace', sedanPrice: '₹3,500', suvPrice: '₹5,000', slug: '/routes', rating: 4.5, zone: 'south' },
  { name: 'Kasauli', distance: '300 km', duration: '5.5 hrs', bestTime: 'Mar-Jun, Sep-Nov', highlight: 'Christ Church, Monkey Point, Walks', sedanPrice: '₹6,000', suvPrice: '₹8,000', slug: '/sightseeing', rating: 4.6, zone: 'north' },
  { name: 'Shimla', distance: '350 km', duration: '7 hrs', bestTime: 'Mar-Jun, Dec-Feb', highlight: 'Mall Road, Ridge, Jakhoo Temple', sedanPrice: '₹6,500', suvPrice: '₹9,000', slug: '/sightseeing/shimla', rating: 4.8, zone: 'north' },
  { name: 'Manesar', distance: '55 km', duration: '1.5 hrs', bestTime: 'Oct-Mar', highlight: 'Heritage Village, Sultanpur Bird Sanctuary', sedanPrice: '₹1,500', suvPrice: '₹2,500', slug: '/routes', rating: 4.3, zone: 'south' },
  { name: 'Damdama Lake', distance: '60 km', duration: '1.5 hrs', bestTime: 'Oct-Mar', highlight: 'Boating, Rock Climbing, Camping', sedanPrice: '₹1,500', suvPrice: '₹2,500', slug: '/routes', rating: 4.3, zone: 'south' },
  { name: 'Chandigarh', distance: '250 km', duration: '4.5 hrs', bestTime: 'Sep-Mar', highlight: 'Rock Garden, Sukhna Lake, Rose Garden', sedanPrice: '₹5,000', suvPrice: '₹7,000', slug: '/sightseeing/chandigarh', rating: 4.6, zone: 'north' },
  { name: 'Amritsar', distance: '450 km', duration: '7.5 hrs', bestTime: 'Oct-Mar', highlight: 'Golden Temple, Wagah Border, Street Food', sedanPrice: '₹8,000', suvPrice: '₹11,000', slug: '/sightseeing/amritsar', rating: 4.9, zone: 'north' },
  { name: 'Dehradun', distance: '255 km', duration: '5.5 hrs', bestTime: 'Mar-Jun, Sep-Nov', highlight: 'Robber\'s Cave, Sahastradhara, FRI', sedanPrice: '₹5,000', suvPrice: '₹7,000', slug: '/sightseeing/dehradun', rating: 4.6, zone: 'north' },
];

const faqData = [
  { question: 'What is the cheapest weekend getaway from Delhi by car?', answer: 'Neemrana (120 km, ₹2,500 sedan) and Damdama Lake (60 km, ₹1,500 sedan) are the most budget-friendly options. Both are under 2.5 hours from Delhi and perfect for a quick overnight escape.' },
  { question: 'Which weekend trip from Delhi is best for couples?', answer: 'Mussoorie, Nainital, and Jaipur top the list for romantic getaways. Mussoorie offers scenic walks and waterfalls, Nainital has lakeside charm, and Jaipur offers royal palace stays and fine dining.' },
  { question: 'Can I hire a cab from Delhi for a weekend trip?', answer: 'Yes! Triveni Cabs offers outstation cabs from Delhi starting at ₹9/km for sedans and ₹12/km for SUVs. All-inclusive pricing covers fuel, driver allowance, and tolls. Call 7668570551 to book.' },
  { question: 'Which hill station is closest to Delhi for a weekend trip?', answer: 'Mussoorie (290 km, 6 hrs) and Kasauli (300 km, 5.5 hrs) are the closest popular hill stations. For a shorter drive, Neemrana Fort (120 km) in Rajasthan offers elevated fort-palace stays.' },
  { question: 'What are the best monsoon weekend getaways from Delhi?', answer: 'Rishikesh, Lansdowne, and Jim Corbett are beautiful during monsoon (Jul-Sep). The lush greenery and cool temperatures make them ideal. Avoid Shimla and Manali during heavy rains due to landslide risks.' },
  { question: 'Is it better to drive or hire a cab for weekend trips from Delhi?', answer: 'Hiring a cab is recommended for comfort and safety. Our experienced drivers know the routes, handle mountain driving expertly, and you can relax and enjoy the scenery instead of navigating traffic.' },
  { question: 'How do I book a weekend trip cab from Delhi?', answer: 'Call us at 7668570551 or WhatsApp on wa.me/917668570551. Share your destination, travel dates, and group size. We provide instant quotes with transparent pricing.' },
  { question: 'What type of car is best for a weekend road trip from Delhi?', answer: 'Sedan (Swift Dzire/Etios) is ideal for 2-3 people. SUV (Innova/Ertiga) suits families of 4-6. For groups of 8-12, our Tempo Traveller is the best choice with extra luggage space.' },
];

export default function WeekendGetawaysFromDelhiPage() {
  const serviceSchema = {
    "@context": "https://schema.org", "@type": "TouristTrip",
    "name": "Weekend Getaways from Delhi by Car",
    "description": "Top 20 weekend road trip destinations from Delhi with cab service",
    "touristType": "Weekend Travelers",
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" }
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Weekend Getaways from Delhi", "item": "https://www.trivenicabs.in/weekend-getaways-from-delhi-by-car" }
    ]
  };
  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } }))
  };
  const itemListSchema = {
    "@context": "https://schema.org", "@type": "ItemList",
    "name": "Top 20 Weekend Getaways from Delhi by Car",
    "numberOfItems": 20,
    "itemListElement": destinations.map((dest, i) => ({ "@type": "ListItem", "position": i + 1, "name": dest.name, "url": `https://www.trivenicabs.in${dest.slug}` }))
  };

  const quickDestinations = destinations.filter(d => parseFloat(d.duration) <= 3.5);
  const mediumDestinations = destinations.filter(d => parseFloat(d.duration) > 3.5 && parseFloat(d.duration) <= 5.5);
  const longDestinations = destinations.filter(d => parseFloat(d.duration) > 5.5);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="min-h-screen bg-stone-950 text-white">
        {/* Hero - Topographic Adventure Map Style */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          {/* Topographic pattern background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-stone-950 to-teal-950" />
          <div className="absolute inset-0 opacity-[0.07]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%2310b981' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }} />
          {/* Floating gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/15 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[150px]" />

          <div className="max-w-7xl mx-auto px-4 relative z-10 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-emerald-300 text-sm font-medium tracking-wide uppercase">20 Handpicked Destinations</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[0.9] tracking-tight">
                  <span className="text-transparent bg-gradient-to-r from-emerald-300 via-teal-200 to-green-300 bg-clip-text">Weekend</span>
                  <br />
                  <span className="text-white">Getaways</span>
                  <br />
                  <span className="text-stone-400 text-4xl md:text-5xl">from Delhi by Car</span>
                </h1>
                <p className="text-stone-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
                  Escape the city every weekend. From 1.5-hour drives to 7-hour adventures — your complete destination guide with costs and itineraries.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:7668570551" className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-black font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40">
                    <Phone className="w-5 h-5" />
                    <span>Call 7668570551</span>
                  </a>
                  <a href="https://wa.me/917668570551?text=Hi%20I%20want%20to%20plan%20a%20weekend%20trip%20from%20Delhi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/20 px-8 py-4 rounded-2xl transition-all duration-300 font-semibold">
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Floating Stats Dashboard */}
              <div className="hidden lg:grid grid-cols-2 gap-4">
                {[
                  { value: '20+', label: 'Destinations', color: 'from-emerald-500/20 to-emerald-500/5', border: 'border-emerald-500/20', icon: MapPin },
                  { value: '₹1,500', label: 'Starting Price', color: 'from-teal-500/20 to-teal-500/5', border: 'border-teal-500/20', icon: Star },
                  { value: '1.5 hrs', label: 'Closest Drive', color: 'from-green-500/20 to-green-500/5', border: 'border-green-500/20', icon: Clock },
                  { value: '5000+', label: 'Happy Travelers', color: 'from-cyan-500/20 to-cyan-500/5', border: 'border-cyan-500/20', icon: Users },
                ].map((stat, i) => (
                  <div key={i} className={`bg-gradient-to-br ${stat.color} backdrop-blur-xl border ${stat.border} rounded-3xl p-6 hover:scale-105 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6 text-emerald-400 mb-3" />
                    <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                    <div className="text-stone-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Drive Time Zone Selector - Bento Grid */}
        <section className="py-20 px-4 bg-gradient-to-b from-stone-950 to-stone-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-emerald-400 text-sm font-bold tracking-[0.2em] uppercase">Choose Your Adventure</span>
              <h2 className="text-4xl md:text-5xl font-black mt-3 text-white">Pick by Drive Time</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: 'Quick Escapes', subtitle: 'Under 3.5 Hours', count: quickDestinations.length, gradient: 'from-emerald-600 to-green-600', glow: 'shadow-emerald-500/30', places: quickDestinations.slice(0, 5).map(d => d.name).join(' / ') },
                { label: 'Day Adventures', subtitle: '3.5 - 5.5 Hours', count: mediumDestinations.length, gradient: 'from-teal-600 to-cyan-600', glow: 'shadow-teal-500/30', places: mediumDestinations.slice(0, 5).map(d => d.name).join(' / ') },
                { label: 'Weekend Explorations', subtitle: '5.5+ Hours', count: longDestinations.length, gradient: 'from-blue-600 to-indigo-600', glow: 'shadow-blue-500/30', places: longDestinations.slice(0, 5).map(d => d.name).join(' / ') },
              ].map((cat, i) => (
                <div key={i} className={`relative group rounded-3xl overflow-hidden shadow-2xl ${cat.glow} hover:scale-[1.02] transition-all duration-500`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-90`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="relative z-10 p-8 min-h-[280px] flex flex-col justify-end">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                      <span className="text-2xl font-black">{cat.count}</span>
                    </div>
                    <h3 className="text-2xl font-black mb-1">{cat.label}</h3>
                    <p className="text-white/70 text-sm mb-4">{cat.subtitle}</p>
                    <p className="text-white/50 text-xs">{cat.places}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Destinations - Dark Map-pin Grid */}
        <section className="py-20 px-4 bg-stone-900 relative overflow-hidden">
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="text-emerald-400 text-sm font-bold tracking-[0.2em] uppercase">Complete Directory</span>
              <h2 className="text-4xl md:text-5xl font-black mt-3 text-white">All 20 Destinations</h2>
              <p className="text-stone-400 mt-4 max-w-2xl mx-auto">Sorted by popularity. Tap any destination for details, pricing, and booking.</p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {destinations.map((dest, index) => (
                <Link key={index} href={dest.slug} className="group relative bg-stone-800/50 backdrop-blur-sm border border-stone-700/50 rounded-2xl p-6 hover:border-emerald-500/40 hover:bg-stone-800/80 transition-all duration-300">
                  {/* Rank badge */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center text-xs font-black text-black shadow-lg shadow-emerald-500/30">
                    {index + 1}
                  </div>

                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">{dest.name}</h3>
                      <p className="text-stone-500 text-sm mt-1">{dest.highlight}</p>
                    </div>
                    <div className="flex items-center gap-1 bg-yellow-500/10 px-2 py-1 rounded-lg">
                      <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm font-bold">{dest.rating}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-5">
                    <div className="bg-stone-900/80 rounded-xl p-3 text-center">
                      <MapPin className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                      <div className="text-white text-sm font-bold">{dest.distance}</div>
                    </div>
                    <div className="bg-stone-900/80 rounded-xl p-3 text-center">
                      <Clock className="w-4 h-4 text-teal-400 mx-auto mb-1" />
                      <div className="text-white text-sm font-bold">{dest.duration}</div>
                    </div>
                    <div className="bg-stone-900/80 rounded-xl p-3 text-center">
                      <Calendar className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                      <div className="text-white text-xs font-bold">{dest.bestTime}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-stone-700/50">
                    <div className="flex gap-4">
                      <div>
                        <span className="text-stone-500 text-xs block">Sedan</span>
                        <span className="text-emerald-400 font-bold">{dest.sedanPrice}</span>
                      </div>
                      <div>
                        <span className="text-stone-500 text-xs block">SUV</span>
                        <span className="text-teal-400 font-bold">{dest.suvPrice}</span>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-stone-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us - Glassmorphism Cards */}
        <section className="py-20 px-4 bg-gradient-to-b from-stone-900 to-stone-950 relative">
          <div className="absolute top-0 left-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px]" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <span className="text-emerald-400 text-sm font-bold tracking-[0.2em] uppercase">The Triveni Advantage</span>
              <h2 className="text-4xl font-black mt-3 text-white">Why Road Trippers Choose Us</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-5">
              {[
                { icon: Shield, title: 'Safe Travel', desc: 'GPS-tracked vehicles, verified drivers, 24/7 roadside support', color: 'emerald' },
                { icon: Star, title: 'Best Prices', desc: 'Transparent ₹9-12/km pricing with zero hidden charges', color: 'teal' },
                { icon: Users, title: '5000+ Trips', desc: 'Experienced on every Delhi outstation route since 2015', color: 'cyan' },
                { icon: Clock, title: 'Flexible Plans', desc: 'Doorstep pickup, customizable itinerary, your pace', color: 'green' },
              ].map((item, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                  <div className={`w-12 h-12 bg-${item.color}-500/20 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <item.icon className={`w-6 h-6 text-${item.color}-400`} />
                  </div>
                  <h3 className="font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-stone-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Travel Tips - Unique Card Design */}
        <section className="py-20 px-4 bg-stone-950">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-emerald-400 text-sm font-bold tracking-[0.2em] uppercase">Pro Tips</span>
              <h2 className="text-3xl font-black mt-3 text-white">Weekend Road Trip Tips from Delhi</h2>
            </div>
            <div className="space-y-5">
              {[
                { title: 'Best Time to Leave Delhi', text: 'For destinations under 4 hours, leave by 6 AM on Saturday to avoid Gurgaon/Noida expressway traffic. For hill stations (5+ hours), consider leaving Friday night.', color: 'emerald' },
                { title: 'Pack Smart for 2-Day Trips', text: 'A backpack with essentials works better than a full suitcase. Keep snacks, water, chargers, and medicines handy. For hill stations, carry a light jacket even in summer.', color: 'teal' },
                { title: 'Toll & Highway Info', text: 'Most routes use expressways or national highways. Delhi-Agra (Yamuna Expressway) and Delhi-Jaipur are toll roads. Our cab fares include all tolls — zero extra cost.', color: 'cyan' },
              ].map((tip, i) => (
                <div key={i} className={`relative bg-gradient-to-r from-${tip.color}-500/10 to-transparent border-l-4 border-${tip.color}-500 rounded-r-2xl p-6 backdrop-blur-sm`}>
                  <h3 className="text-lg font-bold text-white mb-2">{tip.title}</h3>
                  <p className="text-stone-400 leading-relaxed">{tip.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Explore More - Journey Links */}
        <section className="py-16 px-4 bg-stone-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-black text-center mb-10 text-white">Explore More Road Trips</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: '7-Day Himachal Tour by Car', href: '/7-day-himachal-tour-by-car', desc: 'Shimla, Manali, Dharamshala circuit' },
                { title: '10-Day North India Road Trip', href: '/10-day-north-india-road-trip', desc: 'Delhi to Jaisalmer epic circuit' },
                { title: 'Kashmir Road Trip from Delhi', href: '/kashmir-road-trip-from-delhi', desc: 'Srinagar, Gulmarg, Pahalgam' },
                { title: 'Weekend Getaways from Jaipur', href: '/weekend-getaways-from-jaipur-by-car', desc: '20 destinations from Jaipur' },
                { title: 'Outstation Cabs from Delhi', href: '/outstation-cabs', desc: 'All outstation cab services' },
                { title: 'Spiti Valley Road Trip', href: '/spiti-valley-road-trip-from-delhi', desc: '10-day adventure circuit' },
                { title: 'Getaways from Chandigarh', href: '/weekend-getaways-from-chandigarh-by-car', desc: 'Hill station escapes' },
                { title: 'Delhi City Hub', href: '/delhi', desc: 'Delhi cab services' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group flex items-center gap-4 bg-stone-800/50 hover:bg-stone-800 border border-stone-700/50 hover:border-emerald-500/30 p-5 rounded-2xl transition-all duration-300">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors flex-shrink-0">
                    <ChevronRight className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm group-hover:text-emerald-300 transition-colors">{link.title}</div>
                    <div className="text-stone-500 text-xs mt-0.5">{link.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="py-16 px-4 bg-stone-950">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-center mb-3 text-white">Travel Guides & Resources</h2>
            <p className="text-stone-500 text-center mb-10 text-sm">Helpful guides for planning your road trip from Delhi</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Weekend Getaways from Chandigarh', href: '/weekend-getaways-from-chandigarh-by-car', desc: 'Hill stations and escapes from Chandigarh' },
                { title: 'Weekend Getaways from Jaipur', href: '/weekend-getaways-from-jaipur-by-car', desc: 'Best road trips from the Pink City' },
                { title: '10-Day North India Road Trip', href: '/10-day-north-india-road-trip', desc: 'Epic road trip covering North India highlights' },
                { title: 'Kashmir Road Trip from Delhi', href: '/kashmir-road-trip-from-delhi', desc: 'Road trip to the paradise on earth' },
                { title: 'Delhi Sightseeing Tours', href: '/delhi', desc: 'Explore the capital city with local guides' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group bg-stone-800/50 border border-stone-700/50 p-5 rounded-2xl hover:border-emerald-500/30 transition-all">
                  <div className="font-semibold text-white text-sm group-hover:text-emerald-300 transition-colors">{link.title}</div>
                  <div className="text-xs text-stone-500 mt-1">{link.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic: Cab Services & Wedding */}
        <section className="py-16 px-4 bg-stone-900">
          <div className="max-w-6xl mx-auto space-y-14">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Cab Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {getServicePages().map((item, index) => (
                  <Link key={index} href={item.url} className="group block bg-stone-800/50 border border-stone-700/50 rounded-2xl p-5 hover:border-emerald-500/30 transition-all">
                    <h3 className="font-semibold text-white group-hover:text-emerald-300 transition-colors">{item.title}</h3>
                    <p className="text-stone-500 text-sm mt-1">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Wedding Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {getWeddingPages().map((item, index) => (
                  <Link key={index} href={item.url} className="group block bg-stone-800/50 border border-stone-700/50 rounded-2xl p-5 hover:border-emerald-500/30 transition-all">
                    <h3 className="font-semibold text-white group-hover:text-emerald-300 transition-colors">{item.title}</h3>
                    <p className="text-stone-500 text-sm mt-1">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ - Accordion Style */}
        <section className="py-20 px-4 bg-stone-950">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-emerald-400 text-sm font-bold tracking-[0.2em] uppercase">Got Questions?</span>
              <h2 className="text-4xl font-black mt-3 text-white">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {faqData.map((faq, i) => (
                <details key={i} className="group bg-stone-900/50 border border-stone-800 hover:border-stone-700 rounded-2xl overflow-hidden transition-colors">
                  <summary className="font-semibold text-white cursor-pointer p-6 flex items-center justify-between">
                    <span className="pr-4">{faq.question}</span>
                    <ChevronRight className="w-5 h-5 text-emerald-400 group-open:rotate-90 transition-transform duration-300 flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 -mt-2">
                    <p className="text-stone-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Gradient Mesh */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-green-900" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/20 rounded-full blur-[120px]" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-transparent bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text">Plan Your Escape</span>
            </h2>
            <p className="text-emerald-100/70 text-xl mb-10">AC cabs from ₹9/km. Door-step pickup from anywhere in Delhi NCR.</p>
            <div className="flex flex-wrap justify-center gap-5">
              <a href="tel:7668570551" className="inline-flex items-center gap-3 bg-white text-stone-900 font-black px-10 py-5 rounded-2xl hover:bg-emerald-100 transition-colors shadow-2xl shadow-white/10">
                <Phone className="w-5 h-5" />
                Call 7668570551
              </a>
              <a href="https://wa.me/917668570551?text=Hi%20I%20want%20to%20plan%20a%20weekend%20trip%20from%20Delhi" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 font-bold px-10 py-5 rounded-2xl transition-all">
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
