# -*- coding: utf-8 -*-
"""
Triveni Cabs — Week 49 plan: shared design-system library (Week 46 lineage).
Navy + gold house style (Week 40/41/42 lineage). 11pt Calibri body, 1.3 line
spacing, 1" margins, page break before each numbered section.
"""
from docx import Document
from docx.shared import Pt, RGBColor, Inches
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.table import WD_TABLE_ALIGNMENT, WD_ALIGN_VERTICAL
from docx.oxml.ns import qn
from docx.oxml import OxmlElement

# ---------------------------------------------------------------- palette
NAVY        = RGBColor(0x1B, 0x2A, 0x4A)
NAVY_DEEP   = RGBColor(0x10, 0x1B, 0x33)
GOLD        = RGBColor(0xC9, 0xA2, 0x27)
GOLD_BRIGHT = RGBColor(0xE8, 0xC5, 0x4B)
GOLD_DARK   = RGBColor(0x8A, 0x6D, 0x14)
TEAL        = RGBColor(0x0E, 0x66, 0x6B)
INK         = RGBColor(0x21, 0x24, 0x2B)
SOFT_INK    = RGBColor(0x4A, 0x4E, 0x57)
WHITE       = RGBColor(0xFF, 0xFF, 0xFF)
GREEN_OK    = RGBColor(0x2E, 0x7D, 0x32)
AMBER       = RGBColor(0xB0, 0x74, 0x0C)
RED_BAD     = RGBColor(0xA3, 0x2A, 0x1A)

HX_NAVY     = "1B2A4A"
HX_NAVYDEEP = "101B33"
HX_GOLD     = "C9A227"
HX_GOLDDK   = "8A6D14"
HX_TAN      = "F7F1E1"
HX_TAN2     = "EFE5C8"
HX_PAPER    = "FBF8F0"
HX_TEALTNT  = "E7F1F1"
HX_WHITE    = "FFFFFF"

FONT_BODY = "Calibri"
FONT_HEAD = "Georgia"
FONT_MONO = "Consolas"

doc = Document()

_n = doc.styles["Normal"]
_n.font.name = FONT_BODY
_n.font.size = Pt(11)
_n.font.color.rgb = INK
_pf = _n.paragraph_format
_pf.space_after = Pt(6)
_pf.line_spacing = 1.3

sec = doc.sections[0]
sec.top_margin = Inches(1.0)
sec.bottom_margin = Inches(1.0)
sec.left_margin = Inches(1.0)
sec.right_margin = Inches(1.0)

# ---------------------------------------------------------------- low level
def cell_shade(cell, hexcolor):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = OxmlElement('w:shd')
    shd.set(qn('w:val'), 'clear'); shd.set(qn('w:color'), 'auto'); shd.set(qn('w:fill'), hexcolor)
    tcPr.append(shd)

def set_borders(cell, color=HX_GOLD, sz=4, sides=("top", "bottom", "left", "right")):
    tcPr = cell._tc.get_or_add_tcPr()
    borders = OxmlElement('w:tcBorders')
    for s in sides:
        e = OxmlElement(f'w:{s}')
        e.set(qn('w:val'), 'single'); e.set(qn('w:sz'), str(sz))
        e.set(qn('w:space'), '0'); e.set(qn('w:color'), color)
        borders.append(e)
    tcPr.append(borders)

def cell_margins(cell, top=60, bottom=60, left=110, right=110):
    tcPr = cell._tc.get_or_add_tcPr()
    m = OxmlElement('w:tcMar')
    for name, val in (("top", top), ("bottom", bottom), ("start", left), ("end", right)):
        e = OxmlElement(f'w:{name}')
        e.set(qn('w:w'), str(val)); e.set(qn('w:type'), 'dxa')
        m.append(e)
    tcPr.append(m)

def vcenter(cell):
    cell.vertical_alignment = WD_ALIGN_VERTICAL.CENTER

