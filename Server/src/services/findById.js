const createError = require('http-errors');
const { mongoose } = require('mongoose');

const findById = async (Model, id, option = {}) => {
	try {
		const data = await Model.findById(id, option);
		if (!data)
			throw createError(404, `${Model.modelName} no data found with this id`);
		return data;
	} catch (error) {
		if (error instanceof mongoose.Error) {
			throw createError(400, 'invalid data id');
		}
		throw error;
	}
};

module.exports = { findById };
