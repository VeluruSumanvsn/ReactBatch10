import React from "react";
import banner_image from "../../../Assets/Nike(caption).jpg";
import "../HeaderComponentCSS/Banner.css";

const Banner = () => {
  return (
    <>
      <div className="banner-container">
        <div className="leftcontent">
          <img src={banner_image} alt="shoes" />
        </div>
        <div className="rightcontent">
          <h1>One Stop Shop</h1>
          <h3>For Branded Shoes</h3>
        </div>
      </div>
    </>
  );
};
export default Banner;
