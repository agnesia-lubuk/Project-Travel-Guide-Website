/*jshint esversion: 6 */

// list destinasi :
const destinasi = [
	{
		id: 1,
		negara: 'Serbia',
		thumbnail: '/images/belgrade.jpg',
		judul: 'Belgrade',
		highlight: 'Exuberant Nightlife by the Danube',
		deskripsiPendek: `Outspoken, adventurous, proud and audacious: Belgrade ('White City') is by no means a 'pretty' capital, but its gritty exuberance makes it one of Europe's most happening cities.While it hurtles towards a brighter future, its chaotic past unfolds before your eyes: socialist blocks are squeezed between art nouveau masterpieces, and remnants of the Habsburg legacy contrast with Ottoman relics and socialist modernist monoliths. This is where the Sava and Danube Rivers kiss, an old - world culture that at once evokes time - capsuled communist - era Yugoslavia and new - world, EU - contending cradle of cool.`,
		deskripsiFull: `Outspoken, adventurous, proud and audacious: Belgrade ('White City') is by no means a 'pretty' capital, but its gritty exuberance makes it one of Europe's most happening cities.While it hurtles towards a brighter future, its chaotic past unfolds before your eyes: socialist blocks are squeezed between art nouveau masterpieces, and remnants of the Habsburg legacy contrast with Ottoman relics and socialist modernist monoliths. This is where the Sava and Danube Rivers kiss, an old - world culture that at once evokes time - capsuled communist - era Yugoslavia and new - world, EU - contending cradle of cool.</br> </br>
    Grandiose coffee houses and smoky dives pepper Knez Mihailova, a lively pedestrian boulevard flanked by historical buildings all the way to the ancient Belgrade Fortress.The riverside Savamala quarter has gone from ruin to resurrection, and is the city 's creative headquarters (for now). Deeper in Belgrade 's bowels are museums guarding the cultural, religious and military heritage of the country.`,
		biaya: 10000000
	},
	{
		id: 2,
		negara: 'Bosnia',
		thumbnail: '/images/bosnia.jpg',
		judul: 'Sarajevo',
		highlight: 'Intriguing and Cosmopolitan',
		deskripsiPendek: `Sarajevo, capital of Bosnia and Herzegovina, is a compact city on the Miljacka River.Ringed by mountains, Sarajevo is a singular city with an enticing East-meets-West vibe all of its own. It was once renowned as a religious melting pot, earning it the epithet 'the Jerusalem of Europe'. Within a few blocks you can still find large Catholic and Orthodox cathedrals, Ashkenazi and Sephardic synagogues, and numerous mosques. However, the Jewish population was decimated during WWII and Sarajevo is now a divided city, with most of the Orthodox Christians living in Istočno Sarajevo (East Sarajevo) on the Republika Srpska side.`,
		deskripsiFull: `Sarajevo, capital of Bosnia and Herzegovina, is a compact city on the Miljacka River, surrounded by the Dinaric Alps. Ringed by mountains, Sarajevo is a singular city with an enticing East-meets-West vibe all of its own. It was once renowned as a religious melting pot, earning it the epithet 'the Jerusalem of Europe'. Within a few blocks you can still find large Catholic and Orthodox cathedrals, Ashkenazi and Sephardic synagogues, and numerous mosques. However, the Jewish population was decimated during WWII and Sarajevo is now a divided city, with most of the Orthodox Christians living in Istočno Sarajevo (East Sarajevo) on the Republika Srpska side.</br> </br>
    During the 20th century, two violent events thrust Sarajevo into the world's consciousness: the assassination which sparked WWI, and the brutal almost-four-year siege of the city in the 1990s. The scars of the longest siege in modern European history are still painfully visible, yet Sarajevo is once again a wonderful place to visit – for its intriguing architectural medley, vibrant street life and irrepressible spirit.`,
		biaya: 13000000
	},
	{
		id: 3,
		negara: 'Serbia',
		thumbnail: '/images/novisad.jpeg',
		judul: 'Novi Sad',
		highlight: 'Elegant and easygoing',
		deskripsiPendek: `Novi Sad is a chipper town with all the spoils and none of the stress of the big smoke. Locals sprawl in pretty parks and outdoor cafes, and laneway bars pack out nightly. The looming Petrovaradin Fortress keeps a stern eye on proceedings, loosening its tie each July to host Serbia's largest music festival. You can walk to all of Novi Sad's attractions from the happening pedestrian thoroughfare, Zmaj Jovina, which stretches from the main square (Trg Slobode) to Dunavska.`,
		deskripsiFull: `Novi Sad is a chipper town with all the spoils and none of the stress of the big smoke. Locals sprawl in pretty parks and outdoor cafes, and laneway bars pack out nightly. The looming Petrovaradin Fortress keeps a stern eye on proceedings, loosening its tie each July to host Serbia's largest music festival. You can walk to all of Novi Sad's attractions from the happening pedestrian thoroughfare, Zmaj Jovina, which stretches from the main square (Trg Slobode) to Dunavska.</br> </br>
    Novi Sad isn't nicknamed the 'Athens of Serbia' for nothing: its history as a vibrant, creative city continues today in its established galleries, alternative music scene and a vibe that's generally more liberal than that of other Serbian cities. Novi Sad is 2019’s European Youth Capital, and in 2021, it will become the first non-EU city to spend a year with the prestigious judul of European Capital of Culture.`,
		biaya: 12000000
	},
	{
		id: 4,
		negara: 'Macedonia',
		thumbnail: '/images/ohrid.jpg',
		judul: 'Ohrid',
		highlight: 'Lakeside spirituality',
		deskripsiPendek: `Sublime Ohrid is North Macedonia's most seductive destination. It sits on the edge of serene Lake Ohrid, with an atmospheric old quarter that cascades down steep streets, dotted with beautiful churches and topped by the bones of a medieval castle. Traditional restaurants and lakeside cafes liven up the cobblestone streets, which in high summer can be very lively indeed. Outside of July and August, the tourist circus subsides and the town becomes more lived in.`,
		deskripsiFull: `Sublime Ohrid is North Macedonia's most seductive destination. It sits on the edge of serene Lake Ohrid, with an atmospheric old quarter that cascades down steep streets, dotted with beautiful churches and topped by the bones of a medieval castle. Traditional restaurants and lakeside cafes liven up the cobblestone streets, which in high summer can be very lively indeed. Outside of July and August, the tourist circus subsides and the town becomes more lived in.</br> </br>
    Ohrid is small enough to hop from historic monuments into a deck chair and dip your toes in the water – a lovely little town beach and boardwalk make the most of the town's natural charms. A holiday atmosphere prevails all summer, when it's a good idea to book accommodation in advance. Ohrid's busiest time is from mid-July to mid-August, during the popular summer festival.`,
		biaya: 15000000
	},
	{
		id: 5,
		negara: 'Turkey',
		thumbnail: '/images/istambul.jpg',
		judul: 'Istanbul',
		highlight: 'This magical meeting place of East and West has more top-drawer attractions than it has minarets',
		deskripsiPendek: `Istanbul's strategic location has attracted many marauding armies over the centuries. The Greeks, Romans and Venetians took turns ruling before the Ottomans stormed into town and decided to stay – physical reminders of their various tenures are found across the city. The fact that the city straddles two continents wasn't its only drawcard – it was the final stage on the legendary Silk Road linking Asia with Europe, and many merchants who came here liked it so much that they, too, decided to stay. In so doing, they gave the city a cultural diversity that it retains to this day.`,
		deskripsiFull: `Istanbul's strategic location has attracted many marauding armies over the centuries. The Greeks, Romans and Venetians took turns ruling before the Ottomans stormed into town and decided to stay – physical reminders of their various tenures are found across the city. The fact that the city straddles two continents wasn't its only drawcard – it was the final stage on the legendary Silk Road linking Asia with Europe, and many merchants who came here liked it so much that they, too, decided to stay. In so doing, they gave the city a cultural diversity that it retains to this day.</br> </br> 
    The conquering armies of ancient times tended to ransack the city rather than endow it with artistic treasures, but all that changed with the Byzantines, who adorned their churches and palaces with mosaics and frescoes. Miraculously, many of these remain. Their successors, the Ottomans, were quick to launch an ambitious building program and the magnificently decorated imperial mosques that resulted are architectural triumphs that together form one of the world's great skylines. In recent years, local banks and business dynasties have reprised the Ottomans' grand ambitions and endowed an impressive array of galleries, museums and festivals for all to enjoy.`,
		biaya: 20000000
	},
	{
		id: 6,
		negara: 'Croatia',
		thumbnail: '/images/dubrovnik.jpg',
		judul: 'Dubrovnik',
		highlight: 'Is a glittering jewel in the Adriatic',
		deskripsiPendek: `  Regardless of whether you are visiting Dubrovnik for the first time or the hundredth, the sense of awe never fails to descend when you set eyes on the beauty of the old town. Indeed it’s hard to imagine anyone becoming jaded by the city’s limestone streets, baroque buildings and the endless shimmer of the Adriatic, or failing to be inspired by a walk along the ancient city walls that protected the capital of a sophisticated republic for centuries. Its well-preserved buildings range from baroque St. Blaise Church to Renaissance Sponza Palace and Gothic Rector’s Palace, now a history museum. Paved with limestone, the pedestrianized Stradun (or Placa) is lined with shops and restaurants.`,
		deskripsiFull: `Regardless of whether you are visiting Dubrovnik for the first time or the hundredth, the sense of awe never fails to descend when you set eyes on the beauty of the old town. Indeed it’s hard to imagine anyone becoming jaded by the city’s limestone streets, baroque buildings and the endless shimmer of the Adriatic, or failing to be inspired by a walk along the ancient city walls that protected the capital of a sophisticated republic for centuries. Its well-preserved buildings range from baroque St. Blaise Church to Renaissance Sponza Palace and Gothic Rector’s Palace, now a history museum. Paved with limestone, the pedestrianized Stradun (or Placa) is lined with shops and restaurants.</br> </br>  
    Although the shelling of Dubrovnik in 1991 horrified the world, the city has bounced back with vigour to enchant visitors again. Marvel at the interplay of light on the old stone buildings; trace the peaks and troughs of Dubrovnik's past in museums replete with art and artefacts; take the cable car up to Mt Srđ; exhaust yourself climbing up and down narrow lanes – then plunge into the azure sea.`,
		biaya: 20000000
	}
];

