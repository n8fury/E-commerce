const express = require('express');
const { getProduct, getProducts } = require('../controllers/productController');
const productRouter = express.Router();

productRouter.get('/', getProducts);
productRouter.get('/productID', getProduct);

module.exports = productRouter;
