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
	'Ertyuiop!@$dfhjkcvbnm65sdsadw223ggfjkkjtrtwErt';
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
	smtpUserName,
	smtpPassword,
	clientUrl,
	uploadDirectory,
	maxFileSize,
	fileTypes,
	jwtUserLoginKey,
};
