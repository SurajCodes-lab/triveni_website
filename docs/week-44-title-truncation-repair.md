# Title truncation repair — 320 listings that read as broken in Google

**Date:** 23 August 2026
**Workstream:** Week 44, CTR (the "ranks well, does not get clicked" problem)
**Pages affected:** 320 titles rewritten, out of 3,392
**Status:** built clean, `seo-check` 0 errors, not yet deployed

---

## What was wrong

While checking the state of the Week 44 templates, the built HTML turned up a class of
defect that had been live for some time and that nothing was catching:

```
Triveni Cabs Pricing Transparency | No Hidden Charges, No | Triveni Cabs
Gateway of India Mumbai Guide 2026: How to | Triveni Cabs
Sightseeing Tours India 2026 | Taj Mahal ₹3,500 | Triveni | Triveni Cabs
Mussoorie in 2 Days Itinerary 2026 | Cab Package from | Triveni Cabs
Best Car for Delhi to Manali: Sedan vs | Triveni Cabs
Trust & Credentials | Triveni Cabs — Verified Since 2015 | Triveni Cabs
Nainital vs Jim Corbett — Lake Town or Tiger Safari By | Triveni Cabs
```

Every one of these is what a searcher actually sees as the blue clickable line. They stop
mid-sentence — *"Cab Package from"*, *"Sedan vs"*, *"How to"*, *"Safari By"* — or they
print the brand twice.

This matters more than a typo would. The whole Week 44 thesis is that these pages already
rank and simply are not being chosen; a listing that looks broken is one of the few things
that will make a searcher skip a result they can see is relevant. We were spending the
ranking and losing the click at the last inch.

## Why it happened

Titles are cut to a display budget so Google does not truncate them itself. The cut was
made at a **word boundary**, which avoids slicing through the middle of a word but does
nothing about *which* word it lands on. When the budget ran out on a connector — "from",
"to", "vs", "and", "By" — the title kept that connector and stopped.

Three separate gaps let this reach production:

**1. The guard was in the wrong place.** There is a title-tightening function that drops
whole trailing clauses instead of cutting through one. But most pages on this site build
their own title string and call the tightening function *directly*, rather than going
through the metadata factory. Any fix applied at the factory level — which is where it
would naturally go — reached almost none of them.

**2. The clause-dropper only understood one separator.** It splits a title on `|` and drops
trailing clauses until it fits. The blog and guide titles are written with `:` and `—`
instead, so it found no clause boundary at all and fell through to the word-boundary cut.
That is the entire explanation for the blog titles.

**3. The brand check had an exemption that hid real cases.** `seo-check` errors on a
doubled brand, but it counts the exact phrase "Triveni Cabs" and exempts pages whose
subject legitimately *is* the brand — `/triveni-cabs-vs-uber` has to say "Triveni Cabs".
That exemption also covered `/trust` and `/reviews`, which were genuinely doubled, and a
dangling bare "Triveni" was never counted at all because it is not the full phrase.

---

## What was changed

All three fixes are in `src/lib/seo/serp-ctr.js`, so they apply to every title on the site
regardless of which route builds it.

### `dropOrphanTail` — clear a connector left by a cut

Strips trailing words that cannot end a phrase. **Closed-class only**, and that restraint
is the important part: "Drivers", "Fleet" and "Customer" can legitimately be the last word
of a title, so an open-class word is left alone even when it is obviously the product of a
cut. Only words that cannot grammatically end a title are removed.

The first version of this list included `cabs`, to catch a trailing bare brand token. That
was wrong and was removed before it shipped — *"Delhi to Agra Cabs"* is a perfectly good
title ending, and stripping it would have produced *"Delhi to Agra"* across a large number
of route pages.

### `deduplicateBrand` — stop printing the brand twice

The layout applies `%s | Triveni Cabs` to every title. A title whose **trailing** clause
also names the brand therefore renders it twice. This removes the brand from trailing
clauses only — a brand mention in the **first** clause is left untouched, because on
`/triveni-cabs-vs-uber` and `/why-triveni-cabs` the brand is the subject of the page and
removing it would destroy the title.

### `dropStubClause` — drop a clause the cut reduced to a stub

Clearing the connector was only half the repair. *"Gateway of India Mumbai Guide 2026: How
to Visit, Timings & Tickets"* became *"...2026: How to"*, and clearing the orphan left
*"...2026: How"* — a title that still stops mid-thought, one word earlier.

