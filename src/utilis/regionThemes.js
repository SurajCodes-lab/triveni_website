// src/utilis/regionThemes.js
//
// Regional visual identity for corridor, distance and one-way pages.
//
// WHY (Week 47): the site publishes one corridor template for every journey in
// North India, so a Delhi–Manali page and a Delhi–Jaipur page looked and read
// identically apart from the nouns — the "stamped out" feel that both visitors
// and Google's August 2026 update penalise. The vehicle-type pages already have
// three distinct themes (Aurora / Executive / Royal). This module does the same
// by DESTINATION REGION: a Himalayan corridor gets a pine-and-ice palette, a
// mountain motif and hill-driving notes; a Rajasthan corridor gets sandstone and
// royal gold and desert-road notes; a Ganga pilgrimage corridor gets saffron and
// marigold and darshan-timing notes. Six regions, each a real design system
// with its own copy, not a recolour.
//
// Pure data + one lookup. No React, no data-file imports, safe in client
// bundles. Every Tailwind class is a complete literal so the JIT picks it up.

const REGIONS = {
  himalaya: {
    key: 'himalaya',
    name: 'Himalayan corridor',
    eyebrow: 'Hill route · Himalaya',
    tagline: 'Hairpins, tea stops and a driver who has done this climb a hundred times.',
    // hero
    laneStrip: 'bg-gradient-to-r from-[#0E7C7B] via-[#7FD1AE] to-[#E6FFF4]',
    scrim: 'bg-gradient-to-br from-slate-950/85 via-teal-950/55 to-cyan-950/35',
    chip: 'border-teal-300/40 bg-teal-400/10 text-teal-200',
    chipDot: 'bg-teal-300',
    accentText: 'text-teal-300',
    accentIcon: 'text-teal-300',
    // light sections
    band: 'bg-gradient-to-r from-teal-50 via-white to-cyan-50',
    bandBorder: 'border-teal-200/70',
    bandEyebrow: 'text-teal-700',
    bandIcon: 'bg-teal-600 text-white',
    motif: 'mountain',
    notes: [
      { title: 'Hill-trained drivers', text: 'Every driver on this corridor has logged the climb in all four seasons and carries chains from December to February.' },
      { title: 'Start before sunrise', text: 'Leaving by 5 AM clears the plains before traffic and puts you on the ghat section in daylight, which is the whole point of a road trip here.' },
      { title: 'Permits and stops handled', text: 'Rohtang, Atal Tunnel timings, Kufri parking, Kempty falls — the driver knows which need a permit and which are worth the detour.' },
    ],
  },
  rajputana: {
    key: 'rajputana',
    name: 'Rajasthan corridor',
    eyebrow: 'Desert route · Rajputana',
    tagline: 'Fort walls, sandstone and straight highway — the royal circuit by road.',
    laneStrip: 'bg-gradient-to-r from-[#9A3412] via-[#F59E0B] to-[#FDE68A]',
    scrim: 'bg-gradient-to-br from-slate-950/85 via-orange-950/55 to-amber-950/35',
    chip: 'border-orange-300/40 bg-orange-400/10 text-orange-200',
    chipDot: 'bg-orange-300',
    accentText: 'text-orange-300',
    accentIcon: 'text-orange-300',
    band: 'bg-gradient-to-r from-orange-50 via-white to-amber-50',
    bandBorder: 'border-orange-200/70',
    bandEyebrow: 'text-orange-700',
    bandIcon: 'bg-orange-600 text-white',
    motif: 'fort',
    notes: [
      { title: 'Heritage stops on the way', text: 'Neemrana, Chand Baori, Pushkar ghats and the Chittorgarh ramparts sit on these highways; the driver will pace the day around them.' },
      { title: 'Heat and daylight planning', text: 'From March to June the fleet runs early departures and long AC halts; October to February is the season everyone should book for.' },
      { title: 'Palace and haveli pickups', text: 'Narrow old-city lanes in Jaipur, Jodhpur and Udaipur need a sedan that fits — we send the right car for your hotel.' },
    ],
  },
  ganga: {
    key: 'ganga',
    name: 'Ganga pilgrimage corridor',
    eyebrow: 'Yatra route · Ganga belt',
    tagline: 'Darshan timings, ghat-side drops and drivers who know the aarti schedule.',
    laneStrip: 'bg-gradient-to-r from-[#B45309] via-[#F97316] to-[#FED7AA]',
    scrim: 'bg-gradient-to-br from-slate-950/85 via-amber-950/60 to-orange-950/35',
    chip: 'border-amber-300/40 bg-amber-400/10 text-amber-200',
    chipDot: 'bg-amber-300',
    accentText: 'text-amber-300',
    accentIcon: 'text-amber-300',
    band: 'bg-gradient-to-r from-amber-50 via-white to-orange-50',
    bandBorder: 'border-amber-200/70',
    bandEyebrow: 'text-amber-700',
    bandIcon: 'bg-amber-600 text-white',
    motif: 'diya',
    notes: [
      { title: 'Timed for darshan', text: 'Ram Mandir, Kashi Vishwanath and Har Ki Pauri run on temple time; the driver plans the departure so you arrive for the slot you booked.' },
      { title: 'Ghat-side drops', text: 'Most ghats are foot-only for the last stretch. We drop at the nearest vehicle point and wait, rather than leaving you to find a cab back.' },
      { title: 'Festival-week fares fixed', text: 'Deepotsav, Kanwar season, Chhath — fares are locked when you book, and the driver stays with you across multi-day yatras.' },
    ],
  },
  punjab: {
    key: 'punjab',
    name: 'Punjab corridor',
    eyebrow: 'Highway route · Punjab',
    tagline: 'Six-lane GT Road, dhaba halts and the Golden Temple by evening.',
    laneStrip: 'bg-gradient-to-r from-[#A16207] via-[#FACC15] to-[#FEF9C3]',
    scrim: 'bg-gradient-to-br from-slate-950/85 via-yellow-950/50 to-lime-950/30',
    chip: 'border-yellow-300/40 bg-yellow-400/10 text-yellow-200',
    chipDot: 'bg-yellow-300',
    accentText: 'text-yellow-300',
    accentIcon: 'text-yellow-300',
    band: 'bg-gradient-to-r from-yellow-50 via-white to-lime-50',
    bandBorder: 'border-yellow-200/70',
    bandEyebrow: 'text-yellow-700',
    bandIcon: 'bg-yellow-500 text-slate-900',
    motif: 'wheat',
    notes: [
      { title: 'The fastest road in the north', text: 'NH-44 is six lanes almost the whole way; a sedan does Delhi–Chandigarh in four hours and Delhi–Amritsar in seven with one dhaba stop.' },
      { title: 'Wagah timed to the minute', text: 'The border ceremony has a fixed start; the driver leaves Amritsar with the margin it needs and knows the parking that avoids the walk.' },
      { title: 'Group and family fleets', text: 'Baraat tempos, Innovas for joint families and sedans for the tricity run — the corridor is served by the full fleet.' },
    ],
  },
  heritage: {
    key: 'heritage',
    name: 'Taj heritage corridor',
    eyebrow: 'Heritage route · Agra & Braj',
    tagline: 'Expressway to the Taj, with Fatehpur Sikri and Mathura on the same tank.',
    laneStrip: 'bg-gradient-to-r from-[#7F1D1D] via-[#DC2626] to-[#FECACA]',
    scrim: 'bg-gradient-to-br from-slate-950/85 via-red-950/50 to-rose-950/30',
    chip: 'border-rose-300/40 bg-rose-400/10 text-rose-200',
    chipDot: 'bg-rose-300',
    accentText: 'text-rose-300',
    accentIcon: 'text-rose-300',
    band: 'bg-gradient-to-r from-rose-50 via-white to-red-50',
    bandBorder: 'border-rose-200/70',
    bandEyebrow: 'text-rose-700',
    bandIcon: 'bg-rose-600 text-white',
    motif: 'dome',
    notes: [
      { title: 'Sunrise at the East Gate', text: 'A 5 AM Delhi departure on the Yamuna Expressway puts you at the Taj before the tour buses; the driver knows the gate with the shortest queue.' },
      { title: 'Same-day, without the rush', text: 'Taj, Agra Fort and Mehtab Bagh fit comfortably in a day trip; add Fatehpur Sikri and the driver reworks the order so nothing is missed.' },
      { title: 'Braj on the way', text: 'Mathura and Vrindavan sit off the same expressway — Banke Bihari and Prem Mandir are a natural stop on the return leg.' },
    ],
  },
  metro: {
    key: 'metro',
    name: 'Delhi NCR corridor',
    eyebrow: 'City route · Delhi NCR',
    tagline: 'Airport, office and intercity runs across the capital region, around the clock.',
    laneStrip: 'bg-gradient-to-r from-[#B8860B] via-[#FACF2D] to-[#FFE9A0]',
    scrim: 'bg-gradient-to-br from-slate-950/85 via-slate-900/55 to-amber-950/30',
    chip: 'border-amber-300/40 bg-amber-400/10 text-amber-200',
    chipDot: 'bg-amber-300',
    accentText: 'text-amber-300',
    accentIcon: 'text-amber-300',
    band: 'bg-gradient-to-r from-amber-50 via-white to-slate-50',
    bandBorder: 'border-amber-200/70',
    bandEyebrow: 'text-amber-700',
    bandIcon: 'bg-slate-900 text-amber-300',
    motif: 'city',
    notes: [
      { title: 'Expressway-first routing', text: 'Delhi–Meerut, Dwarka and Yamuna expressways change the drive time by an hour; the driver picks the one that is open, not the one on the map.' },
      { title: 'Airport and terminal exact', text: 'IGI T1, T2, T3, Jewar and Hindon each have their own pickup zone and fare; the booking names the terminal so nobody circles.' },
      { title: 'Night and early-morning runs', text: 'The NCR fleet runs 24×7 with no night surcharge — the same fare at 3 AM as at 3 PM.' },
    ],
  },
};

