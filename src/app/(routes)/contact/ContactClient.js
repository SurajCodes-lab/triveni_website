"use client";

import Image from "next/image";
import Link from "next/link";
import QuickEnquiryForm from "@/components/ui/QuickEnquiryForm";
import { SetStickyCta } from "@/components/ui/StickyCtaContext";
import { trackPhoneCall, trackWhatsAppClick } from "@/utilis/analytics";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  Shield,
  Car,
  Bus,
  Users,
  Plane,
  Route,
  RotateCcw,
  Heart,
  ChevronRight,
  Navigation,
  BadgeCheck,
  WhatsAppIcon,
} from "@/components/ui/icons";

const PHONE_DISPLAY = "+91 76685 70551";
const PHONE_TEL = "tel:+917668570551";
const WA_TEXT = "Hi Triveni Cabs, I want to book a cab";
const WA_LINK = `https://wa.me/917668570551?text=${encodeURIComponent(WA_TEXT)}`;
// Alternative WhatsApp desk — published on the contact page ONLY (user request).
const WA_ALT_DISPLAY = "+91 89235 34551";
const WA_ALT_LINK = `https://wa.me/918923534551?text=${encodeURIComponent(WA_TEXT)}`;
const EMAIL = "cabstriveni@gmail.com";
const MAPS_LINK =
  "https://maps.google.com/?q=366+Dandupura+near+Tajganj+Agra+Uttar+Pradesh+282006";

// The site-wide WhatsApp interceptor in StickyCtaProvider stops click events on
// wa.me anchors during the capture phase, so analytics has to fire on pointerdown.
const waTrack = (location) => () => trackWhatsAppClick(location, WA_TEXT, "contact_page");

// Highway lane marking — the page's one recurring motif, used as a card top edge.
const LANE =
  "bg-[repeating-linear-gradient(90deg,#FACF2D_0_18px,transparent_18px_34px)]";

const GLASS = "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl";

const FOCUS =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FACF2D] focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950";

const TRUST = [
  { icon: Star, label: "4.9 star rated", sub: "by our travellers" },
  { icon: BadgeCheck, label: "Serving since 2015", sub: "10+ years on the road" },
  { icon: Shield, label: "No hidden charges", sub: "the fare quoted is the fare paid" },
  { icon: Clock, label: "Answered 24x7", sub: "reply in about 2 minutes" },
];

const CHANNELS = [
  {
    key: "call",
    icon: Phone,
    title: "Call the booking desk",
    value: PHONE_DISPLAY,
    body: "Fastest for same-day pickups and last-minute changes. Answered around the clock, in Hindi or English.",
    cta: "Tap to call",
  },
  {
    key: "whatsapp",
    icon: WhatsAppIcon,
    title: "WhatsApp us",
    value: "Instant chat",
    body: "Best for sending an itinerary, a pickup pin or a flight number. Your fare quote comes back in writing.",
    cta: "Start a chat",
  },
  {
    key: "email",
    icon: Mail,
    title: "Email the office",
    value: EMAIL,
    body: "Use this for corporate accounts, GST invoices and long multi-day tour plans. Replied within four hours.",
    cta: "Write to us",
  },
];

const FLEET = [
  {
    name: "Sedan",
    models: "Swift Dzire, Etios",
    seats: "4 passengers",
    rate: "from Rs 11/km",
    img: "/images/car/swift_dzire.jpg",
    icon: Car,
  },
  {
    name: "SUV",
    models: "Ertiga, Innova Crysta",
    seats: "6 to 7 passengers",
    rate: "from Rs 15/km",
    img: "/images/car/ertiga.jpg",
    icon: Car,
  },
  {
    name: "Tempo Traveller",
    models: "12 to 26 seater",
    seats: "up to 26 passengers",
    rate: "from Rs 20/km",
    img: "/images/tempo/12_seater.jpg",
    icon: Users,
  },
  {
    name: "Bus",
    models: "22 to 56 seater",
    seats: "up to 56 passengers",
    rate: "quote on request",
    img: "/images/bus/35_SEATER_BUS.jpg",
    icon: Bus,
  },
];

