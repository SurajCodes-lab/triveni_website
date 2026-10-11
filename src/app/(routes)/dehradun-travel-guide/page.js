import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, Calendar, Sunrise, Camera, Coffee, ShoppingBag, Thermometer, Hotel, Landmark, Compass, BookOpen, Scroll } from '@/components/ui/icons';
import { getArticleSchema, getSpeakableSchema, withSpeakableFAQ, getCityPlaceSchema } from '@/lib/seo/speakable-helpers';
import QuickAnswer from '@/components/seo/QuickAnswer';
import { tightenTitle } from '@/lib/seo/serp-ctr';
import HowToReachTable from '@/components/seo/HowToReachTable';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Dehradun Travel Guide 2026 | Doon Valley Attractions & Tips'),
  description: 'Complete Dehradun travel guide 2026. Robber\'s Cave, Sahastradhara, FRI, Tapkeshwar, Mindrolling, best time, food & transport. Call 7668570551.',
  keywords: 'dehradun travel guide, dehradun tourist guide, doon valley guide, dehradun sightseeing, dehradun tourism, things to do in dehradun, dehradun attractions',
  authors: [{ name: 'Triveni Cabs™' }],
  creator: 'Triveni Cabs™',
  publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/dehradun-travel-guide' },
  openGraph: {
    title: 'Dehradun Travel Guide 2026 | Complete Doon Valley Guide',
    description: 'Everything you need to know about visiting Dehradun. Robber\'s Cave, Sahastradhara, FRI, Tapkeshwar Temple, food, transport, day trips.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/dehradun-travel-guide',
    siteName: 'Triveni Cabs™',
    images: [{ url: '/images/sightseeing/Dehradun/Dehradun_hero_section.jpg', width: 1200, height: 630, alt: 'Dehradun Travel Guide 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dehradun Travel Guide 2026 | Doon Valley',
    description: 'Complete Dehradun guide. Attractions, food, shopping, transport.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/sightseeing/Dehradun/Dehradun_hero_section.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function DehradunTravelGuidePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Dehradun Travel Guide", "item": "https://www.trivenicabs.in/dehradun-travel-guide" },
    ],
  };

  const faqData = [
    { question: "How many days do I need in Dehradun?", answer: "1 to 2 days are enough to cover Dehradun's main sights (Robber's Cave, Sahastradhara, Tapkeshwar Temple, Forest Research Institute and Mindrolling Monastery). Most travellers use Dehradun as a base and add 1 or 2 more days for Mussoorie (35 km) or Rishikesh and Haridwar (about 45 km) which are all easy day trips." },
    { question: "Is Dehradun worth visiting?", answer: "Yes. Set in the green Doon Valley at the foothills of the Himalayas, Dehradun combines nature spots like Robber's Cave and Sahastradhara, colonial architecture at the Forest Research Institute, Buddhist calm at Mindrolling Monastery, and a lively cafe and bakery scene on Rajpur Road. It is also the gateway to Mussoorie, Rishikesh and the Char Dham circuit." },
    { question: "What is the best time to visit Dehradun?", answer: "September to November and February to June are the most pleasant. Spring and autumn bring clear skies and comfortable days. May and June can be warm in the valley (up to 35 degrees) but stay cooler than the plains. July and August bring heavy monsoon rain, which turns the valley lush but can cause landslides on the hill roads to Mussoorie. December and January are cold with chilly nights." },
    { question: "How do I get from Delhi to Dehradun?", answer: "By car: about 6 hours via NH-7 (roughly 250 km). Our Delhi to Dehradun one-way cab is a comfortable door-to-door option, call 7668570551 for a quote. By train: the Dehradun Shatabdi, Nanda Devi Express and Vande Bharat connect Delhi in 5 to 6 hours. By air: Jolly Grant Airport (DED), about 25 km from the city, has daily flights from Delhi and other metros." },
    { question: "What food is Dehradun famous for?", answer: "Dehradun is known for Garhwali dishes like Kafuli, Chainsoo, Aloo ke Gutke and Jhangora ki Kheer, along with its famous basmati rice and litchis. The city also has a much-loved bakery and cafe culture on Rajpur Road, plus excellent Tibetan momos and thukpa around Clement Town and Rajpur." },
    { question: "What should I buy in Dehradun?", answer: "Dehradun is famous for its aromatic basmati rice, local litchis and jams, forest honey, and Tibetan woollens and handicrafts. Paltan Bazaar is the main shopping street for clothes, spices and everyday goods, while Rajpur Road has modern malls and cafes." },
    { question: "Can I visit Mussoorie and Rishikesh from Dehradun?", answer: "Yes, both are easy day trips. Mussoorie is about 35 km (1 to 1.5 hours) up a scenic mountain road, and Rishikesh is about 45 km (1.5 hours). Haridwar is around 55 km. Many travellers base themselves in Dehradun and explore all three with a private cab." },
    { question: "Is Dehradun a good base for the Char Dham Yatra?", answer: "Yes. Dehradun and nearby Rishikesh and Haridwar are common starting points for the Char Dham (Yamunotri, Gangotri, Kedarnath and Badrinath). We arrange comfortable long-route cabs and tempo travellers for the yatra. Call 7668570551 to plan your itinerary." },
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
    slug: 'dehradun-travel-guide',
    headline: 'Dehradun Travel Guide 2026 — Doon Valley Attractions, Food & Tips',
    description: 'Complete Dehradun travel guide. Robber\'s Cave, Sahastradhara, Tapkeshwar Temple, FRI, Mindrolling Monastery, monthly weather, Garhwali food, shopping and transport. Updated for 2026.',
    image: '/images/sightseeing/Dehradun/Dehradun_hero_section.jpg',
    datePublished: '2026-01-15',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.faq-section .faq-answer-1']
  });

  const placeSchema = getCityPlaceSchema("dehradun", { idSlug: "dehradun-travel-guide" });

  const attractions = [
    { name: "Robber's Cave (Guchhupani)", desc: "A striking natural cave formation where a cold stream flows through a narrow gorge, disappearing underground and reappearing. You wade through knee-deep water between towering rock walls. About 8 km from the city.", entry: "₹25 approx", timing: "7:00 AM - 6:00 PM", duration: "1.5-2 hours", icon: Compass, img: "/images/sightseeing/Dehradun/Robbers_Cave.jpg" },
    { name: "Sahastradhara", desc: "The 'thousand-fold spring' -- terraced sulphur springs and limestone caves believed to have healing properties. Water drips over projecting rock ledges. Popular for a ropeway ride over the valley. About 11 km from the city.", entry: "Free (nominal parking)", timing: "8:00 AM - 6:00 PM", duration: "1.5-2 hours", icon: Sunrise, img: "/images/sightseeing/Dehradun/Sahastradhara.jpg" },
    { name: "Tapkeshwar Temple", desc: "A revered cave temple dedicated to Lord Shiva on the banks of the Tons river, where spring water drips naturally onto the Shivling. Peaceful setting reached by a short walk through a wooded ravine.", entry: "Free", timing: "6:00 AM - 8:00 PM", duration: "45 min - 1 hr", icon: Landmark, img: "/images/sightseeing/Dehradun/Tapkeshwar_Temple.jpg" },
    { name: "Forest Research Institute (FRI)", desc: "One of India's grandest colonial-era buildings, set on a sprawling green estate with a Greco-Roman and Indo-Saracenic facade. Houses six forestry museums and long arched corridors -- a favourite for photography.", entry: "₹40 approx", timing: "9:30 AM - 5:00 PM", duration: "1.5-2 hours", icon: BookOpen, img: "/images/sightseeing/Dehradun/Forest_Research_Institute.jpg" },
    { name: "Mindrolling Monastery & Great Stupa", desc: "A serene Tibetan Buddhist monastery in Clement Town with the Great Buddha Stupa, one of the largest stupas in India, surrounded by gardens and a towering golden Buddha statue.", entry: "Free", timing: "9:00 AM - 7:00 PM", duration: "1-1.5 hours", icon: Star, img: "/images/sightseeing/Dehradun/Mindrolling_Monastery.jpg" },
    { name: "Malsi Deer Park (Dehradun Zoo)", desc: "A compact zoological park at the foothills on the Mussoorie road, home to deer, peacocks, Himalayan bears and a children's play area. A relaxed green stop for families.", entry: "₹40 approx", timing: "9:00 AM - 5:00 PM", duration: "1-1.5 hours", icon: Camera },
    { name: "Lachhiwala Nature Park", desc: "A popular eco-tourism spot with man-made pools fed by the Song river, ringed by sal forest. Great for a picnic, a shallow dip and birdwatching. About 22 km from the city on the Rishikesh road.", entry: "₹50 approx", timing: "8:00 AM - 6:00 PM", duration: "1-2 hours", icon: Compass },
    { name: "Rajaji National Park (Chilla/Mohand)", desc: "A rich forest reserve on Dehradun's edge, home to elephants, tigers, leopards and abundant birdlife. Jeep safaris run into the Chilla and Mohand ranges (seasonal, closed in monsoon).", entry: "Safari charges apply", timing: "Safari slots (dawn/dusk)", duration: "2-3 hours", icon: Shield },
  ];

  const monthlyGuide = [
    { month: "Jan", temp: "5-19°C", weather: "Cold, misty", crowd: "Low", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 45 },
    { month: "Feb", temp: "7-22°C", weather: "Cool, clear", crowd: "Med", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 80 },
    { month: "Mar", temp: "11-27°C", weather: "Pleasant", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 92 },
    { month: "Apr", temp: "16-32°C", weather: "Warm days", crowd: "High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 82 },
    { month: "May", temp: "20-36°C", weather: "Hot", crowd: "High", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 60 },
    { month: "Jun", temp: "22-36°C", weather: "Hot, humid", crowd: "Med", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 45 },
    { month: "Jul", temp: "23-31°C", weather: "Monsoon", crowd: "Low", verdict: "Scenic", color: "bg-amber-100 text-amber-800", bar: 35 },
    { month: "Aug", temp: "23-30°C", weather: "Peak rain", crowd: "Low", verdict: "Not ideal", color: "bg-red-100 text-red-800", bar: 25 },
    { month: "Sep", temp: "21-30°C", weather: "Rain fading", crowd: "Med", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 60 },
    { month: "Oct", temp: "16-29°C", weather: "Clear, crisp", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 95 },
    { month: "Nov", temp: "10-25°C", weather: "Cool, clear", crowd: "High", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 100 },
    { month: "Dec", temp: "6-21°C", weather: "Cold, foggy", crowd: "Med", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 78 },
  ];

  const foodSection = [
    { name: "Kafuli", desc: "A hearty Garhwali green curry of spinach and fenugreek leaves thickened with rice paste. Wholesome, mildly spiced comfort food best enjoyed at a local Garhwali eatery.", icon: "🥬" },
    { name: "Chainsoo & Aloo ke Gutke", desc: "Chainsoo is a smoky roasted black gram dal; Aloo ke Gutke are tangy spiced potatoes tempered with jakhya seeds. Classic hill-kitchen staples of the Doon region.", icon: "🍲" },
    { name: "Jhangora ki Kheer", desc: "A traditional dessert made from barnyard millet slow-cooked in milk. A local twist on kheer that reflects Uttarakhand's grain-rich mountain cuisine.", icon: "🍚" },
    { name: "Bakery Treats (Rajpur Road)", desc: "Dehradun's beloved bakery culture -- rusks, plum cakes, cookies and fresh bread from decades-old bakeries and cafes lining Rajpur Road.", icon: "🥐" },
    { name: "Tibetan Momos & Thukpa", desc: "Steamed and fried momos and warming thukpa noodle soup, a legacy of the Tibetan community around Clement Town and Rajpur. Cheap, filling and everywhere.", icon: "🥟" },
    { name: "Dehradun Litchi & Basmati", desc: "The valley is famous for its juicy summer litchis and long-grain aromatic basmati rice. Look for both in local markets and on restaurant menus in season.", icon: "🍒" },
  ];

  const shoppingSection = [
    { name: "Basmati Rice & Local Produce", desc: "Dehradun's prized long-grain basmati rice, forest honey, jams and pickles make excellent gifts. Buy from established grocers around Paltan Bazaar and Rajpur Road.", price: "₹150 - ₹2,000" },
    { name: "Tibetan Woollens & Handicrafts", desc: "Shawls, sweaters, prayer flags and Buddhist curios from the Tibetan markets near Clement Town and Rajpur. Great value winter woollens.", price: "₹200 - ₹5,000" },
    { name: "Paltan Bazaar Finds", desc: "The city's bustling main market for clothing, footwear, spices, dry fruits and everyday goods. Lively, walkable and good for bargaining.", price: "₹100 - ₹3,000" },
    { name: "Litchi & Forest Honey", desc: "Seasonal Dehradun litchis and pure Himalayan forest honey -- signature local products you will find fresh in summer months and at roadside stalls.", price: "₹100 - ₹1,500" },
  ];

  const areaGuide = [
    { area: "Rajpur Road", desc: "The city's premium strip lined with cafes, bakeries, malls and good mid-range to upscale hotels. Leafy, central and well-connected to both the city and Mussoorie road.", budget: "₹2,000-7,000/night", icon: "🏪" },
    { area: "Clock Tower / Paltan Bazaar", desc: "The bustling old-city core, walking distance to markets and eateries. Budget to mid-range stays with everything close by. Lively and central.", budget: "₹1,000-3,000/night", icon: "🏨" },
    { area: "Mussoorie Road (Foothills)", desc: "Quieter resorts and boutique stays climbing towards Mussoorie, near Malsi Deer Park. Green surroundings and valley views, a short drive from the city.", budget: "₹2,500-9,000/night", icon: "🏔️" },
    { area: "Clement Town", desc: "Peaceful suburb around Mindrolling Monastery and the Great Stupa, with budget hotels and Tibetan eateries. Good for a calmer, spiritual base near the airport road.", budget: "₹1,200-4,000/night", icon: "🛕" },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Uttarakhand Specialists", desc: "We know every Doon route" },
    { icon: Landmark, title: "Gateway to the Hills", desc: "Mussoorie, Rishikesh, Char Dham" },
    { icon: Users, title: "8000+ Travellers Served", desc: "Trusted hill-route drivers" },
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

  const heroImage = "/images/sightseeing/Dehradun/Dehradun_hero_section.jpg";
  const cityName = "Dehradun";
  const cityTagline = "Your complete guide to the Doon Valley -- natural caves and springs, colonial architecture, Buddhist stupas and a buzzing cafe culture, all cradled by the Himalayan foothills.";
  const welcomeTitle = "Welcome to the Doon Valley";
  const welcomeText = "Dehradun, the capital of Uttarakhand, sits in the lush Doon Valley between the rivers Ganges and Yamuna, at the foothills of the Himalayas. Long famous for its elite schools, its forestry institute and its litchi orchards, the city today is a relaxed base for exploring the hills. Nature lovers head to <strong>Robber's Cave</strong> and <strong>Sahastradhara</strong>, history and architecture fans wander the grand <strong>Forest Research Institute</strong>, and those seeking calm find it at the <strong>Mindrolling Monastery</strong> and its Great Stupa. Rajpur Road brings a modern edge with its bakeries and cafes, while the Clock Tower and Paltan Bazaar keep the old-city buzz alive. Best of all, Dehradun is the gateway to <strong>Mussoorie</strong> (35 km), <strong>Rishikesh</strong> and <strong>Haridwar</strong>, and the starting point of the Char Dham Yatra. Whether you are here for a quiet valley break or a launchpad into the mountains, this guide will help you plan the perfect Dehradun trip.";
  const stats = [{ value: "640m", label: "Altitude" }, { value: "Doon", label: "Valley Capital" }, { value: "35 km", label: "To Mussoorie" }];
  const foodSubtitle = "Hearty Garhwali mountain cuisine and a famous bakery culture";
  const bestTimeLegend = [{ color: "bg-emerald-500", label: "Best (Feb-Apr, Oct-Nov)" }, { color: "bg-amber-400", label: "Okay (May-Jun, Monsoon)" }, { color: "bg-red-400", label: "Heavy Rain (Aug)" }];
  const transportOptions = [
    { mode: "Triveni Cabs™ (Private Taxi)", price: "₹2,000-3,500/day", desc: "AC car with an experienced hill driver. The most comfortable way to cover Dehradun and reach Mussoorie, Rishikesh or Haridwar. Delhi to Dehradun one-way available. Call 7668570551.", highlight: true },
    { mode: "Auto-rickshaw", price: "₹50-200/trip", desc: "Widely available for short city trips. Negotiate the fare before you ride or ask for the meter. Good for hops between markets and sights.", highlight: false },
    { mode: "Vikram (Shared Tempo)", price: "₹10-30/trip", desc: "The city's shared three-wheeler tempos run on fixed routes and are the cheapest way to get around Dehradun for short distances.", highlight: false },
    { mode: "City & Hill Buses", price: "₹15-80/trip", desc: "Uttarakhand Transport and private buses connect the ISBT to Mussoorie, Rishikesh and Haridwar. Affordable but slower and often crowded.", highlight: false },
    { mode: "App Cabs / Rentals", price: "₹100-500/trip", desc: "App-based cabs operate within the city. Self-drive and chauffeur rentals are handy for day trips into the surrounding hills.", highlight: false },
  ];
  const interlinks = [
    { href: "/dehradun", title: "Dehradun Cab Service", desc: "Book local & outstation" },
    { href: "/one-way-cab/delhi-to-dehradun", title: "Delhi to Dehradun Cab", desc: "One-way private taxi" },
    { href: "/mussoorie-travel-guide", title: "Mussoorie Travel Guide", desc: "Queen of the Hills" },
    { href: "/rishikesh-travel-guide", title: "Rishikesh Travel Guide", desc: "Yoga capital" },
    { href: "/haridwar-travel-guide", title: "Haridwar Travel Guide", desc: "Gateway to the Ganges" },
    { href: "/nainital-travel-guide", title: "Nainital Travel Guide", desc: "Lake district" },
    { href: "/sightseeing", title: "All Sightseeing Tours", desc: "Complete tour list" },
    { href: "/tempo-traveller", title: "Tempo Traveller Hire", desc: "For groups & yatra" },
    { href: "/shimla-travel-guide", title: "Shimla Travel Guide", desc: "Queen of Hills" },
  ];
  const ctaTitle = "Need Help Planning Your Dehradun Trip?";
  const ctaDesc = "We are Uttarakhand travel specialists. Call us for personalized advice on itinerary, timing, and transport across the Doon Valley and beyond.";
  const whatsappMsg = "I want to book a cab for Dehradun trip";

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
              question="Planning a Dehradun trip?"
              answer="Dehradun is most pleasant from September to November and February to June. One to two days covers Robber's Cave, Sahastradhara, Tapkeshwar Temple, the Forest Research Institute and Mindrolling Monastery, and most travellers use the city as a base for Mussoorie (35 km) or Rishikesh and Haridwar. Delhi is roughly 250 km away, about 6 hours by car on NH-7."
              facts={[
                { label: 'Best time', value: 'Sep-Nov, Feb-Jun' },
                { label: 'Ideal duration', value: '1 to 2 days' },
                { label: 'Top sight', value: 'Robber\'s Cave' },
                { label: 'Cab from Delhi', value: '250 km · ₹11/km' },
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

        {/* Week 49: the table this page had no figures in — distances and fares from the site's own records */}

        <HowToReachTable city="Dehradun" citySlug="dehradun" />


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
