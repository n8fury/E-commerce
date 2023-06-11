const express = require('express');
const morgan = require('morgan');
const body_parser = require('body-parser');
const isLoggedin = require('../middlewares/session');
const createError = require('http-errors');

const app = express();
app.use(morgan('dev'));
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
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
app.get('/products', isLoggedin, (req, res) => {
	res.status(200).send({
		message: 'Products Route',
	});
});
app.get('/user/profile', isLoggedin, (req, res) => {
	console.log(req.body.id);
	res.status(200).send({
		message: 'profile Route',
	});
});

//client error handling
app.use((req, res, next) => {
	createError(404, 'Route not found');
	next();
});

//server error handling
app.use((err, req, res, next) => {
	console.log(err.stack);
	createError(500, 'Something went Wrong');
});

module.exports = app;
