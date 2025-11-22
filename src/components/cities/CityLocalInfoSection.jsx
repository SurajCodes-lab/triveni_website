'use client';

import { MapPin, Clock, Calendar, Info, Navigation2 } from "lucide-react";

export default function CityLocalInfoSection({ cityLocalInfo, cityName }) {
  if (!cityLocalInfo) return null;

  return (
    <section className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl shadow-lg p-6 md:p-8 mb-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          About {cityName} - Travel Guide & Local Information
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          {cityLocalInfo.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Best Time to Visit */}
          <div className="bg-white rounded-lg p-5 shadow-sm border border-orange-100">
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-6 h-6 text-orange-600" />
              <h3 className="font-semibold text-lg text-gray-900">Best Time to Visit</h3>
            </div>
            <p className="text-gray-600">{cityLocalInfo.bestTimeToVisit}</p>
          </div>

          {/* Local Events */}
          <div className="bg-white rounded-lg p-5 shadow-sm border border-orange-100">
            <div className="flex items-center gap-2 mb-3">
              <Info className="w-6 h-6 text-orange-600" />
              <h3 className="font-semibold text-lg text-gray-900">Local Events & Festivals</h3>
            </div>
            <p className="text-gray-600">{cityLocalInfo.localEvents}</p>
          </div>
        </div>

        {/* Top Attractions */}
        <div className="bg-white rounded-lg p-5 shadow-sm border border-orange-100 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <MapPin className="w-6 h-6 text-orange-600" />
            <h3 className="font-semibold text-lg text-gray-900">Top Attractions in {cityName}</h3>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {cityLocalInfo.localAttractions.map((attraction, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700">
                <span className="text-orange-500 font-bold mt-0.5">•</span>
                <span>{attraction}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Travel Tips */}
        <div className="bg-white rounded-lg p-5 shadow-sm border border-orange-100 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Navigation2 className="w-6 h-6 text-orange-600" />
            <h3 className="font-semibold text-lg text-gray-900">Travel Tips for {cityName}</h3>
          </div>
          <ul className="space-y-2">
            {cityLocalInfo.travelTips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700">
                <span className="text-green-500 font-bold mt-0.5">✓</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Nearby Destinations */}
        <div className="bg-white rounded-lg p-5 shadow-sm border border-orange-100">
          <div className="flex items-center gap-2 mb-4">
            <Clock className="w-6 h-6 text-orange-600" />
            <h3 className="font-semibold text-lg text-gray-900">Popular Destinations from {cityName}</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {cityLocalInfo.nearbyDestinations.map((destination, index) => (
              <span
                key={index}
                className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium"
              >
                {destination}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
