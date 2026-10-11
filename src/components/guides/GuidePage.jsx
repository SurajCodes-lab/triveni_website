// Server component. Composes one Week 48 guide from its data object.
//
// Order of the page, top to bottom: photo hero with the direct answer and the
// key-facts box → mood divider → the mood's signature block (drive-time bands
// of photo cards, festival lantern cards, or the kilometre-post ribbon) → the
// table with the numbers → question-shaped prose sections → fare box → photo
// mosaic → three driver tips → seasonal call-out when a campaign is live →
// FAQ → related money pages and sister guides.
//
// Every internal link is checked against the build manifest before it is
// rendered (Week 47 rule: never emit a link to a page that was not built).

import { getGuideTheme } from './guideThemes';
import {
  GuideHero, MoodDivider, BandSection, RouteRibbon, LanternGrid, ProseSection,
  GuideTable, FareBox, GalleryMosaic, TipsBand, RelatedBand, SectionHead,
} from './GuideKit';
import { FAQSection } from '@/components/seo/FAQSection';
import { SetStickyCta } from '@/components/ui/StickyCtaContext';
import SeasonalCorridorCallout from '@/components/seasonal/SeasonalCorridorCallout';
import { getSeasonalCorridorCallout } from '@/utilis/seasonalCorridors';
import { routeExists } from '@/lib/seo/route-exists';
import { buildGuideSchemaGraph, computeFareRows, sedanFare } from '@/lib/seo/guide-schema';
import { getWeek48Guide } from '@/utilis/guides/week48';
import { getWeek49Guide } from '@/utilis/guides/week49';

const keepLink = (o) => !o || !o.href || routeExists(o.href);

// A place card may give a one-way distance instead of a fare; the fare is then
// computed from the canonical policy so it agrees with the booking pages.
function withFare(p) {
  if (p.fare || !p.km) return p;
  return { ...p, fare: sedanFare(p.km) };
}

function sisterGuides(guide) {
  return (guide.guides || [])
    .map((slug) => getWeek48Guide(slug) || getWeek49Guide(slug))
    .filter((g) => g && g.path !== guide.path && routeExists(g.path))
    .map((g) => ({ label: g.crumbName || g.title, href: g.path }));
}

export default function GuidePage({ guide }) {
  const theme = getGuideTheme(guide.mood);
  const fareRows = computeFareRows(guide.fare);
  const graph = buildGuideSchemaGraph(guide);

  const bands = (guide.bands || []).map((b) => ({ ...b, places: (b.places || []).map((p) => withFare(keepLink(p) ? p : { ...p, href: undefined })) }));
  const related = (guide.related || []).filter(keepLink);
  const guides = sisterGuides(guide);
  const fare = guide.fare && guide.fare.bookHref && !routeExists(guide.fare.bookHref) ? { ...guide.fare, bookHref: undefined } : guide.fare;
  const sections = (guide.sections || []).map((s) => (s.link && !routeExists(s.link.href) ? { ...s, link: undefined } : s));
  const callout = guide.seasonalDestination ? getSeasonalCorridorCallout({ destination: guide.seasonalDestination, origin: guide.seasonalOrigin }) : null;

  let n = 0;
  const next = () => ++n;

  return (
    <div className={`min-h-screen ${theme.page}`}>
      {graph.map((node, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(node) }} />
      ))}
      <SetStickyCta price={guide.stickyPrice || 'From ₹11/km'} label={guide.stickyLabel || guide.crumbName || 'Book a cab'} whatsappText={guide.waText || `Hi, I read "${guide.title}" and want a cab quote.`} />

      <GuideHero guide={guide} theme={theme} />
      <MoodDivider theme={theme} label={theme.name} />

      {guide.intro && guide.intro.length > 0 && (
        <section className={`px-4 py-12 sm:px-6 ${theme.band}`}>
          <div className="mx-auto max-w-3xl space-y-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            {guide.intro.map((p, i) => <p key={i} className={i === 0 ? 'font-display-serif text-lg font-semibold text-slate-900 sm:text-xl' : ''}>{p}</p>)}
          </div>
        </section>
      )}

      {bands.map((band, i) => (
        <BandSection key={band.heading} band={band} theme={theme} index={next()} alt={i % 2 === 1} />
      ))}

      {guide.lanterns && (
        <LanternGrid items={guide.lanterns} theme={theme} title={guide.lanternsTitle} eyebrow={guide.lanternsEyebrow} intro={guide.lanternsIntro} />
      )}

      {guide.timeline && (
        <RouteRibbon items={guide.timeline} theme={theme} title={guide.timelineTitle} eyebrow={guide.timelineEyebrow} intro={guide.timelineIntro} />
      )}

      {guide.table && <GuideTable table={guide.table} theme={theme} alt />}

      {sections.map((s, i) => (
        <ProseSection key={s.heading} section={s} theme={theme} index={next()} alt={i % 2 === 1} />
      ))}

      {fare && <FareBox fare={fare} rows={fareRows} theme={theme} />}

      {guide.gallery && (
        <GalleryMosaic items={guide.gallery} theme={theme} title={guide.galleryTitle} eyebrow={guide.galleryEyebrow} intro={guide.galleryIntro} />
      )}

      {guide.table2 && <GuideTable table={guide.table2} theme={theme} alt />}

      <TipsBand tips={guide.tips} theme={theme} title={guide.tipsTitle} />

      {callout && <SeasonalCorridorCallout callout={callout} />}

      {Array.isArray(guide.faqs) && guide.faqs.length > 0 && (
        <section className={`px-4 py-14 sm:px-6 ${theme.band}`} aria-label="Frequently asked questions">
          <div className="mx-auto max-w-4xl">
            <SectionHead theme={theme} eyebrow="Questions people ask" title={guide.faqTitle || 'Frequently asked questions'} />
            <FAQSection faqs={guide.faqs} title="" variant={theme.faqVariant} showSchema={false} defaultOpen={[0]} showContactCTA />
          </div>
        </section>
      )}

      <RelatedBand related={related} guides={guides} theme={theme} title={guide.relatedTitle} />
    </div>
  );
}
