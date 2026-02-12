const fs = require('fs');
const path = require('path');

const BASE = path.join(__dirname, 'src', 'app', '(routes)');

// Configs for 9 standard 3-day pages (NOT Agra, NOT Delhi)
const configs = [
  {
    dir: 'jaipur-beyond-hawa-mahal',
    cityName: 'Jaipur',
    landmark: 'Hawa Mahal',
    heroSubtitle: 'Stepwells, monkey temples, ghost forts, ethical elephant sanctuaries, and mirror palaces. Discover the Pink City\\&apos;s secrets beyond the iconic wind palace.',
    whatsappText: 'I want to explore beyond Hawa Mahal in Jaipur',
    introTitle: 'The Pink City Has More Than Pink',
    introStats: [
      { icon: 'Landmark', label: '8 Hidden Gems', sub: 'Beyond the guidebook', bg: 'bg-gradient-to-br from-teal-50 to-cyan-50', iconColor: 'text-teal-600' },
      { icon: 'Compass', label: '3 Day Trips', sub: 'Ghost forts & stepwells', bg: 'bg-gradient-to-br from-amber-50 to-orange-50', iconColor: 'text-amber-600' },
      { icon: 'Map', label: '3-Day Itinerary', sub: 'Complete explorer plan', bg: 'bg-gradient-to-br from-cyan-50 to-blue-50', iconColor: 'text-cyan-600' },
    ],
    gemsSubtitle: 'Eight extraordinary places around Jaipur that deserve to be on every traveler\\&apos;s list',
    itineraryTitle: 'Suggested 3-Day Jaipur Explorer Itinerary',
    itinerarySubtitle: 'Go beyond the standard tour -- discover the real Jaipur over three unforgettable days',
    itineraryCols: '3',
    priceText: '3-day Jaipur local cab: <strong>&#8377;3,500-4,500</strong> | From Delhi: <strong>&#8377;8,500 sedan</strong> (3-day round trip including day trips)',
    linksTitle: 'More Jaipur Guides & Tours',
    ctaTitle: 'Explore the Real Jaipur with Locals',
    ctaSubtitle: 'We show you the Jaipur that guidebooks miss. Stepwells, ghost forts, elephant sanctuaries, and royal palaces.',
  },
  {
    dir: 'varanasi-beyond-the-ghats',
    cityName: 'Varanasi',
    landmark: 'the Ghats',
    heroSubtitle: 'Buddhist holy sites, royal forts, silk weaving villages, and ancient universities. Discover the world\\&apos;s oldest living city beyond its famous riverfront.',
    whatsappText: 'I want to explore beyond the ghats in Varanasi',
    introTitle: 'The World\\&apos;s Oldest City Has Layers',
    introStats: [
      { icon: 'Landmark', label: '8 Hidden Gems', sub: 'Beyond the riverfront', bg: 'bg-gradient-to-br from-teal-50 to-cyan-50', iconColor: 'text-teal-600' },
      { icon: 'Compass', label: 'Buddhist Heritage', sub: 'Sarnath & more', bg: 'bg-gradient-to-br from-amber-50 to-orange-50', iconColor: 'text-amber-600' },
      { icon: 'Map', label: '3-Day Itinerary', sub: 'Complete explorer plan', bg: 'bg-gradient-to-br from-cyan-50 to-blue-50', iconColor: 'text-cyan-600' },
    ],
    gemsSubtitle: 'Eight extraordinary places in and around Varanasi that go far beyond the famous ghats',
    itineraryTitle: 'Suggested 3-Day Varanasi Explorer Itinerary',
    itinerarySubtitle: 'Go beyond the ghats -- discover the layers of the world\\&apos;s oldest living city',
    itineraryCols: '3',
    priceText: '3-day Varanasi local cab: <strong>&#8377;3,000-4,000</strong> | From Delhi: <strong>&#8377;12,000 sedan</strong> (3-day round trip)',
    linksTitle: 'More Varanasi Guides & Tours',
    ctaTitle: 'Explore the Real Varanasi with Locals',
    ctaSubtitle: 'We show you the Varanasi that guidebooks miss. Buddhist sites, forts, silk villages, and ancient philosophy.',
  },
  {
    dir: 'udaipur-beyond-city-palace',
    cityName: 'Udaipur',
    landmark: 'City Palace',
    heroSubtitle: 'Hidden lakes, craft villages, monsoon palaces, ancient battlefields, and UNESCO forts. Discover the Venice of the East beyond the famous lake city.',
    whatsappText: 'I want to explore beyond City Palace in Udaipur',
    introTitle: 'Beyond the Lake City\\&apos;s Famous Shores',
    introStats: [
      { icon: 'Landmark', label: '8 Hidden Gems', sub: 'Beyond the lake city', bg: 'bg-gradient-to-br from-teal-50 to-cyan-50', iconColor: 'text-teal-600' },
      { icon: 'Compass', label: '2 UNESCO Forts', sub: 'Day trip distance', bg: 'bg-gradient-to-br from-amber-50 to-orange-50', iconColor: 'text-amber-600' },
      { icon: 'Map', label: '3-Day Itinerary', sub: 'Complete explorer plan', bg: 'bg-gradient-to-br from-cyan-50 to-blue-50', iconColor: 'text-cyan-600' },
    ],
    gemsSubtitle: 'Eight extraordinary places around Udaipur that go far beyond the famous lake and palace',
    itineraryTitle: 'Suggested 3-Day Udaipur Explorer Itinerary',
    itinerarySubtitle: 'Go beyond the lake city -- discover the real Mewar heritage over three unforgettable days',
    itineraryCols: '3',
    priceText: '3-day Udaipur local cab: <strong>&#8377;4,000-5,500</strong> | From Delhi: <strong>&#8377;14,000 sedan</strong> (3-day round trip)',
    linksTitle: 'More Udaipur Guides & Tours',
    ctaTitle: 'Explore the Real Udaipur with Locals',
    ctaSubtitle: 'We show you the Udaipur that guidebooks miss. Hidden lakes, craft villages, monsoon sunsets, and UNESCO forts.',
  },
  {
    dir: 'amritsar-beyond-golden-temple',
    cityName: 'Amritsar',
    landmark: 'Golden Temple',
    heroSubtitle: 'Sikh fortresses, heritage villages, walled city walks, warrior museums, and cultural immersions. Discover the Holy City beyond its golden dome.',
    whatsappText: 'I want to explore beyond Golden Temple in Amritsar',
    introTitle: 'The Holy City Has More Than Gold',
    introStats: [
      { icon: 'Landmark', label: '8 Hidden Gems', sub: 'Beyond the tourist path', bg: 'bg-gradient-to-br from-teal-50 to-cyan-50', iconColor: 'text-teal-600' },
      { icon: 'Compass', label: 'Sikh Heritage', sub: 'Forts, museums, villages', bg: 'bg-gradient-to-br from-amber-50 to-orange-50', iconColor: 'text-amber-600' },
      { icon: 'Map', label: '3-Day Itinerary', sub: 'Complete explorer plan', bg: 'bg-gradient-to-br from-cyan-50 to-blue-50', iconColor: 'text-cyan-600' },
    ],
    gemsSubtitle: 'Eight extraordinary places in Amritsar that go far beyond the famous Golden Temple',
    itineraryTitle: 'Suggested 3-Day Amritsar Explorer Itinerary',
    itinerarySubtitle: 'Go beyond the Golden Temple -- discover the deep Sikh heritage and Punjabi culture',
    itineraryCols: '3',
    priceText: '3-day Amritsar local cab: <strong>&#8377;3,000-4,000</strong> | From Delhi: <strong>&#8377;10,000 sedan</strong> (3-day round trip)',
    linksTitle: 'More Amritsar Guides & Tours',
    ctaTitle: 'Explore the Real Amritsar with Locals',
    ctaSubtitle: 'We show you the Amritsar that guidebooks miss. Sikh fortresses, heritage villages, warrior history, and food trails.',
  },
  {
    dir: 'shimla-beyond-mall-road',
    cityName: 'Shimla',
    landmark: 'Mall Road',
    heroSubtitle: 'Apple orchards, hot springs, the world\\&apos;s highest cricket ground, skiing slopes, and pristine cedar forests. Discover the Queen of Hills beyond the tourist promenade.',
    whatsappText: 'I want to explore beyond Mall Road in Shimla',
    introTitle: 'The Queen of Hills Has Hidden Valleys',
    introStats: [
      { icon: 'Landmark', label: '8 Hidden Gems', sub: 'Beyond the tourist trail', bg: 'bg-gradient-to-br from-teal-50 to-cyan-50', iconColor: 'text-teal-600' },
      { icon: 'Compass', label: 'Mountain Heritage', sub: 'Orchards, springs, peaks', bg: 'bg-gradient-to-br from-amber-50 to-orange-50', iconColor: 'text-amber-600' },
      { icon: 'Map', label: '3-Day Itinerary', sub: 'Complete explorer plan', bg: 'bg-gradient-to-br from-cyan-50 to-blue-50', iconColor: 'text-cyan-600' },
    ],
    gemsSubtitle: 'Eight extraordinary places near Shimla that go far beyond Mall Road and The Ridge',
    itineraryTitle: 'Suggested 3-Day Shimla Explorer Itinerary',
    itinerarySubtitle: 'Go beyond Mall Road -- discover hidden Himachal over three spectacular days',
    itineraryCols: '3',
    priceText: '3-day Shimla local cab: <strong>&#8377;4,000-5,500</strong> | From Delhi: <strong>&#8377;9,000 sedan</strong> (3-day round trip)',
    linksTitle: 'More Shimla Guides & Tours',
    ctaTitle: 'Explore the Real Shimla with Locals',
    ctaSubtitle: 'We show you the Shimla that guidebooks miss. Apple orchards, hot springs, cricket grounds, and skiing slopes.',
  },
  {
    dir: 'manali-beyond-solang-valley',
    cityName: 'Manali',
    landmark: 'Solang Valley',
    heroSubtitle: 'Secret waterfalls, medieval castles, UNESCO wilderness, hot springs, and Buddhist hamlets. Discover the Himalayan paradise beyond the tourist valley.',
    whatsappText: 'I want to explore beyond Solang Valley in Manali',
    introTitle: 'The Himalayan Paradise Has Secret Valleys',
    introStats: [
      { icon: 'Landmark', label: '8 Hidden Gems', sub: 'Beyond the tourist spots', bg: 'bg-gradient-to-br from-teal-50 to-cyan-50', iconColor: 'text-teal-600' },
      { icon: 'Compass', label: 'UNESCO Park', sub: 'National park access', bg: 'bg-gradient-to-br from-amber-50 to-orange-50', iconColor: 'text-amber-600' },
      { icon: 'Map', label: '3-Day Itinerary', sub: 'Complete explorer plan', bg: 'bg-gradient-to-br from-cyan-50 to-blue-50', iconColor: 'text-cyan-600' },
    ],
    gemsSubtitle: 'Eight extraordinary places near Manali that go far beyond Solang Valley',
    itineraryTitle: 'Suggested 3-Day Manali Explorer Itinerary',
    itinerarySubtitle: 'Go beyond the tourist spots -- discover the real Manali over three adventure-filled days',
    itineraryCols: '3',
    priceText: '3-day Manali local cab: <strong>&#8377;4,500-6,000</strong> | From Delhi: <strong>&#8377;11,000 sedan</strong> (3-day round trip)',
    linksTitle: 'More Manali Guides & Tours',
    ctaTitle: 'Explore the Real Manali with Locals',
    ctaSubtitle: 'We show you the Manali that guidebooks miss. Waterfalls, castles, UNESCO parks, and secret villages.',
  },
  {
    dir: 'rishikesh-beyond-rafting',
    cityName: 'Rishikesh',
    landmark: 'Rafting',
    heroSubtitle: 'Beatles ashrams, sunrise temples, hidden waterfalls, wildlife safaris, and ancient meditation caves. Discover the Yoga Capital beyond the rapids.',
    whatsappText: 'I want to explore beyond rafting in Rishikesh',
    introTitle: 'The Yoga Capital Has Deeper Currents',
    introStats: [
      { icon: 'Landmark', label: '8 Hidden Gems', sub: 'Beyond the rafting crowd', bg: 'bg-gradient-to-br from-teal-50 to-cyan-50', iconColor: 'text-teal-600' },
      { icon: 'Compass', label: 'Sacred & Wild', sub: 'Temples, caves, parks', bg: 'bg-gradient-to-br from-amber-50 to-orange-50', iconColor: 'text-amber-600' },
      { icon: 'Map', label: '3-Day Itinerary', sub: 'Complete explorer plan', bg: 'bg-gradient-to-br from-cyan-50 to-blue-50', iconColor: 'text-cyan-600' },
    ],
    gemsSubtitle: 'Eight extraordinary experiences in Rishikesh that go far beyond the white water rapids',
    itineraryTitle: 'Suggested 3-Day Rishikesh Explorer Itinerary',
    itinerarySubtitle: 'Go beyond the rapids -- discover the spiritual and wild side of Rishikesh over three days',
    itineraryCols: '3',
    priceText: '3-day Rishikesh local cab: <strong>&#8377;3,500-5,000</strong> | From Delhi: <strong>&#8377;8,000 sedan</strong> (3-day round trip)',
    linksTitle: 'More Rishikesh Guides & Tours',
    ctaTitle: 'Explore the Real Rishikesh with Locals',
    ctaSubtitle: 'We show you the Rishikesh that guidebooks miss. Beatles ashrams, sunrise peaks, waterfalls, and wildlife.',
  },
  {
    dir: 'lucknow-beyond-bara-imambara',
    cityName: 'Lucknow',
    landmark: 'Bara Imambara',
    heroSubtitle: 'Colonial ruins, grand monuments, crocodile reserves, Nawabi heritage, and Asia\\&apos;s largest park. Discover the City of Nawabs beyond its famous labyrinth.',
    whatsappText: 'I want to explore beyond Bara Imambara in Lucknow',
    introTitle: 'The City of Nawabs Has Hidden Chapters',
    introStats: [
      { icon: 'Landmark', label: '8 Hidden Gems', sub: 'Beyond the Imambara', bg: 'bg-gradient-to-br from-teal-50 to-cyan-50', iconColor: 'text-teal-600' },
      { icon: 'Compass', label: 'Nawabi Heritage', sub: 'Ruins, parks, museums', bg: 'bg-gradient-to-br from-amber-50 to-orange-50', iconColor: 'text-amber-600' },
      { icon: 'Map', label: '3-Day Itinerary', sub: 'Complete explorer plan', bg: 'bg-gradient-to-br from-cyan-50 to-blue-50', iconColor: 'text-cyan-600' },
    ],
    gemsSubtitle: 'Eight extraordinary places in Lucknow that go far beyond the famous Imambaras',
    itineraryTitle: 'Suggested 3-Day Lucknow Explorer Itinerary',
    itinerarySubtitle: 'Go beyond the Imambara -- discover the Nawabi heritage and hidden Lucknow over three days',
    itineraryCols: '3',
    priceText: '3-day Lucknow local cab: <strong>&#8377;2,500-3,500</strong> | From Delhi: <strong>&#8377;9,000 sedan</strong> (3-day round trip)',
    linksTitle: 'More Lucknow Guides & Tours',
    ctaTitle: 'Explore the Real Lucknow with Locals',
    ctaSubtitle: 'We show you the Lucknow that guidebooks miss. Colonial ruins, Nawabi heritage, crocodile reserves, and food trails.',
  },
  {
    dir: 'jodhpur-beyond-mehrangarh',
    cityName: 'Jodhpur',
    landmark: 'Mehrangarh',
    heroSubtitle: 'Desert rock parks, Bishnoi village safaris, hidden stepwells, ancient capitals, and secret lakes. Discover the Blue City beyond its mighty fortress.',
    whatsappText: 'I want to explore beyond Mehrangarh in Jodhpur',
    introTitle: 'The Blue City Has Desert Secrets',
    introStats: [
      { icon: 'Landmark', label: '8 Hidden Gems', sub: 'Beyond the tourist trail', bg: 'bg-gradient-to-br from-teal-50 to-cyan-50', iconColor: 'text-teal-600' },
      { icon: 'Compass', label: '900 Years', sub: 'Of hidden history', bg: 'bg-gradient-to-br from-amber-50 to-orange-50', iconColor: 'text-amber-600' },
      { icon: 'Map', label: '2-Day Itinerary', sub: 'Complete explorer plan', bg: 'bg-gradient-to-br from-cyan-50 to-blue-50', iconColor: 'text-cyan-600' },
    ],
    gemsSubtitle: 'Eight extraordinary places in Jodhpur that go far beyond the mighty Mehrangarh Fort',
    itineraryTitle: 'Suggested 2-Day Jodhpur Explorer Itinerary',
    itinerarySubtitle: 'Go beyond the fort -- discover the Blue City\\&apos;s desert secrets over two unforgettable days',
    itineraryCols: '2',
    priceText: '2-day Jodhpur local cab: <strong>&#8377;2,500-3,500</strong> | From Jaipur: <strong>&#8377;6,000 sedan</strong> (2-day round trip)',
    linksTitle: 'More Jodhpur Guides & Tours',
    ctaTitle: 'Explore the Real Jodhpur with Locals',
    ctaSubtitle: 'We show you the Jodhpur that guidebooks miss. Desert parks, village safaris, stepwells, and secret lakes.',
  },
];

