const User = require('../models/userModel');

const getUsers = async (req, res, next) => {
	try {
		const search = req.query.search || '';
		const page = Number(req.query.page) || 1;
		const limit = Number(req.query.limit) || 5;
		const searchRegExp = new RegExp('.*' + search + '.*', 'i');
		const filter = {
			isAdmin: {
				$ne: true,
			},
		};
		const users = await User.find(filter);
		res.status(200).send({
			message: 'profile Route',
			users,
		});
	} catch (error) {
		next(error);
	}
};

module.exports = { getUsers };
