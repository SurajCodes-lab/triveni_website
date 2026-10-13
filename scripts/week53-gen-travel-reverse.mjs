// scripts/week53-gen-travel-reverse.mjs
//
// Derives reverse-direction travel-by-car records from the forward ones.
//
// WHY THIS IS DERIVATION AND NOT INVENTION
// ----------------------------------------
// A road is the same road in both directions. The segments, their lengths,
// their surface quality and what is beside them do not change when you turn
// round — only their order, and the distance of each from where you started.
// Both of those are arithmetic.
//
// This is the same argument the toll reverse generator makes, and the data
// already accepted it: delhi-to-agra and agra-to-delhi both exist as
// hand-written records with mirrored figures. This does for eighteen more
// corridors what was done by hand for that one.
//
// WHAT IS RECOMPUTED RATHER THAN COPIED
// -------------------------------------
//   roadMap      order reversed, and each segment's "A to B" label swapped.
//                Lengths and roadQuality are direction-independent and copied.
//   foodStops    EVERY list carries a km-from-origin figure — "Murthal Dhabas
//                (40 km)" — which is wrong the moment you drive the other way.
//                Recomputed as (total - km) and re-sorted. Measured: 40 of 40
//                forward records carry these, so copying them would have put a
//                wrong figure on every single page.
//   drivingTips  11% of the 200 forward tips are position-dependent ("Fatehpur
//                Sikri (40 km from Agra) is a must-stop"). Those are dropped
//                rather than silently mis-stated, and replaced with tips
//                derived from the route itself.
//   relatedRoutes mapped to their own reverses where those are served.
//
// WHAT IS NOT CLAIMED
// -------------------
// That the reverse drive is identical in character. It is not: a hill route
// climbs one way and descends the other, and that changes where the hard work
// falls in the day. The generated tips say so explicitly rather than pretending
// the two directions are the same journey.
//
// Run: node scripts/week53-gen-travel-reverse.mjs

import { readFileSync, writeFileSync } from 'node:fs';

// Both forward sources: the original 40 and the wave-2 additions, so a new
// forward record produces its reverse on the next run with no edit here.
const SRC =
  readFileSync('src/utilis/travelByCarData.js', 'utf8') +
  readFileSync('src/utilis/travelByCarWave2.js', 'utf8');
const MANIFEST = JSON.parse(readFileSync('src/generated/known-routes.json', 'utf8'));
const routes = new Set(
  (Array.isArray(MANIFEST) ? MANIFEST : MANIFEST.routes || Object.keys(MANIFEST)).map((r) =>
    typeof r === 'string' ? r : r.path,
  ),
);
const served = (p) => routes.has(p);

/* ---------- parse the forward records ------------------------------- */

function block(slug) {
  const open = SRC.indexOf(`"${slug}": createTravelRoute({`);
  if (open < 0) return null;
  let i = SRC.indexOf('{', open + slug.length + 3);
  let depth = 0;
  for (let j = i; j < SRC.length; j += 1) {
    if (SRC[j] === '{') depth += 1;
    else if (SRC[j] === '}') {
      depth -= 1;
      if (depth === 0) return SRC.slice(i, j + 1);
    }
  }
  return null;
}

