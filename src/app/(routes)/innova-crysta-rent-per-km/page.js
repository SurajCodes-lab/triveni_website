import VehiclePricePage from '@/components/seo/VehiclePricePage';
import { BASE_URL, COMPANY_INFO } from '@/lib/seo/constants';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Innova Crysta Rent per KM — All-Inclusive Fare with Driver'),
  description: 'Innova Crysta rent per km starting ₹18/km — fuel, driver and AC included. Chauffeur-driven 6+1 SUV for family, outstation and airport trips. Get an exact fare. Call 7668570551.',
  keywords: ['innova crysta rent per km', 'innova crysta price per km', 'innova rent per km', 'innova crysta fare', 'innova crysta on rent', 'toyota innova crysta rent', 'innova crysta cab booking'],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: '/innova-crysta-rent-per-km' },
  openGraph: {
    title: 'Innova Crysta Rent per KM — ₹18/km All-Inclusive',
    description: 'Chauffeur-driven Innova Crysta, ₹18/km fuel+driver+AC included. Call 7668570551.',
    url: `${BASE_URL}/innova-crysta-rent-per-km`,
    siteName: COMPANY_INFO.name,
    type: 'website',
    images: [{ url: '/images/HERO_SECTION_MAIN_PAGE.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Innova Crysta Rent per KM', description: '₹18/km all-inclusive with driver. Call 7668570551.' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

export default function Page() {
  return (
    <VehiclePricePage
      slug="innova-crysta-rent-per-km"
      vehicleName="Innova Crysta"
      h1="Innova Crysta Rent per KM — Upfront, All-Inclusive Fare"
      intro="The Toyota Innova Crysta is India's most trusted family SUV — comfortable captain seats, powerful AC and a smooth ride. Triveni Cabs™ rents it chauffeur-driven at a transparent per-km rate that already includes fuel, the driver and AC, so the number you see is the number you pay. Perfect for outstation tours, airport transfers and long family road trips."
      category="SUV"
      seating="6 + 1"
      fareRows={[
        { vehicle: 'Innova Crysta (diesel)', perKm: '₹18/km', minKmDay: '300 km/day', note: 'Outstation · 6+1 · AC' },
        { vehicle: 'Innova Crysta (local 8hr/80km)', perKm: '₹4,500/day', minKmDay: '8 hr / 80 km', note: 'Within city package' },
        { vehicle: 'Innova Hycross (hybrid)', perKm: '₹20/km', minKmDay: '300 km/day', note: 'Newer model · premium' },
        { vehicle: 'Innova (older gen)', perKm: '₹16/km', minKmDay: '300 km/day', note: 'Budget SUV option' },
      ]}
      features={[
        'Captain seats with armrests and recline for all-day comfort',
        'Powerful dual-zone AC and charging ports at every row',
        'Generous boot space for 4–5 large bags',
        'Background-verified, uniformed professional driver',
        'GPS live tracking shared on every trip',
        'Toll & parking billed at actual — no markup',
      ]}
      useCases={[
        'Outstation family tours (Delhi–Jaipur, Delhi–Manali, Golden Triangle)',
        'Airport transfers with luggage',
        'Corporate and executive travel',
        'Pilgrimage trips needing comfort over long distances',
        'Small-group weddings and events',
      ]}
      faqs={[
        { question: 'What is the per km rent for an Innova Crysta?', answer: 'Our standard Innova Crysta outstation rate is ₹18/km, all-inclusive of fuel, driver allowance and AC. The newer Innova Hycross is ₹20/km. Toll and parking are extra at actual.' },
        { question: 'Is the driver included in the per-km price?', answer: 'Yes. Every Innova Crysta rental is chauffeur-driven — we are not a self-drive service. The driver, fuel and AC are all included in the per-km fare.' },
        { question: 'What is the minimum billing for an outstation Innova?', answer: 'Outstation trips are billed per km with a minimum of 300 km per day. For local use within a city, an 8-hour/80-km package is available from ₹4,500/day.' },
        { question: 'Can I book the Innova Crysta for an airport pickup?', answer: 'Yes. We track your flight for delays and the driver waits inside the terminal with a name placard. Airport transfers are available 24/7.' },
        { question: 'How is the final fare calculated?', answer: 'Final fare = per-km rate × total kilometres travelled + actual toll + actual parking. There are no driver bata, night or AC surcharges — they are all built into the per-km rate.' },
      ]}
      relatedLinks={[
        { href: '/innova-on-rent-near-me', anchor: 'Innova on rent near me' },
        { href: '/ertiga-cab-booking', anchor: 'Ertiga cab booking' },
        { href: '/outstation-cabs-near-me', anchor: 'Outstation cabs near me' },
        { href: '/cab-service-near-me', anchor: 'Cab service near me' },
        { href: '/delhi', anchor: 'Innova on rent in Delhi' },
      ]}
    />
  );
}