So when a cut has reduced a trailing `:` or `—` clause to a **single word of eight
characters or fewer**, the whole clause is dropped instead:

> Gateway of India Mumbai Guide 2026: How  →  **Gateway of India Mumbai Guide 2026**

This is deliberately narrow, and it runs **only inside the clamp function** — the one place
that knows a truncation actually happened. A title that was never truncated keeps its
clause, so *"Char Dham Yatra: Guide"* is left exactly as written. A multi-word tail is also
kept: *"Char Dham Cost Per Pilgrim: Tempo vs SUV"* survives, because "Tempo vs SUV" carries
real meaning.

### Wiring

The tightening function became a thin public wrapper —
`dropOrphanTail(tightenCore(deduplicateBrand(title)))` — so every caller gets the full
pipeline, and the stub-clause guard was placed inside `clamp` where the orphan is created.

---

## Result

| | Before | After |
| --- | --- | --- |
| Titles ending on a connector | 39 | **0** |
| Titles printing the brand word twice | 17 | 14 — all legitimate |
| Titles improved | — | **320** |
| Titles reduced below 30 characters | — | **0** |
| Build | — | exit 0 |
| `seo-check` | — | 0 errors, 133 warnings |

The 14 remaining brand-word repeats were checked individually and every one is correct:
nine are comparison pages that must name the brand (`/triveni-cabs-vs-ola`), two are the
Prayagraj **Triveni Sangam** tours — the river confluence, which genuinely shares the name
— and `/_not-found` is a Next.js internal page that is never indexed.

### Before and after

```
- Triveni Cabs Pricing Transparency | No Hidden Charges, No | Triveni Cabs
+ Triveni Cabs Pricing Transparency | No Hidden Charges | Triveni Cabs

- Gateway of India Mumbai Guide 2026: How to | Triveni Cabs
+ Gateway of India Mumbai Guide 2026 | Triveni Cabs

- Sightseeing Tours India 2026 | Taj Mahal ₹3,500 | Triveni | Triveni Cabs
+ Sightseeing Tours India 2026 | Taj Mahal ₹3,500 | Triveni Cabs

- Mussoorie in 2 Days Itinerary 2026 | Cab Package from | Triveni Cabs
+ Mussoorie in 2 Days Itinerary 2026 | Cab Package | Triveni Cabs

- Nainital vs Jim Corbett — Lake Town or Tiger Safari By | Triveni Cabs
+ Nainital vs Jim Corbett — Lake Town or Tiger Safari | Triveni Cabs

- Delhi to Manali Tempo Traveller: Complete | Triveni Cabs
+ Delhi to Manali Tempo Traveller | Triveni Cabs

- Trust & Credentials | Triveni Cabs — Verified Since 2015 | Triveni Cabs
+ Trust & Credentials | Verified Since 2015 | Triveni Cabs
```

### Descriptions were checked too

`clamp` is shared with meta descriptions, so the same guard now runs on them. Verified
across all 3,392 pages afterwards: **median 140 characters, maximum 348, minimum 51**. The
seven descriptions under 70 characters are hand-written tour blurbs that end on complete
words, not truncation artifacts. No description was damaged.

---

## Why this counts as Week 44 work

The Week 44 plan splits the opportunity into three problems. This is squarely the first
one — *"ranks well, does not get clicked"* — and it is the cheapest possible version of it:
no new content, no new pages, no ranking required. The pages are already in front of
searchers. They were simply presenting themselves badly at the moment of the click.

## The guard that should have caught this

`seo-check` reported **0 errors** both before and after the title fixes, which is exactly
the problem — the check was blind to a defect sitting in 39 live titles. It has been
rewritten to match how the de-duplication actually reasons.

The old rule counted the exact phrase "Triveni Cabs" and then exempted any page whose URL
looked brand-related. Both halves were too loose. A dangling bare "Triveni" was never
counted because it is not the full phrase, and the URL allow-list happened to cover
`/trust` and `/reviews`, which were genuinely doubled.

The new rule needs no allow-list. The brand is permitted in the **first** clause, because
that is the page's subject on `/triveni-cabs-vs-uber` and `/why-triveni-cabs`. A brand
mention in any **later** clause is flagged, because the layout template supplies the brand
itself. It matches the bare token as well as the full phrase.

Checked against seven cases before shipping — the three original defects are flagged, and
the four legitimate titles (a comparison page, `/why-triveni-cabs`, a Prayagraj Triveni
Sangam tour, and an ordinary route page) all pass. The site currently passes the stricter
rule with 0 errors.
