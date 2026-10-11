import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
const root = 'src/app/(routes)/airport-service';
const target = 'src/utilis/airportTerminalData.js';
if (fs.existsSync(target)) throw new Error('Already consolidated');
const entries = {}, changes = [];
for (const city of fs.readdirSync(root)) {
  const cityDir = path.join(root, city);
  if (!fs.statSync(cityDir).isDirectory() || city.includes('[')) continue;
  for (const terminal of fs.readdirSync(cityDir)) {
    const file = path.join(cityDir, terminal, 'page.js');
    if (!fs.existsSync(file)) continue;
    let source = fs.readFileSync(file, 'utf8');
    const faqs = source.match(/const faqs = (\[[\s\S]*?\n\]);/);
    const record = source.match(/const terminalT = (\{[\s\S]*?\n\});/);
    if (!record) throw new Error(`No terminal record: ${file}`);
    const data = vm.runInNewContext('(' + record[1] + ')', { faqs: vm.runInNewContext('(' + faqs[1] + ')') });
    const key = `${city}/${terminal}`;
    entries[key] = { ...data, citySlug: city, path: `/airport-service/${key}`, updatedOn: '2026-09-12' };
    source = source.replace(record[0], `const terminalT = airportTerminalData['${key}'];`);
    source = "import { airportTerminalData } from '@/utilis/airportTerminalData';\n" + source;
    changes.push([file, source]);
  }
}
fs.writeFileSync(target, '// Original terminal records, shared by terminal pages and airport hubs.\nexport const airportTerminalData = ' + JSON.stringify(entries, null, 2) + ';\nexport const getTerminalsForCity = city => Object.values(airportTerminalData).filter(t => t.citySlug === city);\n');
for (const [file, source] of changes) fs.writeFileSync(file, source);
console.log(`Consolidated ${changes.length} terminal records.`);
