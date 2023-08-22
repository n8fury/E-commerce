const express = require('express');
const { runValidation } = require('../validators/validator_runner');
const { userLogin, userLogout } = require('../controllers/authController');
const { isLoggedIn, isLoggedOut } = require('../middlewares/session');
const authRouter = express.Router();

// /api/auth
authRouter.post('/login', isLoggedOut, userLogin);
authRouter.post('/logout', isLoggedIn, userLogout);

module.exports = authRouter;
