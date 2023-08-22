const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const isLoggedIn = async (req, res, next) => {
	try {
		const token = req.cookies.loginToken;
		if (!token) {
			throw createError(401, 'Access Token not found');
		}
		const decode = jwt.verify(token, jwtUserLoginKey);
		if (!decode) {
			throw createError(401, 'Invalid Access Token,Please Login');
		}
		req.body.userId = decode._id;
		next();
	} catch (error) {
		return next(error);
	}
};
const isLoggedOut = async (req, res, next) => {
	try {
		const token = req.cookies.token;
		if (token) {
			throw createError(400, 'User is logged in already');
		}
		next();
	} catch (error) {
		return next(error);
	}
};

module.exports = { isLoggedIn, isLoggedOut };

// created this middleware which checks if the user is loggedin or not
// will have to work in this feature
//used in app.js
