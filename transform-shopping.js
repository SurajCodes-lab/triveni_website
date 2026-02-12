const fs = require('fs');
const path = require('path');

// All shopping guide pages that need premium redesign (excluding agra which is done)
const cities = [
  'jaipur',
  'varanasi',
  'lucknow',
  'udaipur',
  'amritsar',
  'jodhpur',
  'delhi',
  'shimla',
  'jaisalmer',
];

// Extract city-specific data from each file
function extractData(content, city) {
  // Get function name
  const funcMatch = content.match(/export default function (\w+)/);
  const funcName = funcMatch ? funcMatch[1] : '';

  // Get everything before `return (`
  const returnIdx = content.indexOf('  return (');
  const beforeReturn = content.substring(0, returnIdx);

  // Get everything after the closing `);` of the return + closing `}`
  // We need to find the last `  );` followed by `}`
  const afterReturn = '\n}\n';

  // Extract city name for headings
  const cityNames = {
    'jaipur': 'Jaipur',
    'varanasi': 'Varanasi',
    'lucknow': 'Lucknow',
    'udaipur': 'Udaipur',
    'amritsar': 'Amritsar',
    'jodhpur': 'Jodhpur',
    'delhi': 'Delhi',
    'shimla': 'Shimla',
    'jaisalmer': 'Jaisalmer',
  };
  const cityName = cityNames[city];

  // Extract hero description
  const heroDescMatch = content.match(/<p className="text-lg md:text-xl text-purple-100\/70 mb-10[^"]*">\s*([\s\S]*?)\s*<\/p>/);
  const heroDesc = heroDescMatch ? heroDescMatch[1].trim() : '';

  // Extract WhatsApp message
  const waMatch = content.match(/wa\.me\/917668570551\?text=([^"]+)/);
  const waMessage = waMatch ? waMatch[1] : `I want a cab for ${cityName} shopping tour`;

  // Extract categories subtitle
  const catSubMatch = content.match(/<p className="text-stone-500 text-center mb-12">(.*?)<\/p>/);
  const catSub = catSubMatch ? catSubMatch[1] : '';

  // Extract market areas subtitle
  const marketSubMatch = content.match(/<p className="text-purple-200\/60 text-center mb-12">(.*?)<\/p>/);
  const marketSub = marketSubMatch ? marketSubMatch[1] : '';

  // Extract combo items
  const comboMatch = content.match(/\{?\[([^\]]*?"Morning:[\s\S]*?)\]\.map/);
  let comboItems = [];
  if (comboMatch) {
    const comboStr = comboMatch[1];
    const itemMatches = comboStr.match(/"([^"]+)"/g);
    if (itemMatches) {
      comboItems = itemMatches.map(s => s.replace(/^"|"$/g, ''));
    }
  }

  // Extract combo price line
  const priceMatch = content.match(/<p className="text-purple-800 font-medium text-sm">(.*?)<\/p>/);
  const comboPrice = priceMatch ? priceMatch[1] : '';

  // Check if there's a SEO section
  const hasSeo = content.includes('bg-violet-50');
  let seoTitle = '';
  let seoContent = '';
  if (hasSeo) {
    const seoTitleMatch = content.match(/bg-violet-50[\s\S]*?<h2 className="text-3xl font-bold text-stone-800 mb-6 text-center">(.*?)<\/h2>/);
    seoTitle = seoTitleMatch ? seoTitleMatch[1] : '';

    // Extract SEO paragraphs
    const seoSectionMatch = content.match(/bg-violet-50[\s\S]*?<div className="prose prose-stone[^"]*">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>/);
    if (seoSectionMatch) {
      const seoParagraphs = seoSectionMatch[1].match(/<p>([\s\S]*?)<\/p>/g);
      if (seoParagraphs) {
        seoContent = seoParagraphs.map(p => p.replace(/<\/?p>/g, '').trim()).join('\n');
      }
    }
  }

  // Extract CTA title
  const ctaTitleMatch = content.match(/Need a[n]?\s+(\w+)\s+Shopping Tour\?/);
  const ctaTitle = ctaTitleMatch ? `Need ${ctaTitleMatch[0].startsWith('Need an') ? 'an' : 'a'} ${cityName} Shopping Tour?` : `Need a ${cityName} Shopping Tour?`;

  // Check if CTA uses "an" or "a"
  const ctaArticle = content.includes(`Need an ${cityName}`) ? 'an' : 'a';

  // Extract CTA description
  const ctaDescMatch = content.match(/Need (?:a|an) \w+ Shopping Tour\?<\/h2>\s*<p className="text-purple-200\/80 mb-8 text-lg">(.*?)<\/p>/);
  const ctaDesc = ctaDescMatch ? ctaDescMatch[1] : `Our drivers know the genuine shops. No commission, no scams, just the best of ${cityName}.`;

  // Extract interlinks title
  const interlinksTitleMatch = content.match(/<h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">(.*?)<\/h2>/);
  const interlinksTitle = interlinksTitleMatch ? interlinksTitleMatch[1] : `More ${cityName} Guides`;

  // Extract interlinks array
  const interlinksMatch = content.match(/(<h2 className="text-2xl font-bold text-stone-800 mb-8 text-center">[\s\S]*?\{?\[[\s\S]*?\{[^}]*href:[^}]*\}[\s\S]*?\])/);
  let interlinks = [];
  if (interlinksMatch) {
    const block = interlinksMatch[1];
    const linkMatches = block.match(/\{ href: "[^"]+", title: "[^"]+", desc: "[^"]+" \}/g);
    if (linkMatches) {
      interlinks = linkMatches.map(lm => {
        const h = lm.match(/href: "([^"]+)"/)[1];
        const t = lm.match(/title: "([^"]+)"/)[1];
        const d = lm.match(/desc: "([^"]+)"/)[1];
        return { href: h, title: t, desc: d };
      });
    }
  }

  return {
    funcName,
    beforeReturn,
    cityName,
    heroDesc,
    waMessage,
    catSub,
    marketSub,
    comboItems,
    comboPrice,
    hasSeo,
    seoTitle,
    seoContent,
    ctaArticle,
    ctaTitle,
    ctaDesc,
    interlinksTitle,
    interlinks,
  };
}

function generatePremiumReturn(data) {
  const { cityName, heroDesc, waMessage, catSub, marketSub, comboItems, comboPrice, hasSeo, seoTitle, seoContent, ctaArticle, ctaDesc, interlinksTitle, interlinks } = data;

  const comboItemsJsx = comboItems.map(item => `                    "${item}",`).join('\n');

  const interlinksJsx = interlinks.map(link =>
    `                { href: "${link.href}", title: "${link.title}", desc: "${link.desc}" },`
  ).join('\n');

  // Generate SEO section if exists
  let seoSection = '';
  if (hasSeo && seoContent) {
    const paragraphs = seoContent.split('\n').filter(p => p.trim());
    const seoParaJsx = paragraphs.map(p => `              <p>${p.trim()}</p>`).join('\n');
    seoSection = `
        {/* SEO Content */}
        <section className="py-20 px-4 bg-gradient-to-b from-violet-50 to-stone-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-8 text-center">${seoTitle}</h2>
            <div className="glass-card-light rounded-3xl p-8 md:p-10">
              <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed space-y-4">
${seoParaJsx}
              </div>
            </div>
          </div>
        </section>
`;
  }

  return `  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <style dangerouslySetInnerHTML={{ __html: \`
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(3deg); } }
        @keyframes shimmer { 0% { background-position: -200% center; } 100% { background-position: 200% center; } }
        @keyframes pulse-gem { 0%, 100% { box-shadow: 0 0 20px rgba(168,85,247,0.3); } 50% { box-shadow: 0 0 50px rgba(168,85,247,0.6); } }
        @keyframes gradient-shift { 0%, 100% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } }
        @keyframes sparkle { 0%, 100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 1; transform: scale(1.5); } }
        .glass-card { background: rgba(255,255,255,0.05); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1); }
        .glass-card-light { background: rgba(255,255,255,0.85); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); border: 1px solid rgba(255,255,255,0.3); box-shadow: 0 8px 32px rgba(0,0,0,0.06); }
        .shimmer-text { background: linear-gradient(90deg, #a855f7, #f0abfc, #a855f7); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: shimmer 3s linear infinite; }
        .hover-lift { transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); }
        .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 25px 50px -12px rgba(168,85,247,0.25); }
        .card-glow:hover { box-shadow: 0 0 30px rgba(168,85,247,0.15), 0 25px 50px -12px rgba(0,0,0,0.1); }
      \` }} />

      <div className="min-h-screen bg-stone-50">
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-violet-900 to-fuchsia-950" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 15s ease infinite' }} />
          <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px]" style={{ animation: 'float 8s ease-in-out infinite' }} />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-fuchsia-500/15 rounded-full blur-[120px]" style={{ animation: 'float 12s ease-in-out infinite 2s' }} />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-violet-400/10 rounded-full blur-[80px]" style={{ animation: 'float 10s ease-in-out infinite 4s' }} />
          <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-purple-300 rounded-full" style={{ animation: 'sparkle 3s ease-in-out infinite' }} />
          <div className="absolute top-[25%] right-[15%] w-3 h-3 bg-fuchsia-300 rounded-full" style={{ animation: 'sparkle 3s ease-in-out infinite 0.5s' }} />
          <div className="absolute bottom-[40%] left-[20%] w-1.5 h-1.5 bg-violet-300 rounded-full" style={{ animation: 'sparkle 3s ease-in-out infinite 1s' }} />
          <div className="absolute top-[50%] right-[25%] w-2.5 h-2.5 bg-amber-300 rounded-full" style={{ animation: 'sparkle 3s ease-in-out infinite 1.5s' }} />
          <div className="absolute bottom-[30%] left-[35%] w-2 h-2 bg-teal-300 rounded-full" style={{ animation: 'sparkle 3s ease-in-out infinite 2s' }} />
          <div className="absolute top-[35%] left-[45%] w-1.5 h-1.5 bg-pink-300 rounded-full" style={{ animation: 'sparkle 3s ease-in-out infinite 2.5s' }} />
          <div className="absolute bottom-[45%] right-[10%] w-2 h-2 bg-purple-200 rounded-full" style={{ animation: 'sparkle 3s ease-in-out infinite 0.8s' }} />
          <div className="absolute top-[60%] left-[8%] w-1.5 h-1.5 bg-fuchsia-200 rounded-full" style={{ animation: 'sparkle 3s ease-in-out infinite 1.8s' }} />

          <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-md px-6 py-2.5 rounded-full mb-8 border border-purple-400/30" style={{ animation: 'pulse-gem 3s ease-in-out infinite' }}>
              <Gem className="w-4 h-4 text-purple-300" />
              <span className="text-purple-200 font-semibold text-sm tracking-[0.15em] uppercase">Bazaar &amp; Market Guide</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
              ${cityName} <span className="shimmer-text">Shopping</span> Guide
            </h1>
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-purple-400/60" />
              <Crown className="w-6 h-6 text-purple-400" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-purple-400/60" />
            </div>
            <p className="text-lg md:text-xl text-purple-100/80 mb-10 max-w-3xl mx-auto leading-relaxed">
              ${heroDesc}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 hover:shadow-2xl transition-all duration-500">
                <Phone className="w-5 h-5" /> Call Now: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=${waMessage}" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-bold text-lg border border-purple-400/30 hover:bg-white/20 hover:scale-105 transition-all duration-500">
                WhatsApp Us
              </Link>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-purple-950/60 backdrop-blur-2xl border-t border-purple-500/20">
            <div className="max-w-6xl mx-auto px-4 py-5">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {trustFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/90">
                    <div className="p-2.5 bg-purple-500/20 backdrop-blur-sm rounded-xl border border-purple-400/20"><f.icon className="w-5 h-5 text-purple-300" /></div>
                    <div><div className="font-bold text-sm">{f.title}</div><div className="text-xs text-purple-200/60">{f.desc}</div></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Shopping Categories */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-3 text-center">What to Buy in ${cityName}</h2>
            <p className="text-stone-500 text-center mb-14">${catSub}</p>
            <div className="space-y-8">
              {shoppingCategories.map((cat, idx) => (
                <div key={idx} className="glass-card-light rounded-3xl overflow-hidden hover-lift card-glow">
                  <div className={\`h-2 bg-gradient-to-r \${cat.color}\`} />
                  <div className="p-8">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 gap-3">
                      <h3 className="text-xl font-bold text-stone-800 flex items-center gap-3">
                        <div className={\`w-10 h-10 bg-gradient-to-br \${cat.color} rounded-xl flex items-center justify-center shadow-lg\`}><Gem className="w-5 h-5 text-white" /></div>
                        {cat.name}
                      </h3>
                      <span className="bg-gradient-to-r from-purple-100 to-violet-100 text-purple-700 text-xs font-bold px-4 py-1.5 rounded-full border border-purple-200/50">{cat.tagline}</span>
                    </div>
                    <p className="text-stone-600 mb-6 leading-relaxed">{cat.desc}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-stone-700 text-sm mb-4 flex items-center gap-2"><Tag className="w-4 h-4 text-purple-500" /> Items &amp; Price Ranges</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {cat.items.map((item, i) => (
                            <div key={i} className="bg-gradient-to-r from-purple-50/80 to-violet-50/80 backdrop-blur-sm rounded-xl px-4 py-2.5 text-stone-600 text-sm border border-purple-100/50 hover:border-purple-300/50 hover:shadow-md transition-all duration-300">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-700 text-sm mb-4 flex items-center gap-2"><MapPin className="w-4 h-4 text-purple-500" /> Where to Buy</h4>
                        <p className="text-stone-600 text-sm mb-5">{cat.where}</p>
                        <div className="border-l-4 border-purple-500 bg-purple-50/80 backdrop-blur-sm rounded-xl p-4">
                          <p className="text-purple-800 text-sm"><strong>Local Tip:</strong> {cat.tip}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Market Areas */}
        <section className="py-20 px-4 bg-gradient-to-b from-purple-950 via-violet-950 to-purple-950">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-3 text-center">Best Shopping Areas in ${cityName}</h2>
            <p className="text-purple-200/60 text-center mb-14">${marketSub}</p>
            <div className="space-y-5">
              {marketAreas.map((m, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-start gap-5">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-xl flex-shrink-0 shadow-lg shadow-purple-500/25">
                      <span className="text-white font-bold text-lg">{idx + 1}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-white">{m.name}</h3>
                        <span className="bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 text-purple-200 rounded-full px-3 py-1 text-xs">{m.vibe}</span>
                      </div>
                      <p className="text-white/60 text-sm mb-3 leading-relaxed">{m.desc}</p>
                      <div className="flex flex-wrap gap-3 text-sm">
                        <span className="bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full text-purple-200 border border-white/10"><Clock className="w-3 h-3 inline mr-1.5" />{m.timings}</span>
                      </div>
                    </div>
                    <div className="md:w-52 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/10 backdrop-blur-sm rounded-xl p-4 flex-shrink-0 border border-purple-400/20">
                      <div className="text-purple-300 text-xs font-bold uppercase tracking-wider mb-1.5">Best For</div>
                      <div className="text-white text-sm font-medium">{m.bestFor}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bargaining Tips */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-3 text-center">Bargaining Tips from Locals</h2>
            <p className="text-stone-500 text-center mb-12">Eight rules that save our tourists money every single day</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {bargainingTips.map((item, i) => (
                <div key={i} className="glass-card-light rounded-2xl p-5 hover-lift card-glow flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/25">
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-stone-700 text-sm leading-relaxed pt-1">{item.tip}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Combo */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card-light rounded-3xl overflow-hidden">
              <div className="bg-gradient-to-r from-purple-700 via-fuchsia-600 to-purple-700 px-6 py-5" style={{ backgroundSize: '200% auto', animation: 'shimmer 4s linear infinite' }}>
                <h2 className="text-xl font-bold text-white flex items-center gap-2"><ShoppingBag className="w-5 h-5" /> Shopping + Sightseeing Combo</h2>
                <p className="text-purple-100/80 text-sm mt-1">Our drivers take you to genuine shops (we never take commission from any shop)</p>
              </div>
              <div className="p-8">
                <div className="space-y-2.5 mb-6">
                  {[
${comboItemsJsx}
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-stone-700 text-sm py-2 px-3 rounded-lg hover:bg-purple-50/50 transition-colors border-b border-purple-100/50 last:border-0">
                      <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0" /> {item}
                    </div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-xl p-5 border border-purple-200/50">
                  <p className="text-purple-800 font-semibold text-sm">${comboPrice}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
${seoSection}
        {/* FAQ */}
        <section className="py-20 px-4 bg-stone-50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-stone-800 mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, idx) => (
                <div key={idx} className="glass-card-light rounded-2xl p-6 hover:border-purple-300/50 hover:shadow-lg hover:shadow-purple-500/5 transition-all duration-500">
                  <h3 className="text-lg font-bold text-stone-800 mb-3 flex items-start gap-3">
                    <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-fuchsia-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 shadow-lg shadow-purple-500/20">
                      <Gem className="w-3.5 h-3.5 text-white" />
                    </div>
                    {faq.question}
                  </h3>
                  <p className="text-stone-600 ml-10 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interlinks */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-stone-800 mb-10 text-center">${interlinksTitle}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
${interlinksJsx}
              ].map((link, idx) => (
                <Link key={idx} href={link.href} className="glass-card-light rounded-xl p-4 hover:border-purple-400/50 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 group flex items-center gap-3">
                  <div className="bg-gradient-to-br from-purple-500/10 to-fuchsia-500/10 rounded-xl p-2.5 group-hover:from-purple-500/20 group-hover:to-fuchsia-500/20 transition-all"><ChevronRight className="w-4 h-4 text-purple-600" /></div>
                  <div><div className="font-bold text-stone-800 text-sm group-hover:text-purple-700 transition-colors">{link.title}</div><div className="text-xs text-stone-400">{link.desc}</div></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-violet-700 to-fuchsia-800" style={{ backgroundSize: '400% 400%', animation: 'gradient-shift 10s ease infinite' }} />
          <div className="absolute top-[20%] left-[15%] w-2 h-2 bg-white/30 rounded-full" style={{ animation: 'sparkle 3s ease-in-out infinite' }} />
          <div className="absolute top-[40%] right-[20%] w-1.5 h-1.5 bg-white/20 rounded-full" style={{ animation: 'sparkle 3s ease-in-out infinite 1s' }} />
          <div className="absolute bottom-[30%] left-[30%] w-2 h-2 bg-white/25 rounded-full" style={{ animation: 'sparkle 3s ease-in-out infinite 2s' }} />
          <div className="absolute top-[60%] right-[35%] w-1.5 h-1.5 bg-white/20 rounded-full" style={{ animation: 'sparkle 3s ease-in-out infinite 0.5s' }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <div style={{ animation: 'pulse-gem 3s ease-in-out infinite' }} className="inline-block mb-6">
              <Gem className="w-14 h-14 text-purple-200" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">Need ${ctaArticle} ${cityName} Shopping Tour?</h2>
            <p className="text-purple-100/80 mb-10 text-lg max-w-2xl mx-auto">${ctaDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:+917668570551" className="inline-flex items-center justify-center gap-2 bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500" style={{ animation: 'pulse-gem 3s ease-in-out infinite' }}>
                <Phone className="w-5 h-5" /> Call: 7668570551
              </Link>
              <Link href="https://wa.me/917668570551?text=${waMessage}" className="inline-flex items-center justify-center gap-2 bg-purple-900/40 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border border-purple-400/30 hover:bg-purple-900/60 hover:scale-110 hover:shadow-2xl transition-all duration-500">
                WhatsApp Us <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
`;
}

// Process each city
cities.forEach(city => {
  const filePath = path.join(__dirname, 'src', 'app', '(routes)', `${city}-shopping-guide`, 'page.js');

  if (!fs.existsSync(filePath)) {
    console.log(`SKIP: ${filePath} not found`);
    return;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const data = extractData(content, city);

  // Find where `return (` starts and replace everything from there to end of function
  const returnStart = content.indexOf('  return (');
  if (returnStart === -1) {
    console.log(`SKIP: ${city} - no return statement found`);
    return;
  }

  const beforeReturn = content.substring(0, returnStart);
  const newReturn = generatePremiumReturn(data);
  const newContent = beforeReturn + newReturn + '}\n';

  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`DONE: ${city}-shopping-guide (${newContent.length} bytes)`);
});

console.log('\nAll shopping guide pages transformed!');
