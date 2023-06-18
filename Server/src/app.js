const express = require('express');
const morgan = require('morgan');
const body_parser = require('body-parser');
const isLoggedin = require('../middlewares/session');
const createError = require('http-errors');
const xssClean = require('xss-clean');
const rateLimit = require('express-rate-limit');
const userRouter = require('./routers/userRouter');
const healthRouter = require('./routers/healthRouter');

const app = express();

const rateLimiter = rateLimit({
	windowMs: 1 * 1000 * 60, // converted millisecond to second
	rate: 5,
	message: 'request limit expired',
});

app.use(morgan('dev'));
app.use(xssClean());
app.use(rateLimiter);
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));
app.use(isLoggedin);

app.use('/health', healthRouter);
app.use('/users', userRouter);

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

//client error handling
app.use((req, res, next) => {
	next(createError(404, 'route not found'));
});

//server error handling => all errors even client errors
app.use((err, req, res, next) => {
	return res.status(err.status || 500).json({
		success: 'False',
		message: err.message,
	});
});

module.exports = app;