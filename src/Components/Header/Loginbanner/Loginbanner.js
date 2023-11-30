import React from "react";
import "./Loginbanner.css";
import Herobanner from "../Herobanner/Herobanner"
import Loginform from "../Loginform/Loginform";

const Loginbanner = () => {
  return (
    <>
    <div className="login-banner" id="loginbanner">
      <Herobanner />
      <Loginform />
    </div>
      

    </>
  );
}

export default Loginbanner;
