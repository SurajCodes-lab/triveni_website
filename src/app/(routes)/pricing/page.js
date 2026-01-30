import React from 'react';
import Link from 'next/link';
import { Car, Users, Truck, Bus, Shield, Clock, MapPin, Phone, CheckCircle, Star } from 'lucide-react';
import FareCalculator from '@/components/calculator/FareCalculator';
import { COMPANY_INFO } from '@/lib/seo/constants';

export const metadata = {
  title: 'Taxi Rates & Pricing — Sedan ₹11/km, SUV ₹15/km | Transparent Fares',
  description: 'Triveni Cabs pricing: Sedan ₹11/km, SUV ₹15/km, Tempo ₹23-26/km, Bus ₹30-42/km. No hidden charges. Includes driver, fuel, toll. Get instant fare estimates. Call 7668570551!',
  keywords: 'taxi rates India, cab fare calculator, taxi price per km, sedan rental rates, SUV hire price, tempo traveller rates, bus rental cost, outstation taxi fare, airport taxi rates, transparent taxi pricing',
  openGraph: {
    title: 'Taxi Rates & Pricing — Sedan ₹11/km, SUV ₹15/km | Triveni Cabs',
    description: 'Transparent taxi pricing. Sedan ₹11/km, SUV ₹15/km, Tempo ₹23-26/km. No hidden charges. Get instant fare estimates.',
    url: 'https://www.trivenicabs.in/pricing',
  },
  alternates: {
    canonical: '/pricing',
  }
};

// Vehicle pricing data - ACTUAL Triveni Cabs Rates
const vehiclePricing = [
  {
    category: 'Sedans',
    icon: Car,
    color: 'amber',
    vehicles: [
      { name: 'Swift Dzire', seats: '4', pricePerKm: '11', minKm: '250', driverAllowance: '300' },
      { name: 'Toyota Etios', seats: '4', pricePerKm: '11', minKm: '250', driverAllowance: '300' },
      { name: 'Honda Amaze', seats: '4', pricePerKm: '12', minKm: '250', driverAllowance: '300' },
      { name: 'Honda City', seats: '4', pricePerKm: '14', minKm: '250', driverAllowance: '350' },
      { name: 'Maruti Ciaz', seats: '4', pricePerKm: '14', minKm: '250', driverAllowance: '350' },
    ]
  },
  {
    category: 'SUVs',
    icon: Car,
    color: 'blue',
    vehicles: [
      { name: 'Maruti Ertiga', seats: '6', pricePerKm: '14', minKm: '250', driverAllowance: '350' },
      { name: 'Toyota Innova', seats: '7', pricePerKm: '15', minKm: '250', driverAllowance: '350' },
      { name: 'Innova Crysta', seats: '7', pricePerKm: '18', minKm: '250', driverAllowance: '400' },
      { name: 'Toyota Fortuner', seats: '7', pricePerKm: '25', minKm: '250', driverAllowance: '500' },
    ]
  },
  {
    category: 'Tempo Travellers',
    icon: Truck,
    color: 'green',
    vehicles: [
      { name: '12-Seater Tempo', seats: '12', pricePerKm: '23', minKm: '250', driverAllowance: '400', localRate: '₹6,000-7,500/Day' },
      { name: '16-Seater Tempo', seats: '16', pricePerKm: '25', minKm: '250', driverAllowance: '400', localRate: '₹7,500-8,500/Day' },
      { name: '17-Seater Tempo', seats: '17', pricePerKm: '26', minKm: '250', driverAllowance: '450', localRate: '₹9,000-10,500/Day', popular: true },
      { name: '20-Seater Tempo', seats: '20', pricePerKm: '27', minKm: '250', driverAllowance: '450', localRate: '₹9,000-10,000/Day' },
      { name: '26-Seater Maharaja', seats: '26', pricePerKm: '26', minKm: '250', driverAllowance: '450', localRate: '₹10,000-11,000/Day', popular: true },
    ]
  },
  {
    category: 'Buses',
    icon: Bus,
    color: 'purple',
    vehicles: [
      { name: '22-Seater Mini Bus', seats: '22', pricePerKm: '30-35', minKm: '250', driverAllowance: '500', minCharge: '₹6,000/day' },
      { name: '25-Seater Bus', seats: '25', pricePerKm: '32-36', minKm: '250', driverAllowance: '500', minCharge: '₹6,500/day' },
      { name: '27-Seater Bus', seats: '27', pricePerKm: '34-38', minKm: '250', driverAllowance: '500', minCharge: '₹6,800/day', popular: true },
      { name: '35-Seater Bus', seats: '35', pricePerKm: '36-40', minKm: '250', driverAllowance: '600', minCharge: '₹7,500/day' },
      { name: '41-Seater Bus', seats: '41', pricePerKm: '40-45', minKm: '250', driverAllowance: '600', minCharge: '₹8,000/day' },
    ]
  },
  {
    category: 'Luxury Volvo Coaches',
    icon: Bus,
    color: 'indigo',
    vehicles: [
      { name: '35-Seater Volvo', seats: '35', pricePerKm: '36-40', minKm: '300', driverAllowance: '700', minCharge: '₹7,500/day' },
      { name: '41-Seater Volvo', seats: '41', pricePerKm: '40-45', minKm: '300', driverAllowance: '700', minCharge: '₹8,000/day' },
      { name: '45-Seater Volvo', seats: '45', pricePerKm: '45-50', minKm: '300', driverAllowance: '700', minCharge: '₹9,000/day', popular: true },
      { name: '56-Seater Volvo', seats: '56', pricePerKm: '55-65', minKm: '300', driverAllowance: '800', minCharge: '₹12,000/day' },
    ]
  }
];

