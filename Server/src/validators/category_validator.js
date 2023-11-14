const { body } = require('express-validator');
//registration validation

const userRegistrationValidator = [
	body('name')
		.trim()
		.notEmpty()
		.withMessage('Category name is required')
		.isLength({ min: 3 })
		.withMessage('Category name should be at least 3 character Long'),

];

module.exports = {
	userRegistrationValidator,
};

//sign_in validator
