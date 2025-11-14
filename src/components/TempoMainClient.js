'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Users, Clock, Star, Shield, Phone, MessageCircle, Car, CheckCircle, ArrowRight, Route, Navigation, Search, Filter, Award, Headphones, CreditCard, Compass } from 'lucide-react';

export default function TempoMainClient({ data }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrigin, setSelectedOrigin] = useState('');
  const [showAllRoutes, setShowAllRoutes] = useState(false);
  const [showAllVehicles, setShowAllVehicles] = useState(false);

  const { popularRoutes, allRoutes, fleet, cities } = data;

  // Console keyword tracking for Google Search Console
  useEffect(() => {
    const keywords = [
      'tempo traveller on rent',
      'tempo traveller hire india',
      '12 seater tempo traveller',
      '17 seater tempo traveller booking',
      'tempo traveller rental service',
      'ac tempo traveller with driver',
      'group travel tempo traveller',
      'outstation tempo traveller booking',
      'luxury tempo traveller india',
      'tempo traveller delhi',
      'book tempo traveller online'
    ];
    console.log('🎯 SEO Keywords Active:', keywords.join(', '));
    console.log('🚐 Service: Tempo Traveller Rental - All India');
    console.log('⭐ Rating: 4.8/5 | 2500+ Happy Customers');
    console.log('📍 Coverage: Pan India - 100+ Routes Available');
  }, []);

  // Structured data for main tempo traveller page
  const structuredData = useMemo(() => ({
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://trivenicabs.in#organization",
        "name": "Triveni Cabs",
        "url": "https://trivenicabs.in",
        "logo": {
          "@type": "ImageObject",
          "url": "https://trivenicabs.in/images/logo.png"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+917668570551",
          "contactType": "Customer Service",
          "areaServed": "IN",
          "availableLanguage": ["en", "hi"]
        },
        "sameAs": [
          "https://www.facebook.com/trivenicabs",
          "https://www.instagram.com/trivenicabs"
        ]
      },
      {
        "@type": "Service",
        "@id": "https://trivenicabs.in/tempo-traveller#service",
        "name": "Tempo Traveller Rental Service",
        "description": "Premium tempo traveller rental service across India. Book 12-26 seater AC vehicles with professional drivers for group travel, family trips, corporate tours, and pilgrimages.",
        "provider": {
          "@type": "Organization",
          "@id": "https://trivenicabs.in#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Tempo Traveller Fleet",
          "itemListElement": fleet.map((vehicle, index) => ({
            "@type": "Offer",
            "itemOffered": {
              "@type": "Product",
              "name": vehicle.name,
              "description": `${vehicle.name} with ${vehicle.capacity} for comfortable group travel`
            },
            "price": vehicle.outstationRate.replace(/[^\d]/g, ''),
            "priceCurrency": "INR",
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "price": vehicle.outstationRate.replace(/[^\d]/g, ''),
              "priceCurrency": "INR",
              "unitText": "per kilometer"
            }
          }))
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
            "name": "What seater options are available in tempo traveller?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer 12-seater, 16-seater, 17-seater, 20-seater, and 26-seater Maharaja Edition tempo travellers. All vehicles are AC equipped with comfortable pushback seats, music system, charging points, and ample luggage space for group travel."
            }
          },
          {
            "@type": "Question",
            "name": "How much does tempo traveller rental cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Tempo traveller rates start from ₹23/km for 12-seater vehicles and go up to ₹27/km for larger 20-26 seater vehicles. Local packages (8hrs/80km) range from ₹6,000 to ₹11,000 depending on vehicle type. All prices include fuel, driver charges, and toll taxes."
            }
          },
          {
            "@type": "Question",
            "name": "Are drivers provided with tempo traveller?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, all our tempo travellers come with experienced professional drivers who have valid licenses, police verification, and 5+ years of driving experience. Driver charges and accommodation (for overnight trips) are included in the rental price."
            }
          },
          {
            "@type": "Question",
            "name": "Which routes are covered by tempo traveller service?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We cover 100+ routes across India including popular destinations like Delhi to Manali, Delhi to Shimla, Delhi to Jaipur, Delhi to Agra, Chandigarh to Manali, Haridwar to Badrinath, and many more hill stations, spiritual sites, and tourist destinations."
            }
          },
          {
            "@type": "Question",
            "name": "What facilities are included in tempo traveller?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Our tempo travellers include pushback recliner seats, powerful AC, music system with Bluetooth, mobile charging points, ample luggage space with top carrier, first aid kit, GPS tracking, and sanitized interiors. Premium vehicles also feature LED TV and luxury interiors."
            }
          },
          {
            "@type": "Question",
            "name": "How to book tempo traveller online?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can book tempo traveller by calling +917668570551 or WhatsApp with your requirements including pickup location, destination, travel date, and number of passengers. You'll receive instant quote and booking confirmation with driver details."
            }
          }
        ]
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
          }
        ]
      }
    ]
  }), [fleet]);

  // Get unique origins for filter dropdown
  const getOriginCities = () => {
    const origins = [...new Set(allRoutes.map(route => route.origin))];
    return origins.sort();
  };

  // Filter routes based on search and origin selection
  const getFilteredRoutes = () => {
    let routes = selectedOrigin 
      ? allRoutes.filter(route => route.origin === selectedOrigin)
      : allRoutes;

    if (searchTerm) {
      routes = routes.filter(route => 
        route.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
        route.destination.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return routes;
  };

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
            alt="Tempo Traveller Hero"
            fill
            className="object-cover opacity-30"
            priority
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Premium <span className="text-yellow-400">Tempo Traveller</span> Service
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Comfortable group travel across India s most beautiful destinations. 
              Professional drivers, well-maintained vehicles, competitive rates.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white flex items-center">
                <Shield className="w-5 h-5 mr-2 text-yellow-400" />
                Safe & Sanitized
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                Professional Drivers
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white flex items-center">
                <Clock className="w-5 h-5 mr-2 text-yellow-400" />
                24/7 Booking
              </div>
            </div>

            {/* Search and Filter */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search destinations..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/90 backdrop-blur-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  />
                </div>
                <div className="relative">
                  <Filter className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <select
                    value={selectedOrigin}
                    onChange={(e) => setSelectedOrigin(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-white/90 backdrop-blur-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 appearance-none"
                  >
                    <option value="">All Origins</option>
                    {getOriginCities().map(city => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                </div>
                <button 
                  onClick={() => setShowAllRoutes(true)}
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Search Routes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        {/* Popular Routes Section */}
        {!searchTerm && !selectedOrigin && !showAllRoutes && (
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Popular <span className="text-yellow-500">Routes</span>
                </h2>
                <p className="text-lg text-gray-600">
                  Most booked tempo traveller routes across India
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {popularRoutes.map((route, index) => (
                  <Link
                    key={index}
                    href={`/tempo-traveller/${route.slug}`}
                    className="group bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer border border-gray-100"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Route className="w-8 h-8 text-blue-600" />
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(route.type)}`}>
                          {route.type}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {route.origin}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-4">
                        <ArrowRight className="w-4 h-4 mx-2" />
                        <span className="font-medium">{route.destination}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>Route</span>
                        </div>
                        <div className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                          Book Now
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAllRoutes(true)}
                  className="bg-gradient-to-r from-black to-gray-800 hover:from-yellow-400 hover:to-yellow-500 hover:text-black text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                >
                  View All Routes
                </button>
              </div>
            </div>

            {/* Why Choose Our Tempo Traveller Service Section */}
            <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Why Choose Our Tempo Traveller Service?
              </h2>

              <div className="prose max-w-none text-gray-600 mb-8">
                <p className="text-lg leading-relaxed mb-4">
                  When it comes to group travel across India, choosing the right transportation service makes all the difference. At Triveni Cabs, we&apos;ve been serving thousands of happy customers for over 10 years, specializing in premium tempo traveller rentals for every occasion - whether it&apos;s a family vacation to the hills, a corporate team outing, a religious pilgrimage, or a wedding celebration with your loved ones.
                </p>
                <p className="text-base leading-relaxed mb-4">
                  Our tempo traveller service stands out because we understand that group travel isn&apos;t just about getting from point A to point B. It&apos;s about creating memorable experiences together, enjoying comfortable journeys, and having peace of mind knowing you&apos;re in safe hands. Every vehicle in our fleet undergoes regular maintenance and safety checks, ensuring you never have to compromise on comfort or safety during your trip.
                </p>
                <p className="text-base leading-relaxed mb-4">
                  What sets us apart is our commitment to transparency and customer satisfaction. No hidden charges, no last-minute surprises - just honest, reliable service at competitive rates. Our experienced drivers are not just chauffeurs; they&apos;re your travel companions who know the best routes, scenic stopovers, clean restaurants, and interesting spots along the way. With GPS tracking, 24/7 customer support, and well-maintained AC vehicles equipped with all modern amenities, we ensure your group travel experience is smooth, comfortable, and worry-free from start to finish.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Safety First</h3>
                  <p className="text-gray-600 text-sm">GPS tracked vehicles, verified drivers with police verification, valid insurance, first aid kit, and regular safety inspections for worry-free group travel.</p>
                </div>

                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CreditCard className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Transparent Pricing</h3>
                  <p className="text-gray-600 text-sm">No hidden charges or surprises. Fixed competitive rates with all-inclusive pricing covering fuel, driver, tolls, and taxes. Multiple payment options available.</p>
                </div>

                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Premium Fleet</h3>
                  <p className="text-gray-600 text-sm">Well-maintained AC tempo travellers from 12 to 26 seaters with pushback seats, music system, charging points, and ample luggage space.</p>
                </div>

                <div className="text-center p-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Headphones className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">24x7 Support</h3>
                  <p className="text-gray-600 text-sm">Round-the-clock booking assistance via call/WhatsApp, live GPS tracking, instant customer support, and dedicated team to handle all your travel needs.</p>
                </div>
              </div>
            </div>

            {/* Benefits of Group Travel Section */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                Benefits of Group Travel with Tempo Traveller
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <Car className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-lg">Cost-Effective Travel</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Split the cost among group members and save significantly compared to booking multiple cars or relying on public transport. Our competitive per-kilometer rates make luxury group travel affordable for families and corporate teams.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="font-semibold text-lg">Travel Together</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Keep your entire group together in one vehicle. No more coordinating multiple cars, losing track of family members, or dealing with different arrival times at destinations. Enjoy the journey as much as the destination.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                      <Compass className="w-6 h-6 text-yellow-600" />
                    </div>
                    <h3 className="font-semibold text-lg">Flexible Itinerary</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Unlike fixed tour buses or trains, tempo travellers offer complete flexibility. Stop whenever you want for photos, meals, or sightseeing. Customize your route and schedule according to your group&apos;s preferences and needs.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <Shield className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-lg">Comfort & Safety</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Travel in air-conditioned comfort with pushback seats, ample legroom, and entertainment systems. Professional drivers ensure safe journey while you relax, chat with family, or even catch up on sleep during long trips.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="w-6 h-6 text-orange-600" />
                    </div>
                    <h3 className="font-semibold text-lg">Ample Luggage Space</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Large luggage carrier on top plus under-seat storage means everyone can bring what they need. Perfect for extended vacations, wedding trips, or pilgrimages where you need to carry extra clothes, gifts, or religious items.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                      <Clock className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-semibold text-lg">Time-Saving</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Door-to-door service eliminates waiting for taxis, coordinating pickups, or dealing with public transport schedules. Professional drivers who know the routes ensure you reach your destination efficiently without delays.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* All Routes or Filtered Results */}
        {(showAllRoutes || searchTerm || selectedOrigin) && (
          <div className="mb-16">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  {searchTerm || selectedOrigin ? 'Search Results' : 'All Routes'}
                </h2>
                <p className="text-lg text-gray-600">
                  {getFilteredRoutes().length} routes available
                </p>
                {(searchTerm || selectedOrigin || showAllRoutes) && (
                  <button
                    onClick={() => {
                      setShowAllRoutes(false);
                      setSearchTerm('');
                      setSelectedOrigin('');
                    }}
                    className="mt-4 bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
                  >
                    Back to Popular Routes
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {getFilteredRoutes().map((route, index) => (
                  <Link
                    key={index}
                    href={`/tempo-traveller/${route.slug}`}
                    className="group bg-gradient-to-br from-white to-gray-50 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden cursor-pointer border border-gray-100"
                  >
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Navigation className="w-8 h-8 text-green-600" />
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(route.type)}`}>
                          {route.type}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {route.origin}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-4">
                        <ArrowRight className="w-4 h-4 mx-2" />
                        <span className="font-medium">{route.destination}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>Available</span>
                        </div>
                        <div className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all">
                          View Details
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {getFilteredRoutes().length === 0 && (
                <div className="text-center py-12">
                  <div className="text-gray-400 mb-4">
                    <Search className="w-16 h-16 mx-auto" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">No routes found</h3>
                  <p className="text-gray-600 mb-4">Try adjusting your search criteria or contact us for custom routes</p>
                  <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-2 rounded-lg font-medium transition-colors">
                    Contact Us
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Fleet Overview Section */}
        {!searchTerm && !selectedOrigin && !showAllRoutes && (
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our <span className="text-yellow-500">Fleet</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose from our range of comfortable and well-maintained tempo travellers
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(showAllVehicles ? fleet : fleet.slice(0, 3)).map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
                >
                  {vehicle.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-3 py-1 rounded-full text-xs font-bold">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  {vehicle.premium && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-gradient-to-r from-purple-400 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        PREMIUM
                      </span>
                    </div>
                  )}

                  {/* Vehicle Image */}
                  <div className="relative h-48 bg-gray-100">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        // Fallback to a gradient background if image fails to load
                        e.target.style.display = 'none';
                        e.target.parentElement.className += ` bg-gradient-to-r ${vehicle.color}`;
                      }}
                    />
                    {/* Fallback gradient overlay */}
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
                    <p className="text-gray-600 mb-4">{vehicle.capacity}</p>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {vehicle.features.slice(0, 4).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Outstation</span>
                        <span className="font-bold text-gray-900">{vehicle.outstationRate}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Local</span>
                        <span className="text-sm font-medium text-gray-900">{vehicle.localRate}</span>
                      </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-black to-gray-800 hover:from-yellow-400 hover:to-yellow-500 hover:text-black text-white font-semibold py-3 rounded-lg transition-all duration-300">
                      Book Now
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              {!showAllVehicles ? (
                <button
                  onClick={() => setShowAllVehicles(true)}
                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                >
                  View All Vehicles ({fleet.length})
                </button>
              ) : (
                <button
                  onClick={() => setShowAllVehicles(false)}
                  className="bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
                >
                  Show Less
                </button>
              )}
            </div>
          </div>
        )}

        {/* Comprehensive FAQ Section */}
        {!searchTerm && !selectedOrigin && !showAllRoutes && (
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
              Frequently Asked Questions - Tempo Traveller Rental
            </h2>

            <div className="space-y-4 max-w-4xl mx-auto">
              <details className="border border-gray-200 rounded-lg overflow-hidden">
                <summary className="bg-gray-50 p-4 font-medium cursor-pointer hover:bg-gray-100 transition-colors">
                  What seater options are available in tempo traveller?
                </summary>
                <div className="p-4 text-gray-600 text-sm leading-relaxed">
                  We offer a complete range of tempo traveller options to suit different group sizes: 12-seater tempo traveller with comfortable pushback seats (ideal for small families or groups), 16-seater with spacious interiors and AC, 17-seater luxury edition which is our most popular choice with premium features, 20-seater tempo traveller with LED TV and entertainment system, and 26-seater Maharaja Edition with super luxury recliner seats and premium amenities. All vehicles come equipped with air conditioning, music system with Bluetooth connectivity, individual charging points for every seat, and ample luggage space with top carrier. Choose based on your group size, comfort preferences, and budget.
                </div>
              </details>

              <details className="border border-gray-200 rounded-lg overflow-hidden">
                <summary className="bg-gray-50 p-4 font-medium cursor-pointer hover:bg-gray-100 transition-colors">
                  How much does tempo traveller rental cost?
                </summary>
                <div className="p-4 text-gray-600 text-sm leading-relaxed">
                  Our tempo traveller rates are transparent and competitive. For outstation trips, rates start from ₹23 per kilometer for 12-seater vehicles and go up to ₹27 per kilometer for larger 20-26 seater vehicles. For local packages (8 hours / 80 kilometers), prices range from ₹6,000 for 12-seater to ₹11,000 for 26-seater Maharaja Edition. All prices are all-inclusive covering fuel costs, professional driver charges with experience, toll taxes and state permits, parking fees, and vehicle insurance for passenger safety. There are no hidden charges - what you see is what you pay. For round-trip bookings or multi-day packages, we offer special discounted rates. Book in advance during peak seasons for better rates and guaranteed availability.
                </div>
              </details>

              <details className="border border-gray-200 rounded-lg overflow-hidden">
                <summary className="bg-gray-50 p-4 font-medium cursor-pointer hover:bg-gray-100 transition-colors">
                  Are drivers provided with tempo traveller rental?
                </summary>
                <div className="p-4 text-gray-600 text-sm leading-relaxed">
                  Yes, all our tempo travellers come with experienced professional drivers - there is no self-drive option as tempo travellers require commercial licenses. Our drivers have valid commercial driving licenses with clean records, complete police verification and background checks, 5+ years of long-distance driving experience, excellent knowledge of routes and highways across India, and courteous, professional behavior. They know the best rest stops, clean restaurants, fuel stations, and safe parking areas along popular routes. Driver charges, daily allowances, and accommodation (for overnight trips) are included in the quoted rental price. Our drivers are trained to prioritize passenger safety and comfort, handle all toll payments and vehicle maintenance during the trip, and assist with luggage loading/unloading.
                </div>
              </details>

              <details className="border border-gray-200 rounded-lg overflow-hidden">
                <summary className="bg-gray-50 p-4 font-medium cursor-pointer hover:bg-gray-100 transition-colors">
                  Which routes and destinations are covered?
                </summary>
                <div className="p-4 text-gray-600 text-sm leading-relaxed">
                  We provide tempo traveller services for 100+ routes covering all major tourist destinations across India. Popular hill station routes include Delhi to Manali, Delhi to Shimla, Chandigarh to Manali, and Dehradun to Mussoorie. For spiritual and pilgrimage tours, we cover Delhi to Haridwar-Rishikesh, Haridwar to Char Dham (Badrinath, Kedarnath, Gangotri, Yamunotri), Amritsar to Vaishno Devi Katra, and Lucknow to Ayodhya-Varanasi circuits. Heritage and royal city tours include Delhi to Jaipur-Agra Golden Triangle, Jaipur to Udaipur-Jodhpur-Jaisalmer Rajasthan circuit. We also serve inter-city transfers, airport pickups/drops, corporate events, wedding functions, and custom itineraries. If your desired route is not listed, contact us for a custom quote - we can arrange tempo travellers for any destination across North India.
                </div>
              </details>

              <details className="border border-gray-200 rounded-lg overflow-hidden">
                <summary className="bg-gray-50 p-4 font-medium cursor-pointer hover:bg-gray-100 transition-colors">
                  What facilities and amenities are provided?
                </summary>
                <div className="p-4 text-gray-600 text-sm leading-relaxed">
                  Our tempo travellers are equipped with all modern amenities for comfortable group travel. Seating facilities include comfortable pushback recliner seats with ample legroom, individual reading lights and AC vents for each seat, and adequate headspace even for tall passengers. Entertainment and connectivity features include music system with Bluetooth, AUX, and USB connectivity, LED TV in premium 20+ seater vehicles, and mobile charging points (USB and regular sockets) for every row. Safety equipment includes GPS tracking for real-time location monitoring, first aid kit with emergency medical supplies, fire extinguisher in all vehicles, and comprehensive insurance coverage. Storage facilities include large luggage carrier on top for suitcases, under-seat storage compartments, and overhead storage for small bags. Additional amenities include curtains on windows for privacy and sun protection, water bottle holders, clean and sanitized interiors before every trip, and emergency contact numbers displayed inside the vehicle.
                </div>
              </details>

              <details className="border border-gray-200 rounded-lg overflow-hidden">
                <summary className="bg-gray-50 p-4 font-medium cursor-pointer hover:bg-gray-100 transition-colors">
                  How to book tempo traveller? What is the booking process?
                </summary>
                <div className="p-4 text-gray-600 text-sm leading-relaxed">
                  Booking tempo traveller with Triveni Cabs is quick and easy. Step 1: Contact us by calling +917668570551 or WhatsApp with your travel requirements including pickup location and time, destination, travel date and approximate return date (if round-trip), number of passengers, and any special requirements. Step 2: Receive instant quote - our team will provide you with vehicle options, transparent pricing breakdown, and driver details. Step 3: Confirm booking by paying a small advance (20-30% of total amount) via UPI, bank transfer, or online payment. Step 4: Receive booking confirmation via SMS/WhatsApp including complete trip details, vehicle number and type, driver name and contact number, and pickup instructions. Step 5: On travel day, driver arrives at your location 15 minutes before scheduled time. You can make last-minute changes or modifications by contacting our 24/7 customer support team.
                </div>
              </details>

              <details className="border border-gray-200 rounded-lg overflow-hidden">
                <summary className="bg-gray-50 p-4 font-medium cursor-pointer hover:bg-gray-100 transition-colors">
                  What is the cancellation and refund policy?
                </summary>
                <div className="p-4 text-gray-600 text-sm leading-relaxed">
                  We have a fair and customer-friendly cancellation policy. If you cancel 48 hours or more before the scheduled travel time, you receive 100% refund of advance payment with no questions asked. For cancellations between 24-48 hours before travel, 75% refund is provided. If you cancel within 24 hours of travel time, 50% refund of advance is given. For same-day cancellations or no-shows, unfortunately no refund can be provided as we may have already deployed the vehicle and driver. In case of emergencies, medical issues, or unforeseen circumstances like natural disasters, you can reschedule your booking to another date without any additional charges (subject to vehicle availability). We also offer optional cancellation protection insurance for added peace of mind. For any cancellation or rescheduling requests, contact us via call or WhatsApp as soon as possible. Refunds are processed within 5-7 business days to the original payment method.
                </div>
              </details>

              <details className="border border-gray-200 rounded-lg overflow-hidden">
                <summary className="bg-gray-50 p-4 font-medium cursor-pointer hover:bg-gray-100 transition-colors">
                  What payment methods do you accept?
                </summary>
                <div className="p-4 text-gray-600 text-sm leading-relaxed">
                  We accept multiple payment methods for your convenience: UPI payments through Google Pay, PhonePe, Paytm, and other UPI apps (instant confirmation), cash payment to driver before or after trip (most popular option), online bank transfer via NEFT/RTGS/IMPS (provide bank details upon booking), credit and debit cards (Visa, Mastercard, RuPay), and digital wallets like Paytm wallet, Mobikwik. For booking confirmation, we require 20-30% advance payment which can be paid online. The remaining balance can be paid by cash to driver or settled after trip completion. We provide proper invoices and receipts for all transactions with complete GST details. For corporate bookings, we also offer credit facilities with monthly invoicing, allowing companies to book multiple trips and settle payment at month-end. For large group bookings or multi-day packages, we can discuss flexible payment terms.
                </div>
              </details>

              <details className="border border-gray-200 rounded-lg overflow-hidden">
                <summary className="bg-gray-50 p-4 font-medium cursor-pointer hover:bg-gray-100 transition-colors">
                  Is tempo traveller available for one-way drop?
                </summary>
                <div className="p-4 text-gray-600 text-sm leading-relaxed">
                  Yes, we provide both one-way drop and round-trip tempo traveller services. For one-way bookings, you are charged only for the actual distance traveled from origin to destination based on our per-kilometer rates. However, please note that minimum charges may apply depending on the route and distance. For popular routes with high demand (like Delhi to Manali, Delhi to Shimla), one-way bookings are easily available. For less common routes, there might be nominal repositioning charges as the vehicle needs to return empty. Round-trip bookings are generally more economical as they include both onward and return journeys. We recommend round-trip if you&apos;re planning a vacation and returning to the same city. For pilgrimage tours and multi-city itineraries, we can create custom packages combining one-way and round-trip segments for best pricing. Contact us with your specific travel plans and we&apos;ll provide the most cost-effective solution.
                </div>
              </details>

              <details className="border border-gray-200 rounded-lg overflow-hidden">
                <summary className="bg-gray-50 p-4 font-medium cursor-pointer hover:bg-gray-100 transition-colors">
                  Can I customize my travel itinerary and make stops?
                </summary>
                <div className="p-4 text-gray-600 text-sm leading-relaxed">
                  Absolutely! One of the biggest advantages of renting a tempo traveller is complete flexibility to customize your itinerary. You can stop anywhere along the route for breakfast, lunch, or dinner at restaurants of your choice, take photo breaks at scenic viewpoints and attractions, visit additional tourist spots or temples not originally planned, take rest breaks whenever the group needs them, and shop for local specialties or souvenirs at interesting markets. Just inform the driver about your preferences and he will adjust the journey accordingly. For outstation trips charged per kilometer, there is no additional charge for stops (within reasonable limits). Our experienced drivers can also suggest good restaurants, scenic spots, and interesting places to visit along the route. If you want to add major detours or additional destinations, please inform us in advance so we can adjust the quote accordingly. For multi-day packages, we can create completely customized itineraries based on your group&apos;s interests, pace, and preferences.
                </div>
              </details>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-black via-gray-900 to-black rounded-2xl p-8 md:p-12 text-center text-white mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book Your <span className="text-yellow-400">Journey?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get instant quotes for any route across India. Professional service, competitive rates, 24/7 support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              href="tel:+917668570551"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center transition-all transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-3" />
              Call: +91-7668570551
            </a>
            <a
              href="https://wa.me/917668570551"
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
    </div>
  );
}