const express = require('express');
const { getHealth } = require('../controllers/userController');
const userRouter = express.Router();

userRouter.get('/health', getHealth);

module.exports = userRouter;
