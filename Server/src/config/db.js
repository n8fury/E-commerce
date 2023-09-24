const mongoose = require('mongoose');
const { mongodbUrl } = require('../secret');
const { logger } = require('../controllers/loggerController');

const connectDB = async (options = {}) => {
	try {
		await mongoose.connect(mongodbUrl, options);
		logger.log('info', 'connected to DB');
		mongoose.connection.on('error', (error) => {
			console.error('Db connection error : ', error);
		});
	} catch (error) {
		console.error("couldn't connect to db: ", error.toString());
	}
};

module.exports = { connectDB };

//this connectDB async function is use to connect with database
// used in server.js
