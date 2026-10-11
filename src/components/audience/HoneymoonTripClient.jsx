'use client';

import Link from '@/components/ui/JourneyLink';
import { Phone, MapPin, Shield, Star, ChevronRight, Car, CheckCircle2, Calendar, ArrowRight, IndianRupee, Heart, Camera, Hotel, Compass, HelpCircle, Gift, Sparkles } from '@/components/ui/icons';
import { trackWhatsAppClick, trackPhoneCall } from '@/utilis/analytics';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';
import { filterClientLinks } from '@/lib/seo/client-route-exists';

/* Verified destination hero photos (public/images/sightseeing/<City>/) */
const HERO_IMAGES = {
  'Shimla & Manali': '/images/sightseeing/Shimla/shimla_hero_section.jpg',
  Mussoorie: '/images/sightseeing/Mussoorie/Mussorrie_hero_section.jpg',
  Nainital: '/images/sightseeing/Nainital/Nainital_hero_section.jpg',
  Udaipur: '/images/sightseeing/Udaipur/Lake_Pichola.jpg',
  Kashmir: '/images/sightseeing/Kashmir_Valley/Dal_Lake.jpg',
  Manali: '/images/sightseeing/Manali/Manali_hero_section.jpg',
  'Jaipur & Udaipur': '/images/sightseeing/Jaipur/jaipur_hero_section_image.jpg',
  'Agra - Taj Mahal': '/images/sightseeing/Agra/Taj_mahal.jpg',
  Dharamshala: '/images/sightseeing/Dharamshala/Dharamshala_hero_section.jpg',
};
const HUB_HERO_IMAGE = '/images/sightseeing/Agra/Taj_mahal.jpg';

/* Ultra-Premium v2 CTA system — gold bg + black text, compact on desktop */
const GOLD_CTA =
  'sheen inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#FACF2D] px-7 py-3.5 text-base font-bold text-black shadow-gold-bloom transition-colors hover:bg-[#ffd84f] lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]';
const GHOST_CTA_DARK =
  'inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur-xl transition-colors hover:bg-white/10 lg:w-auto lg:px-5 lg:py-2 lg:text-[13px]';

