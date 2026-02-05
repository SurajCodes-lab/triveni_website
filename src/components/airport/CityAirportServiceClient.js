'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Centralized icon imports for better bundle optimization
import {
  Plane,
  Clock,
  Shield,
  MapPin,
  Car,
  ChevronRight,
  CheckCircle,
  Phone,
  Calendar,
  Luggage,
  Star,
  Users,
  Award,
  Navigation,
  Home
} from '@/components/ui/icons';

import dynamic from 'next/dynamic';

// Dynamically import FareCalculator (client-only, below fold)
const FareCalculator = dynamic(() => import('@/components/calculator/FareCalculator'), { ssr: false });

// SEO Components
import { FAQSection } from '@/components/seo/FAQSection';
import { CrossServiceLinks, NearbyDestinations } from '@/components/seo/RelatedContent';
import { generateAirportFAQs } from '@/lib/seo/faq-generator';
import { getNearbyDestinations } from '@/utilis/linkingHelper';

export default function CityAirportServiceClient({ city, citySlug, cityTours = [] }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    pickupLocation: '',
    dropLocation: city.airport,
    pickupDate: '',
    pickupTime: '',
    passengers: '1',
    vehicleType: 'sedan',
    flightNumber: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message =
      `🚖 *${city.name} Airport Transfer Booking*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📧 *Email:* ${formData.email || 'Not provided'}\n\n` +
      `📍 *Pickup:* ${formData.pickupLocation}\n` +
      `✈️ *Drop:* ${formData.dropLocation}\n` +
      `📅 *Date:* ${formData.pickupDate}\n` +
      `🕐 *Time:* ${formData.pickupTime}\n` +
      `👥 *Passengers:* ${formData.passengers}\n` +
      `🚗 *Vehicle:* ${formData.vehicleType}\n` +
      `✈️ *Flight Number:* ${formData.flightNumber || 'Not provided'}\n\n` +
      `*Airport:* ${city.airport} (${city.airportCode})\n` +
      `*Distance:* ${city.distance}\n\n` +
      `*Services Included:*\n` +
      `✓ Real-time flight tracking\n` +
      `✓ Professional chauffeur\n` +
      `✓ Meet & greet at ${city.airport}\n` +
      `✓ Luggage assistance\n` +
      `✓ On-time guarantee\n` +
      `✓ Fixed rates - No hidden charges\n\n` +
      `Please confirm availability and share the fare for ${city.name} airport transfer. Thank you!`;

    const whatsappUrl = `https://wa.me/917668570551?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Helper function to create route slug - handles multi-word city names
  const createRouteSlug = (cityName, destination) => {
    if (!cityName || !destination) return null;
    return `/${cityName.toLowerCase().replace(/\s+/g, '-')}-to-${destination.toLowerCase().replace(/\s+/g, '-')}`;
  };

  // Helper function to get route link from destination name
  const getDestinationLink = (destName) => {
    // Check if this is an outstation destination (in routes)
    const routeMatch = city.routes.find(route =>
      route.toLowerCase().includes(destName.toLowerCase()) ||
      destName.toLowerCase().includes(route.split(' to ')[1]?.toLowerCase())
    );

    if (routeMatch) {
      const parts = routeMatch.split(' to ');
      return createRouteSlug(parts[0], parts[1]);
    }

    // For local destinations, link to city page or sightseeing
    const destSlug = destName.toLowerCase().replace(/\s+/g, '-');
    return `/${citySlug}#${destSlug}`;
  };

  const features = useMemo(() => [
    {
      icon: Plane,
      title: 'Flight Tracking',
      description: 'Real-time flight monitoring for timely pickups'
    },
    {
      icon: Clock,
      title: '24/7 Service',
      description: 'Available round the clock for all flights'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Verified drivers and GPS-tracked vehicles'
    },
    {
      icon: Luggage,
      title: 'Luggage Assistance',
      description: 'Help with loading and unloading baggage'
    }
  ], []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section with Background Image */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-28"
        style={{
          backgroundImage: "url('/images/airport_section.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/85 to-black/65"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="text-white hover:text-yellow-400 transition-colors duration-200 flex items-center"
                >
                  <Home className="w-4 h-4 mr-1" />
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <ChevronRight className="w-4 h-4 mx-2 text-white" />
                  <Link
                    href="/airport-service"
                    className="text-white hover:text-yellow-400 transition-colors duration-200"
                  >
                    Airport Service
                  </Link>
                </div>
              </li>
              <li>
                <div className="flex items-center font-semibold">
                  <ChevronRight className="w-4 h-4 mx-2 text-white" />
                  <span className="text-yellow-400 text-xl">{city.name}</span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-block bg-yellow-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {city.airportCode} Airport Transfer
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {city.name} Airport Taxi Service - Book {city.airport} Cab in 60 Seconds
            </h1>
            <h2 className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-4">
              24/7 Premium {city.name} Airport Transfer | Flight Tracking + On-Time Guarantee
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-6 leading-relaxed">
              {city.description} <strong>Pre-book now</strong> for guaranteed rates starting ₹11/km!
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-yellow-400" />
                <span className="text-white">{city.distance}</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg flex items-center">
                <Plane className="w-5 h-5 mr-2 text-yellow-400" />
                <span className="text-white">{city.terminals}</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+917668570551"
                className="bg-yellow-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-700 transition-all duration-300 flex items-center justify-center font-semibold text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: +91 7668570551
              </a>
              <a
                href="#booking-form"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center font-semibold text-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book {city.name} Airport Taxi Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200 hover:shadow-lg transition-all"
              >
                <feature.icon className="w-10 h-10 text-yellow-600 mb-3" />
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Destinations from {city.name} Airport ({city.airportCode})
            </h2>
            <p className="text-lg text-gray-600">
              Book <strong>{city.name} airport taxi</strong> to these popular destinations with guaranteed on-time pickup
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {city.popularDestinations.map((dest, index) => {
              const destLink = getDestinationLink(dest.name);
              return (
                <Link
                  key={index}
                  href={destLink || '#'}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all hover:-translate-y-1 group"
                >
                  <Navigation className="w-8 h-8 text-yellow-600 mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{dest.name}</h3>
                  <div className="space-y-2 text-gray-600">
                    <p className="flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-yellow-600" />
                      {dest.distance}
                    </p>
                    <p className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-yellow-600" />
                      {dest.time}
                    </p>
                  </div>
                  <div className="flex items-center text-yellow-600 font-semibold text-sm mt-4">
                    View Cab Options
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sightseeing Tours in City */}
      {cityTours.length > 0 && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {city.name} Sightseeing Tours from Airport
              </h2>
              <p className="text-lg text-gray-600">
                Explore top attractions and destinations after your airport transfer
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cityTours.slice(0, 6).map((tour) => (
                <Link
                  key={tour.id}
                  href={`/sightseeing/${tour.slug}`}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-2 group"
                >
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={tour.heroImage}
                      alt={tour.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {tour.duration}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                      {tour.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {tour.shortDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-600">
                        <Star className="w-4 h-4 text-yellow-600 mr-1" />
                        <span className="text-sm font-semibold">{tour.reviews?.averageRating || '4.8'}</span>
                        <span className="text-sm ml-1">({tour.reviews?.totalReviews || 0})</span>
                      </div>
                      <div className="text-yellow-600 font-bold">
                        ₹{tour.price?.sedan || tour.price}
                      </div>
                    </div>
                    <div className="flex items-center text-yellow-600 font-semibold text-sm mt-4">
                      View Tour Details
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {cityTours.length > 6 && (
              <div className="text-center mt-8">
                <Link
                  href={`/sightseeing?city=${citySlug}`}
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  View All {city.name} Tours ({cityTours.length})
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Popular Routes */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Outstation Routes from {city.name}
            </h2>
            <p className="text-lg text-gray-600">
              Book outstation cabs for these popular routes
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {city.routes.map((route, index) => {
              const parts = route.split(' to ');
              const routeLink = parts.length === 2 ? createRouteSlug(parts[0], parts[1]) : '#';
              return (
                <Link
                  key={index}
                  href={routeLink}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all flex items-center justify-between group"
                >
                  <div>
                    <Car className="w-8 h-8 text-yellow-600 mb-2" />
                    <h3 className="text-lg font-bold text-gray-900">{route}</h3>
                    <p className="text-sm text-gray-600 mt-1">View pricing & book now</p>
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-yellow-600 group-hover:translate-x-1 transition-all" />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section id="booking-form" className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl shadow-2xl p-8 md:p-12 border-2 border-yellow-200">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Book Your {city.name} Airport Transfer
              </h2>
              <p className="text-gray-600">
                Fill the form below for instant booking confirmation via WhatsApp
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all outline-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="pickupLocation" className="block text-sm font-semibold text-gray-700 mb-2">
                    Pickup Location *
                  </label>
                  <input
                    type="text"
                    id="pickupLocation"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    placeholder="Enter pickup address"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="dropLocation" className="block text-sm font-semibold text-gray-700 mb-2">
                    Drop Location *
                  </label>
                  <input
                    type="text"
                    id="dropLocation"
                    name="dropLocation"
                    value={formData.dropLocation}
                    onChange={handleChange}
                    placeholder="Enter drop address"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="pickupDate" className="block text-sm font-semibold text-gray-700 mb-2">
                    Pickup Date *
                  </label>
                  <input
                    type="date"
                    id="pickupDate"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="pickupTime" className="block text-sm font-semibold text-gray-700 mb-2">
                    Pickup Time *
                  </label>
                  <input
                    type="time"
                    id="pickupTime"
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="passengers" className="block text-sm font-semibold text-gray-700 mb-2">
                    Passengers
                  </label>
                  <select
                    id="passengers"
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all outline-none"
                  >
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5+">5+ People</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="vehicleType" className="block text-sm font-semibold text-gray-700 mb-2">
                    Vehicle Type
                  </label>
                  <select
                    id="vehicleType"
                    name="vehicleType"
                    value={formData.vehicleType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all outline-none"
                  >
                    <option value="sedan">Sedan</option>
                    <option value="suv">SUV</option>
                    <option value="luxury">Luxury</option>
                    <option value="tempo">Tempo Traveller</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="flightNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                    Flight Number
                  </label>
                  <input
                    type="text"
                    id="flightNumber"
                    name="flightNumber"
                    value={formData.flightNumber}
                    onChange={handleChange}
                    placeholder="e.g., AI 101"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-500 focus:ring-4 focus:ring-yellow-100 transition-all outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 text-white text-lg font-bold py-4 px-8 rounded-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <Plane className="w-5 h-5 inline mr-2" />
                Book Your {city.name} Airport Cab Now
              </button>
              <p className="text-center text-sm text-gray-600 mt-4">
                <Shield className="w-4 h-4 inline mr-1" />
                Instant confirmation • No payment required • Free cancellation
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Fare Calculator */}
      <section className="py-16 px-4 bg-gray-50" id="fare-calculator">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Calculate Your {city.name} Airport Transfer Fare
            </h2>
            <p className="text-gray-600 text-lg">Get an instant price estimate for your airport trip</p>
          </div>
          <FareCalculator variant="compact" defaultFrom={city.name} className="max-w-md mx-auto" />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Immediate Airport Transfer?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Call us now for instant booking and on-the-spot service!
          </p>
          <a
            href="tel:+917668570551"
            className="inline-flex items-center bg-white text-gray-900 px-10 py-5 rounded-lg font-bold text-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            <Phone className="w-6 h-6 mr-3" />
            Call: +91 7668570551
          </a>
          <p className="mt-6 text-sm opacity-90">
            <CheckCircle className="w-4 h-4 inline mr-1" />
            Available 24/7 • Instant Confirmation • Best Rates Guaranteed
          </p>
        </div>
      </section>

      {/* SEO: FAQ Section */}
      <FAQSection
        faqs={generateAirportFAQs({
          city: city.name,
          airportName: city.airport,
          price: '11'
        })}
        title={`Frequently Asked Questions - ${city.name} Airport Taxi`}
        subtitle={`Get answers to common questions about ${city.airport} taxi service`}
        variant="cards"
      />

      {/* SEO: Nearby Destinations */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <NearbyDestinations
            currentCity={city.name}
            destinations={getNearbyDestinations(city.name, 6)}
            title="Airport Service in Nearby Cities"
            limit={6}
          />
        </div>
      </section>

      {/* More Services Section - Internal Linking */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Explore More Services in {city.name}
            </h2>
            <p className="text-lg text-gray-600">
              We offer comprehensive taxi and tour services across {city.name}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* City Taxi Service Link */}
            <Link
              href={`/${citySlug}`}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 group border-2 border-blue-200"
            >
              <Car className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {city.name} Taxi Service
              </h3>
              <p className="text-gray-600 mb-4">
                Complete taxi and cab rental services in {city.name} for local sightseeing, outstation trips, and more
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                Explore Services
                <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            {/* Sightseeing Tours Link */}
            <Link
              href="/sightseeing"
              className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 group border-2 border-green-200"
            >
              <MapPin className="w-12 h-12 text-green-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {city.name} Sightseeing Tours
              </h3>
              <p className="text-gray-600 mb-4">
                Discover top attractions and landmarks in {city.name} with our guided sightseeing tours
              </p>
              <div className="flex items-center text-green-600 font-semibold">
                View Tours
                <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            {/* All Airport Services Link */}
            <Link
              href="/airport-service"
              className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8 hover:shadow-xl transition-all hover:-translate-y-1 group border-2 border-yellow-200"
            >
              <Plane className="w-12 h-12 text-yellow-600 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                All Airport Services
              </h3>
              <p className="text-gray-600 mb-4">
                Explore airport taxi services in other cities across India with 24/7 availability
              </p>
              <div className="flex items-center text-yellow-600 font-semibold">
                View All Cities
                <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
