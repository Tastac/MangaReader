import "./styles.css";
import "../lib/auth";
import "./login";
import "react";

function loginChecker() {
  console.log("Login button clicked");
  // Implement your login logic here, e.g., validate credentials, call an API, etc.
}

function Login() {
  return (
    <div className="login-container">
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="password" name="password" />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}

export default function MangaSiteMockup() {
  return (
  <html lang="en">
    <body>
      <div className="app">
        <Login />
      </div>
    </body>
  </html>
  );
}