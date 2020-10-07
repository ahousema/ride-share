//give access to knex and Model
const { knex, Model } = require("../api/db.js");
import { Ride } from './Ride.js';
import { State } from './State.js';

class Location extends Model {
	static get tableName() {
		return 'locat';
	}
	static get relationMappings() {
		return {
			ride: {
				relation: Model.HasManyRelation,
				modelClass: Ride,
				join: {
					from: 'location.id',
					to: 'ride.fromLocationId'
				},
				join: {
					from: 'location.id',
					to: 'ride.toLocationid'
				}
			},
			state: {
				relation: Model.BelongsToOneRelation,
				modelClass: State,
				join: {
					from: 'location.state',
					to: 'state.abbreviation'
				}
			}
		};
	}
}

export { Location };
