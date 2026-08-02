'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CITY_OPTS = [
  { key: 'agra',   label: 'Agra',          sub: 'Taj Mahal & Fort' },
  { key: 'delhi',  label: 'Delhi',         sub: 'Old & New Delhi' },
  { key: 'jaipur', label: 'Jaipur',        sub: 'Pink City' },
  { key: 'all',    label: 'All three',     sub: 'Golden Triangle' },
];

const DAYS_OPTS = [
  { key: '1',  label: '1 day',     sub: 'Same-day return' },
  { key: '2',  label: '2-3 days',  sub: 'Weekend trip' },
  { key: '4',  label: '4+ days',   sub: 'Full circuit' },
];

const GROUP_OPTS = [
  { key: 's', label: '1-4 pax',  sub: 'Sedan / SUV' },
  { key: 'm', label: '5-10 pax', sub: 'Tempo / Innova' },
  { key: 'l', label: '11+ pax',  sub: 'Mini-bus / Volvo' },
];

const CLUSTERS = {
  A1: { title: 'Agra Cluster',                hash: '#cluster-A1', img: '/images/sightseeing/Agra/Taj_mahal.jpg',                                 line: '20 vehicle & itinerary combinations' },
  A2: { title: 'Same-Day Taj from Delhi',     hash: '#cluster-A2', img: '/images/sightseeing/Agra/agra_fort.jpg',                                 line: '6 round-trip options · zero overnight' },
  A3: { title: 'Delhi Cluster',               hash: '#cluster-A3', img: '/images/sightseeing/Delhi/red_fort.jpg',                                 line: '7 city, heritage & temple tours' },
  A4: { title: 'Jaipur Cluster',              hash: '#cluster-A4', img: '/images/sightseeing/Jaipur/amber_fort.jpg',                              line: '6 Pink City & fort tours' },
  A5: { title: 'Golden Triangle',             hash: '#cluster-A5', img: '/images/sightseeing/Golden_Triangle/Golden_triangle_hero_section.jpg',   line: 'The full 5-day Delhi → Agra → Jaipur classic' },
};

function recommend({ city, days, group }) {
  // Primary cluster from city + days
  let key = 'A5';
  if (city === 'all' || days === '4') key = 'A5';
  else if (city === 'agra') key = days === '1' ? 'A2' : 'A1';
  else if (city === 'delhi') key = 'A3';
  else if (city === 'jaipur') key = 'A4';

  // Vehicle hint from group size
  const vehicleHint = group === 'l' ? '17-seater Maharaja or 45-seater Volvo'
                    : group === 'm' ? '12-seater Force Urbania or Innova'
                    : 'Swift Dzire, Ertiga or Innova Crysta';
  return { ...CLUSTERS[key], vehicleHint };
}

export default function FindYourFit() {
  const [city, setCity]   = useState(null);
  const [days, setDays]   = useState(null);
  const [group, setGroup] = useState(null);
  const result = (city && days && group) ? recommend({ city, days, group }) : null;

  return (
    <div className="relative overflow-hidden rounded-[1.6rem] border border-amber-400/20 bg-gradient-to-br from-[#1a1408]/80 via-slate-950 to-slate-900 p-7 md:p-10 shadow-[0_30px_80px_-25px_rgba(251,191,36,0.25)]">
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-amber-400/15 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative">
        <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-amber-300/80">Not sure which to pick?</p>
        <h2 className="mt-2 text-3xl md:text-4xl font-black tracking-tight leading-[1.05]">
          <span className="bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent">
            Find your fit in 30 seconds.
          </span>
        </h2>
        <p className="mt-2 font-serif italic text-slate-400 text-base">Three taps. One tailored cluster.</p>

        {/* Step 1 — City */}
        <Step
          number={1}
          label="Which city interests you most?"
          options={CITY_OPTS}
          value={city}
          onChange={setCity}
        />

        {/* Step 2 — Days */}
        {city && (
          <Step
            number={2}
            label="How many days do you have?"
            options={DAYS_OPTS}
            value={days}
            onChange={setDays}
          />
        )}

        {/* Step 3 — Group */}
        {city && days && (
          <Step
            number={3}
            label="How big is your group?"
            options={GROUP_OPTS}
            value={group}
            onChange={setGroup}
          />
        )}

        {/* Result */}
        {result && (
          <div className="mt-8 relative overflow-hidden rounded-2xl border border-amber-400/40 bg-gradient-to-br from-amber-500/[0.08] via-slate-900/60 to-slate-900/40 p-1">
            <div className="grid sm:grid-cols-[180px_1fr] gap-0">
              <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-[160px] rounded-xl overflow-hidden">
                <Image src={result.img} alt={result.title} fill sizes="180px" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a14]/40" />
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-300">★ We recommend</p>
                <p className="mt-1 text-2xl md:text-3xl font-black bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent leading-tight">
                  {result.title}
                </p>
                <p className="mt-1.5 font-serif italic text-amber-200/80 text-sm">{result.line}</p>
                <p className="mt-3 text-xs text-slate-400">
                  <span className="text-amber-200/90 font-semibold">Suggested vehicle:</span> {result.vehicleHint}
                </p>
                <a
                  href={result.hash}
                  className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-b from-amber-300 to-yellow-500 px-5 py-3 font-extrabold text-[#1a1408] shadow-[0_14px_30px_-10px_rgba(251,191,36,0.6)] hover:shadow-[0_18px_40px_-10px_rgba(251,191,36,0.8)] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1408]"
                >
                  View these tours
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function Step({ number, label, options, value, onChange }) {
  return (
    <div className="mt-7">
      <div className="flex items-center gap-3 mb-3">
        <span className="w-7 h-7 rounded-full border border-amber-400/40 bg-amber-400/15 flex items-center justify-center text-xs font-black text-amber-200">{number}</span>
        <p className="text-sm font-bold text-amber-100">{label}</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
        {options.map(opt => {
          const active = value === opt.key;
          return (
            <button
              key={opt.key}
              type="button"
              onClick={() => onChange(opt.key)}
              className={`text-left rounded-xl border px-4 py-3 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1408] ${
                active
                  ? 'border-amber-400/70 bg-amber-400/15 shadow-[0_0_0_2px_rgba(251,191,36,0.2)_inset]'
                  : 'border-amber-400/15 bg-slate-900/40 hover:border-amber-400/40 hover:bg-slate-900/60'
              }`}
            >
              <p className={`text-sm font-black leading-tight ${active ? 'text-amber-100' : 'text-white'}`}>{opt.label}</p>
              <p className={`text-[11px] mt-0.5 ${active ? 'text-amber-200/80' : 'text-slate-400'}`}>{opt.sub}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
