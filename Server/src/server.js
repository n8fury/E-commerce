const express = require('express');
const morgan = require('morgan');
const isLoggedin = require('../middlewares/session');

const app = express();
app.use(morgan('dev'));
app.use(isLoggedin);

app.get('/health', (req, res) => {
	res.status(200).send({
		message: 'API is working',
	});
});
app.get('/', isLoggedin, (req, res) => {
	res.status(200).send({
		message: 'Home Route',
	});
});
app.get('/product', isLoggedin, (req, res) => {
	res.status(200).send({
		message: 'Product Route',
	});
});
app.get('/products',isLoggedin, (req, res) => {
	res.status(200).send({
		message: 'Products Route',
	});
});

app.listen(3000, (req, res) => {
	console.log('Server is running on http://localhost:3000');
});
