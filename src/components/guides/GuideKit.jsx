// Server components. No hooks, no browser APIs, no animation library — every
// hover treatment is a CSS transition, nothing loops, and the hero photograph
// is a plain priority <Image> so it is in the first server-rendered paint.
//
// Week 48 guide kit — the building blocks behind the twenty-five guides.
// Dressed by one of three moods from guideThemes.js (road-trip board,
// festival night, highway log). See GuidePage.jsx for how they are composed.

import Link from 'next/link';
import Image from 'next/image';
import {
  Phone, MapPin, Clock, ArrowRight, Calendar, ChevronRight, Sparkles, Route, Users,
} from '@/components/ui/icons';
import { WhatsAppIcon } from '@/components/ui/icons';
import DataTable from '@/components/seo/DataTable';

export const PHONE = '7668570551';
export const wa = (text) => `https://wa.me/917668570551?text=${encodeURIComponent(text)}`;

const CTA_BASE =
  'sheen inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-black transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]';
const GHOST_BASE =
  'inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border px-5 py-2.5 text-sm font-bold backdrop-blur-sm transition-colors';

function fmtDate(iso) {
  if (!iso) return '';
  const d = new Date(`${iso}T00:00:00+05:30`);
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' });
}

/* ── Hero ─────────────────────────────────────────────────────────────── */
export function GuideHero({ guide, theme }) {
  const waText = guide.waText || `Hi, I read "${guide.title}" on trivenicabs.in and want a cab quote.`;
  return (
    <section className={`relative flex min-h-[100svh] flex-col overflow-hidden ${theme.heroBase}`}>
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src={guide.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className={`absolute inset-0 ${theme.scrim}`} />
        <div className={`absolute inset-y-0 left-0 w-full lg:w-3/4 ${theme.scrimSide}`} />
      </div>
      <div className={`absolute inset-x-0 top-0 z-20 h-1.5 ${theme.lane}`} aria-hidden="true" />

      {/* The hero is sized to one viewport (100svh) and the content sits at its
          foot; type and spacing scale with the screen so the headline, answer,
          buttons and key facts all fit without scrolling on a phone or a laptop. */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-4 pb-6 pt-20 sm:px-6 md:pb-10 md:pt-24">
        <GuideCrumb guide={guide} theme={theme} />

        <div className="grid items-end gap-5 lg:grid-cols-5 lg:gap-8">
          <div className="lg:col-span-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] ${theme.chip}`}>
                <span className={`h-1.5 w-1.5 rounded-full ${theme.chipDot}`} aria-hidden="true" />
                {guide.eyebrow}
              </span>
              {guide.dateBadge && (
                <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-bold ${theme.chip}`}>
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  {guide.dateBadge}
                </span>
              )}
            </div>

            <h1 className="speakable-headline font-display-serif mt-4 text-balance text-[clamp(1.75rem,5vw,3.75rem)] font-black leading-[1.05] tracking-tight text-white">
              {guide.titleLead ? (
                <>
                  <span className="block">{guide.titleLead}</span>
                  <span className={`block ${theme.heroAccent}`}>{guide.titleAccent}</span>
                </>
              ) : (
                guide.title
              )}
            </h1>

            <p className={`direct-answer speakable-lead mt-3 max-w-2xl text-sm leading-relaxed sm:text-base lg:text-[1.05rem] ${theme.heroSub}`}>
              {guide.lead}
            </p>

            <div className="mt-5 flex flex-wrap gap-2 sm:gap-3">
              <a href={wa(waText)} className={`${CTA_BASE} ${theme.cta}`}>
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp a quote
              </a>
              <a href={`tel:+91${PHONE}`} className={`${GHOST_BASE} ${theme.ctaGhost}`}>
                <Phone className="h-4 w-4" />
                Call {PHONE}
              </a>
            </div>

            <p className={`mt-3 text-[11px] ${theme.crumb}`}>
              Updated <time dateTime={guide.updatedOn || guide.publishedOn}>{fmtDate(guide.updatedOn || guide.publishedOn)}</time>
              {' · '}Fares from the published rate card, Sedan ₹11/km to Tempo ₹23/km
            </p>
          </div>

          {Array.isArray(guide.keyFacts) && guide.keyFacts.length > 0 && (
            <div className="lg:col-span-2">
              <dl className={`key-facts key-stats grid grid-cols-2 gap-2 rounded-3xl border p-3 backdrop-blur-md ${theme.factCard}`}>
                {guide.keyFacts.map((f) => (
                  <div key={f.label} className="rounded-2xl bg-black/20 px-3 py-2">
                    <dt className={`text-[10px] font-black uppercase tracking-[0.18em] ${theme.factLabel}`}>{f.label}</dt>
                    <dd className={`font-display-serif mt-0.5 text-base font-black leading-tight sm:text-lg ${theme.factValue}`}>{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function GuideCrumb({ guide, theme }) {
  const trail = [{ name: 'Home', url: '/' }, ...(guide.crumbs || [])];
  return (
    <nav aria-label="Breadcrumb" className={`mb-3 flex flex-wrap items-center gap-1.5 text-xs ${theme.crumb}`}>
      {trail.map((t) => (
        <span key={t.url} className="inline-flex items-center gap-1.5">
          <Link href={t.url} className="hover:underline">{t.name}</Link>
          <ChevronRight className="h-3 w-3 opacity-60" aria-hidden="true" />
        </span>
      ))}
      <span className="font-semibold text-white/90">{guide.crumbName || guide.title}</span>
    </nav>
  );
}

/* ── Mood divider — pins, diyas or road markings ─────────────────────── */
export function MoodDivider({ theme, label }) {
  return (
    <div className={`${theme.divider} px-4 py-3`} aria-hidden="true">
      <div className="mx-auto flex max-w-7xl items-center gap-3">
        <div className="flex flex-1 items-center gap-2 overflow-hidden">
          {Array.from({ length: 18 }).map((_, i) => (
            <span
              key={i}
              className={`${theme.dividerDots} ${theme.motif === 'kmpost' ? 'h-1 w-8 rounded-sm' : theme.motif === 'diya' ? 'h-1.5 w-1.5 rounded-full' : 'h-2 w-2 rounded-full'} shrink-0 opacity-80`}
            />
          ))}
        </div>
        {label && <span className="shrink-0 text-[10px] font-black uppercase tracking-[0.24em] text-white/70">{label}</span>}
      </div>
    </div>
  );
}

/* ── Section heading with the big serif numeral ───────────────────────── */
export function SectionHead({ theme, index, eyebrow, title, intro, tone = 'light' }) {
  const dark = tone === 'dark';
  return (
    <div className="relative mb-8 max-w-3xl">
      {typeof index === 'number' && (
        <span className={`font-display-serif pointer-events-none absolute -left-2 -top-8 select-none text-[6rem] font-black leading-none ${dark ? 'text-white/10' : theme.numeral}`} aria-hidden="true">
          {String(index).padStart(2, '0')}
        </span>
      )}
      {eyebrow && (
        <p className={`relative inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.22em] ${dark ? 'text-white/70' : theme.eyebrow}`}>
          <span className={`h-px w-7 ${dark ? 'bg-white/40' : theme.rule}`} aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display-serif relative mt-2 text-balance text-[1.7rem] font-black leading-[1.12] tracking-tight sm:text-4xl ${dark ? 'text-white' : theme.heading}`}>
        {title}
      </h2>
      {intro && <p className={`relative mt-3 text-sm leading-relaxed sm:text-base ${dark ? 'text-white/75' : 'text-slate-600'}`}>{intro}</p>}
    </div>
  );
}

/* ── Photo place card (road-trip board) ───────────────────────────────── */
export function PlaceCard({ place, theme }) {
  const Wrapper = place.href ? Link : 'div';
  const wrapProps = place.href ? { href: place.href } : {};
  return (
    <Wrapper
      {...wrapProps}
      className={`group flex flex-col overflow-hidden rounded-3xl border shadow-[0_14px_40px_-28px_rgba(15,23,42,0.45)] transition-all duration-300 ${theme.card} ${theme.cardHover}`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={place.image}
          alt={place.alt || `${place.name}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className={`absolute inset-0 ${theme.cardPhotoScrim}`} aria-hidden="true" />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {place.distance && (
            <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-black backdrop-blur ${theme.pill}`}>
              <MapPin className="h-3 w-3" aria-hidden="true" />{place.distance}
            </span>
          )}
          {place.time && (
            <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-black backdrop-blur ${theme.pill}`}>
              <Clock className="h-3 w-3" aria-hidden="true" />{place.time}
            </span>
          )}
        </div>
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="font-display-serif text-2xl font-black leading-tight text-white drop-shadow">{place.name}</h3>
          {place.bestFor && <p className="mt-0.5 text-xs font-semibold text-white/80">{place.bestFor}</p>}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm leading-relaxed text-slate-600">{place.blurb}</p>
        {Array.isArray(place.highlights) && place.highlights.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {place.highlights.map((h) => (
              <li key={h} className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${theme.tag}`}>{h}</li>
            ))}
          </ul>
        )}
        <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
          <span className="text-sm font-black text-slate-900">{place.fare ? <>Sedan from <span>{place.fare}</span></> : place.note}</span>
          {place.href && (
            <span className={`inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider ${theme.link}`}>
              {place.cta || 'Book'} <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </span>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export function BandSection({ band, theme, index, alt = false }) {
  return (
    <section className={`px-4 py-14 sm:px-6 ${alt ? theme.bandAlt : theme.band}`} aria-labelledby={`band-${index}`}>
      <div className="mx-auto max-w-7xl">
        <div className="relative mb-8 max-w-3xl">
          <span className={`font-display-serif pointer-events-none absolute -left-2 -top-8 select-none text-[6rem] font-black leading-none ${theme.numeral}`} aria-hidden="true">
            {String(index).padStart(2, '0')}
          </span>
          {band.eyebrow && (
            <p className={`relative inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.22em] ${theme.eyebrow}`}>
              <span className={`h-px w-7 ${theme.rule}`} aria-hidden="true" />{band.eyebrow}
            </p>
          )}
          <h2 id={`band-${index}`} className={`font-display-serif relative mt-2 text-balance text-[1.7rem] font-black leading-[1.12] tracking-tight sm:text-4xl ${theme.heading}`}>
            {band.heading}
          </h2>
          {band.note && <p className="relative mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{band.note}</p>}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {band.places.map((p) => (
            <PlaceCard key={p.name} place={p} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Kilometre-post ribbon (highway log) ───────────────────────────────── */
export function RouteRibbon({ items, theme, title, eyebrow, intro }) {
  if (!Array.isArray(items) || !items.length) return null;
  return (
    <section className={`px-4 py-14 sm:px-6 ${theme.band}`} aria-label="Route, kilometre by kilometre">
      <div className="mx-auto max-w-6xl">
        <SectionHead theme={theme} eyebrow={eyebrow || 'The road, in order'} title={title} intro={intro} />
        <ol className="relative">
          <div className={`absolute bottom-0 left-[3.25rem] top-0 w-1 rounded-full sm:left-[4.5rem] ${theme.ribbonRail}`} aria-hidden="true" />
          {items.map((it, i) => (
            <li key={`${it.km}-${it.name}`} className="relative flex gap-5 pb-10 last:pb-0 sm:gap-8">
              <div className="flex w-[6.5rem] shrink-0 flex-col items-center sm:w-36">
                <span className={`relative z-10 inline-flex min-w-[4.5rem] flex-col items-center rounded-xl px-2 py-1.5 text-center shadow-lg sm:min-w-[6rem] ${theme.ribbonPost}`}>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] opacity-70">km</span>
                  <span className="font-display-serif text-xl font-black leading-none sm:text-2xl">{it.km}</span>
                </span>
              </div>
              <div className={`flex-1 overflow-hidden rounded-3xl border ${theme.card} shadow-[0_14px_40px_-28px_rgba(15,23,42,0.45)] transition-all duration-300 ${theme.cardHover}`}>
                <div className={`grid ${it.image ? 'md:grid-cols-5' : ''}`}>
                  {it.image && (
                    <div className="relative aspect-[16/10] md:col-span-2 md:aspect-auto md:min-h-[12rem]">
                      <Image src={it.image} alt={it.alt || it.name} fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" />
                      {it.tag && <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-black backdrop-blur ${theme.pill}`}>{it.tag}</span>}
                    </div>
                  )}
                  <div className={`p-5 ${it.image ? 'md:col-span-3' : ''}`}>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-display-serif text-xl font-black text-slate-900 sm:text-2xl">{it.name}</h3>
                      {it.time && <span className={`rounded-full border px-2 py-0.5 text-[11px] font-bold ${theme.tag}`}>{it.time}</span>}
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{it.text}</p>
                    {it.stop && <p className={`mt-3 text-xs font-black uppercase tracking-wider ${theme.eyebrow}`}>Halt: {it.stop}</p>}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ── Lantern cards (festival night) ────────────────────────────────────── */
export function LanternGrid({ items, theme, title, eyebrow, intro }) {
  if (!Array.isArray(items) || !items.length) return null;
  return (
    <section className={`${theme.heroBase} px-4 py-14 sm:px-6`} aria-label="The moments that matter">
      <div className="mx-auto max-w-7xl">
        <SectionHead theme={theme} tone="dark" eyebrow={eyebrow || 'The moments'} title={title} intro={intro} />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <article
              key={it.title}
              className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] transition-all duration-300 hover:-translate-y-0.5 ${theme.lanternGlow} ${i === 0 ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2' : ''}`}
            >
              <div className={`relative w-full overflow-hidden ${i === 0 ? 'aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[26rem]' : 'aspect-[4/3]'}`}>
                <Image src={it.image} alt={it.alt || it.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#150B2E] via-[#150B2E]/35 to-transparent" aria-hidden="true" />
                {it.when && (
                  <span className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-black ${theme.pill2}`}>
                    <Calendar className="h-3.5 w-3.5" aria-hidden="true" />{it.when}
                  </span>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-display-serif text-2xl font-black leading-tight text-white">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/80">{it.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Prose section with question-shaped H2 and optional figure ────────── */
export function ProseSection({ section, theme, index, alt = false }) {
  const hasImage = section.image && section.image.src;
  return (
    <section className={`px-4 py-12 sm:px-6 ${alt ? theme.bandAlt : theme.band}`}>
      <div className={`mx-auto max-w-7xl ${hasImage ? 'grid items-center gap-10 lg:grid-cols-5' : ''}`}>
        <div className={hasImage ? (section.image.side === 'left' ? 'lg:order-2 lg:col-span-3' : 'lg:col-span-3') : 'mx-auto max-w-3xl'}>
          <SectionHead theme={theme} index={index} eyebrow={section.eyebrow} title={section.heading} />
          <div className="space-y-4 text-[15px] leading-relaxed text-slate-700 sm:text-base">
            {(section.paras || []).map((p, i) => <p key={i}>{p}</p>)}
            {Array.isArray(section.bullets) && section.bullets.length > 0 && (
              <ul className="space-y-2">
                {section.bullets.map((b, i) => (
                  <li key={i} className="flex gap-3">
                    <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${theme.dividerDots}`} aria-hidden="true" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {section.link && (
              <p>
                <Link href={section.link.href} className={`inline-flex items-center gap-1 font-black ${theme.link}`}>
                  {section.link.label} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </p>
            )}
          </div>
        </div>
        {hasImage && (
          <figure className={`${section.image.side === 'left' ? 'lg:order-1' : ''} lg:col-span-2`}>
            <div className={`group relative aspect-[4/3] overflow-hidden rounded-3xl border shadow-[0_24px_60px_-30px_rgba(15,23,42,0.55)] ${theme.card}`}>
              <Image src={section.image.src} alt={section.image.alt || ''} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
              {section.image.tag && <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-black backdrop-blur ${theme.pill}`}>{section.image.tag}</span>}
            </div>
            {section.image.caption && <figcaption className="mt-2 text-xs text-slate-500">{section.image.caption}</figcaption>}
          </figure>
        )}
      </div>
    </section>
  );
}

/* ── The table with the numbers ────────────────────────────────────────── */
export function GuideTable({ table, theme, alt = false }) {
  if (!table || !Array.isArray(table.rows) || table.rows.length < 2) return null;
  return (
    <section className={`px-4 py-12 sm:px-6 ${alt ? theme.bandAlt : theme.band}`}>
      <div className="mx-auto max-w-5xl">
        <DataTable
          title={table.title}
          caption={table.caption}
          intro={table.intro}
          columns={table.columns}
          rows={table.rows}
          footnote={table.footnote}
          tone="light"
        />
      </div>
    </section>
  );
}

/* ── Fare box ──────────────────────────────────────────────────────────── */
export function FareBox({ fare, rows, theme }) {
  if (!fare || !rows.length) return null;
  const hasRound = rows.some((r) => r.roundTrip);
  const waText = fare.waText || `Hi, I want a quote for ${fare.title}.`;
  return (
    <section className={`px-4 py-14 sm:px-6 ${theme.fareBox}`} aria-labelledby="fare-box">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className={`inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.22em] ${theme.fareAccent}`}>
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> Fare box
          </p>
          <h2 id="fare-box" className="font-display-serif mt-2 text-balance text-[1.7rem] font-black leading-[1.12] tracking-tight text-white sm:text-4xl">
            {fare.title}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/75">{fare.note}</p>
          <ul className="mt-5 space-y-2 text-sm text-white/80">
            <li className="flex gap-2"><Route className={`mt-0.5 h-4 w-4 shrink-0 ${theme.fareAccent}`} aria-hidden="true" />Outstation trips bill a 300 km/day minimum; tolls, parking and state permits are extra at actual.</li>
            <li className="flex gap-2"><Users className={`mt-0.5 h-4 w-4 shrink-0 ${theme.fareAccent}`} aria-hidden="true" />Driver allowance and fuel are included. No advance for most bookings; pay after the trip.</li>
            <li className="flex gap-2"><Clock className={`mt-0.5 h-4 w-4 shrink-0 ${theme.fareAccent}`} aria-hidden="true" />Fixed fares, no festival or weekend surge.</li>
          </ul>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href={wa(waText)} className={`${CTA_BASE} ${theme.cta}`}>
              <WhatsAppIcon className="h-5 w-5" /> {fare.cta || 'Get the exact fare'}
            </a>
            {fare.bookHref && (
              <Link href={fare.bookHref} className={`${GHOST_BASE} ${theme.ctaGhost}`}>
                {fare.bookLabel || 'Open the booking page'} <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            )}
          </div>
        </div>
        <div className="sm:overflow-x-auto lg:col-span-3">
          <table className="w-full min-w-[32rem] border-collapse text-left text-sm rt-stack">
            <caption className="sr-only">{fare.caption || `${fare.title} — fare by vehicle`}</caption>
            <thead>
              <tr className={`text-[10px] font-black uppercase tracking-[0.18em] ${theme.fareHead}`}>
                <th scope="col" className="pb-3 pr-4">Vehicle</th>
                <th scope="col" className="pb-3 pr-4">Seats</th>
                <th scope="col" className="pb-3 pr-4">Rate</th>
                <th scope="col" className="pb-3 pr-4">{fare.oneWayLabel || 'One-way fare'}</th>
                {hasRound && <th scope="col" className="pb-3">{fare.roundLabel || 'Round trip'}</th>}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.vehicle} className={`border-t ${theme.fareRow}`}>
                  <th scope="row" className="py-3 pr-4 font-bold text-white">{r.vehicle}</th>
                  <td className="py-3 pr-4 text-white/80">{r.seats}</td>
                  <td className="py-3 pr-4 text-white/80">{r.rate}</td>
                  <td className={`font-display-serif py-3 pr-4 text-lg font-black ${theme.fareAccent}`}>{r.fare}</td>
                  {hasRound && <td className="py-3 text-white/90">{r.roundTrip || '—'}</td>}
                </tr>
              ))}
            </tbody>
          </table>
          {fare.footnote && <p className="mt-3 text-xs text-white/60">{fare.footnote}</p>}
        </div>
      </div>
    </section>
  );
}

/* ── Editorial photo mosaic ────────────────────────────────────────────── */
export function GalleryMosaic({ items, theme, title, eyebrow, intro, alt = false }) {
  if (!Array.isArray(items) || !items.length) return null;
  return (
    <section className={`px-4 py-14 sm:px-6 ${alt ? theme.bandAlt : theme.band}`} aria-label="Photographs">
      <div className="mx-auto max-w-7xl">
        <SectionHead theme={theme} eyebrow={eyebrow || 'In pictures'} title={title} intro={intro} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((g, i) => (
            <figure
              key={g.title}
              className={`group relative overflow-hidden rounded-3xl border shadow-[0_14px_40px_-28px_rgba(15,23,42,0.45)] transition-all duration-300 ${theme.card} ${theme.cardHover} ${i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}
            >
              <div className={`relative w-full ${i === 0 ? 'aspect-[4/3] sm:aspect-auto sm:h-full sm:min-h-[24rem]' : 'aspect-[4/3]'}`}>
                <Image src={g.image} alt={g.alt || g.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                <div className={`absolute inset-0 ${theme.cardPhotoScrim}`} aria-hidden="true" />
                {g.tag && <span className={`absolute left-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-black backdrop-blur ${theme.galleryTag}`}>{g.tag}</span>}
                <figcaption className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display-serif text-lg font-black leading-tight text-white sm:text-xl">{g.title}</h3>
                  {g.text && <p className="mt-1 text-xs leading-relaxed text-white/80 sm:text-sm">{g.text}</p>}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Three tips band ───────────────────────────────────────────────────── */
export function TipsBand({ tips, theme, title }) {
  if (!Array.isArray(tips) || !tips.length) return null;
  return (
    <section className={`px-4 py-10 sm:px-6 ${theme.tipsBand}`} aria-label="Practical notes">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className={`inline-flex items-center gap-2 rounded-full border bg-white/70 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] ${theme.tipsBorder} ${theme.eyebrow}`}>
            <span aria-hidden="true">{theme.glyph}</span> From the drivers
          </span>
          <h2 className="font-display-serif text-lg font-black text-slate-900 sm:text-xl">{title || 'Three things the drivers would tell you'}</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {tips.map((t) => (
            <div key={t.title} className={`rounded-2xl border bg-white/85 p-5 shadow-[0_12px_40px_-28px_rgba(15,23,42,0.35)] transition-shadow hover:shadow-[0_18px_50px_-24px_rgba(15,23,42,0.45)] ${theme.tipsBorder}`}>
              <div className={`mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm font-black ${theme.tipsIcon}`} aria-hidden="true">{theme.glyph}</div>
              <h3 className="text-base font-black text-slate-900">{t.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Related pages: photo chips for the money pages, list for guides ───── */
export function RelatedBand({ related, guides, theme, title }) {
  const hasRelated = Array.isArray(related) && related.length > 0;
  const hasGuides = Array.isArray(guides) && guides.length > 0;
  if (!hasRelated && !hasGuides) return null;
  return (
    <section className={`px-4 py-14 sm:px-6 ${theme.bandAlt}`} aria-label="Related pages">
      <div className="mx-auto max-w-7xl">
        <SectionHead theme={theme} eyebrow="Where to go next" title={title || 'Book the trip, or keep reading'} />
        {hasRelated && (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className={`group flex items-center gap-3 overflow-hidden rounded-2xl border p-2 pr-4 transition-all duration-300 ${theme.card} ${theme.cardHover}`}>
                  <span className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl">
                    <Image src={r.img || '/images/citypage_hero_section_image.jpg'} alt="" fill sizes="80px" className="object-cover transition-transform duration-500 group-hover:scale-[1.06]" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-black leading-snug text-slate-900">{r.label}</span>
                    {r.sub && <span className="mt-0.5 block text-xs text-slate-500">{r.sub}</span>}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
        {hasGuides && (
          <div className="mt-8">
            <p className={`text-[11px] font-black uppercase tracking-[0.22em] ${theme.eyebrow}`}>More Week 48 guides</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {guides.map((g) => (
                <li key={g.href}>
                  <Link href={g.href} className={`inline-flex items-center gap-1.5 rounded-full border bg-white px-3 py-1.5 text-xs font-bold transition-colors ${theme.tag} hover:bg-white/60`}>
                    {g.label} <ChevronRight className="h-3 w-3" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
