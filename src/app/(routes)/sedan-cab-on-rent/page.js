import VehiclePricePage from '@/components/seo/VehiclePricePage';
import { BASE_URL, COMPANY_INFO } from '@/lib/seo/constants';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Sedan Cab on Rent — Dzire, Etios per KM Fare with Driver'),
  description: 'Sedan cab on rent starting ₹11/km — Dzire, Etios, Amaze chauffeur-driven. Fuel, driver and AC included. Ideal for 4-pax outstation, airport and local trips. Get an exact fare. Call 7668570551.',
  keywords: ['sedan cab on rent', 'dzire on rent per km', 'etios cab booking', 'sedan car rental with driver', 'swift dzire rent per km', 'sedan taxi fare', '4 seater cab booking', 'sedan cab on rent near me'],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: '/sedan-cab-on-rent' },
  openGraph: {
    title: 'Sedan Cab on Rent — ₹11/km All-Inclusive with Driver',
    description: 'Chauffeur-driven Dzire/Etios sedan, ₹11/km fuel+driver+AC included. Call 7668570551.',
    url: `${BASE_URL}/sedan-cab-on-rent`,
    siteName: COMPANY_INFO.name,
    type: 'website',
    images: [{ url: '/images/HERO_SECTION_MAIN_PAGE.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Sedan Cab on Rent', description: '₹11/km all-inclusive with driver. Call 7668570551.' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

export default function Page() {
  return (
    <VehiclePricePage
      slug="sedan-cab-on-rent"
      vehicleName="Sedan Cab"
      h1="Sedan Cab on Rent — Upfront Per-KM Fare, Chauffeur-Driven"
      intro="A sedan is the smart pick for 3–4 travellers — fuel-efficient, easy to park, and comfortable on both city runs and outstation highways. Triveni Cabs rents chauffeur-driven sedans like the Maruti Dzire, Toyota Etios and Honda Amaze at a transparent per-km rate that already includes fuel, the driver and AC. No surge, no meter — the fare you see is the fare you pay."
      category="Sedan"
      seating="4 + 1"
      fareRows={[
        { vehicle: 'Maruti Dzire (sedan)', perKm: '₹11/km', minKmDay: '300 km/day', note: 'Outstation · 4+1 · AC' },
        { vehicle: 'Toyota Etios (sedan)', perKm: '₹12/km', minKmDay: '300 km/day', note: 'Roomier boot · AC' },
        { vehicle: 'Honda Amaze (sedan)', perKm: '₹11/km', minKmDay: '300 km/day', note: 'Comfortable · AC' },
        { vehicle: 'Sedan (local 4hr/40km)', perKm: '₹1,800/day', minKmDay: '4 hr / 40 km', note: 'Within-city package' },
        { vehicle: 'Honda City (premium sedan)', perKm: '₹15/km', minKmDay: '300 km/day', note: 'Premium · AC' },
      ]}
      features={[
        'Comfortable seating for 3–4 passengers with legroom',
        'Efficient AC and charging points up front',
        'Generous boot for 2–3 medium bags',
        'Background-verified, uniformed professional driver',
        'GPS live tracking shared on every trip',
        'Toll & parking billed at actual — no markup',
      ]}
      useCases={[
        'Outstation trips for small families (Delhi–Agra, Delhi–Jaipur)',
        'Airport transfers with light luggage',
        'Corporate and executive point-to-point travel',
        'Local 4hr/40km and 8hr/80km city packages',
        'Same-day return tours for 3–4 people',
      ]}
      faqs={[
        { question: 'What is the per km rent for a sedan cab?', answer: 'Our standard sedan (Dzire/Amaze) outstation rate is ₹11/km, all-inclusive of fuel, driver allowance and AC. The Toyota Etios is ₹12/km and a premium Honda City is ₹15/km. Toll and parking are extra at actual.' },
        { question: 'Is the driver included in the sedan per-km price?', answer: 'Yes. Every sedan rental is chauffeur-driven — Triveni does not offer self-drive. The driver, fuel and AC are all included in the per-km fare.' },
        { question: 'How many people and bags fit in a sedan?', answer: 'A sedan comfortably seats 3–4 passengers plus the driver, with boot space for 2–3 medium bags. For 5+ people or more luggage, consider an Ertiga or Innova Crysta.' },
        { question: 'What is the minimum billing for an outstation sedan?', answer: 'Outstation sedan trips are billed per km with a minimum of 300 km per day. For local use within a city, a 4-hour/40-km package starts at ₹1,800/day.' },
        { question: 'Can I book a sedan for an airport pickup?', answer: 'Yes. We track your flight for delays and the driver waits inside the terminal with a name placard. Airport sedan transfers are available 24/7.' },
      ]}
      relatedLinks={[
        { href: '/ertiga-cab-booking', anchor: 'Ertiga cab booking' },
        { href: '/innova-crysta-rent-per-km', anchor: 'Innova Crysta rent per km' },
        { href: '/cab-service-near-me', anchor: 'Cab service near me' },
        { href: '/outstation-cabs-near-me', anchor: 'Outstation cabs near me' },
        { href: '/4hr-40km-local-cab', anchor: '4hr/40km local cab package' },
      ]}
    />
  );
}