"""Create evidence-led detailed casebooks for the expanded client report."""
from pathlib import Path
import json,re
ROOT=Path(__file__).resolve().parent.parent
OUT=ROOT/'reports/week50'
def data(name):return json.loads((OUT/name).read_text(encoding='utf-8'))
def amount(v):return float(re.sub(r'[^\d.]','',str(v)) or 0)
def money(v):return '₹'+format(int(round(amount(v))),',')
def km(r):return int(re.sub(r'[^\d]','',r['distance']))
def listnames(items):
    return ', '.join(items[:-1])+' and '+items[-1] if len(items)>1 else items[0]
before=data('03-before/city-fares.json');after=data('report-city-after.json')
distance={r['slug']:r for r in data('report-route-evidence.json')}
old_distance={r['slug']:r for r in data('01-initial/distance-fares-before.json')}
vehicle_keys={'Sedan':('Sedan',11,2200),'SUV Ertiga':('Ertiga',15,2500),'SUV Innova':('Innova',18,2800)}
city_blocks=[]; city_stats=[]; total_numeric=total_format=0
for family,cities in before.items():
 for city,oldroutes in cities.items():
    newroutes=after[family][city]; numeric=fmt=groups=0; scores=[]
    for index,(old,new) in enumerate(zip(oldroutes,newroutes)):
        score=0
        for a,b in zip(old['prices'],new['prices']):
            if a['vehicle'] not in vehicle_keys:groups+=1;assert a==b;continue
            if a['price']!=b['price'] or a['roundTrip']!=b['roundTrip']:
                if amount(a['price'])!=amount(b['price']) or amount(a['roundTrip'])!=amount(b['roundTrip']):numeric+=1;score+=1
                else:fmt+=1
        scores.append(score)
    total_numeric+=numeric;total_format+=fmt
    local=[r for r in oldroutes if km(r)<100];minimum=[r for r in oldroutes if 100<=km(r)<=300];long=[r for r in oldroutes if km(r)>300]
    shortest=min(range(len(oldroutes)),key=lambda i:km(oldroutes[i]));longest=max(range(len(oldroutes)),key=lambda i:km(oldroutes[i]))
    selected=list(dict.fromkeys([shortest,longest]))
    if len(oldroutes)>=13:
        extra=max((i for i in range(len(oldroutes)) if i not in selected),key=lambda i:(scores[i],-abs(km(oldroutes[i])-240)))
        selected.append(extra)
    origin_examples=listnames([oldroutes[i]['destination'] for i in selected])
    block=f'''### {city}: the shared route-price correction in detail

The {city} records contain **{len(oldroutes)} routes**. The pass corrected numeric amounts in **{numeric} car rows** and changed only the currency presentation in **{fmt} other car rows**. It preserved **{groups} group-vehicle rows**. These are counts of records and price rows, not a claim that the same number of new public pages was created.

The distance spread explains why this city needs more than a single example. Its records include {len(local)} routes below 100 km, {len(minimum)} from 100 to 300 km, and {len(long)} above 300 km. The same published car rates therefore meet different billing conditions within the city's own route list. The cases below use {origin_examples} to show the actual before-and-after effect rather than describing the correction only as a shared template change.
'''
    for idx in selected:
        old=oldroutes[idx];new=newroutes[idx];dist=km(old);dest=old['destination']
        op={r['vehicle']:r for r in old['prices']};np={r['vehicle']:r for r in new['prices']}
        block+=f'''\n#### {city} to {dest}: {old['distance']} in the city-route record

The existing record describes a {old['distance']} journey with a driving estimate of {old.get('time','the recorded duration')}. Those route fields were retained. The correction changes how its selected car prices are supplied to the city and booking consumers; it does not independently remeasure the road or create a new itinerary.

'''
        for key,(label,rate,base) in vehicle_keys.items():
            a,b=op[key],np[key];old_one,new_one=amount(a['price']),amount(b['price']);old_return,new_return=amount(a['roundTrip']),amount(b['roundTrip'])
            if old_one!=new_one:
                verb='increases' if new_one>old_one else 'decreases'
                text=f'The {label} one-way amount {verb} from {money(a["price"])} to **{money(b["price"])}**.'
            else:text=f'The {label} one-way amount remains **{money(b["price"])}**; its numeric value did not need correction.'
            if old_return!=new_return:text+=f' Its return field changes from {money(a["roundTrip"])} to **{money(b["roundTrip"])}**.'
            else:text+=f' Its return field remains **{money(b["roundTrip"])}**.'
            text+=f' Both values now come through the same shared calculation at the existing ₹{rate}/km vehicle rate.'
            block+=text+'\n\n'
        if dist<100:
            extra=max(0,dist-40)
            block+=f'This is a short-route case. The recorded {dist} km falls below the 100 km threshold, so the one-way car calculation uses the existing local-package treatment. Beyond the included 40 km, the record contributes {extra} extra kilometres. The separate Innova base and rate produce {money(np["SUV Innova"]["price"])}; applying the outstation minimum indiscriminately would describe a different calculation. '
            if dist*2>=100:block+=f'The return input is {dist*2} km and crosses into the existing outstation branch. That is why the return result should not be interpreted simply as the local amount doubled.'
            else:block+=f'The return input is {dist*2} km and remains below the threshold. It is recalculated using that input rather than by doubling the one-way package base.'
        elif dist<=300:
            block+=f'For the one-way estimate, {dist} recorded kilometres meet the 300-kilometre minimum. The corrected Sedan, Ertiga and Innova figures therefore use 300 billable kilometres at their respective rates. The current return calculation uses {dist*2} kilometres before applying the same minimum rule. This explains why changing the return field is a separate calculation and why the one-way FAQ must remain attached to its own value.'
        else:
            block+=f'At {dist} km, this route is already above the one-way minimum. The calculation therefore uses the recorded distance rather than substituting 300 km. At the ₹18 Innova rate, that produces {money(np["SUV Innova"]["price"])}. The return input is {dist*2} km. If an old row already matched this arithmetic, the pass preserves the amount and only standardises its presentation; it does not manufacture a price change where none is needed.'
        block+='\n\nThe practical gain is agreement between consumers of this route record. A traveller moving from the city list into the booking flow should not encounter the old stored car amount in one place and the normalised amount in another. The remaining questions are the actual itinerary and written inclusions, not which copy of the same car calculation the visitor happened to open.\n'
    unchanged_fields=['destination','distance','time','description','tags']
    for a,b in zip(oldroutes,newroutes):assert {k:v for k,v in a.items() if k!='prices'}=={k:v for k,v in b.items() if k!='prices'}
    block+=f'''\n#### What this means for the {city} content

All {len(oldroutes)} route records remain in their previous order, and the accompanying route descriptions and other non-price fields remain intact. The {groups} group-vehicle rows were not forced through the car calculation. This protects the distinction between correcting standard car displays and deciding a separate bus, tempo or specialist product price.

The {city} account demonstrates data consistency, not complete city-content research. Pickup details, operating arrangements and any conflicting distances elsewhere still need their own review. A corrected shared amount is a stronger foundation for those future additions because new copy can use the corrected consumer data rather than repeat a stale literal.
'''
    city_blocks.append(block);city_stats.append({'city':city,'routes':len(oldroutes),'numeric':numeric,'formatOnly':fmt,'examples':len(selected)})
