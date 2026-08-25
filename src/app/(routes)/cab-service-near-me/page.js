import NearMePage from '@/components/seo/NearMePage';
import { BASE_URL, COMPANY_INFO } from '@/lib/seo/constants';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Cab Service Near Me — Book Verified AC Cabs 24/7'),
  description: 'Searching "cab service near me"? Triveni Cabs offers verified, air-conditioned cabs with doorstep pickup in 18+ cities. Upfront fare, no surge pricing. Call 7668570551 to book now.',
  keywords: ['cab service near me', 'taxi service near me', 'cab near me', 'book cab near me', 'local cab service', 'nearby taxi service', 'cheapest cab near me'],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: '/cab-service-near-me' },
  openGraph: {
    title: 'Cab Service Near Me — Verified AC Cabs, Doorstep Pickup',
    description: 'Book a verified, air-conditioned cab near you. Upfront fare, no surge, 18+ cities. Call 7668570551.',
    url: `${BASE_URL}/cab-service-near-me`,
    siteName: COMPANY_INFO.name,
    type: 'website',
    images: [{ url: '/images/HERO_SECTION_MAIN_PAGE.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cab Service Near Me — Book Verified AC Cabs 24/7',
    description: 'Doorstep pickup, upfront fare, no surge. 18+ cities. Call 7668570551.',
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

export default function Page() {
  return (
    <NearMePage
      slug="cab-service-near-me"
      h1="Cab Service Near You — Verified AC Cabs, Doorstep Pickup"
      intro="Whatever city you're in, Triveni Cabs brings a clean, air-conditioned cab and a background-verified driver straight to your doorstep. Tell us your pickup point and drop — you get a confirmed, all-inclusive fare in two minutes. No surge pricing, no meter surprises, no waiting on a street corner."
      fareChips={[
        { label: 'Sedan (Dzire/Etios)', value: '₹11/km' },
        { label: 'SUV (Ertiga/Innova)', value: '₹14–18/km' },
        { label: 'Tempo Traveller', value: '₹23/km' },
      ]}
      serviceType="TaxiService"
      faqs={[
        { question: 'How do I book a cab near me right now?', answer: 'Call [7668570551](tel:+917668570551) or WhatsApp us with your pickup address, drop point and time. We confirm the fare and dispatch a driver to your doorstep — usually within minutes in metro areas.' },
        { question: 'Is the fare fixed or metered?', answer: 'Fares are upfront and all-inclusive — fuel, driver allowance and AC are built in. You see the exact amount before you confirm. Only toll and parking are charged at actual.' },
        { question: 'Which cities do you serve?', answer: 'Delhi, Agra, Jaipur, Amritsar, Chandigarh, Lucknow, Haridwar, Dehradun, Rishikesh, Mussoorie, Manali, Shimla, Mathura, Vrindavan, Ayodhya, Varanasi, Udaipur and Jodhpur — see the list below for your city.' },
        { question: 'Can I book for an airport pickup or drop?', answer: 'Yes. We track your flight for delays and the driver waits inside the terminal with a name placard. Airport transfers are available 24/7 in all our cities.' },
        { question: 'Are your drivers verified?', answer: 'Every driver is background-checked, licensed and trained. Vehicles are sanitised before each trip and you receive the driver and vehicle details on confirmation.' },
        { question: 'Do you charge extra at night?', answer: 'No night surge. Late-night trips (11 PM–5 AM) may include a small driver-allowance where applicable, which is shown in your upfront quote before you confirm.' },
      ]}
      relatedLinks={[
        { href: '/outstation-cabs-near-me', anchor: 'Outstation cabs near me' },
        { href: '/tempo-traveller-hire-near-me', anchor: 'Tempo traveller hire near me' },
        { href: '/innova-on-rent-near-me', anchor: 'Innova on rent near me' },
        { href: '/one-way-taxi-near-me', anchor: 'One-way taxi near me' },
        { href: '/wedding-car-rental-near-me', anchor: 'Wedding car rental near me' },
      ]}
    />
  );
}