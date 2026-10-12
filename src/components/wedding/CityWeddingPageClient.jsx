'use client';

import { useEffect } from "react";
import FamilyFacts from '@/components/seo/FamilyFacts';
// Centralized icon imports for better bundle optimization
import {
  Heart, Users, Car, Phone, MapPin, Clock, Shield, Star,
  ChevronRight, Sparkles, Music, Camera, Gift, CheckCircle,
  Crown, Award, CreditCard, UserCheck, Zap, Calendar, Navigation
} from "@/components/ui/icons";
import Link from "next/link";
import Image from "next/image";
import { WhatsAppIcon as BsWhatsapp } from '@/components/ui/icons';
import { phoneNumber } from '@/utilis/contact';
import { FAQSection } from '@/components/seo/FAQSection';
import { CrossServiceLinks, PopularRoutes } from '@/components/seo/RelatedContent';
import { SEOBreadcrumb } from '@/components/seo/Breadcrumb';
// linkingHelper is NOT imported here. It pulls in sightseeingData.js (1.24 MB)
// and this is a client component, so the whole dataset shipped to the browser.
// These values are computed on the server and arrive as props.
import dynamic from 'next/dynamic';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';

// Dynamically import FareCalculator (client-only, below fold)
const FareCalculator = dynamic(() => import('@/components/calculator/FareCalculator'), { ssr: false });

// Gold CTA — black text, compact on desktop (Ultra-Premium v2)
const goldCta =
  'sheen inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FFE9A0] via-[#FACF2D] to-[#E8B923] text-black font-bold px-6 py-3.5 min-h-[48px] text-sm shadow-lg shadow-amber-500/30 hover:shadow-amber-400/45 transition-all lg:w-auto lg:min-h-0 lg:px-5 lg:py-2 lg:text-[13px]';

const glassPanel = 'bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10';

