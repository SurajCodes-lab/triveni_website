import Link from "next/link";
import Image from "next/image";
// Centralized icon imports for better bundle optimization
import { Car, Users, Fuel, Star, ArrowRight, Shield, Clock, Phone } from "@/components/ui/icons";
import { vehicleDetails } from "@/utilis/data";

export const revalidate = false;

export const metadata = {
  title: "Car Rental Fleet | Sedan, SUV, Tempo Traveller, Bus Hire India | Triveni Cabs",
  description: "Browse our complete vehicle fleet for rental across India. Sedan from ₹11/km, SUV from ₹15/km, Tempo Traveller from ₹23/km, Bus from ₹30/km. Professional drivers, AC vehicles, 24/7 booking.",
  keywords: "car rental india, vehicle hire, sedan rental, suv booking, tempo traveller hire, 12 seater tempo, 17 seater tempo, bus rental india, 27 seater bus, 45 seater volvo, cab fleet, taxi service",
  alternates: {
    canonical: "https://www.trivenicabs.in/vehicles"
  },
  openGraph: {
    title: "Vehicle Fleet | Car Rental India | Triveni Cabs",
    description: "Choose from our wide range of vehicles - Sedans, SUVs, Tempo Travellers, and Buses for your travel needs across India.",
    type: "website",
    locale: "en_IN",
    url: "https://www.trivenicabs.in/vehicles",
    siteName: "Triveni Cabs",
    images: [
      {
        url: "https://www.trivenicabs.in/images/car/innova_crysta.jpg",
        width: 1200,
        height: 630,
        alt: "Triveni Cabs Vehicle Fleet"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Vehicle Fleet | Triveni Cabs",
    description: "Sedan, SUV, Tempo Traveller & Bus rentals across India. Book now!",
    images: ["https://www.trivenicabs.in/images/car/innova_crysta.jpg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

// Vehicle categories with details
const vehicleCategories = [
  {
    slug: "sedan",
    name: "Sedan",
    tagline: "Perfect for Business & Couples",
    description: "Comfortable 4-seater sedans ideal for business trips, airport transfers, and couple outings. Models include Swift Dzire, Honda Amaze, and similar.",
    capacity: "4 Passengers",
    luggage: "2 Large Bags",
    priceStart: "₹11/km",
    features: ["AC", "Music System", "Comfortable Seating", "Fuel Efficient"],
    image: "/images/car/swift_dzire.jpg",
    bestFor: ["Airport Transfers", "Business Trips", "Couple Outings", "City Tours"]
  },
  {
    slug: "suv",
    name: "SUV",
    tagline: "Ideal for Family Trips",
    description: "Spacious 6-7 seater SUVs perfect for family vacations and group travel. Models include Toyota Innova, Maruti Ertiga, and Mahindra XUV.",
    capacity: "6-7 Passengers",
    luggage: "4 Large Bags",
    priceStart: "₹15/km",
    features: ["AC", "Extra Legroom", "Large Boot Space", "Hill Climb Power"],
    image: "/images/car/premium_suv.jpg",
    bestFor: ["Family Vacations", "Hill Station Trips", "Group Outings", "Long Distance"]
  },
  {
    slug: "tempo-traveller",
    name: "Tempo Traveller",
    tagline: "Best for Group Travel",
    description: "Comfortable 12-26 seater tempo travellers with luxury pushback seats, LED TV, and GPS tracking. Perfect for pilgrimages, corporate tours, and wedding parties.",
    capacity: "12-26 Passengers",
    luggage: "Ample Luggage Space",
    priceStart: "₹23/km",
    variants: ["12 Seater", "16 Seater", "17 Seater", "20 Seater Luxury", "26 Seater Maharaja"],
    features: ["AC", "Luxury Pushback Seats", "LED TV", "Music System", "GPS Tracking", "Charging Points"],
    image: "/images/tempo/17_seater.jpg",
    bestFor: ["Pilgrimage Tours", "Corporate Outings", "Wedding Parties", "Family Trips"]
  },
  {
    slug: "luxury-bus",
    name: "Luxury Bus",
    tagline: "Premium Volvo & BharatBenz",
    description: "35-56 seater luxury Volvo and BharatBenz AC buses with premium amenities including LED TV, recliners, washroom, and Wi-Fi for corporate events and luxury tours.",
    capacity: "35-56 Passengers",
    luggage: "Large Cargo Hold",
    priceStart: "₹45/km",
    variants: ["35 Seater Coach", "41 Seater Coach", "45 Seater Volvo", "49 Seater Volvo", "56 Seater BharatBenz"],
    features: ["AC", "Volvo Recliners", "LED TV", "PA System", "Washroom", "Wi-Fi"],
    image: "/images/bus/45_SEATER_BUS.jpg",
    bestFor: ["Corporate Events", "Destination Weddings", "Luxury Tours", "Long Distance"]
  },
  {
    slug: "bus",
    name: "Bus",
    tagline: "Affordable Group Transport",
    description: "22-41 seater AC buses for budget-friendly group travel. Perfect for school trips, office outings, pilgrimage tours, and wedding guest transfers.",
    capacity: "22-41 Passengers",
    luggage: "Under Seat Storage",
    priceStart: "₹30/km",
    variants: ["22 Seater Mini Bus", "25 Seater Mini Bus", "27 Seater Coach", "35 Seater Coach", "41 Seater Coach"],
    features: ["AC", "Pushback Seats", "Music System", "Mic/PA System", "Curtains"],
    image: "/images/bus/27_SEATER_BUS.jpg",
    bestFor: ["School Excursions", "Office Outings", "Pilgrimage Tours", "Wedding Guests"]
  }
];

// Structured data for the page
function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Triveni Cabs Vehicle Fleet",
    "description": "Complete range of rental vehicles available across India",
    "numberOfItems": vehicleCategories.length,
    "itemListElement": vehicleCategories.map((vehicle, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": `${vehicle.name} Rental Service`,
        "description": vehicle.description,
        "url": `https://www.trivenicabs.in/vehicles/${vehicle.slug}`,
        "image": `https://www.trivenicabs.in${vehicle.image}`,
        "brand": {
          "@type": "Brand",
          "name": "Triveni Cabs"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": vehicle.priceStart.replace(/[₹\/km]/g, ""),
          "availability": "https://schema.org/InStock"
        }
      }
    }))
  };
}

export default function VehiclesPage() {
  const structuredData = generateStructuredData();

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-400 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-500 rounded-full blur-3xl" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 text-center">
            {/* Breadcrumb */}
            <nav className="flex justify-center mb-8" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-yellow-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li className="text-gray-500">/</li>
                <li className="text-yellow-400 font-medium">Vehicles</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Vehicle <span className="text-yellow-400">Fleet</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Choose from our wide range of well-maintained vehicles for any travel need.
              From compact sedans to luxury buses, we have the perfect ride for you.
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {[
                { number: "500+", label: "Vehicles" },
                { number: "50+", label: "Cities Served" },
                { number: "4.8", label: "Rating", icon: Star },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-1">
                    <span className="text-3xl md:text-4xl font-bold text-yellow-400">{stat.number}</span>
                    {stat.icon && <stat.icon className="w-6 h-6 text-yellow-400 fill-yellow-400" />}
                  </div>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vehicle Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Choose Your Perfect Ride
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                All vehicles come with professional drivers, AC, and are regularly sanitized for your safety.
              </p>
            </div>

            <div className="grid gap-8">
              {vehicleCategories.map((vehicle, index) => (
                <div
                  key={vehicle.slug}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 ${
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className={`relative h-64 md:h-auto min-h-[300px] ${index % 2 === 1 ? "md:order-2" : ""}`}>
                      <Image
                        src={vehicle.image}
                        alt={`${vehicle.name} rental - Triveni Cabs`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
                        From {vehicle.priceStart}
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? "md:order-1" : ""}`}>
                      <span className="text-yellow-600 font-medium text-sm mb-2">{vehicle.tagline}</span>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{vehicle.name}</h3>
                      <p className="text-gray-600 mb-6">{vehicle.description}</p>

                      {/* Specs */}
                      <div className="flex flex-wrap gap-4 mb-6">
                        <div className="flex items-center gap-2 text-gray-700">
                          <Users className="w-5 h-5 text-yellow-500" />
                          <span>{vehicle.capacity}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <Car className="w-5 h-5 text-yellow-500" />
                          <span>{vehicle.luggage}</span>
                        </div>
                      </div>

                      {/* Variants (if available) */}
                      {vehicle.variants && (
                        <div className="mb-4">
                          <span className="text-sm font-medium text-gray-500 mb-2 block">Available Options:</span>
                          <div className="flex flex-wrap gap-2">
                            {vehicle.variants.map((variant) => (
                              <span
                                key={variant}
                                className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium"
                              >
                                {variant}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {vehicle.features.slice(0, 5).map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* Best For */}
                      <div className="mb-6">
                        <span className="text-sm font-medium text-gray-500 mb-2 block">Best For:</span>
                        <div className="flex flex-wrap gap-2">
                          {vehicle.bestFor.map((use) => (
                            <span
                              key={use}
                              className="px-3 py-1 bg-yellow-50 text-yellow-700 rounded-full text-sm"
                            >
                              {use}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="flex flex-wrap gap-4">
                        <Link
                          href={`/vehicles/${vehicle.slug}`}
                          className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 hover:text-black transition-all"
                        >
                          View Details
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                        <a
                          href="https://wa.me/917668570551"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-yellow-500 hover:text-yellow-600 transition-all"
                        >
                          <Phone className="w-4 h-4" />
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Triveni Cabs?
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Verified Drivers",
                  description: "All drivers are background verified and professionally trained"
                },
                {
                  icon: Car,
                  title: "Well-Maintained Fleet",
                  description: "Regular servicing and sanitization of all vehicles"
                },
                {
                  icon: Clock,
                  title: "24/7 Availability",
                  description: "Round the clock booking and customer support"
                },
                {
                  icon: Star,
                  title: "Best Prices",
                  description: "Transparent pricing with no hidden charges"
                }
              ].map((feature, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-7 h-7 text-yellow-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-yellow-400 to-yellow-500">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Ready to Book Your Ride?
            </h2>
            <p className="text-gray-800 mb-8">
              Call us now or send a WhatsApp message for instant booking confirmation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:+917668570551"
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call: +91 76685 70551
              </a>
              <a
                href="https://wa.me/917668570551"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-bold hover:bg-green-700 transition-all"
              >
                WhatsApp Booking
              </a>
            </div>
          </div>
        </section>

        {/* Comparison Guides */}
        <section className="py-12 px-4 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Need Help Choosing?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/sedan-vs-suv" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all group">
                <h4 className="font-bold text-gray-900 group-hover:text-yellow-600 mb-2">Sedan vs SUV: Which to Choose?</h4>
                <p className="text-gray-600 text-sm">Compare capacity, pricing, and best use cases to pick the right car for your trip.</p>
              </Link>
              <Link href="/tempo-vs-bus" className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all group">
                <h4 className="font-bold text-gray-900 group-hover:text-yellow-600 mb-2">Tempo Traveller vs Bus: Group Travel Guide</h4>
                <p className="text-gray-600 text-sm">Find out which vehicle suits your group size, route, and budget.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Explore Our Services</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/services" className="text-yellow-600 hover:underline">All Services</Link>
              <span className="text-gray-300">|</span>
              <Link href="/tempo-traveller" className="text-yellow-600 hover:underline">Tempo Traveller Routes</Link>
              <span className="text-gray-300">|</span>
              <Link href="/bus-routes" className="text-yellow-600 hover:underline">Bus Routes</Link>
              <span className="text-gray-300">|</span>
              <Link href="/wedding" className="text-yellow-600 hover:underline">Wedding Car Rental</Link>
              <span className="text-gray-300">|</span>
              <Link href="/airport-service" className="text-yellow-600 hover:underline">Airport Transfers</Link>
              <span className="text-gray-300">|</span>
              <Link href="/sightseeing" className="text-yellow-600 hover:underline">Sightseeing Tours</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
