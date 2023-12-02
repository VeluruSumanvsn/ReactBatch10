import React from "react";
import "../Login/Login.css";

function Signup() {
  return (
    <>
      <div class="login-container">
        <h2>Sign Up</h2>
        <form>
          <label for="username">Username:</label>
          <input type="text" id="username" placeholder="abc@gmail.com" name="username" required />

          <label for="password">Password:</label>
          <input type="password" id="password" placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;" name="password" required />

          <label for="password">Re-Enter Password:</label>
          <input type="password" id="password" placeholder="&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;&#8226;" name="password" required />

          <button type="submit">Sign Up</button>
        </form>
      </div>
    </>
  );
}

export default Signup;