// Hero Section — Ultra-Premium v2: real photo, scrim on text side only
const CityWeddingHero = ({ city }) => {
  return (
    <section className="relative min-h-[88svh] flex items-center overflow-hidden bg-slate-950">
      {/* Wedding-car photo, visible on the right */}
      <div className="absolute inset-0">
        <Image
          src="/images/wedding/luxury_car.jpg"
          alt={`Decorated luxury wedding car rental in ${city.name}`}
          fill
          priority
          fetchPriority="high"
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Text-side scrim only — never a drowned black wall */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/10" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-2 text-xs sm:text-sm">
            <li>
              <Link href="/" className="text-amber-100/70 hover:text-[#FACF2D] transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="w-4 h-4 text-amber-200/50" />
            <li>
              <Link href="/wedding" className="text-amber-100/70 hover:text-[#FACF2D] transition-colors">
                Wedding Services
              </Link>
            </li>
            <ChevronRight className="w-4 h-4 text-amber-200/50" />
            <li className="text-[#FACF2D] font-medium">{city.name}</li>
          </ol>
        </nav>

        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-5">
            <span className="h-px w-10 bg-amber-400/60" />
            <Crown className="w-5 h-5 text-amber-300" />
            <span className="text-amber-200 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
              Royal Wedding Cars · {city.name}
            </span>
          </div>

          <h1 className="font-display-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] text-[#FFF9EC]">
            Wedding Car Rental in{' '}
            <span className="text-gold-foil">{city.name}</span>
          </h1>

          {/* Week 48: the direct answer (the city description and its published price range). */}
          <FamilyFacts family="wedding" data={city} />
          {/* Week 48: the wedding-car guide, linked from every wedding city page. */}
          <p className="mt-4 text-sm text-amber-50/90">
            Not sure which car for which moment? Read <Link href="/best-car-for-wedding-2026" className="font-semibold underline decoration-amber-300 underline-offset-2 hover:text-white">which car for the bride entry, the groom entry, the vidai and the baraat in 2026</Link>.
          </p>

          <p className="mt-5 text-lg md:text-2xl font-semibold text-amber-50">
            Make Your {city.name} Wedding Journey Unforgettable
          </p>

          <p className="mt-4 text-sm md:text-base text-rose-50/85 max-w-xl leading-relaxed">
            Luxury Wedding Cars • Premium Baraat Tempo Travellers • Professional Chauffeurs<br/>
            BMW | Audi | Mercedes | Vintage Cars | Decorated Vehicles
          </p>

          {/* Quick Stats — glass chips */}
          <div className="mt-7 grid grid-cols-3 gap-3 max-w-md">
            <div className={`${glassPanel} p-3 text-center`}>
              <div className="text-xl sm:text-2xl font-bold text-[#FACF2D]">5000+</div>
              <div className="text-[11px] sm:text-xs text-rose-100/70">Vehicles</div>
            </div>
            <div className={`${glassPanel} p-3 text-center`}>
              <div className="text-xl sm:text-2xl font-bold text-[#FACF2D]">10000+</div>
              <div className="text-[11px] sm:text-xs text-rose-100/70">Happy Couples</div>
            </div>
            <div className={`${glassPanel} p-3 text-center`}>
              <div className="text-xl sm:text-2xl font-bold text-[#FACF2D]">24/7</div>
              <div className="text-[11px] sm:text-xs text-rose-100/70">Support</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/${phoneNumber}?text=Hi, I'm interested in wedding car rental in ${city.name}. Please share details and packages.`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('city_wedding')}
              className={goldCta}
            >
              <BsWhatsapp className="w-4 h-4" />
              WhatsApp Booking
            </a>
            <a
              href={`tel:+91${phoneNumber}`}
              onClick={() => trackPhoneCall('city_wedding')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-amber-50 font-semibold text-sm hover:bg-white/10 transition-all lg:w-auto lg:min-h-0 lg:px-5 lg:py-2 lg:text-[13px]"
            >
              <Phone className="w-4 h-4" />
              Call Now - {phoneNumber}
            </a>
          </div>
        </div>
      </div>

      {/* Bottom warm-ivory curve */}
      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 120" className="w-full h-auto" preserveAspectRatio="none">
          <path
            fill="#FFF6DC"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

// City Overview Section — warm light band
const CityOverview = ({ city }) => {
  return (
    <section className="py-16 md:py-24 bg-[#FFF6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#5b1228]/5 border border-[#5b1228]/15 text-[#8a2140] px-6 py-2 rounded-full mb-4 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase">
            <MapPin className="w-4 h-4" />
            <span>Wedding Car Rental in {city.name}</span>
          </div>
          <h2 className="font-display-serif text-3xl md:text-5xl font-bold mb-6 text-[#5b1228]">
            Your Trusted Wedding Transportation Partner in <span className="text-gold-foil">{city.name}</span>
          </h2>
          <p className="text-[#6b3a4a] text-base sm:text-lg max-w-4xl mx-auto leading-relaxed">
            {city.description}
          </p>
        </div>

        {/* City Specialties */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {city.specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-amber-500/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                <p className="text-[#3a1220] font-medium">{specialty}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Price Range */}
        <div className="text-center bg-white rounded-2xl p-8 border border-amber-500/25 shadow-lg">
          <div className="flex items-center justify-center gap-3 mb-3">
            <CreditCard className="w-8 h-8 text-amber-600" />
            <h3 className="font-display-serif text-2xl md:text-3xl font-bold text-[#5b1228]">Affordable Pricing</h3>
          </div>
          <p className="font-display-serif text-2xl font-bold mb-2"><span className="text-gold-foil">Starting from {city.priceRange}</span></p>
          <p className="text-[#6b3a4a]">Customized packages available for all budgets</p>
        </div>
      </div>
    </section>
  );
};

// Popular Wedding Cars in City — dark band, glass cards
const PopularCars = ({ city }) => {
  return (
    <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(250,207,45,0.10),transparent_55%)]" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 text-amber-200 px-4 py-2 rounded-full mb-4 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase">
            <Car className="w-4 h-4" />
            <span>Most Popular in {city.name}</span>
          </div>
          <h2 className="font-display-serif text-3xl md:text-5xl font-bold mb-4 text-[#FFF9EC]">
            Popular <span className="text-gold-foil">Wedding Cars</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {city.popularCars.map((car, index) => (
            <div
              key={index}
              className={`${glassPanel} p-6 hover:border-amber-300/40 hover:-translate-y-1 transition-all`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFE9A0] to-[#E8B923] rounded-xl flex items-center justify-center">
                  <Car className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold text-amber-50">{car}</h3>
              </div>
              <a
                href={`https://wa.me/${phoneNumber}?text=Hi, I'm interested in ${car} for my wedding in ${city.name}. Please share details.`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('city_wedding')}
                className={goldCta}
              >
                Book Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Popular Wedding Venues — warm light band
const PopularVenues = ({ city }) => {
  return (
    <section className="py-16 md:py-24 bg-[#FFF6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#5b1228]/5 border border-[#5b1228]/15 text-[#8a2140] px-4 py-2 rounded-full mb-4 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase">
            <MapPin className="w-4 h-4" />
            <span>Popular Wedding Venues</span>
          </div>
          <h2 className="font-display-serif text-3xl md:text-5xl font-bold mb-4 text-[#5b1228]">
            We Serve <span className="text-gold-foil">Top Venues</span> in {city.name}
          </h2>
          <p className="text-[#6b3a4a] text-base sm:text-lg max-w-2xl mx-auto">
            Professional transportation services to all major wedding venues
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {city.popularVenues.map((venue, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-amber-500/20 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FFE9A0] to-[#E8B923] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#3a1220] mb-1">{venue.name}</h3>
                  <p className="text-[#6b3a4a] flex items-center gap-2">
                    <Navigation className="w-4 h-4" />
                    {venue.area}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Nearby Destinations - Clickable with Interlinking — dark band
const NearbyDestinations = ({ city, citySlug }) => {
  // The route href is NOT synthesised here any more. It is resolved against the
  // build manifest on the server (see the wedding page.js) and arrives as
  // `destination.routeHref`, which is null when no such corridor page exists.
  //
  // This block used to build `/{origin}-to-{destination}` by convention, which
  // held for the original nineteen cities and broke the moment the NCR cities
  // were added — /gurgaon-to-faridabad, /noida-to-ghaziabad,
  // /faridabad-to-gurgaon and /ghaziabad-to-noida are all pairs with no
  // corridor page. Same fault as record C found in four places and record K
  // shipped seven of. A card with no resolved target still renders, because the
  // distance and drive time are useful on their own; it simply is not a link.

  return (
    <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_85%,rgba(91,18,40,0.45),transparent_60%)]" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 text-amber-200 px-4 py-2 rounded-full mb-4 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase">
            <Navigation className="w-4 h-4" />
            <span>Multi-City Coverage</span>
          </div>
          <h2 className="font-display-serif text-3xl md:text-5xl font-bold mb-4 text-[#FFF9EC]">
            From <span className="text-gold-foil">{city.name}</span> To Nearby Cities
          </h2>
          <p className="text-rose-100/70 text-base sm:text-lg max-w-2xl mx-auto">
            Book cabs for destination weddings and outstation trips to nearby cities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {city.nearbyDestinations.map((destination, index) => {
            const routeUrl = destination.routeHref || null;
            const Card = routeUrl ? Link : 'div';
            const cardProps = routeUrl ? { href: routeUrl } : {};

            return (
              <Card
                key={index}
                {...cardProps}
                className={`${glassPanel} p-6 transition-all group${routeUrl ? ' hover:border-amber-300/40 hover:bg-white/10 hover:-translate-y-1' : ''}`}
              >
                <div className="text-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#FFE9A0] to-[#E8B923] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Navigation className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-50 mb-2">{destination.name}</h3>
                  <p className="text-rose-100/70 text-sm mb-1">{destination.distance}</p>
                  <p className="text-[#FACF2D] font-semibold mb-3">{destination.time}</p>
                  {routeUrl && (
                    <div className="flex items-center justify-center text-amber-300 font-semibold text-sm">
                      <span>View Route</span>
                      <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-rose-100/70 text-sm">
            Need a cab for a different route? <a href={`https://wa.me/${phoneNumber}?text=Hi, I need a cab from ${city.name} for my wedding. Can you help?`} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsAppClick('city_wedding')} className="text-amber-300 font-semibold underline">Contact us</a> for custom routes!
          </p>
        </div>
      </div>
    </section>
  );
};

// Our Wedding Car Collection Section — warm light band
const WeddingCarCollection = () => {
  const collection = [
    {
      image: '/images/wedding/luxury_car.jpg',
      alt: 'Luxury Wedding Cars - BMW, Audi, Mercedes',
      title: 'Luxury Cars',
      sub: 'BMW, Audi, Mercedes, Jaguar',
      desc: 'Make a grand entrance on your special day with our premium luxury car fleet. Perfect for the bride and groom, these vehicles combine elegance, comfort, and style to create unforgettable memories.',
      reverse: false,
    },
    {
      image: '/images/car/swift_dzire.jpg',
      alt: 'Premium Sedans',
      title: 'Premium Sedans',
      sub: 'Honda City, Ciaz, Verna',
      desc: 'Elegant and comfortable sedans perfect for family members and close relatives. These well-maintained vehicles ensure a smooth and stylish ride throughout your wedding celebrations.',
      reverse: true,
    },
    {
      image: '/images/wedding/premium_suv.jpg',
      alt: 'Premium SUVs for Wedding - Fortuner, Innova Crysta',
      title: 'Premium SUVs',
      sub: 'Toyota Fortuner, Innova Crysta, Scorpio',
      desc: 'Spacious and powerful SUVs ideal for transporting families and VIP guests. With ample luggage space and comfortable seating, these vehicles are perfect for long-distance wedding travel.',
      reverse: false,
    },
    {
      image: '/images/tempo/17_seater.jpg',
      alt: 'Tempo Travellers',
      title: 'Tempo Travellers',
      sub: '9–26 Seater AC/Non-AC options for baraat & guests',
      desc: 'Perfect for baraat parties and group transportation! Our tempo travellers come with music systems, comfortable seating, and can be decorated as per your theme. Available in various seating capacities to accommodate your entire wedding party.',
      reverse: true,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#FFF6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#5b1228]/5 border border-[#5b1228]/15 text-[#8a2140] px-6 py-2 rounded-full mb-4 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase">
            <Heart className="w-4 h-4" />
            <span>Our Wedding Car Collection</span>
          </div>
          <h2 className="font-display-serif text-3xl md:text-5xl font-bold mb-4 text-[#5b1228]">
            Choose from our <span className="text-gold-foil">exclusive fleet</span> to make your big day memorable
          </h2>
        </div>

        <div className="space-y-8">
          {collection.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-amber-500/20 hover:border-amber-500/40 transition-all">
              <div className={`flex flex-col ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 items-center`}>
                <div className="w-full lg:w-1/3">
                  <div className="relative h-64 w-full rounded-2xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="lg:w-2/3">
                  <h3 className="font-display-serif text-2xl sm:text-3xl font-bold text-[#5b1228] mb-2">{item.title}</h3>
                  <p className="text-lg sm:text-xl text-amber-700 mb-4 font-medium">{item.sub}</p>
                  <p className="text-[#6b3a4a] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Why Choose Us Section — dark band, glass panels
const WhyChooseUs = ({ city }) => {
  const features = [
    {
      icon: Car,
      title: "5000+ Cars, SUVs & Tempo Travellers",
      description: `Extensive fleet in ${city.name} covering luxury cars, premium sedans, SUVs, and tempo travellers to meet all your wedding transportation needs`,
    },
    {
      icon: UserCheck,
      title: "Professional & uniformed chauffeurs",
      description: `Experienced, courteous, and well-groomed drivers in ${city.name} dedicated to making your journey comfortable and memorable`,
    },
    {
      icon: Sparkles,
      title: "Vehicles decorated for wedding functions",
      description: "Beautiful floral decorations and custom themes available on request to match your wedding aesthetic perfectly",
    },
    {
      icon: Clock,
      title: "Timely pick-up & drop for baraat & guests",
      description: "Guaranteed punctual service ensuring your baraat and guests arrive on time for every ceremony",
    },
    {
      icon: CreditCard,
      title: "Affordable packages for luxury cars",
      description: "Competitive pricing with transparent rates and no hidden charges, making luxury accessible for every wedding",
    },
    {
      icon: Zap,
      title: "Customized wedding travel solutions",
      description: "Flexible packages tailored to your specific requirements, from single-day bookings to multi-day wedding celebrations",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(250,207,45,0.10),transparent_55%)]" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 text-amber-200 px-6 py-2.5 rounded-full mb-6 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase">
            <Heart className="w-4 h-4" />
            <span>Why Choose Us in {city.name}?</span>
          </div>
          <h2 className="font-display-serif text-3xl md:text-5xl font-bold mb-6 text-[#FFF9EC]">
            Making Your {city.name} Wedding Journey <span className="text-gold-foil">Extraordinary</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`${glassPanel} p-7 hover:border-amber-300/40 hover:bg-white/10 hover:-translate-y-1 transition-all duration-300`}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#FFE9A0] to-[#E8B923] rounded-xl flex items-center justify-center mb-5 shadow-lg">
                <feature.icon className="w-7 h-7 text-black" />
              </div>
              <div className="flex items-start gap-2 mb-3">
                <CheckCircle className="w-5 h-5 text-amber-300 flex-shrink-0 mt-1" />
                <h3 className="text-lg font-bold text-amber-50 leading-tight">{feature.title}</h3>
              </div>
              <p className="text-rose-100/70 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// FAQ Section - Uses centralized FAQSection component with schema
const WeddingFAQ = ({ city }) => {
  const faqs = [
    {
      question: `What types of wedding cars are available in ${city.name}?`,
      answer: `We offer luxury cars (BMW, Audi, Mercedes, Jaguar), premium sedans, SUVs (Fortuner, Innova Crysta), tempo travellers (9-26 seater), and vintage cars in ${city.name}. All vehicles are well-maintained and available with professional chauffeurs.`
    },
    {
      question: `Do you provide car decoration for weddings in ${city.name}?`,
      answer: `Yes! We provide beautiful floral and theme-based decoration services in ${city.name}. You can choose from our standard decoration packages or request custom decorations based on your wedding theme and preferences.`
    },
    {
      question: `How much does wedding car rental cost in ${city.name}?`,
      answer: `Wedding car rental prices in ${city.name} range from ${city.priceRange} depending on the vehicle type, duration, and decoration requirements. We offer customized packages to fit every budget. Contact us for detailed pricing.`
    },
    {
      question: `How far in advance should I book a wedding car in ${city.name}?`,
      answer: `We recommend booking at least 2-4 weeks in advance, especially during wedding season (October to March) in ${city.name}. However, we also accommodate last-minute bookings based on vehicle availability.`
    },
    {
      question: `Do you provide baraat tempo travellers in ${city.name}?`,
      answer: `Yes! We provide AC and Non-AC tempo travellers (9-26 seater) for baraat parties in ${city.name}. Our tempo travellers come with music systems, comfortable seating, and can be decorated as per your wedding theme.`
    },
    {
      question: `Are the chauffeurs professional and experienced in ${city.name}?`,
      answer: `Absolutely! All our chauffeurs in ${city.name} are professional, uniformed, well-trained, and experienced in handling wedding events. They are familiar with local routes and ensure timely, safe transportation for your special day.`
    }
  ];

  return (
    <FAQSection
      faqs={faqs}
      title={`${city.name} Wedding Car Rental — FAQs`}
      subtitle={`Everything you need to know about wedding car rental in ${city.name}`}
      showSchema={true}
      variant="card"
      showContactCTA={true}
    />
  );
};

// Final CTA Section — dark photo band, scrim on text side only
const FinalCTA = ({ city }) => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-slate-950">
      <div className="absolute inset-0">
        <Image
          src="/images/wedding/vintage_car.jpg"
          alt={`Decorated wedding car ready for a grand entry in ${city.name}`}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/15" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-2xl">
          <Crown className="w-12 h-12 mb-6 text-amber-300" />
          <h2 className="font-display-serif text-3xl md:text-5xl font-bold mb-6 text-[#FFF9EC] leading-tight">
            Ready to Make Your {city.name} Wedding <span className="text-gold-foil">Royal?</span>
          </h2>
          <p className="text-lg md:text-xl mb-8 text-rose-100/85">
            Book your luxury wedding car today and make memories that last forever!
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <a
              href={`https://wa.me/${phoneNumber}?text=Hi, I want to book wedding car services in ${city.name}. Please share details and availability.`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('city_wedding')}
              className={goldCta}
            >
              <BsWhatsapp className="w-4 h-4" />
              WhatsApp Us
            </a>
            <a
              href={`tel:+91${phoneNumber}`}
              onClick={() => trackPhoneCall('city_wedding')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 min-h-[48px] rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-amber-50 font-semibold text-sm hover:bg-white/10 transition-all lg:w-auto lg:min-h-0 lg:px-5 lg:py-2 lg:text-[13px]"
            >
              <Phone className="w-4 h-4" />
              Call Now - {phoneNumber}
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-rose-100/80">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-amber-300" />
              <span>Instant Confirmation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-amber-300" />
              <span>Best Price Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-amber-300" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Related Services Section - Interlinking — warm light band
const RelatedServices = ({ city, citySlug }) => {
  // Cities that have airport service pages
  const citiesWithAirportService = [
    'delhi', 'jaipur', 'chandigarh', 'agra', 'shimla',
    'manali', 'amritsar', 'dehradun', 'haridwar',
    'rishikesh', 'udaipur', 'ayodhya'
  ];

  const hasAirportService = citiesWithAirportService.includes(citySlug);

  return (
    <section className="py-16 md:py-24 bg-[#FFF6DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#5b1228]/5 border border-[#5b1228]/15 text-[#8a2140] px-6 py-2 rounded-full mb-4 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase">
            <Car className="w-4 h-4" />
            <span>More Services in {city.name}</span>
          </div>
          <h2 className="font-display-serif text-3xl md:text-4xl font-bold mb-4 text-[#5b1228]">
            Explore Our Other Services in <span className="text-gold-foil">{city.name}</span>
          </h2>
          <p className="text-[#6b3a4a] text-base sm:text-lg max-w-2xl mx-auto">
            Beyond weddings, we offer comprehensive cab services for all your travel needs in {city.name}
          </p>
        </div>

        <div className={`grid grid-cols-1 ${hasAirportService ? 'md:grid-cols-2' : ''} gap-6 mb-8`}>
          {/* Main City Service Link */}
          <Link
            href={`/${citySlug}`}
            className="bg-white border border-amber-500/20 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all group"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-[#FFE9A0] to-[#E8B923] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Car className="w-7 h-7 text-black" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-[#3a1220] mb-2">
                  {city.name} Cab Service
                </h3>
                <p className="text-[#6b3a4a] mb-4">
                  Complete taxi and cab rental services in {city.name}. Outstation trips, local tours, and more.
                </p>
                <div className="flex items-center text-amber-700 font-semibold">
                  Explore All Services
                  <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          {/* Airport Service Link - Only if city has airport service */}
          {hasAirportService && (
            <Link
              href={`/airport-service/${citySlug}`}
              className="bg-white border border-amber-500/20 rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-[#FFE9A0] to-[#E8B923] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Navigation className="w-7 h-7 text-black" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-[#3a1220] mb-2">
                    {city.name} Airport Transfer
                  </h3>
                  <p className="text-[#6b3a4a] mb-4">
                    Reliable airport taxi service in {city.name}. Flight tracking, luggage assistance, on-time pickup & drop.
                  </p>
                  <div className="flex items-center text-amber-700 font-semibold">
                    Book Airport Taxi
                    <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>

        {/* Quick Links */}
        <div className="bg-white rounded-2xl p-6 border border-amber-500/20 shadow-md">
          <h3 className="font-display-serif text-xl font-bold text-[#5b1228] mb-4 text-center">Quick Links</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={`/${citySlug}`}
              className="bg-[#FFF6DC] px-4 py-2 rounded-lg text-[#3a1220] border border-amber-500/20 hover:bg-[#FACF2D] hover:text-black transition-all shadow-sm"
            >
              {city.name} Outstation Cabs
            </Link>
            <Link
              href={`/${citySlug}`}
              className="bg-[#FFF6DC] px-4 py-2 rounded-lg text-[#3a1220] border border-amber-500/20 hover:bg-[#FACF2D] hover:text-black transition-all shadow-sm"
            >
              {city.name} Local Tours
            </Link>
            {hasAirportService && (
              <Link
                href={`/airport-service/${citySlug}`}
                className="bg-[#FFF6DC] px-4 py-2 rounded-lg text-[#3a1220] border border-amber-500/20 hover:bg-[#FACF2D] hover:text-black transition-all shadow-sm"
              >
                {city.name} Airport Taxi
              </Link>
            )}
            <Link
              href="/wedding"
              className="bg-[#FFF6DC] px-4 py-2 rounded-lg text-[#3a1220] border border-amber-500/20 hover:bg-[#FACF2D] hover:text-black transition-all shadow-sm"
            >
              All Cities Wedding Cars
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Component
export default function CityWeddingPageClient({ city, citySlug, relatedRoutes = [], shortAnswer = null }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SEO internal linking data
  // arrives as a prop (see the note on the import above).

  return (
    <>
      <div className="min-h-screen">
        <CityWeddingHero city={city} />
        {/* SEO Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 py-3">
          <SEOBreadcrumb
            items={[
              { name: 'Wedding Services', url: '/wedding' },
              { name: `${city.name} Wedding Cars`, url: '' }
            ]}
            variant="minimal"
          />
        </div>
        {/* The short answer, rendered on the server. Placed above the trust
            strip so it is the first prose a reader or a retrieval engine meets. */}
        {shortAnswer}

        {/* Trust Strip */}
        <div className="bg-white border-b border-amber-100 py-3">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-6 md:gap-10 text-sm text-[#6b3a4a] flex-wrap">
              <span className="flex items-center gap-1.5 font-medium">
                <Star className="w-4 h-4 text-amber-500" /> 4.9★ Google Rating
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Users className="w-4 h-4 text-amber-600" /> 10,000+ Happy Couples
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <Shield className="w-4 h-4 text-amber-600" /> Since 2018
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-4 h-4 text-amber-600" /> 500+ Cities
              </span>
            </div>
          </div>
        </div>
        <CityOverview city={city} />
        {/* Week 49: the car-model table, from the models the site already publishes. */}
        <div className="mx-auto max-w-6xl px-4 py-8">
          <FamilyFacts family="wedding" data={city} details />
        </div>
        {/* Quick Booking Section — dark band */}
        <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#5b1228]/40 rounded-full blur-[120px]" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-display-serif text-3xl md:text-4xl font-bold text-[#FFF9EC] mb-4">
                  Get a Free <span className="text-gold-foil">Wedding Car Quote</span>
                </h2>
                <p className="text-rose-100/80 text-lg mb-6">
                  Tell us your requirements and get instant pricing for your dream wedding transportation.
                </p>
                <div className="space-y-3 text-rose-100/70">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-300" />
                    <span>No obligation - free quote</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-300" />
                    <span>Instant confirmation via WhatsApp</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-amber-300" />
                    <span>Best price guarantee</span>
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <QuickEnquiryForm fromCity={city.name} toCity="" pageType="wedding" />
              </div>
            </div>
          </div>
        </section>
        <WeddingCarCollection />
        <NearbyDestinations city={city} citySlug={citySlug} />
        <WhyChooseUs city={city} />
        <WeddingFAQ city={city} />
        {/* Fare Calculator */}
        <section className="py-16 md:py-24 bg-[#FFF6DC]" id="fare-calculator">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="font-display-serif text-2xl sm:text-3xl font-bold text-[#5b1228] mb-3">
                Estimate Your {city.name} Wedding Car Fare
              </h2>
              <p className="text-[#6b3a4a]">Get a quick fare estimate for your wedding day travel</p>
            </div>
            <FareCalculator variant="compact" defaultFrom={city.name} className="max-w-md mx-auto" />
          </div>
        </section>
        <RelatedServices city={city} citySlug={citySlug} />

        {/* SEO: Popular Routes */}
        <PopularRoutes city={city.name} routes={relatedRoutes} title={`Popular Routes from ${city.name}`} />

        {/* SEO: Cross-Service Links */}
        <CrossServiceLinks city={city.name} title={`More Services in ${city.name}`} />

        <FinalCTA city={city} />
      </div>
    </>
  );
}
