'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, MapPin, Star, ChevronRight, ChevronDown, Crown, Sparkles,
  Heart, Shield, CheckCircle, Clock, Gift, Music, Users, Flower2,
  ArrowRight, Award, Calendar,
  WhatsAppIcon,
} from '@/components/ui/icons';
import { phoneNumber } from '@/utilis/data';
import { trackPhoneCall, trackWhatsAppClick } from '@/utilis/analytics';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import QuickEnquiryForm from '@/components/ui/QuickEnquiryForm';

const WA = '917668570551';

const waLink = (text) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

// ----- Data (sourced from weddingCarModels.js pricing) -----
const FLEET = [
  {
    name: 'BMW & Audi',
    tag: 'Most Booked',
    sub: '5 Series · A6 · A8',
    price: '₹15,000',
    unit: '/ day',
    image: '/images/wedding/luxury_car.jpg',
    blurb: 'The signature bride & groom entry car. German luxury, leather interiors, and a presence that turns every head at the venue.',
    wa: 'Hi Triveni Cabs, I want to book a decorated BMW / Audi wedding car (from Rs 15,000). Please share availability and packages.',
    accent: 'from-amber-400 to-yellow-200',
  },
  {
    name: 'Mercedes-Benz',
    tag: 'Royal Choice',
    sub: 'E-Class · S-Class · GLC',
    price: '₹18,000',
    unit: '/ day',
    image: '/images/wedding/luxury_car.jpg',
    blurb: 'For the grandest entry. Burmester sound, ambient lighting, and the unmistakable three-pointed star for a truly regal vidai.',
    wa: 'Hi Triveni Cabs, I want to book a decorated Mercedes wedding car (from Rs 18,000). Please share availability and packages.',
    accent: 'from-rose-300 to-amber-200',
  },
  {
    name: 'Vintage Classics',
    tag: 'Timeless',
    sub: 'Ambassador · Rolls-style',
    price: '₹25,000',
    unit: '/ day',
    image: '/images/wedding/vintage_car.jpg',
    blurb: 'Old-world royalty for unforgettable photographs. Restored classics dressed in marigold & rose for a heritage-theme shaadi.',
    wa: 'Hi Triveni Cabs, I want to book a decorated vintage wedding car (from Rs 25,000). Please share availability and packages.',
    accent: 'from-yellow-200 to-amber-400',
  },
  {
    name: 'Premium SUVs',
    tag: 'Family & Convoy',
    sub: 'Fortuner · Innova Crysta',
    price: '₹8,000',
    unit: '/ day',
    image: '/images/car/innova_crysta.jpg',
    blurb: 'Spacious comfort for parents, VIP guests and hill-station venues. Perfect to complete the wedding convoy in style.',
    wa: 'Hi Triveni Cabs, I want to book a premium SUV for the wedding (from Rs 8,000). Please share availability and packages.',
    accent: 'from-amber-300 to-rose-200',
  },
  {
    name: 'Baraat Tempo Traveller',
    tag: 'With DJ',
    sub: '12 · 17 · 20 · 26 seater',
    price: '₹8,000',
    unit: '/ day',
    image: '/images/tempo/26_seater.jpg',
    blurb: 'Make the baraat the talk of the town — DJ sound, LED lights and decorated AC tempos that keep the whole party dancing.',
    wa: 'Hi Triveni Cabs, I want to book a decorated baraat tempo traveller with DJ (from Rs 8,000). Please share seating options and price.',
    accent: 'from-rose-300 to-yellow-200',
  },
];

const SERVICES = [
  {
    title: 'Baraat Tempo with DJ',
    href: '/wedding/baraat-tempo-traveller',
    desc: '12 to 26 seater decorated AC tempos with powerful DJ sound, LED & laser lights for a grand procession.',
    icon: Music,
  },
  {
    title: 'Doli / Vidai Car',
    href: '/wedding/doli-car-rental',
    desc: 'Beautifully adorned luxury cars for the bride’s emotional vidai — flowers, red carpet & rose petals included.',
    icon: Heart,
  },
  {
    title: 'Car Decoration Packages',
    href: '/wedding/car-decoration-packages',
    desc: 'Fresh-flower sajawat from classic floral to royal-grand themes, hand-arranged on your wedding morning.',
    icon: Flower2,
  },
];