const SERVICE_LINKS = [
  { href: "/one-way-cab", label: "One Way Cab", icon: Route },
  { href: "/round-trip", label: "Round Trip", icon: RotateCcw },
  { href: "/tempo-traveller", label: "Tempo Traveller", icon: Users },
  { href: "/bus-routes", label: "Bus Hire", icon: Bus },
  { href: "/wedding", label: "Wedding Cars", icon: Heart },
  { href: "/airport-service", label: "Airport Transfer", icon: Plane },
];

const SERVICE_CITIES = [
  { name: "Delhi", href: "/delhi" },
  { name: "Agra", href: "/agra" },
  { name: "Jaipur", href: "/jaipur" },
  { name: "Chandigarh", href: "/chandigarh" },
  { name: "Shimla", href: "/shimla" },
  { name: "Manali", href: "/manali" },
  { name: "Amritsar", href: "/amritsar" },
  { name: "Dehradun", href: "/dehradun" },
  { name: "Rishikesh", href: "/rishikesh" },
  { name: "Haridwar", href: "/haridwar" },
  { name: "Jodhpur", href: "/jodhpur" },
  { name: "Udaipur", href: "/udaipur" },
  { name: "Ayodhya", href: "/ayodhya" },
  { name: "Ahmedabad", href: "/ahmedabad" },
];

const HOURS = [
  { channel: "Phone booking", time: "24 hours, all 7 days" },
  { channel: "WhatsApp booking", time: "24 hours, all 7 days" },
  { channel: "Email replies", time: "Within 4 hours" },
  { channel: "Office visits", time: "9:00 AM to 6:00 PM" },
];

const FAQS = [
  {
    q: "How can I book a cab with Triveni Cabs?",
    a: "Call +91 76685 70551, send a WhatsApp message, fill the enquiry form on this page, or email cabstriveni@gmail.com. Phone and WhatsApp are answered 24 hours a day, every day.",
  },
  {
    q: "What are your customer support hours?",
    a: "Booking support on phone and WhatsApp runs 24x7. Our Agra office is open for walk-in visits between 9:00 AM and 6:00 PM.",
  },
  {
    q: "Which cities does Triveni Cabs operate in?",
    a: "We run across 50+ cities in North and Central India, including Delhi, Agra, Jaipur, Chandigarh, Shimla, Manali, Amritsar, Dehradun, Rishikesh, Haridwar, Jodhpur, Udaipur, Ayodhya and Ahmedabad, plus outstation trips from all of them.",
  },
  {
    q: "How quickly can I get a cab after booking?",
    a: "For an immediate pickup we usually place a car within 30 to 60 minutes, depending on your location. Book 4 to 6 hours ahead for a scheduled local trip, and 24 hours ahead for outstation journeys.",
  },
  {
    q: "What payment methods do you accept?",
    a: "Cash, UPI (Google Pay, PhonePe, Paytm), bank transfer and online payment. Corporate clients can request monthly billing with a GST invoice.",
  },
];

function SectionHeading({ eyebrow, title, lead }) {
  return (
    <div className="max-w-2xl">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FACF2D] sm:text-xs">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
        {title}
      </h2>
      {lead && (
        <p className="mt-3 text-sm leading-relaxed text-white/60 sm:text-base">{lead}</p>
      )}
    </div>
  );
}

