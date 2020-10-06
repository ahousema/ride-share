class Driver extends Model {
	static get tableName() {
		return 'driver';
	}
}

class Vehicle extends Model {
	static get tableName() {
		return 'vehicle';
	}
}

class Location extends Model {
	static get tableName() {
		return 'locat';
	}
}

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
