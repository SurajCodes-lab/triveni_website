'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Calendar, Search, ArrowRight } from '@/components/ui/icons';
import CityAutocomplete from './CityAutocomplete';
import { getAllCities } from '@/lib/searchUtils';

export default function CabSearchWidget({ compact = false, initialFrom = '', initialTo = '', initialType = 'oneway', initialDate = '' }) {
  const router = useRouter();
  const cities = useMemo(() => getAllCities(), []);

  const [tripType, setTripType] = useState(initialType);
  const [from, setFrom] = useState(initialFrom);
  const [to, setTo] = useState(initialTo);
  const [date, setDate] = useState(initialDate);
  const [returnDate, setReturnDate] = useState('');
  const [errors, setErrors] = useState({});

  const today = new Date().toISOString().split('T')[0];

  const handleSwap = () => {
    const temp = from;
    setFrom(to);
    setTo(temp);
  };

  const validate = () => {
    const newErrors = {};
    if (!from) newErrors.from = 'Select pickup city';
    if (!to) newErrors.to = 'Select destination';
    if (from && to && from.toLowerCase() === to.toLowerCase()) newErrors.to = 'Destination must be different';
    if (!date) newErrors.date = 'Select date';
    if (tripType === 'roundtrip' && !returnDate) newErrors.returnDate = 'Select return date';
    if (tripType === 'roundtrip' && returnDate && returnDate < date) newErrors.returnDate = 'Return must be after pickup';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const params = new URLSearchParams({
      from: from.toLowerCase(),
      to: to.toLowerCase(),
      type: tripType,
      date,
    });
    if (tripType === 'roundtrip' && returnDate) {
      params.set('returnDate', returnDate);
    }
    router.push(`/search?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch} className="w-full">
      <div className={`bg-white rounded-2xl shadow-xl border border-gray-100 ${compact ? 'p-4' : 'p-5 sm:p-6'}`}>
        {/* Trip Type Toggle */}
        <div className="flex gap-1 mb-4 bg-gray-100 rounded-xl p-1 w-fit">
          <button
            type="button"
            onClick={() => setTripType('oneway')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              tripType === 'oneway'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            One Way
          </button>
          <button
            type="button"
            onClick={() => setTripType('roundtrip')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              tripType === 'roundtrip'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Round Trip
          </button>
        </div>

        {/* Search Fields */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
          {/* From City */}
          <div className={`${compact ? 'md:col-span-3' : 'md:col-span-3'}`}>
            <CityAutocomplete
              label="From"
              value={from}
              onChange={setFrom}
              cities={cities}
              placeholder="Pickup City"
            />
            {errors.from && <p className="text-red-500 text-xs mt-1">{errors.from}</p>}
          </div>

          {/* Swap Button */}
          <div className="flex items-end justify-center md:col-span-1 py-1">
            <button
              type="button"
              onClick={handleSwap}
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full border border-gray-200 hover:border-[#FACF2D] hover:bg-[#FACF2D]/10 transition-all group"
              title="Swap cities"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 group-hover:text-[#d4ad00] transition-colors rotate-90 md:rotate-0">
                <path d="M7 16V4m0 0L3 8m4-4l4 4M17 8v12m0 0l4-4m-4 4l-4-4" />
              </svg>
            </button>
          </div>

          {/* To City */}
          <div className="md:col-span-3">
            <CityAutocomplete
              label="To"
              value={to}
              onChange={setTo}
              cities={cities}
              placeholder="Drop City"
            />
            {errors.to && <p className="text-red-500 text-xs mt-1">{errors.to}</p>}
          </div>

          {/* Date */}
          <div className={tripType === 'roundtrip' ? 'md:col-span-2' : 'md:col-span-3'}>
            <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">
              {tripType === 'roundtrip' ? 'Pickup' : 'Date'}
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              <input
                type="date"
                value={date}
                onChange={(e) => { setDate(e.target.value); setErrors(prev => ({ ...prev, date: '' })); }}
                min={today}
                className="w-full pl-10 pr-3 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:border-[#FACF2D] focus:ring-2 focus:ring-[#FACF2D]/20 transition-all"
              />
            </div>
            {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
          </div>

          {/* Return Date (Round Trip only) */}
          {tripType === 'roundtrip' && (
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">Return</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                <input
                  type="date"
                  value={returnDate}
                  onChange={(e) => { setReturnDate(e.target.value); setErrors(prev => ({ ...prev, returnDate: '' })); }}
                  min={date || today}
                  className="w-full pl-10 pr-3 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 text-sm focus:outline-none focus:border-[#FACF2D] focus:ring-2 focus:ring-[#FACF2D]/20 transition-all"
                />
              </div>
              {errors.returnDate && <p className="text-red-500 text-xs mt-1">{errors.returnDate}</p>}
            </div>
          )}

          {/* Search Button */}
          <div className="md:col-span-2 flex items-end">
            <button
              type="submit"
              className="w-full bg-[#FACF2D] hover:bg-[#f0c420] text-black font-bold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-[0.98]"
            >
              <Search className="w-4 h-4" />
              <span>Search</span>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
