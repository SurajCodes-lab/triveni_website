from pathlib import Path
import tarfile,hashlib,os,json
root=Path.cwd();tmp=Path(os.environ['TEMP'])
out=tmp/'triveni-week52-blog-table-fix-20261003.tar.gz'
items=['.next','src','package.json','package-lock.json','next.config.mjs','jsconfig.json','postcss.config.mjs','tailwind.config.js','scripts/week52-blog-slugs.json']
def filt(info):
    if info.name.startswith(('.next/cache','.next/trace')) or '__pycache__' in info.name:return None
    return info
with tarfile.open(out,'w:gz',compresslevel=5) as tar:
    for item in items:
        if (root/item).exists():tar.add(root/item,arcname=item,filter=filt)
with tarfile.open(out) as tar:
    names=tar.getnames();assert '.next/BUILD_ID' in names
    for slug in json.loads((root/'scripts/week52-blog-slugs.json').read_text()):
        assert any(n.endswith('/blog/'+slug+'.html') for n in names),slug
with out.open('rb') as f:digest=hashlib.file_digest(f,'sha256').hexdigest()
manifest={'archive':str(out),'bytes':out.stat().st_size,'sha256':digest,'build':(root/'.next/BUILD_ID').read_text().strip(),'previousBuild':'2WOaAnHJ0WntD8MyF1cvZ','tag':'week52-blog-tables-20261003'}
(tmp/'week52-release.json').write_text(json.dumps(manifest,indent=2))
print(json.dumps(manifest))
