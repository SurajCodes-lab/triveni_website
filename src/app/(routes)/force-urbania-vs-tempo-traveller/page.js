import ComparisonPage from '@/components/seo/ComparisonPage';
import { BASE_URL, COMPANY_INFO } from '@/lib/seo/constants';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Force Urbania vs Tempo Traveller — Which to Book?'),
  description: 'Force Urbania vs Tempo Traveller: compare seats, comfort, price per km, AC, ride quality and best use. Both chauffeur-driven. Honest verdict on which group vehicle fits your trip. Call 7668570551.',
  keywords: ['force urbania vs tempo traveller', 'urbania or tempo traveller', 'force urbania vs force traveller', 'which is better urbania or tempo', 'group travel vehicle comparison', 'urbania vs tempo price', 'best vehicle for group trip india'],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: '/force-urbania-vs-tempo-traveller' },
  openGraph: {
    title: 'Force Urbania vs Tempo Traveller — Which Should You Book?',
    description: 'Seats, comfort, price & ride quality compared. Honest verdict for your group trip. Call 7668570551.',
    url: `${BASE_URL}/force-urbania-vs-tempo-traveller`,
    siteName: COMPANY_INFO.name,
    type: 'article',
    images: [{ url: '/images/HERO_SECTION_MAIN_PAGE.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Force Urbania vs Tempo Traveller', description: 'Which group vehicle fits your trip? Call 7668570551.' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

export default function Page() {
  return (
    <ComparisonPage
      slug="force-urbania-vs-tempo-traveller"
      title="Force Urbania vs Tempo Traveller"
      h1="Force Urbania vs Tempo Traveller — Which Group Vehicle Should You Book?"
      intro="Both the Force Urbania and the Tempo Traveller are popular chauffeur-driven group vehicles in India — but they suit different trips. The Tempo Traveller (Force Traveller) is the workhorse of Indian group travel, while the newer Force Urbania brings car-like comfort and a modern cabin. Here is an honest, side-by-side comparison to help you pick the right one for your group, route and budget."
      leftName="Force Urbania"
      rightName="Tempo Traveller"
      rows={[
        { label: 'Seating options', left: '10 / 12 / 13 / 17 seater', right: '12 / 16 / 17 / 20 / 26 seater' },
        { label: 'Starting price', left: '₹25/km', right: '₹23/km' },
        { label: 'Cabin comfort', left: 'Premium, car-like', right: 'Functional, rugged' },
        { label: 'Ride quality (highway)', left: 'Smoother, quieter', right: 'Firmer, noisier' },
        { label: 'Largest group size', left: '17 seater', right: '26 seater' },
        { label: 'AC', left: '✓', right: '✓' },
        { label: 'Chauffeur-driven', left: '✓', right: '✓' },
        { label: 'Best for comfort/premium trips', left: '✓', right: '—' },
        { label: 'Best for large groups (20+)', left: '✗', right: '✓' },
        { label: 'Best for budget groups', left: '—', right: '✓' },
        { label: 'Pushback / recliner seats', left: '✓', right: '✓ (select models)' },
      ]}
      verdict="Choose the Force Urbania when comfort matters most — premium outstation tours, corporate groups, family trips and long highway runs where a quieter, smoother cabin makes the journey part of the experience. Choose the Tempo Traveller when you have a larger group (up to 26) or a tighter budget and need rugged, reliable transport that handles hills and rough roads well. Both are chauffeur-driven, AC and available from ₹20–24/km with fuel and driver included. Tell us your group size and route and we will recommend the right one — call 7668570551."
      faqs={[
        { question: 'Is the Force Urbania more comfortable than a Tempo Traveller?', answer: 'Yes, for most people. The Urbania has a more refined, car-like cabin with better ride quality and lower noise on the highway. The Tempo Traveller is more functional and firmer-riding, but extremely reliable and available in larger sizes up to 26 seats.' },
        { question: 'Which is cheaper — Urbania or Tempo Traveller?', answer: 'The Tempo Traveller starts lower at ₹23/km versus the Urbania at ₹25/km. For a large group of 20–26, a single Tempo Traveller is usually cheaper than splitting into two smaller Urbanias. For a premium group of 10–17, the Urbania gives more comfort per rupee.' },
        { question: 'Which is better for hilly trips like Manali or Char Dham?', answer: 'The Tempo Traveller is the proven choice for hills — rugged, high-torque and widely available in mountain regions. The Urbania also handles hills well and is more comfortable, but for Char Dham yatra by tempo traveller we most often recommend the Tempo Traveller for reliability and group size.' },
        { question: 'What sizes do the Urbania and Tempo Traveller come in?', answer: 'Force Urbania: 10, 12, 13 and 17 seater. Tempo Traveller: 12, 16, 17, 20 and 26 seater. If you have 18–26 people, the Tempo Traveller is your option; the Urbania maxes out at 17 seats.' },
        { question: 'Are both vehicles chauffeur-driven?', answer: 'Yes. Triveni Cabs rents both the Urbania and Tempo Traveller chauffeur-driven only — fuel, driver and AC are included in the per-km fare. We do not offer self-drive on group vehicles.' },
      ]}
      relatedLinks={[
        { href: '/force-urbania', anchor: 'Force Urbania on rent' },
        { href: '/tempo-traveller', anchor: 'Tempo Traveller on rent' },
        { href: '/maharaja-tempo-traveller-vs-urbania', anchor: 'Maharaja Tempo vs Urbania' },
        { href: '/17-seater-force-urbania', anchor: '17 seater Force Urbania' },
        { href: '/20-seater-tempo-traveller', anchor: '20 seater tempo traveller' },
      ]}
    />
  );
}