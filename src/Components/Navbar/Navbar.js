import React from "react";
import logo from "../../Assets/FF.jpeg";
import "./Navbar.css";
import lightdarkmode from "../../Assets/brightness-and-contrast.png";
import github from "../../Assets/github.png";

const Navbar = () => {
  return (
    <>
      <div className="nav-bar">
        <div className="nav-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="nav-content">
          <ul>
            <li>Learn</li>
            <li>About Us</li>
            <li>Community</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="nav-imgs">
          <img src={lightdarkmode} />
          <a href="https://github.com/VeluruSumanvsn" target="_blank">
            <img src={github} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
