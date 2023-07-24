const express = require('express');
const {
	getUsers,
	getUserByID,
	deleteUserByID,
	registerUser,
} = require('../controllers/userController');
const userRouter = express.Router();

// /api/users
userRouter.get('/', getUsers);
userRouter.get('/:id', getUserByID);
userRouter.post('/register', registerUser);
userRouter.delete('/:id', deleteUserByID);

module.exports = userRouter;
