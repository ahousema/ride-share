//give access to knex and Model
const { knex, Model } = require("../db.js");
import { Vehicle } from './Vehicle.js';

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

export { VehicleType };