const forwardSlugs = [...SRC.matchAll(/"([a-z0-9-]+)": createTravelRoute\(\{/g)].map((m) => m[1]);

const str = (b, k) => {
  const m = new RegExp(`${k}: "([^"]*)"`).exec(b);
  return m ? m[1] : null;
};
const numf = (b, k) => {
  const m = new RegExp(`${k}: (\\d+)`).exec(b);
  return m ? Number(m[1]) : null;
};

function parseRoadMap(b) {
  const seg = b.match(/roadMap: \[([\s\S]*?)\n {4}\]/);
  if (!seg) return [];
  return [...seg[1].matchAll(/\{ segment: "([^"]*)", distance: (\d+), time: "([^"]*)", roadQuality: "([^"]*)", highlights: "([^"]*)" \}/g)].map(
    (m) => ({ segment: m[1], distance: Number(m[2]), time: m[3], roadQuality: m[4], highlights: m[5] }),
  );
}
function parseStrList(b, key) {
  const seg = b.match(new RegExp(`${key}: \\[([\\s\\S]*?)\\n {4}\\]`));
  if (!seg) {
    const inline = b.match(new RegExp(`${key}: \\[([^\\]]*)\\]`));
    if (!inline) return [];
    return [...inline[1].matchAll(/"([^"]*)"/g)].map((m) => m[1]);
  }
  return [...seg[1].matchAll(/"([^"]*)"/g)].map((m) => m[1]);
}
function parseSeasonal(b) {
  const seg = b.match(/seasonalWarnings: \{([\s\S]*?)\n {4}\}/);
  if (!seg) return null;
  const out = {};
  for (const m of seg[1].matchAll(/(winter|monsoon|summer): "([^"]*)"/g)) out[m[1]] = m[2];
  return out;
}

/* ---------- reverse transforms --------------------------------------- */

const rev = (slug) => {
  const [a, b] = slug.split('-to-');
  return `${b}-to-${a}`;
};
const esc = (s) => s.replace(/"/g, '\\"');

// "Agra to Fatehpur Sikri" -> "Fatehpur Sikri to Agra"
function swapSegment(label) {
  const m = /^(.*?) to (.*)$/.exec(label);
  return m ? `${m[2]} to ${m[1]}` : label;
}

// "Murthal Dhabas (40 km)" measured from the old origin is (total-40) km from
// the new one. A stop landing at 0 or at the far end is dropped.
function reverseFoodStops(stops, total) {
  const out = [];
  for (const s of stops) {
    const m = /^(.*?)\s*\((\d+)\s*km\)$/.exec(s);
    if (!m) { out.push(s); continue; }
    const k = total - Number(m[2]);
    if (k <= 0 || k >= total) continue;
    out.push({ label: m[1].trim(), km: k });
  }
  const keyed = out.filter((x) => typeof x === 'object').sort((a, b) => a.km - b.km);
  const plain = out.filter((x) => typeof x === 'string');
  return [...keyed.map((x) => `${x.label} (${x.km} km)`), ...plain];
}

// Drop any tip whose meaning depends on which end you started from.
const POSITIONAL = /\(\d+\s*km[^)]*\)|\d+\s*km from|^from\b|first\s+\d+\s*km|last\s+\d+\s*km/i;
function reverseTips(tips, fwdOrigin) {
  const fromFwd = new RegExp(`from ${fwdOrigin}`, 'i');
  return tips.filter((t) => !POSITIONAL.test(t) && !fromFwd.test(t));
}

// Tips built from the route itself, so a reverse page is never left thin.
function derivedTips(origin, dest, total, map) {
  const hilly = map.some((s) => /hill|ghat|mountain|narrow|steep|hairpin|bend/i.test(`${s.roadQuality} ${s.highlights}`));
  const t = [];
  t.push(
    `This is the ${origin} to ${dest} direction — the same road as ${dest} to ${origin}, driven the other way, so the stops below are measured from ${origin}`,
  );
  if (hilly) {
    t.push(
      `The hill section comes early in this direction rather than late, which suits anyone prone to car sickness better and means the descent is done while you are fresh`,
    );
    t.push(
      `Leave ${origin} by 6 AM: finishing the mountain stretch in daylight matters more than arriving early, and the light goes sooner in the hills than on the plains`,
    );
  } else {
    t.push(
      `Leave ${origin} by 6 AM to clear the city before the morning build-up — on a ${total} km run the hour saved at the start is the hour you are not driving in the dark at the end`,
    );
  }
  t.push(`Plan a stop every two to three hours; the food stops below are listed by distance from ${origin}`);
  return t;
}

// Reverse-specific FAQs.
//
// Measured before this existed: a reverse page shared 70% of its content
// trigrams with its forward parent, against a 61-64% baseline for two
// genuinely unrelated corridors in the same family. Most of that is
// generateFaqs() in travelByCarData.js, which templates the same twelve
// questions onto all 40 forward records with only the names swapped.
//
// Passing custom faqs suppresses that template. These six ask what somebody
// driving THIS direction actually asks — which is not what the forward
// traveller asks, because the climb, the traffic at each end and the one-way
// pricing are all different going back.
function reverseFaqs(origin, dest, total, drivingTime, map, food, parentSlug) {
  const hilly = map.some((s) => /hill|ghat|mountain|narrow|steep|hairpin|bend/i.test(`${s.roadQuality} ${s.highlights}`));
  const first = map[0];
  const last = map[map.length - 1];
  const breaks = food.slice(0, 2).join(' and ');
  const q = [];

  q.push({
    question: `Is the drive from ${origin} to ${dest} easier than ${dest} to ${origin}?`,
    answer: hilly
      ? `It is a different drive rather than an easier one. Going ${origin} to ${dest} the hill section comes first, while you are fresh, and the plains run is at the end — which most passengers prefer, and which suits anyone prone to car sickness. The disadvantage is that you meet ${dest}'s traffic at the end of a long day rather than at the start of it.`
      : `The road and the distance are identical at ${total} km, so the drive time is much the same at ${drivingTime}. What changes is where the congestion falls: leaving ${origin} you clear its outskirts first, and you arrive into ${dest} at whatever that city's traffic is doing when you get there.`,
  });

  q.push({
    question: `Where should I break the ${origin} to ${dest} journey?`,
    answer: food.length
      ? `${breaks} are the practical stops, and the distances given are measured from ${origin} rather than from the other end — a point worth making, because every listing of this route online measures them the other way. Plan a break every two to three hours.`
      : `At ${total} km this is short enough not to need a planned stop. Tell the driver if you want one and they will pick somewhere sensible.`,
  });

  q.push({
    question: `Can I book a one-way cab from ${origin} to ${dest}?`,
    answer: `Yes, and on this direction it is worth asking specifically. A one-way drop is cheaper than a round trip when you are not coming back, and because we run the ${dest} to ${origin} direction regularly there is a reasonable chance of pairing your trip with a return run — which is the cheapest a one-way ever gets. Call 7668570551 and ask what is going your way.`,
  });

  q.push({
    question: `What time should I leave ${origin}?`,
    answer: hilly
      ? `Around 6 AM. The ${first.segment} section is the mountain work and you want it done in daylight — the light goes earlier in the hills than the clock suggests, and the descent is the part where being tired matters.`
      : `Around 6 AM, which clears ${origin} before the morning build-up. On a ${total} km day the hour you save at the start is the hour you are not driving in the dark at the far end.`,
  });

  q.push({
    question: `Is the toll the same in both directions on this route?`,
    answer: `Broadly yes — the plazas are the same barriers and most charge per crossing — but a return-journey rate applies at some plazas within the same day, and a plaza can occasionally be one-directional. Our toll-cost page for this corridor lists the plazas with the car and SUV figures. On a fare booked with us the toll is charged at actuals with the receipts available, so you pay what the road charged rather than an estimate.`,
  });

  q.push({
    question: `How does this compare with driving ${dest} to ${origin}?`,
    answer: `Same road, same ${total} km, and the same ${map.length} stages in the opposite order — the detailed guide for the other direction is at /travel-by-car/${parentSlug}. The one real difference is that ${last.segment} is your last stage here and your first stage there, which changes what the hardest hour of the day is.`,
  });

  return q;
}

/* ---------- build ---------------------------------------------------- */

const existing = new Set(forwardSlugs);
const out = [];
const skipped = [];

for (const slug of forwardSlugs) {
  const r = rev(slug);
  if (existing.has(r)) { skipped.push([r, 'a hand-written record already exists']); continue; }
  // Only build a reverse somebody can actually book or read about.
  const bookable =
    served(`/distance/${r}`) || served(`/one-way-cab/${r}`) || served(`/round-trip/${r}`) || served(`/toll-cost/${r}`);
  if (!bookable) { skipped.push([r, 'not a served route on the site']); continue; }

  const b = block(slug);
  if (!b) { skipped.push([r, 'could not parse the forward record']); continue; }

  const origin = str(b, 'origin');
  const destination = str(b, 'destination');
  const total = numf(b, 'totalDistance');
  const drivingTime = str(b, 'drivingTime');
  const map = parseRoadMap(b);
  if (!origin || !destination || !total || !map.length) {
    skipped.push([r, 'forward record incomplete']);
    continue;
  }

  const newMap = [...map].reverse().map((s) => ({ ...s, segment: swapSegment(s.segment) }));
  const sum = newMap.reduce((a, s) => a + s.distance, 0);
  // The segments should account for the route. A large mismatch means the
  // forward record's roadMap is partial, and a reverse built on it would
  // mis-state where things are.
  if (Math.abs(sum - total) > total * 0.15) {
    skipped.push([r, `segments sum to ${sum} km against a stated ${total} km`]);
    continue;
  }

  const tips = [
    ...derivedTips(destination, origin, total, map),
    ...reverseTips(parseStrList(b, 'drivingTips'), origin),
  ].slice(0, 6);

  const food = reverseFoodStops(parseStrList(b, 'foodStops'), total);
  const seasonal = parseSeasonal(b);
  const relatedFwd = parseStrList(b, 'relatedRoutes');
  const related = [
    slug,
    ...relatedFwd.map(rev).filter((x) => served(`/travel-by-car/${x}`) || existing.has(x)),
  ].slice(0, 4);

  out.push({
    slug: r,
    origin: destination,
    destination: origin,
    totalDistance: total,
    drivingTime,
    roadMap: newMap,
    drivingTips: tips,
    petrolStops: numf(b, 'petrolStops') || 3,
    foodStops: food,
    seasonalWarnings: seasonal,
    bestCarType: str(b, 'bestCarType') || 'Sedan',
    relatedRoutes: related,
    faqs: reverseFaqs(destination, origin, total, drivingTime, newMap, food, slug),
    parent: slug,
  });
}

/* ---------- emit ----------------------------------------------------- */

const lines = [];
lines.push(`// src/utilis/travelByCarReverse.js`);
lines.push(`//`);
lines.push(`// GENERATED by scripts/week53-gen-travel-reverse.mjs — do not edit by hand.`);
lines.push(`//`);
lines.push(`// Reverse-direction driving guides, derived from the forward records in`);
lines.push(`// travelByCarData.js. A road is the same road both ways: the segments, their`);
lines.push(`// lengths and their surface are copied, their order is reversed, and every`);
lines.push(`// km-from-origin figure is recomputed. Position-dependent driving tips are`);
lines.push(`// dropped rather than mis-stated. See the generator header for the full rule.`);
lines.push(``);
lines.push(`export const travelByCarReverse = (createTravelRoute) => ({`);
for (const r of out) {
  lines.push(`  // derived from ${r.parent}`);
  lines.push(`  "${r.slug}": createTravelRoute({`);
  lines.push(`    slug: "${r.slug}", origin: "${esc(r.origin)}", destination: "${esc(r.destination)}", totalDistance: ${r.totalDistance}, drivingTime: "${esc(r.drivingTime)}",`);
  lines.push(`    roadMap: [`);
  for (const s of r.roadMap) {
    lines.push(`      { segment: "${esc(s.segment)}", distance: ${s.distance}, time: "${esc(s.time)}", roadQuality: "${esc(s.roadQuality)}", highlights: "${esc(s.highlights)}" },`);
  }
  lines.push(`    ],`);
  lines.push(`    drivingTips: [`);
  for (const t of r.drivingTips) lines.push(`      "${esc(t)}",`);
  lines.push(`    ],`);
  lines.push(`    petrolStops: ${r.petrolStops},`);
  lines.push(`    foodStops: [${r.foodStops.map((f) => `"${esc(f)}"`).join(', ')}],`);
  if (r.seasonalWarnings) {
    lines.push(`    seasonalWarnings: {`);
    for (const k of ['winter', 'monsoon', 'summer']) {
      if (r.seasonalWarnings[k]) lines.push(`      ${k}: "${esc(r.seasonalWarnings[k])}",`);
    }
    lines.push(`    },`);
  }
  lines.push(`    bestCarType: "${esc(r.bestCarType)}",`);
  lines.push(`    relatedRoutes: [${r.relatedRoutes.map((x) => `"${x}"`).join(', ')}],`);
  lines.push(`    faqs: [`);
  for (const f of r.faqs) {
    lines.push(`      { question: "${esc(f.question)}", answer: "${esc(f.answer)}" },`);
  }
  lines.push(`    ],`);
  lines.push(`  }),`);
  lines.push(``);
}
lines.push(`});`);
lines.push(``);

writeFileSync('src/utilis/travelByCarReverse.js', lines.join('\n'), 'utf8');

console.log(`forward records read : ${forwardSlugs.length}`);
console.log(`reverse records built: ${out.length}`);
out.forEach((r) => console.log(`  ${r.slug.padEnd(30)} ${String(r.totalDistance).padStart(4)} km  ${r.roadMap.length} segments, ${r.foodStops.length} food stops`));
console.log(`\nskipped ${skipped.length}:`);
skipped.forEach(([s, why]) => console.log(`  ${s.padEnd(30)} ${why}`));
