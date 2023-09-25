import React, { useState } from 'react'
import AuthenticationComponent from '../../Components/AuthenticationComponent'
import ForgotPasswordComponent from '../../Components/ForgotPasswordComponent'
import { BiAt } from "react-icons/bi"
import { RiLockPasswordFill } from "react-icons/ri"
import { FcGoogle } from "react-icons/fc"
import './style.scss'
import { useNavigate, Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../Store/userSlice'

const LoginPage = () => {

  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

  //state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //redux state
  const { loading, error } = useSelector((state) => state.user)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const userCredentials = {
      email, password
    }
    dispatch(loginUser(userCredentials)).then((result) => {
      if (result.payload) {
        setEmail('');
        setPassword('');
        navigate('/')
      }
    })
  }

  return (
    <AuthenticationComponent>
      <div className='content'>
        <h3>Welcome Back!</h3>
        <form className="login__form-content" onSubmit={handleLogin}>
          <div className="input-box">
            <BiAt />
            <input type="text" className='input'
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="">Email address</label>
          </div>

          <div className="input-box">
            <RiLockPasswordFill />
            <input type="password" className='input'
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <label htmlFor="">Password</label>
          </div>

          <div className='password-feature'>
            <div className='remember'>
              <input type='checkbox' id="remember"></input>
              <label htmlFor="remember">Remember me</label>
            </div>
            <div className='forgot' onClick={() => setShowForgotPasswordModal(true)}>Forgot password?</div>

            {showForgotPasswordModal ? <ForgotPasswordComponent onClose={() => setShowForgotPasswordModal(false)} /> : <></>}

          </div>

          <button className='btn-login'>{loading ? 'Loading ...' : 'Sign in'}</button>

          {error &&
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
              <span className="block sm:inline">{error}</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
              </span>
            </div>
          }

          <div className='btn-login btn-login-google'>
            <FcGoogle />
            <p>Sign in with Google</p>
          </div>

          <p className='text'>Don't have an account?
            <Link to='/register' className="text-swap"> Register</Link>
          </p>
        </form>
      </div>
    </AuthenticationComponent>
  )
}

export default LoginPage