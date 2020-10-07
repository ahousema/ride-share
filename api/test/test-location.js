const { knex, Model } = require("../db.js");

knex
	.select('address', 'city', 'State.name') //Not sure how to change State.name to display as anything other than 'name'
	.from('Location')
	.innerJoin('State', 'Location.state', 'State.abbreviation')
	.then(result => console.log(result))
	.then(() => knex.destroy());
