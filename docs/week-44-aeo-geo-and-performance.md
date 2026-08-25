# Sightseeing, Char Dham, and the next level of AEO / GEO

**Date:** 24–25 August 2026
**Scope:** 170 sightseeing pages, 65 Char Dham pages, site-wide generative-engine assets, and a performance baseline
**Status:** built clean — 0 errors, 60 warnings. One finding needs a decision from you before any of this can work.

---

## The finding that comes before everything else

Before writing a line of code for generative engines, the first thing to check is whether
those engines can read the site at all. They cannot.

The repository contains a carefully written `robots.js` that explicitly welcomes every
major AI crawler. Its own comment calls this *"the single most important 2026 change: brand
visibility in AI answers."* GPTBot, ClaudeBot, PerplexityBot, Google-Extended, CCBot and
nine others are all allowed.

**That file is not what the internet sees.** Fetching the live `robots.txt` returns
something different — Cloudflare is injecting a managed block *above* the site's own rules:

```
# BEGIN Cloudflare Managed content

User-agent: *
Content-Signal: search=yes,ai-train=no,use=reference
Allow: /

User-agent: GPTBot
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Amazonbot
Disallow: /

User-agent: Applebot-Extended
Disallow: /

User-agent: Bytespider
Disallow: /

User-agent: meta-externalagent
Disallow: /

# END Cloudflare Managed Content
```

The site's own permissive rules for those same crawlers appear afterwards, at line 107 and
below. Two conflicting groups for one user-agent is, at best, ambiguous — different crawler
implementations resolve it differently — and `Content-Signal: ai-train=no` is not ambiguous
at all.

The practical effect is that **the entire generative-engine strategy is being cancelled at
the CDN**, silently, and has been for as long as the setting has been on. Every hour spent
on structured data, quotable facts and clean pricing is spent on doors that are locked.

`CF-RAY` and `Server: cloudflare` on the response confirm the site is proxied through
Cloudflare, so this is a dashboard setting rather than anything in the code. It is
typically found under the AI Crawl Control / "Block AI bots" or Content Signals policy.

One crawler is *not* in the block list: `PerplexityBot`. So Perplexity can currently read
the site and the others largely cannot, which would explain any lopsided pattern in where
the brand does and does not appear in AI answers.

**This is your decision, not a technical fix.** Allowing AI crawlers means allowing the
content to be used in AI answers, with the brand visibility that brings and the loss of
control that comes with it. Blocking them is a legitimate choice — but it should be a
choice, and right now the site is arguing with itself: the code says yes and the CDN says
no. Whichever you pick, both layers should say the same thing.

---

## What was built

### Sightseeing — 160 pages gained a real table

An audit of the built HTML found something worth pausing on: of the 170 sightseeing pages,
**not one contained a `<table>` element.** The fares were on the page — in a sentence in
the Quick Answer, in card tiles in the at-a-glance strip, in the booking sidebar — but every
one of those is a `<div>`.

That matters for both halves of this week's brief:

*For answer engines.* Google's table snippet is drawn from an actual `<table>` with a header
row. A grid of styled divs holding the same numbers is not eligible for it, however it looks
to a person.

*For generative engines.* When an assistant is asked "how much is the Amritsar Golden Temple
tour", it has to work out which number on the page belongs to which vehicle. A table with
`<th scope="row">` states that relationship outright. Card tiles leave it to be inferred from
DOM order — and a wrong inference is exactly how a model ends up quoting the SUV price as
the starting fare.

Two components were built:

**`TourFareTable`** — on each individual tour page: vehicle, seats, luggage, who it suits,
and the total fare, with the lowest fare marked. It states plainly that the fare is for the
whole tour and not per kilometre, because that is the single most common misreading of these
pages. Live on **132 tour pages**.

**`CityToursTable`** — on the city hub pages, where the question is different. "Sightseeing
tours in Delhi" is a comparison query: the searcher wants the options side by side with
duration and price and wants to choose. The tour name is the row header, so each duration
and fare is unambiguously tied to its own tour. Live on **28 city pages**.

Between them, 160 of 169 sightseeing pages now carry an extractable table. The remaining
nine are city hubs with fewer than two priced tours, where a two-row comparison table would
be worse than none — the component returns nothing rather than render a stub.

### Char Dham — the money pages had no table either

The same audit found the three Char Dham package pages — budget sedan, family Ertiga,
luxury SUV — carried no table, despite existing specifically to answer *"which vehicle
should I take for Char Dham"*.

That question is a four-way trade-off: how many people, how much luggage, how the vehicle
handles mountain roads, and what it costs. Prose is a poor way to answer it and a worse way
to be quoted on it.

**`ChardhamVehicleTable`** puts all six vehicles in one table — Swift Dzire through to the
45-seat bus — with capacity, luggage, per-km rate and who each suits. The page's own vehicle
is highlighted so the reader keeps their place.

It also does one thing the site was leaving to the reader: **it multiplies the rate out.**
A per-km figure is meaningless to someone budgeting a pilgrimage until it is set against the
~1,700 km the full Yamunotri–Gangotri–Kedarnath–Badrinath circuit actually runs. The table
shows both, with the exclusions stated so the total is not mistaken for an all-in price.
Live on **4 Char Dham pages**.

### `llms.txt` — a curated map for assistants

`robots.txt` says what a crawler may fetch. `sitemap.xml` lists every URL we have. Neither
tells an assistant which facts about Triveni Cabs are *authoritative*, and that is what
actually decides whether we get quoted correctly.

When someone asks an assistant what a 17-seater tempo traveller costs, it either finds a
clean current number it can attribute, or it reaches for a stale one from training data.
`/llms.txt` is now that clean number, in the place the emerging convention says to look.

It is **generated, not hand-written** — the rates come from the same `pricing.js` and
`vehicleTypeData.js` the pages render from, so it cannot drift. This week's rate change is
the argument for that: five encodings of one number across 56 files, and a static text file
would have been missed. It currently renders the full ladder:

```
- Sedan: ₹11/km
- Ertiga: ₹15/km
- SUV: ₹15/km
- Innova: ₹18/km
- Force Tempo Traveller by seater: 12 Seater ₹23/km, 16 Seater ₹25/km, 17 Seater ₹25/km,
  20 Seater ₹28/km, 26 Seater ₹31/km
- Force Urbania by seater: 10 Seater ₹25/km, 12 Seater ₹27/km, 13 Seater ₹28/km, 17 Seater ₹30/km
- Maharaja Tempo Traveller by seater: Maharaja 12 Seater ₹26/km, Maharaja 17 Seater ₹30/km
```

It also carries the disambiguations that assistants most often get wrong: that the Urbania
is a *different vehicle* from the tempo traveller and priced differently, that sightseeing
prices are whole-tour and not per-km, and that the service area is North India only.

One correction during the build is worth recording. The first draft linked to
`/sightseeing?city=delhi` and similar filtered URLs. Checking the route showed it takes no
`searchParams` — those URLs do not exist. Publishing a file whose purpose is to be an
authoritative reference, containing URLs that 404, would have been actively harmful. They
were replaced with four real tour pages.

### What was already in place

Worth saying plainly, because it shapes what "next level" means here. The schema layer is
already saturated: all 235 sightseeing and Char Dham pages emit `FAQPage`, `speakable`, an
author, and between them `TouristTrip`, `HowTo`, `LocalBusiness`, `AggregateRating` and
`BreadcrumbList`. 187 of 235 already phrase an H2 as a question, and every one carries a
fact-first Quick Answer block.

So the gap was never schema. It was that the facts existed as prose and pixels rather than
as machine-readable relationships — which is precisely what the tables fix.

---

## Performance: the LCP re-test

A fresh Lighthouse run against the live sightseeing page, before this deploy, so it is a
clean baseline:

| Metric | Result | Target |
| --- | --- | --- |
| **Performance** | **44** | 90 |
| **Largest Contentful Paint** | **8.9 s** | under 2.5 s |
| **Total Blocking Time** | **1,640 ms** | under 200 ms |
| First Contentful Paint | 2.6 s | under 1.8 s |
| Speed Index | 3.8 s | under 3.4 s |
| Cumulative Layout Shift | **0** | under 0.1 |
| SEO | **100** | 100 |
| Accessibility | 97 | — |
| Best practices | 77 | — |

CLS at zero and SEO at 100 are genuinely good and should not be lost. Everything else on
the speed side is poor, and the useful part is *why*.

**It is not images.** The hero already carries `priority`, and the component was checked —
it uses zero framer-motion and CSS-only animation, so the earlier INP work is holding. The
diagnosis is main-thread time:

```
bootup-time                 3.2 s
mainthread-work-breakdown   6.9 s
total-byte-weight           1,911 KiB
unused-javascript           196 KiB
unused-css-rules            52 KiB
```

An LCP of 8.9 s against an FCP of 2.6 s means the largest element lands more than six
seconds after the page first paints. With 6.9 s of main-thread work, the page is
JavaScript-bound: the browser has the content and cannot get to it.

Two contributors stand out.

**Google's own tags are 45% of the JavaScript on the page.** Of 1,020 KiB of script across
40 files, 457 KiB is analytics and advertising:

| Script | Transfer | Bootup |
| --- | --- | --- |
| GA4 `gtag/js` | 189 KiB | 727 ms |
| Google Ads `AW-17336319883` | 155 KiB | 370 ms |
| Google Tag Manager | 113 KiB | — |
| Largest app chunk | 215 KiB | 193 ms |

