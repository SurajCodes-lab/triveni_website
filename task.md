# Triveni Cabs — SEO Expansion Proposal Implementation

Source: `C:\Users\suraj\Downloads\Triveni_Cabs_Client_SEO_Proposal.pdf`
Extracted copy: `docs/triveni-proposal-extracted.txt`

## Scope
The proposal recommends city-wise landing pages for **3 vehicle types × 15 cities** plus Delhi-to-X route pages:
- **Vehicle types:** Tempo Traveller, Force Urbania, Maharaja Tempo Traveller
- **Cities (15):** Delhi, Agra, Jaipur, Chandigarh, Shimla, Dehradun, Haridwar, Rishikesh, Lucknow, Varanasi, Ahmedabad, Jodhpur, Udaipur, Amritsar, Manali
- **Per-city keyword clusters:** on rent / hire / rental / booking / book / luxury / price / per km rate / cheap / AC / outstation (modifiers), seater-specific (10/12/13/17 Force Urbania), airport transfer, outstation trips
- **Delhi-to-X routes:** 29 destinations × (Tempo + Force Urbania)

## Already implemented (do NOT redo)
- `/tempo-traveller` hub (TempoMainClient) — premium "Aurora" template
- `/tempo-traveller/[route]` — dispatches Tempo **city pages** (TempoCityClient), **route pages** (DynamicTempoRoutes), Chardham (ChardhamTempoClient)
- `/force-urbania`, `/maharaja-tempo-traveller` hubs (vehicleTypePageBuilder)
- Seater hubs: `/12-seater-tempo-traveller`, `/17-seater-force-urbania`, etc. (vehicleSeaterPageBuilder)
- Data: `vehicleTypeData.js` has all 3 types (seaters, per-km, cities, routes, FAQs, copy, accent)

## Design principle (anti-cannibalization — per project memory)
ONE canonical city page per (vehicle type × city) that targets the full keyword cluster for that combo via H2 sections, FAQs, and meta keywords — **not** 34 thin near-duplicate pages. Seater-specific intent lives in the city page's seater section + existing seater hub pages. Matches the existing `/tempo-traveller/[city]` pattern.

---

## Checklist

### Phase 0 — Data layer
- [x] 0.1 Extract proposal PDF to `docs/triveni-proposal-extracted.txt`
- [x] 0.2 Audit existing tempo city/route architecture + vehicleTypeData
- [x] 0.3 Build per-vehicle-type fleet builder: `vehicleTypeData[type].seaters` → `tempoFleet`-shaped objects (name, capacity, outstationRate, localRate, features, image, color, popular) for urbania (10/12/13/17) + maharaja (12/17)
- [x] 0.4 Vehicle-type config resolver: a single `getVehicleTypeConfig(slug)` returning {type, name, shortName, accent, perKm, fleet, heroImage, copy, faqSeeds, hubHref} for tempo/urbania/maharaja

### Phase 1 — Generalize the premium "wow" template to be vehicle-type-aware
- [x] 1.1 New `VehicleCityClient` (theme-driven: Aurora/Executive/Royal via `vehicleThemes`) takes a `vehicle` config — config-driven hero, kicker, accent, fleet, FAQ, CTA. Original `TempoCityClient` left untouched (no regression).
- [x] 1.2 New `VehicleRouteClient` takes a `vehicle` config — vehicle-aware hero, interactive seater selector fed by the type's own fleet, copy, schema hooks.
- [x] 1.3 Tempo pages render from the original `TempoCityClient` / `DynamicTempoRoutes` (unchanged) — zero regression. New clients back force-urbania + maharaja only.

### Phase 2 — Server-side factory (no 1070-line duplication)
- [x] 2.1 `src/lib/seo/vehicleCityRoutePage.js` — `makeVehicleRoutePage(vehicleSlug)` → `{ generateStaticParams, generateMetadata, default }`. Reuses `tempoCities`, `tempoRoutes`, `localSightseeing`, `routeDescriptions`, `resolveRouteMetrics`, schema helpers. No Chardham branch (tempo-only).
- [x] 2.2 Per-vehicle fare-first metadata (title/description/keywords/canonical/OG) for city + route pages.
- [x] 2.3 Per-vehicle JSON-LD: Service, Product (AggregateOffer), BreadcrumbList, FAQPage, HowTo, Article, TouristTrip, City Place (geo).
- [x] 2.4 FIX: stripped `buildCityKeywordCluster` (a function) out of the config before passing to Client Components — Next can't serialize functions Server→Client.

### Phase 3 — New dynamic routes
- [x] 3.1 `src/app/(routes)/force-urbania/[route]/page.js` — thin factory wrapper (`force-urbania`).
- [x] 3.2 `src/app/(routes)/maharaja-tempo-traveller/[route]/page.js` — thin factory wrapper (`maharaja-tempo-traveller`).
- [x] 3.3 `dynamicParams = false` + ISR `revalidate = 3600` on both wrappers.

### Phase 4 — Discovery & internal linking
- [x] 4.1 `src/app/sitemap.js` — force-urbania + maharaja city + route URLs wired (mirrors tempo block; reuses `tempoCities` / `tempoRoutes`).
- [x] 4.2 Cross-linking via `otherVehicleTypes()` switcher on city + route pages, `relatedRoutes`, seater hubs.
- [x] 4.3 "Other cities" + "Other vehicle types" sections in `VehicleCityClient`.

### Phase 5 — "Wow" polish
- [x] 5.1 Premium per-vehicle hero theming (Executive navy/platinum for Urbania; Royal burgundy/gold-foil + Fraunces for Maharaja) via `vehicleThemes`.
- [x] 5.2 Interactive seater selector on route pages fed by the type's own fleet.
- [x] 5.3 Trust row, fleet gallery, USP grid, use-case chips, fare strip — all vehicle-aware.
- [x] 5.4 Consistent CTA (7668570551 / WhatsApp) + `SetStickyCta` context.
- [x] 5.5 FIX: `VehicleRouteClient` was missing `Heart`, `Building2`, `Map` icon imports → `ReferenceError` at build. Added.

### Phase 6 — Verify
- [x] 6.1 `npm run build` passes (exit 0); all new pages statically generated.
- [x] 6.2 Lint clean (build lint stage passed).
- [x] 6.3 Update task.md ticks. (Commit pending — not yet requested.)

### Phase 7 — Close Part 3 route gaps (SEO Expansion Proposal Delhi-to-X)
- [x] 7.1 Added 20 missing standalone Delhi-to-X destinations to `tempoRoutes.Delhi` (Dalhousie, Kullu, Kasol, Dehradun, Mussoorie, Nainital, Jim Corbett, Chandigarh, Udaipur, Jodhpur, Ayodhya, Varanasi, Vaishno Devi, Pushkar, Mount Abu, Neemrana, Ranthambore, Char Dham, Kedarnath, Badrinath) — generates across all 3 vehicle types.
- [x] 7.2 `routeDescriptions` entries for the 6 not in the distance dataset (kullu, vaishno-devi, mount-abu, ranthambore, char-dham, kedarnath); the other 14 auto-resolve via `resolveRouteMetrics` from `distanceData`.
- [x] 7.3 Build re-verified (exit 0). Final prerender counts: tempo 269, force-urbania 259, maharaja 259.

---

## Notes
- Tempo Chardham branch stays untouched in the existing `/tempo-traveller/[route]/page.js`. The new factory is for the non-Chardham city + route cases only.
- All phone/CTA: 7668570551 (existing convention).
- Canonical URLs: `https://www.trivenicabs.in/{vehicle-slug}/{route-slug}`.