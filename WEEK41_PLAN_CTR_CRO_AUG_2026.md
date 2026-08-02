# Week 41 Plan — Hit the Targets: CTR → 1.0%+ and UI/UX Conversion (CRO)
**Date:** 2 August 2026 (week of 3–9 Aug) · **Theme:** Week 40 fixed visibility and answerability. Week 41 converts it: more clicks from the same impressions (CTR), and more bookings from the same clicks (CRO/UI-UX). Every track below has a measurable target.

---

## 0. Where Week 41 starts from

- Week 40 DEPLOYED: 87 pages un-orphaned, QuickAnswer + fare tables on all 5 money templates, GEO schema complete, llms.txt full coverage, season pages linked sitewide.
- GSC sprint DEPLOYED/deploying: 20 new distance pages (~92K imp/mo of proven demand), exact-match booking anchors, expressway toll phrasing, attraction exact answers.
- Baseline (GSC, 30 Apr–29 Jul): 39,876 clicks · 6.26M imp · **0.64% CTR** · pos 8.4 · 179 striking queries (pos 6–25) = 1.21M imp at 0.14% CTR.
- August tailwind live: Independence Day (Aug 15), Raksha Bandhan (Aug 28), long weekends — peak booking season.

## 1. The targets (what "reached" means)

| # | Target | Baseline | Week-41+ goal | Measured in |
|---|---|---|---|---|
| T1 | Site CTR | 0.64% | **≥0.80% by end Aug, 1.0%+ by end Sep** (≈ +22K clicks/qtr) | GSC weekly |
| T2 | Striking-distance queries in top 5 | 0 of 179 | **≥40 of 179 in top 5** | GSC position filter |
| T3 | 20 new distance pages | not indexed | **indexed + first impressions within 7 days; pos ≤8 in 21 days** | GSC URL inspection / Pages |
| T4 | Booking-intent CTR (money pages) | 0.35% at pos 4–10 | **≥1.5% on booking queries** | GSC query filter cab/taxi |
| T5 | Enquiry conversion (clicks → WhatsApp/call taps) | establish baseline wk1 | **+25% by end of Aug** | GA4 events (trackWhatsAppClick/trackPhoneCall) |
| T6 | Mobile INP | 1,304 URLs >200ms | **money templates <200ms** | CrUX/PageSpeed field data |
| T7 | AI citations (ChatGPT/Perplexity/AI Overviews) | untracked | **weekly test log, ≥5 corridors cited with correct fares** | manual test sheet |

## 2. Tracks

