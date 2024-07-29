import React, { useState } from 'react'
import "./ForgotPassword.css"
import { FaLock } from "react-icons/fa";
import Logo from "./imges/Logo.svg"

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  return (
      <section>
            <div className="logo">
                    <img src={Logo} alt="logo" />
            </div>
            <div className="forgot-Pass-Container">
              <h1>Forgot Password <FaLock /></h1>
              <p>Enter your email, phone, or username and we'll send you a link to get back into your account.</p>
              <form className="forgotPassword">
                <div className="input-group-forgot">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="forgotButton">
                  <button type="submit">Send Login Link</button>
                </div>
              </form>
            </div>
      </section>
  )
}

export default ForgotPassword