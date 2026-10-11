import NearMePage from '@/components/seo/NearMePage';
import { BASE_URL, COMPANY_INFO } from '@/lib/seo/constants';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Tempo Traveller Hire Near Me — 9 to 26 Seater'),
  description: 'Hire a tempo traveller near you for group trips, family tours and corporate outings. 9, 12, 16, 20 and 26-seater options with pushback seats and AC. Upfront per-km fare. Call 7668570551.',
  keywords: ['tempo traveller hire near me', 'tempo traveller on rent near me', 'force urbania rent near me', 'mini bus hire near me', 'group cab near me', '12 seater tempo traveller', 'tempo traveller for outstation'],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: '/tempo-traveller-hire-near-me' },
  openGraph: {
    title: 'Tempo Traveller Hire Near Me — 9 to 26 Seater AC',
    description: 'Group travel made easy. 9 to 26-seater tempo travellers and Force Urbania, upfront fare. Call 7668570551.',
    url: `${BASE_URL}/tempo-traveller-hire-near-me`,
    siteName: COMPANY_INFO.name,
    type: 'website',
    images: [{ url: '/images/HERO_SECTION_MAIN_PAGE.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Tempo Traveller Hire Near Me', description: '9–26 seater AC group cabs. Call 7668570551.' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

export default function Page() {
  return (
    <NearMePage
      slug="tempo-traveller-hire-near-me"
      h1="Tempo Traveller Hire Near You — 9 to 26 Seater AC Group Cabs"
      intro="Travelling with a group? Triveni Cabs™ rents tempo travellers and Force Urbania minibuses from 9 to 26 seats — perfect for family tours, office outings, pilgrimage trips and wedding baraat. Pushback seats, powerful AC, ample luggage space and a verified driver, all at an upfront per-km fare with no hidden charges."
      fareChips={[
        { label: '9–12 Seater', value: '₹23/km' },
        { label: '16–20 Seater', value: '₹25–28/km' },
        { label: '26 Seater/Bus', value: '₹35/km' },
      ]}
      serviceType="TaxiService"
      faqs={[
        { question: 'What sizes of tempo traveller can I hire?', answer: 'We offer 9, 12, 15, 16, 17, 20 and 26-seater tempo travellers, plus Force Urbania and luxury Maharaja configurations. See our [12-seater tempo traveller](/12-seater-tempo-traveller) and Force Urbania options.' },
        { question: 'Is AC and luggage space included?', answer: 'Yes — every tempo traveller has powerful AC, pushback or reclining seats and rooftop or rear luggage space. Long outstation trips can also arrange a carrier on request.' },
        { question: 'What is the minimum billing for a tempo traveller?', answer: 'Outstation trips are billed per km with a minimum of 300 km/day. Local rentals are available on 4hr/40km, 8hr/80km or full-day packages.' },
        { question: 'Can I book a tempo traveller for a pilgrimage tour?', answer: 'Yes. We specialise in pilgrimage groups — Char Dham, Vaishno Devi, Mathura-Vrindavan, Amritsar and more. See our [pilgrimage cabs](/pilgrimage-cabs) hub.' },
        { question: 'Do you provide tempo travellers for weddings (baraat)?', answer: 'Yes, decorated tempo travellers are available for baraat. See our [wedding tempo traveller](/wedding/baraat-tempo-traveller) page.' },
      ]}
      relatedLinks={[
        { href: '/12-seater-tempo-traveller', anchor: '12 seater tempo traveller' },
        { href: '/force-urbania-rent-per-km', anchor: 'Force Urbania rent per km' },
        { href: '/maharaja-tempo-traveller-price', anchor: 'Maharaja tempo traveller price' },
        { href: '/cab-service-near-me', anchor: 'Cab service near me' },
        { href: '/pilgrimage-cabs', anchor: 'Pilgrimage cabs' },
      ]}
    />
  );
}