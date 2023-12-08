import React from "react";
import "./NavbarHeader.css";
import logo from "../../../Assets/nikelogo.jpg";
import cart_icon from "../../../Assets/carts.png";


const NavbarHeader = ({size, setShow}) => {

  return (
    <>
      <div className="navbar" id="navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar-content">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#shop" onClick={()=>{setShow(true)}}>Shop</a>
            </li>
            <li>
              <a href="#loginbanner">Login</a>
            </li>
            <li>
              <a href="#newsletter">Newsletter</a>
            </li>
          </ul>
          <div className="cart-icon" onClick={()=>{setShow(false)}}>
              <a href="#cart"><img src={cart_icon} alt="cart-icon" /></a>
          </div>
          <p>{size}</p>
        </div>
      </div>
    </>
  );
};



export default NavbarHeader;
