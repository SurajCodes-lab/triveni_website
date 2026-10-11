const assert = require('node:assert/strict');
const fs = require('node:fs');
const { load } = require('./week48-source-loader.cjs');
const { airportOnwardLinks } = load('src/lib/seo/airport-onward-links.js');
const { getCityData, getAllCitySlugs } = load('src/utilis/airportCityData.js');
const { routeExists } = load('src/lib/seo/route-exists.js');
let cards = 0;
const fallbacks = [];
for (const slug of getAllCitySlugs()) {
  const city = getCityData(slug), links = airportOnwardLinks(city);
  assert.deepEqual(links.map(l => l.label), city.routes || []);
  cards += links.length;
  for (const link of links) {
    assert(link.href === '#airport-enquiry' || routeExists(link.href));
    if (link.href.startsWith('#')) {
      assert(link.fromCity && link.toCity);
      fallbacks.push({ page: `/airport-service/${slug}`, ...link });
    }
  }
}
assert.equal(airportOnwardLinks({ name: 'Delhi', routes: ['Delhi to Agra'] }, p => p === '/delhi-to-agra')[0].href, '/delhi-to-agra');
assert.equal(airportOnwardLinks({ name: 'Hindon', routes: ['Hindon to Delhi'] }, () => false)[0].href, '#airport-enquiry');
fs.writeFileSync('reports/week50/06-airport-link-tests.json', JSON.stringify({ cards, fallbacks, status: 'passed' }, null, 2));
console.log(`PASS: ${cards} route cards preserved; ${fallbacks.length} use a route-specific enquiry rather than a missing page.`);
