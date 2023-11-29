import React from "react";
import "./Loginform.css";

function Loginform() {
  return (
    <>
      <div class="login-container" id="loginpage">
        <h2>Login</h2>
        <form>
          <label for="username">Username:</label>
          <input type="text" id="username" placeholder="abc@gmail.com" name="username" required />

          <label for="password">Password:</label>
          <input type="password" id="password" placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;" name="password" required />

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Loginform;
