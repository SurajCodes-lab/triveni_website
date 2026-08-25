import Link from 'next/link';
import { Hourglass } from '@/components/ui/icons';

/**
 * SeasonalBanner — a slim, sitewide top strip (rendered in layout.js above
 * <Header/>) that promotes the current in-window Aug–Jan campaign and links
 * to its page. Gives the seasonal money pages sitewide equity they previously
 * lacked (they were linked only from a footer column).
 *
 * Server component — computes `new Date()` at render. Paired with
 * `revalidate = 3600` in layout.js (ISR) so the strip stays date-accurate and
 * auto-expires without a redeploy, mirroring the per-page seasonBanner pattern
 * already used on the seasonal pages.
 *
 * CLS care: the outer `h-10` (40px) slot is reserved for the WHOLE season
 * window (Aug 1 – Jan 15). Whether a campaign is active or not, the slot
 * occupies the same 40px, so campaign transitions never shift the header
 * (site CLS is 0.00 and must stay there). Outside the season we render null
 * entirely — no year-round gap. An evergreen fallback campaign covers any
 * intra-season gap so the slot is never empty.
 *
 * Campaign list ordered by `end` ascending → the soonest-ending (most urgent)
 * active campaign wins. The two evergreen fallbacks are last, so a real campaign
 * always beats them; between them they cover Aug–Oct and Nov–Jan, and the season
 * simulation confirms zero empty weeks across the whole window.
 */
const SEASON_START = new Date('2026-08-01T00:00:00+05:30');
// Extended from 31 Oct to 15 Jan in Week 43. October to December is the peak
// season for every corridor this business runs, and the strip was switching
// itself off on 1 November — the single worst day of the year to stop promoting.
const SEASON_END = new Date('2027-01-15T23:59:59+05:30');

