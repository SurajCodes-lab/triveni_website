'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { MapPin, ChevronDown } from '@/components/ui/icons';

const POPULAR_CITIES = ['Delhi', 'Agra', 'Jaipur', 'Chandigarh', 'Shimla', 'Manali', 'Haridwar', 'Amritsar', 'Rishikesh', 'Dehradun', 'Varanasi', 'Udaipur'];

export default function CityAutocomplete({ label, value, onChange, cities = [], placeholder = 'Select City', icon }) {
  const [query, setQuery] = useState(value || '');
  const [isOpen, setIsOpen] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const inputRef = useRef(null);
  const dropdownRef = useRef(null);
  const containerRef = useRef(null);

  // When searching: filter all cities. When empty: show popular first, then all others
  const filtered = query.trim()
    ? cities.filter(c => c.toLowerCase().includes(query.toLowerCase().trim()))
    : [
        ...POPULAR_CITIES.filter(c => cities.includes(c)),
        ...cities.filter(c => !POPULAR_CITIES.includes(c)),
      ];

  // Close dropdown on outside click
  useEffect(() => {
    function handleClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Scroll highlighted item into view
  useEffect(() => {
    if (highlightIndex >= 0 && dropdownRef.current) {
      const items = dropdownRef.current.querySelectorAll('[data-option]');
      items[highlightIndex]?.scrollIntoView({ block: 'nearest' });
    }
  }, [highlightIndex]);

  const handleSelect = useCallback((city) => {
    setQuery(city);
    onChange(city);
    setIsOpen(false);
    setHighlightIndex(-1);
  }, [onChange]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setIsOpen(true);
    setHighlightIndex(-1);
    if (!e.target.value.trim()) {
      onChange('');
    }
  };

  const handleKeyDown = (e) => {
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'Enter') {
        setIsOpen(true);
        e.preventDefault();
      }
      return;
    }

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightIndex(prev => (prev < filtered.length - 1 ? prev + 1 : 0));
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightIndex(prev => (prev > 0 ? prev - 1 : filtered.length - 1));
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightIndex >= 0 && filtered[highlightIndex]) {
          handleSelect(filtered[highlightIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setHighlightIndex(-1);
        break;
    }
  };

  const handleFocus = () => {
    setIsOpen(true);
  };

  return (
    <div ref={containerRef} className="relative w-full">
      {label && (
        <label className="block text-xs font-medium text-gray-500 mb-1 uppercase tracking-wider">{label}</label>
      )}
      <div className="relative">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          {icon || <MapPin className="w-4 h-4" />}
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={handleFocus}
          placeholder={placeholder}
          className="w-full pl-10 pr-8 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:border-[#FACF2D] focus:ring-2 focus:ring-[#FACF2D]/20 transition-all"
          autoComplete="off"
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        />
        <ChevronDown className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </div>

      {isOpen && filtered.length > 0 && (
        <div
          ref={dropdownRef}
          className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-xl max-h-72 overflow-y-auto"
          role="listbox"
        >
          {!query.trim() && (
            <div className="px-3 py-2 text-[10px] font-bold text-[#d4ad00] uppercase tracking-widest">
              Popular Cities
            </div>
          )}
          {filtered.map((city, idx) => {
            const popularCount = POPULAR_CITIES.filter(c => cities.includes(c)).length;
            const showDivider = !query.trim() && idx === popularCount;
            return (
              <div key={city}>
                {showDivider && (
                  <div className="px-3 pt-2 pb-1 text-[10px] font-bold text-gray-400 uppercase tracking-widest border-t border-gray-100 mt-1">
                    All Cities
                  </div>
                )}
                <button
                  data-option
                  type="button"
                  role="option"
                  aria-selected={highlightIndex === idx}
                  className={`w-full text-left px-3 py-2.5 text-sm flex items-center gap-2 transition-colors ${
                    highlightIndex === idx
                      ? 'bg-[#FACF2D]/10 text-gray-900'
                      : 'text-gray-700 hover:bg-gray-50'
                  } ${value === city ? 'font-semibold text-[#d4ad00]' : ''}`}
                  onClick={() => handleSelect(city)}
                  onMouseEnter={() => setHighlightIndex(idx)}
                >
                  <MapPin className={`w-3.5 h-3.5 flex-shrink-0 ${highlightIndex === idx ? 'text-[#d4ad00]' : 'text-gray-400'}`} />
                  {city}
                </button>
              </div>
            );
          })}
        </div>
      )}

      {isOpen && query.trim() && filtered.length === 0 && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg p-4 text-center">
          <p className="text-sm text-gray-500">No cities found for &quot;{query}&quot;</p>
          <p className="text-xs text-gray-400 mt-1">Try a different city name</p>
        </div>
      )}
    </div>
  );
}
