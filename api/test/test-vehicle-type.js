const { knex, Model } = require("../db.js");

/*
knex
	.select()
	.table('VehicleType')
	.then(result => console.log(result))
	.then(() => knex.destroy());

/*
knex('VehicleType')
	.insert({id: 4, type: 'Toyota Sienna'})
	.then(result => console.log(result))
	.then(() => knex.destroy());


knex('VehicleType')
	.where('id', 4)
	.del()
	.then(result => console.log(result))
	.then(() => knex.destroy());


knex
	.select('Vehicle.color', 'type', 'Vehicle.licensePlate')
	.from('VehicleType')
	.innerJoin('Vehicle', 'VehicleType.id', 'Vehicle.vehicleTypeId')
	.then(result => console.log(result))
	.then(() => knex.destroy());
*/
