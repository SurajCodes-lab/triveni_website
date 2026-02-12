const fs = require('fs');
const path = require('path');

const basePath = path.join(__dirname, 'src', 'app', '(routes)');

// Cities to transform (skip agra, jaipur, varanasi - already done)
const cities = ['delhi', 'lucknow', 'amritsar', 'udaipur', 'jodhpur', 'mathura', 'pushkar', 'haridwar'];

function extractData(content, city) {
  const data = {};

  // City name (capitalize)
  data.cityName = city.charAt(0).toUpperCase() + city.slice(1);

  // Hero description - extract from <p className="text-lg text-orange-100/70
  const heroDescMatch = content.match(/<p className="text-lg text-orange-100\/70[^"]*"[^>]*>\s*([\s\S]*?)\s*<\/p>/);
  data.heroDesc = heroDescMatch ? heroDescMatch[1].trim() : `Taste ${data.cityName} through the eyes of locals.`;

  // WhatsApp message
  const waMatch = content.match(/wa\.me\/917668570551\?text=([^"]+)"/);
  data.whatsappMsg = waMatch ? waMatch[1] : `I want to book a ${data.cityName} food tour`;

  // Hero floating cards (3 cards)
  const heroCards = [];
  // Match pattern: emoji div, title div, subtitle div, price div - with various wrapper formats
  const cardRegex = /<div className="text-2xl mb-1">([^<]+)<\/div>\s*<div className="text-white font-bold">([^<]+)<\/div>\s*<div className="text-orange-300 text-sm">([^<]+)<\/div>\s*<div className="text-white\/60 text-xs mt-2">([^<]+)<\/div>/g;
  let cardMatch;
  while ((cardMatch = cardRegex.exec(content)) !== null) {
    heroCards.push({ emoji: cardMatch[1], title: cardMatch[2], subtitle: cardMatch[3], price: cardMatch[4] });
  }
  data.heroCards = heroCards.length >= 3 ? heroCards.slice(0, 3) : [
    { emoji: '🍽️', title: 'Famous Dish', subtitle: `${data.cityName} specialty`, price: '₹100-300' },
    { emoji: '🥘', title: 'Street Food', subtitle: 'Local favorite', price: '₹50-100' },
    { emoji: '🧁', title: 'Sweet Treat', subtitle: 'Traditional dessert', price: '₹30-80' },
  ];

  // Trust features subtitle
  const trustSubMatch = content.match(/title: "(?:.*?) Locals", desc: "([^"]+)"/);

  // SEO prose title
  const seoTitleMatch = content.match(/<h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-stone-800">\s*([\s\S]*?)\s*<\/h2>/);
  data.seoTitle = seoTitleMatch ? seoTitleMatch[1].trim() : `${data.cityName} Food Tour`;

  // SEO prose paragraphs
  const seoParagraphs = [];
  const seoSectionMatch = content.match(/<section className="py-20 px-4">([\s\S]*?)<\/section>/);
  if (seoSectionMatch) {
    const pRegex = /<p>([\s\S]*?)<\/p>/g;
    let pMatch;
    while ((pMatch = pRegex.exec(seoSectionMatch[1])) !== null) {
      seoParagraphs.push(pMatch[1]);
    }
  }

  // Famous Foods subtitle
  const foodsSubMatch = content.match(/Famous Foods of [^<]*<\/h2><p className="text-stone-500">([^<]+)<\/p>/);
  data.foodsSubtitle = foodsSubMatch ? foodsSubMatch[1] : `A culinary journey through ${data.cityName}`;

  // Itinerary price line
  const itiPriceMatch = content.match(/Full food tour with sedan cab:[\s\S]*?<\/p>/);
  data.itineraryPrice = itiPriceMatch ? itiPriceMatch[0] : `Full food tour with sedan cab: <strong className="text-white">₹1,500</strong>`;
  // Clean up: extract the actual text within the <p>
  const itiPriceInnerMatch = content.match(/<p className="text-orange-200\/80 text-sm">([\s\S]*?)<\/p>\s*<\/div>\s*<\/div>\s*<\/section>\s*(?:<section className="py-16 px-4">|$)/);

  // Restaurants title
  const restTitleMatch = content.match(/Best Restaurants (?:&amp; Cafes )?in ([^<]+)<\/h2>/);
  data.restaurantsTitle = restTitleMatch ? `Best Restaurants in ${restTitleMatch[1]}` : `Best Restaurants in ${data.cityName}`;
  // Check if there's "& Cafes" variant
  if (content.includes('Best Restaurants &amp; Cafes')) {
    const rcMatch = content.match(/Best Restaurants &amp; Cafes in ([^<]+)<\/h2>/);
    data.restaurantsTitle = rcMatch ? `Best Restaurants &amp; Cafes in ${rcMatch[1]}` : data.restaurantsTitle;
  }

  // Combine section title
  const combineTitle = content.match(/<Bookmark className="w-6 h-6" \/> ([^<]+)<\/h2>/);
  data.combineTitle = combineTitle ? combineTitle[1] : `Combine Food Tour with Sightseeing`;

  // Combine subtitle
  const combineSubMatch = content.match(/<p className="text-red-100 mt-1">([^<]+)<\/p>/);
  data.combineSubtitle = combineSubMatch ? combineSubMatch[1] : `Our recommended full-day recipe for the perfect ${data.cityName} experience`;

  // Combine items
  const combineItems = [];
  const combineRegex = /\["([^"]+(?:",\s*"[^"]+)*)"?\]/;
  // Better: extract from the actual array in the combo section
  const comboSectionMatch = content.match(/Combine Food Tour[\s\S]*?\[([^\]]+)\]\.map/);
  if (comboSectionMatch) {
    const itemsStr = comboSectionMatch[1];
    const itemRegex = /"([^"]+)"/g;
    let itemMatch;
    while ((itemMatch = itemRegex.exec(itemsStr)) !== null) {
      combineItems.push(itemMatch[1]);
    }
  }
  data.combineItems = combineItems;

  // Combine price line
  const combinePriceMatch = content.match(/<p className="text-red-800 text-sm font-medium">([^<]+)<\/p>/);
  data.combinePrice = combinePriceMatch ? combinePriceMatch[1] : `Sedan cab for this full day: ₹1,500`;

  // Interlinks title
  const interTitleMatch = content.match(/More ([^<]+) Guides<\/h2>/);
  data.interlinksTitle = interTitleMatch ? `More ${interTitleMatch[1]} Guides` : `More ${data.cityName} Guides`;

  // Interlinks array
  const interlinks = [];
  const interlinkSectionMatch = content.match(/More [^<]+ Guides<\/h2>\s*<div[^>]*>\s*\{\[([\s\S]*?)\]\.map/);
  if (interlinkSectionMatch) {
    const linkRegex = /\{\s*href:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*desc:\s*"([^"]+)"\s*\}/g;
    let linkMatch;
    while ((linkMatch = linkRegex.exec(interlinkSectionMatch[1])) !== null) {
      interlinks.push({ href: linkMatch[1], title: linkMatch[2], desc: linkMatch[3] });
    }
  }
  data.interlinks = interlinks;

  // CTA title
  const ctaTitleMatch = content.match(/Book Your ([^<]+) Food Tour<\/h2>/);
  data.ctaTitle = ctaTitleMatch ? `Book Your ${ctaTitleMatch[1]} Food Tour` : `Book Your ${data.cityName} Food Tour`;

  // CTA description
  const ctaDescMatch = content.match(/<p className="text-orange-100\/80 mb-8 text-lg">([^<]+)<\/p>/);
  data.ctaDesc = ctaDescMatch ? ctaDescMatch[1] : `Let our drivers take you to the best food spots in ${data.cityName}.`;

  // CTA WhatsApp (same as hero WhatsApp)
  // Already captured above

  return data;
}

