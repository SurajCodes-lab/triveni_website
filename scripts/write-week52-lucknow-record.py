from pathlib import Path
import shutil, tempfile

out = Path('D:/Desktop/triveni_next/2.0/week52')
tmp = Path(tempfile.gettempdir())
evidence = out / 'implementation-evidence' / 'lucknow-sightseeing'
evidence.mkdir(parents=True, exist_ok=True)
for name in ['summary.json', 'pages.json', 'tours.json', 'protected.json']:
    source = tmp / 'week52-lucknow' / 'before' / name
    if source.exists(): shutil.copy2(source, evidence / ('before-' + name))
for phase in ['before', 'after']:
    source = tmp / 'week52-lucknow' / phase / 'summary.json'
    if source.exists(): shutil.copy2(source, evidence / (phase + '-summary.json'))
md = '''# Week 52 — Lucknow sightseeing metadata and planning section

Status: implemented locally; release verification and deployment pending.

## Scope

- /sightseeing/lucknow
- /sightseeing/lucknow-heritage-city-tour
- /sightseeing/lucknow-to-ayodhya-religious-tour
- /sightseeing/lucknow-to-prayagraj-religious-tour
- /sightseeing/lucknow-nawabi-heritage-tour

## Changes

- Added a visible planning section covering itinerary sequencing, vehicle and luggage fit, pickup/drop, waiting, parking, tolls and written inclusions.
- Corrected copied keyword metadata on all four Lucknow sightseeing records. The heritage tour no longer carries Leh–Ladakh keywords; Ayodhya and Prayagraj records now use their own visitor intent.
- Corrected duration labels to match the existing itinerary length: approximately 9 hours for the heritage tour, 15 hours for Lucknow–Ayodhya, 16.5 hours for Lucknow–Prayagraj and 8.5 hours for the Nawabi heritage tour.
- Existing slugs, itinerary stops, prices, images, booking controls and useful content remain in place.

## Verification

The production build completed successfully and generated 4,283 known routes. All five affected pages return HTTP 200, retain one H1, show the new planning section and preserve the GA4, Search Console and analytics markers.

Before-change LCP baseline used Lighthouse 13.4.1 with three mobile and three desktop runs for /lucknow and /sightseeing/lucknow. City-hub mobile runs ranged from 3.0–6.5 seconds and sightseeing mobile runs from 3.2–3.5 seconds; desktop runs were below 1.2 seconds. The after sample recorded three city-hub mobile runs at 3.6–4.4 seconds, three city-hub desktop runs below 0.9 seconds and two sightseeing mobile runs at 3.2–3.5 seconds. The remaining sightseeing desktop runs require a repeat because the first collection was interrupted. These are lab observations, not field Core Web Vitals.

GA4 and tracking files were not modified. Search performance and ranking improvement are not claimed from this content correction. The reported three-day traffic decline requires a fresh Search Console export before attribution.

## Follow-up

- Complete the missing sightseeing desktop LCP runs with the same environment.
- Obtain the latest three days versus the preceding three and matched weekdays, segmented by page, query, device and country.
- Review the Lucknow hub mobile LCP element and render delay as a separate performance workstream.

Evidence is stored in implementation-evidence/lucknow-sightseeing/.
'''
(out / 'lucknow-sightseeing-implementation.md').write_text(md, encoding='utf-8')
print('Wrote', out / 'lucknow-sightseeing-implementation.md')
