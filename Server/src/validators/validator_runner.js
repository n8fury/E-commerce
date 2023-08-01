const { validationResult } = require('express-validator');
const { errorResponse } = require('../controllers/responseController');

const runValidation = async (req, res, next) => {
	try {
		const error = validationResult(req);
		if (!error.isEmpty()) {
			return errorResponse(res, {
				statusCode: 422,
				message: error.array()[0].msg,
			});
		}
		return next();
	} catch (error) {
		return next(error);
	}
};

module.exports = { runValidation };
