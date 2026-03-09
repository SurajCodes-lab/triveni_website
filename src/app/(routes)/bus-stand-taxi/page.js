import Link from 'next/link';
import { busStands } from '@/utilis/busStandData';
import { Phone, MapPin, Bus, ArrowRight, Clock, Shield, Star, Users, ChevronDown } from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';

export const revalidate = false;

export const metadata = {
  title: 'Bus Stand & ISBT Taxi Service | Cab from Bus Stands Across India | Triveni Cabs',
  description: 'Book reliable taxi from bus stands & ISBTs across India. Service at Kashmere Gate, Anand Vihar, Sindhi Camp Jaipur, Agra Idgah & more. Fixed fares, 24/7 service. Call 7668570551.',
  keywords: 'bus stand taxi, ISBT cab service, bus stand cab, bus terminal taxi, taxi from bus stand, ISBT taxi service India, bus stand pickup cab',
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
    "description": "Reliable taxi and cab service from major bus stands and ISBTs across India. 24/7 availability, fixed fares, AC cabs.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
    },
    "areaServed": standEntries.map(([, s]) => ({ "@type": "Place", "name": `${s.name}, ${s.city}` })),
  };

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

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-green-400 via-emerald-300 to-lime-400 bg-clip-text text-transparent">
                  Bus Stand & ISBT
                </span>
                <br />
                <span className="text-white">Taxi Service Across India</span>
              </h1>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Arrive at any bus stand and get a reliable, comfortable cab instantly. We serve 13 major bus terminals and ISBTs across North India with fixed fares, 24/7 availability, and professional drivers.
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

        {/* Bus Stand Cards grouped by city */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Choose Your <span className="text-green-400">Bus Stand</span>
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
