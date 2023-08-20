const express = require('express');
const fileUpload = require('../middlewares/fileUpload');
const {
	getUsers,
	getUserByID,
	deleteUserByID,
	registerUser,
	activateUserAccount,
	updateUserByID,
} = require('../controllers/userController');
const { userRegistrationValidator } = require('../validators/auth_validator');
const { runValidation } = require('../validators/validator_runner');
const isLoggedin = require('../middlewares/session');
const userRouter = express.Router();

// /api/users
userRouter.post(
	'/register',
	fileUpload.single('image'),
	userRegistrationValidator,
	runValidation,
	registerUser
);
userRouter.post('/activate', activateUserAccount);
userRouter.get('/', isLoggedin, getUsers);
userRouter.get('/:id', isLoggedin, getUserByID);
userRouter.delete('/:id', isLoggedin, deleteUserByID);
userRouter.put('/:id', fileUpload.single('image'), isLoggedin, updateUserByID);

module.exports = userRouter;
