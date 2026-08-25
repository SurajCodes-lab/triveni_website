import VehiclePricePage from '@/components/seo/VehiclePricePage';
import { BASE_URL, COMPANY_INFO } from '@/lib/seo/constants';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Force Urbania Rent Price — Full Fare Breakdown 2026'),
  description: 'Force Urbania rent price per km, per day and per package: 12 & 17-seater AC vans from ₹25/km outstation or ₹6,500/day local. All-inclusive, chauffeur-driven. Call 7668570551.',
  keywords: ['force urbania rent price', 'force urbania cost', 'force urbania rent per day', 'urbania rental price', 'force urbania hire charges', 'force urbania 17 seater price', 'urbania van price'],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: '/force-urbania-rent-price' },
  openGraph: {
    title: 'Force Urbania Rent Price — Full Fare Breakdown 2026',
    description: 'Per km, per day & package prices. From ₹25/km. Call 7668570551.',
    url: `${BASE_URL}/force-urbania-rent-price`,
    siteName: COMPANY_INFO.name,
    type: 'website',
    images: [{ url: '/images/HERO_SECTION_MAIN_PAGE.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Force Urbania Rent Price 2026', description: 'Full fare breakdown. From ₹25/km. Call 7668570551.' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

export default function Page() {
  return (
    <VehiclePricePage
      slug="force-urbania-rent-price"
      vehicleName="Force Urbania"
      h1="Force Urbania Rent Price — Complete Fare Breakdown"
      intro="Want the full Force Urbania price picture before you book? Here is every way we charge for the Urbania — per km for outstation, per day for local, and per package — with no hidden line items. Fuel, the driver and AC are baked into every rate below; only toll and parking pass through at actual."
      category="Van"
      seating="12–17"
      fareRows={[
        { vehicle: 'Urbania 12 seater — outstation', perKm: '₹27/km', minKmDay: '300 km/day', note: 'Fuel + driver + AC incl.' },
        { vehicle: 'Urbania 17 seater — outstation', perKm: '₹30/km', minKmDay: '300 km/day', note: 'Fuel + driver + AC incl.' },
        { vehicle: 'Urbania luxury — captain seats', perKm: '₹30/km', minKmDay: '300 km/day', note: 'Premium config' },
        { vehicle: 'Urbania — local 8hr/80km', perKm: '₹6,500/day', minKmDay: '8 hr / 80 km', note: 'Extra km ₹27/km' },
        { vehicle: 'Urbania — local 4hr/40km', perKm: '₹4,000/day', minKmDay: '4 hr / 40 km', note: 'Half-day' },
        { vehicle: 'Driver night allowance', perKm: '₹300/night', minKmDay: 'if used 10PM–5AM', note: 'Only on long trips' },
      ]}
      features={[
        'All prices include fuel, driver allowance and AC',
        'No surge pricing — fixed rate confirmed before booking',
        'Modern Urbania vans (not old tempo travellers)',
        'Background-verified, experienced drivers',
        'Itemised final bill — every charge visible',
        'GST invoice available for corporate bookings',
      ]}
      useCases={[
        'Budgeting a corporate offsite or team outing',
        'Pilgrimage group cost planning (Char Dham, Vaishno Devi)',
        'Wedding guest shuttle pricing',
        'Comparing Urbania vs tempo traveller cost',
        'Multi-day outstation tour quoting',
      ]}
      faqs={[
        { question: 'What does the Force Urbania rent price include?', answer: 'Every rate includes fuel, the driver allowance and AC. Toll, parking, interstate taxes and any driver night allowance (₹300/night if the trip runs 10 PM–5 AM) are charged extra at actual.' },
        { question: 'How is the outstation price calculated?', answer: 'Outstation = per-km rate × total kilometres travelled (minimum 300 km/day) + actual toll + actual parking. For the 12-seater at ₹27/km, a 600 km round trip starts at ₹16,200 plus toll/parking.' },
        { question: 'Is there a per-day local price for the Urbania?', answer: 'Yes — a local 8-hour/80-km day package is ₹6,500, and a half-day 4-hour/40-km is ₹4,000. Extra kilometres beyond the package are billed at ₹27/km.' },
        { question: 'Is the Urbania cheaper than a tempo traveller?', answer: 'The Urbania is priced slightly higher than an equivalent tempo traveller because it is newer, quieter and more comfortable. For a side-by-side see [Maharaja tempo traveller vs Urbania](/maharaja-tempo-traveller-vs-urbania).' },
        { question: 'Can I get a GST invoice for the rent?', answer: 'Yes. GST invoices are available for all corporate and business bookings — just request it when you confirm your booking.' },
      ]}
      relatedLinks={[
        { href: '/force-urbania-rent-per-km', anchor: 'Force Urbania rent per km' },
        { href: '/maharaja-tempo-traveller-price', anchor: 'Maharaja tempo traveller price' },
        { href: '/maharaja-tempo-traveller-vs-urbania', anchor: 'Maharaja tempo traveller vs Urbania' },
        { href: '/tempo-traveller-hire-near-me', anchor: 'Tempo traveller hire near me' },
        { href: '/cab-service-near-me', anchor: 'Cab service near me' },
      ]}
    />
  );
}