//give access to knex and Model
const { knex, Model } = require("/Documents/githubRepo/ride-share/api/db.js");

User.query()
	.withGraphFetched('drivers')
	.where('id', 1)
	.first()
	.then(user => console.log(user))
	.catch(error => console.log(error.message));

