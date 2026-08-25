# Rate card change — tempo traveller, Force Urbania and Maharaja

**Date:** 23 August 2026
**Scope:** every published per-km rate for the tempo, Urbania and Maharaja fleets
**Pages affected:** 3,392 (the whole site)
**Status:** built clean, `seo-check` 0 errors, not yet deployed

---

## What changed, and why it was not a small job

The instruction was short: raise the group-vehicle rates. The work was not, and it is
worth setting out why, because the same trap will be there the next time a price moves.

A per-km rate is not stored in one place on this site. It is *published* in one place —
`src/utilis/vehicleTypeData.js` — and then it is **repeated, restated, worked into
examples, and multiplied out into totals** across hundreds of hand-written pages. A
tempo rate appears in a fare table on one page, inside a sentence on another, as the
answer to an FAQ on a third, and as the arithmetic behind a package price on a fourth.
Change the data file alone and the site immediately begins contradicting itself: the
rate card says one number, the paragraph two screens down says another, and the FAQ
that a customer actually reads before calling says a third.

That is not a cosmetic problem. Two different prices for the same vehicle on the same
domain is a credibility problem with the customer and a contradictory signal to Google,
which reads all of it.

So the change was done as a full sweep, not an edit.

---

## The new rate card

### Force Tempo Traveller

| Vehicle | Rate |
| --- | --- |
| 12 Seater | ₹23/km |
| 16 Seater | ₹25/km |
| 17 Seater | ₹25/km |
| 20 Seater | ₹28/km |
| 26 Seater | ₹31/km |

### Force Urbania — all variants, ₹25–30 by seater

| Vehicle | Rate |
| --- | --- |
| 10 Seater | ₹25/km |
| 12 Seater | ₹27/km |
| 13 Seater | ₹28/km |
| 17 Seater | ₹30/km |

The Urbania was first implemented as a flat ₹35/km. That was corrected to the ladder
above on your instruction — the band is ₹25 to ₹30, stepped by seat count, so the
10-seater opens the range and the 17-seater closes it. The flat number was removed
everywhere it had already been written, including two worked FAQ examples that had to
be re-multiplied rather than just re-labelled (see *Derived totals*, below).

### Maharaja Tempo Traveller

| Vehicle | Rate |
| --- | --- |
| Maharaja 12 Seater | ₹26/km |
| Maharaja 17 Seater | ₹30/km |

Maharaja was left where it was. It is the premium tier and its rates were not part of
this change.

**One thing to look at when you have a moment.** The Maharaja band (₹26–30) now sits
inside the Urbania band (₹25–30). The two ranges overlap almost completely, so at the
top of each ladder a 17-seater Maharaja and a 17-seater Urbania are both ₹30/km. That
may be exactly what you want — they are different products and the Maharaja sells on
seat quality, not price. But if the Maharaja is meant to read as the more expensive
vehicle, its ladder needs to move up. This is a commercial decision, not a technical
one, so it has been left alone and flagged rather than guessed at.

---

## How the sweep was actually done

### The five-encodings problem

The first pass looked clean and was not. A rupee amount is written in this codebase in
at least five different ways, depending on which file and which year it was written in:

| Form | Example |
| --- | --- |
| Literal rupee sign | `₹20/km` |
| Escaped unicode | `₹` |
| HTML entity | `&#8377;` |
| Plain text, spaced | `Rs 20/km` |
| Plain text, unspaced | `Rs20/km` |
| Bare number in a data field | `perKm: 20` |

A find-and-replace that handles only the literal `₹` reports success and leaves several
hundred pages stale. That is precisely what happened on the first attempt, and it is why
the verification step below exists — it is the only thing that caught it.

### The nearest-vehicle rule

A blanket replace of `₹20/km` would have been a disaster. ₹20 is not only a tempo rate;
₹30/km is also the bus-hire rate, ₹24 appears in copy that has nothing to do with these
vehicles, and the Fortuner is legitimately ₹35/km. So every rewrite was gated on context:
a rate is only changed when **the nearest vehicle word before it** is the vehicle whose
rate is moving. Maharaja, bus, coach, Innova, Ertiga, sedan, SUV, Fortuner, XUV and
Hycross all block the rewrite.

Where the vehicle name sits on a different line from the rate — which is the normal shape
of a multi-line data object — the rule falls back to a window of preceding lines rather
than giving up.

### Three bugs that this rule caused, and how each was caught

Being honest about these, because they are the reason the verification pass is not
optional.

**1. Maharaja was corrupted twice.** The vehicle is called *Maharaja Tempo Traveller* —
the blocker word (`Maharaja`) comes *before* the keyword (`Tempo`), so "nearest vehicle
word" resolved to `Tempo` and happily rewrote a Maharaja rate. ₹26 became ₹28, then on a
later pass ₹31, while the underlying data file still said 26. Caught both times by
diffing the built pages against the data file and restored both times.

**2. `/force-urbania-rent-per-km` was given the tempo rate.** The specific line being
rewritten did not contain the word "urbania" anywhere in its window, so the tempo rule
claimed it. Found by the sweep, fixed directly.

