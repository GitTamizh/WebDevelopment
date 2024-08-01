import React, { useEffect, useState } from 'react'
import Logo from "./imges/Logo.svg"
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";

    const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false)
    const {navigate} = useNavigate()
    useEffect(() => {});

    const handleSubmit = async (e) => {
          e.preventDefault();
          setError("");
          setLoading(true);

          if (!email || !password) {
            setError("Please fill in both fields.");
            setLoading(false);
            return;
          }
      try {
      const response = await axios.post('http://localhost:8080/users/userLogin', {
        email,
        password
      });

      if (response.data.message === "Login successful!") {
        <Link to="/homePage">Home</Link>;
        // Handle successful login here
      } else {
        console.error("Login failed:", response.data.message);
      }
    } catch (err) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false);
    }
 
        
  };

    return (
      <section>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <div className="login-container">
          {error && <p className="login-error">{error}</p>}
          {success && <p className="login-success">{success}</p>}
          <form className="login"
            onSubmit={handleSubmit}
          >
            <div className="input-group">
              <label htmlFor="email">UserName</label>
              <input
                autoComplete='email'
                type="email"
                id="email"
                value={email}
                placeholder="Username or email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="loginPagebtns">
            <button type="submit" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
                <Link to="/homePage"></Link>
              </button>
            </div>
          </form>
          <div className="forgot-Pass new-User">
            <Link to="/forgot-password">Forgot Password?</Link>
            <p>
              New User
              <span>
                <Link to="/sign-up">Sign Up</Link>
              </span>
            </p>
          </div>
        </div>
      </section>
    );
}

export default Login