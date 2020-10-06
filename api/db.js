//connect knex to the database
const knex = require("knex") (
	{
		client: "pg",
		connection: {
			host: "faraday.cse.taylor.edu",
			user: "alec_houseman",
			password: "ceposero",
			database: "alec_houseman",
		},
	});

const objection = require("objection");
const Model = objection.Model;
Model.knex(knex);

module.exports = { knex, Model };