assert total_numeric==628 and total_format==338

repair_blocks=[]
for entry in data('04-distance-link-targets.json'):
 for item in entry['sources']:
    slug=item['source'].rsplit('/',1)[1];r=distance[slug];old=old_distance[slug];dest=item['after']
    route_name=f"{r['origin']} to {r['destination']}"
    block=f'''### {route_name}: the booking journey before and after

**Existing guide:** [{route_name} distance](https://www.trivenicabs.in{item['source']})

The guide records approximately **{r['km']} km** and **{r['duration']}**. Its original route content and {old['faqCount']} FAQ entries were retained during the vehicle-pricing correction. The later booking repair addresses what happened after the visitor selected either of the two existing booking actions.

The old target was **{entry['before']}**. It looked like a plausible one-way address but was among the destinations verified as returning not found. Keeping the guide available was not enough: the action could still interrupt the journey at the point where the reader wanted to proceed.

'''
    if dest.startswith('#'):
        block+=f'''The repaired action opens the existing enquiry on the {route_name} guide. Neither an available canonical one-way destination nor a suitable existing root booking destination was selected for this case. The customer can continue with the same origin and destination instead of leaving for the missing page. This is a retained enquiry opportunity, not a newly published service or a guarantee of availability.

'''
    else:
        block+=f'''The repaired action reaches [the existing {route_name} booking destination](https://www.trivenicabs.in{dest}). The resolver can use the available commercial page even though the old one-way-shaped address is unavailable. The guide's two booking positions now use that same decision, so the hero action and the later panel agree.

'''
    if r['km']<100:
        block+=f"The price context is a short route: the current distance data displays {r['fares']['sedan']} for Sedan, {r['fares']['suv']} for Ertiga and a separate {r['fares']['innova']} for Innova under the existing local-package treatment. Those are planning estimates. The actual pickup, waiting and service arrangement still belong in the enquiry.\n"
    elif r['km']<=300:
        block+=f"The price context uses the outstation minimum for this {r['km']} km record. The displayed Sedan estimate remains {r['fares']['sedan']} and the separate Innova estimate is {r['fares']['innova']}. The repair therefore connects an existing price comparison to a usable next step without changing the route facts to justify a new destination.\n"
    else:
        block+=f"This longer record exceeds the outstation minimum. Its existing Sedan estimate is {r['fares']['sedan']}, with the separate Innova estimate at {r['fares']['innova']}. The action repair does not change those underlying kilometres or extend the quotation into a guaranteed multi-day product. It restores the route from useful information to a request the business can assess.\n"
    block+='\nBoth original actions were retained; no new redirect or replacement guide was needed. The target appears in the complete repair register and the corrected generated-output audit. This route-specific evidence should not be mistaken for a separate live-browser test on every repaired guide; interactive checks used representative cases, while the target and content checks covered the wider set.\n'
    repair_blocks.append(block)

