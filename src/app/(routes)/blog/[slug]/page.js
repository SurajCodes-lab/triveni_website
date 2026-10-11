import { notFound } from 'next/navigation';
import { blogPosts } from '@/utilis/blog';
// Computed on the server and passed down as props. These helpers pull in
// sightseeingData.js (1.3 MB); importing them from the client component sent
// that entire dataset to the browser on all 190 blog pages.
import { getRelatedLinks, getRelatedRoutes, getMoneyPageLinks } from '@/utilis/linkingHelper';
import { getOneWayRoute, getAllOneWayRouteSlugs } from '@/utilis/oneWayCabData';
import { getAllTours, getCitiesWithTours } from '@/utilis/sightseeingData';
import { getAllTourSlugs as getReligiousTourSlugs } from '@/utilis/religiousTourData';
import { getAllTourSlugs as getGuidedTourSlugs } from '@/utilis/toursWithGuideData';
import { tempoCities, tempoRoutes } from '@/utilis/tempoTravellerData';
import { cities as hubCities, tourDetails } from '@/utilis/data';
import BlogPostPageClient from '@/components/blog/BlogPostPageClient';
import PriorityPageGuide from '@/components/content/PriorityPageGuide';
import { priorityPageGuides } from '@/lib/content/priority-page-guides';
import { getSeasonalCorridorCallout } from '@/utilis/seasonalCorridors';

// Airport guides (Jewar cheatsheet: 47,588 impressions/quarter at position 7.7;
// IGI arrival guide) linked to terminal pages but never to the airport hubs,
// which sit at position 18–34. Verified live routes only — no guessed URLs.
const AIRPORT_HUB_LINKS = [
  { href: '/airport-service/delhi', anchor: 'Delhi airport taxi service (IGI T1, T2, T3)', priority: 10 },
  { href: '/airport-service/jewar', anchor: 'Jewar (Noida) airport taxi', priority: 9 },
  { href: '/airport-service/hindon', anchor: 'Hindon airport taxi (Ghaziabad)', priority: 8 },
  { href: '/delhi-ncr-airports-guide', anchor: 'IGI vs Jewar vs Hindon — which NCR airport', priority: 7 },
  { href: '/airport-service/delhi/igi-terminal-3-international', anchor: 'IGI Terminal 3 cab', priority: 6 },
  { href: '/delhi-airport-to-noida-cab', anchor: 'Delhi airport to Noida cab', priority: 5 },
];
const isAirportPost = (s) => /jewar|igi-airport|delhi-airport|hindon-airport|noida-airport/.test(String(s || ''));
function blogMoneyLinks(post) {
  const base = post?.city ? getMoneyPageLinks(post.city) : [];
  if (!isAirportPost(post?.slug)) return base;
  const seen = new Set();
  return [...AIRPORT_HUB_LINKS, ...base].filter((l) => (seen.has(l.href) ? false : seen.add(l.href))).slice(0, 8);
}
function blogSeasonalCallout(post) {
  const candidates = [post?.city, ...(post?.relatedDestinations || []).map((d) => d?.name || d?.slug)].filter(Boolean);
  for (const c of candidates) {
    const hit = getSeasonalCorridorCallout({ destination: c });
    if (hit) return hit;
  }
  return null;
}
import AEOHead from '@/components/seo/AEOHead';
import { getSpeakableSchema, getTodayDate, getCityPlaceSchema, getHowToSchema } from '@/lib/seo/speakable-helpers';
import { buildAttractionBlogMeta, attractionGuideEntity, tightenTitle } from '@/lib/seo/serp-ctr';
import { getMonumentGlance } from '@/lib/seo/monument-glance';
import { getContentUpdatedOn } from '@/lib/seo/content-updates';
// ISR - Revalidate every hour (3600 seconds)
export const revalidate = 3600;
export const dynamicParams = false;