function generatePremiumReturn(data) {
  const heroCardsJSX = data.heroCards.map((card, i) => {
    const transforms = ['rotate-3', '-rotate-2', 'rotate-1'];
    const positions = [
      'absolute top-0 right-8',
      'absolute top-24 left-0',
      'absolute bottom-0 right-16'
    ];
    const delays = ['7s', '8s', '9s'];
    const delayOffsets = ['', ' 1s', ' 2s'];
    return `                <div className="glass-card ${positions[i]} rounded-2xl p-5 w-52 transform ${transforms[i]}" style={{ animation: 'float ${delays[i]} ease-in-out infinite${delayOffsets[i]}' }}>
                  <div className="text-2xl mb-1">${card.emoji}</div>
                  <div className="text-white font-bold">${card.title}</div>
                  <div className="text-orange-300 text-sm">${card.subtitle}</div>
                  <div className="text-white/60 text-xs mt-2">${card.price}</div>
                </div>`;
  }).join('\n');

  const combineItemsJSX = data.combineItems.map(item => `"${item}"`).join(',');

  const interlinksJSX = data.interlinks.map(link =>
    `{ href: "${link.href}", title: "${link.title}", desc: "${link.desc}" }`
  ).join(',\n                ');

  return `  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: \`
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(5deg); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 20px rgba(249,115,22,0.3); } 50% { box-shadow: 0 0 40px rgba(249,115,22,0.6); } }
        @keyframes gradient-shift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .glass-card { background: rgba(255,255,255,0.05); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1); }
        .glass-card-light { background: rgba(255,255,255,0.8); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.3); }
        .shimmer-text { background: linear-gradient(90deg, #f97316, #fbbf24, #f97316); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer 3s linear infinite; }
        .hover-lift { transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
        .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 25px 50px -12px rgba(249,115,22,0.25); }
      \` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-orange-50">
        <div className="fixed inset-0 pointer-events-none opacity-[0.04]" style={{ backgroundImage: \`url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='20' cy='20' r='2' fill='%23c2410c'/%3E%3Ccircle cx='4' cy='4' r='1' fill='%23c2410c'/%3E%3Ccircle cx='36' cy='36' r='1' fill='%23c2410c'/%3E%3C/svg%3E")\` }} />

        {/* Hero - Immersive Animated Gradient */}
        <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-950 via-orange-950 to-amber-950" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 15s ease infinite' }} />
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-red-500/20 rounded-full blur-[100px]" style={{ animation: 'float 8s ease-in-out infinite' }} />
          <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-orange-500/20 rounded-full blur-[120px]" style={{ animation: 'float 10s ease-in-out infinite 2s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-amber-500/15 rounded-full blur-[80px]" style={{ animation: 'float 12s ease-in-out infinite 4s' }} />
          <div className="absolute top-[15%] left-[10%] w-3 h-3 bg-orange-400/40 rounded-full" style={{ animation: 'float 6s ease-in-out infinite' }} />
          <div className="absolute top-[25%] right-[15%] w-2 h-2 bg-red-400/50 rounded-full" style={{ animation: 'float 7s ease-in-out infinite 1s' }} />
          <div className="absolute bottom-[30%] left-[20%] w-2 h-2 bg-amber-400/60 rounded-full" style={{ animation: 'float 5s ease-in-out infinite 2s' }} />
          <div className="absolute top-[60%] right-[25%] w-3 h-3 bg-yellow-400/30 rounded-full" style={{ animation: 'float 8s ease-in-out infinite 3s' }} />
          <div className="absolute bottom-[20%] right-[10%] w-2 h-2 bg-red-300/40 rounded-full" style={{ animation: 'float 6s ease-in-out infinite 4s' }} />
          <div className="absolute top-[40%] left-[5%] w-1.5 h-1.5 bg-orange-300/50 rounded-full" style={{ animation: 'float 9s ease-in-out infinite 1.5s' }} />

          <div className="relative z-10 max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-red-500/20 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-red-400/30">
                  <Flame className="w-4 h-4 text-red-300" />
                  <span className="text-red-200 font-semibold text-sm tracking-wider uppercase">Culinary Guide 2026</span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  ${data.cityName} <span className="shimmer-text">Food</span> Tour
                </h1>
                <p className="text-lg text-orange-100/70 mb-8 leading-relaxed">
                  ${data.heroDesc}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white px-7 py-3.5 rounded-full font-bold shadow-xl shadow-red-500/20 hover:shadow-red-500/40 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                    <Phone className="w-5 h-5" /> Call: 7668570551
                  </Link>
                  <Link href="https://wa.me/917668570551?text=${data.whatsappMsg}" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-7 py-3.5 rounded-full font-bold border border-white/20 hover:bg-white/20 hover:scale-105 transition-all duration-500">
                    WhatsApp Booking
                  </Link>
                </div>
              </div>
              <div className="hidden md:block relative h-80">
${heroCardsJSX}
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-red-950/60 backdrop-blur-2xl border-t border-red-500/20">
            <div className="max-w-6xl mx-auto px-4 py-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {trustFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/90">
                    <div className="p-2 bg-red-500/20 rounded-lg backdrop-blur-sm"><f.icon className="w-5 h-5 text-red-300" /></div>
                    <div><div className="font-bold text-sm">{f.title}</div><div className="text-xs text-red-200/60">{f.desc}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SEO Prose */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-stone-800">
              ${data.seoTitle}
            </h2>
            <div className="space-y-5 text-stone-600 text-lg leading-relaxed">
              {seoContent}
            </div>
          </div>
        </section>

        {/* Famous Foods - Glassmorphism Cards */}
        <section className="py-16 px-4 bg-orange-50/80">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3">Famous Foods of ${data.cityName}</h2>
              <p className="text-stone-500">${data.foodsSubtitle}</p>
            </div>
            <div className="space-y-4">
              {famousFoods.map((food, idx) => (
                <div key={idx} className={\`hover-lift rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 \${food.mustTry ? 'border-l-4 border-l-red-500 bg-gradient-to-r from-red-50 to-orange-50 border border-red-200/50' : 'border border-stone-200 bg-white'}\`}>
                  <div className="flex-1 p-5 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-bold text-stone-800">{food.name}</h3>
                        {food.mustTry && <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}>MUST TRY</span>}
                        <div className="flex gap-0.5">
                          {[...Array(3)].map((_, i) => (
                            <Flame key={i} className={\`w-3.5 h-3.5 \${i < food.heat ? 'text-red-500' : 'text-stone-200'}\`} style={i < food.heat ? { opacity: 0.7 + (i * 0.15) } : {}} />
                          ))}
                        </div>
                      </div>
                      <span className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-red-200/50 text-red-600 font-bold text-sm whitespace-nowrap px-3 py-1 rounded-full">{food.price}</span>
                    </div>
                    <p className="text-stone-600 text-sm">{food.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Street Food Itinerary - Premium Timeline */}
        <section className="py-16 px-4 bg-gradient-to-b from-red-950 via-orange-950 to-red-950">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-3">Street Food Tour Itinerary</h2>
              <p className="text-red-200/70">Follow this route for the ultimate ${data.cityName} food crawl (our drivers know every stop)</p>
            </div>
            <div className="space-y-0">
              {streetFoodItinerary.map((stop, idx) => (
                <div key={idx} className="relative flex gap-5 md:gap-8">
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <div className={\`w-14 h-14 rounded-xl bg-gradient-to-br \${stop.color} flex items-center justify-center shadow-lg shadow-red-500/25 flex-shrink-0\`}>
                        <span className="text-white font-bold text-sm">{idx + 1}</span>
                      </div>
                      <div className="absolute -inset-1 bg-orange-500 rounded-xl opacity-0 hover:opacity-20 transition-opacity" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }} />
                    </div>
                    {idx < streetFoodItinerary.length - 1 && (
                      <div className="w-0.5 flex-1 my-1 bg-gradient-to-b from-orange-500 via-red-500 to-amber-500" style={{ minHeight: '24px' }} />
                    )}
                  </div>
                  <div className="glass-card rounded-2xl p-6 mb-4 flex-1 hover:bg-white/10 hover:border-orange-500/30 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono text-orange-300 font-bold text-sm bg-orange-500/10 backdrop-blur-sm px-2 py-0.5 rounded">{stop.time}</span>
                      <div className="h-px flex-1 bg-white/10" />
                    </div>
                    <h3 className="text-white font-bold text-lg mb-0.5">{stop.stop}</h3>
                    <p className="text-orange-300 font-medium text-sm mb-2">{stop.food}</p>
                    <p className="text-white/60 text-sm">{stop.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              {itineraryPriceContent}
            </div>
          </div>
        </section>

        {/* Best Restaurants - Premium Card Grid */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-10 text-center">${data.restaurantsTitle}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {restaurants.map((r, idx) => (
                <div key={idx} className="glass-card-light rounded-2xl overflow-hidden hover-lift group">
                  <div className="h-1.5 bg-gradient-to-r from-red-500 via-orange-500 to-amber-500" />
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-stone-800">{r.name}</h3>
                      <div className="bg-gradient-to-r from-amber-400 to-orange-400 text-white rounded-full px-3 py-1 shadow-lg shadow-amber-500/25 flex items-center gap-1">
                        <Star className="w-3 h-3 fill-white" />
                        <span className="text-xs font-bold">{r.rating}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1.5 text-xs mb-3">
                      <span className="bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-red-200/50 text-red-700 px-2 py-0.5 rounded-full font-medium">{r.cuisine}</span>
                      <span className="bg-gradient-to-r from-emerald-500/10 to-green-500/10 backdrop-blur-sm border border-emerald-200/50 text-emerald-700 px-2 py-0.5 rounded-full font-medium">{r.budget}/person</span>
                    </div>
                    <p className="text-stone-400 text-xs mb-2 flex items-center gap-1"><MapPin className="w-3 h-3 text-red-400" /> {r.location}</p>
                    <p className="text-stone-600 text-sm">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Markets - Glass Map Cards */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-10 text-center">Food Markets to Visit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {markets.map((m, idx) => (
                <div key={idx} className="glass-card-light rounded-2xl p-6 hover-lift relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-red-200/40 to-transparent" />
                  <div className="absolute top-3 right-3 w-8 h-8 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-lg">{idx + 1}</div>
                  <h3 className="font-bold text-stone-800 mb-2 flex items-center gap-2 relative">
                    <ShoppingBag className="w-4 h-4 text-red-600" /> {m.name}
                  </h3>
                  <p className="text-stone-600 text-sm mb-3 relative">{m.desc}</p>
                  <div className="flex items-center gap-2 relative">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full flex items-center gap-1"><Tag className="w-3 h-3" /> Best for</span>
                    <p className="text-red-700 text-sm font-medium">{m.bestFor}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Combine with Sightseeing */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card-light rounded-2xl overflow-hidden shadow-xl">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 p-6" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 10s ease infinite' }}>
                <h2 className="text-2xl font-bold text-white flex items-center gap-2"><Bookmark className="w-6 h-6" /> ${data.combineTitle}</h2>
                <p className="text-red-100 mt-1">${data.combineSubtitle}</p>
              </div>
              <div className="p-6">
                <div className="space-y-2">
                  {[${combineItemsJSX}].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-700 text-sm py-1.5 border-b border-stone-100 last:border-0">
                      <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <div className="mt-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-4 border border-red-200/50">
                  <p className="text-red-800 text-sm font-medium">${data.combinePrice}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ - Expandable-looking Cards */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-10 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {faqData.map((faq, idx) => (
                <div key={idx} className="glass-card-light rounded-2xl p-6 hover:border-red-300/50 hover:shadow-lg hover:shadow-red-500/5 transition-all duration-500">
                  <h3 className="font-bold text-stone-800 mb-2 text-sm flex items-start gap-2">
                    <span className="bg-gradient-to-br from-red-500 to-orange-500 rounded-full p-1.5 flex-shrink-0 mt-0.5"><Flame className="w-3 h-3 text-white" /></span>
                    {faq.question}
                  </h3>
                  <p className="text-stone-600 text-sm ml-8">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interlinks - Interactive Grid */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">${data.interlinksTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {[
                ${interlinksJSX}
              ].map((link, idx) => (
                <Link key={idx} href={link.href} className="glass-card-light flex items-center gap-3 p-4 rounded-xl hover:border-red-400/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 group">
                  <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-xl p-2.5 group-hover:from-red-500/20 group-hover:to-orange-500/20 transition-all"><ChevronRight className="w-4 h-4 text-red-600 group-hover:translate-x-1 transition-transform" /></div>
                  <div><div className="font-bold text-stone-800 text-sm group-hover:text-red-700 transition-colors">{link.title}</div><div className="text-xs text-stone-400">{link.desc}</div></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA - Animated Gradient */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-700 via-orange-600 to-amber-600" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 10s ease infinite' }} />
          <div className="absolute top-[20%] left-[10%] w-3 h-3 bg-white/20 rounded-full" style={{ animation: 'float 6s ease-in-out infinite' }} />
          <div className="absolute top-[60%] right-[15%] w-2 h-2 bg-white/15 rounded-full" style={{ animation: 'float 8s ease-in-out infinite 2s' }} />
          <div className="absolute bottom-[30%] left-[30%] w-2 h-2 bg-white/10 rounded-full" style={{ animation: 'float 7s ease-in-out infinite 1s' }} />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: \`url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='15' cy='15' r='1.5' fill='%23fff'/%3E%3C/svg%3E")\` }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <Utensils className="w-12 h-12 text-orange-200 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">${data.ctaTitle}</h2>
            <p className="text-orange-100/80 mb-8 text-lg">${data.ctaDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-red-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}>
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=${data.whatsappMsg}" className="inline-flex items-center justify-center gap-2 bg-red-900/40 text-white px-8 py-4 rounded-full font-bold text-lg border border-red-400/30 hover:bg-red-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">
                WhatsApp Booking <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}`;
}

