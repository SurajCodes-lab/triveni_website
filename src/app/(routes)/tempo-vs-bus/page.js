import Link from "next/link";
import Image from "next/image";
// Centralized icon imports for better bundle optimization
import { Users, Fuel, Car, Check, X, ArrowRight, Phone, MapPin } from "@/components/ui/icons";
import { getRatingAndReviews } from "@/lib/seo/review-helpers";
import { getComparisonSchema, getArticleSchema, getHowToSchema, getSpeakableSchema, getTodayDate } from "@/lib/seo/speakable-helpers";
import { tightenTitle } from '@/lib/seo/serp-ctr';
import { getContentUpdatedOn } from '@/lib/seo/content-updates';

const SLUG = "tempo-vs-bus";
const SITE = "https://www.trivenicabs.in";
const PAGE_URL = `${SITE}/${SLUG}`;
const OG_IMAGE = "/images/bus/35_SEATER_BUS.jpg";

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle("Tempo vs Bus for Group Travel (2026)"),
  description:
    "Tempo traveller vs bus for group travel: capacity, price per km, comfort & best-for. Verdict: tempo for 12-26, bus for 30-55. Tempo ₹25/km. Call 7668570551.",
  keywords:
    "tempo vs bus, tempo traveller vs bus, tempo or bus for group travel, which is better tempo or bus, tempo traveller vs bus rental, tempo vs bus price comparison, tempo vs bus for trip, group travel comparison india, tempo traveller bus difference, best vehicle for large group, tempo vs bus cost per person, bus vs tempo for tour, 17 seater tempo vs 35 seater bus, tempo or bus for pilgrimage, tempo or bus for hill station",
  authors: [{ name: "Triveni Cabs™" }],
  metadataBase: new URL(SITE),
  alternates: { canonical: PAGE_URL, languages: { "en-IN": `/${SLUG}` } },
  openGraph: {
    title: "Tempo Traveller vs Bus — Which Vehicle Is Better for Your Group? (2026 Guide)",
    description:
      "Capacity, price per km, comfort and best-for compared side by side. The honest verdict on whether a tempo traveller or a bus suits your group trip.",
    type: "article",
    locale: "en_IN",
    url: PAGE_URL,
    siteName: "Triveni Cabs™",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Tempo Traveller vs Bus — side-by-side group travel comparison" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tempo vs Bus for Group Travel — Which Is Better? (2026)",
    description: "Capacity, price per km, comfort and best-for compared. Get the verdict before you book your group vehicle.",
    creator: "@trivenicabs",
    site: "@trivenicabs",
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
};

const COMPARISON_ROWS = [
  { feature: "Seating capacity", v1: "12-26 passengers", v2: "28-55 passengers" },
  { feature: "Price per km", v1: "₹25/km", v2: "₹55/km" },
  { feature: "Per-person cost (full)", v1: "~₹724 (17 pax, 500 km)", v2: "~₹843 (35 pax, 500 km)" },
  { feature: "Luggage space", v1: "Ample boot", v2: "Large cargo hold" },
  { feature: "Mileage", v1: "8-10 km/l", v2: "4-6 km/l" },
  { feature: "Hill / narrow roads", v1: "Excellent access", v2: "Limited — wide roads only" },
  { feature: "Comfort", v1: "Excellent (push-back)", v2: "Good to excellent (luxury)" },
  { feature: "Onboard washroom", v1: "No", v2: "Yes (luxury Volvo)" },
  { feature: "Best for", v1: "Medium groups 12-26, hills, pilgrimage", v2: "Large groups 30-55, weddings, school trips" },
];

