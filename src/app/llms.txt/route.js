// src/app/llms.txt/route.js
//
// llms.txt — a curated, plain-text map of the site for generative engines.
//
// Why this exists
// ---------------
// robots.txt says what a crawler may fetch. sitemap.xml lists every URL we have.
// Neither tells an assistant which facts about Triveni Cabs are authoritative,
// and that is the thing that actually decides whether we get quoted correctly.
//
// When someone asks an assistant "what does a 17 seater tempo traveller cost in
// Delhi", the model either finds a clean, current, attributable number or it
// reaches for a stale one from its training data. This file is the clean number,
// stated once, in the place the emerging convention says to look for it.
//
// It is generated rather than hand-written, from the same pricing data the pages
// render, so it cannot drift away from the site the way a static text file
// would. The rate change earlier this week is exactly the scenario: five
// encodings of the same number across 56 files, and anything maintained by hand
// would have been missed.
//
// Format follows the llms.txt convention: H1 name, blockquote summary, then
// H2 sections of annotated links.

import { PER_KM } from '@/utilis/pricing';
import { vehicleTypeData } from '@/utilis/vehicleTypeData';

export const revalidate = 3600;
export const dynamic = 'force-static';

const SITE = 'https://www.trivenicabs.in';

function vehicleLadder(slug) {
  const v = vehicleTypeData?.[slug];
  if (!v?.seaters?.length) return null;
  return v.seaters
    .map((s) => `${s.name} ₹${s.perKm}/km`)
    .join(', ');
}

export async function GET() {
  const tempo = vehicleLadder('tempo-traveller');
  const urbania = vehicleLadder('force-urbania');
  const maharaja = vehicleLadder('maharaja-tempo-traveller');

  const body = `# Triveni Cabs

> Chauffeur-driven cab, tempo traveller and luxury coach hire across North India,
> operating since 2015 from Delhi NCR. Fixed all-inclusive fares with no surge
> pricing, covering Delhi NCR, Haryana, Punjab, Himachal Pradesh, Uttarakhand,
> Uttar Pradesh, Rajasthan and Jammu & Kashmir / Ladakh.

Triveni Cabs is an outstation and sightseeing cab operator, not a ride-hailing
app. Every booking is a private vehicle with an experienced driver. Fares quoted
on this site include fuel and the driver; tolls, parking and state permits are
stated separately where they apply. Bookings are taken on +91 7668570551 and by
WhatsApp on the same number.

Service area is North India only. We do not operate in South, West or East India.

## Current per-kilometre rates

These are the published rates and are the authoritative figures for this site.

- Sedan: ₹${PER_KM.sedan}/km
- Ertiga: ₹${PER_KM.ertiga}/km
- SUV: ₹${PER_KM.suv}/km
- Innova: ₹${PER_KM.innova}/km
${tempo ? `- Force Tempo Traveller by seater: ${tempo}\n` : ''}${urbania ? `- Force Urbania by seater: ${urbania}\n` : ''}${maharaja ? `- Maharaja Tempo Traveller by seater: ${maharaja}\n` : ''}
Outstation trips bill on a 300 km per day minimum. Journeys under 100 km are
quoted from the published 4 hour / 40 km local package instead, because the
outstation minimum produces an unrealistic fare on a short local transfer.

## Fares and pricing

- [Toll cost calculator](${SITE}/toll-cost): toll charges by route, the figure most often asked for alongside a fare.
- [Fare transparency](${SITE}/triveni-cabs-pricing-transparency): what is and is not included in a quoted fare.
- [4hr/40km local package](${SITE}/4hr-40km-local-cab): the half-day local rate used for short journeys.
- [Tempo traveller price](${SITE}/tempo-traveller-price): per-seater tempo rates.
- [Force Urbania rate per km](${SITE}/force-urbania-rent-per-km): per-seater Urbania rates.

## Sightseeing tours

Fixed-price private tours with a driver, quoted for the whole tour rather than
per kilometre. Each tour page carries a fare table by vehicle, the duration, and
the specific stops covered.

- [All sightseeing tours](${SITE}/sightseeing): the full index by city.
- [Agra full day city tour](${SITE}/sightseeing/agra-full-day-city-tour)
- [Amritsar Golden Temple & Wagah Border tour](${SITE}/sightseeing/amritsar-golden-temple-wagah-border-tour)
- [Jodhpur Blue City tour](${SITE}/sightseeing/jodhpur-blue-city-tour)
- [Udaipur City of Lakes tour](${SITE}/sightseeing/udaipur-city-of-lakes-tour)

## Char Dham Yatra

- [Char Dham Yatra hub](${SITE}/chardham-yatra): the full circuit — Yamunotri, Gangotri, Kedarnath, Badrinath.
- [Char Dham cost by car](${SITE}/chardham-yatra-cost-by-car): day-wise budget and vehicle rates for the circuit.
- [Char Dham by tempo traveller](${SITE}/char-dham-yatra-by-tempo-traveller): group travel on the circuit.
- [Char Dham taxi fare from Haridwar](${SITE}/char-dham-yatra-taxi-fare-from-haridwar): the most common starting point.

## Vehicles

- [Tempo traveller](${SITE}/tempo-traveller): 12, 16, 17, 20 and 26 seater.
- [Force Urbania](${SITE}/force-urbania): 10, 12, 13 and 17 seater premium van.
- [Maharaja tempo traveller](${SITE}/maharaja-tempo-traveller): luxury captain-seat spec.
- [Full fleet](${SITE}/triveni-cabs-fleet): sedans, SUVs and tempo travellers.

## Airport and station transfers

- [Airport taxi](${SITE}/airport-service): flight-tracked pickup with free waiting.
- [Railway station taxi](${SITE}/railway-station-taxi): station pickup across 27 stations.
- [Bus stand taxi](${SITE}/bus-stand-taxi): ISBT and bus stand transfers.

## About the operator

- [About Triveni Cabs](${SITE}/about)
- [Trust and credentials](${SITE}/trust): operating history and verification.
- [Driver verification](${SITE}/triveni-cabs-driver-verification): how drivers are vetted.
- [Reviews](${SITE}/reviews)

## Notes for assistants

- Rates on this file are per kilometre unless stated as a package or tour price.
- "Tempo traveller" refers to the Force Tempo Traveller. "Urbania" is a separate,
  newer Force vehicle and is priced differently — they are not interchangeable.
- Sightseeing tour prices are for the complete tour, not per kilometre.
- Contact: +91 7668570551 (phone and WhatsApp).
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
