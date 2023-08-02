const User = require('../models/userModel');
const createError = require('http-errors');
const jwt = require('jsonwebtoken');
const { successResponse } = require('./responseController');
const { findById } = require('../services/findById');
const { deleteImage } = require('../helper/deleteImage');
const { createJsonWebToken } = require('../helper/JsonWebToken');
const { jwtKey, clientUrl } = require('../secret');
const emailWithNodemailer = require('../helper/emailHelper');

const getUsers = async (req, res, next) => {
	try {
		const search = req.query.search || '';
		const page = Number(req.query.page) || 1;
		const limit = Number(req.query.limit) || 5;
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
		const option = { password: 0 }; // not showing the password field in the searched

		const users = await User.find(filter, option)
			.limit(limit) // limiting user per page
			.skip((page - 1) * limit); // skipping user as page increase
		if (!users) throw createError(404, 'user not found'); //throwing error for not finding user

		const count = await User.find(filter).countDocuments(); // counting search result for pagination

		return successResponse(res, {
			statusCode: 200,
			message: 'Users Returned Successfully',
			payload: {
				users,
				pagination: {
					totalPage: Math.ceil(count / limit),
					currentPage: page,
					previousPage: page - 1 > 0 ? page - 1 : null,
					nextPage: page + 1 <= Math.ceil(count / limit) ? page + 1 : null,
				},
			},
		});
	} catch (error) {
		next(error);
	}
};

const getUserByID = async (req, res, next) => {
	try {
		const id = req.params.id;
		const option = { password: 0 };
		const user = await findById(User, id, option);
		return successResponse(res, {
			statusCode: 200,
			message: 'User Returned Successfully',
			payload: {
				user,
			},
		});
	} catch (error) {
		next(error);
	}
};

const deleteUserByID = async (req, res, next) => {
	try {
		const id = req.params.id;
		const option = { password: 0 };
		const user = await findById(User, id, option);
		const userImagePath = user.image;
		deleteImage(userImagePath);

		await User.findByIdAndDelete({
			_id: id,
			isAdmin: false,
		});

		return successResponse(res, {
			statusCode: 200,
			message: 'User deleted Successfully',
		});
	} catch (error) {
		next(error);
	}
};

const registerUser = async (req, res, next) => {
	try {
		const { name, email, password, phone, address } = req.body;
		const imageBufferString = req.file.buffer.toString('base64');
		const userExist = await User.exists({ email: email });
		if (userExist) {
			throw createError(409, 'User with this email already exists');
		}
		//JWT
		const token = createJsonWebToken(
			{
				name,
				email,
				password,
				phone,
				address,
				image: imageBufferString,
			},
			jwtKey,
			'10m'
		);
		//email_preparation
		const emailData = {
			email,
			subject: 'Account Activation Email',
			html: `
			<h2>Hello ${name}</h2>
			<p>please click <a href="${clientUrl}/api/users/activate/${token}" target="_blank">Here</a> to activate your account</p>
			`,
		};
		//send_email_with_nodemailer
		try {
			// await emailWithNodemailer(emailData);
		} catch (error) {
			next(createError(500, 'Failed to send email due to ', error));
			return;
		}
		return successResponse(res, {
			statusCode: 200,
			message: `verification email sent at ${email},please click the attached link to verify`,
			payload: {
				token,
				imageBufferString,
			},
		});
	} catch (error) {
		next(error);
	}
};

const verifyUser = async (req, res, next) => {
	try {
		const token = req.body.token;
		if (!token) throw createError(404, 'Token not found');
		try {
			const data = jwt.verify(token, jwtKey);
			if (!data) throw createError(401, 'unable to verify user');
			const userExist = await User.exists({ email: data.email });
			if (userExist) {
				throw createError(409, 'User with this email already exists');
			}
			console.log(data);
			await User.create(data);
			return successResponse(res, {
				statusCode: 201,
				message: `User created Successfully`,
			});
		} catch (error) {
			if (error.name == 'TokenExpiredError') {
				throw createError(401, 'Token has expired');
			} else if (error.name == 'JsonWebTokenError') {
				throw createError(401, 'invalid token');
			} else {
				throw error;
			}
		}
	} catch (error) {
		next(error);
	}
};

module.exports = {
	getUsers,
	getUserByID,
	deleteUserByID,
	registerUser,
	verifyUser,
};

// user controller
// TODO: well document whole codebase in this controller
