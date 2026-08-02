# Week 41 — In-Depth Implementation Notes (task by task)
**Started:** 2 August 2026 · **Plan:** `WEEK41_PLAN_CTR_CRO_AUG_2026.md` · Status legend: ✅ done+verified · 🔄 agent running · ⏳ queued (Batch 2)

This file explains each task deeply: what changed, in which files, HOW it works, and WHY it moves rankings/CTR/conversions. Appended as tasks complete.

---

## Task F1 — Git commit of 4 months of deployed work ✅

**Problem.** Every deploy ships build artifacts by tarball; source stayed uncommitted since 5 April (690 changed/untracked files). One disk failure = the entire Week 37–40 program exists only on the production server in compiled form.

**What was done.** `git add -A` + commit `9c48412` ("week40-week41: un-orphan 87 pages, AEO/GEO all templates, GSC sprint…"). Local commit only — nothing pushed; no remote leak of keys (the .pem is in the repo folder — NOTE: it is tracked; consider `.gitignore` + history scrub later if the repo ever gets a public remote).

**Why it matters.** Recovery point + reviewable diffs for everything that follows. Every subsequent Week-41 change is now an isolated, revertable diff.

---

## Task 0 — `blogLinkHelper.js` (shared infrastructure for the blog mesh) ✅

**File created:** `src/lib/seo/blogLinkHelper.js`

**What it does.** `getRelatedBlogPosts([originCity, destinationCity], limit=3)` scans all ~191 posts (`blogPosts` from `@/utilis/blog`) and scores each by whether the route's city names appear in the post's slug/title/tags. Destination matches outscore origin matches (the page is *about* the destination); longer city names score higher (protects against false hits from short strings). Returns `{slug, title, readTime}` only — never the post body.

**Critical design constraint.** `blog.js` is ~5,000 lines with full article HTML inside. Importing it into a **client** component would ship megabytes into the browser bundle. The helper is therefore documented server-only, and every consumer calls it inside `page.js` (server components), passing only the tiny result array into JSX. This is why the blog blocks are rendered server-side bands rather than added to the client components.

**Why it matters (SEO).** The audit showed link equity flowed one way: blogs → money pages. Money pages (which hold the site's strongest authority) gave nothing back, so blog posts rank below their potential — and blogs are the #3 click source (4,337 clicks/qtr). This helper closes the loop everywhere at once, data-driven, zero hardcoded lists to go stale.

---

## Task A2+H2 (one-way + round-trip) — fare-first metas + "Trip guides & tips" ✅

**Files:** `src/app/(routes)/one-way-cab/[route]/page.js`, `src/app/(routes)/round-trip/[route]/page.js`

**1) Meta descriptions (A2).** `generateMetadata` now emits descriptions that LEAD with the transaction numbers, pattern:
`"₹{sedan} all-inclusive · {km} km · {time} · toll & GST included · 4.9★ Triveni Cabs. …"`
All values come from the route object (calcFares chain) — no hand-written numbers, so the 180+79 pages can never drift from the canonical rate card. ≤160 chars so Google doesn't truncate the fare off the end.

**Why:** the GSC diagnosis — CTR at positions 4–10 is 0.35% vs 5.49% in the top 3. The description is the only SERP real estate we fully control at those positions. A fare in the first 30 characters is the single strongest differentiator vs aggregator competitors who can't quote a price.

**2) Blog band (H2).** After the related-links/corridor sections each page computes `getRelatedBlogPosts([from, to], 3)` and, when non-empty, renders a dark "Trip guides & tips" band (`one-way-cab/[route]/page.js:367-390`, heading "Read before you drive {from} to {to}") with up to 3 `<Link href="/blog/…">` cards. Server-rendered = real `<a>` in HTML = crawlable link equity, and zero client-bundle cost.

