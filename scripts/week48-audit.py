"""Measure rendered pages, excluding scripts; preserve before/after evidence."""
import json
import re
import sys
from pathlib import Path
from html import unescape

root = Path(__file__).resolve().parents[1]
label = sys.argv[1] if len(sys.argv) > 1 else 'after'
pages = []
for path in sorted((root / '.next/server/app').rglob('*.html')):
    raw = path.read_text(encoding='utf-8')
    clean = re.sub(r'<(script|style)\b[^>]*>.*?</\1>', '', raw, flags=re.S)
    headings = re.findall(r'<h2\b[^>]*>(.*?)</h2>', clean, re.S)
    text = unescape(re.sub('<[^>]+>', ' ', clean))
    pages.append(dict(path='/' + path.relative_to(root / '.next/server/app').as_posix()[:-5],
        words=len(text.split()), tables=len(re.findall(r'<table\b', clean)),
        answers=len(re.findall(r'class="[^"]*\bdirect-answer\b', clean)),
        dates=len(re.findall(r'<time\b', clean)), images=len(re.findall(r'<img\b', clean)),
        headings=len(headings), questions=sum('?' in h for h in headings),
        bytes=path.stat().st_size))
out = root / 'reports/week48'
out.mkdir(parents=True, exist_ok=True)
target = out / f'week-48-audit-{label}.json'
if label == 'before' and target.exists():
    raise SystemExit('Baseline already exists; refusing to overwrite it.')
target.write_text(json.dumps(pages, indent=2), encoding='utf-8')
print(f'{len(pages)} rendered pages measured: {target}')
