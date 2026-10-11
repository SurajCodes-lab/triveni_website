// src/utilis/corporateCityLocal.js
//
// Per-city operational facts for the nine corporate city pages.
//
// WHY THIS FILE EXISTS
// --------------------
// Measured in Week 52: the corporate city hubs rank at a weighted position of
// 19.8 while the service pages nested inside them rank at 8.2 and the root hub
// ranks at 8.2. They are also 97.7% identical to one another — two of them share
// 1,356 of 1,463 words — against 94.7% for the service pages, which rank fine.
//
// So duplication does not by itself explain the eleven-position gap, and that was
// stated plainly at the time. But it is real, and nine pages differing by seven
// per cent of their words is thin by any reasonable standard. The existing data
// already carries a short highlights list and four business areas per city; the
// rest of each page is shared constants — services, fleet, pricing models,
// compliance, benefits, FAQs — which is where the 97.7% comes from.
//
// WHAT IS IN HERE, AND WHY THESE FACTS
// ------------------------------------
// Not more words. The facts a company actually evaluates a transport supplier
// on, which differ genuinely by city and exist nowhere else on the site:
//
//   industryMix      — what the city's corporate demand is actually made of,
//                      because a manufacturing city needs three-shift coverage
//                      and a government city needs none of it.
//   commuteCorridors — where staff travel from, to where. This is the thing a
//                      transport manager is really buying and it is completely
//                      city-specific.
//   shiftPattern     — the hours that have to be covered.
//   airportAccess    — the nearest airport and the real drive from the main
//                      business district, which is what a visiting client needs.
//   localNote        — the operational constraint specific to this city. The NCR
//                      permit position and the Chandigarh tricity boundary are
//                      real issues that cost a company money if the supplier has
//                      not planned for them.
//
// WHAT IS DELIBERATELY NOT IN HERE
// --------------------------------
// No client names, no employer names, no claim about who we carry. Those are
// facts about customers, not about cities, and they are not ours to publish.
// Everything here is public geography and publicly known industrial structure.
//
// Distances and times are the honest ranges for a working day, not best-case
// figures — a transport manager who plans on a best case misses a shift.

