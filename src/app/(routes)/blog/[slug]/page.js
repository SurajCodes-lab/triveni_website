import { notFound } from 'next/navigation';
import { blogPosts } from '@/utilis/blog';
import { getOneWayRoute, getAllOneWayRouteSlugs } from '@/utilis/oneWayCabData';
import { getAllTours, getCitiesWithTours } from '@/utilis/sightseeingData';
import { getAllTourSlugs as getReligiousTourSlugs } from '@/utilis/religiousTourData';
import { getAllTourSlugs as getGuidedTourSlugs } from '@/utilis/toursWithGuideData';
import { tempoCities, tempoRoutes } from '@/utilis/tempoTravellerData';
import { cities as hubCities, tourDetails } from '@/utilis/data';
import BlogPostPageClient from '@/components/blog/BlogPostPageClient';
import AEOHead from '@/components/seo/AEOHead';
import { getSpeakableSchema, getTodayDate, getCityPlaceSchema, getHowToSchema } from '@/lib/seo/speakable-helpers';

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
    "dateModified": post.dateModified || getTodayDate(),
    "author": {
      "@type": "Organization",
      "@id": "https://www.trivenicabs.in/#editorial-team",
      "name": "Triveni Cabs Editorial Team",
      "url": "https://www.trivenicabs.in/about",
      "description": "Travel experts at Triveni Cabs — covering Delhi, Agra, Jaipur, Chandigarh, Rajasthan, Himachal, Uttarakhand routes since 2015. 11 years of cab-service expertise informs every guide."
    },
    "publisher": {
      "@type": "Organization",
      "@id": "https://www.trivenicabs.in/#organization",
      "name": "Triveni Cabs",
      "url": "https://www.trivenicabs.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.trivenicabs.in/images/logo/logo2.webp",
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
      { name: 'Book your transport', text: 'Book a Triveni Cabs vehicle (sedan, SUV or Tempo Traveller) on WhatsApp +91-7668570551 with no large advance.' },
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

  // Probe the one-way table: human-written names first, slug guesses after.
  let route = null;
  let routeSlug = null;
  for (const candidate of [...displayNames, ...slugDestinationGuesses(post)]) {
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
    waMessage: `Hi Triveni Cabs, I just read "${post.title}" on your blog and want to book a cab${fromDelhi ? ` from Delhi to ${destination}` : ` in ${destination}`}. Please share fares and availability.`,
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
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p && p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: post.metaTitle || post.title || 'Blog Post',
    description: post.metaDescription || post.excerpt || '',
    keywords: post.tags?.join(', ') || '',
    openGraph: {
      title: post.metaTitle || post.title || 'Blog Post',
      description: post.metaDescription || post.excerpt || '',
      type: 'article',
      publishedTime: post.date,
      authors: ['Triveni Cabs'],
      images: post.image ? [post.image] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle || post.title || 'Blog Post',
      description: post.metaDescription || post.excerpt || '',
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

      <BlogPostPageClient post={post} tripCTA={tripCTA} />
    </>
  );
}
