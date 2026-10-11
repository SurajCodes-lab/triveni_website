import { allRoutes, vehicleHubPages, dhamPages, packagePages, imageBank, openingDates2026, howToBookSteps } from '@/utilis/chardhamYatraData';
import AdventureActivities from '@/components/content/AdventureActivities';
import OfficialSources from '@/components/content/OfficialSources';
import ChardhamHubRedesign from './ChardhamHubRedesign';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import { getSpeakableSchema, getHowToSchema, getArticleSchema, getTodayDate } from '@/lib/seo/speakable-helpers';
import { tightenTitle } from '@/lib/seo/serp-ctr';
import { getContentUpdatedOn } from '@/lib/seo/content-updates';

export const revalidate = 3600;

export const metadata = {
  // The ₹12/km sedan rate here is DELIBERATE and must not be aligned to the
  // ₹11/km general rate card. Char Dham is Himalayan driving — hill engines,
  // brake wear, experienced mountain drivers — and the premium is the
  // business's own decision, confirmed in Week 50. The bus rate of ₹32/km on
  // these pages is deliberate for the same reason. A site-wide per-kilometre
  // consistency sweep will flag these as contradictions; they are not.
  title: tightenTitle('Char Dham Yatra 2026 by Car, SUV, Bus | Sedan ₹12/km'),
  description: 'Book Char Dham Yatra 2026 by car from ₹38,400 — Sedan ₹12/km, Innova ₹18/km, Bus ₹32/km. All 4 Dhams, 35+ routes, expert hill drivers. Call 7668570551.',
  keywords: 'chardham yatra by car, char dham yatra 2026, char dham yatra package, chardham yatra cost, how much does chardham yatra cost, chardham by innova, chardham by bus, chardham by sedan, kedarnath by car, badrinath by car, do dham yatra, ek dham yatra, kedarnath badrinath package, chardham yatra from delhi, chardham yatra from haridwar, chardham yatra from rishikesh, chardham yatra from dehradun, chardham yatra registration 2026, chardham opening dates 2026, garhwal himalayas pilgrimage, chardham helicopter, chardham car rental, chardham yatra itinerary, best time chardham yatra',
  alternates: {
    canonical: 'https://www.trivenicabs.in/chardham-yatra',
  },
  openGraph: {
    title: 'Char Dham Yatra 2026 by Car, SUV, Bus | Triveni Cabs™',
    description: 'Complete Char Dham Yatra vehicle booking. Sedan, Ertiga, Innova, Fortuner, Tempo, Bus. From ₹12/km. 35+ route options.',
    url: 'https://www.trivenicabs.in/chardham-yatra',
    siteName: 'Triveni Cabs™',
    images: [
      {
        url: 'https://www.trivenicabs.in/images/sightseeing/Char_Dham/Chardham_hero_section.jpg',
        width: 1200,
        height: 630,
        alt: 'Char Dham Yatra by Car - Triveni Cabs',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Char Dham Yatra 2026 | Book Car, SUV, Bus',
    description: 'Sedan ₹12/km, Innova ₹18/km, Bus ₹32/km. Experienced mountain drivers. 24/7 support.',
    images: ['https://www.trivenicabs.in/images/sightseeing/Char_Dham/Chardham_hero_section.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
  },
};

export default function ChardhamYatraHubPage() {
  const baseUrl = 'https://www.trivenicabs.in';

  // JSON-LD schemas
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Char Dham Yatra', item: `${baseUrl}/chardham-yatra` },
    ],
  };

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Char Dham Yatra Vehicle Options',
    description: 'Complete list of vehicles available for Char Dham Yatra 2026',
    numberOfItems: allRoutes.length,
    itemListElement: vehicleHubPages.map((route, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: route.title,
      url: `${baseUrl}/chardham-yatra/${route.slug}`,
    })),
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/chardham-yatra#localbusiness`,
    parentOrganization: { '@id': 'https://www.trivenicabs.in/#organization' },
    name: 'Triveni Cabs - Char Dham Yatra Services',
    brand: { '@type': 'Brand', name: 'Triveni Cabs' },
    description: 'Premium car, SUV, and bus rental services for Char Dham Yatra in Uttarakhand',
    telephone: '+91-7668570551',
    url: `${baseUrl}/chardham-yatra`,
    priceRange: '₹₹-₹₹₹₹',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
      addressRegion: 'Uttarakhand',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '30.0869',
      longitude: '78.2676',
    },
    
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
  }; // LocalBusiness reviewCount kept brand-level (legitimate aggregate, like other hubs)

  // Service-level Yatra schema with realistic per-page reviewCount + 3 named yatra Reviews
  const yatraServiceSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': `${baseUrl}/chardham-yatra#touristtrip`,
    name: 'Char Dham Yatra by Triveni Cabs — Car, SUV, Bus Packages',
    brand: { '@type': 'Brand', name: 'Triveni Cabs' },
    description: 'Complete Char Dham Yatra vehicle booking covering Kedarnath, Badrinath, Gangotri, Yamunotri. Sedan, Ertiga, Innova, Fortuner, Tempo, Bus options.',
    touristType: 'Pilgrim',
    provider: { '@id': 'https://www.trivenicabs.in/#organization' },
    url: `${baseUrl}/chardham-yatra`,
    ...getRatingAndReviews('chardham-yatra-hub', 'yatra'),
  };

  const hubFaqList = [
    { q: 'What is the best car for Char Dham Yatra?', a: 'The Toyota Innova Crysta (₹18/km) is the most recommended car for Char Dham Yatra due to its powerful 2.7L diesel engine, spacious 7-seater cabin and proven reliability on Himalayan roads. For budget travel, the Maruti Ertiga (₹15/km) is excellent for families of 4-6. For VIP comfort and 4x4 capability, the Toyota Fortuner (₹25/km) is the best choice.' },
    { q: 'How much does Char Dham Yatra by car cost from Delhi?', a: 'Char Dham Yatra by car from Delhi (12 days, ~3,200 km) costs: Sedan (Swift Dzire) from ₹38,400, Ertiga from ₹48,000, Innova Crysta from ₹57,600 and Fortuner from ₹80,000. This includes vehicle, fuel, driver and tolls. Accommodation, meals and 5% GST are extra. From Haridwar/Rishikesh the cost is 15-20% lower.' },
    { q: 'What is the difference between Do Dham, Char Dham and Ek Dham?', a: 'Ek Dham covers one shrine (e.g. Kedarnath, 5-6 days). Do Dham covers Kedarnath + Badrinath (7-8 days), the most popular balanced option. Char Dham covers all four — Yamunotri, Gangotri, Kedarnath and Badrinath — in 11-12 days from Delhi, completing the full moksha circuit.' },
    { q: 'Is Char Dham Yatra registration mandatory in 2026?', a: 'Yes. Online registration plus biometric verification is mandatory for every pilgrim in 2026. Register free on the official Uttarakhand portal (registrationandtouristcare.uk.gov.in) or the Tourist Care Uttarakhand app, then complete biometric verification at Haridwar, Rishikesh or Dehradun. Triveni Cabs™ assists you at no extra cost.' },
    { q: 'What are the Char Dham opening dates in 2026?', a: 'For 2026, Yamunotri and Gangotri kapat open on Apr 30 (Akshaya Tritiya), Kedarnath around May 2 and Badrinath around May 4. All four Dhams typically close around Diwali/Bhai Dooj in early November. Exact Kedarnath and Badrinath dates are announced on Maha Shivratri and Vasant Panchami respectively.' },
    { q: 'Can I do Char Dham Yatra by helicopter?', a: 'Helicopter service mainly applies to Kedarnath, with shuttle flights from Phata, Sersi and Guptkashi to the 16 km trek that they replace. The rest of the circuit is best done by road. Many pilgrims combine our road package with a Kedarnath helicopter leg — call 7668570551 to plan a hybrid yatra.' },
    { q: 'Can a bus reach all four Char Dhams?', a: 'Buses can reach the base points of all four Dhams. The last stretches to some temples (such as Gaurikund for Kedarnath) require smaller local vehicles, where our team arranges seamless transfers. We offer 22-seater to 56-seater AC buses from ₹32/km — ideal for temple trusts, community groups and large families.' },
    { q: 'How are the Char Dham road conditions?', a: 'Char Dham roads are well-maintained national/state highways for most of the circuit, with narrow, winding hill sections near the Dhams. Night driving is banned by the BRO and state authorities for safety, so all our itineraries use daytime-only driving with experienced hill drivers.' },
    { q: 'Is AC or non-AC vehicle better for Char Dham Yatra?', a: 'AC is useful on the plains (Delhi-Haridwar) and in early/late season warmth, but in the high Dhams the climate is naturally cool, so the AC is rarely needed there. All Triveni Cabs™ vehicles are AC-equipped at no extra cost, giving you comfort across both plains and mountains.' },
    { q: 'Which is the shortest route for Char Dham Yatra?', a: 'The shortest circuit starts from Rishikesh (~2,600 km round trip) or Haridwar (~2,700 km). From Delhi add about 230 km each way (~3,200 km). Starting from Haridwar or Rishikesh saves 1-2 days versus Delhi.' },
    { q: 'Is Char Dham Yatra suitable for elderly pilgrims?', a: 'Yes. Badrinath and Gangotri have direct road access, ideal for seniors. For Kedarnath (16 km trek) and Yamunotri (5 km trek), ponies, palki/doli and helicopter (Kedarnath) are available. Carry a medical fitness certificate for travellers above 75 and plan extra rest days at high altitude.' },
    { q: 'What is included in a Triveni Cabs™ Char Dham package?', a: 'Our packages include the AC vehicle, an experienced hill driver, fuel, all toll/state taxes, driver night allowance and 24/7 trip support, plus free registration assistance. Accommodation, meals, pony/palki/helicopter charges and 5% GST are not included.' },
    { q: 'What is the cancellation policy for Char Dham bookings?', a: 'Advance is largely refundable for cancellations made well before the travel date, with a small processing deduction; cancellations closer to departure attract higher charges as the vehicle is blocked for your dates. Date changes are accommodated subject to availability. Call 7668570551 for exact terms.' },
    { q: 'When is the best time for Char Dham Yatra 2026?', a: 'The best time is late April-June (opening season, pleasant 15-25°C days) and September-October (post-monsoon, clear skies, fewer crowds). Avoid July-August monsoon due to landslides and road closures. Temples close around early November.' },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: hubFaqList.map(f => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
    speakable: getSpeakableSchema(['.speakable-faq-first']),
  };

  // HowTo: How to Book Char Dham Yatra by Car (AEO/GEO + voice)
  const howToSchema = {
    ...getHowToSchema({
      name: 'How to Book Char Dham Yatra by Car in 2026',
      description: 'Step-by-step guide to planning and booking a Char Dham Yatra by car, SUV or bus with Triveni Cabs — from choosing your circuit to completing mandatory registration.',
      totalTime: 'PT15M',
      estimatedCost: { currency: 'INR', value: 38400 },
      steps: howToBookSteps,
    }),
    '@id': `${baseUrl}/chardham-yatra#howto`,
  };

  // Article schema for E-E-A-T + freshness + Speakable on hero/lead/first FAQ
  const articleSchema = getArticleSchema({
    slug: 'chardham-yatra',
    headline: 'Char Dham Yatra 2026 by Car, SUV & Bus — Complete Booking Guide',
    description: 'Complete 2026 guide to Char Dham Yatra by car, SUV and bus: costs, opening dates, itineraries, registration and vehicle options for Yamunotri, Gangotri, Kedarnath and Badrinath.',
    image: 'https://www.trivenicabs.in/images/sightseeing/Char_Dham/Chardham_hero_section.jpg',
    datePublished: '2026-01-01',
    dateModified: (getContentUpdatedOn('/chardham-yatra') || getTodayDate()),
    authorName: 'editorial',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first'],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(yatraServiceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <ChardhamHubRedesign
        vehicleHubs={vehicleHubPages}
        dhamPages={dhamPages}
        packagePages={packagePages}
        allRoutes={allRoutes}
        imageBank={imageBank}
        hubFaqs={hubFaqList}
        openingDates={openingDates2026}
        howToBookSteps={howToBookSteps}
      />
      <AdventureActivities path="/chardham-yatra" />
      {/* The yatra's registration requirement and opening dates are set by the
          state and the temple committee, and both change year to year. The page
          quotes them, so it should say where they come from. */}
      <OfficialSources
        heading="Where the yatra dates and rules come from"
        intro="Char Dham registration is a requirement rather than a recommendation, and the opening and closing dates are fixed by the temples each season. Both are published by the authorities below and change year to year — confirm them for your own dates before booking travel."
        sources={[
          {
            label: 'Uttarakhand Tourism (official)',
            url: 'https://uttarakhandtourism.gov.in/',
            forWhat: 'Yatra registration, route advisories and seasonal opening',
          },
          {
            label: 'Shri Badrinath–Kedarnath Temple Committee',
            url: 'https://badrinath-kedarnath.gov.in/',
            forWhat: 'Darshan arrangements and temple opening and closing dates',
          },
        ]}
      />
    </>
  );
}