const TEMPO_VS_BUS_FAQS = [
  {
    question: "Is a tempo traveller or a bus cheaper for group travel?",
    answer:
      "A tempo traveller is cheaper for groups up to 26 people. At about ₹25/km versus ₹55/km for a bus, a 17-seater tempo on a 500 km trip costs roughly ₹12,500 total (about ₹735 per person), while a 35-seater bus costs around ₹29,500 (about ₹843 per person). A bus only becomes cost-effective per head when you genuinely have 30+ travellers to fill it.",
  },
  {
    question: "Can a bus go to hill stations like Manali or Shimla?",
    answer:
      "Large buses are not recommended for Manali, Shimla or other Himalayan routes because of narrow roads, hairpin bends and steep inclines. For hill stations, a tempo traveller (12-26 seater) is the safe choice. For very large groups heading to the hills, two tempo travellers are safer and more flexible than one bus.",
  },
  {
    question: "How many passengers can a tempo traveller carry versus a bus?",
    answer:
      "Tempo travellers seat 12 to 26 passengers depending on the variant (12, 17, 20 or 26 seater). Buses seat 28 to 55 passengers (28, 35, 45 seater and 55-seater Volvo). Choose a tempo for groups up to 26 and a bus for 30 or more.",
  },
  {
    question: "Which is more comfortable, a tempo traveller or a bus?",
    answer:
      "For medium groups, tempo travellers feel more comfortable thanks to push-back reclining seats and a more personal cabin. Luxury Volvo buses match or exceed that comfort for large groups, adding entertainment systems and an onboard washroom on premium variants. For 12-26 people, a tempo is the comfort sweet spot.",
  },
  {
    question: "Should I book a tempo traveller or a bus for a wedding?",
    answer:
      "For a wedding with 40+ guests moving together, a bus is the most economical single vehicle. For a baraat of 15-25, a decorated tempo traveller with DJ setup is the traditional choice. Many weddings combine both — a bus for bulk guest transport plus tempos for the baraat and close family.",
  },
  {
    question: "Which is better for a pilgrimage like Char Dham Yatra?",
    answer:
      "Tempo travellers are strongly recommended for Char Dham Yatra and most Himalayan pilgrimages because the mountain roads to Kedarnath, Badrinath, Gangotri and Yamunotri are narrow. A bus cannot safely navigate these stretches, so even large pilgrimage groups are split across multiple tempo travellers.",
  },
];

// Structured data — full AEO/GEO schema suite
function buildSchemas() {
  const rr = getRatingAndReviews(SLUG, "tempo");

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE + "/" },
      { "@type": "ListItem", "position": 2, "name": "Vehicles", "item": SITE + "/vehicles" },
      { "@type": "ListItem", "position": 3, "name": "Tempo vs Bus", "item": PAGE_URL },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": TEMPO_VS_BUS_FAQS.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer },
    })),
  };

  const comparison = getComparisonSchema({
    slug: SLUG,
    title: "Tempo Traveller vs Bus — Attribute Comparison",
    description:
      "Side-by-side comparison of tempo traveller and bus across capacity, price per km, comfort, luggage, mileage and ideal group size.",
    rows: COMPARISON_ROWS,
    mentions: ["Tempo Traveller", "Bus", "Volvo Bus", "Group Travel", "Hill Station Trip", "Pilgrimage"],
  });

  const howTo = getHowToSchema({
    name: "How to Choose Between a Tempo Traveller and a Bus",
    description: "A quick decision framework for picking the right group vehicle for your route and party size.",
    totalTime: "PT5M",
    steps: [
      { name: "Count your group", text: "Up to 26 passengers fit a tempo traveller; 28-55 need a bus." },
      { name: "Check the terrain", text: "Hill stations and narrow roads rule out a bus — choose a tempo traveller." },
      { name: "Weigh luggage and amenities", text: "Need a washroom or huge cargo hold for a long highway tour? A luxury bus delivers." },
      { name: "Compare per-head cost", text: "A near-full bus is cheaper per person for 30+ travellers; a tempo wins for smaller groups." },
      { name: "Book with Triveni Cabs™", text: "Call 7668570551 or WhatsApp to confirm vehicle, AC and driver for your dates." },
    ],
  });

  const article = getArticleSchema({
    slug: SLUG,
    headline: "Tempo Traveller vs Bus: Which Vehicle Should You Rent for Group Travel in 2026?",
    description:
      "An experience-based comparison of tempo travellers and buses covering capacity, per-km price, comfort, luggage and the right pick for your group size and route.",
    image: OG_IMAGE,
    datePublished: "2024-06-01",
    dateModified: (getContentUpdatedOn(`/${SLUG}`) || getTodayDate()),
    speakableSelectors: [".speakable-headline", ".speakable-lead", ".speakable-faq-first"],
  });

  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": PAGE_URL + "#service",
    "name": "Tempo Traveller & Bus Hire for Group Travel",
    "serviceType": "Group Vehicle Rental",
    "description":
      "AC tempo traveller (12-26 seater) and bus (28-55 seater) hire with professional drivers for group tours, pilgrimage, weddings, school and corporate travel across North India.",
    "url": PAGE_URL,
    "areaServed": { "@type": "Country", "name": "India" },
    "brand": { "@type": "Brand", "name": "Triveni Cabs™" },
    "provider": { "@type": "TravelAgency", "@id": SITE + "/#organization", "name": "Triveni Cabs™", "telephone": "+91-7668570551" },

  };

  const speakable = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": PAGE_URL + "#webpage",
    "name": "Tempo Traveller vs Bus",
    "url": PAGE_URL,
    "dateModified": (getContentUpdatedOn(`/${SLUG}`) || getTodayDate()),
    "speakable": getSpeakableSchema([".speakable-headline", ".speakable-lead", ".speakable-faq-first"]),
  };

  return [breadcrumb, faqSchema, ...comparison, howTo, article, service, speakable];
}

