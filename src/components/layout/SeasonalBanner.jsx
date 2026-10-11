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
  // ---- ORDERING RULE: `find` returns the FIRST active entry, so position in
  // this array is priority. The default is `end` ascending (soonest-ending
  // wins), with two deliberate exceptions placed early: Navratri Vaishno Devi
  // and Diwali Ayodhya. Under strict end-ordering the Leh–Ladakh and Kedarnath
  // windows out-ranked Navratri until 16 October — five days before Dussehra,
  // after every advance booker had already decided — and Char Dham out-ranked
  // Diwali until 1 November. Those two are the highest-value festival corridors
  // of the year and need the strip from mid-September and from the day after
  // Dussehra respectively. Run `node scripts/season-sim.mjs` after any change.
  {
    // Independence Day (15 Aug) — expire on the day; the "Reserve by 12 August"
    // CTA is stale after the 15th.
    start: '2026-08-10T00:00:00+05:30',
    end: '2026-08-15T23:59:59+05:30',
    label: 'Independence Day Weekend — 15 Aug 2026',
    href: '/independence-day-weekend-packages-2026',
    cta: 'Weekend cab deals',
  },
  {
    // Raksha Bandhan week. "No surge" is an existing standing commitment — no
    // discount figure is invented here. A specific offer is a commercial call.
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
    // Sharad Navratri 11–20 Oct 2026, Dussehra 20 Oct. The Katra rush is the
    // single biggest pilgrimage demand spike of the quarter; promoted from
    // 13 Sep so the 4–6 week advance bookers see it. Added Week 47 — the strip
    // previously jumped from Kedarnath straight to Diwali with no Navratri.
    start: '2026-09-13T00:00:00+05:30',
    end: '2026-10-20T23:59:59+05:30',
    label: 'Navratri Vaishno Devi — 11–20 Oct, Dussehra 20 Oct — Katra cabs at fixed fares',
    href: '/navratri-vaishno-devi-cab',
    cta: 'Book Navratri cab',
  },
  {
    // Diwali is SUNDAY 8 NOV 2026 (not 19–21 Oct — that was the 2025 date and
    // was wrong in the data until Week 47). Deepotsav in Ayodhya is the
    // evening before. Window opens the day after Dussehra.
    start: '2026-10-21T00:00:00+05:30',
    end: '2026-11-08T23:59:59+05:30',
    label: 'Diwali in Ayodhya — Deepotsav 7 Nov, Diwali 8 Nov — fixed fares, no surge',
    href: '/diwali-ayodhya-transport',
    cta: 'Book Deepotsav cab',
  },
  {
    start: '2026-08-01T00:00:00+05:30',
    end: '2026-09-30T23:59:59+05:30',
    label: 'Leh–Ladakh & Spiti — last Aug–Sep road-trip window',
    href: '/leh-ladakh-august-september-trip',
    cta: 'Plan the road trip',
  },
  {
    // Runs to 15 Oct, so the label must not say "September".
    start: '2026-09-01T00:00:00+05:30',
    end: '2026-10-15T23:59:59+05:30',
    label: 'Kedarnath — the clear-weather darshan window',
    href: '/kedarnath-september-trip',
    cta: 'Book Kedarnath cab',
  },
  {
    start: '2026-09-01T00:00:00+05:30',
    end: '2026-10-31T23:59:59+05:30',
    label: 'Char Dham Yatra 2026 — portals open, book before closing',
    href: '/chardham-yatra-september-2026',
    cta: 'Book Char Dham cab',
  },
  {
    // Chhath 13–16 Nov 2026 (Sandhya Arghya 15, Usha Arghya 16).
    start: '2026-11-09T00:00:00+05:30',
    end: '2026-11-16T23:59:59+05:30',
    label: 'Chhath Puja Varanasi — 13–16 Nov — ghat-side cabs from Delhi & Lucknow',
    href: '/chhath-puja-varanasi-transport',
    cta: 'Book Chhath cab',
  },
  {
    // Pushkar Mela 17–25 Nov 2026, Kartik Purnima 24 Nov.
    start: '2026-11-01T00:00:00+05:30',
    end: '2026-11-25T23:59:59+05:30',
    label: 'Pushkar Mela — 17–25 Nov — Delhi & Jaipur cabs, driver stays on',
    href: '/pushkar-mela-transport',
    cta: 'Book Pushkar cab',
  },
  {
    start: '2026-10-01T00:00:00+05:30',
    end: '2026-11-30T23:59:59+05:30',
    label: 'Golden Triangle peak weather — Delhi, Agra & Jaipur at their best',
    href: '/golden-triangle-tour-cost',
    cta: 'See Golden Triangle fares',
  },
  {
    // Wedding season opens on Dev Uthani Ekadashi, 20 Nov 2026. Couples book
    // cars 4–8 weeks out, so this fills the slot between Pushkar and Christmas.
    start: '2026-11-26T00:00:00+05:30',
    end: '2026-12-10T23:59:59+05:30',
    label: 'Wedding season is here — BMW, Audi, Mercedes & baraat tempos, decor included',
    href: '/wedding',
    cta: 'See wedding cars',
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
    cta: 'Book New Year cab',
  },
  // Evergreen fallbacks — one per half of the window, so the slot is never empty.
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