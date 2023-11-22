import React from "react";

function Footer(){
    return(
        <div>
            <h1>Login Page</h1>
            <form>
                <label for="username">Username:</label>
                <input type="text" name="username" placeholder="Enter username" />
                <label for="Password">Password:</label>
                <input type="text" name="password" placeholder="Enter password" />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Footer;