function extractInternalLinks(content) {
  // Find all href/title/desc triples in the interlinks section
  // Look for the section that has More X Guides
  const interlinksStart = content.indexOf('More ');
  if (interlinksStart === -1) return null;

  // Find the inline links array - search for the pattern {[ followed by { href:
  const arrayStart = content.indexOf('{[', interlinksStart - 200);
  if (arrayStart === -1) return null;

  const arrayEnd = content.indexOf('].map((link', arrayStart);
  if (arrayEnd === -1) return null;

  const rawLinks = content.substring(arrayStart + 2, arrayEnd);

  // Parse each link object
  const linkMatches = [...rawLinks.matchAll(/\{\s*href:\s*"(.*?)",\s*title:\s*"(.*?)",\s*desc:\s*"(.*?)"\s*\}/g)];
  const links = [];
  for (const m of linkMatches) {
    links.push({ href: m[1], title: m[2], desc: m[3] });
  }
  return links.length > 0 ? links : null;
}

function extractIntroText(content) {
  // Find the first occurrence of the intro paragraph (after trustFeatures section)
  const trustEnd = content.indexOf('trustFeatures');
  if (trustEnd === -1) return null;

  // Find the <p> tag with the intro text (first one after the intro h2)
  const pStart = content.indexOf('text-lg text-stone-600 leading-relaxed', trustEnd);
  if (pStart === -1) return null;

  // Find the closing > of the p tag
  const pTagEnd = content.indexOf('>', pStart);
  if (pTagEnd === -1) return null;

  // Find the closing </p> for this paragraph
  const pClose = content.indexOf('</p>', pTagEnd);
  if (pClose === -1) return null;

  let introText = content.substring(pTagEnd + 1, pClose).trim();
  // Normalize whitespace but preserve tags
  introText = introText.replace(/\r\n/g, '\n').replace(/\n\s+/g, ' ').trim();
  return introText;
}

