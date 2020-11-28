//give access to knex and Model
const { knex, Model } = require("../db");

class VehicleType extends Model {
	static get tableName() {
		return 'VehicleType';
	}
	static get relationMappings() {
		return {
			vehicle: {
				relation: Model.HasManyRelation,
				modelClass: require("./Vehicle"),
				join: {
					from: 'vehicletype.id',
					to: 'vehicle.vehicleTypeId'
				},
			},
		};
	}
}

module.exports = VehicleType;
