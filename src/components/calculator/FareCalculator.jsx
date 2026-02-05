'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
// Centralized icon imports for better bundle optimization
import {
  MapPin,
  Navigation,
  Car,
  Users,
  Calculator,
  Phone,
  MessageCircle,
  Info,
  CheckCircle
} from '@/components/ui/icons';

/**
 * Fare Calculator - Interactive tool for instant fare estimates
 * Mobile/Tablet friendly with correct Triveni Cabs pricing
 */

// Popular cities for dropdown
const popularCities = [
  'Delhi', 'Agra', 'Jaipur', 'Chandigarh', 'Manali', 'Shimla',
  'Haridwar', 'Rishikesh', 'Amritsar', 'Dehradun', 'Mussoorie',
  'Nainital', 'Jim Corbett', 'Varanasi', 'Lucknow', 'Mathura',
  'Vrindavan', 'Udaipur', 'Jodhpur', 'Ajmer', 'Pushkar',
  'Mumbai', 'Pune', 'Lonavala', 'Mahabaleshwar', 'Shirdi',
  'Bangalore', 'Mysore', 'Ooty', 'Coorg', 'Chennai', 'Pondicherry'
];

// Distance matrix (approximate km between cities)
const distanceMatrix = {
  'Delhi-Agra': 230, 'Delhi-Jaipur': 280, 'Delhi-Chandigarh': 250,
  'Delhi-Manali': 540, 'Delhi-Shimla': 350, 'Delhi-Haridwar': 230,
  'Delhi-Rishikesh': 250, 'Delhi-Amritsar': 450, 'Delhi-Dehradun': 280,
  'Delhi-Mussoorie': 290, 'Delhi-Nainital': 300, 'Delhi-Varanasi': 820,
  'Delhi-Lucknow': 550, 'Delhi-Mathura': 180, 'Delhi-Udaipur': 660,
  'Delhi-Jim Corbett': 260, 'Delhi-Vrindavan': 180, 'Delhi-Ajmer': 400,
  'Agra-Jaipur': 240, 'Agra-Mathura': 60, 'Agra-Varanasi': 600,
  'Agra-Vrindavan': 70, 'Agra-Lucknow': 330,
  'Jaipur-Udaipur': 400, 'Jaipur-Jodhpur': 340, 'Jaipur-Ajmer': 135,
  'Jaipur-Pushkar': 150,
  'Chandigarh-Manali': 310, 'Chandigarh-Shimla': 115, 'Chandigarh-Amritsar': 230,
  'Chandigarh-Dehradun': 170,
  'Mumbai-Pune': 150, 'Mumbai-Lonavala': 85, 'Mumbai-Shirdi': 250,
  'Mumbai-Mahabaleshwar': 270, 'Pune-Lonavala': 65, 'Pune-Shirdi': 190,
  'Pune-Mahabaleshwar': 120,
  'Bangalore-Mysore': 150, 'Bangalore-Ooty': 280, 'Bangalore-Coorg': 265,
  'Chennai-Pondicherry': 170, 'Chennai-Bangalore': 350,
  'Haridwar-Rishikesh': 25, 'Dehradun-Mussoorie': 35,
  'Dehradun-Rishikesh': 45, 'Dehradun-Haridwar': 55,
};

// Vehicle types with ACTUAL Triveni Cabs pricing
const vehicleTypes = [
  {
    id: 'sedan',
    name: 'Sedan',
    description: 'Swift Dzire, Etios, Honda Amaze',
    seats: 4,
    pricePerKm: 11,
    minKmPerDay: 250,
    driverAllowance: 300,
  },
  {
    id: 'sedanPremium',
    name: 'Sedan Premium',
    description: 'Honda City, Ciaz',
    seats: 4,
    pricePerKm: 14,
    minKmPerDay: 250,
    driverAllowance: 350,
  },
  {
    id: 'suv',
    name: 'SUV / Ertiga',
    description: 'Maruti Ertiga, Innova',
    seats: 6,
    pricePerKm: 15,
    minKmPerDay: 250,
    driverAllowance: 350,
  },
  {
    id: 'suvPremium',
    name: 'Innova Crysta',
    description: 'Toyota Innova Crysta',
    seats: 7,
    pricePerKm: 18,
    minKmPerDay: 250,
    driverAllowance: 400,
  },
  {
    id: 'tempo12',
    name: 'Tempo 12-Seater',
    description: 'Force Traveller AC',
    seats: 12,
    pricePerKm: 23,
    minKmPerDay: 250,
    driverAllowance: 400,
  },
  {
    id: 'tempo17',
    name: 'Tempo 17-Seater',
    description: 'Force Traveller Deluxe',
    seats: 17,
    pricePerKm: 26,
    minKmPerDay: 250,
    driverAllowance: 450,
  },
  {
    id: 'tempo26',
    name: 'Tempo 26-Seater',
    description: 'Force Traveller Maharaja',
    seats: 26,
    pricePerKm: 26,
    minKmPerDay: 250,
    driverAllowance: 450,
  },
  {
    id: 'bus27',
    name: 'Bus 27-Seater',
    description: 'AC Bus',
    seats: 27,
    pricePerKm: 35,
    minKmPerDay: 250,
    driverAllowance: 500,
  },
  {
    id: 'bus41',
    name: 'Bus 41-Seater',
    description: 'AC Luxury Bus',
    seats: 41,
    pricePerKm: 42,
    minKmPerDay: 250,
    driverAllowance: 600,
  },
];

