const getProduct = (req, res) => {
	res.status(200).send({
		message: 'Product Route',
	});
};

const getProducts = (req, res) => {
	res.status(200).send({
		message: 'Products Route',
	});
};

module.exports = { getProduct, getProducts };
