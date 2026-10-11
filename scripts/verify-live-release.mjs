import fs from 'node:fs/promises';

const origin = 'https://www.trivenicabs.in';
const routes = ['/', '/delhi', '/delhi-to-agra', '/one-way-cab/agra-to-jaipur', '/round-trip/agra-to-jaipur', '/distance/agra-to-jaipur', '/toll-cost/delhi-to-agra', '/tempo-traveller/agra'];
const results = [];
const assets = new Set();
for (const route of routes) {
  const response = await fetch(`${origin}${route}`, { signal: AbortSignal.timeout(30000), headers: { 'Cache-Control': 'no-cache' } });
  const html = await response.text();
  const result = { route, status: response.status, h1Count: (html.match(/<h1[\s>]/g) || []).length };
  if (route === '/') {
    result.newHeadline = html.includes('Outstation cabs.');
    result.background = html.includes('HERO_SECTION_MAIN_PAGE');
    result.nativeFaq = html.includes('<details');
    if (!result.newHeadline || !result.background || !result.nativeFaq) process.exitCode = 1;
  }
  if (route === '/round-trip/agra-to-jaipur') {
    result.redesignedFares = html.includes('id="round-trip-fares"');
    result.nativeItinerary = html.includes('<details') && html.includes('id="round-trip-itinerary"');
    if (!result.redesignedFares || !result.nativeItinerary) process.exitCode = 1;
  }
  for (const asset of html.matchAll(/(?:src|href)="([^"<>]*\/_next\/static\/[^"<>]+\.(?:js|css))"/g)) {
    assets.add(new URL(asset[1].replaceAll('&amp;', '&'), origin).href);
  }
  if (response.status !== 200 || result.h1Count !== 1) process.exitCode = 1;
  results.push(result);
}
const assetResults = [];
const pending = [...assets];
for (let index = 0; index < pending.length; index += 5) {
  assetResults.push(...await Promise.all(pending.slice(index, index + 5).map(async url => {
    const response = await fetch(url, { method: 'HEAD', signal: AbortSignal.timeout(30000) });
    if (response.status !== 200) process.exitCode = 1;
    return { url, status: response.status };
  })));
}
const imageResponse = await fetch(`${origin}/images/HERO_SECTION_MAIN_PAGE.jpg`, { method: 'HEAD', signal: AbortSignal.timeout(30000) });
if (imageResponse.status !== 200) process.exitCode = 1;
const report = { checkedAt: new Date().toISOString(), routes: results, assets: assetResults, backgroundImageStatus: imageResponse.status };
await fs.writeFile('reports/home-redesign/live-release-verification.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify({ ...report, assets: { checked: assetResults.length, failures: assetResults.filter(a => a.status !== 200) } }, null, 2));