const CITY_REGION = {
  // Himachal, Uttarakhand hills, J&K, Ladakh
  shimla: 'himalaya', manali: 'himalaya', kasol: 'himalaya', kullu: 'himalaya', dharamshala: 'himalaya', dalhousie: 'himalaya',
  mcleodganj: 'himalaya', kasauli: 'himalaya', chail: 'himalaya', narkanda: 'himalaya', spiti: 'himalaya', leh: 'himalaya', ladakh: 'himalaya',
  srinagar: 'himalaya', gulmarg: 'himalaya', pahalgam: 'himalaya', kashmir: 'himalaya', katra: 'himalaya', 'vaishno-devi': 'himalaya', jammu: 'himalaya',
  mussoorie: 'himalaya', nainital: 'himalaya', dehradun: 'himalaya', auli: 'himalaya', chopta: 'himalaya', lansdowne: 'himalaya', 'jim-corbett': 'himalaya',
  corbett: 'himalaya', ranikhet: 'himalaya', almora: 'himalaya', kedarnath: 'himalaya', badrinath: 'himalaya', gangotri: 'himalaya', yamunotri: 'himalaya',
  'char-dham': 'himalaya', chardham: 'himalaya', 'rohtang-pass': 'himalaya', 'atal-tunnel': 'himalaya', khajjiar: 'himalaya', tirthan: 'himalaya',
  // Rajasthan
  jaipur: 'rajputana', jodhpur: 'rajputana', udaipur: 'rajputana', jaisalmer: 'rajputana', pushkar: 'rajputana', ajmer: 'rajputana', bikaner: 'rajputana',
  'mount-abu': 'rajputana', ranthambore: 'rajputana', neemrana: 'rajputana', chittorgarh: 'rajputana', bharatpur: 'rajputana', alwar: 'rajputana',
  kota: 'rajputana', bundi: 'rajputana', ahmedabad: 'rajputana',
  // Ganga belt / UP pilgrimage
  haridwar: 'ganga', rishikesh: 'ganga', varanasi: 'ganga', ayodhya: 'ganga', prayagraj: 'ganga', allahabad: 'ganga', lucknow: 'ganga', kanpur: 'ganga',
  gaya: 'ganga', chitrakoot: 'ganga', naimisharanya: 'ganga', gorakhpur: 'ganga', bareilly: 'ganga',
  // Punjab & tricity
  amritsar: 'punjab', chandigarh: 'punjab', ludhiana: 'punjab', jalandhar: 'punjab', patiala: 'punjab', mohali: 'punjab', panchkula: 'punjab',
  ambala: 'punjab', karnal: 'punjab', kurukshetra: 'punjab', panipat: 'punjab', wagah: 'punjab',
  // Agra & Braj
  agra: 'heritage', mathura: 'heritage', vrindavan: 'heritage', 'fatehpur-sikri': 'heritage', 'mathura-vrindavan': 'heritage',
  // NCR
  delhi: 'metro', 'new-delhi': 'metro', noida: 'metro', 'greater-noida': 'metro', gurgaon: 'metro', gurugram: 'metro', faridabad: 'metro',
  ghaziabad: 'metro', jewar: 'metro', hindon: 'metro', meerut: 'metro', sonipat: 'metro',
};

const slugify = (v) => String(v || '').toLowerCase().trim().replace(/\s+/g, '-');

/**
 * Region theme for a destination (name or slug). Falls back to the NCR/brand
 * theme, so every page always has a complete theme object.
 */
export function getRegionTheme(destination) {
  const key = slugify(destination);
  let r = CITY_REGION[key];
  if (!r) {
    // multi-stop slugs like "shimla-manali-kullu" — first token that matches wins
    for (const tok of key.split('-')) { if (CITY_REGION[tok]) { r = CITY_REGION[tok]; break; } }
  }
  if (!r) {
    for (const [k, v] of Object.entries(CITY_REGION)) { if (k.length > 4 && key.includes(k)) { r = v; break; } }
  }
  return REGIONS[r || 'metro'];
}

export const REGION_KEYS = Object.keys(REGIONS);
export default getRegionTheme;
