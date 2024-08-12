import React from 'react'
import Logo from './imges/Logo.svg'
import "./Register.css"
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useUser } from "./UserContext";

const Registration = () => {
    const { setUser } = useUser();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("");
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Ensure passwords match before making the API call
            if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
            }

            const response = await axios.post(
            "http://localhost:8080/users/saveRegisterDetails",
            {
            userName,
            name,
            mobile,
            email,
            password,
            }
            );

            setSuccess(response.data.message);
            if(response.data.message === "Sign Up Successfull"){
                setUser({ name: name, userName: userName });
            setTimeout(() => {
                navigate("/");
              }, 1000); // Delay for 1 seconds
            }

        } 
        catch (err) {
            const errorMessage =
                err.response && err.response.data && err.response.data.message
                    ? err.response.data.message
                    : err.message || "An error occurred";
            setError(errorMessage);
            // alert(errorMessage);
        }
        
    };

        return (
        <section>
            <div className="logo">
            <img src={Logo} alt="logo" />
            </div>
            <div className="register-Container">
                {error && <p className="login-error">{error}</p>}
                {success && <p className="login-success">{success}</p>}
            <form className="register" onSubmit={handleSubmit}>
                <div className="input-group-reg">
                <label htmlFor="userName">Username</label>
                <input
                    autoComplete="userName"
                    type="text"
                    id="userName"
                    name="userName"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                />
                </div>
                <div className="input-group-reg">
                <label htmlFor="name">Name</label>
                <input
                    autoComplete="name"
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                </div>
                <div className="input-group-reg">
                <label htmlFor="mobile">Mobile</label>
                <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                />
                </div>
                <div className="input-group-reg">
                <label htmlFor="email">Email</label>
                <input
                    autoComplete="email"
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                </div>
                <div className="input-group-reg">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                </div>
                <div className="input-group-reg">
                <label htmlFor="confirmpassword"> Confirm Password</label>
                <input
                    type="password"
                    id="confirmpassword"
                    name="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                />
                </div>
                <div className="loginPagebtns">
                <button type="submit">Sign Up</button>
                </div>
            </form>
            <div className="forgot-Pass new-User">
                <p>
                Already have account?{" "}
                <span>
                    <Link to="/">Login</Link>
                </span>
                </p>
            </div>
            </div>
        </section>
        );
}

export default Registration