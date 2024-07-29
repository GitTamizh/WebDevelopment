import React from 'react'
import Logo from './imges/Logo.svg'
import "./Register.css"
import { Link } from 'react-router-dom'
const Registration = () => {
    return (
        <section>
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="register-Container">
                    <form className="register">
                        <div className="input-group-reg">
                        <label htmlFor="fullName">Full Name</label>
                        <input 
                            type="text" 
                            name="name"
                            id="name"
                            required
                        />
                        </div>
                        <div className="input-group-reg">
                        <label htmlFor="mobileNumber">Mobile</label>
                        <input 
                            type="tel" 
                            id="mobile" 
                            name="mobile"  
                            required
                        />
                        </div>
                        <div className="input-group-reg">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            name="userName" 
                            required
                        />
                        </div>
                        <div className="input-group-reg">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            required
                        />
                        </div>
                        <div className="input-group-reg">
                        <label htmlFor="confirmpassword"> Confirm Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
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