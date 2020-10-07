//give access to knex and Model
const { knex, Model } = require("../api/db.js");
import { User } from './User.js';
import { Ride } from './Ride.js';
import { Vehicle } from './Vehicle.js';
import { State } from './State.js';


class Driver extends Model {
	static get tableName() {
		return "driver";
	}

	static get relationMappings() {
		return {
			user: {
				relation: Model.BelongsToOneRelation,
				modelClass: User,
				join: {
					from: 'driver.id',
					to: 'user.id'
				}
			},
			ride: {
				relation: Model.ManyToManyRelation,
				modelClass: Ride,
				join: {
					from: 'driver.id',
					through: {
						from: 'drivers.driverId',
						to: 'drivers.rideId'
					},
					to: 'ride.id'
				}
			},
			vehicle: {
				relation: Model.ManyToManyRelation,
				modelClass: Vehicle,
				join: {
					from: 'driver.id',
					through: {
						from: 'authorization.driverId',
						to: 'authorization.vehicleId'
					},
					to: 'vehicle.id'
				}
			},
			state:
			{
				relation: Model.BelongsToOneRelation,
				ModelClass: Location,
				join:
				{
					from: 'driver.licenseState',
					to: 'state.abbreviation'
				}
			}
		};
	}
}

export { Driver };
