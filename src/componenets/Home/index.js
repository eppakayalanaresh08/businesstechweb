// components/ProductList.js
import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../../data/products.json';

import './index.css'

const HomePage = () => {
  return (
    <div className='products-list-container' id='Storeme'>
    {/* <h2 className='products-list-heading'>Product List</h2> */}
    <div className='products-list'>
    {productsData.map((product) => (
      <Link className='product-details-link' to={`/product/${product.id}`}>
        <div className='product' key={product.id}>
        <img className='product-image' src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p className='product-list-description-text'>Price: ${product.price}</p>
        <p className='product-list-description-text'>Quantity:{product.quantity}</p>
        </div></Link>
    ))}
    </div>
  </div>
  );
};

export default HomePage;
