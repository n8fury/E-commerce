const multer = require('multer');
const path = require('path');
const createError = require('http-errors');
const { uploadDirectory, fileTypes, maxFileSize } = require('../secret');
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, uploadDirectory);
	},
	filename: (req, file, cb) => {
		const extName = path.extname(file.originalname);
		cb(null, Date.now() + '-' + file.originalname + extName);
	},
});
const fileFilter = (req, file, cb) => {
	const extName = path.extname(file.originalname);
	if (!fileTypes.includes(extName.substring(1))) {
		return cb(createError(400, 'File Type not Allowed'));
	}
	cb(null, true);
};
const upload = multer({
	storage: storage,
	limits: { fileSize: maxFileSize },
	fileFilter,
});

module.exports = upload;
