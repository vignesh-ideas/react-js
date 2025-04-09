import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../common/app-context";
import "../common/style.css";

const LoginForm = () => {
  const { login } = useContext(AppContext);
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const originalUsername = "vignesh@test.com";
    const originalPassword = "test123";

    if (username === originalUsername && password === originalPassword) {
      login();
      navigate("/todo");
    } else {
      alert("Invalid credentials");
    }

    setUsername("");
    setPassword("");
  };

  return (
    <div className="login">
      <h1>Login Form</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="email"
            id="username"
            placeholder="Enter your Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <input type="checkbox" id="remember-me" name="remember-me" />
          <label htmlFor="remember-me"> Remember Me</label>
        </div>
        <button type="submit" id="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
