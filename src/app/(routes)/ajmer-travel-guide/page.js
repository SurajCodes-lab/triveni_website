import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, Calendar, Sunrise, Camera, Coffee, ShoppingBag, Thermometer, Hotel, Landmark, Compass, BookOpen, Scroll } from '@/components/ui/icons';
import { getArticleSchema, getSpeakableSchema, withSpeakableFAQ, getCityPlaceSchema } from '@/lib/seo/speakable-helpers';
import QuickAnswer from '@/components/seo/QuickAnswer';

export const revalidate = 3600;

export const metadata = {
  title: 'Ajmer Travel Guide 2026 | Ajmer Sharif Dargah, Lakes & Tips',
  description: 'Complete Ajmer travel guide 2026. Ajmer Sharif Dargah, Adhai Din Ka Jhonpra, Ana Sagar Lake, Taragarh, best time, food, dargah etiquette. Call 7668570551.',
  keywords: 'ajmer travel guide, ajmer sharif dargah, khwaja moinuddin chishti, adhai din ka jhonpra, ana sagar lake, taragarh fort, ajmer sightseeing, things to do in ajmer',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/ajmer-travel-guide' },
  openGraph: {
    title: 'Ajmer Travel Guide 2026 | Complete Sufi City Guide',
    description: 'Everything you need to know about visiting Ajmer. Ajmer Sharif Dargah, Adhai Din Ka Jhonpra, Ana Sagar Lake, Taragarh Fort, food, transport.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/ajmer-travel-guide',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/sightseeing/Ajmer_Pushkar/Ajmer_shariff_hero_section.jpg', width: 1200, height: 630, alt: 'Ajmer Travel Guide 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ajmer Travel Guide 2026 | Sufi City',
    description: 'Complete Ajmer guide. Ajmer Sharif Dargah, forts, lakes, food, transport.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/sightseeing/Ajmer_Pushkar/Ajmer_shariff_hero_section.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function AjmerTravelGuidePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Ajmer Travel Guide", "item": "https://www.trivenicabs.in/ajmer-travel-guide" },
    ],
  };

  const faqData = [
    { question: "How many days do I need in Ajmer?", answer: "1 day is enough for the highlights — the Ajmer Sharif Dargah, Adhai Din Ka Jhonpra and a walk by Ana Sagar Lake. With 2 days you can add Taragarh Fort, the Nareli Jain Temple, Soniji Ki Nasiyan and an easy 15 km trip to Pushkar's Brahma Temple, which pairs perfectly with Ajmer." },
    { question: "What is the Ajmer Sharif Dargah?", answer: "The Ajmer Sharif Dargah is the shrine of the revered 13th-century Sufi saint Khwaja Moinuddin Chishti, founder of the Chishti order in India. It is one of the most important Sufi pilgrimage sites in South Asia, visited by people of all faiths who come to offer a chadar, flowers and prayers, often accompanied by soulful qawwali." },
    { question: "What is the best time to visit Ajmer?", answer: "October to March offers the most comfortable weather (10-27 degrees Celsius). The Urs festival, marking the death anniversary of Khwaja Moinuddin Chishti, draws enormous crowds — its dates follow the Islamic lunar calendar (in the month of Rajab) and shift each year. Summers (April to June) are very hot and best avoided." },
    { question: "What is the etiquette for visiting Ajmer Sharif Dargah?", answer: "Both men and women should cover their heads before entering — cloth caps and scarves are sold at the gates. Remove your footwear (paid cloakrooms are available), dress modestly and be respectful of prayers in progress. You can offer a chadar, flowers and 'tabarruk'. Be cautious of khadims or agents who insist on large fixed donations; give only what you are comfortable with." },
    { question: "How do I reach Ajmer from Delhi?", answer: "By car it is about 400 km (7-8 hours) via NH48 through Jaipur. By train, Ajmer Junction is a major station on the Delhi-Jaipur-Ahmedabad line with fast trains including the Shatabdi. The nearest airports are Kishangarh (about 30 km) and Jaipur (about 135 km). A private cab is convenient, especially for combining Ajmer with Pushkar and Jaipur." },
    { question: "Can I visit Pushkar from Ajmer?", answer: "Yes, and most travellers do. Pushkar, with its rare Brahma Temple and sacred lake, is just 15 km from Ajmer over the Nag Pahar hills — about 30 minutes by road. Ajmer Sharif Dargah and Pushkar's Brahma Temple are commonly visited together in a single day, which is why the two towns are often clubbed as 'Ajmer-Pushkar'." },
    { question: "What food is Ajmer famous for?", answer: "Ajmer is known for its Mughlai and Sufi-influenced cuisine, especially in the lanes around the Dargah — kebabs, biryani, keema and rich curries. It is also famous for Sohan Halwa, a dense sweet, and for kheer and firni sold near the shrine. Rajasthani vegetarian thalis and street chaat are widely available too." },
    { question: "Is Ajmer suitable for a family or group trip?", answer: "Yes. Ajmer works well for families and groups, whether for pilgrimage, heritage or as a stop on a wider Rajasthan tour with Jaipur, Pushkar and Udaipur. We offer comfortable cars and tempo travellers with experienced drivers who know the Dargah area and the best times to visit to avoid the heaviest crowds." },
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
    slug: 'ajmer-travel-guide',
    headline: 'Ajmer Travel Guide 2026 — Ajmer Sharif Dargah, Forts, Lakes, Food & Tips',
    description: 'Complete Ajmer travel guide. Ajmer Sharif Dargah, Adhai Din Ka Jhonpra, Ana Sagar Lake, Taragarh Fort, Nareli Jain Temple, monthly weather, Mughlai food, dargah etiquette and transport. Updated for 2026.',
    image: '/images/sightseeing/Ajmer_Pushkar/Ajmer_shariff_hero_section.jpg',
    datePublished: '2026-01-15',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.faq-section .faq-answer-1']
  });

  const placeSchema = getCityPlaceSchema("ajmer", { idSlug: "ajmer-travel-guide" });

  const attractions = [
    { name: "Ajmer Sharif Dargah", desc: "The revered shrine of Sufi saint Khwaja Moinuddin Chishti (Gharib Nawaz), one of the holiest Sufi sites in South Asia. Visited by people of all faiths, it fills with the sound of qawwali and the fragrance of rose petals. Cover your head and remove footwear before entering.", entry: "Free", timing: "Approx. 5:00 AM - 9:00 PM", duration: "1.5-2 hours", icon: Landmark },
    { name: "Adhai Din Ka Jhonpra", desc: "A striking 12th-century mosque, famously said to have been built in two and a half days, with a beautifully carved arched screen. Its blend of Indo-Islamic architecture over earlier temple pillars makes it an architectural highlight, just uphill from the Dargah.", entry: "Free", timing: "Sunrise to sunset", duration: "45 min - 1 hr", icon: BookOpen },
    { name: "Ana Sagar Lake", desc: "A large artificial lake created in the 12th century by Anaji Chauhan, fringed by the marble Baradari pavilions added by Emperor Shah Jahan. A relaxed spot for a sunset stroll, boating and evening views of the surrounding hills.", entry: "Free (boating extra)", timing: "All day (best at sunset)", duration: "1-1.5 hours", icon: Sunrise, img: "/images/sightseeing/Ajmer_Pushkar/Ana_Sagar_Lake_Ajmer.jpg" },
    { name: "Taragarh Fort", desc: "One of India's oldest hill forts, perched high above Ajmer on Nagpahari. The steep drive up rewards you with massive ramparts, old gateways and sweeping panoramic views over the city and Ana Sagar Lake.", entry: "Free", timing: "9:00 AM - 5:00 PM", duration: "1.5-2 hours", icon: Shield },
    { name: "Nareli Jain Temple (Shri Gyanoday)", desc: "A stunning modern marble Digambar Jain temple complex on the outskirts of Ajmer, known for its intricate carvings, clean lines and serene hillside setting. A peaceful contrast to the bustle of the old city.", entry: "Free", timing: "7:00 AM - 5:00 PM", duration: "1 hour", icon: Compass },
    { name: "Soniji Ki Nasiyan (Jain Temple)", desc: "A 19th-century Digambar Jain temple famous for its opulent double-storey hall — the 'Golden City' or Swarna Nagari — filled with gilded wooden models depicting scenes from Jain cosmology. A dazzling, unusual sight.", entry: "Nominal ticket", timing: "8:30 AM - 5:30 PM", duration: "45 min - 1 hr", icon: Star },
    { name: "Akbari Fort & Museum", desc: "A Mughal-era fort built by Emperor Akbar, now a government museum housing sculptures, armour and Rajput and Mughal artefacts. Historically significant as the place where a British envoy met Emperor Jahangir.", entry: "Nominal ticket", timing: "9:30 AM - 5:00 PM (closed Fri)", duration: "45 min - 1 hr", icon: Landmark },
    { name: "Foy Sagar Lake", desc: "A picturesque artificial lake built in the late 19th century as a famine-relief project, set against the Aravalli hills. A quieter, scenic spot on the edge of town, lovely for photography around sunset.", entry: "Free", timing: "All day (best at sunset)", duration: "45 min", icon: Camera },
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
    { month: "Nov", temp: "13-29°C", weather: "Cool, clear", crowd: "Very High", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 100 },
    { month: "Dec", temp: "8-25°C", weather: "Cold, clear", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 90 },
  ];

  const foodSection = [
    { name: "Sohan Halwa", desc: "Ajmer's signature sweet — a dense, chewy halwa rich with ghee, nuts and cardamom. Sold by long-established shops near the Dargah and a favourite gift to carry home.", icon: "🍥" },
    { name: "Mughlai Kebabs & Biryani", desc: "The lanes around the Dargah are famous for aromatic biryani, seekh and shami kebabs and rich keema, reflecting Ajmer's deep Mughlai and Sufi culinary heritage.", icon: "🍢" },
    { name: "Kheer & Firni", desc: "Creamy, slow-cooked rice kheer and chilled firni served in earthen cups are popular near the shrine, especially in the evenings after prayers.", icon: "🍮" },
    { name: "Rajasthani Thali", desc: "For vegetarians, hearty Rajasthani thalis with dal baati churma, gatte ki sabzi and ker sangri are widely available across the city's eateries.", icon: "🍛" },
    { name: "Street Chaat & Kachori", desc: "Tangy aloo tikki, dahi bhalla, samosa and crisp pyaaz kachori make for great street snacking around the markets and lake.", icon: "🫓" },
    { name: "Tabarruk & Sweets", desc: "Blessed offerings (tabarruk) and traditional sweets are distributed and sold around the Dargah, part of the shrine's centuries-old food culture.", icon: "🍬" },
  ];

  const shoppingSection = [
    { name: "Chadars & Religious Items", desc: "Ornate chadars, rose petals, incense, caps and prayer accessories fill the bustling bazaar around the Dargah — the essentials for offering at the shrine.", price: "₹50 - ₹3,000" },
    { name: "Sohan Halwa & Sweets", desc: "Boxes of Ajmer's famous Sohan Halwa and other traditional mithai from long-standing shops make popular, well-travelling gifts.", price: "₹150 - ₹1,500" },
    { name: "Silver Jewellery & Gemstones", desc: "Silver ornaments, semi-precious stones and traditional Rajasthani jewellery are sold in the old-city markets, with nearby Kishangarh known for its marble crafts.", price: "₹200 - ₹15,000" },
    { name: "Attar (Perfume) & Textiles", desc: "Alcohol-free attar perfumes, especially rose and oud, along with block-print fabrics and embroidered cloth, are a fragrant, colourful buy in the Dargah bazaar.", price: "₹100 - ₹5,000" },
  ];

  const areaGuide = [
    { area: "Dargah Bazaar / Old City", desc: "The most convenient base for pilgrims, within walking distance of Ajmer Sharif and Adhai Din Ka Jhonpra. Busy and atmospheric, with budget hotels, guesthouses and dharamshalas. Book ahead during Urs.", budget: "₹800-4,000/night", icon: "🕌" },
    { area: "Ana Sagar Lake Side", desc: "Quieter, more scenic stays overlooking the lake and Baradari, a short drive from the Dargah. Ranges from mid-range hotels to comfortable lakeview properties.", budget: "₹1,500-6,000/night", icon: "🌊" },
    { area: "Jaipur Road / Vaishali Nagar", desc: "Newer hotels and business-class properties along the main highway, good for travellers arriving by car or combining Ajmer with Jaipur. A short drive from the centre.", budget: "₹1,500-5,000/night", icon: "🏨" },
    { area: "Pushkar Road / Outskirts", desc: "Resorts and quieter hotels towards Pushkar, ideal if you plan to visit both towns. Peaceful surroundings with easy access to the 15 km Ajmer-Pushkar route.", budget: "₹1,500-8,000/night", icon: "🐪" },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Rajasthan Specialists", desc: "Ajmer, Pushkar & beyond" },
    { icon: Landmark, title: "Dargah Visit Experts", desc: "Smooth pilgrim trips" },
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

  const heroImage = "/images/sightseeing/Ajmer_Pushkar/Ajmer_shariff_hero_section.jpg";
  const cityName = "Ajmer";
  const cityTagline = "Your complete guide to the Sufi heart of Rajasthan — the revered Ajmer Sharif Dargah, ancient forts, tranquil lakes and Mughlai flavours. Everything you need for a smooth, meaningful Ajmer trip.";
  const welcomeTitle = "Welcome to the City of Khwaja Gharib Nawaz";
  const welcomeText = "Ajmer, ringed by the Aravalli hills in central Rajasthan, is one of India's most important pilgrimage cities and a place where faiths meet. At its heart lies the <strong>Ajmer Sharif Dargah</strong>, the shrine of the 13th-century Sufi saint Khwaja Moinuddin Chishti, drawing devotees of every religion to its qawwalis and rose-scented courtyards. Around it, centuries of history unfold — the remarkable <strong>Adhai Din Ka Jhonpra</strong> mosque, the marble Baradari pavilions of <strong>Ana Sagar Lake</strong>, the hilltop Taragarh Fort, and the dazzling Jain temples of Soniji Ki Nasiyan and Nareli. Just 15 km away lies the holy town of Pushkar, making Ajmer a natural pairing for a spiritual day trip. Whether you come for pilgrimage, heritage or a stop on a Rajasthan tour, this guide will help you plan the perfect Ajmer visit.";
  const stats = [{ value: "Chishti", label: "Sufi Shrine" }, { value: "1100s", label: "Ana Sagar Built" }, { value: "15 km", label: "To Pushkar" }];
  const foodSubtitle = "Mughlai and Sufi flavours with famous local sweets";
  const bestTimeLegend = [{ color: "bg-emerald-500", label: "Best (Oct-Mar)" }, { color: "bg-amber-400", label: "Okay (Jul-Sep)" }, { color: "bg-red-400", label: "Avoid (May-Jun)" }];
  const transportOptions = [
    { mode: "Triveni Cabs (Private Taxi)", price: "₹2,500-4,000/day", desc: "AC car with driver — the most comfortable way to reach Ajmer and combine it with Pushkar, Jaipur or a wider Rajasthan trip. Delhi to Ajmer one-way available. Call 7668570551.", highlight: true },
    { mode: "Auto-rickshaw", price: "₹40-200/trip", desc: "Widely available for city travel and reaching the Dargah, Ana Sagar and the railway station. Agree on the fare before you start.", highlight: false },
    { mode: "Ajmer-Pushkar Bus", price: "₹15-40/trip", desc: "Frequent RSRTC and local buses cover the 15 km to Pushkar over the hills — cheap and regular throughout the day.", highlight: false },
    { mode: "E-Rickshaw & Cycle Rickshaw", price: "₹20-100/trip", desc: "Handy and economical for short hops through the old city and the crowded lanes around the Dargah bazaar.", highlight: false },
    { mode: "Ana Sagar Boating", price: "₹50-500/ride", desc: "Shared and private boats on Ana Sagar Lake offer a relaxed way to enjoy the waterfront and hills, especially near sunset.", highlight: false },
  ];
  const interlinks = [
    { href: "/ajmer", title: "Ajmer Cab Service", desc: "Book local & outstation taxi" },
    { href: "/one-way-cab/delhi-to-ajmer", title: "Delhi to Ajmer Cab", desc: "One-way private taxi" },
    { href: "/pushkar", title: "Pushkar Cab Service", desc: "Pair with Brahma Temple" },
    { href: "/tempo-traveller", title: "Tempo Traveller Hire", desc: "For groups & families" },
    { href: "/tour-package", title: "Tour Packages", desc: "Rajasthan multi-day trips" },
    { href: "/jaipur-travel-guide", title: "Jaipur Travel Guide", desc: "The Pink City" },
    { href: "/udaipur-travel-guide", title: "Udaipur Travel Guide", desc: "City of Lakes" },
    { href: "/sightseeing", title: "All Sightseeing Tours", desc: "Complete tour list" },
    { href: "/agra-travel-guide", title: "Agra Travel Guide", desc: "Taj Mahal & more" },
  ];
  const ctaTitle = "Planning a Trip to Ajmer?";
  const ctaDesc = "We are Rajasthan travel specialists. Call us for advice on Dargah timing, itineraries and comfortable transport combining Ajmer, Pushkar and Jaipur.";
  const whatsappMsg = "I want to book a cab for Ajmer trip";

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
              question="Planning a Ajmer trip?"
              answer="Ajmer is best visited from October to March, when temperatures stay a comfortable 10-27 degrees Celsius. One day covers the Ajmer Sharif Dargah, Adhai Din Ka Jhonpra and Ana Sagar Lake; a second day adds Taragarh Fort, the Nareli Jain Temple and a 15 km hop to Pushkar. Delhi is about 400 km away, roughly 7 to 8 hours by car via NH48 through Jaipur."
              facts={[
                { label: 'Best time', value: 'Oct to Mar' },
                { label: 'Ideal duration', value: '1 to 2 days' },
                { label: 'Top sight', value: 'Ajmer Sharif Dargah' },
                { label: 'Cab from Delhi', value: '400 km · ₹11/km' },
              ]}
            />
          </div>
        </section>

        {/* TABLE OF CONTENTS */}
        <section className="py-16 px-4">
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
        <section className="py-16 px-4">
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
        <section className="py-16 px-4 bg-white/80">
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
        <section className="py-16 px-4">
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
        <section className="py-16 px-4 bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 relative overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px]" />
          <div className="max-w-6xl mx-auto relative">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-amber-500/20 px-5 py-2 rounded-full mb-4 border border-amber-400/30">
                <Car className="w-4 h-4 text-amber-300" />
                <span className="text-amber-200 font-semibold text-xs tracking-[0.2em] uppercase">Book With Triveni Cabs</span>
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
        <section className="py-16 px-4 bg-gradient-to-br from-orange-50/80 to-amber-50/80">
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
        <section className="py-16 px-4">
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
        <section className="py-16 px-4 bg-white/80">
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
        <section className="py-16 px-4">
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
        <section className="py-16 px-4 bg-white/80">
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
        <section className="py-16 px-4">
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
        <section className="relative py-20 px-4 overflow-hidden">
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
