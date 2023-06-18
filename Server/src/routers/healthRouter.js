const express = require('express');
const { getHealth } = require('../controllers/healthController');
const healthRouter = express.Router();

healthRouter.get('/', getHealth);

module.exports = healthRouter;
