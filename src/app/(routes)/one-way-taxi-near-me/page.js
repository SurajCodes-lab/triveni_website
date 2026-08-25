import NearMePage from '@/components/seo/NearMePage';
import { BASE_URL, COMPANY_INFO } from '@/lib/seo/constants';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('One-Way Taxi Near Me — Pay Only for Onward Journey'),
  description: 'Book a one-way taxi near you and pay only for the onward distance, not the return. Sedan, SUV and tempo traveller options across North India. Upfront drop fare. Call 7668570551.',
  keywords: ['one way taxi near me', 'one way cab near me', 'one way drop taxi', 'one way cab service', 'drop cab near me', 'one way outstation taxi', 'pay one side cab'],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: '/one-way-taxi-near-me' },
  openGraph: {
    title: 'One-Way Taxi Near Me — Pay Only for Onward Journey',
    description: 'One-way drops, no return charge. Upfront drop fare. Call 7668570551.',
    url: `${BASE_URL}/one-way-taxi-near-me`,
    siteName: COMPANY_INFO.name,
    type: 'website',
    images: [{ url: '/images/HERO_SECTION_MAIN_PAGE.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'One-Way Taxi Near Me', description: 'Pay only for the onward journey. Call 7668570551.' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

export default function Page() {
  return (
    <NearMePage
      slug="one-way-taxi-near-me"
      h1="One-Way Taxi Near You — Pay Only for the Onward Journey"
      intro="Moving to another city and don't need the cab back? A one-way taxi from Triveni Cabs means you pay only for the onward distance — no return-fuel charge. Drop anywhere across North India in a sedan, SUV or tempo traveller, with an upfront fare confirmed before you book and a verified driver at your doorstep."
      fareChips={[
        { label: 'Sedan drop', value: '₹11/km' },
        { label: 'Ertiga drop', value: '₹15/km' },
        { label: 'Innova drop', value: '₹18/km' },
      ]}
      serviceType="TaxiService"
      faqs={[
        { question: 'How does a one-way taxi work?', answer: 'You are charged only for the distance from your pickup to your drop point (minimum 300 km/day). You do not pay for the driver\'s return. This makes one-way drops far cheaper than a round-trip when you\'re not coming back.' },
        { question: 'Which vehicles are available for one-way drops?', answer: 'Sedan (Dzire/Etios), Ertiga SUV, Innova Crysta and tempo travellers — depending on your group size and luggage. See [Ertiga cab booking](/ertiga-cab-booking) and [Innova Crysta rent per km](/innova-crysta-rent-per-km).' },
        { question: 'Are popular one-way routes available?', answer: 'Yes — Delhi to Rishikesh, Delhi to Jaipur, Delhi to Katra, Jaipur to Ajmer and hundreds more. Browse all one-way routes on our [one-way cab](/one-way-cab) hub.' },
        { question: 'Is the one-way fare all-inclusive?', answer: 'Yes — fuel, driver allowance and AC are included. Only toll and parking are charged at actual and added to your final bill.' },
        { question: 'Can I book a one-way drop to an airport in another city?', answer: 'Yes. One-way airport drops to any city airport are available, with flight tracking if you have a fixed departure time.' },
      ]}
      relatedLinks={[
        { href: '/one-way-cab', anchor: 'All one-way cab routes' },
        { href: '/outstation-cabs-near-me', anchor: 'Outstation cabs near me' },
        { href: '/cab-service-near-me', anchor: 'Cab service near me' },
        { href: '/ertiga-cab-booking', anchor: 'Ertiga cab booking' },
        { href: '/innova-crysta-rent-per-km', anchor: 'Innova Crysta rent per km' },
      ]}
    />
  );
}