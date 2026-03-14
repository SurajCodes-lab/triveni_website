import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, Camera, Landmark, Compass, Calendar, Bird, Binoculars, Map, Target } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Rishikesh Beyond Rafting | Hidden Gems & Secret Spots | 2026',
  description: 'Discover Rishikesh beyond white water rafting. Neer Garh Waterfall, Beatles Ashram, Kunjapuri sunrise, Patna Waterfall, Rajaji Park + more. Call 7668570551.',
  keywords: 'rishikesh beyond rafting, rishikesh hidden gems, beatles ashram, kunjapuri temple, neer garh waterfall, rajaji national park, vashishta cave, neelkanth mahadev',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/rishikesh-beyond-rafting' },
  openGraph: {
    title: 'Rishikesh Beyond Rafting | Hidden Gems & Secret Spots 2026',
    description: 'Discover what Rishikesh has beyond rafting. Waterfalls, ashrams, sunrise temples, wildlife. Complete guide by locals.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/rishikesh-beyond-rafting',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/rishikesh-hero.jpg', width: 1200, height: 630, alt: 'Rishikesh Beyond Rafting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rishikesh Beyond Rafting | Hidden Gems',
    description: 'Beatles Ashram, sunrise temples, waterfalls, wildlife safaris. By Rishikesh locals.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/rishikesh-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function RishikeshBeyondRaftingPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Rishikesh Beyond Rafting", "item": "https://www.trivenicabs.in/rishikesh-beyond-rafting" },
    ],
  };

  const faqData = [
    { question: "What can I do in Rishikesh besides rafting?", answer: "Rishikesh has incredible experiences beyond rafting: Neer Garh Waterfall, Beatles Ashram (Maharishi Mahesh Yogi Ashram), Kunjapuri Temple sunrise trek, Patna Waterfall, Rajaji National Park safari, Shivpuri beach camping, Vashishta Cave meditation, and Neelkanth Mahadev Temple." },
    { question: "What is the Beatles Ashram?", answer: "The Beatles Ashram (Maharishi Mahesh Yogi Ashram) in Rishikesh is where the Beatles stayed in 1968 to study Transcendental Meditation. Now a beautifully decaying ruin covered in street art and graffiti, it is one of Rishikesh&apos;s most photogenic and culturally significant sites. Entry is around 150." },
    { question: "Is the Kunjapuri sunrise trek worth it?", answer: "Absolutely! Kunjapuri Temple at 1,676 meters offers one of the most spectacular sunrises in Uttarakhand, with 180-degree views of the Himalayan snowline including Swargarohini, Bandarpunch, and Chaukhamba peaks. It is 25 km from Rishikesh. Our cab takes you to the base; a short climb reaches the top." },
    { question: "What is Neer Garh Waterfall?", answer: "Neer Garh is a beautiful multi-tiered waterfall just 5 km from Rishikesh, reached by a short uphill walk. The two levels of cascading water create natural pools ideal for swimming. Less crowded than most Rishikesh spots, it is a refreshing escape from the town&apos;s heat." },
    { question: "Can I do a wildlife safari from Rishikesh?", answer: "Yes! Rajaji National Park (15 km from Rishikesh) offers jeep safaris where you can spot elephants, tigers, leopards, and over 300 bird species. The Chilla zone is the most accessible from Rishikesh. Safaris run October to June. Our cab takes you to the park gate." },
    { question: "What is Vashishta Cave?", answer: "Vashishta Cave (also called Vashishta Gufa) is an ancient cave on the Ganges bank where sage Vashishta is believed to have meditated. The cave is small but spiritually powerful. A temple complex surrounds it. It is about 25 km from Rishikesh on the road to Badrinath." },
    { question: "What is Shivpuri beach camping?", answer: "Shivpuri (16 km from Rishikesh) offers riverside beach camping on the banks of the Ganges. You sleep in tents on a sandy beach, with bonfire, music, and star-gazing. Many camps include meals and a morning rafting session. It is the most popular overnight experience near Rishikesh." },
    { question: "How many days do I need for Rishikesh beyond rafting?", answer: "1 day covers rafting + Laxman Jhula. 2 days lets you add Beatles Ashram, waterfalls, and Vashishta Cave. 3 days adds Kunjapuri sunrise, Rajaji safari, and camping. Our 3-day itinerary covers everything and transforms a rafting trip into a complete Rishikesh experience." },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer },
    })),
  };

  const hiddenGems = [
    { name: "Neer Garh Waterfall", desc: "A beautiful two-tiered waterfall cascading into natural rock pools surrounded by forest, just a short walk from the road. The pools at the base are perfect for a refreshing dip. Much less crowded than Rishikesh&apos;s main attractions, it offers a peaceful escape into nature right on the town&apos;s doorstep.", distance: "5 km from Laxman Jhula", timing: "Best 8 AM - 4 PM; avoid in heavy monsoon", whyVisit: "A hidden two-tiered waterfall with swimming pools just minutes from crowded Rishikesh", cabTip: "Our driver drops you at the road; a 1 km uphill walk reaches the falls" },
    { name: "Beatles Ashram (Maharishi Mahesh Yogi)", desc: "The abandoned ashram where the Beatles, Donovan, and Mike Love stayed in 1968 to study Transcendental Meditation. The crumbling meditation cells are now covered in stunning Beatles-themed graffiti and street art. The jungle is slowly reclaiming the buildings, creating an hauntingly beautiful atmosphere.", distance: "2 km from Ram Jhula", timing: "10 AM - 4 PM daily; entry around 150", whyVisit: "Walk where the Beatles meditated and wrote the White Album -- India&apos;s most iconic music pilgrimage", cabTip: "Walking distance from Ram Jhula; no vehicle access inside the ashram grounds" },
    { name: "Kunjapuri Temple (Sunrise)", desc: "A Shakti Peetha temple perched at 1,676 meters offering one of the most spectacular sunrise panoramas in the entire Himalayan foothills. On clear mornings, the snowline from Swargarohini to Chaukhamba glows gold as the sun rises. The 360-degree views encompass the Doon Valley and Ganges below.", distance: "25 km from Rishikesh", timing: "Leave by 4:30 AM for sunrise; temple open all day", whyVisit: "The single most spectacular sunrise in Uttarakhand -- the Himalayan snowline turns gold before your eyes", cabTip: "Early morning drive required; our drivers know the mountain road in the dark" },
    { name: "Patna Waterfall", desc: "A powerful waterfall surrounded by dense forest, less visited than Neer Garh and therefore more pristine. The trail to the falls passes through beautiful woodland. The cascading water creates a cool microclimate even in summer. A genuinely off-the-beaten-path natural attraction.", distance: "10 km from Rishikesh", timing: "Best 9 AM - 3 PM; most impressive after monsoon", whyVisit: "A powerful forest waterfall that fewer than 1% of Rishikesh visitors ever discover", cabTip: "Our driver takes you to the trailhead; a 20-minute walk reaches the falls" },
    { name: "Rajaji National Park", desc: "A vast national park on Rishikesh&apos;s doorstep that is home to Asian elephants, Bengal tigers, leopards, sloth bears, and over 300 bird species. The Chilla zone offers jeep safaris through sal forests and grasslands along the Ganges. Elephant sightings are common, tiger sightings require luck.", distance: "15 km from Rishikesh (Chilla gate)", timing: "Safaris: 6 AM and 3 PM; October to June (closed monsoon)", whyVisit: "Spot elephants and maybe even a tiger just 15 km from the yoga capital of the world", cabTip: "Morning safaris are best for wildlife; our cab takes you to the park gate by 5:30 AM" },
    { name: "Shivpuri Beach Camping", desc: "Riverside camps on sandy Ganges beaches at Shivpuri, offering an unforgettable overnight experience. Camps provide tents, bonfires, star-gazing, meals, and often include a morning rafting session. Falling asleep to the sound of the Ganges flowing past your tent is magical.", distance: "16 km from Rishikesh", timing: "Camps operate September to June; book in advance", whyVisit: "Sleep on a Ganges beach under the stars with bonfires and morning rafting -- ultimate Rishikesh night", cabTip: "Our driver drops you at camp and picks up next morning; a seamless experience" },
    { name: "Vashishta Cave", desc: "An ancient cave on the banks of the Ganges where sage Vashishta is believed to have meditated for thousands of years. The small, dark cave has a powerful spiritual energy. A temple complex surrounds it, and the peaceful Ganges-side setting is ideal for meditation.", distance: "25 km from Rishikesh", timing: "Open sunrise to sunset; best in early morning for meditation", whyVisit: "Meditate in a cave where an ancient sage sat for millennia -- the most spiritual spot near Rishikesh", cabTip: "On the Badrinath road; combine with Neelkanth Mahadev Temple for a full day" },
    { name: "Neelkanth Mahadev Temple", desc: "A sacred Shiva temple at 1,330 meters in the hills above Rishikesh, where Lord Shiva is believed to have consumed the poison from the churning of the ocean. The temple is set in dense forest and the drive up offers spectacular valley views. A deeply spiritual place for Shiva devotees.", distance: "30 km from Rishikesh", timing: "Open 6 AM - 7 PM; road is steep and winding", whyVisit: "One of Uttarakhand&apos;s holiest Shiva temples set deep in mountain forests with stunning valley views", cabTip: "Steep mountain road; our drivers handle it expertly; allow 1.5 hours for the drive" },
  ];

  const suggestedItineraries = [
    {
      title: "Day 1 - Waterfalls & Sacred History",
      duration: "Full Day",
      stops: [
        "7:00 AM - Morning yoga session by the Ganges",
        "9:00 AM - Beatles Ashram (Maharishi Mahesh Yogi Ashram, 2 hours)",
        "11:30 AM - Walk across Ram Jhula and Laxman Jhula",
        "1:00 PM - Lunch at a Ganges-view cafe",
        "2:30 PM - Neer Garh Waterfall (swimming in natural pools)",
        "5:00 PM - Triveni Ghat evening Ganga Aarti",
        "7:00 PM - Dinner in Rishikesh",
      ],
    },
    {
      title: "Day 2 - Sunrise Peak & Wildlife",
      duration: "Full Day",
      stops: [
        "4:30 AM - Drive to Kunjapuri Temple for sunrise (1 hour)",
        "5:45 AM - Sunrise from Kunjapuri (Himalayan panorama)",
        "7:30 AM - Return to Rishikesh for breakfast",
        "9:30 AM - Rajaji National Park jeep safari (3 hours)",
        "1:00 PM - Lunch",
        "2:30 PM - Patna Waterfall trek (2 hours)",
        "5:00 PM - Vashishta Cave meditation",
        "7:00 PM - Evening at leisure",
      ],
    },
    {
      title: "Day 3 - Temple & Beach Camp",
      duration: "Full Day into Night",
      stops: [
        "8:00 AM - Drive to Neelkanth Mahadev Temple (1.5 hours)",
        "9:30 AM - Temple darshan and forest walk",
        "11:30 AM - Return to Rishikesh",
        "12:30 PM - Lunch + shopping at Rishikesh market",
        "3:00 PM - Drive to Shivpuri beach camp (30 min)",
        "4:00 PM - Settle into camp, riverside relaxation",
        "7:00 PM - Bonfire, star-gazing, dinner on the Ganges beach",
      ],
    },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Uttarakhand Experts", desc: "We know every trail" },
    { icon: Compass, title: "8 Hidden Gems", desc: "Beyond the rafting crowd" },
    { icon: Landmark, title: "Sacred & Wild", desc: "Temples, caves, parks" },
    { icon: Star, title: "4.9 Rating", desc: "Google reviews" },
  ];

  const internalLinks = [
    { href: "/sightseeing/rishikesh", title: "Rishikesh Sightseeing", desc: "All Rishikesh attractions" },
    { href: "/rishikesh", title: "Rishikesh City Hub", desc: "Rishikesh cab services" },
    { href: "/delhi-airport-to-rishikesh-taxi", title: "Delhi to Rishikesh Taxi", desc: "Airport transfers" },
    { href: "/same-day-haridwar-rishikesh-from-delhi", title: "Haridwar-Rishikesh Day Trip", desc: "From Delhi" },
    { href: "/friends-trip-rishikesh", title: "Friends Trip Rishikesh", desc: "Group adventure" },
    { href: "/family-trip-rishikesh-from-delhi", title: "Family Trip Rishikesh", desc: "From Delhi by car" },
    { href: "/rishikesh-vs-manali", title: "Rishikesh vs Manali", desc: "Which to visit?" },
    { href: "/places-to-visit-near-rishikesh", title: "Places Near Rishikesh", desc: "Nearby destinations" },
    { href: "/uttarakhand-spiritual-circuit-tour", title: "Spiritual Circuit Tour", desc: "Multi-city pilgrimage" },
    { href: "/kanwar-yatra-cab-haridwar", title: "Kanwar Yatra Cab", desc: "Pilgrimage transport" },
    { href: "/same-day-haridwar-from-delhi", title: "Haridwar Day Trip", desc: "From Delhi" },
    { href: "/manali-beyond-solang-valley", title: "Manali Beyond Solang", desc: "Manali hidden gems" },
  ];

  const cityName = "Rishikesh";
  const landmark = "Rafting";
  const heroSubtitle = "Beatles ashrams, sunrise temples on mountain peaks, hidden waterfalls, ancient meditation caves, and wildlife safaris. Discover the yoga capital&apos;s deepest secrets.";
  const whatsappText = "I want to explore beyond rafting in Rishikesh";
  const introTitle = "The Yoga Capital Has Wilder Adventures";
  const introText = <>Most visitors to Rishikesh raft the rapids, cross Laxman Jhula, and head home. But this <strong>gateway to the Himalayas</strong> hides extraordinary experiences beyond the white water. In the jungle above the Ganges, the <strong>Beatles Ashram</strong> crumbles beautifully under graffiti murals, preserving the spot where John, Paul, George, and Ringo composed much of the White Album. Before dawn, a winding road climbs to <strong>Kunjapuri Temple</strong>, where the Himalayan snowline turns gold at sunrise in a panorama that leaves travelers speechless. Hidden waterfalls cascade into natural swimming pools just minutes from the tourist crowds. Ancient <strong>meditation caves</strong> along the Ganges offer the silence that yogis have sought for millennia. And at Rajaji National Park, wild elephants and tigers roam sal forests just 15 km from the ashram district. As Uttarakhand transport specialists who have driven countless seekers to these hidden spots, we know that the real Rishikesh experience begins where the rafting ends. This guide reveals the deeper journey.</>;
  const introStats = [
    { icon: Landmark, label: "8 Hidden Gems", sub: "Beyond the rapids", bg: "bg-gradient-to-br from-teal-50 to-cyan-50", iconColor: "text-teal-600" },
    { icon: Compass, label: "Wildlife Safari", sub: "Rajaji National Park", bg: "bg-gradient-to-br from-amber-50 to-orange-50", iconColor: "text-amber-600" },
    { icon: Map, label: "3-Day Itinerary", sub: "Complete explorer plan", bg: "bg-gradient-to-br from-cyan-50 to-blue-50", iconColor: "text-cyan-600" },
  ];
  const gemsSubtitle = "Eight extraordinary places around Rishikesh that go far beyond white water rafting";
  const itineraryTitle = "Suggested 3-Day Rishikesh Explorer Itinerary";
  const itinerarySubtitle = "Go beyond rafting -- discover the spiritual, wild, and secret sides of the yoga capital";
  const priceText = <>3-day Rishikesh explorer cab: <strong>&#8377;3,500-5,000</strong> | From Delhi: <strong>&#8377;8,500 sedan</strong> (3-day round trip)</>;
  const linksTitle = "More Rishikesh Guides & Tours";
  const ctaTitle = "Explore the Real Rishikesh with Locals";
  const ctaSubtitle = "We show you the Rishikesh that guidebooks miss. Beatles ashrams, sunrise temples, waterfalls, and wildlife.";

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(3deg); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes pulse-discover { 0%, 100% { box-shadow: 0 0 20px rgba(20,184,166,0.3); } 50% { box-shadow: 0 0 50px rgba(20,184,166,0.6); } }
        @keyframes gradient-shift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes radar-ping { 0% { transform: scale(0.8); opacity: 0.8; } 100% { transform: scale(3); opacity: 0; } }
        @keyframes compass-rotate { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
        .glass-card { background: rgba(255,255,255,0.05); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1); }
        .glass-card-light { background: rgba(255,255,255,0.85); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.3); box-shadow: 0 8px 32px rgba(0,0,0,0.06); }
        .shimmer-teal { background: linear-gradient(90deg, #14b8a6, #67e8f9, #14b8a6); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer 3s linear infinite; }
        .hover-lift { transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
        .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 25px 50px -12px rgba(20,184,166,0.25); }
        .card-glow:hover { box-shadow: 0 0 30px rgba(20,184,166,0.15), 0 25px 50px -12px rgba(0,0,0,0.1); }
        .radar-dot::after { content: ''; position: absolute; inset: 0; border-radius: 50%; background: rgba(20,184,166,0.4); animation: radar-ping 2s ease-out infinite; }
      ` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-teal-50/30">
        <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q25 30 50 50 Q75 70 100 50' fill='none' stroke='%230d9488' stroke-width='0.5'/%3E%3Cpath d='M0 30 Q25 10 50 30 Q75 50 100 30' fill='none' stroke='%230d9488' stroke-width='0.3'/%3E%3Cpath d='M0 70 Q25 50 50 70 Q75 90 100 70' fill='none' stroke='%230d9488' stroke-width='0.3'/%3E%3C/svg%3E")` }} />

        {/* HERO */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-950 via-slate-900 to-cyan-950" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 15s ease infinite' }} />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30h60M30 0v60' stroke='%2314b8a6' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")` }} />
          <div className="absolute top-1/3 left-1/6 w-80 h-80 bg-teal-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-1/6 w-56 h-56 bg-amber-500/10 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/10 to-transparent" />
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-teal-500/10 to-transparent" />
          <div className="absolute top-[20%] left-[15%] w-3 h-3 bg-teal-400 rounded-full relative radar-dot" style={{ animation: 'float 6s ease-in-out infinite' }} />
          <div className="absolute top-[60%] right-[12%] w-2.5 h-2.5 bg-cyan-400 rounded-full relative radar-dot" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '1s' }} />
          <div className="absolute top-[35%] right-[25%] w-2 h-2 bg-amber-400/60 rounded-full" style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '2s' }} />
          <div className="absolute bottom-[35%] left-[25%] w-2.5 h-2.5 bg-teal-300/40 rounded-full" style={{ animation: 'float 9s ease-in-out infinite', animationDelay: '0.5s' }} />
          <div className="absolute top-[45%] left-[40%] w-2 h-2 bg-cyan-300/30 rounded-full" />
          <div className="absolute top-12 right-12 w-16 h-16 opacity-10 hidden md:block">
            <div className="w-full h-full border-2 border-teal-400 rounded-full" style={{ animation: 'compass-rotate 30s linear infinite' }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-teal-400 rotate-45" />
            </div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-teal-500/20 backdrop-blur-md px-6 py-2.5 rounded-full mb-8 border border-teal-400/30" style={{ animation: 'pulse-discover 3s ease-in-out infinite' }}>
              <Binoculars className="w-4 h-4 text-teal-300" />
              <span className="text-teal-200 font-semibold text-sm tracking-[0.2em] uppercase">Explorer&apos;s Guide 2026</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
              {cityName} <span className="shimmer-teal">Beyond</span> {landmark}
            </h1>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-teal-400/60" />
              <Target className="w-5 h-5 text-teal-400" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-teal-400/60" />
            </div>
            <p className="text-lg md:text-xl text-teal-100/70 mb-12 max-w-3xl mx-auto leading-relaxed">{heroSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-teal-500/25 hover:shadow-teal-500/50 hover:scale-110 hover:-translate-y-1 transition-all duration-500">
                <Phone className="w-5 h-5" /> Call Now: 7668570551
              </Link>
              <Link href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappText)}`} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-teal-400/30 hover:bg-white/20 hover:scale-105 transition-all duration-500">
                WhatsApp Us
              </Link>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-teal-950/60 backdrop-blur-2xl border-t border-teal-500/20">
            <div className="max-w-6xl mx-auto px-4 py-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {trustFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/90">
                    <div className="p-2.5 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-xl border border-teal-400/20">
                      <f.icon className="w-5 h-5 text-teal-300" />
                    </div>
                    <div>
                      <div className="font-bold text-sm">{f.title}</div>
                      <div className="text-xs text-teal-200/60">{f.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card-light rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-teal-100/80 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-100/60 to-transparent rounded-tr-full" />
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6 relative">{introTitle}</h2>
              <p className="text-lg text-stone-600 leading-relaxed relative">{introText}</p>
              <div className="flex flex-wrap gap-4 mt-10 pt-8 border-t border-stone-200/50">
                {introStats.map((s, i) => (
                  <div key={i} className={`${s.bg} rounded-xl p-4 border border-teal-200/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center gap-3`}>
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <s.icon className={`w-5 h-5 ${s.iconColor}`} />
                    </div>
                    <div>
                      <div className="font-bold text-stone-800 text-sm">{s.label}</div>
                      <div className="text-xs text-stone-500">{s.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* HIDDEN GEMS */}
        <section className="py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-teal-950 via-slate-900 to-cyan-950" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 20s ease infinite' }} />
          <div className="absolute top-20 left-10 w-64 h-64 bg-teal-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[100px]" />
          <div className="relative max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Hidden Gems Most Tourists Miss</h2>
              <p className="text-teal-200/60 text-lg">{gemsSubtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {hiddenGems.map((g, idx) => (
                <div key={idx} className="glass-card rounded-3xl p-7 hover:bg-white/10 hover:border-teal-500/30 transition-all duration-500 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-cyan-500/0 group-hover:from-teal-500/5 group-hover:to-cyan-500/5 transition-all duration-500" />
                  <div className="absolute top-4 right-4" style={{ animation: 'pulse-discover 3s ease-in-out infinite', animationDelay: `${idx * 0.3}s` }}>
                    <span className="bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 text-teal-200 text-[10px] font-bold px-3 py-1.5 rounded-full tracking-wider">GEM {idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-teal-300 transition-colors duration-300 mb-3 pr-20 relative">{g.name}</h3>
                  <p className="text-white/60 text-sm mb-4 leading-relaxed relative">{g.desc}</p>
                  <div className="space-y-2.5 text-sm relative">
                    <div className="flex items-center gap-2 text-teal-300">
                      <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 rounded-lg p-1.5"><MapPin className="w-3.5 h-3.5" /></div>
                      <span>{g.distance}</span>
                    </div>
                    <div className="flex items-center gap-2 text-cyan-300">
                      <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg p-1.5"><Clock className="w-3.5 h-3.5" /></div>
                      <span>{g.timing}</span>
                    </div>
                    <div className="flex items-start gap-2 text-amber-300">
                      <div className="bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-lg p-1.5 mt-0.5"><Star className="w-3.5 h-3.5" /></div>
                      <span>{g.whyVisit}</span>
                    </div>
                    <div className="flex items-start gap-2 text-teal-200/50">
                      <div className="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-lg p-1.5 mt-0.5"><Compass className="w-3.5 h-3.5" /></div>
                      <span>{g.cabTip}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ITINERARIES */}
        <section className="py-20 px-4 bg-white/80">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3 text-center">{itineraryTitle}</h2>
            <p className="text-stone-500 text-center mb-14 text-lg">{itinerarySubtitle}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {suggestedItineraries.map((day, idx) => (
                <div key={idx} className="hover-lift card-glow rounded-3xl overflow-hidden">
                  <div className={`bg-gradient-to-br ${idx === 0 ? 'from-teal-600 to-cyan-600' : idx === 1 ? 'from-amber-500 to-orange-500' : 'from-violet-600 to-purple-600'} rounded-3xl p-1`}>
                    <div className="bg-white rounded-[20px] p-6">
                      <h3 className={`text-lg font-bold ${idx === 0 ? 'text-teal-700' : idx === 1 ? 'text-amber-700' : 'text-violet-700'} mb-5 flex items-center gap-3`}>
                        <div className={`w-10 h-10 bg-gradient-to-br ${idx === 0 ? 'from-teal-100 to-cyan-100' : idx === 1 ? 'from-amber-100 to-orange-100' : 'from-violet-100 to-purple-100'} rounded-xl flex items-center justify-center`}>
                          <span className={`${idx === 0 ? 'text-teal-700' : idx === 1 ? 'text-amber-700' : 'text-violet-700'} font-bold text-sm`}>0{idx + 1}</span>
                        </div>
                        {day.title}
                      </h3>
                      <div className="space-y-0.5">
                        {day.stops.map((stop, i) => (
                          <div key={i} className="flex items-start gap-2 text-stone-600 text-sm py-2 border-b border-stone-100/50 last:border-0 hover:bg-stone-50/50 hover:pl-2 transition-all duration-300 rounded">
                            <CheckCircle2 className={`w-4 h-4 ${idx === 0 ? 'text-teal-500' : idx === 1 ? 'text-amber-500' : 'text-violet-500'} mt-0.5 flex-shrink-0`} /> {stop}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-10 glass-card-light rounded-2xl p-5 border border-teal-200/30">
              <p className="text-teal-800 font-medium">{priceText}</p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, idx) => (
                <div key={idx} className="glass-card-light rounded-2xl p-6 hover:border-teal-300/50 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-500">
                  <h3 className="text-lg font-bold text-stone-800 mb-3 flex items-start gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-lg p-1.5 shadow-lg shadow-teal-500/20 flex-shrink-0 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">{idx + 1}</span>
                    </div>
                    {faq.question}
                  </h3>
                  <p className="text-stone-600 ml-11 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="py-20 px-4 bg-white/80">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-stone-800 mb-10 text-center">{linksTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {internalLinks.map((link, idx) => (
                <Link key={idx} href={link.href} className="glass-card-light rounded-xl p-4 hover:border-teal-400/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 group flex items-center gap-3">
                  <div className="p-2.5 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-xl group-hover:from-teal-500/20 group-hover:to-cyan-500/20 transition-all duration-300">
                    <ChevronRight className="w-4 h-4 text-teal-600" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-800 text-sm group-hover:text-teal-700 transition-colors duration-300">{link.title}</div>
                    <div className="text-xs text-stone-400">{link.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-800 via-cyan-700 to-teal-900" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 15s ease infinite' }} />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q25 30 50 50 Q75 70 100 50' fill='none' stroke='%23fff' stroke-width='0.5'/%3E%3C/svg%3E")` }} />
          <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-teal-300/40 rounded-full" style={{ animation: 'float 6s ease-in-out infinite' }} />
          <div className="absolute bottom-[30%] right-[15%] w-3 h-3 bg-cyan-300/30 rounded-full" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '1s' }} />
          <div className="absolute top-[50%] right-[40%] w-2 h-2 bg-teal-200/20 rounded-full" style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '2s' }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <div style={{ animation: 'float 6s ease-in-out infinite' }}>
              <Binoculars className="w-14 h-14 text-teal-200 mx-auto mb-6" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">{ctaTitle}</h2>
            <p className="text-teal-200/80 mb-10 text-lg max-w-2xl mx-auto">{ctaSubtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-teal-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500">
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappText)}`} className="inline-flex items-center justify-center gap-2 bg-teal-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-teal-400/30 hover:bg-teal-900/60 hover:scale-105 transition-all duration-500">
                WhatsApp Booking <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
