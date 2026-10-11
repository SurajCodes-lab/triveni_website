// Week 48 guide 18 — "best car for wedding" (222 impressions a quarter,
// position 4.1; "best car for wedding entry" 47, position 3.3). The 2026
// season opens after Dev Uthani Ekadashi, about 20 November. This page is a
// chooser, which car for which moment of the wedding, not a price list: the
// price list is /blog/wedding-car-rental-price-guide-2026, and every rupee
// figure here is quoted from src/utilis/weddingCarModels.js or the site's
// ordinary rate card in src/utilis/pricing.js.

const IMG = '/images/sightseeing';

export const guide = {
  slug: 'best-car-for-wedding-2026',
  path: '/best-car-for-wedding-2026',
  mood: 'festival',
  cluster: 'season',
  publishedOn: '2026-09-12',
  updatedOn: '2026-09-12',
  search: { query: 'best car for wedding', impressions: 222, position: 4.1 },

  eyebrow: 'Wedding season 2026 · the chooser',
  dateBadge: 'Season opens ~20 November 2026',
  crumbs: [{ name: 'Wedding car rental', url: '/wedding' }, { name: 'Wedding cars in Delhi', url: '/wedding/delhi' }],
  crumbName: 'Best car for a wedding in 2026',
  titleLead: 'Best car for a wedding in 2026:',
  titleAccent: 'which car for the bride, the groom, the vidai and the baraat',
  title: 'Best Car for a Wedding in 2026: Which Car for the Bride, the Groom, the Vidai and the Baraat',
  metaTitle: 'Best Car for a Wedding 2026: Bride, Groom, Vidai, Baraat',
  metaDescription: 'Which car for which wedding moment: BMW, Audi and Mercedes for the bride and groom entry, vintage for the photographs, a DJ Tempo Traveller for the baraat. 2026 prices per day and how to book.',
  keywords: ['best car for wedding', 'best car for wedding entry', 'wedding car rental price 2026', 'bride entry car', 'groom entry car', 'baraat tempo traveller with dj', 'doli car for vidai', 'vintage car for baraat', 'bmw audi mercedes wedding car rental'],
  heroImage: '/images/wedding/luxury_car.jpg',
  heroAlt: 'A black BMW sedan at dusk, of the kind hired for a wedding entry',

  lead: 'There is no single best car for a wedding, because a wedding has four or five separate car moments and each wants a different car. For the bride’s entry and the vidai the answer is a long luxury sedan: a Mercedes E-Class at ₹18,000–25,000 per day, a BMW 5 Series at ₹15,000–20,000 or an Audi A6 at ₹15,000–22,000, with the S-Class, 7 Series and A8 above them for a grand entry. For the groom and the baraat it is something open or old: a vintage jeep at ₹10,000–15,000 or a restored Ambassador at ₹8,000–12,000, with the baraatis behind in a 17-seater DJ Tempo Traveller at ₹8,000–12,000. Guests and airport runs go in Innova Crystas and plain Tempo Travellers at the ordinary rate card. Wedding cars are priced per day with a chauffeur, decoration from ₹2,000, and the 2026 season opens about 20 November.',
  keyFacts: [
    { label: 'Season opens', value: '~20 Nov 2026' },
    { label: 'Bride entry, E-Class', value: '₹18,000–25,000' },
    { label: 'Baraat tempo, 17-seater DJ', value: '₹8,000–12,000' },
    { label: 'Priced', value: 'Per day, chauffeur included' },
  ],
  stickyLabel: 'Wedding car',
  stickyPrice: 'From ₹5,000',
  waText: 'Hi, I want a wedding car for the 2026 season. Please quote for the bride entry, baraat and guest cars; dates and city to follow.',

  intro: [
    'The question people type is “best car for wedding”, and what they usually mean is “which car for the entry”. But a wedding in North India is not one car moment. There is the groom leaving his house at the head of the baraat, the bride walking in under the phoolon ki chadar, the couple driving away at the vidai in the small hours, and, around all of it, two families’ worth of guests who have to get from the airport to the hotel to the venue and back again. The car that is perfect for one of those moments is wrong for another, and the sensible way to spend the transport budget is to match the car to the moment rather than hire the most expensive thing on the list for the whole day.',
    'This page does that matching. The prices are the ones published on our wedding car pages, per day with a uniformed chauffeur, and they are ranges because the exact figure depends on the city, the date and how many events you book together. For the plain rate card by model, the 2026 price guide on the blog has every number in one table; this page is about choosing.',
  ],

  lanternsTitle: 'The six car moments of a wedding, and the car for each',
  lanternsEyebrow: 'Which car, which moment',
  lanternsIntro: 'In the order they happen on the day. The prices are per day from the published wedding rate card; the guest and airport cars use the ordinary rate card.',
  lanterns: [
    { image: '/images/wedding/luxury_car.jpg', alt: 'A black BMW sedan at dusk, of the kind hired for the bride’s entry', title: 'The bride’s entry', when: 'The mandap · evening', text: 'The most photographed car of the wedding, and the one the lehenga has to fit into. A long luxury sedan with a wide rear door: Mercedes E-Class ₹18,000–25,000, BMW 5 Series ₹15,000–20,000, Audi A6 ₹15,000–22,000. For a grand entry, the S-Class at ₹35,000–50,000, the 7 Series at ₹25,000–35,000 or the A8 at ₹28,000–40,000, with the royal decoration at ₹6,000.' },
    { image: '/images/wedding_car.jpg', alt: 'A decorated wedding car for the groom’s departure', title: 'The groom’s entry', when: 'Leaving home · dusk', text: 'The groom’s own car sets off the baraat. The compact luxury sedans do the job at a third to a half of the flagship price: BMW 3 Series ₹12,000–15,000, Audi A4 ₹12,000–15,000, Mercedes C-Class ₹12,000–16,000. Or skip the sedan for the vintage jeep at ₹10,000–15,000, which is built for a slow procession.' },
    { image: '/images/tempo/17_seater.jpg', alt: 'A 17-seater Tempo Traveller of the kind used for baraats', title: 'The baraat', when: 'The procession', text: 'The baraatis need a vehicle that crawls behind the band and carries the sound. A 17-seater AC Tempo Traveller with DJ system and LED lights is ₹8,000–12,000; the 26-seater with a professional DJ setup and recliner seats is ₹12,000–18,000. Ahead of it, the vintage Ambassador at ₹8,000–12,000 is the classic baraat car.' },
    { image: '/images/wedding_section.jpg', alt: 'A decorated car waiting outside a wedding venue', title: 'The vidai', when: 'After the pheras · 2–4 am', text: 'The doli car. Usually the same sedan as the bride’s entry, redecorated for the farewell: a BMW 5 Series or Audi A6 doli at ₹15,000–25,000, a Mercedes S-Class or BMW 7 Series doli at ₹30,000–50,000, or a decorated Dzire or Amaze at ₹5,000–8,000 if the budget went on the entry. It has to be at the venue an hour or two before the vidai, whenever that turns out to be.' },
    { image: '/images/car/innova_crysta.jpg', alt: 'An Innova Crysta, the usual guest car', title: 'The guests and the airport', when: 'Two days either side', text: 'Nobody decorates the guest cars. Innova Crystas at ₹18/km for the elders, 12-seater Tempo Travellers at ₹23/km for the cousins, and airport runs on the 4 hr / 40 km local package from ₹2,200 for a sedan. This is where most of the transport budget is actually spent, and where the wedding rate card does not apply at all.' },
    { image: '/images/wedding/premium_suv.jpg', alt: 'A luxury SUV of the kind used for hill and palace weddings', title: 'The destination wedding', when: 'Jaipur, Agra, the hills', text: 'A palace wedding outside Jaipur or a resort wedding in the hills changes the car: the SUVs earn their place on the approach roads. BMW X5 ₹20,000–28,000, Audi Q7 ₹22,000–30,000, Mercedes GLC ₹22,000–30,000. The cars are driven to the venue from Delhi or Jaipur, and the delivery drive is part of the quote.' },
  ],

  table: {
    title: 'Which car for which moment: the 2026 wedding rate card by moment',
    caption: 'The wedding car to book for each moment of a 2026 wedding, with the per-day price range, the alternatives and what the decoration costs',
    intro: 'Per-day prices from the published wedding car pages, each with a uniformed chauffeur. The two guest rows are ordinary chauffeur-driven hire at the site’s rate card, not wedding cars.',
    columns: [
      { key: 'moment', label: 'Moment' },
      { key: 'pick', label: 'First choice' },
      { key: 'price', label: 'Per day', align: 'right', strong: true },
      { key: 'alt', label: 'Alternatives' },
      { key: 'deco', label: 'Decoration' },
    ],
    rows: [
      { moment: 'Bride’s entry', pick: 'Mercedes E-Class', price: '₹18,000–25,000', alt: 'BMW 5 Series ₹15,000–20,000; Audi A6 ₹15,000–22,000', deco: 'Standard included; premium ₹4,000; royal ₹6,000' },
      { moment: 'Grand bride’s entry', pick: 'Mercedes S-Class', price: '₹35,000–50,000', alt: 'BMW 7 Series ₹25,000–35,000; Audi A8 ₹28,000–40,000', deco: 'Royal ₹6,000' },
      { moment: 'Groom’s entry', pick: 'BMW 3 Series', price: '₹12,000–15,000', alt: 'Audi A4 ₹12,000–15,000; Mercedes C-Class ₹12,000–16,000', deco: 'Standard included' },
      { moment: 'Baraat, the groom’s vehicle', pick: 'Vintage jeep', price: '₹10,000–15,000', alt: 'Vintage Ambassador ₹8,000–12,000; classic Rolls-style ₹25,000–40,000', deco: 'Included' },
      { moment: 'Baraat, the baraatis', pick: '17-seater AC Tempo with DJ', price: '₹8,000–12,000', alt: '12-seater ₹5,000–8,000; 20-seater ₹10,000–15,000; 26-seater ₹12,000–18,000', deco: 'Included' },
      { moment: 'Vidai (doli)', pick: 'The entry sedan, redecorated', price: '₹15,000–25,000', alt: 'Dzire or Amaze doli ₹5,000–8,000; S-Class or 7 Series doli ₹30,000–50,000; vintage doli ₹10,000–25,000', deco: 'Decoration and chauffeur included; red carpet on the sedan and luxury doli packages' },
      { moment: 'Pre-wedding shoot', pick: 'Retro convertible', price: '₹15,000–25,000', alt: 'Vintage Ambassador ₹8,000–12,000', deco: 'Included' },
      { moment: 'Hill or palace wedding', pick: 'Audi Q7', price: '₹22,000–30,000', alt: 'BMW X5 ₹20,000–28,000; Mercedes GLC ₹22,000–30,000', deco: 'Standard included' },
      { moment: 'Guests, elders', pick: 'Innova Crysta', price: '₹18/km', alt: 'Local 4 hr / 40 km package ₹2,800; sedan ₹2,200', deco: 'None' },
      { moment: 'Guests, groups', pick: '12-seater Tempo Traveller', price: '₹23/km', alt: 'Local 4 hr / 40 km package ₹2,800; 17-seater and 26-seater on request', deco: 'None' },
    ],
    footnote: 'Wedding car prices are per day; the exact figure within each range depends on the city, the date and the number of events booked together. Outstation guest trips bill 300 km per day at the per-km rate. Tolls and parking at actual.',
  },

  sections: [
    {
      eyebrow: 'The bride',
      heading: 'Which car is best for the bride’s entry?',
      paras: [
        'Start with the door, not the badge. A bridal lehenga with a can-can underneath needs a rear door that opens wide and a rear seat that is long and flat, which is why the answer for the bride’s entry is always a full-size sedan rather than an SUV or anything with two doors. Among the cars we run, the Mercedes E-Class is the one families ask for most, at ₹18,000–25,000 for the day, because the rear seat takes the outfit without crushing it and the car photographs well under the white and ivory flowers that suit an evening entry. The BMW 5 Series at ₹15,000–20,000 and the Audi A6 at ₹15,000–22,000 are the same size and the same idea; between the three, choose by colour and by which one your decorator can dress best, not by the engine.',
        'If the entry is the centrepiece of the evening, the flagships are the step up: Mercedes S-Class at ₹35,000–50,000, BMW 7 Series at ₹25,000–35,000, Audi A8 at ₹28,000–40,000. They are longer again, the rear doors are bigger, and the S-Class has the massage seats and the rear cabin that a bride who has been on her feet since the morning will notice. The honest advice is that the difference on camera between an E-Class and an S-Class is small once the flowers are on; the extra ₹17,000–25,000 between the E-Class and the S-Class buys comfort and presence rather than a different photograph.',
        'The retro convertible, at ₹15,000–25,000, is the other kind of bride’s entry: open-top, slow, made for a garden venue in the afternoon. It does not work after dark or in a Delhi December, when the bride would arrive cold, so keep it for a day wedding or for the pre-wedding shoot, which is what most couples book it for.',
      ],
      link: { label: 'Mercedes wedding car rental', href: '/wedding/cars/mercedes-wedding-car' },
      image: { src: '/images/wedding/luxury_car.jpg', alt: 'A black BMW sedan at dusk, of the kind hired for the bride’s entry', tag: 'Bride’s entry · sedan', caption: 'A long sedan with a wide rear door, shown here before the flowers go on: the outfit decides the car before the badge does.' },
    },
    {
      eyebrow: 'The groom and the baraat',
      heading: 'Which car should the groom arrive in, and what carries the baraat?',
      paras: [
        'The groom’s car has a different job. It leaves the house at the head of the baraat, moves at walking pace behind the band for the last stretch, and is seen from the outside by two hundred people rather than from the inside by one. That argues for something with presence at low speed and no need for a long rear seat, which is why the compact luxury sedans are the value pick: BMW 3 Series at ₹12,000–15,000, Audi A4 at ₹12,000–15,000, Mercedes C-Class at ₹12,000–16,000. They carry the same badge as the bride’s car at roughly a third to a half of the flagship price, and the standard floral decoration is included on all three.',
        'The alternative, and the one the baraatis enjoy more, is the vintage line. A restored Ambassador at ₹8,000–12,000 is the classic baraat car; a vintage jeep at ₹10,000–15,000 is open, sits the groom high enough to be seen over the crowd, and does not mind crawling for an hour. The classic Rolls-style car at ₹25,000–40,000 is the royal version for a palace wedding. Every vintage car comes with a driver who knows the car and a backup vehicle on standby, which matters more with a sixty-year-old car than with a new one.',
        'Behind the groom, the baraatis need to be carried and the music needs to travel with them. That is the baraat Tempo Traveller: the 17-seater AC with a DJ sound system and LED lighting at ₹8,000–12,000 is the standard choice, the 12-seater with a basic music system at ₹5,000–8,000 is for a small baraat, and the 20-seater at ₹10,000–15,000 and 26-seater at ₹12,000–18,000 add laser, fog and a professional DJ setup for a baraat of forty or more. The drivers are used to processions: they stop, start and idle at the band’s pace and know the local baraat routes, and you can play your own music over USB or Bluetooth or ask for a DJ operator.',
      ],
      link: { label: 'Baraat Tempo Traveller with DJ', href: '/wedding/baraat-tempo-traveller' },
      image: { src: '/images/wedding/vintage_car.jpg', alt: 'A restored vintage coupe of the kind hired for baraats and pre-wedding shoots', tag: 'Baraat · vintage', side: 'left', caption: 'The vintage line is built for a procession: slow, open and seen from the outside.' },
    },
    {
      eyebrow: 'The vidai',
      heading: 'What is the right doli car for the vidai?',
      paras: [
        'The vidai is the moment nobody plans properly, because it happens at two or three in the morning after the pheras, and because by then the entry car has been standing in a car park for eight hours. The doli car is the one the bride leaves her parents’ home in, and it needs three things: a wide rear seat, a driver who has rested, and decoration that still looks fresh at three in the morning. The simplest arrangement is to book the bride’s entry sedan as the doli car as well, so it is redecorated in the evening and waiting an hour before the vidai with a fresh chauffeur. The doli page prices the luxury sedan doli, a BMW 3 or 5 Series or an Audi A4 or A6, at ₹15,000–25,000, and the super-luxury doli, a Mercedes S-Class or BMW 7 Series, at ₹30,000–50,000, with full floral decoration, a red carpet and the chauffeur included.',
        'If the budget went on the entry, a decorated Swift Dzire or Honda Amaze doli at ₹5,000–8,000 does the job with the same red carpet and garlands, and the vintage doli, a classic Ambassador with traditional decoration, is ₹10,000–25,000. The one thing to decide early is where the doli car is going. If the groom’s home is in another city, the vidai drive is an outstation trip on the ordinary rate card on top of the doli package: ₹11/km for a sedan on a 300 km minimum, so ₹3,300 one-way to anywhere within 300 km of Delhi such as Jaipur, Agra or Chandigarh, and ₹5,400 for an Innova Crysta at ₹18/km. Tell us the destination when you book the doli so the driver’s hours are planned for the drive and not just the ceremony.',
      ],
      link: { label: 'Doli car rental for the vidai', href: '/wedding/doli-car-rental' },
      image: { src: '/images/wedding_section.jpg', alt: 'A decorated car waiting outside a wedding venue at night', tag: 'Vidai · doli', caption: 'The doli car waits from an hour before the vidai, however late the pheras run.' },
    },
    {
      eyebrow: 'The guests',
      heading: 'How do we move the guests, and who does the airport runs?',
      paras: [
        'This is where most of the money goes and where none of the wedding rate card applies. Guest transport is ordinary chauffeur-driven hire at the published rates: a sedan at ₹11/km, an Ertiga at ₹15/km, an Innova Crysta at ₹18/km and a 12-seater Tempo Traveller at ₹23/km, on a 300 km per day minimum for outstation and on the 4 hour / 40 km local package inside the city, which is ₹2,200 for a sedan, ₹2,500 for an Ertiga and ₹2,800 for an Innova or a Tempo Traveller, with kilometres beyond forty at the per-km rate. An airport pickup for a family of four landing at T3 and going to a hotel in Gurgaon is a local package, not a wedding car, and it costs the same in wedding week as in any other.',
        'The arithmetic that helps: put the elders and anyone with luggage in Innova Crystas, two or three of them on a running schedule between hotel and venue, and put the cousins and the friends in Tempo Travellers, a 12-seater for a dozen, a 17-seater for the wider group, a 26-seater when the whole side of the family is staying in one hotel. A 17-seater on the local package costs less per head than three sedans and keeps the group together, which is what the sangeet needs. For very large guest lists, where the choice is between several Tempo Travellers and a bus, there is a separate comparison on the site.',
        'Book the guest fleet after the guest list settles and before the last fortnight. In the October-to-March wedding season the Tempo Travellers book out first, and the same 17-seaters that carry guests by day are the baraat tempos by night, so the two bookings should be made together.',
      ],
      link: { label: 'Bus or Tempo Traveller for a wedding?', href: '/bus-vs-tempo-for-wedding' },
      image: { src: '/images/tempo/26_seater.jpg', alt: 'A 26-seater Tempo Traveller for wedding guests', tag: 'Guests · 26-seater', side: 'left', caption: 'One 26-seater moves a whole side of the family between hotel and venue at ₹23/km.' },
    },
    {
      eyebrow: 'The rate card',
      heading: 'What does a wedding car price include, and how is the event counted?',
      paras: [
        'Wedding cars are priced per day with a uniformed chauffeur, fuel and the standard floral decoration inside the price; the Audi page quotes a minimum of 8 hours or 80 km for a single event. The ranges on this page are per day, so the same car for the mehndi, the wedding and the reception on three different days is three days, and that is where the multi-event packages come in: the same car across the functions is quoted as one package rather than three separate days. Decoration is the other line. The standard floral at ₹2,000, garlands on the bonnet and mirrors, is included with the luxury sedans; the premium floral with roses, orchids and ribbons is ₹4,000 and the royal theme with exotic flowers and LED is ₹6,000, and both are upgrades you choose car by car on the luxury sedans; the decoration-packages page prices standalone packages separately. The decorators need one to two hours for standard, two to three for premium and three to four for royal, so the car is dressed before the event and not in the hour before the entry.',
        'The reason the prices are ranges is the city and the date. Delhi NCR and Jaipur have the widest model availability; Agra, Chandigarh and Dehradun have the cars but fewer models, and a destination wedding at a palace outside Jaipur or a resort in the hills includes the delivery drive in the quote. The muhurat dates in late November and early December, and again in February, sell out earliest, and a car booked for a single event on one of those dates sits at the top of its range. If what you came for is the plain price list by model, the 2026 price guide on the blog has it in one table.',
        'What is not in the price: tolls and parking, which are paid at actual, and hours or kilometres beyond what the booking covers, which are charged at the rate agreed on the booking. Ask for that overtime rate in writing when you book. A vidai that slips from two to four in the morning is the usual cause of a bill that surprises a family, and it is avoidable if the doli car is booked for the hours the ceremony will really take.',
      ],
      link: { label: 'Wedding car rental price guide 2026', href: '/blog/wedding-car-rental-price-guide-2026' },
      image: { src: `${IMG}/Jaipur/amber_fort.jpg`, alt: 'Amber Fort above Jaipur, the palace-wedding city', tag: 'Jaipur · destination weddings', caption: 'Jaipur: the palace-wedding city, and the fleet the SUVs and vintage cars are driven out from.' },
    },
  ],

  fare: {
    title: 'The wedding rate card, by moment',
    note: 'Per-day prices from the published wedding car pages, each with a uniformed chauffeur, fuel and standard decoration. The guest row is the ordinary rate card, because guest cars are not wedding cars.',
    caption: 'Wedding car rental prices 2026 by moment and vehicle, per day',
    oneWayLabel: 'Per day',
    rows: [
      { vehicle: 'Bride’s entry: Mercedes E-Class, BMW 5 Series, Audi A6', seats: '4', rate: 'Per day', fare: '₹15,000–25,000' },
      { vehicle: 'Grand entry: Mercedes S-Class, BMW 7 Series, Audi A8', seats: '4', rate: 'Per day', fare: '₹25,000–50,000' },
      { vehicle: 'Groom’s entry: BMW 3 Series, Audi A4, Mercedes C-Class', seats: '4', rate: 'Per day', fare: '₹12,000–16,000' },
      { vehicle: 'Baraat: vintage jeep or Ambassador', seats: '4', rate: 'Per day', fare: '₹8,000–15,000' },
      { vehicle: 'Baraatis: 17-seater AC Tempo Traveller with DJ', seats: '17', rate: 'Per day', fare: '₹8,000–12,000' },
      { vehicle: 'Big baraat: 26-seater AC Tempo Traveller with DJ', seats: '26', rate: 'Per day', fare: '₹12,000–18,000' },
      { vehicle: 'Guests: Innova Crysta', seats: '6–7', rate: '₹18/km', fare: '₹2,800 local 4 hr / 40 km' },
    ],
    footnote: 'The figure within each range depends on the city, the date and the number of events booked together; Delhi NCR and Jaipur have the widest model availability. Decoration upgrades: premium ₹4,000, royal ₹6,000. Tolls and parking at actual.',
    waText: 'Hi, I want a wedding car quote for the 2026 season: bride entry, baraat tempo and guest cars. City and dates to follow.',
    bookHref: '/wedding',
    bookLabel: 'Wedding car rental',
    cta: 'Get a wedding quote',
  },

  galleryTitle: 'The fleet, moment by moment',
  galleryEyebrow: 'In pictures',
  gallery: [
    { image: '/images/wedding/luxury_car.jpg', title: 'The entry sedan', text: 'A luxury sedan of the E-Class, 5 Series or A6 kind, before the bride’s-entry decoration goes on.', tag: 'Bride’s entry' },
    { image: '/images/wedding/vintage_car.jpg', title: 'The vintage line', text: 'Restored classics for the groom and the baraat.', tag: 'Baraat' },
    { image: '/images/tempo/26_seater.jpg', title: 'The baraat tempo', text: '17 to 26 seats, DJ system, LED, at walking pace behind the band.', tag: 'Baraatis' },
    { image: '/images/wedding/premium_suv.jpg', title: 'The SUV', text: 'A luxury SUV for a hill or palace wedding (X5, Q7 and GLC on the wedding pages).', tag: 'Destination' },
    { image: '/images/car/innova_crysta.jpg', title: 'The guest car', text: 'Innova Crystas on a running schedule between hotel and venue.', tag: 'Guests' },
  ],

  tips: [
    { title: 'Book the entry car and the doli as one job', text: 'The same sedan, redecorated in the evening, with the chauffeur’s hours planned through to the vidai. It is cheaper than two cars and it means the doli is never the car that was forgotten.' },
    { title: 'Fix the muhurat date before the model', text: 'Late November, early December and February sell out first. Tell us the date and the city, and we will say which of the E-Class, 5 Series and A6 is free before you fall in love with one.' },
    { title: 'Send the venue the length of the car', text: 'The S-Class, 7 Series and A8 are over five metres long. Older venues and farmhouse gates in Chhatarpur can be tight; a photograph of the porch tells us in a minute whether the flagship can make the entry or whether the E-Class is the wiser car.' },
  ],

  faqs: [
    { question: 'Which car is best for a wedding in 2026?', answer: 'It depends on the moment. For the bride’s entry and the vidai, a long luxury sedan: Mercedes E-Class at ₹18,000–25,000 per day, BMW 5 Series at ₹15,000–20,000 or Audi A6 at ₹15,000–22,000. For the groom and the baraat, a vintage jeep at ₹10,000–15,000 or a restored Ambassador at ₹8,000–12,000, with the baraatis in a 17-seater DJ Tempo Traveller at ₹8,000–12,000. Guests travel in Innova Crystas and Tempo Travellers at the ordinary rate card.' },
    { question: 'Which car is best for the bride’s entry?', answer: 'A full-size sedan with a wide rear door, because the lehenga has to fit. The Mercedes E-Class at ₹18,000–25,000 is the most requested; the BMW 5 Series at ₹15,000–20,000 and Audi A6 at ₹15,000–22,000 are the same size. For a grand entry the Mercedes S-Class is ₹35,000–50,000, the BMW 7 Series ₹25,000–35,000 and the Audi A8 ₹28,000–40,000.' },
    { question: 'Which car is best for the groom’s entry and the baraat?', answer: 'For the groom’s own car, a compact luxury sedan such as the BMW 3 Series at ₹12,000–15,000, Audi A4 at ₹12,000–15,000 or Mercedes C-Class at ₹12,000–16,000, or a vintage jeep at ₹10,000–15,000 or Ambassador at ₹8,000–12,000 for the procession. For the baraatis, a 17-seater AC Tempo Traveller with DJ and LED at ₹8,000–12,000, or the 26-seater at ₹12,000–18,000 for a baraat of forty or more.' },
    { question: 'What is the best doli car for the vidai?', answer: 'Usually the same sedan as the bride’s entry, redecorated and waiting an hour before the vidai with a rested chauffeur. On the doli page a BMW 3 or 5 Series or Audi A4 or A6 doli is ₹15,000–25,000, a Mercedes S-Class or BMW 7 Series doli is ₹30,000–50,000, a decorated Swift Dzire or Honda Amaze doli is ₹5,000–8,000 and a vintage doli is ₹10,000–25,000, each with decoration and chauffeur included; the red carpet is on the sedan and luxury doli packages.' },
    { question: 'How much does a wedding car cost per day in 2026?', answer: 'Per day, with chauffeur and standard decoration: BMW 3 Series ₹12,000–15,000, 5 Series ₹15,000–20,000, 7 Series ₹25,000–35,000, X5 ₹20,000–28,000; Audi A4 ₹12,000–15,000, A6 ₹15,000–22,000, A8 ₹28,000–40,000, Q7 ₹22,000–30,000; Mercedes C-Class ₹12,000–16,000, E-Class ₹18,000–25,000, S-Class ₹35,000–50,000, GLC ₹22,000–30,000; vintage Ambassador ₹8,000–12,000, vintage jeep ₹10,000–15,000, retro convertible ₹15,000–25,000, classic Rolls-style ₹25,000–40,000. Baraat Tempo Travellers run ₹5,000–8,000 for a 12-seater to ₹12,000–18,000 for a 26-seater with DJ.' },
    { question: 'What is the minimum booking for a wedding car?', answer: 'Wedding cars are priced per day; the Audi page quotes a minimum of 8 hours or 80 km for a single event. Multi-event packages covering the mehndi, sangeet, wedding and reception are quoted together and cost less than booking each event separately. Tolls and parking are extra at actual, and hours or kilometres beyond the minimum are charged at the rate agreed on the booking.' },
    { question: 'Is decoration included, and what does it cost?', answer: 'Standard floral decoration, fresh garlands on the bonnet and mirrors, is included with the luxury sedans and priced at ₹2,000 on its own. The premium floral with roses, orchids and ribbons is ₹4,000 and the royal theme with exotic flowers, LED and ribbons is ₹6,000; those three upgrades apply to the luxury sedans, and the decoration-packages page prices standalone packages separately. Baraat Tempo Travellers and doli packages include their decoration. Allow one to two hours for standard, two to three for premium and three to four for royal.' },
    { question: 'Can I get a BMW, Audi or Mercedes wedding car outside Delhi?', answer: 'Yes, in Delhi NCR, Jaipur, Chandigarh, Agra, Dehradun and the other North Indian cities on the wedding pages, with the largest fleets in Delhi NCR and Jaipur. For a destination wedding at a palace near Jaipur, a hill resort or a heritage hotel, the car is driven to the venue and the delivery distance is part of the quote. Availability of a specific model varies by city, so give us the date and the venue first.' },
  ],

  related: [
    { label: 'BMW wedding car rental', sub: '3, 5, 7 Series and X5', href: '/wedding/cars/bmw-wedding-car', img: '/images/wedding/luxury_car.jpg' },
    { label: 'Audi wedding car rental', sub: 'A4, A6, A8 and Q7', href: '/wedding/cars/audi-wedding-car', img: '/images/wedding_section.jpg' },
    { label: 'Vintage car for the baraat', sub: 'Ambassador, jeep, convertible', href: '/wedding/cars/vintage-car', img: '/images/wedding/vintage_car.jpg' },
    { label: 'Wedding car decoration packages', sub: 'Classic ₹2,000 to custom themes', href: '/wedding/car-decoration-packages', img: '/images/wedding_car.jpg' },
    { label: 'Wedding car rental near me', sub: 'Every city we serve', href: '/wedding-car-rental-near-me', img: '/images/wedding_section.jpg' },
    { label: 'Wedding cars in Jaipur', sub: 'Palace and destination weddings', href: '/wedding/jaipur', img: `${IMG}/Jaipur/amber_fort.jpg` },
    { label: 'Luxury car rental in Delhi with driver', sub: 'Chauffeur-driven, by the day', href: '/luxury-car-rental-delhi-with-driver', img: `${IMG}/Delhi/India_Gate.jpg` },
    { label: 'Wedding car rental: the complete 2026 guide', sub: 'Everything on one page', href: '/blog/wedding-car-rental-india-complete-guide-2026', img: '/images/car/innova_crysta.jpg' },
  ],
  guides: ['diwali-tour-packages-2026-from-delhi', 'pushkar-mela-2026-by-car', 'dev-deepawali-varanasi-2026', 'weekend-getaways-near-me'],

  schema: {
    places: ['delhi', 'jaipur', 'agra'],
    howTo: {
      name: 'How to choose and book the right car for each moment of a wedding',
      description: 'Match the car to the moment: a long luxury sedan for the bride’s entry and vidai, a vintage car or compact luxury sedan for the groom, a DJ Tempo Traveller for the baraatis, ordinary chauffeur-driven hire for guests. Book the muhurat date first.',
      totalTime: 'PT15M',
      estimatedCost: { currency: 'INR', value: 15000 },
      steps: [
        { name: 'List the car moments', text: 'Bride’s entry, groom’s entry, the baraat, the vidai, guest transfers and airport runs. Each is a separate booking with its own vehicle.' },
        { name: 'Pick the bride’s sedan', text: 'Mercedes E-Class ₹18,000–25,000, BMW 5 Series ₹15,000–20,000 or Audi A6 ₹15,000–22,000; the S-Class, 7 Series or A8 for a grand entry. Book the same car as the doli for the vidai.' },
        { name: 'Pick the groom’s car and the baraat tempo', text: 'A BMW 3 Series, Audi A4 or Mercedes C-Class at ₹12,000–16,000, or a vintage jeep or Ambassador at ₹8,000–15,000, with a 17-seater DJ Tempo Traveller at ₹8,000–12,000 for the baraatis.' },
        { name: 'Book the guest fleet at the ordinary rate card', text: 'Innova Crystas at ₹18/km and Tempo Travellers at ₹23/km, airport runs on the 4 hr / 40 km local package from ₹2,200.' },
        { name: 'Fix the date, then the decoration', text: 'WhatsApp 7668570551 with the muhurat date, city and venue. Choose standard, premium ₹4,000 or royal ₹6,000 decoration per car, and ask for the overtime rate in writing.' },
      ],
    },
  },
};
