"""Render Week 50 with the actual Week 49 report design helpers.

Uses the source report's cover, metric band, chapter banners, body paragraphs,
tables, callouts and contents conventions. Does not import or execute the old
report's build function, which would overwrite its output and reuse old facts.
"""
from pathlib import Path
import re,json
import w50_report_style as W
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.opc.constants import RELATIONSHIP_TYPE as RT

ROOT=Path(__file__).resolve().parent.parent
OUT=ROOT/'reports/week50'
text=(OUT/'week50_seo_report.md').read_text(encoding='utf-8')
doc=W.doc

def rich(p,text,base_color=W.INK,bold_color=None,size=None):
 for piece in re.split(r'(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)',text):
    link=re.fullmatch(r'\[([^\]]+)\]\(([^)]+)\)',piece)
    if link:
      h=OxmlElement('w:hyperlink');h.set(qn('r:id'),p.part.relate_to(link[2],RT.HYPERLINK,is_external=True))
      r=OxmlElement('w:r');pr=OxmlElement('w:rPr');c=OxmlElement('w:color');c.set(qn('w:val'),'0E666B');pr.append(c)
      if size:
        s=OxmlElement('w:sz');s.set(qn('w:val'),str(int(size*2)));pr.append(s)
      r.append(pr);t=OxmlElement('w:t');t.text=link[1];r.append(t);h.append(r);p._p.append(h)
    elif piece.startswith('**') and piece.endswith('**'):W.add_run(p,piece[2:-2],bold=True,color=bold_color or W.NAVY,size=size)
    else:W.add_run(p,piece,color=base_color,size=size)
W._rich=rich

# Cover follows cover() in build_week49_report.py with Week 50 evidence.
W.spacer(70)
for label,size,color in [('TRIVENI CABS',13,W.GOLD),('Search performance report',30,W.NAVY),('Week 50',20,W.NAVY)]:
 p=doc.add_paragraph();p.alignment=W.WD_ALIGN_PARAGRAPH.CENTER;W.add_run(p,label,color=color,bold=True,size=size,font=W.FONT_HEAD)
W.spacer(10)
p=doc.add_paragraph();p.alignment=W.WD_ALIGN_PARAGRAPH.CENTER
W.add_run(p,'What changed, how it helps the traveller, and what remains',color=W.SOFT_INK,size=12)
W.spacer(24)
W.metric_band([('206','distance routes with separate Innova pricing'),('322','city-route records normalised'),('10','existing guides expanded')])
W.spacer(18)
p=doc.add_paragraph();p.alignment=W.WD_ALIGN_PARAGRAPH.CENTER;W.add_run(p,'www.trivenicabs.in',color=W.GOLD_DARK,bold=True,size=11)

def chapter(label):
 m=re.match(r'(\d+)\. (.*)',label)
 if m:W.h1(m[1],m[2])
 else:
  m=re.match(r'Appendix ([A-Z])\. (.*)',label)
  W.h1(m[1] if m else '',m[2] if m else label)

contents=[s[3:] for s in text.splitlines() if s.startswith('## ')]
lines=text.splitlines();i=0;active=False
while i<len(lines):
 s=lines[i].strip()
 if not s:i+=1;continue
 if s.startswith('## '):
    label=s[3:]
    if label.startswith('2. '):
      W.h1('','What this report covers')
      for item in contents:
        labelpart,_,desc=item.partition('. ')
        contents_line=W.toc_line(labelpart,desc)
        contents_line.paragraph_format.space_after=W.Pt(2)
        contents_line.paragraph_format.line_spacing=1.15
    chapter(label);active=True;i+=1;continue
 if not active:i+=1;continue
 if s.startswith('#### '):W.h3(s[5:]);i+=1;continue
 if s.startswith('### '):W.h2(s[4:]);i+=1;continue
 if s.startswith('|'):
    rows=[]
    while i<len(lines) and lines[i].strip().startswith('|'):
      cells=[c.strip() for c in lines[i].strip().strip('|').split('|')]
      if not all(re.fullmatch(r':?-+:?',c) for c in cells):rows.append(cells)
      i+=1
    count=len(rows[0]);widths=[6.5*(1.5 if j==0 else 1)/(count+.5) for j in range(count)]
    if count==2:widths=[2.3,4.2]
    clean=lambda c:re.sub(r'\[([^\]]+)\]\(([^)]+)\)',r'\1',c)
    table=W.make_table([clean(c) for c in rows[0]],[[clean(c) for c in row] for row in rows[1:]],widths=widths,font_size=8.8)
    table.rows[0]._tr.get_or_add_trPr().append(OxmlElement('w:tblHeader'))
    for cells,row in zip(table.rows[1:],rows[1:]):
      for cell,source in zip(cells.cells,row):
        if re.search(r'\[[^\]]+\]\([^)]+\)',source):
          p=cell.paragraphs[0];p.clear();rich(p,source,size=8.8)
    continue
 m=re.match(r'^(\d+)\. (.*)',s)
 if m:W.numbered(int(m[1]),m[2])
 elif s.startswith('- '):W.bullet(s[2:])
 else:W.body(s)
 i+=1

# Report metadata and footer never use operational timestamps or identifiers.
doc.core_properties.title='Triveni Cabs — Week 50 Search Performance Report'
doc.core_properties.author='Triveni Cabs';doc.core_properties.subject='Detailed content and implementation report'
for sec in doc.sections:
 footer=sec.footer.paragraphs[0];footer.alignment=W.WD_ALIGN_PARAGRAPH.RIGHT
 W.add_run(footer,'TRIVENI CABS · WEEK 50  |  ',color=W.SOFT_INK,size=8)
 field=OxmlElement('w:fldSimple');field.set(qn('w:instr'),'PAGE');footer._p.append(field)
doc.save(OUT/'week50_seo_report.docx')
(OUT/'report-builder-provenance.json').write_text(json.dumps({'referenceBuilder':'build_week49_report.py','referenceDesignLibrary':'w49lib.py','adaptedDesignLibrary':'w50_report_style.py','design':'Actual Week 49 helpers: cover, metric band, navy chapter banners, Georgia headings, Calibri body, tables and contents','bodyWords':len(text.split())},indent=2),encoding='utf-8')
print('Rendered Week 50 with the actual Week 49 document design library.')
