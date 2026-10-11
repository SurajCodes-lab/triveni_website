import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, Calendar, Sunrise, Camera, Coffee, ShoppingBag, Thermometer, Hotel, Landmark, Compass, BookOpen, Scroll } from '@/components/ui/icons';
import { getArticleSchema, getSpeakableSchema, withSpeakableFAQ, getCityPlaceSchema } from '@/lib/seo/speakable-helpers';
import QuickAnswer from '@/components/seo/QuickAnswer';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Dalhousie Travel Guide 2026 | Khajjiar, Attractions & Tips'),
  description: 'Complete Dalhousie travel guide 2026. Khajjiar, Panchpula, Dainkund Peak, churches, Kalatop, best time, food & transport. Call 7668570551.',
  keywords: 'dalhousie travel guide, dalhousie tourist guide, khajjiar guide, dalhousie sightseeing, dalhousie tourism, things to do in dalhousie, dalhousie attractions',
  authors: [{ name: 'Triveni Cabs™' }],
  creator: 'Triveni Cabs™',
  publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/dalhousie-travel-guide' },
  openGraph: {
    title: 'Dalhousie Travel Guide 2026 | Colonial Himachal Hill Town',
    description: 'Everything you need to know about visiting Dalhousie. Khajjiar, Panchpula, Dainkund Peak, colonial churches, Kalatop, food, transport, day trips.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/dalhousie-travel-guide',
    siteName: 'Triveni Cabs™',
    images: [{ url: '/images/sightseeing/Dalhousie/dalhousie_hero_section.jpg', width: 1200, height: 630, alt: 'Dalhousie Travel Guide 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dalhousie Travel Guide 2026 | Hill Town',
    description: 'Complete Dalhousie guide. Attractions, food, shopping, transport.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/sightseeing/Dalhousie/dalhousie_hero_section.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function DalhousieTravelGuidePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Dalhousie Travel Guide", "item": "https://www.trivenicabs.in/dalhousie-travel-guide" },
    ],
  };

  const faqData = [
    { question: "How many days do I need in Dalhousie?", answer: "2 to 3 days are ideal. Two days cover Dalhousie's town sights (the colonial churches, Subhash Baoli, Panchpula and Dainkund Peak) plus a day trip to Khajjiar. A third day lets you explore Kalatop Wildlife Sanctuary or continue on to Chamba and Chamera Lake." },
    { question: "Why is Dalhousie famous?", answer: "Dalhousie is a charming colonial-era hill town in Himachal Pradesh's Chamba district, spread across five hills at about 1,970 metres. Founded by the British in 1854, it is known for its Victorian architecture, old stone churches, pine-clad walks and its proximity to Khajjiar, often called the 'Mini Switzerland of India'." },
    { question: "What is Khajjiar and how far is it from Dalhousie?", answer: "Khajjiar is a stunning saucer-shaped meadow with a small lake at its centre, ringed by dense deodar forest -- nicknamed the 'Mini Switzerland of India'. It lies about 24 km from Dalhousie (around 1 hour by road) and is the region's most popular day trip, great for a stroll or a picnic on the grassland." },
    { question: "What is the best time to visit Dalhousie?", answer: "March to June is the peak season, with pleasant days (around 15-30 degrees) ideal for sightseeing and a cool escape from the plains. December to February brings snowfall and a magical winter setting, though some higher roads can be affected. Monsoon (July-September) turns the hills green but carries a landslide risk on mountain roads." },
    { question: "How do I reach Dalhousie?", answer: "The nearest railway station and airport are at Pathankot, about 80 km away (roughly 3 hours by road). From there a scenic mountain drive climbs to Dalhousie. By road: Delhi is about 560 km, Amritsar about 190 km and Chandigarh about 330 km. The nearest larger airports are Pathankot and Kangra (Gaggal). Our cabs cover all these routes -- call 7668570551." },
    { question: "What food is Dalhousie known for?", answer: "Dalhousie serves hearty Himachali dishes like Chha Gosht, Madra, Sidu and the festive Dham thali, alongside Tibetan momos and thukpa and plenty of Punjabi cafe fare on Gandhi Chowk and the Mall. Fresh river trout and the Chamba speciality condiment 'chukh' are local favourites." },
    { question: "What should I buy in Dalhousie?", answer: "Dalhousie and nearby Chamba are known for Chamba rumals (delicate double-sided embroidered handkerchiefs), Himachali woollen shawls, caps and sweaters, and Tibetan handicrafts. The markets at Gandhi Chowk, Subhash Chowk and the Tibetan Market are the best places to browse." },
    { question: "Can I visit Chamba from Dalhousie?", answer: "Yes. Chamba town is about 45 km from Dalhousie and makes a rewarding day trip, with the Bhuri Singh Museum, the ancient Laxmi Narayan temples and the scenic Chamera Lake nearby. Dalhousie is the natural gateway to the wider Chamba valley. We can arrange a comfortable day-trip cab -- call 7668570551." },
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
    slug: 'dalhousie-travel-guide',
    headline: 'Dalhousie Travel Guide 2026 — Khajjiar, Attractions, Food & Tips',
    description: 'Complete Dalhousie travel guide. Khajjiar, Panchpula, Dainkund Peak, colonial churches, Subhash Baoli, Kalatop, monthly weather, food, shopping and transport. Updated for 2026.',
    image: '/images/sightseeing/Dalhousie/dalhousie_hero_section.jpg',
    datePublished: '2026-01-15',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.faq-section .faq-answer-1']
  });

  const placeSchema = getCityPlaceSchema("dalhousie", { idSlug: "dalhousie-travel-guide" });

  const attractions = [
    { name: "Khajjiar", desc: "The star day trip -- a saucer-shaped meadow with a small lake at its heart, encircled by dense deodar forest and known as the 'Mini Switzerland of India'. Perfect for a lazy walk, a picnic or a paraglide. About 24 km from town.", entry: "Free (activity charges apply)", timing: "All day", duration: "3-4 hours", icon: Sunrise, img: "/images/sightseeing/Dalhousie/Khajjiar_Meadow.jpg" },
    { name: "Panchpula", desc: "A cluster of streams and waterfalls fed by mountain springs, with a memorial to freedom fighter Sardar Ajit Singh. The Satdhara springs lie on the way. A scenic spot for a short walk and photographs.", entry: "Free", timing: "8:00 AM - 6:00 PM", duration: "1-1.5 hours", icon: Compass, img: "/images/sightseeing/Dalhousie/Panchpula_Waterfall.jpg" },
    { name: "Dainkund Peak", desc: "The highest point around Dalhousie (about 2,745 m), reached by a breezy hilltop trek to the Pholani Devi temple. Nicknamed the 'singing hill' for the wind, it offers sweeping 360-degree Himalayan views.", entry: "Free", timing: "8:00 AM - 5:00 PM", duration: "2-3 hours", icon: Camera, img: "/images/sightseeing/Dalhousie/Dainkund_Peak.jpg" },
    { name: "St. John's Church", desc: "The oldest church in Dalhousie (built 1863), a handsome stone Protestant church at Gandhi Chowk with fine stained glass and a small library of old books. A quiet reminder of the town's colonial roots.", entry: "Free", timing: "8:00 AM - 5:00 PM", duration: "30-45 min", icon: Landmark, img: "/images/sightseeing/Dalhousie/St_Johns_Church.jpg" },
    { name: "St. Francis Church", desc: "A striking Roman Catholic church at Subhash Chowk (built 1894), noted for its Belgian stained glass, intricate stonework and elegant arches -- one of Dalhousie's landmark heritage buildings.", entry: "Free", timing: "8:00 AM - 5:00 PM", duration: "30-45 min", icon: BookOpen },
    { name: "Subhash Baoli", desc: "A tranquil natural spring and viewpoint about 1 km from Gandhi Chowk, where Subhash Chandra Bose is said to have spent time in 1937. Ringed by tall pines and benches, it is a peaceful walking spot.", entry: "Free", timing: "All day", duration: "45 min - 1 hr", icon: Star },
    { name: "Kalatop Wildlife Sanctuary", desc: "A dense forest reserve of deodar and oak between Dalhousie and Khajjiar, home to Himalayan black bear, deer and rich birdlife. Popular for gentle nature treks and forest drives.", entry: "Sanctuary charges apply", timing: "9:00 AM - 5:00 PM", duration: "2-3 hours", icon: Shield, img: "/images/sightseeing/Dalhousie/Kalatop_Wildlife.jpg" },
    { name: "Chamera Lake & Chamba", desc: "A short drive brings you to the turquoise Chamera Lake (boating available) and the historic town of Chamba, with its Bhuri Singh Museum and ancient Laxmi Narayan temples. A rewarding extension from Dalhousie.", entry: "Free (boating extra)", timing: "9:00 AM - 6:00 PM", duration: "Half day", icon: Compass },
  ];

  const monthlyGuide = [
    { month: "Jan", temp: "-1-8°C", weather: "Snow, cold", crowd: "Med", verdict: "Snow Season", color: "bg-blue-100 text-blue-800", bar: 65 },
    { month: "Feb", temp: "1-10°C", weather: "Cold, snowy", crowd: "Med", verdict: "Snow Season", color: "bg-blue-100 text-blue-800", bar: 68 },
    { month: "Mar", temp: "5-16°C", weather: "Crisp, clear", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 90 },
    { month: "Apr", temp: "9-21°C", weather: "Pleasant", crowd: "High", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 100 },
    { month: "May", temp: "13-26°C", weather: "Warm, sunny", crowd: "Very High", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 98 },
    { month: "Jun", temp: "15-28°C", weather: "Warm days", crowd: "Very High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 88 },
    { month: "Jul", temp: "15-24°C", weather: "Monsoon", crowd: "Med", verdict: "Not ideal", color: "bg-red-100 text-red-800", bar: 30 },
    { month: "Aug", temp: "15-23°C", weather: "Peak rain", crowd: "Low", verdict: "Not ideal", color: "bg-red-100 text-red-800", bar: 25 },
    { month: "Sep", temp: "13-23°C", weather: "Rain fading", crowd: "Med", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 62 },
    { month: "Oct", temp: "9-20°C", weather: "Clear, crisp", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 92 },
    { month: "Nov", temp: "4-16°C", weather: "Cold, clear", crowd: "Med", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 80 },
    { month: "Dec", temp: "0-11°C", weather: "Cold, snowfall", crowd: "High", verdict: "Snow Season", color: "bg-blue-100 text-blue-800", bar: 70 },
  ];

  const foodSection = [
    { name: "Chha Gosht", desc: "A signature Himachali dish -- tender lamb slow-cooked in a spiced gram-flour and yoghurt gravy. Rich, aromatic and a staple of the Chamba region's kitchens.", icon: "🍖" },
    { name: "Madra", desc: "A soothing curry of chickpeas or vegetables simmered in yoghurt with warm spices, part of the traditional Himachali Dham feast. Creamy and comforting.", icon: "🍲" },
    { name: "Sidu & Babru", desc: "Sidu is a soft steamed wheat bread with a savoury filling, served with ghee or dal; Babru is a Himachali stuffed kachori. Hearty mountain comfort food.", icon: "🫓" },
    { name: "Tibetan Momos & Thukpa", desc: "Steamed and fried momos and warming thukpa noodle soup, widely served across Dalhousie's cafes and market stalls -- quick, cheap and satisfying.", icon: "🥟" },
    { name: "Trout & Chamba Chukh", desc: "Fresh Himalayan river trout appears on many menus, often paired with 'chukh', the fiery Chamba chilli condiment that adds a local kick to any meal.", icon: "🐟" },
    { name: "Cafe Fare on the Mall", desc: "Gandhi Chowk and Subhash Chowk are dotted with cosy cafes serving Punjabi thalis, parathas, hot chai, pakoras and bakery treats -- ideal after a hillside walk.", icon: "☕" },
  ];

  const shoppingSection = [
    { name: "Chamba Rumal", desc: "The region's signature craft -- a delicate double-sided embroidered handkerchief depicting mythological scenes. A prized, collectible souvenir from the Chamba valley.", price: "₹300 - ₹8,000" },
    { name: "Himachali Woollens", desc: "Warm hand-woven shawls, sweaters, socks and the traditional Himachali cap. Excellent value winter wear sold across the Mall and Tibetan Market.", price: "₹200 - ₹6,000" },
    { name: "Tibetan Handicrafts", desc: "Prayer flags, singing bowls, beads, curios and woollens from the Tibetan Market -- a legacy of the region's Tibetan community. Good for gifts.", price: "₹100 - ₹4,000" },
    { name: "Local Produce & Metalware", desc: "Himachali honey, herbal teas, dry fruits and Chamba's traditional metal and slipper crafts make characterful takeaways from the town's markets.", price: "₹100 - ₹3,000" },
  ];

  const areaGuide = [
    { area: "Gandhi Chowk", desc: "One of Dalhousie's two central squares, ringed by cafes, shops, St. John's Church and heritage hotels. Walkable and lively, with easy access to sightseeing taxis.", budget: "₹1,500-6,000/night", icon: "🏨" },
    { area: "Subhash Chowk", desc: "The other main square, near St. Francis Church and the bus stand. Plenty of budget to mid-range stays and eateries, a good practical base for exploring.", budget: "₹1,200-4,000/night", icon: "🏪" },
    { area: "Bakrota Hills", desc: "An upscale, quieter belt on the higher Bakrota loop, home to premium resorts and boutique stays with sweeping valley and snow-peak views away from the bustle.", budget: "₹3,000-12,000/night", icon: "🏔️" },
    { area: "Khajjiar Road / Kalatop Side", desc: "Serene forest-edge resorts on the road towards Khajjiar and Kalatop, ideal for travellers wanting a green, secluded stay close to nature and day-trip trailheads.", budget: "₹2,000-8,000/night", icon: "🌲" },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Himachal Specialists", desc: "Chamba valley routes covered" },
    { icon: Landmark, title: "Colonial Hill Town", desc: "Gateway to Khajjiar & Chamba" },
    { icon: Users, title: "8000+ Travellers Served", desc: "Trusted mountain drivers" },
    { icon: Star, title: "4.9 Google Rating", desc: "Verified reviews" },
  ];

  const chapters = [
    { title: "Attractions", icon: Landmark, count: "8 Sites" },
    { title: "Best Time", icon: Thermometer, count: "12 Months" },
    { title: "Food Guide", icon: Coffee, count: "6 Specialties" },
    { title: "Shopping", icon: ShoppingBag, count: "4 Categories" },
    { title: "Stay Guide", icon: Hotel, count: "4 Areas" },
    { title: "Transport", icon: Car, count: "5 Options" },
  ];

  const heroImage = "/images/sightseeing/Dalhousie/dalhousie_hero_section.jpg";
  const cityName = "Dalhousie";
  const cityTagline = "Your complete guide to this colonial Himachal hill town -- Victorian churches, pine-scented walks, the meadows of Khajjiar and the gateway to the Chamba valley. Everything you need for a peaceful mountain getaway.";
  const welcomeTitle = "Welcome to Colonial Dalhousie";
  const welcomeText = "Dalhousie, spread across five hills at about 1,970 metres in Himachal Pradesh's Chamba district, is a graceful colonial-era hill town founded by the British in 1854 and named after Lord Dalhousie. Old stone churches like <strong>St. John's</strong> and <strong>St. Francis</strong>, quiet spring-side spots like <strong>Subhash Baoli</strong>, and pine-shaded promenades give the town its unhurried Victorian charm. Just beyond lie its greatest draws -- the emerald meadow of <strong>Khajjiar</strong>, often called the 'Mini Switzerland of India', the waterfalls of <strong>Panchpula</strong>, the panoramic <strong>Dainkund Peak</strong> and the deep forests of <strong>Kalatop Wildlife Sanctuary</strong>. Dalhousie is also the natural gateway to the historic town of Chamba and the turquoise Chamera Lake. Cool in summer and magical under winter snow, it rewards travellers who prefer calm scenery over crowds. Whether you are here for the colonial heritage, the mountain air or a day in Khajjiar's meadows, this guide will help you plan the perfect Dalhousie trip.";
  const stats = [{ value: "1970m", label: "Altitude" }, { value: "1854", label: "Founded (British)" }, { value: "24 km", label: "To Khajjiar" }];
  const foodSubtitle = "Hearty Himachali cuisine with Tibetan and Punjabi flavours";
  const bestTimeLegend = [{ color: "bg-emerald-500", label: "Best (Mar-Jun, Oct)" }, { color: "bg-blue-400", label: "Snow (Dec-Feb)" }, { color: "bg-red-400", label: "Monsoon (Jul-Aug)" }];
  const transportOptions = [
    { mode: "Triveni Cabs™ (Private Taxi)", price: "₹2,500-4,000/day", desc: "AC car with an experienced hill driver -- the safest, most comfortable way to reach Dalhousie's spread-out sights and day trips to Khajjiar and Chamba. Delhi and Pathankot to Dalhousie covered. Call 7668570551.", highlight: true },
    { mode: "Local Sightseeing Taxi", price: "₹1,800-3,000/day", desc: "Union taxis run set sightseeing circuits covering Khajjiar, Panchpula, Dainkund and Kalatop. Convenient for a full day of local exploring.", highlight: false },
    { mode: "HRTC Bus", price: "₹30-200/trip", desc: "Himachal state buses connect Dalhousie with Pathankot, Chamba, Khajjiar and Banikhet. Very affordable, though slower on the winding hill roads.", highlight: false },
    { mode: "Shared Jeep / Taxi", price: "₹50-300/trip", desc: "Shared jeeps run on popular routes such as Dalhousie to Khajjiar and Chamba, a budget-friendly option for solo travellers.", highlight: false },
    { mode: "Walking the Malls", price: "Free", desc: "Dalhousie's two Mall promenades (Garam Sadak and Thandi Sadak) linking Gandhi Chowk and Subhash Chowk are best explored on foot -- level, scenic and traffic-light.", highlight: false },
  ];
  const interlinks = [
    { href: "/dalhousie", title: "Dalhousie Cab Service", desc: "Book local & outstation" },
    { href: "/one-way-cab/delhi-to-dalhousie", title: "Delhi to Dalhousie Cab", desc: "One-way private taxi" },
    { href: "/round-trip/delhi-to-dalhousie", title: "Delhi to Dalhousie Round Trip", desc: "Return journey cab" },
    { href: "/dharamshala-travel-guide", title: "Dharamshala Travel Guide", desc: "Little Lhasa" },
    { href: "/manali-travel-guide", title: "Manali Travel Guide", desc: "Himalayan resort" },
    { href: "/shimla-travel-guide", title: "Shimla Travel Guide", desc: "Queen of Hills" },
    { href: "/amritsar-travel-guide", title: "Amritsar Travel Guide", desc: "Golden Temple city" },
    { href: "/sightseeing", title: "All Sightseeing Tours", desc: "Complete tour list" },
    { href: "/tempo-traveller", title: "Tempo Traveller Hire", desc: "For groups & families" },
  ];
  const ctaTitle = "Need Help Planning Your Dalhousie Trip?";
  const ctaDesc = "We are Himachal travel specialists. Call us for personalized advice on itinerary, timing, and transport for Dalhousie, Khajjiar and the Chamba valley.";
  const whatsappMsg = "I want to book a cab for Dalhousie trip";

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
              question="Planning a Dalhousie trip?"
              answer="Dalhousie is at its best from March to June, when days are a pleasant 15-30 degrees Celsius, while December to February brings snowfall. Two to three days covers the colonial churches, Subhash Baoli, Panchpula and Dainkund Peak, plus a day trip to Khajjiar. Delhi is about 560 km away, with Pathankot the nearest railhead and airport at roughly 80 km."
              facts={[
                { label: 'Best time', value: 'Mar to Jun' },
                { label: 'Ideal duration', value: '2 to 3 days' },
                { label: 'Top sight', value: 'Khajjiar' },
                { label: 'Cab from Delhi', value: '560 km · ₹11/km' },
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
            <p className="text-stone-500 mb-10">Visual month-by-month guide -- taller bars mean better visiting conditions</p>
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
