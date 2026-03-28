// Best Time to Visit data for all city pages
// Month-by-month weather, seasons, festivals, and travel tips

export const bestTimeToVisitData = {
  Delhi: {
    overview: 'Delhi experiences extreme weather with scorching summers and chilly winters. The best time to visit is October to March when the weather is pleasant for sightseeing.',
    recommendedMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
    peakSeason: 'October to March',
    offSeason: 'April to September',
    idealDuration: '2-3 days',
    seasons: [
      { name: 'Winter', months: 'Oct-Feb', temp: '5-25°C', crowd: 'High', pricing: 'Peak', description: 'Best weather for sightseeing. Cool mornings, pleasant days. December-January can be foggy.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '25-45°C', crowd: 'Low', pricing: 'Budget', description: 'Extremely hot. Avoid outdoor activities midday. AC cabs are essential.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '25-35°C', crowd: 'Low', pricing: 'Budget', description: 'Humid with moderate to heavy rainfall. Greenery is at its peak. Some flooding possible.' },
    ],
    festivals: [
      { name: 'Republic Day', month: 'January', description: 'Grand parade at Rajpath with cultural displays and military showcase.' },
      { name: 'Diwali', month: 'October/November', description: 'Festival of lights with illuminated monuments and festive markets.' },
      { name: 'Delhi International Arts Festival', month: 'November', description: 'Week-long cultural extravaganza with performances and exhibitions.' },
    ],
  },
  Agra: {
    overview: 'Agra has a semi-arid climate with extreme summers. Visit between November and February for the most comfortable Taj Mahal experience with clear skies.',
    recommendedMonths: ['November', 'December', 'January', 'February'],
    peakSeason: 'November to February',
    offSeason: 'April to September',
    idealDuration: '1-2 days',
    seasons: [
      { name: 'Winter', months: 'Nov-Feb', temp: '5-22°C', crowd: 'High', pricing: 'Peak', description: 'Perfect for Taj Mahal visits. Cool mornings create misty photo opportunities. Carry light woolens.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '25-47°C', crowd: 'Low', pricing: 'Budget', description: 'Extremely hot. The marble of Taj Mahal heats up. Visit only early morning or sunset.' },
      { name: 'Monsoon', months: 'Jul-Oct', temp: '25-35°C', crowd: 'Low', pricing: 'Budget', description: 'Humid but the Taj looks stunning after rain. Fewer tourists. Some attractions may be slippery.' },
    ],
    festivals: [
      { name: 'Taj Mahotsav', month: 'February', description: '10-day cultural festival near Taj Mahal with crafts, food, and performances.' },
      { name: 'Ram Barat', month: 'October', description: 'Grand wedding procession of Lord Ram with decorated elephants and floats.' },
    ],
  },
  Jaipur: {
    overview: 'Jaipur enjoys warm and dry weather most of the year. The winter months from November to March are ideal, with the Jaipur Literature Festival in January being a major draw.',
    recommendedMonths: ['November', 'December', 'January', 'February', 'March'],
    peakSeason: 'November to March',
    offSeason: 'April to September',
    idealDuration: '2-3 days',
    seasons: [
      { name: 'Winter', months: 'Nov-Feb', temp: '8-25°C', crowd: 'High', pricing: 'Peak', description: 'Best time for fort visits and bazaar shopping. Cool and pleasant. Evenings can be chilly.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '25-45°C', crowd: 'Low', pricing: 'Budget', description: 'Very hot and dry. Fort visits uncomfortable midday. Hotels offer great discounts.' },
      { name: 'Monsoon', months: 'Jul-Oct', temp: '25-35°C', crowd: 'Medium', pricing: 'Moderate', description: 'Light to moderate rain. Forts look stunning with green surroundings. The Teej festival is celebrated.' },
    ],
    festivals: [
      { name: 'Jaipur Literature Festival', month: 'January', description: 'World\'s largest free literary festival attracting global authors and thinkers.' },
      { name: 'Elephant Festival', month: 'March', description: 'Colourful elephant procession with races, polo, and cultural performances.' },
      { name: 'Teej Festival', month: 'July/August', description: 'Celebration of monsoon with processions, swings, and traditional dances.' },
    ],
  },
  Haridwar: {
    overview: 'Haridwar is pleasant most of the year but the best time is February to April and September to November. Evening Ganga Aarti is mesmerizing year-round.',
    recommendedMonths: ['February', 'March', 'April', 'September', 'October', 'November'],
    peakSeason: 'February to April',
    offSeason: 'July to August (Kanwar Yatra crowds)',
    idealDuration: '1-2 days',
    seasons: [
      { name: 'Winter', months: 'Nov-Feb', temp: '5-20°C', crowd: 'Medium', pricing: 'Moderate', description: 'Cool weather, ideal for temple visits. Ganga Aarti is atmospheric in the cold. Carry warm clothes.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '20-40°C', crowd: 'High', pricing: 'Peak', description: 'Warm but manageable. Peak pilgrimage season. Hotels book up fast.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '25-35°C', crowd: 'Very High', pricing: 'Peak', description: 'Kanwar Yatra in July-August brings massive crowds. River levels rise significantly. Aarti continues.' },
    ],
    festivals: [
      { name: 'Kumbh Mela', month: 'Every 12 years', description: 'World\'s largest religious gathering with millions of pilgrims. Next: 2034.' },
      { name: 'Kanwar Yatra', month: 'July-August', description: 'Millions of devotees carry holy Ganga water. Major traffic on Delhi-Haridwar route.' },
      { name: 'Ganga Dussehra', month: 'May/June', description: 'Celebration of Ganga\'s descent to earth with grand aarti and lamp floating.' },
    ],
  },
  Chandigarh: {
    overview: 'Chandigarh has a pleasant climate with distinct seasons. October to March is ideal for outdoor activities, with the Rose Festival in February being a highlight.',
    recommendedMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
    peakSeason: 'October to March',
    offSeason: 'April to September',
    idealDuration: '1-2 days',
    seasons: [
      { name: 'Winter', months: 'Nov-Feb', temp: '5-22°C', crowd: 'Medium', pricing: 'Moderate', description: 'Cool and pleasant. Perfect for Rock Garden and Sukhna Lake visits. Foggy mornings in December-January.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '20-44°C', crowd: 'Medium', pricing: 'Moderate', description: 'Hot but bearable in spring. Many use Chandigarh as a pit stop to Himachal hill stations.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '25-35°C', crowd: 'Low', pricing: 'Budget', description: 'Moderate rainfall. Gardens look lush. Sukhna Lake fills up beautifully.' },
    ],
    festivals: [
      { name: 'Rose Festival', month: 'February', description: 'Annual celebration in Zakir Rose Garden with flower displays and cultural events.' },
      { name: 'Chandigarh Carnival', month: 'November', description: 'Week-long festival with parades, competitions, and cultural performances.' },
    ],
  },
  Shimla: {
    overview: 'Shimla is a year-round destination. March to June offers pleasant weather, while December to February brings snowfall. Avoid monsoon season due to landslides.',
    recommendedMonths: ['March', 'April', 'May', 'June', 'December', 'January', 'February'],
    peakSeason: 'March to June and December to February',
    offSeason: 'July to September (monsoon)',
    idealDuration: '2-3 days',
    seasons: [
      { name: 'Summer', months: 'Mar-Jun', temp: '10-28°C', crowd: 'Very High', pricing: 'Peak', description: 'Escape the plains heat. Mall Road buzzing with tourists. Book hotels 2-3 weeks in advance.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '15-22°C', crowd: 'Low', pricing: 'Budget', description: 'Heavy rains with landslide risk. Roads can be blocked. Not recommended for travel.' },
      { name: 'Winter', months: 'Oct-Feb', temp: '-2-15°C', crowd: 'High', pricing: 'Peak', description: 'Snowfall in December-February is magical. Ice skating and winter carnival. Carry heavy woolens.' },
    ],
    festivals: [
      { name: 'Summer Festival', month: 'May-June', description: 'Cultural performances, craft exhibitions, and flower shows on The Ridge.' },
      { name: 'Ice Skating Carnival', month: 'December-January', description: 'Asia\'s only open-air natural ice skating rink hosts a festive carnival.' },
    ],
  },
  Manali: {
    overview: 'Manali is a year-round destination. Summer (March-June) is perfect for adventure, while winter (December-February) brings snowfall. Monsoon has landslide risks.',
    recommendedMonths: ['March', 'April', 'May', 'June', 'October', 'November', 'December', 'January'],
    peakSeason: 'April to June and December to January',
    offSeason: 'July to September (monsoon)',
    idealDuration: '3-5 days',
    seasons: [
      { name: 'Summer', months: 'Mar-Jun', temp: '10-25°C', crowd: 'Very High', pricing: 'Peak', description: 'Ideal for Rohtang Pass, Solang Valley, and river rafting. Book accommodation well in advance.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '15-22°C', crowd: 'Low', pricing: 'Budget', description: 'Heavy rainfall with landslide risk. Rohtang Pass closed. Roads can be treacherous.' },
      { name: 'Winter', months: 'Oct-Feb', temp: '-5-15°C', crowd: 'High', pricing: 'Peak', description: 'Snowfall from December. Skiing at Solang Valley. Old Manali cafes are cozy. Carry heavy winter gear.' },
    ],
    festivals: [
      { name: 'Winter Carnival', month: 'January', description: 'Cultural performances, folk dances, and adventure sports competitions in the snow.' },
      { name: 'Kullu Dussehra', month: 'October', description: 'Week-long festival in Kullu Valley with deity processions and folk performances.' },
    ],
  },
  Amritsar: {
    overview: 'Amritsar has extreme temperatures. November to March is the best time, offering pleasant weather for Golden Temple visits and Wagah Border ceremony.',
    recommendedMonths: ['November', 'December', 'January', 'February', 'March'],
    peakSeason: 'November to March',
    offSeason: 'May to September',
    idealDuration: '2 days',
    seasons: [
      { name: 'Winter', months: 'Nov-Feb', temp: '5-20°C', crowd: 'High', pricing: 'Peak', description: 'Best time for Golden Temple visit. Cool weather perfect for walking. Foggy mornings possible.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '20-45°C', crowd: 'Low', pricing: 'Budget', description: 'Extremely hot. Golden Temple visit feasible early morning. Carry water and sunscreen.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '25-35°C', crowd: 'Medium', pricing: 'Moderate', description: 'Humid with moderate rain. Golden Temple sarovar looks beautiful. Wagah ceremony may be affected by rain.' },
    ],
    festivals: [
      { name: 'Baisakhi', month: 'April', description: 'Harvest festival marking the founding of Khalsa. Grand celebrations at Golden Temple.' },
      { name: 'Diwali at Golden Temple', month: 'October/November', description: 'Spectacular illumination of the Golden Temple with fireworks and celebrations.' },
      { name: 'Guru Nanak Jayanti', month: 'November', description: 'Birth anniversary of Guru Nanak with processions and langar.' },
    ],
  },
  Lucknow: {
    overview: 'Lucknow has an extreme climate with hot summers and cool winters. October to March is ideal for exploring Nawabi heritage and savouring Awadhi cuisine.',
    recommendedMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
    peakSeason: 'October to March',
    offSeason: 'April to September',
    idealDuration: '2-3 days',
    seasons: [
      { name: 'Winter', months: 'Oct-Feb', temp: '7-25°C', crowd: 'Medium', pricing: 'Moderate', description: 'Perfect for exploring Bara Imambara and food tours. Cool evenings ideal for Hazratganj walks.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '25-45°C', crowd: 'Low', pricing: 'Budget', description: 'Very hot and dry. Indoor heritage sites recommended. Tunday Kebabs are a must even in summer.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '25-35°C', crowd: 'Low', pricing: 'Budget', description: 'Moderate to heavy rainfall. Heritage buildings look atmospheric. Some waterlogging possible.' },
    ],
    festivals: [
      { name: 'Lucknow Mahotsav', month: 'November', description: 'Cultural extravaganza showcasing Awadhi art, music, dance, and cuisine.' },
      { name: 'Muharram', month: 'Varies', description: 'Grand processions and gatherings at Bara and Chota Imambara.' },
    ],
  },
  Varanasi: {
    overview: 'Varanasi is best visited from October to March when the weather is pleasant for ghat walks and boat rides. The Ganga Aarti is mesmerizing year-round.',
    recommendedMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
    peakSeason: 'October to March',
    offSeason: 'April to September',
    idealDuration: '2-3 days',
    seasons: [
      { name: 'Winter', months: 'Oct-Feb', temp: '5-25°C', crowd: 'High', pricing: 'Peak', description: 'Best for ghat walks and sunrise boat rides. Dev Deepawali in November is magical. Carry woolens.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '25-45°C', crowd: 'Low', pricing: 'Budget', description: 'Extremely hot. Early morning boat rides still possible. Ganga Aarti continues nightly.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '25-35°C', crowd: 'Low', pricing: 'Budget', description: 'Ganga water levels rise significantly. Some ghats submerged. Aarti moves to higher ghats.' },
    ],
    festivals: [
      { name: 'Dev Deepawali', month: 'November', description: 'Million lamps light up all 84 ghats. The most spectacular night in Varanasi.' },
      { name: 'Maha Shivaratri', month: 'February/March', description: 'Grand celebration at Kashi Vishwanath Temple with night-long prayers.' },
      { name: 'Ganga Mahotsav', month: 'November', description: 'Five-day cultural festival with music, dance, and boat races on the Ganga.' },
    ],
  },
  Udaipur: {
    overview: 'Udaipur is best visited September to March when the lakes are full (after monsoon) and the weather is pleasant. The City of Lakes is stunning in winter light.',
    recommendedMonths: ['September', 'October', 'November', 'December', 'January', 'February', 'March'],
    peakSeason: 'September to March',
    offSeason: 'April to June',
    idealDuration: '2-3 days',
    seasons: [
      { name: 'Winter', months: 'Oct-Feb', temp: '8-28°C', crowd: 'High', pricing: 'Peak', description: 'Perfect weather for lake boat rides and palace visits. Wedding season brings premium hotel rates.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '25-42°C', crowd: 'Low', pricing: 'Budget', description: 'Hot but dry. Lakes may be partially dry before monsoon. Great hotel deals available.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '22-35°C', crowd: 'Medium', pricing: 'Moderate', description: 'Lakes fill up beautifully. Lush green Aravallis. The city transforms. September onwards is ideal.' },
    ],
    festivals: [
      { name: 'Mewar Festival', month: 'March/April', description: 'Spring festival with processions, cultural events, and fireworks at Gangaur Ghat.' },
      { name: 'Shilpgram Festival', month: 'December', description: 'Arts and crafts festival showcasing rural artisans from across western India.' },
    ],
  },
  Jodhpur: {
    overview: 'Jodhpur has a hot desert climate. October to March offers comfortable temperatures for exploring Mehrangarh Fort and the Blue City streets.',
    recommendedMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
    peakSeason: 'October to March',
    offSeason: 'April to September',
    idealDuration: '2 days',
    seasons: [
      { name: 'Winter', months: 'Oct-Feb', temp: '8-28°C', crowd: 'High', pricing: 'Peak', description: 'Best for fort visits and old city walks. Cool mornings with warm afternoons. Desert evenings are chilly.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '25-48°C', crowd: 'Low', pricing: 'Budget', description: 'Extremely hot desert climate. Fort visits uncomfortable. Only early morning outings advisable.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '25-38°C', crowd: 'Low', pricing: 'Budget', description: 'Brief but dramatic desert rains. Mehrangarh Fort looks dramatic against monsoon clouds.' },
    ],
    festivals: [
      { name: 'Rajasthan International Folk Festival (RIFF)', month: 'October', description: 'World-class folk music festival held at Mehrangarh Fort under the full moon.' },
      { name: 'Marwar Festival', month: 'October', description: 'Celebrating Rajasthani heroes with folk music, dance, and camel polo.' },
    ],
  },
  Ayodhya: {
    overview: 'Ayodhya is best visited October to March for pleasant weather. Ram Navami (March/April) is the grandest festival when the city comes alive with celebrations.',
    recommendedMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
    peakSeason: 'October to March',
    offSeason: 'May to September',
    idealDuration: '1-2 days',
    seasons: [
      { name: 'Winter', months: 'Oct-Feb', temp: '7-25°C', crowd: 'High', pricing: 'Peak', description: 'Best for temple visits. Cool and comfortable. Ram Mandir queues are long but manageable.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '25-45°C', crowd: 'Medium', pricing: 'Moderate', description: 'Very hot. Early morning temple visits recommended. Ram Navami crowds in March/April.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '25-35°C', crowd: 'Low', pricing: 'Budget', description: 'Moderate rainfall. Saryu River swells. Some ghat areas may be waterlogged.' },
    ],
    festivals: [
      { name: 'Ram Navami', month: 'March/April', description: 'Grand celebration of Lord Ram\'s birth. Millions visit. Book transport well in advance.' },
      { name: 'Deepotsav', month: 'October/November', description: 'Spectacular Diwali celebration with lakhs of diyas along Saryu River ghats.' },
    ],
  },
  Ahmedabad: {
    overview: 'Ahmedabad has a hot semi-arid climate. November to February is ideal for heritage walks in the UNESCO World Heritage old city and exploring Gandhi Ashram.',
    recommendedMonths: ['November', 'December', 'January', 'February'],
    peakSeason: 'November to February',
    offSeason: 'April to September',
    idealDuration: '2 days',
    seasons: [
      { name: 'Winter', months: 'Nov-Feb', temp: '12-30°C', crowd: 'Medium', pricing: 'Moderate', description: 'Best time for heritage walks and street food tours. International Kite Festival in January is a highlight.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '28-46°C', crowd: 'Low', pricing: 'Budget', description: 'Extremely hot. Indoor attractions recommended. Carry water and sun protection.' },
      { name: 'Monsoon', months: 'Jul-Oct', temp: '25-35°C', crowd: 'Low', pricing: 'Budget', description: 'Moderate rainfall. Some flooding in low-lying areas. Heritage sites look dramatic in rain.' },
    ],
    festivals: [
      { name: 'International Kite Festival', month: 'January', description: 'Uttarayan celebrations with thousands of kites filling the sky. A spectacular visual experience.' },
      { name: 'Navratri', month: 'September/October', description: 'Nine nights of Garba and Dandiya Raas dancing. Ahmedabad hosts the grandest celebrations.' },
    ],
  },
  Rishikesh: {
    overview: 'Rishikesh is best visited September to November and February to May. These months offer ideal weather for yoga, rafting, and spiritual experiences by the Ganges.',
    recommendedMonths: ['February', 'March', 'April', 'May', 'September', 'October', 'November'],
    peakSeason: 'September to November and February to May',
    offSeason: 'July to August (monsoon, no rafting)',
    idealDuration: '2-3 days',
    seasons: [
      { name: 'Spring', months: 'Feb-May', temp: '10-35°C', crowd: 'High', pricing: 'Peak', description: 'Best for rafting and adventure sports. Yoga retreats in full swing. Pleasant mornings by the Ganges.' },
      { name: 'Monsoon', months: 'Jun-Aug', temp: '20-35°C', crowd: 'Low', pricing: 'Budget', description: 'Heavy rainfall. Rafting suspended. Ganga in spate. Lush green surroundings but risky for treks.' },
      { name: 'Autumn/Winter', months: 'Sep-Jan', temp: '5-28°C', crowd: 'High', pricing: 'Peak', description: 'Post-monsoon clarity. Rafting resumes. Beatles Ashram and temple visits are comfortable.' },
    ],
    festivals: [
      { name: 'International Yoga Festival', month: 'March', description: 'Week-long yoga festival at Parmarth Niketan attracting practitioners worldwide.' },
      { name: 'Ganga Aarti', month: 'Year-round (daily)', description: 'Nightly spiritual ceremony at Triveni Ghat and Parmarth Niketan.' },
    ],
  },
  Mussoorie: {
    overview: 'Mussoorie, the Queen of Hills, is best April to June for summer escapes and September to November for clear mountain views. Snowfall visits possible December to February.',
    recommendedMonths: ['April', 'May', 'June', 'September', 'October', 'November'],
    peakSeason: 'April to June',
    offSeason: 'July to September (heavy monsoon)',
    idealDuration: '2-3 days',
    seasons: [
      { name: 'Summer', months: 'Apr-Jun', temp: '15-30°C', crowd: 'Very High', pricing: 'Peak', description: 'Perfect escape from plains heat. Mall Road packed with tourists. Book hotels 2 weeks in advance.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '15-25°C', crowd: 'Low', pricing: 'Budget', description: 'Heavy rainfall with landslide risk. Waterfalls at full force. Not recommended for family trips.' },
      { name: 'Winter', months: 'Oct-Feb', temp: '0-15°C', crowd: 'Medium', pricing: 'Moderate', description: 'Clear skies with Himalayan views. Possible snowfall December-January. Carry heavy woolens.' },
    ],
    festivals: [
      { name: 'Mussoorie Winter Line', month: 'November-January', description: 'Rare natural phenomenon visible from Lal Tibba where the sky appears to glow at sunset.' },
    ],
  },
  Nainital: {
    overview: 'Nainital is delightful March to June for summer holidays and October to November for clear lake views. December to February brings occasional snowfall.',
    recommendedMonths: ['March', 'April', 'May', 'June', 'October', 'November'],
    peakSeason: 'April to June',
    offSeason: 'July to September (monsoon)',
    idealDuration: '2-3 days',
    seasons: [
      { name: 'Summer', months: 'Mar-Jun', temp: '10-27°C', crowd: 'Very High', pricing: 'Peak', description: 'Best for boating on Naini Lake and cable car rides. Hotels book up fast in May-June.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '15-22°C', crowd: 'Low', pricing: 'Budget', description: 'Heavy rainfall. Landslides possible. Lake overflows. Not ideal for tourists.' },
      { name: 'Winter', months: 'Oct-Feb', temp: '0-15°C', crowd: 'Medium', pricing: 'Moderate', description: 'Clear skies with mountain views. Possible snowfall. Tiffin Top and Snow View worth visiting.' },
    ],
    festivals: [
      { name: 'Nanda Devi Fair', month: 'September', description: 'Annual fair celebrating the patron goddess with processions and cultural events.' },
      { name: 'Autumn Festival', month: 'October-November', description: 'Cultural festival on the banks of Naini Lake with boat races and local performances.' },
    ],
  },
  Mathura: {
    overview: 'Mathura, the birthplace of Lord Krishna, is best visited October to March. Holi (March) is the most spectacular time, celebrated with unmatched fervour.',
    recommendedMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
    peakSeason: 'October to March',
    offSeason: 'April to September',
    idealDuration: '1-2 days (combine with Vrindavan)',
    seasons: [
      { name: 'Winter', months: 'Oct-Feb', temp: '5-25°C', crowd: 'High', pricing: 'Peak', description: 'Pleasant weather for temple visits. Janmashtami crowds in August. Morning aarti is serene.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '25-47°C', crowd: 'Low', pricing: 'Budget', description: 'Extremely hot. Holi in March is worth the heat. Temple visits best before 8 AM.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '25-35°C', crowd: 'Medium', pricing: 'Moderate', description: 'Janmashtami in August draws massive crowds. Yamuna floods. Some ghats inaccessible.' },
    ],
    festivals: [
      { name: 'Holi', month: 'March', description: 'The most vibrant Holi celebration in India. Lathmar Holi starts a week before in Barsana.' },
      { name: 'Janmashtami', month: 'August', description: 'Krishna\'s birthday celebrated with midnight prayers, dahi-handi, and grand decorations.' },
    ],
  },
  Vrindavan: {
    overview: 'Vrindavan is best visited October to March for comfortable temple visits. The town comes alive during Holi and Janmashtami with devotional fervour.',
    recommendedMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
    peakSeason: 'October to March',
    offSeason: 'April to September',
    idealDuration: '1 day (combine with Mathura)',
    seasons: [
      { name: 'Winter', months: 'Oct-Feb', temp: '5-25°C', crowd: 'High', pricing: 'Peak', description: 'Ideal for temple hopping. ISKCON and Banke Bihari darshan comfortable. Carry woolens.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '25-47°C', crowd: 'Low', pricing: 'Budget', description: 'Very hot. Holi celebrations in March draw huge crowds despite the heat.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '25-35°C', crowd: 'Medium', pricing: 'Moderate', description: 'Janmashtami celebrations in August are grand. Some temple areas may flood.' },
    ],
    festivals: [
      { name: 'Holi', month: 'March', description: 'Flower Holi at Banke Bihari Temple is world-famous. Week-long celebrations across all temples.' },
      { name: 'Janmashtami', month: 'August', description: 'Midnight celebrations at every temple. Banke Bihari and Prem Mandir are spectacular.' },
    ],
  },
  'Jim Corbett': {
    overview: 'Jim Corbett National Park is open November to June. Best tiger sighting chances are March to May when animals gather at water sources. Monsoon closure July to October.',
    recommendedMonths: ['November', 'December', 'January', 'February', 'March', 'April', 'May'],
    peakSeason: 'March to May (best tiger sighting)',
    offSeason: 'July to October (park closed)',
    idealDuration: '2-3 days',
    seasons: [
      { name: 'Winter', months: 'Nov-Feb', temp: '5-25°C', crowd: 'High', pricing: 'Peak', description: 'Pleasant weather. Good bird watching. Tigers harder to spot due to dense vegetation.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '20-42°C', crowd: 'High', pricing: 'Peak', description: 'Best for tiger sighting as animals come to water holes. Hot but rewarding safaris.' },
      { name: 'Monsoon', months: 'Jul-Oct', temp: '20-35°C', crowd: 'None', pricing: 'Closed', description: 'Park closed for monsoon. Heavy rainfall. Roads get washed away. Bijrani zone may open briefly.' },
    ],
    festivals: [
      { name: 'Wildlife Week', month: 'October', description: 'National Wildlife Week with awareness events and nature camps around the park.' },
    ],
  },
  Dharamshala: {
    overview: 'Dharamshala is pleasant March to June and September to November. The Dalai Lama often gives teachings in spring and autumn. Monsoon brings heavy rain.',
    recommendedMonths: ['March', 'April', 'May', 'June', 'September', 'October', 'November'],
    peakSeason: 'March to June and September to November',
    offSeason: 'July to August (heavy monsoon)',
    idealDuration: '2-3 days',
    seasons: [
      { name: 'Spring/Summer', months: 'Mar-Jun', temp: '12-28°C', crowd: 'High', pricing: 'Peak', description: 'Best for Triund trek and Dalai Lama temple visits. Rhododendrons bloom. Pleasant mornings.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '15-25°C', crowd: 'Low', pricing: 'Budget', description: 'Very heavy rainfall (Dharamshala is one of India\'s wettest places). Landslides possible. Avoid treks.' },
      { name: 'Winter', months: 'Oct-Feb', temp: '0-18°C', crowd: 'Medium', pricing: 'Moderate', description: 'Clear Dhauladhar views. Possible snowfall in December-January. Cricket stadium matches are highlights.' },
    ],
    festivals: [
      { name: 'Losar (Tibetan New Year)', month: 'February', description: 'Tibetan New Year celebrations with prayers, dances, and cultural shows at monasteries.' },
      { name: 'HPCA Cricket Matches', month: 'Various', description: 'International cricket matches at the stunning Dharamshala cricket stadium.' },
    ],
  },
  Mcleodganj: {
    overview: 'McLeod Ganj shares Dharamshala\'s climate. March to June and September to November are ideal for trekking and cultural exploration. Avoid monsoon.',
    recommendedMonths: ['March', 'April', 'May', 'June', 'September', 'October', 'November'],
    peakSeason: 'March to June',
    offSeason: 'July to September (heavy rain)',
    idealDuration: '2-3 days',
    seasons: [
      { name: 'Spring/Summer', months: 'Mar-Jun', temp: '10-25°C', crowd: 'High', pricing: 'Peak', description: 'Perfect for Triund trek. Cafes buzzing with backpackers. Dalai Lama teachings may happen.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '15-22°C', crowd: 'Low', pricing: 'Budget', description: 'Extremely heavy rainfall. Trekking dangerous. Cafes offer cozy monsoon retreats.' },
      { name: 'Winter', months: 'Oct-Feb', temp: '-2-15°C', crowd: 'Medium', pricing: 'Moderate', description: 'Snowfall possible December-January. Stunning mountain clarity. Carry heavy winter gear.' },
    ],
    festivals: [
      { name: 'Losar', month: 'February', description: 'Tibetan New Year with monastery celebrations and traditional dances.' },
      { name: 'Dalai Lama Teachings', month: 'Various (check schedule)', description: 'Public teachings by the Dalai Lama attracting devotees from worldwide.' },
    ],
  },
  Kasauli: {
    overview: 'Kasauli is a tranquil retreat best visited March to June and September to November. It offers a quieter alternative to Shimla with colonial charm.',
    recommendedMonths: ['March', 'April', 'May', 'June', 'September', 'October', 'November'],
    peakSeason: 'April to June',
    offSeason: 'July to September (monsoon)',
    idealDuration: '1-2 days',
    seasons: [
      { name: 'Summer', months: 'Mar-Jun', temp: '15-30°C', crowd: 'High', pricing: 'Peak', description: 'Cool escape from plains heat. Monkey Point and Christ Church worth visiting. Quiet walks through pine forests.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '15-22°C', crowd: 'Low', pricing: 'Budget', description: 'Heavy rain. The town looks green and beautiful but trekking is risky.' },
      { name: 'Winter', months: 'Oct-Feb', temp: '2-15°C', crowd: 'Low', pricing: 'Budget', description: 'Quiet and peaceful. Possible frost. Great for writers and those seeking solitude.' },
    ],
    festivals: [
      { name: 'Kasauli Rhythm and Blues Festival', month: 'March/April', description: 'Music festival in the hills with rock, jazz, and blues performances.' },
    ],
  },
  Dalhousie: {
    overview: 'Dalhousie is best visited March to June for pleasant weather and December to February for snowfall. The nearby Khajjiar (Mini Switzerland) is a highlight.',
    recommendedMonths: ['March', 'April', 'May', 'June', 'December', 'January', 'February'],
    peakSeason: 'April to June',
    offSeason: 'July to September (monsoon)',
    idealDuration: '2-3 days',
    seasons: [
      { name: 'Summer', months: 'Mar-Jun', temp: '15-30°C', crowd: 'High', pricing: 'Peak', description: 'Perfect weather for Khajjiar visit and walks along Mall Road. Book hotels early for May-June.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '15-22°C', crowd: 'Low', pricing: 'Budget', description: 'Heavy rainfall with landslide risk on approach roads. Not recommended.' },
      { name: 'Winter', months: 'Oct-Feb', temp: '-2-12°C', crowd: 'Medium', pricing: 'Moderate', description: 'Snowfall December-February. Khajjiar meadow covered in snow is magical. Carry heavy woolens.' },
    ],
    festivals: [
      { name: 'Minjar Fair', month: 'July/August', description: 'Week-long harvest festival in Chamba with folk dances and cultural celebrations.' },
    ],
  },
  Kasol: {
    overview: 'Kasol in Parvati Valley is best March to June and September to November. Known for its hippie culture, trekking to Kheerganga, and Israeli cuisine.',
    recommendedMonths: ['March', 'April', 'May', 'June', 'September', 'October', 'November'],
    peakSeason: 'April to June',
    offSeason: 'July to August (monsoon, flash floods risk)',
    idealDuration: '2-3 days',
    seasons: [
      { name: 'Spring/Summer', months: 'Mar-Jun', temp: '8-25°C', crowd: 'Very High', pricing: 'Peak', description: 'Best for Kheerganga trek and riverside camping. Cafes buzzing. Book accommodation in advance.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '15-25°C', crowd: 'Low', pricing: 'Budget', description: 'Flash flood risk in Parvati Valley. Treks closed. Roads can be blocked. Not recommended.' },
      { name: 'Winter', months: 'Oct-Feb', temp: '-3-15°C', crowd: 'Medium', pricing: 'Moderate', description: 'Cold but stunning. Snow from December. Many cafes remain open. Kheerganga trek closed in winter.' },
    ],
    festivals: [
      { name: 'Spring Festival', month: 'March/April', description: 'Local spring celebrations with folk music and dances in Parvati Valley villages.' },
    ],
  },
  Pushkar: {
    overview: 'Pushkar is best November to February for pleasant weather. The legendary Pushkar Camel Fair in November is a once-in-a-lifetime experience.',
    recommendedMonths: ['October', 'November', 'December', 'January', 'February'],
    peakSeason: 'November (Pushkar Fair)',
    offSeason: 'April to September',
    idealDuration: '1-2 days',
    seasons: [
      { name: 'Winter', months: 'Oct-Feb', temp: '8-28°C', crowd: 'Very High (Nov)', pricing: 'Peak', description: 'Best weather. Pushkar Fair in November transforms the town. Book months ahead for the fair.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '25-42°C', crowd: 'Low', pricing: 'Budget', description: 'Hot desert climate. Lake may partially dry. Brahma Temple visits best in early morning.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '25-35°C', crowd: 'Low', pricing: 'Budget', description: 'Brief monsoon showers. Lake fills up. Town is quiet and peaceful.' },
    ],
    festivals: [
      { name: 'Pushkar Camel Fair', month: 'November', description: 'World-famous 5-day fair with 50,000+ camels, folk performances, and competitions.' },
      { name: 'Kartik Purnima', month: 'November', description: 'Full moon holy dip in Pushkar Lake. Thousands of lamps floated on the lake.' },
    ],
  },
  Ajmer: {
    overview: 'Ajmer is best visited October to March for comfortable weather. The Urs Festival at Ajmer Sharif Dargah draws millions of devotees annually.',
    recommendedMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
    peakSeason: 'October to March',
    offSeason: 'April to September',
    idealDuration: '1 day (combine with Pushkar)',
    seasons: [
      { name: 'Winter', months: 'Oct-Feb', temp: '8-28°C', crowd: 'High', pricing: 'Moderate', description: 'Best for Dargah visit and Ana Sagar Lake stroll. Cool and pleasant weather.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '25-45°C', crowd: 'Low', pricing: 'Budget', description: 'Very hot. Dargah visit feasible in early morning or evening. Carry water.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '25-35°C', crowd: 'Low', pricing: 'Budget', description: 'Light to moderate rain. Ana Sagar Lake looks beautiful after rain.' },
    ],
    festivals: [
      { name: 'Urs Festival', month: 'Varies (Islamic calendar)', description: 'Six-day anniversary of Khwaja Moinuddin Chishti drawing millions to the Dargah.' },
    ],
  },
  Bikaner: {
    overview: 'Bikaner in the Thar Desert is best October to March. The Camel Festival in January is a unique desert experience with camel beauty contests and races.',
    recommendedMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
    peakSeason: 'October to February',
    offSeason: 'April to September',
    idealDuration: '1-2 days',
    seasons: [
      { name: 'Winter', months: 'Oct-Feb', temp: '5-28°C', crowd: 'Medium', pricing: 'Moderate', description: 'Best for fort visits and desert excursions. Chilly desert nights. Junagarh Fort is stunning.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '25-48°C', crowd: 'Very Low', pricing: 'Budget', description: 'Scorching desert heat. Not recommended for tourism. Temperatures can exceed 48°C.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '25-40°C', crowd: 'Low', pricing: 'Budget', description: 'Brief desert rains. Hot and humid. Karni Mata Temple visits possible.' },
    ],
    festivals: [
      { name: 'Camel Festival', month: 'January', description: 'Two-day festival with camel beauty contests, races, fur cutting, and folk performances.' },
    ],
  },
  Jaisalmer: {
    overview: 'Jaisalmer, the Golden City, is best October to March. The Desert Festival in February features camel races, folk music, and camping under the stars at Sam Sand Dunes.',
    recommendedMonths: ['October', 'November', 'December', 'January', 'February'],
    peakSeason: 'November to February',
    offSeason: 'April to September',
    idealDuration: '2-3 days',
    seasons: [
      { name: 'Winter', months: 'Oct-Feb', temp: '5-28°C', crowd: 'High', pricing: 'Peak', description: 'Perfect desert weather. Sam Sand Dunes camping at its best. Cold desert nights under stars.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '25-48°C', crowd: 'Very Low', pricing: 'Budget', description: 'Extreme desert heat. Tourism virtually stops. Only early morning activities possible.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '25-40°C', crowd: 'Low', pricing: 'Budget', description: 'Brief rare desert rains. Gadisar Lake fills up. The fort looks golden in cloudy light.' },
    ],
    festivals: [
      { name: 'Desert Festival', month: 'February', description: 'Three-day festival with camel races, folk music, turban-tying contests, and Mr. Desert competition.' },
    ],
  },
  'Mount Abu': {
    overview: 'Mount Abu, Rajasthan\'s only hill station, is pleasant year-round. Best April to June as a heat escape and September to November for post-monsoon clarity.',
    recommendedMonths: ['April', 'May', 'June', 'September', 'October', 'November'],
    peakSeason: 'April to June',
    offSeason: 'July to August (monsoon)',
    idealDuration: '2 days',
    seasons: [
      { name: 'Summer', months: 'Apr-Jun', temp: '20-34°C', crowd: 'High', pricing: 'Peak', description: 'Cool retreat from Rajasthan heat. Nakki Lake boating and Dilwara Temples are delightful.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '20-28°C', crowd: 'Medium', pricing: 'Moderate', description: 'Moderate rainfall. Lush green hills. Waterfalls active. Some road disruptions possible.' },
      { name: 'Winter', months: 'Oct-Mar', temp: '10-28°C', crowd: 'Medium', pricing: 'Moderate', description: 'Pleasant but cool nights. Sunset Point and Guru Shikhar visits are comfortable.' },
    ],
    festivals: [
      { name: 'Mount Abu Summer Festival', month: 'May/June', description: 'Cultural festival with folk music, boat race on Nakki Lake, and Sham-e-Qawwali.' },
    ],
  },
  Ranthambore: {
    overview: 'Ranthambore National Park is open October to June. March to May offers the best tiger sighting chances as vegetation thins and animals come to waterholes.',
    recommendedMonths: ['October', 'November', 'December', 'January', 'February', 'March', 'April', 'May'],
    peakSeason: 'March to May (best tiger sighting)',
    offSeason: 'July to September (park closed)',
    idealDuration: '2 days',
    seasons: [
      { name: 'Winter', months: 'Oct-Feb', temp: '5-28°C', crowd: 'High', pricing: 'Peak', description: 'Pleasant safari weather. Good bird watching. Tiger sighting moderate. Morning safaris can be cold.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '25-48°C', crowd: 'High', pricing: 'Peak', description: 'Hot but best tiger sighting season. Animals at waterholes. Carry water and sun protection.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '25-38°C', crowd: 'None', pricing: 'Closed', description: 'Park closed for monsoon. Heavy rainfall. Wildlife breeding season.' },
    ],
    festivals: [
      { name: 'Ranthambore Festival', month: 'November', description: 'Nature walks, photography workshops, and wildlife awareness events near the park.' },
    ],
  },
  Bharatpur: {
    overview: 'Bharatpur\'s Keoladeo National Park is best October to February when migratory birds from Siberia, China, and Europe arrive. A birdwatcher\'s paradise.',
    recommendedMonths: ['October', 'November', 'December', 'January', 'February'],
    peakSeason: 'October to February (migratory birds)',
    offSeason: 'April to September',
    idealDuration: '1-2 days',
    seasons: [
      { name: 'Winter', months: 'Oct-Feb', temp: '5-25°C', crowd: 'High', pricing: 'Peak', description: 'Migratory birds arrive. Best bird photography. Cycle-rickshaw safaris in the park are delightful.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '25-47°C', crowd: 'Low', pricing: 'Budget', description: 'Very hot. Park still open but fewer birds. Lohagarh Fort visit possible early morning.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '25-35°C', crowd: 'Low', pricing: 'Budget', description: 'Wetlands fill up. Resident birds nesting. Lush green surroundings. Fewer tourists.' },
    ],
    festivals: [
      { name: 'Brij Festival', month: 'February/March', description: 'Colourful festival celebrating the Brij region culture with music and folk dances.' },
    ],
  },
  Prayagraj: {
    overview: 'Prayagraj (Allahabad) is best October to March. The Triveni Sangam (confluence of three rivers) is the main draw. Kumbh Mela is the grandest event.',
    recommendedMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
    peakSeason: 'October to March',
    offSeason: 'April to September',
    idealDuration: '1-2 days',
    seasons: [
      { name: 'Winter', months: 'Oct-Feb', temp: '5-25°C', crowd: 'Medium', pricing: 'Moderate', description: 'Best for Sangam boat rides and Anand Bhawan visit. Magh Mela in January draws pilgrims.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '25-47°C', crowd: 'Low', pricing: 'Budget', description: 'Extremely hot. River confluence visit only at dawn. Akbar Fort and museums better options.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '25-35°C', crowd: 'Low', pricing: 'Budget', description: 'Rivers in spate. Sangam boat rides may be suspended. Heavy flooding possible near ghats.' },
    ],
    festivals: [
      { name: 'Kumbh Mela', month: 'Every 12 years (Magh Mela annually in Jan)', description: 'World\'s largest religious gathering. Holy dip at Triveni Sangam. Next Kumbh: 2037.' },
    ],
  },
  Bodhgaya: {
    overview: 'Bodhgaya is best October to March for pleasant weather and spiritual exploration. The Mahabodhi Temple is serene year-round.',
    recommendedMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
    peakSeason: 'October to March',
    offSeason: 'April to September',
    idealDuration: '1-2 days',
    seasons: [
      { name: 'Winter', months: 'Oct-Feb', temp: '5-25°C', crowd: 'High', pricing: 'Moderate', description: 'Best for temple visits and meditation retreats. Dalai Lama often teaches here in December-January.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '25-45°C', crowd: 'Low', pricing: 'Budget', description: 'Very hot. Early morning Bodhi Tree visits recommended. Carry water and sun protection.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '25-35°C', crowd: 'Low', pricing: 'Budget', description: 'Moderate to heavy rain. Temple premises can be slippery. Meditation retreats still available.' },
    ],
    festivals: [
      { name: 'Buddha Purnima', month: 'May', description: 'Birth anniversary of Buddha with special prayers and illumination at Mahabodhi Temple.' },
      { name: 'Dalai Lama Teachings', month: 'December/January', description: 'Annual Kalachakra teachings attracting thousands of Buddhist devotees worldwide.' },
    ],
  },
  Gwalior: {
    overview: 'Gwalior is best October to March when the weather is pleasant for exploring the magnificent Gwalior Fort and attending classical music events.',
    recommendedMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
    peakSeason: 'October to March',
    offSeason: 'April to September',
    idealDuration: '1-2 days',
    seasons: [
      { name: 'Winter', months: 'Oct-Feb', temp: '5-28°C', crowd: 'Medium', pricing: 'Moderate', description: 'Perfect for fort exploration and Tansen Music Festival. Cool mornings, pleasant days.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '25-47°C', crowd: 'Low', pricing: 'Budget', description: 'Extremely hot. Fort visits only early morning. Sound and light show in evening.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '25-35°C', crowd: 'Low', pricing: 'Budget', description: 'Moderate rainfall. Fort looks dramatic. Some palace areas may have restricted access.' },
    ],
    festivals: [
      { name: 'Tansen Music Festival', month: 'November/December', description: 'Classical music festival honouring Tansen, one of Akbar\'s nine jewels, with top Indian musicians.' },
    ],
  },
  Srinagar: {
    overview: 'Srinagar is magical April to October with Mughal gardens in bloom and Dal Lake at its best. December to February brings snow and winter sports.',
    recommendedMonths: ['April', 'May', 'June', 'July', 'August', 'September', 'October'],
    peakSeason: 'April to June and September to October',
    offSeason: 'November to January (cold but snow tourism)',
    idealDuration: '3-5 days',
    seasons: [
      { name: 'Spring/Summer', months: 'Apr-Jun', temp: '10-30°C', crowd: 'Very High', pricing: 'Peak', description: 'Tulip Garden (April), Mughal Gardens in bloom. Shikara rides on Dal Lake are magical.' },
      { name: 'Monsoon/Autumn', months: 'Jul-Oct', temp: '15-30°C', crowd: 'High', pricing: 'Peak', description: 'Saffron harvest season. Chinar trees turn golden in autumn. Fewer crowds in September-October.' },
      { name: 'Winter', months: 'Nov-Mar', temp: '-5-12°C', crowd: 'Low', pricing: 'Moderate', description: 'Frozen Dal Lake. Heavy snowfall. Skiing at Gulmarg. Houseboat stays with kangri warmers.' },
    ],
    festivals: [
      { name: 'Tulip Festival', month: 'April', description: 'Asia\'s largest tulip garden (Indira Gandhi Memorial) with 1.5 million tulips in bloom.' },
      { name: 'Shikara Festival', month: 'June', description: 'Cultural celebration on Dal Lake with decorated shikaras, folk music, and cuisine.' },
    ],
  },
  Gulmarg: {
    overview: 'Gulmarg offers world-class skiing December to March and stunning meadows April to June. The Gondola ride is spectacular in every season.',
    recommendedMonths: ['December', 'January', 'February', 'March', 'April', 'May', 'June'],
    peakSeason: 'December to March (skiing) and May to June (meadows)',
    offSeason: 'July to November (monsoon and autumn)',
    idealDuration: '2-3 days',
    seasons: [
      { name: 'Winter', months: 'Dec-Mar', temp: '-10-5°C', crowd: 'High', pricing: 'Peak', description: 'World-class skiing and snowboarding. Gondola to Kongdoori. Deep powder snow. Carry heavy gear.' },
      { name: 'Spring/Summer', months: 'Apr-Jun', temp: '5-25°C', crowd: 'Very High', pricing: 'Peak', description: 'Meadows of flowers. Gondola offers stunning views. Golf course opens. Perfect weather.' },
      { name: 'Monsoon/Autumn', months: 'Jul-Nov', temp: '8-20°C', crowd: 'Low', pricing: 'Budget', description: 'Rainy and cold. Beautiful autumn colours in September-October. Fewer tourists.' },
    ],
    festivals: [
      { name: 'Ski Festival', month: 'February', description: 'National and international skiing competitions with cultural events.' },
    ],
  },
  Pahalgam: {
    overview: 'Pahalgam is best April to October with peak beauty in May-June. It serves as the base camp for Amarnath Yatra (July-August). Winter brings snow.',
    recommendedMonths: ['April', 'May', 'June', 'July', 'August', 'September', 'October'],
    peakSeason: 'May to June and July-August (Amarnath Yatra)',
    offSeason: 'November to March (cold, limited access)',
    idealDuration: '2-3 days',
    seasons: [
      { name: 'Spring/Summer', months: 'Apr-Jun', temp: '5-25°C', crowd: 'High', pricing: 'Peak', description: 'Lidder River at its best. Betaab Valley lush green. Pony rides and Aru Valley accessible.' },
      { name: 'Pilgrimage', months: 'Jul-Aug', temp: '10-25°C', crowd: 'Very High', pricing: 'Peak', description: 'Amarnath Yatra season. Town very crowded with pilgrims. Book well in advance.' },
      { name: 'Autumn/Winter', months: 'Sep-Mar', temp: '-5-18°C', crowd: 'Low', pricing: 'Budget', description: 'Autumn colours in Sep-Oct. Snow from November. Some areas inaccessible in deep winter.' },
    ],
    festivals: [
      { name: 'Amarnath Yatra', month: 'July-August', description: 'Sacred pilgrimage to the ice lingam cave. Pahalgam is the traditional starting base camp.' },
    ],
  },
  'Leh Ladakh': {
    overview: 'Leh-Ladakh is accessible June to September when roads are open. July-August is peak season. Passes close from October to May due to heavy snow.',
    recommendedMonths: ['June', 'July', 'August', 'September'],
    peakSeason: 'July to August',
    offSeason: 'October to May (most roads closed)',
    idealDuration: '5-7 days',
    seasons: [
      { name: 'Summer', months: 'Jun-Sep', temp: '3-25°C', crowd: 'Very High', pricing: 'Peak', description: 'Only season for road trips. Pangong Lake, Nubra Valley accessible. Book permits in advance. Altitude sickness possible.' },
      { name: 'Winter', months: 'Oct-May', temp: '-20-5°C', crowd: 'Low (flights only)', pricing: 'Moderate', description: 'Most roads closed. Chadar Trek on frozen Zanskar River (January-February). Flights operate. Very cold.' },
    ],
    festivals: [
      { name: 'Hemis Festival', month: 'June/July', description: 'Colorful masked dance festival at Hemis Monastery, the largest in Ladakh.' },
      { name: 'Ladakh Festival', month: 'September', description: 'Week-long cultural celebration with polo matches, archery, and traditional dances.' },
    ],
  },
  Noida: {
    overview: 'Noida, part of Delhi NCR, shares Delhi\'s climate. October to March is best for visiting. The city is mainly a business and transit hub.',
    recommendedMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
    peakSeason: 'October to March',
    offSeason: 'April to September',
    idealDuration: '1 day',
    seasons: [
      { name: 'Winter', months: 'Oct-Feb', temp: '5-25°C', crowd: 'Medium', pricing: 'Moderate', description: 'Pleasant weather for shopping and outdoor activities. DLF Mall of India and botanical gardens.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '25-45°C', crowd: 'Low', pricing: 'Budget', description: 'Very hot. Indoor activities recommended. Malls and entertainment zones are popular.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '25-35°C', crowd: 'Low', pricing: 'Budget', description: 'Moderate rainfall. Some waterlogging on roads. Okhla Bird Sanctuary looks green.' },
    ],
    festivals: [
      { name: 'Events at Expo Mart', month: 'Various', description: 'India Expo Centre hosts various exhibitions and trade fairs throughout the year.' },
    ],
  },
  'Greater Noida': {
    overview: 'Greater Noida shares Delhi NCR\'s climate pattern. October to March is most pleasant. Key attractions include the Expo Mart and Buddh International Circuit.',
    recommendedMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
    peakSeason: 'October to March',
    offSeason: 'April to September',
    idealDuration: '1 day',
    seasons: [
      { name: 'Winter', months: 'Oct-Feb', temp: '5-25°C', crowd: 'Medium', pricing: 'Moderate', description: 'Best weather for outdoor activities. Surajpur Wetland and Golf Course visits comfortable.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '25-45°C', crowd: 'Low', pricing: 'Budget', description: 'Very hot. AC transportation essential. Indoor attractions like Expo Mart preferred.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '25-35°C', crowd: 'Low', pricing: 'Budget', description: 'Moderate rainfall. Surajpur Wetland at its greenest. Some road waterlogging possible.' },
    ],
    festivals: [
      { name: 'Auto Expo', month: 'January (biennial)', description: 'Asia\'s largest motor show held at India Expo Mart, attracting millions of visitors.' },
    ],
  },
  Gurgaon: {
    overview: 'Gurugram (Gurgaon) shares Delhi\'s climate. October to March is best. It\'s primarily a corporate hub with malls, restaurants, and Cyber Hub.',
    recommendedMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
    peakSeason: 'October to March',
    offSeason: 'April to September',
    idealDuration: '1 day',
    seasons: [
      { name: 'Winter', months: 'Oct-Feb', temp: '5-25°C', crowd: 'Medium', pricing: 'Moderate', description: 'Pleasant for Cyber Hub dining, Kingdom of Dreams, and Aravalli trails. Corporate events peak.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '25-46°C', crowd: 'Low', pricing: 'Budget', description: 'Extremely hot. Indoor malls and restaurants recommended. Ambience Mall is popular.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '25-35°C', crowd: 'Low', pricing: 'Budget', description: 'Heavy rainfall causes significant waterlogging. Aravalli hills turn green.' },
    ],
    festivals: [
      { name: 'Cyber Hub Festivals', month: 'Various', description: 'Year-round food festivals, live music, and cultural events at Cyber Hub.' },
    ],
  },
  Faridabad: {
    overview: 'Faridabad shares Delhi NCR\'s climate. October to March is best for visiting the Surajkund Crafts Mela (February) and Aravalli nature walks.',
    recommendedMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
    peakSeason: 'February (Surajkund Mela)',
    offSeason: 'April to September',
    idealDuration: '1 day',
    seasons: [
      { name: 'Winter', months: 'Oct-Feb', temp: '5-25°C', crowd: 'Medium', pricing: 'Moderate', description: 'Best for Surajkund Lake walks and Aravalli Biodiversity Park. Crafts Mela in February is a highlight.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '25-46°C', crowd: 'Low', pricing: 'Budget', description: 'Very hot. Indoor activities recommended. Badkhal Lake area for evening walks only.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '25-35°C', crowd: 'Low', pricing: 'Budget', description: 'Moderate rainfall. Aravalli hills turn green. Good time for nature photography.' },
    ],
    festivals: [
      { name: 'Surajkund International Crafts Mela', month: 'February', description: 'Fortnight-long crafts fair with artisans from across India and 20+ countries.' },
    ],
  },
  Ghaziabad: {
    overview: 'Ghaziabad shares Delhi NCR\'s climate. October to March is pleasant. The city is a major transit hub to Uttarakhand and Eastern UP destinations.',
    recommendedMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
    peakSeason: 'October to March',
    offSeason: 'April to September',
    idealDuration: '1 day (transit hub)',
    seasons: [
      { name: 'Winter', months: 'Oct-Feb', temp: '5-25°C', crowd: 'Medium', pricing: 'Moderate', description: 'Pleasant weather. ISKCON temple and Hindon Air Base area visits comfortable.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '25-46°C', crowd: 'Low', pricing: 'Budget', description: 'Very hot. AC transportation essential for any outdoor activity.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '25-35°C', crowd: 'Low', pricing: 'Budget', description: 'Moderate to heavy rainfall. Some waterlogging on roads. Transit delays possible.' },
    ],
    festivals: [
      { name: 'Chhath Puja', month: 'November', description: 'Grand celebrations along Hindon River banks with devotees offering prayers to the Sun.' },
    ],
  },
  Meerut: {
    overview: 'Meerut, the birthplace of the 1857 revolt, shares Western UP\'s climate. October to March is best for visiting historical sites.',
    recommendedMonths: ['October', 'November', 'December', 'January', 'February', 'March'],
    peakSeason: 'October to March',
    offSeason: 'April to September',
    idealDuration: '1 day',
    seasons: [
      { name: 'Winter', months: 'Oct-Feb', temp: '5-25°C', crowd: 'Low', pricing: 'Budget', description: 'Pleasant weather for heritage walks. Shaheed Smarak and Augharnath Temple visits comfortable.' },
      { name: 'Summer', months: 'Mar-Jun', temp: '25-46°C', crowd: 'Very Low', pricing: 'Budget', description: 'Very hot. Hastinapur Wildlife Sanctuary accessible early morning only.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '25-35°C', crowd: 'Low', pricing: 'Budget', description: 'Moderate rainfall. Hastinapur Sanctuary lush. Some road disruptions possible.' },
    ],
    festivals: [
      { name: 'Nauchandi Mela', month: 'March/April', description: 'Historic fair held since Mughal times with trade stalls and cultural programs.' },
    ],
  },
  Dehradun: {
    overview: 'Dehradun in the Doon Valley is pleasant most of the year. Best March to June and September to November. It serves as the gateway to Mussoorie and Char Dham.',
    recommendedMonths: ['March', 'April', 'May', 'June', 'September', 'October', 'November'],
    peakSeason: 'March to June',
    offSeason: 'July to August (monsoon)',
    idealDuration: '1-2 days',
    seasons: [
      { name: 'Spring/Summer', months: 'Mar-Jun', temp: '15-35°C', crowd: 'Medium', pricing: 'Moderate', description: 'Pleasant in March-April, warm May-June. FRI and Robber\'s Cave are comfortable visits.' },
      { name: 'Monsoon', months: 'Jul-Sep', temp: '20-30°C', crowd: 'Low', pricing: 'Budget', description: 'Heavy rainfall. Sahastradhara waterfalls at full flow. Some road disruptions to Mussoorie.' },
      { name: 'Winter', months: 'Oct-Feb', temp: '5-22°C', crowd: 'Medium', pricing: 'Moderate', description: 'Cool and crisp. Clear mountain views. Tapkeshwar Temple and Clock Tower area pleasant.' },
    ],
    festivals: [
      { name: 'Jhanda Fair', month: 'April', description: 'Five-day fair at Guru Ram Rai Darbar celebrating Sikh heritage with processions.' },
    ],
  },
};

// Slug mapping: URL slug -> data key
const slugToName = {
  'manali': 'Manali', 'shimla': 'Shimla', 'jaipur': 'Jaipur', 'udaipur': 'Udaipur',
  'rishikesh': 'Rishikesh', 'kashmir': 'Srinagar', 'ladakh': 'Leh Ladakh',
  'rajasthan': 'Jaipur', 'agra': 'Agra', 'varanasi': 'Varanasi', 'haridwar': 'Haridwar',
  'nainital': 'Nainital', 'mussoorie': 'Mussoorie', 'dharamshala': 'Dharamshala',
  'spiti-valley': 'Leh Ladakh', 'amritsar': 'Amritsar', 'jim-corbett': 'Jim Corbett',
  'kedarnath': 'Haridwar', 'badrinath': 'Haridwar', 'jodhpur': 'Jodhpur',
  'jaisalmer': 'Jaisalmer', 'kasol': 'Kasol', 'mcleodganj': 'Mcleodganj',
  'ranthambore': 'Ranthambore', 'mount-abu': 'Mount Abu', 'delhi': 'Delhi',
  'chandigarh': 'Chandigarh', 'dehradun': 'Dehradun', 'lucknow': 'Lucknow',
  'mathura': 'Mathura', 'ayodhya': 'Ayodhya', 'noida': 'Noida', 'gurgaon': 'Gurgaon',
  'pushkar': 'Pushkar', 'ajmer': 'Ajmer', 'bikaner': 'Bikaner', 'dalhousie': 'Dalhousie',
};

// Display names for slugs that differ from data keys
const slugDisplayNames = {
  'kashmir': 'Kashmir', 'ladakh': 'Ladakh', 'rajasthan': 'Rajasthan',
  'spiti-valley': 'Spiti Valley', 'jim-corbett': 'Jim Corbett National Park',
  'kedarnath': 'Kedarnath', 'badrinath': 'Badrinath', 'mount-abu': 'Mount Abu',
  'mcleodganj': 'McLeodganj',
};

// The 25 slugs we want pages for (from the PDF)
const targetSlugs = [
  'manali', 'shimla', 'jaipur', 'udaipur', 'rishikesh', 'kashmir', 'ladakh',
  'rajasthan', 'agra', 'varanasi', 'haridwar', 'nainital', 'mussoorie',
  'dharamshala', 'spiti-valley', 'amritsar', 'jim-corbett', 'kedarnath',
  'badrinath', 'jodhpur', 'jaisalmer', 'kasol', 'mcleodganj', 'ranthambore', 'mount-abu'
];

const defaultFaqs = (dest) => [
  { question: `What is the best time to visit ${dest}?`, answer: `The best months to visit ${dest} are during the peak season when weather is pleasant and most attractions are accessible. Check the seasonal guide above for month-by-month details.` },
  { question: `Is ${dest} good to visit in monsoon?`, answer: `Monsoon season brings rainfall which can affect outdoor activities. However, the scenery is lush and green, and prices are lower. Carry rain gear if visiting during July-September.` },
  { question: `What is the cheapest time to visit ${dest}?`, answer: `Off-season months offer the best hotel and cab rates. You can save 30-50% on accommodation and travel during the low season.` },
  { question: `How many days are enough for ${dest}?`, answer: `A typical visit to ${dest} requires 2-4 days to cover the major attractions comfortably. Check our itinerary guide for detailed day-wise plans.` },
  { question: `Can I book a cab for ${dest} sightseeing?`, answer: `Yes, Triveni Cabs offers local taxi packages and outstation cabs for ${dest}. AC sedan from ₹11/km, SUV from ₹14/km. Call 7668570551 or WhatsApp for instant booking.` },
  { question: `What should I pack when visiting ${dest}?`, answer: `Packing depends on the season. Check the weather guide above for temperature ranges. Generally carry layers, comfortable walking shoes, and sunscreen.` },
];

export function getBestTimeData(slug) {
  const dataKey = slugToName[slug];
  if (!dataKey || !bestTimeToVisitData[dataKey]) return null;
  const data = bestTimeToVisitData[dataKey];
  const displayName = slugDisplayNames[slug] || dataKey;
  return {
    slug,
    destination: displayName,
    ...data,
    faqs: defaultFaqs(displayName),
  };
}

export function getAllBestTimeSlugs() {
  return targetSlugs.filter(slug => slugToName[slug] && bestTimeToVisitData[slugToName[slug]]);
}

export function getRelatedBestTimeDestinations(slug) {
  const allSlugs = getAllBestTimeSlugs();
  const idx = allSlugs.indexOf(slug);
  const related = allSlugs.filter((s, i) => s !== slug && Math.abs(i - idx) <= 3).slice(0, 4);
  return related.map(s => getBestTimeData(s)).filter(Boolean);
}