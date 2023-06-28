const User = require('../models/userModel');
const createError = require('http-errors');
const { mongoose } = require('mongoose');

const findById = async (id, option = {}) => {
	try {
		const data = await User.findById(id, option);
		if (!data) throw createError(404, 'no data found with this id');
		return data;
	} catch (error) {
		if (error instanceof mongoose.Error) {
			throw createError(400, 'invalid data id');
		}
		throw error;
	}
};

module.exports = { findById };