The loading strategy here is already deliberate and I have deliberately **not** changed it.
GTM and the Ads config are both `lazyOnload`, and the Ads tag was previously de-duplicated
to reuse the already-loaded gtag instance, saving ~58 KB per page. GA4 alone sits at
`afterInteractive`, and the code comment explains why: on `lazyOnload` it undercounted
fast-bounce mobile visitors badly — GA4 showed ~150 active users a day against a
Search-Console-implied 330+. Moving it back would buy roughly 700 ms and break the analytics
you make decisions from. That is a trade-off for you to make knowingly, not something to
quietly reverse.

The open question is whether the GTM container *also* fires GA4 or the Ads tag. If it does,
some of this is being paid for twice, and that is a container-configuration change with no
downside at all. It cannot be determined from the code — it needs a look inside the GTM
container.

**The page ships 375 KiB of HTML.** For comparison, `/toll-cost` is 200 KiB. Of that, 124 KiB
is inline script — the React Server Components flight payload — and 37 KiB is JSON-LD across
17 separate blocks. That inline payload must be parsed and executed during hydration, on the
main thread, and it is a large part of the 2.7 s attributed to the document itself.

**A correction, because the first explanation was wrong.** The initial diagnosis was that
the flight payload is large because whole data objects are passed to the client component
instead of the specific fields it renders. That was measured and it does not hold: the
entire tour object is 8 KiB, and only four of its top-level keys go unused. Trimming the
props would save perhaps 1-2 KiB of the 124.

The payload is large for a more fundamental reason. `SightseeingDetailClient` carries
`'use client'` for the *whole* page, so React must serialise the entire component tree for
hydration. The striking part is how little of it needs to be a client component at all —
the file has exactly two pieces of state, an accordion index and a bookmark toggle.
Everything else is static markup sitting inside a client boundary it does not need.

The real fix is therefore to extract those two interactive pieces into small client
components and let the rest render on the server. That is a substantially better change
than prop-trimming and it remains the highest-value performance work on this template.

**It was not attempted in this pass, deliberately.** Restructuring the boundary of a
1,053-line component that renders every sightseeing page, at the end of a long session,
is how a good optimisation becomes an outage. It is recorded here with a correct diagnosis
rather than shipped half-verified.

### Recommended performance sequence

1. **Check the GTM container for duplicate GA4 / Ads tags.** No downside, possibly ~150 KiB.
2. **Move `SightseeingDetailClient` off the client boundary**, keeping only the accordion
   and the bookmark toggle as client components. Targets the 124 KiB inline payload and the
   2.7 s document bootup. One change, 170 pages.
3. **Consolidate the 17 JSON-LD blocks into a single `@graph`.** Modest parse win; also
   makes the structured data easier to audit.
4. **Then re-measure.** Only after 1–3 should the GA4 timing trade-off be revisited, because
   it may not be needed.

---

## Verification

```
build                : exit 0
seo-check            : 0 errors, 60 warnings
sightseeing pages    : 169 — 132 tour fare tables, 28 city comparison tables
Char Dham pages      : 4 with the new vehicle comparison table
llms.txt             : renders with live rates from pricing.js and vehicleTypeData.js
```

The 60 remaining warnings are all `city-intent-competition` and remain blocked on the
Search Console per-page query exports, as recorded in `week-44-warning-cleanup.md`.

---

## Two inconsistencies found along the way

Neither was changed, because both are pricing decisions.

**The Char Dham sedan is ₹12/km; the rest of the site says ₹11/km.** This may well be a
deliberate hill-route premium — the Char Dham data file carries its own vehicle rates,
separate from `pricing.js`. But it is currently unexplained on the page, and a searcher
comparing the two pages sees a contradiction.

**`/sightseeing/ahmedabad` and `/sightseeing/bodhgaya` exist.** Ahmedabad is in Gujarat and
Bodh Gaya is in Bihar, both outside the North India service area. They join
`varanasi-to-gaya` and the Ahmedabad–Udaipur page already noted in earlier weeks as routes
that quietly cross the boundary.

---

## Open, and who owns it

| Item | Owner |
| --- | --- |
| **Cloudflare AI crawler block** — the CDN is cancelling the entire GEO strategy | **You** |
| GTM container audit for duplicate GA4 / Ads tags | You (needs container access) |
| GA4 `afterInteractive` — speed against measurement accuracy | You |
| Char Dham sedan ₹12/km vs site-wide ₹11/km | You |
| Ahmedabad and Bodh Gaya pages outside the service area | You |
| **Visible fabricated testimonials on 132 pages** — replace with real reviews, or remove | **You** |
| The 29 pages still emitting two `<h1>` elements (different template) | Next implementation pass |
| Trim client-component props to cut the 124 KiB inline payload | Next implementation pass |
| Consolidate 17 JSON-LD blocks into one `@graph` | Next implementation pass |
| Search Console per-page query exports | You — still blocking 60 warnings |