const comparisonData = {
  tempo: {
    name: "Tempo Traveller",
    image: "/images/tempo/17_seater.jpg",
    price: "₹25/km",
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

export default function TempoVsBusPage() {
  const schemas = buildSchemas();
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}

      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="py-10 sm:py-16 bg-gradient-to-br from-gray-900 to-gray-800">
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
            <h1 className="speakable-headline text-4xl md:text-5xl font-bold text-white mb-4">
              Tempo Traveller vs Bus: <span className="text-yellow-400">Which Is Better for Group Travel?</span>
            </h1>
            <p className="speakable-lead text-lg text-gray-200 max-w-3xl mx-auto bg-white/10 border border-white/15 rounded-xl px-5 py-4">
              Short answer: book a <strong>tempo traveller</strong> for groups of 12-26 — it is cheaper (about ₹25/km vs
              ₹55/km), more comfortable on push-back seats, and the only safe choice for hill stations and narrow roads.
              Book a <strong>bus</strong> only when your group is 30-55 people travelling on highways, where its huge
              capacity and cargo hold make it the lowest cost per head.
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
                  <div className="py-3 border-b border-gray-100 text-center font-bold text-green-600">₹25/km</div>
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

                    <a
                      href={`https://wa.me/917668570551?text=${encodeURIComponent(
                        `Hi, I want to book a ${vehicle.name} (${vehicle.capacity}, from ${vehicle.price}). Please share availability and a quote.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-yellow-500 hover:text-black transition-all w-full justify-center"
                    >
                      Book {vehicle.name} on WhatsApp
                      <ArrowRight className="w-4 h-4" />
                    </a>
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
              <a href={`https://wa.me/917668570551?text=${encodeURIComponent("Hi, help me choose between a tempo traveller and a bus for my group trip. Please share a quote.")}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700">
                WhatsApp Us
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Tempo vs Bus: Frequently Asked Questions</h2>
            <div className="space-y-4">
              {TEMPO_VS_BUS_FAQS.map((f, idx) => (
                <div key={f.question} className="bg-gray-50 rounded-xl border border-gray-200 p-6">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{f.question}</h3>
                  <p className={`text-gray-600${idx === 0 ? " speakable-faq-first" : ""}`}>{f.answer}</p>
                </div>
              ))}
            </div>

            {/* Post-FAQ CTA */}
            <div className="mt-10 bg-gray-900 rounded-2xl p-6 md:p-8 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                Still unsure which one to book?
              </h3>
              <p className="text-gray-300 mb-6">
                Tell us your group size and route — we will recommend the right vehicle and share an instant quote.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+917668570551"
                  className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition"
                >
                  <Phone className="w-5 h-5" /> Call: +91 76685 70551
                </a>
                <a
                  href={`https://wa.me/917668570551?text=${encodeURIComponent("Hi, help me choose between a tempo traveller and a bus for my group trip. Please share a quote.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full font-bold hover:bg-green-700 transition"
                >
                  WhatsApp a Recommendation
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-8 px-4 bg-gray-100">
          <div className="max-w-6xl mx-auto">
            <h3 className="font-bold text-gray-700 mb-4">Related Comparisons:</h3>
            <div className="flex flex-wrap gap-4">
              <Link href="/tempo-traveller-vs-mini-bus" className="text-yellow-600 hover:underline">Tempo Traveller vs Mini Bus</Link>
              <Link href="/12-seater-vs-17-seater-tempo" className="text-yellow-600 hover:underline">12 vs 17 Seater Tempo</Link>
              <Link href="/bus-vs-tempo-for-wedding" className="text-yellow-600 hover:underline">Bus vs Tempo for Wedding</Link>
              <Link href="/tempo-traveller" className="text-yellow-600 hover:underline">Tempo Traveller Routes</Link>
              <Link href="/bus-routes" className="text-yellow-600 hover:underline">Bus Routes</Link>
              <Link href="/chardham-yatra" className="text-yellow-600 hover:underline">Char Dham Yatra</Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
