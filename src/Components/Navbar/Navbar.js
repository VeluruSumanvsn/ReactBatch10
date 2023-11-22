import React from "react";
import logo from "../Assets/logo192.png"
import "./Navbar.css"


const Navbar = () => {
  return (
    <>
    <div className="nav-bar">
      <div className="nav-logo">
        <img src={logo} alt="logo"/>
      </div>
      <div className="nav-content">
        <ul>
          <li>Home</li>
          <li>Downloads</li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="nav-search">
        <input type="text" placeholder="Search..."/>
      </div>
    </div>
  
  
  
  
  
   </>
  )
};

export default Navbar;
