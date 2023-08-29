const express = require('express');
const seedUser = require('../controllers/seedController');
const fileUpload = require('../middlewares/fileUpload');
const seedRouter = express.Router();

// /api/seed

seedRouter.get('/user', fileUpload.single('image'), seedUser);
module.exports = seedRouter;
