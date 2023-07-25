const jwt = require('jsonwebtoken');

const createJsonWebToken = (payload, secretKey, expireTime) => {
	const token = jwt.sign(payload, secretKey, { expireTime });
	return token;
};
