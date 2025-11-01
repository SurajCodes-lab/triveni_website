'use client';

import { useState } from 'react';

export default function AirportServiceClient() {
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
    const message = `*New Airport Transfer Booking*\n\nPickup: ${formData.pickup}\nDestination: ${formData.destination}\nDate: ${formData.pickupDate}\nTime: ${formData.pickupTime}\nPassengers: ${formData.passengers}\nVehicle: ${formData.vehicleType}\nFlight Details: ${formData.flightDetails || 'N/A'}\nSpecial Requests: ${formData.specialRequests || 'N/A'}`;

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
            Reliable Airport Transfer Services
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-2">
            🛫 Start & End Your Journey in Comfort
          </p>
          <p className="text-lg text-purple-200 max-w-3xl mx-auto">
            Traveling to or from the airport should be stress-free, timely, and comfortable.
            With Triveni Cabs, we provide 24x7 airport transfer services with a wide range of
            cars, SUVs, and tempo travellers.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
              Book Your Airport Transfer
            </h2>

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
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg font-bold py-4 px-8 rounded-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 uppercase tracking-wide"
              >
                Book Your Airport Transfer Now
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center text-white transition-all hover:-translate-y-2 hover:bg-white/20">
              <div className="text-5xl mb-4">✈️</div>
              <h3 className="text-2xl font-bold mb-3">Airport Pickup</h3>
              <p className="text-purple-100">
                Punctual pickup service from all airport terminals with flight tracking
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center text-white transition-all hover:-translate-y-2 hover:bg-white/20">
              <div className="text-5xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold mb-3">Airport Drop</h3>
              <p className="text-purple-100">
                Comfortable and timely drop-off service to ensure you never miss a flight
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-center text-white transition-all hover:-translate-y-2 hover:bg-white/20">
              <div className="text-5xl mb-4">🚗</div>
              <h3 className="text-2xl font-bold mb-3">24/7 Service</h3>
              <p className="text-purple-100">
                Round-the-clock availability for all your airport transportation needs
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
              🚖 Our Airport Transfer Fleet
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border-2 border-purple-100">
                <h4 className="text-xl font-bold text-purple-700 mb-2">🚘 Sedan Cars</h4>
                <p className="text-gray-700 mb-2">Dzire, Etios, Ciaz, Honda City</p>
                <p className="text-gray-600 text-sm">For budget-friendly & comfortable travel</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border-2 border-purple-100">
                <h4 className="text-xl font-bold text-purple-700 mb-2">🚙 SUVs</h4>
                <p className="text-gray-700 mb-2">Innova Crysta, Ertiga, Fortuner, Scorpio</p>
                <p className="text-gray-600 text-sm">Spacious & perfect for family travel</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border-2 border-purple-100">
                <h4 className="text-xl font-bold text-purple-700 mb-2">🚌 Tempo Travellers</h4>
                <p className="text-gray-700 mb-2">9–26 Seater</p>
                <p className="text-gray-600 text-sm">Ideal for groups, tours, and corporate teams</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border-2 border-purple-100">
                <h4 className="text-xl font-bold text-purple-700 mb-2">🚐 Luxury Cars</h4>
                <p className="text-gray-700 mb-2">Audi, BMW, Mercedes, Jaguar</p>
                <p className="text-gray-600 text-sm">For premium arrivals & VIP guests</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
              🎯 Why Choose Triveni Cabs for Airport Transfers?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'On-time Pickup & Drop', desc: 'No delays, guaranteed punctuality' },
                { title: '24x7 Availability', desc: 'Day & night service, anytime booking' },
                { title: 'Experienced Chauffeurs', desc: 'Professional & polite drivers' },
                { title: 'Clean & Sanitized', desc: 'GPS-enabled vehicles, fully maintained' },
                { title: 'Fixed Transparent Pricing', desc: 'No hidden charges, upfront costs' },
                { title: 'Multiple Cities', desc: 'Delhi, Chandigarh, Jaipur, Agra, Haridwar, Rishikesh, Shimla, Manali, Amritsar, Udaipur' }
              ].map((item, index) => (
                <div key={index} className="text-center p-6 rounded-xl bg-gradient-to-br from-purple-50 to-indigo-50 border-2 border-purple-100 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <h4 className="text-lg font-bold text-purple-700 mb-2">✔️ {item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 text-center mb-8">
              📍 Airport Transfer Services We Offer
            </h2>
            <div className="space-y-4">
              {[
                { icon: '🛫', title: 'One-way Airport Drop', desc: 'Home/Hotel → Airport' },
                { icon: '🛬', title: 'Airport Pickup', desc: 'Airport → City/Hotel/Home' },
                { icon: '🔄', title: 'Round Trip Transfers', desc: 'Airport to City & back' },
                { icon: '💼', title: 'Corporate Airport Transfers', desc: 'For executives, delegations & events' },
                { icon: '👥', title: 'Group Transfers', desc: 'With Tempo Travellers & Buses' }
              ].map((service, index) => (
                <div key={index} className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-r from-purple-50 to-indigo-50 border-2 border-purple-100">
                  <div className="text-4xl">{service.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-purple-700 mb-1">{service.title}</h4>
                    <p className="text-gray-600">{service.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 px-4 pb-20">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-8 md:p-12 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">📞 Book Your Airport Cab Now</h3>
            <p className="text-xl mb-6">✅ Hassle-free booking in just one call</p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-4">
              <a
                href="tel:+917668570551"
                className="bg-white text-purple-700 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                📞 Call: +91 7668570551
              </a>
              <a
                href="https://wa.me/917668570551?text=Hi, I want to book an airport transfer"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all"
              >
                💬 WhatsApp Us
              </a>
            </div>
            <p className="text-purple-100 mt-6 text-sm">
              Available 24/7 | Instant Confirmation | Best Rates Guaranteed
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