if (document.readyState == 'loading') {
	document.addEventListener('DOMContentLoaded', ready);
} else {
	ready();
}

function ready() {
	dropdownList();
}

// to handle Total Price
const totalWishlist = document.getElementById('total');
const total = [];
document.addEventListener('click', (e) => {
	if (e.target.id === 'addWishlist') {
		let valueWishlist = e.target.value;
		// console.log(e.target.value);
		total.push({
			value: valueWishlist
		});
		const sum = total.reduce((total, currentValue) => {
			return total + parseInt(currentValue.value, 10);
		}, 0);
		totalWishlist.value = `Total Price: Rp. ` + sum;
		// console.log(sum);
	}
});

// to handle SearchBox
const searchBox = document.getElementById('search');
searchBox.addEventListener('keyup', (e) => {
	const searchValue = e.target.value;
	// console.log(searchValue);
	const filteringData = destinasi.filter((item) => {
		return item.judul.toLowerCase().includes(searchValue);
	});
	listDestinasi(filteringData);
});

//to handle dropdown list
const dropdownList = () => {
	let allNegara = document.querySelector('.dropdown');
	const negara = destinasi.map((item) => item.negara);
	const filteredNegara = negara.filter((item, index) => negara.indexOf(item) >= index);
	filteredNegara.map((negara) => {
		let negaraFirstCapital = negara.charAt(0).toUpperCase() + negara.substring(1);
		allNegara.innerHTML += `<option value=${negaraFirstCapital}>${negaraFirstCapital}</option>`;
	});
};

