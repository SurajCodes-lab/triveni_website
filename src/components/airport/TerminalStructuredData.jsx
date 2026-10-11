import { terminalFareSchema } from '@/lib/seo/airport-offers';

export default function TerminalStructuredData({ schema, terminal }) {
  const data=[terminalFareSchema(schema,terminal),{
    '@context':'https://schema.org','@type':'WebPage',
    name:`${terminal.airportName} ${terminal.terminalCode} taxi`,
    url:`https://www.trivenicabs.in${terminal.path}`,dateModified:terminal.updatedOn,
    speakable:{'@type':'SpeakableSpecification',cssSelector:['.direct-answer','.key-facts']},
  }];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,'\\u003c')}} />;
}
