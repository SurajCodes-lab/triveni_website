// Links from this site to Triveni Adventure (adventure.trivenicabs.in).
//
// The two sites answer two halves of the same trip: we move the traveller, the
// Adventure site runs what they do when they arrive. Until now the only links
// between them were a footer link and two mentions inside one article, so a
// reader planning a Rishikesh trip on a cab page had no way to reach the
// activity they were actually travelling for.
//
// Keyed by this site's path. Every destination slug below is one of the pages
// the Adventure site actually builds — checked against its item list, and worth
// re-checking when adding entries, because a cross-site link cannot be verified
// by this site's own build.
const ADVENTURE = 'https://adventure.trivenicabs.in';

export const adventureUrl = (slug) => `${ADVENTURE}/${slug}`;

const BY_PATH = {
  '/rishikesh': {
    heading: 'What to do once you arrive in Rishikesh',
    intro:
      'Triveni Adventure is our Rishikesh operation. If the reason for the journey is the river or the gorge rather than the town itself, these are the pages worth reading before you fix a pickup time.',
    links: [
      ['things-to-do-in-rishikesh', 'Things to do in Rishikesh', 'The full activity list with prices'],
      ['river-rafting-in-rishikesh', 'River rafting', 'Four stretches from 9 km to 36 km'],
      ['camping-in-rishikesh', 'Riverside camping', 'Overnight camps with bonfire and meals'],
      ['bungee-jumping-in-rishikesh', 'Bungee jumping', 'India’s highest fixed platform'],
    ],
  },
  '/delhi-to-rishikesh': {
    heading: 'Booking the activity as well as the drive',
    intro:
      'Most people making this journey are going for something specific. Book the activity before you fix the pickup time, because the reporting slot decides when you need to leave Delhi — not the other way round.',
    links: [
      ['river-rafting-in-rishikesh', 'River rafting in Rishikesh', 'Reporting times and stretch options'],
      ['camping-in-rishikesh', 'Riverside camping', 'Where the road ends and the camp begins'],
      ['best-time-for-river-rafting-in-rishikesh', 'Best time for rafting', 'Season, water level and closures'],
      ['rishikesh-adventure-packages', 'Activity packages', 'Rafting, camping and zipline combinations'],
    ],
  },
  '/sightseeing/rishikesh': {
    heading: 'Beyond the sightseeing circuit',
    intro:
      'A sightseeing day covers the temples, the ghats and the bridges. If your group wants the river or the gorge as well, that is run by our Rishikesh adventure operation and booked separately.',
    links: [
      ['things-to-do-in-rishikesh', 'Things to do in Rishikesh', 'Activities with prices and durations'],
      ['river-rafting-in-rishikesh', 'River rafting', 'Half-day and full-day stretches'],
      ['zipline-in-rishikesh', 'Zipline across the gorge', 'Shorter than rafting, same views'],
    ],
  },
  '/rishikesh-travel-guide': {
    heading: 'The activity side of a Rishikesh trip',
    intro:
      'This guide covers getting there, when to come and how to get around. What to actually do when you arrive is run by Triveni Adventure.',
    links: [
      ['things-to-do-in-rishikesh', 'Things to do in Rishikesh', 'The full activity list'],
      ['where-to-stay-in-rishikesh', 'Where to stay', 'Camps, hostels and hotels by area'],
      ['adventure-sports-safety-in-rishikesh', 'Activity safety', 'What to check before you book'],
    ],
  },
  '/places-to-visit-near-rishikesh': {
    heading: 'Activities rather than destinations',
    intro:
      'The destinations above are places to drive to. If the plan is to stay in Rishikesh and do something there instead, these are the options.',
    links: [
      ['things-to-do-in-rishikesh', 'Things to do in Rishikesh', 'Activities with prices'],
      ['river-rafting-in-rishikesh', 'River rafting', 'The main reason most groups come'],
      ['rishikesh-adventure-packages', 'Activity packages', 'Multi-activity combinations'],
    ],
  },
  '/chardham-yatra': {
    heading: 'Starting the yatra from Rishikesh',
    intro:
      'Rishikesh is the traditional starting point for the Char Dham circuit, and our Rishikesh operation runs the yatra from there — including the shorter two-dham itineraries and the motorcycle route.',
    links: [
      ['char-dham-yatra-from-rishikesh', 'Char Dham from Rishikesh', 'The full four-dham circuit'],
      ['do-dham-yatra-from-rishikesh', 'Do Dham from Rishikesh', 'Kedarnath and Badrinath only'],
      ['kedarnath-tour-from-rishikesh', 'Kedarnath tour', 'Road transfer to the trek base'],
      ['char-dham-by-bike-from-rishikesh', 'Char Dham by motorcycle', 'For riding groups'],
    ],
  },
  '/delhi-to-haridwar': {
    heading: 'Haridwar and Rishikesh together',
    intro:
      'Haridwar and Rishikesh are twenty-five kilometres apart and most visitors see both. Our Rishikesh operation runs the Haridwar day tours and the combined itineraries.',
    links: [
      ['haridwar-tour-from-rishikesh', 'Haridwar tour', 'Ghats, temples and the aarti'],
      ['haridwar-ganga-aarti-tour', 'Ganga Aarti tour', 'Timed around the evening aarti'],
      ['rishikesh-haridwar-combo-tour', 'Both towns in one trip', 'Combined itinerary'],
    ],
  },
  '/haridwar-travel-guide': {
    heading: 'Guided options in Haridwar',
    intro:
      'This guide covers the practicalities. For a guided day in Haridwar, or the combined Haridwar and Rishikesh itinerary, our Rishikesh operation runs both.',
    links: [
      ['things-to-do-in-haridwar', 'Things to do in Haridwar', 'Ghats, temples and markets'],
      ['haridwar-ganga-aarti-tour', 'Ganga Aarti tour', 'Timed for the evening aarti'],
      ['rishikesh-haridwar-combo-tour', 'Haridwar with Rishikesh', 'Both towns in one booking'],
    ],
  },
  '/tempo-traveller/delhi-to-rishikesh': {
    heading: 'Group activities in Rishikesh',
    intro:
      'A tempo traveller on this route is usually carrying a group going rafting or camping. Our Rishikesh operation runs the group formats, which are priced and organised differently from individual bookings.',
    links: [
      ['college-group-trip-rishikesh', 'College group trips', 'Group rates and dormitory camps'],
      ['corporate-team-outing-rishikesh', 'Corporate team outings', 'Invoiced, with team formats'],
      ['rafting-and-camping-package-rishikesh', 'Rafting and camping package', 'The usual group combination'],
    ],
  },
  '/tempo-traveller/rishikesh': {
    heading: 'Group activities in Rishikesh',
    intro:
      'Groups hiring a tempo traveller in Rishikesh are usually here for the river. Our Rishikesh operation runs the group formats.',
    links: [
      ['college-group-trip-rishikesh', 'College group trips', 'Group rates and camps'],
      ['rafting-and-camping-package-rishikesh', 'Rafting and camping package', 'The usual group combination'],
      ['river-rafting-in-rishikesh', 'River rafting', 'Stretches by distance and grade'],
    ],
  },
};

/** The Adventure block for a given path on this site, or null. */
export function adventureLinksFor(path) {
  return BY_PATH[path] || null;
}

export { BY_PATH as adventureCrossLinks };
export default adventureLinksFor;