def no_split_rows(tbl):
    for row in tbl.rows:
        trPr = row._tr.get_or_add_trPr()
        trPr.append(OxmlElement('w:cantSplit'))

def para_border(p, color=HX_GOLD, sz=6, sides=("bottom",)):
    pPr = p._p.get_or_add_pPr()
    pbdr = OxmlElement('w:pBdr')
    for s in sides:
        e = OxmlElement(f'w:{s}')
        e.set(qn('w:val'), 'single'); e.set(qn('w:sz'), str(sz))
        e.set(qn('w:space'), '4'); e.set(qn('w:color'), color)
        pbdr.append(e)
    pPr.append(pbdr)

def add_run(p, text, color=None, bold=False, italic=False, size=None, font=None, caps=False):
    r = p.add_run(text)
    r.bold = bold; r.italic = italic
    if color is not None: r.font.color.rgb = color
    if size is not None: r.font.size = Pt(size)
    r.font.name = font or FONT_BODY
    if caps:
        rPr = r._r.get_or_add_rPr()
        c = OxmlElement('w:caps'); c.set(qn('w:val'), 'true'); rPr.append(c)
    return r

def spacer(h=6):
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(0)
    p.paragraph_format.space_before = Pt(0)
    p.paragraph_format.line_spacing = 1.0
    p.add_run().font.size = Pt(h)
    return p

# ---------------------------------------------------------------- blocks
def _rich(p, text, base_color=INK, bold_color=None, size=None):
    """**bold** aware run writer."""
    bc = bold_color if bold_color is not None else NAVY
    for i, seg in enumerate(text.split("**")):
        if seg == "":
            continue
        add_run(p, seg, bold=(i % 2 == 1),
                color=(bc if i % 2 == 1 else base_color), size=size)

def h1(number, title, brk=True):
    """Numbered section banner — navy bar with gold number, page break before."""
    lead_p = doc.add_paragraph()
    if brk:
        lead_p.paragraph_format.page_break_before = True
    lead_p.paragraph_format.space_after = Pt(2)
    lead_p.paragraph_format.keep_with_next = True
    add_run(lead_p, "TRIVENI CABS · WEEK 50 REPORT", color=GOLD_DARK, bold=True, size=8, caps=True)
    tbl = doc.add_table(rows=1, cols=1)
    tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl.autofit = False
    cell = tbl.rows[0].cells[0]
    cell.width = Inches(6.5)
    cell_shade(cell, HX_NAVY)
    cell_margins(cell, top=140, bottom=140, left=180, right=180)
    set_borders(cell, color=HX_GOLD, sz=14, sides=("left",))
    no_split_rows(tbl)
    p = cell.paragraphs[0]
    p.paragraph_format.space_after = Pt(0)
    p.paragraph_format.line_spacing = 1.15
    if number:
        add_run(p, f"{number}   ", color=GOLD_BRIGHT, bold=True, size=17, font=FONT_HEAD)
    add_run(p, title, color=WHITE, bold=True, size=15, font=FONT_HEAD)
    s = spacer(4); s.paragraph_format.keep_with_next = True

def h2(title):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(12)
    p.paragraph_format.space_after = Pt(4)
    p.paragraph_format.keep_with_next = True
    add_run(p, title, color=NAVY, bold=True, size=13, font=FONT_HEAD)
    para_border(p, color=HX_TAN2, sz=8, sides=("bottom",))
    return p

def h3(title):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(8)
    p.paragraph_format.space_after = Pt(2)
    p.paragraph_format.keep_with_next = True
    add_run(p, title, color=GOLD_DARK, bold=True, size=11.5, font=FONT_HEAD)
    return p

def body(text, after=7, align=None):
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(after)
    if align is not None: p.alignment = align
    _rich(p, text)
    return p

def lead(text):
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(7)
    _rich(p, text, size=11.5)
    return p

