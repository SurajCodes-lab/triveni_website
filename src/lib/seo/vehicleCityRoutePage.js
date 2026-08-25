// src/lib/seo/vehicleCityRoutePage.js
// Server-side factory for the generalized vehicle city + route landing pages.
// Used by /force-urbania/[route] and /maharaja-tempo-traveller/[route].
//
// Returns { generateStaticParams, generateMetadata, default } parameterized by
// vehicle type. Reuses the shared tempoCities / tempoRoutes / localSightseeing /
// routeDescriptions datasets (the three vehicle types operate over the same
// North-India geography) and the per-type fleet + copy from vehicleTypeConfig.
//
// No Chardham branch — that is tempo-only and stays in the existing
// /tempo-traveller/[route]/page.js. This factory handles city + standard route
// slugs only. Anti-cannibalization: ONE canonical city page per (vehicle, city).

import { tempoCities, tempoRoutes, tempoFleet, localSightseeing, routeDescriptions } from '@/utilis/tempoTravellerData';
import { getVehicleTypeConfig, getAllVehicleTypeSlugs } from '@/utilis/vehicleTypeConfig';
import { generateTempoMetadata } from '@/lib/seo/metadata-factory';
import { getRatingAndReviews } from '@/lib/seo/review-helpers';
import {
  getSpeakableSchema, getHowToSchema, getArticleSchema, getTodayDate, getCityPlaceSchema,
} from '@/lib/seo/speakable-helpers';
import { resolveRouteMetrics } from '@/utilis/routeMetrics';
import { getCorridorLinks } from '@/utilis/corridorLinks';
import { getRelatedBlogPosts } from '@/lib/seo/blogLinkHelper';
import { getMoneyPageLinks } from '@/lib/seo/linkingHelper';
import { getOgImageForSlug } from '@/lib/seo/ogImageMap';
import AEOHead from '@/components/seo/AEOHead';
import RelatedLinks from '@/components/seo/RelatedLinks';
import VehicleCityClient from '@/components/VehicleCityClient';
import VehicleRouteClient from '@/components/VehicleRouteClient';
import { tightenTitle } from '@/lib/seo/serp-ctr';
const SITE_URL = 'https://www.trivenicabs.in';
const PHONE = '+91-7668570551';

const compactKm = (d) => { const m = /(\d[\d,]*)\s*km/i.exec(d || ''); return m ? `${m[1]} km` : null; };
const compactTravelTime = (t) => { const s = String(t || '').split('(')[0].trim(); return s && s.length <= 20 ? s : null; };

function buildFareFirstDescription(segments, limit = 160) {
  const parts = segments.filter(Boolean);
  let out = parts.join(' · ');
  while (out.length > limit && parts.length > 1) { parts.pop(); out = parts.join(' · '); }
  return out.length > limit ? out.slice(0, limit) : out;
}

const isCitySlug = (slug) => Object.values(tempoCities).some((c) => c.slug === slug);
const getCityBySlug = (slug) => Object.entries(tempoCities).find(([, c]) => c.slug === slug);
/**
 * Multi-destination routes carry two names: a list and a label, one of them in
 * a parenthetical. "Kedarnath Badrinath Yamunotri Gangotri (char Dham)" and
 * "Rajasthan Tour (jaipur Udaipur Jodhpur Jaisalmer)" are the same shape with
 * the useful half on opposite sides. Take whichever is shorter -- that is the
 * name a person would write, and the one they search.
 */
const shortenDestination = (dest) => {
  const m = String(dest || '').match(/^(.*?)\s*\((.+?)\)\s*$/);
  if (!m) return dest;
  const outside = m[1].trim();
  const inside = m[2].trim();
  const pick = (inside && inside.length < outside.length) ? inside : outside;
  return pick.replace(/\b[a-z]/g, (c) => c.toUpperCase());
};

const formatCityName = (city) => city.split('-').map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

// Cities where we have tourist-spot data for the destination.
const SPOT_CITIES = ['Delhi', 'Agra', 'Jaipur', 'Udaipur', 'Haridwar', 'Rishikesh', 'Shimla', 'Manali', 'Amritsar', 'Lucknow', 'Varanasi', 'Jodhpur', 'Ayodhya'];

// Other vehicle types (for the in-page switcher) — excludes the current one.
function otherVehicleTypes(currentSlug) {
  return getAllVehicleTypeSlugs()
    .filter((s) => s !== currentSlug)
    .map((s) => {
      const c = getVehicleTypeConfig(s);
      return { slug: s, href: c.hubHref, heroLabel: c.heroLabel };
    });
}

