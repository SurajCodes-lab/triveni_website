"""Generate the client-facing Week 45 implementation report as a .docx.

Reuses the Week 43/44 house style — navy headings, gold rules, banded tables —
so the weekly documents read as one series. Content is written here rather than
parsed from the per-task Markdown files, because the client document is a
narrative read-through while those files are the working record for each item.

Output goes to the weekly folder outside the repository:
    D:/Desktop/triveni_next/2.0/week45/
"""
import os

from docx import Document
from docx.shared import Pt, RGBColor, Inches
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

NAVY = RGBColor(0x12, 0x2A, 0x4A)
ACCENT = RGBColor(0xB1, 0x6A, 0x00)
GREY = RGBColor(0x55, 0x55, 0x55)
RED = RGBColor(0x9B, 0x1C, 0x1C)
GREEN = RGBColor(0x1B, 0x5E, 0x20)
WHITE = RGBColor(0xFF, 0xFF, 0xFF)

OUT_DIR = r'D:/Desktop/triveni_next/2.0/week45'


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


def mono(doc, text, size=9):
    """A fixed-width block for code, titles as rendered, or console output."""
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(8)
    p.paragraph_format.space_before = Pt(4)
    p.paragraph_format.left_indent = Inches(0.22)
    r = p.add_run(text)
    r.font.size = Pt(size)
    r.font.name = 'Consolas'
    r.font.color.rgb = GREY
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


def callout(doc, title, body, color=RED):
    """A boxed emphasis block for the things that need a decision."""
    t = doc.add_table(rows=1, cols=1)
    t.alignment = WD_TABLE_ALIGNMENT.CENTER
    t.style = 'Table Grid'
    cell = t.rows[0].cells[0]
    cell.text = ''
    set_cell_bg(cell, 'FBF3E6')
    p1 = cell.paragraphs[0]
    r1 = p1.add_run(title)
    r1.font.bold = True
    r1.font.size = Pt(11)
    r1.font.color.rgb = color
    r1.font.name = 'Calibri'
    p2 = cell.add_paragraph()
    r2 = p2.add_run(body)
    r2.font.size = Pt(10)
    r2.font.name = 'Calibri'
    doc.add_paragraph().paragraph_format.space_after = Pt(4)
    return t


