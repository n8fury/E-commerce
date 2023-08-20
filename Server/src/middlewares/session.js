const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const isLoggedin = async (req, res, next) => {
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
module.exports = isLoggedin;

// created this middleware which checks if the user is loggedin or not
// will have to work in this feature
//used in app.js