export function makeVehicleRoutePage(vehicleSlug) {
  const vehicle = getVehicleTypeConfig(vehicleSlug);
  if (!vehicle) throw new Error(`Unknown vehicle type: ${vehicleSlug}`);

  // Client Components (VehicleCityClient / VehicleRouteClient) cannot receive
  // functions — buildCityKeywordCluster is server-only (used in generateMetadata
  // above). Strip it before the config crosses the server→client boundary.
  const { buildCityKeywordCluster: _omit, ...clientVehicle } = vehicle;

  // ---- generateStaticParams: 15 cities + all origin→destination routes ----
  function generateStaticParams() {
    const cityParams = Object.values(tempoCities).map((c) => ({ route: c.slug }));
    const routeParams = [];
    Object.entries(tempoRoutes).forEach(([origin, destinations]) => {
      destinations.forEach((dest) => {
        const routeSlug = `${origin.toLowerCase().replace(/\s+/g, '-')}-to-${dest.name.toLowerCase().replace(/\s+/g, '-')}`;
        routeParams.push({ route: routeSlug });
      });
    });
    return [...cityParams, ...routeParams];
  }

  // ---- generateMetadata ----
  async function generateMetadata({ params }) {
    const { route } = await params;
    if (!route) return { title: `${vehicle.type} | Triveni Cabs` };

    if (isCitySlug(route)) {
      const [, cityData] = getCityBySlug(route);
      const routeCount = tempoRoutes[cityData.name]?.length || 0;
      // 45-char budget: the root layout appends ' | Triveni Cabs' after this.
      const title = tightenTitle(`${vehicle.type} in ${cityData.name} — ₹${vehicle.lowPrice}/km`);
      const description = buildFareFirstDescription([
        `${vehicle.capacity} ${vehicle.type.toLowerCase()} ₹${vehicle.lowPrice}-₹${vehicle.highPrice}/km`,
        `${routeCount}+ routes from ${cityData.name}`,
        'driver + fuel included',
        '4.9★',
        'call 7668570551',
      ]);
      const ogTitle = `${vehicle.type} in ${cityData.name} — ${vehicle.capacity} AC from ₹${vehicle.lowPrice}/km | Triveni Cabs`;
      const kw = vehicle.buildCityKeywordCluster(cityData.name);
      return {
        title,
        description,
        keywords: kw,
        authors: [{ name: 'Triveni Cabs' }],
        creator: 'Triveni Cabs',
        publisher: 'Triveni Cabs',
        metadataBase: new URL(SITE_URL),
        alternates: { canonical: `${SITE_URL}/${vehicleSlug}/${route}` },
        openGraph: {
          title: ogTitle,
          description,
          type: 'website',
          locale: 'en_IN',
          url: `${SITE_URL}/${vehicleSlug}/${route}`,
          siteName: 'Triveni Cabs',
          images: [{ url: getOgImageForSlug(route) || cityData.image, width: 1200, height: 630, alt: `${vehicle.type} in ${cityData.name}` }],
        },
        twitter: {
          card: 'summary_large_image',
          title: ogTitle,
          description,
          site: '@trivenicabs',
          images: [getOgImageForSlug(route) || cityData.image],
        },
        robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
        category: 'Travel & Transportation',
      };
    }

    // Route metadata
    const parts = route.split('-to-');
    if (parts.length !== 2) return { title: `${vehicle.type} | Triveni Cabs` };
    const origin = formatCityName(parts[0]);
    const destination = formatCityName(parts[1]);
    const shortDest = shortenDestination(destination);
    const routeMeta = routeDescriptions[route] || null;
    const baseMeta = generateTempoMetadata({ origin, destination, price: `${vehicle.lowPrice}/km`, seats: vehicle.capacity, slug: route });
    return {
      ...baseMeta,
      // 65, not the default 45: "Maharaja Tempo Traveller" spends 24 characters
      // before the route even starts, and cutting the destination made two
      // different routes share one title.
      title: tightenTitle(`${vehicle.type} ${origin} to ${shortDest} — ₹${vehicle.lowPrice}/km`, 65),
      alternates: { canonical: `${SITE_URL}/${vehicleSlug}/${route}` },
      openGraph: { ...baseMeta.openGraph, url: `${SITE_URL}/${vehicleSlug}/${route}`, title: `${vehicle.type} ${origin} to ${shortDest} — AC ${vehicle.capacity} from ₹${vehicle.lowPrice}/km` },
      description: buildFareFirstDescription([
        `${vehicle.capacity} ${vehicle.type.toLowerCase()} from ₹${vehicle.lowPrice}/km`,
        `${origin} to ${destination}${compactKm(routeMeta?.distance) ? ` ${compactKm(routeMeta.distance)}` : ''}`,
        compactTravelTime(routeMeta?.travelTime),
        'driver + fuel included',
        '4.9★',
        'call 7668570551',
      ]),
    };
  }

  // ---- FAQ builders ----
  function buildCityFaqs(cityData, cityRoutes) {
    const topDests = cityRoutes.slice(0, 5).map((r) => r.name).join(', ') || (cityData.popularDestinations || []).join(', ');
    const v = vehicle;
    return [
      { question: `How much does a ${v.type.toLowerCase()} cost in ${cityData.name}?`,
        answer: `${v.type} hire in ${cityData.name} starts at ₹${v.lowPrice}/km for the ${v.fleet[0].name.toLowerCase()} and goes up to ₹${v.highPrice}/km for the ${v.fleet[v.fleet.length-1].name.toLowerCase()}. Local 8-hour/80-km day packages start around ${v.localRate.split(' ')[0]}. Fares include fuel and driver; tolls, parking and state taxes are extra. Call 7668570551 for an exact ${cityData.name} quote.` },
      { question: `Which ${v.type.toLowerCase()} seaters are available in ${cityData.name}?`,
        answer: `In ${cityData.name} we offer ${v.fleet.map((f)=>`${f.seats}-seater`).join(', ')} ${v.type.toLowerCase()}s. All are AC with ${v.features.slice(0,3).join(', ').toLowerCase()}${v.popularSeater ? `; the ${v.popularSeater}-seater is the most-booked` : ''}.` },
      { question: `Which are the most popular ${v.type.toLowerCase()} routes from ${cityData.name}?`,
        answer: `Popular ${v.type.toLowerCase()} routes from ${cityData.name} include ${topDests}. We cover ${cityRoutes.length}+ outstation destinations plus local sightseeing, pilgrimage, wedding and corporate trips.` },
      { question: `Do you offer both local and outstation ${v.type.toLowerCase()} in ${cityData.name}?`,
        answer: `Yes. In ${cityData.name} you can book a ${v.type.toLowerCase()} for local sightseeing (8 hours / 80 km day package) or for outstation one-way and round trips charged per kilometre. Multi-day tours with hotel-to-hotel pickup are also available.` },
      { question: `Is there a driver allowance or night charge for ${v.type.toLowerCase()} in ${cityData.name}?`,
        answer: `For local day trips in ${cityData.name} the driver allowance is included in the package. For outstation and overnight journeys, a driver night charge (₹300–₹600 per night) applies and is shown upfront. There are no hidden charges.` },
      { question: `Do ${v.type.toLowerCase()} fares in ${cityData.name} include GST and tolls?`,
        answer: `Base per-km fares in ${cityData.name} cover fuel and driver. Tolls, parking and applicable state permits are billed at actuals. GST is added as per government rules, and we provide a proper GST invoice for corporate and business bookings.` },
      { question: `Can I book a ${v.type.toLowerCase()} for a wedding or corporate event in ${cityData.name}?`,
        answer: `Yes. We provide ${v.type.toLowerCase()}s for weddings, baraat, guest shuttles and corporate events in ${cityData.name}${v.slug === 'maharaja-tempo-traveller' ? ', with decor-ready interiors' : ''}. Book early for peak-season dates.` },
      { question: `Do you provide ${v.type.toLowerCase()} for airport and railway pickup in ${cityData.name}?`,
        answer: `Yes, we offer ${v.type.toLowerCase()} airport and railway station pickup and drop in ${cityData.name} for groups with luggage. Share your flight or train details and the driver tracks arrival time so the vehicle is ready when you land.` },
      { question: `How do I book a ${v.type.toLowerCase()} in ${cityData.name}?`,
        answer: `Call or WhatsApp ${PHONE} with your travel date, pickup point in ${cityData.name}, group size and destination. You get an instant quote and confirmation with driver and vehicle details.` },
      { question: `Are ${v.type.toLowerCase()}s in ${cityData.name} safe for family and senior-citizen group travel?`,
        answer: `Absolutely. Every ${v.type.toLowerCase()} in ${cityData.name} comes with a verified, experienced driver, GPS live tracking, first-aid kit and 24/7 support. ${v.features.slice(0,2).join(' and ')} keep elderly passengers and children comfortable on long journeys.` },
    ];
  }

  function buildRouteFaqs(origin, destination, routeMeta) {
    const v = vehicle;
    return [
      { question: `What is the fare for ${origin} to ${destination} ${v.type.toLowerCase()}?`,
        answer: `${v.type} fare from ${origin} to ${destination} starts at ₹${v.lowPrice}/km and goes up to ₹${v.highPrice}/km depending on seater. ${routeMeta?.distance ? `The distance is approximately ${routeMeta.distance}.` : ''} Price includes driver, fuel and AC. Toll and parking extra. Call 7668570551 for an exact quote.` },
      { question: `How long does ${origin} to ${destination} take by ${v.type.toLowerCase()}?`,
        answer: routeMeta?.travelTime
          ? `The journey from ${origin} to ${destination} by ${v.type.toLowerCase()} takes approximately ${routeMeta.travelTime}, depending on traffic and road conditions.`
          : `Travel time from ${origin} to ${destination} depends on the route and traffic. Contact us at 7668570551 for an estimated time.` },
      { question: `What ${v.type.toLowerCase()} sizes are available for ${origin} to ${destination}?`,
        answer: `We offer ${v.fleet.map((f)=>`${f.seats}-seater`).join(', ')} ${v.type.toLowerCase()}s for ${origin} to ${destination}. All are AC with ${v.features.slice(0,3).join(', ').toLowerCase()}. The ${v.popularSeater}-seater is most popular for this route.` },
      { question: `Is it safe to travel ${origin} to ${destination} by ${v.type.toLowerCase()}?`,
        answer: `Yes. All our ${v.type.toLowerCase()}s for ${origin} to ${destination} come with experienced drivers, GPS tracking, first-aid kit and 24/7 roadside assistance. Vehicles are regularly serviced and inspected.` },
      { question: `Can I book ${origin} to ${destination} ${v.type.toLowerCase()} for a round trip?`,
        answer: `Yes, we offer both one-way and round-trip ${v.type.toLowerCase()} bookings from ${origin} to ${destination}. A one-way drop is billed at the same per-km rate as a round trip because the vehicle returns to base. Multi-day trips with sightseeing stops are available.` },
      { question: `How do I book a ${v.type.toLowerCase()} from ${origin} to ${destination}?`,
        answer: `Call ${PHONE} or WhatsApp with your travel date, pickup location in ${origin}, group size and any sightseeing stops. We confirm within 15 minutes with driver details and vehicle photos.` },
    ];
  }

  // ---- Page render ----
  async function Page({ params }) {
    const { route } = await params;
    if (!route) return notFoundBlock();
    const today = getTodayDate();

    // ---------- CITY PAGE ----------
    if (isCitySlug(route)) {
      const [cityName, cityData] = getCityBySlug(route);
      const cityRoutes = tempoRoutes[cityName] || [];
      const allCitiesData = Object.entries(tempoCities).map(([name, d]) => ({ ...d, routeCount: tempoRoutes[name]?.length || 0 }));
      const cityFaqs = buildCityFaqs(cityData, cityRoutes);
      const ratingAndReviews = getRatingAndReviews(route, vehicle.vertical);

      const pageData = {
        vehicle: clientVehicle,
        cityData,
        routes: cityRoutes,
        fleet: vehicle.fleet,
        allCities: allCitiesData,
        otherVehicleTypes: otherVehicleTypes(vehicleSlug),
        cityFaqs,
        topDestinations: cityRoutes.slice(0, 8).map((r) => ({
          name: r.name, type: r.type,
          slug: `${cityData.slug}-to-${r.name.toLowerCase().replace(/\s+/g, '-')}`,
        })),
      };

      const breadcrumb = {
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: vehicle.type, item: `${SITE_URL}/${vehicleSlug}` },
          { "@type": "ListItem", position: 3, name: `${vehicle.type} in ${cityData.name}`, item: `${SITE_URL}/${vehicleSlug}/${route}` },
        ],
      };
      const serviceSchema = {
        "@context": "https://schema.org", "@type": "Service",
        serviceType: vehicle.serviceType,
        name: `${vehicle.name} in ${cityData.name} — Triveni Cabs`,
        brand: { "@type": "Brand", name: "Triveni Cabs" },
        description: `Book ${vehicle.capacity.toLowerCase()} AC ${vehicle.type.toLowerCase()} in ${cityData.name}. ${cityRoutes.length}+ routes to ${cityData.popularDestinations?.join(', ')}. From ₹${vehicle.lowPrice}/km all-inclusive.`,
        provider: { "@type": "LocalBusiness", "@id": `${SITE_URL}/#organization`, name: "Triveni Cabs", telephone: PHONE, url: SITE_URL, priceRange: "₹₹" },
        areaServed: { "@type": "City", name: cityData.name },
        offers: { "@type": "AggregateOffer", lowPrice: String(vehicle.lowPrice), highPrice: String(vehicle.highPrice), priceCurrency: "INR", offerCount: cityRoutes.length },
        ...ratingAndReviews,
      };
      const itemList = {
        "@context": "https://schema.org", "@type": "ItemList",
        name: `${vehicle.type} Routes from ${cityData.name}`, numberOfItems: cityRoutes.length,
        itemListElement: cityRoutes.slice(0, 10).map((r, i) => ({
          "@type": "ListItem", position: i + 1,
          name: `${cityData.name} to ${r.name} ${vehicle.type}`,
          url: `${SITE_URL}/${vehicleSlug}/${cityData.slug}-to-${r.name.toLowerCase().replace(/\s+/g, '-')}`,
        })),
      };
      const faqSchema = {
        "@context": "https://schema.org", "@type": "FAQPage",
        speakable: getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.speakable-faq-first']),
        mainEntity: cityFaqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
      };
      const howTo = getHowToSchema({
        name: `How to Book a ${vehicle.type} in ${cityData.name}`,
        description: `Step-by-step guide to booking a ${vehicle.capacity.toLowerCase()} AC ${vehicle.type.toLowerCase()} in ${cityData.name}.`,
        totalTime: 'PT5M',
        estimatedCost: { currency: 'INR', value: String(vehicle.lowPrice * 300) },
        steps: [
          { name: 'Choose your seater', text: `Pick a ${vehicle.fleet.map((f)=>`${f.seats}-seater`).join(', ')} ${vehicle.type.toLowerCase()} based on your ${cityData.name} group size — the ${vehicle.popularSeater}-seater offers the best value per seat.` },
          { name: 'Call or WhatsApp', text: `Contact ${PHONE} with your travel date, pickup point in ${cityData.name}, group size and destination for an instant quote.` },
          { name: 'Confirm vehicle & fare', text: 'Lock the local day package or per-km outstation fare; we share the assigned driver and vehicle details upfront with no hidden charges.' },
          { name: 'Travel comfortably', text: `The AC ${vehicle.type.toLowerCase()} with a professional driver arrives at your ${cityData.name} pickup point at the scheduled time.` },
        ],
      });
      const article = getArticleSchema({
        slug: `${vehicleSlug}/${route}`,
        headline: `${vehicle.type} in ${cityData.name} (2026) — Fares, Seater Options, Routes & Booking Guide`,
        description: `Complete guide to hiring a ${vehicle.capacity.toLowerCase()} AC ${vehicle.type.toLowerCase()} in ${cityData.name}: per-km fares from ₹${vehicle.lowPrice}/km, ${cityRoutes.length}+ outstation routes, wedding and corporate options.`,
        image: cityData.image, authorName: 'editorial',
        speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first'],
      });
      const place = getCityPlaceSchema(cityData.slug, {
        idSlug: `${vehicleSlug}/${route}`,
        description: `${cityData.name} — served by Triveni Cabs ${vehicle.type.toLowerCase()} rental with ${cityRoutes.length}+ outstation routes and local group travel.`,
        image: cityData.image,
      });

      return (
        <>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
          {place && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(place) }} />}
          <AEOHead pageType="tempo" data={{ url: `/${vehicleSlug}/${route}`, title: `${cityData.name} ${vehicle.type}`, city: cityData.name }} />
          <VehicleCityClient data={pageData} />
        </>
      );
    }

    // ---------- ROUTE PAGE ----------
    const parts = route.split('-to-');
    if (parts.length !== 2) return notFoundBlock();
    const origin = formatCityName(parts[0]);
    const destination = formatCityName(parts[1]);
    const routeMeta = routeDescriptions[route] || null;
    const routeMetrics = resolveRouteMetrics({ slug: route, origin, destination, distance: routeMeta?.distance, duration: routeMeta?.duration });
    const routeData = {
      ...(routeMetrics?.distance ? { distance: routeMetrics.distance } : {}),
      ...(routeMetrics?.duration ? { duration: routeMetrics.duration } : {}),
    };
    const destinationSightseeing = localSightseeing?.[destination] || [];
    const relatedRoutes = (tempoRoutes[origin] || [])
      .filter((r) => r.name.toLowerCase() !== destination.toLowerCase())
      .slice(0, 6)
      .map((r) => ({ name: r.name, type: r.type, slug: `${origin.toLowerCase().replace(/\s+/g, '-')}-to-${r.name.toLowerCase().replace(/\s+/g, '-')}` }));

    const faqData = buildRouteFaqs(origin, destination, routeMeta);
    const ratingAndReviews = getRatingAndReviews(route, vehicle.vertical);

    const pageData = {
      vehicle: clientVehicle, routeSlug: route, origin, destination, routeData,
      fleet: vehicle.fleet, relatedRoutes,
      localSightseeing: destinationSightseeing,
      otherVehicleTypes: otherVehicleTypes(vehicleSlug),
      faqData,
    };

    const tgeo = (s) => s.toLowerCase().replace(/\s+/g, '-');
    const originPlace = getCityPlaceSchema(tgeo(origin), { idSlug: `${vehicleSlug}/${route}#origin` });
    const destinationPlace = getCityPlaceSchema(tgeo(destination), { idSlug: `${vehicleSlug}/${route}#destination` });
    const geoNodes = [originPlace, destinationPlace].filter(Boolean);

    const serviceSchema = {
      "@context": "https://schema.org", "@type": "Service",
      "@id": `${SITE_URL}/${vehicleSlug}/${route}#service`,
      serviceType: vehicle.serviceType,
      name: `${origin} to ${destination} ${vehicle.type} on Rent`,
      alternateName: [`${origin} to ${destination} ${vehicle.type} Booking`, `${vehicle.type} from ${origin} to ${destination}`, `${origin} ${destination} ${vehicle.type} Hire`],
      description: `Book ${vehicle.capacity.toLowerCase()} AC ${vehicle.type.toLowerCase()} from ${origin} to ${destination}. Experienced drivers, ${vehicle.features.slice(0,3).join(', ').toLowerCase()}. Best rates starting ₹${vehicle.lowPrice}/km. Call 7668570551.`,
      provider: { "@type": "LocalBusiness", "@id": `${SITE_URL}/#organization`, name: "Triveni Cabs", telephone: PHONE, url: SITE_URL, priceRange: "₹₹" },
      areaServed: [{ "@type": "City", name: origin }, { "@type": "City", name: destination }],
      offers: { "@type": "AggregateOffer", lowPrice: String(vehicle.lowPrice), highPrice: String(vehicle.highPrice), priceCurrency: "INR", offerCount: vehicle.fleet.length },
      ...ratingAndReviews,
    };
    const productSchema = {
      "@context": "https://schema.org", "@type": "Product",
      name: `${origin} to ${destination} ${vehicle.type} Rental — Triveni Cabs`,
      description: `Book ${vehicle.type.toLowerCase()} from ${origin} to ${destination}. ${vehicle.capacity}, AC with ${vehicle.features.slice(0,3).join(', ').toLowerCase()}.`,
      brand: { "@type": "Brand", name: "Triveni Cabs" },
      offers: { "@type": "AggregateOffer", priceCurrency: "INR", lowPrice: String(vehicle.lowPrice), highPrice: String(vehicle.highPrice), availability: "https://schema.org/InStock", url: `${SITE_URL}/${vehicleSlug}/${route}`, seller: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "Triveni Cabs" } },
      ...ratingAndReviews,
    };
    const breadcrumb = {
      "@context": "https://schema.org", "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: vehicle.type, item: `${SITE_URL}/${vehicleSlug}` },
        { "@type": "ListItem", position: 3, name: `${origin} to ${destination}`, item: `${SITE_URL}/${vehicleSlug}/${route}` },
      ],
    };
    const faqSchema = {
      "@context": "https://schema.org", "@type": "FAQPage",
      speakable: getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.speakable-faq-first']),
      mainEntity: faqData.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
    };
    const howTo = getHowToSchema({
      name: `How to Book a ${vehicle.type} from ${origin} to ${destination}`,
      description: `Step-by-step guide to booking a ${vehicle.capacity.toLowerCase()} AC ${vehicle.type.toLowerCase()} for the ${origin} to ${destination} trip${routeMeta?.distance ? ` (${routeMeta.distance})` : ''}.`,
      totalTime: 'PT5M',
      steps: [
        { name: 'Choose your seater', text: `Pick a ${vehicle.fleet.map((f)=>`${f.seats}-seater`).join(', ')} ${vehicle.type.toLowerCase()} for ${origin} to ${destination} based on group size — the ${vehicle.popularSeater}-seater offers the best value per seat.` },
        { name: 'Call or WhatsApp', text: `Contact ${PHONE} for an instant booking and price quote.` },
        { name: 'Share trip details', text: `Provide travel date, pickup location in ${origin}, number of passengers and any sightseeing stops.` },
        { name: 'Get instant confirmation', text: 'Receive booking confirmation with driver name, vehicle number and GPS tracking link within 15 minutes.' },
      ],
    });
    const article = getArticleSchema({
      slug: `${vehicleSlug}/${route}`,
      headline: `${origin} to ${destination} ${vehicle.type} (2026) — Fare, Seater Options & Booking Guide`,
      description: `Complete guide to booking a ${vehicle.capacity.toLowerCase()} AC ${vehicle.type.toLowerCase()} from ${origin} to ${destination}${routeMeta?.distance ? ` (${routeMeta.distance})` : ''}. Fares from ₹${vehicle.lowPrice}/km.`,
      image: vehicle.heroImage, authorName: 'editorial',
      speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first'],
    });
    const trip = {
      "@context": "https://schema.org", "@type": "TouristTrip",
      "@id": `${SITE_URL}/${vehicleSlug}/${route}#trip`,
      name: `${origin} to ${destination} by ${vehicle.type}`,
      description: `Group road trip from ${origin} to ${destination} in a ${vehicle.capacity.toLowerCase()} AC ${vehicle.type.toLowerCase()} with professional driver${routeMeta?.distance ? `, covering approximately ${routeMeta.distance}` : ''}.`,
      url: `${SITE_URL}/${vehicleSlug}/${route}`,
      touristType: ["Families", "Groups", "Corporate teams", "Wedding parties", "Pilgrims"],
      itinerary: { "@type": "ItemList", itemListElement: [
        { "@type": "ListItem", position: 1, item: { "@type": "TouristAttraction", name: origin, description: `Pickup point in ${origin}` } },
        { "@type": "ListItem", position: 2, item: { "@type": "TouristAttraction", name: destination, description: `Drop / sightseeing destination ${destination}` } },
      ] },
      offers: { "@type": "Offer", price: String(vehicle.lowPrice), priceCurrency: "INR", url: `${SITE_URL}/${vehicleSlug}/${route}`, availability: "https://schema.org/InStock" },
      provider: { "@type": "TravelAgency", "@id": `${SITE_URL}/#organization`, name: "Triveni Cabs" },
      dateModified: today, ...ratingAndReviews,
    };

    const tempoBlogLinks = getRelatedBlogPosts([origin, destination], 3).map((p) => ({ href: `/blog/${p.slug}`, anchor: p.readTime ? `${p.title} · ${p.readTime}` : p.title }));

    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(trip) }} />
        {geoNodes.map((n, i) => <script key={`geo-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(n) }} />)}
        <AEOHead pageType="tempo" data={{ url: `/${vehicleSlug}/${route}`, title: `${vehicle.type} ${origin} to ${destination}`, origin, destination, city: origin }} />
        <VehicleRouteClient data={pageData} />
        <div className="container mx-auto px-4 pb-12">
          <RelatedLinks heading={`Popular in ${origin}`} links={getMoneyPageLinks(origin, 5)} ariaLabel={`Popular ${origin} services`} tone="slate" />
          {tempoBlogLinks.length > 0 && (
            <RelatedLinks heading="Trip guides & tips" links={tempoBlogLinks} ariaLabel={`${origin} to ${destination} travel guides`} tone="amber" />
          )}
        </div>
      </>
    );
  }

  Page.displayName = `${vehicleSlug}RoutePage`;
  return { generateStaticParams, generateMetadata, default: Page };
}

function notFoundBlock() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-gray-600">The requested page was not found.</p>
      </div>
    </div>
  );
}