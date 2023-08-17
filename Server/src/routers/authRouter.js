const express = require('express');
const { runValidation } = require('../validators/validator_runner');
const { userLogin, userLogout } = require('../controllers/authController');
const authRouter = express.Router();

// /api/auth
authRouter.post('/login', userLogin);
authRouter.post('/logout', userLogout);

module.exports = authRouter;
