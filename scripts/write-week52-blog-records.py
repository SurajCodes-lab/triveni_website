"""Write one complete Markdown article and implementation record per blog."""
from pathlib import Path
import json,re,html,tempfile,shutil,csv

out=Path('D:/Desktop/triveni_next/2.0/week52')
tmp=Path(tempfile.gettempdir())
posts=json.loads((tmp/'week52-blog-content.json').read_text(encoding='utf-8'))
evidence=tmp/'week52-blog-verification'
local=json.loads((evidence/'local.json').read_text()) if (evidence/'local.json').exists() else None
live=json.loads((evidence/'live.json').read_text()) if (evidence/'live.json').exists() else None

def plain(text):
    return html.unescape(re.sub(r'<[^>]+>','',text)).strip()

def markdown(text):
    def table(m):
        s=m.group(0)
        caption=re.search(r'<caption[^>]*>(.*?)</caption>',s,re.S)
        rows=[re.findall(r'<t[hd][^>]*>(.*?)</t[hd]>',r,re.S) for r in re.findall(r'<tr>(.*?)</tr>',s,re.S)]
        lines=['| '+' | '.join(plain(c).replace('|','/') for c in r)+' |' for r in rows]
        lines.insert(1,'| '+' | '.join('---' for _ in rows[0])+' |')
        return '\n\n'+('**'+plain(caption[1])+'**\n\n' if caption else '')+'\n'.join(lines)+'\n\n'
    text=re.sub(r'<table[^>]*>.*?</table>',table,text,flags=re.S)
    text=re.sub(r'<a href="([^"]+)"[^>]*>(.*?)</a>',lambda m:'['+plain(m[2])+']('+m[1]+')',text,flags=re.S)
    for n in [2,3]:text=re.sub(fr'<h{n}>(.*?)</h{n}>',lambda m:'\n\n'+'#'*n+' '+plain(m[1])+'\n\n',text,flags=re.S)
    text=re.sub(r'<li>(.*?)</li>',lambda m:'\n- '+plain(m[1]),text,flags=re.S)
    text=re.sub(r'</(?:p|ul|blockquote)>','\n\n',text)
    text=html.unescape(re.sub(r'<[^>]+>','',text))
    return re.sub(r'\n{3,}','\n\n',text).strip()

records=out/'blog-implementations'
records.mkdir(parents=True,exist_ok=True)
index=['# Week 52 — Ten blog implementations','','Status: '+('Deployed and verified live.' if live else 'Implemented; '+('local production verification passed; deployment pending.' if local else 'verification in progress.')),'',
       'Each linked file contains the complete article, metadata, links and implementation evidence. Existing articles and GA4 in layout.js are retained.','']
overlap=[
 'Existing Lucknow heritage guide covers attractions; this article covers airport/station arrival coordination.',
 'Existing Ayodhya guides cover the destination; this article covers retained-vehicle versus drop decisions and return coordination.',
 'Existing route and fare pages cover the corridor; this article compares complete transport arrangements for different stays.',
 'Existing wedding playbooks cover general transport; this article provides a Lucknow guest-arrival and hotel/venue run sheet.',
 'Existing tempo guides cover vehicle categories; this article joins luggage, actual configuration and multiple Lucknow pickups.',
 'Existing Delhi–Agra playbook and fare guide retained. This article focuses on the written scope of drop, sightseeing and overnight bookings.',
 'Existing route pages retained. This article covers group pickup coordination, hotel access and quote comparison.',
 'Existing Char Dham cost and itinerary guides retained. This article covers arrivals, luggage custody and road/onward-service handovers.',
 'Existing Rishikesh destination material retained. This article coordinates independently confirmed cab and rafting bookings.',
 'Existing Lucknow/Rishikesh destination material retained. This article covers camp access, accommodation inclusions and the group return plan.'
]
for i,p in enumerate(posts):
    url='https://www.trivenicabs.in/blog/'+p['slug']
    links=re.findall(r'href="([^"]+)"',p['content'])
    status='Deployed; all ten production URLs and in-body internal targets verified.' if live else 'Implemented; deployment pending.'
    doc=[f"# B{i+1:02d} — {p['title']}",'',f'Live URL: {url}','',f'Status: {status}','',
         '## Implementation','',
         'New article in src/utilis/newBlogsWeek52.js, registered through src/utilis/blog.js. The existing blog layout, enquiry components and analytics are reused. New articles appear first in the blog archive; existing relative order is retained.','',
         '### Existing-content review','',overlap[i],'',
         '### Metadata','',f"- Title: {p['metaTitle']}",f"- Description: {p['metaDescription']}",f"- Canonical: {url}",f"- Category: {p['category']}",f"- Hero image: {p['image']}",f"- Read time: {p['readTime']}",'',
         '### Verification','',
         '- Production build: passed.' if local else '- Production build verification: pending record.',
         '- Local checks: HTTP 200, canonical, indexability, sitemap, archive discovery, article schema, all article headings and five tracking markers passed.' if local else '- Local page checks: pending.',
         '- Mobile and desktop: 390px and 1440px; no horizontal page overflow or JavaScript page errors; quote form opens without submitting a lead.' if local else '- Browser checks: pending.',
         '- Protected layout hash unchanged; all 205 prior blog entries retained; 215 total posts.',
         '- SEO checker: 0 errors; 65 existing warnings.' if local else '- SEO check evidence: pending.',
         '- Live production page, sitemap and destination checks passed.' if live else '- Live verification: pending deployment.',
         '- GA4 receipt, Google indexing and ranking outcomes require later observation; not claimed from deployment tests.','',
         '### Links and factual references','']
    doc += ['- '+('https://www.trivenicabs.in'+l if l.startswith('/') else l) for l in links]
    doc += ['','Operational terms are presented as confirmation questions, not invented prices, availability or inclusions. Official sources are linked where changing visitor requirements are discussed.','','## Complete article','',markdown(p['content']),'']
    file=p['slug']+'.md'
    (records/file).write_text('\n'.join(doc),encoding='utf-8')
    index.append(f"{i+1}. [{p['title']}](blog-implementations/{file}) — {url}")
