const express = require('express');
const upload = require('../middlewares/fileUpload');
const {
	getUsers,
	getUserByID,
	deleteUserByID,
	registerUser,
	verifyUser,
} = require('../controllers/userController');
const { userRegistrationValidator } = require('../validators/auth_validator');
const { runValidation } = require('../validators/validator_runner');
const userRouter = express.Router();

// /api/users
userRouter.get('/', getUsers);
userRouter.get('/:id', getUserByID);
userRouter.post(
	'/register',
	upload.single('image'),
	userRegistrationValidator,
	runValidation,
	registerUser
);
userRouter.post('/verify', verifyUser);
userRouter.delete('/:id', deleteUserByID);

module.exports = userRouter;
