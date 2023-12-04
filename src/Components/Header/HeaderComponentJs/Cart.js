import React, { useEffect, useState } from "react";
import "../HeaderComponentCSS/Cart.css";
import { Link } from "react-router-dom";
import BillingForm from "../HeaderComponentJs/Billing";



const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const handlePrice = () => {
    var ans = 0;
    cart.map((item)=>{
      ans += item.new_price * item.amount
    })
    setPrice(ans);
  }


  const handleRemove = (id) => {
    const cartArray = cart.filter((item)=>item.id !== id);
    setCart(cartArray);
  }

  useEffect(()=>{
    handlePrice();
  })

  

 
  
  return (

    <>
      {cart.map((item, i) => {
        return (
          <>
            <div class="cart-container" id="cart" key={i}>
              <div class="cart-products">
                <div class="cart-products-image">
                  <img src={item.image} alt="NikeShoe" />
                </div>
                <div class="product-details">
                  <div className="inner-product-name">
                    <h1>Product</h1>
                    <p>{item.name}</p>
                  </div>
                  <div className="inner-product-price">
                    <h1>Price</h1>
                    <p>{item.new_price}</p>
                  </div>
                  <div className="inner-product-qty">
                    <h1>Quantity</h1>
                    <div>
                    <button onClick={()=>handleChange(item, -1)}>-</button>
                    <p>{item.amount}</p>
                    <button onClick={()=>handleChange(item, +1)}>+</button>
                    </div>
                  </div>
                </div>
                <button class="cart-remove-button" onClick={()=>handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          </>
        );
      })}

       
        <div className="totals">
          <p>Your Cart Total is</p>
          <p>Rs: {price}</p>
          <a href="#navbar"><p>Shop</p></a>
          <button><Link className='text-link' to='/billing'>Checkout</Link></button>
        </div>

    
    </>
  );
};

export default Cart;
