const express = require('express');
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
const createCategory = require('../controllers/categoryController');

// post /api/categories/

const categoryRouter = express.Router();
categoryRouter.get('/', createCategory);

module.exports = categoryRouter;
