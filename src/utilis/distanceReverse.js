// src/utilis/distanceReverse.js
//
// Week 49 — the return leg.
//
// The search export's largest single class is "<A> to <B> distance": 1.25
// million impressions across the quarter. The site answers 126 of those
// corridors and, for 80 of them, only in one direction — it has "Delhi to
// Dehradun" but not "Dehradun to Delhi", although both are asked and both are
// the same road. Nothing about the return leg needs inventing: the kilometres,
// the highway, the road condition and the season are properties of the road,
// the stops are the same places in the other order, and the plazas are the
// same plazas measured from the other end.
//
// This module derives the reverse record from the forward one. Every field is
// either identical (a property of the road), reversed (order), or recomputed
// from the forward record (plaza kilometres, the direct answer, the questions).
// Nothing is estimated. A forward record whose reverse already exists as its
// own record is left alone — the hand-written one wins.

/** "Delhi → Greater Noida → Mathura → Agra" → "Agra → Mathura → Greater Noida → Delhi" */
function reverseRouteLine(line) {
  const s = String(line || '').trim();
  if (!s) return '';
  const sep = s.includes('→') ? '→' : (s.includes('->') ? '->' : null);
  if (!sep) return s;
  return s.split(sep).map((x) => x.trim()).filter(Boolean).reverse().join(' → ');
}

/** The same plazas, measured from the other end of the same road. */
function reversePlazas(plazas, totalKm) {
  if (!Array.isArray(plazas) || !totalKm) return plazas || [];
  return plazas
    .map((p) => {
      const km = Number(p && p.km);
      return Number.isFinite(km) ? { ...p, km: Math.max(0, totalKm - km) } : { ...p };
    })
    .sort((a, b) => (Number(a.km) || 0) - (Number(b.km) || 0));
}

function fareLine(fares) {
  if (!fares) return '';
  const bits = [];
  if (fares.sedan) bits.push(`${fares.sedan} (sedan)`);
  if (fares.suv) bits.push(`Ertiga SUV ${fares.suv}`);
  if (fares.innova) bits.push(`Innova Crysta ${fares.innova}`);
  if (fares.tempo) bits.push(`12-seater Tempo Traveller ${fares.tempo}`);
  return bits.join(', ');
}

/**
 * Build the return-leg record for a forward distance record.
 * @param {object} f the forward record
 * @returns {object|null}
 */
export function buildReverseDistanceRoute(f) {
  if (!f || !f.origin || !f.destination || !f.distance) return null;
  const origin = f.destination;
  const destination = f.origin;
  const slug = `${String(f.slug).split('-to-')[1]}-to-${String(f.slug).split('-to-')[0]}`;
  if (!slug || slug.indexOf('-to-') < 1) return null;
  const km = f.distance.km;
  const pair = `${origin} to ${destination}`;
  const stops = Array.isArray(f.majorStops) ? [...f.majorStops].reverse() : [];
  const viaLine = stops.length ? ` via ${stops.join(' and ')}` : '';

  const directAnswer =
    `The distance from ${origin} to ${destination} is ${km} km by road via ${f.highway}, the same road as the ` +
    `outward leg driven in the other direction, and the drive takes about ${f.duration}. A one-way AC cab is ` +
    `${fareLine(f.cabFares)}. Toll and parking are extra at actuals.`;

  const faqs = [
    {
      question: `What is the distance from ${origin} to ${destination} by road?`,
      answer:
        `${origin} to ${destination} is ${km} km by road via ${f.highway}${viaLine}. It is the same road as ` +
        `${f.origin} to ${f.destination} driven in the other direction, so the kilometres, the highway and the ` +
        `toll plazas are the same; only the order of the stops changes.`,
    },
    {
      question: `How long does it take to drive from ${origin} to ${destination}?`,
      answer:
        `About ${f.duration} for the ${km} km. ${f.roadCondition || ''}`.trim(),
    },
    {
      question: `What does a one-way cab from ${origin} to ${destination} cost?`,
      answer:
        `${fareLine(f.cabFares)}. A one-way drop is charged for the outward distance only; tolls, parking and ` +
        `any state permit are extra at actuals, and the driver settles them on FASTag.`,
    },
    {
      question: `Is the return leg from ${origin} to ${destination} charged differently?`,
      answer:
        `No. The fare is worked from the published rate card on the distance driven, so ${origin} to ` +
        `${destination} costs the same as ${f.origin} to ${f.destination} for the same vehicle. What changes on ` +
        `a return booking is only whether you pay for one leg or two.`,
    },
    {
      question: `When is the best time to drive from ${origin} to ${destination}?`,
      answer: f.bestTime || `${f.roadCondition || ''}`.trim() || `The road is open through the year.`,
    },
  ];

  const rev = {
    ...f,
    slug,
    origin,
    destination,
    bestRoute: reverseRouteLine(f.bestRoute) || `${origin} → ${destination}`,
    majorStops: stops,
    tollPlazas: reversePlazas(f.tollPlazas, km),
    localTip:
      `The pickup is anywhere in ${origin} and the drop anywhere in ${destination}. The plazas are the same ` +
      `ones as the outward leg in the other order, and the driver settles them on FASTag.`,
    originHub: f.destinationHub || null,
    destinationHub: f.originHub || null,
    oneWaySlug: slug,
    directAnswer,
    faqs,
    relatedRoutes: Array.isArray(f.relatedRoutes) ? f.relatedRoutes.slice(0, 4) : [],
    isReturnLeg: true,
    forwardSlug: f.slug,
  };
  return rev;
}

/**
 * Every reverse record that does not already exist as its own hand-written one.
 * @param {object} forwardRoutes the distanceRoutes map
 * @returns {object} slug → record
 */
export function buildReverseDistanceRoutes(forwardRoutes) {
  const out = {};
  const have = new Set(Object.keys(forwardRoutes || {}));
  for (const f of Object.values(forwardRoutes || {})) {
    const rev = buildReverseDistanceRoute(f);
    if (!rev) continue;
    if (have.has(rev.slug) || out[rev.slug]) continue;
    out[rev.slug] = rev;
  }
  return out;
}

export default buildReverseDistanceRoutes;
