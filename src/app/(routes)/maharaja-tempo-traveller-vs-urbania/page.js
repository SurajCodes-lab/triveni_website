import ComparisonPage from '@/components/seo/ComparisonPage';
import { BASE_URL, COMPANY_INFO } from '@/lib/seo/constants';
import { tightenTitle } from '@/lib/seo/serp-ctr';

export const revalidate = 3600;

export const metadata = {
  title: tightenTitle('Maharaja Tempo Traveller vs Force Urbania — Which to Rent?'),
  description: 'Maharaja tempo traveller vs Force Urbania: compare seating comfort, ride quality, AC, price per km and best use cases. Pick the right group vehicle with Triveni Cabs™. Call 7668570551.',
  keywords: ['maharaja tempo traveller vs urbania', 'urbania vs tempo traveller', 'force urbania vs maharaja tempo', 'which is better urbania or tempo traveller', 'tempo traveller vs urbania price', 'urbania vs maharaja comfort'],
  authors: [{ name: COMPANY_INFO.name }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  metadataBase: new URL(BASE_URL),
  alternates: { canonical: '/maharaja-tempo-traveller-vs-urbania' },
  openGraph: {
    title: 'Maharaja Tempo Traveller vs Force Urbania',
    description: 'Compare comfort, ride, AC, price & use cases. Call 7668570551.',
    url: `${BASE_URL}/maharaja-tempo-traveller-vs-urbania`,
    siteName: COMPANY_INFO.name,
    type: 'article',
    images: [{ url: '/images/HERO_SECTION_MAIN_PAGE.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image', title: 'Maharaja Tempo vs Force Urbania', description: 'Which group vehicle should you rent? Call 7668570551.' },
  robots: { index: true, follow: true, 'max-image-preview': 'large' },
};

export default function Page() {
  return (
    <ComparisonPage
      slug="maharaja-tempo-traveller-vs-urbania"
      title="Maharaja Tempo Traveller vs Force Urbania"
      h1="Maharaja Tempo Traveller vs Force Urbania — Which Should You Rent?"
      intro="Both are popular group vehicles, but they suit different trips. The Maharaja tempo traveller is the luxury-seating version of the classic tempo — wide captain seats and big windows. The Force Urbania is the modern monocoque van — quieter, smoother ride, newer design. Here is a side-by-side to help you pick the right one for your group, route and budget."
      leftName="Maharaja Tempo"
      rightName="Force Urbania"
      rows={[
        { label: 'Vehicle generation', left: 'Classic body-on-frame', right: 'Modern monocoque van' },
        { label: 'Ride comfort on bad roads', left: 'Good', right: 'Excellent (smoother)' },
        { label: 'Cabin noise', left: 'Moderate', right: 'Low (quieter)' },
        { label: 'Seat type', left: 'Captain seats (1x1 / 2x1)', right: 'Reclining seats (2x2)' },
        { label: 'Legroom', left: 'More (luxury config)', right: 'Good but tighter than Maharaja' },
        { label: 'AC strength', left: 'Powerful', right: 'Powerful + newer vents' },
        { label: 'Starting price (outstation)', left: '₹26/km (9-seater)', right: '₹27/km (12-seater)' },
        { label: 'Best for long Himalayan routes', left: 'Good', right: 'Better (suspension)' },
        { label: 'Best for maximum seat comfort', left: '✓', right: '—' },
        { label: 'Availability (newer fleet)', left: '—', right: '✓' },
      ]}
      verdict="Choose the Maharaja tempo traveller when seat comfort and a classic spacious feel matter most — long family tours where everyone wants a captain seat. Choose the Force Urbania when you want a quieter, smoother ride, especially on long or rough Himalayan routes like Char Dham, and a newer vehicle. Both are chauffeur-driven, AC, and priced upfront by Triveni Cabs™ — and both cost about the same per km. Not sure? Call us with your route and group size and we'll recommend."
      faqs={[
        { question: 'Is the Force Urbania more comfortable than a tempo traveller?', answer: 'The Urbania has a smoother, quieter ride thanks to its modern monocoque body — better on rough roads. The Maharaja tempo, however, has more luxurious captain seats. Comfort depends on whether you value ride smoothness (Urbania) or seat luxury (Maharaja).' },
        { question: 'Which is cheaper — Maharaja tempo or Force Urbania?', answer: 'They are close. The Urbania starts at ₹27/km (12-seater) and the Maharaja at ₹27/km (9-seater). For the same seat count the Urbania is usually a little cheaper. See full fares at [Maharaja tempo traveller price](/maharaja-tempo-traveller-price) and [Force Urbania rent price](/force-urbania-rent-price).' },
        { question: 'Which is better for Char Dham / mountain routes?', answer: 'The Force Urbania is generally preferred for Himalayan routes — its suspension handles rough mountain roads better and the cabin is quieter over long stretches. See [Char Dham yatra by tempo traveller](/char-dham-yatra-by-tempo-traveller).' },
        { question: 'Do both come with a driver and AC?', answer: 'Yes. Every Triveni Cabs™ tempo traveller and Urbania is chauffeur-driven with AC, and fuel + driver are included in the per-km fare. We are not a self-drive provider.' },
        { question: 'What sizes are available in each?', answer: 'Maharaja: 9, 12 and 17-seater. Urbania: 12 and 17-seater (plus a luxury captain-seat config). For groups over 17, ask about our larger mini buses.' },
      ]}
      relatedLinks={[
        { href: '/maharaja-tempo-traveller-price', anchor: 'Maharaja tempo traveller price' },
        { href: '/force-urbania-rent-price', anchor: 'Force Urbania rent price' },
        { href: '/force-urbania-rent-per-km', anchor: 'Force Urbania rent per km' },
        { href: '/tempo-traveller-hire-near-me', anchor: 'Tempo traveller hire near me' },
        { href: '/char-dham-yatra-by-tempo-traveller', anchor: 'Char Dham yatra by tempo traveller' },
      ]}
    />
  );
}