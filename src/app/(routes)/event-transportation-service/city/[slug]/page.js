import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import {
  getAllEventSlugs,
  getEventCityBySlug,
  eventCategories,
  eventServices,
  eventFleet,
  eventFAQs,
  getAllEventTypes
} from '@/utilis/eventTransportData';
import {
  Phone,
  MapPin,
  Shield,
  Clock,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Star,
  TrendingUp,
  Car,
  HelpCircle,
  Users,
  Building2,
  Calendar,
  Award
} from 'lucide-react';

export async function generateStaticParams() {
  const slugs = getAllEventSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const city = getEventCityBySlug(slug);

  if (!city) {
    return { title: 'Event Transportation Services | Triveni Cabs' };
  }

  return {
    title: city.metaTitle,
    description: city.metaDescription,
    keywords: city.keywords.join(', '),
    authors: [{ name: 'Triveni Cabs' }],
    creator: 'Triveni Cabs',
    publisher: 'Triveni Cabs',
    metadataBase: new URL('https://www.trivenicabs.in'),
    alternates: {
      canonical: `/event-transportation-service/city/${slug}`,
    },
    openGraph: {
      title: city.title,
      description: city.description,
      type: 'website',
      locale: 'en_IN',
      url: `https://www.trivenicabs.in/event-transportation-service/city/${slug}`,
      siteName: 'Triveni Cabs',
    },
  };
}

