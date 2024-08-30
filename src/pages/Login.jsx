import React from "react";

function Login() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Lama Chat</span>
        <span className="logo">Login</span>
        <form action="">
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign In</button>
        </form>
        <p>You do not have account? Register</p>
      </div>
    </div>
  );
}

export default Login;