// Popular routes with fixed pricing
const popularRoutes = [
  { from: 'Delhi', to: 'Agra', distance: '230 km', sedanPrice: '2,999', suvPrice: '3,999' },
  { from: 'Delhi', to: 'Jaipur', distance: '280 km', sedanPrice: '3,499', suvPrice: '4,699' },
  { from: 'Delhi', to: 'Manali', distance: '540 km', sedanPrice: '7,499', suvPrice: '9,999' },
  { from: 'Delhi', to: 'Shimla', distance: '350 km', sedanPrice: '4,499', suvPrice: '5,999' },
  { from: 'Delhi', to: 'Haridwar', distance: '230 km', sedanPrice: '2,999', suvPrice: '3,999' },
  { from: 'Delhi', to: 'Chandigarh', distance: '250 km', sedanPrice: '3,199', suvPrice: '4,299' },
  { from: 'Chandigarh', to: 'Manali', distance: '310 km', sedanPrice: '3,999', suvPrice: '5,299' },
  { from: 'Chandigarh', to: 'Shimla', distance: '115 km', sedanPrice: '1,999', suvPrice: '2,699' },
];

// What's included/excluded
const inclusions = [
  'AC Vehicle',
  'Experienced Driver',
  'Fuel Charges',
  'Driver Allowance (as per package)',
  'GST (5%)',
  'State Permits',
];

const exclusions = [
  'Toll Charges (as per actuals)',
  'Parking Charges',
  'Entry Fees to Monuments',
  'Personal Expenses',
  'Extra Hours Waiting (₹100/hr)',
  'Night Charges (after 10 PM - ₹200)',
];

