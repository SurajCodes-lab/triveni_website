'use client';

import React, { useState } from 'react';
import FamilyFacts from '@/components/seo/FamilyFacts';
import Link from 'next/link';
import clientSlugs from '@/generated/client-slugs.json';
// Centralized icon imports for better bundle optimization
import { ArrowRight, MapPin, Clock, Camera, Star, Building, Mountain, Waves, TreePine, Coffee, Eye, Phone, MessageCircle, Car, Users, Route as RouteIcon, ExternalLink, ArrowLeft, CheckCircle, ChevronRight, Shield, WhatsAppIcon } from '@/components/ui/icons';

// SEO Components
import { FAQSection } from '@/components/seo/FAQSection';
import { CrossServiceLinks } from '@/components/seo/RelatedContent';
import { generateCityFAQs } from '@/lib/seo/faq-generator';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import { trackPhoneCall, trackWhatsAppClick } from '@/utilis/analytics';

const TouristAttractionsClient = ({ data }) => {
  const [selectedType, setSelectedType] = useState('all');
  const [expandedCard, setExpandedCard] = useState(null);

  const { city, citySlug, attractions } = data;

  // Week 48: the "Book Tempo to {city}" CTA linked /tempo-traveller/delhi-to-<city>
  // for every attractions page, but that corridor is not built for Ahmedabad or
  // Lucknow, and the Delhi page linked delhi-to-delhi. Use the corridor page
  // when the manifest has it, else the city's own tempo page, else the hub.
  const tempoSlugs = clientSlugs['tempo-traveller'] || [];
  const tempoHref = tempoSlugs.includes(`delhi-to-${citySlug}`) ? `/tempo-traveller/delhi-to-${citySlug}`
    : tempoSlugs.includes(citySlug) ? `/tempo-traveller/${citySlug}` : '/tempo-traveller';

  const getTypeColor = (type) => {
    const colors = {
      'Heritage': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Spiritual': 'bg-purple-100 text-purple-800 border-purple-200',
      'Royal': 'bg-red-100 text-red-800 border-red-200',
      'Architecture': 'bg-blue-100 text-blue-800 border-blue-200',
      'Lakes': 'bg-cyan-100 text-cyan-800 border-cyan-200',
      'Fort': 'bg-orange-100 text-orange-800 border-orange-200',
      'Memorial': 'bg-gray-100 text-gray-800 border-gray-200',
      'Palace': 'bg-pink-100 text-pink-800 border-pink-200',
      'Adventure': 'bg-green-100 text-green-800 border-green-200',
      'Shopping': 'bg-indigo-100 text-indigo-800 border-indigo-200',
      'Scenic': 'bg-teal-100 text-teal-800 border-teal-200',
      'Patriotic': 'bg-orange-100 text-orange-800 border-orange-200',
      'Wellness': 'bg-emerald-100 text-emerald-800 border-emerald-200'
    };
    return colors[type] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getTypeIcon = (type) => {
    const icons = {
      'Heritage': Building,
      'Spiritual': Building,
      'Royal': Building,
      'Architecture': Building,
      'Lakes': Waves,
      'Fort': Building,
      'Memorial': Building,
      'Palace': Building,
      'Adventure': Mountain,
      'Shopping': Building,
      'Scenic': Mountain,
      'Patriotic': Building,
      'Wellness': TreePine
    };
    return icons[type] || Building;
  };

  const getUniqueTypes = () => {
    const types = [...new Set(attractions.map(attraction => attraction.type))];
    return types;
  };

  const getFilteredAttractions = () => {
    if (selectedType === 'all') return attractions;
    return attractions.filter(attraction => attraction.type === selectedType);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 py-12 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 bg-[url('/images/tourist-bg.jpg')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Visual Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-2 text-sm bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <li>
                <Link href="/tourist-spots" className="text-white/70 hover:text-white transition-colors">
                  Tourist Attractions
                </Link>
              </li>
              <ChevronRight className="w-4 h-4 text-white/50" />
              <li className="text-yellow-400 font-medium">
                {city}
              </li>
            </ol>
          </nav>

          <div className="text-center">
            <div className="flex items-center justify-center mb-6 gap-3 md:gap-4">
              <Camera className="w-8 h-8 md:w-12 md:h-12 text-yellow-400 flex-shrink-0" />
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Tourist Attractions in <span className="text-yellow-400">{city}</span>
              </h1>
            </div>

            {/* Week 48: the direct answer built from this city's own list (FamilyFacts, attractions). */}
            <div className="text-left max-w-3xl mx-auto">
              <FamilyFacts family="attractions" data={data} />
            </div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Discover the most beautiful and historic places to visit in {city}. From ancient monuments to spiritual sites, 
              explore the rich heritage and culture of this amazing destination.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-yellow-400" />
                {attractions.length} Attractions
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white flex items-center">
                <Clock className="w-5 h-5 mr-2 text-yellow-400" />
                Complete Guide
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full text-white flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-400" />
                Must Visit Places
              </div>
            </div>

            {/* Above-the-fold CTAs */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6">
              <a
                onClick={() => trackPhoneCall('tourist_attractions_hero')}
                href="tel:+917668570551"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg"
              >
                <Phone className="w-5 h-5" /> Call 7668570551
              </a>
              <a
                onClick={() => trackWhatsAppClick('tourist_attractions_hero')}
                href={`https://wa.me/917668570551?text=${encodeURIComponent(`Hi, I want to plan a trip to visit attractions in ${city}. Please share details.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg"
              >
                <WhatsAppIcon className="w-5 h-5" /> WhatsApp Us
              </a>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-gray-200">
              <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.9&#9733; Rated</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-yellow-400" /> 10,000+ Trips</span>
              <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-yellow-400" /> Verified Drivers</span>
              <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-yellow-400" /> No Advance Payment</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-10">
        {/* Filter Section */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 mb-12">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-medium text-gray-700">Filter by type:</span>
            <button
              onClick={() => setSelectedType('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedType === 'all'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              All ({attractions.length})
            </button>
            {getUniqueTypes().map(type => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedType === type
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {type} ({attractions.filter(a => a.type === type).length})
              </button>
            ))}
          </div>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10 sm:mb-16">
          {getFilteredAttractions().map((attraction, index) => {
            const IconComponent = getTypeIcon(attraction.type);
            
            return (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <IconComponent className="w-full h-full" />
                  </div>
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className="w-8 h-8" />
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(attraction.type)}`}>
                        {attraction.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 leading-tight">{attraction.name}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {expandedCard === index ? attraction.description : `${attraction.description.slice(0, 150)}...`}
                  </p>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Highlights:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {attraction.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      {expandedCard === index ? 'Show Less' : 'Read More'}
                    </button>
                    <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      View Location
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Book Tempo CTA */}
        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 md:p-12 text-center text-white mb-10 sm:mb-16">
          <div className="flex items-center justify-center gap-3 md:gap-4 mb-6">
            <Car className="w-8 h-8 md:w-12 md:h-12 flex-shrink-0" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Ready to Visit <span className="text-yellow-300">{city}?</span>
            </h2>
          </div>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Book a comfortable tempo traveller to explore all these amazing attractions in {city}. 
            Professional drivers, AC vehicles, and competitive rates.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href={tempoHref}
              className="bg-white hover:bg-gray-100 text-green-600 font-bold py-4 px-8 rounded-lg flex items-center justify-center transition-all transform hover:scale-105"
            >
              <RouteIcon className="w-5 h-5 mr-3" />
              Book Tempo to {city}
            </Link>
            <a
              onClick={() => trackPhoneCall('tourist_attractions_midcta')}
              href="tel:+917668570551"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-lg flex items-center justify-center transition-all transform hover:scale-105"
            >
              <Phone className="w-5 h-5 mr-3" />
              Call: +91-7668570551
            </a>
          </div>
        </div>

        {/* SEO: FAQ Section */}
        <div className="mb-10 sm:mb-16">
          <FAQSection
            faqs={generateCityFAQs({
              city: city,
              services: ['sightseeing', 'taxi', 'tempo-traveller'],
              tours: attractions.slice(0, 5).map(a => a.name)
            })}
            title={`Frequently Asked Questions About ${city}`}
            subtitle={`Get answers to common questions about visiting ${city}`}
            variant="cards"
          />
        </div>

        {/* SEO: Cross Service Links */}
        <div className="mb-10 sm:mb-16">
          <CrossServiceLinks
            city={city}
            services={['sightseeing', 'airport', 'wedding', 'corporate']}
            title={`Our Services in ${city}`}
          />
        </div>

        {/* Quick Contact + Lead Capture */}
        <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 rounded-2xl shadow-lg p-8 mb-10 sm:mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">Need Help Planning Your Trip?</h3>
              <p className="text-gray-200 mb-6 max-w-xl">
                Our travel experts can help you create a customized itinerary for visiting {city} attractions.
                Get personalized recommendations and book the perfect cab or tempo traveller for your group.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <a
                  onClick={() => trackWhatsAppClick('tourist_attractions_quickcontact')}
                  href={`https://wa.me/917668570551?text=${encodeURIComponent(`Hi, I need help planning a trip to ${city}. Please share details.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center transition-all"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Chat
                </a>
                <a
                  onClick={() => trackPhoneCall('tourist_attractions_quickcontact')}
                  href="tel:+917668570551"
                  className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-lg flex items-center justify-center transition-all"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>

            <div className="flex justify-center">
              <QuickEnquiryForm fromCity={city} pageType="route" />
            </div>
          </div>
        </div>
      </div>

      {/* Week 48: every listed place with its type and what it is known for (FamilyFacts, attractions). */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <FamilyFacts family="attractions" data={data} details />
      </div>

      <SetStickyCta
        label={`${city} Attractions`}
        whatsappText={`Hi, I want to plan a trip to visit attractions in ${city}. Please share details.`}
      />
    </div>
  );
};

export default TouristAttractionsClient;