**3. The verification script itself was broken and reporting false clean.** The check
used the pattern `tempo|traveller[...]`, and in a regular expression the `|` splits the
*entire* pattern, not just the two words — so the check was effectively matching the bare
word "tempo" on all 3,392 pages and drowning the real signal. Fixed by grouping it as
`(?:tempo|traveller)`. Worth recording: for a short while the tooling was confidently
telling us everything was fine.

### Derived totals

Some pages do not just quote a rate — they multiply it out. Those had to be recomputed,
not relabelled, or the page would state a rate that does not produce the price printed
next to it.

- `/force-urbania-rent-price` carried a worked FAQ example: *"For the 12-seater at ₹35/km,
  a 600 km round trip starts at ₹13,200."* Both halves were wrong — the rate is now ₹27,
  and ₹13,200 was itself computed from an even older ₹22. Rewritten to ₹27/km and
  ₹16,200.
- The same page's local package extra-km line and its luxury captain-seats row were moved
  onto the ladder (₹27 and ₹30 respectively).
- `/char-dham-yatra-taxi-fare-from-haridwar` quoted the 12-seater Urbania at ₹22/km and
  priced the full 9-day circuit at ₹66,000. The rate is now ₹27; the circuit figure has
  been scaled with it to ₹81,000. **That package price is a derivation, not a quoted
  number from you** — if the real 9-day Urbania price is different, this is the one figure
  in the whole change that needs your correction.

---

## Verification

The rate work touched **56 source files** and **240 lines**, which is far too many to
check by eye. So the check was done against the *built output* — the actual HTML that
Google and the customer will see — rather than against the source.

A sweep script walks all 3,392 built pages, finds every per-km figure, resolves which
vehicle it belongs to using the nearest-vehicle rule, and reports any that still carry
an old rate.

**Progress of that sweep across passes:**

| Pass | Stale pages found |
| --- | --- |
| 1 | 371 |
| 2 | 262 |
| 3 | 285 |
| 4 | 268 |
| Final | **0** |

The count going *up* between passes two and three is the five-encodings problem
surfacing — each pass fixed one encoding and revealed another.

**Final state:**

```
BUILD_EXIT=0
seo-check: 0 error(s), 133 warning(s)  — passed
RATE SWEEP: CLEAN — zero stale tempo or Urbania rates in 3,392 pages
```

**Live titles, read out of the built HTML:**

```
12 Seater on Rent ₹23/km — AC + Driver | Triveni Cabs
17 Seater on Rent ₹25/km — AC + Driver | Triveni Cabs
26 Seater on Rent ₹31/km — AC + Driver | Triveni Cabs
10 Seater on Rent ₹25/km — AC + Driver | Triveni Cabs
17 Seater on Rent ₹30/km — AC + Driver | Triveni Cabs
Maharaja 12 Seater on Rent ₹26/km — AC + Driver | Triveni Cabs
```

**Distribution across the built site** — a useful sense of how far a single rate reaches:

| Rate | Pages carrying it |
| --- | --- |
| ₹23/km | 3,392 |
| ₹25/km | 578 |
| ₹26/km | 279 |
| ₹27/km | 275 |
| ₹28/km | 583 |
| ₹30/km | 1,228 |
| ₹31/km | 279 |

The ₹23 figure reaching all 3,392 pages is the site-wide footer rate card, which is why
getting it wrong would have been visible on every single page.

---

## The SEO consequence, which is the real reason this mattered

The rate is not buried in body copy. It is **in the page title** on the vehicle pages —
`12 Seater on Rent ₹23/km — AC + Driver`. That title is the blue line in the search
result. Three things follow:

1. **A stale rate in a title is a stale rate in Google's index**, and it stays there until
   the page is recrawled. Leaving 268 pages with an old number would have meant Google
   showing a price we no longer honour, for weeks.
2. **A price in the title is the single strongest click driver on these pages.** It is the
   reason the vehicle titles were written that way in the first place — searchers scanning
   a results page for "17 seater tempo traveller rate" are looking for a number, and the
   listing that shows one gets the click. A wrong number gets the click and then loses the
   call, which is worse than no click.
3. **A rate that contradicts itself between the title and the FAQ is an accuracy signal.**
   Google reads the FAQ schema on these pages. Title says ₹27, FAQ says ₹35 — that is a
   page that disagrees with itself on the one fact it exists to state.

This is why the FAQ answers and the worked examples were rewritten rather than left. They
are structured data, not decoration.

---

## Still open

- **Deployment.** The site is built and clean but this has **not been pushed to
  production**. Production is still serving the old rates.
- **The Maharaja / Urbania overlap** described above — a pricing decision for you.
- **The 17-seater tempo on the Char Dham page** is ₹30/km where the standard 17-seater is
  ₹25/km. That may be a deliberate mountain-route premium; it has been left as found.
- **The ₹81,000 Char Dham Urbania circuit price** — derived, needs your confirmation.
