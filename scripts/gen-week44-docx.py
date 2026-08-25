"""Generate the client-facing Week 44 Premium SEO plan as a .docx.

Reuses the Week 43 house style (navy headings, gold rules, banded tables) so the
weekly documents look like one series. Content is written here rather than parsed
from the Markdown, because the client document is deliberately tighter than the
working record in docs/week-44-premium-seo-plan.md.
"""
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

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


def para(doc, text, size=10.5, color=None, bold=False, italic=False, align=None,
         space_after=6, space_before=0):
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


def bullet(doc, text, bold_lead=None, size=10.5):
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
    return p


def table(doc, headers, rows, widths=None, bold_last_row=False):
    t = doc.add_table(rows=1, cols=len(headers))
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    t.style = 'Table Grid'
    hdr = t.rows[0].cells
    for i, h in enumerate(headers):
        hdr[i].text = ''
        run = hdr[i].paragraphs[0].add_run(h)
        run.font.bold = True
        run.font.size = Pt(9.5)
        run.font.color.rgb = WHITE
        run.font.name = 'Calibri'
        set_cell_bg(hdr[i], '122A4A')
    for ri, row in enumerate(rows):
        cells = t.add_row().cells
        last = bold_last_row and ri == len(rows) - 1
        for i, val in enumerate(row):
            cells[i].text = ''
            run = cells[i].paragraphs[0].add_run(str(val))
            run.font.size = Pt(9)
            run.font.name = 'Calibri'
            run.font.bold = last
            if last:
                set_cell_bg(cells[i], 'F2F2F2')
    if widths:
        for i, w in enumerate(widths):
            for row in t.rows:
                row.cells[i].width = Inches(w)
    doc.add_paragraph().paragraph_format.space_after = Pt(2)
    return t


def h1(doc, text):
    p = doc.add_paragraph(text)
    style_heading(p, 17, NAVY, space_before=18, space_after=8)
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
    style_heading(p, 12.5, ACCENT, space_before=12, space_after=4)
    return p