export const corporateCityLocal = {
  delhi: {
    industryMix:
      'Government and public-sector offices, professional services, media, and the wholesale and ' +
      'electronics trade. Corporate demand here is weighted toward executive and visitor travel ' +
      'rather than the large single-site employee shuttles that the Gurgaon and Noida corridors run.',
    commuteCorridors: [
      'Connaught Place and Barakhamba Road offices, drawing staff from across the Yellow and Blue line corridors',
      'Nehru Place and Kalkaji, with pick-ups from South Delhi, Faridabad and the Badarpur side',
      'Okhla Industrial Area Phases I to III, drawing from East Delhi, Noida and Faridabad',
      'Jasola and Bhikaji Cama Place district centres',
      'Aerocity, which runs on its own rhythm because it is airport-adjacent hospitality and corporate',
    ],
    shiftPattern:
      'Largely a single general shift, 9 to 10 in the morning and 6 to 7 in the evening, with ' +
      'extended evening cover for professional services around reporting deadlines. Round-the-clock ' +
      'cover is the exception rather than the rule.',
    airportAccess: {
      airport: 'Indira Gandhi International (IGI), Terminals 1, 2 and 3',
      note:
        'Central to most of the city. Allow 45 to 60 minutes from Connaught Place and 60 to 75 ' +
        'from Okhla or Nehru Place in office hours — the Ring Road and Dhaula Kuan stretches are ' +
        'the constraint, not the distance.',
    },
    localNote:
      'Delhi is the one city on this list where the vehicle itself is a compliance question. ' +
      'Commercial vehicle age limits apply, and a vehicle crossing into Haryana or Uttar Pradesh ' +
      'for a Gurgaon or Noida leg needs the right permit for that state. A single NCR booking ' +
      'routinely crosses two state boundaries, and a supplier who has not planned the permit ' +
      'position is the reason a car gets stopped at a border post with staff in it.',
  },

  gurgaon: {
    industryMix:
      'Information technology, business process operations, consulting, financial services and ' +
      'automotive manufacturing. The highest concentration of large single-site employers on this ' +
      'list, which is what makes scheduled employee transport the dominant requirement rather than ' +
      'ad-hoc executive travel.',
    commuteCorridors: [
      'DLF Cyber City and Cyber Hub, drawing from Dwarka, Palam Vihar, Sushant Lok and South Delhi',
      'Udyog Vihar Phases I to V, drawing heavily from Delhi via the NH-48 and Dwarka Expressway side',
      'Golf Course Road and Golf Course Extension, with pick-ups from the newer Gurgaon sectors',
      'Sohna Road and the Sector 48 to 57 belt',
      'IMT Manesar, which is a long-haul corridor and a different planning problem from the city sectors',
    ],
    shiftPattern:
      'Round the clock. Business process operations serving North American and European hours mean ' +
      'genuine night rosters, not just late evenings, and that carries the night-transport duty of ' +
      'care that comes with it — a female employee on a night shift must not be the first pick-up ' +
      'or the last drop without an escort, which is a routing constraint rather than a policy note.',
    airportAccess: {
      airport: 'Indira Gandhi International (IGI), Delhi',
      note:
        'Closer than most of Delhi is. Allow 30 to 45 minutes from Cyber City outside peak and 60 ' +
        'to 75 in the evening rush; the NH-48 toll plaza and the Rangpuri stretch decide it.',
    },
    localNote:
      'Almost every Gurgaon roster crosses the Delhi or Haryana boundary at least once a day, so ' +
      'permits and border timing are a daily operational matter rather than an occasional one. The ' +
      'Manesar runs are long enough that driver duty hours become the binding constraint on how a ' +
      'roster can be built.',
  },

  noida: {
    industryMix:
      'Information technology and business process operations along the Expressway, media and ' +
      'broadcast around Film City, electronics and light manufacturing in the Special Economic ' +
      'Zone, and a growing professional-services base in the central sectors.',
    commuteCorridors: [
      'Sector 62 and 63, drawing from Indirapuram, Vaishali, Ghaziabad and East Delhi',
      'The Expressway corridor, Sectors 125 to 132, drawing from South Delhi, Kalkaji and Sarita Vihar',
      'Sector 16A Film City, which runs to broadcast hours rather than office hours',
      'Noida Special Economic Zone, Phase II',
      'Greater Noida and Knowledge Park, a long-haul corridor served separately from the city sectors',
    ],
    shiftPattern:
      'Round the clock on the Expressway corridor and in the Special Economic Zone. Film City runs ' +
      'to broadcast schedules, which means genuinely unpredictable finish times and a standby ' +
      'requirement rather than a fixed roster.',
    airportAccess: {
      airport: 'Indira Gandhi International (IGI), Delhi',
      note:
        'Allow 60 to 90 minutes from the central sectors — the DND and Ashram crossings are the ' +
        'constraint. Noida International at Jewar is the nearer option for the Greater Noida and ' +
        'Expressway sectors as it comes into service.',
    },
    localNote:
      'Noida sits on the Uttar Pradesh side of two heavily used crossings, so a Delhi pick-up for a ' +
      'Noida office crosses a state boundary each way. The DND and Chilla crossings behave very ' +
      'differently at different hours, and a roster built without that knowledge loses twenty ' +
      'minutes a vehicle a day.',
  },

  jaipur: {
    industryMix:
      'Information technology and services in the southern corridor, gems and jewellery, handicraft ' +
      'and textile manufacturing, state government offices, and a substantial hospitality sector ' +
      'that generates its own corporate and conference travel.',
    commuteCorridors: [
      'Mahindra World City on the Ajmer Road side, a long-haul corridor from the city',
      'Sitapura Industrial Area and the IT and gems units there, drawing from Malviya Nagar and Tonk Road',
      'Vishwakarma Industrial Area in the north, drawing from Jhotwara and Sikar Road',
      'C-Scheme and Ashok Marg offices, which draw from across the walled city and Bani Park',
      'Malviya Nagar Industrial Area and the Tonk Road office belt',
    ],
    shiftPattern:
      'General shift for the government and professional-services base; two and three-shift ' +
      'patterns in the Sitapura and Vishwakarma manufacturing units. The hospitality sector adds ' +
      'early-morning and late-evening transfers that do not fit either pattern.',
    airportAccess: {
      airport: 'Jaipur International (Sanganer)',
      note:
        'Unusually convenient — 20 to 30 minutes from most of the city and close to the Sitapura ' +
        'and Tonk Road corridors, which makes same-day client visits genuinely practical here.',
    },
    localNote:
      'The two industrial concentrations sit at opposite ends of the city, north and south, with ' +
      'the walled city between them. A roster that treats Jaipur as one catchment will run vehicles ' +
      'through the centre twice a day; splitting it north and south is the difference between a ' +
      'workable schedule and an expensive one.',
  },

  lucknow: {
    industryMix:
      'State government and administration, information technology and services in Gomti Nagar, ' +
      'health care and education, and light manufacturing around the airport and Transport Nagar. ' +
      'Government and institutional travel is a larger share of corporate demand here than in any ' +
      'other city on this list.',
    commuteCorridors: [
      'Vibhuti Khand and Gomti Nagar offices, drawing from Indira Nagar, Mahanagar and Gomti Nagar Extension',
      'Hazratganj and the central business district, drawing from across the older city',
      'The Shaheed Path corridor, which connects the newer office development to the airport side',
      'Amausi Industrial Area, near the airport and served from Alambagh and Krishna Nagar',
      'Transport Nagar and the southern industrial belt',
    ],
    shiftPattern:
      'Predominantly general shift, with the information-technology base in Gomti Nagar running ' +
      'extended evening and some night cover. Health care runs genuine three-shift rosters, which ' +
      'is a distinct requirement from the office traffic.',
    airportAccess: {
      airport: 'Chaudhary Charan Singh International (Amausi)',
      note:
        'Allow 30 to 45 minutes from Gomti Nagar and 20 to 30 from Hazratganj. The Shaheed Path ' +
        'route is the reliable one from the newer office areas and avoids the city centre entirely.',
    },
    localNote:
      'Lucknow is a single-state city with no border crossings in a normal roster, which removes ' +
      'the permit complexity that dominates the NCR pages. What it adds instead is VIP movement: ' +
      'as a state capital, road closures around the administrative area are routine and ' +
      'unannounced, and a schedule with no slack in it will break on those days.',
  },

  chandigarh: {
    industryMix:
      'Information technology in the technology parks, government and administration for two states ' +
      'and a union territory, education and health care, and light manufacturing in the industrial ' +
      'phases. Professional services and consulting across the tricity.',
    commuteCorridors: [
      'Rajiv Gandhi Chandigarh Technology Park, drawing from across the city and from Panchkula',
      'Industrial Area Phases I and II, drawing from the southern sectors and Mohali',
      'Sector 17 and the central business district',
      'Mohali — Quark City, the Sector 82 technology belt and the Phase VIII industrial area',
      'Panchkula — the Sector 1 to 6 offices and the technology park there',
    ],
    shiftPattern:
      'General shift for the government and professional base, with the technology parks running ' +
      'extended evening and night cover for overseas hours. More predictable than the NCR corridors ' +
      'and easier to roster tightly.',
    airportAccess: {
      airport: 'Chandigarh International (Mohali side)',
      note:
        'Allow 30 to 45 minutes from Sector 17 and 20 to 30 from Mohali. Road access is through ' +
        'the Mohali side, which matters when planning a pick-up from Panchkula — it is across the ' +
        'whole tricity rather than a short hop.',
    },
    localNote:
      'The tricity is three jurisdictions — a union territory, Punjab and Haryana — inside what ' +
      'feels like one city. A single employee shuttle from Panchkula to Mohali crosses two ' +
      'boundaries in twenty kilometres. Vehicle documentation has to be right for all three, and ' +
      'that is the thing most often got wrong here.',
  },

  dehradun: {
    industryMix:
      'State government and administration, information technology in the Sahastradhara Road park, ' +
      'education and research institutions, pharmaceutical and light manufacturing at Selaqui, and ' +
      'a hospitality sector driven by both tourism and the yatra season.',
    commuteCorridors: [
      'The IT Park on Sahastradhara Road, drawing from the city and the Rajpur Road side',
      'Rajpur Road offices and institutions',
      'Selaqui Industrial Area, a long-haul corridor on the Vikasnagar side',
      'Patel Nagar and the central commercial area',
      'Clement Town and the southern institutional belt',
    ],
    shiftPattern:
      'General shift for government and institutions. The Selaqui manufacturing units run two and ' +
      'three shifts, and the hospitality sector adds early transfers in the yatra months.',
    airportAccess: {
      airport: 'Jolly Grant, Dehradun',
      note:
        'Allow 45 to 60 minutes from the city and longer from Selaqui. It is the airport for ' +
        'Rishikesh and Haridwar too, so it carries yatra-season traffic that has nothing to do with ' +
        'the working week and should be planned around in May and June.',
    },
    localNote:
      'Dehradun is the gateway to the hill routes, which changes what a corporate fleet has to be. ' +
      'A vehicle that will take a visiting team to Mussoorie or onward into the hills needs a ' +
      'driver who runs those gradients regularly, and the monsoon months bring genuine route ' +
      'closures rather than delays. A city-only fleet will not cover what Dehradun clients ask for.',
  },

  agra: {
    industryMix:
      'Tourism and hospitality above all, leather and footwear manufacturing, foundry and ' +
      'engineering work, handicraft export, and a professional-services base around the commercial ' +
      'centre. Corporate demand is weighted toward visitor and client movement rather than large ' +
      'employee rosters.',
    commuteCorridors: [
      'Sanjay Place, the commercial and office centre',
      'Sikandra Industrial Area, on the Delhi side of the city',
      'Foundry Nagar and the Nunihai industrial belt',
      'The EPIP estate at Shastripuram',
      'The Taj Ganj hospitality belt, which runs to visitor hours rather than office hours',
    ],
    shiftPattern:
      'General shift for offices, with two and three-shift patterns in the foundry and footwear ' +
      'units. The hospitality sector is the dominant pattern and it is built around arrival and ' +
      'departure times, including very early starts for sunrise monument visits.',
    airportAccess: {
      airport: 'Agra (Kheria), with limited scheduled service',
      note:
        'Most corporate visitors arrive by road from Delhi on the Yamuna Expressway — three to ' +
        'four hours, and reliable — or by train to Agra Cantt. Planning on the airport is usually ' +
        'the wrong assumption, and this is the main thing to get right about Agra travel.',
    },
    localNote:
      'Agra is a day-trip destination for Delhi-based companies as much as a place with its own ' +
      'offices, so a large share of the corporate requirement is a same-day return from Delhi with ' +
      'a long wait in the middle. That is a driver-duty-hours problem rather than a distance ' +
      'problem, and it is why the Delhi corridor and the Agra city fleet are planned together.',
  },

  haridwar: {
    industryMix:
      'Pharmaceutical, automotive component and consumer-goods manufacturing in the integrated ' +
      'industrial estate, heavy engineering at Ranipur, and a very large pilgrimage and hospitality ' +
      'sector. The most manufacturing-weighted city on this list, which makes three-shift employee ' +
      'transport the core requirement.',
    commuteCorridors: [
      'The SIDCUL integrated industrial estate at Bahadrabad and Ranipur, drawing from Haridwar, ' +
      'Roorkee and the Jwalapur side',
      'The BHEL Ranipur township and works',
      'The Bahadrabad industrial estate',
      'Roorkee, which is both a commute origin and an institutional destination in its own right',
      'The Har Ki Pauri and ghat area, which is hospitality and pilgrimage rather than corporate',
    ],
    shiftPattern:
      'Three shifts, genuinely. The industrial estate runs continuous operations, so the transport ' +
      'requirement is a fixed roster at shift-change times with no tolerance for lateness — a late ' +
      'vehicle does not delay a meeting, it holds a production line. That is a different service ' +
      'standard from office transport and it is the defining fact about transport here.',
    airportAccess: {
      airport: 'Jolly Grant, Dehradun',
      note:
        'Allow 60 to 75 minutes. Rail is often the better option for visitors — Haridwar is well ' +
        'connected from Delhi — and the road from Delhi is four to five hours on a normal day.',
    },
    localNote:
      'Two things collide here. The industrial estate needs clockwork reliability at shift change, ' +
      'and the pilgrimage calendar periodically makes the roads impassable — the Kanwar Yatra ' +
      'closes and diverts major routes for weeks, not days. A transport plan for Haridwar that has ' +
      'not been built around that calendar will fail in exactly the months it is most needed.',
  },
};

/** Local facts for a corporate city, or null when the city has none recorded. */
export function getCorporateCityLocal(slug) {
  if (!slug) return null;
  return corporateCityLocal[String(slug).toLowerCase()] || null;
}

export default corporateCityLocal;
