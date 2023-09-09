const express = require('express');
const { runValidation } = require('../validators/validator_runner');
const { userLogin, userLogout } = require('../controllers/authController');
const { isLoggedIn, isLoggedOut } = require('../middlewares/authentication');
const { userLoginValidator } = require('../validators/auth_validator');
const authRouter = express.Router();

// /api/auth
authRouter.post(
	'/login',
	userLoginValidator,
	runValidation,
	isLoggedOut,
	userLogin
);
authRouter.post('/logout', isLoggedIn, userLogout);

module.exports = authRouter;
