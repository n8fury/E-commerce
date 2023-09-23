const fs = require('fs').promises;

const deleteImage = async (userImagePath) => {
	try {
		await fs.access(userImagePath);
		await fs.unlink(userImagePath);
		console.log('user image was deleted');
	} catch (error) {
		console.error('user image was not  deleted');
	}
};

module.exports = { deleteImage };

// for deleting and unlinking user image path and will be use for product image deletion