//on change
const dropdownNegara = document.querySelector('.dropdown');
dropdownNegara.addEventListener('change', (e) => {
	const dropdownValue = e.target.value;
	// console.log(dropdownValue);
	const filteringData = destinasi.filter((item) => {
		return item.negara.includes(dropdownValue);
	});
	listDestinasi(filteringData);
});

//list destinasi
const listDestinasi = (dataDestinasi) => {
	const cardDeck = dataDestinasi.map(
		(item) => `
<!-- Card Deck -->
<div class="col mb-4">
  <div class="card"id=${item.id}>
    <img src=${item.thumbnail} class="card-img-top img-fluid" alt=${item.judul}>
    <div class="card-body">
        <h3 class="card-title">${item.judul}</h3>
        <h5>${item.highlight}</h5>
        <p class="card-text">${item.deskripsiPendek}</p>

    <!-- Card Footer -->
    <div class="card-footer">
      <p>Total Expenses : Rp. ${item.biaya}</p>

     <!-- Button trigger modal -->
      <button type="button" class="btn btn-dark" data-toggle="modal" data-target="#exampleModal${item.id}" id=${item.id}>See more</button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal${item.id}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" id=${item.id} role="document">
           <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"><button  type="button" id="addWishlist" value=${item.biaya} class="btn btn-dark">Add to Wishlist</button></h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
              <div class="card" id=${item.id} >
                 <img src=${item.thumbnail} class="card-img-top" alt=${item.judul}>
                 <div class="card-body">
                    <h3 class="card-title">${item.judul}</h3>
                    <h5>${item.highlight}</h5>
                    <p class="card-text">${item.deskripsiFull}</p>
                 </div>
              </div>
                 <div class="modal-footer justify-content-between">
                    <p>Total Expenses : Rp. ${item.biaya}</p>
                    <button type="button"  class="btn btn-secondary" data-dismiss="modal">Close</button>
                 </div>
             </div>
           </div>
          </div>
          </div>
      <button type="button" id="addWishlist" value=${item.biaya} class="btn btn-primary" >Add to Wishlist</button>
      </div>
    </div>
  </div>
</div>
    `
	);
	document.getElementById('list').innerHTML = cardDeck.join('');
};

const loadData = () => {
	listDestinasi(destinasi);
};

loadData();
