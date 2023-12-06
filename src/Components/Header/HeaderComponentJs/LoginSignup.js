import React, { useState } from "react";
import Login from "../HeaderComponentJs/Login";
import Signup from "../HeaderComponentJs/Signup";
import "../HeaderComponentCSS/LoginSignup.css"

const LoginSignup = () => {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <>
      <div className="login-signup">
      {showLogin ? <Login /> : <Signup />}
         <div className="login-buttons">
            <button onClick={() => setShowLogin(true)}>Login</button>
            <p>or</p>
            <button onClick={() => setShowLogin(false)}>Sign Up</button>
          </div>
      </div>
    </>
  );
};

export default LoginSignup;
