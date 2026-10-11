// src/utilis/seasonalFooter.js
//
// The footer's seasonal link block, resolved by date.
//
// The block it replaces was written for the August–September 2026 peak and
// hard-coded, with a comment explaining that it gives those pages sitewide
// equity. It did exactly that — and it is the strongest internal link the site
// has, because the footer renders on all 3,833 pages.
//
// Which is why it mattered that it was still pointing at August in October.
// Measured in the built HTML: /where-to-go/august was linked from 3,833 pages
// and /where-to-go/october from 2. Sixteen of the seventeen slots were spent on
// a season that had passed, while the pages selling the current one were
// reachable from almost nowhere.
//
// So the list is date-driven now, the way src/utilis/seasonalNav.js already is
// for the header. Each entry carries the window in which it is worth a sitewide
// link; the month page follows the actual month; and a few commercial pages that
// are never out of season hold the remaining slots.
//
// Resolved once on the server in the root layout and passed to <Footer> as plain
// data, so the client component never calls new Date() and there is no hydration
// mismatch at a month boundary.

const IST = '+05:30';

const MONTH_SLUGS = [
  'january', 'february', 'march', 'april', 'may', 'june',
  'july', 'august', 'september', 'october', 'november', 'december',
];

const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

// Dated seasonal pages. Windows open a few weeks before the event, because the
// booking decision is made before the date rather than on it. Every href here
// was checked against the build manifest.
const SEASONAL = [
  { name: 'Navratri Vaishno Devi', href: '/navratri-vaishno-devi-cab', start: '2026-09-04', end: '2026-10-20' },
  { name: 'Navratri by Road Guide', href: '/navratri-vaishno-devi-by-road', start: '2026-09-13', end: '2026-10-20' },
  { name: 'Durga Puja & Dussehra', href: '/durga-puja-travel-transport', start: '2026-09-20', end: '2026-10-20' },
  { name: 'Kullu Dussehra by Car', href: '/kullu-dussehra-2026-by-car', start: '2026-09-13', end: '2026-10-26' },
  { name: 'Char Dham Before Portals Close', href: '/chardham-yatra-september-2026', start: '2026-09-01', end: '2026-10-31' },
  { name: 'Diwali Trips from Delhi', href: '/diwali-tour-packages-2026-from-delhi', start: '2026-09-13', end: '2026-11-08' },
  { name: 'Deepotsav Ayodhya Guide', href: '/deepotsav-ayodhya-2026-guide', start: '2026-09-13', end: '2026-11-08' },
  { name: 'Diwali Ayodhya Transport', href: '/diwali-ayodhya-transport', start: '2026-09-04', end: '2026-11-08' },
  { name: 'Chhath Varanasi Ghat Guide', href: '/chhath-puja-varanasi-ghat-guide', start: '2026-10-10', end: '2026-11-16' },
  { name: 'Chhath Varanasi Transport', href: '/chhath-puja-varanasi-transport', start: '2026-10-15', end: '2026-11-16' },
  { name: 'Pushkar Mela by Car', href: '/pushkar-mela-2026-by-car', start: '2026-09-13', end: '2026-11-25' },
  { name: 'Pushkar Mela Transport', href: '/pushkar-mela-transport', start: '2026-10-01', end: '2026-11-25' },
  { name: 'Dev Deepawali Varanasi', href: '/dev-deepawali-varanasi-2026', start: '2026-10-20', end: '2026-11-24' },
  { name: 'Best Car for a Wedding', href: '/best-car-for-wedding-2026', start: '2026-10-01', end: '2026-12-31' },
  { name: 'Christmas Shimla-Manali', href: '/christmas-shimla-manali-package', start: '2026-11-15', end: '2026-12-26' },
  { name: 'New Year Road Trips', href: '/new-year-road-trip-packages', start: '2026-12-01', end: '2027-01-02' },
  { name: 'Winter Snow Trips', href: '/winter-snow-trip-packages', start: '2026-11-15', end: '2027-01-15' },
  { name: 'Maha Shivratri Temple Runs', href: '/maha-shivratri-pilgrimage-cab', start: '2027-01-20', end: '2027-02-20' },
  { name: 'Monsoon Road Trips', href: '/monsoon-road-trip-packages', start: '2027-06-15', end: '2027-09-15' },
  { name: 'Monsoon Hill Stations', href: '/monsoon-hill-station-packages', start: '2027-06-15', end: '2027-09-15' },
  { name: 'Leh Ladakh Aug-Sep', href: '/leh-ladakh-august-september-trip', start: '2027-05-01', end: '2027-09-30' },
  { name: 'Valley of Flowers Trek', href: '/valley-of-flowers-trek-from-delhi', start: '2027-06-15', end: '2027-09-15' },
];

// Pages that are never out of season and earn a sitewide link on their own
// commercial merit. /monthly-car-rental is here because the October export put
// its query cluster at 6.57% CTR — ten times the site average — while the page
// itself was reachable from three pages.
const EVERGREEN = [
  { name: 'Wedding Cars', href: '/wedding' },
  { name: 'Monthly Car Rental', href: '/monthly-car-rental' },
  { name: 'Corporate Travel', href: '/corporate-transportation-service' },
  { name: 'Long Weekend Calendar', href: '/long-weekend-calendar-2026' },
  { name: 'Fare Calculator', href: '/fare-calculator' },
];

/**
 * The footer's seasonal links for a given moment: this month's where-to-go page
 * first, then whatever is genuinely in season, soonest-ending first, then
 * evergreen commercial pages to fill the block out to `limit`.
 */
export function getSeasonalFooterLinks(now = new Date(), limit = 17) {
  const t = now.getTime();

  // The month page follows the calendar instead of being written in by hand.
  const ist = new Date(t + (5 * 60 + 30) * 60 * 1000);
  const m = ist.getUTCMonth();
  const out = [{
    name: 'Where to Go in ' + MONTH_NAMES[m],
    href: '/where-to-go/' + MONTH_SLUGS[m],
  }];

  const inSeason = SEASONAL
    .filter((i) =>
      t >= new Date(i.start + 'T00:00:00' + IST).getTime() &&
      t <= new Date(i.end + 'T23:59:59' + IST).getTime())
    .sort((a, b) => new Date(a.end) - new Date(b.end));

  for (const i of inSeason) {
    if (out.length >= limit) break;
    out.push({ name: i.name, href: i.href });
  }
  for (const i of EVERGREEN) {
    if (out.length >= limit) break;
    if (!out.some((x) => x.href === i.href)) out.push(i);
  }
  return out;
}
