import React from "react";
import "./Loginbanner.css";
import Herobanner from "../Herobanner/Herobanner"
import LoginSignup from "./LoginSignup";



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
