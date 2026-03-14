import Link from 'next/link';
import Image from 'next/image';
import { MapPin, ChevronRight, Phone, Shield, Clock, Users, Star, Car, Compass, Camera, Heart, Landmark } from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

export const revalidate = false;

export const metadata = {
  title: 'Tourist Spots India 2026 | Forts, Palaces, Lakes & Heritage | Book Cab',
  description: 'Explore top tourist spots across Jaipur, Udaipur, Jodhpur. Amber Fort, Hawa Mahal, Lake Pichola, Mehrangarh Fort & more. Cab from Rs 11/km. Call 7668570551.',
  keywords: 'tourist spots india, jaipur tourist places, udaipur tourist spots, jodhpur sightseeing, rajasthan tourism, famous places india, heritage sites india, forts palaces india',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/tourist-spots' },
  openGraph: {
    title: 'Tourist Spots India 2026 | Heritage, Forts & Palaces',
    description: 'Discover famous tourist spots across India. Jaipur, Udaipur, Jodhpur. Book cab from Rs 11/km.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/tourist-spots',
    siteName: 'Triveni Cabs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tourist Spots India 2026 | Book Cab Rs 11/km',
    description: 'Top tourist spots with cab service. Jaipur, Udaipur, Jodhpur heritage sites.',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

// City data with themed colors and icons
const touristSpotsData = {
  Jaipur: {
    tagline: "The Pink City",
    color: "rose",
    gradient: "from-rose-500 to-pink-600",
    lightGradient: "from-rose-50 to-pink-50",
    accentBg: "bg-rose-500/20",
    accentText: "text-rose-400",
    accentBorder: "border-rose-500/30",
    hoverBorder: "hover:border-rose-400/50",
    detailLink: "/tourist-attractions/jaipur",
    spots: [
      { name: "Amber Fort", description: "Historic fort overlooking Maota Lake, known for its artistic Hindu style elements with large ramparts, series of gates and cobbled paths.", image: "/images/tourist-spots/amber-fort.jpg", icon: Landmark, highlight: "UNESCO Heritage" },
      { name: "Hawa Mahal", description: "The Palace of Winds is a five-story palace built in 1799 with a unique honeycomb facade of 953 small windows to allow royal ladies to observe street festivals.", image: "/images/tourist-spots/hawa-mahal.jpg", icon: Camera, highlight: "Iconic Landmark" },
      { name: "City Palace", description: "A complex of courtyards, gardens and buildings, the impressive City Palace is right in the center of the Old City, a perfect blend of Rajasthani and Mughal architecture.", image: "/images/tourist-spots/city-palace.jpg", icon: Landmark, highlight: "Royal Heritage" },
      { name: "Jantar Mantar", description: "An astronomical observation site built in the early 18th century that features the world's largest stone sundial and is a UNESCO World Heritage site.", image: "/images/tourist-spots/jantar-mantar.jpg", icon: Compass, highlight: "UNESCO Site" },
      { name: "Jal Mahal", description: "The Water Palace sits in the middle of Man Sagar Lake and appears to float on the water when the lake is full. The palace has a scenic view of the hills.", image: "/images/tourist-spots/jal-mahal.jpg", icon: Camera, highlight: "Lake Palace" },
      { name: "Nahargarh Fort", description: "Standing on the edge of the Aravalli Hills, this fort offers breathtaking panoramic views of the Pink City and was originally built as a defense fortress.", image: "/images/tourist-spots/nahargarh-fort.jpg", icon: Landmark, highlight: "Panoramic Views" },
    ],
  },
  Udaipur: {
    tagline: "City of Lakes",
    color: "cyan",
    gradient: "from-cyan-500 to-teal-600",
    lightGradient: "from-cyan-50 to-teal-50",
    accentBg: "bg-cyan-500/20",
    accentText: "text-cyan-400",
    accentBorder: "border-cyan-500/30",
    hoverBorder: "hover:border-cyan-400/50",
    detailLink: "/tourist-attractions/udaipur",
    spots: [
      { name: "Lake Pichola", description: "Artificial fresh water lake created in 1362 AD, named after the nearby Picholi village. The lake houses several islands including Jag Niwas and Jag Mandir.", image: "/images/tourist-spots/lake-pichola.jpg", icon: Compass, highlight: "Heritage Lake" },
      { name: "City Palace", description: "Built over a period of nearly 400 years, the City Palace is a majestic architectural marvel towering over Lake Pichola with its balconies, towers and cupolas.", image: "/images/tourist-spots/udaipur-city-palace.jpg", icon: Landmark, highlight: "400-Year Marvel" },
      { name: "Sajjangarh Palace", description: "Also known as the Monsoon Palace, this hilltop royal residence offers spectacular views of the city's lakes, palaces and surrounding countryside.", image: "/images/tourist-spots/sajjangarh.jpg", icon: Camera, highlight: "Monsoon Palace" },
      { name: "Jagdish Temple", description: "Built in 1651, this Indo-Aryan style temple dedicated to Lord Vishnu is a major monument in Udaipur with beautifully carved pillars, walls and ceilings.", image: "/images/tourist-spots/jagdish-temple.jpg", icon: Heart, highlight: "Sacred Temple" },
      { name: "Fateh Sagar Lake", description: "The second artificial lake of Udaipur, surrounded by hills and woods. The lake has three islands and is a popular recreational spot.", image: "/images/tourist-spots/fateh-sagar.jpg", icon: Compass, highlight: "Nature Retreat" },
      { name: "Saheliyon Ki Bari", description: "Garden of the Maidens, built for the royal ladies who came in princess's dowry. Features beautiful fountains, kiosks, marble pavilions and lotus pools.", image: "/images/tourist-spots/saheliyon-ki-bari.jpg", icon: Camera, highlight: "Royal Garden" },
    ],
  },
  Jodhpur: {
    tagline: "The Blue City",
    color: "blue",
    gradient: "from-blue-500 to-indigo-600",
    lightGradient: "from-blue-50 to-indigo-50",
    accentBg: "bg-blue-500/20",
    accentText: "text-blue-400",
    accentBorder: "border-blue-500/30",
    hoverBorder: "hover:border-blue-400/50",
    detailLink: "/tourist-attractions/jodhpur",
    spots: [
      { name: "Mehrangarh Fort", description: "One of the largest forts in India, standing 400 feet above the city with impressive views. Houses several palaces, extensive courtyards and historic artifacts.", image: "/images/tourist-spots/mehrangarh-fort.jpg", icon: Landmark, highlight: "India's Largest" },
      { name: "Jaswant Thada", description: "Royal cenotaph built in marble, commemorating Maharaja Jaswant Singh II. Known for its intricate carvings and peaceful setting with a multi-tiered garden.", image: "/images/tourist-spots/jaswant-thada.jpg", icon: Camera, highlight: "Marble Cenotaph" },
      { name: "Umaid Bhawan Palace", description: "One of the world's largest private residences, part of which is managed by Taj Hotels. Built between 1928 and 1943, displays a blend of eastern and western architectural influences.", image: "/images/tourist-spots/umaid-bhawan.jpg", icon: Landmark, highlight: "Taj Heritage" },
      { name: "Clock Tower & Sardar Market", description: "Vibrant marketplace in the heart of the old city, centered around a prominent clock tower. Offers textiles, silver jewelry, handicrafts and spices.", image: "/images/tourist-spots/clock-tower.jpg", icon: Compass, highlight: "Local Market" },
      { name: "Mandore Gardens", description: "Ancient town that was Marwar's capital before Jodhpur. Features cenotaphs of Jodhpur's rulers, a Hall of Heroes, temple and museum set in beautiful gardens.", image: "/images/tourist-spots/mandore-gardens.jpg", icon: Camera, highlight: "Ancient Capital" },
    ],
  },
};

const cities = Object.keys(touristSpotsData);
const totalSpots = Object.values(touristSpotsData).reduce((sum, city) => sum + city.spots.length, 0);

export default function TouristSpotsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Tourist Spots", "item": "https://www.trivenicabs.in/tourist-spots" },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Popular Tourist Spots in India",
    "description": "Top tourist attractions across Jaipur, Udaipur, and Jodhpur with cab services",
    "numberOfItems": totalSpots,
    "itemListElement": Object.entries(touristSpotsData).flatMap(([city, data], cityIdx) =>
      data.spots.map((spot, idx) => ({
        "@type": "ListItem",
        "position": cityIdx * 10 + idx + 1,
        "name": `${spot.name}, ${city}`,
        "url": data.detailLink ? `https://www.trivenicabs.in${data.detailLink}` : undefined,
      }))
    ),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Tourist Sightseeing Cab Service",
    "name": "Tourist Spots Cab Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
    },
    "areaServed": { "@type": "Country", "name": "India" },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "2847", "bestRating": "5" },
  };

  const faqData = [
    { question: "What is the cost of sightseeing cab in Jaipur?", answer: "Jaipur full-day sightseeing by sedan costs Rs 2,500. Covers Amber Fort, Hawa Mahal, City Palace, Jantar Mantar, Jal Mahal, and Nahargarh Fort. SUV available at Rs 3,500. Call 7668570551." },
    { question: "Can I book a cab for Udaipur lake tour?", answer: "Yes! Udaipur lake and palace tour by sedan costs Rs 2,000 for full day. Covers Lake Pichola, City Palace, Sajjangarh, Fateh Sagar Lake. Boat rides extra. Call 7668570551." },
    { question: "How many days do I need for Jodhpur sightseeing?", answer: "1 full day covers all major Jodhpur spots: Mehrangarh Fort, Jaswant Thada, Umaid Bhawan, Clock Tower, Mandore Gardens. 2 days recommended for a relaxed visit." },
    { question: "Do you provide guides at tourist spots?", answer: "We provide experienced local drivers who know the history and best routes. For licensed guides at monuments, we can arrange at Rs 500-1,000 per site." },
    { question: "Which vehicle is best for sightseeing?", answer: "Sedan (Dzire/Etios) for couples or small families. SUV (Innova/Ertiga) for families of 5-7. Tempo Traveller for groups of 8-17. All AC vehicles with experienced drivers." },
    { question: "Can I customize my sightseeing itinerary?", answer: "Absolutely! Tell us your interests and time, and we'll create a custom itinerary. We know hidden gems that most tourists miss. WhatsApp us at 7668570551." },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })),
  };

  const trustFeatures = [
    { icon: Shield, title: "Verified Drivers", desc: "Background-checked & trained" },
    { icon: Star, title: "4.9 Rating", desc: "2,847+ happy travelers" },
    { icon: Clock, title: "24/7 Support", desc: "Round-the-clock assistance" },
    { icon: Car, title: "AC Vehicles", desc: "Clean & comfortable fleet" },
  ];

  const vehicleOptions = [
    { name: "Sedan", price: "Rs 11/km", capacity: "4 Passengers", features: ["AC", "Music System", "GPS Tracked"], link: "/vehicles/sedan", gradient: "from-amber-500 to-yellow-500" },
    { name: "SUV / Innova", price: "Rs 15/km", capacity: "6-7 Passengers", features: ["Full AC", "Spacious", "Push-back Seats"], link: "/vehicles/suv", gradient: "from-emerald-500 to-teal-500" },
    { name: "Tempo Traveller", price: "Rs 24/km", capacity: "12-17 Passengers", features: ["AC", "Push-back Seats", "Music System"], link: "/vehicles/tempo-traveller", gradient: "from-blue-500 to-indigo-500" },
  ];

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes shimmer-gold { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes float-gentle { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 20px rgba(250,207,45,0.2); } 50% { box-shadow: 0 0 40px rgba(250,207,45,0.4); } }
        @keyframes gradient-shift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .shimmer-gold { background: linear-gradient(110deg, #FACF2D 0%, #fde68a 25%, #fffbeb 50%, #fde68a 75%, #FACF2D 100%); background-size: 200% auto; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer-gold 4s linear infinite; }
        .glass-card { background: rgba(255,255,255,0.05); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1); }
        .glass-card-hover:hover { border-color: rgba(250,207,45,0.3); box-shadow: 0 20px 60px -12px rgba(250,207,45,0.15); transform: translateY(-6px); }
        .hover-lift { transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
        .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25); }
      ` }} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-slate-950">
        {/* ======= HERO SECTION ======= */}
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
          {/* Animated background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-stone-950" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 15s ease infinite' }} />

          {/* Floating orbs */}
          <div className="absolute top-1/4 left-1/5 w-80 h-80 bg-yellow-500/10 rounded-full blur-[120px]" style={{ animation: 'float-gentle 8s ease-in-out infinite' }} />
          <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px]" style={{ animation: 'float-gentle 10s ease-in-out infinite 2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#FACF2D]/10 rounded-full blur-[100px]" style={{ animation: 'float-gentle 12s ease-in-out infinite 4s' }} />

          {/* Dot pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='1.5' fill='%23FACF2D'/%3E%3C/svg%3E")` }} />

          {/* Hero Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            {/* Breadcrumb */}
            <nav className="flex justify-center mb-8" aria-label="Breadcrumb">
              <ol className="inline-flex items-center gap-2 text-sm">
                <li><Link href="/" className="text-gray-400 hover:text-[#FACF2D] transition-colors">Home</Link></li>
                <li><ChevronRight className="w-3.5 h-3.5 text-gray-600" /></li>
                <li className="text-[#FACF2D] font-medium">Tourist Spots</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 bg-[#FACF2D]/10 backdrop-blur-md px-6 py-2.5 rounded-full mb-8 border border-[#FACF2D]/20">
              <Compass className="w-4 h-4 text-[#FACF2D]" />
              <span className="text-[#FACF2D]/90 font-semibold text-sm tracking-wider uppercase">Heritage & Wonders of India</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Explore India&apos;s Finest{' '}
              <span className="shimmer-gold">Tourist Spots</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Forts, palaces, lakes & heritage sites across Jaipur, Udaipur & Jodhpur. Travel in comfort with AC cabs from Rs 11/km.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+917668570551"
                className="inline-flex items-center justify-center gap-2 bg-[#FACF2D] text-slate-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-[#FACF2D]/30 hover:scale-105 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call: 7668570551
              </Link>
              <Link
                href="https://wa.me/917668570551?text=I want to book a sightseeing cab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-white/20 hover:bg-white/20 transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp Inquiry
              </Link>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-xl border-t border-white/10">
            <div className="max-w-6xl mx-auto px-4 py-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {trustFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-white/90">
                    <div className="p-2.5 bg-[#FACF2D]/15 rounded-xl">
                      <feature.icon className="w-5 h-5 text-[#FACF2D]" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">{feature.title}</div>
                      <div className="text-xs text-gray-400">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ======= CITY SECTIONS ======= */}
        {Object.entries(touristSpotsData).map(([cityName, cityData], cityIdx) => (
          <section key={cityName} className={`py-20 px-4 ${cityIdx % 2 === 0 ? 'bg-slate-950' : 'bg-slate-900/50'}`}>
            <div className="max-w-7xl mx-auto">
              {/* City Header */}
              <div className="text-center mb-14">
                <div className={`inline-flex items-center gap-2 ${cityData.accentBg} backdrop-blur-md px-5 py-2 rounded-full mb-5 border ${cityData.accentBorder}`}>
                  <MapPin className={`w-4 h-4 ${cityData.accentText}`} />
                  <span className={`${cityData.accentText} font-semibold text-sm tracking-wider uppercase`}>{cityData.tagline}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  Tourist Spots in{' '}
                  <span className={`text-transparent bg-gradient-to-r ${cityData.gradient} bg-clip-text`}>{cityName}</span>
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  Explore the magnificent heritage and beauty of {cityName} with our expert drivers
                </p>
              </div>

              {/* Spots Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cityData.spots.map((spot, idx) => (
                  <div
                    key={spot.name}
                    className="group glass-card glass-card-hover rounded-2xl overflow-hidden hover-lift"
                  >
                    {/* Image */}
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={spot.image}
                        alt={`${spot.name} - ${cityName} Tourist Spot`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Highlight badge */}
                      <div className="absolute top-4 left-4">
                        <span className={`bg-gradient-to-r ${cityData.gradient} text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg flex items-center gap-1.5`}>
                          <spot.icon className="w-3 h-3" />
                          {spot.highlight}
                        </span>
                      </div>

                      {/* Title on image */}
                      <div className="absolute bottom-0 left-0 right-0 p-5">
                        <h3 className="text-xl font-bold text-white leading-tight">{spot.name}</h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">{spot.description}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{cityName}, Rajasthan</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* View Full Guide CTA */}
              {cityData.detailLink && (
                <div className="mt-12 text-center">
                  <Link
                    href={cityData.detailLink}
                    className={`inline-flex items-center gap-2 bg-gradient-to-r ${cityData.gradient} text-white px-8 py-3.5 rounded-full font-bold text-sm shadow-xl hover:scale-105 transition-all`}
                  >
                    <Compass className="w-4 h-4" />
                    View Complete {cityName} Attractions Guide
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <p className="text-gray-500 text-sm mt-3">
                    Detailed info on all {cityName} attractions with timings, entry fees & tips
                  </p>
                </div>
              )}
            </div>
          </section>
        ))}

        {/* ======= VEHICLE OPTIONS ======= */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-900 to-slate-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <div className="inline-flex items-center gap-2 bg-[#FACF2D]/10 px-5 py-2 rounded-full mb-5 border border-[#FACF2D]/20">
                <Car className="w-4 h-4 text-[#FACF2D]" />
                <span className="text-[#FACF2D]/90 font-semibold text-sm tracking-wider uppercase">Our Fleet</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your <span className="shimmer-gold">Ride</span>
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                AC vehicles with experienced local drivers who know every tourist spot
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {vehicleOptions.map((vehicle, idx) => (
                <Link key={vehicle.name} href={vehicle.link} className="group block">
                  <div className="glass-card rounded-2xl p-7 hover-lift glass-card-hover h-full flex flex-col">
                    <div className={`inline-flex items-center gap-2 bg-gradient-to-r ${vehicle.gradient} text-white px-4 py-1.5 rounded-full text-xs font-bold mb-5 self-start`}>
                      <Car className="w-3.5 h-3.5" />
                      {vehicle.capacity}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2">{vehicle.name}</h3>
                    <div className="text-3xl font-bold text-[#FACF2D] mb-5">{vehicle.price}</div>

                    <ul className="space-y-3 mb-6 flex-1">
                      {vehicle.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2.5 text-sm text-gray-300">
                          <Shield className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2 text-[#FACF2D] font-semibold text-sm group-hover:gap-3 transition-all">
                      View Details
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ======= FAQ SECTION ======= */}
        <section className="py-20 px-4 bg-slate-950">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-400">
                Everything you need to know about sightseeing with Triveni Cabs
              </p>
            </div>

            <div className="space-y-4">
              {faqData.map((faq, idx) => (
                <details key={idx} className="group glass-card rounded-2xl overflow-hidden">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-white font-semibold text-base pr-4">{faq.question}</h3>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ======= CTA SECTION ======= */}
        <section className="py-20 px-4 bg-gradient-to-br from-[#FACF2D] to-amber-500 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Ready to Explore India&apos;s Heritage?
            </h2>
            <p className="text-slate-700 text-lg mb-8 max-w-2xl mx-auto">
              Book your sightseeing cab today. AC vehicles, experienced drivers, transparent pricing. No hidden charges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="tel:+917668570551"
                className="inline-flex items-center justify-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-slate-800 hover:scale-105 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call: +91 7668570551
              </Link>
              <Link
                href="https://wa.me/917668570551?text=I want to book a sightseeing cab"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp Booking
              </Link>
            </div>

            <p className="mt-6 text-slate-700 text-sm">
              Or visit our{' '}
              <Link href="/sightseeing" className="underline font-semibold hover:text-slate-900">sightseeing tours</Link>
              {' '}and{' '}
              <Link href="/pricing" className="underline font-semibold hover:text-slate-900">pricing page</Link>
              {' '}for detailed packages
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
