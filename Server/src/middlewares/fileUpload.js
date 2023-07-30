const multer = require('multer');
const path = require('path');
const { uploadDirectory } = require('../secret');
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, uploadDirectory);
	},
	filename: function (req, file, cb) {
		const extName = path.extname(file.originalname);
		const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
		cb(null, file.fieldname + '-' + uniqueSuffix + extName);
	},
});

const upload = multer({ storage: storage });

module.exports = upload;