### Track A — CTR wave 2 (more clicks, same rankings) 🔴
- **A1. Post-deploy indexing push:** submit sitemap in GSC; URL-inspect + request indexing for the 20 new distance pages and top-20 Week-40 money pages (manual, user's GSC account — 10 min/day quota-limited).
- **A2. Meta-description fare audit** on the 100 highest-impression pages: every description leads with the fare + km + a differentiator ("₹2,530 all-inclusive · 230 km · toll included · 4.9★"). Machine-check: no description missing fares on money templates.
- **A3. Rich-result coverage check:** GSC Enhancements → fix any FAQ/Product/Review errors so stars + FAQs show (rich results are already earning 8.3K clicks/qtr — expand coverage, kill errors).
- **A4. Title wave 2 on laggards:** after 7 days of data, re-title pages whose CTR is below their position-peer average (data-driven list from GSC export #2).
- **A5. Booking-query anchor round 2:** the pos 11–25 booking queries (delhi to chandigarh cab 23.8, delhi to manali cab 24.8, delhi taxi service 21.8) get links from the 5 highest-authority pages (home, one-way hub, city hubs) with exact anchors.

### Track B — UI/UX conversion sprint (more bookings, same clicks) 🔴 (user priority)
- **B1. Above-the-fold booking audit on the 5 money templates:** price + WhatsApp + call visible without scroll on 360px width; one-tap `wa.me` with pre-filled route message everywhere (some templates still bury the first CTA below QuickAnswer).
- **B2. Trust strip at the decision point:** rating + years + "no hidden charges" + payment-after-trip badge directly beside the price/CTA cluster (not in a distant section) on one-way/round-trip/tempo templates.
- **B3. FareCalculator/QuickEnquiryForm friction pass:** max 3 fields before WhatsApp handoff; sticky mobile bar verified on all money templates (StickyPriceBar price bug already fixed — verify it renders the fare on tempo/bus too).
- **B4. Speed = conversion — INP sprint:** move GTM/GA to a Partytown web worker (or defer harder), trim framer-motion from the 5 money templates (56 files use it; start with money paths); target field INP <200ms. Slow taps kill mobile bookings — this is CRO, not just CWV.
- **B5. Season urgency (honest):** date-driven banners on the 15 season pages + money routes ("Independence Day long weekend — Aug 15–17 · book by Aug 12 for confirmed cabs") using real dates only, auto-expire after the date.
- **B6. Post-click congruence:** the SERP promise (fare in title) must be the first thing seen on landing — verify title fare == QuickAnswer fare == calculator default on 20 sampled routes (one fact set everywhere).

### Track C — Measurement rails (so targets are provable)
- **C1.** Verify GA4 events actually fire (trackWhatsAppClick, trackPhoneCall, cta_viewed) on all 5 money templates — record wk1 baseline for T5.
- **C2.** Weekly GSC snapshot ritual: export → compare against `GSC_SEO_SPRINT_JUL_31_2026.md` §1 baseline → append delta table to that file.
- **C3.** AI citation test sheet: 10 fixed prompts weekly (fares + distances), log cited/not + fare correctness.
- **C4.** GA4 channel investigation (open item): 600→300 active-user drop — check channel breakdown vs lazyOnload undercount.

### Track D — Indexation hygiene (unblock crawl budget)
- **D1.** GSC 404 export → 301 redirect map in `next.config.mjs` (1,813 breadcrumb-404s were fixed by hubs in June; mop up the rest).
- **D2.** 493 crawled-not-indexed → classify: thin (prune/merge), duplicate-intent (canonical), or fine (leave). Target ≤300.
- **D3.** "Validate Fix" on outstanding GSC coverage issues after this week's deploys.

### Track E — Sightseeing vertical (last big untouched vertical, 132 tour pages)
- QuickAnswer + attraction FAQ + money-route links on `/sightseeing/[slug]` tour pages; interlink each tour with its city's one-way/round-trip/travel-guide pages. (Carried from Week-39 Track C; the attraction-timing answers from the GSC sprint already started this.)

### Track G — Existing-keyword ranking uplift: ALL ~2,830 pages, vertical by vertical 🔴 (user priority)
Goal: every vertical gets its ranking levers pulled — not just the money templates. Coverage is guaranteed by working at TEMPLATE + DATA level (one fix sweeps a whole vertical) and tracking it in this matrix:

| Vertical | Pages | Ranking levers this week | Status |
|---|---|---|---|
| One-way cab | 180 | QuickAnswer/tables ✅wk40 · wave-2 titles (A4) · anchor round 2 (A5) · GSC query→page map | 🟢 base done, uplift wk41 |
| Round-trip | 79 | same + money panel ✅wk40 · inbound refs ✅ | 🟢 base done, uplift wk41 |
| Tempo traveller | 215 routes + hub + 5 seater pages | QuickAnswer/tables ✅wk40 · per-seater query mapping ("12 seater tempo delhi") · HowTo on generic branch · hub→route anchors | 🟠 wk41 |
| Bus routes | 80 + hub | QuickAnswer/tables ✅wk40 · "delhi to X bus" queries (GSC shows 7.7K imp) → route FAQ answers "bus vs our 26-seater" honest comparison | 🟠 wk41 |
| City pages ([cityName] hubs + x-to-y) | 32 hubs + top-level routes | QuickAnswer ✅wk40 · Place/Article schema gap (city hubs are schema-thinnest — add via template) · booking-query anchors | 🟠 wk41 |
| Trips (family/friends/honeymoon) | ~30 | QuickAnswer + FAQ schema audit + season cross-links (Aug/Sep demand) | 🟠 wk41 |
| Sightseeing | 37 cities + 132 tours | Track E (QuickAnswer + money links + attraction FAQ) | 🟠 wk41 |
| Distance/toll guides | 121 + 25 | new pages ✅ · funnel ✅ · expressway phrasing ✅ · snippet-format audit | 🟢 done wk40 |
| Airport | ~75 | llms.txt ✅ · QuickAnswer via AEOHead present · verify rich results | 🟡 verify only |
| Travel guides | 24 | QuickAnswer ✅wk40 · interlink each guide ↔ its money routes both ways | 🟡 links wk41 |
| Blogs | 191 | Track H below | 🟠 wk41 |
| Wedding/corporate/events/stations/packages/seasonal | ~600 | schema+review base ✅ (May–Jun) · llms.txt ✅ · spot-audit 10 samples/vertical, fix template-level only | 🟡 audit wk41 |

Method per vertical: (1) pull that vertical's queries from the GSC export (already parsed), (2) verify title/H1 matches top query phrasing, (3) ensure ≥3 inbound internal links per page (hub + sibling + cross-vertical), (4) extractable answer above the fold, (5) rich-result eligibility clean. Fixes at template/data level so the whole vertical moves together.

### Track H — Blogs as attraction + conversion engines (user priority)
Blogs already pull 4,337 clicks/qtr (3rd biggest source) but convert poorly and only link one-way.
- **H1. Conversion unit on every post:** InlineCTA (blog theme) + route-specific "Book this trip" box with real fare on the ~40 highest-traffic posts (data-driven from GSC Pages sheet); template-level fallback CTA for the rest of the 191.
- **H2. Money→blog mesh:** money templates get a "Trip guides & tips" block linking 2-3 relevant posts (reverses the one-way link flow; blogs finally receive authority AND send it back).
- **H3. Attraction magnets:** the GSC info queries (159K imp — timings/tickets) now have exact answers ✅; add "getting there by cab" conversion paragraphs + fare links on those attraction posts/pages.
- **H4. 5 new attraction/conversion posts** only where GSC shows demand without coverage (from export #2 next week — no speculative posts).
- Target: blog→enquiry events measurable in GA4 (wk1 baseline via C1), +50% blog-originated WhatsApp clicks by end Aug.

### Track I — Design uplift: no thin/dead pages anywhere (user priority)
The July guide-pages "alive" uplift (photo hero, attraction images, sell band) is the proven playbook — apply it to the remaining thin-design surfaces:
- **I1. Thin-design census:** automated sweep of all ~2,830 pages flagging "dead" signals: no hero image (CSS-gradient only), zero content images, no booking/sell unit, under ~500 rendered words on a money page. Output = ranked fix list by traffic (GSC Pages sheet).
- **I2. Fix in the established design languages** (Aurora for routes/city, category themes per memory: sightseeing emerald, events cyan, airport blue, guides gold): real photos from `/public/images/sightseeing/<City>/` (honest name→file match only), vehicle cards with the canonical rate card, glass panels — template-level where possible so whole verticals uplift together.
- **I3. Contact page redesign (explicit ask):** `/contact` rebuilt in brand language — above-the-fold call + WhatsApp + hours, quick-enquiry form (≤3 fields), office address block with map, trust signals (4.9★, since 2015, fleet), LocalBusiness/ContactPage schema, and per-service quick links (one-way / tempo / bus / wedding). Also sweep secondary contact surfaces (footer contact block ✅ exists, /faq contact CTA, thank-you states).
- **I4. Verify no clipping regressions:** every new wide element wrapped (body overflow-x gotcha), 285px-width check on redesigned pages.

### Track F — Housekeeping
- **F1.** `git add + commit` the ~4 months of deployed work (uncommitted since 5 Apr — real risk).
- **F2.** Weekly backup discipline confirmed (server keeps 3 newest).

## 3. Sequencing
1. Mon: A1 indexing push + C1 GA4 baseline + F1 git commit.
2. Tue–Wed: B1–B3 conversion sprint on money templates → build → deploy.
3. Wed–Thu: B4 INP sprint (Partytown + framer-motion trim on money paths) → field re-measure starts.
4. Thu: A2 meta-description audit + A3 rich-result fixes → same deploy train.
5. Fri: B5 season banners + E sightseeing batch 1 → deploy → C2 weekly snapshot #1.
6. Ongoing: C3 AI tests, A4/A5 after data lands.

## 4. Guardrails
- One canonical fact set (fares/km) — every CTR/CRO change re-checked against it.
- Honest urgency only (real dates, no fake scarcity). No dark patterns — trust is the brand.
- One build per batch; production-safe deploys with backup; live-verify after each.
- INP work must not remove analytics — move, don't delete.

## Execution log
*Appended as batches complete.*
