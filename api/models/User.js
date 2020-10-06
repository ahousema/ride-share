class Driver extends Model {
	static get tableName(){
		return 'driver';
	}
}

class Ride extends Model {
	static get tableName() {
		return 'ride';
	}
}

class User extends Model {
	static get tableName() {
		return 'user';
	}
	static get relationMappings() {
		return {
			ride: {
				relation: Model.ManyToManyRelation,
				modelClass: Ride,
				join: {
					from: 'user.id',
					through: {
						from: 'passenger.passengerId',
						to: 'passenger.rideId'
					},
					to: 'ride.id'
				}
			},
			driver:
			{
				relation: Model.HasManyRelation,
				modelClass: Driver,
				join:
				{
					from: 'user.id',
					to: 'driver.userId'
				}
			}
		};
	}
}
