import React, { useState } from "react";
import Login from "../Login/Login";
import Signup from "../Login/Signup";
import "./LoginSignup.css"

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
