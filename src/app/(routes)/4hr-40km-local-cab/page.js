import VehiclePricePage from '@/components/seo/VehiclePricePage';
import { BASE_URL, COMPANY_INFO } from '@/lib/seo/constants';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('4hr/40km Local Cab Package — Half-Day Rental with Driver'),
  description: 'Book a 4-hour/40-km local cab package — half-day chauffeur-driven rental from ₹2,200 (Ertiga ₹2,200, Innova ₹2,800). AC, driver and fuel included. Extra km at per-km rate. Call 7668570551.',
  keywords: ['4hr 40km local cab', '4 hour 40 km cab package', 'half day cab rental', 'local cab package', '4hr 40km taxi', 'half day cab hire', 'local cab on hourly basis', '4 hour car rental'],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: '/4hr-40km-local-cab' },
  openGraph: {
    title: '4hr/40km Local Cab Package — Half-Day Rental',
    description: 'Half-day chauffeur-driven cab from ₹2,200. Call 7668570551.',
    url: `${BASE_URL}/4hr-40km-local-cab`,
    siteName: COMPANY_INFO.name,
    type: 'website',
    images: [{ url: '/images/HERO_SECTION_MAIN_PAGE.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: '4hr/40km Local Cab', description: 'Half-day package from ₹2,200. Call 7668570551.' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

export default function Page() {
  return (
    <VehiclePricePage
      slug="4hr-40km-local-cab"
      vehicleName="4hr/40km Local Cab Package"
      h1="4hr/40km Local Cab Package — Half-Day Rental with Driver"
      intro="Need a cab for just a few hours of city errands, meetings or sightseeing? The 4-hour/40-km local package is our most popular half-day rental — a chauffeur-driven cab at your disposal for four hours, covering up to 40 km within the city. Fuel, driver and AC are all included; anything beyond 40 km is simply billed at the per-km rate. No surge, no meter, one upfront price."
      category="Local hourly rental"
      seating="4–7 (by vehicle)"
      fareRows={[
        { vehicle: 'Sedan (Dzire/Etios) — 4hr/40km', perKm: '₹2,200/pkg', minKmDay: '4 hr / 40 km', note: 'Extra km ₹11/km' },
        { vehicle: 'Ertiga SUV — 4hr/40km', perKm: '₹2,500/pkg', minKmDay: '4 hr / 40 km', note: 'Extra km ₹15/km' },
        { vehicle: 'Innova Crysta — 4hr/40km', perKm: '₹2,800/pkg', minKmDay: '4 hr / 40 km', note: 'Extra km ₹18/km' },
        { vehicle: 'Full-day 8hr/80km (Sedan)', perKm: '₹3,800/pkg', minKmDay: '8 hr / 80 km', note: 'Need more time' },
        { vehicle: 'Extra hour (any vehicle)', perKm: '₹150/hr', minKmDay: 'beyond 4 hr', note: 'Per extra hour' },
      ]}
      features={[
        '4 hours of cab time at your disposal',
        'Up to 40 km included within the city',
        'Fuel, driver allowance and AC included',
        'Stay with you between stops (no re-booking)',
        'Extra km billed transparently at per-km rate',
        'Background-verified, uniformed driver',
      ]}
      useCases={[
        'City meetings and business errands',
        'Half-day sightseeing within the city',
        'Multiple shopping/market stops',
        'Airport or station drop plus a stop',
        'Doctor visits or family errands with elderly',
      ]}
      faqs={[
        { question: 'What is the 4hr/40km local cab package?', answer: 'It is a half-day rental: a chauffeur-driven cab stays with you for up to 4 hours and covers up to 40 km within the city, all for one package price. Fuel, driver and AC are included.' },
        { question: 'What if I exceed 40 km or 4 hours?', answer: 'Distance beyond 40 km is billed at the per-km rate (₹11/km for a sedan), and time beyond 4 hours is ₹150 per extra hour. You see these rates upfront before booking.' },
        { question: 'Which vehicles are available on this package?', answer: 'Sedan (₹2,200), Ertiga SUV (₹2,500) and Innova Crysta (₹2,800). For more time, choose the full-day 8hr/80km package instead — ask us when booking, or see [cab service near me](/cab-service-near-me).' },
        { question: 'Can the cab wait between my stops?', answer: 'Yes. Within your 4 hours the driver waits while you do your meetings, shopping or darshan — you do not re-book for each stop.' },
        { question: 'Is this available in my city?', answer: 'The 4hr/40km package is available in all Triveni cities — Delhi, Agra, Jaipur, Amritsar, Chandigarh, Lucknow, Haridwar, Dehradun and more. See [cab service near me](/cab-service-near-me).' },
      ]}
      relatedLinks={[
        { href: '/cab-service-near-me', anchor: 'Cab service near me' },
        { href: '/outstation-cabs-near-me', anchor: 'Outstation cabs near me' },
        { href: '/innova-crysta-rent-per-km', anchor: 'Innova Crysta rent per km' },
        { href: '/ertiga-cab-booking', anchor: 'Ertiga cab booking' },
        { href: '/delhi', anchor: 'Cab service in Delhi' },
      ]}
    />
  );
}