export default function ContactClient() {
  return (
    <div className="bg-slate-950">
      <SetStickyCta label="Talk to us 24x7" whatsappText={WA_TEXT} />

      {/* ---------------------------------------------------------------- HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about/about_banner.webp"
            alt="Triveni Cabs vehicles on a North India highway"
            fill
            priority
            sizes="100vw"
            quality={70}
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/80 to-slate-950" />
          {/* Headlight wash */}
          <div className="absolute -left-32 top-0 h-72 w-72 rounded-full bg-[#FACF2D]/15 blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-[#FACF2D]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-4 pb-14 pt-6 sm:px-6 sm:pb-20 sm:pt-10 lg:pb-24">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs text-white/45 sm:mb-8">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link
                  href="/"
                  className={`rounded transition-colors hover:text-[#FACF2D] ${FOCUS}`}
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="h-3 w-3" />
              </li>
              <li className="text-white/75" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>

          <div className="grid items-start gap-10 lg:grid-cols-[1fr_minmax(0,25rem)] lg:gap-14">
            {/* Left column */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#FACF2D]/30 bg-[#FACF2D]/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] text-[#FACF2D] sm:text-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#FACF2D] opacity-70 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#FACF2D]" />
                </span>
                Booking desk open 24x7
              </span>

              <h1 className="speakable-headline mt-5 text-xl font-extrabold leading-tight tracking-tight text-white sm:text-2xl">
                Talk to a real person, right now
              </h1>

              {/* THE number — the page's hero. One glance, one tap. */}
              <a
                href={PHONE_TEL}
                onClick={() => trackPhoneCall("contact_hero_number", "+917668570551")}
                className={`group mt-3 block w-fit rounded-2xl ${FOCUS}`}
                aria-label={`Call Triveni Cabs at ${PHONE_DISPLAY}`}
              >
                <span className="block whitespace-nowrap text-[2.35rem] font-black leading-none tracking-tight text-[#FACF2D] drop-shadow-[0_0_28px_rgba(250,207,45,0.45)] transition-transform duration-200 group-hover:scale-[1.02] sm:text-6xl lg:text-7xl">
                  {PHONE_DISPLAY}
                </span>
                <span className="mt-2 block h-[6px] w-full max-w-full rounded-full bg-[repeating-linear-gradient(90deg,#FACF2D_0_22px,transparent_22px_40px)] opacity-70" aria-hidden="true" />
              </a>

              <p className="speakable-lead mt-4 max-w-xl text-base leading-relaxed text-white/70 sm:mt-5 sm:text-lg">
                One call, one WhatsApp message, one clear fare. The Agra booking desk
                answers round the clock and confirms most trips within minutes, across
                50+ cities in North India.
              </p>

              {/* Primary CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={PHONE_TEL}
                  onClick={() => trackPhoneCall("contact_hero", "+917668570551")}
                  className={`flex min-h-[60px] w-full items-center justify-center gap-3 rounded-2xl bg-[#FACF2D] px-6 py-4 font-bold text-black shadow-[0_10px_30px_-8px_rgba(250,207,45,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ffdb4d] hover:shadow-[0_16px_40px_-8px_rgba(250,207,45,0.7)] active:translate-y-0 active:scale-[0.99] sm:w-auto ${FOCUS}`}
                >
                  <Phone className="h-5 w-5 shrink-0" />
                  <span className="flex flex-col leading-tight">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/55">
                      Call now
                    </span>
                    <span className="whitespace-nowrap text-lg sm:text-xl">
                      {PHONE_DISPLAY}
                    </span>
                  </span>
                </a>

                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onPointerDown={waTrack("contact_hero")}
                  className={`flex min-h-[60px] w-full items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 font-bold text-black shadow-[0_10px_30px_-8px_rgba(37,211,102,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#3ae07a] active:translate-y-0 active:scale-[0.99] sm:w-auto ${FOCUS}`}
                >
                  <WhatsAppIcon className="h-5 w-5 shrink-0" />
                  <span className="flex flex-col leading-tight">
                    <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-black/55">
                      Chat on
                    </span>
                    <span className="text-lg sm:text-xl">WhatsApp</span>
                  </span>
                </a>
              </div>

              {/* Alternative WhatsApp desk — published on this page only */}
              <a
                href={WA_ALT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onPointerDown={waTrack("contact_hero_alt_desk")}
                className={`mt-3 inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 rounded-2xl border-2 border-[#25D366]/60 bg-[#25D366]/10 px-5 py-3 text-sm font-bold text-[#4ceb8b] transition-all duration-200 hover:border-[#25D366] hover:bg-[#25D366]/20 sm:w-auto ${FOCUS}`}
              >
                <WhatsAppIcon className="h-4 w-4 shrink-0" />
                <span>
                  Line busy? Second WhatsApp desk:{" "}
                  <span className="whitespace-nowrap">{WA_ALT_DISPLAY}</span>
                </span>
              </a>

              <p className="mt-4 text-xs text-white/40 sm:text-sm">
                Prefer email? Write to{" "}
                <a
                  href={`mailto:${EMAIL}`}
                  className={`break-all font-medium text-white/70 underline underline-offset-4 transition-colors hover:text-[#FACF2D] ${FOCUS}`}
                >
                  {EMAIL}
                </a>
              </p>

              <div className="mt-9 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {TRUST.map(({ icon: Icon, label, sub }) => (
                  <div key={label} className={`flex items-start gap-3 px-4 py-3.5 ${GLASS}`}>
                    <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#FACF2D]" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold leading-tight text-white">
                        {label}
                      </p>
                      <p className="mt-0.5 text-xs leading-tight text-white/45">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column: enquiry form (QuickEnquiryForm is dark-only) */}
            <div className="w-full lg:sticky lg:top-24">
              <QuickEnquiryForm fromCity="" toCity="" pageType="contact" />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ CHANNELS */}
      <section className="border-t border-white/5 py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Reach us"
            title="Three ways to get a fare"
            lead="Pick whichever is quickest for you. The same desk handles all three, so you never have to repeat your trip details."
          />

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {CHANNELS.map((c) => {
              const Icon = c.icon;
              const isEmail = c.key === "email";
              const isWhatsApp = c.key === "whatsapp";
              const href = isEmail ? `mailto:${EMAIL}` : isWhatsApp ? WA_LINK : PHONE_TEL;
              const linkProps = isWhatsApp
                ? {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onPointerDown: waTrack("contact_cards"),
                  }
                : c.key === "call"
                  ? { onClick: () => trackPhoneCall("contact_cards", "+917668570551") }
                  : {};

              return (
                <a
                  key={c.key}
                  href={href}
                  {...linkProps}
                  className={`group relative flex flex-col overflow-hidden p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#FACF2D]/40 hover:bg-white/[0.08] sm:p-6 ${GLASS} ${FOCUS} ${
                    isEmail ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 top-0 h-[3px] opacity-40 transition-opacity duration-200 group-hover:opacity-100 ${LANE}`}
                  />
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FACF2D]/15 transition-colors duration-200 group-hover:bg-[#FACF2D]/25">
                    <Icon className="h-5 w-5 text-[#FACF2D]" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-white sm:text-xl">
                    {c.title}
                  </h3>
                  <p className="mt-1 break-words text-base font-semibold text-[#FACF2D]">
                    {c.value}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-white/55">
                    {c.body}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-white transition-all duration-200 group-hover:gap-3 group-hover:text-[#FACF2D]">
                    {c.cta}
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- OFFICE/HOURS */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Head office"
                title="Find us in Agra"
                lead="We are a five-minute drive from the Tajganj side of the Taj Mahal, so a walk-in booking is easy if you are already sightseeing."
              />

              <div className={`mt-6 space-y-5 p-5 sm:p-6 ${GLASS}`}>
                <div className="flex gap-3.5">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#FACF2D]" />
                  <address className="not-italic">
                    <p className="text-sm font-bold text-white">Triveni Cabs</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/55">
                      366, Dandupura, near Tajganj,
                      <br />
                      Agra, Uttar Pradesh 282006, India
                    </p>
                  </address>
                </div>

                <div className="flex gap-3.5">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#FACF2D]" />
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-white">Phone</p>
                    <a
                      href={PHONE_TEL}
                      onClick={() => trackPhoneCall("contact_office", "+917668570551")}
                      className={`mt-1 inline-block text-sm text-white/55 underline underline-offset-4 transition-colors hover:text-[#FACF2D] ${FOCUS}`}
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <WhatsAppIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#25D366]" />
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-white">WhatsApp</p>
                    <p className="mt-1 text-sm leading-relaxed text-white/55">
                      <a
                        href={WA_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        onPointerDown={waTrack("contact_office")}
                        className={`underline underline-offset-4 transition-colors hover:text-[#FACF2D] ${FOCUS}`}
                      >
                        {PHONE_DISPLAY}
                      </a>{" "}
                      <span className="text-white/35">·</span>{" "}
                      <a
                        href={WA_ALT_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        onPointerDown={waTrack("contact_office_alt")}
                        className={`underline underline-offset-4 transition-colors hover:text-[#FACF2D] ${FOCUS}`}
                      >
                        {WA_ALT_DISPLAY}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-[#FACF2D]" />
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-white">Email</p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className={`mt-1 inline-block break-all text-sm text-white/55 underline underline-offset-4 transition-colors hover:text-[#FACF2D] ${FOCUS}`}
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>

                <a
                  href={MAPS_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-bold text-white transition-all duration-200 hover:border-[#FACF2D]/50 hover:bg-[#FACF2D]/10 hover:text-[#FACF2D] ${FOCUS}`}
                >
                  <Navigation className="h-4 w-4" />
                  Open in Google Maps
                </a>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Opening hours"
                title="Bookings never close"
                lead="Only the physical office keeps daytime hours. Phone and WhatsApp run through the night."
              />

              <div className={`mt-6 overflow-x-auto ${GLASS}`}>
                <table className="w-full min-w-[18rem] text-left text-sm">
                  <caption className="sr-only">
                    Triveni Cabs contact channel availability
                  </caption>
                  <thead className="border-b border-white/10 text-[11px] uppercase tracking-[0.15em] text-white/40">
                    <tr>
                      <th scope="col" className="px-4 py-3.5 font-bold sm:px-5">
                        Channel
                      </th>
                      <th scope="col" className="px-4 py-3.5 font-bold sm:px-5">
                        Availability
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {HOURS.map((h) => (
                      <tr key={h.channel}>
                        <td className="px-4 py-3.5 font-semibold text-white sm:px-5">
                          {h.channel}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3.5 text-white/55 sm:px-5">
                          {h.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 flex items-start gap-3 rounded-2xl border border-[#FACF2D]/25 bg-[#FACF2D]/[0.07] px-4 py-4 sm:px-5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#FACF2D]" />
                <p className="text-sm leading-relaxed text-white/70">
                  Travelling on a festival or long weekend? Call at least a day ahead,
                  because tempo travellers and buses fill up first.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------------- FLEET */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="The fleet"
            title="Tell us the trip, we have the vehicle"
            lead="Every quote includes the driver allowance and is confirmed in writing before you travel. Nothing extra is added at drop-off."
          />

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {FLEET.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.name}
                  className={`group overflow-hidden transition-all duration-200 hover:-translate-y-1 hover:border-[#FACF2D]/40 ${GLASS}`}
                >
                  <div className="relative h-40 w-full overflow-hidden bg-white/5 sm:h-44">
                    <Image
                      src={v.img}
                      alt={`${v.name} for hire from Triveni Cabs`}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      quality={65}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/80 to-transparent" />
                  </div>
                  <div className="p-4 sm:p-5">
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4 shrink-0 text-[#FACF2D]" />
                      <h3 className="text-base font-bold text-white sm:text-lg">
                        {v.name}
                      </h3>
                    </div>
                    <p className="mt-1 text-xs text-white/40">{v.models}</p>
                    <p className="mt-4 text-base font-bold text-[#FACF2D]">{v.rate}</p>
                    <p className="mt-0.5 text-xs text-white/40">{v.seats}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ SERVICE LINKS */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <SectionHeading
            eyebrow="Shortcuts"
            title="Know what you need already?"
            lead="Jump straight to the service page for live fares and route-wise pricing."
          />

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
            {SERVICE_LINKS.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.href}
                  href={s.href}
                  className={`flex min-h-[104px] flex-col items-center justify-center gap-2.5 px-3 py-4 text-center transition-all duration-200 hover:-translate-y-1 hover:border-[#FACF2D]/40 hover:bg-[#FACF2D]/[0.08] ${GLASS} ${FOCUS}`}
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FACF2D]/15">
                    <Icon className="h-5 w-5 text-[#FACF2D]" />
                  </span>
                  <span className="text-xs font-semibold leading-tight text-white/85 sm:text-sm">
                    {s.label}
                  </span>
                </Link>
              );
            })}
          </div>

          <h3 className="mt-12 text-[11px] font-bold uppercase tracking-[0.2em] text-white/35">
            Or start from your city
          </h3>
          <div className="mt-4 flex flex-wrap gap-2 sm:gap-2.5">
            {SERVICE_CITIES.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className={`rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/70 transition-all duration-200 hover:border-[#FACF2D]/50 hover:bg-[#FACF2D]/10 hover:text-[#FACF2D] ${FOCUS}`}
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------------- FAQ */}
      <section className="py-14 sm:py-20">
        <div className="mx-auto w-full max-w-3xl px-4 sm:px-6">
          <SectionHeading eyebrow="Before you book" title="Questions we get most" />

          <div className="mt-8 space-y-3">
            {FAQS.map((f, i) => (
              <details
                key={f.q}
                open={i === 0}
                className={`group px-4 py-4 transition-colors duration-200 hover:border-white/20 sm:px-5 ${GLASS}`}
              >
                <summary
                  className={`flex cursor-pointer list-none items-center justify-between gap-4 rounded text-sm font-bold text-white sm:text-base ${FOCUS}`}
                >
                  {f.q}
                  <ChevronRight className="h-4 w-4 shrink-0 text-[#FACF2D] transition-transform duration-200 group-open:rotate-90" />
                </summary>
                <p
                  className={`mt-3 text-sm leading-relaxed text-white/60${
                    i === 0 ? " speakable-faq-first" : ""
                  }`}
                >
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- END BAND */}
      <section className="relative overflow-hidden border-t border-white/5 py-14 sm:py-20">
        <div className="absolute left-1/2 top-0 h-64 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-[#FACF2D]/10 blur-3xl" />

        <div className="relative mx-auto w-full max-w-3xl px-4 text-center sm:px-6">
          <span
            aria-hidden="true"
            className={`mx-auto block h-[3px] w-28 opacity-70 ${LANE}`}
          />
          <h2 className="mt-7 text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl">
            Ready when you are
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/60 sm:text-base">
            Give us the pickup point, the date and the number of passengers. You will
            have a fixed fare back in minutes.
          </p>

          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row">
            <a
              href={PHONE_TEL}
              onClick={() => trackPhoneCall("contact_footer_band", "+917668570551")}
              className={`flex min-h-[56px] items-center justify-center gap-2.5 rounded-2xl bg-[#FACF2D] px-6 py-4 text-base font-bold text-black shadow-[0_10px_30px_-8px_rgba(250,207,45,0.6)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#ffdb4d] active:translate-y-0 active:scale-[0.99] sm:px-7 sm:text-lg ${FOCUS}`}
            >
              <Phone className="h-5 w-5 shrink-0" />
              <span>Call {PHONE_DISPLAY}</span>
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onPointerDown={waTrack("contact_footer_band")}
              className={`flex min-h-[56px] items-center justify-center gap-2.5 rounded-2xl bg-[#25D366] px-6 py-4 text-base font-bold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#3ae07a] active:translate-y-0 active:scale-[0.99] sm:px-7 sm:text-lg ${FOCUS}`}
            >
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              WhatsApp us
            </a>
          </div>

          <p className="mt-7 text-xs text-white/35 sm:text-sm">
            4.9 star rated &middot; Serving travellers since 2015 &middot; 50+ cities
            &middot; No hidden charges
          </p>
        </div>
      </section>
    </div>
  );
}
