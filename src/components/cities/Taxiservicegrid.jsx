'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { allCityRoutes } from '../../utilis/cityRoutesData';

/**
 * TaxiServiceGrid Component
 * 
 * Complete component that displays the taxi booking interface as shown in the design
 * Shows city cards with their services in a grid layout with search functionality
 * 
 * Usage:
 * import TaxiServiceGrid from './components/TaxiServiceGrid';
 * 
 * <TaxiServiceGrid />
 */

const TaxiServiceGrid = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // Convert route data to service cards format
  const allServiceCards = useMemo(() => {
    const cards = [];
    
    Object.keys(allCityRoutes).forEach(city => {
      const routes = allCityRoutes[city];
      
      // Get first route for display
      if (routes && routes.length > 0) {
        const firstRoute = routes[0];
        
        // Determine service type based on city and destination
        let serviceTitle = '';
        let serviceType = '';
        let icon = '📍';
        let region = '';
        
        // Service type logic
        if (city === 'Delhi') {
          serviceTitle = `Taxi Service in ${city}`;
          serviceType = 'NCR Region';
          icon = '🚕';
          region = 'NCR Region';
        } else if (city === 'Agra') {
          serviceTitle = `Agra Cab Booking Online`;
          serviceType = 'City + 50km radius';
          icon = '🏛️';
          region = 'City + 50km radius';
        } else if (city === 'Jaipur') {
          serviceTitle = `Book Car Rental ${city}`;
          serviceType = 'Pink City Area';
          icon = '🏰';
          region = 'Pink City Area';
        } else if (city === 'Haridwar') {
          serviceTitle = `${city} Outstation Taxi`;
          serviceType = 'Temple Circuit';
          icon = '🕉️';
          region = 'Temple Circuit';
        } else if (city === 'Chandigarh') {
          serviceTitle = `Airport Taxi ${city}`;
          serviceType = 'Tricity Area';
          icon = '✈️';
          region = 'Tricity Area';
        } else if (city === 'Shimla') {
          serviceTitle = `Shimla to Outstation Cab`;
          serviceType = 'Hill Station Tours';
          icon = '⛰️';
          region = 'Hill Station Tours';
        } else if (city === 'Manali') {
          serviceTitle = `Taxi Service in ${city}`;
          serviceType = 'Adventure Routes';
          icon = '🏔️';
          region = 'Adventure Routes';
        } else if (city === 'Amritsar') {
          serviceTitle = `Amritsar Cab Booking Online`;
          serviceType = 'Golden Temple Area';
          icon = '🛕';
          region = 'Golden Temple Area';
        } else if (city === 'Dehradun') {
          serviceTitle = `Book Car Rental ${city}`;
          serviceType = 'Valley Region';
          icon = '🌄';
          region = 'Valley Region';
        } else if (city === 'Rishikesh') {
          serviceTitle = `Rishikesh Outstation Taxi`;
          serviceType = 'Spiritual Circuit';
          icon = '🧘';
          region = 'Spiritual Circuit';
        } else if (city === 'Jodhpur') {
          serviceTitle = `Airport Taxi ${city}`;
          serviceType = 'Blue City Area';
          icon = '🏰';
          region = 'Blue City Area';
        } else if (city === 'Udaipur') {
          serviceTitle = `Udaipur to Outstation Cab`;
          serviceType = 'Lake City Region';
          icon = '🏞️';
          region = 'Lake City Region';
        } else {
          serviceTitle = `Taxi Service in ${city}`;
          serviceType = 'City Area';
          icon = '🚕';
          region = 'City Area';
        }
        
        cards.push({
          id: city,
          title: serviceTitle,
          city: city,
          region: region,
          icon: icon,
          services: ['Outstation', 'Airport Transfer', 'Local Taxi'],
          isPopular: ['Delhi', 'Agra', 'Jaipur', 'Shimla', 'Manali', 'Rishikesh', 'Jodhpur', 'Udaipur'].includes(city),
          route: firstRoute
        });
      }
    });
    
    return cards;
  }, []);

  // Filter cards based on search
  const filteredCards = useMemo(() => {
    if (!searchTerm) return allServiceCards;
    
    const lowerSearch = searchTerm.toLowerCase();
    return allServiceCards.filter(card => 
      card.city.toLowerCase().includes(lowerSearch) ||
      card.title.toLowerCase().includes(lowerSearch) ||
      card.region.toLowerCase().includes(lowerSearch)
    );
  }, [allServiceCards, searchTerm]);

  // Pagination
  const totalPages = Math.ceil(filteredCards.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCards = filteredCards.slice(startIndex, endIndex);

  return (
    <div className="w-full bg-white min-h-screen">
      {/* Header Section */}
      <div className="text-center py-8 px-4">
        <p className="text-yellow-500 text-sm font-medium mb-2">
          India's Leading Taxi Service Network
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Book Online Taxi in 14+ Cities Across India
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base">
          Reliable 24/7 outstation taxi booking with professional drivers, GPS tracking, and competitive<br className="hidden md:block" />
          rates. Available in major cities including Delhi, Mumbai, Bangalore, Chennai and more.
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-2xl mx-auto px-4 mb-8">
        <div className="relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            placeholder="Search cities (e.g., Delhi, Mumbai, Bangalore)..."
            className="w-full px-4 py-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent shadow-sm"
          />
          <svg 
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
          </svg>
        </div>
      </div>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 mb-4">
        <div className="flex justify-between items-center text-sm text-gray-600">
          <p>Showing {startIndex + 1}-{Math.min(endIndex, filteredCards.length)} of {filteredCards.length} cities with taxi service</p>
          <p>Page {currentPage} of {totalPages}</p>
        </div>
      </div>

      {/* Service Cards Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentCards.map((card) => (
            <Link 
              href={`/${card.city}`}
              key={card.id}
              className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-lg transition-shadow duration-200 cursor-pointer block"
            >
              {/* Header with Popular Badge */}
              <div className="flex justify-between items-start mb-3">
                <h3 className="font-bold text-gray-900 text-base pr-2">
                  {card.title}
                </h3>
                {card.isPopular && (
                  <span className="bg-yellow-400 text-white text-xs font-semibold px-2 py-1 rounded whitespace-nowrap">
                    Popular
                  </span>
                )}
              </div>

              {/* Region Info */}
              <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                <span>{card.icon}</span>
                <span>{card.region}</span>
              </div>

              {/* Services */}
              <div className="text-xs text-gray-600 mb-4">
                {card.services.join(' • ')}
              </div>

              {/* 24/7 Service Badge */}
              <div className="flex items-center gap-2 text-sm text-gray-700 mb-4">
                <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-xs font-medium">24/7 Service</span>
              </div>

              {/* Book Now Button */}
              <div className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-medium py-2 px-4 rounded-md transition-colors duration-200 flex items-center justify-center gap-2 text-sm">
                Book Now
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredCards.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No cities found matching &quot;{searchTerm}&quot;</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="mt-4 text-yellow-600 hover:text-yellow-700 font-medium"
            >
              Clear search
            </button>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="max-w-7xl mx-auto px-4 pb-8">
          <div className="flex justify-center items-center gap-2">
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Page Numbers */}
            {[...Array(totalPages)].map((_, index) => {
              const pageNum = index + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={`px-4 py-2 rounded-md font-medium ${
                    currentPage === pageNum
                      ? 'bg-yellow-400 text-white'
                      : 'border border-gray-300 hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            {/* Next Button */}
            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaxiServiceGrid;