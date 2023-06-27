const express = require('express');
const seedUser = require('../controllers/seedController');
const seedRouter = express.Router();

// /api/seed

seedRouter.get('/user', seedUser);
module.exports = seedRouter;
