import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, Camera, Landmark, Compass, Calendar, Bird, Binoculars, Map, Target } from '@/components/ui/icons';

export const metadata = {
  title: 'Varanasi Beyond the Ghats | Hidden Gems & Day Trips | 2026',
  description: 'Discover Varanasi beyond the ghats. Sarnath, Ramnagar Fort, Chunar Fort, BHU, Kabir Math, silk weaving villages + more. By locals. Call 7668570551.',
  keywords: 'varanasi beyond ghats, varanasi hidden gems, sarnath, ramnagar fort, chunar fort, varanasi offbeat, bhu campus, kabir math, varanasi silk weaving',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/varanasi-beyond-the-ghats' },
  openGraph: {
    title: 'Varanasi Beyond the Ghats | Hidden Gems & Day Trips 2026',
    description: 'Discover what Varanasi has beyond the ghats. Buddhist sites, forts, museums, silk villages. Complete guide by locals.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/varanasi-beyond-the-ghats',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/varanasi-hero.jpg', width: 1200, height: 630, alt: 'Varanasi Beyond the Ghats' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Varanasi Beyond the Ghats | Hidden Gems',
    description: 'Sarnath, Ramnagar Fort, silk villages, Buddhist sites. By Varanasi locals.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/varanasi-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function VaranasiBeyondTheGhatsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Varanasi Beyond the Ghats", "item": "https://www.trivenicabs.in/varanasi-beyond-the-ghats" },
    ],
  };

  const faqData = [
    { question: "What can I see in Varanasi besides the ghats?", answer: "Varanasi has so much beyond its famous ghats: Sarnath (where Buddha gave his first sermon, 10 km), Ramnagar Fort and Museum, BHU campus with its Vishwanath Temple, Kabir Math, Bharat Kala Bhavan Museum, Alamgir Mosque, and the silk weaving villages of Sarai Mohana. Day trips include Chunar Fort (40 km)." },
    { question: "Is Sarnath worth visiting from Varanasi?", answer: "Absolutely! Sarnath is one of the four holiest Buddhist sites in the world. It is only 10 km from Varanasi (20 minutes by cab). The Dhamek Stupa, Ashoka Pillar, Sarnath Museum (with the original Lion Capital), and Mulagandha Kuti Vihar are all here. Allow 2-3 hours for a proper visit." },
    { question: "What is Ramnagar Fort?", answer: "Ramnagar Fort is an 18th-century fort-palace of the Maharaja of Varanasi, located across the Ganges. It houses a fascinating museum with vintage cars, royal weapons, ivory work, and medieval costumes. The fort is the venue for the famous month-long Ram Leela during Dussehra." },
    { question: "Can I visit a silk weaving village in Varanasi?", answer: "Yes! The villages around Varanasi, particularly Sarai Mohana and areas in the Muslim weaver quarter, are where the world-famous Banarasi silk saris are handwoven on traditional looms. Our drivers can take you to authentic weaving families where you can watch the intricate process and buy directly from weavers." },
    { question: "What is Chunar Fort and how far is it?", answer: "Chunar Fort is a massive ancient fort overlooking the Ganges, 40 km from Varanasi. Dating back over 2,000 years, it was held by everyone from the Mauryas to the Mughals to the British. It offers spectacular river views and has legends linking it to both Buddha and the Pandavas. Allow half a day." },
    { question: "Is BHU campus worth visiting?", answer: "Yes! Banaras Hindu University (BHU) has one of the most beautiful campuses in India. The New Vishwanath Temple inside the campus is a magnificent modern temple open to all castes. The Bharat Kala Bhavan Museum on campus has a superb collection of miniature paintings, sculptures, and historical artifacts." },
    { question: "What is Kabir Math?", answer: "Kabir Math is the ashram dedicated to the 15th-century mystic poet Kabir, who challenged both Hindu and Muslim orthodoxy. Located in the Kabir Chaura neighborhood, it is a peaceful place with Kabir&apos;s original writings and artifacts. A meaningful visit for those interested in Indian philosophy and poetry." },
    { question: "How many days do I need for Varanasi beyond the ghats?", answer: "The ghats need 1-2 days. Add 1 day for Sarnath + Ramnagar Fort + BHU. Add another day for silk weaving villages + Chunar Fort. So 3-4 days total gives you a comprehensive Varanasi experience. Our 3-day itinerary is the most popular choice." },
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
    { name: "Sarnath", desc: "Where Buddha delivered his first sermon after attaining enlightenment, making it one of the four holiest Buddhist sites on Earth. The Dhamek Stupa, Ashoka Pillar ruins, and the Sarnath Museum (housing the original Lion Capital -- India&apos;s national emblem) are all here.", distance: "10 km from Dashashwamedh Ghat", timing: "Sunrise to sunset; museum 10 AM - 5 PM (closed Fridays)", whyVisit: "One of the world&apos;s most sacred Buddhist sites, where Buddhism was born as a religion", cabTip: "Just 20 minutes from the ghats -- easily combined with a morning ghat visit" },
    { name: "Ramnagar Fort", desc: "The 18th-century fort-palace of the Maharaja of Varanasi sits grandly across the Ganges. Its museum contains vintage cars, astronomical clocks, ivory work, medieval armor, and ornate royal palanquins. During Dussehra, it hosts a month-long Ram Leela that draws thousands.", distance: "14 km from Dashashwamedh Ghat (by road)", timing: "10 AM - 5 PM daily", whyVisit: "A living royal heritage with one of India&apos;s quirkiest museums -- vintage cars meet medieval armor", cabTip: "Cross the river by road bridge; the drive offers great views of the ghats from across the Ganges" },
    { name: "Chunar Fort", desc: "A massive ancient fort perched on a rocky hill overlooking the Ganges, with a history spanning over 2,000 years. From the Maurya Empire to Sher Shah Suri to the British, every major power in Indian history held this strategic fortification. The views from the ramparts are stunning.", distance: "40 km from Varanasi", timing: "Sunrise to sunset; allow half a day for the trip", whyVisit: "2,000 years of Indian history in one fort, with Ganges views that rival anything in Varanasi", cabTip: "Half-day trip; combine with lunch at a riverside dhaba on the way back" },
    { name: "BHU Campus & New Vishwanath Temple", desc: "Banaras Hindu University, founded in 1916 by Pandit Madan Mohan Malaviya, has one of Asia&apos;s largest residential campuses. The New Vishwanath Temple inside is a magnificent marble temple open to all, with no caste restrictions -- a deliberate contrast to the old Kashi Vishwanath.", distance: "6 km from Dashashwamedh Ghat", timing: "Campus always open; temple 4 AM - 12 PM, 1 PM - 9 PM", whyVisit: "A beautiful modern temple with a progressive message of equality inside India&apos;s greatest university", cabTip: "The campus is huge -- our driver can take you directly to the temple gate" },
    { name: "Kabir Math", desc: "The ashram and memorial of Sant Kabir, the revolutionary 15th-century weaver-poet who challenged Hindu-Muslim divisions with his philosophy of universal truth. The peaceful complex houses original manuscripts, a meditation hall, and artifacts from Kabir&apos;s life.", distance: "3 km from Dashashwamedh Ghat", timing: "6 AM - 8 PM daily", whyVisit: "Walk where one of India&apos;s greatest philosophers lived and wove cloth while composing timeless poetry", cabTip: "In the old city -- narrow lanes, so our driver drops you nearby and waits" },
    { name: "Bharat Kala Bhavan Museum", desc: "One of India&apos;s finest art museums, housed within the BHU campus. Its collection includes rare miniature paintings, ancient sculptures, textiles, and a superb collection of 12th-century manuscripts. The Alice Boner gallery of Indian art and the archaeological section are world-class.", distance: "6 km from Dashashwamedh Ghat", timing: "10:30 AM - 4:30 PM (closed Sundays and university holidays)", whyVisit: "A museum that would be world-famous in any other city -- miniature paintings, sculptures, and rare manuscripts", cabTip: "Visit along with BHU campus and the New Vishwanath Temple in one trip" },
    { name: "Silk Weaving Villages", desc: "The villages and neighborhoods around Varanasi, especially Sarai Mohana, are where Banarasi silk saris have been handwoven for centuries. Watch master weavers create intricate gold and silver zari work on traditional pit looms. Many families have been weaving for 10+ generations.", distance: "5-15 km from Varanasi center", timing: "Best visited 9 AM - 4 PM on weekdays when looms are active", whyVisit: "See the creation of the world&apos;s most famous textile tradition -- and buy direct from the artisan", cabTip: "Our drivers know trusted weaving families; avoid tourist-trap showrooms in the city" },
    { name: "Alamgir Mosque (Beni Madhav Ka Darera)", desc: "A striking 17th-century mosque built by Mughal Emperor Aurangzeb on the site of a Hindu temple, perched high on Panchganga Ghat overlooking the Ganges. Its towering minarets are visible from across the river and the terrace offers one of the best panoramic views of Varanasi&apos;s skyline.", distance: "1 km from Dashashwamedh Ghat", timing: "Sunrise to sunset (respectful visits during non-prayer times)", whyVisit: "Iconic skyline silhouette with stunning river views -- a symbol of Varanasi&apos;s layered history", cabTip: "Walking distance from main ghats; best accessed on foot through the ghat walkway" },
  ];

  const suggestedItineraries = [
    {
      title: "Day 1 - Sacred History Beyond the River",
      duration: "Full Day",
      stops: [
        "5:30 AM - Sunrise boat ride on the Ganges",
        "8:00 AM - Breakfast at a ghat-side stall",
        "9:00 AM - Sarnath: Dhamek Stupa, Ashoka ruins, Museum (3 hours)",
        "12:30 PM - Lunch near Sarnath",
        "2:00 PM - Ramnagar Fort and Museum (1.5 hours)",
        "4:00 PM - BHU campus walk + New Vishwanath Temple",
        "6:00 PM - Return to ghats for evening Ganga Aarti",
      ],
    },
    {
      title: "Day 2 - Art, Philosophy & Silk",
      duration: "Full Day",
      stops: [
        "7:00 AM - Kabir Math (peaceful morning visit, 1 hour)",
        "8:30 AM - Alamgir Mosque terrace views",
        "9:30 AM - Bharat Kala Bhavan Museum (2 hours)",
        "12:00 PM - Lunch at a BHU campus eatery",
        "1:30 PM - Silk weaving village visit (2-3 hours)",
        "4:30 PM - Varanasi old city walk through weaver lanes",
        "6:30 PM - Evening at leisure or Subah-e-Banaras cultural show",
      ],
    },
    {
      title: "Day 3 - Ancient Fort & Deep Heritage",
      duration: "Half Day Trip",
      stops: [
        "7:00 AM - Drive to Chunar Fort (1.5 hours)",
        "8:30 AM - Explore Chunar Fort ramparts and museum (2 hours)",
        "10:30 AM - Riverside walk along the Ganges at Chunar",
        "11:30 AM - Lunch at a local dhaba with river views",
        "1:00 PM - Return to Varanasi",
        "3:00 PM - Shopping at Thatheri Bazaar (brass/copper market)",
        "5:00 PM - Final sunset at Assi Ghat",
      ],
    },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Varanasi Experts", desc: "We know every gali" },
    { icon: Compass, title: "8 Hidden Gems", desc: "Beyond the tourist circuit" },
    { icon: Landmark, title: "Ancient Heritage", desc: "5,000 years of history" },
    { icon: Star, title: "4.9 Rating", desc: "Google reviews" },
  ];

  const internalLinks = [
    { href: "/sightseeing/varanasi", title: "Varanasi Sightseeing Tours", desc: "All Varanasi attractions" },
    { href: "/varanasi", title: "Varanasi City Hub", desc: "Varanasi cab services" },
    { href: "/varanasi-trip-cost-from-delhi", title: "Varanasi Trip Cost", desc: "Budget breakdown" },
    { href: "/varanasi-vs-haridwar", title: "Varanasi vs Haridwar", desc: "Which to visit?" },
    { href: "/chhath-puja-varanasi-transport", title: "Chhath Puja Transport", desc: "Festival travel" },
    { href: "/prayagraj-sangam-tour", title: "Prayagraj Sangam Tour", desc: "Holy confluence trip" },
    { href: "/uttarakhand-spiritual-circuit-tour", title: "Spiritual Circuit Tour", desc: "Multi-city pilgrimage" },
    { href: "/ayodhya-ram-mandir-tour-from-delhi", title: "Ayodhya Ram Mandir Tour", desc: "From Delhi" },
    { href: "/lucknow-beyond-bara-imambara", title: "Lucknow Beyond Bara Imambara", desc: "Lucknow hidden gems" },
    { href: "/religious-tours", title: "Religious Tours", desc: "All pilgrimage options" },
    { href: "/outstation-cabs", title: "Outstation Cabs", desc: "Inter-city travel" },
    { href: "/10-day-north-india-road-trip", title: "North India Road Trip", desc: "10-day grand tour" },
  ];

  const cityName = "Varanasi";
  const landmark = "the Ghats";
  const heroSubtitle = "Buddhist holy sites, royal forts, silk weaving villages, and ancient universities. Discover the world\u2019s oldest living city beyond its famous riverfront.";
  const whatsappText = "I want to explore beyond the ghats in Varanasi";
  const introTitle = "The World\u2019s Oldest City Has Layers";
  const introText = <>Varanasi is synonymous with its ghats -- the stone steps descending to the Ganges where life and death play out in eternal cycles. But this <strong>5,000-year-old city</strong> holds far deeper treasures than the riverfront alone reveals. Just 10 kilometers away, Sarnath marks the spot where <strong>Buddhism itself was born</strong> when the Buddha delivered his first sermon. Across the Ganges, the Ramnagar Fort houses a museum of quirky royal artifacts, from vintage American cars to medieval Mughal armor. In the narrow lanes of the old city, the ashram of Sant Kabir preserves the revolutionary philosophy of a weaver who challenged all religious orthodoxy. At BHU, one of Asia&apos;s grandest universities, a marble temple stands as a beacon of caste equality. And in the villages surrounding Varanasi, master weavers continue creating <strong>Banarasi silk saris</strong> on traditional looms, just as their ancestors did for centuries. As Varanasi transport experts, we have watched travelers transform from ghat-hopping tourists into deep explorers of this extraordinary city. Let us show you the Varanasi beyond the famous riverfront.</>;
  const introStats = [
    { icon: Landmark, label: "8 Hidden Gems", sub: "Beyond the riverfront", bg: "bg-gradient-to-br from-teal-50 to-cyan-50", iconColor: "text-teal-600" },
    { icon: Compass, label: "Buddhist Heritage", sub: "Sarnath & more", bg: "bg-gradient-to-br from-amber-50 to-orange-50", iconColor: "text-amber-600" },
    { icon: Map, label: "3-Day Itinerary", sub: "Complete explorer plan", bg: "bg-gradient-to-br from-cyan-50 to-blue-50", iconColor: "text-cyan-600" },
  ];
  const gemsSubtitle = "Eight extraordinary places in and around Varanasi that go far beyond the famous ghats";
  const itineraryTitle = "Suggested 3-Day Varanasi Explorer Itinerary";
  const itinerarySubtitle = "Go beyond the ghats -- discover the layers of the world\u2019s oldest living city";
  const priceText = <>3-day Varanasi local cab: <strong>&#8377;3,000-4,000</strong> | From Delhi: <strong>&#8377;12,000 sedan</strong> (3-day round trip)</>;
  const linksTitle = "More Varanasi Guides & Tours";
  const ctaTitle = "Explore the Real Varanasi with Locals";
  const ctaSubtitle = "We show you the Varanasi that guidebooks miss. Buddhist sites, forts, silk villages, and ancient philosophy.";

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