const STEPS = [
  { n: '01', title: 'Share Your Date', desc: 'Tell us your wedding date, venue and the car you love — on WhatsApp or the quick form.', icon: Calendar },
  { n: '02', title: 'Pick Car & Decor', desc: 'Choose your dream car and a flower decoration theme that matches your wedding palette.', icon: Flower2 },
  { n: '03', title: 'Confirm & Relax', desc: 'A small token confirms the date. We handle decoration, chauffeur and timing.', icon: CheckCircle },
  { n: '04', title: 'Grand Entry', desc: 'Your decorated car arrives early, chauffeur in formals — perfectly on time for the muhurat.', icon: Crown },
];

const TESTIMONIALS = [
  {
    name: 'Ananya & Rohan',
    place: 'Delhi Wedding',
    text: 'The decorated Mercedes for our doli was absolutely stunning. The chauffeur arrived an hour early in a crisp suit. Every guest asked who arranged it!',
    initials: 'AR',
    color: 'from-rose-400 to-amber-300',
  },
  {
    name: 'Simran & Arjun',
    place: 'Jaipur Destination Wedding',
    text: 'Booked the baraat tempo with DJ and a vintage car for the entry. The whole baraat was dancing and the vintage car photos are framed in our home now.',
    initials: 'SA',
    color: 'from-amber-400 to-yellow-200',
  },
  {
    name: 'Priya & Karan',
    place: 'Chandigarh Wedding',
    text: 'A BMW for the groom and a flower-decorated sedan for vidai — both spotless and on time. Triveni made the transport one less thing to worry about.',
    initials: 'PK',
    color: 'from-rose-300 to-amber-400',
  },
];

const TRUST = [
  { icon: Star, label: '4.9★ Rated' },
  { icon: Flower2, label: 'Decorated Cars' },
  { icon: Award, label: 'Chauffeur in Formals' },
  { icon: Clock, label: 'On-time for Muhurat' },
];

// ----- Ornamental gold divider -----
const GoldDivider = () => (
  <div className="flex items-center justify-center gap-3 my-2" aria-hidden="true">
    <span className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-amber-400/60 to-amber-400/60" />
    <Sparkles className="w-4 h-4 text-amber-400" />
    <Crown className="w-5 h-5 text-amber-300" />
    <Sparkles className="w-4 h-4 text-amber-400" />
    <span className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent via-amber-400/60 to-amber-400/60" />
  </div>
);

const SectionLabel = ({ children }) => (
  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs sm:text-sm font-semibold tracking-wide uppercase">
    <Heart className="w-3.5 h-3.5" />
    {children}
  </span>
);

// ----- FAQ accordion item -----
function FaqItem({ q, a, isFirst, open, onToggle }) {
  return (
    <div className="border border-amber-200/40 rounded-2xl bg-white/70 backdrop-blur-sm overflow-hidden transition-shadow hover:shadow-lg hover:shadow-rose-200/40">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 text-left px-5 sm:px-6 py-4 min-h-[44px]"
      >
        <span className="font-serif text-base sm:text-lg font-semibold text-[#5b1228]">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-amber-600 flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="px-5 sm:px-6 pb-5 -mt-1">
          <p className={`text-[#6b3a4a] leading-relaxed text-sm sm:text-base ${isFirst ? 'speakable-faq-first' : ''}`}>
            {a}
          </p>
        </div>
      )}
    </div>
  );
}

