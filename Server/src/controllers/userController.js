const users = require('../models/userModel');

const getUsers = (req, res) => {
	console.log(req.body.id);
	res.status(200).send({
		message: 'profile Route',
		users,
	});
};

module.exports = { getUsers };
