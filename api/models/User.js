//give access to knex and Model
const { knex, Model } = require("../db");

class User extends Model {
  static get tableName() {
    return "User";
  }
  static get relationMappings() {
    return {
      ride: {
        relation: Model.ManyToManyRelation,
        modelClass: require("./Ride"),
        join: {
          from: "user.id",
          through: {
            from: "passenger.passengerId",
            to: "passenger.rideId",
          },
          to: "ride.id",
        },
      },
      driver: {
        relation: Model.HasManyRelation,
        modelClass: require("./Driver"),
        join: {
          from: "user.id",
          to: "driver.userId",
        },
      },
    };
  }
}

module.exports = User;
