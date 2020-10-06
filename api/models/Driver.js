//give access to knex and Model
const { knex, Model } = require("/Documents/githubRepo/ride-share/api/db.js");

class User extends Model {
	static get tableName() {
		return 'user';
	}
}

class Ride extends Model {
	static get tableName() {
		return 'ride';
	}
}

class Vehicle extends Model {
	static get tableName() {
		return 'vehicle';
	}
}

class State extends Model
{
	static get tableName()
	{
		return 'state';
	}
}

class Driver extends Model {
	static get tableName() {
		return "driver";
	}

	static get relationMappings() {
		return {
			user: {
				relation: Model.BelongsToOneRelation,
				modelClass: User,
				join: {
					from: 'driver.id',
					to: 'user.id'
				}
			},
			ride: {
				relation: Model.ManyToManyRelation,
				modelClass: Ride,
				join: {
					from: 'driver.id',
					through: {
						from: 'drivers.driverId',
						to: 'drivers.rideId'
					},
					to: 'ride.id'
				}
			},
			vehicle: {
				relation: Model.ManyToManyRelation,
				modelClass: Vehicle,
				join: {
					from: 'driver.id',
					through: {
						from: 'authorization.driverId',
						to: 'authorization.vehicleId'
					},
					to: 'vehicle.id'
				}
			},
			state:
			{
				relation: Model.BelongsToOneRelation,
				ModelClass: Location,
				join:
				{
					from: 'driver.licenseState',
					to: 'state.abbreviation'
				}
			}
		};
	}
}
