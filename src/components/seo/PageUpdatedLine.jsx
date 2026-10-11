'use client';

// Week 49: one visible, truthful "last updated" line on every page, rendered in
// the root layout above the footer. The date comes from the same record the
// WebPage markup and the sitemap use (scripts/week49-content-dates.cjs writes
// it; content-updates.js reads it on the server). The client bundle only
// carries the compact form: the site-wide default date plus the pages that
// differ from it, so the whole map costs a few kilobytes, not a hundred.
// usePathname is available during server rendering, so the line is in the
// HTML the crawler receives, not painted afterwards.
import { usePathname } from 'next/navigation';
import compact from '@/generated/content-updates-compact.json';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function format(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || ''));
  return m ? `${Number(m[3])} ${MONTHS[Number(m[2]) - 1]} ${m[1]}` : null;
}

export default function PageUpdatedLine() {
  const pathname = usePathname() || '/';
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : '/';
  // Every rendered page has a date in the record; the compact form carries the
  // pages that differ from the site-wide default explicitly.
  const iso = compact.exceptions[path] || compact.defaultDate || null;
  const label = format(iso);
  if (!label) return null;
  return (
    <div className="border-t border-slate-200 bg-slate-50">
      <p className="mx-auto max-w-7xl px-4 py-3 text-xs text-slate-500" data-page-updated={iso}>
        This page was last updated on <time dateTime={iso}>{label}</time>. Fares follow the published rate card; tolls and parking are extra at actuals.
      </p>
    </div>
  );
}
