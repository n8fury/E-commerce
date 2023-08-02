const multer = require('multer');
const { fileTypes, maxFileSize } = require('../secret');
const storage = multer.memoryStorage();
const fileFilter = (req, file, cb) => {
	if (!file.mimeType.startsWith('image/')) {
		return cb(new Error('only image files are allowed'), false);
	}
	if (file.size > maxFileSize) {
		return cb(new Error('file size exceeded maximum limit'), false);
	}
	if (!fileTypes.includes(file.mimeType)) {
		return cb(new Error(`Invalid File fileTypes`), false);
	}
	cb(null, true);
};
const upload = multer({
	storage: storage,
	fileFilter,
});

module.exports = upload;
