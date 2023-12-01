import React from 'react';
import "./Cart.css" 
import shoe_picture from "../../../Assets/product1.jpg"

const Cart = () => {
return (
    <>
     <div class="cart-container">
      <div class="cart-products">
       <div class="cart-products-image">
       <img src={shoe_picture} alt="Nike Shoe"/>
      </div>
      <div class="product-details">
        <h3>Product Name</h3>
        <p>Price: 2000</p>
        <p>Quantity: 1</p>
      </div>
      <button class="cart-remove-button">Remove</button>
      </div>
      </div>
    </>
);
};

export default Cart;