**Why:** 259 money pages × up to 3 contextual links ≈ up to ~750 new inbound links into the blog corpus, from the highest-authority template on the site. This is the mechanism behind Track H's "+50% blog-originated enquiries" target: readers arrive on money pages, undecided ones divert to the guide, the guide's InlineCTA/fare box (Task H1) brings them back to WhatsApp.

---

## Task A2+H2+G (tempo + bus) — metas, blog band, HowTo completion ✅

**Files:** `src/app/(routes)/tempo-traveller/[route]/page.js`, `src/app/(routes)/bus-routes/[route]/page.js`

**1) Meta descriptions:** bus pages now lead with "22-56 seater AC coach fares from ₹30/km, {distance}…" (`bus-routes/[route]/page.js:491`); tempo pages with the seater card (12-seat ₹20 … 26-seat ₹28). Same no-invented-numbers rule.

**2) Blog band:** same server-side `getRelatedBlogPosts` block as the money pages (`tempo…page.js:794,1046`, `bus…page.js:211`).

**3) HowTo schema gap closed (Track G).** The tempo route template has three rendering branches — Char Dham, city, and generic. The first two emitted `getHowToSchema` (rich-result eligible "How to book" steps); the generic branch — which serves the majority of the 215 tempo routes — did not. It now does (4 `getHowToSchema` references in the file, previously 2 usable). Every tempo route page is now HowTo-eligible in search.

**Why:** tempo queries ("12 seater tempo traveller delhi") are commercial, low-competition, and the seater-specific fares in the description are exactly what the searcher is deciding on. HowTo + FAQ + Product schema together maximize SERP footprint at unchanged positions.

---

## Task B1/B2/B6 (one-way + round-trip clients) — CRO at the decision point ✅

**Files:** `src/components/oneway/OneWayCabRouteClient.jsx`, `src/components/round-trip/RoundTripClient.jsx`

**1) Trust row AT the fare (B2).** A one-line strip — `★ 4.9 · Since 2015 · No hidden charges · Pay after trip` — placed immediately with the fare display (OneWay `:210,:243` two positions incl. mobile; RoundTrip `:99-105`), not in a distant "why us" section. Rationale: trust objections occur at the moment of price evaluation; badges seen 3 screens later don't help. "Pay after trip" is the single strongest anxiety-killer for first-time cab bookers and it's true to the business model (small advance, rest to driver).

**2) Above-the-fold actions (B1).** Round-trip hero now has a tracked gold "Get Free Quote" WhatsApp button (`wa.me/917668570551` with the route pre-filled) + a Call button (`:107-114`), both wired to the existing `trackWhatsAppClick`/`trackPhoneCall` GA4 events — so Target T5 (enquiry conversion +25%) is measurable per-template from day one.

**3) Congruence (B6).** Verified the fare in QuickAnswer = hero = calculator source field on both templates (single data path via `route.oneWayFares` / `route.cabFares`). SERP promise → landing display consistency: a user who clicked "₹2,530" in Google must see ₹2,530 in the first viewport, or trust dies.

**4) Defect caught in review:** the agent's gold button used `text-white` on `#FACF2D` (≈1.9:1 contrast — unreadable in sun, off-brand). Fixed to `text-black` (site pattern: black on gold). This is why every agent's diff gets reviewed.

---

## Task B1/B2 + G (tempo + bus clients) — CRO + query-intent answers 🔄→✅ pending final verify

**Files:** `src/components/DynamicTempoRoutes.js`, `src/components/DynamicBusRoutesClient.js`

Same trust-row + above-the-fold CTA treatment. Plus (Track G) the bus QuickAnswer explicitly answers the "delhi to X bus" query pattern with the honest cross-sell: buses 22–56 seats from ₹30/km (one-way billed as round trip), and for groups under 26 a Tempo Traveller is usually cheaper per seat — factual, and captures the 7.7K imp/qtr bus-intent queries onto the right vehicle. *(Detailed line refs added after final verification.)*

---

## Task I3 — Contact page redesign 🔄

