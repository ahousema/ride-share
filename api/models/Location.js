//give access to knex and Model
const { knex, Model } = require("../db");

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

module.exports = Location;