// Generate Article Schema for SEO with E-E-A-T signals (author bio, dateModified
// auto-refresh, citations via mentions[], Speakable for voice search).
function generateArticleSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `https://www.trivenicabs.in/blog/${post.slug}#article`,
    "headline": post.title,
    "description": post.excerpt || post.metaDescription,
    "image": {
      "@type": "ImageObject",
      "url": post.image ? `https://www.trivenicabs.in${post.image}` : "https://www.trivenicabs.in/images/og-image.jpg",
      "width": 1200,
      "height": 630
    },
    "datePublished": post.date,
    // Auto-fresh dateModified — re-evaluated every ISR cycle (1h). Reasonable
    // for blog posts because we routinely refresh fare data, distance, timing.
    "dateModified": post.dateModified || (getContentUpdatedOn(`/blog/${post.slug}`) || getTodayDate()),
    "author": {
      "@type": "Organization",
      "@id": "https://www.trivenicabs.in/#editorial-team",
      "name": "Triveni Cabs Editorial Team",
      "url": "https://www.trivenicabs.in/about",
      "description": "Travel experts at Triveni Cabs™ — covering Delhi, Agra, Jaipur, Chandigarh, Rajasthan, Himachal, Uttarakhand routes since 2015. 11 years of cab-service expertise informs every guide."
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.trivenicabs.in/#organization",
      "name": "Triveni Cabs",
      "url": "https://www.trivenicabs.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.trivenicabs.in/images/logo/logo2-tm.webp",
        "width": 200,
        "height": 60
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.trivenicabs.in/blog/${post.slug}`
    },
    "keywords": post.tags?.join(', ') || post.category,
    "inLanguage": "en-IN",
    "articleSection": post.category || "Travel",
    // Speakable for voice search (Google Assistant, Alexa)
    "speakable": getSpeakableSchema(['h1', '.blog-lead', '.blog-summary']),
    // Citations / mentions[] for entity richness — extracted from post tags
    ...(post.tags?.length > 0 ? {
      "mentions": post.tags.slice(0, 8).map(t => ({ "@type": "Thing", "name": t }))
    } : {}),
    // about[] — anchor the post to a real-world city Place entity (geo coords)
    // when the post targets a city we have geo data for. GEO entity grounding.
    ...(() => {
      if (!post.city) return {};
      const place = getCityPlaceSchema(String(post.city).toLowerCase(), { idSlug: `blog/${post.slug}` });
      if (!place) return {};
      // Strip @context for embedding inside the BlogPosting node
      const { "@context": _ctx, ...placeNode } = place;
      return { "about": [placeNode] };
    })()
  };
}

// Detect how-to style posts so we can attach a HowTo schema for rich results.
function isHowToPost(post) {
  const t = (post.title || '').toLowerCase();
  const meta = (post.metaTitle || '').toLowerCase();
  return /\bhow to\b|\bhow-to\b|step[- ]by[- ]step|guide to (?:book|reach|plan)/.test(t + ' ' + meta);
}

// Build a lightweight HowTo from the post (used only for how-to posts).
function generateHowToSchema(post) {
  const title = post.title || 'How to plan your trip';
  return getHowToSchema({
    name: title,
    description: post.metaDescription || post.excerpt || title,
    totalTime: 'PT10M',
    steps: [
      { name: 'Read the guide', text: `Read this guide — ${title} — to understand the route, timing and costs before you set off.`, image: post.image },
      { name: 'Pick your travel dates', text: 'Choose your travel dates based on the best-time-to-visit advice in this article.' },
      { name: 'Book your transport', text: 'Book a Triveni Cabs™ vehicle (sedan, SUV or Tempo Traveller) on WhatsApp +91-7668570551 with no large advance.' },
      { name: 'Confirm the itinerary', text: 'Share your pickup point and any customisation; receive an all-inclusive quote and confirmation.' }
    ]
  });
}

// Generate FAQPage Schema from the post's structured faqs[] (mirrors the FAQ
// section already present in the post body).
function generateFaqSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `https://www.trivenicabs.in/blog/${post.slug}#faq`,
    "mainEntity": post.faqs.map((f) => ({
      "@type": "Question",
      "name": f.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.answer
      }
    }))
  };
}

// Generate BreadcrumbList Schema for SEO
function generateBreadcrumbSchema(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.trivenicabs.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://www.trivenicabs.in/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://www.trivenicabs.in/blog/${post.slug}`
      }
    ]
  };
}

