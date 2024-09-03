// backend/controllers/productController.js
const Product = require('../models/Product');

class ProductController {
    static async getProductDetails(req, res) {
        const productId = req.params.id;
        // Fetch product from database or external API
        const product = new Product(productId, "Organic Apples", 2.99, "Amazon");
        res.json(product);
    }
}

module.exports = ProductController;
