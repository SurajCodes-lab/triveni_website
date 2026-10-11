import Link from 'next/link';
import { Phone, MapPin, Clock, Star, ChevronRight, Shield, Users, Calendar } from '@/components/ui/icons';
import { getServicePages, getWeddingPages } from '@/utilis/linkingHelper';
import { buildStaticService, buildPlaceSchemas, getArticleSchema, getHowToSchema, getComparisonSchema } from '@/utilis/tripSchemaHelper';
import { tightenTitle } from '@/lib/seo/serp-ctr';
// servedHref: two destination slugs here are redirect sources, so the ItemList
// markup was publishing a URL that 301s instead of the page actually served.
import { servedHref } from '@/lib/seo/route-exists';

const SLUG = 'weekend-getaways-from-udaipur-by-car';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Top 15 Weekend Getaways from Udaipur by Car 2026'),
  description: 'Best weekend trips from Udaipur by car in 2026. Udaipur, Pushkar, Ranthambore, Mount Abu & more. Distance, drive time, costs. AC cab from ₹11/km. Call 7668570551.',
  keywords: 'weekend trips from udaipur by car, weekend getaways from udaipur, short trips from udaipur, road trips from udaipur, places to visit near udaipur by car',
  authors: [{ name: 'Triveni Cabs™' }],
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/weekend-getaways-from-udaipur-by-car' },
  openGraph: {
    title: 'Top 15 Weekend Getaways from Udaipur by Car 2026',
    description: 'Plan the perfect weekend escape from Udaipur. 20 destinations with distance, costs & tips.',
    type: 'website', locale: 'en_IN',
    url: 'https://www.trivenicabs.in/weekend-getaways-from-udaipur-by-car',
    siteName: 'Triveni Cabs™',
  },
  twitter: { card: 'summary_large_image', title: 'Top 15 Weekend Getaways from Udaipur by Car 2026' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

const destinations = [
  { name: 'Nathdwara', distance: '48 km', duration: '1 hr', bestTime: 'Year-round', highlight: 'Shrinathji Temple, Statue of Belief', sedanPrice: '₹1,056', suvPrice: '₹1,440', slug: '/sightseeing', rating: 4.7, tag: 'Spiritual' },
  { name: 'Kumbhalgarh', distance: '85 km', duration: '2 hrs', bestTime: 'Oct-Mar', highlight: 'Great Wall of India, Badal Mahal', sedanPrice: '₹1,870', suvPrice: '₹2,550', slug: '/sightseeing', rating: 4.8, tag: 'Fortress' },
  { name: 'Ranakpur', distance: '90 km', duration: '2 hrs', bestTime: 'Oct-Mar', highlight: 'Marble Jain temple, 1,444 pillars', sedanPrice: '₹1,980', suvPrice: '₹2,700', slug: '/sightseeing', rating: 4.8, tag: 'Heritage' },
  { name: 'Mount Abu', distance: '165 km', duration: '3.5 hrs', bestTime: 'Oct-Mar', highlight: 'Dilwara Temples, Nakki Lake, Sunset Point', sedanPrice: '₹3,630', suvPrice: '₹4,950', slug: '/sightseeing/mount-abu', rating: 4.7, tag: 'Hill Station' },
  { name: 'Chittorgarh', distance: '115 km', duration: '2 hrs', bestTime: 'Oct-Mar', highlight: 'Chittorgarh Fort, Vijay Stambh, Padmini Palace', sedanPrice: '₹2,530', suvPrice: '₹3,450', slug: '/sightseeing', rating: 4.7, tag: 'Historic' },
  { name: 'Jodhpur', distance: '250 km', duration: '5 hrs', bestTime: 'Oct-Mar', highlight: 'Mehrangarh Fort, Blue City, Jaswant Thada', sedanPrice: '₹5,500', suvPrice: '₹7,500', slug: '/sightseeing/jodhpur', rating: 4.8, tag: 'Royal' },
  { name: 'Haldighati', distance: '40 km', duration: '1 hr', bestTime: 'Oct-Mar', highlight: 'Battlefield, Maharana Pratap memorial', sedanPrice: '₹880', suvPrice: '₹1,200', slug: '/routes', rating: 4.5, tag: 'Historic' },
  { name: 'Eklingji & Sas Bahu', distance: '22 km', duration: '40 minutes', bestTime: 'Year-round', highlight: 'Temple complex, carved pillars', sedanPrice: '₹484', suvPrice: '₹660', slug: '/routes', rating: 4.6, tag: 'Spiritual' },
  { name: 'Jaisamand Lake', distance: '50 km', duration: '1 hr', bestTime: 'Oct-Mar', highlight: 'Second largest artificial lake, island palaces', sedanPrice: '₹1,100', suvPrice: '₹1,500', slug: '/routes', rating: 4.5, tag: 'Nature' },
  { name: 'Bundi', distance: '275 km', duration: '5 hrs', bestTime: 'Oct-Mar', highlight: 'Taragarh Fort, step wells, palace murals', sedanPrice: '₹6,050', suvPrice: '₹8,250', slug: '/sightseeing', rating: 4.5, tag: 'Hidden Gem' },
  { name: 'Jaipur', distance: '395 km', duration: '6 hrs', bestTime: 'Oct-Mar', highlight: 'Amber Fort, Hawa Mahal, City Palace', sedanPrice: '₹8,690', suvPrice: '₹11,850', slug: '/sightseeing/jaipur', rating: 4.8, tag: 'Royal' },
  { name: 'Pushkar', distance: '280 km', duration: '5 hrs', bestTime: 'Oct-Mar', highlight: 'Brahma Temple, holy lake, camel fair', sedanPrice: '₹6,160', suvPrice: '₹8,400', slug: '/sightseeing/pushkar', rating: 4.7, tag: 'Spiritual' },
  { name: 'Ahmedabad', distance: '260 km', duration: '4.5 hrs', bestTime: 'Oct-Mar', highlight: 'Sabarmati Ashram, old city heritage walk', sedanPrice: '₹5,720', suvPrice: '₹7,800', slug: '/routes', rating: 4.5, tag: 'City Break' },
  { name: 'Rajsamand', distance: '65 km', duration: '1.5 hrs', bestTime: 'Oct-Mar', highlight: 'Rajsamand Lake, Dwarkadhish Temple', sedanPrice: '₹1,430', suvPrice: '₹1,950', slug: '/routes', rating: 4.4, tag: 'Nature' },
  { name: 'Udaipur city tour', distance: 'Local', duration: 'Full day', bestTime: 'Sep-Mar', highlight: 'City Palace, Lake Pichola, Saheliyon Ki Bari', sedanPrice: 'Local package', suvPrice: 'Local package', slug: '/sightseeing/udaipur', rating: 4.9, tag: 'City Tour' },
];

const faqData = [
  { question: 'What are the best day trips from Udaipur?', answer: 'Udaipur is unusually well placed for short trips. Eklingji is forty minutes away, Nathdwara an hour, Haldighati about the same, and Kumbhalgarh and Ranakpur are two hours each and usually taken together. All five are comfortable returns in a day, which is not true of most Rajasthan cities.' },
  { question: 'Can I see Kumbhalgarh and Ranakpur in one day from Udaipur?', answer: 'Yes, and it is the standard pairing. They sit about 50 km apart in the same valley, roughly two hours from Udaipur. Leave by 8am, take Ranakpur first while the marble is cool, then Kumbhalgarh in the afternoon for the fort wall and the evening light show if it is running.' },
  { question: 'Which weekend trip from Udaipur suits a couple?', answer: 'Mount Abu at 165 km is the usual choice — three and a half hours, noticeably cooler, and small enough to walk around. For something quieter, Jaisamand Lake at 50 km or Rajsamand at 65 km both make a half-day escape without a hotel booking.' },
  { question: 'How much does a cab from Udaipur cost?', answer: 'Published sedan rates start at ₹11 per kilometre, with a minimum billable distance on outstation journeys and a local package for a full day around the city and its nearby temples. The fares above are one-way sedan rates. Fuel, driver and tax are included; tolls, parking and permits are at actuals.' },
  { question: 'Is Udaipur a good base for a wider Rajasthan trip?', answer: 'It is the best base in southern Rajasthan. Jodhpur is five hours north, Udaipur six hours north-east, and Ahmedabad four and a half hours south — so Udaipur works as either the start or the end of a circuit. Tell us the overnight stops when booking; a circuit quoted as one multi-day journey costs less than the same route booked as separate one-way trips.' },
  { question: 'When should I visit Udaipur and the lakes?', answer: 'September to March, and September in particular if you want the lakes full after the monsoon. The lakes are the point of Udaipur and they look very different in a dry year. April to June regularly passes 40°C, which makes the palace courtyards hard work by midday.' },
];

export default function WeekendGetawaysFromUdaipurPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "@id": `https://www.trivenicabs.in/${SLUG}#trip`,
    "name": "Weekend Getaways from Udaipur by Car",
    "description": "Top 15 weekend road trip destinations from Udaipur with all-inclusive cab service",
    "touristType": "Weekend Travelers",
    "provider": { "@type": "TravelAgency", "@id": "https://www.trivenicabs.in/#organization", "name": "Triveni Cabs", "telephone": "+91-7668570551", "url": "https://www.trivenicabs.in" }
  };
  const cabServiceSchema = buildStaticService({
    slug: SLUG,
    name: 'Weekend Getaway Cab Service from Udaipur',
    description: 'Outstation weekend cab service from Udaipur to Udaipur, Pushkar, Jodhpur, Ranthambore, Mount Abu and more. AC cabs with all-inclusive fares.',
    lowPrice: 1500,
    highPrice: 14000,
  });
  const articleSchema = getArticleSchema({
    slug: SLUG,
    headline: 'Top 15 Weekend Getaways from Udaipur by Car 2026',
    description: 'Best weekend trips from Udaipur by car with distance, cost and best time.',
    image: '/images/triveni-cabs-og.jpg',
    datePublished: '2025-03-01',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first'],
  });
  const howToSchema = getHowToSchema({
    name: 'How to Plan a Weekend Getaway from Udaipur by Car',
    description: 'Step-by-step guide to picking a southern Rajasthan weekend destination near Udaipur and booking an all-inclusive cab.',
    totalTime: 'PT5M',
    estimatedCost: { currency: 'INR', value: 1500 },
    steps: [
      { name: 'Pick a destination by drive time', text: 'Choose a quick royal escape (Pushkar, Ajmer, Ranthambore, Bundi) or a longer heritage drive (Udaipur, Jodhpur, Mount Abu, Jaisalmer).' },
      { name: 'Choose your vehicle', text: 'A sedan suits couples; an Innova or Ertiga SUV is ideal for desert highways and families of 4-6. Tempo Travellers cover larger groups visiting multiple forts.' },
      { name: 'Get an all-inclusive quote', text: 'Call or WhatsApp 7668570551 with your destination, dates and group size for a transparent fare covering fuel, tolls, parking and driver allowance.' },
      { name: 'Confirm and travel', text: 'No advance payment required. A verified driver picks you up from anywhere in Udaipur for the weekend road trip.' },
    ],
  });
  const comparisonSchema = getComparisonSchema({
    slug: SLUG,
    title: 'Quick vs Long Weekend Getaways from Udaipur',
    description: 'Comparison of weekend getaways from Udaipur by drive time, theme and starting cab fare.',
    rows: [
      { feature: 'Quick royal escapes (under 3 hrs)' },
      { feature: 'Long heritage drives (over 3 hrs)' },
    ],
    mentions: ['Udaipur', 'Pushkar', 'Jodhpur', 'Ranthambore', 'Mount Abu', 'Jaisalmer', 'Agra'],
  });
  const placeSchemas = buildPlaceSchemas(['udaipur', 'pushkar', 'ajmer', 'ranthambore', 'jodhpur', 'mount-abu', 'bikaner', 'jaisalmer', 'agra', 'udaipur'], SLUG, '/images/triveni-cabs-og.jpg');

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Weekend Getaways from Udaipur", "item": "https://www.trivenicabs.in/weekend-getaways-from-udaipur-by-car" }
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
    "name": "Top 15 Weekend Getaways from Udaipur by Car",
    "numberOfItems": 20,
    "itemListElement": destinations.map((dest, i) => ({ "@type": "ListItem", "position": i + 1, "name": dest.name, "url": `https://www.trivenicabs.in${servedHref(dest.slug) || dest.slug}` }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(cabServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      {comparisonSchema.map((s, i) => (
        <script key={`cmp-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      {placeSchemas.map((s, i) => (
        <script key={`place-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

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

          <div className="max-w-7xl mx-auto px-4 relative z-10 py-12 sm:py-20">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-3 bg-amber-500/10 border border-amber-500/25 backdrop-blur-sm px-6 py-3 rounded-full mb-10">
                <div className="w-2 h-2 bg-amber-400 rounded-full" />
                <span className="text-amber-300 text-sm font-medium tracking-widest uppercase">15 Royal Destinations</span>
              </div>

              <h1 className="speakable-headline text-5xl md:text-8xl font-black mb-8 leading-[0.85] tracking-tight">
                <span className="text-transparent bg-gradient-to-r from-amber-300 via-yellow-200 to-orange-300 bg-clip-text">Weekend</span>
                <br />
                <span className="text-transparent bg-gradient-to-r from-orange-300 via-amber-200 to-yellow-300 bg-clip-text">Getaways</span>
                <br />
                <span className="text-amber-600/60 text-3xl md:text-5xl font-light tracking-wide">from the City of Lakes</span>
              </h1>

              <p className="speakable-lead text-amber-200/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                The best weekend getaways from Udaipur by car include Kumbhalgarh, Ranakpur, Nathdwara, Mount Abu and Chittorgarh. Triveni Cabs™ runs all-inclusive AC cabs covering fuel, tolls and driver allowance to desert forts, lake palaces, tiger safaris and sacred temples across royal Rajasthan.
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
                <a href="https://wa.me/917668570551?text=Hi%20I%20want%20to%20plan%20a%20weekend%20trip%20from%20Udaipur" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-sm border border-amber-500/20 hover:border-amber-500/40 px-10 py-4 rounded-2xl transition-all duration-300 font-semibold">
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Destinations - Bento Grid with Tags */}
        <section className="py-12 sm:py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-amber-950 via-amber-950/95 to-stone-950" />
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-10 sm:mb-16">
              <span className="text-amber-500 text-sm font-medium tracking-widest uppercase">Explore Southern Rajasthan</span>
              <h2 className="text-4xl md:text-5xl font-black mt-3 text-white">All 20 Destinations</h2>
              <p className="text-amber-300/40 mt-4 max-w-2xl mx-auto">Lakes, marble temples, hill forts and the long roads north — each one handpicked for the perfect weekend from Udaipur.</p>
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
        <section className="py-12 sm:py-20 px-4 relative">
          <div className="absolute inset-0 bg-stone-950" />
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="text-center mb-14">
              <span className="text-amber-500 text-sm font-medium tracking-widest uppercase">Why Triveni Cabs™</span>
              <h2 className="text-3xl md:text-4xl font-black mt-3 text-white">Your Southern Rajasthan Guide</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Shield, title: 'Rajasthan Experts', desc: 'Drivers who know every fort, palace & desert road' },
                { icon: Star, title: 'Best Rates', desc: 'Transparent ₹9-12/km, no hidden charges ever' },
                { icon: Users, title: 'Trusted by 5000+', desc: 'Families, couples & groups trust our service' },
                { icon: Clock, title: 'Doorstep Pickup', desc: 'From hotel, airport, or your home in Udaipur' },
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
        <section className="py-10 sm:py-16 px-4 relative">
          <div className="absolute inset-0 bg-amber-950/50" />
          <div className="max-w-6xl mx-auto relative z-10">
            <h2 className="text-2xl font-bold text-center mb-10 text-white">More Road Trip Ideas</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { title: 'Places to Visit Near Udaipur', href: '/places-to-visit-near-udaipur', desc: 'Destinations around Udaipur with fares' },
                { title: '5-Day Rajasthan Road Trip', href: '/5-day-rajasthan-road-trip-jaipur-udaipur-jodhpur', desc: 'Jaipur-Udaipur-Jodhpur circuit' },
                { title: 'Rajasthan Desert Circuit', href: '/rajasthan-desert-circuit-tour', desc: 'Jaisalmer-Jodhpur-Bikaner' },
                { title: '10-Day North India Trip', href: '/10-day-north-india-road-trip', desc: 'Epic North India road trip' },
                { title: 'Weekend Getaways from Chandigarh', href: '/weekend-getaways-from-chandigarh-by-car', desc: '18 destinations from Chandigarh' },
                { title: 'Golden Triangle Tour', href: '/sightseeing/golden-triangle-tour-3-days', desc: 'Delhi-Agra-Jaipur circuit' },
                { title: 'Udaipur City Hub', href: '/udaipur', desc: 'Udaipur cab services and local packages' },
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
        <section className="py-10 sm:py-16 px-4 relative">
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
                { title: 'Udaipur Sightseeing Tours', href: '/udaipur', desc: 'Explore the City of Lakes with local guides' },
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
        <section className="py-12 sm:py-20 px-4 relative">
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
                    <p className={`text-amber-200/50 leading-relaxed ${i === 0 ? 'speakable-faq-first' : ''}`}>{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Gradient Mesh */}
        <section className="relative py-12 sm:py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-700 via-orange-700 to-red-800" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-500/20 rounded-full blur-[100px]" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-5">
              <span className="text-transparent bg-gradient-to-r from-yellow-200 to-amber-100 bg-clip-text">Plan Your Royal Escape</span>
            </h2>
            <p className="text-amber-100/70 text-lg mb-10 max-w-xl mx-auto">AC cabs from ₹11/km with doorstep pickup from anywhere in Udaipur. Experienced Rajasthan drivers.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:7668570551" className="inline-flex items-center gap-3 bg-black/30 hover:bg-black/40 backdrop-blur-sm border border-white/20 text-white font-bold px-10 py-4 rounded-2xl transition-all duration-300 shadow-xl">
                <Phone className="w-5 h-5" /> Call 7668570551
              </a>
              <a href="https://wa.me/917668570551?text=Hi%20I%20want%20to%20plan%20a%20weekend%20trip%20from%20Udaipur" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white hover:bg-amber-50 text-amber-900 font-bold px-10 py-4 rounded-2xl transition-all duration-300">
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
