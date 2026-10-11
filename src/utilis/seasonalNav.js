// src/utilis/seasonalNav.js
//
// Date-driven "Yatra & Season" navigation. The header used to hard-code the
// August–September pages (Janmashtami, Leh–Ladakh, September long weekends),
// which meant that on 4 September — with Navratri five weeks out and Diwali
// nine — the site's most valuable seasonal pages had no header link at all,
// and the stale August items would have stayed in the menu until someone
// remembered to edit the component.
//
// The list is resolved ONCE on the server in the root layout (ISR, revalidate
// 3600) and passed to <Header seasonalNav={...}/> as plain data, so the client
// component never calls new Date() itself and there is no hydration mismatch
// at a window boundary.
//
// Ordering: soonest-ending first, because the item that expires next is the one
// a visitor most needs to act on. `limit` keeps the dropdown to a sane height.

export const SEASONAL_NAV = [
  { href: '/janmashtami-mathura-vrindavan-cab', label: 'Janmashtami Mathura — 4–6 Sep', start: '2026-08-28', end: '2026-09-07' },
  { href: '/leh-ladakh-august-september-trip', label: 'Leh–Ladakh — last Sep window', start: '2026-08-01', end: '2026-09-30' },
  { href: '/september-long-weekend-trips-2026', label: 'Sep long weekends', start: '2026-08-01', end: '2026-09-30' },
  { href: '/kedarnath-september-trip', label: 'Kedarnath — clear-weather window', start: '2026-09-01', end: '2026-10-15' },
  { href: '/navratri-vaishno-devi-cab', label: 'Navratri Vaishno Devi — 11–20 Oct', start: '2026-09-04', end: '2026-10-20' },
  // Week 48 guides: the editorial pages behind the booking pages, in the same windows.
  { href: '/navratri-vaishno-devi-by-road', label: 'Navratri by road: Delhi–Katra guide', start: '2026-09-13', end: '2026-10-20' },
  { href: '/kullu-dussehra-2026-by-car', label: 'Kullu Dussehra — 20–26 Oct', start: '2026-09-13', end: '2026-10-26' },
  { href: '/deepotsav-ayodhya-2026-guide', label: 'Deepotsav Ayodhya guide — 7 Nov', start: '2026-09-13', end: '2026-11-08' },
  { href: '/diwali-tour-packages-2026-from-delhi', label: 'Diwali trips from Delhi — 7–9 Nov', start: '2026-09-13', end: '2026-11-08' },
  { href: '/chhath-puja-varanasi-ghat-guide', label: 'Chhath Varanasi ghat guide — 13–16 Nov', start: '2026-10-10', end: '2026-11-16' },
  { href: '/pushkar-mela-2026-by-car', label: 'Pushkar Mela by car — 17–25 Nov', start: '2026-09-13', end: '2026-11-25' },
  { href: '/dev-deepawali-varanasi-2026', label: 'Dev Deepawali Varanasi — 24 Nov', start: '2026-10-20', end: '2026-11-24' },
  { href: '/best-car-for-wedding-2026', label: 'Best car for a wedding — season from 20 Nov', start: '2026-10-01', end: '2026-12-31' },
  { href: '/durga-puja-travel-transport', label: 'Durga Puja & Dussehra — 17–20 Oct', start: '2026-09-20', end: '2026-10-20' },
  { href: '/chardham-yatra-september-2026', label: 'Char Dham — before portals close', start: '2026-09-01', end: '2026-10-31' },
  { href: '/diwali-ayodhya-transport', label: 'Diwali Ayodhya Deepotsav — 7–8 Nov', start: '2026-09-04', end: '2026-11-08' },
  { href: '/chhath-puja-varanasi-transport', label: 'Chhath Varanasi — 13–16 Nov', start: '2026-10-15', end: '2026-11-16' },
  { href: '/pushkar-mela-transport', label: 'Pushkar Mela — 17–25 Nov', start: '2026-10-01', end: '2026-11-25' },
  // Week 49 guides and posts: the editorial pages for the winter season.
  { href: '/blog/manali-in-winter-by-road-december-to-february-drive', label: 'Manali in winter by road', start: '2026-11-15', end: '2027-02-28' },
  { href: '/blog/snowfall-places-near-delhi-this-winter-by-road', label: 'Where the snow is, and how far', start: '2026-11-15', end: '2027-02-15' },
  { href: '/blog/new-year-2027-road-trips-from-delhi-where-to-drive-cab-cost', label: 'New Year 2027 road trips', start: '2026-12-01', end: '2027-01-02' },
  { href: '/blog/driving-in-north-india-in-winter-fog-hill-roads-what-drivers-do', label: 'Winter driving: fog and hill roads', start: '2026-12-01', end: '2027-02-15' },
  { href: '/maha-shivratri-pilgrimage-cab', label: 'Maha Shivratri temple runs', start: '2027-01-20', end: '2027-02-20' },
  { href: '/christmas-shimla-manali-package', label: 'Christmas Shimla–Manali', start: '2026-11-15', end: '2026-12-26' },
  { href: '/wedding', label: 'Wedding cars — season opens 20 Nov', start: '2026-10-01', end: '2026-12-31' },
  { href: '/new-year-road-trip-packages', label: 'New Year road trips', start: '2026-12-01', end: '2027-01-02' },
  { href: '/winter-snow-trip-packages', label: 'Winter snow trips', start: '2026-11-15', end: '2027-01-15' },
];

const IST = '+05:30';

export function getSeasonalNavItems(now = new Date(), limit = 6) {
  const t = now.getTime();
  return SEASONAL_NAV
    .filter(
      (i) =>
        t >= new Date(`${i.start}T00:00:00${IST}`).getTime() &&
        t <= new Date(`${i.end}T23:59:59${IST}`).getTime()
    )
    .sort((a, b) => new Date(a.end) - new Date(b.end))
    .slice(0, limit)
    .map(({ href, label }) => ({ href, label }));
}
