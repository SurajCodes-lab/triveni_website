# Week 44 — complete record

**Period:** 22–24 August 2026
**Site:** trivenicabs.in — 3,392 pages, North India
**Documents in this set:** six, listed below
**Final state:** 0 errors, 60 warnings, deployed and verified

---

## How to read this set

Each piece of work this week has its own document, because each one has a different story
and different numbers behind it. This page is the index and the summary — what was done,
what it changed, what is still open, and who has to decide the things that are still open.

| Document | Covers |
| --- | --- |
| `week-44-premium-seo-plan.md` | The plan: where the opportunity is, and the two conclusions we withdrew |
| `week-44-premium-seo-client.docx` | The client-facing version of that plan |
| `week-44-rate-card-change.md` | The new tempo / Urbania / Maharaja rates across all 3,392 pages |
| `week-44-title-truncation-repair.md` | 320 titles that rendered in Google as broken sentences |
| `week-44-warning-cleanup.md` | The automated check: 133 warnings → 60, and the two bugs inside them |
| `week-44-deployment-record.md` | The deploys, and how each was verified rather than trusted |

---

## What actually shipped

### 1. The new rate card

Tempo traveller, Force Urbania and Maharaja rates were changed across the whole site.

| Force Tempo Traveller | | Force Urbania | | Maharaja |
| --- | --- | --- | --- | --- |
| 12 Seater | ₹23/km | 10 Seater | ₹25/km | Maharaja 12 — ₹26/km |
| 16 / 17 Seater | ₹25/km | 12 Seater | ₹27/km | Maharaja 17 — ₹30/km |
| 20 Seater | ₹28/km | 13 Seater | ₹28/km | |
| 26 Seater | ₹31/km | 17 Seater | ₹30/km | |

The Urbania was first built as a flat ₹35/km and corrected to the ₹25–30 ladder above on
your instruction. That correction had to reach worked examples as well as rate tables — one
FAQ had to be re-multiplied rather than relabelled, because both halves of *"the 12-seater
at ₹35/km, a 600 km round trip starts at ₹13,200"* were wrong.

This was not a small change. A rate is published in one data file but **repeated** across
hundreds of hand-written pages, in fare tables, in sentences, in FAQ answers Google reads
as structured data, and multiplied out into package totals. It touched 56 source files and
240 lines, and the sweep to prove it was complete went **371 → 262 → 285 → 268 → 0** stale
pages. The count rising between passes two and three is the reason it took several
attempts: a rupee amount is written five different ways in this codebase, and each pass
fixed one encoding and revealed another.

Three bugs were caused along the way and all three are recorded in the rate document,
including one where the verification script itself was broken and confidently reporting
everything clean.

### 2. 320 titles repaired

Titles were rendering in search results as half-finished sentences:

```
Triveni Cabs Pricing Transparency | No Hidden Charges, No | Triveni Cabs
Gateway of India Mumbai Guide 2026: How to | Triveni Cabs
Mussoorie in 2 Days Itinerary 2026 | Cab Package from | Triveni Cabs
```

That is the blue clickable line, and a listing that looks broken is one of the few things
that makes a searcher skip a result they can see is relevant. Three fixes went in — clearing
a connector left by a cut, removing a brand the layout template was about to add anyway,
and dropping a trailing clause that a cut had reduced to a stub. 320 titles improved, none
reduced below 30 characters.

### 3. The automated check taken apart

133 warnings down to 60, with four of the five classes now at zero. Two of them were real
bugs: three airport pages printing *"Airport"* twice, and two vehicle route pages competing
against each other with an identical title.

The most valuable thing in that work was not the count. It was finding that 61 pages were
spending their whole description budget on editorial copy and pushing **the price and the
phone number** past the point Google renders — so the descriptions were rebuilt to reserve
the commercial half first.

### 4. An orphaned page, found by crawling our own site

`/golden-triangle-tour-cost` had **no inbound links at all**. The template contains three
hand-written contextual links, but the whole block was hidden behind a condition that
depends on unrelated data and is currently false. Three links were dead. That block is no
longer gated.

This matters because of the single most useful finding in the Week 44 analysis: `/toll-cost`
has 178 contextual links and measurable traffic on 100% of its pages at position 4.9, while
templates with 3,392 **footer** links sit at 2%. Contextual links work; footer links do not.
"Uplift the remaining pages" does not mean adding them to the footer — they are already
there.

---

## Where we were wrong

Two conclusions were drawn during the analysis and then withdrawn. Both are kept on the
record because the failure mode is the same and worth remembering.

**"The 518 Urbania and Maharaja pages return nothing — consolidate 777 pages down to 259."**
Wrong. Those pages went live around 19–20 August; the Search Console data ends 18 August. A
page cannot appear in measurements taken before it was published. The zeros measured our
absence, not the market. Retiring 518 live pages on that basis would have been a serious
mistake, and this plan came close to recommending it. The recommendation is now **measure,
do not cut** — re-pull Search Console in four to six weeks with a window starting after the
deploy date.

