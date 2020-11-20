//give access to knex and Model
const { knex, Model } = require("../db");

class State extends Model {
	static get tableName() {
		return 'state';
	}
	static get relationMappings() {
		return {
			driver: {
				relation: Model.HasManyRelation,
				modelClass: Driver,
				join: {
					from: 'state.abbreviation',
					to: 'driver.licenseState'
				}
			},
			vehicle: {
				relation: Model.HasManyRelation,
				modelClass: Vehicle,
				join: {
					from: 'state.abbreviation',
					to: 'vehicle.licenseState'
				}
			},
			locat: {
				relation: Model.HasManyRelation,
				modelClass: Location,
				join: {
					from: 'state.abbreviation',
					to: 'locat.state'
				}
			}
		};
	}
}

module.exports = State;
