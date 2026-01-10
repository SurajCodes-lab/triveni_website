import Link from 'next/link';
import Image from 'next/image';
import {
  eventCategories,
  eventServices,
  eventFleet,
  eventBenefits,
  eventFAQs,
  getAllEventCities
} from '@/utilis/eventTransportData';
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
  Star,
  TrendingUp,
  HeadphonesIcon,
  Calendar,
  Sparkles,
  Heart,
  PartyPopper,
  Music,
  Camera
} from 'lucide-react';

export const metadata = {
  title: 'Event Transportation Service India | Wedding, Corporate Event Transport | Triveni Cabs',
  description: 'Premium event transportation across India. Wedding guest transport, corporate events, MICE logistics. Delhi, Jaipur, Agra, Chandigarh, Dehradun. Call 7668570551.',
  authors: [{ name: 'Triveni Cabs' }],
  creator: 'Triveni Cabs',
  publisher: 'Triveni Cabs',
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: {
    canonical: '/event-transportation-service',
  },
  openGraph: {
    title: 'Event Transportation Service | Wedding & Corporate Events | Triveni Cabs',
    description: 'End-to-end event transportation. Weddings, corporate events, MICE logistics. 1000+ events managed successfully.',
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.trivenicabs.in/event-transportation-service',
    siteName: 'Triveni Cabs',
    images: [
      {
        url: '/images/wedding/luxury_car.jpg',
        width: 1200,
        height: 630,
        alt: 'Event Transportation Service India - Triveni Cabs'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Event Transportation Service | Triveni Cabs',
    description: 'Wedding, corporate & event transportation. Call 7668570551.',
    creator: '@trivenicabs',
    site: '@trivenicabs',
    images: ['/images/wedding/luxury_car.jpg']
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

export default function EventTransportationPage() {
  const cities = getAllEventCities();

  // Schema markup
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Event Transportation Service",
    "name": "Event Transportation Solutions India",
    "description": "Comprehensive event transportation including weddings, corporate events, MICE logistics, and large gatherings across India.",
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
      "reviewCount": "1250",
      "bestRating": "5"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Event Transportation", "item": "https://www.trivenicabs.in/event-transportation-service" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": eventFAQs.map(faq => ({
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
        {/* Hero Section - Full Screen Celebration Theme */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900 via-purple-900 to-indigo-900" />

          {/* Background Pattern - Confetti-like */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full" />
            <div className="absolute top-40 right-20 w-3 h-3 bg-pink-400 rounded-full" />
            <div className="absolute top-60 left-1/4 w-2 h-2 bg-blue-400 rounded-full" />
            <div className="absolute bottom-40 right-1/3 w-5 h-5 bg-green-400 rounded-full" />
            <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-purple-400 rounded-full" />
          </div>

          {/* Animated Gradient Orbs */}
          <div className="absolute top-32 right-20 w-96 h-96 bg-pink-500/30 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-32 left-20 w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-rose-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />

          {/* Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl px-6 py-3 rounded-full border border-white/20">
                  <PartyPopper className="w-5 h-5 text-pink-300" />
                  <span className="text-pink-200 font-medium text-sm tracking-widest uppercase">Your Event, Our Priority</span>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1]">
                  Event
                  <span className="block mt-2 text-transparent bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 bg-clip-text">
                    Transportation
                  </span>
                  <span className="block mt-2 text-4xl md:text-5xl lg:text-6xl font-light text-white/80">Made Magical</span>
                </h1>

                <p className="text-xl text-rose-100 max-w-lg leading-relaxed">
                  From intimate gatherings to grand celebrations - flawless guest transportation that makes your event truly memorable.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-8 pt-4">
                  {[
                    { value: '1000+', label: 'Events Managed', icon: Calendar },
                    { value: '50K+', label: 'Guests Transported', icon: Users },
                    { value: '4.9★', label: 'Client Rating', icon: Star }
                  ].map((stat, idx) => (
                    <div key={idx} className="group">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-pink-400/50 transition-colors">
                          <stat.icon className="w-5 h-5 text-pink-400" />
                        </div>
                        <div>
                          <div className="text-3xl font-bold text-white">{stat.value}</div>
                          <div className="text-sm text-rose-200/70">{stat.label}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="tel:+917668570551"
                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-pink-500 to-rose-600 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-[1.02] transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 group-hover:animate-pulse" />
                    Plan Your Event
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="https://wa.me/917668570551?text=I need event transportation services"
                    className="inline-flex items-center justify-center gap-3 bg-white/5 backdrop-blur-xl text-white px-8 py-5 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp Us
                  </Link>
                </div>
              </div>

              {/* Right Side - Event Type Cards */}
              <div className="hidden lg:grid grid-cols-2 gap-4">
                {[
                  { image: '/images/wedding/luxury_car.jpg', title: 'Weddings', desc: 'Make your special day perfect', icon: '💒' },
                  { image: '/images/wedding/premium_suv.jpg', title: 'Corporate', desc: 'Professional event logistics', icon: '🏛️' },
                  { image: '/images/tempo/17_seater.jpg', title: 'MICE', desc: 'Conferences & exhibitions', icon: '🎪' },
                  { image: '/images/bus/45_SEATER_BUS.jpg', title: 'Large Events', desc: 'Mass guest transportation', icon: '👥' }
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
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-900/50 to-transparent" />
                    <div className="absolute inset-0 bg-pink-500/0 group-hover:bg-pink-500/20 transition-colors duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="text-3xl mb-2">{item.icon}</div>
                      <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-rose-200 text-sm">{item.desc}</p>
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
            <span className="text-white/60 text-xs tracking-widest uppercase">Explore Services</span>
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-white/60 rounded-full" />
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="py-6 bg-gradient-to-r from-purple-900 to-rose-900 border-y border-white/10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4">
              {[
                { icon: Shield, text: 'Insured Vehicles', color: 'text-green-400' },
                { icon: Clock, text: 'On-Time Guarantee', color: 'text-pink-400' },
                { icon: Users, text: '50K+ Guests Served', color: 'text-purple-400' },
                { icon: Star, text: '4.9/5 Rating', color: 'text-yellow-400' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-white/90 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Event Categories Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-white to-rose-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-pink-100 px-5 py-2 rounded-full mb-6">
                <Heart className="w-4 h-4 text-pink-600" />
                <span className="text-pink-700 font-semibold text-sm tracking-wider uppercase">Event Categories</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                Transportation for
                <span className="text-transparent bg-gradient-to-r from-pink-500 to-rose-600 bg-clip-text"> Every Celebration</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From intimate family gatherings to grand corporate events - we make every occasion special
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eventCategories.map((category, idx) => (
                <div
                  key={category.id}
                  className="group bg-white rounded-3xl p-8 shadow-xl shadow-rose-100/50 border border-rose-50 hover:border-pink-200 hover:shadow-2xl hover:shadow-pink-100/50 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{category.title}</h3>
                  <p className="text-slate-500 text-sm mb-6">{category.description}</p>
                  <ul className="space-y-2">
                    {category.events.slice(0, 4).map((event, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-pink-500 flex-shrink-0" />
                        {event.name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fleet Section */}
        <section className="py-24 px-4 bg-gradient-to-br from-purple-900 via-rose-900 to-pink-900 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }} />
          </div>

          {/* Animated Orbs */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-pink-500/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xl px-5 py-2 rounded-full mb-6 border border-white/20">
                <Car className="w-4 h-4 text-pink-400" />
                <span className="text-pink-300 font-semibold text-sm tracking-wider uppercase">Event Fleet</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Vehicles for <span className="text-transparent bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text">Every Occasion</span>
              </h2>
              <p className="text-xl text-rose-200 max-w-3xl mx-auto">
                From elegant sedans to decorated wedding cars - the perfect ride for your celebration
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventFleet.filter(v => v.highlight).map((vehicle) => (
                <div
                  key={vehicle.id}
                  className="group bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 hover:border-pink-400/50 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-transparent to-transparent" />
                    <div className="absolute top-4 right-4 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {vehicle.capacity}
                    </div>
                    <div className="absolute top-4 left-4 text-4xl">
                      {vehicle.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{vehicle.name}</h3>
                    <p className="text-rose-200 text-sm mb-4">{vehicle.ideal}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {vehicle.features.slice(0, 3).map((feature, idx) => (
                        <span key={idx} className="text-xs bg-white/10 text-rose-200 px-3 py-1 rounded-full">
                          {feature}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <span className="text-pink-400 font-bold text-lg">{vehicle.priceRange}</span>
                      <Link href="tel:+917668570551" className="text-white hover:text-pink-400 transition-colors flex items-center gap-1 text-sm font-medium">
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
        <section className="py-24 px-4 bg-gradient-to-b from-rose-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-purple-100 px-5 py-2 rounded-full mb-6">
                <MapPin className="w-4 h-4 text-purple-600" />
                <span className="text-purple-700 font-semibold text-sm tracking-wider uppercase">Event Destinations</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                Celebrate in <span className="text-transparent bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text">Top Destinations</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                From royal palace weddings in Jaipur to corporate events in Delhi - we cover it all
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/event-transportation-service/${city.slug}`}
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
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900 via-purple-900/40 to-transparent" />
                      <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-xl px-4 py-2 rounded-full border border-white/30">
                        <span className="text-white text-sm font-semibold">{city.stats.eventsHandled} Events</span>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="text-pink-400 text-sm font-semibold mb-1">{city.tagline}</div>
                        <h3 className="text-2xl font-bold text-white">{city.name}</h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-slate-600 text-sm mb-4 line-clamp-2">{city.description}</p>

                      {/* Event Types */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {city.eventTypes.slice(0, 3).map((type, idx) => (
                          <span key={idx} className="text-xs bg-pink-50 text-pink-600 px-3 py-1 rounded-full">
                            {type}
                          </span>
                        ))}
                      </div>

                      {/* Stats Row - Push to bottom */}
                      <div className="mt-auto">
                        <div className="grid grid-cols-3 gap-4 py-4 border-t border-slate-100">
                          <div className="text-center">
                            <div className="text-xl font-bold text-slate-900">{city.stats.eventsHandled}</div>
                            <div className="text-xs text-slate-500">Events</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold text-slate-900">{city.stats.happyClients}</div>
                            <div className="text-xs text-slate-500">Clients</div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl font-bold text-slate-900">{city.stats.yearsExperience}</div>
                            <div className="text-xs text-slate-500">Years</div>
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="flex items-center justify-between pt-4">
                          <span className="text-pink-600 font-semibold group-hover:text-pink-700 transition-colors">
                            Events in {city.name}
                          </span>
                          <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center group-hover:bg-pink-500 transition-all duration-300">
                            <ChevronRight className="w-6 h-6 text-pink-400 group-hover:text-white transition-colors" />
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

        {/* Benefits Section */}
        <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-xl px-6 py-3 rounded-full mb-8 border border-pink-400/30">
                <Sparkles className="w-5 h-5 text-pink-400" />
                <span className="text-pink-300 font-semibold text-sm tracking-widest uppercase">Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                Event Excellence
                <span className="block mt-2 text-transparent bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 bg-clip-text">Guaranteed</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                What makes Triveni Cabs the preferred choice for event transportation
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventBenefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className={`group relative overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 ${
                    idx === 0 ? 'lg:col-span-2 bg-gradient-to-br from-pink-500/20 via-pink-500/10 to-transparent' :
                    idx === 3 ? 'lg:col-span-2 bg-gradient-to-br from-purple-500/20 via-purple-500/10 to-transparent' :
                    'bg-white/5'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-500/0 via-purple-500/0 to-rose-500/0 group-hover:from-pink-500/10 group-hover:via-purple-500/10 group-hover:to-rose-500/10 transition-all duration-500" />
                  <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-pink-400/50 transition-colors duration-500" />

                  <div className="relative p-8">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
                      <div className="relative w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-4xl shadow-lg shadow-pink-500/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        {benefit.icon}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-300 transition-colors">{benefit.title}</h3>
                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{benefit.description}</p>

                    <div className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1">
                      <ArrowRight className="w-5 h-5 text-pink-400" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section - Open Cards */}
        <section className="py-24 px-4 bg-gradient-to-b from-white via-rose-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full mb-6">
                <HeadphonesIcon className="w-5 h-5 text-purple-600" />
                <span className="text-purple-700 font-semibold text-sm tracking-wider uppercase">Got Questions?</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
                Frequently Asked
                <span className="block text-transparent bg-gradient-to-r from-purple-500 to-pink-600 bg-clip-text">Questions</span>
              </h2>
              <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                Everything you need to know about our event transportation services
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventFAQs.map((faq, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white rounded-3xl p-8 shadow-xl shadow-rose-100/50 border border-rose-50 hover:border-pink-200 hover:shadow-2xl hover:shadow-pink-100/50 transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg shadow-purple-500/30 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    {String(idx + 1).padStart(2, '0')}
                  </div>

                  <div className="pt-4">
                    <h3 className="text-lg font-bold text-slate-800 mb-4 leading-tight group-hover:text-purple-700 transition-colors">
                      {faq.question}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>

                  <div className="absolute bottom-4 right-4 w-16 h-16 bg-gradient-to-br from-purple-50 to-pink-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-slate-600 mb-4">Planning a special event?</p>
              <Link
                href="tel:+917668570551"
                className="inline-flex items-center gap-2 text-pink-600 font-bold hover:text-pink-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call us at +91 7668570551
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-rose-900 to-pink-900" />

          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-pink-500/30 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 backdrop-blur-xl px-5 py-2.5 rounded-full mb-8 border border-pink-400/30">
                  <Sparkles className="w-4 h-4 text-pink-400" />
                  <span className="text-pink-300 font-semibold text-sm tracking-wider uppercase">Start Planning</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Let Us Make Your
                  <span className="block text-transparent bg-gradient-to-r from-pink-400 via-rose-400 to-orange-400 bg-clip-text">
                    Event Unforgettable
                  </span>
                </h2>

                <p className="text-xl text-rose-200 mb-10 leading-relaxed">
                  Join 1000+ successful events. From intimate gatherings to grand celebrations - we ensure your guests travel in style and comfort.
                </p>

                <div className="grid grid-cols-3 gap-6 mb-10">
                  {[
                    { value: '1000+', label: 'Events Done' },
                    { value: '50K+', label: 'Guests Served' },
                    { value: '4.9★', label: 'Rating' }
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-3xl font-black text-white">{stat.value}</div>
                      <div className="text-sm text-rose-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl blur-2xl opacity-30" />

                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-pink-500/30">
                      <Phone className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Plan Your Event</h3>
                    <p className="text-rose-200">Get a customized quote for your event</p>
                  </div>

                  <div className="space-y-4">
                    <Link
                      href="tel:+917668570551"
                      className="group flex items-center justify-between w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white p-5 rounded-2xl font-bold text-lg shadow-xl shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-[1.02] transition-all duration-300"
                    >
                      <span className="flex items-center gap-3">
                        <Phone className="w-6 h-6" />
                        +91 7668570551
                      </span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>

                    <Link
                      href="https://wa.me/917668570551?text=I need event transportation services"
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
                        <Calendar className="w-6 h-6" />
                        Request Quote
                      </span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <p className="text-rose-200 text-sm flex items-center justify-center gap-2">
                      <Shield className="w-4 h-4 text-green-400" />
                      Trusted by 1000+ event organizers across India
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
