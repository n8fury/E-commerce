const app = require('./app');
const { connectDB } = require('./config/db');
const { logger } = require('./controllers/loggerController');
const { serverPort } = require('./secret');

app.listen(serverPort, async () => {
	logger.log('info', `Server is running on http://localhost:${serverPort}`);
	await connectDB();
});
