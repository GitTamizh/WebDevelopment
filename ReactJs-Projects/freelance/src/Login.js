import React, { useState } from 'react'
import Logo from "./imges/Logo.svg"
import { Link } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const [success, setSuccess] = useState('');

    
    const handleSubmit = (e) => {
        e.preventDefault();
        // checking inputs in email and password
        if(!email || !password){
            setErrors("Both fields are required") 
            return;
        }

        // checking the email and passwords are correct?
        if(email === "email@gmail.com" && password === "Password@1344"){
            setSuccess('Login Succesfull!')
            setErrors('')
        }else{
            setErrors('Invalid email or Password...')
            setSuccess('')
        }

    }
    return (
        <section>
            <div className="logo">
                <img src={Logo} alt="logo" />
            </div>
            <div className="login-container">
                {errors && <p className="login-error">{errors}</p>}
                {success && <p className="login-success">{success}</p>}
                <form className="login" onSubmit={handleSubmit}>
                    <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input 
                    type="email" 
                    id="email" 
                    value={email}
                    placeholder="Username or email"
                    onChange={(e) => setEmail(e.target.value)}
                    required/>
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
                    <button type="submit">Login</button>
                    </div>
                </form>
                <div className="forgot-Pass new-User">
                    <Link to="/forgot-password" >Forgot Password?</Link>
                    <p>New User <span><Link to="/sign-up">Sign Up</Link></span></p>
                </div> 
            </div>
        </section>
    )
}

export default Login