export default async function EventCityPage({ params }) {
  const { slug } = await params;
  const city = getEventCityBySlug(slug);

  if (!city) {
    notFound();
  }

  // Schema markup
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Event Transportation",
    "name": city.title,
    "description": city.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Triveni Cabs",
      "telephone": "+91-7668570551",
      "email": "cabstriveni@gmail.com",
      "url": "https://www.trivenicabs.in"
    },
    "areaServed": {
      "@type": "City",
      "name": city.name
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.trivenicabs.in" },
      { "@type": "ListItem", "position": 2, "name": "Event Transportation", "item": "https://www.trivenicabs.in/event-transportation-service" },
      { "@type": "ListItem", "position": 3, "name": city.name, "item": `https://www.trivenicabs.in/event-transportation-service/city/${slug}` }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src={city.heroImage}
              alt={city.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
          </div>

          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-600/20 via-transparent to-transparent" />
          </div>

          {/* Floating Gradient Orbs */}
          <div className="absolute top-20 right-10 w-[400px] h-[400px] bg-cyan-500/30 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-20 left-10 w-[500px] h-[500px] bg-blue-600/25 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />

          {/* Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-white/70 mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/event-transportation-service" className="hover:text-white transition-colors">Events</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-cyan-400">{city.name}</span>
            </nav>

            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse" />
                  <div className="relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 backdrop-blur-xl px-8 py-4 rounded-full border border-cyan-400/50 shadow-lg shadow-cyan-500/20">
                    <MapPin className="w-6 h-6 text-cyan-300" />
                    <span className="text-cyan-200 font-bold text-sm tracking-[0.2em] uppercase">{city.tagline}</span>
                  </div>
                </div>

                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1]">
                  Event Transport
                  <span className="block mt-2 text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text">
                    in {city.name}
                  </span>
                </h1>

                <p className="text-xl text-slate-300 max-w-lg leading-relaxed">
                  {city.subtitle}
                </p>

                <p className="text-lg text-slate-400 max-w-lg leading-relaxed">
                  {city.description}
                </p>

                {/* Stats Row */}
                <div className="flex flex-wrap gap-8 pt-4">
                  <div className="group">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-white/10 shadow-lg">
                        <Calendar className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-3xl font-black text-white">{city.stats.eventsHandled}</div>
                        <div className="text-sm text-slate-400">Events Handled</div>
                      </div>
                    </div>
                  </div>
                  <div className="group">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-white/10 shadow-lg">
                        <Users className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-3xl font-black text-white">{city.stats.happyClients}</div>
                        <div className="text-sm text-slate-400">Happy Clients</div>
                      </div>
                    </div>
                  </div>
                  <div className="group">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center border border-white/10 shadow-lg">
                        <Award className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <div className="text-3xl font-black text-white">{city.stats.yearsExperience}</div>
                        <div className="text-sm text-slate-400">Years Experience</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link
                    href="tel:+917668570551"
                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300"
                  >
                    <Phone className="w-5 h-5 group-hover:animate-pulse" />
                    Get {city.name} Quote
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href={`https://wa.me/917668570551?text=I need event transportation service in ${city.name}`}
                    className="inline-flex items-center justify-center gap-3 bg-white/5 backdrop-blur-xl text-white px-8 py-5 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp Us
                  </Link>
                </div>
              </div>

              {/* Right Side - Highlights Card */}
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-3xl" />
                  <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
                    <h3 className="text-xl font-bold text-white mb-6">Why {city.name} Events Choose Us</h3>
                    <div className="space-y-4">
                      {city.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 shadow-lg shadow-cyan-500/30">
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-slate-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
                { icon: Car, text: '500+ Vehicles', color: 'text-yellow-400' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                  <span className="text-slate-300 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Venues Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-100/50 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[120px]" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full mb-6 shadow-lg shadow-cyan-500/30">
                <Building2 className="w-5 h-5 text-white" />
                <span className="text-white font-semibold text-sm tracking-wider uppercase">Popular Venues</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                Venues We Serve in
                <span className="block text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 bg-clip-text">{city.name}</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {city.popularVenues.map((venue, idx) => (
                <div key={idx} className="group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:border-cyan-200 transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${
                      idx % 4 === 0 ? 'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30' :
                      idx % 4 === 1 ? 'bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30' :
                      idx % 4 === 2 ? 'bg-gradient-to-br from-indigo-500 to-violet-600 shadow-lg shadow-indigo-500/30' :
                      'bg-gradient-to-br from-teal-500 to-emerald-600 shadow-lg shadow-teal-500/30'
                    }`}>
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{venue.name}</h3>
                    <p className="text-sm text-slate-500">{venue.type}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Event Types Section */}
        <section className="py-24 px-4 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[200px] animate-pulse" />
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-cyan-500/20 backdrop-blur-xl px-6 py-3 rounded-full mb-6 border border-cyan-400/30">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-300 font-semibold text-sm tracking-wider uppercase">Event Services in {city.name}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                All Events We Handle in
                <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text">{city.name}</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                Complete event transportation solutions for every occasion in {city.name}
              </p>
            </div>

            {/* All Event Types Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {getAllEventTypes().map((event, idx) => (
                <Link key={event.slug} href={`/event-transportation-service/${event.slug}`}>
                  <div className="group relative h-full">
                    <div className={`absolute inset-0 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 ${
                      idx % 6 === 0 ? 'bg-cyan-500' :
                      idx % 6 === 1 ? 'bg-blue-500' :
                      idx % 6 === 2 ? 'bg-indigo-500' :
                      idx % 6 === 3 ? 'bg-violet-500' :
                      idx % 6 === 4 ? 'bg-purple-500' :
                      'bg-teal-500'
                    }`} />

                    <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 hover:bg-white/10 transition-all duration-500 group-hover:-translate-y-2 h-full">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${
                        idx % 6 === 0 ? 'bg-gradient-to-br from-cyan-500 to-cyan-600 shadow-cyan-500/40' :
                        idx % 6 === 1 ? 'bg-gradient-to-br from-blue-500 to-blue-600 shadow-blue-500/40' :
                        idx % 6 === 2 ? 'bg-gradient-to-br from-indigo-500 to-indigo-600 shadow-indigo-500/40' :
                        idx % 6 === 3 ? 'bg-gradient-to-br from-violet-500 to-violet-600 shadow-violet-500/40' :
                        idx % 6 === 4 ? 'bg-gradient-to-br from-purple-500 to-purple-600 shadow-purple-500/40' :
                        'bg-gradient-to-br from-teal-500 to-teal-600 shadow-teal-500/40'
                      }`}>
                        {event.icon}
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{event.name}</h3>
                      <p className="text-slate-400 text-sm mb-4">{event.tagline}</p>
                      <div className="flex items-center gap-2 text-cyan-400 font-medium text-sm">
                        {event.name} in {city.name} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Event Categories Summary */}
            <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {eventCategories.map((category, idx) => (
                <div key={category.id} className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{category.icon}</span>
                    <h3 className="text-lg font-bold text-white">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.events.map((event, eIdx) => (
                      <li key={eIdx} className="flex items-center gap-2 text-slate-400 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0" />
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
        <section className="py-24 px-4 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-100/50 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-100/50 rounded-full blur-[120px]" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 rounded-full mb-6 shadow-lg shadow-cyan-500/30">
                <Car className="w-5 h-5 text-white" />
                <span className="text-white font-semibold text-sm tracking-wider uppercase">Fleet in {city.name}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                Vehicles Available in
                <span className="block text-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 bg-clip-text">{city.name}</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {eventFleet.slice(0, 6).map((vehicle, idx) => (
                <div key={vehicle.id} className="group relative overflow-hidden rounded-2xl">
                  <div className="relative h-48 overflow-hidden rounded-t-2xl">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/30">
                      <span className="text-white text-sm font-semibold">{vehicle.priceRange}</span>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-2xl">{vehicle.icon}</span>
                        <h3 className="text-xl font-bold text-white">{vehicle.name}</h3>
                      </div>
                      <p className="text-cyan-300 text-sm font-medium">{vehicle.capacity}</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-b-2xl p-4 shadow-xl shadow-slate-200/50 border border-t-0 border-slate-100">
                    <p className="text-slate-600 text-sm">
                      <span className="font-semibold text-slate-800">Ideal for:</span> {vehicle.ideal}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="tel:+917668570551"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-[1.02] transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Get {city.name} Fleet Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[150px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-100/50 rounded-full blur-[120px]" />

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-blue-100 px-6 py-3 rounded-full mb-6">
                <HelpCircle className="w-5 h-5 text-indigo-600" />
                <span className="text-indigo-700 font-semibold text-sm tracking-wider uppercase">FAQ</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
                Common Questions About
                <span className="block text-transparent bg-gradient-to-r from-indigo-500 to-blue-600 bg-clip-text">{city.name} Events</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {eventFAQs.slice(0, 4).map((faq, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white rounded-3xl p-8 shadow-xl shadow-slate-200/50 border border-slate-100 hover:border-indigo-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center text-white font-black text-lg shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-all">
                    {String(idx + 1).padStart(2, '0')}
                  </div>
                  <div className="pt-4">
                    <h3 className="text-lg font-bold text-slate-800 mb-4 leading-tight group-hover:text-indigo-700 transition-colors">
                      {faq.question}
                    </h3>
                    <p className="text-slate-500 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate-600 mb-4">More questions about {city.name} events?</p>
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

        {/* CTA Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/30 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/30 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }} />

          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />

          <div className="relative z-10 max-w-7xl mx-auto px-4 py-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl px-5 py-2.5 rounded-full mb-8 border border-cyan-400/30">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-cyan-300 font-semibold text-sm tracking-wider uppercase">Plan Your {city.name} Event</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
                  Ready to Make Your
                  <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text">
                    {city.name} Event Memorable?
                  </span>
                </h2>

                <p className="text-xl text-slate-400 mb-10 leading-relaxed">
                  Get a customized transportation solution designed specifically for your {city.name} event. Transparent pricing, professional service.
                </p>

                <div className="grid grid-cols-3 gap-6 mb-10">
                  {[
                    { value: city.stats.eventsHandled, label: 'Events' },
                    { value: city.stats.happyClients, label: 'Clients' },
                    { value: city.stats.yearsExperience, label: 'Years' }
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-3xl font-black text-white">{stat.value}</div>
                      <div className="text-sm text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur-2xl opacity-30" />

                <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-10 border border-white/20">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-cyan-500/30">
                      <MapPin className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Get {city.name} Quote</h3>
                    <p className="text-slate-400">Free consultation for your event</p>
                  </div>

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
                      href={`https://wa.me/917668570551?text=I need event transportation service in ${city.name}`}
                      className="group flex items-center justify-between w-full bg-green-500 text-white p-5 rounded-2xl font-bold text-lg shadow-xl shadow-green-500/30 hover:shadow-green-500/50 hover:scale-[1.02] transition-all duration-300"
                    >
                      <span className="flex items-center gap-3">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        WhatsApp Us
                      </span>
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  <div className="mt-8 pt-6 border-t border-white/10 text-center">
                    <p className="text-slate-400 text-sm flex items-center justify-center gap-2">
                      <Shield className="w-4 h-4 text-green-400" />
                      Transparent Pricing • No Hidden Charges
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
