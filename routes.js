// backend/routes/productRoutes.js
const express = require('express');
const ProductController = require('../controllers/productController');
const router = express.Router();

router.get('/product/:id', ProductController.getProductDetails);

module.exports = router;
