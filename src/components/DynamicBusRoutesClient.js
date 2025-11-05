'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  MapPin, Users, Clock, Star, Shield, Phone, MessageCircle, Bus, CheckCircle,
  ArrowRight, Route, Award, TrendingUp, IndianRupee
} from 'lucide-react';

export default function DynamicBusRoutesClient({ data }) {
  const { routeSlug, origin, destination, routeData, localSightseeing, fleet } = data;

  const [selectedBus, setSelectedBus] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-black via-gray-900 to-black py-24 overflow-hidden">
        {/* Hero Banner Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/bus/hero_section_image.png"
            alt={`${origin} to ${destination} Bus Service`}
            fill
            className="object-cover opacity-30"
            priority
            onError={(e) => {
              e.target.style.display = 'none';
            }}
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>

        <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center">
            {/* Route Badge */}
            <div className="inline-flex items-center bg-[#FACF2D] px-6 py-3 rounded-full text-black mb-6 font-bold">
              <Route className="w-5 h-5 mr-2" />
              Premium Bus Route
            </div>

            {/* Route Title */}
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              {origin} <span className="text-[#FACF2D]">to</span> {destination}
            </h1>

            {/* Route Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {routeData.distance && (
                <div className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl text-white flex items-center border border-white/20">
                  <MapPin className="w-6 h-6 mr-3 text-[#FACF2D]" />
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Distance</div>
                    <div className="text-xl font-bold">{routeData.distance}</div>
                  </div>
                </div>
              )}

              {routeData.duration && (
                <div className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl text-white flex items-center border border-white/20">
                  <Clock className="w-6 h-6 mr-3 text-[#FACF2D]" />
                  <div className="text-left">
                    <div className="text-xs text-gray-300">Duration</div>
                    <div className="text-xl font-bold">{routeData.duration}</div>
                  </div>
                </div>
              )}

              <div className="bg-white/10 backdrop-blur-sm px-8 py-4 rounded-xl text-white flex items-center border border-white/20">
                <Bus className="w-6 h-6 mr-3 text-[#FACF2D]" />
                <div className="text-left">
                  <div className="text-xs text-gray-300">Available Buses</div>
                  <div className="text-xl font-bold">{fleet.length} Options</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+917668570551"
                className="bg-[#FACF2D] text-black px-10 py-5 rounded-lg font-bold text-lg hover:bg-yellow-500 transition-all duration-300 flex items-center shadow-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: +91 76685 70551
              </a>

              <a
                href="https://wa.me/917668570551"
                className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-lg font-bold text-lg border-2 border-white/30 hover:bg-white/20 transition-all duration-300 flex items-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Available Buses Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-[#FACF2D]/10 px-4 py-2 rounded-full text-black font-semibold text-sm mb-4">
              <Bus className="w-4 h-4 mr-2" />
              Available Buses
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Choose Your Bus
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select from our premium fleet for your journey from {origin} to {destination}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fleet.map((bus, index) => (
              <div
                key={bus.id}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
                className={`group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-[#FACF2D] ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}
              >
                {/* Premium/Luxury Badge */}
                {bus.premium && (
                  <div className="absolute top-4 right-4 z-10 bg-[#FACF2D] text-black px-4 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
                    <Award className="w-3 h-3 mr-1" />
                    Premium
                  </div>
                )}
                {bus.luxury && (
                  <div className="absolute top-4 right-4 z-10 bg-black text-[#FACF2D] px-4 py-1 rounded-full text-xs font-bold flex items-center shadow-lg">
                    <Star className="w-3 h-3 mr-1" />
                    Luxury
                  </div>
                )}

                {/* Bus Image */}
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <Image
                    src={bus.image}
                    alt={bus.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg flex items-center shadow-lg">
                    <Users className="w-4 h-4 mr-2 text-black" />
                    <span className="font-bold text-black">{bus.capacity}</span>
                  </div>
                </div>

                {/* Bus Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{bus.name}</h3>

                  {/* Pricing */}
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg">
                      <span className="text-gray-600 font-medium flex items-center">
                        <Route className="w-4 h-4 mr-2" />
                        Per KM
                      </span>
                      <span className="text-black font-bold">{bus.ratePerKm}</span>
                    </div>

                    <div className="flex items-center justify-between bg-[#FACF2D]/10 px-4 py-3 rounded-lg">
                      <span className="text-gray-700 font-medium flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Minimum
                      </span>
                      <span className="text-black font-bold">{bus.minimumCharge}</span>
                    </div>

                    <div className="flex items-center justify-between bg-gray-50 px-4 py-3 rounded-lg">
                      <span className="text-gray-600 font-medium">Driver Allowance</span>
                      <span className="text-black font-bold">{bus.driverAllowance}</span>
                    </div>
                  </div>

                  {/* Ideal For */}
                  <div className="bg-gray-50 px-4 py-3 rounded-lg mb-4">
                    <p className="text-sm text-gray-700 font-medium">
                      <span className="font-bold text-black">Ideal for:</span> {bus.idealFor}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {bus.features.map((feature, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                        <CheckCircle className="w-3 h-3 mr-1 text-green-600" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Book Button */}
                  <button
                    onClick={() => {
                      setSelectedBus(bus);
                      window.location.href = `tel:+917668570551`;
                    }}
                    className="w-full bg-black text-[#FACF2D] py-4 rounded-lg font-bold hover:bg-gray-900 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg"
                  >
                    Book Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Local Sightseeing Section */}
      {localSightseeing.length > 0 && (
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-[#FACF2D]/10 px-4 py-2 rounded-full text-black font-semibold text-sm mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                Tourist Attractions
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Places to Visit in <span className="text-[#FACF2D]">{destination}</span>
              </h2>
              <p className="text-xl text-gray-600">
                Explore popular tourist destinations in {destination}
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {localSightseeing.map((place, index) => (
                <div
                  key={index}
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                  className={`bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 hover:border-[#FACF2D] rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg cursor-pointer ${mounted ? 'animate-fade-in' : 'opacity-0'}`}
                >
                  <MapPin className="w-8 h-8 mx-auto mb-3 text-[#FACF2D]" />
                  <h3 className="font-bold text-gray-900">{place}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Why Book with Us */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Book with <span className="text-[#FACF2D]">Us?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'Safe Travel', description: 'GPS tracking & sanitized vehicles' },
              { icon: Star, title: 'Expert Drivers', description: 'Professional & experienced' },
              { icon: TrendingUp, title: 'Best Prices', description: 'Transparent pricing, no hidden charges' },
              { icon: Clock, title: '24/7 Support', description: 'Always available for you' }
            ].map((feature, index) => (
              <div
                key={index}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
                className={`bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#FACF2D] text-center ${mounted ? 'animate-fade-in-up' : 'opacity-0'}`}
              >
                <div className="bg-[#FACF2D] w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Sticky Bottom CTA */}
      <div className="sticky bottom-0 left-0 right-0 bg-white border-t-4 border-[#FACF2D] shadow-2xl z-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-between items-center gap-4">
          <div>
            <p className="text-sm text-gray-600">Ready to travel?</p>
            <p className="text-xl font-bold text-gray-900">{origin} → {destination}</p>
          </div>

          <div className="flex gap-3">
            <a
              href="tel:+917668570551"
              className="bg-[#FACF2D] text-black px-8 py-3 rounded-lg font-bold flex items-center shadow-lg hover:bg-yellow-500 transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </a>

            <a
              href="https://wa.me/917668570551"
              className="bg-black text-[#FACF2D] px-8 py-3 rounded-lg font-bold flex items-center shadow-lg hover:bg-gray-900 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Add padding at bottom to prevent content from being hidden by sticky CTA */}
      <div className="h-20"></div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
