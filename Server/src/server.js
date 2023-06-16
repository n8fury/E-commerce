const app = require('./app');
const { serverPort } = require('./secret');

app.listen(serverPort, () => {
	console.log(`Server is running on http://localhost:${serverPort}`);
});
