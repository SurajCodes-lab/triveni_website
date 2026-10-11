"""Upload the verified release in resumable chunks, then stage and activate it."""
from pathlib import Path
import subprocess,json,tempfile,hashlib,time

tmp=Path(tempfile.gettempdir())
release=json.loads((tmp/'week52-release.json').read_text())
assert (tmp/'week52-blog-verification/local.json').exists()
archive=Path(release['archive'])
assert hashlib.file_digest(archive.open('rb'),'sha256').hexdigest()==release['sha256']
bin=Path('C:/Program Files/Git/usr/bin')
key=str(Path('LightsailDefaultKey-ap-south-1 (1).pem').resolve())
opts=['-i',key,'-o','BatchMode=yes','-o','StrictHostKeyChecking=yes','-o','ConnectTimeout=20','-o','ServerAliveInterval=15','-o','ServerAliveCountMax=3']
host='ubuntu@13.201.84.132'
def ssh(command,timeout=90):
 return subprocess.run([str(bin/'ssh.exe'),*opts,host,command],text=True,capture_output=True,timeout=timeout,check=True).stdout.strip()
def scp(source,target):
 subprocess.run([str(bin/'scp.exe'),*opts,str(source),host+':'+target],check=True,timeout=120,stdout=subprocess.DEVNULL)
tag=release['sha256'][:12]
chunks=tmp/('week52-upload-'+tag);chunks.mkdir(exist_ok=True)
files=[]
with archive.open('rb') as f:
 i=0
 while data:=f.read(8*1024*1024):
  file=chunks/f'chunk-{i:03d}'
  if not file.exists() or file.stat().st_size!=len(data):file.write_bytes(data)
  files.append(file);i+=1
remote_dir='/tmp/week52-blogs-'+tag
ssh('mkdir -p '+remote_dir)
for i,file in enumerate(files):
 target=remote_dir+'/'+file.name
 expected=hashlib.file_digest(file.open('rb'),'sha256').hexdigest()
 result=ssh('sha256sum '+target+' 2>/dev/null || true')
 if result.startswith(expected):print(f'Chunk {i+1}/{len(files)} already verified',flush=True);continue
 for attempt in range(1,5):
  try:
   scp(file,target)
   assert ssh('sha256sum '+target).startswith(expected)
   print(f'Chunk {i+1}/{len(files)} uploaded and SHA256 verified',flush=True)
   break
  except (subprocess.SubprocessError,AssertionError) as e:
   print(f'Chunk {i+1}: retry {attempt}; {type(e).__name__}',flush=True)
   if attempt==4:raise
   time.sleep(2)
remote_archive='/tmp/triveni-week52-blogs-20261003.tar.gz'
ssh('cat '+remote_dir+'/chunk-* > '+remote_archive,timeout=180)
assert ssh('sha256sum '+remote_archive,timeout=120).startswith(release['sha256'])
print('Complete archive SHA256 verified. Starting staged deployment.',flush=True)
scp(Path('scripts/deploy-week52-blogs.sh'),'/tmp/deploy-week52-blogs.sh')
command='bash /tmp/deploy-week52-blogs.sh '+release['sha256']+' '+release['build']
if 'previousBuild' in release:
 command+=' '+release['previousBuild']+' '+release['tag']
subprocess.run([str(bin/'ssh.exe'),*opts,host,command],check=True)
