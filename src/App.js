
import React, { useState, useEffect, } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import ProductPage from './componenets/Product';
// import HomePage from './componenets/Home';
// import ProductPage from './componenets/Product';
// ProductPage
import ProductPage from './componenets/Product'
import HomePage from './componenets/Home';
import { Link } from 'react-router-dom';

import './App.css'

import Cart from './componenets/Cart';
import CartIcon from './componenets/CartIcon';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
// import FavoriteItemsIcon from './componenets/FavoriteItems';
import Favorite from './componenets/Favorite';


function App() {


  const [cartItems, setCartItems] = useState([]);
  const [FavoriteItems, setFavoriteItems] = useState([])

  useEffect(() => {
    // Fetch cart items from LocalStorage
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
    const storedFavorite = localStorage.getItem('FavoriteItems');
    if (storedFavorite) {
      setFavoriteItems(JSON.parse(storedFavorite))
    }
  }, []);

  useEffect(() => {
    // Save cart items to LocalStorage whenever it changes
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    localStorage.setItem('FavoriteItems', JSON.stringify(FavoriteItems));

  }, [cartItems, FavoriteItems]);

  const addToFavorite = (product) => {
    const existingItemFavorite = FavoriteItems.find((item) => item.id === product.id);
    if (existingItemFavorite) {
      setFavoriteItems(
        FavoriteItems.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      )
    }
    else {
      setFavoriteItems([...FavoriteItems, { ...product, quantity: 1 }])
      console.log(FavoriteItems)
    }
  }

  const removeFromFavorite = (productId) => {
    setFavoriteItems(FavoriteItems.filter((item) => item.id !== productId));
    // console.log(removeFromFavorite)

  }


  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
    console.log(addToCart)
  }


  // const mapStyles = {
  //   height: "40vh",
  //   width: "25%",

  // };

  // const defaultCenter = {
  //   lat: 40.712776,
  //   lng: -74.005974
  // };


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (

    <Router>
      <div className='appcontainer'>

        <div className="containerBg">
          <div className="bgContainer">
            <nav className='navcontainer'>
              <ul className='firstnavcontainer'>
                <li className='listitem'>
                  <Link className='listlink' to='#' onClick={() => scrollToSection('Storeme')}>Store</Link>
                </li>
                <li className='listitem'>
                  <Link to="#" className='listlink' onClick={() => scrollToSection('Locationme')}>Location</Link>
                </li>
                <li className='listitem' >
                  <Link to="#" onClick={() => scrollToSection('ContactUs')} className='listlink'>Contact us</Link>
                </li>
              </ul>

              <ul className='secondNav'>
                <li className='listitem'>
                  <Link to="#" className='listlink'>+918688072591</Link>
                </li>
                <li className='listitem'>
                  <Link to="#" className='listlink'>Get directions</Link>
                </li>
                <li className='listitem'>
                  <Link to="#" className='listlink'>business hours</Link>
                </li>
              </ul>
            </nav>
            <div>
              <h1 className='limeArtheading'>LimeArt</h1>
              <h1 className='nameparagraph'>
              One stop shop for your Soap making and Cosmetic Raw materials
              </h1>
            </div>

            <div className='div-shp-button' >
              <Link to="/" onClick={() => scrollToSection('Storeme')}>
                <button class="shop-now-button">Shop Now</button>
              </Link>
            </div>
            <div className="scroll-prompt" onClick={() => scrollToSection('Storeme')}>
              <div className="scroll-prompt-arrow-container">
                <div className="scroll-prompt-arrow"><div></div></div>
                <div className="scroll-prompt-arrow"><div></div></div>
              </div>
            </div>
          </div>

        </div>
        <div className='ElementContainercategory'>
          <ul className='categoryElement'>
            <li className='listitem button-products' >
              <Link to="/product/1" className='listlinkcategory'>Transparent Shampoo Base</Link>
            </li>
            <li className='listitem button-products'>
              <Link to="/product/2" className='listlinkcategory'>Pearly Shampoo Base</Link>
            </li>
            <li className='listitem button-products'>
              <Link to="/product/3" className='listlinkcategory'>Herbal Shampoo Base</Link>
            </li>
            <li className='listitem button-products'>
              <Link to="/product/4" className='listlinkcategory'> Shower Gel Base
              </Link>
            </li>
          </ul>
        </div>


        <div>
          <nav >
            <ul className="nav-Element">
              <li className="product-list-list">
                <Link to="/" className="product-list">Product List</Link>

              </li>
              <li className="cartbuttonlistbg">

                <Link to="/cart" className="cartbutton">
                  <svg class="icon-default cartIcon" width="28" height="28" viewBox="0 0 36 30" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M7 7h22v18a4 4 0 0 1-4 4H11a4 4 0 0 1-4-4V7z" stroke="currentColor" stroke-width="2"></path><path d="M13 10V6c0-2.993 2.009-5 5-5s5 2.026 5 5v4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><circle class="cart-not-empty" cx="18" cy="18" r="4" fill="currentColor"></circle></g></svg>
                </Link>
                <CartIcon cartItems={cartItems} />
                {/* <CartIcon cartItems={cartItems} /> */}
              </li>
              {/* <li className="listFavoritelist">
                <Link to="/favorite" className="favoritebuttonlink">              
                  <svg class="icon-default FavoriteIcon" width="36" height="36" viewBox="0 0 36 30" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="M7 7h22v18a4 4 0 0 1-4 4H11a4 4 0 0 1-4-4V7z" stroke="currentColor" stroke-width="2"></path><path d="M13 10V6c0-2.993 2.009-5 5-5s5 2.026 5 5v4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><circle class="cart-not-empty" cx="18" cy="18" r="4" fill="currentColor"></circle></g></svg>
                </Link>
                <FavoriteItemsIcon FavoriteItems={FavoriteItems}  />


              </li> */}
            </ul>
          </nav>
        </div>
      </div>


      {/* ProductDetails */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage addToCart={addToCart} addToFavorite={addToFavorite} />} />

        <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        <Route path="/favorite" element={<Favorite FavoriteItems={FavoriteItems} removeFromFavorite={removeFromFavorite} />} />

        {/* addToFavorite */}


        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* Other routes */}
      </Routes>
      <div>
        <div className='chooseElement'>
          <h1>Why Choose Us?</h1>
          <p className='StoreElement'>LimeArt Retail Store is an one stop place for all soap and cosmetic making raw materials. Most of the products are manufactured in house at LimeArt unit by our cosmetic formulators and associates. Other products are sourced and imported from various part of India and other countries. We ensure that each product is quality tested by our quality assurance team before it is
            dispatched to the customer. Our vision is to support skin care startups and small
            business owners to invest in raw materials at very minimum quantity, best quality and affordable rates.</p>

        </div>
        <div id='Locationme'>
          <h1 className='nameLocation'>Location
          </h1>
          <div className='locationContainer'>
            {/* <LoadScript googleMapsApiKey="AIzaSyC-d-7RR_MQ45QLQXKSzOxviR2l11kN3wk&libraries=visualization">
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={10}
                center={defaultCenter}
              />
            </LoadScript> */}
            <div className='namecontainer'>
              <h1 className='nameElementlocation'>Address</h1>
              <p className="nameparagraph">LimeArt, No 3/1,therkku thottam,linganoor,pn
                {/* <br /> */}
                pudur post,vadavalli,coimbatore-641041</p>

              <h1 className='nameElementlocation'>Business Hours</h1>
              <p>Monday - Saturday</p>
              <p>11 a.m - 6 p.m</p>
              <p>Sunday

                Closed</p>
            </div>


          </div>
        </div>
        <div id='ContactUs'>
          <div className='contactusContainer'  >
            <h1 className="contactus">
              Contact Us
            </h1>
            <div className='Containerus'>
              <svg width="20" height="20" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path d="M13.332 11.426l-2.16-2.166c-.234-.232-.63-.225-.883.03l-1.357 1.357-.33-.182-.215-.12c-1.193-.663-1.882-1.13-2.732-1.983-.85-.854-1.315-1.54-1.982-2.743-.06-.11-.085-.155-.114-.205l-.19-.33.27-.27.73-.732.36-.36c.255-.256.262-.655.03-.888L2.598.668c-.23-.232-.628-.225-.88.03l-.55.54c-.186.275-.33.54-.433.802-.102.27-.165.525-.194.783-.263 2.19.75 4.225 3.59 7.07 1.724 1.728 3.414 2.77 5 3.278.555.18 1.057.277 1.5.314.267.023.455.02.554.01.267-.033.52-.097.778-.197.276-.108.534-.255.722-.4l.62-.582c.253-.255.26-.655.028-.89zM4.615 5.254l-.267.267-.354-.353.435-.247.12.216c.02.04.043.08.065.118z" stroke="#999" fill-rule="nonzero" fill="none" /></svg>
              <p className='textElementcontactus'> +91 80725 94041</p>
              <svg width="20" height="20" viewBox="0 0 16 12" xmlns="http://www.w3.org/2000/svg"><path d="M2 0h12c1.105 0 2 .895 2 2v8c0 1.105-.895 2-2 2H2c-1.105 0-2-.895-2-2V2C0 .895.895 0 2 0zm0 1c-.552 0-1 .448-1 1v8c0 .552.448 1 1 1h12c.552 0 1-.448 1-1V2c0-.552-.448-1-1-1H2zm.817 1.114L8 6.368l5.183-4.254c.213-.176.528-.145.703.07.176.212.145.527-.07.702L8.317 7.4c-.183.152-.45.152-.633 0l-5.5-4.514c-.214-.175-.245-.49-.07-.703.176-.214.49-.245.704-.07z" fill-rule="nonzero" fill="#999" /></svg>
              <p className='textElementcontactus'> Sales@limeart.in
              </p>
              <svg width="20" height="20" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg"><path d="M12 8.118V12c0 1.105-.895 2-2 2H2c-1.105 0-2-.895-2-2V4c0-1.105.895-2 2-2h3.946v1H2c-.552 0-1 .448-1 1v8c0 .552.448 1 1 1h8c.552 0 1-.448 1-1V8.118h1zM12.293 1H10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h3.5c.276 0 .5.224.5.5V4c0 .276-.224.5-.5.5S13 4.276 13 4V1.707L6.854 7.854c-.196.195-.512.195-.708 0-.195-.196-.195-.512 0-.708L12.293 1z" fill="#999" fill-rule="evenodd" /></svg>
              <p className='textElementcontactus'> limeart.in
              </p>
            </div>
            <p>Connect with us</p>
            <div className='socialMediaContainer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-facebook colorElement" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
              <p className='socialname'>Facebook</p>
              <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-instagram colorinst" viewBox="0 0 16 16">
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
              <p className='socialname'>@limeartindia</p>

            </div>
          </div>
        </div>
        <div className='footerBottom'>

          <div className='socialnameElement'>

            <svg height="25" viewBox="0 0 16 16" width="25" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 0H3C1 0 0 1 0 3v10c0 2 1 3 3 3h5V9H6V7h2V5c0-2 2-2 2-2h3v2h-3v2h3l-.5 2H10v7h3c2 0 3-1 3-3V3c0-2-1-3-3-3z"></path>
            </svg>
            <p class='shareElelement'>Share</p>

            <svg height="25" viewBox="0 0 16 16" width="25" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.634 6.81 14.857 1h-2.285l-3.99 4.433L5.143 1H0l5.817 7.525L0 15h2.286L6.88 9.878 10.857 15H16L9.634 6.81Zm-6.8-4.422H4.48l8.686 11.247H11.52L2.834 2.388Z"></path>
            </svg>
            <p class='shareElelement'>Share</p>

            <svg height="25" viewBox="0 0 16 16" width="25" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.99 0c-4.417 0-8 3.582-8 8 0 3.39 2.11 6.284 5.086 7.45-.07-.633-.133-1.604.028-2.295.145-.624.938-3.977.938-3.977s-.24-.48-.24-1.188c0-1.112.645-1.943 1.448-1.943.683 0 1.012.512 1.012 1.127 0 .686-.437 1.713-.663 2.664-.19.796.398 1.446 1.184 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.255-3.343-3.255-2.276 0-3.612 1.707-3.612 3.472 0 .688.265 1.425.595 1.826.065.08.075.15.055.23-.06.252-.195.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.835-4.84 5.287-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.74 4.976-4.152 4.976-.81 0-1.573-.42-1.834-.92l-.498 1.903c-.18.695-.668 1.566-.994 2.097.75.232 1.544.357 2.37.357 4.417 0 8-3.582 8-8s-3.583-8-8-8z"></path>
            </svg>


            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook colorElement" viewBox="0 0 16 16">
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg> */}
            <p class='shareElelement'>Pin</p>
          </div>


          <div className='namestermsContainer'>
            <Link className='nameElementpolicy'>
              <p className='conditionspolicy'>Terms & Conditions</p>
            </Link>
            <Link className='nameElementpolicy'>
              <p className='conditionspolicy'>Privacy Policy</p>
            </Link>
          </div>



          <div className='namestermsContainer'>
            <p className=''>@LimeArt Cover Image By</p>

            <Link className='nameElementpolicy'>
              <p className='conditionspolicy'>Magda Lukas</p>
            </Link>
            <p className='conditionspolicy'>    from</p>
            <Link className='nameElementpolicy'>
              <p className='conditionspolicy'>unsplash</p>

            </Link>
            <p className='conditionspolicy'>Report abuse</p>

          </div>

        </div>

      </div>
    </Router>
  );
}

export default App;






