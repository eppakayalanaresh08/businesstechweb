// import React from 'react'

// function Favorite() {
//   return (
//     <div>index</div>
//   )
// }

// export default Favorite














// components/Cart.js
import React from 'react';

import './index.css'

const Favorite = ({ FavoriteItems, removeFromFavorite }) => {
  const totalPrice = FavoriteItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container products-list-container-cart">
      <h2 className="cart-shopping">Favorite </h2>
      {FavoriteItems.length === 0 ? (
        <p className="cart-empty">Your Favorite items is empty.</p>
      ) : (
        <div className="products-list-cart">
          {FavoriteItems.map((item) => (
            <div key={item.id} className="product product-details-link">
              <img  className='product-image-cart'  src={item.image} alt={item.name} />
                <h3 className="">{item.name}</h3>
                <p className='product-list-description'>Price: ${item.price}</p>
                <p className='product-list-description'>Quantity: {item.quantity}</p>
                <button className="button-remove" onClick={() => removeFromFavorite(item.id)}>Remove</button>
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

export default Favorite;
