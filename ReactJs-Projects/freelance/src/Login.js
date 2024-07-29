import React, { useEffect, useState } from 'react'
import Logo from "./imges/Logo.svg"
import { Link } from 'react-router-dom'
import axios from "axios";

    const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false)

    useEffect(() => {});

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // checking inputs in email and password
        try {
            const response = await axios.post(
                "http://localhost:8080/users/userLogin", {
                    email, 
                    password}
            );
            setSuccess(response.data)
        } catch (err) {
            setError(`Error: ${err.message}`)
        }finally{
            setLoading(false)
        }
        
        if (!email || !password) {
        setError("Both fields are required");
        return;
        }

        // checking the email and passwords are correct?
        if (email && password) {
        setSuccess("Login Succesfull!");
        setError("");
        } else {
        setError("Invalid email or Password...");
        setSuccess("");
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
          <form
            action="http://localhost:8080/users/userLogin"
            method="post"
            className="login"
            onSubmit={handleSubmit}
          >
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
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