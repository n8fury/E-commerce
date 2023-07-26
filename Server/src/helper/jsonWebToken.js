const jwt = require('jsonwebtoken');

const createJsonWebToken = (payload, secretKey, expiresIn) => {
	if (typeof payload !== 'object' || !payload) {
		throw new Error('Payload must be a non empty object');
	}
	if (secretKey !== 'string' || secretKey === '') {
		throw new Error('SecretKey must be non-empty string');
	}
	try {
		const token = jwt.sign(payload, secretKey, { expiresIn });
		return token;
	} catch (error) {
		console.log('failed to sign jwt', error);
		throw error;
	}
};

module.exports = { createJsonWebToken };

// for creating JWT tokens for all secure purpose
// taken secretKey from env
/* in jwt.sign the third parameter passed indicates the expiration time. it should be a plain object
and the the option for token expiration to be specified using the property name expiresIn in the options object when calling jwt.sign. 

so the variable name has to be expiresIn or you can pass it in any other variable name
and it has to be key: value shape
EXPIRESIN
expiresIn:EXPIRESIN
like this way

*/
