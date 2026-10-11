'use client';

// VehicleRoutePictorialClient — the uplifted vehicle route page.
//
// Replaces VehicleRouteClient for the ~470 /force-urbania/{origin}-to-{dest}
// and /maharaja-tempo-traveller/{origin}-to-{dest} pages. Same data contract
// plus three server-resolved extras (heroImage, per-card images and the
// routeDescription), because resolving those in the browser would pull the
// 265 KB tempoTravellerData module into the client bundle.
//
// The spine of a route page is the journey itself: how far, how long, what the
// road is like and where you stop. That is what a group planning a trip wants
// and it is what the old template buried under fleet cards.

import { useState } from 'react';
import Image from 'next/image';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import {
  PictorialHero, QuickAnswer, SectionHead, FareTable, PhotoCards, StatBand,
  TrustStrip, FaqAccordion, CtaBand, VehicleSwitch, Eyebrow, Icon, accentFor, TripFareTable, RouteStepper,
} from '@/components/pictorial/PictorialKit';
import { groupDigits } from '@/utilis/pricing';

export default function VehicleRoutePictorialClient({ data }) {
  const [openFaq, setOpenFaq] = useState(0);

  const {
    vehicle: v,
    routeSlug,
    origin,
    destination,
    routeData = {},
    routeDescription = null,
    heroImage,
    fleet = [],
    relatedRoutes = [],
    sightseeing = [],
    faqData = [],
    otherVehicleTypes = [],
  } = data;

  const accent = accentFor(v.slug);
  const waText = `Hi, I want to book a ${v.type} from ${origin} to ${destination}. Please share availability and fare.`;
  const trackKey = `route_${v.slug}_${routeSlug}`;
  const distance = routeData.distance || routeDescription?.distance;
  const duration = routeData.duration || routeDescription?.travelTime;

  const journey = [
    distance && { iconName: 'Milestone', label: 'Distance', value: distance, sub: 'one way' },
    duration && { iconName: 'Clock', label: 'Drive time', value: duration, sub: 'normal traffic' },
    { iconName: 'Gauge', label: 'Fare from', value: `₹${groupDigits(v.lowPrice)}/km`, sub: 'fuel + driver included' },
    { iconName: 'Users', label: 'Capacity', value: v.capacity, sub: 'per vehicle' },
    routeDescription?.bestSeason && { iconName: 'Sparkles', label: 'Best season', value: routeDescription.bestSeason, sub: '' },
    { iconName: 'Route', label: 'Trip type', value: 'One-way or round', sub: 'multi-day available' },
  ].filter(Boolean);

  return (
    <div className="bg-white text-slate-900">
      <SetStickyCta
        price={`From ₹${groupDigits(v.lowPrice)}/km`}
        label={`${origin} → ${destination}`}
        whatsappText={waText}
      />

      <PictorialHero
        image={heroImage}
        alt={`${v.type} from ${origin} to ${destination}`}
        accent={accent}
        crumbs={[
          { name: 'Home', href: '/' },
          { name: v.heroLabel, href: v.hubHref },
          { name: `${origin} to ${destination}` },
        ]}
        badge={distance ? `${distance}${duration ? ` · ${duration}` : ''}` : v.heroLabel}
        badgeIcon="Milestone"
        h1={`${origin} to ${destination} by ${v.heroLabel}`}
        tagline={`${v.capacity} · air-conditioned · driver and fuel included`}
        lead={
          routeDescription?.highlights
            ? routeDescription.highlights
            : `Book a ${v.capacity.toLowerCase()} AC ${v.type.toLowerCase()} for the ${origin} to ${destination} journey${distance ? ` — about ${distance}` : ''}${duration ? ` and roughly ${duration}` : ''}. The same vehicle and driver stay with you for the whole trip, including sightseeing at the destination.`
        }
        pills={[
          { label: `From ₹${groupDigits(v.lowPrice)}/km`, iconName: 'Gauge' },
          distance && { label: distance, iconName: 'Milestone' },
          duration && { label: duration, iconName: 'Clock' },
          { label: 'Fully AC', iconName: 'Snowflake' },
        ].filter(Boolean)}
        waText={waText}
        trackKey={trackKey}
      />

      <QuickAnswer accent={accent}>
        A {v.type.toLowerCase()} from {origin} to {destination} costs{' '}
        <strong className="text-slate-900">₹{groupDigits(v.lowPrice)} to ₹{groupDigits(v.highPrice)} per kilometre</strong>{' '}
        depending on the seater{distance ? `, over roughly ${distance}` : ''}
        {duration ? ` and about ${duration} of driving` : ''}. Fuel and an experienced driver are included;
        tolls, parking and state permits are billed at actuals. A one-way drop is charged at the same per-km
        rate as a round trip, because the vehicle still returns to base empty afterwards.
      </QuickAnswer>

      <StatBand
        eyebrow="The journey"
        title={`${origin} to ${destination} at a glance`}
        sub="Drive times are realistic door-to-door estimates in normal traffic rather than best-case figures. Hill sections and holiday weekends change them, and we plan departures around that instead of discovering it on the day."
        accent={accent}
        items={journey}
      />

      <TripFareTable
        fleet={fleet}
        distance={distance}
        accent={accent}
        origin={origin}
        destination={destination}
        vehicleLabel={v.heroLabel}
      />

      {/* ── Route stops timeline ── */}
      {Array.isArray(routeDescription?.stops) && routeDescription.stops.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <SectionHead
            eyebrow="On the way"
            title={`Where the vehicle stops between ${origin} and ${destination}`}
            sub="Meal and rest halts are planned into the drive rather than left to chance. Tell the driver if you would rather push on or stop longer — the itinerary is yours."
            accent={accent}
          />
          <RouteStepper origin={origin} destination={destination} stops={routeDescription.stops} accent={accent} />
          {routeDescription.roadConditions && (
            <div className="mt-7 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <Eyebrow accent={accent}>Road conditions</Eyebrow>
              <p className="mt-2 text-[14.5px] leading-relaxed text-slate-700">{routeDescription.roadConditions}</p>
            </div>
          )}
        </section>
      )}

      {/* ── The fleet, in photographs ── */}
      {fleet.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pt-12 md:pt-16">
          <SectionHead
            eyebrow="The fleet"
            title={`Which ${v.heroLabel.toLowerCase()} seater suits your group for ${destination}`}
            sub={`Every seater below is air-conditioned, with reclining seats and the luggage space listed. The same vehicle and driver stay with you from ${origin} to ${destination} and for the sightseeing there.`}
            accent={accent}
          />
          <PhotoCards
            accent={accent}
            cols={fleet.length === 2 ? 2 : fleet.length === 4 ? 4 : 3}
            items={fleet.map((f) => ({
              title: f.name,
              meta: `${f.capacity}${f.luggage ? ` · ${f.luggage}` : ''}`,
              img: f.image,
              body: `${f.blurb ? `${f.blurb}. ` : ''}${f.outstationRate} outstation, fuel and driver included.`,
            }))}
          />
        </section>
      )}

      <FareTable
        fleet={fleet}
        accent={accent}
        title={`${origin} to ${destination} — fares by seater`}
        sub="Per-kilometre outstation rates apply to this route. Round trips are billed on the total distance covered; a one-way drop is the same rate because the vehicle returns empty. Tolls, parking and state permits are itemised separately on the invoice."
      />

      {/* ── Sightseeing at the destination ── */}
      {sightseeing.length > 0 && (
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
            <SectionHead
              eyebrow={`In ${destination}`}
              title="What the vehicle covers once you arrive"
              sub={`The ${v.type.toLowerCase()} stays with you at the destination, so local sightseeing is included in the same booking rather than arranged separately on arrival.`}
              accent={accent}
            />
            <PhotoCards
              accent={accent}
              items={sightseeing.slice(0, 6).map((s) => ({
                title: s.title,
                meta: s.meta,
                img: s.img,
                body: s.body,
              }))}
            />
          </div>
        </section>
      )}

      {/* ── Related routes ── */}
      {relatedRoutes.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <SectionHead
            eyebrow="Other routes"
            title={`More trips from ${origin}`}
            accent={accent}
          />
          <PhotoCards
            accent={accent}
            items={relatedRoutes.slice(0, 6).map((r) => ({
              title: `${origin} to ${r.name}`,
              meta: r.type,
              img: r.img,
              href: `${v.hubHref}/${r.slug}`,
            }))}
          />
        </section>
      )}

      <TrustStrip accent={accent} />

      <FaqAccordion
        faqs={faqData}
        accent={accent}
        title={`${origin} to ${destination} — FAQs`}
        open={openFaq}
        setOpen={setOpenFaq}
      />

      <VehicleSwitch others={otherVehicleTypes} accent={accent} suffix={routeSlug} />

      <CtaBand
        image={heroImage}
        accent={accent}
        title={`Book ${origin} to ${destination}`}
        body="Send us the travel date, how many are going and any stops you want on the way. You get a written quote with the fare broken down, and a small advance confirms the vehicle."
        waText={waText}
        trackKey={trackKey}
        bullets={[
          `Pickup anywhere in ${origin}`,
          'Same vehicle and driver for the whole trip',
          'Sightseeing at the destination included',
          'Written quote before you commit',
        ]}
      >
        <QuickEnquiryForm fromCity={origin} toCity={destination} pageType="route" />
      </CtaBand>
    </div>
  );
}
