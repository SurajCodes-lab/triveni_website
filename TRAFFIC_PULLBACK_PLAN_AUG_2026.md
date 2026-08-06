# Traffic + Pull-Back Plan — More Visitors In, More Visitors Returning
**Date:** 3 August 2026 · Goal per user: "good traffic over site, good pull back onto site" — grow acquisition AND make visitors come back instead of one-and-done.

The SEO/AEO/CRO base is now strong (Weeks 40–41). This plan adds the missing layer: **assets people bookmark, tools people reuse, feeds that resurface us, and a WhatsApp loop that owns the relationship.**

---

## 1. IMPLEMENTED TODAY (in this build)

### A. `/long-weekend-calendar-2026` — the bookmark magnet 🔖
**Why:** "long weekends 2026 India" is a perennial high-volume query, and a calendar is the single most re-visited content type in Indian travel — people come back before every holiday. One page now serves every remaining 2026 window.
**What:** all weekday-verified remaining windows (15–16 Aug, 28–30 Aug, 4–6 Sep, 12–14 Sep, 2–4 Oct, Diwali 7–9 Nov, 25–27 Dec, 1–3 Jan 2027), each with a trip idea + 2–3 live booking links; expired weekends auto-drop (IST date logic); ItemList + FAQPage + Service schema; QuickAnswer for AI engines; explicit "Bookmark this page" nudge; **"Get this calendar on WhatsApp" CTA — every send creates a saved chat thread we can be re-found in** (the pull-back mechanism that matters in India).
**Links in:** footer Season Specials (sitewide), fare-calculator cross-link, llms.txt, sitemap (priority 0.85 weekly).

### B. `/fare-calculator` — the reusable tool 🧮
**Why:** tool pages are used repeatedly (every trip = a visit), earn organic backlinks ("check fare here"), and target calculator-intent queries competitors serve badly.
**What:** standalone page mounting the existing `FareCalculator` component + the full canonical rate-card as a semantic table + HowTo schema + QuickAnswer ("How much does a taxi cost per km in India?" — a direct AI-quotable answer) + cross-links to money hubs and the calendar.
**Links in:** footer Quick Links (sitewide), llms.txt, sitemap.

### C. `/rss.xml` — feed + Discover infrastructure 📡
Latest 50 blog posts as RSS 2.0. Google/Bing crawl-freshness signal, Google Discover eligibility support (with the `max-image-preview:large` already set sitewide), and feed-reader subscribers = automatic pull-back on every new post. Zero maintenance — generated from `blogPosts`.

### D. Contact page visual energy pass 🎨 (user: "still dull")
Screenshot-reviewed the live page like a designer: hero was fine; the dullness was five identical near-black sections below it. Fixed with **rhythm**: "Three ways to get a fare" → warm gold-cream light band with per-channel color identities (gold call / green WhatsApp / sky email); Fleet → light band so the vehicle photos finally pop on white cards with gold price chips; gold lane-marking dividers between bands. Dark → light → dark → light.

### Earlier today (same momentum thread, already live or in this build)
GA4 counting restored (`afterInteractive`) · INP: 19 infinite animations removed · 49 thin pages photo-uplifted · city-hub schema · alt WhatsApp on contact.

## 2. THE PULL-BACK STRATEGY (why these four)
A first-time visitor books at most once. Return visits come from: (1) **a reason to save the page** (calendar, calculator), (2) **a channel we own** (the WhatsApp thread — every CTA on the site now funnels into a saved chat; broadcast lists let the business re-engage before each season), (3) **content that resurfaces** (RSS/Discover, seasonal pages that update), (4) **remembering the brand** (consistent gold identity, the phone number as a memorable hero).

## 3. USER-SIDE PLAYBOOK (needs the business, not code — 30 min/week)
| Action | Cadence | Why it compounds |
|---|---|---|
| **WhatsApp Business broadcast list**: everyone who ever messaged → one broadcast before each long weekend ("Independence Day cabs filling — reply to hold yours") | before each window (next: ~Aug 10) | The single highest-ROI pull-back lever this business has; zero cost |
| **GMB post** (share.google/j6xZlLm0CX6VrKCgl): one post/week — this week: link the Long Weekend Calendar | weekly | Maps visibility + a fresh signal Google rewards |
| **Review ask** after every completed trip (WhatsApp template with the GMB review link) | every trip | Review velocity = local rankings = free traffic |
| **GSC**: Request indexing for /long-weekend-calendar-2026 + /fare-calculator after deploy; submit sitemap | once, post-deploy | Days faster into the index before Aug 15 |
| Directory citations (Justdial, Sulekha, TripAdvisor operator profile) with the exact NAP (366 Dandupura…) | one/week | Off-page authority — the untouched lever |

