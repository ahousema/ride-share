class Driver extends Model {
	static get tableName() {
		return 'driver';
	}
}

class Ride extends Model {
	static get tableName() {
		return 'ride';
	}
}

class Location extends Model {
	static get tableName() {
		return 'locat';
	}
}

class VehicleType extends Model {
	static get tableName() {
		return 'vehicleType'
	}
}

class Vehicle extends Model {
	static get tableName() {
		return 'vehicle';
	}
	static get relationMappings() {
		return {
			driver: {
				relation: Model.ManyToManyRelation,
				modelClass: Driver,
				join: {
					from: 'vehicle.id',
					through: {
						from: 'authorization.vehicleId',
						to: 'authorization.driverId'
					},
					to: 'driver.id'
				}
			},
			ride: {
				relation: Model.HasManyRelation,
				modelClass: Ride,
				join: {
					from: 'vehicle.id',
					to: 'ride.vehicleId'
				}
			}
			locat: {
				relation: Model.ManyToManyRelation,
				modelClass: Location,
				join: {
					from: 'vehicle.licenseState',
					through: {
						from: 'state.abbreviation',
						to: 'state.name'
					},
					to: 'locat.state'
				}
			},
			vehicleType: {
				relation: Model.BelongsToOneRelation,
				modelClass: VehicleType,
				join: {
					from: 'vehicle.vehicleTypeId',
					to: 'vehicleType.id'
				}
			}
		};
	}
}
