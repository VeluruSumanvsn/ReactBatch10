import React from 'react';
import "./Navbar_header.css"
import logo from "../../../Assets/Nike.png"


const Navbar_header = () => {
return (
    <>
      <div className='navbar'>
        <div className='logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='navbar-content'>
          <ul>
            <li><a href='#'>Home</a></li>
            <li><a href="#shop">Shop</a></li>
            <li><a href='#loginpage'>Login</a></li>
            <li><a href="#newsletter">Newsletter</a></li>
          </ul>
        </div>
      </div>
    </>
)
}

export default Navbar_header;