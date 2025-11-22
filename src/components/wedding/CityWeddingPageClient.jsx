'use client';

import { useState, useEffect } from "react";
import {
  Heart, Users, Car, Phone, MapPin, Clock, Shield, Star,
  ChevronRight, Sparkles, Music, Camera, Gift, CheckCircle,
  Crown, Award, CreditCard, UserCheck, Zap, Calendar, Navigation
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BsWhatsapp } from 'react-icons/bs';
import { phoneNumber } from "@/utilis/data";

// Hero Section with Animation (Same design as main wedding page)
const CityWeddingHero = ({ city }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50">
        <div className="absolute inset-0 bg-[url('/images/about/about_banner.webp')] bg-cover bg-center opacity-10"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 animate-float">
          <Heart className="w-12 h-12 text-pink-300 opacity-30" />
        </div>
        <div className="absolute top-40 right-20 animate-float-delayed">
          <Sparkles className="w-16 h-16 text-yellow-300 opacity-30" />
        </div>
        <div className="absolute bottom-40 left-1/4 animate-float">
          <Crown className="w-14 h-14 text-purple-300 opacity-30" />
        </div>
        <div className="absolute bottom-20 right-1/3 animate-float-delayed">
          <Heart className="w-10 h-10 text-pink-300 opacity-30" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-600 hover:text-[#FACF2D] transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <li>
              <Link href="/wedding" className="text-gray-600 hover:text-[#FACF2D] transition-colors">
                Wedding Services
              </Link>
            </li>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <li className="text-[#FACF2D] font-medium">{city.name}</li>
          </ol>
        </nav>

        {/* Main Heading with Animation */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <MapPin className="w-8 h-8 md:w-10 md:h-10 text-[#FACF2D] animate-bounce" />
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-[#FACF2D] bg-clip-text text-transparent">
              {city.name} Wedding Cars
            </h1>
            <Crown className="w-8 h-8 md:w-10 md:h-10 text-[#FACF2D] animate-bounce" />
          </div>

          <p className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
            Make Your {city.name} Wedding Journey <span className="text-[#FACF2D]">Unforgettable</span>
          </p>

          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Luxury Wedding Cars • Premium Baraat Tempo Travellers • Professional Chauffeurs<br/>
            BMW | Audi | Mercedes | Vintage Cars | Decorated Vehicles
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-[#FACF2D]">5000+</div>
              <div className="text-sm text-gray-600">Vehicles</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-pink-600">10000+</div>
              <div className="text-sm text-gray-600">Happy Couples</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-green-600">24/7</div>
              <div className="text-sm text-gray-600">Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:+91${phoneNumber}`}
              className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-xl transform hover:scale-105 transition-all"
            >
              <Phone className="w-6 h-6" />
              Call Now - {phoneNumber}
            </a>
            <a
              href={`https://wa.me/${phoneNumber}?text=Hi, I'm interested in wedding car rental in ${city.name}. Please share details and packages.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-xl transform hover:scale-105 transition-all"
            >
              <BsWhatsapp className="w-6 h-6" />
              WhatsApp Booking
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <path
            fill="#ffffff"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

// City Overview Section
const CityOverview = ({ city }) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 px-6 py-2 rounded-full mb-4 shadow-sm">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">Wedding Car Rental in {city.name}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-[#FACF2D] bg-clip-text text-transparent">
            Your Trusted Wedding Transportation Partner in {city.name}
          </h2>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            {city.description}
          </p>
        </div>

        {/* City Specialties */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {city.specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <p className="text-gray-800 font-medium">{specialty}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Price Range */}
        <div className="text-center bg-gradient-to-r from-[#FACF2D] to-yellow-500 rounded-2xl p-8 shadow-xl">
          <div className="flex items-center justify-center gap-3 mb-3">
            <CreditCard className="w-8 h-8 text-white" />
            <h3 className="text-2xl md:text-3xl font-bold text-white">Affordable Pricing</h3>
          </div>
          <p className="text-white text-xl font-semibold mb-2">Starting from {city.priceRange}</p>
          <p className="text-white/90">Customized packages available for all budgets</p>
        </div>
      </div>
    </section>
  );
};

// Popular Wedding Cars in City
const PopularCars = ({ city }) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full mb-4">
            <Car className="w-5 h-5" />
            <span className="font-semibold">Most Popular in {city.name}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Popular <span className="text-[#FACF2D]">Wedding Cars</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {city.popularCars.map((car, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all border-2 border-gray-100 hover:border-[#FACF2D]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-[#FACF2D] to-yellow-500 rounded-xl flex items-center justify-center">
                  <Car className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{car}</h3>
              </div>
              <a
                href={`https://wa.me/${phoneNumber}?text=Hi, I'm interested in ${car} for my wedding in ${city.name}. Please share details.`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-pink-600 to-purple-600 text-white py-3 rounded-xl font-bold hover:from-pink-700 hover:to-purple-700 transition-all"
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Popular Wedding Venues
const PopularVenues = ({ city }) => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">Popular Wedding Venues</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            We Serve <span className="text-[#FACF2D]">Top Venues</span> in {city.name}
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Professional transportation services to all major wedding venues
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {city.popularVenues.map((venue, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{venue.name}</h3>
                  <p className="text-gray-600 flex items-center gap-2">
                    <Navigation className="w-4 h-4" />
                    {venue.area}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Nearby Destinations
const NearbyDestinations = ({ city }) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full mb-4">
            <Navigation className="w-5 h-5" />
            <span className="font-semibold">Multi-City Coverage</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            From <span className="text-[#FACF2D]">{city.name}</span> To Nearby Cities
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We also provide wedding car services for destination weddings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {city.nearbyDestinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all border-2 border-gray-100 hover:border-green-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Navigation className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{destination.name}</h3>
                <p className="text-gray-600 text-sm mb-1">{destination.distance}</p>
                <p className="text-[#FACF2D] font-semibold">{destination.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Our Wedding Car Collection Section (Same as main page)
const WeddingCarCollection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-pink-50/30 to-purple-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 px-6 py-2 rounded-full mb-4 shadow-sm">
            <Heart className="w-5 h-5" />
            <span className="font-semibold">Our Wedding Car Collection</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-600 via-purple-600 to-[#FACF2D] bg-clip-text text-transparent">
            Choose from our exclusive fleet
          </h2>
        </div>

        <div className="space-y-8">
          {/* Luxury Cars */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-pink-100 hover:border-pink-300 transition-all">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-full lg:w-1/3">
                <div className="relative h-64 w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/wedding/luxury_car.jpg"
                    alt="Luxury Wedding Cars - BMW, Audi, Mercedes"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-2/3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">🚘</div>
                  <h3 className="text-3xl font-bold text-gray-800">Luxury Cars</h3>
                </div>
                <p className="text-xl text-gray-600 mb-4 font-medium">BMW, Audi, Mercedes, Jaguar</p>
                <p className="text-gray-600 leading-relaxed">
                  Make a grand entrance on your special day with our premium luxury car fleet. Perfect for the bride and groom, these vehicles combine elegance, comfort, and style to create unforgettable memories.
                </p>
              </div>
            </div>
          </div>

          {/* Premium Sedans */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-100 hover:border-purple-300 transition-all">
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
              <div className="w-full lg:w-1/3">
                <div className="relative h-64 w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/car/sedan.webp"
                    alt="Premium Sedans"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-2/3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">🚖</div>
                  <h3 className="text-3xl font-bold text-gray-800">Premium Sedans</h3>
                </div>
                <p className="text-xl text-gray-600 mb-4 font-medium">Honda City, Ciaz, Verna</p>
                <p className="text-gray-600 leading-relaxed">
                  Elegant and comfortable sedans perfect for family members and close relatives. These well-maintained vehicles ensure a smooth and stylish ride throughout your wedding celebrations.
                </p>
              </div>
            </div>
          </div>

          {/* Premium SUVs */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-yellow-100 hover:border-yellow-300 transition-all">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-full lg:w-1/3">
                <div className="relative h-64 w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/wedding/premium_suv.jpg"
                    alt="Premium SUVs for Wedding - Fortuner, Innova Crysta"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-2/3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">🚙</div>
                  <h3 className="text-3xl font-bold text-gray-800">Premium SUVs</h3>
                </div>
                <p className="text-xl text-gray-600 mb-4 font-medium">Toyota Fortuner, Innova Crysta, Scorpio</p>
                <p className="text-gray-600 leading-relaxed">
                  Spacious and powerful SUVs ideal for transporting families and VIP guests. With ample luggage space and comfortable seating, these vehicles are perfect for long-distance wedding travel.
                </p>
              </div>
            </div>
          </div>

          {/* Tempo Travellers */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-pink-100 hover:border-pink-300 transition-all">
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
              <div className="w-full lg:w-1/3">
                <div className="relative h-64 w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/car/tempo_traveller.webp"
                    alt="Tempo Travellers"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-2/3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">🚌</div>
                  <h3 className="text-3xl font-bold text-gray-800">Tempo Travellers</h3>
                </div>
                <p className="text-xl text-gray-600 mb-4 font-medium">9–26 Seater AC/Non-AC options for baraat & guests</p>
                <p className="text-gray-600 leading-relaxed">
                  Perfect for baraat parties and group transportation! Our tempo travellers come with music systems, comfortable seating, and can be decorated as per your theme. Available in various seating capacities to accommodate your entire wedding party.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Why Choose Us Section
const WhyChooseUs = ({ city }) => {
  const features = [
    {
      icon: Car,
      title: "5000+ Cars, SUVs & Tempo Travellers",
      description: `Extensive fleet in ${city.name} covering luxury cars, premium sedans, SUVs, and tempo travellers to meet all your wedding transportation needs`,
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: UserCheck,
      title: "Professional & uniformed chauffeurs",
      description: `Experienced, courteous, and well-groomed drivers in ${city.name} dedicated to making your journey comfortable and memorable`,
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      icon: Sparkles,
      title: "Vehicles decorated for wedding functions",
      description: "Beautiful floral decorations and custom themes available on request to match your wedding aesthetic perfectly",
      gradient: "from-pink-400 to-red-400"
    },
    {
      icon: Clock,
      title: "Timely pick-up & drop for baraat & guests",
      description: "Guaranteed punctual service ensuring your baraat and guests arrive on time for every ceremony",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: CreditCard,
      title: "Affordable packages for luxury cars",
      description: "Competitive pricing with transparent rates and no hidden charges, making luxury accessible for every wedding",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Zap,
      title: "Customized wedding travel solutions",
      description: "Flexible packages tailored to your specific requirements, from single-day bookings to multi-day wedding celebrations",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-yellow-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 px-6 py-3 rounded-full mb-6 shadow-md">
            <Heart className="w-6 h-6 animate-pulse" />
            <span className="font-bold text-lg">Why Choose Us in {city.name}?</span>
            <Heart className="w-6 h-6 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-[#FACF2D] bg-clip-text text-transparent">
            Making Your {city.name} Wedding Journey Extraordinary
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-2 border-pink-100 hover:border-pink-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <div className="flex items-start gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                <h3 className="text-xl font-bold text-gray-800 leading-tight">{feature.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQ = ({ city }) => {
  const faqs = [
    {
      question: `What types of wedding cars are available in ${city.name}?`,
      answer: `We offer luxury cars (BMW, Audi, Mercedes, Jaguar), premium sedans, SUVs (Fortuner, Innova Crysta), tempo travellers (9-26 seater), and vintage cars in ${city.name}. All vehicles are well-maintained and available with professional chauffeurs.`
    },
    {
      question: `Do you provide car decoration for weddings in ${city.name}?`,
      answer: `Yes! We provide beautiful floral and theme-based decoration services in ${city.name}. You can choose from our standard decoration packages or request custom decorations based on your wedding theme and preferences.`
    },
    {
      question: `How much does wedding car rental cost in ${city.name}?`,
      answer: `Wedding car rental prices in ${city.name} range from ${city.priceRange} depending on the vehicle type, duration, and decoration requirements. We offer customized packages to fit every budget. Contact us for detailed pricing.`
    },
    {
      question: `How far in advance should I book a wedding car in ${city.name}?`,
      answer: `We recommend booking at least 2-4 weeks in advance, especially during wedding season (October to March) in ${city.name}. However, we also accommodate last-minute bookings based on vehicle availability.`
    },
    {
      question: `Do you provide baraat tempo travellers in ${city.name}?`,
      answer: `Yes! We provide AC and Non-AC tempo travellers (9-26 seater) for baraat parties in ${city.name}. Our tempo travellers come with music systems, comfortable seating, and can be decorated as per your wedding theme.`
    },
    {
      question: `Are the chauffeurs professional and experienced in ${city.name}?`,
      answer: `Absolutely! All our chauffeurs in ${city.name} are professional, uniformed, well-trained, and experienced in handling wedding events. They are familiar with local routes and ensure timely, safe transportation for your special day.`
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-[#FACF2D]">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Everything you need to know about wedding car rental in {city.name}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold mb-2 flex items-start gap-2">
                <span className="text-[#FACF2D] flex-shrink-0">Q.</span>
                {faq.question}
              </h3>
              <p className="text-gray-600 pl-6">
                <span className="text-gray-400 mr-2">A.</span>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Final CTA Section
const FinalCTA = ({ city }) => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-pink-600 via-purple-600 to-[#FACF2D] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Heart className="absolute top-10 left-10 w-20 h-20 opacity-20 animate-float" />
        <Crown className="absolute bottom-10 right-10 w-24 h-24 opacity-20 animate-float-delayed" />
        <Sparkles className="absolute top-1/2 left-1/4 w-16 h-16 opacity-20 animate-float" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <Crown className="w-16 h-16 mx-auto mb-6 animate-bounce" />
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Ready to Make Your {city.name} Wedding Royal?
        </h2>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Book your luxury wedding car today and make memories that last forever!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <a
            href={`tel:+91${phoneNumber}`}
            className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            <Phone className="w-6 h-6" />
            Call Now - {phoneNumber}
          </a>
          <a
            href={`https://wa.me/${phoneNumber}?text=Hi, I want to book wedding car services in ${city.name}. Please share details and availability.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            <BsWhatsapp className="w-6 h-6" />
            WhatsApp Us
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>Instant Confirmation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>Best Price Guarantee</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </section>
  );
};

// Related Services Section - Interlinking
const RelatedServices = ({ city, citySlug }) => {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-700 px-6 py-2 rounded-full mb-4 shadow-sm">
            <Car className="w-5 h-5" />
            <span className="font-semibold">More Services in {city.name}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Explore Our Other Services in <span className="text-[#FACF2D]">{city.name}</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Beyond weddings, we offer comprehensive cab services for all your travel needs in {city.name}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Main City Service Link */}
          <Link
            href={`/${citySlug}`}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-8 hover:shadow-xl transform hover:-translate-y-1 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Car className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {city.name} Cab Service
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete taxi and cab rental services in {city.name}. Outstation trips, local tours, airport transfers, and more.
                </p>
                <div className="flex items-center text-blue-600 font-semibold">
                  Explore All Services
                  <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          {/* Airport Service Link */}
          <Link
            href={`/airport-service/${citySlug}`}
            className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-8 hover:shadow-xl transform hover:-translate-y-1 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Navigation className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {city.name} Airport Transfer
                </h3>
                <p className="text-gray-600 mb-4">
                  Reliable airport taxi service in {city.name}. Flight tracking, luggage assistance, on-time pickup & drop.
                </p>
                <div className="flex items-center text-purple-600 font-semibold">
                  Book Airport Taxi
                  <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Quick Links</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={`/${citySlug}`}
              className="bg-white px-4 py-2 rounded-lg text-gray-700 hover:bg-[#FACF2D] hover:text-white transition-all shadow-sm"
            >
              {city.name} Outstation Cabs
            </Link>
            <Link
              href={`/${citySlug}`}
              className="bg-white px-4 py-2 rounded-lg text-gray-700 hover:bg-[#FACF2D] hover:text-white transition-all shadow-sm"
            >
              {city.name} Local Tours
            </Link>
            <Link
              href={`/airport-service/${citySlug}`}
              className="bg-white px-4 py-2 rounded-lg text-gray-700 hover:bg-[#FACF2D] hover:text-white transition-all shadow-sm"
            >
              {city.name} Airport Taxi
            </Link>
            <Link
              href="/wedding"
              className="bg-white px-4 py-2 rounded-lg text-gray-700 hover:bg-[#FACF2D] hover:text-white transition-all shadow-sm"
            >
              All Cities Wedding Cars
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Component
export default function CityWeddingPageClient({ city, citySlug }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="min-h-screen">
        <CityWeddingHero city={city} />
        <CityOverview city={city} />
        <PopularCars city={city} />
        <NearbyDestinations city={city} />
        <WhyChooseUs city={city} />
        <FAQ city={city} />
        <RelatedServices city={city} citySlug={citySlug} />
        <FinalCTA city={city} />
      </div>

      {/* Custom Animations */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
