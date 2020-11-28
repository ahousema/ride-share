//give access to knex and Model
const { knex, Model } = require("../db");

class Driver extends Model {
	static get tableName() {
		return "Driver";
	}

	static get relationMappings() {
		return {
			user: {
				relation: Model.BelongsToOneRelation,
				modelClass: require("./User"),
				join: {
					from: 'driver.id',
					to: 'user.id'
				},
			},
			ride: {
				relation: Model.ManyToManyRelation,
				modelClass: require("./Ride"),
				join: {
					from: 'driver.id',
					through: {
						from: 'drivers.driverId',
						to: 'drivers.rideId'
					},
					to: 'ride.id'
				},
			},
			vehicle: {
				relation: Model.ManyToManyRelation,
				modelClass: require("./Vehicle"),
				join: {
					from: 'driver.id',
					through: {
						from: 'authorization.driverId',
						to: 'authorization.vehicleId'
					},
					to: 'vehicle.id'
				},
			},
			state:
			{
				relation: Model.BelongsToOneRelation,
				ModelClass: require("./Location"),
				join:
				{
					from: 'driver.licenseState',
					to: 'state.abbreviation'
				},
			},
		};
	}
}

module.exports = Driver;
