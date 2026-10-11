import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Fraunces } from 'next/font/google';
import Script from 'next/script';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PageUpdatedLine from "@/components/seo/PageUpdatedLine";
import SeasonalBanner from "@/components/layout/SeasonalBanner";
import { getSeasonalNavItems } from "@/utilis/seasonalNav";
import { getSeasonalFooterLinks } from "@/utilis/seasonalFooter";
import "@/styles/globals.css";
// @vercel/analytics removed — site runs on Lightsail; the injected
// /_vercel/insights/script.js 404'd on every page (console error sitewide).
import { ratingAndReviews } from '@/lib/seo/business-rating';
import { StickyCtaProvider } from '@/components/ui/StickyCtaContext';
import ResponsiveTables from '@/components/ui/ResponsiveTables';

// Dynamic imports for non-critical client components (code-split from main bundle)
const WhatsAppFloat = dynamic(() => import("@/components/layout/WhatsAppFloat"));
const DesktopQuoteButton = dynamic(() => import("@/components/ui/DesktopQuoteButton"));
const MobileStickyBar = dynamic(() => import("@/components/ui/MobileStickyBar"));
const PageTracker = dynamic(() => import("@/components/analytics/PageTracker"));
const WebVitalsReporter = dynamic(() => import("@/components/analytics/WebVitalsReporter"));
const ServiceWorkerRegistration = dynamic(() => import("@/components/pwa/ServiceWorkerRegistration"));
const AutoRelatedFooter = dynamic(() => import("@/components/seo/AutoRelatedFooter"));

// Ultra-Premium v2: editorial display serif for major headlines sitewide
// (consumed via the .font-display-serif utility → var(--font-display)).
// Variable, for the same reason as Inter — and deliberately not preloaded.
// Fraunces only styles headlines, it already has display:swap so those headlines
// paint immediately in the fallback, and preloading it put it in front of the
// hero image in the critical chain.
const fraunces = Fraunces({
  subsets: ['latin'],
  // 'optional', not 'swap'. Dropping the preload took Fraunces out of the render
  // path, which is what we wanted — but with display:swap the headlines then
  // painted in the fallback serif and re-flowed when Fraunces arrived. Lighthouse
  // scored that as a 0.059 layout shift on the Force Urbania routes, reported as a
  // root-level reflow with no attributable element, against a baseline of 0.006.
  //
  // 'optional' gives the font about 100 ms to arrive: if it makes it, it is used;
  // if not, the fallback is kept for that page view and nothing re-flows. Since
  // this is a decorative display serif and next/font already generates a
  // metric-matched fallback, a first-time visitor occasionally seeing the fallback
  // is a far better trade than a visible shift on every page.
  display: 'optional',
  variable: '--font-display',
  preload: false,
});

// GA4 measurement ID. The literal is the fallback on purpose: this used to be
// read from NEXT_PUBLIC_GA_ID alone, behind a `{process.env.NEXT_PUBLIC_GA_ID &&
// ...}` guard, which meant a build run without .env.local silently shipped a
// site with no analytics at all and nothing in the output said so. The GTM
// container ID has always been a literal here for the same reason.
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-4JLY2DXYLS';

// ISR — keep the root layout (and therefore SeasonalBanner's date-checked strip)
// fresh at most hourly. Mirrors the per-page `revalidate = 3600` already used on
// the seasonal pages and aligns with the CDN s-maxage=3600 cache reality.
export const revalidate = 3600;

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#FACF2D',
}

