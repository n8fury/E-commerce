const getHealth = (req, res, next) => {
	try {
		res.status(200).send({
			message: 'API is working',
		});
	} catch (error) {
		next(error);
	}
};

module.exports = { getHealth };
