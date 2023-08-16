const User = require('../models/userModel');
const createError = require('http-errors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { jwtUserLoginKey } = require('../secret');
const { createJsonWebToken } = require('../helper/JsonWebToken');
const { successResponse } = require('./responseController');

const userLogin = async (req, res, next) => {
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
		const loginToken = createJsonWebToken({ email }, jwtUserLoginKey, '10m');
		//cookie
		res.cookie('login_token', loginToken, {
			maxAge: 10 * 60 * 1000, //10 minutes
			httpOnly: true,
			secure: true,
			sameSite: 'none',
		});

		return successResponse(res, {
			statusCode: 200,
			message: 'User login Successful',
			payload: {
				user
			},
		});
	} catch (error) {
		next(error);
	}
};

module.exports = { userLogin };

/*TODO:		 we have to check the email and the pass is present on the db or not (userExist)
        email and pass should be from req.body
        for pass we have to match the hash
        also we have to check if the user is banned or not
        we'll also use access token and store the token inside cookie
        */
