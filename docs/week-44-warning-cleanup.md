# Clearing the automated check — 133 warnings down to 60

**Date:** 24 August 2026
**Workstream:** Week 44, the "how to judge the week" scorecard
**Target set in the plan:** under 40 warnings
**Result:** 60, and every one of them is now the same single class

---

## Why this was worth a day

The Week 44 plan set a target of "under 40 warnings" on the automated check. That number
on its own is not the point — nobody visits a website because a linter is quiet. The point
is what the warnings were hiding.

When we went looking, three of the five warning classes turned out to be real defects
that a customer or Google would see, and two of them were bugs rather than untidiness. The
count went from 133 to 60, but the more useful summary is that **four of the five classes
are now at zero**, and the one that remains is a genuine strategic question rather than
something to tidy away.

Here is the before and after:

| Warning class | Before | After |
| --- | --- | --- |
| `description-long` | 61 | **0** |
| `city-intent-competition` | 60 | 60 |
| `description-short` | 7 | **0** |
| `title-too-long` | 4 | **0** |
| `duplicate-title` | 1 | **0** |
| **Errors** | **0** | **0** |

---

## The two real bugs

### "Airport" printed twice, on every Dehradun and Srinagar page

Three pages were rendering titles like this:

```
Jolly Grant Airport Dehradun Airport to Haridwar Taxi ₹1,500 | No Surge
```

The template derives a short airport name by stripping a trailing " Airport" from the full
name. That works for `Delhi IGI Airport` and `Jaipur International Airport`. It does
nothing at all for `Jolly Grant Airport Dehradun` or `Sheikh ul-Alam International Airport
Srinagar`, because those do not *end* in the word — so the full name came through and the
template added "Airport" again after it.

The fix was not a better regular expression. The data already carries the city, and the
city is what people actually search: nobody types *"Sri Guru Ram Dass Jee airport to
Dalhousie taxi"*. So the title now leads with the city, which repairs three pages and
improves four more that were technically correct but commercially useless:

```
- Jolly Grant Airport Dehradun Airport to Haridwar Taxi ₹1,500 | No Surge
+ Dehradun Airport to Haridwar Taxi ₹1,500 | No Surge

- Sri Guru Ram Dass Jee Airport to Amritsar City Taxi ₹800 | No Surge
+ Amritsar Airport to Amritsar City Taxi ₹800 | No Surge
```

### Two vehicle pages competing for the same query

`/maharaja-tempo-traveller/chandigarh-to-dharamshala-dalhousie-khajjiar` and
`/maharaja-tempo-traveller/chandigarh-to-dharamshala` both rendered as:

```
Maharaja Tempo Traveller Chandigarh to Dharamshala | Triveni Cabs
```

Two distinct pages presenting one title is self-cannibalisation — we were asking Google to
choose between two of our own pages for the same search. The cause was the 45-character
tightening budget: "Maharaja Tempo Traveller" spends 24 of it before the route even
begins, so "Dalhousie Khajjiar" was amputated and the longer route collapsed onto the
shorter one.

Raising the budget alone would not have been enough. 47 of the 715 vehicle route titles
run past 58 characters and the worst reach 87:

```
Maharaja Tempo Traveller Haridwar to Kedarnath Badrinath Yamunotri Gangotri (char Dham)
Maharaja Tempo Traveller Varanasi to Rajasthan Tour (jaipur Udaipur Jodhpur Jaisalmer)
```

Look closely and those two have the same shape with the useful half on opposite sides —
one carries its short name inside the brackets, the other before them. So the destination
is now shortened by taking whichever half is shorter, which turns both into something a
person would actually write and, again, matches what people search. With that done, a
65-character budget is enough for the rest.

```
Maharaja Tempo Traveller Chandigarh to Dharamshala Dalhousie
Maharaja Tempo Traveller Chandigarh to Dharamshala — ₹26/km
```

Distinct, and both readable.

---

## The 61 over-long descriptions, and what they were really costing

Sixty-one pages carried a meta description over 200 characters, the worst at 348. Forty-one
were tour packages, built by gluing a long editorial intro onto a commercial tail:

```
`${content.intro} Book ${title} at ${price} for ${duration}. Best rates,
 comfortable stay, guided tours. Call 7668570551.`
```

The obvious fix is to trim. The obvious fix is also wrong, and this is the part worth
recording. Google renders roughly 155–160 characters. Everything past that is invisible —
and what sits past it here is **the price and the phone number**. These pages were paying
for a long description and losing the only two things in it that produce a call.

So the descriptions were not simply shortened. The commercial tail is now reserved first
and the editorial half is given whatever budget is left:

```js
const commercialTail = `${price} for ${duration}. Call 7668570551.`;
const description = `${tightenDescription(intro, DESC_BUDGET - commercialTail.length - 1)} ${commercialTail}`;
```

