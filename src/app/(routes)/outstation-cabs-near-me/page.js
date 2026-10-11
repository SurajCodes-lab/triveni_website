import NearMePage from '@/components/seo/NearMePage';
import { BASE_URL, COMPANY_INFO } from '@/lib/seo/constants';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Outstation Cabs Near Me — One-Way & Round-Trip'),
  description: 'Book outstation cabs near you with Triveni Cabs™. One-way drops, round-trip tours and multi-city packages across North India. Upfront all-inclusive fare, verified driver. Call 7668570551.',
  keywords: ['outstation cabs near me', 'outstation taxi near me', 'outstation cab booking', 'intercity cab service', 'outstation car rental', 'one-way outstation cab', 'round trip cab service'],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: '/outstation-cabs-near-me' },
  openGraph: {
    title: 'Outstation Cabs Near Me — One-Way & Round-Trip',
    description: 'Intercity cabs with upfront fare, verified driver, doorstep pickup. Call 7668570551.',
    url: `${BASE_URL}/outstation-cabs-near-me`,
    siteName: COMPANY_INFO.name,
    type: 'website',
    images: [{ url: '/images/HERO_SECTION_MAIN_PAGE.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Outstation Cabs Near Me', description: 'One-way drops & round trips. Upfront fare. Call 7668570551.' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

export default function Page() {
  return (
    <NearMePage
      slug="outstation-cabs-near-me"
      h1="Outstation Cabs Near You — One-Way Drops & Round-Trip Tours"
      intro="Need to travel to another city? Triveni Cabs™ runs intercity outstation cabs from your doorstep to any destination across North India — one-way drops where you only pay for the onward journey, round-trip tours with a driver at your disposal, and multi-city holiday packages. One upfront fare covers fuel, driver, toll and AC for the whole route."
      fareChips={[
        { label: 'One-way Sedan', value: '₹11/km' },
        { label: 'Round-trip SUV', value: '₹14–18/km' },
        { label: 'Min 300 km/day', value: 'billed' },
      ]}
      serviceType="TaxiService"
      faqs={[
        { question: 'What is an outstation cab and how is it priced?', answer: 'An outstation cab takes you to another city. One-way drops are billed per km for the onward distance (minimum 300 km/day). Round trips are billed per km for the total distance travelled, with the driver staying with you for the return.' },
        { question: 'Do you offer one-way outstation drops?', answer: 'Yes — one-way is our specialty. You pay only for the onward journey, not the return fuel. Popular one-way routes include [Delhi to Rishikesh](/delhi-to-rishikesh), Delhi to Jaipur and Delhi to Katra.' },
        { question: 'Are toll and parking included?', answer: 'Toll and parking are charged at actual and added to your final bill. Fuel, driver allowance and AC are already included in the per-km fare.' },
        { question: 'Can I book a round-trip tour with stops?', answer: 'Absolutely. Choose round-trip and the driver stays with you for the entire duration, waiting while you sightsee. Ideal for Golden Triangle, Himachal and pilgrimage circuits.' },
        { question: 'How early should I book an outstation cab?', answer: 'Same-day booking is usually possible, but for weekend and festival travel we recommend booking 24–48 hours ahead to guarantee your preferred vehicle.' },
      ]}
      relatedLinks={[
        { href: '/cab-service-near-me', anchor: 'Cab service near me' },
        { href: '/one-way-taxi-near-me', anchor: 'One-way taxi near me' },
        { href: '/innova-on-rent-near-me', anchor: 'Innova on rent near me' },
        { href: '/tempo-traveller-hire-near-me', anchor: 'Tempo traveller hire near me' },
        { href: '/delhi-to-rishikesh', anchor: 'Delhi to Rishikesh one-way cab' },
      ]}
    />
  );
}