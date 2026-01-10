import Link from 'next/link';
import Image from 'next/image';
import {
  corporateServices,
  corporateFleet,
  corporateBenefits,
  corporateFAQs,
  getAllCorporateCities
} from '@/utilis/corporateTransportData';
import {
  Phone,
  MapPin,
  Users,
  Shield,
  Clock,
  ChevronRight,
  Building2,
  Briefcase,
  Car,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  TrendingUp,
  HeadphonesIcon,
  Play,
  Star
} from 'lucide-react';

export const metadata = {
  title: 'Corporate Transportation Service India | Employee Transport | Triveni Cabs',
  description: 'Premium corporate transportation across India. Employee pick-up/drop, executive travel, fleet management. Serving Delhi, Jaipur, Chandigarh, Agra, Dehradun. Call 7668570551.',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: {
    canonical: '/corporate-transportation-service',
  },
  openGraph: {
    title: 'Corporate Transportation Service | Employee Transport Solutions | Triveni Cabs',
    description: 'End-to-end corporate transportation. Employee shuttles, executive travel, airport transfers. 500+ companies trust us.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/corporate-transportation-service',
    siteName: 'Triveni Cabs',
    images: [
      {
        url: '/images/sightseeing/Delhi/Delhi_hero_section.jpg',
        width: 1200,
        height: 630,
        alt: 'Corporate Transportation Service India - Triveni Cabs'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corporate Transportation Service | Triveni Cabs',
    description: 'Employee transport, executive travel, fleet solutions. Call 7668570551.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/sightseeing/Delhi/Delhi_hero_section.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function CorporateTransportationPage() {
  const cities = getAllCorporateCities();

  // Schema markup
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Corporate Transportation Service",
    "name": "Corporate Transportation Solutions India",
    "description": "Comprehensive corporate transportation including employee transport, executive travel, airport transfers, and fleet management across India.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "email": "cabstriveni@gmail.com",
      "url": "https://www.trivenicabs.in"
    },
    "areaServed": [
      { "@type": "City", "name": "Delhi" },
      { "@type": "City", "name": "Jaipur" },
      { "@type": "City", "name": "Chandigarh" },
      { "@type": "City", "name": "Agra" },
      { "@type": "City", "name": "Dehradun" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "850",
      "bestRating": "5"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Corporate Transportation", "item": "https://www.trivenicabs.in/corporate-transportation-service" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": corporateFAQs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <div className="min-h-screen bg-white">
        {/* Hero Section - Full Screen with Image */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/sightseeing/Delhi/Delhi_hero_section.jpg"
              alt="Corporate Transportation Service"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
          </div>

          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-transparent to-cyan-900/30" />

          {/* Floating Elements */}
          <div className="absolute top-32 right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-32 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

          {/* Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  <span className="text-cyan-300 font-medium text-sm tracking-widest uppercase">Enterprise Mobility Partner</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1]">
                  Corporate
                  <span className="block mt-2 text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text">
                    Transportation
                  </span>
                  <span className="block mt-2 text-4xl md:text-5xl lg:text-6xl font-light text-white/80">Redefined</span>
                </h1>

                <p className="text-xl text-slate-300 max-w-lg leading-relaxed">
                  Elevate your workforce mobility with India&apos;s most trusted corporate transportation partner. Seamless, safe, and always on time.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-8 pt-4">
                  {[
                    { value: '500+', label: 'Corporate Clients', icon: Building2 },
                    { value: '99.5%', label: 'On-Time Delivery', icon: Clock },
                    { value: '25K+', label: 'Daily Commuters', icon: Users }
                  ].map((stat, idx) => (
                    <div key={idx} className="group">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-cyan-400/50 transition-colors">
                          <stat.icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-white">{stat.value}</div>
                          <div className="text-sm text-slate-400">{stat.label}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="tel:+917668570551"
                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 group-hover:animate-pulse" />
                    Get Enterprise Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="https://wa.me/917668570551?text=I need corporate transportation services"
                    className="inline-flex items-center justify-center gap-3 bg-white/5 backdrop-blur-xl text-white px-8 py-5 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp Us
                  </Link>
                </div>
              </div>

              {/* Right Side - Feature Cards Grid */}
              <div className="hidden lg:grid grid-cols-2 gap-4">
                {[
                  { image: '/images/wedding/luxury_car.jpg', title: 'Executive Sedans', desc: 'Premium comfort for leadership', price: '₹12-15/km' },
                  { image: '/images/wedding/premium_suv.jpg', title: 'Premium SUVs', desc: 'Spacious & elegant travel', price: '₹16-20/km' },
                  { image: '/images/tempo/17_seater.jpg', title: 'Tempo Traveller', desc: '12-26 seater for teams', price: '₹23-27/km' },
                  { image: '/images/bus/45_SEATER_BUS.jpg', title: 'Corporate Buses', desc: '32-56 seater shuttles', price: '₹45-75/km' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/20 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="text-cyan-400 text-sm font-semibold mb-1">{item.price}</div>
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-slate-300 text-sm">{item.desc}</p>
                    </div>
                    <div className="absolute top-4 right-4 w-10 h-10 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity border border-white/20">
                      <ArrowRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-white/60 rounded-full" />
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-6 bg-slate-900 border-y border-slate-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
              {[
                { icon: Shield, text: 'Verified Drivers', color: 'text-green-400' },
                { icon: Clock, text: '24/7 Support', color: 'text-cyan-400' },
                { icon: TrendingUp, text: 'GPS Tracking', color: 'text-blue-400' },
                { icon: Star, text: '4.9/5 Rating', color: 'text-yellow-400' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-slate-300 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-white to-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-cyan-100 px-5 py-2 rounded-full mb-6">
                <Briefcase className="w-4 h-4 text-cyan-600" />
                <span className="text-cyan-700 font-semibold text-sm tracking-wider uppercase">Our Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                Complete Corporate
                <span className="text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text"> Mobility Solutions</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From daily commute to special requirements - a single partner for all your corporate transportation needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {corporateServices.map((service, idx) => (
                <div
                  key={service.id}
                  className="group bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-cyan-200 hover:shadow-2xl hover:shadow-cyan-100/50 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-lg shadow-cyan-500/30">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-500 text-sm mb-6">{service.description}</p>
                  <ul className="space-y-3">
                    {service.services.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-cyan-500 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Section with Images */}
        <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl px-5 py-2 rounded-full mb-6 border border-white/20">
                <Car className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 font-semibold text-sm tracking-wider uppercase">Our Fleet</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Vehicles for <span className="text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">Every Requirement</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                Executive sedans to luxury buses - comprehensive fleet for all corporate needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {corporateFleet.map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="group bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-400/50 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 bg-cyan-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {vehicle.capacity}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{vehicle.name}</h3>
                    <p className="text-slate-400 text-sm mb-4">{vehicle.ideal}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {vehicle.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="text-xs bg-white/10 text-slate-300 px-3 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="text-cyan-400 font-bold text-lg">{vehicle.priceRange}</span>
                      <Link href="tel:+917668570551" className="text-white hover:text-cyan-400 transition-colors flex items-center gap-1 text-sm font-medium">
                        Book <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cities Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-indigo-100 px-5 py-2 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-indigo-600" />
                <span className="text-indigo-700 font-semibold text-sm tracking-wider uppercase">Service Locations</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                Corporate Hubs <span className="text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text">We Serve</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Trusted by leading enterprises across major business cities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/corporate-transportation-service/${city.slug}`}
                  className="group block h-full"
                >
                  <div className="relative bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                    {/* City Image */}
                    <div className="relative h-56 overflow-hidden flex-shrink-0">
                      <Image
                        src={city.heroImage}
                        alt={city.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                      <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full border border-white/30">
                        <span className="text-white text-sm font-semibold">{city.stats.companies} Companies</span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="text-cyan-400 text-sm font-semibold mb-1">{city.tagline}</div>
                        <h3 className="text-2xl font-bold text-white">{city.name}</h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">{city.description}</p>

                      {/* Business Areas */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {city.businessAreas.slice(0, 3).map((area, idx) => (
                          <span key={idx} className="text-xs bg-slate-100 text-slate-600 px-3 py-1 rounded-full">
                            {area.name}
                          </span>
                        ))}
                      </div>

                      {/* Stats Row - Push to bottom */}
                      <div className="mt-auto">
                        <div className="grid grid-cols-3 gap-4 py-4 border-t border-slate-100">
                          <div className="text-center">
                            <div className="text-xl font-bold text-slate-900">{city.stats.companies}</div>
                            <div className="text-xs text-slate-500">Companies</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold text-slate-900">{city.stats.dailyTrips}</div>
                            <div className="text-xs text-slate-500">Daily Trips</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold text-slate-900">{city.stats.employees}</div>
                            <div className="text-xs text-slate-500">Employees</div>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="flex items-center justify-between pt-4">
                          <span className="text-cyan-600 font-semibold group-hover:text-cyan-700 transition-colors">
                            Explore {city.name}
                          </span>
                          <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center group-hover:bg-cyan-500 transition-all duration-300">
                            <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-white transition-colors" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section - Premium Design */}
        <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl px-6 py-3 rounded-full mb-8 border border-cyan-400/30">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-300 font-semibold text-sm tracking-widest uppercase">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                Why Leading Companies
                <span className="block mt-2 text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text">Choose Us</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Enterprise-grade transportation with personalized service excellence
              </p>
            </div>

            {/* Benefits Grid with Bento-style layout */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {corporateBenefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 ${
                    idx === 0 ? 'lg:col-span-2 bg-gradient-to-br from-cyan-500/20 via-cyan-500/10 to-transparent' :
                    idx === 3 ? 'lg:col-span-2 bg-gradient-to-br from-indigo-500/20 via-indigo-500/10 to-transparent' :
                    'bg-white/5'
                  }`}
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-blue-500/0 to-indigo-500/0 group-hover:from-cyan-500/10 group-hover:via-blue-500/10 group-hover:to-indigo-500/10 transition-all duration-500" />

                  {/* Border Animation */}
                  <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-cyan-400/50 transition-colors duration-500" />

                  {/* Content */}
                  <div className="relative p-8">
                    {/* Icon with animated background */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
                      <div className="relative w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center text-4xl shadow-lg shadow-cyan-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        {benefit.icon}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{benefit.title}</h3>
                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{benefit.description}</p>

                    {/* Decorative Arrow */}
                    <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1">
                      <ArrowRight className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Open Cards Design */}
        <section className="py-24 px-4 bg-gradient-to-b from-white via-slate-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 px-6 py-3 rounded-full mb-6">
                <HeadphonesIcon className="w-5 h-5 text-indigo-600" />
                <span className="text-indigo-700 font-semibold text-sm tracking-wider uppercase">Got Questions?</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
                Frequently Asked
                <span className="block text-transparent bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text">Questions</span>
              </h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                Everything you need to know about our corporate transportation services
              </p>
            </div>

            {/* FAQ Cards Grid - Always Open */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {corporateFAQs.map((faq, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all duration-500 hover:-translate-y-2"
                >
                  {/* Question Number Badge */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg shadow-indigo-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {String(idx + 1).padStart(2, '0')}
                  </div>

                  {/* Content */}
                  <div className="pt-4">
                    <h3 className="text-lg font-bold text-slate-800 mb-4 leading-tight group-hover:text-indigo-700 transition-colors">
                      {faq.question}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>

            {/* Contact CTA below FAQ */}
            <div className="mt-16 text-center">
              <p className="text-slate-600 mb-4">Still have questions?</p>
              <Link
                href="tel:+917668570551"
                className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call us at +91 7668570551
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section - Premium Split Design */}
        <section className="relative overflow-hidden">
          {/* Background with Split Design */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

          {/* Animated Gradient Orbs */}
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/30 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />

          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl px-5 py-2.5 rounded-full mb-8 border border-cyan-400/30">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-300 font-semibold text-sm tracking-wider uppercase">Get Started Today</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Ready to
                  <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text">
                    Transform Your
                  </span>
                  <span className="block">Corporate Mobility?</span>
                </h2>

                <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                  Join 500+ enterprises who trust Triveni Cabs for seamless employee transportation. Experience the difference today.
                </p>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-6 mb-10">
                  {[
                    { value: '500+', label: 'Happy Clients' },
                    { value: '99.5%', label: 'On-Time Rate' },
                    { value: '4.9★', label: 'Rating' }
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-3xl font-black text-white">{stat.value}</div>
                      <div className="text-sm text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right - Contact Card */}
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-30" />

                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-cyan-500/30">
                      <Phone className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Talk to Our Experts</h3>
                    <p className="text-slate-400">Get a customized quote in minutes</p>
                  </div>

                  {/* Contact Options */}
                  <div className="space-y-4">
                    <Link
                      href="tel:+917668570551"
                      className="group flex items-center justify-between w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-5 rounded-2xl font-bold text-lg shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300"
                    >
                      <span className="flex items-center gap-3">
                        <Phone className="w-6 h-6" />
                        +91 7668570551
                      </span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href="https://wa.me/917668570551?text=I need corporate transportation services"
                      className="group flex items-center justify-between w-full bg-green-500 text-white p-5 rounded-2xl font-bold text-lg shadow-xl shadow-green-500/30 hover:shadow-green-500/50 hover:scale-[1.02] transition-all duration-300"
                    >
                      <span className="flex items-center gap-3">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        WhatsApp Us
                      </span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href="/contact"
                      className="group flex items-center justify-between w-full bg-white text-slate-900 p-5 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-all duration-300"
                    >
                      <span className="flex items-center gap-3">
                        <Briefcase className="w-6 h-6" />
                        Request Proposal
                      </span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Trust Badge */}
                  <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
                      <Shield className="w-4 h-4 text-green-400" />
                      Trusted by 500+ enterprises across India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
