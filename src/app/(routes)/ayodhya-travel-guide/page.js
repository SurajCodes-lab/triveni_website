import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, Calendar, Sunrise, Camera, Coffee, ShoppingBag, Thermometer, Hotel, Landmark, Compass, BookOpen, Scroll } from '@/components/ui/icons';
import { getArticleSchema, getSpeakableSchema, withSpeakableFAQ, getCityPlaceSchema } from '@/lib/seo/speakable-helpers';
import QuickAnswer from '@/components/seo/QuickAnswer';
import { tightenTitle } from '@/lib/seo/serp-ctr';
import HowToReachTable from '@/components/seo/HowToReachTable';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Ayodhya Travel Guide 2026 | Ram Mandir, Temples, Food & Tips'),
  description: 'Complete Ayodhya travel guide 2026. Ram Mandir, Hanuman Garhi, Saryu aarti, Deepotsav, best time, food, darshan tips. Call 7668570551.',
  keywords: 'ayodhya travel guide, ram mandir guide, ayodhya tourist guide, ayodhya sightseeing, ram janmabhoomi, hanuman garhi, saryu ghat, deepotsav, things to do in ayodhya',
  authors: [{ name: 'Triveni Cabs™' }],
  creator: 'Triveni Cabs™',
  publisher: 'Triveni Cabs™',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/ayodhya-travel-guide' },
  openGraph: {
    title: 'Ayodhya Travel Guide 2026 | Complete Ram Nagari Guide',
    description: 'Everything you need to know about visiting Ayodhya. Ram Mandir, Hanuman Garhi, Saryu Ghat, darshan tips, food, transport.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/ayodhya-travel-guide',
    siteName: 'Triveni Cabs™',
    images: [{ url: '/images/sightseeing/Ayodhya/ayodha_hero_section.jpg', width: 1200, height: 630, alt: 'Ayodhya Travel Guide 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayodhya Travel Guide 2026 | Ram Nagari',
    description: 'Complete Ayodhya guide. Ram Mandir, temples, Saryu aarti, food, transport.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/sightseeing/Ayodhya/ayodha_hero_section.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function AyodhyaTravelGuidePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Ayodhya Travel Guide", "item": "https://www.trivenicabs.in/ayodhya-travel-guide" },
    ],
  };

  const faqData = [
    { question: "How many days do I need in Ayodhya?", answer: "1 to 2 days are enough for the main sites. One full day covers Ram Mandir (Ram Janmabhoomi), Hanuman Garhi, Kanak Bhawan and the evening Saryu aarti at Ram ki Paidi. A second day lets you visit Nageshwarnath Temple, Guptar Ghat, Dashrath Mahal and take an unhurried boat ride on the Saryu." },
    { question: "Do I need to book Ram Mandir darshan in advance?", answer: "General darshan does not require a booking, but crowds are very large, especially on weekends, Ekadashi, Ram Navami and around Diwali. Reach early morning to avoid long queues. Mobile phones, bags, cameras and leather items are not allowed inside the sanctum, so carry as little as possible and use the cloakrooms near the entrance." },
    { question: "What is the best time to visit Ayodhya?", answer: "October to March is ideal with pleasant weather (10-27 degrees Celsius). The town is at its most spectacular during Deepotsav, held on the eve of Diwali (October or November), when lakhs of earthen diyas light up Ram ki Paidi and the Saryu ghats. Ram Navami (March or April) is deeply spiritual but extremely crowded. Summers (April to June) are very hot." },
    { question: "How do I reach Ayodhya from Delhi?", answer: "By car it is about 690 km (10-11 hours) via the Lucknow-Agra Expressway and Purvanchal Expressway. Our Delhi to Ayodhya cab is the most comfortable option for pilgrims and families. By train, Ayodhya Dham Junction is well connected. By air, the new Maharishi Valmiki International Airport Ayodhya Dham has direct flights from Delhi and other major cities." },
    { question: "Is Ayodhya vegetarian only?", answer: "Yes. Ayodhya is a sacred pilgrimage town and the food is almost entirely pure vegetarian, with no alcohol served in and around the temple area. Expect satvik Awadhi vegetarian thalis, litti, kachori-sabzi, and famous local sweets like pedas, rabri and jalebi." },
    { question: "What is the dress code for temples in Ayodhya?", answer: "Modest clothing that covers shoulders and knees is expected at all temples. You must remove footwear before entering shrines. At Ram Mandir there is tight security, so avoid carrying bags, and be prepared to leave phones and leather belts or wallets in the cloakroom before the sanctum." },
    { question: "What food is Ayodhya famous for?", answer: "Ayodhya offers satvik Awadhi vegetarian food. Local specialties include Ayodhya ke pede (milk fudge), rabri, jalebi, khasta kachori with aloo sabzi, litti-chokha, chaat and thick lassi. Many dharamshalas and temple bhandaras also serve simple, wholesome thalis." },
    { question: "Can I combine Ayodhya with other pilgrimage cities?", answer: "Yes. Ayodhya pairs naturally with Lucknow (about 135 km), Varanasi (about 210 km) and Prayagraj for a spiritual circuit of Uttar Pradesh. We offer tempo traveller and multi-day car packages that link Ayodhya with Kashi (Varanasi) and Prayagraj, or with Naimisharanya and Lucknow." },
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
    slug: 'ayodhya-travel-guide',
    headline: 'Ayodhya Travel Guide 2026 — Ram Mandir, Temples, Saryu Aarti, Food & Tips',
    description: 'Complete Ayodhya travel guide. Ram Mandir, Hanuman Garhi, Kanak Bhawan, Saryu Ghat, Deepotsav, monthly weather, satvik food, darshan tips and transport. Updated for 2026.',
    image: '/images/sightseeing/Ayodhya/ayodha_hero_section.jpg',
    datePublished: '2026-01-15',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.faq-section .faq-answer-1']
  });

  const placeSchema = getCityPlaceSchema("ayodhya", { idSlug: "ayodhya-travel-guide" });

  const attractions = [
    { name: "Ram Mandir (Ram Janmabhoomi)", desc: "The grand Nagara-style temple at the birthplace of Lord Rama, consecrated in the Pran Pratishtha ceremony of January 2024. The centrepiece of any Ayodhya visit, with the idol of Ram Lalla in the sanctum. Arrive early to beat the crowds.", entry: "Free", timing: "Morning & evening darshan (check daily aarti times)", duration: "2-3 hours (incl. queue)", icon: Landmark, img: "/images/sightseeing/Ayodhya/Ram_Mandir.jpg" },
    { name: "Hanuman Garhi", desc: "A revered 10th-century hilltop temple of Lord Hanuman reached by a climb of 76 steps. By tradition, devotees seek Hanuman's blessings here before visiting Ram Janmabhoomi. Lively bazaar of prasad and flowers at the base.", entry: "Free", timing: "5:00 AM - 10:00 PM", duration: "45 min - 1 hr", icon: Shield, img: "/images/sightseeing/Ayodhya/Hanuman_Garhi.jpg" },
    { name: "Kanak Bhawan", desc: "A beautiful temple believed to have been gifted to Sita as a wedding present. The gold-adorned idols of Ram and Sita and the ornate interiors make it one of Ayodhya's most photographed shrines.", entry: "Free", timing: "8:00 AM - 12 PM, 4:30 - 9:00 PM", duration: "45 min - 1 hr", icon: Star, img: "/images/sightseeing/Ayodhya/Kanak_Bhawan.jpg" },
    { name: "Saryu River Ghat & Aarti", desc: "The sacred Saryu riverfront where pilgrims take a holy dip. The evening Saryu aarti, with rows of lamps and chanting, is a soul-stirring experience. Boat rides are available from the main ghats.", entry: "Free (boat rides paid)", timing: "Aarti around sunset", duration: "1-1.5 hours", icon: Sunrise, img: "/images/sightseeing/Ayodhya/Saryu_River_Ghat.jpg" },
    { name: "Ram ki Paidi", desc: "A series of ghats along the Saryu, dramatically illuminated at night. This is the heart of Ayodhya's famous Deepotsav, when lakhs of diyas are lit on the eve of Diwali, drawing visitors from across the world.", entry: "Free", timing: "All day (best at dusk)", duration: "45 min - 1 hr", icon: Camera },
    { name: "Nageshwarnath Temple", desc: "An ancient Shiva temple believed to have been established by Kush, the son of Lord Rama. Grand celebrations are held here during Mahashivratri. A short walk from the Saryu ghats.", entry: "Free", timing: "5:00 AM - 9:00 PM", duration: "30-45 min", icon: Compass },
    { name: "Guptar Ghat", desc: "A peaceful, well-maintained ghat on the Saryu associated with the belief that Lord Rama took jal samadhi here. Ornate riverside temples and quieter surroundings make it ideal for reflection and photography.", entry: "Free", timing: "6:00 AM - 8:00 PM", duration: "45 min - 1 hr", icon: BookOpen },
    { name: "Dashrath Mahal (Bada Asthan)", desc: "Believed to be the site of the royal residence of King Dashrath, Lord Rama's father. A vibrant temple complex in the old town that comes alive with bhajans and celebrations during Ram Navami.", entry: "Free", timing: "8:00 AM - 12 PM, 4:00 - 9:00 PM", duration: "30-45 min", icon: Landmark },
  ];

  const monthlyGuide = [
    { month: "Jan", temp: "8-22°C", weather: "Cold, misty", crowd: "High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 85 },
    { month: "Feb", temp: "10-26°C", weather: "Pleasant", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 92 },
    { month: "Mar", temp: "16-32°C", weather: "Warming, Ram Navami", crowd: "Very High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 82 },
    { month: "Apr", temp: "22-39°C", weather: "Hot", crowd: "Medium", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 35 },
    { month: "May", temp: "27-43°C", weather: "Very hot", crowd: "Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 12 },
    { month: "Jun", temp: "28-42°C", weather: "Pre-monsoon", crowd: "Low", verdict: "Not ideal", color: "bg-red-100 text-red-800", bar: 12 },
    { month: "Jul", temp: "26-35°C", weather: "Monsoon", crowd: "Low", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 38 },
    { month: "Aug", temp: "26-34°C", weather: "Humid, rain", crowd: "Low-Med", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 40 },
    { month: "Sep", temp: "25-34°C", weather: "Rain fading", crowd: "Medium", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 52 },
    { month: "Oct", temp: "20-33°C", weather: "Pleasant, Deepotsav", crowd: "Very High", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 100 },
    { month: "Nov", temp: "13-29°C", weather: "Cool, clear", crowd: "Very High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 95 },
    { month: "Dec", temp: "8-24°C", weather: "Cold, clear", crowd: "High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 88 },
  ];

  const foodSection = [
    { name: "Ayodhya ke Pede", desc: "The town's signature milk fudge, soft and lightly cardamom-scented. Sold at shops around Hanuman Garhi and the temple bazaars, and a popular prasad and gift.", icon: "🍬" },
    { name: "Khasta Kachori & Aloo Sabzi", desc: "Crisp, flaky kachoris served with spicy potato curry. A classic Awadhi breakfast found at street stalls near the ghats and old-town lanes.", icon: "🫓" },
    { name: "Rabri & Jalebi", desc: "Thick, slow-cooked rabri paired with hot, crisp jalebis. A beloved sweet combination sold fresh in the evening at local mithai shops.", icon: "🍮" },
    { name: "Litti-Chokha", desc: "Roasted wheat balls stuffed with spiced sattu, served with mashed brinjal-tomato chokha. A rustic, satisfying dish reflecting the Awadh and Purvanchal region.", icon: "🍲" },
    { name: "Satvik Awadhi Thali", desc: "A simple pure-vegetarian thali with dal, seasonal sabzi, roti, rice and sweet. Served at dharamshalas, temple bhandaras and local bhojanalayas.", icon: "🍛" },
    { name: "Thick Lassi & Chaat", desc: "Cooling glasses of sweet lassi topped with malai, and tangy street chaat like aloo tikki and dahi bhalla, perfect after a day of temple hopping.", icon: "🥤" },
  ];

  const shoppingSection = [
    { name: "Ram Darbar & Brass Idols", desc: "Beautifully crafted idols and Ram Darbar sets in brass and metal, along with framed images of Lord Rama. Available across the temple bazaars, especially near Hanuman Garhi.", price: "₹100 - ₹10,000+" },
    { name: "Prasad & Pedas", desc: "Boxes of famous Ayodhya pedas and other temple prasad make popular gifts to carry home. Buy from established sweet shops for freshness and hygiene.", price: "₹100 - ₹800" },
    { name: "Rudraksha & Puja Items", desc: "Rudraksha malas, tulsi beads, kalava, incense and complete puja kits. A staple purchase for devotees at stalls surrounding the main temples.", price: "₹50 - ₹5,000" },
    { name: "Khadau & Religious Souvenirs", desc: "Traditional wooden khadau (sandals), Ram-naam printed shawls and stoles, and small keepsakes engraved with 'Jai Shri Ram'. Simple, meaningful mementos of the visit.", price: "₹100 - ₹2,000" },
  ];

  const areaGuide = [
    { area: "Near Ram Janmabhoomi", desc: "The most convenient base, within walking distance of Ram Mandir, Hanuman Garhi and Kanak Bhawan. Ranges from dharamshalas and guesthouses to newer mid-range hotels. Fills up fast on festival dates.", budget: "₹1,000-5,000/night", icon: "🛕" },
    { area: "Ram ki Paidi / Saryu Ghat Side", desc: "Stays close to the river and the evening aarti. Peaceful mornings by the ghats and easy access for boat rides. A mix of budget lodges and comfortable hotels.", budget: "₹1,200-4,500/night", icon: "🌊" },
    { area: "Ayodhya Dham & Faizabad Road", desc: "Newer hotels and business-class properties along the main approach road, good for travellers arriving by train or air. A short drive from the temple core.", budget: "₹2,000-7,000/night", icon: "🏨" },
    { area: "Faizabad (Ayodhya City)", desc: "The adjoining twin city offers a wider choice of restaurants, markets and mid-range hotels, about 15-20 minutes from the main temples. Good for larger groups.", budget: "₹1,000-4,000/night", icon: "🏪" },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "UP Pilgrimage Experts", desc: "Ayodhya, Kashi & Prayag" },
    { icon: Landmark, title: "Ram Mandir Specialists", desc: "Smooth darshan trips" },
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

  const heroImage = "/images/sightseeing/Ayodhya/ayodha_hero_section.jpg";
  const cityName = "Ayodhya";
  const cityTagline = "Your complete guide to Ram Nagari — the grand Ram Mandir, ancient temples, the sacred Saryu and its glowing ghats. Everything you need for a smooth, soul-stirring pilgrimage to Ayodhya.";
  const welcomeTitle = "Welcome to Ram Nagari";
  const welcomeText = "Ayodhya, on the banks of the sacred Saryu river in Uttar Pradesh, is revered across the world as the birthplace of Lord Rama and one of Hinduism's seven holiest cities (Sapta Puri). Since the consecration of the magnificent <strong>Ram Mandir at Ram Janmabhoomi in January 2024</strong>, the town has seen an extraordinary rise in pilgrims and visitors. Yet Ayodhya is far more than a single temple — Hanuman Garhi, Kanak Bhawan, Nageshwarnath, Dashrath Mahal and the timeless Saryu ghats each carry their own stories from the Ramayana. Evenings glow with the Saryu aarti, and around Diwali the town hosts the spectacular <strong>Deepotsav</strong>, when lakhs of diyas illuminate Ram ki Paidi. Whether you come for darshan, heritage, or the deep spiritual calm of the ghats, this guide will help you plan a meaningful visit to Ayodhya.";
  const stats = [{ value: "2024", label: "Ram Mandir Opened" }, { value: "Sapta Puri", label: "Holy City" }, { value: "Saryu", label: "Sacred River" }];
  const foodSubtitle = "Satvik Awadhi vegetarian food and famous local sweets";
  const bestTimeLegend = [{ color: "bg-emerald-500", label: "Best (Oct-Mar)" }, { color: "bg-amber-400", label: "Okay (Jul-Sep)" }, { color: "bg-red-400", label: "Avoid (May-Jun)" }];
  const transportOptions = [
    { mode: "Triveni Cabs™ (Private Taxi)", price: "₹2,500-4,000/day", desc: "AC car with driver — the easiest way to cover Ayodhya's temples and combine nearby Lucknow, Varanasi or Prayagraj. Delhi to Ayodhya one-way available. Call 7668570551.", highlight: true },
    { mode: "E-Rickshaw (Battery Auto)", price: "₹20-100/trip", desc: "The most common local transport within the temple town, ideal for short hops between Ram Mandir, Hanuman Garhi and the ghats.", highlight: false },
    { mode: "Auto-rickshaw", price: "₹50-200/trip", desc: "Available for slightly longer trips and to reach Faizabad. Agree on the fare before starting your ride.", highlight: false },
    { mode: "Cycle Rickshaw", price: "₹30-80/trip", desc: "Great for the narrow old-town lanes near the temples and for soaking in the atmosphere at a slow pace.", highlight: false },
    { mode: "Saryu Boat Ride", price: "₹50-500/ride", desc: "Shared and private boats on the Saryu from the main ghats — a peaceful way to see the riverfront and temples at dawn or dusk.", highlight: false },
  ];
  const interlinks = [
    { href: "/ayodhya", title: "Ayodhya Cab Service", desc: "Book local & outstation taxi" },
    { href: "/one-way-cab/delhi-to-ayodhya", title: "Delhi to Ayodhya Cab", desc: "One-way private taxi" },
    { href: "/tempo-traveller", title: "Tempo Traveller Hire", desc: "For groups & families" },
    { href: "/varanasi-travel-guide", title: "Varanasi Travel Guide", desc: "Kashi & the Ganga ghats" },
    { href: "/lucknow-travel-guide", title: "Lucknow Travel Guide", desc: "City of Nawabs" },
    { href: "/agra-travel-guide", title: "Agra Travel Guide", desc: "Taj Mahal & more" },
    { href: "/tour-package", title: "Tour Packages", desc: "Multi-day pilgrimage trips" },
    { href: "/sightseeing", title: "All Sightseeing Tours", desc: "Complete tour list" },
    { href: "/jaipur-travel-guide", title: "Jaipur Travel Guide", desc: "The Pink City" },
  ];
  const ctaTitle = "Planning a Pilgrimage to Ayodhya?";
  const ctaDesc = "We are Uttar Pradesh pilgrimage specialists. Call us for advice on darshan timing, itineraries and comfortable transport for your group.";
  const whatsappMsg = "I want to book a cab for Ayodhya trip";

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
              question="Planning a Ayodhya trip?"
              answer="Ayodhya is best visited from October to March, when the weather stays a pleasant 10-27 degrees Celsius. One to two days covers Ram Mandir, Hanuman Garhi, Kanak Bhawan and the evening Saryu aarti at Ram ki Paidi. Delhi is about 690 km away, roughly 10 to 11 hours by car via the Lucknow-Agra and Purvanchal Expressways."
              facts={[
                { label: 'Best time', value: 'Oct to Mar' },
                { label: 'Ideal duration', value: '1 to 2 days' },
                { label: 'Top sight', value: 'Ram Mandir' },
                { label: 'Cab from Delhi', value: '690 km · ₹11/km' },
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

        <HowToReachTable city="Ayodhya" citySlug="ayodhya" />


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
