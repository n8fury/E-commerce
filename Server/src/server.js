const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.get('/health', (req, res) => {
	res.status(200).send({
		message: 'API is working',
	});
});
app.get('/', (req, res) => {
	res.status(200).send({
		message: 'Home Route',
	});
});
app.get('/product', (req, res) => {
	res.status(200).send({
		message: 'Product Route',
	});
});
app.get('/products', (req, res) => {
	res.status(200).send({
		message: 'Products Route',
	});
});

app.listen(3000, (req, res) => {
	console.log('Server is running on port 3000');
});
