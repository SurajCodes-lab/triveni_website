# Week 44 deployment record — rate card and title repair

**Date:** 24 August 2026
**Host:** AWS Lightsail, `ubuntu@13.201.84.132`, pm2 process `triveni`
**BUILD_ID deployed:** `PD1OAqrk9C7AQrFHvL1f0` (replacing `BKakb6qg0pKuO4F33pg1R`)
**Rollback point:** `/home/ubuntu/triveni-backup-cro-20260824_222403`
**Status:** live and verified

---

## What went live

Two pieces of work, both site-wide:

1. **The new group-vehicle rate card** — tempo traveller ₹23–31 by seater, Force Urbania
   ₹25–30 by seater, Maharaja unchanged at ₹26–30. Documented in
   `week-44-rate-card-change.md`.
2. **The title truncation repair** — 320 titles that were rendering in Google as broken,
   half-finished sentences. Documented in `week-44-title-truncation-repair.md`.

---

## The first attempt, and why it was thrown away

The first deploy was packed and started, and it was **stopped deliberately at 94% of the
upload**. Nothing was lost by that and nothing on the server was touched, which is worth
explaining because it looks alarming in the logs.

The deploy script is built so the server stays untouched until every one of the ten chunks
has been uploaded *and* size-verified against the local file. The overlay extract, the
backup and the pm2 restart all happen after that gate. Killing the process during the
upload phase therefore leaves production exactly as it was — still serving the previous
build — with nothing more than some orphaned chunk files in `/tmp` on the server, which
were cleared before restarting.

The rebuild was requested to be genuinely fresh, so `.next` was deleted outright rather
than rebuilt in place, and the stale tarballs were pruned first. That last part matters
more than it sounds: the deploy script selects its tarball with `ls -t | head -1`, the
newest by modification time, and there were five older tarballs sitting in `/tmp` going
back to 17 August. A stale one being picked up is a silent way to deploy last week's site.

---

## Pre-flight verification

The rebuild was checked before anything was packed.

| Check | Result |
| --- | --- |
| `npm run build` | exit 0 |
| Pages built | 3,392 |
| App JS chunks | 529 |
| `seo-check` | 0 errors, 133 warnings |
| Stale tempo/Urbania rates | none |
| Titles ending on a connector | 0 |

Then the tarball itself was checked, because a gzip-valid archive is not the same as a
complete one — on 2 August a dev process clobbered `.next` mid-pack and produced an
archive that extracted cleanly and broke the entire site. The script's own gate compares
the archive's app-chunk count against the local build and refuses to proceed on a
mismatch:

```
=== [0b/8] Tarball content sanity ===
  app .js chunks: tarball=529 local=529
```

---

## The deploy

```
=== [4/8] Reassemble + verify ===
  local=372496909 remote=372496909
=== [5/8] Overlay + restart ===
  -> backup (hardlink snapshot)
  -> extract overlay (public/ preserved — not in tarball)
  -> verify public/ intact
  [PM2] [triveni](0) ✓   uptime 0s   restarts 25   online
=== [6/8] Healthcheck ===
  Homepage=200  Image=200  /tempo-traveller=200  /one-way-cab=200
  chunk integrity: all homepage chunks 200
=== [8/8] DEPLOY COMPLETE ===
```

The chunk-integrity step is the one that earns its keep. An HTML 200 does not prove a page
works — if the JS chunks the homepage references are missing, every browser throws a
site-wide client-side exception while the server happily returns 200 on the HTML. So the
script pulls the homepage, extracts every `/_next/static/**.js` URL it references, and
requests each one.

---

## Verification after the fact

A deploy exiting 0 is not proof. An earlier deploy in this programme reported success
while pm2 had never actually restarted — the files were updated on disk and the old
process kept serving the old build from memory. So the check is always the same two facts,
taken from the server rather than from the script's own output:

```
remote_build_id = PD1OAqrk9C7AQrFHvL1f0
local_build_id  = PD1OAqrk9C7AQrFHvL1f0     <- match
pm2: restarts=25  status=online  uptime reset to 0s
```

### Titles and rates, read off the live site

Before, captured from production while the old build was still serving:

```
12 Seater on Rent ₹20/km — AC + Driver | Triveni Cabs
17 Seater on Rent ₹24/km — AC + Driver | Triveni Cabs
26 Seater on Rent ₹28/km — AC + Driver | Triveni Cabs
10 Seater on Rent ₹24/km — AC + Driver | Triveni Cabs
Sightseeing Tours India 2026 | Taj Mahal ₹3,500 | Triveni | Triveni Cabs
Triveni Cabs Pricing Transparency | No Hidden Charges, No | Triveni Cabs
```

After:

```
12 Seater on Rent ₹23/km — AC + Driver | Triveni Cabs
17 Seater on Rent ₹25/km — AC + Driver | Triveni Cabs
20 Seater on Rent ₹28/km — AC + Driver | Triveni Cabs
26 Seater on Rent ₹31/km — AC + Driver | Triveni Cabs
10 Seater on Rent ₹25/km — AC + Driver | Triveni Cabs
12 Seater on Rent ₹27/km — AC + Driver | Triveni Cabs
17 Seater on Rent ₹30/km — AC + Driver | Triveni Cabs
Maharaja 12 Seater on Rent ₹26/km — AC + Driver | Triveni Cabs
Sightseeing Tours India 2026 | Taj Mahal ₹3,500 | Triveni Cabs
Triveni Cabs Pricing Transparency | No Hidden Charges | Triveni Cabs
Gateway of India Mumbai Guide 2026 | Triveni Cabs
```

### Body copy, not just titles

Titles are the cheap thing to verify. The rate also has to be right inside the page, in
the fare tables and in the FAQ answers that Google reads as structured data. Three checks
against the live site:

| Page | Expected | Found |
| --- | --- | --- |
| `/force-urbania-rent-price` | no ₹35; ₹27 and ₹30; the FAQ example re-multiplied | ₹27/km ×12, ₹30/km ×4, ₹16,200 ×3, **no ₹35, no ₹13,200** |
| `/char-dham-yatra-taxi-fare-from-haridwar` | ₹27 and the scaled circuit price | ₹27/km ×2, ₹81,000 ×5, **no ₹22, no ₹66,000** |
| `/luxury-car-rental-delhi-with-driver` | Fortuner ₹35 must **survive** | `Fortuner ₹35/km, Camry ₹45/km` — intact |

That last row is the one worth pausing on. ₹35/km was the old flat Urbania rate, but it is
*also* the legitimate Fortuner rate, and a blanket find-and-replace would have quietly
repriced the luxury fleet. The context rule held.

---

## Still open

- **The Maharaja / Urbania overlap.** Maharaja is ₹26–30 and Urbania is now ₹25–30, so at
  17 seats both quote ₹30/km. Left as-is deliberately — it is a pricing decision.
- **The ₹81,000 Char Dham Urbania circuit price** is derived by scaling the old ₹66,000
  with the rate change, not quoted. It is live and needs confirmation.
- **Search Console housekeeping** — the sitemap should be resubmitted so the retitled pages
  and the new rates are recrawled sooner rather than on Google's own schedule.
- The `seo-check` warning count is 133 and the Week 44 target is under 40. Errors are 0.

**Rollback,** should anything surface:

```
ssh -i "LightsailDefaultKey-ap-south-1 (1).pem" ubuntu@13.201.84.132 \
  'rm -rf /home/ubuntu/triveni && mv /home/ubuntu/triveni-backup-cro-20260824_222403 /home/ubuntu/triveni && pm2 restart triveni'
```
