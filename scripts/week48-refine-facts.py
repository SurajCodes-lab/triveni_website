from pathlib import Path
root=Path(__file__).resolve().parents[1]
p=root/'src/components/seo/FamilyFacts.jsx'
s=p.read_text(encoding='utf-8')
s=s.replace("['temperature','Temperature']", "['temp','Temperature']")
s=s.replace('starting at ${text(d.startingPrice)}.', 'starting at ₹${Number(d.startingPrice).toLocaleString(\'en-IN\')}/person.')
s=s.replace('covers ${d.totalDistance} and takes ${d.drivingTime} via ${d.highway}.', "covers ${d.totalDistance} km and takes ${d.drivingTime}${d.highway ? ` via ${d.highway}` : ''}.")
s=s.replace("[['from','From'],['to','To'],['distance','Distance'],['roadQuality','Road quality']]", "[['segment','Road stage'],['distance','Distance (km)'],['time','Drive time'],['roadQuality','Road quality']]")
s=s.replace('Published hire rates start at ₹${d.perKmRate}/km.', 'The published outstation rate is ${text(d.perKmRate?.outstation)}.')
s=s.replace("['Rate',`₹${d.perKmRate}/km`]", "['Outstation rate',d.perKmRate?.outstation]")
s=s.replace("columns:columns([['title','Package'],['price','Published price'],['desc','Details']]),rows:d.packages || []", "columns:columns([['title','Package'],['price','Published price']]),rows:Object.entries(d.packages || {}).map(([title,price])=>({title:title.replace(/([A-Z])/g,' $1'),price}))")
s=s.replace('vehicle:f.vehicle || f.name','vehicle:f.type || f.vehicle || f.name').replace('use:f.use || f.idealFor','use:f.useCase || f.use || f.idealFor')
s=s.replace("['capacity','Capacity'],['use','Use']", "['capacity','Capacity'],['use','Use'],['price','Published rate']")
s=s.replace('use:f.useCase || f.use || f.idealFor}', 'use:f.useCase || f.use || f.idealFor,price:f.price}')
p.write_text(s,encoding='utf-8')
print('Aligned fact adapters with the actual dataset shapes.')
