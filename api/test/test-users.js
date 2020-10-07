//give access to knex and Model
const { knex, Model } = require("../db.js");

//User.query()
//	.withGraphFetched('drivers')
//	.where('id', 1)
//	.first()
//	.then(user => console.log(user))
//	.catch(error => console.log(error.message));

knex
	.select().table('User')
	.then(result => console.log(result))
	.then(() => knex.destroy());