def bullet(text, level=0):
    p = doc.add_paragraph()
    p.paragraph_format.left_indent = Inches(0.3 + level * 0.3)
    p.paragraph_format.space_after = Pt(4)
    add_run(p, "●  ", color=GOLD, bold=True)
    _rich(p, text)
    return p

def numbered(n, text):
    p = doc.add_paragraph()
    p.paragraph_format.left_indent = Inches(0.32)
    p.paragraph_format.space_after = Pt(4)
    add_run(p, f"{n}.  ", color=GOLD_DARK, bold=True)
    _rich(p, text)
    return p

def callout(title, text, fill=HX_TAN, barcolor=HX_GOLD):
    tbl = doc.add_table(rows=1, cols=1)
    tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    cell = tbl.rows[0].cells[0]
    cell.width = Inches(6.5)
    cell_shade(cell, fill)
    cell_margins(cell, top=100, bottom=100, left=170, right=170)
    set_borders(cell, color=barcolor, sz=20, sides=("left",))
    p = cell.paragraphs[0]
    p.paragraph_format.space_after = Pt(3)
    p.paragraph_format.line_spacing = 1.2
    if title:
        add_run(p, title.upper() + "   ", color=GOLD_DARK, bold=True, size=9.5, caps=True)
    p2 = cell.add_paragraph()
    p2.paragraph_format.space_after = Pt(0)
    p2.paragraph_format.line_spacing = 1.25
    _rich(p2, text, size=10.5)
    no_split_rows(tbl)
    spacer(4)
    return tbl

def metric_band(items):
    n = len(items)
    tbl = doc.add_table(rows=1, cols=n)
    tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    for idx, (num, label) in enumerate(items):
        cell = tbl.rows[0].cells[idx]
        cell_shade(cell, HX_NAVYDEEP)
        cell_margins(cell, top=140, bottom=140, left=90, right=90)
        set_borders(cell, color=HX_WHITE, sz=12, sides=("left", "right"))
        vcenter(cell)
        p = cell.paragraphs[0]
        p.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p.paragraph_format.space_after = Pt(1)
        p.paragraph_format.line_spacing = 1.05
        add_run(p, num, color=GOLD_BRIGHT, bold=True, size=19, font=FONT_HEAD)
        p2 = cell.add_paragraph(); p2.alignment = WD_ALIGN_PARAGRAPH.CENTER
        p2.paragraph_format.space_after = Pt(0)
        p2.paragraph_format.line_spacing = 1.05
        add_run(p2, label.upper(), color=WHITE, size=7.5, caps=True)
    no_split_rows(tbl)
    spacer(4)
    return tbl

def make_table(headers, rows, widths=None, font_size=9.8):
    tbl = doc.add_table(rows=1, cols=len(headers))
    tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    tbl.autofit = False
    hcells = tbl.rows[0].cells
    for i, h in enumerate(headers):
        cell_shade(hcells[i], HX_NAVY)
        cell_margins(hcells[i], top=80, bottom=80, left=100, right=100)
        set_borders(hcells[i], color=HX_NAVYDEEP, sz=4)
        vcenter(hcells[i])
        p = hcells[i].paragraphs[0]
        p.paragraph_format.space_after = Pt(0)
        p.paragraph_format.line_spacing = 1.1
        add_run(p, h, color=GOLD_BRIGHT, bold=True, size=9.5, caps=True)
    for r, rowvals in enumerate(rows):
        cells = tbl.add_row().cells
        fill = (HX_PAPER, HX_WHITE)[r % 2]
        for i, val in enumerate(rowvals):
            cell_shade(cells[i], fill)
            cell_margins(cells[i], top=55, bottom=55, left=100, right=100)
            set_borders(cells[i], color=HX_TAN2, sz=3)
            vcenter(cells[i])
            p = cells[i].paragraphs[0]
            p.paragraph_format.space_after = Pt(0)
            p.paragraph_format.line_spacing = 1.12
            col = INK
            if "✔" in val or "✅" in val: col = GREEN_OK
            elif "🟡" in val or "⚠" in val: col = AMBER
            elif "✘" in val or "🔴" in val: col = RED_BAD
            for k, seg in enumerate(val.split("**")):
                if seg == "":
                    continue
                add_run(p, seg, bold=(i == 0 or k % 2 == 1),
                        color=(col if col != INK else (NAVY if (i == 0 or k % 2 == 1) else INK)),
                        size=font_size)
    if widths:
        for row in tbl.rows:
            for i, w in enumerate(widths):
                row.cells[i].width = Inches(w)
    no_split_rows(tbl)
    spacer(3)
    return tbl

