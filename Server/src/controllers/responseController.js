const errorResponse = (
	res,
	{ statusCode = 500, message = 'Internal Server Error' }
) => {
	return res.status(statusCode).json({
		success: false,
		message,
	});
};

const successResponse = (
	res,
	{ statusCode = 200, message = 'Success', payload = {} }
) => {
	return res.status(statusCode).json({
		success: true,
		message,
		payload,
	});
};

module.exports = { errorResponse, successResponse };


// created response controller for better handlings error response and success response
// used in all controllers for sending appropriate responses and response codes