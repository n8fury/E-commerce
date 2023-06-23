require('dotenv').config();

const serverPort = process.env.SERVER_PORT || 3001;
const mongodbUrl =
	process.env.MONGODB_URL || 'mongodb://localhost:27017//EcommerceMern';
const defaultImagePath =
	process.env.DEFAULT_USER_IMAGE_PATH ||
	'public/images/users/default_image.jpg';

module.exports = { serverPort, mongodbUrl, defaultImagePath };
