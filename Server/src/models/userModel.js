const { model, Schema } = require('mongoose');
const bcrypt = require('bcryptjs');
const { defaultImagePath } = require('../secret');

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, 'Name is required'],
			trim: true,
			minlength: [3, 'name can be minimum of 3 character'],
			maxlength: [30, 'name can be maximum of  30 character'],
		},
		email: {
			type: String,
			required: [true, 'email is required'],
			trim: true,
			lowercase: true,
			unique: true,
			validate: {
				validator: (v) => {
					return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
				},
				message: 'enter a valid email',
			},
		},
		password: {
			type: String,
			required: [true, 'password is required'],
			set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
			minlength: [8, 'password must contain minimum of 8 character'],
		},
		image: {
			type: Buffer,
			contentType: String,
			required: [true, 'Image is required'],
		},
		address: {
			type: String,
			required: [true, 'Address is required'],
		},
		phone: {
			type: String,
			required: [true, 'Phone number is required'],
		},
		isAdmin: {
			type: Boolean,
			default: false,
		},
		isBanned: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

const User = model('Users', userSchema);

module.exports = User;

// user model for mongodb
