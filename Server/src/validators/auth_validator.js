const { body } = require('express-validator');
//registration validation

const userRegistrationValidator = [
	body('name')
		.trim()
		.notEmpty()
		.withMessage('Name is required')
		.isLength({ min: 3, max: 31 })
		.withMessage('Name should be at least 3-34 character Long'),
	body('email')
		.trim()
		.notEmpty()
		.withMessage('email is required')
		.isEmail()
		.withMessage('Invalid email address'),
	body('password')
		.trim()
		.notEmpty()
		.withMessage('password is required')
		.isLength({ min: 8 })
		.withMessage('password should be at least 8 character Long')
		.matches(
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
		)
		.withMessage(
			'Password should be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character '
		),
	body('address')
		.trim()
		.notEmpty()
		.withMessage('address is required')
		.isLength({ min: 5 })
		.withMessage('address should be at least 5 character Long'),
	body('phone').trim().notEmpty().withMessage('phone is required'),
	body('image').optional().isString().withMessage('phone is required'),
];

module.exports = { userRegistrationValidator };

//sign_in validator
