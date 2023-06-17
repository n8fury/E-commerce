const getHealth = (req, res) => {
	res.status(200).send({
		message: 'API is working',
	});
};

module.exports = { getHealth };
