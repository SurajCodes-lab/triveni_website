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
        <div className="absolute inset-0 bg-[url('/images/about/about_banner.jpg')] bg-cover bg-center opacity-10"></div>
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
            Luxury Wedding Cars • Premium Baraat Tempo Travellers • Professional Chauffeurs<br/>
            BMW | Audi | Mercedes | Vintage Cars | Decorated Vehicles
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-[#FACF2D]">5000+</div>
              <div className="text-sm text-gray-600">Vehicles</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-pink-600">10000+</div>
              <div className="text-sm text-gray-600">Weddings</div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="text-3xl font-bold text-purple-600">4.9★</div>
              <div className="text-sm text-gray-600">Rating</div>
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

// Wedding Car Collection Section
const WeddingCarCollection = () => {
  const carCategories = [
    {
      title: "Luxury Cars",
      subtitle: "For Royal Entry",
      icon: Crown,
      gradient: "from-yellow-400 to-orange-500",
      cars: ["BMW 5 Series", "Audi A6", "Mercedes E-Class", "Jaguar XF"],
      image: "/images/car/car1.png",
      price: "₹6,000 - ₹15,000/day"
    },
    {
      title: "Premium Sedans",
      subtitle: "Elegant & Comfortable",
      icon: Car,
      gradient: "from-blue-400 to-purple-500",
      cars: ["Honda City", "Maruti Ciaz", "Hyundai Verna", "Toyota Etios"],
      image: "/images/car/car1.png",
      price: "₹2,000 - ₹5,000/day"
    },
    {
      title: "Premium SUVs",
      subtitle: "Spacious & Stylish",
      icon: Users,
      gradient: "from-green-400 to-teal-500",
      cars: ["Toyota Fortuner", "Innova Crysta", "Mahindra Scorpio", "MG Hector"],
      image: "/images/car/car1.png",
      price: "₹3,500 - ₹9,000/day"
    },
    {
      title: "Tempo Travellers",
      subtitle: "For Baraat & Guests",
      icon: Users,
      gradient: "from-pink-400 to-red-500",
      cars: ["9 Seater AC", "12 Seater AC", "17 Seater AC", "26 Seater AC"],
      image: "/images/car/car1.png",
      price: "₹5,500 - ₹15,000/day"
    },
    {
      title: "Vintage Cars",
      subtitle: "Classic Elegance",
      icon: Crown,
      gradient: "from-purple-400 to-pink-500",
      cars: ["Classic Ambassador", "Vintage Rolls Royce", "Heritage Cars"],
      image: "/images/car/car1.png",
      price: "On Request"
    },
    {
      title: "Luxury Buses",
      subtitle: "Large Group Travel",
      icon: Users,
      gradient: "from-indigo-400 to-blue-500",
      cars: ["35 Seater AC Bus", "45 Seater AC Bus", "55 Seater AC Bus"],
      image: "/images/car/car1.png",
      price: "₹18,000 - ₹30,000/day"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full mb-4">
            <Car className="w-5 h-5" />
            <span className="font-semibold">Our Premium Fleet</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-[#FACF2D]">Dream Wedding Car</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From luxury sedans to vintage classics, we have the perfect vehicle for every wedding moment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {carCategories.map((category, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              {/* Gradient Header */}
              <div className={`bg-gradient-to-r ${category.gradient} p-6 text-white relative overflow-hidden`}>
                <div className="absolute top-0 right-0 opacity-10">
                  <category.icon className="w-32 h-32" />
                </div>
                <div className="relative z-10">
                  <category.icon className="w-10 h-10 mb-3" />
                  <h3 className="text-2xl font-bold mb-1">{category.title}</h3>
                  <p className="text-sm opacity-90">{category.subtitle}</p>
                </div>
              </div>

              {/* Car Image */}
              <div className="relative h-48 bg-gray-100">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Details */}
              <div className="p-6">
                <ul className="space-y-2 mb-4">
                  {category.cars.map((car, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm">{car}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t pt-4">
                  <div className="text-sm text-gray-600 mb-1">Starting from</div>
                  <div className="text-xl font-bold text-[#FACF2D]">{category.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Choose Us Section
const WhyChooseUs = () => {
  const features = [
    {
      icon: Shield,
      title: "Professional Chauffeurs",
      description: "Uniformed, well-trained, and courteous drivers for your special day",
      color: "blue"
    },
    {
      icon: Sparkles,
      title: "Car Decoration",
      description: "Beautiful floral and theme-based decoration services available",
      color: "pink"
    },
    {
      icon: Clock,
      title: "Timely Service",
      description: "Guaranteed on-time pickup and drop for all wedding events",
      color: "green"
    },
    {
      icon: Star,
      title: "Top Rated Service",
      description: "4.9★ rating with 10,000+ satisfied wedding couples",
      color: "yellow"
    },
    {
      icon: Shield,
      title: "GPS Tracking",
      description: "Live tracking for safety and real-time location updates",
      color: "purple"
    },
    {
      icon: CreditCard,
      title: "Transparent Pricing",
      description: "No hidden charges, all-inclusive wedding car packages",
      color: "indigo"
    }
  ];

  const colorMap = {
    blue: "from-blue-400 to-blue-600",
    pink: "from-pink-400 to-pink-600",
    green: "from-green-400 to-green-600",
    yellow: "from-yellow-400 to-yellow-600",
    purple: "from-purple-400 to-purple-600",
    indigo: "from-indigo-400 to-indigo-600"
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full mb-4">
            <Award className="w-5 h-5" />
            <span className="font-semibold">Why Choose Triveni Cabs</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Making Weddings <span className="text-[#FACF2D]">Memorable Since 2010</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trusted by thousands of couples for their special day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${colorMap[feature.color]} rounded-2xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
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

// Service Areas Section
const ServiceAreas = () => {
  const cities = [
    "Delhi", "Chandigarh", "Jaipur", "Agra", "Haridwar", "Rishikesh",
    "Shimla", "Manali", "Udaipur", "Amritsar", "Dehradun", "Nainital",
    "Mussoorie", "Jaisalmer", "Jodhpur", "Ajmer", "Pushkar", "Mathura"
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">We Serve Across North India</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Wedding Car Service <span className="text-[#FACF2D]">Locations</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
            Premium wedding transportation services available in all major cities of North India
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {cities.map((city, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-xl p-4 text-center hover:border-[#FACF2D] hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <MapPin className="w-6 h-6 text-[#FACF2D] mx-auto mb-2" />
              <div className="font-semibold text-gray-800">{city}</div>
            </div>
          ))}
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
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ${
                pkg.popular ? 'border-4 border-[#FACF2D] scale-105' : 'border-2 border-gray-100'
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
                  className={`block w-full text-center py-3 rounded-xl font-bold transition-all ${
                    pkg.popular
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
            * Prices may vary based on city, decoration requirements, and duration. <br/>
            Contact us for customized packages for multiple days or special requests.
          </p>
        </div>
      </div>
    </section>
  );
};

// Testimonials Section
const Testimonials = () => {
  const testimonials = [
    {
      name: "Priya & Rahul",
      location: "Delhi",
      rating: 5,
      text: "Triveni Cabs made our wedding day so special! The BMW was beautifully decorated and the chauffeur was very professional. Highly recommended!",
      date: "December 2024"
    },
    {
      name: "Anjali & Vikram",
      location: "Jaipur",
      rating: 5,
      text: "Excellent service for our baraat! The tempo traveller was spacious and comfortable. All our guests were very happy with the arrangements.",
      date: "November 2024"
    },
    {
      name: "Neha & Aditya",
      location: "Chandigarh",
      rating: 5,
      text: "From booking to service, everything was perfect. The vintage car for bride's entry was absolutely stunning. Thank you Triveni Cabs!",
      date: "October 2024"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-4 py-2 rounded-full mb-4">
            <Heart className="w-5 h-5" />
            <span className="font-semibold">Happy Couples</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            What Our <span className="text-[#FACF2D]">Customers Say</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real reviews from real couples who trusted us for their big day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>
              <div className="border-t border-gray-200 pt-4">
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.location} • {testimonial.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section
const FAQ = () => {
  const faqs = [
    {
      question: "What types of wedding cars do you offer?",
      answer: "We offer luxury cars (BMW, Audi, Mercedes, Jaguar), premium sedans (City, Ciaz, Verna), SUVs (Fortuner, Innova Crysta), tempo travellers (9-26 seater), vintage cars, and luxury buses."
    },
    {
      question: "Do you provide car decoration services?",
      answer: "Yes! We provide beautiful floral and theme-based decoration services. You can choose from our standard decoration packages or request custom decorations based on your wedding theme."
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 2-4 weeks in advance, especially during wedding season (October to March). However, we also accommodate last-minute bookings based on availability."
    },
    {
      question: "What areas do you cover?",
      answer: "We provide wedding car services across North India including Delhi, Chandigarh, Jaipur, Agra, Haridwar, Rishikesh, Shimla, Manali, Udaipur, Amritsar, and all major cities."
    },
    {
      question: "Are your chauffeurs professional?",
      answer: "Yes! All our chauffeurs are professional, uniformed, well-trained, and experienced in handling wedding events. They ensure timely and safe transportation."
    },
    {
      question: "Can I customize my wedding package?",
      answer: "Absolutely! We offer fully customizable packages based on your requirements, budget, number of vehicles needed, duration, and special requests. Contact us to discuss your needs."
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
export default function WeddingPageClient() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WeddingService",
    "name": "Triveni Cabs Wedding Car Rental",
    "description": "Premium wedding car rental and transportation services including luxury cars, tempo travellers for baraat, professional chauffeurs, and car decoration.",
    "url": "https://trivenicabs.in/wedding",
    "telephone": `+91${phoneNumber}`,
    "priceRange": "₹₹₹",
    "areaServed": ["Delhi", "Chandigarh", "Jaipur", "Agra", "Haridwar", "Rishikesh"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "10000"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen">
        <WeddingHero />
        <WeddingCarCollection />
        <WhyChooseUs />
        <WeddingServices />
        <ServiceAreas />
        <PricingPackages />
        <Testimonials />
        <FAQ />
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
