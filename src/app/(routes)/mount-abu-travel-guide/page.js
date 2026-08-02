import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, CheckCircle2, ArrowRight, Calendar, Sunrise, Camera, Coffee, ShoppingBag, Thermometer, Hotel, Landmark, Compass, BookOpen, Scroll } from '@/components/ui/icons';
import { getArticleSchema, getSpeakableSchema, withSpeakableFAQ, getCityPlaceSchema } from '@/lib/seo/speakable-helpers';
import QuickAnswer from '@/components/seo/QuickAnswer';

export const revalidate = 3600;

export const metadata = {
  title: 'Mount Abu Travel Guide 2026 | Attractions, Food & Tips',
  description: 'Complete Mount Abu travel guide 2026. Dilwara Temples, Nakki Lake, Guru Shikhar, Sunset Point, best time, food, shopping & transport. Call 7668570551.',
  keywords: 'mount abu travel guide, mount abu tourist guide, dilwara temples guide, mount abu sightseeing, mount abu tourism, things to do in mount abu, mount abu attractions',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/mount-abu-travel-guide' },
  openGraph: {
    title: 'Mount Abu Travel Guide 2026 | Rajasthan\'s Only Hill Station',
    description: 'Everything you need to know about visiting Mount Abu. Dilwara Jain Temples, Nakki Lake, Guru Shikhar, Sunset Point, food, transport, day trips.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/mount-abu-travel-guide',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/sightseeing/Mount_Abu/mount_abu_hero_section.jpg', width: 1200, height: 630, alt: 'Mount Abu Travel Guide 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mount Abu Travel Guide 2026 | Hill Station',
    description: 'Complete Mount Abu guide. Attractions, food, shopping, transport.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/sightseeing/Mount_Abu/mount_abu_hero_section.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function MountAbuTravelGuidePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Mount Abu Travel Guide", "item": "https://www.trivenicabs.in/mount-abu-travel-guide" },
    ],
  };

  const faqData = [
    { question: "How many days do I need in Mount Abu?", answer: "2 days are ideal to cover the main sights -- the Dilwara Jain Temples, Nakki Lake, Guru Shikhar, Sunset Point and Achalgarh Fort. A third day lets you enjoy the Mount Abu Wildlife Sanctuary, Trevor's Tank and a relaxed evening by the lake. Mount Abu also pairs well with a longer Rajasthan trip via Udaipur." },
    { question: "Why is Mount Abu famous?", answer: "Mount Abu is Rajasthan's only hill station, perched at about 1,220 metres in the Aravalli Range. It is celebrated for the exquisitely carved Dilwara Jain Temples, the sacred Nakki Lake, Guru Shikhar (the highest peak in Rajasthan) and its cool climate, which makes it a popular summer escape for travellers from Gujarat and Rajasthan." },
    { question: "What are the Dilwara Temples timings and rules?", answer: "The Dilwara Jain Temples are open to tourists generally from around 12 noon to 6 PM (mornings are reserved for Jain worshippers). Photography is not allowed inside, leather items must be left outside, and modest dress covering shoulders and knees is required. Entry is free, though a guide and optional donations are welcome." },
    { question: "What is the best time to visit Mount Abu?", answer: "October to March is the most pleasant, with cool, clear days ideal for sightseeing. April to June is the popular summer season when Mount Abu offers a cool escape (around 30-34 degrees) while the Rajasthan plains scorch at 45. The Summer Festival falls in this period. Monsoon (July-September) turns the hills lush and green. Winter nights can turn very cold, occasionally near freezing." },
    { question: "How do I reach Mount Abu?", answer: "The nearest railway station is Abu Road, about 28 km away, from where a scenic ghat road climbs to the town. By road: Udaipur is about 165 km (4 hours), Ahmedabad about 220 km, Jaipur about 490 km and Delhi about 720 km. The nearest airports are Udaipur (about 185 km) and Ahmedabad. Our cabs cover all these routes -- call 7668570551." },
    { question: "What food is Mount Abu known for?", answer: "Being close to Gujarat, Mount Abu serves a delicious mix of Rajasthani and Gujarati cuisine -- Dal Baati Churma, spicy Rajasthani thalis and wholesome Gujarati thalis with dhokla, kadhi and farsan. The lively street-food stalls around Nakki Lake are famous for chaat, corn, ice cream and Punjabi snacks." },
    { question: "Is Mount Abu good for a family or honeymoon trip?", answer: "Yes, both. Its cool climate, boating on Nakki Lake, scenic sunset points and easygoing pace make it a favourite for families and honeymooners alike. Honeymoon Point and the sunset viewpoints are especially popular with couples, while the temples and wildlife sanctuary appeal to all ages." },
    { question: "Can I combine Mount Abu with Udaipur?", answer: "Absolutely. Udaipur is only about 165 km away (4 hours by road), making the two a natural pairing. Many travellers do Udaipur's lakes and palaces, then head up to Mount Abu for cool hill air and the Dilwara Temples. We offer combined Udaipur-Mount Abu cab packages -- call 7668570551 to plan." },
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
    slug: 'mount-abu-travel-guide',
    headline: 'Mount Abu Travel Guide 2026 — Dilwara Temples, Nakki Lake, Food & Tips',
    description: 'Complete Mount Abu travel guide. Dilwara Jain Temples, Nakki Lake, Guru Shikhar, Sunset Point, Achalgarh Fort, monthly weather, food, shopping and transport. Updated for 2026.',
    image: '/images/sightseeing/Mount_Abu/mount_abu_hero_section.jpg',
    datePublished: '2026-01-15',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.faq-section .faq-answer-1']
  });

  const placeSchema = getCityPlaceSchema("mount-abu", { idSlug: "mount-abu-travel-guide" });

  const attractions = [
    { name: "Dilwara Jain Temples", desc: "Five white-marble Jain temples (11th-13th century) renowned worldwide for their impossibly intricate carving -- ceilings, pillars and lotus domes cut like lace. The Vimal Vasahi and Luna Vasahi shrines are the masterpieces. A must-see marvel.", entry: "Free", timing: "12:00 PM - 6:00 PM (tourists)", duration: "1-1.5 hours", icon: Landmark, img: "/images/sightseeing/Mount_Abu/Dilwara_Temple_Interior.jpg" },
    { name: "Nakki Lake", desc: "The sacred heart of Mount Abu, a scenic lake ringed by hills and legend. Enjoy pedal-boat and shikara rides, lakeside stalls and the famous Toad Rock on its shore. Beautiful at sunset.", entry: "Free (boating charges apply)", timing: "All day", duration: "1-2 hours", icon: Sunrise, img: "/images/sightseeing/Mount_Abu/Nakki_Lake.jpg" },
    { name: "Guru Shikhar", desc: "The highest peak in the Aravalli Range and all of Rajasthan (about 1,722 m), crowned by the Guru Dattatreya temple. Sweeping panoramic views over the hills. About 15 km from town.", entry: "Free", timing: "7:00 AM - 6:00 PM", duration: "1-1.5 hours", icon: Compass, img: "/images/sightseeing/Mount_Abu/Guru_Shikhar.jpg" },
    { name: "Sunset Point", desc: "Mount Abu's classic viewpoint, where crowds gather each evening to watch the sun sink behind the Aravalli hills. A short walk or pony ride from the road, with snack stalls along the way.", entry: "Free", timing: "Best 5:30 PM - 7:00 PM", duration: "1 hour", icon: Camera, img: "/images/sightseeing/Mount_Abu/Sunset_Point_Mount_Abu.jpg" },
    { name: "Achalgarh Fort & Achaleshwar Temple", desc: "A hilltop fort built by Rana Kumbha, with the ancient Achaleshwar Mahadev temple below, said to enshrine the toe of Lord Shiva, plus the serene Mandakini Kund. About 11 km from town.", entry: "Free", timing: "5:00 AM - 7:00 PM", duration: "1-1.5 hours", icon: Shield, img: "/images/sightseeing/Mount_Abu/Achalgarh_Fort.jpg" },
    { name: "Mount Abu Wildlife Sanctuary & Trevor's Tank", desc: "A protected forest sanctuary of the Aravallis, home to sloth bears, leopards and rich birdlife. Trevor's Tank, a man-made crocodile pond, is a peaceful spot for birdwatching and short nature walks.", entry: "Sanctuary charges apply", timing: "9:00 AM - 5:30 PM", duration: "2-3 hours", icon: BookOpen },
    { name: "Toad Rock", desc: "A giant rock naturally shaped like a toad crouched over Nakki Lake. A short climb up rewards you with fine views of the lake and town -- a favourite photo stop.", entry: "Free", timing: "All day", duration: "30-45 min", icon: Star },
    { name: "Adhar Devi Temple (Arbuda Devi)", desc: "A revered cave temple reached by climbing about 365 steps, carved into a rocky cliff. The final approach is through a narrow cave opening, and the climb offers lovely valley views.", entry: "Free", timing: "6:00 AM - 7:00 PM", duration: "1-1.5 hours", icon: Landmark },
  ];

  const monthlyGuide = [
    { month: "Jan", temp: "5-22°C", weather: "Cold nights", crowd: "Med", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 78 },
    { month: "Feb", temp: "8-25°C", weather: "Pleasant", crowd: "Med", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 88 },
    { month: "Mar", temp: "13-30°C", weather: "Warming up", crowd: "High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 82 },
    { month: "Apr", temp: "18-33°C", weather: "Warm days", crowd: "High", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 68 },
    { month: "May", temp: "21-36°C", weather: "Summer peak", crowd: "Very High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 80 },
    { month: "Jun", temp: "22-34°C", weather: "Pre-monsoon", crowd: "High", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 65 },
    { month: "Jul", temp: "20-28°C", weather: "Monsoon", crowd: "Med", verdict: "Scenic", color: "bg-amber-100 text-amber-800", bar: 45 },
    { month: "Aug", temp: "19-27°C", weather: "Lush, wet", crowd: "Med", verdict: "Scenic", color: "bg-amber-100 text-amber-800", bar: 45 },
    { month: "Sep", temp: "19-29°C", weather: "Rain fading", crowd: "Med", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 62 },
    { month: "Oct", temp: "16-31°C", weather: "Clear, mild", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 94 },
    { month: "Nov", temp: "11-28°C", weather: "Cool, clear", crowd: "High", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 100 },
    { month: "Dec", temp: "6-24°C", weather: "Crisp, cold", crowd: "High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 90 },
  ];

  const foodSection = [
    { name: "Rajasthani Thali", desc: "A generous platter of dal, baati, churma, gatte ki sabzi, ker sangri and more -- the full flavour of Rajasthan served at hill-town restaurants around the market.", icon: "🍛" },
    { name: "Dal Baati Churma", desc: "The iconic Rajasthani trio -- baked wheat balls with dal and sweet churma. A hearty, satisfying meal you will find on nearly every menu in Mount Abu.", icon: "🍲" },
    { name: "Gujarati Thali", desc: "Thanks to a steady stream of Gujarati visitors, Mount Abu serves excellent Gujarati thalis with dhokla, kadhi, undhiyu, farsan and the signature sweet-savoury balance.", icon: "🥗" },
    { name: "Nakki Lake Street Food", desc: "The lakeside is lined with stalls selling spicy chaat, grilled corn (bhutta), pav bhaji, sandwiches and pakoras -- perfect for an evening snack by the water.", icon: "🌽" },
    { name: "Ice Cream & Kulfi", desc: "A Mount Abu evening tradition -- rich kulfi and creamy ice cream from the popular parlours near Nakki Lake, a treat after a day of sightseeing.", icon: "🍨" },
    { name: "Rabri & Local Sweets", desc: "Thick, slow-cooked rabri and other traditional milk sweets are a Mount Abu favourite, sold at sweet shops around the main bazaar.", icon: "🍮" },
  ];

  const shoppingSection = [
    { name: "Marble & Handicrafts", desc: "Inspired by the Dilwara marble legacy, shops around the market sell marble idols, decorative pieces and stone handicrafts, alongside Rajasthani wooden and brass curios.", price: "₹200 - ₹10,000" },
    { name: "Silver Jewellery & Trinkets", desc: "Nakki Lake Road is lined with stalls selling silver oxidised jewellery, beads, junk jewellery and souvenirs -- great for gifts and bargaining.", price: "₹100 - ₹5,000" },
    { name: "Rajasthani Textiles & Khadi", desc: "Colourful bandhani dupattas, block-printed fabrics, khadi and traditional Rajasthani garments are widely available in the town's markets.", price: "₹200 - ₹6,000" },
    { name: "Sandalwood & Aromatics", desc: "Fragrant sandalwood items, incense, herbal products and Aravalli honey make popular takeaways from the local shops near the lake.", price: "₹100 - ₹3,000" },
  ];

  const areaGuide = [
    { area: "Nakki Lake Area", desc: "The scenic, central heart of Mount Abu, walking distance to the lake, markets and street food. A wide range of budget to mid-range hotels. Lively and convenient.", budget: "₹1,500-6,000/night", icon: "🏨" },
    { area: "Main Market / Polo Ground", desc: "Close to restaurants, bus stand and shops, this central belt has plenty of value hotels and easy access to sightseeing taxis and local transport.", budget: "₹1,200-4,000/night", icon: "🏪" },
    { area: "Sunset Road & Hillside Resorts", desc: "Quieter resorts and premium stays set among the hills near the sunset points, offering valley views and a calmer, greener setting away from the bustle.", budget: "₹3,000-12,000/night", icon: "🏔️" },
    { area: "Near Dilwara / Achalgarh Road", desc: "Peaceful stays on the outskirts towards the Dilwara Temples and Achalgarh, good for travellers wanting a serene base close to the main heritage sites.", budget: "₹1,500-5,000/night", icon: "🛕" },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Rajasthan Specialists", desc: "Aravalli hill routes covered" },
    { icon: Landmark, title: "Only Hill Station", desc: "Rajasthan's one cool retreat" },
    { icon: Users, title: "8000+ Travellers Served", desc: "Udaipur & Abu experts" },
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

  const heroImage = "/images/sightseeing/Mount_Abu/mount_abu_hero_section.jpg";
  const cityName = "Mount Abu";
  const cityTagline = "Your complete guide to Rajasthan's only hill station -- marble-carved Dilwara Temples, the sacred Nakki Lake, sweeping sunset points and cool Aravalli air. Everything you need for a memorable Mount Abu escape.";
  const welcomeTitle = "Welcome to Rajasthan's Hill Station";
  const welcomeText = "Mount Abu, perched at about 1,220 metres in the Aravalli Range, is the only hill station in Rajasthan and a cherished retreat from the desert heat. Its crown jewel is the group of <strong>Dilwara Jain Temples</strong>, whose marble carving is among the finest in the world. At the town's centre lies the sacred <strong>Nakki Lake</strong>, alive with boats and lakeside stalls, while <strong>Guru Shikhar</strong>, the highest peak in Rajasthan, and the famous <strong>Sunset Point</strong> reward you with sweeping Aravalli views. History waits at the hilltop <strong>Achalgarh Fort</strong>, and nature at the <strong>Mount Abu Wildlife Sanctuary</strong>. Long popular with travellers from Gujarat and Rajasthan, especially in summer when the plains scorch, Mount Abu blends pilgrimage, romance and cool mountain calm. Just 165 km from Udaipur, it pairs beautifully with a wider Rajasthan trip. Whether you are here for the temples, the lake or the mountain breeze, this guide will help you plan the perfect Mount Abu trip.";
  const stats = [{ value: "1220m", label: "Altitude" }, { value: "Dilwara", label: "Marble Temples" }, { value: "1722m", label: "Guru Shikhar Peak" }];
  const foodSubtitle = "A cool-climate mix of Rajasthani and Gujarati flavours";
  const bestTimeLegend = [{ color: "bg-emerald-500", label: "Best (Oct-Mar, May)" }, { color: "bg-amber-400", label: "Monsoon (Jul-Aug)" }, { color: "bg-blue-400", label: "Warm (Apr, Jun)" }];
  const transportOptions = [
    { mode: "Triveni Cabs (Private Taxi)", price: "₹2,000-3,500/day", desc: "AC car with an experienced hill driver -- the easiest way to reach Mount Abu's spread-out sights up the Abu Road ghat. Udaipur, Jaipur and Delhi to Mount Abu routes covered. Call 7668570551.", highlight: true },
    { mode: "Local Taxi / Sightseeing Cab", price: "₹1,200-2,500/day", desc: "Shared and private taxis run set sightseeing loops covering Dilwara, Guru Shikhar, Achalgarh and the sunset points. Convenient for a full day out.", highlight: false },
    { mode: "Auto-rickshaw", price: "₹50-200/trip", desc: "Handy for short hops within the town and around Nakki Lake. Fix the fare before you ride.", highlight: false },
    { mode: "Pony & Baba Rides", price: "₹100-300/ride", desc: "Pony rides and hand-carts operate at Sunset Point and some viewpoints for those who prefer not to walk the final stretch.", highlight: false },
    { mode: "RSRTC Bus (via Abu Road)", price: "₹40-150/trip", desc: "State buses connect Abu Road railway station and nearby towns to Mount Abu via the scenic ghat road. Affordable but slower.", highlight: false },
  ];
  const interlinks = [
    { href: "/mount-abu", title: "Mount Abu Cab Service", desc: "Book local & outstation" },
    { href: "/one-way-cab/delhi-to-mount-abu", title: "Delhi to Mount Abu Cab", desc: "One-way private taxi" },
    { href: "/udaipur-travel-guide", title: "Udaipur Travel Guide", desc: "City of Lakes" },
    { href: "/jaipur-travel-guide", title: "Jaipur Travel Guide", desc: "Pink City" },
    { href: "/jodhpur-travel-guide", title: "Jodhpur Travel Guide", desc: "Blue City" },
    { href: "/jaisalmer-travel-guide", title: "Jaisalmer Travel Guide", desc: "Golden City" },
    { href: "/tempo-traveller", title: "Tempo Traveller Hire", desc: "For groups & families" },
    { href: "/sightseeing", title: "All Sightseeing Tours", desc: "Complete tour list" },
    { href: "/agra-travel-guide", title: "Agra Travel Guide", desc: "Taj Mahal & more" },
  ];
  const ctaTitle = "Need Help Planning Your Mount Abu Trip?";
  const ctaDesc = "We are Rajasthan travel specialists. Call us for personalized advice on itinerary, timing, and transport for Mount Abu and beyond.";
  const whatsappMsg = "I want to book a cab for Mount Abu trip";

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
              question="Planning a Mount Abu trip?"
              answer="Mount Abu, the only hill station in Rajasthan, is most pleasant from October to March, and April to June is a popular summer escape at around 30-34 degrees while the plains scorch at 45. Two days covers the Dilwara Jain Temples, Nakki Lake, Guru Shikhar, Sunset Point and Achalgarh Fort. Delhi is about 720 km away, and Udaipur is just 165 km (4 hours), so most travellers pair the two."
              facts={[
                { label: 'Best time', value: 'Oct to Mar' },
                { label: 'Ideal duration', value: '2 days' },
                { label: 'Top sight', value: 'Dilwara Jain Temples' },
                { label: 'Cab from Delhi', value: '720 km · ₹11/km' },
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