const CAMPAIGNS = [
  {
    // Independence Day (15 Aug) — promo window ends on the day itself; the
    // "Reserve by 12 August" CTA is stale after the 15th, so expire here and
    // let the banner fall through to the next in-window campaign.
    start: '2026-08-10T00:00:00+05:30',
    end: '2026-08-15T23:59:59+05:30',
    label: 'Independence Day Weekend — 15 Aug 2026',
    href: '/independence-day-weekend-packages-2026',
    cta: 'Weekend cab deals',
  },
  {
    // Raksha Bandhan week. Framed as an offer rather than a description, because
    // this is the strip's peak-demand window and a bare label converts poorly.
    // The promise is "no surge", which is an existing standing commitment — no
    // discount figure is invented here. If a specific ₹-off or %-off is agreed,
    // put it in `label`; that is a commercial decision, not a copy one.
    start: '2026-08-20T00:00:00+05:30',
    end: '2026-08-30T23:59:59+05:30',
    label: 'Raksha Bandhan Week Offer — sibling-visit cabs at locked fares, no surge',
    href: '/raksha-bandhan-cab-service',
    cta: 'See Rakhi offer',
  },
  {
    start: '2026-08-28T00:00:00+05:30',
    end: '2026-09-07T23:59:59+05:30',
    label: 'Janmashtami Mathura–Vrindavan — Sep 4–6',
    href: '/janmashtami-mathura-vrindavan-cab',
    cta: 'Book Janmashtami cab',
  },
  {
    start: '2026-08-28T00:00:00+05:30',
    end: '2026-09-12T23:59:59+05:30',
    label: 'Ganesh Chaturthi — group & family transport',
    href: '/ganesh-chaturthi-transport',
    cta: 'Book Ganesh cabs',
  },
  {
    start: '2026-09-01T00:00:00+05:30',
    end: '2026-10-15T23:59:59+05:30',
    // Runs to 15 Oct, so the label must not name September — the strip would
    // read "Kedarnath in September" to every visitor for the first fortnight of
    // October. Surfaced by the season simulation, not by review.
    label: 'Kedarnath — the clear-weather darshan window',
    href: '/kedarnath-september-trip',
    cta: 'Book Kedarnath cab',
  },
  {
    start: '2026-09-01T00:00:00+05:30',
    end: '2026-10-31T23:59:59+05:30',
    label: 'Char Dham Yatra 2026 — portals open, book before closing',
    href: '/chardham-yatra-september-2026',
    cta: 'Book Char Dham taxi',
  },
  {
    start: '2026-08-01T00:00:00+05:30',
    end: '2026-09-30T23:59:59+05:30',
    label: 'Leh–Ladakh & Spiti — last Aug–Sep road-trip window',
    href: '/leh-ladakh-august-september-trip',
    cta: 'Plan the road trip',
  },
  // ── Oct–Dec peak season ───────────────────────────────────────────────────
  //
  // Added Week 43. The season window previously closed on 31 October, so this
  // strip — the site's only sitewide seasonal promotion — went dark on 1 November
  // and stayed dark through the busiest months of the year. Meanwhile
  // /diwali-ayodhya-transport, /winter-snow-trip-packages,
  // /christmas-shimla-manali-package, /christmas-new-year-cab-packages and
  // /new-year-road-trip-packages all already existed with nothing driving traffic
  // to them. October to December is peak for exactly the corridors this business
  // runs: Delhi, Agra and Jaipur have their best weather, and Shimla and Manali
  // get the snow demand.
  //
  // Campaigns are deliberately started 4–8 weeks before the event. Search demand
  // for "manali in december" builds through October, and a page published on 20
  // December has no time left to rank.
  //
  // No exact festival dates in the labels — Diwali moves year to year and a wrong
  // date printed sitewide is worse than a vaguer one that stays true.
  {
    start: '2026-10-01T00:00:00+05:30',
    end: '2026-11-12T23:59:59+05:30',
    label: 'Diwali & festive-season cabs — Ayodhya Deepotsav',
    href: '/diwali-ayodhya-transport',
    cta: 'Book festive cabs',
  },
  {
    start: '2026-10-01T00:00:00+05:30',
    end: '2026-11-30T23:59:59+05:30',
    label: 'Golden Triangle peak weather — Delhi, Agra & Jaipur at their best',
    href: '/golden-triangle-tour-cost',
    cta: 'See trip cost',
  },
  {
    start: '2026-11-15T00:00:00+05:30',
    end: '2026-12-26T23:59:59+05:30',
    label: 'Christmas in Shimla & Manali — snow-season cabs',
    href: '/christmas-shimla-manali-package',
    cta: 'Book Christmas trip',
  },
  {
    start: '2026-12-01T00:00:00+05:30',
    end: '2027-01-02T23:59:59+05:30',
    label: 'New Year road trips — book before the fleet fills',
    href: '/new-year-road-trip-packages',
    cta: 'Plan New Year',
  },
  // Evergreen fallback — covers any intra-season gap so the slot is never empty.
  // Two of them now: one per half of the extended window, so the Nov–Jan stretch
  // is never left with an empty 40px slot.
  {
    start: '2026-08-01T00:00:00+05:30',
    end: '2026-10-31T23:59:59+05:30',
    label: 'August & September long-weekend getaways from Delhi',
    href: '/september-long-weekend-trips-2026',
    cta: 'See long-weekend trips',
  },
  {
    start: '2026-11-01T00:00:00+05:30',
    end: '2027-01-15T23:59:59+05:30',
    label: 'Winter snow trips — Shimla, Manali, Auli & Dalhousie',
    href: '/winter-snow-trip-packages',
    cta: 'See snow packages',
  },
];

export default function SeasonalBanner() {
  const now = new Date();
  // Off-season: render nothing (no reserved slot, no year-round gap).
  if (now < SEASON_START || now > SEASON_END) return null;

  const active = CAMPAIGNS.find(
    (c) => now >= new Date(c.start) && now <= new Date(c.end)
  );

  // Fixed-height slot (40px) reserved for the whole season → CLS stays 0
  // across campaign transitions (appear/disappear never shifts the header).
  return (
    <div className="h-10" role="region" aria-label="Seasonal offer">
      {active && (
        <div className="border-b border-amber-500/40 bg-amber-400 text-slate-900">
          <div className="mx-auto flex h-10 max-w-5xl items-center justify-center gap-2 px-4">
            <Hourglass className="h-4 w-4 shrink-0" aria-hidden="true" />
            <p className="truncate text-[0.78rem] font-semibold leading-tight sm:text-sm">
              <span className="font-black">{active.label}</span>
              {' — '}
              <Link
                href={active.href}
                className="underline decoration-slate-900/40 underline-offset-2 hover:decoration-slate-900"
              >
                {active.cta}
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}