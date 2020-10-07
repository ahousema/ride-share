//give access to knex and Model
const { knex, Model } = require("/Documents/githubRepo/ride-share/api/db.js");
import { Driver ) from './Driver.js';
import { Vehicle } from './Vehicle.js';
import { Location } from './Location.js';

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

export { State };
