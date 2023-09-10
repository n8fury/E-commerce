require('dotenv').config();

const serverPort = process.env.SERVER_PORT || 3001;
const mongodbUrl =
	process.env.MONGODB_URL || 'mongodb://localhost:27017//EcommerceMern';
const defaultImagePath =
	process.env.DEFAULT_USER_IMAGE_PATH ||
	'public/images/users/default_image.jpg';

const jwtUserRegistrationKey =
	process.env.JWT_USER_REGISTRATION_KEY ||
	'sdsadw223ggfjkkjtrtwErtyuiop!@$dfhjkcvbnm65';
const jwtUserLoginKey =
	process.env.JWT_USER_LOGIN_KEY ||
	'sdsadw223ggfjkkjtrtwErtyuiop!@$dfhjkcvbnm65';
const jwtUserPasswordResetKey =
	process.env.JWT_USER_PASSWORD_RESET_KEY ||
	'4A7B2C9D1E6F3G8H5I0J2K7L4M1N8O9P2Q5R';
const smtpUserName = process.env.SMTP_USERNAME || '';
const smtpPassword = process.env.SMTP_PASS || '';
const clientUrl = process.env.CLIENT_URL;
const uploadDirectory = process.env.UPLOAD_DIRECTORY || 'public/images/users';
const maxFileSize = Number(process.env.FILE_SIZE) || 1024 * 1024 * 2;
const fileTypes = process.env.FILE_TYPES || [
	'image / jpg',
	'image / jpeg',
	'image / png',
	'image / PNG',
	'image / JPG',
	'image / JPEG',
];
module.exports = {
	serverPort,
	mongodbUrl,
	defaultImagePath,
	jwtUserRegistrationKey,
	jwtUserLoginKey,
	jwtUserPasswordResetKey,
	smtpUserName,
	smtpPassword,
	clientUrl,
	uploadDirectory,
	maxFileSize,
	fileTypes,
};
