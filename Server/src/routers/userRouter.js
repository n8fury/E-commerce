const express = require('express');
const fileUpload = require('../middlewares/fileUpload');
const {
	getUsers,
	getUserByID,
	deleteUserByID,
	registerUser,
	activateUserAccount,
	updateUserByID,
	banUserByID,
	unBanUserByID,
	updatePassword,
	handleForgetPassword,
	handleResetPassword,
} = require('../controllers/userController');
const {
	userRegistrationValidator,
	userPasswordUpdateValidator,
	userForgetPasswordValidator,
	userResetPasswordValidator,
} = require('../validators/auth_validator');
const { runValidation } = require('../validators/validator_runner');
const {
	isLoggedIn,
	isAdmin,
	isLoggedOut,
} = require('../middlewares/authentication');

const userRouter = express.Router();

// /api/users
userRouter.post(
	'/register',
	fileUpload.single('image'),
	userRegistrationValidator,
	isLoggedOut,
	runValidation,
	registerUser
);
userRouter.post('/activate', isLoggedOut, activateUserAccount);
userRouter.get('/', isLoggedIn, isAdmin, getUsers);
userRouter.get('/:id([0-9a-fA-F]{24})', isLoggedIn, getUserByID);
userRouter.delete('/:id([0-9a-fA-F]{24})', isLoggedIn, deleteUserByID);
userRouter.put(
	'/update-password/',
	userPasswordUpdateValidator,
	runValidation,
	isLoggedIn,
	updatePassword
);
userRouter.put(
	'/ban-user/:id([0-9a-fA-F]{24})',
	isLoggedIn,
	isAdmin,
	banUserByID
);
userRouter.put(
	'/unban-user/:id([0-9a-fA-F]{24})',
	isLoggedIn,
	isAdmin,
	unBanUserByID
);
userRouter.post(
	'/forget-password/',
	userForgetPasswordValidator,
	runValidation,
	isLoggedIn,
	handleForgetPassword
);
userRouter.put(
	'/reset-password/',
	userResetPasswordValidator,
	runValidation,
	isLoggedIn,
	handleResetPassword
);
userRouter.put('/:id', fileUpload.single('image'), isLoggedIn, updateUserByID);

module.exports = userRouter;
//TODO: use validator for activate user route