---

## Two defects found while doing the performance work

Neither was on the plan. Both came out of reading the built HTML rather than the source,
which is becoming a theme.

### A duplicate `<h1>` hidden off-screen on 133 pages

The sightseeing templates carried a block introduced as *"Server-rendered SEO content —
visible to Googlebot immediately"*, positioned like this:

```jsx
<div className="sr-only-seo" aria-hidden="false"
     style={{ position: 'absolute', left: '-9999px', width: '1px',
              height: '1px', overflow: 'hidden' }}>
```

Inside it: a second `<h1>`, the full description, the highlights, the itinerary, the
inclusions, the exclusions and a duplicate FAQ set — all of which the visible page already
renders.

The intent was reasonable: guarantee the content reaches Googlebot without depending on
client-side rendering. It was also unnecessary. `SightseeingDetailClient` is a `'use client'`
component, but Next.js still server-renders it. Before removing anything, the built HTML was
checked string by string with the block excluded — the tour name, the full description, a
named highlight, an inclusion, an itinerary stop, the price and the FAQ questions are all
present in the visible markup without it. Nothing was lost.

What the site gains is two things. It stops emitting a second `<h1>`, and it stops using an
off-screen text block — which is precisely the pattern Google's spam policies describe as
hidden text. Benign intent does not change how it is classified.

| | Before | After |
| --- | --- | --- |
| Pages with 2+ `<h1>` | 161 | **29** |
| Pages with an off-screen duplicate block | 133 | **0** |

The 29 remaining are a different template and are noted for a later pass.

### Fabricated reviews, marked up as review schema, on 132 pages

This one matters more. The tour template emitted a block the source itself labels
*"Review Schema - Sample Reviews"*:

```js
"author": { "@type": "Person", "name": "Verified Tourist" },
"reviewBody": `Excellent ${tour.category.toLowerCase()} tour! The guide was
               knowledgeable and the vehicle was very comfortable...`,
"datePublished": new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)...
```

Two five-star reviews per page, with generic authors, bodies generated from the tour's own
fields, and publication dates computed as seven and fourteen days ago — so every page
claimed two reviews from last week, and the dates moved forward on every rebuild.

**Google's review snippet policy requires review markup to describe reviews genuinely left
by customers.** This is a manual-action risk rather than a matter of taste.

It was also a duplicate `Product`. The page already emits a Product node carrying the real
offer — `lowPrice: 2500`, currency, availability, SKU — plus genuine rating and review data
from `review-helpers`. This second node had the same product name and **no price at all**.
Two Product entities for one product force a parser to choose, and if it chose this one the
rich result lost the fare, which is the most valuable thing in it.

| | Before | After |
| --- | --- | --- |
| Pages with fabricated `Review` schema | 132 | **0** |
| `Product` nodes on a tour page | 2 | **1** (the priced one) |
| Real `aggregateRating` retained | — | yes |

**One thing left deliberately alone, and it needs your decision.** The same two names appear
in *visible page text* on those 132 pages, not only in the schema. Removing the markup stops
the policy exposure; it does not remove testimonials a visitor still reads as real. Taking
published copy off 132 live pages is a content decision, so it is flagged rather than done
quietly. The options are to replace them with genuine customer reviews or to remove them.

### On the remaining schema duplicates

The same audit flagged 2 × `Article`, 2 × `HowTo` and 3 × `ItemList` per page. These were
examined and left as they are. The three ItemLists are genuinely different lists —
attractions, itinerary and related services. The second Article carries a distinct
`@id` of `#comparison-article` and describes the comparison table rather than the page.

An earlier reading of this document said one Article had no author. That was wrong: the
author is set by `@id` reference to the Organization entity, which the parser used at the
time did not resolve. Changing a schema helper shared across many templates to chase a
duplicate that is defensible was not worth the risk.

---

## Final verification

Measured across all 3,392 built pages:

```
pages                     : 3392
pages with 2+ H1          : 29    (was 161)
hidden sr-only-seo blocks : 0     (was 133)
fabricated Review schema  : 0     (was 132)
duplicate titles          : 0
orphan-tail titles        : 0
descriptions >200 / <70   : 0 / 0
stale tempo/urbania rates : NONE
AEO tables                : 132 tour, 28 city, 8 Char Dham
seo-check                 : 0 errors, 60 warnings
```

Sample page HTML went from 375 KiB to 354 KiB across these two removals. That is a real
reduction but not the performance fix — the LCP work described above is still outstanding.
