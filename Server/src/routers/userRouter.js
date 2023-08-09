const express = require('express');
const upload = require('../middlewares/fileUpload');
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
const userRouter = express.Router();

// /api/users
userRouter.post(
	'/register',
	upload.single('image'),
	userRegistrationValidator,
	runValidation,
	registerUser
);
userRouter.post('/activate', activateUserAccount);
userRouter.get('/', getUsers);
userRouter.get('/:id', getUserByID);
userRouter.delete('/:id', deleteUserByID);
userRouter.put('/:id', upload.single('image'), updateUserByID);

module.exports = userRouter;
