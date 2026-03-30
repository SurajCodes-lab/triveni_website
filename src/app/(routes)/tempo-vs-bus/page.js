import Link from "next/link";
import Image from "next/image";
// Centralized icon imports for better bundle optimization
import { Users, Fuel, Car, Check, X, ArrowRight, Phone, MapPin } from "@/components/ui/icons";

export const revalidate = false;

export const metadata = {
  title: "Tempo Traveller vs Bus: Which to Rent for Group Travel? | Triveni Cabs",
  description: "Tempo Traveller or Bus rental? Compare capacity (12-26 vs 28-55 seats), pricing, comfort & best use cases. Tempo from ₹22/km, Bus from ₹55/km. Choose the right group vehicle!",
  keywords: "tempo traveller vs bus rental, which group vehicle to rent, tempo or bus for trip, group travel comparison india, tempo traveller bus difference, best vehicle for large group",
  alternates: {
    canonical: "https://www.trivenicabs.in/tempo-vs-bus"
  },
  openGraph: {
    title: "Tempo Traveller vs Bus: Which Vehicle for Your Group?",
    description: "Complete comparison guide to help you choose between Tempo Traveller and Bus for group travel.",
    type: "article",
    locale: "en_IN",
    url: "https://www.trivenicabs.in/tempo-vs-bus",
    siteName: "Triveni Cabs"
  }
};

const comparisonData = {
  tempo: {
    name: "Tempo Traveller",
    image: "/images/tempo/17_seater.jpg",
    price: "₹22/km",
    capacity: "12-26 Passengers",
    luggage: "Ample Boot Space",
    fuelEfficiency: "8-10 km/l",
    comfort: "Excellent",
    models: ["Force Tempo 12 Seater", "Tempo 17 Seater", "Maharaja Tempo 20 Seater", "Tempo 26 Seater"],
    pros: [
      "Flexible seating options",
      "Easy maneuverability",
      "Can access narrow roads",
      "Suitable for hill stations",
      "Push-back reclining seats"
    ],
    cons: [
      "Limited for very large groups",
      "Less spacious than bus",
      "Standing not possible",
      "Smaller luggage space"
    ],
    bestFor: ["Medium groups (12-26)", "Pilgrimage tours", "Hill station trips", "Corporate outings", "Family functions"],
    link: "/vehicles/tempo-traveller"
  },
  bus: {
    name: "Bus",
    image: "/images/bus/35_SEATER_BUS.jpg",
    price: "₹55/km",
    capacity: "28-55 Passengers",
    luggage: "Large Cargo Hold",
    fuelEfficiency: "4-6 km/l",
    comfort: "Good to Excellent",
    models: ["28 Seater AC Bus", "35 Seater AC Bus", "45 Seater Luxury Bus", "55 Seater Volvo Bus"],
    pros: [
      "Maximum passenger capacity",
      "Huge luggage space",
      "Standing space available",
      "Entertainment systems",
      "Washroom in luxury variants"
    ],
    cons: [
      "Higher overall cost",
      "Cannot access narrow roads",
      "Difficult in hilly terrain",
      "Needs larger parking space"
    ],
    bestFor: ["Large groups (30-55)", "School/College trips", "Wedding parties", "Corporate events", "Interstate tours"],
    link: "/vehicles/bus"
  }
};

// Structured data
function generateStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Tempo Traveller vs Bus: Which Vehicle Should You Rent for Group Travel?",
    "description": "Complete comparison guide between Tempo Traveller and Bus rentals to help you make the right choice for group travel.",
    "author": {
      "@type": "Organization",
      "name": "Triveni Cabs"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Triveni Cabs",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.trivenicabs.in/images/logo.webp"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.trivenicabs.in/tempo-vs-bus"
    }
  };
}