## 4. MEASUREMENT
- Calendar + calculator: GSC impressions/clicks per URL weekly; GA4 returning-user % (now measurable again after the tag fix); wa.me clicks tagged `long-weekend-calendar` / `fare-calculator` contexts.
- RSS: server logs for /rss.xml fetches; Discover traffic in GSC (Performance → Discover tab appears when eligible).
- Targets: calendar page indexed before Aug 15 and ranking for "long weekend calendar 2026" variants within 3 weeks; returning-visitor share +20% by end September.

## 5. NEXT CANDIDATES (not built yet — data-gated or needs decision)
- Fresh 6-month GSC export → title wave-2 on position-6–25 laggards (Week 41 Track A4/A5).
- `where-to-go/[month]` promotion rotation (auto-link current month in footer).
- PWA install prompt for repeat mobile visitors (manifest exists; needs UX decision).
- Blog post series for calculator-intent queries once export #2 shows the exact phrasings.

## 6. Deploy record (three trains, 3–4 Aug 2026)

**Train 1 — pull-back assets (DEPLOYED, backup `triveni-backup-cro-20260804_202301`):** /long-weekend-calendar-2026 + /fare-calculator + /rss.xml + footer/sitemap/llms wiring + contact light-band restyle + "North India booking desk" copy. Live-verified: all URLs 200, markers rendering.

**Train 2 — interactive contact v1 (DEPLOYED, backup `triveni-backup-cro-20260804_213156`):** live IST clock chip, copy-number button, embedded Google Map pinned to the exact Agra office address (lazy iframe). Live-verified through both deploy gates.

**Train 3 — feel-logic + tempo redesign (deploying):** build `IdL9AWaF-H4xD7ZczPyRk` (2,834 pages / 498 chunks, locally verified):
- **Tempo pages redesigned from scratch** (user ask): the 225-page route template + hub in Aurora language — visible fleet-photo heroes, signature seater-selector (5 photo cards, canonical ₹20/22/24/26/28, live route estimate = distance × 2 × rate), glass panels, framer-motion removed entirely from the route template (INP), full preserve-list verified (speakable/QuickAnswer/direct-answer/FAQ/LongTailFAQ/analytics/schema). Bonus: three more stale-rate bugs found in the originals (₹23 12-seater InfographicPanel, hub chips ₹23–35, missing 16-seater) — all corrected to canonical.
- **Contact "feel logic"**: India-desk identity ("{time} IST — evening rush, WhatsApp replies fastest" by hour), visible India brand hero (scrim on text side only), next-long-weekend chip (shared `longWeekends2026.js` util, auto-rolling), route memory (route pages remember the trip; contact greets "Continue planning {From} → {To}?" with a pre-filled WhatsApp link).
*Train 3 grew through four user-feedback iterations before shipping (all folded into ONE deploy):*
- **Google Maps embed was being refused** by `www.google.com/maps?q=…&output=embed` (broken-frame icon = the "blocked content" the user reported; diagnosed with a live browser screenshot + iframe inspection). Fixed to the keyless-embed host `maps.google.com/maps?q=…&z=15&output=embed`.
- **Contact FAQ → 2 per row** on desktop (user request), section widened to max-w-5xl.
- **Desk identity → India**: chip reads "{time} IST — {hour-aware message}" (never "in Agra"); fallback "The India desk is awake". Physical office/address/map remain Agra by design.
- **Tempo hub polish from user review**: fleet-card Book buttons compact on desktop (lg:w-auto lg:py-2 lg:text-[13px] — no full-width slabs), tempo FAQ also 2-per-row.
- **Design sign-off loop**: the redesigned tempo hub + delhi-to-manali route page were rendered locally and screenshot-reviewed BEFORE deploying (user had called the old live design "very dull/bad" — the screenshots confirmed the replacement is photo-forward with the branded fleet visible). Ship build: `d5sHqigf11KJBKsonRjSj` (2,834 pages / 498 chunks, all fix-markers verified).
- **Bus pages redesign from scratch** (user request "same as tempo, without the UI/UX misses"): agent running in an isolated worktree, pattern-matched to the approved tempo design with the compact-CTA + 2-col-FAQ + vivid-hero lessons pre-applied; ships as the NEXT train after verification.
- Known data nit for a follow-up: some tempo routes lack distanceKm → hero chip shows "Distance on request" (e.g. delhi-to-manali tempo); enrich tempoRoutes data later.

**Train B (staged, ships after Train A): premium-feel sweep + bus redesign**
- **Bus pages redesigned from scratch** (worktree-verified): route template (~80 pages) + hub on the approved tempo pattern — bus-size selector signature (8 real coach photos, rates strictly from busFleet data, honest "quote on request"), warm light band mid-page, FAQ 2-per-row, compact desktop CTAs, framer-motion/TypeAnimation/intersection-observer removed (bundle+INP win), hub sticky CTA rate corrected ₹25→₹30, duplicate fixed-bottom bar removed per CRO rule.
- **Premium strip**: `AutoRelatedFooter` ("Related Triveni Cabs Services", renders on ~2,800 pages) redesigned from a flat gray strip into a dark cohesive band — gold eyebrow, lane-marking divider, glass-pill links with gold hover — so page → strip → footer reads as one continuous premium surface. ItemList schema kept.
- **QA fixes**: Vercel analytics removal + apple-touch-icon.