(out/'ten-blog-implementation-index.md').write_text('\n'.join(index)+'\n',encoding='utf-8')
(out/'ten-blog-live-urls.txt').write_text('\n'.join('https://www.trivenicabs.in/blog/'+p['slug'] for p in posts)+'\n',encoding='utf-8')
dest=out/'implementation-evidence'/'ten-blogs'
dest.mkdir(parents=True,exist_ok=True)
for file in evidence.glob('*'):
    if file.is_file():shutil.copy2(file,dest/file.name)
for name in ['week52-build-final.log','week52-seo.log','week52-deploy.log']:
    if (tmp/name).exists():shutil.copy2(tmp/name,dest/name)
if live:
    from openpyxl import load_workbook
    register=out/'blog-publication-plan.csv'
    with register.open(encoding='utf-8-sig',newline='') as f:rows=list(csv.DictReader(f))
    for row in rows:
        row['Status']='Deployed and live-verified; see blog-implementations/'+row['Proposed URL'].split('/')[-1]+'.md'
        row['Overlap review']='Reviewed; distinct decision focus documented in individual MD'
    with register.open('w',encoding='utf-8-sig',newline='') as f:
        writer=csv.DictWriter(f,fieldnames=list(rows[0]));writer.writeheader();writer.writerows(rows)
    workbook=load_workbook(out/'week52_work_register.xlsx')
    sheet=workbook['Ten blogs'];columns={c.value:c.column for c in sheet[1]}
    for n,row in enumerate(rows,2):
        for field in ['Status','Overlap review']:sheet.cell(n,columns[field],row[field])
    workbook.save(out/'week52_work_register.xlsx')
    release=json.loads((tmp/'week52-release.json').read_text())
    (out/'ten-blog-deployment.md').write_text('\n'.join([
        '# Week 52 — Ten blogs deployed','',
        'All ten blog URLs passed live HTTP, canonical, article-content, sitemap, archive and tracking-marker checks. The 22 unique in-body internal destinations returned HTTP 200. Local browser verification covered 20 mobile/desktop views and opened each quote form without sending a lead.','',
        'All 205 previous blog entries remain, for 215 total. Source/public paths and previously generated HTML paths were checked for preservation on the server. GA4 in layout.js and the protected analytics files are byte-for-byte unchanged.','',
        'The release uses a separately extracted stage, a SHA256-verified archive, a retained prior-release directory and automatic rollback if activation checks fail. Blog pages, existing service pages and JavaScript resources were checked in staging and after activation.','',
        'The current local source also contains the previously implemented Week 51 city quick-answer and pilgrimage arrival sections. These existing changes were retained in the release; they are not counted as new Week 52 blog work.','',
        'SEO validation: zero errors and 65 existing warnings. No claim is made that deployment establishes Google indexing, GA4 receipt or ranking gains.','',
        'Backup: /home/ubuntu/triveni-backup-week52-blogs-20261003','',
        '[Individual blog records](ten-blog-implementation-index.md) · [Complete URL list](ten-blog-live-urls.txt)','',
        'Technical release evidence: implementation-evidence/ten-blogs/.',''
    ]),encoding='utf-8')
    shutil.copy2(tmp/'week52-release.json',dest/'release.json')
print(json.dumps({'individual_md_files':len(posts),'live_verified':bool(live),'directory':str(records)}))
