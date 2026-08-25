"""Generate the client-facing Week 43 Premium Max SEO plan as a .docx."""
from docx import Document
from docx.shared import Pt, RGBColor, Inches
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

NAVY = RGBColor(0x12, 0x2A, 0x4A)
ACCENT = RGBColor(0xB1, 0x6A, 0x00)
GREY = RGBColor(0x55, 0x55, 0x55)
WHITE = RGBColor(0xFF, 0xFF, 0xFF)


def set_cell_bg(cell, hex_color):
    tc_pr = cell._tc.get_or_add_tcPr()
    shd = OxmlElement('w:shd')
    shd.set(qn('w:val'), 'clear')
    shd.set(qn('w:color'), 'auto')
    shd.set(qn('w:fill'), hex_color)
    tc_pr.append(shd)


def style_heading(p, size, color, bold=True, space_before=12, space_after=6):
    p.paragraph_format.space_before = Pt(space_before)
    p.paragraph_format.space_after = Pt(space_after)
    for run in p.runs:
        run.font.size = Pt(size)
        run.font.bold = bold
        run.font.color.rgb = color
        run.font.name = 'Calibri'


def add_para(doc, text, size=11, color=None, bold=False, italic=False,
             align=None, space_after=6, space_before=0):
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(space_after)
    p.paragraph_format.space_before = Pt(space_before)
    if align is not None:
        p.alignment = align
    r = p.add_run(text)
    r.font.size = Pt(size)
    r.font.bold = bold
    r.font.italic = italic
    if color is not None:
        r.font.color.rgb = color
    r.font.name = 'Calibri'
    return p


def add_bullet(doc, text, size=11, bold_lead=None):
    p = doc.add_paragraph(style='List Bullet')
    p.paragraph_format.space_after = Pt(3)
    if bold_lead:
        r = p.add_run(bold_lead)
        r.font.bold = True
        r.font.size = Pt(size)
        r.font.name = 'Calibri'
        r2 = p.add_run(text)
        r2.font.size = Pt(size)
        r2.font.name = 'Calibri'
    else:
        r = p.add_run(text)
        r.font.size = Pt(size)
        r.font.name = 'Calibri'
    return p


def add_table(doc, headers, rows, col_widths=None):
    t = doc.add_table(rows=1, cols=len(headers))
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    t.style = 'Table Grid'
    hdr = t.rows[0].cells
    for i, h in enumerate(headers):
        hdr[i].text = ''
        pr = hdr[i].paragraphs[0]
        run = pr.add_run(h)
        run.font.bold = True
        run.font.size = Pt(10)
        run.font.color.rgb = WHITE
        run.font.name = 'Calibri'
        set_cell_bg(hdr[i], '122A4A')
    for row in rows:
        cells = t.add_row().cells
        for i, val in enumerate(row):
            cells[i].text = ''
            pr = cells[i].paragraphs[0]
            run = pr.add_run(str(val))
            run.font.size = Pt(9.5)
            run.font.name = 'Calibri'
    if col_widths:
        for i, w in enumerate(col_widths):
            for row in t.rows:
                row.cells[i].width = Inches(w)
    return t


def h1(doc, text):
    p = doc.add_paragraph(text)
    style_heading(p, 18, NAVY, space_before=18, space_after=8)
    # bottom border
    pPr = p._p.get_or_add_pPr()
    pbdr = OxmlElement('w:pBdr')
    bottom = OxmlElement('w:bottom')
    bottom.set(qn('w:val'), 'single')
    bottom.set(qn('w:sz'), '6')
    bottom.set(qn('w:space'), '2')
    bottom.set(qn('w:color'), 'B16A00')
    pbdr.append(bottom)
    pPr.append(pbdr)
    return p


def h2(doc, text):
    p = doc.add_paragraph(text)
    style_heading(p, 13.5, ACCENT, space_before=12, space_after=4)
    return p


