//give access to knex and Model
const { knex, Model } = require("../db");

class VehicleType extends Model {
	static get tableName() {
		return 'vehicletype';
	}
	static get relationMappings() {
		return {
			vehicle: {
				relation: Model.HasManyRelation,
				modelClass: Vehicle,
				join: {
					from: 'vehicletype.id',
					to: 'vehicle.vehicleTypeId'
				}
			}
		};
	}
}

module.exports = VehicleType;