// ---------------------------------------------------------------------------
// "Book this trip" conversion box
//
// Blog posts are the site's biggest content surface but had no route-aware
// booking affordance — only a generic WhatsApp button. This resolves a real
// Delhi-origin one-way route for the post so the box can quote a genuine fare.
// Fares are read from oneWayCabData only; a post with no matching route still
// gets the box, just without a price. Nothing here invents a number.
// ---------------------------------------------------------------------------

const DELHI_ALIASES = new Set(['delhi', 'new-delhi', 'delhi-ncr', 'ncr']);

function citySlug(value) {
  return String(value || '')
    .toLowerCase()
    .trim()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Destination names a human actually wrote into the post data.
function namedDestinations(post) {
  const names = [];
  if (post.city) names.push(String(post.city));
  if (Array.isArray(post.relatedDestinations)) {
    post.relatedDestinations.forEach((d) => {
      if (d && d.name) names.push(String(d.name));
    });
  }
  return names;
}

// Leading segments of a "delhi-to-<city>-<topic>" slug. Good enough to probe
// the route table with, never good enough to print — "manali tempo traveller"
// is a valid lookup guess but not a place name.
function slugDestinationGuesses(post) {
  const match = String(post.slug || '').match(/^delhi-to-([a-z0-9-]+)/);
  if (!match) return [];
  const parts = match[1].split('-');
  const guesses = [];
  for (let n = Math.min(parts.length, 3); n >= 1; n--) {
    guesses.push(parts.slice(0, n).join('-'));
  }
  return guesses;
}

function titleCase(value) {
  return String(value)
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

// primaryCTA URLs sat unused in the post data until now, so a handful point at
// dynamic slugs that do not exist (dynamicParams=false makes those a hard 404).
// Check the ones sitting on a dynamic segment before linking them; unlisted
// prefixes are static route dirs and pass through.
const DYNAMIC_ROUTE_SLUGS = (() => {
  const tempo = new Set(Object.values(tempoCities).map((c) => c.slug));
  Object.entries(tempoRoutes).forEach(([origin, destinations]) => {
    destinations.forEach((d) => {
      tempo.add(`${origin.toLowerCase().replace(/\s+/g, '-')}-to-${d.name.toLowerCase().replace(/\s+/g, '-')}`);
    });
  });
  return {
    'sightseeing': new Set([...getAllTours().map((t) => t.slug), ...getCitiesWithTours()]),
    'one-way-cab': new Set(getAllOneWayRouteSlugs()),
    'religious-tours': new Set(getReligiousTourSlugs()),
    'tours-with-guide': new Set(getGuidedTourSlugs()),
    'tour-package': new Set(Object.keys(tourDetails)),
    'tempo-traveller': tempo,
    // /airport-service/<city> is shadowed by static child dirs that carry no
    // page of their own, so it is never safe to link from here.
    'airport-service': new Set(),
  };
})();

const CITY_HUB_SLUGS = new Set(
  (Array.isArray(hubCities) ? hubCities : [])
    .filter((c) => c && c.name)
    .map((c) => citySlug(c.name))
);

function isLinkableHref(href) {
  if (typeof href !== 'string' || !href.startsWith('/')) return false;
  const segments = href.split('?')[0].split('#')[0].split('/').filter(Boolean);
  if (segments.length === 0) return false;
  if (segments.length === 1) {
    // Either a static top-level page or a /<city> hub — only the latter can
    // be wrong, and it is wrong exactly when the city has no hub entry.
    return !CITY_HUB_SLUGS.size || CITY_HUB_SLUGS.has(segments[0]) || !isProbablyCityHub(segments[0]);
  }
  const known = DYNAMIC_ROUTE_SLUGS[segments[0]];
  if (!known) return true;
  return known.has(segments[1]);
}

// A bare "/foo" is meant as a city hub only when the gazetteer knows it as a
// place; otherwise it is one of the many static marketing pages.
function isProbablyCityHub(segment) {
  return Boolean(getCityPlaceSchema(segment));
}

// Attraction / timings posts are read by someone planning a visit, not a
// transfer — the box leads with "getting there" rather than "book this trip".
const ATTRACTION_HINT = /\b(fort|palace|temple|mandir|mosque|masjid|gurudwara|minar|mahal|tomb|museum|ghat|sahib|timings?|entry fee|opening hours|how to reach|best time to visit|places to visit|things to do)\b/i;

function isAttractionPost(post) {
  const haystack = [post.title, post.metaTitle, post.category, ...(post.tags || [])]
    .filter(Boolean)
    .join(' ');
  return ATTRACTION_HINT.test(haystack);
}

function buildTripCTA(post) {
  const displayNames = namedDestinations(post);

  // Probe the one-way table. Week 48: the destination the post is actually
  // about goes first. relatedDestinations often lead with a neighbour (the
  // Vaishno Devi guide lists Amritsar before Katra, which sits only in tags),
  // and the fare quoted here is now also the price in the SERP title, so the
  // probe prefers names mentioned in the title or slug, then city, then tags,
  // then relatedDestinations, then slug guesses. Tags are probes only; the
  // printed name still comes from the route table.
  const mentioned = `${post.title || ''} ${post.slug || ''}`.toLowerCase();
  const pool = [
    ...(post.city ? [String(post.city)] : []),
    ...(Array.isArray(post.tags) ? post.tags.map(String) : []),
    ...displayNames,
    ...slugDestinationGuesses(post),
  ];
  const isMentioned = (c) => {
    const s = citySlug(c);
    return Boolean(s) && (mentioned.includes(s) || mentioned.includes(s.replace(/-/g, ' ')));
  };
  let route = null;
  let routeSlug = null;
  for (const candidate of [...pool.filter(isMentioned), ...pool]) {
    const slug = citySlug(candidate);
    if (!slug || DELHI_ALIASES.has(slug)) continue;
    const found = getOneWayRoute(`delhi-to-${slug}`);
    if (found) {
      route = found;
      routeSlug = `delhi-to-${slug}`;
      break;
    }
  }

  // Without a route, only name a destination the city gazetteer recognises —
  // otherwise entries like "Delhi Wedding Cars" become a "trip destination".
  let destination = route ? route.to : null;
  if (!destination) {
    const known = displayNames.find((n) => getCityPlaceSchema(citySlug(n)));
    if (known) destination = titleCase(known.trim());
  }
  if (!destination) return null;

  const fromDelhi = !DELHI_ALIASES.has(citySlug(destination));
  const attraction = isAttractionPost(post);
  const routeHref = routeSlug ? `/one-way-cab/${routeSlug}` : null;
  const postHref = post.primaryCTA?.url || post.primaryCTA?.link;
  const ctaHref = (isLinkableHref(postHref) && postHref) || routeHref || '/one-way-cab';
  // Only keep the post's own CTA wording if we are honouring its link.
  const ctaText =
    (ctaHref === postHref && post.primaryCTA?.text) ||
    (fromDelhi ? `Book Delhi to ${destination} Cab` : `Book a ${destination} Cab`);

  let heading;
  let blurb;
  if (attraction && fromDelhi) {
    heading = `Getting to ${destination} by Cab`;
    blurb = `Planning the visit is the easy part — getting there is what we do. We run the Delhi to ${destination} road every week, with vetted drivers, fixed all-inclusive fares and no advance deposit.`;
  } else if (attraction) {
    heading = `Getting Around ${destination} by Cab`;
    blurb = `Planning the visit is the easy part — getting around is what we do. Our ${destination} drivers know every gate, parking bay and shortcut, on a fixed all-inclusive fare with no advance deposit.`;
  } else if (fromDelhi) {
    heading = `Book Your ${destination} Trip`;
    blurb = `We drive Delhi to ${destination} every week. Fixed all-inclusive fares, vetted drivers and 24×7 support — tell us your dates and we will confirm in minutes.`;
  } else {
    heading = `Book Your ${destination} Cab`;
    blurb = `We run ${destination} every day. Fixed all-inclusive fares, vetted drivers and 24×7 support — tell us your dates and we will confirm in minutes.`;
  }

  return {
    destination,
    fromDelhi,
    fare: route?.oneWayFares?.sedan || null,
    distance: route?.distance || null,
    duration: route?.time || null,
    routeHref,
    ctaHref,
    ctaText,
    heading,
    blurb,
    waMessage: `Hi Triveni Cabs™, I just read "${post.title}" on your blog and want to book a cab${fromDelhi ? ` from Delhi to ${destination}` : ` in ${destination}`}. Please share fares and availability.`,
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts
    .filter((post) => post && post.slug) // Filter out undefined or invalid posts
    .map((post) => ({
      slug: post.slug,
    }));
}

// Generate metadata for SEO
// Related-post selection, moved off the client. RelatedPosts.jsx used to import
// the entire 294 KB blog index to pick three articles; the scoring below is the
// same logic, run at build time. Only the three chosen posts — and only the
// fields the card renders — cross into the browser.
function pickRelatedPosts(current) {
  if (!current) return [];
  return blogPosts
    .filter((p) => p && p.id && p.slug && p.id !== current.id)
    .map((p) => {
      let score = 0;
      if (p.category === current.category) score += 3;
      const shared = p.tags && current.tags ? p.tags.filter((tag) => current.tags.includes(tag)) : [];
      score += shared.length;
      return { p, score };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ p }) => ({
      id: p.id,
      slug: p.slug,
      title: p.title,
      excerpt: p.excerpt,
      image: p.image,
      category: p.category,
      readTime: p.readTime,
      date: p.date,
    }));
}

// Week 43 — answer-box defence. 25 attraction guides carried 1,169,979
// impressions (78% of all /blog impressions) at ~0.3% CTR because their
// titles led with "Timings & Ticket Price" — precisely what Google's
// knowledge panel prints above the result. buildAttractionBlogMeta kept
// the timings keyword but led with "How to Reach".
//
// Week 48 C3 (attraction guides) — 24 of those pages still sat at position
// 7.6 with 0.27% CTR on 1.1M impressions: "How to Reach" named no price and
// answered nothing. The formula now leads with the cab fare the page's own
// booking box quotes (or the ₹11/km rate card), then the entry fee and hours
// read from the post's attractionData. Two posts about one monument (the
// complete guide and a history/ticket angle) would collide on the entity, so
// the non-primary sibling gets its distinguishing noun via `disambiguate`.
//
// Week 48 C3 — the other 166 posts (editorial: comparisons, itineraries,
// cheatsheets, yatra guides) used to pass through as a bare 45-char clamp of
// the authored title: no price, the hook cut mid-thought, several leading with
// the panel's own number. They now take buildEditorialBlogMeta's formula
// "<Subject>: <Answer hook> | Cab from ₹<fare>", where the fare is the one the
// page's own booking box renders (buildTripCTA, from oneWayCabData) or the
// published per-km rate card. The whole family is built once so the
// uniqueness guard (`taken`) can see every sibling: seo-check flags duplicate
// titles and several posts share a subject ("Varanasi", "Mussoorie").
// See src/lib/seo/serp-ctr.js.
let blogSeoIndex = null;
function getBlogSeoMeta(post) {
  if (!blogSeoIndex) {
    const index = new Map();
    const taken = new Set();

    // Attraction posts sharing one entity ("Taj Mahal" complete guide and the
    // ticket-price post). The primary keeps the bare entity; every other
    // sibling is told to carry its distinguishing noun.
    const siblings = new Map();
    for (const p of blogPosts) {
      if (!p || !p.slug) continue;
      const entity = attractionGuideEntity(p);
      if (!entity) continue;
      const key = entity.toLowerCase();
      if (!siblings.has(key)) siblings.set(key, []);
      if (!siblings.get(key).includes(p.slug)) siblings.get(key).push(p.slug);
    }
    const needsAngle = new Set();
    for (const slugs of siblings.values()) {
      if (slugs.length < 2) continue;
      const primary = slugs.find((s) => /complete-guide|-guide-20\d\d$/.test(s)) || slugs[0];
      slugs.forEach((s) => { if (s !== primary) needsAngle.add(s); });
    }

    for (const p of blogPosts) {
      if (!p || !p.slug) continue;
      // blogPosts carries a few duplicated slugs (the Ayodhya guide, the
      // Delhi to Manali tempo guide). generateStaticParams and the page both
      // resolve the FIRST post for a slug, so the index must too; letting the
      // second overwrite it served one post with the other's title.
      if (index.has(p.slug)) continue;
      const cta = buildTripCTA(p);
      const fare = cta && cta.fare ? cta.fare : null;
      const input = {
        title: p.title,
        metaTitle: p.metaTitle,
        excerpt: p.excerpt,
        metaDescription: p.metaDescription,
        city: p.city,
        attractionName: p.attractionData?.name,
        attractionData: p.attractionData,
        cab: cta,
        slug: p.slug,
        disambiguate: needsAngle.has(p.slug),
        tags: p.tags,
        fare,
        fareRoute: fare ? (cta.fromDelhi ? `Delhi to ${cta.destination}` : cta.destination) : '',
        taken,
      };
      let meta = buildAttractionBlogMeta(input);
      // Last-resort guard: an attraction title already claimed by an earlier
      // post is rebuilt with its distinguishing noun.
      if (meta.formula === 'attraction-price' && !input.disambiguate && taken.has(meta.title)) {
        meta = buildAttractionBlogMeta({ ...input, disambiguate: true });
      }
      taken.add(meta.title);
      index.set(p.slug, meta);
    }
    blogSeoIndex = index;
  }
  return blogSeoIndex.get(post.slug) || { title: '', description: '' };
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p && p.slug === slug);

  if (!post) {
    return {
      title: tightenTitle('Post Not Found'),
    };
  }

  const { title: seoTitle, description: seoDescription } = getBlogSeoMeta(post);
  const visitorMeta = priorityPageGuides[`/blog/${post.slug}`];

  // OG/social keeps the original curated headline: a shared link is not
  // competing with a SERP answer box, so the fact-led title reads better there.
  const socialTitle = post.metaTitle || post.title || 'Blog Post';
  const socialDescription = post.metaDescription || post.excerpt || '';

  return {
    // Title carries no brand suffix of its own: the root layout appends
    // '%s | Triveni Cabs'. serp-ctr budgets the content half at 45 chars
    // (TITLE_BUDGET) so the rendered title lands inside Google's ~60-char
    // truncation instead of being cut mid-phrase.
    title: visitorMeta?.metaTitle || seoTitle || socialTitle,
    description: visitorMeta?.metaDescription || seoDescription || socialDescription,
    keywords: post.tags?.join(', ') || '',
    openGraph: {
      title: socialTitle,
      description: socialDescription,
      type: 'article',
      publishedTime: post.date,
      authors: ['Triveni Cabs™'],
      images: post.image ? [post.image] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description: socialDescription,
      images: post.image ? [post.image] : [],
    },
    alternates: {
      canonical: `https://www.trivenicabs.in/blog/${post.slug}`,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p && p.slug === slug);

  if (!post) {
    notFound();
  }

  // Week 48: the at-a-glance rows (hours, closed day, ticket) for the monument guides.
  const glance = getMonumentGlance(post);

  const articleSchema = generateArticleSchema(post);
  const breadcrumbSchema = generateBreadcrumbSchema(post);
  const howToSchema = isHowToPost(post) ? generateHowToSchema(post) : null;
  const faqSchema = post.faqs?.length > 0 ? generateFaqSchema(post) : null;
  // Route-aware booking box — resolved server-side so the fare comes straight
  // from oneWayCabData and the client only receives a few plain strings.
  const tripCTA = buildTripCTA(post);

  return (
    <>
      {/* Article Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {/* Breadcrumb Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* FAQPage Structured Data — only for posts with structured faqs[] */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      {/* HowTo Structured Data — only for how-to style posts */}
      {howToSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
      )}
      <AEOHead pageType="tour" data={{ url: `/blog/${slug}`, title: post.title || '' }} />

      <BlogPostPageClient
        planningGuide={<PriorityPageGuide path={`/blog/${post.slug}`} />}
        glance={glance}
        post={post}
        tripCTA={tripCTA}
        relatedPosts={pickRelatedPosts(post)}
        relatedLinks={getRelatedLinks(post)}
        routes={post?.city ? getRelatedRoutes(post.city) : []}
        moneyLinks={blogMoneyLinks(post)}
        seasonalCallout={blogSeasonalCallout(post)}
      />
    </>
  );
}
