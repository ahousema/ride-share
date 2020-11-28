//give access to knex and Model
const { knex, Model } = require("../db");

class State extends Model {
	static get tableName() {
		return 'State';
	}
	static get relationMappings() {
		return {
			driver: {
				relation: Model.HasManyRelation,
				modelClass: require("./Driver"),
				join: {
					from: 'state.abbreviation',
					to: 'driver.licenseState'
				},
			},
			vehicle: {
				relation: Model.HasManyRelation,
				modelClass: require("./Vehicle"),
				join: {
					from: 'state.abbreviation',
					to: 'vehicle.licenseState'
				},
			},
			locat: {
				relation: Model.HasManyRelation,
				modelClass: require("./Location"),
				join: {
					from: 'state.abbreviation',
					to: 'locat.state'
				},
			},
		};
	}
}

module.exports = State;
