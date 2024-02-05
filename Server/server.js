const app = require('./src/app');
const { connectDB } = require('./src/config/db');
const { logger } = require('./src/controllers/loggerController');
const { serverPort } = require('./src/secret');

app.listen(serverPort, async () => {
  logger.log('info', `Server is running on http://localhost:${serverPort}`);
  await connectDB();
});
