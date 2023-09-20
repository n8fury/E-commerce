const User = require('../models/userModel');
const createError = require('http-errors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtUserLoginKey, jwtUserLoginRefreshKey } = require('../secret');
const { createJsonWebToken } = require('../helper/JsonWebToken');
const { successResponse } = require('./responseController');

const userLoginHandler = async (req, res, next) => {
	try {
		const { email, password } = req.body; // email and pass should be from req.body
		const user = await User.findOne({ email });
		//userExist
		if (!user) {
			throw createError(
				404,
				'Could not find user associated with this email.Please register'
			);
		}
		//password hash matching
		const isPasswordMatch = await bcrypt.compare(password, user.password);
		if (!isPasswordMatch) {
			throw createError(401, `Email or password didn't match`);
		}
		//isBanned
		if (user.isBanned) {
			throw createError(403, 'This id is banned. Contact Support');
		}
		//create_jwt
		const loginToken = createJsonWebToken({ user }, jwtUserLoginKey, '15m');
		//cookie
		res.cookie('loginToken', loginToken, {
			maxAge: 15 * 60 * 1000, //15 minutes
			httpOnly: true,
			secure: true,
			sameSite: 'none',
		});
		const refreshToken = createJsonWebToken(
			{ user },
			jwtUserLoginRefreshKey,
			'7d'
		);
		//cookie
		res.cookie('refreshToken', refreshToken, {
			maxAge: 7 * 24 * 60 * 60 * 1000, //7 day converted to milisec
			httpOnly: true,
			secure: true,
			sameSite: 'none',
		});

		const secureUser = user.toObject();
		delete secureUser.password;
		return successResponse(res, {
			statusCode: 200,
			message: 'User loggedIn Successful',
			payload: {
				secureUser,
			},
		});
	} catch (error) {
		next(error);
	}
	/*EXPLANATION	 we have to check the email and the pass is present on the db or not (userExist)
        email and pass should be from req.body
        for pass we have to match the hash
        also we have to check if the user is banned or not
        we'll also use access token and store the token inside cookie
        */
};

const userLogoutHandler = async (req, res, next) => {
	try {
		//clear cookie
		res.clearCookie('loginToken');
		res.clearCookie('refreshToken');
		return successResponse(res, {
			statusCode: 200,
			message: 'User loggedOut Successful',
			payload: {},
		});
	} catch (error) {
		next(error);
	}
};
const refreshTokenHandler = async (req, res, next) => {
	try {
		const oldRefreshToken = req.cookies.refreshToken;
		const decoded = jwt.verify(oldRefreshToken, jwtUserLoginRefreshKey);
		if (!decoded) {
			throw createError(401, 'invalid refresh token,please login again');
		}
		// if (res.cookie.loginToken) {
		// 	throw createError(403, 'Forbidden!login token is not expired');
		// }
		//create_jwt
		const loginToken = createJsonWebToken(decoded.user, jwtUserLoginKey, '15m');
		//cookie
		res.cookie('loginToken', loginToken, {
			maxAge: 15 * 60 * 1000, //15 minutes
			httpOnly: true,
			secure: true,
			sameSite: 'none',
		});
		return successResponse(res, {
			statusCode: 200,
			message: 'New Access token generated successfully',
			payload: {},
		});
	} catch (error) {
		next(error);
	}
};
const protectedRouteHandler = async (req, res, next) => {
	try {
		const oldLoginToken = req.cookies.loginToken;
		const decoded = jwt.verify(oldLoginToken, jwtUserLoginKey);
		if (!decoded) {
			throw createError(401, 'invalid login token,please login again');
		}

		return successResponse(res, {
			statusCode: 200,
			message: 'Protected route accessed successfully',
			payload: {},
		});
	} catch (error) {
		next(error);
	}
};
module.exports = {
	userLoginHandler,
	userLogoutHandler,
	refreshTokenHandler,
	protectedRouteHandler,
};
