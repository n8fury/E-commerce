require('dotenv').config();
const app = require('./app');
const port = process.env.SERVER_PORT || 3001;

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
