import React from 'react'
import { signInWithGoogle } from '../../firebase/firebase.utils'

// Styles
import './login-form.styles.scss'

const LoginForm = () => {
  return (
    <div className="login-form-wrapper">
      <div className="title">Login</div>

      <form autoComplete="off">
        <label htmlFor="loginEmail">Email Address*</label>
        <input type="email" name="email" id="loginEmail" />

        <label htmlFor="loginPassword">Password*</label>
        <input type="password" name="password" id="loginPassword" />

        <button type="submit" className="cutom-button">
          Login
        </button>

        <button
          type="submit"
          className="cutom-button"
          onClick={signInWithGoogle}
        >
          Sign in With Google
        </button>
      </form>
    </div>
  )
}

export default LoginForm