def build():
    doc = Document()
    for s in doc.sections:
        s.left_margin = s.right_margin = Inches(0.85)
        s.top_margin = s.bottom_margin = Inches(0.8)

    # ------------------------------------------------------------------ cover
    para(doc, 'TRIVENI CABS', 11, ACCENT, bold=True,
         align=WD_ALIGN_PARAGRAPH.CENTER, space_after=2)
    para(doc, 'Week 45 — Implementation Report', 26, NAVY, bold=True,
         align=WD_ALIGN_PARAGRAPH.CENTER, space_after=4)
    para(doc, 'Rates, titles, answer-engine readiness — and two defects nobody asked us to find',
         12, GREY, italic=True, align=WD_ALIGN_PARAGRAPH.CENTER, space_after=14)

    table(doc, ['', ''], [
        ['Website', 'www.trivenicabs.in'],
        ['Period', '22 – 25 August 2026'],
        ['Scope', 'North India only — all 3,392 pages'],
        ['Deployments', '2 completed, both verified on the live server'],
        ['Production build', '8da9AWVwoIynMyjVRcYw-'],
        ['Automated check', '0 errors · 60 warnings (from 133)'],
    ], widths=[1.7, 4.6])

    # -------------------------------------------------------------- summary
    h1(doc, 'The week in one page')

    para(doc, 'Seventeen distinct pieces of work shipped this week. Five were on the plan. '
              'Two were defects found by reading the built HTML rather than the source, and '
              'one of those is the most serious thing found in this engagement so far. One '
              'more is not a code problem at all — it is a setting in your CDN that is '
              'quietly cancelling a strategy the site is otherwise built for.', 11)

    table(doc, ['Measure', 'Before', 'After'], [
        ['Pages carrying a stale vehicle rate', '371', '0'],
        ['Titles rendering as broken sentences in Google', '320', '0'],
        ['Automated check — warnings', '133', '60'],
        ['Automated check — errors', '0', '0'],
        ['Pages with a duplicate H1', '161', '29'],
        ['Pages with fabricated review markup', '132', '0'],
        ['Sightseeing pages with an extractable data table', '0', '160'],
        ['Char Dham pages with a vehicle comparison table', '0', '8'],
        ['llms.txt for generative engines', 'none', 'live'],
    ], widths=[3.6, 1.3, 1.4])

    callout(doc,
            'One finding outranks everything else in this document',
            'Cloudflare is injecting a managed robots.txt block above your own rules that '
            'refuses GPTBot, ClaudeBot, Google-Extended, CCBot and four more, and sets '
            'ai-train=no. Your code explicitly welcomes those crawlers — its own comment '
            'calls it "the single most important 2026 change". The two layers disagree, and '
            'the CDN wins. Every hour spent on structured data and quotable facts reaches '
            'Google and Perplexity, and nothing else, until this is settled. Full detail in '
            'section 15.')

    # ------------------------------------------------------------ 1. rates
    h1(doc, '1. The rate card change')

    para(doc, 'You asked for the group-vehicle rates to go up, and corrected the Force '
              'Urbania partway through from a flat ₹35/km to a ₹25–30 ladder by seater. '
              'The instruction was short. The work was not, and it is worth explaining why, '
              'because the same trap will be waiting the next time a price moves.', 11)

    para(doc, 'A per-km rate is stored in one data file. It is published in hundreds of '
              'places — inside fare tables, in the middle of sentences, as FAQ answers that '
              'Google reads as structured data, and multiplied out into package totals. '
              'Change the data file alone and the site starts disagreeing with itself within '
              'seconds. Two prices for one vehicle on one domain is a credibility problem in '
              'front of the customer and a contradictory signal to Google, which reads all '
              'of it.')

    h2(doc, 'The rate card now live')
    table(doc, ['Force Tempo Traveller', 'Rate', 'Force Urbania', 'Rate', 'Maharaja', 'Rate'], [
        ['12 Seater', '₹23/km', '10 Seater', '₹25/km', 'Maharaja 12', '₹26/km'],
        ['16 / 17 Seater', '₹25/km', '12 Seater', '₹27/km', 'Maharaja 17', '₹30/km'],
        ['20 Seater', '₹28/km', '13 Seater', '₹28/km', '', ''],
        ['26 Seater', '₹31/km', '17 Seater', '₹30/km', '', ''],
    ], widths=[1.5, 0.8, 1.3, 0.8, 1.1, 0.8])

    h2(doc, 'Why it took five passes rather than one')
    para(doc, 'The first pass reported success and was wrong. A rupee amount is written in '
              'this codebase in at least five different ways depending on which file and '
              'which year it was written in: a literal ₹, an escaped unicode sequence, the '
              'HTML entity, "Rs 20/km" as plain text, and a bare number in a data field. A '
              'sweep handling only the first looks clean and leaves several hundred pages '
              'stale.')

    table(doc, ['Pass', 'Stale pages remaining'], [
        ['1', '371'],
        ['2', '262'],
        ['3', '285'],
        ['4', '268'],
        ['Final', '0'],
    ], widths=[1.2, 2.2], bold_last_row=True)

    para(doc, 'The count rising between passes two and three is the encoding problem '
              'surfacing — each pass fixed one form and revealed another underneath it. The '
              'work touched 56 source files and 240 lines, and was verified against the built '
              'HTML rather than the source, because the built HTML is what Google and the '
              'customer actually receive.', 10.5, GREY, italic=True)

    h2(doc, 'Three bugs this caused, and how each was caught')
    bullet(doc, 'The vehicle is called "Maharaja Tempo Traveller" — the blocker word comes '
                'before the keyword, so a nearest-vehicle rule resolved to Tempo and rewrote '
                'a Maharaja rate. ₹26 became ₹28, then ₹31, while the data file still said 26. '
                'Caught both times by diffing built pages against the data.',
           bold_lead='The Maharaja rate was corrupted twice. ')
    bullet(doc, 'The line being rewritten had no vehicle word anywhere in its window, so the '
                'tempo rule claimed it.',
           bold_lead='A page about Urbania rates was given the tempo rate. ')
    bullet(doc, 'The check used the pattern tempo|traveller[...] — and in a regular expression '
                'the pipe splits the entire pattern, so it was matching the bare word "tempo" '
                'on all 3,392 pages and drowning the real signal. For a while the tooling was '
                'confidently reporting everything fine.',
           bold_lead='The verification script itself was broken. ')

    h2(doc, 'Derived figures were recomputed, not relabelled')
    para(doc, 'Some pages do not just quote a rate — they multiply it out. One FAQ read: '
              '"For the 12-seater at ₹35/km, a 600 km round trip starts at ₹13,200." Both '
              'halves were wrong; ₹13,200 was itself computed from an even older ₹22. It now '
              'reads ₹27/km and ₹16,200.')

    para(doc, 'Equally important is what was left alone. ₹35/km was the old flat Urbania rate '
              'but it is also the genuine Fortuner rate. A blanket find-and-replace would '
              'have quietly repriced the luxury fleet. The Fortuner page still reads ₹35/km, '
              'verified on the live site after deployment.')

    # ------------------------------------------------------------- 2. titles
    h1(doc, '2. Three hundred and twenty titles that read as broken')

    para(doc, 'While checking the templates, the built HTML turned up a class of defect that '
              'had been live for some time and that nothing was catching. These are what a '
              'searcher actually sees as the blue clickable line:', 11)

    mono(doc,
         'Triveni Cabs Pricing Transparency | No Hidden Charges, No | Triveni Cabs\n'
         'Gateway of India Mumbai Guide 2026: How to | Triveni Cabs\n'
         'Mussoorie in 2 Days Itinerary 2026 | Cab Package from | Triveni Cabs\n'
         'Sightseeing Tours India 2026 | Taj Mahal ₹3,500 | Triveni | Triveni Cabs')

    para(doc, 'They stop mid-sentence, or print the brand twice. This matters more than a '
              'typo. The whole premise of the week is that these pages already rank and are '
              'simply not being chosen — and a listing that looks broken is one of the very '
              'few things that makes a searcher skip a result they can see is relevant. We '
              'were spending the ranking and losing the click at the last inch.')

    h2(doc, 'Why it happened')
    para(doc, 'Titles are cut at a word boundary, which avoids slicing through a word but does '
              'nothing about which word the cut lands on. When the budget ran out on a '
              'connector — "from", "to", "vs", "By" — the title kept it and stopped. Three '
              'gaps let that reach production: the guard lived in the metadata factory while '
              'most pages call the tightening function directly; the clause-dropper only '
              'understood the pipe character, not the colons and dashes the blog titles use; '
              'and the brand check counted only the exact phrase, so a dangling bare '
              '"Triveni" was never counted.')

    h2(doc, 'What changed, and one restraint worth noting')
    para(doc, 'Three fixes went in at the shared entry point so every caller benefits: clear a '
              'connector left by a cut, remove a brand the layout is about to append anyway, '
              'and drop a trailing clause a cut has reduced to a single short word.')
    para(doc, 'The orphan-word list is deliberately closed-class only. "Drivers", "Fleet" and '
              '"Customer" can legitimately end a title, so an open-class word is left alone '
              'even when it is obviously the product of a cut. An early version of that list '
              'included "cabs" — which would have turned "Delhi to Agra Cabs" into "Delhi to '
              'Agra" across a large number of route pages. It was caught and removed before '
              'it shipped.', 10.5, GREY, italic=True)

    table(doc, ['Measure', 'Before', 'After'], [
        ['Titles ending on a connector', '39', '0'],
        ['Titles printing the brand word twice', '17', '14 — all legitimate'],
        ['Titles improved', '—', '320'],
        ['Titles reduced below 30 characters', '—', '0'],
    ], widths=[3.4, 1.3, 1.6])

    para(doc, 'The 14 remaining were each checked individually. Nine are comparison pages that '
              'must name the brand, two are the Prayagraj Triveni Sangam tours — the river '
              'confluence genuinely shares the name — and one is an internal page never '
              'indexed.', 10.5, GREY, italic=True)

    # ---------------------------------------------------- 3-7 the check work
    h1(doc, '3–7. The automated check: 133 warnings down to 60')

    para(doc, 'Four of the five warning classes are now at zero. The remaining class is a '
              'strategic question rather than something to tidy away. Two of the four were '
              'real bugs rather than untidiness.', 11)

    table(doc, ['Warning class', 'Before', 'After'], [
        ['description-long', '61', '0'],
        ['description-short', '7', '0'],
        ['title-too-long', '4', '0'],
        ['duplicate-title', '1', '0'],
        ['city-intent-competition', '60', '60'],
    ], widths=[3.4, 1.3, 1.3])

    h2(doc, '4. "Airport" printed twice')
    mono(doc, 'Jolly Grant Airport Dehradun Airport to Haridwar Taxi ₹1,500 | No Surge')
    para(doc, 'The template strips a trailing " Airport" from the airport name. That works for '
              '"Delhi IGI Airport" and does nothing whatsoever for "Jolly Grant Airport '
              'Dehradun" or "Sheikh ul-Alam International Airport Srinagar", which do not end '
              'in the word — so the full name came through and "Airport" was appended after it.')
    para(doc, 'The fix was not a better regular expression. The data already carries the city, '
              'and the city is what people search — nobody types "Sri Guru Ram Dass Jee '
              'airport to Dalhousie taxi". The title now leads with the city, which repairs '
              'three pages and improves four more that were technically correct and '
              'commercially useless.')
    mono(doc, '+ Dehradun Airport to Haridwar Taxi ₹1,500 | No Surge\n'
              '+ Amritsar Airport to Amritsar City Taxi ₹800 | No Surge')

    h2(doc, '5. Two vehicle pages competing for one search')
    para(doc, 'Two distinct routes were rendering one identical title, which is textbook '
              'self-cannibalisation — we were asking Google to choose between two of our own '
              'pages. "Maharaja Tempo Traveller" spends 24 of the 45-character budget before '
              'the route begins, so "Dalhousie Khajjiar" was amputated and the longer route '
              'collapsed onto the shorter one.')
    para(doc, 'Raising the budget alone was not enough — 47 of 715 route titles run past 58 '
              'characters and the worst reach 87. But look at the two worst side by side and '
              'they have the same shape with the useful half on opposite sides of the '
              'brackets. Taking whichever half is shorter turns "Haridwar to Kedarnath '
              'Badrinath Yamunotri Gangotri (char Dham)" into "Haridwar to Char Dham" — which '
              'is both readable and what people actually search.')

    h2(doc, '6. Two Taj Mahal blog posts sharing a title')
    para(doc, 'The first diagnosis was wrong, and that is the useful part. The post\'s title '
              'field was clearly distinct, so an explicit metaTitle was added to override it. '
              'The rebuild changed nothing. Checking the OpenGraph tag returned a third string '
              'that was neither — the object already had a metaTitle further down, so the '
              'added key was a duplicate the later one silently overrode.')
    para(doc, 'The real cause was then arithmetic: the existing 54-character metaTitle, clamped '
              'to the budget, cut just after the colon and left exactly the other post\'s '
              'title, character for character. Shortening it to 40 characters fixed it.')

    h2(doc, '3. Descriptions — and why trimming was the wrong instinct')
    para(doc, 'Sixty-one descriptions ran over 200 characters, the worst at 348. The obvious '
              'fix is to trim them, and it is wrong. Google renders roughly 155–160 '
              'characters; what was sitting past that limit on these pages was the price and '
              'the phone number. These pages were paying for a long description and losing the '
              'only two things in it that produce a call.')
    para(doc, 'So the commercial tail is now reserved first and the editorial half gets '
              'whatever budget remains. Seven more descriptions were too short — as low as 51 '
              'characters — and rather than hand-write seven blurbs, the template now composes '
              'the existing text with the duration and the starting fare, so the fix cannot '
              'regress when a tour is added.')

    h2(doc, '7. The guard that missed all of it')
    para(doc, 'The automated check reported zero errors both before and after the title '
              'repair. That is the problem in one sentence — 39 broken titles were live and '
              'the guard whose job is to catch exactly that was silent. It counted the exact '
              'phrase "Triveni Cabs", so a dangling bare "Triveni" was invisible to it, and it '
              'exempted pages by URL, which happened to cover two that were genuinely doubled.')
    para(doc, 'The rule now reasons the way the de-duplication does: the brand is legitimate in '
              'the first clause where it is the page\'s subject, and redundant in any later '
              'clause. It was tested against seven cases — the three original defects and four '
              'that must keep passing, including the Prayagraj Triveni Sangam tour — and got '
              'all seven right before shipping.')

    callout(doc,
            'The 60 remaining warnings are blocked on data, not effort',
            'They all flag places where several of our own pages answer one question — for '
            'Agra alone, five pages compete for the generic city-cab query and ten for event '
            'transport. Deciding which page should own "cab service in Agra" requires knowing '
            'which one Google currently shows and for what. That is the Search Console '
            'per-page query export still outstanding. Guessing is how the duplicate-URL '
            'problem of the previous week was created, so this stays visible rather than '
            'being tidied away.',
            color=NAVY)

    # ------------------------------------------------------------- 8-11 AEO
    h1(doc, '8–11. Sightseeing, Char Dham, and answer-engine readiness')

    para(doc, 'Worth stating plainly first, because it shaped the work: the gap was never '
              'schema. All 235 sightseeing and Char Dham pages already emit FAQPage, '
              'speakable, an author, and between them TouristTrip, HowTo, LocalBusiness, '
              'AggregateRating and BreadcrumbList. 187 of 235 already phrase a heading as a '
              'question. The gap was that the facts existed as prose and pixels rather than as '
              'machine-readable relationships.', 11)

    h2(doc, 'Not one of the 170 sightseeing pages contained a table')
    para(doc, 'The fares were on the page — in a sentence, in card tiles, in the booking '
              'sidebar. Every one of those is a div. To a person that is fine. To the two kinds '
              'of machine this week targets, it is the difference between being quoted and '
              'being guessed at.')
    para(doc, 'Google\'s table snippet is drawn from an actual table with a header row; a grid '
              'of styled divs holding identical numbers is not eligible for it. And when an '
              'assistant is asked what the Amritsar Golden Temple tour costs, it has to decide '
              'which number belongs to which vehicle — a table with scoped row headers states '
              'that outright, while cards leave it to be inferred from DOM order. That '
              'inference is exactly what goes wrong when a model quotes the SUV price as the '
              'starting fare.')

    table(doc, ['Component', 'What it answers', 'Pages'], [
        ['TourFareTable', 'What does this tour cost, by vehicle', '132'],
        ['CityToursTable', 'Which tour should I pick in this city', '28'],
        ['ChardhamVehicleTable', 'Which vehicle for Char Dham, and total cost', '8'],
    ], widths=[1.8, 3.2, 0.9])

    para(doc, 'The Char Dham table does one thing the site had been leaving to the reader: it '
              'multiplies the rate out. A per-kilometre figure means little to somebody '
              'planning a pilgrimage budget until it is set against the roughly 1,700 km the '
              'full circuit actually runs. The table shows both, with exclusions stated so the '
              'total is not mistaken for an all-in price.')

    h2(doc, 'llms.txt — a curated map for assistants')
    para(doc, 'robots.txt says what a crawler may fetch. sitemap.xml lists all 3,392 URLs, '
              'undifferentiated. Neither tells an assistant which facts are authoritative, and '
              'that is what decides whether we get quoted correctly. When someone asks what a '
              '17-seater tempo traveller costs, the model either finds a clean current number '
              'or reaches for a stale one from training data.')
    para(doc, 'It is generated, not hand-written — the rates are read at build time from the '
              'same files the pages render from, so it cannot drift. This week is the argument '
              'for that: the rate change took five passes across five encodings, and a static '
              'text file would have been missed by every one of them.')
    para(doc, 'It also states the things assistants most often get wrong: that Triveni Cabs is '
              'not a ride-hailing app, that the Urbania is a different vehicle from the tempo '
              'traveller and priced differently, that sightseeing prices are whole-tour rather '
              'than per-km, and that the service area is North India only.')
    para(doc, 'One correction during the build is worth recording. The first draft linked to '
              'filtered URLs like /sightseeing?city=delhi. Checking the route showed it accepts '
              'no such parameter — those URLs do not exist. Publishing a file whose whole '
              'purpose is to be an authoritative reference, containing URLs that 404, would '
              'have been worse than publishing nothing.', 10.5, GREY, italic=True)

    # ---------------------------------------------------------- 12-13 defects
    h1(doc, '12–13. Two defects nobody asked us to find')

    para(doc, 'Neither of these was on the plan. Both came from reading the built HTML rather '
              'than the source, which is becoming the most productive habit in this '
              'engagement.', 11)

    h2(doc, '12. A duplicate H1 hidden off-screen on 133 pages')
    para(doc, 'The sightseeing templates carried a block introduced as "Server-rendered SEO '
              'content — visible to Googlebot immediately", positioned at left: -9999px. '
              'Inside it: a second H1, the full description, the highlights, the itinerary, '
              'the inclusions and a duplicate FAQ set — all of which the visible page already '
              'renders.')
    para(doc, 'The intent was reasonable and no longer holds. Next.js server-renders the '
              'component anyway, so the block was insuring against a risk that does not exist '
              'on this stack. What it did do was ship a second H1 on 133 pages and use an '
              'off-screen text block — precisely the pattern Google\'s spam policies describe '
              'as hidden text. Benign intent does not change how an automated system '
              'classifies it.')
    para(doc, 'Before deleting 95 lines from 133 live pages, the built HTML was checked string '
              'by string with the block excluded: tour name, full description, a named '
              'highlight, an inclusion, an itinerary stop, the price and the FAQ questions are '
              'all present without it. Nothing was lost.', 10.5, GREY, italic=True)

    table(doc, ['Measure', 'Before', 'After'], [
        ['Pages with 2+ H1', '161', '29'],
        ['Pages with an off-screen duplicate block', '133', '0'],
    ], widths=[3.6, 1.3, 1.3])

    h2(doc, '13. Fabricated reviews, marked up as review schema, on 132 pages')

    callout(doc,
            'This is the most serious item found this week',
            'The tour template emitted a block the source itself labels "Review Schema - '
            'Sample Reviews": two five-star Review entities per page, authors "Verified '
            'Tourist" and "International Traveler", review text generated by interpolating the '
            'tour\'s own category and duration, and publication dates computed as seven and '
            'fourteen days ago — so every page claimed two reviews from last week, and the '
            'dates moved forward on every rebuild.')

    para(doc, 'Google\'s review snippet policy requires review markup to describe reviews '
              'genuinely left by customers. This is a manual-action risk rather than a matter '
              'of taste, and a manual action on review markup typically removes star ratings '
              'across the whole domain, not only the offending pages.')

    para(doc, 'It was also a duplicate Product node. The page already emits one carrying the '
              'real offer — price, currency, availability, SKU — plus genuine rating and review '
              'data. This second node had the same product name and no price at all. Two '
              'Product entities force a parser to choose, and if it chose this one the rich '
              'result lost the fare, which is the most valuable thing in it. So the page was '
              'simultaneously risking a penalty and undermining its own best feature.')

    table(doc, ['Measure', 'Before', 'After'], [
        ['Pages with fabricated Review schema', '132', '0'],
        ['Product nodes on a tour page', '2', '1 — the priced one'],
        ['Real aggregateRating retained', '—', 'yes'],
    ], widths=[3.4, 1.3, 1.6])

    callout(doc,
            'Needs your decision — the visible copy',
            'The same two invented names also appear in visible page text on those 132 pages, '
            'not only in the markup. Removing the schema stops the policy exposure; it does '
            'not remove testimonials a visitor still reads as real customer feedback. Taking '
            'published copy off 132 live pages is a content decision, so it was flagged rather '
            'than done quietly. Replace them with genuine reviews — you have real ones — or '
            'remove them.')

    # ------------------------------------------------------------- 14 orphan
    h1(doc, '14. An orphaned page, and three links dead behind a broken condition')

    para(doc, 'Checking whether the peak-season pages were properly linked meant crawling all '
              '3,392 built pages and counting, rather than assuming. One page came back with '
              'zero inbound links: /golden-triangle-tour-cost. The only page on the entire site '
              'mentioning that URL was the page itself.', 11)

    para(doc, 'The cause was not missing content. The template already contains three '
              'hand-written contextual links — somebody wrote them deliberately — but all three '
              'sit inside a condition on "others", the list of other origin pages. The dataset '
              'has a single origin, so the condition is false, the section never renders, and '
              'three deliberately written links were dead.')

    para(doc, 'This matters more than a routine missing link, because of what the linking '
              'analysis found:')

    table(doc, ['Template', 'Pages linking to it', 'Pages with traffic', 'Position'], [
        ['Toll cost', '178  (5% of site)', '100%', '4.9'],
        ['Railway station taxi', '34  (1% of site)', '79%', '5.9'],
        ['One way cab', '3,392  (100%)', '13%', '20.9'],
        ['Round trip', '3,392  (100%)', '10%', '45.5'],
        ['Event transportation', '3,392  (100%)', '2%', '39.5'],
    ], widths=[1.9, 1.7, 1.4, 1.0])

    para(doc, 'The two best-performing templates have the fewest internal links. The difference '
              'is what kind of link it is — the bottom three sit in the footer and appear '
              'everywhere as boilerplate, which is worth almost nothing. So "uplift the '
              'remaining pages" does not mean adding them to the footer. They are already '
              'there, and it has not worked.', 10.5, GREY, italic=True)

    # ----------------------------------------------------------- 15 cloudflare
    h1(doc, '15. The CDN is cancelling the AI strategy')

    para(doc, 'Before writing a line of code aimed at generative engines, the sensible first '
              'question is whether those engines can read the site at all. They cannot.', 11)

    para(doc, 'The repository contains a carefully considered robots configuration that '
              'explicitly welcomes every major AI crawler. Its own comment reads: "This is the '
              'single most important 2026 change: brand visibility in AI answers." Somebody '
              'made a deliberate strategic choice.')

    para(doc, 'That file is not what the internet receives. Cloudflare injects a managed block '
              'above your own rules:')

    mono(doc,
         '# BEGIN Cloudflare Managed content\n'
         'User-agent: *\n'
         'Content-Signal: search=yes,ai-train=no,use=reference\n\n'
         'User-agent: GPTBot               Disallow: /\n'
         'User-agent: ClaudeBot            Disallow: /\n'
         'User-agent: Google-Extended      Disallow: /\n'
         'User-agent: CCBot                Disallow: /\n'
         'User-agent: Amazonbot            Disallow: /\n'
         'User-agent: Applebot-Extended    Disallow: /\n'
         'User-agent: Bytespider           Disallow: /\n'
         'User-agent: meta-externalagent   Disallow: /')

    para(doc, 'Your own permissive rules appear afterwards. Two conflicting groups for one '
              'user-agent is at best ambiguous — crawlers resolve duplicates differently and '
              'none is obliged to prefer the second — and "ai-train=no" is not ambiguous at all.')

    para(doc, 'One crawler is conspicuously absent from the block list: PerplexityBot. So '
              'Perplexity can read the site while ChatGPT, Claude, Gemini\'s training crawler '
              'and Common Crawl largely cannot. If you have noticed the brand appearing in one '
              'assistant and not others, that asymmetry is very likely the explanation. CCBot '
              'deserves specific mention — it feeds the corpus most models are trained on, so '
              'blocking it affects not only today\'s answers but whether the brand exists in '
              'the next generation of models at all.')

    callout(doc,
            'This is a business decision, not a technical fix',
            'Blocking AI crawlers is entirely legitimate — it means your content is not used '
            'to train models or summarised into answers that satisfy the user without sending '
            'them to you. Plenty of publishers choose exactly that. What is not defensible is '
            'the current state, where the code declares an AI-visibility strategy and the CDN '
            'silently cancels it. The ask is not "unblock the crawlers" — it is: decide which '
            'you want, and make both layers agree.')

    # ---------------------------------------------------------- 16 performance
    h1(doc, '16. Performance and the LCP re-test')

    table(doc, ['Metric', 'Result', 'Target'], [
        ['Performance', '44', '90'],
        ['Largest Contentful Paint', '8.9 s', 'under 2.5 s'],
        ['Total Blocking Time', '1,640 ms', 'under 200 ms'],
        ['First Contentful Paint', '2.6 s', 'under 1.8 s'],
        ['Cumulative Layout Shift', '0', 'under 0.1'],
        ['SEO', '100', '100'],
        ['Accessibility', '97', '—'],
    ], widths=[2.6, 1.5, 1.6])

    para(doc, 'Two of these are genuinely excellent and must not be lost in any optimisation '
              'work: CLS at zero — nothing on the page jumps while loading, which is rarer '
              'than it sounds — and SEO at 100. Everything on the speed side is poor, and the '
              'useful part is why, because the obvious explanations are all wrong here.')

    h2(doc, 'It is not images')
    para(doc, 'The hero already carries priority so Next.js preloads it, the component uses zero '
              'framer-motion with CSS-only animation, and the image opportunities are all below '
              'the reporting threshold. It is main-thread time: 6.9 s of work and 3.2 s of '
              'script bootup. An LCP of 8.9 s against an FCP of 2.6 s means the browser has the '
              'content and cannot get to it.')

    h2(doc, 'Google\'s own tags are 45% of the page\'s JavaScript')
    table(doc, ['Script', 'Transfer', 'Bootup'], [
        ['GA4 gtag/js', '189 KiB', '727 ms'],
        ['Google Ads AW-17336319883', '155 KiB', '370 ms'],
        ['Google Tag Manager', '113 KiB', '—'],
        ['Largest application chunk', '215 KiB', '193 ms'],
    ], widths=[2.8, 1.4, 1.4])

    para(doc, 'Of 1,020 KiB of script across 40 files, 457 KiB is analytics and advertising. '
              'The single largest thing the browser downloads and executes on a sightseeing '
              'page is not the page — it is measurement.')

    para(doc, 'The loading strategy was examined and deliberately not changed. GTM and the Ads '
              'config are already lazy, and the Ads tag was previously de-duplicated to reuse '
              'the loaded gtag instance. Only GA4 sits at afterInteractive, and the code '
              'explains why: on lazy loading it undercounted badly, showing roughly 150 active '
              'users a day against a Search-Console-implied 330 or more. Moving it back buys '
              'about 700 ms and breaks the analytics you make decisions from. That is your '
              'trade-off to make knowingly, not something to reverse quietly in a performance '
              'pass.')

    h2(doc, 'A correction — the first diagnosis was wrong')
    para(doc, 'The initial explanation for the page\'s 124 KiB inline payload was that whole '
              'data objects are passed to the client component instead of the fields it needs. '
              'That was measured and does not hold — the entire tour object is 8 KiB, and only '
              'four of its twenty-two keys go unused. Trimming props would save 1–2 KiB of the '
              '124. It is recorded here rather than quietly dropped, because a plausible-sounding '
              'wrong diagnosis left standing is worse than no diagnosis.')
    para(doc, 'The real cause is structural. The component marks the entire page as client-side, '
              'so React must serialise the whole tree for hydration — and the 1,053-line file '
              'contains exactly two pieces of state, an accordion index and a bookmark toggle. '
              'Everything else is static markup inside a boundary it does not need. Extracting '
              'those two and letting the rest render on the server is the real fix, and it is '
              'one change covering 170 pages.')

    callout(doc,
            'Why this was not shipped this week',
            'Restructuring the client boundary of a 1,053-line component that renders every '
            'sightseeing page, at the end of a long working session with a deploy in flight, '
            'is how a good optimisation becomes an outage. It is recorded with a correct '
            'diagnosis and left for a pass with room to verify it properly. That is a '
            'deliberate choice, not an oversight.',
            color=NAVY)

    h2(doc, 'Recommended sequence')
    bullet(doc, 'No downside, possibly ~150 KiB.', bold_lead='Audit the GTM container for duplicate GA4 / Ads tags. ')
    bullet(doc, 'Keep only the accordion and bookmark as client components.', bold_lead='Move the sightseeing component off the client boundary. ')
    bullet(doc, 'Modest parse win, and far easier to audit.', bold_lead='Consolidate the 17 JSON-LD blocks into one graph. ')
    bullet(doc, 'The GA4 trade-off may turn out not to be needed.', bold_lead='Then re-measure. ')

    # ------------------------------------------------------------ deployments
    h1(doc, '17. Deployments, and how each was verified')

    para(doc, 'A deploy exiting zero is not proof. Earlier in this programme a deploy reported '
              'success while the process had never restarted — files updated on disk while the '
              'old build kept serving from memory. Everything looked fine and the site was '
              'serving week-old code. So every deploy is verified against two facts read from '
              'the server: the remote build ID equals the local one, and the restart counter '
              'actually moved.', 11)

    table(doc, ['', 'Deployment 1', 'Deployment 2'], [
        ['Build ID', 'PD1OAqrk9C7AQrFHvL1f0', '8da9AWVwoIynMyjVRcYw-'],
        ['Carried', 'Rates + 320 title fixes', 'Everything else'],
        ['Remote build ID', 'matched', 'matched'],
        ['Process restart', 'confirmed', '25 → 26'],
    ], widths=[1.3, 2.4, 2.4])

    para(doc, 'The second deployment\'s task record was lost when the background process ended. '
              'That is precisely the situation where assuming success is how a half-applied '
              'deploy goes unnoticed, so the server was queried directly — build ID matched, '
              'the process had restarted, chunks were cleaned, a new backup existed — and then '
              'the live site itself was checked.')

    mono(doc,
         '/llms.txt                  serving, Urbania ladder ₹25–30 correct\n'
         'fare table                 present\n'
         'fabricated review markup   0\n'
         'real aggregateRating       present\n'
         'H1 count                   1   (was 2)\n'
         'hidden duplicate block     0')

    para(doc, 'Two further deploys were deliberately stopped mid-upload and discarded — one to '
              'rebuild from a genuinely clean state, one because later work had superseded it. '
              'Neither cost anything: the script holds off on the backup, overlay and restart '
              'until all ten chunks are uploaded and byte-verified, so production is never '
              'touched during upload.')

    para(doc, 'One detail mattered more than it looks. Before repacking, five stale archives '
              'going back to 17 August were pruned, because the deploy script selects its '
              'archive by modification time and a leftover would have been picked up and '
              'silently deployed. That is a quiet, total failure mode — a completely '
              'successful-looking deploy of last week\'s site.', 10.5, GREY, italic=True)

    # ----------------------------------------------------------------- wrong
    h1(doc, 'Where we were wrong')

    para(doc, 'Kept on the record because the failure mode repeats and is worth recognising.', 11)

    table(doc, ['Claim', 'Reality'], [
        ['518 Urbania/Maharaja pages return nothing — consolidate 777 to 259',
         'The pages post-dated the data window. Retracted — measure, do not cut.'],
        ['Five blogs carry 7,224 impressions',
         'The extraction matched across entry boundaries and merged unrelated rows.'],
        ['The 124 KiB payload comes from oversized props',
         'Measured: the object is 8 KiB. The cause is the client boundary.'],
        ['One Article node has no author',
         'The author is set by reference; the parser did not resolve it.'],
    ], widths=[2.9, 3.4])

    para(doc, 'All four share a shape — a confident number produced by a script whose '
              'assumptions were not checked against raw data. Every figure in this document was '
              're-derived from the Search Console export, the built HTML, or the live site.',
         10.5, GREY, italic=True)

    # ------------------------------------------------------------------ open
    h1(doc, 'What we need from you')

    para(doc, 'These are held back deliberately. Each changes published pricing, retires a live '
              'indexed URL, alters how the brand presents itself, or trades one measurable good '
              'against another — decisions with commercial consequences that are hard to '
              'reverse.', 11)

    bullet(doc, 'The highest-value item in this document. Both layers should say the same thing.',
           bold_lead='1. The Cloudflare AI crawler block. ')
    bullet(doc, 'The schema is gone; the invented names still appear in copy a visitor reads as '
                'real. Replace with genuine reviews, or remove.',
           bold_lead='2. Visible fabricated testimonials on 132 pages. ')
    bullet(doc, 'Maharaja is ₹26–30 and Urbania is now ₹25–30 — at 17 seats both quote ₹30/km.',
           bold_lead='3. The Maharaja / Urbania overlap. ')
    bullet(doc, 'Live, but derived by scaling the old ₹66,000 with the rate change rather than '
                'quoted by you.',
           bold_lead='4. The ₹81,000 Char Dham circuit price. ')
    bullet(doc, 'Against ₹11/km site-wide. Possibly a deliberate hill premium, but currently '
                'unexplained on the page.',
           bold_lead='5. Char Dham quotes the sedan at ₹12/km. ')
    bullet(doc, 'Titles no longer compete, but they remain two posts on one subject. '
                'Consolidating retires a live URL.',
           bold_lead='6. The two Taj Mahal blog posts. ')
    bullet(doc, 'Both sit outside the North India service area.',
           bold_lead='7. /sightseeing/ahmedabad and /sightseeing/bodhgaya. ')
    bullet(doc, 'Roughly 700 ms against analytics accuracy.',
           bold_lead='8. GA4 loading strategy. ')
    bullet(doc, 'So round-trip fares stop being calculated as double the one-way, which can '
                'exceed your own published full-day rate.',
           bold_lead='9. A full-day rate card. ')

    h2(doc, 'Blocked on Search Console')
    para(doc, 'The five per-page query exports block all 60 remaining warnings and the largest '
              'piece of the plan. Also waiting on them: the bus intent question. Bus pages are '
              'the largest block on the site at 181,099 impressions, and one ranks sixth while '
              'converting at 0.17% — the signature of an answer nobody wanted. If people '
              'searching "Delhi to Mussoorie bus" want a timetable rather than a 22–56 seater '
              'charter, no rewrite rescues those pages and they should be repositioned toward '
              'group charter instead.')

    # ---------------------------------------------------------------- outlook
    h1(doc, 'Honest expectation')

    para(doc, 'The nine untouched service templates remain the most winnable thing on this '
              'site: 679,839 impressions a quarter, most already ranking in the top ten, '
              'converting at about a third of what those positions deserve. That is roughly '
              '+10,500 clicks a quarter of booking-intent traffic if the gap closes.', 11)

    para(doc, 'The title and description work shipped this week attacks precisely that gap and '
              'needs four to six weeks before Search Console can say whether it worked. The '
              'airport and city-hub pages will not move in that window — Dehradun\'s city hub '
              'sits at position 38 and Varanasi\'s at 32, and rank moves in months, not weeks.')

    para(doc, 'The answer-engine and generative-engine work has a different clock and an honest '
              'caveat. The tables and llms.txt will do their job for Google and for Perplexity. '
              'For ChatGPT, Claude, Gemini and the Common Crawl corpus they will do nothing at '
              'all until the Cloudflare block is resolved.')

    para(doc, 'Prepared 25 August 2026 · Triveni Cabs SEO programme', 9.5, GREY, italic=True,
         align=WD_ALIGN_PARAGRAPH.CENTER, space_before=18)

    os.makedirs(OUT_DIR, exist_ok=True)
    out = os.path.join(OUT_DIR, 'week-45-implementation-report.docx')
    doc.save(out)
    size = os.path.getsize(out)
    print(f'written: {out}  {size} bytes')


if __name__ == '__main__':
    build()
