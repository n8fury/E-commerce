const express = require('express');
const { getHealth } = require('../controllers/healthController');
const { getUsers } = require('../controllers/userController');
const userRouter = express.Router();

userRouter.get('/', getUsers);

module.exports = userRouter;