export default function WeddingHubRedesign({ faqs = [] }) {
  const [mounted, setMounted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const heroWa =
    "Hi Triveni Cabs, I'd like to book a decorated wedding car for my special day. Please share the fleet, decoration packages and prices.";

  return (
    <main className="bg-[#fdf6ef] text-[#3a1220] overflow-x-hidden">
      {/* Sticky mobile CTA wiring */}
      <SetStickyCta
        price="from ₹8,000"
        label="Wedding Car"
        whatsappText={heroWa}
      />

      {/* ============================ HERO ============================ */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/wedding/luxury_car.jpg"
            alt="Decorated luxury wedding car for bride and groom grand entry"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Maroon / wine cinematic overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#3a0a1c]/85 via-[#5b1228]/80 to-[#2a0712]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(250,207,45,0.15),transparent_60%)]" />
        </div>

        {/* Floating petal / marigold motifs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          {mounted &&
            [
              { c: 'top-[12%] left-[8%]', d: '0s', i: Flower2, s: 'w-8 h-8 text-amber-300/40' },
              { c: 'top-[22%] right-[10%]', d: '1.2s', i: Sparkles, s: 'w-10 h-10 text-yellow-200/40' },
              { c: 'top-[55%] left-[5%]', d: '0.6s', i: Heart, s: 'w-7 h-7 text-rose-300/40' },
              { c: 'bottom-[18%] right-[14%]', d: '1.8s', i: Flower2, s: 'w-9 h-9 text-amber-200/40' },
              { c: 'bottom-[28%] left-[20%]', d: '0.9s', i: Sparkles, s: 'w-6 h-6 text-yellow-300/40' },
              { c: 'top-[40%] right-[24%]', d: '2.2s', i: Heart, s: 'w-5 h-5 text-rose-200/40' },
            ].map((p, idx) => {
              const Icon = p.i;
              return (
                <span key={idx} className={`absolute ${p.c} animate-bounce`} style={{ animationDuration: '4s', animationDelay: p.d }}>
                  <Icon className={p.s} />
                </span>
              );
            })}
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 py-20 text-center">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="inline-flex items-center gap-2 text-xs sm:text-sm text-amber-100/70">
              <li>
                <Link href="/" className="hover:text-amber-300 transition-colors">Home</Link>
              </li>
              <ChevronRight className="w-3.5 h-3.5 text-amber-200/50" />
              <li className="text-amber-300 font-medium">Wedding Cars</li>
            </ol>
          </nav>

          <div className={`transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="flex items-center justify-center gap-2 mb-5">
              <span className="h-px w-10 bg-amber-400/60" />
              <Crown className="w-6 h-6 text-amber-300" />
              <span className="text-amber-200 text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase">
                Royal Wedding Cars
              </span>
              <Crown className="w-6 h-6 text-amber-300" />
              <span className="h-px w-10 bg-amber-400/60" />
            </div>

            <h1 className="speakable-headline font-serif text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] text-transparent bg-clip-text bg-gradient-to-b from-[#fff7e6] via-amber-100 to-amber-300 drop-shadow-[0_2px_20px_rgba(250,207,45,0.25)]">
              A Grand Entrance,<br className="hidden sm:block" /> Worthy of Your Forever
            </h1>

            <p className="speakable-lead mt-6 text-base sm:text-xl text-rose-50/90 max-w-2xl mx-auto leading-relaxed">
              Triveni Cabs rents <strong className="text-amber-200 font-semibold">decorated luxury wedding cars</strong> &mdash;
              BMW, Audi, Mercedes, vintage classics and baraat tempo travellers &mdash; with flower decoration,
              uniformed chauffeurs and on-time arrival for your muhurat. Cars from <strong className="text-amber-200">&#8377;15,000</strong>, baraat tempos from <strong className="text-amber-200">&#8377;8,000</strong>.
            </p>

            {/* Trust row */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
              {TRUST.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-amber-200/30 text-amber-50 text-xs sm:text-sm"
                >
                  <Icon className="w-3.5 h-3.5 text-amber-300" />
                  {label}
                </span>
              ))}
            </div>

            {/* Dual CTA — above fold on mobile */}
            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-md sm:max-w-none mx-auto">
              <a
                href={waLink(heroWa)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('wedding_hero', heroWa, 'wedding-hub')}
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 min-h-[52px] rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 text-[#5b1228] font-bold text-base shadow-xl shadow-amber-500/30 hover:shadow-amber-400/50 hover:scale-[1.03] transition-all"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Book Your Wedding Car
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href={`tel:+91${phoneNumber}`}
                onClick={() => trackPhoneCall('wedding_hero', phoneNumber)}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 min-h-[52px] rounded-full bg-white/10 backdrop-blur-md border border-amber-200/40 text-amber-50 font-semibold text-base hover:bg-white/15 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call {phoneNumber}
              </a>
            </div>

            <p className="mt-5 text-rose-100/70 text-xs sm:text-sm flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              Serving Delhi, Jaipur, Agra, Chandigarh, Udaipur &amp; across North India
            </p>
          </div>
        </div>

        {/* Bottom ivory curve */}
        <div className="absolute bottom-0 left-0 right-0 leading-none">
          <svg viewBox="0 0 1440 110" className="w-full h-auto" preserveAspectRatio="none">
            <path fill="#fdf6ef" d="M0,80L120,69.3C240,59,480,37,720,42.7C960,48,1200,80,1320,96L1440,112L1440,120L0,120Z" />
          </svg>
        </div>
      </section>

      {/* ============================ FLEET ============================ */}
      <section id="fleet" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>The Royal Fleet</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-4 text-[#5b1228]">
              Decorated Cars for Every Wedding Ritual
            </h2>
            <div className="mt-5"><GoldDivider /></div>
            <p className="mt-4 text-[#6b3a4a] max-w-2xl mx-auto text-sm sm:text-base">
              From a regal bride&apos;s entry to a high-energy baraat &mdash; pick the perfect ride.
              Every car comes with fresh-flower decoration and a chauffeur in formals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {FLEET.map((car) => (
              <article
                key={car.name}
                className="group relative flex flex-col rounded-3xl overflow-hidden bg-white border border-amber-200/50 shadow-lg shadow-rose-100/50 hover:shadow-2xl hover:shadow-rose-200/60 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-52 sm:h-56 overflow-hidden">
                  <Image
                    src={car.image}
                    alt={`${car.name} decorated wedding car for hire`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3a0a1c]/70 via-transparent to-transparent" />
                  {/* Decorated + tag badges */}
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-amber-400 text-[#5b1228] text-[11px] font-bold shadow-md">
                    <Flower2 className="w-3 h-3" />
                    Decorated
                  </span>
                  <span className={`absolute top-3 right-3 inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r ${car.accent} text-[#5b1228] text-[11px] font-bold shadow-md`}>
                    {car.tag}
                  </span>
                </div>

                <div className="flex flex-col flex-1 p-5 sm:p-6">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#5b1228]">{car.name}</h3>
                  <p className="text-amber-700 text-xs sm:text-sm font-medium mt-0.5">{car.sub}</p>
                  <p className="text-[#6b3a4a] text-sm leading-relaxed mt-3 flex-1">{car.blurb}</p>

                  <div className="flex items-end justify-between mt-5 pt-4 border-t border-amber-100">
                    <div>
                      <span className="text-[11px] text-[#9b6a78] uppercase tracking-wide">Starting</span>
                      <div className="font-serif text-2xl font-bold text-[#5b1228]">
                        {car.price}
                        <span className="text-sm font-normal text-[#9b6a78]"> {car.unit}</span>
                      </div>
                    </div>
                    <a
                      href={waLink(car.wa)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => trackWhatsAppClick('wedding_fleet_card', car.wa, car.name)}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 min-h-[44px] rounded-full bg-[#5b1228] text-amber-50 text-sm font-semibold hover:bg-[#7a1a38] transition-colors"
                    >
                      <WhatsAppIcon className="w-4 h-4" />
                      Enquire
                    </a>
                  </div>
                </div>
              </article>
            ))}

            {/* CTA card */}
            <article className="flex flex-col items-center justify-center text-center rounded-3xl p-8 bg-gradient-to-br from-[#5b1228] to-[#2a0712] border border-amber-300/30 shadow-lg">
              <Crown className="w-10 h-10 text-amber-300 mb-3" />
              <h3 className="font-serif text-2xl font-bold text-amber-50">Need a Full Convoy?</h3>
              <p className="text-rose-100/80 text-sm mt-2 mb-5">
                Mix luxury cars, SUVs &amp; baraat tempos for every function. Multi-car packages save 10&ndash;15%.
              </p>
              <a
                href={waLink('Hi Triveni Cabs, I need multiple wedding cars / a full convoy for different functions. Please share a package quote.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('wedding_fleet_convoy', '', 'convoy')}
                className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-full bg-amber-400 text-[#5b1228] font-bold text-sm hover:bg-amber-300 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                Get Package Quote
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* ============================ WEDDING SERVICES ============================ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#fdf6ef] via-rose-50/50 to-[#fdf6ef]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Complete Shaadi Services</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-4 text-[#5b1228]">
              Beyond the Car &mdash; Every Detail Covered
            </h2>
            <div className="mt-5"><GoldDivider /></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {SERVICES.map(({ title, href, desc, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="group relative flex flex-col rounded-3xl p-7 bg-white border border-amber-200/50 shadow-md hover:shadow-xl hover:shadow-rose-200/50 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-rose-300 flex items-center justify-center shadow-md mb-5">
                  <Icon className="w-7 h-7 text-[#5b1228]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-[#5b1228]">{title}</h3>
                <p className="text-[#6b3a4a] text-sm leading-relaxed mt-3 flex-1">{desc}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-amber-700 font-semibold text-sm group-hover:gap-2.5 transition-all">
                  Explore
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ HOW IT WORKS ============================ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Your Wedding Day</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-4 text-[#5b1228]">
              Booked in Minutes, Perfect on the Day
            </h2>
            <div className="mt-5"><GoldDivider /></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STEPS.map(({ n, title, desc, icon: Icon }) => (
              <div
                key={n}
                className="relative rounded-3xl p-6 bg-white border border-amber-200/50 shadow-md text-center"
              >
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 font-serif text-sm font-bold px-3 py-1 rounded-full bg-[#5b1228] text-amber-200">
                  {n}
                </span>
                <div className="w-14 h-14 mx-auto mt-3 mb-4 rounded-full bg-gradient-to-br from-amber-300 to-rose-200 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-[#5b1228]" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#5b1228]">{title}</h3>
                <p className="text-[#6b3a4a] text-sm leading-relaxed mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ QUICK ENQUIRY (dark, romantic) ============================ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-br from-[#3a0a1c] via-[#5b1228] to-[#2a0712]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(250,207,45,0.18),transparent_55%)]" aria-hidden="true" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <SectionLabel>Reserve Your Date</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-4 text-amber-50 leading-tight">
              Tell Us About Your<br className="hidden sm:block" /> Big Day
            </h2>
            <p className="text-rose-100/85 mt-5 text-sm sm:text-base leading-relaxed max-w-md">
              Peak muhurat dates book out fast &mdash; especially October to February. Share your details
              and our wedding team replies within minutes with availability, decoration options and a transparent quote.
            </p>
            <ul className="mt-6 space-y-3">
              {['Fresh-flower decoration included', 'Uniformed chauffeur in formals', 'Refundable token to confirm the date', 'On-time guarantee for the muhurat'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-rose-50/90 text-sm sm:text-base">
                  <CheckCircle className="w-5 h-5 text-amber-300 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={`tel:+91${phoneNumber}`}
              onClick={() => trackPhoneCall('wedding_enquiry_section', phoneNumber)}
              className="mt-7 inline-flex items-center gap-2 text-amber-200 font-semibold hover:text-amber-100 transition-colors"
            >
              <Phone className="w-5 h-5" />
              Or call us directly: {phoneNumber}
            </a>
          </div>

          <div className="flex justify-center lg:justify-end">
            <QuickEnquiryForm pageType="wedding" />
          </div>
        </div>
      </section>

      {/* ============================ TESTIMONIALS ============================ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Happy Couples</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-4 text-[#5b1228]">
              Love Stories We&apos;ve Been Part Of
            </h2>
            <div className="mt-5"><GoldDivider /></div>
            <div className="mt-4 inline-flex items-center gap-2 text-amber-700">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </span>
              <span className="font-semibold text-sm">4.9 / 5 from 10,000+ celebrations</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="relative rounded-3xl p-7 bg-white border border-amber-200/50 shadow-md"
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="text-[#5b1228] text-sm sm:text-base leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-3 mt-5 pt-5 border-t border-amber-100">
                  <span className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center font-serif font-bold text-[#5b1228] text-sm shadow`}>
                    {t.initials}
                  </span>
                  <span>
                    <span className="block font-serif font-bold text-[#5b1228]">{t.name}</span>
                    <span className="block text-xs text-[#9b6a78] flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {t.place}
                    </span>
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ FAQ ============================ */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-[#fdf6ef] to-rose-50/60">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <SectionLabel>Good to Know</SectionLabel>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold mt-4 text-[#5b1228]">
              Wedding Car Questions, Answered
            </h2>
            <div className="mt-5"><GoldDivider /></div>
          </div>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <FaqItem
                key={i}
                q={f.question}
                a={f.answer}
                isFirst={i === 0}
                open={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ============================ FINAL CTA ============================ */}
      <section className="relative py-20 sm:py-28 px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/wedding/vintage_car.jpg"
            alt="Decorated vintage wedding car ready for a grand entry"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2a0712]/95 via-[#5b1228]/90 to-[#3a0a1c]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(250,207,45,0.15),transparent_60%)]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <Crown className="w-12 h-12 text-amber-300 mx-auto mb-5" />
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-50 to-amber-300 leading-tight">
            Book Your Wedding Car Today
          </h2>
          <p className="text-rose-100/90 mt-5 text-base sm:text-lg max-w-xl mx-auto">
            Let every guest remember your grand entrance. Decorated cars, formal chauffeurs and an on-time
            promise &mdash; reserve your date before the muhurat rush.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-md sm:max-w-none mx-auto">
            <a
              href={waLink(heroWa)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick('wedding_final_cta', heroWa, 'final-cta')}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 min-h-[52px] rounded-full bg-gradient-to-r from-amber-400 to-yellow-300 text-[#5b1228] font-bold text-base shadow-xl shadow-amber-500/30 hover:scale-[1.03] transition-all"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp Booking
            </a>
            <a
              href={`tel:+91${phoneNumber}`}
              onClick={() => trackPhoneCall('wedding_final_cta', phoneNumber)}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 min-h-[52px] rounded-full bg-white/10 backdrop-blur-md border border-amber-200/40 text-amber-50 font-semibold text-base hover:bg-white/15 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call {phoneNumber}
            </a>
          </div>

          <p className="mt-6 text-rose-100/70 text-xs sm:text-sm flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5">
            <span className="inline-flex items-center gap-1.5"><Shield className="w-4 h-4 text-amber-300" /> Trusted by 10,000+ couples</span>
            <span className="inline-flex items-center gap-1.5"><Gift className="w-4 h-4 text-amber-300" /> Decoration included</span>
            <span className="inline-flex items-center gap-1.5"><Users className="w-4 h-4 text-amber-300" /> Multi-car packages</span>
          </p>
        </div>
      </section>
    </main>
  );
}
