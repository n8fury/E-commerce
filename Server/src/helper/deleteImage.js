const fs = require('fs').promises;

const deleteImage = async (userImagePath) => {
	try {
		await fs.access(userImagePath);
		await fs.unlink(userImagePath);
		console.error('user image was delete');
	} catch (error) {
		console.error('user image was delete');
	}
};

module.exports = { deleteImage };