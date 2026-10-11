import VehiclePricePage from '@/components/seo/VehiclePricePage';
import { BASE_URL, COMPANY_INFO } from '@/lib/seo/constants';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Force Urbania Rent per KM — Group Van Fare with Driver'),
  description: 'Force Urbania rent per km from ₹25/km — modern 12–17 seater van with AC, fuel and driver included. Perfect for group tours and corporate trips. Get an exact fare. Call 7668570551.',
  keywords: ['force urbania rent per km', 'force urbania price per km', 'urbania rent', 'force urbania on rent', 'urbania van hire', 'force urbania fare', 'force urbania 17 seater rent'],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: '/force-urbania-rent-per-km' },
  openGraph: {
    title: 'Force Urbania Rent per KM — ₹25/km Group Van',
    description: '12–17 seater AC van, from ₹25/km all-inclusive. Call 7668570551.',
    url: `${BASE_URL}/force-urbania-rent-per-km`,
    siteName: COMPANY_INFO.name,
    type: 'website',
    images: [{ url: '/images/HERO_SECTION_MAIN_PAGE.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Force Urbania Rent per KM', description: 'From ₹25/km group van with driver. Call 7668570551.' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

export default function Page() {
  return (
    <VehiclePricePage
      slug="force-urbania-rent-per-km"
      vehicleName="Force Urbania"
      h1="Force Urbania Rent per KM — Modern Group Van, All-Inclusive"
      intro="The Force Urbania is the new-generation van replacing the old tempo traveller — quieter, more comfortable, better suspension and modern AC. Triveni Cabs™ rents it chauffeur-driven for groups of 12 to 17, at an upfront per-km rate that includes fuel, the driver and AC. The smart pick for corporate outings, family tours and pilgrimage groups who want comfort without the old-tempo rattles."
      category="Van"
      seating="12–17"
      fareRows={[
        { vehicle: 'Urbania 12 seater (outstation)', perKm: '₹27/km', minKmDay: '300 km/day', note: 'AC · pushback seats' },
        { vehicle: 'Urbania 17 seater (outstation)', perKm: '₹30/km', minKmDay: '300 km/day', note: 'Larger group' },
        { vehicle: 'Urbania (local 8hr/80km)', perKm: '₹6,500/day', minKmDay: '8 hr / 80 km', note: 'Within city package' },
        { vehicle: 'Urbania luxury (captain seats)', perKm: '₹30/km', minKmDay: '300 km/day', note: 'Premium config' },
      ]}
      features={[
        'Modern monocoque body — smoother and quieter than old tempo travellers',
        'Powerful front & rear AC with individual vents',
        'Pushback/reclining seats across rows',
        'Ample luggage bay and optional roof carrier',
        'Background-verified driver, GPS tracking',
        'Upfront per-km fare — fuel + driver + AC included',
      ]}
      useCases={[
        'Corporate team outings and offsites',
        'Large-family outstation tours (12–17 people)',
        'Pilgrimage groups (Char Dham, Vaishno Devi, Mathura)',
        'Wedding guest transport and baraat',
        'School/college excursions',
      ]}
      faqs={[
        { question: 'What is the per km rent for a Force Urbania?', answer: 'The Force Urbania starts at ₹25/km for the 10-seater, ₹27/km for the 12-seater and ₹30/km for the 17-seater, all-inclusive of fuel, driver and AC. A luxury captain-seat config is ₹30/km. See the full breakdown at [Force Urbania rent price](/force-urbania-rent-price).' },
        { question: 'How is the Urbania different from a tempo traveller?', answer: 'The Urbania is the modern replacement for the tempo traveller — a monocoque van with better ride quality, lower noise and improved AC. For a comparison see [Maharaja tempo traveller vs Urbania](/maharaja-tempo-traveller-vs-urbania).' },
        { question: 'How many seats does the Force Urbania have?', answer: 'We offer 12-seater and 17-seater Urbania configurations, plus a luxury captain-seat version. Choose based on your group size and luggage.' },
        { question: 'What is the minimum billing?', answer: 'Outstation trips bill per km with a minimum of 300 km/day. Local rentals are available on 8hr/80km or 4hr/40km packages.' },
        { question: 'Is AC and driver included in the per-km rate?', answer: 'Yes — fuel, the driver allowance and AC are all included in the per-km fare. Only toll and parking are charged at actual.' },
      ]}
      relatedLinks={[
        { href: '/force-urbania-rent-price', anchor: 'Force Urbania rent price' },
        { href: '/maharaja-tempo-traveller-price', anchor: 'Maharaja tempo traveller price' },
        { href: '/maharaja-tempo-traveller-vs-urbania', anchor: 'Maharaja tempo traveller vs Urbania' },
        { href: '/tempo-traveller-hire-near-me', anchor: 'Tempo traveller hire near me' },
        { href: '/12-seater-tempo-traveller', anchor: '12 seater tempo traveller' },
      ]}
    />
  );
}