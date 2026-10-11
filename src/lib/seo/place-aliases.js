// src/lib/seo/place-aliases.js
//
// Week 49 — the other name people type.
//
// Several places on this site are searched under two names, and the export
// shows real volume on the name the pages do not use: "amer fort timings"
// (10,518 impressions a quarter at position 9.6) where every page says Amber
// Fort; "banaras to ayodhya distance" (2,502) and "banaras to prayagraj
// distance" (1,614) where every page says Varanasi; Allahabad for Prayagraj.
//
// The answer is not a second page for the second name — that would be two
// pages competing for one subject. It is to say both names once on the page
// that already answers, in the first paragraph and in a question, so the page
// is recognisably about the thing the searcher typed.
//
// Only pairs where both names are in current use are listed. The official or
// current name is the key; `also` is what people still type.

export const PLACE_ALIASES = {
  varanasi: { also: ['Banaras', 'Benares', 'Kashi'], note: 'Varanasi is also called Banaras (Benares) and, in its temple sense, Kashi.' },
  prayagraj: { also: ['Allahabad'], note: 'Prayagraj was called Allahabad until 2018; both names are still used for the same city.' },
  'amer fort': { also: ['Amber Fort'], note: 'Amer Fort is also spelled and searched as Amber Fort; it is one place.' },
  'amber fort': { also: ['Amer Fort'], note: 'Amber Fort is also spelled Amer Fort, which is the older spelling of the village it stands above.' },
  gurugram: { also: ['Gurgaon'], note: 'Gurugram was called Gurgaon until 2016; both names are in use.' },
  gurgaon: { also: ['Gurugram'], note: 'Gurgaon was renamed Gurugram in 2016; both names are in use.' },
};

const KEY = (s) => String(s || '').trim().toLowerCase();

/** The alias record for a place name, or null. */
export function aliasFor(place) {
  const k = KEY(place);
  if (PLACE_ALIASES[k]) return PLACE_ALIASES[k];
  // "Amber Fort Jaipur" → "amber fort"
  for (const key of Object.keys(PLACE_ALIASES)) {
    if (k === key || k.startsWith(`${key} `)) return PLACE_ALIASES[key];
  }
  return null;
}

/** "Varanasi (also Banaras)" for a heading or a lead, or the name unchanged. */
export function withAlias(place) {
  const a = aliasFor(place);
  if (!a || !a.also || !a.also.length) return place;
  return `${place} (also ${a.also[0]})`;
}

/**
 * One question and answer for a corridor or a place whose name has a common
 * alternative, or null when neither end has one.
 */
export function aliasFaq(origin, destination) {
  const rows = [];
  for (const p of [origin, destination]) {
    const a = aliasFor(p);
    if (a && a.note) rows.push({ place: p, alias: a.also[0], note: a.note });
  }
  if (!rows.length) return null;
  if (rows.length === 1) {
    const r = rows[0];
    const other = r.place === origin ? destination : origin;
    return {
      question: `Is ${r.alias} to ${other} the same as ${r.place} to ${other}?`,
      answer: `Yes. ${r.note} The distance, the road and the fare on this page are the same journey under either name.`,
    };
  }
  return {
    question: `Are ${rows[0].alias} and ${rows[1].alias} the same as ${rows[0].place} and ${rows[1].place}?`,
    answer: `Yes. ${rows[0].note} ${rows[1].note} This page covers the same journey under either name.`,
  };
}

/** Extra keywords for a page about a place with an alias. */
export function aliasKeywords(origin, destination, suffix = 'distance') {
  const out = [];
  const oa = aliasFor(origin);
  const da = aliasFor(destination);
  if (oa) out.push(`${oa.also[0].toLowerCase()} to ${String(destination).toLowerCase()} ${suffix}`);
  if (da) out.push(`${String(origin).toLowerCase()} to ${da.also[0].toLowerCase()} ${suffix}`);
  if (oa && da) out.push(`${oa.also[0].toLowerCase()} to ${da.also[0].toLowerCase()} ${suffix}`);
  return out;
}

export default { PLACE_ALIASES, aliasFor, withAlias, aliasFaq, aliasKeywords };
