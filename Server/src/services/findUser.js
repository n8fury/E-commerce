const User = require('../models/userModel');
const createError = require('http-errors');
const { mongoose } = require('mongoose');

const findUser = async (id) => {
	try {
		const option = { password: 0 };
		const user = await User.findById(id, option);
		if (!user) throw createError(404, 'no user found with this id');
		return user;
	} catch (error) {
		if (error instanceof mongoose.Error) {
			throw createError(400, 'invalid user id');
		}
		throw error;
	}
};

module.exports = { findUser };