function generatePremiumReturn(c) {
  const cols = c.itineraryCols;
  return `  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: \`
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
      \` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-teal-50/30">
        {/* Topographic pattern */}
        <div className="fixed inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage: \`url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q25 30 50 50 Q75 70 100 50' fill='none' stroke='%230d9488' stroke-width='0.5'/%3E%3Cpath d='M0 30 Q25 10 50 30 Q75 50 100 30' fill='none' stroke='%230d9488' stroke-width='0.3'/%3E%3Cpath d='M0 70 Q25 50 50 70 Q75 90 100 70' fill='none' stroke='%230d9488' stroke-width='0.3'/%3E%3C/svg%3E")\` }} />

        {/* HERO */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-teal-950 via-slate-900 to-cyan-950" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 15s ease infinite' }} />
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: \`url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30h60M30 0v60' stroke='%2314b8a6' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")\` }} />
          {/* Glow orbs */}
          <div className="absolute top-1/3 left-1/6 w-80 h-80 bg-teal-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 right-1/6 w-56 h-56 bg-amber-500/10 rounded-full blur-[100px]" />
          {/* Compass lines */}
          <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-500/10 to-transparent" />
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gradient-to-b from-transparent via-teal-500/10 to-transparent" />
          {/* Radar dots */}
          <div className="absolute top-[20%] left-[15%] w-3 h-3 bg-teal-400 rounded-full relative radar-dot" style={{ animation: 'float 6s ease-in-out infinite' }} />
          <div className="absolute top-[60%] right-[12%] w-2.5 h-2.5 bg-cyan-400 rounded-full relative radar-dot" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '1s' }} />
          <div className="absolute top-[35%] right-[25%] w-2 h-2 bg-amber-400/60 rounded-full" style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '2s' }} />
          <div className="absolute bottom-[35%] left-[25%] w-2.5 h-2.5 bg-teal-300/40 rounded-full" style={{ animation: 'float 9s ease-in-out infinite', animationDelay: '0.5s' }} />
          <div className="absolute top-[45%] left-[40%] w-2 h-2 bg-cyan-300/30 rounded-full" />
          {/* Compass rose */}
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
              <Link href={\`https://wa.me/917668570551?text=\${encodeURIComponent(whatsappText)}\`} className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-teal-400/30 hover:bg-white/20 hover:scale-105 transition-all duration-500">
                WhatsApp Us
              </Link>
            </div>
          </div>

          {/* Trust bar */}
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
                  <div key={i} className={\`\${s.bg} rounded-xl p-4 border border-teal-200/50 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center gap-3\`}>
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <s.icon className={\`w-5 h-5 \${s.iconColor}\`} />
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
                  <div className="absolute top-4 right-4" style={{ animation: 'pulse-discover 3s ease-in-out infinite', animationDelay: \`\${idx * 0.3}s\` }}>
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
            <div className="grid grid-cols-1 md:grid-cols-${cols} gap-6">
              {suggestedItineraries.map((day, idx) => (
                <div key={idx} className="hover-lift card-glow rounded-3xl overflow-hidden">
                  <div className={\`bg-gradient-to-br \${idx === 0 ? 'from-teal-600 to-cyan-600' : idx === 1 ? 'from-amber-500 to-orange-500' : 'from-violet-600 to-purple-600'} rounded-3xl p-1\`}>
                    <div className="bg-white rounded-[20px] p-6">
                      <h3 className={\`text-lg font-bold \${idx === 0 ? 'text-teal-700' : idx === 1 ? 'text-amber-700' : 'text-violet-700'} mb-5 flex items-center gap-3\`}>
                        <div className={\`w-10 h-10 bg-gradient-to-br \${idx === 0 ? 'from-teal-100 to-cyan-100' : idx === 1 ? 'from-amber-100 to-orange-100' : 'from-violet-100 to-purple-100'} rounded-xl flex items-center justify-center\`}>
                          <span className={\`\${idx === 0 ? 'text-teal-700' : idx === 1 ? 'text-amber-700' : 'text-violet-700'} font-bold text-sm\`}>0{idx + 1}</span>
                        </div>
                        {day.title}
                      </h3>
                      <div className="space-y-0.5">
                        {day.stops.map((stop, i) => (
                          <div key={i} className="flex items-start gap-2 text-stone-600 text-sm py-2 border-b border-stone-100/50 last:border-0 hover:bg-stone-50/50 hover:pl-2 transition-all duration-300 rounded">
                            <CheckCircle2 className={\`w-4 h-4 \${idx === 0 ? 'text-teal-500' : idx === 1 ? 'text-amber-500' : 'text-violet-500'} mt-0.5 flex-shrink-0\`} /> {stop}
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
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: \`url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q25 30 50 50 Q75 70 100 50' fill='none' stroke='%23fff' stroke-width='0.5'/%3E%3C/svg%3E")\` }} />
          {/* Floating radar dots */}
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
              <Link href={\`https://wa.me/917668570551?text=\${encodeURIComponent(whatsappText)}\`} className="inline-flex items-center justify-center gap-2 bg-teal-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-teal-400/30 hover:bg-teal-900/60 hover:scale-105 transition-all duration-500">
                WhatsApp Booking <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );`;
}

