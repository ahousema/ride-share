//give access to knex and Model
const { knex, Model } = require("/Documents/githubRepo/ride-share/api/db.js");

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