def url_entry(url, paras):
    """One new-page entry: monospace teal URL on a gold-barred band,
    followed by its explanatory paragraphs."""
    tbl = doc.add_table(rows=1, cols=1)
    tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    cell = tbl.rows[0].cells[0]
    cell.width = Inches(6.5)
    cell_shade(cell, HX_TEALTNT)
    cell_margins(cell, top=70, bottom=70, left=150, right=120)
    set_borders(cell, color=HX_GOLD, sz=18, sides=("left",))
    no_split_rows(tbl)
    p = cell.paragraphs[0]
    p.paragraph_format.space_after = Pt(0)
    p.paragraph_format.line_spacing = 1.1
    p.paragraph_format.keep_with_next = True
    add_run(p, "▸ ", color=GOLD_DARK, bold=True, size=10.5)
    add_run(p, url, color=TEAL, bold=True, size=10, font=FONT_MONO)
    s = spacer(2); s.paragraph_format.keep_with_next = True
    for t in paras:
        body(t, after=8)
    spacer(2)

def qa(question, answer):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(10)
    p.paragraph_format.space_after = Pt(3)
    p.paragraph_format.keep_with_next = True
    add_run(p, "▸ ", color=GOLD, bold=True, size=12)
    add_run(p, "“" + question + "”", color=NAVY, bold=True, size=11.5, font=FONT_HEAD)
    for para in (answer if isinstance(answer, list) else [answer]):
        body(para, after=7)

def divider():
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(4)
    p.paragraph_format.space_after = Pt(4)
    para_border(p, color=HX_TAN2, sz=6, sides=("bottom",))

def toc_line(label, desc, indent=False, bold_label=True):
    p = doc.add_paragraph()
    p.paragraph_format.space_after = Pt(3)
    p.paragraph_format.left_indent = Inches(0.35 if indent else 0.0)
    add_run(p, label, color=NAVY, bold=bold_label)
    add_run(p, "  —  ", color=GOLD_DARK, bold=True)
    add_run(p, desc, color=SOFT_INK)
    return p

def mono_block(lines, fill=None):
    """Fixed-width block for rendered titles, robots.txt excerpts, console output.

    Added for the Week 45 report: several findings this week are only convincing
    when the reader sees the exact string the site emitted, so those are set in
    Consolas inside a tinted panel rather than paraphrased in body text.
    """
    tbl = doc.add_table(rows=1, cols=1)
    tbl.alignment = WD_TABLE_ALIGNMENT.CENTER
    cell = tbl.rows[0].cells[0]
    cell.width = Inches(6.5)
    cell_shade(cell, fill or "F5F2EA")
    cell_margins(cell, top=110, bottom=110, left=150, right=150)
    set_borders(cell, color=HX_GOLD, sz=8, sides=("left",))
    no_split_rows(tbl)
    first = True
    for line in (lines if isinstance(lines, (list, tuple)) else [lines]):
        p = cell.paragraphs[0] if first else cell.add_paragraph()
        first = False
        p.paragraph_format.space_after = Pt(0)
        p.paragraph_format.line_spacing = 1.18
        add_run(p, line if line else " ", color=SOFT_INK, size=8.6, font=FONT_MONO)
    spacer(6)
    return tbl
