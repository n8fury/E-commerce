require('dotenv').config();

const serverPort = process.env.SERVER_PORT || 3001;
const mongodbUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017//EcommerceMern';

module.exports = { serverPort, mongodbUrl };
