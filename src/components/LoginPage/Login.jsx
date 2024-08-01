import React from 'react'
import './Login.css'
export default function Login() {
  return (
    <>
      <div className="loginsSignup">
        <div className="loginSignup-container">
          <h1>Sign Up</h1>
          <div className="loginSignup-fields">
            <input type='text' placeholder='Your Name'/>
            <input type='email' placeholder='Your Email'/>
            <input type='password' placeholder='Password'/>
          </div>
          <button>Continue</button>
          <p className="loginSignup-login">Already have an account <span>Login here</span></p>
          <div className="loginSignup-agree">
            <input type='checkbox' name='' id='' />
            <p>By continuing i agree to the terms and policies</p>
          </div>
        </div>
      </div>
    </>
  )
}
