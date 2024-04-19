// components/CartIcon.js
import React from 'react';
import { Link } from 'react-router-dom';

import './index.css'

const CartIcon = ({ cartItems }) => {
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-icon ">
      <Link to="/cart" className="icon-item">
        {/* <i className="fas fa-shopping-cart item-cart"></i> */}
        <span className='cartitemcount'>{cartItemsCount}</span>
      </Link>
    </div>
  );
};

export default CartIcon;
