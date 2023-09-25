import React, { useState } from 'react'
import AuthenticationComponent from '../../Components/AuthenticationComponent'
import { BiAt } from "react-icons/bi"
import { RiLockPasswordFill } from "react-icons/ri"
import { IoPersonCircleSharp } from "react-icons/io5"
import { useNavigate, Link } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux';
import { createUser, loginUser } from '../../Store/userSlice';


const RegisterPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [role, setRole] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.user);

  const handleSignup = async (e) => {
    e.preventDefault();

    const userCredentials = {
      fullName,
      email,
      password,
      role
    };

    dispatch(createUser(userCredentials));

    dispatch(loginUser(userCredentials)).then((result) => {
      if (result.payload) {
        navigate('/')
      }
    })

  };

  return (
    <AuthenticationComponent>
      <div className='content'>
        <h3>Create account</h3>
        <form className="login__form-content" onSubmit={handleSignup}>
          <div className="input-box">
            <IoPersonCircleSharp />
            <input type="text" className='input'
              placeholder=" "
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <label htmlFor="">Fullname</label>
          </div>

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

          <div className="input-box">
            <RiLockPasswordFill />
            <input type="password" className='input'
              placeholder=" "
              value={confirmPwd}
              onChange={(e) => setConfirmPwd(e.target.value)}
            />

            <label htmlFor="">Confirm Password</label>
          </div>

          <div className='dropdown'>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="">Choose option: Customer or Provider</option>
              <option value="customer">Customer</option>
              <option value="provider">Provider</option>
            </select>
          </div>

          <div className='password-feature'>
            <div className='remember'>
              <input type='checkbox' id="agree"></input>
              <label htmlFor="agree">I agree with <span className="text-swap">Terms</span> and <span className="text-swap">Privacy</span></label>
            </div>

          </div>

          <button type="submit" className='btn-login'>Sign up</button>

          <p className='text'>Already have an account?
            <Link to='/login' className="text-swap" > Log in</Link>
          </p>
        </form>
      </div>
    </AuthenticationComponent>
  )
}

export default RegisterPage