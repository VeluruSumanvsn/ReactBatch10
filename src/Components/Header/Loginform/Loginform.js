import React from "react";
import "./Loginform.css";

function Loginform() {
  return (
    <>
      <div class="login-container">
        <h2>Login</h2>
        <form action="/your-login-endpoint" method="post">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" required />

          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Loginform;
