const fs=require('node:fs');
const client='src/app/(routes)/sightseeing/[slug]/SightseeingDetailClient.js';
let source=fs.readFileSync(client,'utf8');
const marker='function SightseeingRichBlock({ tour }) {';
if(source.includes(marker)) {
  source=source.slice(0,source.indexOf(marker)).trimEnd()+'\n';
  for(const name of ['InfographicPanel','PriceCalculator','OutboundCitations','ExpertQuote','LongTailFAQ']) source=source.replace(new RegExp(`^import ${name} from [^\\n]+\\n`,'m'),'');
  for(const name of ['getCitationsForRoute','getFounderQuoteForContext','generateLongTailFaqs']) source=source.replace(new RegExp(`^import \\{ ${name} \\} from [^\\n]+\\n`,'m'),'');
  source=source.replace('relatedContent: relatedContentProp = []}', 'relatedContent: relatedContentProp = [], richContent = null}');
  source=source.replace('<SightseeingRichBlock tour={tour} />','{richContent}');
  fs.writeFileSync(client,source);
}
const page='src/app/(routes)/sightseeing/[slug]/page.js';
let server=fs.readFileSync(page,'utf8');
if(!server.includes('import SightseeingFacts')) {
  server="import SightseeingFacts from '@/components/sightseeing/SightseeingFacts';\n"+server;
  server=server.replace('cityLabel={tourCityLabel}', 'cityLabel={tourCityLabel}\n        richContent={<SightseeingFacts tour={tour} city={tourCitySlug} />}');
  server=server.replaceAll("getRelatedToursByCity(tour.name.split(' ')[0], tour.slug, 4)","getRelatedToursByCity(tourCitySlug || tour.name.split(' ')[0], tour.slug, 4)");
  server=server.replaceAll("getRelatedContent(tour.name.split(' ')[0])","getRelatedContent(tourCitySlug || tour.name.split(' ')[0])");
  fs.writeFileSync(page,server);
}
console.log('Sightseeing facts now render on the server from the published tour prices.');