function processFile(city) {
  const filePath = path.join(basePath, `${city}-food-tour`, 'page.js');

  if (!fs.existsSync(filePath)) {
    console.log(`SKIP: ${filePath} does not exist`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');

  // Check if already premium
  if (content.includes('shimmer-text') && content.includes('@keyframes float')) {
    console.log(`SKIP: ${city} already has premium design`);
    return;
  }

  // Extract data
  const data = extractData(content, city);

  // Find the return statement
  const returnIndex = content.indexOf('  return (');
  if (returnIndex === -1) {
    console.log(`ERROR: Could not find return statement in ${city}`);
    return;
  }

  // Keep everything before return
  const beforeReturn = content.substring(0, returnIndex);

  // Now we need to extract the SEO content and itinerary price content from the original file
  // because they contain JSX that we need to preserve as-is

  // Extract SEO content (the paragraphs in the SEO section)
  const seoSectionMatch = content.match(/<section className="py-20 px-4">([\s\S]*?)<\/section>/);
  let seoContent = '';
  if (seoSectionMatch) {
    // Extract just the paragraphs from the space-y-5 div
    const paragraphsMatch = seoSectionMatch[1].match(/<div className="space-y-5 text-stone-600 text-lg leading-relaxed">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/) ||
                            seoSectionMatch[1].match(/<div className="space-y-5 text-stone-600 text-lg leading-relaxed">([\s\S]*?)<\/div>/);
    if (paragraphsMatch) {
      seoContent = paragraphsMatch[1].trim();
    }
  }

  // Extract itinerary price content
  const itiPriceLineMatch = content.match(/<div className="text-center mt-8">\s*(<p className="text-orange-200\/80 text-sm">[\s\S]*?<\/p>)\s*<\/div>\s*<\/div>\s*<\/section>\s*(?:<section|$)/);
  let itineraryPriceContent = '';
  if (itiPriceLineMatch) {
    itineraryPriceContent = itiPriceLineMatch[1].trim();
  } else {
    // Fallback: try a broader match
    const fallbackMatch = content.match(/<p className="text-orange-200\/80 text-sm">([\s\S]*?)<\/p>/);
    if (fallbackMatch) {
      itineraryPriceContent = `<p className="text-orange-200/80 text-sm">${fallbackMatch[1]}</p>`;
    }
  }

  // Generate the premium JSX
  let premiumReturn = generatePremiumReturn(data);

  // Replace placeholders with extracted content
  premiumReturn = premiumReturn.replace('{seoContent}', seoContent);
  premiumReturn = premiumReturn.replace('{itineraryPriceContent}', itineraryPriceContent);

  // Find closing of the function
  const funcName = content.match(/export default function (\w+)/);

  const newContent = beforeReturn + premiumReturn + '\n}\n';

  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`SUCCESS: ${city} - Premium design applied (${newContent.length} chars)`);
}

// Process all cities
cities.forEach(city => {
  try {
    processFile(city);
  } catch (e) {
    console.error(`ERROR processing ${city}:`, e.message);
  }
});

console.log('\nDone! All food tour pages transformed.');
