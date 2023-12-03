import React from "react";
import "../HeaderComponentCSS/Newsletter.css";

const Newsletter = () => {
  return (
        <div className="address-bar card">
        <div className="address-bar-content card-body d-flex align-items-center flex-column justify-content-center flex-shrink-1">
          <h1 className="card-title h-100">Newsletter</h1>
          <h2 className="card-text">Get Latest News on Branded Shoes</h2>
          <div className=" address-bar-input card-body d-flex justify-content-center flex-row">
            <input type="email" placeholder="Your Email id" />
            <button className="btn btn-primary">Subscribe</button>
          </div>
            </div>
        </div>
  );
};

export default Newsletter;
