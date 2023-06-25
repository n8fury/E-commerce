const User = require('../models/userModel');
const createError = require('http-errors');

const getUsers = async (req, res, next) => {
	try {
		const search = req.query.search || '';
		const page = Number(req.query.page) || 1;
		const limit = Number(req.query.limit) || 2;
		const searchRegExp = new RegExp('.*' + search + '.*', 'i'); // search regex
		const filter = {
			isAdmin: {
				$ne: true,
			},
			$or: [
				{ name: { $regex: searchRegExp } },
				{ phone: { $regex: searchRegExp } },
				{ email: { $regex: searchRegExp } },
			],
		};
		const option = { password: 0 };
		const users = await User.find(filter, option)
			.limit(limit) // limiting user per page
			.skip((page - 1) * limit); // skipping user as page increase
		if (!users) throw createError(404, 'user not found'); //throwing error for not finding user

		const count = await User.find(filter).countDocuments(); // counting search result for pagination

		res.status(200).send({
			message: 'User Route',
			users,
			pagination: {
				totalPage: Math.ceil(count / limit),
				currentPage: page,
				previousPage: page - 1 > 0 ? page - 1 : null,
				nextPage: page + 1 <= Math.ceil(count / limit) ? page + 1 : null,
			},
		});
	} catch (error) {
		next(error);
	}
};

module.exports = { getUsers };
