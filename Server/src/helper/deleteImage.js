const { logger } = require('../controllers/loggerController');

const fs = require('fs').promises;

const deleteImage = async (userImagePath) => {
	try {
		await fs.access(userImagePath);
		await fs.unlink(userImagePath);
		logger.log('info', 'user image was deleted');
	} catch (error) {
		logger.log('error', 'user image was not  deleted');
	}
};

module.exports = { deleteImage };

// for deleting and unlinking user image path and will be use for product image deletion
