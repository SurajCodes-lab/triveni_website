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
import { NOINDEX_ROBOTS, isNoindexPath } from '@/lib/seo/noindex-families.mjs';
import { getVehicleTypeConfig, getAllVehicleTypeSlugs } from '@/utilis/vehicleTypeConfig';
import {
  isNcrLocalitySlug, getNcrLocality, getNcrSlugsForVehicle, getNearbyLocalities,
} from '@/utilis/ncrLocalityData';
import VehicleLocalityClient from '@/components/VehicleLocalityClient';
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
// Uplifted pictorial templates. These replace VehicleCityClient /
// VehicleRouteClient across all ~518 force-urbania and maharaja pages, so the
// city, route and NCR locality pages a visitor moves between in one session
// finally share a single design language.
//
// Every photograph these templates render is resolved HERE, server-side.
// resolveDestinationImage pulls in tempoTravellerData (265 KB); importing it
// from a client component would ship that whole module to the browser.
import VehicleCityPictorialClient from '@/components/VehicleCityPictorialClient';
import VehicleRoutePictorialClient from '@/components/VehicleRoutePictorialClient';
import { resolveDestinationImage } from '@/utilis/destinationImage';
import { tightenTitle } from '@/lib/seo/serp-ctr';
import { routeExists } from '@/lib/seo/route-exists';
import { getContentUpdatedOn } from '@/lib/seo/content-updates';
import { groupDigits } from '@/utilis/pricing';
import { BASE_URL } from '@/lib/seo/constants';
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

  // Client Components (VehicleCityClient / VehicleRouteClient /
  // VehicleLocalityClient) cannot receive functions. Both keyword-cluster
  // builders are server-only (used in generateMetadata) — strip BOTH before the
  // config crosses the server→client boundary. Missing one of these is what
  // produced the "Functions cannot be passed to Client Components" build
  // failure when this factory was first wired up.
  const {
    buildCityKeywordCluster: _omitCity,
    buildLocalityKeywordCluster: _omitLocality,
    ...clientVehicle
  } = vehicle;

  // Localities this vehicle type publishes. Only Noida, Gurgaon and the airport
  // carry Force Urbania; the rest are tempo-only, so this returns a different
  // list per vehicle rather than the full set.
  const localitySlugs = getNcrSlugsForVehicle(vehicleSlug);

  // ---- generateStaticParams: cities + NCR localities + all routes ----
  function generateStaticParams() {
    const cityParams = Object.values(tempoCities).map((c) => ({ route: c.slug }));
    const localityParams = localitySlugs.map((s) => ({ route: s }));
    const routeParams = [];
    Object.entries(tempoRoutes).forEach(([origin, destinations]) => {
      destinations.forEach((dest) => {
        const routeSlug = `${origin.toLowerCase().replace(/\s+/g, '-')}-to-${dest.name.toLowerCase().replace(/\s+/g, '-')}`;
        routeParams.push({ route: routeSlug });
      });
    });
    return [...cityParams, ...localityParams, ...routeParams];
  }

  /**
   * Does this vehicle type publish a page for this locality slug? A slug can
   * exist in the dataset but not for this vehicle — /force-urbania/dwarka must
   * 404 rather than render, because Urbania is only published for Noida,
   * Gurgaon and the airport.
   */
  const servesLocality = (slug) => isNcrLocalitySlug(slug) && localitySlugs.includes(slug);

  // ---- generateMetadata ----
  async function generateMetadata({ params }) {
    const { route } = await params;
    if (!route) return { title: `${vehicle.type} | Triveni Cabs™` };

    // ---------- NCR LOCALITY / AIRPORT ----------
    if (servesLocality(route)) return buildNcrLocalityMetadata(vehicleSlug, route);

    if (isCitySlug(route)) {
      const [, cityData] = getCityBySlug(route);
      const routeCount = tempoRoutes[cityData.name]?.length || 0;
      // 45-char budget: the root layout appends ' | Triveni Cabs' after this.
      const title = tightenTitle(`${vehicle.type} in ${cityData.name} — ₹${groupDigits(vehicle.lowPrice)}/km`);
      const description = buildFareFirstDescription([
        `${vehicle.capacity} ${vehicle.type.toLowerCase()} ₹${groupDigits(vehicle.lowPrice)}-₹${groupDigits(vehicle.highPrice)}/km`,
        `${routeCount}+ routes from ${cityData.name}`,
        'driver + fuel included',
        '4.9★',
        'call 7668570551',
      ]);
      const ogTitle = `${vehicle.type} in ${cityData.name} — ${vehicle.capacity} AC from ₹${groupDigits(vehicle.lowPrice)}/km | Triveni Cabs™`;
      const kw = vehicle.buildCityKeywordCluster(cityData.name);
      return {
        title,
        description,
        keywords: kw,
        authors: [{ name: 'Triveni Cabs™' }],
        creator: 'Triveni Cabs™',
        publisher: 'Triveni Cabs™',
        metadataBase: new URL(SITE_URL),
        alternates: { canonical: `${SITE_URL}/${vehicleSlug}/${route}` },
        openGraph: {
          title: ogTitle,
          description,
          type: 'website',
          locale: 'en_IN',
          url: `${SITE_URL}/${vehicleSlug}/${route}`,
          siteName: 'Triveni Cabs™',
          images: [{ url: getOgImageForSlug(route) || cityData.image, width: 1200, height: 630, alt: `${vehicle.type} in ${cityData.name}` }],
        },
        twitter: {
          card: 'summary_large_image',
          title: ogTitle,
          description,
          site: '@trivenicabs',
          images: [getOgImageForSlug(route) || cityData.image],
        },
        robots: isNoindexPath(`/${vehicleSlug}/${route}`) ? NOINDEX_ROBOTS : { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
        category: 'Travel & Transportation',
      };
    }

    // Route metadata
    const parts = route.split('-to-');
    if (parts.length !== 2) return { title: `${vehicle.type} | Triveni Cabs™` };
    const origin = formatCityName(parts[0]);
    const destination = formatCityName(parts[1]);
    const shortDest = shortenDestination(destination);
    const routeMeta = routeDescriptions[route] || null;
    const baseMeta = generateTempoMetadata({ origin, destination, price: `${vehicle.lowPrice}/km`, seats: vehicle.capacity, slug: route });
    return {
      ...baseMeta,
      // Week 47: non-Delhi route permutations are de-indexed by rule (see noindex-families.mjs).
      robots: isNoindexPath(`/${vehicleSlug}/${route}`) ? NOINDEX_ROBOTS : baseMeta.robots,
      // 65, not the default 45: "Maharaja Tempo Traveller" spends 24 characters
      // before the route even starts, and cutting the destination made two
      // different routes share one title.
      title: tightenTitle(`${vehicle.type} ${origin} to ${shortDest} — ₹${groupDigits(vehicle.lowPrice)}/km`, 65),
      alternates: { canonical: `${SITE_URL}/${vehicleSlug}/${route}` },
      openGraph: { ...baseMeta.openGraph, url: `${SITE_URL}/${vehicleSlug}/${route}`, title: `${vehicle.type} ${origin} to ${shortDest} — AC ${vehicle.capacity} from ₹${groupDigits(vehicle.lowPrice)}/km` },
      description: buildFareFirstDescription([
        `${vehicle.capacity} ${vehicle.type.toLowerCase()} from ₹${groupDigits(vehicle.lowPrice)}/km`,
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
        answer: `${v.type} hire in ${cityData.name} starts at ₹${groupDigits(v.lowPrice)}/km for the ${v.fleet[0].name.toLowerCase()} and goes up to ₹${groupDigits(v.highPrice)}/km for the ${v.fleet[v.fleet.length-1].name.toLowerCase()}. Local 8-hour/80-km day packages start around ${v.localRate.split(' ')[0]}. Fares include fuel and driver; tolls, parking and state taxes are extra. Call 7668570551 for an exact ${cityData.name} quote.` },
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
        answer: `${v.type} fare from ${origin} to ${destination} starts at ₹${groupDigits(v.lowPrice)}/km and goes up to ₹${groupDigits(v.highPrice)}/km depending on seater. ${routeMeta?.distance ? `The distance is approximately ${routeMeta.distance}.` : ''} Price includes driver, fuel and AC. Toll and parking extra. Call 7668570551 for an exact quote.` },
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
    const today = (getContentUpdatedOn(`/${vehicleSlug}/${route}`) || getTodayDate());

    // ---------- NCR LOCALITY / AIRPORT PAGE ----------
    if (servesLocality(route)) return renderNcrLocalityPage(vehicleSlug, route);

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
        // Photo per destination resolved server-side — see the import note.
        topDestinations: cityRoutes.slice(0, 9).map((r) => ({
          name: shortenDestination(r.name), type: r.type,
          slug: `${cityData.slug}-to-${r.name.toLowerCase().replace(/\s+/g, '-')}`,
          img: resolveDestinationImage(r.name) || cityData.image,
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
        description: `Book ${vehicle.capacity.toLowerCase()} AC ${vehicle.type.toLowerCase()} in ${cityData.name}. ${cityRoutes.length}+ routes to ${cityData.popularDestinations?.join(', ')}. From ₹${groupDigits(vehicle.lowPrice)}/km all-inclusive.`,
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
        description: `Complete guide to hiring a ${vehicle.capacity.toLowerCase()} AC ${vehicle.type.toLowerCase()} in ${cityData.name}: per-km fares from ₹${groupDigits(vehicle.lowPrice)}/km, ${cityRoutes.length}+ outstation routes, wedding and corporate options.`,
        image: cityData.image, authorName: 'editorial',
        speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first'],
      });
      const place = getCityPlaceSchema(cityData.slug, {
        idSlug: `${vehicleSlug}/${route}`,
        description: `${cityData.name} — served by Triveni Cabs™ ${vehicle.type.toLowerCase()} rental with ${cityRoutes.length}+ outstation routes and local group travel.`,
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
          <VehicleCityPictorialClient data={pageData} />
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
      fleet: vehicle.fleet,
      // Photography for the pictorial template, all resolved here rather than
      // in the client so destinationImage's 265 KB dependency stays server-side.
      heroImage: resolveDestinationImage(destination) || vehicle.heroImage,
      routeDescription: routeMeta,
      relatedRoutes: relatedRoutes.map((r) => ({
        ...r,
        name: shortenDestination(r.name),
        img: resolveDestinationImage(r.name) || vehicle.heroImage,
      })),
      // localSightseeing is a flat list of spot names at the destination; the
      // resolver keyword-matches each and falls back to the destination photo.
      sightseeing: destinationSightseeing.slice(0, 6).map((s) => {
        const title = typeof s === 'string' ? s : (s.title || s.name || s.place || '');
        return {
          title,
          meta: destination,
          img: resolveDestinationImage(`${title} ${destination}`) || resolveDestinationImage(destination),
        };
      }).filter((s) => s.title),
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
      description: `Book ${vehicle.capacity.toLowerCase()} AC ${vehicle.type.toLowerCase()} from ${origin} to ${destination}. Experienced drivers, ${vehicle.features.slice(0,3).join(', ').toLowerCase()}. Best rates starting ₹${groupDigits(vehicle.lowPrice)}/km. Call 7668570551.`,
      provider: { "@type": "LocalBusiness", "@id": `${SITE_URL}/#organization`, name: "Triveni Cabs", telephone: PHONE, url: SITE_URL, priceRange: "₹₹" },
      areaServed: [{ "@type": "City", name: origin }, { "@type": "City", name: destination }],
      offers: { "@type": "AggregateOffer", lowPrice: String(vehicle.lowPrice), highPrice: String(vehicle.highPrice), priceCurrency: "INR", offerCount: vehicle.fleet.length },
      ...ratingAndReviews,
    };
    const productSchema = {
      "@context": "https://schema.org", "@type": "Product",
      // Week 53: Google's Merchant listings report treats a missing `image`
      // as a critical error. This is an asset the page already uses.

      // Guarded: `vehicle` is not always the record carrying an image at this
      // point, and an unguarded template produced "trivenicabs.inundefined"
      // on 646 Product nodes — worse than a missing image, because it is a
      // URL that resolves to nothing. Falls back through the real assets.
      "image": `${BASE_URL}${vehicle?.image || vehicle?.heroImage || "/images/tempo/17_seater.jpg"}`,
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
      description: `Complete guide to booking a ${vehicle.capacity.toLowerCase()} AC ${vehicle.type.toLowerCase()} from ${origin} to ${destination}${routeMeta?.distance ? ` (${routeMeta.distance})` : ''}. Fares from ₹${groupDigits(vehicle.lowPrice)}/km.`,
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
      provider: { "@type": "TravelAgency", "@id": `${SITE_URL}/#organization`, name: "Triveni Cabs™" },
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
        <VehicleRoutePictorialClient data={pageData} />
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

/* ═══════════════════════════════════════════════════════════════════════════
   NCR LOCALITY TIER — shared metadata + render
   ---------------------------------------------------------------------------
   These live at module scope rather than inside makeVehicleRoutePage because
   two different call sites need them. /force-urbania/[route] and
   /maharaja-tempo-traveller/[route] go through the factory above, but
   /tempo-traveller/[route] is an older hand-written page with its own Chardham
   branch that predates the factory. Rather than duplicate a hundred lines of
   schema into that file — or risk the two copies drifting apart — both call
   these functions.
   ═══════════════════════════════════════════════════════════════════════════ */

/** Static params for the localities a given vehicle type publishes. */
export function getNcrLocalityParams(vehicleSlug) {
  return getNcrSlugsForVehicle(vehicleSlug).map((s) => ({ route: s }));
}

/**
 * Is this slug an NCR locality page that THIS vehicle type publishes?
 * A slug can exist in the dataset without existing for every vehicle —
 * /force-urbania/dwarka must fall through to a 404 rather than render, because
 * Force Urbania is only published for Noida, Gurgaon and the airport.
 */
export function ncrLocalityServes(vehicleSlug, slug) {
  return isNcrLocalitySlug(slug) && getNcrSlugsForVehicle(vehicleSlug).includes(slug);
}

/** Metadata for one (vehicle type × NCR locality) page. */
export function buildNcrLocalityMetadata(vehicleSlug, route) {
  const vehicle = getVehicleTypeConfig(vehicleSlug);
  const place = getNcrLocality(route);
  if (!vehicle || !place) return { title: 'Triveni Cabs™' };

  // 45-char budget: the root layout appends ' | Triveni Cabs' after this.
  const title = tightenTitle(`${vehicle.type} ${place.name} — ₹${groupDigits(vehicle.lowPrice)}/km`);
  const description = buildFareFirstDescription([
    `${vehicle.capacity} AC ${vehicle.type.toLowerCase()} in ${place.displayName} ₹${groupDigits(vehicle.lowPrice)}-₹${groupDigits(vehicle.highPrice)}/km`,
    place.isAirport ? 'all 3 terminals, flight tracked' : 'free gate pickup',
    'driver + fuel included',
    'call 7668570551',
  ]);
  const ogTitle = `${vehicle.type} in ${place.displayName} — AC from ₹${groupDigits(vehicle.lowPrice)}/km | Triveni Cabs™`;
  // keywordVariants is how the airport page absorbs "IGI airport" and "from IGI
  // airport" without publishing them as separate competing URLs.
  const keywords = vehicle.buildLocalityKeywordCluster(place.name, place.keywordVariants || []);

  return {
    title,
    description,
    keywords,
    authors: [{ name: 'Triveni Cabs™' }],
    creator: 'Triveni Cabs™',
    publisher: 'Triveni Cabs™',
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: `${SITE_URL}/${vehicleSlug}/${route}` },
    openGraph: {
      title: ogTitle,
      description,
      type: 'website',
      locale: 'en_IN',
      url: `${SITE_URL}/${vehicleSlug}/${route}`,
      siteName: 'Triveni Cabs™',
      images: [{ url: place.heroImage, width: 1200, height: 630, alt: `${vehicle.type} in ${place.displayName}` }],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description,
      site: '@trivenicabs',
      images: [place.heroImage],
    },
    robots: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  };
}

/** Full server render for one (vehicle type × NCR locality) page. */
export function renderNcrLocalityPage(vehicleSlug, route) {
  const vehicle = getVehicleTypeConfig(vehicleSlug);
  const place = getNcrLocality(route);
  if (!vehicle || !place) return notFoundBlock();

  // Strip BOTH server-only cluster builders before the config crosses into the
  // Client Component. Leaving either in place throws "Functions cannot be
  // passed to Client Components" at prerender.
  const {
    buildCityKeywordCluster: _omitCity,
    buildLocalityKeywordCluster: _omitLocality,
    ...clientVehicle
  } = vehicle;

  const faqs = (place.faqs || []).map((f) => ({ question: f.q, answer: f.a }));
  const ratingAndReviews = getRatingAndReviews(route, vehicle.vertical);

  const parentEntry = place.parent ? getNcrLocality(place.parent) : null;
  const parentLink = parentEntry
    ? { name: parentEntry.displayName, href: `/${vehicleSlug}/${parentEntry.slug}` }
    : null;
  const childLinks = (place.children || [])
    .map((s) => getNcrLocality(s))
    .filter((e) => e && e.vehicles.includes(vehicleSlug))
    .map((e) => ({ name: e.displayName, href: `/${vehicleSlug}/${e.slug}` }));

  // Week 48 (strategy action 7): the NCR origin pages (Noida, Ghaziabad,
  // Gurgaon, Faridabad) have their own route arrays in tempoRoutes, and the
  // route pages are built from them, but this locality template never read the
  // array, so seventy-six route pages had no inbound link from their own origin
  // page. Only routes the manifest confirms are built are listed.
  // place.name is the bare city ('Gurgaon'); displayName can carry a bracket ('Gurgaon (Gurugram)').
  const originName = place.name || place.displayName || '';
  const originSlug = String(originName).toLowerCase().replace(/\s+/g, '-');
  const originRoutes = (tempoRoutes[originName] || [])
    .map((r) => ({
      name: r.name,
      type: r.type || null,
      href: `/${vehicleSlug}/${originSlug}-to-${String(r.name).toLowerCase().replace(/\s+/g, '-')}`,
    }))
    .filter((r, i, arr) => arr.findIndex((x) => x.href === r.href) === i && routeExists(r.href));

  const pageData = {
    vehicle: clientVehicle,
    place,
    fleet: vehicle.fleet,
    faqs,
    nearby: getNearbyLocalities(route, vehicleSlug),
    parentLink,
    childLinks,
    originRoutes,
    hubHref: vehicle.hubHref,
  };

  // Breadcrumb reflects the hub-and-spoke structure: a spoke like Indirapuram
  // sits one level below its Ghaziabad hub, which is the clearest signal we can
  // give that the district page is the parent rather than a competitor.
  const breadcrumbItems = [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: vehicle.type, item: `${SITE_URL}/${vehicleSlug}` },
  ];
  if (parentEntry) {
    breadcrumbItems.push({
      "@type": "ListItem", position: 3,
      name: `${vehicle.type} in ${parentEntry.displayName}`,
      item: `${SITE_URL}/${vehicleSlug}/${parentEntry.slug}`,
    });
  }
  breadcrumbItems.push({
    "@type": "ListItem", position: breadcrumbItems.length + 1,
    name: `${vehicle.type} in ${place.displayName}`,
    item: `${SITE_URL}/${vehicleSlug}/${route}`,
  });
  const breadcrumb = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: breadcrumbItems };

  const serviceSchema = {
    "@context": "https://schema.org", "@type": "Service",
    "@id": `${SITE_URL}/${vehicleSlug}/${route}#service`,
    serviceType: vehicle.serviceType,
    name: `${vehicle.name} in ${place.displayName} — Triveni Cabs`,
    alternateName: (place.keywordVariants || []).slice(0, 4),
    brand: { "@type": "Brand", name: "Triveni Cabs" },
    description: `Book a ${vehicle.capacity.toLowerCase()} AC ${vehicle.type.toLowerCase()} in ${place.displayName}, ${place.district}. From ₹${groupDigits(vehicle.lowPrice)}/km including driver and fuel. Free gate pickup across ${place.pickupAreas.length}+ local areas.`,
    provider: { "@type": "LocalBusiness", "@id": `${SITE_URL}/#organization`, name: "Triveni Cabs", telephone: PHONE, url: SITE_URL, priceRange: "₹₹" },
    areaServed: {
      "@type": place.isAirport ? "Airport" : "Place",
      name: place.displayName,
      ...(place.isAirport ? { iataCode: place.airportCode } : {}),
      address: { "@type": "PostalAddress", addressLocality: place.name, addressRegion: place.state, addressCountry: "IN" },
    },
    offers: {
      "@type": "AggregateOffer",
      lowPrice: String(vehicle.lowPrice), highPrice: String(vehicle.highPrice),
      priceCurrency: "INR", offerCount: vehicle.fleet.length,
    },
    ...ratingAndReviews,
  };

  const productSchema = {
    "@context": "https://schema.org", "@type": "Product",
    // Week 53: Google's Merchant listings report treats a missing `image`
    // as a critical error. This is an asset the page already uses.

    // Guarded: `vehicle` is not always the record carrying an image at this
      // point, and an unguarded template produced "trivenicabs.inundefined"
      // on 646 Product nodes — worse than a missing image, because it is a
      // URL that resolves to nothing. Falls back through the real assets.
      "image": `${BASE_URL}${vehicle?.image || vehicle?.heroImage || "/images/tempo/17_seater.jpg"}`,
    name: `${vehicle.type} on Rent in ${place.displayName}`,
    description: `AC ${vehicle.type.toLowerCase()} hire in ${place.displayName} — ${vehicle.capacity}, driver and fuel included.`,
    brand: { "@type": "Brand", name: "Triveni Cabs" },
    image: [place.heroImage],
    offers: {
      "@type": "AggregateOffer", priceCurrency: "INR",
      lowPrice: String(vehicle.lowPrice), highPrice: String(vehicle.highPrice),
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/${vehicleSlug}/${route}`,
      seller: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "Triveni Cabs" },
    },
    ...ratingAndReviews,
  };

  const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    speakable: getSpeakableSchema(['.speakable-headline', '.speakable-lead', '.speakable-faq-first']),
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  };

  const howTo = getHowToSchema({
    name: `How to Book a ${vehicle.type} in ${place.displayName}`,
    description: `Booking a ${vehicle.capacity.toLowerCase()} AC ${vehicle.type.toLowerCase()} for pickup in ${place.displayName}.`,
    totalTime: 'PT5M',
    estimatedCost: { currency: 'INR', value: String(vehicle.lowPrice * 300) },
    steps: [
      { name: 'Pick your seater', text: `Choose from ${vehicle.fleet.map((f) => `${f.seats}-seater`).join(', ')}. The ${vehicle.popularSeater}-seater is the most-booked size in ${place.displayName}.` },
      { name: 'Share your pickup point', text: `Give us the exact block, sector or society in ${place.displayName} — ${place.pickupAreas.slice(0, 3).join(', ')} and every other local area are covered at no extra charge.` },
      { name: 'Confirm the written quote', text: 'You receive an itemised fare with tolls and parking shown separately. A small advance confirms the vehicle.' },
      { name: 'Travel', text: `The AC ${vehicle.type.toLowerCase()} and its driver arrive at your ${place.displayName} pickup point at the agreed time.` },
    ],
  });

  const article = getArticleSchema({
    slug: `${vehicleSlug}/${route}`,
    headline: `${vehicle.type} in ${place.displayName} (2026) — Fares, Pickup Areas & Booking Guide`,
    description: `Hiring a ${vehicle.capacity.toLowerCase()} AC ${vehicle.type.toLowerCase()} in ${place.displayName}: per-km fares from ₹${groupDigits(vehicle.lowPrice)}/km, local pickup areas, airport drive times and group booking options.`,
    image: place.heroImage,
    authorName: 'editorial',
    speakableSelectors: ['.speakable-headline', '.speakable-lead', '.speakable-faq-first'],
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
      <AEOHead pageType="tempo" data={{ url: `/${vehicleSlug}/${route}`, title: `${vehicle.type} ${place.displayName}`, city: place.name }} />
      <VehicleLocalityClient data={pageData} />
    </>
  );
}