def h3(doc, text):
    p = doc.add_paragraph(text)
    style_heading(p, 11.5, NAVY, space_before=8, space_after=2)
    return p


def main():
    doc = Document()

    # base style
    normal = doc.styles['Normal']
    normal.font.name = 'Calibri'
    normal.font.size = Pt(11)

    # margins
    for s in doc.sections:
        s.top_margin = Inches(0.8)
        s.bottom_margin = Inches(0.8)
        s.left_margin = Inches(0.9)
        s.right_margin = Inches(0.9)

    # ---- Cover ----
    title = doc.add_paragraph()
    title.alignment = WD_ALIGN_PARAGRAPH.CENTER
    title.paragraph_format.space_before = Pt(60)
    r = title.add_run('Week 43 — Premium Max SEO Plan')
    r.font.size = Pt(30)
    r.font.bold = True
    r.font.color.rgb = NAVY
    r.font.name = 'Calibri'

    sub = doc.add_paragraph()
    sub.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = sub.add_run('Comprehensive On-Page SEO Program — Every Page, Every Item')
    r.font.size = Pt(15)
    r.font.color.rgb = ACCENT
    r.font.name = 'Calibri'
    sub.paragraph_format.space_after = Pt(40)

    for line, sz, col, bold in [
        ('Prepared for: Triveni Cabs (Client Review)', 12, GREY, False),
        ('Website: www.trivenicabs.in', 12, GREY, False),
        ('Platform: Next.js 15 · ~2,863 pages', 12, GREY, False),
        ('Week: 43 (Aug 17 – Aug 23, 2026)', 12, GREY, False),
        ('Tier: Premium Max SEO', 12, NAVY, True),
    ]:
        p = doc.add_paragraph()
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p.paragraph_format.space_after = Pt(3)
        r = p.add_run(line)
        r.font.size = Pt(sz)
        r.font.color.rgb = col
        r.font.bold = bold
        r.font.name = 'Calibri'

    doc.add_paragraph().paragraph_format.space_after = Pt(30)
    note = doc.add_paragraph()
    note.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = note.add_run('This document describes the plan for Week 43. '
                     'It builds on Weeks 41–42 and the August-15 speed & seasonal work.')
    r.font.size = Pt(10.5)
    r.font.italic = True
    r.font.color.rgb = GREY
    r.font.name = 'Calibri'

    doc.add_page_break()

    # ---- Talking points ----
    h1(doc, 'At a Glance — Read This First')
    add_para(doc,
             'In one line: Week 43 takes every on-page SEO item — titles, descriptions, '
             'structured data, headings, content depth, images, internal links, URLs, '
             'local SEO, and performance — from "present" to "fully audited, validated, '
             'and optimized" across all ~2,863 pages of the site.',
             size=12, space_after=10)

    add_para(doc, 'Key points for the client:', size=12, bold=True, space_after=6)
    for lead, rest in [
        ('All pages, every item. ',
         'We will audit and optimize every on-page SEO element across all ~2,863 pages — '
         'not one or two pages, but the whole site.'),
        ('Template-driven scale. ',
         'Because the site is template-based, each fix is made once at the template level '
         'and automatically applies to every page of that type — so "all 2,863 pages" is realistic in one week.'),
        ('Deeper than before. ',
         'Weeks 41–42 built the foundation (new gap pages, schema, titles, links). '
         'Week 43 goes deeper: validating, enriching, and optimizing each item to premium standard.'),
        ('Structured data expansion. ',
         'We will add Google rich-result structured data where it is missing — '
         'local business details for every city page, service/product details for vehicle & package pages, '
         'event details for festival pages, and reviews/ratings on more pages.'),
        ('Content & E-E-A-T. ',
         'Author bylines, "last updated" dates, sources, and direct-answer blocks for Google AI & voice search.'),
        ('Local SEO focus. ',
         'Every city page gets proper local business signals (name, address, phone, hours, geo-coordinates) '
         'so the site ranks in local/map results.'),
        ('Validation + indexing. ',
         'Every change validated with Google\'s own tools; sitemap re-submitted and indexing requested '
         'so Google re-crawls the improvements.'),
        ('No redesign. ',
         'Vehicle page redesign remains excluded as agreed — this is SEO and structured data only, no design change.'),
        ('Honest outcome. ',
         'This compounds the ranking recovery and supports the 2,000-visitors/day goal; '
         'sustained 2k/day also needs the Week-44+ content expansion.'),
    ]:
        add_bullet(doc, rest, bold_lead=lead)

    doc.add_page_break()

    # ---- What we cover ----
    h1(doc, '1. What Week 43 Covers — The Full On-Page SEO Checklist')
    add_para(doc,
             'Below is the complete list of on-page SEO items we will audit and optimize. '
             'Each item is applied across all relevant page types via the shared template layer, '
             'so the work scales to all ~2,863 pages.',
             space_after=10)

    # A. Metadata
    h2(doc, 'A. Page Metadata & Head Tags')
    add_table(doc,
              ['#', 'SEO Item', 'What We Will Do'],
              [
                  ['A1', 'Title tags', 'Audit length (≤60 chars), uniqueness, keyword placement, and click-through wording; rewrite weak titles'],
                  ['A2', 'Meta descriptions', 'Ensure every page has a unique, compelling description (≤155 chars) with a clear call-to-action'],
                  ['A3', 'Meta robots', 'Standardize instructions for search engines (index, follow, large image previews, full snippets) across all pages'],
                  ['A4', 'Canonical tags', 'Prevent duplicate-content issues; handle pagination and URL parameters correctly'],
                  ['A5', 'Open Graph (social previews)', 'Ensure WhatsApp/Facebook link previews show correct title, description, and image on every page'],
                  ['A6', 'Twitter cards', 'Complete and consistent Twitter/social previews site-wide'],
                  ['A7', 'Geo location tags', 'Add city name, region, and latitude/longitude metadata to every city and city-service page'],
                  ['A8', 'Language tags', 'Confirm correct language tagging (en-IN) across the site'],
                  ['A9', 'Favicon & manifest', 'Validate icons, web-app manifest, and theme color'],
                  ['A10', 'Preload key resources', 'Speed up the first paint by preloading the hero font and image per template'],
                  ['A11', 'Verification tokens', 'Re-validate Google Search Console & Bing verification on live pages'],
              ],
              col_widths=[0.5, 2.1, 4.0])

    # B. Structured data
    h2(doc, 'B. Structured Data (Google Rich Results)')
    add_table(doc,
              ['#', 'SEO Item', 'What We Will Do'],
              [
                  ['B1', 'Organization + Website', 'Validate sitewide identity schema; add sitelinks search box'],
                  ['B2', 'Breadcrumb navigation', 'Validate on every page type; fix any invalid entries'],
                  ['B3', 'Article / Blog schema', 'Validate; add word count, article excerpt, and image license'],
                  ['B4', 'FAQ schema', 'Ensure every page with FAQs has proper FAQ schema for rich results'],
                  ['B5', 'Service / Product + Offers', 'Add to vehicle, event, corporate, hire, and package pages (data only — no redesign)'],
                  ['B6', 'Ratings & Reviews', 'Add aggregate rating stars to service, vehicle, and package pages'],
                  ['B7', 'Local Business', 'Add full local business details (NAP, hours, geo, service area, price range) to every city page'],
                  ['B8', 'How-To guides', 'Add to itineraries and step-by-step guide pages'],
                  ['B9', 'Tourist Attractions / Places', 'Add to sightseeing and places-to-visit pages'],
                  ['B10', 'Events', 'Add to festival and seasonal pages (dates, location, offers)'],
                  ['B12', 'Validation', 'Run Google\'s Rich Results Test on one URL per page type; fix all errors and warnings'],
              ],
              col_widths=[0.5, 2.1, 4.0])

    # C. Headings & content
    h2(doc, 'C. Headings, Content & E-E-A-T')
    add_table(doc,
              ['#', 'SEO Item', 'What We Will Do'],
              [
                  ['C1', 'Single H1 per page', 'Audit every page type for duplicate or missing H1; ensure one keyword-rich headline'],
                  ['C2', 'Logical heading structure', 'Audit H2–H6 outline; fix inverted or broken hierarchies'],
                  ['C3', 'Content depth', 'Set minimum word-count targets per page type; flag thin pages for expansion'],
                  ['C4', 'Keyword mapping', 'Build a keyword-to-page map; ensure each page targets a distinct primary keyword'],
                  ['C5', 'Keyword salience', 'Check that the primary keyword is properly emphasized on each page'],
                  ['C6', 'E-E-A-T (trust signals)', 'Add author bylines, author credentials, "last updated" dates, and source citations to content pages'],
                  ['C7', 'Answer-engine optimization', 'Add direct-answer blocks (for Google AI & voice) to page types that lack them'],
                  ['C8', 'People Also Ask', 'Wire "People Also Ask" Q&A onto more page types'],
                  ['C9', 'Content freshness', 'Set a 90-day review schedule; flag stale pages for updates'],
                  ['C10', 'Duplicate / thin content', 'Run a full audit; merge, expand, or hide thin pages as needed'],
                  ['C11', 'Cannibalization audit', 'Find pages competing for the same keyword; consolidate to one canonical page per topic'],
                  ['C12', 'Orphan pages', 'Find pages with no internal links pointing to them; add links to rescue them'],
              ],
              col_widths=[0.5, 2.1, 4.0])

    # D. Images
    h2(doc, 'D. Image SEO')
    add_table(doc,
              ['#', 'SEO Item', 'What We Will Do'],
              [
                  ['D1', 'Alt text', 'Audit all images for missing or generic alt text; add descriptive alt text'],
                  ['D2', 'Image filenames', 'Audit and rename images with poor or non-descriptive filenames'],
                  ['D3', 'Format & compression', 'Re-export oversized hero images to modern format, target ≤200KB'],
                  ['D4', 'Responsive images', 'Audit the "sizes" attribute per template for correct mobile/desktop delivery'],
                  ['D5', 'Lazy loading & priority', 'Ensure below-fold images lazy-load; hero images load with priority'],
                  ['D6', 'Image dimensions', 'Prevent layout shift by ensuring all images have width/height'],
                  ['D7', 'Image sitemap', 'Validate the image sitemap covers all images; fix gaps'],
              ],
              col_widths=[0.5, 2.1, 4.0])

    # E. Internal linking
    h2(doc, 'E. Internal Linking & Navigation')
    add_table(doc,
              ['#', 'SEO Item', 'What We Will Do'],
              [
                  ['E1', 'Breadcrumbs', 'Audit visual breadcrumbs on every page type; add where missing'],
                  ['E2', 'Related content links', 'Add in-content related links to the ~10 templates missing them'],
                  ['E3', 'Anchor text', 'Audit link text; reduce generic "click here" in favor of descriptive keywords'],
                  ['E4', 'Link depth', 'Ensure no page is more than 3 clicks from the homepage'],
                  ['E5', 'Hub & spoke structure', 'Formalize pillar pages per service; link cluster pages up to the pillar'],
                  ['E6', 'Footer silo links', 'Audit footer link relevance per topic category'],
                  ['E7', 'Link equity distribution', 'Boost important money pages (city, vehicle, tempo) with more internal links from high-traffic pages'],
              ],
              col_widths=[0.5, 2.1, 4.0])

    # F. URLs
    h2(doc, 'F. URLs & Site Architecture')
    add_table(doc,
              ['#', 'SEO Item', 'What We Will Do'],
              [
                  ['F1', 'URL slugs', 'Audit dynamic slugs from data files; fix non-descriptive ones'],
                  ['F2', 'URL hierarchy', 'Audit nesting depth; flatten over-deep routes'],
                  ['F3', 'Pagination', 'Add proper canonical handling if any paginated pages exist'],
                  ['F4', 'Faceted / filter URLs', 'Audit search/filter pages; prevent indexing of low-value filter combinations'],
                  ['F5', 'Redirect map', 'Crawl for 404 errors; build a 301 redirect map for moved/merged pages'],
                  ['F6', 'Soft-404 audit', 'Find pages that return "OK" but have little or no content'],
                  ['F7', 'Canonicalization', 'Verify trailing-slash, www, and HTTPS consistency; enforce via redirects'],
                  ['F8', 'XML sitemap', 'Re-submit updated sitemap after Week-43 changes; include image entries'],
                  ['F9', 'robots.txt', 'Audit; block staging/junk; reference all sitemaps'],
              ],
              col_widths=[0.5, 2.1, 4.0])

    # G. Performance
    h2(doc, 'G. Technical Performance (On-Page)')
    add_table(doc,
              ['#', 'SEO Item', 'What We Will Do'],
              [
                  ['G1', 'Core Web Vitals', 'Run live speed audits; tune each template to all-green (LCP, INP, CLS)'],
                  ['G2', 'Render-blocking', 'Audit and defer non-critical CSS/JS'],
                  ['G3', 'JS/CSS bundle size', 'Schedule the deferred chunk-refactor (city hub 460KB → ~250KB) if QA time allows'],
                  ['G4', 'Font loading', 'Audit font preloading; prevent invisible-text delays'],
                  ['G5', 'Caching', 'Confirm CDN caching aligns with the site\'s incremental regeneration'],
                  ['G6', 'Mobile usability', 'Run mobile-friendly tests per template; fix tap-target and viewport issues'],
                  ['G7', 'Accessibility', 'Audit accessibility per template; fix critical issues (overlaps with SEO)'],
                  ['G8', 'Server response time', 'Measure time-to-first-byte; tune if slow'],
              ],
              col_widths=[0.5, 2.1, 4.0])

    # H. Local SEO
    h2(doc, 'H. Local SEO (City Pages)')
    add_table(doc,
              ['#', 'SEO Item', 'What We Will Do'],
              [
                  ['H1', 'Local Business schema', 'Add full local business details to every city page'],
                  ['H2', 'NAP consistency', 'Audit name/address/phone across all city pages; align with Google Business Profile'],
                  ['H3', 'City landing pages', 'Audit coverage; add missing high-value city pages'],
                  ['H4', 'Google Business Profile', 'Provide a NAP specification so the client can keep the listing consistent'],
                  ['H5', 'Location-specific content', 'Audit depth; add local landmarks and attractions per city'],
                  ['H6', 'City canonicalization', 'Re-audit near-me vs city-service canonicals to avoid self-competition'],
              ],
              col_widths=[0.5, 2.1, 4.0])

    # I. Measurement
    h2(doc, 'I. Measurement & Monitoring')
    add_table(doc,
              ['#', 'SEO Item', 'What We Will Do'],
              [
                  ['I1', 'GA4 events', 'Add conversion events (WhatsApp/call clicks); ensure scroll tracking'],
                  ['I2', 'Search Console', 'Submit sitemap; request indexing for all changed + seasonal URLs; monitor coverage'],
                  ['I3', 'Field Core Web Vitals', 'Build a GA4 dashboard for real-user speed by page type'],
                  ['I4', 'Speed budget gate', 'Wire speed-audit budgets as a pre-deploy check; block deploys that breach them'],
                  ['I5', 'Rank tracking', 'Set up rank tracking for the top 50 keywords'],
                  ['I6', 'Log file analysis', 'Analyze search-bot crawl behavior if server logs are available'],
                  ['I7', 'Schema validation in CI', 'Add an automated check that validates structured data per page type'],
                  ['I8', 'Broken-link monitoring', 'Set up a weekly crawl to catch 404s and broken links'],
              ],
              col_widths=[0.5, 2.1, 4.0])

    doc.add_page_break()

    # ---- Weekly schedule ----
    h1(doc, '2. The Week, Day by Day')
    add_para(doc,
             'The program runs Monday–Sunday, with each day focused on one major group of items. '
             'Each phase delivers a documented audit and template-level fixes that cascade to all pages of each type.',
             space_after=10)

    h2(doc, 'Monday — Metadata Deep-Audit & Fixes')
    add_bullet(doc, 'Crawl and audit titles, meta descriptions, canonicals, and social previews for one URL per page type.')
    add_bullet(doc, 'Fix weak/duplicate/over-length titles and descriptions at the template level.')
    add_bullet(doc, 'Add geo-location metadata to every city page.')
    add_bullet(doc, 'Standardize search-engine instructions across all pages.')
    add_bullet(doc, 'Deliverable: metadata audit report + fixed templates. Verified by re-checking live titles and a uniqueness report.')

    h2(doc, 'Tuesday — Structured Data Validation & Enrichment')
    add_bullet(doc, 'Run Google\'s Rich Results Test on one URL per page type; record all errors and warnings.')
    add_bullet(doc, 'Add missing schema: Local Business per city, Service/Product on vehicle & package pages, Ratings on service pages, Events on festival pages, Tourist Attractions on sightseeing pages.')
    add_bullet(doc, 'Add a sitelinks search box to the organization schema.')
    add_bullet(doc, 'Deliverable: schema coverage matrix + new schema. Verified by all-green Rich Results Tests.')

    h2(doc, 'Wednesday — Headings, Content, E-E-A-T & Answer Optimization')
    add_bullet(doc, 'Audit the H1–H6 outline per page type; fix duplicate/missing H1 and inverted hierarchies.')
    add_bullet(doc, 'Set content-depth targets per page type; flag thin pages for expansion.')
    add_bullet(doc, 'Build a keyword-to-page map; identify and consolidate cannibalizing pages.')
    add_bullet(doc, 'Add author bylines, author credentials, "last updated" dates, and source citations.')
    add_bullet(doc, 'Add direct-answer blocks for Google AI & voice to page types that lack them.')
    add_bullet(doc, 'Deliverable: heading audit + keyword map + E-E-A-T additions.')

    h2(doc, 'Thursday — Image SEO & Internal Linking')
    add_bullet(doc, 'Audit alt text, filenames, format, and dimensions across all images.')
    add_bullet(doc, 'Re-export oversized hero images; fix image sizing attributes; ensure lazy-loading and hero priority.')
    add_bullet(doc, 'Validate the image sitemap coverage.')
    add_bullet(doc, 'Add in-content related links to the ~10 templates missing them.')
    add_bullet(doc, 'Crawl link depth and orphan pages; rescue deep/orphan pages via hub links. Audit anchor text.')
    add_bullet(doc, 'Deliverable: image audit + internal-link depth report + fixes.')

    h2(doc, 'Friday — URLs, Architecture, Local SEO, Validation & Indexing')
    add_bullet(doc, 'Crawl for 404s, redirects, and soft-404s; build a 301 redirect map.')
    add_bullet(doc, 'Audit URL slugs from data files; fix non-descriptive ones.')
    add_bullet(doc, 'Add Local Business schema per city + audit NAP consistency.')
    add_bullet(doc, 'Re-validate robots.txt and sitemap; re-submit to Google Search Console.')
    add_bullet(doc, 'Request indexing for all Week-43 changed URLs + seasonal URLs.')
    add_bullet(doc, 'Deliverable: redirect map + local SEO + Search Console submission log.')

    h2(doc, 'Saturday — Performance, Mobile & Measurement Wiring')
    add_bullet(doc, 'Run live speed audits per template; tune to all-green; fix render-blocking resources.')
    add_bullet(doc, 'Mobile-friendly and accessibility audits per template.')
    add_bullet(doc, 'Wire speed-audit budgets as a pre-deploy gate; add automated schema validation.')
    add_bullet(doc, 'Set up rank tracking and a weekly broken-link crawl.')
    add_bullet(doc, 'Deliverable: performance report + CI gates + monitoring setup.')

    h2(doc, 'Sunday — Content Expansion Kick-off & Week-44 Handover')
    add_bullet(doc, 'Plan the South/West/East city & route content expansion (the key lever for reaching 2k/day).')
    add_bullet(doc, 'Produce the Week-43 outcome summary report.')
    add_bullet(doc, 'Review Search Console index coverage.')

    doc.add_page_break()

    # ---- How it scales ----
    h1(doc, '3. How This Scales to All 2,863 Pages')
    add_para(doc,
             'The website is template-driven: roughly 484 page templates and data files generate '
             'all ~2,863 pages from shared components. This means "on-page SEO for all 2,863 pages" '
             'is achieved by auditing and fixing each item at the shared template layer — '
             'metadata factories, schema generators, internal-linking helpers, and per-template page code. '
             'A single fix at this layer automatically applies to every page of that type.',
             space_after=8)
    add_para(doc,
             'Verified starting point: every page type already has canonical tags, structured data, '
             'social previews, site-wide related links, and (after the August-15 work) a speed fix and '
             'real-user measurement. Week 43 deepens each item from "present" to "validated and optimized."',
             space_after=8)
    add_para(doc, 'Scope: on-page and technical-on-page SEO only. No off-page work (backlinks/outreach) and no vehicle-page visual redesign (excluded as agreed). Local SEO is in scope because it is on-page for the city templates.',
             space_after=8, italic=True, color=GREY)

    # ---- Acceptance ----
    h1(doc, '4. How We Will Know It Worked (Acceptance Criteria)')
    add_para(doc, 'At the end of Week 43, we will confirm:', space_after=6)
    for t in [
        'One URL per page type passes Google\'s Rich Results Test with zero errors.',
        'Live speed audits show all-green (LCP, layout stability, blocking time, SEO) on homepage, city, and vehicle templates.',
        'No 404s or soft-404s on the crawled key paths; the redirect map is live.',
        'Local Business schema validates on all city pages.',
        'No duplicate H1 and no missing meta description across sampled pages.',
        'Sitemap submitted to Search Console; indexing requested for all changed URLs; coverage trending up.',
        'Real-user speed (in Google Analytics) shows "good" LCP, INP, and CLS on top templates.',
        'A Week-43 outcome report is delivered to the client.',
    ]:
        add_bullet(doc, t)

    # ---- Honest expectation ----
    h1(doc, '5. Honest Expectation')
    add_para(doc,
             'Weeks 41–42 and the August-15 work built the foundation — new gap pages, structured data, '
             'the page-speed fix, seasonal visibility, and real-user measurement. Week 43 "Premium Max" '
             'takes every on-page SEO item from "present" to "fully validated and optimized" across all '
             '~2,863 pages via the template layer. This compounds the ranking recovery and directly '
             'supports the 2,000-visitors-per-day goal.',
             space_after=8)
    add_para(doc,
             'Sustained 2,000 visitors/day is a multi-quarter target that also depends on the Week-44+ '
             'South/West/East content expansion and ongoing authority work. Week 43 attacks every on-page '
             'lever available right now.',
             space_after=8)
    add_para(doc,
             'Vehicle page redesign is intentionally excluded from this scope, as agreed.',
             space_after=8, italic=True, color=GREY)

    out = r'D:\Desktop\triveni_website\docs\week-43-premium-max-seo-client.docx'
    doc.save(out)
    print('SAVED:', out)


if __name__ == '__main__':
    main()