"""Explicit Adventure SEO, earned-link and sightseeing planning deliverables."""

def extend_plan(md, inventory, known, adventure, table):
    for i, line in enumerate(md):
        md[i] = line.replace('No separate blog subdomain or independent outreach programme is included.', 'No separate blog subdomain is included. Adventure SEO and earned-backlink research are dedicated workstreams below.')
    clusters = [
        ('Rafting', '/river-rafting-in-rishikesh', 'rafting in Rishikesh; rafting package', 'Separate overview intent from distance-specific options; verify availability, inclusions and meeting points.'),
        ('Bungee', '/bungee-jumping-in-rishikesh', 'bungee jumping Rishikesh', 'Verify location, operator, actual restrictions and price basis; substantiate height and superlative claims.'),
        ('Camping', '/camping-in-rishikesh', 'camping in Rishikesh', 'Explain accommodation type, actual facilities, meals, arrival and exclusions.'),
        ('Packages', '/rishikesh-adventure-packages', 'Rishikesh adventure packages', 'Compare actual combinations and durations; avoid competing generic package pages.'),
        ('Groups', '/college-group-trip-rishikesh', 'Rishikesh college group trip', 'Separate student and corporate needs; clarify group quotation and coordination.'),
        ('Corporate', '/corporate-team-outing-rishikesh', 'Rishikesh corporate outing', 'Explain verified activities, timing, group logistics and enquiry requirements.'),
        ('Rentals', '/bike-rental-in-rishikesh', 'bike rental Rishikesh', 'Differentiate bike, scooty and model pages; verify deposit, documents and rental terms.'),
        ('Pilgrimage', '/char-dham-yatra-from-rishikesh', 'Char Dham from Rishikesh', 'Map start-point intent separately from main-site cab and vehicle pages; verify seasonal information.'),
        ('Sightseeing', '/rishikesh-haridwar-combo-tour', 'Rishikesh Haridwar tour', 'Describe actual stops, pickup, duration, transport and activity inclusions.'),
    ]
    seo = [{'Cluster':c,'Candidate URL':p,'Local route exists':p in adventure,'Candidate queries':q,'Content action':a,'Query evidence':'Pending fresh Adventure GSC; no search-volume claim','Owner':'SEO + operations','Status':'Planned'} for c,p,q,a in clusters]
    adv = [{'Path':p,'Route type':'Auxiliary' if p in ['/robots.txt','/sitemap.xml','/favicon.ico'] else 'Page candidate','Priority':'P1' if p in [c[1] for c in clusters] or p=='/' else 'P2','Indexability and canonical':'Pending live check','Primary query and intent':'Pending individual mapping','Title H1 content links':'Pending individual review','Schema and visible facts':'Pending validation','LCP and enquiry checks':'Pending','Owner':'SEO + developer','Status':'Not reviewed'} for p in sorted(adventure)]
    sight = [{'Path':p,'Priority':'P1 Lucknow' if 'lucknow' in p else 'P1' if p in ['/sightseeing','/sightseeing/agra','/sightseeing/delhi','/sightseeing/jaipur','/sightseeing/rishikesh','/sightseeing/haridwar'] else 'P2','Primary query':'Pending page/query evidence','Canonical and overlap':'Pending','Itinerary and operations':'Verify stop order, duration, opening hours, pickup and accessibility','Price and exclusions':'Verify hours/km, parking, tolls, tickets, guide and overtime','Booking and LCP':'Pending','Owner':'SEO + operations','Status':'Planned individual review'} for p in sorted(known) if p=='/sightseeing' or p.startswith('/sightseeing/')]
    for row in inventory:
        if row['Site']=='Triveni Cabs' and (row['Path']=='/sightseeing' or row['Path'].startswith('/sightseeing/')):
            row['Family']='Sightseeing / city tours'
    opportunities = [
        ('Existing operating partners','Verified rafting/camping operators and accommodation partners','Relevant visitor-planning or partner page','Check a real relationship and useful destination; prepare a factual listing request.'),
        ('Hotels and hostels','Rishikesh/Haridwar accommodation with genuine guest activity resources','Activity or sightseeing page matching guest need','Research public guest guides and propose accurate activity/transfer information.'),
        ('Local travel publishers','Independent destination guides with editorial standards','Useful activity comparison or arrival-planning resource','Offer original verified material, images with rights, or operator expertise; publisher decides coverage.'),
        ('Mention reclamation','Existing unlinked Triveni Adventure mentions','The exact service or brand page referenced','Verify brand identity and relevance before preparing a correction/link request.'),
        ('Broken reference repair','Relevant travel pages containing an outdated resource','A genuinely equivalent current resource','Verify the broken reference and content fit; do not suggest unrelated landing pages.'),
        ('Relevant business listings','Legitimate tourism/business listings with actual eligibility','Adventure homepage or appropriate service page','Check eligibility and accurate contact details; avoid mass directory submission.'),
    ]
    backlinks=[{'Opportunity type':c,'Research scope':s,'Destination rationale':d,'Next action':a,'Prospect domain':'Not researched','Source page':'Pending','Relationship evidence':'Pending','Contact channel':'Pending public business contact','Pitch':'Not drafted','Owner':'SEO / partnerships','Status':'Research planned; not contacted','Published URL':'','Link attribute':'','Referral/enquiry evidence':''} for c,s,d,a in opportunities]
    content = [
        '## 13. Adventure SEO: dedicated page-by-page workstream','',
        'Adventure receives its own technical SEO, query mapping, content and conversion work alongside the redesign. Use an Adventure URL-prefix property or a correctly filtered verified domain property in Search Console. Export its latest 28 days and comparison period, page/query results, indexing reports and sitemap status. Keep this evidence separate from the main-site export. No Adventure rankings or indexing problems have yet been measured in this planning pass.','',
        table(['Cluster','Existing candidate page','Candidate search intent','Planned improvement'],clusters),'',
        'These are research hypotheses, not measured keyword opportunities. Assign one primary visitor task to each existing indexable page using actual queries and content review. Review the full Adventure route register individually, including lower-priority activities and rentals; classify auxiliary endpoints separately. Preserve URLs and useful content. Resolve overlap through clearer intent, navigation and content before considering any structural change.','',
        'Technical review: crawl final live URLs and record status, redirect destination, canonical, robots directives, rendered text, title, H1, description, internal links, sitemap inclusion and image alternatives. Check mobile navigation and orphan pages. Validate existing structured data against visible facts; use only applicable types and supported ratings. Check enquiry links and distinguish an enquiry from confirmed activity availability. Fix verified defects and rerun the same checks. Google guidance: https://developers.google.com/search/docs/fundamentals/seo-starter-guide .','',
        'On-page review: prioritise rafting, camping, bungee, packages, group outings, rentals and pilgrimage, then the remaining pages. Improve actual inclusions, selection criteria, arrival instructions and booking requirements. Verify changing prices, restrictions and seasonal information with operations. Connect overview pages to the correct detail options and back. Preserve Adventure contacts and establish authorised analytics configuration without removing main-site GA4.','',
        'Acceptance: every route has a reviewed or explicitly pending status; each edited page has a query/intent decision, source-backed changes, metadata and canonical checks, enquiry test and implementation MD. Recheck live indexing eligibility and track relevant impressions, clicks, CTR, enquiry actions and LCP separately. Ranking improvement is measured after release, not inferred from an edit count.','',
        '## 14. Adventure backlink earning and tracking','',
        'Useful links between the two Triveni properties remain in scope. Add a separate programme to earn references from relevant independent websites. The weekly work is research, a useful destination resource, personalised outreach drafts and evidence tracking. Publication depends on the other website; no acquired-link count or ranking result is guaranteed.','',
        table(['Opportunity','Research scope','Destination','Action'],opportunities),'',
        'Research target: qualify up to 15 relevant prospects and prepare up to five individually researched outreach drafts, prioritising existing genuine relationships. These are work-planning limits, not claims that prospects have been found. Record the exact source page, public contact route, audience relevance, relationship evidence, proposed destination and the reason its readers benefit. Exclude irrelevant sites even if that leaves fewer prospects. External sending and public submissions are separate execution actions; this planning update sends nothing.','',
        'Create one useful reference section or downloadable checklist within an existing Adventure page: activity-arrival planning, verified inclusions comparison, or group pickup and activity coordination. Confirm every operational fact and image right. This is an existing-page improvement and does not add to the ten-blog publishing commitment. Tailor each pitch to the prospect and let the publisher choose whether and how to link.','',
        'Use earned editorial coverage and legitimate listings. Do not buy ranking-credit links, automate comment links, require reciprocal links or distribute exact-match anchors. Commercial sponsorship must be identified and links appropriately qualified. Policy reference: https://developers.google.com/search/docs/essentials/spam-policies .','',
        'Track opportunities through researched, qualified, drafted, contacted, replied and published states only when evidence exists. For published links, save the source URL, destination, anchor, link attribute, live status, relevance and referral/enquiry observations. Keep independent referring domains separate from owned Triveni cross-links; a directory listing and an editorial recommendation are different outcomes. Do not treat a third-party authority score as proof of traffic value.','',
        '## 15. Sightseeing and city-tour ranking focus','',
        f'The dedicated sightseeing queue contains {len(sight)} locally known main-site paths under /sightseeing, including the hub. This is route discovery, not a count of live indexed pages. Review each entry and resolve redirects before assigning keywords. Prioritise Lucknow, followed by Delhi, Agra, Jaipur, Ayodhya, Varanasi, Haridwar and Rishikesh, then the remaining city and tour pages.','',
        'Lucknow first: review /sightseeing/lucknow, both existing heritage/nawabi tour candidates, and the Ayodhya and Prayagraj tour pages. Check whether similar tours actually have distinct itineraries before rewriting. Connect them naturally with /lucknow, appropriate vehicle pages and existing destination guides. Keep the tour-selection task distinct from a point-to-point cab drop.','',
        'For each tour, verify stop order, feasible duration, pickup/drop, walking requirements, operating days, attraction opening hours and ticket rules with current reliable sources. Explain transport, guide, tickets, parking, tolls, meals, waiting and extra-hour/km terms separately. Describe full-day versus half-day choices only where actually offered. Retain useful itinerary content and do not promise access or reserved entry without evidence.','',
        'Map city sightseeing cab, full-day city tour, same-day excursion and places-to-visit intent to their appropriate existing pages. Improve titles and descriptions from page/query evidence, add helpful attraction and vehicle links, and check breadcrumbs and applicable structured data. Test mobile itinerary readability, image LCP, booking state and WhatsApp context. An enquiry from a sightseeing page should retain the selected tour.','',
        'Adventure sightseeing focus includes the Rishikesh-Haridwar combo, Haridwar tour, Ganga Aarti tour and existing destination excursions. Clarify activity package versus sightseeing transport, and link to the main-site sightseeing/cab page only where it helps arrange the journey. On the main site, connect relevant Rishikesh itineraries to Adventure activities without implying those activities are included in the cab price.','',
        'Keep exactly ten new blogs total. Use B01/B02/B06/B09/B10 to link to relevant sightseeing resources when their existing intent supports it; do not add an eleventh article. Existing sightseeing-page expansion is a separate workstream.','',
        '## 16. Added execution sequence and deliverables','',
        table(['Stage','Adventure SEO and backlinks','Sightseeing'],[
            ('1','GSC baseline, route classification and technical crawl; prospect research','Inventory, canonical and demand mapping; Lucknow first'),
            ('2-3','Priority keyword mapping and page corrections; qualify prospects','Lucknow and priority city/tour content checks'),
            ('4-5','Apply SEO during redesign; prepare reference resource and outreach drafts','Itinerary/inclusion improvements, contextual links and booking checks'),
            ('6','Recheck metadata, schema, crawlability, LCP and tracking','Test changed tours and shared layouts on mobile/desktop'),
            ('7','Release verified changes; record pending outreach and live-link evidence','Live verification and per-page implementation records')]),'',
        'Additional files: adventure-seo-page-register.csv, adventure-keyword-plan.csv, adventure-backlink-opportunities.csv, sightseeing-page-register.csv and adventure-seo-backlink-sightseeing-plan.md. The workbook includes corresponding tabs. Assign an individual owner before execution; role owners in this plan are placeholders. No website edits, outreach, backlinks acquired or SEO results are claimed by these planning files.',''
    ]
    md.extend(content)
    # Follow the previous week's editorial structure rather than a scope memo.
    sections = {}
    current = None
    for line in md:
        if line.startswith('## '):
            current = line.split('. ', 1)[0].removeprefix('## ')
            sections[current] = []
        elif current:
            sections[current].append(line)
    sections['1'] = ['',
        'Week 52 focuses on relevant keyword rankings, useful individual pages and qualified enquiries across Triveni Cabs and Triveni Adventure. Lucknow, priority intercity routes and sightseeing lead the main-site programme. Wedding, Char Dham, tempo travellers, local and outstation cabs, one-way and round-trip bookings remain part of the page-by-page work.', '',
        'Publish ten distinct new blogs under the existing main-site /blog/ path. Improve all city hubs through individual review, measure LCP before and after justified fixes, and preserve successful content and booking journeys. Adventure receives dedicated SEO, redesign, earned-backlink research and relevant navigation between the two properties.', '',
        'Preserve existing useful content, public URLs, GA4 in layout.js, Search Console verification and enquiry tracking. Record each implementation in Markdown with affected pages, evidence, changes, verification and outstanding work.', '']
    diagnosis = ['',
        'The available main-site export shows a stronger Lucknow wedding page than city hub: /wedding/lucknow recorded 475 clicks at average position 6.17, while /lucknow recorded 28 clicks at 26.55. These full-window historical figures identify a review opportunity; they do not establish present rankings or the effect of Week 51 changes.', '',
        'Lucknow tempo, supporting route information and destination guides provide related entry points. Improve the relationship between these pages and the booking task while protecting existing successful answers. Obtain current page/query comparisons before assigning a keyword to a landing page.', '',
        'Adventure has no supplied current search-performance baseline. Its local route inventory supports a complete audit queue, while first-render animation and image visibility are performance investigation candidates. Measure the live pages before attributing ranking or conversion performance to the redesign.', '']
    measurement = ['',
        'Evaluate the trailing seven-day trend and matched 28-day periods for each property separately. Compare relevant queries by landing page, device and intent. Track qualified enquiry actions alongside organic clicks, impressions and CTR; distinguish cross-site navigation from enquiries.', '',
        'Record implementation completion separately from observed search outcomes. Report reviewed-keep, edited, verified, deployed and pending states per URL. Missing data remains unavailable. Compare lab LCP under the same conditions, and label field URL/origin data separately.', '']
    mapping = [
        ('1. Organic growth priorities', sections['1']),
        ('2. Evidence and limits', sections['2']),
        ('3. Performance diagnosis', diagnosis),
        ('4. How organic improvement will be evaluated', measurement + sections['3']),
        ('5. Keyword ranking programme', ['','### Lucknow landing-page priorities',''] + sections['4'] + ['### Priority intercity corridors',''] + sections['6'] + ['### Adventure keyword and technical SEO programme',''] + sections['13']),
        ('6. First Week 52 batch: traffic and commercial value', ['','### Sightseeing and city tours',''] + sections['15'] + ['### Adventure redesign and enquiry journey',''] + sections['9']),
        ('7. Individual coverage of both sites', sections['5']),
        ('8. Organic content and authority work', sections['7'] + ['### Related-brand navigation',''] + sections['10'] + ['### Adventure earned-backlink programme',''] + sections['14']),
        ('9. Technical support and Week 51 carry-forward', sections['8']),
        ('10. Week 52 execution sequence', sections['11'] + sections['16']),
        ('11. Measurement and decisions after publication', measurement),
        ('12. Files, interpretation and immediate next work', sections['12']),
    ]
    md[:] = ['# Triveni Cabs and Adventure — Week 52 internal organic growth plan','']
    for heading, body in mapping:
        md.extend(['## '+heading] + body)
    for i,line in enumerate(md):
        md[i] = line.replace('No numerical click target is included in the plan. ', '').replace('Additional files:', 'Supporting files:')
    return [('Adventure SEO pages',adv,'adventure-seo-page-register.csv'),('Adventure keywords',seo,'adventure-keyword-plan.csv'),('Adventure backlinks',backlinks,'adventure-backlink-opportunities.csv'),('Sightseeing',sight,'sightseeing-page-register.csv')], content
