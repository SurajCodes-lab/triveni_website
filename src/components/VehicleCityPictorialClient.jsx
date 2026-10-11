'use client';

// VehicleCityPictorialClient — the uplifted vehicle city page.
//
// Replaces VehicleCityClient for /force-urbania/{city} and
// /maharaja-tempo-traveller/{city}. Same data contract, so the factory swap is
// a one-line change; what differs is that this template is image-led all the
// way down instead of gradient panels with a single hero photo.
//
// Every photograph is resolved SERVER-SIDE and passed in. Importing
// destinationImage.js here would drag the 265 KB tempoTravellerData module into
// the browser bundle, which is exactly the mistake the tempo route page's
// comment warns about.

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import {
  PictorialHero, QuickAnswer, SectionHead, FareTable, PhotoCards, StatBand,
  TrustStrip, FaqAccordion, CtaBand, VehicleSwitch, Eyebrow, Icon, accentFor,
} from '@/components/pictorial/PictorialKit';
import { groupDigits } from '@/utilis/pricing';

export default function VehicleCityPictorialClient({ data }) {
  const [openFaq, setOpenFaq] = useState(0);

  const {
    vehicle: v,
    cityData,
    routes = [],
    fleet = [],
    cityFaqs = [],
    topDestinations = [],
    allCities = [],
    otherVehicleTypes = [],
  } = data;

  const accent = accentFor(v.slug);
  const waText = `Hi, I want to book a ${v.type} in ${cityData.name}. Please share availability and fare.`;
  const trackKey = `city_${v.slug}_${cityData.slug}`;

  return (
    <div className="bg-white text-slate-900">
      <SetStickyCta
        price={`From ₹${groupDigits(v.lowPrice)}/km`}
        label={`${v.heroLabel} · ${cityData.name}`}
        whatsappText={waText}
      />

      <PictorialHero
        image={cityData.image}
        alt={`${v.type} on rent in ${cityData.name} — ${cityData.landmark}`}
        accent={accent}
        crumbs={[
          { name: 'Home', href: '/' },
          { name: v.heroLabel, href: v.hubHref },
          { name: cityData.name },
        ]}
        badge={`${cityData.region} · ${routes.length}+ routes`}
        h1={`${v.heroLabel} in ${cityData.name}`}
        tagline={cityData.tagline}
        lead={`${cityData.description} Book a ${v.capacity.toLowerCase()} air-conditioned ${v.type.toLowerCase()} with an experienced driver — fuel included, transparent per-kilometre pricing, and the same vehicle with you for the whole trip.`}
        pills={[
          { label: `From ₹${groupDigits(v.lowPrice)}/km`, iconName: 'Gauge' },
          { label: v.capacity, iconName: 'Users' },
          { label: 'Fully AC fleet', iconName: 'Snowflake' },
          { label: 'Driver & fuel included', iconName: 'BadgeCheck' },
          { label: '4.9★ rated', iconName: 'Star' },
        ]}
        waText={waText}
        trackKey={trackKey}
      />

      <QuickAnswer accent={accent}>
        A {v.type.toLowerCase()} in {cityData.name} costs{' '}
        <strong className="text-slate-900">₹{groupDigits(v.lowPrice)} to ₹{groupDigits(v.highPrice)} per kilometre</strong>{' '}
        depending on the seater, or <strong className="text-slate-900">{v.localRate}</strong> for a local
        day package covering {v.localKm}. Fuel and an experienced driver are included; tolls, parking and
        state permits are billed at actuals. We run {routes.length}+ outstation routes from {cityData.name}
        {cityData.popularDestinations?.length ? `, most often to ${cityData.popularDestinations.slice(0, 3).join(', ')}` : ''}.
      </QuickAnswer>

      {/* ── Why this city ── */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-[1.15fr_1fr] md:items-center md:gap-12">
          <div>
            <SectionHead
              eyebrow="Local knowledge"
              title={`Group travel from ${cityData.name}`}
              accent={accent}
            />
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              {cityData.description} For a group, the practical advantage of one {v.type.toLowerCase()} over
              several cars is that everybody arrives together, the luggage travels in one place, and there is
              a single fare rather than four to reconcile at the end.
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
              The same vehicle and driver stay with you for the whole itinerary, including sightseeing once
              you arrive. On a hill route that matters more than it sounds — arranging local transport at the
              destination at short notice is both dearer and less reliable.
            </p>
            <dl className="mt-7 grid grid-cols-2 gap-4">
              {[
                { label: 'Landmark', value: cityData.landmark, icon: 'Landmark' },
                { label: 'State', value: cityData.state, icon: 'Building2' },
                { label: 'Fleet range', value: v.capacity, icon: 'Users' },
                { label: 'Local package', value: v.localKm, icon: 'Clock' },
              ].map((f) => (
                <div key={f.label} className="rounded-xl border border-slate-200 bg-slate-50 p-3.5">
                  <dt className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                    <Icon name={f.icon} className="h-3.5 w-3.5" />
                    {f.label}
                  </dt>
                  <dd className="mt-1 text-sm font-bold text-slate-900">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
            <Image
              src={fleet[0]?.image || cityData.image}
              alt={`${v.type} interior`}
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <FareTable
        fleet={fleet}
        accent={accent}
        title={`${v.heroLabel} fares in ${cityData.name}`}
        sub="Published per-kilometre outstation rates and the local day package for each seater. Every fare includes fuel and a professional driver. Tolls, parking and state permits are charged at actuals and shown separately — there is no surge pricing and no hidden component."
      />

      {/* ── Top routes from this city ── */}
      {topDestinations.length > 0 && (
        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
            <SectionHead
              eyebrow="Popular trips"
              title={`Where groups go from ${cityData.name}`}
              sub={`${routes.length} routes run from ${cityData.name}. These are the ones booked most often — each has its own page with distance, drive time and a full fare breakdown.`}
              accent={accent}
            />
            <PhotoCards
              accent={accent}
              items={topDestinations.slice(0, 9).map((d) => ({
                title: d.name,
                meta: d.type,
                img: d.img,
                href: `${v.hubHref}/${d.slug}`,
              }))}
            />
            {routes.length > 9 && (
              <p className="mt-6 text-sm text-slate-600">
                Plus {routes.length - 9} more routes from {cityData.name} — call us for anything not listed.
              </p>
            )}
          </div>
        </section>
      )}

      {/* ── Fleet gallery ── */}
      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <SectionHead
          eyebrow="The fleet"
          title={`Which ${v.heroLabel.toLowerCase()} suits your group`}
          sub="Seat count is rarely what decides the vehicle — luggage is. A group at the top of a seater's range on a week-long trip will fill the boot and start using the back row, so tell us passengers and large bags separately and we will size it properly."
          accent={accent}
        />
        <PhotoCards
          accent={accent}
          cols={3}
          items={fleet.map((f) => ({
            title: f.name,
            meta: `${f.capacity} · ${f.outstationRate}`,
            img: f.image,
            body: f.blurb,
          }))}
        />
      </section>

      {/* ── Editorial gallery: the fleet in context, plus where it goes ── */}
      {(fleet.length > 0 || topDestinations.length > 0) && (
        <section className="border-y border-slate-200 bg-slate-900 text-white">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
            <SectionHead
              eyebrow="In pictures"
              title="What you are actually booking"
              sub={`The vehicles we run in ${cityData.name} and the places they most often go.`}
              accent={accent}
              onDark
            />
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ...fleet.map((f) => ({ img: f.image, title: f.name, caption: f.blurb || f.capacity })),
                ...topDestinations.slice(0, 8).map((d) => ({
                  img: d.img, title: d.name, caption: `${d.type} · from ${cityData.name}`,
                })),
              ].slice(0, 12).map((g, i) => (
                <figure key={`${g.title}-${i}`} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={g.img}
                      alt={g.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <figcaption className="p-4">
                    <p className="text-sm font-bold" style={{ color: accent }}>{g.title}</p>
                    <p className="mt-1 text-[13px] leading-relaxed text-white/70">{g.caption}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Occasions ── */}
      <StatBand
        eyebrow="What groups book us for"
        title={`${v.heroLabel} hire in ${cityData.name}, by occasion`}
        sub="The same vehicle serves very different days. These are the bookings we take most often here."
        accent={accent}
        items={[
          { iconName: 'Heart', label: 'Weddings & baraat', value: 'Guest shuttles', sub: 'hotel ↔ venue loops' },
          { iconName: 'Briefcase', label: 'Corporate & offsite', value: 'GST billing', sub: 'monthly contracts' },
          { iconName: 'Plane', label: 'Airport transfers', value: 'Flight tracked', sub: '60 min free wait' },
          { iconName: 'Users', label: 'Family holidays', value: 'One vehicle', sub: 'everyone together' },
          { iconName: 'GraduationCap', label: 'School & college', value: 'Verified drivers', sub: 'seat belts all rows' },
          { iconName: 'Landmark', label: 'Pilgrimage groups', value: 'Route-known drivers', sub: 'halt points planned' },
        ]}
      />

      <TrustStrip accent={accent} />

      <FaqAccordion
        faqs={cityFaqs}
        accent={accent}
        title={`${v.heroLabel} in ${cityData.name} — FAQs`}
        open={openFaq}
        setOpen={setOpenFaq}
      />

      {/* ── Other cities ── */}
      {allCities.length > 1 && (
        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
            <SectionHead
              eyebrow="Other cities"
              title={`${v.heroLabel} elsewhere in North India`}
              accent={accent}
            />
            <PhotoCards
              accent={accent}
              cols={4}
              items={allCities
                .filter((c) => c.slug !== cityData.slug)
                .slice(0, 16)
                .map((c) => ({
                  title: `${v.heroLabel} in ${c.name}`,
                  meta: c.routeCount ? `${c.routeCount} routes` : c.region,
                  img: c.image,
                  href: `${v.hubHref}/${c.slug}`,
                }))}
            />
          </div>
        </section>
      )}

      <VehicleSwitch others={otherVehicleTypes} accent={accent} suffix={cityData.slug} />

      <CtaBand
        image={cityData.image}
        accent={accent}
        title={`Book a ${v.heroLabel.toLowerCase()} in ${cityData.name}`}
        body="Tell us the date, the pickup point and how many are travelling. You get a written quote with the fare broken down, and a small advance confirms the vehicle — the balance is payable when the trip is done."
        waText={waText}
        trackKey={trackKey}
        bullets={[
          `Pickup anywhere in ${cityData.name}`,
          'Written quote before you commit',
          'Same driver for the whole trip',
          'GST invoice for corporate bookings',
        ]}
      >
        <QuickEnquiryForm fromCity={cityData.name} pageType="city" />
      </CtaBand>
    </div>
  );
}
