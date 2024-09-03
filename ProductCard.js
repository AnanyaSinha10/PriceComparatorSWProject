// frontend/components/ProductCard.js
import React from 'react';

class ProductCard extends React.Component {
    render() {
        const { name, price, supermarket } = this.props.product;
        return (
            <div className="product-card">
                <h2>{name}</h2>
                <p>{price} at {supermarket}</p>
            </div>
        );
    }
}

export default ProductCard;
