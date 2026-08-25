import NearMePage from '@/components/seo/NearMePage';
import { BASE_URL, COMPANY_INFO } from '@/lib/seo/constants';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Wedding Car Rental Near Me — Decorated Luxury Cars'),
  description: 'Rent decorated wedding cars near you — Mercedes, BMW, Audi, vintage cars and bridal tempo travellers for baraat. Chauffeur-driven, fully decorated. Call 7668570551 to book.',
  keywords: ['wedding car rental near me', 'bridal car rental near me', 'shaadi car on rent', 'decorated wedding car', 'baraat car hire', 'vintage wedding car', 'luxury wedding car rental'],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: '/wedding-car-rental-near-me' },
  openGraph: {
    title: 'Wedding Car Rental Near Me — Decorated Luxury Cars',
    description: 'Mercedes, BMW, Audi, vintage + baraat tempo travellers. Chauffeur-driven. Call 7668570551.',
    url: `${BASE_URL}/wedding-car-rental-near-me`,
    siteName: COMPANY_INFO.name,
    type: 'website',
    images: [{ url: '/images/HERO_SECTION_MAIN_PAGE.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Wedding Car Rental Near Me', description: 'Decorated luxury & vintage cars. Call 7668570551.' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

export default function Page() {
  return (
    <NearMePage
      slug="wedding-car-rental-near-me"
      h1="Wedding Car Rental Near You — Decorated Luxury & Vintage Cars"
      intro="Make your big day unforgettable with a beautifully decorated wedding car from Triveni Cabs. Choose from Mercedes, BMW, Audi, classic vintage cars for the bride and groom, plus decorated tempo travellers and minibuses for the baraat and guests. Every car is chauffeur-driven and fully decorated with flowers and ribbons."
      fareChips={[
        { label: 'Luxury sedan', value: 'from ₹15k' },
        { label: 'Mercedes/BMW', value: 'on request' },
        { label: 'Baraat tempo', value: '₹23/km' },
      ]}
      serviceType="TaxiService"
      faqs={[
        { question: 'What wedding cars do you offer?', answer: 'Mercedes, BMW, Audi, premium sedans and vintage/classic cars for the couple, plus decorated [tempo travellers for the baraat](/wedding/baraat-tempo-traveller) and minibuses for guests. See all options on our [wedding car rental](/wedding) hub.' },
        { question: 'Is decoration included in the rental?', answer: 'Yes — every bridal car comes fully decorated with fresh flowers and ribbons in your colour theme. See our [car decoration packages](/wedding/car-decoration-packages).' },
        { question: 'Does the car come with a driver?', answer: 'Yes, all wedding cars are chauffeur-driven by a uniformed driver. We do not offer self-drive for weddings.' },
        { question: 'How far in advance should I book a wedding car?', answer: 'Wedding cars are in high demand during the season — book at least 2–4 weeks ahead, earlier for peak shaadi dates in November–February.' },
        { question: 'Can you provide cars for the baraat and guests too?', answer: 'Yes. Alongside the bridal car we supply decorated tempo travellers, minibuses and sedans to move your entire baraat. One booking covers the whole convoy.' },
      ]}
      relatedLinks={[
        { href: '/wedding', anchor: 'Wedding car rental' },
        { href: '/wedding/baraat-tempo-traveller', anchor: 'Baraat tempo traveller' },
        { href: '/wedding/cars/mercedes-wedding-car', anchor: 'Mercedes wedding car' },
        { href: '/tempo-traveller-hire-near-me', anchor: 'Tempo traveller hire near me' },
        { href: '/cab-service-near-me', anchor: 'Cab service near me' },
      ]}
    />
  );
}