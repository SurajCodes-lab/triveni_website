import NearMePage from '@/components/seo/NearMePage';
import { BASE_URL, COMPANY_INFO } from '@/lib/seo/constants';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Innova on Rent Near Me — Crysta & Hycross with Driver'),
  description: 'Rent a Toyota Innova, Innova Crysta or Hycross near you with a verified driver. Spacious 6+1 SUV for family and airport trips. Upfront per-km fare, AC included. Call 7668570551.',
  keywords: ['innova on rent near me', 'innova crysta rent near me', 'innova car rental near me', 'innova hycross on rent', 'toyota innova hire', 'innova rent per km', 'suv cab near me'],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: '/innova-on-rent-near-me' },
  openGraph: {
    title: 'Innova on Rent Near Me — Crysta & Hycross with Driver',
    description: 'Spacious 6+1 Toyota Innova with verified driver, upfront fare. Call 7668570551.',
    url: `${BASE_URL}/innova-on-rent-near-me`,
    siteName: COMPANY_INFO.name,
    type: 'website',
    images: [{ url: '/images/HERO_SECTION_MAIN_PAGE.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Innova on Rent Near Me', description: 'Crysta & Hycross with driver. Call 7668570551.' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

export default function Page() {
  return (
    <NearMePage
      slug="innova-on-rent-near-me"
      h1="Innova on Rent Near You — Crysta & Hycross with Verified Driver"
      intro="Need a spacious, comfortable SUV for a family trip, airport transfer or outstation tour? Triveni Cabs rents Toyota Innova, Innova Crysta and the new Hycross — 6+1 seating, premium AC, ample boot space and a professional driver. One upfront per-km fare covers fuel, driver and AC for your entire journey."
      fareChips={[
        { label: 'Innova Crysta', value: '₹18/km' },
        { label: 'Innova Hycross', value: '₹20/km' },
        { label: 'Min 300 km/day', value: 'outstation' },
      ]}
      serviceType="TaxiService"
      faqs={[
        { question: 'What Innova models do you have?', answer: 'Toyota Innova, Innova Crysta and the new Innova Hycross (hybrid). All are 6+1 seating with captain seats and AC. See [Innova Crysta rent per km](/innova-crysta-rent-per-km) for fare details.' },
        { question: 'Is the driver included in the rent?', answer: 'Yes — all our Innova rentals are chauffeur-driven. We are not a self-drive provider. A verified driver, fuel and AC are included in the per-km fare.' },
        { question: 'How much luggage can an Innova carry?', answer: 'The Crysta comfortably fits 4–5 large bags plus cabin luggage for 6 passengers. For very heavy luggage we recommend the Hycross or a roof carrier on request.' },
        { question: 'Can I book an Innova for an airport transfer?', answer: 'Yes. Innova is ideal for airport pickups/drops with luggage. We track your flight for delays and the driver waits inside the terminal with a placard.' },
        { question: 'What is the minimum charge for an outstation Innova?', answer: 'Outstation trips are billed per km with a minimum of 300 km/day. Local rentals are available on hourly packages.' },
      ]}
      relatedLinks={[
        { href: '/innova-crysta-rent-per-km', anchor: 'Innova Crysta rent per km' },
        { href: '/ertiga-cab-booking', anchor: 'Ertiga cab booking' },
        { href: '/outstation-cabs-near-me', anchor: 'Outstation cabs near me' },
        { href: '/cab-service-near-me', anchor: 'Cab service near me' },
        { href: '/delhi', anchor: 'Innova on rent in Delhi' },
      ]}
    />
  );
}