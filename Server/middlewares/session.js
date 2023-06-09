const isLoggedin = (req, res, next) => {
	const loggedin = false;

	if (loggedin) {
		next();
	} else {
		return res.status(401).send({
			message: 'Unauthorized',
		});
	}
};
module.exports = isLoggedin;
