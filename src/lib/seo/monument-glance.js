// src/lib/seo/monument-glance.js
//
// Week 48, strategy action 3: a direct-answer block on the monument and temple
// guides. These are the site's biggest pages by impressions (the Akshardham
// guide alone is shown about 247,000 times a quarter) and they are shown for
// searches that want three facts: when it opens, when it is closed, and what
// the ticket costs. Google prints those facts in its own panel above the
// result, so a page that buries them under history loses the click. This block
// puts them at the top of the page in plain rows.
//
// Every value comes from the post's own `attractionData`, the structured
// object the guide already renders further down; nothing is added here that
// the page does not already say. Only the primary guide for each monument is
// on the list: the older history/architecture siblings carry slightly
// different figures and would contradict the guide next to them, and the two
// out-of-region guides (Mysore, Mumbai) stay as they are.

const GLANCE_SLUGS = new Set([
  'akshardham-temple-delhi-guide-2026',
  'india-gate-delhi-complete-guide-2026',
  'hawa-mahal-jaipur-complete-guide-2026',
  'lotus-temple-delhi-complete-guide-2026',
  'nahargarh-fort-jaipur-complete-guide-2026',
  'amber-fort-jaipur-complete-guide-2026',
  'qutub-minar-delhi-complete-guide-2026',
  'city-palace-jaipur-complete-guide-2026',
  'red-fort-delhi-complete-guide-2026',
  'golden-temple-amritsar-complete-guide-2026',
  'jaigarh-fort-jaipur-complete-guide-2026',
  'mehrangarh-fort-jodhpur-complete-guide-2026',
  'chittorgarh-fort-complete-guide-2026',
  'agra-fort-complete-guide-2026',
  'humayuns-tomb-delhi-complete-guide-2026',
  'fatehpur-sikri-complete-guide-2026',
  'taj-mahal-complete-guide-2026',
  'kedarnath-temple-complete-guide-2026',
]);

const ALL_DAY = /^24 ?hours|^24\/7/i;

function clean(v) {
  return typeof v === 'string' && v.trim() ? v.trim() : null;
}

function titleCase(key) {
  return key.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase()).trim();
}

/**
 * Returns { name, rows: [{ label, value }], publishedOn } or null when the
 * post is not on the list or its data cannot fill the block.
 */
export function getMonumentGlance(post) {
  if (!post || !GLANCE_SLUGS.has(post.slug)) return null;
  const a = post.attractionData || {};
  const t = a.timings || {};
  const f = a.entryFee || {};
  const rows = [];

  const open = clean(t.open);
  const close = clean(t.close);
  if (open && ALL_DAY.test(open)) rows.push({ label: 'Hours', value: 'Open 24 hours' });
  else if (open && close) rows.push({ label: 'Hours', value: `${open} to ${close}` });
  else if (open) rows.push({ label: 'Opens', value: open });

  const lastEntry = clean(t.lastEntry);
  if (lastEntry) rows.push({ label: 'Last entry', value: lastEntry });

  const closedOn = clean(t.closedOn);
  if (closedOn) {
    const never = /^(never|open all days)/i.test(closedOn);
    rows.push({ label: 'Closed', value: never ? 'Open every day' : closedOn });
  }

  const indian = clean(f.indian);
  const foreign = clean(f.foreign);
  if (indian && foreign && indian === foreign) rows.push({ label: 'Entry', value: indian });
  else {
    if (indian) rows.push({ label: 'Entry, Indian', value: indian });
    if (foreign) rows.push({ label: 'Entry, foreign', value: foreign });
  }
  if (!indian && !foreign) {
    // Temple-style fee objects (Akshardham: temple / exhibition / fountain).
    for (const k of ['temple', 'exhibition', 'musicalFountain']) {
      const v = clean(f[k]);
      if (v) rows.push({ label: titleCase(k), value: v });
    }
  }
  const children = clean(f.children);
  if (children) rows.push({ label: 'Children', value: children });

  for (const k of ['lightShow', 'musicalFountain']) {
    const v = clean(t[k]);
    if (v) rows.push({ label: titleCase(k), value: v });
  }

  if (rows.length < 3) return null;

  const name = (post.attractionName || post.title || '')
    .replace(/\s*[|:–—-]\s*.*$/, '')
    .replace(/\s*\(20\d\d\)\s*$/, '')
    .replace(/\s+(Timings?|Entry Fee|Ticket Price|Darshan).*$/i, '')
    .trim();

  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let publishedLabel = null;
  const d = post.date ? new Date(post.date) : null;
  if (d && !Number.isNaN(d.getTime())) publishedLabel = `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;

  return { name: name || 'This monument', rows, publishedLabel };
}
