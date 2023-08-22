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
const { isLoggedIn, isLoggedOut } = require('../middlewares/session');
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
userRouter.get('/', isLoggedIn, getUsers);
userRouter.get('/:id', isLoggedIn, getUserByID);
userRouter.delete('/:id', isLoggedIn, deleteUserByID);
userRouter.put('/:id', fileUpload.single('image'), isLoggedIn, updateUserByID);

module.exports = userRouter;
