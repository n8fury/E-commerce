const isLoggedin = (req, res, next) => {
	const loggedin = true;

	if (loggedin) {
		req.body.id = 101;
		console.log('login middleware');
		next();
	} else {
		return res.status(401).send({
			message: 'Unauthorized',
		});
	}
};
module.exports = isLoggedin;
