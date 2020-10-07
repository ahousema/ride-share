//give access to knex and Model
const { knex, Model } = require("/Documents/githubRepo/ride-share/api/db.js");
import { Driver } from './Diver.js';
import { Ride } from './Ride.js';
import { State } from './State.js';
import { VehicleType } from './Vehicle_Type.js';

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
			state: {
				relation: Model.BelongsToOneRelation,
				modelClass: Location,
				join: {
					from: 'vehicle.licenseState',
					to: 'state.abbreviation'
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

export { Vehicle };
