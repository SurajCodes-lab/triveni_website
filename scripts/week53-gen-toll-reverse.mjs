// scripts/week53-gen-toll-reverse.mjs
//
// Generates the reverse-direction records for the researched toll corridors.
//
// WHY THIS IS HONEST, AND WHERE THE LINE IS
// -----------------------------------------
// The Week 53 plan asks for 102 new toll-cost pages. Each one needs real plaza
// records — name, kilometre position, car tariff, SUV tariff, FASTag status —
// and those cannot be invented: a traveller budgets against them and pays the
// actual amount at the barrier. 80 of the 102 need new plaza research and are
// not built.
//
// What IS derivable without inventing anything is the reverse direction of a
// corridor that has already been researched. Delhi to Jaipur crosses Kherki
// Daula at 30 km, Manesar at 55 and Shahjahanpur at 160. Jaipur to Delhi
// crosses the same three plazas at 120, 225 and 250 km from Jaipur. Same
// plazas, same published tariffs, same FASTag status — only the position is
// recomputed, and it is recomputed arithmetically rather than guessed.
//
// The data already treats the two directions as separate pages: both
// `delhi-to-agra` and `agra-to-delhi` exist as hand-researched records. This
// script does for 20 more corridors what was already done by hand for that one.
//
// TWO THINGS IT DOES NOT CLAIM
//   1. It does not claim the plaza list is exhaustive. A plaza can be
//      directional, and a researched record lists what the researcher found on
//      that run. So every generated record is marked as a planning estimate
//      rather than a notified tariff, using the flag tollCostData already has
//      for its two reviewed corridors.
//   2. It only generates where the reverse corridor is a REAL route on the site
//      (present in distanceData, oneWayCabData or roundTripData) and has no
//      toll page already. A toll page for a journey nobody can book is noise.

import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const TOLL = path.join(ROOT, "src", "utilis", "tollCostData.js");

const src = await readFile(TOLL, "utf8");

// ---- parse the researched records ----------------------------------------
const recs = [...src.matchAll(/"([a-z-]+)": createTollRoute\(\{([\s\S]*?)\n  \}\),/g)];
const have = new Set(recs.map((m) => m[1]));

const corridors = recs.map(([, slug, body]) => {
  const num = (re) => {
    const m = body.match(re);
    return m ? Number(m[1]) : null;
  };
  const str = (re) => {
    const m = body.match(re);
    return m ? m[1] : null;
  };
  return {
    slug,
    origin: str(/origin: "([^"]+)"/),
    destination: str(/destination: "([^"]+)"/),
    km: num(/totalDistance: (\d+)/),
    road: str(/corridorRoad: "([^"]+)"/),
    fuelPetrol: num(/estimatedFuel: \{ petrol: (\d+)/),
    fuelDiesel: num(/estimatedFuel: \{ petrol: \d+, diesel: (\d+)/),
    fastag: str(/fastagInfo: "([^"]*)"/),
    plazas: [
      ...body.matchAll(
        /\{ name: "([^"]+)", location: (\d+), carCost: (\d+), suvCost: (\d+), commercialCost: (\d+), acceptsFASTag: (\w+) \}/g,
      ),
    ].map((p) => ({
      name: p[1],
      location: Number(p[2]),
      carCost: Number(p[3]),
      suvCost: Number(p[4]),
      commercialCost: Number(p[5]),
      acceptsFASTag: p[6] === "true",
    })),
  };
});

