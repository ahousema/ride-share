class Ride extends Model {
	static get tableName() {
		return 'ride';
	}
}

class State extends Model {
	static get tableName() {
		return 'state';
	}
}

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
