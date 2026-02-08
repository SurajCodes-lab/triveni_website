import Link from 'next/link';
import { Phone, MapPin, Clock, Star, ChevronRight, Shield, Users, Calendar } from '@/components/ui/icons';
import { getServicePages, getWeddingPages } from '@/utilis/linkingHelper';

export const metadata = {
  title: 'Top 18 Weekend Getaways from Chandigarh by Car 2026 | Triveni Cabs',
  description: 'Best weekend trips from Chandigarh by car in 2026. Shimla, Kasauli, Manali, Dharamshala & more. Distance, drive time, costs. AC cab from ₹9/km. Call 7668570551.',
  keywords: 'weekend trips from chandigarh by car, weekend getaways from chandigarh, short trips from chandigarh, road trips from chandigarh, places near chandigarh by car',
  authors: [{ name: 'Triveni Cabs' }],
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/weekend-getaways-from-chandigarh-by-car' },
  openGraph: {
    title: 'Top 18 Weekend Getaways from Chandigarh by Car 2026',
    description: 'Plan the perfect weekend escape from Chandigarh into the Himalayas. 18 destinations with distance, costs & tips.',
    type: 'website', locale: 'en_IN',
    url: 'https://www.trivenicabs.in/weekend-getaways-from-chandigarh-by-car',
    siteName: 'Triveni Cabs',
  },
  twitter: { card: 'summary_large_image', title: 'Top 18 Weekend Getaways from Chandigarh by Car 2026' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const destinations = [
  { name: 'Shimla', distance: '115 km', duration: '3 hrs', bestTime: 'Year-round', highlight: 'Mall Road, Ridge, Jakhoo Temple, Christ Church', sedanPrice: '₹2,500', suvPrice: '₹3,500', slug: '/sightseeing/shimla', rating: 4.8 },
  { name: 'Kasauli', distance: '60 km', duration: '1.5 hrs', bestTime: 'Mar-Jun, Sep-Nov', highlight: 'Christ Church, Monkey Point, Gilbert Trail', sedanPrice: '₹1,500', suvPrice: '₹2,500', slug: '/sightseeing', rating: 4.7 },
  { name: 'Kasol', distance: '300 km', duration: '7 hrs', bestTime: 'Mar-Jun, Sep-Nov', highlight: 'Parvati Valley, Trekking, Israeli Cafes', sedanPrice: '₹6,000', suvPrice: '₹8,000', slug: '/sightseeing', rating: 4.7 },
  { name: 'Manali', distance: '310 km', duration: '7 hrs', bestTime: 'Year-round', highlight: 'Hadimba Temple, Solang Valley, Rohtang Pass', sedanPrice: '₹6,500', suvPrice: '₹9,000', slug: '/sightseeing/manali', rating: 4.9 },
  { name: 'Dharamshala', distance: '250 km', duration: '5.5 hrs', bestTime: 'Mar-Jun, Sep-Nov', highlight: 'McLeodGanj, HPCA Stadium, Bhagsu Waterfall', sedanPrice: '₹5,000', suvPrice: '₹7,000', slug: '/sightseeing/dharamshala', rating: 4.8 },
  { name: 'Chail', distance: '105 km', duration: '3 hrs', bestTime: 'Year-round', highlight: 'Chail Palace, Cricket Ground, Kali Ka Tibba', sedanPrice: '₹2,500', suvPrice: '₹3,500', slug: '/sightseeing', rating: 4.5 },
  { name: 'Parwanoo', distance: '35 km', duration: '1 hr', bestTime: 'Year-round', highlight: 'Timber Trail, Cactus Garden, Fruit Orchards', sedanPrice: '₹1,200', suvPrice: '₹2,000', slug: '/routes', rating: 4.4 },
  { name: 'Nahan', distance: '90 km', duration: '2.5 hrs', bestTime: 'Year-round', highlight: 'Renuka Lake, Jaitak Fort, Peaceful Town', sedanPrice: '₹2,000', suvPrice: '₹3,000', slug: '/routes', rating: 4.4 },
  { name: 'Pinjore', distance: '22 km', duration: '30 min', bestTime: 'Oct-Mar', highlight: 'Yadavindra Gardens, Bhima Devi Temple', sedanPrice: '₹800', suvPrice: '₹1,200', slug: '/routes', rating: 4.3 },
  { name: 'Morni Hills', distance: '45 km', duration: '1.5 hrs', bestTime: 'Year-round', highlight: 'Tikkar Taal Lake, Trekking, Bird Watching', sedanPrice: '₹1,200', suvPrice: '₹2,000', slug: '/routes', rating: 4.4 },
  { name: 'Nalagarh', distance: '65 km', duration: '1.5 hrs', bestTime: 'Oct-Mar', highlight: 'Nalagarh Fort, Heritage Stay, Gardens', sedanPrice: '₹1,500', suvPrice: '₹2,500', slug: '/routes', rating: 4.5 },
  { name: 'Dalhousie', distance: '325 km', duration: '7 hrs', bestTime: 'Mar-Jun, Sep-Nov', highlight: 'Khajjiar, Kalatop Wildlife, Mall Road', sedanPrice: '₹6,500', suvPrice: '₹9,000', slug: '/sightseeing', rating: 4.7 },
  { name: 'Amritsar', distance: '230 km', duration: '4 hrs', bestTime: 'Oct-Mar', highlight: 'Golden Temple, Wagah Border, Street Food', sedanPrice: '₹4,500', suvPrice: '₹6,500', slug: '/sightseeing/amritsar', rating: 4.9 },
  { name: 'Haridwar', distance: '200 km', duration: '4.5 hrs', bestTime: 'Year-round', highlight: 'Har Ki Pauri, Ganga Aarti, Temples', sedanPrice: '₹4,000', suvPrice: '₹5,500', slug: '/sightseeing/haridwar', rating: 4.7 },
  { name: 'Rishikesh', distance: '220 km', duration: '5 hrs', bestTime: 'Sep-Jun', highlight: 'River Rafting, Yoga, Laxman Jhula', sedanPrice: '₹4,500', suvPrice: '₹6,000', slug: '/sightseeing/rishikesh', rating: 4.8 },
  { name: 'Mussoorie', distance: '195 km', duration: '5 hrs', bestTime: 'Mar-Jun, Sep-Nov', highlight: 'Kempty Falls, Gun Hill, Camel Back Road', sedanPrice: '₹4,000', suvPrice: '₹5,500', slug: '/sightseeing/mussoorie', rating: 4.7 },
  { name: 'Bir Billing', distance: '270 km', duration: '6 hrs', bestTime: 'Mar-Jun, Sep-Nov', highlight: 'Paragliding Capital, Monastery, Trekking', sedanPrice: '₹5,500', suvPrice: '₹7,500', slug: '/sightseeing', rating: 4.6 },
  { name: 'Spiti Valley', distance: '450 km', duration: '12 hrs', bestTime: 'Jun-Oct', highlight: 'Key Monastery, Chandratal Lake, High Desert', sedanPrice: '₹9,000', suvPrice: '₹12,000', slug: '/spiti-valley-road-trip-from-delhi', rating: 4.9 },
];

const faqData = [
  { question: 'Which is the nearest hill station from Chandigarh?', answer: 'Kasauli is the nearest at just 60 km (1.5 hours). Parwanoo (35 km, 1 hour) is even closer if you want a quick escape with the Timber Trail cable car experience.' },
  { question: 'What is the best weekend trip from Chandigarh for families?', answer: 'Shimla (115 km, 3 hrs) is perfect for families with its Mall Road, Jakhoo Temple, and toy train. Chail (105 km) offers a quieter alternative with the cricket ground and nature walks.' },
  { question: 'Can I hire a cab from Chandigarh for a weekend trip?', answer: 'Yes! Triveni Cabs provides AC cabs from Chandigarh starting ₹9/km (sedan) and ₹12/km (SUV). All-inclusive pricing. Call 7668570551 or WhatsApp to book.' },
  { question: 'Which Chandigarh weekend trip is best for adventure?', answer: 'Bir Billing (270 km) for paragliding, Kasol (300 km) for trekking, and Rishikesh (220 km) for river rafting. All are reachable within 5-7 hours by car.' },
  { question: 'Is it better to take a car or bus for Chandigarh to Shimla?', answer: 'A private car is recommended — it takes 3 hours vs 4-5 by bus, you get door-to-door service, can stop at viewpoints like Barog and Solan, and return at your own pace.' },
  { question: 'What type of vehicle is best for mountain trips from Chandigarh?', answer: 'SUV (Innova Crysta/Ertiga) is recommended for mountain roads beyond Shimla. For trips to Kasauli, Shimla, or Parwanoo, a sedan works fine. Larger groups can opt for our Tempo Traveller.' },
];

export default function WeekendGetawaysFromChandigarhPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": "Weekend Getaways from Chandigarh by Car",
    "description": "Top 18 weekend road trip destinations from Chandigarh with cab service",
    "touristType": "Weekend Travelers",
    "provider": { "@type": "LocalBusiness", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Weekend Getaways from Chandigarh", "item": "https://www.trivenicabs.in/weekend-getaways-from-chandigarh-by-car" }
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
    "name": "Top 18 Weekend Getaways from Chandigarh by Car",
    "numberOfItems": 18,
    "itemListElement": destinations.map((dest, i) => ({ "@type": "ListItem", "position": i + 1, "name": dest.name, "url": `https://www.trivenicabs.in${dest.slug}` }))
  };

  const nearDestinations = destinations.filter(d => parseFloat(d.duration) <= 3);
  const farDestinations = destinations.filter(d => parseFloat(d.duration) > 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="min-h-screen bg-slate-950 text-white">
        {/* Hero - Mountain Aurora Theme with diagonal split */}
        <section className="relative min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tl from-sky-950 via-slate-950 to-cyan-950" />
          {/* Mountain silhouette wave pattern */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 80L20 60L40 75L60 40L80 65L100 50L120 70L120 120L0 120Z' fill='%2306b6d4' opacity='0.8'/%3E%3Cpath d='M0 90L30 70L50 85L70 55L90 75L120 60L120 120L0 120Z' fill='%230ea5e9' opacity='0.5'/%3E%3C/svg%3E")` }} />
          {/* Aurora-like glowing orbs */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-cyan-500/10 rounded-full blur-[150px] rotate-12" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-sky-400/15 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-1/3 w-60 h-60 bg-teal-400/10 rounded-full blur-[100px]" />

          <div className="max-w-7xl mx-auto px-4 relative z-10 py-20">
            <div className="grid lg:grid-cols-5 gap-12 items-center">
              <div className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-400/20 backdrop-blur-sm px-5 py-2.5 rounded-full mb-8">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-cyan-300 text-sm font-medium tracking-wide uppercase">Gateway to the Himalayas</span>
                </div>
                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-[0.9]">
                  <span className="text-white">Weekend</span>
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-cyan-300 via-sky-200 to-teal-300 bg-clip-text">Getaways</span>
                  <br />
                  <span className="text-slate-500 text-3xl md:text-4xl font-light">from The City Beautiful</span>
                </h1>
                <p className="text-slate-400 text-lg mb-10 max-w-xl leading-relaxed">
                  Hill stations, adventure spots, and spiritual retreats. 18 mountain escapes from 30 minutes to 12 hours away.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="tel:7668570551" className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-black font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-cyan-500/25">
                    <Phone className="w-5 h-5" /> Call 7668570551
                  </a>
                  <a href="https://wa.me/917668570551" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-white/10 px-8 py-4 rounded-2xl transition-all duration-300 font-semibold">
                    WhatsApp Us
                  </a>
                </div>
              </div>

              {/* Right side - Glass stat panel */}
              <div className="lg:col-span-2">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 space-y-6">
                  <h3 className="text-sm text-cyan-300 uppercase tracking-widest font-medium">At a Glance</h3>
                  {[
                    { value: '18+', label: 'Himalayan Destinations', color: 'from-cyan-400 to-sky-400' },
                    { value: '₹800', label: 'Starting From', color: 'from-sky-400 to-blue-400' },
                    { value: '30 min', label: 'Nearest Escape', color: 'from-teal-400 to-cyan-400' },
                    { value: '10+ Yrs', label: 'Mountain Driving Experts', color: 'from-blue-400 to-indigo-400' },
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className={`text-3xl font-black text-transparent bg-gradient-to-r ${stat.color} bg-clip-text min-w-[100px]`}>{stat.value}</div>
                      <div className="text-slate-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations - Split into Near & Far with different card styles */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900" />
          <div className="max-w-7xl mx-auto relative z-10">
            {/* Near destinations - horizontal scrolling-style cards */}
            <div className="mb-20">
              <div className="flex items-end justify-between mb-10">
                <div>
                  <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Quick Escapes</span>
                  <h2 className="text-3xl md:text-4xl font-black mt-2 text-white">Under 3 Hours Away</h2>
                </div>
                <div className="hidden md:block text-slate-500 text-sm">{nearDestinations.length} destinations</div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {nearDestinations.map((dest, index) => (
                  <div key={index} className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-5 hover:border-cyan-500/30 transition-all duration-500">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-white">{dest.name}</h3>
                      <div className="flex items-center gap-1 text-cyan-400">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="text-sm font-semibold">{dest.rating}</span>
                      </div>
                    </div>
                    <p className="text-slate-400 text-sm mb-4">{dest.highlight}</p>
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                      <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-500" />{dest.distance}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-cyan-500" />{dest.duration}</span>
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-slate-700/30">
                      <div className="text-sm">
                        <span className="text-slate-500">Sedan</span> <span className="text-cyan-300 font-bold">{dest.sedanPrice}</span>
                        <span className="text-slate-600 mx-2">|</span>
                        <span className="text-slate-500">SUV</span> <span className="text-cyan-300 font-bold">{dest.suvPrice}</span>
                      </div>
                      <Link href={dest.slug} className="text-cyan-400 hover:text-cyan-300 text-sm font-semibold">
                        <ChevronRight className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Far destinations - larger cards with more detail */}
            <div>
              <div className="flex items-end justify-between mb-10">
                <div>
                  <span className="text-sky-400 text-sm font-medium tracking-widest uppercase">Himalayan Adventures</span>
                  <h2 className="text-3xl md:text-4xl font-black mt-2 text-white">Epic Weekend Drives</h2>
                </div>
                <div className="hidden md:block text-slate-500 text-sm">{farDestinations.length} destinations</div>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                {farDestinations.map((dest, index) => (
                  <div key={index} className="group relative bg-gradient-to-br from-sky-900/20 to-slate-900/40 backdrop-blur-sm border border-sky-700/15 rounded-3xl p-7 hover:border-sky-400/30 transition-all duration-500 hover:shadow-lg hover:shadow-sky-500/5">
                    <div className="absolute top-5 right-5 w-16 h-16 bg-sky-500/5 rounded-full blur-xl group-hover:bg-sky-500/10 transition-all" />
                    <div className="flex items-start justify-between mb-4 relative z-10">
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-sky-200 transition-colors">{dest.name}</h3>
                        <p className="text-sky-300/40 text-sm mt-1">{dest.highlight}</p>
                      </div>
                      <div className="flex items-center gap-1 bg-sky-500/10 px-2.5 py-1 rounded-lg">
                        <Star className="w-3.5 h-3.5 text-sky-400 fill-current" />
                        <span className="text-sm font-semibold text-sky-300">{dest.rating}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mb-5 relative z-10">
                      {[
                        { icon: MapPin, value: dest.distance },
                        { icon: Clock, value: dest.duration },
                        { icon: Calendar, value: dest.bestTime },
                      ].map((item, i) => (
                        <div key={i} className="bg-slate-800/50 rounded-xl p-3 text-center">
                          <item.icon className="w-4 h-4 text-sky-400 mx-auto mb-1.5" />
                          <span className="text-xs text-slate-300">{item.value}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-sky-700/15 relative z-10">
                      <div className="flex gap-5">
                        <div>
                          <span className="text-[10px] text-sky-400/40 uppercase tracking-wider">Sedan</span>
                          <div className="text-sky-300 font-bold">{dest.sedanPrice}</div>
                        </div>
                        <div>
                          <span className="text-[10px] text-sky-400/40 uppercase tracking-wider">SUV</span>
                          <div className="text-sky-300 font-bold">{dest.suvPrice}</div>
                        </div>
                      </div>
                      <Link href={dest.slug} className="text-sky-400 hover:text-sky-300 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                        Explore <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Travel Tips - Glass Panels */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-slate-950" />
          <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/8 rounded-full blur-[120px]" />
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-12">
              <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">Pro Tips</span>
              <h2 className="text-3xl md:text-4xl font-black mt-3 text-white">Mountain Road Trip Tips</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 backdrop-blur-xl border border-cyan-500/10 rounded-3xl p-8 hover:border-cyan-500/20 transition-all">
                <div className="w-12 h-12 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-5">
                  <Shield className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Road Conditions & Vehicle Choice</h3>
                <p className="text-slate-400 text-sm leading-relaxed">For destinations like Kasauli, Shimla, and Parwanoo, a sedan is perfectly fine. For trips beyond Shimla (Manali, Dharamshala, Spiti), opt for an SUV for better ground clearance on mountain roads.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-sky-500/10 rounded-3xl p-8 hover:border-sky-500/20 transition-all">
                <div className="w-12 h-12 bg-sky-500/10 rounded-2xl flex items-center justify-center mb-5">
                  <Clock className="w-6 h-6 text-sky-400" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">Best Time to Start</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Leave Chandigarh by 5-6 AM to enjoy mountain views in daylight and avoid the afternoon traffic on Kalka-Shimla highway. Weekend traffic to Shimla peaks on Friday evening.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Interlinks */}
        <section className="py-16 px-4 relative">
          <div className="absolute inset-0 bg-slate-900" />
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-2xl font-bold text-center mb-10 text-white">More Road Trip Ideas</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'Weekend Getaways from Delhi', href: '/weekend-getaways-from-delhi-by-car', desc: '20 destinations from Delhi' },
                { title: '7-Day Himachal Tour', href: '/7-day-himachal-tour-by-car', desc: 'Shimla-Manali-Dharamshala circuit' },
                { title: 'Spiti Valley Road Trip', href: '/spiti-valley-road-trip-from-delhi', desc: '10-day high-altitude adventure' },
                { title: 'Weekend Getaways from Jaipur', href: '/weekend-getaways-from-jaipur-by-car', desc: '20 destinations from Jaipur' },
                { title: 'Kashmir Road Trip', href: '/kashmir-road-trip-from-delhi', desc: 'Srinagar-Gulmarg-Pahalgam' },
                { title: 'Chandigarh City Hub', href: '/chandigarh', desc: 'Chandigarh cab services' },
                { title: 'Outstation Cabs', href: '/outstation-cabs', desc: 'All outstation cab services' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 p-5 rounded-2xl hover:bg-slate-800/60 hover:border-cyan-500/20 transition-all duration-300 flex items-center gap-4">
                  <div className="w-10 h-10 bg-cyan-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ChevronRight className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{link.title}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{link.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Related Guides */}
        <section className="py-16 px-4 relative">
          <div className="absolute inset-0 bg-slate-950" />
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-2xl font-bold text-center mb-3 text-white">Travel Guides & Resources</h2>
            <p className="text-slate-500 text-center mb-10 text-sm">Helpful guides for planning your mountain road trip</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'Weekend Getaways from Delhi', href: '/weekend-getaways-from-delhi-by-car', desc: 'Top road trips and escapes from Delhi' },
                { title: 'Weekend Getaways from Jaipur', href: '/weekend-getaways-from-jaipur-by-car', desc: 'Best road trips from the Pink City' },
                { title: '7-Day Himachal Tour by Car', href: '/7-day-himachal-tour-by-car', desc: 'Shimla-Manali-Dharamshala hill station tour' },
                { title: 'Chandigarh Sightseeing Tours', href: '/chandigarh', desc: 'Explore the City Beautiful with local guides' },
              ].map((link, i) => (
                <Link key={i} href={link.href} className="group bg-slate-800/40 border border-slate-700/30 p-5 rounded-2xl hover:border-cyan-500/20 transition-all">
                  <div className="font-semibold text-white text-sm group-hover:text-cyan-300 transition-colors">{link.title}</div>
                  <div className="text-xs text-slate-500 mt-1">{link.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Dynamic: Cab Services & Wedding */}
        <section className="py-16 px-4 relative">
          <div className="absolute inset-0 bg-slate-900" />
          <div className="max-w-6xl mx-auto relative z-10 space-y-14">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Cab Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {getServicePages().map((item, index) => (
                  <Link key={index} href={item.url} className="group block bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-5 hover:border-cyan-500/20 transition-all">
                    <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                    <p className="text-slate-500 text-sm mt-1">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Wedding Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {getWeddingPages().map((item, index) => (
                  <Link key={index} href={item.url} className="group block bg-slate-800/40 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-5 hover:border-cyan-500/20 transition-all">
                    <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                    <p className="text-slate-500 text-sm mt-1">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-slate-950" />
          <div className="max-w-3xl mx-auto relative z-10">
            <div className="text-center mb-14">
              <span className="text-cyan-400 text-sm font-medium tracking-widest uppercase">FAQ</span>
              <h2 className="text-3xl md:text-4xl font-black mt-3 text-white">Frequently Asked Questions</h2>
            </div>
            <div className="space-y-3">
              {faqData.map((faq, i) => (
                <details key={i} className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/20 rounded-2xl overflow-hidden">
                  <summary className="p-6 font-semibold text-white cursor-pointer flex items-center justify-between hover:text-cyan-200 transition-colors">
                    <span className="pr-4">{faq.question}</span>
                    <ChevronRight className="w-5 h-5 text-cyan-500 group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 -mt-1">
                    <p className="text-slate-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Northern Lights Style */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-900 via-sky-900 to-slate-950" />
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-cyan-400/10 via-sky-500/5 to-transparent" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-500/15 rounded-full blur-[130px]" />
          <div className="absolute top-10 right-1/4 w-72 h-72 bg-sky-400/10 rounded-full blur-[100px]" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-5">
              <span className="text-transparent bg-gradient-to-r from-cyan-200 via-sky-100 to-teal-200 bg-clip-text">Into the Mountains</span>
            </h2>
            <p className="text-cyan-100/50 text-lg mb-10 max-w-xl mx-auto">AC cabs with experienced mountain drivers from Chandigarh. Starting ₹9/km.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:7668570551" className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-sm border border-white/20 text-white font-bold px-10 py-4 rounded-2xl transition-all duration-300 shadow-xl">
                <Phone className="w-5 h-5" /> Call 7668570551
              </a>
              <a href="https://wa.me/917668570551?text=Hi%20I%20want%20to%20plan%20a%20weekend%20trip%20from%20Chandigarh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-black font-bold px-10 py-4 rounded-2xl transition-all duration-300">
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
