import Link from 'next/link';
import { busStands } from '@/utilis/busStandData';
import { Phone, MapPin, Bus, ArrowRight, Clock, Shield, Star, Users, ChevronDown, CheckCircle, IndianRupee } from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import { getSpeakableSchema, getHowToSchema, getArticleSchema, getComparisonSchema, getTodayDate } from '@/lib/seo/speakable-helpers';
import AEOHead from '@/components/seo/AEOHead';
import SocialProofStrip from '@/components/shared/SocialProofStrip';
import BookingJourney from '@/components/shared/BookingJourney';
import InclusionBadges from '@/components/shared/InclusionBadges';
import SectionDivider from '@/components/shared/SectionDivider';

export const revalidate = 3600;

export const metadata = {
  title: 'Bus Stand Taxi | Taxi from Bus Stand | 13+ ISBTs | Triveni Cabs',
  description: 'Book a taxi from any bus stand or ISBT across North India. Fixed fares, 24/7 pickup at the bus stand exit, AC cabs. Kashmere Gate, Anand Vihar, Sindhi Camp Jaipur, Agra Idgah & more. Call 7668570551.',
  keywords: 'bus stand taxi, taxi from bus stand, cab at bus stand, ISBT cab service, bus stand pickup taxi, bus terminal taxi, prepaid bus stand taxi, ISBT taxi India, bus stand cab booking',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: { canonical: '/bus-stand-taxi' },
  openGraph: {
    title: 'Bus Stand & ISBT Taxi Service Across India | Triveni Cabs',
    description: 'Reliable cab service from major bus stands and ISBTs. Fixed fares, 24/7 availability, AC cabs. Serving 13+ bus terminals.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/bus-stand-taxi',
    siteName: 'Triveni Cabs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bus Stand Taxi Service | Triveni Cabs',
    description: 'Cab service from major bus stands and ISBTs across India. Fixed fares, 24/7 service.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
};

export default function BusStandTaxiHubPage() {
  const standEntries = Object.entries(busStands);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Bus Stand Taxi", "item": "https://www.trivenicabs.in/bus-stand-taxi" },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Triveni Cabs - Bus Stand Taxi Service",
    "brand": { "@type": "Brand", "name": "Triveni Cabs" },
    "description": "Reliable taxi and cab service from major bus stands and ISBTs across India. 24/7 availability, fixed fares, AC cabs.",
    "provider": {
      "@type": "LocalBusiness",
      "@id": "https://www.trivenicabs.in/#organization",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
    },
    "areaServed": standEntries.map(([, s]) => ({ "@type": "Place", "name": `${s.name}, ${s.city}` })),
    ...getRatingAndReviews('bus-stand-taxi-hub', 'bus')
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Bus Stand Taxi Services",
    "numberOfItems": standEntries.length,
    "itemListElement": standEntries.map(([slug, s], i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": `${s.name} Cab Service`,
      "url": `https://www.trivenicabs.in/bus-stand-taxi/${slug}`
    }))
  };

  const hubFaqs = [
    { question: "How do I book a taxi from a bus stand?", answer: "Call Triveni Cabs at 7668570551 or send a WhatsApp message with your bus stand name, arrival time, and drop destination. We assign a verified driver who waits at the bus stand exit before your bus arrives. Pre-booking guarantees a fixed fare and zero waiting time." },
    { question: "Are cabs available 24/7 at bus stands?", answer: "Yes. Triveni Cabs operates round the clock at all 13+ bus stands and ISBTs we serve. Whether your bus arrives at midnight or 5 AM, a driver is available — and there are no extra night surcharges on standard city fares." },
    { question: "What are the typical taxi fares from a bus stand?", answer: "Fares are fixed and transparent. Local city drops start from ₹100-250, airport transfers range from ₹350-800 depending on the city, and outstation trips are quoted upfront. All fares are for AC sedans with no surge pricing, meter tampering, or hidden charges." },
    { question: "Which bus stands does Triveni Cabs serve?", answer: "We serve 13+ major terminals including ISBT Kashmere Gate, ISBT Anand Vihar and ISBT Sarai Kale Khan (Delhi), Sindhi Camp (Jaipur), Agra ISBT Idgah, ISBT Sector 43 (Chandigarh), plus bus stands in Haridwar, Dehradun, Lucknow, Varanasi, Amritsar, Shimla and Manali." },
    { question: "Is prepaid taxi at the bus stand better than an app cab or auto?", answer: "A pre-booked Triveni cab gives you a fixed fare, a guaranteed AC vehicle, and a verified driver waiting at the exit — unlike app cabs that surge during peak arrivals or autos that negotiate on the spot. You avoid haggling and never wait after a tiring bus journey." },
    { question: "How early should I book my bus stand taxi?", answer: "Booking a few hours in advance is ideal, and a day ahead during festivals, weekends, and tourist season. Advance booking guarantees a driver at the pickup point with zero waiting. On-the-spot bookings are accepted too, subject to availability — just call 7668570551." },
    { question: "Where will the driver meet me at the bus stand?", answer: "Each bus stand page lists the exact pickup point (for example, the prepaid counter near Gate No. 1 or the designated taxi zone by the main exit). After booking, we share the driver's live location, name, photo, and vehicle number so you can meet within minutes of stepping off your bus." },
    { question: "What types of vehicles can I book from a bus stand?", answer: "You can book an AC sedan (Swift Dzire, Honda Amaze) for up to 4 passengers, an SUV (Toyota Innova, Maruti Ertiga) for 6-7 passengers, or a tempo traveller for larger groups. Choose based on your passenger count and luggage when you book." },
    { question: "Can I carry heavy luggage in a bus stand taxi?", answer: "Yes. Sedans fit 2-3 suitcases comfortably and SUVs handle 4-5 large bags plus passengers. Mention your luggage when booking so we assign the right vehicle — especially useful after long interstate bus journeys with multiple bags." },
    { question: "Are the drivers verified and the cabs safe?", answer: "Every Triveni Cabs driver is background-verified, licensed, and trained for professional, courteous service. All rides are GPS-tracked and you receive driver and vehicle details before pickup, making it safe for solo travellers, women, and families." },
    { question: "Can I book an outstation cab from a bus stand?", answer: "Absolutely. Beyond local city drops, we run outstation trips from every bus stand we serve — for example Delhi to Agra, Chandigarh to Shimla, or Haridwar to Rishikesh. Outstation fares are quoted upfront with experienced highway drivers." },
    { question: "Do you provide a GST invoice for bus stand cab rides?", answer: "Yes. We provide a proper GST tax invoice on request, which is useful for business travellers and corporate reimbursement. Mention your GST requirement at booking and we email or hand over the invoice after the trip." }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "speakable": getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.speakable-faq-first']),
    "mainEntity": hubFaqs.map(f => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": { "@type": "Answer", "text": f.answer }
    }))
  };

  // HowTo — booking process (renders as visible <ol> below)
  const howToSteps = [
    { name: 'Call or WhatsApp Triveni Cabs', text: 'Call 7668570551 or WhatsApp with the bus stand name, your expected arrival time, and your drop destination.' },
    { name: 'Choose your vehicle & confirm the fare', text: 'Pick an AC sedan, SUV, or tempo traveller. You get a fixed, transparent fare quote upfront — no surge, no meter.' },
    { name: 'Receive driver details', text: 'Get instant confirmation with the driver name, photo, phone number, and vehicle registration, plus live GPS tracking.' },
    { name: 'Meet at the bus stand exit', text: 'Your driver waits at the marked pickup point near the exit gate when your bus arrives. Step out and ride away — no waiting, no haggling.' }
  ];
  const howToSchema = getHowToSchema({
    name: 'How to Book a Taxi from a Bus Stand',
    description: 'A simple 4-step guide to booking a fixed-fare cab from any bus stand or ISBT with Triveni Cabs.',
    totalTime: 'PT3M',
    estimatedCost: { currency: 'INR', value: 100 },
    steps: howToSteps
  });

  // Article — E-E-A-T + freshness + voice search
  const articleSchema = getArticleSchema({
    slug: 'bus-stand-taxi',
    headline: 'Bus Stand & ISBT Taxi Service Across India — Fixed Fares, 24/7 Pickup',
    description: 'How to book a reliable, fixed-fare taxi from any bus stand or ISBT in North India: covered terminals, fares, prepaid vs app cab vs auto, and booking steps.',
    image: '/images/triveni-cabs-og.jpg',
    datePublished: '2026-01-01',
    dateModified: getTodayDate(),
    authorName: 'editorial',
    type: 'Article',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first']
  });

  // Comparison table data — prepaid stand taxi vs app cab vs auto
  const comparisonRows = [
    { feature: 'Fare certainty', triveni: 'Fixed fare quoted upfront', app: 'Surges during peak bus arrivals', auto: 'Negotiated on the spot' },
    { feature: 'Vehicle', triveni: 'AC sedan / SUV guaranteed', app: 'Varies, AC not guaranteed', auto: 'Open auto, no AC' },
    { feature: 'Availability at night', triveni: '24/7, no night surcharge', app: 'Limited, high surge', auto: 'Scarce, premium charged' },
    { feature: 'Driver verification', triveni: 'Background-verified & GPS-tracked', app: 'Verified, varies by city', auto: 'Unverified' },
    { feature: 'Waiting for delayed bus', triveni: 'Driver waits free for delays', app: 'Cancels / re-books', auto: 'May refuse to wait' },
    { feature: 'Luggage & comfort', triveni: 'Fits suitcases, clean cabin', app: 'Depends on car', auto: 'Limited space' }
  ];
  const comparisonSchema = getComparisonSchema({
    slug: 'bus-stand-taxi',
    title: 'Bus Stand Taxi vs App Cab vs Auto-Rickshaw',
    description: 'A comparison of pre-booked bus stand taxis, app-based cabs, and auto-rickshaws on fare, vehicle, night availability, safety, and comfort.',
    rows: comparisonRows,
    mentions: ['Prepaid taxi', 'App cab', 'Auto-rickshaw', 'Bus stand pickup']
  });

  // Group by city
  const grouped = {};
  standEntries.forEach(([slug, stand]) => {
    const city = stand.city;
    if (!grouped[city]) grouped[city] = [];
    grouped[city].push({ slug, ...stand });
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {comparisonSchema.map((s, i) => (
        <script key={`cmp-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <AEOHead pageType="busStand" data={{ url: '/bus-stand-taxi', title: 'Bus Stand Taxi Service' }} />

      <div className="min-h-screen bg-slate-950 text-white">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-slate-950 to-emerald-950" />
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-lime-500/5 rounded-full blur-3xl" />
          </div>
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(rgba(74,222,128,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
              <Link href="/" className="hover:text-green-400 transition-colors">Home</Link>
              <ChevronDown className="w-3 h-3 -rotate-90" />
              <span className="text-green-400">Bus Stand Taxi</span>
            </nav>

            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
                <Bus className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-medium">13 Bus Stands Covered</span>
              </div>

              <h1 className="speakable-headline text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-lime-400 bg-clip-text text-transparent">
                  Bus Stand & ISBT
                </span>
                <br />
                <span className="text-white">Taxi Service Across India</span>
              </h1>

              <p className="speakable-lead text-lg text-gray-300 mb-8 leading-relaxed">
                Book a taxi from any bus stand or ISBT and get a reliable, AC cab waiting at the exit gate. We serve 13 major bus terminals across North India with fixed fares starting at ₹100, 24/7 availability, verified drivers, and zero waiting time — no surge pricing, no haggling with autos.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="tel:7668570551"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5" />
                  Call Now - 7668570551
                </a>
                <a
                  href="https://wa.me/917668570551"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-green-500/30 hover:border-green-400/60 hover:bg-green-500/10 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300"
                >
                  <WhatsAppIcon className="w-5 h-5 text-green-400" />
                  WhatsApp Booking
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <SocialProofStrip theme="dark" />

        {/* Stats */}
        <section className="border-y border-white/5 bg-gradient-to-r from-green-950/50 via-slate-950 to-emerald-950/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Bus, value: '13+', label: 'Bus Stands' },
                { icon: Clock, value: '24/7', label: 'Availability' },
                { icon: Shield, value: '100%', label: 'Safe Rides' },
                { icon: Star, value: '4.8/5', label: 'Customer Rating' },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <p className="font-bold text-xl text-white">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Direct Answer (AEO / featured-snippet target) */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-green-500/20 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                How do I get a taxi from a bus stand?
              </h2>
              <p className="speakable-faq-first text-gray-300 leading-relaxed text-base md:text-lg">
                To get a taxi from a bus stand, call Triveni Cabs at <strong className="text-white">7668570551</strong> or WhatsApp with the bus stand name, your arrival time, and destination. A verified driver waits at the marked pickup point near the exit gate when your bus arrives. Fares are <strong className="text-green-400">fixed and start at ₹100</strong> for local drops, with AC sedans and SUVs available 24/7 and no surge pricing. This works at all 13+ ISBTs and bus stands we serve across North India.
              </p>
            </div>
          </div>
        </section>

        {/* How to Book — visible ordered list (HowTo schema mirror) */}
        <section className="py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                How to <span className="text-green-400">Book a Taxi from a Bus Stand</span>
              </h2>
              <p className="text-gray-400">Four simple steps to a fixed-fare cab waiting at your bus stand</p>
            </div>
            <ol className="space-y-4">
              {[
                { name: 'Call or WhatsApp Triveni Cabs', text: 'Call 7668570551 or WhatsApp with the bus stand name, your expected arrival time, and your drop destination.' },
                { name: 'Choose your vehicle & confirm the fare', text: 'Pick an AC sedan, SUV, or tempo traveller. You get a fixed, transparent fare quote upfront — no surge, no meter.' },
                { name: 'Receive driver details', text: 'Get instant confirmation with the driver name, photo, phone number, and vehicle registration, plus live GPS tracking.' },
                { name: 'Meet at the bus stand exit', text: 'Your driver waits at the marked pickup point near the exit gate when your bus arrives. Step out and ride away — no waiting, no haggling.' },
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-5">
                  <div className="w-9 h-9 rounded-full bg-green-500 text-slate-950 font-bold flex items-center justify-center flex-shrink-0">{i + 1}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{step.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Comparison Table — prepaid stand taxi vs app cab vs auto */}
        <section className="py-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3">
                Bus Stand Taxi vs <span className="text-green-400">App Cab vs Auto</span>
              </h2>
              <p className="text-gray-400">Why a pre-booked bus stand taxi beats app cabs and autos on price, comfort, and safety</p>
            </div>
            <div className="overflow-x-auto bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="px-4 py-4 font-semibold text-gray-300">Feature</th>
                    <th className="px-4 py-4 font-semibold text-green-400">Triveni Bus Stand Taxi</th>
                    <th className="px-4 py-4 font-semibold text-gray-300">App Cab</th>
                    <th className="px-4 py-4 font-semibold text-gray-300">Auto-Rickshaw</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Fare certainty', triveni: 'Fixed fare quoted upfront', app: 'Surges during peak bus arrivals', auto: 'Negotiated on the spot' },
                    { feature: 'Vehicle', triveni: 'AC sedan / SUV guaranteed', app: 'Varies, AC not guaranteed', auto: 'Open auto, no AC' },
                    { feature: 'Availability at night', triveni: '24/7, no night surcharge', app: 'Limited, high surge', auto: 'Scarce, premium charged' },
                    { feature: 'Driver verification', triveni: 'Background-verified & GPS-tracked', app: 'Verified, varies by city', auto: 'Unverified' },
                    { feature: 'Waiting for delayed bus', triveni: 'Driver waits free for delays', app: 'Cancels / re-books', auto: 'May refuse to wait' },
                    { feature: 'Luggage & comfort', triveni: 'Fits suitcases, clean cabin', app: 'Depends on car', auto: 'Limited space' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-white/5 last:border-0">
                      <td className="px-4 py-3.5 font-medium text-gray-200">{row.feature}</td>
                      <td className="px-4 py-3.5 text-green-300">
                        <span className="inline-flex items-start gap-1.5">
                          <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          {row.triveni}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-gray-400">{row.app}</td>
                      <td className="px-4 py-3.5 text-gray-400">{row.auto}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-xs text-gray-500 mt-4">
              <IndianRupee className="w-3 h-3 inline -mt-0.5" /> All Triveni fares are fixed AC-sedan rates with no surge or hidden charges.
            </p>
          </div>
        </section>

        {/* Bus Stand Cards grouped by city */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Which <span className="text-green-400">bus stand</span> are you arriving at?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">Select the bus stand where you are arriving for instant cab service with transparent pricing</p>
            </div>

            {Object.entries(grouped).map(([city, stands]) => (
              <div key={city} className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold">{city}</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-green-500/20 to-transparent" />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {stands.map((stand) => (
                    <Link
                      key={stand.slug}
                      href={`/bus-stand-taxi/${stand.slug}`}
                      className="group bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-green-500/30 overflow-hidden transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* Card Header */}
                      <div className="bg-gradient-to-r from-green-600/20 to-emerald-500/10 px-6 py-4 border-b border-white/5">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-xl bg-green-500/20 border border-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Bus className="w-6 h-6 text-green-400" />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg group-hover:text-green-400 transition-colors">{stand.name}</h4>
                            <p className="text-sm text-gray-400">{stand.area}</p>
                          </div>
                        </div>
                      </div>

                      {/* Card Body */}
                      <div className="px-6 py-5">
                        <p className="text-sm text-gray-400 mb-4 line-clamp-2">{stand.description}</p>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm">
                            <Users className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{stand.busOperators.length} bus operators</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300">{stand.destinations.length} popular destinations</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {stand.destinations.slice(0, 3).map((d, i) => (
                            <span key={i} className="bg-green-500/10 text-green-300 text-xs px-2.5 py-1 rounded-full border border-green-500/15">
                              {d.name}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-3 border-t border-white/5">
                          <span className="text-sm text-gray-400">From <span className="text-green-400 font-semibold">{stand.destinations[0]?.fare}</span></span>
                          <span className="inline-flex items-center gap-1 text-green-400 text-sm font-medium group-hover:gap-2 transition-all">
                            View Fares <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 bg-gradient-to-b from-slate-950 via-green-950/20 to-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why Choose <span className="text-green-400">Triveni Cabs</span> at Bus Stands?
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: 'Pre-Booked Pickup', desc: 'No scrambling for autos or taxis. Your cab is ready before your bus arrives.' },
                { title: 'Fixed Transparent Fares', desc: 'Know your fare upfront. No surge pricing, no meter tampering, no arguments.' },
                { title: '24/7 Service', desc: 'Late night bus? Early morning arrival? We are available round the clock.' },
                { title: 'Verified Professional Drivers', desc: 'Background-checked, licensed drivers who know local routes inside out.' },
                { title: 'AC Comfort After Long Bus Rides', desc: 'Step out of a cramped bus into a clean, air-conditioned sedan or SUV.' },
                { title: 'Outstation Available', desc: 'Not just local - book cabs to any destination across North India.' },
              ].map((feature, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-green-500/30 p-6 transition-all duration-300">
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <InclusionBadges preset="local" theme="dark" />
        <SectionDivider color="emerald" className="my-4" />

        {/* How It Works */}
        <BookingJourney theme="dark" />
        <SectionDivider color="emerald" className="my-4" />

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Frequently Asked <span className="text-green-400">Questions</span>
              </h2>
              <p className="text-gray-400">Common queries about our bus stand taxi services</p>
            </div>
            <div className="space-y-4">
              {hubFaqs.map((faq, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6">
                  <h3 className="font-bold text-lg mb-3 text-green-400">{faq.question}</h3>
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cross-Service Links */}
        <section className="py-20 bg-gradient-to-b from-slate-950 via-green-950/20 to-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Explore More <span className="text-green-400">Travel Services</span>
              </h2>
              <p className="text-gray-400">Other ways to travel across India with Triveni Cabs</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { title: 'Railway Station Taxi', href: '/railway-station-taxi', desc: 'Taxi at 27+ railway stations' },
                { title: 'One-Way Cabs', href: '/one-way-cab', desc: 'Affordable outstation rides' },
                { title: 'Sightseeing Tours', href: '/sightseeing', desc: 'Explore tourist attractions' },
                { title: 'Tour Packages', href: '/tour-package', desc: 'Multi-day curated tours' },
              ].map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="group bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-green-500/30 p-6 transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="font-bold group-hover:text-green-400 transition-colors mb-1">{link.title}</h3>
                  <p className="text-sm text-gray-400">{link.desc}</p>
                  <span className="inline-flex items-center gap-1 text-green-400 text-sm font-medium mt-3 group-hover:gap-2 transition-all">
                    Explore <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-500 to-lime-500" />
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnYtNGgydjRoNHYyaC00djRoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
              <div className="relative px-8 py-14 sm:px-14 text-center">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  Arriving at a Bus Stand?
                </h2>
                <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
                  Skip the chaos. Book a comfortable, AC cab with fixed fares. Available at 13+ bus stands across India.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="tel:7668570551"
                    className="inline-flex items-center gap-3 bg-white text-green-700 font-bold px-8 py-4 rounded-2xl hover:bg-green-50 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <Phone className="w-5 h-5" />
                    Call 7668570551
                  </a>
                  <a
                    href="https://wa.me/917668570551"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm text-white font-bold px-8 py-4 rounded-2xl border border-white/30 hover:bg-white/30 transition-all"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
