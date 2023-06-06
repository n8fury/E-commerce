const express = require('express');

const app = express();

app.listen(3000, (req, res) => {
	console.log('Server is running on port 3000');
});
