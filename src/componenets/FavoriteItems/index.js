// import React from 'react'

// function FavoriteItemsIcon() {
//   return (
//     <div>index</div>
//   )
// }

// export default FavoriteItemsIcon



// components/CartIcon.js
import React from 'react';
import { Link } from 'react-router-dom';

import './index.css'

const FavoriteItemsIcon = ({ FavoriteItems }) => {
  const FavoriteItemsIconCounter = FavoriteItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="favorite-icon">
      <Link to="/favorite" className="icon-item">
        {/* <i className="fas fa-shopping-cart item-cart"></i> */}
        <span className='countnumberFavorite'>{FavoriteItemsIconCounter}</span>
      </Link>
    </div>
  );
};

export default FavoriteItemsIcon;
