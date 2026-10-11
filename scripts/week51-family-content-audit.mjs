#!/usr/bin/env node
// Family-level content and keyword-coverage audit.
//
// Purpose: decide WHERE content enhancement is actually needed, per page family,
// before writing any. The Week 51 plan forbids mechanical word-count expansion
// and city-name substitution, so the only defensible way to enhance at family
// scale is to find the families that are genuinely missing an intent answer and
// leave the ones that already answer it alone.
//
// For each family this reports what fraction of its pages carry each content
// element, and what fraction address each of the family's real search intents.
// Reads the local build only. Writes outside the repository.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = 'D:/Desktop/triveni_next/2.0/week51/family-content';
const APP = path.join(ROOT, '.next/server/app');

// Families by URL shape. Order matters — first match wins.
const FAMILIES = [
  ['Toll', /^\/toll-cost\//],
  ['Distance', /^\/distance\//],
  ['One-way cab', /^\/one-way-cab\//],
  ['Group vehicle', /^\/(tempo-traveller|force-urbania|maharaja-tempo-traveller|bus-routes|\d+-seater)/],
  ['Airport / station', /^\/(airport-service|railway-station-taxi|train-taxi|bus-stand)\//],
  ['Guide / blog', /^\/blog\//],
  ['Weekend / nearby', /^\/(places-to-visit-near|weekend-getaways)/],
  ['Sightseeing', /^\/sightseeing\//],
  ['Religious tours', /^\/religious-tours\//],
  ['City service', /^\/(cab-service|local-taxi|outstation-cabs|taxi-fare|wedding|event-transportation-service)\//],
  ['Corridor / route', /^\/[a-z0-9-]+-to-[a-z0-9-]+$/],
  ['City hub', /^\/[a-z0-9-]+$/],
];

// Real search intents per family, as phrase groups. A page "addresses" an intent
// if any phrase in the group appears in its headings or body. These are intent
// probes, not a ranking claim.
const INTENTS = {
  'Toll': {
    'toll total': ['total toll', 'toll cost', 'toll charges'],
    'plaza list': ['plaza', 'toll gate'],
    'fastag': ['fastag', 'fas tag'],
    'vehicle class': ['vehicle class', 'car/jeep', 'toll category', 'vehicle category'],
    'return trip': ['return journey', 'return trip', 'round trip'],
  },
  'Distance': {
    'distance km': ['km', 'kilometre', 'kilometer'],
    'drive time': ['hours', 'drive time', 'travel time', 'journey time'],
    'route / highway': ['highway', 'nh-', 'nh ', 'via', 'expressway'],
    'fuel cost': ['fuel cost', 'petrol', 'diesel', 'mileage'],
    'stops / breaks': ['stop', 'break', 'dhaba', 'rest'],
  },
  'One-way cab': {
    'one-way fare': ['one way', 'one-way'],
    'no return charge': ['no return', 'return fare', 'without return'],
    'vehicle options': ['sedan', 'ertiga', 'innova'],
    'pickup / drop': ['pickup', 'drop'],
    'inclusions': ['included', 'inclusive', 'toll', 'gst'],
  },
  'Group vehicle': {
    'seating': ['seater', 'seats', 'passenger'],
    'per-day / per-km rate': ['per day', '/day', 'per km', '/km'],
    'luggage': ['luggage', 'bags', 'suitcase'],
    'itinerary / outstation': ['outstation', 'itinerary', 'multi-day', 'overnight'],
    'driver / permit': ['driver', 'permit', 'allowance'],
  },
  'Airport / station': {
    'terminal': ['terminal', 't1', 't2', 't3'],
    'meet point': ['pickup point', 'meeting point', 'arrival', 'gate'],
    'flight / train delay': ['delay', 'waiting', 'wait time'],
    'fare': ['fare', 'price', 'rate'],
    'luggage': ['luggage', 'bags'],
  },
  'Guide / blog': {
    'timings': ['timing', 'opens', 'open from', 'closing'],
    'entry fee': ['entry fee', 'ticket', 'entry price', 'free'],
    'best time': ['best time', 'best season', 'avoid'],
    'how to reach': ['how to reach', 'getting there', 'nearest'],
    'time needed': ['hours', 'time needed', 'how long'],
  },
  'Weekend / nearby': {
    'distance from city': ['km', 'distance'],
    'how many days': ['day trip', 'overnight', '2 days', 'weekend'],
    'things to do': ['things to do', 'visit', 'see'],
    'best season': ['best time', 'season', 'monsoon', 'winter'],
    'cab cost': ['fare', 'cost', 'price'],
  },
  'Sightseeing': {
    'itinerary': ['itinerary', 'day 1', 'schedule'],
    'duration': ['hours', 'duration', 'full day', 'half day'],
    'inclusions': ['included', 'inclusive'],
    'price': ['fare', 'price', '₹'],
    'pickup': ['pickup', 'hotel pickup'],
  },
  'Religious tours': {
    'darshan / timings': ['darshan', 'timing', 'aarti', 'puja'],
    'itinerary': ['itinerary', 'day 1'],
    'best season': ['best time', 'season', 'portal', 'yatra season'],
    'how to reach': ['how to reach', 'nearest airport', 'nearest station'],
    'price': ['fare', 'price', '₹'],
  },
  'City service': {
    'local rate': ['per km', '/km', 'package', 'per day'],
    'coverage area': ['area', 'locality', 'nearby'],
    'vehicle options': ['sedan', 'suv', 'tempo'],
    'booking': ['book', 'whatsapp', 'call'],
    'inclusions': ['included', 'toll', 'gst'],
  },
  'Corridor / route': {
    'fare': ['fare', 'price', '₹'],
    'distance + time': ['km', 'hours'],
    'vehicle options': ['sedan', 'ertiga', 'innova', 'tempo'],
    'one-way vs round': ['one way', 'round trip'],
    'inclusions': ['included', 'toll', 'gst', 'driver'],
  },
  'City hub': {
    'services offered': ['outstation', 'local', 'airport'],
    'popular routes': ['popular route', 'to agra', 'to jaipur', 'routes from'],
    'rates': ['per km', '/km', 'fare', '₹'],
    'vehicles': ['sedan', 'suv', 'tempo'],
    'contact': ['whatsapp', 'call'],
  },
};

const walk = (dir) => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => {
  const p = path.join(dir, e.name);
  return e.isDirectory() ? walk(p) : [p];
});
const unescape = s => s.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
  .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&nbsp;/g, ' ').replace(/&#x27;/g, "'");
const collapse = s => s.replace(/\s+/g, ' ').trim();

const famOf = (url) => (FAMILIES.find(([, re]) => re.test(url)) || ['Other', null])[0];

const stats = new Map();
const bump = (fam, key, n = 1) => {
  if (!stats.has(fam)) stats.set(fam, { pages: 0, el: {}, intent: {}, words: [], h2: [] });
  const s = stats.get(fam);
  if (key) s.el[key] = (s.el[key] || 0) + n;
  return s;
};

for (const file of walk(APP).filter(f => f.endsWith('.html'))) {
  const url = '/' + path.relative(APP, file).split(path.sep).join('/').slice(0, -5);
  if (url.startsWith('/_')) continue;
  const html = fs.readFileSync(file, 'utf8');
  const fam = famOf(url);
  const s = bump(fam, null);
  s.pages++;

  const noScript = html.replace(/<script\b(?![^>]*application\/ld\+json)[^>]*>[\s\S]*?<\/script>/gi, '')
                       .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '');
  const visible = noScript.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
  const text = collapse(unescape(visible.replace(/<[^>]+>/g, ' '))).toLowerCase();
  const headings = [...visible.matchAll(/<h[2-4]\b[^>]*>([\s\S]*?)<\/h[2-4]>/g)]
    .map(m => collapse(unescape(m[1].replace(/<[^>]+>/g, ' ')))).join(' ~ ').toLowerCase();
  const hay = headings + ' ~ ' + text;

  s.words.push(text ? text.split(' ').length : 0);
  s.h2.push([...visible.matchAll(/<h2\b/g)].length);

  // Content elements
  if (/id="journey-planning"/.test(html)) bump(fam, 'journey-planning block');
  if (/quick\s*answer/i.test(hay)) bump(fam, 'quick answer');
  if (/"@type":"FAQPage"/.test(html)) bump(fam, 'FAQ schema');
  if (/<table\b/.test(visible)) bump(fam, 'data table');
  if (/"@type":"(Product|Offer|Service)"/.test(html)) bump(fam, 'offer/service schema');
  if (/"@type":"BreadcrumbList"/.test(html)) bump(fam, 'breadcrumb schema');
  if (/"@type":"(Article|BlogPosting)"/.test(html)) bump(fam, 'article schema');
  if (/"@type":"HowTo"/.test(html)) bump(fam, 'howto schema');
  if (/speakable/.test(html)) bump(fam, 'speakable markup');
  const internal = new Set([...visible.matchAll(/href="(\/[^"#?]*)"/g)].map(m => m[1]));
  if (internal.size >= 10) bump(fam, '10+ internal links');

  // Intent coverage
  const probes = INTENTS[fam];
  if (probes) {
    for (const [intent, phrases] of Object.entries(probes)) {
      if (phrases.some(p => hay.includes(p))) {
        s.intent[intent] = (s.intent[intent] || 0) + 1;
      }
    }
  }
}

const med = a => { if (!a.length) return 0; const b = [...a].sort((x, y) => x - y); return b[Math.floor(b.length / 2)]; };
const pct = (n, d) => d ? Math.round((n / d) * 100) : 0;

const report = [...stats.entries()]
  .sort((a, b) => b[1].pages - a[1].pages)
  .map(([fam, s]) => ({
    family: fam,
    pages: s.pages,
    medianWords: med(s.words),
    medianH2: med(s.h2),
    elements: Object.fromEntries(Object.entries(s.el).map(([k, v]) => [k, `${pct(v, s.pages)}%`])),
    intentCoverage: Object.fromEntries(Object.entries(INTENTS[fam] || {})
      .map(([k]) => [k, `${pct(s.intent[k] || 0, s.pages)}%`])),
    weakestIntents: Object.entries(INTENTS[fam] || {})
      .map(([k]) => [k, pct(s.intent[k] || 0, s.pages)])
      .filter(([, p]) => p < 60).sort((a, b) => a[1] - b[1]).map(([k, p]) => `${k} (${p}%)`),
  }));

fs.mkdirSync(OUT, { recursive: true });
fs.writeFileSync(path.join(OUT, 'family-content-audit.json'), JSON.stringify({
  createdAt: new Date().toISOString(),
  scope: 'Local build. Intent probes are phrase presence, not ranking or quality measures.',
  families: report,
  limits: [
    'Phrase presence does not prove the intent is answered WELL, only that it is addressed.',
    'A low percentage is a prompt to look, not proof a page is deficient.',
    'Adding a phrase to satisfy a probe would be keyword stuffing and is not the goal.',
  ],
}, null, 2) + '\n');

for (const r of report) {
  console.log(`\n=== ${r.family} — ${r.pages} pages (median ${r.medianWords} words, ${r.medianH2} h2) ===`);
  console.log('  elements:', Object.entries(r.elements).map(([k, v]) => `${k} ${v}`).join(', ') || 'none');
  if (r.weakestIntents.length) console.log('  WEAKEST INTENTS:', r.weakestIntents.join(', '));
  else if (Object.keys(r.intentCoverage).length) console.log('  all probed intents >=60%');
}