export const metadata = {
  title: {
    default: 'Triveni Cabs™ — Taxi ₹11/km | 4.9★ Rated | 24/7 Booking India',
    // Week 53: this was `template: '%s | Triveni Cabs™'`, which appended 16
    // characters to every page title AFTER tightenTitle had trimmed it to its
    // 58-character display budget. Measured across the build: median title 68
    // characters, p90 exactly 74 — which is 58 + 16 — and 2,505 of 3,843 titles
    // over 65.
    //
    // So the tightening was real and then undone. That matters because of what
    // gets cut: Week 52 established that the cab fare is the only part of a
    // distance-page listing the answer panel does not already show, and took
    // the family from 65% carrying a fare to 100%. Spending a quarter of the
    // display budget re-stating a brand the searcher can already see next to
    // the result is the wrong trade, and it is the trade that pushes the fare
    // toward the cut.
    //
    // The template is removed rather than shortened. Google surfaces the site
    // name alongside a result on its own, the default above keeps the brand on
    // the homepage, and the pages that genuinely want it in the title still
    // carry it in their own string.
  },
  description: 'Triveni Cabs™ — India\'s trusted taxi service. Sedan ₹11/km, SUV ₹15/km, Tempo ₹23/km. 4.9★ from 10,000+ riders. Delhi, Agra, Jaipur & 50+ cities. Call 7668570551!',
  keywords: 'taxi service India, car rental India, outstation cab booking, airport transfer Delhi, tempo traveller hire, wedding car rental, Delhi taxi 24/7, Agra tour packages, Jaipur cab booking, Triveni Cabs, one way taxi, round trip cab, cab service near me',
  authors: [{ name: 'Triveni Cabs™ - Car Rental & Tours' }],
  creator: 'Triveni Cabs™ Travel Services',
  publisher: 'Triveni Cabs™ India',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.trivenicabs.in'),
  alternates: {
    canonical: '/',
  },
  // Search-engine site verification. Previously only in public/index.html;
  // surfaced here so the Next.js-rendered pages (the canonical HTML Google
  // actually fetches) carry the tokens too. Google + Bing (msvalidate.01).
  verification: {
    google: '0TyoHgbDMg6YyyLIrEu3ek6bkqmfjs9qKx7KxUR2NlQ',
    other: {
      'msvalidate.01': '20696359D0ED6AD28A7BA67EF19A58B7',
    },
  },
  openGraph: {
    title: 'Triveni Cabs™ — Taxi ₹11/km | 4.9★ Rated | 24/7 Booking India',
    description: 'Triveni Cabs™ — India\'s trusted taxi service. Sedan ₹11/km, SUV ₹15/km, Tempo ₹23/km. 4.9★ from 10,000+ riders. Delhi, Agra, Jaipur & 50+ cities. Call 7668570551!',
    url: 'https://www.trivenicabs.in',
    siteName: 'Triveni Cabs™ - Car Rental & Tour Services',
    images: [
      {
        url: '/images/HERO_SECTION_MAIN_PAGE.jpg',
        width: 1200,
        height: 630,
        alt: 'Triveni Cabs™ - Best Car Rental & Tour Packages India',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Triveni Cabs™ — Taxi ₹11/km | 4.9★ Rated | 24/7 Booking',
    description: 'Triveni Cabs™ — India\'s trusted taxi. Sedan ₹11/km, SUV ₹15/km, Tempo ₹23/km. 10,000+ happy riders. Call 7668570551!',
    images: ['/images/HERO_SECTION_MAIN_PAGE.jpg'],
    creator: '@trivenicabs',
    site: '@trivenicabs',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/apple-touch-icon.png',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#FACF2D',
    'apple-mobile-web-app-title': 'Triveni Cabs™',
    'application-name': 'Triveni Cabs™',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
}

// Structured data emitted as a single @graph document. Previously three
// disconnected JSON-LD objects; collapsing them into @graph lets Google
// and LLM crawlers resolve @id cross-references in one parse, reduces
// payload, and is the 2026-recommended multi-entity pattern.
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
  // Organization Schema — also typed as TravelAgency for vertical semantic match
  {
    "@type": ["Organization", "TravelAgency"],
    "@id": "https://www.trivenicabs.in/#organization",
    "name": "Triveni Cabs",
    "alternateName": ["Triveni Cabs™", "Triveni Car Rental", "Triveni Taxi Service"],
    "url": "https://www.trivenicabs.in",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.trivenicabs.in/images/logo/logo-tm.webp",
      "width": 600,
      "height": 315
    },
    "image": "https://www.trivenicabs.in/images/logo/logo-tm.webp",
    "description": "India's trusted car rental & taxi service. Sedan ₹11/km, SUV ₹15/km, Tempo from ₹23/km. 50+ cities, 24/7 booking.",
    "telephone": "+91-7668570551",
    "email": "cabstriveni@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "366, Dandupura, near Tajganj",
      "addressLocality": "Agra",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "282006",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.facebook.com/trivenicabs",
      "https://www.instagram.com/cabstriveni",
      "https://twitter.com/trivenicabs"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+91-7668570551",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"],
        "hoursAvailable": "Mo-Su 00:00-23:59"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+91-7668570551",
        "contactType": "reservations",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      }
    ],
    "foundingDate": "2015",
    "founder": { "@type": "Person", "name": "Pankaj Singh Gaur" },
    "slogan": "India's Trusted Taxi — ₹11/km Sedan. 4.9★ Rated. 24/7."
  },
  // WebSite Schema — now with global SpeakableSpecification so voice assistants
  // (Google Assistant, Alexa, Siri) know which CSS selectors are safe to read
  // aloud. Applied site-wide here; individual pages that use the semantic
  // classes below will automatically be speakable-eligible without per-page
  // schema. The 2026 AI-search playbook calls this a "soft" GEO signal.
  {
    "@type": "WebSite",
    "@id": "https://www.trivenicabs.in/#website",
    "name": "Triveni Cabs",
    "alternateName": ["Triveni Cabs™", "Triveni Taxi", "Triveni Cab Service"],
    "url": "https://www.trivenicabs.in",
    "description": "India's trusted taxi service. Book outstation cabs, airport transfers, sightseeing tours, wedding cars, and tempo travellers across 50+ cities.",
    "inLanguage": "en-IN",
    "publisher": { "@id": "https://www.trivenicabs.in/#organization" },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.trivenicabs.in/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [
        ".answer-box",
        ".direct-answer",
        ".key-stats",
        ".faq-answer",
        ".summary-box",
        "[data-speakable]"
      ]
    }
  },
  // LocalBusiness Schema — also typed as TaxiService for vertical semantic match
  {
    "@type": ["LocalBusiness", "TaxiService"],
    "@id": "https://www.trivenicabs.in/#localbusiness",
    "parentOrganization": { "@id": "https://www.trivenicabs.in/#organization" },
    "isPartOf": { "@id": "https://www.trivenicabs.in/#website" },
    "name": "Triveni Cabs",
    "alternateName": ["Triveni Cabs™", "Triveni Car Rental Services"],
    "logo": "https://www.trivenicabs.in/images/logo/logo-tm.webp",
    "image": [
      "https://www.trivenicabs.in/images/logo/logo-tm.webp",
      "https://www.trivenicabs.in/images/car/swift_dzire.jpg",
      "https://www.trivenicabs.in/images/car/premium_suv.jpg"
    ],
    "description": "Best car rental, taxi service and tour packages in India. Sedan ₹11/km, SUV ₹15/km, Tempo Traveller from ₹23/km. Professional drivers, AC vehicles, 24/7 support.",
    "url": "https://www.trivenicabs.in",
    "telephone": "+91-7668570551",
    "email": "cabstriveni@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "366, Dandupura, near Tajganj",
      "addressLocality": "Agra",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "282006",
      "addressCountry": "IN"
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 27.1767, "longitude": 78.0081 },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Credit Card, Debit Card",
    "serviceArea": [
      { "@type": "AdministrativeArea", "name": "Delhi" },
      { "@type": "AdministrativeArea", "name": "Uttar Pradesh" },
      { "@type": "AdministrativeArea", "name": "Rajasthan" },
      { "@type": "AdministrativeArea", "name": "Himachal Pradesh" },
      { "@type": "AdministrativeArea", "name": "Uttarakhand" },
      { "@type": "AdministrativeArea", "name": "Punjab" },
      { "@type": "AdministrativeArea", "name": "Haryana" }
    ],
    "areaServed": [
      { "@type": "Country", "name": "India" },
      { "@type": "City", "name": "Delhi" },
      { "@type": "City", "name": "Agra" },
      { "@type": "City", "name": "Jaipur" },
      { "@type": "City", "name": "Chandigarh" },
      { "@type": "City", "name": "Amritsar" },
      { "@type": "City", "name": "Shimla" },
      { "@type": "City", "name": "Manali" },
      { "@type": "City", "name": "Dehradun" },
      { "@type": "City", "name": "Haridwar" },
      { "@type": "City", "name": "Rishikesh" },
      { "@type": "City", "name": "Nainital" },
      { "@type": "City", "name": "Mussoorie" },
      { "@type": "City", "name": "Udaipur" },
      { "@type": "City", "name": "Jodhpur" },
      { "@type": "City", "name": "Jaisalmer" },
      { "@type": "City", "name": "Lucknow" },
      { "@type": "City", "name": "Varanasi" },
      { "@type": "City", "name": "Ayodhya" },
      { "@type": "City", "name": "Dharamshala" },
      { "@type": "City", "name": "Gurgaon" },
      { "@type": "City", "name": "Noida" }
    ],
    // Rating and reviews come from src/lib/seo/business-rating.js, which
    // publishes them only when they are backed by verified data. Both keys are
    // spread in, so when there is nothing verified they are absent from the
    // markup entirely rather than present and invented.
    //
    // This block previously hardcoded ratingValue "4.9" with reviewCount
    // "10000" on all 3,833 pages — the same 10,000 that review-helpers.js was
    // written to remove as schema spam, still going out from here — alongside
    // eight Review nodes whose authors and text were written in a source file.
    ...ratingAndReviews(),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Car Rental and Tour Packages",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sedan Car Rental", "description": "4 passenger sedan rental starting ₹11/km" }, "price": "11", "priceCurrency": "INR", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "11", "priceCurrency": "INR", "unitText": "per kilometer" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SUV Car Rental", "description": "6-7 passenger SUV rental starting ₹15/km" }, "price": "15", "priceCurrency": "INR", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "15", "priceCurrency": "INR", "unitText": "per kilometer" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tempo Traveller Rental", "description": "12-26 passenger tempo traveller starting ₹23/km" }, "price": "20", "priceCurrency": "INR", "priceSpecification": { "@type": "UnitPriceSpecification", "price": "20", "priceCurrency": "INR", "unitText": "per kilometer" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Manali Tour Package", "description": "5 Days 4 Nights Manali tour from Mumbai" }, "price": "9999", "priceCurrency": "INR" },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Kashmir Tour Package", "description": "5 Days 4 Nights Kashmir tour from Delhi" }, "price": "16999", "priceCurrency": "INR" },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rajasthan Tour Package", "description": "7 Days 6 Nights Rajasthan tour from Jaipur" }, "price": "19999", "priceCurrency": "INR" }
      ]
    },
  }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className={fraunces.variable}>
      <head>
        {/* Resource Hints for Performance */}
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        {/* GA4's gtag.js is on the measurement path, so pay the TLS handshake
            up front rather than at request time — dns-prefetch alone only
            resolves DNS and still leaves a full connect before the first hit. */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//media.istockphoto.com" />
        <link rel="dns-prefetch" href="//img.freepik.com" />
        <link rel="dns-prefetch" href="//upload.wikimedia.org" />
        <link rel="dns-prefetch" href="//stimg.cardekho.com" />
        {/* Single consolidated structured data script - reduces DOM nodes & parse time */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WBN5ZTSC"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {/* Analytics bootstrap. Defines dataLayer and gtag() before any runtime
            arrives so an event fired by a fast-clicking visitor is queued rather
            than dropped. Every tracking call in src/utilis/analytics.js goes
            through window.gtag, so this must exist first. */}
        <Script strategy="afterInteractive" id="analytics-bootstrap">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
          `}
        </Script>

        {/* GA4 — direct gtag.js, afterInteractive, NOT deferred behind an
            interaction gate.

            History, so this is not "optimised" away again: a previous pass
            deleted this block on the assumption that the GTM container carried
            the GA4 configuration tag. It does not. With the direct tag gone the
            property recorded essentially nothing — reported visits collapsed to
            single digits — because a bare dataLayer.push of gtag-style
            arguments is not a GA4 hit and GTM never turned it into one.

            The timing is equally deliberate. An earlier experiment moved GA4 to
            lazyOnload and active users fell to ~150/day against a Search
            Console-implied 330+, since short mobile visits ended before the
            load event. afterInteractive counts those sessions. */}
        <Script
          id="ga4-lib"
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        />
        <Script strategy="afterInteractive" id="ga-init">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
            window.gtag('js', new Date());
            window.gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
            // Google Ads conversion config — deferred out of the paint window.
            //
            // Measured on the live site (Week 50): this config triggers its own
            // 162 KB gtag fetch and 945 ms of script evaluation on the distance
            // template, inside the LCP window. The largest paint on these pages is
            // a paragraph of TEXT, delivered by the server in 319 ms, with the font
            // done at 737 ms and no render-blocking resources — yet LCP measured
            // 7.2-7.7 s. Nothing was blocking the paint except a main thread busy
            // executing tag scripts.
            //
            // This is a CONVERSION tag, not a measurement tag: it fires when
            // somebody calls, books or submits, which is always seconds after the
            // page has painted. Loading it during paint buys nothing and costs the
            // largest paint on every template.
            //
            // GA4 above is deliberately NOT moved. Lazy-loading it once cut reported
            // active users to roughly 150/day against a Search Console-implied 330+,
            // and short mobile sessions were the ones lost. That stays afterInteractive
            // until its timing is trialled separately and the counting is checked.
            var adsLoaded = false;
            function loadAdsTag() {
              if (adsLoaded) return;
              adsLoaded = true;
              ['pointerdown', 'keydown', 'touchstart'].forEach(function (e) {
                window.removeEventListener(e, loadAdsTag, true);
              });
              window.gtag('config', 'AW-17336319883');
            }
            ['pointerdown', 'keydown', 'touchstart'].forEach(function (e) {
              window.addEventListener(e, loadAdsTag, { once: true, passive: true, capture: true });
            });
            // Backstop: a visitor who converts by phone without ever tapping the page
            // still needs the tag present, so it loads regardless shortly after paint.
            window.setTimeout(loadAdsTag, 3500);
          `}
        </Script>

        {/* Google Tag Manager — container only, and safe to defer because GA4
            measurement no longer depends on it. Loads on the first real user
            action, with a five-second backstop. Scroll is not a trigger because
            audits and browsers can emit it inside the LCP window without any
            user intent. */}
        <Script strategy="afterInteractive" id="gtm-loader">
          {`
            (function (w, d) {
              w.dataLayer = w.dataLayer || [];
              var loaded = false;
              var events = ['pointerdown', 'keydown', 'touchstart'];
              function loadTags() {
                if (loaded) return;
                loaded = true;
                events.forEach(function (eventName) {
                  w.removeEventListener(eventName, loadTags, true);
                });
                w.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
                var script = d.createElement('script');
                script.async = true;
                script.src = 'https://www.googletagmanager.com/gtm.js?id=GTM-WBN5ZTSC';
                d.head.appendChild(script);
              }
              events.forEach(function (eventName) {
                w.addEventListener(eventName, loadTags, { once: true, passive: true, capture: true });
              });
              w.setTimeout(loadTags, 5000);
            })(window, document);
          `}
        </Script>

        <Suspense fallback={null}>
          <PageTracker />
          <WebVitalsReporter />
        </Suspense>
        <div className="App min-h-screen flex flex-col">
          <StickyCtaProvider>
            <SeasonalBanner />
            <Header seasonalNav={getSeasonalNavItems(new Date(), 8)} />
            <main id="main-content" className="flex-grow pb-[64px] md:pb-0" role="main">
              {children}
            </main>
            <Suspense fallback={null}>
              <AutoRelatedFooter />
              <WhatsAppFloat phoneNumber="7668570551" />
              <DesktopQuoteButton />
              <MobileStickyBar />
            </Suspense>
            <PageUpdatedLine />
            <Footer seasonLinks={getSeasonalFooterLinks(new Date())} />
          </StickyCtaProvider>
        </div>
        <ServiceWorkerRegistration />
        <ResponsiveTables />
      </body>
    </html>
  );
}
