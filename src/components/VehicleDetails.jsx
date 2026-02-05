'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";
// Centralized icon imports for better bundle optimization
import {
  Users,
  Star,
  ShieldCheck,
  Calendar,
  Clock,
  Map,
  Shield,
  Car,
  ChevronRight,
  ChevronLeft,
  ChevronRight as Next,
  Info,
  DollarSign,
  CheckCircle2,
  AlertCircle,
  Truck,
  Fuel,
  SquareChartGantt,
  Phone,
  MapPin,
  Award,
  Zap,
  Heart,
  Settings,
  ThumbsUp,
  Navigation
} from "@/components/ui/icons";

import { phoneNumber, vehicleDetails } from "../utilis/data";

const VehicleDetails = ({ slug }) => {
  const [selectedSeating, setSelectedSeating] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("overview");
  const [isLoading, setIsLoading] = useState(true);

  const selectedVehicles =
    vehicleDetails.find((v) => v.type.toLowerCase().replace(/\s+/g, '-') === slug) ||
    vehicleDetails[0];

  // SEO optimized vehicle data
  const vehicleSEOData = {
    sedan: {
      title: "Book Sedan Car Rental in India | Triveni Cabs - Best Rates",
      description: "Rent premium sedan cars for outstation & local trips in India. AC sedans with driver at ₹11/km. Book online for Delhi, Mumbai, Agra, Jaipur travel.",
      keywords: "sedan car rental india, sedan taxi booking, ac sedan car hire, sedan car rental delhi, sedan booking mumbai, sedan taxi service",
      schema: {
        vehicleType: "Sedan",
        seatingCapacity: "4 passengers",
        priceRange: "₹11-15/km"
      }
    },
    suv: {
      title: "SUV Car Rental India | 6-7 Seater SUV Hire | Triveni Cabs",
      description: "Book 6-7 seater SUV cars for family trips in India. Innova, Ertiga SUV rental with driver. Best rates for outstation & local SUV booking.",
      keywords: "suv rental india, 7 seater car rental, innova car hire, ertiga booking, family car rental india, suv taxi service",
      schema: {
        vehicleType: "SUV",
        seatingCapacity: "6-7 passengers",
        priceRange: "₹15-18/km"
      }
    },
    "tempo-traveller": {
      title: "Tempo Traveller Rental India | 12-26 Seater | ₹23/km Onwards",
      description: "Book 12, 16, 17, 20 & 26 seater tempo traveller for group travel in India. AC tempo traveller with pushback seats, GPS tracking. Best rates from ₹23/km for pilgrimage, wedding, corporate tours.",
      keywords: "tempo traveller rental india, 12 seater tempo traveller, 17 seater tempo, 20 seater luxury tempo, 26 seater maharaja tempo, group travel india, tempo traveller hire delhi, pilgrimage tour vehicle",
      schema: {
        vehicleType: "Tempo Traveller",
        seatingCapacity: "12-26 passengers",
        priceRange: "₹23-27/km"
      }
    },
    "luxury-bus": {
      title: "Luxury Bus Rental India | Volvo 35-56 Seater | Premium Coaches",
      description: "Rent luxury Volvo & BharatBenz buses (35-56 seater) for premium group travel. LED TV, recliners, washroom, Wi-Fi. Perfect for corporate events, destination weddings, luxury tours from ₹45/km.",
      keywords: "luxury bus rental india, volvo bus hire, bharatbenz coach rental, 45 seater luxury bus, 56 seater premium bus, corporate bus rental, wedding luxury bus, tourist bus rental",
      schema: {
        vehicleType: "Luxury Bus",
        seatingCapacity: "35-56 passengers",
        priceRange: "₹45-65/km"
      }
    },
    bus: {
      title: "Bus Rental India | 22-41 Seater AC Bus | ₹30/km Onwards",
      description: "Book 22, 25, 27, 35 & 41 seater AC buses for group travel. Affordable rates from ₹30/km for school trips, corporate outings, pilgrimage, wedding guest transfers.",
      keywords: "bus rental india, 22 seater mini bus, 27 seater coach, 35 seater bus hire, 41 seater bus rental, group travel bus, school bus rental, corporate bus hire, pilgrimage bus booking",
      schema: {
        vehicleType: "Bus",
        seatingCapacity: "22-41 passengers",
        priceRange: "₹30-45/km"
      }
    }
  };

  const currentSEO = vehicleSEOData[slug] || vehicleSEOData.sedan;

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const seatingOptions = {
    "tempo-traveller": [
      { seats: 12, priceMultiplier: 1, popular: false, rate: "₹23/km", localRate: "₹6,000-7,500/Day" },
      { seats: 16, priceMultiplier: 1.09, popular: false, rate: "₹25/km", localRate: "₹7,500-8,500/Day" },
      { seats: 17, priceMultiplier: 1.13, popular: true, rate: "₹26/km", localRate: "₹9,000-10,500/Day" },
      { seats: 20, priceMultiplier: 1.17, popular: false, rate: "₹27/km", localRate: "₹9,000-10,000/Day" },
      { seats: 26, priceMultiplier: 1.13, popular: true, rate: "₹26/km", localRate: "₹10,000-11,000/Day", premium: true },
    ],
    bus: [
      { seats: 22, priceMultiplier: 1, popular: false, rate: "₹30-35/km", minCharge: "₹6,000/day" },
      { seats: 25, priceMultiplier: 1.07, popular: false, rate: "₹32-36/km", minCharge: "₹6,500/day" },
      { seats: 27, priceMultiplier: 1.13, popular: true, rate: "₹34-38/km", minCharge: "₹6,800/day" },
      { seats: 35, priceMultiplier: 1.2, popular: false, rate: "₹36-40/km", minCharge: "₹7,500/day" },
      { seats: 41, priceMultiplier: 1.33, popular: false, rate: "₹40-45/km", minCharge: "₹8,000/day" },
    ],
    "luxury-bus": [
      { seats: 35, priceMultiplier: 1, popular: false, rate: "₹36-40/km", minCharge: "₹7,500/day" },
      { seats: 41, priceMultiplier: 1.11, popular: false, rate: "₹40-45/km", minCharge: "₹8,000/day" },
      { seats: 45, priceMultiplier: 1.22, popular: true, rate: "₹45-50/km", minCharge: "₹9,000/day", premium: true },
      { seats: 49, priceMultiplier: 1.33, popular: false, rate: "₹48-55/km", minCharge: "₹9,500/day", premium: true },
      { seats: 56, priceMultiplier: 1.44, popular: true, rate: "₹55-65/km", minCharge: "₹10,000/day", luxury: true },
    ],
  };

  // Using only confirmed features from the data files
  const getVehicleFeatures = () => {
    return selectedVehicles.facilities || selectedVehicles.features || [];
  };

  const getSeatingOptions = () => {
    return seatingOptions[slug] || null;
  };

  const getAdjustedPrices = () => {
    if (!selectedSeating) return selectedVehicles;

    const multiplier = selectedSeating.priceMultiplier;
    const basePrice = parseInt(selectedVehicles.perKm?.replace(/[₹,]/g, "") || "12");

    return {
      ...selectedVehicles,
      perKm: `₹${Math.round(basePrice * multiplier)}/km`,
    };
  };

  const adjustedPrices = getAdjustedPrices();
  const availableSeatingOptions = getSeatingOptions();

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === selectedVehicles.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedVehicles.gallery.length - 1 : prev - 1
    );
  };

  const handleBookingClick = () => {
    const message = `Hi! I want to book a ${selectedVehicles.type}${selectedSeating ? ` (${selectedSeating.seats} seater)` : ''} for my travel. Please share the details.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleCallClick = () => {
    window.open(`tel:+91${phoneNumber}`, "_self");
  };

  // SEO Schema markup
  const generateSchema = () => {
    return {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": `${selectedVehicles.type} Rental Service`,
      "description": currentSEO.description,
      "brand": {
        "@type": "Brand",
        "name": "Triveni Cabs"
      },
      "offers": {
        "@type": "Offer",
        "price": selectedVehicles.perKm?.replace(/[₹\/km]/g, "") || "12",
        "priceCurrency": "INR",
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": selectedVehicles.perKm?.replace(/[₹\/km]/g, "") || "12",
          "priceCurrency": "INR",
          "unitText": "per kilometer"
        },
        "availability": "https://schema.org/InStock"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": selectedVehicles.rating || "4.5",
        "reviewCount": selectedVehicles.reviews || "100"
      },
      "vehicleEngine": {
        "@type": "EngineSpecification",
        "fuelType": "Petrol/Diesel"
      },
      "seatingCapacity": currentSEO.schema.seatingCapacity,
      "category": "Vehicle Rental Service"
    };
  };

  // Enhanced Components
  const ComfortFeatures = () => (
    <div className="space-y-6 p-6 md:p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Comfort & Convenience Features</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Experience premium comfort with our well-maintained {selectedVehicles.type.toLowerCase()}
          designed for Indian road conditions and long-distance travel.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <Car className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-lg font-semibold">Interior Comfort</h3>
          </div>
          <ul className="space-y-3">
            {getVehicleFeatures().slice(0, 4).map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <Zap className="w-8 h-8 text-green-600 mr-3" />
            <h3 className="text-lg font-semibold">Additional Features</h3>
          </div>
          <ul className="space-y-3">
            {getVehicleFeatures().slice(4, 8).map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
            {getVehicleFeatures().length <= 4 && (
              <>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-sm">Professional driver service</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-sm">24/7 customer support</span>
                </li>
              </>
            )}
          </ul>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <Shield className="w-8 h-8 text-yellow-600 mr-3" />
            <h3 className="text-lg font-semibold">Service Standards</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-sm">Verified vehicle documents</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-sm">Licensed professional drivers</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-sm">On-time pickup service</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-sm">Transparent pricing policy</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Confirmed Features Section */}
      <div className="mt-12 bg-gray-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4 text-center">Available Features for {selectedVehicles.type}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {getVehicleFeatures().map((feature, index) => (
            <div key={index} className="bg-white p-3 rounded-lg text-center shadow-sm hover:shadow-md transition-shadow">
              <span className="text-sm font-medium text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const PricingAndTaxes = () => (
    <div className="space-y-6 p-6 md:p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Transparent Pricing & Tax Information</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          No hidden charges. All-inclusive pricing for your {selectedVehicles.type.toLowerCase()} rental
          with complete transparency on costs and taxes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <DollarSign className="w-6 h-6 text-blue-600 mr-2" />
            Base Pricing Structure
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-white rounded-lg">
              <span className="font-medium">Per Kilometer Rate</span>
              <span className="text-lg font-bold text-blue-600">{adjustedPrices.perKm}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white rounded-lg">
              <span className="font-medium">Driver Allowance</span>
              <span className="text-lg font-bold text-blue-600">{selectedVehicles.driverCharges}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-white rounded-lg">
              <span className="font-medium">Daily KM Limit</span>
              <span className="text-lg font-bold text-blue-600">{selectedVehicles.perDayLimit}</span>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-4 flex items-center">
            <Info className="w-6 h-6 text-yellow-600 mr-2" />
            Additional Charges & Taxes
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 p-3 bg-white rounded-lg">
              <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>
                <span className="font-medium block">GST (5% for transport services)</span>
                <span className="text-sm text-gray-600">As per Indian tax regulations</span>
              </div>
            </li>
            <li className="flex items-start gap-3 p-3 bg-white rounded-lg">
              <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>
                <span className="font-medium block">State border taxes (if applicable)</span>
                <span className="text-sm text-gray-600">For interstate travel only</span>
              </div>
            </li>
            <li className="flex items-start gap-3 p-3 bg-white rounded-lg">
              <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5" />
              <div>
                <span className="font-medium block">Parking & toll charges</span>
                <span className="text-sm text-gray-600">Actual charges as applicable</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-green-50 p-6 rounded-xl border border-green-200">
        <h3 className="text-xl font-semibold mb-4 text-green-800">Payment Terms & Policies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-3 text-green-700">Payment Schedule</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-sm">25% advance booking amount</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-sm">75% before trip commencement</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-sm">Multiple payment options available</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 text-green-700">Cancellation Policy</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-sm">Free cancellation 24 hours before</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-sm">Partial refund for early cancellation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-sm">Emergency cancellation support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  const MaintenanceAndSafety = () => (
    <div className="space-y-6 p-6 md:p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Vehicle Maintenance & Safety Standards</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our {selectedVehicles.type.toLowerCase()} fleet undergoes rigorous maintenance and safety
          checks to ensure your journey is safe, comfortable, and reliable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <Settings className="w-8 h-8 text-blue-600 mr-3" />
            <h3 className="text-lg font-semibold">Vehicle Maintenance</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-sm">Regular vehicle inspections</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-sm">Engine performance checks</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-sm">Tire and brake maintenance</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-sm">AC system servicing</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <ShieldCheck className="w-8 h-8 text-green-600 mr-3" />
            <h3 className="text-lg font-semibold">Safety Standards</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-sm">Valid vehicle registration</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-sm">Current insurance coverage</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-sm">Driver license verification</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-sm">Emergency contact support</span>
            </li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl">
          <div className="flex items-center mb-4">
            <Award className="w-8 h-8 text-yellow-600 mr-3" />
            <h3 className="text-lg font-semibold">Service Quality</h3>
          </div>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-sm">Professional driver service</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-sm">On-time pickup guarantee</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-sm">Clean and hygienic vehicles</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-sm">Customer support available</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Service Standards */}
      <div className="bg-gray-50 p-6 rounded-xl">
        <h3 className="text-xl font-semibold mb-4 text-center">Our Service Standards</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white rounded-lg">
            <Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
            <span className="text-sm font-medium">Quality Service</span>
          </div>
          <div className="text-center p-4 bg-white rounded-lg">
            <ShieldCheck className="w-8 h-8 text-green-500 mx-auto mb-2" />
            <span className="text-sm font-medium">Safe Travel</span>
          </div>
          <div className="text-center p-4 bg-white rounded-lg">
            <Settings className="w-8 h-8 text-blue-500 mx-auto mb-2" />
            <span className="text-sm font-medium">Well Maintained</span>
          </div>
          <div className="text-center p-4 bg-white rounded-lg">
            <ThumbsUp className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <span className="text-sm font-medium">Customer Satisfaction</span>
          </div>
        </div>
      </div>
    </div>
  );

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-[#FFFCD1] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading vehicle details...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* SEO Head */}
      <Head>
        <title>{currentSEO.title}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords} />
        <meta property="og:title" content={currentSEO.title} />
        <meta property="og:description" content={currentSEO.description} />
        <meta property="og:image" content={selectedVehicles.image} />
        <meta property="og:type" content="product" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={currentSEO.title} />
        <meta name="twitter:description" content={currentSEO.description} />
        <meta name="twitter:image" content={selectedVehicles.image} />
        <link rel="canonical" href={`https://www.trivenicabs.in/vehicles/${slug}`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSchema()) }}
        />
      </Head>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gradient-to-b from-white to-[#FFFCD1]"
      >
        {/* Breadcrumb Navigation */}
        <nav
          className="relative bg-cover bg-center bg-no-repeat text-sm text-gray-600 py-32"
          aria-label="Breadcrumb"
          style={{
            backgroundImage: `url('/images/about/about_banner.webp')`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 max-w-7xl mx-auto px-4">
            <ol className="inline-flex items-center space-x-1 md:space-x-3" itemScope itemType="https://schema.org/BreadcrumbList">
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <a href="/" className="text-white hover:text-yellow-600" itemProp="item">
                  <span itemProp="name">Home</span>
                </a>
                <meta itemProp="position" content="1" />
              </li>
              <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
                <div className="flex items-center font-semibold">
                  <ChevronRight className="w-4 h-4 mx-2 text-white" />
                  <span className="text-yellow-400 text-xl" itemProp="name">
                    {selectedVehicles.type} Rental Details
                  </span>
                </div>
                <meta itemProp="position" content="2" />
              </li>
            </ol>
            <h1 className="text-3xl tracking-[0.07rem] md:text-4xl font-bold text-white mt-8">
              Book {selectedVehicles.type} Online - Best Rates Guaranteed
            </h1>
            <p className="text-white/90 mt-4 text-lg max-w-2xl">
              Professional {selectedVehicles.type.toLowerCase()} rental service with experienced drivers.
              Available for local trips, outstation travel, and airport transfers across India.
            </p>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-4 py-16">
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            itemScope
            itemType="https://schema.org/Product"
          >
            {/* Vehicle Image Gallery */}
            <div className="relative h-96">
              <Image
                src={
                  selectedVehicles.gallery?.[currentImageIndex] ||
                  selectedVehicles.image
                }
                alt={`${selectedVehicles.type} rental service - View ${currentImageIndex + 1} - Triveni Cabs`}
                fill
                sizes="(max-width: 768px) 100vw, 80vw"
                className="object-cover"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,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"
              />

              {/* Gallery Navigation */}
              {selectedVehicles.gallery?.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between p-4">
                  <button
                    onClick={prevImage}
                    className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                    aria-label="Next image"
                  >
                    <Next className="w-6 h-6" />
                  </button>
                </div>
              )}

              {/* Vehicle Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
                <h2 className="text-4xl font-bold mb-4" itemProp="name">
                  {selectedVehicles.type} Rental Service
                </h2>
                <div className="flex items-center max-sm:flex-col gap-4">
                  <div className="flex items-center" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    {/* <span className="ml-2 font-semibold" itemProp="ratingValue">
                      {selectedVehicles.rating}
                    </span> */}
                    {/* <span className="ml-1">
                      (<span itemProp="reviewCount">{selectedVehicles.reviews}</span> reviews)
                    </span> */}
                  </div>
                  <div className="flex items-center">
                    <Users className="w-5 h-5" />
                    <span className="ml-2">
                      {selectedSeating
                        ? `{selectedSeating.seats} Seater`
                        : selectedVehicles.seating}
                    </span>
                  </div>
                  <div className="flex items-center" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                    <span className="font-bold text-yellow-400" itemProp="price">
                      {adjustedPrices.perKm}
                    </span>
                    <meta itemProp="priceCurrency" content="INR" />
                  </div>
                </div>
              </div>
            </div>

            {/* Image Thumbnails */}
            {selectedVehicles.gallery?.length > 0 && (
              <div className="p-4 bg-gray-50">
                <div className="flex gap-4 overflow-x-auto pb-2 scroll-smooth scrollbar-thin scrollbar-thumb-yellow-700 scrollbar-track-gray-200">
                  {selectedVehicles.gallery.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 rounded-lg overflow-hidden relative w-[15rem] h-[9rem] ${currentImageIndex === index
                        ? "ring-2 ring-yellow-400"
                        : ""
                        }`}
                      aria-label={`View ${selectedVehicles.type} image ${index + 1}`}
                    >
                      <Image
                        src={image}
                        alt={`${selectedVehicles.type} view ${index + 1} - Triveni Cabs rental`}
                        fill
                        sizes="240px"
                        className="object-cover"
                        placeholder="blur"
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGBgYGBgYFxcYGhoYFxcXFxcYGBgYHSggGBolHRcXITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBEgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xAA7EAABAwIDBQYEBQMEAwEAAAABAAIRAyEEEjEFQVFhcQYigZGh8BMysaFCUtHh8RRi0hUjcoIHkqIz/8QAGwEAAgMBAQEAAAAAAAAAAAAAAAAAEQIDBAUG/8QAMREACgEDAgQEBgIDAQEAAAAAAAECAxEhMUEEElFhEyJxgQUykaGx8MHR4UJS8RQ/2gAMAwEAAhEDEQA/APLM4U1LHTdc6RFh1VsQaMaMtSFBSqXQeKr5xmEYHELCmERSxFkpxU8TvOCpbGdqA50BO6xgBYikl4lHpA0N9l4qMoyPNOe5cPu6pIFU4kJFOa4pJodkDkrJLqhSsHx8U05KhdVVUWHXVTi6JRIKhTwUyVYcCmg5XOEWQFQE7sGE4Ypj2I2UBypIFDjH3XMPqoKnvwTHV0uASNgptOuCoW1SpKNTkgB31dERhKgug31Nd/KNo1d6AYWHXwSo1rCFHiaJ4Ip1AIaAYkFLVOCb8JHNo5hCHqQHPUjKslqvLhZDvpOOijFkJC4h2YdOirJiFA5pyqF1c8kwLHCuABTRVM6pBBLqRG/Chuk/q/giIdKAy5kmXgJSldDJE4ppRByWSHJy4B1TbCKHAEq6eExySUGCXUk4hJVklY6EoJxKSE0MtTgkYTlwCwMTB0SJhJKSZMYB3SXLpKYmFYVyuMHiFUYTEIF9ZSURWCNEXKKa4XUOGfoqPFYsBGxbKpM9y5q7T0GlWKq5JGxsq57bKxr7IcMR7NllxzpjsRXqrqjU6hhjzTqtFNPQCoXITFU1HTYbgcLqq/FMhONNDOb75LO26A0JqOIVXi6GikFRFYmmOIKTQIqP2SqzEsgjlqt3gqANkHjsACD+6pnkUQasr9oMvB5KuZR1VhVbqExrDO7ggCxoGVtk9zw1Gy+Br78UNVqkpwFjSt1UeCoFOovurD4aqcRlBCNIqAquqAJ+IMKOpVwgjFAkNdQkX3VVUw0ndop8RjAbBB5wTqnYGPoYe1v2UtJ0clcUKSroOULGLBgphThJrRxKIbTRIFFoU4tTG0zoU8wgAdYJYYlFvoJpphMQhpkISHEJ4pQnBvFJiEMPRLKpcoTxTWFAdGOoSpThy0TUmIYE0mUnJhTJDwklKSRJkDKKAr4hWJYUDVoSsz5LUJGV1cqe0TkRXplWXwuS1a2A3EKpL4WcwuIUwqJ1iiRNOVjwgQdUBhKvNXm0GggcFFCBaNe+iw2MfJleobMZddZbbtcDopRkI83a2VxzUm1wKLxLZKDsKKQ7qMWAhVFWqr3EjKQRdVNVqgxsjCq10oytUugcg0XPwo3qoxOIFtFJCADIAdqIq7Q3bkPh7dVW18QdyCaUkqUVZNXxipcPXyuui6mJnVUuNYM0oYHCJlZp6Nz7qlLOqraTwoqtcqk2g4FGmx0Q9JE4moBuQorAIESMfZdK4T5KkVWWCY8QnKN0oEhlq+/wCE0Un8CuuefNcDT7/5UhJCFFppwO+E9zAB5KF9V3BCBuNp3T0R8KnPqgY4gkJJCcYRAtMuU1M+/BKU8Jw/dPSJZFKUeC4Wog7UVoG0iVYUqUITA0lYVtBDAsHxVqPa3cQssWywapDCoqGKSCYRgadbcmuwqvHBCYYCFNAJcxVZkI3prQIVzgiYQB7LJNTpg2U9VqDqMkKALqNRhSraiBxPJC0aTSuuYbN1KUGOhFnUJUDV0SgCRg9EspCzqiKJ8C9TObCgfQlOEyBaKLJCo63NEVXIWokkIptE1OaLIdjeCixU1DcmOZv4qpxWiKEI6uLqdKLB3lOGnwUDWfJaFD0Cqfq3ogaNN10qm7REuZ3CmGhDYYIapqgBUJqWirqz7qwY1QsYJQ4iqz6q0qLIvCpZyITaLM26UibMlvApqkoF3XbwuuqVeH9E5lH8kkVjouCmdCQICPqHunyQRKhLNTvuqz4gSd1Qw6oyUl0PU0kxzOSNZW1RFLCzqVX0atj4IulXlMkFjqcKauwIRMhOdICQZ8jXUe6UD6SLYEgAfaToQ1HCFXA2eLKtqYOVp9kUQLF4JYW2KSt3CRstLgSCgcOx3BFYZ0FLYgCHNAhAbMqd4KWRWX4kk5qvqYYh0hTYnRROMhOiLM7hxE8jdWdLkrurhswLTYhLHRvMFV3EJV1lAXR7K6hxjb+iqXiYVxVw6HxDFQKxJmhzEy+t0RlRqrMRSQH0S50KsKMJgpqCuwKsKZqpIHAZSlT0W21UZaBBVvQsq7BYmPNHvpyvEF1wrOYUCYZJDUcNJTgwNR9KmjA0EWRSYGNaU5xEaoktkKFw0TYDKU5+qidS4pU3K0AtmvTwE0tmCmskhTFiTJD8h4rmRdaLJ8dUhi3Mu1UNRsK2ZhEPXwvTipRVlJkMLqDKYD1LVpZBEpyJp0NE6EMa5NExjhEI2m4R5qalU0UlVLRVs1NW9Lv8A5VYOCt6z+8VV08OCdym4NmgwrQ4SrNmqq8KfBXVMoJlLiSYgCFlKyCcfCixKq6k9VZVMaqt7lJAFlhyFy1Q0oKJp04Q7CpfCqVJAYOg4C6p6mGRjXIevS1R4J2UtKi0K2lQzMWK2hs7vOIVli8Dlg80xrISo0bLgpNMrQ3JL9g4XSQM8qCdC4KnBJERjyFxwUrNFwJCBlrlO7coNlT0eFYs0SJg07ohMdRlCiAm4SSLE08wI4JNqhS06WidUppEhTgVzKFJlTaJEcKVyZKY6kkCE4FNcFMw9E3IRopCBKijoJThVPVOqI1D06esbynvpKAQPq1Z0Qf0SqBjV1tFR/BS/dFRpNaFLIkKGtWtqvPCIXC1KbFbhR/uNWXqsAJKtaJ8FnmvJG/pVrLR1nSqakIVjmdJSYEhOr4cySnCmUdiXZYQA1dgSTLqUlX9GmpkJIq8SSELlaFVbRcZpNHgIYvOINjTCuW4Rl7hZvaWGDKmcbiEYO6RNpPLaLLqpIxoN0MYXRXRAIlMgPwt0VSoQ1TnCEC4JhTUxVxh4E5rG+Ku31Sxx3T3U2lI5yqwqmkrUgOphTUHoOiAeaTgpA0d8u5Ib49wZ8sIrRQYd3e9lJYjQmCu1CpCxyTqAaLKBj7I8e6bKrRPvlMFdOqmUHKBs7iFxsIqqUFSx9lH4UJJhJiAsTfVCGnKnLlG+opIGA16cKCi65qoqSgKIp0FI5ycHlRAGNaE8sjcoHVVE+qmSCf6kBBiq5Q4NDVN+8oAqr6oOu1rQS4wAvMu02329TI42b7urg5GJQXIgv6mUwHxXmPaDbjq7iQYHAlZxu19o7rPMKOpi42I7JyKoS8qQbU1zTbqqHF1AY5IX/UHN6hVNaoTJRtE9zCH4u+6xW1cM59U9AtnXfKqsdQl15Ukw0Z4AZu6tJhhIVDgIgqwBUiJCR0gJEJJA9oBIEmSUiyFoSUdYKEkpIEW2HBMKnaSbBAFjSB0TnN0UALLFQunIb40lO+PAQBCykp2OJ0UQqBOYJSBkgRwckgHBOSAjLlFVK7RClKfQJ6lGEpRhJRh5U1FQiK5R+HqmJlUWGqypxVAJ70ikI24I3FGOqIOpVlTYWoqQRFWsoZ6oJJokX8OQh2+90U4NZPqFBUxA1RDsJ4FAwJxJ4rABwQ6F6YqDrVRooH1t6RM7UJQWIxkaKmqVbqDEYgSkTbNOHpFXlDCFqq9mbOe6S0qz/0h0TBQVFH8SLVCmw9IwI0VuyNETTw0GU4OjVZnawlWOFKoMM8grS7IpAm+/XyUUyjYRIWhwDQgq9JG1qAlK6Ihw3qR7IsgmL6eZwTqxNNt5QNCnLiVLjGQAVKqxLd1BfHC0pzGoR7IQjmwmGUkD6kpIDC/wC3Rd+M1d/p5SQMn/qmpdpk1xHAKOhtxwtmHlZdMKTMUKh7M4oUrjQ3TYWlbI2yKtS8wCLIvE1QIaFTYN+VgnVLGVbKMhNkqEXVeSqfE4hLF1oHJZ9tZxqZQrQTNPhxdSYmiCCPf3VJTcW92bEaFWmF/H1RYqDauD/EQitl4Xu3Cz+IqZoVvs+tIAQS4LypQOqh1NEUcOO8LodmEIMGCCpGhORYyGhJClp4YSCtJszZAqMzRa6zsYGJlHsDYjKzM0WCC2ds4UYDdVYYsZVJMKStE/GspNuVjey2J+I0yNFPjMaCEFs2sIuqbJEbKi5UPRMqAJrdVG9q6EM8IYyuCmUgnEIhVGPKKQJUbDa4kK02obrPbWIHAokQZPSBRmGCpqMqYOlLYCKiF6tMoZjUTWuhUhtNp1K0+yW2I5rPsjVaXZb+8ESJGmwbJRjiCsgEV8b3beComBl3C46i3goAKnTT0AZyGNEJIcj2pJAYj4bUl04X3eSS2GTZLTcJiS6lFBMZb6Iqj7lJJIRZYBuvJGYm4nlKSQSA8EJcOKosHe6SSljJ4G/qulxSSUqDYz0t04JJJCsQK7RNlxJMAKanqu4pJJMQJK7VSSTIjKYR9ZJJSExjVGk5JMQXX7rVSY+56pJJPsJkODsSFI79lxJKyJYHcu01z9FxJJCZ//Z"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Tab Navigation */}
            <div className="p-4 md:p-8">
              <div className="border-b border-gray-100 mb-6 overflow-x-auto">
                <nav className="flex space-x-8 min-w-max pb-1" role="tablist">
                  {[
                    { id: "overview", label: "Overview & Booking" },
                    { id: "comfort", label: "Features & Comfort" },
                    { id: "pricing", label: "Pricing & Terms" },
                    { id: "maintenance", label: "Safety & Standards" }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`md:pb-4 pb-1.5 px-0 md:px-1 whitespace-nowrap ${activeTab === tab.id
                        ? "border-b-2 border-yellow-400 md:text-lg text-sm text-yellow-600"
                        : "text-gray-500 hover:text-gray-700"
                        }`}
                      role="tab"
                      aria-selected={activeTab === tab.id}
                      aria-controls={`${tab.id}-panel`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>

              {/* Tab Content */}
              <div role="tabpanel" id={`${activeTab}-panel`}>
                {activeTab === "overview" && (
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Vehicle Details - Left Column */}
                    <div className="lg:col-span-2">
                      <h3 className="text-2xl font-semibold mb-6">
                        {selectedVehicles.type} Rental Details
                      </h3>
                      <div className="prose max-w-none mb-8" itemProp="description">
                        <p className="text-gray-600 leading-relaxed">
                          {selectedVehicles.description} Our {selectedVehicles.type.toLowerCase()}
                          comes with professional driver service, making it perfect for family trips,
                          business travel, airport transfers, and sightseeing tours across India.
                        </p>
                      </div>

                      {/* Seating Options */}
                      {availableSeatingOptions && (
                        <div className="mb-8">
                          <label className="block text-start text-sm font-medium text-gray-700 mb-3">
                            Select Seating Capacity
                          </label>
                          <select
                            value={selectedSeating?.seats || ""}
                            onChange={(e) => {
                              const seats = parseInt(e.target.value);
                              setSelectedSeating(
                                availableSeatingOptions.find(
                                  (opt) => opt.seats === seats
                                ) || null
                              );
                            }}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                            aria-label="Select seating capacity"
                          >
                            <option value="">Choose seating capacity</option>
                            {availableSeatingOptions.map((option) => (
                              <option key={option.seats} value={option.seats}>
                                {option.seats} Seater
                                {option.popular && " (Popular)"}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}

                      {/* Pricing Grid */}
                      <div className="grid grid-cols-2 gap-4 mb-8">
                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl">
                          <p className="text-gray-600 text-sm mb-1">Rate Per KM</p>
                          <p className="font-bold text-xl text-blue-700">
                            {adjustedPrices.perKm}
                          </p>
                        </div>
                        <div className="bg-gradient-to-r from-green-50 to-green-100 p-4 rounded-xl">
                          <p className="text-gray-600 text-sm mb-1">Driver Charges</p>
                          <p className="font-bold text-xl text-green-700">
                            {selectedVehicles.driverCharges}
                          </p>
                        </div>
                        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 p-4 rounded-xl">
                          <p className="text-gray-600 text-sm mb-1">Daily KM Limit</p>
                          <p className="font-bold text-xl text-yellow-700">
                            {selectedVehicles.perDayLimit}
                          </p>
                        </div>
                        <div className="bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-xl">
                          <p className="text-gray-600 text-sm mb-1">Cancellation</p>
                          <p className="font-bold text-xl text-red-700">
                            {selectedVehicles.cancellationCharge}
                          </p>
                        </div>
                      </div>

                      {/* Key Features */}
                      <h3 className="text-xl font-semibold mb-4">
                        Key Features & Amenities
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {getVehicleFeatures().map((feature, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                          >
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                            <span className="text-sm font-medium">{feature}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Local Sightseeing Packages */}
                      {selectedVehicles.localSightseeing && (
                        <div className="border-t pt-8">
                          <h3 className="text-xl font-semibold mb-6">
                            Local Sightseeing Packages
                          </h3>
                          <div className="space-y-4">
                            {selectedVehicles.localSightseeing.map((pkg, index) => (
                              <div
                                key={index}
                                className="bg-gradient-to-r from-gray-50 to-gray-100 p-5 rounded-xl border hover:border-yellow-400 transition-colors duration-300"
                              >
                                <div className="flex flex-col md:flex-row md:items-center gap-3 mb-4">
                                  <div className="flex items-center gap-3">
                                    <div className="bg-yellow-400/20 p-2 rounded-lg">
                                      <Clock className="w-5 h-5 text-yellow-600" />
                                    </div>
                                    <div>
                                      <h5 className="font-semibold text-lg">
                                        {pkg.duration} Package
                                      </h5>
                                      <p className="text-gray-600 text-sm">
                                        Distance: {pkg.distance}
                                      </p>
                                    </div>
                                  </div>
                                  <div className="md:ml-auto">
                                    <span className="text-2xl font-bold text-green-600">
                                      {pkg.price}
                                    </span>
                                    <p className="text-xs text-gray-500">All inclusive</p>
                                  </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {pkg.inclusive.map((item, i) => (
                                    <span
                                      key={i}
                                      className="inline-flex items-center gap-1.5 bg-white px-3 py-1 rounded-full text-sm text-gray-700 border"
                                    >
                                      <Shield className="w-3.5 h-3.5 text-green-500" />
                                      {item}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Booking Sidebar - Right Column */}
                    <div className="lg:col-span-1">
                      <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-2xl sticky top-8 border border-yellow-200"
                      >
                        <h3 className="text-2xl font-semibold mb-6 text-center">
                          Book Your {selectedVehicles.type}
                        </h3>

                        {/* Booking Buttons */}
                        <div className="space-y-4 mb-6">
                          <button
                            onClick={handleBookingClick}
                            className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold text-center hover:bg-green-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                            aria-label="Book via WhatsApp"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.119" />
                            </svg>
                            Book via WhatsApp
                          </button>

                          <button
                            onClick={handleCallClick}
                            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold text-center hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                            aria-label="Call for booking"
                          >
                            <Phone className="w-5 h-5" />
                            Call Now: +91 {phoneNumber}
                          </button>
                        </div>

                        {/* Service Highlights */}
                        <div className="space-y-4">
                          <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-green-600" />
                            <span className="text-sm">Instant Confirmation</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-blue-600" />
                            <span className="text-sm">Flexible Cancellation</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Shield className="w-5 h-5 text-purple-600" />
                            <span className="text-sm">24/7 Customer Support</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-red-600" />
                            <span className="text-sm">All India Service</span>
                          </div>
                        </div>

                        {/* Trust Indicators */}
                        {/* <div className="mt-6 pt-6 border-t border-yellow-300">
                          <div className="grid grid-cols-2 gap-4 text-center">
                            <div>
                              <div className="text-2xl font-bold text-green-600">
                                {selectedVehicles.rating}★
                              </div>
                              <div className="text-xs text-gray-600">Customer Rating</div>
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-blue-600">
                                {selectedVehicles.reviews}+
                              </div>
                              <div className="text-xs text-gray-600">Happy Customers</div>
                            </div>
                          </div>
                        </div> */}
                      </motion.div>
                    </div>
                  </div>
                )}
                {activeTab === "comfort" && <ComfortFeatures />}
                {activeTab === "pricing" && <PricingAndTaxes />}
                {activeTab === "maintenance" && <MaintenanceAndSafety />}
              </div>
            </div>
          </motion.div>

          {/* FAQ Section for SEO */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 bg-white rounded-2xl shadow-lg p-8"
            itemScope
            itemType="https://schema.org/FAQPage"
          >
            <h2 className="text-2xl font-bold text-center mb-8">
              Frequently Asked Questions - {selectedVehicles.type} Rental
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: `What is the per km rate for ${selectedVehicles.type} rental?`,
                  answer: `Our ${selectedVehicles.type} rental starts at ${adjustedPrices.perKm} plus driver charges of ${selectedVehicles.driverCharges}. Final cost depends on distance and duration.`
                },
                {
                  question: `Is driver included in ${selectedVehicles.type} booking?`,
                  answer: `Yes, all our ${selectedVehicles.type} rentals come with experienced, licensed drivers. Driver charges are ${selectedVehicles.driverCharges}.`
                },
                {
                  question: `What is the cancellation policy?`,
                  answer: `You can cancel your booking with a cancellation fee of ${selectedVehicles.cancellationCharge}. Free cancellation available 24 hours before the trip.`
                },
                {
                  question: `Are tolls and parking included?`,
                  answer: `Tolls, parking charges, and interstate taxes are additional and charged as per actuals during the trip.`
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-gray-50 p-4 rounded-lg"
                  itemProp="mainEntity"
                  itemScope
                  itemType="https://schema.org/Question"
                >
                  <h3 className="font-semibold mb-2" itemProp="name">{faq.question}</h3>
                  <div itemProp="acceptedAnswer" itemScope itemType="https://schema.org/Answer">
                    <p className="text-gray-600 text-sm" itemProp="text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default VehicleDetails;