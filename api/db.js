const knex = require("knex") (
	{
		client: "pg",
		connection: {
			host: ""/*I'm not sure what exactly to put here in this case*/,
			database: ""/*Again, not entirely sure what goes here for this particular file*/,
		},
	});

const objection = require("objection");
const Model = objection.Model;
Model.knex(knex);
