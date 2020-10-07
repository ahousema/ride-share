//give access to knex and Model
const { knex, Model } = require("../db.js");

//User.query()
//	.withGraphFetched('drivers')
//	.where('id', 1)
//	.first()
//	.then(user => console.log(user))
//	.catch(error => console.log(error.message));

/*knex('User')
    .insert({id: 5, firstName: 'Bo', lastName: 'Peep', email: 'shepherdgirl123@yahoo.com', password: 'w00dysg1rl', phone: '3216540987', isAdmin: false})
	.then(result => console.log(result))
	.then(() => knex.destroy());

knex
	.select().table('User')
	.then(result => console.log(result))
	.then(() => knex.destroy());

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

