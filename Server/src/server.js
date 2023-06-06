const express = require('express');

const app = express();

app.get('/health', (req, res) => {
	res.status(200).send({
		message: 'API is working',
	});
});
app.get('/', (req, res) => {
	res.status(200).send({
		message: 'Success',
	});
});
app.get('/products', (req, res) => {
	res.status(200).send({
		message: 'Products',
	});
});

app.listen(3000, (req, res) => {
	console.log('Server is running on port 3000');
});
