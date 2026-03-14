import Link from 'next/link';
import { Phone, MapPin, Shield, Clock, Users, Star, ChevronRight, CheckCircle2, ArrowRight, Camera, Landmark, Compass, Calendar, Bird, Binoculars, Map, Target } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Lucknow Beyond Bara Imambara | Hidden Gems & Heritage | 2026',
  description: 'Discover Lucknow beyond Bara Imambara. La Martiniere, Ambedkar Park, Dilkusha Kothi, Constantia, Kukrail Reserve, Janeshwar Mishra Park + more. Call 7668570551.',
  keywords: 'lucknow beyond bara imambara, lucknow hidden gems, la martiniere, dilkusha kothi, ambedkar park, kukrail reserve, lucknow offbeat, lucknow heritage',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/lucknow-beyond-bara-imambara' },
  openGraph: {
    title: 'Lucknow Beyond Bara Imambara | Hidden Gems & Heritage 2026',
    description: 'Discover what Lucknow has beyond Bara Imambara. Colonial ruins, parks, museums, wildlife. Complete guide by locals.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/lucknow-beyond-bara-imambara',
    siteName: 'Triveni Cabs',
    images: [{ url: '/images/lucknow-hero.jpg', width: 1200, height: 630, alt: 'Lucknow Beyond Bara Imambara' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lucknow Beyond Bara Imambara | Hidden Gems',
    description: 'Colonial ruins, Nawabi heritage, crocodile reserves, grand parks. By Lucknow locals.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/lucknow-hero.jpg'],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function LucknowBeyondBaraImambaraPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Lucknow Beyond Bara Imambara", "item": "https://www.trivenicabs.in/lucknow-beyond-bara-imambara" },
    ],
  };

  const faqData = [
    { question: "What can I see in Lucknow besides Bara Imambara?", answer: "Lucknow has rich hidden heritage: La Martiniere School (one of the world&apos;s most beautiful schools), Ambedkar Memorial Park (grand sandstone monument), Dilkusha Kothi (haunting British ruin), Janeshwar Mishra Park (Asia&apos;s largest park), Constantia, Begum Hazrat Mahal Park, Kukrail Crocodile Reserve, and Nawab Wajid Ali Shah Zoo." },
    { question: "What is La Martiniere and can I visit it?", answer: "La Martiniere is a stunning European-style school built in the 1800s by French Major General Claude Martin. The building (Constantia) is an architectural masterpiece blending Baroque, Gothic, and Nawabi styles. It played a role in the 1857 uprising. Visits are restricted to school holidays and special permissions." },
    { question: "What is Dilkusha Kothi?", answer: "Dilkusha Kothi is a hauntingly beautiful British-era ruin in a garden setting. Built as a hunting lodge in the Baroque style, it was heavily damaged during the 1857 uprising. The roofless shell surrounded by gardens is one of Lucknow&apos;s most atmospheric and photogenic spots. ASI maintained, free entry." },
    { question: "Is Ambedkar Park worth visiting?", answer: "Yes! Ambedkar Memorial Park (Ambedkar Park) is a massive monument complex built in red sandstone, featuring elephant statues, grand domes, and memorials to social reformers. The architecture is impressive and the park is beautifully maintained. Illuminated at night, it is striking. Free entry." },
    { question: "What is Kukrail Crocodile Reserve?", answer: "Kukrail is a forest reserve on the outskirts of Lucknow that breeds gharials (critically endangered crocodilians) and mugger crocodiles for release into the wild. You can see hundreds of gharials up close. The surrounding forest has deer, monkeys, and birdlife. A unique and educational experience." },
    { question: "What is Janeshwar Mishra Park?", answer: "Janeshwar Mishra Park is one of Asia&apos;s largest parks, spread over 376 acres with a large lake, cycling tracks, jogging paths, gardens, and an amphitheater. It is Lucknow&apos;s green lung and a popular spot for morning walks, cycling, and boating. Free entry, open from 5 AM to 9 PM." },
    { question: "What is the best food experience beyond the tourist restaurants?", answer: "For authentic Lucknowi cuisine, explore the Chowk area for kebabs at Tunday Kababi (since 1905), Prakash Kulfi for kulfi-falooda, Rahim&apos;s for nihari, and the narrow lanes of Aminabad for basket chaat. Our drivers know all the local food spots that tourists rarely find." },
    { question: "How many days do I need for Lucknow beyond the main sights?", answer: "1 day covers Bara Imambara, Chota Imambara, and Rumi Darwaza. 2 days lets you add La Martiniere area, Dilkusha, Ambedkar Park, and the Residency. 3 days adds Kukrail, Janeshwar Mishra Park, and a deep food trail. Our 3-day itinerary is the ultimate Nawabi experience." },
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
    { name: "La Martiniere School (Constantia)", desc: "One of the world&apos;s most architecturally stunning schools, built by French adventurer Claude Martin in the late 1700s. The Constantia building blends Baroque, Gothic, and Nawabi styles in a way found nowhere else on Earth. It is the only school awarded British Battle Honours for its role in the 1857 uprising.", distance: "6 km from Bara Imambara", timing: "Limited access; best visited during school holidays or with prior permission", whyVisit: "Perhaps the world&apos;s most beautiful school building -- a unique architectural fusion found nowhere else", cabTip: "Drive past at minimum for exterior views; our drivers know the best photography angles" },
    { name: "Ambedkar Memorial Park", desc: "A grand monument complex spread over 107 acres, built in red Rajasthani sandstone. The park features massive elephant statues, domed halls, and memorials to social reformers including Dr. B.R. Ambedkar. The architecture is inspired by Sanchi and Mughal styles. Spectacularly illuminated at night.", distance: "8 km from Bara Imambara", timing: "Open 11 AM - 9 PM (Tuesday to Sunday); closed Mondays", whyVisit: "Monumental sandstone architecture on a massive scale -- Lucknow&apos;s most impressive modern monument", cabTip: "Visit in the evening for the illumination; our drivers know the best approach route" },
    { name: "Dilkusha Kothi", desc: "A hauntingly beautiful ruin of a British-era Baroque hunting lodge set in peaceful gardens. Severely damaged during the 1857 uprising, the roofless shell with its surviving arches and ornamental facade creates one of India&apos;s most atmospheric heritage sites. The gardens are perfect for a peaceful morning walk.", distance: "5 km from Bara Imambara", timing: "Sunrise to sunset; ASI maintained; free entry", whyVisit: "One of India&apos;s most atmospheric ruins -- a roofless Baroque shell in a garden of memory", cabTip: "Often overlooked by tourists; combine with the nearby Residency for a 1857 heritage trail" },
    { name: "Janeshwar Mishra Park", desc: "One of Asia&apos;s largest parks at 376 acres, featuring a large central lake with boating, 3 km cycling track, jogging paths, amphitheater, children&apos;s play areas, and lush gardens. The park is Lucknow&apos;s answer to Central Park and a favorite of local families and fitness enthusiasts.", distance: "12 km from Bara Imambara", timing: "5 AM - 9 PM daily; best for morning walks or evening strolls", whyVisit: "Asia&apos;s largest park -- cycle, boat, and stroll through 376 acres of Lucknow&apos;s green heart", cabTip: "In Gomti Nagar; combine with nearby Ambedkar Park for a green afternoon" },
    { name: "Constantia (Claude Martin&apos;s Tomb)", desc: "The actual tomb of Major General Claude Martin lies within the La Martiniere campus. This extraordinary building was his palace, school, and final resting place. The architecture is a fantasy of European and Indian design elements. It is perhaps the finest European colonial building in all of India.", distance: "6 km from Bara Imambara", timing: "Same access restrictions as La Martiniere; exterior always viewable", whyVisit: "The tomb of a French adventurer inside his own fantastical palace-school -- uniquely Lucknow", cabTip: "Same location as La Martiniere; our drivers know the viewing spots around the campus walls" },
    { name: "Begum Hazrat Mahal Park", desc: "A beautiful park in the heart of Lucknow dedicated to Begum Hazrat Mahal, the queen who led the 1857 uprising in Awadh. The park features a striking marble statue of the queen, manicured gardens, and fountains. Located near Hazratganj, it is a peaceful break during city exploration.", distance: "2 km from Bara Imambara", timing: "Open all day; best in morning or evening", whyVisit: "Honor the warrior queen who fought the British from Lucknow in a beautifully maintained city park", cabTip: "Walking distance from Hazratganj shopping area; combine with shopping and Tunday Kababi" },
    { name: "Kukrail Crocodile Reserve", desc: "A unique forest reserve that breeds critically endangered gharials and mugger crocodiles for release into Indian rivers. You can see gharials of all sizes up close in breeding pools. The surrounding Kukrail forest has deer, monkeys, and good birdwatching. A surprisingly wild experience on Lucknow&apos;s outskirts.", distance: "10 km from Bara Imambara", timing: "9 AM - 5 PM (Tuesday to Sunday); closed Mondays", whyVisit: "See hundreds of critically endangered gharials up close in a conservation breeding program", cabTip: "On the eastern outskirts; combine with Janeshwar Mishra Park nearby" },
    { name: "Nawab Wajid Ali Shah Zoological Garden", desc: "Lucknow&apos;s zoo, named after the last Nawab of Awadh, houses white tigers, lions, jaguars, hippos, and a good collection of Indian birds. The zoo is set in pleasant gardens and is well-maintained. The white tiger enclosure and the nocturnal house are highlights.", distance: "3 km from Bara Imambara", timing: "8:30 AM - 5:30 PM (Tuesday to Sunday); closed Mondays", whyVisit: "See white tigers and diverse Indian wildlife in the garden of the last Nawab of Awadh", cabTip: "Near the main city; easy to visit between heritage sites" },
  ];

  const suggestedItineraries = [
    {
      title: "Day 1 - Colonial Heritage Trail",
      duration: "Full Day",
      stops: [
        "8:00 AM - British Residency (1857 uprising site)",
        "10:00 AM - Dilkusha Kothi (atmospheric ruins)",
        "11:30 AM - La Martiniere / Constantia (exterior views)",
        "1:00 PM - Lunch: Tunday Kababi in Aminabad (since 1905)",
        "2:30 PM - Ambedkar Memorial Park",
        "4:30 PM - Begum Hazrat Mahal Park + Hazratganj walk",
        "6:00 PM - Evening: Chowk area food walk (kebabs, kulfi)",
      ],
    },
    {
      title: "Day 2 - Nature & Nawabi Culture",
      duration: "Full Day",
      stops: [
        "6:00 AM - Morning walk at Janeshwar Mishra Park",
        "8:30 AM - Breakfast at Sharma Ji Ki Chai (famous stall)",
        "9:30 AM - Kukrail Crocodile Reserve (2 hours)",
        "12:00 PM - Nawab Wajid Ali Shah Zoo (1.5 hours)",
        "1:30 PM - Lunch: Rahim&apos;s for nihari and kulcha",
        "3:00 PM - State Museum (Nawabi artifacts + freedom struggle)",
        "5:00 PM - Picture Gallery at Husainabad",
        "7:00 PM - Ambedkar Park night illumination",
      ],
    },
    {
      title: "Day 3 - Deep Food & Shopping Trail",
      duration: "Half Day + Food",
      stops: [
        "8:00 AM - Old Lucknow heritage walk: Chowk to Rumi Darwaza",
        "10:00 AM - Akbari Gate area: chikan embroidery workshops",
        "11:30 AM - Aminabad market (basket chaat, kulfi-falooda)",
        "1:00 PM - Idris Biryani for lunch",
        "2:30 PM - Nakhas market (antiques, brassware)",
        "4:00 PM - Prakash Kulfi for afternoon snack",
        "5:00 PM - Final sunset at Gomti Riverfront",
      ],
    },
  ];

  const trustFeatures = [
    { icon: MapPin, title: "Lucknow Experts", desc: "We know every gali" },
    { icon: Compass, title: "8 Hidden Gems", desc: "Beyond the Imambara" },
    { icon: Landmark, title: "Nawabi Heritage", desc: "Ruins, parks, museums" },
    { icon: Star, title: "4.9 Rating", desc: "Google reviews" },
  ];

  const internalLinks = [
    { href: "/sightseeing/lucknow", title: "Lucknow Sightseeing Tours", desc: "All Lucknow attractions" },
    { href: "/lucknow", title: "Lucknow City Hub", desc: "Lucknow cab services" },
    { href: "/delhi-airport-to-lucknow-taxi", title: "Delhi to Lucknow Taxi", desc: "Airport transfers" },
    { href: "/ayodhya-ram-mandir-tour-from-lucknow", title: "Ayodhya from Lucknow", desc: "Ram Mandir tour" },
    { href: "/same-day-agra-tour-from-lucknow", title: "Agra from Lucknow", desc: "Same day Taj tour" },
    { href: "/varanasi-beyond-the-ghats", title: "Varanasi Beyond Ghats", desc: "Varanasi hidden gems" },
    { href: "/prayagraj-sangam-tour", title: "Prayagraj Sangam Tour", desc: "Holy confluence" },
    { href: "/uttarakhand-spiritual-circuit-tour", title: "Spiritual Circuit Tour", desc: "Multi-city pilgrimage" },
    { href: "/outstation-cabs", title: "Outstation Cabs", desc: "Inter-city travel" },
    { href: "/religious-tours", title: "Religious Tours", desc: "All pilgrimage options" },
    { href: "/one-way-cab", title: "One Way Cab", desc: "Point-to-point travel" },
    { href: "/10-day-north-india-road-trip", title: "North India Road Trip", desc: "10-day grand tour" },
  ];

  const cityName = "Lucknow";
  const landmark = "Bara Imambara";
  const heroSubtitle = "Colonial ruins, warrior queen memorials, crocodile reserves, the world&apos;s most beautiful school, and Nawabi culinary trails. Discover the City of Nawabs&apos; deepest layers.";
  const whatsappText = "I want to explore beyond Bara Imambara in Lucknow";
  const introTitle = "The City of Nawabs Has Deeper Layers";
  const introText = <>Most visitors to Lucknow explore Bara Imambara, snap a photo at Rumi Darwaza, and eat kebabs before departing. But this <strong>erstwhile capital of the Awadh kingdom</strong> is layered with centuries of Nawabi refinement, colonial drama, and cultural richness that few travelers discover. The haunting ruins of <strong>Dilkusha Kothi</strong> stand as silent witnesses to the 1857 uprising, while La Martiniere -- perhaps <strong>the most beautiful school building on Earth</strong> -- blends French Baroque with Nawabi elegance in a way found nowhere else. Grand memorials honor the warrior queen Begum Hazrat Mahal, who fought the British from these very streets. On Lucknow&apos;s outskirts, <strong>Kukrail Crocodile Reserve</strong> breeds critically endangered gharials, and Asia&apos;s largest park offers 376 acres of green escape. And through it all, the <strong>Nawabi food tradition</strong> lives on in lanes where kebab masters have perfected their craft for over a century. As Lucknow transport specialists, we navigate these historic lanes daily. This guide reveals the city of adab and tehzeeb beyond the famous Imambara.</>;
  const introStats = [
    { icon: Landmark, label: "8 Hidden Gems", sub: "Beyond the Imambara", bg: "bg-gradient-to-br from-teal-50 to-cyan-50", iconColor: "text-teal-600" },
    { icon: Compass, label: "Nawabi Heritage", sub: "Ruins & monuments", bg: "bg-gradient-to-br from-amber-50 to-orange-50", iconColor: "text-amber-600" },
    { icon: Map, label: "3-Day Itinerary", sub: "Complete Nawab plan", bg: "bg-gradient-to-br from-cyan-50 to-blue-50", iconColor: "text-cyan-600" },
  ];
  const gemsSubtitle = "Eight extraordinary places in Lucknow that go far beyond the famous Bara Imambara";
  const itineraryTitle = "Suggested 3-Day Lucknow Explorer Itinerary";
  const itinerarySubtitle = "Go beyond Bara Imambara -- discover the deep Nawabi heritage and hidden culture of Lucknow";
  const priceText = <>3-day Lucknow local cab: <strong>&#8377;2,500-3,500</strong> | From Delhi: <strong>&#8377;9,000 sedan</strong> (3-day round trip)</>;
  const linksTitle = "More Lucknow Guides & Tours";
  const ctaTitle = "Explore the Real Lucknow with Locals";
  const ctaSubtitle = "We show you the Lucknow that guidebooks miss. Nawabi ruins, colonial heritage, crocodile reserves, and kebab trails.";

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
