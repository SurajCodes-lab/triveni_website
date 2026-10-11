from pathlib import Path
import tempfile,json,shutil
tmp=Path(tempfile.gettempdir());out=Path('D:/Desktop/triveni_next/2.0/week52')
local=json.loads((tmp/'week52-blog-verification/local.json').read_text())
live=json.loads((tmp/'week52-blog-verification/live.json').read_text())
assert len(local['browser'])==20 and len(live['pages'])==10
assert all(p['cellBorder']=='1px' for p in local['browser'])
assert live['preservation']['trackingCodeUnchanged']
dest=out/'implementation-evidence'/'blog-display-fix';dest.mkdir(parents=True,exist_ok=True)
for f in (tmp/'week52-blog-verification').glob('*'):
    if f.is_file():shutil.copy2(f,dest/f.name)
for name in ['week52-table-final-build.log','week52-display-deploy.log','week52-release.json']:
    shutil.copy2(tmp/name,dest/name)
text='''# Week 52 — Blog tables, empty Quick Links and favicon references

Status: deployed and verified on the public site.

## Changes

- Removed the Quick Links grid from the blog layout as requested. Article links, other navigation and existing content remain.
- Added visible borders around every cell in the ten new article tables, a shaded header, padding and minimum column widths. Wide tables scroll inside their container on mobile without overflowing the page.
- Corrected the favicon references in layout.js to the existing square 180×180 PNG at /apple-touch-icon.png. The previous metadata included a wide WebP wordmark and incorrectly declared that image as a square Apple icon. No main-site logo image was replaced.

## Verification

The production build passed. Twenty local browser checks covered all ten blogs at mobile and desktop widths. Each table has a computed 1px cell border, no page overflow, no JavaScript page errors and a working quote-form opener. All ten public blog URLs, their canonical URLs, sitemap entries and five tracking markers passed, along with 22 in-body internal destinations.

The layout comparison permits only the icon metadata change. All other layout content, including GA4 and Search Console verification, is unchanged. Dedicated analytics files also matched production before activation. Existing source files, public assets, blog entries and generated HTML paths were retained.

Deployment used SHA256-verified upload chunks, an independently extracted stage, checks before and after activation, and a retained backup at /home/ubuntu/triveni-backup-week52-blog-tables-20261003.

## Search-result favicon limitation

The source configuration is corrected; Google's displayed result is cached and has not been claimed as updated. Google must recrawl the home page and process the favicon, which can take several days to several weeks. The complete wordmark remains inherently small at favicon display size. No new compact brand mark was invented.

Reference: https://developers.google.com/search/docs/appearance/favicon-in-search

Evidence: implementation-evidence/blog-display-fix/.
'''
(out/'blog-display-and-favicon-fix.md').write_text(text,encoding='utf-8')
addition='\n\n## Display follow-up\n\nDeployed: the empty Quick Links section is removed; the comparison table has visible cell borders, a shaded header and mobile scrolling. Favicon metadata now points to the existing square PNG; analytics code is preserved. See [display and favicon verification](../blog-display-and-favicon-fix.md).\n'
for file in (out/'blog-implementations').glob('*.md'):
    s=file.read_text(encoding='utf-8')
    if '## Display follow-up' not in s:file.write_text(s+addition,encoding='utf-8')
print('Follow-up record and ten individual blog MD files updated.')
