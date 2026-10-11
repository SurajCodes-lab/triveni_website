import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, Calendar, Sunrise, Camera, Coffee, ShoppingBag, Thermometer, Hotel, Landmark, Compass, BookOpen, Scroll } from '@/components/ui/icons';
import { getArticleSchema, getSpeakableSchema, withSpeakableFAQ, getCityPlaceSchema } from '@/lib/seo/speakable-helpers';
import QuickAnswer from '@/components/seo/QuickAnswer';
import { tightenTitle } from '@/lib/seo/serp-ctr';
import HowToReachTable from '@/components/seo/HowToReachTable';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Pushkar Travel Guide 2026 | Brahma Temple, Lake, Fair & Tips'),
  description: 'Complete Pushkar travel guide 2026. Brahma Temple, Pushkar Lake ghats, Savitri ropeway, Camel Fair, best time, food, shopping. Call 7668570551.',
  keywords: 'pushkar travel guide, brahma temple pushkar, pushkar lake, pushkar camel fair, savitri temple ropeway, pushkar sightseeing, things to do in pushkar',
  authors: [{ name: 'Triveni Cabs™' }],
  creator: 'Triveni Cabs™',
  publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/pushkar-travel-guide' },
  openGraph: {
    title: 'Pushkar Travel Guide 2026 | Complete Holy Town Guide',
    description: 'Everything you need to know about visiting Pushkar. Brahma Temple, sacred lake, Savitri ropeway, Camel Fair, food, shopping, transport.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/pushkar-travel-guide',
    siteName: 'Triveni Cabs™',
    images: [{ url: '/images/sightseeing/Ajmer_Pushkar/Brahma_Temple_Pushkar.jpg', width: 1200, height: 630, alt: 'Pushkar Travel Guide 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pushkar Travel Guide 2026 | Holy Town',
    description: 'Complete Pushkar guide. Brahma Temple, lake ghats, Camel Fair, food, shopping, transport.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/sightseeing/Ajmer_Pushkar/Brahma_Temple_Pushkar.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function PushkarTravelGuidePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Pushkar Travel Guide", "item": "https://www.trivenicabs.in/pushkar-travel-guide" },
    ],
  };

  const faqData = [
    { question: "How many days do I need in Pushkar?", answer: "1 to 2 days are ideal. One day covers the Brahma Temple, a walk along the ghats of Pushkar Lake, and the Savitri Mata Temple for sunset. A second day lets you slow down, explore the bohemian main bazaar, ride the Savitri ropeway at sunrise, and take a camel or jeep safari into the surrounding dunes." },
    { question: "Why is Pushkar's Brahma Temple special?", answer: "The Jagatpita Brahma Mandir is one of very few temples in the world dedicated to Lord Brahma, the creator in the Hindu trinity. Recognisable by its red spire and marble steps, it draws pilgrims from across India. Photography is not allowed inside the sanctum, and footwear must be left at the entrance." },
    { question: "What is the best time to visit Pushkar?", answer: "October to March offers the most pleasant weather (10-27 degrees Celsius). The highlight is the world-famous Pushkar Camel Fair, held around Kartik Purnima in November, when the town fills with livestock trading, cultural competitions and huge crowds. Summers (April to June) are very hot and best avoided." },
    { question: "When is the Pushkar Camel Fair in 2026?", answer: "The Pushkar Camel Fair is held annually around Kartik Purnima (the full moon of the Hindu month of Kartik), which falls in November. Dates shift slightly each year with the lunar calendar. The fair combines camel and cattle trading with folk music, competitions and a massive open-air mela, culminating in a holy dip on Kartik Purnima." },
    { question: "Is Pushkar a vegetarian town?", answer: "Yes. Pushkar is a sacred town where only pure vegetarian food is served, and both meat and alcohol are prohibited within the town. Eggs are also generally avoided. The bazaar is famous for its cafes serving Indian, Israeli and continental vegetarian food, along with local Rajasthani dishes and the legendary malpua." },
    { question: "How do I reach Pushkar?", answer: "Pushkar is about 15 km from Ajmer, 150 km from Jaipur and roughly 400 km from Delhi. The nearest railway station is Ajmer Junction, and the nearest airports are Kishangarh (about 35 km) and Jaipur. A private cab is the most convenient way to reach Pushkar, especially when combining it with Ajmer or a wider Rajasthan trip." },
    { question: "What should I know about ghat etiquette in Pushkar?", answer: "Pushkar Lake and its 52 ghats are sacred. Remove your footwear and avoid carrying leather items near the water. Do not smoke, drink or take photos of people bathing. Be cautious of priests who may press you to perform a 'Pushkar puja' and then demand a large donation with a red thread ('Pushkar passport') — a small, respectful offering is enough." },
    { question: "Can I combine Pushkar with Ajmer and Jaipur?", answer: "Absolutely. Pushkar and Ajmer are just 15 km apart and are almost always visited together — Ajmer Sharif Dargah plus Pushkar's Brahma Temple make a popular day. Jaipur (150 km) is an easy add-on, and many travellers include Pushkar in a Rajasthan circuit with Jaipur, Ajmer and Udaipur. We offer tempo traveller and multi-day car packages for this route." },
  ];

  const faqSchema = withSpeakableFAQ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": { "@type": "Answer", "text": item.answer },
    })),
  });

  const articleSchema = getArticleSchema({
    slug: 'pushkar-travel-guide',
    headline: 'Pushkar Travel Guide 2026 — Brahma Temple, Sacred Lake, Camel Fair & Tips',
    description: 'Complete Pushkar travel guide. Brahma Temple, Pushkar Lake and 52 ghats, Savitri ropeway, the famous Camel Fair, monthly weather, vegetarian food, shopping and transport. Updated for 2026.',
    image: '/images/sightseeing/Ajmer_Pushkar/Brahma_Temple_Pushkar.jpg',
    datePublished: '2026-01-15',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.faq-section .faq-answer-1']
  });

  const placeSchema = getCityPlaceSchema("pushkar", { idSlug: "pushkar-travel-guide" });

  const attractions = [
    { name: "Jagatpita Brahma Temple", desc: "One of the very few temples in the world dedicated to Lord Brahma, marked by its distinctive red spire and marble steps. The spiritual heart of Pushkar and the reason pilgrims come from far and wide. Photography inside the sanctum is not permitted.", entry: "Free", timing: "6:00 AM - 8:30 PM (breaks midday)", duration: "45 min - 1 hr", icon: Landmark, img: "/images/sightseeing/Ajmer_Pushkar/Brahma_Temple_Pushkar.jpg" },
    { name: "Pushkar Lake & 52 Ghats", desc: "The sacred lake ringed by 52 bathing ghats, believed to have appeared where a lotus fell from Brahma's hand. Pilgrims take a holy dip, and the ghats are especially magical at sunrise and during evening aarti.", entry: "Free", timing: "Sunrise to sunset (aarti at dusk)", duration: "1-1.5 hours", icon: Sunrise, img: "/images/sightseeing/Ajmer_Pushkar/Pushkar_Lake_Ghats.jpg" },
    { name: "Savitri Mata Temple & Ropeway", desc: "A hilltop temple dedicated to Goddess Savitri, Brahma's first consort, offering sweeping views over Pushkar Lake and the town. Reach it via a steep climb or the modern ropeway — best at sunrise or sunset.", entry: "Free (ropeway ticket extra)", timing: "5:00 AM - 7:00 PM", duration: "1.5-2 hours", icon: Compass },
    { name: "Varah Ghat & Brahma Ghat", desc: "Among the most important of Pushkar's ghats, associated with Vishnu's Varaha avatar and Lord Brahma. Central to the town's rituals, they are the focal point of the holy dip during Kartik Purnima.", entry: "Free", timing: "Sunrise to sunset", duration: "30-45 min", icon: Camera },
    { name: "Rangji Temple", desc: "A striking temple dedicated to Lord Vishnu (Rangji), notable for its blend of South Indian, Rajput and Mughal architectural styles and its tall gopuram-style entrance. A short walk from the main bazaar.", entry: "Free", timing: "6:00 AM - 8:00 PM", duration: "30-45 min", icon: Star },
    { name: "Pushkar Camel Fair Ground", desc: "The vast mela ground on the town's edge that hosts the world-famous camel and cattle fair each November. Even outside fair season it is a great spot for camel and jeep safaris into the dunes at sunset.", entry: "Free (safaris paid)", timing: "Best at sunrise / sunset", duration: "1-2 hours", icon: Users, img: "/images/sightseeing/Ajmer_Pushkar/Pushkar_Camel_Fair.jpg" },
    { name: "Pap Mochani (Gayatri) Temple", desc: "A revered hilltop temple dedicated to Goddess Gayatri, believed to cleanse sins. The climb rewards you with quieter crowds and lovely views of the lake and surrounding Aravalli hills.", entry: "Free", timing: "6:00 AM - 6:00 PM", duration: "1-1.5 hours", icon: BookOpen },
    { name: "Man Mahal (Sarovar Heritage)", desc: "A former palace of Raja Man Singh I of Amber, built as a royal guest house overlooking the lake and now a heritage property. Its lakeside setting makes it one of Pushkar's most picturesque landmarks.", entry: "Free (exterior)", timing: "All day (exterior)", duration: "30 min", icon: Shield },
  ];

  const monthlyGuide = [
    { month: "Jan", temp: "8-23°C", weather: "Cold nights", crowd: "High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 84 },
    { month: "Feb", temp: "10-26°C", weather: "Pleasant", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 92 },
    { month: "Mar", temp: "16-32°C", weather: "Warming up", crowd: "Medium", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 80 },
    { month: "Apr", temp: "22-38°C", weather: "Hot", crowd: "Low", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 35 },
    { month: "May", temp: "27-43°C", weather: "Very hot", crowd: "Very Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 12 },
    { month: "Jun", temp: "28-42°C", weather: "Pre-monsoon", crowd: "Very Low", verdict: "Not ideal", color: "bg-red-100 text-red-800", bar: 10 },
    { month: "Jul", temp: "26-35°C", weather: "Monsoon", crowd: "Low", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 38 },
    { month: "Aug", temp: "25-33°C", weather: "Rain", crowd: "Low", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 36 },
    { month: "Sep", temp: "24-34°C", weather: "Rain fading", crowd: "Low-Med", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 52 },
    { month: "Oct", temp: "20-34°C", weather: "Pleasant", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 94 },
    { month: "Nov", temp: "13-29°C", weather: "Cool, Camel Fair", crowd: "Very High", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 100 },
    { month: "Dec", temp: "8-25°C", weather: "Cold, clear", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 90 },
  ];

  const foodSection = [
    { name: "Malpua", desc: "Pushkar's most famous sweet — soft, syrup-soaked pancakes served warm. The stalls near the bazaar are legendary; try a plate fresh off the griddle for the true experience.", icon: "🥞" },
    { name: "Rajasthani Thali", desc: "A hearty pure-veg thali with dal, baati, gatte ki sabzi, ker sangri, churma and more. Rooftop restaurants around the lake serve generous versions with a view.", icon: "🍛" },
    { name: "Dal Baati Churma", desc: "The iconic Rajasthani trio — baked wheat baati with spiced dal and sweet crumbled churma. A filling, satvik meal you'll find across Pushkar's eateries.", icon: "🍲" },
    { name: "Cafe Culture (Israeli & Continental)", desc: "Pushkar's laid-back bazaar is dotted with cafes serving hummus, falafel, shakshuka, pasta and wood-fired pizza, reflecting its long-time backpacker and Israeli traveller scene.", icon: "🥗" },
    { name: "Lassi & Makhaniya Lassi", desc: "Thick, chilled lassi topped with malai and dry fruits — the perfect cooler after climbing to Savitri Temple or wandering the ghats in the sun.", icon: "🥤" },
    { name: "Kachori & Mirchi Vada", desc: "Crisp Rajasthani street snacks — flaky kachoris and spicy mirchi vada — sold hot in the bazaar and best enjoyed with sweet-tangy chutney.", icon: "🌶️" },
  ];

  const shoppingSection = [
    { name: "Rose Products", desc: "Pushkar is famous for its roses. Take home gulkand (rose preserve), rose water, rose oil, incense and soaps from the local shops — fragrant, lightweight souvenirs.", price: "₹50 - ₹1,500" },
    { name: "Leather Goods", desc: "The bazaar is a great place for handcrafted leather juttis (mojari), bags, belts and journals. Bargaining is expected, and quality varies, so inspect the stitching.", price: "₹200 - ₹5,000" },
    { name: "Silver Jewellery & Beads", desc: "Tribal-style silver jewellery, oxidised pieces, gemstone beads and semi-precious stones fill the shops of Sadar Bazaar — a favourite with both Indian and foreign travellers.", price: "₹100 - ₹10,000" },
    { name: "Textiles & Bohemian Wear", desc: "Tie-dye and block-print fabrics, embroidered bags, harem pants, wall hangings and hippie-style clothing give Pushkar's markets their colourful, boho reputation.", price: "₹150 - ₹4,000" },
  ];

  const areaGuide = [
    { area: "Lake / Ghat Side", desc: "Stays right by the sacred lake, within walking distance of the Brahma Temple and the main bazaar. Ranges from budget guesthouses to heritage havelis with rooftop lake views. Peaceful mornings, lively evenings.", budget: "₹800-5,000/night", icon: "🌊" },
    { area: "Main Bazaar (Sadar Bazaar)", desc: "In the thick of the shopping and cafe action, ideal for travellers who want everything on their doorstep. Mostly budget to mid-range rooms and popular backpacker hostels.", budget: "₹600-3,000/night", icon: "🛍️" },
    { area: "Outskirts & Desert Resorts", desc: "Boutique tented camps and resorts on the dunes towards the fair ground, perfect during the Camel Fair and for a quieter, scenic stay with camel safaris on offer.", budget: "₹2,500-15,000/night", icon: "🐪" },
    { area: "Ajmer Road Side", desc: "Newer hotels along the Ajmer-Pushkar road, convenient for those combining Ajmer Sharif with Pushkar or arriving by train. A short drive from the lake.", budget: "₹1,500-6,000/night", icon: "🏨" },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Rajasthan Specialists", desc: "Ajmer, Pushkar & beyond" },
    { icon: Landmark, title: "Brahma Temple Trips", desc: "Smooth pilgrim visits" },
    { icon: Users, title: "Groups & Families", desc: "Cars & tempo travellers" },
    { icon: Star, title: "Trusted Drivers", desc: "Verified & courteous" },
  ];

  const chapters = [
    { title: "Attractions", icon: Landmark, count: "8 Sites" },
    { title: "Best Time", icon: Thermometer, count: "12 Months" },
    { title: "Food Guide", icon: Coffee, count: "6 Specialties" },
    { title: "Shopping", icon: ShoppingBag, count: "4 Categories" },
    { title: "Stay Guide", icon: Hotel, count: "4 Areas" },
    { title: "Transport", icon: Car, count: "5 Options" },
  ];

  const heroImage = "/images/sightseeing/Ajmer_Pushkar/Brahma_Temple_Pushkar.jpg";
  const cityName = "Pushkar";
  const cityTagline = "Your complete guide to the sacred lakeside town — the rare Brahma Temple, 52 holy ghats, the hilltop Savitri shrine and the world-famous Camel Fair. Everything you need for a soulful, colourful Pushkar trip.";
  const welcomeTitle = "Welcome to the Sacred Lake Town";
  const welcomeText = "Pushkar, cradled in the Aravalli hills of Rajasthan just 15 km from Ajmer, is one of the oldest and holiest towns in India. It is built around the sacred <strong>Pushkar Lake</strong>, ringed by 52 ghats, and is home to the celebrated <strong>Jagatpita Brahma Temple</strong> — one of the very few temples in the world dedicated to Lord Brahma. A holy town where only vegetarian food is served and alcohol is prohibited, Pushkar blends deep spirituality with an easy, bohemian charm: sunrise on the ghats, a climb to the Savitri Temple, roses and silver in the bazaar, and rooftop cafes overlooking the water. Each November, the town explodes into life during the legendary <strong>Pushkar Camel Fair</strong> around Kartik Purnima. Whether you come to pray, to shop, or simply to slow down, this guide will help you make the most of Pushkar.";
  const stats = [{ value: "Brahma", label: "Rare Temple" }, { value: "52 Ghats", label: "Sacred Lake" }, { value: "Nov", label: "Camel Fair" }];
  const foodSubtitle = "Pure-vegetarian Rajasthani fare and famous rooftop cafes";
  const bestTimeLegend = [{ color: "bg-emerald-500", label: "Best (Oct-Mar)" }, { color: "bg-amber-400", label: "Okay (Jul-Sep)" }, { color: "bg-red-400", label: "Avoid (May-Jun)" }];
  const transportOptions = [
    { mode: "Triveni Cabs™ (Private Taxi)", price: "₹2,500-4,000/day", desc: "AC car with driver — the most comfortable way to reach Pushkar and combine it with Ajmer, Jaipur or a wider Rajasthan trip. Delhi to Pushkar one-way available. Call 7668570551.", highlight: true },
    { mode: "Auto-rickshaw", price: "₹30-150/trip", desc: "Handy for hops between the lake, bazaar and Ajmer Road. Agree on the fare before you set off, especially in fair season.", highlight: false },
    { mode: "Ajmer-Pushkar Bus", price: "₹15-40/trip", desc: "Frequent RSRTC and local buses run the 15 km between Ajmer and Pushkar over the Nag Pahar hills — cheap and regular.", highlight: false },
    { mode: "Savitri Ropeway", price: "₹100-150/ride", desc: "A quick cable-car ride up to the hilltop Savitri Temple, saving the steep climb and offering great views of the lake.", highlight: false },
    { mode: "Camel & Jeep Safari", price: "₹200-1,500/ride", desc: "Explore the dunes and fair ground around Pushkar on a camel cart or jeep — a classic sunset experience.", highlight: false },
  ];
  const interlinks = [
    { href: "/pushkar", title: "Pushkar Cab Service", desc: "Book local & outstation taxi" },
    { href: "/one-way-cab/delhi-to-pushkar", title: "Delhi to Pushkar Cab", desc: "One-way private taxi" },
    { href: "/ajmer", title: "Ajmer Cab Service", desc: "Pair with Ajmer Sharif" },
    { href: "/tour-package", title: "Tour Packages", desc: "Rajasthan multi-day trips" },
    { href: "/tempo-traveller", title: "Tempo Traveller Hire", desc: "For groups & families" },
    { href: "/jaipur-travel-guide", title: "Jaipur Travel Guide", desc: "The Pink City" },
    { href: "/udaipur-travel-guide", title: "Udaipur Travel Guide", desc: "City of Lakes" },
    { href: "/sightseeing", title: "All Sightseeing Tours", desc: "Complete tour list" },
    { href: "/agra-travel-guide", title: "Agra Travel Guide", desc: "Taj Mahal & more" },
  ];
  const ctaTitle = "Planning a Trip to Pushkar?";
  const ctaDesc = "We are Rajasthan travel specialists. Call us for advice on the Camel Fair, itineraries and comfortable transport combining Ajmer, Jaipur and Pushkar.";
  const whatsappMsg = "I want to book a cab for Pushkar trip";

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes pulse-gold { 0%, 100% { box-shadow: 0 0 20px rgba(245,158,11,0.3); } 50% { box-shadow: 0 0 50px rgba(245,158,11,0.6); } }
        @keyframes gradient-shift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        .glass-card { background: rgba(255,255,255,0.05); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1); }
        .glass-card-light { background: rgba(255,255,255,0.85); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.3); box-shadow: 0 8px 32px rgba(0,0,0,0.06); }
        .shimmer-gold { background: linear-gradient(90deg, #f59e0b, #fde68a, #f59e0b); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer 3s linear infinite; }
        .hover-lift { transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
        .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 25px 50px -12px rgba(245,158,11,0.2); }
      ` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {placeSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(placeSchema) }} />}

      <div className="min-h-screen bg-amber-50/30">
        <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='2' fill='%23b45309'/%3E%3Ccircle cx='4' cy='4' r='1' fill='%23b45309'/%3E%3Ccircle cx='36' cy='36' r='1' fill='%23b45309'/%3E%3C/svg%3E")` }} />

        {/* HERO */}
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0"><img src={heroImage} alt={`${cityName} travel guide`} className="w-full h-full object-cover" /></div>
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/75 via-stone-900/55 to-amber-950/85" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 15s ease infinite' }} />
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/20 rounded-full blur-[120px]" style={{ animation: 'float 8s ease-in-out infinite' }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-600/15 rounded-full blur-[100px]" style={{ animation: 'float 10s ease-in-out infinite 2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px]" style={{ animation: 'float 12s ease-in-out infinite 4s' }} />
          <div className="absolute top-[15%] left-[10%] w-3 h-3 bg-amber-400/40 rounded-full" style={{ animation: 'float 6s ease-in-out infinite' }} />
          <div className="absolute top-[25%] right-[15%] w-2 h-2 bg-yellow-400/50 rounded-full" style={{ animation: 'float 7s ease-in-out infinite 1s' }} />
          <div className="absolute bottom-[30%] left-[20%] w-2 h-2 bg-amber-300/60 rounded-full" style={{ animation: 'float 5s ease-in-out infinite 2s' }} />
          <div className="absolute top-[60%] right-[25%] w-3 h-3 bg-yellow-300/30 rounded-full" style={{ animation: 'float 8s ease-in-out infinite 3s' }} />
          <div className="absolute bottom-[20%] right-[10%] w-2 h-2 bg-orange-300/40 rounded-full" style={{ animation: 'float 6s ease-in-out infinite 4s' }} />
          <div className="absolute top-[40%] left-[5%] w-1.5 h-1.5 bg-amber-200/50 rounded-full" style={{ animation: 'float 9s ease-in-out infinite 1.5s' }} />

          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-md px-6 py-2 rounded-full mb-6 border border-amber-400/30">
              <Scroll className="w-4 h-4 text-amber-300" />
              <span className="text-amber-200 font-semibold text-sm tracking-[0.2em] uppercase">The Complete Encyclopedia</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight tracking-tight">
              {cityName} Travel <span className="shimmer-gold">Guide</span>
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-amber-500/60" />
              <span className="text-amber-400 font-semibold tracking-widest text-sm">2026 EDITION</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-amber-500/60" />
            </div>
            <p className="text-lg md:text-xl text-amber-100/70 mb-10 max-w-3xl mx-auto leading-relaxed font-light">{cityTagline}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 transition-all duration-500">
                <Phone className="w-5 h-5" /> Call Now: 7668570551
              </Link>
              <Link href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-500/30 hover:bg-white/20 hover:scale-105 transition-all duration-500">
                WhatsApp Us
              </Link>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-amber-950/60 backdrop-blur-2xl border-t border-amber-500/20">
            <div className="max-w-6xl mx-auto px-4 py-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {trustFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/90">
                    <div className="p-2 bg-amber-500/20 rounded-lg backdrop-blur-sm"><f.icon className="w-5 h-5 text-amber-300" /></div>
                    <div><div className="font-bold text-sm">{f.title}</div><div className="text-xs text-amber-200/60">{f.desc}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* AEO QUICK ANSWER */}
        <section className="px-4 pt-10">
          <div className="max-w-4xl mx-auto">
            <QuickAnswer
              tone="light"
              question={`Planning a ${cityName} trip?`}
              answer="Pushkar is a sacred lakeside town in Rajasthan, best visited between October and March when days stay around 10-27 degrees Celsius. One to two days covers the rare Jagatpita Brahma Mandir, a walk along the 52 ghats of Pushkar Lake and sunset at the hilltop Savitri Mata Temple. It sits about 15 km from Ajmer, 150 km from Jaipur and roughly 400 km from Delhi, and the town is strictly vegetarian with no alcohol served."
              facts={[
                { label: 'Best time', value: 'Oct to Mar' },
                { label: 'Ideal duration', value: '1 to 2 days' },
                { label: 'Top sight', value: 'Brahma Temple' },
                { label: 'Cab from Delhi', value: '400 km · ₹11/km' },
              ]}
            />
          </div>
        </section>

        {/* TABLE OF CONTENTS */}
        <section className="py-10 sm:py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Table of Contents</h2>
              <p className="text-stone-500">Your chapter-by-chapter guide to {cityName}</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {chapters.map((ch, i) => (
                <div key={i} className="glass-card-light rounded-xl p-4 text-center hover-lift cursor-default group">
                  <div className="w-12 h-12 mx-auto bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center mb-3 group-hover:from-amber-200 group-hover:to-orange-200 transition-all">
                    <ch.icon className="w-6 h-6 text-amber-700" />
                  </div>
                  <div className="font-bold text-stone-800 text-sm">{ch.title}</div>
                  <div className="text-xs text-amber-600 font-medium mt-1">{ch.count}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WELCOME */}
        <section className="py-10 sm:py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card-light rounded-3xl p-8 md:p-12 relative">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-amber-200/40 to-transparent rounded-br-full rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-orange-200/40 to-transparent rounded-tl-full rounded-br-3xl" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-2 rounded-full text-sm font-bold tracking-wider shadow-lg">CHAPTER 0</div>
              <h2 className="text-3xl font-bold text-stone-800 mb-6 text-center mt-4 relative">{welcomeTitle}</h2>
              <p className="text-lg text-stone-600 leading-relaxed text-center relative" dangerouslySetInnerHTML={{ __html: welcomeText }} />
              <div className="flex justify-center gap-8 mt-8 text-center relative">
                {stats.map((s, i) => (
                  <div key={i} className="flex items-center gap-4">
                    {i > 0 && <div className="w-px h-12 bg-amber-200" />}
                    <div>
                      <div className="glass-card-light rounded-xl px-4 py-2 mb-1"><div className="text-2xl md:text-3xl font-bold text-amber-700">{s.value}</div></div>
                      <div className="text-xs text-stone-500 mt-1">{s.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BEST TIME */}
        <section className="py-10 sm:py-16 px-4 bg-white/80">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">CHAPTER 1</div>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-2">Best Time to Visit {cityName}</h2>
            <p className="text-stone-500 mb-10">Visual month-by-month guide — taller bars mean better visiting conditions</p>
            <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 mb-8">
              {monthlyGuide.map((m, i) => (
                <div key={i} className="flex flex-col items-center group cursor-default">
                  <div className="w-full h-32 flex items-end mb-2 relative">
                    <div
                      className={`w-full rounded-t-lg transition-all duration-500 group-hover:opacity-80 group-hover:scale-105 origin-bottom ${m.bar > 75 ? 'bg-gradient-to-t from-emerald-600 to-emerald-400' : m.bar > 40 ? 'bg-gradient-to-t from-amber-500 to-amber-300' : 'bg-gradient-to-t from-red-400 to-red-300'}`}
                      style={{ height: `${m.bar}%` }}
                    />
                  </div>
                  <div className="text-xs font-bold text-stone-700">{m.month}</div>
                  <div className="text-[10px] text-stone-400">{m.temp}</div>
                  <div className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full mt-1 ${m.color}`}>{m.verdict}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
              {bestTimeLegend.map((l, i) => (
                <div key={i} className="flex items-center gap-1.5"><div className={`w-3 h-3 rounded ${l.color}`} /> {l.label}</div>
              ))}
            </div>
          </div>
        </section>

        {/* ATTRACTIONS */}
        <section className="py-10 sm:py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">CHAPTER 2</div>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-10">Top Attractions in {cityName}</h2>
            <div className="space-y-5">
              {attractions.map((a, idx) => (
                <div key={idx} className="glass-card-light rounded-3xl overflow-hidden hover-lift group">
                  <div className="flex flex-col md:flex-row">
                    {a.img ? (
                      <div className="md:w-56 relative shrink-0 overflow-hidden">
                        <img src={a.img} alt={a.name} className="w-full h-44 md:h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                        <span className="absolute top-2 left-2 bg-amber-600/90 text-white text-sm font-bold px-2.5 py-1 rounded-lg shadow-lg">{String(idx + 1).padStart(2, '0')}</span>
                      </div>
                    ) : (
                      <div className="md:w-20 bg-gradient-to-b from-amber-600 to-orange-600 flex items-center justify-center py-4 md:py-0">
                        <span className="text-3xl font-bold text-white/80">{String(idx + 1).padStart(2, '0')}</span>
                      </div>
                    )}
                    <div className="flex-1 p-6">
                      <h3 className="text-xl font-bold text-stone-800 flex items-center gap-2 mb-2">
                        <a.icon className="w-5 h-5 text-amber-600" /> {a.name}
                      </h3>
                      <p className="text-stone-600 mb-4">{a.desc}</p>
                      <div className="flex flex-wrap gap-2 text-sm">
                        <span className="bg-gradient-to-r from-amber-50 to-orange-50 backdrop-blur-sm border border-amber-200/60 px-3 py-1.5 rounded-full text-amber-800 font-medium">Entry: {a.entry}</span>
                        <span className="bg-gradient-to-r from-blue-50 to-sky-50 backdrop-blur-sm border border-blue-200/60 px-3 py-1.5 rounded-full text-blue-700 font-medium"><Clock className="w-3 h-3 inline mr-1" />{a.timing}</span>
                        <span className="bg-gradient-to-r from-emerald-50 to-green-50 backdrop-blur-sm border border-emerald-200/60 px-3 py-1.5 rounded-full text-emerald-700 font-medium">{a.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BOOK / SELL */}
        <section className="py-10 sm:py-16 px-4 bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 relative overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px]" />
          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 px-5 py-2 rounded-full mb-4 border border-amber-400/30">
                <Car className="w-4 h-4 text-amber-300" />
                <span className="text-amber-200 font-semibold text-xs tracking-[0.2em] uppercase">Book With Triveni Cabs™</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Book Your {cityName} Trip</h2>
              <p className="text-amber-100/70 max-w-2xl mx-auto">Clean, air-conditioned cars with professional drivers. Transparent per-km pricing, no hidden charges — pick the vehicle that fits your group.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {[
                { name: "Swift Dzire", cls: "Sedan · 4 seats", price: "₹11/km", img: "/images/car/swift_dzire.jpg", best: "Best for couples" },
                { name: "Maruti Ertiga", cls: "SUV · 6 seats", price: "₹15/km", img: "/images/car/ertiga.jpg", best: "Best for families" },
                { name: "Toyota Innova Crysta", cls: "Premium SUV · 7 seats", price: "₹18/km", img: "/images/car/innova_crysta.jpg", best: "Most comfortable" },
              ].map((v, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 overflow-hidden hover-lift group">
                  <div className="h-44 overflow-hidden relative">
                    <img src={v.img} alt={v.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <span className="absolute top-3 right-3 bg-amber-500 text-stone-900 text-xs font-bold px-3 py-1 rounded-full">{v.best}</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="text-lg font-bold text-white">{v.name}</h3>
                      <span className="text-amber-400 font-bold text-lg">{v.price}</span>
                    </div>
                    <p className="text-amber-100/50 text-sm mb-4">{v.cls}</p>
                    <Link href={`https://wa.me/917668570551?text=${encodeURIComponent(`I want to book a ${v.name} for ${cityName} trip`)}`} className="flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-yellow-500 text-stone-900 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform">
                      Book on WhatsApp <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-stone-900 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" /> Call Now: 7668570551
              </Link>
              <Link href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="inline-flex items-center justify-center gap-2 bg-amber-500/20 text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-400/40 hover:bg-amber-500/30 transition-colors">
                Get a Free Quote
              </Link>
            </div>
          </div>
        </section>

        {/* FOOD */}
        <section className="py-10 sm:py-16 px-4 bg-gradient-to-br from-orange-50/80 to-amber-50/80">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">CHAPTER 3</div>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-2">{cityName} Food Guide</h2>
            <p className="text-stone-500 mb-10">{foodSubtitle}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {foodSection.map((food, idx) => (
                <div key={idx} className="glass-card-light rounded-2xl p-5 hover-lift relative overflow-hidden group">
                  <div className="absolute -top-4 -right-4 text-7xl opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all duration-500">{food.icon}</div>
                  <h3 className="font-bold text-stone-800 mb-2 flex items-center gap-2 relative">
                    <Coffee className="w-4 h-4 text-amber-600" /> {food.name}
                  </h3>
                  <p className="text-stone-600 text-sm relative">{food.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SHOPPING */}
        <section className="py-10 sm:py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">CHAPTER 4</div>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-10">Shopping in {cityName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {shoppingSection.map((item, idx) => (
                <div key={idx} className="glass-card-light rounded-2xl p-6 hover-lift">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-stone-800 flex items-center gap-2"><ShoppingBag className="w-4 h-4 text-amber-600" /> {item.name}</h3>
                    <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-md">{item.price}</span>
                  </div>
                  <p className="text-stone-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TRANSPORT */}
        <section className="py-10 sm:py-16 px-4 bg-white/80">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">CHAPTER 5</div>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-8">Getting Around {cityName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {transportOptions.map((t, idx) => (
                <div key={idx} className={`rounded-2xl p-5 transition-all duration-500 ${t.highlight ? 'glass-card-light border-2 border-amber-400 shadow-xl relative overflow-hidden' : 'glass-card-light hover:border-amber-200'}`}>
                  {t.highlight && <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 opacity-50" />}
                  <div className="relative">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-stone-800">{t.mode}</h3>
                      {t.highlight && <span className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md" style={{ animation: 'pulse-gold 2s ease-in-out infinite' }}>RECOMMENDED</span>}
                    </div>
                    <p className="text-amber-700 font-bold text-sm mb-1">{t.price}</p>
                    <p className="text-stone-600 text-sm">{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STAY */}
        <section className="py-10 sm:py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">CHAPTER 6</div>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-10">Where to Stay in {cityName}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {areaGuide.map((a, idx) => (
                <div key={idx} className="glass-card-light rounded-2xl overflow-hidden hover-lift">
                  <div className="h-1.5 bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500" />
                  <div className="bg-gradient-to-r from-amber-600 to-orange-600 px-5 py-3 flex items-center justify-between">
                    <h3 className="font-bold text-white flex items-center gap-2"><Hotel className="w-4 h-4" /> {a.area}</h3>
                    <span className="text-amber-100 text-sm font-medium bg-white/10 px-3 py-0.5 rounded-full">{a.budget}</span>
                  </div>
                  <div className="p-5"><p className="text-stone-600 text-sm">{a.desc}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Week 49: the table this page had no figures in — distances and fares from the site's own records */}

        <HowToReachTable city="Pushkar" citySlug="pushkar" />


        {/* FAQ */}
        <section className="py-10 sm:py-16 px-4 bg-white/80">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider shadow-md">APPENDIX</div>
            </div>
            <h2 className="text-3xl font-bold text-stone-800 mb-10">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, idx) => (
                <div key={idx} className="border-l-4 border-amber-500 glass-card-light rounded-r-2xl p-6 hover:border-amber-400 hover:shadow-lg transition-all duration-500">
                  <h3 className="text-lg font-bold text-stone-800 mb-2 flex items-start gap-2">
                    <span className="bg-gradient-to-br from-amber-500 to-orange-500 text-white w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5 shadow-md">Q{idx + 1}</span>
                    {faq.question}
                  </h3>
                  <p className="text-stone-600 ml-9">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LINKS */}
        <section className="py-10 sm:py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-stone-800 mb-2 text-center">Explore More About {cityName}</h2>
            <p className="text-stone-500 text-center mb-8 text-sm">Related guides and tour pages from our collection</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {interlinks.map((link, idx) => (
                <Link key={idx} href={link.href} className="glass-card-light flex items-center gap-3 p-4 rounded-xl hover:border-amber-400/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 group">
                  <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl p-2.5 group-hover:from-amber-200 group-hover:to-orange-200 transition-all">
                    <ChevronRight className="w-4 h-4 text-amber-700 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div>
                    <div className="font-bold text-stone-800 text-sm group-hover:text-amber-700 transition-colors">{link.title}</div>
                    <div className="text-xs text-stone-400">{link.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-12 sm:py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-700 via-orange-600 to-yellow-700" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 10s ease infinite' }} />
          <div className="absolute top-[20%] left-[10%] w-3 h-3 bg-white/20 rounded-full" style={{ animation: 'float 6s ease-in-out infinite' }} />
          <div className="absolute top-[60%] right-[15%] w-2 h-2 bg-white/15 rounded-full" style={{ animation: 'float 8s ease-in-out infinite 2s' }} />
          <div className="absolute bottom-[30%] left-[30%] w-2 h-2 bg-white/10 rounded-full" style={{ animation: 'float 7s ease-in-out infinite 1s' }} />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='15' cy='15' r='1.5' fill='%23fff'/%3E%3C/svg%3E")` }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <Compass className="w-12 h-12 text-amber-200 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{ctaTitle}</h2>
            <p className="text-amber-100/80 mb-8 text-lg">{ctaDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-amber-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-gold 2s ease-in-out infinite' }}>
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href={`https://wa.me/917668570551?text=${encodeURIComponent(whatsappMsg)}`} className="inline-flex items-center justify-center gap-2 bg-amber-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-amber-400/30 hover:bg-amber-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">
                WhatsApp Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