// Get distance between two cities
const getDistance = (from, to) => {
  const key1 = `${from}-${to}`;
  const key2 = `${to}-${from}`;
  return distanceMatrix[key1] || distanceMatrix[key2] || null;
};

const FareCalculator = ({
  variant = 'full', // 'full' | 'compact' | 'inline'
  defaultFrom = '',
  defaultTo = '',
  phoneNumber = '7668570551',
  className = ''
}) => {
  const [fromCity, setFromCity] = useState(defaultFrom);
  const [toCity, setToCity] = useState(defaultTo);
  const [selectedVehicle, setSelectedVehicle] = useState('sedan');
  const [tripType, setTripType] = useState('oneway');
  const [isCalculated, setIsCalculated] = useState(false);

  // Calculate fare
  const fareDetails = useMemo(() => {
    if (!fromCity || !toCity || fromCity === toCity) return null;

    const distance = getDistance(fromCity, toCity);
    if (!distance) return null;

    const vehicle = vehicleTypes.find(v => v.id === selectedVehicle);
    if (!vehicle) return null;

    const totalDistance = tripType === 'roundtrip' ? distance * 2 : distance;
    const billableKm = Math.max(totalDistance, vehicle.minKmPerDay);
    const baseFare = billableKm * vehicle.pricePerKm;
    const driverAllowance = tripType === 'roundtrip' ? vehicle.driverAllowance * 2 : vehicle.driverAllowance;
    const tollEstimate = Math.round(distance * 0.8);
    const totalFare = baseFare + driverAllowance + tollEstimate;

    return {
      distance,
      totalDistance,
      billableKm,
      baseFare,
      driverAllowance,
      tollEstimate,
      totalFare,
      vehicle,
      pricePerKm: vehicle.pricePerKm
    };
  }, [fromCity, toCity, selectedVehicle, tripType]);

  const handleCalculate = () => {
    if (fareDetails) {
      setIsCalculated(true);
    }
  };

  const handleWhatsApp = () => {
    if (!fareDetails) return;
    const message = encodeURIComponent(
      `Hi! I need a taxi booking:\n\n` +
      `From: ${fromCity}\n` +
      `To: ${toCity}\n` +
      `Trip: ${tripType === 'roundtrip' ? 'Round Trip' : 'One Way'}\n` +
      `Vehicle: ${fareDetails.vehicle.name}\n` +
      `Estimated Fare: ₹${fareDetails.totalFare.toLocaleString()}\n\n` +
      `Please confirm availability and final price.`
    );
    window.open(`https://wa.me/91${phoneNumber}?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:+91${phoneNumber}`;
  };

  // Compact variant
  if (variant === 'compact') {
    return (
      <div className={`bg-white rounded-xl shadow-lg p-4 ${className}`}>
        <h3 className="font-bold text-base sm:text-lg mb-4 flex items-center gap-2">
          <Calculator className="w-5 h-5 text-amber-500" />
          Quick Fare Calculator
        </h3>
        <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3">
          <div>
            <label htmlFor="compact-from-city" className="sr-only">From City</label>
            <select
              id="compact-from-city"
              value={fromCity}
              onChange={(e) => { setFromCity(e.target.value); setIsCalculated(false); }}
              className="w-full p-2.5 border rounded-lg text-sm touch-manipulation"
              aria-label="Pickup city"
            >
              <option value="">From City</option>
              {popularCities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="compact-to-city" className="sr-only">To City</label>
            <select
              id="compact-to-city"
              value={toCity}
              onChange={(e) => { setToCity(e.target.value); setIsCalculated(false); }}
              className="w-full p-2.5 border rounded-lg text-sm touch-manipulation"
              aria-label="Drop city"
            >
              <option value="">To City</option>
              {popularCities.map(city => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>
        </div>
        {fareDetails && (
          <div className="bg-amber-50 rounded-lg p-3 text-center">
            <p className="text-sm text-gray-600">Estimated Fare (Sedan)</p>
            <p className="text-2xl font-bold text-amber-600">₹{fareDetails.totalFare.toLocaleString()}</p>
            <p className="text-xs text-gray-500">{fareDetails.distance} km | ₹{fareDetails.pricePerKm}/km</p>
          </div>
        )}
      </div>
    );
  }

  // Full variant - Mobile Optimized
  return (
    <section className={`py-8 sm:py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white ${className}`}>
      <div className="container mx-auto px-3 sm:px-4">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4"
          >
            <Calculator className="w-4 h-4" />
            <span>Instant Fare Calculator</span>
          </motion.div>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3">
            Calculate Your Trip Fare
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
            Get instant fare estimates. Transparent pricing, no hidden charges.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden">
            {/* Calculator Form */}
            <div className="p-4 sm:p-6 md:p-8">
              {/* Route Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div>
                  <label htmlFor="fare-pickup-city" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                    <MapPin className="w-4 h-4 inline mr-1 text-green-500" aria-hidden="true" />
                    Pickup City
                  </label>
                  <select
                    id="fare-pickup-city"
                    value={fromCity}
                    onChange={(e) => { setFromCity(e.target.value); setIsCalculated(false); }}
                    className="w-full p-3 sm:p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-base touch-manipulation"
                    aria-required="true"
                  >
                    <option value="">Select pickup city</option>
                    {popularCities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="fare-drop-city" className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                    <Navigation className="w-4 h-4 inline mr-1 text-red-500" aria-hidden="true" />
                    Drop City
                  </label>
                  <select
                    id="fare-drop-city"
                    value={toCity}
                    onChange={(e) => { setToCity(e.target.value); setIsCalculated(false); }}
                    className="w-full p-3 sm:p-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-base touch-manipulation"
                    aria-required="true"
                  >
                    <option value="">Select drop city</option>
                    {popularCities.map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Trip Type */}
              <div className="mb-4 sm:mb-6">
                <fieldset>
                  <legend className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">Trip Type</legend>
                  <div className="grid grid-cols-2 gap-2 sm:gap-4" role="radiogroup" aria-label="Trip type selection">
                    <button
                      onClick={() => { setTripType('oneway'); setIsCalculated(false); }}
                      role="radio"
                      aria-checked={tripType === 'oneway'}
                      className={`p-3 sm:p-3.5 rounded-xl border-2 transition-all touch-manipulation active:scale-[0.98] ${
                        tripType === 'oneway'
                          ? 'border-amber-500 bg-amber-50 text-amber-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="font-medium text-sm sm:text-base">One Way</span>
                    </button>
                    <button
                      onClick={() => { setTripType('roundtrip'); setIsCalculated(false); }}
                      role="radio"
                      aria-checked={tripType === 'roundtrip'}
                      className={`p-3 sm:p-3.5 rounded-xl border-2 transition-all touch-manipulation active:scale-[0.98] ${
                        tripType === 'roundtrip'
                          ? 'border-amber-500 bg-amber-50 text-amber-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <span className="font-medium text-sm sm:text-base">Round Trip</span>
                    </button>
                  </div>
                </fieldset>
              </div>

              {/* Vehicle Selection - Scrollable on mobile */}
              <div className="mb-4 sm:mb-6" role="group" aria-label="Vehicle selection">
                <span className="block text-sm font-medium text-gray-700 mb-1.5 sm:mb-2" id="vehicle-selection-label">
                  <Car className="w-4 h-4 inline mr-1" aria-hidden="true" />
                  Select Vehicle
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3" role="radiogroup" aria-labelledby="vehicle-selection-label">
                  {vehicleTypes.slice(0, 6).map(vehicle => (
                    <button
                      key={vehicle.id}
                      onClick={() => { setSelectedVehicle(vehicle.id); setIsCalculated(false); }}
                      role="radio"
                      aria-checked={selectedVehicle === vehicle.id}
                      aria-label={`${vehicle.name} - ${vehicle.seats} seats - ${vehicle.pricePerKm} rupees per km`}
                      className={`p-3 sm:p-4 rounded-xl border-2 transition-all text-left touch-manipulation active:scale-[0.98] ${
                        selectedVehicle === vehicle.id
                          ? 'border-amber-500 bg-amber-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-semibold text-gray-900 text-xs sm:text-sm">{vehicle.name}</div>
                      <div className="text-[10px] sm:text-xs text-gray-500 flex items-center gap-1 mt-0.5 sm:mt-1">
                        <Users className="w-3 h-3" aria-hidden="true" />
                        {vehicle.seats} seats
                      </div>
                      <div className="text-amber-600 font-bold text-sm sm:text-base mt-1">₹{vehicle.pricePerKm}/km</div>
                    </button>
                  ))}
                </div>

                {/* More vehicles - expandable */}
                <details className="mt-3">
                  <summary className="text-sm text-amber-600 font-medium cursor-pointer hover:text-amber-700">
                    + More vehicles (Tempo 26-seater, Buses)
                  </summary>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mt-3">
                    {vehicleTypes.slice(6).map(vehicle => (
                      <button
                        key={vehicle.id}
                        onClick={() => { setSelectedVehicle(vehicle.id); setIsCalculated(false); }}
                        className={`p-3 sm:p-4 rounded-xl border-2 transition-all text-left touch-manipulation active:scale-[0.98] ${
                          selectedVehicle === vehicle.id
                            ? 'border-amber-500 bg-amber-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-semibold text-gray-900 text-xs sm:text-sm">{vehicle.name}</div>
                        <div className="text-[10px] sm:text-xs text-gray-500 flex items-center gap-1 mt-0.5 sm:mt-1">
                          <Users className="w-3 h-3" />
                          {vehicle.seats} seats
                        </div>
                        <div className="text-amber-600 font-bold text-sm sm:text-base mt-1">₹{vehicle.pricePerKm}/km</div>
                      </button>
                    ))}
                  </div>
                </details>
              </div>

              {/* Calculate Button */}
              <button
                onClick={handleCalculate}
                disabled={!fareDetails}
                className={`w-full py-3.5 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all touch-manipulation active:scale-[0.98] ${
                  fareDetails
                    ? 'bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                Calculate Fare
              </button>

              {/* Info text */}
              {!fareDetails && fromCity && toCity && fromCity !== toCity && (
                <p className="text-center text-xs sm:text-sm text-gray-500 mt-3">
                  <Info className="w-4 h-4 inline mr-1" />
                  Route not found. Contact us for a custom quote.
                </p>
              )}
            </div>

            {/* Results Section */}
            {isCalculated && fareDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="bg-gradient-to-r from-amber-500 to-orange-500 p-4 sm:p-6 md:p-8 text-white"
                role="region"
                aria-live="polite"
                aria-label="Fare estimate results"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-center">Your Fare Estimate</h3>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 sm:p-4 mb-3 sm:mb-4">
                  <div className="flex justify-between items-center mb-1 sm:mb-2 text-sm sm:text-base">
                    <span>{fromCity} → {toCity}</span>
                    <span className="font-semibold">{fareDetails.distance} km</span>
                  </div>
                  {tripType === 'roundtrip' && (
                    <div className="text-xs sm:text-sm opacity-80">Round Trip: {fareDetails.totalDistance} km total</div>
                  )}
                </div>

                {/* Fare Breakdown */}
                <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4 text-sm sm:text-base">
                  <div className="flex justify-between">
                    <span>Base Fare ({fareDetails.billableKm} km × ₹{fareDetails.pricePerKm})</span>
                    <span>₹{fareDetails.baseFare.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Driver Allowance</span>
                    <span>₹{fareDetails.driverAllowance}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Toll (Estimated)</span>
                    <span>₹{fareDetails.tollEstimate}</span>
                  </div>
                  <div className="border-t border-white/30 pt-2 flex justify-between text-lg sm:text-xl font-bold">
                    <span>Total Estimate</span>
                    <span>₹{fareDetails.totalFare.toLocaleString()}</span>
                  </div>
                </div>

                {/* What's Included */}
                <div className="bg-white/10 rounded-lg p-2.5 sm:p-3 mb-3 sm:mb-4 text-xs sm:text-sm">
                  <div className="font-medium mb-1">Includes:</div>
                  <div className="flex flex-wrap gap-x-3 gap-y-1">
                    <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3" aria-hidden="true" /> AC Vehicle</span>
                    <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3" aria-hidden="true" /> Driver</span>
                    <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3" aria-hidden="true" /> Fuel</span>
                    <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3" aria-hidden="true" /> GST</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <button
                    onClick={handleCall}
                    aria-label="Call now to book this trip"
                    className="flex items-center justify-center gap-1.5 sm:gap-2 bg-white text-amber-600 font-semibold py-3 sm:py-3.5 rounded-xl hover:bg-gray-100 transition-colors touch-manipulation active:scale-[0.98]"
                  >
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                    <span className="text-sm sm:text-base">Call Now</span>
                  </button>
                  <button
                    onClick={handleWhatsApp}
                    aria-label="Book this trip via WhatsApp"
                    className="flex items-center justify-center gap-1.5 sm:gap-2 bg-green-600 text-white font-semibold py-3 sm:py-3.5 rounded-xl hover:bg-green-700 transition-colors touch-manipulation active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" aria-hidden="true" />
                    <span className="text-sm sm:text-base">WhatsApp</span>
                  </button>
                </div>

                <p className="text-center text-[10px] sm:text-xs mt-3 opacity-80">
                  *Final fare may vary based on actual route, waiting time, and parking charges
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FareCalculator;
