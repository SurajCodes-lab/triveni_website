'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Users, Clock, Star, Shield, Phone, MessageCircle, Car, CheckCircle, ArrowRight, Route, Navigation, Calendar, Info, ChevronLeft, MapIcon, Compass, Camera, Award, CreditCard, Headphones } from 'lucide-react';

export default function DynamicTempoRoutesClient({ data }) {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const { routeSlug, origin, destination, routeData, hasTouristSpots, localSightseeing, fleet } = data;

  // Console keyword tracking for Google Search Console
  useEffect(() => {
    const keywords = [
      `tempo traveller ${origin.toLowerCase()} to ${destination.toLowerCase()}`,
      `${origin.toLowerCase()} to ${destination.toLowerCase()} tempo traveller booking`,
      `${origin.toLowerCase()} ${destination.toLowerCase()} tempo traveller`,
      `book tempo traveller ${origin.toLowerCase()} to ${destination.toLowerCase()}`,
      `tempo traveller on rent ${origin.toLowerCase()} to ${destination.toLowerCase()}`,
      `12 seater tempo traveller ${origin.toLowerCase()} to ${destination.toLowerCase()}`,
      `tempo traveller hire ${origin.toLowerCase()} to ${destination.toLowerCase()}`
    ];
    console.log('🎯 SEO Keywords Active:', keywords.join(', '));
    console.log('📍 Route:', `${origin} → ${destination}`);
    console.log('🚐 Service Type:', routeData.type);
    console.log('⭐ Rating: 4.8/5 | 2500+ Happy Customers');
  }, [origin, destination, routeData.type]);

  // Enhanced structured data for Google
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `https://trivenicabs.in/tempo-traveller/${routeSlug}#service`,
        "name": `${origin} to ${destination} Tempo Traveller Service`,
        "description": `Book premium tempo traveller from ${origin} to ${destination}. AC vehicles, professional drivers, 12-26 seater options available. Best rates for group travel with comfortable pushback seats.`,
        "provider": {
          "@type": "Organization",
          "@id": "https://trivenicabs.in#organization",
          "name": "Triveni Cabs",
          "url": "https://trivenicabs.in",
          "telephone": "+917668570551",
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "IN"
          }
        },
        "areaServed": [
          { "@type": "Place", "name": origin },
          { "@type": "Place", "name": destination }
        ],
        "serviceType": "Tempo Traveller Rental",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Tempo Traveller Fleet",
          "itemListElement": fleet.map((vehicle, index) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": `${vehicle.name} - ${origin} to ${destination}`,
              "description": `${vehicle.name} with ${vehicle.capacity}`
            },
            "price": vehicle.outstationRate.replace(/[^\d]/g, ''),
            "priceCurrency": "INR"
          }))
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://trivenicabs.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Tempo Traveller",
            "item": "https://trivenicabs.in/tempo-traveller"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": `${origin} to ${destination}`,
            "item": `https://trivenicabs.in/tempo-traveller/${routeSlug}`
          }
        ]
      },
      {
        "@type": "Product",
        "name": `${origin} to ${destination} Tempo Traveller Rental`,
        "description": `Premium tempo traveller service for group travel from ${origin} to ${destination}. Multiple seating options available.`,
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": "23",
          "highPrice": "27",
          "offerCount": fleet.length
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "reviewCount": "2500",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": `How much does tempo traveller cost from ${origin} to ${destination}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Tempo traveller rates from ${origin} to ${destination} start from ₹23/km for 12-seater vehicles and go up to ₹27/km for larger 20-26 seater vehicles. The final price depends on vehicle type, trip duration, and specific requirements. All prices include fuel, driver charges, and toll taxes.`
            }
          },
          {
            "@type": "Question",
            "name": `What seater tempo traveller is available for ${origin} to ${destination}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `We offer 12-seater, 16-seater, 17-seater, 20-seater, and 26-seater Maharaja Edition tempo travellers for ${origin} to ${destination} route. All vehicles are AC equipped with comfortable pushback seats, music system, and charging points.`
            }
          },
          {
            "@type": "Question",
            "name": `How to book tempo traveller from ${origin} to ${destination}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `You can book tempo traveller by calling +917668570551 or WhatsApp us with your requirements. Simply provide your travel date, pickup location, destination, and number of passengers. You'll receive instant quote and booking confirmation with driver details.`
            }
          },
          {
            "@type": "Question",
            "name": `Is tempo traveller available for one-way from ${origin} to ${destination}?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Yes, we provide both one-way and round-trip tempo traveller services from ${origin} to ${destination}. One-way bookings are charged based on actual distance traveled with transparent per kilometer rates.`
            }
          },
          {
            "@type": "Question",
            "name": `What facilities are provided in ${origin} to ${destination} tempo traveller?`,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": `Our tempo travellers include pushback seats, air conditioning, music system, charging points, ample luggage space, first aid kit, and GPS tracking. Premium vehicles also feature LED TV and luxury interiors for enhanced comfort during your ${origin} to ${destination} journey.`
            }
          }
        ]
      }
    ]
  }), [origin, destination, routeSlug, fleet, routeData.type]);

  const getTypeColor = (type) => {
    const colors = {
      'Hill Station': 'bg-green-100 text-green-800',
      'Adventure': 'bg-orange-100 text-orange-800',
      'Spiritual': 'bg-purple-100 text-purple-800',
      'Heritage': 'bg-yellow-100 text-yellow-800',
      'Royal': 'bg-red-100 text-red-800',
      'Metro': 'bg-blue-100 text-blue-800',
      'Lakes': 'bg-cyan-100 text-cyan-800',
      'Desert': 'bg-amber-100 text-amber-800',
      'Blue City': 'bg-indigo-100 text-indigo-800',
      'Char Dham': 'bg-pink-100 text-pink-800',
      'Tourism': 'bg-gray-100 text-gray-800',
      'Commercial': 'bg-slate-100 text-slate-800',
      'Modern City': 'bg-teal-100 text-teal-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black via-gray-900 to-black py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/tempo-hero.jpg"
            alt={`${origin} to ${destination} Tempo Traveller - Book AC tempo traveller online - 12 to 26 seater - Best rates - Professional drivers`}
            fill
            className="object-cover opacity-30"
            priority
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link
              href="/tempo-traveller"
              className="inline-flex items-center text-gray-300 hover:text-yellow-400 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 mr-1" />
              Back to All Routes
            </Link>
          </div>

          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${getTypeColor(routeData.type)}`}>
                {routeData.type}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-yellow-400">{origin}</span> to <span className="text-yellow-400">{destination}</span>
              <br />
              <span className="text-2xl md:text-3xl text-gray-200">Tempo Traveller on Rent</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Premium tempo traveller service from {origin} to {destination}. Book 12-26 seater AC vehicles with professional drivers, comfortable pushback seats, and competitive rates. Perfect for family trips, corporate tours, and group pilgrimages.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white flex items-center">
                <Shield className="w-5 h-5 mr-2 text-yellow-400" />
                Safe & Sanitized Vehicles
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                4.8★ Rated Service
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white flex items-center">
                <Clock className="w-5 h-5 mr-2 text-yellow-400" />
                24/7 Booking Available
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">

        {/* Route Info Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{origin} to {destination} Route Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Route className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Route</h3>
                    <p className="text-gray-600">{origin} → {destination}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <MapIcon className="w-6 h-6 text-green-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Destination Type</h3>
                    <p className="text-gray-600">{routeData.type}</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Calendar className="w-6 h-6 text-purple-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Availability</h3>
                    <p className="text-gray-600">Available all year round for group bookings</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Info className="w-6 h-6 text-orange-600 mr-3" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Service Status</h3>
                    <p className={`font-medium ${routeData.exists ? 'text-green-600' : 'text-blue-600'}`}>
                      {routeData.exists ? 'Popular Route - Instant Booking' : 'Available on Request'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Quick Booking</h2>
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Instant Quote for {origin} to {destination}</h3>
                <p className="text-gray-600 mb-6">Call or WhatsApp for immediate booking confirmation and best tempo traveller rates. Our team is available 24/7 to assist you.</p>

                <div className="space-y-4">
                  <a
                    href="tel:+917668570551"
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-all transform hover:scale-105"
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    Call: +91-7668570551
                  </a>
                  <a
                    href={`https://wa.me/917668570551?text=Hi, I need tempo traveller from ${origin} to ${destination}. Please share the rates and availability.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-all transform hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5 mr-3" />
                    WhatsApp Booking
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Our Service Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 text-center">
            Why Choose Our {origin} to {destination} Tempo Traveller Service?
          </h2>
          <p className="text-gray-600 text-center mb-6 max-w-3xl mx-auto">
            Experience premium group travel with our well-maintained AC tempo travellers, verified professional drivers, transparent pricing, and 24/7 customer support for your {origin} to {destination} journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Safe & Secure Travel</h3>
              <p className="text-gray-600 text-sm">GPS tracked tempo travellers with verified drivers, valid insurance, first aid kit, and regular safety checks for worry-free group travel from {origin} to {destination}.</p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Transparent Pricing</h3>
              <p className="text-gray-600 text-sm">No hidden charges for {origin} to {destination} tempo traveller booking. Fixed competitive rates, multiple payment options (cash, UPI, card), and instant booking confirmation.</p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Car className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Premium Fleet Options</h3>
              <p className="text-gray-600 text-sm">Well-maintained AC tempo travellers with 12 to 26 seater options, pushback seats, music system, charging points, and ample luggage space for comfortable group journey.</p>
            </div>

            <div className="text-center p-4">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">24x7 Support</h3>
              <p className="text-gray-600 text-sm">Round-the-clock booking assistance, live GPS tracking, instant customer support via call/WhatsApp, and dedicated team to handle all your {origin} to {destination} travel needs.</p>
            </div>
          </div>
        </div>

        {/* Available Fleet */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Available <span className="text-yellow-500">Tempo Travellers</span> for {origin} to {destination}
            </h2>
            <p className="text-lg text-gray-600">
              Choose the perfect vehicle for your group size and travel comfort. All vehicles feature AC, pushback seats, and professional drivers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleet.map((vehicle) => (
              <div
                key={vehicle.id}
                className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              >
                {vehicle.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                      POPULAR CHOICE
                    </span>
                  </div>
                )}

                {vehicle.premium && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      PREMIUM LUXURY
                    </span>
                  </div>
                )}

                {/* Vehicle Image */}
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={vehicle.image}
                    alt={`${vehicle.name} for ${origin} to ${destination} - AC tempo traveller - ${vehicle.capacity} - Book online - Best rates`}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const parent = e.target.parentElement;
                      parent.className = parent.className.replace('bg-gray-100', `bg-gradient-to-r ${vehicle.color}`);

                      if (!parent.querySelector('.fallback-icon')) {
                        const fallbackDiv = document.createElement('div');
                        fallbackDiv.className = 'fallback-icon absolute inset-0 flex items-center justify-center';
                        fallbackDiv.innerHTML = '<svg class="w-16 h-16 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M8 5a1 1 0 100 2h4a1 1 0 100-2H8zM3 7a1 1 0 011-1h1.05L5.5 4.5A2.5 2.5 0 018 2h4a2.5 2.5 0 012.5 2.5L15 6h1a1 1 0 011 1v8a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1H7v1a1 1 0 01-1 1H4a1 1 0 01-1-1V7z"/></svg>';
                        parent.appendChild(fallbackDiv);
                      }
                    }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${vehicle.color} opacity-20`}></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Car className="w-8 h-8 text-gray-600" />
                    <div className="flex items-center text-gray-500">
                      <Users className="w-5 h-5 mr-1" />
                      <span className="text-sm">{vehicle.capacity}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-gray-900">{vehicle.name}</h3>
                  <p className="text-gray-600 mb-4">{vehicle.capacity} - Perfect for family and group travel</p>

                  <div className="grid grid-cols-1 gap-2 mb-4">
                    {vehicle.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Outstation Rate</span>
                        <span className="font-bold text-gray-900">{vehicle.outstationRate}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Local Rate (8hrs/80km)</span>
                        <span className="text-sm font-medium text-gray-900">{vehicle.localRate}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedVehicle(vehicle)}
                    className="w-full bg-gradient-to-r from-black to-gray-800 hover:from-yellow-400 hover:to-yellow-500 hover:text-black text-white font-semibold py-3 rounded-lg transition-all duration-300"
                  >
                    Book {vehicle.name}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tempo Traveller Features Section */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Tempo Traveller Features & Amenities for {origin} to {destination}
          </h2>

          <div className="prose max-w-none text-gray-600">
            <p className="mb-4">
              Our tempo travellers are specially designed for long-distance group travel from {origin} to {destination}. Each vehicle undergoes regular maintenance and safety checks to ensure a comfortable and secure journey for all passengers.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Award className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Comfort Features</h3>
                <ul className="text-sm space-y-2">
                  <li>✓ Pushback recliner seats with cushioned comfort</li>
                  <li>✓ Individual reading lights and AC vents</li>
                  <li>✓ Music system with Bluetooth connectivity</li>
                  <li>✓ LED TV in premium vehicles</li>
                  <li>✓ Ample legroom and headspace</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Shield className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Safety Equipment</h3>
                <ul className="text-sm space-y-2">
                  <li>✓ GPS tracking for real-time monitoring</li>
                  <li>✓ First aid kit with emergency supplies</li>
                  <li>✓ Fire extinguisher in all vehicles</li>
                  <li>✓ Valid insurance and permits</li>
                  <li>✓ Regular vehicle fitness checks</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <Car className="w-8 h-8 text-yellow-600 mb-4" />
                <h3 className="font-semibold text-lg mb-2">Storage & Extras</h3>
                <ul className="text-sm space-y-2">
                  <li>✓ Large luggage carrier on top</li>
                  <li>✓ Under-seat storage compartments</li>
                  <li>✓ Mobile charging points for all seats</li>
                  <li>✓ Water bottle holders</li>
                  <li>✓ Curtains for privacy and sun protection</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Comprehensive FAQ Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions - {origin} to {destination} Tempo Traveller Booking
          </h2>

          <div className="space-y-4">
            <details className="border border-gray-200 rounded-lg overflow-hidden">
              <summary className="bg-gray-50 p-4 font-medium cursor-pointer hover:bg-gray-100 transition-colors">
                How much does tempo traveller cost from {origin} to {destination}?
              </summary>
              <div className="p-4 text-gray-600 text-sm leading-relaxed">
                Tempo traveller rates from {origin} to {destination} start from ₹23/km for 12-seater vehicles and go up to ₹27/km for larger 20-26 seater vehicles. The final price depends on vehicle type (standard or luxury), trip duration, and specific requirements. All prices include fuel costs, driver charges, toll taxes, and parking fees. For round-trip bookings, we offer special package deals with attractive discounts. Book online or call +917668570551 for instant quote.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg overflow-hidden">
              <summary className="bg-gray-50 p-4 font-medium cursor-pointer hover:bg-gray-100 transition-colors">
                What seater tempo traveller is available for {origin} to {destination}?
              </summary>
              <div className="p-4 text-gray-600 text-sm leading-relaxed">
                We offer multiple seating options for {origin} to {destination} route: 12-seater tempo traveller with comfortable pushback seats, 16-seater with spacious interiors, 17-seater luxury edition (most popular choice), 20-seater with LED TV and premium features, and 26-seater Maharaja Edition with super luxury recliner seats. All vehicles are AC equipped with music system, charging points, and ample luggage space. Choose based on your group size and comfort preferences.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg overflow-hidden">
              <summary className="bg-gray-50 p-4 font-medium cursor-pointer hover:bg-gray-100 transition-colors">
                How to book tempo traveller from {origin} to {destination}?
              </summary>
              <div className="p-4 text-gray-600 text-sm leading-relaxed">
                Booking tempo traveller from {origin} to {destination} is easy and quick! Call us at +917668570551 or WhatsApp with your travel details including pickup location, destination, travel date and time, number of passengers, and any special requirements. Our team will provide instant quote with vehicle options. Confirm the booking with a small advance payment, and you&apos;ll receive complete booking confirmation with driver details, vehicle number, and contact information via SMS/WhatsApp.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg overflow-hidden">
              <summary className="bg-gray-50 p-4 font-medium cursor-pointer hover:bg-gray-100 transition-colors">
                Is tempo traveller available for one-way from {origin} to {destination}?
              </summary>
              <div className="p-4 text-gray-600 text-sm leading-relaxed">
                Yes, we provide both one-way drop and round-trip tempo traveller services from {origin} to {destination}. One-way bookings are charged based on actual distance traveled with transparent per kilometer rates. Round-trip bookings include 2-way journey with driver accommodation (if overnight stay required). For one-way drop, minimum charges may apply. We recommend booking in advance for better vehicle availability and rates, especially during peak travel seasons.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg overflow-hidden">
              <summary className="bg-gray-50 p-4 font-medium cursor-pointer hover:bg-gray-100 transition-colors">
                What facilities are provided in {origin} to {destination} tempo traveller?
              </summary>
              <div className="p-4 text-gray-600 text-sm leading-relaxed">
                Our tempo travellers for {origin} to {destination} journey include: comfortable pushback recliner seats with ample legroom, powerful air conditioning throughout the vehicle, music system with Bluetooth/AUX/USB connectivity, mobile charging points for every seat, ample luggage space with top carrier, first aid kit and fire extinguisher for safety, GPS tracking for real-time monitoring, and clean sanitized interiors. Premium vehicles also feature LED TV, luxury interiors, and extra amenities for enhanced comfort during your trip.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg overflow-hidden">
              <summary className="bg-gray-50 p-4 font-medium cursor-pointer hover:bg-gray-100 transition-colors">
                Are drivers provided with tempo traveller for {origin} to {destination}?
              </summary>
              <div className="p-4 text-gray-600 text-sm leading-relaxed">
                Yes, all our tempo travellers come with experienced professional drivers who are well-versed with the {origin} to {destination} route. Drivers have valid commercial driving licenses, police verification, and 5+ years of long-distance driving experience. They know the best routes, safe stopover points for refreshments and meals, and handle all aspects of the journey including toll payments and parking. Driver charges, accommodation (for overnight trips), and allowances are included in the quoted price.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg overflow-hidden">
              <summary className="bg-gray-50 p-4 font-medium cursor-pointer hover:bg-gray-100 transition-colors">
                What is the cancellation policy for {origin} to {destination} tempo traveller booking?
              </summary>
              <div className="p-4 text-gray-600 text-sm leading-relaxed">
                Our cancellation policy is customer-friendly: Cancel 48 hours before travel for 100% refund of advance payment, cancel 24-48 hours before travel for 75% refund, cancel within 24 hours for 50% refund. No refund for same-day cancellations or no-shows. In case of emergencies or unforeseen circumstances, you can reschedule your booking without additional charges (subject to vehicle availability). We recommend taking our cancellation protection for added peace of mind during uncertain travel plans.
              </div>
            </details>

            <details className="border border-gray-200 rounded-lg overflow-hidden">
              <summary className="bg-gray-50 p-4 font-medium cursor-pointer hover:bg-gray-100 transition-colors">
                What payment methods are accepted for tempo traveller booking?
              </summary>
              <div className="p-4 text-gray-600 text-sm leading-relaxed">
                We accept multiple payment methods for your convenience: Cash payment to driver, UPI payments (Google Pay, PhonePe, Paytm), online bank transfer/NEFT/RTGS, credit and debit cards, and digital wallets. Advance payment of 20-30% is required to confirm booking, with remaining amount payable before or after the trip. We provide proper invoices and receipts for all transactions. For corporate bookings, we also offer credit facilities and monthly billing options.
              </div>
            </details>
          </div>
        </div>

        {/* Route Guide Content Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Complete {origin} to {destination} Tempo Traveller Travel Guide
          </h2>

          <div className="prose max-w-none text-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Why Choose Tempo Traveller for {origin} to {destination} Journey?
            </h3>
            <p className="mb-4">
              Traveling from {origin} to {destination} in a tempo traveller offers the perfect blend of comfort, affordability, and convenience for group travel. Whether you&apos;re planning a family vacation, corporate outing, pilgrimage tour, or friends trip, our tempo travellers provide spacious seating, ample luggage space, and all modern amenities to make your journey memorable. Unlike regular cars where you need to book multiple vehicles, a tempo traveller keeps your entire group together, making the journey more enjoyable and cost-effective.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">
              Best Time to Travel from {origin} to {destination}
            </h3>
            <p className="mb-4">
              The {origin} to {destination} route can be traveled year-round, but certain seasons offer better experiences. {routeData.type === 'Hill Station' && 'For hill station destinations, summer months (April-June) and winter (October-February) are ideal for pleasant weather. Avoid monsoon season due to possible road blockages.'} {routeData.type === 'Spiritual' && 'Spiritual destinations are best visited during festival seasons and fair weather months. Early morning starts are recommended for darshan and peaceful atmosphere.'} We recommend booking tempo travellers in advance during peak tourist seasons, long weekends, and major festivals to ensure availability and better rates.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">
              What Makes Our {origin} to {destination} Tempo Traveller Service Special?
            </h3>
            <p className="mb-4">
              With over 10 years of experience in group travel services, we understand what makes a journey truly comfortable. Our tempo travellers are maintained to the highest standards with regular servicing and safety checks. We employ only experienced drivers who are courteous, punctual, and familiar with the {origin} to {destination} route including best stopover points, clean restrooms, good restaurants, and scenic viewpoints. Real-time GPS tracking allows family members to monitor your journey progress. We also provide 24/7 customer support to address any concerns during your trip.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-6">
              Inclusions in {origin} to {destination} Tempo Traveller Package
            </h3>
            <p className="mb-4">
              Our tempo traveller booking includes: well-maintained AC vehicle with your chosen seating capacity, experienced professional driver with route knowledge, all fuel costs for the journey, driver allowances and accommodation (for overnight trips), toll charges and parking fees, state taxes and permits, comprehensive vehicle insurance for passenger safety, and 24/7 customer support throughout your journey. Additional services like guide arrangements, hotel bookings, and customized itinerary planning can be arranged on request.
            </p>
          </div>
        </div>

        {/* Destination Highlights Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Explore {destination}</h2>
              <p className="text-gray-600">Discover amazing attractions and experiences in this {routeData.type?.toLowerCase() || 'destination'}</p>
            </div>
          </div>

          {hasTouristSpots ? (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4">
              <div className="flex items-center text-blue-700 mb-2">
                <MapPin className="w-5 h-5 mr-2" />
                <span className="font-medium">Popular tourist destination with rich cultural heritage</span>
              </div>
              <p className="text-blue-600 text-sm">
                {destination} offers numerous historical monuments, spiritual sites, and cultural experiences.
                Our tempo traveller service makes it easy to explore all attractions comfortably with your entire group.
              </p>
            </div>
          ) : (
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4">
              <div className="flex items-center text-green-700 mb-2">
                <Star className="w-5 h-5 mr-2" />
                <span className="font-medium">Beautiful {routeData.type?.toLowerCase() || 'destination'} perfect for group travel</span>
              </div>
              <p className="text-green-600 text-sm">
                Enjoy the scenic journey and natural beauty that {destination} has to offer with comfortable tempo traveller service.
              </p>
            </div>
          )}
        </div>

        {/* Related Routes Section - Internal Linking */}
        <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 md:p-8 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
            Popular Tempo Traveller Routes from {origin}
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore more destinations from {origin} with our premium tempo traveller service. Book comfortable AC vehicles for your next group trip.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <Link
              href="/tempo-traveller"
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
            >
              <div className="flex items-center mb-2">
                <Route className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="font-semibold text-gray-900">View All Routes</h3>
              </div>
              <p className="text-sm text-gray-600">Browse 100+ routes across India</p>
            </Link>

            <Link
              href="/tempo-traveller/delhi-to-manali"
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
            >
              <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 text-green-600 mr-2" />
                <h3 className="font-semibold text-gray-900">Delhi to Manali</h3>
              </div>
              <p className="text-sm text-gray-600">Popular adventure destination</p>
            </Link>

            <Link
              href="/tempo-traveller/delhi-to-shimla"
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
            >
              <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 text-purple-600 mr-2" />
                <h3 className="font-semibold text-gray-900">Delhi to Shimla</h3>
              </div>
              <p className="text-sm text-gray-600">Beautiful hill station getaway</p>
            </Link>

            <Link
              href="/tempo-traveller/delhi-to-jaipur"
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
            >
              <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 text-red-600 mr-2" />
                <h3 className="font-semibold text-gray-900">Delhi to Jaipur</h3>
              </div>
              <p className="text-sm text-gray-600">Royal heritage tour</p>
            </Link>

            <Link
              href="/tempo-traveller/delhi-to-agra"
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
            >
              <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 text-yellow-600 mr-2" />
                <h3 className="font-semibold text-gray-900">Delhi to Agra</h3>
              </div>
              <p className="text-sm text-gray-600">Taj Mahal and heritage sites</p>
            </Link>

            <Link
              href="/tempo-traveller/delhi-to-haridwar"
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
            >
              <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 text-orange-600 mr-2" />
                <h3 className="font-semibold text-gray-900">Delhi to Haridwar</h3>
              </div>
              <p className="text-sm text-gray-600">Spiritual pilgrimage</p>
            </Link>

            <Link
              href="/tempo-traveller/delhi-to-rishikesh"
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
            >
              <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 text-cyan-600 mr-2" />
                <h3 className="font-semibold text-gray-900">Delhi to Rishikesh</h3>
              </div>
              <p className="text-sm text-gray-600">Yoga and adventure capital</p>
            </Link>

            <Link
              href="/tempo-traveller/chandigarh-to-manali"
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
            >
              <div className="flex items-center mb-2">
                <MapPin className="w-5 h-5 text-indigo-600 mr-2" />
                <h3 className="font-semibold text-gray-900">Chandigarh to Manali</h3>
              </div>
              <p className="text-sm text-gray-600">Scenic mountain route</p>
            </Link>
          </div>

          <div className="text-center mt-6">
            <Link
              href="/tempo-traveller"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
            >
              <Route className="w-5 h-5 mr-2" />
              Explore All Tempo Traveller Routes
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-black via-gray-900 to-black rounded-2xl p-8 md:p-12 text-center text-white mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Travel from <span className="text-yellow-400">{origin}</span> to <span className="text-yellow-400">{destination}</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Book your tempo traveller now for the best rates and professional service. Available 24/7 for instant booking and confirmation.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+917668570551"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center transition-all transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-3" />
              Call Now: +91-7668570551
            </a>
            <a
              href={`https://wa.me/917668570551?text=Hi, I want to book tempo traveller from ${origin} to ${destination}. Please share the quote and availability.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg flex items-center justify-center transition-all transform hover:scale-105"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              WhatsApp Booking
            </a>
          </div>
        </div>
      </div>

      {/* Vehicle Selection Modal */}
      {selectedVehicle && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">Book {selectedVehicle.name}</h3>
              <button
                onClick={() => setSelectedVehicle(null)}
                className="text-gray-400 hover:text-gray-600 text-3xl leading-none"
              >
                ×
              </button>
            </div>

            <div className="relative h-32 bg-gray-100 rounded-lg mb-6 overflow-hidden">
              <Image
                src={selectedVehicle.image}
                alt={selectedVehicle.name}
                fill
                className="object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  const parent = e.target.parentElement;
                  parent.className = parent.className.replace('bg-gray-100', `bg-gradient-to-r ${selectedVehicle.color}`);

                  if (!parent.querySelector('.modal-fallback-icon')) {
                    const fallbackDiv = document.createElement('div');
                    fallbackDiv.className = 'modal-fallback-icon absolute inset-0 flex items-center justify-center';
                    fallbackDiv.innerHTML = '<svg class="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M8 5a1 1 0 100 2h4a1 1 0 100-2H8zM3 7a1 1 0 011-1h1.05L5.5 4.5A2.5 2.5 0 018 2h4a2.5 2.5 0 012.5 2.5L15 6h1a1 1 0 011 1v8a1 1 0 01-1 1h-2a1 1 0 01-1-1v-1H7v1a1 1 0 01-1 1H4a1 1 0 01-1-1V7z"/></svg>';
                    parent.appendChild(fallbackDiv);
                  }
                }}
              />
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <span className="text-sm text-gray-600">Route:</span>
                <p className="font-medium">{origin} to {destination}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Vehicle:</span>
                <p className="font-medium">{selectedVehicle.name} ({selectedVehicle.capacity})</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Outstation Rate:</span>
                <p className="font-bold text-lg text-green-600">{selectedVehicle.outstationRate}</p>
              </div>
              <div>
                <span className="text-sm text-gray-600">Local Rate:</span>
                <p className="font-bold text-lg text-blue-600">{selectedVehicle.localRate}</p>
              </div>

              <div className="border-t pt-4">
                <span className="text-sm text-gray-600 block mb-2">Features:</span>
                <div className="grid grid-cols-1 gap-1">
                  {selectedVehicle.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-3 h-3 mr-2 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <a
                href={`tel:+917668570551`}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-all"
              >
                <Phone className="w-5 h-5 mr-3" />
                Call to Book
              </a>
              <a
                href={`https://wa.me/917668570551?text=Hi, I want to book ${selectedVehicle.name} from ${origin} to ${destination}. Please share the detailed quote with availability.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-6 rounded-lg flex items-center justify-center transition-all"
              >
                <MessageCircle className="w-5 h-5 mr-3" />
                WhatsApp to Book
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