oldmeta=data('report-before-metadata.json');plan=data('report-planning-evidence.json');urls=data('08-ten-pages/urls.json')
listing_blocks=[]
for url in urls:
 slug=url.rsplit('/',1)[1];r=distance[slug];m=oldmeta[slug];n=plan[slug]
 actual=(ROOT/'.next/server/app/distance'/f'{slug}.html').read_text(encoding='utf-8')
 import html
 title=html.unescape(re.search(r'<title>(.*?)</title>',actual).group(1))
 desc=html.unescape(re.search(r'<meta name="description" content="(.*?)"',actual).group(1))
 listing_blocks.append(f'''### {r['origin']} to {r['destination']}: the published listing change

**Previous deployed title:** {m['title']}

**Current title:** {title}

The current title leads with the named distance and the recorded {r['km']} km. The previous wording is shown here as actual before-change evidence, not reconstructed from memory. The change is part of the ten-page pilot; it does not imply that every distance title on the site was rewritten again.

**Previous deployed description:** {m['description']}

**Current description:** {desc}

The current description makes the planning purpose explicit alongside the approximate {r['duration']} driving estimate. The vehicle comparison still exists on the page, and the added section, “{n[0]}”, provides the practical explanation behind the listing's promise. The full content account earlier in the report reproduces the three published advice points.

The trade-off is deliberate: the title has limited space, so it now prioritises the selected distance query while the description and page carry the wider commercial and itinerary information. That is an editorial hypothesis to evaluate with comparable search data. It is not proof that the previous listing caused the low click rate or that the new listing will necessarily replace the search engine's chosen snippet.

The address remains [{url}]({url}). No competing URL was introduced for this query, and the prior visible body content was retained. The public checks confirmed the revised metadata was served by the site; they did not claim that search results had already refreshed or that a particular visitor had seen this exact wording.
''')

airport_blocks=[]
for airport in ['Hindon','Jewar']:
 matches=[x for x in data('06-airport-link-tests.json')['fallbacks'] if x['page']==f'/airport-service/{airport.lower()}']
 # Only the six destinations shown as repaired by the rendered-page audit.
 for x in matches:
    to=x['toCity'];airport_blocks.append(f'''### {airport} to {to}: retaining the destination through the form

The {airport} airport page retains its {airport} to {to} destination card. Before the repair, the generated root-corridor address for this selection was not a served booking destination. The card label expressed a useful customer request, but the target did not provide a working next step.

The corrected card opens the airport enquiry and supplies **{x['fromCity']}** as the airport context and **{to}** as the requested destination. The selected route is visible in the enquiry area. A traveller can therefore check that the form describes the journey they chose rather than starting again with an unrelated generic request.

The interaction is designed to retain contact information already typed when a different destination is selected. The representative mobile and desktop check demonstrated this on the Hindon selections using a draft name and a switch between destinations. The data-level resolver check covers this record, but the report does not describe that representative interaction as twelve independent live enquiry submissions.

No new flight information, operating guarantee or fare was introduced for {airport} to {to}. The repaired form is the place to confirm the requested transfer. Keeping the card preserves the useful choice; carrying its destination into the form makes the choice usable without requiring a new commercial page.
''')
assert len(airport_blocks)==12
full_city_blocks=city_blocks[:]
compact_city_blocks=[]
for block,stat in zip(city_blocks,city_stats):
 if stat['city'] in before['cityRoutesData']:
    # The seven richer origin datasets receive full multi-route narratives.
    compact_city_blocks.append(block)
 else:
    city=stat['city'];oldroutes=before['basicCityRoutes'][city];newroutes=after['basicCityRoutes'][city]
    idx=max(range(len(oldroutes)),key=lambda i:sum(amount(a['price'])!=amount(b['price']) or amount(a['roundTrip'])!=amount(b['roundTrip']) for a,b in zip(oldroutes[i]['prices'][:3],newroutes[i]['prices'][:3])))
    old,new=oldroutes[idx],newroutes[idx];dist=km(old)
    changes=[]
    for a,b in zip(old['prices'][:3],new['prices'][:3]):
      changes.append(f"{vehicle_keys[a['vehicle']][0]}: one-way {money(a['price'])} to {money(b['price'])}; return {money(a['roundTrip'])} to {money(b['roundTrip'])}")
    rule=('uses the existing local-package branch because its recorded distance is below 100 km' if dist<100 else 'uses the 300-kilometre minimum for the one-way amount' if dist<=300 else 'uses its recorded distance because it exceeds the outstation minimum')
    compact_city_blocks.append(f'''### {city}: route-price coverage and a worked example

The {city} group retains **{stat['routes']} route records**. The shared correction changes numeric values in **{stat['numeric']} car rows** and only presentation in **{stat['formatOnly']} rows**. The vehicle products outside Sedan, Ertiga and Innova retain their recorded prices, and route facts remain unchanged.

The {city}–{old['destination']} record gives a concrete example at **{old['distance']}**, with its existing **{old.get('time','recorded driving time')}** estimate. Its car figures read as follows: {'; '.join(changes)}. These are the actual before-and-after exported values, not a newly quoted customer package.

This example {rule}. Its current return field is recalculated from twice the recorded distance under the preserved booking-family method; it is not a promise about every multi-day itinerary. The value of applying that rule at the shared boundary is that the {city} route card and booking consumers no longer choose between the old literal and the corrected car amount. Pickup arrangements and written inclusions still need confirmation for the actual request.
''')
city_blocks=compact_city_blocks
# Retain a distinct factual account of every repair without repeating the
# family-level preservation and measurement explanation forty-seven times.
repair_blocks=[]
for entry in data('04-distance-link-targets.json'):
 for item in entry['sources']:
    slug=item['source'].rsplit('/',1)[1];r=distance[slug];dest=item['after'];title=f"{r['origin']} to {r['destination']}"
    action=(f"the existing enquiry on the same guide, carrying {r['origin']} as origin and {r['destination']} as destination" if dest.startswith('#') else f"[the existing booking page](https://www.trivenicabs.in{dest})")
    reason=('No dedicated booking page was selected for this case, so a route-specific enquiry preserves the action without inventing a service page.' if dest.startswith('#') else 'The available commercial destination was usable even though the old one-way-shaped address was not; both button positions now make that same selection.')
    repair_blocks.append(f'''### {title}: the repaired next step

The [existing guide](https://www.trivenicabs.in{item['source']}) retains its **{r['km']} km** and **{r['duration']}** estimates. Its two booking actions previously used **{entry['before']}**, a destination verified as returning not found. They now reach {action}.

{reason} The guide's price context remains visible: Sedan **{r['fares']['sedan']}**, Ertiga **{r['fares']['suv']}** and the separate Innova estimate **{r['fares']['innova']}**. This repair changes the journey after the click, not the recorded distance or service availability. It belongs to the full target-level verification; representative browser tests separately checked the shared interaction.
''')
sections='''## Appendix F. City-by-city pricing casebook

This casebook reads the actual before-and-after route records for all 32 origin groups. Each account reports the complete local scope and explains selected examples in prose. Numeric changes are distinguished from formatting-only changes. No route facts or group-vehicle prices are presented as newly researched simply because their car-price consumer changed.

'''+ '\n'.join(city_blocks)+'''\n## Appendix G. The 47 repaired distance journeys explained

The earlier register provides a quick destination list. These accounts explain what each repair changes for its specific guide, which price context the visitor sees and what the resulting action does. The route-specific checks are distinguished from representative browser tests. Each account concerns existing content and two repaired actions, not a newly created service page.

'''+ '\n'.join(repair_blocks)+'''\n## Appendix H. Search-listing before-and-after dossier

The titles and descriptions below were extracted from the previous deployed output and the edited pages. They make the listing change reviewable in its own words. Exact figures in those older descriptions are reproduced as historical site copy, not independently verified current quotes. The earlier page accounts explain the retained current fare basis and planning content.

'''+ '\n'.join(listing_blocks)+'''\n## Appendix I. Airport transfer interaction dossier

These twelve accounts explain the repaired selections in the rendered Hindon and Jewar pages. They distinguish retaining a destination choice from creating a new service, and explain how the selected transfer reaches the enquiry form. The common interaction preserves the contact draft when selection changes.

'''+ '\n'.join(airport_blocks)
(OUT/'report-expanded-casebooks.md').write_text(sections,encoding='utf-8')
stats={'cityAccounts':len(city_blocks),'cityExamples':sum(r['examples'] if r['city'] in before['cityRoutesData'] else 1 for r in city_stats),'cityNumericRows':total_numeric,'cityFormattingOnlyRows':total_format,'distanceCaseAccounts':len(repair_blocks),'listingComparisons':len(listing_blocks),'airportAccounts':len(airport_blocks),'casebookWords':len(sections.split()),'cities':city_stats}
(OUT/'expanded-report-evidence.json').write_text(json.dumps(stats,indent=2),encoding='utf-8')
print(json.dumps({k:v for k,v in stats.items() if k!='cities'}))
