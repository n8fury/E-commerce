const getProduct = (req, res, next) => {
	try {
		res.status(200).send({
			message: 'Product Route',
		});
	} catch (error) {
		next(error);
	}
};

const getProducts = (req, res, next) => {
	try {
		res.status(200).send({
			message: 'Products Route',
		});
	} catch (error) {
		next(error);
	}
};

module.exports = { getProduct, getProducts };
