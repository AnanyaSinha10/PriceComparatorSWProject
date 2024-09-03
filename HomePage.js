// frontend/pages/HomePage.js
import React, { Component } from 'react';
import ProductCard from '../components/ProductCard';

class HomePage extends Component {
    state = {
        products: []
    };

    async componentDidMount() {
        // Fetch products and update state
    }

    render() {
        return (
            <div>
                {this.state.products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        );
    }
}

export default HomePage;
