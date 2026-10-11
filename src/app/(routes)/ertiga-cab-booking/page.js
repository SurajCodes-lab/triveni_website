import VehiclePricePage from '@/components/seo/VehiclePricePage';
import { BASE_URL, COMPANY_INFO } from '@/lib/seo/constants';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Ertiga Cab Booking — ₹15/km SUV with Driver'),
  description: 'Book a Maruti Ertiga cab — 6+1 SUV at ₹15/km, fuel, driver and AC included. Ideal for small families and outstation trips. Upfront fare. Call 7668570551 to book.',
  keywords: ['ertiga cab booking', 'ertiga cab price', 'maruti ertiga on rent', 'ertiga rent per km', 'ertiga cab service', 'ertiga car rental', 'ertiga taxi booking'],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: '/ertiga-cab-booking' },
  openGraph: {
    title: 'Ertiga Cab Booking — ₹15/km SUV with Driver',
    description: '6+1 Maruti Ertiga, ₹15/km all-inclusive. Call 7668570551.',
    url: `${BASE_URL}/ertiga-cab-booking`,
    siteName: COMPANY_INFO.name,
    type: 'website',
    images: [{ url: '/images/HERO_SECTION_MAIN_PAGE.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Ertiga Cab Booking', description: '₹15/km SUV with driver. Call 7668570551.' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

export default function Page() {
  return (
    <VehiclePricePage
      slug="ertiga-cab-booking"
      vehicleName="Maruti Ertiga"
      h1="Ertiga Cab Booking — Spacious 6+1 SUV at ₹15/km"
      intro="The Maruti Ertiga is the sweet spot between a sedan and a full SUV — it seats 6 plus the driver, has three rows of AC and decent luggage space, yet stays affordable. Triveni Cabs™ books it chauffeur-driven at ₹15/km with fuel, driver and AC all included, making it our most popular choice for small families and budget outstation trips."
      category="SUV"
      seating="6 + 1"
      fareRows={[
        { vehicle: 'Ertiga (outstation)', perKm: '₹15/km', minKmDay: '300 km/day', note: '6+1 · AC · fuel included' },
        { vehicle: 'Ertiga (local 8hr/80km)', perKm: '₹3,800/day', minKmDay: '8 hr / 80 km', note: 'Within city package' },
        { vehicle: 'Ertiga (4hr/40km)', perKm: '₹2,200/day', minKmDay: '4 hr / 40 km', note: 'Half-day local' },
        { vehicle: 'Ertiga one-way drop', perKm: '₹15/km', minKmDay: '300 km/day', note: 'Pay only onward' },
      ]}
      features={[
        'Three-row 6+1 seating with rear AC vents',
        'Fuel-efficient — lower per-km than larger SUVs',
        'Folds-flat third row for extra luggage',
        'Background-verified professional driver',
        'Live GPS tracking shared with you',
        'Upfront fare — no surge, no meter',
      ]}
      useCases={[
        'Small-family outstation trips (4–6 people)',
        'Budget one-way drops — cheaper than Innova',
        'Local full-day or half-day rentals',
        'Airport transfers for a family of 4–5',
        'Pilgrimage and weekend getaways',
      ]}
      faqs={[
        { question: 'What is the per km fare for an Ertiga cab?', answer: 'The Ertiga outstation rate is ₹15/km, all-inclusive of fuel, driver and AC. Local packages start at ₹2,200 for 4hr/40km. Toll and parking are extra at actual.' },
        { question: 'How many people can an Ertiga seat?', answer: 'The Ertiga seats 6 passengers plus the driver (6+1), across three rows. For 6 adults with luggage on a long trip, consider the [Innova Crysta](/innova-crysta-rent-per-km) for more space.' },
        { question: 'Is the Ertiga cheaper than the Innova?', answer: 'Yes — at ₹15/km versus the Innova Crysta\'s ₹18/km, the Ertiga is our most affordable SUV. It is the best value when you need more seats than a sedan but want to keep the fare low.' },
        { question: 'Can I book an Ertiga for a one-way drop?', answer: 'Yes. One-way Ertiga drops are charged at ₹15/km for the onward distance only (min 300 km/day). See [one-way taxi near me](/one-way-taxi-near-me).' },
        { question: 'Is AC and driver included?', answer: 'Yes. Every Ertiga rental is chauffeur-driven and the per-km fare includes fuel, the driver allowance and AC. There are no hidden surcharges.' },
      ]}
      relatedLinks={[
        { href: '/innova-crysta-rent-per-km', anchor: 'Innova Crysta rent per km' },
        { href: '/one-way-taxi-near-me', anchor: 'One-way taxi near me' },
        { href: '/outstation-cabs-near-me', anchor: 'Outstation cabs near me' },
        { href: '/cab-service-near-me', anchor: 'Cab service near me' },
        { href: '/force-urbania-rent-per-km', anchor: 'Force Urbania rent per km' },
      ]}
    />
  );
}