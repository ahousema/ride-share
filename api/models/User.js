//give access to knex and Model
const { knex, Model } = require("/Documents/githubRepo/ride-share/api/db.js");
import { Ride } from './Ride.js';
import { Driver } from './Driver.js';

class User extends Model {
	static get tableName() {
		return 'user';
	}
	static get relationMappings() {
		return {
			ride: {
				relation: Model.ManyToManyRelation,
				modelClass: Ride,
				join: {
					from: 'user.id',
					through: {
						from: 'passenger.passengerId',
						to: 'passenger.rideId'
					},
					to: 'ride.id'
				}
			},
			driver:
			{
				relation: Model.HasManyRelation,
				modelClass: Driver,
				join:
				{
					from: 'user.id',
					to: 'driver.userId'
				}
			}
		};
	}
}

export { User };
