import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, Car, ArrowRight, Sunrise, Camera, Coffee, ShoppingBag, Thermometer, Hotel, Landmark, Compass, BookOpen, Scroll, Waves, TreePine, Mountain } from '@/components/ui/icons';

export const metadata = { title: 'Rishikesh Travel Guide 2026 | Yoga Capital, Rafting & Ganga Adventures', description: 'Complete Rishikesh travel guide 2026. Yoga Capital of the World, white water rafting, Laxman Jhula, Ram Jhula, Beatles Ashram, Triveni Ghat, Neelkanth Temple. Book cab from Delhi 230 km. Call 7668570551.', keywords: 'rishikesh travel guide, yoga capital of the world, rishikesh rafting, laxman jhula, beatles ashram, triveni ghat rishikesh, neelkanth mahadev temple, delhi to rishikesh cab, rishikesh tourism 2026', authors: [{ name: 'Triveni Cabs' }], creator: 'Triveni Cabs', publisher: 'Triveni Cabs', metadataBase: new URL('https://www.trivenicabs.in'), alternates: { canonical: '/rishikesh-travel-guide' }, openGraph: { title: 'Rishikesh Travel Guide 2026 | Yoga Capital, Rafting & Ganga Adventures', description: 'Everything about visiting Rishikesh. Yoga capital, rafting, Beatles Ashram, cafes, temples, transport.', type: 'website', locale: 'en_IN', url: 'https://www.trivenicabs.in/rishikesh-travel-guide', siteName: 'Triveni Cabs', images: [{ url: '/images/rishikesh-hero.jpg', width: 1200, height: 630, alt: 'Rishikesh Travel Guide 2026' }] }, twitter: { card: 'summary_large_image', title: 'Rishikesh Travel Guide 2026 | Yoga Capital & Ganga Adventures', description: 'Complete Rishikesh guide. Yoga, rafting, ashrams, cafes, transport.', creator: '@trivenicabs', site: '@trivenicabs', images: ['/images/rishikesh-hero.jpg'] }, robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } } };

export default function RishikeshTravelGuidePage() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{ "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" }, { "@type": "ListItem", "position": 2, "name": "Rishikesh Travel Guide", "item": "https://www.trivenicabs.in/rishikesh-travel-guide" }] };
  const faqData = [
    { question: "How many days do I need in Rishikesh?", answer: "3-4 days is ideal for a complete Rishikesh experience. Day 1: Laxman Jhula, Ram Jhula, cafe hopping in Tapovan, evening Ganga Aarti at Triveni Ghat. Day 2: White water rafting at Shivpuri (16 km stretch with Grade 3-4 rapids). Day 3: Beatles Ashram, Neer Garh Waterfall, yoga session at an ashram. Day 4: Neelkanth Mahadev Temple (32 km scenic drive). Add a day for Haridwar which is just 25 km away." },
    { question: "What is the best time to visit Rishikesh?", answer: "October to March is best for sightseeing, yoga, and pleasant weather (10-25 degrees). September to November is peak rafting season with thrilling Grade 3-4 rapids. The International Yoga Festival in March draws yogis worldwide. April-June is hot but rafting operates. July-September monsoon closes rafting and can cause landslides -- avoid unless you want to see the Ganga in full fury." },
    { question: "How do I reach Rishikesh from Delhi?", answer: "By car: 230 km, 5-6 hours via NH58 through Meerut and Haridwar. Our cab costs &#8377;4,000-5,500 one way. By train: Take Shatabdi/Jan Shatabdi to Haridwar (4.5 hrs), then 25 km cab to Rishikesh. By bus: Volvo AC buses from ISBT Kashmere Gate (6-7 hrs, &#8377;500-900). Jolly Grant Airport in Dehradun is 35 km away with daily flights." },
    { question: "Is Rishikesh safe for solo female travellers?", answer: "Very safe. Rishikesh is one of India&apos;s safest towns, especially around Tapovan and Laxman Jhula. The international yoga and backpacker community creates a welcoming, respectful environment. Ashram areas are secure. Cafes stay open till late. Standard precautions for night travel and remote treks apply. Many solo women travellers stay for weeks doing yoga courses." },
    { question: "What is the cost of river rafting in Rishikesh?", answer: "Rafting costs &#8377;600-2,500 per person depending on the stretch. Brahmapuri (9 km, Grade 1-2) is beginner-friendly at &#8377;600-800. Shivpuri (16 km, Grade 3-4) costs &#8377;1,000-1,500 and is the most popular. Marine Drive to Rishikesh (26 km, Grade 3-4) costs &#8377;1,500-2,500. Kaudiyala (36 km, Grade 4) is for experts. Season runs September to June." },
    { question: "Can I do bungee jumping in Rishikesh?", answer: "Yes! Jumpin Heights offers India&apos;s highest bungee jump at 83 metres from a cantilever platform at Mohan Chatti, 15 km from Rishikesh. Cost is approximately &#8377;3,550 per person. They also offer a giant swing (83m) and flying fox (1 km). Advance booking is recommended, especially on weekends and holidays." },
    { question: "Is Rishikesh a vegetarian city?", answer: "Yes, Rishikesh is strictly vegetarian and alcohol-free by law as it is a holy city. No meat, fish, eggs, or alcohol is sold within city limits. However, the cafe culture is world-class -- you will find incredible Italian, Israeli, Korean, and organic vegetarian cuisine. German Bakery, Little Buddha Cafe, and Beatles Cafe serve outstanding international food." },
    { question: "Can I combine Rishikesh with Haridwar?", answer: "Absolutely! Haridwar is just 25 km (45 minutes) from Rishikesh. Most visitors combine both cities. See Haridwar&apos;s spectacular Ganga Aarti at Har Ki Pauri in the evening and explore Rishikesh&apos;s ashrams, cafes, and adventure sports during the day. We offer combined Haridwar-Rishikesh packages from Delhi starting at &#8377;8,000." },
  ];
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqData.map(item => ({ "@type": "Question", "name": item.question, "acceptedAnswer": { "@type": "Answer", "text": item.answer } })) };
  const attractions = [
    { name: "Laxman Jhula", desc: "Iconic 137-metre iron suspension bridge over the Ganga, built in 1930 at the spot where Lord Laxman is believed to have crossed the river on a jute rope. The bridge offers spectacular views of the turquoise Ganga flanked by temples and ashrams on both banks. Currently closed for pedestrian crossing due to structural concerns, but the viewpoint and surrounding temples remain must-visit.", entry: "Free", timing: "Open 24 hours", duration: "30 min - 1 hour", icon: Landmark },
    { name: "Ram Jhula", desc: "The second famous suspension bridge of Rishikesh, built in 1986, connecting Swargashram on one side to the Sivananda Ashram area on the other. Open to pedestrians and two-wheelers, this bridge offers panoramic views of the temples, ashrams, and the sacred Ganga flowing below.", entry: "Free", timing: "Open 24 hours", duration: "30 min - 1 hour", icon: Landmark },
    { name: "Triveni Ghat", desc: "The most sacred bathing ghat in Rishikesh, believed to be the confluence of three rivers -- Ganga, Yamuna, and Saraswati. The mesmerizing evening Ganga Aarti here features priests offering fire to the river with chanting, bells, and thousands of floating diyas. Less crowded than Haridwar&apos;s Har Ki Pauri but equally moving.", entry: "Free", timing: "Aarti at 6-7 PM", duration: "1-1.5 hours", icon: Waves },
    { name: "Beatles Ashram (Chaurasi Kutia)", desc: "The abandoned ashram of Maharishi Mahesh Yogi where The Beatles stayed in 1968 and composed most of the White Album. Now a stunning open-air gallery with vibrant Beatles-themed street art, meditation caves, and architecture being slowly reclaimed by the jungle. A pilgrimage site for music lovers and spiritual seekers alike.", entry: "&#8377;150 Indian / &#8377;600 Foreign", timing: "9:00 AM - 4:00 PM", duration: "1.5-2 hours", icon: Camera },
    { name: "Neelkanth Mahadev Temple", desc: "Ancient Hindu temple dedicated to Lord Shiva, perched at 1,330 metres in the forested hills above Rishikesh. The name &apos;Neelkanth&apos; (Blue Throat) refers to Shiva drinking the cosmic poison that turned his throat blue. The 32 km drive through dense forest and the Rajaji National Park buffer zone is spectacularly scenic.", entry: "Free", timing: "6:00 AM - 7:00 PM", duration: "3-4 hours (with travel)", icon: Landmark },
    { name: "Rajaji National Park", desc: "One of North India&apos;s finest wildlife sanctuaries spread across 820 sq km of the Shivalik foothills. Home to Asian elephants, Bengal tigers, leopards, king cobras, and over 315 bird species. Jeep safaris available from Chilla and Motichur gates near Rishikesh. Best visited November to June.", entry: "&#8377;150-750 (varies by vehicle)", timing: "6:30 AM - 9:30 AM, 3 PM - 6 PM", duration: "3-4 hours", icon: TreePine },
    { name: "Shivpuri (White Water Rafting)", desc: "The undisputed adventure capital of Rishikesh, located 16 km upstream. The Shivpuri-to-Rishikesh stretch features Grade 3-4 rapids with names like Roller Coaster, Golf Course, Club House, and Double Trouble. This is the most popular rafting stretch with beach camping options along the riverbank.", entry: "&#8377;1,000-2,500/person", timing: "9:00 AM - 4:00 PM (Sep-Jun)", duration: "3-4 hours", icon: Waves },
    { name: "Neer Garh Waterfall", desc: "A beautiful two-tier waterfall hidden in lush forest, just 4 km from Laxman Jhula. A short but scenic trek through wooded paths leads to natural rock pools perfect for a refreshing dip. The waterfall is at its most spectacular during and just after the monsoon season.", entry: "&#8377;30", timing: "8:00 AM - 5:00 PM", duration: "1.5-2 hours", icon: Mountain },
  ];
  const monthlyGuide = [
    { month: "Jan", temp: "5-18&#xB0;C", weather: "Cold, clear", crowd: "Low-Med", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 60 },
    { month: "Feb", temp: "8-22&#xB0;C", weather: "Cool, pleasant", crowd: "Moderate", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 78 },
    { month: "Mar", temp: "12-28&#xB0;C", weather: "Warm, festival", crowd: "Very High", verdict: "Best", color: "bg-emerald-200 text-emerald-900", bar: 100 },
    { month: "Apr", temp: "16-34&#xB0;C", weather: "Hot", crowd: "High", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 65 },
    { month: "May", temp: "20-38&#xB0;C", weather: "Very hot", crowd: "Moderate", verdict: "OK", color: "bg-amber-100 text-amber-800", bar: 35 },
    { month: "Jun", temp: "22-36&#xB0;C", weather: "Hot, pre-rain", crowd: "Low", verdict: "Not ideal", color: "bg-red-100 text-red-800", bar: 20 },
    { month: "Jul", temp: "22-32&#xB0;C", weather: "Heavy monsoon", crowd: "Very Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 10 },
    { month: "Aug", temp: "22-31&#xB0;C", weather: "Peak rain", crowd: "Very Low", verdict: "Avoid", color: "bg-red-100 text-red-800", bar: 8 },
    { month: "Sep", temp: "20-30&#xB0;C", weather: "Rain easing", crowd: "Moderate", verdict: "Good", color: "bg-blue-100 text-blue-800", bar: 55 },
    { month: "Oct", temp: "14-28&#xB0;C", weather: "Clear, perfect", crowd: "Very High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 95 },
    { month: "Nov", temp: "8-24&#xB0;C", weather: "Cool, crisp", crowd: "Very High", verdict: "Excellent", color: "bg-emerald-100 text-emerald-800", bar: 92 },
    { month: "Dec", temp: "5-20&#xB0;C", weather: "Cold, clear", crowd: "High", verdict: "Very Good", color: "bg-emerald-100 text-emerald-800", bar: 75 },
  ];
  const foodSection = [
    { name: "German Bakery & Cafes", desc: "Rishikesh&apos;s legendary cafe culture rivals anywhere in India. The German Bakery near Laxman Jhula serves wood-fired pizzas, fresh pastries, and artisan coffee. Little Buddha Cafe offers panoramic Ganga views with international menus. These cafes are the social hub of the backpacker community.", icon: "&#9749;" },
    { name: "Beatles Cafe", desc: "A rooftop institution overlooking the Ganga with Beatles memorabilia adorning every wall. Famous for Israeli shakshuka, wood-fired pasta, fluffy momos, and fresh fruit juices. On some evenings, live acoustic music fills the air as the sun sets over the river.", icon: "&#127928;" },
    { name: "Organic & Ayurvedic Food", desc: "Rishikesh leads India&apos;s organic food movement. Pure Souls Cafe and Ramana&apos;s Garden serve organic Buddha bowls, cold-pressed juices, raw food platters, and Ayurvedic meals designed for yoga practitioners. Many ashrams serve sattvic (pure) meals.", icon: "&#129367;" },
    { name: "Chotiwala Restaurant", desc: "Iconic since 1958, instantly recognized by the costumed man sitting at the entrance. Famous for generous thalis, crispy aloo tikki, and traditional North Indian vegetarian food. Two rival Chotiwala outlets face each other across the Ram Jhula lane!", icon: "&#127835;" },
    { name: "Korean & Israeli Cuisine", desc: "Thanks to the international yoga community, Rishikesh has excellent Korean bibimbap, Israeli falafel and hummus, and Japanese ramen -- all vegetarian. Ganga View Cafe and Oasis Restaurant are popular choices with travellers from around the world.", icon: "&#127836;" },
    { name: "Ashram Prasad & Street Food", desc: "Simple yet deeply satisfying meals at Parmarth Niketan and Sivananda Ashram, served as prasad. Street food near Ram Jhula market includes aloo puri, samosas, kachori, cutting chai, and fresh sugarcane juice at unbeatable prices.", icon: "&#128591;" },
  ];
  const shoppingSection = [
    { name: "Yoga Accessories & Mats", desc: "Premium yoga mats, meditation cushions, zafu seats, singing bowls, and high-quality yoga wear at a fraction of international prices. Shops near Laxman Jhula and Tapovan cater to yoga practitioners who travel from every corner of the globe.", price: "&#8377;200 - &#8377;5,000" },
    { name: "Rudraksha Beads & Malas", desc: "Authentic rudraksha beads (sacred seeds associated with Lord Shiva) available in various mukhis (faces). Prayer malas, bracelets, and loose beads for meditation. Buy from established shops near ashrams to avoid fakes -- ask for certification.", price: "&#8377;100 - &#8377;25,000" },
    { name: "Spiritual Items & Books", desc: "Incense sticks, healing crystals, Tibetan prayer flags, brass singing bowls, yoga philosophy books, and Vedic literature. The Swargashram market has the best selection of authentic spiritual merchandise in all of Uttarakhand.", price: "&#8377;50 - &#8377;3,000" },
    { name: "Hippie Clothing & Handicrafts", desc: "Tie-dye clothes, cotton harem pants, hemp bags, handmade bead jewellery, dreamcatchers, and bohemian accessories. The colourful market lanes around Laxman Jhula are a treasure trove for backpacker and hippie fashion.", price: "&#8377;150 - &#8377;2,000" },
  ];
  const areaGuide = [
    { area: "Tapovan", desc: "The yoga hub of Rishikesh. A peaceful hillside area packed with yoga schools, organic cafes, wellness centres, and Ganga-view guesthouses. Best for yoga retreats, long stays, and those seeking a quieter, more spiritual atmosphere. Slightly uphill from the river.", budget: "&#8377;500-4,000/night" },
    { area: "Laxman Jhula Area", desc: "The most touristy and vibrant zone. Closest to the famous bridge, rooftop cafes, souvenir shops, and riverside temples. Perfect for backpackers and short stays. Can get noisy and crowded during peak tourist season (Oct-Mar).", budget: "&#8377;400-3,000/night" },
    { area: "Ram Jhula / Swargashram", desc: "The spiritual heart with major ashrams like Parmarth Niketan and Sivananda. Close to the evening Ganga Aarti at Triveni Ghat. A mix of budget dharamshalas and mid-range hotels. More traditional and devotional in character.", budget: "&#8377;600-5,000/night" },
    { area: "Rishikesh Town (Muni Ki Reti)", desc: "The main town area with better road connectivity, ATMs, medical facilities, and modern amenities. Some luxury riverside resorts with swimming pools. Good base for rafting day-trips and the Neelkanth Temple drive.", budget: "&#8377;1,000-8,000/night" },
  ];
  const trustFeatures = [{ icon: MapPin, title: "Uttarakhand Experts", desc: "Devbhoomi specialists" }, { icon: Waves, title: "Adventure Capital", desc: "Rafting & yoga hub" }, { icon: Users, title: "4000+ Trips Done", desc: "Delhi-Rishikesh route" }, { icon: Star, title: "4.9 Google Rating", desc: "Verified reviews" }];
  const chapters = [{ title: "Attractions", icon: Landmark, count: "8 Sites" }, { title: "Best Time", icon: Thermometer, count: "12 Months" }, { title: "Food Guide", icon: Coffee, count: "6 Specialties" }, { title: "Shopping", icon: ShoppingBag, count: "4 Categories" }, { title: "Stay Guide", icon: Hotel, count: "4 Areas" }, { title: "Transport", icon: Car, count: "4 Options" }];

  const cityName = "Rishikesh";
  const cityTagline = "The Yoga Capital of the World -- where the sacred Ganga meets Himalayan foothills, Beatles history lives on, and white-water rapids await the adventurous.";
  const welcomeTitle = "Welcome to the Yoga Capital of the World";
  const welcomeText = "Rishikesh, nestled in the foothills of the Himalayas at the point where the sacred Ganga descends from the mountains into the plains, is a place where spirituality and adventure exist in perfect harmony. Known globally as the Yoga Capital of the World, this holy city has attracted seekers, sadhus, and sages for millennia. In 1968, it gained worldwide fame when <strong>The Beatles visited Maharishi Mahesh Yogi&apos;s ashram</strong>, putting Rishikesh on the global map as a destination for transcendental meditation and inner exploration. Today, the city is a unique tapestry of ancient ashrams and trendy rooftop cafes, sacred temples and adrenaline-pumping rapids, meditation caves and bungee platforms. The turquoise-green waters of the Ganga flow beneath iconic suspension bridges, past centuries-old temples, and alongside yoga shalas where practitioners from every corner of the globe gather to deepen their practice. Rishikesh is also the gateway to the Char Dham pilgrimage and serves as a base camp for treks into the Garhwal Himalayas. Just 25 km from Haridwar, the two cities together form one of India&apos;s most essential spiritual corridors. Whether you come for white-water rafting, a yoga teacher training course, a spiritual awakening, or simply to sit by the Ganga and watch the ethereal evening aarti, Rishikesh leaves an indelible mark on every visitor&apos;s soul.";
  const stats = [{ value: "230 km", label: "From Delhi" }, { value: "372m", label: "Altitude" }, { value: "1968", label: "Beatles Visited" }];
  const foodSubtitle = "100% vegetarian city with world-class international cafe culture";
  const bestTimeLegend = [{ color: "bg-emerald-500", label: "Best (Oct-Mar)" }, { color: "bg-amber-400", label: "Okay (Apr-May, Sep)" }, { color: "bg-red-400", label: "Avoid (Jun-Aug monsoon)" }];
  const transportOptions = [
    { mode: "Triveni Cabs (Private Taxi)", price: "&#8377;1,500-2,500/day", desc: "AC car with experienced driver. Essential for Neelkanth Temple (32 km winding mountain road) and Rajaji Park safaris. Delhi-Rishikesh one way from &#8377;4,000. Haridwar combo available. Call 7668570551.", highlight: true },
    { mode: "Auto-rickshaw / Shared Jeep", price: "&#8377;20-200/trip", desc: "Available in main town and near Ram Jhula. Shared jeeps run regular routes to Laxman Jhula and Tapovan. Always negotiate the fare before boarding.", highlight: false },
    { mode: "Scooty / Bike Rental", price: "&#8377;300-800/day", desc: "Popular way to explore at your own pace. Available near Ram Jhula and Tapovan. Carry a valid driving licence. Roads can be steep and narrow -- ride with caution.", highlight: false },
    { mode: "Walking & Cycling", price: "Free / &#8377;100-200/day", desc: "The best way to explore the Laxman Jhula to Ram Jhula stretch and ghat areas. Bicycle rentals are available. The riverside walking path is beautiful for morning and evening strolls.", highlight: false },
  ];
  const interlinks = [
    { href: "/haridwar-travel-guide", title: "Haridwar Travel Guide", desc: "Gateway to Gods" },
    { href: "/kashmir-travel-guide", title: "Kashmir Travel Guide", desc: "Paradise on Earth" },
    { href: "/manali-travel-guide", title: "Manali Travel Guide", desc: "Mountain adventure" },
    { href: "/shimla-travel-guide", title: "Shimla Travel Guide", desc: "Colonial hill station" },
    { href: "/mussoorie-travel-guide", title: "Mussoorie Travel Guide", desc: "Queen of Hills" },
    { href: "/nainital-travel-guide", title: "Nainital Travel Guide", desc: "Lake District" },
    { href: "/dharamshala-travel-guide", title: "Dharamshala Travel Guide", desc: "Little Lhasa" },
    { href: "/varanasi-travel-guide", title: "Varanasi Travel Guide", desc: "Spiritual capital" },
    { href: "/sightseeing", title: "All Sightseeing Tours", desc: "Complete tour list" },
  ];
  const ctaTitle = "Need Help Planning Your Rishikesh Trip?";
  const ctaDesc = "Yoga retreats, river rafting, temple visits, and Haridwar combo tours -- we arrange it all with safe, reliable drivers.";
  const whatsappMsg = "I want to book a cab for Rishikesh trip";

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

      <div className="min-h-screen bg-amber-50/30">
        {/* Subtle pattern overlay */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='2' fill='%23b45309'/%3E%3Ccircle cx='4' cy='4' r='1' fill='%23b45309'/%3E%3Ccircle cx='36' cy='36' r='1' fill='%23b45309'/%3E%3C/svg%3E")` }} />

        {/* HERO - Animated Gradient with Floating Particles */}
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-stone-900 to-yellow-950" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 15s ease infinite' }} />
          {/* Floating glow orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/20 rounded-full blur-[120px]" style={{ animation: 'float 8s ease-in-out infinite' }} />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-600/15 rounded-full blur-[100px]" style={{ animation: 'float 10s ease-in-out infinite 2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px]" style={{ animation: 'float 12s ease-in-out infinite 4s' }} />
          {/* Floating particles */}
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

          {/* Trust bar at bottom of hero */}
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

        {/* TABLE OF CONTENTS - Glass cards with hover-lift */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Table of Contents</h2>
              <p className="text-stone-500">Your chapter-by-chapter guide to the Yoga Capital</p>
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

        {/* WELCOME - Glass card with gradient corners and stats */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card-light rounded-3xl p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-amber-200/40 to-transparent rounded-br-full" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-orange-200/40 to-transparent rounded-tl-full" />
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

        {/* BEST TIME - Enhanced bar chart */}
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

        {/* ATTRACTIONS - Glass cards with gradient number badges */}
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
                    <div className="md:w-20 bg-gradient-to-b from-amber-600 to-orange-600 flex items-center justify-center py-4 md:py-0">
                      <span className="text-3xl font-bold text-white/80">{String(idx + 1).padStart(2, '0')}</span>
                    </div>
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

        {/* FOOD - Glass cards with emoji watermark */}
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

        {/* SHOPPING - Glass cards with gradient price tags */}
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

        {/* TRANSPORT - Triveni Cabs card with animated border */}
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

        {/* STAY - Glass cards with gradient header bars */}
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

        {/* FAQ - Glass cards with Q-number badges */}
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

        {/* LINKS - Glass cards with group-hover */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-stone-800 mb-2 text-center">Explore More Destinations</h2>
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

        {/* CTA - Animated Gradient with floating particles */}
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
