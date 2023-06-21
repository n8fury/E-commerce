const app = require('./app');
const { connectDB } = require('./config/db');
const { serverPort } = require('./secret');

app.listen(serverPort, async () => {
	console.log(`Server is running on http://localhost:${serverPort}`);
	await connectDB();
});