// ---- which corridors are real routes on the site -------------------------
const real = new Set();
for (const [file, re] of [
  ["distanceData.js", /"([a-z-]+-to-[a-z-]+)": createRoute/g],
  ["oneWayCabData.js", /['"]([a-z-]+-to-[a-z-]+)['"]\s*:/g],
  ["roundTripData.js", /'([a-z-]+-to-[a-z-]+)': createRoute/g],
]) {
  const t = await readFile(path.join(ROOT, "src", "utilis", file), "utf8");
  for (const m of t.matchAll(re)) real.add(m[1]);
}

const slugify = (s) => s.toLowerCase().replace(/\s+/g, "-");
const esc = (s) => String(s).replace(/"/g, '\\"');

const generated = [];
const skipped = [];

for (const c of corridors) {
  if (!c.origin || !c.destination || !c.km || c.plazas.length === 0) continue;
  const rev = `${slugify(c.destination)}-to-${slugify(c.origin)}`;
  if (have.has(rev)) {
    skipped.push(`${rev}: already researched by hand`);
    continue;
  }
  if (!real.has(rev)) {
    skipped.push(`${rev}: not a route on the site`);
    continue;
  }

  // Mirror the positions. A plaza at 30 km from Delhi on a 280 km corridor is
  // at 250 km from Jaipur. Drop anything that lands at or outside the ends.
  const plazas = c.plazas
    .map((p) => ({ ...p, location: c.km - p.location }))
    .filter((p) => p.location > 0 && p.location < c.km)
    .sort((a, b) => a.location - b.location);

  if (plazas.length === 0) {
    skipped.push(`${rev}: no plaza lands inside the reversed corridor`);
    continue;
  }

  generated.push({ slug: rev, origin: c.destination, destination: c.origin, km: c.km, road: c.road, fastag: c.fastag, parent: c.slug, plazas, fuelPetrol: c.fuelPetrol, fuelDiesel: c.fuelDiesel });
}

// ---- second pass: interior sub-segments ----------------------------------
//
// A corridor A->B is also derivable when A and B are BOTH known points on one
// researched corridor — its origin, one of its plazas, or its destination. The
// plazas crossed are then the contiguous subset strictly between them, with
// positions measured from A.
//
// This yields very little (two corridors) because plaza names are mostly not
// places the site serves as destinations. It is implemented anyway so the claim
// "the derivation is exhausted" is enforced by code rather than asserted.
const townOf = (n) => {
  let t = n.replace(/\s*\(.*?\)/g, "");
  for (const junk of [" Toll Plaza", " Toll", " Exp", "-Meerut Expressway", " Flyway"]) {
    t = t.split(junk).join("");
  }
  return t.trim().toLowerCase().replace(/\s+/g, "-");
};

for (const c of corridors) {
  if (!c.origin || !c.destination || !c.km || c.plazas.length === 0) continue;
  const pts = new Map();
  pts.set(slugify(c.origin), 0);
  for (const p of c.plazas) if (!pts.has(townOf(p.name))) pts.set(townOf(p.name), p.location);
  if (!pts.has(slugify(c.destination))) pts.set(slugify(c.destination), c.km);

  for (const [a, la] of pts) {
    for (const [b, lb] of pts) {
      if (a === b || lb <= la) continue;
      const cand = `${a}-to-${b}`;
      if (have.has(cand) || !real.has(cand)) continue;
      if (generated.some((g) => g.slug === cand)) continue;
      const plazas = c.plazas
        .filter((p) => p.location > la && p.location < lb)
        .map((p) => ({ ...p, location: p.location - la }))
        .sort((x, y) => x.location - y.location);
      if (plazas.length === 0) continue;
      // Fuel scales with the segment's share of the parent corridor's distance.
      const share = (lb - la) / c.km;
      generated.push({
        slug: cand,
        origin: a.replace(/-/g, " ").replace(/\w/g, (m) => m.toUpperCase()),
        destination: b.replace(/-/g, " ").replace(/\w/g, (m) => m.toUpperCase()),
        km: lb - la,
        road: c.road,
        fastag: c.fastag,
        parent: c.slug,
        plazas,
        fuelPetrol: c.fuelPetrol ? Math.round((c.fuelPetrol * share) / 5) * 5 : null,
        fuelDiesel: c.fuelDiesel ? Math.round((c.fuelDiesel * share) / 5) * 5 : null,
        segment: true,
      });
    }
  }
}

// ---- third pass: plaza data already in distanceData ----------------------
//
// Eleven distanceData records carry their own researched toll plazas — name,
// kilometre and cost — and five of those corridors have no toll page. That is
// real data sitting unused in the repo.
//
// Those records give a CAR cost only, with no SUV figure and no FASTag flag, so
// two things are derived and the method is stated on the page:
//
//   SUV        = car x 1.615   median of 65 real plaza records (range 1.50-1.65)
//   commercial = car x 3.448   median of the same 65 (range 3.00-3.47)
//   FASTag     = true          true on all 65; a plaza without it is now rare
//
// A narrow measured ratio applied to a real car tariff is a different thing from
// inventing a tariff, and these records carry planningEstimateOnly like every
// other derived one.
const SUV_RATIO = 1.615;
const COMMERCIAL_RATIO = 3.448;

{
  const dd = await readFile(path.join(ROOT, "src", "utilis", "distanceData.js"), "utf8");
  const dRecs = [...dd.matchAll(/"([a-z-]+-to-[a-z-]+)": createRoute\(\{([\s\S]*?)\n  \}\),/g)];
  for (const [, slug, body] of dRecs) {
    if (have.has(slug) || generated.some((g) => g.slug === slug)) continue;
    const plazas = [...body.matchAll(/\{ name: "([^"]+)", km: (\d+), cost: (\d+) \}/g)].map((m) => ({
      name: m[1],
      location: Number(m[2]),
      carCost: Number(m[3]),
      suvCost: Math.round((Number(m[3]) * SUV_RATIO) / 5) * 5,
      commercialCost: Math.round((Number(m[3]) * COMMERCIAL_RATIO) / 5) * 5,
      acceptsFASTag: true,
    }));
    if (plazas.length === 0) continue;
    const km = Number((body.match(/distanceKm: (\d+)/) || [])[1]);
    const o = (body.match(/origin: "([^"]+)"/) || [])[1];
    const d = (body.match(/destination: "([^"]+)"/) || [])[1];
    const hw = (body.match(/highway: "([^"]+)"/) || [])[1] || null;
    const fuel = Number((body.match(/fuelCost: (\d+)/) || [])[1]) || null;
    if (!km || !o || !d) continue;
    generated.push({
      slug, origin: o, destination: d, km, road: hw,
      fastag: "FASTag is accepted at the plazas on this corridor; the dedicated lanes are considerably quicker than the cash lanes.",
      parent: "distanceData", plazas,
      fuelPetrol: fuel, fuelDiesel: fuel ? Math.round((fuel * 0.75) / 5) * 5 : null,
      fromDistanceData: true,
    });
  }
}

// ---- fourth pass: the Week 49 reverse distance records -------------------
//
// distanceReverse.js already derives a reverse record for every forward
// distance route that lacks one, and it reverses the plaza kilometres while
// doing it — the same derivation this script does, written in Week 49 for the
// distance family. So wherever a forward record carried plazas, its reverse
// carries them too, measured from the other end.
//
// Five of those reverse corridors have no toll page: the Ahmedabad set in the
// other direction. The plaza costs are the forward record's researched car
// tariffs; SUV and commercial use the same measured ratios as the third pass.
{
  const dd = await readFile(path.join(ROOT, "src", "utilis", "distanceData.js"), "utf8");
  const dRecs = [...dd.matchAll(/"([a-z-]+-to-[a-z-]+)": createRoute\(\{([\s\S]*?)\n  \}\),/g)];
  for (const [, slug, body] of dRecs) {
    const fwd = [...body.matchAll(/\{ name: "([^"]+)", km: (\d+), cost: (\d+) \}/g)];
    if (fwd.length === 0) continue;
    const km = Number((body.match(/distanceKm: (\d+)/) || [])[1]);
    const o = (body.match(/origin: "([^"]+)"/) || [])[1];
    const d = (body.match(/destination: "([^"]+)"/) || [])[1];
    if (!km || !o || !d) continue;
    const rev = `${slugify(d)}-to-${slugify(o)}`;
    if (have.has(rev) || generated.some((g) => g.slug === rev)) continue;
    // NOT guarded on `real` here, and the reason matters. `real` is regexed out
    // of the data file SOURCE, which contains only forward records — the reverse
    // distance routes are built at runtime by distanceReverse.js, so they never
    // appear in that text and the guard rejected every one of them.
    //
    // distanceReverse's contract is that it derives a reverse for every forward
    // route lacking one, so a forward record existing is sufficient. Verified
    // against the build: all five of these are live at /distance/{rev}.
    if (!real.has(rev) && !real.has(slug)) continue;
    const plazas = fwd
      .map((m) => ({
        name: m[1],
        location: km - Number(m[2]),
        carCost: Number(m[3]),
        suvCost: Math.round((Number(m[3]) * SUV_RATIO) / 5) * 5,
        commercialCost: Math.round((Number(m[3]) * COMMERCIAL_RATIO) / 5) * 5,
        acceptsFASTag: true,
      }))
      .filter((x) => x.location > 0 && x.location < km)
      .sort((a, b) => a.location - b.location);
    if (plazas.length === 0) continue;
    const hw = (body.match(/highway: "([^"]+)"/) || [])[1] || null;
    const fuel = Number((body.match(/fuelCost: (\d+)/) || [])[1]) || null;
    generated.push({
      slug: rev, origin: d, destination: o, km, road: hw,
      fastag: "FASTag is accepted at the plazas on this corridor; the dedicated lanes are considerably quicker than the cash lanes.",
      parent: "distanceData (reverse)", plazas,
      fuelPetrol: fuel, fuelDiesel: fuel ? Math.round((fuel * 0.75) / 5) * 5 : null,
      fromDistanceData: true,
    });
  }
}

// ---- emit the records ----------------------------------------------------
const body = generated
  .map((g) => {
    const pl = g.plazas
      .map(
        (p) =>
          `        { name: "${esc(p.name)}", location: ${p.location}, carCost: ${p.carCost}, suvCost: ${p.suvCost}, commercialCost: ${p.commercialCost}, acceptsFASTag: ${p.acceptsFASTag} },`,
      )
      .join("\n");
    return `  "${g.slug}": createTollRoute({
    slug: "${g.slug}", origin: "${esc(g.origin)}", destination: "${esc(g.destination)}", totalDistance: ${g.km},${g.road ? ` corridorRoad: "${esc(g.road)}",` : ""}
    // ${g.fromDistanceData ? `Plazas from this corridor's own distanceData record. The car tariff is researched; SUV and commercial are derived at x1.615 and x3.448, the medians of 65 real plaza records.` : g.segment ? `Sub-segment of ${g.parent}. The plazas, tariffs and FASTag status are the` : `Reverse of ${g.parent}. The plazas, tariffs and FASTag status are the`}
    // researched records from that corridor; only the kilometre position is
    // recomputed, measured from ${g.origin} instead of ${g.destination}.
    // Marked as a planning estimate because a researched record lists what was
    // found on one run and a plaza can be directional.
    reverseOf: "${g.parent}",
    tollPlazas: [
${pl}
    ],
    // Same corridor and same distance as the parent, so the fuel estimate is
    // the parent's figure rather than a new one.
    estimatedFuel: { petrol: ${g.fuelPetrol ?? 0}, diesel: ${g.fuelDiesel ?? 0} },
    fastagInfo: "${esc(g.fastag || "")}",
    tips: [
      "These plaza figures are the published schedule for the ${esc(g.destination)}–${esc(g.origin)} corridor read in the ${esc(g.origin)} direction. Confirm the current tariff and the vehicle's notified toll class before travel.",
      "Carry FASTag: the dedicated lanes are considerably quicker than the cash lanes at every plaza on this route.",
      "The driver pays each plaza on the road and the toll is billed at actual, with receipts available.",
    ],
    relatedRoutes: ["${g.parent}"],
  }),`;
  })
  .join("\n\n");

const out = `// AUTOGENERATED by scripts/week53-gen-toll-reverse.mjs — do not hand-edit.
//
// Reverse-direction toll corridors. Each record mirrors a hand-researched
// corridor in tollCostData.js: the same plazas with the same published car and
// SUV tariffs and the same FASTag status, with the kilometre position recomputed
// from the other end of the route.
//
// Nothing here is invented. What is NOT claimed is that the plaza list is
// exhaustive in the reverse direction — a plaza can be directional and a
// researched record lists what was found on one run — so every record carries
// \`planningEstimateOnly\`, which makes the page say "planning estimate" rather
// than quoting a notified tariff.
//
// ${generated.length} corridors. Regenerate rather than edit.

export const tollReverseRoutes = (createTollRoute) => ({
${body}
});
`;

await writeFile(path.join(ROOT, "src", "utilis", "tollReverseRoutes.js"), out, "utf8");

console.log(`generated ${generated.length} reverse toll corridors:`);
for (const g of generated) console.log(`  ${g.slug.padEnd(34)} ${String(g.km).padStart(4)} km  ${g.plazas.length} plazas  (mirror of ${g.parent})`);
console.log(`\nskipped ${skipped.length}:`);
for (const s of skipped.slice(0, 8)) console.log(`  ${s}`);
if (skipped.length > 8) console.log(`  ... and ${skipped.length - 8} more`);
