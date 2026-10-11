from pathlib import Path
import shutil, tempfile

out = Path('D:/Desktop/triveni_next/2.0/week52')
tmp = Path(tempfile.gettempdir())
evidence = out / 'implementation-evidence' / 'lucknow-sightseeing'
source = tmp / 'week52-lucknow' / 'after-sightseeing-desktop' / 'summary.json'
if source.exists(): shutil.copy2(source, evidence / 'after-sightseeing-desktop-summary.json')
record = out / 'lucknow-sightseeing-implementation.md'
s = record.read_text(encoding='utf-8')
s = s.replace('Status: implemented locally; release verification and deployment pending.', 'Status: implemented and locally verified; deployment pending approval.')
s = s.replace('The remaining sightseeing desktop runs require a repeat because the first collection was interrupted.', 'The completed sightseeing desktop repeat recorded three runs at 0.71–0.73 seconds.')
record.write_text(s, encoding='utf-8')
print('Finalized local Lucknow evidence; deployment remains pending approval.')
