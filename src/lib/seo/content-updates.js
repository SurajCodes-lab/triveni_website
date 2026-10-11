// Week 48 recorded explicit dates for the pages its passes changed. Week 49
// extends that to every built page: scripts/week49-content-dates.cjs derives a
// page's date from the last git commit touching its template, data and shared
// components, or the explicit pass date where a pass is not yet committed,
// whichever is later. Neither file ever contains the clock or the build time.
import week48 from '@/generated/week48-content-updates.json';
import all from '@/generated/content-updates.json';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export function getContentUpdatedOn(url) {
  const path=String(url || '').replace(/^https?:\/\/(?:www\.)?trivenicabs\.in/,'').replace(/[?#].*$/,'').replace(/\/$/,'') || '/';
  const a = all[path] || null;
  const b = week48[path] || null;
  if (a && b) return a > b ? a : b;
  return a || b;
}

/** "12 September 2026" for a YYYY-MM-DD, or null. */
export function formatCheckedOn(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || ''));
  if (!m) return null;
  return `${Number(m[3])} ${MONTHS[Number(m[2]) - 1]} ${m[1]}`;
}
