const fs=require('node:fs');
const path=require('node:path');
const {load}=require('./week48-source-loader.cjs');
const {airportTerminalData}=load('src/utilis/airportTerminalData.js');
for(const key of Object.keys(airportTerminalData)) {
  const file=path.join('src/app/(routes)/airport-service',key,'page.js');
  let source=fs.readFileSync(file,'utf8');
  if(source.includes('import TerminalStructuredData')) continue;
  source="import TerminalStructuredData from '@/components/airport/TerminalStructuredData';\n"+source;
  source=source.replace(/const faqs = \[[\s\S]*?\n\];\n/, '');
  source=source.replace(/(const terminalT = airportTerminalData\[[^;]+;)/,'$1\nconst faqs = terminalT.faqs;');
  const old='<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />';
  if(!source.includes(old)) throw Error(`Missing schema insertion: ${file}`);
  source=source.replace(old,'<TerminalStructuredData schema={serviceSchema} terminal={terminalT} />');
  fs.writeFileSync(file,source);
}
console.log('Wired 9 terminal fare schemas and shared their visible/structured FAQs.');
