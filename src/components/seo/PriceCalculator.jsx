'use client';

/**
 * PriceCalculator — interactive vehicle + distance calculator.
 *
 * Why: interactive widgets dramatically lift dwell time and scroll depth — both
 * are Google quality signals. Users who engage with a calculator are also far
 * more likely to convert (book).
 *
 * Pure client component, no server state. Calls back to caller (or builds a
 * WhatsApp deep link) on "Book this fare" click.
 *
 * Props:
 *  - distanceKm: number — base distance for the route (one-way)
 *  - mode: 'one-way' | 'round-trip' | 'sightseeing' — controls multiplier and tooltip text
 *  - vehicles: [{ key, label, ratePerKm, baseFare?, minKm? }]
 *  - tone: 'amber' | 'cyan' | 'emerald' | 'violet'
 *  - whatsappPhone: optional phone for build a wa.me link
 *  - originName / destinationName: optional for WhatsApp pre-fill
 */
import { useMemo, useState } from 'react';
import { groupDigits } from '@/utilis/pricing';

const TONES = {
  amber: { bg: 'from-amber-50 to-yellow-50', accent: 'amber', border: 'border-amber-200', text: 'text-amber-800', btn: 'bg-amber-700 hover:bg-amber-800' },
  cyan:  { bg: 'from-cyan-50 to-blue-50',    accent: 'cyan',   border: 'border-cyan-200',   text: 'text-cyan-800',  btn: 'bg-cyan-700 hover:bg-cyan-800'  },
  emerald: { bg: 'from-emerald-50 to-teal-50', accent: 'emerald', border: 'border-emerald-200', text: 'text-emerald-800', btn: 'bg-emerald-700 hover:bg-emerald-800' },
  violet: { bg: 'from-violet-50 to-purple-50', accent: 'violet',  border: 'border-violet-200', text: 'text-violet-800', btn: 'bg-violet-700 hover:bg-violet-800' },
};

