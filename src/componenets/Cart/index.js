// components/Cart.js
import React from 'react';

import './index.css'

const Cart = ({ cartItems, removeFromCart }) => {
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container products-list-container-cart">
      <h2 className="cart-shopping">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <div className="products-list-cart">
          {cartItems.map((item) => (
            <div key={item.id} className="product product-details-link">
              <img  className='product-image-cart'  src={item.image} alt={item.name} />
                <h3 className="">{item.name}</h3>
                <p className='product-list-description'>Price: ${item.price}</p>
                <p className='product-list-description'>Quantity: {item.quantity}</p>
                <button className="button-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
          ))}
          <div className="cart-total">
            <p className="total-price">Total Price: ${totalPrice}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
