const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const body_parser = require('body-parser');
const createError = require('http-errors');
const xssClean = require('xss-clean');
const rateLimit = require('express-rate-limit');
const userRouter = require('./routers/userRouter');
const healthRouter = require('./routers/healthRouter');
const seedRouter = require('./routers/seedRouter');
const authRouter = require('./routers/authRouter');
const categoryRouter = require('./routers/categoryRouter');
const { errorResponse } = require('./controllers/responseController');

const app = express();

const rateLimiter = rateLimit({
  windowMs: 1 * 1000 * 60, // converted millisecond to second
  rate: 5,
  message: 'request limit expired',
});

app.use(cookieParser());
app.use(morgan('dev'));
app.use(xssClean());
app.use(rateLimiter);
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: true }));

//middleware
// app.use(isLoggedin);

//routes
app.use('/api/health', healthRouter);
app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/seed', seedRouter);
app.use('/api/categories', categoryRouter);

//home route
app.get('/', (req, res) => {
  res.status(200).send({
    message: 'Home Route',
  });
});

//client error handling
app.use((req, res, next) => {
  next(createError(404, 'route not found'));
});

//server error handling => all errors even client errors
app.use((err, req, res, next) => {
  return errorResponse(res, {
    statusCode: err.status,
    message: err.message,
  });
});

module.exports = app;
