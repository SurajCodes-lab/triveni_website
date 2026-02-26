'use client';

import { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Phone, MapPin, Clock, Star, ArrowRight, Users, Shield, CheckCircle, Car, Bus, ChevronDown, Info } from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import CabSearchWidget from '@/components/home/CabSearchWidget';
import { searchRoute } from '@/lib/searchUtils';
import { phoneNumber } from '@/utilis/data';

const FILTERS = [
  { key: 'all', label: 'All Vehicles' },
  { key: 'car', label: 'Cars (2-7)' },
  { key: 'tempo', label: 'Tempo (12-26)' },
  { key: 'bus', label: 'Bus (22-56)' },
];

function VehicleCard({ vehicle, from, to, date, tripType }) {
  const whatsappMessage = encodeURIComponent(
    `Hi, I want to book a ${vehicle.name} from ${from} to ${to} on ${date || 'flexible date'}. Trip: ${tripType === 'roundtrip' ? 'Round Trip' : 'One Way'}. Please share the details.`
  );
  const whatsappUrl = `https://wa.me/917668570551?text=${whatsappMessage}`;
  const callUrl = `tel:${phoneNumber}`;

  return (
    <div className="bg-white rounded-xl border border-gray-100 hover:border-[#FACF2D]/40 hover:shadow-lg transition-all p-4 sm:p-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Vehicle Info */}
        <div className="flex items-start gap-3 flex-1">
          <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
            {vehicle.category === 'bus' ? (
              <Bus className="w-6 h-6 text-gray-600" />
            ) : vehicle.category === 'tempo' ? (
              <svg className="w-6 h-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="1" y="3" width="15" height="13" rx="2" />
                <path d="M16 8h4l3 3v5h-7V8z" />
                <circle cx="5.5" cy="18.5" r="2.5" />
                <circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            ) : (
              <Car className="w-6 h-6 text-gray-600" />
            )}
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold text-gray-900">{vehicle.name}</h3>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                vehicle.tag === 'Economy' ? 'bg-green-50 text-green-700' :
                vehicle.tag === 'Premium' ? 'bg-purple-50 text-purple-700' :
                vehicle.tag === 'Spacious' ? 'bg-blue-50 text-blue-700' :
                'bg-gray-50 text-gray-600'
              }`}>
                {vehicle.tag}
              </span>
            </div>
            <div className="flex items-center gap-3 mt-1.5 flex-wrap">
              {vehicle.features.map((f, i) => (
                <span key={i} className="text-xs text-gray-500 flex items-center gap-1">
                  <CheckCircle className="w-3 h-3 text-green-500" />
                  {f}
                </span>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-1">{vehicle.capacity}</p>
          </div>
        </div>

        {/* Price + Actions */}
        <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-2">
          <div className="text-right">
            <p className="text-2xl font-bold text-gray-900">{vehicle.displayPrice}</p>
            <p className="text-xs text-gray-500">{tripType === 'roundtrip' ? 'round trip' : 'one way'}</p>
          </div>
          <div className="flex gap-2">
            <a
              href={callUrl}
              className="p-2.5 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all"
              title="Call to book"
            >
              <Phone className="w-4 h-4 text-blue-600" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-2.5 rounded-xl font-medium text-sm transition-all"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Book Now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function RouteInfoSection({ result }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasInfo = result.highlights || result.stops?.length > 0 || result.bestTime || result.tip;

  if (!hasInfo) return null;

  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-[#FACF2D]" />
          <span className="font-medium text-gray-900 text-sm">Route Information & Tips</span>
        </div>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="px-4 pb-4 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-gray-50 pt-4">
          {result.highlights && (
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Route Highlights</p>
              <p className="text-sm text-gray-700">{result.highlights}</p>
            </div>
          )}
          {result.stops?.length > 0 && (
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Popular Stops</p>
              <p className="text-sm text-gray-700">{result.stops.join(', ')}</p>
            </div>
          )}
          {result.bestTime && (
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Best Time to Travel</p>
              <p className="text-sm text-gray-700">{result.bestTime}</p>
            </div>
          )}
          {result.tip && (
            <div>
              <p className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-1">Local Tip</p>
              <p className="text-sm text-gray-700">{result.tip}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function SearchResultsClient() {
  const searchParams = useSearchParams();
  const from = searchParams.get('from') || '';
  const to = searchParams.get('to') || '';
  const type = searchParams.get('type') || 'oneway';
  const date = searchParams.get('date') || '';

  const [filter, setFilter] = useState('all');
  const [showModify, setShowModify] = useState(false);

  const result = useMemo(() => {
    if (!from || !to) return null;
    return searchRoute(from, to, type);
  }, [from, to, type]);

  const filteredVehicles = useMemo(() => {
    if (!result) return [];
    if (filter === 'all') return result.vehicles;
    return result.vehicles.filter(v => v.category === filter);
  }, [result, filter]);

  const fromDisplay = result?.from || from.charAt(0).toUpperCase() + from.slice(1);
  const toDisplay = result?.to || to.charAt(0).toUpperCase() + to.slice(1);

  // Format date for display
  const dateDisplay = date ? new Date(date + 'T00:00:00').toLocaleDateString('en-IN', {
    weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
  }) : '';

  if (!from || !to) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Search Cabs</h1>
            <p className="text-gray-600">Enter your pickup and drop city to find available cabs</p>
          </div>
          <CabSearchWidget />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Compact Search Bar / Header */}
      <div className="bg-white border-b border-gray-100 pt-20 pb-4">
        <div className="max-w-5xl mx-auto px-4">
          {showModify ? (
            <div className="mb-4">
              <CabSearchWidget
                compact
                initialFrom={fromDisplay}
                initialTo={toDisplay}
                initialType={type}
                initialDate={date}
              />
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                  <MapPin className="w-4 h-4 text-[#FACF2D]" />
                  <span>{fromDisplay}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <span>{toDisplay}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <span className="w-1 h-1 rounded-full bg-gray-300" />
                  <span>{type === 'roundtrip' ? 'Round Trip' : 'One Way'}</span>
                  {dateDisplay && (
                    <>
                      <span className="w-1 h-1 rounded-full bg-gray-300" />
                      <span>{dateDisplay}</span>
                    </>
                  )}
                </div>
              </div>
              <button
                onClick={() => setShowModify(!showModify)}
                className="text-sm font-medium text-[#d4ad00] hover:text-[#b89500] transition-colors"
              >
                Modify Search
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        {result && (
          <>
            {/* Route Summary */}
            <div className="flex flex-wrap items-center gap-4 mb-4">
              {result.distance && result.distance !== 'Contact for exact distance' && (
                <div className="flex items-center gap-1.5 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span>{result.distance}</span>
                </div>
              )}
              {result.time && result.time !== 'Contact for exact time' && (
                <div className="flex items-center gap-1.5 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span>{result.time}</span>
                </div>
              )}
              {result.tags?.length > 0 && result.tags.map((tag, i) => (
                <span key={i} className="text-xs bg-[#FACF2D]/10 text-[#9a7d00] px-2.5 py-1 rounded-full font-medium">{tag}</span>
              ))}
            </div>

            {/* Estimate Notice */}
            {result.isEstimate && (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4 flex items-start gap-3">
                <Info className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-amber-800">Estimated Pricing</p>
                  <p className="text-sm text-amber-700 mt-0.5">
                    We don&apos;t have exact pricing for this route yet. Prices shown are estimates based on per-km rates.
                    Call us for an exact quote.
                  </p>
                </div>
              </div>
            )}

            {/* Filter Tabs */}
            <div className="flex gap-1 mb-4 bg-gray-100 rounded-xl p-1 overflow-x-auto">
              {FILTERS.map(f => (
                <button
                  key={f.key}
                  onClick={() => setFilter(f.key)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    filter === f.key
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {f.label}
                  {f.key !== 'all' && (
                    <span className="ml-1.5 text-xs text-gray-400">
                      ({result.vehicles.filter(v => v.category === f.key).length})
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Vehicle Cards */}
            <div className="space-y-3 mb-6">
              {filteredVehicles.length > 0 ? (
                filteredVehicles.map((vehicle, idx) => (
                  <VehicleCard
                    key={idx}
                    vehicle={vehicle}
                    from={fromDisplay}
                    to={toDisplay}
                    date={dateDisplay || date}
                    tripType={type}
                  />
                ))
              ) : (
                <div className="bg-white rounded-xl border border-gray-100 p-8 text-center">
                  <p className="text-gray-500">No vehicles in this category for this route.</p>
                  <button onClick={() => setFilter('all')} className="text-sm text-[#d4ad00] font-medium mt-2 hover:underline">
                    Show all vehicles
                  </button>
                </div>
              )}
            </div>

            {/* Route Info */}
            <RouteInfoSection result={result} />

            {/* Need Help */}
            <div className="bg-white rounded-xl border border-gray-100 p-5 mt-4">
              <h3 className="font-semibold text-gray-900 mb-3">Need Help Booking?</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${phoneNumber}`}
                  className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-medium text-sm transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call {phoneNumber}
                </a>
                <a
                  href={`https://wa.me/917668570551?text=${encodeURIComponent(`Hi, I need help booking a cab from ${fromDisplay} to ${toDisplay} on ${dateDisplay || 'flexible date'}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-xl font-medium text-sm transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
