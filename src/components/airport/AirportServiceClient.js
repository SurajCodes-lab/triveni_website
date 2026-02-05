'use client';

import { useState, useMemo, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// Centralized icon imports for better bundle optimization
import {
  Plane,
  Clock,
  Shield,
  Users,
  MapPin,
  Car,
  ChevronRight,
  CheckCircle,
  Award,
  Star,
  Phone,
  Calendar,
  Luggage,
  TrendingUp,
  Navigation
} from '@/components/ui/icons';

export default function AirportServiceClient({ faqData }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const [formData, setFormData] = useState({
    pickup: '',
    destination: '',
    pickupDate: '',
    pickupTime: '',
    passengers: '1',
    vehicleType: 'sedan',
    flightDetails: '',
    specialRequests: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message =
      `🚖 *Airport Transfer Booking Request*\n\n` +
      `📍 *Pickup Location:* ${formData.pickup}\n` +
      `✈️ *Destination Airport:* ${formData.destination}\n` +
      `📅 *Date:* ${formData.pickupDate}\n` +
      `🕐 *Time:* ${formData.pickupTime}\n` +
      `👥 *Passengers:* ${formData.passengers}\n` +
      `🚗 *Vehicle Type:* ${formData.vehicleType}\n` +
      `✈️ *Flight Details:* ${formData.flightDetails || 'Not provided'}\n` +
      `📝 *Special Requests:* ${formData.specialRequests || 'None'}\n\n` +
      `*Services Included:*\n` +
      `✓ Real-time flight tracking\n` +
      `✓ Professional chauffeur\n` +
      `✓ Meet & greet at arrival\n` +
      `✓ Luggage assistance\n` +
      `✓ On-time guarantee\n` +
      `✓ Fixed rates - No surge pricing\n\n` +
      `Please confirm availability and share the fare. Thank you!`;

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

  // City pages data with links
  const cityServices = useMemo(() => [
    { name: 'Delhi', slug: 'delhi', airport: 'Indira Gandhi International Airport (IGI)' },
    { name: 'Jaipur', slug: 'jaipur', airport: 'Jaipur International Airport' },
    { name: 'Chandigarh', slug: 'chandigarh', airport: 'Chandigarh International Airport' },
    { name: 'Agra', slug: 'agra', airport: 'Kheria Airport' },
    { name: 'Shimla', slug: 'shimla', airport: 'Jubbarhatti Airport' },
    { name: 'Manali', slug: 'manali', airport: 'Bhuntar Airport' },
    { name: 'Amritsar', slug: 'amritsar', airport: 'Sri Guru Ram Dass Jee Airport' },
    { name: 'Dehradun', slug: 'dehradun', airport: 'Jolly Grant Airport' },
    { name: 'Haridwar', slug: 'haridwar', airport: 'Via Jolly Grant Airport' },
    { name: 'Rishikesh', slug: 'rishikesh', airport: 'Via Jolly Grant Airport' },
    { name: 'Udaipur', slug: 'udaipur', airport: 'Maharana Pratap Airport' },
    { name: 'Ayodhya', slug: 'ayodhya', airport: 'Via Lucknow Airport' }
  ], []);

  const features = useMemo(() => [
    {
      icon: Plane,
      title: 'Flight Tracking',
      description: 'Real-time flight monitoring to ensure timely pickups, even if your flight is delayed'
    },
    {
      icon: Clock,
      title: '24/7 Availability',
      description: 'Round-the-clock airport taxi service for early morning and late-night flights'
    },
    {
      icon: Shield,
      title: 'Safe & Secure',
      description: 'Verified drivers, GPS tracking, and sanitized vehicles for your safety'
    },
    {
      icon: Luggage,
      title: 'Luggage Assistance',
      description: 'Professional drivers help with loading and unloading your baggage'
    },
    {
      icon: Award,
      title: 'Fixed Pricing',
      description: 'Transparent fares with no surge pricing or hidden charges'
    },
    {
      icon: Users,
      title: 'All Group Sizes',
      description: 'From sedans to tempo travellers for individuals and groups'
    }
  ], []);

  const whatsappUrl = useCallback(() => {
    const message = encodeURIComponent(
      "🚖 *Airport Transfer Booking Request*\n\n" +
      "I need a reliable airport taxi with:\n" +
      "✓ Real-time flight tracking\n" +
      "✓ Professional chauffeur\n" +
      "✓ On-time pickup guarantee\n" +
      "✓ Luggage assistance\n\n" +
      "Please share rates and confirm availability. Thank you!"
    );
    return `https://wa.me/917668570551?text=${message}`;
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section with Background Image */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-32"
        style={{
          backgroundImage: "url('/images/airport_section.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-black/55"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  href="/"
                  className="text-white hover:text-yellow-400 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center font-semibold">
                  <ChevronRight className="w-4 h-4 mx-2 text-white" />
                  <span className="text-yellow-400 text-xl">Airport Service</span>
                </div>
              </li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Airport Taxi Service India — 24/7 Pickup & Drop
            </h1>
            <h2 className="text-2xl md:text-3xl text-yellow-400 font-semibold mb-4">
              24/7 Premium Airport Transfer Service | Flight Tracking + On-Time Guarantee
            </h2>
            <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
              India&apos;s most trusted <strong>airport taxi service</strong> with real-time <strong>flight tracking</strong>,
              professional drivers, and <strong>luggage assistance</strong>. Serving <strong>Delhi IGI, Jaipur,
                Chandigarh, Shimla</strong> and 50+ cities. <strong>Zero cancellation fee</strong> • Fixed rates •
              Instant confirmation!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => window.open(whatsappUrl(), '_blank')}
                className="bg-yellow-600 text-white px-8 py-4 rounded-lg shadow-lg hover:bg-yellow-700 transition-all duration-300 flex items-center justify-center font-semibold text-lg"
              >
                Book Airport Taxi Now - Instant Confirmation ✓
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
              <a
                href="tel:+917668570551"
                className="bg-white text-gray-900 px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center font-semibold text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call: +91 7668570551
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <TrendingUp className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
              <div className="text-4xl font-bold text-gray-900 mb-2">10,000+</div>
              <div className="text-gray-600">Airport Transfers</div>
            </div>
            <div className="p-6">
              <Clock className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
              <div className="text-4xl font-bold text-gray-900 mb-2">24/7</div>
              <div className="text-gray-600">Available Service</div>
            </div>
            <div className="p-6">
              <MapPin className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
              <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Cities Covered</div>
            </div>
            <div className="p-6">
              <Star className="w-12 h-12 text-yellow-600 mx-auto mb-3" />
              <div className="text-4xl font-bold text-gray-900 mb-2">4.8/5</div>
              <div className="text-gray-600">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Airport Taxi Service? Premium Features Included
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience India&apos;s best <strong>airport transfer service</strong> with <strong>real-time flight tracking</strong>,
              professional chauffeurs, modern fleet, and guaranteed on-time pickups for all major airports including
              <strong> Delhi IGI, Jaipur, Chandigarh, Shimla</strong> and 50+ cities.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <feature.icon className="w-12 h-12 text-yellow-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl shadow-2xl p-6 md:p-10 border-2 border-yellow-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Book Your Airport Transfer in 60 Seconds - Get Instant Quote!
            </h2>
            <p className="text-center text-gray-600 mb-8">
              Fill the form below and we&apos;ll confirm your <strong>airport taxi booking</strong> instantly via WhatsApp with guaranteed rates
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="pickup" className="block text-sm font-semibold text-gray-700 mb-2">
                    Pickup Location
                  </label>
                  <input
                    type="text"
                    id="pickup"
                    name="pickup"
                    value={formData.pickup}
                    onChange={handleChange}
                    placeholder="Enter pickup address"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="destination" className="block text-sm font-semibold text-gray-700 mb-2">
                    Destination Airport
                  </label>
                  <select
                    id="destination"
                    name="destination"
                    value={formData.destination}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none"
                    required
                  >
                    <option value="">Select Airport</option>
                    <option value="Delhi - Indira Gandhi International Airport">Delhi - Indira Gandhi International Airport</option>
                    <option value="Chandigarh - Chandigarh International Airport">Chandigarh - Chandigarh International Airport</option>
                    <option value="Jaipur - Jaipur International Airport">Jaipur - Jaipur International Airport</option>
                    <option value="Agra - Agra Airport">Agra - Agra Airport</option>
                    <option value="Dehradun - Jolly Grant Airport (for Haridwar/Rishikesh)">Dehradun - Jolly Grant Airport (for Haridwar/Rishikesh)</option>
                    <option value="Shimla - Shimla Airport">Shimla - Shimla Airport</option>
                    <option value="Kullu-Manali - Bhuntar Airport">Kullu-Manali - Bhuntar Airport</option>
                    <option value="Amritsar - Sri Guru Ram Dass Jee International Airport">Amritsar - Sri Guru Ram Dass Jee International Airport</option>
                    <option value="Udaipur - Maharana Pratap Airport">Udaipur - Maharana Pratap Airport</option>
                    <option value="Mumbai - Chhatrapati Shivaji International Airport">Mumbai - Chhatrapati Shivaji International Airport</option>
                    <option value="Bangalore - Kempegowda International Airport">Bangalore - Kempegowda International Airport</option>
                    <option value="Other">Other Airport</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="pickupDate" className="block text-sm font-semibold text-gray-700 mb-2">
                    Pickup Date
                  </label>
                  <input
                    type="date"
                    id="pickupDate"
                    name="pickupDate"
                    value={formData.pickupDate}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="pickupTime" className="block text-sm font-semibold text-gray-700 mb-2">
                    Pickup Time
                  </label>
                  <input
                    type="time"
                    id="pickupTime"
                    name="pickupTime"
                    value={formData.pickupTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="passengers" className="block text-sm font-semibold text-gray-700 mb-2">
                    Number of Passengers
                  </label>
                  <select
                    id="passengers"
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none"
                  >
                    <option value="1">1 Passenger</option>
                    <option value="2">2 Passengers</option>
                    <option value="3">3 Passengers</option>
                    <option value="4">4 Passengers</option>
                    <option value="5+">5+ Passengers</option>
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
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none"
                  >
                    <option value="sedan">Sedan (Dzire, Etios, Ciaz)</option>
                    <option value="suv">SUV (Innova, Ertiga, Fortuner)</option>
                    <option value="luxury">Luxury Car (Audi, BMW, Mercedes)</option>
                    <option value="tempo">Tempo Traveller (9-26 Seater)</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="flightDetails" className="block text-sm font-semibold text-gray-700 mb-2">
                  Flight Details (Optional)
                </label>
                <input
                  type="text"
                  id="flightDetails"
                  name="flightDetails"
                  value={formData.flightDetails}
                  onChange={handleChange}
                  placeholder="Flight number and airline (e.g., AI 101 Air India)"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="specialRequests" className="block text-sm font-semibold text-gray-700 mb-2">
                  Special Requests
                </label>
                <textarea
                  id="specialRequests"
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Any special requirements or instructions"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-100 transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 text-white text-lg font-bold py-4 px-8 rounded-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <Plane className="w-5 h-5 inline mr-2" />
                Book Your Airport Transfer Now
              </button>
              <p className="text-center text-sm text-gray-600 mt-4">
                <Shield className="w-4 h-4 inline mr-1" />
                Instant confirmation • No payment required • Cancel anytime
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Airport Services by City */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Airport Taxi Service by City - 50+ Locations Across India
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              24/7 <strong>airport cab service</strong> available across major cities. Book <strong>Delhi airport taxi</strong>,
              <strong>Jaipur airport cab</strong>, <strong>Chandigarh airport transfer</strong> and more.
              Click on your city for instant booking and specialized airport transfer services.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {cityServices.map((city) => (
              <Link
                key={city.slug}
                href={`/airport-service/${city.slug}`}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <MapPin className="w-8 h-8 text-yellow-600 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{city.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{city.airport}</p>
                <div className="flex items-center text-yellow-600 font-semibold text-sm">
                  View Details
                  <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Premium Airport Transfer Fleet
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our wide range of well-maintained vehicles for comfortable airport transfers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200">
              <Car className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sedan Cars</h3>
              <p className="text-gray-700 mb-2">Dzire, Etios, Ciaz</p>
              <p className="text-gray-600 text-sm">Perfect for 1-4 passengers</p>
              <p className="text-yellow-600 font-semibold mt-3">₹11/km onwards</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200">
              <Car className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">SUVs</h3>
              <p className="text-gray-700 mb-2">Innova, Ertiga, Fortuner</p>
              <p className="text-gray-600 text-sm">Spacious for 6-7 passengers</p>
              <p className="text-yellow-600 font-semibold mt-3">₹15/km onwards</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200">
              <Users className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Tempo Traveller</h3>
              <p className="text-gray-700 mb-2">12-26 Seater</p>
              <p className="text-gray-600 text-sm">Ideal for group transfers</p>
              <p className="text-yellow-600 font-semibold mt-3">₹25/km onwards</p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 border-2 border-yellow-200">
              <Award className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Luxury Cars</h3>
              <p className="text-gray-700 mb-2">Audi, BMW, Mercedes</p>
              <p className="text-gray-600 text-sm">Premium VIP transfers</p>
              <p className="text-yellow-600 font-semibold mt-3">On Request</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Airport Transfer Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From <strong>airport pickup</strong> to <strong>airport drop</strong>, we cover all your
              transportation needs with professionalism and reliability
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Plane, title: 'Airport Pickup Service', desc: 'Meet & greet at arrival terminal with flight tracking' },
              { icon: MapPin, title: 'Airport Drop Service', desc: 'Timely drop-off ensuring you never miss your flight' },
              { icon: Car, title: 'Round Trip Transfers', desc: 'Complete airport to city and return journey packages' },
              { icon: Users, title: 'Corporate Transfers', desc: 'Professional airport transfer for business executives' },
              { icon: Luggage, title: 'Group Airport Transfers', desc: 'Tempo travellers and buses for large groups' },
              { icon: Clock, title: 'Early Morning/Late Night', desc: '24/7 availability for all flight timings' }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                <service.icon className="w-10 h-10 text-yellow-600 mb-3" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore More Services - Internal Linking */}
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Travel Solutions Across India
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Beyond airport transfers, we offer comprehensive taxi services for city tours, outstation trips, and sightseeing adventures
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sightseeing Tours */}
            <Link
              href="/sightseeing"
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all hover:-translate-y-2 group border-2 border-transparent hover:border-green-400"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Sightseeing Tours
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Explore India&apos;s heritage with expert-guided tours covering Delhi, Agra, Jaipur, and more tourist destinations
              </p>
              <div className="flex items-center text-green-600 font-semibold">
                Discover Tours
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            {/* Bus Routes */}
            <Link
              href="/bus-routes"
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all hover:-translate-y-2 group border-2 border-transparent hover:border-blue-400"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Bus Routes
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Comfortable bus and tempo traveller services for group travel and long-distance routes across India
              </p>
              <div className="flex items-center text-blue-600 font-semibold">
                View Routes
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>

            {/* Outstation Routes */}
            <Link
              href="/routes"
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all hover:-translate-y-2 group border-2 border-transparent hover:border-purple-400"
            >
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Navigation className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Outstation Routes
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                One-way and round-trip cab bookings for popular routes like Delhi-Agra, Jaipur-Udaipur, and more
              </p>
              <div className="flex items-center text-purple-600 font-semibold">
                Explore Routes
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqData && (
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Everything you need to know about our airport transfer services
              </p>
            </div>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                  >
                    <span className="font-bold text-lg text-gray-900">{faq.question}</span>
                    <ChevronRight
                      className={`w-5 h-5 text-yellow-600 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-90' : ''
                        }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="p-6 pt-0 text-gray-600 border-t border-gray-100">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-600 to-orange-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for a Hassle-Free Airport Transfer?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book now and experience India&apos;s most reliable airport taxi service!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="tel:+917668570551"
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call: +91 7668570551
            </a>
            <button
              onClick={() => window.open(whatsappUrl(), '_blank')}
              className="bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all flex items-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </button>
          </div>
          <p className="mt-6 text-sm opacity-90">
            <CheckCircle className="w-4 h-4 inline mr-1" />
            Available 24/7 • Instant Confirmation • No Hidden Charges
          </p>
        </div>
      </section>
    </div>
  );
}
