const express = require('express');
const { getUsers } = require('../controllers/userController');
const userRouter = express.Router();

// /api/users
userRouter.get('/', getUsers);

module.exports = userRouter;
