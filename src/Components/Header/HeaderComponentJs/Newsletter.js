import React from "react";
import "../HeaderComponentCSS/Newsletter.css";

const Newsletter = () => {
  return (
    <div className="main-content">
      <h1>Newsletter</h1>
      <h2>Get Latest News on Branded Shoes</h2>
      <div className="input-content">
        <input type="email" placeholder="Your Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
