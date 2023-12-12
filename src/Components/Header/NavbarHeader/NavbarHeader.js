import React from "react";
import "./NavbarHeader.css";
import logo from "../../../Assets/Nike(white).png";
import cart_icon from "../../../Assets/carts.png";
import { Link } from "react-router-dom";

const NavbarHeader = ({size, setShow}) => {

  return (
    <>
      <div className="navbar" id="navbar">
        <div className="logo">
          <a href="#navbar"><img src={logo} alt="logo" /></a>
        </div>
        <div className="navbar-content">
          <ul>
            <li>
              <Link className='text-link' to='/'>Home</Link>
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
