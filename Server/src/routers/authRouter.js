const express = require('express');
const { runValidation } = require('../validators/validator_runner');
const {
	userLoginHandler,
	userLogoutHandler,
	refreshTokenHandler,
} = require('../controllers/authController');
const { isLoggedIn, isLoggedOut } = require('../middlewares/authentication');
const { userLoginValidator } = require('../validators/auth_validator');
const authRouter = express.Router();

// /api/auth
authRouter.post(
	'/login',
	userLoginValidator,
	runValidation,
	isLoggedOut,
	userLoginHandler
);
authRouter.post('/logout', isLoggedIn, userLogoutHandler);
authRouter.post('/refresh-token', refreshTokenHandler);

module.exports = authRouter;
