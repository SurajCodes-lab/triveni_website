// /group-airport-transfer-delhi
//
// The one page on the site that answers group airport transfer as a *capacity*
// question rather than a vehicle question. The tempo-traveller and
// force-urbania airport pages both answer "book this vehicle at IGI"; this one
// answers "I have 40 people landing on Thursday, what do you put them in" —
// which is a different search and a different decision, so it earns its own URL
// rather than being folded into either fleet page.
//
// It is deliberately multi-vehicle: the fare table spans tempo traveller,
// Force Urbania and the 22-to-56 seater coaches, and the whole point of the
// page is helping someone pick between them. Both single-fleet airport pages
// link here, and this links back to both.

import Image from 'next/image';
import Link from 'next/link';
import { getVehicleTypeConfig } from '@/utilis/vehicleTypeConfig';
import { getSpeakableSchema, getHowToSchema, getArticleSchema } from '@/lib/seo/speakable-helpers';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import AEOHead from '@/components/seo/AEOHead';
import FAQSection from '@/components/seo/FAQSection';
import GroupAirportTransferClient from '@/components/GroupAirportTransferClient';

export const revalidate = 3600;

const SITE_URL = 'https://www.trivenicabs.in';
const PHONE = '+91-7668570551';
const SLUG = 'group-airport-transfer-delhi';

