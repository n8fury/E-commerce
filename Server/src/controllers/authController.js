const userLogin = async (req, res, next) => {
	try {
		return successResponse(res, {
			statusCode: 200,
			message: 'User login Successful',
		});
	} catch (error) {
		next(error);
	}
};

module.exports = { userLogin };
