import React from "react";
import "./Loginbanner.css";
import Logo from "../Logo/Logo"
import Loginform from "../Loginform/Loginform";

function Loginbanner() {
  return (
    <>
    <div className="login-banner" id="loginbanner">
      <Logo />
      <Loginform />
    </div>
      

    </>
  );
}

export default Loginbanner;
