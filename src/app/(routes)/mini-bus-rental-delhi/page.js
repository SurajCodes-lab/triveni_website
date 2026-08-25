import VehiclePricePage from '@/components/seo/VehiclePricePage';
import { BASE_URL, COMPANY_INFO } from '@/lib/seo/constants';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Mini Bus Rental Delhi — 30 to 45 Seater Mini Coach Hire'),
  description: 'Mini bus rental in Delhi from ₹35/km — 32, 40 and 45 seater mini coaches, AC, chauffeur-driven. Fuel & driver included. Group tours, corporate, weddings, school trips. Call 7668570551.',
  keywords: ['mini bus rental delhi', 'mini bus on rent', '32 seater mini bus hire delhi', '40 seater mini coach rental', 'mini bus booking delhi', 'group travel bus hire delhi', 'mini bus rent per km', 'mini coach hire delhi with driver'],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: '/mini-bus-rental-delhi' },
  openGraph: {
    title: 'Mini Bus Rental Delhi — 30–45 Seater Mini Coach from ₹35/km',
    description: 'Chauffeur-driven AC mini buses in Delhi from ₹35/km. 32/40/45 seater. Call 7668570551.',
    url: `${BASE_URL}/mini-bus-rental-delhi`,
    siteName: COMPANY_INFO.name,
    type: 'website',
    images: [{ url: '/images/HERO_SECTION_MAIN_PAGE.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Mini Bus Rental Delhi', description: '30–45 seater AC mini coach from ₹35/km. Call 7668570551.' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

export default function Page() {
  return (
    <VehiclePricePage
      slug="mini-bus-rental-delhi"
      vehicleName="Mini Bus"
      h1="Mini Bus Rental in Delhi — AC Mini Coaches, Chauffeur-Driven"
      intro="When a tempo traveller is too small and a full coach is too big, a mini bus is the perfect middle ground. Triveni Cabs offers 32, 40 and 45-seater AC mini coaches for group travel out of Delhi NCR — chauffeur-driven, well-maintained and priced at a transparent per-km rate that includes fuel, the driver and AC. Ideal for group tours, corporate outings, weddings and school trips."
      category="Mini Bus"
      seating="32–45"
      fareRows={[
        { vehicle: '32 seater AC mini bus', perKm: '₹35/km', minKmDay: '300 km/day', note: 'Group tours · AC' },
        { vehicle: '40 seater AC mini coach', perKm: '₹40/km', minKmDay: '300 km/day', note: 'Corporate · AC' },
        { vehicle: '45 seater AC mini bus', perKm: '₹45/km', minKmDay: '300 km/day', note: 'Large groups · AC' },
        { vehicle: 'Mini bus (local 8hr/80km)', perKm: '₹14,000/day', minKmDay: '8 hr / 80 km', note: 'Within Delhi NCR' },
      ]}
      features={[
        'Pushback seats with ample legroom for long trips',
        'Powerful dual AC and music system',
        'Large luggage hold under the cabin',
        'Experienced, licensed heavy-vehicle drivers',
        'GPS live tracking shared with the group coordinator',
        'Toll, parking and state tax billed at actual — no markup',
      ]}
      useCases={[
        'Group pilgrimage tours (Char Dham, Vaishno Devi, Mathura)',
        'Corporate off-sites and team outings from Delhi',
        'Wedding guest and baraat transport',
        'School and college excursions',
        'Family get-togethers and outstation group trips',
      ]}
      faqs={[
        { question: 'What is the rent for a mini bus in Delhi?', answer: 'A 32-seater AC mini bus is ₹35/km outstation (minimum 300 km/day), a 40-seater is ₹40/km and a 45-seater is ₹45/km. For local Delhi NCR use, an 8-hour/80-km package starts at ₹14,000/day. Fuel, driver and AC are included.' },
        { question: 'How many seats does a mini bus have?', answer: 'Our mini buses come in 32, 40 and 45-seater configurations, all air-conditioned. For groups of 12–26, a [tempo traveller](/tempo-traveller) is more economical; for 30+ people a mini bus is the right fit.' },
        { question: 'Is the driver included in the mini bus per-km price?', answer: 'Yes. Every mini bus rental is chauffeur-driven by a licensed heavy-vehicle driver. Fuel and AC are included in the per-km fare; toll, parking and inter-state tax are charged at actual.' },
        { question: 'Can I hire a mini bus for a Char Dham or Vaishno Devi trip?', answer: 'Yes. Mini buses are popular for group pilgrimage tours departing Delhi/Haridwar. See our [Char Dham yatra by tempo traveller](/char-dham-yatra-by-tempo-traveller) page or call us for a group pilgrimage quote.' },
        { question: 'What is the minimum billing for an outstation mini bus?', answer: 'Outstation mini bus trips are billed per km with a minimum of 300 km per day. Local Delhi NCR packages start at 8 hours/80 km per day.' },
      ]}
      relatedLinks={[
        { href: '/tempo-traveller', anchor: 'Tempo Traveller on rent' },
        { href: '/26-seater-tempo-traveller', anchor: '26 seater tempo traveller' },
        { href: '/school-trip-bus-rental', anchor: 'School trip bus rental' },
        { href: '/college-excursion-bus-hire', anchor: 'College excursion bus hire' },
        { href: '/char-dham-yatra-by-tempo-traveller', anchor: 'Char Dham yatra by tempo traveller' },
      ]}
    />
  );
}