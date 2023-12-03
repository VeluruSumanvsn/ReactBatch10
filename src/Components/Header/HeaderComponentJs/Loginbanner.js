import React from "react";
import "../HeaderComponentCSS/Loginbanner.css";
import Herobanner from "../HeaderComponentJs/Herobanner"
import LoginSignup from "../HeaderComponentJs/LoginSignup";



const Loginbanner = () => {
  return (
    <>
    <div className="login-banner" id="loginbanner">
      <Herobanner />
      <LoginSignup />
    </div>
      

    </>
  );
}

export default Loginbanner;
