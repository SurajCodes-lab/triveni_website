'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ArrowRight, Phone, Shield, Clock, CheckCircle, Car, Bus, Users, MapPin, Search, Plane, Heart, Route, Zap, ShieldCheck, Headphones, Sparkles } from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import CabSearchWidget from './CabSearchWidget';
import { getPopularRoutes } from '@/lib/searchUtils';
import { phoneNumber } from '@/utilis/data';
import MobileStickyBar from '@/components/ui/MobileStickyBar';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

// ─── Section 1: Premium Hero + Search ───────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gray-950 pt-28 sm:pt-32 pb-16 sm:pb-20">
      {/* Background Image */}
      <Image
        src="/images/home/Triveni_Cabs_Desktop.webp"
        alt="Premium cab service across India"
        fill
        className="object-cover opacity-20"
        priority
        sizes="100vw"
      />
      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/70 to-gray-950" />
      {/* Color accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#FACF2D]/8 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[100px]" />
        <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Badge */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#FACF2D]" />
            <span className="text-xs font-medium text-white/70">India&apos;s Most Trusted Cab Service</span>
            <div className="flex -space-x-0.5">
              {[1, 2, 3, 4, 5].map(i => (
                <Star key={i} className="w-3 h-3 text-[#FACF2D] fill-[#FACF2D]" />
              ))}
            </div>
          </div>
        </div>

        {/* Headline */}
        <div className="text-center mb-8 sm:mb-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
            Book Your Ride
            <span className="block mt-1">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FACF2D] via-[#ffd84d] to-[#FACF2D]">
                Across India
              </span>
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/50 mt-4 max-w-2xl mx-auto">
            Premium outstation cabs from <span className="text-[#FACF2D] font-semibold">₹11/km</span> — Sedan, SUV, Tempo Traveller & Luxury Buses
          </p>

          {/* Stats inline */}
          <div className="flex items-center justify-center gap-5 sm:gap-8 mt-6 flex-wrap">
            {[
              { value: '500+', label: 'Routes', icon: Route },
              { value: '37+', label: 'Cities', icon: MapPin },
              { value: '10K+', label: 'Happy Trips', icon: Users },
            ].map((s, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <s.icon className="w-3.5 h-3.5 text-[#FACF2D]" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-white leading-none">{s.value}</p>
                  <p className="text-[11px] text-white/40">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search Widget */}
        <div className="max-w-5xl mx-auto">
          <CabSearchWidget />
        </div>

        {/* Trust Badges below search */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6 flex-wrap">
          {[
            { icon: Shield, text: 'No Hidden Charges' },
            { icon: CheckCircle, text: 'Instant Confirmation' },
            { icon: Headphones, text: '24/7 Support' },
          ].map((b, idx) => (
            <div key={idx} className="flex items-center gap-1.5 text-xs text-white/40">
              <b.icon className="w-3.5 h-3.5 text-[#FACF2D]/60" />
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 2: Popular Routes ──────────────────────────────────────────────
function PopularRoutes() {
  const routes = useMemo(() => getPopularRoutes(), []);

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-white to-amber-50/30 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-semibold text-[#d4ad00] uppercase tracking-widest mb-1">Top Routes</p>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Most Booked Routes</h2>
          </div>
          <Link href="/routes" className="hidden sm:flex items-center gap-1.5 text-sm font-semibold bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-[#FACF2D] hover:text-black transition-all group">
            View All Routes
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {routes.map((route, idx) => (
            <Link
              key={idx}
              href={`/search?from=${route.from.toLowerCase()}&to=${route.to.toLowerCase()}&type=oneway`}
              className="group relative bg-white rounded-2xl border border-gray-100 p-5 transition-all duration-300 hover:shadow-xl hover:shadow-amber-100 hover:border-[#FACF2D]/40 hover:-translate-y-1"
            >
              {/* Accent stripe */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FACF2D] to-amber-400 rounded-t-2xl opacity-60 group-hover:opacity-100 transition-opacity" />

              {/* Route header */}
              <div className="flex items-center gap-2 mb-3 mt-1">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#FACF2D] to-amber-500 flex items-center justify-center flex-shrink-0 shadow-md shadow-amber-200/50">
                  <Car className="w-4 h-4 text-black" />
                </div>
                <div className="flex items-center gap-1.5 font-bold text-gray-900">
                  <span>{route.from}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FACF2D]" />
                  <span>{route.to}</span>
                </div>
              </div>

              {/* Route details */}
              <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-amber-500" /> {route.distance}</span>
                <span className="flex items-center gap-1"><Clock className="w-3 h-3 text-amber-500" /> {route.time}</span>
              </div>

              {/* Price */}
              <div className="flex items-end justify-between pt-3 border-t border-amber-50">
                <div>
                  <p className="text-[10px] text-gray-400 uppercase tracking-wider">Starting from</p>
                  <p className="text-2xl font-extrabold text-gray-900">{route.startingPrice}</p>
                </div>
                <div className="w-9 h-9 rounded-full bg-[#FACF2D] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:scale-100 scale-75 shadow-md shadow-amber-200">
                  <Search className="w-4 h-4 text-black" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="sm:hidden mt-6 text-center">
          <Link href="/routes" className="inline-flex items-center gap-1.5 text-sm font-bold bg-[#FACF2D] text-black px-5 py-2.5 rounded-xl shadow-md">
            View All Routes <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Section 3: Our Services ────────────────────────────────────────────────
const SERVICES = [
  {
    title: 'Outstation Cabs',
    desc: 'One-way & round-trip cabs to 500+ destinations. Sedan, SUV & Innova.',
    icon: Car,
    href: '/outstation-cabs',
    gradient: 'from-blue-500 to-indigo-600',
    image: '/images/citypage_hero_section_image.jpg',
  },
  {
    title: 'Airport Transfers',
    desc: 'Reliable airport pickup & drop at all major airports. Flight tracking.',
    icon: Plane,
    href: '/airport-service',
    gradient: 'from-sky-500 to-cyan-600',
    image: '/images/airport_section.jpg',
  },
  {
    title: 'Wedding Cars',
    desc: 'BMW, Audi, Mercedes & Rolls Royce with floral decoration for your day.',
    icon: Heart,
    href: '/wedding',
    gradient: 'from-rose-500 to-pink-600',
    image: '/images/wedding_section.jpg',
  },
  {
    title: 'Tour Packages',
    desc: 'Golden Triangle, Rajasthan, Kashmir — all-inclusive tour packages.',
    icon: MapPin,
    href: '/services',
    gradient: 'from-emerald-500 to-teal-600',
    image: '/images/HERO_SECTION_MAIN_PAGE.jpg',
  },
  {
    title: 'Bus Rental',
    desc: '22-56 seater AC Volvo buses for corporates, events & group travel.',
    icon: Bus,
    href: '/bus-routes',
    gradient: 'from-violet-500 to-purple-600',
    image: '/images/bus/hero_section_image.webp',
  },
  {
    title: 'Tempo Traveller',
    desc: '12-26 seater AC tempo for family trips, pilgrimages & group outings.',
    icon: Users,
    href: '/tempo-traveller',
    gradient: 'from-amber-500 to-orange-600',
    image: '/images/tempo_section.jpg',
  },
];

function ServicesSection() {
  return (
    <section className="py-14 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold text-[#d4ad00] uppercase tracking-widest mb-1">What We Offer</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Premium Travel Services</h2>
          <p className="text-gray-500 text-sm mt-2 max-w-lg mx-auto">From outstation cabs to luxury wedding cars — everything under one roof</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, idx) => (
            <Link
              key={idx}
              href={s.href}
              className="group rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative"
            >
              {/* Image */}
              <div className="relative h-44 sm:h-48 overflow-hidden">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent`} />
                <div className={`absolute top-3 left-3 w-10 h-10 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-lg`}>
                  <s.icon className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="bg-white p-5 border border-gray-100 border-t-0 rounded-b-2xl">
                <h3 className="font-bold text-gray-900 text-lg mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-[#d4ad00] group-hover:gap-2.5 transition-all">
                  Explore <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 4: How It Works ────────────────────────────────────────────────
function HowItWorks() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-[#d4ad00] uppercase tracking-widest mb-1">Simple Process</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Book a Cab in 3 Steps</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-[#FACF2D] to-transparent" />

          {[
            { step: '01', title: 'Search Your Route', desc: 'Enter pickup city, destination, and travel date above', icon: Search, color: 'from-[#FACF2D] to-[#e6bb15]' },
            { step: '02', title: 'Compare & Choose', desc: 'See all available vehicles with transparent pricing', icon: Car, color: 'from-gray-800 to-gray-900' },
            { step: '03', title: 'Book Instantly', desc: 'Confirm via WhatsApp or call — no app needed', icon: WhatsAppIcon, color: 'from-[#25D366] to-[#128C7E]' },
          ].map((s, idx) => (
            <div key={idx} className="text-center relative z-10">
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mx-auto mb-5 shadow-lg`}>
                <s.icon className="w-8 h-8 text-white" />
              </div>
              <p className="text-[11px] font-bold text-[#FACF2D] uppercase tracking-[0.2em] mb-1">Step {s.step}</p>
              <h3 className="font-bold text-gray-900 text-lg">{s.title}</h3>
              <p className="text-sm text-gray-500 mt-1.5 max-w-[240px] mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 5: Why Choose Us — Premium Dark Section ────────────────────────
function WhyChooseUs() {
  return (
    <section className="py-14 sm:py-20 bg-gray-950 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#FACF2D]/3 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold text-[#FACF2D] uppercase tracking-widest mb-1">Why Triveni Cabs</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Built for Travellers Who Demand the Best</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { title: 'Lowest Prices', desc: 'Starting ₹11/km with no surge pricing', icon: Zap, stat: '₹11/km' },
            { title: 'Verified Drivers', desc: 'Background-checked, professional chauffeurs', icon: ShieldCheck, stat: '5,000+' },
            { title: '24/7 Support', desc: 'Always available via call and WhatsApp', icon: Headphones, stat: 'Always On' },
            { title: 'No Hidden Fees', desc: 'Toll, tax, parking — all transparent', icon: Shield, stat: 'All-Inclusive' },
          ].map((f, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 sm:p-6 text-center hover:bg-white/8 hover:border-[#FACF2D]/20 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-[#FACF2D]/10 border border-[#FACF2D]/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#FACF2D]/15 transition-colors">
                <f.icon className="w-6 h-6 text-[#FACF2D]" />
              </div>
              <h3 className="font-bold text-white text-sm sm:text-base">{f.title}</h3>
              <p className="text-xs text-white/40 mt-1.5 leading-relaxed">{f.desc}</p>
              <p className="text-lg font-bold text-[#FACF2D] mt-3">{f.stat}</p>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-white/5">
          {[
            { num: '37+', label: 'Cities Covered' },
            { num: '500+', label: 'Active Routes' },
            { num: '10,000+', label: 'Completed Trips' },
            { num: '4.9/5', label: 'Customer Rating' },
          ].map((s, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl sm:text-4xl font-extrabold text-white">{s.num}</p>
              <p className="text-xs text-white/30 mt-1 uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Section 6: Popular Destinations ────────────────────────────────────────
const DESTINATIONS = [
  { name: 'Delhi', slug: 'delhi', price: '₹2,760', tag: 'Capital', image: '/images/sightseeing/Delhi/Delhi_hero_section.jpg' },
  { name: 'Agra', slug: 'agra', price: '₹2,760', tag: 'Taj Mahal', image: '/images/sightseeing/Agra/Agra_Hero_section.jpg' },
  { name: 'Jaipur', slug: 'jaipur', price: '₹3,360', tag: 'Pink City', image: '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg' },
  { name: 'Shimla', slug: 'shimla', price: '₹4,200', tag: 'Hill Station', image: '/images/sightseeing/Shimla/shimla_hero_section.jpg' },
  { name: 'Manali', slug: 'manali', price: '₹6,480', tag: 'Adventure', image: '/images/packages/manali.webp' },
  { name: 'Haridwar', slug: 'haridwar', price: '₹2,880', tag: 'Pilgrimage', image: '/images/chardham/chardham-haridwar-hero.webp' },
  { name: 'Rishikesh', slug: 'rishikesh', price: '₹3,000', tag: 'Yoga Capital', image: '/images/chardham/chardham-rishikesh-hero.webp' },
  { name: 'Amritsar', slug: 'amritsar', price: '₹5,400', tag: 'Golden Temple', image: '/images/sightseeing/Agra/Taj_mahal.jpg' },
  { name: 'Chandigarh', slug: 'chandigarh', price: '₹3,120', tag: 'Planned City', image: '/images/sightseeing/Chandigarh/Chandigarh_hero_section.jpg' },
  { name: 'Varanasi', slug: 'varanasi', price: '₹5,400', tag: 'Holy City', image: '/images/sightseeing/Varanasi/varanasi_hero_section.jpg' },
  { name: 'Nainital', slug: 'nainital', price: '₹3,600', tag: 'Lake District', image: '/images/sightseeing/Nainital/Nainital_hero_section.jpg' },
  { name: 'Mussoorie', slug: 'mussoorie', price: '₹3,360', tag: 'Queen of Hills', image: '/images/sightseeing/Mussoorie/Mussorrie_hero_section.jpg' },
  { name: 'Dharamshala', slug: 'dharamshala', price: '₹5,400', tag: 'Dalai Lama', image: '/images/sightseeing/Dharamshala/Dharamshala_hero_section.jpg' },
  { name: 'Mathura', slug: 'mathura', price: '₹2,400', tag: 'Lord Krishna', image: '/images/sightseeing/Mathura_Vrindavan/Banke_Bihari_Temple.jpg' },
  { name: 'Pushkar', slug: 'pushkar', price: '₹4,200', tag: 'Sacred Lake', image: '/images/sightseeing/Ajmer_Pushkar/Pushkar_Lake_Ghats.jpg' },
];

function PopularDestinations() {
  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold text-[#d4ad00] uppercase tracking-widest mb-1">Destinations</p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Cab Services in Top Cities</h2>
          <p className="text-gray-500 text-sm mt-2">One-way & round-trip taxi to India&apos;s most popular destinations</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {DESTINATIONS.map((d, idx) => (
            <Link
              key={idx}
              href={`/${d.slug}`}
              className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="aspect-[4/3] relative">
                {/* City image */}
                <Image
                  src={d.image}
                  alt={`${d.name} cab service - ${d.tag}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/10 group-hover:from-black/90 transition-colors" />

                {/* Tag */}
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="text-[9px] font-bold text-white uppercase tracking-wider bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full">
                    {d.tag}
                  </span>
                </div>

                {/* Arrow */}
                <div className="absolute top-2.5 right-2.5 z-10">
                  <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-[#FACF2D] group-hover:translate-x-0.5 transition-all" />
                </div>

                {/* City info */}
                <div className="absolute bottom-0 left-0 right-0 p-3.5 z-10">
                  <h3 className="text-white font-bold text-lg leading-tight drop-shadow-lg">{d.name}</h3>
                  <p className="text-white/60 text-[11px] mt-0.5">from <span className="text-[#FACF2D] font-bold">{d.price}</span></p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// Reviews section removed — will be added back with real GMB reviews

// ─── Section 8: Premium CTA Section ─────────────────────────────────────────
function CTASection() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/HERO_SECTION_MAIN_PAGE.jpg"
        alt="Book your cab with Triveni Cabs"
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/95 via-gray-950/90 to-gray-950/95" />

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#FACF2D]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <div className="inline-flex items-center gap-2 bg-[#FACF2D] rounded-full px-5 py-2 mb-6 shadow-lg shadow-[#FACF2D]/20">
          <Phone className="w-4 h-4 text-black" />
          <span className="text-sm font-bold text-black">Ready to Travel?</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
          Book Your Cab <span className="text-[#FACF2D]">Now</span>
        </h2>
        <p className="text-white/60 text-lg mt-3 max-w-lg mx-auto">
          Get instant quotes. No app download. No signup. Just search, choose & book.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 max-w-lg mx-auto">
          <a
            href={`tel:${phoneNumber}`}
            onClick={() => trackPhoneCall('homepage_cta')}
            className="flex-1 flex items-center justify-center gap-2.5 bg-white hover:bg-gray-50 text-gray-900 py-4 px-8 rounded-xl font-bold text-base transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
          >
            <Phone className="w-5 h-5" />
            Call {phoneNumber}
          </a>
          <a
            href="https://wa.me/917668570551?text=Hi%2C%20I%20want%20to%20book%20a%20cab.%20Please%20share%20the%20best%20rates."
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('homepage_cta')}
            className="flex-1 flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white py-4 px-8 rounded-xl font-bold text-base transition-all shadow-xl shadow-[#25D366]/30 hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
          >
            <WhatsAppIcon className="w-5 h-5" />
            WhatsApp Us
          </a>
        </div>

        <div className="flex items-center justify-center gap-4 mt-6 text-xs text-white/50 flex-wrap">
          <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[#FACF2D]" /> Available 24/7</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[#FACF2D]" /> Instant Confirmation</span>
          <span className="w-1 h-1 rounded-full bg-white/20" />
          <span className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-[#FACF2D]" /> Best Prices Guaranteed</span>
        </div>
      </div>
    </section>
  );
}

// ─── Section 9: SEO Content ─────────────────────────────────────────────────
function SEOContent() {
  return (
    <section className="py-14 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-xl font-bold text-gray-900 mb-5">Triveni Cabs — India&apos;s Premium Outstation Cab Service</h2>
        <div className="prose prose-sm prose-gray max-w-none text-gray-500 leading-relaxed">
          <p>
            Triveni Cabs is India&apos;s leading <Link href="/outstation-cabs" className="text-[#d4ad00] font-medium hover:underline">outstation cab booking service</Link>, connecting 37+ cities with 500+ routes. Whether you need a one-way cab from <Link href="/search?from=delhi&to=agra&type=oneway" className="text-[#d4ad00] font-medium hover:underline">Delhi to Agra</Link>, a <Link href="/wedding" className="text-[#d4ad00] font-medium hover:underline">luxury wedding car rental</Link> (BMW, Audi, Mercedes), or a reliable <Link href="/airport-service" className="text-[#d4ad00] font-medium hover:underline">airport transfer service</Link>, we deliver transparent pricing from just ₹11/km with no hidden charges.
          </p>
          <p>
            Our premium fleet includes <strong>Sedan (Swift Dzire, Toyota Etios)</strong>, <strong>SUV (Ertiga, Innova Crysta)</strong>, <Link href="/tempo-traveller" className="text-[#d4ad00] font-medium hover:underline">12-26 seater AC tempo travellers</Link>, and <Link href="/bus-routes" className="text-[#d4ad00] font-medium hover:underline">22-56 seater luxury Volvo buses</Link>. Every vehicle is AC, sanitized, GPS-tracked, and driven by verified professional chauffeurs.
          </p>
          <p>
            Our most popular routes include <Link href="/search?from=delhi&to=agra&type=oneway" className="text-[#d4ad00] font-medium hover:underline">Delhi to Agra taxi</Link> (₹2,760), <Link href="/search?from=delhi&to=jaipur&type=oneway" className="text-[#d4ad00] font-medium hover:underline">Delhi to Jaipur cab</Link> (₹3,360), <Link href="/search?from=delhi&to=shimla&type=oneway" className="text-[#d4ad00] font-medium hover:underline">Delhi to Shimla taxi</Link> (₹4,200), and <Link href="/search?from=delhi&to=manali&type=oneway" className="text-[#d4ad00] font-medium hover:underline">Delhi to Manali cab</Link> (₹6,480). We also offer <Link href="/sightseeing" className="text-[#d4ad00] font-medium hover:underline">sightseeing tours</Link>, <Link href="/religious-tours" className="text-[#d4ad00] font-medium hover:underline">religious pilgrimage tours</Link>, and <Link href="/tour-guide" className="text-[#d4ad00] font-medium hover:underline">certified tour guides</Link> in 14+ cities.
          </p>
          <p>
            Rated <strong>4.9 stars by 10,000+ customers</strong>, Triveni Cabs provides 24/7 customer support, instant WhatsApp booking confirmation, and complete pricing transparency. Experience premium travel at budget-friendly prices — book your cab today.
          </p>
        </div>
      </div>
    </section>
  );
}

// ─── Main Component ─────────────────────────────────────────────────────────
export default function NewHomeClient() {
  return (
    <>
      <HeroSection />
      <PopularRoutes />
      <ServicesSection />
      <HowItWorks />
      <WhyChooseUs />
      <PopularDestinations />
      <CTASection />
      <SEOContent />
      <MobileStickyBar />
    </>
  );
}
