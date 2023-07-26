const data = require('../data');
const User = require('../models/userModel');

const seedUser = async (req, res, next) => {
	try {
		await User.deleteMany({}); //delete all existing data

		const users = await User.insertMany(data.users); // inserting dummy data
		return res.status(201).json({
			message: 'Users Seeded successfully',
			users,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = seedUser;


// for populating the database with dummy data