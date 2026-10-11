import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
const origin = 'https://www.trivenicabs.in';
const build = 'F4QJyliCYo1kBpt2rLuNX';
const paths = ['/', '/delhi', '/rishikesh', '/delhi-to-agra', '/distance/delhi-to-agra', '/distance/wagah-border-to-golden-temple', '/round-trip/agra-to-jaipur', '/tempo-traveller/agra', '/airport-service/hindon'];
const pages = [], chunks = new Set();
for (const route of paths) {
  const response = await fetch(`${origin}${route}?release_check=${build}`, { signal: AbortSignal.timeout(30000) });
  const html = await response.text();
  const missing = ['ga4-lib', 'ga-init', 'analytics-bootstrap', 'gtm-loader', 'google-site-verification'].filter(s => !html.includes(s));
  const result = { route, status: response.status, missingTrackingMarkers: missing, h1: (html.match(/<h1[\s>]/g) || []).length };
  assert.equal(response.status, 200, route);
  assert.equal(result.h1, 1, route);
  assert.deepEqual(missing, [], route);
  if (route === '/distance/delhi-to-agra') {
    result.separateInnova = html.includes('Innova Crysta') && html.includes('₹5,400') && html.includes('₹18/km');
    assert(result.separateInnova);
  }
  if (route === '/delhi-to-agra') {
    result.stableOneWayAnswer = html.includes('The one-way sedan fare is');
    assert(result.stableOneWayAnswer);
  }
  if (route === '/distance/wagah-border-to-golden-temple') {
    result.formLinks = (html.match(/href="#distance-enquiry"/g) || []).length;
    assert.equal(result.formLinks, 2);
    assert(html.includes('id="distance-enquiry"'));
  }
  for (const m of html.matchAll(/(?:src|href)="([^"<>]*\/_next\/static\/[^"<>]+\.(?:js|css))"/g)) chunks.add(new URL(m[1].replaceAll('&amp;', '&'), origin).href);
  pages.push(result);
}
const assetResults = [];
const urls = [...chunks, origin + '/images/car/ertiga.jpg', origin + '/images/car/innova_crysta.jpg'];
for (let i = 0; i < urls.length; i += 8) {
  assetResults.push(...await Promise.all(urls.slice(i, i + 8).map(async url => {
    const response = await fetch(url, { method: 'HEAD', signal: AbortSignal.timeout(30000) });
    return { url, status: response.status };
  })));
}
const report = { checkedAt: new Date().toISOString(), expectedBuild: build, pages, assets: assetResults, note: 'GET/HEAD only. No leads submitted or analytics events executed. Marker presence is not account receipt.' };
await fs.writeFile('reports/week50/05-live-verification.json', JSON.stringify(report, null, 2));
assert(assetResults.every(r => r.status === 200), 'All referenced assets must load');
console.log(`PASS: ${pages.length} public pages, tracking markers, pricing, booking links and ${assetResults.length} assets verified.`);
