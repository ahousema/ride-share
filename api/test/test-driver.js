//Give access to knex and Model
const { knex, Model } = require("../db.js");

/*
//add new entry
knex('Driver')
	.insert({id: 4, userId: 3, licenseNumber: '1233456754', licenseState: 'IN'})
	.then(result => console.log(result))
	.then(() => knex.destroy());
*/
//print table data
knex
	.select().table('Driver')
	.then(result => console.log(result))
	.then(() => knex.destroy());
/*
//delete entry
knex('Driver')
	.where('id', 4)
	.del()
	.then(result => console.log(result))
	.then(() => knex.destroy());

//access related table data
knex
	.select('licenseNumber', 'licenseState', 'User.firstName')
	.from('Driver')
	.innerJoin('User', 'Driver.userId', 'User.id')
	.then(result => console.log(result))
	.then(() => knex.destroy());
*/

