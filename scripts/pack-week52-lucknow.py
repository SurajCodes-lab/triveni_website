from pathlib import Path
import tarfile, hashlib, os, json

root = Path.cwd()
tmp = Path(os.environ['TEMP'])
archive = tmp / 'triveni-week52-lucknow-20261006.tar.gz'
items = ['.next', 'src', 'package.json', 'package-lock.json', 'next.config.mjs', 'jsconfig.json', 'postcss.config.mjs', 'tailwind.config.js', 'scripts/week52-blog-slugs.json']
def filt(info):
    if info.name.startswith(('.next/cache', '.next/trace')) or '__pycache__' in info.name:
        return None
    return info
with tarfile.open(archive, 'w:gz', compresslevel=5) as tar:
    for item in items:
        if (root / item).exists(): tar.add(root / item, arcname=item, filter=filt)
with archive.open('rb') as f: digest = hashlib.file_digest(f, 'sha256').hexdigest()
manifest = {'archive': str(archive), 'bytes': archive.stat().st_size, 'sha256': digest, 'build': (root / '.next/BUILD_ID').read_text().strip(), 'previousBuild': 'iVejBCDCImk-kki7ppBb3', 'tag': 'week52-lucknow-20261006'}
(tmp / 'week52-release.json').write_text(json.dumps(manifest, indent=2), encoding='utf-8')
print(json.dumps(manifest))
