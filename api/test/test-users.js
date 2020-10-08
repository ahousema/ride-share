//give access to knex and Model
const { knex, Model } = require("../db.js");

/*
//add new entry
knex('User')
    .insert({id: 5, firstName: 'Bo', lastName: 'Peep', email: 'shepherdgirl123@yahoo.com', password: 'w00dysg1rl', phone: '3216540987', isAdmin: false})
	.then(result => console.log(result))
	.then(() => knex.destroy());

//print table data
knex
	.select().table('User')
	.then(result => console.log(result))
	.then(() => knex.destroy());

//delete entry
knex('User')
	.where('id', 5)
	.del()
	.then(result => console.log(result))
	.then(() => knex.destroy());
*/
knex
    .select().table('User')
    .then(result => console.log(result))
    .then(() => knex.destroy());
/*

knex
	.select('firstName', 'lastName')
	.from('User')
	.innerJoin('Driver', 'User.id', 'Driver.userId')
	.then(result => console.log(result))
	.then(() => knex.destroy());
/*

knex
    .select('firstName', 'lastName', 'Ride.date', 'Ride.time', 'Ride.fromLocationId', 'Ride.toLocationId')
    .from('User')
    .innerJoin('Ride', 'User.id', 'Ride.id')
    .then(result => console.log(result))
    .then(() => knex.destroy());
*/