The same reservation pattern was applied to the local taxi, bus stand, road trip,
where-to-go and package templates, each of which interpolates a variable-length list into a
fixed sentence and so only overflowed on its longest entries — Faridabad has *"NIT (New
Industrial Township)"* among its coverage areas, and the Delhi weekend road trip strings
seven stops together with arrows.

A new `tightenDescription` helper drops **whole trailing sentences** rather than cutting
through one, for the same reason the title work drops whole clauses: a description that
stops mid-sentence reads as broken.

Five more were hand-written one-offs, edited individually rather than by rule. One of those
was a genuine defect rather than a length problem — the luxury car description named
*"Luxury Car (BMW / Audi / Mercedes)"* twice inside 204 characters, once at the start and
again in the closing sentence, and that repetition was most of the overflow.

## The seven that were too short

Seven sightseeing tours had descriptions as short as 51 characters — *"Romantic tour of
palaces, lakes, and royal heritage"* — well under what Google will render, so the page was
volunteering less than it was allowed to say.

Rather than write seven blurbs by hand, the template now composes the existing blurb with
the two facts a searcher wants next: how long the tour takes and what it starts at. Every
sightseeing page gets a consistently sized, commercially useful description, and the fix
cannot regress the next time a tour is added.

---

## An orphan page found along the way

While checking whether the peak-season pages were properly linked, a crawl of all 3,392
built pages found that **`/golden-triangle-tour-cost` had no inbound links at all** — the
only page mentioning it was itself.

That was not an oversight in the content. The template *does* contain three hand-written
contextual links — to the tour package, to the tour-cost page and to the English-speaking
driver page — but the entire block sits inside `{others.length > 0 && (...)}`, where
`others` is the list of *other origin* pages. The dataset currently has a single origin, so
the condition is false and all three links were dead.

This matters more than an ordinary missing link, because it is exactly the finding the Week
44 analysis turned on: `/toll-cost` has 178 contextual links and measurable traffic on 100%
of its pages at position 4.9, while templates with 3,392 footer links sit at 2%. Contextual
links are the ones that work, and this page had none. The section is no longer gated, and
the page now has a real contextual inbound link where it had zero.

## A blog competing with itself — and a wrong first diagnosis

Two posts were rendering identical titles:

```
/blog/best-time-to-visit-taj-mahal-2026                    → Best Time to Visit Taj Mahal 2026
/blog/best-time-to-visit-taj-mahal-month-by-month-2026     → Best Time to Visit Taj Mahal 2026
```

The first attempt at this was wrong and is worth recording. Seeing that the post's `title`
field was distinct, a `metaTitle` was added to override it — and the rebuild changed
nothing. Checking the OpenGraph tag showed a *third* string, which was neither the title
nor the new metaTitle. The object already had a `metaTitle` further down, so the added key
was a duplicate that the later one silently overrode.

The real cause was then obvious. The existing metaTitle was 54 characters:

```
Best Time to Visit Taj Mahal 2026: Month-by-Month Guide
```

Clamped to the 45-character budget, that cuts at the colon and leaves exactly *"Best Time
to Visit Taj Mahal 2026"* — character for character the other post's title. Shortening the
real metaTitle to 40 characters fixes it:

```
Taj Mahal Month by Month: Best Time 2026
```

**Still open, and a decision rather than a fix:** these remain two posts on one subject.
Differentiating the titles stops them competing in the results page, but consolidating one
into the other would be the stronger move. That retires a live indexed URL, so it is left
for you to call.

---

## What is left: 60 warnings, one class

Every remaining warning is `city-intent-competition`, and it is not untidiness. It flags
places where several of our own pages answer one question. For Agra alone:

```
agra — generic city cab   5 pages: /agra, /cab-service/agra, /local-taxi/agra,
                                   /outstation-cabs/agra, /taxi-fare/agra
agra — event transport   10 pages: /event-transportation-service/city/agra, plus nine more
```

This cannot be fixed by editing a title, and it should not be fixed by guessing. Deciding
which of five pages should own *"cab service in Agra"* requires knowing which of them
Google currently shows and for what — which is precisely the Search Console per-page query
export that Monday's diagnosis is waiting on. **This is the largest remaining item in Week
44 and it is blocked on that data**, not on implementation time.

Guessing here is how the duplicate-URL problem we spent Week 43 undoing was created in the
first place, so the warning stays visible until the data arrives.

---

## Verification

Measured across all 3,392 built pages after the final build:

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

One build failure happened along the way and is worth noting because it has now bitten this
project twice: an import was inserted programmatically after "the last line beginning with
`import`", which landed *inside* an open multi-line `import { ... }` block and broke
compilation. The insertion logic is now brace-depth aware.
