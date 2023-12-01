import React from "react";
import "./Logo.css";
import image from "../../../Assets/smily_img.png.jpg";

const Logo = () => {
  return (
    <>
      <div className="middle-content">
        <h3>Thank You For Visiting Us Have a Great Day </h3>
        <img src={image} alt="smiley" />
      </div>
    </>
  )
}
export default Logo;
