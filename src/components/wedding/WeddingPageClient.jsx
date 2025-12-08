'use client';

import { useState, useEffect } from "react";
import {
  Heart, Users, Car, Phone, MapPin, Clock, Shield, Star,
  ChevronRight, Sparkles, Music, Camera, Gift, CheckCircle,
  Crown, Award, CreditCard, UserCheck, Zap, Calendar
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { BsWhatsapp } from 'react-icons/bs';
import { phoneNumber } from "@/utilis/data";

// Hero Section with Animation
const WeddingHero = () => {
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
            <li className="text-[#FACF2D] font-medium">Wedding Services</li>
          </ol>
        </nav>

        {/* Main Heading with Animation */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Crown className="w-10 h-10 md:w-12 md:h-12 text-[#FACF2D] animate-bounce" />
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-[#FACF2D] bg-clip-text text-transparent">
              Royal Wedding Cars
            </h1>
            <Crown className="w-10 h-10 md:w-12 md:h-12 text-[#FACF2D] animate-bounce" />
          </div>

          <p className="text-xl md:text-3xl font-semibold text-gray-800 mb-4">
            Make Your Wedding Journey <span className="text-[#FACF2D]">Unforgettable</span>
          </p>

          <p className="text-base md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            Luxury Wedding Cars • Premium Baraat Tempo Travellers • Professional Chauffeurs<br />
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
              href={`https://wa.me/${phoneNumber}?text=Hi, I'm interested in wedding car rental services. Please share details and packages.`}
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

// Our Wedding Car Collection Section
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
            Choose from our exclusive fleet to make your big day memorable
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

          {/* Vintage Cars */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-purple-100 hover:border-purple-300 transition-all">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-full lg:w-1/3">
                <div className="relative h-64 w-full rounded-2xl overflow-hidden">
                  <Image
                    src="/images/wedding/vintage_car.jpg"
                    alt="Vintage Wedding Cars - Classic Royal Entry"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="lg:w-2/3">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">🏰</div>
                  <h3 className="text-3xl font-bold text-gray-800">Vintage Cars</h3>
                </div>
                <p className="text-xl text-gray-600 mb-4 font-medium">On Request - For royal entry</p>
                <p className="text-gray-600 leading-relaxed">
                  Add a touch of timeless elegance to your wedding with our exclusive vintage car collection. These classic beauties are perfect for creating that royal and majestic entrance you've always dreamed of.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Why Choose Triveni Cabs for Wedding Travel Section
const WhyChooseUs = () => {
  const features = [
    {
      icon: Car,
      title: "5000+ Cars, SUVs & Tempo Travellers across India",
      description: "Extensive fleet covering luxury cars, premium sedans, SUVs, and tempo travellers to meet all your wedding transportation needs",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: UserCheck,
      title: "Professional & uniformed chauffeurs",
      description: "Experienced, courteous, and well-groomed drivers dedicated to making your journey comfortable and memorable",
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
      title: "Affordable packages for luxury cars & tempo travellers",
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
      {/* Decorative Hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <Heart className="absolute top-10 left-10 w-20 h-20 text-pink-400 animate-float" />
        <Heart className="absolute top-40 right-20 w-16 h-16 text-red-400 animate-float-delayed" />
        <Heart className="absolute bottom-20 left-1/4 w-12 h-12 text-pink-300 animate-float" />
        <Heart className="absolute bottom-40 right-1/3 w-14 h-14 text-rose-400 animate-float-delayed" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700 px-6 py-3 rounded-full mb-6 shadow-md">
            <Heart className="w-6 h-6 animate-pulse" />
            <span className="font-bold text-lg">Why Choose Triveni Cabs for Wedding Travel?</span>
            <Heart className="w-6 h-6 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-[#FACF2D] bg-clip-text text-transparent">
            Making Your Wedding Journey Extraordinary
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
            From luxurious bridal entries to comfortable baraat transportation, we ensure every moment of your wedding travel is perfect and stress-free
          </p>
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

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-white rounded-2xl px-8 py-4 shadow-lg">
            <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
            <span className="text-lg font-semibold text-gray-800">
              Trusted by <span className="text-[#FACF2D]">10,000+</span> happy couples across India
            </span>
            <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
          </div>
        </div>
      </div>
    </section>
  );
};

// Wedding Services Section
const WeddingServices = () => {
  const services = [
    {
      icon: Heart,
      title: "Bride & Groom Entry Cars",
      description: "Luxury and super-luxury vehicles for the bride and groom's grand entry",
      features: ["BMW, Audi, Mercedes", "Vintage Cars Available", "Professional Decoration", "Red Carpet Service"]
    },
    {
      icon: Music,
      title: "Baraat Tempo Travellers",
      description: "Spacious AC tempo travellers and buses for the baraat procession",
      features: ["9 to 26 Seater Options", "Music System", "Comfortable Seating", "Decorated Vehicles"]
    },
    {
      icon: Users,
      title: "Guest Transportation",
      description: "Reliable pickup and drop service for wedding guests from hotels and airports",
      features: ["Airport Transfers", "Hotel Pickups", "Multiple Vehicles", "Coordinated Service"]
    },
    {
      icon: Camera,
      title: "Pre-Wedding & Reception",
      description: "Special transportation for pre-wedding shoots and reception events",
      features: ["Photo-Friendly Cars", "Flexible Timing", "Multiple Locations", "Professional Drivers"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full mb-4">
            <Gift className="w-5 h-5" />
            <span className="font-semibold">Complete Wedding Solutions</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Our <span className="text-[#FACF2D]">Wedding Services</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive transportation solutions for every wedding ceremony
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl p-8 hover:border-[#FACF2D] hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-[#FACF2D] to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Service Areas Section - Clickable City Cards
const ServiceAreas = () => {
  // Cities with wedding services - matches weddingCityData
  const weddingCities = [
    { name: "Delhi", slug: "delhi" },
    { name: "Jaipur", slug: "jaipur" },
    { name: "Chandigarh", slug: "chandigarh" },
    { name: "Agra", slug: "agra" },
    { name: "Shimla", slug: "shimla" },
    { name: "Manali", slug: "manali" },
    { name: "Amritsar", slug: "amritsar" },
    { name: "Haridwar", slug: "haridwar" },
    { name: "Rishikesh", slug: "rishikesh" },
    { name: "Dehradun", slug: "dehradun" },
    { name: "Jodhpur", slug: "jodhpur" },
    { name: "Udaipur", slug: "udaipur" },
    { name: "Ayodhya", slug: "ayodhya" }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">Wedding Car Rental by City</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Book <span className="text-[#FACF2D]">City-Specific</span> Wedding Cars
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-8">
            Click on your city for detailed wedding car rental services, pricing, popular venues, and exclusive packages.
            Each city has specialized services tailored to local wedding traditions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {weddingCities.map((city) => (
            <Link
              key={city.slug}
              href={`/wedding/${city.slug}`}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border-2 border-pink-100 hover:border-[#FACF2D]"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <MapPin className="w-7 h-7 text-[#FACF2D]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{city.name}</h3>
                <p className="text-sm text-gray-600 mb-3">Wedding Car Rental</p>
                <div className="flex items-center text-[#FACF2D] font-semibold text-sm">
                  View Details
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl px-8 py-4 shadow-md">
            <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
            <p className="text-gray-700 font-medium">
              Can't find your city? <a href={`https://wa.me/${phoneNumber}?text=Hi, I need wedding car rental in my city. Can you help?`} target="_blank" rel="noopener noreferrer" className="text-[#FACF2D] underline font-bold">Contact us</a> for custom solutions!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Pricing Packages Section
const PricingPackages = () => {
  const packages = [
    {
      name: "Basic Package",
      price: "₹8,000",
      period: "/day",
      popular: false,
      features: [
        "Premium Sedan Car",
        "Professional Chauffeur",
        "Basic Car Decoration",
        "6 Hours Service",
        "50 KM Included",
        "Fuel Included"
      ]
    },
    {
      name: "Premium Package",
      price: "₹15,000",
      period: "/day",
      popular: true,
      features: [
        "Luxury Car (BMW/Audi)",
        "Uniformed Chauffeur",
        "Premium Decoration",
        "10 Hours Service",
        "100 KM Included",
        "Red Carpet Service",
        "Complimentary Water",
        "GPS Tracking"
      ]
    },
    {
      name: "Royal Package",
      price: "₹25,000",
      period: "/day",
      popular: false,
      features: [
        "Mercedes/Jaguar",
        "Professional Team",
        "Royal Decoration",
        "12 Hours Service",
        "150 KM Included",
        "Red Carpet & Flowers",
        "Refreshments",
        "Photography Support",
        "Vintage Car Option"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-600 px-4 py-2 rounded-full mb-4">
            <CreditCard className="w-5 h-5" />
            <span className="font-semibold">Affordable Wedding Packages</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-[#FACF2D]">Wedding Package</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Transparent pricing with no hidden charges. Customized packages available.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ${pkg.popular ? 'border-4 border-[#FACF2D] scale-105' : 'border-2 border-gray-100'
                }`}
            >
              {pkg.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-[#FACF2D] to-yellow-500 text-white px-4 py-1 text-sm font-bold">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-[#FACF2D]">{pkg.price}</span>
                  <span className="text-gray-600">{pkg.period}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/${phoneNumber}?text=Hi, I'm interested in the ${pkg.name} for my wedding. Please share more details.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 rounded-xl font-bold transition-all ${pkg.popular
                      ? 'bg-gradient-to-r from-[#FACF2D] to-yellow-500 text-black hover:shadow-lg'
                      : 'bg-black text-white hover:bg-gray-800'
                    }`}
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            * Prices may vary based on city, decoration requirements, and duration. <br />
            Contact us for customized packages for multiple days or special requests.
          </p>
        </div>
      </div>
    </section>
  );
};


// FAQ Section
// FAQ Section
const FAQ = ({ faqs = [] }) => {


  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Frequently Asked <span className="text-[#FACF2D]">Questions</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Got questions? We've got answers!
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
const FinalCTA = () => {
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
          Ready to Make Your Wedding Royal?
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
            href={`https://wa.me/${phoneNumber}?text=Hi, I want to book wedding car services. Please share details and availability.`}
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

// Main Component
export default function WeddingPageClient({ faqs }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>


      <div className="min-h-screen">
        <WeddingHero />
        <WeddingCarCollection />
        <WhyChooseUs />
        <WeddingServices />
        <ServiceAreas />
        <PricingPackages />
        <PricingPackages />
        <FAQ faqs={faqs} />
        <FinalCTA />
        <FinalCTA />
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
