//give access to knex and Model
const { knex, Model } = require("../db");

class Vehicle extends Model {
	static get tableName() {
		return 'Vehicle';
	}
	static get relationMappings() {
		return {
			driver: {
				relation: Model.ManyToManyRelation,
				modelClass: require("./Driver"),
				join: {
					from: 'vehicle.id',
					through: {
						from: 'authorization.vehicleId',
						to: 'authorization.driverId'
					},
					to: 'driver.id'
				},
			},
			ride: {
				relation: Model.HasManyRelation,
				modelClass: require("./Ride"),
				join: {
					from: 'vehicle.id',
					to: 'ride.vehicleId'
				},
			},
			state: {
				relation: Model.BelongsToOneRelation,
				modelClass: require("./Location"),
				join: {
					from: 'vehicle.licenseState',
					to: 'state.abbreviation'
				},
			},
			vehicleType: {
				relation: Model.BelongsToOneRelation,
				modelClass: require("./VehicleType"),
				join: {
					from: 'vehicle.vehicleTypeId',
					to: 'vehicleType.id'
				},
			},
		};
	}
}

module.exports = Vehicle;
