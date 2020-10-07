//Give access to knex and Model
const { knex, Model } = require("../db.js");
import { Driver } from '../models/Driver.js';

Driver.query()
	.select('id', 'licenseNumber')
	.where('id', 1)
	.whithGraphFetched('vehicle')
	.first()
	.then(driver => {
		console.log('License Number', driver.licenseNumber);
		driver.vehicle.forEach(vehic => console.log('Vehicle', vehic.make))
	})
	.catch(error => console.log(error.message));
