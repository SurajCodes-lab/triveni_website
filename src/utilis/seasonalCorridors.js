// src/utilis/seasonalCorridors.js
//
// Maps a DESTINATION to the seasonal money page that should be promoted on
// every page about that destination, inside a date window.
//
// Why this exists: in Week 47 the Search Console export showed well over
// 200,000 impressions a quarter on Ayodhya pages (three distance guides and the
// Ram Mandir blog guide) and none of them mentioned Deepotsav or linked to the
// Diwali cab page. The seasonal pages were reachable only from the sitemap.
// This resolver is called from the SERVER page for distance, toll-cost, route
// booking and blog pages, and the small result object is passed down as a
// prop to <SeasonalCorridorCallout/>.
//
// Windows are deliberately generous on the front end: people book festival
// cabs four to eight weeks ahead, so Navratri and Diwali are promoted from
// early September, not from the week of the festival.

const IST = '+05:30';

const SEASONAL_CORRIDORS = [
  {
    keys: ['ayodhya'],
    start: '2026-09-04',
    end: '2026-11-08',
    eyebrow: 'Diwali 2026 · Ayodhya Deepotsav',
    event: 'Deepotsav',
    dates: '7–8 November 2026',
    href: '/diwali-ayodhya-transport',
    cta: 'Book Deepotsav cab',
    body: 'Deepotsav lamps on the Saryu ghats on the evening of 7 November, Diwali on the 8th. Ayodhya hotels and cabs fill weeks ahead — fixed fares, no festival surge.',
  },
  {
    keys: ['katra', 'vaishno-devi', 'vaishnodevi', 'jammu'],
    start: '2026-09-04',
    end: '2026-10-20',
    eyebrow: 'Navratri 2026 · Vaishno Devi',
    event: 'Navratri',
    dates: '11–20 October 2026',
    href: '/navratri-vaishno-devi-cab',
    cta: 'Book Navratri cab',
    body: 'Sharad Navratri runs 11–20 October with Dussehra on the 20th — the busiest ten days of the year at Katra. Overnight departures from Delhi, driver waits while you trek.',
  },
  {
    keys: ['pushkar', 'ajmer'],
    start: '2026-09-15',
    end: '2026-11-25',
    eyebrow: 'Pushkar Mela 2026',
    event: 'Pushkar Mela',
    dates: '17–25 November 2026',
    href: '/pushkar-mela-transport',
    cta: 'Book Pushkar Mela cab',
    body: 'The camel fair runs 17–25 November and peaks on Kartik Purnima, 24 November. Three-day round trips from Delhi and Jaipur with the driver staying on.',
  },
  {
    keys: ['varanasi', 'banaras', 'kashi'],
    start: '2026-10-10',
    end: '2026-11-16',
    eyebrow: 'Chhath Puja 2026 · Varanasi ghats',
    event: 'Chhath Puja',
    dates: '13–16 November 2026',
    href: '/chhath-puja-varanasi-transport',
    cta: 'Book Chhath cab',
    body: 'Sandhya Arghya on the evening of 15 November, Usha Arghya at dawn on the 16th. Ghat-side drops, overnight driver relay from Delhi available.',
  },
  {
    keys: ['mathura', 'vrindavan'],
    start: '2026-08-28',
    end: '2026-09-07',
    eyebrow: 'Janmashtami 2026',
    event: 'Janmashtami',
    dates: '4–6 September 2026',
    href: '/janmashtami-mathura-vrindavan-cab',
    cta: 'Book Janmashtami cab',
    body: 'Midnight abhishek at Krishna Janmabhoomi and Banke Bihari — same-day and overnight cabs from Delhi NCR.',
  },
  {
    keys: ['kedarnath', 'badrinath', 'gangotri', 'yamunotri', 'char-dham', 'chardham'],
    start: '2026-09-01',
    end: '2026-10-31',
    eyebrow: 'Char Dham 2026 · portals close in November',
    event: 'Char Dham',
    dates: 'clear-weather window to early November',
    href: '/chardham-yatra-september-2026',
    cta: 'Book Char Dham cab',
    body: 'Post-monsoon is the clearest darshan weather of the year. Kedarnath and Badrinath portals close after Diwali — book the yatra before the window shuts.',
  },
];

function slugify(v) {
  return String(v || '')
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-');
}

function titleCase(v) {
  return String(v || '')
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

/**
 * Resolve the seasonal call-out for a destination, or null.
 * @param {object} p
 * @param {string} p.destination   name or slug ("Ayodhya", "ayodhya", "Vaishno Devi")
 * @param {string} [p.origin]      name, used only for the heading
 * @param {string} [p.bookingHref] a corridor booking URL the caller KNOWS exists
 * @param {Date}   [p.now]
 */
export function getSeasonalCorridorCallout({ destination, origin, bookingHref, now = new Date() }) {
  const key = slugify(destination);
  if (!key) return null;
  const t = now.getTime();
  const hit = SEASONAL_CORRIDORS.find(
    (c) =>
      c.keys.some((k) => key === k || key.endsWith(`-${k}`) || key.startsWith(`${k}-`)) &&
      t >= new Date(`${c.start}T00:00:00${IST}`).getTime() &&
      t <= new Date(`${c.end}T23:59:59${IST}`).getTime()
  );
  if (!hit) return null;
  const destName = titleCase(destination);
  const heading = origin
    ? `${origin} to ${destName} cab for ${hit.event} — ${hit.dates}`
    : `${destName} cab for ${hit.event} — ${hit.dates}`;
  return {
    eyebrow: hit.eyebrow,
    heading,
    body: hit.body,
    href: hit.href,
    cta: hit.cta,
    bookingHref: bookingHref || null,
    bookingCta: origin ? `${origin} to ${destName} cab fares` : `${destName} cab fares`,
  };
}
