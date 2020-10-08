//Give access to knex and Model
const { knex, Model } = require("../db.js");

//print table data
knex
	.select().table('Ride')
	.then(result => console.log(result))
	.then(() => knex.destroy());
/*
//add new entry
knex('Ride')
	.insert({})
	.then(result => console.log(result)
	.then(() => knex.destroy());

//delete entry
knex('Ride')
	.where()
	.then(result => console.log(result))
	.then(() => knex.destroy())
*/

//access related table data
knex
	.select('time', 'User.firstName')
	.from('Ride')
	.innerJoin('User', 'Ride.id', 'User.id')
	.then(result => console.log(result))
	.then(() => knex.destroy());
