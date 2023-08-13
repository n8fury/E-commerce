const express = require('express');
const { runValidation } = require('../validators/validator_runner');
const { userLogin } = require('../controllers/authController');
const authRouter = express.Router();

// /api/auth
authRouter.post('/login', userLogin);

module.exports = authRouter;