**Train B — DEPLOYED LIVE 5 Aug** (backup `triveni-backup-cro-20260805_003658`): bus redesign live-verified, premium strip live on money pages, zero `_vercel` requests, apple-touch-icon.png scp'd to server public/ (overlay preserves public — new public files always need direct upload).

**Train C — Ultra-Premium v2, DEPLOYED LIVE 5 Aug** (build `Ahg3MXU--UNBBIjvG9UW8`, backup `triveni-backup-cro-20260805_013145`):
- v2 design system sitewide: Fraunces editorial serif via next/font (`--font-display` → `.font-display-serif`), `.text-gold-foil` metallic text (FFE9A0→FACF2D→B8860B), gold-bloom shadows (`.sheen`/`.bg-aurora` already existed in Aurora globals and now light up everywhere).
- Distance guides (101 pages) rebuilt to v2: cinematic 70vh hero, serif+foil headline, TrustSeal emblem, gold sheen one-way funnel CTAs, toll table with tfoot totals — screenshot-approved before ship.
- Toll-cost guides (25 pages) rebuilt to v2: receipt-grade TOLL LEDGER centerpiece with foil ₹ totals + seal chips — screenshot-approved.
- Serif hero H1s applied to tempo/bus hubs+routes, calendar, calculator.
- Live-verified: serif/foil/ledger markers + all sampled URLs 200. Note: Train A (tempo-only) never deployed — `scripts/` had been deleted by an external commit (7d60448); `deploy-code.sh` restored from git (1960660) and Train B/C superseded Train A's content entirely.

**Train D+ — DEPLOYED LIVE 6 Aug** (build `SKRlr2W0GGL0q26eFwvHT`, backup `triveni-backup-cro-20260806_000617`) — Train D's content plus the city v2 rebuild (~400 pages: cinematic serif hero with speakable-headline, photo fare cards, stat tiles, gold stops timeline, FAQ 2-col, framer-motion removed) and the tempo/bus mid-section polish (fare-card vehicle photos, journey stat tiles, gold timeline, real km/hrs in QuickAnswer via dataset-borrowing `resolveRouteMetrics` — no more "Contact Us" facts). Live-verified: new BUILD_ID, "530 km" on tempo delhi-to-manali, city serif hero, zero "from From", new Cache-Control header active.

**Train E — Wave-1 Ultra-Premium v2 + rate canonicalization, DEPLOYED LIVE 6 Aug** (build `btdbRPjo48Whsw6xgNC3j`, backup `triveni-backup-cro-20260806_022331`):
- Airport family (~75p): kit-level v2 (serif/foil/TrustSeal, 9 infinite keyframes removed, drop-point tables→cards) + hero badge fix (was rendering "3123 TERM").
- Sightseeing family (170p): emerald-foil identity, hidden tab content flattened into the DOM, QuickAnswers preserved byte-identical.
- Blog family (192p): hub rewrite, v2 post shell, ALL 12 layouts converted (serif+foil, motion-free), `.blog-prose` serif prose system, dead duplicate shell removed.
- Rate canonicalization (QA §5d): "Tempo ₹24/km" scrubbed from the sitewide brand metadata + schema + 6 hub pages + 25 recomputed howToReach fares; SUV informational fares aligned ₹14→₹15 (distance/toll/travel-by-car/bus-vs-cab computations, 8 road-trip totals rescaled, taxi-fare city cards) and Innova content → ₹18 — every informational fare now matches the booking pages.
- Live-verified: family markers + rate strings + zero "3123"/"₹14/km" residue. Visual sign-off: 1440px + 360px screenshot rounds pre-ship (defect #19 caught at this gate).

**Train D (superseded — content shipped inside Train D+):**
- NO MORE SIDEWAYS SCROLLING: every mobile table across tempo/bus/one-way/round-trip/calculator/toll/distance templates + shared DataTable now renders as stacked label/value cards below md (Toll Ledger = per-plaza cards + gold total card); true full-width tables on desktop; all overflow-x-auto table wrappers eliminated (grep-verified 0 across 7 files).
- MobileStickyBar double-"from" root-cause fix (was "from From ₹20/km" on tempo/bus hubs).
- Bus metadata ₹35/km → from ₹30/km (6 occurrences — tab title, OG, twitter).
- **Browser-cache fix** (`next.config.mjs`): HTML now `max-age=0, must-revalidate` for browsers + `s-maxage=3600` for CDN — users were seeing days-old designs after deploys ("everything looks same"); from this deploy forward every change is visible immediately without hard refresh.
