const { knex, Model } = require("../db.js");

/*
knex
	.select('address', 'city', 'State.name') //Not sure how to change State.name to display as anything other than 'name'
	.from('Location')
	.innerJoin('State', 'Location.state', 'State.abbreviation')
	.then(result => console.log(result))
	.then(() => knex.destroy());
*/

/*
knex
	.select('city', 'state', 'Ride.date', 'Ride.time')
	.from('Location')
	.innerJoin('Ride', 'Location.id', 'toLocationId')
	.then(result => console.log(result))
	.then(() => knex.destroy());

*/
knex
	.select().table('Location')
	.then(result => console.log(result))
	.then(() => knex.destroy());

/*
knex('Location')
	.insert({id: 4, name: 'home', address: '700 Perth Dr', city: 'Monroe', state: 'NC', zipCode: '28110'})
	.then(() => knex.destroy());


knex('Location')
	.where('name', 'home')
	.del()
	.then(result => console.log(result))
	.then(() => knex.destroy());
*/

