import VehiclePricePage from '@/components/seo/VehiclePricePage';
import { BASE_URL, COMPANY_INFO } from '@/lib/seo/constants';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Maharaja Tempo Traveller Price — Luxury Seater Fare 2026'),
  description: 'Maharaja tempo traveller price from ₹26/km — 9, 12 and 17-seater luxury configs with captain seats, AC and driver included. Full fare breakdown. Call 7668570551.',
  keywords: ['maharaja tempo traveller price', 'maharaja tempo traveller rent', 'maharaja tempo fare', 'maharaja tempo 12 seater price', 'maharaja tempo 17 seater price', 'luxury tempo traveller price', '1x1 tempo traveller rent'],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: '/maharaja-tempo-traveller-price' },
  openGraph: {
    title: 'Maharaja Tempo Traveller Price — Luxury Seater Fare',
    description: '9–17 seater luxury configs from ₹26/km. Full breakdown. Call 7668570551.',
    url: `${BASE_URL}/maharaja-tempo-traveller-price`,
    siteName: COMPANY_INFO.name,
    type: 'website',
    images: [{ url: '/images/HERO_SECTION_MAIN_PAGE.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Maharaja Tempo Traveller Price', description: 'Luxury seater from ₹26/km. Call 7668570551.' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

export default function Page() {
  return (
    <VehiclePricePage
      slug="maharaja-tempo-traveller-price"
      vehicleName="Maharaja Tempo Traveller"
      h1="Maharaja Tempo Traveller Price — Luxury Seater Fare Breakdown"
      intro="The Maharaja tempo traveller is the premium configuration of the classic tempo — wide captain seats (1x1 or 2x1), extra legroom, powerful AC and a smoother ride for long outstation journeys. Triveni Cabs offers it in 9, 12 and 17-seater layouts at an upfront per-km fare that already includes fuel, the driver and AC. The comfortable choice for long pilgrimage and family tours."
      category="Tempo Traveller"
      seating="9–17"
      fareRows={[
        { vehicle: 'Maharaja 9 seater (1x1)', perKm: '₹26/km', minKmDay: '300 km/day', note: 'Captain seats · AC' },
        { vehicle: 'Maharaja 12 seater (2x1)', perKm: '₹28/km', minKmDay: '300 km/day', note: 'Pushback · AC' },
        { vehicle: 'Maharaja 17 seater (2x2)', perKm: '₹32/km', minKmDay: '300 km/day', note: 'Large group luxury' },
        { vehicle: 'Maharaja (local 8hr/80km)', perKm: '₹7,500/day', minKmDay: '8 hr / 80 km', note: 'Within city package' },
      ]}
      features={[
        'Captain seats with armrests and deep recline (1x1 / 2x1 / 2x2)',
        'Powerful front + rear AC with individual controls',
        'Extra legroom vs standard tempo traveller',
        'Ample luggage space + optional roof carrier',
        'Background-verified driver, GPS live tracking',
        'Per-km fare includes fuel, driver and AC',
      ]}
      useCases={[
        'Long pilgrimage tours (Char Dham, Vaishno Devi, Amarnath)',
        'Extended family outstation holidays',
        'Corporate delegations needing comfort',
        'VIP/guest airport-to-outstation transfers',
        'Wedding baraat in comfort',
      ]}
      faqs={[
        { question: 'What is the price of a Maharaja tempo traveller?', answer: 'The Maharaja starts at ₹26/km for the 9-seater (1x1 captain seats), ₹28/km for the 12-seater and ₹32/km for the 17-seater — all including fuel, driver and AC. A local 8hr/80km day package is ₹7,500.' },
        { question: 'What makes a Maharaja tempo different from a normal one?', answer: 'The Maharaja has wide captain seats (often 1x1), more legroom and upgraded AC versus a standard tempo traveller\'s bench seating. It is built for comfort on long journeys.' },
        { question: 'Maharaja tempo traveller vs Force Urbania — which is better?', answer: 'The Maharaja has more luxurious seating; the Urbania is newer, quieter and rides better on bad roads. For a full comparison see [Maharaja tempo traveller vs Urbania](/maharaja-tempo-traveller-vs-urbania).' },
        { question: 'What is the minimum billing for a Maharaja?', answer: 'Outstation trips bill per km with a minimum of 300 km/day. Local rentals are available on 8hr/80km or 4hr/40km packages.' },
        { question: 'Does the price include toll and parking?', answer: 'No — fuel, driver and AC are included in the per-km fare, but toll, parking and interstate taxes are charged extra at actual and shown on your final itemised bill.' },
      ]}
      relatedLinks={[
        { href: '/maharaja-tempo-traveller-vs-urbania', anchor: 'Maharaja tempo traveller vs Urbania' },
        { href: '/force-urbania-rent-price', anchor: 'Force Urbania rent price' },
        { href: '/force-urbania-rent-per-km', anchor: 'Force Urbania rent per km' },
        { href: '/tempo-traveller-hire-near-me', anchor: 'Tempo traveller hire near me' },
        { href: '/pilgrimage-cabs', anchor: 'Pilgrimage cabs' },
      ]}
    />
  );
}