









import React from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../data/products.json';
import './index.css'

const ProductPage = ({ addToCart ,addToFavorite}) => {
  const { id } = useParams();
  const product = productsData.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className='products-details-main-container'>
                <h2 className='product-detail-heading'>Product Details</h2>
                <div className='product-detail-container'>
                <img className='product-detail-image' src={product.image} alt={product.name} />
                <div className='product-detail-desc-container'>

      <h2 className='product-detail-name'>{product.name}</h2>
      <p className='product-detail-description'> Price: ${product.price}</p>
                <p className='product-detail-description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <button  className='add-to-cart-button' onClick={() => addToCart(product)}>Add to Cart</button>
      {/* <button  className='add-to-cart-button favoriteElement' onClick={() => addToFavorite(product)}>Favorite</button> */}

      
      
    </div>
    </div>
    </div>
  );
};

export default ProductPage;