def build():
    doc = Document()
    for s in doc.sections:
        s.left_margin = s.right_margin = Inches(0.85)
        s.top_margin = s.bottom_margin = Inches(0.8)

    # ---------------- cover ----------------
    para(doc, 'TRIVENI CABS', 11, ACCENT, bold=True, align=WD_ALIGN_PARAGRAPH.CENTER, space_after=2)
    para(doc, 'Week 44 — Premium SEO Plan', 26, NAVY, bold=True,
         align=WD_ALIGN_PARAGRAPH.CENTER, space_after=4)
    para(doc, 'Converting the impressions we already have', 12.5, GREY,
         italic=True, align=WD_ALIGN_PARAGRAPH.CENTER, space_after=14)
    table(doc, ['', ''], [
        ['Website', 'www.trivenicabs.in'],
        ['Week', '44 — 24 to 30 August 2026'],
        ['Scope', 'North India only'],
        ['Pages in scope', 'All 3,392 — via the template layer'],
        ['Baseline', 'Search Console, 19 May – 18 Aug 2026'],
        ['Status', 'Week 43 live on production since 22 August'],
    ], widths=[1.7, 4.6])

    h1(doc, 'The one-line summary')
    para(doc, 'Week 43 repaired the site. Week 44 converts it. The site is shown to searchers '
              '6.86 million times a quarter and clicked 42,380 times — a click-through rate of '
              '0.62% against an expected 2.2%. The impressions already exist. This week is about '
              'turning them into enquiries, and it targets the pages that take bookings.', 11)

    h1(doc, 'What Week 43 delivered')
    table(doc, ['Measure', 'Before', 'After'], [
        ['Booking pages serving "not found" at HTTP 200', '13', '0'],
        ['Pages with duplicate titles', '16 clusters', '0'],
        ['Titles printing the brand twice', '320', '0'],
        ['Titles showing a broken "…" in Google', '906', '0'],
        ['Titles cut short by Google', '2,868', '36'],
        ['Routes quoting a wrong ₹3,300 fare', '75', '0'],
        ['Duplicate booking URLs competing', '47', '18'],
        ['Distance pages showing toll costs', '6', '35'],
        ['Google Lighthouse — SEO score', '—', '100 / 100'],
    ], widths=[3.5, 1.5, 1.5])
    para(doc, 'The largest change — retitling 4.3 million impressions worth of pages so they stop '
              'repeating the answer Google already displays — went live on 22 August. Search Console '
              'needs four to six weeks before it can say whether that worked. Week 44 does not '
              'depend on it and should not be judged on it.', 10.5, GREY, italic=True)

    h1(doc, 'Where the opportunity is')
    para(doc, 'Nine templates were never touched. Every one of them is a page that can take a '
              'booking, and together they are the largest measured opportunity on the site.', 11)
    table(doc, ['Template', 'Impressions', 'Clicks', 'CTR', 'Position', 'Headroom'], [
        ['Railway station taxi', '85,821', '1,053', '1.23%', '5.9', '+1,521'],
        ['Bus — routes, service, stand', '181,099', '1,543', '0.85%', '8.8', '+2,984'],
        ['Tempo traveller (all types)', '116,669', '2,048', '1.76%', '9.9', '+868'],
        ['Bus stand taxi', '59,723', '502', '0.84%', '6.8', '+1,289'],
        ['Sightseeing', '47,097', '654', '1.39%', '10.5', '+758'],
        ['Airport service', '44,563', '361', '0.81%', '20.0', '+975'],
        ['Taxi fare', '42,963', '334', '0.78%', '8.7', '+954'],
        ['City hub pages', '81,095', '1,186', '1.46%', '22.3', '+841'],
        ['Local taxi', '20,809', '336', '1.61%', '14.3', '+288'],
        ['TOTAL — 331 pages', '679,839', '8,017', '1.18%', '', '+10,478'],
    ], widths=[2.0, 1.1, 0.8, 0.7, 0.8, 0.9], bold_last_row=True)
    para(doc, 'Roughly +10,500 additional clicks a quarter, all of it booking-intent traffic. '
              'Someone searching for a taxi at a railway station is not browsing — they are standing '
              'there with luggage.', 10.5)

    h1(doc, 'Three different problems, not one')
    h2(doc, '1. Ranks well, does not get clicked — fixable this week')
    para(doc, 'Railway station pages rank 5.9. Bus stand pages rank 6.8. One page sits at position '
              '4.5 and converts at 0.58%, where 8% would be normal. These pages are already being '
              'seen; they are simply not being chosen. That is fixable in days, not quarters.', 10.5)
    h2(doc, '2. Does not rank at all — months, not days')
    para(doc, 'Airport service averages position 20. City hub pages average 22 — Dehradun sits at '
              '38, Varanasi at 32. A city hub is the page that should own "cab service in Dehradun", '
              'the most valuable query in that city, and it is on page four. This needs content depth '
              'and authority, and it will not show inside Week 44.', 10.5)
    h2(doc, '3. May be aimed at the wrong customer — settle before spending')
    para(doc, 'Bus pages are the largest block at 181,099 impressions, and one ranks sixth while '
              'converting at 0.17%. That is the signature of an answer nobody wanted. Someone '
              'searching "Delhi to Mussoorie bus" probably wants a ticket and a timetable; we charter '
              '22 to 56 seater buses. If that is what is happening, no rewrite rescues those pages '
              'and they should be repositioned toward group charter instead. This must be confirmed '
              'before a rupee is spent on them.', 10.5)

    h1(doc, 'Covering all 3,392 pages')
    para(doc, 'The brief is the whole site, and that is right. Two facts shape how it is done.', 11)
    para(doc, 'First, the site is template-driven, and that is its great advantage. In Week 43 a '
              'single change corrected 906 page titles at once; another corrected every fare on the '
              'site. Fixing a template covers every page of that type automatically — all 269 tempo '
              'pages, not only the 108 with measurable traffic. Full coverage is achieved through '
              'the template layer, and that is how this plan is built.', 10.5)
    para(doc, 'Second, and less comfortable:', 10.5, space_after=4)
    table(doc, ['', 'Pages', 'Impressions', 'Share of visibility'], [
        ['Top 1,000 pages', '1,000', '6,805,696', '99.2%'],
        ['Every other page', '~2,392', '58,236', '0.8%'],
    ], widths=[1.9, 1.1, 1.5, 1.5])
    para(doc, 'Seventy-one per cent of the pages produce eight-tenths of one per cent of the '
              'visibility — fewer than 16 impressions each per quarter, about one every six days. '
              'Optimising a page nobody can find does not create traffic. Those pages need a '
              'different question: not "how do we improve this" but "why can this not be found".', 10.5)

    h1(doc, 'The 777 vehicle pages — a correction')
    para(doc, 'An earlier draft of this plan called the three vehicle templates the biggest '
              'duplication problem on the site and recommended consolidating 777 pages down to 259. '
              'That recommendation is withdrawn, and the reason matters.', 11)
    para(doc, 'The structural fact is real: Tempo Traveller, Force Urbania and Maharaja Tempo '
              'Traveller cover exactly the same 259 cities and routes.', 10.5)
    table(doc, ['Template', 'Pages built', 'Pages with measured traffic'], [
        ['Tempo Traveller', '269', '108'],
        ['Force Urbania', '259', '0'],
        ['Maharaja Tempo Traveller', '259', '0'],
    ], widths=[2.6, 1.6, 2.1])
    para(doc, 'Those zeros were read as Google picking one template and discarding the other two. '
              'They mean nothing of the sort. The Search Console data runs to 18 August; both '
              'templates went live around three days ago. They did not exist when the data was '
              'collected. A page cannot appear in measurements taken before it was published.', 10.5)
    para(doc, 'The same error invalidated a second conclusion — that nobody searches for "Force '
              'Urbania" or "Maharaja". We could not have ranked for those terms, because the pages '
              'were not live. That measured our absence, not the market.', 10.5)
    para(doc, 'Recommended action: measure, do not cut.', 10.5, bold=True, space_after=4)
    bullet(doc, 'filtered to the two new templates, with a window starting after their deploy date.',
           bold_lead='Re-pull Search Console in four to six weeks — ')
    bullet(doc, 'the strategy works — keep it and expand.',
           bold_lead='If they earn their own impressions — ')
    bullet(doc, 'no demand for the brand names; make them vehicle-detail pages linked from the '
                'category template instead of parallel city sets.',
           bold_lead='If they earn nothing and Tempo holds steady — ')
    bullet(doc, 'genuine cannibalisation, and consolidation becomes the answer.',
           bold_lead='If they earn something and Tempo falls — ')
    para(doc, 'Nothing should be retired before that data exists. Retiring 518 live pages on a '
              'measurement taken before they were published would have been a serious mistake, and '
              'this plan came close to recommending it.', 10.5, GREY, italic=True)
    para(doc, 'One template this does not excuse: Event Transportation was published on 2 August, '
              'the same day as Toll Cost and Railway Station Taxi. Those two now have measurable '
              'traffic on 100% and 79% of their pages, at positions 4.9 and 5.9. Event Transportation '
              'has traffic on 2 of 129 pages at position 39.5. Same publication date, same chance to '
              'be indexed, opposite result — so newness does not explain it.', 10.5)

    h1(doc, 'Uplifting the remaining pages — and a surprise')
    para(doc, 'The obvious explanation for an invisible page is that nothing links to it. We crawled '
              'all 3,392 pages and counted. The opposite is true.', 11)
    table(doc, ['Template', 'Pages linking to it', 'Pages with traffic', 'Position'], [
        ['Toll cost', '178  (5% of site)', '100%', '4.9'],
        ['Railway station taxi', '34  (1% of site)', '79%', '5.9'],
        ['One way cab', '3,392  (100%)', '13%', '20.9'],
        ['Round trip', '3,392  (100%)', '10%', '45.5'],
        ['Event transportation', '3,392  (100%)', '2%', '39.5'],
    ], widths=[1.9, 1.7, 1.4, 1.0])
    para(doc, 'The two best-performing templates on the site have the fewest internal links. The '
              'difference is what kind of link it is. Round trip, one way cab and event '
              'transportation sit in the footer, so they appear on every page as boilerplate. Toll '
              'cost has no footer link at all — its links come from inside relevant content, on the '
              'distance guides and the homepage rate section.', 10.5)
    para(doc, 'Sitewide footer links are worth almost nothing. A contextual link from a page about '
              'the same subject is worth a great deal. So "uplift the remaining pages" does not mean '
              'adding them to the footer — they are already there.', 10.5, bold=True)
    para(doc, 'The order of work follows from that:', 10.5, space_after=4)
    bullet(doc, 'no linking strategy rescues a page whose problem is two identical siblings.',
           bold_lead='Resolve the 777-page duplication first — ')
    bullet(doc, 'the distance guides rank 7–8 and carry 2.9 million impressions; the toll pages rank '
                '4.9. Those are the equity sources.',
           bold_lead='Build contextual links from pages that already rank — ')
    bullet(doc, 'event transportation has 129 pages and traffic on two. Confirm people search for it '
                'in these cities before investing in content. The answer may be that the pages are '
                'fine and the market is small.', bold_lead='Check demand before rewriting — ')
    bullet(doc, 'only on the templates that survive the three questions above.',
           bold_lead='Then content depth — ')

    h1(doc, 'The week')
    table(doc, ['Day', 'Focus', 'Deliverable'], [
        ['Monday', 'Diagnosis — five Search Console page exports',
         'Written diagnosis with supporting queries'],
        ['Tue–Wed', 'Rewrite station, bus stand, taxi fare and tempo around the arrival moment',
         'Templates live, before/after table'],
        ['Thursday', 'Airport service and city hubs — content depth and contextual links',
         'Linking plan implemented'],
        ['Friday', '15 short-route booking pages; blog call-to-action audit',
         'Pages live, verified CTA map'],
        ['Saturday', 'Peak season — strengthen the Oct–Dec pages while they can still rank',
         'Seasonal audit, links live'],
        ['Sunday', 'Automated checks, rank tracking, outcome report',
         'Week 44 report'],
    ], widths=[0.8, 3.0, 2.5])

    h1(doc, 'What we need from you')
    para(doc, 'One of these blocks the largest piece of work in the plan.', 10.5, space_after=4)
    bullet(doc, 'Performance → Pages → select page → Queries, for five named pages. Without these we '
                'would be rewriting 331 pages on a guess, and guessing is how the duplicate-URL '
                'problem we spent Week 43 undoing was created.',
           bold_lead='Five Search Console exports (blocking) — ')
    bullet(doc, 'consolidate, differentiate, or leave.', bold_lead='A decision on the 777 vehicle pages — ')
    bullet(doc, 'one journey is currently quoted at three different prices across the site '
                '(₹660, ₹2,365 and a third figure) because three datasets disagree.',
           bold_lead='The fare question — ')
    bullet(doc, 'so round-trip fares stop being calculated as double the one-way, which can exceed '
                'your own published full-day rate.', bold_lead='A full-day rate card — ')
    bullet(doc, 'resubmit the sitemap and request indexing for the 22 consolidated URLs and the '
                'repaired booking pages.', bold_lead='Search Console housekeeping — ')

    h1(doc, 'How to judge the week')
    table(doc, ['Measure', 'Today', 'Target'], [
        ['Nine service templates — click-through rate', '1.08%', '2.5%'],
        ['Their clicks per quarter', '3,240', '7,500'],
        ['Distance pages with no way to book', '15', '0'],
        ['Seasonal pages linked from ranking content', '1 of 5', '5 of 5'],
        ['Automated SEO check — errors', '0', '0'],
        ['Automated SEO check — warnings', '133', 'under 40'],
        ['Bus intent question', 'open', 'answered in writing'],
    ], widths=[3.4, 1.4, 1.7])
    para(doc, 'Deliberately not judged on the distance and blog pages. That work went live on '
              '22 August and reports back in late September. Reading it sooner would be reading '
              'noise.', 10.5, GREY, italic=True)

    h1(doc, 'Honest expectation')
    para(doc, 'The nine service templates are the most winnable thing on this site: 679,839 '
              'impressions, most of them already ranking in the top ten, converting at a third of '
              'what those positions deserve. If Monday’s exports confirm the diagnosis, +4,000 to '
              '+5,000 clicks a quarter of booking-intent traffic is realistic inside the month.', 10.5)
    para(doc, 'The airport and city hub work will not show in Week 44, and probably not in Week 45. '
              'Anyone promising otherwise is selling something.', 10.5)
    para(doc, 'The Week 43 retitling of 4.3 million impressions is the largest bet placed so far and '
              'reports back in late September. At the conservative end of the model that alone is '
              '+31% sitewide.', 10.5)
    para(doc, 'None of this requires building more pages. The site already has 6.86 million '
              'impressions. The work is converting them.', 11, NAVY, bold=True)

    out = os.path.join('docs', 'week-44-premium-seo-client.docx')
    doc.save(out)
    print('written:', out, os.path.getsize(out), 'bytes')


if __name__ == '__main__':
    build()
