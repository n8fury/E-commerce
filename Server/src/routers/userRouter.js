const express = require('express');
const upload = require('../middlewares/fileUpload');
const {
	getUsers,
	getUserByID,
	deleteUserByID,
	registerUser,
	verifyUser,
} = require('../controllers/userController');
const userRouter = express.Router();

// /api/users
userRouter.get('/', getUsers);
userRouter.get('/:id', getUserByID);
userRouter.post('/register', upload.single('image'), registerUser);
userRouter.post('/verify', verifyUser);
userRouter.delete('/:id', deleteUserByID);

module.exports = userRouter;