export default function HoneymoonTripClient({ data }) {
  const phoneNumber = '7668570551';
  const whatsappLink = 'https://wa.me/917668570551';

  // Hub page rendering
  if (data.isHub) {
    return <HoneymoonHubPage data={data} phoneNumber={phoneNumber} whatsappLink={whatsappLink} />;
  }

  const stickyWhatsappText = `Hi, I'd like to plan a honeymoon trip to ${data.destination} by car from Delhi. Please share package details and best rates.`;
  const heroImg = HERO_IMAGES[data.destination];

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SetStickyCta
        price={`Rs ${data.price.sedan.toLocaleString()}`}
        label={`${data.destination} Honeymoon`}
        whatsappText={stickyWhatsappText}
      />

      {/* ─── HERO — destination photo, scrim on the text side only ─── */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        {heroImg ? (
          <img
            src={heroImg}
            alt={`${data.destination} — honeymoon destination by car from Delhi`}
            className="absolute inset-0 h-full w-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
        ) : (
          <div className="absolute inset-0 bg-aurora" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/15" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-rose-200/80">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <Link href="/honeymoon-trip-by-car" className="transition-colors hover:text-white">Honeymoon Trips</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-rose-100">{data.destination}</span>
          </nav>

          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FACF2D]/30 bg-black/40 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FACF2D] backdrop-blur-xl">
              <Heart className="h-3.5 w-3.5" />
              Honeymoon Trip
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-rose-400/30 bg-black/40 px-4 py-1.5 backdrop-blur-xl">
              {[...Array(data.romanceRating)].map((_, i) => (
                <Heart key={i} className="h-3.5 w-3.5 fill-current text-rose-300" />
              ))}
            </span>
          </div>

          <h1 className="speakable-headline font-display-serif mb-6 max-w-3xl text-3xl font-bold leading-[1.08] sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="text-gold-foil">{data.destination}</span>
            <span className="mt-2 block text-xl font-semibold text-white/85 sm:text-2xl md:text-3xl lg:text-4xl">Honeymoon by Car</span>
          </h1>
          <p className="speakable-lead mb-4 max-w-3xl text-lg leading-relaxed text-rose-50/85 sm:text-xl">
            A {data.destination} honeymoon by car from Delhi starts at Rs {data.price.sedan.toLocaleString()} for a private sedan, all-inclusive of toll, parking and driver allowance. Triveni Cabs™ offers a complimentary decorated car option, experienced couple-friendly drivers and scenic romantic stops for an intimate getaway.
          </p>
          <p className="mb-10 max-w-3xl text-base leading-relaxed text-rose-50/65">
            {data.tagline}. Private {data.vehicle.type.toLowerCase()} ride with decorated car option and scenic stops.
          </p>

          {/* Stat panel — glass on dark */}
          <div className="mb-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {[
              { icon: MapPin, label: 'Distance', value: data.distance },
              { icon: Calendar, label: 'Duration', value: data.duration },
              { icon: Heart, label: 'Romance Rating', value: `${data.romanceRating}/5` },
              { icon: IndianRupee, label: 'Starting From', value: `Rs ${data.price.sedan.toLocaleString()}` },
            ].map((item, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:p-5">
                <item.icon className="mb-2 h-5 w-5 text-[#FACF2D]" />
                <p className="text-[11px] font-medium uppercase tracking-wider text-rose-100/60">{item.label}</p>
                <p className="mt-0.5 text-lg font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>

          {/* CTA + Lead Capture */}
          <div className="grid items-start gap-8 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap gap-3">
                <a
                  onClick={() => trackPhoneCall('honeymoon_trip_hero')} href={`tel:${phoneNumber}`}
                  className={GOLD_CTA}
                >
                  <Phone className="h-4 w-4" />
                  Call Now — {phoneNumber}
                </a>
                <a
                  onClick={() => trackWhatsAppClick('honeymoon_trip_hero', stickyWhatsappText)}
                  href={`${whatsappLink}?text=${encodeURIComponent(stickyWhatsappText)}`}
                  target="_blank" rel="noopener noreferrer"
                  className={GHOST_CTA_DARK}
                >
                  WhatsApp Enquiry
                </a>
              </div>
              {/* Trust row */}
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-rose-50/75">
                <span className="flex items-center gap-1.5"><Star className="h-4 w-4 fill-current text-[#FACF2D]" /> 4.9&#9733; Rated</span>
                <span className="flex items-center gap-1.5"><Heart className="h-4 w-4 text-rose-300" /> 10,000+ trips</span>
                <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-[#FACF2D]" /> Verified drivers</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-[#FACF2D]" /> No advance payment</span>
                <span className="flex items-center gap-1.5"><Gift className="h-4 w-4 text-rose-300" /> Decorated car option</span>
              </div>
            </div>
            <div className="w-full lg:justify-self-end">
              <QuickEnquiryForm fromCity="Delhi" toCity={data.destination} pageType="route" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── DECORATED CAR UPSELL — warm-light band ─── */}
      <section className="bg-[#FFF3EE] py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-rose-900/10 bg-white p-8 shadow-sm sm:p-10">
            <div className="flex flex-col items-center gap-8 sm:flex-row">
              <span className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-3xl bg-rose-50 ring-1 ring-rose-200">
                <Gift className="h-12 w-12 text-rose-500" />
              </span>
              <div className="flex-1 text-center sm:text-left">
                <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.25em] text-rose-600">Just Married</p>
                <h2 className="font-display-serif mb-3 text-2xl font-bold sm:text-3xl">Decorated Car Package</h2>
                <p className="mb-4 leading-relaxed text-slate-600">
                  Make your journey special! Fresh flower decoration, &quot;Just Married&quot; ribbon, welcome bouquet, chocolates, and congratulations card.
                </p>
                <p className="text-4xl font-bold text-slate-900">
                  +Rs {data.decoratedCarPrice.toLocaleString()} <span className="text-base font-normal text-rose-500">only</span>
                </p>
              </div>
              <a onClick={() => trackPhoneCall('honeymoon_trip')} href={`tel:${phoneNumber}`} className={GOLD_CTA}>
                Add to Booking
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── VEHICLE & PRICING — dark band ─── */}
      <section className="relative overflow-hidden bg-slate-950 py-16 md:py-24">
        <div className="absolute inset-0 bg-aurora opacity-60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#FACF2D]">Private &amp; Intimate</p>
          <h2 className="font-display-serif mb-10 flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-rose-400/25 bg-rose-500/10">
              <Car className="h-5 w-5 text-rose-300" />
            </span>
            Your Private Ride
          </h2>
          <div className="grid gap-8 sm:grid-cols-2">
            {/* Sedan */}
            <div className="relative overflow-hidden rounded-2xl border border-[#FACF2D]/30 bg-white/5 p-8 backdrop-blur-xl">
              <div className="absolute left-0 top-0 h-full w-1 rounded-r bg-gradient-to-b from-[#FACF2D] via-rose-400 to-[#FACF2D]" />
              <span className="inline-flex items-center gap-1.5 rounded-full bg-[#FACF2D] px-4 py-1.5 text-sm font-semibold text-black">
                <Heart className="h-3.5 w-3.5 fill-current" /> Popular for Couples
              </span>
              <h3 className="mb-1 mt-4 text-xl font-bold text-white">{data.vehicle.name}</h3>
              <p className="mb-5 text-sm text-rose-200/70">Private &amp; intimate for two</p>
              <ul className="mb-8 space-y-3">
                {data.vehicle.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-rose-50/85">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#FACF2D]" />
                    {f}
                  </li>
                ))}
              </ul>
              <div className="border-t border-white/10 pt-5">
                <p className="text-3xl font-bold text-[#FACF2D]">Rs {data.price.sedan.toLocaleString()}</p>
                <p className="mt-1 text-sm text-rose-200/60">Round trip, all inclusive</p>
              </div>
            </div>
            {/* SUV */}
            {data.vehicle.suvOption && (
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <div className="absolute left-0 top-0 h-full w-1 rounded-r bg-gradient-to-b from-rose-400/50 via-rose-500/50 to-rose-400/50" />
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-sm font-semibold text-rose-100">
                  <Sparkles className="h-3.5 w-3.5" /> Extra Comfort
                </span>
                <h3 className="mb-1 mt-4 text-xl font-bold text-white">{data.vehicle.suvOption.name}</h3>
                <p className="mb-5 text-sm text-rose-200/70">Spacious &amp; premium ride</p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center gap-3 text-sm text-rose-50/85">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#FACF2D]" />
                    7-seater spacious SUV
                  </li>
                  <li className="flex items-center gap-3 text-sm text-rose-50/85">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#FACF2D]" />
                    Extra luggage capacity
                  </li>
                  <li className="flex items-center gap-3 text-sm text-rose-50/85">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#FACF2D]" />
                    Premium comfort on hills
                  </li>
                  <li className="flex items-center gap-3 text-sm text-rose-50/85">
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#FACF2D]" />
                    Captain seats for relaxation
                  </li>
                </ul>
                <div className="border-t border-white/10 pt-5">
                  <p className="text-3xl font-bold text-white">Rs {data.vehicle.suvOption.price.toLocaleString()}</p>
                  <p className="mt-1 text-sm text-rose-200/60">Round trip, all inclusive</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ─── COUPLE ACTIVITIES — warm-light band ─── */}
      <section className="bg-[#FFF3EE] py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-rose-600">Together</p>
          <h2 className="font-display-serif mb-3 text-2xl font-bold sm:text-3xl md:text-4xl">Romantic Activities for Couples</h2>
          <p className="mb-10 text-lg text-slate-600">Experiences that bring you closer together</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data.coupleActivities.map((activity, i) => (
              <div key={i} className="rounded-2xl border border-rose-900/10 bg-white p-7 shadow-sm">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 ring-1 ring-rose-200">
                  <Heart className="h-5 w-5 text-rose-500" />
                </span>
                <h3 className="mb-2 text-lg font-bold">{activity.name}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ROMANTIC SPOTS — dark band ─── */}
      <section className="bg-slate-950 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-rose-300">Hidden Gems</p>
          <h2 className="font-display-serif mb-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl">Romantic Spots to Visit</h2>
          <p className="mb-10 text-lg text-rose-100/55">Hidden gems and scenic viewpoints for couples</p>
          <div className="grid gap-6 sm:grid-cols-2">
            {data.romanticSpots.map((spot, i) => (
              <div key={i} className="flex gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-colors hover:border-rose-400/30">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl border border-rose-400/20 bg-rose-500/10">
                  <Sparkles className="h-6 w-6 text-rose-300" />
                </span>
                <div>
                  <h3 className="mb-1.5 text-lg font-bold text-white">{spot.name}</h3>
                  <p className="text-sm leading-relaxed text-rose-50/65">{spot.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ITINERARY — warm-light band ─── */}
      <section className="bg-[#FFF3EE] py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-rose-600">Day by Day</p>
          <h2 className="font-display-serif mb-3 text-2xl font-bold sm:text-3xl md:text-4xl">Your Romantic Itinerary</h2>
          <p className="mb-10 text-lg text-slate-600">Designed for romance at every turn</p>
          <div className="space-y-5">
            {data.itinerary.map((day, i) => (
              <div key={i} className="relative overflow-hidden rounded-2xl border border-rose-900/10 bg-white p-7 shadow-sm">
                <div className="absolute left-0 top-0 h-full w-1.5 rounded-r bg-gradient-to-b from-rose-400 via-rose-500 to-rose-400" />
                <div className="ml-3 flex items-start gap-5">
                  <div className="flex h-16 w-16 flex-shrink-0 flex-col items-center justify-center rounded-2xl bg-slate-900">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#FACF2D]">Day</span>
                    <span className="text-xl font-bold leading-none text-white">{day.day}</span>
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-bold">{day.title}</h3>
                    <p className="leading-relaxed text-slate-600">{day.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PHOTOGRAPHY SPOTS — dark band ─── */}
      <section className="bg-slate-950 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-rose-300">Frame It</p>
          <h2 className="font-display-serif mb-10 flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-rose-400/25 bg-rose-500/10">
              <Camera className="h-5 w-5 text-rose-300" />
            </span>
            Best Photography Spots for Couples
          </h2>
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
            {data.photographySpots.map((spot, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl">
                <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl border border-rose-400/20 bg-rose-500/10">
                  <Camera className="h-5 w-5 text-rose-300" />
                </span>
                <p className="text-sm font-medium text-rose-50/80">{spot}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOTELS + BEST SEASON — warm-light band ─── */}
      <section className="bg-[#FFF3EE] py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-rose-600">Stay in Love</p>
          <h2 className="font-display-serif mb-10 flex items-center gap-3 text-2xl font-bold sm:text-3xl md:text-4xl">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900">
              <Hotel className="h-5 w-5 text-[#FACF2D]" />
            </span>
            Recommended Romantic Stays
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {data.hotelRecommendations.map((hotel, i) => (
              <div key={i} className="flex items-center gap-4 rounded-2xl border border-rose-900/10 bg-white p-6 shadow-sm">
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-rose-50 ring-1 ring-rose-200">
                  <Hotel className="h-5 w-5 text-rose-500" />
                </span>
                <span className="font-medium text-slate-700">{hotel}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-16 rounded-3xl border border-[#FACF2D]/50 bg-[#FACF2D]/10 p-10 text-center sm:p-14">
            <span className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900">
              <Calendar className="h-7 w-7 text-[#FACF2D]" />
            </span>
            <h2 className="font-display-serif mb-4 text-2xl font-bold sm:text-3xl">Best Season for Your Honeymoon</h2>
            <p className="text-xl font-semibold text-rose-600">{data.bestSeason}</p>
          </div>
        </div>
      </section>

      {/* ─── PACKAGE INCLUDES — dark band ─── */}
      <section className="bg-slate-950 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#FACF2D]">All-Inclusive</p>
          <h2 className="font-display-serif mb-10 text-2xl font-bold text-white sm:text-3xl md:text-4xl">What’s Included</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {data.packageIncludes.map((item, i) => (
              <div key={i} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border border-[#FACF2D]/25 bg-[#FACF2D]/10">
                  <CheckCircle2 className="h-4 w-4 text-[#FACF2D]" />
                </span>
                <span className="font-medium text-rose-50/85">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ — warm-light band, two-column ─── */}
      <section className="bg-[#FFF3EE] py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-rose-600">Good to Know</p>
          <h2 className="font-display-serif mb-10 flex items-center gap-3 text-2xl font-bold sm:text-3xl md:text-4xl">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900">
              <HelpCircle className="h-5 w-5 text-[#FACF2D]" />
            </span>
            Frequently Asked Questions
          </h2>
          <div className="grid gap-4 md:grid-cols-2 md:items-start">
            {data.faqs.map((faq, i) => (
              <details key={i} className="group overflow-hidden rounded-2xl border border-rose-900/10 bg-white shadow-sm transition-colors open:border-[#FACF2D]/60">
                <summary className="flex cursor-pointer items-center justify-between p-6 transition-colors hover:bg-rose-50/50">
                  <h3 className="pr-4 text-lg font-semibold">{faq.question}</h3>
                  <ChevronRight className="h-5 w-5 flex-shrink-0 text-rose-500 transition-transform duration-300 group-open:rotate-90" />
                </summary>
                <div className={`px-6 pb-6 leading-relaxed text-slate-600 ${i === 0 ? 'speakable-faq-first' : ''}`}>
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CROSS-SERVICE LINKS — dark band ─── */}
      <section className="bg-slate-950 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display-serif mb-10 flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-rose-400/25 bg-rose-500/10">
              <Compass className="h-5 w-5 text-rose-300" />
            </span>
            Explore More Services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(() => {
              const destSlug = data.destination.toLowerCase().replace(/\s+/g, '-');
              const links = [
                { href: `/sightseeing/${destSlug}`, label: `${data.destination} Sightseeing Tour` },
                { href: `/delhi-airport-to-${destSlug}-taxi`, label: `Delhi Airport to ${data.destination} Taxi` },
                { href: `/${destSlug}`, label: `${data.destination} Cab Service` },
                { href: `/wedding/${destSlug}`, label: `${data.destination} Wedding Car` },
                { href: `/places-to-visit-near-${destSlug}`, label: `Places Near ${data.destination}` },
                { href: `/${destSlug}-travel-guide`, label: `${data.destination} Travel Guide` },
                { href: '/tour-package', label: 'Tour Packages from Delhi' },
                { href: '/outstation-cabs', label: 'Outstation Cab Service' },
              ];
              // Week 48: only the synthesised links whose page was built
              // ("Shimla & Manali" / "Jaipur & Udaipur" have no hub, guide or wedding page).
              return filterClientLinks(links).map((link, i) => (
                <Link key={i} href={link.href} className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-colors hover:border-rose-400/30 hover:bg-white/10">
                  <ArrowRight className="h-4 w-4 flex-shrink-0 text-rose-300 transition-transform group-hover:translate-x-1" />
                  <span className="text-sm font-medium text-rose-50/85 transition-colors group-hover:text-white">{link.label}</span>
                </Link>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA — dark band with gold ─── */}
      <section className="relative overflow-hidden bg-slate-950 py-16 md:py-24">
        <div className="absolute inset-0 bg-aurora" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FACF2D]/60 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-rose-400/25 bg-rose-500/10">
            <Heart className="h-8 w-8 text-rose-300" />
          </span>
          <h2 className="font-display-serif mb-5 text-3xl font-bold text-white sm:text-4xl">
            Begin Your Love Story at {data.destination}
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-rose-100/70">
            Private sedan, decorated car option, scenic route. From Rs {data.price.sedan.toLocaleString()}.
          </p>
          <div className="flex flex-col flex-wrap justify-center gap-4 sm:flex-row">
            <a
              onClick={() => trackPhoneCall('honeymoon_trip_footer')} href={`tel:${phoneNumber}`}
              className={GOLD_CTA}
            >
              <Phone className="h-4 w-4" />
              Call {phoneNumber}
            </a>
            <a onClick={() => trackWhatsAppClick('honeymoon_trip_footer', stickyWhatsappText)} href={`${whatsappLink}?text=${encodeURIComponent(stickyWhatsappText)}`} target="_blank" rel="noopener noreferrer" className={GHOST_CTA_DARK}>
              WhatsApp Booking
            </a>
          </div>
          <p className="mt-8 text-sm text-rose-100/50">
            Decorated car Rs 2,000 extra | Free cancellation up to 48 hours
          </p>
        </div>
      </section>
    </main>
  );
}

function HoneymoonHubPage({ data, phoneNumber, whatsappLink }) {
  const hubWhatsappText = 'Hi, I want to plan a honeymoon trip by car from Delhi. Please share destinations and package details.';
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <SetStickyCta
        price="Rs 4,500"
        label="Honeymoon Trip by Car"
        whatsappText={hubWhatsappText}
      />

      {/* ─── HERO — Taj Mahal photo, scrim on the text side only ─── */}
      <section className="relative isolate overflow-hidden bg-slate-950">
        <img
          src={HUB_HERO_IMAGE}
          alt="Taj Mahal, Agra — the symbol of eternal love, a top honeymoon drive from Delhi"
          className="absolute inset-0 h-full w-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/70 to-slate-950/15" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
          <nav className="mb-8 flex items-center gap-2 text-sm text-rose-200/80">
            <Link href="/" className="transition-colors hover:text-white">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-rose-100">Honeymoon by Car</span>
          </nav>

          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#FACF2D]/30 bg-black/40 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-[#FACF2D] backdrop-blur-xl">
            <Heart className="h-3.5 w-3.5" />
            Honeymoon Road Trips
          </span>

          {/* The hub view is its own page (/honeymoon-trip-by-car) and this is
              its main headline, so it is the h1. It was an h2, which left that
              page with no h1 at all — the per-destination branch above has one. */}
          <h1 className="speakable-headline font-display-serif mb-6 max-w-3xl text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
            <span className="text-gold-foil">Honeymoon Trip by Car</span>
            <span className="mt-2 block text-2xl font-semibold text-white/85 sm:text-3xl">from Delhi</span>
          </h1>
          <p className="speakable-lead mb-10 max-w-3xl text-lg leading-relaxed text-rose-50/85 sm:text-xl">
            {data.heroDescription}
          </p>

          {/* Stat panel — glass on dark */}
          <div className="mb-10 grid max-w-lg grid-cols-3 gap-4">
            {[
              { label: 'Destinations', value: `${data.allDestinations?.length || 0}+`, icon: MapPin },
              { label: 'Starting From', value: 'Rs 4,500', icon: IndianRupee },
              { label: 'Romance', value: '5-Star', icon: Heart },
            ].map((stat, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl">
                <stat.icon className="mx-auto mb-1.5 h-5 w-5 text-[#FACF2D]" />
                <p className="text-lg font-bold text-white">{stat.value}</p>
                <p className="text-[11px] uppercase tracking-wider text-rose-100/60">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              onClick={() => trackPhoneCall('honeymoon_hub_hero')} href={`tel:${phoneNumber}`}
              className={GOLD_CTA}
            >
              <Phone className="h-4 w-4" />
              Call Now — {phoneNumber}
            </a>
            <a onClick={() => trackWhatsAppClick('honeymoon_hub_hero', hubWhatsappText)} href={`${whatsappLink}?text=${encodeURIComponent(hubWhatsappText)}`} target="_blank" rel="noopener noreferrer" className={GHOST_CTA_DARK}>
              WhatsApp Enquiry
            </a>
          </div>
          {/* Trust row */}
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-rose-50/75">
            <span className="flex items-center gap-1.5"><Star className="h-4 w-4 fill-current text-[#FACF2D]" /> 4.9&#9733; Rated</span>
            <span className="flex items-center gap-1.5"><Heart className="h-4 w-4 text-rose-300" /> 10,000+ trips</span>
            <span className="flex items-center gap-1.5"><Shield className="h-4 w-4 text-[#FACF2D]" /> Verified drivers</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-4 w-4 text-[#FACF2D]" /> No advance payment</span>
          </div>
        </div>
      </section>

      {/* ─── ALL DESTINATIONS — warm-light band ─── */}
      <section className="bg-[#FFF3EE] py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-rose-600">Pick Your Escape</p>
          <h2 className="font-display-serif mb-3 text-2xl font-bold sm:text-3xl md:text-4xl">Romantic Destinations</h2>
          <p className="mb-10 text-lg text-slate-600">Choose your perfect honeymoon road trip</p>
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {data.allDestinations.map((dest, i) => (
              <Link key={i} href={`/${dest.slug}`} className="group block rounded-2xl border border-rose-900/10 bg-white p-7 shadow-sm transition-colors hover:border-[#FACF2D]/60">
                <div className="mb-4 flex items-center gap-1">
                  {[...Array(dest.romance)].map((_, j) => (
                    <Heart key={j} className="h-4 w-4 fill-current text-rose-500" />
                  ))}
                  {[...Array(5 - dest.romance)].map((_, j) => (
                    <Heart key={j} className="h-4 w-4 text-rose-200" />
                  ))}
                </div>
                <h3 className="mb-2 text-xl font-bold transition-colors group-hover:text-rose-600">{dest.name}</h3>
                <p className="mb-4 text-sm leading-relaxed text-slate-600">{dest.highlight}</p>
                <div className="mb-4 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-500">{dest.days} Days</span>
                  <span className="text-base font-bold text-slate-900">From Rs {dest.price.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-semibold text-rose-600">
                  View Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DECORATED CAR — dark band ─── */}
      <section className="relative overflow-hidden bg-slate-950 py-16 md:py-24">
        <div className="absolute inset-0 bg-aurora opacity-60" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#FACF2D]/25 bg-white/5 p-10 text-center backdrop-blur-xl sm:p-14">
            <span className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-rose-400/25 bg-rose-500/10">
              <Gift className="h-10 w-10 text-rose-300" />
            </span>
            <h2 className="font-display-serif mb-4 text-2xl font-bold text-white sm:text-3xl">Decorated Car for Every Honeymoon</h2>
            <p className="mx-auto mb-8 max-w-2xl leading-relaxed text-rose-100/70">
              Fresh flowers, &quot;Just Married&quot; ribbons, welcome bouquet, chocolates, and a congratulations card. Available for all destinations at just Rs 2,000 extra.
            </p>
            <a
              onClick={() => trackPhoneCall('honeymoon_trip')} href={`tel:${phoneNumber}`}
              className={GOLD_CTA}
            >
              <Phone className="h-4 w-4" />
              Book Decorated Car
            </a>
          </div>
        </div>
      </section>

      {/* ─── FAQ — warm-light band, two-column ─── */}
      <section className="bg-[#FFF3EE] py-16 text-slate-900 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.25em] text-rose-600">Good to Know</p>
          <h2 className="font-display-serif mb-10 flex items-center gap-3 text-2xl font-bold sm:text-3xl md:text-4xl">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900">
              <HelpCircle className="h-5 w-5 text-[#FACF2D]" />
            </span>
            Frequently Asked Questions
          </h2>
          <div className="grid gap-4 md:grid-cols-2 md:items-start">
            {data.faqs.map((faq, i) => (
              <details key={i} className="group overflow-hidden rounded-2xl border border-rose-900/10 bg-white shadow-sm transition-colors open:border-[#FACF2D]/60">
                <summary className="flex cursor-pointer items-center justify-between p-6 transition-colors hover:bg-rose-50/50">
                  <h3 className="pr-4 text-lg font-semibold">{faq.question}</h3>
                  <ChevronRight className="h-5 w-5 flex-shrink-0 text-rose-500 transition-transform duration-300 group-open:rotate-90" />
                </summary>
                <div className={`px-6 pb-6 leading-relaxed text-slate-600 ${i === 0 ? 'speakable-faq-first' : ''}`}>{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CROSS-SERVICE LINKS — dark band ─── */}
      <section className="bg-slate-950 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display-serif mb-10 flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-rose-400/25 bg-rose-500/10">
              <Compass className="h-5 w-5 text-rose-300" />
            </span>
            Explore More Services
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { href: '/honeymoon-shimla-manali-by-car', label: 'Shimla Manali Honeymoon' },
              { href: '/honeymoon-kashmir-by-car', label: 'Kashmir Honeymoon by Car' },
              { href: '/honeymoon-manali-by-car', label: 'Manali Honeymoon Package' },
              { href: '/honeymoon-mussoorie-by-car', label: 'Mussoorie Honeymoon Trip' },
              { href: '/honeymoon-nainital-by-car', label: 'Nainital Honeymoon by Car' },
              { href: '/honeymoon-udaipur-by-car', label: 'Udaipur Honeymoon Package' },
              { href: '/tour-package', label: 'Tour Packages from Delhi' },
              { href: '/outstation-cabs', label: 'Outstation Cab Service' },
            ].map((link, i) => (
              <Link key={i} href={link.href} className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-colors hover:border-rose-400/30 hover:bg-white/10">
                <ArrowRight className="h-4 w-4 flex-shrink-0 text-rose-300 transition-transform group-hover:translate-x-1" />
                <span className="text-sm font-medium text-rose-50/85 transition-colors group-hover:text-white">{link.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA — dark band with gold ─── */}
      <section className="relative overflow-hidden bg-slate-950 py-16 md:py-24">
        <div className="absolute inset-0 bg-aurora" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#FACF2D]/60 to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-rose-400/25 bg-rose-500/10">
            <Heart className="h-8 w-8 text-rose-300" />
          </span>
          <h2 className="font-display-serif mb-5 text-3xl font-bold text-white sm:text-4xl">Start Your Honeymoon Journey</h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-rose-100/70">Private car, decorated option, experienced drivers. Your love story begins on the road.</p>
          <div className="flex flex-col flex-wrap justify-center gap-4 sm:flex-row">
            <a
              onClick={() => trackPhoneCall('honeymoon_hub_footer')} href={`tel:${phoneNumber}`}
              className={GOLD_CTA}
            >
              <Phone className="h-4 w-4" />
              Call {phoneNumber}
            </a>
            <a onClick={() => trackWhatsAppClick('honeymoon_hub_footer', hubWhatsappText)} href={`${whatsappLink}?text=${encodeURIComponent(hubWhatsappText)}`} target="_blank" rel="noopener noreferrer" className={GHOST_CTA_DARK}>
              WhatsApp Booking
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
