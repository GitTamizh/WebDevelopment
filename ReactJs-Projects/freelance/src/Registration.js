import React from 'react'
import Logo from './imges/Logo.svg'
import "./Register.css"
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'react'

const Registration = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("");
    const [error, setError] = useState("")
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(
            "http://localhost:8080/users/saveRegisterDetails",
            {
                fullName,
                mobile,
                userName,
                password,
                confirmPassword,
            }
            );

            alert(response.data.message);
        } catch (err) {
            setError(
            "Error:",
            err.response ? err.response.data.message : err.message
            );
            // alert(err.response ? err.response.data.message : "An error occurred");
        }
        };

    return (
        <section>
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="register-Container">
                    <form className="register" onSubmit={handleSubmit}>
                        <div className="input-group-reg">
                        <label htmlFor="fullName">Full Name</label>
                        <input 
                            autoComplete='name'
                            type="text" 
                            name="name"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                        </div>
                        <div className="input-group-reg">
                        <label htmlFor="email">Email</label>
                        <input 
                            autoComplete='email'
                            type="email" 
                            id="email" 
                            name="email"  
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required

                        />
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
                        <label htmlFor="userName">Username</label>
                        <input 
                            autoComplete='userName'
                            type="text" 
                            id="userName" 
                            name="userName" 
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
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
                        <p>Already have account? <span><Link to="/">Login</Link></span></p>
                    </div> 
                </div>
        </section>
    )
}

export default Registration