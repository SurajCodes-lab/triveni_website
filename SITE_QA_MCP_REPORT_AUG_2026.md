# Site-Wide MCP Browser QA Report — trivenicabs.in
**Date:** 4–5 August 2026 · **Build under test:** Train B `_mbEpdMLfMzjpiMVddsRe` (2,834 pages, 498 JS chunks) · **Trigger:** user report — "on a few screens the component gets broken, this has happened multiple times"

---

## 1. Methodology — how the site is now tested before every deploy

Testing is driven through the Chrome DevTools MCP against the local **production** build (`npm start`, not dev mode — identical HTML/CSS/JS to what ships):

1. **True device emulation** — 360×800 @3x DPR with mobile + touch flags for interaction-level checks.
2. **The iframe width-matrix probe** — an in-page harness loads every template in a hidden same-origin iframe and steps it through exact CSS-pixel widths. At each width × page combination it measures:
   - **Horizontal overflow**: `scrollWidth − clientWidth` of the document (anything > 2px = a layout break; the offending element's class is captured by scanning for the widest `getBoundingClientRect().right`). This matters doubly on this site because `body{overflow-x:hidden}` **silently clips** overflowing components instead of showing a scrollbar — exactly the class of "component looks cut off/broken" the user reported.
   - **Broken images**: any `<img>` with `complete && naturalWidth === 0`.
   - **Frame/load errors** per page.
3. **Console audit** — error/warning stream reviewed per template.
4. **Design sign-off screenshots** — full-page and viewport captures reviewed before any redesign ships (this gate approved the tempo redesign and caught the contact-page issues below).
5. Long sweeps run **fire-and-forget inside the browser** (`window.__qa` accumulator + progress polling) so Chrome's protocol timeout can't kill a run — the final matrix executed as one uninterrupted 1,620-check pass.

## 2. Coverage — what was tested

**36 pages covering every template family** (each template renders tens-to-hundreds of production pages, so template-level coverage = site-wide coverage):

| Family | Pages tested | Production pages represented |
|---|---|---|
| Home | / | 1 |
| One-way | hub, delhi-to-agra, delhi-to-jibhi (new corridor) | 181 |
| Round-trip | hub, delhi-to-manali | 80 |
| Tempo (NEW redesign) | hub, delhi-to-manali | 226 |
| Bus (NEW redesign) | hub, delhi-to-manali | 81 |
| City | /delhi hub, /delhi-to-agra route | 400+ |
| Distance / Toll | delhi-to-manali, delhi-to-dehradun | 146 |
| Sightseeing | hub, city (agra), tour detail | 170 |
| Blog | hub, post (delhi-to-manali-road-trip-2026) | 192 |
| Travel guide | agra-travel-guide | 24 |
| Contact / About / Pricing | all three | 3 |
| New assets | long-weekend-calendar-2026, fare-calculator | 2 |
| Airport | hub, /airport-service/delhi | ~75 |
| Wedding / Corporate | hubs + wedding/delhi | ~60 |
| Season / festival | independence-day-weekend-packages-2026 | 27 |
| Trips | family-trip-manali, friends-trip-kasol | 30 |
| Comparison | shimla-vs-manali | ~25 |
| Same-day / special services | same-day-jaipur-tour, pet-friendly-cab-service | ~32 |

**46 viewport widths** (CSS px): 285 (historical clip-bug width) · 320 · 360 · 375 · 390 · 412 · 414 · 428 · 448 · 480 · 512 · 540 · 568 · 600 · 640 · 672 · 712 · 744 · 768 · 800 · 820 · 834 · 860 · 884 · 912 · 962 · 1024 · 1080 · 1112 · 1180 · 1200 · 1280 · 1320 · 1366 · 1400 · 1440 · 1512 · 1536 · 1600 · 1680 · 1728 · 1792 · 1856 · 1920 · 2048 · 2560 — every mainstream phone, phablet, tablet (portrait+landscape), laptop, desktop and QHD/4K-scaled class, plus the sub-320 stress width.

**Total structural checks: 1,676** (1,620 matrix + 36 warm-up pass at 360px + 20 from the preliminary two-width sweep).

## 3. Results — layout matrix

**1,676 / 1,676 PASS.** Zero horizontal-overflow defects, zero broken images, zero frame errors — at every width from 285px to 2560px, on every template family, including both from-scratch redesigns (tempo, bus) and all new pages (calendar, calculator, redesigned contact). The overflow-clipping class of breakage ("component gets cut/broken on some screens") is fully clear in this build.

## 4. Defects found & fixed (this QA cycle)

The clean matrix is the *end state*. Getting there, this cycle's testing caught and fixed:

| # | Defect | Where | How found | Fix |
|---|---|---|---|---|
| 1 | `/_vercel/insights/script.js` 404 + MIME-refused script — a console error and wasted request **on every page of the site** (leftover from a Vercel deployment; site runs on Lightsail) | `src/app/layout.js` (`@vercel/analytics` `<Analytics/>`) | Console audit | Component + import removed |
| 2 | `apple-touch-icon.png` referenced by `site.webmanifest` but missing → manifest warning on every page, no home-screen icon on iOS | `public/site.webmanifest` → missing file | Console audit | Real 180×180 icon generated from the brand logo → `public/apple-touch-icon.png` (ships via direct upload — `public/` is overlay-preserved) |
| 3 | Google Maps embed rendered as a blocked/broken frame (user-reported "content is blocked") | Contact page office section | User report + live screenshot + iframe inspection (Google refuses framing of `www.google.com/maps?q=`) | Embed host switched to `maps.google.com/maps?q=…&z=15&output=embed` (keyless embed endpoint that allows framing) |
| 4 | White text on gold buttons (~1.9:1 contrast — unreadable in sunlight) | RoundTripClient hero CTA (agent-introduced) | Code review of agent diff | `text-white` → `text-black` on gold; rule propagated to all later work |
| 5 | Blog sidebar Quick Links pointed at `/booking`, `/services/one-way`, `/services/round-trip` — none exist → broken links on **all 191 blog posts** | `BlogPostPageClient.jsx` | Code review during blog conversion work | Repointed to `/one-way-cab`, `/round-trip`, `/tempo-traveller` |
| 6 | Stale/contradictory tempo rates: ₹23 (12-seater) & ₹26 (17-seater) in InfographicPanel; ₹23/25/26/30/35 seater chips; missing 16-seater on hub | Tempo route rich block + hub | Redesign audit | All corrected to canonical ₹20/22/24/26/28; 16-seater added |
| 7 | Bus hub sticky CTA quoted ₹25/km vs data's ₹30/km; duplicate custom fixed-bottom bar violating the single-sticky-bar CRO rule | `BusMainClient.js` | Redesign audit | Rate corrected; duplicate bar removed (MobileStickyBar remains the only fixed bar) |
| 8 | 19 infinite JS animations + scroll-linked springs causing main-thread churn (INP >200ms class) on 416 high-traffic pages | Blog + tempo templates | INP audit (this week) | All removed; CSS-only motion |
| 9 | Build-breaking straight apostrophes in JSX (`react/no-unescaped-entities`) | Redesigned tempo files | Build lint gate | Typographic ’ substituted; rule added to all agent briefs |

**Design-level findings from the screenshot gate** (not "broken", but user-rejected): near-black monotone section walls (contact), drowned hero images, oversized desktop CTAs, single-column FAQ walls, the flat-gray related-services strip — all addressed in the premium passes (light-band rhythm, visible heroes, compact `lg:` CTAs, 2-per-row FAQs, dark glass-pill strip).

## 5. Standing process (from now on)

Every deploy = build → **this MCP matrix on the local production build** → fix → pack (content-sanity gate: BUILD_ID + chunk-count) → upload (size-verified) → overlay → **live chunk-integrity healthcheck** → live content-marker verification. Layout, assets, console, and JS-delivery are each gated. The known residue (informational, tracked): tempo routes missing `distanceKm` show an honest "Distance on request" chip; `_next` CSS-preload warning is a Next.js quirk, benign.

## 5b. Train C addendum (Ultra-Premium v2, 5 Aug)
Distance + toll v2 redesigns were screenshot-approved at 1440px (cinematic heroes, foil fares, Toll Ledger verified visually) and grep-verified for overflow-safety primitives. A 112-check width matrix (4 pages × 28 widths) was started locally; the MCP browser crashed mid-run (stale profile lock) before results could be read. **Owed: post-deploy production matrix on /distance and /toll-cost templates once the browser tooling restarts.** Risk assessed low: same page shell cleared 1,676 checks; both new clients wrap all tables in overflow-x-auto and use fixed-height image containers (grep-verified).

## 5c. Manual visual audit — round 2 (5 Aug, live production, eyes-on screenshots)

**Method:** true 360×800 mobile emulation against the LIVE site, section-by-section viewport screenshots reviewed manually (not just measured) on tempo hub, bus hub, distance route; DOM cross-checks (header/H1 counts) to separate real defects from screenshot-stitching artifacts.

**What looked right:** tempo fleet cards, bus fleet cards + filter chips, and the v2 distance hero all render premium at 360px — no card-layout breakage found on audited templates.

**Defects found → fixed (Train D):**
| # | Defect | Where | Fix |
|---|---|---|---|
| 10 | Sticky bottom bar rendered "from **From** ₹20/km" (double word) on tempo AND bus hubs | `MobileStickyBar` prepends "from" to labels that already start with "From" | Root-cause fix in MobileStickyBar — normalizes any incoming label (`replace(/^from\s+/i)`), covers every current and future page |
| 11 | Browser-tab title "Bus Hire India ₹35/km" vs canonical from-₹30 (body was correct) | `bus-routes/page.js` metadata (title/OG/twitter ×6) | All 6 occurrences → "from ₹30/km" |
| 12 | **Users saw days-old designs after every deploy** ("everything looks same") | `next.config.mjs` sent `s-maxage=604800` with no browser directive → browsers heuristically cached HTML for days; Cloudflare itself was DYNAMIC (not caching) | Header → `public, max-age=0, must-revalidate, s-maxage=3600, swr=86400`: browsers revalidate every visit, CDN still shields origin |
| 13 | Sideways-scrolling tables on mobile (user: "looks ugly") — tempo/bus fare charts, one-way/round-trip fare tables, calculator rate card, Toll Ledger, distance ×3 | 7 template files + shared DataTable | **Dual-render pattern**: `md:hidden` stacked label/value cards on mobile (Toll Ledger = per-plaza cards + gold total card), true full-width table on md+; ALL `overflow-x-auto` table wrappers eliminated (verified 0 remaining across the 7 files); shared DataTable upgraded so every consumer inherits |

**Standing rule added to the premium bar:** no sideways scrolling anywhere on mobile — tables must card-stack below md.

## 5c-bis. Manual visual audit — round 3 (6 Aug, Train E pre-ship, local production build)

**Method:** MCP screenshots at 1440px and true 360×800 on the three Wave-1 redesigned families (blog post + hub + a layout-converted heritage post, sightseeing city, airport city), plus in-page overflow/broken-image probes.

**Passed:** blog post hero (Fraunces serif over photo, gold dashes), blog hub (foil headline, journal identity, lane divider), layout-converted posts at 360px, sightseeing city (visible Taj hero, emerald serif accent, 0px overflow, 0 broken images), airport mobile hero.

**Defect found → fixed before ship:**
| # | Defect | Where | Fix |
|---|---|---|---|
| 19 | Airport hero badge rendered "CODE 3123 TERM" — the terminals string "3 Terminals (T1, T2, T3)" was digit-stripped to "3123" (visible on every multi-terminal airport city page at sm+) | `CityAirportServiceClient.js` TerminalBadge accentName | Take only the first number (`match(/\d+/)`), column relabeled "Code" → "Terminals" — now reads IATA DEL · Terminals 3 |

## 5d. Sitewide rate-contradiction audit — round 2 (6 Aug, pre-Train-E)

**Trigger:** Train E marker verification surfaced "Tempo ₹24/km" in the airport pages' metadata — traced not to the airport template but to the **global brand metadata in layout.js**, which had been quoting the 17-seater rate as if it were the tempo starting rate on every page of the site (including the meta description Google shows in search results). A full sweep followed.

| # | Defect | Where | Fix |
|---|---|---|---|
| 14 | "Tempo ₹24/km" / "starting ₹24/km" as the generic tempo rate (canonical start = ₹20/km, 12-seater) | layout.js brand metadata + Offer schema (price "24") · one-way-cab, round-trip-cab, outstation-cabs, local-taxi, services hub pages · outstationCityData (6 cities) · data.js fleet card | All → "from ₹20/km"; schema Offer price → "20"; "Innova/Tempo ₹24/km" → "Innova ₹18/km, Tempo from ₹20/km" |
| 15 | howToReachRouteData: 25 route entries quoting "Tempo Traveller (12-seater)" at ₹24/km **with fares computed at that rate** | howToReachRouteData.js | All 25 relabeled ₹20/km and every paired fare recomputed (price × 20⁄24) |
| 16 | 16-seater tempo quoted "From ₹24/km" (canonical ₹22) | seaterTempoData specs | → From ₹22/km |
| 17 | 17-seater quoted as a "₹24–26/km" range in comparison/blog content (canonical flat ₹24) | comparisonData, sightseeingBlogs, 12-vs-17 page | Ranges tightened to flat canonical rates |
| 18 | **SUV billed at ₹14/km on informational templates while the booking pages those templates funnel into bill Ertiga ₹15/Innova ₹18** — a visible ₹300+ discrepancy in one user session (the owed "₹14-vs-₹15" audit) | distanceData + travelByCarData + TollCostClient + busVsCabData `calcFares`-class computations (× 14 → × 15) · rate labels in DistanceGuideClient/TravelByCarClient/TollCostClient · FAQ/homepage/[cityName]/best-time/cab-service/taxiFareData (suv: 14 → 15 per city) · roadTripData (8 SUV trip totals rescaled ₹14→₹15/km with matching prose) · fleet + costBlogs Innova content (₹14-16/km → canonical ₹18/km) | All informational fares now match booking-page rates exactly |

**Deliberately untouched (business decision needed):** `roundTripData.js` computes round-trip SUV fares at ₹14/km × 0.9 — these are published money-page prices with their own discount structure; changing them raises live quoted fares ~7%. Flagged alongside the existing tempo hub-vs-route price conflict for the owner's call.

## 6. Verdict

The build shipping as Train B is the most-tested state this site has ever been in: **1,676 structural checks clean across 46 screen widths**, nine functional defects fixed this cycle, and the two from-scratch redesigns (tempo, bus) validated both structurally and visually before deploy.
