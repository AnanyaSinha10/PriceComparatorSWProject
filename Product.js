// backend/models/Product.js
class Product {
    constructor(id, name, price, supermarket) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.supermarket = supermarket;
    }

    // Method to display product details
    display() {
        return `${this.name} - $${this.price} at ${this.supermarket}`;
    }
}

module.exports = Product;
