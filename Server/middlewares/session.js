const isLoggedin = (req, res, next) => {
	const loggedin = true;

	if (loggedin) {
		console.log('login middleware');
		next();
	} else {
		return res.status(401).send({
			message: 'Unauthorized',
		});
	}
};
module.exports = isLoggedin;