export default function PriceCalculator({
  distanceKm = 200,
  mode = 'one-way',
  vehicles = [
    { key: 'sedan', label: 'Sedan',  ratePerKm: 11, baseFare: 0, minKm: 0 },
    { key: 'suv',   label: 'SUV (Innova/Ertiga)', ratePerKm: 14, baseFare: 0, minKm: 0 },
    { key: 'tempo12', label: '12-Seater Tempo', ratePerKm: 20, baseFare: 0, minKm: 0 },
    { key: 'tempo17', label: '17-Seater Tempo', ratePerKm: 24, baseFare: 0, minKm: 0 },
  ],
  tone = 'amber',
  whatsappPhone = '917668570551',
  originName = '',
  destinationName = '',
  className = '',
  // When true, a one-way estimate is charged at the round-trip rate (one-way
  // fare == round-trip fare). Used for Tempo Traveller & Bus, where we do not
  // discount one-way trips. Per-km rate display is unchanged.
  oneWayEqualsRoundTrip = false,
}) {
  const t = TONES[tone] || TONES.amber;
  const [selected, setSelected] = useState(vehicles[0]?.key);
  const [km, setKm] = useState(distanceKm);
  const [days, setDays] = useState(2);

  const selectedVehicle = vehicles.find((v) => v.key === selected) || vehicles[0];

  const ROUND_TRIP_MULT = 1.9;
  const multiplier = mode === 'round-trip'
    ? ROUND_TRIP_MULT
    : mode === 'sightseeing'
    ? 1.0
    : oneWayEqualsRoundTrip
    ? ROUND_TRIP_MULT // Tempo/Bus: one-way charged same as round-trip
    : 1.0;
  const kmCharged = Math.max(km * multiplier, selectedVehicle.minKm || 0);
  const driverHaltCharges = mode === 'round-trip' ? Math.max(days - 1, 0) * 300 : 0;
  const totalFare = useMemo(() => {
    const base = selectedVehicle.baseFare || 0;
    return Math.round(base + kmCharged * selectedVehicle.ratePerKm + driverHaltCharges);
  }, [selectedVehicle, kmCharged, driverHaltCharges]);

  const waMsg = encodeURIComponent(
    `Hi, I want to book ${mode === 'sightseeing' ? `a ${destinationName} tour` : `${originName ? originName + ' to ' : ''}${destinationName}`} in a ${selectedVehicle.label}. ` +
    `Distance: ${km} km${mode === 'round-trip' ? `, ${days} days` : ''}. Estimated fare: ₹${totalFare.toLocaleString('en-IN')}.`
  );

  return (
    <aside
      className={`price-calculator relative overflow-hidden rounded-3xl border-2 ${t.border} bg-gradient-to-br ${t.bg} p-6 md:p-8 ${className}`}
      aria-label="Price calculator"
    >
      <div className="flex items-baseline justify-between mb-6 flex-wrap gap-2">
        <div>
          <p className={`text-xs uppercase tracking-widest font-bold ${t.text}`}>Instant Fare Calculator</p>
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 mt-1">Estimate your fare in 10 seconds</h3>
        </div>
        <p className="text-sm text-slate-500">No signup needed</p>
      </div>

      {/* Vehicle selection */}
      <div className="mb-6">
        <label className="text-sm font-semibold text-slate-700 mb-3 block">Select vehicle</label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {vehicles.map((v) => (
            <button
              key={v.key}
              type="button"
              onClick={() => setSelected(v.key)}
              className={`px-3 py-3 rounded-xl text-sm font-semibold transition-all border-2 ${selected === v.key ? `${t.btn} text-white border-transparent shadow-md` : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'}`}
            >
              <div className="font-bold">{v.label}</div>
              <div className={`text-xs mt-0.5 ${selected === v.key ? 'text-white' : 'text-slate-600'}`}>₹{groupDigits(v.ratePerKm)}/km</div>
            </button>
          ))}
        </div>
      </div>

      {/* Distance slider */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-3">
          <label className="text-sm font-semibold text-slate-700">One-way distance</label>
          <div className="text-lg font-black text-slate-900">{km} km</div>
        </div>
        <input
          type="range"
          min={20}
          max={1500}
          step={10}
          value={km}
          onChange={(e) => setKm(Number(e.target.value))}
          className="w-full accent-amber-500"
          aria-label="Distance in kilometers"
        />
        <div className="flex justify-between text-xs text-slate-400 mt-1">
          <span>20 km</span><span>1,500 km</span>
        </div>
      </div>

      {/* Days for round-trip */}
      {mode === 'round-trip' && (
        <div className="mb-6">
          <div className="flex justify-between items-center mb-3">
            <label className="text-sm font-semibold text-slate-700">Trip duration</label>
            <div className="text-lg font-black text-slate-900">{days} {days === 1 ? 'day' : 'days'}</div>
          </div>
          <input
            type="range"
            min={1}
            max={14}
            step={1}
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className="w-full accent-amber-500"
            aria-label="Trip duration in days"
          />
          <p className="text-xs text-slate-500 mt-2">Includes ₹300/night driver halt allowance for nights after Day 1.</p>
        </div>
      )}

      {/* Result */}
      <div className={`bg-white rounded-2xl p-5 md:p-6 border ${t.border} shadow-sm`}>
        <div className="flex justify-between items-start mb-3">
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500 font-bold">Estimated fare</p>
            <div className="text-4xl md:text-5xl font-black text-slate-900 mt-1">
              ₹{totalFare.toLocaleString('en-IN')}
            </div>
            <p className={`text-xs ${t.text} mt-1`}>
              {selectedVehicle.label} · {oneWayEqualsRoundTrip && mode !== 'round-trip'
                ? `${Math.round(km)} km (billed both ways)`
                : `${Math.round(kmCharged)} km charged`}
              {mode === 'round-trip' && days > 1 && ` · +₹${groupDigits(driverHaltCharges)} driver halt`}
            </p>
          </div>
        </div>
        <p className="text-xs text-slate-600 mb-4 leading-relaxed">
          Includes fuel, driver allowance, AC, tolls included for FASTag routes. State tax & parking extra at actual.
          Inter-state permit may apply for Himachal / Uttarakhand / J&amp;K routes.
        </p>
        <a
          href={`https://wa.me/${whatsappPhone}?text=${waMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full text-center text-white font-bold py-3 px-4 rounded-xl ${t.btn} transition-all`}
        >
          Confirm this fare on WhatsApp →
        </a>
      </div>
    </aside>
  );
}
