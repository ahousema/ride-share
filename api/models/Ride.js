//give access to knex and Model
const { knex, Model } = require("../db");

class Ride extends Model
{
	static get tableName()
	{
		return "ride";
	}

	static get relationMappings()
	{
		return
		{
			vehicle:
			{
				relation: Model.BelongsToOneRelation,
				modelClass: Vehicle,
				join:
				{
					from: 'ride.vehicleid',
					to: 'vehicle.id'
				}
			},
			driver:
			{
				relation: Model.ManyToManyRelation,
				modelClass: Driver,
				join:
				{
					from: 'ride.id',
					through:
					{
						from: 'drivers.rideId',
						to: 'drivers.driverId'
					},
					to: 'driver.id'
				}
			},
			user:
			{
				relation: Model.ManyToManyRelation,
				modelClass: User,
				join:
				{
					from: 'ride.id',
					through:
					{
						from: 'passenger.rideId',
						to: 'passenger.passengerId'
					},
					to: 'user.id'
				}
			},
			locat:
			{
				relation: Model.BelongsToOneRelation,
				modelClass: Location,
				join:
				{
					from: 'ride.fromLocationId',
					to: 'location.id'
				}, //if the second join thing doesn't work, i'm not sure how to fix this
				join:
				{
					from: 'ride.toLocationId',
					to: 'location.id'
				}
			}
		};
	}
}

module.exports = Ride;