**Files:** `src/app/(routes)/contact/**`
Spec being implemented: above-the-fold Call + WhatsApp + 24×7; ≤3-field enquiry handing off to a pre-filled WhatsApp message (no backend dependency — the site's proven pattern); office address + Google-Maps link (no iframe — CSP/perf); trust signals; per-service quick links; ContactPage + LocalBusiness JSON-LD with deterministic review counts (never the brand 10K at page level). *(Full write-up after verification.)*

## Task H1/H3 — Blog conversion units ✅ (agent + main-session completion)

**Files:** `src/app/(routes)/blog/[slug]/page.js`, `src/app/(routes)/blog/[slug]/BlogPostPageClient.jsx`

**How it works (server side, agent's engine — good work).** `buildTripCTA(post)` resolves a REAL Delhi-origin route for the post: tries human-written names first (`post.city`, `relatedDestinations[].name`), then leading segments of a `delhi-to-…` slug, probing `getOneWayRoute('delhi-to-{slug}')`. Guard rails worth noting:
- If no route resolves, a destination is only named when the city gazetteer (`getCityPlaceSchema`) recognises it — prevents "Delhi Wedding Cars" becoming a "trip destination".
- `post.primaryCTA` hrefs are validated against the actual dynamic-route tables (`DYNAMIC_ROUTE_SLUGS`) before linking — several posts carried CTA urls pointing at dynamic slugs that don't exist (hard 404 under `dynamicParams=false`); those now fall back to the resolved route page or `/one-way-cab`.
- Attraction-style posts (timings/forts/temples, regex-detected) get "Getting to {X} by Cab" copy instead of "Book this trip" — matching visit-planning intent (Task H3).
- Fare, distance, duration come only from `oneWayCabData`; a post with no matching route renders the box WITHOUT a price. Nothing invents a number.

**Client side (completed in main session — the agent stalled twice before rendering anything; caught by verification).** `BlogPostPageClient` now accepts `tripCTA` and renders a premium dark card in place of the old generic WhatsApp CTA: gold "Sedan from ₹X" chip (only when a real fare resolved), distance/duration chips, "4.9★ · Pay after trip", a gold booking button (black-on-gold) to the validated href, and a WhatsApp button pre-filled with the post title (attribution: the driver-side message says exactly which article produced the lead). Posts with no resolvable destination keep the original generic CTA — no post loses its conversion unit.

**Bonus fix found during verification:** the blog sidebar's Quick Links pointed at `/booking`, `/services/one-way`, `/services/round-trip` — none of which exist. That was a broken-link block on ALL 191 blog pages, now pointing at `/one-way-cab`, `/round-trip`, `/tempo-traveller`.

**Why it matters.** Blogs are the #3 click source (4,337/qtr) with the weakest monetisation. Every post now carries a route-specific, fare-quoted booking unit wired for GA4 attribution — the mechanism for Track H's +50% blog-originated enquiries target.

## Task E — Sightseeing vertical 🔄
**Files:** `src/app/(routes)/sightseeing/**`. QuickAnswer on tour detail + city-tour templates (emerald theme), membership-checked money links (one-way route / city hub / travel guide — zero 404 policy). *(Details after verification.)*

## Task B5 + trips — Season urgency banners + trips QuickAnswers ✅ (36 files, verified)

**Files:** the 15 season `page.js` wrappers + 12 `family-trip-*` + 9 friends/bachelor trip `page.js` files. **No shared components or data files touched** — important because all 15 season pages share ONE `FestivalTripClient.jsx` used by 27 pages (12 outside scope: diwali, holi, kumbh…); editing the client would have leaked banners onto pages that shouldn't have them. Banners/QuickAnswers therefore render from each page.js, above the hero (header is sticky, not fixed — nothing hidden).

**Season banners — how they work.** Each page declares its window(s) as IST literals (`'2026-08-16T23:59:59+05:30'` — explicit timezone so a UTC server can't expire a banner a day early). At render, `const now = new Date()` **inside the component** (not module scope — module scope would freeze the date at build time) picks the first unexpired window. With ISR `revalidate=3600`, an expired banner disappears within an hour, no deploy needed. Two pages auto-ROLL between windows: august-long-weekend shows Independence Day (15–16 Aug, reserve by 12 Aug) then flips to Raksha Bandhan (28–30 Aug, reserve by 25 Aug); september-long-weekend rolls Janmashtami → Ganesh Chaturthi.

**Honesty engineering (the notable part):**
- All dates came from each page's OWN `dates` field — two of the brief's assumed dates were corrected against page data (Independence Day is 15–16 Aug on the page, not 15–17; Ganesh Chaturthi 12–14 Sep).
- 6 pages got real countdowns (fixed festival dates). 9 pages have NO single date — a "reserve by" would have been fabricated, so their banners state each page's real constraint instead (Hariyali Teej's date isn't announced yet — the page itself says so; Valley of Flowers: peak bloom Aug–early Sep, park closes ~4 Oct — NOT "closes after bloom", which would be false; Spiti: Kunzum/Chandratal shut first on weather; Char Dham/Kedarnath: portals close around Bhai Dooj).
- Visibility simulated at 6 future dates across all 15 pages, incl. the window-rolls.

**Trips QuickAnswers (21 pages).** Reuses `QuickAnswer.jsx` tone="dark". Facts strictly from `familyTripData.js`/`friendsTripData.js`: duration, distance, vehicle prices (sedan/Innova for family; 12/17-seater tempo + per-person for friends), group size, best season. Edge cases kept honest: Kashmir = "Flight + 300 km by road" (not force-fitted as a km figure), Goa carries its data's own "local transport only, flights extra" note verbatim, bachelor-trip quotes 17-seater + mini bus because its data has no 12-seater. `bachelor-trip-north-india` included (same template/data family) so the set has no hole.

**Why it matters.** The 15 season pages got sitewide footer links in Week 40 (equity) — banners now convert that traffic with real deadlines during the exact three weeks (Aug 12–Sep 14) these events peak. Trips pages get their first extractable AEO block, each quoting per-person tempo pricing — the deciding fact for group-trip searches.

---

## Batch 2 (queued) ⏳
- **B4 INP sprint:** analytics off the main thread + framer-motion trim on the 5 money templates. Deferred from Batch 1 deliberately: it touches the same client files agents were editing — serialization prevents merge conflicts.
- **I1 thin-design census:** source-level sweep flagging pages with no hero image/no images/no sell unit; ranked by GSC clicks.
- **G city hubs:** `[cityName]` Place/Article schema (the schema-thinnest template).

## GSC-sprint deploy — COMPLETE, LIVE (2 Aug 2026) ✅

The July-31 GSC sprint (20 new /distance pages for ~92K imp/mo of proven queries, exact-match footer anchors, expressway toll phrasing, attraction exact answers) is **live on production**:
- Build `_FLnUAS2BAC62uH5KNms7`, 2,831 pages · deployed 2 Aug · backup `/home/ubuntu/triveni-backup-cro-20260802_213752`.
- Live-verified: 12/12 sampled new distance pages return 200 (golden-temple-to-wagah-border, kasol-to-chandigarh, delhi-to-jim-corbett, lansdowne-to-delhi, mount-abu-to-jaipur, dharamshala-to-manali, delhi-to-srinagar, delhi-to-spiti-valley, chandigarh-to-kasauli, varanasi-to-gaya, delhi-to-jewar-airport, rohtang-pass-to-manali); "Expressway Toll" phrasing live on /toll-cost/delhi-to-dehradun; Kashmir grounding live on /distance/delhi-to-srinagar.
- **USER ACTION pending:** GSC → Request indexing for the 20 new /distance URLs (fastest path to first impressions).

## Deploy/verify discipline (unchanged)
Each batch: single build → detached tarball+deploy (nohup, survives interruptions) → server-side size verification before overlay → live curl verification of changed markers → execution log + this file updated.
