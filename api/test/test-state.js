//Give access to knex and Model
const { knex, Model } = require("../db.js");

/*
//add new entry
knex('State')
	.insert({abbreviation: 'KA', name: 'Kansas'})
	.then(result => console.log(result))
	.then(() => knex.destroy());

//delete entry
knex('State')
	.where('abbreviation', 'KA')
	.del()
	.then(result => console.log(result))
	.then(() => knex.destroy());
*/

//print table data
knex
	.select().table('State')
	.then(result => console.log(result))
	.then(() => knex.destroy());

//access related table data
knex
	.select('name', 'Vehicle.make', 'Vehicle.model')
	.from('State')
	.innerJoin('Vehicle', 'State.abbreviation', 'Vehicle.licenseState')
	.then(result => console.log(result))
	.then(() => knex.destroy());