export default function PricingPage() {
  const colorClasses = {
    amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-600', icon: 'bg-amber-100' },
    blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600', icon: 'bg-blue-100' },
    green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-600', icon: 'bg-green-100' },
    purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600', icon: 'bg-purple-100' },
    indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-600', icon: 'bg-indigo-100' },
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section - Mobile Optimized */}
      <section className="bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 text-white py-12 sm:py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6 text-sm sm:text-base">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-medium">100% Transparent Pricing</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
              Taxi Rates & Pricing
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-white/90 mb-6 sm:mb-8 px-4">
              Sedan from <span className="font-bold">₹11/km</span> • SUV from <span className="font-bold">₹15/km</span> • No Hidden Charges
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href={`tel:+91${COMPANY_INFO.phone.display.replace(/\s/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-amber-600 font-semibold px-6 py-3 sm:py-3.5 rounded-xl hover:bg-gray-100 transition-colors touch-manipulation active:scale-[0.98]"
              >
                <Phone className="w-5 h-5" />
                Call for Best Rates
              </a>
              <div className="flex items-center gap-1 text-white/90 text-sm sm:text-base">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-white" />
                <span className="font-semibold">4.8</span>
                <span className="text-white/70">• 2800+ Happy Customers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fare Calculator */}
      <FareCalculator />

      {/* Vehicle Pricing Tables - Mobile Optimized */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Complete Price List
            </h2>
            <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-4">
              Transparent per-kilometer rates for all vehicle types. Prices applicable for outstation trips.
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {vehiclePricing.map((category) => {
              const colors = colorClasses[category.color];
              const IconComponent = category.icon;

              return (
                <div key={category.category} className={`${colors.bg} rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border ${colors.border}`}>
                  <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 ${colors.icon} rounded-xl flex items-center justify-center`}>
                      <IconComponent className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.text}`} />
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{category.category}</h3>
                  </div>

                  {/* Mobile Card View */}
                  <div className="block sm:hidden space-y-3">
                    {category.vehicles.map((vehicle, index) => (
                      <div key={index} className={`bg-white rounded-lg p-4 shadow-sm ${vehicle.popular ? 'ring-2 ring-amber-400' : ''}`}>
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <span className="font-semibold text-gray-900">{vehicle.name}</span>
                            {vehicle.popular && (
                              <span className="ml-2 text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Popular</span>
                            )}
                          </div>
                          <span className={`font-bold text-lg ${colors.text}`}>₹{vehicle.pricePerKm}/km</span>
                        </div>
                        <div className="flex flex-wrap gap-2 text-xs text-gray-600">
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {vehicle.seats} seats
                          </span>
                          <span>Min: {vehicle.minKm} km/day</span>
                          <span>DA: ₹{vehicle.driverAllowance}/day</span>
                        </div>
                        {vehicle.localRate && (
                          <div className="mt-2 text-xs text-gray-500">Local: {vehicle.localRate}</div>
                        )}
                        {vehicle.minCharge && (
                          <div className="mt-2 text-xs text-gray-500">Min: {vehicle.minCharge}</div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Desktop Table View */}
                  <div className="hidden sm:block overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="text-left text-sm text-gray-600 border-b border-gray-200">
                          <th className="pb-3 font-medium">Vehicle</th>
                          <th className="pb-3 font-medium text-center">Seats</th>
                          <th className="pb-3 font-medium text-center">Rate/km</th>
                          <th className="pb-3 font-medium text-center">Min km/day</th>
                          <th className="pb-3 font-medium text-center">Driver Allowance</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.vehicles.map((vehicle, index) => (
                          <tr key={index} className="border-b border-gray-100 last:border-0">
                            <td className="py-4 font-medium text-gray-900">
                              {vehicle.name}
                              {vehicle.popular && (
                                <span className="ml-2 text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Popular</span>
                              )}
                            </td>
                            <td className="py-4 text-center">
                              <span className="inline-flex items-center gap-1 text-gray-600">
                                <Users className="w-4 h-4" />
                                {vehicle.seats}
                              </span>
                            </td>
                            <td className="py-4 text-center">
                              <span className={`font-bold text-lg ${colors.text}`}>₹{vehicle.pricePerKm}</span>
                            </td>
                            <td className="py-4 text-center text-gray-600">{vehicle.minKm} km</td>
                            <td className="py-4 text-center text-gray-600">₹{vehicle.driverAllowance}/day</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Routes - Mobile Optimized */}
      <section className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Popular Route Prices
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">One-way fares for popular routes (inclusive of all charges except toll)</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {popularRoutes.map((route, index) => (
              <div key={index} className="bg-white rounded-xl p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="flex items-center gap-2 text-gray-900 font-semibold mb-2 text-sm sm:text-base">
                  <MapPin className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span className="truncate">{route.from}</span>
                  <span className="text-gray-400">→</span>
                  <span className="truncate">{route.to}</span>
                </div>
                <div className="text-xs sm:text-sm text-gray-500 mb-3">{route.distance}</div>
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-xs text-gray-500">Sedan</div>
                    <div className="font-bold text-amber-600">₹{route.sedanPrice}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">SUV</div>
                    <div className="font-bold text-blue-600">₹{route.suvPrice}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inclusions & Exclusions - Mobile Optimized */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              What&apos;s Included & Excluded
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4 sm:gap-8 max-w-4xl mx-auto">
            {/* Inclusions */}
            <div className="bg-green-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-green-200">
              <h3 className="text-lg sm:text-xl font-bold text-green-800 mb-3 sm:mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                Included in Fare
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {inclusions.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="bg-red-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-red-200">
              <h3 className="text-lg sm:text-xl font-bold text-red-800 mb-3 sm:mb-4 flex items-center gap-2">
                <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-red-500 flex items-center justify-center text-red-500 font-bold text-xs sm:text-sm">!</span>
                Not Included
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {exclusions.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 sm:gap-3 text-gray-700 text-sm sm:text-base">
                    <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-red-100 flex items-center justify-center text-red-500 text-xs flex-shrink-0">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Optimized */}
      <section className="py-10 sm:py-12 md:py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
            Need a Custom Quote?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            For multi-day trips, corporate bookings, or routes not listed above, contact us for the best rates.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href={`tel:+91${COMPANY_INFO.phone.display.replace(/\s/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-colors touch-manipulation active:scale-[0.98]"
            >
              <Phone className="w-5 h-5" />
              Call: {COMPANY_INFO.phone.display}
            </a>
            <a
              href={`https://wa.me/91${COMPANY_INFO.phone.display.replace(/\s/g, '')}?text=Hi! I need a custom quote for my trip.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-colors touch-manipulation active:scale-[0.98]"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="py-16 px-4 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto prose prose-gray prose-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Taxi Rates & Car Rental Pricing in India — Transparent Fares with No Hidden Charges
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Triveni Cabs offers the most competitive and transparent taxi pricing across India. Our sedan cab
            rates start at just <strong>₹11 per kilometre</strong> for popular models like Swift Dzire, Toyota Etios, and Honda Amaze —
            ideal for couples, solo travellers, and small families. Need more space? Our SUV rentals including
            Toyota Innova and Innova Crysta are available from <strong>₹15/km</strong>, perfect for family road trips and
            outstation travel across North India.
          </p>
          <p className="text-gray-700 leading-relaxed">
            For group travel, our <Link href="/tempo-traveller" className="text-blue-600 hover:underline">tempo traveller fleet</Link> ranges
            from 12-seater to 26-seater Maharaja models at <strong>₹23–27/km</strong>, making them the most affordable option for
            pilgrimages, corporate outings, and family reunions. Large groups can book our{' '}
            <Link href="/bus-routes" className="text-blue-600 hover:underline">AC buses (22–56 seater)</Link> starting
            at <strong>₹30/km</strong> for events, weddings, and tour operators.
          </p>
          <p className="text-gray-700 leading-relaxed">
            All our prices include driver allowance, fuel charges, and base fare. Toll and state taxes are
            additional. Use our <strong>Fare Calculator</strong> above to get instant estimates for popular routes
            like Delhi to Agra, Delhi to Manali, Delhi to Jaipur, and 50+ more. For custom quotes,{' '}
            <a href="https://wa.me/917668570551" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">WhatsApp us</a> or
            call <a href="tel:+917668570551" className="text-blue-600 hover:underline">7668570551</a> for instant booking.
          </p>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "PriceSpecification",
            "name": "Triveni Cabs Taxi Rates",
            "priceCurrency": "INR",
            "price": "11",
            "unitText": "per kilometer",
            "description": "Sedan taxi rates starting from ₹11 per kilometer. SUV from ₹15/km, Tempo Traveller from ₹23/km.",
            "eligibleQuantity": {
              "@type": "QuantitativeValue",
              "minValue": 250,
              "unitCode": "KM"
            }
          })
        }}
      />
    </main>
  );
}
