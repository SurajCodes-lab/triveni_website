// Check every forward and reverse distance route against the existing policy.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { load } = require('./week48-source-loader.cjs');
const root = path.resolve(__dirname, '..');
const before = JSON.parse(fs.readFileSync(path.join(root, 'reports/week50/01-initial/distance-fares-before.json'), 'utf8'));
const { getDistanceRoute, getAllDistanceRouteSlugs } = load('src/utilis/distanceData.js');
const { fareFor, rupees } = load('src/utilis/pricing.js');
assert.deepEqual([...getAllDistanceRouteSlugs()].sort(), before.map(r => r.slug).sort(), 'Route set must be preserved.');
for (const original of before) {
  const route = getDistanceRoute(original.slug);
  assert.equal(route.distance.km, original.km, original.slug);
  for (const [vehicle, fare] of Object.entries(original.fares)) assert.equal(route.cabFares[vehicle], fare, `${original.slug}: preserve existing ${vehicle} fare`);
  assert.equal(route.cabFares.innova, rupees(fareFor(original.km, 'innova').amount), original.slug);
  assert.equal(route.faqs.length, original.faqCount, `${original.slug}: no FAQs removed`);
  assert(route.faqs.some(f => f.answer.includes('Innova') && f.answer.includes(route.cabFares.innova)), `${original.slug}: FAQ must explain Innova fare`);
  assert(!route.faqs.some(f => /Innova Crysta or Ertiga.*billed at ₹15\/km/.test(f.answer)), original.slug);
  if (process.argv.includes('--built')) {
    const html = fs.readFileSync(path.join(root, '.next/server/app/distance', original.slug + '.html'), 'utf8');
    const body = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '');
    assert(body.includes('Innova Crysta') && body.includes(route.cabFares.innova), `${original.slug}: built Innova fare`);
    for (const id of ['distance-summary', 'distance-facts', 'road-and-stops', 'cab-fares', 'distance-faqs']) assert(body.includes(`id="${id}"`), `${original.slug}: preserved section ${id}`);
    assert(body.includes('₹18/km') && body.includes('₹15/km'), `${original.slug}: rendered per-km rates`);
  }
}
// Independently stated published boundary examples, rather than only comparing
// outputs produced by the same calculator.
assert.equal(fareFor(40, 'innova').amount, 2800);
assert.equal(fareFor(80, 'innova').amount, 3520);
assert.equal(fareFor(100, 'innova').amount, 5400);
assert.equal(fareFor(300, 'innova').amount, 5400);
assert.equal(fareFor(400, 'innova').amount, 7200);
console.log(`PASS: ${before.length} routes preserved; prior fares and FAQ counts unchanged; Innova fare and FAQ present on every route; five policy examples pass.`);
if (process.argv.includes('--built')) console.log('PASS: all 206 generated distance pages contain the separate rates, Innova fare and preserved main sections.');
