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

class Location extends Model {
	static get tableName() {
		return 'locat';
	}
	static get relationMappings() {
		return {
			
		}
	}
}
