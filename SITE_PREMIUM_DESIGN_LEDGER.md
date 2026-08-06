# Site-Wide Premium Design Ledger
**Goal (user):** every one of the ~2,834 pages must feel premium. **Mechanism:** pages render from ~25 template families — redesigning a family upgrades its whole vertical at once. This ledger tracks every family to DONE.

**ULTRA-PREMIUM v2 system (5 Aug):** Fraunces editorial serif on every major headline (`--font-display` via next/font, `.font-display-serif`) · gold-foil metallic text (`.text-gold-foil` / FFE9A0→FACF2D→B8860B) for hero words and money figures · CTA `sheen` sweep + gold-bloom shadows · seal-style trust emblems · luxury whitespace (py-16 md:py-24). Applied system-wide via globals + layout; showcase H1s upgraded (tempo/bus hubs+routes, calendar, calculator); distance/toll rebuilt natively on v2.

**The premium bar** (from the approved tempo/bus/contact work): visible photo hero (never a drowned/black wall) · giant display title with gold accent · glass panels on slate-950 with dark↔warm-light band rhythm · lane-marking motif · compact desktop CTAs (gold bg, BLACK text) · FAQ 2-per-row · real photography from verified assets · zero infinite animations · 360→2560px overflow-clean (MCP matrix) · screenshot sign-off before ship.

| # | Template family | Pages | Status |
|---|---|---|---|
| 1 | Tempo route + hub | 226 | ✅ PREMIUM v2 — LIVE incl. mid-section polish (fare-card photos, journey stat tiles, gold stops timeline, real km/hrs in QuickAnswer via resolveRouteMetrics — Train D+, 6 Aug) |
| 2 | Bus route + hub | 81 | ✅ PREMIUM v2 — LIVE with full polish parity (Train D+, 6 Aug) |
| 3 | Contact | 1 | ✅ PREMIUM (5 iterations: bands, hero number, interactive layer, India desk, map) |
| 4 | Travel guides | 24 | ✅ PREMIUM (Jul photo/sell-band uplift + QuickAnswers) |
| 5 | One-way route + hub | 181 | ✅ Aurora + QuickAnswer/fare tables/trust rows/directory — solid; polish pass later |
| 6 | Round-trip route + hub | 80 | ✅ same as one-way |
| 7 | City hubs + x-to-y routes | ~400 | ✅ ULTRA-PREMIUM v2 — LIVE (Train D+, 6 Aug): cinematic serif hero (speakable-headline finally present), photo fare cards, stat tiles, gold timeline, FAQ 2-col, zero framer-motion |
| 8 | Same-day tours | 24 | ✅ hero/gallery uplift (census fix) |
| 9 | Vs/cost pages | ~25 | ✅ split heroes/vehicle panels (census fix) |
| 10 | Special services | 8 | ✅ fleet heroes (census fix) |
| 11 | Calendar + calculator | 2 | ✅ born premium |
| 12 | Related-services strip (sitewide) | all | ✅ premium dark band (Train B) |
| 13 | **Distance guides** | **101** | ✅ ULTRA-PREMIUM v2 (Train C) — cinematic 70vh hero, serif+foil headline, TrustSeal, gold sheen funnel CTAs; screenshot-approved |
| 14 | **Toll-cost guides** | **25** | ✅ ULTRA-PREMIUM v2 (Train C) — receipt-grade Toll Ledger centerpiece, foil totals, seal chips; screenshot-approved |
| 15 | Airport (AirportKit) | ~75 | ✅ ULTRA-PREMIUM v2 — LIVE (Train E, 6 Aug): kit-level serif/foil/TrustSeal, 9 infinite keyframes removed, drop-points tables→cards, hero badge fixed ("3123"→Terminals·3), screenshot-approved 1440+360 |
| 16 | Blog hub + post shell + 12 layouts | 192 | ✅ ULTRA-PREMIUM v2 — LIVE (Train E, 6 Aug): hub rewrite, active shell port, ALL 12 layouts serif+foil+motion-free, DynamicSidebar cleaned, dead duplicate shell deleted, .blog-prose serif prose (Fraunces-wired), screenshot-approved |
| 17 | Sightseeing hub/city/tour | 170 | ✅ ULTRA-PREMIUM v2 — LIVE (Train E, 6 Aug): emerald-foil identity, hidden tabs flattened to DOM, QuickAnswers byte-identical, 0px overflow @360, screenshot-approved |
| 18 | Wedding hub + city + cars | ~40 | 🔄 Wave-2 agent in worktree NOW |
| 19 | Festival/season client | 27 | 🔄 Wave-2 agent in worktree NOW (shared FestivalTripClient) |
| 20 | Trips clients (family/friends/honeymoon) | 30 | 🔄 Wave-2 agent in worktree NOW (three shared clients) |
| 21 | Stations + bus-stand taxi | ~35 | ⏳ |
| 22 | Corporate + events | ~130 | ⏳ |
| 23 | Packages/chardham/religious | ~60 | ⏳ |
| 24 | Where-to-go months | 12 | ⏳ |
| 25 | Misc standalone (about, pricing, vehicles, policies…) | ~50 | ⏳ audit-then-fix |

**Bar additions (5 Aug, from live manual audit):** NO sideways-scrolling tables on mobile — every table card-stacks below md (shared DataTable + all 7 money templates converted, Train D) · sticky-bar labels normalized (no "from From") · HTML cache headers force browser revalidation so shipped design is what users actually see.

**Process per family:** worktree agent with the approved pattern + preserve-list → grep verification → merge → MCP width-matrix + screenshot sign-off → gated deploy train. Two families per train keeps trains small and verifiable.

*Updated as families complete. Started 5 Aug 2026.*
