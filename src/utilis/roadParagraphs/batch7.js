// Week 48, Workstream A3: road paragraphs, batch 7.
// One paragraph per corridor about the road itself, written from the
// driver's side. Facts are drawn from distanceData, travelByCarData,
// oneWayCabData and tollCostData for the same slug, plus plain road
// geography. No fares, no toll amounts, no statistics, no dates.
// The index maps each entry to its reverse-direction slug as well.

export const roadParagraphs = {
  'chandigarh-to-kasauli': {
    origin: 'chandigarh',
    destination: 'kasauli',
    text: 'Leaving Chandigarh you go out through Zirakpur and pick up NH-5, a proper four-lane road past Panchkula and Pinjore to Kalka and then Parwanoo, where the plains stop and Himachal begins. The Timber Trail at Parwanoo, with its cable car, is the halt most people take before the climb, and it is the right place for it because there is nothing much after. From Parwanoo the highway twists up to Dharampur, where the Kalka-Shimla railway runs close to the road, and there you leave NH-5 for the short Kasauli branch through Garkhal. Those last twelve kilometres are narrow and bend after bend, pine on both sides and the ridge in view, so a driver who knows them takes the hairpins slowly. In the monsoon the Garkhal stretch sheds small stones onto the tarmac and mist sits on the ridge until late morning. In January a light snowfall can settle on the upper bends, and the shaded corners stay icy long after sunrise, which is why we never hurry a winter morning up here.',
  },
  'lucknow-to-prayagraj': {
    origin: 'lucknow',
    destination: 'prayagraj',
    text: 'The old road out of Lucknow is NH-30 south-east through Raebareli and Lalganj on the Pratapgarh side, and most of our drivers still go that way because it is direct and well surfaced. If you want a cleaner run for the first stretch there is the Purvanchal Expressway option, which skips the town traffic before you drop back onto the highway for Prayagraj. Raebareli is the halt on this road, with dhabas that do a decent UP thali, and the Pratapgarh country after it is the amla belt where roadside stalls sell candy and murabba. Beyond Pratapgarh it is flat Awadh farmland, mango and guava orchards on both sides, and the road finishes by crossing the Ganga at Phaphamau into Prayagraj. In December and January the fog on these plains can be thick until mid-morning, and the drive stretches out because you cannot see far ahead on the two-lane sections. During the Magh Mela the last few kilometres into the city and the Sangam side slow right down, so an early start out of Lucknow matters more than usual.',
  },
  'dehradun-to-rishikesh': {
    origin: 'dehradun',
    destination: 'rishikesh',
    text: 'This is NH-7 out of Dehradun to the south-east, a valley road the whole way with not a single hill section to worry about. You clear the city, pass Doiwala with forest on either side, cross the Song river and run right alongside Jolly Grant Airport, which sits a little past halfway along and is why so many of these bookings are airport transfers. Past the airport the road meets the Haridwar road at the Nepali Farm crossing and turns up towards Rishikesh, and on the last stretch the Ganga comes into view before the road forks for Ram Jhula, Laxman Jhula and Triveni Ghat. The Rajaji forest is close to the road on this final section, and after dark elephants do cross it, so our drivers keep the speed down and the eyes open in the evening. Through December and January the Doon valley holds fog in the early mornings, especially near the river crossings, and it lifts by mid-morning. In the monsoon the Song runs high and brown but the road stays open.',
  },
  'srinagar-to-pahalgam': {
    origin: 'srinagar',
    destination: 'pahalgam',
    text: 'You leave Srinagar southwards on NH-44, the main valley highway, and within a few kilometres you are at Pampore, where the saffron fields lie beside the road and turn purple in the bloom of late October and early November. The highway runs on through poplar avenues and apple country past Awantipora to Bijbehara, the chinar town on the Jhelum, and to Anantnag, the mid-point and the halt for kahwa. At Anantnag you leave NH-44 for the Lidder valley road, and the drive changes character: the river runs clear and cold beside you, the road climbs gently through Aishmuqam and the pine comes down to the tarmac as you near Pahalgam. It is a good road, but a valley road with villages and horse carts on it, so not a fast one. In July and August the Amarnath Yatra convoys use this stretch and there are timed halts to allow for. From December to February snow closes in around Pahalgam and the upper section can need chains after a fresh fall, so we treat the winter run as a daylight-only drive.',
  },
  'haridwar-to-rishikesh': {
    origin: 'haridwar',
    destination: 'rishikesh',
    text: 'Short as it is, this road has two halves. The first ten kilometres out of Haridwar on NH-7 run flat beside the Ganga canal through the ashram belt and past the BHEL township to Raiwala, with the Rajaji forest on your left and the odd roadside chai stall. At the Nepali Farm junction the Dehradun road comes in from the west, and from there the Ganga itself appears alongside for the run into Rishikesh, past the rafting launch points and into the Triveni Ghat and Ram Jhula turn-offs. Parking at the bridges is very tight, so our drivers use the Tapovan side. The forest edge past Raiwala is an elephant crossing, and in the evening the herds do come out onto the road, the one thing to respect on an otherwise easy drive. In Shravan, through July and early August, the Kanwar pilgrims fill this road on foot and traffic is regulated, and the monsoon puts the Ganga in full spate and stops the rafting. Winter is the calm time: cool mornings, no crowds, and the river low and green.',
  },
};
