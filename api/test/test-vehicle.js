//Give access to knex and Model
const { knex, Model } = require("../db.js");

/*
//add new entry
knex('Vehicle')
	.insert({id: 10, make: 'Honda', model: 'Accord', color: 'Pur', vehicleTypeId: 1, capacity: 5, mpg: 35, licenseState})
	.then(resutl => console.log(result))
	.then(() => knex.destroy());

//delete entry
knex('Vehicle')
	.where('id', 10)
	.del()
	.then(result => consol.log(result)
	.then(() => knex.destroy());

*/

//print table data
knex
	.select().table('Vehicle')
	.then(result => console.log(result))
	.then(() => knex.destroy());

//access related table data
knex
	.select('make', 'model', 'Driver.licenseNumber')
	.from('Vehicle')
	.innerJoin('Driver', 'Vehicle.id', 'Driver.id')
	.then(result => console.log(result))
	.then(() => knex.destroy());