**"Five blogs carry 7,224 impressions."** Wrong. The extraction matched across entry
boundaries in the export and merged unrelated rows.

Both had the same shape: a confident number produced by a script whose assumptions were not
checked against the raw data. Every figure in this week's documents has been re-derived
either from the export or from the built HTML.

One template that recency does **not** excuse: Event Transportation went live on 2 August,
the same day as Toll Cost and Railway Station Taxi. Those two now have measurable traffic on
100% and 79% of their pages at positions 4.9 and 5.9. Event Transportation has traffic on
2 of 129 pages at position 39.5. Same publication date, opposite result — so it stays on the
list for investigation.

---

## Verified, not assumed

Every claim above was measured against the built HTML rather than the source, because the
source is what we intended and the HTML is what Google sees.

```
pages                : 3392
missing titles       : 0
duplicate titles     : 0
orphan-tail titles   : 0
descriptions >200    : 0
descriptions <70     : 0
stale tempo/urbania  : NONE
seo-check            : 0 errors, 60 warnings
```

Deploys were verified the same way. A deploy exiting zero is not proof — an earlier deploy
in this programme reported success while pm2 had never restarted, so the files were updated
on disk while the old process kept serving the old build from memory. The check is now
always the remote `BUILD_ID` matching the local one **and** a pm2 uptime that actually
resets, both read from the server.

The first deploy this week was deliberately stopped at 94% of its upload and thrown away in
favour of a genuinely clean rebuild. That cost nothing: the script holds off on the backup,
the overlay and the restart until all ten chunks are uploaded and size-verified, so
production was never touched. One detail did matter — five stale tarballs going back to 17
August were pruned first, because the script selects its tarball by modification time and a
leftover would have silently shipped last week's site.

---

## Open items

### Yours to decide

These are held back deliberately. Each changes published pricing, retires a live indexed
URL, or alters how the brand presents itself — decisions with commercial consequences that
are hard to reverse.

1. **The Maharaja / Urbania overlap.** Maharaja is ₹26–30 and Urbania is now ₹25–30. At 17
   seats both quote ₹30/km. That may be exactly right — they are different products and the
   Maharaja sells on seat quality — but if it should read as the more expensive vehicle, its
   ladder needs to move up.
2. **The ₹81,000 Char Dham Urbania circuit price.** Live, but *derived* by scaling the old
   ₹66,000 with the rate change rather than quoted by you. The one number in the rate change
   that needs confirmation.
3. **The two Taj Mahal blog posts.** Their titles no longer compete, but they remain two
   posts on one subject. Consolidating one into the other is the stronger move and retires a
   live URL.
4. **The three-way fare disagreement.** One journey is quoted at three different prices
   across the site because three datasets disagree — `/haridwar-to-dehradun` at ₹660 against
   `/distance/` at ₹2,365, and a third figure elsewhere.
5. **A full-day rate card**, so round-trip fares stop being calculated as double the one-way,
   which can exceed your own published full-day rate.
6. **The 17-seater tempo on the Char Dham page** is ₹30/km where the standard 17-seater is
   ₹25/km. Possibly a deliberate mountain-route premium; left as found.

### Blocked on Search Console

**The five per-page query exports.** This blocks the largest remaining piece of Week 44 —
the 60 `city-intent-competition` warnings, where several of our own pages answer one
question. For Agra alone, five pages compete for the generic city-cab query and ten for
event transport. Deciding which should own *"cab service in Agra"* requires knowing which
Google currently shows and for what. Guessing is how the duplicate-URL problem we spent
Week 43 undoing was created, so this stays open until the data exists.

Also waiting on data: **the bus intent question.** Bus pages are the largest block on the
site at 181,099 impressions, and one ranks sixth while converting at 0.17% — the signature
of an answer nobody wanted. Someone searching "Delhi to Mussoorie bus" probably wants a
ticket and a timetable; we charter 22 to 56 seater buses. If that is what is happening, no
rewrite rescues those pages and they should be repositioned toward group charter. This must
be settled before money goes into them.

### Housekeeping

**Resubmit the sitemap** and request indexing, so the retitled pages, the new rates and the
22 consolidated URLs are recrawled sooner than Google's own schedule.

---

## What to expect, honestly

The nine untouched service templates remain the most winnable thing on this site: 679,839
impressions a quarter, most already ranking in the top ten, converting at about a third of
what those positions deserve — roughly **+10,500 clicks a quarter** of booking-intent
traffic if the gap closes.

The title and description work shipped this week attacks precisely that gap and needs four
to six weeks before Search Console can say whether it worked. The airport and city-hub
pages will not move in that window — Dehradun's city hub sits at position 38 and Varanasi's
at 32, and that is a rank problem, which moves in months rather than weeks.

Week 43's retitling of 4.3 million impressions worth of pages went live on 22 August and
reports back in late September. Reading it sooner would be reading noise.
