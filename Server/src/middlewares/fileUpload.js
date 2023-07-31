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
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
		cb(null, file.fieldname + '-' + uniqueSuffix + extName);
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
	limits: { fileSize: Number(maxFileSize) },
	fileFilter,
});

module.exports = upload;