function processFile(dir, config) {
  const filePath = path.join(BASE, dir, 'page.js');
  let content = fs.readFileSync(filePath, 'utf-8');
  // Normalize line endings to \n for processing
  content = content.replace(/\r\n/g, '\n');

  // Extract internal links from existing JSX
  const links = extractInternalLinks(content);
  if (!links || links.length === 0) {
    console.log(`WARNING: Could not extract links from ${dir}`);
    return;
  }

  // Extract intro text
  const introText = extractIntroText(content);
  if (!introText) {
    console.log(`WARNING: Could not extract intro text from ${dir}`);
    return;
  }

  // Find the return statement
  const returnIdx = content.indexOf('  return (');
  if (returnIdx === -1) {
    console.log(`WARNING: Could not find return in ${dir}`);
    return;
  }

  // Find the closing of the function - handle both \n and \r\n
  let lastCloseParen = content.lastIndexOf('\n  );\n}');
  let closeLen = '\n  );\n}'.length;
  if (lastCloseParen === -1) {
    lastCloseParen = content.lastIndexOf('\r\n  );\r\n}');
    closeLen = '\r\n  );\r\n}'.length;
  }
  if (lastCloseParen === -1) {
    // Try just finding the last );  }
    const match = content.match(/\s+\);\s*\}\s*$/);
    if (match) {
      lastCloseParen = match.index;
      closeLen = match[0].length;
    }
  }
  if (lastCloseParen === -1) {
    console.log(`WARNING: Could not find closing in ${dir}`);
    return;
  }

  const beforeReturn = content.substring(0, returnIdx);
  const afterClose = content.substring(lastCloseParen + closeLen);

  // Build links array string
  const linksStr = links.map(l => `    { href: "${l.href}", title: "${l.title}", desc: "${l.desc}" }`).join(',\n');

  // Build intro stats string
  const statsStr = config.introStats.map(s =>
    `    { icon: ${s.icon}, label: "${s.label}", sub: "${s.sub}", bg: "${s.bg}", iconColor: "${s.iconColor}" }`
  ).join(',\n');

  // Build the variable declarations
  const vars = `  const internalLinks = [
${linksStr}
  ];

  const cityName = "${config.cityName}";
  const landmark = "${config.landmark}";
  const heroSubtitle = "${config.heroSubtitle}";
  const whatsappText = "${config.whatsappText}";
  const introTitle = "${config.introTitle}";
  const introText = <>${introText}</>;
  const introStats = [
${statsStr}
  ];
  const gemsSubtitle = "${config.gemsSubtitle}";
  const itineraryTitle = "${config.itineraryTitle}";
  const itinerarySubtitle = "${config.itinerarySubtitle}";
  const priceText = <>${config.priceText}</>;
  const linksTitle = "${config.linksTitle}";
  const ctaTitle = "${config.ctaTitle}";
  const ctaSubtitle = "${config.ctaSubtitle}";

`;

  const premiumReturn = generatePremiumReturn(config);

  const newContent = beforeReturn + vars + premiumReturn + '\n}\n' + afterClose;

  fs.writeFileSync(filePath, newContent, 'utf-8');
  console.log(`SUCCESS: ${dir} - transformed with ${links.length} links`);
}

// Process all configs
for (const config of configs) {
  try {
    processFile(config.dir, config);
  } catch (err) {
    console.log(`ERROR: ${config.dir} - ${err.message}`);
  }
}

console.log('\\nDone! All 9 standard beyond pages transformed.');