export default function TempoVsBusPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateStructuredData()) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <nav className="flex justify-center mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm text-gray-400">
                <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
                <li>/</li>
                <li><Link href="/vehicles" className="hover:text-yellow-400">Vehicles</Link></li>
                <li>/</li>
                <li className="text-yellow-400">Tempo vs Bus</li>
              </ol>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Tempo Traveller vs Bus: <span className="text-yellow-400">Group Travel Guide</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choosing the perfect vehicle for your group? Compare features, capacity, and costs.
            </p>
          </div>
        </section>

        {/* Quick Comparison Table */}
        <section className="py-12 px-4 -mt-8">
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {/* Feature Column */}
              <div className="p-6 bg-gray-50">
                <h3 className="font-bold text-lg mb-6 text-gray-400">Feature</h3>
                <div className="space-y-4">
                  {["Starting Price", "Passengers", "Luggage", "Fuel Efficiency", "Comfort Level"].map((feature) => (
                    <div key={feature} className="py-3 border-b border-gray-100 font-medium text-gray-700">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Tempo Column */}
              <div className="p-6 bg-blue-50">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Car className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">Tempo Traveller</h3>
                  <span className="text-xs bg-blue-400 text-white px-2 py-1 rounded-full">Best for Medium Groups</span>
                </div>
                <div className="space-y-4">
                  <div className="py-3 border-b border-gray-100 text-center font-bold text-green-600">₹22/km</div>
                  <div className="py-3 border-b border-gray-100 text-center">12-26 Passengers</div>
                  <div className="py-3 border-b border-gray-100 text-center">Ample Boot Space</div>
                  <div className="py-3 border-b border-gray-100 text-center text-green-600">8-10 km/l</div>
                  <div className="py-3 border-b border-gray-100 text-center font-bold text-green-600">Excellent</div>
                </div>
              </div>

              {/* Bus Column */}
              <div className="p-6 bg-yellow-50">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="w-8 h-8 text-yellow-600" />
                  </div>
                  <h3 className="font-bold text-xl text-gray-900">Bus</h3>
                  <span className="text-xs bg-yellow-400 text-black px-2 py-1 rounded-full">Best for Large Groups</span>
                </div>
                <div className="space-y-4">
                  <div className="py-3 border-b border-gray-100 text-center font-bold text-yellow-600">₹55/km</div>
                  <div className="py-3 border-b border-gray-100 text-center font-bold text-green-600">28-55 Passengers</div>
                  <div className="py-3 border-b border-gray-100 text-center font-bold text-green-600">Large Cargo Hold</div>
                  <div className="py-3 border-b border-gray-100 text-center">4-6 km/l</div>
                  <div className="py-3 border-b border-gray-100 text-center">Good to Excellent</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed Comparison */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Detailed Comparison</h2>

            <div className="grid md:grid-cols-2 gap-8">
              {Object.entries(comparisonData).map(([key, vehicle]) => (
                <div key={key} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={vehicle.image}
                      alt={`${vehicle.name} rental - Triveni Cabs`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold">
                      From {vehicle.price}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-4">{vehicle.name}</h3>

                    {/* Models */}
                    <div className="mb-4">
                      <span className="text-sm text-gray-500">Available Options:</span>
                      <p className="text-gray-700">{vehicle.models.join(", ")}</p>
                    </div>

                    {/* Pros */}
                    <div className="mb-4">
                      <h4 className="font-bold text-green-600 mb-2">Advantages</h4>
                      <ul className="space-y-1">
                        {vehicle.pros.map((pro) => (
                          <li key={pro} className="flex items-start gap-2 text-sm text-gray-600">
                            <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cons */}
                    <div className="mb-4">
                      <h4 className="font-bold text-red-600 mb-2">Limitations</h4>
                      <ul className="space-y-1">
                        {vehicle.cons.map((con) => (
                          <li key={con} className="flex items-start gap-2 text-sm text-gray-600">
                            <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Best For */}
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-700 mb-2">Best For:</h4>
                      <div className="flex flex-wrap gap-2">
                        {vehicle.bestFor.map((use) => (
                          <span key={use} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={vehicle.link}
                      className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 hover:text-black transition-all w-full justify-center"
                    >
                      Book {vehicle.name}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cost Comparison */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Cost Comparison Example</h2>
            <p className="text-center text-gray-600 mb-8">For a 500 km round trip (e.g., Mumbai to Lonavala)</p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
                <h3 className="font-bold text-xl mb-4 text-blue-800">Tempo Traveller (17 Seater)</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Distance Cost (500 km x ₹22)</span>
                    <span className="font-bold">₹11,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Driver Allowance</span>
                    <span className="font-bold">₹500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Toll & Parking (approx)</span>
                    <span className="font-bold">₹800</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-blue-600">₹12,300</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Per person (17 people): ₹724
                  </div>
                </div>
              </div>

              <div className="p-6 bg-yellow-50 rounded-xl border-2 border-yellow-300">
                <h3 className="font-bold text-xl mb-4 text-yellow-800">Bus (35 Seater)</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Distance Cost (500 km x ₹55)</span>
                    <span className="font-bold">₹27,500</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Driver Allowance</span>
                    <span className="font-bold">₹800</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Toll & Parking (approx)</span>
                    <span className="font-bold">₹1,200</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-yellow-600">₹29,500</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    Per person (35 people): ₹843
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Recommendation Section */}
        <section className="py-12 px-4 bg-gray-100">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Our Recommendation</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-blue-50 rounded-xl border-2 border-blue-200">
                <h3 className="font-bold text-xl mb-3 text-blue-800">Choose Tempo Traveller If:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    Your group size is 12-26 people
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    You are visiting hill stations or narrow roads
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    Budget is a priority
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    You want push-back reclining seats
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-blue-500 mt-1 flex-shrink-0" />
                    Trip involves religious/pilgrimage destinations
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-yellow-50 rounded-xl border-2 border-yellow-300">
                <h3 className="font-bold text-xl mb-3 text-yellow-800">Choose Bus If:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                    Your group size is 30-55 people
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                    You are traveling on highways/plains
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                    You have extensive luggage
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                    It is a wedding party or school trip
                  </li>
                  <li className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                    You need onboard washroom (luxury bus)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 bg-gradient-to-r from-yellow-400 to-yellow-500">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-black mb-4">Need Help Deciding? We are Here!</h2>
            <p className="text-gray-800 mb-6">Our group travel experts will recommend the perfect vehicle based on your group size, route, and budget.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:+917668570551" className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-gray-800">
                <Phone className="w-5 h-5" />
                Call: +91 76685 70551
              </a>
              <a href="https://wa.me/917668570551" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700">
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-8 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h3 className="font-bold text-gray-700 mb-4">Related Comparisons:</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/sedan-vs-suv" className="text-yellow-600 hover:underline">Sedan vs SUV</Link>
              <Link href="/vehicles" className="text-yellow-600 hover:underline">View All Vehicles</Link>
              <Link href="/tempo-traveller" className="text-yellow-600 hover:underline">Tempo Traveller Routes</Link>
              <Link href="/bus-routes" className="text-yellow-600 hover:underline">Bus Routes</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
