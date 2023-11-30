import React from "react";
import "./Herobanner.css";
import hero_image from "../../../Assets/hero_image.png";

const Herobanner = () => {
  return (
    <>
      <div className="hero-banner">
        <div className="left-content">
          <img src={hero_image} alt="hero-image" />
        </div>
        <div className="right-content">
          <h1>Login to get Exclusive Deals</h1>
          <h3>Get 15% off For every Deal</h3>
        </div>
      </div>
    </>
  );
};
export default Herobanner;
