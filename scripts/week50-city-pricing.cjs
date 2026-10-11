const assert = require('node:assert/strict');
const fs = require('node:fs');
const { load } = require('./week48-source-loader.cjs');
const before = JSON.parse(fs.readFileSync('reports/week50/03-before/city-fares.json', 'utf8'));
const current = load('src/utilis/cityRoutesData.js');
const { rateCardPrices } = load('src/utilis/cityRoutePricing.js');
const { distanceBookingHref } = load('src/lib/seo/distance-booking.js');
let routes = 0, correctedRows = 0, numericCorrections = 0, retainedGroupRows = 0;
const amount = value => Number(String(value).replace(/[^\d.]/g, ''));
for (const family of Object.keys(before)) {
  assert.deepEqual(Object.keys(current[family]), Object.keys(before[family]));
  for (const [city, originals] of Object.entries(before[family])) {
    const updated = current[family][city];
    assert.equal(updated.length, originals.length);
    originals.forEach((old, index) => {
      routes++;
      const now = updated[index];
      assert.deepEqual({ ...now, prices: undefined }, { ...old, prices: undefined });
      assert.equal(now.prices.length, old.prices.length);
      old.prices.forEach((row, i) => {
        const next = now.prices[i];
        assert.deepEqual({ ...next, price: undefined, roundTrip: undefined }, { ...row, price: undefined, roundTrip: undefined });
        if (!['Sedan', 'SUV Ertiga', 'SUV Innova'].includes(row.vehicle)) {
          assert.deepEqual(next, row); retainedGroupRows++;
        } else if (row.price !== next.price || row.roundTrip !== next.roundTrip) {
          correctedRows++;
          if (amount(row.price) !== amount(next.price) || amount(row.roundTrip) !== amount(next.roundTrip)) numericCorrections++;
        }
      });
      assert.deepEqual(rateCardPrices(now), now.prices, 'Normalization must be idempotent');
    });
  }
}
const short = rateCardPrices({ distance: '40 km', prices: [{ vehicle: 'Sedan' }, { vehicle: 'SUV Ertiga' }, { vehicle: 'SUV Innova' }] });
assert.deepEqual(short.map(r => r.price), ['₹2,200', '₹2,500', '₹2,800']);
const outstation = rateCardPrices({ distance: '240 km', prices: [{ vehicle: 'Sedan' }, { vehicle: 'SUV Ertiga' }, { vehicle: 'SUV Innova' }] });
assert.deepEqual(outstation.map(r => r.price), ['₹3,300', '₹4,500', '₹5,400']);
assert.deepEqual(outstation.map(r => r.roundTrip), ['₹5,280', '₹7,200', '₹8,640']);
for (const distance of ['unknown', '0 km', '20-30 km', 'about 200 km']) {
  const row = { distance, prices: [{ vehicle: 'Sedan', price: 'On request' }] };
  assert.equal(rateCardPrices(row), row.prices, 'Unknown/ambiguous distances must not invent prices');
}
assert.equal(distanceBookingHref({ oneWaySlug: 'delhi-to-agra', slug: 'delhi-to-agra' }, p => p === '/delhi-to-agra'), '/delhi-to-agra');
assert.equal(distanceBookingHref({ oneWaySlug: 'test-to-town', slug: 'test-to-town' }, p => p === '/test-to-town'), '/test-to-town');
assert.equal(distanceBookingHref({ oneWaySlug: 'test-to-town', slug: 'test-to-town' }, () => false), '#distance-enquiry');
const result = { routes, correctedRows, numericCorrections, formattingOnly: correctedRows - numericCorrections, retainedGroupRows, status: 'passed' };
fs.writeFileSync('reports/week50/03-city-pricing-tests.json', JSON.stringify(result, null, 2));
console.log(JSON.stringify(result));