export const metadata = {
  title: 'Group Airport Transfer Delhi — 12 to 56 Seats',
  description:
    'Group airport transfers at Delhi IGI for 12–56 passengers. Tempo traveller, Force Urbania and coaches from ₹23/km. Flight tracked, 60 min free wait. Call 7668570551.',
  keywords: [
    'group airport transfer delhi', 'delhi airport group transfer',
    'igi airport group transport', 'airport transfer for groups delhi',
    'large group airport pickup delhi', 'delhi airport coach transfer',
    'group taxi delhi airport', 'corporate airport transfer delhi',
    'wedding guest airport pickup delhi', 'tour group airport transfer delhi',
    'delhi airport shuttle for groups', 'bulk airport transfer delhi',
    'igi terminal 3 group pickup', 'delhi airport transfer 20 people',
    'delhi airport transfer 40 people',
  ],
  authors: [{ name: 'Triveni Cabs™' }],
  creator: 'Triveni Cabs™',
  publisher: 'Triveni Cabs™',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: `${SITE_URL}/${SLUG}` },
  openGraph: {
    title: 'Group Airport Transfer Delhi — 12 to 56 Seats | Triveni Cabs™',
    description:
      'One vehicle for the whole group at Delhi IGI. Tempo traveller, Force Urbania and 22–56 seater coaches. Flight tracked with 60 minutes free waiting.',
    type: 'website',
    locale: 'en_IN',
    url: `${SITE_URL}/${SLUG}`,
    siteName: 'Triveni Cabs™',
    images: [{ url: '/images/airport_section.jpg', width: 1200, height: 630, alt: 'Group airport transfer at Delhi IGI Airport' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Group Airport Transfer Delhi — 12 to 56 Seats',
    description: 'Tempo traveller, Force Urbania and coaches for group transfers at Delhi IGI. Flight tracked.',
    site: '@trivenicabs',
    images: ['/images/airport_section.jpg'],
  },
  robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
};

// Capacity ladder. Tempo and Urbania rates are pulled from the shared vehicle
// config so a rate-card change flows through here too; the coach rows are the
// published bus rates and are the only figures hard-coded on this page.
function buildCapacityLadder() {
  const tempo = getVehicleTypeConfig('tempo-traveller');
  const urbania = getVehicleTypeConfig('force-urbania');

  const rows = [];
  tempo.fleet.forEach((f) => {
    rows.push({
      group: 'Tempo Traveller',
      name: f.name,
      seats: f.seats,
      capacity: f.capacity,
      luggage: f.luggage,
      rate: f.outstationRate,
      image: f.image,
      href: '/tempo-traveller/delhi-airport',
      note: f.blurb,
    });
  });
  urbania.fleet.forEach((f) => {
    rows.push({
      group: 'Force Urbania',
      name: f.name,
      seats: f.seats,
      capacity: f.capacity,
      luggage: f.luggage,
      rate: f.outstationRate,
      image: f.image,
      href: '/force-urbania/delhi-airport',
      note: f.blurb,
    });
  });
  return rows.sort((a, b) => a.seats - b.seats);
}

const COACHES = [
  { name: '22 Seater Mini Coach', seats: 22, image: '/images/bus/22_SEATER_BUS.jpg', note: 'The first step up when a 26-seater tempo runs out of luggage space.' },
  { name: '35 Seater Coach', seats: 35, image: '/images/bus/35_SEATER_BUS.jpg', note: 'Conference delegations and mid-size wedding parties.' },
  { name: '45 Seater Coach', seats: 45, image: '/images/bus/45_SEATER_BUS.jpg', note: 'Full tour groups arriving on a single flight.' },
  { name: '56 Seater Coach', seats: 56, image: '/images/bus/56_SEATER_BUS.jpg', note: 'The largest single vehicle we run to the terminal.' },
];

const FAQS = [
  {
    question: 'How many people can travel in one vehicle from Delhi airport?',
    answer:
      'Up to 56 in a single coach. Below that the ladder runs 12, 13, 16, 17, 20 and 26 seats in tempo travellers and Force Urbania, then 22, 35, 45 and 56 in coaches. The honest constraint is almost never the seats — it is the luggage. A group of 26 arriving on an international flight with two large cases each will not fit in a 26-seater, and we would put them in a 35-seat coach instead. Tell us passengers and bags separately and we will size it properly.',
  },
  {
    question: 'What happens if the flight is delayed?',
    answer:
      'We track the actual flight rather than the scheduled arrival, so a delay simply moves the pickup and there is no charge for the delay itself. Sixty minutes of free waiting after the aircraft is on the ground is included as standard, which covers immigration and baggage reclaim on a normal international arrival. For a large group clearing immigration together we will often allow more without being asked.',
  },
  {
    question: 'Where does the driver meet a large group at IGI?',
    answer:
      'Inside the arrivals hall with a nameboard, and for groups above about twenty we send a coordinator as well as the driver. That second person matters more than it sounds — with forty people coming through the doors in ones and twos over half an hour, somebody needs to be counting heads at the door while the driver stays with the vehicle. The vehicle itself waits in the coach bay of the multi-level car park.',
  },
  {
    question: 'Can you split a large group across multiple vehicles?',
    answer:
      'Yes, and for some arrivals it is the better answer. If a party of 45 is going to two different hotels, two 26-seaters beat one 45-seat coach — the coach would have to make both stops in sequence and the second hotel waits. We plan it around the drop points rather than defaulting to the largest single vehicle. Where we do run several vehicles they are dispatched together and arrive together.',
  },
  {
    question: 'Do you handle conference and exhibition group transfers?',
    answer:
      'Regularly, and it is worth booking these early. Delegate movement between IGI, Aerocity, Yashobhoomi in Dwarka and India Expo Mart in Greater Noida is a large part of our airport work. During a major convention, vehicle availability across the whole of west Delhi tightens sharply — a group that books a fortnight ahead gets the vehicle it wanted, and one that books the day before gets whatever is left.',
  },
  {
    question: 'Is a group transfer cheaper than booking several taxis?',
    answer:
      'Usually yes on cost, and almost always yes on everything else. Four separate cabs for a group of fifteen means four fares, four arrival times, and at least one driver who cannot find the hotel. One vehicle is a single quoted fare with the group kept together. Where several taxis genuinely win is a group splitting to different parts of the city on arrival — in that case we would tell you so rather than sell you a coach.',
  },
  {
    question: 'Do you provide GST invoices for corporate airport transfers?',
    answer:
      'Yes. Corporate and event bookings receive a proper GST invoice, and recurring transfers can be put on monthly billing rather than settled trip by trip. For companies running regular delegation movement we assign a consistent set of drivers, which removes the daily briefing about which gate and which security process applies.',
  },
];

export default function GroupAirportTransferDelhiPage() {
  const ladder = buildCapacityLadder();
  const ratingAndReviews = getRatingAndReviews(SLUG, 'tempo');
  const lowPrice = Math.min(...ladder.map((r) => parseInt(String(r.rate).replace(/[^\d]/g, ''), 10)));

  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Airport Service', item: `${SITE_URL}/airport-service` },
      { '@type': 'ListItem', position: 3, name: 'Group Airport Transfer Delhi', item: `${SITE_URL}/${SLUG}` },
    ],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/${SLUG}#service`,
    serviceType: 'Group Airport Transfer',
    name: 'Group Airport Transfer at Delhi IGI — Triveni Cabs',
    description:
      'Group airport transfers at Delhi Indira Gandhi International Airport for 12 to 56 passengers. Tempo travellers, Force Urbania and coaches with flight tracking and 60 minutes free waiting.',
    provider: { '@type': 'LocalBusiness', '@id': `${SITE_URL}/#organization`, name: 'Triveni Cabs', telephone: PHONE, url: SITE_URL, priceRange: '₹₹' },
    areaServed: {
      '@type': 'Airport',
      name: 'Indira Gandhi International Airport',
      iataCode: 'DEL',
      address: { '@type': 'PostalAddress', addressLocality: 'New Delhi', addressRegion: 'Delhi', addressCountry: 'IN' },
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: String(lowPrice),
      priceCurrency: 'INR',
      offerCount: ladder.length + COACHES.length,
      availability: 'https://schema.org/InStock',
    },
    ...ratingAndReviews,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    speakable: getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.speakable-faq-first']),
    mainEntity: FAQS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };

  const howTo = getHowToSchema({
    name: 'How to Book a Group Airport Transfer at Delhi IGI',
    description: 'Arranging one vehicle for a group of 12 to 56 passengers arriving at or departing from Delhi airport.',
    totalTime: 'PT5M',
    steps: [
      { name: 'Count passengers and bags separately', text: 'The seat count rarely decides the vehicle — the luggage does. Give us both numbers and we size the vehicle against the bags, not just the headcount.' },
      { name: 'Share the flight number', text: 'The flight number lets us track the actual arrival and confirm the correct terminal on the day, since airlines move between Terminal 1 and Terminal 2 periodically.' },
      { name: 'Confirm drop points', text: 'One hotel or several. Where a group splits across destinations, two smaller vehicles often beat one coach making stops in sequence.' },
      { name: 'Meet inside arrivals', text: 'The driver waits in the arrivals hall with a nameboard. Groups above twenty also get a coordinator at the door to gather everyone as they come through.' },
    ],
  });

  const article = getArticleSchema({
    slug: SLUG,
    headline: 'Group Airport Transfer at Delhi IGI (2026) — Vehicle Sizes, Fares & Booking Guide',
    description:
      'How to move a group of 12 to 56 people to or from Delhi airport: choosing between tempo traveller, Force Urbania and coach, fares from ₹23/km, flight tracking and terminal logistics.',
    image: '/images/airport_section.jpg',
    authorName: 'editorial',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first'],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <AEOHead pageType="tempo" data={{ url: `/${SLUG}`, title: 'Group Airport Transfer Delhi', city: 'Delhi' }} />

      <GroupAirportTransferClient ladder={ladder} coaches={COACHES} />

      <div className="mx-auto max-w-4xl px-4 pb-10 sm:pb-16">
        <FAQSection
          faqs={FAQS}
          title="Group airport transfers at Delhi IGI — FAQs"
          subtitle="The questions that actually come up when a whole group is landing together."
          defaultOpen={[0]}
        />
      </div>
    </>
  );
}
